import { graphql } from "babel-plugin-relay/macro";
import { useCallback } from "react";
import { usePaginationFragment } from "react-relay";
import styled, { css } from "styled-components";
import { Loading } from "../reusable/Loading";
import { Expense } from "./Expense";
import { ExpenseListPaginationQuery } from "./__generated__/ExpenseListPaginationQuery.graphql";
import { ExpenseList_query$key } from "./__generated__/ExpenseList_query.graphql";

type ExpenseListProps = {
  query: ExpenseList_query$key;
};

type LoadMoreButtonProps = {
  isLoadingNext: boolean;
};

const ListContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 450px;
  border: 2px solid var(--blue);
  height: 110px;
  overflow: auto;
`;

const LoadMoreButton = styled.button<LoadMoreButtonProps>`
  min-height: 36px;
  height: fit-content;
  font-weight: 600;
  font-size: 1rem;
  border: none;
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

export const ExpenseList = ({ query }: ExpenseListProps) => {
  const { data, loadNext, isLoadingNext, hasNext } = usePaginationFragment<
    ExpenseListPaginationQuery,
    ExpenseList_query$key
  >(
    graphql`
      fragment ExpenseList_query on Query
      @argumentDefinitions(
        first: { type: Int, defaultValue: 4 }
        after: { type: String }
      )
      @refetchable(queryName: "ExpenseListPaginationQuery") {
        userExpenses(first: $first, after: $after)
          @connection(key: "ExpenseList_query_userExpenses") {
          edges {
            cursor
            node {
              id
              ...Expense_expense
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `,
    query
  );

  const loadMore = useCallback(() => {
    if (isLoadingNext) {
      return;
    }

    loadNext(4);
  }, [loadNext, isLoadingNext]);

  return (
    <ListContainer>
      {data?.userExpenses?.edges?.map(({ node }) => (
        <Expense key={node.id} query={node} />
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
    </ListContainer>
  );
};
