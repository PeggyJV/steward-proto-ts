/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Exchange, exchangeFromJSON, exchangeToJSON, OracleSwapParams, SwapParams } from "./common";
import Long = require("long");

export const protobufPackage = "steward.v4";

/**
 * Helper function that allows swaps using the Swap Router
 *
 * Represents function `swap(ERC20 assetIn, ERC20 assetOut, uint256 amountIn, SwapRouter.Exchange exchange, bytes memory params)`
 */
export interface Swap {
  /** Asset to swap from */
  assetIn: string;
  /** Asset to swap to */
  assetOut: string;
  /** Amount to swap */
  amountIn: string;
  /** The exchange to make the swap on */
  exchange: Exchange;
  /** The parameters for the swap */
  params: SwapParams | undefined;
}

/**
 * Helper function to make safe "blind" Uniswap Swaps by comparing value in vs value out of the swap.
 *
 * Represents function `oracleSwap(ERC20 assetIn, ERC20 assetOut, uint256 amountIn, SwapRouter.Exchange exchange, bytes memory params, uint64 slippage)`
 */
export interface OracleSwap {
  /** Asset to swap from */
  assetIn: string;
  /** Asset to swap to */
  assetOut: string;
  /** Amount to swap */
  amountIn: string;
  /** The exchange to make the swap on */
  exchange: Exchange;
  /** The parameters for the swap */
  params:
    | OracleSwapParams
    | undefined;
  /** The slippage allowed for the swap */
  slippage: number;
}

/**
 * Allows strategists to zero out an approval for a given `asset`.
 *
 * Represents function `revokeApproval(ERC20 asset, address spender)`
 */
export interface RevokeApproval {
  /** ERC20 Asset to revoke spender's approval for */
  asset: string;
  /** The spender to revoke approval of asset for */
  spender: string;
}

function createBaseSwap(): Swap {
  return { assetIn: "", assetOut: "", amountIn: "", exchange: 0, params: undefined };
}

export const Swap = {
  encode(message: Swap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetIn !== "") {
      writer.uint32(10).string(message.assetIn);
    }
    if (message.assetOut !== "") {
      writer.uint32(18).string(message.assetOut);
    }
    if (message.amountIn !== "") {
      writer.uint32(26).string(message.amountIn);
    }
    if (message.exchange !== 0) {
      writer.uint32(32).int32(message.exchange);
    }
    if (message.params !== undefined) {
      SwapParams.encode(message.params, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Swap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetIn = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assetOut = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.exchange = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.params = SwapParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Swap {
    return {
      assetIn: isSet(object.assetIn) ? globalThis.String(object.assetIn) : "",
      assetOut: isSet(object.assetOut) ? globalThis.String(object.assetOut) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      exchange: isSet(object.exchange) ? exchangeFromJSON(object.exchange) : 0,
      params: isSet(object.params) ? SwapParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: Swap): unknown {
    const obj: any = {};
    if (message.assetIn !== "") {
      obj.assetIn = message.assetIn;
    }
    if (message.assetOut !== "") {
      obj.assetOut = message.assetOut;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.exchange !== 0) {
      obj.exchange = exchangeToJSON(message.exchange);
    }
    if (message.params !== undefined) {
      obj.params = SwapParams.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Swap>, I>>(base?: I): Swap {
    return Swap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Swap>, I>>(object: I): Swap {
    const message = createBaseSwap();
    message.assetIn = object.assetIn ?? "";
    message.assetOut = object.assetOut ?? "";
    message.amountIn = object.amountIn ?? "";
    message.exchange = object.exchange ?? 0;
    message.params = (object.params !== undefined && object.params !== null)
      ? SwapParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseOracleSwap(): OracleSwap {
  return { assetIn: "", assetOut: "", amountIn: "", exchange: 0, params: undefined, slippage: 0 };
}

export const OracleSwap = {
  encode(message: OracleSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetIn !== "") {
      writer.uint32(10).string(message.assetIn);
    }
    if (message.assetOut !== "") {
      writer.uint32(18).string(message.assetOut);
    }
    if (message.amountIn !== "") {
      writer.uint32(26).string(message.amountIn);
    }
    if (message.exchange !== 0) {
      writer.uint32(32).int32(message.exchange);
    }
    if (message.params !== undefined) {
      OracleSwapParams.encode(message.params, writer.uint32(42).fork()).ldelim();
    }
    if (message.slippage !== 0) {
      writer.uint32(48).uint64(message.slippage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSwap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetIn = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assetOut = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.exchange = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.params = OracleSwapParams.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.slippage = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OracleSwap {
    return {
      assetIn: isSet(object.assetIn) ? globalThis.String(object.assetIn) : "",
      assetOut: isSet(object.assetOut) ? globalThis.String(object.assetOut) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      exchange: isSet(object.exchange) ? exchangeFromJSON(object.exchange) : 0,
      params: isSet(object.params) ? OracleSwapParams.fromJSON(object.params) : undefined,
      slippage: isSet(object.slippage) ? globalThis.Number(object.slippage) : 0,
    };
  },

  toJSON(message: OracleSwap): unknown {
    const obj: any = {};
    if (message.assetIn !== "") {
      obj.assetIn = message.assetIn;
    }
    if (message.assetOut !== "") {
      obj.assetOut = message.assetOut;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.exchange !== 0) {
      obj.exchange = exchangeToJSON(message.exchange);
    }
    if (message.params !== undefined) {
      obj.params = OracleSwapParams.toJSON(message.params);
    }
    if (message.slippage !== 0) {
      obj.slippage = Math.round(message.slippage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OracleSwap>, I>>(base?: I): OracleSwap {
    return OracleSwap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OracleSwap>, I>>(object: I): OracleSwap {
    const message = createBaseOracleSwap();
    message.assetIn = object.assetIn ?? "";
    message.assetOut = object.assetOut ?? "";
    message.amountIn = object.amountIn ?? "";
    message.exchange = object.exchange ?? 0;
    message.params = (object.params !== undefined && object.params !== null)
      ? OracleSwapParams.fromPartial(object.params)
      : undefined;
    message.slippage = object.slippage ?? 0;
    return message;
  },
};

function createBaseRevokeApproval(): RevokeApproval {
  return { asset: "", spender: "" };
}

export const RevokeApproval = {
  encode(message: RevokeApproval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.spender !== "") {
      writer.uint32(18).string(message.spender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokeApproval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeApproval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.asset = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RevokeApproval {
    return {
      asset: isSet(object.asset) ? globalThis.String(object.asset) : "",
      spender: isSet(object.spender) ? globalThis.String(object.spender) : "",
    };
  },

  toJSON(message: RevokeApproval): unknown {
    const obj: any = {};
    if (message.asset !== "") {
      obj.asset = message.asset;
    }
    if (message.spender !== "") {
      obj.spender = message.spender;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RevokeApproval>, I>>(base?: I): RevokeApproval {
    return RevokeApproval.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RevokeApproval>, I>>(object: I): RevokeApproval {
    const message = createBaseRevokeApproval();
    message.asset = object.asset ?? "";
    message.spender = object.spender ?? "";
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
