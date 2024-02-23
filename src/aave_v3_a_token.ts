/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Aave AToken adaptor, used to manage lending positions on Aave */
export interface AaveV3ATokenAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToAave(ERC20 tokenToDeposit, uint256 amountToDeposit)` */
  depositToAave?:
    | AaveV3ATokenAdaptorV1_DepositToAave
    | undefined;
  /** Represents function `withdrawFromAave(ERC20 tokenToWithdraw, uint256 amountToWithdraw)` */
  withdrawFromAave?:
    | AaveV3ATokenAdaptorV1_WithdrawFromAave
    | undefined;
  /** Represents function `adjustIsolationModeAssetAsCollateral(ERC20 asset, bool useAsCollateral)` */
  adjustIsolationModeAssetAsCollateral?:
    | AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral
    | undefined;
  /** Represents function `changeEMode(uint8 categoryId)` */
  changeEmode?: AaveV3ATokenAdaptorV1_ChangeEMode | undefined;
}

/**
 * Allows strategists to lend assets on Aave.
 *
 * Represents function `depositToAave(ERC20 tokenToDeposit, uint256 amountToDeposit)`
 */
export interface AaveV3ATokenAdaptorV1_DepositToAave {
  /** The address of the ERC20 token to deposit */
  token: string;
  /** The amount to deposit */
  amount: string;
}

/**
 * Allows strategists to withdraw assets from Aave.
 *
 * Represents function `withdrawFromAave(ERC20 tokenToWithdraw, uint256 amountToWithdraw)`
 */
export interface AaveV3ATokenAdaptorV1_WithdrawFromAave {
  /** The address of the ERC20 token to withdraw */
  token: string;
  /** The amount to withdraw */
  amount: string;
}

/**
 * Allows strategists to adjust an asset's isolation mode.
 *
 * Represents function `adjustIsolationModeAssetAsCollateral(ERC20 asset, bool useAsCollateral)`
 */
export interface AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral {
  /** The address of the ERC20 token */
  asset: string;
  /** Whether to use the asset as collateral */
  useAsCollateral: boolean;
}

/**
 * Allows strategists to enter different EModes.
 *
 * Represents function `changeEMode(uint8 categoryId)`
 */
export interface AaveV3ATokenAdaptorV1_ChangeEMode {
  /** The category ID */
  categoryId: number;
}

export interface AaveV3ATokenAdaptorV1Calls {
  calls: AaveV3ATokenAdaptorV1[];
}

function createBaseAaveV3ATokenAdaptorV1(): AaveV3ATokenAdaptorV1 {
  return {
    revokeApproval: undefined,
    depositToAave: undefined,
    withdrawFromAave: undefined,
    adjustIsolationModeAssetAsCollateral: undefined,
    changeEmode: undefined,
  };
}

export const AaveV3ATokenAdaptorV1 = {
  encode(message: AaveV3ATokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositToAave !== undefined) {
      AaveV3ATokenAdaptorV1_DepositToAave.encode(message.depositToAave, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawFromAave !== undefined) {
      AaveV3ATokenAdaptorV1_WithdrawFromAave.encode(message.withdrawFromAave, writer.uint32(26).fork()).ldelim();
    }
    if (message.adjustIsolationModeAssetAsCollateral !== undefined) {
      AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral.encode(
        message.adjustIsolationModeAssetAsCollateral,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.changeEmode !== undefined) {
      AaveV3ATokenAdaptorV1_ChangeEMode.encode(message.changeEmode, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3ATokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3ATokenAdaptorV1();
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

          message.depositToAave = AaveV3ATokenAdaptorV1_DepositToAave.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromAave = AaveV3ATokenAdaptorV1_WithdrawFromAave.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.adjustIsolationModeAssetAsCollateral = AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral
            .decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.changeEmode = AaveV3ATokenAdaptorV1_ChangeEMode.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3ATokenAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToAave: isSet(object.depositToAave)
        ? AaveV3ATokenAdaptorV1_DepositToAave.fromJSON(object.depositToAave)
        : undefined,
      withdrawFromAave: isSet(object.withdrawFromAave)
        ? AaveV3ATokenAdaptorV1_WithdrawFromAave.fromJSON(object.withdrawFromAave)
        : undefined,
      adjustIsolationModeAssetAsCollateral: isSet(object.adjustIsolationModeAssetAsCollateral)
        ? AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral.fromJSON(
          object.adjustIsolationModeAssetAsCollateral,
        )
        : undefined,
      changeEmode: isSet(object.changeEmode)
        ? AaveV3ATokenAdaptorV1_ChangeEMode.fromJSON(object.changeEmode)
        : undefined,
    };
  },

  toJSON(message: AaveV3ATokenAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToAave !== undefined) {
      obj.depositToAave = AaveV3ATokenAdaptorV1_DepositToAave.toJSON(message.depositToAave);
    }
    if (message.withdrawFromAave !== undefined) {
      obj.withdrawFromAave = AaveV3ATokenAdaptorV1_WithdrawFromAave.toJSON(message.withdrawFromAave);
    }
    if (message.adjustIsolationModeAssetAsCollateral !== undefined) {
      obj.adjustIsolationModeAssetAsCollateral = AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral.toJSON(
        message.adjustIsolationModeAssetAsCollateral,
      );
    }
    if (message.changeEmode !== undefined) {
      obj.changeEmode = AaveV3ATokenAdaptorV1_ChangeEMode.toJSON(message.changeEmode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1>, I>>(base?: I): AaveV3ATokenAdaptorV1 {
    return AaveV3ATokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1>, I>>(object: I): AaveV3ATokenAdaptorV1 {
    const message = createBaseAaveV3ATokenAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToAave = (object.depositToAave !== undefined && object.depositToAave !== null)
      ? AaveV3ATokenAdaptorV1_DepositToAave.fromPartial(object.depositToAave)
      : undefined;
    message.withdrawFromAave = (object.withdrawFromAave !== undefined && object.withdrawFromAave !== null)
      ? AaveV3ATokenAdaptorV1_WithdrawFromAave.fromPartial(object.withdrawFromAave)
      : undefined;
    message.adjustIsolationModeAssetAsCollateral =
      (object.adjustIsolationModeAssetAsCollateral !== undefined &&
          object.adjustIsolationModeAssetAsCollateral !== null)
        ? AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral.fromPartial(
          object.adjustIsolationModeAssetAsCollateral,
        )
        : undefined;
    message.changeEmode = (object.changeEmode !== undefined && object.changeEmode !== null)
      ? AaveV3ATokenAdaptorV1_ChangeEMode.fromPartial(object.changeEmode)
      : undefined;
    return message;
  },
};

function createBaseAaveV3ATokenAdaptorV1_DepositToAave(): AaveV3ATokenAdaptorV1_DepositToAave {
  return { token: "", amount: "" };
}

export const AaveV3ATokenAdaptorV1_DepositToAave = {
  encode(message: AaveV3ATokenAdaptorV1_DepositToAave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3ATokenAdaptorV1_DepositToAave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3ATokenAdaptorV1_DepositToAave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3ATokenAdaptorV1_DepositToAave {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveV3ATokenAdaptorV1_DepositToAave): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1_DepositToAave>, I>>(
    base?: I,
  ): AaveV3ATokenAdaptorV1_DepositToAave {
    return AaveV3ATokenAdaptorV1_DepositToAave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1_DepositToAave>, I>>(
    object: I,
  ): AaveV3ATokenAdaptorV1_DepositToAave {
    const message = createBaseAaveV3ATokenAdaptorV1_DepositToAave();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveV3ATokenAdaptorV1_WithdrawFromAave(): AaveV3ATokenAdaptorV1_WithdrawFromAave {
  return { token: "", amount: "" };
}

export const AaveV3ATokenAdaptorV1_WithdrawFromAave = {
  encode(message: AaveV3ATokenAdaptorV1_WithdrawFromAave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3ATokenAdaptorV1_WithdrawFromAave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3ATokenAdaptorV1_WithdrawFromAave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3ATokenAdaptorV1_WithdrawFromAave {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveV3ATokenAdaptorV1_WithdrawFromAave): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1_WithdrawFromAave>, I>>(
    base?: I,
  ): AaveV3ATokenAdaptorV1_WithdrawFromAave {
    return AaveV3ATokenAdaptorV1_WithdrawFromAave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1_WithdrawFromAave>, I>>(
    object: I,
  ): AaveV3ATokenAdaptorV1_WithdrawFromAave {
    const message = createBaseAaveV3ATokenAdaptorV1_WithdrawFromAave();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral(): AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral {
  return { asset: "", useAsCollateral: false };
}

export const AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral = {
  encode(
    message: AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral();
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

  fromJSON(object: any): AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral {
    return {
      asset: isSet(object.asset) ? globalThis.String(object.asset) : "",
      useAsCollateral: isSet(object.useAsCollateral) ? globalThis.Boolean(object.useAsCollateral) : false,
    };
  },

  toJSON(message: AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral): unknown {
    const obj: any = {};
    if (message.asset !== "") {
      obj.asset = message.asset;
    }
    if (message.useAsCollateral === true) {
      obj.useAsCollateral = message.useAsCollateral;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral>, I>>(
    base?: I,
  ): AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral {
    return AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral>, I>>(
    object: I,
  ): AaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral {
    const message = createBaseAaveV3ATokenAdaptorV1_AdjustIsolationModeAssetAsCollateral();
    message.asset = object.asset ?? "";
    message.useAsCollateral = object.useAsCollateral ?? false;
    return message;
  },
};

function createBaseAaveV3ATokenAdaptorV1_ChangeEMode(): AaveV3ATokenAdaptorV1_ChangeEMode {
  return { categoryId: 0 };
}

export const AaveV3ATokenAdaptorV1_ChangeEMode = {
  encode(message: AaveV3ATokenAdaptorV1_ChangeEMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.categoryId !== 0) {
      writer.uint32(8).uint32(message.categoryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3ATokenAdaptorV1_ChangeEMode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3ATokenAdaptorV1_ChangeEMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.categoryId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3ATokenAdaptorV1_ChangeEMode {
    return { categoryId: isSet(object.categoryId) ? globalThis.Number(object.categoryId) : 0 };
  },

  toJSON(message: AaveV3ATokenAdaptorV1_ChangeEMode): unknown {
    const obj: any = {};
    if (message.categoryId !== 0) {
      obj.categoryId = Math.round(message.categoryId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1_ChangeEMode>, I>>(
    base?: I,
  ): AaveV3ATokenAdaptorV1_ChangeEMode {
    return AaveV3ATokenAdaptorV1_ChangeEMode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1_ChangeEMode>, I>>(
    object: I,
  ): AaveV3ATokenAdaptorV1_ChangeEMode {
    const message = createBaseAaveV3ATokenAdaptorV1_ChangeEMode();
    message.categoryId = object.categoryId ?? 0;
    return message;
  },
};

function createBaseAaveV3ATokenAdaptorV1Calls(): AaveV3ATokenAdaptorV1Calls {
  return { calls: [] };
}

export const AaveV3ATokenAdaptorV1Calls = {
  encode(message: AaveV3ATokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      AaveV3ATokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3ATokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3ATokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(AaveV3ATokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3ATokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => AaveV3ATokenAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AaveV3ATokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => AaveV3ATokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1Calls>, I>>(base?: I): AaveV3ATokenAdaptorV1Calls {
    return AaveV3ATokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3ATokenAdaptorV1Calls>, I>>(object: I): AaveV3ATokenAdaptorV1Calls {
    const message = createBaseAaveV3ATokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => AaveV3ATokenAdaptorV1.fromPartial(e)) || [];
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
