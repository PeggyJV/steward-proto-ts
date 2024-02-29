// package: steward.v4
// file: oneinch.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class OneInchAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasSwapWithOneInch(): boolean;
  clearSwapWithOneInch(): void;
  getSwapWithOneInch(): OneInchAdaptorV1.SwapWithOneInch | undefined;
  setSwapWithOneInch(value?: OneInchAdaptorV1.SwapWithOneInch): void;

  getFunctionCase(): OneInchAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneInchAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: OneInchAdaptorV1): OneInchAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneInchAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneInchAdaptorV1;
  static deserializeBinaryFromReader(message: OneInchAdaptorV1, reader: jspb.BinaryReader): OneInchAdaptorV1;
}

export namespace OneInchAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    swapWithOneInch?: OneInchAdaptorV1.SwapWithOneInch.AsObject,
  }

  export class SwapWithOneInch extends jspb.Message {
    getTokenIn(): string;
    setTokenIn(value: string): void;

    getTokenOut(): string;
    setTokenOut(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    getSwapCallData(): Uint8Array | string;
    getSwapCallData_asU8(): Uint8Array;
    getSwapCallData_asB64(): string;
    setSwapCallData(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapWithOneInch.AsObject;
    static toObject(includeInstance: boolean, msg: SwapWithOneInch): SwapWithOneInch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapWithOneInch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapWithOneInch;
    static deserializeBinaryFromReader(message: SwapWithOneInch, reader: jspb.BinaryReader): SwapWithOneInch;
  }

  export namespace SwapWithOneInch {
    export type AsObject = {
      tokenIn: string,
      tokenOut: string,
      amount: string,
      swapCallData: Uint8Array | string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    SWAP_WITH_ONE_INCH = 2,
  }
}

export class OneInchAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<OneInchAdaptorV1>;
  setCallsList(value: Array<OneInchAdaptorV1>): void;
  addCalls(value?: OneInchAdaptorV1, index?: number): OneInchAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneInchAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: OneInchAdaptorV1Calls): OneInchAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneInchAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneInchAdaptorV1Calls;
  static deserializeBinaryFromReader(message: OneInchAdaptorV1Calls, reader: jspb.BinaryReader): OneInchAdaptorV1Calls;
}

export namespace OneInchAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<OneInchAdaptorV1.AsObject>,
  }
}

