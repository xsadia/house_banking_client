/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HouseholdTitle_query = {
    readonly houseHoldById: {
        readonly id: string;
        readonly houseHoldName: string | null;
        readonly totalRevenue: number | null;
        readonly houseChief: {
            readonly username: string | null;
        } | null;
        readonly residentNumber: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                } | null;
            } | null> | null;
        } | null;
        readonly expenses: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly price: number | null;
                } | null;
            } | null> | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"HouseholdInvite_code">;
    } | null;
    readonly " $refType": "HouseholdTitle_query";
};
export type HouseholdTitle_query$data = HouseholdTitle_query;
export type HouseholdTitle_query$key = {
    readonly " $data"?: HouseholdTitle_query$data;
    readonly " $fragmentRefs": FragmentRefs<"HouseholdTitle_query">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "HouseholdTitle_query",
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
        (v0/*: any*/),
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
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "houseChief",
          "plural": false,
          "selections": [
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
          "alias": "residentNumber",
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
                    (v0/*: any*/)
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
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "price",
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
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HouseholdInvite_code"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'a95840d0851d70307657c1cc41ab0177';
export default node;
