/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "steward.v4";

/** Represents a function call to the Aave V2 Stablecoin cellar */
export interface AaveV2Stablecoin {
  /** Represents function `accruePlatformFees()` */
  accrue?:
    | AaveV2Stablecoin_Accrue
    | undefined;
  /** Represents function `claimAndUnstake()` */
  claimAndUnstake?:
    | AaveV2Stablecoin_ClaimAndUnstake
    | undefined;
  /** Represents function `enterPosition()` */
  enterPosition?:
    | AaveV2Stablecoin_EnterPosition
    | undefined;
  /** Represents function `enterPosition(uint256 assets)` */
  enterPositionWithAssets?:
    | AaveV2Stablecoin_EnterPositionWithAssets
    | undefined;
  /** Represents function `exitPosition()` */
  exitPosition?:
    | AaveV2Stablecoin_ExitPosition
    | undefined;
  /** Represents function `exitPosition(uint256 assets)` */
  exitPositionWithAssets?:
    | AaveV2Stablecoin_ExitPositionWithAssets
    | undefined;
  /** Represents function `rebalance(address newLendingToken, uint256 minNewLendingTokenAmount)` */
  rebalance?:
    | AaveV2Stablecoin_Rebalance
    | undefined;
  /** Represents function `reinvest(uint256 minAssetsOut)` */
  reinvest?:
    | AaveV2Stablecoin_Reinvest
    | undefined;
  /** Represents function `setAccrualPeriod(uint32 newAccrualPeriod)` */
  setAccrualPeriod?:
    | AaveV2Stablecoin_SetAccrualPeriod
    | undefined;
  /** Represents function `setDepositLimit(uint256 limit)` */
  setDepositLimit?:
    | AaveV2Stablecoin_SetDepositLimit
    | undefined;
  /** Represents function `setLiquidityLimit(uint256 limit)` */
  setLiquidityLimit?:
    | AaveV2Stablecoin_SetLiquidityLimit
    | undefined;
  /** Represents function `transferFees()` */
  sendFees?: AaveV2Stablecoin_SendFees | undefined;
}

/**
 * Accrue yield, platform fees, and performance fees..
 *
 * Represents function `accrue()`
 */
export interface AaveV2Stablecoin_Accrue {
}

/**
 * Claim rewards from Aave and begin cooldown period to unstake them.
 *
 * Represents function `claimAndUnstake()`
 */
export interface AaveV2Stablecoin_ClaimAndUnstake {
}

/**
 * Pushes total assets into the current Aave lending position.
 *
 * Represents function `enterPosition()`
 */
export interface AaveV2Stablecoin_EnterPosition {
}

/**
 * Pushes assets into the current Aave lending position.
 *
 * Represents function `enterPosition(uint256 assets)`
 */
export interface AaveV2Stablecoin_EnterPositionWithAssets {
  /** amount of assets to enter into the current position */
  assets: string;
}

/**
 * Pulls total assets from the current Aave lending position.
 *
 * Represents function `enterPosition()`
 */
export interface AaveV2Stablecoin_ExitPosition {
}

/**
 * Pulls assets from the current Aave lending position.
 *
 * Represents function `exitPosition(uint256 assets)`
 */
export interface AaveV2Stablecoin_ExitPositionWithAssets {
  /** amount of assets to exit from the current position */
  assets: string;
}

/**
 * Rebalances current assets into a new asset position.
 *
 * Represents function `rebalance(address newLendingToken, uint256 minNewLendingTokenAmount)`
 *
 * This function is based on the Curve Pool Registry exchange_multiple() function:
 * https://github.com/curvefi/curve-pool-registry/blob/16a8664952cf61d7fed06acca79ad5ac696f4b20/contracts/Swaps.vy#L461-L489
 */
export interface AaveV2Stablecoin_Rebalance {
  /** array of [initial token, pool, token, pool, token, ...] that specifies the swap route on Curve. */
  route: string[];
  /** An array of up to 4 swap params. Attempting more than four swaps will fail. */
  swapParams: AaveV2Stablecoin_Rebalance_SwapParams[];
  /** Minimum acceptable assets to be received from the swap (slippage parameter).  Must be parsable as an unsigned 256-bit integer. */
  minAssetsOut: string;
}

/** Represents parameters for a single swap. Each swap needs the indeces in Rebalance.route of the in/out token addresses and the swap type. See the Curve contract linked above for more detail. */
export interface AaveV2Stablecoin_Rebalance_SwapParams {
  /** Index in the `route` array of the swap's input token address */
  inIndex: number;
  /** Index in the `route` array of the swap's output token address */
  outIndex: number;
  /**
   * 1 - stableswap `exchange`
   * 2 - stableswap `exchange_underlying`
   * 3 - cryptoswap `exchange`
   * 4 - cryptoswap `exchange_underlying`
   * 5 - Polygon factory metapools `exchange_underlying`
   * See the Curve Pool Registry exchange_multiple() function for more information.
   */
  swapType: number;
}

/**
 * Reinvest rewards back into cellar's current position. Must be called within 2 day unstake period 10 days after `claimAndUnstake` was run.
 *
 * Represents function `reinvest(uint256 minAssetsOut)`
 */
export interface AaveV2Stablecoin_Reinvest {
  /** Minimum acceptable assets to be received from the swap (slippage parameter).  Must be parsable as an unsigned 256-bit integer. */
  minAssetsOut: string;
}

/**
 * Set the accrual period over which yield is distributed.
 *
 * Represents function `setAccrualPeriod(uint32 newAccrualPeriod)`
 */
export interface AaveV2Stablecoin_SetAccrualPeriod {
  newAccrualPeriod: number;
}

