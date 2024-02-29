// package: steward.v4
// file: morpho_aave_v3_debt_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class MorphoAaveV3DebtTokenAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasBorrowFromAaveV3Morpho(): boolean;
  clearBorrowFromAaveV3Morpho(): void;
  getBorrowFromAaveV3Morpho(): MorphoAaveV3DebtTokenAdaptorV1.BorrowFromAaveV3Morpho | undefined;
  setBorrowFromAaveV3Morpho(value?: MorphoAaveV3DebtTokenAdaptorV1.BorrowFromAaveV3Morpho): void;

  hasRepayAaveV3MorphoDebt(): boolean;
  clearRepayAaveV3MorphoDebt(): void;
  getRepayAaveV3MorphoDebt(): MorphoAaveV3DebtTokenAdaptorV1.RepayAaveV3MorphoDebt | undefined;
  setRepayAaveV3MorphoDebt(value?: MorphoAaveV3DebtTokenAdaptorV1.RepayAaveV3MorphoDebt): void;

  getFunctionCase(): MorphoAaveV3DebtTokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV3DebtTokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV3DebtTokenAdaptorV1): MorphoAaveV3DebtTokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV3DebtTokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV3DebtTokenAdaptorV1;
  static deserializeBinaryFromReader(message: MorphoAaveV3DebtTokenAdaptorV1, reader: jspb.BinaryReader): MorphoAaveV3DebtTokenAdaptorV1;
}

export namespace MorphoAaveV3DebtTokenAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    borrowFromAaveV3Morpho?: MorphoAaveV3DebtTokenAdaptorV1.BorrowFromAaveV3Morpho.AsObject,
    repayAaveV3MorphoDebt?: MorphoAaveV3DebtTokenAdaptorV1.RepayAaveV3MorphoDebt.AsObject,
  }

  export class BorrowFromAaveV3Morpho extends jspb.Message {
    getUnderlying(): string;
    setUnderlying(value: string): void;

    getAmountToBorrow(): string;
    setAmountToBorrow(value: string): void;

    getMaxIterations(): string;
    setMaxIterations(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BorrowFromAaveV3Morpho.AsObject;
    static toObject(includeInstance: boolean, msg: BorrowFromAaveV3Morpho): BorrowFromAaveV3Morpho.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BorrowFromAaveV3Morpho, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BorrowFromAaveV3Morpho;
    static deserializeBinaryFromReader(message: BorrowFromAaveV3Morpho, reader: jspb.BinaryReader): BorrowFromAaveV3Morpho;
  }

  export namespace BorrowFromAaveV3Morpho {
    export type AsObject = {
      underlying: string,
      amountToBorrow: string,
      maxIterations: string,
    }
  }

  export class RepayAaveV3MorphoDebt extends jspb.Message {
    getTokenToRepay(): string;
    setTokenToRepay(value: string): void;

    getAmountToRepay(): string;
    setAmountToRepay(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepayAaveV3MorphoDebt.AsObject;
    static toObject(includeInstance: boolean, msg: RepayAaveV3MorphoDebt): RepayAaveV3MorphoDebt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepayAaveV3MorphoDebt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepayAaveV3MorphoDebt;
    static deserializeBinaryFromReader(message: RepayAaveV3MorphoDebt, reader: jspb.BinaryReader): RepayAaveV3MorphoDebt;
  }

  export namespace RepayAaveV3MorphoDebt {
    export type AsObject = {
      tokenToRepay: string,
      amountToRepay: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    BORROW_FROM_AAVE_V3_MORPHO = 2,
    REPAY_AAVE_V3_MORPHO_DEBT = 3,
  }
}

export class MorphoAaveV3DebtTokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<MorphoAaveV3DebtTokenAdaptorV1>;
  setCallsList(value: Array<MorphoAaveV3DebtTokenAdaptorV1>): void;
  addCalls(value?: MorphoAaveV3DebtTokenAdaptorV1, index?: number): MorphoAaveV3DebtTokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV3DebtTokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV3DebtTokenAdaptorV1Calls): MorphoAaveV3DebtTokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV3DebtTokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV3DebtTokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: MorphoAaveV3DebtTokenAdaptorV1Calls, reader: jspb.BinaryReader): MorphoAaveV3DebtTokenAdaptorV1Calls;
}

export namespace MorphoAaveV3DebtTokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<MorphoAaveV3DebtTokenAdaptorV1.AsObject>,
  }
}

