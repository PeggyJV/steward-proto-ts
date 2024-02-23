/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Aave Debt Token adaptor, used for borrowing and repaying debt on Aave. */
export interface AaveV3DebtTokenAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `borrowFromAave(ERC20 debtTokenToBorrow, uint256 amountToBorrow)` */
  borrowFromAave?:
    | AaveV3DebtTokenAdaptorV1_BorrowFromAave
    | undefined;
  /** Represents function `repayAaveDebt(ERC20 tokenToRepay, uint256 amountToRepay)` */
  repayAaveDebt?:
    | AaveV3DebtTokenAdaptorV1_RepayAaveDebt
    | undefined;
  /** Represents function `repayWithATokens(ERC20 underlying, uint256 amount)` */
  repayWithATokens?: AaveV3DebtTokenAdaptorV1_RepayWithATokens | undefined;
}

/**
 * Allows strategists to borrow assets from Aave.
 *
 * Represents function `depositToAave(ERC20 tokenToDeposit, uint256 amountToDeposit)`
 */
export interface AaveV3DebtTokenAdaptorV1_BorrowFromAave {
  /** The address of the ERC20 token to borrow */
  token: string;
  /** The amount to borrow */
  amount: string;
}

/**
 * Allows strategists to repay loan debt on Aave.
 *
 * Represents function `repayAaveDebt(ERC20 tokenToRepay, uint256 amountToRepay)`
 */
export interface AaveV3DebtTokenAdaptorV1_RepayAaveDebt {
  /** The address of the ERC20 token to repay */
  token: string;
  /** The amount to repay */
  amount: string;
}

/**
 * Allows strategist to use aTokens to repay debt tokens with the same underlying.
 *
 * Represents function `repayWithATokens(ERC20 underlying, uint256 amount)`
 */
export interface AaveV3DebtTokenAdaptorV1_RepayWithATokens {
  /** The address of the underlying ERC20 token to repay */
  underlyingToken: string;
  /** The amount to repay */
  amount: string;
}

export interface AaveV3DebtTokenAdaptorV1Calls {
  calls: AaveV3DebtTokenAdaptorV1[];
}

function createBaseAaveV3DebtTokenAdaptorV1(): AaveV3DebtTokenAdaptorV1 {
  return {
    revokeApproval: undefined,
    borrowFromAave: undefined,
    repayAaveDebt: undefined,
    repayWithATokens: undefined,
  };
}

