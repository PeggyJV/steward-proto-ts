// package: steward.v4
// file: aave_v2_stablecoin.proto

import * as jspb from "google-protobuf";

export class AaveV2Stablecoin extends jspb.Message {
  hasAccrue(): boolean;
  clearAccrue(): void;
  getAccrue(): AaveV2Stablecoin.Accrue | undefined;
  setAccrue(value?: AaveV2Stablecoin.Accrue): void;

  hasClaimAndUnstake(): boolean;
  clearClaimAndUnstake(): void;
  getClaimAndUnstake(): AaveV2Stablecoin.ClaimAndUnstake | undefined;
  setClaimAndUnstake(value?: AaveV2Stablecoin.ClaimAndUnstake): void;

  hasEnterPosition(): boolean;
  clearEnterPosition(): void;
  getEnterPosition(): AaveV2Stablecoin.EnterPosition | undefined;
  setEnterPosition(value?: AaveV2Stablecoin.EnterPosition): void;

  hasEnterPositionWithAssets(): boolean;
  clearEnterPositionWithAssets(): void;
  getEnterPositionWithAssets(): AaveV2Stablecoin.EnterPositionWithAssets | undefined;
  setEnterPositionWithAssets(value?: AaveV2Stablecoin.EnterPositionWithAssets): void;

  hasExitPosition(): boolean;
  clearExitPosition(): void;
  getExitPosition(): AaveV2Stablecoin.ExitPosition | undefined;
  setExitPosition(value?: AaveV2Stablecoin.ExitPosition): void;

  hasExitPositionWithAssets(): boolean;
  clearExitPositionWithAssets(): void;
  getExitPositionWithAssets(): AaveV2Stablecoin.ExitPositionWithAssets | undefined;
  setExitPositionWithAssets(value?: AaveV2Stablecoin.ExitPositionWithAssets): void;

  hasRebalance(): boolean;
  clearRebalance(): void;
  getRebalance(): AaveV2Stablecoin.Rebalance | undefined;
  setRebalance(value?: AaveV2Stablecoin.Rebalance): void;

  hasReinvest(): boolean;
  clearReinvest(): void;
  getReinvest(): AaveV2Stablecoin.Reinvest | undefined;
  setReinvest(value?: AaveV2Stablecoin.Reinvest): void;

  hasSetAccrualPeriod(): boolean;
  clearSetAccrualPeriod(): void;
  getSetAccrualPeriod(): AaveV2Stablecoin.SetAccrualPeriod | undefined;
  setSetAccrualPeriod(value?: AaveV2Stablecoin.SetAccrualPeriod): void;

  hasSetDepositLimit(): boolean;
  clearSetDepositLimit(): void;
  getSetDepositLimit(): AaveV2Stablecoin.SetDepositLimit | undefined;
  setSetDepositLimit(value?: AaveV2Stablecoin.SetDepositLimit): void;

  hasSetLiquidityLimit(): boolean;
  clearSetLiquidityLimit(): void;
  getSetLiquidityLimit(): AaveV2Stablecoin.SetLiquidityLimit | undefined;
  setSetLiquidityLimit(value?: AaveV2Stablecoin.SetLiquidityLimit): void;

  hasSendFees(): boolean;
  clearSendFees(): void;
  getSendFees(): AaveV2Stablecoin.SendFees | undefined;
  setSendFees(value?: AaveV2Stablecoin.SendFees): void;

  getFunctionCase(): AaveV2Stablecoin.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveV2Stablecoin.AsObject;
  static toObject(includeInstance: boolean, msg: AaveV2Stablecoin): AaveV2Stablecoin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveV2Stablecoin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveV2Stablecoin;
  static deserializeBinaryFromReader(message: AaveV2Stablecoin, reader: jspb.BinaryReader): AaveV2Stablecoin;
}

export namespace AaveV2Stablecoin {
  export type AsObject = {
    accrue?: AaveV2Stablecoin.Accrue.AsObject,
    claimAndUnstake?: AaveV2Stablecoin.ClaimAndUnstake.AsObject,
    enterPosition?: AaveV2Stablecoin.EnterPosition.AsObject,
    enterPositionWithAssets?: AaveV2Stablecoin.EnterPositionWithAssets.AsObject,
    exitPosition?: AaveV2Stablecoin.ExitPosition.AsObject,
    exitPositionWithAssets?: AaveV2Stablecoin.ExitPositionWithAssets.AsObject,
    rebalance?: AaveV2Stablecoin.Rebalance.AsObject,
    reinvest?: AaveV2Stablecoin.Reinvest.AsObject,
    setAccrualPeriod?: AaveV2Stablecoin.SetAccrualPeriod.AsObject,
    setDepositLimit?: AaveV2Stablecoin.SetDepositLimit.AsObject,
    setLiquidityLimit?: AaveV2Stablecoin.SetLiquidityLimit.AsObject,
    sendFees?: AaveV2Stablecoin.SendFees.AsObject,
  }

