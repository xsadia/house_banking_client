import { graphql } from "babel-plugin-relay/macro";
import { useFragment, useMutation } from "react-relay";
import { HouseholdInvite_code$key } from "./__generated__/HouseholdInvite_code.graphql";
import { HouseholdInviteMutation } from "./__generated__/HouseholdInviteMutation.graphql";
import { useRouteMatch } from "react-router";
import { BiRefresh } from "react-icons/bi";
import { IoMdCopy } from "react-icons/io";
import styled from "styled-components";
import { toast } from "react-toastify";

type HouseholdInviteProps = {
  query: HouseholdInvite_code$key;
};

type HouseholdParams = {
  id: string;
};

const InviteContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const RefreshInviteButton = styled.button`
  border: none;
  background: none;
  display: flex;
  margin-left: 2px;

  &:hover {
    filter: brightness(0.8);
    animation-name: spin;
    animation-duration: 700ms;
    animation-iteration-count: initial;
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

  svg {
    font-size: 1.5rem;
    color: #fff;
  }
`;

const InviteCode = styled.h3`
  display: flex;
  font-size: 1rem;
  color: #fff;
  background: #0553a1;
  padding: 6px;
  border: 2px solid #fff;
  cursor: pointer;
  transition: border 0.2s;

  &:hover {
    border: 2px solid #05ab31;
  }

  svg {
    font-size: 1.1rem;
    margin-right: 2px;
  }
`;

export const HouseholdInvite = ({ query }: HouseholdInviteProps) => {
  const { params } = useRouteMatch<HouseholdParams>();

  const response = useFragment<HouseholdInvite_code$key>(
    graphql`
      fragment HouseholdInvite_code on HouseHold {
        id
        inviteCode
      }
    `,
    query
  );

  const [commit] = useMutation<HouseholdInviteMutation>(graphql`
    mutation HouseholdInviteMutation($input: GenerateInviteInput!) {
      GenerateInviteMutation(input: $input) {
        houseHold {
          id
          inviteCode
        }

        error
      }
    }
  `);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `placeholder.com/invite/${response.inviteCode}`
    );

    toast("copied to clipboard", {
      type: "success",
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "colored",
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return;
  };

  return (
    <InviteContainer>
      <InviteCode onClick={() => copyToClipboard()}>
        <IoMdCopy />
        {`placeholder.com/invite/${response.inviteCode}`}
      </InviteCode>
      <RefreshInviteButton
        onClick={() => {
          commit({
            variables: {
              input: {
                houseHoldId: params.id,
                isExpirable: false,
              },
            },
          });
        }}
      >
        <BiRefresh />
      </RefreshInviteButton>
    </InviteContainer>
  );
};
