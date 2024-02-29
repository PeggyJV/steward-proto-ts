// package: steward.v4
// file: cellar_v1.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class CellarV1 extends jspb.Message {
  hasAddPosition(): boolean;
  clearAddPosition(): void;
  getAddPosition(): CellarV1.AddPosition | undefined;
  setAddPosition(value?: CellarV1.AddPosition): void;

  hasPushPosition(): boolean;
  clearPushPosition(): void;
  getPushPosition(): CellarV1.PushPosition | undefined;
  setPushPosition(value?: CellarV1.PushPosition): void;

  hasRemovePosition(): boolean;
  clearRemovePosition(): void;
  getRemovePosition(): CellarV1.RemovePosition | undefined;
  setRemovePosition(value?: CellarV1.RemovePosition): void;

  hasSetHoldingPosition(): boolean;
  clearSetHoldingPosition(): void;
  getSetHoldingPosition(): CellarV1.SetHoldingPosition | undefined;
  setSetHoldingPosition(value?: CellarV1.SetHoldingPosition): void;

  hasRebalance(): boolean;
  clearRebalance(): void;
  getRebalance(): CellarV1.Rebalance | undefined;
  setRebalance(value?: CellarV1.Rebalance): void;

  hasSetStrategistPayoutAddress(): boolean;
  clearSetStrategistPayoutAddress(): void;
  getSetStrategistPayoutAddress(): CellarV1.SetStrategistPayoutAddress | undefined;
  setSetStrategistPayoutAddress(value?: CellarV1.SetStrategistPayoutAddress): void;

  hasSetWithdrawType(): boolean;
  clearSetWithdrawType(): void;
  getSetWithdrawType(): CellarV1.SetWithdrawType | undefined;
  setSetWithdrawType(value?: CellarV1.SetWithdrawType): void;

  hasSwapPositions(): boolean;
  clearSwapPositions(): void;
  getSwapPositions(): CellarV1.SwapPositions | undefined;
  setSwapPositions(value?: CellarV1.SwapPositions): void;

  hasSetDepositLimit(): boolean;
  clearSetDepositLimit(): void;
  getSetDepositLimit(): CellarV1.SetDepositLimit | undefined;
  setSetDepositLimit(value?: CellarV1.SetDepositLimit): void;

  hasSetLiquidityLimit(): boolean;
  clearSetLiquidityLimit(): void;
  getSetLiquidityLimit(): CellarV1.SetLiquidityLimit | undefined;
  setSetLiquidityLimit(value?: CellarV1.SetLiquidityLimit): void;

  hasSetShareLockPeriod(): boolean;
  clearSetShareLockPeriod(): void;
  getSetShareLockPeriod(): CellarV1.SetShareLockPeriod | undefined;
  setSetShareLockPeriod(value?: CellarV1.SetShareLockPeriod): void;

  hasSetRebalanceDeviation(): boolean;
  clearSetRebalanceDeviation(): void;
  getSetRebalanceDeviation(): CellarV1.SetRebalanceDeviation | undefined;
  setSetRebalanceDeviation(value?: CellarV1.SetRebalanceDeviation): void;

  getFunctionCase(): CellarV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarV1.AsObject;
  static toObject(includeInstance: boolean, msg: CellarV1): CellarV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarV1;
  static deserializeBinaryFromReader(message: CellarV1, reader: jspb.BinaryReader): CellarV1;
}

export namespace CellarV1 {
  export type AsObject = {
    addPosition?: CellarV1.AddPosition.AsObject,
    pushPosition?: CellarV1.PushPosition.AsObject,
    removePosition?: CellarV1.RemovePosition.AsObject,
    setHoldingPosition?: CellarV1.SetHoldingPosition.AsObject,
    rebalance?: CellarV1.Rebalance.AsObject,
    setStrategistPayoutAddress?: CellarV1.SetStrategistPayoutAddress.AsObject,
    setWithdrawType?: CellarV1.SetWithdrawType.AsObject,
    swapPositions?: CellarV1.SwapPositions.AsObject,
    setDepositLimit?: CellarV1.SetDepositLimit.AsObject,
    setLiquidityLimit?: CellarV1.SetLiquidityLimit.AsObject,
    setShareLockPeriod?: CellarV1.SetShareLockPeriod.AsObject,
    setRebalanceDeviation?: CellarV1.SetRebalanceDeviation.AsObject,
  }

