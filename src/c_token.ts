/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Compound C Token adaptor V2, managing lending positions on Compound. */
export interface CompoundCTokenAdaptorV2 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToCompound(CErc20 market, uint256 amountToDeposit)` */
  depositToCompound?:
    | CompoundCTokenAdaptorV2_DepositToCompound
    | undefined;
  /** Represents function `withdrawFromCompound(CErc20 market, uint256 amountToWithdraw)` */
  withdrawFromCompound?:
    | CompoundCTokenAdaptorV2_WithdrawFromCompound
    | undefined;
  /** Represents function `claimComp()` */
  claimComp?: CompoundCTokenAdaptorV2_ClaimComp | undefined;
}

/**
 * Allows strategists to lend assets on Compound.
 *
 * Represents function `depositToCompound(CErc20 market, uint256 amountToDeposit)`
 */
export interface CompoundCTokenAdaptorV2_DepositToCompound {
  market: string;
  amountToDeposit: string;
}

/**
 * Allows strategists to withdraw assets from Compound.
 *
 * Represents function `withdrawFromCompound(CErc20 market, uint256 amountToWithdraw)`
 */
export interface CompoundCTokenAdaptorV2_WithdrawFromCompound {
  market: string;
  amountToWithdraw: string;
}

/**
 * Allows strategists to claim COMP rewards.
 *
 * Represents function `claimComp()`
 */
export interface CompoundCTokenAdaptorV2_ClaimComp {
}

export interface CompoundCTokenAdaptorV2Calls {
  calls: CompoundCTokenAdaptorV2[];
}

function createBaseCompoundCTokenAdaptorV2(): CompoundCTokenAdaptorV2 {
  return {
    revokeApproval: undefined,
    depositToCompound: undefined,
    withdrawFromCompound: undefined,
    claimComp: undefined,
  };
}

export const CompoundCTokenAdaptorV2 = {
  encode(message: CompoundCTokenAdaptorV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositToCompound !== undefined) {
      CompoundCTokenAdaptorV2_DepositToCompound.encode(message.depositToCompound, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawFromCompound !== undefined) {
      CompoundCTokenAdaptorV2_WithdrawFromCompound.encode(message.withdrawFromCompound, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.claimComp !== undefined) {
      CompoundCTokenAdaptorV2_ClaimComp.encode(message.claimComp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompoundCTokenAdaptorV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompoundCTokenAdaptorV2();
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

          message.depositToCompound = CompoundCTokenAdaptorV2_DepositToCompound.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromCompound = CompoundCTokenAdaptorV2_WithdrawFromCompound.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.claimComp = CompoundCTokenAdaptorV2_ClaimComp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompoundCTokenAdaptorV2 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToCompound: isSet(object.depositToCompound)
        ? CompoundCTokenAdaptorV2_DepositToCompound.fromJSON(object.depositToCompound)
        : undefined,
      withdrawFromCompound: isSet(object.withdrawFromCompound)
        ? CompoundCTokenAdaptorV2_WithdrawFromCompound.fromJSON(object.withdrawFromCompound)
        : undefined,
      claimComp: isSet(object.claimComp) ? CompoundCTokenAdaptorV2_ClaimComp.fromJSON(object.claimComp) : undefined,
    };
  },

  toJSON(message: CompoundCTokenAdaptorV2): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToCompound !== undefined) {
      obj.depositToCompound = CompoundCTokenAdaptorV2_DepositToCompound.toJSON(message.depositToCompound);
    }
    if (message.withdrawFromCompound !== undefined) {
      obj.withdrawFromCompound = CompoundCTokenAdaptorV2_WithdrawFromCompound.toJSON(message.withdrawFromCompound);
    }
    if (message.claimComp !== undefined) {
      obj.claimComp = CompoundCTokenAdaptorV2_ClaimComp.toJSON(message.claimComp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2>, I>>(base?: I): CompoundCTokenAdaptorV2 {
    return CompoundCTokenAdaptorV2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2>, I>>(object: I): CompoundCTokenAdaptorV2 {
    const message = createBaseCompoundCTokenAdaptorV2();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToCompound = (object.depositToCompound !== undefined && object.depositToCompound !== null)
      ? CompoundCTokenAdaptorV2_DepositToCompound.fromPartial(object.depositToCompound)
      : undefined;
    message.withdrawFromCompound = (object.withdrawFromCompound !== undefined && object.withdrawFromCompound !== null)
      ? CompoundCTokenAdaptorV2_WithdrawFromCompound.fromPartial(object.withdrawFromCompound)
      : undefined;
    message.claimComp = (object.claimComp !== undefined && object.claimComp !== null)
      ? CompoundCTokenAdaptorV2_ClaimComp.fromPartial(object.claimComp)
      : undefined;
    return message;
  },
};

function createBaseCompoundCTokenAdaptorV2_DepositToCompound(): CompoundCTokenAdaptorV2_DepositToCompound {
  return { market: "", amountToDeposit: "" };
}

export const CompoundCTokenAdaptorV2_DepositToCompound = {
  encode(message: CompoundCTokenAdaptorV2_DepositToCompound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.amountToDeposit !== "") {
      writer.uint32(18).string(message.amountToDeposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompoundCTokenAdaptorV2_DepositToCompound {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompoundCTokenAdaptorV2_DepositToCompound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountToDeposit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompoundCTokenAdaptorV2_DepositToCompound {
    return {
      market: isSet(object.market) ? globalThis.String(object.market) : "",
      amountToDeposit: isSet(object.amountToDeposit) ? globalThis.String(object.amountToDeposit) : "",
    };
  },

  toJSON(message: CompoundCTokenAdaptorV2_DepositToCompound): unknown {
    const obj: any = {};
    if (message.market !== "") {
      obj.market = message.market;
    }
    if (message.amountToDeposit !== "") {
      obj.amountToDeposit = message.amountToDeposit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2_DepositToCompound>, I>>(
    base?: I,
  ): CompoundCTokenAdaptorV2_DepositToCompound {
    return CompoundCTokenAdaptorV2_DepositToCompound.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2_DepositToCompound>, I>>(
    object: I,
  ): CompoundCTokenAdaptorV2_DepositToCompound {
    const message = createBaseCompoundCTokenAdaptorV2_DepositToCompound();
    message.market = object.market ?? "";
    message.amountToDeposit = object.amountToDeposit ?? "";
    return message;
  },
};

function createBaseCompoundCTokenAdaptorV2_WithdrawFromCompound(): CompoundCTokenAdaptorV2_WithdrawFromCompound {
  return { market: "", amountToWithdraw: "" };
}

export const CompoundCTokenAdaptorV2_WithdrawFromCompound = {
  encode(message: CompoundCTokenAdaptorV2_WithdrawFromCompound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.amountToWithdraw !== "") {
      writer.uint32(18).string(message.amountToWithdraw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompoundCTokenAdaptorV2_WithdrawFromCompound {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompoundCTokenAdaptorV2_WithdrawFromCompound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountToWithdraw = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompoundCTokenAdaptorV2_WithdrawFromCompound {
    return {
      market: isSet(object.market) ? globalThis.String(object.market) : "",
      amountToWithdraw: isSet(object.amountToWithdraw) ? globalThis.String(object.amountToWithdraw) : "",
    };
  },

  toJSON(message: CompoundCTokenAdaptorV2_WithdrawFromCompound): unknown {
    const obj: any = {};
    if (message.market !== "") {
      obj.market = message.market;
    }
    if (message.amountToWithdraw !== "") {
      obj.amountToWithdraw = message.amountToWithdraw;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2_WithdrawFromCompound>, I>>(
    base?: I,
  ): CompoundCTokenAdaptorV2_WithdrawFromCompound {
    return CompoundCTokenAdaptorV2_WithdrawFromCompound.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2_WithdrawFromCompound>, I>>(
    object: I,
  ): CompoundCTokenAdaptorV2_WithdrawFromCompound {
    const message = createBaseCompoundCTokenAdaptorV2_WithdrawFromCompound();
    message.market = object.market ?? "";
    message.amountToWithdraw = object.amountToWithdraw ?? "";
    return message;
  },
};

function createBaseCompoundCTokenAdaptorV2_ClaimComp(): CompoundCTokenAdaptorV2_ClaimComp {
  return {};
}

export const CompoundCTokenAdaptorV2_ClaimComp = {
  encode(_: CompoundCTokenAdaptorV2_ClaimComp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompoundCTokenAdaptorV2_ClaimComp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompoundCTokenAdaptorV2_ClaimComp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CompoundCTokenAdaptorV2_ClaimComp {
    return {};
  },

  toJSON(_: CompoundCTokenAdaptorV2_ClaimComp): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2_ClaimComp>, I>>(
    base?: I,
  ): CompoundCTokenAdaptorV2_ClaimComp {
    return CompoundCTokenAdaptorV2_ClaimComp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2_ClaimComp>, I>>(
    _: I,
  ): CompoundCTokenAdaptorV2_ClaimComp {
    const message = createBaseCompoundCTokenAdaptorV2_ClaimComp();
    return message;
  },
};

function createBaseCompoundCTokenAdaptorV2Calls(): CompoundCTokenAdaptorV2Calls {
  return { calls: [] };
}

export const CompoundCTokenAdaptorV2Calls = {
  encode(message: CompoundCTokenAdaptorV2Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      CompoundCTokenAdaptorV2.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompoundCTokenAdaptorV2Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompoundCTokenAdaptorV2Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(CompoundCTokenAdaptorV2.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompoundCTokenAdaptorV2Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => CompoundCTokenAdaptorV2.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CompoundCTokenAdaptorV2Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => CompoundCTokenAdaptorV2.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2Calls>, I>>(base?: I): CompoundCTokenAdaptorV2Calls {
    return CompoundCTokenAdaptorV2Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompoundCTokenAdaptorV2Calls>, I>>(object: I): CompoundCTokenAdaptorV2Calls {
    const message = createBaseCompoundCTokenAdaptorV2Calls();
    message.calls = object.calls?.map((e) => CompoundCTokenAdaptorV2.fromPartial(e)) || [];
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
