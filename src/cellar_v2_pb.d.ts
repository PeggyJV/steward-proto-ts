// package: steward.v4
// file: cellar_v2.proto

import * as jspb from "google-protobuf";
import * as a_token_pb from "./a_token_pb";
import * as debt_token_pb from "./debt_token_pb";
import * as aave_v3_a_token_pb from "./aave_v3_a_token_pb";
import * as aave_v3_debt_token_pb from "./aave_v3_debt_token_pb";
import * as aave_v3_debt_token_flash_loan_pb from "./aave_v3_debt_token_flash_loan_pb";
import * as balancer_pool_pb from "./balancer_pool_pb";
import * as balancer_pool_flash_loan_pb from "./balancer_pool_flash_loan_pb";
import * as c_token_pb from "./c_token_pb";
import * as erc4626_pb from "./erc4626_pb";
import * as f_token_pb from "./f_token_pb";
import * as morpho_aave_v2_a_token_pb from "./morpho_aave_v2_a_token_pb";
import * as morpho_aave_v2_debt_token_pb from "./morpho_aave_v2_debt_token_pb";
import * as morpho_aave_v3_a_token_collateral_pb from "./morpho_aave_v3_a_token_collateral_pb";
import * as morpho_aave_v3_a_token_p2p_pb from "./morpho_aave_v3_a_token_p2p_pb";
import * as morpho_aave_v3_debt_token_pb from "./morpho_aave_v3_debt_token_pb";
import * as morpho_blue_collateral_pb from "./morpho_blue_collateral_pb";
import * as morpho_blue_debt_pb from "./morpho_blue_debt_pb";
import * as morpho_blue_supply_pb from "./morpho_blue_supply_pb";
import * as uniswap_v3_pb from "./uniswap_v3_pb";
import * as swap_with_uniswap_pb from "./swap_with_uniswap_pb";
import * as fees_and_reserves_pb from "./fees_and_reserves_pb";
import * as zero_x_pb from "./zero_x_pb";
import * as oneinch_pb from "./oneinch_pb";
import * as vesting_simple_pb from "./vesting_simple_pb";
import * as cellar_adaptor_pb from "./cellar_adaptor_pb";
import * as aave_v2_enable_asset_as_collateral_adaptor_pb from "./aave_v2_enable_asset_as_collateral_adaptor_pb";
import * as legacy_cellar_adaptor_pb from "./legacy_cellar_adaptor_pb";
import * as debt_f_token_pb from "./debt_f_token_pb";
import * as collateral_f_token_pb from "./collateral_f_token_pb";
import * as aura_erc4626_pb from "./aura_erc4626_pb";
import * as convex_curve_pb from "./convex_curve_pb";
import * as curve_pb from "./curve_pb";
import * as staking_pb from "./staking_pb";

export class CellarV2 extends jspb.Message {
  hasCallOnAdaptor(): boolean;
  clearCallOnAdaptor(): void;
  getCallOnAdaptor(): CellarV2.CallOnAdaptor | undefined;
  setCallOnAdaptor(value?: CellarV2.CallOnAdaptor): void;

  hasRemovePosition(): boolean;
  clearRemovePosition(): void;
  getRemovePosition(): CellarV2.RemovePosition | undefined;
  setRemovePosition(value?: CellarV2.RemovePosition): void;

  hasSetHoldingPosition(): boolean;
  clearSetHoldingPosition(): void;
  getSetHoldingPosition(): CellarV2.SetHoldingPosition | undefined;
  setSetHoldingPosition(value?: CellarV2.SetHoldingPosition): void;

  hasSetStrategistPayoutAddress(): boolean;
  clearSetStrategistPayoutAddress(): void;
  getSetStrategistPayoutAddress(): CellarV2.SetStrategistPayoutAddress | undefined;
  setSetStrategistPayoutAddress(value?: CellarV2.SetStrategistPayoutAddress): void;

  hasSwapPositions(): boolean;
  clearSwapPositions(): void;
  getSwapPositions(): CellarV2.SwapPositions | undefined;
  setSwapPositions(value?: CellarV2.SwapPositions): void;

  hasSetShareLockPeriod(): boolean;
  clearSetShareLockPeriod(): void;
  getSetShareLockPeriod(): CellarV2.SetShareLockPeriod | undefined;
  setSetShareLockPeriod(value?: CellarV2.SetShareLockPeriod): void;

  hasAddPosition(): boolean;
  clearAddPosition(): void;
  getAddPosition(): CellarV2.AddPosition | undefined;
  setAddPosition(value?: CellarV2.AddPosition): void;

  hasSetupAdaptor(): boolean;
  clearSetupAdaptor(): void;
  getSetupAdaptor(): CellarV2.SetupAdaptor | undefined;
  setSetupAdaptor(value?: CellarV2.SetupAdaptor): void;

  hasInitiateShutdown(): boolean;
  clearInitiateShutdown(): void;
  getInitiateShutdown(): CellarV2.InitiateShutdown | undefined;
  setInitiateShutdown(value?: CellarV2.InitiateShutdown): void;

  hasLiftShutdown(): boolean;
  clearLiftShutdown(): void;
  getLiftShutdown(): CellarV2.LiftShutdown | undefined;
  setLiftShutdown(value?: CellarV2.LiftShutdown): void;

  hasSetPlatformFee(): boolean;
  clearSetPlatformFee(): void;
  getSetPlatformFee(): CellarV2.SetPlatformFee | undefined;
  setSetPlatformFee(value?: CellarV2.SetPlatformFee): void;

  hasSetStrategistPlatformCut(): boolean;
  clearSetStrategistPlatformCut(): void;
  getSetStrategistPlatformCut(): CellarV2.SetStrategistPlatformCut | undefined;
  setSetStrategistPlatformCut(value?: CellarV2.SetStrategistPlatformCut): void;

  hasSetRebalanceDeviation(): boolean;
  clearSetRebalanceDeviation(): void;
  getSetRebalanceDeviation(): CellarV2.SetRebalanceDeviation | undefined;
  setSetRebalanceDeviation(value?: CellarV2.SetRebalanceDeviation): void;

  getFunctionCase(): CellarV2.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarV2.AsObject;
  static toObject(includeInstance: boolean, msg: CellarV2): CellarV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarV2;
  static deserializeBinaryFromReader(message: CellarV2, reader: jspb.BinaryReader): CellarV2;
}

export namespace CellarV2 {
  export type AsObject = {
    callOnAdaptor?: CellarV2.CallOnAdaptor.AsObject,
    removePosition?: CellarV2.RemovePosition.AsObject,
    setHoldingPosition?: CellarV2.SetHoldingPosition.AsObject,
    setStrategistPayoutAddress?: CellarV2.SetStrategistPayoutAddress.AsObject,
    swapPositions?: CellarV2.SwapPositions.AsObject,
    setShareLockPeriod?: CellarV2.SetShareLockPeriod.AsObject,
    addPosition?: CellarV2.AddPosition.AsObject,
    setupAdaptor?: CellarV2.SetupAdaptor.AsObject,
    initiateShutdown?: CellarV2.InitiateShutdown.AsObject,
    liftShutdown?: CellarV2.LiftShutdown.AsObject,
    setPlatformFee?: CellarV2.SetPlatformFee.AsObject,
    setStrategistPlatformCut?: CellarV2.SetStrategistPlatformCut.AsObject,
    setRebalanceDeviation?: CellarV2.SetRebalanceDeviation.AsObject,
  }

  export class CallOnAdaptor extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<AdaptorCall>;
    setDataList(value: Array<AdaptorCall>): void;
    addData(value?: AdaptorCall, index?: number): AdaptorCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallOnAdaptor.AsObject;
    static toObject(includeInstance: boolean, msg: CallOnAdaptor): CallOnAdaptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallOnAdaptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallOnAdaptor;
    static deserializeBinaryFromReader(message: CallOnAdaptor, reader: jspb.BinaryReader): CallOnAdaptor;
  }

  export namespace CallOnAdaptor {
    export type AsObject = {
      dataList: Array<AdaptorCall.AsObject>,
    }
  }

  export class RemovePosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      inDebtArray: boolean,
    }
  }

  export class SetHoldingPosition extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

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
      positionId: number,
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

  export class SwapPositions extends jspb.Message {
    getIndex1(): number;
    setIndex1(value: number): void;

    getIndex2(): number;
    setIndex2(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index1: number,
      index2: number,
      inDebtArray: boolean,
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

  export class AddPosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getPositionId(): number;
    setPositionId(value: number): void;

    getConfigurationData(): Uint8Array | string;
    getConfigurationData_asU8(): Uint8Array;
    getConfigurationData_asB64(): string;
    setConfigurationData(value: Uint8Array | string): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      positionId: number,
      configurationData: Uint8Array | string,
      inDebtArray: boolean,
    }
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

  export class SetupAdaptor extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetupAdaptor.AsObject;
    static toObject(includeInstance: boolean, msg: SetupAdaptor): SetupAdaptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetupAdaptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetupAdaptor;
    static deserializeBinaryFromReader(message: SetupAdaptor, reader: jspb.BinaryReader): SetupAdaptor;
  }

  export namespace SetupAdaptor {
    export type AsObject = {
      adaptor: string,
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

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    CALL_ON_ADAPTOR = 1,
    REMOVE_POSITION = 2,
    SET_HOLDING_POSITION = 3,
    SET_STRATEGIST_PAYOUT_ADDRESS = 4,
    SWAP_POSITIONS = 5,
    SET_SHARE_LOCK_PERIOD = 6,
    ADD_POSITION = 7,
    SETUP_ADAPTOR = 8,
    INITIATE_SHUTDOWN = 9,
    LIFT_SHUTDOWN = 10,
    SET_PLATFORM_FEE = 11,
    SET_STRATEGIST_PLATFORM_CUT = 12,
    SET_REBALANCE_DEVIATION = 13,
  }
}

export class CellarV2Governance extends jspb.Message {
  hasInitiateShutdown(): boolean;
  clearInitiateShutdown(): void;
  getInitiateShutdown(): CellarV2Governance.InitiateShutdown | undefined;
  setInitiateShutdown(value?: CellarV2Governance.InitiateShutdown): void;

  hasLiftShutdown(): boolean;
  clearLiftShutdown(): void;
  getLiftShutdown(): CellarV2Governance.LiftShutdown | undefined;
  setLiftShutdown(value?: CellarV2Governance.LiftShutdown): void;

  hasSetPlatformFee(): boolean;
  clearSetPlatformFee(): void;
  getSetPlatformFee(): CellarV2Governance.SetPlatformFee | undefined;
  setSetPlatformFee(value?: CellarV2Governance.SetPlatformFee): void;

  hasSetStrategistPlatformCut(): boolean;
  clearSetStrategistPlatformCut(): void;
  getSetStrategistPlatformCut(): CellarV2Governance.SetStrategistPlatformCut | undefined;
  setSetStrategistPlatformCut(value?: CellarV2Governance.SetStrategistPlatformCut): void;

  hasSetupAdaptor(): boolean;
  clearSetupAdaptor(): void;
  getSetupAdaptor(): CellarV2Governance.SetupAdaptor | undefined;
  setSetupAdaptor(value?: CellarV2Governance.SetupAdaptor): void;

  hasSetRebalanceDeviation(): boolean;
  clearSetRebalanceDeviation(): void;
  getSetRebalanceDeviation(): CellarV2Governance.SetRebalanceDeviation | undefined;
  setSetRebalanceDeviation(value?: CellarV2Governance.SetRebalanceDeviation): void;

  getFunctionCase(): CellarV2Governance.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarV2Governance.AsObject;
  static toObject(includeInstance: boolean, msg: CellarV2Governance): CellarV2Governance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarV2Governance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarV2Governance;
  static deserializeBinaryFromReader(message: CellarV2Governance, reader: jspb.BinaryReader): CellarV2Governance;
}

export namespace CellarV2Governance {
  export type AsObject = {
    initiateShutdown?: CellarV2Governance.InitiateShutdown.AsObject,
    liftShutdown?: CellarV2Governance.LiftShutdown.AsObject,
    setPlatformFee?: CellarV2Governance.SetPlatformFee.AsObject,
    setStrategistPlatformCut?: CellarV2Governance.SetStrategistPlatformCut.AsObject,
    setupAdaptor?: CellarV2Governance.SetupAdaptor.AsObject,
    setRebalanceDeviation?: CellarV2Governance.SetRebalanceDeviation.AsObject,
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

  export class SetupAdaptor extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetupAdaptor.AsObject;
    static toObject(includeInstance: boolean, msg: SetupAdaptor): SetupAdaptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetupAdaptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetupAdaptor;
    static deserializeBinaryFromReader(message: SetupAdaptor, reader: jspb.BinaryReader): SetupAdaptor;
  }

