/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type GenerateInviteInput = {
    isExpirable: boolean;
    houseHoldId: string;
    clientMutationId?: string | null;
};
export type HouseholdInviteMutationVariables = {
    input: GenerateInviteInput;
};
export type HouseholdInviteMutationResponse = {
    readonly GenerateInviteMutation: {
        readonly houseHold: {
            readonly id: string;
            readonly inviteCode: string | null;
        } | null;
        readonly error: string | null;
    } | null;
};
export type HouseholdInviteMutation = {
    readonly response: HouseholdInviteMutationResponse;
    readonly variables: HouseholdInviteMutationVariables;
};



/*
mutation HouseholdInviteMutation(
  $input: GenerateInviteInput!
) {
  GenerateInviteMutation(input: $input) {
    houseHold {
      id
      inviteCode
    }
    error
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "GenerateInvitePayload",
    "kind": "LinkedField",
    "name": "GenerateInviteMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HouseHold",
        "kind": "LinkedField",
        "name": "houseHold",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "inviteCode",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HouseholdInviteMutation",
    "selections": (v1/*: any*/),
    "type": "MutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HouseholdInviteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4c2dbebff85accc77e05c5e5b32e388c",
    "id": null,
    "metadata": {},
    "name": "HouseholdInviteMutation",
    "operationKind": "mutation",
    "text": "mutation HouseholdInviteMutation(\n  $input: GenerateInviteInput!\n) {\n  GenerateInviteMutation(input: $input) {\n    houseHold {\n      id\n      inviteCode\n    }\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd975d2f4ab9cbe1da627e4773285eaec';
export default node;
