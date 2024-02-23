/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Frax Collateral F Token adaptor. */
export interface CollateralFTokenAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `addCollateral(IFToken _fraxlendPair, uint256 _collateralToDeposit)` */
  addCollateral?:
    | CollateralFTokenAdaptorV1_AddCollateral
    | undefined;
  /** Represents function `removeCollateral(uint256 _collateralAmount, IFToken _fraxlendPair)` */
  removeCollateral?: CollateralFTokenAdaptorV1_RemoveCollateral | undefined;
}

/**
 * Allows strategists to add collateral to the respective cellar position on FraxLend, enabling borrowing.
 *
 * Represents function `addCollateral(IFToken _fraxlendPair, uint256 _collateralToDeposit)`
 */
export interface CollateralFTokenAdaptorV1_AddCollateral {
  /** The FraxLend pair to add collateral to. */
  fraxlendPair: string;
  /** The amount of collateral to add to the cellar position. */
  collateralToDeposit: string;
}

/**
 * Allows strategists to remove collateral from the respective cellar position on FraxLend.
 *
 * Represents function `removeCollateral(uint256 _collateralAmount, IFToken _fraxlendPair)`
 */
export interface CollateralFTokenAdaptorV1_RemoveCollateral {
  /** The amount of collateral to remove from the cellar position. */
  collateralAmount: string;
  /** The FraxLend pair to remove collateral from. */
  fraxlendPair: string;
}

export interface CollateralFTokenAdaptorV1Calls {
  calls: CollateralFTokenAdaptorV1[];
}

function createBaseCollateralFTokenAdaptorV1(): CollateralFTokenAdaptorV1 {
  return { revokeApproval: undefined, addCollateral: undefined, removeCollateral: undefined };
}

