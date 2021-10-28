/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Homepage_homepageQueryVariables = {};
export type Homepage_homepageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"HouseholdList_query" | "ExpenseList_query" | "ExpenseChart_query">;
};
export type Homepage_homepageQuery = {
    readonly response: Homepage_homepageQueryResponse;
    readonly variables: Homepage_homepageQueryVariables;
};



/*
query Homepage_homepageQuery {
  ...HouseholdList_query
  ...ExpenseList_query
  ...ExpenseChart_query
}

fragment ExpenseChart_query on Query {
  expenses: userExpenses(first: 2147483647) {
    edges {
      node {
        id
        name
        price
      }
    }
  }
  me {
    monthlyWage
    id
  }
}

fragment ExpenseList_query on Query {
  userExpenses(first: 4) {
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

fragment HouseholdList_query on Query {
  userHouseHolds(first: 3) {
    edges {
      node {
        id
        ...Household_household
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  me {
    id
  }
}

fragment Household_household on HouseHold {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
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
  "name": "houseHoldName",
  "storageKey": null
},
v3 = [
  (v1/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Homepage_homepageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "HouseholdList_query"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ExpenseList_query"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ExpenseChart_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Homepage_homepageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "HouseHoldConnection",
        "kind": "LinkedField",
        "name": "userHouseHolds",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HouseHoldEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "HouseHold",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "houseChief",
                    "plural": false,
                    "selections": (v3/*: any*/),
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
                            "selections": (v3/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
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
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "userHouseHolds(first:3)"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "HouseholdList_userHouseHolds",
        "kind": "LinkedHandle",
        "name": "userHouseHolds"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "monthlyWage",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v8/*: any*/),
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
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Expense",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HouseHold",
                    "kind": "LinkedField",
                    "name": "belongsTo",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
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
              (v7/*: any*/),
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
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "userExpenses(first:4)"
      },
      {
        "alias": null,
        "args": (v8/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "ExpenseList_query_userExpenses",
        "kind": "LinkedHandle",
        "name": "userExpenses"
      },
      {
        "alias": "expenses",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 2147483647
          }
        ],
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
                "concreteType": "Expense",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "userExpenses(first:2147483647)"
      }
    ]
  },
  "params": {
    "cacheID": "7cd46c36a0c37ef1d54a3767de855977",
    "id": null,
    "metadata": {},
    "name": "Homepage_homepageQuery",
    "operationKind": "query",
    "text": "query Homepage_homepageQuery {\n  ...HouseholdList_query\n  ...ExpenseList_query\n  ...ExpenseChart_query\n}\n\nfragment ExpenseChart_query on Query {\n  expenses: userExpenses(first: 2147483647) {\n    edges {\n      node {\n        id\n        name\n        price\n      }\n    }\n  }\n  me {\n    monthlyWage\n    id\n  }\n}\n\nfragment ExpenseList_query on Query {\n  userExpenses(first: 4) {\n    edges {\n      cursor\n      node {\n        id\n        ...Expense_expense\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment Expense_expense on Expense {\n  id\n  name\n  price\n  belongsTo {\n    houseHoldName\n    id\n  }\n}\n\nfragment HouseholdList_query on Query {\n  userHouseHolds(first: 3) {\n    edges {\n      node {\n        id\n        ...Household_household\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  me {\n    id\n  }\n}\n\nfragment Household_household on HouseHold {\n  id\n  houseHoldName\n  houseChief {\n    id\n  }\n  residents {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '479104d533134ca5d5c589bc274db7d4';
export default node;