  export namespace SetupAdaptor {
    export type AsObject = {
      adaptor: string,
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

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    INITIATE_SHUTDOWN = 1,
    LIFT_SHUTDOWN = 2,
    SET_PLATFORM_FEE = 3,
    SET_STRATEGIST_PLATFORM_CUT = 4,
    SETUP_ADAPTOR = 5,
    SET_REBALANCE_DEVIATION = 6,
  }
}

export class CellarV2_2 extends jspb.Message {
  hasFunctionCall(): boolean;
  clearFunctionCall(): void;
  getFunctionCall(): CellarV2_2.FunctionCall | undefined;
  setFunctionCall(value?: CellarV2_2.FunctionCall): void;

  hasMulticall(): boolean;
  clearMulticall(): void;
  getMulticall(): CellarV2_2.Multicall | undefined;
  setMulticall(value?: CellarV2_2.Multicall): void;

  getCallTypeCase(): CellarV2_2.CallTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarV2_2.AsObject;
  static toObject(includeInstance: boolean, msg: CellarV2_2): CellarV2_2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarV2_2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarV2_2;
  static deserializeBinaryFromReader(message: CellarV2_2, reader: jspb.BinaryReader): CellarV2_2;
}

export namespace CellarV2_2 {
  export type AsObject = {
    functionCall?: CellarV2_2.FunctionCall.AsObject,
    multicall?: CellarV2_2.Multicall.AsObject,
  }

  export class FunctionCall extends jspb.Message {
    hasAddPosition(): boolean;
    clearAddPosition(): void;
    getAddPosition(): CellarV2_2.AddPosition | undefined;
    setAddPosition(value?: CellarV2_2.AddPosition): void;

    hasCallOnAdaptor(): boolean;
    clearCallOnAdaptor(): void;
    getCallOnAdaptor(): CellarV2_2.CallOnAdaptor | undefined;
    setCallOnAdaptor(value?: CellarV2_2.CallOnAdaptor): void;

    hasRemovePosition(): boolean;
    clearRemovePosition(): void;
    getRemovePosition(): CellarV2_2.RemovePosition | undefined;
    setRemovePosition(value?: CellarV2_2.RemovePosition): void;

    hasRemoveAdaptorFromCatalogue(): boolean;
    clearRemoveAdaptorFromCatalogue(): void;
    getRemoveAdaptorFromCatalogue(): CellarV2_2.RemoveAdaptorFromCatalogue | undefined;
    setRemoveAdaptorFromCatalogue(value?: CellarV2_2.RemoveAdaptorFromCatalogue): void;

    hasRemovePositionFromCatalogue(): boolean;
    clearRemovePositionFromCatalogue(): void;
    getRemovePositionFromCatalogue(): CellarV2_2.RemovePositionFromCatalogue | undefined;
    setRemovePositionFromCatalogue(value?: CellarV2_2.RemovePositionFromCatalogue): void;

    hasSetHoldingPosition(): boolean;
    clearSetHoldingPosition(): void;
    getSetHoldingPosition(): CellarV2_2.SetHoldingPosition | undefined;
    setSetHoldingPosition(value?: CellarV2_2.SetHoldingPosition): void;

    hasSetStrategistPayoutAddress(): boolean;
    clearSetStrategistPayoutAddress(): void;
    getSetStrategistPayoutAddress(): CellarV2_2.SetStrategistPayoutAddress | undefined;
    setSetStrategistPayoutAddress(value?: CellarV2_2.SetStrategistPayoutAddress): void;

    hasSwapPositions(): boolean;
    clearSwapPositions(): void;
    getSwapPositions(): CellarV2_2.SwapPositions | undefined;
    setSwapPositions(value?: CellarV2_2.SwapPositions): void;

    hasAddAdaptorToCatalogue(): boolean;
    clearAddAdaptorToCatalogue(): void;
    getAddAdaptorToCatalogue(): CellarV2_2.AddAdaptorToCatalogue | undefined;
    setAddAdaptorToCatalogue(value?: CellarV2_2.AddAdaptorToCatalogue): void;

    hasAddPositionToCatalogue(): boolean;
    clearAddPositionToCatalogue(): void;
    getAddPositionToCatalogue(): CellarV2_2.AddPositionToCatalogue | undefined;
    setAddPositionToCatalogue(value?: CellarV2_2.AddPositionToCatalogue): void;

    hasSetRebalanceDeviation(): boolean;
    clearSetRebalanceDeviation(): void;
    getSetRebalanceDeviation(): CellarV2_2.SetRebalanceDeviation | undefined;
    setSetRebalanceDeviation(value?: CellarV2_2.SetRebalanceDeviation): void;

    hasSetShareLockPeriod(): boolean;
    clearSetShareLockPeriod(): void;
    getSetShareLockPeriod(): CellarV2_2.SetShareLockPeriod | undefined;
    setSetShareLockPeriod(value?: CellarV2_2.SetShareLockPeriod): void;

    hasSetStrategistPlatformCut(): boolean;
    clearSetStrategistPlatformCut(): void;
    getSetStrategistPlatformCut(): CellarV2_2.SetStrategistPlatformCut | undefined;
    setSetStrategistPlatformCut(value?: CellarV2_2.SetStrategistPlatformCut): void;

    hasInitiateShutdown(): boolean;
    clearInitiateShutdown(): void;
    getInitiateShutdown(): CellarV2_2.InitiateShutdown | undefined;
    setInitiateShutdown(value?: CellarV2_2.InitiateShutdown): void;

    hasLiftShutdown(): boolean;
    clearLiftShutdown(): void;
    getLiftShutdown(): CellarV2_2.LiftShutdown | undefined;
    setLiftShutdown(value?: CellarV2_2.LiftShutdown): void;

    hasCachePriceRouter(): boolean;
    clearCachePriceRouter(): void;
    getCachePriceRouter(): CellarV2_2.CachePriceRouter | undefined;
    setCachePriceRouter(value?: CellarV2_2.CachePriceRouter): void;

    getFunctionCase(): FunctionCall.FunctionCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionCall.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionCall;
    static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
  }

  export namespace FunctionCall {
    export type AsObject = {
      addPosition?: CellarV2_2.AddPosition.AsObject,
      callOnAdaptor?: CellarV2_2.CallOnAdaptor.AsObject,
      removePosition?: CellarV2_2.RemovePosition.AsObject,
      removeAdaptorFromCatalogue?: CellarV2_2.RemoveAdaptorFromCatalogue.AsObject,
      removePositionFromCatalogue?: CellarV2_2.RemovePositionFromCatalogue.AsObject,
      setHoldingPosition?: CellarV2_2.SetHoldingPosition.AsObject,
      setStrategistPayoutAddress?: CellarV2_2.SetStrategistPayoutAddress.AsObject,
      swapPositions?: CellarV2_2.SwapPositions.AsObject,
      addAdaptorToCatalogue?: CellarV2_2.AddAdaptorToCatalogue.AsObject,
      addPositionToCatalogue?: CellarV2_2.AddPositionToCatalogue.AsObject,
      setRebalanceDeviation?: CellarV2_2.SetRebalanceDeviation.AsObject,
      setShareLockPeriod?: CellarV2_2.SetShareLockPeriod.AsObject,
      setStrategistPlatformCut?: CellarV2_2.SetStrategistPlatformCut.AsObject,
      initiateShutdown?: CellarV2_2.InitiateShutdown.AsObject,
      liftShutdown?: CellarV2_2.LiftShutdown.AsObject,
      cachePriceRouter?: CellarV2_2.CachePriceRouter.AsObject,
    }

    export enum FunctionCase {
      FUNCTION_NOT_SET = 0,
      ADD_POSITION = 1,
      CALL_ON_ADAPTOR = 2,
      REMOVE_POSITION = 3,
      REMOVE_ADAPTOR_FROM_CATALOGUE = 4,
      REMOVE_POSITION_FROM_CATALOGUE = 5,
      SET_HOLDING_POSITION = 6,
      SET_STRATEGIST_PAYOUT_ADDRESS = 7,
      SWAP_POSITIONS = 8,
      ADD_ADAPTOR_TO_CATALOGUE = 9,
      ADD_POSITION_TO_CATALOGUE = 10,
      SET_REBALANCE_DEVIATION = 11,
      SET_SHARE_LOCK_PERIOD = 12,
      SET_STRATEGIST_PLATFORM_CUT = 13,
      INITIATE_SHUTDOWN = 14,
      LIFT_SHUTDOWN = 15,
      CACHE_PRICE_ROUTER = 16,
    }
  }

  export class AddPosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getPositionId(): number;
    setPositionId(value: number): void;

