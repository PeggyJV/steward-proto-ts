/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Exchange, exchangeFromJSON, exchangeToJSON, SwapParams } from "./common";
import Long = require("long");

export const protobufPackage = "steward.v4";

/** Represents a function call to a cellar that implements Cellar.sol */
export interface CellarV1 {
  /** Represents function `addPosition(uint256 index, address position)` */
  addPosition?:
    | CellarV1_AddPosition
    | undefined;
  /** Represents function `pushPosition(address position)` */
  pushPosition?:
    | CellarV1_PushPosition
    | undefined;
  /** Represents function `removePosition(uint256 index)` */
  removePosition?:
    | CellarV1_RemovePosition
    | undefined;
  /** Represents function `setHoldingPosition(address newHoldingPosition)` */
  setHoldingPosition?:
    | CellarV1_SetHoldingPosition
    | undefined;
  /**
   * Represents function `rebalance(address fromPosition, address toPosition,
   * uint256 assetsFrom, SwapRouter.Exchange exchange, bytes calldata params)`
   */
  rebalance?:
    | CellarV1_Rebalance
    | undefined;
  /** Represents function `setStrategistPayoutAddress(address payout)` */
  setStrategistPayoutAddress?:
    | CellarV1_SetStrategistPayoutAddress
    | undefined;
  /** Represents function `setWithdrawType(WithdrawType newWithdrawType)` */
  setWithdrawType?:
    | CellarV1_SetWithdrawType
    | undefined;
  /** Represents function `swapPositions(uint256 index1, uint256 index2)` */
  swapPositions?:
    | CellarV1_SwapPositions
    | undefined;
  /** Represents function `setDepositLimit()` */
  setDepositLimit?:
    | CellarV1_SetDepositLimit
    | undefined;
  /** Represents function `setLiquidityLimit()` */
  setLiquidityLimit?:
    | CellarV1_SetLiquidityLimit
    | undefined;
  /** Represents function `setShareLockPeriod()` */
  setShareLockPeriod?:
    | CellarV1_SetShareLockPeriod
    | undefined;
  /** Represents function `setRebalanceDeviation(uint256)` */
  setRebalanceDeviation?: CellarV1_SetRebalanceDeviation | undefined;
}

/** Represents the withdraw type to use for the cellar */
export enum CellarV1_WithdrawType {
  WITHDRAW_TYPE_UNSPECIFIED = 0,
  WITHDRAW_TYPE_ORDERLY = 1,
  WITHDRAW_TYPE_PROPORTIONAL = 2,
  UNRECOGNIZED = -1,
}

export function cellarV1_WithdrawTypeFromJSON(object: any): CellarV1_WithdrawType {
  switch (object) {
    case 0:
    case "WITHDRAW_TYPE_UNSPECIFIED":
      return CellarV1_WithdrawType.WITHDRAW_TYPE_UNSPECIFIED;
    case 1:
    case "WITHDRAW_TYPE_ORDERLY":
      return CellarV1_WithdrawType.WITHDRAW_TYPE_ORDERLY;
    case 2:
    case "WITHDRAW_TYPE_PROPORTIONAL":
      return CellarV1_WithdrawType.WITHDRAW_TYPE_PROPORTIONAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CellarV1_WithdrawType.UNRECOGNIZED;
  }
}

