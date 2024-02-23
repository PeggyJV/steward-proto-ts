/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Morpho Aave V2 Debt Token adaptor. */
export interface MorphoAaveV2DebtTokenAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `borrowFromAaveV2Morpho(address aToken, uint256 amountToBorrow)` */
  borrowFromAaveV2Morpho?:
    | MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho
    | undefined;
  /** Represents function `repayAaveV2MorphoDebt(IAaveToken aToken, uint256 amountToRepay)` */
  repayAaveV2MorphoDebt?: MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt | undefined;
}

/**
 * Allows strategists to borrow assets from Aave.
 *
 * Represents function `borrowFromAaveV2Morpho(address aToken, uint256 amountToBorrow)`
 */
export interface MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho {
  /** The address of the Aave V2 aToken to borrow. */
  aToken: string;
  /** The amount of the asset to borrow. */
  amountToBorrow: string;
}

/**
 * Allows strategists to repay loan debt on Aave.
 *
 * Represents function `repayAaveV2MorphoDebt(IAaveToken aToken, uint256 amountToRepay)`
 */
export interface MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt {
  /** The address of the Aave V2 aToken to repay. */
  aToken: string;
  /** The amount of the asset to repay. */
  amountToRepay: string;
}

export interface MorphoAaveV2DebtTokenAdaptorV1Calls {
  calls: MorphoAaveV2DebtTokenAdaptorV1[];
}

function createBaseMorphoAaveV2DebtTokenAdaptorV1(): MorphoAaveV2DebtTokenAdaptorV1 {
  return { revokeApproval: undefined, borrowFromAaveV2Morpho: undefined, repayAaveV2MorphoDebt: undefined };
}

export const MorphoAaveV2DebtTokenAdaptorV1 = {
  encode(message: MorphoAaveV2DebtTokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.borrowFromAaveV2Morpho !== undefined) {
      MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho.encode(
        message.borrowFromAaveV2Morpho,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.repayAaveV2MorphoDebt !== undefined) {
      MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt.encode(
        message.repayAaveV2MorphoDebt,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV2DebtTokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV2DebtTokenAdaptorV1();
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

          message.borrowFromAaveV2Morpho = MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repayAaveV2MorphoDebt = MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt.decode(
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

  fromJSON(object: any): MorphoAaveV2DebtTokenAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      borrowFromAaveV2Morpho: isSet(object.borrowFromAaveV2Morpho)
        ? MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho.fromJSON(object.borrowFromAaveV2Morpho)
        : undefined,
      repayAaveV2MorphoDebt: isSet(object.repayAaveV2MorphoDebt)
        ? MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt.fromJSON(object.repayAaveV2MorphoDebt)
        : undefined,
    };
  },

  toJSON(message: MorphoAaveV2DebtTokenAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.borrowFromAaveV2Morpho !== undefined) {
      obj.borrowFromAaveV2Morpho = MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho.toJSON(
        message.borrowFromAaveV2Morpho,
      );
    }
    if (message.repayAaveV2MorphoDebt !== undefined) {
      obj.repayAaveV2MorphoDebt = MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt.toJSON(
        message.repayAaveV2MorphoDebt,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV2DebtTokenAdaptorV1>, I>>(base?: I): MorphoAaveV2DebtTokenAdaptorV1 {
    return MorphoAaveV2DebtTokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV2DebtTokenAdaptorV1>, I>>(
    object: I,
  ): MorphoAaveV2DebtTokenAdaptorV1 {
    const message = createBaseMorphoAaveV2DebtTokenAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.borrowFromAaveV2Morpho =
      (object.borrowFromAaveV2Morpho !== undefined && object.borrowFromAaveV2Morpho !== null)
        ? MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho.fromPartial(object.borrowFromAaveV2Morpho)
        : undefined;
    message.repayAaveV2MorphoDebt =
      (object.repayAaveV2MorphoDebt !== undefined && object.repayAaveV2MorphoDebt !== null)
        ? MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt.fromPartial(object.repayAaveV2MorphoDebt)
        : undefined;
    return message;
  },
};

function createBaseMorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho(): MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho {
  return { aToken: "", amountToBorrow: "" };
}

export const MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho = {
  encode(
    message: MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.aToken !== "") {
      writer.uint32(10).string(message.aToken);
    }
    if (message.amountToBorrow !== "") {
      writer.uint32(18).string(message.amountToBorrow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aToken = reader.string();
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

  fromJSON(object: any): MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho {
    return {
      aToken: isSet(object.aToken) ? globalThis.String(object.aToken) : "",
      amountToBorrow: isSet(object.amountToBorrow) ? globalThis.String(object.amountToBorrow) : "",
    };
  },

  toJSON(message: MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho): unknown {
    const obj: any = {};
    if (message.aToken !== "") {
      obj.aToken = message.aToken;
    }
    if (message.amountToBorrow !== "") {
      obj.amountToBorrow = message.amountToBorrow;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho>, I>>(
    base?: I,
  ): MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho {
    return MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho>, I>>(
    object: I,
  ): MorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho {
    const message = createBaseMorphoAaveV2DebtTokenAdaptorV1_BorrowFromAaveV2Morpho();
    message.aToken = object.aToken ?? "";
    message.amountToBorrow = object.amountToBorrow ?? "";
    return message;
  },
};

function createBaseMorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt(): MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt {
  return { aToken: "", amountToRepay: "" };
}

export const MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt = {
  encode(
    message: MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.aToken !== "") {
      writer.uint32(10).string(message.aToken);
    }
    if (message.amountToRepay !== "") {
      writer.uint32(18).string(message.amountToRepay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aToken = reader.string();
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

  fromJSON(object: any): MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt {
    return {
      aToken: isSet(object.aToken) ? globalThis.String(object.aToken) : "",
      amountToRepay: isSet(object.amountToRepay) ? globalThis.String(object.amountToRepay) : "",
    };
  },

  toJSON(message: MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt): unknown {
    const obj: any = {};
    if (message.aToken !== "") {
      obj.aToken = message.aToken;
    }
    if (message.amountToRepay !== "") {
      obj.amountToRepay = message.amountToRepay;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt>, I>>(
    base?: I,
  ): MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt {
    return MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt>, I>>(
    object: I,
  ): MorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt {
    const message = createBaseMorphoAaveV2DebtTokenAdaptorV1_RepayAaveV2MorphoDebt();
    message.aToken = object.aToken ?? "";
    message.amountToRepay = object.amountToRepay ?? "";
    return message;
  },
};

function createBaseMorphoAaveV2DebtTokenAdaptorV1Calls(): MorphoAaveV2DebtTokenAdaptorV1Calls {
  return { calls: [] };
}

export const MorphoAaveV2DebtTokenAdaptorV1Calls = {
  encode(message: MorphoAaveV2DebtTokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      MorphoAaveV2DebtTokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV2DebtTokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV2DebtTokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(MorphoAaveV2DebtTokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoAaveV2DebtTokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => MorphoAaveV2DebtTokenAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MorphoAaveV2DebtTokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => MorphoAaveV2DebtTokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV2DebtTokenAdaptorV1Calls>, I>>(
    base?: I,
  ): MorphoAaveV2DebtTokenAdaptorV1Calls {
    return MorphoAaveV2DebtTokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV2DebtTokenAdaptorV1Calls>, I>>(
    object: I,
  ): MorphoAaveV2DebtTokenAdaptorV1Calls {
    const message = createBaseMorphoAaveV2DebtTokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => MorphoAaveV2DebtTokenAdaptorV1.fromPartial(e)) || [];
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