    getConfigurationData(): Uint8Array | string;
    getConfigurationData_asU8(): Uint8Array;
    getConfigurationData_asB64(): string;
    setConfigurationData(value: Uint8Array | string): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      positionId: number,
      configurationData: Uint8Array | string,
      inDebtArray: boolean,
    }
  }

  export class CallOnAdaptor extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<AdaptorCall>;
    setDataList(value: Array<AdaptorCall>): void;
    addData(value?: AdaptorCall, index?: number): AdaptorCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallOnAdaptor.AsObject;
    static toObject(includeInstance: boolean, msg: CallOnAdaptor): CallOnAdaptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallOnAdaptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallOnAdaptor;
    static deserializeBinaryFromReader(message: CallOnAdaptor, reader: jspb.BinaryReader): CallOnAdaptor;
  }

  export namespace CallOnAdaptor {
    export type AsObject = {
      dataList: Array<AdaptorCall.AsObject>,
    }
  }

  export class RemovePosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      inDebtArray: boolean,
    }
  }

  export class RemoveAdaptorFromCatalogue extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveAdaptorFromCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveAdaptorFromCatalogue): RemoveAdaptorFromCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveAdaptorFromCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveAdaptorFromCatalogue;
    static deserializeBinaryFromReader(message: RemoveAdaptorFromCatalogue, reader: jspb.BinaryReader): RemoveAdaptorFromCatalogue;
  }

  export namespace RemoveAdaptorFromCatalogue {
    export type AsObject = {
      adaptor: string,
    }
  }

  export class RemovePositionFromCatalogue extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePositionFromCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePositionFromCatalogue): RemovePositionFromCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePositionFromCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePositionFromCatalogue;
    static deserializeBinaryFromReader(message: RemovePositionFromCatalogue, reader: jspb.BinaryReader): RemovePositionFromCatalogue;
  }

  export namespace RemovePositionFromCatalogue {
    export type AsObject = {
      positionId: number,
    }
  }

  export class SetHoldingPosition extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

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
      positionId: number,
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

  export class SwapPositions extends jspb.Message {
    getIndex1(): number;
    setIndex1(value: number): void;

    getIndex2(): number;
    setIndex2(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index1: number,
      index2: number,
      inDebtArray: boolean,
    }
  }

  export class Multicall extends jspb.Message {
    clearFunctionCallsList(): void;
    getFunctionCallsList(): Array<CellarV2_2.FunctionCall>;
    setFunctionCallsList(value: Array<CellarV2_2.FunctionCall>): void;
    addFunctionCalls(value?: CellarV2_2.FunctionCall, index?: number): CellarV2_2.FunctionCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multicall.AsObject;
    static toObject(includeInstance: boolean, msg: Multicall): Multicall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Multicall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Multicall;
    static deserializeBinaryFromReader(message: Multicall, reader: jspb.BinaryReader): Multicall;
  }

  export namespace Multicall {
    export type AsObject = {
      functionCallsList: Array<CellarV2_2.FunctionCall.AsObject>,
    }
  }

  export class AddAdaptorToCatalogue extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAdaptorToCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: AddAdaptorToCatalogue): AddAdaptorToCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAdaptorToCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAdaptorToCatalogue;
    static deserializeBinaryFromReader(message: AddAdaptorToCatalogue, reader: jspb.BinaryReader): AddAdaptorToCatalogue;
  }

  export namespace AddAdaptorToCatalogue {
    export type AsObject = {
      adaptor: string,
    }
  }

  export class AddPositionToCatalogue extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPositionToCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: AddPositionToCatalogue): AddPositionToCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPositionToCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPositionToCatalogue;
    static deserializeBinaryFromReader(message: AddPositionToCatalogue, reader: jspb.BinaryReader): AddPositionToCatalogue;
  }

  export namespace AddPositionToCatalogue {
    export type AsObject = {
      positionId: number,
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

  export class SetStrategistPlatformCut extends jspb.Message {
    getNewCut(): number;
    setNewCut(value: number): void;

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
      newCut: number,
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

  export class CachePriceRouter extends jspb.Message {
    getCheckTotalAssets(): boolean;
    setCheckTotalAssets(value: boolean): void;

    getAllowableRange(): number;
    setAllowableRange(value: number): void;

    getExpectedPriceRouter(): string;
    setExpectedPriceRouter(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CachePriceRouter.AsObject;
    static toObject(includeInstance: boolean, msg: CachePriceRouter): CachePriceRouter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CachePriceRouter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CachePriceRouter;
    static deserializeBinaryFromReader(message: CachePriceRouter, reader: jspb.BinaryReader): CachePriceRouter;
  }

  export namespace CachePriceRouter {
    export type AsObject = {
      checkTotalAssets: boolean,
      allowableRange: number,
      expectedPriceRouter: string,
    }
  }

  export enum CallTypeCase {
    CALL_TYPE_NOT_SET = 0,
    FUNCTION_CALL = 1,
    MULTICALL = 2,
  }
}

export class CellarV2_2Governance extends jspb.Message {
  hasFunctionCall(): boolean;
  clearFunctionCall(): void;
  getFunctionCall(): CellarV2_2Governance.FunctionCall | undefined;
  setFunctionCall(value?: CellarV2_2Governance.FunctionCall): void;

  hasMulticall(): boolean;
  clearMulticall(): void;
  getMulticall(): CellarV2_2Governance.Multicall | undefined;
  setMulticall(value?: CellarV2_2Governance.Multicall): void;

  getCallTypeCase(): CellarV2_2Governance.CallTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarV2_2Governance.AsObject;
  static toObject(includeInstance: boolean, msg: CellarV2_2Governance): CellarV2_2Governance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarV2_2Governance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarV2_2Governance;
  static deserializeBinaryFromReader(message: CellarV2_2Governance, reader: jspb.BinaryReader): CellarV2_2Governance;
}

export namespace CellarV2_2Governance {
  export type AsObject = {
    functionCall?: CellarV2_2Governance.FunctionCall.AsObject,
    multicall?: CellarV2_2Governance.Multicall.AsObject,
  }

  export class FunctionCall extends jspb.Message {
    hasAddAdaptorToCatalogue(): boolean;
    clearAddAdaptorToCatalogue(): void;
    getAddAdaptorToCatalogue(): CellarV2_2Governance.AddAdaptorToCatalogue | undefined;
    setAddAdaptorToCatalogue(value?: CellarV2_2Governance.AddAdaptorToCatalogue): void;

    hasAddPositionToCatalogue(): boolean;
    clearAddPositionToCatalogue(): void;
    getAddPositionToCatalogue(): CellarV2_2Governance.AddPositionToCatalogue | undefined;
    setAddPositionToCatalogue(value?: CellarV2_2Governance.AddPositionToCatalogue): void;

    hasSetRebalanceDeviation(): boolean;
    clearSetRebalanceDeviation(): void;
    getSetRebalanceDeviation(): CellarV2_2Governance.SetRebalanceDeviation | undefined;
    setSetRebalanceDeviation(value?: CellarV2_2Governance.SetRebalanceDeviation): void;

    hasSetShareLockPeriod(): boolean;
    clearSetShareLockPeriod(): void;
    getSetShareLockPeriod(): CellarV2_2Governance.SetShareLockPeriod | undefined;
    setSetShareLockPeriod(value?: CellarV2_2Governance.SetShareLockPeriod): void;

    hasSetStrategistPlatformCut(): boolean;
    clearSetStrategistPlatformCut(): void;
    getSetStrategistPlatformCut(): CellarV2_2Governance.SetStrategistPlatformCut | undefined;
    setSetStrategistPlatformCut(value?: CellarV2_2Governance.SetStrategistPlatformCut): void;

    hasInitiateShutdown(): boolean;
    clearInitiateShutdown(): void;
    getInitiateShutdown(): CellarV2_2Governance.InitiateShutdown | undefined;
    setInitiateShutdown(value?: CellarV2_2Governance.InitiateShutdown): void;

    hasLiftShutdown(): boolean;
    clearLiftShutdown(): void;
    getLiftShutdown(): CellarV2_2Governance.LiftShutdown | undefined;
    setLiftShutdown(value?: CellarV2_2Governance.LiftShutdown): void;

    hasForcePositionOut(): boolean;
    clearForcePositionOut(): void;
    getForcePositionOut(): CellarV2_2Governance.ForcePositionOut | undefined;
    setForcePositionOut(value?: CellarV2_2Governance.ForcePositionOut): void;

    hasToggleIgnorePause(): boolean;
    clearToggleIgnorePause(): void;
    getToggleIgnorePause(): CellarV2_2Governance.ToggleIgnorePause | undefined;
    setToggleIgnorePause(value?: CellarV2_2Governance.ToggleIgnorePause): void;

    hasCachePriceRouter(): boolean;
    clearCachePriceRouter(): void;
    getCachePriceRouter(): CellarV2_2Governance.CachePriceRouter | undefined;
    setCachePriceRouter(value?: CellarV2_2Governance.CachePriceRouter): void;

    hasAddPosition(): boolean;
    clearAddPosition(): void;
    getAddPosition(): CellarV2_2Governance.AddPosition | undefined;
    setAddPosition(value?: CellarV2_2Governance.AddPosition): void;

    hasCallOnAdaptor(): boolean;
    clearCallOnAdaptor(): void;
    getCallOnAdaptor(): CellarV2_2Governance.CallOnAdaptor | undefined;
    setCallOnAdaptor(value?: CellarV2_2Governance.CallOnAdaptor): void;

    hasRemovePosition(): boolean;
    clearRemovePosition(): void;
    getRemovePosition(): CellarV2_2Governance.RemovePosition | undefined;
    setRemovePosition(value?: CellarV2_2Governance.RemovePosition): void;

    hasRemoveAdaptorFromCatalogue(): boolean;
    clearRemoveAdaptorFromCatalogue(): void;
    getRemoveAdaptorFromCatalogue(): CellarV2_2Governance.RemoveAdaptorFromCatalogue | undefined;
    setRemoveAdaptorFromCatalogue(value?: CellarV2_2Governance.RemoveAdaptorFromCatalogue): void;

    hasRemovePositionFromCatalogue(): boolean;
    clearRemovePositionFromCatalogue(): void;
    getRemovePositionFromCatalogue(): CellarV2_2Governance.RemovePositionFromCatalogue | undefined;
    setRemovePositionFromCatalogue(value?: CellarV2_2Governance.RemovePositionFromCatalogue): void;

    hasSetHoldingPosition(): boolean;
    clearSetHoldingPosition(): void;
    getSetHoldingPosition(): CellarV2_2Governance.SetHoldingPosition | undefined;
    setSetHoldingPosition(value?: CellarV2_2Governance.SetHoldingPosition): void;

    hasSwapPositions(): boolean;
    clearSwapPositions(): void;
    getSwapPositions(): CellarV2_2Governance.SwapPositions | undefined;
    setSwapPositions(value?: CellarV2_2Governance.SwapPositions): void;

    getFunctionCase(): FunctionCall.FunctionCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionCall.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionCall;
    static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
  }

  export namespace FunctionCall {
    export type AsObject = {
      addAdaptorToCatalogue?: CellarV2_2Governance.AddAdaptorToCatalogue.AsObject,
      addPositionToCatalogue?: CellarV2_2Governance.AddPositionToCatalogue.AsObject,
      setRebalanceDeviation?: CellarV2_2Governance.SetRebalanceDeviation.AsObject,
      setShareLockPeriod?: CellarV2_2Governance.SetShareLockPeriod.AsObject,
      setStrategistPlatformCut?: CellarV2_2Governance.SetStrategistPlatformCut.AsObject,
      initiateShutdown?: CellarV2_2Governance.InitiateShutdown.AsObject,
      liftShutdown?: CellarV2_2Governance.LiftShutdown.AsObject,
      forcePositionOut?: CellarV2_2Governance.ForcePositionOut.AsObject,
      toggleIgnorePause?: CellarV2_2Governance.ToggleIgnorePause.AsObject,
      cachePriceRouter?: CellarV2_2Governance.CachePriceRouter.AsObject,
      addPosition?: CellarV2_2Governance.AddPosition.AsObject,
      callOnAdaptor?: CellarV2_2Governance.CallOnAdaptor.AsObject,
      removePosition?: CellarV2_2Governance.RemovePosition.AsObject,
      removeAdaptorFromCatalogue?: CellarV2_2Governance.RemoveAdaptorFromCatalogue.AsObject,
      removePositionFromCatalogue?: CellarV2_2Governance.RemovePositionFromCatalogue.AsObject,
      setHoldingPosition?: CellarV2_2Governance.SetHoldingPosition.AsObject,
      swapPositions?: CellarV2_2Governance.SwapPositions.AsObject,
    }

    export enum FunctionCase {
      FUNCTION_NOT_SET = 0,
      ADD_ADAPTOR_TO_CATALOGUE = 1,
      ADD_POSITION_TO_CATALOGUE = 2,
      SET_REBALANCE_DEVIATION = 3,
      SET_SHARE_LOCK_PERIOD = 4,
      SET_STRATEGIST_PLATFORM_CUT = 5,
      INITIATE_SHUTDOWN = 6,
      LIFT_SHUTDOWN = 7,
      FORCE_POSITION_OUT = 8,
      TOGGLE_IGNORE_PAUSE = 9,
      CACHE_PRICE_ROUTER = 10,
      ADD_POSITION = 11,
      CALL_ON_ADAPTOR = 12,
      REMOVE_POSITION = 13,
      REMOVE_ADAPTOR_FROM_CATALOGUE = 14,
      REMOVE_POSITION_FROM_CATALOGUE = 15,
      SET_HOLDING_POSITION = 16,
      SWAP_POSITIONS = 18,
    }
  }

  export class Multicall extends jspb.Message {
    clearFunctionCallsList(): void;
    getFunctionCallsList(): Array<CellarV2_2Governance.FunctionCall>;
    setFunctionCallsList(value: Array<CellarV2_2Governance.FunctionCall>): void;
    addFunctionCalls(value?: CellarV2_2Governance.FunctionCall, index?: number): CellarV2_2Governance.FunctionCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multicall.AsObject;
    static toObject(includeInstance: boolean, msg: Multicall): Multicall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Multicall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Multicall;
    static deserializeBinaryFromReader(message: Multicall, reader: jspb.BinaryReader): Multicall;
  }

  export namespace Multicall {
    export type AsObject = {
      functionCallsList: Array<CellarV2_2Governance.FunctionCall.AsObject>,
    }
  }

  export class AddAdaptorToCatalogue extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAdaptorToCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: AddAdaptorToCatalogue): AddAdaptorToCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAdaptorToCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAdaptorToCatalogue;
    static deserializeBinaryFromReader(message: AddAdaptorToCatalogue, reader: jspb.BinaryReader): AddAdaptorToCatalogue;
  }

  export namespace AddAdaptorToCatalogue {
    export type AsObject = {
      adaptor: string,
    }
  }

  export class AddPositionToCatalogue extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPositionToCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: AddPositionToCatalogue): AddPositionToCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPositionToCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPositionToCatalogue;
    static deserializeBinaryFromReader(message: AddPositionToCatalogue, reader: jspb.BinaryReader): AddPositionToCatalogue;
  }

  export namespace AddPositionToCatalogue {
    export type AsObject = {
      positionId: number,
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

  export class SetStrategistPlatformCut extends jspb.Message {
    getNewCut(): number;
    setNewCut(value: number): void;

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
      newCut: number,
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

  export class ForcePositionOut extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getPositionId(): number;
    setPositionId(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ForcePositionOut.AsObject;
    static toObject(includeInstance: boolean, msg: ForcePositionOut): ForcePositionOut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ForcePositionOut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ForcePositionOut;
    static deserializeBinaryFromReader(message: ForcePositionOut, reader: jspb.BinaryReader): ForcePositionOut;
  }

  export namespace ForcePositionOut {
    export type AsObject = {
      index: number,
      positionId: number,
      inDebtArray: boolean,
    }
  }

  export class ToggleIgnorePause extends jspb.Message {
    getIgnore(): boolean;
    setIgnore(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToggleIgnorePause.AsObject;
    static toObject(includeInstance: boolean, msg: ToggleIgnorePause): ToggleIgnorePause.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToggleIgnorePause, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToggleIgnorePause;
    static deserializeBinaryFromReader(message: ToggleIgnorePause, reader: jspb.BinaryReader): ToggleIgnorePause;
  }

  export namespace ToggleIgnorePause {
    export type AsObject = {
      ignore: boolean,
    }
  }

  export class CachePriceRouter extends jspb.Message {
    getCheckTotalAssets(): boolean;
    setCheckTotalAssets(value: boolean): void;

    getAllowableRange(): number;
    setAllowableRange(value: number): void;

    getExpectedPriceRouter(): string;
    setExpectedPriceRouter(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CachePriceRouter.AsObject;
    static toObject(includeInstance: boolean, msg: CachePriceRouter): CachePriceRouter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CachePriceRouter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CachePriceRouter;
    static deserializeBinaryFromReader(message: CachePriceRouter, reader: jspb.BinaryReader): CachePriceRouter;
  }

  export namespace CachePriceRouter {
    export type AsObject = {
      checkTotalAssets: boolean,
      allowableRange: number,
      expectedPriceRouter: string,
    }
  }

  export class AddPosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getPositionId(): number;
    setPositionId(value: number): void;

    getConfigurationData(): Uint8Array | string;
    getConfigurationData_asU8(): Uint8Array;
    getConfigurationData_asB64(): string;
    setConfigurationData(value: Uint8Array | string): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      positionId: number,
      configurationData: Uint8Array | string,
      inDebtArray: boolean,
    }
  }

  export class CallOnAdaptor extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<AdaptorCall>;
    setDataList(value: Array<AdaptorCall>): void;
    addData(value?: AdaptorCall, index?: number): AdaptorCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallOnAdaptor.AsObject;
    static toObject(includeInstance: boolean, msg: CallOnAdaptor): CallOnAdaptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallOnAdaptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallOnAdaptor;
    static deserializeBinaryFromReader(message: CallOnAdaptor, reader: jspb.BinaryReader): CallOnAdaptor;
  }

  export namespace CallOnAdaptor {
    export type AsObject = {
      dataList: Array<AdaptorCall.AsObject>,
    }
  }

  export class RemovePosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      inDebtArray: boolean,
    }
  }

  export class RemoveAdaptorFromCatalogue extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveAdaptorFromCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveAdaptorFromCatalogue): RemoveAdaptorFromCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveAdaptorFromCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveAdaptorFromCatalogue;
    static deserializeBinaryFromReader(message: RemoveAdaptorFromCatalogue, reader: jspb.BinaryReader): RemoveAdaptorFromCatalogue;
  }

  export namespace RemoveAdaptorFromCatalogue {
    export type AsObject = {
      adaptor: string,
    }
  }

  export class RemovePositionFromCatalogue extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePositionFromCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePositionFromCatalogue): RemovePositionFromCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePositionFromCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePositionFromCatalogue;
    static deserializeBinaryFromReader(message: RemovePositionFromCatalogue, reader: jspb.BinaryReader): RemovePositionFromCatalogue;
  }

  export namespace RemovePositionFromCatalogue {
    export type AsObject = {
      positionId: number,
    }
  }

  export class SetHoldingPosition extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

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
      positionId: number,
    }
  }

  export class SwapPositions extends jspb.Message {
    getIndex1(): number;
    setIndex1(value: number): void;

    getIndex2(): number;
    setIndex2(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index1: number,
      index2: number,
      inDebtArray: boolean,
    }
  }

  export enum CallTypeCase {
    CALL_TYPE_NOT_SET = 0,
    FUNCTION_CALL = 1,
    MULTICALL = 2,
  }
}

