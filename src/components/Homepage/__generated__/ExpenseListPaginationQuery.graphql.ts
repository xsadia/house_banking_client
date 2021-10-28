/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ExpenseListPaginationQueryVariables = {
    after?: string | null;
    first?: number | null;
};
export type ExpenseListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ExpenseList_query">;
};
export type ExpenseListPaginationQuery = {
    readonly response: ExpenseListPaginationQueryResponse;
    readonly variables: ExpenseListPaginationQueryVariables;
};



/*
query ExpenseListPaginationQuery(
  $after: String
  $first: Int = 4
) {
  ...ExpenseList_query_2HEEH6
}

fragment ExpenseList_query_2HEEH6 on Query {
  userExpenses(first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        ...Expense_expense
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
}

fragment Expense_expense on Expense {
  id
  name
  price
  belongsTo {
    houseHoldName
    id
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
    "defaultValue": 4,
    "kind": "LocalArgument",
    "name": "first"
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
    "name": "ExpenseListPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ExpenseList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExpenseListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ExpenseConnection",
        "kind": "LinkedField",
        "name": "userExpenses",
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
                    "alias": null,
                    "args": null,
                    "concreteType": "HouseHold",
                    "kind": "LinkedField",
                    "name": "belongsTo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "houseHoldName",
                        "storageKey": null
                      },
                      (v2/*: any*/)
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
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "ExpenseList_query_userExpenses",
        "kind": "LinkedHandle",
        "name": "userExpenses"
      }
    ]
  },
  "params": {
    "cacheID": "9c11859cf55f3a96c61d9c6f4005c2c0",
    "id": null,
    "metadata": {},
    "name": "ExpenseListPaginationQuery",
    "operationKind": "query",
    "text": "query ExpenseListPaginationQuery(\n  $after: String\n  $first: Int = 4\n) {\n  ...ExpenseList_query_2HEEH6\n}\n\nfragment ExpenseList_query_2HEEH6 on Query {\n  userExpenses(first: $first, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        ...Expense_expense\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment Expense_expense on Expense {\n  id\n  name\n  price\n  belongsTo {\n    houseHoldName\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c02c62c1def3af1bd5e9b3ccb8262e85';
export default node;
