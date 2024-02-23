/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Uniswap V3 adaptor */
export interface UniswapV3AdaptorV2 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `openPosition(ERC20 token0, ERC20 token1, uint24 poolFee, uint256 amount0, uint256 amount1, uint256 min0, uint256 min1, int24 tickLower, int24 tickUpper)` */
  openPosition?:
    | UniswapV3AdaptorV2_OpenPosition
    | undefined;
  /** Represents function `closePosition(uint256 positionId, uint256 min0, uint256 min1)` */
  closePosition?:
    | UniswapV3AdaptorV2_ClosePosition
    | undefined;
  /** Represents function `addToPosition(uint256 positionId, uint256 amount0, uint256 amount1, uint256 min0, uint256 min1)` */
  addToPosition?:
    | UniswapV3AdaptorV2_AddToPosition
    | undefined;
  /** Represents function `takeFromPosition(uint256 positionId, uint128 liquidity, uint256 min0, uint256 min1, bool collectFees)` */
  takeFromPosition?:
    | UniswapV3AdaptorV2_TakeFromPosition
    | undefined;
  /** Represents function `collectFees(uint256 positionId, uint128 amount0, uint128 amount1)` */
  collectFees?:
    | UniswapV3AdaptorV2_CollectFees
    | undefined;
  /** Represents function `purgeAllZeroLiquidityPositions(ERC20 token0, ERC20 token1)` */
  purgeAllZeroLiquidityPositions?:
    | UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions
    | undefined;
  /** Represents function `purgeSinglePosition(uint256 tokenId)` */
  purgeSinglePosition?:
    | UniswapV3AdaptorV2_PurgeSinglePosition
    | undefined;
  /** Represents function `removeUnOwnedPositionFromTracker(uint256 tokenId, ERC20 token0, ERC20 token1)` */
  removeUnownedPositionFromTracker?: UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker | undefined;
}

/**
 * Allows strategist to open up arbritray Uniswap V3 positions.
 *
 * Represents function openPosition(ERC20 token0, ERC20 token1, uint24 poolFee, uint256 amount0, uint256 amount1, uint256 min0, uint256 min1, int24 tickLower, int24 tickUpper)
 */
export interface UniswapV3AdaptorV2_OpenPosition {
  token0: string;
  token1: string;
  poolFee: number;
  amount0: string;
  amount1: string;
  min0: string;
  min1: string;
  tickLower: number;
  tickUpper: number;
}

/**
 * Allows strategist to close Uniswap V3 positions.
 *
 * Represents function `closePosition(uint256 tokenId, uint256 min0, uint256 min1)`
 */
export interface UniswapV3AdaptorV2_ClosePosition {
  tokenId: string;
  min0: string;
  min1: string;
}

/**
 * Allows strategist to add to existing Uniswap V3 positions.
 *
 * Represents function `addToPosition(uint256 tokenId, uint256 amount0, uint256 amount1, uint256 min0, uint256 min1)`
 */
export interface UniswapV3AdaptorV2_AddToPosition {
  tokenId: string;
  amount0: string;
  amount1: string;
  min0: string;
  min1: string;
}

/**
 * Allows strategist to take from existing Uniswap V3 positions.
 *
 * Represents function `takeFromPosition(uint256 tokenId, uint128 liquidity, uint256 min0, uint256 min1, bool takeFees)`
 */
export interface UniswapV3AdaptorV2_TakeFromPosition {
  tokenId: string;
  liquidity: string;
  min0: string;
  min1: string;
  takeFees: boolean;
}

/**
 * Allows strategist to collect fees from existing Uniswap V3 positions.
 *
 * Represents function `collectFees(uint256 tokenId, uint128 amount0, uint128 amount1)`
 */
export interface UniswapV3AdaptorV2_CollectFees {
  tokenId: string;
  amount0: string;
  amount1: string;
}

/**
 * Allows strategist to purge zero liquidity LP positions from tracker.
 *
 * Represents function `purgeAllZeroLiquidityPositions(ERC20 token0, ERC20 token1)`
 */
