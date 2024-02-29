// package: steward.v4
// file: morpho_aave_v3_a_token_collateral.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";
import * as morpho_reward_handler_pb from "./morpho_reward_handler_pb";

export class MorphoAaveV3ATokenCollateralAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDepositToAaveV3Morpho(): boolean;
  clearDepositToAaveV3Morpho(): void;
  getDepositToAaveV3Morpho(): MorphoAaveV3ATokenCollateralAdaptorV1.DepositToAaveV3Morpho | undefined;
  setDepositToAaveV3Morpho(value?: MorphoAaveV3ATokenCollateralAdaptorV1.DepositToAaveV3Morpho): void;

  hasWithdrawFromAaveV3Morpho(): boolean;
  clearWithdrawFromAaveV3Morpho(): void;
  getWithdrawFromAaveV3Morpho(): MorphoAaveV3ATokenCollateralAdaptorV1.WithdrawFromAaveV3Morpho | undefined;
  setWithdrawFromAaveV3Morpho(value?: MorphoAaveV3ATokenCollateralAdaptorV1.WithdrawFromAaveV3Morpho): void;

  hasClaim(): boolean;
  clearClaim(): void;
  getClaim(): morpho_reward_handler_pb.Claim | undefined;
  setClaim(value?: morpho_reward_handler_pb.Claim): void;

  getFunctionCase(): MorphoAaveV3ATokenCollateralAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV3ATokenCollateralAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV3ATokenCollateralAdaptorV1): MorphoAaveV3ATokenCollateralAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV3ATokenCollateralAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV3ATokenCollateralAdaptorV1;
  static deserializeBinaryFromReader(message: MorphoAaveV3ATokenCollateralAdaptorV1, reader: jspb.BinaryReader): MorphoAaveV3ATokenCollateralAdaptorV1;
}

export namespace MorphoAaveV3ATokenCollateralAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositToAaveV3Morpho?: MorphoAaveV3ATokenCollateralAdaptorV1.DepositToAaveV3Morpho.AsObject,
    withdrawFromAaveV3Morpho?: MorphoAaveV3ATokenCollateralAdaptorV1.WithdrawFromAaveV3Morpho.AsObject,
    claim?: morpho_reward_handler_pb.Claim.AsObject,
  }

  export class DepositToAaveV3Morpho extends jspb.Message {
    getTokenToDeposit(): string;
    setTokenToDeposit(value: string): void;

    getAmountToDeposit(): string;
    setAmountToDeposit(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositToAaveV3Morpho.AsObject;
    static toObject(includeInstance: boolean, msg: DepositToAaveV3Morpho): DepositToAaveV3Morpho.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositToAaveV3Morpho, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositToAaveV3Morpho;
    static deserializeBinaryFromReader(message: DepositToAaveV3Morpho, reader: jspb.BinaryReader): DepositToAaveV3Morpho;
  }

  export namespace DepositToAaveV3Morpho {
    export type AsObject = {
      tokenToDeposit: string,
      amountToDeposit: string,
    }
  }

  export class WithdrawFromAaveV3Morpho extends jspb.Message {
    getTokenToWithdraw(): string;
    setTokenToWithdraw(value: string): void;

    getAmountToWithdraw(): string;
    setAmountToWithdraw(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromAaveV3Morpho.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromAaveV3Morpho): WithdrawFromAaveV3Morpho.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromAaveV3Morpho, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromAaveV3Morpho;
    static deserializeBinaryFromReader(message: WithdrawFromAaveV3Morpho, reader: jspb.BinaryReader): WithdrawFromAaveV3Morpho;
  }

  export namespace WithdrawFromAaveV3Morpho {
    export type AsObject = {
      tokenToWithdraw: string,
      amountToWithdraw: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSIT_TO_AAVE_V3_MORPHO = 2,
    WITHDRAW_FROM_AAVE_V3_MORPHO = 3,
    CLAIM = 4,
  }
}

export class MorphoAaveV3ATokenCollateralAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<MorphoAaveV3ATokenCollateralAdaptorV1>;
  setCallsList(value: Array<MorphoAaveV3ATokenCollateralAdaptorV1>): void;
  addCalls(value?: MorphoAaveV3ATokenCollateralAdaptorV1, index?: number): MorphoAaveV3ATokenCollateralAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV3ATokenCollateralAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV3ATokenCollateralAdaptorV1Calls): MorphoAaveV3ATokenCollateralAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV3ATokenCollateralAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV3ATokenCollateralAdaptorV1Calls;
  static deserializeBinaryFromReader(message: MorphoAaveV3ATokenCollateralAdaptorV1Calls, reader: jspb.BinaryReader): MorphoAaveV3ATokenCollateralAdaptorV1Calls;
}

export namespace MorphoAaveV3ATokenCollateralAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<MorphoAaveV3ATokenCollateralAdaptorV1.AsObject>,
  }
}

