/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";
import { MarketParams } from "./common";

export const protobufPackage = "steward.v4";

/** Represents call data for the Morpho Blue Debt adaptor. */
export interface MorphoBlueDebtAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `borrowFromMorphoBlue(MarketParams memory _market, uint256 _amountToBorrow)` */
  borrowFromMorphoBlue?:
    | MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue
    | undefined;
  /** Represents function `repayMorphoBlueDebt(MarketParams memory _market, uint256 _debtTokenRepayAmount)` */
  repayMorphoBlueDebt?: MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt | undefined;
}

/**
 * Allows strategists borrow a specific amount of an asset on Morpho Blue
 *
 * Represents function `borrowFromMorphoBlue(MarketParams memory _market, uint256 _amountToBorrow)`
 */
export interface MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue {
  /** Identifier of a Morpho Blue Market */
  market:
    | MarketParams
    | undefined;
  /** The amount of the debt token to borrow */
  amountToBorrow: string;
}

/**
 * Allows strategists to repay loan debt on Morph Blue Lending Market. Make sure to call addInterest() beforehand to ensure we are repaying what is required.
 *
 * Represents function `repayMorphoBlueDebt(MarketParams memory _market, uint256 _debtTokenRepayAmount)`
 */
export interface MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt {
  /** Identifier of a Morpho Blue Market */
  market:
    | MarketParams
    | undefined;
  /** The amount of the debt token to repay */
  debtTokenRepayAmount: string;
}

export interface MorphoBlueDebtAdaptorV1Calls {
  calls: MorphoBlueDebtAdaptorV1[];
}

function createBaseMorphoBlueDebtAdaptorV1(): MorphoBlueDebtAdaptorV1 {
  return { revokeApproval: undefined, borrowFromMorphoBlue: undefined, repayMorphoBlueDebt: undefined };
}

export const MorphoBlueDebtAdaptorV1 = {
  encode(message: MorphoBlueDebtAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.borrowFromMorphoBlue !== undefined) {
      MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue.encode(message.borrowFromMorphoBlue, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.repayMorphoBlueDebt !== undefined) {
      MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt.encode(message.repayMorphoBlueDebt, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueDebtAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueDebtAdaptorV1();
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

          message.borrowFromMorphoBlue = MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repayMorphoBlueDebt = MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoBlueDebtAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      borrowFromMorphoBlue: isSet(object.borrowFromMorphoBlue)
        ? MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue.fromJSON(object.borrowFromMorphoBlue)
        : undefined,
      repayMorphoBlueDebt: isSet(object.repayMorphoBlueDebt)
        ? MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt.fromJSON(object.repayMorphoBlueDebt)
        : undefined,
    };
  },

  toJSON(message: MorphoBlueDebtAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.borrowFromMorphoBlue !== undefined) {
      obj.borrowFromMorphoBlue = MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue.toJSON(message.borrowFromMorphoBlue);
    }
    if (message.repayMorphoBlueDebt !== undefined) {
      obj.repayMorphoBlueDebt = MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt.toJSON(message.repayMorphoBlueDebt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueDebtAdaptorV1>, I>>(base?: I): MorphoBlueDebtAdaptorV1 {
    return MorphoBlueDebtAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueDebtAdaptorV1>, I>>(object: I): MorphoBlueDebtAdaptorV1 {
    const message = createBaseMorphoBlueDebtAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.borrowFromMorphoBlue = (object.borrowFromMorphoBlue !== undefined && object.borrowFromMorphoBlue !== null)
      ? MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue.fromPartial(object.borrowFromMorphoBlue)
      : undefined;
    message.repayMorphoBlueDebt = (object.repayMorphoBlueDebt !== undefined && object.repayMorphoBlueDebt !== null)
      ? MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt.fromPartial(object.repayMorphoBlueDebt)
      : undefined;
    return message;
  },
};

function createBaseMorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue(): MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue {
  return { market: undefined, amountToBorrow: "" };
}

export const MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue = {
  encode(message: MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      MarketParams.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountToBorrow !== "") {
      writer.uint32(18).string(message.amountToBorrow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = MarketParams.decode(reader, reader.uint32());
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

  fromJSON(object: any): MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue {
    return {
      market: isSet(object.market) ? MarketParams.fromJSON(object.market) : undefined,
      amountToBorrow: isSet(object.amountToBorrow) ? globalThis.String(object.amountToBorrow) : "",
    };
  },

  toJSON(message: MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue): unknown {
    const obj: any = {};
    if (message.market !== undefined) {
      obj.market = MarketParams.toJSON(message.market);
    }
    if (message.amountToBorrow !== "") {
      obj.amountToBorrow = message.amountToBorrow;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue>, I>>(
    base?: I,
  ): MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue {
    return MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue>, I>>(
    object: I,
  ): MorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue {
    const message = createBaseMorphoBlueDebtAdaptorV1_BorrowFromMorphoBlue();
    message.market = (object.market !== undefined && object.market !== null)
      ? MarketParams.fromPartial(object.market)
      : undefined;
    message.amountToBorrow = object.amountToBorrow ?? "";
    return message;
  },
};

function createBaseMorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt(): MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt {
  return { market: undefined, debtTokenRepayAmount: "" };
}

export const MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt = {
  encode(message: MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      MarketParams.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.debtTokenRepayAmount !== "") {
      writer.uint32(18).string(message.debtTokenRepayAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = MarketParams.decode(reader, reader.uint32());
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

  fromJSON(object: any): MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt {
    return {
      market: isSet(object.market) ? MarketParams.fromJSON(object.market) : undefined,
      debtTokenRepayAmount: isSet(object.debtTokenRepayAmount) ? globalThis.String(object.debtTokenRepayAmount) : "",
    };
  },

  toJSON(message: MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt): unknown {
    const obj: any = {};
    if (message.market !== undefined) {
      obj.market = MarketParams.toJSON(message.market);
    }
    if (message.debtTokenRepayAmount !== "") {
      obj.debtTokenRepayAmount = message.debtTokenRepayAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt>, I>>(
    base?: I,
  ): MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt {
    return MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt>, I>>(
    object: I,
  ): MorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt {
    const message = createBaseMorphoBlueDebtAdaptorV1_RepayMorphoBlueDebt();
    message.market = (object.market !== undefined && object.market !== null)
      ? MarketParams.fromPartial(object.market)
      : undefined;
    message.debtTokenRepayAmount = object.debtTokenRepayAmount ?? "";
    return message;
  },
};

function createBaseMorphoBlueDebtAdaptorV1Calls(): MorphoBlueDebtAdaptorV1Calls {
  return { calls: [] };
}

export const MorphoBlueDebtAdaptorV1Calls = {
  encode(message: MorphoBlueDebtAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      MorphoBlueDebtAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoBlueDebtAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoBlueDebtAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(MorphoBlueDebtAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoBlueDebtAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => MorphoBlueDebtAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MorphoBlueDebtAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => MorphoBlueDebtAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoBlueDebtAdaptorV1Calls>, I>>(base?: I): MorphoBlueDebtAdaptorV1Calls {
    return MorphoBlueDebtAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoBlueDebtAdaptorV1Calls>, I>>(object: I): MorphoBlueDebtAdaptorV1Calls {
    const message = createBaseMorphoBlueDebtAdaptorV1Calls();
    message.calls = object.calls?.map((e) => MorphoBlueDebtAdaptorV1.fromPartial(e)) || [];
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
