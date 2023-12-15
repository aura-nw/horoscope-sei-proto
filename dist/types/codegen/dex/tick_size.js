import { Pair } from "./pair";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../helpers";
function createBaseTickSize() {
    return {
        pair: undefined,
        ticksize: "",
        contractAddr: ""
    };
}
export const TickSize = {
    typeUrl: "/seiprotocol.seichain.dex.TickSize",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pair !== undefined) {
            Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
        }
        if (message.ticksize !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.ticksize, 18).atomics);
        }
        if (message.contractAddr !== "") {
            writer.uint32(26).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickSize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pair = Pair.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ticksize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.contractAddr = reader.string();
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
            ticksize: isSet(object.ticksize) ? String(object.ticksize) : "",
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pair !== undefined && (obj.pair = message.pair ? Pair.toJSON(message.pair) : undefined);
        message.ticksize !== undefined && (obj.ticksize = message.ticksize);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTickSize();
        message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
        message.ticksize = object.ticksize ?? "";
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTickSize();
        if (object.pair !== undefined && object.pair !== null) {
            message.pair = Pair.fromAmino(object.pair);
        }
        if (object.ticksize !== undefined && object.ticksize !== null) {
            message.ticksize = object.ticksize;
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pair = message.pair ? Pair.toAmino(message.pair) : undefined;
        obj.ticksize = message.ticksize;
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return TickSize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TickSize.decode(message.value);
    },
    toProto(message) {
        return TickSize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.TickSize",
            value: TickSize.encode(message).finish()
        };
    }
};
