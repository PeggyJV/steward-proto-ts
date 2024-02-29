// package: steward.v4
// file: curve.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class CurveAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasAddLiquidity(): boolean;
  clearAddLiquidity(): void;
  getAddLiquidity(): CurveAdaptorV1.AddLiquidity | undefined;
  setAddLiquidity(value?: CurveAdaptorV1.AddLiquidity): void;

  hasAddLiquidityEth(): boolean;
  clearAddLiquidityEth(): void;
  getAddLiquidityEth(): CurveAdaptorV1.AddLiquidityETH | undefined;
  setAddLiquidityEth(value?: CurveAdaptorV1.AddLiquidityETH): void;

  hasRemoveLiquidity(): boolean;
  clearRemoveLiquidity(): void;
  getRemoveLiquidity(): CurveAdaptorV1.RemoveLiquidity | undefined;
  setRemoveLiquidity(value?: CurveAdaptorV1.RemoveLiquidity): void;

  hasRemoveLiquidityEth(): boolean;
  clearRemoveLiquidityEth(): void;
  getRemoveLiquidityEth(): CurveAdaptorV1.RemoveLiquidityETH | undefined;
  setRemoveLiquidityEth(value?: CurveAdaptorV1.RemoveLiquidityETH): void;

  hasStakeInGauge(): boolean;
  clearStakeInGauge(): void;
  getStakeInGauge(): CurveAdaptorV1.StakeInGauge | undefined;
  setStakeInGauge(value?: CurveAdaptorV1.StakeInGauge): void;

  hasUnstakeFromGauge(): boolean;
  clearUnstakeFromGauge(): void;
  getUnstakeFromGauge(): CurveAdaptorV1.UnstakeFromGauge | undefined;
  setUnstakeFromGauge(value?: CurveAdaptorV1.UnstakeFromGauge): void;

  hasClaimRewards(): boolean;
  clearClaimRewards(): void;
  getClaimRewards(): CurveAdaptorV1.ClaimRewards | undefined;
  setClaimRewards(value?: CurveAdaptorV1.ClaimRewards): void;

  getFunctionCase(): CurveAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurveAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: CurveAdaptorV1): CurveAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurveAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurveAdaptorV1;
  static deserializeBinaryFromReader(message: CurveAdaptorV1, reader: jspb.BinaryReader): CurveAdaptorV1;
}

