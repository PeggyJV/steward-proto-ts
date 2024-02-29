// package: steward.v4
// file: f_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class FTokenAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasLendFrax(): boolean;
  clearLendFrax(): void;
  getLendFrax(): FTokenAdaptorV1.LendFrax | undefined;
  setLendFrax(value?: FTokenAdaptorV1.LendFrax): void;

  hasRedeemFraxShare(): boolean;
  clearRedeemFraxShare(): void;
  getRedeemFraxShare(): FTokenAdaptorV1.RedeemFraxShare | undefined;
  setRedeemFraxShare(value?: FTokenAdaptorV1.RedeemFraxShare): void;

  hasWithdrawFrax(): boolean;
  clearWithdrawFrax(): void;
  getWithdrawFrax(): FTokenAdaptorV1.WithdrawFrax | undefined;
  setWithdrawFrax(value?: FTokenAdaptorV1.WithdrawFrax): void;

  hasCallAddInterest(): boolean;
  clearCallAddInterest(): void;
  getCallAddInterest(): FTokenAdaptorV1.CallAddInterest | undefined;
  setCallAddInterest(value?: FTokenAdaptorV1.CallAddInterest): void;

  getFunctionCase(): FTokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: FTokenAdaptorV1): FTokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTokenAdaptorV1;
  static deserializeBinaryFromReader(message: FTokenAdaptorV1, reader: jspb.BinaryReader): FTokenAdaptorV1;
}

export namespace FTokenAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    lendFrax?: FTokenAdaptorV1.LendFrax.AsObject,
    redeemFraxShare?: FTokenAdaptorV1.RedeemFraxShare.AsObject,
    withdrawFrax?: FTokenAdaptorV1.WithdrawFrax.AsObject,
    callAddInterest?: FTokenAdaptorV1.CallAddInterest.AsObject,
  }

  export class LendFrax extends jspb.Message {
    getFToken(): string;
    setFToken(value: string): void;

    getAmountToDeposit(): string;
    setAmountToDeposit(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LendFrax.AsObject;
    static toObject(includeInstance: boolean, msg: LendFrax): LendFrax.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LendFrax, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LendFrax;
    static deserializeBinaryFromReader(message: LendFrax, reader: jspb.BinaryReader): LendFrax;
  }

  export namespace LendFrax {
    export type AsObject = {
      fToken: string,
      amountToDeposit: string,
    }
  }

  export class RedeemFraxShare extends jspb.Message {
    getFToken(): string;
    setFToken(value: string): void;

    getAmountToRedeem(): string;
    setAmountToRedeem(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedeemFraxShare.AsObject;
    static toObject(includeInstance: boolean, msg: RedeemFraxShare): RedeemFraxShare.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedeemFraxShare, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedeemFraxShare;
    static deserializeBinaryFromReader(message: RedeemFraxShare, reader: jspb.BinaryReader): RedeemFraxShare;
  }

  export namespace RedeemFraxShare {
    export type AsObject = {
      fToken: string,
      amountToRedeem: string,
    }
  }

  export class WithdrawFrax extends jspb.Message {
    getFToken(): string;
    setFToken(value: string): void;

    getAmountToWithdraw(): string;
    setAmountToWithdraw(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFrax.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFrax): WithdrawFrax.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFrax, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFrax;
    static deserializeBinaryFromReader(message: WithdrawFrax, reader: jspb.BinaryReader): WithdrawFrax;
  }

  export namespace WithdrawFrax {
    export type AsObject = {
      fToken: string,
      amountToWithdraw: string,
    }
  }

  export class CallAddInterest extends jspb.Message {
    getFToken(): string;
    setFToken(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallAddInterest.AsObject;
    static toObject(includeInstance: boolean, msg: CallAddInterest): CallAddInterest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallAddInterest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallAddInterest;
    static deserializeBinaryFromReader(message: CallAddInterest, reader: jspb.BinaryReader): CallAddInterest;
  }

  export namespace CallAddInterest {
    export type AsObject = {
      fToken: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    LEND_FRAX = 2,
    REDEEM_FRAX_SHARE = 3,
    WITHDRAW_FRAX = 4,
    CALL_ADD_INTEREST = 5,
  }
}

export class FTokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<FTokenAdaptorV1>;
  setCallsList(value: Array<FTokenAdaptorV1>): void;
  addCalls(value?: FTokenAdaptorV1, index?: number): FTokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: FTokenAdaptorV1Calls): FTokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: FTokenAdaptorV1Calls, reader: jspb.BinaryReader): FTokenAdaptorV1Calls;
}

export namespace FTokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<FTokenAdaptorV1.AsObject>,
  }
}

