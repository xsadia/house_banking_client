/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ExpenseChart_query = {
    readonly expenses: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string | null;
                readonly price: number | null;
            } | null;
        } | null> | null;
    } | null;
    readonly me: {
        readonly monthlyWage: number | null;
    } | null;
    readonly " $refType": "ExpenseChart_query";
};
export type ExpenseChart_query$data = ExpenseChart_query;
export type ExpenseChart_query$key = {
    readonly " $data"?: ExpenseChart_query$data;
    readonly " $fragmentRefs": FragmentRefs<"ExpenseChart_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExpenseChart_query",
  "selections": [
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
                  "name": "name",
                  "storageKey": null
                },
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
      "storageKey": "userExpenses(first:2147483647)"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "me",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "monthlyWage",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'ec4c995bf8797279277c94d11f2cc348';
export default node;
