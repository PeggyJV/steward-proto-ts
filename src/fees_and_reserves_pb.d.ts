// package: steward.v4
// file: fees_and_reserves.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class FeesAndReservesAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasUpdatePerformanceFees(): boolean;
  clearUpdatePerformanceFees(): void;
  getUpdatePerformanceFees(): FeesAndReservesAdaptorV1.UpdatePerformanceFees | undefined;
  setUpdatePerformanceFees(value?: FeesAndReservesAdaptorV1.UpdatePerformanceFees): void;

  hasUpdateManagementFees(): boolean;
  clearUpdateManagementFees(): void;
  getUpdateManagementFees(): FeesAndReservesAdaptorV1.UpdateManagementFees | undefined;
  setUpdateManagementFees(value?: FeesAndReservesAdaptorV1.UpdateManagementFees): void;

  hasChangeUpkeepFrequency(): boolean;
  clearChangeUpkeepFrequency(): void;
  getChangeUpkeepFrequency(): FeesAndReservesAdaptorV1.ChangeUpkeepFrequency | undefined;
  setChangeUpkeepFrequency(value?: FeesAndReservesAdaptorV1.ChangeUpkeepFrequency): void;

  hasChangeUpkeepMaxGas(): boolean;
  clearChangeUpkeepMaxGas(): void;
  getChangeUpkeepMaxGas(): FeesAndReservesAdaptorV1.ChangeUpkeepMaxGas | undefined;
  setChangeUpkeepMaxGas(value?: FeesAndReservesAdaptorV1.ChangeUpkeepMaxGas): void;

  hasSetupMetaData(): boolean;
  clearSetupMetaData(): void;
  getSetupMetaData(): FeesAndReservesAdaptorV1.SetupMetaData | undefined;
  setSetupMetaData(value?: FeesAndReservesAdaptorV1.SetupMetaData): void;

  hasAddAssetsToReserves(): boolean;
  clearAddAssetsToReserves(): void;
  getAddAssetsToReserves(): FeesAndReservesAdaptorV1.AddAssetsToReserves | undefined;
  setAddAssetsToReserves(value?: FeesAndReservesAdaptorV1.AddAssetsToReserves): void;

  hasWithdrawAssetsFromReserves(): boolean;
  clearWithdrawAssetsFromReserves(): void;
  getWithdrawAssetsFromReserves(): FeesAndReservesAdaptorV1.WithdrawAssetsFromReserves | undefined;
  setWithdrawAssetsFromReserves(value?: FeesAndReservesAdaptorV1.WithdrawAssetsFromReserves): void;

  hasPrepareFees(): boolean;
  clearPrepareFees(): void;
  getPrepareFees(): FeesAndReservesAdaptorV1.PrepareFees | undefined;
  setPrepareFees(value?: FeesAndReservesAdaptorV1.PrepareFees): void;

  getFunctionCase(): FeesAndReservesAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeesAndReservesAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: FeesAndReservesAdaptorV1): FeesAndReservesAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeesAndReservesAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeesAndReservesAdaptorV1;
  static deserializeBinaryFromReader(message: FeesAndReservesAdaptorV1, reader: jspb.BinaryReader): FeesAndReservesAdaptorV1;
}

