/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateHouseHoldInput = {
    houseHoldName: string;
    clientMutationId?: string | null;
};
export type HouseholdListMutationVariables = {
    input: CreateHouseHoldInput;
    connections: Array<string>;
};
export type HouseholdListMutationResponse = {
    readonly CreateHouseHoldMutation: {
        readonly houseHold: {
            readonly node: {
                readonly id: string;
                readonly houseHoldName: string | null;
                readonly houseChief: {
                    readonly id: string;
                } | null;
                readonly residents: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly id: string;
                        } | null;
                    } | null> | null;
                } | null;
            } | null;
        } | null;
        readonly error: string | null;
    } | null;
};
export type HouseholdListMutation = {
    readonly response: HouseholdListMutationResponse;
    readonly variables: HouseholdListMutationVariables;
};



/*
mutation HouseholdListMutation(
  $input: CreateHouseHoldInput!
) {
  CreateHouseHoldMutation(input: $input) {
    houseHold {
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "HouseHoldEdge",
  "kind": "LinkedField",
  "name": "houseHold",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HouseHold",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "houseHoldName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "houseChief",
          "plural": false,
          "selections": (v4/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "UserConnection",
          "kind": "LinkedField",
          "name": "residents",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "UserEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "User",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": (v4/*: any*/),
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HouseholdListMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateHouseHoldPayload",
        "kind": "LinkedField",
        "name": "CreateHouseHoldMutation",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "MutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "HouseholdListMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateHouseHoldPayload",
        "kind": "LinkedField",
        "name": "CreateHouseHoldMutation",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "houseHold",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23704f2bf75982f4067ef8ab117211d9",
    "id": null,
    "metadata": {},
    "name": "HouseholdListMutation",
    "operationKind": "mutation",
    "text": "mutation HouseholdListMutation(\n  $input: CreateHouseHoldInput!\n) {\n  CreateHouseHoldMutation(input: $input) {\n    houseHold {\n      node {\n        id\n        houseHoldName\n        houseChief {\n          id\n        }\n        residents {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dc303d884227e5d2db7a8ca914dc278f';
export default node;
