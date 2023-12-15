import { AssetMetadata } from "./asset_list";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
function createBaseAddAssetMetadataProposal() {
    return {
        title: "",
        description: "",
        assetList: []
    };
}
export const AddAssetMetadataProposal = {
    typeUrl: "/seiprotocol.seichain.dex.AddAssetMetadataProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.assetList) {
            AssetMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddAssetMetadataProposal();
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
                    message.assetList.push(AssetMetadata.decode(reader, reader.uint32()));
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
            assetList: Array.isArray(object?.assetList) ? object.assetList.map((e) => AssetMetadata.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.assetList) {
            obj.assetList = message.assetList.map(e => e ? AssetMetadata.toJSON(e) : undefined);
        }
        else {
            obj.assetList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddAssetMetadataProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.assetList = object.assetList?.map(e => AssetMetadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAddAssetMetadataProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.assetList = object.assetList?.map(e => AssetMetadata.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.assetList) {
            obj.assetList = message.assetList.map(e => e ? AssetMetadata.toAmino(e) : undefined);
        }
        else {
            obj.assetList = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AddAssetMetadataProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AddAssetMetadataProposal.decode(message.value);
    },
    toProto(message) {
        return AddAssetMetadataProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.AddAssetMetadataProposal",
            value: AddAssetMetadataProposal.encode(message).finish()
        };
    }
};
