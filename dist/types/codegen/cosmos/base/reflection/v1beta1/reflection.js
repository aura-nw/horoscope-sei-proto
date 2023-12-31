import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseListAllInterfacesRequest() {
    return {};
}
export const ListAllInterfacesRequest = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesRequest();
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
        const message = createBaseListAllInterfacesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseListAllInterfacesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ListAllInterfacesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListAllInterfacesRequest",
            value: ListAllInterfacesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListAllInterfacesRequest.decode(message.value);
    },
    toProto(message) {
        return ListAllInterfacesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
            value: ListAllInterfacesRequest.encode(message).finish()
        };
    }
};
function createBaseListAllInterfacesResponse() {
    return {
        interfaceNames: []
    };
}
export const ListAllInterfacesResponse = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.interfaceNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceNames.push(reader.string());
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
            interfaceNames: Array.isArray(object?.interfaceNames) ? object.interfaceNames.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interfaceNames) {
            obj.interfaceNames = message.interfaceNames.map(e => e);
        }
        else {
            obj.interfaceNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListAllInterfacesResponse();
        message.interfaceNames = object.interfaceNames?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListAllInterfacesResponse();
        message.interfaceNames = object.interface_names?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.interfaceNames) {
            obj.interface_names = message.interfaceNames.map(e => e);
        }
        else {
            obj.interface_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ListAllInterfacesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListAllInterfacesResponse",
            value: ListAllInterfacesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListAllInterfacesResponse.decode(message.value);
    },
    toProto(message) {
        return ListAllInterfacesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
            value: ListAllInterfacesResponse.encode(message).finish()
        };
    }
};
function createBaseListImplementationsRequest() {
    return {
        interfaceName: ""
    };
}
export const ListImplementationsRequest = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.interfaceName !== "") {
            writer.uint32(10).string(message.interfaceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceName = reader.string();
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
            interfaceName: isSet(object.interfaceName) ? String(object.interfaceName) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListImplementationsRequest();
        message.interfaceName = object.interfaceName ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseListImplementationsRequest();
        if (object.interface_name !== undefined && object.interface_name !== null) {
            message.interfaceName = object.interface_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.interface_name = message.interfaceName;
        return obj;
    },
    fromAminoMsg(object) {
        return ListImplementationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListImplementationsRequest",
            value: ListImplementationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListImplementationsRequest.decode(message.value);
    },
    toProto(message) {
        return ListImplementationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
            value: ListImplementationsRequest.encode(message).finish()
        };
    }
};
function createBaseListImplementationsResponse() {
    return {
        implementationMessageNames: []
    };
}
export const ListImplementationsResponse = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.implementationMessageNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.implementationMessageNames.push(reader.string());
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
            implementationMessageNames: Array.isArray(object?.implementationMessageNames) ? object.implementationMessageNames.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.implementationMessageNames) {
            obj.implementationMessageNames = message.implementationMessageNames.map(e => e);
        }
        else {
            obj.implementationMessageNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListImplementationsResponse();
        message.implementationMessageNames = object.implementationMessageNames?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListImplementationsResponse();
        message.implementationMessageNames = object.implementation_message_names?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.implementationMessageNames) {
            obj.implementation_message_names = message.implementationMessageNames.map(e => e);
        }
        else {
            obj.implementation_message_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ListImplementationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListImplementationsResponse",
            value: ListImplementationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListImplementationsResponse.decode(message.value);
    },
    toProto(message) {
        return ListImplementationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
            value: ListImplementationsResponse.encode(message).finish()
        };
    }
};
