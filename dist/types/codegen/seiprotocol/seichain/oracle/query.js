import { OracleExchangeRate, PriceSnapshot, OracleTwap, VotePenaltyCounter, Params } from "./oracle";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryExchangeRateRequest() {
    return {
        denom: ""
    };
}
export const QueryExchangeRateRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRateRequest();
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
        const message = createBaseQueryExchangeRateRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeRateRequest();
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
        return QueryExchangeRateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeRateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateRequest",
            value: QueryExchangeRateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeRateResponse() {
    return {
        oracleExchangeRate: OracleExchangeRate.fromPartial({})
    };
}
export const QueryExchangeRateResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.oracleExchangeRate !== undefined) {
            OracleExchangeRate.encode(message.oracleExchangeRate, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleExchangeRate = OracleExchangeRate.decode(reader, reader.uint32());
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
            oracleExchangeRate: isSet(object.oracleExchangeRate) ? OracleExchangeRate.fromJSON(object.oracleExchangeRate) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracleExchangeRate !== undefined && (obj.oracleExchangeRate = message.oracleExchangeRate ? OracleExchangeRate.toJSON(message.oracleExchangeRate) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExchangeRateResponse();
        message.oracleExchangeRate = object.oracleExchangeRate !== undefined && object.oracleExchangeRate !== null ? OracleExchangeRate.fromPartial(object.oracleExchangeRate) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeRateResponse();
        if (object.oracle_exchange_rate !== undefined && object.oracle_exchange_rate !== null) {
            message.oracleExchangeRate = OracleExchangeRate.fromAmino(object.oracle_exchange_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.oracle_exchange_rate = message.oracleExchangeRate ? OracleExchangeRate.toAmino(message.oracleExchangeRate) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExchangeRateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeRateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateResponse",
            value: QueryExchangeRateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeRatesRequest() {
    return {};
}
export const QueryExchangeRatesRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRatesRequest();
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
        const message = createBaseQueryExchangeRatesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryExchangeRatesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExchangeRatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeRatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesRequest",
            value: QueryExchangeRatesRequest.encode(message).finish()
        };
    }
};
function createBaseDenomOracleExchangeRatePair() {
    return {
        denom: "",
        oracleExchangeRate: OracleExchangeRate.fromPartial({})
    };
}
export const DenomOracleExchangeRatePair = {
    typeUrl: "/seiprotocol.seichain.oracle.DenomOracleExchangeRatePair",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.oracleExchangeRate !== undefined) {
            OracleExchangeRate.encode(message.oracleExchangeRate, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomOracleExchangeRatePair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.oracleExchangeRate = OracleExchangeRate.decode(reader, reader.uint32());
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            oracleExchangeRate: isSet(object.oracleExchangeRate) ? OracleExchangeRate.fromJSON(object.oracleExchangeRate) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.oracleExchangeRate !== undefined && (obj.oracleExchangeRate = message.oracleExchangeRate ? OracleExchangeRate.toJSON(message.oracleExchangeRate) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomOracleExchangeRatePair();
        message.denom = object.denom ?? "";
        message.oracleExchangeRate = object.oracleExchangeRate !== undefined && object.oracleExchangeRate !== null ? OracleExchangeRate.fromPartial(object.oracleExchangeRate) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenomOracleExchangeRatePair();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.oracle_exchange_rate !== undefined && object.oracle_exchange_rate !== null) {
            message.oracleExchangeRate = OracleExchangeRate.fromAmino(object.oracle_exchange_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.oracle_exchange_rate = message.oracleExchangeRate ? OracleExchangeRate.toAmino(message.oracleExchangeRate) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DenomOracleExchangeRatePair.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DenomOracleExchangeRatePair.decode(message.value);
    },
    toProto(message) {
        return DenomOracleExchangeRatePair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.DenomOracleExchangeRatePair",
            value: DenomOracleExchangeRatePair.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeRatesResponse() {
    return {
        denomOracleExchangeRatePairs: []
    };
}
export const QueryExchangeRatesResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denomOracleExchangeRatePairs) {
            DenomOracleExchangeRatePair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomOracleExchangeRatePairs.push(DenomOracleExchangeRatePair.decode(reader, reader.uint32()));
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
            denomOracleExchangeRatePairs: Array.isArray(object?.denomOracleExchangeRatePairs) ? object.denomOracleExchangeRatePairs.map((e) => DenomOracleExchangeRatePair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomOracleExchangeRatePairs) {
            obj.denomOracleExchangeRatePairs = message.denomOracleExchangeRatePairs.map(e => e ? DenomOracleExchangeRatePair.toJSON(e) : undefined);
        }
        else {
            obj.denomOracleExchangeRatePairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExchangeRatesResponse();
        message.denomOracleExchangeRatePairs = object.denomOracleExchangeRatePairs?.map(e => DenomOracleExchangeRatePair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeRatesResponse();
        message.denomOracleExchangeRatePairs = object.denom_oracle_exchange_rate_pairs?.map(e => DenomOracleExchangeRatePair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denomOracleExchangeRatePairs) {
            obj.denom_oracle_exchange_rate_pairs = message.denomOracleExchangeRatePairs.map(e => e ? DenomOracleExchangeRatePair.toAmino(e) : undefined);
        }
        else {
            obj.denom_oracle_exchange_rate_pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExchangeRatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeRatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesResponse",
            value: QueryExchangeRatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryActivesRequest() {
    return {};
}
export const QueryActivesRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryActivesRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryActivesRequest();
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
        const message = createBaseQueryActivesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryActivesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryActivesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryActivesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryActivesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryActivesRequest",
            value: QueryActivesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryActivesResponse() {
    return {
        actives: []
    };
}
export const QueryActivesResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryActivesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.actives) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryActivesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actives.push(reader.string());
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
            actives: Array.isArray(object?.actives) ? object.actives.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.actives) {
            obj.actives = message.actives.map(e => e);
        }
        else {
            obj.actives = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryActivesResponse();
        message.actives = object.actives?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryActivesResponse();
        message.actives = object.actives?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.actives) {
            obj.actives = message.actives.map(e => e);
        }
        else {
            obj.actives = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryActivesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryActivesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryActivesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryActivesResponse",
            value: QueryActivesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVoteTargetsRequest() {
    return {};
}
export const QueryVoteTargetsRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteTargetsRequest();
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
        const message = createBaseQueryVoteTargetsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryVoteTargetsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVoteTargetsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVoteTargetsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVoteTargetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsRequest",
            value: QueryVoteTargetsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVoteTargetsResponse() {
    return {
        voteTargets: []
    };
}
export const QueryVoteTargetsResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.voteTargets) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteTargetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voteTargets.push(reader.string());
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
            voteTargets: Array.isArray(object?.voteTargets) ? object.voteTargets.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.voteTargets) {
            obj.voteTargets = message.voteTargets.map(e => e);
        }
        else {
            obj.voteTargets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteTargetsResponse();
        message.voteTargets = object.voteTargets?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVoteTargetsResponse();
        message.voteTargets = object.vote_targets?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.voteTargets) {
            obj.vote_targets = message.voteTargets.map(e => e);
        }
        else {
            obj.vote_targets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVoteTargetsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVoteTargetsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVoteTargetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsResponse",
            value: QueryVoteTargetsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPriceSnapshotHistoryRequest() {
    return {};
}
export const QueryPriceSnapshotHistoryRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPriceSnapshotHistoryRequest();
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
        const message = createBaseQueryPriceSnapshotHistoryRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryPriceSnapshotHistoryRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPriceSnapshotHistoryRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPriceSnapshotHistoryRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPriceSnapshotHistoryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest",
            value: QueryPriceSnapshotHistoryRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPriceSnapshotHistoryResponse() {
    return {
        priceSnapshots: []
    };
}
export const QueryPriceSnapshotHistoryResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.priceSnapshots) {
            PriceSnapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPriceSnapshotHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceSnapshots.push(PriceSnapshot.decode(reader, reader.uint32()));
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
            priceSnapshots: Array.isArray(object?.priceSnapshots) ? object.priceSnapshots.map((e) => PriceSnapshot.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.priceSnapshots) {
            obj.priceSnapshots = message.priceSnapshots.map(e => e ? PriceSnapshot.toJSON(e) : undefined);
        }
        else {
            obj.priceSnapshots = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPriceSnapshotHistoryResponse();
        message.priceSnapshots = object.priceSnapshots?.map(e => PriceSnapshot.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPriceSnapshotHistoryResponse();
        message.priceSnapshots = object.price_snapshots?.map(e => PriceSnapshot.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceSnapshots) {
            obj.price_snapshots = message.priceSnapshots.map(e => e ? PriceSnapshot.toAmino(e) : undefined);
        }
        else {
            obj.price_snapshots = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPriceSnapshotHistoryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPriceSnapshotHistoryResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPriceSnapshotHistoryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse",
            value: QueryPriceSnapshotHistoryResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTwapsRequest() {
    return {
        lookbackSeconds: Long.UZERO
    };
}
export const QueryTwapsRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.lookbackSeconds.isZero()) {
            writer.uint32(8).uint64(message.lookbackSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTwapsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            lookbackSeconds: isSet(object.lookbackSeconds) ? Long.fromValue(object.lookbackSeconds) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.lookbackSeconds !== undefined && (obj.lookbackSeconds = (message.lookbackSeconds || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTwapsRequest();
        message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? Long.fromValue(object.lookbackSeconds) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTwapsRequest();
        if (object.lookback_seconds !== undefined && object.lookback_seconds !== null) {
            message.lookbackSeconds = Long.fromString(object.lookback_seconds);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lookback_seconds = message.lookbackSeconds ? message.lookbackSeconds.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTwapsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTwapsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTwapsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsRequest",
            value: QueryTwapsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTwapsResponse() {
    return {
        oracleTwaps: []
    };
}
export const QueryTwapsResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.oracleTwaps) {
            OracleTwap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTwapsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleTwaps.push(OracleTwap.decode(reader, reader.uint32()));
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
            oracleTwaps: Array.isArray(object?.oracleTwaps) ? object.oracleTwaps.map((e) => OracleTwap.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.oracleTwaps) {
            obj.oracleTwaps = message.oracleTwaps.map(e => e ? OracleTwap.toJSON(e) : undefined);
        }
        else {
            obj.oracleTwaps = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTwapsResponse();
        message.oracleTwaps = object.oracleTwaps?.map(e => OracleTwap.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTwapsResponse();
        message.oracleTwaps = object.oracle_twaps?.map(e => OracleTwap.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.oracleTwaps) {
            obj.oracle_twaps = message.oracleTwaps.map(e => e ? OracleTwap.toAmino(e) : undefined);
        }
        else {
            obj.oracle_twaps = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTwapsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTwapsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTwapsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsResponse",
            value: QueryTwapsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeederDelegationRequest() {
    return {
        validatorAddr: ""
    };
}
export const QueryFeederDelegationRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeederDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
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
            validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFeederDelegationRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeederDelegationRequest();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validatorAddr = object.validator_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeederDelegationRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeederDelegationRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeederDelegationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationRequest",
            value: QueryFeederDelegationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeederDelegationResponse() {
    return {
        feederAddr: ""
    };
}
export const QueryFeederDelegationResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.feederAddr !== "") {
            writer.uint32(10).string(message.feederAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeederDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feederAddr = reader.string();
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
            feederAddr: isSet(object.feederAddr) ? String(object.feederAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.feederAddr !== undefined && (obj.feederAddr = message.feederAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFeederDelegationResponse();
        message.feederAddr = object.feederAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeederDelegationResponse();
        if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
            message.feederAddr = object.feeder_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feeder_addr = message.feederAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeederDelegationResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeederDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeederDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationResponse",
            value: QueryFeederDelegationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotePenaltyCounterRequest() {
    return {
        validatorAddr: ""
    };
}
export const QueryVotePenaltyCounterRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotePenaltyCounterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
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
            validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotePenaltyCounterRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotePenaltyCounterRequest();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validatorAddr = object.validator_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotePenaltyCounterRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVotePenaltyCounterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVotePenaltyCounterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest",
            value: QueryVotePenaltyCounterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotePenaltyCounterResponse() {
    return {
        votePenaltyCounter: undefined
    };
}
export const QueryVotePenaltyCounterResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.votePenaltyCounter !== undefined) {
            VotePenaltyCounter.encode(message.votePenaltyCounter, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotePenaltyCounterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votePenaltyCounter = VotePenaltyCounter.decode(reader, reader.uint32());
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
            votePenaltyCounter: isSet(object.votePenaltyCounter) ? VotePenaltyCounter.fromJSON(object.votePenaltyCounter) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.votePenaltyCounter !== undefined && (obj.votePenaltyCounter = message.votePenaltyCounter ? VotePenaltyCounter.toJSON(message.votePenaltyCounter) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotePenaltyCounterResponse();
        message.votePenaltyCounter = object.votePenaltyCounter !== undefined && object.votePenaltyCounter !== null ? VotePenaltyCounter.fromPartial(object.votePenaltyCounter) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotePenaltyCounterResponse();
        if (object.vote_penalty_counter !== undefined && object.vote_penalty_counter !== null) {
            message.votePenaltyCounter = VotePenaltyCounter.fromAmino(object.vote_penalty_counter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote_penalty_counter = message.votePenaltyCounter ? VotePenaltyCounter.toAmino(message.votePenaltyCounter) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotePenaltyCounterResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVotePenaltyCounterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVotePenaltyCounterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse",
            value: QueryVotePenaltyCounterResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySlashWindowRequest() {
    return {};
}
export const QuerySlashWindowRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySlashWindowRequest();
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
        const message = createBaseQuerySlashWindowRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQuerySlashWindowRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySlashWindowRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySlashWindowRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySlashWindowRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowRequest",
            value: QuerySlashWindowRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySlashWindowResponse() {
    return {
        windowProgress: Long.UZERO
    };
}
export const QuerySlashWindowResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.windowProgress.isZero()) {
            writer.uint32(8).uint64(message.windowProgress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySlashWindowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.windowProgress = reader.uint64();
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
            windowProgress: isSet(object.windowProgress) ? Long.fromValue(object.windowProgress) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.windowProgress !== undefined && (obj.windowProgress = (message.windowProgress || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySlashWindowResponse();
        message.windowProgress = object.windowProgress !== undefined && object.windowProgress !== null ? Long.fromValue(object.windowProgress) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySlashWindowResponse();
        if (object.window_progress !== undefined && object.window_progress !== null) {
            message.windowProgress = Long.fromString(object.window_progress);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.window_progress = message.windowProgress ? message.windowProgress.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySlashWindowResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySlashWindowResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySlashWindowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowResponse",
            value: QuerySlashWindowResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/seiprotocol.seichain.oracle.QueryParamsRequest",
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
            typeUrl: "/seiprotocol.seichain.oracle.QueryParamsRequest",
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
    typeUrl: "/seiprotocol.seichain.oracle.QueryParamsResponse",
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
            typeUrl: "/seiprotocol.seichain.oracle.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
