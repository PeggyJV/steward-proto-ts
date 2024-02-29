// package: steward.v4
// file: morpho_blue_supply.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";
import * as common_pb from "./common_pb";

export class MorphoBlueSupplyAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasLendToMorphoBlue(): boolean;
  clearLendToMorphoBlue(): void;
  getLendToMorphoBlue(): MorphoBlueSupplyAdaptorV1.LendToMorphoBlue | undefined;
  setLendToMorphoBlue(value?: MorphoBlueSupplyAdaptorV1.LendToMorphoBlue): void;

  hasWithdrawFromMorphoBlue(): boolean;
  clearWithdrawFromMorphoBlue(): void;
  getWithdrawFromMorphoBlue(): MorphoBlueSupplyAdaptorV1.WithdrawFromMorphoBlue | undefined;
  setWithdrawFromMorphoBlue(value?: MorphoBlueSupplyAdaptorV1.WithdrawFromMorphoBlue): void;

  getFunctionCase(): MorphoBlueSupplyAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoBlueSupplyAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoBlueSupplyAdaptorV1): MorphoBlueSupplyAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoBlueSupplyAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoBlueSupplyAdaptorV1;
  static deserializeBinaryFromReader(message: MorphoBlueSupplyAdaptorV1, reader: jspb.BinaryReader): MorphoBlueSupplyAdaptorV1;
}

export namespace MorphoBlueSupplyAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    lendToMorphoBlue?: MorphoBlueSupplyAdaptorV1.LendToMorphoBlue.AsObject,
    withdrawFromMorphoBlue?: MorphoBlueSupplyAdaptorV1.WithdrawFromMorphoBlue.AsObject,
  }

  export class LendToMorphoBlue extends jspb.Message {
    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): common_pb.MarketParams | undefined;
    setMarket(value?: common_pb.MarketParams): void;

    getAssets(): string;
    setAssets(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LendToMorphoBlue.AsObject;
    static toObject(includeInstance: boolean, msg: LendToMorphoBlue): LendToMorphoBlue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LendToMorphoBlue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LendToMorphoBlue;
    static deserializeBinaryFromReader(message: LendToMorphoBlue, reader: jspb.BinaryReader): LendToMorphoBlue;
  }

  export namespace LendToMorphoBlue {
    export type AsObject = {
      market?: common_pb.MarketParams.AsObject,
      assets: string,
    }
  }

  export class WithdrawFromMorphoBlue extends jspb.Message {
    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): common_pb.MarketParams | undefined;
    setMarket(value?: common_pb.MarketParams): void;

    getAssets(): string;
    setAssets(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromMorphoBlue.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromMorphoBlue): WithdrawFromMorphoBlue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromMorphoBlue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromMorphoBlue;
    static deserializeBinaryFromReader(message: WithdrawFromMorphoBlue, reader: jspb.BinaryReader): WithdrawFromMorphoBlue;
  }

  export namespace WithdrawFromMorphoBlue {
    export type AsObject = {
      market?: common_pb.MarketParams.AsObject,
      assets: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    LEND_TO_MORPHO_BLUE = 2,
    WITHDRAW_FROM_MORPHO_BLUE = 3,
  }
}

export class MorphoBlueSupplyAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<MorphoBlueSupplyAdaptorV1>;
  setCallsList(value: Array<MorphoBlueSupplyAdaptorV1>): void;
  addCalls(value?: MorphoBlueSupplyAdaptorV1, index?: number): MorphoBlueSupplyAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoBlueSupplyAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoBlueSupplyAdaptorV1Calls): MorphoBlueSupplyAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoBlueSupplyAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoBlueSupplyAdaptorV1Calls;
  static deserializeBinaryFromReader(message: MorphoBlueSupplyAdaptorV1Calls, reader: jspb.BinaryReader): MorphoBlueSupplyAdaptorV1Calls;
}

export namespace MorphoBlueSupplyAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<MorphoBlueSupplyAdaptorV1.AsObject>,
  }
}

