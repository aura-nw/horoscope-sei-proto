import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
function createBaseParams() {
    return {
        votePeriod: Long.UZERO,
        voteThreshold: "",
        rewardBand: "",
        whitelist: [],
        slashFraction: "",
        slashWindow: Long.UZERO,
        minValidPerWindow: "",
        lookbackDuration: Long.UZERO
    };
}
export const Params = {
    typeUrl: "/seiprotocol.seichain.oracle.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.votePeriod.isZero()) {
            writer.uint32(8).uint64(message.votePeriod);
        }
        if (message.voteThreshold !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
        }
        if (message.rewardBand !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.rewardBand, 18).atomics);
        }
        for (const v of message.whitelist) {
            Denom.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.slashFraction !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.slashFraction, 18).atomics);
        }
        if (!message.slashWindow.isZero()) {
            writer.uint32(48).uint64(message.slashWindow);
        }
        if (message.minValidPerWindow !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.minValidPerWindow, 18).atomics);
        }
        if (!message.lookbackDuration.isZero()) {
            writer.uint32(72).uint64(message.lookbackDuration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votePeriod = reader.uint64();
                    break;
                case 2:
                    message.voteThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.rewardBand = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.whitelist.push(Denom.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.slashFraction = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.slashWindow = reader.uint64();
                    break;
                case 7:
                    message.minValidPerWindow = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.lookbackDuration = reader.uint64();
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
            votePeriod: isSet(object.votePeriod) ? Long.fromValue(object.votePeriod) : Long.UZERO,
            voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
            rewardBand: isSet(object.rewardBand) ? String(object.rewardBand) : "",
            whitelist: Array.isArray(object?.whitelist) ? object.whitelist.map((e) => Denom.fromJSON(e)) : [],
            slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
            slashWindow: isSet(object.slashWindow) ? Long.fromValue(object.slashWindow) : Long.UZERO,
            minValidPerWindow: isSet(object.minValidPerWindow) ? String(object.minValidPerWindow) : "",
            lookbackDuration: isSet(object.lookbackDuration) ? Long.fromValue(object.lookbackDuration) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || Long.UZERO).toString());
        message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
        message.rewardBand !== undefined && (obj.rewardBand = message.rewardBand);
        if (message.whitelist) {
            obj.whitelist = message.whitelist.map(e => e ? Denom.toJSON(e) : undefined);
        }
        else {
            obj.whitelist = [];
        }
        message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
        message.slashWindow !== undefined && (obj.slashWindow = (message.slashWindow || Long.UZERO).toString());
        message.minValidPerWindow !== undefined && (obj.minValidPerWindow = message.minValidPerWindow);
        message.lookbackDuration !== undefined && (obj.lookbackDuration = (message.lookbackDuration || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? Long.fromValue(object.votePeriod) : Long.UZERO;
        message.voteThreshold = object.voteThreshold ?? "";
        message.rewardBand = object.rewardBand ?? "";
        message.whitelist = object.whitelist?.map(e => Denom.fromPartial(e)) || [];
        message.slashFraction = object.slashFraction ?? "";
        message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? Long.fromValue(object.slashWindow) : Long.UZERO;
        message.minValidPerWindow = object.minValidPerWindow ?? "";
        message.lookbackDuration = object.lookbackDuration !== undefined && object.lookbackDuration !== null ? Long.fromValue(object.lookbackDuration) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.vote_period !== undefined && object.vote_period !== null) {
            message.votePeriod = Long.fromString(object.vote_period);
        }
        if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
            message.voteThreshold = object.vote_threshold;
        }
        if (object.reward_band !== undefined && object.reward_band !== null) {
            message.rewardBand = object.reward_band;
        }
        message.whitelist = object.whitelist?.map(e => Denom.fromAmino(e)) || [];
        if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
            message.slashFraction = object.slash_fraction;
        }
        if (object.slash_window !== undefined && object.slash_window !== null) {
            message.slashWindow = Long.fromString(object.slash_window);
        }
        if (object.min_valid_per_window !== undefined && object.min_valid_per_window !== null) {
            message.minValidPerWindow = object.min_valid_per_window;
        }
        if (object.lookback_duration !== undefined && object.lookback_duration !== null) {
            message.lookbackDuration = Long.fromString(object.lookback_duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote_period = message.votePeriod ? message.votePeriod.toString() : undefined;
        obj.vote_threshold = message.voteThreshold;
        obj.reward_band = message.rewardBand;
        if (message.whitelist) {
            obj.whitelist = message.whitelist.map(e => e ? Denom.toAmino(e) : undefined);
        }
        else {
            obj.whitelist = [];
        }
        obj.slash_fraction = message.slashFraction;
        obj.slash_window = message.slashWindow ? message.slashWindow.toString() : undefined;
        obj.min_valid_per_window = message.minValidPerWindow;
        obj.lookback_duration = message.lookbackDuration ? message.lookbackDuration.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseDenom() {
    return {
        name: ""
    };
}
export const Denom = {
    typeUrl: "/seiprotocol.seichain.oracle.Denom",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenom();
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
        const message = createBaseDenom();
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenom();
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
        return Denom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Denom.decode(message.value);
    },
    toProto(message) {
        return Denom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.Denom",
            value: Denom.encode(message).finish()
        };
    }
};
function createBaseAggregateExchangeRateVote() {
    return {
        exchangeRateTuples: [],
        voter: ""
    };
}
export const AggregateExchangeRateVote = {
    typeUrl: "/seiprotocol.seichain.oracle.AggregateExchangeRateVote",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.exchangeRateTuples) {
            ExchangeRateTuple.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateExchangeRateVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.voter = reader.string();
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
            exchangeRateTuples: Array.isArray(object?.exchangeRateTuples) ? object.exchangeRateTuples.map((e) => ExchangeRateTuple.fromJSON(e)) : [],
            voter: isSet(object.voter) ? String(object.voter) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.exchangeRateTuples) {
            obj.exchangeRateTuples = message.exchangeRateTuples.map(e => e ? ExchangeRateTuple.toJSON(e) : undefined);
        }
        else {
            obj.exchangeRateTuples = [];
        }
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAggregateExchangeRateVote();
        message.exchangeRateTuples = object.exchangeRateTuples?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
        message.voter = object.voter ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAggregateExchangeRateVote();
        message.exchangeRateTuples = object.exchange_rate_tuples?.map(e => ExchangeRateTuple.fromAmino(e)) || [];
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.exchangeRateTuples) {
            obj.exchange_rate_tuples = message.exchangeRateTuples.map(e => e ? ExchangeRateTuple.toAmino(e) : undefined);
        }
        else {
            obj.exchange_rate_tuples = [];
        }
        obj.voter = message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return AggregateExchangeRateVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AggregateExchangeRateVote.decode(message.value);
    },
    toProto(message) {
        return AggregateExchangeRateVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.AggregateExchangeRateVote",
            value: AggregateExchangeRateVote.encode(message).finish()
        };
    }
};
function createBaseExchangeRateTuple() {
    return {
        denom: "",
        exchangeRate: ""
    };
}
export const ExchangeRateTuple = {
    typeUrl: "/seiprotocol.seichain.oracle.ExchangeRateTuple",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exchangeRate !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExchangeRateTuple();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
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
            exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExchangeRateTuple();
        message.denom = object.denom ?? "";
        message.exchangeRate = object.exchangeRate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseExchangeRateTuple();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchangeRate = object.exchange_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.exchange_rate = message.exchangeRate;
        return obj;
    },
    fromAminoMsg(object) {
        return ExchangeRateTuple.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExchangeRateTuple.decode(message.value);
    },
    toProto(message) {
        return ExchangeRateTuple.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.ExchangeRateTuple",
            value: ExchangeRateTuple.encode(message).finish()
        };
    }
};
function createBaseOracleExchangeRate() {
    return {
        exchangeRate: "",
        lastUpdate: "",
        lastUpdateTimestamp: Long.ZERO
    };
}
export const OracleExchangeRate = {
    typeUrl: "/seiprotocol.seichain.oracle.OracleExchangeRate",
    encode(message, writer = _m0.Writer.create()) {
        if (message.exchangeRate !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
        }
        if (message.lastUpdate !== "") {
            writer.uint32(18).string(message.lastUpdate);
        }
        if (!message.lastUpdateTimestamp.isZero()) {
            writer.uint32(24).int64(message.lastUpdateTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleExchangeRate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.lastUpdate = reader.string();
                    break;
                case 3:
                    message.lastUpdateTimestamp = reader.int64();
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
            exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
            lastUpdate: isSet(object.lastUpdate) ? String(object.lastUpdate) : "",
            lastUpdateTimestamp: isSet(object.lastUpdateTimestamp) ? Long.fromValue(object.lastUpdateTimestamp) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
        message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
        message.lastUpdateTimestamp !== undefined && (obj.lastUpdateTimestamp = (message.lastUpdateTimestamp || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOracleExchangeRate();
        message.exchangeRate = object.exchangeRate ?? "";
        message.lastUpdate = object.lastUpdate ?? "";
        message.lastUpdateTimestamp = object.lastUpdateTimestamp !== undefined && object.lastUpdateTimestamp !== null ? Long.fromValue(object.lastUpdateTimestamp) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseOracleExchangeRate();
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchangeRate = object.exchange_rate;
        }
        if (object.last_update !== undefined && object.last_update !== null) {
            message.lastUpdate = object.last_update;
        }
        if (object.last_update_timestamp !== undefined && object.last_update_timestamp !== null) {
            message.lastUpdateTimestamp = Long.fromString(object.last_update_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exchange_rate = message.exchangeRate;
        obj.last_update = message.lastUpdate;
        obj.last_update_timestamp = message.lastUpdateTimestamp ? message.lastUpdateTimestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return OracleExchangeRate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OracleExchangeRate.decode(message.value);
    },
    toProto(message) {
        return OracleExchangeRate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.OracleExchangeRate",
            value: OracleExchangeRate.encode(message).finish()
        };
    }
};
function createBasePriceSnapshotItem() {
    return {
        denom: "",
        oracleExchangeRate: OracleExchangeRate.fromPartial({})
    };
}
export const PriceSnapshotItem = {
    typeUrl: "/seiprotocol.seichain.oracle.PriceSnapshotItem",
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
        const message = createBasePriceSnapshotItem();
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
        const message = createBasePriceSnapshotItem();
        message.denom = object.denom ?? "";
        message.oracleExchangeRate = object.oracleExchangeRate !== undefined && object.oracleExchangeRate !== null ? OracleExchangeRate.fromPartial(object.oracleExchangeRate) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePriceSnapshotItem();
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
        return PriceSnapshotItem.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PriceSnapshotItem.decode(message.value);
    },
    toProto(message) {
        return PriceSnapshotItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.PriceSnapshotItem",
            value: PriceSnapshotItem.encode(message).finish()
        };
    }
};
function createBasePriceSnapshot() {
    return {
        snapshotTimestamp: Long.ZERO,
        priceSnapshotItems: []
    };
}
export const PriceSnapshot = {
    typeUrl: "/seiprotocol.seichain.oracle.PriceSnapshot",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.snapshotTimestamp.isZero()) {
            writer.uint32(8).int64(message.snapshotTimestamp);
        }
        for (const v of message.priceSnapshotItems) {
            PriceSnapshotItem.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotTimestamp = reader.int64();
                    break;
                case 2:
                    message.priceSnapshotItems.push(PriceSnapshotItem.decode(reader, reader.uint32()));
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
            snapshotTimestamp: isSet(object.snapshotTimestamp) ? Long.fromValue(object.snapshotTimestamp) : Long.ZERO,
            priceSnapshotItems: Array.isArray(object?.priceSnapshotItems) ? object.priceSnapshotItems.map((e) => PriceSnapshotItem.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.snapshotTimestamp !== undefined && (obj.snapshotTimestamp = (message.snapshotTimestamp || Long.ZERO).toString());
        if (message.priceSnapshotItems) {
            obj.priceSnapshotItems = message.priceSnapshotItems.map(e => e ? PriceSnapshotItem.toJSON(e) : undefined);
        }
        else {
            obj.priceSnapshotItems = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePriceSnapshot();
        message.snapshotTimestamp = object.snapshotTimestamp !== undefined && object.snapshotTimestamp !== null ? Long.fromValue(object.snapshotTimestamp) : Long.ZERO;
        message.priceSnapshotItems = object.priceSnapshotItems?.map(e => PriceSnapshotItem.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePriceSnapshot();
        if (object.snapshot_timestamp !== undefined && object.snapshot_timestamp !== null) {
            message.snapshotTimestamp = Long.fromString(object.snapshot_timestamp);
        }
        message.priceSnapshotItems = object.price_snapshot_items?.map(e => PriceSnapshotItem.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.snapshot_timestamp = message.snapshotTimestamp ? message.snapshotTimestamp.toString() : undefined;
        if (message.priceSnapshotItems) {
            obj.price_snapshot_items = message.priceSnapshotItems.map(e => e ? PriceSnapshotItem.toAmino(e) : undefined);
        }
        else {
            obj.price_snapshot_items = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PriceSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PriceSnapshot.decode(message.value);
    },
    toProto(message) {
        return PriceSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.PriceSnapshot",
            value: PriceSnapshot.encode(message).finish()
        };
    }
};
function createBaseOracleTwap() {
    return {
        denom: "",
        twap: "",
        lookbackSeconds: Long.ZERO
    };
}
export const OracleTwap = {
    typeUrl: "/seiprotocol.seichain.oracle.OracleTwap",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.twap !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.twap, 18).atomics);
        }
        if (!message.lookbackSeconds.isZero()) {
            writer.uint32(24).int64(message.lookbackSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleTwap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.twap = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.lookbackSeconds = reader.int64();
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
            twap: isSet(object.twap) ? String(object.twap) : "",
            lookbackSeconds: isSet(object.lookbackSeconds) ? Long.fromValue(object.lookbackSeconds) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.twap !== undefined && (obj.twap = message.twap);
        message.lookbackSeconds !== undefined && (obj.lookbackSeconds = (message.lookbackSeconds || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOracleTwap();
        message.denom = object.denom ?? "";
        message.twap = object.twap ?? "";
        message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? Long.fromValue(object.lookbackSeconds) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseOracleTwap();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.twap !== undefined && object.twap !== null) {
            message.twap = object.twap;
        }
        if (object.lookback_seconds !== undefined && object.lookback_seconds !== null) {
            message.lookbackSeconds = Long.fromString(object.lookback_seconds);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.twap = message.twap;
        obj.lookback_seconds = message.lookbackSeconds ? message.lookbackSeconds.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return OracleTwap.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OracleTwap.decode(message.value);
    },
    toProto(message) {
        return OracleTwap.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.OracleTwap",
            value: OracleTwap.encode(message).finish()
        };
    }
};
function createBaseVotePenaltyCounter() {
    return {
        missCount: Long.UZERO,
        abstainCount: Long.UZERO,
        successCount: Long.UZERO
    };
}
export const VotePenaltyCounter = {
    typeUrl: "/seiprotocol.seichain.oracle.VotePenaltyCounter",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.missCount.isZero()) {
            writer.uint32(8).uint64(message.missCount);
        }
        if (!message.abstainCount.isZero()) {
            writer.uint32(16).uint64(message.abstainCount);
        }
        if (!message.successCount.isZero()) {
            writer.uint32(24).uint64(message.successCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotePenaltyCounter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.missCount = reader.uint64();
                    break;
                case 2:
                    message.abstainCount = reader.uint64();
                    break;
                case 3:
                    message.successCount = reader.uint64();
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
            missCount: isSet(object.missCount) ? Long.fromValue(object.missCount) : Long.UZERO,
            abstainCount: isSet(object.abstainCount) ? Long.fromValue(object.abstainCount) : Long.UZERO,
            successCount: isSet(object.successCount) ? Long.fromValue(object.successCount) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.missCount !== undefined && (obj.missCount = (message.missCount || Long.UZERO).toString());
        message.abstainCount !== undefined && (obj.abstainCount = (message.abstainCount || Long.UZERO).toString());
        message.successCount !== undefined && (obj.successCount = (message.successCount || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVotePenaltyCounter();
        message.missCount = object.missCount !== undefined && object.missCount !== null ? Long.fromValue(object.missCount) : Long.UZERO;
        message.abstainCount = object.abstainCount !== undefined && object.abstainCount !== null ? Long.fromValue(object.abstainCount) : Long.UZERO;
        message.successCount = object.successCount !== undefined && object.successCount !== null ? Long.fromValue(object.successCount) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVotePenaltyCounter();
        if (object.miss_count !== undefined && object.miss_count !== null) {
            message.missCount = Long.fromString(object.miss_count);
        }
        if (object.abstain_count !== undefined && object.abstain_count !== null) {
            message.abstainCount = Long.fromString(object.abstain_count);
        }
        if (object.success_count !== undefined && object.success_count !== null) {
            message.successCount = Long.fromString(object.success_count);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.miss_count = message.missCount ? message.missCount.toString() : undefined;
        obj.abstain_count = message.abstainCount ? message.abstainCount.toString() : undefined;
        obj.success_count = message.successCount ? message.successCount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return VotePenaltyCounter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VotePenaltyCounter.decode(message.value);
    },
    toProto(message) {
        return VotePenaltyCounter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.VotePenaltyCounter",
            value: VotePenaltyCounter.encode(message).finish()
        };
    }
};
