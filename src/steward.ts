/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AaveV2Stablecoin } from "./aave_v2_stablecoin";
import { CellarV1 } from "./cellar_v1";
import { CellarV2, CellarV22, CellarV25 } from "./cellar_v2";

export const protobufPackage = "steward.v4";

/** Represents a scheduled function call to a particular Cellar */
export interface ScheduleRequest {
  /** The ID (currently simply an Ethereum address) of the target Cellar */
  cellarId: string;
  /** The block height at which to schedule the contract call */
  blockHeight: number;
  aaveV2Stablecoin?: AaveV2Stablecoin | undefined;
  cellarV1?: CellarV1 | undefined;
  cellarV2?: CellarV2 | undefined;
  cellarV22?: CellarV22 | undefined;
  cellarV25?:
    | CellarV25
    | undefined;
  /** The ID of the chain on which the target Cellar resides */
  chainId: number;
  /** The unix timestamp deadline for the contract call to be executed */
  deadline: number;
}

export interface ScheduleResponse {
  /** The hex encoded ID of the scheduled cork */
  id: string;
  /** The ID of the chain on which the target Cellar resides */
  chainId: number;
}

/** Represents a request for Steward's current status */
export interface StatusRequest {
}

export interface StatusResponse {
  version: string;
}

/** Represents a simulated function call to a particular Cellar */
export interface SimulateRequest {
  request:
    | ScheduleRequest
    | undefined;
  /** / Whether to simply encode and return the contract call data, skipping the Tenderly simulation */
  encodeOnly: boolean;
}

export interface SimulateResponse {
  /** / The encoded contract call */
  encodedCall: string;
  /** / The response body from the Tenderly simulation */
  responseBody: string;
}

export interface VersionRequest {
}

export interface VersionResponse {
  version: string;
}

function createBaseScheduleRequest(): ScheduleRequest {
  return {
    cellarId: "",
    blockHeight: 0,
    aaveV2Stablecoin: undefined,
    cellarV1: undefined,
    cellarV2: undefined,
    cellarV22: undefined,
    cellarV25: undefined,
    chainId: 0,
    deadline: 0,
  };
}

