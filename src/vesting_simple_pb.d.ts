// package: steward.v4
// file: vesting_simple.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class VestingSimpleAdaptorV2 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDepositToVesting(): boolean;
  clearDepositToVesting(): void;
  getDepositToVesting(): VestingSimpleAdaptorV2.DepositToVesting | undefined;
  setDepositToVesting(value?: VestingSimpleAdaptorV2.DepositToVesting): void;

  hasWithdrawFromVesting(): boolean;
  clearWithdrawFromVesting(): void;
  getWithdrawFromVesting(): VestingSimpleAdaptorV2.WithdrawFromVesting | undefined;
  setWithdrawFromVesting(value?: VestingSimpleAdaptorV2.WithdrawFromVesting): void;

  hasWithdrawAnyFromVesting(): boolean;
  clearWithdrawAnyFromVesting(): void;
  getWithdrawAnyFromVesting(): VestingSimpleAdaptorV2.WithdrawAnyFromVesting | undefined;
  setWithdrawAnyFromVesting(value?: VestingSimpleAdaptorV2.WithdrawAnyFromVesting): void;

  hasWithdrawAllFromVesting(): boolean;
  clearWithdrawAllFromVesting(): void;
  getWithdrawAllFromVesting(): VestingSimpleAdaptorV2.WithdrawAllFromVesting | undefined;
  setWithdrawAllFromVesting(value?: VestingSimpleAdaptorV2.WithdrawAllFromVesting): void;

  getFunctionCase(): VestingSimpleAdaptorV2.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VestingSimpleAdaptorV2.AsObject;
  static toObject(includeInstance: boolean, msg: VestingSimpleAdaptorV2): VestingSimpleAdaptorV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VestingSimpleAdaptorV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VestingSimpleAdaptorV2;
  static deserializeBinaryFromReader(message: VestingSimpleAdaptorV2, reader: jspb.BinaryReader): VestingSimpleAdaptorV2;
}

export namespace VestingSimpleAdaptorV2 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositToVesting?: VestingSimpleAdaptorV2.DepositToVesting.AsObject,
    withdrawFromVesting?: VestingSimpleAdaptorV2.WithdrawFromVesting.AsObject,
    withdrawAnyFromVesting?: VestingSimpleAdaptorV2.WithdrawAnyFromVesting.AsObject,
    withdrawAllFromVesting?: VestingSimpleAdaptorV2.WithdrawAllFromVesting.AsObject,
  }

  export class DepositToVesting extends jspb.Message {
    getVestingContract(): string;
    setVestingContract(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositToVesting.AsObject;
    static toObject(includeInstance: boolean, msg: DepositToVesting): DepositToVesting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositToVesting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositToVesting;
    static deserializeBinaryFromReader(message: DepositToVesting, reader: jspb.BinaryReader): DepositToVesting;
  }

  export namespace DepositToVesting {
    export type AsObject = {
      vestingContract: string,
      amount: string,
    }
  }

  export class WithdrawFromVesting extends jspb.Message {
    getVestingContract(): string;
    setVestingContract(value: string): void;

    getDepositId(): string;
    setDepositId(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromVesting.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromVesting): WithdrawFromVesting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromVesting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromVesting;
    static deserializeBinaryFromReader(message: WithdrawFromVesting, reader: jspb.BinaryReader): WithdrawFromVesting;
  }

  export namespace WithdrawFromVesting {
    export type AsObject = {
      vestingContract: string,
      depositId: string,
      amount: string,
    }
  }

  export class WithdrawAnyFromVesting extends jspb.Message {
    getVestingContract(): string;
    setVestingContract(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawAnyFromVesting.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawAnyFromVesting): WithdrawAnyFromVesting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawAnyFromVesting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawAnyFromVesting;
    static deserializeBinaryFromReader(message: WithdrawAnyFromVesting, reader: jspb.BinaryReader): WithdrawAnyFromVesting;
  }

  export namespace WithdrawAnyFromVesting {
    export type AsObject = {
      vestingContract: string,
      amount: string,
    }
  }

  export class WithdrawAllFromVesting extends jspb.Message {
    getVestingContract(): string;
    setVestingContract(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawAllFromVesting.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawAllFromVesting): WithdrawAllFromVesting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawAllFromVesting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawAllFromVesting;
    static deserializeBinaryFromReader(message: WithdrawAllFromVesting, reader: jspb.BinaryReader): WithdrawAllFromVesting;
  }

  export namespace WithdrawAllFromVesting {
    export type AsObject = {
      vestingContract: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSIT_TO_VESTING = 2,
    WITHDRAW_FROM_VESTING = 3,
    WITHDRAW_ANY_FROM_VESTING = 4,
    WITHDRAW_ALL_FROM_VESTING = 5,
  }
}

export class VestingSimpleAdaptorV2Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<VestingSimpleAdaptorV2>;
  setCallsList(value: Array<VestingSimpleAdaptorV2>): void;
  addCalls(value?: VestingSimpleAdaptorV2, index?: number): VestingSimpleAdaptorV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VestingSimpleAdaptorV2Calls.AsObject;
  static toObject(includeInstance: boolean, msg: VestingSimpleAdaptorV2Calls): VestingSimpleAdaptorV2Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VestingSimpleAdaptorV2Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VestingSimpleAdaptorV2Calls;
  static deserializeBinaryFromReader(message: VestingSimpleAdaptorV2Calls, reader: jspb.BinaryReader): VestingSimpleAdaptorV2Calls;
}

export namespace VestingSimpleAdaptorV2Calls {
  export type AsObject = {
    callsList: Array<VestingSimpleAdaptorV2.AsObject>,
  }
}

