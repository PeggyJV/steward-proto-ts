// package: steward.v4
// file: governance.proto

import * as jspb from "google-protobuf";
import * as aave_v2_stablecoin_pb from "./aave_v2_stablecoin_pb";
import * as cellar_v1_pb from "./cellar_v1_pb";
import * as cellar_v2_pb from "./cellar_v2_pb";

export class GovernanceCall extends jspb.Message {
  hasAaveV2Stablecoin(): boolean;
  clearAaveV2Stablecoin(): void;
  getAaveV2Stablecoin(): aave_v2_stablecoin_pb.AaveV2StablecoinGovernance | undefined;
  setAaveV2Stablecoin(value?: aave_v2_stablecoin_pb.AaveV2StablecoinGovernance): void;

  hasCellarV1(): boolean;
  clearCellarV1(): void;
  getCellarV1(): cellar_v1_pb.CellarV1Governance | undefined;
  setCellarV1(value?: cellar_v1_pb.CellarV1Governance): void;

  hasCellarV2(): boolean;
  clearCellarV2(): void;
  getCellarV2(): cellar_v2_pb.CellarV2Governance | undefined;
  setCellarV2(value?: cellar_v2_pb.CellarV2Governance): void;

  hasCellarV22(): boolean;
  clearCellarV22(): void;
  getCellarV22(): cellar_v2_pb.CellarV2_2Governance | undefined;
  setCellarV22(value?: cellar_v2_pb.CellarV2_2Governance): void;

  hasCellarV25(): boolean;
  clearCellarV25(): void;
  getCellarV25(): cellar_v2_pb.CellarV2_5Governance | undefined;
  setCellarV25(value?: cellar_v2_pb.CellarV2_5Governance): void;

  getCallCase(): GovernanceCall.CallCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GovernanceCall.AsObject;
  static toObject(includeInstance: boolean, msg: GovernanceCall): GovernanceCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GovernanceCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GovernanceCall;
  static deserializeBinaryFromReader(message: GovernanceCall, reader: jspb.BinaryReader): GovernanceCall;
}

export namespace GovernanceCall {
  export type AsObject = {
    aaveV2Stablecoin?: aave_v2_stablecoin_pb.AaveV2StablecoinGovernance.AsObject,
    cellarV1?: cellar_v1_pb.CellarV1Governance.AsObject,
    cellarV2?: cellar_v2_pb.CellarV2Governance.AsObject,
    cellarV22?: cellar_v2_pb.CellarV2_2Governance.AsObject,
    cellarV25?: cellar_v2_pb.CellarV2_5Governance.AsObject,
  }

  export enum CallCase {
    CALL_NOT_SET = 0,
    AAVE_V2_STABLECOIN = 2,
    CELLAR_V1 = 3,
    CELLAR_V2 = 4,
    CELLAR_V2_2 = 5,
    CELLAR_V2_5 = 6,
  }
}

