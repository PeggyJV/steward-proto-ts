/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { OracleSwap, RevokeApproval, Swap } from "./base";
import { Exchange, exchangeFromJSON, exchangeToJSON, SwapParams } from "./common";

export const protobufPackage = "steward.v4";

/** Represents call data for the Aave Debt Token adaptor V1, used for borrowing and repaying debt on Aave. */
export interface AaveDebtTokenAdaptorV1 {
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
  /** Represents function `borrowFromAave(ERC20 debtTokenToBorrow, uint256 amountToBorrow)` */
  borrowFromAave?:
    | AaveDebtTokenAdaptorV1_BorrowFromAave
    | undefined;
  /** Represents function `repayAaveDebt(ERC20 tokenToRepay, uint256 amountToRepay)` */
  repayAaveDebt?:
    | AaveDebtTokenAdaptorV1_RepayAaveDebt
    | undefined;
  /** Represents function `swapAndRepay(ERC20 tokenIn, ERC20 tokenToRepay, uint256 amountIn, SwapRouter.Exchange exchange, bytes memory params)` */
  swapAndRepay?: AaveDebtTokenAdaptorV1_SwapAndRepay | undefined;
}

/**
 * Allows strategists to borrow assets from Aave.
 *
 * Represents function `depositToAave(ERC20 tokenToDeposit, uint256 amountToDeposit)`
 */
export interface AaveDebtTokenAdaptorV1_BorrowFromAave {
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
export interface AaveDebtTokenAdaptorV1_RepayAaveDebt {
  /** The address of the ERC20 token to repay */
  token: string;
  /** The amount to repay */
  amount: string;
}

/**
 * Allows strategists to swap assets and repay loans in one call.
 *
 * Represents function `swapAndRepay(ERC20 tokenIn, ERC20 tokenToRepay, uint256 amountIn, SwapRouter.Exchange exchange, bytes memory params)`
 */
export interface AaveDebtTokenAdaptorV1_SwapAndRepay {
  /** The address of the token to swap from */
  tokenIn: string;
  /** The address of the token to swap to and repay with */
  tokenToRepay: string;
  /** The amount to swap */
  amountIn: string;
  /** The exchange to make the swap on */
  exchange: Exchange;
  /** The parameters for the swap */
  params: SwapParams | undefined;
}

/** Represents call data for the Aave Debt Token adaptor V2, used for borrowing and repaying debt on Aave. */
export interface AaveDebtTokenAdaptorV2 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `borrowFromAave(ERC20 debtTokenToBorrow, uint256 amountToBorrow)` */
  borrowFromAave?:
    | AaveDebtTokenAdaptorV2_BorrowFromAave
    | undefined;
  /** Represents function `repayAaveDebt(ERC20 tokenToRepay, uint256 amountToRepay)` */
  repayAaveDebt?: AaveDebtTokenAdaptorV2_RepayAaveDebt | undefined;
}

/**
 * Allows strategists to borrow assets from Aave.
 *
 * Represents function `depositToAave(ERC20 tokenToDeposit, uint256 amountToDeposit)`
 */
