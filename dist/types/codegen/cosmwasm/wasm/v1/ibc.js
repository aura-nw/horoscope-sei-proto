import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgIBCSend() {
    return {
        channel: "",
        timeoutHeight: Long.UZERO,
        timeoutTimestamp: Long.UZERO,
        data: new Uint8Array()
    };
}
export const MsgIBCSend = {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        if (!message.timeoutHeight.isZero()) {
            writer.uint32(32).uint64(message.timeoutHeight);
        }
        if (!message.timeoutTimestamp.isZero()) {
            writer.uint32(40).uint64(message.timeoutTimestamp);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
                    break;
                case 4:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 5:
                    message.timeoutTimestamp = reader.uint64();
                    break;
                case 6:
                    message.data = reader.bytes();
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
            channel: isSet(object.channel) ? String(object.channel) : "",
            timeoutHeight: isSet(object.timeoutHeight) ? Long.fromValue(object.timeoutHeight) : Long.UZERO,
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel);
        message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || Long.UZERO).toString());
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || Long.UZERO).toString());
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIBCSend();
        message.channel = object.channel ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Long.fromValue(object.timeoutHeight) : Long.UZERO;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgIBCSend();
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = Long.fromString(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = Long.fromString(object.timeout_timestamp);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel;
        obj.timeout_height = message.timeoutHeight ? message.timeoutHeight.toString() : undefined;
        obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIBCSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgIBCSend",
            value: MsgIBCSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgIBCSend.decode(message.value);
    },
    toProto(message) {
        return MsgIBCSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
            value: MsgIBCSend.encode(message).finish()
        };
    }
};
function createBaseMsgIBCCloseChannel() {
    return {
        channel: ""
    };
}
export const MsgIBCCloseChannel = {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCCloseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
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
            channel: isSet(object.channel) ? String(object.channel) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIBCCloseChannel();
        message.channel = object.channel ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgIBCCloseChannel();
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIBCCloseChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgIBCCloseChannel",
            value: MsgIBCCloseChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgIBCCloseChannel.decode(message.value);
    },
    toProto(message) {
        return MsgIBCCloseChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
            value: MsgIBCCloseChannel.encode(message).finish()
        };
    }
};
