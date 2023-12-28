import { accessTypeFromJSON, resourceTypeFromJSON, accessTypeToJSON, resourceTypeToJSON, accessOperationSelectorTypeFromJSON, accessOperationSelectorTypeToJSON, wasmMessageSubtypeFromJSON, wasmMessageSubtypeToJSON } from "./constants";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBaseAccessOperation() {
    return {
        accessType: 0,
        resourceType: 0,
        identifierTemplate: ""
    };
}
export const AccessOperation = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.AccessOperation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessType !== 0) {
            writer.uint32(8).int32(message.accessType);
        }
        if (message.resourceType !== 0) {
            writer.uint32(16).int32(message.resourceType);
        }
        if (message.identifierTemplate !== "") {
            writer.uint32(26).string(message.identifierTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessOperation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessType = reader.int32();
                    break;
                case 2:
                    message.resourceType = reader.int32();
                    break;
                case 3:
                    message.identifierTemplate = reader.string();
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
            accessType: isSet(object.accessType) ? accessTypeFromJSON(object.accessType) : -1,
            resourceType: isSet(object.resourceType) ? resourceTypeFromJSON(object.resourceType) : -1,
            identifierTemplate: isSet(object.identifierTemplate) ? String(object.identifierTemplate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessType !== undefined && (obj.accessType = accessTypeToJSON(message.accessType));
        message.resourceType !== undefined && (obj.resourceType = resourceTypeToJSON(message.resourceType));
        message.identifierTemplate !== undefined && (obj.identifierTemplate = message.identifierTemplate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccessOperation();
        message.accessType = object.accessType ?? 0;
        message.resourceType = object.resourceType ?? 0;
        message.identifierTemplate = object.identifierTemplate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessOperation();
        if (object.access_type !== undefined && object.access_type !== null) {
            message.accessType = accessTypeFromJSON(object.access_type);
        }
        if (object.resource_type !== undefined && object.resource_type !== null) {
            message.resourceType = resourceTypeFromJSON(object.resource_type);
        }
        if (object.identifier_template !== undefined && object.identifier_template !== null) {
            message.identifierTemplate = object.identifier_template;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.access_type = accessTypeToJSON(message.accessType);
        obj.resource_type = resourceTypeToJSON(message.resourceType);
        obj.identifier_template = message.identifierTemplate;
        return obj;
    },
    fromAminoMsg(object) {
        return AccessOperation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AccessOperation",
            value: AccessOperation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccessOperation.decode(message.value);
    },
    toProto(message) {
        return AccessOperation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.AccessOperation",
            value: AccessOperation.encode(message).finish()
        };
    }
};
function createBaseWasmAccessOperation() {
    return {
        operation: undefined,
        selectorType: 0,
        selector: ""
    };
}
export const WasmAccessOperation = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmAccessOperation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.operation !== undefined) {
            AccessOperation.encode(message.operation, writer.uint32(10).fork()).ldelim();
        }
        if (message.selectorType !== 0) {
            writer.uint32(16).int32(message.selectorType);
        }
        if (message.selector !== "") {
            writer.uint32(26).string(message.selector);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmAccessOperation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operation = AccessOperation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.selectorType = reader.int32();
                    break;
                case 3:
                    message.selector = reader.string();
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
            operation: isSet(object.operation) ? AccessOperation.fromJSON(object.operation) : undefined,
            selectorType: isSet(object.selectorType) ? accessOperationSelectorTypeFromJSON(object.selectorType) : -1,
            selector: isSet(object.selector) ? String(object.selector) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.operation !== undefined && (obj.operation = message.operation ? AccessOperation.toJSON(message.operation) : undefined);
        message.selectorType !== undefined && (obj.selectorType = accessOperationSelectorTypeToJSON(message.selectorType));
        message.selector !== undefined && (obj.selector = message.selector);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWasmAccessOperation();
        message.operation = object.operation !== undefined && object.operation !== null ? AccessOperation.fromPartial(object.operation) : undefined;
        message.selectorType = object.selectorType ?? 0;
        message.selector = object.selector ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWasmAccessOperation();
        if (object.operation !== undefined && object.operation !== null) {
            message.operation = AccessOperation.fromAmino(object.operation);
        }
        if (object.selector_type !== undefined && object.selector_type !== null) {
            message.selectorType = accessOperationSelectorTypeFromJSON(object.selector_type);
        }
        if (object.selector !== undefined && object.selector !== null) {
            message.selector = object.selector;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operation = message.operation ? AccessOperation.toAmino(message.operation) : undefined;
        obj.selector_type = accessOperationSelectorTypeToJSON(message.selectorType);
        obj.selector = message.selector;
        return obj;
    },
    fromAminoMsg(object) {
        return WasmAccessOperation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WasmAccessOperation",
            value: WasmAccessOperation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WasmAccessOperation.decode(message.value);
    },
    toProto(message) {
        return WasmAccessOperation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.WasmAccessOperation",
            value: WasmAccessOperation.encode(message).finish()
        };
    }
};
function createBaseWasmContractReference() {
    return {
        contractAddress: "",
        messageType: 0,
        messageName: "",
        jsonTranslationTemplate: ""
    };
}
export const WasmContractReference = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmContractReference",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.messageType !== 0) {
            writer.uint32(16).int32(message.messageType);
        }
        if (message.messageName !== "") {
            writer.uint32(26).string(message.messageName);
        }
        if (message.jsonTranslationTemplate !== "") {
            writer.uint32(34).string(message.jsonTranslationTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmContractReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.messageType = reader.int32();
                    break;
                case 3:
                    message.messageName = reader.string();
                    break;
                case 4:
                    message.jsonTranslationTemplate = reader.string();
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            messageType: isSet(object.messageType) ? wasmMessageSubtypeFromJSON(object.messageType) : -1,
            messageName: isSet(object.messageName) ? String(object.messageName) : "",
            jsonTranslationTemplate: isSet(object.jsonTranslationTemplate) ? String(object.jsonTranslationTemplate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.messageType !== undefined && (obj.messageType = wasmMessageSubtypeToJSON(message.messageType));
        message.messageName !== undefined && (obj.messageName = message.messageName);
        message.jsonTranslationTemplate !== undefined && (obj.jsonTranslationTemplate = message.jsonTranslationTemplate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWasmContractReference();
        message.contractAddress = object.contractAddress ?? "";
        message.messageType = object.messageType ?? 0;
        message.messageName = object.messageName ?? "";
        message.jsonTranslationTemplate = object.jsonTranslationTemplate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWasmContractReference();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.message_type !== undefined && object.message_type !== null) {
            message.messageType = wasmMessageSubtypeFromJSON(object.message_type);
        }
        if (object.message_name !== undefined && object.message_name !== null) {
            message.messageName = object.message_name;
        }
        if (object.json_translation_template !== undefined && object.json_translation_template !== null) {
            message.jsonTranslationTemplate = object.json_translation_template;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.message_type = wasmMessageSubtypeToJSON(message.messageType);
        obj.message_name = message.messageName;
        obj.json_translation_template = message.jsonTranslationTemplate;
        return obj;
    },
    fromAminoMsg(object) {
        return WasmContractReference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WasmContractReference",
            value: WasmContractReference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WasmContractReference.decode(message.value);
    },
    toProto(message) {
        return WasmContractReference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.WasmContractReference",
            value: WasmContractReference.encode(message).finish()
        };
    }
};
function createBaseWasmContractReferences() {
    return {
        messageName: "",
        contractReferences: []
    };
}
export const WasmContractReferences = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmContractReferences",
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageName !== "") {
            writer.uint32(10).string(message.messageName);
        }
        for (const v of message.contractReferences) {
            WasmContractReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmContractReferences();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageName = reader.string();
                    break;
                case 2:
                    message.contractReferences.push(WasmContractReference.decode(reader, reader.uint32()));
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
            messageName: isSet(object.messageName) ? String(object.messageName) : "",
            contractReferences: Array.isArray(object?.contractReferences) ? object.contractReferences.map((e) => WasmContractReference.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageName !== undefined && (obj.messageName = message.messageName);
        if (message.contractReferences) {
            obj.contractReferences = message.contractReferences.map(e => e ? WasmContractReference.toJSON(e) : undefined);
        }
        else {
            obj.contractReferences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWasmContractReferences();
        message.messageName = object.messageName ?? "";
        message.contractReferences = object.contractReferences?.map(e => WasmContractReference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseWasmContractReferences();
        if (object.message_name !== undefined && object.message_name !== null) {
            message.messageName = object.message_name;
        }
        message.contractReferences = object.contract_references?.map(e => WasmContractReference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_name = message.messageName;
        if (message.contractReferences) {
            obj.contract_references = message.contractReferences.map(e => e ? WasmContractReference.toAmino(e) : undefined);
        }
        else {
            obj.contract_references = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return WasmContractReferences.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WasmContractReferences",
            value: WasmContractReferences.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WasmContractReferences.decode(message.value);
    },
    toProto(message) {
        return WasmContractReferences.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.WasmContractReferences",
            value: WasmContractReferences.encode(message).finish()
        };
    }
};
function createBaseWasmAccessOperations() {
    return {
        messageName: "",
        wasmOperations: []
    };
}
export const WasmAccessOperations = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmAccessOperations",
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageName !== "") {
            writer.uint32(10).string(message.messageName);
        }
        for (const v of message.wasmOperations) {
            WasmAccessOperation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmAccessOperations();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageName = reader.string();
                    break;
                case 2:
                    message.wasmOperations.push(WasmAccessOperation.decode(reader, reader.uint32()));
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
            messageName: isSet(object.messageName) ? String(object.messageName) : "",
            wasmOperations: Array.isArray(object?.wasmOperations) ? object.wasmOperations.map((e) => WasmAccessOperation.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageName !== undefined && (obj.messageName = message.messageName);
        if (message.wasmOperations) {
            obj.wasmOperations = message.wasmOperations.map(e => e ? WasmAccessOperation.toJSON(e) : undefined);
        }
        else {
            obj.wasmOperations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWasmAccessOperations();
        message.messageName = object.messageName ?? "";
        message.wasmOperations = object.wasmOperations?.map(e => WasmAccessOperation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseWasmAccessOperations();
        if (object.message_name !== undefined && object.message_name !== null) {
            message.messageName = object.message_name;
        }
        message.wasmOperations = object.wasm_operations?.map(e => WasmAccessOperation.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_name = message.messageName;
        if (message.wasmOperations) {
            obj.wasm_operations = message.wasmOperations.map(e => e ? WasmAccessOperation.toAmino(e) : undefined);
        }
        else {
            obj.wasm_operations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return WasmAccessOperations.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WasmAccessOperations",
            value: WasmAccessOperations.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WasmAccessOperations.decode(message.value);
    },
    toProto(message) {
        return WasmAccessOperations.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.WasmAccessOperations",
            value: WasmAccessOperations.encode(message).finish()
        };
    }
};
function createBaseMessageDependencyMapping() {
    return {
        messageKey: "",
        accessOps: [],
        dynamicEnabled: false
    };
}
export const MessageDependencyMapping = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MessageDependencyMapping",
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageKey !== "") {
            writer.uint32(10).string(message.messageKey);
        }
        for (const v of message.accessOps) {
            AccessOperation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.dynamicEnabled === true) {
            writer.uint32(24).bool(message.dynamicEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageDependencyMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageKey = reader.string();
                    break;
                case 2:
                    message.accessOps.push(AccessOperation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.dynamicEnabled = reader.bool();
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
            messageKey: isSet(object.messageKey) ? String(object.messageKey) : "",
            accessOps: Array.isArray(object?.accessOps) ? object.accessOps.map((e) => AccessOperation.fromJSON(e)) : [],
            dynamicEnabled: isSet(object.dynamicEnabled) ? Boolean(object.dynamicEnabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageKey !== undefined && (obj.messageKey = message.messageKey);
        if (message.accessOps) {
            obj.accessOps = message.accessOps.map(e => e ? AccessOperation.toJSON(e) : undefined);
        }
        else {
            obj.accessOps = [];
        }
        message.dynamicEnabled !== undefined && (obj.dynamicEnabled = message.dynamicEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMessageDependencyMapping();
        message.messageKey = object.messageKey ?? "";
        message.accessOps = object.accessOps?.map(e => AccessOperation.fromPartial(e)) || [];
        message.dynamicEnabled = object.dynamicEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageDependencyMapping();
        if (object.message_key !== undefined && object.message_key !== null) {
            message.messageKey = object.message_key;
        }
        message.accessOps = object.access_ops?.map(e => AccessOperation.fromAmino(e)) || [];
        if (object.dynamic_enabled !== undefined && object.dynamic_enabled !== null) {
            message.dynamicEnabled = object.dynamic_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_key = message.messageKey;
        if (message.accessOps) {
            obj.access_ops = message.accessOps.map(e => e ? AccessOperation.toAmino(e) : undefined);
        }
        else {
            obj.access_ops = [];
        }
        obj.dynamic_enabled = message.dynamicEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageDependencyMapping.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MessageDependencyMapping",
            value: MessageDependencyMapping.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MessageDependencyMapping.decode(message.value);
    },
    toProto(message) {
        return MessageDependencyMapping.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.MessageDependencyMapping",
            value: MessageDependencyMapping.encode(message).finish()
        };
    }
};
function createBaseWasmDependencyMapping() {
    return {
        baseAccessOps: [],
        queryAccessOps: [],
        executeAccessOps: [],
        baseContractReferences: [],
        queryContractReferences: [],
        executeContractReferences: [],
        resetReason: "",
        contractAddress: ""
    };
}
export const WasmDependencyMapping = {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmDependencyMapping",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.baseAccessOps) {
            WasmAccessOperation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.queryAccessOps) {
            WasmAccessOperations.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.executeAccessOps) {
            WasmAccessOperations.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.baseContractReferences) {
            WasmContractReference.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.queryContractReferences) {
            WasmContractReferences.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.executeContractReferences) {
            WasmContractReferences.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.resetReason !== "") {
            writer.uint32(58).string(message.resetReason);
        }
        if (message.contractAddress !== "") {
            writer.uint32(66).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWasmDependencyMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccessOps.push(WasmAccessOperation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.queryAccessOps.push(WasmAccessOperations.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.executeAccessOps.push(WasmAccessOperations.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.baseContractReferences.push(WasmContractReference.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.queryContractReferences.push(WasmContractReferences.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.executeContractReferences.push(WasmContractReferences.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.resetReason = reader.string();
                    break;
                case 8:
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
            baseAccessOps: Array.isArray(object?.baseAccessOps) ? object.baseAccessOps.map((e) => WasmAccessOperation.fromJSON(e)) : [],
            queryAccessOps: Array.isArray(object?.queryAccessOps) ? object.queryAccessOps.map((e) => WasmAccessOperations.fromJSON(e)) : [],
            executeAccessOps: Array.isArray(object?.executeAccessOps) ? object.executeAccessOps.map((e) => WasmAccessOperations.fromJSON(e)) : [],
            baseContractReferences: Array.isArray(object?.baseContractReferences) ? object.baseContractReferences.map((e) => WasmContractReference.fromJSON(e)) : [],
            queryContractReferences: Array.isArray(object?.queryContractReferences) ? object.queryContractReferences.map((e) => WasmContractReferences.fromJSON(e)) : [],
            executeContractReferences: Array.isArray(object?.executeContractReferences) ? object.executeContractReferences.map((e) => WasmContractReferences.fromJSON(e)) : [],
            resetReason: isSet(object.resetReason) ? String(object.resetReason) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.baseAccessOps) {
            obj.baseAccessOps = message.baseAccessOps.map(e => e ? WasmAccessOperation.toJSON(e) : undefined);
        }
        else {
            obj.baseAccessOps = [];
        }
        if (message.queryAccessOps) {
            obj.queryAccessOps = message.queryAccessOps.map(e => e ? WasmAccessOperations.toJSON(e) : undefined);
        }
        else {
            obj.queryAccessOps = [];
        }
        if (message.executeAccessOps) {
            obj.executeAccessOps = message.executeAccessOps.map(e => e ? WasmAccessOperations.toJSON(e) : undefined);
        }
        else {
            obj.executeAccessOps = [];
        }
        if (message.baseContractReferences) {
            obj.baseContractReferences = message.baseContractReferences.map(e => e ? WasmContractReference.toJSON(e) : undefined);
        }
        else {
            obj.baseContractReferences = [];
        }
        if (message.queryContractReferences) {
            obj.queryContractReferences = message.queryContractReferences.map(e => e ? WasmContractReferences.toJSON(e) : undefined);
        }
        else {
            obj.queryContractReferences = [];
        }
        if (message.executeContractReferences) {
            obj.executeContractReferences = message.executeContractReferences.map(e => e ? WasmContractReferences.toJSON(e) : undefined);
        }
        else {
            obj.executeContractReferences = [];
        }
        message.resetReason !== undefined && (obj.resetReason = message.resetReason);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWasmDependencyMapping();
        message.baseAccessOps = object.baseAccessOps?.map(e => WasmAccessOperation.fromPartial(e)) || [];
        message.queryAccessOps = object.queryAccessOps?.map(e => WasmAccessOperations.fromPartial(e)) || [];
        message.executeAccessOps = object.executeAccessOps?.map(e => WasmAccessOperations.fromPartial(e)) || [];
        message.baseContractReferences = object.baseContractReferences?.map(e => WasmContractReference.fromPartial(e)) || [];
        message.queryContractReferences = object.queryContractReferences?.map(e => WasmContractReferences.fromPartial(e)) || [];
        message.executeContractReferences = object.executeContractReferences?.map(e => WasmContractReferences.fromPartial(e)) || [];
        message.resetReason = object.resetReason ?? "";
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWasmDependencyMapping();
        message.baseAccessOps = object.base_access_ops?.map(e => WasmAccessOperation.fromAmino(e)) || [];
        message.queryAccessOps = object.query_access_ops?.map(e => WasmAccessOperations.fromAmino(e)) || [];
        message.executeAccessOps = object.execute_access_ops?.map(e => WasmAccessOperations.fromAmino(e)) || [];
        message.baseContractReferences = object.base_contract_references?.map(e => WasmContractReference.fromAmino(e)) || [];
        message.queryContractReferences = object.query_contract_references?.map(e => WasmContractReferences.fromAmino(e)) || [];
        message.executeContractReferences = object.execute_contract_references?.map(e => WasmContractReferences.fromAmino(e)) || [];
        if (object.reset_reason !== undefined && object.reset_reason !== null) {
            message.resetReason = object.reset_reason;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.baseAccessOps) {
            obj.base_access_ops = message.baseAccessOps.map(e => e ? WasmAccessOperation.toAmino(e) : undefined);
        }
        else {
            obj.base_access_ops = [];
        }
        if (message.queryAccessOps) {
            obj.query_access_ops = message.queryAccessOps.map(e => e ? WasmAccessOperations.toAmino(e) : undefined);
        }
        else {
            obj.query_access_ops = [];
        }
        if (message.executeAccessOps) {
            obj.execute_access_ops = message.executeAccessOps.map(e => e ? WasmAccessOperations.toAmino(e) : undefined);
        }
        else {
            obj.execute_access_ops = [];
        }
        if (message.baseContractReferences) {
            obj.base_contract_references = message.baseContractReferences.map(e => e ? WasmContractReference.toAmino(e) : undefined);
        }
        else {
            obj.base_contract_references = [];
        }
        if (message.queryContractReferences) {
            obj.query_contract_references = message.queryContractReferences.map(e => e ? WasmContractReferences.toAmino(e) : undefined);
        }
        else {
            obj.query_contract_references = [];
        }
        if (message.executeContractReferences) {
            obj.execute_contract_references = message.executeContractReferences.map(e => e ? WasmContractReferences.toAmino(e) : undefined);
        }
        else {
            obj.execute_contract_references = [];
        }
        obj.reset_reason = message.resetReason;
        obj.contract_address = message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return WasmDependencyMapping.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WasmDependencyMapping",
            value: WasmDependencyMapping.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WasmDependencyMapping.decode(message.value);
    },
    toProto(message) {
        return WasmDependencyMapping.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.accesscontrol.v1beta1.WasmDependencyMapping",
            value: WasmDependencyMapping.encode(message).finish()
        };
    }
};
