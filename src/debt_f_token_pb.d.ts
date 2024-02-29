// package: steward.v4
// file: debt_f_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class DebtFTokenAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasBorrowFromFraxlend(): boolean;
  clearBorrowFromFraxlend(): void;
  getBorrowFromFraxlend(): DebtFTokenAdaptorV1.BorrowFromFraxlend | undefined;
  setBorrowFromFraxlend(value?: DebtFTokenAdaptorV1.BorrowFromFraxlend): void;

  hasRepayFraxlendDebt(): boolean;
  clearRepayFraxlendDebt(): void;
  getRepayFraxlendDebt(): DebtFTokenAdaptorV1.RepayFraxlendDebt | undefined;
  setRepayFraxlendDebt(value?: DebtFTokenAdaptorV1.RepayFraxlendDebt): void;

  hasCallAddInterest(): boolean;
  clearCallAddInterest(): void;
  getCallAddInterest(): DebtFTokenAdaptorV1.CallAddInterest | undefined;
  setCallAddInterest(value?: DebtFTokenAdaptorV1.CallAddInterest): void;

  getFunctionCase(): DebtFTokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebtFTokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: DebtFTokenAdaptorV1): DebtFTokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DebtFTokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebtFTokenAdaptorV1;
  static deserializeBinaryFromReader(message: DebtFTokenAdaptorV1, reader: jspb.BinaryReader): DebtFTokenAdaptorV1;
}

export namespace DebtFTokenAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    borrowFromFraxlend?: DebtFTokenAdaptorV1.BorrowFromFraxlend.AsObject,
    repayFraxlendDebt?: DebtFTokenAdaptorV1.RepayFraxlendDebt.AsObject,
    callAddInterest?: DebtFTokenAdaptorV1.CallAddInterest.AsObject,
  }

  export class BorrowFromFraxlend extends jspb.Message {
    getFraxlendPair(): string;
    setFraxlendPair(value: string): void;

    getAmountToBorrow(): string;
    setAmountToBorrow(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BorrowFromFraxlend.AsObject;
    static toObject(includeInstance: boolean, msg: BorrowFromFraxlend): BorrowFromFraxlend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BorrowFromFraxlend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BorrowFromFraxlend;
    static deserializeBinaryFromReader(message: BorrowFromFraxlend, reader: jspb.BinaryReader): BorrowFromFraxlend;
  }

  export namespace BorrowFromFraxlend {
    export type AsObject = {
      fraxlendPair: string,
      amountToBorrow: string,
    }
  }

  export class RepayFraxlendDebt extends jspb.Message {
    getFraxlendPair(): string;
    setFraxlendPair(value: string): void;

    getDebtTokenRepayAmount(): string;
    setDebtTokenRepayAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepayFraxlendDebt.AsObject;
    static toObject(includeInstance: boolean, msg: RepayFraxlendDebt): RepayFraxlendDebt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepayFraxlendDebt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepayFraxlendDebt;
    static deserializeBinaryFromReader(message: RepayFraxlendDebt, reader: jspb.BinaryReader): RepayFraxlendDebt;
  }

  export namespace RepayFraxlendDebt {
    export type AsObject = {
      fraxlendPair: string,
      debtTokenRepayAmount: string,
    }
  }

  export class CallAddInterest extends jspb.Message {
    getFraxlendPair(): string;
    setFraxlendPair(value: string): void;

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
      fraxlendPair: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    BORROW_FROM_FRAXLEND = 2,
    REPAY_FRAXLEND_DEBT = 3,
    CALL_ADD_INTEREST = 4,
  }
}

export class DebtFTokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<DebtFTokenAdaptorV1>;
  setCallsList(value: Array<DebtFTokenAdaptorV1>): void;
  addCalls(value?: DebtFTokenAdaptorV1, index?: number): DebtFTokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebtFTokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: DebtFTokenAdaptorV1Calls): DebtFTokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DebtFTokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebtFTokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: DebtFTokenAdaptorV1Calls, reader: jspb.BinaryReader): DebtFTokenAdaptorV1Calls;
}

export namespace DebtFTokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<DebtFTokenAdaptorV1.AsObject>,
  }
}

