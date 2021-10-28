import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import styled from "styled-components";
import { Household_household$key } from "./__generated__/Household_household.graphql";
import { FaHouseUser, FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";

type HouseholdProps = {
  query: Household_household$key;
  userId: string;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 2px solid var(--blue);
  &:last-child {
    border: none;
  }

  a {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      color: var(--blue);
    }
  }
`;

const HouseName = styled.h1`
  font-size: 1rem;
  text-transform: capitalize;
`;

const HouseResidents = styled.h2`
  font-size: 1rem;
`;

const UserCountContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 1rem;
    margin: 0 4px 4px 0;
    color: var(--blue);
  }
`;

export const Household = ({ query, userId }: HouseholdProps) => {
  const data = useFragment<Household_household$key>(
    graphql`
      fragment Household_household on HouseHold {
        id
        houseHoldName
        houseChief {
          id
        }
        residents {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
    query
  );
  return (
    <Container>
      <Link to={`/household/${data.id}`}>
        <HouseName>{data.houseHoldName}</HouseName>
        <UserCountContainer>
          {userId === data.houseChief.id ? <FaCrown /> : null}
          <FaHouseUser />
          <HouseResidents>{data.residents.edges.length}</HouseResidents>
        </UserCountContainer>
      </Link>
    </Container>
  );
};
