// package: steward.v4
// file: aave_v2_enable_asset_as_collateral_adaptor.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class AaveV2EnableAssetAsCollateralAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasSetUserUseReserveAsCollateral(): boolean;
  clearSetUserUseReserveAsCollateral(): void;
  getSetUserUseReserveAsCollateral(): AaveV2EnableAssetAsCollateralAdaptorV1.SetUserUseReserveAsCollateral | undefined;
  setSetUserUseReserveAsCollateral(value?: AaveV2EnableAssetAsCollateralAdaptorV1.SetUserUseReserveAsCollateral): void;

  getFunctionCase(): AaveV2EnableAssetAsCollateralAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveV2EnableAssetAsCollateralAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: AaveV2EnableAssetAsCollateralAdaptorV1): AaveV2EnableAssetAsCollateralAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveV2EnableAssetAsCollateralAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveV2EnableAssetAsCollateralAdaptorV1;
  static deserializeBinaryFromReader(message: AaveV2EnableAssetAsCollateralAdaptorV1, reader: jspb.BinaryReader): AaveV2EnableAssetAsCollateralAdaptorV1;
}

export namespace AaveV2EnableAssetAsCollateralAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    setUserUseReserveAsCollateral?: AaveV2EnableAssetAsCollateralAdaptorV1.SetUserUseReserveAsCollateral.AsObject,
  }

  export class SetUserUseReserveAsCollateral extends jspb.Message {
    getAsset(): string;
    setAsset(value: string): void;

    getUseAsCollateral(): boolean;
    setUseAsCollateral(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserUseReserveAsCollateral.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserUseReserveAsCollateral): SetUserUseReserveAsCollateral.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserUseReserveAsCollateral, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserUseReserveAsCollateral;
    static deserializeBinaryFromReader(message: SetUserUseReserveAsCollateral, reader: jspb.BinaryReader): SetUserUseReserveAsCollateral;
  }

  export namespace SetUserUseReserveAsCollateral {
    export type AsObject = {
      asset: string,
      useAsCollateral: boolean,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    SET_USER_USE_RESERVE_AS_COLLATERAL = 2,
  }
}

export class AaveV2EnableAssetAsCollateralAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<AaveV2EnableAssetAsCollateralAdaptorV1>;
  setCallsList(value: Array<AaveV2EnableAssetAsCollateralAdaptorV1>): void;
  addCalls(value?: AaveV2EnableAssetAsCollateralAdaptorV1, index?: number): AaveV2EnableAssetAsCollateralAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveV2EnableAssetAsCollateralAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: AaveV2EnableAssetAsCollateralAdaptorV1Calls): AaveV2EnableAssetAsCollateralAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveV2EnableAssetAsCollateralAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveV2EnableAssetAsCollateralAdaptorV1Calls;
  static deserializeBinaryFromReader(message: AaveV2EnableAssetAsCollateralAdaptorV1Calls, reader: jspb.BinaryReader): AaveV2EnableAssetAsCollateralAdaptorV1Calls;
}

export namespace AaveV2EnableAssetAsCollateralAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<AaveV2EnableAssetAsCollateralAdaptorV1.AsObject>,
  }
}

