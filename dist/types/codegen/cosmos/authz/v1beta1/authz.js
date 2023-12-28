import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
function createBaseGenericAuthorization() {
    return {
        msg: ""
    };
}
export const GenericAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
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
            msg: isSet(object.msg) ? String(object.msg) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenericAuthorization();
        message.msg = object.msg ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenericAuthorization();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg = message.msg;
        return obj;
    },
    fromAminoMsg(object) {
        return GenericAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenericAuthorization",
            value: GenericAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenericAuthorization.decode(message.value);
    },
    toProto(message) {
        return GenericAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
            value: GenericAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        authorization: undefined,
        expiration: new Date()
    };
}
export const Grant = {
    typeUrl: "/cosmos.authz.v1beta1.Grant",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorization = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authorization !== undefined && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = Any.fromAmino(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authorization = message.authorization ? Any.toAmino(message.authorization) : undefined;
        obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Grant.decode(message.value);
    },
    toProto(message) {
        return Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.Grant",
            value: Grant.encode(message).finish()
        };
    }
};
function createBaseGrantAuthorization() {
    return {
        granter: "",
        grantee: "",
        authorization: undefined,
        expiration: new Date()
    };
}
export const GrantAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.authorization = Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.authorization !== undefined && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrantAuthorization();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrantAuthorization();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = Any.fromAmino(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.authorization = message.authorization ? Any.toAmino(message.authorization) : undefined;
        obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GrantAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantAuthorization",
            value: GrantAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GrantAuthorization.decode(message.value);
    },
    toProto(message) {
        return GrantAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
            value: GrantAuthorization.encode(message).finish()
        };
    }
};
