/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

export interface ZeroXAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `swapWith0x(ERC20 tokenIn, ERC20 tokenOut, uint256 amount, bytes memory swapCallData)` */
  swapWith0x?: ZeroXAdaptorV1_SwapWith0x | undefined;
}

/**
 * Allows strategists to make ERC20 swaps using 0x.
 *
 * Represents function `swapWith0x(ERC20 tokenIn, ERC20 tokenOut, uint256 amount, bytes memory swapCallData)`
 */
export interface ZeroXAdaptorV1_SwapWith0x {
  tokenIn: string;
  tokenOut: string;
  amount: string;
  swapCallData: Uint8Array;
}

export interface ZeroXAdaptorV1Calls {
  calls: ZeroXAdaptorV1[];
}

function createBaseZeroXAdaptorV1(): ZeroXAdaptorV1 {
  return { revokeApproval: undefined, swapWith0x: undefined };
}

export const ZeroXAdaptorV1 = {
  encode(message: ZeroXAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapWith0x !== undefined) {
      ZeroXAdaptorV1_SwapWith0x.encode(message.swapWith0x, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZeroXAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZeroXAdaptorV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.revokeApproval = RevokeApproval.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.swapWith0x = ZeroXAdaptorV1_SwapWith0x.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZeroXAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      swapWith0x: isSet(object.swapWith0x) ? ZeroXAdaptorV1_SwapWith0x.fromJSON(object.swapWith0x) : undefined,
    };
  },

  toJSON(message: ZeroXAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.swapWith0x !== undefined) {
      obj.swapWith0x = ZeroXAdaptorV1_SwapWith0x.toJSON(message.swapWith0x);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZeroXAdaptorV1>, I>>(base?: I): ZeroXAdaptorV1 {
    return ZeroXAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZeroXAdaptorV1>, I>>(object: I): ZeroXAdaptorV1 {
    const message = createBaseZeroXAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.swapWith0x = (object.swapWith0x !== undefined && object.swapWith0x !== null)
      ? ZeroXAdaptorV1_SwapWith0x.fromPartial(object.swapWith0x)
      : undefined;
    return message;
  },
};

function createBaseZeroXAdaptorV1_SwapWith0x(): ZeroXAdaptorV1_SwapWith0x {
  return { tokenIn: "", tokenOut: "", amount: "", swapCallData: new Uint8Array(0) };
}

export const ZeroXAdaptorV1_SwapWith0x = {
  encode(message: ZeroXAdaptorV1_SwapWith0x, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.swapCallData.length !== 0) {
      writer.uint32(34).bytes(message.swapCallData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZeroXAdaptorV1_SwapWith0x {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZeroXAdaptorV1_SwapWith0x();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenIn = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokenOut = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.swapCallData = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZeroXAdaptorV1_SwapWith0x {
    return {
      tokenIn: isSet(object.tokenIn) ? globalThis.String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? globalThis.String(object.tokenOut) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      swapCallData: isSet(object.swapCallData) ? bytesFromBase64(object.swapCallData) : new Uint8Array(0),
    };
  },

  toJSON(message: ZeroXAdaptorV1_SwapWith0x): unknown {
    const obj: any = {};
    if (message.tokenIn !== "") {
      obj.tokenIn = message.tokenIn;
    }
    if (message.tokenOut !== "") {
      obj.tokenOut = message.tokenOut;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.swapCallData.length !== 0) {
      obj.swapCallData = base64FromBytes(message.swapCallData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZeroXAdaptorV1_SwapWith0x>, I>>(base?: I): ZeroXAdaptorV1_SwapWith0x {
    return ZeroXAdaptorV1_SwapWith0x.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZeroXAdaptorV1_SwapWith0x>, I>>(object: I): ZeroXAdaptorV1_SwapWith0x {
    const message = createBaseZeroXAdaptorV1_SwapWith0x();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.amount = object.amount ?? "";
    message.swapCallData = object.swapCallData ?? new Uint8Array(0);
    return message;
  },
};

function createBaseZeroXAdaptorV1Calls(): ZeroXAdaptorV1Calls {
  return { calls: [] };
}

export const ZeroXAdaptorV1Calls = {
  encode(message: ZeroXAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      ZeroXAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZeroXAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZeroXAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(ZeroXAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZeroXAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls) ? object.calls.map((e: any) => ZeroXAdaptorV1.fromJSON(e)) : [],
    };
  },

  toJSON(message: ZeroXAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => ZeroXAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZeroXAdaptorV1Calls>, I>>(base?: I): ZeroXAdaptorV1Calls {
    return ZeroXAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZeroXAdaptorV1Calls>, I>>(object: I): ZeroXAdaptorV1Calls {
    const message = createBaseZeroXAdaptorV1Calls();
    message.calls = object.calls?.map((e) => ZeroXAdaptorV1.fromPartial(e)) || [];
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
