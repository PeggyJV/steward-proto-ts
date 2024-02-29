// package: steward.v4
// file: aura_erc4626.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class AuraERC4626AdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasGetRewards(): boolean;
  clearGetRewards(): void;
  getGetRewards(): AuraERC4626AdaptorV1.GetRewards | undefined;
  setGetRewards(value?: AuraERC4626AdaptorV1.GetRewards): void;

  getFunctionCase(): AuraERC4626AdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuraERC4626AdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: AuraERC4626AdaptorV1): AuraERC4626AdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuraERC4626AdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuraERC4626AdaptorV1;
  static deserializeBinaryFromReader(message: AuraERC4626AdaptorV1, reader: jspb.BinaryReader): AuraERC4626AdaptorV1;
}

export namespace AuraERC4626AdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    getRewards?: AuraERC4626AdaptorV1.GetRewards.AsObject,
  }

  export class GetRewards extends jspb.Message {
    getAuraPool(): string;
    setAuraPool(value: string): void;

    getClaimExtras(): boolean;
    setClaimExtras(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRewards.AsObject;
    static toObject(includeInstance: boolean, msg: GetRewards): GetRewards.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRewards, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRewards;
    static deserializeBinaryFromReader(message: GetRewards, reader: jspb.BinaryReader): GetRewards;
  }

  export namespace GetRewards {
    export type AsObject = {
      auraPool: string,
      claimExtras: boolean,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    GET_REWARDS = 2,
  }
}

export class AuraERC4626AdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<AuraERC4626AdaptorV1>;
  setCallsList(value: Array<AuraERC4626AdaptorV1>): void;
  addCalls(value?: AuraERC4626AdaptorV1, index?: number): AuraERC4626AdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuraERC4626AdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: AuraERC4626AdaptorV1Calls): AuraERC4626AdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuraERC4626AdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuraERC4626AdaptorV1Calls;
  static deserializeBinaryFromReader(message: AuraERC4626AdaptorV1Calls, reader: jspb.BinaryReader): AuraERC4626AdaptorV1Calls;
}

export namespace AuraERC4626AdaptorV1Calls {
  export type AsObject = {
    callsList: Array<AuraERC4626AdaptorV1.AsObject>,
  }
}

