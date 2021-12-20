import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import styled from "styled-components";
import { HouseholdExpense_expense$key } from "./__generated__/HouseholdExpense_expense.graphql";

type Node = {
  id: string[];
};

type UserEdge = {
  node: Node;
};

type ExpenseProps = {
  query: HouseholdExpense_expense$key;
  residents: any[];
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  transition: background 0.2s;
  color: var(--blue);

  &:hover {
    background: var(--blue);
    color: white;
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExpenseName = styled.h1`
  color: inherit;
  font-size: 1rem;
  text-transform: capitalize;
`;

const ExpenseCost = styled.h2`
  font-size: 1rem;
  color: inherit;
`;

const ExpenseOwner = styled.h2`
  font-size: 0.85rem;
  text-transform: capitalize;
`;

export const HouseholdExpense = ({ query }: ExpenseProps) => {
  const response = useFragment<HouseholdExpense_expense$key>(
    graphql`
      fragment HouseholdExpense_expense on Expense {
        id
        name
        price
        owner: responsable {
          id
          username
        }
      }
    `,
    query
  );

  return (
    <Container>
      <NameContainer>
        <ExpenseName>{response.name}</ExpenseName>
        {response.owner?.username ? (
          <ExpenseOwner>{response.owner.username}</ExpenseOwner>
        ) : null}
      </NameContainer>
      <ExpenseCost>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(response.price / 100)}
      </ExpenseCost>
    </Container>
  );
};