export class CellarV2_5 extends jspb.Message {
  hasFunctionCall(): boolean;
  clearFunctionCall(): void;
  getFunctionCall(): CellarV2_5.FunctionCall | undefined;
  setFunctionCall(value?: CellarV2_5.FunctionCall): void;

  hasMulticall(): boolean;
  clearMulticall(): void;
  getMulticall(): CellarV2_5.Multicall | undefined;
  setMulticall(value?: CellarV2_5.Multicall): void;

  getCallTypeCase(): CellarV2_5.CallTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarV2_5.AsObject;
  static toObject(includeInstance: boolean, msg: CellarV2_5): CellarV2_5.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarV2_5, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarV2_5;
  static deserializeBinaryFromReader(message: CellarV2_5, reader: jspb.BinaryReader): CellarV2_5;
}

export namespace CellarV2_5 {
  export type AsObject = {
    functionCall?: CellarV2_5.FunctionCall.AsObject,
    multicall?: CellarV2_5.Multicall.AsObject,
  }

  export class FunctionCall extends jspb.Message {
    hasAddPosition(): boolean;
    clearAddPosition(): void;
    getAddPosition(): CellarV2_5.AddPosition | undefined;
    setAddPosition(value?: CellarV2_5.AddPosition): void;

    hasCallOnAdaptor(): boolean;
    clearCallOnAdaptor(): void;
    getCallOnAdaptor(): CellarV2_5.CallOnAdaptor | undefined;
    setCallOnAdaptor(value?: CellarV2_5.CallOnAdaptor): void;

    hasRemovePosition(): boolean;
    clearRemovePosition(): void;
    getRemovePosition(): CellarV2_5.RemovePosition | undefined;
    setRemovePosition(value?: CellarV2_5.RemovePosition): void;

    hasSetHoldingPosition(): boolean;
    clearSetHoldingPosition(): void;
    getSetHoldingPosition(): CellarV2_5.SetHoldingPosition | undefined;
    setSetHoldingPosition(value?: CellarV2_5.SetHoldingPosition): void;

    hasSetStrategistPayoutAddress(): boolean;
    clearSetStrategistPayoutAddress(): void;
    getSetStrategistPayoutAddress(): CellarV2_5.SetStrategistPayoutAddress | undefined;
    setSetStrategistPayoutAddress(value?: CellarV2_5.SetStrategistPayoutAddress): void;

    hasSwapPositions(): boolean;
    clearSwapPositions(): void;
    getSwapPositions(): CellarV2_5.SwapPositions | undefined;
    setSwapPositions(value?: CellarV2_5.SwapPositions): void;

    hasSetShareLockPeriod(): boolean;
    clearSetShareLockPeriod(): void;
    getSetShareLockPeriod(): CellarV2_5.SetShareLockPeriod | undefined;
    setSetShareLockPeriod(value?: CellarV2_5.SetShareLockPeriod): void;

    hasInitiateShutdown(): boolean;
    clearInitiateShutdown(): void;
    getInitiateShutdown(): CellarV2_5.InitiateShutdown | undefined;
    setInitiateShutdown(value?: CellarV2_5.InitiateShutdown): void;

    hasLiftShutdown(): boolean;
    clearLiftShutdown(): void;
    getLiftShutdown(): CellarV2_5.LiftShutdown | undefined;
    setLiftShutdown(value?: CellarV2_5.LiftShutdown): void;

    hasRemoveAdaptorFromCatalogue(): boolean;
    clearRemoveAdaptorFromCatalogue(): void;
    getRemoveAdaptorFromCatalogue(): CellarV2_5.RemoveAdaptorFromCatalogue | undefined;
    setRemoveAdaptorFromCatalogue(value?: CellarV2_5.RemoveAdaptorFromCatalogue): void;

    hasRemovePositionFromCatalogue(): boolean;
    clearRemovePositionFromCatalogue(): void;
    getRemovePositionFromCatalogue(): CellarV2_5.RemovePositionFromCatalogue | undefined;
    setRemovePositionFromCatalogue(value?: CellarV2_5.RemovePositionFromCatalogue): void;

    hasDecreaseShareSupplyCap(): boolean;
    clearDecreaseShareSupplyCap(): void;
    getDecreaseShareSupplyCap(): CellarV2_5.DecreaseShareSupplyCap | undefined;
    setDecreaseShareSupplyCap(value?: CellarV2_5.DecreaseShareSupplyCap): void;

    hasSetAlternativeAssetData(): boolean;
    clearSetAlternativeAssetData(): void;
    getSetAlternativeAssetData(): CellarV2_5.SetAlternativeAssetData | undefined;
    setSetAlternativeAssetData(value?: CellarV2_5.SetAlternativeAssetData): void;

    hasDropAlternativeAssetData(): boolean;
    clearDropAlternativeAssetData(): void;
    getDropAlternativeAssetData(): CellarV2_5.DropAlternativeAssetData | undefined;
    setDropAlternativeAssetData(value?: CellarV2_5.DropAlternativeAssetData): void;

    hasAddAdaptorToCatalogue(): boolean;
    clearAddAdaptorToCatalogue(): void;
    getAddAdaptorToCatalogue(): CellarV2_5.AddAdaptorToCatalogue | undefined;
    setAddAdaptorToCatalogue(value?: CellarV2_5.AddAdaptorToCatalogue): void;

    hasAddPositionToCatalogue(): boolean;
    clearAddPositionToCatalogue(): void;
    getAddPositionToCatalogue(): CellarV2_5.AddPositionToCatalogue | undefined;
    setAddPositionToCatalogue(value?: CellarV2_5.AddPositionToCatalogue): void;

    hasSetRebalanceDeviation(): boolean;
    clearSetRebalanceDeviation(): void;
    getSetRebalanceDeviation(): CellarV2_5.SetRebalanceDeviation | undefined;
    setSetRebalanceDeviation(value?: CellarV2_5.SetRebalanceDeviation): void;

    hasSetStrategistPlatformCut(): boolean;
    clearSetStrategistPlatformCut(): void;
    getSetStrategistPlatformCut(): CellarV2_5.SetStrategistPlatformCut | undefined;
    setSetStrategistPlatformCut(value?: CellarV2_5.SetStrategistPlatformCut): void;

    hasSetSharePriceOracle(): boolean;
    clearSetSharePriceOracle(): void;
    getSetSharePriceOracle(): CellarV2_5.SetSharePriceOracle | undefined;
    setSetSharePriceOracle(value?: CellarV2_5.SetSharePriceOracle): void;

    hasIncreaseShareSupplyCap(): boolean;
    clearIncreaseShareSupplyCap(): void;
    getIncreaseShareSupplyCap(): CellarV2_5.IncreaseShareSupplyCap | undefined;
    setIncreaseShareSupplyCap(value?: CellarV2_5.IncreaseShareSupplyCap): void;

    hasCachePriceRouter(): boolean;
    clearCachePriceRouter(): void;
    getCachePriceRouter(): CellarV2_5.CachePriceRouter | undefined;
    setCachePriceRouter(value?: CellarV2_5.CachePriceRouter): void;

    getFunctionCase(): FunctionCall.FunctionCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionCall.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionCall;
    static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
  }

  export namespace FunctionCall {
    export type AsObject = {
      addPosition?: CellarV2_5.AddPosition.AsObject,
      callOnAdaptor?: CellarV2_5.CallOnAdaptor.AsObject,
      removePosition?: CellarV2_5.RemovePosition.AsObject,
      setHoldingPosition?: CellarV2_5.SetHoldingPosition.AsObject,
      setStrategistPayoutAddress?: CellarV2_5.SetStrategistPayoutAddress.AsObject,
      swapPositions?: CellarV2_5.SwapPositions.AsObject,
      setShareLockPeriod?: CellarV2_5.SetShareLockPeriod.AsObject,
      initiateShutdown?: CellarV2_5.InitiateShutdown.AsObject,
      liftShutdown?: CellarV2_5.LiftShutdown.AsObject,
      removeAdaptorFromCatalogue?: CellarV2_5.RemoveAdaptorFromCatalogue.AsObject,
      removePositionFromCatalogue?: CellarV2_5.RemovePositionFromCatalogue.AsObject,
      decreaseShareSupplyCap?: CellarV2_5.DecreaseShareSupplyCap.AsObject,
      setAlternativeAssetData?: CellarV2_5.SetAlternativeAssetData.AsObject,
      dropAlternativeAssetData?: CellarV2_5.DropAlternativeAssetData.AsObject,
      addAdaptorToCatalogue?: CellarV2_5.AddAdaptorToCatalogue.AsObject,
      addPositionToCatalogue?: CellarV2_5.AddPositionToCatalogue.AsObject,
      setRebalanceDeviation?: CellarV2_5.SetRebalanceDeviation.AsObject,
      setStrategistPlatformCut?: CellarV2_5.SetStrategistPlatformCut.AsObject,
      setSharePriceOracle?: CellarV2_5.SetSharePriceOracle.AsObject,
      increaseShareSupplyCap?: CellarV2_5.IncreaseShareSupplyCap.AsObject,
      cachePriceRouter?: CellarV2_5.CachePriceRouter.AsObject,
    }

