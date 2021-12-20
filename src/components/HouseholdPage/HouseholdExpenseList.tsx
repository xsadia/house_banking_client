import { graphql } from "babel-plugin-relay/macro";
import { useMutation, usePaginationFragment } from "react-relay";
import { HouseholdExpenseList_query$key } from "./__generated__/HouseholdExpenseList_query.graphql";
import { HouseholdExpenseListPaginationQuery } from "./__generated__/HouseholdExpenseListPaginationQuery.graphql";
import styled, { css } from "styled-components";
import { HouseholdExpense } from "./HouseholdExpense";
import { useCallback } from "react";
import { Loading } from "../reusable/Loading";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  HouseholdExpenseListMutationResponse,
  CreateExpenseInput,
  HouseholdExpenseListMutation,
} from "./__generated__/HouseholdExpenseListMutation.graphql";
import { toast } from "react-toastify";
import { useRouteMatch } from "react-router";

type HouseholdExpenseListProps = {
  query: HouseholdExpenseList_query$key;
};

type HouseHoldParams = {
  id: string;
};

type LoadMoreButtonProps = {
  isLoadingNext: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  overflow: auto;
  width: fit-content;
  min-width: 300px;
  height: fit-content;
  max-height: 283px;
  border: 3px solid var(--blue);
  margin-top: 8px;
`;

const LoadMoreButton = styled.button<LoadMoreButtonProps>`
  min-height: 36px;
  height: fit-content;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-top: 3px solid var(--blue);
  background: none;
  padding: 8px;
  color: var(--blue);

  ${(props) =>
    !props.isLoadingNext &&
    css`
      transition: background 0.3s;

      &:hover {
        color: #fff;
        background: var(--blue);
      }
    `}
`;

const ExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const InputContainer = styled.div`
  display: flex;
`;

const ExpenseNameInput = styled.input`
  width: 130px;
  flex: 1;
  font-size: 1rem;
  padding: 8px;
  border: none;
  outline: none;
  border-right: 3px solid var(--blue);
`;

const ExpenseCostInput = styled.input`
  width: 60px;
  flex: 1;
  font-size: 1rem;
  padding-left: 4px;
  border: none;
  outline: none;
`;

const SubmitButton = styled.button`
  background: #fff;
  color: var(--blue);
  border: none;
  border-top: 3px solid var(--blue);
  border-bottom: 3px solid var(--blue);
  height: fit-content;
  min-height: 36px;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: var(--blue);
    color: #fff;
  }
`;

export const HouseholdExpenseList = ({ query }: HouseholdExpenseListProps) => {
  const { params } = useRouteMatch<HouseHoldParams>();

  const { data, loadNext, isLoadingNext, hasNext } = usePaginationFragment<
    HouseholdExpenseListPaginationQuery,
    HouseholdExpenseList_query$key
  >(
    graphql`
      fragment HouseholdExpenseList_query on Query
      @argumentDefinitions(
        first: { type: Int, defaultValue: 5 }
        after: { type: String }
      )
      @refetchable(queryName: "HouseholdExpenseListPaginationQuery") {
        houseHoldById(id: $id) {
          houseHoldExpenses: expenses(first: $first, after: $after)
            @connection(key: "HouseholdExpenseList_houseHoldExpenses") {
            __id
            edges {
              cursor
              node {
                id
                ...HouseholdExpense_expense
              }
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
          residentOptions: residents {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `,
    query
  );

  const [commitExpense, isPending] =
    useMutation<HouseholdExpenseListMutation>(graphql`
      mutation HouseholdExpenseListMutation(
        $input: CreateExpenseInput!
        $connections: [ID!]!
      ) {
        CreateExpenseMutation(input: $input) {
          expense @prependEdge(connections: $connections) {
            cursor
            node {
              id
              name
              price
              responsable {
                id
                username
              }
            }
          }
          error
        }
      }
    `);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: null,
      houseHoldId: params.id,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name required"),
      price: Yup.number().min(0.01).required("price required"),
    }),
    onSubmit: ({ name, price, houseHoldId }: CreateExpenseInput) => {
      commitExpense({
        variables: {
          connections: [data.houseHoldById.houseHoldExpenses.__id],
          input: {
            name,
            price,
            houseHoldId,
          },
        },
        onCompleted: ({
          CreateExpenseMutation,
        }: HouseholdExpenseListMutationResponse) => {
          if (CreateExpenseMutation?.error) {
            toast(CreateExpenseMutation.error, {
              type: "error",
              position: "top-right",
              autoClose: 5000,
              theme: "colored",
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            formik.resetForm();
            return;
          }
          return;
        },
        onError: () => {
          toast("Unexpected error", {
            type: "error",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          formik.resetForm();
          return;
        },
      });
      formik.setFieldValue("price", 0);
      formik.setFieldValue("name", "");
    },
  });

  const loadMore = useCallback(() => {
    if (isLoadingNext) {
      return;
    }

    loadNext(5);
  }, [loadNext, isLoadingNext]);

  return (
    <Container>
      <ExpenseForm onSubmit={formik.handleSubmit}>
        <InputContainer>
          <ExpenseNameInput
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Name"
            type="text"
          />
          <ExpenseCostInput
            placeholder="Price"
            id="price"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
            min={0}
            step={0.01}
            type="number"
          />
        </InputContainer>
        <SubmitButton disabled={isPending} type="submit">
          {isPending ? <Loading /> : "Submit"}
        </SubmitButton>
      </ExpenseForm>
      {data.houseHoldById.houseHoldExpenses.edges.map(({ node }) => (
        <HouseholdExpense
          key={node.id}
          query={node}
          residents={data.houseHoldById.residentOptions.edges}
        />
      ))}
      {hasNext ? (
        <LoadMoreButton
          isLoadingNext={isLoadingNext}
          disabled={isLoadingNext}
          onClick={() => loadMore()}
        >
          {isLoadingNext ? <Loading /> : "Load more"}
        </LoadMoreButton>
      ) : null}
    </Container>
  );
};
