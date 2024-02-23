/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

export interface CellarAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToCellar(Cellar cellar, uint256 assets)` */
  depositToCellar?:
    | CellarAdaptorV1_DepositToCellar
    | undefined;
  /** Represents function `withdrawFromCellar(Cellar cellar, uint256 assets)` */
  withdrawFromCellar?: CellarAdaptorV1_WithdrawFromCellar | undefined;
}

/**
 * Allows strategists to deposit into Cellar positions.
 *
 * Represents function `depositToCellar(Cellar cellar, uint256 assets)`
 */
export interface CellarAdaptorV1_DepositToCellar {
  cellar: string;
  assets: string;
}

/**
 * Allows strategists to withdraw from Cellar positions.
 *
 * Represents function `withdrawFromCellar(Cellar cellar, uint256 assets)`
 */
export interface CellarAdaptorV1_WithdrawFromCellar {
  cellar: string;
  assets: string;
}

export interface CellarAdaptorV1Calls {
  calls: CellarAdaptorV1[];
}

function createBaseCellarAdaptorV1(): CellarAdaptorV1 {
  return { revokeApproval: undefined, depositToCellar: undefined, withdrawFromCellar: undefined };
}

export const CellarAdaptorV1 = {
  encode(message: CellarAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositToCellar !== undefined) {
      CellarAdaptorV1_DepositToCellar.encode(message.depositToCellar, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawFromCellar !== undefined) {
      CellarAdaptorV1_WithdrawFromCellar.encode(message.withdrawFromCellar, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarAdaptorV1();
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

          message.depositToCellar = CellarAdaptorV1_DepositToCellar.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromCellar = CellarAdaptorV1_WithdrawFromCellar.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToCellar: isSet(object.depositToCellar)
        ? CellarAdaptorV1_DepositToCellar.fromJSON(object.depositToCellar)
        : undefined,
      withdrawFromCellar: isSet(object.withdrawFromCellar)
        ? CellarAdaptorV1_WithdrawFromCellar.fromJSON(object.withdrawFromCellar)
        : undefined,
    };
  },

  toJSON(message: CellarAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToCellar !== undefined) {
      obj.depositToCellar = CellarAdaptorV1_DepositToCellar.toJSON(message.depositToCellar);
    }
    if (message.withdrawFromCellar !== undefined) {
      obj.withdrawFromCellar = CellarAdaptorV1_WithdrawFromCellar.toJSON(message.withdrawFromCellar);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarAdaptorV1>, I>>(base?: I): CellarAdaptorV1 {
    return CellarAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarAdaptorV1>, I>>(object: I): CellarAdaptorV1 {
    const message = createBaseCellarAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToCellar = (object.depositToCellar !== undefined && object.depositToCellar !== null)
      ? CellarAdaptorV1_DepositToCellar.fromPartial(object.depositToCellar)
      : undefined;
    message.withdrawFromCellar = (object.withdrawFromCellar !== undefined && object.withdrawFromCellar !== null)
      ? CellarAdaptorV1_WithdrawFromCellar.fromPartial(object.withdrawFromCellar)
      : undefined;
    return message;
  },
};

function createBaseCellarAdaptorV1_DepositToCellar(): CellarAdaptorV1_DepositToCellar {
  return { cellar: "", assets: "" };
}

export const CellarAdaptorV1_DepositToCellar = {
  encode(message: CellarAdaptorV1_DepositToCellar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellar !== "") {
      writer.uint32(10).string(message.cellar);
    }
    if (message.assets !== "") {
      writer.uint32(18).string(message.assets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarAdaptorV1_DepositToCellar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarAdaptorV1_DepositToCellar();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarAdaptorV1_DepositToCellar {
    return {
      cellar: isSet(object.cellar) ? globalThis.String(object.cellar) : "",
      assets: isSet(object.assets) ? globalThis.String(object.assets) : "",
    };
  },

  toJSON(message: CellarAdaptorV1_DepositToCellar): unknown {
    const obj: any = {};
    if (message.cellar !== "") {
      obj.cellar = message.cellar;
    }
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarAdaptorV1_DepositToCellar>, I>>(base?: I): CellarAdaptorV1_DepositToCellar {
    return CellarAdaptorV1_DepositToCellar.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarAdaptorV1_DepositToCellar>, I>>(
    object: I,
  ): CellarAdaptorV1_DepositToCellar {
    const message = createBaseCellarAdaptorV1_DepositToCellar();
    message.cellar = object.cellar ?? "";
    message.assets = object.assets ?? "";
    return message;
  },
};

function createBaseCellarAdaptorV1_WithdrawFromCellar(): CellarAdaptorV1_WithdrawFromCellar {
  return { cellar: "", assets: "" };
}

export const CellarAdaptorV1_WithdrawFromCellar = {
  encode(message: CellarAdaptorV1_WithdrawFromCellar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellar !== "") {
      writer.uint32(10).string(message.cellar);
    }
    if (message.assets !== "") {
      writer.uint32(18).string(message.assets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarAdaptorV1_WithdrawFromCellar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarAdaptorV1_WithdrawFromCellar();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarAdaptorV1_WithdrawFromCellar {
    return {
      cellar: isSet(object.cellar) ? globalThis.String(object.cellar) : "",
      assets: isSet(object.assets) ? globalThis.String(object.assets) : "",
    };
  },

  toJSON(message: CellarAdaptorV1_WithdrawFromCellar): unknown {
    const obj: any = {};
    if (message.cellar !== "") {
      obj.cellar = message.cellar;
    }
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarAdaptorV1_WithdrawFromCellar>, I>>(
    base?: I,
  ): CellarAdaptorV1_WithdrawFromCellar {
    return CellarAdaptorV1_WithdrawFromCellar.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarAdaptorV1_WithdrawFromCellar>, I>>(
    object: I,
  ): CellarAdaptorV1_WithdrawFromCellar {
    const message = createBaseCellarAdaptorV1_WithdrawFromCellar();
    message.cellar = object.cellar ?? "";
    message.assets = object.assets ?? "";
    return message;
  },
};

function createBaseCellarAdaptorV1Calls(): CellarAdaptorV1Calls {
  return { calls: [] };
}

export const CellarAdaptorV1Calls = {
  encode(message: CellarAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      CellarAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(CellarAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls) ? object.calls.map((e: any) => CellarAdaptorV1.fromJSON(e)) : [],
    };
  },

  toJSON(message: CellarAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => CellarAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarAdaptorV1Calls>, I>>(base?: I): CellarAdaptorV1Calls {
    return CellarAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarAdaptorV1Calls>, I>>(object: I): CellarAdaptorV1Calls {
    const message = createBaseCellarAdaptorV1Calls();
    message.calls = object.calls?.map((e) => CellarAdaptorV1.fromPartial(e)) || [];
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
