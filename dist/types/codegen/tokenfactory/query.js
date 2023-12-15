import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/seiprotocol.seichain.tokenfactory.QueryParamsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.tokenfactory.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/seiprotocol.seichain.tokenfactory.QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.tokenfactory.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        denom: ""
    };
}
export const QueryDenomAuthorityMetadataRequest = {
    typeUrl: "/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataRequest",
            value: QueryDenomAuthorityMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authorityMetadata: DenomAuthorityMetadata.fromPartial({})
    };
}
export const QueryDenomAuthorityMetadataResponse = {
    typeUrl: "/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authorityMetadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
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
            authorityMetadata: isSet(object.authorityMetadata) ? DenomAuthorityMetadata.fromJSON(object.authorityMetadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authorityMetadata !== undefined && (obj.authorityMetadata = message.authorityMetadata ? DenomAuthorityMetadata.toJSON(message.authorityMetadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authorityMetadata = DenomAuthorityMetadata.fromAmino(object.authority_metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataResponse",
            value: QueryDenomAuthorityMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: ""
    };
}
export const QueryDenomsFromCreatorRequest = {
    typeUrl: "/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        message.creator = object.creator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsFromCreatorRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorRequest",
            value: QueryDenomsFromCreatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: []
    };
}
export const QueryDenomsFromCreatorResponse = {
    typeUrl: "/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
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
            denoms: Array.isArray(object?.denoms) ? object.denoms.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsFromCreatorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorResponse",
            value: QueryDenomsFromCreatorResponse.encode(message).finish()
        };
    }
};
