/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";
import { MarketParams } from "./common";

export const protobufPackage = "steward.v4";

/** Represents call data for the Morpho Blue Collateral adaptor. */
export interface MorphoBlueCollateralAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `addCollateral(MarketParams memory _market, uint256 _collateralToDeposit)` */
  addCollateral?:
    | MorphoBlueCollateralAdaptorV1_AddCollateral
    | undefined;
  /** Represents function `removeCollateral(MarketParams memory _market, uint256 _collateralAmount)` */
  removeCollateral?: MorphoBlueCollateralAdaptorV1_RemoveCollateral | undefined;
}

/**
 * Allows strategists to add collateral to the respective cellar position on specified MB Market, enabling borrowing.
 *
 * Represents function `addCollateral(MarketParams memory _market, uint256 _collateralToDeposit)`
 */
export interface MorphoBlueCollateralAdaptorV1_AddCollateral {
  /** Identifier of a Morpho Blue Market */
  market:
    | MarketParams
    | undefined;
  /** The amount of collateral to add */
  collateralToDeposit: string;
}

/**
 * Allows strategists to remove collateral from the respective cellar position on specified MB Market.
 *
 * Represents function `removeCollateral(MarketParams memory _market, uint256 _collateralAmount)`
 */
export interface MorphoBlueCollateralAdaptorV1_RemoveCollateral {
  /** Identifier of a Morpho Blue Market */
  market:
    | MarketParams
    | undefined;
  /** The amount of collateral to remove */
  collateralAmount: string;
}

export interface MorphoBlueCollateralAdaptorV1Calls {
  calls: MorphoBlueCollateralAdaptorV1[];
}

function createBaseMorphoBlueCollateralAdaptorV1(): MorphoBlueCollateralAdaptorV1 {
  return { revokeApproval: undefined, addCollateral: undefined, removeCollateral: undefined };
}

