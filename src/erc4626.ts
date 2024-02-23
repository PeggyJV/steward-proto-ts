/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the ERC4626 adaptor V1 */
export interface ERC4626AdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `depositToVault(ERC4626 erc4626Vault, uint256 assets)` */
  depositToVault?:
    | ERC4626AdaptorV1_DepositToVault
    | undefined;
  /** Represents function `withdrawFromVault(ERC4626 erc4626Vault, uint256 assets)` */
  withdrawFromVault?: ERC4626AdaptorV1_WithdrawFromVault | undefined;
}

/**
 * Allows strategists to deposit into ERC4626 positions.
 *
 * Represents function `depositToVault(ERC4626 erc4626Vault, uint256 assets)`
 */
export interface ERC4626AdaptorV1_DepositToVault {
  /** The address of the ERC4626 vault */
  erc4626Vault: string;
  /** The amount of assets to deposit */
  assets: string;
}

/**
 * Allows strategists to withdraw from ERC4626 positions.
 *
 * Represents function `withdrawFromVault(ERC4626 erc4626Vault, uint256 assets)`
 */
export interface ERC4626AdaptorV1_WithdrawFromVault {
  /** The address of the ERC4626 vault */
  erc4626Vault: string;
  /** The amount of assets to withdraw */
  assets: string;
}

export interface ERC4626AdaptorV1Calls {
  calls: ERC4626AdaptorV1[];
}

function createBaseERC4626AdaptorV1(): ERC4626AdaptorV1 {
  return { revokeApproval: undefined, depositToVault: undefined, withdrawFromVault: undefined };
}

