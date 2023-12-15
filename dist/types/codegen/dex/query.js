import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Order } from "./order";
import { positionDirectionFromJSON, positionDirectionToJSON } from "./enums";
import { Params } from "./params";
import { LongBook } from "./long_book";
import { ShortBook } from "./short_book";
import { Price, PriceCandlestick } from "./price";
import { Twap } from "./twap";
import { AssetMetadata } from "./asset_list";
import { Pair } from "./pair";
import { ContractInfoV2 } from "./contract";
import { MatchResult } from "./match_result";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryParamsRequest",
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
            typeUrl: "/seiprotocol.seichain.dex.QueryParamsRequest",
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
    typeUrl: "/seiprotocol.seichain.dex.QueryParamsResponse",
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
            typeUrl: "/seiprotocol.seichain.dex.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetLongBookRequest() {
    return {
        price: "",
        contractAddr: "",
        priceDenom: "",
        assetDenom: ""
    };
}
export const QueryGetLongBookRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.contractAddr !== "") {
            writer.uint32(18).string(message.contractAddr);
        }
        if (message.priceDenom !== "") {
            writer.uint32(26).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(34).string(message.assetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetLongBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = reader.string();
                    break;
                case 2:
                    message.contractAddr = reader.string();
                    break;
                case 3:
                    message.priceDenom = reader.string();
                    break;
                case 4:
                    message.assetDenom = reader.string();
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
            price: isSet(object.price) ? String(object.price) : "",
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetLongBookRequest();
        message.price = object.price ?? "";
        message.contractAddr = object.contractAddr ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetLongBookRequest();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price;
        obj.contractAddr = message.contractAddr;
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetLongBookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetLongBookRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetLongBookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookRequest",
            value: QueryGetLongBookRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetLongBookResponse() {
    return {
        LongBook: LongBook.fromPartial({})
    };
}
export const QueryGetLongBookResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.LongBook !== undefined) {
            LongBook.encode(message.LongBook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetLongBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.LongBook = LongBook.decode(reader, reader.uint32());
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
            LongBook: isSet(object.LongBook) ? LongBook.fromJSON(object.LongBook) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.LongBook !== undefined && (obj.LongBook = message.LongBook ? LongBook.toJSON(message.LongBook) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetLongBookResponse();
        message.LongBook = object.LongBook !== undefined && object.LongBook !== null ? LongBook.fromPartial(object.LongBook) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetLongBookResponse();
        if (object.LongBook !== undefined && object.LongBook !== null) {
            message.LongBook = LongBook.fromAmino(object.LongBook);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.LongBook = message.LongBook ? LongBook.toAmino(message.LongBook) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetLongBookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetLongBookResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetLongBookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookResponse",
            value: QueryGetLongBookResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllLongBookRequest() {
    return {
        pagination: undefined,
        contractAddr: "",
        priceDenom: "",
        assetDenom: ""
    };
}
export const QueryAllLongBookRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.contractAddr !== "") {
            writer.uint32(18).string(message.contractAddr);
        }
        if (message.priceDenom !== "") {
            writer.uint32(26).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(34).string(message.assetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLongBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.contractAddr = reader.string();
                    break;
                case 3:
                    message.priceDenom = reader.string();
                    break;
                case 4:
                    message.assetDenom = reader.string();
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllLongBookRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.contractAddr = object.contractAddr ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllLongBookRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.contractAddr = message.contractAddr;
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllLongBookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllLongBookRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllLongBookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookRequest",
            value: QueryAllLongBookRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllLongBookResponse() {
    return {
        LongBook: [],
        pagination: undefined
    };
}
export const QueryAllLongBookResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.LongBook) {
            LongBook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLongBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.LongBook.push(LongBook.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            LongBook: Array.isArray(object?.LongBook) ? object.LongBook.map((e) => LongBook.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.LongBook) {
            obj.LongBook = message.LongBook.map(e => e ? LongBook.toJSON(e) : undefined);
        }
        else {
            obj.LongBook = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllLongBookResponse();
        message.LongBook = object.LongBook?.map(e => LongBook.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllLongBookResponse();
        message.LongBook = object.LongBook?.map(e => LongBook.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.LongBook) {
            obj.LongBook = message.LongBook.map(e => e ? LongBook.toAmino(e) : undefined);
        }
        else {
            obj.LongBook = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllLongBookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllLongBookResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllLongBookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookResponse",
            value: QueryAllLongBookResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetShortBookRequest() {
    return {
        price: "",
        contractAddr: "",
        priceDenom: "",
        assetDenom: ""
    };
}
export const QueryGetShortBookRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.contractAddr !== "") {
            writer.uint32(18).string(message.contractAddr);
        }
        if (message.priceDenom !== "") {
            writer.uint32(26).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(34).string(message.assetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetShortBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = reader.string();
                    break;
                case 2:
                    message.contractAddr = reader.string();
                    break;
                case 3:
                    message.priceDenom = reader.string();
                    break;
                case 4:
                    message.assetDenom = reader.string();
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
            price: isSet(object.price) ? String(object.price) : "",
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetShortBookRequest();
        message.price = object.price ?? "";
        message.contractAddr = object.contractAddr ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetShortBookRequest();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price;
        obj.contractAddr = message.contractAddr;
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetShortBookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetShortBookRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetShortBookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookRequest",
            value: QueryGetShortBookRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetShortBookResponse() {
    return {
        ShortBook: ShortBook.fromPartial({})
    };
}
export const QueryGetShortBookResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.ShortBook !== undefined) {
            ShortBook.encode(message.ShortBook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetShortBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ShortBook = ShortBook.decode(reader, reader.uint32());
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
            ShortBook: isSet(object.ShortBook) ? ShortBook.fromJSON(object.ShortBook) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.ShortBook !== undefined && (obj.ShortBook = message.ShortBook ? ShortBook.toJSON(message.ShortBook) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetShortBookResponse();
        message.ShortBook = object.ShortBook !== undefined && object.ShortBook !== null ? ShortBook.fromPartial(object.ShortBook) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetShortBookResponse();
        if (object.ShortBook !== undefined && object.ShortBook !== null) {
            message.ShortBook = ShortBook.fromAmino(object.ShortBook);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ShortBook = message.ShortBook ? ShortBook.toAmino(message.ShortBook) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetShortBookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetShortBookResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetShortBookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookResponse",
            value: QueryGetShortBookResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllShortBookRequest() {
    return {
        pagination: undefined,
        contractAddr: "",
        priceDenom: "",
        assetDenom: ""
    };
}
export const QueryAllShortBookRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.contractAddr !== "") {
            writer.uint32(18).string(message.contractAddr);
        }
        if (message.priceDenom !== "") {
            writer.uint32(26).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(34).string(message.assetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllShortBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.contractAddr = reader.string();
                    break;
                case 3:
                    message.priceDenom = reader.string();
                    break;
                case 4:
                    message.assetDenom = reader.string();
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllShortBookRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.contractAddr = object.contractAddr ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllShortBookRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.contractAddr = message.contractAddr;
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllShortBookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllShortBookRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllShortBookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookRequest",
            value: QueryAllShortBookRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllShortBookResponse() {
    return {
        ShortBook: [],
        pagination: undefined
    };
}
export const QueryAllShortBookResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ShortBook) {
            ShortBook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllShortBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ShortBook.push(ShortBook.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            ShortBook: Array.isArray(object?.ShortBook) ? object.ShortBook.map((e) => ShortBook.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ShortBook) {
            obj.ShortBook = message.ShortBook.map(e => e ? ShortBook.toJSON(e) : undefined);
        }
        else {
            obj.ShortBook = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllShortBookResponse();
        message.ShortBook = object.ShortBook?.map(e => ShortBook.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllShortBookResponse();
        message.ShortBook = object.ShortBook?.map(e => ShortBook.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.ShortBook) {
            obj.ShortBook = message.ShortBook.map(e => e ? ShortBook.toAmino(e) : undefined);
        }
        else {
            obj.ShortBook = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllShortBookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllShortBookResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllShortBookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookResponse",
            value: QueryAllShortBookResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetPricesRequest() {
    return {
        priceDenom: "",
        assetDenom: "",
        contractAddr: ""
    };
}
export const QueryGetPricesRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceDenom !== "") {
            writer.uint32(10).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(18).string(message.assetDenom);
        }
        if (message.contractAddr !== "") {
            writer.uint32(26).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPricesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceDenom = reader.string();
                    break;
                case 2:
                    message.assetDenom = reader.string();
                    break;
                case 3:
                    message.contractAddr = reader.string();
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
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetPricesRequest();
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetPricesRequest();
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetPricesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetPricesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetPricesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesRequest",
            value: QueryGetPricesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetPricesResponse() {
    return {
        prices: []
    };
}
export const QueryGetPricesResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prices) {
            Price.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prices.push(Price.decode(reader, reader.uint32()));
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
            prices: Array.isArray(object?.prices) ? object.prices.map((e) => Price.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.prices) {
            obj.prices = message.prices.map(e => e ? Price.toJSON(e) : undefined);
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetPricesResponse();
        message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetPricesResponse();
        message.prices = object.prices?.map(e => Price.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.prices) {
            obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetPricesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetPricesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetPricesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesResponse",
            value: QueryGetPricesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetPriceRequest() {
    return {
        priceDenom: "",
        assetDenom: "",
        contractAddr: "",
        timestamp: Long.UZERO
    };
}
export const QueryGetPriceRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceDenom !== "") {
            writer.uint32(10).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(18).string(message.assetDenom);
        }
        if (message.contractAddr !== "") {
            writer.uint32(26).string(message.contractAddr);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(32).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceDenom = reader.string();
                    break;
                case 2:
                    message.assetDenom = reader.string();
                    break;
                case 3:
                    message.contractAddr = reader.string();
                    break;
                case 4:
                    message.timestamp = reader.uint64();
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
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetPriceRequest();
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        message.contractAddr = object.contractAddr ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetPriceRequest();
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Long.fromString(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        obj.contractAddr = message.contractAddr;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetPriceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetPriceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceRequest",
            value: QueryGetPriceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetPriceResponse() {
    return {
        price: undefined,
        found: false
    };
}
export const QueryGetPriceResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== undefined) {
            Price.encode(message.price, writer.uint32(10).fork()).ldelim();
        }
        if (message.found === true) {
            writer.uint32(16).bool(message.found);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = Price.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.found = reader.bool();
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
            price: isSet(object.price) ? Price.fromJSON(object.price) : undefined,
            found: isSet(object.found) ? Boolean(object.found) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price ? Price.toJSON(message.price) : undefined);
        message.found !== undefined && (obj.found = message.found);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetPriceResponse();
        message.price = object.price !== undefined && object.price !== null ? Price.fromPartial(object.price) : undefined;
        message.found = object.found ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetPriceResponse();
        if (object.price !== undefined && object.price !== null) {
            message.price = Price.fromAmino(object.price);
        }
        if (object.found !== undefined && object.found !== null) {
            message.found = object.found;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price ? Price.toAmino(message.price) : undefined;
        obj.found = message.found;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetPriceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetPriceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceResponse",
            value: QueryGetPriceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetLatestPriceRequest() {
    return {
        priceDenom: "",
        assetDenom: "",
        contractAddr: ""
    };
}
export const QueryGetLatestPriceRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceDenom !== "") {
            writer.uint32(10).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(18).string(message.assetDenom);
        }
        if (message.contractAddr !== "") {
            writer.uint32(26).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetLatestPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceDenom = reader.string();
                    break;
                case 2:
                    message.assetDenom = reader.string();
                    break;
                case 3:
                    message.contractAddr = reader.string();
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
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetLatestPriceRequest();
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetLatestPriceRequest();
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetLatestPriceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetLatestPriceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetLatestPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceRequest",
            value: QueryGetLatestPriceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetLatestPriceResponse() {
    return {
        price: undefined
    };
}
export const QueryGetLatestPriceResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== undefined) {
            Price.encode(message.price, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetLatestPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = Price.decode(reader, reader.uint32());
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
            price: isSet(object.price) ? Price.fromJSON(object.price) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price ? Price.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetLatestPriceResponse();
        message.price = object.price !== undefined && object.price !== null ? Price.fromPartial(object.price) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetLatestPriceResponse();
        if (object.price !== undefined && object.price !== null) {
            message.price = Price.fromAmino(object.price);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price ? Price.toAmino(message.price) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetLatestPriceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetLatestPriceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetLatestPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceResponse",
            value: QueryGetLatestPriceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetTwapsRequest() {
    return {
        contractAddr: "",
        lookbackSeconds: Long.UZERO
    };
}
export const QueryGetTwapsRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        if (!message.lookbackSeconds.isZero()) {
            writer.uint32(16).uint64(message.lookbackSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetTwapsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
                    break;
                case 2:
                    message.lookbackSeconds = reader.uint64();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            lookbackSeconds: isSet(object.lookbackSeconds) ? Long.fromValue(object.lookbackSeconds) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.lookbackSeconds !== undefined && (obj.lookbackSeconds = (message.lookbackSeconds || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetTwapsRequest();
        message.contractAddr = object.contractAddr ?? "";
        message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? Long.fromValue(object.lookbackSeconds) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetTwapsRequest();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.lookbackSeconds !== undefined && object.lookbackSeconds !== null) {
            message.lookbackSeconds = Long.fromString(object.lookbackSeconds);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        obj.lookbackSeconds = message.lookbackSeconds ? message.lookbackSeconds.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetTwapsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetTwapsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetTwapsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsRequest",
            value: QueryGetTwapsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetTwapsResponse() {
    return {
        twaps: []
    };
}
export const QueryGetTwapsResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.twaps) {
            Twap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetTwapsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.twaps.push(Twap.decode(reader, reader.uint32()));
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
            twaps: Array.isArray(object?.twaps) ? object.twaps.map((e) => Twap.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? Twap.toJSON(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetTwapsResponse();
        message.twaps = object.twaps?.map(e => Twap.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetTwapsResponse();
        message.twaps = object.twaps?.map(e => Twap.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? Twap.toAmino(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetTwapsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetTwapsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetTwapsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsResponse",
            value: QueryGetTwapsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAssetListRequest() {
    return {};
}
export const QueryAssetListRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryAssetListRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetListRequest();
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
        const message = createBaseQueryAssetListRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAssetListRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAssetListRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAssetListRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAssetListRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryAssetListRequest",
            value: QueryAssetListRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAssetListResponse() {
    return {
        assetList: []
    };
}
export const QueryAssetListResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryAssetListResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.assetList) {
            AssetMetadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            assetList: Array.isArray(object?.assetList) ? object.assetList.map((e) => AssetMetadata.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assetList) {
            obj.assetList = message.assetList.map(e => e ? AssetMetadata.toJSON(e) : undefined);
        }
        else {
            obj.assetList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetListResponse();
        message.assetList = object.assetList?.map(e => AssetMetadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetListResponse();
        message.assetList = object.assetList?.map(e => AssetMetadata.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assetList) {
            obj.assetList = message.assetList.map(e => e ? AssetMetadata.toAmino(e) : undefined);
        }
        else {
            obj.assetList = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAssetListResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAssetListResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAssetListResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryAssetListResponse",
            value: QueryAssetListResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAssetMetadataRequest() {
    return {
        denom: ""
    };
}
export const QueryAssetMetadataRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetMetadataRequest();
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
        const message = createBaseQueryAssetMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetMetadataRequest();
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
        return QueryAssetMetadataRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAssetMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAssetMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataRequest",
            value: QueryAssetMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAssetMetadataResponse() {
    return {
        metadata: undefined
    };
}
export const QueryAssetMetadataResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.metadata !== undefined) {
            AssetMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = AssetMetadata.decode(reader, reader.uint32());
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
            metadata: isSet(object.metadata) ? AssetMetadata.fromJSON(object.metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.metadata !== undefined && (obj.metadata = message.metadata ? AssetMetadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetMetadataResponse();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? AssetMetadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetMetadataResponse();
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = AssetMetadata.fromAmino(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.metadata = message.metadata ? AssetMetadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAssetMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAssetMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAssetMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataResponse",
            value: QueryAssetMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRegisteredPairsRequest() {
    return {
        contractAddr: ""
    };
}
export const QueryRegisteredPairsRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredPairsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredPairsRequest();
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRegisteredPairsRequest();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRegisteredPairsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRegisteredPairsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRegisteredPairsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsRequest",
            value: QueryRegisteredPairsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRegisteredPairsResponse() {
    return {
        pairs: []
    };
}
export const QueryRegisteredPairsResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairs) {
            Pair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(Pair.decode(reader, reader.uint32()));
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
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => Pair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? Pair.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredPairsResponse();
        message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRegisteredPairsResponse();
        message.pairs = object.pairs?.map(e => Pair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? Pair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRegisteredPairsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRegisteredPairsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRegisteredPairsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsResponse",
            value: QueryRegisteredPairsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRegisteredContractRequest() {
    return {
        contractAddr: ""
    };
}
export const QueryRegisteredContractRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredContractRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredContractRequest();
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRegisteredContractRequest();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRegisteredContractRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRegisteredContractRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRegisteredContractRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractRequest",
            value: QueryRegisteredContractRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRegisteredContractResponse() {
    return {
        contractInfo: undefined
    };
}
export const QueryRegisteredContractResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractInfo !== undefined) {
            ContractInfoV2.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractInfo = ContractInfoV2.decode(reader, reader.uint32());
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
            contractInfo: isSet(object.contractInfo) ? ContractInfoV2.fromJSON(object.contractInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfoV2.toJSON(message.contractInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredContractResponse();
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfoV2.fromPartial(object.contractInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRegisteredContractResponse();
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contractInfo = ContractInfoV2.fromAmino(object.contract_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_info = message.contractInfo ? ContractInfoV2.toAmino(message.contractInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRegisteredContractResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRegisteredContractResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRegisteredContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractResponse",
            value: QueryRegisteredContractResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetOrdersRequest() {
    return {
        contractAddr: "",
        account: ""
    };
}
export const QueryGetOrdersRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
                    break;
                case 2:
                    message.account = reader.string();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            account: isSet(object.account) ? String(object.account) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetOrdersRequest();
        message.contractAddr = object.contractAddr ?? "";
        message.account = object.account ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetOrdersRequest();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        obj.account = message.account;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersRequest",
            value: QueryGetOrdersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetOrdersResponse() {
    return {
        orders: []
    };
}
export const QueryGetOrdersResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(Order.decode(reader, reader.uint32()));
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
            orders: Array.isArray(object?.orders) ? object.orders.map((e) => Order.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? Order.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetOrdersResponse();
        message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetOrdersResponse();
        message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersResponse",
            value: QueryGetOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetOrderByIDRequest() {
    return {
        contractAddr: "",
        priceDenom: "",
        assetDenom: "",
        id: Long.UZERO
    };
}
export const QueryGetOrderByIDRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        if (message.priceDenom !== "") {
            writer.uint32(18).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(26).string(message.assetDenom);
        }
        if (!message.id.isZero()) {
            writer.uint32(32).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrderByIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
                    break;
                case 2:
                    message.priceDenom = reader.string();
                    break;
                case 3:
                    message.assetDenom = reader.string();
                    break;
                case 4:
                    message.id = reader.uint64();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
            id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetOrderByIDRequest();
        message.contractAddr = object.contractAddr ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetOrderByIDRequest();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Long.fromString(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetOrderByIDRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetOrderByIDRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetOrderByIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDRequest",
            value: QueryGetOrderByIDRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetOrderByIDResponse() {
    return {
        order: undefined
    };
}
export const QueryGetOrderByIDResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrderByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = Order.decode(reader, reader.uint32());
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
            order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetOrderByIDResponse();
        message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetOrderByIDResponse();
        if (object.order !== undefined && object.order !== null) {
            message.order = Order.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order = message.order ? Order.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetOrderByIDResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetOrderByIDResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetOrderByIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDResponse",
            value: QueryGetOrderByIDResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetHistoricalPricesRequest() {
    return {
        contractAddr: "",
        priceDenom: "",
        assetDenom: "",
        periodLengthInSeconds: Long.UZERO,
        numOfPeriods: Long.UZERO
    };
}
export const QueryGetHistoricalPricesRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        if (message.priceDenom !== "") {
            writer.uint32(18).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(26).string(message.assetDenom);
        }
        if (!message.periodLengthInSeconds.isZero()) {
            writer.uint32(32).uint64(message.periodLengthInSeconds);
        }
        if (!message.numOfPeriods.isZero()) {
            writer.uint32(40).uint64(message.numOfPeriods);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHistoricalPricesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
                    break;
                case 2:
                    message.priceDenom = reader.string();
                    break;
                case 3:
                    message.assetDenom = reader.string();
                    break;
                case 4:
                    message.periodLengthInSeconds = reader.uint64();
                    break;
                case 5:
                    message.numOfPeriods = reader.uint64();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
            periodLengthInSeconds: isSet(object.periodLengthInSeconds) ? Long.fromValue(object.periodLengthInSeconds) : Long.UZERO,
            numOfPeriods: isSet(object.numOfPeriods) ? Long.fromValue(object.numOfPeriods) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        message.periodLengthInSeconds !== undefined && (obj.periodLengthInSeconds = (message.periodLengthInSeconds || Long.UZERO).toString());
        message.numOfPeriods !== undefined && (obj.numOfPeriods = (message.numOfPeriods || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetHistoricalPricesRequest();
        message.contractAddr = object.contractAddr ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        message.periodLengthInSeconds = object.periodLengthInSeconds !== undefined && object.periodLengthInSeconds !== null ? Long.fromValue(object.periodLengthInSeconds) : Long.UZERO;
        message.numOfPeriods = object.numOfPeriods !== undefined && object.numOfPeriods !== null ? Long.fromValue(object.numOfPeriods) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetHistoricalPricesRequest();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        if (object.periodLengthInSeconds !== undefined && object.periodLengthInSeconds !== null) {
            message.periodLengthInSeconds = Long.fromString(object.periodLengthInSeconds);
        }
        if (object.numOfPeriods !== undefined && object.numOfPeriods !== null) {
            message.numOfPeriods = Long.fromString(object.numOfPeriods);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        obj.periodLengthInSeconds = message.periodLengthInSeconds ? message.periodLengthInSeconds.toString() : undefined;
        obj.numOfPeriods = message.numOfPeriods ? message.numOfPeriods.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetHistoricalPricesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetHistoricalPricesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetHistoricalPricesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesRequest",
            value: QueryGetHistoricalPricesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetHistoricalPricesResponse() {
    return {
        prices: []
    };
}
export const QueryGetHistoricalPricesResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prices) {
            PriceCandlestick.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHistoricalPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prices.push(PriceCandlestick.decode(reader, reader.uint32()));
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
            prices: Array.isArray(object?.prices) ? object.prices.map((e) => PriceCandlestick.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.prices) {
            obj.prices = message.prices.map(e => e ? PriceCandlestick.toJSON(e) : undefined);
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetHistoricalPricesResponse();
        message.prices = object.prices?.map(e => PriceCandlestick.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetHistoricalPricesResponse();
        message.prices = object.prices?.map(e => PriceCandlestick.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.prices) {
            obj.prices = message.prices.map(e => e ? PriceCandlestick.toAmino(e) : undefined);
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetHistoricalPricesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetHistoricalPricesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetHistoricalPricesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesResponse",
            value: QueryGetHistoricalPricesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetMarketSummaryRequest() {
    return {
        contractAddr: "",
        priceDenom: "",
        assetDenom: "",
        lookbackInSeconds: Long.UZERO
    };
}
export const QueryGetMarketSummaryRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        if (message.priceDenom !== "") {
            writer.uint32(18).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(26).string(message.assetDenom);
        }
        if (!message.lookbackInSeconds.isZero()) {
            writer.uint32(32).uint64(message.lookbackInSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetMarketSummaryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
                    break;
                case 2:
                    message.priceDenom = reader.string();
                    break;
                case 3:
                    message.assetDenom = reader.string();
                    break;
                case 4:
                    message.lookbackInSeconds = reader.uint64();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
            lookbackInSeconds: isSet(object.lookbackInSeconds) ? Long.fromValue(object.lookbackInSeconds) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        message.lookbackInSeconds !== undefined && (obj.lookbackInSeconds = (message.lookbackInSeconds || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetMarketSummaryRequest();
        message.contractAddr = object.contractAddr ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        message.lookbackInSeconds = object.lookbackInSeconds !== undefined && object.lookbackInSeconds !== null ? Long.fromValue(object.lookbackInSeconds) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetMarketSummaryRequest();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        if (object.lookbackInSeconds !== undefined && object.lookbackInSeconds !== null) {
            message.lookbackInSeconds = Long.fromString(object.lookbackInSeconds);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        obj.lookbackInSeconds = message.lookbackInSeconds ? message.lookbackInSeconds.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetMarketSummaryRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetMarketSummaryRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetMarketSummaryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryRequest",
            value: QueryGetMarketSummaryRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetMarketSummaryResponse() {
    return {
        totalVolume: "",
        totalVolumeNotional: "",
        highPrice: "",
        lowPrice: "",
        lastPrice: ""
    };
}
export const QueryGetMarketSummaryResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.totalVolume !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.totalVolume, 18).atomics);
        }
        if (message.totalVolumeNotional !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.totalVolumeNotional, 18).atomics);
        }
        if (message.highPrice !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.highPrice, 18).atomics);
        }
        if (message.lowPrice !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.lowPrice, 18).atomics);
        }
        if (message.lastPrice !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.lastPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetMarketSummaryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalVolume = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.totalVolumeNotional = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.highPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.lowPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.lastPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
            totalVolume: isSet(object.totalVolume) ? String(object.totalVolume) : "",
            totalVolumeNotional: isSet(object.totalVolumeNotional) ? String(object.totalVolumeNotional) : "",
            highPrice: isSet(object.highPrice) ? String(object.highPrice) : "",
            lowPrice: isSet(object.lowPrice) ? String(object.lowPrice) : "",
            lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalVolume !== undefined && (obj.totalVolume = message.totalVolume);
        message.totalVolumeNotional !== undefined && (obj.totalVolumeNotional = message.totalVolumeNotional);
        message.highPrice !== undefined && (obj.highPrice = message.highPrice);
        message.lowPrice !== undefined && (obj.lowPrice = message.lowPrice);
        message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetMarketSummaryResponse();
        message.totalVolume = object.totalVolume ?? "";
        message.totalVolumeNotional = object.totalVolumeNotional ?? "";
        message.highPrice = object.highPrice ?? "";
        message.lowPrice = object.lowPrice ?? "";
        message.lastPrice = object.lastPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetMarketSummaryResponse();
        if (object.totalVolume !== undefined && object.totalVolume !== null) {
            message.totalVolume = object.totalVolume;
        }
        if (object.totalVolumeNotional !== undefined && object.totalVolumeNotional !== null) {
            message.totalVolumeNotional = object.totalVolumeNotional;
        }
        if (object.highPrice !== undefined && object.highPrice !== null) {
            message.highPrice = object.highPrice;
        }
        if (object.lowPrice !== undefined && object.lowPrice !== null) {
            message.lowPrice = object.lowPrice;
        }
        if (object.lastPrice !== undefined && object.lastPrice !== null) {
            message.lastPrice = object.lastPrice;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.totalVolume = message.totalVolume;
        obj.totalVolumeNotional = message.totalVolumeNotional;
        obj.highPrice = message.highPrice;
        obj.lowPrice = message.lowPrice;
        obj.lastPrice = message.lastPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetMarketSummaryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetMarketSummaryResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetMarketSummaryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryResponse",
            value: QueryGetMarketSummaryResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOrderSimulationRequest() {
    return {
        order: undefined,
        contractAddr: ""
    };
}
export const QueryOrderSimulationRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.contractAddr !== "") {
            writer.uint32(18).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderSimulationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.contractAddr = reader.string();
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
            order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOrderSimulationRequest();
        message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrderSimulationRequest();
        if (object.order !== undefined && object.order !== null) {
            message.order = Order.fromAmino(object.order);
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order = message.order ? Order.toAmino(message.order) : undefined;
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrderSimulationRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderSimulationRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOrderSimulationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationRequest",
            value: QueryOrderSimulationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderSimulationResponse() {
    return {
        ExecutedQuantity: ""
    };
}
export const QueryOrderSimulationResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.ExecutedQuantity !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.ExecutedQuantity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderSimulationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ExecutedQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
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
            ExecutedQuantity: isSet(object.ExecutedQuantity) ? String(object.ExecutedQuantity) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.ExecutedQuantity !== undefined && (obj.ExecutedQuantity = message.ExecutedQuantity);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOrderSimulationResponse();
        message.ExecutedQuantity = object.ExecutedQuantity ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOrderSimulationResponse();
        if (object.ExecutedQuantity !== undefined && object.ExecutedQuantity !== null) {
            message.ExecutedQuantity = object.ExecutedQuantity;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ExecutedQuantity = message.ExecutedQuantity;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrderSimulationResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderSimulationResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOrderSimulationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationResponse",
            value: QueryOrderSimulationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetMatchResultRequest() {
    return {
        contractAddr: ""
    };
}
export const QueryGetMatchResultRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetMatchResultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetMatchResultRequest();
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetMatchResultRequest();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetMatchResultRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetMatchResultRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetMatchResultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultRequest",
            value: QueryGetMatchResultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetMatchResultResponse() {
    return {
        result: undefined
    };
}
export const QueryGetMatchResultResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== undefined) {
            MatchResult.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetMatchResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = MatchResult.decode(reader, reader.uint32());
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
            result: isSet(object.result) ? MatchResult.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? MatchResult.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetMatchResultResponse();
        message.result = object.result !== undefined && object.result !== null ? MatchResult.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetMatchResultResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = MatchResult.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result ? MatchResult.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetMatchResultResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetMatchResultResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetMatchResultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultResponse",
            value: QueryGetMatchResultResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetOrderCountRequest() {
    return {
        contractAddr: "",
        priceDenom: "",
        assetDenom: "",
        price: "",
        positionDirection: 0
    };
}
export const QueryGetOrderCountRequest = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        if (message.priceDenom !== "") {
            writer.uint32(18).string(message.priceDenom);
        }
        if (message.assetDenom !== "") {
            writer.uint32(26).string(message.assetDenom);
        }
        if (message.price !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.positionDirection !== 0) {
            writer.uint32(40).int32(message.positionDirection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrderCountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
                    break;
                case 2:
                    message.priceDenom = reader.string();
                    break;
                case 3:
                    message.assetDenom = reader.string();
                    break;
                case 4:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.positionDirection = reader.int32();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
            price: isSet(object.price) ? String(object.price) : "",
            positionDirection: isSet(object.positionDirection) ? positionDirectionFromJSON(object.positionDirection) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        message.price !== undefined && (obj.price = message.price);
        message.positionDirection !== undefined && (obj.positionDirection = positionDirectionToJSON(message.positionDirection));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetOrderCountRequest();
        message.contractAddr = object.contractAddr ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.assetDenom = object.assetDenom ?? "";
        message.price = object.price ?? "";
        message.positionDirection = object.positionDirection ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetOrderCountRequest();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.positionDirection !== undefined && object.positionDirection !== null) {
            message.positionDirection = positionDirectionFromJSON(object.positionDirection);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        obj.priceDenom = message.priceDenom;
        obj.assetDenom = message.assetDenom;
        obj.price = message.price;
        obj.positionDirection = positionDirectionToJSON(message.positionDirection);
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetOrderCountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetOrderCountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetOrderCountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountRequest",
            value: QueryGetOrderCountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetOrderCountResponse() {
    return {
        count: Long.UZERO
    };
}
export const QueryGetOrderCountResponse = {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.count.isZero()) {
            writer.uint32(8).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrderCountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = reader.uint64();
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
            count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.count !== undefined && (obj.count = (message.count || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetOrderCountResponse();
        message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetOrderCountResponse();
        if (object.count !== undefined && object.count !== null) {
            message.count = Long.fromString(object.count);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.count = message.count ? message.count.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetOrderCountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetOrderCountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetOrderCountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountResponse",
            value: QueryGetOrderCountResponse.encode(message).finish()
        };
    }
};
