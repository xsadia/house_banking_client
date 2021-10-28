import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import styled from "styled-components";
import { Resident_resident$key } from "./__generated__/Resident_resident.graphql";
import { FaCrown } from "react-icons/fa";

type ResidentProps = {
  query: Resident_resident$key;
  isChief: boolean;
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

const ResidentName = styled.h1`
  color: inherit;
  font-size: 1.5rem;
  text-transform: capitalize;
`;

export const Resident = ({ query, isChief }: ResidentProps) => {
  const response = useFragment<Resident_resident$key>(
    graphql`
      fragment Resident_resident on User {
        id
        username
      }
    `,
    query
  );
  return (
    <Container>
      <ResidentName>{response.username}</ResidentName>
      {isChief ? (
        <>
          <FaCrown />
        </>
      ) : null}
    </Container>
  );
};