    export enum FunctionCase {
      FUNCTION_NOT_SET = 0,
      ADD_POSITION = 1,
      CALL_ON_ADAPTOR = 2,
      REMOVE_POSITION = 3,
      SET_HOLDING_POSITION = 4,
      SET_STRATEGIST_PAYOUT_ADDRESS = 5,
      SWAP_POSITIONS = 6,
      SET_SHARE_LOCK_PERIOD = 8,
      INITIATE_SHUTDOWN = 9,
      LIFT_SHUTDOWN = 11,
      REMOVE_ADAPTOR_FROM_CATALOGUE = 12,
      REMOVE_POSITION_FROM_CATALOGUE = 13,
      DECREASE_SHARE_SUPPLY_CAP = 14,
      SET_ALTERNATIVE_ASSET_DATA = 15,
      DROP_ALTERNATIVE_ASSET_DATA = 16,
      ADD_ADAPTOR_TO_CATALOGUE = 17,
      ADD_POSITION_TO_CATALOGUE = 18,
      SET_REBALANCE_DEVIATION = 19,
      SET_STRATEGIST_PLATFORM_CUT = 20,
      SET_SHARE_PRICE_ORACLE = 21,
      INCREASE_SHARE_SUPPLY_CAP = 22,
      CACHE_PRICE_ROUTER = 23,
    }
  }

  export class AddPosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getPositionId(): number;
    setPositionId(value: number): void;

