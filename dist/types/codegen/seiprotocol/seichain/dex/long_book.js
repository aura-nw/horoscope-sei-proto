import { OrderEntry } from "./order_entry";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
function createBaseLongBook() {
    return {
        price: "",
        entry: undefined
    };
}
export const LongBook = {
    typeUrl: "/seiprotocol.seichain.dex.LongBook",
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.entry !== undefined) {
            OrderEntry.encode(message.entry, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLongBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.entry = OrderEntry.decode(reader, reader.uint32());
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
            price: isSet(object.price) ? String(object.price) : "",
            entry: isSet(object.entry) ? OrderEntry.fromJSON(object.entry) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.entry !== undefined && (obj.entry = message.entry ? OrderEntry.toJSON(message.entry) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLongBook();
        message.price = object.price ?? "";
        message.entry = object.entry !== undefined && object.entry !== null ? OrderEntry.fromPartial(object.entry) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLongBook();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.entry !== undefined && object.entry !== null) {
            message.entry = OrderEntry.fromAmino(object.entry);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price;
        obj.entry = message.entry ? OrderEntry.toAmino(message.entry) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LongBook.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LongBook.decode(message.value);
    },
    toProto(message) {
        return LongBook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.LongBook",
            value: LongBook.encode(message).finish()
        };
    }
};
