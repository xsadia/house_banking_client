/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Resident_resident = {
    readonly id: string;
    readonly username: string | null;
    readonly " $refType": "Resident_resident";
};
export type Resident_resident$data = Resident_resident;
export type Resident_resident$key = {
    readonly " $data"?: Resident_resident$data;
    readonly " $fragmentRefs": FragmentRefs<"Resident_resident">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Resident_resident",
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
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '25622370b613de0b9b1c1a7eeb6521bb';
export default node;
