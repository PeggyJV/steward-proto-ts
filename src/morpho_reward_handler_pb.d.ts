// package: steward.v4
// file: morpho_reward_handler.proto

import * as jspb from "google-protobuf";

export class Claim extends jspb.Message {
  getClaimable(): string;
  setClaimable(value: string): void;

  clearProofList(): void;
  getProofList(): Array<Uint8Array | string>;
  getProofList_asU8(): Array<Uint8Array>;
  getProofList_asB64(): Array<string>;
  setProofList(value: Array<Uint8Array | string>): void;
  addProof(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Claim.AsObject;
  static toObject(includeInstance: boolean, msg: Claim): Claim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Claim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Claim;
  static deserializeBinaryFromReader(message: Claim, reader: jspb.BinaryReader): Claim;
}

export namespace Claim {
  export type AsObject = {
    claimable: string,
    proofList: Array<Uint8Array | string>,
  }
}

