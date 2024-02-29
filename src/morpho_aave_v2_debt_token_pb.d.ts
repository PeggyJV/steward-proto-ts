// package: steward.v4
// file: morpho_aave_v2_debt_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class MorphoAaveV2DebtTokenAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasBorrowFromAaveV2Morpho(): boolean;
  clearBorrowFromAaveV2Morpho(): void;
  getBorrowFromAaveV2Morpho(): MorphoAaveV2DebtTokenAdaptorV1.BorrowFromAaveV2Morpho | undefined;
  setBorrowFromAaveV2Morpho(value?: MorphoAaveV2DebtTokenAdaptorV1.BorrowFromAaveV2Morpho): void;

  hasRepayAaveV2MorphoDebt(): boolean;
  clearRepayAaveV2MorphoDebt(): void;
  getRepayAaveV2MorphoDebt(): MorphoAaveV2DebtTokenAdaptorV1.RepayAaveV2MorphoDebt | undefined;
  setRepayAaveV2MorphoDebt(value?: MorphoAaveV2DebtTokenAdaptorV1.RepayAaveV2MorphoDebt): void;

  getFunctionCase(): MorphoAaveV2DebtTokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV2DebtTokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV2DebtTokenAdaptorV1): MorphoAaveV2DebtTokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV2DebtTokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV2DebtTokenAdaptorV1;
  static deserializeBinaryFromReader(message: MorphoAaveV2DebtTokenAdaptorV1, reader: jspb.BinaryReader): MorphoAaveV2DebtTokenAdaptorV1;
}

export namespace MorphoAaveV2DebtTokenAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    borrowFromAaveV2Morpho?: MorphoAaveV2DebtTokenAdaptorV1.BorrowFromAaveV2Morpho.AsObject,
    repayAaveV2MorphoDebt?: MorphoAaveV2DebtTokenAdaptorV1.RepayAaveV2MorphoDebt.AsObject,
  }

  export class BorrowFromAaveV2Morpho extends jspb.Message {
    getAToken(): string;
    setAToken(value: string): void;

    getAmountToBorrow(): string;
    setAmountToBorrow(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BorrowFromAaveV2Morpho.AsObject;
    static toObject(includeInstance: boolean, msg: BorrowFromAaveV2Morpho): BorrowFromAaveV2Morpho.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BorrowFromAaveV2Morpho, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BorrowFromAaveV2Morpho;
    static deserializeBinaryFromReader(message: BorrowFromAaveV2Morpho, reader: jspb.BinaryReader): BorrowFromAaveV2Morpho;
  }

  export namespace BorrowFromAaveV2Morpho {
    export type AsObject = {
      aToken: string,
      amountToBorrow: string,
    }
  }

  export class RepayAaveV2MorphoDebt extends jspb.Message {
    getAToken(): string;
    setAToken(value: string): void;

    getAmountToRepay(): string;
    setAmountToRepay(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepayAaveV2MorphoDebt.AsObject;
    static toObject(includeInstance: boolean, msg: RepayAaveV2MorphoDebt): RepayAaveV2MorphoDebt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepayAaveV2MorphoDebt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepayAaveV2MorphoDebt;
    static deserializeBinaryFromReader(message: RepayAaveV2MorphoDebt, reader: jspb.BinaryReader): RepayAaveV2MorphoDebt;
  }

  export namespace RepayAaveV2MorphoDebt {
    export type AsObject = {
      aToken: string,
      amountToRepay: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    BORROW_FROM_AAVE_V2_MORPHO = 2,
    REPAY_AAVE_V2_MORPHO_DEBT = 3,
  }
}

export class MorphoAaveV2DebtTokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<MorphoAaveV2DebtTokenAdaptorV1>;
  setCallsList(value: Array<MorphoAaveV2DebtTokenAdaptorV1>): void;
  addCalls(value?: MorphoAaveV2DebtTokenAdaptorV1, index?: number): MorphoAaveV2DebtTokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MorphoAaveV2DebtTokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: MorphoAaveV2DebtTokenAdaptorV1Calls): MorphoAaveV2DebtTokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MorphoAaveV2DebtTokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MorphoAaveV2DebtTokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: MorphoAaveV2DebtTokenAdaptorV1Calls, reader: jspb.BinaryReader): MorphoAaveV2DebtTokenAdaptorV1Calls;
}

export namespace MorphoAaveV2DebtTokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<MorphoAaveV2DebtTokenAdaptorV1.AsObject>,
  }
}

