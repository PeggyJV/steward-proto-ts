// package: steward.v4
// file: erc4626.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class ERC4626AdaptorV1 extends jspb.Message {
  hasRevokeApproval(): boolean;
  clearRevokeApproval(): void;
  getRevokeApproval(): base_pb.RevokeApproval | undefined;
  setRevokeApproval(value?: base_pb.RevokeApproval): void;

  hasDepositToVault(): boolean;
  clearDepositToVault(): void;
  getDepositToVault(): ERC4626AdaptorV1.DepositToVault | undefined;
  setDepositToVault(value?: ERC4626AdaptorV1.DepositToVault): void;

  hasWithdrawFromVault(): boolean;
  clearWithdrawFromVault(): void;
  getWithdrawFromVault(): ERC4626AdaptorV1.WithdrawFromVault | undefined;
  setWithdrawFromVault(value?: ERC4626AdaptorV1.WithdrawFromVault): void;

  getFunctionCase(): ERC4626AdaptorV1.FunctionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC4626AdaptorV1.AsObject;
  static toObject(includeInstance: boolean, msg: ERC4626AdaptorV1): ERC4626AdaptorV1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC4626AdaptorV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC4626AdaptorV1;
  static deserializeBinaryFromReader(message: ERC4626AdaptorV1, reader: jspb.BinaryReader): ERC4626AdaptorV1;
}

export namespace ERC4626AdaptorV1 {
  export type AsObject = {
    revokeApproval?: base_pb.RevokeApproval.AsObject,
    depositToVault?: ERC4626AdaptorV1.DepositToVault.AsObject,
    withdrawFromVault?: ERC4626AdaptorV1.WithdrawFromVault.AsObject,
  }

  export class DepositToVault extends jspb.Message {
    getErc4626Vault(): string;
    setErc4626Vault(value: string): void;

    getAssets(): string;
    setAssets(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositToVault.AsObject;
    static toObject(includeInstance: boolean, msg: DepositToVault): DepositToVault.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositToVault, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositToVault;
    static deserializeBinaryFromReader(message: DepositToVault, reader: jspb.BinaryReader): DepositToVault;
  }

  export namespace DepositToVault {
    export type AsObject = {
      erc4626Vault: string,
      assets: string,
    }
  }

  export class WithdrawFromVault extends jspb.Message {
    getErc4626Vault(): string;
    setErc4626Vault(value: string): void;

    getAssets(): string;
    setAssets(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawFromVault.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawFromVault): WithdrawFromVault.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawFromVault, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawFromVault;
    static deserializeBinaryFromReader(message: WithdrawFromVault, reader: jspb.BinaryReader): WithdrawFromVault;
  }

  export namespace WithdrawFromVault {
    export type AsObject = {
      erc4626Vault: string,
      assets: string,
    }
  }

  export enum FunctionCase {
    FUNCTION_NOT_SET = 0,
    REVOKE_APPROVAL = 1,
    DEPOSIT_TO_VAULT = 2,
    WITHDRAW_FROM_VAULT = 3,
  }
}

export class ERC4626AdaptorV1Calls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<ERC4626AdaptorV1>;
  setCallsList(value: Array<ERC4626AdaptorV1>): void;
  addCalls(value?: ERC4626AdaptorV1, index?: number): ERC4626AdaptorV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC4626AdaptorV1Calls.AsObject;
  static toObject(includeInstance: boolean, msg: ERC4626AdaptorV1Calls): ERC4626AdaptorV1Calls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC4626AdaptorV1Calls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC4626AdaptorV1Calls;
  static deserializeBinaryFromReader(message: ERC4626AdaptorV1Calls, reader: jspb.BinaryReader): ERC4626AdaptorV1Calls;
}

export namespace ERC4626AdaptorV1Calls {
  export type AsObject = {
    callsList: Array<ERC4626AdaptorV1.AsObject>,
  }
}