export const ERC4626AdaptorV1 = {
  encode(message: ERC4626AdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositToVault !== undefined) {
      ERC4626AdaptorV1_DepositToVault.encode(message.depositToVault, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawFromVault !== undefined) {
      ERC4626AdaptorV1_WithdrawFromVault.encode(message.withdrawFromVault, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC4626AdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC4626AdaptorV1();
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

          message.depositToVault = ERC4626AdaptorV1_DepositToVault.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawFromVault = ERC4626AdaptorV1_WithdrawFromVault.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ERC4626AdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      depositToVault: isSet(object.depositToVault)
        ? ERC4626AdaptorV1_DepositToVault.fromJSON(object.depositToVault)
        : undefined,
      withdrawFromVault: isSet(object.withdrawFromVault)
        ? ERC4626AdaptorV1_WithdrawFromVault.fromJSON(object.withdrawFromVault)
        : undefined,
    };
  },

  toJSON(message: ERC4626AdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.depositToVault !== undefined) {
      obj.depositToVault = ERC4626AdaptorV1_DepositToVault.toJSON(message.depositToVault);
    }
    if (message.withdrawFromVault !== undefined) {
      obj.withdrawFromVault = ERC4626AdaptorV1_WithdrawFromVault.toJSON(message.withdrawFromVault);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ERC4626AdaptorV1>, I>>(base?: I): ERC4626AdaptorV1 {
    return ERC4626AdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ERC4626AdaptorV1>, I>>(object: I): ERC4626AdaptorV1 {
    const message = createBaseERC4626AdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.depositToVault = (object.depositToVault !== undefined && object.depositToVault !== null)
      ? ERC4626AdaptorV1_DepositToVault.fromPartial(object.depositToVault)
      : undefined;
    message.withdrawFromVault = (object.withdrawFromVault !== undefined && object.withdrawFromVault !== null)
      ? ERC4626AdaptorV1_WithdrawFromVault.fromPartial(object.withdrawFromVault)
      : undefined;
    return message;
  },
};

function createBaseERC4626AdaptorV1_DepositToVault(): ERC4626AdaptorV1_DepositToVault {
  return { erc4626Vault: "", assets: "" };
}

export const ERC4626AdaptorV1_DepositToVault = {
  encode(message: ERC4626AdaptorV1_DepositToVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc4626Vault !== "") {
      writer.uint32(10).string(message.erc4626Vault);
    }
    if (message.assets !== "") {
      writer.uint32(18).string(message.assets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC4626AdaptorV1_DepositToVault {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC4626AdaptorV1_DepositToVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.erc4626Vault = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assets = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ERC4626AdaptorV1_DepositToVault {
    return {
      erc4626Vault: isSet(object.erc4626Vault) ? globalThis.String(object.erc4626Vault) : "",
      assets: isSet(object.assets) ? globalThis.String(object.assets) : "",
    };
  },

  toJSON(message: ERC4626AdaptorV1_DepositToVault): unknown {
    const obj: any = {};
    if (message.erc4626Vault !== "") {
      obj.erc4626Vault = message.erc4626Vault;
    }
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ERC4626AdaptorV1_DepositToVault>, I>>(base?: I): ERC4626AdaptorV1_DepositToVault {
    return ERC4626AdaptorV1_DepositToVault.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ERC4626AdaptorV1_DepositToVault>, I>>(
    object: I,
  ): ERC4626AdaptorV1_DepositToVault {
    const message = createBaseERC4626AdaptorV1_DepositToVault();
    message.erc4626Vault = object.erc4626Vault ?? "";
    message.assets = object.assets ?? "";
    return message;
  },
};

function createBaseERC4626AdaptorV1_WithdrawFromVault(): ERC4626AdaptorV1_WithdrawFromVault {
  return { erc4626Vault: "", assets: "" };
}

export const ERC4626AdaptorV1_WithdrawFromVault = {
  encode(message: ERC4626AdaptorV1_WithdrawFromVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc4626Vault !== "") {
      writer.uint32(10).string(message.erc4626Vault);
    }
    if (message.assets !== "") {
      writer.uint32(18).string(message.assets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC4626AdaptorV1_WithdrawFromVault {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC4626AdaptorV1_WithdrawFromVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.erc4626Vault = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assets = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ERC4626AdaptorV1_WithdrawFromVault {
    return {
      erc4626Vault: isSet(object.erc4626Vault) ? globalThis.String(object.erc4626Vault) : "",
      assets: isSet(object.assets) ? globalThis.String(object.assets) : "",
    };
  },

  toJSON(message: ERC4626AdaptorV1_WithdrawFromVault): unknown {
    const obj: any = {};
    if (message.erc4626Vault !== "") {
      obj.erc4626Vault = message.erc4626Vault;
    }
    if (message.assets !== "") {
      obj.assets = message.assets;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ERC4626AdaptorV1_WithdrawFromVault>, I>>(
    base?: I,
  ): ERC4626AdaptorV1_WithdrawFromVault {
    return ERC4626AdaptorV1_WithdrawFromVault.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ERC4626AdaptorV1_WithdrawFromVault>, I>>(
    object: I,
  ): ERC4626AdaptorV1_WithdrawFromVault {
    const message = createBaseERC4626AdaptorV1_WithdrawFromVault();
    message.erc4626Vault = object.erc4626Vault ?? "";
    message.assets = object.assets ?? "";
    return message;
  },
};

function createBaseERC4626AdaptorV1Calls(): ERC4626AdaptorV1Calls {
  return { calls: [] };
}

export const ERC4626AdaptorV1Calls = {
  encode(message: ERC4626AdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      ERC4626AdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC4626AdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC4626AdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(ERC4626AdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ERC4626AdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls) ? object.calls.map((e: any) => ERC4626AdaptorV1.fromJSON(e)) : [],
    };
  },

  toJSON(message: ERC4626AdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => ERC4626AdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ERC4626AdaptorV1Calls>, I>>(base?: I): ERC4626AdaptorV1Calls {
    return ERC4626AdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ERC4626AdaptorV1Calls>, I>>(object: I): ERC4626AdaptorV1Calls {
    const message = createBaseERC4626AdaptorV1Calls();
    message.calls = object.calls?.map((e) => ERC4626AdaptorV1.fromPartial(e)) || [];
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