    getConfigurationData(): Uint8Array | string;
    getConfigurationData_asU8(): Uint8Array;
    getConfigurationData_asB64(): string;
    setConfigurationData(value: Uint8Array | string): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      positionId: number,
      configurationData: Uint8Array | string,
      inDebtArray: boolean,
    }
  }

  export class CallOnAdaptor extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<AdaptorCall>;
    setDataList(value: Array<AdaptorCall>): void;
    addData(value?: AdaptorCall, index?: number): AdaptorCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallOnAdaptor.AsObject;
    static toObject(includeInstance: boolean, msg: CallOnAdaptor): CallOnAdaptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallOnAdaptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallOnAdaptor;
    static deserializeBinaryFromReader(message: CallOnAdaptor, reader: jspb.BinaryReader): CallOnAdaptor;
  }

  export namespace CallOnAdaptor {
    export type AsObject = {
      dataList: Array<AdaptorCall.AsObject>,
    }
  }

  export class RemovePosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      inDebtArray: boolean,
    }
  }

  export class SetHoldingPosition extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

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
      positionId: number,
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

  export class SwapPositions extends jspb.Message {
    getIndex1(): number;
    setIndex1(value: number): void;

    getIndex2(): number;
    setIndex2(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index1: number,
      index2: number,
      inDebtArray: boolean,
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

  export class Multicall extends jspb.Message {
    clearFunctionCallsList(): void;
    getFunctionCallsList(): Array<CellarV2_5.FunctionCall>;
    setFunctionCallsList(value: Array<CellarV2_5.FunctionCall>): void;
    addFunctionCalls(value?: CellarV2_5.FunctionCall, index?: number): CellarV2_5.FunctionCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multicall.AsObject;
    static toObject(includeInstance: boolean, msg: Multicall): Multicall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Multicall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Multicall;
    static deserializeBinaryFromReader(message: Multicall, reader: jspb.BinaryReader): Multicall;
  }

  export namespace Multicall {
    export type AsObject = {
      functionCallsList: Array<CellarV2_5.FunctionCall.AsObject>,
    }
  }

  export class RemoveAdaptorFromCatalogue extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveAdaptorFromCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveAdaptorFromCatalogue): RemoveAdaptorFromCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveAdaptorFromCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveAdaptorFromCatalogue;
    static deserializeBinaryFromReader(message: RemoveAdaptorFromCatalogue, reader: jspb.BinaryReader): RemoveAdaptorFromCatalogue;
  }

  export namespace RemoveAdaptorFromCatalogue {
    export type AsObject = {
      adaptor: string,
    }
  }

  export class RemovePositionFromCatalogue extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePositionFromCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePositionFromCatalogue): RemovePositionFromCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePositionFromCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePositionFromCatalogue;
    static deserializeBinaryFromReader(message: RemovePositionFromCatalogue, reader: jspb.BinaryReader): RemovePositionFromCatalogue;
  }

  export namespace RemovePositionFromCatalogue {
    export type AsObject = {
      positionId: number,
    }
  }

  export class DecreaseShareSupplyCap extends jspb.Message {
    getNewCap(): string;
    setNewCap(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DecreaseShareSupplyCap.AsObject;
    static toObject(includeInstance: boolean, msg: DecreaseShareSupplyCap): DecreaseShareSupplyCap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DecreaseShareSupplyCap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DecreaseShareSupplyCap;
    static deserializeBinaryFromReader(message: DecreaseShareSupplyCap, reader: jspb.BinaryReader): DecreaseShareSupplyCap;
  }

  export namespace DecreaseShareSupplyCap {
    export type AsObject = {
      newCap: string,
    }
  }

  export class SetAlternativeAssetData extends jspb.Message {
    getAlternativeAsset(): string;
    setAlternativeAsset(value: string): void;

    getAlternativeHoldingPosition(): number;
    setAlternativeHoldingPosition(value: number): void;

    getAlternativeAssetFee(): number;
    setAlternativeAssetFee(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAlternativeAssetData.AsObject;
    static toObject(includeInstance: boolean, msg: SetAlternativeAssetData): SetAlternativeAssetData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAlternativeAssetData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAlternativeAssetData;
    static deserializeBinaryFromReader(message: SetAlternativeAssetData, reader: jspb.BinaryReader): SetAlternativeAssetData;
  }

  export namespace SetAlternativeAssetData {
    export type AsObject = {
      alternativeAsset: string,
      alternativeHoldingPosition: number,
      alternativeAssetFee: number,
    }
  }

  export class DropAlternativeAssetData extends jspb.Message {
    getAlternativeAsset(): string;
    setAlternativeAsset(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DropAlternativeAssetData.AsObject;
    static toObject(includeInstance: boolean, msg: DropAlternativeAssetData): DropAlternativeAssetData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DropAlternativeAssetData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DropAlternativeAssetData;
    static deserializeBinaryFromReader(message: DropAlternativeAssetData, reader: jspb.BinaryReader): DropAlternativeAssetData;
  }

  export namespace DropAlternativeAssetData {
    export type AsObject = {
      alternativeAsset: string,
    }
  }

  export class AddAdaptorToCatalogue extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAdaptorToCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: AddAdaptorToCatalogue): AddAdaptorToCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAdaptorToCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAdaptorToCatalogue;
    static deserializeBinaryFromReader(message: AddAdaptorToCatalogue, reader: jspb.BinaryReader): AddAdaptorToCatalogue;
  }

  export namespace AddAdaptorToCatalogue {
    export type AsObject = {
      adaptor: string,
    }
  }

  export class AddPositionToCatalogue extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPositionToCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: AddPositionToCatalogue): AddPositionToCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPositionToCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPositionToCatalogue;
    static deserializeBinaryFromReader(message: AddPositionToCatalogue, reader: jspb.BinaryReader): AddPositionToCatalogue;
  }

  export namespace AddPositionToCatalogue {
    export type AsObject = {
      positionId: number,
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

  export class SetStrategistPlatformCut extends jspb.Message {
    getNewCut(): number;
    setNewCut(value: number): void;

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
      newCut: number,
    }
  }

  export class IncreaseShareSupplyCap extends jspb.Message {
    getNewCap(): string;
    setNewCap(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IncreaseShareSupplyCap.AsObject;
    static toObject(includeInstance: boolean, msg: IncreaseShareSupplyCap): IncreaseShareSupplyCap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IncreaseShareSupplyCap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IncreaseShareSupplyCap;
    static deserializeBinaryFromReader(message: IncreaseShareSupplyCap, reader: jspb.BinaryReader): IncreaseShareSupplyCap;
  }

  export namespace IncreaseShareSupplyCap {
    export type AsObject = {
      newCap: string,
    }
  }

  export class SetSharePriceOracle extends jspb.Message {
    getRegistryId(): string;
    setRegistryId(value: string): void;

    getSharePriceOracle(): string;
    setSharePriceOracle(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSharePriceOracle.AsObject;
    static toObject(includeInstance: boolean, msg: SetSharePriceOracle): SetSharePriceOracle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSharePriceOracle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSharePriceOracle;
    static deserializeBinaryFromReader(message: SetSharePriceOracle, reader: jspb.BinaryReader): SetSharePriceOracle;
  }

  export namespace SetSharePriceOracle {
    export type AsObject = {
      registryId: string,
      sharePriceOracle: string,
    }
  }

  export class CachePriceRouter extends jspb.Message {
    getCheckTotalAssets(): boolean;
    setCheckTotalAssets(value: boolean): void;

    getAllowableRange(): number;
    setAllowableRange(value: number): void;

    getExpectedPriceRouter(): string;
    setExpectedPriceRouter(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CachePriceRouter.AsObject;
    static toObject(includeInstance: boolean, msg: CachePriceRouter): CachePriceRouter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CachePriceRouter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CachePriceRouter;
    static deserializeBinaryFromReader(message: CachePriceRouter, reader: jspb.BinaryReader): CachePriceRouter;
  }

  export namespace CachePriceRouter {
    export type AsObject = {
      checkTotalAssets: boolean,
      allowableRange: number,
      expectedPriceRouter: string,
    }
  }

  export enum CallTypeCase {
    CALL_TYPE_NOT_SET = 0,
    FUNCTION_CALL = 1,
    MULTICALL = 2,
  }
}

export class CellarV2_5Governance extends jspb.Message {
  hasFunctionCall(): boolean;
  clearFunctionCall(): void;
  getFunctionCall(): CellarV2_5Governance.FunctionCall | undefined;
  setFunctionCall(value?: CellarV2_5Governance.FunctionCall): void;

  hasMulticall(): boolean;
  clearMulticall(): void;
  getMulticall(): CellarV2_5Governance.Multicall | undefined;
  setMulticall(value?: CellarV2_5Governance.Multicall): void;

  getCallTypeCase(): CellarV2_5Governance.CallTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellarV2_5Governance.AsObject;
  static toObject(includeInstance: boolean, msg: CellarV2_5Governance): CellarV2_5Governance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellarV2_5Governance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellarV2_5Governance;
  static deserializeBinaryFromReader(message: CellarV2_5Governance, reader: jspb.BinaryReader): CellarV2_5Governance;
}

export namespace CellarV2_5Governance {
  export type AsObject = {
    functionCall?: CellarV2_5Governance.FunctionCall.AsObject,
    multicall?: CellarV2_5Governance.Multicall.AsObject,
  }

  export class FunctionCall extends jspb.Message {
    hasAddAdaptorToCatalogue(): boolean;
    clearAddAdaptorToCatalogue(): void;
    getAddAdaptorToCatalogue(): CellarV2_5Governance.AddAdaptorToCatalogue | undefined;
    setAddAdaptorToCatalogue(value?: CellarV2_5Governance.AddAdaptorToCatalogue): void;

    hasAddPositionToCatalogue(): boolean;
    clearAddPositionToCatalogue(): void;
    getAddPositionToCatalogue(): CellarV2_5Governance.AddPositionToCatalogue | undefined;
    setAddPositionToCatalogue(value?: CellarV2_5Governance.AddPositionToCatalogue): void;

    hasSetRebalanceDeviation(): boolean;
    clearSetRebalanceDeviation(): void;
    getSetRebalanceDeviation(): CellarV2_5Governance.SetRebalanceDeviation | undefined;
    setSetRebalanceDeviation(value?: CellarV2_5Governance.SetRebalanceDeviation): void;

    hasSetStrategistPlatformCut(): boolean;
    clearSetStrategistPlatformCut(): void;
    getSetStrategistPlatformCut(): CellarV2_5Governance.SetStrategistPlatformCut | undefined;
    setSetStrategistPlatformCut(value?: CellarV2_5Governance.SetStrategistPlatformCut): void;

    hasForcePositionOut(): boolean;
    clearForcePositionOut(): void;
    getForcePositionOut(): CellarV2_5Governance.ForcePositionOut | undefined;
    setForcePositionOut(value?: CellarV2_5Governance.ForcePositionOut): void;

    hasToggleIgnorePause(): boolean;
    clearToggleIgnorePause(): void;
    getToggleIgnorePause(): CellarV2_5Governance.ToggleIgnorePause | undefined;
    setToggleIgnorePause(value?: CellarV2_5Governance.ToggleIgnorePause): void;

    hasSetSharePriceOracle(): boolean;
    clearSetSharePriceOracle(): void;
    getSetSharePriceOracle(): CellarV2_5Governance.SetSharePriceOracle | undefined;
    setSetSharePriceOracle(value?: CellarV2_5Governance.SetSharePriceOracle): void;

    hasIncreaseShareSupplyCap(): boolean;
    clearIncreaseShareSupplyCap(): void;
    getIncreaseShareSupplyCap(): CellarV2_5Governance.IncreaseShareSupplyCap | undefined;
    setIncreaseShareSupplyCap(value?: CellarV2_5Governance.IncreaseShareSupplyCap): void;

    hasSetAutomationActions(): boolean;
    clearSetAutomationActions(): void;
    getSetAutomationActions(): CellarV2_5Governance.SetAutomationActions | undefined;
    setSetAutomationActions(value?: CellarV2_5Governance.SetAutomationActions): void;

    hasCachePriceRouter(): boolean;
    clearCachePriceRouter(): void;
    getCachePriceRouter(): CellarV2_5Governance.CachePriceRouter | undefined;
    setCachePriceRouter(value?: CellarV2_5Governance.CachePriceRouter): void;

    hasInitiateShutdown(): boolean;
    clearInitiateShutdown(): void;
    getInitiateShutdown(): CellarV2_5Governance.InitiateShutdown | undefined;
    setInitiateShutdown(value?: CellarV2_5Governance.InitiateShutdown): void;

    hasLiftShutdown(): boolean;
    clearLiftShutdown(): void;
    getLiftShutdown(): CellarV2_5Governance.LiftShutdown | undefined;
    setLiftShutdown(value?: CellarV2_5Governance.LiftShutdown): void;

    hasRemoveAdaptorFromCatalogue(): boolean;
    clearRemoveAdaptorFromCatalogue(): void;
    getRemoveAdaptorFromCatalogue(): CellarV2_5Governance.RemoveAdaptorFromCatalogue | undefined;
    setRemoveAdaptorFromCatalogue(value?: CellarV2_5Governance.RemoveAdaptorFromCatalogue): void;

    hasRemovePositionFromCatalogue(): boolean;
    clearRemovePositionFromCatalogue(): void;
    getRemovePositionFromCatalogue(): CellarV2_5Governance.RemovePositionFromCatalogue | undefined;
    setRemovePositionFromCatalogue(value?: CellarV2_5Governance.RemovePositionFromCatalogue): void;

    hasDecreaseShareSupplyCap(): boolean;
    clearDecreaseShareSupplyCap(): void;
    getDecreaseShareSupplyCap(): CellarV2_5Governance.DecreaseShareSupplyCap | undefined;
    setDecreaseShareSupplyCap(value?: CellarV2_5Governance.DecreaseShareSupplyCap): void;

    hasSetHoldingPosition(): boolean;
    clearSetHoldingPosition(): void;
    getSetHoldingPosition(): CellarV2_5Governance.SetHoldingPosition | undefined;
    setSetHoldingPosition(value?: CellarV2_5Governance.SetHoldingPosition): void;

    hasAddPosition(): boolean;
    clearAddPosition(): void;
    getAddPosition(): CellarV2_5Governance.AddPosition | undefined;
    setAddPosition(value?: CellarV2_5Governance.AddPosition): void;

    hasCallOnAdaptor(): boolean;
    clearCallOnAdaptor(): void;
    getCallOnAdaptor(): CellarV2_5Governance.CallOnAdaptor | undefined;
    setCallOnAdaptor(value?: CellarV2_5Governance.CallOnAdaptor): void;

    hasRemovePosition(): boolean;
    clearRemovePosition(): void;
    getRemovePosition(): CellarV2_5Governance.RemovePosition | undefined;
    setRemovePosition(value?: CellarV2_5Governance.RemovePosition): void;

    getFunctionCase(): FunctionCall.FunctionCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionCall.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionCall;
    static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
  }

  export namespace FunctionCall {
    export type AsObject = {
      addAdaptorToCatalogue?: CellarV2_5Governance.AddAdaptorToCatalogue.AsObject,
      addPositionToCatalogue?: CellarV2_5Governance.AddPositionToCatalogue.AsObject,
      setRebalanceDeviation?: CellarV2_5Governance.SetRebalanceDeviation.AsObject,
      setStrategistPlatformCut?: CellarV2_5Governance.SetStrategistPlatformCut.AsObject,
      forcePositionOut?: CellarV2_5Governance.ForcePositionOut.AsObject,
      toggleIgnorePause?: CellarV2_5Governance.ToggleIgnorePause.AsObject,
      setSharePriceOracle?: CellarV2_5Governance.SetSharePriceOracle.AsObject,
      increaseShareSupplyCap?: CellarV2_5Governance.IncreaseShareSupplyCap.AsObject,
      setAutomationActions?: CellarV2_5Governance.SetAutomationActions.AsObject,
      cachePriceRouter?: CellarV2_5Governance.CachePriceRouter.AsObject,
      initiateShutdown?: CellarV2_5Governance.InitiateShutdown.AsObject,
      liftShutdown?: CellarV2_5Governance.LiftShutdown.AsObject,
      removeAdaptorFromCatalogue?: CellarV2_5Governance.RemoveAdaptorFromCatalogue.AsObject,
      removePositionFromCatalogue?: CellarV2_5Governance.RemovePositionFromCatalogue.AsObject,
      decreaseShareSupplyCap?: CellarV2_5Governance.DecreaseShareSupplyCap.AsObject,
      setHoldingPosition?: CellarV2_5Governance.SetHoldingPosition.AsObject,
      addPosition?: CellarV2_5Governance.AddPosition.AsObject,
      callOnAdaptor?: CellarV2_5Governance.CallOnAdaptor.AsObject,
      removePosition?: CellarV2_5Governance.RemovePosition.AsObject,
    }

    export enum FunctionCase {
      FUNCTION_NOT_SET = 0,
      ADD_ADAPTOR_TO_CATALOGUE = 1,
      ADD_POSITION_TO_CATALOGUE = 2,
      SET_REBALANCE_DEVIATION = 3,
      SET_STRATEGIST_PLATFORM_CUT = 4,
      FORCE_POSITION_OUT = 5,
      TOGGLE_IGNORE_PAUSE = 6,
      SET_SHARE_PRICE_ORACLE = 7,
      INCREASE_SHARE_SUPPLY_CAP = 8,
      SET_AUTOMATION_ACTIONS = 9,
      CACHE_PRICE_ROUTER = 10,
      INITIATE_SHUTDOWN = 11,
      LIFT_SHUTDOWN = 12,
      REMOVE_ADAPTOR_FROM_CATALOGUE = 13,
      REMOVE_POSITION_FROM_CATALOGUE = 14,
      DECREASE_SHARE_SUPPLY_CAP = 15,
      SET_HOLDING_POSITION = 16,
      ADD_POSITION = 17,
      CALL_ON_ADAPTOR = 18,
      REMOVE_POSITION = 19,
    }
  }

  export class Multicall extends jspb.Message {
    clearFunctionCallsList(): void;
    getFunctionCallsList(): Array<CellarV2_5Governance.FunctionCall>;
    setFunctionCallsList(value: Array<CellarV2_5Governance.FunctionCall>): void;
    addFunctionCalls(value?: CellarV2_5Governance.FunctionCall, index?: number): CellarV2_5Governance.FunctionCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multicall.AsObject;
    static toObject(includeInstance: boolean, msg: Multicall): Multicall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Multicall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Multicall;
    static deserializeBinaryFromReader(message: Multicall, reader: jspb.BinaryReader): Multicall;
  }

  export namespace Multicall {
    export type AsObject = {
      functionCallsList: Array<CellarV2_5Governance.FunctionCall.AsObject>,
    }
  }

  export class AddAdaptorToCatalogue extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAdaptorToCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: AddAdaptorToCatalogue): AddAdaptorToCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAdaptorToCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAdaptorToCatalogue;
    static deserializeBinaryFromReader(message: AddAdaptorToCatalogue, reader: jspb.BinaryReader): AddAdaptorToCatalogue;
  }

  export namespace AddAdaptorToCatalogue {
    export type AsObject = {
      adaptor: string,
    }
  }

  export class AddPositionToCatalogue extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPositionToCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: AddPositionToCatalogue): AddPositionToCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPositionToCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPositionToCatalogue;
    static deserializeBinaryFromReader(message: AddPositionToCatalogue, reader: jspb.BinaryReader): AddPositionToCatalogue;
  }

  export namespace AddPositionToCatalogue {
    export type AsObject = {
      positionId: number,
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

  export class SetStrategistPlatformCut extends jspb.Message {
    getNewCut(): number;
    setNewCut(value: number): void;

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
      newCut: number,
    }
  }

  export class ForcePositionOut extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getPositionId(): number;
    setPositionId(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ForcePositionOut.AsObject;
    static toObject(includeInstance: boolean, msg: ForcePositionOut): ForcePositionOut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ForcePositionOut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ForcePositionOut;
    static deserializeBinaryFromReader(message: ForcePositionOut, reader: jspb.BinaryReader): ForcePositionOut;
  }

  export namespace ForcePositionOut {
    export type AsObject = {
      index: number,
      positionId: number,
      inDebtArray: boolean,
    }
  }

  export class ToggleIgnorePause extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToggleIgnorePause.AsObject;
    static toObject(includeInstance: boolean, msg: ToggleIgnorePause): ToggleIgnorePause.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToggleIgnorePause, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToggleIgnorePause;
    static deserializeBinaryFromReader(message: ToggleIgnorePause, reader: jspb.BinaryReader): ToggleIgnorePause;
  }

  export namespace ToggleIgnorePause {
    export type AsObject = {
    }
  }

  export class SetAutomationActions extends jspb.Message {
    getRegistryId(): string;
    setRegistryId(value: string): void;

    getExpectedAutomationActions(): string;
    setExpectedAutomationActions(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAutomationActions.AsObject;
    static toObject(includeInstance: boolean, msg: SetAutomationActions): SetAutomationActions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAutomationActions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAutomationActions;
    static deserializeBinaryFromReader(message: SetAutomationActions, reader: jspb.BinaryReader): SetAutomationActions;
  }

  export namespace SetAutomationActions {
    export type AsObject = {
      registryId: string,
      expectedAutomationActions: string,
    }
  }

  export class IncreaseShareSupplyCap extends jspb.Message {
    getNewCap(): string;
    setNewCap(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IncreaseShareSupplyCap.AsObject;
    static toObject(includeInstance: boolean, msg: IncreaseShareSupplyCap): IncreaseShareSupplyCap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IncreaseShareSupplyCap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IncreaseShareSupplyCap;
    static deserializeBinaryFromReader(message: IncreaseShareSupplyCap, reader: jspb.BinaryReader): IncreaseShareSupplyCap;
  }

  export namespace IncreaseShareSupplyCap {
    export type AsObject = {
      newCap: string,
    }
  }

  export class SetSharePriceOracle extends jspb.Message {
    getRegistryId(): string;
    setRegistryId(value: string): void;

    getSharePriceOracle(): string;
    setSharePriceOracle(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSharePriceOracle.AsObject;
    static toObject(includeInstance: boolean, msg: SetSharePriceOracle): SetSharePriceOracle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSharePriceOracle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSharePriceOracle;
    static deserializeBinaryFromReader(message: SetSharePriceOracle, reader: jspb.BinaryReader): SetSharePriceOracle;
  }

  export namespace SetSharePriceOracle {
    export type AsObject = {
      registryId: string,
      sharePriceOracle: string,
    }
  }

  export class CachePriceRouter extends jspb.Message {
    getCheckTotalAssets(): boolean;
    setCheckTotalAssets(value: boolean): void;

    getAllowableRange(): number;
    setAllowableRange(value: number): void;

    getExpectedPriceRouter(): string;
    setExpectedPriceRouter(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CachePriceRouter.AsObject;
    static toObject(includeInstance: boolean, msg: CachePriceRouter): CachePriceRouter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CachePriceRouter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CachePriceRouter;
    static deserializeBinaryFromReader(message: CachePriceRouter, reader: jspb.BinaryReader): CachePriceRouter;
  }

  export namespace CachePriceRouter {
    export type AsObject = {
      checkTotalAssets: boolean,
      allowableRange: number,
      expectedPriceRouter: string,
    }
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

  export class RemoveAdaptorFromCatalogue extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveAdaptorFromCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveAdaptorFromCatalogue): RemoveAdaptorFromCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveAdaptorFromCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveAdaptorFromCatalogue;
    static deserializeBinaryFromReader(message: RemoveAdaptorFromCatalogue, reader: jspb.BinaryReader): RemoveAdaptorFromCatalogue;
  }

  export namespace RemoveAdaptorFromCatalogue {
    export type AsObject = {
      adaptor: string,
    }
  }

  export class RemovePositionFromCatalogue extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePositionFromCatalogue.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePositionFromCatalogue): RemovePositionFromCatalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePositionFromCatalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePositionFromCatalogue;
    static deserializeBinaryFromReader(message: RemovePositionFromCatalogue, reader: jspb.BinaryReader): RemovePositionFromCatalogue;
  }

  export namespace RemovePositionFromCatalogue {
    export type AsObject = {
      positionId: number,
    }
  }

  export class DecreaseShareSupplyCap extends jspb.Message {
    getNewCap(): string;
    setNewCap(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DecreaseShareSupplyCap.AsObject;
    static toObject(includeInstance: boolean, msg: DecreaseShareSupplyCap): DecreaseShareSupplyCap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DecreaseShareSupplyCap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DecreaseShareSupplyCap;
    static deserializeBinaryFromReader(message: DecreaseShareSupplyCap, reader: jspb.BinaryReader): DecreaseShareSupplyCap;
  }

  export namespace DecreaseShareSupplyCap {
    export type AsObject = {
      newCap: string,
    }
  }

  export class SetHoldingPosition extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): void;

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
      positionId: number,
    }
  }

  export class AddPosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getPositionId(): number;
    setPositionId(value: number): void;

    getConfigurationData(): Uint8Array | string;
    getConfigurationData_asU8(): Uint8Array;
    getConfigurationData_asB64(): string;
    setConfigurationData(value: Uint8Array | string): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      positionId: number,
      configurationData: Uint8Array | string,
      inDebtArray: boolean,
    }
  }

  export class CallOnAdaptor extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<AdaptorCall>;
    setDataList(value: Array<AdaptorCall>): void;
    addData(value?: AdaptorCall, index?: number): AdaptorCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallOnAdaptor.AsObject;
    static toObject(includeInstance: boolean, msg: CallOnAdaptor): CallOnAdaptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallOnAdaptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallOnAdaptor;
    static deserializeBinaryFromReader(message: CallOnAdaptor, reader: jspb.BinaryReader): CallOnAdaptor;
  }

  export namespace CallOnAdaptor {
    export type AsObject = {
      dataList: Array<AdaptorCall.AsObject>,
    }
  }

  export class RemovePosition extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    getInDebtArray(): boolean;
    setInDebtArray(value: boolean): void;

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
      index: number,
      inDebtArray: boolean,
    }
  }

  export enum CallTypeCase {
    CALL_TYPE_NOT_SET = 0,
    FUNCTION_CALL = 1,
    MULTICALL = 2,
  }
}

