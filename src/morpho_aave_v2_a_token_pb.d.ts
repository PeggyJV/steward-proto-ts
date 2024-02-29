// package: steward.v4
// file: morpho_aave_v2_a_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";
import * as morpho_reward_handler_pb from "./morpho_reward_handler_pb";

export class MorphoAaveV2ATokenAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDepositToAaveV2Morpho(): boolean;
  clearDepositToAaveV2Morpho(): void;
  getDepositToAaveV2Morpho(): MorphoAaveV2ATokenAdaptorV1.DepositToAaveV2Morpho | undefined;
  setDepositToAaveV2Morpho(value?: MorphoAaveV2ATokenAdaptorV1.DepositToAaveV2Morpho): void;

  hasWithdrawFromAaveV2Morpho(): boolean;
  clearWithdrawFromAaveV2Morpho(): void;
  getWithdrawFromAaveV2Morpho(): MorphoAaveV2ATokenAdaptorV1.WithdrawFromAaveV2Morpho | undefined;
  setWithdrawFromAaveV2Morpho(value?: MorphoAaveV2ATokenAdaptorV1.WithdrawFromAaveV2Morpho): void;

  hasClaim(): boolean;
  clearClaim(): void;
  getClaim(): morpho_reward_handler_pb.Claim | undefined;
  setClaim(value?: morpho_reward_handler_pb.Claim): void;

  getFunctionCase(): MorphoAaveV2ATokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV2ATokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV2ATokenAdaptorV1): MorphoAaveV2ATokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV2ATokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV2ATokenAdaptorV1;
  static deserializeBinaryFromReader(message: MorphoAaveV2ATokenAdaptorV1, reader: jspb.BinaryReader): MorphoAaveV2ATokenAdaptorV1;
}

export namespace MorphoAaveV2ATokenAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositToAaveV2Morpho?: MorphoAaveV2ATokenAdaptorV1.DepositToAaveV2Morpho.AsObject,
    withdrawFromAaveV2Morpho?: MorphoAaveV2ATokenAdaptorV1.WithdrawFromAaveV2Morpho.AsObject,
    claim?: morpho_reward_handler_pb.Claim.AsObject,
  }

  export class DepositToAaveV2Morpho extends jspb.Message {
    getAToken(): string;
    setAToken(value: string): void;

    getAmountToDeposit(): string;
    setAmountToDeposit(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositToAaveV2Morpho.AsObject;
    static toObject(includeInstance: boolean, msg: DepositToAaveV2Morpho): DepositToAaveV2Morpho.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositToAaveV2Morpho, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositToAaveV2Morpho;
    static deserializeBinaryFromReader(message: DepositToAaveV2Morpho, reader: jspb.BinaryReader): DepositToAaveV2Morpho;
  }

  export namespace DepositToAaveV2Morpho {
    export type AsObject = {
      aToken: string,
      amountToDeposit: string,
    }
  }

  export class WithdrawFromAaveV2Morpho extends jspb.Message {
    getAToken(): string;
    setAToken(value: string): void;

    getAmountToWithdraw(): string;
    setAmountToWithdraw(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromAaveV2Morpho.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromAaveV2Morpho): WithdrawFromAaveV2Morpho.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromAaveV2Morpho, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromAaveV2Morpho;
    static deserializeBinaryFromReader(message: WithdrawFromAaveV2Morpho, reader: jspb.BinaryReader): WithdrawFromAaveV2Morpho;
  }

  export namespace WithdrawFromAaveV2Morpho {
    export type AsObject = {
      aToken: string,
      amountToWithdraw: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSIT_TO_AAVE_V2_MORPHO = 2,
    WITHDRAW_FROM_AAVE_V2_MORPHO = 3,
    CLAIM = 4,
  }
}

export class MorphoAaveV2ATokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<MorphoAaveV2ATokenAdaptorV1>;
  setCallsList(value: Array<MorphoAaveV2ATokenAdaptorV1>): void;
  addCalls(value?: MorphoAaveV2ATokenAdaptorV1, index?: number): MorphoAaveV2ATokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV2ATokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV2ATokenAdaptorV1Calls): MorphoAaveV2ATokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV2ATokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV2ATokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: MorphoAaveV2ATokenAdaptorV1Calls, reader: jspb.BinaryReader): MorphoAaveV2ATokenAdaptorV1Calls;
}

export namespace MorphoAaveV2ATokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<MorphoAaveV2ATokenAdaptorV1.AsObject>,
  }
}

