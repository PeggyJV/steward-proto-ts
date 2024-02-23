/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Frax adaptor. */
export interface DebtFTokenAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `borrowFromFraxlend(IFToken fraxlendPair, uint256 amountToBorrow)` */
  borrowFromFraxlend?:
    | DebtFTokenAdaptorV1_BorrowFromFraxlend
    | undefined;
  /** Represents function `repayFraxlendDebt(IFToken _fraxlendPair, uint256 _debtTokenRepayAmount)` */
  repayFraxlendDebt?:
    | DebtFTokenAdaptorV1_RepayFraxlendDebt
    | undefined;
  /** Represents function `callAddInterest(IFToken _fraxlendPair)` */
  callAddInterest?: DebtFTokenAdaptorV1_CallAddInterest | undefined;
}

/**
 * Allows a strategist to borrow assets from Fraxlend
 *
 * Represents `function borrowFromFraxlend(IFToken fraxlendPair, uint256 amountToBorrow)`
 */
export interface DebtFTokenAdaptorV1_BorrowFromFraxlend {
  /** The address of the Frax Pair to borrow from. */
  fraxlendPair: string;
  /** The amount of the asset to borrow. */
  amountToBorrow: string;
}

/**
 * Allows strategists to repay loan debt on Fraxlend Pair.
 * Make sure to call addInterest() beforehand to ensure we are repaying what is required.
 *
 * Represents `function repayFraxlendDebt(IFToken _fraxlendPair, uint256 _debtTokenRepayAmount)`
 */
export interface DebtFTokenAdaptorV1_RepayFraxlendDebt {
  /** The address of the Frax Pair to repay debt on. */
  fraxlendPair: string;
  /** The amount of the debt token to repay. */
  debtTokenRepayAmount: string;
}

/**
 * Allows a strategist to call `addInterest` on a Frax Pair they are using
 *
 * Represents `function callAddInterest(IFToken _fraxlendPair)`
 */
export interface DebtFTokenAdaptorV1_CallAddInterest {
  /** The address of the pair to call addInterest on. */
  fraxlendPair: string;
}

export interface DebtFTokenAdaptorV1Calls {
  calls: DebtFTokenAdaptorV1[];
}

function createBaseDebtFTokenAdaptorV1(): DebtFTokenAdaptorV1 {
  return {
    revokeApproval: undefined,
    borrowFromFraxlend: undefined,
    repayFraxlendDebt: undefined,
    callAddInterest: undefined,
  };
}