export interface UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions {
  token0: string;
  token1: string;
}

/**
 * Allows strategist to purge a single zero liquidity LP position from tracker.
 *
 * Represents function `purgeSinglePosition(uint256 tokenId)`
 */
export interface UniswapV3AdaptorV2_PurgeSinglePosition {
  tokenId: string;
}

/**
 * Allows strategist to remove tracked positions that are not owned by the cellar.
 *
 * Represents function `removeUnOwnedPositionFromTracker(uint256 tokenId, ERC20 token0, ERC20 token1)`
 */
export interface UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker {
  tokenId: string;
  token0: string;
  token1: string;
}

export interface UniswapV3AdaptorV2Calls {
  calls: UniswapV3AdaptorV2[];
}

function createBaseUniswapV3AdaptorV2(): UniswapV3AdaptorV2 {
  return {
    revokeApproval: undefined,
    openPosition: undefined,
    closePosition: undefined,
    addToPosition: undefined,
    takeFromPosition: undefined,
    collectFees: undefined,
    purgeAllZeroLiquidityPositions: undefined,
    purgeSinglePosition: undefined,
    removeUnownedPositionFromTracker: undefined,
  };
}

export const UniswapV3AdaptorV2 = {
  encode(message: UniswapV3AdaptorV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.openPosition !== undefined) {
      UniswapV3AdaptorV2_OpenPosition.encode(message.openPosition, writer.uint32(18).fork()).ldelim();
    }
    if (message.closePosition !== undefined) {
      UniswapV3AdaptorV2_ClosePosition.encode(message.closePosition, writer.uint32(26).fork()).ldelim();
    }
    if (message.addToPosition !== undefined) {
      UniswapV3AdaptorV2_AddToPosition.encode(message.addToPosition, writer.uint32(34).fork()).ldelim();
    }
    if (message.takeFromPosition !== undefined) {
      UniswapV3AdaptorV2_TakeFromPosition.encode(message.takeFromPosition, writer.uint32(42).fork()).ldelim();
    }
    if (message.collectFees !== undefined) {
      UniswapV3AdaptorV2_CollectFees.encode(message.collectFees, writer.uint32(50).fork()).ldelim();
    }
    if (message.purgeAllZeroLiquidityPositions !== undefined) {
      UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions.encode(
        message.purgeAllZeroLiquidityPositions,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.purgeSinglePosition !== undefined) {
      UniswapV3AdaptorV2_PurgeSinglePosition.encode(message.purgeSinglePosition, writer.uint32(66).fork()).ldelim();
    }
    if (message.removeUnownedPositionFromTracker !== undefined) {
      UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker.encode(
        message.removeUnownedPositionFromTracker,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2();
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

          message.openPosition = UniswapV3AdaptorV2_OpenPosition.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.closePosition = UniswapV3AdaptorV2_ClosePosition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.addToPosition = UniswapV3AdaptorV2_AddToPosition.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.takeFromPosition = UniswapV3AdaptorV2_TakeFromPosition.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.collectFees = UniswapV3AdaptorV2_CollectFees.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.purgeAllZeroLiquidityPositions = UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.purgeSinglePosition = UniswapV3AdaptorV2_PurgeSinglePosition.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.removeUnownedPositionFromTracker = UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker.decode(
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

  fromJSON(object: any): UniswapV3AdaptorV2 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      openPosition: isSet(object.openPosition)
        ? UniswapV3AdaptorV2_OpenPosition.fromJSON(object.openPosition)
        : undefined,
      closePosition: isSet(object.closePosition)
        ? UniswapV3AdaptorV2_ClosePosition.fromJSON(object.closePosition)
        : undefined,
      addToPosition: isSet(object.addToPosition)
        ? UniswapV3AdaptorV2_AddToPosition.fromJSON(object.addToPosition)
        : undefined,
      takeFromPosition: isSet(object.takeFromPosition)
        ? UniswapV3AdaptorV2_TakeFromPosition.fromJSON(object.takeFromPosition)
        : undefined,
      collectFees: isSet(object.collectFees) ? UniswapV3AdaptorV2_CollectFees.fromJSON(object.collectFees) : undefined,
      purgeAllZeroLiquidityPositions: isSet(object.purgeAllZeroLiquidityPositions)
        ? UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions.fromJSON(object.purgeAllZeroLiquidityPositions)
        : undefined,
      purgeSinglePosition: isSet(object.purgeSinglePosition)
        ? UniswapV3AdaptorV2_PurgeSinglePosition.fromJSON(object.purgeSinglePosition)
        : undefined,
      removeUnownedPositionFromTracker: isSet(object.removeUnownedPositionFromTracker)
        ? UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker.fromJSON(object.removeUnownedPositionFromTracker)
        : undefined,
    };
  },

  toJSON(message: UniswapV3AdaptorV2): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.openPosition !== undefined) {
      obj.openPosition = UniswapV3AdaptorV2_OpenPosition.toJSON(message.openPosition);
    }
    if (message.closePosition !== undefined) {
      obj.closePosition = UniswapV3AdaptorV2_ClosePosition.toJSON(message.closePosition);
    }
    if (message.addToPosition !== undefined) {
      obj.addToPosition = UniswapV3AdaptorV2_AddToPosition.toJSON(message.addToPosition);
    }
    if (message.takeFromPosition !== undefined) {
      obj.takeFromPosition = UniswapV3AdaptorV2_TakeFromPosition.toJSON(message.takeFromPosition);
    }
    if (message.collectFees !== undefined) {
      obj.collectFees = UniswapV3AdaptorV2_CollectFees.toJSON(message.collectFees);
    }
    if (message.purgeAllZeroLiquidityPositions !== undefined) {
      obj.purgeAllZeroLiquidityPositions = UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions.toJSON(
        message.purgeAllZeroLiquidityPositions,
      );
    }
    if (message.purgeSinglePosition !== undefined) {
      obj.purgeSinglePosition = UniswapV3AdaptorV2_PurgeSinglePosition.toJSON(message.purgeSinglePosition);
    }
    if (message.removeUnownedPositionFromTracker !== undefined) {
      obj.removeUnownedPositionFromTracker = UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker.toJSON(
        message.removeUnownedPositionFromTracker,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2>, I>>(base?: I): UniswapV3AdaptorV2 {
    return UniswapV3AdaptorV2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2>, I>>(object: I): UniswapV3AdaptorV2 {
    const message = createBaseUniswapV3AdaptorV2();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.openPosition = (object.openPosition !== undefined && object.openPosition !== null)
      ? UniswapV3AdaptorV2_OpenPosition.fromPartial(object.openPosition)
      : undefined;
    message.closePosition = (object.closePosition !== undefined && object.closePosition !== null)
      ? UniswapV3AdaptorV2_ClosePosition.fromPartial(object.closePosition)
      : undefined;
    message.addToPosition = (object.addToPosition !== undefined && object.addToPosition !== null)
      ? UniswapV3AdaptorV2_AddToPosition.fromPartial(object.addToPosition)
      : undefined;
    message.takeFromPosition = (object.takeFromPosition !== undefined && object.takeFromPosition !== null)
      ? UniswapV3AdaptorV2_TakeFromPosition.fromPartial(object.takeFromPosition)
      : undefined;
    message.collectFees = (object.collectFees !== undefined && object.collectFees !== null)
      ? UniswapV3AdaptorV2_CollectFees.fromPartial(object.collectFees)
      : undefined;
    message.purgeAllZeroLiquidityPositions =
      (object.purgeAllZeroLiquidityPositions !== undefined && object.purgeAllZeroLiquidityPositions !== null)
        ? UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions.fromPartial(object.purgeAllZeroLiquidityPositions)
        : undefined;
    message.purgeSinglePosition = (object.purgeSinglePosition !== undefined && object.purgeSinglePosition !== null)
      ? UniswapV3AdaptorV2_PurgeSinglePosition.fromPartial(object.purgeSinglePosition)
      : undefined;
    message.removeUnownedPositionFromTracker =
      (object.removeUnownedPositionFromTracker !== undefined && object.removeUnownedPositionFromTracker !== null)
        ? UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker.fromPartial(object.removeUnownedPositionFromTracker)
        : undefined;
    return message;
  },
};

function createBaseUniswapV3AdaptorV2_OpenPosition(): UniswapV3AdaptorV2_OpenPosition {
  return {
    token0: "",
    token1: "",
    poolFee: 0,
    amount0: "",
    amount1: "",
    min0: "",
    min1: "",
    tickLower: 0,
    tickUpper: 0,
  };
}

export const UniswapV3AdaptorV2_OpenPosition = {
  encode(message: UniswapV3AdaptorV2_OpenPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token0 !== "") {
      writer.uint32(10).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(18).string(message.token1);
    }
    if (message.poolFee !== 0) {
      writer.uint32(24).uint32(message.poolFee);
    }
    if (message.amount0 !== "") {
      writer.uint32(34).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(42).string(message.amount1);
    }
    if (message.min0 !== "") {
      writer.uint32(50).string(message.min0);
    }
    if (message.min1 !== "") {
      writer.uint32(58).string(message.min1);
    }
    if (message.tickLower !== 0) {
      writer.uint32(64).int32(message.tickLower);
    }
    if (message.tickUpper !== 0) {
      writer.uint32(72).int32(message.tickUpper);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2_OpenPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2_OpenPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token0 = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token1 = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.poolFee = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount0 = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amount1 = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.min0 = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.min1 = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.tickLower = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.tickUpper = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniswapV3AdaptorV2_OpenPosition {
    return {
      token0: isSet(object.token0) ? globalThis.String(object.token0) : "",
      token1: isSet(object.token1) ? globalThis.String(object.token1) : "",
      poolFee: isSet(object.poolFee) ? globalThis.Number(object.poolFee) : 0,
      amount0: isSet(object.amount0) ? globalThis.String(object.amount0) : "",
      amount1: isSet(object.amount1) ? globalThis.String(object.amount1) : "",
      min0: isSet(object.min0) ? globalThis.String(object.min0) : "",
      min1: isSet(object.min1) ? globalThis.String(object.min1) : "",
      tickLower: isSet(object.tickLower) ? globalThis.Number(object.tickLower) : 0,
      tickUpper: isSet(object.tickUpper) ? globalThis.Number(object.tickUpper) : 0,
    };
  },

  toJSON(message: UniswapV3AdaptorV2_OpenPosition): unknown {
    const obj: any = {};
    if (message.token0 !== "") {
      obj.token0 = message.token0;
    }
    if (message.token1 !== "") {
      obj.token1 = message.token1;
    }
    if (message.poolFee !== 0) {
      obj.poolFee = Math.round(message.poolFee);
    }
    if (message.amount0 !== "") {
      obj.amount0 = message.amount0;
    }
    if (message.amount1 !== "") {
      obj.amount1 = message.amount1;
    }
    if (message.min0 !== "") {
      obj.min0 = message.min0;
    }
    if (message.min1 !== "") {
      obj.min1 = message.min1;
    }
    if (message.tickLower !== 0) {
      obj.tickLower = Math.round(message.tickLower);
    }
    if (message.tickUpper !== 0) {
      obj.tickUpper = Math.round(message.tickUpper);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2_OpenPosition>, I>>(base?: I): UniswapV3AdaptorV2_OpenPosition {
    return UniswapV3AdaptorV2_OpenPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2_OpenPosition>, I>>(
    object: I,
  ): UniswapV3AdaptorV2_OpenPosition {
    const message = createBaseUniswapV3AdaptorV2_OpenPosition();
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    message.poolFee = object.poolFee ?? 0;
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.min0 = object.min0 ?? "";
    message.min1 = object.min1 ?? "";
    message.tickLower = object.tickLower ?? 0;
    message.tickUpper = object.tickUpper ?? 0;
    return message;
  },
};

function createBaseUniswapV3AdaptorV2_ClosePosition(): UniswapV3AdaptorV2_ClosePosition {
  return { tokenId: "", min0: "", min1: "" };
}

export const UniswapV3AdaptorV2_ClosePosition = {
  encode(message: UniswapV3AdaptorV2_ClosePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.min0 !== "") {
      writer.uint32(18).string(message.min0);
    }
    if (message.min1 !== "") {
      writer.uint32(26).string(message.min1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2_ClosePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2_ClosePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.min0 = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.min1 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniswapV3AdaptorV2_ClosePosition {
    return {
      tokenId: isSet(object.tokenId) ? globalThis.String(object.tokenId) : "",
      min0: isSet(object.min0) ? globalThis.String(object.min0) : "",
      min1: isSet(object.min1) ? globalThis.String(object.min1) : "",
    };
  },

  toJSON(message: UniswapV3AdaptorV2_ClosePosition): unknown {
    const obj: any = {};
    if (message.tokenId !== "") {
      obj.tokenId = message.tokenId;
    }
    if (message.min0 !== "") {
      obj.min0 = message.min0;
    }
    if (message.min1 !== "") {
      obj.min1 = message.min1;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2_ClosePosition>, I>>(
    base?: I,
  ): UniswapV3AdaptorV2_ClosePosition {
    return UniswapV3AdaptorV2_ClosePosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2_ClosePosition>, I>>(
    object: I,
  ): UniswapV3AdaptorV2_ClosePosition {
    const message = createBaseUniswapV3AdaptorV2_ClosePosition();
    message.tokenId = object.tokenId ?? "";
    message.min0 = object.min0 ?? "";
    message.min1 = object.min1 ?? "";
    return message;
  },
};

function createBaseUniswapV3AdaptorV2_AddToPosition(): UniswapV3AdaptorV2_AddToPosition {
  return { tokenId: "", amount0: "", amount1: "", min0: "", min1: "" };
}

export const UniswapV3AdaptorV2_AddToPosition = {
  encode(message: UniswapV3AdaptorV2_AddToPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    if (message.min0 !== "") {
      writer.uint32(34).string(message.min0);
    }
    if (message.min1 !== "") {
      writer.uint32(42).string(message.min1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2_AddToPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2_AddToPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount0 = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount1 = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.min0 = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.min1 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniswapV3AdaptorV2_AddToPosition {
    return {
      tokenId: isSet(object.tokenId) ? globalThis.String(object.tokenId) : "",
      amount0: isSet(object.amount0) ? globalThis.String(object.amount0) : "",
      amount1: isSet(object.amount1) ? globalThis.String(object.amount1) : "",
      min0: isSet(object.min0) ? globalThis.String(object.min0) : "",
      min1: isSet(object.min1) ? globalThis.String(object.min1) : "",
    };
  },

  toJSON(message: UniswapV3AdaptorV2_AddToPosition): unknown {
    const obj: any = {};
    if (message.tokenId !== "") {
      obj.tokenId = message.tokenId;
    }
    if (message.amount0 !== "") {
      obj.amount0 = message.amount0;
    }
    if (message.amount1 !== "") {
      obj.amount1 = message.amount1;
    }
    if (message.min0 !== "") {
      obj.min0 = message.min0;
    }
    if (message.min1 !== "") {
      obj.min1 = message.min1;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2_AddToPosition>, I>>(
    base?: I,
  ): UniswapV3AdaptorV2_AddToPosition {
    return UniswapV3AdaptorV2_AddToPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2_AddToPosition>, I>>(
    object: I,
  ): UniswapV3AdaptorV2_AddToPosition {
    const message = createBaseUniswapV3AdaptorV2_AddToPosition();
    message.tokenId = object.tokenId ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.min0 = object.min0 ?? "";
    message.min1 = object.min1 ?? "";
    return message;
  },
};

function createBaseUniswapV3AdaptorV2_TakeFromPosition(): UniswapV3AdaptorV2_TakeFromPosition {
  return { tokenId: "", liquidity: "", min0: "", min1: "", takeFees: false };
}

export const UniswapV3AdaptorV2_TakeFromPosition = {
  encode(message: UniswapV3AdaptorV2_TakeFromPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.liquidity !== "") {
      writer.uint32(18).string(message.liquidity);
    }
    if (message.min0 !== "") {
      writer.uint32(26).string(message.min0);
    }
    if (message.min1 !== "") {
      writer.uint32(34).string(message.min1);
    }
    if (message.takeFees === true) {
      writer.uint32(40).bool(message.takeFees);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2_TakeFromPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2_TakeFromPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidity = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.min0 = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.min1 = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.takeFees = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniswapV3AdaptorV2_TakeFromPosition {
    return {
      tokenId: isSet(object.tokenId) ? globalThis.String(object.tokenId) : "",
      liquidity: isSet(object.liquidity) ? globalThis.String(object.liquidity) : "",
      min0: isSet(object.min0) ? globalThis.String(object.min0) : "",
      min1: isSet(object.min1) ? globalThis.String(object.min1) : "",
      takeFees: isSet(object.takeFees) ? globalThis.Boolean(object.takeFees) : false,
    };
  },

  toJSON(message: UniswapV3AdaptorV2_TakeFromPosition): unknown {
    const obj: any = {};
    if (message.tokenId !== "") {
      obj.tokenId = message.tokenId;
    }
    if (message.liquidity !== "") {
      obj.liquidity = message.liquidity;
    }
    if (message.min0 !== "") {
      obj.min0 = message.min0;
    }
    if (message.min1 !== "") {
      obj.min1 = message.min1;
    }
    if (message.takeFees === true) {
      obj.takeFees = message.takeFees;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2_TakeFromPosition>, I>>(
    base?: I,
  ): UniswapV3AdaptorV2_TakeFromPosition {
    return UniswapV3AdaptorV2_TakeFromPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2_TakeFromPosition>, I>>(
    object: I,
  ): UniswapV3AdaptorV2_TakeFromPosition {
    const message = createBaseUniswapV3AdaptorV2_TakeFromPosition();
    message.tokenId = object.tokenId ?? "";
    message.liquidity = object.liquidity ?? "";
    message.min0 = object.min0 ?? "";
    message.min1 = object.min1 ?? "";
    message.takeFees = object.takeFees ?? false;
    return message;
  },
};

function createBaseUniswapV3AdaptorV2_CollectFees(): UniswapV3AdaptorV2_CollectFees {
  return { tokenId: "", amount0: "", amount1: "" };
}

export const UniswapV3AdaptorV2_CollectFees = {
  encode(message: UniswapV3AdaptorV2_CollectFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2_CollectFees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2_CollectFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount0 = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount1 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniswapV3AdaptorV2_CollectFees {
    return {
      tokenId: isSet(object.tokenId) ? globalThis.String(object.tokenId) : "",
      amount0: isSet(object.amount0) ? globalThis.String(object.amount0) : "",
      amount1: isSet(object.amount1) ? globalThis.String(object.amount1) : "",
    };
  },

  toJSON(message: UniswapV3AdaptorV2_CollectFees): unknown {
    const obj: any = {};
    if (message.tokenId !== "") {
      obj.tokenId = message.tokenId;
    }
    if (message.amount0 !== "") {
      obj.amount0 = message.amount0;
    }
    if (message.amount1 !== "") {
      obj.amount1 = message.amount1;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2_CollectFees>, I>>(base?: I): UniswapV3AdaptorV2_CollectFees {
    return UniswapV3AdaptorV2_CollectFees.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2_CollectFees>, I>>(
    object: I,
  ): UniswapV3AdaptorV2_CollectFees {
    const message = createBaseUniswapV3AdaptorV2_CollectFees();
    message.tokenId = object.tokenId ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  },
};

function createBaseUniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions(): UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions {
  return { token0: "", token1: "" };
}

export const UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions = {
  encode(
    message: UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.token0 !== "") {
      writer.uint32(10).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(18).string(message.token1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token0 = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token1 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions {
    return {
      token0: isSet(object.token0) ? globalThis.String(object.token0) : "",
      token1: isSet(object.token1) ? globalThis.String(object.token1) : "",
    };
  },

  toJSON(message: UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions): unknown {
    const obj: any = {};
    if (message.token0 !== "") {
      obj.token0 = message.token0;
    }
    if (message.token1 !== "") {
      obj.token1 = message.token1;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions>, I>>(
    base?: I,
  ): UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions {
    return UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions>, I>>(
    object: I,
  ): UniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions {
    const message = createBaseUniswapV3AdaptorV2_PurgeAllZeroLiquidityPositions();
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    return message;
  },
};

function createBaseUniswapV3AdaptorV2_PurgeSinglePosition(): UniswapV3AdaptorV2_PurgeSinglePosition {
  return { tokenId: "" };
}

export const UniswapV3AdaptorV2_PurgeSinglePosition = {
  encode(message: UniswapV3AdaptorV2_PurgeSinglePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2_PurgeSinglePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2_PurgeSinglePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniswapV3AdaptorV2_PurgeSinglePosition {
    return { tokenId: isSet(object.tokenId) ? globalThis.String(object.tokenId) : "" };
  },

  toJSON(message: UniswapV3AdaptorV2_PurgeSinglePosition): unknown {
    const obj: any = {};
    if (message.tokenId !== "") {
      obj.tokenId = message.tokenId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2_PurgeSinglePosition>, I>>(
    base?: I,
  ): UniswapV3AdaptorV2_PurgeSinglePosition {
    return UniswapV3AdaptorV2_PurgeSinglePosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2_PurgeSinglePosition>, I>>(
    object: I,
  ): UniswapV3AdaptorV2_PurgeSinglePosition {
    const message = createBaseUniswapV3AdaptorV2_PurgeSinglePosition();
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseUniswapV3AdaptorV2_RemoveUnownedPositionFromTracker(): UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker {
  return { tokenId: "", token0: "", token1: "" };
}

export const UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker = {
  encode(
    message: UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.token0 !== "") {
      writer.uint32(18).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(26).string(message.token1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2_RemoveUnownedPositionFromTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token0 = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.token1 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker {
    return {
      tokenId: isSet(object.tokenId) ? globalThis.String(object.tokenId) : "",
      token0: isSet(object.token0) ? globalThis.String(object.token0) : "",
      token1: isSet(object.token1) ? globalThis.String(object.token1) : "",
    };
  },

  toJSON(message: UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker): unknown {
    const obj: any = {};
    if (message.tokenId !== "") {
      obj.tokenId = message.tokenId;
    }
    if (message.token0 !== "") {
      obj.token0 = message.token0;
    }
    if (message.token1 !== "") {
      obj.token1 = message.token1;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker>, I>>(
    base?: I,
  ): UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker {
    return UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker>, I>>(
    object: I,
  ): UniswapV3AdaptorV2_RemoveUnownedPositionFromTracker {
    const message = createBaseUniswapV3AdaptorV2_RemoveUnownedPositionFromTracker();
    message.tokenId = object.tokenId ?? "";
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    return message;
  },
};

function createBaseUniswapV3AdaptorV2Calls(): UniswapV3AdaptorV2Calls {
  return { calls: [] };
}

export const UniswapV3AdaptorV2Calls = {
  encode(message: UniswapV3AdaptorV2Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      UniswapV3AdaptorV2.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UniswapV3AdaptorV2Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniswapV3AdaptorV2Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(UniswapV3AdaptorV2.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniswapV3AdaptorV2Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => UniswapV3AdaptorV2.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UniswapV3AdaptorV2Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => UniswapV3AdaptorV2.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UniswapV3AdaptorV2Calls>, I>>(base?: I): UniswapV3AdaptorV2Calls {
    return UniswapV3AdaptorV2Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UniswapV3AdaptorV2Calls>, I>>(object: I): UniswapV3AdaptorV2Calls {
    const message = createBaseUniswapV3AdaptorV2Calls();
    message.calls = object.calls?.map((e) => UniswapV3AdaptorV2.fromPartial(e)) || [];
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
