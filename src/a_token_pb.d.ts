// package: steward.v4
// file: a_token.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class AaveATokenAdaptorV1 extends jspb.Message {
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

  hasDepositToAave(): boolean;
  clearDepositToAave(): void;
  getDepositToAave(): AaveATokenAdaptorV1.DepositToAave | undefined;
  setDepositToAave(value?: AaveATokenAdaptorV1.DepositToAave): void;

  hasWithdrawFromAave(): boolean;
  clearWithdrawFromAave(): void;
  getWithdrawFromAave(): AaveATokenAdaptorV1.WithdrawFromAave | undefined;
  setWithdrawFromAave(value?: AaveATokenAdaptorV1.WithdrawFromAave): void;

  getFunctionCase(): AaveATokenAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveATokenAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: AaveATokenAdaptorV1): AaveATokenAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveATokenAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveATokenAdaptorV1;
  static deserializeBinaryFromReader(message: AaveATokenAdaptorV1, reader: jspb.BinaryReader): AaveATokenAdaptorV1;
}

export namespace AaveATokenAdaptorV1 {
  export type AsObject = {
    swap?: base_pb.Swap.AsObject,
    oracleSwap?: base_pb.OracleSwap.AsObject,
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositToAave?: AaveATokenAdaptorV1.DepositToAave.AsObject,
    withdrawFromAave?: AaveATokenAdaptorV1.WithdrawFromAave.AsObject,
  }

  export class DepositToAave extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositToAave.AsObject;
    static toObject(includeInstance: boolean, msg: DepositToAave): DepositToAave.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositToAave, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositToAave;
    static deserializeBinaryFromReader(message: DepositToAave, reader: jspb.BinaryReader): DepositToAave;
  }

  export namespace DepositToAave {
    export type AsObject = {
      token: string,
      amount: string,
    }
  }

  export class WithdrawFromAave extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromAave.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromAave): WithdrawFromAave.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromAave, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromAave;
    static deserializeBinaryFromReader(message: WithdrawFromAave, reader: jspb.BinaryReader): WithdrawFromAave;
  }

  export namespace WithdrawFromAave {
    export type AsObject = {
      token: string,
      amount: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    SWAP = 1,
    ORACLE_SWAP = 2,
    REVOKE_APPROVAL = 3,
    DEPOSIT_TO_AAVE = 4,
    WITHDRAW_FROM_AAVE = 5,
  }
}

export class AaveATokenAdaptorV2 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDepositToAave(): boolean;
  clearDepositToAave(): void;
  getDepositToAave(): AaveATokenAdaptorV2.DepositToAave | undefined;
  setDepositToAave(value?: AaveATokenAdaptorV2.DepositToAave): void;

  hasWithdrawFromAave(): boolean;
  clearWithdrawFromAave(): void;
  getWithdrawFromAave(): AaveATokenAdaptorV2.WithdrawFromAave | undefined;
  setWithdrawFromAave(value?: AaveATokenAdaptorV2.WithdrawFromAave): void;

  getFunctionCase(): AaveATokenAdaptorV2.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveATokenAdaptorV2.AsObject;
  static toObject(includeInstance: boolean, msg: AaveATokenAdaptorV2): AaveATokenAdaptorV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveATokenAdaptorV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveATokenAdaptorV2;
  static deserializeBinaryFromReader(message: AaveATokenAdaptorV2, reader: jspb.BinaryReader): AaveATokenAdaptorV2;
}

export namespace AaveATokenAdaptorV2 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositToAave?: AaveATokenAdaptorV2.DepositToAave.AsObject,
    withdrawFromAave?: AaveATokenAdaptorV2.WithdrawFromAave.AsObject,
  }

  export class DepositToAave extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositToAave.AsObject;
    static toObject(includeInstance: boolean, msg: DepositToAave): DepositToAave.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositToAave, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositToAave;
    static deserializeBinaryFromReader(message: DepositToAave, reader: jspb.BinaryReader): DepositToAave;
  }

  export namespace DepositToAave {
    export type AsObject = {
      token: string,
      amount: string,
    }
  }

  export class WithdrawFromAave extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromAave.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromAave): WithdrawFromAave.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromAave, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromAave;
    static deserializeBinaryFromReader(message: WithdrawFromAave, reader: jspb.BinaryReader): WithdrawFromAave;
  }

  export namespace WithdrawFromAave {
    export type AsObject = {
      token: string,
      amount: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSIT_TO_AAVE = 2,
    WITHDRAW_FROM_AAVE = 3,
  }
}

export class AaveATokenAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<AaveATokenAdaptorV1>;
  setCallsList(value: Array<AaveATokenAdaptorV1>): void;
  addCalls(value?: AaveATokenAdaptorV1, index?: number): AaveATokenAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveATokenAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: AaveATokenAdaptorV1Calls): AaveATokenAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveATokenAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveATokenAdaptorV1Calls;
  static deserializeBinaryFromReader(message: AaveATokenAdaptorV1Calls, reader: jspb.BinaryReader): AaveATokenAdaptorV1Calls;
}

export namespace AaveATokenAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<AaveATokenAdaptorV1.AsObject>,
  }
}

export class AaveATokenAdaptorV2Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<AaveATokenAdaptorV2>;
  setCallsList(value: Array<AaveATokenAdaptorV2>): void;
  addCalls(value?: AaveATokenAdaptorV2, index?: number): AaveATokenAdaptorV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveATokenAdaptorV2Calls.AsObject;
  static toObject(includeInstance: boolean, msg: AaveATokenAdaptorV2Calls): AaveATokenAdaptorV2Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveATokenAdaptorV2Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveATokenAdaptorV2Calls;
  static deserializeBinaryFromReader(message: AaveATokenAdaptorV2Calls, reader: jspb.BinaryReader): AaveATokenAdaptorV2Calls;
}

export namespace AaveATokenAdaptorV2Calls {
  export type AsObject = {
    callsList: Array<AaveATokenAdaptorV2.AsObject>,
  }
}

