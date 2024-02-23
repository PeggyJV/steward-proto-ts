/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the OneInch adaptor. */
export interface OneInchAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `swapWithOneInch(ERC20 tokenIn, ERC20 tokenOut, uint256 amount, bytes swapCallData)` */
  swapWithOneInch?: OneInchAdaptorV1_SwapWithOneInch | undefined;
}

/**
 * Allows strategists to make ERC20 swaps using 1Inch.
 *
 * Represents function `swapWithOneInch(ERC20 tokenIn, ERC20 tokenOut, uint256 amount, bytes swapCallData)`
 */
export interface OneInchAdaptorV1_SwapWithOneInch {
  tokenIn: string;
  tokenOut: string;
  amount: string;
  swapCallData: Uint8Array;
}

export interface OneInchAdaptorV1Calls {
  calls: OneInchAdaptorV1[];
}

function createBaseOneInchAdaptorV1(): OneInchAdaptorV1 {
  return { revokeApproval: undefined, swapWithOneInch: undefined };
}

export const OneInchAdaptorV1 = {
  encode(message: OneInchAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapWithOneInch !== undefined) {
      OneInchAdaptorV1_SwapWithOneInch.encode(message.swapWithOneInch, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneInchAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneInchAdaptorV1();
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

          message.swapWithOneInch = OneInchAdaptorV1_SwapWithOneInch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OneInchAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      swapWithOneInch: isSet(object.swapWithOneInch)
        ? OneInchAdaptorV1_SwapWithOneInch.fromJSON(object.swapWithOneInch)
        : undefined,
    };
  },

  toJSON(message: OneInchAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.swapWithOneInch !== undefined) {
      obj.swapWithOneInch = OneInchAdaptorV1_SwapWithOneInch.toJSON(message.swapWithOneInch);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OneInchAdaptorV1>, I>>(base?: I): OneInchAdaptorV1 {
    return OneInchAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneInchAdaptorV1>, I>>(object: I): OneInchAdaptorV1 {
    const message = createBaseOneInchAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.swapWithOneInch = (object.swapWithOneInch !== undefined && object.swapWithOneInch !== null)
      ? OneInchAdaptorV1_SwapWithOneInch.fromPartial(object.swapWithOneInch)
      : undefined;
    return message;
  },
};

function createBaseOneInchAdaptorV1_SwapWithOneInch(): OneInchAdaptorV1_SwapWithOneInch {
  return { tokenIn: "", tokenOut: "", amount: "", swapCallData: new Uint8Array(0) };
}

export const OneInchAdaptorV1_SwapWithOneInch = {
  encode(message: OneInchAdaptorV1_SwapWithOneInch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OneInchAdaptorV1_SwapWithOneInch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneInchAdaptorV1_SwapWithOneInch();
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

  fromJSON(object: any): OneInchAdaptorV1_SwapWithOneInch {
    return {
      tokenIn: isSet(object.tokenIn) ? globalThis.String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? globalThis.String(object.tokenOut) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      swapCallData: isSet(object.swapCallData) ? bytesFromBase64(object.swapCallData) : new Uint8Array(0),
    };
  },

  toJSON(message: OneInchAdaptorV1_SwapWithOneInch): unknown {
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

  create<I extends Exact<DeepPartial<OneInchAdaptorV1_SwapWithOneInch>, I>>(
    base?: I,
  ): OneInchAdaptorV1_SwapWithOneInch {
    return OneInchAdaptorV1_SwapWithOneInch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneInchAdaptorV1_SwapWithOneInch>, I>>(
    object: I,
  ): OneInchAdaptorV1_SwapWithOneInch {
    const message = createBaseOneInchAdaptorV1_SwapWithOneInch();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.amount = object.amount ?? "";
    message.swapCallData = object.swapCallData ?? new Uint8Array(0);
    return message;
  },
};

function createBaseOneInchAdaptorV1Calls(): OneInchAdaptorV1Calls {
  return { calls: [] };
}

export const OneInchAdaptorV1Calls = {
  encode(message: OneInchAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      OneInchAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneInchAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneInchAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(OneInchAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OneInchAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls) ? object.calls.map((e: any) => OneInchAdaptorV1.fromJSON(e)) : [],
    };
  },

  toJSON(message: OneInchAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => OneInchAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OneInchAdaptorV1Calls>, I>>(base?: I): OneInchAdaptorV1Calls {
    return OneInchAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneInchAdaptorV1Calls>, I>>(object: I): OneInchAdaptorV1Calls {
    const message = createBaseOneInchAdaptorV1Calls();
    message.calls = object.calls?.map((e) => OneInchAdaptorV1.fromPartial(e)) || [];
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
