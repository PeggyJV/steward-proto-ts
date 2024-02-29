// package: steward.v4
// file: base.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Swap extends jspb.Message {
  getAssetIn(): string;
  setAssetIn(value: string): void;

  getAssetOut(): string;
  setAssetOut(value: string): void;

  getAmountIn(): string;
  setAmountIn(value: string): void;

  getExchange(): common_pb.ExchangeMap[keyof common_pb.ExchangeMap];
  setExchange(value: common_pb.ExchangeMap[keyof common_pb.ExchangeMap]): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): common_pb.SwapParams | undefined;
  setParams(value?: common_pb.SwapParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Swap.AsObject;
  static toObject(includeInstance: boolean, msg: Swap): Swap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Swap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Swap;
  static deserializeBinaryFromReader(message: Swap, reader: jspb.BinaryReader): Swap;
}

export namespace Swap {
  export type AsObject = {
    assetIn: string,
    assetOut: string,
    amountIn: string,
    exchange: common_pb.ExchangeMap[keyof common_pb.ExchangeMap],
    params?: common_pb.SwapParams.AsObject,
  }
}

export class OracleSwap extends jspb.Message {
  getAssetIn(): string;
  setAssetIn(value: string): void;

  getAssetOut(): string;
  setAssetOut(value: string): void;

  getAmountIn(): string;
  setAmountIn(value: string): void;

  getExchange(): common_pb.ExchangeMap[keyof common_pb.ExchangeMap];
  setExchange(value: common_pb.ExchangeMap[keyof common_pb.ExchangeMap]): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): common_pb.OracleSwapParams | undefined;
  setParams(value?: common_pb.OracleSwapParams): void;

  getSlippage(): number;
  setSlippage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSwap.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSwap): OracleSwap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleSwap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSwap;
  static deserializeBinaryFromReader(message: OracleSwap, reader: jspb.BinaryReader): OracleSwap;
}

export namespace OracleSwap {
  export type AsObject = {
    assetIn: string,
    assetOut: string,
    amountIn: string,
    exchange: common_pb.ExchangeMap[keyof common_pb.ExchangeMap],
    params?: common_pb.OracleSwapParams.AsObject,
    slippage: number,
  }
}

export class RevokeApproval extends jspb.Message {
  getAsset(): string;
  setAsset(value: string): void;

  getSpender(): string;
  setSpender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeApproval.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeApproval): RevokeApproval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeApproval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeApproval;
  static deserializeBinaryFromReader(message: RevokeApproval, reader: jspb.BinaryReader): RevokeApproval;
}

export namespace RevokeApproval {
  export type AsObject = {
    asset: string,
    spender: string,
  }
}

