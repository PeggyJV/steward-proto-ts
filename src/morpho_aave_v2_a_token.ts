/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";
import { Claim } from "./morpho_reward_handler";

export const protobufPackage = "steward.v4";

/** Represents call data for the Morpho Aave V2 AToken adaptor. */
export interface MorphoAaveV2ATokenAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToAaveV2Morpho(IAaveToken aToken, uint256 amountToDeposit)` */
  depositToAaveV2Morpho?:
    | MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho
    | undefined;
  /** Represents function `withdrawFromAaveV2Morpho(IAaveToken aToken, uint256 amountToWithdraw)` */
  withdrawFromAaveV2Morpho?:
    | MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho
    | undefined;
  /** Represents function `claim(uint256 claimable, bytes32[] memory proof)` */
  claim?: Claim | undefined;
}

/**
 * Allows strategists to lend assets on Morpho.
 *
 * Represents function `depositToAaveV2Morpho(IAaveToken aToken, uint256 amountToDeposit)`
 */
export interface MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho {
  /** The address of the Aave V2 aToken to deposit to. */
  aToken: string;
  /** The amount of the asset to deposit. */
  amountToDeposit: string;
}

/**
 * Allows strategists to withdraw assets from Morpho.
 *
 * Represents function `withdrawFromAaveV2Morpho(IAaveToken aToken, uint256 amountToWithdraw)`
 */
export interface MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho {
  /** The address of the Aave V2 aToken to withdraw from. */
  aToken: string;
  /** The amount of the asset to withdraw. */
  amountToWithdraw: string;
}

export interface MorphoAaveV2ATokenAdaptorV1Calls {
  calls: MorphoAaveV2ATokenAdaptorV1[];
}

function createBaseMorphoAaveV2ATokenAdaptorV1(): MorphoAaveV2ATokenAdaptorV1 {
  return {
    revokeApproval: undefined,
    depositToAaveV2Morpho: undefined,
    withdrawFromAaveV2Morpho: undefined,
    claim: undefined,
  };
}

export const MorphoAaveV2ATokenAdaptorV1 = {
  encode(message: MorphoAaveV2ATokenAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositToAaveV2Morpho !== undefined) {
      MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho.encode(message.depositToAaveV2Morpho, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.withdrawFromAaveV2Morpho !== undefined) {
      MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho.encode(
        message.withdrawFromAaveV2Morpho,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV2ATokenAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV2ATokenAdaptorV1();
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

          message.depositToAaveV2Morpho = MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromAaveV2Morpho = MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho.decode(
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

  fromJSON(object: any): MorphoAaveV2ATokenAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToAaveV2Morpho: isSet(object.depositToAaveV2Morpho)
        ? MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho.fromJSON(object.depositToAaveV2Morpho)
        : undefined,
      withdrawFromAaveV2Morpho: isSet(object.withdrawFromAaveV2Morpho)
        ? MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho.fromJSON(object.withdrawFromAaveV2Morpho)
        : undefined,
      claim: isSet(object.claim) ? Claim.fromJSON(object.claim) : undefined,
    };
  },

  toJSON(message: MorphoAaveV2ATokenAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToAaveV2Morpho !== undefined) {
      obj.depositToAaveV2Morpho = MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho.toJSON(
        message.depositToAaveV2Morpho,
      );
    }
    if (message.withdrawFromAaveV2Morpho !== undefined) {
      obj.withdrawFromAaveV2Morpho = MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho.toJSON(
        message.withdrawFromAaveV2Morpho,
      );
    }
    if (message.claim !== undefined) {
      obj.claim = Claim.toJSON(message.claim);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV2ATokenAdaptorV1>, I>>(base?: I): MorphoAaveV2ATokenAdaptorV1 {
    return MorphoAaveV2ATokenAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV2ATokenAdaptorV1>, I>>(object: I): MorphoAaveV2ATokenAdaptorV1 {
    const message = createBaseMorphoAaveV2ATokenAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToAaveV2Morpho =
      (object.depositToAaveV2Morpho !== undefined && object.depositToAaveV2Morpho !== null)
        ? MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho.fromPartial(object.depositToAaveV2Morpho)
        : undefined;
    message.withdrawFromAaveV2Morpho =
      (object.withdrawFromAaveV2Morpho !== undefined && object.withdrawFromAaveV2Morpho !== null)
        ? MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho.fromPartial(object.withdrawFromAaveV2Morpho)
        : undefined;
    message.claim = (object.claim !== undefined && object.claim !== null) ? Claim.fromPartial(object.claim) : undefined;
    return message;
  },
};

function createBaseMorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho(): MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho {
  return { aToken: "", amountToDeposit: "" };
}

export const MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho = {
  encode(
    message: MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.aToken !== "") {
      writer.uint32(10).string(message.aToken);
    }
    if (message.amountToDeposit !== "") {
      writer.uint32(18).string(message.amountToDeposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho();
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

  fromJSON(object: any): MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho {
    return {
      aToken: isSet(object.aToken) ? globalThis.String(object.aToken) : "",
      amountToDeposit: isSet(object.amountToDeposit) ? globalThis.String(object.amountToDeposit) : "",
    };
  },

  toJSON(message: MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho): unknown {
    const obj: any = {};
    if (message.aToken !== "") {
      obj.aToken = message.aToken;
    }
    if (message.amountToDeposit !== "") {
      obj.amountToDeposit = message.amountToDeposit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho>, I>>(
    base?: I,
  ): MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho {
    return MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho>, I>>(
    object: I,
  ): MorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho {
    const message = createBaseMorphoAaveV2ATokenAdaptorV1_DepositToAaveV2Morpho();
    message.aToken = object.aToken ?? "";
    message.amountToDeposit = object.amountToDeposit ?? "";
    return message;
  },
};

function createBaseMorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho(): MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho {
  return { aToken: "", amountToWithdraw: "" };
}

export const MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho = {
  encode(
    message: MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.aToken !== "") {
      writer.uint32(10).string(message.aToken);
    }
    if (message.amountToWithdraw !== "") {
      writer.uint32(18).string(message.amountToWithdraw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho();
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

  fromJSON(object: any): MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho {
    return {
      aToken: isSet(object.aToken) ? globalThis.String(object.aToken) : "",
      amountToWithdraw: isSet(object.amountToWithdraw) ? globalThis.String(object.amountToWithdraw) : "",
    };
  },

  toJSON(message: MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho): unknown {
    const obj: any = {};
    if (message.aToken !== "") {
      obj.aToken = message.aToken;
    }
    if (message.amountToWithdraw !== "") {
      obj.amountToWithdraw = message.amountToWithdraw;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho>, I>>(
    base?: I,
  ): MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho {
    return MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho>, I>>(
    object: I,
  ): MorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho {
    const message = createBaseMorphoAaveV2ATokenAdaptorV1_WithdrawFromAaveV2Morpho();
    message.aToken = object.aToken ?? "";
    message.amountToWithdraw = object.amountToWithdraw ?? "";
    return message;
  },
};

function createBaseMorphoAaveV2ATokenAdaptorV1Calls(): MorphoAaveV2ATokenAdaptorV1Calls {
  return { calls: [] };
}

export const MorphoAaveV2ATokenAdaptorV1Calls = {
  encode(message: MorphoAaveV2ATokenAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      MorphoAaveV2ATokenAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MorphoAaveV2ATokenAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorphoAaveV2ATokenAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(MorphoAaveV2ATokenAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MorphoAaveV2ATokenAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => MorphoAaveV2ATokenAdaptorV1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MorphoAaveV2ATokenAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => MorphoAaveV2ATokenAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MorphoAaveV2ATokenAdaptorV1Calls>, I>>(
    base?: I,
  ): MorphoAaveV2ATokenAdaptorV1Calls {
    return MorphoAaveV2ATokenAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MorphoAaveV2ATokenAdaptorV1Calls>, I>>(
    object: I,
  ): MorphoAaveV2ATokenAdaptorV1Calls {
    const message = createBaseMorphoAaveV2ATokenAdaptorV1Calls();
    message.calls = object.calls?.map((e) => MorphoAaveV2ATokenAdaptorV1.fromPartial(e)) || [];
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
