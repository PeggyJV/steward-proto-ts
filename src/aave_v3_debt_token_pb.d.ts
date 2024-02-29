// package: steward.v4
// file: aave_v3_debt_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class AaveV3DebtTokenAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasBorrowFromAave(): boolean;
  clearBorrowFromAave(): void;
  getBorrowFromAave(): AaveV3DebtTokenAdaptorV1.BorrowFromAave | undefined;
  setBorrowFromAave(value?: AaveV3DebtTokenAdaptorV1.BorrowFromAave): void;

  hasRepayAaveDebt(): boolean;
  clearRepayAaveDebt(): void;
  getRepayAaveDebt(): AaveV3DebtTokenAdaptorV1.RepayAaveDebt | undefined;
  setRepayAaveDebt(value?: AaveV3DebtTokenAdaptorV1.RepayAaveDebt): void;

  hasRepayWithATokens(): boolean;
  clearRepayWithATokens(): void;
  getRepayWithATokens(): AaveV3DebtTokenAdaptorV1.RepayWithATokens | undefined;
  setRepayWithATokens(value?: AaveV3DebtTokenAdaptorV1.RepayWithATokens): void;

  getFunctionCase(): AaveV3DebtTokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveV3DebtTokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: AaveV3DebtTokenAdaptorV1): AaveV3DebtTokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveV3DebtTokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveV3DebtTokenAdaptorV1;
  static deserializeBinaryFromReader(message: AaveV3DebtTokenAdaptorV1, reader: jspb.BinaryReader): AaveV3DebtTokenAdaptorV1;
}

export namespace AaveV3DebtTokenAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    borrowFromAave?: AaveV3DebtTokenAdaptorV1.BorrowFromAave.AsObject,
    repayAaveDebt?: AaveV3DebtTokenAdaptorV1.RepayAaveDebt.AsObject,
    repayWithATokens?: AaveV3DebtTokenAdaptorV1.RepayWithATokens.AsObject,
  }

  export class BorrowFromAave extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BorrowFromAave.AsObject;
    static toObject(includeInstance: boolean, msg: BorrowFromAave): BorrowFromAave.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BorrowFromAave, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BorrowFromAave;
    static deserializeBinaryFromReader(message: BorrowFromAave, reader: jspb.BinaryReader): BorrowFromAave;
  }

  export namespace BorrowFromAave {
    export type AsObject = {
      token: string,
      amount: string,
    }
  }

  export class RepayAaveDebt extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepayAaveDebt.AsObject;
    static toObject(includeInstance: boolean, msg: RepayAaveDebt): RepayAaveDebt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepayAaveDebt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepayAaveDebt;
    static deserializeBinaryFromReader(message: RepayAaveDebt, reader: jspb.BinaryReader): RepayAaveDebt;
  }

  export namespace RepayAaveDebt {
    export type AsObject = {
      token: string,
      amount: string,
    }
  }

  export class RepayWithATokens extends jspb.Message {
    getUnderlyingToken(): string;
    setUnderlyingToken(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepayWithATokens.AsObject;
    static toObject(includeInstance: boolean, msg: RepayWithATokens): RepayWithATokens.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepayWithATokens, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepayWithATokens;
    static deserializeBinaryFromReader(message: RepayWithATokens, reader: jspb.BinaryReader): RepayWithATokens;
  }

  export namespace RepayWithATokens {
    export type AsObject = {
      underlyingToken: string,
      amount: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    BORROW_FROM_AAVE = 2,
    REPAY_AAVE_DEBT = 3,
    REPAY_WITH_A_TOKENS = 4,
  }
}

export class AaveV3DebtTokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<AaveV3DebtTokenAdaptorV1>;
  setCallsList(value: Array<AaveV3DebtTokenAdaptorV1>): void;
  addCalls(value?: AaveV3DebtTokenAdaptorV1, index?: number): AaveV3DebtTokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveV3DebtTokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: AaveV3DebtTokenAdaptorV1Calls): AaveV3DebtTokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveV3DebtTokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveV3DebtTokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: AaveV3DebtTokenAdaptorV1Calls, reader: jspb.BinaryReader): AaveV3DebtTokenAdaptorV1Calls;
}

export namespace AaveV3DebtTokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<AaveV3DebtTokenAdaptorV1.AsObject>,
  }
}

