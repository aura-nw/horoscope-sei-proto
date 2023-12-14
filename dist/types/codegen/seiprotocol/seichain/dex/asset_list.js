import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseAssetIBCInfo() {
    return {
        sourceChannel: "",
        dstChannel: "",
        sourceDenom: "",
        sourceChainID: ""
    };
}
export const AssetIBCInfo = {
    typeUrl: "/seiprotocol.seichain.dex.AssetIBCInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourceChannel !== "") {
            writer.uint32(10).string(message.sourceChannel);
        }
        if (message.dstChannel !== "") {
            writer.uint32(18).string(message.dstChannel);
        }
        if (message.sourceDenom !== "") {
            writer.uint32(26).string(message.sourceDenom);
        }
        if (message.sourceChainID !== "") {
            writer.uint32(34).string(message.sourceChainID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetIBCInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceChannel = reader.string();
                    break;
                case 2:
                    message.dstChannel = reader.string();
                    break;
                case 3:
                    message.sourceDenom = reader.string();
                    break;
                case 4:
                    message.sourceChainID = reader.string();
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
            sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
            dstChannel: isSet(object.dstChannel) ? String(object.dstChannel) : "",
            sourceDenom: isSet(object.sourceDenom) ? String(object.sourceDenom) : "",
            sourceChainID: isSet(object.sourceChainID) ? String(object.sourceChainID) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
        message.dstChannel !== undefined && (obj.dstChannel = message.dstChannel);
        message.sourceDenom !== undefined && (obj.sourceDenom = message.sourceDenom);
        message.sourceChainID !== undefined && (obj.sourceChainID = message.sourceChainID);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetIBCInfo();
        message.sourceChannel = object.sourceChannel ?? "";
        message.dstChannel = object.dstChannel ?? "";
        message.sourceDenom = object.sourceDenom ?? "";
        message.sourceChainID = object.sourceChainID ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAssetIBCInfo();
        if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
            message.sourceChannel = object.sourceChannel;
        }
        if (object.dstChannel !== undefined && object.dstChannel !== null) {
            message.dstChannel = object.dstChannel;
        }
        if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
            message.sourceDenom = object.sourceDenom;
        }
        if (object.sourceChainID !== undefined && object.sourceChainID !== null) {
            message.sourceChainID = object.sourceChainID;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sourceChannel = message.sourceChannel;
        obj.dstChannel = message.dstChannel;
        obj.sourceDenom = message.sourceDenom;
        obj.sourceChainID = message.sourceChainID;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetIBCInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AssetIBCInfo.decode(message.value);
    },
    toProto(message) {
        return AssetIBCInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.AssetIBCInfo",
            value: AssetIBCInfo.encode(message).finish()
        };
    }
};
function createBaseAssetMetadata() {
    return {
        ibcInfo: undefined,
        typeAsset: "",
        metadata: Metadata.fromPartial({})
    };
}
export const AssetMetadata = {
    typeUrl: "/seiprotocol.seichain.dex.AssetMetadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.ibcInfo !== undefined) {
            AssetIBCInfo.encode(message.ibcInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.typeAsset !== "") {
            writer.uint32(18).string(message.typeAsset);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ibcInfo = AssetIBCInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.typeAsset = reader.string();
                    break;
                case 3:
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
            ibcInfo: isSet(object.ibcInfo) ? AssetIBCInfo.fromJSON(object.ibcInfo) : undefined,
            typeAsset: isSet(object.typeAsset) ? String(object.typeAsset) : "",
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.ibcInfo !== undefined && (obj.ibcInfo = message.ibcInfo ? AssetIBCInfo.toJSON(message.ibcInfo) : undefined);
        message.typeAsset !== undefined && (obj.typeAsset = message.typeAsset);
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetMetadata();
        message.ibcInfo = object.ibcInfo !== undefined && object.ibcInfo !== null ? AssetIBCInfo.fromPartial(object.ibcInfo) : undefined;
        message.typeAsset = object.typeAsset ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAssetMetadata();
        if (object.ibcInfo !== undefined && object.ibcInfo !== null) {
            message.ibcInfo = AssetIBCInfo.fromAmino(object.ibcInfo);
        }
        if (object.type_asset !== undefined && object.type_asset !== null) {
            message.typeAsset = object.type_asset;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = Metadata.fromAmino(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ibcInfo = message.ibcInfo ? AssetIBCInfo.toAmino(message.ibcInfo) : undefined;
        obj.type_asset = message.typeAsset;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AssetMetadata.decode(message.value);
    },
    toProto(message) {
        return AssetMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.AssetMetadata",
            value: AssetMetadata.encode(message).finish()
        };
    }
};