export class AdaptorCall extends jspb.Message {
  getAdaptor(): string;
  setAdaptor(value: string): void;

  hasAaveATokenV1Calls(): boolean;
  clearAaveATokenV1Calls(): void;
  getAaveATokenV1Calls(): a_token_pb.AaveATokenAdaptorV1Calls | undefined;
  setAaveATokenV1Calls(value?: a_token_pb.AaveATokenAdaptorV1Calls): void;

  hasAaveDebtTokenV1Calls(): boolean;
  clearAaveDebtTokenV1Calls(): void;
  getAaveDebtTokenV1Calls(): debt_token_pb.AaveDebtTokenAdaptorV1Calls | undefined;
  setAaveDebtTokenV1Calls(value?: debt_token_pb.AaveDebtTokenAdaptorV1Calls): void;

  hasCompoundCTokenV2Calls(): boolean;
  clearCompoundCTokenV2Calls(): void;
  getCompoundCTokenV2Calls(): c_token_pb.CompoundCTokenAdaptorV2Calls | undefined;
  setCompoundCTokenV2Calls(value?: c_token_pb.CompoundCTokenAdaptorV2Calls): void;

  hasAaveATokenV2Calls(): boolean;
  clearAaveATokenV2Calls(): void;
  getAaveATokenV2Calls(): a_token_pb.AaveATokenAdaptorV2Calls | undefined;
  setAaveATokenV2Calls(value?: a_token_pb.AaveATokenAdaptorV2Calls): void;

  hasAaveDebtTokenV2Calls(): boolean;
  clearAaveDebtTokenV2Calls(): void;
  getAaveDebtTokenV2Calls(): debt_token_pb.AaveDebtTokenAdaptorV2Calls | undefined;
  setAaveDebtTokenV2Calls(value?: debt_token_pb.AaveDebtTokenAdaptorV2Calls): void;

  hasAaveV3ATokenV1Calls(): boolean;
  clearAaveV3ATokenV1Calls(): void;
  getAaveV3ATokenV1Calls(): aave_v3_a_token_pb.AaveV3ATokenAdaptorV1Calls | undefined;
  setAaveV3ATokenV1Calls(value?: aave_v3_a_token_pb.AaveV3ATokenAdaptorV1Calls): void;

  hasAaveV3DebtTokenV1Calls(): boolean;
  clearAaveV3DebtTokenV1Calls(): void;
  getAaveV3DebtTokenV1Calls(): aave_v3_debt_token_pb.AaveV3DebtTokenAdaptorV1Calls | undefined;
  setAaveV3DebtTokenV1Calls(value?: aave_v3_debt_token_pb.AaveV3DebtTokenAdaptorV1Calls): void;

  hasOneInchV1Calls(): boolean;
  clearOneInchV1Calls(): void;
  getOneInchV1Calls(): oneinch_pb.OneInchAdaptorV1Calls | undefined;
  setOneInchV1Calls(value?: oneinch_pb.OneInchAdaptorV1Calls): void;

  hasFeesAndReservesV1Calls(): boolean;
  clearFeesAndReservesV1Calls(): void;
  getFeesAndReservesV1Calls(): fees_and_reserves_pb.FeesAndReservesAdaptorV1Calls | undefined;
  setFeesAndReservesV1Calls(value?: fees_and_reserves_pb.FeesAndReservesAdaptorV1Calls): void;

  hasZeroXV1Calls(): boolean;
  clearZeroXV1Calls(): void;
  getZeroXV1Calls(): zero_x_pb.ZeroXAdaptorV1Calls | undefined;
  setZeroXV1Calls(value?: zero_x_pb.ZeroXAdaptorV1Calls): void;

  hasSwapWithUniswapV1Calls(): boolean;
  clearSwapWithUniswapV1Calls(): void;
  getSwapWithUniswapV1Calls(): swap_with_uniswap_pb.SwapWithUniswapAdaptorV1Calls | undefined;
  setSwapWithUniswapV1Calls(value?: swap_with_uniswap_pb.SwapWithUniswapAdaptorV1Calls): void;

  hasVestingSimpleV2Calls(): boolean;
  clearVestingSimpleV2Calls(): void;
  getVestingSimpleV2Calls(): vesting_simple_pb.VestingSimpleAdaptorV2Calls | undefined;
  setVestingSimpleV2Calls(value?: vesting_simple_pb.VestingSimpleAdaptorV2Calls): void;

  hasCellarV1Calls(): boolean;
  clearCellarV1Calls(): void;
  getCellarV1Calls(): cellar_adaptor_pb.CellarAdaptorV1Calls | undefined;
  setCellarV1Calls(value?: cellar_adaptor_pb.CellarAdaptorV1Calls): void;

  hasUniswapV3V2Calls(): boolean;
  clearUniswapV3V2Calls(): void;
  getUniswapV3V2Calls(): uniswap_v3_pb.UniswapV3AdaptorV2Calls | undefined;
  setUniswapV3V2Calls(value?: uniswap_v3_pb.UniswapV3AdaptorV2Calls): void;

  hasAaveV2EnableAssetAsCollateralV1Calls(): boolean;
  clearAaveV2EnableAssetAsCollateralV1Calls(): void;
  getAaveV2EnableAssetAsCollateralV1Calls(): aave_v2_enable_asset_as_collateral_adaptor_pb.AaveV2EnableAssetAsCollateralAdaptorV1Calls | undefined;
  setAaveV2EnableAssetAsCollateralV1Calls(value?: aave_v2_enable_asset_as_collateral_adaptor_pb.AaveV2EnableAssetAsCollateralAdaptorV1Calls): void;

  hasFTokenV1Calls(): boolean;
  clearFTokenV1Calls(): void;
  getFTokenV1Calls(): f_token_pb.FTokenAdaptorV1Calls | undefined;
  setFTokenV1Calls(value?: f_token_pb.FTokenAdaptorV1Calls): void;

  hasMorphoAaveV2ATokenV1Calls(): boolean;
  clearMorphoAaveV2ATokenV1Calls(): void;
  getMorphoAaveV2ATokenV1Calls(): morpho_aave_v2_a_token_pb.MorphoAaveV2ATokenAdaptorV1Calls | undefined;
  setMorphoAaveV2ATokenV1Calls(value?: morpho_aave_v2_a_token_pb.MorphoAaveV2ATokenAdaptorV1Calls): void;

  hasMorphoAaveV2DebtTokenV1Calls(): boolean;
  clearMorphoAaveV2DebtTokenV1Calls(): void;
  getMorphoAaveV2DebtTokenV1Calls(): morpho_aave_v2_debt_token_pb.MorphoAaveV2DebtTokenAdaptorV1Calls | undefined;
  setMorphoAaveV2DebtTokenV1Calls(value?: morpho_aave_v2_debt_token_pb.MorphoAaveV2DebtTokenAdaptorV1Calls): void;

  hasMorphoAaveV3ATokenCollateralV1Calls(): boolean;
  clearMorphoAaveV3ATokenCollateralV1Calls(): void;
  getMorphoAaveV3ATokenCollateralV1Calls(): morpho_aave_v3_a_token_collateral_pb.MorphoAaveV3ATokenCollateralAdaptorV1Calls | undefined;
  setMorphoAaveV3ATokenCollateralV1Calls(value?: morpho_aave_v3_a_token_collateral_pb.MorphoAaveV3ATokenCollateralAdaptorV1Calls): void;

  hasMorphoAaveV3ATokenP2pV1Calls(): boolean;
  clearMorphoAaveV3ATokenP2pV1Calls(): void;
  getMorphoAaveV3ATokenP2pV1Calls(): morpho_aave_v3_a_token_p2p_pb.MorphoAaveV3ATokenP2PAdaptorV1Calls | undefined;
  setMorphoAaveV3ATokenP2pV1Calls(value?: morpho_aave_v3_a_token_p2p_pb.MorphoAaveV3ATokenP2PAdaptorV1Calls): void;

  hasMorphoAaveV3DebtTokenV1Calls(): boolean;
  clearMorphoAaveV3DebtTokenV1Calls(): void;
  getMorphoAaveV3DebtTokenV1Calls(): morpho_aave_v3_debt_token_pb.MorphoAaveV3DebtTokenAdaptorV1Calls | undefined;
  setMorphoAaveV3DebtTokenV1Calls(value?: morpho_aave_v3_debt_token_pb.MorphoAaveV3DebtTokenAdaptorV1Calls): void;

  hasBalancerPoolV1Calls(): boolean;
  clearBalancerPoolV1Calls(): void;
  getBalancerPoolV1Calls(): balancer_pool_pb.BalancerPoolAdaptorV1Calls | undefined;
  setBalancerPoolV1Calls(value?: balancer_pool_pb.BalancerPoolAdaptorV1Calls): void;

