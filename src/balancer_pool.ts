/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Balancer Pool adaptor V1, for managing pool positions on Balancer. */
export interface BalancerPoolAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `relayerJoinPool(ERC20[] tokensIn, uint256[] amountsIn, ERC20 btpOut, bytes[] memory callData)` */
  joinPool?:
    | BalancerPoolAdaptorV1_JoinPool
    | undefined;
  /** Represents function `relayerExitPool(ERC20 bptIn, uint256 amountIn, ERC20[] memory tokensOut, bytes[] memory callData)` */
  exitPool?:
    | BalancerPoolAdaptorV1_ExitPool
    | undefined;
  /** Represents function `stakeBPT(ERC20 _bpt, address _liquidityGauge, uint256 _amountIn)` */
  stakeBpt?:
    | BalancerPoolAdaptorV1_StakeBPT
    | undefined;
  /** Represents function `unstakeBPT(ERC20 _bpt, address _liquidityGauge, uint256 _amountOut)` */
  unstakeBpt?:
    | BalancerPoolAdaptorV1_UnstakeBPT
    | undefined;
  /** Represents function `claimRewards(address gauge)` */
  claimRewards?: BalancerPoolAdaptorV1_ClaimRewards | undefined;
}

/**
 * Represents the SwapKind enum defined here:
 * https://github.com/PeggyJV/cellar-contracts/blob/main/src/interfaces/external/Balancer/IVault.sol
 */
export enum BalancerPoolAdaptorV1_SwapKind {
  SWAP_KIND_UNSPECIFIED = 0,
  SWAP_KIND_GIVEN_IN = 1,
  SWAP_KIND_GIVEN_OUT = 2,
  UNRECOGNIZED = -1,
}

export function balancerPoolAdaptorV1_SwapKindFromJSON(object: any): BalancerPoolAdaptorV1_SwapKind {
  switch (object) {
    case 0:
    case "SWAP_KIND_UNSPECIFIED":
      return BalancerPoolAdaptorV1_SwapKind.SWAP_KIND_UNSPECIFIED;
    case 1:
    case "SWAP_KIND_GIVEN_IN":
      return BalancerPoolAdaptorV1_SwapKind.SWAP_KIND_GIVEN_IN;
    case 2:
    case "SWAP_KIND_GIVEN_OUT":
      return BalancerPoolAdaptorV1_SwapKind.SWAP_KIND_GIVEN_OUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BalancerPoolAdaptorV1_SwapKind.UNRECOGNIZED;
  }
}

