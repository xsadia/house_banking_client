import { graphql } from "babel-plugin-relay/macro";
import { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import styled from "styled-components";
import { ExpenseChart } from "../components/Homepage/ExpenseChart";
import { ExpenseList } from "../components/Homepage/ExpenseList";
import { HouseholdList } from "../components/Homepage/HouseholdList";
import { Loading } from "../components/reusable/Loading";
import { Layout } from "../components/UI/Layout";
import { Homepage_homepageQuery } from "./__generated__/Homepage_homepageQuery.graphql";

const Container = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 440px;
`;

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Homepage = () => {
  const query = useLazyLoadQuery<Homepage_homepageQuery>(
    graphql`
      query Homepage_homepageQuery {
        ...HouseholdList_query
        ...ExpenseList_query
        ...ExpenseChart_query
      }
    `,
    {},
    { fetchPolicy: "store-or-network" }
  );
  return (
    <Layout>
      <Container>
        <Suspense fallback={<Loading />}>
          <ExpenseChart query={query} />
        </Suspense>
        <ListsContainer>
          <Suspense fallback={<Loading />}>
            <HouseholdList query={query} />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <ExpenseList query={query} />
          </Suspense>
        </ListsContainer>
      </Container>
    </Layout>
  );
};
