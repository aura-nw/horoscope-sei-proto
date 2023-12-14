import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractCodeHistoryEntry, Model } from "./types";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
function createBaseQueryContractInfoRequest() {
    return {
        address: ""
    };
}
export const QueryContractInfoRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractInfoRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractInfoRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryContractInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractInfoRequest",
            value: QueryContractInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryContractInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryContractInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
            value: QueryContractInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryContractInfoResponse() {
    return {
        address: "",
        contractInfo: ContractInfo.fromPartial({})
    };
}
export const QueryContractInfoResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.contractInfo !== undefined) {
            ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.contractInfo = ContractInfo.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractInfoResponse();
        message.address = object.address ?? "";
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractInfoResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contractInfo = ContractInfo.fromAmino(object.contract_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryContractInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractInfoResponse",
            value: QueryContractInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryContractInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryContractInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
            value: QueryContractInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryContractHistoryRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryContractHistoryRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractHistoryRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractHistoryRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryContractHistoryRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractHistoryRequest",
            value: QueryContractHistoryRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryContractHistoryRequest.decode(message.value);
    },
    toProto(message) {
        return QueryContractHistoryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
            value: QueryContractHistoryRequest.encode(message).finish()
        };
    }
};
function createBaseQueryContractHistoryResponse() {
    return {
        entries: [],
        pagination: undefined
    };
}
export const QueryContractHistoryResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            ContractCodeHistoryEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => ContractCodeHistoryEntry.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? ContractCodeHistoryEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractHistoryResponse();
        message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractHistoryResponse();
        message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? ContractCodeHistoryEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryContractHistoryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractHistoryResponse",
            value: QueryContractHistoryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryContractHistoryResponse.decode(message.value);
    },
    toProto(message) {
        return QueryContractHistoryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
            value: QueryContractHistoryResponse.encode(message).finish()
        };
    }
};
function createBaseQueryContractsByCodeRequest() {
    return {
        codeId: Long.UZERO,
        pagination: undefined
    };
}
export const QueryContractsByCodeRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractsByCodeRequest();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractsByCodeRequest();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = Long.fromString(object.code_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryContractsByCodeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractsByCodeRequest",
            value: QueryContractsByCodeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryContractsByCodeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryContractsByCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
            value: QueryContractsByCodeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryContractsByCodeResponse() {
    return {
        contracts: [],
        pagination: undefined
    };
}
export const QueryContractsByCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.contracts) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contracts.push(reader.string());
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
            contracts: Array.isArray(object?.contracts) ? object.contracts.map((e) => String(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e);
        }
        else {
            obj.contracts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractsByCodeResponse();
        message.contracts = object.contracts?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractsByCodeResponse();
        message.contracts = object.contracts?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e);
        }
        else {
            obj.contracts = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryContractsByCodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractsByCodeResponse",
            value: QueryContractsByCodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryContractsByCodeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryContractsByCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
            value: QueryContractsByCodeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllContractStateRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryAllContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllContractStateRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllContractStateRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllContractStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryAllContractStateRequest",
            value: QueryAllContractStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
            value: QueryAllContractStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllContractStateResponse() {
    return {
        models: [],
        pagination: undefined
    };
}
export const QueryAllContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.models) {
            Model.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllContractStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.models.push(Model.decode(reader, reader.uint32()));
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
            models: Array.isArray(object?.models) ? object.models.map((e) => Model.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.models) {
            obj.models = message.models.map(e => e ? Model.toJSON(e) : undefined);
        }
        else {
            obj.models = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllContractStateResponse();
        message.models = object.models?.map(e => Model.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllContractStateResponse();
        message.models = object.models?.map(e => Model.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.models) {
            obj.models = message.models.map(e => e ? Model.toAmino(e) : undefined);
        }
        else {
            obj.models = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllContractStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryAllContractStateResponse",
            value: QueryAllContractStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
            value: QueryAllContractStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRawContractStateRequest() {
    return {
        address: "",
        queryData: new Uint8Array()
    };
}
export const QueryRawContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRawContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
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
            address: isSet(object.address) ? String(object.address) : "",
            queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRawContractStateRequest();
        message.address = object.address ?? "";
        message.queryData = object.queryData ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRawContractStateRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.query_data !== undefined && object.query_data !== null) {
            message.queryData = bytesFromBase64(object.query_data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.query_data = message.queryData ? base64FromBytes(message.queryData) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRawContractStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryRawContractStateRequest",
            value: QueryRawContractStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryRawContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRawContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
            value: QueryRawContractStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRawContractStateResponse() {
    return {
        data: new Uint8Array()
    };
}
export const QueryRawContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRawContractStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRawContractStateResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRawContractStateResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRawContractStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryRawContractStateResponse",
            value: QueryRawContractStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryRawContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRawContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
            value: QueryRawContractStateResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySmartContractStateRequest() {
    return {
        address: "",
        queryData: new Uint8Array()
    };
}
export const QuerySmartContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySmartContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
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
            address: isSet(object.address) ? String(object.address) : "",
            queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySmartContractStateRequest();
        message.address = object.address ?? "";
        message.queryData = object.queryData ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySmartContractStateRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.query_data !== undefined && object.query_data !== null) {
            message.queryData = toUtf8(JSON.stringify(object.query_data));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.query_data = message.queryData ? JSON.parse(fromUtf8(message.queryData)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySmartContractStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QuerySmartContractStateRequest",
            value: QuerySmartContractStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySmartContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySmartContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
            value: QuerySmartContractStateRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySmartContractStateResponse() {
    return {
        data: new Uint8Array()
    };
}
export const QuerySmartContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySmartContractStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySmartContractStateResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySmartContractStateResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = toUtf8(JSON.stringify(object.data));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? JSON.parse(fromUtf8(message.data)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySmartContractStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QuerySmartContractStateResponse",
            value: QuerySmartContractStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySmartContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySmartContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
            value: QuerySmartContractStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCodeRequest() {
    return {
        codeId: Long.UZERO
    };
}
export const QueryCodeRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
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
            codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeRequest();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodeRequest();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = Long.fromString(object.code_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCodeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodeRequest",
            value: QueryCodeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCodeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
            value: QueryCodeRequest.encode(message).finish()
        };
    }
};
function createBaseCodeInfoResponse() {
    return {
        codeId: Long.UZERO,
        creator: "",
        dataHash: new Uint8Array()
    };
}
export const CodeInfoResponse = {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(26).bytes(message.dataHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.dataHash = reader.bytes();
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
            codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
            creator: isSet(object.creator) ? String(object.creator) : "",
            dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
        message.creator !== undefined && (obj.creator = message.creator);
        message.dataHash !== undefined && (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCodeInfoResponse();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
        message.creator = object.creator ?? "";
        message.dataHash = object.dataHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCodeInfoResponse();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = Long.fromString(object.code_id);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.data_hash !== undefined && object.data_hash !== null) {
            message.dataHash = bytesFromBase64(object.data_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.creator = message.creator;
        obj.data_hash = message.dataHash ? base64FromBytes(message.dataHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CodeInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/CodeInfoResponse",
            value: CodeInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CodeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return CodeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
            value: CodeInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCodeResponse() {
    return {
        codeInfo: undefined,
        data: new Uint8Array()
    };
}
export const QueryCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.codeInfo !== undefined) {
            CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = reader.bytes();
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
            codeInfo: isSet(object.codeInfo) ? CodeInfoResponse.fromJSON(object.codeInfo) : undefined,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfoResponse.toJSON(message.codeInfo) : undefined);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeResponse();
        message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodeResponse();
        if (object.code_info !== undefined && object.code_info !== null) {
            message.codeInfo = CodeInfoResponse.fromAmino(object.code_info);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_info = message.codeInfo ? CodeInfoResponse.toAmino(message.codeInfo) : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodeResponse",
            value: QueryCodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCodeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
            value: QueryCodeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCodesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryCodesRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCodesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodesRequest",
            value: QueryCodesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCodesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCodesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
            value: QueryCodesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCodesResponse() {
    return {
        codeInfos: [],
        pagination: undefined
    };
}
export const QueryCodesResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.codeInfos) {
            CodeInfoResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
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
            codeInfos: Array.isArray(object?.codeInfos) ? object.codeInfos.map((e) => CodeInfoResponse.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.codeInfos) {
            obj.codeInfos = message.codeInfos.map(e => e ? CodeInfoResponse.toJSON(e) : undefined);
        }
        else {
            obj.codeInfos = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodesResponse();
        message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodesResponse();
        message.codeInfos = object.code_infos?.map(e => CodeInfoResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.codeInfos) {
            obj.code_infos = message.codeInfos.map(e => e ? CodeInfoResponse.toAmino(e) : undefined);
        }
        else {
            obj.code_infos = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCodesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodesResponse",
            value: QueryCodesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCodesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCodesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
            value: QueryCodesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPinnedCodesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryPinnedCodesRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPinnedCodesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPinnedCodesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPinnedCodesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPinnedCodesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryPinnedCodesRequest",
            value: QueryPinnedCodesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPinnedCodesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPinnedCodesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
            value: QueryPinnedCodesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPinnedCodesResponse() {
    return {
        codeIds: [],
        pagination: undefined
    };
}
export const QueryPinnedCodesResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPinnedCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
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
            codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e) => Long.fromValue(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.codeIds) {
            obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.codeIds = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPinnedCodesResponse();
        message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPinnedCodesResponse();
        message.codeIds = object.code_ids?.map(e => Long.fromString(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e);
        }
        else {
            obj.code_ids = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPinnedCodesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryPinnedCodesResponse",
            value: QueryPinnedCodesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPinnedCodesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPinnedCodesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
            value: QueryPinnedCodesResponse.encode(message).finish()
        };
    }
};
