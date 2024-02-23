/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Vesting Simple adaptor */
export interface VestingSimpleAdaptorV2 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToVesting(VestingSimple vestingContract, uint256 amountToDeposit)` */
  depositToVesting?:
    | VestingSimpleAdaptorV2_DepositToVesting
    | undefined;
  /** Represents function `withdrawFromVesting(VestingSimple vestingContract, uint256 depositId, uint256 amountToWithdraw)` */
  withdrawFromVesting?:
    | VestingSimpleAdaptorV2_WithdrawFromVesting
    | undefined;
  /** Represents function `withdrawAnyFromVesting(VestingSimple vestingContract, uint256 amountToWithdraw)` */
  withdrawAnyFromVesting?:
    | VestingSimpleAdaptorV2_WithdrawAnyFromVesting
    | undefined;
  /** Represents function `withdrawAllFromVesting(VestingSimple vestingContract)` */
  withdrawAllFromVesting?: VestingSimpleAdaptorV2_WithdrawAllFromVesting | undefined;
}

/**
 * Allows strategists to deposit tokens to the vesting contract. By passing a max uint256 for amountToDeposit, the cellar will
 * deposit its entire balance (appropriate in most cases).
 *
 * Represents function `depositToVesting(VestingSimple vestingContract, uint256 amountToDeposit)`
 */
export interface VestingSimpleAdaptorV2_DepositToVesting {
  vestingContract: string;
  amount: string;
}

/**
 * Allows strategists to deposit tokens to the vesting contract. By passing a max uint256 for amountToDeposit, the cellar will
 * deposit its entire balance (appropriate in most cases).
 *
 * Represents function `withdrawFromVesting(VestingSimple vestingContract, uint256 depositId, uint256 amountToWithdraw)`
 */
export interface VestingSimpleAdaptorV2_WithdrawFromVesting {
  vestingContract: string;
  depositId: string;
  amount: string;
}

/**
 * Withdraw a single deposit from vesting. This will not affect the cellar's TVL because any deposit must already have vested, and
 * will be reported in balanceOf. Will revert if not enough tokens are available based on amountToWithdraw.
 *
 * Represents function `withdrawAnyFromVesting(VestingSimple vestingContract, uint256 amountToWithdraw)`
 */
export interface VestingSimpleAdaptorV2_WithdrawAnyFromVesting {
  vestingContract: string;
  amount: string;
}

/**
 * Withdraw a certain amount of tokens from vesting, from any deposit. This will not affect the cellar's TVL because any deposit must
 * already have vested, and will be reported in balanceOf. Will revert if not enough tokens are available based on amountToWithdraw.
 *
 * Represents function `withdrawAllFromVesting(VestingSimple vestingContract)`
 */
export interface VestingSimpleAdaptorV2_WithdrawAllFromVesting {
  vestingContract: string;
}

export interface VestingSimpleAdaptorV2Calls {
  calls: VestingSimpleAdaptorV2[];
}

function createBaseVestingSimpleAdaptorV2(): VestingSimpleAdaptorV2 {
  return {
    revokeApproval: undefined,
    depositToVesting: undefined,
    withdrawFromVesting: undefined,
    withdrawAnyFromVesting: undefined,
    withdrawAllFromVesting: undefined,
  };
}

export const VestingSimpleAdaptorV2 = {
  encode(message: VestingSimpleAdaptorV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositToVesting !== undefined) {
      VestingSimpleAdaptorV2_DepositToVesting.encode(message.depositToVesting, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawFromVesting !== undefined) {
      VestingSimpleAdaptorV2_WithdrawFromVesting.encode(message.withdrawFromVesting, writer.uint32(26).fork()).ldelim();
    }
    if (message.withdrawAnyFromVesting !== undefined) {
      VestingSimpleAdaptorV2_WithdrawAnyFromVesting.encode(message.withdrawAnyFromVesting, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.withdrawAllFromVesting !== undefined) {
      VestingSimpleAdaptorV2_WithdrawAllFromVesting.encode(message.withdrawAllFromVesting, writer.uint32(42).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingSimpleAdaptorV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingSimpleAdaptorV2();
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

          message.depositToVesting = VestingSimpleAdaptorV2_DepositToVesting.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromVesting = VestingSimpleAdaptorV2_WithdrawFromVesting.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.withdrawAnyFromVesting = VestingSimpleAdaptorV2_WithdrawAnyFromVesting.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.withdrawAllFromVesting = VestingSimpleAdaptorV2_WithdrawAllFromVesting.decode(
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

  fromJSON(object: any): VestingSimpleAdaptorV2 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToVesting: isSet(object.depositToVesting)
        ? VestingSimpleAdaptorV2_DepositToVesting.fromJSON(object.depositToVesting)
        : undefined,
      withdrawFromVesting: isSet(object.withdrawFromVesting)
        ? VestingSimpleAdaptorV2_WithdrawFromVesting.fromJSON(object.withdrawFromVesting)
        : undefined,
      withdrawAnyFromVesting: isSet(object.withdrawAnyFromVesting)
        ? VestingSimpleAdaptorV2_WithdrawAnyFromVesting.fromJSON(object.withdrawAnyFromVesting)
        : undefined,
      withdrawAllFromVesting: isSet(object.withdrawAllFromVesting)
        ? VestingSimpleAdaptorV2_WithdrawAllFromVesting.fromJSON(object.withdrawAllFromVesting)
        : undefined,
    };
  },

  toJSON(message: VestingSimpleAdaptorV2): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToVesting !== undefined) {
      obj.depositToVesting = VestingSimpleAdaptorV2_DepositToVesting.toJSON(message.depositToVesting);
    }
    if (message.withdrawFromVesting !== undefined) {
      obj.withdrawFromVesting = VestingSimpleAdaptorV2_WithdrawFromVesting.toJSON(message.withdrawFromVesting);
    }
    if (message.withdrawAnyFromVesting !== undefined) {
      obj.withdrawAnyFromVesting = VestingSimpleAdaptorV2_WithdrawAnyFromVesting.toJSON(message.withdrawAnyFromVesting);
    }
    if (message.withdrawAllFromVesting !== undefined) {
      obj.withdrawAllFromVesting = VestingSimpleAdaptorV2_WithdrawAllFromVesting.toJSON(message.withdrawAllFromVesting);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VestingSimpleAdaptorV2>, I>>(base?: I): VestingSimpleAdaptorV2 {
    return VestingSimpleAdaptorV2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VestingSimpleAdaptorV2>, I>>(object: I): VestingSimpleAdaptorV2 {
    const message = createBaseVestingSimpleAdaptorV2();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToVesting = (object.depositToVesting !== undefined && object.depositToVesting !== null)
      ? VestingSimpleAdaptorV2_DepositToVesting.fromPartial(object.depositToVesting)
      : undefined;
    message.withdrawFromVesting = (object.withdrawFromVesting !== undefined && object.withdrawFromVesting !== null)
      ? VestingSimpleAdaptorV2_WithdrawFromVesting.fromPartial(object.withdrawFromVesting)
      : undefined;
    message.withdrawAnyFromVesting =
      (object.withdrawAnyFromVesting !== undefined && object.withdrawAnyFromVesting !== null)
        ? VestingSimpleAdaptorV2_WithdrawAnyFromVesting.fromPartial(object.withdrawAnyFromVesting)
        : undefined;
    message.withdrawAllFromVesting =
      (object.withdrawAllFromVesting !== undefined && object.withdrawAllFromVesting !== null)
        ? VestingSimpleAdaptorV2_WithdrawAllFromVesting.fromPartial(object.withdrawAllFromVesting)
        : undefined;
    return message;
  },
};

function createBaseVestingSimpleAdaptorV2_DepositToVesting(): VestingSimpleAdaptorV2_DepositToVesting {
  return { vestingContract: "", amount: "" };
}

export const VestingSimpleAdaptorV2_DepositToVesting = {
  encode(message: VestingSimpleAdaptorV2_DepositToVesting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vestingContract !== "") {
      writer.uint32(10).string(message.vestingContract);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingSimpleAdaptorV2_DepositToVesting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingSimpleAdaptorV2_DepositToVesting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vestingContract = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): VestingSimpleAdaptorV2_DepositToVesting {
    return {
      vestingContract: isSet(object.vestingContract) ? globalThis.String(object.vestingContract) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: VestingSimpleAdaptorV2_DepositToVesting): unknown {
    const obj: any = {};
    if (message.vestingContract !== "") {
      obj.vestingContract = message.vestingContract;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VestingSimpleAdaptorV2_DepositToVesting>, I>>(
    base?: I,
  ): VestingSimpleAdaptorV2_DepositToVesting {
    return VestingSimpleAdaptorV2_DepositToVesting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VestingSimpleAdaptorV2_DepositToVesting>, I>>(
    object: I,
  ): VestingSimpleAdaptorV2_DepositToVesting {
    const message = createBaseVestingSimpleAdaptorV2_DepositToVesting();
    message.vestingContract = object.vestingContract ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseVestingSimpleAdaptorV2_WithdrawFromVesting(): VestingSimpleAdaptorV2_WithdrawFromVesting {
  return { vestingContract: "", depositId: "", amount: "" };
}

export const VestingSimpleAdaptorV2_WithdrawFromVesting = {
  encode(message: VestingSimpleAdaptorV2_WithdrawFromVesting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vestingContract !== "") {
      writer.uint32(10).string(message.vestingContract);
    }
    if (message.depositId !== "") {
      writer.uint32(18).string(message.depositId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingSimpleAdaptorV2_WithdrawFromVesting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingSimpleAdaptorV2_WithdrawFromVesting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vestingContract = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.depositId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): VestingSimpleAdaptorV2_WithdrawFromVesting {
    return {
      vestingContract: isSet(object.vestingContract) ? globalThis.String(object.vestingContract) : "",
      depositId: isSet(object.depositId) ? globalThis.String(object.depositId) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: VestingSimpleAdaptorV2_WithdrawFromVesting): unknown {
    const obj: any = {};
    if (message.vestingContract !== "") {
      obj.vestingContract = message.vestingContract;
    }
    if (message.depositId !== "") {
      obj.depositId = message.depositId;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VestingSimpleAdaptorV2_WithdrawFromVesting>, I>>(
    base?: I,
  ): VestingSimpleAdaptorV2_WithdrawFromVesting {
    return VestingSimpleAdaptorV2_WithdrawFromVesting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VestingSimpleAdaptorV2_WithdrawFromVesting>, I>>(
    object: I,
  ): VestingSimpleAdaptorV2_WithdrawFromVesting {
    const message = createBaseVestingSimpleAdaptorV2_WithdrawFromVesting();
    message.vestingContract = object.vestingContract ?? "";
    message.depositId = object.depositId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseVestingSimpleAdaptorV2_WithdrawAnyFromVesting(): VestingSimpleAdaptorV2_WithdrawAnyFromVesting {
  return { vestingContract: "", amount: "" };
}

export const VestingSimpleAdaptorV2_WithdrawAnyFromVesting = {
  encode(message: VestingSimpleAdaptorV2_WithdrawAnyFromVesting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vestingContract !== "") {
      writer.uint32(10).string(message.vestingContract);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingSimpleAdaptorV2_WithdrawAnyFromVesting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingSimpleAdaptorV2_WithdrawAnyFromVesting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vestingContract = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): VestingSimpleAdaptorV2_WithdrawAnyFromVesting {
    return {
      vestingContract: isSet(object.vestingContract) ? globalThis.String(object.vestingContract) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: VestingSimpleAdaptorV2_WithdrawAnyFromVesting): unknown {
    const obj: any = {};
    if (message.vestingContract !== "") {
      obj.vestingContract = message.vestingContract;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VestingSimpleAdaptorV2_WithdrawAnyFromVesting>, I>>(
    base?: I,
  ): VestingSimpleAdaptorV2_WithdrawAnyFromVesting {
    return VestingSimpleAdaptorV2_WithdrawAnyFromVesting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VestingSimpleAdaptorV2_WithdrawAnyFromVesting>, I>>(
    object: I,
  ): VestingSimpleAdaptorV2_WithdrawAnyFromVesting {
    const message = createBaseVestingSimpleAdaptorV2_WithdrawAnyFromVesting();
    message.vestingContract = object.vestingContract ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseVestingSimpleAdaptorV2_WithdrawAllFromVesting(): VestingSimpleAdaptorV2_WithdrawAllFromVesting {
  return { vestingContract: "" };
}

export const VestingSimpleAdaptorV2_WithdrawAllFromVesting = {
  encode(message: VestingSimpleAdaptorV2_WithdrawAllFromVesting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vestingContract !== "") {
      writer.uint32(10).string(message.vestingContract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingSimpleAdaptorV2_WithdrawAllFromVesting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingSimpleAdaptorV2_WithdrawAllFromVesting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vestingContract = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VestingSimpleAdaptorV2_WithdrawAllFromVesting {
    return { vestingContract: isSet(object.vestingContract) ? globalThis.String(object.vestingContract) : "" };
  },

  toJSON(message: VestingSimpleAdaptorV2_WithdrawAllFromVesting): unknown {
    const obj: any = {};
    if (message.vestingContract !== "") {
      obj.vestingContract = message.vestingContract;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VestingSimpleAdaptorV2_WithdrawAllFromVesting>, I>>(
    base?: I,
  ): VestingSimpleAdaptorV2_WithdrawAllFromVesting {
    return VestingSimpleAdaptorV2_WithdrawAllFromVesting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VestingSimpleAdaptorV2_WithdrawAllFromVesting>, I>>(
    object: I,
  ): VestingSimpleAdaptorV2_WithdrawAllFromVesting {
    const message = createBaseVestingSimpleAdaptorV2_WithdrawAllFromVesting();
    message.vestingContract = object.vestingContract ?? "";
    return message;
  },
};

function createBaseVestingSimpleAdaptorV2Calls(): VestingSimpleAdaptorV2Calls {
  return { calls: [] };
}

export const VestingSimpleAdaptorV2Calls = {
  encode(message: VestingSimpleAdaptorV2Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      VestingSimpleAdaptorV2.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingSimpleAdaptorV2Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingSimpleAdaptorV2Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(VestingSimpleAdaptorV2.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VestingSimpleAdaptorV2Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => VestingSimpleAdaptorV2.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VestingSimpleAdaptorV2Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => VestingSimpleAdaptorV2.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VestingSimpleAdaptorV2Calls>, I>>(base?: I): VestingSimpleAdaptorV2Calls {
    return VestingSimpleAdaptorV2Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VestingSimpleAdaptorV2Calls>, I>>(object: I): VestingSimpleAdaptorV2Calls {
    const message = createBaseVestingSimpleAdaptorV2Calls();
    message.calls = object.calls?.map((e) => VestingSimpleAdaptorV2.fromPartial(e)) || [];
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
