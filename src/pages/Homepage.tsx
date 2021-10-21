import styled from "styled-components";
import { Layout } from "../components/Layout";

const Container = styled.div`
  margin-top: 64px;
`;

export const Homepage = () => {
  return (
    <Layout>
      <Container>
        <h1>Homepage</h1>
        <div>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            eos aspernatur iusto est quasi tenetur in voluptates earum quisquam,
            provident sapiente alias quam minima neque, quod qui eveniet nihil
            blanditiis?
          </h2>
        </div>
      </Container>
    </Layout>
  );
};
