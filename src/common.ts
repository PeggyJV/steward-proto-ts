/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "steward.v4";

/** Exchange selector */
export enum Exchange {
  EXCHANGE_UNSPECIFIED = 0,
  /** EXCHANGE_UNIV2 - Represents Uniswap V2 */
  EXCHANGE_UNIV2 = 1,
  /** EXCHANGE_UNIV3 - Represents Uniswap V3 */
  EXCHANGE_UNIV3 = 2,
  UNRECOGNIZED = -1,
}

export function exchangeFromJSON(object: any): Exchange {
  switch (object) {
    case 0:
    case "EXCHANGE_UNSPECIFIED":
      return Exchange.EXCHANGE_UNSPECIFIED;
    case 1:
    case "EXCHANGE_UNIV2":
      return Exchange.EXCHANGE_UNIV2;
    case 2:
    case "EXCHANGE_UNIV3":
      return Exchange.EXCHANGE_UNIV3;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exchange.UNRECOGNIZED;
  }
}

export function exchangeToJSON(object: Exchange): string {
  switch (object) {
    case Exchange.EXCHANGE_UNSPECIFIED:
      return "EXCHANGE_UNSPECIFIED";
    case Exchange.EXCHANGE_UNIV2:
      return "EXCHANGE_UNIV2";
    case Exchange.EXCHANGE_UNIV3:
      return "EXCHANGE_UNIV3";
    case Exchange.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Represents swap parameters for UniswapV2 */
export interface UniV2SwapParams {
  /** Array of addresses dictating what swap path to follow */
  path: string[];
  /** Amount of the first asset in the path to swap */
  amount: string;
  /** The minimum amount of the last asset in the path to receive */
  amountOutMin: string;
}

/** Represents swap parameters for UniswapV3 */
export interface UniV3SwapParams {
  /** Array of addresses dictating what swap path to follow */
  path: string[];
  /** Array of pool fees dictating what swap pools to use */
  poolFees: number[];
  /** Amount of the first asset in the path to swap */
  amount: string;
  /** The minimum amount of the last asset in the path to receive */
  amountOutMin: string;
}

/** Represents swap parameters for an exchange */
export interface SwapParams {
  /** Params for a Uniswap V2 swap */
  univ2Params?:
    | UniV2SwapParams
    | undefined;
  /** Params for a Uniswap V3 swap */
  univ3Params?: UniV3SwapParams | undefined;
}

/** Represents oracle swap parameters for UniswapV2 */
export interface UniV2OracleSwapParams {
  /** Array of addresses dictating what swap path to follow */
  path: string[];
}

/** Represents oracle swap parameters for UniswapV3 */
export interface UniV3OracleSwapParams {
  /** Array of addresses dictating what swap path to follow */
  path: string[];
  /** Array of pool fees dictating what swap pools to use */
  poolFees: number[];
}

/** Represents swap params for BaseAdaptor.oracleSwap() */
export interface OracleSwapParams {
  univ2Params?: UniV2OracleSwapParams | undefined;
  univ3Params?: UniV3OracleSwapParams | undefined;
}

/** Represents parameters for a Morpho Blue market */
export interface MarketParams {
  /** The address of the loan token */
  loanToken: string;
  /** The address of the collateral token */
  collateralToken: string;
  /** The address of the oracle */
  oracle: string;
  /** The address of the interest rate model */
  irm: string;
  /** The loan-to-value ratio */
  lltv: string;
}

function createBaseUniV2SwapParams(): UniV2SwapParams {
  return { path: [], amount: "", amountOutMin: "" };
}

export const UniV2SwapParams = {
  encode(message: UniV2SwapParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UniV2SwapParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniV2SwapParams();
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

  fromJSON(object: any): UniV2SwapParams {
    return {
      path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.String(e)) : [],
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      amountOutMin: isSet(object.amountOutMin) ? globalThis.String(object.amountOutMin) : "",
    };
  },

  toJSON(message: UniV2SwapParams): unknown {
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

  create<I extends Exact<DeepPartial<UniV2SwapParams>, I>>(base?: I): UniV2SwapParams {
    return UniV2SwapParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniV2SwapParams>, I>>(object: I): UniV2SwapParams {
    const message = createBaseUniV2SwapParams();
    message.path = object.path?.map((e) => e) || [];
    message.amount = object.amount ?? "";
    message.amountOutMin = object.amountOutMin ?? "";
    return message;
  },
};

function createBaseUniV3SwapParams(): UniV3SwapParams {
  return { path: [], poolFees: [], amount: "", amountOutMin: "" };
}

export const UniV3SwapParams = {
  encode(message: UniV3SwapParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UniV3SwapParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniV3SwapParams();
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

  fromJSON(object: any): UniV3SwapParams {
    return {
      path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.String(e)) : [],
      poolFees: globalThis.Array.isArray(object?.poolFees) ? object.poolFees.map((e: any) => globalThis.Number(e)) : [],
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      amountOutMin: isSet(object.amountOutMin) ? globalThis.String(object.amountOutMin) : "",
    };
  },

  toJSON(message: UniV3SwapParams): unknown {
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

  create<I extends Exact<DeepPartial<UniV3SwapParams>, I>>(base?: I): UniV3SwapParams {
    return UniV3SwapParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniV3SwapParams>, I>>(object: I): UniV3SwapParams {
    const message = createBaseUniV3SwapParams();
    message.path = object.path?.map((e) => e) || [];
    message.poolFees = object.poolFees?.map((e) => e) || [];
    message.amount = object.amount ?? "";
    message.amountOutMin = object.amountOutMin ?? "";
    return message;
  },
};

function createBaseSwapParams(): SwapParams {
  return { univ2Params: undefined, univ3Params: undefined };
}

export const SwapParams = {
  encode(message: SwapParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.univ2Params !== undefined) {
      UniV2SwapParams.encode(message.univ2Params, writer.uint32(10).fork()).ldelim();
    }
    if (message.univ3Params !== undefined) {
      UniV3SwapParams.encode(message.univ3Params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.univ2Params = UniV2SwapParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.univ3Params = UniV3SwapParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SwapParams {
    return {
      univ2Params: isSet(object.univ2Params) ? UniV2SwapParams.fromJSON(object.univ2Params) : undefined,
      univ3Params: isSet(object.univ3Params) ? UniV3SwapParams.fromJSON(object.univ3Params) : undefined,
    };
  },

  toJSON(message: SwapParams): unknown {
    const obj: any = {};
    if (message.univ2Params !== undefined) {
      obj.univ2Params = UniV2SwapParams.toJSON(message.univ2Params);
    }
    if (message.univ3Params !== undefined) {
      obj.univ3Params = UniV3SwapParams.toJSON(message.univ3Params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SwapParams>, I>>(base?: I): SwapParams {
    return SwapParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SwapParams>, I>>(object: I): SwapParams {
    const message = createBaseSwapParams();
    message.univ2Params = (object.univ2Params !== undefined && object.univ2Params !== null)
      ? UniV2SwapParams.fromPartial(object.univ2Params)
      : undefined;
    message.univ3Params = (object.univ3Params !== undefined && object.univ3Params !== null)
      ? UniV3SwapParams.fromPartial(object.univ3Params)
      : undefined;
    return message;
  },
};

function createBaseUniV2OracleSwapParams(): UniV2OracleSwapParams {
  return { path: [] };
}

export const UniV2OracleSwapParams = {
  encode(message: UniV2OracleSwapParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.path) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniV2OracleSwapParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniV2OracleSwapParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniV2OracleSwapParams {
    return { path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: UniV2OracleSwapParams): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniV2OracleSwapParams>, I>>(base?: I): UniV2OracleSwapParams {
    return UniV2OracleSwapParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniV2OracleSwapParams>, I>>(object: I): UniV2OracleSwapParams {
    const message = createBaseUniV2OracleSwapParams();
    message.path = object.path?.map((e) => e) || [];
    return message;
  },
};

function createBaseUniV3OracleSwapParams(): UniV3OracleSwapParams {
  return { path: [], poolFees: [] };
}

export const UniV3OracleSwapParams = {
  encode(message: UniV3OracleSwapParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.path) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).fork();
    for (const v of message.poolFees) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniV3OracleSwapParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniV3OracleSwapParams();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniV3OracleSwapParams {
    return {
      path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.String(e)) : [],
      poolFees: globalThis.Array.isArray(object?.poolFees) ? object.poolFees.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: UniV3OracleSwapParams): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path;
    }
    if (message.poolFees?.length) {
      obj.poolFees = message.poolFees.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniV3OracleSwapParams>, I>>(base?: I): UniV3OracleSwapParams {
    return UniV3OracleSwapParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniV3OracleSwapParams>, I>>(object: I): UniV3OracleSwapParams {
    const message = createBaseUniV3OracleSwapParams();
    message.path = object.path?.map((e) => e) || [];
    message.poolFees = object.poolFees?.map((e) => e) || [];
    return message;
  },
};

function createBaseOracleSwapParams(): OracleSwapParams {
  return { univ2Params: undefined, univ3Params: undefined };
}

export const OracleSwapParams = {
  encode(message: OracleSwapParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.univ2Params !== undefined) {
      UniV2OracleSwapParams.encode(message.univ2Params, writer.uint32(10).fork()).ldelim();
    }
    if (message.univ3Params !== undefined) {
      UniV3OracleSwapParams.encode(message.univ3Params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSwapParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSwapParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.univ2Params = UniV2OracleSwapParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.univ3Params = UniV3OracleSwapParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OracleSwapParams {
    return {
      univ2Params: isSet(object.univ2Params) ? UniV2OracleSwapParams.fromJSON(object.univ2Params) : undefined,
      univ3Params: isSet(object.univ3Params) ? UniV3OracleSwapParams.fromJSON(object.univ3Params) : undefined,
    };
  },

  toJSON(message: OracleSwapParams): unknown {
    const obj: any = {};
    if (message.univ2Params !== undefined) {
      obj.univ2Params = UniV2OracleSwapParams.toJSON(message.univ2Params);
    }
    if (message.univ3Params !== undefined) {
      obj.univ3Params = UniV3OracleSwapParams.toJSON(message.univ3Params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OracleSwapParams>, I>>(base?: I): OracleSwapParams {
    return OracleSwapParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OracleSwapParams>, I>>(object: I): OracleSwapParams {
    const message = createBaseOracleSwapParams();
    message.univ2Params = (object.univ2Params !== undefined && object.univ2Params !== null)
      ? UniV2OracleSwapParams.fromPartial(object.univ2Params)
      : undefined;
    message.univ3Params = (object.univ3Params !== undefined && object.univ3Params !== null)
      ? UniV3OracleSwapParams.fromPartial(object.univ3Params)
      : undefined;
    return message;
  },
};

function createBaseMarketParams(): MarketParams {
  return { loanToken: "", collateralToken: "", oracle: "", irm: "", lltv: "" };
}

export const MarketParams = {
  encode(message: MarketParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loanToken !== "") {
      writer.uint32(10).string(message.loanToken);
    }
    if (message.collateralToken !== "") {
      writer.uint32(18).string(message.collateralToken);
    }
    if (message.oracle !== "") {
      writer.uint32(26).string(message.oracle);
    }
    if (message.irm !== "") {
      writer.uint32(34).string(message.irm);
    }
    if (message.lltv !== "") {
      writer.uint32(42).string(message.lltv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loanToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collateralToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.oracle = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.irm = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lltv = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketParams {
    return {
      loanToken: isSet(object.loanToken) ? globalThis.String(object.loanToken) : "",
      collateralToken: isSet(object.collateralToken) ? globalThis.String(object.collateralToken) : "",
      oracle: isSet(object.oracle) ? globalThis.String(object.oracle) : "",
      irm: isSet(object.irm) ? globalThis.String(object.irm) : "",
      lltv: isSet(object.lltv) ? globalThis.String(object.lltv) : "",
    };
  },

  toJSON(message: MarketParams): unknown {
    const obj: any = {};
    if (message.loanToken !== "") {
      obj.loanToken = message.loanToken;
    }
    if (message.collateralToken !== "") {
      obj.collateralToken = message.collateralToken;
    }
    if (message.oracle !== "") {
      obj.oracle = message.oracle;
    }
    if (message.irm !== "") {
      obj.irm = message.irm;
    }
    if (message.lltv !== "") {
      obj.lltv = message.lltv;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MarketParams>, I>>(base?: I): MarketParams {
    return MarketParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MarketParams>, I>>(object: I): MarketParams {
    const message = createBaseMarketParams();
    message.loanToken = object.loanToken ?? "";
    message.collateralToken = object.collateralToken ?? "";
    message.oracle = object.oracle ?? "";
    message.irm = object.irm ?? "";
    message.lltv = object.lltv ?? "";
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
