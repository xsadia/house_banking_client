import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import styled from "styled-components";
import { FaCrown } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoArrowUpCircleSharp, IoArrowDownCircleSharp } from "react-icons/io5";
import { HouseholdTitle_query$key } from "./__generated__/HouseholdTitle_query.graphql";

type HouseholdTitleProps = {
  query: HouseholdTitle_query$key;
};

const Container = styled.div`
  display: flex;
  //align-items: center;
  flex-direction: column;
  width: 68.75rem;
  height: 140px;
  border-left: 16px solid #0553a1;
  border-right: 16px solid #0553a1;
  border-top: 4px solid #0553a1;
  border-bottom: 4px solid #0553a1;
  padding: 8px;
  background: var(--blue);
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  text-transform: capitalize;
`;

const HouseChief = styled.h1`
  text-transform: capitalize;
  color: #fff;

  svg {
    color: gold;
    font-size: 24px;
    margin-right: 4px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const RevenueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TotalRevenue = styled.h2`
  display: flex;
  color: #05ab31;
  -webkit-text-fill-color: #05ab31; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;

  svg {
    background: #fff;
    border-radius: 50%;
    font-size: 1.25rem;
    margin-right: 4px;
    margin-top: 2px;
  }
`;

const TotalExpenses = styled.h2`
  color: red;
  display: flex;
  -webkit-text-fill-color: red; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;

  svg {
    background: #fff;
    border-radius: 50%;
    font-size: 1.25rem;
    margin-right: 4px;
    margin-top: 2px;
  }
`;

const ResidentCount = styled.h2`
  color: #fff;
  display: flex;

  svg {
    font-size: 1.25rem;
    margin-left: 4px;
  }
`;

export const HouseholdTitle = ({ query }: HouseholdTitleProps) => {
  const response = useFragment<HouseholdTitle_query$key>(
    graphql`
      fragment HouseholdTitle_query on Query {
        houseHoldById(id: $id) {
          id
          houseHoldName
          totalRevenue
          inviteCode
          houseChief {
            username
          }
          residentNumber: residents {
            edges {
              node {
                id
              }
            }
          }
          expenses {
            edges {
              node {
                price
              }
            }
          }
        }
      }
    `,
    query
  );

  const expenseSum = (): number => {
    let expenses = 0;
    response.houseHoldById.expenses.edges.map(
      ({ node }) => (expenses += node.price)
    );
    return expenses;
  };

  return (
    <Container>
      <TitleContainer>
        <Title>{response.houseHoldById.houseHoldName}</Title>
        <HouseChief>
          <FaCrown />
          {response.houseHoldById.houseChief.username}
        </HouseChief>
      </TitleContainer>
      <InfoContainer>
        <RevenueContainer>
          <TotalRevenue>
            <IoArrowUpCircleSharp />
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(response.houseHoldById.totalRevenue / 100)}
          </TotalRevenue>
          <TotalExpenses>
            <IoArrowDownCircleSharp />
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(expenseSum() / 100)}
          </TotalExpenses>
        </RevenueContainer>
        <ResidentCount>
          {response.houseHoldById.residentNumber.edges.length}
          <FiUsers />
        </ResidentCount>
      </InfoContainer>
    </Container>
  );
};
