/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RevokeApproval } from "./base";

export const protobufPackage = "steward.v4";

/** Represents call data for the Staking adaptor V1 */
export interface StakingAdaptorV1 {
  /** Represents function `revokeApproval(ERC20 asset, address spender)` */
  revokeApproval?:
    | RevokeApproval
    | undefined;
  /** Represents function `mint(uint256 amount, uint256 minAmountOut, bytes calldata wildcard)` */
  mint?:
    | StakingAdaptorV1_Mint
    | undefined;
  /** Represents function `requestBurn(uint256 amount, bytes calldata wildcard)` */
  requestBurn?:
    | StakingAdaptorV1_RequestBurn
    | undefined;
  /** Represents function `completeBurn(uint256 id, uint256 minAmountOut, bytes calldata wildcard)` */
  completeBurn?:
    | StakingAdaptorV1_CompleteBurn
    | undefined;
  /** Represents function `cancelBurn(uint256 id, bytes calldata wildcard)` */
  cancelBurn?:
    | StakingAdaptorV1_CancelBurn
    | undefined;
  /** Represents function `wrap(uint256 amount, uint256 minAmountOut, bytes calldata wildcard)` */
  wrap?:
    | StakingAdaptorV1_Wrap
    | undefined;
  /** Represents function `unwrap(uint256 amount, uint256 minAmountOut, bytes calldata wildcard)` */
  unwrap?:
    | StakingAdaptorV1_Unwrap
    | undefined;
  /** Represents function `mintERC20(ERC20 depositAsset, uint256 amount, uint256 minAmountOut, bytes calldata wildcard)` */
  mintErc20?:
    | StakingAdaptorV1_MintERC20
    | undefined;
  /** Represents function `removeClaimedRequest(uint256, bytes calldata)` */
  removeClaimedRequest?: StakingAdaptorV1_RemoveClaimedRequest | undefined;
}

/**
 * Allows a strategist to `mint` a derivative asset using the chains native asset.
 *
 * Represents the function `mint(uint256 amount, uint256 minAmountOut, bytes calldata wildcard)`
 */
export interface StakingAdaptorV1_Mint {
  /** The amount of the asset to mint */
  amount: string;
  /** The minimum amount of the asset to receive */
  minAmountOut: string;
  /** Arbitrary ABI encoded data that can be used by inheriting adaptors */
  wildcard: string;
}

/**
 * Allows a strategist to request to burn/withdraw a derivative for a chains native asset.
 *
 * Represents the function `requestBurn(uint256 amount, bytes calldata wildcard)`
 */
export interface StakingAdaptorV1_RequestBurn {
  /** The amount of the asset to burn */
  amount: string;
  /** Arbitrary ABI encoded data that can be used by inheriting adaptors */
  wildcard: string;
}

/**
 * Allows a strategist to complete a burn/withdraw of a derivative asset for a native asset.
 *
 * Represents the function `completeBurn(uint256 id, uint256 minAmountOut, bytes calldata wildcard)`
 */
export interface StakingAdaptorV1_CompleteBurn {
  /** The id of the burn request */
  id: string;
  /** The minimum amount of the asset to receive */
  minAmountOut: string;
  /** Arbitrary ABI encoded data that can be used by inheriting adaptors */
  wildcard: string;
}

/**
 * Allows a strategist to cancel an active burn/withdraw request.
 *
 * Represents the function `cancelBurn(uint256 id, bytes calldata wildcard)`
 */
export interface StakingAdaptorV1_CancelBurn {
  /** The id of the burn request */
  id: string;
  /** Arbitrary ABI encoded data that can be used by inheriting adaptors */
  wildcard: string;
}

/**
 * Allows a strategist to wrap a derivative asset.
 *
 * Represents the function `wrap(uint256 amount, uint256 minAmountOut, bytes calldata wildcard)`
 */
export interface StakingAdaptorV1_Wrap {
  /** The amount of the asset to wrap */
  amount: string;
  /** The minimum amount of the asset to receive */
  minAmountOut: string;
  /** Arbitrary ABI encoded data that can be used by inheriting adaptors */
  wildcard: string;
}

/**
 * Allows a strategist to unwrap a wrapped derivative asset.
 *
 * Represents the function `unwrap(uint256 amount, uint256 minAmountOut, bytes calldata wildcard)`
 */
