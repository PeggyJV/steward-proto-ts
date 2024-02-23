/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Frax adaptor. */
export interface FTokenAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `lendFrax(IFToken fToken, uint256 amountToDeposit)` */
  lendFrax?:
    | FTokenAdaptorV1_LendFrax
    | undefined;
  /** Represents function `redeemFraxShare(IFToken fToken, uint256 amountToRedeem)` */
  redeemFraxShare?:
    | FTokenAdaptorV1_RedeemFraxShare
    | undefined;
  /** Represents function `withdrawFrax(IFToken fToken, uint256 amountToWithdraw)` */
  withdrawFrax?:
    | FTokenAdaptorV1_WithdrawFrax
    | undefined;
  /** Represents function `callAddInterest(IFToken fToken)` */
  callAddInterest?: FTokenAdaptorV1_CallAddInterest | undefined;
}

/**
 * Allows strategists to lend FRAX on FraxLend
 *
 * Represents `function lendFrax(IFToken fToken, uint256 amountToDeposit)`
 */
export interface FTokenAdaptorV1_LendFrax {
  /** The address of the fToken to lend. */
  fToken: string;
  /** The amount of the fToken to lend. */
  amountToDeposit: string;
}

/**
 * Allows strategists to redeem FRAX shares on FraxLend
 *
 * Represents `function redeemFraxShare(IFToken fToken, uint256 amountToRedeem)`
 */
export interface FTokenAdaptorV1_RedeemFraxShare {
  /** The address of the fToken to redeem. */
  fToken: string;
  /** The amount of the fToken to redeem. */
  amountToRedeem: string;
}

/**
 * Allows strategists to withdraw FRAX from FraxLend
 *
 * Represents `function withdrawFrax(IFToken fToken, uint256 amountToWithdraw)`
 */
export interface FTokenAdaptorV1_WithdrawFrax {
  /** The address of the fToken to withdraw. */
  fToken: string;
  /** The amount of the fToken to withdraw. */
  amountToWithdraw: string;
}

/**
 * Allows a strategist to call `addInterest` on a Frax Pair they are using
 *
 * Represents `function callAddInterest(IFToken fToken)`
 */
export interface FTokenAdaptorV1_CallAddInterest {
  /** The address of the fToken to call `addInterest` on. */
  fToken: string;
}

export interface FTokenAdaptorV1Calls {
  calls: FTokenAdaptorV1[];
}

function createBaseFTokenAdaptorV1(): FTokenAdaptorV1 {
  return {
    revokeApproval: undefined,
    lendFrax: undefined,
    redeemFraxShare: undefined,
    withdrawFrax: undefined,
    callAddInterest: undefined,
  };
}

