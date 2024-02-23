/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";
import { MarketParams } from "./common";

export const protobufPackage = "steward.v4";

/** Represents call data for the Morpho Blue Supply adaptor. */
export interface MorphoBlueSupplyAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `lendToMorphoBlue(MarketParams memory _market, uint256 _assets)` */
  lendToMorphoBlue?:
    | MorphoBlueSupplyAdaptorV1_LendToMorphoBlue
    | undefined;
  /** Represents function `withdrawFromMorphoBlue(MarketParams memory _market, uint256 _assets)` */
  withdrawFromMorphoBlue?: MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue | undefined;
}

/**
 * Allows strategists to lend a specific amount for an asset on Morpho Blue
 *
 * Represents function `lendToMorphoBlue(MarketParams memory _market, uint256 _assets)`
 */
export interface MorphoBlueSupplyAdaptorV1_LendToMorphoBlue {
  /** Identifier of a Morpho Blue Market */
  market:
    | MarketParams
    | undefined;
  /** The amount of the loan token to lend */
  assets: string;
}

/**
 * Allows strategists to withdraw the underlying asset plus interest
 *
 * Represents function `withdrawFromMorphoBlue(MarketParams memory _market, uint256 _assets)`
 */
export interface MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue {
  /** Identifier of a Morpho Blue Market */
  market:
    | MarketParams
    | undefined;
  /** The amount of the loan token to lend */
  assets: string;
}

export interface MorphoBlueSupplyAdaptorV1Calls {
  calls: MorphoBlueSupplyAdaptorV1[];
}

function createBaseMorphoBlueSupplyAdaptorV1(): MorphoBlueSupplyAdaptorV1 {
  return { revokeApproval: undefined, lendToMorphoBlue: undefined, withdrawFromMorphoBlue: undefined };
}

