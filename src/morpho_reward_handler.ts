/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "steward.v4";

/**
 * Allows Morpho A Token cellars to claim Morpho Rewards
 *
 * Represents function `claim(uint256 claimable, bytes32[] memory proof)`
 */
export interface Claim {
  /** The amount of the asset to withdraw. */
  claimable: string;
  /** Proof of claim */
  proof: Uint8Array[];
}

function createBaseClaim(): Claim {
  return { claimable: "", proof: [] };
}

export const Claim = {
  encode(message: Claim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimable !== "") {
      writer.uint32(10).string(message.claimable);
    }
    for (const v of message.proof) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Claim {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.claimable = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Claim {
    return {
      claimable: isSet(object.claimable) ? globalThis.String(object.claimable) : "",
      proof: globalThis.Array.isArray(object?.proof) ? object.proof.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: Claim): unknown {
    const obj: any = {};
    if (message.claimable !== "") {
      obj.claimable = message.claimable;
    }
    if (message.proof?.length) {
      obj.proof = message.proof.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Claim>, I>>(base?: I): Claim {
    return Claim.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Claim>, I>>(object: I): Claim {
    const message = createBaseClaim();
    message.claimable = object.claimable ?? "";
    message.proof = object.proof?.map((e) => e) || [];
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
