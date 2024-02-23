/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Convex Curve adaptor V1 */
export interface ConvexCurveAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositLPTInConvexAndStake(uint256 _pid, address baseRewardPool, ERC20 _lpt, CurvePool _pool, bytes4 _selector, uint256 _amount)` */
  depositLptInConvexAndStake?:
    | ConvexCurveAdaptorV1_DepositLPTInConvexAndStake
    | undefined;
  /** Represents function `withdrawFromBaseRewardPoolAsLPTaddress(_baseRewardPool, uint256 _amount, bool _claim)` */
  withdrawFromBaseRewardPoolAsLpt?:
    | ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT
    | undefined;
  /** Represents function `getRewards(address _baseRewardPool, bool _claimExtras)` */
  getRewards?: ConvexCurveAdaptorV1_GetRewards | undefined;
}

/**
 * Allows strategists to deposit and stake LPTs into Convex markets via the respective Convex market Booster contract
 *
 * Represents function `depositLPTInConvexAndStake(uint256 _pid, address baseRewardPool, ERC20 _lpt, CurvePool _pool, bytes4 _selector, uint256 _amount)`
 */
export interface ConvexCurveAdaptorV1_DepositLPTInConvexAndStake {
  pid: string;
  baseRewardPool: string;
  lpt: string;
  pool: string;
  selector: string;
  amountToDeposit: string;
}

/**
 * Allows strategists to withdraw from Convex markets via Booster contract w/ or w/o claiming rewards
 *
 * Represents function `withdrawFromBaseRewardPoolAsLPTaddress(_baseRewardPool, uint256 _amount, bool _claim)`
 */
export interface ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT {
  baseRewardPool: string;
  amountToWithdraw: string;
  claim: boolean;
}

/**
 * Allows strategists to get rewards for an Convex Booster without withdrawing/unwrapping from Convex market
 *
 * Represents function `getRewards(address _baseRewardPool, bool _claimExtras)`
 */
export interface ConvexCurveAdaptorV1_GetRewards {
  baseRewardPool: string;
  claimExtras: boolean;
}

export interface ConvexCurveAdaptorV1Calls {
  calls: ConvexCurveAdaptorV1[];
}

function createBaseConvexCurveAdaptorV1(): ConvexCurveAdaptorV1 {
  return {
    revokeApproval: undefined,
    depositLptInConvexAndStake: undefined,
    withdrawFromBaseRewardPoolAsLpt: undefined,
    getRewards: undefined,
  };
}

export const ConvexCurveAdaptorV1 = {
  encode(message: ConvexCurveAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositLptInConvexAndStake !== undefined) {
      ConvexCurveAdaptorV1_DepositLPTInConvexAndStake.encode(
        message.depositLptInConvexAndStake,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.withdrawFromBaseRewardPoolAsLpt !== undefined) {
      ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT.encode(
        message.withdrawFromBaseRewardPoolAsLpt,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.getRewards !== undefined) {
      ConvexCurveAdaptorV1_GetRewards.encode(message.getRewards, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvexCurveAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvexCurveAdaptorV1();
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

          message.depositLptInConvexAndStake = ConvexCurveAdaptorV1_DepositLPTInConvexAndStake.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromBaseRewardPoolAsLpt = ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getRewards = ConvexCurveAdaptorV1_GetRewards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConvexCurveAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositLptInConvexAndStake: isSet(object.depositLptInConvexAndStake)
        ? ConvexCurveAdaptorV1_DepositLPTInConvexAndStake.fromJSON(object.depositLptInConvexAndStake)
        : undefined,
      withdrawFromBaseRewardPoolAsLpt: isSet(object.withdrawFromBaseRewardPoolAsLpt)
        ? ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT.fromJSON(object.withdrawFromBaseRewardPoolAsLpt)
        : undefined,
      getRewards: isSet(object.getRewards) ? ConvexCurveAdaptorV1_GetRewards.fromJSON(object.getRewards) : undefined,
    };
  },

  toJSON(message: ConvexCurveAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositLptInConvexAndStake !== undefined) {
      obj.depositLptInConvexAndStake = ConvexCurveAdaptorV1_DepositLPTInConvexAndStake.toJSON(
        message.depositLptInConvexAndStake,
      );
    }
    if (message.withdrawFromBaseRewardPoolAsLpt !== undefined) {
      obj.withdrawFromBaseRewardPoolAsLpt = ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT.toJSON(
        message.withdrawFromBaseRewardPoolAsLpt,
      );
    }
    if (message.getRewards !== undefined) {
      obj.getRewards = ConvexCurveAdaptorV1_GetRewards.toJSON(message.getRewards);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConvexCurveAdaptorV1>, I>>(base?: I): ConvexCurveAdaptorV1 {
    return ConvexCurveAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConvexCurveAdaptorV1>, I>>(object: I): ConvexCurveAdaptorV1 {
    const message = createBaseConvexCurveAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositLptInConvexAndStake =
      (object.depositLptInConvexAndStake !== undefined && object.depositLptInConvexAndStake !== null)
        ? ConvexCurveAdaptorV1_DepositLPTInConvexAndStake.fromPartial(object.depositLptInConvexAndStake)
        : undefined;
    message.withdrawFromBaseRewardPoolAsLpt =
      (object.withdrawFromBaseRewardPoolAsLpt !== undefined && object.withdrawFromBaseRewardPoolAsLpt !== null)
        ? ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT.fromPartial(object.withdrawFromBaseRewardPoolAsLpt)
        : undefined;
    message.getRewards = (object.getRewards !== undefined && object.getRewards !== null)
      ? ConvexCurveAdaptorV1_GetRewards.fromPartial(object.getRewards)
      : undefined;
    return message;
  },
};

function createBaseConvexCurveAdaptorV1_DepositLPTInConvexAndStake(): ConvexCurveAdaptorV1_DepositLPTInConvexAndStake {
  return { pid: "", baseRewardPool: "", lpt: "", pool: "", selector: "", amountToDeposit: "" };
}

export const ConvexCurveAdaptorV1_DepositLPTInConvexAndStake = {
  encode(
    message: ConvexCurveAdaptorV1_DepositLPTInConvexAndStake,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pid !== "") {
      writer.uint32(10).string(message.pid);
    }
    if (message.baseRewardPool !== "") {
      writer.uint32(18).string(message.baseRewardPool);
    }
    if (message.lpt !== "") {
      writer.uint32(26).string(message.lpt);
    }
    if (message.pool !== "") {
      writer.uint32(34).string(message.pool);
    }
    if (message.selector !== "") {
      writer.uint32(42).string(message.selector);
    }
    if (message.amountToDeposit !== "") {
      writer.uint32(50).string(message.amountToDeposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvexCurveAdaptorV1_DepositLPTInConvexAndStake {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvexCurveAdaptorV1_DepositLPTInConvexAndStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.baseRewardPool = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lpt = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pool = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.selector = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): ConvexCurveAdaptorV1_DepositLPTInConvexAndStake {
    return {
      pid: isSet(object.pid) ? globalThis.String(object.pid) : "",
      baseRewardPool: isSet(object.baseRewardPool) ? globalThis.String(object.baseRewardPool) : "",
      lpt: isSet(object.lpt) ? globalThis.String(object.lpt) : "",
      pool: isSet(object.pool) ? globalThis.String(object.pool) : "",
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
      amountToDeposit: isSet(object.amountToDeposit) ? globalThis.String(object.amountToDeposit) : "",
    };
  },

  toJSON(message: ConvexCurveAdaptorV1_DepositLPTInConvexAndStake): unknown {
    const obj: any = {};
    if (message.pid !== "") {
      obj.pid = message.pid;
    }
    if (message.baseRewardPool !== "") {
      obj.baseRewardPool = message.baseRewardPool;
    }
    if (message.lpt !== "") {
      obj.lpt = message.lpt;
    }
    if (message.pool !== "") {
      obj.pool = message.pool;
    }
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.amountToDeposit !== "") {
      obj.amountToDeposit = message.amountToDeposit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConvexCurveAdaptorV1_DepositLPTInConvexAndStake>, I>>(
    base?: I,
  ): ConvexCurveAdaptorV1_DepositLPTInConvexAndStake {
    return ConvexCurveAdaptorV1_DepositLPTInConvexAndStake.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConvexCurveAdaptorV1_DepositLPTInConvexAndStake>, I>>(
    object: I,
  ): ConvexCurveAdaptorV1_DepositLPTInConvexAndStake {
    const message = createBaseConvexCurveAdaptorV1_DepositLPTInConvexAndStake();
    message.pid = object.pid ?? "";
    message.baseRewardPool = object.baseRewardPool ?? "";
    message.lpt = object.lpt ?? "";
    message.pool = object.pool ?? "";
    message.selector = object.selector ?? "";
    message.amountToDeposit = object.amountToDeposit ?? "";
    return message;
  },
};

function createBaseConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT(): ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT {
  return { baseRewardPool: "", amountToWithdraw: "", claim: false };
}

export const ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT = {
  encode(
    message: ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseRewardPool !== "") {
      writer.uint32(10).string(message.baseRewardPool);
    }
    if (message.amountToWithdraw !== "") {
      writer.uint32(18).string(message.amountToWithdraw);
    }
    if (message.claim === true) {
      writer.uint32(24).bool(message.claim);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseRewardPool = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountToWithdraw = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.claim = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT {
    return {
      baseRewardPool: isSet(object.baseRewardPool) ? globalThis.String(object.baseRewardPool) : "",
      amountToWithdraw: isSet(object.amountToWithdraw) ? globalThis.String(object.amountToWithdraw) : "",
      claim: isSet(object.claim) ? globalThis.Boolean(object.claim) : false,
    };
  },

  toJSON(message: ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT): unknown {
    const obj: any = {};
    if (message.baseRewardPool !== "") {
      obj.baseRewardPool = message.baseRewardPool;
    }
    if (message.amountToWithdraw !== "") {
      obj.amountToWithdraw = message.amountToWithdraw;
    }
    if (message.claim === true) {
      obj.claim = message.claim;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT>, I>>(
    base?: I,
  ): ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT {
    return ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT>, I>>(
    object: I,
  ): ConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT {
    const message = createBaseConvexCurveAdaptorV1_WithdrawFromBaseRewardPoolAsLPT();
    message.baseRewardPool = object.baseRewardPool ?? "";
    message.amountToWithdraw = object.amountToWithdraw ?? "";
    message.claim = object.claim ?? false;
    return message;
  },
};

function createBaseConvexCurveAdaptorV1_GetRewards(): ConvexCurveAdaptorV1_GetRewards {
  return { baseRewardPool: "", claimExtras: false };
}

export const ConvexCurveAdaptorV1_GetRewards = {
  encode(message: ConvexCurveAdaptorV1_GetRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseRewardPool !== "") {
      writer.uint32(10).string(message.baseRewardPool);
    }
    if (message.claimExtras === true) {
      writer.uint32(16).bool(message.claimExtras);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvexCurveAdaptorV1_GetRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvexCurveAdaptorV1_GetRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseRewardPool = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.claimExtras = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConvexCurveAdaptorV1_GetRewards {
    return {
      baseRewardPool: isSet(object.baseRewardPool) ? globalThis.String(object.baseRewardPool) : "",
      claimExtras: isSet(object.claimExtras) ? globalThis.Boolean(object.claimExtras) : false,
    };
  },

  toJSON(message: ConvexCurveAdaptorV1_GetRewards): unknown {
    const obj: any = {};
    if (message.baseRewardPool !== "") {
      obj.baseRewardPool = message.baseRewardPool;
    }
    if (message.claimExtras === true) {
      obj.claimExtras = message.claimExtras;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConvexCurveAdaptorV1_GetRewards>, I>>(base?: I): ConvexCurveAdaptorV1_GetRewards {
    return ConvexCurveAdaptorV1_GetRewards.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConvexCurveAdaptorV1_GetRewards>, I>>(
    object: I,
  ): ConvexCurveAdaptorV1_GetRewards {
    const message = createBaseConvexCurveAdaptorV1_GetRewards();
    message.baseRewardPool = object.baseRewardPool ?? "";
    message.claimExtras = object.claimExtras ?? false;
    return message;
  },
};

function createBaseConvexCurveAdaptorV1Calls(): ConvexCurveAdaptorV1Calls {
  return { calls: [] };
}

export const ConvexCurveAdaptorV1Calls = {
  encode(message: ConvexCurveAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      ConvexCurveAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvexCurveAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvexCurveAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(ConvexCurveAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConvexCurveAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => ConvexCurveAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ConvexCurveAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => ConvexCurveAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConvexCurveAdaptorV1Calls>, I>>(base?: I): ConvexCurveAdaptorV1Calls {
    return ConvexCurveAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConvexCurveAdaptorV1Calls>, I>>(object: I): ConvexCurveAdaptorV1Calls {
    const message = createBaseConvexCurveAdaptorV1Calls();
    message.calls = object.calls?.map((e) => ConvexCurveAdaptorV1.fromPartial(e)) || [];
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
