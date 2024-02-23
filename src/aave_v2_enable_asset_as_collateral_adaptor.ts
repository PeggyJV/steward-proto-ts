/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Aave AToken adaptor, used to manage lending positions on Aave */
export interface AaveV2EnableAssetAsCollateralAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `setUserUseReserveAsCollateral(address asset, bool useAsCollateral)` */
  setUserUseReserveAsCollateral?: AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral | undefined;
}

/**
 * Allows a strategist to choose to use an asset as collateral or not.
 *
 * Represents function `setUserUseReserveAsCollateral(address asset, bool useAsCollateral)`
 */
export interface AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral {
  /** The address of the asset to set as collateral */
  asset: string;
  /** Whether to use the asset as collateral */
  useAsCollateral: boolean;
}

export interface AaveV2EnableAssetAsCollateralAdaptorV1Calls {
  calls: AaveV2EnableAssetAsCollateralAdaptorV1[];
}

function createBaseAaveV2EnableAssetAsCollateralAdaptorV1(): AaveV2EnableAssetAsCollateralAdaptorV1 {
  return { revokeApproval: undefined, setUserUseReserveAsCollateral: undefined };
}

export const AaveV2EnableAssetAsCollateralAdaptorV1 = {
  encode(message: AaveV2EnableAssetAsCollateralAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.setUserUseReserveAsCollateral !== undefined) {
      AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral.encode(
        message.setUserUseReserveAsCollateral,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2EnableAssetAsCollateralAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2EnableAssetAsCollateralAdaptorV1();
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

          message.setUserUseReserveAsCollateral = AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral
            .decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2EnableAssetAsCollateralAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      setUserUseReserveAsCollateral: isSet(object.setUserUseReserveAsCollateral)
        ? AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral.fromJSON(
          object.setUserUseReserveAsCollateral,
        )
        : undefined,
    };
  },

  toJSON(message: AaveV2EnableAssetAsCollateralAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.setUserUseReserveAsCollateral !== undefined) {
      obj.setUserUseReserveAsCollateral = AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral.toJSON(
        message.setUserUseReserveAsCollateral,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2EnableAssetAsCollateralAdaptorV1>, I>>(
    base?: I,
  ): AaveV2EnableAssetAsCollateralAdaptorV1 {
    return AaveV2EnableAssetAsCollateralAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2EnableAssetAsCollateralAdaptorV1>, I>>(
    object: I,
  ): AaveV2EnableAssetAsCollateralAdaptorV1 {
    const message = createBaseAaveV2EnableAssetAsCollateralAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.setUserUseReserveAsCollateral =
      (object.setUserUseReserveAsCollateral !== undefined && object.setUserUseReserveAsCollateral !== null)
        ? AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral.fromPartial(
          object.setUserUseReserveAsCollateral,
        )
        : undefined;
    return message;
  },
};

function createBaseAaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral(): AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral {
  return { asset: "", useAsCollateral: false };
}

export const AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral = {
  encode(
    message: AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.useAsCollateral === true) {
      writer.uint32(16).bool(message.useAsCollateral);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral();
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
          if (tag !== 16) {
            break;
          }

          message.useAsCollateral = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral {
    return {
      asset: isSet(object.asset) ? globalThis.String(object.asset) : "",
      useAsCollateral: isSet(object.useAsCollateral) ? globalThis.Boolean(object.useAsCollateral) : false,
    };
  },

  toJSON(message: AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral): unknown {
    const obj: any = {};
    if (message.asset !== "") {
      obj.asset = message.asset;
    }
    if (message.useAsCollateral === true) {
      obj.useAsCollateral = message.useAsCollateral;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral>, I>>(
    base?: I,
  ): AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral {
    return AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral>, I>>(
    object: I,
  ): AaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral {
    const message = createBaseAaveV2EnableAssetAsCollateralAdaptorV1_SetUserUseReserveAsCollateral();
    message.asset = object.asset ?? "";
    message.useAsCollateral = object.useAsCollateral ?? false;
    return message;
  },
};

function createBaseAaveV2EnableAssetAsCollateralAdaptorV1Calls(): AaveV2EnableAssetAsCollateralAdaptorV1Calls {
  return { calls: [] };
}

export const AaveV2EnableAssetAsCollateralAdaptorV1Calls = {
  encode(message: AaveV2EnableAssetAsCollateralAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      AaveV2EnableAssetAsCollateralAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2EnableAssetAsCollateralAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2EnableAssetAsCollateralAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(AaveV2EnableAssetAsCollateralAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2EnableAssetAsCollateralAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => AaveV2EnableAssetAsCollateralAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AaveV2EnableAssetAsCollateralAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => AaveV2EnableAssetAsCollateralAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2EnableAssetAsCollateralAdaptorV1Calls>, I>>(
    base?: I,
  ): AaveV2EnableAssetAsCollateralAdaptorV1Calls {
    return AaveV2EnableAssetAsCollateralAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2EnableAssetAsCollateralAdaptorV1Calls>, I>>(
    object: I,
  ): AaveV2EnableAssetAsCollateralAdaptorV1Calls {
    const message = createBaseAaveV2EnableAssetAsCollateralAdaptorV1Calls();
    message.calls = object.calls?.map((e) => AaveV2EnableAssetAsCollateralAdaptorV1.fromPartial(e)) || [];
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
