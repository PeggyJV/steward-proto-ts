// package: steward.v4
// file: common.proto

import * as jspb from "google-protobuf";

export class UniV2SwapParams extends jspb.Message {
  clearPathList(): void;
  getPathList(): Array<string>;
  setPathList(value: Array<string>): void;
  addPath(value: string, index?: number): string;

  getAmount(): string;
  setAmount(value: string): void;

  getAmountOutMin(): string;
  setAmountOutMin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniV2SwapParams.AsObject;
  static toObject(includeInstance: boolean, msg: UniV2SwapParams): UniV2SwapParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniV2SwapParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniV2SwapParams;
  static deserializeBinaryFromReader(message: UniV2SwapParams, reader: jspb.BinaryReader): UniV2SwapParams;
}

export namespace UniV2SwapParams {
  export type AsObject = {
    pathList: Array<string>,
    amount: string,
    amountOutMin: string,
  }
}

export class UniV3SwapParams extends jspb.Message {
  clearPathList(): void;
  getPathList(): Array<string>;
  setPathList(value: Array<string>): void;
  addPath(value: string, index?: number): string;

  clearPoolFeesList(): void;
  getPoolFeesList(): Array<number>;
  setPoolFeesList(value: Array<number>): void;
  addPoolFees(value: number, index?: number): number;

  getAmount(): string;
  setAmount(value: string): void;

  getAmountOutMin(): string;
  setAmountOutMin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniV3SwapParams.AsObject;
  static toObject(includeInstance: boolean, msg: UniV3SwapParams): UniV3SwapParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniV3SwapParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniV3SwapParams;
  static deserializeBinaryFromReader(message: UniV3SwapParams, reader: jspb.BinaryReader): UniV3SwapParams;
}

export namespace UniV3SwapParams {
  export type AsObject = {
    pathList: Array<string>,
    poolFeesList: Array<number>,
    amount: string,
    amountOutMin: string,
  }
}

export class SwapParams extends jspb.Message {
  hasUniv2Params(): boolean;
  clearUniv2Params(): void;
  getUniv2Params(): UniV2SwapParams | undefined;
  setUniv2Params(value?: UniV2SwapParams): void;

  hasUniv3Params(): boolean;
  clearUniv3Params(): void;
  getUniv3Params(): UniV3SwapParams | undefined;
  setUniv3Params(value?: UniV3SwapParams): void;

  getParamsCase(): SwapParams.ParamsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapParams.AsObject;
  static toObject(includeInstance: boolean, msg: SwapParams): SwapParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwapParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapParams;
  static deserializeBinaryFromReader(message: SwapParams, reader: jspb.BinaryReader): SwapParams;
}

export namespace SwapParams {
  export type AsObject = {
    univ2Params?: UniV2SwapParams.AsObject,
    univ3Params?: UniV3SwapParams.AsObject,
  }

  export enum ParamsCase {
    PARAMS_NOT_SET = 0,
    UNIV2_PARAMS = 1,
    UNIV3_PARAMS = 2,
  }
}

export class UniV2OracleSwapParams extends jspb.Message {
  clearPathList(): void;
  getPathList(): Array<string>;
  setPathList(value: Array<string>): void;
  addPath(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniV2OracleSwapParams.AsObject;
  static toObject(includeInstance: boolean, msg: UniV2OracleSwapParams): UniV2OracleSwapParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniV2OracleSwapParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniV2OracleSwapParams;
  static deserializeBinaryFromReader(message: UniV2OracleSwapParams, reader: jspb.BinaryReader): UniV2OracleSwapParams;
}

export namespace UniV2OracleSwapParams {
  export type AsObject = {
    pathList: Array<string>,
  }
}

export class UniV3OracleSwapParams extends jspb.Message {
  clearPathList(): void;
  getPathList(): Array<string>;
  setPathList(value: Array<string>): void;
  addPath(value: string, index?: number): string;

  clearPoolFeesList(): void;
  getPoolFeesList(): Array<number>;
  setPoolFeesList(value: Array<number>): void;
  addPoolFees(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniV3OracleSwapParams.AsObject;
  static toObject(includeInstance: boolean, msg: UniV3OracleSwapParams): UniV3OracleSwapParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniV3OracleSwapParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniV3OracleSwapParams;
  static deserializeBinaryFromReader(message: UniV3OracleSwapParams, reader: jspb.BinaryReader): UniV3OracleSwapParams;
}

export namespace UniV3OracleSwapParams {
  export type AsObject = {
    pathList: Array<string>,
    poolFeesList: Array<number>,
  }
}

export class OracleSwapParams extends jspb.Message {
  hasUniv2Params(): boolean;
  clearUniv2Params(): void;
  getUniv2Params(): UniV2OracleSwapParams | undefined;
  setUniv2Params(value?: UniV2OracleSwapParams): void;

  hasUniv3Params(): boolean;
  clearUniv3Params(): void;
  getUniv3Params(): UniV3OracleSwapParams | undefined;
  setUniv3Params(value?: UniV3OracleSwapParams): void;

  getParamsCase(): OracleSwapParams.ParamsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSwapParams.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSwapParams): OracleSwapParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleSwapParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSwapParams;
  static deserializeBinaryFromReader(message: OracleSwapParams, reader: jspb.BinaryReader): OracleSwapParams;
}

export namespace OracleSwapParams {
  export type AsObject = {
    univ2Params?: UniV2OracleSwapParams.AsObject,
    univ3Params?: UniV3OracleSwapParams.AsObject,
  }

  export enum ParamsCase {
    PARAMS_NOT_SET = 0,
    UNIV2_PARAMS = 1,
    UNIV3_PARAMS = 2,
  }
}

export class MarketParams extends jspb.Message {
  getLoanToken(): string;
  setLoanToken(value: string): void;

  getCollateralToken(): string;
  setCollateralToken(value: string): void;

  getOracle(): string;
  setOracle(value: string): void;

  getIrm(): string;
  setIrm(value: string): void;

  getLltv(): string;
  setLltv(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketParams.AsObject;
  static toObject(includeInstance: boolean, msg: MarketParams): MarketParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketParams;
  static deserializeBinaryFromReader(message: MarketParams, reader: jspb.BinaryReader): MarketParams;
}

export namespace MarketParams {
  export type AsObject = {
    loanToken: string,
    collateralToken: string,
    oracle: string,
    irm: string,
    lltv: string,
  }
}

export interface ExchangeMap {
  EXCHANGE_UNSPECIFIED: 0;
  EXCHANGE_UNIV2: 1;
  EXCHANGE_UNIV3: 2;
}

export const Exchange: ExchangeMap;