export namespace CurveAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    addLiquidity?: CurveAdaptorV1.AddLiquidity.AsObject,
    addLiquidityEth?: CurveAdaptorV1.AddLiquidityETH.AsObject,
    removeLiquidity?: CurveAdaptorV1.RemoveLiquidity.AsObject,
    removeLiquidityEth?: CurveAdaptorV1.RemoveLiquidityETH.AsObject,
    stakeInGauge?: CurveAdaptorV1.StakeInGauge.AsObject,
    unstakeFromGauge?: CurveAdaptorV1.UnstakeFromGauge.AsObject,
    claimRewards?: CurveAdaptorV1.ClaimRewards.AsObject,
  }

  export class AddLiquidity extends jspb.Message {
    getPool(): string;
    setPool(value: string): void;

    getLpToken(): string;
    setLpToken(value: string): void;

    clearOrderedUnderlyingTokenAmountsList(): void;
    getOrderedUnderlyingTokenAmountsList(): Array<string>;
    setOrderedUnderlyingTokenAmountsList(value: Array<string>): void;
    addOrderedUnderlyingTokenAmounts(value: string, index?: number): string;

    getMinLpAmount(): string;
    setMinLpAmount(value: string): void;

    getGauge(): string;
    setGauge(value: string): void;

    getSelector(): string;
    setSelector(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLiquidity.AsObject;
    static toObject(includeInstance: boolean, msg: AddLiquidity): AddLiquidity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLiquidity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLiquidity;
    static deserializeBinaryFromReader(message: AddLiquidity, reader: jspb.BinaryReader): AddLiquidity;
  }

  export namespace AddLiquidity {
    export type AsObject = {
      pool: string,
      lpToken: string,
      orderedUnderlyingTokenAmountsList: Array<string>,
      minLpAmount: string,
      gauge: string,
      selector: string,
    }
  }

  export class AddLiquidityETH extends jspb.Message {
    getPool(): string;
    setPool(value: string): void;

    getLpToken(): string;
    setLpToken(value: string): void;

    clearOrderedUnderlyingTokenAmountsList(): void;
    getOrderedUnderlyingTokenAmountsList(): Array<string>;
    setOrderedUnderlyingTokenAmountsList(value: Array<string>): void;
    addOrderedUnderlyingTokenAmounts(value: string, index?: number): string;

    getMinLpAmount(): string;
    setMinLpAmount(value: string): void;

    getUseUnderlying(): boolean;
    setUseUnderlying(value: boolean): void;

    getGauge(): string;
    setGauge(value: string): void;

    getSelector(): string;
    setSelector(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLiquidityETH.AsObject;
    static toObject(includeInstance: boolean, msg: AddLiquidityETH): AddLiquidityETH.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLiquidityETH, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLiquidityETH;
    static deserializeBinaryFromReader(message: AddLiquidityETH, reader: jspb.BinaryReader): AddLiquidityETH;
  }

  export namespace AddLiquidityETH {
    export type AsObject = {
      pool: string,
      lpToken: string,
      orderedUnderlyingTokenAmountsList: Array<string>,
      minLpAmount: string,
      useUnderlying: boolean,
      gauge: string,
      selector: string,
    }
  }

  export class RemoveLiquidity extends jspb.Message {
    getPool(): string;
    setPool(value: string): void;

    getLpToken(): string;
    setLpToken(value: string): void;

    getLpTokenAmount(): string;
    setLpTokenAmount(value: string): void;

    clearOrderedMinimumUnderlyingTokenAmountsOutList(): void;
    getOrderedMinimumUnderlyingTokenAmountsOutList(): Array<string>;
    setOrderedMinimumUnderlyingTokenAmountsOutList(value: Array<string>): void;
    addOrderedMinimumUnderlyingTokenAmountsOut(value: string, index?: number): string;

    getGauge(): string;
    setGauge(value: string): void;

    getSelector(): string;
    setSelector(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveLiquidity.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveLiquidity): RemoveLiquidity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveLiquidity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveLiquidity;
    static deserializeBinaryFromReader(message: RemoveLiquidity, reader: jspb.BinaryReader): RemoveLiquidity;
  }

  export namespace RemoveLiquidity {
    export type AsObject = {
      pool: string,
      lpToken: string,
      lpTokenAmount: string,
      orderedMinimumUnderlyingTokenAmountsOutList: Array<string>,
      gauge: string,
      selector: string,
    }
  }

  export class RemoveLiquidityETH extends jspb.Message {
    getPool(): string;
    setPool(value: string): void;

    getLpToken(): string;
    setLpToken(value: string): void;

    getLpTokenAmount(): string;
    setLpTokenAmount(value: string): void;

    clearOrderedMinimumUnderlyingTokenAmountsOutList(): void;
    getOrderedMinimumUnderlyingTokenAmountsOutList(): Array<string>;
    setOrderedMinimumUnderlyingTokenAmountsOutList(value: Array<string>): void;
    addOrderedMinimumUnderlyingTokenAmountsOut(value: string, index?: number): string;

    getUseUnderlying(): boolean;
    setUseUnderlying(value: boolean): void;

    getGauge(): string;
    setGauge(value: string): void;

    getSelector(): string;
    setSelector(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveLiquidityETH.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveLiquidityETH): RemoveLiquidityETH.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveLiquidityETH, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveLiquidityETH;
    static deserializeBinaryFromReader(message: RemoveLiquidityETH, reader: jspb.BinaryReader): RemoveLiquidityETH;
  }

  export namespace RemoveLiquidityETH {
    export type AsObject = {
      pool: string,
      lpToken: string,
      lpTokenAmount: string,
      orderedMinimumUnderlyingTokenAmountsOutList: Array<string>,
      useUnderlying: boolean,
      gauge: string,
      selector: string,
    }
  }

  export class StakeInGauge extends jspb.Message {
    getLpToken(): string;
    setLpToken(value: string): void;

    getGauge(): string;
    setGauge(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    getPool(): string;
    setPool(value: string): void;

    getSelector(): string;
    setSelector(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeInGauge.AsObject;
    static toObject(includeInstance: boolean, msg: StakeInGauge): StakeInGauge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeInGauge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeInGauge;
    static deserializeBinaryFromReader(message: StakeInGauge, reader: jspb.BinaryReader): StakeInGauge;
  }

  export namespace StakeInGauge {
    export type AsObject = {
      lpToken: string,
      gauge: string,
      amount: string,
      pool: string,
      selector: string,
    }
  }

  export class UnstakeFromGauge extends jspb.Message {
    getGauge(): string;
    setGauge(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnstakeFromGauge.AsObject;
    static toObject(includeInstance: boolean, msg: UnstakeFromGauge): UnstakeFromGauge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnstakeFromGauge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnstakeFromGauge;
    static deserializeBinaryFromReader(message: UnstakeFromGauge, reader: jspb.BinaryReader): UnstakeFromGauge;
  }

  export namespace UnstakeFromGauge {
    export type AsObject = {
      gauge: string,
      amount: string,
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

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    ADD_LIQUIDITY = 2,
    ADD_LIQUIDITY_ETH = 3,
    REMOVE_LIQUIDITY = 4,
    REMOVE_LIQUIDITY_ETH = 5,
    STAKE_IN_GAUGE = 6,
    UNSTAKE_FROM_GAUGE = 7,
    CLAIM_REWARDS = 8,
  }
}

export class CurveAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<CurveAdaptorV1>;
  setCallsList(value: Array<CurveAdaptorV1>): void;
  addCalls(value?: CurveAdaptorV1, index?: number): CurveAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurveAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: CurveAdaptorV1Calls): CurveAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurveAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurveAdaptorV1Calls;
  static deserializeBinaryFromReader(message: CurveAdaptorV1Calls, reader: jspb.BinaryReader): CurveAdaptorV1Calls;
}

export namespace CurveAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<CurveAdaptorV1.AsObject>,
  }
}

