import { MessageDependencyMapping, WasmDependencyMapping } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        messageDependencyMapping: [],
        wasmDependencyMappings: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.messageDependencyMapping) {
            MessageDependencyMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.wasmDependencyMappings) {
            WasmDependencyMapping.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.messageDependencyMapping.push(MessageDependencyMapping.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.wasmDependencyMappings.push(WasmDependencyMapping.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            messageDependencyMapping: Array.isArray(object?.messageDependencyMapping) ? object.messageDependencyMapping.map((e) => MessageDependencyMapping.fromJSON(e)) : [],
            wasmDependencyMappings: Array.isArray(object?.wasmDependencyMappings) ? object.wasmDependencyMappings.map((e) => WasmDependencyMapping.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.messageDependencyMapping) {
            obj.messageDependencyMapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toJSON(e) : undefined);
        }
        else {
            obj.messageDependencyMapping = [];
        }
        if (message.wasmDependencyMappings) {
            obj.wasmDependencyMappings = message.wasmDependencyMappings.map(e => e ? WasmDependencyMapping.toJSON(e) : undefined);
        }
        else {
            obj.wasmDependencyMappings = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.messageDependencyMapping = object.messageDependencyMapping?.map(e => MessageDependencyMapping.fromPartial(e)) || [];
        message.wasmDependencyMappings = object.wasmDependencyMappings?.map(e => WasmDependencyMapping.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.messageDependencyMapping = object.message_dependency_mapping?.map(e => MessageDependencyMapping.fromAmino(e)) || [];
        message.wasmDependencyMappings = object.wasm_dependency_mappings?.map(e => WasmDependencyMapping.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.messageDependencyMapping) {
            obj.message_dependency_mapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toAmino(e) : undefined);
        }
        else {
            obj.message_dependency_mapping = [];
        }
        if (message.wasmDependencyMappings) {
            obj.wasm_dependency_mappings = message.wasmDependencyMappings.map(e => e ? WasmDependencyMapping.toAmino(e) : undefined);
        }
        else {
            obj.wasm_dependency_mappings = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {};
}
export const Params = {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.Params",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
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
        const message = createBaseParams();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParams();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol_x.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
