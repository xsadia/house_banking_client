/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HouseholdPageQueryVariables = {
    id: string;
};
export type HouseholdPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"HouseholdTitle_query" | "ResidentsList_query" | "HouseholdExpenseList_query">;
};
export type HouseholdPageQuery = {
    readonly response: HouseholdPageQueryResponse;
    readonly variables: HouseholdPageQueryVariables;
};



/*
query HouseholdPageQuery(
  $id: ID!
) {
  ...HouseholdTitle_query
  ...ResidentsList_query
  ...HouseholdExpenseList_query
}

fragment HouseholdExpenseList_query on Query {
  houseHoldById(id: $id) {
    houseHoldExpenses: expenses(first: 5) {
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

fragment HouseholdInvite_code on HouseHold {
  id
  inviteCode
}

fragment HouseholdTitle_query on Query {
  houseHoldById(id: $id) {
    id
    houseHoldName
    totalRevenue
    ...HouseholdInvite_code
    houseChief {
      username
      id
    }
    residentNumber: residents {
      edges {
        node {
          id
        }
      }
    }
    expenses {
      edges {
        node {
          price
          id
        }
      }
    }
  }
}

fragment Resident_resident on User {
  id
  username
}

fragment ResidentsList_query on Query {
  houseHoldById(id: $id) {
    houseChief {
      id
    }
    residents(first: 10) {
      edges {
        cursor
        node {
          id
          ...Resident_resident
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
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v3 = [
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
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
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
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HouseholdPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "HouseholdTitle_query"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ResidentsList_query"
      },
      {
        "args": null,
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
    "name": "HouseholdPageQuery",
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
          (v1/*: any*/),
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
            "kind": "ScalarField",
            "name": "totalRevenue",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "inviteCode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "houseChief",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "residentNumber",
            "args": null,
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "residents",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
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
                    "concreteType": "Expense",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v1/*: any*/)
                    ],
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
            "args": (v5/*: any*/),
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
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": "residents(first:10)"
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ResidentsList_residents",
            "kind": "LinkedHandle",
            "name": "residents"
          },
          {
            "alias": "houseHoldExpenses",
            "args": (v9/*: any*/),
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
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Expense",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      {
                        "alias": "owner",
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "responsable",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v8/*: any*/),
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
            "storageKey": "expenses(first:5)"
          },
          {
            "alias": "houseHoldExpenses",
            "args": (v9/*: any*/),
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
            "selections": (v3/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4cf869c1b0686e3ac357cb5bfba36c7d",
    "id": null,
    "metadata": {},
    "name": "HouseholdPageQuery",
    "operationKind": "query",
    "text": "query HouseholdPageQuery(\n  $id: ID!\n) {\n  ...HouseholdTitle_query\n  ...ResidentsList_query\n  ...HouseholdExpenseList_query\n}\n\nfragment HouseholdExpenseList_query on Query {\n  houseHoldById(id: $id) {\n    houseHoldExpenses: expenses(first: 5) {\n      edges {\n        cursor\n        node {\n          id\n          ...HouseholdExpense_expense\n          __typename\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n    residentOptions: residents {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment HouseholdExpense_expense on Expense {\n  id\n  name\n  price\n  owner: responsable {\n    id\n    username\n  }\n}\n\nfragment HouseholdInvite_code on HouseHold {\n  id\n  inviteCode\n}\n\nfragment HouseholdTitle_query on Query {\n  houseHoldById(id: $id) {\n    id\n    houseHoldName\n    totalRevenue\n    ...HouseholdInvite_code\n    houseChief {\n      username\n      id\n    }\n    residentNumber: residents {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    expenses {\n      edges {\n        node {\n          price\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment Resident_resident on User {\n  id\n  username\n}\n\nfragment ResidentsList_query on Query {\n  houseHoldById(id: $id) {\n    houseChief {\n      id\n    }\n    residents(first: 10) {\n      edges {\n        cursor\n        node {\n          id\n          ...Resident_resident\n          __typename\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '1a02c452bf0f3acd2d79652f0f1e3257';
export default node;
