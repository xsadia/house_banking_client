import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { ResidentsList_query$key } from "./__generated__/ResidentsList_query.graphql";
import { ResidentsListPaginationQuery } from "./__generated__/ResidentsListPaginationQuery.graphql";
import { Resident } from "./Resident";
import styled from "styled-components";

type ResidentsListProps = {
  query: ResidentsList_query$key;
};

const Container = styled.div`
  max-height: 400px;
  height: fit-content;
  width: fit-content;
  min-width: 300px;
  border: 3px solid var(--blue);
  align-self: flex-end;
  margin-top: 1rem;
  overflow: auto;
`;

export const ResidentsList = ({ query }: ResidentsListProps) => {
  const { data } = usePaginationFragment<
    ResidentsListPaginationQuery,
    ResidentsList_query$key
  >(
    graphql`
      fragment ResidentsList_query on Query
      @argumentDefinitions(
        first: { type: Int, defaultValue: 10 }
        after: { type: String }
      )
      @refetchable(queryName: "ResidentsListPaginationQuery") {
        houseHoldById(id: $id) {
          houseChief {
            id
          }
          residents(first: $first, after: $after)
            @connection(key: "ResidentsList_residents") {
            edges {
              cursor
              node {
                id
                ...Resident_resident
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
      }
    `,
    query
  );
  return (
    <Container>
      {data.houseHoldById.residents.edges.map(({ node }) => (
        <Resident
          isChief={data.houseHoldById.houseChief.id === node.id}
          key={node.id}
          query={node}
        />
      ))}
    </Container>
  );
};
