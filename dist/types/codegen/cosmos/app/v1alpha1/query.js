import { Config } from "./config";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryConfigRequest() {
    return {};
}
export const QueryConfigRequest = {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryConfigRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryConfigRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConfigRequest",
            value: QueryConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConfigRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
            value: QueryConfigRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConfigResponse() {
    return {
        config: undefined
    };
}
export const QueryConfigResponse = {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Config.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Config.decode(reader, reader.uint32());
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
            config: isSet(object.config) ? Config.fromJSON(object.config) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConfigResponse();
        message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConfigResponse();
        if (object.config !== undefined && object.config !== null) {
            message.config = Config.fromAmino(object.config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.config = message.config ? Config.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConfigResponse",
            value: QueryConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConfigResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
            value: QueryConfigResponse.encode(message).finish()
        };
    }
};
