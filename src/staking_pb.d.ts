// package: steward.v4
// file: staking.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class StakingAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasMint(): boolean;
  clearMint(): void;
  getMint(): StakingAdaptorV1.Mint | undefined;
  setMint(value?: StakingAdaptorV1.Mint): void;

  hasRequestBurn(): boolean;
  clearRequestBurn(): void;
  getRequestBurn(): StakingAdaptorV1.RequestBurn | undefined;
  setRequestBurn(value?: StakingAdaptorV1.RequestBurn): void;

  hasCompleteBurn(): boolean;
  clearCompleteBurn(): void;
  getCompleteBurn(): StakingAdaptorV1.CompleteBurn | undefined;
  setCompleteBurn(value?: StakingAdaptorV1.CompleteBurn): void;

  hasCancelBurn(): boolean;
  clearCancelBurn(): void;
  getCancelBurn(): StakingAdaptorV1.CancelBurn | undefined;
  setCancelBurn(value?: StakingAdaptorV1.CancelBurn): void;

  hasWrap(): boolean;
  clearWrap(): void;
  getWrap(): StakingAdaptorV1.Wrap | undefined;
  setWrap(value?: StakingAdaptorV1.Wrap): void;

  hasUnwrap(): boolean;
  clearUnwrap(): void;
  getUnwrap(): StakingAdaptorV1.Unwrap | undefined;
  setUnwrap(value?: StakingAdaptorV1.Unwrap): void;

  hasMintErc20(): boolean;
  clearMintErc20(): void;
  getMintErc20(): StakingAdaptorV1.MintERC20 | undefined;
  setMintErc20(value?: StakingAdaptorV1.MintERC20): void;

  hasRemoveClaimedRequest(): boolean;
  clearRemoveClaimedRequest(): void;
  getRemoveClaimedRequest(): StakingAdaptorV1.RemoveClaimedRequest | undefined;
  setRemoveClaimedRequest(value?: StakingAdaptorV1.RemoveClaimedRequest): void;

  getFunctionCase(): StakingAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: StakingAdaptorV1): StakingAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StakingAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingAdaptorV1;
  static deserializeBinaryFromReader(message: StakingAdaptorV1, reader: jspb.BinaryReader): StakingAdaptorV1;
}

