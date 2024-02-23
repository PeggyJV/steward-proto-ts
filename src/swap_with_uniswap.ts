/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Uniswap V3 adaptor */
export interface SwapWithUniswapAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `swapWithUniV2(address[] path, uint256 amount, uint256 amountOutMin)` */
  swapWithUniV2?:
    | SwapWithUniswapAdaptorV1_SwapWithUniV2
    | undefined;
  /** Represents function `swapWithUniV3(address[] path, uint24[] poolFees, uint256 amount, uint256 amountOutMin)` */
  swapWithUniV3?: SwapWithUniswapAdaptorV1_SwapWithUniV3 | undefined;
}

/**
 * Perform a swap using Uniswap V2.
 *
 * Represents function `swapWithUniV2(address[] path, uint256 amount, uint256 amountOutMin)`
 */
export interface SwapWithUniswapAdaptorV1_SwapWithUniV2 {
  path: string[];
  amount: string;
  amountOutMin: string;
}

/**
 * Perform a swap using Uniswap V3.
 *
 * Represents function `Represents function `swapWithUniV3(address[] path, uint24[] poolFees, uint256 amount, uint256 amountOutMin)``
 */
export interface SwapWithUniswapAdaptorV1_SwapWithUniV3 {
  path: string[];
  poolFees: number[];
  amount: string;
  amountOutMin: string;
}

export interface SwapWithUniswapAdaptorV1Calls {
  calls: SwapWithUniswapAdaptorV1[];
}

function createBaseSwapWithUniswapAdaptorV1(): SwapWithUniswapAdaptorV1 {
  return { revokeApproval: undefined, swapWithUniV2: undefined, swapWithUniV3: undefined };
}

