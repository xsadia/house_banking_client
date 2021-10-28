/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateExpenseInput = {
    houseHoldId: string;
    name: string;
    price: number;
    clientMutationId?: string | null;
};
export type HouseholdExpenseListMutationVariables = {
    input: CreateExpenseInput;
    connections: Array<string>;
};
export type HouseholdExpenseListMutationResponse = {
    readonly CreateExpenseMutation: {
        readonly expense: {
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly name: string | null;
                readonly price: number | null;
                readonly responsable: {
                    readonly id: string;
                    readonly username: string | null;
                } | null;
            } | null;
        } | null;
        readonly error: string | null;
    } | null;
};
export type HouseholdExpenseListMutation = {
    readonly response: HouseholdExpenseListMutationResponse;
    readonly variables: HouseholdExpenseListMutationVariables;
};



/*
mutation HouseholdExpenseListMutation(
  $input: CreateExpenseInput!
) {
  CreateExpenseMutation(input: $input) {
    expense {
      cursor
      node {
        id
        name
        price
        responsable {
          id
          username
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
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "ExpenseEdge",
  "kind": "LinkedField",
  "name": "expense",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Expense",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "price",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "responsable",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "username",
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
v5 = {
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
    "name": "HouseholdExpenseListMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateExpensePayload",
        "kind": "LinkedField",
        "name": "CreateExpenseMutation",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/)
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
    "name": "HouseholdExpenseListMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateExpensePayload",
        "kind": "LinkedField",
        "name": "CreateExpenseMutation",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "expense",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9170f8200614c18ef5c402e67b2c57b0",
    "id": null,
    "metadata": {},
    "name": "HouseholdExpenseListMutation",
    "operationKind": "mutation",
    "text": "mutation HouseholdExpenseListMutation(\n  $input: CreateExpenseInput!\n) {\n  CreateExpenseMutation(input: $input) {\n    expense {\n      cursor\n      node {\n        id\n        name\n        price\n        responsable {\n          id\n          username\n        }\n      }\n    }\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = '8893827eff92ac6d3e790103ae819cc2';
export default node;
