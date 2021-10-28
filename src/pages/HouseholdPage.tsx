import { graphql } from "babel-plugin-relay/macro";
import { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import { useRouteMatch } from "react-router";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { HouseholdExpenseList } from "../components/HouseholdPage/HouseholdExpenseList";
import { HouseholdTitle } from "../components/HouseholdPage/HouseholdTitle";
import { ResidentsList } from "../components/HouseholdPage/ResidentsList";
import { Loading } from "../components/reusable/Loading";
import { Layout } from "../components/UI/Layout";
import { HouseholdPageQuery } from "./__generated__/HouseholdPageQuery.graphql";
import "react-toastify/dist/ReactToastify.css";

type HouseHoldParams = {
  id: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
  margin-bottom: 24px;
  /* background: red; */
  /* width: 100%; */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* const ListContainer = styled.div`
  display: flex;
`; */

export const HouseholdPage = () => {
  const { params } = useRouteMatch<HouseHoldParams>();
  const query = useLazyLoadQuery<HouseholdPageQuery>(
    graphql`
      query HouseholdPageQuery($id: ID!) {
        ...HouseholdTitle_query
        ...ResidentsList_query
        ...HouseholdExpenseList_query
      }
    `,
    { id: params.id },
    { fetchPolicy: "store-or-network" }
  );
  return (
    <Layout>
      <Container>
        <ContentContainer>
          <Suspense fallback={<Loading />}>
            <HouseholdTitle query={query} />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <ResidentsList query={query} />
          </Suspense>
          <HouseholdExpenseList query={query} />
        </ContentContainer>
      </Container>
      <ToastContainer />
    </Layout>
  );
};
