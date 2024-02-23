/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

export interface LegacyCellarAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToCellar(Cellar cellar, uint256 assets, address oracle)` */
  depositToCellar?:
    | LegacyCellarAdaptorV1_DepositToCellar
    | undefined;
  /** Represents function `withdrawFromCellar(Cellar cellar, uint256 assets, address oracle)` */
  withdrawFromCellar?: LegacyCellarAdaptorV1_WithdrawFromCellar | undefined;
}

/**
 * Allows strategists to deposit into Cellar positions.
 *
 * Represents function `depositToCellar(Cellar cellar, uint256 assets, address oracle)`
 */
export interface LegacyCellarAdaptorV1_DepositToCellar {
  cellar: string;
  assets: string;
  oracle: string;
}

/**
 * Allows strategists to withdraw from Cellar positions.
 *
 * Represents function `withdrawFromCellar(Cellar cellar, uint256 assets, address oracle)`
 */
export interface LegacyCellarAdaptorV1_WithdrawFromCellar {
  cellar: string;
  assets: string;
  oracle: string;
}

export interface LegacyCellarAdaptorV1Calls {
  calls: LegacyCellarAdaptorV1[];
}

function createBaseLegacyCellarAdaptorV1(): LegacyCellarAdaptorV1 {
  return { revokeApproval: undefined, depositToCellar: undefined, withdrawFromCellar: undefined };
}

export const LegacyCellarAdaptorV1 = {
  encode(message: LegacyCellarAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositToCellar !== undefined) {
      LegacyCellarAdaptorV1_DepositToCellar.encode(message.depositToCellar, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawFromCellar !== undefined) {
      LegacyCellarAdaptorV1_WithdrawFromCellar.encode(message.withdrawFromCellar, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyCellarAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyCellarAdaptorV1();
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

          message.depositToCellar = LegacyCellarAdaptorV1_DepositToCellar.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromCellar = LegacyCellarAdaptorV1_WithdrawFromCellar.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyCellarAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToCellar: isSet(object.depositToCellar)
        ? LegacyCellarAdaptorV1_DepositToCellar.fromJSON(object.depositToCellar)
        : undefined,
      withdrawFromCellar: isSet(object.withdrawFromCellar)
        ? LegacyCellarAdaptorV1_WithdrawFromCellar.fromJSON(object.withdrawFromCellar)
        : undefined,
    };
  },

  toJSON(message: LegacyCellarAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToCellar !== undefined) {
      obj.depositToCellar = LegacyCellarAdaptorV1_DepositToCellar.toJSON(message.depositToCellar);
    }
    if (message.withdrawFromCellar !== undefined) {
      obj.withdrawFromCellar = LegacyCellarAdaptorV1_WithdrawFromCellar.toJSON(message.withdrawFromCellar);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyCellarAdaptorV1>, I>>(base?: I): LegacyCellarAdaptorV1 {
    return LegacyCellarAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LegacyCellarAdaptorV1>, I>>(object: I): LegacyCellarAdaptorV1 {
    const message = createBaseLegacyCellarAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToCellar = (object.depositToCellar !== undefined && object.depositToCellar !== null)
      ? LegacyCellarAdaptorV1_DepositToCellar.fromPartial(object.depositToCellar)
      : undefined;
    message.withdrawFromCellar = (object.withdrawFromCellar !== undefined && object.withdrawFromCellar !== null)
      ? LegacyCellarAdaptorV1_WithdrawFromCellar.fromPartial(object.withdrawFromCellar)
      : undefined;
    return message;
  },
};

function createBaseLegacyCellarAdaptorV1_DepositToCellar(): LegacyCellarAdaptorV1_DepositToCellar {
  return { cellar: "", assets: "", oracle: "" };
}

export const LegacyCellarAdaptorV1_DepositToCellar = {
  encode(message: LegacyCellarAdaptorV1_DepositToCellar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellar !== "") {
      writer.uint32(10).string(message.cellar);
    }
    if (message.assets !== "") {
      writer.uint32(18).string(message.assets);
    }
    if (message.oracle !== "") {
      writer.uint32(26).string(message.oracle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyCellarAdaptorV1_DepositToCellar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyCellarAdaptorV1_DepositToCellar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cellar = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assets = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.oracle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyCellarAdaptorV1_DepositToCellar {
    return {
      cellar: isSet(object.cellar) ? globalThis.String(object.cellar) : "",
      assets: isSet(object.assets) ? globalThis.String(object.assets) : "",
      oracle: isSet(object.oracle) ? globalThis.String(object.oracle) : "",
    };
  },

  toJSON(message: LegacyCellarAdaptorV1_DepositToCellar): unknown {
    const obj: any = {};
    if (message.cellar !== "") {
      obj.cellar = message.cellar;
    }
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    if (message.oracle !== "") {
      obj.oracle = message.oracle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyCellarAdaptorV1_DepositToCellar>, I>>(
    base?: I,
  ): LegacyCellarAdaptorV1_DepositToCellar {
    return LegacyCellarAdaptorV1_DepositToCellar.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LegacyCellarAdaptorV1_DepositToCellar>, I>>(
    object: I,
  ): LegacyCellarAdaptorV1_DepositToCellar {
    const message = createBaseLegacyCellarAdaptorV1_DepositToCellar();
    message.cellar = object.cellar ?? "";
    message.assets = object.assets ?? "";
    message.oracle = object.oracle ?? "";
    return message;
  },
};

function createBaseLegacyCellarAdaptorV1_WithdrawFromCellar(): LegacyCellarAdaptorV1_WithdrawFromCellar {
  return { cellar: "", assets: "", oracle: "" };
}

export const LegacyCellarAdaptorV1_WithdrawFromCellar = {
  encode(message: LegacyCellarAdaptorV1_WithdrawFromCellar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellar !== "") {
      writer.uint32(10).string(message.cellar);
    }
    if (message.assets !== "") {
      writer.uint32(18).string(message.assets);
    }
    if (message.oracle !== "") {
      writer.uint32(26).string(message.oracle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyCellarAdaptorV1_WithdrawFromCellar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyCellarAdaptorV1_WithdrawFromCellar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cellar = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assets = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.oracle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyCellarAdaptorV1_WithdrawFromCellar {
    return {
      cellar: isSet(object.cellar) ? globalThis.String(object.cellar) : "",
      assets: isSet(object.assets) ? globalThis.String(object.assets) : "",
      oracle: isSet(object.oracle) ? globalThis.String(object.oracle) : "",
    };
  },

  toJSON(message: LegacyCellarAdaptorV1_WithdrawFromCellar): unknown {
    const obj: any = {};
    if (message.cellar !== "") {
      obj.cellar = message.cellar;
    }
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    if (message.oracle !== "") {
      obj.oracle = message.oracle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyCellarAdaptorV1_WithdrawFromCellar>, I>>(
    base?: I,
  ): LegacyCellarAdaptorV1_WithdrawFromCellar {
    return LegacyCellarAdaptorV1_WithdrawFromCellar.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LegacyCellarAdaptorV1_WithdrawFromCellar>, I>>(
    object: I,
  ): LegacyCellarAdaptorV1_WithdrawFromCellar {
    const message = createBaseLegacyCellarAdaptorV1_WithdrawFromCellar();
    message.cellar = object.cellar ?? "";
    message.assets = object.assets ?? "";
    message.oracle = object.oracle ?? "";
    return message;
  },
};

function createBaseLegacyCellarAdaptorV1Calls(): LegacyCellarAdaptorV1Calls {
  return { calls: [] };
}

export const LegacyCellarAdaptorV1Calls = {
  encode(message: LegacyCellarAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      LegacyCellarAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyCellarAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyCellarAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(LegacyCellarAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyCellarAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => LegacyCellarAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LegacyCellarAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => LegacyCellarAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyCellarAdaptorV1Calls>, I>>(base?: I): LegacyCellarAdaptorV1Calls {
    return LegacyCellarAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LegacyCellarAdaptorV1Calls>, I>>(object: I): LegacyCellarAdaptorV1Calls {
    const message = createBaseLegacyCellarAdaptorV1Calls();
    message.calls = object.calls?.map((e) => LegacyCellarAdaptorV1.fromPartial(e)) || [];
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
