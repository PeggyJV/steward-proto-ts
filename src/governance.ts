/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { AaveV2StablecoinGovernance } from "./aave_v2_stablecoin";
import { CellarV1Governance } from "./cellar_v1";
import { CellarV22Governance, CellarV25Governance, CellarV2Governance } from "./cellar_v2";

export const protobufPackage = "steward.v4";

/** Represents a governance-executed cellar function call. Used for Scheduled Cork Proposals in Sommelier. */
export interface GovernanceCall {
  /** Governance function calls to the AaveV2Stablecoin cellar */
  aaveV2Stablecoin?:
    | AaveV2StablecoinGovernance
    | undefined;
  /** Governance function calls to V1 cellars */
  cellarV1?:
    | CellarV1Governance
    | undefined;
  /** Governance function calls to V2 cellars */
  cellarV2?:
    | CellarV2Governance
    | undefined;
  /** Governance function calls to the V2.2 cellars */
  cellarV22?:
    | CellarV22Governance
    | undefined;
  /** Governance function calls to the V2.5 cellars */
  cellarV25?: CellarV25Governance | undefined;
}

function createBaseGovernanceCall(): GovernanceCall {
  return {
    aaveV2Stablecoin: undefined,
    cellarV1: undefined,
    cellarV2: undefined,
    cellarV22: undefined,
    cellarV25: undefined,
  };
}

export const GovernanceCall = {
  encode(message: GovernanceCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aaveV2Stablecoin !== undefined) {
      AaveV2StablecoinGovernance.encode(message.aaveV2Stablecoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.cellarV1 !== undefined) {
      CellarV1Governance.encode(message.cellarV1, writer.uint32(26).fork()).ldelim();
    }
    if (message.cellarV2 !== undefined) {
      CellarV2Governance.encode(message.cellarV2, writer.uint32(34).fork()).ldelim();
    }
    if (message.cellarV22 !== undefined) {
      CellarV22Governance.encode(message.cellarV22, writer.uint32(42).fork()).ldelim();
    }
    if (message.cellarV25 !== undefined) {
      CellarV25Governance.encode(message.cellarV25, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GovernanceCall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernanceCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.aaveV2Stablecoin = AaveV2StablecoinGovernance.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cellarV1 = CellarV1Governance.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cellarV2 = CellarV2Governance.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cellarV22 = CellarV22Governance.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cellarV25 = CellarV25Governance.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GovernanceCall {
    return {
      aaveV2Stablecoin: isSet(object.aaveV2Stablecoin)
        ? AaveV2StablecoinGovernance.fromJSON(object.aaveV2Stablecoin)
        : undefined,
      cellarV1: isSet(object.cellarV1) ? CellarV1Governance.fromJSON(object.cellarV1) : undefined,
      cellarV2: isSet(object.cellarV2) ? CellarV2Governance.fromJSON(object.cellarV2) : undefined,
      cellarV22: isSet(object.cellarV22) ? CellarV22Governance.fromJSON(object.cellarV22) : undefined,
      cellarV25: isSet(object.cellarV25) ? CellarV25Governance.fromJSON(object.cellarV25) : undefined,
    };
  },

  toJSON(message: GovernanceCall): unknown {
    const obj: any = {};
    if (message.aaveV2Stablecoin !== undefined) {
      obj.aaveV2Stablecoin = AaveV2StablecoinGovernance.toJSON(message.aaveV2Stablecoin);
    }
    if (message.cellarV1 !== undefined) {
      obj.cellarV1 = CellarV1Governance.toJSON(message.cellarV1);
    }
    if (message.cellarV2 !== undefined) {
      obj.cellarV2 = CellarV2Governance.toJSON(message.cellarV2);
    }
    if (message.cellarV22 !== undefined) {
      obj.cellarV22 = CellarV22Governance.toJSON(message.cellarV22);
    }
    if (message.cellarV25 !== undefined) {
      obj.cellarV25 = CellarV25Governance.toJSON(message.cellarV25);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GovernanceCall>, I>>(base?: I): GovernanceCall {
    return GovernanceCall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GovernanceCall>, I>>(object: I): GovernanceCall {
    const message = createBaseGovernanceCall();
    message.aaveV2Stablecoin = (object.aaveV2Stablecoin !== undefined && object.aaveV2Stablecoin !== null)
      ? AaveV2StablecoinGovernance.fromPartial(object.aaveV2Stablecoin)
      : undefined;
    message.cellarV1 = (object.cellarV1 !== undefined && object.cellarV1 !== null)
      ? CellarV1Governance.fromPartial(object.cellarV1)
      : undefined;
    message.cellarV2 = (object.cellarV2 !== undefined && object.cellarV2 !== null)
      ? CellarV2Governance.fromPartial(object.cellarV2)
      : undefined;
    message.cellarV22 = (object.cellarV22 !== undefined && object.cellarV22 !== null)
      ? CellarV22Governance.fromPartial(object.cellarV22)
      : undefined;
    message.cellarV25 = (object.cellarV25 !== undefined && object.cellarV25 !== null)
      ? CellarV25Governance.fromPartial(object.cellarV25)
      : undefined;
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