export const ScheduleRequest = {
  encode(message: ScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellarId !== "") {
      writer.uint32(10).string(message.cellarId);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.aaveV2Stablecoin !== undefined) {
      AaveV2Stablecoin.encode(message.aaveV2Stablecoin, writer.uint32(26).fork()).ldelim();
    }
    if (message.cellarV1 !== undefined) {
      CellarV1.encode(message.cellarV1, writer.uint32(34).fork()).ldelim();
    }
    if (message.cellarV2 !== undefined) {
      CellarV2.encode(message.cellarV2, writer.uint32(42).fork()).ldelim();
    }
    if (message.cellarV22 !== undefined) {
      CellarV22.encode(message.cellarV22, writer.uint32(50).fork()).ldelim();
    }
    if (message.cellarV25 !== undefined) {
      CellarV25.encode(message.cellarV25, writer.uint32(58).fork()).ldelim();
    }
    if (message.chainId !== 0) {
      writer.uint32(64).uint64(message.chainId);
    }
    if (message.deadline !== 0) {
      writer.uint32(72).uint64(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cellarId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blockHeight = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.aaveV2Stablecoin = AaveV2Stablecoin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cellarV1 = CellarV1.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cellarV2 = CellarV2.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cellarV22 = CellarV22.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.cellarV25 = CellarV25.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.chainId = longToNumber(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.deadline = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScheduleRequest {
    return {
      cellarId: isSet(object.cellarId) ? globalThis.String(object.cellarId) : "",
      blockHeight: isSet(object.blockHeight) ? globalThis.Number(object.blockHeight) : 0,
      aaveV2Stablecoin: isSet(object.aaveV2Stablecoin) ? AaveV2Stablecoin.fromJSON(object.aaveV2Stablecoin) : undefined,
      cellarV1: isSet(object.cellarV1) ? CellarV1.fromJSON(object.cellarV1) : undefined,
      cellarV2: isSet(object.cellarV2) ? CellarV2.fromJSON(object.cellarV2) : undefined,
      cellarV22: isSet(object.cellarV22) ? CellarV22.fromJSON(object.cellarV22) : undefined,
      cellarV25: isSet(object.cellarV25) ? CellarV25.fromJSON(object.cellarV25) : undefined,
      chainId: isSet(object.chainId) ? globalThis.Number(object.chainId) : 0,
      deadline: isSet(object.deadline) ? globalThis.Number(object.deadline) : 0,
    };
  },

  toJSON(message: ScheduleRequest): unknown {
    const obj: any = {};
    if (message.cellarId !== "") {
      obj.cellarId = message.cellarId;
    }
    if (message.blockHeight !== 0) {
      obj.blockHeight = Math.round(message.blockHeight);
    }
    if (message.aaveV2Stablecoin !== undefined) {
      obj.aaveV2Stablecoin = AaveV2Stablecoin.toJSON(message.aaveV2Stablecoin);
    }
    if (message.cellarV1 !== undefined) {
      obj.cellarV1 = CellarV1.toJSON(message.cellarV1);
    }
    if (message.cellarV2 !== undefined) {
      obj.cellarV2 = CellarV2.toJSON(message.cellarV2);
    }
    if (message.cellarV22 !== undefined) {
      obj.cellarV22 = CellarV22.toJSON(message.cellarV22);
    }
    if (message.cellarV25 !== undefined) {
      obj.cellarV25 = CellarV25.toJSON(message.cellarV25);
    }
    if (message.chainId !== 0) {
      obj.chainId = Math.round(message.chainId);
    }
    if (message.deadline !== 0) {
      obj.deadline = Math.round(message.deadline);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScheduleRequest>, I>>(base?: I): ScheduleRequest {
    return ScheduleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScheduleRequest>, I>>(object: I): ScheduleRequest {
    const message = createBaseScheduleRequest();
    message.cellarId = object.cellarId ?? "";
    message.blockHeight = object.blockHeight ?? 0;
    message.aaveV2Stablecoin = (object.aaveV2Stablecoin !== undefined && object.aaveV2Stablecoin !== null)
      ? AaveV2Stablecoin.fromPartial(object.aaveV2Stablecoin)
      : undefined;
    message.cellarV1 = (object.cellarV1 !== undefined && object.cellarV1 !== null)
      ? CellarV1.fromPartial(object.cellarV1)
      : undefined;
    message.cellarV2 = (object.cellarV2 !== undefined && object.cellarV2 !== null)
      ? CellarV2.fromPartial(object.cellarV2)
      : undefined;
    message.cellarV22 = (object.cellarV22 !== undefined && object.cellarV22 !== null)
      ? CellarV22.fromPartial(object.cellarV22)
      : undefined;
    message.cellarV25 = (object.cellarV25 !== undefined && object.cellarV25 !== null)
      ? CellarV25.fromPartial(object.cellarV25)
      : undefined;
    message.chainId = object.chainId ?? 0;
    message.deadline = object.deadline ?? 0;
    return message;
  },
};

function createBaseScheduleResponse(): ScheduleResponse {
  return { id: "", chainId: 0 };
}

export const ScheduleResponse = {
  encode(message: ScheduleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.chainId !== 0) {
      writer.uint32(16).uint64(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleResponse();
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
          if (tag !== 16) {
            break;
          }

          message.chainId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScheduleResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      chainId: isSet(object.chainId) ? globalThis.Number(object.chainId) : 0,
    };
  },

  toJSON(message: ScheduleResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.chainId !== 0) {
      obj.chainId = Math.round(message.chainId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScheduleResponse>, I>>(base?: I): ScheduleResponse {
    return ScheduleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScheduleResponse>, I>>(object: I): ScheduleResponse {
    const message = createBaseScheduleResponse();
    message.id = object.id ?? "";
    message.chainId = object.chainId ?? 0;
    return message;
  },
};

function createBaseStatusRequest(): StatusRequest {
  return {};
}

export const StatusRequest = {
  encode(_: StatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): StatusRequest {
    return {};
  },

  toJSON(_: StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<StatusRequest>, I>>(base?: I): StatusRequest {
    return StatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatusRequest>, I>>(_: I): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
};

function createBaseStatusResponse(): StatusResponse {
  return { version: "" };
}

export const StatusResponse = {
  encode(message: StatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusResponse {
    return { version: isSet(object.version) ? globalThis.String(object.version) : "" };
  },

  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatusResponse>, I>>(base?: I): StatusResponse {
    return StatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatusResponse>, I>>(object: I): StatusResponse {
    const message = createBaseStatusResponse();
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseSimulateRequest(): SimulateRequest {
  return { request: undefined, encodeOnly: false };
}

export const SimulateRequest = {
  encode(message: SimulateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      ScheduleRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.encodeOnly === true) {
      writer.uint32(16).bool(message.encodeOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = ScheduleRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.encodeOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimulateRequest {
    return {
      request: isSet(object.request) ? ScheduleRequest.fromJSON(object.request) : undefined,
      encodeOnly: isSet(object.encodeOnly) ? globalThis.Boolean(object.encodeOnly) : false,
    };
  },

  toJSON(message: SimulateRequest): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = ScheduleRequest.toJSON(message.request);
    }
    if (message.encodeOnly === true) {
      obj.encodeOnly = message.encodeOnly;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SimulateRequest>, I>>(base?: I): SimulateRequest {
    return SimulateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SimulateRequest>, I>>(object: I): SimulateRequest {
    const message = createBaseSimulateRequest();
    message.request = (object.request !== undefined && object.request !== null)
      ? ScheduleRequest.fromPartial(object.request)
      : undefined;
    message.encodeOnly = object.encodeOnly ?? false;
    return message;
  },
};

function createBaseSimulateResponse(): SimulateResponse {
  return { encodedCall: "", responseBody: "" };
}

export const SimulateResponse = {
  encode(message: SimulateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encodedCall !== "") {
      writer.uint32(10).string(message.encodedCall);
    }
    if (message.responseBody !== "") {
      writer.uint32(18).string(message.responseBody);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encodedCall = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.responseBody = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimulateResponse {
    return {
      encodedCall: isSet(object.encodedCall) ? globalThis.String(object.encodedCall) : "",
      responseBody: isSet(object.responseBody) ? globalThis.String(object.responseBody) : "",
    };
  },

  toJSON(message: SimulateResponse): unknown {
    const obj: any = {};
    if (message.encodedCall !== "") {
      obj.encodedCall = message.encodedCall;
    }
    if (message.responseBody !== "") {
      obj.responseBody = message.responseBody;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SimulateResponse>, I>>(base?: I): SimulateResponse {
    return SimulateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SimulateResponse>, I>>(object: I): SimulateResponse {
    const message = createBaseSimulateResponse();
    message.encodedCall = object.encodedCall ?? "";
    message.responseBody = object.responseBody ?? "";
    return message;
  },
};

function createBaseVersionRequest(): VersionRequest {
  return {};
}

export const VersionRequest = {
  encode(_: VersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): VersionRequest {
    return {};
  },

  toJSON(_: VersionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<VersionRequest>, I>>(base?: I): VersionRequest {
    return VersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VersionRequest>, I>>(_: I): VersionRequest {
    const message = createBaseVersionRequest();
    return message;
  },
};

function createBaseVersionResponse(): VersionResponse {
  return { version: "" };
}

export const VersionResponse = {
  encode(message: VersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VersionResponse {
    return { version: isSet(object.version) ? globalThis.String(object.version) : "" };
  },

  toJSON(message: VersionResponse): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VersionResponse>, I>>(base?: I): VersionResponse {
    return VersionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VersionResponse>, I>>(object: I): VersionResponse {
    const message = createBaseVersionResponse();
    message.version = object.version ?? "";
    return message;
  },
};

/** Service for handling Cellar contract calls */
export interface ContractCallService {
  /** Handles scheduled contract call submission */
  Schedule(request: ScheduleRequest): Promise<ScheduleResponse>;
}

export const ContractCallServiceServiceName = "steward.v4.ContractCallService";
export class ContractCallServiceClientImpl implements ContractCallService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ContractCallServiceServiceName;
    this.rpc = rpc;
    this.Schedule = this.Schedule.bind(this);
  }
  Schedule(request: ScheduleRequest): Promise<ScheduleResponse> {
    const data = ScheduleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Schedule", data);
    return promise.then((data) => ScheduleResponse.decode(_m0.Reader.create(data)));
  }
}

/** Service for simulating contract calls encoded by Steward using Tenderly */
export interface SimulateContractCallService {
  /** Handles simulated contract call submission */
  Simulate(request: SimulateRequest): Promise<SimulateResponse>;
}

export const SimulateContractCallServiceServiceName = "steward.v4.SimulateContractCallService";
export class SimulateContractCallServiceClientImpl implements SimulateContractCallService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || SimulateContractCallServiceServiceName;
    this.rpc = rpc;
    this.Simulate = this.Simulate.bind(this);
  }
  Simulate(request: SimulateRequest): Promise<SimulateResponse> {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Simulate", data);
    return promise.then((data) => SimulateResponse.decode(_m0.Reader.create(data)));
  }
}

export interface StatusService {
  Version(request: VersionRequest): Promise<VersionResponse>;
}

export const StatusServiceServiceName = "steward.v4.StatusService";
export class StatusServiceClientImpl implements StatusService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || StatusServiceServiceName;
    this.rpc = rpc;
    this.Version = this.Version.bind(this);
  }
  Version(request: VersionRequest): Promise<VersionResponse> {
    const data = VersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Version", data);
    return promise.then((data) => VersionResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