  export class AddPosition extends jspb.Message {
    getIndex(): string;
    setIndex(value: string): void;

    getPosition(): string;
    setPosition(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPosition.AsObject;
    static toObject(includeInstance: boolean, msg: AddPosition): AddPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPosition;
    static deserializeBinaryFromReader(message: AddPosition, reader: jspb.BinaryReader): AddPosition;
  }

  export namespace AddPosition {
    export type AsObject = {
      index: string,
      position: string,
    }
  }

  export class PushPosition extends jspb.Message {
    getPosition(): string;
    setPosition(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushPosition.AsObject;
    static toObject(includeInstance: boolean, msg: PushPosition): PushPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushPosition;
    static deserializeBinaryFromReader(message: PushPosition, reader: jspb.BinaryReader): PushPosition;
  }

  export namespace PushPosition {
    export type AsObject = {
      position: string,
    }
  }

  export class RemovePosition extends jspb.Message {
    getIndex(): string;
    setIndex(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePosition.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePosition): RemovePosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePosition;
    static deserializeBinaryFromReader(message: RemovePosition, reader: jspb.BinaryReader): RemovePosition;
  }

  export namespace RemovePosition {
    export type AsObject = {
      index: string,
    }
  }

  export class SetHoldingPosition extends jspb.Message {
    getNewHoldingPosition(): string;
    setNewHoldingPosition(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetHoldingPosition.AsObject;
    static toObject(includeInstance: boolean, msg: SetHoldingPosition): SetHoldingPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetHoldingPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetHoldingPosition;
    static deserializeBinaryFromReader(message: SetHoldingPosition, reader: jspb.BinaryReader): SetHoldingPosition;
  }

  export namespace SetHoldingPosition {
    export type AsObject = {
      newHoldingPosition: string,
    }
  }

  export class Rebalance extends jspb.Message {
    getFromPosition(): string;
    setFromPosition(value: string): void;

    getToPosition(): string;
    setToPosition(value: string): void;

    getAssetsFrom(): string;
    setAssetsFrom(value: string): void;

    getExchange(): common_pb.ExchangeMap[keyof common_pb.ExchangeMap];
    setExchange(value: common_pb.ExchangeMap[keyof common_pb.ExchangeMap]): void;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): common_pb.SwapParams | undefined;
    setParams(value?: common_pb.SwapParams): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rebalance.AsObject;
    static toObject(includeInstance: boolean, msg: Rebalance): Rebalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rebalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rebalance;
    static deserializeBinaryFromReader(message: Rebalance, reader: jspb.BinaryReader): Rebalance;
  }

  export namespace Rebalance {
    export type AsObject = {
      fromPosition: string,
      toPosition: string,
      assetsFrom: string,
      exchange: common_pb.ExchangeMap[keyof common_pb.ExchangeMap],
      params?: common_pb.SwapParams.AsObject,
    }
  }

  export class SetStrategistPayoutAddress extends jspb.Message {
    getPayout(): string;
    setPayout(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetStrategistPayoutAddress.AsObject;
    static toObject(includeInstance: boolean, msg: SetStrategistPayoutAddress): SetStrategistPayoutAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetStrategistPayoutAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetStrategistPayoutAddress;
    static deserializeBinaryFromReader(message: SetStrategistPayoutAddress, reader: jspb.BinaryReader): SetStrategistPayoutAddress;
  }

  export namespace SetStrategistPayoutAddress {
    export type AsObject = {
      payout: string,
    }
  }

