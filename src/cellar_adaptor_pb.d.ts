// package: steward.v4
// file: cellar_adaptor.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class CellarAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDeposittocellar(): boolean;
  clearDeposittocellar(): void;
  getDeposittocellar(): CellarAdaptorV1.DepositToCellar | undefined;
  setDeposittocellar(value?: CellarAdaptorV1.DepositToCellar): void;

  hasWithdrawfromcellar(): boolean;
  clearWithdrawfromcellar(): void;
  getWithdrawfromcellar(): CellarAdaptorV1.WithdrawFromCellar | undefined;
  setWithdrawfromcellar(value?: CellarAdaptorV1.WithdrawFromCellar): void;

  getFunctionCase(): CellarAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: CellarAdaptorV1): CellarAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarAdaptorV1;
  static deserializeBinaryFromReader(message: CellarAdaptorV1, reader: jspb.BinaryReader): CellarAdaptorV1;
}

export namespace CellarAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    deposittocellar?: CellarAdaptorV1.DepositToCellar.AsObject,
    withdrawfromcellar?: CellarAdaptorV1.WithdrawFromCellar.AsObject,
  }

  export class DepositToCellar extends jspb.Message {
    getCellar(): string;
    setCellar(value: string): void;

    getAssets(): string;
    setAssets(value: string): void;

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
    }
  }

  export class WithdrawFromCellar extends jspb.Message {
    getCellar(): string;
    setCellar(value: string): void;

    getAssets(): string;
    setAssets(value: string): void;

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
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSITTOCELLAR = 2,
    WITHDRAWFROMCELLAR = 3,
  }
}

export class CellarAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<CellarAdaptorV1>;
  setCallsList(value: Array<CellarAdaptorV1>): void;
  addCalls(value?: CellarAdaptorV1, index?: number): CellarAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: CellarAdaptorV1Calls): CellarAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarAdaptorV1Calls;
  static deserializeBinaryFromReader(message: CellarAdaptorV1Calls, reader: jspb.BinaryReader): CellarAdaptorV1Calls;
}

export namespace CellarAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<CellarAdaptorV1.AsObject>,
  }
}

