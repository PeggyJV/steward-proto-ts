/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";
import Long = require("long");

export const protobufPackage = "steward.v4";

/** Represents call data for the FeesAndReserves and FeesAndReservesAdaptor contracts. */
export interface FeesAndReservesAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `updatePerformanceFee(uint32 performanceFee)` */
  updatePerformanceFees?:
    | FeesAndReservesAdaptorV1_UpdatePerformanceFees
    | undefined;
  /** Represents function `updateManagementFee(uint32 managementFee)` */
  updateManagementFees?:
    | FeesAndReservesAdaptorV1_UpdateManagementFees
    | undefined;
  /** Represents function `changeUpkeepFrequency(uint64 newFrequency)` */
  changeUpkeepFrequency?:
    | FeesAndReservesAdaptorV1_ChangeUpkeepFrequency
    | undefined;
  /** Represents function `changeUpkeepMaxGas(uint64 newMaxGas)` */
  changeUpkeepMaxGas?:
    | FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas
    | undefined;
  /** Represents function `setupMetaData(uint32 managementFee, uint32 performanceFee)` */
  setupMetaData?:
    | FeesAndReservesAdaptorV1_SetupMetaData
    | undefined;
  /** Represents function `addAssetsToReserves(uint256 amount)` */
  addAssetsToReserves?:
    | FeesAndReservesAdaptorV1_AddAssetsToReserves
    | undefined;
  /** Represents function `withdrawAssetsFromReserves(uint256 amount)` */
  withdrawAssetsFromReserves?:
    | FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves
    | undefined;
  /** Represents function `prepareFees(uint256 amount)` */
  prepareFees?: FeesAndReservesAdaptorV1_PrepareFees | undefined;
}

/**
 * Allows the owner to update a Cellar's performance fee.
 *
 * Represents function `updatePerformanceFee(uint32 performanceFee)`
 */
export interface FeesAndReservesAdaptorV1_UpdatePerformanceFees {
  performanceFee: number;
}

/**
 * Allows the owner to update a Cellar's management fee.
 *
 * Represents function `updateManagementFee(uint32 managementFee)`
 */
export interface FeesAndReservesAdaptorV1_UpdateManagementFees {
  managementFee: number;
}

/**
 * Allows the owner to update a Cellar's upkeep frequency.
 *
 * Represents function `changeUpkeepFrequency(uint64 newFrequency)`
 */
export interface FeesAndReservesAdaptorV1_ChangeUpkeepFrequency {
  newFrequency: number;
}

/**
 * Allows the owner to update a Cellar's upkeep max gas.
 *
 * Represents function `changeUpkeepMaxGas(uint64 newMaxGas)`
 */
export interface FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas {
  newMaxGas: number;
}

/**
 * Allows the owner to set the Cellar's fee metadata
 *
 * Represents function `setupMetaData(uint32 managementFee, uint32 performanceFee)`
 */
export interface FeesAndReservesAdaptorV1_SetupMetaData {
  managementFee: number;
  performanceFee: number;
}

/**
 * Allows the owner to add assets to the Cellar's reserves
 *
 * Represents function `addAssetsToReserves(uint256 amount)`
 */
export interface FeesAndReservesAdaptorV1_AddAssetsToReserves {
  amount: string;
}

/**
 * Allows the owner to withdraw assets from the Cellar's reserves
 *
 * Represents function `withdrawAssetsFromReserves(uint256 amount)`
 */
export interface FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves {
  amount: string;
}

/**
 * Allows the owner to prepare fees to be split between the platform, strategist, and protocol
 *
 * Represents function `prepareFees(uint256 amount)`
 */
export interface FeesAndReservesAdaptorV1_PrepareFees {
  amount: string;
}

export interface FeesAndReservesAdaptorV1Calls {
  calls: FeesAndReservesAdaptorV1[];
}

function createBaseFeesAndReservesAdaptorV1(): FeesAndReservesAdaptorV1 {
  return {
    revokeApproval: undefined,
    updatePerformanceFees: undefined,
    updateManagementFees: undefined,
    changeUpkeepFrequency: undefined,
    changeUpkeepMaxGas: undefined,
    setupMetaData: undefined,
    addAssetsToReserves: undefined,
    withdrawAssetsFromReserves: undefined,
    prepareFees: undefined,
  };
}