export const MorphoBlueSupplyAdaptorV1 = {
  encode(message: MorphoBlueSupplyAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.lendToMorphoBlue !== undefined) {
      MorphoBlueSupplyAdaptorV1_LendToMorphoBlue.encode(message.lendToMorphoBlue, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawFromMorphoBlue !== undefined) {
      MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue.encode(message.withdrawFromMorphoBlue, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueSupplyAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueSupplyAdaptorV1();
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

          message.lendToMorphoBlue = MorphoBlueSupplyAdaptorV1_LendToMorphoBlue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromMorphoBlue = MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoBlueSupplyAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      lendToMorphoBlue: isSet(object.lendToMorphoBlue)
        ? MorphoBlueSupplyAdaptorV1_LendToMorphoBlue.fromJSON(object.lendToMorphoBlue)
        : undefined,
      withdrawFromMorphoBlue: isSet(object.withdrawFromMorphoBlue)
        ? MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue.fromJSON(object.withdrawFromMorphoBlue)
        : undefined,
    };
  },

  toJSON(message: MorphoBlueSupplyAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.lendToMorphoBlue !== undefined) {
      obj.lendToMorphoBlue = MorphoBlueSupplyAdaptorV1_LendToMorphoBlue.toJSON(message.lendToMorphoBlue);
    }
    if (message.withdrawFromMorphoBlue !== undefined) {
      obj.withdrawFromMorphoBlue = MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue.toJSON(
        message.withdrawFromMorphoBlue,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueSupplyAdaptorV1>, I>>(base?: I): MorphoBlueSupplyAdaptorV1 {
    return MorphoBlueSupplyAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueSupplyAdaptorV1>, I>>(object: I): MorphoBlueSupplyAdaptorV1 {
    const message = createBaseMorphoBlueSupplyAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.lendToMorphoBlue = (object.lendToMorphoBlue !== undefined && object.lendToMorphoBlue !== null)
      ? MorphoBlueSupplyAdaptorV1_LendToMorphoBlue.fromPartial(object.lendToMorphoBlue)
      : undefined;
    message.withdrawFromMorphoBlue =
      (object.withdrawFromMorphoBlue !== undefined && object.withdrawFromMorphoBlue !== null)
        ? MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue.fromPartial(object.withdrawFromMorphoBlue)
        : undefined;
    return message;
  },
};

function createBaseMorphoBlueSupplyAdaptorV1_LendToMorphoBlue(): MorphoBlueSupplyAdaptorV1_LendToMorphoBlue {
  return { market: undefined, assets: "" };
}

export const MorphoBlueSupplyAdaptorV1_LendToMorphoBlue = {
  encode(message: MorphoBlueSupplyAdaptorV1_LendToMorphoBlue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      MarketParams.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.assets !== "") {
      writer.uint32(18).string(message.assets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueSupplyAdaptorV1_LendToMorphoBlue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueSupplyAdaptorV1_LendToMorphoBlue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = MarketParams.decode(reader, reader.uint32());
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

  fromJSON(object: any): MorphoBlueSupplyAdaptorV1_LendToMorphoBlue {
    return {
      market: isSet(object.market) ? MarketParams.fromJSON(object.market) : undefined,
      assets: isSet(object.assets) ? globalThis.String(object.assets) : "",
    };
  },

  toJSON(message: MorphoBlueSupplyAdaptorV1_LendToMorphoBlue): unknown {
    const obj: any = {};
    if (message.market !== undefined) {
      obj.market = MarketParams.toJSON(message.market);
    }
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueSupplyAdaptorV1_LendToMorphoBlue>, I>>(
    base?: I,
  ): MorphoBlueSupplyAdaptorV1_LendToMorphoBlue {
    return MorphoBlueSupplyAdaptorV1_LendToMorphoBlue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueSupplyAdaptorV1_LendToMorphoBlue>, I>>(
    object: I,
  ): MorphoBlueSupplyAdaptorV1_LendToMorphoBlue {
    const message = createBaseMorphoBlueSupplyAdaptorV1_LendToMorphoBlue();
    message.market = (object.market !== undefined && object.market !== null)
      ? MarketParams.fromPartial(object.market)
      : undefined;
    message.assets = object.assets ?? "";
    return message;
  },
};

function createBaseMorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue(): MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue {
  return { market: undefined, assets: "" };
}

export const MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue = {
  encode(
    message: MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.market !== undefined) {
      MarketParams.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.assets !== "") {
      writer.uint32(18).string(message.assets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = MarketParams.decode(reader, reader.uint32());
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

  fromJSON(object: any): MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue {
    return {
      market: isSet(object.market) ? MarketParams.fromJSON(object.market) : undefined,
      assets: isSet(object.assets) ? globalThis.String(object.assets) : "",
    };
  },

  toJSON(message: MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue): unknown {
    const obj: any = {};
    if (message.market !== undefined) {
      obj.market = MarketParams.toJSON(message.market);
    }
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue>, I>>(
    base?: I,
  ): MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue {
    return MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue>, I>>(
    object: I,
  ): MorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue {
    const message = createBaseMorphoBlueSupplyAdaptorV1_WithdrawFromMorphoBlue();
    message.market = (object.market !== undefined && object.market !== null)
      ? MarketParams.fromPartial(object.market)
      : undefined;
    message.assets = object.assets ?? "";
    return message;
  },
};

function createBaseMorphoBlueSupplyAdaptorV1Calls(): MorphoBlueSupplyAdaptorV1Calls {
  return { calls: [] };
}

export const MorphoBlueSupplyAdaptorV1Calls = {
  encode(message: MorphoBlueSupplyAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      MorphoBlueSupplyAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueSupplyAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueSupplyAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(MorphoBlueSupplyAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoBlueSupplyAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => MorphoBlueSupplyAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MorphoBlueSupplyAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => MorphoBlueSupplyAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueSupplyAdaptorV1Calls>, I>>(base?: I): MorphoBlueSupplyAdaptorV1Calls {
    return MorphoBlueSupplyAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueSupplyAdaptorV1Calls>, I>>(
    object: I,
  ): MorphoBlueSupplyAdaptorV1Calls {
    const message = createBaseMorphoBlueSupplyAdaptorV1Calls();
    message.calls = object.calls?.map((e) => MorphoBlueSupplyAdaptorV1.fromPartial(e)) || [];
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
