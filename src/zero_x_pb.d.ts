// package: steward.v4
// file: zero_x.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class ZeroXAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasSwapWith0x(): boolean;
  clearSwapWith0x(): void;
  getSwapWith0x(): ZeroXAdaptorV1.SwapWith0x | undefined;
  setSwapWith0x(value?: ZeroXAdaptorV1.SwapWith0x): void;

  getFunctionCase(): ZeroXAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZeroXAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: ZeroXAdaptorV1): ZeroXAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZeroXAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZeroXAdaptorV1;
  static deserializeBinaryFromReader(message: ZeroXAdaptorV1, reader: jspb.BinaryReader): ZeroXAdaptorV1;
}

export namespace ZeroXAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    swapWith0x?: ZeroXAdaptorV1.SwapWith0x.AsObject,
  }

  export class SwapWith0x extends jspb.Message {
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
    toObject(includeInstance?: boolean): SwapWith0x.AsObject;
    static toObject(includeInstance: boolean, msg: SwapWith0x): SwapWith0x.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapWith0x, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapWith0x;
    static deserializeBinaryFromReader(message: SwapWith0x, reader: jspb.BinaryReader): SwapWith0x;
  }

  export namespace SwapWith0x {
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
    SWAP_WITH_0X = 2,
  }
}

export class ZeroXAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<ZeroXAdaptorV1>;
  setCallsList(value: Array<ZeroXAdaptorV1>): void;
  addCalls(value?: ZeroXAdaptorV1, index?: number): ZeroXAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZeroXAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: ZeroXAdaptorV1Calls): ZeroXAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZeroXAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZeroXAdaptorV1Calls;
  static deserializeBinaryFromReader(message: ZeroXAdaptorV1Calls, reader: jspb.BinaryReader): ZeroXAdaptorV1Calls;
}

export namespace ZeroXAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<ZeroXAdaptorV1.AsObject>,
  }
}