export function cellarV1_WithdrawTypeToJSON(object: CellarV1_WithdrawType): string {
  switch (object) {
    case CellarV1_WithdrawType.WITHDRAW_TYPE_UNSPECIFIED:
      return "WITHDRAW_TYPE_UNSPECIFIED";
    case CellarV1_WithdrawType.WITHDRAW_TYPE_ORDERLY:
      return "WITHDRAW_TYPE_ORDERLY";
    case CellarV1_WithdrawType.WITHDRAW_TYPE_PROPORTIONAL:
      return "WITHDRAW_TYPE_PROPORTIONAL";
    case CellarV1_WithdrawType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Insert a trusted position to the list of positions used by the cellar at a given index.
 *
 * Represents function `addPosition(uint256 index, address position)`
 */
export interface CellarV1_AddPosition {
  /** Index at which to add the position */
  index: string;
  /** Address of the position to add */
  position: string;
}

/**
 * Push a trusted position to the end of the list of positions used by the cellar. If you
 * know you are going to add a position to the end of the array, this is more efficient then
 * `addPosition`.
 *
 * Represents function `pushPosition(address position)`
 */
export interface CellarV1_PushPosition {
  /** Address of the position to push */
  position: string;
}

/**
 * Remove the position at a given index from the list of positions used by the cellar.
 *
 * Represents function `removePosition(uint256 index)`
 */
export interface CellarV1_RemovePosition {
  /** Index at which to remove the position */
  index: string;
}

/**
 * Set the holding position used by the cellar.
 *
 * Represents function `setHoldingPosition(address newHoldingPosition)`
 */
export interface CellarV1_SetHoldingPosition {
  /** Address of the new holding position to use */
  newHoldingPosition: string;
}

/**
 * Move assets between positions. To move assets from/to this cellar's holdings, specify
 * the address of this cellar as the `fromPosition`/`toPosition`.
 *
 * Represents function `rebalance(address fromPosition, address toPosition,
 *  uint256 assetsFrom, SwapRouter.Exchange exchange, bytes calldata params)
 */
export interface CellarV1_Rebalance {
  fromPosition: string;
  toPosition: string;
  assetsFrom: string;
  exchange: Exchange;
  params: SwapParams | undefined;
}

/**
 * Sets the Strategists payout address.
 *
 * Represents function `setStrategistPayoutAddress(address payout)`
 */
export interface CellarV1_SetStrategistPayoutAddress {
  payout: string;
}

/**
 * Set the withdraw type used by the cellar.
 *
 * Represents function `setWithdrawType(WithdrawType newWithdrawType)`
 */
export interface CellarV1_SetWithdrawType {
  /** The withdraw type to use for the cellar */
  newWithdrawType: CellarV1_WithdrawType;
}

/**
 * Swap the positions at two given indeces.
 *
 * Represents function `swapPositions(uint256 index1, uint256 index2)`
 */
export interface CellarV1_SwapPositions {
  /** Index of the first position */
  index1: string;
  /** Index of the second position */
  index2: string;
}

/**
 * Set the per-wallet deposit limit. Uses the same decimals as the current asset.
 *
 * Represents function `setDepositLimit()`
 */
export interface CellarV1_SetDepositLimit {
  newLimit: string;
}

/**
 * Set the maximum liquidity that cellar can manage. Uses the same decimals as the current asset.
 *
 * Represents function `setLiquidityLimit()`
 */
export interface CellarV1_SetLiquidityLimit {
  newLimit: string;
}

/**
 * Allows share lock period to be updated.
 *
 * Represents function `setShareLockPeriod()`
 */
export interface CellarV1_SetShareLockPeriod {
  newLock: string;
}

/** Represents function `setRebalanceDeviation(uint256)` */
export interface CellarV1_SetRebalanceDeviation {
  newDeviation: string;
}

/** Represent a function call initiated through a governance proposal */
export interface CellarV1Governance {
  /** Represents function `initiateShutdown()` */
  initiateShutdown?:
    | CellarV1Governance_InitiateShutdown
    | undefined;
  /** Represents function `liftShutdown()` */
  liftShutdown?:
    | CellarV1Governance_LiftShutdown
    | undefined;
  /** Represents function `resetHighWatermark()` */
  resetHighWatermark?:
    | CellarV1Governance_ResetHighWatermark
    | undefined;
  /** Represents function `setFeesDistributor(address)` */
  setFeesDistributor?:
    | CellarV1Governance_SetFeesDistributor
    | undefined;
  /** Represents function `setPerformanceFee(uint256)` */
  setPerformanceFee?:
    | CellarV1Governance_SetPerformanceFee
    | undefined;
  /** Represents function `setPlatformFee(uint256)` */
  setPlatformFee?:
    | CellarV1Governance_SetPlatformFee
    | undefined;
  /** Represents function `setStrategistPerformanceCut(uint256)` */
  setStrategistPerformanceCut?:
    | CellarV1Governance_SetStrategistPerformanceCut
    | undefined;
  /** Represents function `setStrategistPlatformCut(address)` */
  setStrategistPlatformCut?:
    | CellarV1Governance_SetStrategistPlatformCut
    | undefined;
  /** Represents function `trustPosition(address)` */
  trustPosition?: CellarV1Governance_TrustPosition | undefined;
}

/** Represents function `initiateShutdown()` */
export interface CellarV1Governance_InitiateShutdown {
}

/** Represents function `liftShutdown()` */
export interface CellarV1Governance_LiftShutdown {
}

/** Represents function `resetHighWatermark()` */
export interface CellarV1Governance_ResetHighWatermark {
}

/** Represents function `setFeesDistributor(bytes32)` */
export interface CellarV1Governance_SetFeesDistributor {
  /** Cosmos address of the new fees distributor */
  newFeesDistributor: string;
}

/** Represents function `setPerformanceFee(uint64)` */
export interface CellarV1Governance_SetPerformanceFee {
  /** New performance fee */
  amount: number;
}

/** Represents function `setPlatformFee(uint64)` */
export interface CellarV1Governance_SetPlatformFee {
  /** New platform fee */
  amount: number;
}

/** Represents function `setStrategistPerformanceCut(uint64)` */
export interface CellarV1Governance_SetStrategistPerformanceCut {
  /** New strategist performance cut */
  amount: number;
}

/** Represents function `setStrategistPlatformCut(uint64)` */
export interface CellarV1Governance_SetStrategistPlatformCut {
  /** New strategist platform cut */
  amount: number;
}

/** Represents function `trustPosition(address)` */
export interface CellarV1Governance_TrustPosition {
  erc20Address?: string | undefined;
  erc4626Address?: string | undefined;
  cellarAddress?: string | undefined;
}

function createBaseCellarV1(): CellarV1 {
  return {
    addPosition: undefined,
    pushPosition: undefined,
    removePosition: undefined,
    setHoldingPosition: undefined,
    rebalance: undefined,
    setStrategistPayoutAddress: undefined,
    setWithdrawType: undefined,
    swapPositions: undefined,
    setDepositLimit: undefined,
    setLiquidityLimit: undefined,
    setShareLockPeriod: undefined,
    setRebalanceDeviation: undefined,
  };
}

export const CellarV1 = {
  encode(message: CellarV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addPosition !== undefined) {
      CellarV1_AddPosition.encode(message.addPosition, writer.uint32(10).fork()).ldelim();
    }
    if (message.pushPosition !== undefined) {
      CellarV1_PushPosition.encode(message.pushPosition, writer.uint32(18).fork()).ldelim();
    }
    if (message.removePosition !== undefined) {
      CellarV1_RemovePosition.encode(message.removePosition, writer.uint32(26).fork()).ldelim();
    }
    if (message.setHoldingPosition !== undefined) {
      CellarV1_SetHoldingPosition.encode(message.setHoldingPosition, writer.uint32(34).fork()).ldelim();
    }
    if (message.rebalance !== undefined) {
      CellarV1_Rebalance.encode(message.rebalance, writer.uint32(42).fork()).ldelim();
    }
    if (message.setStrategistPayoutAddress !== undefined) {
      CellarV1_SetStrategistPayoutAddress.encode(message.setStrategistPayoutAddress, writer.uint32(50).fork()).ldelim();
    }
    if (message.setWithdrawType !== undefined) {
      CellarV1_SetWithdrawType.encode(message.setWithdrawType, writer.uint32(58).fork()).ldelim();
    }
    if (message.swapPositions !== undefined) {
      CellarV1_SwapPositions.encode(message.swapPositions, writer.uint32(66).fork()).ldelim();
    }
    if (message.setDepositLimit !== undefined) {
      CellarV1_SetDepositLimit.encode(message.setDepositLimit, writer.uint32(74).fork()).ldelim();
    }
    if (message.setLiquidityLimit !== undefined) {
      CellarV1_SetLiquidityLimit.encode(message.setLiquidityLimit, writer.uint32(82).fork()).ldelim();
    }
    if (message.setShareLockPeriod !== undefined) {
      CellarV1_SetShareLockPeriod.encode(message.setShareLockPeriod, writer.uint32(90).fork()).ldelim();
    }
    if (message.setRebalanceDeviation !== undefined) {
      CellarV1_SetRebalanceDeviation.encode(message.setRebalanceDeviation, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addPosition = CellarV1_AddPosition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pushPosition = CellarV1_PushPosition.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.removePosition = CellarV1_RemovePosition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setHoldingPosition = CellarV1_SetHoldingPosition.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rebalance = CellarV1_Rebalance.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setStrategistPayoutAddress = CellarV1_SetStrategistPayoutAddress.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.setWithdrawType = CellarV1_SetWithdrawType.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.swapPositions = CellarV1_SwapPositions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.setDepositLimit = CellarV1_SetDepositLimit.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.setLiquidityLimit = CellarV1_SetLiquidityLimit.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.setShareLockPeriod = CellarV1_SetShareLockPeriod.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.setRebalanceDeviation = CellarV1_SetRebalanceDeviation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1 {
    return {
      addPosition: isSet(object.addPosition) ? CellarV1_AddPosition.fromJSON(object.addPosition) : undefined,
      pushPosition: isSet(object.pushPosition) ? CellarV1_PushPosition.fromJSON(object.pushPosition) : undefined,
      removePosition: isSet(object.removePosition)
        ? CellarV1_RemovePosition.fromJSON(object.removePosition)
        : undefined,
      setHoldingPosition: isSet(object.setHoldingPosition)
        ? CellarV1_SetHoldingPosition.fromJSON(object.setHoldingPosition)
        : undefined,
      rebalance: isSet(object.rebalance) ? CellarV1_Rebalance.fromJSON(object.rebalance) : undefined,
      setStrategistPayoutAddress: isSet(object.setStrategistPayoutAddress)
        ? CellarV1_SetStrategistPayoutAddress.fromJSON(object.setStrategistPayoutAddress)
        : undefined,
      setWithdrawType: isSet(object.setWithdrawType)
        ? CellarV1_SetWithdrawType.fromJSON(object.setWithdrawType)
        : undefined,
      swapPositions: isSet(object.swapPositions) ? CellarV1_SwapPositions.fromJSON(object.swapPositions) : undefined,
      setDepositLimit: isSet(object.setDepositLimit)
        ? CellarV1_SetDepositLimit.fromJSON(object.setDepositLimit)
        : undefined,
      setLiquidityLimit: isSet(object.setLiquidityLimit)
        ? CellarV1_SetLiquidityLimit.fromJSON(object.setLiquidityLimit)
        : undefined,
      setShareLockPeriod: isSet(object.setShareLockPeriod)
        ? CellarV1_SetShareLockPeriod.fromJSON(object.setShareLockPeriod)
        : undefined,
      setRebalanceDeviation: isSet(object.setRebalanceDeviation)
        ? CellarV1_SetRebalanceDeviation.fromJSON(object.setRebalanceDeviation)
        : undefined,
    };
  },

  toJSON(message: CellarV1): unknown {
    const obj: any = {};
    if (message.addPosition !== undefined) {
      obj.addPosition = CellarV1_AddPosition.toJSON(message.addPosition);
    }
    if (message.pushPosition !== undefined) {
      obj.pushPosition = CellarV1_PushPosition.toJSON(message.pushPosition);
    }
    if (message.removePosition !== undefined) {
      obj.removePosition = CellarV1_RemovePosition.toJSON(message.removePosition);
    }
    if (message.setHoldingPosition !== undefined) {
      obj.setHoldingPosition = CellarV1_SetHoldingPosition.toJSON(message.setHoldingPosition);
    }
    if (message.rebalance !== undefined) {
      obj.rebalance = CellarV1_Rebalance.toJSON(message.rebalance);
    }
    if (message.setStrategistPayoutAddress !== undefined) {
      obj.setStrategistPayoutAddress = CellarV1_SetStrategistPayoutAddress.toJSON(message.setStrategistPayoutAddress);
    }
    if (message.setWithdrawType !== undefined) {
      obj.setWithdrawType = CellarV1_SetWithdrawType.toJSON(message.setWithdrawType);
    }
    if (message.swapPositions !== undefined) {
      obj.swapPositions = CellarV1_SwapPositions.toJSON(message.swapPositions);
    }
    if (message.setDepositLimit !== undefined) {
      obj.setDepositLimit = CellarV1_SetDepositLimit.toJSON(message.setDepositLimit);
    }
    if (message.setLiquidityLimit !== undefined) {
      obj.setLiquidityLimit = CellarV1_SetLiquidityLimit.toJSON(message.setLiquidityLimit);
    }
    if (message.setShareLockPeriod !== undefined) {
      obj.setShareLockPeriod = CellarV1_SetShareLockPeriod.toJSON(message.setShareLockPeriod);
    }
    if (message.setRebalanceDeviation !== undefined) {
      obj.setRebalanceDeviation = CellarV1_SetRebalanceDeviation.toJSON(message.setRebalanceDeviation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1>, I>>(base?: I): CellarV1 {
    return CellarV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1>, I>>(object: I): CellarV1 {
    const message = createBaseCellarV1();
    message.addPosition = (object.addPosition !== undefined && object.addPosition !== null)
      ? CellarV1_AddPosition.fromPartial(object.addPosition)
      : undefined;
    message.pushPosition = (object.pushPosition !== undefined && object.pushPosition !== null)
      ? CellarV1_PushPosition.fromPartial(object.pushPosition)
      : undefined;
    message.removePosition = (object.removePosition !== undefined && object.removePosition !== null)
      ? CellarV1_RemovePosition.fromPartial(object.removePosition)
      : undefined;
    message.setHoldingPosition = (object.setHoldingPosition !== undefined && object.setHoldingPosition !== null)
      ? CellarV1_SetHoldingPosition.fromPartial(object.setHoldingPosition)
      : undefined;
    message.rebalance = (object.rebalance !== undefined && object.rebalance !== null)
      ? CellarV1_Rebalance.fromPartial(object.rebalance)
      : undefined;
    message.setStrategistPayoutAddress =
      (object.setStrategistPayoutAddress !== undefined && object.setStrategistPayoutAddress !== null)
        ? CellarV1_SetStrategistPayoutAddress.fromPartial(object.setStrategistPayoutAddress)
        : undefined;
    message.setWithdrawType = (object.setWithdrawType !== undefined && object.setWithdrawType !== null)
      ? CellarV1_SetWithdrawType.fromPartial(object.setWithdrawType)
      : undefined;
    message.swapPositions = (object.swapPositions !== undefined && object.swapPositions !== null)
      ? CellarV1_SwapPositions.fromPartial(object.swapPositions)
      : undefined;
    message.setDepositLimit = (object.setDepositLimit !== undefined && object.setDepositLimit !== null)
      ? CellarV1_SetDepositLimit.fromPartial(object.setDepositLimit)
      : undefined;
    message.setLiquidityLimit = (object.setLiquidityLimit !== undefined && object.setLiquidityLimit !== null)
      ? CellarV1_SetLiquidityLimit.fromPartial(object.setLiquidityLimit)
      : undefined;
    message.setShareLockPeriod = (object.setShareLockPeriod !== undefined && object.setShareLockPeriod !== null)
      ? CellarV1_SetShareLockPeriod.fromPartial(object.setShareLockPeriod)
      : undefined;
    message.setRebalanceDeviation =
      (object.setRebalanceDeviation !== undefined && object.setRebalanceDeviation !== null)
        ? CellarV1_SetRebalanceDeviation.fromPartial(object.setRebalanceDeviation)
        : undefined;
    return message;
  },
};

function createBaseCellarV1_AddPosition(): CellarV1_AddPosition {
  return { index: "", position: "" };
}

export const CellarV1_AddPosition = {
  encode(message: CellarV1_AddPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.position !== "") {
      writer.uint32(18).string(message.position);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_AddPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_AddPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.position = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_AddPosition {
    return {
      index: isSet(object.index) ? globalThis.String(object.index) : "",
      position: isSet(object.position) ? globalThis.String(object.position) : "",
    };
  },

  toJSON(message: CellarV1_AddPosition): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.position !== "") {
      obj.position = message.position;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_AddPosition>, I>>(base?: I): CellarV1_AddPosition {
    return CellarV1_AddPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_AddPosition>, I>>(object: I): CellarV1_AddPosition {
    const message = createBaseCellarV1_AddPosition();
    message.index = object.index ?? "";
    message.position = object.position ?? "";
    return message;
  },
};

function createBaseCellarV1_PushPosition(): CellarV1_PushPosition {
  return { position: "" };
}

export const CellarV1_PushPosition = {
  encode(message: CellarV1_PushPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== "") {
      writer.uint32(10).string(message.position);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_PushPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_PushPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.position = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_PushPosition {
    return { position: isSet(object.position) ? globalThis.String(object.position) : "" };
  },

  toJSON(message: CellarV1_PushPosition): unknown {
    const obj: any = {};
    if (message.position !== "") {
      obj.position = message.position;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_PushPosition>, I>>(base?: I): CellarV1_PushPosition {
    return CellarV1_PushPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_PushPosition>, I>>(object: I): CellarV1_PushPosition {
    const message = createBaseCellarV1_PushPosition();
    message.position = object.position ?? "";
    return message;
  },
};

function createBaseCellarV1_RemovePosition(): CellarV1_RemovePosition {
  return { index: "" };
}

export const CellarV1_RemovePosition = {
  encode(message: CellarV1_RemovePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_RemovePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_RemovePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_RemovePosition {
    return { index: isSet(object.index) ? globalThis.String(object.index) : "" };
  },

  toJSON(message: CellarV1_RemovePosition): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_RemovePosition>, I>>(base?: I): CellarV1_RemovePosition {
    return CellarV1_RemovePosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_RemovePosition>, I>>(object: I): CellarV1_RemovePosition {
    const message = createBaseCellarV1_RemovePosition();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseCellarV1_SetHoldingPosition(): CellarV1_SetHoldingPosition {
  return { newHoldingPosition: "" };
}

export const CellarV1_SetHoldingPosition = {
  encode(message: CellarV1_SetHoldingPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newHoldingPosition !== "") {
      writer.uint32(10).string(message.newHoldingPosition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_SetHoldingPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_SetHoldingPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newHoldingPosition = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_SetHoldingPosition {
    return { newHoldingPosition: isSet(object.newHoldingPosition) ? globalThis.String(object.newHoldingPosition) : "" };
  },

  toJSON(message: CellarV1_SetHoldingPosition): unknown {
    const obj: any = {};
    if (message.newHoldingPosition !== "") {
      obj.newHoldingPosition = message.newHoldingPosition;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_SetHoldingPosition>, I>>(base?: I): CellarV1_SetHoldingPosition {
    return CellarV1_SetHoldingPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_SetHoldingPosition>, I>>(object: I): CellarV1_SetHoldingPosition {
    const message = createBaseCellarV1_SetHoldingPosition();
    message.newHoldingPosition = object.newHoldingPosition ?? "";
    return message;
  },
};

function createBaseCellarV1_Rebalance(): CellarV1_Rebalance {
  return { fromPosition: "", toPosition: "", assetsFrom: "", exchange: 0, params: undefined };
}

export const CellarV1_Rebalance = {
  encode(message: CellarV1_Rebalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromPosition !== "") {
      writer.uint32(10).string(message.fromPosition);
    }
    if (message.toPosition !== "") {
      writer.uint32(18).string(message.toPosition);
    }
    if (message.assetsFrom !== "") {
      writer.uint32(26).string(message.assetsFrom);
    }
    if (message.exchange !== 0) {
      writer.uint32(32).int32(message.exchange);
    }
    if (message.params !== undefined) {
      SwapParams.encode(message.params, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_Rebalance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_Rebalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fromPosition = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toPosition = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.assetsFrom = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.exchange = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.params = SwapParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_Rebalance {
    return {
      fromPosition: isSet(object.fromPosition) ? globalThis.String(object.fromPosition) : "",
      toPosition: isSet(object.toPosition) ? globalThis.String(object.toPosition) : "",
      assetsFrom: isSet(object.assetsFrom) ? globalThis.String(object.assetsFrom) : "",
      exchange: isSet(object.exchange) ? exchangeFromJSON(object.exchange) : 0,
      params: isSet(object.params) ? SwapParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: CellarV1_Rebalance): unknown {
    const obj: any = {};
    if (message.fromPosition !== "") {
      obj.fromPosition = message.fromPosition;
    }
    if (message.toPosition !== "") {
      obj.toPosition = message.toPosition;
    }
    if (message.assetsFrom !== "") {
      obj.assetsFrom = message.assetsFrom;
    }
    if (message.exchange !== 0) {
      obj.exchange = exchangeToJSON(message.exchange);
    }
    if (message.params !== undefined) {
      obj.params = SwapParams.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_Rebalance>, I>>(base?: I): CellarV1_Rebalance {
    return CellarV1_Rebalance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_Rebalance>, I>>(object: I): CellarV1_Rebalance {
    const message = createBaseCellarV1_Rebalance();
    message.fromPosition = object.fromPosition ?? "";
    message.toPosition = object.toPosition ?? "";
    message.assetsFrom = object.assetsFrom ?? "";
    message.exchange = object.exchange ?? 0;
    message.params = (object.params !== undefined && object.params !== null)
      ? SwapParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseCellarV1_SetStrategistPayoutAddress(): CellarV1_SetStrategistPayoutAddress {
  return { payout: "" };
}

export const CellarV1_SetStrategistPayoutAddress = {
  encode(message: CellarV1_SetStrategistPayoutAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payout !== "") {
      writer.uint32(10).string(message.payout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_SetStrategistPayoutAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_SetStrategistPayoutAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payout = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_SetStrategistPayoutAddress {
    return { payout: isSet(object.payout) ? globalThis.String(object.payout) : "" };
  },

  toJSON(message: CellarV1_SetStrategistPayoutAddress): unknown {
    const obj: any = {};
    if (message.payout !== "") {
      obj.payout = message.payout;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_SetStrategistPayoutAddress>, I>>(
    base?: I,
  ): CellarV1_SetStrategistPayoutAddress {
    return CellarV1_SetStrategistPayoutAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_SetStrategistPayoutAddress>, I>>(
    object: I,
  ): CellarV1_SetStrategistPayoutAddress {
    const message = createBaseCellarV1_SetStrategistPayoutAddress();
    message.payout = object.payout ?? "";
    return message;
  },
};

function createBaseCellarV1_SetWithdrawType(): CellarV1_SetWithdrawType {
  return { newWithdrawType: 0 };
}

export const CellarV1_SetWithdrawType = {
  encode(message: CellarV1_SetWithdrawType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newWithdrawType !== 0) {
      writer.uint32(8).int32(message.newWithdrawType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_SetWithdrawType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_SetWithdrawType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newWithdrawType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_SetWithdrawType {
    return {
      newWithdrawType: isSet(object.newWithdrawType) ? cellarV1_WithdrawTypeFromJSON(object.newWithdrawType) : 0,
    };
  },

  toJSON(message: CellarV1_SetWithdrawType): unknown {
    const obj: any = {};
    if (message.newWithdrawType !== 0) {
      obj.newWithdrawType = cellarV1_WithdrawTypeToJSON(message.newWithdrawType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_SetWithdrawType>, I>>(base?: I): CellarV1_SetWithdrawType {
    return CellarV1_SetWithdrawType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_SetWithdrawType>, I>>(object: I): CellarV1_SetWithdrawType {
    const message = createBaseCellarV1_SetWithdrawType();
    message.newWithdrawType = object.newWithdrawType ?? 0;
    return message;
  },
};

function createBaseCellarV1_SwapPositions(): CellarV1_SwapPositions {
  return { index1: "", index2: "" };
}

export const CellarV1_SwapPositions = {
  encode(message: CellarV1_SwapPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index1 !== "") {
      writer.uint32(10).string(message.index1);
    }
    if (message.index2 !== "") {
      writer.uint32(18).string(message.index2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_SwapPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_SwapPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index1 = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.index2 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_SwapPositions {
    return {
      index1: isSet(object.index1) ? globalThis.String(object.index1) : "",
      index2: isSet(object.index2) ? globalThis.String(object.index2) : "",
    };
  },

  toJSON(message: CellarV1_SwapPositions): unknown {
    const obj: any = {};
    if (message.index1 !== "") {
      obj.index1 = message.index1;
    }
    if (message.index2 !== "") {
      obj.index2 = message.index2;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_SwapPositions>, I>>(base?: I): CellarV1_SwapPositions {
    return CellarV1_SwapPositions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_SwapPositions>, I>>(object: I): CellarV1_SwapPositions {
    const message = createBaseCellarV1_SwapPositions();
    message.index1 = object.index1 ?? "";
    message.index2 = object.index2 ?? "";
    return message;
  },
};

function createBaseCellarV1_SetDepositLimit(): CellarV1_SetDepositLimit {
  return { newLimit: "" };
}

export const CellarV1_SetDepositLimit = {
  encode(message: CellarV1_SetDepositLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newLimit !== "") {
      writer.uint32(10).string(message.newLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_SetDepositLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_SetDepositLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newLimit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_SetDepositLimit {
    return { newLimit: isSet(object.newLimit) ? globalThis.String(object.newLimit) : "" };
  },

  toJSON(message: CellarV1_SetDepositLimit): unknown {
    const obj: any = {};
    if (message.newLimit !== "") {
      obj.newLimit = message.newLimit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_SetDepositLimit>, I>>(base?: I): CellarV1_SetDepositLimit {
    return CellarV1_SetDepositLimit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_SetDepositLimit>, I>>(object: I): CellarV1_SetDepositLimit {
    const message = createBaseCellarV1_SetDepositLimit();
    message.newLimit = object.newLimit ?? "";
    return message;
  },
};

function createBaseCellarV1_SetLiquidityLimit(): CellarV1_SetLiquidityLimit {
  return { newLimit: "" };
}

export const CellarV1_SetLiquidityLimit = {
  encode(message: CellarV1_SetLiquidityLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newLimit !== "") {
      writer.uint32(10).string(message.newLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_SetLiquidityLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_SetLiquidityLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newLimit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_SetLiquidityLimit {
    return { newLimit: isSet(object.newLimit) ? globalThis.String(object.newLimit) : "" };
  },

  toJSON(message: CellarV1_SetLiquidityLimit): unknown {
    const obj: any = {};
    if (message.newLimit !== "") {
      obj.newLimit = message.newLimit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_SetLiquidityLimit>, I>>(base?: I): CellarV1_SetLiquidityLimit {
    return CellarV1_SetLiquidityLimit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_SetLiquidityLimit>, I>>(object: I): CellarV1_SetLiquidityLimit {
    const message = createBaseCellarV1_SetLiquidityLimit();
    message.newLimit = object.newLimit ?? "";
    return message;
  },
};

function createBaseCellarV1_SetShareLockPeriod(): CellarV1_SetShareLockPeriod {
  return { newLock: "" };
}

export const CellarV1_SetShareLockPeriod = {
  encode(message: CellarV1_SetShareLockPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newLock !== "") {
      writer.uint32(10).string(message.newLock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_SetShareLockPeriod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_SetShareLockPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newLock = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_SetShareLockPeriod {
    return { newLock: isSet(object.newLock) ? globalThis.String(object.newLock) : "" };
  },

  toJSON(message: CellarV1_SetShareLockPeriod): unknown {
    const obj: any = {};
    if (message.newLock !== "") {
      obj.newLock = message.newLock;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_SetShareLockPeriod>, I>>(base?: I): CellarV1_SetShareLockPeriod {
    return CellarV1_SetShareLockPeriod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_SetShareLockPeriod>, I>>(object: I): CellarV1_SetShareLockPeriod {
    const message = createBaseCellarV1_SetShareLockPeriod();
    message.newLock = object.newLock ?? "";
    return message;
  },
};

function createBaseCellarV1_SetRebalanceDeviation(): CellarV1_SetRebalanceDeviation {
  return { newDeviation: "" };
}

export const CellarV1_SetRebalanceDeviation = {
  encode(message: CellarV1_SetRebalanceDeviation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newDeviation !== "") {
      writer.uint32(10).string(message.newDeviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1_SetRebalanceDeviation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1_SetRebalanceDeviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newDeviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1_SetRebalanceDeviation {
    return { newDeviation: isSet(object.newDeviation) ? globalThis.String(object.newDeviation) : "" };
  },

  toJSON(message: CellarV1_SetRebalanceDeviation): unknown {
    const obj: any = {};
    if (message.newDeviation !== "") {
      obj.newDeviation = message.newDeviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1_SetRebalanceDeviation>, I>>(base?: I): CellarV1_SetRebalanceDeviation {
    return CellarV1_SetRebalanceDeviation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1_SetRebalanceDeviation>, I>>(
    object: I,
  ): CellarV1_SetRebalanceDeviation {
    const message = createBaseCellarV1_SetRebalanceDeviation();
    message.newDeviation = object.newDeviation ?? "";
    return message;
  },
};

function createBaseCellarV1Governance(): CellarV1Governance {
  return {
    initiateShutdown: undefined,
    liftShutdown: undefined,
    resetHighWatermark: undefined,
    setFeesDistributor: undefined,
    setPerformanceFee: undefined,
    setPlatformFee: undefined,
    setStrategistPerformanceCut: undefined,
    setStrategistPlatformCut: undefined,
    trustPosition: undefined,
  };
}

export const CellarV1Governance = {
  encode(message: CellarV1Governance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiateShutdown !== undefined) {
      CellarV1Governance_InitiateShutdown.encode(message.initiateShutdown, writer.uint32(10).fork()).ldelim();
    }
    if (message.liftShutdown !== undefined) {
      CellarV1Governance_LiftShutdown.encode(message.liftShutdown, writer.uint32(18).fork()).ldelim();
    }
    if (message.resetHighWatermark !== undefined) {
      CellarV1Governance_ResetHighWatermark.encode(message.resetHighWatermark, writer.uint32(26).fork()).ldelim();
    }
    if (message.setFeesDistributor !== undefined) {
      CellarV1Governance_SetFeesDistributor.encode(message.setFeesDistributor, writer.uint32(34).fork()).ldelim();
    }
    if (message.setPerformanceFee !== undefined) {
      CellarV1Governance_SetPerformanceFee.encode(message.setPerformanceFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.setPlatformFee !== undefined) {
      CellarV1Governance_SetPlatformFee.encode(message.setPlatformFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.setStrategistPerformanceCut !== undefined) {
      CellarV1Governance_SetStrategistPerformanceCut.encode(
        message.setStrategistPerformanceCut,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.setStrategistPlatformCut !== undefined) {
      CellarV1Governance_SetStrategistPlatformCut.encode(message.setStrategistPlatformCut, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.trustPosition !== undefined) {
      CellarV1Governance_TrustPosition.encode(message.trustPosition, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initiateShutdown = CellarV1Governance_InitiateShutdown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liftShutdown = CellarV1Governance_LiftShutdown.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resetHighWatermark = CellarV1Governance_ResetHighWatermark.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setFeesDistributor = CellarV1Governance_SetFeesDistributor.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.setPerformanceFee = CellarV1Governance_SetPerformanceFee.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setPlatformFee = CellarV1Governance_SetPlatformFee.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.setStrategistPerformanceCut = CellarV1Governance_SetStrategistPerformanceCut.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.setStrategistPlatformCut = CellarV1Governance_SetStrategistPlatformCut.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.trustPosition = CellarV1Governance_TrustPosition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1Governance {
    return {
      initiateShutdown: isSet(object.initiateShutdown)
        ? CellarV1Governance_InitiateShutdown.fromJSON(object.initiateShutdown)
        : undefined,
      liftShutdown: isSet(object.liftShutdown)
        ? CellarV1Governance_LiftShutdown.fromJSON(object.liftShutdown)
        : undefined,
      resetHighWatermark: isSet(object.resetHighWatermark)
        ? CellarV1Governance_ResetHighWatermark.fromJSON(object.resetHighWatermark)
        : undefined,
      setFeesDistributor: isSet(object.setFeesDistributor)
        ? CellarV1Governance_SetFeesDistributor.fromJSON(object.setFeesDistributor)
        : undefined,
      setPerformanceFee: isSet(object.setPerformanceFee)
        ? CellarV1Governance_SetPerformanceFee.fromJSON(object.setPerformanceFee)
        : undefined,
      setPlatformFee: isSet(object.setPlatformFee)
        ? CellarV1Governance_SetPlatformFee.fromJSON(object.setPlatformFee)
        : undefined,
      setStrategistPerformanceCut: isSet(object.setStrategistPerformanceCut)
        ? CellarV1Governance_SetStrategistPerformanceCut.fromJSON(object.setStrategistPerformanceCut)
        : undefined,
      setStrategistPlatformCut: isSet(object.setStrategistPlatformCut)
        ? CellarV1Governance_SetStrategistPlatformCut.fromJSON(object.setStrategistPlatformCut)
        : undefined,
      trustPosition: isSet(object.trustPosition)
        ? CellarV1Governance_TrustPosition.fromJSON(object.trustPosition)
        : undefined,
    };
  },

  toJSON(message: CellarV1Governance): unknown {
    const obj: any = {};
    if (message.initiateShutdown !== undefined) {
      obj.initiateShutdown = CellarV1Governance_InitiateShutdown.toJSON(message.initiateShutdown);
    }
    if (message.liftShutdown !== undefined) {
      obj.liftShutdown = CellarV1Governance_LiftShutdown.toJSON(message.liftShutdown);
    }
    if (message.resetHighWatermark !== undefined) {
      obj.resetHighWatermark = CellarV1Governance_ResetHighWatermark.toJSON(message.resetHighWatermark);
    }
    if (message.setFeesDistributor !== undefined) {
      obj.setFeesDistributor = CellarV1Governance_SetFeesDistributor.toJSON(message.setFeesDistributor);
    }
    if (message.setPerformanceFee !== undefined) {
      obj.setPerformanceFee = CellarV1Governance_SetPerformanceFee.toJSON(message.setPerformanceFee);
    }
    if (message.setPlatformFee !== undefined) {
      obj.setPlatformFee = CellarV1Governance_SetPlatformFee.toJSON(message.setPlatformFee);
    }
    if (message.setStrategistPerformanceCut !== undefined) {
      obj.setStrategistPerformanceCut = CellarV1Governance_SetStrategistPerformanceCut.toJSON(
        message.setStrategistPerformanceCut,
      );
    }
    if (message.setStrategistPlatformCut !== undefined) {
      obj.setStrategistPlatformCut = CellarV1Governance_SetStrategistPlatformCut.toJSON(
        message.setStrategistPlatformCut,
      );
    }
    if (message.trustPosition !== undefined) {
      obj.trustPosition = CellarV1Governance_TrustPosition.toJSON(message.trustPosition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance>, I>>(base?: I): CellarV1Governance {
    return CellarV1Governance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance>, I>>(object: I): CellarV1Governance {
    const message = createBaseCellarV1Governance();
    message.initiateShutdown = (object.initiateShutdown !== undefined && object.initiateShutdown !== null)
      ? CellarV1Governance_InitiateShutdown.fromPartial(object.initiateShutdown)
      : undefined;
    message.liftShutdown = (object.liftShutdown !== undefined && object.liftShutdown !== null)
      ? CellarV1Governance_LiftShutdown.fromPartial(object.liftShutdown)
      : undefined;
    message.resetHighWatermark = (object.resetHighWatermark !== undefined && object.resetHighWatermark !== null)
      ? CellarV1Governance_ResetHighWatermark.fromPartial(object.resetHighWatermark)
      : undefined;
    message.setFeesDistributor = (object.setFeesDistributor !== undefined && object.setFeesDistributor !== null)
      ? CellarV1Governance_SetFeesDistributor.fromPartial(object.setFeesDistributor)
      : undefined;
    message.setPerformanceFee = (object.setPerformanceFee !== undefined && object.setPerformanceFee !== null)
      ? CellarV1Governance_SetPerformanceFee.fromPartial(object.setPerformanceFee)
      : undefined;
    message.setPlatformFee = (object.setPlatformFee !== undefined && object.setPlatformFee !== null)
      ? CellarV1Governance_SetPlatformFee.fromPartial(object.setPlatformFee)
      : undefined;
    message.setStrategistPerformanceCut =
      (object.setStrategistPerformanceCut !== undefined && object.setStrategistPerformanceCut !== null)
        ? CellarV1Governance_SetStrategistPerformanceCut.fromPartial(object.setStrategistPerformanceCut)
        : undefined;
    message.setStrategistPlatformCut =
      (object.setStrategistPlatformCut !== undefined && object.setStrategistPlatformCut !== null)
        ? CellarV1Governance_SetStrategistPlatformCut.fromPartial(object.setStrategistPlatformCut)
        : undefined;
    message.trustPosition = (object.trustPosition !== undefined && object.trustPosition !== null)
      ? CellarV1Governance_TrustPosition.fromPartial(object.trustPosition)
      : undefined;
    return message;
  },
};

function createBaseCellarV1Governance_InitiateShutdown(): CellarV1Governance_InitiateShutdown {
  return {};
}

export const CellarV1Governance_InitiateShutdown = {
  encode(_: CellarV1Governance_InitiateShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance_InitiateShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance_InitiateShutdown();
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

  fromJSON(_: any): CellarV1Governance_InitiateShutdown {
    return {};
  },

  toJSON(_: CellarV1Governance_InitiateShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance_InitiateShutdown>, I>>(
    base?: I,
  ): CellarV1Governance_InitiateShutdown {
    return CellarV1Governance_InitiateShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance_InitiateShutdown>, I>>(
    _: I,
  ): CellarV1Governance_InitiateShutdown {
    const message = createBaseCellarV1Governance_InitiateShutdown();
    return message;
  },
};

function createBaseCellarV1Governance_LiftShutdown(): CellarV1Governance_LiftShutdown {
  return {};
}

export const CellarV1Governance_LiftShutdown = {
  encode(_: CellarV1Governance_LiftShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance_LiftShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance_LiftShutdown();
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

  fromJSON(_: any): CellarV1Governance_LiftShutdown {
    return {};
  },

  toJSON(_: CellarV1Governance_LiftShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance_LiftShutdown>, I>>(base?: I): CellarV1Governance_LiftShutdown {
    return CellarV1Governance_LiftShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance_LiftShutdown>, I>>(_: I): CellarV1Governance_LiftShutdown {
    const message = createBaseCellarV1Governance_LiftShutdown();
    return message;
  },
};

function createBaseCellarV1Governance_ResetHighWatermark(): CellarV1Governance_ResetHighWatermark {
  return {};
}

export const CellarV1Governance_ResetHighWatermark = {
  encode(_: CellarV1Governance_ResetHighWatermark, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance_ResetHighWatermark {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance_ResetHighWatermark();
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

  fromJSON(_: any): CellarV1Governance_ResetHighWatermark {
    return {};
  },

  toJSON(_: CellarV1Governance_ResetHighWatermark): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance_ResetHighWatermark>, I>>(
    base?: I,
  ): CellarV1Governance_ResetHighWatermark {
    return CellarV1Governance_ResetHighWatermark.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance_ResetHighWatermark>, I>>(
    _: I,
  ): CellarV1Governance_ResetHighWatermark {
    const message = createBaseCellarV1Governance_ResetHighWatermark();
    return message;
  },
};

function createBaseCellarV1Governance_SetFeesDistributor(): CellarV1Governance_SetFeesDistributor {
  return { newFeesDistributor: "" };
}

export const CellarV1Governance_SetFeesDistributor = {
  encode(message: CellarV1Governance_SetFeesDistributor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newFeesDistributor !== "") {
      writer.uint32(10).string(message.newFeesDistributor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance_SetFeesDistributor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance_SetFeesDistributor();
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

  fromJSON(object: any): CellarV1Governance_SetFeesDistributor {
    return { newFeesDistributor: isSet(object.newFeesDistributor) ? globalThis.String(object.newFeesDistributor) : "" };
  },

  toJSON(message: CellarV1Governance_SetFeesDistributor): unknown {
    const obj: any = {};
    if (message.newFeesDistributor !== "") {
      obj.newFeesDistributor = message.newFeesDistributor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance_SetFeesDistributor>, I>>(
    base?: I,
  ): CellarV1Governance_SetFeesDistributor {
    return CellarV1Governance_SetFeesDistributor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance_SetFeesDistributor>, I>>(
    object: I,
  ): CellarV1Governance_SetFeesDistributor {
    const message = createBaseCellarV1Governance_SetFeesDistributor();
    message.newFeesDistributor = object.newFeesDistributor ?? "";
    return message;
  },
};

function createBaseCellarV1Governance_SetPerformanceFee(): CellarV1Governance_SetPerformanceFee {
  return { amount: 0 };
}

export const CellarV1Governance_SetPerformanceFee = {
  encode(message: CellarV1Governance_SetPerformanceFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance_SetPerformanceFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance_SetPerformanceFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1Governance_SetPerformanceFee {
    return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0 };
  },

  toJSON(message: CellarV1Governance_SetPerformanceFee): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance_SetPerformanceFee>, I>>(
    base?: I,
  ): CellarV1Governance_SetPerformanceFee {
    return CellarV1Governance_SetPerformanceFee.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance_SetPerformanceFee>, I>>(
    object: I,
  ): CellarV1Governance_SetPerformanceFee {
    const message = createBaseCellarV1Governance_SetPerformanceFee();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCellarV1Governance_SetPlatformFee(): CellarV1Governance_SetPlatformFee {
  return { amount: 0 };
}

export const CellarV1Governance_SetPlatformFee = {
  encode(message: CellarV1Governance_SetPlatformFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance_SetPlatformFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance_SetPlatformFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1Governance_SetPlatformFee {
    return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0 };
  },

  toJSON(message: CellarV1Governance_SetPlatformFee): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance_SetPlatformFee>, I>>(
    base?: I,
  ): CellarV1Governance_SetPlatformFee {
    return CellarV1Governance_SetPlatformFee.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance_SetPlatformFee>, I>>(
    object: I,
  ): CellarV1Governance_SetPlatformFee {
    const message = createBaseCellarV1Governance_SetPlatformFee();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCellarV1Governance_SetStrategistPerformanceCut(): CellarV1Governance_SetStrategistPerformanceCut {
  return { amount: 0 };
}

export const CellarV1Governance_SetStrategistPerformanceCut = {
  encode(
    message: CellarV1Governance_SetStrategistPerformanceCut,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance_SetStrategistPerformanceCut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance_SetStrategistPerformanceCut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1Governance_SetStrategistPerformanceCut {
    return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0 };
  },

  toJSON(message: CellarV1Governance_SetStrategistPerformanceCut): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance_SetStrategistPerformanceCut>, I>>(
    base?: I,
  ): CellarV1Governance_SetStrategistPerformanceCut {
    return CellarV1Governance_SetStrategistPerformanceCut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance_SetStrategistPerformanceCut>, I>>(
    object: I,
  ): CellarV1Governance_SetStrategistPerformanceCut {
    const message = createBaseCellarV1Governance_SetStrategistPerformanceCut();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCellarV1Governance_SetStrategistPlatformCut(): CellarV1Governance_SetStrategistPlatformCut {
  return { amount: 0 };
}

export const CellarV1Governance_SetStrategistPlatformCut = {
  encode(message: CellarV1Governance_SetStrategistPlatformCut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance_SetStrategistPlatformCut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance_SetStrategistPlatformCut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1Governance_SetStrategistPlatformCut {
    return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0 };
  },

  toJSON(message: CellarV1Governance_SetStrategistPlatformCut): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance_SetStrategistPlatformCut>, I>>(
    base?: I,
  ): CellarV1Governance_SetStrategistPlatformCut {
    return CellarV1Governance_SetStrategistPlatformCut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance_SetStrategistPlatformCut>, I>>(
    object: I,
  ): CellarV1Governance_SetStrategistPlatformCut {
    const message = createBaseCellarV1Governance_SetStrategistPlatformCut();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCellarV1Governance_TrustPosition(): CellarV1Governance_TrustPosition {
  return { erc20Address: undefined, erc4626Address: undefined, cellarAddress: undefined };
}

export const CellarV1Governance_TrustPosition = {
  encode(message: CellarV1Governance_TrustPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20Address !== undefined) {
      writer.uint32(10).string(message.erc20Address);
    }
    if (message.erc4626Address !== undefined) {
      writer.uint32(18).string(message.erc4626Address);
    }
    if (message.cellarAddress !== undefined) {
      writer.uint32(26).string(message.cellarAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV1Governance_TrustPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV1Governance_TrustPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.erc20Address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.erc4626Address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cellarAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV1Governance_TrustPosition {
    return {
      erc20Address: isSet(object.erc20Address) ? globalThis.String(object.erc20Address) : undefined,
      erc4626Address: isSet(object.erc4626Address) ? globalThis.String(object.erc4626Address) : undefined,
      cellarAddress: isSet(object.cellarAddress) ? globalThis.String(object.cellarAddress) : undefined,
    };
  },

  toJSON(message: CellarV1Governance_TrustPosition): unknown {
    const obj: any = {};
    if (message.erc20Address !== undefined) {
      obj.erc20Address = message.erc20Address;
    }
    if (message.erc4626Address !== undefined) {
      obj.erc4626Address = message.erc4626Address;
    }
    if (message.cellarAddress !== undefined) {
      obj.cellarAddress = message.cellarAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV1Governance_TrustPosition>, I>>(
    base?: I,
  ): CellarV1Governance_TrustPosition {
    return CellarV1Governance_TrustPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV1Governance_TrustPosition>, I>>(
    object: I,
  ): CellarV1Governance_TrustPosition {
    const message = createBaseCellarV1Governance_TrustPosition();
    message.erc20Address = object.erc20Address ?? undefined;
    message.erc4626Address = object.erc4626Address ?? undefined;
    message.cellarAddress = object.cellarAddress ?? undefined;
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