/**
 * Set the per-wallet deposit limit. Uses the same decimals as the current asset.
 *
 * Represents function `setDepositLimit(uint256 limit)`
 */
export interface AaveV2Stablecoin_SetDepositLimit {
  /** Amount of assets to set as the new limit. Must be parsable as an unsigned 256-bit integer. */
  limit: string;
}

/**
 * Set the maximum liquidity that cellar can manage. Uses the same decimals as the current asset.
 *
 * Represents function `setLiquidityLimit(uint256 limit)`
 */
export interface AaveV2Stablecoin_SetLiquidityLimit {
  /** Amount of assets to set as the new limit */
  limit: string;
}

/**
 * Transfer accrued fees to the Sommelier Chain to distribute.
 *
 * Represents function `sendFees()`
 */
export interface AaveV2Stablecoin_SendFees {
}

/** Represents a function call initiated by governance */
export interface AaveV2StablecoinGovernance {
  /** Represents function `setFeesDistributor(bytes32)` */
  setFeesDistributor?:
    | AaveV2StablecoinGovernance_SetFeesDistributor
    | undefined;
  /** Represents function `initiateShutdown(bool)` */
  initiateShutdown?:
    | AaveV2StablecoinGovernance_InitiateShutdown
    | undefined;
  /** Represents function `liftShutdown()` */
  liftShutdown?:
    | AaveV2StablecoinGovernance_LiftShutdown
    | undefined;
  /** Represents function `setTrust(address, bool)` */
  setTrust?:
    | AaveV2StablecoinGovernance_SetTrust
    | undefined;
  /** Represents function `sweep(address, address)` */
  sweep?: AaveV2StablecoinGovernance_Sweep | undefined;
}

/** Represents function `setFeesDistributor(bytes32)` */
export interface AaveV2StablecoinGovernance_SetFeesDistributor {
  /** The new fees distributor */
  newFeesDistributor: string;
}

/** Represents function `initiateShutdown(bool)` */
export interface AaveV2StablecoinGovernance_InitiateShutdown {
  /** Whether to empty the position */
  emptyPosition: boolean;
}

/** Represents function `liftShutdown()` */
export interface AaveV2StablecoinGovernance_LiftShutdown {
}

/** Represents function `setTrust(address, bool)` */
export interface AaveV2StablecoinGovernance_SetTrust {
  /** The position to set trust for */
  position: string;
  /** Whether to trust the address */
  trust: boolean;
}

/** Represents function `sweep(address, address)` */
export interface AaveV2StablecoinGovernance_Sweep {
  /** The address of the ERC20 token to sweep */
  token: string;
  /** The recipient of the sweep */
  recipient: string;
}

function createBaseAaveV2Stablecoin(): AaveV2Stablecoin {
  return {
    accrue: undefined,
    claimAndUnstake: undefined,
    enterPosition: undefined,
    enterPositionWithAssets: undefined,
    exitPosition: undefined,
    exitPositionWithAssets: undefined,
    rebalance: undefined,
    reinvest: undefined,
    setAccrualPeriod: undefined,
    setDepositLimit: undefined,
    setLiquidityLimit: undefined,
    sendFees: undefined,
  };
}