export const DebtFTokenAdaptorV1 = {
  encode(message: DebtFTokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.borrowFromFraxlend !== undefined) {
      DebtFTokenAdaptorV1_BorrowFromFraxlend.encode(message.borrowFromFraxlend, writer.uint32(18).fork()).ldelim();
    }
    if (message.repayFraxlendDebt !== undefined) {
      DebtFTokenAdaptorV1_RepayFraxlendDebt.encode(message.repayFraxlendDebt, writer.uint32(26).fork()).ldelim();
    }
    if (message.callAddInterest !== undefined) {
      DebtFTokenAdaptorV1_CallAddInterest.encode(message.callAddInterest, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebtFTokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebtFTokenAdaptorV1();
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

          message.borrowFromFraxlend = DebtFTokenAdaptorV1_BorrowFromFraxlend.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repayFraxlendDebt = DebtFTokenAdaptorV1_RepayFraxlendDebt.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.callAddInterest = DebtFTokenAdaptorV1_CallAddInterest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DebtFTokenAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      borrowFromFraxlend: isSet(object.borrowFromFraxlend)
        ? DebtFTokenAdaptorV1_BorrowFromFraxlend.fromJSON(object.borrowFromFraxlend)
        : undefined,
      repayFraxlendDebt: isSet(object.repayFraxlendDebt)
        ? DebtFTokenAdaptorV1_RepayFraxlendDebt.fromJSON(object.repayFraxlendDebt)
        : undefined,
      callAddInterest: isSet(object.callAddInterest)
        ? DebtFTokenAdaptorV1_CallAddInterest.fromJSON(object.callAddInterest)
        : undefined,
    };
  },

  toJSON(message: DebtFTokenAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.borrowFromFraxlend !== undefined) {
      obj.borrowFromFraxlend = DebtFTokenAdaptorV1_BorrowFromFraxlend.toJSON(message.borrowFromFraxlend);
    }
    if (message.repayFraxlendDebt !== undefined) {
      obj.repayFraxlendDebt = DebtFTokenAdaptorV1_RepayFraxlendDebt.toJSON(message.repayFraxlendDebt);
    }
    if (message.callAddInterest !== undefined) {
      obj.callAddInterest = DebtFTokenAdaptorV1_CallAddInterest.toJSON(message.callAddInterest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DebtFTokenAdaptorV1>, I>>(base?: I): DebtFTokenAdaptorV1 {
    return DebtFTokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DebtFTokenAdaptorV1>, I>>(object: I): DebtFTokenAdaptorV1 {
    const message = createBaseDebtFTokenAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.borrowFromFraxlend = (object.borrowFromFraxlend !== undefined && object.borrowFromFraxlend !== null)
      ? DebtFTokenAdaptorV1_BorrowFromFraxlend.fromPartial(object.borrowFromFraxlend)
      : undefined;
    message.repayFraxlendDebt = (object.repayFraxlendDebt !== undefined && object.repayFraxlendDebt !== null)
      ? DebtFTokenAdaptorV1_RepayFraxlendDebt.fromPartial(object.repayFraxlendDebt)
      : undefined;
    message.callAddInterest = (object.callAddInterest !== undefined && object.callAddInterest !== null)
      ? DebtFTokenAdaptorV1_CallAddInterest.fromPartial(object.callAddInterest)
      : undefined;
    return message;
  },
};

function createBaseDebtFTokenAdaptorV1_BorrowFromFraxlend(): DebtFTokenAdaptorV1_BorrowFromFraxlend {
  return { fraxlendPair: "", amountToBorrow: "" };
}

export const DebtFTokenAdaptorV1_BorrowFromFraxlend = {
  encode(message: DebtFTokenAdaptorV1_BorrowFromFraxlend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fraxlendPair !== "") {
      writer.uint32(10).string(message.fraxlendPair);
    }
    if (message.amountToBorrow !== "") {
      writer.uint32(18).string(message.amountToBorrow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebtFTokenAdaptorV1_BorrowFromFraxlend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebtFTokenAdaptorV1_BorrowFromFraxlend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fraxlendPair = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountToBorrow = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DebtFTokenAdaptorV1_BorrowFromFraxlend {
    return {
      fraxlendPair: isSet(object.fraxlendPair) ? globalThis.String(object.fraxlendPair) : "",
      amountToBorrow: isSet(object.amountToBorrow) ? globalThis.String(object.amountToBorrow) : "",
    };
  },

  toJSON(message: DebtFTokenAdaptorV1_BorrowFromFraxlend): unknown {
    const obj: any = {};
    if (message.fraxlendPair !== "") {
      obj.fraxlendPair = message.fraxlendPair;
    }
    if (message.amountToBorrow !== "") {
      obj.amountToBorrow = message.amountToBorrow;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DebtFTokenAdaptorV1_BorrowFromFraxlend>, I>>(
    base?: I,
  ): DebtFTokenAdaptorV1_BorrowFromFraxlend {
    return DebtFTokenAdaptorV1_BorrowFromFraxlend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DebtFTokenAdaptorV1_BorrowFromFraxlend>, I>>(
    object: I,
  ): DebtFTokenAdaptorV1_BorrowFromFraxlend {
    const message = createBaseDebtFTokenAdaptorV1_BorrowFromFraxlend();
    message.fraxlendPair = object.fraxlendPair ?? "";
    message.amountToBorrow = object.amountToBorrow ?? "";
    return message;
  },
};

function createBaseDebtFTokenAdaptorV1_RepayFraxlendDebt(): DebtFTokenAdaptorV1_RepayFraxlendDebt {
  return { fraxlendPair: "", debtTokenRepayAmount: "" };
}

export const DebtFTokenAdaptorV1_RepayFraxlendDebt = {
  encode(message: DebtFTokenAdaptorV1_RepayFraxlendDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fraxlendPair !== "") {
      writer.uint32(10).string(message.fraxlendPair);
    }
    if (message.debtTokenRepayAmount !== "") {
      writer.uint32(18).string(message.debtTokenRepayAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebtFTokenAdaptorV1_RepayFraxlendDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebtFTokenAdaptorV1_RepayFraxlendDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fraxlendPair = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.debtTokenRepayAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DebtFTokenAdaptorV1_RepayFraxlendDebt {
    return {
      fraxlendPair: isSet(object.fraxlendPair) ? globalThis.String(object.fraxlendPair) : "",
      debtTokenRepayAmount: isSet(object.debtTokenRepayAmount) ? globalThis.String(object.debtTokenRepayAmount) : "",
    };
  },

  toJSON(message: DebtFTokenAdaptorV1_RepayFraxlendDebt): unknown {
    const obj: any = {};
    if (message.fraxlendPair !== "") {
      obj.fraxlendPair = message.fraxlendPair;
    }
    if (message.debtTokenRepayAmount !== "") {
      obj.debtTokenRepayAmount = message.debtTokenRepayAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DebtFTokenAdaptorV1_RepayFraxlendDebt>, I>>(
    base?: I,
  ): DebtFTokenAdaptorV1_RepayFraxlendDebt {
    return DebtFTokenAdaptorV1_RepayFraxlendDebt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DebtFTokenAdaptorV1_RepayFraxlendDebt>, I>>(
    object: I,
  ): DebtFTokenAdaptorV1_RepayFraxlendDebt {
    const message = createBaseDebtFTokenAdaptorV1_RepayFraxlendDebt();
    message.fraxlendPair = object.fraxlendPair ?? "";
    message.debtTokenRepayAmount = object.debtTokenRepayAmount ?? "";
    return message;
  },
};

function createBaseDebtFTokenAdaptorV1_CallAddInterest(): DebtFTokenAdaptorV1_CallAddInterest {
  return { fraxlendPair: "" };
}

export const DebtFTokenAdaptorV1_CallAddInterest = {
  encode(message: DebtFTokenAdaptorV1_CallAddInterest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fraxlendPair !== "") {
      writer.uint32(10).string(message.fraxlendPair);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebtFTokenAdaptorV1_CallAddInterest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebtFTokenAdaptorV1_CallAddInterest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fraxlendPair = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DebtFTokenAdaptorV1_CallAddInterest {
    return { fraxlendPair: isSet(object.fraxlendPair) ? globalThis.String(object.fraxlendPair) : "" };
  },

  toJSON(message: DebtFTokenAdaptorV1_CallAddInterest): unknown {
    const obj: any = {};
    if (message.fraxlendPair !== "") {
      obj.fraxlendPair = message.fraxlendPair;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DebtFTokenAdaptorV1_CallAddInterest>, I>>(
    base?: I,
  ): DebtFTokenAdaptorV1_CallAddInterest {
    return DebtFTokenAdaptorV1_CallAddInterest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DebtFTokenAdaptorV1_CallAddInterest>, I>>(
    object: I,
  ): DebtFTokenAdaptorV1_CallAddInterest {
    const message = createBaseDebtFTokenAdaptorV1_CallAddInterest();
    message.fraxlendPair = object.fraxlendPair ?? "";
    return message;
  },
};

function createBaseDebtFTokenAdaptorV1Calls(): DebtFTokenAdaptorV1Calls {
  return { calls: [] };
}

export const DebtFTokenAdaptorV1Calls = {
  encode(message: DebtFTokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      DebtFTokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebtFTokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebtFTokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(DebtFTokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DebtFTokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => DebtFTokenAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DebtFTokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => DebtFTokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DebtFTokenAdaptorV1Calls>, I>>(base?: I): DebtFTokenAdaptorV1Calls {
    return DebtFTokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DebtFTokenAdaptorV1Calls>, I>>(object: I): DebtFTokenAdaptorV1Calls {
    const message = createBaseDebtFTokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => DebtFTokenAdaptorV1.fromPartial(e)) || [];
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
