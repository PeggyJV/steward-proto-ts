/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Morpho Aave V3 Debt Token adaptor. */
export interface MorphoAaveV3DebtTokenAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `borrowFromAaveV3Morpho(address underlying, uint256 amountToBorrow, uint256 maxIterations)` */
  borrowFromAaveV3Morpho?:
    | MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho
    | undefined;
  /** Represents function `repayAaveV3MorphoDebt(ERC20 tokenToRepay, uint256 amountToRepay)` */
  repayAaveV3MorphoDebt?: MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt | undefined;
}

/**
 * Allows strategists to borrow assets from Morpho
 *
 * Represents function `borrowFromAaveV3Morpho(address underlying, uint256 amountToBorrow, uint256 maxIterations)`
 */
export interface MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho {
  /** The underlying asset to borrow */
  underlying: string;
  /** The amount of the underlying asset to borrow */
  amountToBorrow: string;
  /** The maximum number of iterations to perform */
  maxIterations: string;
}

/**
 * Allows strategists to repay loan debt on Morpho
 *
 * Represents function `repayAaveV3MorphoDebt(ERC20 tokenToRepay, uint256 amountToRepay)`
 */
export interface MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt {
  /** The token to repay */
  tokenToRepay: string;
  /** The amount of the token to repay */
  amountToRepay: string;
}

export interface MorphoAaveV3DebtTokenAdaptorV1Calls {
  calls: MorphoAaveV3DebtTokenAdaptorV1[];
}

function createBaseMorphoAaveV3DebtTokenAdaptorV1(): MorphoAaveV3DebtTokenAdaptorV1 {
  return { revokeApproval: undefined, borrowFromAaveV3Morpho: undefined, repayAaveV3MorphoDebt: undefined };
}

