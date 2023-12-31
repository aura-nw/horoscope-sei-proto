import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseConfig() {
    return {
        modules: []
    };
}
export const Config = {
    typeUrl: "/cosmos.app.v1alpha1.Config",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.modules) {
            ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
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
            modules: Array.isArray(object?.modules) ? object.modules.map((e) => ModuleConfig.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.modules) {
            obj.modules = message.modules.map(e => e ? ModuleConfig.toJSON(e) : undefined);
        }
        else {
            obj.modules = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfig();
        message.modules = object.modules?.map(e => ModuleConfig.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfig();
        message.modules = object.modules?.map(e => ModuleConfig.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.modules) {
            obj.modules = message.modules.map(e => e ? ModuleConfig.toAmino(e) : undefined);
        }
        else {
            obj.modules = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Config.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Config",
            value: Config.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Config.decode(message.value);
    },
    toProto(message) {
        return Config.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.Config",
            value: Config.encode(message).finish()
        };
    }
};
function createBaseModuleConfig() {
    return {
        name: "",
        config: undefined
    };
}
export const ModuleConfig = {
    typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.config !== undefined) {
            Any.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.config = Any.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            config: isSet(object.config) ? Any.fromJSON(object.config) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.config !== undefined && (obj.config = message.config ? Any.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleConfig();
        message.name = object.name ?? "";
        message.config = object.config !== undefined && object.config !== null ? Any.fromPartial(object.config) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleConfig();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = Any.fromAmino(object.config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.config = message.config ? Any.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleConfig.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleConfig",
            value: ModuleConfig.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleConfig.decode(message.value);
    },
    toProto(message) {
        return ModuleConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
            value: ModuleConfig.encode(message).finish()
        };
    }
};
