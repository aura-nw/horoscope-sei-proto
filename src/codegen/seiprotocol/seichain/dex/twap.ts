import { Pair, PairAmino, PairSDKType } from "./pair";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
export interface Twap {
  pair?: Pair;
  twap: string;
  lookbackSeconds: Long;
}
export interface TwapProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.Twap";
  value: Uint8Array;
}
export interface TwapAmino {
  pair?: PairAmino;
  twap?: string;
  lookbackSeconds?: string;
}
export interface TwapAminoMsg {
  type: "/seiprotocol.seichain.dex.Twap";
  value: TwapAmino;
}
export interface TwapSDKType {
  pair?: PairSDKType;
  twap: string;
  lookbackSeconds: Long;
}
function createBaseTwap(): Twap {
  return {
    pair: undefined,
    twap: "",
    lookbackSeconds: Long.UZERO
  };
}
export const Twap = {
  typeUrl: "/seiprotocol.seichain.dex.Twap",
  encode(message: Twap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    if (message.twap !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.twap, 18).atomics);
    }
    if (!message.lookbackSeconds.isZero()) {
      writer.uint32(24).uint64(message.lookbackSeconds);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Twap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = Pair.decode(reader, reader.uint32());
          break;
        case 2:
          message.twap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.lookbackSeconds = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Twap {
    return {
      pair: isSet(object.pair) ? Pair.fromJSON(object.pair) : undefined,
      twap: isSet(object.twap) ? String(object.twap) : "",
      lookbackSeconds: isSet(object.lookbackSeconds) ? Long.fromValue(object.lookbackSeconds) : Long.UZERO
    };
  },
  toJSON(message: Twap): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair ? Pair.toJSON(message.pair) : undefined);
    message.twap !== undefined && (obj.twap = message.twap);
    message.lookbackSeconds !== undefined && (obj.lookbackSeconds = (message.lookbackSeconds || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<Twap>): Twap {
    const message = createBaseTwap();
    message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
    message.twap = object.twap ?? "";
    message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? Long.fromValue(object.lookbackSeconds) : Long.UZERO;
    return message;
  },
  fromAmino(object: TwapAmino): Twap {
    const message = createBaseTwap();
    if (object.pair !== undefined && object.pair !== null) {
      message.pair = Pair.fromAmino(object.pair);
    }
    if (object.twap !== undefined && object.twap !== null) {
      message.twap = object.twap;
    }
    if (object.lookbackSeconds !== undefined && object.lookbackSeconds !== null) {
      message.lookbackSeconds = Long.fromString(object.lookbackSeconds);
    }
    return message;
  },
  toAmino(message: Twap): TwapAmino {
    const obj: any = {};
    obj.pair = message.pair ? Pair.toAmino(message.pair) : undefined;
    obj.twap = message.twap;
    obj.lookbackSeconds = message.lookbackSeconds ? message.lookbackSeconds.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TwapAminoMsg): Twap {
    return Twap.fromAmino(object.value);
  },
  fromProtoMsg(message: TwapProtoMsg): Twap {
    return Twap.decode(message.value);
  },
  toProto(message: Twap): Uint8Array {
    return Twap.encode(message).finish();
  },
  toProtoMsg(message: Twap): TwapProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.Twap",
      value: Twap.encode(message).finish()
    };
  }
};