import styled from "styled-components";

type CheckboxProps = {
  onclickFn: () => void;
  isChecked: boolean;
  title: string;
};

const Container = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h4`
  margin: 4px 0 0 4px;
  color: var(--blue);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

const CheckboxInput = styled.input`
  cursor: pointer;
`;

export const Checkbox = ({ isChecked, onclickFn, title }: CheckboxProps) => {
  return (
    <Container onClick={onclickFn}>
      <CheckboxInput type="checkbox" onChange={() => {}} checked={isChecked} />
      <Title>{title}</Title>
    </Container>
  );
};
