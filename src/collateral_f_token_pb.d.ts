// package: steward.v4
// file: collateral_f_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class CollateralFTokenAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasAddCollateral(): boolean;
  clearAddCollateral(): void;
  getAddCollateral(): CollateralFTokenAdaptorV1.AddCollateral | undefined;
  setAddCollateral(value?: CollateralFTokenAdaptorV1.AddCollateral): void;

  hasRemoveCollateral(): boolean;
  clearRemoveCollateral(): void;
  getRemoveCollateral(): CollateralFTokenAdaptorV1.RemoveCollateral | undefined;
  setRemoveCollateral(value?: CollateralFTokenAdaptorV1.RemoveCollateral): void;

  getFunctionCase(): CollateralFTokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollateralFTokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: CollateralFTokenAdaptorV1): CollateralFTokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollateralFTokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollateralFTokenAdaptorV1;
  static deserializeBinaryFromReader(message: CollateralFTokenAdaptorV1, reader: jspb.BinaryReader): CollateralFTokenAdaptorV1;
}

export namespace CollateralFTokenAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    addCollateral?: CollateralFTokenAdaptorV1.AddCollateral.AsObject,
    removeCollateral?: CollateralFTokenAdaptorV1.RemoveCollateral.AsObject,
  }

  export class AddCollateral extends jspb.Message {
    getFraxlendPair(): string;
    setFraxlendPair(value: string): void;

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
      fraxlendPair: string,
      collateralToDeposit: string,
    }
  }

  export class RemoveCollateral extends jspb.Message {
    getCollateralAmount(): string;
    setCollateralAmount(value: string): void;

    getFraxlendPair(): string;
    setFraxlendPair(value: string): void;

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
      collateralAmount: string,
      fraxlendPair: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    ADD_COLLATERAL = 2,
    REMOVE_COLLATERAL = 3,
  }
}

export class CollateralFTokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<CollateralFTokenAdaptorV1>;
  setCallsList(value: Array<CollateralFTokenAdaptorV1>): void;
  addCalls(value?: CollateralFTokenAdaptorV1, index?: number): CollateralFTokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollateralFTokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: CollateralFTokenAdaptorV1Calls): CollateralFTokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollateralFTokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollateralFTokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: CollateralFTokenAdaptorV1Calls, reader: jspb.BinaryReader): CollateralFTokenAdaptorV1Calls;
}

export namespace CollateralFTokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<CollateralFTokenAdaptorV1.AsObject>,
  }
}

