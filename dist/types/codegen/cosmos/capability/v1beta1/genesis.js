import { CapabilityOwners } from "./capability";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisOwners() {
    return {
        index: Long.UZERO,
        indexOwners: CapabilityOwners.fromPartial({})
    };
}
export const GenesisOwners = {
    typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        if (message.indexOwners !== undefined) {
            CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
            indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
        message.indexOwners !== undefined && (obj.indexOwners = message.indexOwners ? CapabilityOwners.toJSON(message.indexOwners) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisOwners();
        message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
        message.indexOwners = object.indexOwners !== undefined && object.indexOwners !== null ? CapabilityOwners.fromPartial(object.indexOwners) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisOwners();
        if (object.index !== undefined && object.index !== null) {
            message.index = Long.fromString(object.index);
        }
        if (object.index_owners !== undefined && object.index_owners !== null) {
            message.indexOwners = CapabilityOwners.fromAmino(object.index_owners);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.index_owners = message.indexOwners ? CapabilityOwners.toAmino(message.indexOwners) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisOwners.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisOwners",
            value: GenesisOwners.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisOwners.decode(message.value);
    },
    toProto(message) {
        return GenesisOwners.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
            value: GenesisOwners.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        index: Long.UZERO,
        owners: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.capability.v1beta1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        for (const v of message.owners) {
            GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
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
            index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => GenesisOwners.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? GenesisOwners.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
        message.owners = object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.index !== undefined && object.index !== null) {
            message.index = Long.fromString(object.index);
        }
        message.owners = object.owners?.map(e => GenesisOwners.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? GenesisOwners.toAmino(e) : undefined);
        }
        else {
            obj.owners = [];
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
            typeUrl: "/cosmos.capability.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
