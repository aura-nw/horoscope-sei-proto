import { Pair } from "./pair";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
function createBaseTwap() {
    return {
        pair: undefined,
        twap: "",
        lookbackSeconds: Long.UZERO
    };
}
export const Twap = {
    typeUrl: "/seiprotocol.seichain.dex.Twap",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.lookbackSeconds = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pair: isSet(object.pair) ? Pair.fromJSON(object.pair) : undefined,
            twap: isSet(object.twap) ? String(object.twap) : "",
            lookbackSeconds: isSet(object.lookbackSeconds) ? Long.fromValue(object.lookbackSeconds) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.pair !== undefined && (obj.pair = message.pair ? Pair.toJSON(message.pair) : undefined);
        message.twap !== undefined && (obj.twap = message.twap);
        message.lookbackSeconds !== undefined && (obj.lookbackSeconds = (message.lookbackSeconds || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTwap();
        message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
        message.twap = object.twap ?? "";
        message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? Long.fromValue(object.lookbackSeconds) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.pair = message.pair ? Pair.toAmino(message.pair) : undefined;
        obj.twap = message.twap;
        obj.lookbackSeconds = message.lookbackSeconds ? message.lookbackSeconds.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Twap.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Twap.decode(message.value);
    },
    toProto(message) {
        return Twap.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.Twap",
            value: Twap.encode(message).finish()
        };
    }
};
