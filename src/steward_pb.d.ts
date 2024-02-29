// package: steward.v4
// file: steward.proto

import * as jspb from "google-protobuf";
import * as aave_v2_stablecoin_pb from "./aave_v2_stablecoin_pb";
import * as cellar_v1_pb from "./cellar_v1_pb";
import * as cellar_v2_pb from "./cellar_v2_pb";

export class ScheduleRequest extends jspb.Message {
  getCellarId(): string;
  setCellarId(value: string): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  hasAaveV2Stablecoin(): boolean;
  clearAaveV2Stablecoin(): void;
  getAaveV2Stablecoin(): aave_v2_stablecoin_pb.AaveV2Stablecoin | undefined;
  setAaveV2Stablecoin(value?: aave_v2_stablecoin_pb.AaveV2Stablecoin): void;

  hasCellarV1(): boolean;
  clearCellarV1(): void;
  getCellarV1(): cellar_v1_pb.CellarV1 | undefined;
  setCellarV1(value?: cellar_v1_pb.CellarV1): void;

  hasCellarV2(): boolean;
  clearCellarV2(): void;
  getCellarV2(): cellar_v2_pb.CellarV2 | undefined;
  setCellarV2(value?: cellar_v2_pb.CellarV2): void;

  hasCellarV22(): boolean;
  clearCellarV22(): void;
  getCellarV22(): cellar_v2_pb.CellarV2_2 | undefined;
  setCellarV22(value?: cellar_v2_pb.CellarV2_2): void;

  hasCellarV25(): boolean;
  clearCellarV25(): void;
  getCellarV25(): cellar_v2_pb.CellarV2_5 | undefined;
  setCellarV25(value?: cellar_v2_pb.CellarV2_5): void;

  getChainId(): number;
  setChainId(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  getCallDataCase(): ScheduleRequest.CallDataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleRequest): ScheduleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleRequest;
  static deserializeBinaryFromReader(message: ScheduleRequest, reader: jspb.BinaryReader): ScheduleRequest;
}

export namespace ScheduleRequest {
  export type AsObject = {
    cellarId: string,
    blockHeight: number,
    aaveV2Stablecoin?: aave_v2_stablecoin_pb.AaveV2Stablecoin.AsObject,
    cellarV1?: cellar_v1_pb.CellarV1.AsObject,
    cellarV2?: cellar_v2_pb.CellarV2.AsObject,
    cellarV22?: cellar_v2_pb.CellarV2_2.AsObject,
    cellarV25?: cellar_v2_pb.CellarV2_5.AsObject,
    chainId: number,
    deadline: number,
  }

  export enum CallDataCase {
    CALL_DATA_NOT_SET = 0,
    AAVE_V2_STABLECOIN = 3,
    CELLAR_V1 = 4,
    CELLAR_V2 = 5,
    CELLAR_V2_2 = 6,
    CELLAR_V2_5 = 7,
  }
}

export class ScheduleResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getChainId(): number;
  setChainId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleResponse): ScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleResponse;
  static deserializeBinaryFromReader(message: ScheduleResponse, reader: jspb.BinaryReader): ScheduleResponse;
}

export namespace ScheduleResponse {
  export type AsObject = {
    id: string,
    chainId: number,
  }
}

export class StatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRequest): StatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRequest;
  static deserializeBinaryFromReader(message: StatusRequest, reader: jspb.BinaryReader): StatusRequest;
}

export namespace StatusRequest {
  export type AsObject = {
  }
}

export class StatusResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusResponse;
  static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
  export type AsObject = {
    version: string,
  }
}

export class SimulateRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ScheduleRequest | undefined;
  setRequest(value?: ScheduleRequest): void;

  getEncodeOnly(): boolean;
  setEncodeOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SimulateRequest): SimulateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimulateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulateRequest;
  static deserializeBinaryFromReader(message: SimulateRequest, reader: jspb.BinaryReader): SimulateRequest;
}

export namespace SimulateRequest {
  export type AsObject = {
    request?: ScheduleRequest.AsObject,
    encodeOnly: boolean,
  }
}

export class SimulateResponse extends jspb.Message {
  getEncodedCall(): string;
  setEncodedCall(value: string): void;

  getResponseBody(): string;
  setResponseBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SimulateResponse): SimulateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimulateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulateResponse;
  static deserializeBinaryFromReader(message: SimulateResponse, reader: jspb.BinaryReader): SimulateResponse;
}

export namespace SimulateResponse {
  export type AsObject = {
    encodedCall: string,
    responseBody: string,
  }
}

export class VersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VersionRequest): VersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionRequest;
  static deserializeBinaryFromReader(message: VersionRequest, reader: jspb.BinaryReader): VersionRequest;
}

export namespace VersionRequest {
  export type AsObject = {
  }
}

export class VersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VersionResponse): VersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionResponse;
  static deserializeBinaryFromReader(message: VersionResponse, reader: jspb.BinaryReader): VersionResponse;
}

export namespace VersionResponse {
  export type AsObject = {
    version: string,
  }
}

