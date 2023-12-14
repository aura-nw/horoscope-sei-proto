import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBasePageRequest() {
    return {
        key: new Uint8Array(),
        offset: Long.UZERO,
        limit: Long.UZERO,
        countTotal: false,
        reverse: false
    };
}
export const PageRequest = {
    typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (!message.offset.isZero()) {
            writer.uint32(16).uint64(message.offset);
        }
        if (!message.limit.isZero()) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.countTotal = reader.bool();
                    break;
                case 5:
                    message.reverse = reader.bool();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            offset: isSet(object.offset) ? Long.fromValue(object.offset) : Long.UZERO,
            limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
            countTotal: isSet(object.countTotal) ? Boolean(object.countTotal) : false,
            reverse: isSet(object.reverse) ? Boolean(object.reverse) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.offset !== undefined && (obj.offset = (message.offset || Long.UZERO).toString());
        message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
        message.countTotal !== undefined && (obj.countTotal = message.countTotal);
        message.reverse !== undefined && (obj.reverse = message.reverse);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePageRequest();
        message.key = object.key ?? new Uint8Array();
        message.offset = object.offset !== undefined && object.offset !== null ? Long.fromValue(object.offset) : Long.UZERO;
        message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
        message.countTotal = object.countTotal ?? false;
        message.reverse = object.reverse ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBasePageRequest();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.offset !== undefined && object.offset !== null) {
            message.offset = Long.fromString(object.offset);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Long.fromString(object.limit);
        }
        if (object.count_total !== undefined && object.count_total !== null) {
            message.countTotal = object.count_total;
        }
        if (object.reverse !== undefined && object.reverse !== null) {
            message.reverse = object.reverse;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.offset = message.offset ? message.offset.toString() : undefined;
        obj.limit = message.limit ? message.limit.toString() : undefined;
        obj.count_total = message.countTotal;
        obj.reverse = message.reverse;
        return obj;
    },
    fromAminoMsg(object) {
        return PageRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PageRequest",
            value: PageRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PageRequest.decode(message.value);
    },
    toProto(message) {
        return PageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
            value: PageRequest.encode(message).finish()
        };
    }
};
function createBasePageResponse() {
    return {
        nextKey: new Uint8Array(),
        total: Long.UZERO
    };
}
export const PageResponse = {
    typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (!message.total.isZero()) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextKey = reader.bytes();
                    break;
                case 2:
                    message.total = reader.uint64();
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
            nextKey: isSet(object.nextKey) ? bytesFromBase64(object.nextKey) : new Uint8Array(),
            total: isSet(object.total) ? Long.fromValue(object.total) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.nextKey !== undefined && (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
        message.total !== undefined && (obj.total = (message.total || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePageResponse();
        message.nextKey = object.nextKey ?? new Uint8Array();
        message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBasePageResponse();
        if (object.next_key !== undefined && object.next_key !== null) {
            message.nextKey = bytesFromBase64(object.next_key);
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = Long.fromString(object.total);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.next_key = message.nextKey ? base64FromBytes(message.nextKey) : undefined;
        obj.total = message.total ? message.total.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PageResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PageResponse",
            value: PageResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PageResponse.decode(message.value);
    },
    toProto(message) {
        return PageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
            value: PageResponse.encode(message).finish()
        };
    }
};
