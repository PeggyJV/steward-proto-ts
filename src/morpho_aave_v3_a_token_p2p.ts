/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";
import { Claim } from "./morpho_reward_handler";

export const protobufPackage = "steward.v4";

/** Represents call data for the Morpho Aave V3 A Token P2P adaptor. */
export interface MorphoAaveV3ATokenP2PAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToAaveV3Morpho(ERC20 tokenToDeposit, uint256 amountToDeposit, uint256 maxIterations)` */
  depositToAaveV3Morpho?:
    | MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho
    | undefined;
  /** Represents function `withdrawFromAaveV3Morpho(ERC20 tokenToWithdraw, uint256 amountToWithdraw, uint256 maxIterations)` */
  withdrawFromAaveV3Morpho?:
    | MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho
    | undefined;
  /** Represents function `claim(uint256 claimable, bytes32[] memory proof)` */
  claim?: Claim | undefined;
}

/**
 * Allows strategists to lend assets on Morpho
 *
 * Represents function `depositToAaveV3Morpho(ERC20 tokenToDeposit, uint256 amountToDeposit, uint256 maxIterations)`
 */
export interface MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho {
  /** The address of the token to deposit */
  tokenToDeposit: string;
  /** The amount of tokens to deposit */
  amountToDeposit: string;
  /** The maximum number of iterations to run */
  maxIterations: string;
}

/**
 * Allows strategists to withdraw assets from Morpho
 *
 * Represents function `withdrawFromAaveV3Morpho(ERC20 tokenToWithdraw, uint256 amountToWithdraw, uint256 maxIterations)`
 */
export interface MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho {
  /** The address of the token to withdraw */
  tokenToWithdraw: string;
  /** The amount of tokens to withdraw */
  amountToWithdraw: string;
  /** The maximum number of iterations to run */
  maxIterations: string;
}

export interface MorphoAaveV3ATokenP2PAdaptorV1Calls {
  calls: MorphoAaveV3ATokenP2PAdaptorV1[];
}

function createBaseMorphoAaveV3ATokenP2PAdaptorV1(): MorphoAaveV3ATokenP2PAdaptorV1 {
  return {
    revokeApproval: undefined,
    depositToAaveV3Morpho: undefined,
    withdrawFromAaveV3Morpho: undefined,
    claim: undefined,
  };
}

export const MorphoAaveV3ATokenP2PAdaptorV1 = {
  encode(message: MorphoAaveV3ATokenP2PAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositToAaveV3Morpho !== undefined) {
      MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho.encode(
        message.depositToAaveV3Morpho,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.withdrawFromAaveV3Morpho !== undefined) {
      MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho.encode(
        message.withdrawFromAaveV3Morpho,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV3ATokenP2PAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV3ATokenP2PAdaptorV1();
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

          message.depositToAaveV3Morpho = MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromAaveV3Morpho = MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.claim = Claim.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoAaveV3ATokenP2PAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToAaveV3Morpho: isSet(object.depositToAaveV3Morpho)
        ? MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho.fromJSON(object.depositToAaveV3Morpho)
        : undefined,
      withdrawFromAaveV3Morpho: isSet(object.withdrawFromAaveV3Morpho)
        ? MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho.fromJSON(object.withdrawFromAaveV3Morpho)
        : undefined,
      claim: isSet(object.claim) ? Claim.fromJSON(object.claim) : undefined,
    };
  },

  toJSON(message: MorphoAaveV3ATokenP2PAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToAaveV3Morpho !== undefined) {
      obj.depositToAaveV3Morpho = MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho.toJSON(
        message.depositToAaveV3Morpho,
      );
    }
    if (message.withdrawFromAaveV3Morpho !== undefined) {
      obj.withdrawFromAaveV3Morpho = MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho.toJSON(
        message.withdrawFromAaveV3Morpho,
      );
    }
    if (message.claim !== undefined) {
      obj.claim = Claim.toJSON(message.claim);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV3ATokenP2PAdaptorV1>, I>>(base?: I): MorphoAaveV3ATokenP2PAdaptorV1 {
    return MorphoAaveV3ATokenP2PAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV3ATokenP2PAdaptorV1>, I>>(
    object: I,
  ): MorphoAaveV3ATokenP2PAdaptorV1 {
    const message = createBaseMorphoAaveV3ATokenP2PAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToAaveV3Morpho =
      (object.depositToAaveV3Morpho !== undefined && object.depositToAaveV3Morpho !== null)
        ? MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho.fromPartial(object.depositToAaveV3Morpho)
        : undefined;
    message.withdrawFromAaveV3Morpho =
      (object.withdrawFromAaveV3Morpho !== undefined && object.withdrawFromAaveV3Morpho !== null)
        ? MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho.fromPartial(object.withdrawFromAaveV3Morpho)
        : undefined;
    message.claim = (object.claim !== undefined && object.claim !== null) ? Claim.fromPartial(object.claim) : undefined;
    return message;
  },
};

function createBaseMorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho(): MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho {
  return { tokenToDeposit: "", amountToDeposit: "", maxIterations: "" };
}

export const MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho = {
  encode(
    message: MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenToDeposit !== "") {
      writer.uint32(10).string(message.tokenToDeposit);
    }
    if (message.amountToDeposit !== "") {
      writer.uint32(18).string(message.amountToDeposit);
    }
    if (message.maxIterations !== "") {
      writer.uint32(26).string(message.maxIterations);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenToDeposit = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountToDeposit = reader.string();
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

  fromJSON(object: any): MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho {
    return {
      tokenToDeposit: isSet(object.tokenToDeposit) ? globalThis.String(object.tokenToDeposit) : "",
      amountToDeposit: isSet(object.amountToDeposit) ? globalThis.String(object.amountToDeposit) : "",
      maxIterations: isSet(object.maxIterations) ? globalThis.String(object.maxIterations) : "",
    };
  },

  toJSON(message: MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho): unknown {
    const obj: any = {};
    if (message.tokenToDeposit !== "") {
      obj.tokenToDeposit = message.tokenToDeposit;
    }
    if (message.amountToDeposit !== "") {
      obj.amountToDeposit = message.amountToDeposit;
    }
    if (message.maxIterations !== "") {
      obj.maxIterations = message.maxIterations;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho>, I>>(
    base?: I,
  ): MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho {
    return MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho>, I>>(
    object: I,
  ): MorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho {
    const message = createBaseMorphoAaveV3ATokenP2PAdaptorV1_DepositToAaveV3Morpho();
    message.tokenToDeposit = object.tokenToDeposit ?? "";
    message.amountToDeposit = object.amountToDeposit ?? "";
    message.maxIterations = object.maxIterations ?? "";
    return message;
  },
};

function createBaseMorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho(): MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho {
  return { tokenToWithdraw: "", amountToWithdraw: "", maxIterations: "" };
}

export const MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho = {
  encode(
    message: MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenToWithdraw !== "") {
      writer.uint32(10).string(message.tokenToWithdraw);
    }
    if (message.amountToWithdraw !== "") {
      writer.uint32(18).string(message.amountToWithdraw);
    }
    if (message.maxIterations !== "") {
      writer.uint32(26).string(message.maxIterations);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenToWithdraw = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountToWithdraw = reader.string();
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

  fromJSON(object: any): MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho {
    return {
      tokenToWithdraw: isSet(object.tokenToWithdraw) ? globalThis.String(object.tokenToWithdraw) : "",
      amountToWithdraw: isSet(object.amountToWithdraw) ? globalThis.String(object.amountToWithdraw) : "",
      maxIterations: isSet(object.maxIterations) ? globalThis.String(object.maxIterations) : "",
    };
  },

  toJSON(message: MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho): unknown {
    const obj: any = {};
    if (message.tokenToWithdraw !== "") {
      obj.tokenToWithdraw = message.tokenToWithdraw;
    }
    if (message.amountToWithdraw !== "") {
      obj.amountToWithdraw = message.amountToWithdraw;
    }
    if (message.maxIterations !== "") {
      obj.maxIterations = message.maxIterations;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho>, I>>(
    base?: I,
  ): MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho {
    return MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho>, I>>(
    object: I,
  ): MorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho {
    const message = createBaseMorphoAaveV3ATokenP2PAdaptorV1_WithdrawFromAaveV3Morpho();
    message.tokenToWithdraw = object.tokenToWithdraw ?? "";
    message.amountToWithdraw = object.amountToWithdraw ?? "";
    message.maxIterations = object.maxIterations ?? "";
    return message;
  },
};

function createBaseMorphoAaveV3ATokenP2PAdaptorV1Calls(): MorphoAaveV3ATokenP2PAdaptorV1Calls {
  return { calls: [] };
}

export const MorphoAaveV3ATokenP2PAdaptorV1Calls = {
  encode(message: MorphoAaveV3ATokenP2PAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      MorphoAaveV3ATokenP2PAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV3ATokenP2PAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV3ATokenP2PAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(MorphoAaveV3ATokenP2PAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoAaveV3ATokenP2PAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => MorphoAaveV3ATokenP2PAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MorphoAaveV3ATokenP2PAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => MorphoAaveV3ATokenP2PAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV3ATokenP2PAdaptorV1Calls>, I>>(
    base?: I,
  ): MorphoAaveV3ATokenP2PAdaptorV1Calls {
    return MorphoAaveV3ATokenP2PAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV3ATokenP2PAdaptorV1Calls>, I>>(
    object: I,
  ): MorphoAaveV3ATokenP2PAdaptorV1Calls {
    const message = createBaseMorphoAaveV3ATokenP2PAdaptorV1Calls();
    message.calls = object.calls?.map((e) => MorphoAaveV3ATokenP2PAdaptorV1.fromPartial(e)) || [];
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