export const FeesAndReservesAdaptorV1 = {
  encode(message: FeesAndReservesAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.updatePerformanceFees !== undefined) {
      FeesAndReservesAdaptorV1_UpdatePerformanceFees.encode(message.updatePerformanceFees, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.updateManagementFees !== undefined) {
      FeesAndReservesAdaptorV1_UpdateManagementFees.encode(message.updateManagementFees, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.changeUpkeepFrequency !== undefined) {
      FeesAndReservesAdaptorV1_ChangeUpkeepFrequency.encode(message.changeUpkeepFrequency, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.changeUpkeepMaxGas !== undefined) {
      FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas.encode(message.changeUpkeepMaxGas, writer.uint32(42).fork()).ldelim();
    }
    if (message.setupMetaData !== undefined) {
      FeesAndReservesAdaptorV1_SetupMetaData.encode(message.setupMetaData, writer.uint32(50).fork()).ldelim();
    }
    if (message.addAssetsToReserves !== undefined) {
      FeesAndReservesAdaptorV1_AddAssetsToReserves.encode(message.addAssetsToReserves, writer.uint32(58).fork())
        .ldelim();
    }
    if (message.withdrawAssetsFromReserves !== undefined) {
      FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves.encode(
        message.withdrawAssetsFromReserves,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.prepareFees !== undefined) {
      FeesAndReservesAdaptorV1_PrepareFees.encode(message.prepareFees, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1();
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

          message.updatePerformanceFees = FeesAndReservesAdaptorV1_UpdatePerformanceFees.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateManagementFees = FeesAndReservesAdaptorV1_UpdateManagementFees.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.changeUpkeepFrequency = FeesAndReservesAdaptorV1_ChangeUpkeepFrequency.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.changeUpkeepMaxGas = FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setupMetaData = FeesAndReservesAdaptorV1_SetupMetaData.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.addAssetsToReserves = FeesAndReservesAdaptorV1_AddAssetsToReserves.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.withdrawAssetsFromReserves = FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.prepareFees = FeesAndReservesAdaptorV1_PrepareFees.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      updatePerformanceFees: isSet(object.updatePerformanceFees)
        ? FeesAndReservesAdaptorV1_UpdatePerformanceFees.fromJSON(object.updatePerformanceFees)
        : undefined,
      updateManagementFees: isSet(object.updateManagementFees)
        ? FeesAndReservesAdaptorV1_UpdateManagementFees.fromJSON(object.updateManagementFees)
        : undefined,
      changeUpkeepFrequency: isSet(object.changeUpkeepFrequency)
        ? FeesAndReservesAdaptorV1_ChangeUpkeepFrequency.fromJSON(object.changeUpkeepFrequency)
        : undefined,
      changeUpkeepMaxGas: isSet(object.changeUpkeepMaxGas)
        ? FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas.fromJSON(object.changeUpkeepMaxGas)
        : undefined,
      setupMetaData: isSet(object.setupMetaData)
        ? FeesAndReservesAdaptorV1_SetupMetaData.fromJSON(object.setupMetaData)
        : undefined,
      addAssetsToReserves: isSet(object.addAssetsToReserves)
        ? FeesAndReservesAdaptorV1_AddAssetsToReserves.fromJSON(object.addAssetsToReserves)
        : undefined,
      withdrawAssetsFromReserves: isSet(object.withdrawAssetsFromReserves)
        ? FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves.fromJSON(object.withdrawAssetsFromReserves)
        : undefined,
      prepareFees: isSet(object.prepareFees)
        ? FeesAndReservesAdaptorV1_PrepareFees.fromJSON(object.prepareFees)
        : undefined,
    };
  },

  toJSON(message: FeesAndReservesAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.updatePerformanceFees !== undefined) {
      obj.updatePerformanceFees = FeesAndReservesAdaptorV1_UpdatePerformanceFees.toJSON(message.updatePerformanceFees);
    }
    if (message.updateManagementFees !== undefined) {
      obj.updateManagementFees = FeesAndReservesAdaptorV1_UpdateManagementFees.toJSON(message.updateManagementFees);
    }
    if (message.changeUpkeepFrequency !== undefined) {
      obj.changeUpkeepFrequency = FeesAndReservesAdaptorV1_ChangeUpkeepFrequency.toJSON(message.changeUpkeepFrequency);
    }
    if (message.changeUpkeepMaxGas !== undefined) {
      obj.changeUpkeepMaxGas = FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas.toJSON(message.changeUpkeepMaxGas);
    }
    if (message.setupMetaData !== undefined) {
      obj.setupMetaData = FeesAndReservesAdaptorV1_SetupMetaData.toJSON(message.setupMetaData);
    }
    if (message.addAssetsToReserves !== undefined) {
      obj.addAssetsToReserves = FeesAndReservesAdaptorV1_AddAssetsToReserves.toJSON(message.addAssetsToReserves);
    }
    if (message.withdrawAssetsFromReserves !== undefined) {
      obj.withdrawAssetsFromReserves = FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves.toJSON(
        message.withdrawAssetsFromReserves,
      );
    }
    if (message.prepareFees !== undefined) {
      obj.prepareFees = FeesAndReservesAdaptorV1_PrepareFees.toJSON(message.prepareFees);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1>, I>>(base?: I): FeesAndReservesAdaptorV1 {
    return FeesAndReservesAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1>, I>>(object: I): FeesAndReservesAdaptorV1 {
    const message = createBaseFeesAndReservesAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.updatePerformanceFees =
      (object.updatePerformanceFees !== undefined && object.updatePerformanceFees !== null)
        ? FeesAndReservesAdaptorV1_UpdatePerformanceFees.fromPartial(object.updatePerformanceFees)
        : undefined;
    message.updateManagementFees = (object.updateManagementFees !== undefined && object.updateManagementFees !== null)
      ? FeesAndReservesAdaptorV1_UpdateManagementFees.fromPartial(object.updateManagementFees)
      : undefined;
    message.changeUpkeepFrequency =
      (object.changeUpkeepFrequency !== undefined && object.changeUpkeepFrequency !== null)
        ? FeesAndReservesAdaptorV1_ChangeUpkeepFrequency.fromPartial(object.changeUpkeepFrequency)
        : undefined;
    message.changeUpkeepMaxGas = (object.changeUpkeepMaxGas !== undefined && object.changeUpkeepMaxGas !== null)
      ? FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas.fromPartial(object.changeUpkeepMaxGas)
      : undefined;
    message.setupMetaData = (object.setupMetaData !== undefined && object.setupMetaData !== null)
      ? FeesAndReservesAdaptorV1_SetupMetaData.fromPartial(object.setupMetaData)
      : undefined;
    message.addAssetsToReserves = (object.addAssetsToReserves !== undefined && object.addAssetsToReserves !== null)
      ? FeesAndReservesAdaptorV1_AddAssetsToReserves.fromPartial(object.addAssetsToReserves)
      : undefined;
    message.withdrawAssetsFromReserves =
      (object.withdrawAssetsFromReserves !== undefined && object.withdrawAssetsFromReserves !== null)
        ? FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves.fromPartial(object.withdrawAssetsFromReserves)
        : undefined;
    message.prepareFees = (object.prepareFees !== undefined && object.prepareFees !== null)
      ? FeesAndReservesAdaptorV1_PrepareFees.fromPartial(object.prepareFees)
      : undefined;
    return message;
  },
};

function createBaseFeesAndReservesAdaptorV1_UpdatePerformanceFees(): FeesAndReservesAdaptorV1_UpdatePerformanceFees {
  return { performanceFee: 0 };
}

export const FeesAndReservesAdaptorV1_UpdatePerformanceFees = {
  encode(
    message: FeesAndReservesAdaptorV1_UpdatePerformanceFees,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.performanceFee !== 0) {
      writer.uint32(8).uint32(message.performanceFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1_UpdatePerformanceFees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1_UpdatePerformanceFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.performanceFee = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1_UpdatePerformanceFees {
    return { performanceFee: isSet(object.performanceFee) ? globalThis.Number(object.performanceFee) : 0 };
  },

  toJSON(message: FeesAndReservesAdaptorV1_UpdatePerformanceFees): unknown {
    const obj: any = {};
    if (message.performanceFee !== 0) {
      obj.performanceFee = Math.round(message.performanceFee);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_UpdatePerformanceFees>, I>>(
    base?: I,
  ): FeesAndReservesAdaptorV1_UpdatePerformanceFees {
    return FeesAndReservesAdaptorV1_UpdatePerformanceFees.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_UpdatePerformanceFees>, I>>(
    object: I,
  ): FeesAndReservesAdaptorV1_UpdatePerformanceFees {
    const message = createBaseFeesAndReservesAdaptorV1_UpdatePerformanceFees();
    message.performanceFee = object.performanceFee ?? 0;
    return message;
  },
};

function createBaseFeesAndReservesAdaptorV1_UpdateManagementFees(): FeesAndReservesAdaptorV1_UpdateManagementFees {
  return { managementFee: 0 };
}

export const FeesAndReservesAdaptorV1_UpdateManagementFees = {
  encode(message: FeesAndReservesAdaptorV1_UpdateManagementFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.managementFee !== 0) {
      writer.uint32(8).uint32(message.managementFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1_UpdateManagementFees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1_UpdateManagementFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.managementFee = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1_UpdateManagementFees {
    return { managementFee: isSet(object.managementFee) ? globalThis.Number(object.managementFee) : 0 };
  },

  toJSON(message: FeesAndReservesAdaptorV1_UpdateManagementFees): unknown {
    const obj: any = {};
    if (message.managementFee !== 0) {
      obj.managementFee = Math.round(message.managementFee);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_UpdateManagementFees>, I>>(
    base?: I,
  ): FeesAndReservesAdaptorV1_UpdateManagementFees {
    return FeesAndReservesAdaptorV1_UpdateManagementFees.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_UpdateManagementFees>, I>>(
    object: I,
  ): FeesAndReservesAdaptorV1_UpdateManagementFees {
    const message = createBaseFeesAndReservesAdaptorV1_UpdateManagementFees();
    message.managementFee = object.managementFee ?? 0;
    return message;
  },
};

function createBaseFeesAndReservesAdaptorV1_ChangeUpkeepFrequency(): FeesAndReservesAdaptorV1_ChangeUpkeepFrequency {
  return { newFrequency: 0 };
}

export const FeesAndReservesAdaptorV1_ChangeUpkeepFrequency = {
  encode(
    message: FeesAndReservesAdaptorV1_ChangeUpkeepFrequency,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.newFrequency !== 0) {
      writer.uint32(8).uint64(message.newFrequency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1_ChangeUpkeepFrequency {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1_ChangeUpkeepFrequency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newFrequency = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1_ChangeUpkeepFrequency {
    return { newFrequency: isSet(object.newFrequency) ? globalThis.Number(object.newFrequency) : 0 };
  },

  toJSON(message: FeesAndReservesAdaptorV1_ChangeUpkeepFrequency): unknown {
    const obj: any = {};
    if (message.newFrequency !== 0) {
      obj.newFrequency = Math.round(message.newFrequency);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_ChangeUpkeepFrequency>, I>>(
    base?: I,
  ): FeesAndReservesAdaptorV1_ChangeUpkeepFrequency {
    return FeesAndReservesAdaptorV1_ChangeUpkeepFrequency.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_ChangeUpkeepFrequency>, I>>(
    object: I,
  ): FeesAndReservesAdaptorV1_ChangeUpkeepFrequency {
    const message = createBaseFeesAndReservesAdaptorV1_ChangeUpkeepFrequency();
    message.newFrequency = object.newFrequency ?? 0;
    return message;
  },
};

function createBaseFeesAndReservesAdaptorV1_ChangeUpkeepMaxGas(): FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas {
  return { newMaxGas: 0 };
}

export const FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas = {
  encode(message: FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newMaxGas !== 0) {
      writer.uint32(8).uint64(message.newMaxGas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1_ChangeUpkeepMaxGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newMaxGas = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas {
    return { newMaxGas: isSet(object.newMaxGas) ? globalThis.Number(object.newMaxGas) : 0 };
  },

  toJSON(message: FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas): unknown {
    const obj: any = {};
    if (message.newMaxGas !== 0) {
      obj.newMaxGas = Math.round(message.newMaxGas);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas>, I>>(
    base?: I,
  ): FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas {
    return FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas>, I>>(
    object: I,
  ): FeesAndReservesAdaptorV1_ChangeUpkeepMaxGas {
    const message = createBaseFeesAndReservesAdaptorV1_ChangeUpkeepMaxGas();
    message.newMaxGas = object.newMaxGas ?? 0;
    return message;
  },
};

function createBaseFeesAndReservesAdaptorV1_SetupMetaData(): FeesAndReservesAdaptorV1_SetupMetaData {
  return { managementFee: 0, performanceFee: 0 };
}

export const FeesAndReservesAdaptorV1_SetupMetaData = {
  encode(message: FeesAndReservesAdaptorV1_SetupMetaData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.managementFee !== 0) {
      writer.uint32(8).uint32(message.managementFee);
    }
    if (message.performanceFee !== 0) {
      writer.uint32(16).uint32(message.performanceFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1_SetupMetaData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1_SetupMetaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.managementFee = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.performanceFee = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1_SetupMetaData {
    return {
      managementFee: isSet(object.managementFee) ? globalThis.Number(object.managementFee) : 0,
      performanceFee: isSet(object.performanceFee) ? globalThis.Number(object.performanceFee) : 0,
    };
  },

  toJSON(message: FeesAndReservesAdaptorV1_SetupMetaData): unknown {
    const obj: any = {};
    if (message.managementFee !== 0) {
      obj.managementFee = Math.round(message.managementFee);
    }
    if (message.performanceFee !== 0) {
      obj.performanceFee = Math.round(message.performanceFee);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_SetupMetaData>, I>>(
    base?: I,
  ): FeesAndReservesAdaptorV1_SetupMetaData {
    return FeesAndReservesAdaptorV1_SetupMetaData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_SetupMetaData>, I>>(
    object: I,
  ): FeesAndReservesAdaptorV1_SetupMetaData {
    const message = createBaseFeesAndReservesAdaptorV1_SetupMetaData();
    message.managementFee = object.managementFee ?? 0;
    message.performanceFee = object.performanceFee ?? 0;
    return message;
  },
};

function createBaseFeesAndReservesAdaptorV1_AddAssetsToReserves(): FeesAndReservesAdaptorV1_AddAssetsToReserves {
  return { amount: "" };
}

export const FeesAndReservesAdaptorV1_AddAssetsToReserves = {
  encode(message: FeesAndReservesAdaptorV1_AddAssetsToReserves, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1_AddAssetsToReserves {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1_AddAssetsToReserves();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1_AddAssetsToReserves {
    return { amount: isSet(object.amount) ? globalThis.String(object.amount) : "" };
  },

  toJSON(message: FeesAndReservesAdaptorV1_AddAssetsToReserves): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_AddAssetsToReserves>, I>>(
    base?: I,
  ): FeesAndReservesAdaptorV1_AddAssetsToReserves {
    return FeesAndReservesAdaptorV1_AddAssetsToReserves.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_AddAssetsToReserves>, I>>(
    object: I,
  ): FeesAndReservesAdaptorV1_AddAssetsToReserves {
    const message = createBaseFeesAndReservesAdaptorV1_AddAssetsToReserves();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseFeesAndReservesAdaptorV1_WithdrawAssetsFromReserves(): FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves {
  return { amount: "" };
}

export const FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves = {
  encode(
    message: FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1_WithdrawAssetsFromReserves();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves {
    return { amount: isSet(object.amount) ? globalThis.String(object.amount) : "" };
  },

  toJSON(message: FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves>, I>>(
    base?: I,
  ): FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves {
    return FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves>, I>>(
    object: I,
  ): FeesAndReservesAdaptorV1_WithdrawAssetsFromReserves {
    const message = createBaseFeesAndReservesAdaptorV1_WithdrawAssetsFromReserves();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseFeesAndReservesAdaptorV1_PrepareFees(): FeesAndReservesAdaptorV1_PrepareFees {
  return { amount: "" };
}

export const FeesAndReservesAdaptorV1_PrepareFees = {
  encode(message: FeesAndReservesAdaptorV1_PrepareFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1_PrepareFees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1_PrepareFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1_PrepareFees {
    return { amount: isSet(object.amount) ? globalThis.String(object.amount) : "" };
  },

  toJSON(message: FeesAndReservesAdaptorV1_PrepareFees): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_PrepareFees>, I>>(
    base?: I,
  ): FeesAndReservesAdaptorV1_PrepareFees {
    return FeesAndReservesAdaptorV1_PrepareFees.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1_PrepareFees>, I>>(
    object: I,
  ): FeesAndReservesAdaptorV1_PrepareFees {
    const message = createBaseFeesAndReservesAdaptorV1_PrepareFees();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseFeesAndReservesAdaptorV1Calls(): FeesAndReservesAdaptorV1Calls {
  return { calls: [] };
}

export const FeesAndReservesAdaptorV1Calls = {
  encode(message: FeesAndReservesAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      FeesAndReservesAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesAndReservesAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesAndReservesAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(FeesAndReservesAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeesAndReservesAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => FeesAndReservesAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FeesAndReservesAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => FeesAndReservesAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1Calls>, I>>(base?: I): FeesAndReservesAdaptorV1Calls {
    return FeesAndReservesAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeesAndReservesAdaptorV1Calls>, I>>(
    object: I,
  ): FeesAndReservesAdaptorV1Calls {
    const message = createBaseFeesAndReservesAdaptorV1Calls();
    message.calls = object.calls?.map((e) => FeesAndReservesAdaptorV1.fromPartial(e)) || [];
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
