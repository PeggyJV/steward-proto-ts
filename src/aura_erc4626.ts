/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Aura ERC4626 adaptor V1 */
export interface AuraERC4626AdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `getRewards(IBaseRewardPool _auraPool, bool _claimExtras)` */
  getRewards?: AuraERC4626AdaptorV1_GetRewards | undefined;
}

/**
 * Allows strategist to get rewards for an Aura pool.
 *
 * Represents function `getRewards(IBaseRewardPool _auraPool, bool _claimExtras)`
 */
export interface AuraERC4626AdaptorV1_GetRewards {
  /** The address of the Aura pool to get rewards for */
  auraPool: string;
  /** Whether to claim extra rewards associated with the pool */
  claimExtras: boolean;
}

export interface AuraERC4626AdaptorV1Calls {
  calls: AuraERC4626AdaptorV1[];
}

function createBaseAuraERC4626AdaptorV1(): AuraERC4626AdaptorV1 {
  return { revokeApproval: undefined, getRewards: undefined };
}

export const AuraERC4626AdaptorV1 = {
  encode(message: AuraERC4626AdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.getRewards !== undefined) {
      AuraERC4626AdaptorV1_GetRewards.encode(message.getRewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuraERC4626AdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuraERC4626AdaptorV1();
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

          message.getRewards = AuraERC4626AdaptorV1_GetRewards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuraERC4626AdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      getRewards: isSet(object.getRewards) ? AuraERC4626AdaptorV1_GetRewards.fromJSON(object.getRewards) : undefined,
    };
  },

  toJSON(message: AuraERC4626AdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.getRewards !== undefined) {
      obj.getRewards = AuraERC4626AdaptorV1_GetRewards.toJSON(message.getRewards);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuraERC4626AdaptorV1>, I>>(base?: I): AuraERC4626AdaptorV1 {
    return AuraERC4626AdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuraERC4626AdaptorV1>, I>>(object: I): AuraERC4626AdaptorV1 {
    const message = createBaseAuraERC4626AdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.getRewards = (object.getRewards !== undefined && object.getRewards !== null)
      ? AuraERC4626AdaptorV1_GetRewards.fromPartial(object.getRewards)
      : undefined;
    return message;
  },
};

function createBaseAuraERC4626AdaptorV1_GetRewards(): AuraERC4626AdaptorV1_GetRewards {
  return { auraPool: "", claimExtras: false };
}

export const AuraERC4626AdaptorV1_GetRewards = {
  encode(message: AuraERC4626AdaptorV1_GetRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auraPool !== "") {
      writer.uint32(10).string(message.auraPool);
    }
    if (message.claimExtras === true) {
      writer.uint32(16).bool(message.claimExtras);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuraERC4626AdaptorV1_GetRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuraERC4626AdaptorV1_GetRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.auraPool = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.claimExtras = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuraERC4626AdaptorV1_GetRewards {
    return {
      auraPool: isSet(object.auraPool) ? globalThis.String(object.auraPool) : "",
      claimExtras: isSet(object.claimExtras) ? globalThis.Boolean(object.claimExtras) : false,
    };
  },

  toJSON(message: AuraERC4626AdaptorV1_GetRewards): unknown {
    const obj: any = {};
    if (message.auraPool !== "") {
      obj.auraPool = message.auraPool;
    }
    if (message.claimExtras === true) {
      obj.claimExtras = message.claimExtras;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuraERC4626AdaptorV1_GetRewards>, I>>(base?: I): AuraERC4626AdaptorV1_GetRewards {
    return AuraERC4626AdaptorV1_GetRewards.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuraERC4626AdaptorV1_GetRewards>, I>>(
    object: I,
  ): AuraERC4626AdaptorV1_GetRewards {
    const message = createBaseAuraERC4626AdaptorV1_GetRewards();
    message.auraPool = object.auraPool ?? "";
    message.claimExtras = object.claimExtras ?? false;
    return message;
  },
};

function createBaseAuraERC4626AdaptorV1Calls(): AuraERC4626AdaptorV1Calls {
  return { calls: [] };
}

export const AuraERC4626AdaptorV1Calls = {
  encode(message: AuraERC4626AdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      AuraERC4626AdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuraERC4626AdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuraERC4626AdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(AuraERC4626AdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuraERC4626AdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => AuraERC4626AdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AuraERC4626AdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => AuraERC4626AdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuraERC4626AdaptorV1Calls>, I>>(base?: I): AuraERC4626AdaptorV1Calls {
    return AuraERC4626AdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuraERC4626AdaptorV1Calls>, I>>(object: I): AuraERC4626AdaptorV1Calls {
    const message = createBaseAuraERC4626AdaptorV1Calls();
    message.calls = object.calls?.map((e) => AuraERC4626AdaptorV1.fromPartial(e)) || [];
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
