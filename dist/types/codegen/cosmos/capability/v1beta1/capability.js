import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseCapability() {
    return {
        index: Long.UZERO
    };
}
export const Capability = {
    typeUrl: "/cosmos.capability.v1beta1.Capability",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCapability();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
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
            index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCapability();
        message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCapability();
        if (object.index !== undefined && object.index !== null) {
            message.index = Long.fromString(object.index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Capability.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Capability",
            value: Capability.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Capability.decode(message.value);
    },
    toProto(message) {
        return Capability.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.Capability",
            value: Capability.encode(message).finish()
        };
    }
};
function createBaseOwner() {
    return {
        module: "",
        name: ""
    };
}
export const Owner = {
    typeUrl: "/cosmos.capability.v1beta1.Owner",
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
            module: isSet(object.module) ? String(object.module) : "",
            name: isSet(object.name) ? String(object.name) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOwner();
        message.module = object.module ?? "";
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseOwner();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return Owner.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Owner",
            value: Owner.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Owner.decode(message.value);
    },
    toProto(message) {
        return Owner.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.Owner",
            value: Owner.encode(message).finish()
        };
    }
};
function createBaseCapabilityOwners() {
    return {
        owners: []
    };
}
export const CapabilityOwners = {
    typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.owners) {
            Owner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCapabilityOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owners.push(Owner.decode(reader, reader.uint32()));
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
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => Owner.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? Owner.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCapabilityOwners();
        message.owners = object.owners?.map(e => Owner.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCapabilityOwners();
        message.owners = object.owners?.map(e => Owner.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? Owner.toAmino(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CapabilityOwners.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CapabilityOwners",
            value: CapabilityOwners.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CapabilityOwners.decode(message.value);
    },
    toProto(message) {
        return CapabilityOwners.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
            value: CapabilityOwners.encode(message).finish()
        };
    }
};