export interface AaveDebtTokenAdaptorV2_BorrowFromAave {
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
export interface AaveDebtTokenAdaptorV2_RepayAaveDebt {
  /** The address of the ERC20 token to repay */
  token: string;
  /** The amount to repay */
  amount: string;
}

export interface AaveDebtTokenAdaptorV1Calls {
  calls: AaveDebtTokenAdaptorV1[];
}

export interface AaveDebtTokenAdaptorV2Calls {
  calls: AaveDebtTokenAdaptorV2[];
}

function createBaseAaveDebtTokenAdaptorV1(): AaveDebtTokenAdaptorV1 {
  return {
    swap: undefined,
    oracleSwap: undefined,
    revokeApproval: undefined,
    borrowFromAave: undefined,
    repayAaveDebt: undefined,
    swapAndRepay: undefined,
  };
}

export const AaveDebtTokenAdaptorV1 = {
  encode(message: AaveDebtTokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    if (message.oracleSwap !== undefined) {
      OracleSwap.encode(message.oracleSwap, writer.uint32(18).fork()).ldelim();
    }
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(26).fork()).ldelim();
    }
    if (message.borrowFromAave !== undefined) {
      AaveDebtTokenAdaptorV1_BorrowFromAave.encode(message.borrowFromAave, writer.uint32(34).fork()).ldelim();
    }
    if (message.repayAaveDebt !== undefined) {
      AaveDebtTokenAdaptorV1_RepayAaveDebt.encode(message.repayAaveDebt, writer.uint32(42).fork()).ldelim();
    }
    if (message.swapAndRepay !== undefined) {
      AaveDebtTokenAdaptorV1_SwapAndRepay.encode(message.swapAndRepay, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveDebtTokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveDebtTokenAdaptorV1();
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

          message.borrowFromAave = AaveDebtTokenAdaptorV1_BorrowFromAave.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.repayAaveDebt = AaveDebtTokenAdaptorV1_RepayAaveDebt.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.swapAndRepay = AaveDebtTokenAdaptorV1_SwapAndRepay.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveDebtTokenAdaptorV1 {
    return {
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
      oracleSwap: isSet(object.oracleSwap) ? OracleSwap.fromJSON(object.oracleSwap) : undefined,
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      borrowFromAave: isSet(object.borrowFromAave)
        ? AaveDebtTokenAdaptorV1_BorrowFromAave.fromJSON(object.borrowFromAave)
        : undefined,
      repayAaveDebt: isSet(object.repayAaveDebt)
        ? AaveDebtTokenAdaptorV1_RepayAaveDebt.fromJSON(object.repayAaveDebt)
        : undefined,
      swapAndRepay: isSet(object.swapAndRepay)
        ? AaveDebtTokenAdaptorV1_SwapAndRepay.fromJSON(object.swapAndRepay)
        : undefined,
    };
  },

  toJSON(message: AaveDebtTokenAdaptorV1): unknown {
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
    if (message.borrowFromAave !== undefined) {
      obj.borrowFromAave = AaveDebtTokenAdaptorV1_BorrowFromAave.toJSON(message.borrowFromAave);
    }
    if (message.repayAaveDebt !== undefined) {
      obj.repayAaveDebt = AaveDebtTokenAdaptorV1_RepayAaveDebt.toJSON(message.repayAaveDebt);
    }
    if (message.swapAndRepay !== undefined) {
      obj.swapAndRepay = AaveDebtTokenAdaptorV1_SwapAndRepay.toJSON(message.swapAndRepay);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1>, I>>(base?: I): AaveDebtTokenAdaptorV1 {
    return AaveDebtTokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1>, I>>(object: I): AaveDebtTokenAdaptorV1 {
    const message = createBaseAaveDebtTokenAdaptorV1();
    message.swap = (object.swap !== undefined && object.swap !== null) ? Swap.fromPartial(object.swap) : undefined;
    message.oracleSwap = (object.oracleSwap !== undefined && object.oracleSwap !== null)
      ? OracleSwap.fromPartial(object.oracleSwap)
      : undefined;
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.borrowFromAave = (object.borrowFromAave !== undefined && object.borrowFromAave !== null)
      ? AaveDebtTokenAdaptorV1_BorrowFromAave.fromPartial(object.borrowFromAave)
      : undefined;
    message.repayAaveDebt = (object.repayAaveDebt !== undefined && object.repayAaveDebt !== null)
      ? AaveDebtTokenAdaptorV1_RepayAaveDebt.fromPartial(object.repayAaveDebt)
      : undefined;
    message.swapAndRepay = (object.swapAndRepay !== undefined && object.swapAndRepay !== null)
      ? AaveDebtTokenAdaptorV1_SwapAndRepay.fromPartial(object.swapAndRepay)
      : undefined;
    return message;
  },
};

function createBaseAaveDebtTokenAdaptorV1_BorrowFromAave(): AaveDebtTokenAdaptorV1_BorrowFromAave {
  return { token: "", amount: "" };
}

export const AaveDebtTokenAdaptorV1_BorrowFromAave = {
  encode(message: AaveDebtTokenAdaptorV1_BorrowFromAave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveDebtTokenAdaptorV1_BorrowFromAave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveDebtTokenAdaptorV1_BorrowFromAave();
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

  fromJSON(object: any): AaveDebtTokenAdaptorV1_BorrowFromAave {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveDebtTokenAdaptorV1_BorrowFromAave): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1_BorrowFromAave>, I>>(
    base?: I,
  ): AaveDebtTokenAdaptorV1_BorrowFromAave {
    return AaveDebtTokenAdaptorV1_BorrowFromAave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1_BorrowFromAave>, I>>(
    object: I,
  ): AaveDebtTokenAdaptorV1_BorrowFromAave {
    const message = createBaseAaveDebtTokenAdaptorV1_BorrowFromAave();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveDebtTokenAdaptorV1_RepayAaveDebt(): AaveDebtTokenAdaptorV1_RepayAaveDebt {
  return { token: "", amount: "" };
}

export const AaveDebtTokenAdaptorV1_RepayAaveDebt = {
  encode(message: AaveDebtTokenAdaptorV1_RepayAaveDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveDebtTokenAdaptorV1_RepayAaveDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveDebtTokenAdaptorV1_RepayAaveDebt();
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

  fromJSON(object: any): AaveDebtTokenAdaptorV1_RepayAaveDebt {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveDebtTokenAdaptorV1_RepayAaveDebt): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1_RepayAaveDebt>, I>>(
    base?: I,
  ): AaveDebtTokenAdaptorV1_RepayAaveDebt {
    return AaveDebtTokenAdaptorV1_RepayAaveDebt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1_RepayAaveDebt>, I>>(
    object: I,
  ): AaveDebtTokenAdaptorV1_RepayAaveDebt {
    const message = createBaseAaveDebtTokenAdaptorV1_RepayAaveDebt();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveDebtTokenAdaptorV1_SwapAndRepay(): AaveDebtTokenAdaptorV1_SwapAndRepay {
  return { tokenIn: "", tokenToRepay: "", amountIn: "", exchange: 0, params: undefined };
}

export const AaveDebtTokenAdaptorV1_SwapAndRepay = {
  encode(message: AaveDebtTokenAdaptorV1_SwapAndRepay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenToRepay !== "") {
      writer.uint32(18).string(message.tokenToRepay);
    }
    if (message.amountIn !== "") {
      writer.uint32(26).string(message.amountIn);
    }
    if (message.exchange !== 0) {
      writer.uint32(32).int32(message.exchange);
    }
    if (message.params !== undefined) {
      SwapParams.encode(message.params, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveDebtTokenAdaptorV1_SwapAndRepay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveDebtTokenAdaptorV1_SwapAndRepay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenIn = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokenToRepay = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.exchange = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.params = SwapParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveDebtTokenAdaptorV1_SwapAndRepay {
    return {
      tokenIn: isSet(object.tokenIn) ? globalThis.String(object.tokenIn) : "",
      tokenToRepay: isSet(object.tokenToRepay) ? globalThis.String(object.tokenToRepay) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      exchange: isSet(object.exchange) ? exchangeFromJSON(object.exchange) : 0,
      params: isSet(object.params) ? SwapParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: AaveDebtTokenAdaptorV1_SwapAndRepay): unknown {
    const obj: any = {};
    if (message.tokenIn !== "") {
      obj.tokenIn = message.tokenIn;
    }
    if (message.tokenToRepay !== "") {
      obj.tokenToRepay = message.tokenToRepay;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.exchange !== 0) {
      obj.exchange = exchangeToJSON(message.exchange);
    }
    if (message.params !== undefined) {
      obj.params = SwapParams.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1_SwapAndRepay>, I>>(
    base?: I,
  ): AaveDebtTokenAdaptorV1_SwapAndRepay {
    return AaveDebtTokenAdaptorV1_SwapAndRepay.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1_SwapAndRepay>, I>>(
    object: I,
  ): AaveDebtTokenAdaptorV1_SwapAndRepay {
    const message = createBaseAaveDebtTokenAdaptorV1_SwapAndRepay();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenToRepay = object.tokenToRepay ?? "";
    message.amountIn = object.amountIn ?? "";
    message.exchange = object.exchange ?? 0;
    message.params = (object.params !== undefined && object.params !== null)
      ? SwapParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseAaveDebtTokenAdaptorV2(): AaveDebtTokenAdaptorV2 {
  return { revokeApproval: undefined, borrowFromAave: undefined, repayAaveDebt: undefined };
}

export const AaveDebtTokenAdaptorV2 = {
  encode(message: AaveDebtTokenAdaptorV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.borrowFromAave !== undefined) {
      AaveDebtTokenAdaptorV2_BorrowFromAave.encode(message.borrowFromAave, writer.uint32(18).fork()).ldelim();
    }
    if (message.repayAaveDebt !== undefined) {
      AaveDebtTokenAdaptorV2_RepayAaveDebt.encode(message.repayAaveDebt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveDebtTokenAdaptorV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveDebtTokenAdaptorV2();
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

          message.borrowFromAave = AaveDebtTokenAdaptorV2_BorrowFromAave.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repayAaveDebt = AaveDebtTokenAdaptorV2_RepayAaveDebt.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveDebtTokenAdaptorV2 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      borrowFromAave: isSet(object.borrowFromAave)
        ? AaveDebtTokenAdaptorV2_BorrowFromAave.fromJSON(object.borrowFromAave)
        : undefined,
      repayAaveDebt: isSet(object.repayAaveDebt)
        ? AaveDebtTokenAdaptorV2_RepayAaveDebt.fromJSON(object.repayAaveDebt)
        : undefined,
    };
  },

  toJSON(message: AaveDebtTokenAdaptorV2): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.borrowFromAave !== undefined) {
      obj.borrowFromAave = AaveDebtTokenAdaptorV2_BorrowFromAave.toJSON(message.borrowFromAave);
    }
    if (message.repayAaveDebt !== undefined) {
      obj.repayAaveDebt = AaveDebtTokenAdaptorV2_RepayAaveDebt.toJSON(message.repayAaveDebt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV2>, I>>(base?: I): AaveDebtTokenAdaptorV2 {
    return AaveDebtTokenAdaptorV2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV2>, I>>(object: I): AaveDebtTokenAdaptorV2 {
    const message = createBaseAaveDebtTokenAdaptorV2();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.borrowFromAave = (object.borrowFromAave !== undefined && object.borrowFromAave !== null)
      ? AaveDebtTokenAdaptorV2_BorrowFromAave.fromPartial(object.borrowFromAave)
      : undefined;
    message.repayAaveDebt = (object.repayAaveDebt !== undefined && object.repayAaveDebt !== null)
      ? AaveDebtTokenAdaptorV2_RepayAaveDebt.fromPartial(object.repayAaveDebt)
      : undefined;
    return message;
  },
};

function createBaseAaveDebtTokenAdaptorV2_BorrowFromAave(): AaveDebtTokenAdaptorV2_BorrowFromAave {
  return { token: "", amount: "" };
}

export const AaveDebtTokenAdaptorV2_BorrowFromAave = {
  encode(message: AaveDebtTokenAdaptorV2_BorrowFromAave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveDebtTokenAdaptorV2_BorrowFromAave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveDebtTokenAdaptorV2_BorrowFromAave();
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

  fromJSON(object: any): AaveDebtTokenAdaptorV2_BorrowFromAave {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveDebtTokenAdaptorV2_BorrowFromAave): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV2_BorrowFromAave>, I>>(
    base?: I,
  ): AaveDebtTokenAdaptorV2_BorrowFromAave {
    return AaveDebtTokenAdaptorV2_BorrowFromAave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV2_BorrowFromAave>, I>>(
    object: I,
  ): AaveDebtTokenAdaptorV2_BorrowFromAave {
    const message = createBaseAaveDebtTokenAdaptorV2_BorrowFromAave();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveDebtTokenAdaptorV2_RepayAaveDebt(): AaveDebtTokenAdaptorV2_RepayAaveDebt {
  return { token: "", amount: "" };
}

export const AaveDebtTokenAdaptorV2_RepayAaveDebt = {
  encode(message: AaveDebtTokenAdaptorV2_RepayAaveDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveDebtTokenAdaptorV2_RepayAaveDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveDebtTokenAdaptorV2_RepayAaveDebt();
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

  fromJSON(object: any): AaveDebtTokenAdaptorV2_RepayAaveDebt {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: AaveDebtTokenAdaptorV2_RepayAaveDebt): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV2_RepayAaveDebt>, I>>(
    base?: I,
  ): AaveDebtTokenAdaptorV2_RepayAaveDebt {
    return AaveDebtTokenAdaptorV2_RepayAaveDebt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV2_RepayAaveDebt>, I>>(
    object: I,
  ): AaveDebtTokenAdaptorV2_RepayAaveDebt {
    const message = createBaseAaveDebtTokenAdaptorV2_RepayAaveDebt();
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAaveDebtTokenAdaptorV1Calls(): AaveDebtTokenAdaptorV1Calls {
  return { calls: [] };
}

export const AaveDebtTokenAdaptorV1Calls = {
  encode(message: AaveDebtTokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      AaveDebtTokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveDebtTokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveDebtTokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(AaveDebtTokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveDebtTokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => AaveDebtTokenAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AaveDebtTokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => AaveDebtTokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1Calls>, I>>(base?: I): AaveDebtTokenAdaptorV1Calls {
    return AaveDebtTokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV1Calls>, I>>(object: I): AaveDebtTokenAdaptorV1Calls {
    const message = createBaseAaveDebtTokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => AaveDebtTokenAdaptorV1.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAaveDebtTokenAdaptorV2Calls(): AaveDebtTokenAdaptorV2Calls {
  return { calls: [] };
}

export const AaveDebtTokenAdaptorV2Calls = {
  encode(message: AaveDebtTokenAdaptorV2Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      AaveDebtTokenAdaptorV2.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveDebtTokenAdaptorV2Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveDebtTokenAdaptorV2Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(AaveDebtTokenAdaptorV2.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveDebtTokenAdaptorV2Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => AaveDebtTokenAdaptorV2.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AaveDebtTokenAdaptorV2Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => AaveDebtTokenAdaptorV2.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV2Calls>, I>>(base?: I): AaveDebtTokenAdaptorV2Calls {
    return AaveDebtTokenAdaptorV2Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveDebtTokenAdaptorV2Calls>, I>>(object: I): AaveDebtTokenAdaptorV2Calls {
    const message = createBaseAaveDebtTokenAdaptorV2Calls();
    message.calls = object.calls?.map((e) => AaveDebtTokenAdaptorV2.fromPartial(e)) || [];
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
