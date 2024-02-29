// package: steward.v4
// file: morpho_blue_collateral.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";
import * as common_pb from "./common_pb";

export class MorphoBlueCollateralAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasAddCollateral(): boolean;
  clearAddCollateral(): void;
  getAddCollateral(): MorphoBlueCollateralAdaptorV1.AddCollateral | undefined;
  setAddCollateral(value?: MorphoBlueCollateralAdaptorV1.AddCollateral): void;

  hasRemoveCollateral(): boolean;
  clearRemoveCollateral(): void;
  getRemoveCollateral(): MorphoBlueCollateralAdaptorV1.RemoveCollateral | undefined;
  setRemoveCollateral(value?: MorphoBlueCollateralAdaptorV1.RemoveCollateral): void;

  getFunctionCase(): MorphoBlueCollateralAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoBlueCollateralAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoBlueCollateralAdaptorV1): MorphoBlueCollateralAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoBlueCollateralAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoBlueCollateralAdaptorV1;
  static deserializeBinaryFromReader(message: MorphoBlueCollateralAdaptorV1, reader: jspb.BinaryReader): MorphoBlueCollateralAdaptorV1;
}

export namespace MorphoBlueCollateralAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    addCollateral?: MorphoBlueCollateralAdaptorV1.AddCollateral.AsObject,
    removeCollateral?: MorphoBlueCollateralAdaptorV1.RemoveCollateral.AsObject,
  }

  export class AddCollateral extends jspb.Message {
    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): common_pb.MarketParams | undefined;
    setMarket(value?: common_pb.MarketParams): void;

    getCollateralToDeposit(): string;
    setCollateralToDeposit(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCollateral.AsObject;
    static toObject(includeInstance: boolean, msg: AddCollateral): AddCollateral.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCollateral, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCollateral;
    static deserializeBinaryFromReader(message: AddCollateral, reader: jspb.BinaryReader): AddCollateral;
  }

  export namespace AddCollateral {
    export type AsObject = {
      market?: common_pb.MarketParams.AsObject,
      collateralToDeposit: string,
    }
  }

  export class RemoveCollateral extends jspb.Message {
    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): common_pb.MarketParams | undefined;
    setMarket(value?: common_pb.MarketParams): void;

    getCollateralAmount(): string;
    setCollateralAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveCollateral.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveCollateral): RemoveCollateral.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveCollateral, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveCollateral;
    static deserializeBinaryFromReader(message: RemoveCollateral, reader: jspb.BinaryReader): RemoveCollateral;
  }

  export namespace RemoveCollateral {
    export type AsObject = {
      market?: common_pb.MarketParams.AsObject,
      collateralAmount: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    ADD_COLLATERAL = 2,
    REMOVE_COLLATERAL = 3,
  }
}

export class MorphoBlueCollateralAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<MorphoBlueCollateralAdaptorV1>;
  setCallsList(value: Array<MorphoBlueCollateralAdaptorV1>): void;
  addCalls(value?: MorphoBlueCollateralAdaptorV1, index?: number): MorphoBlueCollateralAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoBlueCollateralAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoBlueCollateralAdaptorV1Calls): MorphoBlueCollateralAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoBlueCollateralAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoBlueCollateralAdaptorV1Calls;
  static deserializeBinaryFromReader(message: MorphoBlueCollateralAdaptorV1Calls, reader: jspb.BinaryReader): MorphoBlueCollateralAdaptorV1Calls;
}

export namespace MorphoBlueCollateralAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<MorphoBlueCollateralAdaptorV1.AsObject>,
  }
}