  export class SetWithdrawType extends jspb.Message {
    getNewWithdrawType(): CellarV1.WithdrawTypeMap[keyof CellarV1.WithdrawTypeMap];
    setNewWithdrawType(value: CellarV1.WithdrawTypeMap[keyof CellarV1.WithdrawTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetWithdrawType.AsObject;
    static toObject(includeInstance: boolean, msg: SetWithdrawType): SetWithdrawType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetWithdrawType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetWithdrawType;
    static deserializeBinaryFromReader(message: SetWithdrawType, reader: jspb.BinaryReader): SetWithdrawType;
  }

  export namespace SetWithdrawType {
    export type AsObject = {
      newWithdrawType: CellarV1.WithdrawTypeMap[keyof CellarV1.WithdrawTypeMap],
    }
  }

  export class SwapPositions extends jspb.Message {
    getIndex1(): string;
    setIndex1(value: string): void;

    getIndex2(): string;
    setIndex2(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapPositions.AsObject;
    static toObject(includeInstance: boolean, msg: SwapPositions): SwapPositions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapPositions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapPositions;
    static deserializeBinaryFromReader(message: SwapPositions, reader: jspb.BinaryReader): SwapPositions;
  }

  export namespace SwapPositions {
    export type AsObject = {
      index1: string,
      index2: string,
    }
  }

  export class SetDepositLimit extends jspb.Message {
    getNewLimit(): string;
    setNewLimit(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDepositLimit.AsObject;
    static toObject(includeInstance: boolean, msg: SetDepositLimit): SetDepositLimit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDepositLimit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDepositLimit;
    static deserializeBinaryFromReader(message: SetDepositLimit, reader: jspb.BinaryReader): SetDepositLimit;
  }

  export namespace SetDepositLimit {
    export type AsObject = {
      newLimit: string,
    }
  }

  export class SetLiquidityLimit extends jspb.Message {
    getNewLimit(): string;
    setNewLimit(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetLiquidityLimit.AsObject;
    static toObject(includeInstance: boolean, msg: SetLiquidityLimit): SetLiquidityLimit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetLiquidityLimit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetLiquidityLimit;
    static deserializeBinaryFromReader(message: SetLiquidityLimit, reader: jspb.BinaryReader): SetLiquidityLimit;
  }

  export namespace SetLiquidityLimit {
    export type AsObject = {
      newLimit: string,
    }
  }

  export class SetShareLockPeriod extends jspb.Message {
    getNewLock(): string;
    setNewLock(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetShareLockPeriod.AsObject;
    static toObject(includeInstance: boolean, msg: SetShareLockPeriod): SetShareLockPeriod.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetShareLockPeriod, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetShareLockPeriod;
    static deserializeBinaryFromReader(message: SetShareLockPeriod, reader: jspb.BinaryReader): SetShareLockPeriod;
  }

  export namespace SetShareLockPeriod {
    export type AsObject = {
      newLock: string,
    }
  }

  export class SetRebalanceDeviation extends jspb.Message {
    getNewDeviation(): string;
    setNewDeviation(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRebalanceDeviation.AsObject;
    static toObject(includeInstance: boolean, msg: SetRebalanceDeviation): SetRebalanceDeviation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRebalanceDeviation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRebalanceDeviation;
    static deserializeBinaryFromReader(message: SetRebalanceDeviation, reader: jspb.BinaryReader): SetRebalanceDeviation;
  }

  export namespace SetRebalanceDeviation {
    export type AsObject = {
      newDeviation: string,
    }
  }

  export interface WithdrawTypeMap {
    WITHDRAW_TYPE_UNSPECIFIED: 0;
    WITHDRAW_TYPE_ORDERLY: 1;
    WITHDRAW_TYPE_PROPORTIONAL: 2;
  }

  export const WithdrawType: WithdrawTypeMap;

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    ADD_POSITION = 1,
    PUSH_POSITION = 2,
    REMOVE_POSITION = 3,
    SET_HOLDING_POSITION = 4,
    REBALANCE = 5,
    SET_STRATEGIST_PAYOUT_ADDRESS = 6,
    SET_WITHDRAW_TYPE = 7,
    SWAP_POSITIONS = 8,
    SET_DEPOSIT_LIMIT = 9,
    SET_LIQUIDITY_LIMIT = 10,
    SET_SHARE_LOCK_PERIOD = 11,
    SET_REBALANCE_DEVIATION = 12,
  }
}

export class CellarV1Governance extends jspb.Message {
  hasInitiateShutdown(): boolean;
  clearInitiateShutdown(): void;
  getInitiateShutdown(): CellarV1Governance.InitiateShutdown | undefined;
  setInitiateShutdown(value?: CellarV1Governance.InitiateShutdown): void;

  hasLiftShutdown(): boolean;
  clearLiftShutdown(): void;
  getLiftShutdown(): CellarV1Governance.LiftShutdown | undefined;
  setLiftShutdown(value?: CellarV1Governance.LiftShutdown): void;

  hasResetHighWatermark(): boolean;
  clearResetHighWatermark(): void;
  getResetHighWatermark(): CellarV1Governance.ResetHighWatermark | undefined;
  setResetHighWatermark(value?: CellarV1Governance.ResetHighWatermark): void;

  hasSetFeesDistributor(): boolean;
  clearSetFeesDistributor(): void;
  getSetFeesDistributor(): CellarV1Governance.SetFeesDistributor | undefined;
  setSetFeesDistributor(value?: CellarV1Governance.SetFeesDistributor): void;

  hasSetPerformanceFee(): boolean;
  clearSetPerformanceFee(): void;
  getSetPerformanceFee(): CellarV1Governance.SetPerformanceFee | undefined;
  setSetPerformanceFee(value?: CellarV1Governance.SetPerformanceFee): void;

  hasSetPlatformFee(): boolean;
  clearSetPlatformFee(): void;
  getSetPlatformFee(): CellarV1Governance.SetPlatformFee | undefined;
  setSetPlatformFee(value?: CellarV1Governance.SetPlatformFee): void;

  hasSetStrategistPerformanceCut(): boolean;
  clearSetStrategistPerformanceCut(): void;
  getSetStrategistPerformanceCut(): CellarV1Governance.SetStrategistPerformanceCut | undefined;
  setSetStrategistPerformanceCut(value?: CellarV1Governance.SetStrategistPerformanceCut): void;

  hasSetStrategistPlatformCut(): boolean;
  clearSetStrategistPlatformCut(): void;
  getSetStrategistPlatformCut(): CellarV1Governance.SetStrategistPlatformCut | undefined;
  setSetStrategistPlatformCut(value?: CellarV1Governance.SetStrategistPlatformCut): void;

  hasTrustPosition(): boolean;
  clearTrustPosition(): void;
  getTrustPosition(): CellarV1Governance.TrustPosition | undefined;
  setTrustPosition(value?: CellarV1Governance.TrustPosition): void;

  getFunctionCase(): CellarV1Governance.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarV1Governance.AsObject;
  static toObject(includeInstance: boolean, msg: CellarV1Governance): CellarV1Governance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarV1Governance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarV1Governance;
  static deserializeBinaryFromReader(message: CellarV1Governance, reader: jspb.BinaryReader): CellarV1Governance;
}

export namespace CellarV1Governance {
  export type AsObject = {
    initiateShutdown?: CellarV1Governance.InitiateShutdown.AsObject,
    liftShutdown?: CellarV1Governance.LiftShutdown.AsObject,
    resetHighWatermark?: CellarV1Governance.ResetHighWatermark.AsObject,
    setFeesDistributor?: CellarV1Governance.SetFeesDistributor.AsObject,
    setPerformanceFee?: CellarV1Governance.SetPerformanceFee.AsObject,
    setPlatformFee?: CellarV1Governance.SetPlatformFee.AsObject,
    setStrategistPerformanceCut?: CellarV1Governance.SetStrategistPerformanceCut.AsObject,
    setStrategistPlatformCut?: CellarV1Governance.SetStrategistPlatformCut.AsObject,
    trustPosition?: CellarV1Governance.TrustPosition.AsObject,
  }

  export class InitiateShutdown extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitiateShutdown.AsObject;
    static toObject(includeInstance: boolean, msg: InitiateShutdown): InitiateShutdown.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitiateShutdown, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitiateShutdown;
    static deserializeBinaryFromReader(message: InitiateShutdown, reader: jspb.BinaryReader): InitiateShutdown;
  }

  export namespace InitiateShutdown {
    export type AsObject = {
    }
  }

  export class LiftShutdown extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiftShutdown.AsObject;
    static toObject(includeInstance: boolean, msg: LiftShutdown): LiftShutdown.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiftShutdown, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiftShutdown;
    static deserializeBinaryFromReader(message: LiftShutdown, reader: jspb.BinaryReader): LiftShutdown;
  }

  export namespace LiftShutdown {
    export type AsObject = {
    }
  }

  export class ResetHighWatermark extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetHighWatermark.AsObject;
    static toObject(includeInstance: boolean, msg: ResetHighWatermark): ResetHighWatermark.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetHighWatermark, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetHighWatermark;
    static deserializeBinaryFromReader(message: ResetHighWatermark, reader: jspb.BinaryReader): ResetHighWatermark;
  }

  export namespace ResetHighWatermark {
    export type AsObject = {
    }
  }

  export class SetFeesDistributor extends jspb.Message {
    getNewFeesDistributor(): string;
    setNewFeesDistributor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetFeesDistributor.AsObject;
    static toObject(includeInstance: boolean, msg: SetFeesDistributor): SetFeesDistributor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetFeesDistributor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetFeesDistributor;
    static deserializeBinaryFromReader(message: SetFeesDistributor, reader: jspb.BinaryReader): SetFeesDistributor;
  }

  export namespace SetFeesDistributor {
    export type AsObject = {
      newFeesDistributor: string,
    }
  }

  export class SetPerformanceFee extends jspb.Message {
    getAmount(): number;
    setAmount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPerformanceFee.AsObject;
    static toObject(includeInstance: boolean, msg: SetPerformanceFee): SetPerformanceFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPerformanceFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPerformanceFee;
    static deserializeBinaryFromReader(message: SetPerformanceFee, reader: jspb.BinaryReader): SetPerformanceFee;
  }

  export namespace SetPerformanceFee {
    export type AsObject = {
      amount: number,
    }
  }

  export class SetPlatformFee extends jspb.Message {
    getAmount(): number;
    setAmount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPlatformFee.AsObject;
    static toObject(includeInstance: boolean, msg: SetPlatformFee): SetPlatformFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPlatformFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPlatformFee;
    static deserializeBinaryFromReader(message: SetPlatformFee, reader: jspb.BinaryReader): SetPlatformFee;
  }

  export namespace SetPlatformFee {
    export type AsObject = {
      amount: number,
    }
  }

  export class SetStrategistPerformanceCut extends jspb.Message {
    getAmount(): number;
    setAmount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetStrategistPerformanceCut.AsObject;
    static toObject(includeInstance: boolean, msg: SetStrategistPerformanceCut): SetStrategistPerformanceCut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetStrategistPerformanceCut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetStrategistPerformanceCut;
    static deserializeBinaryFromReader(message: SetStrategistPerformanceCut, reader: jspb.BinaryReader): SetStrategistPerformanceCut;
  }

  export namespace SetStrategistPerformanceCut {
    export type AsObject = {
      amount: number,
    }
  }

  export class SetStrategistPlatformCut extends jspb.Message {
    getAmount(): number;
    setAmount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetStrategistPlatformCut.AsObject;
    static toObject(includeInstance: boolean, msg: SetStrategistPlatformCut): SetStrategistPlatformCut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetStrategistPlatformCut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetStrategistPlatformCut;
    static deserializeBinaryFromReader(message: SetStrategistPlatformCut, reader: jspb.BinaryReader): SetStrategistPlatformCut;
  }

  export namespace SetStrategistPlatformCut {
    export type AsObject = {
      amount: number,
    }
  }

  export class TrustPosition extends jspb.Message {
    hasErc20Address(): boolean;
    clearErc20Address(): void;
    getErc20Address(): string;
    setErc20Address(value: string): void;

    hasErc4626Address(): boolean;
    clearErc4626Address(): void;
    getErc4626Address(): string;
    setErc4626Address(value: string): void;

    hasCellarAddress(): boolean;
    clearCellarAddress(): void;
    getCellarAddress(): string;
    setCellarAddress(value: string): void;

    getPositionCase(): TrustPosition.PositionCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrustPosition.AsObject;
    static toObject(includeInstance: boolean, msg: TrustPosition): TrustPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrustPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrustPosition;
    static deserializeBinaryFromReader(message: TrustPosition, reader: jspb.BinaryReader): TrustPosition;
  }

  export namespace TrustPosition {
    export type AsObject = {
      erc20Address: string,
      erc4626Address: string,
      cellarAddress: string,
    }

    export enum PositionCase {
      POSITION_NOT_SET = 0,
      ERC20_ADDRESS = 1,
      ERC4626_ADDRESS = 2,
      CELLAR_ADDRESS = 3,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    INITIATE_SHUTDOWN = 1,
    LIFT_SHUTDOWN = 2,
    RESET_HIGH_WATERMARK = 3,
    SET_FEES_DISTRIBUTOR = 4,
    SET_PERFORMANCE_FEE = 5,
    SET_PLATFORM_FEE = 6,
    SET_STRATEGIST_PERFORMANCE_CUT = 7,
    SET_STRATEGIST_PLATFORM_CUT = 8,
    TRUST_POSITION = 9,
  }
}

