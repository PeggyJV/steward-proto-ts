// package: steward.v4
// file: debt_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";
import * as common_pb from "./common_pb";

export class AaveDebtTokenAdaptorV1 extends jspb.Message {
  hasSwap(): boolean;
  clearSwap(): void;
  getSwap(): base_pb.Swap | undefined;
  setSwap(value?: base_pb.Swap): void;

  hasOracleSwap(): boolean;
  clearOracleSwap(): void;
  getOracleSwap(): base_pb.OracleSwap | undefined;
  setOracleSwap(value?: base_pb.OracleSwap): void;

  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasBorrowFromAave(): boolean;
  clearBorrowFromAave(): void;
  getBorrowFromAave(): AaveDebtTokenAdaptorV1.BorrowFromAave | undefined;
  setBorrowFromAave(value?: AaveDebtTokenAdaptorV1.BorrowFromAave): void;

  hasRepayAaveDebt(): boolean;
  clearRepayAaveDebt(): void;
  getRepayAaveDebt(): AaveDebtTokenAdaptorV1.RepayAaveDebt | undefined;
  setRepayAaveDebt(value?: AaveDebtTokenAdaptorV1.RepayAaveDebt): void;

  hasSwapAndRepay(): boolean;
  clearSwapAndRepay(): void;
  getSwapAndRepay(): AaveDebtTokenAdaptorV1.SwapAndRepay | undefined;
  setSwapAndRepay(value?: AaveDebtTokenAdaptorV1.SwapAndRepay): void;

  getFunctionCase(): AaveDebtTokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveDebtTokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: AaveDebtTokenAdaptorV1): AaveDebtTokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveDebtTokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveDebtTokenAdaptorV1;
  static deserializeBinaryFromReader(message: AaveDebtTokenAdaptorV1, reader: jspb.BinaryReader): AaveDebtTokenAdaptorV1;
}

export namespace AaveDebtTokenAdaptorV1 {
  export type AsObject = {
    swap?: base_pb.Swap.AsObject,
    oracleSwap?: base_pb.OracleSwap.AsObject,
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    borrowFromAave?: AaveDebtTokenAdaptorV1.BorrowFromAave.AsObject,
    repayAaveDebt?: AaveDebtTokenAdaptorV1.RepayAaveDebt.AsObject,
    swapAndRepay?: AaveDebtTokenAdaptorV1.SwapAndRepay.AsObject,
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

  export class SwapAndRepay extends jspb.Message {
    getTokenIn(): string;
    setTokenIn(value: string): void;

    getTokenToRepay(): string;
    setTokenToRepay(value: string): void;

    getAmountIn(): string;
    setAmountIn(value: string): void;

    getExchange(): common_pb.ExchangeMap[keyof common_pb.ExchangeMap];
    setExchange(value: common_pb.ExchangeMap[keyof common_pb.ExchangeMap]): void;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): common_pb.SwapParams | undefined;
    setParams(value?: common_pb.SwapParams): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapAndRepay.AsObject;
    static toObject(includeInstance: boolean, msg: SwapAndRepay): SwapAndRepay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapAndRepay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapAndRepay;
    static deserializeBinaryFromReader(message: SwapAndRepay, reader: jspb.BinaryReader): SwapAndRepay;
  }

  export namespace SwapAndRepay {
    export type AsObject = {
      tokenIn: string,
      tokenToRepay: string,
      amountIn: string,
      exchange: common_pb.ExchangeMap[keyof common_pb.ExchangeMap],
      params?: common_pb.SwapParams.AsObject,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    SWAP = 1,
    ORACLE_SWAP = 2,
    REVOKE_APPROVAL = 3,
    BORROW_FROM_AAVE = 4,
    REPAY_AAVE_DEBT = 5,
    SWAP_AND_REPAY = 6,
  }
}

export class AaveDebtTokenAdaptorV2 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasBorrowFromAave(): boolean;
  clearBorrowFromAave(): void;
  getBorrowFromAave(): AaveDebtTokenAdaptorV2.BorrowFromAave | undefined;
  setBorrowFromAave(value?: AaveDebtTokenAdaptorV2.BorrowFromAave): void;

  hasRepayAaveDebt(): boolean;
  clearRepayAaveDebt(): void;
  getRepayAaveDebt(): AaveDebtTokenAdaptorV2.RepayAaveDebt | undefined;
  setRepayAaveDebt(value?: AaveDebtTokenAdaptorV2.RepayAaveDebt): void;

  getFunctionCase(): AaveDebtTokenAdaptorV2.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveDebtTokenAdaptorV2.AsObject;
  static toObject(includeInstance: boolean, msg: AaveDebtTokenAdaptorV2): AaveDebtTokenAdaptorV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveDebtTokenAdaptorV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveDebtTokenAdaptorV2;
  static deserializeBinaryFromReader(message: AaveDebtTokenAdaptorV2, reader: jspb.BinaryReader): AaveDebtTokenAdaptorV2;
}

export namespace AaveDebtTokenAdaptorV2 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    borrowFromAave?: AaveDebtTokenAdaptorV2.BorrowFromAave.AsObject,
    repayAaveDebt?: AaveDebtTokenAdaptorV2.RepayAaveDebt.AsObject,
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

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    BORROW_FROM_AAVE = 2,
    REPAY_AAVE_DEBT = 3,
  }
}

export class AaveDebtTokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<AaveDebtTokenAdaptorV1>;
  setCallsList(value: Array<AaveDebtTokenAdaptorV1>): void;
  addCalls(value?: AaveDebtTokenAdaptorV1, index?: number): AaveDebtTokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveDebtTokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: AaveDebtTokenAdaptorV1Calls): AaveDebtTokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveDebtTokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveDebtTokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: AaveDebtTokenAdaptorV1Calls, reader: jspb.BinaryReader): AaveDebtTokenAdaptorV1Calls;
}

export namespace AaveDebtTokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<AaveDebtTokenAdaptorV1.AsObject>,
  }
}

export class AaveDebtTokenAdaptorV2Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<AaveDebtTokenAdaptorV2>;
  setCallsList(value: Array<AaveDebtTokenAdaptorV2>): void;
  addCalls(value?: AaveDebtTokenAdaptorV2, index?: number): AaveDebtTokenAdaptorV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveDebtTokenAdaptorV2Calls.AsObject;
  static toObject(includeInstance: boolean, msg: AaveDebtTokenAdaptorV2Calls): AaveDebtTokenAdaptorV2Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveDebtTokenAdaptorV2Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveDebtTokenAdaptorV2Calls;
  static deserializeBinaryFromReader(message: AaveDebtTokenAdaptorV2Calls, reader: jspb.BinaryReader): AaveDebtTokenAdaptorV2Calls;
}

export namespace AaveDebtTokenAdaptorV2Calls {
  export type AsObject = {
    callsList: Array<AaveDebtTokenAdaptorV2.AsObject>,
  }
}

