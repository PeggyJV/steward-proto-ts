// package: steward.v4
// file: morpho_aave_v3_a_token_p2p.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";
import * as morpho_reward_handler_pb from "./morpho_reward_handler_pb";

export class MorphoAaveV3ATokenP2PAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDepositToAaveV3Morpho(): boolean;
  clearDepositToAaveV3Morpho(): void;
  getDepositToAaveV3Morpho(): MorphoAaveV3ATokenP2PAdaptorV1.DepositToAaveV3Morpho | undefined;
  setDepositToAaveV3Morpho(value?: MorphoAaveV3ATokenP2PAdaptorV1.DepositToAaveV3Morpho): void;

  hasWithdrawFromAaveV3Morpho(): boolean;
  clearWithdrawFromAaveV3Morpho(): void;
  getWithdrawFromAaveV3Morpho(): MorphoAaveV3ATokenP2PAdaptorV1.WithdrawFromAaveV3Morpho | undefined;
  setWithdrawFromAaveV3Morpho(value?: MorphoAaveV3ATokenP2PAdaptorV1.WithdrawFromAaveV3Morpho): void;

  hasClaim(): boolean;
  clearClaim(): void;
  getClaim(): morpho_reward_handler_pb.Claim | undefined;
  setClaim(value?: morpho_reward_handler_pb.Claim): void;

  getFunctionCase(): MorphoAaveV3ATokenP2PAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV3ATokenP2PAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV3ATokenP2PAdaptorV1): MorphoAaveV3ATokenP2PAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV3ATokenP2PAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV3ATokenP2PAdaptorV1;
  static deserializeBinaryFromReader(message: MorphoAaveV3ATokenP2PAdaptorV1, reader: jspb.BinaryReader): MorphoAaveV3ATokenP2PAdaptorV1;
}

export namespace MorphoAaveV3ATokenP2PAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositToAaveV3Morpho?: MorphoAaveV3ATokenP2PAdaptorV1.DepositToAaveV3Morpho.AsObject,
    withdrawFromAaveV3Morpho?: MorphoAaveV3ATokenP2PAdaptorV1.WithdrawFromAaveV3Morpho.AsObject,
    claim?: morpho_reward_handler_pb.Claim.AsObject,
  }

  export class DepositToAaveV3Morpho extends jspb.Message {
    getTokenToDeposit(): string;
    setTokenToDeposit(value: string): void;

    getAmountToDeposit(): string;
    setAmountToDeposit(value: string): void;

    getMaxIterations(): string;
    setMaxIterations(value: string): void;

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
      maxIterations: string,
    }
  }

  export class WithdrawFromAaveV3Morpho extends jspb.Message {
    getTokenToWithdraw(): string;
    setTokenToWithdraw(value: string): void;

    getAmountToWithdraw(): string;
    setAmountToWithdraw(value: string): void;

    getMaxIterations(): string;
    setMaxIterations(value: string): void;

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
      maxIterations: string,
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

export class MorphoAaveV3ATokenP2PAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<MorphoAaveV3ATokenP2PAdaptorV1>;
  setCallsList(value: Array<MorphoAaveV3ATokenP2PAdaptorV1>): void;
  addCalls(value?: MorphoAaveV3ATokenP2PAdaptorV1, index?: number): MorphoAaveV3ATokenP2PAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV3ATokenP2PAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV3ATokenP2PAdaptorV1Calls): MorphoAaveV3ATokenP2PAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV3ATokenP2PAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV3ATokenP2PAdaptorV1Calls;
  static deserializeBinaryFromReader(message: MorphoAaveV3ATokenP2PAdaptorV1Calls, reader: jspb.BinaryReader): MorphoAaveV3ATokenP2PAdaptorV1Calls;
}

export namespace MorphoAaveV3ATokenP2PAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<MorphoAaveV3ATokenP2PAdaptorV1.AsObject>,
  }
}

