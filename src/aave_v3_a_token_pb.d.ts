// package: steward.v4
// file: aave_v3_a_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class AaveV3ATokenAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDepositToAave(): boolean;
  clearDepositToAave(): void;
  getDepositToAave(): AaveV3ATokenAdaptorV1.DepositToAave | undefined;
  setDepositToAave(value?: AaveV3ATokenAdaptorV1.DepositToAave): void;

  hasWithdrawFromAave(): boolean;
  clearWithdrawFromAave(): void;
  getWithdrawFromAave(): AaveV3ATokenAdaptorV1.WithdrawFromAave | undefined;
  setWithdrawFromAave(value?: AaveV3ATokenAdaptorV1.WithdrawFromAave): void;

  hasAdjustIsolationModeAssetAsCollateral(): boolean;
  clearAdjustIsolationModeAssetAsCollateral(): void;
  getAdjustIsolationModeAssetAsCollateral(): AaveV3ATokenAdaptorV1.AdjustIsolationModeAssetAsCollateral | undefined;
  setAdjustIsolationModeAssetAsCollateral(value?: AaveV3ATokenAdaptorV1.AdjustIsolationModeAssetAsCollateral): void;

  hasChangeEmode(): boolean;
  clearChangeEmode(): void;
  getChangeEmode(): AaveV3ATokenAdaptorV1.ChangeEMode | undefined;
  setChangeEmode(value?: AaveV3ATokenAdaptorV1.ChangeEMode): void;

  getFunctionCase(): AaveV3ATokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveV3ATokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: AaveV3ATokenAdaptorV1): AaveV3ATokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveV3ATokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveV3ATokenAdaptorV1;
  static deserializeBinaryFromReader(message: AaveV3ATokenAdaptorV1, reader: jspb.BinaryReader): AaveV3ATokenAdaptorV1;
}

export namespace AaveV3ATokenAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositToAave?: AaveV3ATokenAdaptorV1.DepositToAave.AsObject,
    withdrawFromAave?: AaveV3ATokenAdaptorV1.WithdrawFromAave.AsObject,
    adjustIsolationModeAssetAsCollateral?: AaveV3ATokenAdaptorV1.AdjustIsolationModeAssetAsCollateral.AsObject,
    changeEmode?: AaveV3ATokenAdaptorV1.ChangeEMode.AsObject,
  }

  export class DepositToAave extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositToAave.AsObject;
    static toObject(includeInstance: boolean, msg: DepositToAave): DepositToAave.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositToAave, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositToAave;
    static deserializeBinaryFromReader(message: DepositToAave, reader: jspb.BinaryReader): DepositToAave;
  }

  export namespace DepositToAave {
    export type AsObject = {
      token: string,
      amount: string,
    }
  }

  export class WithdrawFromAave extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromAave.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromAave): WithdrawFromAave.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromAave, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromAave;
    static deserializeBinaryFromReader(message: WithdrawFromAave, reader: jspb.BinaryReader): WithdrawFromAave;
  }

  export namespace WithdrawFromAave {
    export type AsObject = {
      token: string,
      amount: string,
    }
  }

  export class AdjustIsolationModeAssetAsCollateral extends jspb.Message {
    getAsset(): string;
    setAsset(value: string): void;

    getUseAsCollateral(): boolean;
    setUseAsCollateral(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdjustIsolationModeAssetAsCollateral.AsObject;
    static toObject(includeInstance: boolean, msg: AdjustIsolationModeAssetAsCollateral): AdjustIsolationModeAssetAsCollateral.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdjustIsolationModeAssetAsCollateral, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdjustIsolationModeAssetAsCollateral;
    static deserializeBinaryFromReader(message: AdjustIsolationModeAssetAsCollateral, reader: jspb.BinaryReader): AdjustIsolationModeAssetAsCollateral;
  }

  export namespace AdjustIsolationModeAssetAsCollateral {
    export type AsObject = {
      asset: string,
      useAsCollateral: boolean,
    }
  }

  export class ChangeEMode extends jspb.Message {
    getCategoryId(): number;
    setCategoryId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeEMode.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeEMode): ChangeEMode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeEMode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeEMode;
    static deserializeBinaryFromReader(message: ChangeEMode, reader: jspb.BinaryReader): ChangeEMode;
  }

  export namespace ChangeEMode {
    export type AsObject = {
      categoryId: number,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSIT_TO_AAVE = 2,
    WITHDRAW_FROM_AAVE = 3,
    ADJUST_ISOLATION_MODE_ASSET_AS_COLLATERAL = 4,
    CHANGE_EMODE = 5,
  }
}

export class AaveV3ATokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<AaveV3ATokenAdaptorV1>;
  setCallsList(value: Array<AaveV3ATokenAdaptorV1>): void;
  addCalls(value?: AaveV3ATokenAdaptorV1, index?: number): AaveV3ATokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveV3ATokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: AaveV3ATokenAdaptorV1Calls): AaveV3ATokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveV3ATokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveV3ATokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: AaveV3ATokenAdaptorV1Calls, reader: jspb.BinaryReader): AaveV3ATokenAdaptorV1Calls;
}

export namespace AaveV3ATokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<AaveV3ATokenAdaptorV1.AsObject>,
  }
}

