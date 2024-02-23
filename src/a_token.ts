/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { OracleSwap, RevokeApproval, Swap } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Aave AToken adaptor V1, used to manage lending positions on Aave */
export interface AaveATokenAdaptorV1 {
  /** Represents function `swap(ERC20 assetIn, ERC20 assetOut, uint256 amountIn, SwapRouter.Exchange exchange, bytes memory params)` */
  swap?:
    | Swap
    | undefined;
  /** Represents function `oracleSwap(ERC20 assetIn, ERC20 assetOut, uint256 amountIn, SwapRouter.Exchange exchange, bytes memory params, uint64 slippage)` */
  oracleSwap?:
    | OracleSwap
    | undefined;
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToAave(ERC20 tokenToDeposit, uint256 amountToDeposit)` */
  depositToAave?:
    | AaveATokenAdaptorV1_DepositToAave
    | undefined;
  /** Represents function `withdrawFromAave(ERC20 tokenToWithdraw, uint256 amountToWithdraw)` */
  withdrawFromAave?: AaveATokenAdaptorV1_WithdrawFromAave | undefined;
}

/**
 * Allows strategists to lend assets on Aave.
 *
 * Represents function `depositToAave(ERC20 tokenToDeposit, uint256 amountToDeposit)`
 */
export interface AaveATokenAdaptorV1_DepositToAave {
  /** The address of the ERC20 token to deposit */
  token: string;
  /** The amount to deposit */
  amount: string;
}

/**
 * Allows strategists to withdraw assets from Aave.
 *
 * Represents function `withdrawFromAave(ERC20 tokenToWithdraw, uint256 amountToWithdraw)`
 */
export interface AaveATokenAdaptorV1_WithdrawFromAave {
  /** The address of the ERC20 token to withdraw */
  token: string;
  /** The amount to withdraw */
  amount: string;
}

/** Represents call data for the Aave AToken adaptor V2, used to manage lending positions on Aave */
export interface AaveATokenAdaptorV2 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToAave(ERC20 tokenToDeposit, uint256 amountToDeposit)` */
  depositToAave?:
    | AaveATokenAdaptorV2_DepositToAave
    | undefined;
  /** Represents function `withdrawFromAave(ERC20 tokenToWithdraw, uint256 amountToWithdraw)` */
  withdrawFromAave?: AaveATokenAdaptorV2_WithdrawFromAave | undefined;
}

/**
 * Allows strategists to lend assets on Aave.
 *
 * Represents function `depositToAave(ERC20 tokenToDeposit, uint256 amountToDeposit)`
 */
export interface AaveATokenAdaptorV2_DepositToAave {
  /** The address of the ERC20 token to deposit */
  token: string;
  /** The amount to deposit */
  amount: string;
}

/**
 * Allows strategists to withdraw assets from Aave.
 *
 * Represents function `withdrawFromAave(ERC20 tokenToWithdraw, uint256 amountToWithdraw)`
 */
export interface AaveATokenAdaptorV2_WithdrawFromAave {
  /** The address of the ERC20 token to withdraw */
  token: string;
  /** The amount to withdraw */
  amount: string;
}

export interface AaveATokenAdaptorV1Calls {
  calls: AaveATokenAdaptorV1[];
}

export interface AaveATokenAdaptorV2Calls {
  calls: AaveATokenAdaptorV2[];
}

function createBaseAaveATokenAdaptorV1(): AaveATokenAdaptorV1 {
  return {
    swap: undefined,
    oracleSwap: undefined,
    revokeApproval: undefined,
    depositToAave: undefined,
    withdrawFromAave: undefined,
  };
}

