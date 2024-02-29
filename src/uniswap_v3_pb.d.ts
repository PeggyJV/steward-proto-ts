// package: steward.v4
// file: uniswap_v3.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class UniswapV3AdaptorV2 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasOpenPosition(): boolean;
  clearOpenPosition(): void;
  getOpenPosition(): UniswapV3AdaptorV2.OpenPosition | undefined;
  setOpenPosition(value?: UniswapV3AdaptorV2.OpenPosition): void;

  hasClosePosition(): boolean;
  clearClosePosition(): void;
  getClosePosition(): UniswapV3AdaptorV2.ClosePosition | undefined;
  setClosePosition(value?: UniswapV3AdaptorV2.ClosePosition): void;

  hasAddToPosition(): boolean;
  clearAddToPosition(): void;
  getAddToPosition(): UniswapV3AdaptorV2.AddToPosition | undefined;
  setAddToPosition(value?: UniswapV3AdaptorV2.AddToPosition): void;

  hasTakeFromPosition(): boolean;
  clearTakeFromPosition(): void;
  getTakeFromPosition(): UniswapV3AdaptorV2.TakeFromPosition | undefined;
  setTakeFromPosition(value?: UniswapV3AdaptorV2.TakeFromPosition): void;

  hasCollectFees(): boolean;
  clearCollectFees(): void;
  getCollectFees(): UniswapV3AdaptorV2.CollectFees | undefined;
  setCollectFees(value?: UniswapV3AdaptorV2.CollectFees): void;

  hasPurgeAllZeroLiquidityPositions(): boolean;
  clearPurgeAllZeroLiquidityPositions(): void;
  getPurgeAllZeroLiquidityPositions(): UniswapV3AdaptorV2.PurgeAllZeroLiquidityPositions | undefined;
  setPurgeAllZeroLiquidityPositions(value?: UniswapV3AdaptorV2.PurgeAllZeroLiquidityPositions): void;

  hasPurgeSinglePosition(): boolean;
  clearPurgeSinglePosition(): void;
  getPurgeSinglePosition(): UniswapV3AdaptorV2.PurgeSinglePosition | undefined;
  setPurgeSinglePosition(value?: UniswapV3AdaptorV2.PurgeSinglePosition): void;

  hasRemoveUnownedPositionFromTracker(): boolean;
  clearRemoveUnownedPositionFromTracker(): void;
  getRemoveUnownedPositionFromTracker(): UniswapV3AdaptorV2.RemoveUnownedPositionFromTracker | undefined;
  setRemoveUnownedPositionFromTracker(value?: UniswapV3AdaptorV2.RemoveUnownedPositionFromTracker): void;

  getFunctionCase(): UniswapV3AdaptorV2.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniswapV3AdaptorV2.AsObject;
  static toObject(includeInstance: boolean, msg: UniswapV3AdaptorV2): UniswapV3AdaptorV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniswapV3AdaptorV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniswapV3AdaptorV2;
  static deserializeBinaryFromReader(message: UniswapV3AdaptorV2, reader: jspb.BinaryReader): UniswapV3AdaptorV2;
}