export interface StakingAdaptorV1_Unwrap {
  /** The amount of the asset to unwrap */
  amount: string;
  /** The minimum amount of the asset to receive */
  minAmountOut: string;
  /** Arbitrary ABI encoded data that can be used by inheriting adaptors */
  wildcard: string;
}

/**
 * Allows a strategist to mint a derivative asset using an ERC20.
 *
 * Represents the function `mintERC20(ERC20 depositAsset, uint256 amount, uint256 minAmountOut, bytes calldata wildcard)`
 */
export interface StakingAdaptorV1_MintERC20 {
  /** The address of the ERC20 asset to deposit */
  depositAsset: string;
  /** The amount of the asset to mint */
  amount: string;
  /** The minimum amount of the asset to receive */
  minAmountOut: string;
  /** Arbitrary ABI encoded data that can be used by inheriting adaptors */
  wildcard: string;
}

/**
 * Allows strategist to remove a request from `requestIds` if it has already been claimed.
 *
 * Represents the function `removeClaimedRequest(uint256, bytes calldata)`
 */
export interface StakingAdaptorV1_RemoveClaimedRequest {
  /** The id of the request to remove */
  id: string;
  /** Arbitrary ABI encoded data that can be used by inheriting adaptors */
  wildcard: string;
}

export interface StakingAdaptorV1Calls {
  calls: StakingAdaptorV1[];
}

function createBaseStakingAdaptorV1(): StakingAdaptorV1 {
  return {
    revokeApproval: undefined,
    mint: undefined,
    requestBurn: undefined,
    completeBurn: undefined,
    cancelBurn: undefined,
    wrap: undefined,
    unwrap: undefined,
    mintErc20: undefined,
    removeClaimedRequest: undefined,
  };
}

