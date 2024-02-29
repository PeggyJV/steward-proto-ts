// package: steward.v4
// file: c_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class CompoundCTokenAdaptorV2 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDepositToCompound(): boolean;
  clearDepositToCompound(): void;
  getDepositToCompound(): CompoundCTokenAdaptorV2.DepositToCompound | undefined;
  setDepositToCompound(value?: CompoundCTokenAdaptorV2.DepositToCompound): void;

  hasWithdrawFromCompound(): boolean;
  clearWithdrawFromCompound(): void;
  getWithdrawFromCompound(): CompoundCTokenAdaptorV2.WithdrawFromCompound | undefined;
  setWithdrawFromCompound(value?: CompoundCTokenAdaptorV2.WithdrawFromCompound): void;

  hasClaimComp(): boolean;
  clearClaimComp(): void;
  getClaimComp(): CompoundCTokenAdaptorV2.ClaimComp | undefined;
  setClaimComp(value?: CompoundCTokenAdaptorV2.ClaimComp): void;

  getFunctionCase(): CompoundCTokenAdaptorV2.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompoundCTokenAdaptorV2.AsObject;
  static toObject(includeInstance: boolean, msg: CompoundCTokenAdaptorV2): CompoundCTokenAdaptorV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompoundCTokenAdaptorV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompoundCTokenAdaptorV2;
  static deserializeBinaryFromReader(message: CompoundCTokenAdaptorV2, reader: jspb.BinaryReader): CompoundCTokenAdaptorV2;
}

export namespace CompoundCTokenAdaptorV2 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositToCompound?: CompoundCTokenAdaptorV2.DepositToCompound.AsObject,
    withdrawFromCompound?: CompoundCTokenAdaptorV2.WithdrawFromCompound.AsObject,
    claimComp?: CompoundCTokenAdaptorV2.ClaimComp.AsObject,
  }

  export class DepositToCompound extends jspb.Message {
    getMarket(): string;
    setMarket(value: string): void;

    getAmountToDeposit(): string;
    setAmountToDeposit(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositToCompound.AsObject;
    static toObject(includeInstance: boolean, msg: DepositToCompound): DepositToCompound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositToCompound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositToCompound;
    static deserializeBinaryFromReader(message: DepositToCompound, reader: jspb.BinaryReader): DepositToCompound;
  }

  export namespace DepositToCompound {
    export type AsObject = {
      market: string,
      amountToDeposit: string,
    }
  }

  export class WithdrawFromCompound extends jspb.Message {
    getMarket(): string;
    setMarket(value: string): void;

    getAmountToWithdraw(): string;
    setAmountToWithdraw(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromCompound.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromCompound): WithdrawFromCompound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromCompound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromCompound;
    static deserializeBinaryFromReader(message: WithdrawFromCompound, reader: jspb.BinaryReader): WithdrawFromCompound;
  }

  export namespace WithdrawFromCompound {
    export type AsObject = {
      market: string,
      amountToWithdraw: string,
    }
  }

  export class ClaimComp extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClaimComp.AsObject;
    static toObject(includeInstance: boolean, msg: ClaimComp): ClaimComp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClaimComp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClaimComp;
    static deserializeBinaryFromReader(message: ClaimComp, reader: jspb.BinaryReader): ClaimComp;
  }

  export namespace ClaimComp {
    export type AsObject = {
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSIT_TO_COMPOUND = 2,
    WITHDRAW_FROM_COMPOUND = 3,
    CLAIM_COMP = 4,
  }
}

export class CompoundCTokenAdaptorV2Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<CompoundCTokenAdaptorV2>;
  setCallsList(value: Array<CompoundCTokenAdaptorV2>): void;
  addCalls(value?: CompoundCTokenAdaptorV2, index?: number): CompoundCTokenAdaptorV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompoundCTokenAdaptorV2Calls.AsObject;
  static toObject(includeInstance: boolean, msg: CompoundCTokenAdaptorV2Calls): CompoundCTokenAdaptorV2Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompoundCTokenAdaptorV2Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompoundCTokenAdaptorV2Calls;
  static deserializeBinaryFromReader(message: CompoundCTokenAdaptorV2Calls, reader: jspb.BinaryReader): CompoundCTokenAdaptorV2Calls;
}

export namespace CompoundCTokenAdaptorV2Calls {
  export type AsObject = {
    callsList: Array<CompoundCTokenAdaptorV2.AsObject>,
  }
}

