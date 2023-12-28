import { MessageDependencyMapping, WasmDependencyMapping } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBaseMsgUpdateResourceDependencyMappingProposal() {
    return {
        title: "",
        description: "",
        messageDependencyMapping: []
    };
}
export const MsgUpdateResourceDependencyMappingProposal = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.messageDependencyMapping) {
            MessageDependencyMapping.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateResourceDependencyMappingProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.messageDependencyMapping.push(MessageDependencyMapping.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            messageDependencyMapping: Array.isArray(object?.messageDependencyMapping) ? object.messageDependencyMapping.map((e) => MessageDependencyMapping.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.messageDependencyMapping) {
            obj.messageDependencyMapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toJSON(e) : undefined);
        }
        else {
            obj.messageDependencyMapping = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateResourceDependencyMappingProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.messageDependencyMapping = object.messageDependencyMapping?.map(e => MessageDependencyMapping.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateResourceDependencyMappingProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.messageDependencyMapping = object.message_dependency_mapping?.map(e => MessageDependencyMapping.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.messageDependencyMapping) {
            obj.message_dependency_mapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toAmino(e) : undefined);
        }
        else {
            obj.message_dependency_mapping = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateResourceDependencyMappingProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposal",
            value: MsgUpdateResourceDependencyMappingProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateResourceDependencyMappingProposal.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateResourceDependencyMappingProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposal",
            value: MsgUpdateResourceDependencyMappingProposal.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateResourceDependencyMappingProposalJsonFile() {
    return {
        title: "",
        description: "",
        deposit: "",
        messageDependencyMapping: []
    };
}
export const MsgUpdateResourceDependencyMappingProposalJsonFile = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalJsonFile",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.deposit !== "") {
            writer.uint32(26).string(message.deposit);
        }
        for (const v of message.messageDependencyMapping) {
            MessageDependencyMapping.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateResourceDependencyMappingProposalJsonFile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.deposit = reader.string();
                    break;
                case 4:
                    message.messageDependencyMapping.push(MessageDependencyMapping.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            deposit: isSet(object.deposit) ? String(object.deposit) : "",
            messageDependencyMapping: Array.isArray(object?.messageDependencyMapping) ? object.messageDependencyMapping.map((e) => MessageDependencyMapping.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        if (message.messageDependencyMapping) {
            obj.messageDependencyMapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toJSON(e) : undefined);
        }
        else {
            obj.messageDependencyMapping = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateResourceDependencyMappingProposalJsonFile();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.deposit = object.deposit ?? "";
        message.messageDependencyMapping = object.messageDependencyMapping?.map(e => MessageDependencyMapping.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateResourceDependencyMappingProposalJsonFile();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = object.deposit;
        }
        message.messageDependencyMapping = object.message_dependency_mapping?.map(e => MessageDependencyMapping.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.deposit = message.deposit;
        if (message.messageDependencyMapping) {
            obj.message_dependency_mapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toAmino(e) : undefined);
        }
        else {
            obj.message_dependency_mapping = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateResourceDependencyMappingProposalJsonFile.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposalJsonFile",
            value: MsgUpdateResourceDependencyMappingProposalJsonFile.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateResourceDependencyMappingProposalJsonFile.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateResourceDependencyMappingProposalJsonFile.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalJsonFile",
            value: MsgUpdateResourceDependencyMappingProposalJsonFile.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateResourceDependencyMappingProposalResponse() {
    return {};
}
export const MsgUpdateResourceDependencyMappingProposalResponse = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateResourceDependencyMappingProposalResponse();
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
        const message = createBaseMsgUpdateResourceDependencyMappingProposalResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateResourceDependencyMappingProposalResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateResourceDependencyMappingProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposalResponse",
            value: MsgUpdateResourceDependencyMappingProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateResourceDependencyMappingProposalResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateResourceDependencyMappingProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalResponse",
            value: MsgUpdateResourceDependencyMappingProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateWasmDependencyMappingProposal() {
    return {
        title: "",
        description: "",
        contractAddress: "",
        wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
    };
}
export const MsgUpdateWasmDependencyMappingProposal = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contractAddress !== "") {
            writer.uint32(26).string(message.contractAddress);
        }
        if (message.wasmDependencyMapping !== undefined) {
            WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateWasmDependencyMappingProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.contractAddress = reader.string();
                    break;
                case 4:
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            wasmDependencyMapping: isSet(object.wasmDependencyMapping) ? WasmDependencyMapping.fromJSON(object.wasmDependencyMapping) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.wasmDependencyMapping !== undefined && (obj.wasmDependencyMapping = message.wasmDependencyMapping ? WasmDependencyMapping.toJSON(message.wasmDependencyMapping) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateWasmDependencyMappingProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateWasmDependencyMappingProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null) {
            message.wasmDependencyMapping = WasmDependencyMapping.fromAmino(object.wasm_dependency_mapping);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract_address = message.contractAddress;
        obj.wasm_dependency_mapping = message.wasmDependencyMapping ? WasmDependencyMapping.toAmino(message.wasmDependencyMapping) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateWasmDependencyMappingProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateWasmDependencyMappingProposal",
            value: MsgUpdateWasmDependencyMappingProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateWasmDependencyMappingProposal.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateWasmDependencyMappingProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposal",
            value: MsgUpdateWasmDependencyMappingProposal.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateWasmDependencyMappingProposalJsonFile() {
    return {
        title: "",
        description: "",
        deposit: "",
        contractAddress: "",
        wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
    };
}
export const MsgUpdateWasmDependencyMappingProposalJsonFile = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposalJsonFile",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.deposit !== "") {
            writer.uint32(26).string(message.deposit);
        }
        if (message.contractAddress !== "") {
            writer.uint32(34).string(message.contractAddress);
        }
        if (message.wasmDependencyMapping !== undefined) {
            WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateWasmDependencyMappingProposalJsonFile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.deposit = reader.string();
                    break;
                case 4:
                    message.contractAddress = reader.string();
                    break;
                case 5:
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            deposit: isSet(object.deposit) ? String(object.deposit) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            wasmDependencyMapping: isSet(object.wasmDependencyMapping) ? WasmDependencyMapping.fromJSON(object.wasmDependencyMapping) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.wasmDependencyMapping !== undefined && (obj.wasmDependencyMapping = message.wasmDependencyMapping ? WasmDependencyMapping.toJSON(message.wasmDependencyMapping) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateWasmDependencyMappingProposalJsonFile();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.deposit = object.deposit ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateWasmDependencyMappingProposalJsonFile();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = object.deposit;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null) {
            message.wasmDependencyMapping = WasmDependencyMapping.fromAmino(object.wasm_dependency_mapping);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.deposit = message.deposit;
        obj.contract_address = message.contractAddress;
        obj.wasm_dependency_mapping = message.wasmDependencyMapping ? WasmDependencyMapping.toAmino(message.wasmDependencyMapping) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateWasmDependencyMappingProposalJsonFile.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateWasmDependencyMappingProposalJsonFile",
            value: MsgUpdateWasmDependencyMappingProposalJsonFile.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateWasmDependencyMappingProposalJsonFile.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateWasmDependencyMappingProposalJsonFile.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposalJsonFile",
            value: MsgUpdateWasmDependencyMappingProposalJsonFile.encode(message).finish()
        };
    }
};
