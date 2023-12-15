import { Params, ParamsAmino, ParamsSDKType, ExchangeRateTuple, ExchangeRateTupleAmino, ExchangeRateTupleSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteAmino, AggregateExchangeRateVoteSDKType, PriceSnapshot, PriceSnapshotAmino, PriceSnapshotSDKType, VotePenaltyCounter, VotePenaltyCounterAmino, VotePenaltyCounterSDKType } from "./oracle";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    params: Params;
    feederDelegations: FeederDelegation[];
    exchangeRates: ExchangeRateTuple[];
    penaltyCounters: PenaltyCounter[];
    aggregateExchangeRateVotes: AggregateExchangeRateVote[];
    priceSnapshots: PriceSnapshot[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    params?: ParamsAmino;
    feeder_delegations?: FeederDelegationAmino[];
    exchange_rates?: ExchangeRateTupleAmino[];
    penalty_counters?: PenaltyCounterAmino[];
    aggregate_exchange_rate_votes?: AggregateExchangeRateVoteAmino[];
    price_snapshots?: PriceSnapshotAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/seiprotocol.seichain.oracle.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    feeder_delegations: FeederDelegationSDKType[];
    exchange_rates: ExchangeRateTupleSDKType[];
    penalty_counters: PenaltyCounterSDKType[];
    aggregate_exchange_rate_votes: AggregateExchangeRateVoteSDKType[];
    price_snapshots: PriceSnapshotSDKType[];
}
export interface FeederDelegation {
    feederAddress: string;
    validatorAddress: string;
}
export interface FeederDelegationProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.FeederDelegation";
    value: Uint8Array;
}
export interface FeederDelegationAmino {
    feeder_address?: string;
    validator_address?: string;
}
export interface FeederDelegationAminoMsg {
    type: "/seiprotocol.seichain.oracle.FeederDelegation";
    value: FeederDelegationAmino;
}
export interface FeederDelegationSDKType {
    feeder_address: string;
    validator_address: string;
}
export interface PenaltyCounter {
    validatorAddress: string;
    votePenaltyCounter?: VotePenaltyCounter;
}
export interface PenaltyCounterProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.PenaltyCounter";
    value: Uint8Array;
}
export interface PenaltyCounterAmino {
    validator_address?: string;
    vote_penalty_counter?: VotePenaltyCounterAmino;
}
export interface PenaltyCounterAminoMsg {
    type: "/seiprotocol.seichain.oracle.PenaltyCounter";
    value: PenaltyCounterAmino;
}
export interface PenaltyCounterSDKType {
    validator_address: string;
    vote_penalty_counter?: VotePenaltyCounterSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const FeederDelegation: {
    typeUrl: string;
    encode(message: FeederDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeederDelegation;
    fromJSON(object: any): FeederDelegation;
    toJSON(message: FeederDelegation): unknown;
    fromPartial(object: Partial<FeederDelegation>): FeederDelegation;
    fromAmino(object: FeederDelegationAmino): FeederDelegation;
    toAmino(message: FeederDelegation): FeederDelegationAmino;
    fromAminoMsg(object: FeederDelegationAminoMsg): FeederDelegation;
    fromProtoMsg(message: FeederDelegationProtoMsg): FeederDelegation;
    toProto(message: FeederDelegation): Uint8Array;
    toProtoMsg(message: FeederDelegation): FeederDelegationProtoMsg;
};
export declare const PenaltyCounter: {
    typeUrl: string;
    encode(message: PenaltyCounter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PenaltyCounter;
    fromJSON(object: any): PenaltyCounter;
    toJSON(message: PenaltyCounter): unknown;
    fromPartial(object: Partial<PenaltyCounter>): PenaltyCounter;
    fromAmino(object: PenaltyCounterAmino): PenaltyCounter;
    toAmino(message: PenaltyCounter): PenaltyCounterAmino;
    fromAminoMsg(object: PenaltyCounterAminoMsg): PenaltyCounter;
    fromProtoMsg(message: PenaltyCounterProtoMsg): PenaltyCounter;
    toProto(message: PenaltyCounter): Uint8Array;
    toProtoMsg(message: PenaltyCounter): PenaltyCounterProtoMsg;
};
