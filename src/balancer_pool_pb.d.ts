// package: steward.v4
// file: balancer_pool.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class BalancerPoolAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasJoinPool(): boolean;
  clearJoinPool(): void;
  getJoinPool(): BalancerPoolAdaptorV1.JoinPool | undefined;
  setJoinPool(value?: BalancerPoolAdaptorV1.JoinPool): void;

  hasExitPool(): boolean;
  clearExitPool(): void;
  getExitPool(): BalancerPoolAdaptorV1.ExitPool | undefined;
  setExitPool(value?: BalancerPoolAdaptorV1.ExitPool): void;

  hasStakeBpt(): boolean;
  clearStakeBpt(): void;
  getStakeBpt(): BalancerPoolAdaptorV1.StakeBPT | undefined;
  setStakeBpt(value?: BalancerPoolAdaptorV1.StakeBPT): void;

  hasUnstakeBpt(): boolean;
  clearUnstakeBpt(): void;
  getUnstakeBpt(): BalancerPoolAdaptorV1.UnstakeBPT | undefined;
  setUnstakeBpt(value?: BalancerPoolAdaptorV1.UnstakeBPT): void;

  hasClaimRewards(): boolean;
  clearClaimRewards(): void;
  getClaimRewards(): BalancerPoolAdaptorV1.ClaimRewards | undefined;
  setClaimRewards(value?: BalancerPoolAdaptorV1.ClaimRewards): void;

  getFunctionCase(): BalancerPoolAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancerPoolAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: BalancerPoolAdaptorV1): BalancerPoolAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalancerPoolAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancerPoolAdaptorV1;
  static deserializeBinaryFromReader(message: BalancerPoolAdaptorV1, reader: jspb.BinaryReader): BalancerPoolAdaptorV1;
}

