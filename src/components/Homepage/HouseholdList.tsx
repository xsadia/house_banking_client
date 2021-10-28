import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import styled from "styled-components";
import { Household } from "./Household";
import { HouseholdList_query$key } from "./__generated__/HouseholdList_query.graphql";

type HouseholdListProps = {
  query: HouseholdList_query$key;
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 450px;
  border: 2px solid var(--blue);
  height: fit-content;
`;

export const HouseholdList = ({ query }: HouseholdListProps) => {
  const response = useFragment<HouseholdList_query$key>(
    graphql`
      fragment HouseholdList_query on Query {
        userHouseHolds(first: 3)
          @connection(key: "HouseholdList_userHouseHolds") {
          edges {
            node {
              id
              ...Household_household
            }
          }
        }
        me {
          id
        }
      }
    `,
    query
  );

  return (
    <ListContainer>
      {response?.userHouseHolds?.edges?.map(({ node }) => (
        <Household userId={response.me.id} key={node.id} query={node} />
      ))}
    </ListContainer>
  );
};
