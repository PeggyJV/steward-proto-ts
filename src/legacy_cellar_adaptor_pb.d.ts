// package: steward.v4
// file: legacy_cellar_adaptor.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class LegacyCellarAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDeposittocellar(): boolean;
  clearDeposittocellar(): void;
  getDeposittocellar(): LegacyCellarAdaptorV1.DepositToCellar | undefined;
  setDeposittocellar(value?: LegacyCellarAdaptorV1.DepositToCellar): void;

  hasWithdrawfromcellar(): boolean;
  clearWithdrawfromcellar(): void;
  getWithdrawfromcellar(): LegacyCellarAdaptorV1.WithdrawFromCellar | undefined;
  setWithdrawfromcellar(value?: LegacyCellarAdaptorV1.WithdrawFromCellar): void;

  getFunctionCase(): LegacyCellarAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegacyCellarAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: LegacyCellarAdaptorV1): LegacyCellarAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LegacyCellarAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegacyCellarAdaptorV1;
  static deserializeBinaryFromReader(message: LegacyCellarAdaptorV1, reader: jspb.BinaryReader): LegacyCellarAdaptorV1;
}

export namespace LegacyCellarAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    deposittocellar?: LegacyCellarAdaptorV1.DepositToCellar.AsObject,
    withdrawfromcellar?: LegacyCellarAdaptorV1.WithdrawFromCellar.AsObject,
  }

  export class DepositToCellar extends jspb.Message {
    getCellar(): string;
    setCellar(value: string): void;

    getAssets(): string;
    setAssets(value: string): void;

    getOracle(): string;
    setOracle(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositToCellar.AsObject;
    static toObject(includeInstance: boolean, msg: DepositToCellar): DepositToCellar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositToCellar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositToCellar;
    static deserializeBinaryFromReader(message: DepositToCellar, reader: jspb.BinaryReader): DepositToCellar;
  }

  export namespace DepositToCellar {
    export type AsObject = {
      cellar: string,
      assets: string,
      oracle: string,
    }
  }

  export class WithdrawFromCellar extends jspb.Message {
    getCellar(): string;
    setCellar(value: string): void;

    getAssets(): string;
    setAssets(value: string): void;

    getOracle(): string;
    setOracle(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromCellar.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromCellar): WithdrawFromCellar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromCellar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromCellar;
    static deserializeBinaryFromReader(message: WithdrawFromCellar, reader: jspb.BinaryReader): WithdrawFromCellar;
  }

  export namespace WithdrawFromCellar {
    export type AsObject = {
      cellar: string,
      assets: string,
      oracle: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSITTOCELLAR = 2,
    WITHDRAWFROMCELLAR = 3,
  }
}

export class LegacyCellarAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<LegacyCellarAdaptorV1>;
  setCallsList(value: Array<LegacyCellarAdaptorV1>): void;
  addCalls(value?: LegacyCellarAdaptorV1, index?: number): LegacyCellarAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegacyCellarAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: LegacyCellarAdaptorV1Calls): LegacyCellarAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LegacyCellarAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegacyCellarAdaptorV1Calls;
  static deserializeBinaryFromReader(message: LegacyCellarAdaptorV1Calls, reader: jspb.BinaryReader): LegacyCellarAdaptorV1Calls;
}

export namespace LegacyCellarAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<LegacyCellarAdaptorV1.AsObject>,
  }
}