export const AaveV2Stablecoin = {
  encode(message: AaveV2Stablecoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accrue !== undefined) {
      AaveV2Stablecoin_Accrue.encode(message.accrue, writer.uint32(10).fork()).ldelim();
    }
    if (message.claimAndUnstake !== undefined) {
      AaveV2Stablecoin_ClaimAndUnstake.encode(message.claimAndUnstake, writer.uint32(18).fork()).ldelim();
    }
    if (message.enterPosition !== undefined) {
      AaveV2Stablecoin_EnterPosition.encode(message.enterPosition, writer.uint32(26).fork()).ldelim();
    }
    if (message.enterPositionWithAssets !== undefined) {
      AaveV2Stablecoin_EnterPositionWithAssets.encode(message.enterPositionWithAssets, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.exitPosition !== undefined) {
      AaveV2Stablecoin_ExitPosition.encode(message.exitPosition, writer.uint32(42).fork()).ldelim();
    }
    if (message.exitPositionWithAssets !== undefined) {
      AaveV2Stablecoin_ExitPositionWithAssets.encode(message.exitPositionWithAssets, writer.uint32(50).fork()).ldelim();
    }
    if (message.rebalance !== undefined) {
      AaveV2Stablecoin_Rebalance.encode(message.rebalance, writer.uint32(58).fork()).ldelim();
    }
    if (message.reinvest !== undefined) {
      AaveV2Stablecoin_Reinvest.encode(message.reinvest, writer.uint32(66).fork()).ldelim();
    }
    if (message.setAccrualPeriod !== undefined) {
      AaveV2Stablecoin_SetAccrualPeriod.encode(message.setAccrualPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.setDepositLimit !== undefined) {
      AaveV2Stablecoin_SetDepositLimit.encode(message.setDepositLimit, writer.uint32(82).fork()).ldelim();
    }
    if (message.setLiquidityLimit !== undefined) {
      AaveV2Stablecoin_SetLiquidityLimit.encode(message.setLiquidityLimit, writer.uint32(90).fork()).ldelim();
    }
    if (message.sendFees !== undefined) {
      AaveV2Stablecoin_SendFees.encode(message.sendFees, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accrue = AaveV2Stablecoin_Accrue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.claimAndUnstake = AaveV2Stablecoin_ClaimAndUnstake.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.enterPosition = AaveV2Stablecoin_EnterPosition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.enterPositionWithAssets = AaveV2Stablecoin_EnterPositionWithAssets.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.exitPosition = AaveV2Stablecoin_ExitPosition.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.exitPositionWithAssets = AaveV2Stablecoin_ExitPositionWithAssets.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.rebalance = AaveV2Stablecoin_Rebalance.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.reinvest = AaveV2Stablecoin_Reinvest.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.setAccrualPeriod = AaveV2Stablecoin_SetAccrualPeriod.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.setDepositLimit = AaveV2Stablecoin_SetDepositLimit.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.setLiquidityLimit = AaveV2Stablecoin_SetLiquidityLimit.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.sendFees = AaveV2Stablecoin_SendFees.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2Stablecoin {
    return {
      accrue: isSet(object.accrue) ? AaveV2Stablecoin_Accrue.fromJSON(object.accrue) : undefined,
      claimAndUnstake: isSet(object.claimAndUnstake)
        ? AaveV2Stablecoin_ClaimAndUnstake.fromJSON(object.claimAndUnstake)
        : undefined,
      enterPosition: isSet(object.enterPosition)
        ? AaveV2Stablecoin_EnterPosition.fromJSON(object.enterPosition)
        : undefined,
      enterPositionWithAssets: isSet(object.enterPositionWithAssets)
        ? AaveV2Stablecoin_EnterPositionWithAssets.fromJSON(object.enterPositionWithAssets)
        : undefined,
      exitPosition: isSet(object.exitPosition)
        ? AaveV2Stablecoin_ExitPosition.fromJSON(object.exitPosition)
        : undefined,
      exitPositionWithAssets: isSet(object.exitPositionWithAssets)
        ? AaveV2Stablecoin_ExitPositionWithAssets.fromJSON(object.exitPositionWithAssets)
        : undefined,
      rebalance: isSet(object.rebalance) ? AaveV2Stablecoin_Rebalance.fromJSON(object.rebalance) : undefined,
      reinvest: isSet(object.reinvest) ? AaveV2Stablecoin_Reinvest.fromJSON(object.reinvest) : undefined,
      setAccrualPeriod: isSet(object.setAccrualPeriod)
        ? AaveV2Stablecoin_SetAccrualPeriod.fromJSON(object.setAccrualPeriod)
        : undefined,
      setDepositLimit: isSet(object.setDepositLimit)
        ? AaveV2Stablecoin_SetDepositLimit.fromJSON(object.setDepositLimit)
        : undefined,
      setLiquidityLimit: isSet(object.setLiquidityLimit)
        ? AaveV2Stablecoin_SetLiquidityLimit.fromJSON(object.setLiquidityLimit)
        : undefined,
      sendFees: isSet(object.sendFees) ? AaveV2Stablecoin_SendFees.fromJSON(object.sendFees) : undefined,
    };
  },

  toJSON(message: AaveV2Stablecoin): unknown {
    const obj: any = {};
    if (message.accrue !== undefined) {
      obj.accrue = AaveV2Stablecoin_Accrue.toJSON(message.accrue);
    }
    if (message.claimAndUnstake !== undefined) {
      obj.claimAndUnstake = AaveV2Stablecoin_ClaimAndUnstake.toJSON(message.claimAndUnstake);
    }
    if (message.enterPosition !== undefined) {
      obj.enterPosition = AaveV2Stablecoin_EnterPosition.toJSON(message.enterPosition);
    }
    if (message.enterPositionWithAssets !== undefined) {
      obj.enterPositionWithAssets = AaveV2Stablecoin_EnterPositionWithAssets.toJSON(message.enterPositionWithAssets);
    }
    if (message.exitPosition !== undefined) {
      obj.exitPosition = AaveV2Stablecoin_ExitPosition.toJSON(message.exitPosition);
    }
    if (message.exitPositionWithAssets !== undefined) {
      obj.exitPositionWithAssets = AaveV2Stablecoin_ExitPositionWithAssets.toJSON(message.exitPositionWithAssets);
    }
    if (message.rebalance !== undefined) {
      obj.rebalance = AaveV2Stablecoin_Rebalance.toJSON(message.rebalance);
    }
    if (message.reinvest !== undefined) {
      obj.reinvest = AaveV2Stablecoin_Reinvest.toJSON(message.reinvest);
    }
    if (message.setAccrualPeriod !== undefined) {
      obj.setAccrualPeriod = AaveV2Stablecoin_SetAccrualPeriod.toJSON(message.setAccrualPeriod);
    }
    if (message.setDepositLimit !== undefined) {
      obj.setDepositLimit = AaveV2Stablecoin_SetDepositLimit.toJSON(message.setDepositLimit);
    }
    if (message.setLiquidityLimit !== undefined) {
      obj.setLiquidityLimit = AaveV2Stablecoin_SetLiquidityLimit.toJSON(message.setLiquidityLimit);
    }
    if (message.sendFees !== undefined) {
      obj.sendFees = AaveV2Stablecoin_SendFees.toJSON(message.sendFees);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin>, I>>(base?: I): AaveV2Stablecoin {
    return AaveV2Stablecoin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin>, I>>(object: I): AaveV2Stablecoin {
    const message = createBaseAaveV2Stablecoin();
    message.accrue = (object.accrue !== undefined && object.accrue !== null)
      ? AaveV2Stablecoin_Accrue.fromPartial(object.accrue)
      : undefined;
    message.claimAndUnstake = (object.claimAndUnstake !== undefined && object.claimAndUnstake !== null)
      ? AaveV2Stablecoin_ClaimAndUnstake.fromPartial(object.claimAndUnstake)
      : undefined;
    message.enterPosition = (object.enterPosition !== undefined && object.enterPosition !== null)
      ? AaveV2Stablecoin_EnterPosition.fromPartial(object.enterPosition)
      : undefined;
    message.enterPositionWithAssets =
      (object.enterPositionWithAssets !== undefined && object.enterPositionWithAssets !== null)
        ? AaveV2Stablecoin_EnterPositionWithAssets.fromPartial(object.enterPositionWithAssets)
        : undefined;
    message.exitPosition = (object.exitPosition !== undefined && object.exitPosition !== null)
      ? AaveV2Stablecoin_ExitPosition.fromPartial(object.exitPosition)
      : undefined;
    message.exitPositionWithAssets =
      (object.exitPositionWithAssets !== undefined && object.exitPositionWithAssets !== null)
        ? AaveV2Stablecoin_ExitPositionWithAssets.fromPartial(object.exitPositionWithAssets)
        : undefined;
    message.rebalance = (object.rebalance !== undefined && object.rebalance !== null)
      ? AaveV2Stablecoin_Rebalance.fromPartial(object.rebalance)
      : undefined;
    message.reinvest = (object.reinvest !== undefined && object.reinvest !== null)
      ? AaveV2Stablecoin_Reinvest.fromPartial(object.reinvest)
      : undefined;
    message.setAccrualPeriod = (object.setAccrualPeriod !== undefined && object.setAccrualPeriod !== null)
      ? AaveV2Stablecoin_SetAccrualPeriod.fromPartial(object.setAccrualPeriod)
      : undefined;
    message.setDepositLimit = (object.setDepositLimit !== undefined && object.setDepositLimit !== null)
      ? AaveV2Stablecoin_SetDepositLimit.fromPartial(object.setDepositLimit)
      : undefined;
    message.setLiquidityLimit = (object.setLiquidityLimit !== undefined && object.setLiquidityLimit !== null)
      ? AaveV2Stablecoin_SetLiquidityLimit.fromPartial(object.setLiquidityLimit)
      : undefined;
    message.sendFees = (object.sendFees !== undefined && object.sendFees !== null)
      ? AaveV2Stablecoin_SendFees.fromPartial(object.sendFees)
      : undefined;
    return message;
  },
};

function createBaseAaveV2Stablecoin_Accrue(): AaveV2Stablecoin_Accrue {
  return {};
}

export const AaveV2Stablecoin_Accrue = {
  encode(_: AaveV2Stablecoin_Accrue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_Accrue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_Accrue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AaveV2Stablecoin_Accrue {
    return {};
  },

  toJSON(_: AaveV2Stablecoin_Accrue): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_Accrue>, I>>(base?: I): AaveV2Stablecoin_Accrue {
    return AaveV2Stablecoin_Accrue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_Accrue>, I>>(_: I): AaveV2Stablecoin_Accrue {
    const message = createBaseAaveV2Stablecoin_Accrue();
    return message;
  },
};

function createBaseAaveV2Stablecoin_ClaimAndUnstake(): AaveV2Stablecoin_ClaimAndUnstake {
  return {};
}

export const AaveV2Stablecoin_ClaimAndUnstake = {
  encode(_: AaveV2Stablecoin_ClaimAndUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_ClaimAndUnstake {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_ClaimAndUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AaveV2Stablecoin_ClaimAndUnstake {
    return {};
  },

  toJSON(_: AaveV2Stablecoin_ClaimAndUnstake): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_ClaimAndUnstake>, I>>(
    base?: I,
  ): AaveV2Stablecoin_ClaimAndUnstake {
    return AaveV2Stablecoin_ClaimAndUnstake.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_ClaimAndUnstake>, I>>(
    _: I,
  ): AaveV2Stablecoin_ClaimAndUnstake {
    const message = createBaseAaveV2Stablecoin_ClaimAndUnstake();
    return message;
  },
};

function createBaseAaveV2Stablecoin_EnterPosition(): AaveV2Stablecoin_EnterPosition {
  return {};
}

export const AaveV2Stablecoin_EnterPosition = {
  encode(_: AaveV2Stablecoin_EnterPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_EnterPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_EnterPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AaveV2Stablecoin_EnterPosition {
    return {};
  },

  toJSON(_: AaveV2Stablecoin_EnterPosition): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_EnterPosition>, I>>(base?: I): AaveV2Stablecoin_EnterPosition {
    return AaveV2Stablecoin_EnterPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_EnterPosition>, I>>(_: I): AaveV2Stablecoin_EnterPosition {
    const message = createBaseAaveV2Stablecoin_EnterPosition();
    return message;
  },
};

function createBaseAaveV2Stablecoin_EnterPositionWithAssets(): AaveV2Stablecoin_EnterPositionWithAssets {
  return { assets: "" };
}

export const AaveV2Stablecoin_EnterPositionWithAssets = {
  encode(message: AaveV2Stablecoin_EnterPositionWithAssets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assets !== "") {
      writer.uint32(10).string(message.assets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_EnterPositionWithAssets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_EnterPositionWithAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): AaveV2Stablecoin_EnterPositionWithAssets {
    return { assets: isSet(object.assets) ? globalThis.String(object.assets) : "" };
  },

  toJSON(message: AaveV2Stablecoin_EnterPositionWithAssets): unknown {
    const obj: any = {};
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_EnterPositionWithAssets>, I>>(
    base?: I,
  ): AaveV2Stablecoin_EnterPositionWithAssets {
    return AaveV2Stablecoin_EnterPositionWithAssets.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_EnterPositionWithAssets>, I>>(
    object: I,
  ): AaveV2Stablecoin_EnterPositionWithAssets {
    const message = createBaseAaveV2Stablecoin_EnterPositionWithAssets();
    message.assets = object.assets ?? "";
    return message;
  },
};

function createBaseAaveV2Stablecoin_ExitPosition(): AaveV2Stablecoin_ExitPosition {
  return {};
}

export const AaveV2Stablecoin_ExitPosition = {
  encode(_: AaveV2Stablecoin_ExitPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_ExitPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_ExitPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AaveV2Stablecoin_ExitPosition {
    return {};
  },

  toJSON(_: AaveV2Stablecoin_ExitPosition): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_ExitPosition>, I>>(base?: I): AaveV2Stablecoin_ExitPosition {
    return AaveV2Stablecoin_ExitPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_ExitPosition>, I>>(_: I): AaveV2Stablecoin_ExitPosition {
    const message = createBaseAaveV2Stablecoin_ExitPosition();
    return message;
  },
};

function createBaseAaveV2Stablecoin_ExitPositionWithAssets(): AaveV2Stablecoin_ExitPositionWithAssets {
  return { assets: "" };
}

export const AaveV2Stablecoin_ExitPositionWithAssets = {
  encode(message: AaveV2Stablecoin_ExitPositionWithAssets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assets !== "") {
      writer.uint32(10).string(message.assets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_ExitPositionWithAssets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_ExitPositionWithAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): AaveV2Stablecoin_ExitPositionWithAssets {
    return { assets: isSet(object.assets) ? globalThis.String(object.assets) : "" };
  },

  toJSON(message: AaveV2Stablecoin_ExitPositionWithAssets): unknown {
    const obj: any = {};
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_ExitPositionWithAssets>, I>>(
    base?: I,
  ): AaveV2Stablecoin_ExitPositionWithAssets {
    return AaveV2Stablecoin_ExitPositionWithAssets.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_ExitPositionWithAssets>, I>>(
    object: I,
  ): AaveV2Stablecoin_ExitPositionWithAssets {
    const message = createBaseAaveV2Stablecoin_ExitPositionWithAssets();
    message.assets = object.assets ?? "";
    return message;
  },
};

function createBaseAaveV2Stablecoin_Rebalance(): AaveV2Stablecoin_Rebalance {
  return { route: [], swapParams: [], minAssetsOut: "" };
}

export const AaveV2Stablecoin_Rebalance = {
  encode(message: AaveV2Stablecoin_Rebalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.route) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.swapParams) {
      AaveV2Stablecoin_Rebalance_SwapParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.minAssetsOut !== "") {
      writer.uint32(26).string(message.minAssetsOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_Rebalance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_Rebalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.route.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.swapParams.push(AaveV2Stablecoin_Rebalance_SwapParams.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minAssetsOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2Stablecoin_Rebalance {
    return {
      route: globalThis.Array.isArray(object?.route) ? object.route.map((e: any) => globalThis.String(e)) : [],
      swapParams: globalThis.Array.isArray(object?.swapParams)
        ? object.swapParams.map((e: any) => AaveV2Stablecoin_Rebalance_SwapParams.fromJSON(e))
        : [],
      minAssetsOut: isSet(object.minAssetsOut) ? globalThis.String(object.minAssetsOut) : "",
    };
  },

  toJSON(message: AaveV2Stablecoin_Rebalance): unknown {
    const obj: any = {};
    if (message.route?.length) {
      obj.route = message.route;
    }
    if (message.swapParams?.length) {
      obj.swapParams = message.swapParams.map((e) => AaveV2Stablecoin_Rebalance_SwapParams.toJSON(e));
    }
    if (message.minAssetsOut !== "") {
      obj.minAssetsOut = message.minAssetsOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_Rebalance>, I>>(base?: I): AaveV2Stablecoin_Rebalance {
    return AaveV2Stablecoin_Rebalance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_Rebalance>, I>>(object: I): AaveV2Stablecoin_Rebalance {
    const message = createBaseAaveV2Stablecoin_Rebalance();
    message.route = object.route?.map((e) => e) || [];
    message.swapParams = object.swapParams?.map((e) => AaveV2Stablecoin_Rebalance_SwapParams.fromPartial(e)) || [];
    message.minAssetsOut = object.minAssetsOut ?? "";
    return message;
  },
};

function createBaseAaveV2Stablecoin_Rebalance_SwapParams(): AaveV2Stablecoin_Rebalance_SwapParams {
  return { inIndex: 0, outIndex: 0, swapType: 0 };
}

export const AaveV2Stablecoin_Rebalance_SwapParams = {
  encode(message: AaveV2Stablecoin_Rebalance_SwapParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inIndex !== 0) {
      writer.uint32(8).uint64(message.inIndex);
    }
    if (message.outIndex !== 0) {
      writer.uint32(16).uint64(message.outIndex);
    }
    if (message.swapType !== 0) {
      writer.uint32(24).uint64(message.swapType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_Rebalance_SwapParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_Rebalance_SwapParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inIndex = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.outIndex = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.swapType = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2Stablecoin_Rebalance_SwapParams {
    return {
      inIndex: isSet(object.inIndex) ? globalThis.Number(object.inIndex) : 0,
      outIndex: isSet(object.outIndex) ? globalThis.Number(object.outIndex) : 0,
      swapType: isSet(object.swapType) ? globalThis.Number(object.swapType) : 0,
    };
  },

  toJSON(message: AaveV2Stablecoin_Rebalance_SwapParams): unknown {
    const obj: any = {};
    if (message.inIndex !== 0) {
      obj.inIndex = Math.round(message.inIndex);
    }
    if (message.outIndex !== 0) {
      obj.outIndex = Math.round(message.outIndex);
    }
    if (message.swapType !== 0) {
      obj.swapType = Math.round(message.swapType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_Rebalance_SwapParams>, I>>(
    base?: I,
  ): AaveV2Stablecoin_Rebalance_SwapParams {
    return AaveV2Stablecoin_Rebalance_SwapParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_Rebalance_SwapParams>, I>>(
    object: I,
  ): AaveV2Stablecoin_Rebalance_SwapParams {
    const message = createBaseAaveV2Stablecoin_Rebalance_SwapParams();
    message.inIndex = object.inIndex ?? 0;
    message.outIndex = object.outIndex ?? 0;
    message.swapType = object.swapType ?? 0;
    return message;
  },
};

function createBaseAaveV2Stablecoin_Reinvest(): AaveV2Stablecoin_Reinvest {
  return { minAssetsOut: "" };
}

export const AaveV2Stablecoin_Reinvest = {
  encode(message: AaveV2Stablecoin_Reinvest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minAssetsOut !== "") {
      writer.uint32(10).string(message.minAssetsOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_Reinvest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_Reinvest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minAssetsOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2Stablecoin_Reinvest {
    return { minAssetsOut: isSet(object.minAssetsOut) ? globalThis.String(object.minAssetsOut) : "" };
  },

  toJSON(message: AaveV2Stablecoin_Reinvest): unknown {
    const obj: any = {};
    if (message.minAssetsOut !== "") {
      obj.minAssetsOut = message.minAssetsOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_Reinvest>, I>>(base?: I): AaveV2Stablecoin_Reinvest {
    return AaveV2Stablecoin_Reinvest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_Reinvest>, I>>(object: I): AaveV2Stablecoin_Reinvest {
    const message = createBaseAaveV2Stablecoin_Reinvest();
    message.minAssetsOut = object.minAssetsOut ?? "";
    return message;
  },
};

function createBaseAaveV2Stablecoin_SetAccrualPeriod(): AaveV2Stablecoin_SetAccrualPeriod {
  return { newAccrualPeriod: 0 };
}

export const AaveV2Stablecoin_SetAccrualPeriod = {
  encode(message: AaveV2Stablecoin_SetAccrualPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newAccrualPeriod !== 0) {
      writer.uint32(8).uint32(message.newAccrualPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_SetAccrualPeriod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_SetAccrualPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newAccrualPeriod = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2Stablecoin_SetAccrualPeriod {
    return { newAccrualPeriod: isSet(object.newAccrualPeriod) ? globalThis.Number(object.newAccrualPeriod) : 0 };
  },

  toJSON(message: AaveV2Stablecoin_SetAccrualPeriod): unknown {
    const obj: any = {};
    if (message.newAccrualPeriod !== 0) {
      obj.newAccrualPeriod = Math.round(message.newAccrualPeriod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_SetAccrualPeriod>, I>>(
    base?: I,
  ): AaveV2Stablecoin_SetAccrualPeriod {
    return AaveV2Stablecoin_SetAccrualPeriod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_SetAccrualPeriod>, I>>(
    object: I,
  ): AaveV2Stablecoin_SetAccrualPeriod {
    const message = createBaseAaveV2Stablecoin_SetAccrualPeriod();
    message.newAccrualPeriod = object.newAccrualPeriod ?? 0;
    return message;
  },
};

function createBaseAaveV2Stablecoin_SetDepositLimit(): AaveV2Stablecoin_SetDepositLimit {
  return { limit: "" };
}

export const AaveV2Stablecoin_SetDepositLimit = {
  encode(message: AaveV2Stablecoin_SetDepositLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== "") {
      writer.uint32(10).string(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_SetDepositLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_SetDepositLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.limit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2Stablecoin_SetDepositLimit {
    return { limit: isSet(object.limit) ? globalThis.String(object.limit) : "" };
  },

  toJSON(message: AaveV2Stablecoin_SetDepositLimit): unknown {
    const obj: any = {};
    if (message.limit !== "") {
      obj.limit = message.limit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_SetDepositLimit>, I>>(
    base?: I,
  ): AaveV2Stablecoin_SetDepositLimit {
    return AaveV2Stablecoin_SetDepositLimit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_SetDepositLimit>, I>>(
    object: I,
  ): AaveV2Stablecoin_SetDepositLimit {
    const message = createBaseAaveV2Stablecoin_SetDepositLimit();
    message.limit = object.limit ?? "";
    return message;
  },
};

function createBaseAaveV2Stablecoin_SetLiquidityLimit(): AaveV2Stablecoin_SetLiquidityLimit {
  return { limit: "" };
}

export const AaveV2Stablecoin_SetLiquidityLimit = {
  encode(message: AaveV2Stablecoin_SetLiquidityLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== "") {
      writer.uint32(10).string(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_SetLiquidityLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_SetLiquidityLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.limit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2Stablecoin_SetLiquidityLimit {
    return { limit: isSet(object.limit) ? globalThis.String(object.limit) : "" };
  },

  toJSON(message: AaveV2Stablecoin_SetLiquidityLimit): unknown {
    const obj: any = {};
    if (message.limit !== "") {
      obj.limit = message.limit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_SetLiquidityLimit>, I>>(
    base?: I,
  ): AaveV2Stablecoin_SetLiquidityLimit {
    return AaveV2Stablecoin_SetLiquidityLimit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_SetLiquidityLimit>, I>>(
    object: I,
  ): AaveV2Stablecoin_SetLiquidityLimit {
    const message = createBaseAaveV2Stablecoin_SetLiquidityLimit();
    message.limit = object.limit ?? "";
    return message;
  },
};

function createBaseAaveV2Stablecoin_SendFees(): AaveV2Stablecoin_SendFees {
  return {};
}

export const AaveV2Stablecoin_SendFees = {
  encode(_: AaveV2Stablecoin_SendFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2Stablecoin_SendFees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2Stablecoin_SendFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AaveV2Stablecoin_SendFees {
    return {};
  },

  toJSON(_: AaveV2Stablecoin_SendFees): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2Stablecoin_SendFees>, I>>(base?: I): AaveV2Stablecoin_SendFees {
    return AaveV2Stablecoin_SendFees.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2Stablecoin_SendFees>, I>>(_: I): AaveV2Stablecoin_SendFees {
    const message = createBaseAaveV2Stablecoin_SendFees();
    return message;
  },
};

function createBaseAaveV2StablecoinGovernance(): AaveV2StablecoinGovernance {
  return {
    setFeesDistributor: undefined,
    initiateShutdown: undefined,
    liftShutdown: undefined,
    setTrust: undefined,
    sweep: undefined,
  };
}

export const AaveV2StablecoinGovernance = {
  encode(message: AaveV2StablecoinGovernance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.setFeesDistributor !== undefined) {
      AaveV2StablecoinGovernance_SetFeesDistributor.encode(message.setFeesDistributor, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.initiateShutdown !== undefined) {
      AaveV2StablecoinGovernance_InitiateShutdown.encode(message.initiateShutdown, writer.uint32(18).fork()).ldelim();
    }
    if (message.liftShutdown !== undefined) {
      AaveV2StablecoinGovernance_LiftShutdown.encode(message.liftShutdown, writer.uint32(26).fork()).ldelim();
    }
    if (message.setTrust !== undefined) {
      AaveV2StablecoinGovernance_SetTrust.encode(message.setTrust, writer.uint32(34).fork()).ldelim();
    }
    if (message.sweep !== undefined) {
      AaveV2StablecoinGovernance_Sweep.encode(message.sweep, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2StablecoinGovernance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2StablecoinGovernance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.setFeesDistributor = AaveV2StablecoinGovernance_SetFeesDistributor.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.initiateShutdown = AaveV2StablecoinGovernance_InitiateShutdown.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.liftShutdown = AaveV2StablecoinGovernance_LiftShutdown.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setTrust = AaveV2StablecoinGovernance_SetTrust.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sweep = AaveV2StablecoinGovernance_Sweep.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2StablecoinGovernance {
    return {
      setFeesDistributor: isSet(object.setFeesDistributor)
        ? AaveV2StablecoinGovernance_SetFeesDistributor.fromJSON(object.setFeesDistributor)
        : undefined,
      initiateShutdown: isSet(object.initiateShutdown)
        ? AaveV2StablecoinGovernance_InitiateShutdown.fromJSON(object.initiateShutdown)
        : undefined,
      liftShutdown: isSet(object.liftShutdown)
        ? AaveV2StablecoinGovernance_LiftShutdown.fromJSON(object.liftShutdown)
        : undefined,
      setTrust: isSet(object.setTrust) ? AaveV2StablecoinGovernance_SetTrust.fromJSON(object.setTrust) : undefined,
      sweep: isSet(object.sweep) ? AaveV2StablecoinGovernance_Sweep.fromJSON(object.sweep) : undefined,
    };
  },

  toJSON(message: AaveV2StablecoinGovernance): unknown {
    const obj: any = {};
    if (message.setFeesDistributor !== undefined) {
      obj.setFeesDistributor = AaveV2StablecoinGovernance_SetFeesDistributor.toJSON(message.setFeesDistributor);
    }
    if (message.initiateShutdown !== undefined) {
      obj.initiateShutdown = AaveV2StablecoinGovernance_InitiateShutdown.toJSON(message.initiateShutdown);
    }
    if (message.liftShutdown !== undefined) {
      obj.liftShutdown = AaveV2StablecoinGovernance_LiftShutdown.toJSON(message.liftShutdown);
    }
    if (message.setTrust !== undefined) {
      obj.setTrust = AaveV2StablecoinGovernance_SetTrust.toJSON(message.setTrust);
    }
    if (message.sweep !== undefined) {
      obj.sweep = AaveV2StablecoinGovernance_Sweep.toJSON(message.sweep);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2StablecoinGovernance>, I>>(base?: I): AaveV2StablecoinGovernance {
    return AaveV2StablecoinGovernance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2StablecoinGovernance>, I>>(object: I): AaveV2StablecoinGovernance {
    const message = createBaseAaveV2StablecoinGovernance();
    message.setFeesDistributor = (object.setFeesDistributor !== undefined && object.setFeesDistributor !== null)
      ? AaveV2StablecoinGovernance_SetFeesDistributor.fromPartial(object.setFeesDistributor)
      : undefined;
    message.initiateShutdown = (object.initiateShutdown !== undefined && object.initiateShutdown !== null)
      ? AaveV2StablecoinGovernance_InitiateShutdown.fromPartial(object.initiateShutdown)
      : undefined;
    message.liftShutdown = (object.liftShutdown !== undefined && object.liftShutdown !== null)
      ? AaveV2StablecoinGovernance_LiftShutdown.fromPartial(object.liftShutdown)
      : undefined;
    message.setTrust = (object.setTrust !== undefined && object.setTrust !== null)
      ? AaveV2StablecoinGovernance_SetTrust.fromPartial(object.setTrust)
      : undefined;
    message.sweep = (object.sweep !== undefined && object.sweep !== null)
      ? AaveV2StablecoinGovernance_Sweep.fromPartial(object.sweep)
      : undefined;
    return message;
  },
};

function createBaseAaveV2StablecoinGovernance_SetFeesDistributor(): AaveV2StablecoinGovernance_SetFeesDistributor {
  return { newFeesDistributor: "" };
}

export const AaveV2StablecoinGovernance_SetFeesDistributor = {
  encode(message: AaveV2StablecoinGovernance_SetFeesDistributor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newFeesDistributor !== "") {
      writer.uint32(10).string(message.newFeesDistributor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2StablecoinGovernance_SetFeesDistributor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2StablecoinGovernance_SetFeesDistributor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newFeesDistributor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2StablecoinGovernance_SetFeesDistributor {
    return { newFeesDistributor: isSet(object.newFeesDistributor) ? globalThis.String(object.newFeesDistributor) : "" };
  },

  toJSON(message: AaveV2StablecoinGovernance_SetFeesDistributor): unknown {
    const obj: any = {};
    if (message.newFeesDistributor !== "") {
      obj.newFeesDistributor = message.newFeesDistributor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_SetFeesDistributor>, I>>(
    base?: I,
  ): AaveV2StablecoinGovernance_SetFeesDistributor {
    return AaveV2StablecoinGovernance_SetFeesDistributor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_SetFeesDistributor>, I>>(
    object: I,
  ): AaveV2StablecoinGovernance_SetFeesDistributor {
    const message = createBaseAaveV2StablecoinGovernance_SetFeesDistributor();
    message.newFeesDistributor = object.newFeesDistributor ?? "";
    return message;
  },
};

function createBaseAaveV2StablecoinGovernance_InitiateShutdown(): AaveV2StablecoinGovernance_InitiateShutdown {
  return { emptyPosition: false };
}

export const AaveV2StablecoinGovernance_InitiateShutdown = {
  encode(message: AaveV2StablecoinGovernance_InitiateShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emptyPosition === true) {
      writer.uint32(8).bool(message.emptyPosition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2StablecoinGovernance_InitiateShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2StablecoinGovernance_InitiateShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.emptyPosition = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2StablecoinGovernance_InitiateShutdown {
    return { emptyPosition: isSet(object.emptyPosition) ? globalThis.Boolean(object.emptyPosition) : false };
  },

  toJSON(message: AaveV2StablecoinGovernance_InitiateShutdown): unknown {
    const obj: any = {};
    if (message.emptyPosition === true) {
      obj.emptyPosition = message.emptyPosition;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_InitiateShutdown>, I>>(
    base?: I,
  ): AaveV2StablecoinGovernance_InitiateShutdown {
    return AaveV2StablecoinGovernance_InitiateShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_InitiateShutdown>, I>>(
    object: I,
  ): AaveV2StablecoinGovernance_InitiateShutdown {
    const message = createBaseAaveV2StablecoinGovernance_InitiateShutdown();
    message.emptyPosition = object.emptyPosition ?? false;
    return message;
  },
};

function createBaseAaveV2StablecoinGovernance_LiftShutdown(): AaveV2StablecoinGovernance_LiftShutdown {
  return {};
}

export const AaveV2StablecoinGovernance_LiftShutdown = {
  encode(_: AaveV2StablecoinGovernance_LiftShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2StablecoinGovernance_LiftShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2StablecoinGovernance_LiftShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AaveV2StablecoinGovernance_LiftShutdown {
    return {};
  },

  toJSON(_: AaveV2StablecoinGovernance_LiftShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_LiftShutdown>, I>>(
    base?: I,
  ): AaveV2StablecoinGovernance_LiftShutdown {
    return AaveV2StablecoinGovernance_LiftShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_LiftShutdown>, I>>(
    _: I,
  ): AaveV2StablecoinGovernance_LiftShutdown {
    const message = createBaseAaveV2StablecoinGovernance_LiftShutdown();
    return message;
  },
};

function createBaseAaveV2StablecoinGovernance_SetTrust(): AaveV2StablecoinGovernance_SetTrust {
  return { position: "", trust: false };
}

export const AaveV2StablecoinGovernance_SetTrust = {
  encode(message: AaveV2StablecoinGovernance_SetTrust, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== "") {
      writer.uint32(10).string(message.position);
    }
    if (message.trust === true) {
      writer.uint32(16).bool(message.trust);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2StablecoinGovernance_SetTrust {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2StablecoinGovernance_SetTrust();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.position = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.trust = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2StablecoinGovernance_SetTrust {
    return {
      position: isSet(object.position) ? globalThis.String(object.position) : "",
      trust: isSet(object.trust) ? globalThis.Boolean(object.trust) : false,
    };
  },

  toJSON(message: AaveV2StablecoinGovernance_SetTrust): unknown {
    const obj: any = {};
    if (message.position !== "") {
      obj.position = message.position;
    }
    if (message.trust === true) {
      obj.trust = message.trust;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_SetTrust>, I>>(
    base?: I,
  ): AaveV2StablecoinGovernance_SetTrust {
    return AaveV2StablecoinGovernance_SetTrust.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_SetTrust>, I>>(
    object: I,
  ): AaveV2StablecoinGovernance_SetTrust {
    const message = createBaseAaveV2StablecoinGovernance_SetTrust();
    message.position = object.position ?? "";
    message.trust = object.trust ?? false;
    return message;
  },
};

function createBaseAaveV2StablecoinGovernance_Sweep(): AaveV2StablecoinGovernance_Sweep {
  return { token: "", recipient: "" };
}

export const AaveV2StablecoinGovernance_Sweep = {
  encode(message: AaveV2StablecoinGovernance_Sweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV2StablecoinGovernance_Sweep {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV2StablecoinGovernance_Sweep();
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

          message.recipient = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV2StablecoinGovernance_Sweep {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      recipient: isSet(object.recipient) ? globalThis.String(object.recipient) : "",
    };
  },

  toJSON(message: AaveV2StablecoinGovernance_Sweep): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.recipient !== "") {
      obj.recipient = message.recipient;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_Sweep>, I>>(
    base?: I,
  ): AaveV2StablecoinGovernance_Sweep {
    return AaveV2StablecoinGovernance_Sweep.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV2StablecoinGovernance_Sweep>, I>>(
    object: I,
  ): AaveV2StablecoinGovernance_Sweep {
    const message = createBaseAaveV2StablecoinGovernance_Sweep();
    message.token = object.token ?? "";
    message.recipient = object.recipient ?? "";
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
