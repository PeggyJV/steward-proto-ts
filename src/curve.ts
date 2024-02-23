/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Curve adaptor V1 */
export interface CurveAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `addLiquidity(address pool, ERC20 lpToken, uint256[] orderedUnderlyingTokenAmounts, uint256 minLPAmount, CurveGauge gauge, bytes4 selector)` */
  addLiquidity?:
    | CurveAdaptorV1_AddLiquidity
    | undefined;
  /** Represents function `addLiquidityETH(address pool, ERC20 lpToken, uint256[] orderedMinimumUnderlyingTokenAmountsOut, uint256 minLPAmount, bool useUnderlying, CurveGauge gauge, bytes4 selector)` */
  addLiquidityEth?:
    | CurveAdaptorV1_AddLiquidityETH
    | undefined;
  /** Represents function `removeLiquidity(address pool, ERC20 lpToken, uint256 lpTokenAmount, uint256[] orderedMinimumUnderlyingTokenAmountsOut, CurveGauge gauge, bytes4 selector)` */
  removeLiquidity?:
    | CurveAdaptorV1_RemoveLiquidity
    | undefined;
  /** Represents function `removeLiquidityETH(address pool, ERC20 lpToken, uint256 lpTokenAmount, uint256[] orderedMinimumUnderlyingTokenAmountsOut, bool useUnderlying, CurveGauge gauge, bytes4 selector)` */
  removeLiquidityEth?:
    | CurveAdaptorV1_RemoveLiquidityETH
    | undefined;
  /** Represents function `stakeInGauge(ERC20 lpToken, CurveGauge gauge, uint256 amount, CurvePool pool, bytes4 selector)` */
  stakeInGauge?:
    | CurveAdaptorV1_StakeInGauge
    | undefined;
  /** Represents function `unstakeFromGauge(CurveGauge gauge, uint256 amount)` */
  unstakeFromGauge?:
    | CurveAdaptorV1_UnstakeFromGauge
    | undefined;
  /** Represents function `claimRewards(CurveGauge gauge)` */
  claimRewards?: CurveAdaptorV1_ClaimRewards | undefined;
}

/**
 * Allows strategist to add liquidity to Curve pairs that do NOT use the native asset.
 *
 * Represents function `addLiquidity(address pool, ERC20 lpToken, uint256[] orderedUnderlyingTokenAmounts, uint256 minLPAmount, CurveGauge gauge, bytes4 selector)`
 */
export interface CurveAdaptorV1_AddLiquidity {
  /** Address of the Curve pool */
  pool: string;
  /** Address of the LP token */
  lpToken: string;
  /** Minimum amount of each underlying token to receive */
  orderedUnderlyingTokenAmounts: string[];
  /** Minimum amount of LP tokens to receive */
  minLpAmount: string;
  /** Address of the Curve gauge */
  gauge: string;
  /** Selector of the function to call */
  selector: string;
}

/**
 * Allows strategist to add liquidity to Curve pairs that use the native asset.
 *
 * Represents function `addLiquidityETH(address pool, ERC20 lpToken, uint256[] orderedUnderlyingTokenAmounts, uint256 minLPAmount, bool useUnderlying, CurveGauge gauge, bytes4 selector)`
 */
export interface CurveAdaptorV1_AddLiquidityETH {
  /** Address of the Curve pool */
  pool: string;
  /** Address of the LP token */
  lpToken: string;
  /** Minimum amount of each underlying token to receive */
  orderedUnderlyingTokenAmounts: string[];
  /** Minimum amount of LP tokens to receive */
  minLpAmount: string;
  /** Whether to use the underlying asset or the wrapped asset */
  useUnderlying: boolean;
  /** Address of the Curve gauge */
  gauge: string;
  /** Selector of the function to call */
  selector: string;
}

/**
 * Allows strategist to remove liquidity from Curve pairs that do NOT use the native asset.
 *
 * Represents function `removeLiquidity(address pool, ERC20 lpToken, uint256 lpTokenAmount, uint256[] orderedMinimumUnderlyingTokenAmountsOut, CurveGauge gauge, bytes4 selector)`
 */
