import { WasmDependencyMapping } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBaseRegisterWasmDependencyJSONFile() {
    return {
        wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
    };
}
export const RegisterWasmDependencyJSONFile = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.RegisterWasmDependencyJSONFile",
    encode(message, writer = _m0.Writer.create()) {
        if (message.wasmDependencyMapping !== undefined) {
            WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterWasmDependencyJSONFile();
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
        const message = createBaseRegisterWasmDependencyJSONFile();
        message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterWasmDependencyJSONFile();
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
        return RegisterWasmDependencyJSONFile.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RegisterWasmDependencyJSONFile",
            value: RegisterWasmDependencyJSONFile.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RegisterWasmDependencyJSONFile.decode(message.value);
    },
    toProto(message) {
        return RegisterWasmDependencyJSONFile.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.RegisterWasmDependencyJSONFile",
            value: RegisterWasmDependencyJSONFile.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterWasmDependency() {
    return {
        fromAddress: "",
        wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
    };
}
export const MsgRegisterWasmDependency = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.wasmDependencyMapping !== undefined) {
            WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterWasmDependency();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
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
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
            wasmDependencyMapping: isSet(object.wasmDependencyMapping) ? WasmDependencyMapping.fromJSON(object.wasmDependencyMapping) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.wasmDependencyMapping !== undefined && (obj.wasmDependencyMapping = message.wasmDependencyMapping ? WasmDependencyMapping.toJSON(message.wasmDependencyMapping) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterWasmDependency();
        message.fromAddress = object.fromAddress ?? "";
        message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterWasmDependency();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null) {
            message.wasmDependencyMapping = WasmDependencyMapping.fromAmino(object.wasm_dependency_mapping);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.wasm_dependency_mapping = message.wasmDependencyMapping ? WasmDependencyMapping.toAmino(message.wasmDependencyMapping) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterWasmDependency.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRegisterWasmDependency",
            value: MsgRegisterWasmDependency.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRegisterWasmDependency.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterWasmDependency.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
            value: MsgRegisterWasmDependency.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterWasmDependencyResponse() {
    return {};
}
export const MsgRegisterWasmDependencyResponse = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependencyResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterWasmDependencyResponse();
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
        const message = createBaseMsgRegisterWasmDependencyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRegisterWasmDependencyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterWasmDependencyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRegisterWasmDependencyResponse",
            value: MsgRegisterWasmDependencyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRegisterWasmDependencyResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterWasmDependencyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependencyResponse",
            value: MsgRegisterWasmDependencyResponse.encode(message).finish()
        };
    }
};
