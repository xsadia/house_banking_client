import { ReactNode } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};