export namespace StakingAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    mint?: StakingAdaptorV1.Mint.AsObject,
    requestBurn?: StakingAdaptorV1.RequestBurn.AsObject,
    completeBurn?: StakingAdaptorV1.CompleteBurn.AsObject,
    cancelBurn?: StakingAdaptorV1.CancelBurn.AsObject,
    wrap?: StakingAdaptorV1.Wrap.AsObject,
    unwrap?: StakingAdaptorV1.Unwrap.AsObject,
    mintErc20?: StakingAdaptorV1.MintERC20.AsObject,
    removeClaimedRequest?: StakingAdaptorV1.RemoveClaimedRequest.AsObject,
  }

  export class Mint extends jspb.Message {
    getAmount(): string;
    setAmount(value: string): void;

    getMinAmountOut(): string;
    setMinAmountOut(value: string): void;

    getWildcard(): string;
    setWildcard(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mint.AsObject;
    static toObject(includeInstance: boolean, msg: Mint): Mint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mint;
    static deserializeBinaryFromReader(message: Mint, reader: jspb.BinaryReader): Mint;
  }

  export namespace Mint {
    export type AsObject = {
      amount: string,
      minAmountOut: string,
      wildcard: string,
    }
  }

  export class RequestBurn extends jspb.Message {
    getAmount(): string;
    setAmount(value: string): void;

    getWildcard(): string;
    setWildcard(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestBurn.AsObject;
    static toObject(includeInstance: boolean, msg: RequestBurn): RequestBurn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestBurn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestBurn;
    static deserializeBinaryFromReader(message: RequestBurn, reader: jspb.BinaryReader): RequestBurn;
  }

  export namespace RequestBurn {
    export type AsObject = {
      amount: string,
      wildcard: string,
    }
  }

  export class CompleteBurn extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getMinAmountOut(): string;
    setMinAmountOut(value: string): void;

    getWildcard(): string;
    setWildcard(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompleteBurn.AsObject;
    static toObject(includeInstance: boolean, msg: CompleteBurn): CompleteBurn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompleteBurn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompleteBurn;
    static deserializeBinaryFromReader(message: CompleteBurn, reader: jspb.BinaryReader): CompleteBurn;
  }

  export namespace CompleteBurn {
    export type AsObject = {
      id: string,
      minAmountOut: string,
      wildcard: string,
    }
  }

  export class CancelBurn extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getWildcard(): string;
    setWildcard(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelBurn.AsObject;
    static toObject(includeInstance: boolean, msg: CancelBurn): CancelBurn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelBurn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelBurn;
    static deserializeBinaryFromReader(message: CancelBurn, reader: jspb.BinaryReader): CancelBurn;
  }

  export namespace CancelBurn {
    export type AsObject = {
      id: string,
      wildcard: string,
    }
  }

  export class Wrap extends jspb.Message {
    getAmount(): string;
    setAmount(value: string): void;

    getMinAmountOut(): string;
    setMinAmountOut(value: string): void;

    getWildcard(): string;
    setWildcard(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wrap.AsObject;
    static toObject(includeInstance: boolean, msg: Wrap): Wrap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Wrap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wrap;
    static deserializeBinaryFromReader(message: Wrap, reader: jspb.BinaryReader): Wrap;
  }

  export namespace Wrap {
    export type AsObject = {
      amount: string,
      minAmountOut: string,
      wildcard: string,
    }
  }

  export class Unwrap extends jspb.Message {
    getAmount(): string;
    setAmount(value: string): void;

    getMinAmountOut(): string;
    setMinAmountOut(value: string): void;

    getWildcard(): string;
    setWildcard(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Unwrap.AsObject;
    static toObject(includeInstance: boolean, msg: Unwrap): Unwrap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Unwrap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Unwrap;
    static deserializeBinaryFromReader(message: Unwrap, reader: jspb.BinaryReader): Unwrap;
  }

  export namespace Unwrap {
    export type AsObject = {
      amount: string,
      minAmountOut: string,
      wildcard: string,
    }
  }

  export class MintERC20 extends jspb.Message {
    getDepositAsset(): string;
    setDepositAsset(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    getMinAmountOut(): string;
    setMinAmountOut(value: string): void;

    getWildcard(): string;
    setWildcard(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MintERC20.AsObject;
    static toObject(includeInstance: boolean, msg: MintERC20): MintERC20.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MintERC20, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MintERC20;
    static deserializeBinaryFromReader(message: MintERC20, reader: jspb.BinaryReader): MintERC20;
  }

  export namespace MintERC20 {
    export type AsObject = {
      depositAsset: string,
      amount: string,
      minAmountOut: string,
      wildcard: string,
    }
  }

  export class RemoveClaimedRequest extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getWildcard(): string;
    setWildcard(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveClaimedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveClaimedRequest): RemoveClaimedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveClaimedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveClaimedRequest;
    static deserializeBinaryFromReader(message: RemoveClaimedRequest, reader: jspb.BinaryReader): RemoveClaimedRequest;
  }

  export namespace RemoveClaimedRequest {
    export type AsObject = {
      id: string,
      wildcard: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    MINT = 2,
    REQUEST_BURN = 3,
    COMPLETE_BURN = 4,
    CANCEL_BURN = 5,
    WRAP = 6,
    UNWRAP = 7,
    MINT_ERC20 = 8,
    REMOVE_CLAIMED_REQUEST = 9,
  }
}

export class StakingAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<StakingAdaptorV1>;
  setCallsList(value: Array<StakingAdaptorV1>): void;
  addCalls(value?: StakingAdaptorV1, index?: number): StakingAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: StakingAdaptorV1Calls): StakingAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StakingAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingAdaptorV1Calls;
  static deserializeBinaryFromReader(message: StakingAdaptorV1Calls, reader: jspb.BinaryReader): StakingAdaptorV1Calls;
}

export namespace StakingAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<StakingAdaptorV1.AsObject>,
  }
}

