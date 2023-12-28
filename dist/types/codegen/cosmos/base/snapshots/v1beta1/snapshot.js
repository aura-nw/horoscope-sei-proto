import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseSnapshot() {
    return {
        height: Long.UZERO,
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: Metadata.fromPartial({})
    };
}
export const Snapshot = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = Metadata.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshot();
        if (object.height !== undefined && object.height !== null) {
            message.height = Long.fromString(object.height);
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        if (object.chunks !== undefined && object.chunks !== null) {
            message.chunks = object.chunks;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = Metadata.fromAmino(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Snapshot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Snapshot",
            value: Snapshot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Snapshot.decode(message.value);
    },
    toProto(message) {
        return Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
            value: Snapshot.encode(message).finish()
        };
    }
};
function createBaseMetadata() {
    return {
        chunkHashes: []
    };
}
export const Metadata = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chunkHashes) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunkHashes.push(reader.bytes());
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
            chunkHashes: Array.isArray(object?.chunkHashes) ? object.chunkHashes.map((e) => bytesFromBase64(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chunkHashes) {
            obj.chunkHashes = message.chunkHashes.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.chunkHashes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.chunkHashes = object.chunkHashes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMetadata();
        message.chunkHashes = object.chunk_hashes?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.chunkHashes) {
            obj.chunk_hashes = message.chunkHashes.map(e => base64FromBytes(e));
        }
        else {
            obj.chunk_hashes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Metadata.decode(message.value);
    },
    toProto(message) {
        return Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
            value: Metadata.encode(message).finish()
        };
    }
};
function createBaseSnapshotItem() {
    return {
        store: undefined,
        iavl: undefined,
        extension: undefined,
        extensionPayload: undefined
    };
}
export const SnapshotItem = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
    encode(message, writer = _m0.Writer.create()) {
        if (message.store !== undefined) {
            SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extensionPayload !== undefined) {
            SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store = SnapshotStoreItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extensionPayload = SnapshotExtensionPayload.decode(reader, reader.uint32());
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
            store: isSet(object.store) ? SnapshotStoreItem.fromJSON(object.store) : undefined,
            iavl: isSet(object.iavl) ? SnapshotIAVLItem.fromJSON(object.iavl) : undefined,
            extension: isSet(object.extension) ? SnapshotExtensionMeta.fromJSON(object.extension) : undefined,
            extensionPayload: isSet(object.extensionPayload) ? SnapshotExtensionPayload.fromJSON(object.extensionPayload) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.store !== undefined && (obj.store = message.store ? SnapshotStoreItem.toJSON(message.store) : undefined);
        message.iavl !== undefined && (obj.iavl = message.iavl ? SnapshotIAVLItem.toJSON(message.iavl) : undefined);
        message.extension !== undefined && (obj.extension = message.extension ? SnapshotExtensionMeta.toJSON(message.extension) : undefined);
        message.extensionPayload !== undefined && (obj.extensionPayload = message.extensionPayload ? SnapshotExtensionPayload.toJSON(message.extensionPayload) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotItem();
        message.store = object.store !== undefined && object.store !== null ? SnapshotStoreItem.fromPartial(object.store) : undefined;
        message.iavl = object.iavl !== undefined && object.iavl !== null ? SnapshotIAVLItem.fromPartial(object.iavl) : undefined;
        message.extension = object.extension !== undefined && object.extension !== null ? SnapshotExtensionMeta.fromPartial(object.extension) : undefined;
        message.extensionPayload = object.extensionPayload !== undefined && object.extensionPayload !== null ? SnapshotExtensionPayload.fromPartial(object.extensionPayload) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshotItem();
        if (object.store !== undefined && object.store !== null) {
            message.store = SnapshotStoreItem.fromAmino(object.store);
        }
        if (object.iavl !== undefined && object.iavl !== null) {
            message.iavl = SnapshotIAVLItem.fromAmino(object.iavl);
        }
        if (object.extension !== undefined && object.extension !== null) {
            message.extension = SnapshotExtensionMeta.fromAmino(object.extension);
        }
        if (object.extension_payload !== undefined && object.extension_payload !== null) {
            message.extensionPayload = SnapshotExtensionPayload.fromAmino(object.extension_payload);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.store = message.store ? SnapshotStoreItem.toAmino(message.store) : undefined;
        obj.iavl = message.iavl ? SnapshotIAVLItem.toAmino(message.iavl) : undefined;
        obj.extension = message.extension ? SnapshotExtensionMeta.toAmino(message.extension) : undefined;
        obj.extension_payload = message.extensionPayload ? SnapshotExtensionPayload.toAmino(message.extensionPayload) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotItem",
            value: SnapshotItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
            value: SnapshotItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotStoreItem() {
    return {
        name: ""
    };
}
export const SnapshotStoreItem = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotStoreItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            name: isSet(object.name) ? String(object.name) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotStoreItem();
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshotStoreItem();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotStoreItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotStoreItem",
            value: SnapshotStoreItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotStoreItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotStoreItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
            value: SnapshotStoreItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotIAVLItem() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        version: Long.ZERO,
        height: 0
    };
}
export const SnapshotIAVLItem = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (!message.version.isZero()) {
            writer.uint32(24).int64(message.version);
        }
        if (message.height !== 0) {
            writer.uint32(32).int32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotIAVLItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.version = reader.int64();
                    break;
                case 4:
                    message.height = reader.int32();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
            height: isSet(object.height) ? Number(object.height) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotIAVLItem();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
        message.height = object.height ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshotIAVLItem();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = Long.fromString(object.version);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        obj.version = message.version ? message.version.toString() : undefined;
        obj.height = message.height;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotIAVLItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotIAVLItem",
            value: SnapshotIAVLItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotIAVLItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotIAVLItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
            value: SnapshotIAVLItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionMeta() {
    return {
        name: "",
        format: 0
    };
}
export const SnapshotExtensionMeta = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.format = reader.uint32();
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
            format: isSet(object.format) ? Number(object.format) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.format !== undefined && (obj.format = Math.round(message.format));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionMeta();
        message.name = object.name ?? "";
        message.format = object.format ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshotExtensionMeta();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.format = message.format;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotExtensionMeta.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionMeta",
            value: SnapshotExtensionMeta.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotExtensionMeta.decode(message.value);
    },
    toProto(message) {
        return SnapshotExtensionMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
            value: SnapshotExtensionMeta.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionPayload() {
    return {
        payload: new Uint8Array()
    };
}
export const SnapshotExtensionPayload = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = reader.bytes();
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
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined && (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionPayload();
        message.payload = object.payload ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshotExtensionPayload();
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = bytesFromBase64(object.payload);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotExtensionPayload.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionPayload",
            value: SnapshotExtensionPayload.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotExtensionPayload.decode(message.value);
    },
    toProto(message) {
        return SnapshotExtensionPayload.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
            value: SnapshotExtensionPayload.encode(message).finish()
        };
    }
};