export namespace UniswapV3AdaptorV2 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    openPosition?: UniswapV3AdaptorV2.OpenPosition.AsObject,
    closePosition?: UniswapV3AdaptorV2.ClosePosition.AsObject,
    addToPosition?: UniswapV3AdaptorV2.AddToPosition.AsObject,
    takeFromPosition?: UniswapV3AdaptorV2.TakeFromPosition.AsObject,
    collectFees?: UniswapV3AdaptorV2.CollectFees.AsObject,
    purgeAllZeroLiquidityPositions?: UniswapV3AdaptorV2.PurgeAllZeroLiquidityPositions.AsObject,
    purgeSinglePosition?: UniswapV3AdaptorV2.PurgeSinglePosition.AsObject,
    removeUnownedPositionFromTracker?: UniswapV3AdaptorV2.RemoveUnownedPositionFromTracker.AsObject,
  }

  export class OpenPosition extends jspb.Message {
    getToken0(): string;
    setToken0(value: string): void;

    getToken1(): string;
    setToken1(value: string): void;

    getPoolFee(): number;
    setPoolFee(value: number): void;

    getAmount0(): string;
    setAmount0(value: string): void;

    getAmount1(): string;
    setAmount1(value: string): void;

    getMin0(): string;
    setMin0(value: string): void;

    getMin1(): string;
    setMin1(value: string): void;

    getTickLower(): number;
    setTickLower(value: number): void;

    getTickUpper(): number;
    setTickUpper(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenPosition.AsObject;
    static toObject(includeInstance: boolean, msg: OpenPosition): OpenPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenPosition;
    static deserializeBinaryFromReader(message: OpenPosition, reader: jspb.BinaryReader): OpenPosition;
  }

  export namespace OpenPosition {
    export type AsObject = {
      token0: string,
      token1: string,
      poolFee: number,
      amount0: string,
      amount1: string,
      min0: string,
      min1: string,
      tickLower: number,
      tickUpper: number,
    }
  }

  export class ClosePosition extends jspb.Message {
    getTokenId(): string;
    setTokenId(value: string): void;

    getMin0(): string;
    setMin0(value: string): void;

    getMin1(): string;
    setMin1(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClosePosition.AsObject;
    static toObject(includeInstance: boolean, msg: ClosePosition): ClosePosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClosePosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClosePosition;
    static deserializeBinaryFromReader(message: ClosePosition, reader: jspb.BinaryReader): ClosePosition;
  }

  export namespace ClosePosition {
    export type AsObject = {
      tokenId: string,
      min0: string,
      min1: string,
    }
  }

  export class AddToPosition extends jspb.Message {
    getTokenId(): string;
    setTokenId(value: string): void;

    getAmount0(): string;
    setAmount0(value: string): void;

    getAmount1(): string;
    setAmount1(value: string): void;

    getMin0(): string;
    setMin0(value: string): void;

    getMin1(): string;
    setMin1(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddToPosition.AsObject;
    static toObject(includeInstance: boolean, msg: AddToPosition): AddToPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddToPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddToPosition;
    static deserializeBinaryFromReader(message: AddToPosition, reader: jspb.BinaryReader): AddToPosition;
  }

  export namespace AddToPosition {
    export type AsObject = {
      tokenId: string,
      amount0: string,
      amount1: string,
      min0: string,
      min1: string,
    }
  }

  export class TakeFromPosition extends jspb.Message {
    getTokenId(): string;
    setTokenId(value: string): void;

    getLiquidity(): string;
    setLiquidity(value: string): void;

    getMin0(): string;
    setMin0(value: string): void;

    getMin1(): string;
    setMin1(value: string): void;

    getTakeFees(): boolean;
    setTakeFees(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TakeFromPosition.AsObject;
    static toObject(includeInstance: boolean, msg: TakeFromPosition): TakeFromPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TakeFromPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TakeFromPosition;
    static deserializeBinaryFromReader(message: TakeFromPosition, reader: jspb.BinaryReader): TakeFromPosition;
  }

  export namespace TakeFromPosition {
    export type AsObject = {
      tokenId: string,
      liquidity: string,
      min0: string,
      min1: string,
      takeFees: boolean,
    }
  }

  export class CollectFees extends jspb.Message {
    getTokenId(): string;
    setTokenId(value: string): void;

    getAmount0(): string;
    setAmount0(value: string): void;

    getAmount1(): string;
    setAmount1(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectFees.AsObject;
    static toObject(includeInstance: boolean, msg: CollectFees): CollectFees.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectFees, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectFees;
    static deserializeBinaryFromReader(message: CollectFees, reader: jspb.BinaryReader): CollectFees;
  }

  export namespace CollectFees {
    export type AsObject = {
      tokenId: string,
      amount0: string,
      amount1: string,
    }
  }

  export class PurgeAllZeroLiquidityPositions extends jspb.Message {
    getToken0(): string;
    setToken0(value: string): void;

    getToken1(): string;
    setToken1(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurgeAllZeroLiquidityPositions.AsObject;
    static toObject(includeInstance: boolean, msg: PurgeAllZeroLiquidityPositions): PurgeAllZeroLiquidityPositions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurgeAllZeroLiquidityPositions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurgeAllZeroLiquidityPositions;
    static deserializeBinaryFromReader(message: PurgeAllZeroLiquidityPositions, reader: jspb.BinaryReader): PurgeAllZeroLiquidityPositions;
  }

  export namespace PurgeAllZeroLiquidityPositions {
    export type AsObject = {
      token0: string,
      token1: string,
    }
  }

  export class PurgeSinglePosition extends jspb.Message {
    getTokenId(): string;
    setTokenId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurgeSinglePosition.AsObject;
    static toObject(includeInstance: boolean, msg: PurgeSinglePosition): PurgeSinglePosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurgeSinglePosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurgeSinglePosition;
    static deserializeBinaryFromReader(message: PurgeSinglePosition, reader: jspb.BinaryReader): PurgeSinglePosition;
  }

  export namespace PurgeSinglePosition {
    export type AsObject = {
      tokenId: string,
    }
  }

  export class RemoveUnownedPositionFromTracker extends jspb.Message {
    getTokenId(): string;
    setTokenId(value: string): void;

    getToken0(): string;
    setToken0(value: string): void;

    getToken1(): string;
    setToken1(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveUnownedPositionFromTracker.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveUnownedPositionFromTracker): RemoveUnownedPositionFromTracker.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveUnownedPositionFromTracker, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveUnownedPositionFromTracker;
    static deserializeBinaryFromReader(message: RemoveUnownedPositionFromTracker, reader: jspb.BinaryReader): RemoveUnownedPositionFromTracker;
  }

  export namespace RemoveUnownedPositionFromTracker {
    export type AsObject = {
      tokenId: string,
      token0: string,
      token1: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    OPEN_POSITION = 2,
    CLOSE_POSITION = 3,
    ADD_TO_POSITION = 4,
    TAKE_FROM_POSITION = 5,
    COLLECT_FEES = 6,
    PURGE_ALL_ZERO_LIQUIDITY_POSITIONS = 7,
    PURGE_SINGLE_POSITION = 8,
    REMOVE_UNOWNED_POSITION_FROM_TRACKER = 9,
  }
}

export class UniswapV3AdaptorV2Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<UniswapV3AdaptorV2>;
  setCallsList(value: Array<UniswapV3AdaptorV2>): void;
  addCalls(value?: UniswapV3AdaptorV2, index?: number): UniswapV3AdaptorV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniswapV3AdaptorV2Calls.AsObject;
  static toObject(includeInstance: boolean, msg: UniswapV3AdaptorV2Calls): UniswapV3AdaptorV2Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniswapV3AdaptorV2Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniswapV3AdaptorV2Calls;
  static deserializeBinaryFromReader(message: UniswapV3AdaptorV2Calls, reader: jspb.BinaryReader): UniswapV3AdaptorV2Calls;
}

export namespace UniswapV3AdaptorV2Calls {
  export type AsObject = {
    callsList: Array<UniswapV3AdaptorV2.AsObject>,
  }
}