export const AaveV3DebtTokenAdaptorV1 = {
  encode(message: AaveV3DebtTokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.borrowFromAave !== undefined) {
      AaveV3DebtTokenAdaptorV1_BorrowFromAave.encode(message.borrowFromAave, writer.uint32(18).fork()).ldelim();
    }
    if (message.repayAaveDebt !== undefined) {
      AaveV3DebtTokenAdaptorV1_RepayAaveDebt.encode(message.repayAaveDebt, writer.uint32(26).fork()).ldelim();
    }
    if (message.repayWithATokens !== undefined) {
      AaveV3DebtTokenAdaptorV1_RepayWithATokens.encode(message.repayWithATokens, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3DebtTokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3DebtTokenAdaptorV1();
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

          message.borrowFromAave = AaveV3DebtTokenAdaptorV1_BorrowFromAave.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repayAaveDebt = AaveV3DebtTokenAdaptorV1_RepayAaveDebt.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.repayWithATokens = AaveV3DebtTokenAdaptorV1_RepayWithATokens.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3DebtTokenAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      borrowFromAave: isSet(object.borrowFromAave)
        ? AaveV3DebtTokenAdaptorV1_BorrowFromAave.fromJSON(object.borrowFromAave)
        : undefined,
      repayAaveDebt: isSet(object.repayAaveDebt)
        ? AaveV3DebtTokenAdaptorV1_RepayAaveDebt.fromJSON(object.repayAaveDebt)
        : undefined,
      repayWithATokens: isSet(object.repayWithATokens)
        ? AaveV3DebtTokenAdaptorV1_RepayWithATokens.fromJSON(object.repayWithATokens)
        : undefined,
    };
  },

  toJSON(message: AaveV3DebtTokenAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.borrowFromAave !== undefined) {
      obj.borrowFromAave = AaveV3DebtTokenAdaptorV1_BorrowFromAave.toJSON(message.borrowFromAave);
    }
    if (message.repayAaveDebt !== undefined) {
      obj.repayAaveDebt = AaveV3DebtTokenAdaptorV1_RepayAaveDebt.toJSON(message.repayAaveDebt);
    }
    if (message.repayWithATokens !== undefined) {
      obj.repayWithATokens = AaveV3DebtTokenAdaptorV1_RepayWithATokens.toJSON(message.repayWithATokens);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1>, I>>(base?: I): AaveV3DebtTokenAdaptorV1 {
    return AaveV3DebtTokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1>, I>>(object: I): AaveV3DebtTokenAdaptorV1 {
    const message = createBaseAaveV3DebtTokenAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.borrowFromAave = (object.borrowFromAave !== undefined && object.borrowFromAave !== null)
      ? AaveV3DebtTokenAdaptorV1_BorrowFromAave.fromPartial(object.borrowFromAave)
      : undefined;
    message.repayAaveDebt = (object.repayAaveDebt !== undefined && object.repayAaveDebt !== null)
      ? AaveV3DebtTokenAdaptorV1_RepayAaveDebt.fromPartial(object.repayAaveDebt)
      : undefined;
    message.repayWithATokens = (object.repayWithATokens !== undefined && object.repayWithATokens !== null)
      ? AaveV3DebtTokenAdaptorV1_RepayWithATokens.fromPartial(object.repayWithATokens)
      : undefined;
    return message;
  },
};

function createBaseAaveV3DebtTokenAdaptorV1_BorrowFromAave(): AaveV3DebtTokenAdaptorV1_BorrowFromAave {
  return { token: "", amount: "" };
}

export const AaveV3DebtTokenAdaptorV1_BorrowFromAave = {
  encode(message: AaveV3DebtTokenAdaptorV1_BorrowFromAave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3DebtTokenAdaptorV1_BorrowFromAave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3DebtTokenAdaptorV1_BorrowFromAave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
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

  fromJSON(object: any): AaveV3DebtTokenAdaptorV1_BorrowFromAave {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveV3DebtTokenAdaptorV1_BorrowFromAave): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1_BorrowFromAave>, I>>(
    base?: I,
  ): AaveV3DebtTokenAdaptorV1_BorrowFromAave {
    return AaveV3DebtTokenAdaptorV1_BorrowFromAave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1_BorrowFromAave>, I>>(
    object: I,
  ): AaveV3DebtTokenAdaptorV1_BorrowFromAave {
    const message = createBaseAaveV3DebtTokenAdaptorV1_BorrowFromAave();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveV3DebtTokenAdaptorV1_RepayAaveDebt(): AaveV3DebtTokenAdaptorV1_RepayAaveDebt {
  return { token: "", amount: "" };
}

export const AaveV3DebtTokenAdaptorV1_RepayAaveDebt = {
  encode(message: AaveV3DebtTokenAdaptorV1_RepayAaveDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3DebtTokenAdaptorV1_RepayAaveDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3DebtTokenAdaptorV1_RepayAaveDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
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

  fromJSON(object: any): AaveV3DebtTokenAdaptorV1_RepayAaveDebt {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveV3DebtTokenAdaptorV1_RepayAaveDebt): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1_RepayAaveDebt>, I>>(
    base?: I,
  ): AaveV3DebtTokenAdaptorV1_RepayAaveDebt {
    return AaveV3DebtTokenAdaptorV1_RepayAaveDebt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1_RepayAaveDebt>, I>>(
    object: I,
  ): AaveV3DebtTokenAdaptorV1_RepayAaveDebt {
    const message = createBaseAaveV3DebtTokenAdaptorV1_RepayAaveDebt();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveV3DebtTokenAdaptorV1_RepayWithATokens(): AaveV3DebtTokenAdaptorV1_RepayWithATokens {
  return { underlyingToken: "", amount: "" };
}

export const AaveV3DebtTokenAdaptorV1_RepayWithATokens = {
  encode(message: AaveV3DebtTokenAdaptorV1_RepayWithATokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.underlyingToken !== "") {
      writer.uint32(10).string(message.underlyingToken);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3DebtTokenAdaptorV1_RepayWithATokens {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3DebtTokenAdaptorV1_RepayWithATokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.underlyingToken = reader.string();
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

  fromJSON(object: any): AaveV3DebtTokenAdaptorV1_RepayWithATokens {
    return {
      underlyingToken: isSet(object.underlyingToken) ? globalThis.String(object.underlyingToken) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveV3DebtTokenAdaptorV1_RepayWithATokens): unknown {
    const obj: any = {};
    if (message.underlyingToken !== "") {
      obj.underlyingToken = message.underlyingToken;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1_RepayWithATokens>, I>>(
    base?: I,
  ): AaveV3DebtTokenAdaptorV1_RepayWithATokens {
    return AaveV3DebtTokenAdaptorV1_RepayWithATokens.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1_RepayWithATokens>, I>>(
    object: I,
  ): AaveV3DebtTokenAdaptorV1_RepayWithATokens {
    const message = createBaseAaveV3DebtTokenAdaptorV1_RepayWithATokens();
    message.underlyingToken = object.underlyingToken ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveV3DebtTokenAdaptorV1Calls(): AaveV3DebtTokenAdaptorV1Calls {
  return { calls: [] };
}

export const AaveV3DebtTokenAdaptorV1Calls = {
  encode(message: AaveV3DebtTokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      AaveV3DebtTokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3DebtTokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3DebtTokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(AaveV3DebtTokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3DebtTokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => AaveV3DebtTokenAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AaveV3DebtTokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => AaveV3DebtTokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1Calls>, I>>(base?: I): AaveV3DebtTokenAdaptorV1Calls {
    return AaveV3DebtTokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1Calls>, I>>(
    object: I,
  ): AaveV3DebtTokenAdaptorV1Calls {
    const message = createBaseAaveV3DebtTokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => AaveV3DebtTokenAdaptorV1.fromPartial(e)) || [];
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