  export class Accrue extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Accrue.AsObject;
    static toObject(includeInstance: boolean, msg: Accrue): Accrue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Accrue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Accrue;
    static deserializeBinaryFromReader(message: Accrue, reader: jspb.BinaryReader): Accrue;
  }

  export namespace Accrue {
    export type AsObject = {
    }
  }

  export class ClaimAndUnstake extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClaimAndUnstake.AsObject;
    static toObject(includeInstance: boolean, msg: ClaimAndUnstake): ClaimAndUnstake.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClaimAndUnstake, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClaimAndUnstake;
    static deserializeBinaryFromReader(message: ClaimAndUnstake, reader: jspb.BinaryReader): ClaimAndUnstake;
  }

  export namespace ClaimAndUnstake {
    export type AsObject = {
    }
  }

  export class EnterPosition extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnterPosition.AsObject;
    static toObject(includeInstance: boolean, msg: EnterPosition): EnterPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnterPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnterPosition;
    static deserializeBinaryFromReader(message: EnterPosition, reader: jspb.BinaryReader): EnterPosition;
  }

  export namespace EnterPosition {
    export type AsObject = {
    }
  }

  export class EnterPositionWithAssets extends jspb.Message {
    getAssets(): string;
    setAssets(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnterPositionWithAssets.AsObject;
    static toObject(includeInstance: boolean, msg: EnterPositionWithAssets): EnterPositionWithAssets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnterPositionWithAssets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnterPositionWithAssets;
    static deserializeBinaryFromReader(message: EnterPositionWithAssets, reader: jspb.BinaryReader): EnterPositionWithAssets;
  }

  export namespace EnterPositionWithAssets {
    export type AsObject = {
      assets: string,
    }
  }

  export class ExitPosition extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExitPosition.AsObject;
    static toObject(includeInstance: boolean, msg: ExitPosition): ExitPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExitPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExitPosition;
    static deserializeBinaryFromReader(message: ExitPosition, reader: jspb.BinaryReader): ExitPosition;
  }

  export namespace ExitPosition {
    export type AsObject = {
    }
  }

  export class ExitPositionWithAssets extends jspb.Message {
    getAssets(): string;
    setAssets(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExitPositionWithAssets.AsObject;
    static toObject(includeInstance: boolean, msg: ExitPositionWithAssets): ExitPositionWithAssets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExitPositionWithAssets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExitPositionWithAssets;
    static deserializeBinaryFromReader(message: ExitPositionWithAssets, reader: jspb.BinaryReader): ExitPositionWithAssets;
  }

  export namespace ExitPositionWithAssets {
    export type AsObject = {
      assets: string,
    }
  }

  export class Rebalance extends jspb.Message {
    clearRouteList(): void;
    getRouteList(): Array<string>;
    setRouteList(value: Array<string>): void;
    addRoute(value: string, index?: number): string;

    clearSwapParamsList(): void;
    getSwapParamsList(): Array<AaveV2Stablecoin.Rebalance.SwapParams>;
    setSwapParamsList(value: Array<AaveV2Stablecoin.Rebalance.SwapParams>): void;
    addSwapParams(value?: AaveV2Stablecoin.Rebalance.SwapParams, index?: number): AaveV2Stablecoin.Rebalance.SwapParams;

    getMinAssetsOut(): string;
    setMinAssetsOut(value: string): void;

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
      routeList: Array<string>,
      swapParamsList: Array<AaveV2Stablecoin.Rebalance.SwapParams.AsObject>,
      minAssetsOut: string,
    }

    export class SwapParams extends jspb.Message {
      getInIndex(): number;
      setInIndex(value: number): void;

      getOutIndex(): number;
      setOutIndex(value: number): void;

      getSwapType(): number;
      setSwapType(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SwapParams.AsObject;
      static toObject(includeInstance: boolean, msg: SwapParams): SwapParams.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SwapParams, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SwapParams;
      static deserializeBinaryFromReader(message: SwapParams, reader: jspb.BinaryReader): SwapParams;
    }

    export namespace SwapParams {
      export type AsObject = {
        inIndex: number,
        outIndex: number,
        swapType: number,
      }
    }
  }

  export class Reinvest extends jspb.Message {
    getMinAssetsOut(): string;
    setMinAssetsOut(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reinvest.AsObject;
    static toObject(includeInstance: boolean, msg: Reinvest): Reinvest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reinvest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reinvest;
    static deserializeBinaryFromReader(message: Reinvest, reader: jspb.BinaryReader): Reinvest;
  }

  export namespace Reinvest {
    export type AsObject = {
      minAssetsOut: string,
    }
  }

  export class SetAccrualPeriod extends jspb.Message {
    getNewAccrualPeriod(): number;
    setNewAccrualPeriod(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAccrualPeriod.AsObject;
    static toObject(includeInstance: boolean, msg: SetAccrualPeriod): SetAccrualPeriod.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAccrualPeriod, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAccrualPeriod;
    static deserializeBinaryFromReader(message: SetAccrualPeriod, reader: jspb.BinaryReader): SetAccrualPeriod;
  }

  export namespace SetAccrualPeriod {
    export type AsObject = {
      newAccrualPeriod: number,
    }
  }

  export class SetDepositLimit extends jspb.Message {
    getLimit(): string;
    setLimit(value: string): void;

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
      limit: string,
    }
  }

  export class SetLiquidityLimit extends jspb.Message {
    getLimit(): string;
    setLimit(value: string): void;

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
      limit: string,
    }
  }

  export class SendFees extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendFees.AsObject;
    static toObject(includeInstance: boolean, msg: SendFees): SendFees.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendFees, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendFees;
    static deserializeBinaryFromReader(message: SendFees, reader: jspb.BinaryReader): SendFees;
  }

  export namespace SendFees {
    export type AsObject = {
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    ACCRUE = 1,
    CLAIM_AND_UNSTAKE = 2,
    ENTER_POSITION = 3,
    ENTER_POSITION_WITH_ASSETS = 4,
    EXIT_POSITION = 5,
    EXIT_POSITION_WITH_ASSETS = 6,
    REBALANCE = 7,
    REINVEST = 8,
    SET_ACCRUAL_PERIOD = 9,
    SET_DEPOSIT_LIMIT = 10,
    SET_LIQUIDITY_LIMIT = 11,
    SEND_FEES = 12,
  }
}

