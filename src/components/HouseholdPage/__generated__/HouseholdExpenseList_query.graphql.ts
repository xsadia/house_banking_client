/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import HouseholdExpenseListPaginationQuery from "./HouseholdExpenseListPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type HouseholdExpenseList_query = {
    readonly houseHoldById: {
        readonly houseHoldExpenses: {
            readonly __id: string;
            readonly edges: ReadonlyArray<{
                readonly cursor: string;
                readonly node: {
                    readonly id: string;
                    readonly " $fragmentRefs": FragmentRefs<"HouseholdExpense_expense">;
                } | null;
            } | null> | null;
            readonly pageInfo: {
                readonly hasNextPage: boolean;
                readonly hasPreviousPage: boolean;
                readonly startCursor: string | null;
                readonly endCursor: string | null;
            };
        } | null;
        readonly residentOptions: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                } | null;
            } | null> | null;
        } | null;
    } | null;
    readonly " $refType": "HouseholdExpenseList_query";
};
export type HouseholdExpenseList_query$data = HouseholdExpenseList_query;
export type HouseholdExpenseList_query$key = {
    readonly " $data"?: HouseholdExpenseList_query$data;
    readonly " $fragmentRefs": FragmentRefs<"HouseholdExpenseList_query">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "houseHoldById",
  "houseHoldExpenses"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
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
      "kind": "RootArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": HouseholdExpenseListPaginationQuery
    }
  },
  "name": "HouseholdExpenseList_query",
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
          "args": null,
          "concreteType": "ExpenseConnection",
          "kind": "LinkedField",
          "name": "__HouseholdExpenseList_houseHoldExpenses_connection",
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
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "HouseholdExpense_expense"
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
                    (v1/*: any*/)
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '96f08ae92fb724939a7b110c48c9a2c9';
export default node;