export namespace BalancerPoolAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    joinPool?: BalancerPoolAdaptorV1.JoinPool.AsObject,
    exitPool?: BalancerPoolAdaptorV1.ExitPool.AsObject,
    stakeBpt?: BalancerPoolAdaptorV1.StakeBPT.AsObject,
    unstakeBpt?: BalancerPoolAdaptorV1.UnstakeBPT.AsObject,
    claimRewards?: BalancerPoolAdaptorV1.ClaimRewards.AsObject,
  }

  export class SingleSwap extends jspb.Message {
    getPoolId(): string;
    setPoolId(value: string): void;

    getKind(): BalancerPoolAdaptorV1.SwapKindMap[keyof BalancerPoolAdaptorV1.SwapKindMap];
    setKind(value: BalancerPoolAdaptorV1.SwapKindMap[keyof BalancerPoolAdaptorV1.SwapKindMap]): void;

    getAssetIn(): string;
    setAssetIn(value: string): void;

    getAssetOut(): string;
    setAssetOut(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    getUserData(): Uint8Array | string;
    getUserData_asU8(): Uint8Array;
    getUserData_asB64(): string;
    setUserData(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleSwap.AsObject;
    static toObject(includeInstance: boolean, msg: SingleSwap): SingleSwap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleSwap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleSwap;
    static deserializeBinaryFromReader(message: SingleSwap, reader: jspb.BinaryReader): SingleSwap;
  }

  export namespace SingleSwap {
    export type AsObject = {
      poolId: string,
      kind: BalancerPoolAdaptorV1.SwapKindMap[keyof BalancerPoolAdaptorV1.SwapKindMap],
      assetIn: string,
      assetOut: string,
      amount: string,
      userData: Uint8Array | string,
    }
  }

  export class SwapData extends jspb.Message {
    clearMinAmountsForSwapsList(): void;
    getMinAmountsForSwapsList(): Array<string>;
    setMinAmountsForSwapsList(value: Array<string>): void;
    addMinAmountsForSwaps(value: string, index?: number): string;

    clearSwapDeadlinesList(): void;
    getSwapDeadlinesList(): Array<string>;
    setSwapDeadlinesList(value: Array<string>): void;
    addSwapDeadlines(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapData.AsObject;
    static toObject(includeInstance: boolean, msg: SwapData): SwapData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapData;
    static deserializeBinaryFromReader(message: SwapData, reader: jspb.BinaryReader): SwapData;
  }

  export namespace SwapData {
    export type AsObject = {
      minAmountsForSwapsList: Array<string>,
      swapDeadlinesList: Array<string>,
    }
  }

  export class JoinPool extends jspb.Message {
    getTargetBpt(): string;
    setTargetBpt(value: string): void;

    clearSwapsBeforeJoinList(): void;
    getSwapsBeforeJoinList(): Array<BalancerPoolAdaptorV1.SingleSwap>;
    setSwapsBeforeJoinList(value: Array<BalancerPoolAdaptorV1.SingleSwap>): void;
    addSwapsBeforeJoin(value?: BalancerPoolAdaptorV1.SingleSwap, index?: number): BalancerPoolAdaptorV1.SingleSwap;

    hasSwapData(): boolean;
    clearSwapData(): void;
    getSwapData(): BalancerPoolAdaptorV1.SwapData | undefined;
    setSwapData(value?: BalancerPoolAdaptorV1.SwapData): void;

    getMinimumBpt(): string;
    setMinimumBpt(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinPool.AsObject;
    static toObject(includeInstance: boolean, msg: JoinPool): JoinPool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinPool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinPool;
    static deserializeBinaryFromReader(message: JoinPool, reader: jspb.BinaryReader): JoinPool;
  }

  export namespace JoinPool {
    export type AsObject = {
      targetBpt: string,
      swapsBeforeJoinList: Array<BalancerPoolAdaptorV1.SingleSwap.AsObject>,
      swapData?: BalancerPoolAdaptorV1.SwapData.AsObject,
      minimumBpt: string,
    }
  }

  export class ExitPoolRequest extends jspb.Message {
    clearAssetsList(): void;
    getAssetsList(): Array<string>;
    setAssetsList(value: Array<string>): void;
    addAssets(value: string, index?: number): string;

    clearMinAmountsOutList(): void;
    getMinAmountsOutList(): Array<string>;
    setMinAmountsOutList(value: Array<string>): void;
    addMinAmountsOut(value: string, index?: number): string;

    getUserData(): Uint8Array | string;
    getUserData_asU8(): Uint8Array;
    getUserData_asB64(): string;
    setUserData(value: Uint8Array | string): void;

    getToInternalBalance(): boolean;
    setToInternalBalance(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExitPoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExitPoolRequest): ExitPoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExitPoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExitPoolRequest;
    static deserializeBinaryFromReader(message: ExitPoolRequest, reader: jspb.BinaryReader): ExitPoolRequest;
  }

  export namespace ExitPoolRequest {
    export type AsObject = {
      assetsList: Array<string>,
      minAmountsOutList: Array<string>,
      userData: Uint8Array | string,
      toInternalBalance: boolean,
    }
  }

  export class ExitPool extends jspb.Message {
    getTargetBpt(): string;
    setTargetBpt(value: string): void;

    clearSwapsAfterExitList(): void;
    getSwapsAfterExitList(): Array<BalancerPoolAdaptorV1.SingleSwap>;
    setSwapsAfterExitList(value: Array<BalancerPoolAdaptorV1.SingleSwap>): void;
    addSwapsAfterExit(value?: BalancerPoolAdaptorV1.SingleSwap, index?: number): BalancerPoolAdaptorV1.SingleSwap;

    hasSwapData(): boolean;
    clearSwapData(): void;
    getSwapData(): BalancerPoolAdaptorV1.SwapData | undefined;
    setSwapData(value?: BalancerPoolAdaptorV1.SwapData): void;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): BalancerPoolAdaptorV1.ExitPoolRequest | undefined;
    setRequest(value?: BalancerPoolAdaptorV1.ExitPoolRequest): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExitPool.AsObject;
    static toObject(includeInstance: boolean, msg: ExitPool): ExitPool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExitPool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExitPool;
    static deserializeBinaryFromReader(message: ExitPool, reader: jspb.BinaryReader): ExitPool;
  }

  export namespace ExitPool {
    export type AsObject = {
      targetBpt: string,
      swapsAfterExitList: Array<BalancerPoolAdaptorV1.SingleSwap.AsObject>,
      swapData?: BalancerPoolAdaptorV1.SwapData.AsObject,
      request?: BalancerPoolAdaptorV1.ExitPoolRequest.AsObject,
    }
  }

  export class StakeBPT extends jspb.Message {
    getBpt(): string;
    setBpt(value: string): void;

    getLiquidityGauge(): string;
    setLiquidityGauge(value: string): void;

    getAmountIn(): string;
    setAmountIn(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeBPT.AsObject;
    static toObject(includeInstance: boolean, msg: StakeBPT): StakeBPT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeBPT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeBPT;
    static deserializeBinaryFromReader(message: StakeBPT, reader: jspb.BinaryReader): StakeBPT;
  }

  export namespace StakeBPT {
    export type AsObject = {
      bpt: string,
      liquidityGauge: string,
      amountIn: string,
    }
  }

  export class UnstakeBPT extends jspb.Message {
    getBpt(): string;
    setBpt(value: string): void;

    getLiquidityGauge(): string;
    setLiquidityGauge(value: string): void;

    getAmountOut(): string;
    setAmountOut(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnstakeBPT.AsObject;
    static toObject(includeInstance: boolean, msg: UnstakeBPT): UnstakeBPT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnstakeBPT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnstakeBPT;
    static deserializeBinaryFromReader(message: UnstakeBPT, reader: jspb.BinaryReader): UnstakeBPT;
  }

  export namespace UnstakeBPT {
    export type AsObject = {
      bpt: string,
      liquidityGauge: string,
      amountOut: string,
    }
  }

  export class ClaimRewards extends jspb.Message {
    getGauge(): string;
    setGauge(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClaimRewards.AsObject;
    static toObject(includeInstance: boolean, msg: ClaimRewards): ClaimRewards.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClaimRewards, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClaimRewards;
    static deserializeBinaryFromReader(message: ClaimRewards, reader: jspb.BinaryReader): ClaimRewards;
  }

  export namespace ClaimRewards {
    export type AsObject = {
      gauge: string,
    }
  }

  export interface SwapKindMap {
    SWAP_KIND_UNSPECIFIED: 0;
    SWAP_KIND_GIVEN_IN: 1;
    SWAP_KIND_GIVEN_OUT: 2;
  }

  export const SwapKind: SwapKindMap;

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    JOIN_POOL = 2,
    EXIT_POOL = 3,
    STAKE_BPT = 4,
    UNSTAKE_BPT = 5,
    CLAIM_REWARDS = 6,
  }
}

export class BalancerPoolAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<BalancerPoolAdaptorV1>;
  setCallsList(value: Array<BalancerPoolAdaptorV1>): void;
  addCalls(value?: BalancerPoolAdaptorV1, index?: number): BalancerPoolAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancerPoolAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: BalancerPoolAdaptorV1Calls): BalancerPoolAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalancerPoolAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancerPoolAdaptorV1Calls;
  static deserializeBinaryFromReader(message: BalancerPoolAdaptorV1Calls, reader: jspb.BinaryReader): BalancerPoolAdaptorV1Calls;
}

export namespace BalancerPoolAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<BalancerPoolAdaptorV1.AsObject>,
  }
}