export interface CurveAdaptorV1_RemoveLiquidity {
  /** Address of the Curve pool */
  pool: string;
  /** Address of the LP token */
  lpToken: string;
  /** Amount of LP tokens to remove */
  lpTokenAmount: string;
  /** Minimum amount of each underlying token to receive */
  orderedMinimumUnderlyingTokenAmountsOut: string[];
  /** Address of the Curve gauge */
  gauge: string;
  /** Selector of the function to call */
  selector: string;
}

/**
 * Allows strategist to remove liquidity from Curve pairs that use the native asset.
 *
 * Represents function `removeLiquidityETH(address pool, ERC20 lpToken, uint256 lpTokenAmount, uint256[] orderedMinimumUnderlyingTokenAmountsOut, bool useUnderlying, CurveGauge gauge, bytes4 selector)`
 */
export interface CurveAdaptorV1_RemoveLiquidityETH {
  /** Address of the Curve pool */
  pool: string;
  /** Address of the LP token */
  lpToken: string;
  /** Amount of LP tokens to remove */
  lpTokenAmount: string;
  /** Minimum amount of each underlying token to receive */
  orderedMinimumUnderlyingTokenAmountsOut: string[];
  /** Whether to use the underlying asset or the wrapped asset */
  useUnderlying: boolean;
  /** Address of the Curve gauge */
  gauge: string;
  /** Selector of the function to call */
  selector: string;
}

/**
 * Allows strategist to stake Curve LP tokens in their gauge.
 *
 * Represents function `stakeInGauge(ERC20 lpToken, CurveGauge gauge, uint256 amount, CurvePool pool, bytes4 selector)`
 */
export interface CurveAdaptorV1_StakeInGauge {
  /** Address of the LP token */
  lpToken: string;
  /** Address of the Curve gauge */
  gauge: string;
  /** Amount of LP tokens to stake */
  amount: string;
  /** Address of the Curve pool */
  pool: string;
  /** Selector of the function to call */
  selector: string;
}

/**
 * Allows strategist to unstake Curve LP tokens from their gauge.
 *
 * Represents function `unstakeFromGauge(CurveGauge gauge, uint256 amount)`
 */
export interface CurveAdaptorV1_UnstakeFromGauge {
  /** Address of the Curve gauge */
  gauge: string;
  /** Amount of LP tokens to unstake */
  amount: string;
}

/**
 * Allows strategist to claim rewards from a gauge.
 *
 * Represents function `claimRewards(CurveGauge gauge)`
 */
export interface CurveAdaptorV1_ClaimRewards {
  /** Address of the Curve gauge */
  gauge: string;
}

export interface CurveAdaptorV1Calls {
  calls: CurveAdaptorV1[];
}

function createBaseCurveAdaptorV1(): CurveAdaptorV1 {
  return {
    revokeApproval: undefined,
    addLiquidity: undefined,
    addLiquidityEth: undefined,
    removeLiquidity: undefined,
    removeLiquidityEth: undefined,
    stakeInGauge: undefined,
    unstakeFromGauge: undefined,
    claimRewards: undefined,
  };
}