export namespace FeesAndReservesAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    updatePerformanceFees?: FeesAndReservesAdaptorV1.UpdatePerformanceFees.AsObject,
    updateManagementFees?: FeesAndReservesAdaptorV1.UpdateManagementFees.AsObject,
    changeUpkeepFrequency?: FeesAndReservesAdaptorV1.ChangeUpkeepFrequency.AsObject,
    changeUpkeepMaxGas?: FeesAndReservesAdaptorV1.ChangeUpkeepMaxGas.AsObject,
    setupMetaData?: FeesAndReservesAdaptorV1.SetupMetaData.AsObject,
    addAssetsToReserves?: FeesAndReservesAdaptorV1.AddAssetsToReserves.AsObject,
    withdrawAssetsFromReserves?: FeesAndReservesAdaptorV1.WithdrawAssetsFromReserves.AsObject,
    prepareFees?: FeesAndReservesAdaptorV1.PrepareFees.AsObject,
  }

  export class UpdatePerformanceFees extends jspb.Message {
    getPerformanceFee(): number;
    setPerformanceFee(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePerformanceFees.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePerformanceFees): UpdatePerformanceFees.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePerformanceFees, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePerformanceFees;
    static deserializeBinaryFromReader(message: UpdatePerformanceFees, reader: jspb.BinaryReader): UpdatePerformanceFees;
  }

  export namespace UpdatePerformanceFees {
    export type AsObject = {
      performanceFee: number,
    }
  }

  export class UpdateManagementFees extends jspb.Message {
    getManagementFee(): number;
    setManagementFee(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateManagementFees.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateManagementFees): UpdateManagementFees.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateManagementFees, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateManagementFees;
    static deserializeBinaryFromReader(message: UpdateManagementFees, reader: jspb.BinaryReader): UpdateManagementFees;
  }

  export namespace UpdateManagementFees {
    export type AsObject = {
      managementFee: number,
    }
  }

  export class ChangeUpkeepFrequency extends jspb.Message {
    getNewFrequency(): number;
    setNewFrequency(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeUpkeepFrequency.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeUpkeepFrequency): ChangeUpkeepFrequency.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeUpkeepFrequency, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeUpkeepFrequency;
    static deserializeBinaryFromReader(message: ChangeUpkeepFrequency, reader: jspb.BinaryReader): ChangeUpkeepFrequency;
  }

  export namespace ChangeUpkeepFrequency {
    export type AsObject = {
      newFrequency: number,
    }
  }

  export class ChangeUpkeepMaxGas extends jspb.Message {
    getNewMaxGas(): number;
    setNewMaxGas(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeUpkeepMaxGas.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeUpkeepMaxGas): ChangeUpkeepMaxGas.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeUpkeepMaxGas, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeUpkeepMaxGas;
    static deserializeBinaryFromReader(message: ChangeUpkeepMaxGas, reader: jspb.BinaryReader): ChangeUpkeepMaxGas;
  }

  export namespace ChangeUpkeepMaxGas {
    export type AsObject = {
      newMaxGas: number,
    }
  }

  export class SetupMetaData extends jspb.Message {
    getManagementFee(): number;
    setManagementFee(value: number): void;

    getPerformanceFee(): number;
    setPerformanceFee(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetupMetaData.AsObject;
    static toObject(includeInstance: boolean, msg: SetupMetaData): SetupMetaData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetupMetaData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetupMetaData;
    static deserializeBinaryFromReader(message: SetupMetaData, reader: jspb.BinaryReader): SetupMetaData;
  }

  export namespace SetupMetaData {
    export type AsObject = {
      managementFee: number,
      performanceFee: number,
    }
  }

  export class AddAssetsToReserves extends jspb.Message {
    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAssetsToReserves.AsObject;
    static toObject(includeInstance: boolean, msg: AddAssetsToReserves): AddAssetsToReserves.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAssetsToReserves, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAssetsToReserves;
    static deserializeBinaryFromReader(message: AddAssetsToReserves, reader: jspb.BinaryReader): AddAssetsToReserves;
  }

  export namespace AddAssetsToReserves {
    export type AsObject = {
      amount: string,
    }
  }

  export class WithdrawAssetsFromReserves extends jspb.Message {
    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawAssetsFromReserves.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawAssetsFromReserves): WithdrawAssetsFromReserves.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawAssetsFromReserves, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawAssetsFromReserves;
    static deserializeBinaryFromReader(message: WithdrawAssetsFromReserves, reader: jspb.BinaryReader): WithdrawAssetsFromReserves;
  }

  export namespace WithdrawAssetsFromReserves {
    export type AsObject = {
      amount: string,
    }
  }

  export class PrepareFees extends jspb.Message {
    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrepareFees.AsObject;
    static toObject(includeInstance: boolean, msg: PrepareFees): PrepareFees.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrepareFees, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrepareFees;
    static deserializeBinaryFromReader(message: PrepareFees, reader: jspb.BinaryReader): PrepareFees;
  }

  export namespace PrepareFees {
    export type AsObject = {
      amount: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    UPDATE_PERFORMANCE_FEES = 2,
    UPDATE_MANAGEMENT_FEES = 3,
    CHANGE_UPKEEP_FREQUENCY = 4,
    CHANGE_UPKEEP_MAX_GAS = 5,
    SETUP_META_DATA = 6,
    ADD_ASSETS_TO_RESERVES = 7,
    WITHDRAW_ASSETS_FROM_RESERVES = 8,
    PREPARE_FEES = 9,
  }
}

export class FeesAndReservesAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<FeesAndReservesAdaptorV1>;
  setCallsList(value: Array<FeesAndReservesAdaptorV1>): void;
  addCalls(value?: FeesAndReservesAdaptorV1, index?: number): FeesAndReservesAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeesAndReservesAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: FeesAndReservesAdaptorV1Calls): FeesAndReservesAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeesAndReservesAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeesAndReservesAdaptorV1Calls;
  static deserializeBinaryFromReader(message: FeesAndReservesAdaptorV1Calls, reader: jspb.BinaryReader): FeesAndReservesAdaptorV1Calls;
}

export namespace FeesAndReservesAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<FeesAndReservesAdaptorV1.AsObject>,
  }
}