export const MorphoAaveV3DebtTokenAdaptorV1 = {
  encode(message: MorphoAaveV3DebtTokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.borrowFromAaveV3Morpho !== undefined) {
      MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho.encode(
        message.borrowFromAaveV3Morpho,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.repayAaveV3MorphoDebt !== undefined) {
      MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt.encode(
        message.repayAaveV3MorphoDebt,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV3DebtTokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV3DebtTokenAdaptorV1();
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

          message.borrowFromAaveV3Morpho = MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repayAaveV3MorphoDebt = MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt.decode(
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

  fromJSON(object: any): MorphoAaveV3DebtTokenAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      borrowFromAaveV3Morpho: isSet(object.borrowFromAaveV3Morpho)
        ? MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho.fromJSON(object.borrowFromAaveV3Morpho)
        : undefined,
      repayAaveV3MorphoDebt: isSet(object.repayAaveV3MorphoDebt)
        ? MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt.fromJSON(object.repayAaveV3MorphoDebt)
        : undefined,
    };
  },

  toJSON(message: MorphoAaveV3DebtTokenAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.borrowFromAaveV3Morpho !== undefined) {
      obj.borrowFromAaveV3Morpho = MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho.toJSON(
        message.borrowFromAaveV3Morpho,
      );
    }
    if (message.repayAaveV3MorphoDebt !== undefined) {
      obj.repayAaveV3MorphoDebt = MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt.toJSON(
        message.repayAaveV3MorphoDebt,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV3DebtTokenAdaptorV1>, I>>(base?: I): MorphoAaveV3DebtTokenAdaptorV1 {
    return MorphoAaveV3DebtTokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV3DebtTokenAdaptorV1>, I>>(
    object: I,
  ): MorphoAaveV3DebtTokenAdaptorV1 {
    const message = createBaseMorphoAaveV3DebtTokenAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.borrowFromAaveV3Morpho =
      (object.borrowFromAaveV3Morpho !== undefined && object.borrowFromAaveV3Morpho !== null)
        ? MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho.fromPartial(object.borrowFromAaveV3Morpho)
        : undefined;
    message.repayAaveV3MorphoDebt =
      (object.repayAaveV3MorphoDebt !== undefined && object.repayAaveV3MorphoDebt !== null)
        ? MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt.fromPartial(object.repayAaveV3MorphoDebt)
        : undefined;
    return message;
  },
};

function createBaseMorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho(): MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho {
  return { underlying: "", amountToBorrow: "", maxIterations: "" };
}

export const MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho = {
  encode(
    message: MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.underlying !== "") {
      writer.uint32(10).string(message.underlying);
    }
    if (message.amountToBorrow !== "") {
      writer.uint32(18).string(message.amountToBorrow);
    }
    if (message.maxIterations !== "") {
      writer.uint32(26).string(message.maxIterations);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.underlying = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountToBorrow = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxIterations = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho {
    return {
      underlying: isSet(object.underlying) ? globalThis.String(object.underlying) : "",
      amountToBorrow: isSet(object.amountToBorrow) ? globalThis.String(object.amountToBorrow) : "",
      maxIterations: isSet(object.maxIterations) ? globalThis.String(object.maxIterations) : "",
    };
  },

  toJSON(message: MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho): unknown {
    const obj: any = {};
    if (message.underlying !== "") {
      obj.underlying = message.underlying;
    }
    if (message.amountToBorrow !== "") {
      obj.amountToBorrow = message.amountToBorrow;
    }
    if (message.maxIterations !== "") {
      obj.maxIterations = message.maxIterations;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho>, I>>(
    base?: I,
  ): MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho {
    return MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho>, I>>(
    object: I,
  ): MorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho {
    const message = createBaseMorphoAaveV3DebtTokenAdaptorV1_BorrowFromAaveV3Morpho();
    message.underlying = object.underlying ?? "";
    message.amountToBorrow = object.amountToBorrow ?? "";
    message.maxIterations = object.maxIterations ?? "";
    return message;
  },
};

function createBaseMorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt(): MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt {
  return { tokenToRepay: "", amountToRepay: "" };
}

export const MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt = {
  encode(
    message: MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenToRepay !== "") {
      writer.uint32(10).string(message.tokenToRepay);
    }
    if (message.amountToRepay !== "") {
      writer.uint32(18).string(message.amountToRepay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenToRepay = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountToRepay = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt {
    return {
      tokenToRepay: isSet(object.tokenToRepay) ? globalThis.String(object.tokenToRepay) : "",
      amountToRepay: isSet(object.amountToRepay) ? globalThis.String(object.amountToRepay) : "",
    };
  },

  toJSON(message: MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt): unknown {
    const obj: any = {};
    if (message.tokenToRepay !== "") {
      obj.tokenToRepay = message.tokenToRepay;
    }
    if (message.amountToRepay !== "") {
      obj.amountToRepay = message.amountToRepay;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt>, I>>(
    base?: I,
  ): MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt {
    return MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt>, I>>(
    object: I,
  ): MorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt {
    const message = createBaseMorphoAaveV3DebtTokenAdaptorV1_RepayAaveV3MorphoDebt();
    message.tokenToRepay = object.tokenToRepay ?? "";
    message.amountToRepay = object.amountToRepay ?? "";
    return message;
  },
};

function createBaseMorphoAaveV3DebtTokenAdaptorV1Calls(): MorphoAaveV3DebtTokenAdaptorV1Calls {
  return { calls: [] };
}

export const MorphoAaveV3DebtTokenAdaptorV1Calls = {
  encode(message: MorphoAaveV3DebtTokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      MorphoAaveV3DebtTokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV3DebtTokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV3DebtTokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(MorphoAaveV3DebtTokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoAaveV3DebtTokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => MorphoAaveV3DebtTokenAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MorphoAaveV3DebtTokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => MorphoAaveV3DebtTokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV3DebtTokenAdaptorV1Calls>, I>>(
    base?: I,
  ): MorphoAaveV3DebtTokenAdaptorV1Calls {
    return MorphoAaveV3DebtTokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV3DebtTokenAdaptorV1Calls>, I>>(
    object: I,
  ): MorphoAaveV3DebtTokenAdaptorV1Calls {
    const message = createBaseMorphoAaveV3DebtTokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => MorphoAaveV3DebtTokenAdaptorV1.fromPartial(e)) || [];
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
