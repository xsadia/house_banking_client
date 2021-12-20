import { graphql } from "babel-plugin-relay/macro";
import { FormEvent, useState } from "react";
import { useFragment, useMutation } from "react-relay";
import styled from "styled-components";
import { Household } from "./Household";
import { HouseholdList_query$key } from "./__generated__/HouseholdList_query.graphql";
import {
  HouseholdListMutation,
  HouseholdListMutationResponse,
} from "./__generated__/HouseholdListMutation.graphql";
import { toast } from "react-toastify";

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

const HouseholdForm = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const InputContainer = styled.div`
  display: flex;
`;

const HouseholdNameInput = styled.input`
  /* width: 130px; */
  flex: 1;
  font-size: 1rem;
  padding: 8px;
  border: none;
  outline: none;
  /* border-right: 3px solid var(--blue); */
`;

const SubmitButton = styled.button`
  background: #fff;
  color: var(--blue);
  border: none;
  border-top: 2px solid var(--blue);
  border-bottom: 2px solid var(--blue);
  height: fit-content;
  min-height: 36px;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: var(--blue);
    color: #fff;
  }
`;

export const HouseholdList = ({ query }: HouseholdListProps) => {
  const [householdName, setHouseholdName] = useState<string>("");

  const response = useFragment<HouseholdList_query$key>(
    graphql`
      fragment HouseholdList_query on Query {
        userHouseHolds(first: 3)
          @connection(key: "HouseholdList_userHouseHolds") {
          __id
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

  const [commitHousehold, isPending] =
    useMutation<HouseholdListMutation>(graphql`
      mutation HouseholdListMutation(
        $input: CreateHouseHoldInput!
        $connections: [ID!]!
      ) {
        CreateHouseHoldMutation(input: $input) {
          houseHold @appendEdge(connections: $connections) {
            node {
              id
              houseHoldName
              houseChief {
                id
              }
              residents {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
          error
        }
      }
    `);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (householdName === "" || householdName === " ") {
      return;
    }

    commitHousehold({
      variables: {
        connections: [response.userHouseHolds.__id],
        input: {
          houseHoldName: householdName,
        },
      },
      onCompleted: ({
        CreateHouseHoldMutation,
      }: HouseholdListMutationResponse) => {
        if (CreateHouseHoldMutation.error) {
          toast(CreateHouseHoldMutation.error, {
            type: "error",
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setHouseholdName("");

          return;
        }

        setHouseholdName("");
        return;
      },
    });
  };

  return (
    <ListContainer>
      <HouseholdForm onSubmit={handleSubmit}>
        <InputContainer>
          <HouseholdNameInput
            value={householdName}
            onChange={(e) => setHouseholdName(e.target.value)}
            placeholder="Household name"
          />
        </InputContainer>
        <SubmitButton>Create</SubmitButton>
      </HouseholdForm>
      {response?.userHouseHolds?.edges?.map(({ node }) => (
        <Household userId={response.me.id} key={node.id} query={node} />
      ))}
    </ListContainer>
  );
};
