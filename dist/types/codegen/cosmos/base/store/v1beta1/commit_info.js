import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseCommitInfo() {
    return {
        version: Long.ZERO,
        storeInfos: []
    };
}
export const CommitInfo = {
    typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        for (const v of message.storeInfos) {
            StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
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
            version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
            storeInfos: Array.isArray(object?.storeInfos) ? object.storeInfos.map((e) => StoreInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
        if (message.storeInfos) {
            obj.storeInfos = message.storeInfos.map(e => e ? StoreInfo.toJSON(e) : undefined);
        }
        else {
            obj.storeInfos = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
        message.storeInfos = object.storeInfos?.map(e => StoreInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommitInfo();
        if (object.version !== undefined && object.version !== null) {
            message.version = Long.fromString(object.version);
        }
        message.storeInfos = object.store_infos?.map(e => StoreInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        if (message.storeInfos) {
            obj.store_infos = message.storeInfos.map(e => e ? StoreInfo.toAmino(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CommitInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitInfo",
            value: CommitInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommitInfo.decode(message.value);
    },
    toProto(message) {
        return CommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
            value: CommitInfo.encode(message).finish()
        };
    }
};
function createBaseStoreInfo() {
    return {
        name: "",
        commitId: CommitID.fromPartial({})
    };
}
export const StoreInfo = {
    typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commitId !== undefined) {
            CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commitId = CommitID.decode(reader, reader.uint32());
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
            commitId: isSet(object.commitId) ? CommitID.fromJSON(object.commitId) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.commitId !== undefined && (obj.commitId = message.commitId ? CommitID.toJSON(message.commitId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStoreInfo();
        message.name = object.name ?? "";
        message.commitId = object.commitId !== undefined && object.commitId !== null ? CommitID.fromPartial(object.commitId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStoreInfo();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.commit_id !== undefined && object.commit_id !== null) {
            message.commitId = CommitID.fromAmino(object.commit_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.commit_id = message.commitId ? CommitID.toAmino(message.commitId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return StoreInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreInfo",
            value: StoreInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StoreInfo.decode(message.value);
    },
    toProto(message) {
        return StoreInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
            value: StoreInfo.encode(message).finish()
        };
    }
};
function createBaseCommitID() {
    return {
        version: Long.ZERO,
        hash: new Uint8Array()
    };
}
export const CommitID = {
    typeUrl: "/cosmos.base.store.v1beta1.CommitID",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitID();
        message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommitID();
        if (object.version !== undefined && object.version !== null) {
            message.version = Long.fromString(object.version);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CommitID.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitID",
            value: CommitID.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommitID.decode(message.value);
    },
    toProto(message) {
        return CommitID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.CommitID",
            value: CommitID.encode(message).finish()
        };
    }
};