export const CollateralFTokenAdaptorV1 = {
  encode(message: CollateralFTokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.addCollateral !== undefined) {
      CollateralFTokenAdaptorV1_AddCollateral.encode(message.addCollateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.removeCollateral !== undefined) {
      CollateralFTokenAdaptorV1_RemoveCollateral.encode(message.removeCollateral, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollateralFTokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralFTokenAdaptorV1();
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

          message.addCollateral = CollateralFTokenAdaptorV1_AddCollateral.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.removeCollateral = CollateralFTokenAdaptorV1_RemoveCollateral.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CollateralFTokenAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      addCollateral: isSet(object.addCollateral)
        ? CollateralFTokenAdaptorV1_AddCollateral.fromJSON(object.addCollateral)
        : undefined,
      removeCollateral: isSet(object.removeCollateral)
        ? CollateralFTokenAdaptorV1_RemoveCollateral.fromJSON(object.removeCollateral)
        : undefined,
    };
  },

  toJSON(message: CollateralFTokenAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.addCollateral !== undefined) {
      obj.addCollateral = CollateralFTokenAdaptorV1_AddCollateral.toJSON(message.addCollateral);
    }
    if (message.removeCollateral !== undefined) {
      obj.removeCollateral = CollateralFTokenAdaptorV1_RemoveCollateral.toJSON(message.removeCollateral);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollateralFTokenAdaptorV1>, I>>(base?: I): CollateralFTokenAdaptorV1 {
    return CollateralFTokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollateralFTokenAdaptorV1>, I>>(object: I): CollateralFTokenAdaptorV1 {
    const message = createBaseCollateralFTokenAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.addCollateral = (object.addCollateral !== undefined && object.addCollateral !== null)
      ? CollateralFTokenAdaptorV1_AddCollateral.fromPartial(object.addCollateral)
      : undefined;
    message.removeCollateral = (object.removeCollateral !== undefined && object.removeCollateral !== null)
      ? CollateralFTokenAdaptorV1_RemoveCollateral.fromPartial(object.removeCollateral)
      : undefined;
    return message;
  },
};

function createBaseCollateralFTokenAdaptorV1_AddCollateral(): CollateralFTokenAdaptorV1_AddCollateral {
  return { fraxlendPair: "", collateralToDeposit: "" };
}

export const CollateralFTokenAdaptorV1_AddCollateral = {
  encode(message: CollateralFTokenAdaptorV1_AddCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fraxlendPair !== "") {
      writer.uint32(10).string(message.fraxlendPair);
    }
    if (message.collateralToDeposit !== "") {
      writer.uint32(18).string(message.collateralToDeposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollateralFTokenAdaptorV1_AddCollateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralFTokenAdaptorV1_AddCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fraxlendPair = reader.string();
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

  fromJSON(object: any): CollateralFTokenAdaptorV1_AddCollateral {
    return {
      fraxlendPair: isSet(object.fraxlendPair) ? globalThis.String(object.fraxlendPair) : "",
      collateralToDeposit: isSet(object.collateralToDeposit) ? globalThis.String(object.collateralToDeposit) : "",
    };
  },

  toJSON(message: CollateralFTokenAdaptorV1_AddCollateral): unknown {
    const obj: any = {};
    if (message.fraxlendPair !== "") {
      obj.fraxlendPair = message.fraxlendPair;
    }
    if (message.collateralToDeposit !== "") {
      obj.collateralToDeposit = message.collateralToDeposit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollateralFTokenAdaptorV1_AddCollateral>, I>>(
    base?: I,
  ): CollateralFTokenAdaptorV1_AddCollateral {
    return CollateralFTokenAdaptorV1_AddCollateral.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollateralFTokenAdaptorV1_AddCollateral>, I>>(
    object: I,
  ): CollateralFTokenAdaptorV1_AddCollateral {
    const message = createBaseCollateralFTokenAdaptorV1_AddCollateral();
    message.fraxlendPair = object.fraxlendPair ?? "";
    message.collateralToDeposit = object.collateralToDeposit ?? "";
    return message;
  },
};

function createBaseCollateralFTokenAdaptorV1_RemoveCollateral(): CollateralFTokenAdaptorV1_RemoveCollateral {
  return { collateralAmount: "", fraxlendPair: "" };
}

export const CollateralFTokenAdaptorV1_RemoveCollateral = {
  encode(message: CollateralFTokenAdaptorV1_RemoveCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralAmount !== "") {
      writer.uint32(10).string(message.collateralAmount);
    }
    if (message.fraxlendPair !== "") {
      writer.uint32(18).string(message.fraxlendPair);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollateralFTokenAdaptorV1_RemoveCollateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralFTokenAdaptorV1_RemoveCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.collateralAmount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fraxlendPair = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CollateralFTokenAdaptorV1_RemoveCollateral {
    return {
      collateralAmount: isSet(object.collateralAmount) ? globalThis.String(object.collateralAmount) : "",
      fraxlendPair: isSet(object.fraxlendPair) ? globalThis.String(object.fraxlendPair) : "",
    };
  },

  toJSON(message: CollateralFTokenAdaptorV1_RemoveCollateral): unknown {
    const obj: any = {};
    if (message.collateralAmount !== "") {
      obj.collateralAmount = message.collateralAmount;
    }
    if (message.fraxlendPair !== "") {
      obj.fraxlendPair = message.fraxlendPair;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollateralFTokenAdaptorV1_RemoveCollateral>, I>>(
    base?: I,
  ): CollateralFTokenAdaptorV1_RemoveCollateral {
    return CollateralFTokenAdaptorV1_RemoveCollateral.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollateralFTokenAdaptorV1_RemoveCollateral>, I>>(
    object: I,
  ): CollateralFTokenAdaptorV1_RemoveCollateral {
    const message = createBaseCollateralFTokenAdaptorV1_RemoveCollateral();
    message.collateralAmount = object.collateralAmount ?? "";
    message.fraxlendPair = object.fraxlendPair ?? "";
    return message;
  },
};

function createBaseCollateralFTokenAdaptorV1Calls(): CollateralFTokenAdaptorV1Calls {
  return { calls: [] };
}

export const CollateralFTokenAdaptorV1Calls = {
  encode(message: CollateralFTokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      CollateralFTokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollateralFTokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralFTokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(CollateralFTokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CollateralFTokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => CollateralFTokenAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CollateralFTokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => CollateralFTokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollateralFTokenAdaptorV1Calls>, I>>(base?: I): CollateralFTokenAdaptorV1Calls {
    return CollateralFTokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollateralFTokenAdaptorV1Calls>, I>>(
    object: I,
  ): CollateralFTokenAdaptorV1Calls {
    const message = createBaseCollateralFTokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => CollateralFTokenAdaptorV1.fromPartial(e)) || [];
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