export function balancerPoolAdaptorV1_SwapKindToJSON(object: BalancerPoolAdaptorV1_SwapKind): string {
  switch (object) {
    case BalancerPoolAdaptorV1_SwapKind.SWAP_KIND_UNSPECIFIED:
      return "SWAP_KIND_UNSPECIFIED";
    case BalancerPoolAdaptorV1_SwapKind.SWAP_KIND_GIVEN_IN:
      return "SWAP_KIND_GIVEN_IN";
    case BalancerPoolAdaptorV1_SwapKind.SWAP_KIND_GIVEN_OUT:
      return "SWAP_KIND_GIVEN_OUT";
    case BalancerPoolAdaptorV1_SwapKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Data for a single swap executed by `swap`. `amount` is either `amountIn` or `amountOut` depending on the `kind` value.
 * Represents the SingleSwap struct defined here:
 * https://github.com/PeggyJV/cellar-contracts/blob/main/src/interfaces/external/Balancer/IVault.sol
 */
export interface BalancerPoolAdaptorV1_SingleSwap {
  /** The pool ID (bytes32) */
  poolId: string;
  /** The swap kind (enum) */
  kind: BalancerPoolAdaptorV1_SwapKind;
  /** The asset in (address) */
  assetIn: string;
  /** The asset out (address) */
  assetOut: string;
  /** The amount (uint256) */
  amount: string;
  /** The user data (bytes) */
  userData: Uint8Array;
}

/** Stores each swaps min amount, and deadline */
export interface BalancerPoolAdaptorV1_SwapData {
  /** The minimum amounts for swaps */
  minAmountsForSwaps: string[];
  /** The swap deadlines */
  swapDeadlines: string[];
}

/**
 * Allows strategists to join Balancer pools using EXACT_TOKENS_IN_FOR_BPT_OUT joins
 *
 * Represents function `joinPool(ERC20 targetBpt, IVault.SingleSwap[] memory swapsBeforeJoin, SwapData memory swapData, uint256 minimumBpt)`
 */
export interface BalancerPoolAdaptorV1_JoinPool {
  /** The target pool */
  targetBpt: string;
  /** Swap to execute before joining pool */
  swapsBeforeJoin: BalancerPoolAdaptorV1_SingleSwap[];
  /** Data for swaps */
  swapData:
    | BalancerPoolAdaptorV1_SwapData
    | undefined;
  /** The minimum BPT to mint */
  minimumBpt: string;
}

export interface BalancerPoolAdaptorV1_ExitPoolRequest {
  assets: string[];
  minAmountsOut: string[];
  userData: Uint8Array;
  toInternalBalance: boolean;
}

/**
 * Call `BalancerRelayer` on mainnet to carry out exit txs
 *
 * Represents function `exitPool(ERC20 targetBpt, IVault.SingleSwap[] memory swapsBeforeJoin, SwapData memory swapData, IVault.ExitPoolRequest request)`
 */
export interface BalancerPoolAdaptorV1_ExitPool {
  /** The target pool */
  targetBpt: string;
  /** Swaps to execute after exiting pool */
  swapsAfterExit: BalancerPoolAdaptorV1_SingleSwap[];
  /** Data for swaps */
  swapData: BalancerPoolAdaptorV1_SwapData | undefined;
  request: BalancerPoolAdaptorV1_ExitPoolRequest | undefined;
}

/**
 * Stake (deposit) BPTs into respective pool gauge
 *
 * Represents `function stakeBPT(ERC20 _bpt, address _liquidityGauge, uint256 _amountIn)``
 */
export interface BalancerPoolAdaptorV1_StakeBPT {
  /** The BPT to stake */
  bpt: string;
  /** The liquidity gauge to stake into */
  liquidityGauge: string;
  /** The amount to stake */
  amountIn: string;
}

/**
 * Unstake (withdraw) BPT from respective pool gauge
 *
 * Represents `function unstakeBPT(ERC20 _bpt, address _liquidityGauge, uint256 _amountOut)``
 */
export interface BalancerPoolAdaptorV1_UnstakeBPT {
  /** The BPT to unstake */
  bpt: string;
  /** The liquidity gauge to unstake from */
  liquidityGauge: string;
  /** The amount to unstake */
  amountOut: string;
}

/**
 * Claim rewards ($BAL) from LP position
 *
 * Represents `function claimRewards(address gauge)`
 */
export interface BalancerPoolAdaptorV1_ClaimRewards {
  /** The gauge to claim rewards from */
  gauge: string;
}

export interface BalancerPoolAdaptorV1Calls {
  calls: BalancerPoolAdaptorV1[];
}

function createBaseBalancerPoolAdaptorV1(): BalancerPoolAdaptorV1 {
  return {
    revokeApproval: undefined,
    joinPool: undefined,
    exitPool: undefined,
    stakeBpt: undefined,
    unstakeBpt: undefined,
    claimRewards: undefined,
  };
}

export const BalancerPoolAdaptorV1 = {
  encode(message: BalancerPoolAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.joinPool !== undefined) {
      BalancerPoolAdaptorV1_JoinPool.encode(message.joinPool, writer.uint32(18).fork()).ldelim();
    }
    if (message.exitPool !== undefined) {
      BalancerPoolAdaptorV1_ExitPool.encode(message.exitPool, writer.uint32(26).fork()).ldelim();
    }
    if (message.stakeBpt !== undefined) {
      BalancerPoolAdaptorV1_StakeBPT.encode(message.stakeBpt, writer.uint32(34).fork()).ldelim();
    }
    if (message.unstakeBpt !== undefined) {
      BalancerPoolAdaptorV1_UnstakeBPT.encode(message.unstakeBpt, writer.uint32(42).fork()).ldelim();
    }
    if (message.claimRewards !== undefined) {
      BalancerPoolAdaptorV1_ClaimRewards.encode(message.claimRewards, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1();
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

          message.joinPool = BalancerPoolAdaptorV1_JoinPool.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.exitPool = BalancerPoolAdaptorV1_ExitPool.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stakeBpt = BalancerPoolAdaptorV1_StakeBPT.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.unstakeBpt = BalancerPoolAdaptorV1_UnstakeBPT.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.claimRewards = BalancerPoolAdaptorV1_ClaimRewards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancerPoolAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      joinPool: isSet(object.joinPool) ? BalancerPoolAdaptorV1_JoinPool.fromJSON(object.joinPool) : undefined,
      exitPool: isSet(object.exitPool) ? BalancerPoolAdaptorV1_ExitPool.fromJSON(object.exitPool) : undefined,
      stakeBpt: isSet(object.stakeBpt) ? BalancerPoolAdaptorV1_StakeBPT.fromJSON(object.stakeBpt) : undefined,
      unstakeBpt: isSet(object.unstakeBpt) ? BalancerPoolAdaptorV1_UnstakeBPT.fromJSON(object.unstakeBpt) : undefined,
      claimRewards: isSet(object.claimRewards)
        ? BalancerPoolAdaptorV1_ClaimRewards.fromJSON(object.claimRewards)
        : undefined,
    };
  },

  toJSON(message: BalancerPoolAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.joinPool !== undefined) {
      obj.joinPool = BalancerPoolAdaptorV1_JoinPool.toJSON(message.joinPool);
    }
    if (message.exitPool !== undefined) {
      obj.exitPool = BalancerPoolAdaptorV1_ExitPool.toJSON(message.exitPool);
    }
    if (message.stakeBpt !== undefined) {
      obj.stakeBpt = BalancerPoolAdaptorV1_StakeBPT.toJSON(message.stakeBpt);
    }
    if (message.unstakeBpt !== undefined) {
      obj.unstakeBpt = BalancerPoolAdaptorV1_UnstakeBPT.toJSON(message.unstakeBpt);
    }
    if (message.claimRewards !== undefined) {
      obj.claimRewards = BalancerPoolAdaptorV1_ClaimRewards.toJSON(message.claimRewards);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1>, I>>(base?: I): BalancerPoolAdaptorV1 {
    return BalancerPoolAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1>, I>>(object: I): BalancerPoolAdaptorV1 {
    const message = createBaseBalancerPoolAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.joinPool = (object.joinPool !== undefined && object.joinPool !== null)
      ? BalancerPoolAdaptorV1_JoinPool.fromPartial(object.joinPool)
      : undefined;
    message.exitPool = (object.exitPool !== undefined && object.exitPool !== null)
      ? BalancerPoolAdaptorV1_ExitPool.fromPartial(object.exitPool)
      : undefined;
    message.stakeBpt = (object.stakeBpt !== undefined && object.stakeBpt !== null)
      ? BalancerPoolAdaptorV1_StakeBPT.fromPartial(object.stakeBpt)
      : undefined;
    message.unstakeBpt = (object.unstakeBpt !== undefined && object.unstakeBpt !== null)
      ? BalancerPoolAdaptorV1_UnstakeBPT.fromPartial(object.unstakeBpt)
      : undefined;
    message.claimRewards = (object.claimRewards !== undefined && object.claimRewards !== null)
      ? BalancerPoolAdaptorV1_ClaimRewards.fromPartial(object.claimRewards)
      : undefined;
    return message;
  },
};

function createBaseBalancerPoolAdaptorV1_SingleSwap(): BalancerPoolAdaptorV1_SingleSwap {
  return { poolId: "", kind: 0, assetIn: "", assetOut: "", amount: "", userData: new Uint8Array(0) };
}

export const BalancerPoolAdaptorV1_SingleSwap = {
  encode(message: BalancerPoolAdaptorV1_SingleSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }
    if (message.assetIn !== "") {
      writer.uint32(26).string(message.assetIn);
    }
    if (message.assetOut !== "") {
      writer.uint32(34).string(message.assetOut);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.userData.length !== 0) {
      writer.uint32(50).bytes(message.userData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1_SingleSwap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1_SingleSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.poolId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.assetIn = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.assetOut = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.userData = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancerPoolAdaptorV1_SingleSwap {
    return {
      poolId: isSet(object.poolId) ? globalThis.String(object.poolId) : "",
      kind: isSet(object.kind) ? balancerPoolAdaptorV1_SwapKindFromJSON(object.kind) : 0,
      assetIn: isSet(object.assetIn) ? globalThis.String(object.assetIn) : "",
      assetOut: isSet(object.assetOut) ? globalThis.String(object.assetOut) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      userData: isSet(object.userData) ? bytesFromBase64(object.userData) : new Uint8Array(0),
    };
  },

  toJSON(message: BalancerPoolAdaptorV1_SingleSwap): unknown {
    const obj: any = {};
    if (message.poolId !== "") {
      obj.poolId = message.poolId;
    }
    if (message.kind !== 0) {
      obj.kind = balancerPoolAdaptorV1_SwapKindToJSON(message.kind);
    }
    if (message.assetIn !== "") {
      obj.assetIn = message.assetIn;
    }
    if (message.assetOut !== "") {
      obj.assetOut = message.assetOut;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.userData.length !== 0) {
      obj.userData = base64FromBytes(message.userData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_SingleSwap>, I>>(
    base?: I,
  ): BalancerPoolAdaptorV1_SingleSwap {
    return BalancerPoolAdaptorV1_SingleSwap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_SingleSwap>, I>>(
    object: I,
  ): BalancerPoolAdaptorV1_SingleSwap {
    const message = createBaseBalancerPoolAdaptorV1_SingleSwap();
    message.poolId = object.poolId ?? "";
    message.kind = object.kind ?? 0;
    message.assetIn = object.assetIn ?? "";
    message.assetOut = object.assetOut ?? "";
    message.amount = object.amount ?? "";
    message.userData = object.userData ?? new Uint8Array(0);
    return message;
  },
};

function createBaseBalancerPoolAdaptorV1_SwapData(): BalancerPoolAdaptorV1_SwapData {
  return { minAmountsForSwaps: [], swapDeadlines: [] };
}

export const BalancerPoolAdaptorV1_SwapData = {
  encode(message: BalancerPoolAdaptorV1_SwapData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minAmountsForSwaps) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.swapDeadlines) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1_SwapData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1_SwapData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minAmountsForSwaps.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.swapDeadlines.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancerPoolAdaptorV1_SwapData {
    return {
      minAmountsForSwaps: globalThis.Array.isArray(object?.minAmountsForSwaps)
        ? object.minAmountsForSwaps.map((e: any) => globalThis.String(e))
        : [],
      swapDeadlines: globalThis.Array.isArray(object?.swapDeadlines)
        ? object.swapDeadlines.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: BalancerPoolAdaptorV1_SwapData): unknown {
    const obj: any = {};
    if (message.minAmountsForSwaps?.length) {
      obj.minAmountsForSwaps = message.minAmountsForSwaps;
    }
    if (message.swapDeadlines?.length) {
      obj.swapDeadlines = message.swapDeadlines;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_SwapData>, I>>(base?: I): BalancerPoolAdaptorV1_SwapData {
    return BalancerPoolAdaptorV1_SwapData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_SwapData>, I>>(
    object: I,
  ): BalancerPoolAdaptorV1_SwapData {
    const message = createBaseBalancerPoolAdaptorV1_SwapData();
    message.minAmountsForSwaps = object.minAmountsForSwaps?.map((e) => e) || [];
    message.swapDeadlines = object.swapDeadlines?.map((e) => e) || [];
    return message;
  },
};

function createBaseBalancerPoolAdaptorV1_JoinPool(): BalancerPoolAdaptorV1_JoinPool {
  return { targetBpt: "", swapsBeforeJoin: [], swapData: undefined, minimumBpt: "" };
}

export const BalancerPoolAdaptorV1_JoinPool = {
  encode(message: BalancerPoolAdaptorV1_JoinPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetBpt !== "") {
      writer.uint32(10).string(message.targetBpt);
    }
    for (const v of message.swapsBeforeJoin) {
      BalancerPoolAdaptorV1_SingleSwap.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapData !== undefined) {
      BalancerPoolAdaptorV1_SwapData.encode(message.swapData, writer.uint32(26).fork()).ldelim();
    }
    if (message.minimumBpt !== "") {
      writer.uint32(34).string(message.minimumBpt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1_JoinPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1_JoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetBpt = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.swapsBeforeJoin.push(BalancerPoolAdaptorV1_SingleSwap.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.swapData = BalancerPoolAdaptorV1_SwapData.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minimumBpt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancerPoolAdaptorV1_JoinPool {
    return {
      targetBpt: isSet(object.targetBpt) ? globalThis.String(object.targetBpt) : "",
      swapsBeforeJoin: globalThis.Array.isArray(object?.swapsBeforeJoin)
        ? object.swapsBeforeJoin.map((e: any) => BalancerPoolAdaptorV1_SingleSwap.fromJSON(e))
        : [],
      swapData: isSet(object.swapData) ? BalancerPoolAdaptorV1_SwapData.fromJSON(object.swapData) : undefined,
      minimumBpt: isSet(object.minimumBpt) ? globalThis.String(object.minimumBpt) : "",
    };
  },

  toJSON(message: BalancerPoolAdaptorV1_JoinPool): unknown {
    const obj: any = {};
    if (message.targetBpt !== "") {
      obj.targetBpt = message.targetBpt;
    }
    if (message.swapsBeforeJoin?.length) {
      obj.swapsBeforeJoin = message.swapsBeforeJoin.map((e) => BalancerPoolAdaptorV1_SingleSwap.toJSON(e));
    }
    if (message.swapData !== undefined) {
      obj.swapData = BalancerPoolAdaptorV1_SwapData.toJSON(message.swapData);
    }
    if (message.minimumBpt !== "") {
      obj.minimumBpt = message.minimumBpt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_JoinPool>, I>>(base?: I): BalancerPoolAdaptorV1_JoinPool {
    return BalancerPoolAdaptorV1_JoinPool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_JoinPool>, I>>(
    object: I,
  ): BalancerPoolAdaptorV1_JoinPool {
    const message = createBaseBalancerPoolAdaptorV1_JoinPool();
    message.targetBpt = object.targetBpt ?? "";
    message.swapsBeforeJoin = object.swapsBeforeJoin?.map((e) => BalancerPoolAdaptorV1_SingleSwap.fromPartial(e)) || [];
    message.swapData = (object.swapData !== undefined && object.swapData !== null)
      ? BalancerPoolAdaptorV1_SwapData.fromPartial(object.swapData)
      : undefined;
    message.minimumBpt = object.minimumBpt ?? "";
    return message;
  },
};

function createBaseBalancerPoolAdaptorV1_ExitPoolRequest(): BalancerPoolAdaptorV1_ExitPoolRequest {
  return { assets: [], minAmountsOut: [], userData: new Uint8Array(0), toInternalBalance: false };
}

export const BalancerPoolAdaptorV1_ExitPoolRequest = {
  encode(message: BalancerPoolAdaptorV1_ExitPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.minAmountsOut) {
      writer.uint32(18).string(v!);
    }
    if (message.userData.length !== 0) {
      writer.uint32(26).bytes(message.userData);
    }
    if (message.toInternalBalance === true) {
      writer.uint32(32).bool(message.toInternalBalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1_ExitPoolRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1_ExitPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assets.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.minAmountsOut.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userData = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.toInternalBalance = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancerPoolAdaptorV1_ExitPoolRequest {
    return {
      assets: globalThis.Array.isArray(object?.assets) ? object.assets.map((e: any) => globalThis.String(e)) : [],
      minAmountsOut: globalThis.Array.isArray(object?.minAmountsOut)
        ? object.minAmountsOut.map((e: any) => globalThis.String(e))
        : [],
      userData: isSet(object.userData) ? bytesFromBase64(object.userData) : new Uint8Array(0),
      toInternalBalance: isSet(object.toInternalBalance) ? globalThis.Boolean(object.toInternalBalance) : false,
    };
  },

  toJSON(message: BalancerPoolAdaptorV1_ExitPoolRequest): unknown {
    const obj: any = {};
    if (message.assets?.length) {
      obj.assets = message.assets;
    }
    if (message.minAmountsOut?.length) {
      obj.minAmountsOut = message.minAmountsOut;
    }
    if (message.userData.length !== 0) {
      obj.userData = base64FromBytes(message.userData);
    }
    if (message.toInternalBalance === true) {
      obj.toInternalBalance = message.toInternalBalance;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_ExitPoolRequest>, I>>(
    base?: I,
  ): BalancerPoolAdaptorV1_ExitPoolRequest {
    return BalancerPoolAdaptorV1_ExitPoolRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_ExitPoolRequest>, I>>(
    object: I,
  ): BalancerPoolAdaptorV1_ExitPoolRequest {
    const message = createBaseBalancerPoolAdaptorV1_ExitPoolRequest();
    message.assets = object.assets?.map((e) => e) || [];
    message.minAmountsOut = object.minAmountsOut?.map((e) => e) || [];
    message.userData = object.userData ?? new Uint8Array(0);
    message.toInternalBalance = object.toInternalBalance ?? false;
    return message;
  },
};

function createBaseBalancerPoolAdaptorV1_ExitPool(): BalancerPoolAdaptorV1_ExitPool {
  return { targetBpt: "", swapsAfterExit: [], swapData: undefined, request: undefined };
}

export const BalancerPoolAdaptorV1_ExitPool = {
  encode(message: BalancerPoolAdaptorV1_ExitPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetBpt !== "") {
      writer.uint32(10).string(message.targetBpt);
    }
    for (const v of message.swapsAfterExit) {
      BalancerPoolAdaptorV1_SingleSwap.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapData !== undefined) {
      BalancerPoolAdaptorV1_SwapData.encode(message.swapData, writer.uint32(26).fork()).ldelim();
    }
    if (message.request !== undefined) {
      BalancerPoolAdaptorV1_ExitPoolRequest.encode(message.request, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1_ExitPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1_ExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetBpt = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.swapsAfterExit.push(BalancerPoolAdaptorV1_SingleSwap.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.swapData = BalancerPoolAdaptorV1_SwapData.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.request = BalancerPoolAdaptorV1_ExitPoolRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancerPoolAdaptorV1_ExitPool {
    return {
      targetBpt: isSet(object.targetBpt) ? globalThis.String(object.targetBpt) : "",
      swapsAfterExit: globalThis.Array.isArray(object?.swapsAfterExit)
        ? object.swapsAfterExit.map((e: any) => BalancerPoolAdaptorV1_SingleSwap.fromJSON(e))
        : [],
      swapData: isSet(object.swapData) ? BalancerPoolAdaptorV1_SwapData.fromJSON(object.swapData) : undefined,
      request: isSet(object.request) ? BalancerPoolAdaptorV1_ExitPoolRequest.fromJSON(object.request) : undefined,
    };
  },

  toJSON(message: BalancerPoolAdaptorV1_ExitPool): unknown {
    const obj: any = {};
    if (message.targetBpt !== "") {
      obj.targetBpt = message.targetBpt;
    }
    if (message.swapsAfterExit?.length) {
      obj.swapsAfterExit = message.swapsAfterExit.map((e) => BalancerPoolAdaptorV1_SingleSwap.toJSON(e));
    }
    if (message.swapData !== undefined) {
      obj.swapData = BalancerPoolAdaptorV1_SwapData.toJSON(message.swapData);
    }
    if (message.request !== undefined) {
      obj.request = BalancerPoolAdaptorV1_ExitPoolRequest.toJSON(message.request);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_ExitPool>, I>>(base?: I): BalancerPoolAdaptorV1_ExitPool {
    return BalancerPoolAdaptorV1_ExitPool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_ExitPool>, I>>(
    object: I,
  ): BalancerPoolAdaptorV1_ExitPool {
    const message = createBaseBalancerPoolAdaptorV1_ExitPool();
    message.targetBpt = object.targetBpt ?? "";
    message.swapsAfterExit = object.swapsAfterExit?.map((e) => BalancerPoolAdaptorV1_SingleSwap.fromPartial(e)) || [];
    message.swapData = (object.swapData !== undefined && object.swapData !== null)
      ? BalancerPoolAdaptorV1_SwapData.fromPartial(object.swapData)
      : undefined;
    message.request = (object.request !== undefined && object.request !== null)
      ? BalancerPoolAdaptorV1_ExitPoolRequest.fromPartial(object.request)
      : undefined;
    return message;
  },
};

function createBaseBalancerPoolAdaptorV1_StakeBPT(): BalancerPoolAdaptorV1_StakeBPT {
  return { bpt: "", liquidityGauge: "", amountIn: "" };
}

export const BalancerPoolAdaptorV1_StakeBPT = {
  encode(message: BalancerPoolAdaptorV1_StakeBPT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bpt !== "") {
      writer.uint32(10).string(message.bpt);
    }
    if (message.liquidityGauge !== "") {
      writer.uint32(18).string(message.liquidityGauge);
    }
    if (message.amountIn !== "") {
      writer.uint32(26).string(message.amountIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1_StakeBPT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1_StakeBPT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bpt = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidityGauge = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountIn = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancerPoolAdaptorV1_StakeBPT {
    return {
      bpt: isSet(object.bpt) ? globalThis.String(object.bpt) : "",
      liquidityGauge: isSet(object.liquidityGauge) ? globalThis.String(object.liquidityGauge) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
    };
  },

  toJSON(message: BalancerPoolAdaptorV1_StakeBPT): unknown {
    const obj: any = {};
    if (message.bpt !== "") {
      obj.bpt = message.bpt;
    }
    if (message.liquidityGauge !== "") {
      obj.liquidityGauge = message.liquidityGauge;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_StakeBPT>, I>>(base?: I): BalancerPoolAdaptorV1_StakeBPT {
    return BalancerPoolAdaptorV1_StakeBPT.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_StakeBPT>, I>>(
    object: I,
  ): BalancerPoolAdaptorV1_StakeBPT {
    const message = createBaseBalancerPoolAdaptorV1_StakeBPT();
    message.bpt = object.bpt ?? "";
    message.liquidityGauge = object.liquidityGauge ?? "";
    message.amountIn = object.amountIn ?? "";
    return message;
  },
};

function createBaseBalancerPoolAdaptorV1_UnstakeBPT(): BalancerPoolAdaptorV1_UnstakeBPT {
  return { bpt: "", liquidityGauge: "", amountOut: "" };
}

export const BalancerPoolAdaptorV1_UnstakeBPT = {
  encode(message: BalancerPoolAdaptorV1_UnstakeBPT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bpt !== "") {
      writer.uint32(10).string(message.bpt);
    }
    if (message.liquidityGauge !== "") {
      writer.uint32(18).string(message.liquidityGauge);
    }
    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1_UnstakeBPT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1_UnstakeBPT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bpt = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidityGauge = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancerPoolAdaptorV1_UnstakeBPT {
    return {
      bpt: isSet(object.bpt) ? globalThis.String(object.bpt) : "",
      liquidityGauge: isSet(object.liquidityGauge) ? globalThis.String(object.liquidityGauge) : "",
      amountOut: isSet(object.amountOut) ? globalThis.String(object.amountOut) : "",
    };
  },

  toJSON(message: BalancerPoolAdaptorV1_UnstakeBPT): unknown {
    const obj: any = {};
    if (message.bpt !== "") {
      obj.bpt = message.bpt;
    }
    if (message.liquidityGauge !== "") {
      obj.liquidityGauge = message.liquidityGauge;
    }
    if (message.amountOut !== "") {
      obj.amountOut = message.amountOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_UnstakeBPT>, I>>(
    base?: I,
  ): BalancerPoolAdaptorV1_UnstakeBPT {
    return BalancerPoolAdaptorV1_UnstakeBPT.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_UnstakeBPT>, I>>(
    object: I,
  ): BalancerPoolAdaptorV1_UnstakeBPT {
    const message = createBaseBalancerPoolAdaptorV1_UnstakeBPT();
    message.bpt = object.bpt ?? "";
    message.liquidityGauge = object.liquidityGauge ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
};

function createBaseBalancerPoolAdaptorV1_ClaimRewards(): BalancerPoolAdaptorV1_ClaimRewards {
  return { gauge: "" };
}

export const BalancerPoolAdaptorV1_ClaimRewards = {
  encode(message: BalancerPoolAdaptorV1_ClaimRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gauge !== "") {
      writer.uint32(10).string(message.gauge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1_ClaimRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1_ClaimRewards();
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

  fromJSON(object: any): BalancerPoolAdaptorV1_ClaimRewards {
    return { gauge: isSet(object.gauge) ? globalThis.String(object.gauge) : "" };
  },

  toJSON(message: BalancerPoolAdaptorV1_ClaimRewards): unknown {
    const obj: any = {};
    if (message.gauge !== "") {
      obj.gauge = message.gauge;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_ClaimRewards>, I>>(
    base?: I,
  ): BalancerPoolAdaptorV1_ClaimRewards {
    return BalancerPoolAdaptorV1_ClaimRewards.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1_ClaimRewards>, I>>(
    object: I,
  ): BalancerPoolAdaptorV1_ClaimRewards {
    const message = createBaseBalancerPoolAdaptorV1_ClaimRewards();
    message.gauge = object.gauge ?? "";
    return message;
  },
};

function createBaseBalancerPoolAdaptorV1Calls(): BalancerPoolAdaptorV1Calls {
  return { calls: [] };
}

export const BalancerPoolAdaptorV1Calls = {
  encode(message: BalancerPoolAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      BalancerPoolAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerPoolAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(BalancerPoolAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancerPoolAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => BalancerPoolAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BalancerPoolAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => BalancerPoolAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalancerPoolAdaptorV1Calls>, I>>(base?: I): BalancerPoolAdaptorV1Calls {
    return BalancerPoolAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolAdaptorV1Calls>, I>>(object: I): BalancerPoolAdaptorV1Calls {
    const message = createBaseBalancerPoolAdaptorV1Calls();
    message.calls = object.calls?.map((e) => BalancerPoolAdaptorV1.fromPartial(e)) || [];
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