  hasLegacyCellarV1Calls(): boolean;
  clearLegacyCellarV1Calls(): void;
  getLegacyCellarV1Calls(): legacy_cellar_adaptor_pb.LegacyCellarAdaptorV1Calls | undefined;
  setLegacyCellarV1Calls(value?: legacy_cellar_adaptor_pb.LegacyCellarAdaptorV1Calls): void;

  hasDebtFTokenV1Calls(): boolean;
  clearDebtFTokenV1Calls(): void;
  getDebtFTokenV1Calls(): debt_f_token_pb.DebtFTokenAdaptorV1Calls | undefined;
  setDebtFTokenV1Calls(value?: debt_f_token_pb.DebtFTokenAdaptorV1Calls): void;

  hasCollateralFTokenV1Calls(): boolean;
  clearCollateralFTokenV1Calls(): void;
  getCollateralFTokenV1Calls(): collateral_f_token_pb.CollateralFTokenAdaptorV1Calls | undefined;
  setCollateralFTokenV1Calls(value?: collateral_f_token_pb.CollateralFTokenAdaptorV1Calls): void;

  hasAaveV3DebtTokenV1FlashLoanCalls(): boolean;
  clearAaveV3DebtTokenV1FlashLoanCalls(): void;
  getAaveV3DebtTokenV1FlashLoanCalls(): aave_v3_debt_token_flash_loan_pb.AaveV3DebtTokenAdaptorV1FlashLoanCalls | undefined;
  setAaveV3DebtTokenV1FlashLoanCalls(value?: aave_v3_debt_token_flash_loan_pb.AaveV3DebtTokenAdaptorV1FlashLoanCalls): void;

  hasBalancerPoolV1FlashLoanCalls(): boolean;
  clearBalancerPoolV1FlashLoanCalls(): void;
  getBalancerPoolV1FlashLoanCalls(): balancer_pool_flash_loan_pb.BalancerPoolAdaptorV1FlashLoanCalls | undefined;
  setBalancerPoolV1FlashLoanCalls(value?: balancer_pool_flash_loan_pb.BalancerPoolAdaptorV1FlashLoanCalls): void;

  hasConvexCurveV1Calls(): boolean;
  clearConvexCurveV1Calls(): void;
  getConvexCurveV1Calls(): convex_curve_pb.ConvexCurveAdaptorV1Calls | undefined;
  setConvexCurveV1Calls(value?: convex_curve_pb.ConvexCurveAdaptorV1Calls): void;

  hasCurveV1Calls(): boolean;
  clearCurveV1Calls(): void;
  getCurveV1Calls(): curve_pb.CurveAdaptorV1Calls | undefined;
  setCurveV1Calls(value?: curve_pb.CurveAdaptorV1Calls): void;

  hasAuraErc4626V1Calls(): boolean;
  clearAuraErc4626V1Calls(): void;
  getAuraErc4626V1Calls(): aura_erc4626_pb.AuraERC4626AdaptorV1Calls | undefined;
  setAuraErc4626V1Calls(value?: aura_erc4626_pb.AuraERC4626AdaptorV1Calls): void;

  hasMorphoBlueCollateralV1Calls(): boolean;
  clearMorphoBlueCollateralV1Calls(): void;
  getMorphoBlueCollateralV1Calls(): morpho_blue_collateral_pb.MorphoBlueCollateralAdaptorV1Calls | undefined;
  setMorphoBlueCollateralV1Calls(value?: morpho_blue_collateral_pb.MorphoBlueCollateralAdaptorV1Calls): void;

  hasMorphoBlueDebtV1Calls(): boolean;
  clearMorphoBlueDebtV1Calls(): void;
  getMorphoBlueDebtV1Calls(): morpho_blue_debt_pb.MorphoBlueDebtAdaptorV1Calls | undefined;
  setMorphoBlueDebtV1Calls(value?: morpho_blue_debt_pb.MorphoBlueDebtAdaptorV1Calls): void;

  hasMorphoBlueSupplyV1Calls(): boolean;
  clearMorphoBlueSupplyV1Calls(): void;
  getMorphoBlueSupplyV1Calls(): morpho_blue_supply_pb.MorphoBlueSupplyAdaptorV1Calls | undefined;
  setMorphoBlueSupplyV1Calls(value?: morpho_blue_supply_pb.MorphoBlueSupplyAdaptorV1Calls): void;

  hasErc4626V1Calls(): boolean;
  clearErc4626V1Calls(): void;
  getErc4626V1Calls(): erc4626_pb.ERC4626AdaptorV1Calls | undefined;
  setErc4626V1Calls(value?: erc4626_pb.ERC4626AdaptorV1Calls): void;

  hasStakingV1Calls(): boolean;
  clearStakingV1Calls(): void;
  getStakingV1Calls(): staking_pb.StakingAdaptorV1Calls | undefined;
  setStakingV1Calls(value?: staking_pb.StakingAdaptorV1Calls): void;

  getCallDataCase(): AdaptorCall.CallDataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdaptorCall.AsObject;
  static toObject(includeInstance: boolean, msg: AdaptorCall): AdaptorCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdaptorCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdaptorCall;
  static deserializeBinaryFromReader(message: AdaptorCall, reader: jspb.BinaryReader): AdaptorCall;
}

export namespace AdaptorCall {
  export type AsObject = {
    adaptor: string,
    aaveATokenV1Calls?: a_token_pb.AaveATokenAdaptorV1Calls.AsObject,
    aaveDebtTokenV1Calls?: debt_token_pb.AaveDebtTokenAdaptorV1Calls.AsObject,
    compoundCTokenV2Calls?: c_token_pb.CompoundCTokenAdaptorV2Calls.AsObject,
    aaveATokenV2Calls?: a_token_pb.AaveATokenAdaptorV2Calls.AsObject,
    aaveDebtTokenV2Calls?: debt_token_pb.AaveDebtTokenAdaptorV2Calls.AsObject,
    aaveV3ATokenV1Calls?: aave_v3_a_token_pb.AaveV3ATokenAdaptorV1Calls.AsObject,
    aaveV3DebtTokenV1Calls?: aave_v3_debt_token_pb.AaveV3DebtTokenAdaptorV1Calls.AsObject,
    oneInchV1Calls?: oneinch_pb.OneInchAdaptorV1Calls.AsObject,
    feesAndReservesV1Calls?: fees_and_reserves_pb.FeesAndReservesAdaptorV1Calls.AsObject,
    zeroXV1Calls?: zero_x_pb.ZeroXAdaptorV1Calls.AsObject,
    swapWithUniswapV1Calls?: swap_with_uniswap_pb.SwapWithUniswapAdaptorV1Calls.AsObject,
    vestingSimpleV2Calls?: vesting_simple_pb.VestingSimpleAdaptorV2Calls.AsObject,
    cellarV1Calls?: cellar_adaptor_pb.CellarAdaptorV1Calls.AsObject,
    uniswapV3V2Calls?: uniswap_v3_pb.UniswapV3AdaptorV2Calls.AsObject,
    aaveV2EnableAssetAsCollateralV1Calls?: aave_v2_enable_asset_as_collateral_adaptor_pb.AaveV2EnableAssetAsCollateralAdaptorV1Calls.AsObject,
    fTokenV1Calls?: f_token_pb.FTokenAdaptorV1Calls.AsObject,
    morphoAaveV2ATokenV1Calls?: morpho_aave_v2_a_token_pb.MorphoAaveV2ATokenAdaptorV1Calls.AsObject,
    morphoAaveV2DebtTokenV1Calls?: morpho_aave_v2_debt_token_pb.MorphoAaveV2DebtTokenAdaptorV1Calls.AsObject,
    morphoAaveV3ATokenCollateralV1Calls?: morpho_aave_v3_a_token_collateral_pb.MorphoAaveV3ATokenCollateralAdaptorV1Calls.AsObject,
    morphoAaveV3ATokenP2pV1Calls?: morpho_aave_v3_a_token_p2p_pb.MorphoAaveV3ATokenP2PAdaptorV1Calls.AsObject,
    morphoAaveV3DebtTokenV1Calls?: morpho_aave_v3_debt_token_pb.MorphoAaveV3DebtTokenAdaptorV1Calls.AsObject,
    balancerPoolV1Calls?: balancer_pool_pb.BalancerPoolAdaptorV1Calls.AsObject,
    legacyCellarV1Calls?: legacy_cellar_adaptor_pb.LegacyCellarAdaptorV1Calls.AsObject,
    debtFTokenV1Calls?: debt_f_token_pb.DebtFTokenAdaptorV1Calls.AsObject,
    collateralFTokenV1Calls?: collateral_f_token_pb.CollateralFTokenAdaptorV1Calls.AsObject,
    aaveV3DebtTokenV1FlashLoanCalls?: aave_v3_debt_token_flash_loan_pb.AaveV3DebtTokenAdaptorV1FlashLoanCalls.AsObject,
    balancerPoolV1FlashLoanCalls?: balancer_pool_flash_loan_pb.BalancerPoolAdaptorV1FlashLoanCalls.AsObject,
    convexCurveV1Calls?: convex_curve_pb.ConvexCurveAdaptorV1Calls.AsObject,
    curveV1Calls?: curve_pb.CurveAdaptorV1Calls.AsObject,
    auraErc4626V1Calls?: aura_erc4626_pb.AuraERC4626AdaptorV1Calls.AsObject,
    morphoBlueCollateralV1Calls?: morpho_blue_collateral_pb.MorphoBlueCollateralAdaptorV1Calls.AsObject,
    morphoBlueDebtV1Calls?: morpho_blue_debt_pb.MorphoBlueDebtAdaptorV1Calls.AsObject,
    morphoBlueSupplyV1Calls?: morpho_blue_supply_pb.MorphoBlueSupplyAdaptorV1Calls.AsObject,
    erc4626V1Calls?: erc4626_pb.ERC4626AdaptorV1Calls.AsObject,
    stakingV1Calls?: staking_pb.StakingAdaptorV1Calls.AsObject,
  }

  export enum CallDataCase {
    CALL_DATA_NOT_SET = 0,
    AAVE_A_TOKEN_V1_CALLS = 2,
    AAVE_DEBT_TOKEN_V1_CALLS = 3,
    COMPOUND_C_TOKEN_V2_CALLS = 4,
    AAVE_A_TOKEN_V2_CALLS = 5,
    AAVE_DEBT_TOKEN_V2_CALLS = 6,
    AAVE_V3_A_TOKEN_V1_CALLS = 7,
    AAVE_V3_DEBT_TOKEN_V1_CALLS = 8,
    ONE_INCH_V1_CALLS = 9,
    FEES_AND_RESERVES_V1_CALLS = 10,
    ZERO_X_V1_CALLS = 11,
    SWAP_WITH_UNISWAP_V1_CALLS = 12,
    VESTING_SIMPLE_V2_CALLS = 13,
    CELLAR_V1_CALLS = 14,
    UNISWAP_V3_V2_CALLS = 15,
    AAVE_V2_ENABLE_ASSET_AS_COLLATERAL_V1_CALLS = 16,
    F_TOKEN_V1_CALLS = 17,
    MORPHO_AAVE_V2_A_TOKEN_V1_CALLS = 18,
    MORPHO_AAVE_V2_DEBT_TOKEN_V1_CALLS = 19,
    MORPHO_AAVE_V3_A_TOKEN_COLLATERAL_V1_CALLS = 20,
    MORPHO_AAVE_V3_A_TOKEN_P2P_V1_CALLS = 21,
    MORPHO_AAVE_V3_DEBT_TOKEN_V1_CALLS = 22,
    BALANCER_POOL_V1_CALLS = 23,
    LEGACY_CELLAR_V1_CALLS = 24,
    DEBT_F_TOKEN_V1_CALLS = 25,
    COLLATERAL_F_TOKEN_V1_CALLS = 26,
    AAVE_V3_DEBT_TOKEN_V1_FLASH_LOAN_CALLS = 27,
    BALANCER_POOL_V1_FLASH_LOAN_CALLS = 28,
    CONVEX_CURVE_V1_CALLS = 29,
    CURVE_V1_CALLS = 30,
    AURA_ERC4626_V1_CALLS = 31,
    MORPHO_BLUE_COLLATERAL_V1_CALLS = 32,
    MORPHO_BLUE_DEBT_V1_CALLS = 33,
    MORPHO_BLUE_SUPPLY_V1_CALLS = 34,
    ERC4626_V1_CALLS = 35,
    STAKING_V1_CALLS = 36,
  }
}

