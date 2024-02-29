// package: steward.v4
// file: convex_curve.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class ConvexCurveAdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDepositLptInConvexAndStake(): boolean;
  clearDepositLptInConvexAndStake(): void;
  getDepositLptInConvexAndStake(): ConvexCurveAdaptorV1.DepositLPTInConvexAndStake | undefined;
  setDepositLptInConvexAndStake(value?: ConvexCurveAdaptorV1.DepositLPTInConvexAndStake): void;

  hasWithdrawFromBaseRewardPoolAsLpt(): boolean;
  clearWithdrawFromBaseRewardPoolAsLpt(): void;
  getWithdrawFromBaseRewardPoolAsLpt(): ConvexCurveAdaptorV1.WithdrawFromBaseRewardPoolAsLPT | undefined;
  setWithdrawFromBaseRewardPoolAsLpt(value?: ConvexCurveAdaptorV1.WithdrawFromBaseRewardPoolAsLPT): void;

  hasGetRewards(): boolean;
  clearGetRewards(): void;
  getGetRewards(): ConvexCurveAdaptorV1.GetRewards | undefined;
  setGetRewards(value?: ConvexCurveAdaptorV1.GetRewards): void;

  getFunctionCase(): ConvexCurveAdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvexCurveAdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: ConvexCurveAdaptorV1): ConvexCurveAdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvexCurveAdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvexCurveAdaptorV1;
  static deserializeBinaryFromReader(message: ConvexCurveAdaptorV1, reader: jspb.BinaryReader): ConvexCurveAdaptorV1;
}

export namespace ConvexCurveAdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositLptInConvexAndStake?: ConvexCurveAdaptorV1.DepositLPTInConvexAndStake.AsObject,
    withdrawFromBaseRewardPoolAsLpt?: ConvexCurveAdaptorV1.WithdrawFromBaseRewardPoolAsLPT.AsObject,
    getRewards?: ConvexCurveAdaptorV1.GetRewards.AsObject,
  }

  export class DepositLPTInConvexAndStake extends jspb.Message {
    getPid(): string;
    setPid(value: string): void;

    getBaseRewardPool(): string;
    setBaseRewardPool(value: string): void;

    getLpt(): string;
    setLpt(value: string): void;

    getPool(): string;
    setPool(value: string): void;

    getSelector(): string;
    setSelector(value: string): void;

    getAmountToDeposit(): string;
    setAmountToDeposit(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositLPTInConvexAndStake.AsObject;
    static toObject(includeInstance: boolean, msg: DepositLPTInConvexAndStake): DepositLPTInConvexAndStake.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositLPTInConvexAndStake, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositLPTInConvexAndStake;
    static deserializeBinaryFromReader(message: DepositLPTInConvexAndStake, reader: jspb.BinaryReader): DepositLPTInConvexAndStake;
  }

  export namespace DepositLPTInConvexAndStake {
    export type AsObject = {
      pid: string,
      baseRewardPool: string,
      lpt: string,
      pool: string,
      selector: string,
      amountToDeposit: string,
    }
  }

  export class WithdrawFromBaseRewardPoolAsLPT extends jspb.Message {
    getBaseRewardPool(): string;
    setBaseRewardPool(value: string): void;

    getAmountToWithdraw(): string;
    setAmountToWithdraw(value: string): void;

    getClaim(): boolean;
    setClaim(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromBaseRewardPoolAsLPT.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromBaseRewardPoolAsLPT): WithdrawFromBaseRewardPoolAsLPT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromBaseRewardPoolAsLPT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromBaseRewardPoolAsLPT;
    static deserializeBinaryFromReader(message: WithdrawFromBaseRewardPoolAsLPT, reader: jspb.BinaryReader): WithdrawFromBaseRewardPoolAsLPT;
  }

  export namespace WithdrawFromBaseRewardPoolAsLPT {
    export type AsObject = {
      baseRewardPool: string,
      amountToWithdraw: string,
      claim: boolean,
    }
  }

  export class GetRewards extends jspb.Message {
    getBaseRewardPool(): string;
    setBaseRewardPool(value: string): void;

    getClaimExtras(): boolean;
    setClaimExtras(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRewards.AsObject;
    static toObject(includeInstance: boolean, msg: GetRewards): GetRewards.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRewards, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRewards;
    static deserializeBinaryFromReader(message: GetRewards, reader: jspb.BinaryReader): GetRewards;
  }

  export namespace GetRewards {
    export type AsObject = {
      baseRewardPool: string,
      claimExtras: boolean,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSIT_LPT_IN_CONVEX_AND_STAKE = 2,
    WITHDRAW_FROM_BASE_REWARD_POOL_AS_LPT = 3,
    GET_REWARDS = 4,
  }
}

export class ConvexCurveAdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<ConvexCurveAdaptorV1>;
  setCallsList(value: Array<ConvexCurveAdaptorV1>): void;
  addCalls(value?: ConvexCurveAdaptorV1, index?: number): ConvexCurveAdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvexCurveAdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: ConvexCurveAdaptorV1Calls): ConvexCurveAdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvexCurveAdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvexCurveAdaptorV1Calls;
  static deserializeBinaryFromReader(message: ConvexCurveAdaptorV1Calls, reader: jspb.BinaryReader): ConvexCurveAdaptorV1Calls;
}

export namespace ConvexCurveAdaptorV1Calls {
  export type AsObject = {
    callsList: Array<ConvexCurveAdaptorV1.AsObject>,
  }
}

