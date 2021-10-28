/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HouseholdExpense_expense = {
    readonly id: string;
    readonly name: string | null;
    readonly price: number | null;
    readonly owner: {
        readonly id: string;
        readonly username: string | null;
    } | null;
    readonly " $refType": "HouseholdExpense_expense";
};
export type HouseholdExpense_expense$data = HouseholdExpense_expense;
export type HouseholdExpense_expense$key = {
    readonly " $data"?: HouseholdExpense_expense$data;
    readonly " $fragmentRefs": FragmentRefs<"HouseholdExpense_expense">;
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HouseholdExpense_expense",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
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
  "type": "Expense",
  "abstractKey": null
};
})();
(node as any).hash = '602b908f756406ec800180d8855b3cb7';
export default node;
