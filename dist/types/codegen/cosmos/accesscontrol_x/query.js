import { Params } from "./genesis";
import { MessageDependencyMapping, WasmDependencyMapping } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseResourceDependencyMappingFromMessageKeyRequest() {
    return {
        messageKey: ""
    };
}
export const ResourceDependencyMappingFromMessageKeyRequest = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageKey !== "") {
            writer.uint32(10).string(message.messageKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceDependencyMappingFromMessageKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageKey = reader.string();
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
            messageKey: isSet(object.messageKey) ? String(object.messageKey) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageKey !== undefined && (obj.messageKey = message.messageKey);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResourceDependencyMappingFromMessageKeyRequest();
        message.messageKey = object.messageKey ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResourceDependencyMappingFromMessageKeyRequest();
        if (object.message_key !== undefined && object.message_key !== null) {
            message.messageKey = object.message_key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_key = message.messageKey;
        return obj;
    },
    fromAminoMsg(object) {
        return ResourceDependencyMappingFromMessageKeyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ResourceDependencyMappingFromMessageKeyRequest",
            value: ResourceDependencyMappingFromMessageKeyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ResourceDependencyMappingFromMessageKeyRequest.decode(message.value);
    },
    toProto(message) {
        return ResourceDependencyMappingFromMessageKeyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyRequest",
            value: ResourceDependencyMappingFromMessageKeyRequest.encode(message).finish()
        };
    }
};
function createBaseResourceDependencyMappingFromMessageKeyResponse() {
    return {
        messageDependencyMapping: MessageDependencyMapping.fromPartial({})
    };
}
export const ResourceDependencyMappingFromMessageKeyResponse = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageDependencyMapping !== undefined) {
            MessageDependencyMapping.encode(message.messageDependencyMapping, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceDependencyMappingFromMessageKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageDependencyMapping = MessageDependencyMapping.decode(reader, reader.uint32());
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
            messageDependencyMapping: isSet(object.messageDependencyMapping) ? MessageDependencyMapping.fromJSON(object.messageDependencyMapping) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageDependencyMapping !== undefined && (obj.messageDependencyMapping = message.messageDependencyMapping ? MessageDependencyMapping.toJSON(message.messageDependencyMapping) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResourceDependencyMappingFromMessageKeyResponse();
        message.messageDependencyMapping = object.messageDependencyMapping !== undefined && object.messageDependencyMapping !== null ? MessageDependencyMapping.fromPartial(object.messageDependencyMapping) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResourceDependencyMappingFromMessageKeyResponse();
        if (object.message_dependency_mapping !== undefined && object.message_dependency_mapping !== null) {
            message.messageDependencyMapping = MessageDependencyMapping.fromAmino(object.message_dependency_mapping);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_dependency_mapping = message.messageDependencyMapping ? MessageDependencyMapping.toAmino(message.messageDependencyMapping) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ResourceDependencyMappingFromMessageKeyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ResourceDependencyMappingFromMessageKeyResponse",
            value: ResourceDependencyMappingFromMessageKeyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ResourceDependencyMappingFromMessageKeyResponse.decode(message.value);
    },
    toProto(message) {
        return ResourceDependencyMappingFromMessageKeyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyResponse",
            value: ResourceDependencyMappingFromMessageKeyResponse.encode(message).finish()
        };
    }
};
function createBaseWasmDependencyMappingRequest() {
    return {
        contractAddress: ""
    };
}
export const WasmDependencyMappingRequest = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmDependencyMappingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWasmDependencyMappingRequest();
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWasmDependencyMappingRequest();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return WasmDependencyMappingRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WasmDependencyMappingRequest",
            value: WasmDependencyMappingRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WasmDependencyMappingRequest.decode(message.value);
    },
    toProto(message) {
        return WasmDependencyMappingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingRequest",
            value: WasmDependencyMappingRequest.encode(message).finish()
        };
    }
};
function createBaseWasmDependencyMappingResponse() {
    return {
        wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
    };
}
export const WasmDependencyMappingResponse = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.wasmDependencyMapping !== undefined) {
            WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmDependencyMappingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wasmDependencyMapping = WasmDependencyMapping.decode(reader, reader.uint32());
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
            wasmDependencyMapping: isSet(object.wasmDependencyMapping) ? WasmDependencyMapping.fromJSON(object.wasmDependencyMapping) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.wasmDependencyMapping !== undefined && (obj.wasmDependencyMapping = message.wasmDependencyMapping ? WasmDependencyMapping.toJSON(message.wasmDependencyMapping) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWasmDependencyMappingResponse();
        message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseWasmDependencyMappingResponse();
        if (object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null) {
            message.wasmDependencyMapping = WasmDependencyMapping.fromAmino(object.wasm_dependency_mapping);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wasm_dependency_mapping = message.wasmDependencyMapping ? WasmDependencyMapping.toAmino(message.wasmDependencyMapping) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return WasmDependencyMappingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WasmDependencyMappingResponse",
            value: WasmDependencyMappingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WasmDependencyMappingResponse.decode(message.value);
    },
    toProto(message) {
        return WasmDependencyMappingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingResponse",
            value: WasmDependencyMappingResponse.encode(message).finish()
        };
    }
};
function createBaseListResourceDependencyMappingRequest() {
    return {};
}
export const ListResourceDependencyMappingRequest = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListResourceDependencyMappingRequest();
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
        const message = createBaseListResourceDependencyMappingRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseListResourceDependencyMappingRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ListResourceDependencyMappingRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListResourceDependencyMappingRequest",
            value: ListResourceDependencyMappingRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListResourceDependencyMappingRequest.decode(message.value);
    },
    toProto(message) {
        return ListResourceDependencyMappingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingRequest",
            value: ListResourceDependencyMappingRequest.encode(message).finish()
        };
    }
};
function createBaseListResourceDependencyMappingResponse() {
    return {
        messageDependencyMappingList: []
    };
}
export const ListResourceDependencyMappingResponse = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.messageDependencyMappingList) {
            MessageDependencyMapping.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListResourceDependencyMappingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageDependencyMappingList.push(MessageDependencyMapping.decode(reader, reader.uint32()));
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
            messageDependencyMappingList: Array.isArray(object?.messageDependencyMappingList) ? object.messageDependencyMappingList.map((e) => MessageDependencyMapping.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.messageDependencyMappingList) {
            obj.messageDependencyMappingList = message.messageDependencyMappingList.map(e => e ? MessageDependencyMapping.toJSON(e) : undefined);
        }
        else {
            obj.messageDependencyMappingList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListResourceDependencyMappingResponse();
        message.messageDependencyMappingList = object.messageDependencyMappingList?.map(e => MessageDependencyMapping.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListResourceDependencyMappingResponse();
        message.messageDependencyMappingList = object.message_dependency_mapping_list?.map(e => MessageDependencyMapping.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messageDependencyMappingList) {
            obj.message_dependency_mapping_list = message.messageDependencyMappingList.map(e => e ? MessageDependencyMapping.toAmino(e) : undefined);
        }
        else {
            obj.message_dependency_mapping_list = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ListResourceDependencyMappingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListResourceDependencyMappingResponse",
            value: ListResourceDependencyMappingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListResourceDependencyMappingResponse.decode(message.value);
    },
    toProto(message) {
        return ListResourceDependencyMappingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingResponse",
            value: ListResourceDependencyMappingResponse.encode(message).finish()
        };
    }
};
function createBaseListWasmDependencyMappingRequest() {
    return {};
}
export const ListWasmDependencyMappingRequest = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListWasmDependencyMappingRequest();
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
        const message = createBaseListWasmDependencyMappingRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseListWasmDependencyMappingRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ListWasmDependencyMappingRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListWasmDependencyMappingRequest",
            value: ListWasmDependencyMappingRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListWasmDependencyMappingRequest.decode(message.value);
    },
    toProto(message) {
        return ListWasmDependencyMappingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingRequest",
            value: ListWasmDependencyMappingRequest.encode(message).finish()
        };
    }
};
function createBaseListWasmDependencyMappingResponse() {
    return {
        wasmDependencyMappingList: []
    };
}
export const ListWasmDependencyMappingResponse = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.wasmDependencyMappingList) {
            WasmDependencyMapping.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListWasmDependencyMappingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wasmDependencyMappingList.push(WasmDependencyMapping.decode(reader, reader.uint32()));
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
            wasmDependencyMappingList: Array.isArray(object?.wasmDependencyMappingList) ? object.wasmDependencyMappingList.map((e) => WasmDependencyMapping.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.wasmDependencyMappingList) {
            obj.wasmDependencyMappingList = message.wasmDependencyMappingList.map(e => e ? WasmDependencyMapping.toJSON(e) : undefined);
        }
        else {
            obj.wasmDependencyMappingList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListWasmDependencyMappingResponse();
        message.wasmDependencyMappingList = object.wasmDependencyMappingList?.map(e => WasmDependencyMapping.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListWasmDependencyMappingResponse();
        message.wasmDependencyMappingList = object.wasm_dependency_mapping_list?.map(e => WasmDependencyMapping.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.wasmDependencyMappingList) {
            obj.wasm_dependency_mapping_list = message.wasmDependencyMappingList.map(e => e ? WasmDependencyMapping.toAmino(e) : undefined);
        }
        else {
            obj.wasm_dependency_mapping_list = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ListWasmDependencyMappingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListWasmDependencyMappingResponse",
            value: ListWasmDependencyMappingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListWasmDependencyMappingResponse.decode(message.value);
    },
    toProto(message) {
        return ListWasmDependencyMappingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingResponse",
            value: ListWasmDependencyMappingResponse.encode(message).finish()
        };
    }
};
