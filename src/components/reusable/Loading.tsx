import { CgSpinner } from "react-icons/cg";
import styled from "styled-components";

const SpinnerContainer = styled.span`
  color: var(--blue);
  font-size: 32px;
  svg {
    animation-name: spin;
    animation-duration: 700ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export function Loading() {
  return (
    <SpinnerContainer>
      <CgSpinner />
    </SpinnerContainer>
  );
}