export const SwapWithUniswapAdaptorV1 = {
  encode(message: SwapWithUniswapAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapWithUniV2 !== undefined) {
      SwapWithUniswapAdaptorV1_SwapWithUniV2.encode(message.swapWithUniV2, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapWithUniV3 !== undefined) {
      SwapWithUniswapAdaptorV1_SwapWithUniV3.encode(message.swapWithUniV3, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapWithUniswapAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapWithUniswapAdaptorV1();
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

          message.swapWithUniV2 = SwapWithUniswapAdaptorV1_SwapWithUniV2.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.swapWithUniV3 = SwapWithUniswapAdaptorV1_SwapWithUniV3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SwapWithUniswapAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      swapWithUniV2: isSet(object.swapWithUniV2)
        ? SwapWithUniswapAdaptorV1_SwapWithUniV2.fromJSON(object.swapWithUniV2)
        : undefined,
      swapWithUniV3: isSet(object.swapWithUniV3)
        ? SwapWithUniswapAdaptorV1_SwapWithUniV3.fromJSON(object.swapWithUniV3)
        : undefined,
    };
  },

  toJSON(message: SwapWithUniswapAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.swapWithUniV2 !== undefined) {
      obj.swapWithUniV2 = SwapWithUniswapAdaptorV1_SwapWithUniV2.toJSON(message.swapWithUniV2);
    }
    if (message.swapWithUniV3 !== undefined) {
      obj.swapWithUniV3 = SwapWithUniswapAdaptorV1_SwapWithUniV3.toJSON(message.swapWithUniV3);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SwapWithUniswapAdaptorV1>, I>>(base?: I): SwapWithUniswapAdaptorV1 {
    return SwapWithUniswapAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SwapWithUniswapAdaptorV1>, I>>(object: I): SwapWithUniswapAdaptorV1 {
    const message = createBaseSwapWithUniswapAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.swapWithUniV2 = (object.swapWithUniV2 !== undefined && object.swapWithUniV2 !== null)
      ? SwapWithUniswapAdaptorV1_SwapWithUniV2.fromPartial(object.swapWithUniV2)
      : undefined;
    message.swapWithUniV3 = (object.swapWithUniV3 !== undefined && object.swapWithUniV3 !== null)
      ? SwapWithUniswapAdaptorV1_SwapWithUniV3.fromPartial(object.swapWithUniV3)
      : undefined;
    return message;
  },
};

function createBaseSwapWithUniswapAdaptorV1_SwapWithUniV2(): SwapWithUniswapAdaptorV1_SwapWithUniV2 {
  return { path: [], amount: "", amountOutMin: "" };
}

export const SwapWithUniswapAdaptorV1_SwapWithUniV2 = {
  encode(message: SwapWithUniswapAdaptorV1_SwapWithUniV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.path) {
      writer.uint32(10).string(v!);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.amountOutMin !== "") {
      writer.uint32(26).string(message.amountOutMin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapWithUniswapAdaptorV1_SwapWithUniV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapWithUniswapAdaptorV1_SwapWithUniV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountOutMin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SwapWithUniswapAdaptorV1_SwapWithUniV2 {
    return {
      path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.String(e)) : [],
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      amountOutMin: isSet(object.amountOutMin) ? globalThis.String(object.amountOutMin) : "",
    };
  },

  toJSON(message: SwapWithUniswapAdaptorV1_SwapWithUniV2): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.amountOutMin !== "") {
      obj.amountOutMin = message.amountOutMin;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SwapWithUniswapAdaptorV1_SwapWithUniV2>, I>>(
    base?: I,
  ): SwapWithUniswapAdaptorV1_SwapWithUniV2 {
    return SwapWithUniswapAdaptorV1_SwapWithUniV2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SwapWithUniswapAdaptorV1_SwapWithUniV2>, I>>(
    object: I,
  ): SwapWithUniswapAdaptorV1_SwapWithUniV2 {
    const message = createBaseSwapWithUniswapAdaptorV1_SwapWithUniV2();
    message.path = object.path?.map((e) => e) || [];
    message.amount = object.amount ?? "";
    message.amountOutMin = object.amountOutMin ?? "";
    return message;
  },
};

function createBaseSwapWithUniswapAdaptorV1_SwapWithUniV3(): SwapWithUniswapAdaptorV1_SwapWithUniV3 {
  return { path: [], poolFees: [], amount: "", amountOutMin: "" };
}

export const SwapWithUniswapAdaptorV1_SwapWithUniV3 = {
  encode(message: SwapWithUniswapAdaptorV1_SwapWithUniV3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.path) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).fork();
    for (const v of message.poolFees) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.amountOutMin !== "") {
      writer.uint32(34).string(message.amountOutMin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapWithUniswapAdaptorV1_SwapWithUniV3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapWithUniswapAdaptorV1_SwapWithUniV3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path.push(reader.string());
          continue;
        case 2:
          if (tag === 16) {
            message.poolFees.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolFees.push(reader.uint32());
            }

            continue;
          }

          break;
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

          message.amountOutMin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SwapWithUniswapAdaptorV1_SwapWithUniV3 {
    return {
      path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.String(e)) : [],
      poolFees: globalThis.Array.isArray(object?.poolFees) ? object.poolFees.map((e: any) => globalThis.Number(e)) : [],
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      amountOutMin: isSet(object.amountOutMin) ? globalThis.String(object.amountOutMin) : "",
    };
  },

  toJSON(message: SwapWithUniswapAdaptorV1_SwapWithUniV3): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path;
    }
    if (message.poolFees?.length) {
      obj.poolFees = message.poolFees.map((e) => Math.round(e));
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.amountOutMin !== "") {
      obj.amountOutMin = message.amountOutMin;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SwapWithUniswapAdaptorV1_SwapWithUniV3>, I>>(
    base?: I,
  ): SwapWithUniswapAdaptorV1_SwapWithUniV3 {
    return SwapWithUniswapAdaptorV1_SwapWithUniV3.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SwapWithUniswapAdaptorV1_SwapWithUniV3>, I>>(
    object: I,
  ): SwapWithUniswapAdaptorV1_SwapWithUniV3 {
    const message = createBaseSwapWithUniswapAdaptorV1_SwapWithUniV3();
    message.path = object.path?.map((e) => e) || [];
    message.poolFees = object.poolFees?.map((e) => e) || [];
    message.amount = object.amount ?? "";
    message.amountOutMin = object.amountOutMin ?? "";
    return message;
  },
};

function createBaseSwapWithUniswapAdaptorV1Calls(): SwapWithUniswapAdaptorV1Calls {
  return { calls: [] };
}

export const SwapWithUniswapAdaptorV1Calls = {
  encode(message: SwapWithUniswapAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      SwapWithUniswapAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapWithUniswapAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapWithUniswapAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(SwapWithUniswapAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SwapWithUniswapAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => SwapWithUniswapAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SwapWithUniswapAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => SwapWithUniswapAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SwapWithUniswapAdaptorV1Calls>, I>>(base?: I): SwapWithUniswapAdaptorV1Calls {
    return SwapWithUniswapAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SwapWithUniswapAdaptorV1Calls>, I>>(
    object: I,
  ): SwapWithUniswapAdaptorV1Calls {
    const message = createBaseSwapWithUniswapAdaptorV1Calls();
    message.calls = object.calls?.map((e) => SwapWithUniswapAdaptorV1.fromPartial(e)) || [];
    return message;
  },
};

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
