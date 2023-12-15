import { Params, ExchangeRateTuple, AggregateExchangeRateVote, PriceSnapshot, VotePenaltyCounter } from "./oracle";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        feederDelegations: [],
        exchangeRates: [],
        penaltyCounters: [],
        aggregateExchangeRateVotes: [],
        priceSnapshots: []
    };
}
export const GenesisState = {
    typeUrl: "/seiprotocol.seichain.oracle.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feederDelegations) {
            FeederDelegation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.exchangeRates) {
            ExchangeRateTuple.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.penaltyCounters) {
            PenaltyCounter.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.aggregateExchangeRateVotes) {
            AggregateExchangeRateVote.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.priceSnapshots) {
            PriceSnapshot.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feederDelegations.push(FeederDelegation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.exchangeRates.push(ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.penaltyCounters.push(PenaltyCounter.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.aggregateExchangeRateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
                    break;
                case 7:
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            feederDelegations: Array.isArray(object?.feederDelegations) ? object.feederDelegations.map((e) => FeederDelegation.fromJSON(e)) : [],
            exchangeRates: Array.isArray(object?.exchangeRates) ? object.exchangeRates.map((e) => ExchangeRateTuple.fromJSON(e)) : [],
            penaltyCounters: Array.isArray(object?.penaltyCounters) ? object.penaltyCounters.map((e) => PenaltyCounter.fromJSON(e)) : [],
            aggregateExchangeRateVotes: Array.isArray(object?.aggregateExchangeRateVotes) ? object.aggregateExchangeRateVotes.map((e) => AggregateExchangeRateVote.fromJSON(e)) : [],
            priceSnapshots: Array.isArray(object?.priceSnapshots) ? object.priceSnapshots.map((e) => PriceSnapshot.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.feederDelegations) {
            obj.feederDelegations = message.feederDelegations.map(e => e ? FeederDelegation.toJSON(e) : undefined);
        }
        else {
            obj.feederDelegations = [];
        }
        if (message.exchangeRates) {
            obj.exchangeRates = message.exchangeRates.map(e => e ? ExchangeRateTuple.toJSON(e) : undefined);
        }
        else {
            obj.exchangeRates = [];
        }
        if (message.penaltyCounters) {
            obj.penaltyCounters = message.penaltyCounters.map(e => e ? PenaltyCounter.toJSON(e) : undefined);
        }
        else {
            obj.penaltyCounters = [];
        }
        if (message.aggregateExchangeRateVotes) {
            obj.aggregateExchangeRateVotes = message.aggregateExchangeRateVotes.map(e => e ? AggregateExchangeRateVote.toJSON(e) : undefined);
        }
        else {
            obj.aggregateExchangeRateVotes = [];
        }
        if (message.priceSnapshots) {
            obj.priceSnapshots = message.priceSnapshots.map(e => e ? PriceSnapshot.toJSON(e) : undefined);
        }
        else {
            obj.priceSnapshots = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.feederDelegations = object.feederDelegations?.map(e => FeederDelegation.fromPartial(e)) || [];
        message.exchangeRates = object.exchangeRates?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
        message.penaltyCounters = object.penaltyCounters?.map(e => PenaltyCounter.fromPartial(e)) || [];
        message.aggregateExchangeRateVotes = object.aggregateExchangeRateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
        message.priceSnapshots = object.priceSnapshots?.map(e => PriceSnapshot.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.feederDelegations = object.feeder_delegations?.map(e => FeederDelegation.fromAmino(e)) || [];
        message.exchangeRates = object.exchange_rates?.map(e => ExchangeRateTuple.fromAmino(e)) || [];
        message.penaltyCounters = object.penalty_counters?.map(e => PenaltyCounter.fromAmino(e)) || [];
        message.aggregateExchangeRateVotes = object.aggregate_exchange_rate_votes?.map(e => AggregateExchangeRateVote.fromAmino(e)) || [];
        message.priceSnapshots = object.price_snapshots?.map(e => PriceSnapshot.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.feederDelegations) {
            obj.feeder_delegations = message.feederDelegations.map(e => e ? FeederDelegation.toAmino(e) : undefined);
        }
        else {
            obj.feeder_delegations = [];
        }
        if (message.exchangeRates) {
            obj.exchange_rates = message.exchangeRates.map(e => e ? ExchangeRateTuple.toAmino(e) : undefined);
        }
        else {
            obj.exchange_rates = [];
        }
        if (message.penaltyCounters) {
            obj.penalty_counters = message.penaltyCounters.map(e => e ? PenaltyCounter.toAmino(e) : undefined);
        }
        else {
            obj.penalty_counters = [];
        }
        if (message.aggregateExchangeRateVotes) {
            obj.aggregate_exchange_rate_votes = message.aggregateExchangeRateVotes.map(e => e ? AggregateExchangeRateVote.toAmino(e) : undefined);
        }
        else {
            obj.aggregate_exchange_rate_votes = [];
        }
        if (message.priceSnapshots) {
            obj.price_snapshots = message.priceSnapshots.map(e => e ? PriceSnapshot.toAmino(e) : undefined);
        }
        else {
            obj.price_snapshots = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseFeederDelegation() {
    return {
        feederAddress: "",
        validatorAddress: ""
    };
}
export const FeederDelegation = {
    typeUrl: "/seiprotocol.seichain.oracle.FeederDelegation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.feederAddress !== "") {
            writer.uint32(10).string(message.feederAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeederDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feederAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
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
            feederAddress: isSet(object.feederAddress) ? String(object.feederAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.feederAddress !== undefined && (obj.feederAddress = message.feederAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeederDelegation();
        message.feederAddress = object.feederAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeederDelegation();
        if (object.feeder_address !== undefined && object.feeder_address !== null) {
            message.feederAddress = object.feeder_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feeder_address = message.feederAddress;
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return FeederDelegation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeederDelegation.decode(message.value);
    },
    toProto(message) {
        return FeederDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.FeederDelegation",
            value: FeederDelegation.encode(message).finish()
        };
    }
};
function createBasePenaltyCounter() {
    return {
        validatorAddress: "",
        votePenaltyCounter: undefined
    };
}
export const PenaltyCounter = {
    typeUrl: "/seiprotocol.seichain.oracle.PenaltyCounter",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.votePenaltyCounter !== undefined) {
            VotePenaltyCounter.encode(message.votePenaltyCounter, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePenaltyCounter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            votePenaltyCounter: isSet(object.votePenaltyCounter) ? VotePenaltyCounter.fromJSON(object.votePenaltyCounter) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.votePenaltyCounter !== undefined && (obj.votePenaltyCounter = message.votePenaltyCounter ? VotePenaltyCounter.toJSON(message.votePenaltyCounter) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePenaltyCounter();
        message.validatorAddress = object.validatorAddress ?? "";
        message.votePenaltyCounter = object.votePenaltyCounter !== undefined && object.votePenaltyCounter !== null ? VotePenaltyCounter.fromPartial(object.votePenaltyCounter) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePenaltyCounter();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.vote_penalty_counter !== undefined && object.vote_penalty_counter !== null) {
            message.votePenaltyCounter = VotePenaltyCounter.fromAmino(object.vote_penalty_counter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.vote_penalty_counter = message.votePenaltyCounter ? VotePenaltyCounter.toAmino(message.votePenaltyCounter) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PenaltyCounter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PenaltyCounter.decode(message.value);
    },
    toProto(message) {
        return PenaltyCounter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.PenaltyCounter",
            value: PenaltyCounter.encode(message).finish()
        };
    }
};
