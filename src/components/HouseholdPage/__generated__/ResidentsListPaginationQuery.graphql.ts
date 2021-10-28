/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ResidentsListPaginationQueryVariables = {
    after?: string | null;
    first?: number | null;
    id: string;
};
export type ResidentsListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ResidentsList_query">;
};
export type ResidentsListPaginationQuery = {
    readonly response: ResidentsListPaginationQueryResponse;
    readonly variables: ResidentsListPaginationQueryVariables;
};



/*
query ResidentsListPaginationQuery(
  $after: String
  $first: Int = 10
  $id: ID!
) {
  ...ResidentsList_query_2HEEH6
}

fragment Resident_resident on User {
  id
  username
}

fragment ResidentsList_query_2HEEH6 on Query {
  houseHoldById(id: $id) {
    houseChief {
      id
    }
    residents(first: $first, after: $after) {
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
    "name": "after"
  },
  {
    "defaultValue": 10,
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
    "name": "ResidentsListPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ResidentsList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ResidentsListPaginationQuery",
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
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "houseChief",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
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
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "username",
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
            "key": "ResidentsList_residents",
            "kind": "LinkedHandle",
            "name": "residents"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8118b2300a14ec8417efc0751c9cc99b",
    "id": null,
    "metadata": {},
    "name": "ResidentsListPaginationQuery",
    "operationKind": "query",
    "text": "query ResidentsListPaginationQuery(\n  $after: String\n  $first: Int = 10\n  $id: ID!\n) {\n  ...ResidentsList_query_2HEEH6\n}\n\nfragment Resident_resident on User {\n  id\n  username\n}\n\nfragment ResidentsList_query_2HEEH6 on Query {\n  houseHoldById(id: $id) {\n    houseChief {\n      id\n    }\n    residents(first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          id\n          ...Resident_resident\n          __typename\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '41c952f80138de1410ce9232bb0040aa';
export default node;
