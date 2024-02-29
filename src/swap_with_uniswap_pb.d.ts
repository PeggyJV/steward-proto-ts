// package: steward.v4
// file: swap_with_uniswap.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class SwapWithUniswapAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasSwapWithUniV2(): boolean;
  clearSwapWithUniV2(): void;
  getSwapWithUniV2(): SwapWithUniswapAdaptorV1.SwapWithUniV2 | undefined;
  setSwapWithUniV2(value?: SwapWithUniswapAdaptorV1.SwapWithUniV2): void;

  hasSwapWithUniV3(): boolean;
  clearSwapWithUniV3(): void;
  getSwapWithUniV3(): SwapWithUniswapAdaptorV1.SwapWithUniV3 | undefined;
  setSwapWithUniV3(value?: SwapWithUniswapAdaptorV1.SwapWithUniV3): void;

  getFunctionCase(): SwapWithUniswapAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapWithUniswapAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: SwapWithUniswapAdaptorV1): SwapWithUniswapAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwapWithUniswapAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapWithUniswapAdaptorV1;
  static deserializeBinaryFromReader(message: SwapWithUniswapAdaptorV1, reader: jspb.BinaryReader): SwapWithUniswapAdaptorV1;
}

export namespace SwapWithUniswapAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    swapWithUniV2?: SwapWithUniswapAdaptorV1.SwapWithUniV2.AsObject,
    swapWithUniV3?: SwapWithUniswapAdaptorV1.SwapWithUniV3.AsObject,
  }

  export class SwapWithUniV2 extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<string>;
    setPathList(value: Array<string>): void;
    addPath(value: string, index?: number): string;

    getAmount(): string;
    setAmount(value: string): void;

    getAmountOutMin(): string;
    setAmountOutMin(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapWithUniV2.AsObject;
    static toObject(includeInstance: boolean, msg: SwapWithUniV2): SwapWithUniV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapWithUniV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapWithUniV2;
    static deserializeBinaryFromReader(message: SwapWithUniV2, reader: jspb.BinaryReader): SwapWithUniV2;
  }

  export namespace SwapWithUniV2 {
    export type AsObject = {
      pathList: Array<string>,
      amount: string,
      amountOutMin: string,
    }
  }

  export class SwapWithUniV3 extends jspb.Message {
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
    toObject(includeInstance?: boolean): SwapWithUniV3.AsObject;
    static toObject(includeInstance: boolean, msg: SwapWithUniV3): SwapWithUniV3.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapWithUniV3, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapWithUniV3;
    static deserializeBinaryFromReader(message: SwapWithUniV3, reader: jspb.BinaryReader): SwapWithUniV3;
  }

  export namespace SwapWithUniV3 {
    export type AsObject = {
      pathList: Array<string>,
      poolFeesList: Array<number>,
      amount: string,
      amountOutMin: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    SWAP_WITH_UNI_V2 = 2,
    SWAP_WITH_UNI_V3 = 3,
  }
}

export class SwapWithUniswapAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<SwapWithUniswapAdaptorV1>;
  setCallsList(value: Array<SwapWithUniswapAdaptorV1>): void;
  addCalls(value?: SwapWithUniswapAdaptorV1, index?: number): SwapWithUniswapAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapWithUniswapAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: SwapWithUniswapAdaptorV1Calls): SwapWithUniswapAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwapWithUniswapAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapWithUniswapAdaptorV1Calls;
  static deserializeBinaryFromReader(message: SwapWithUniswapAdaptorV1Calls, reader: jspb.BinaryReader): SwapWithUniswapAdaptorV1Calls;
}

export namespace SwapWithUniswapAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<SwapWithUniswapAdaptorV1.AsObject>,
  }
}

