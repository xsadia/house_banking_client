/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HouseholdExpenseListPaginationQueryVariables = {
    after?: string | null;
    first?: number | null;
    id: string;
};
export type HouseholdExpenseListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"HouseholdExpenseList_query">;
};
export type HouseholdExpenseListPaginationQuery = {
    readonly response: HouseholdExpenseListPaginationQueryResponse;
    readonly variables: HouseholdExpenseListPaginationQueryVariables;
};



/*
query HouseholdExpenseListPaginationQuery(
  $after: String
  $first: Int = 5
  $id: ID!
) {
  ...HouseholdExpenseList_query_2HEEH6
}

fragment HouseholdExpenseList_query_2HEEH6 on Query {
  houseHoldById(id: $id) {
    houseHoldExpenses: expenses(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          ...HouseholdExpense_expense
          __typename
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    residentOptions: residents {
      edges {
        node {
          id
        }
      }
    }
    id
  }
}

fragment HouseholdExpense_expense on Expense {
  id
  name
  price
  owner: responsable {
    id
    username
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 5,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HouseholdExpenseListPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "HouseholdExpenseList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HouseholdExpenseListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "concreteType": "HouseHold",
        "kind": "LinkedField",
        "name": "houseHoldById",
        "plural": false,
        "selections": [
          {
            "alias": "houseHoldExpenses",
            "args": (v1/*: any*/),
            "concreteType": "ExpenseConnection",
            "kind": "LinkedField",
            "name": "expenses",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ExpenseEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
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
                      (v2/*: any*/),
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
                        "alias": "owner",
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "responsable",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "username",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasPreviousPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__id",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          },
          {
            "alias": "houseHoldExpenses",
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "HouseholdExpenseList_houseHoldExpenses",
            "kind": "LinkedHandle",
            "name": "expenses"
          },
          {
            "alias": "residentOptions",
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
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3b311898ecfc62fc340dc2d924b971e5",
    "id": null,
    "metadata": {},
    "name": "HouseholdExpenseListPaginationQuery",
    "operationKind": "query",
    "text": "query HouseholdExpenseListPaginationQuery(\n  $after: String\n  $first: Int = 5\n  $id: ID!\n) {\n  ...HouseholdExpenseList_query_2HEEH6\n}\n\nfragment HouseholdExpenseList_query_2HEEH6 on Query {\n  houseHoldById(id: $id) {\n    houseHoldExpenses: expenses(first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          id\n          ...HouseholdExpense_expense\n          __typename\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n    residentOptions: residents {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment HouseholdExpense_expense on Expense {\n  id\n  name\n  price\n  owner: responsable {\n    id\n    username\n  }\n}\n"
  }
};
})();
(node as any).hash = '96f08ae92fb724939a7b110c48c9a2c9';
export default node;
