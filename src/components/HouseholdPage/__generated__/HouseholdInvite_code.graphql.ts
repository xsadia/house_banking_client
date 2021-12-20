/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HouseholdInvite_code = {
    readonly id: string;
    readonly inviteCode: string | null;
    readonly " $refType": "HouseholdInvite_code";
};
export type HouseholdInvite_code$data = HouseholdInvite_code;
export type HouseholdInvite_code$key = {
    readonly " $data"?: HouseholdInvite_code$data;
    readonly " $fragmentRefs": FragmentRefs<"HouseholdInvite_code">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HouseholdInvite_code",
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
      "name": "inviteCode",
      "storageKey": null
    }
  ],
  "type": "HouseHold",
  "abstractKey": null
};
(node as any).hash = '3e55dce6342c5c36f61158d0c44e7a19';
export default node;
