import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import styled from "styled-components";
import { Expense_expense$key } from "./__generated__/Expense_expense.graphql";

type ExpenseProps = {
  query: Expense_expense$key;
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
`;

const ExpensePrice = styled.h1`
  font-size: 1rem;
`;

const ExpenseHousehold = styled.h1`
  font-size: 1rem;
`;

const ExpenseName = styled.h1`
  font-size: 1rem;
  text-transform: capitalize;
`;

const ExpenseNameHouseholdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export const Expense = ({ query }: ExpenseProps) => {
  const data = useFragment<Expense_expense$key>(
    graphql`
      fragment Expense_expense on Expense {
        id
        name
        price
        belongsTo {
          houseHoldName
        }
      }
    `,
    query
  );
  return (
    <Container>
      <ExpensePrice>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(data.price / 100)}
      </ExpensePrice>
      <ExpenseNameHouseholdContainer>
        <ExpenseName>{data.name}</ExpenseName>
        <ExpenseHousehold>{data.belongsTo.houseHoldName}</ExpenseHousehold>
      </ExpenseNameHouseholdContainer>
    </Container>
  );
};
