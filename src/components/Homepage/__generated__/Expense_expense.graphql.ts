/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Expense_expense = {
    readonly id: string;
    readonly name: string | null;
    readonly price: number | null;
    readonly belongsTo: {
        readonly houseHoldName: string | null;
    } | null;
    readonly " $refType": "Expense_expense";
};
export type Expense_expense$data = Expense_expense;
export type Expense_expense$key = {
    readonly " $data"?: Expense_expense$data;
    readonly " $fragmentRefs": FragmentRefs<"Expense_expense">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Expense_expense",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Expense",
  "abstractKey": null
};
(node as any).hash = '60d5c57d7d4369e6653fd5da3ce6cfa3';
export default node;