export class AaveV2StablecoinGovernance extends jspb.Message {
  hasSetFeesDistributor(): boolean;
  clearSetFeesDistributor(): void;
  getSetFeesDistributor(): AaveV2StablecoinGovernance.SetFeesDistributor | undefined;
  setSetFeesDistributor(value?: AaveV2StablecoinGovernance.SetFeesDistributor): void;

  hasInitiateShutdown(): boolean;
  clearInitiateShutdown(): void;
  getInitiateShutdown(): AaveV2StablecoinGovernance.InitiateShutdown | undefined;
  setInitiateShutdown(value?: AaveV2StablecoinGovernance.InitiateShutdown): void;

  hasLiftShutdown(): boolean;
  clearLiftShutdown(): void;
  getLiftShutdown(): AaveV2StablecoinGovernance.LiftShutdown | undefined;
  setLiftShutdown(value?: AaveV2StablecoinGovernance.LiftShutdown): void;

  hasSetTrust(): boolean;
  clearSetTrust(): void;
  getSetTrust(): AaveV2StablecoinGovernance.SetTrust | undefined;
  setSetTrust(value?: AaveV2StablecoinGovernance.SetTrust): void;

  hasSweep(): boolean;
  clearSweep(): void;
  getSweep(): AaveV2StablecoinGovernance.Sweep | undefined;
  setSweep(value?: AaveV2StablecoinGovernance.Sweep): void;

  getFunctionCase(): AaveV2StablecoinGovernance.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AaveV2StablecoinGovernance.AsObject;
  static toObject(includeInstance: boolean, msg: AaveV2StablecoinGovernance): AaveV2StablecoinGovernance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AaveV2StablecoinGovernance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AaveV2StablecoinGovernance;
  static deserializeBinaryFromReader(message: AaveV2StablecoinGovernance, reader: jspb.BinaryReader): AaveV2StablecoinGovernance;
}

export namespace AaveV2StablecoinGovernance {
  export type AsObject = {
    setFeesDistributor?: AaveV2StablecoinGovernance.SetFeesDistributor.AsObject,
    initiateShutdown?: AaveV2StablecoinGovernance.InitiateShutdown.AsObject,
    liftShutdown?: AaveV2StablecoinGovernance.LiftShutdown.AsObject,
    setTrust?: AaveV2StablecoinGovernance.SetTrust.AsObject,
    sweep?: AaveV2StablecoinGovernance.Sweep.AsObject,
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

  export class InitiateShutdown extends jspb.Message {
    getEmptyPosition(): boolean;
    setEmptyPosition(value: boolean): void;

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
      emptyPosition: boolean,
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

  export class SetTrust extends jspb.Message {
    getPosition(): string;
    setPosition(value: string): void;

    getTrust(): boolean;
    setTrust(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetTrust.AsObject;
    static toObject(includeInstance: boolean, msg: SetTrust): SetTrust.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetTrust, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetTrust;
    static deserializeBinaryFromReader(message: SetTrust, reader: jspb.BinaryReader): SetTrust;
  }

  export namespace SetTrust {
    export type AsObject = {
      position: string,
      trust: boolean,
    }
  }

  export class Sweep extends jspb.Message {
    getToken(): string;
    setToken(value: string): void;

    getRecipient(): string;
    setRecipient(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sweep.AsObject;
    static toObject(includeInstance: boolean, msg: Sweep): Sweep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sweep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sweep;
    static deserializeBinaryFromReader(message: Sweep, reader: jspb.BinaryReader): Sweep;
  }

  export namespace Sweep {
    export type AsObject = {
      token: string,
      recipient: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    SET_FEES_DISTRIBUTOR = 1,
    INITIATE_SHUTDOWN = 2,
    LIFT_SHUTDOWN = 3,
    SET_TRUST = 4,
    SWEEP = 5,
  }
}