export const CurveAdaptorV1 = {
  encode(message: CurveAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.addLiquidity !== undefined) {
      CurveAdaptorV1_AddLiquidity.encode(message.addLiquidity, writer.uint32(18).fork()).ldelim();
    }
    if (message.addLiquidityEth !== undefined) {
      CurveAdaptorV1_AddLiquidityETH.encode(message.addLiquidityEth, writer.uint32(26).fork()).ldelim();
    }
    if (message.removeLiquidity !== undefined) {
      CurveAdaptorV1_RemoveLiquidity.encode(message.removeLiquidity, writer.uint32(34).fork()).ldelim();
    }
    if (message.removeLiquidityEth !== undefined) {
      CurveAdaptorV1_RemoveLiquidityETH.encode(message.removeLiquidityEth, writer.uint32(42).fork()).ldelim();
    }
    if (message.stakeInGauge !== undefined) {
      CurveAdaptorV1_StakeInGauge.encode(message.stakeInGauge, writer.uint32(50).fork()).ldelim();
    }
    if (message.unstakeFromGauge !== undefined) {
      CurveAdaptorV1_UnstakeFromGauge.encode(message.unstakeFromGauge, writer.uint32(58).fork()).ldelim();
    }
    if (message.claimRewards !== undefined) {
      CurveAdaptorV1_ClaimRewards.encode(message.claimRewards, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurveAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurveAdaptorV1();
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

          message.addLiquidity = CurveAdaptorV1_AddLiquidity.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.addLiquidityEth = CurveAdaptorV1_AddLiquidityETH.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.removeLiquidity = CurveAdaptorV1_RemoveLiquidity.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.removeLiquidityEth = CurveAdaptorV1_RemoveLiquidityETH.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.stakeInGauge = CurveAdaptorV1_StakeInGauge.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.unstakeFromGauge = CurveAdaptorV1_UnstakeFromGauge.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.claimRewards = CurveAdaptorV1_ClaimRewards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurveAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      addLiquidity: isSet(object.addLiquidity) ? CurveAdaptorV1_AddLiquidity.fromJSON(object.addLiquidity) : undefined,
      addLiquidityEth: isSet(object.addLiquidityEth)
        ? CurveAdaptorV1_AddLiquidityETH.fromJSON(object.addLiquidityEth)
        : undefined,
      removeLiquidity: isSet(object.removeLiquidity)
        ? CurveAdaptorV1_RemoveLiquidity.fromJSON(object.removeLiquidity)
        : undefined,
      removeLiquidityEth: isSet(object.removeLiquidityEth)
        ? CurveAdaptorV1_RemoveLiquidityETH.fromJSON(object.removeLiquidityEth)
        : undefined,
      stakeInGauge: isSet(object.stakeInGauge) ? CurveAdaptorV1_StakeInGauge.fromJSON(object.stakeInGauge) : undefined,
      unstakeFromGauge: isSet(object.unstakeFromGauge)
        ? CurveAdaptorV1_UnstakeFromGauge.fromJSON(object.unstakeFromGauge)
        : undefined,
      claimRewards: isSet(object.claimRewards) ? CurveAdaptorV1_ClaimRewards.fromJSON(object.claimRewards) : undefined,
    };
  },

  toJSON(message: CurveAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.addLiquidity !== undefined) {
      obj.addLiquidity = CurveAdaptorV1_AddLiquidity.toJSON(message.addLiquidity);
    }
    if (message.addLiquidityEth !== undefined) {
      obj.addLiquidityEth = CurveAdaptorV1_AddLiquidityETH.toJSON(message.addLiquidityEth);
    }
    if (message.removeLiquidity !== undefined) {
      obj.removeLiquidity = CurveAdaptorV1_RemoveLiquidity.toJSON(message.removeLiquidity);
    }
    if (message.removeLiquidityEth !== undefined) {
      obj.removeLiquidityEth = CurveAdaptorV1_RemoveLiquidityETH.toJSON(message.removeLiquidityEth);
    }
    if (message.stakeInGauge !== undefined) {
      obj.stakeInGauge = CurveAdaptorV1_StakeInGauge.toJSON(message.stakeInGauge);
    }
    if (message.unstakeFromGauge !== undefined) {
      obj.unstakeFromGauge = CurveAdaptorV1_UnstakeFromGauge.toJSON(message.unstakeFromGauge);
    }
    if (message.claimRewards !== undefined) {
      obj.claimRewards = CurveAdaptorV1_ClaimRewards.toJSON(message.claimRewards);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurveAdaptorV1>, I>>(base?: I): CurveAdaptorV1 {
    return CurveAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurveAdaptorV1>, I>>(object: I): CurveAdaptorV1 {
    const message = createBaseCurveAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.addLiquidity = (object.addLiquidity !== undefined && object.addLiquidity !== null)
      ? CurveAdaptorV1_AddLiquidity.fromPartial(object.addLiquidity)
      : undefined;
    message.addLiquidityEth = (object.addLiquidityEth !== undefined && object.addLiquidityEth !== null)
      ? CurveAdaptorV1_AddLiquidityETH.fromPartial(object.addLiquidityEth)
      : undefined;
    message.removeLiquidity = (object.removeLiquidity !== undefined && object.removeLiquidity !== null)
      ? CurveAdaptorV1_RemoveLiquidity.fromPartial(object.removeLiquidity)
      : undefined;
    message.removeLiquidityEth = (object.removeLiquidityEth !== undefined && object.removeLiquidityEth !== null)
      ? CurveAdaptorV1_RemoveLiquidityETH.fromPartial(object.removeLiquidityEth)
      : undefined;
    message.stakeInGauge = (object.stakeInGauge !== undefined && object.stakeInGauge !== null)
      ? CurveAdaptorV1_StakeInGauge.fromPartial(object.stakeInGauge)
      : undefined;
    message.unstakeFromGauge = (object.unstakeFromGauge !== undefined && object.unstakeFromGauge !== null)
      ? CurveAdaptorV1_UnstakeFromGauge.fromPartial(object.unstakeFromGauge)
      : undefined;
    message.claimRewards = (object.claimRewards !== undefined && object.claimRewards !== null)
      ? CurveAdaptorV1_ClaimRewards.fromPartial(object.claimRewards)
      : undefined;
    return message;
  },
};

function createBaseCurveAdaptorV1_AddLiquidity(): CurveAdaptorV1_AddLiquidity {
  return { pool: "", lpToken: "", orderedUnderlyingTokenAmounts: [], minLpAmount: "", gauge: "", selector: "" };
}

export const CurveAdaptorV1_AddLiquidity = {
  encode(message: CurveAdaptorV1_AddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== "") {
      writer.uint32(10).string(message.pool);
    }
    if (message.lpToken !== "") {
      writer.uint32(18).string(message.lpToken);
    }
    for (const v of message.orderedUnderlyingTokenAmounts) {
      writer.uint32(26).string(v!);
    }
    if (message.minLpAmount !== "") {
      writer.uint32(34).string(message.minLpAmount);
    }
    if (message.gauge !== "") {
      writer.uint32(42).string(message.gauge);
    }
    if (message.selector !== "") {
      writer.uint32(50).string(message.selector);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurveAdaptorV1_AddLiquidity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurveAdaptorV1_AddLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lpToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.orderedUnderlyingTokenAmounts.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minLpAmount = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gauge = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.selector = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurveAdaptorV1_AddLiquidity {
    return {
      pool: isSet(object.pool) ? globalThis.String(object.pool) : "",
      lpToken: isSet(object.lpToken) ? globalThis.String(object.lpToken) : "",
      orderedUnderlyingTokenAmounts: globalThis.Array.isArray(object?.orderedUnderlyingTokenAmounts)
        ? object.orderedUnderlyingTokenAmounts.map((e: any) => globalThis.String(e))
        : [],
      minLpAmount: isSet(object.minLpAmount) ? globalThis.String(object.minLpAmount) : "",
      gauge: isSet(object.gauge) ? globalThis.String(object.gauge) : "",
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
    };
  },

  toJSON(message: CurveAdaptorV1_AddLiquidity): unknown {
    const obj: any = {};
    if (message.pool !== "") {
      obj.pool = message.pool;
    }
    if (message.lpToken !== "") {
      obj.lpToken = message.lpToken;
    }
    if (message.orderedUnderlyingTokenAmounts?.length) {
      obj.orderedUnderlyingTokenAmounts = message.orderedUnderlyingTokenAmounts;
    }
    if (message.minLpAmount !== "") {
      obj.minLpAmount = message.minLpAmount;
    }
    if (message.gauge !== "") {
      obj.gauge = message.gauge;
    }
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurveAdaptorV1_AddLiquidity>, I>>(base?: I): CurveAdaptorV1_AddLiquidity {
    return CurveAdaptorV1_AddLiquidity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurveAdaptorV1_AddLiquidity>, I>>(object: I): CurveAdaptorV1_AddLiquidity {
    const message = createBaseCurveAdaptorV1_AddLiquidity();
    message.pool = object.pool ?? "";
    message.lpToken = object.lpToken ?? "";
    message.orderedUnderlyingTokenAmounts = object.orderedUnderlyingTokenAmounts?.map((e) => e) || [];
    message.minLpAmount = object.minLpAmount ?? "";
    message.gauge = object.gauge ?? "";
    message.selector = object.selector ?? "";
    return message;
  },
};

function createBaseCurveAdaptorV1_AddLiquidityETH(): CurveAdaptorV1_AddLiquidityETH {
  return {
    pool: "",
    lpToken: "",
    orderedUnderlyingTokenAmounts: [],
    minLpAmount: "",
    useUnderlying: false,
    gauge: "",
    selector: "",
  };
}

export const CurveAdaptorV1_AddLiquidityETH = {
  encode(message: CurveAdaptorV1_AddLiquidityETH, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== "") {
      writer.uint32(10).string(message.pool);
    }
    if (message.lpToken !== "") {
      writer.uint32(18).string(message.lpToken);
    }
    for (const v of message.orderedUnderlyingTokenAmounts) {
      writer.uint32(26).string(v!);
    }
    if (message.minLpAmount !== "") {
      writer.uint32(34).string(message.minLpAmount);
    }
    if (message.useUnderlying === true) {
      writer.uint32(40).bool(message.useUnderlying);
    }
    if (message.gauge !== "") {
      writer.uint32(50).string(message.gauge);
    }
    if (message.selector !== "") {
      writer.uint32(58).string(message.selector);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurveAdaptorV1_AddLiquidityETH {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurveAdaptorV1_AddLiquidityETH();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lpToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.orderedUnderlyingTokenAmounts.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minLpAmount = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.useUnderlying = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.gauge = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.selector = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurveAdaptorV1_AddLiquidityETH {
    return {
      pool: isSet(object.pool) ? globalThis.String(object.pool) : "",
      lpToken: isSet(object.lpToken) ? globalThis.String(object.lpToken) : "",
      orderedUnderlyingTokenAmounts: globalThis.Array.isArray(object?.orderedUnderlyingTokenAmounts)
        ? object.orderedUnderlyingTokenAmounts.map((e: any) => globalThis.String(e))
        : [],
      minLpAmount: isSet(object.minLpAmount) ? globalThis.String(object.minLpAmount) : "",
      useUnderlying: isSet(object.useUnderlying) ? globalThis.Boolean(object.useUnderlying) : false,
      gauge: isSet(object.gauge) ? globalThis.String(object.gauge) : "",
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
    };
  },

  toJSON(message: CurveAdaptorV1_AddLiquidityETH): unknown {
    const obj: any = {};
    if (message.pool !== "") {
      obj.pool = message.pool;
    }
    if (message.lpToken !== "") {
      obj.lpToken = message.lpToken;
    }
    if (message.orderedUnderlyingTokenAmounts?.length) {
      obj.orderedUnderlyingTokenAmounts = message.orderedUnderlyingTokenAmounts;
    }
    if (message.minLpAmount !== "") {
      obj.minLpAmount = message.minLpAmount;
    }
    if (message.useUnderlying === true) {
      obj.useUnderlying = message.useUnderlying;
    }
    if (message.gauge !== "") {
      obj.gauge = message.gauge;
    }
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurveAdaptorV1_AddLiquidityETH>, I>>(base?: I): CurveAdaptorV1_AddLiquidityETH {
    return CurveAdaptorV1_AddLiquidityETH.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurveAdaptorV1_AddLiquidityETH>, I>>(
    object: I,
  ): CurveAdaptorV1_AddLiquidityETH {
    const message = createBaseCurveAdaptorV1_AddLiquidityETH();
    message.pool = object.pool ?? "";
    message.lpToken = object.lpToken ?? "";
    message.orderedUnderlyingTokenAmounts = object.orderedUnderlyingTokenAmounts?.map((e) => e) || [];
    message.minLpAmount = object.minLpAmount ?? "";
    message.useUnderlying = object.useUnderlying ?? false;
    message.gauge = object.gauge ?? "";
    message.selector = object.selector ?? "";
    return message;
  },
};

function createBaseCurveAdaptorV1_RemoveLiquidity(): CurveAdaptorV1_RemoveLiquidity {
  return {
    pool: "",
    lpToken: "",
    lpTokenAmount: "",
    orderedMinimumUnderlyingTokenAmountsOut: [],
    gauge: "",
    selector: "",
  };
}

export const CurveAdaptorV1_RemoveLiquidity = {
  encode(message: CurveAdaptorV1_RemoveLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== "") {
      writer.uint32(10).string(message.pool);
    }
    if (message.lpToken !== "") {
      writer.uint32(18).string(message.lpToken);
    }
    if (message.lpTokenAmount !== "") {
      writer.uint32(26).string(message.lpTokenAmount);
    }
    for (const v of message.orderedMinimumUnderlyingTokenAmountsOut) {
      writer.uint32(34).string(v!);
    }
    if (message.gauge !== "") {
      writer.uint32(42).string(message.gauge);
    }
    if (message.selector !== "") {
      writer.uint32(50).string(message.selector);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurveAdaptorV1_RemoveLiquidity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurveAdaptorV1_RemoveLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lpToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lpTokenAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.orderedMinimumUnderlyingTokenAmountsOut.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gauge = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.selector = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurveAdaptorV1_RemoveLiquidity {
    return {
      pool: isSet(object.pool) ? globalThis.String(object.pool) : "",
      lpToken: isSet(object.lpToken) ? globalThis.String(object.lpToken) : "",
      lpTokenAmount: isSet(object.lpTokenAmount) ? globalThis.String(object.lpTokenAmount) : "",
      orderedMinimumUnderlyingTokenAmountsOut: globalThis.Array.isArray(object?.orderedMinimumUnderlyingTokenAmountsOut)
        ? object.orderedMinimumUnderlyingTokenAmountsOut.map((e: any) => globalThis.String(e))
        : [],
      gauge: isSet(object.gauge) ? globalThis.String(object.gauge) : "",
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
    };
  },

  toJSON(message: CurveAdaptorV1_RemoveLiquidity): unknown {
    const obj: any = {};
    if (message.pool !== "") {
      obj.pool = message.pool;
    }
    if (message.lpToken !== "") {
      obj.lpToken = message.lpToken;
    }
    if (message.lpTokenAmount !== "") {
      obj.lpTokenAmount = message.lpTokenAmount;
    }
    if (message.orderedMinimumUnderlyingTokenAmountsOut?.length) {
      obj.orderedMinimumUnderlyingTokenAmountsOut = message.orderedMinimumUnderlyingTokenAmountsOut;
    }
    if (message.gauge !== "") {
      obj.gauge = message.gauge;
    }
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurveAdaptorV1_RemoveLiquidity>, I>>(base?: I): CurveAdaptorV1_RemoveLiquidity {
    return CurveAdaptorV1_RemoveLiquidity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurveAdaptorV1_RemoveLiquidity>, I>>(
    object: I,
  ): CurveAdaptorV1_RemoveLiquidity {
    const message = createBaseCurveAdaptorV1_RemoveLiquidity();
    message.pool = object.pool ?? "";
    message.lpToken = object.lpToken ?? "";
    message.lpTokenAmount = object.lpTokenAmount ?? "";
    message.orderedMinimumUnderlyingTokenAmountsOut = object.orderedMinimumUnderlyingTokenAmountsOut?.map((e) => e) ||
      [];
    message.gauge = object.gauge ?? "";
    message.selector = object.selector ?? "";
    return message;
  },
};

function createBaseCurveAdaptorV1_RemoveLiquidityETH(): CurveAdaptorV1_RemoveLiquidityETH {
  return {
    pool: "",
    lpToken: "",
    lpTokenAmount: "",
    orderedMinimumUnderlyingTokenAmountsOut: [],
    useUnderlying: false,
    gauge: "",
    selector: "",
  };
}

export const CurveAdaptorV1_RemoveLiquidityETH = {
  encode(message: CurveAdaptorV1_RemoveLiquidityETH, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== "") {
      writer.uint32(10).string(message.pool);
    }
    if (message.lpToken !== "") {
      writer.uint32(18).string(message.lpToken);
    }
    if (message.lpTokenAmount !== "") {
      writer.uint32(26).string(message.lpTokenAmount);
    }
    for (const v of message.orderedMinimumUnderlyingTokenAmountsOut) {
      writer.uint32(34).string(v!);
    }
    if (message.useUnderlying === true) {
      writer.uint32(40).bool(message.useUnderlying);
    }
    if (message.gauge !== "") {
      writer.uint32(50).string(message.gauge);
    }
    if (message.selector !== "") {
      writer.uint32(58).string(message.selector);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurveAdaptorV1_RemoveLiquidityETH {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurveAdaptorV1_RemoveLiquidityETH();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lpToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lpTokenAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.orderedMinimumUnderlyingTokenAmountsOut.push(reader.string());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.useUnderlying = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.gauge = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.selector = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurveAdaptorV1_RemoveLiquidityETH {
    return {
      pool: isSet(object.pool) ? globalThis.String(object.pool) : "",
      lpToken: isSet(object.lpToken) ? globalThis.String(object.lpToken) : "",
      lpTokenAmount: isSet(object.lpTokenAmount) ? globalThis.String(object.lpTokenAmount) : "",
      orderedMinimumUnderlyingTokenAmountsOut: globalThis.Array.isArray(object?.orderedMinimumUnderlyingTokenAmountsOut)
        ? object.orderedMinimumUnderlyingTokenAmountsOut.map((e: any) => globalThis.String(e))
        : [],
      useUnderlying: isSet(object.useUnderlying) ? globalThis.Boolean(object.useUnderlying) : false,
      gauge: isSet(object.gauge) ? globalThis.String(object.gauge) : "",
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
    };
  },

  toJSON(message: CurveAdaptorV1_RemoveLiquidityETH): unknown {
    const obj: any = {};
    if (message.pool !== "") {
      obj.pool = message.pool;
    }
    if (message.lpToken !== "") {
      obj.lpToken = message.lpToken;
    }
    if (message.lpTokenAmount !== "") {
      obj.lpTokenAmount = message.lpTokenAmount;
    }
    if (message.orderedMinimumUnderlyingTokenAmountsOut?.length) {
      obj.orderedMinimumUnderlyingTokenAmountsOut = message.orderedMinimumUnderlyingTokenAmountsOut;
    }
    if (message.useUnderlying === true) {
      obj.useUnderlying = message.useUnderlying;
    }
    if (message.gauge !== "") {
      obj.gauge = message.gauge;
    }
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurveAdaptorV1_RemoveLiquidityETH>, I>>(
    base?: I,
  ): CurveAdaptorV1_RemoveLiquidityETH {
    return CurveAdaptorV1_RemoveLiquidityETH.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurveAdaptorV1_RemoveLiquidityETH>, I>>(
    object: I,
  ): CurveAdaptorV1_RemoveLiquidityETH {
    const message = createBaseCurveAdaptorV1_RemoveLiquidityETH();
    message.pool = object.pool ?? "";
    message.lpToken = object.lpToken ?? "";
    message.lpTokenAmount = object.lpTokenAmount ?? "";
    message.orderedMinimumUnderlyingTokenAmountsOut = object.orderedMinimumUnderlyingTokenAmountsOut?.map((e) => e) ||
      [];
    message.useUnderlying = object.useUnderlying ?? false;
    message.gauge = object.gauge ?? "";
    message.selector = object.selector ?? "";
    return message;
  },
};

function createBaseCurveAdaptorV1_StakeInGauge(): CurveAdaptorV1_StakeInGauge {
  return { lpToken: "", gauge: "", amount: "", pool: "", selector: "" };
}

export const CurveAdaptorV1_StakeInGauge = {
  encode(message: CurveAdaptorV1_StakeInGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpToken !== "") {
      writer.uint32(10).string(message.lpToken);
    }
    if (message.gauge !== "") {
      writer.uint32(18).string(message.gauge);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.pool !== "") {
      writer.uint32(34).string(message.pool);
    }
    if (message.selector !== "") {
      writer.uint32(42).string(message.selector);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurveAdaptorV1_StakeInGauge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurveAdaptorV1_StakeInGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lpToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gauge = reader.string();
          continue;
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

          message.pool = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.selector = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurveAdaptorV1_StakeInGauge {
    return {
      lpToken: isSet(object.lpToken) ? globalThis.String(object.lpToken) : "",
      gauge: isSet(object.gauge) ? globalThis.String(object.gauge) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      pool: isSet(object.pool) ? globalThis.String(object.pool) : "",
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
    };
  },

  toJSON(message: CurveAdaptorV1_StakeInGauge): unknown {
    const obj: any = {};
    if (message.lpToken !== "") {
      obj.lpToken = message.lpToken;
    }
    if (message.gauge !== "") {
      obj.gauge = message.gauge;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.pool !== "") {
      obj.pool = message.pool;
    }
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurveAdaptorV1_StakeInGauge>, I>>(base?: I): CurveAdaptorV1_StakeInGauge {
    return CurveAdaptorV1_StakeInGauge.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurveAdaptorV1_StakeInGauge>, I>>(object: I): CurveAdaptorV1_StakeInGauge {
    const message = createBaseCurveAdaptorV1_StakeInGauge();
    message.lpToken = object.lpToken ?? "";
    message.gauge = object.gauge ?? "";
    message.amount = object.amount ?? "";
    message.pool = object.pool ?? "";
    message.selector = object.selector ?? "";
    return message;
  },
};

function createBaseCurveAdaptorV1_UnstakeFromGauge(): CurveAdaptorV1_UnstakeFromGauge {
  return { gauge: "", amount: "" };
}

export const CurveAdaptorV1_UnstakeFromGauge = {
  encode(message: CurveAdaptorV1_UnstakeFromGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gauge !== "") {
      writer.uint32(10).string(message.gauge);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurveAdaptorV1_UnstakeFromGauge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurveAdaptorV1_UnstakeFromGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gauge = reader.string();
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

  fromJSON(object: any): CurveAdaptorV1_UnstakeFromGauge {
    return {
      gauge: isSet(object.gauge) ? globalThis.String(object.gauge) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: CurveAdaptorV1_UnstakeFromGauge): unknown {
    const obj: any = {};
    if (message.gauge !== "") {
      obj.gauge = message.gauge;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurveAdaptorV1_UnstakeFromGauge>, I>>(base?: I): CurveAdaptorV1_UnstakeFromGauge {
    return CurveAdaptorV1_UnstakeFromGauge.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurveAdaptorV1_UnstakeFromGauge>, I>>(
    object: I,
  ): CurveAdaptorV1_UnstakeFromGauge {
    const message = createBaseCurveAdaptorV1_UnstakeFromGauge();
    message.gauge = object.gauge ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseCurveAdaptorV1_ClaimRewards(): CurveAdaptorV1_ClaimRewards {
  return { gauge: "" };
}

export const CurveAdaptorV1_ClaimRewards = {
  encode(message: CurveAdaptorV1_ClaimRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gauge !== "") {
      writer.uint32(10).string(message.gauge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurveAdaptorV1_ClaimRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurveAdaptorV1_ClaimRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gauge = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurveAdaptorV1_ClaimRewards {
    return { gauge: isSet(object.gauge) ? globalThis.String(object.gauge) : "" };
  },

  toJSON(message: CurveAdaptorV1_ClaimRewards): unknown {
    const obj: any = {};
    if (message.gauge !== "") {
      obj.gauge = message.gauge;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurveAdaptorV1_ClaimRewards>, I>>(base?: I): CurveAdaptorV1_ClaimRewards {
    return CurveAdaptorV1_ClaimRewards.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurveAdaptorV1_ClaimRewards>, I>>(object: I): CurveAdaptorV1_ClaimRewards {
    const message = createBaseCurveAdaptorV1_ClaimRewards();
    message.gauge = object.gauge ?? "";
    return message;
  },
};

function createBaseCurveAdaptorV1Calls(): CurveAdaptorV1Calls {
  return { calls: [] };
}

export const CurveAdaptorV1Calls = {
  encode(message: CurveAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      CurveAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurveAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurveAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(CurveAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurveAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls) ? object.calls.map((e: any) => CurveAdaptorV1.fromJSON(e)) : [],
    };
  },

  toJSON(message: CurveAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => CurveAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurveAdaptorV1Calls>, I>>(base?: I): CurveAdaptorV1Calls {
    return CurveAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurveAdaptorV1Calls>, I>>(object: I): CurveAdaptorV1Calls {
    const message = createBaseCurveAdaptorV1Calls();
    message.calls = object.calls?.map((e) => CurveAdaptorV1.fromPartial(e)) || [];
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
