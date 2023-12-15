import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    /** The number of blocks per voting window, at the end of the vote period, the oracle votes are assessed and exchange rates are calculated. If the vote period is 1 this is equivalent to having oracle votes assessed and exchange rates calculated in each block. */
    votePeriod: Long;
    voteThreshold: string;
    rewardBand: string;
    whitelist: Denom[];
    slashFraction: string;
    /** The interval in blocks at which the oracle module will assess validator penalty counters, and penalize validators with too poor performance. */
    slashWindow: Long;
    /** The minimum percentage of voting windows for which a validator must have `success`es in order to not be penalized at the end of the slash window. */
    minValidPerWindow: string;
    lookbackDuration: Long;
}
export interface ParamsProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /** The number of blocks per voting window, at the end of the vote period, the oracle votes are assessed and exchange rates are calculated. If the vote period is 1 this is equivalent to having oracle votes assessed and exchange rates calculated in each block. */
    vote_period?: string;
    vote_threshold?: string;
    reward_band?: string;
    whitelist?: DenomAmino[];
    slash_fraction?: string;
    /** The interval in blocks at which the oracle module will assess validator penalty counters, and penalize validators with too poor performance. */
    slash_window?: string;
    /** The minimum percentage of voting windows for which a validator must have `success`es in order to not be penalized at the end of the slash window. */
    min_valid_per_window?: string;
    lookback_duration?: string;
}
export interface ParamsAminoMsg {
    type: "/seiprotocol.seichain.oracle.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    vote_period: Long;
    vote_threshold: string;
    reward_band: string;
    whitelist: DenomSDKType[];
    slash_fraction: string;
    slash_window: Long;
    min_valid_per_window: string;
    lookback_duration: Long;
}
export interface Denom {
    name: string;
}
export interface DenomProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.Denom";
    value: Uint8Array;
}
export interface DenomAmino {
    name?: string;
}
export interface DenomAminoMsg {
    type: "/seiprotocol.seichain.oracle.Denom";
    value: DenomAmino;
}
export interface DenomSDKType {
    name: string;
}
export interface AggregateExchangeRateVote {
    exchangeRateTuples: ExchangeRateTuple[];
    voter: string;
}
export interface AggregateExchangeRateVoteProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.AggregateExchangeRateVote";
    value: Uint8Array;
}
export interface AggregateExchangeRateVoteAmino {
    exchange_rate_tuples?: ExchangeRateTupleAmino[];
    voter?: string;
}
export interface AggregateExchangeRateVoteAminoMsg {
    type: "/seiprotocol.seichain.oracle.AggregateExchangeRateVote";
    value: AggregateExchangeRateVoteAmino;
}
export interface AggregateExchangeRateVoteSDKType {
    exchange_rate_tuples: ExchangeRateTupleSDKType[];
    voter: string;
}
export interface ExchangeRateTuple {
    denom: string;
    exchangeRate: string;
}
export interface ExchangeRateTupleProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.ExchangeRateTuple";
    value: Uint8Array;
}
export interface ExchangeRateTupleAmino {
    denom?: string;
    exchange_rate?: string;
}
export interface ExchangeRateTupleAminoMsg {
    type: "/seiprotocol.seichain.oracle.ExchangeRateTuple";
    value: ExchangeRateTupleAmino;
}
export interface ExchangeRateTupleSDKType {
    denom: string;
    exchange_rate: string;
}
export interface OracleExchangeRate {
    exchangeRate: string;
    lastUpdate: string;
    lastUpdateTimestamp: Long;
}
export interface OracleExchangeRateProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.OracleExchangeRate";
    value: Uint8Array;
}
export interface OracleExchangeRateAmino {
    exchange_rate?: string;
    last_update?: string;
    last_update_timestamp?: string;
}
export interface OracleExchangeRateAminoMsg {
    type: "/seiprotocol.seichain.oracle.OracleExchangeRate";
    value: OracleExchangeRateAmino;
}
export interface OracleExchangeRateSDKType {
    exchange_rate: string;
    last_update: string;
    last_update_timestamp: Long;
}
export interface PriceSnapshotItem {
    denom: string;
    oracleExchangeRate: OracleExchangeRate;
}
export interface PriceSnapshotItemProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.PriceSnapshotItem";
    value: Uint8Array;
}
export interface PriceSnapshotItemAmino {
    denom?: string;
    oracle_exchange_rate?: OracleExchangeRateAmino;
}
export interface PriceSnapshotItemAminoMsg {
    type: "/seiprotocol.seichain.oracle.PriceSnapshotItem";
    value: PriceSnapshotItemAmino;
}
export interface PriceSnapshotItemSDKType {
    denom: string;
    oracle_exchange_rate: OracleExchangeRateSDKType;
}
export interface PriceSnapshot {
    snapshotTimestamp: Long;
    priceSnapshotItems: PriceSnapshotItem[];
}
export interface PriceSnapshotProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.PriceSnapshot";
    value: Uint8Array;
}
export interface PriceSnapshotAmino {
    snapshot_timestamp?: string;
    price_snapshot_items?: PriceSnapshotItemAmino[];
}
export interface PriceSnapshotAminoMsg {
    type: "/seiprotocol.seichain.oracle.PriceSnapshot";
    value: PriceSnapshotAmino;
}
export interface PriceSnapshotSDKType {
    snapshot_timestamp: Long;
    price_snapshot_items: PriceSnapshotItemSDKType[];
}
export interface OracleTwap {
    denom: string;
    twap: string;
    lookbackSeconds: Long;
}
export interface OracleTwapProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.OracleTwap";
    value: Uint8Array;
}
export interface OracleTwapAmino {
    denom?: string;
    twap?: string;
    lookback_seconds?: string;
}
export interface OracleTwapAminoMsg {
    type: "/seiprotocol.seichain.oracle.OracleTwap";
    value: OracleTwapAmino;
}
export interface OracleTwapSDKType {
    denom: string;
    twap: string;
    lookback_seconds: Long;
}
export interface VotePenaltyCounter {
    missCount: Long;
    abstainCount: Long;
    successCount: Long;
}
export interface VotePenaltyCounterProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.VotePenaltyCounter";
    value: Uint8Array;
}
export interface VotePenaltyCounterAmino {
    miss_count?: string;
    abstain_count?: string;
    success_count?: string;
}
export interface VotePenaltyCounterAminoMsg {
    type: "/seiprotocol.seichain.oracle.VotePenaltyCounter";
    value: VotePenaltyCounterAmino;
}
export interface VotePenaltyCounterSDKType {
    miss_count: Long;
    abstain_count: Long;
    success_count: Long;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Denom: {
    typeUrl: string;
    encode(message: Denom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Denom;
    fromJSON(object: any): Denom;
    toJSON(message: Denom): unknown;
    fromPartial(object: Partial<Denom>): Denom;
    fromAmino(object: DenomAmino): Denom;
    toAmino(message: Denom): DenomAmino;
    fromAminoMsg(object: DenomAminoMsg): Denom;
    fromProtoMsg(message: DenomProtoMsg): Denom;
    toProto(message: Denom): Uint8Array;
    toProtoMsg(message: Denom): DenomProtoMsg;
};
export declare const AggregateExchangeRateVote: {
    typeUrl: string;
    encode(message: AggregateExchangeRateVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRateVote;
    fromJSON(object: any): AggregateExchangeRateVote;
    toJSON(message: AggregateExchangeRateVote): unknown;
    fromPartial(object: Partial<AggregateExchangeRateVote>): AggregateExchangeRateVote;
    fromAmino(object: AggregateExchangeRateVoteAmino): AggregateExchangeRateVote;
    toAmino(message: AggregateExchangeRateVote): AggregateExchangeRateVoteAmino;
    fromAminoMsg(object: AggregateExchangeRateVoteAminoMsg): AggregateExchangeRateVote;
    fromProtoMsg(message: AggregateExchangeRateVoteProtoMsg): AggregateExchangeRateVote;
    toProto(message: AggregateExchangeRateVote): Uint8Array;
    toProtoMsg(message: AggregateExchangeRateVote): AggregateExchangeRateVoteProtoMsg;
};
export declare const ExchangeRateTuple: {
    typeUrl: string;
    encode(message: ExchangeRateTuple, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple;
    fromJSON(object: any): ExchangeRateTuple;
    toJSON(message: ExchangeRateTuple): unknown;
    fromPartial(object: Partial<ExchangeRateTuple>): ExchangeRateTuple;
    fromAmino(object: ExchangeRateTupleAmino): ExchangeRateTuple;
    toAmino(message: ExchangeRateTuple): ExchangeRateTupleAmino;
    fromAminoMsg(object: ExchangeRateTupleAminoMsg): ExchangeRateTuple;
    fromProtoMsg(message: ExchangeRateTupleProtoMsg): ExchangeRateTuple;
    toProto(message: ExchangeRateTuple): Uint8Array;
    toProtoMsg(message: ExchangeRateTuple): ExchangeRateTupleProtoMsg;
};
export declare const OracleExchangeRate: {
    typeUrl: string;
    encode(message: OracleExchangeRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleExchangeRate;
    fromJSON(object: any): OracleExchangeRate;
    toJSON(message: OracleExchangeRate): unknown;
    fromPartial(object: Partial<OracleExchangeRate>): OracleExchangeRate;
    fromAmino(object: OracleExchangeRateAmino): OracleExchangeRate;
    toAmino(message: OracleExchangeRate): OracleExchangeRateAmino;
    fromAminoMsg(object: OracleExchangeRateAminoMsg): OracleExchangeRate;
    fromProtoMsg(message: OracleExchangeRateProtoMsg): OracleExchangeRate;
    toProto(message: OracleExchangeRate): Uint8Array;
    toProtoMsg(message: OracleExchangeRate): OracleExchangeRateProtoMsg;
};
export declare const PriceSnapshotItem: {
    typeUrl: string;
    encode(message: PriceSnapshotItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceSnapshotItem;
    fromJSON(object: any): PriceSnapshotItem;
    toJSON(message: PriceSnapshotItem): unknown;
    fromPartial(object: Partial<PriceSnapshotItem>): PriceSnapshotItem;
    fromAmino(object: PriceSnapshotItemAmino): PriceSnapshotItem;
    toAmino(message: PriceSnapshotItem): PriceSnapshotItemAmino;
    fromAminoMsg(object: PriceSnapshotItemAminoMsg): PriceSnapshotItem;
    fromProtoMsg(message: PriceSnapshotItemProtoMsg): PriceSnapshotItem;
    toProto(message: PriceSnapshotItem): Uint8Array;
    toProtoMsg(message: PriceSnapshotItem): PriceSnapshotItemProtoMsg;
};
export declare const PriceSnapshot: {
    typeUrl: string;
    encode(message: PriceSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceSnapshot;
    fromJSON(object: any): PriceSnapshot;
    toJSON(message: PriceSnapshot): unknown;
    fromPartial(object: Partial<PriceSnapshot>): PriceSnapshot;
    fromAmino(object: PriceSnapshotAmino): PriceSnapshot;
    toAmino(message: PriceSnapshot): PriceSnapshotAmino;
    fromAminoMsg(object: PriceSnapshotAminoMsg): PriceSnapshot;
    fromProtoMsg(message: PriceSnapshotProtoMsg): PriceSnapshot;
    toProto(message: PriceSnapshot): Uint8Array;
    toProtoMsg(message: PriceSnapshot): PriceSnapshotProtoMsg;
};
export declare const OracleTwap: {
    typeUrl: string;
    encode(message: OracleTwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleTwap;
    fromJSON(object: any): OracleTwap;
    toJSON(message: OracleTwap): unknown;
    fromPartial(object: Partial<OracleTwap>): OracleTwap;
    fromAmino(object: OracleTwapAmino): OracleTwap;
    toAmino(message: OracleTwap): OracleTwapAmino;
    fromAminoMsg(object: OracleTwapAminoMsg): OracleTwap;
    fromProtoMsg(message: OracleTwapProtoMsg): OracleTwap;
    toProto(message: OracleTwap): Uint8Array;
    toProtoMsg(message: OracleTwap): OracleTwapProtoMsg;
};
export declare const VotePenaltyCounter: {
    typeUrl: string;
    encode(message: VotePenaltyCounter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotePenaltyCounter;
    fromJSON(object: any): VotePenaltyCounter;
    toJSON(message: VotePenaltyCounter): unknown;
    fromPartial(object: Partial<VotePenaltyCounter>): VotePenaltyCounter;
    fromAmino(object: VotePenaltyCounterAmino): VotePenaltyCounter;
    toAmino(message: VotePenaltyCounter): VotePenaltyCounterAmino;
    fromAminoMsg(object: VotePenaltyCounterAminoMsg): VotePenaltyCounter;
    fromProtoMsg(message: VotePenaltyCounterProtoMsg): VotePenaltyCounter;
    toProto(message: VotePenaltyCounter): Uint8Array;
    toProtoMsg(message: VotePenaltyCounter): VotePenaltyCounterProtoMsg;
};
