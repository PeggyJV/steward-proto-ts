// package: steward.v4
// file: morpho_blue_debt.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";
import * as common_pb from "./common_pb";

export class MorphoBlueDebtAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasBorrowFromMorphoBlue(): boolean;
  clearBorrowFromMorphoBlue(): void;
  getBorrowFromMorphoBlue(): MorphoBlueDebtAdaptorV1.BorrowFromMorphoBlue | undefined;
  setBorrowFromMorphoBlue(value?: MorphoBlueDebtAdaptorV1.BorrowFromMorphoBlue): void;

  hasRepayMorphoBlueDebt(): boolean;
  clearRepayMorphoBlueDebt(): void;
  getRepayMorphoBlueDebt(): MorphoBlueDebtAdaptorV1.RepayMorphoBlueDebt | undefined;
  setRepayMorphoBlueDebt(value?: MorphoBlueDebtAdaptorV1.RepayMorphoBlueDebt): void;

  getFunctionCase(): MorphoBlueDebtAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoBlueDebtAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoBlueDebtAdaptorV1): MorphoBlueDebtAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoBlueDebtAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoBlueDebtAdaptorV1;
  static deserializeBinaryFromReader(message: MorphoBlueDebtAdaptorV1, reader: jspb.BinaryReader): MorphoBlueDebtAdaptorV1;
}

export namespace MorphoBlueDebtAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    borrowFromMorphoBlue?: MorphoBlueDebtAdaptorV1.BorrowFromMorphoBlue.AsObject,
    repayMorphoBlueDebt?: MorphoBlueDebtAdaptorV1.RepayMorphoBlueDebt.AsObject,
  }

  export class BorrowFromMorphoBlue extends jspb.Message {
    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): common_pb.MarketParams | undefined;
    setMarket(value?: common_pb.MarketParams): void;

    getAmountToBorrow(): string;
    setAmountToBorrow(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BorrowFromMorphoBlue.AsObject;
    static toObject(includeInstance: boolean, msg: BorrowFromMorphoBlue): BorrowFromMorphoBlue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BorrowFromMorphoBlue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BorrowFromMorphoBlue;
    static deserializeBinaryFromReader(message: BorrowFromMorphoBlue, reader: jspb.BinaryReader): BorrowFromMorphoBlue;
  }

  export namespace BorrowFromMorphoBlue {
    export type AsObject = {
      market?: common_pb.MarketParams.AsObject,
      amountToBorrow: string,
    }
  }

  export class RepayMorphoBlueDebt extends jspb.Message {
    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): common_pb.MarketParams | undefined;
    setMarket(value?: common_pb.MarketParams): void;

    getDebtTokenRepayAmount(): string;
    setDebtTokenRepayAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepayMorphoBlueDebt.AsObject;
    static toObject(includeInstance: boolean, msg: RepayMorphoBlueDebt): RepayMorphoBlueDebt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepayMorphoBlueDebt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepayMorphoBlueDebt;
    static deserializeBinaryFromReader(message: RepayMorphoBlueDebt, reader: jspb.BinaryReader): RepayMorphoBlueDebt;
  }

  export namespace RepayMorphoBlueDebt {
    export type AsObject = {
      market?: common_pb.MarketParams.AsObject,
      debtTokenRepayAmount: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    BORROW_FROM_MORPHO_BLUE = 2,
    REPAY_MORPHO_BLUE_DEBT = 3,
  }
}

export class MorphoBlueDebtAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<MorphoBlueDebtAdaptorV1>;
  setCallsList(value: Array<MorphoBlueDebtAdaptorV1>): void;
  addCalls(value?: MorphoBlueDebtAdaptorV1, index?: number): MorphoBlueDebtAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoBlueDebtAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoBlueDebtAdaptorV1Calls): MorphoBlueDebtAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoBlueDebtAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoBlueDebtAdaptorV1Calls;
  static deserializeBinaryFromReader(message: MorphoBlueDebtAdaptorV1Calls, reader: jspb.BinaryReader): MorphoBlueDebtAdaptorV1Calls;
}

export namespace MorphoBlueDebtAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<MorphoBlueDebtAdaptorV1.AsObject>,
  }
}