export const FTokenAdaptorV1 = {
  encode(message: FTokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.lendFrax !== undefined) {
      FTokenAdaptorV1_LendFrax.encode(message.lendFrax, writer.uint32(18).fork()).ldelim();
    }
    if (message.redeemFraxShare !== undefined) {
      FTokenAdaptorV1_RedeemFraxShare.encode(message.redeemFraxShare, writer.uint32(26).fork()).ldelim();
    }
    if (message.withdrawFrax !== undefined) {
      FTokenAdaptorV1_WithdrawFrax.encode(message.withdrawFrax, writer.uint32(34).fork()).ldelim();
    }
    if (message.callAddInterest !== undefined) {
      FTokenAdaptorV1_CallAddInterest.encode(message.callAddInterest, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FTokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFTokenAdaptorV1();
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

          message.lendFrax = FTokenAdaptorV1_LendFrax.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.redeemFraxShare = FTokenAdaptorV1_RedeemFraxShare.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.withdrawFrax = FTokenAdaptorV1_WithdrawFrax.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.callAddInterest = FTokenAdaptorV1_CallAddInterest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FTokenAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      lendFrax: isSet(object.lendFrax) ? FTokenAdaptorV1_LendFrax.fromJSON(object.lendFrax) : undefined,
      redeemFraxShare: isSet(object.redeemFraxShare)
        ? FTokenAdaptorV1_RedeemFraxShare.fromJSON(object.redeemFraxShare)
        : undefined,
      withdrawFrax: isSet(object.withdrawFrax) ? FTokenAdaptorV1_WithdrawFrax.fromJSON(object.withdrawFrax) : undefined,
      callAddInterest: isSet(object.callAddInterest)
        ? FTokenAdaptorV1_CallAddInterest.fromJSON(object.callAddInterest)
        : undefined,
    };
  },

  toJSON(message: FTokenAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.lendFrax !== undefined) {
      obj.lendFrax = FTokenAdaptorV1_LendFrax.toJSON(message.lendFrax);
    }
    if (message.redeemFraxShare !== undefined) {
      obj.redeemFraxShare = FTokenAdaptorV1_RedeemFraxShare.toJSON(message.redeemFraxShare);
    }
    if (message.withdrawFrax !== undefined) {
      obj.withdrawFrax = FTokenAdaptorV1_WithdrawFrax.toJSON(message.withdrawFrax);
    }
    if (message.callAddInterest !== undefined) {
      obj.callAddInterest = FTokenAdaptorV1_CallAddInterest.toJSON(message.callAddInterest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FTokenAdaptorV1>, I>>(base?: I): FTokenAdaptorV1 {
    return FTokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FTokenAdaptorV1>, I>>(object: I): FTokenAdaptorV1 {
    const message = createBaseFTokenAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.lendFrax = (object.lendFrax !== undefined && object.lendFrax !== null)
      ? FTokenAdaptorV1_LendFrax.fromPartial(object.lendFrax)
      : undefined;
    message.redeemFraxShare = (object.redeemFraxShare !== undefined && object.redeemFraxShare !== null)
      ? FTokenAdaptorV1_RedeemFraxShare.fromPartial(object.redeemFraxShare)
      : undefined;
    message.withdrawFrax = (object.withdrawFrax !== undefined && object.withdrawFrax !== null)
      ? FTokenAdaptorV1_WithdrawFrax.fromPartial(object.withdrawFrax)
      : undefined;
    message.callAddInterest = (object.callAddInterest !== undefined && object.callAddInterest !== null)
      ? FTokenAdaptorV1_CallAddInterest.fromPartial(object.callAddInterest)
      : undefined;
    return message;
  },
};

function createBaseFTokenAdaptorV1_LendFrax(): FTokenAdaptorV1_LendFrax {
  return { fToken: "", amountToDeposit: "" };
}

export const FTokenAdaptorV1_LendFrax = {
  encode(message: FTokenAdaptorV1_LendFrax, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fToken !== "") {
      writer.uint32(10).string(message.fToken);
    }
    if (message.amountToDeposit !== "") {
      writer.uint32(18).string(message.amountToDeposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FTokenAdaptorV1_LendFrax {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFTokenAdaptorV1_LendFrax();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fToken = reader.string();
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

  fromJSON(object: any): FTokenAdaptorV1_LendFrax {
    return {
      fToken: isSet(object.fToken) ? globalThis.String(object.fToken) : "",
      amountToDeposit: isSet(object.amountToDeposit) ? globalThis.String(object.amountToDeposit) : "",
    };
  },

  toJSON(message: FTokenAdaptorV1_LendFrax): unknown {
    const obj: any = {};
    if (message.fToken !== "") {
      obj.fToken = message.fToken;
    }
    if (message.amountToDeposit !== "") {
      obj.amountToDeposit = message.amountToDeposit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FTokenAdaptorV1_LendFrax>, I>>(base?: I): FTokenAdaptorV1_LendFrax {
    return FTokenAdaptorV1_LendFrax.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FTokenAdaptorV1_LendFrax>, I>>(object: I): FTokenAdaptorV1_LendFrax {
    const message = createBaseFTokenAdaptorV1_LendFrax();
    message.fToken = object.fToken ?? "";
    message.amountToDeposit = object.amountToDeposit ?? "";
    return message;
  },
};

function createBaseFTokenAdaptorV1_RedeemFraxShare(): FTokenAdaptorV1_RedeemFraxShare {
  return { fToken: "", amountToRedeem: "" };
}

export const FTokenAdaptorV1_RedeemFraxShare = {
  encode(message: FTokenAdaptorV1_RedeemFraxShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fToken !== "") {
      writer.uint32(10).string(message.fToken);
    }
    if (message.amountToRedeem !== "") {
      writer.uint32(18).string(message.amountToRedeem);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FTokenAdaptorV1_RedeemFraxShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFTokenAdaptorV1_RedeemFraxShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountToRedeem = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FTokenAdaptorV1_RedeemFraxShare {
    return {
      fToken: isSet(object.fToken) ? globalThis.String(object.fToken) : "",
      amountToRedeem: isSet(object.amountToRedeem) ? globalThis.String(object.amountToRedeem) : "",
    };
  },

  toJSON(message: FTokenAdaptorV1_RedeemFraxShare): unknown {
    const obj: any = {};
    if (message.fToken !== "") {
      obj.fToken = message.fToken;
    }
    if (message.amountToRedeem !== "") {
      obj.amountToRedeem = message.amountToRedeem;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FTokenAdaptorV1_RedeemFraxShare>, I>>(base?: I): FTokenAdaptorV1_RedeemFraxShare {
    return FTokenAdaptorV1_RedeemFraxShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FTokenAdaptorV1_RedeemFraxShare>, I>>(
    object: I,
  ): FTokenAdaptorV1_RedeemFraxShare {
    const message = createBaseFTokenAdaptorV1_RedeemFraxShare();
    message.fToken = object.fToken ?? "";
    message.amountToRedeem = object.amountToRedeem ?? "";
    return message;
  },
};

function createBaseFTokenAdaptorV1_WithdrawFrax(): FTokenAdaptorV1_WithdrawFrax {
  return { fToken: "", amountToWithdraw: "" };
}

export const FTokenAdaptorV1_WithdrawFrax = {
  encode(message: FTokenAdaptorV1_WithdrawFrax, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fToken !== "") {
      writer.uint32(10).string(message.fToken);
    }
    if (message.amountToWithdraw !== "") {
      writer.uint32(18).string(message.amountToWithdraw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FTokenAdaptorV1_WithdrawFrax {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFTokenAdaptorV1_WithdrawFrax();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fToken = reader.string();
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

  fromJSON(object: any): FTokenAdaptorV1_WithdrawFrax {
    return {
      fToken: isSet(object.fToken) ? globalThis.String(object.fToken) : "",
      amountToWithdraw: isSet(object.amountToWithdraw) ? globalThis.String(object.amountToWithdraw) : "",
    };
  },

  toJSON(message: FTokenAdaptorV1_WithdrawFrax): unknown {
    const obj: any = {};
    if (message.fToken !== "") {
      obj.fToken = message.fToken;
    }
    if (message.amountToWithdraw !== "") {
      obj.amountToWithdraw = message.amountToWithdraw;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FTokenAdaptorV1_WithdrawFrax>, I>>(base?: I): FTokenAdaptorV1_WithdrawFrax {
    return FTokenAdaptorV1_WithdrawFrax.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FTokenAdaptorV1_WithdrawFrax>, I>>(object: I): FTokenAdaptorV1_WithdrawFrax {
    const message = createBaseFTokenAdaptorV1_WithdrawFrax();
    message.fToken = object.fToken ?? "";
    message.amountToWithdraw = object.amountToWithdraw ?? "";
    return message;
  },
};

function createBaseFTokenAdaptorV1_CallAddInterest(): FTokenAdaptorV1_CallAddInterest {
  return { fToken: "" };
}

export const FTokenAdaptorV1_CallAddInterest = {
  encode(message: FTokenAdaptorV1_CallAddInterest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fToken !== "") {
      writer.uint32(10).string(message.fToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FTokenAdaptorV1_CallAddInterest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFTokenAdaptorV1_CallAddInterest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FTokenAdaptorV1_CallAddInterest {
    return { fToken: isSet(object.fToken) ? globalThis.String(object.fToken) : "" };
  },

  toJSON(message: FTokenAdaptorV1_CallAddInterest): unknown {
    const obj: any = {};
    if (message.fToken !== "") {
      obj.fToken = message.fToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FTokenAdaptorV1_CallAddInterest>, I>>(base?: I): FTokenAdaptorV1_CallAddInterest {
    return FTokenAdaptorV1_CallAddInterest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FTokenAdaptorV1_CallAddInterest>, I>>(
    object: I,
  ): FTokenAdaptorV1_CallAddInterest {
    const message = createBaseFTokenAdaptorV1_CallAddInterest();
    message.fToken = object.fToken ?? "";
    return message;
  },
};

function createBaseFTokenAdaptorV1Calls(): FTokenAdaptorV1Calls {
  return { calls: [] };
}

export const FTokenAdaptorV1Calls = {
  encode(message: FTokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      FTokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FTokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFTokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(FTokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FTokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls) ? object.calls.map((e: any) => FTokenAdaptorV1.fromJSON(e)) : [],
    };
  },

  toJSON(message: FTokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => FTokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FTokenAdaptorV1Calls>, I>>(base?: I): FTokenAdaptorV1Calls {
    return FTokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FTokenAdaptorV1Calls>, I>>(object: I): FTokenAdaptorV1Calls {
    const message = createBaseFTokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => FTokenAdaptorV1.fromPartial(e)) || [];
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