export const StakingAdaptorV1 = {
  encode(message: StakingAdaptorV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokeApproval !== undefined) {
      RevokeApproval.encode(message.revokeApproval, writer.uint32(10).fork()).ldelim();
    }
    if (message.mint !== undefined) {
      StakingAdaptorV1_Mint.encode(message.mint, writer.uint32(18).fork()).ldelim();
    }
    if (message.requestBurn !== undefined) {
      StakingAdaptorV1_RequestBurn.encode(message.requestBurn, writer.uint32(26).fork()).ldelim();
    }
    if (message.completeBurn !== undefined) {
      StakingAdaptorV1_CompleteBurn.encode(message.completeBurn, writer.uint32(34).fork()).ldelim();
    }
    if (message.cancelBurn !== undefined) {
      StakingAdaptorV1_CancelBurn.encode(message.cancelBurn, writer.uint32(42).fork()).ldelim();
    }
    if (message.wrap !== undefined) {
      StakingAdaptorV1_Wrap.encode(message.wrap, writer.uint32(50).fork()).ldelim();
    }
    if (message.unwrap !== undefined) {
      StakingAdaptorV1_Unwrap.encode(message.unwrap, writer.uint32(58).fork()).ldelim();
    }
    if (message.mintErc20 !== undefined) {
      StakingAdaptorV1_MintERC20.encode(message.mintErc20, writer.uint32(66).fork()).ldelim();
    }
    if (message.removeClaimedRequest !== undefined) {
      StakingAdaptorV1_RemoveClaimedRequest.encode(message.removeClaimedRequest, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1();
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

          message.mint = StakingAdaptorV1_Mint.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requestBurn = StakingAdaptorV1_RequestBurn.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.completeBurn = StakingAdaptorV1_CompleteBurn.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cancelBurn = StakingAdaptorV1_CancelBurn.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.wrap = StakingAdaptorV1_Wrap.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.unwrap = StakingAdaptorV1_Unwrap.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.mintErc20 = StakingAdaptorV1_MintERC20.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.removeClaimedRequest = StakingAdaptorV1_RemoveClaimedRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1 {
    return {
      revokeApproval: isSet(object.revokeApproval) ? RevokeApproval.fromJSON(object.revokeApproval) : undefined,
      mint: isSet(object.mint) ? StakingAdaptorV1_Mint.fromJSON(object.mint) : undefined,
      requestBurn: isSet(object.requestBurn) ? StakingAdaptorV1_RequestBurn.fromJSON(object.requestBurn) : undefined,
      completeBurn: isSet(object.completeBurn)
        ? StakingAdaptorV1_CompleteBurn.fromJSON(object.completeBurn)
        : undefined,
      cancelBurn: isSet(object.cancelBurn) ? StakingAdaptorV1_CancelBurn.fromJSON(object.cancelBurn) : undefined,
      wrap: isSet(object.wrap) ? StakingAdaptorV1_Wrap.fromJSON(object.wrap) : undefined,
      unwrap: isSet(object.unwrap) ? StakingAdaptorV1_Unwrap.fromJSON(object.unwrap) : undefined,
      mintErc20: isSet(object.mintErc20) ? StakingAdaptorV1_MintERC20.fromJSON(object.mintErc20) : undefined,
      removeClaimedRequest: isSet(object.removeClaimedRequest)
        ? StakingAdaptorV1_RemoveClaimedRequest.fromJSON(object.removeClaimedRequest)
        : undefined,
    };
  },

  toJSON(message: StakingAdaptorV1): unknown {
    const obj: any = {};
    if (message.revokeApproval !== undefined) {
      obj.revokeApproval = RevokeApproval.toJSON(message.revokeApproval);
    }
    if (message.mint !== undefined) {
      obj.mint = StakingAdaptorV1_Mint.toJSON(message.mint);
    }
    if (message.requestBurn !== undefined) {
      obj.requestBurn = StakingAdaptorV1_RequestBurn.toJSON(message.requestBurn);
    }
    if (message.completeBurn !== undefined) {
      obj.completeBurn = StakingAdaptorV1_CompleteBurn.toJSON(message.completeBurn);
    }
    if (message.cancelBurn !== undefined) {
      obj.cancelBurn = StakingAdaptorV1_CancelBurn.toJSON(message.cancelBurn);
    }
    if (message.wrap !== undefined) {
      obj.wrap = StakingAdaptorV1_Wrap.toJSON(message.wrap);
    }
    if (message.unwrap !== undefined) {
      obj.unwrap = StakingAdaptorV1_Unwrap.toJSON(message.unwrap);
    }
    if (message.mintErc20 !== undefined) {
      obj.mintErc20 = StakingAdaptorV1_MintERC20.toJSON(message.mintErc20);
    }
    if (message.removeClaimedRequest !== undefined) {
      obj.removeClaimedRequest = StakingAdaptorV1_RemoveClaimedRequest.toJSON(message.removeClaimedRequest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1>, I>>(base?: I): StakingAdaptorV1 {
    return StakingAdaptorV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1>, I>>(object: I): StakingAdaptorV1 {
    const message = createBaseStakingAdaptorV1();
    message.revokeApproval = (object.revokeApproval !== undefined && object.revokeApproval !== null)
      ? RevokeApproval.fromPartial(object.revokeApproval)
      : undefined;
    message.mint = (object.mint !== undefined && object.mint !== null)
      ? StakingAdaptorV1_Mint.fromPartial(object.mint)
      : undefined;
    message.requestBurn = (object.requestBurn !== undefined && object.requestBurn !== null)
      ? StakingAdaptorV1_RequestBurn.fromPartial(object.requestBurn)
      : undefined;
    message.completeBurn = (object.completeBurn !== undefined && object.completeBurn !== null)
      ? StakingAdaptorV1_CompleteBurn.fromPartial(object.completeBurn)
      : undefined;
    message.cancelBurn = (object.cancelBurn !== undefined && object.cancelBurn !== null)
      ? StakingAdaptorV1_CancelBurn.fromPartial(object.cancelBurn)
      : undefined;
    message.wrap = (object.wrap !== undefined && object.wrap !== null)
      ? StakingAdaptorV1_Wrap.fromPartial(object.wrap)
      : undefined;
    message.unwrap = (object.unwrap !== undefined && object.unwrap !== null)
      ? StakingAdaptorV1_Unwrap.fromPartial(object.unwrap)
      : undefined;
    message.mintErc20 = (object.mintErc20 !== undefined && object.mintErc20 !== null)
      ? StakingAdaptorV1_MintERC20.fromPartial(object.mintErc20)
      : undefined;
    message.removeClaimedRequest = (object.removeClaimedRequest !== undefined && object.removeClaimedRequest !== null)
      ? StakingAdaptorV1_RemoveClaimedRequest.fromPartial(object.removeClaimedRequest)
      : undefined;
    return message;
  },
};

function createBaseStakingAdaptorV1_Mint(): StakingAdaptorV1_Mint {
  return { amount: "", minAmountOut: "", wildcard: "" };
}

export const StakingAdaptorV1_Mint = {
  encode(message: StakingAdaptorV1_Mint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.minAmountOut !== "") {
      writer.uint32(18).string(message.minAmountOut);
    }
    if (message.wildcard !== "") {
      writer.uint32(26).string(message.wildcard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1_Mint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1_Mint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.minAmountOut = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wildcard = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1_Mint {
    return {
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      minAmountOut: isSet(object.minAmountOut) ? globalThis.String(object.minAmountOut) : "",
      wildcard: isSet(object.wildcard) ? globalThis.String(object.wildcard) : "",
    };
  },

  toJSON(message: StakingAdaptorV1_Mint): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.minAmountOut !== "") {
      obj.minAmountOut = message.minAmountOut;
    }
    if (message.wildcard !== "") {
      obj.wildcard = message.wildcard;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1_Mint>, I>>(base?: I): StakingAdaptorV1_Mint {
    return StakingAdaptorV1_Mint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1_Mint>, I>>(object: I): StakingAdaptorV1_Mint {
    const message = createBaseStakingAdaptorV1_Mint();
    message.amount = object.amount ?? "";
    message.minAmountOut = object.minAmountOut ?? "";
    message.wildcard = object.wildcard ?? "";
    return message;
  },
};

function createBaseStakingAdaptorV1_RequestBurn(): StakingAdaptorV1_RequestBurn {
  return { amount: "", wildcard: "" };
}

export const StakingAdaptorV1_RequestBurn = {
  encode(message: StakingAdaptorV1_RequestBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.wildcard !== "") {
      writer.uint32(18).string(message.wildcard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1_RequestBurn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1_RequestBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.wildcard = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1_RequestBurn {
    return {
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      wildcard: isSet(object.wildcard) ? globalThis.String(object.wildcard) : "",
    };
  },

  toJSON(message: StakingAdaptorV1_RequestBurn): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.wildcard !== "") {
      obj.wildcard = message.wildcard;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1_RequestBurn>, I>>(base?: I): StakingAdaptorV1_RequestBurn {
    return StakingAdaptorV1_RequestBurn.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1_RequestBurn>, I>>(object: I): StakingAdaptorV1_RequestBurn {
    const message = createBaseStakingAdaptorV1_RequestBurn();
    message.amount = object.amount ?? "";
    message.wildcard = object.wildcard ?? "";
    return message;
  },
};

function createBaseStakingAdaptorV1_CompleteBurn(): StakingAdaptorV1_CompleteBurn {
  return { id: "", minAmountOut: "", wildcard: "" };
}

export const StakingAdaptorV1_CompleteBurn = {
  encode(message: StakingAdaptorV1_CompleteBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.minAmountOut !== "") {
      writer.uint32(18).string(message.minAmountOut);
    }
    if (message.wildcard !== "") {
      writer.uint32(26).string(message.wildcard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1_CompleteBurn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1_CompleteBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.minAmountOut = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wildcard = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1_CompleteBurn {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      minAmountOut: isSet(object.minAmountOut) ? globalThis.String(object.minAmountOut) : "",
      wildcard: isSet(object.wildcard) ? globalThis.String(object.wildcard) : "",
    };
  },

  toJSON(message: StakingAdaptorV1_CompleteBurn): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.minAmountOut !== "") {
      obj.minAmountOut = message.minAmountOut;
    }
    if (message.wildcard !== "") {
      obj.wildcard = message.wildcard;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1_CompleteBurn>, I>>(base?: I): StakingAdaptorV1_CompleteBurn {
    return StakingAdaptorV1_CompleteBurn.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1_CompleteBurn>, I>>(
    object: I,
  ): StakingAdaptorV1_CompleteBurn {
    const message = createBaseStakingAdaptorV1_CompleteBurn();
    message.id = object.id ?? "";
    message.minAmountOut = object.minAmountOut ?? "";
    message.wildcard = object.wildcard ?? "";
    return message;
  },
};

function createBaseStakingAdaptorV1_CancelBurn(): StakingAdaptorV1_CancelBurn {
  return { id: "", wildcard: "" };
}

export const StakingAdaptorV1_CancelBurn = {
  encode(message: StakingAdaptorV1_CancelBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.wildcard !== "") {
      writer.uint32(18).string(message.wildcard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1_CancelBurn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1_CancelBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.wildcard = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1_CancelBurn {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      wildcard: isSet(object.wildcard) ? globalThis.String(object.wildcard) : "",
    };
  },

  toJSON(message: StakingAdaptorV1_CancelBurn): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.wildcard !== "") {
      obj.wildcard = message.wildcard;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1_CancelBurn>, I>>(base?: I): StakingAdaptorV1_CancelBurn {
    return StakingAdaptorV1_CancelBurn.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1_CancelBurn>, I>>(object: I): StakingAdaptorV1_CancelBurn {
    const message = createBaseStakingAdaptorV1_CancelBurn();
    message.id = object.id ?? "";
    message.wildcard = object.wildcard ?? "";
    return message;
  },
};

function createBaseStakingAdaptorV1_Wrap(): StakingAdaptorV1_Wrap {
  return { amount: "", minAmountOut: "", wildcard: "" };
}

export const StakingAdaptorV1_Wrap = {
  encode(message: StakingAdaptorV1_Wrap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.minAmountOut !== "") {
      writer.uint32(18).string(message.minAmountOut);
    }
    if (message.wildcard !== "") {
      writer.uint32(26).string(message.wildcard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1_Wrap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1_Wrap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.minAmountOut = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wildcard = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1_Wrap {
    return {
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      minAmountOut: isSet(object.minAmountOut) ? globalThis.String(object.minAmountOut) : "",
      wildcard: isSet(object.wildcard) ? globalThis.String(object.wildcard) : "",
    };
  },

  toJSON(message: StakingAdaptorV1_Wrap): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.minAmountOut !== "") {
      obj.minAmountOut = message.minAmountOut;
    }
    if (message.wildcard !== "") {
      obj.wildcard = message.wildcard;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1_Wrap>, I>>(base?: I): StakingAdaptorV1_Wrap {
    return StakingAdaptorV1_Wrap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1_Wrap>, I>>(object: I): StakingAdaptorV1_Wrap {
    const message = createBaseStakingAdaptorV1_Wrap();
    message.amount = object.amount ?? "";
    message.minAmountOut = object.minAmountOut ?? "";
    message.wildcard = object.wildcard ?? "";
    return message;
  },
};

function createBaseStakingAdaptorV1_Unwrap(): StakingAdaptorV1_Unwrap {
  return { amount: "", minAmountOut: "", wildcard: "" };
}

export const StakingAdaptorV1_Unwrap = {
  encode(message: StakingAdaptorV1_Unwrap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.minAmountOut !== "") {
      writer.uint32(18).string(message.minAmountOut);
    }
    if (message.wildcard !== "") {
      writer.uint32(26).string(message.wildcard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1_Unwrap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1_Unwrap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.minAmountOut = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wildcard = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1_Unwrap {
    return {
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      minAmountOut: isSet(object.minAmountOut) ? globalThis.String(object.minAmountOut) : "",
      wildcard: isSet(object.wildcard) ? globalThis.String(object.wildcard) : "",
    };
  },

  toJSON(message: StakingAdaptorV1_Unwrap): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.minAmountOut !== "") {
      obj.minAmountOut = message.minAmountOut;
    }
    if (message.wildcard !== "") {
      obj.wildcard = message.wildcard;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1_Unwrap>, I>>(base?: I): StakingAdaptorV1_Unwrap {
    return StakingAdaptorV1_Unwrap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1_Unwrap>, I>>(object: I): StakingAdaptorV1_Unwrap {
    const message = createBaseStakingAdaptorV1_Unwrap();
    message.amount = object.amount ?? "";
    message.minAmountOut = object.minAmountOut ?? "";
    message.wildcard = object.wildcard ?? "";
    return message;
  },
};

function createBaseStakingAdaptorV1_MintERC20(): StakingAdaptorV1_MintERC20 {
  return { depositAsset: "", amount: "", minAmountOut: "", wildcard: "" };
}

export const StakingAdaptorV1_MintERC20 = {
  encode(message: StakingAdaptorV1_MintERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAsset !== "") {
      writer.uint32(10).string(message.depositAsset);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.minAmountOut !== "") {
      writer.uint32(26).string(message.minAmountOut);
    }
    if (message.wildcard !== "") {
      writer.uint32(34).string(message.wildcard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1_MintERC20 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1_MintERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.depositAsset = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minAmountOut = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.wildcard = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1_MintERC20 {
    return {
      depositAsset: isSet(object.depositAsset) ? globalThis.String(object.depositAsset) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      minAmountOut: isSet(object.minAmountOut) ? globalThis.String(object.minAmountOut) : "",
      wildcard: isSet(object.wildcard) ? globalThis.String(object.wildcard) : "",
    };
  },

  toJSON(message: StakingAdaptorV1_MintERC20): unknown {
    const obj: any = {};
    if (message.depositAsset !== "") {
      obj.depositAsset = message.depositAsset;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.minAmountOut !== "") {
      obj.minAmountOut = message.minAmountOut;
    }
    if (message.wildcard !== "") {
      obj.wildcard = message.wildcard;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1_MintERC20>, I>>(base?: I): StakingAdaptorV1_MintERC20 {
    return StakingAdaptorV1_MintERC20.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1_MintERC20>, I>>(object: I): StakingAdaptorV1_MintERC20 {
    const message = createBaseStakingAdaptorV1_MintERC20();
    message.depositAsset = object.depositAsset ?? "";
    message.amount = object.amount ?? "";
    message.minAmountOut = object.minAmountOut ?? "";
    message.wildcard = object.wildcard ?? "";
    return message;
  },
};

function createBaseStakingAdaptorV1_RemoveClaimedRequest(): StakingAdaptorV1_RemoveClaimedRequest {
  return { id: "", wildcard: "" };
}

export const StakingAdaptorV1_RemoveClaimedRequest = {
  encode(message: StakingAdaptorV1_RemoveClaimedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.wildcard !== "") {
      writer.uint32(18).string(message.wildcard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1_RemoveClaimedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1_RemoveClaimedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.wildcard = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1_RemoveClaimedRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      wildcard: isSet(object.wildcard) ? globalThis.String(object.wildcard) : "",
    };
  },

  toJSON(message: StakingAdaptorV1_RemoveClaimedRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.wildcard !== "") {
      obj.wildcard = message.wildcard;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1_RemoveClaimedRequest>, I>>(
    base?: I,
  ): StakingAdaptorV1_RemoveClaimedRequest {
    return StakingAdaptorV1_RemoveClaimedRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1_RemoveClaimedRequest>, I>>(
    object: I,
  ): StakingAdaptorV1_RemoveClaimedRequest {
    const message = createBaseStakingAdaptorV1_RemoveClaimedRequest();
    message.id = object.id ?? "";
    message.wildcard = object.wildcard ?? "";
    return message;
  },
};

function createBaseStakingAdaptorV1Calls(): StakingAdaptorV1Calls {
  return { calls: [] };
}

export const StakingAdaptorV1Calls = {
  encode(message: StakingAdaptorV1Calls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      StakingAdaptorV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAdaptorV1Calls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAdaptorV1Calls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(StakingAdaptorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingAdaptorV1Calls {
    return {
      calls: globalThis.Array.isArray(object?.calls) ? object.calls.map((e: any) => StakingAdaptorV1.fromJSON(e)) : [],
    };
  },

  toJSON(message: StakingAdaptorV1Calls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => StakingAdaptorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAdaptorV1Calls>, I>>(base?: I): StakingAdaptorV1Calls {
    return StakingAdaptorV1Calls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAdaptorV1Calls>, I>>(object: I): StakingAdaptorV1Calls {
    const message = createBaseStakingAdaptorV1Calls();
    message.calls = object.calls?.map((e) => StakingAdaptorV1.fromPartial(e)) || [];
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