export const MorphoBlueCollateralAdaptorV1 = {
  encode(message: MorphoBlueCollateralAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.addCollateral !== undefined) {
      MorphoBlueCollateralAdaptorV1_AddCollateral.encode(message.addCollateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.removeCollateral !== undefined) {
      MorphoBlueCollateralAdaptorV1_RemoveCollateral.encode(message.removeCollateral, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueCollateralAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueCollateralAdaptorV1();
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

          message.addCollateral = MorphoBlueCollateralAdaptorV1_AddCollateral.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.removeCollateral = MorphoBlueCollateralAdaptorV1_RemoveCollateral.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoBlueCollateralAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      addCollateral: isSet(object.addCollateral)
        ? MorphoBlueCollateralAdaptorV1_AddCollateral.fromJSON(object.addCollateral)
        : undefined,
      removeCollateral: isSet(object.removeCollateral)
        ? MorphoBlueCollateralAdaptorV1_RemoveCollateral.fromJSON(object.removeCollateral)
        : undefined,
    };
  },

  toJSON(message: MorphoBlueCollateralAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.addCollateral !== undefined) {
      obj.addCollateral = MorphoBlueCollateralAdaptorV1_AddCollateral.toJSON(message.addCollateral);
    }
    if (message.removeCollateral !== undefined) {
      obj.removeCollateral = MorphoBlueCollateralAdaptorV1_RemoveCollateral.toJSON(message.removeCollateral);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueCollateralAdaptorV1>, I>>(base?: I): MorphoBlueCollateralAdaptorV1 {
    return MorphoBlueCollateralAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueCollateralAdaptorV1>, I>>(
    object: I,
  ): MorphoBlueCollateralAdaptorV1 {
    const message = createBaseMorphoBlueCollateralAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.addCollateral = (object.addCollateral !== undefined && object.addCollateral !== null)
      ? MorphoBlueCollateralAdaptorV1_AddCollateral.fromPartial(object.addCollateral)
      : undefined;
    message.removeCollateral = (object.removeCollateral !== undefined && object.removeCollateral !== null)
      ? MorphoBlueCollateralAdaptorV1_RemoveCollateral.fromPartial(object.removeCollateral)
      : undefined;
    return message;
  },
};

function createBaseMorphoBlueCollateralAdaptorV1_AddCollateral(): MorphoBlueCollateralAdaptorV1_AddCollateral {
  return { market: undefined, collateralToDeposit: "" };
}

export const MorphoBlueCollateralAdaptorV1_AddCollateral = {
  encode(message: MorphoBlueCollateralAdaptorV1_AddCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      MarketParams.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateralToDeposit !== "") {
      writer.uint32(18).string(message.collateralToDeposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueCollateralAdaptorV1_AddCollateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueCollateralAdaptorV1_AddCollateral();
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

          message.collateralToDeposit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoBlueCollateralAdaptorV1_AddCollateral {
    return {
      market: isSet(object.market) ? MarketParams.fromJSON(object.market) : undefined,
      collateralToDeposit: isSet(object.collateralToDeposit) ? globalThis.String(object.collateralToDeposit) : "",
    };
  },

  toJSON(message: MorphoBlueCollateralAdaptorV1_AddCollateral): unknown {
    const obj: any = {};
    if (message.market !== undefined) {
      obj.market = MarketParams.toJSON(message.market);
    }
    if (message.collateralToDeposit !== "") {
      obj.collateralToDeposit = message.collateralToDeposit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueCollateralAdaptorV1_AddCollateral>, I>>(
    base?: I,
  ): MorphoBlueCollateralAdaptorV1_AddCollateral {
    return MorphoBlueCollateralAdaptorV1_AddCollateral.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueCollateralAdaptorV1_AddCollateral>, I>>(
    object: I,
  ): MorphoBlueCollateralAdaptorV1_AddCollateral {
    const message = createBaseMorphoBlueCollateralAdaptorV1_AddCollateral();
    message.market = (object.market !== undefined && object.market !== null)
      ? MarketParams.fromPartial(object.market)
      : undefined;
    message.collateralToDeposit = object.collateralToDeposit ?? "";
    return message;
  },
};

function createBaseMorphoBlueCollateralAdaptorV1_RemoveCollateral(): MorphoBlueCollateralAdaptorV1_RemoveCollateral {
  return { market: undefined, collateralAmount: "" };
}

export const MorphoBlueCollateralAdaptorV1_RemoveCollateral = {
  encode(
    message: MorphoBlueCollateralAdaptorV1_RemoveCollateral,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.market !== undefined) {
      MarketParams.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateralAmount !== "") {
      writer.uint32(18).string(message.collateralAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueCollateralAdaptorV1_RemoveCollateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueCollateralAdaptorV1_RemoveCollateral();
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

          message.collateralAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoBlueCollateralAdaptorV1_RemoveCollateral {
    return {
      market: isSet(object.market) ? MarketParams.fromJSON(object.market) : undefined,
      collateralAmount: isSet(object.collateralAmount) ? globalThis.String(object.collateralAmount) : "",
    };
  },

  toJSON(message: MorphoBlueCollateralAdaptorV1_RemoveCollateral): unknown {
    const obj: any = {};
    if (message.market !== undefined) {
      obj.market = MarketParams.toJSON(message.market);
    }
    if (message.collateralAmount !== "") {
      obj.collateralAmount = message.collateralAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueCollateralAdaptorV1_RemoveCollateral>, I>>(
    base?: I,
  ): MorphoBlueCollateralAdaptorV1_RemoveCollateral {
    return MorphoBlueCollateralAdaptorV1_RemoveCollateral.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueCollateralAdaptorV1_RemoveCollateral>, I>>(
    object: I,
  ): MorphoBlueCollateralAdaptorV1_RemoveCollateral {
    const message = createBaseMorphoBlueCollateralAdaptorV1_RemoveCollateral();
    message.market = (object.market !== undefined && object.market !== null)
      ? MarketParams.fromPartial(object.market)
      : undefined;
    message.collateralAmount = object.collateralAmount ?? "";
    return message;
  },
};

function createBaseMorphoBlueCollateralAdaptorV1Calls(): MorphoBlueCollateralAdaptorV1Calls {
  return { calls: [] };
}

export const MorphoBlueCollateralAdaptorV1Calls = {
  encode(message: MorphoBlueCollateralAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      MorphoBlueCollateralAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueCollateralAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueCollateralAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(MorphoBlueCollateralAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoBlueCollateralAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => MorphoBlueCollateralAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MorphoBlueCollateralAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => MorphoBlueCollateralAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueCollateralAdaptorV1Calls>, I>>(
    base?: I,
  ): MorphoBlueCollateralAdaptorV1Calls {
    return MorphoBlueCollateralAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueCollateralAdaptorV1Calls>, I>>(
    object: I,
  ): MorphoBlueCollateralAdaptorV1Calls {
    const message = createBaseMorphoBlueCollateralAdaptorV1Calls();
    message.calls = object.calls?.map((e) => MorphoBlueCollateralAdaptorV1.fromPartial(e)) || [];
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