export const AaveATokenAdaptorV1 = {
  encode(message: AaveATokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    if (message.oracleSwap !== undefined) {
      OracleSwap.encode(message.oracleSwap, writer.uint32(18).fork()).ldelim();
    }
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(26).fork()).ldelim();
    }
    if (message.depositToAave !== undefined) {
      AaveATokenAdaptorV1_DepositToAave.encode(message.depositToAave, writer.uint32(34).fork()).ldelim();
    }
    if (message.withdrawFromAave !== undefined) {
      AaveATokenAdaptorV1_WithdrawFromAave.encode(message.withdrawFromAave, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveATokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveATokenAdaptorV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.swap = Swap.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.oracleSwap = OracleSwap.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.revokeApproval = RevokeApproval.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.depositToAave = AaveATokenAdaptorV1_DepositToAave.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.withdrawFromAave = AaveATokenAdaptorV1_WithdrawFromAave.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveATokenAdaptorV1 {
    return {
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
      oracleSwap: isSet(object.oracleSwap) ? OracleSwap.fromJSON(object.oracleSwap) : undefined,
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToAave: isSet(object.depositToAave)
        ? AaveATokenAdaptorV1_DepositToAave.fromJSON(object.depositToAave)
        : undefined,
      withdrawFromAave: isSet(object.withdrawFromAave)
        ? AaveATokenAdaptorV1_WithdrawFromAave.fromJSON(object.withdrawFromAave)
        : undefined,
    };
  },

  toJSON(message: AaveATokenAdaptorV1): unknown {
    const obj: any = {};
    if (message.swap !== undefined) {
      obj.swap = Swap.toJSON(message.swap);
    }
    if (message.oracleSwap !== undefined) {
      obj.oracleSwap = OracleSwap.toJSON(message.oracleSwap);
    }
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToAave !== undefined) {
      obj.depositToAave = AaveATokenAdaptorV1_DepositToAave.toJSON(message.depositToAave);
    }
    if (message.withdrawFromAave !== undefined) {
      obj.withdrawFromAave = AaveATokenAdaptorV1_WithdrawFromAave.toJSON(message.withdrawFromAave);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveATokenAdaptorV1>, I>>(base?: I): AaveATokenAdaptorV1 {
    return AaveATokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveATokenAdaptorV1>, I>>(object: I): AaveATokenAdaptorV1 {
    const message = createBaseAaveATokenAdaptorV1();
    message.swap = (object.swap !== undefined && object.swap !== null) ? Swap.fromPartial(object.swap) : undefined;
    message.oracleSwap = (object.oracleSwap !== undefined && object.oracleSwap !== null)
      ? OracleSwap.fromPartial(object.oracleSwap)
      : undefined;
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToAave = (object.depositToAave !== undefined && object.depositToAave !== null)
      ? AaveATokenAdaptorV1_DepositToAave.fromPartial(object.depositToAave)
      : undefined;
    message.withdrawFromAave = (object.withdrawFromAave !== undefined && object.withdrawFromAave !== null)
      ? AaveATokenAdaptorV1_WithdrawFromAave.fromPartial(object.withdrawFromAave)
      : undefined;
    return message;
  },
};

function createBaseAaveATokenAdaptorV1_DepositToAave(): AaveATokenAdaptorV1_DepositToAave {
  return { token: "", amount: "" };
}

export const AaveATokenAdaptorV1_DepositToAave = {
  encode(message: AaveATokenAdaptorV1_DepositToAave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveATokenAdaptorV1_DepositToAave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveATokenAdaptorV1_DepositToAave();
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

  fromJSON(object: any): AaveATokenAdaptorV1_DepositToAave {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveATokenAdaptorV1_DepositToAave): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveATokenAdaptorV1_DepositToAave>, I>>(
    base?: I,
  ): AaveATokenAdaptorV1_DepositToAave {
    return AaveATokenAdaptorV1_DepositToAave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveATokenAdaptorV1_DepositToAave>, I>>(
    object: I,
  ): AaveATokenAdaptorV1_DepositToAave {
    const message = createBaseAaveATokenAdaptorV1_DepositToAave();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveATokenAdaptorV1_WithdrawFromAave(): AaveATokenAdaptorV1_WithdrawFromAave {
  return { token: "", amount: "" };
}

export const AaveATokenAdaptorV1_WithdrawFromAave = {
  encode(message: AaveATokenAdaptorV1_WithdrawFromAave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveATokenAdaptorV1_WithdrawFromAave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveATokenAdaptorV1_WithdrawFromAave();
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

  fromJSON(object: any): AaveATokenAdaptorV1_WithdrawFromAave {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveATokenAdaptorV1_WithdrawFromAave): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveATokenAdaptorV1_WithdrawFromAave>, I>>(
    base?: I,
  ): AaveATokenAdaptorV1_WithdrawFromAave {
    return AaveATokenAdaptorV1_WithdrawFromAave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveATokenAdaptorV1_WithdrawFromAave>, I>>(
    object: I,
  ): AaveATokenAdaptorV1_WithdrawFromAave {
    const message = createBaseAaveATokenAdaptorV1_WithdrawFromAave();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveATokenAdaptorV2(): AaveATokenAdaptorV2 {
  return { revokeApproval: undefined, depositToAave: undefined, withdrawFromAave: undefined };
}

export const AaveATokenAdaptorV2 = {
  encode(message: AaveATokenAdaptorV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositToAave !== undefined) {
      AaveATokenAdaptorV2_DepositToAave.encode(message.depositToAave, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawFromAave !== undefined) {
      AaveATokenAdaptorV2_WithdrawFromAave.encode(message.withdrawFromAave, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveATokenAdaptorV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveATokenAdaptorV2();
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

          message.depositToAave = AaveATokenAdaptorV2_DepositToAave.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromAave = AaveATokenAdaptorV2_WithdrawFromAave.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveATokenAdaptorV2 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToAave: isSet(object.depositToAave)
        ? AaveATokenAdaptorV2_DepositToAave.fromJSON(object.depositToAave)
        : undefined,
      withdrawFromAave: isSet(object.withdrawFromAave)
        ? AaveATokenAdaptorV2_WithdrawFromAave.fromJSON(object.withdrawFromAave)
        : undefined,
    };
  },

  toJSON(message: AaveATokenAdaptorV2): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToAave !== undefined) {
      obj.depositToAave = AaveATokenAdaptorV2_DepositToAave.toJSON(message.depositToAave);
    }
    if (message.withdrawFromAave !== undefined) {
      obj.withdrawFromAave = AaveATokenAdaptorV2_WithdrawFromAave.toJSON(message.withdrawFromAave);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveATokenAdaptorV2>, I>>(base?: I): AaveATokenAdaptorV2 {
    return AaveATokenAdaptorV2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveATokenAdaptorV2>, I>>(object: I): AaveATokenAdaptorV2 {
    const message = createBaseAaveATokenAdaptorV2();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToAave = (object.depositToAave !== undefined && object.depositToAave !== null)
      ? AaveATokenAdaptorV2_DepositToAave.fromPartial(object.depositToAave)
      : undefined;
    message.withdrawFromAave = (object.withdrawFromAave !== undefined && object.withdrawFromAave !== null)
      ? AaveATokenAdaptorV2_WithdrawFromAave.fromPartial(object.withdrawFromAave)
      : undefined;
    return message;
  },
};

function createBaseAaveATokenAdaptorV2_DepositToAave(): AaveATokenAdaptorV2_DepositToAave {
  return { token: "", amount: "" };
}

export const AaveATokenAdaptorV2_DepositToAave = {
  encode(message: AaveATokenAdaptorV2_DepositToAave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveATokenAdaptorV2_DepositToAave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveATokenAdaptorV2_DepositToAave();
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

  fromJSON(object: any): AaveATokenAdaptorV2_DepositToAave {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveATokenAdaptorV2_DepositToAave): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveATokenAdaptorV2_DepositToAave>, I>>(
    base?: I,
  ): AaveATokenAdaptorV2_DepositToAave {
    return AaveATokenAdaptorV2_DepositToAave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveATokenAdaptorV2_DepositToAave>, I>>(
    object: I,
  ): AaveATokenAdaptorV2_DepositToAave {
    const message = createBaseAaveATokenAdaptorV2_DepositToAave();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveATokenAdaptorV2_WithdrawFromAave(): AaveATokenAdaptorV2_WithdrawFromAave {
  return { token: "", amount: "" };
}

export const AaveATokenAdaptorV2_WithdrawFromAave = {
  encode(message: AaveATokenAdaptorV2_WithdrawFromAave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveATokenAdaptorV2_WithdrawFromAave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveATokenAdaptorV2_WithdrawFromAave();
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

  fromJSON(object: any): AaveATokenAdaptorV2_WithdrawFromAave {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveATokenAdaptorV2_WithdrawFromAave): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveATokenAdaptorV2_WithdrawFromAave>, I>>(
    base?: I,
  ): AaveATokenAdaptorV2_WithdrawFromAave {
    return AaveATokenAdaptorV2_WithdrawFromAave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveATokenAdaptorV2_WithdrawFromAave>, I>>(
    object: I,
  ): AaveATokenAdaptorV2_WithdrawFromAave {
    const message = createBaseAaveATokenAdaptorV2_WithdrawFromAave();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveATokenAdaptorV1Calls(): AaveATokenAdaptorV1Calls {
  return { calls: [] };
}

export const AaveATokenAdaptorV1Calls = {
  encode(message: AaveATokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      AaveATokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveATokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveATokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(AaveATokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveATokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => AaveATokenAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AaveATokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => AaveATokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveATokenAdaptorV1Calls>, I>>(base?: I): AaveATokenAdaptorV1Calls {
    return AaveATokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveATokenAdaptorV1Calls>, I>>(object: I): AaveATokenAdaptorV1Calls {
    const message = createBaseAaveATokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => AaveATokenAdaptorV1.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAaveATokenAdaptorV2Calls(): AaveATokenAdaptorV2Calls {
  return { calls: [] };
}

export const AaveATokenAdaptorV2Calls = {
  encode(message: AaveATokenAdaptorV2Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      AaveATokenAdaptorV2.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveATokenAdaptorV2Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveATokenAdaptorV2Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(AaveATokenAdaptorV2.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveATokenAdaptorV2Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => AaveATokenAdaptorV2.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AaveATokenAdaptorV2Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => AaveATokenAdaptorV2.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveATokenAdaptorV2Calls>, I>>(base?: I): AaveATokenAdaptorV2Calls {
    return AaveATokenAdaptorV2Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveATokenAdaptorV2Calls>, I>>(object: I): AaveATokenAdaptorV2Calls {
    const message = createBaseAaveATokenAdaptorV2Calls();
    message.calls = object.calls?.map((e) => AaveATokenAdaptorV2.fromPartial(e)) || [];
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
