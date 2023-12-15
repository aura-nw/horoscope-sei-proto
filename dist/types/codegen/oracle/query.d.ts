import { OracleExchangeRate, OracleExchangeRateAmino, OracleExchangeRateSDKType, PriceSnapshot, PriceSnapshotAmino, PriceSnapshotSDKType, OracleTwap, OracleTwapAmino, OracleTwapSDKType, VotePenaltyCounter, VotePenaltyCounterAmino, VotePenaltyCounterSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
    /** denom defines the denomination to query for. */
    denom: string;
}
export interface QueryExchangeRateRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateRequest";
    value: Uint8Array;
}
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequestAmino {
    /** denom defines the denomination to query for. */
    denom?: string;
}
export interface QueryExchangeRateRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryExchangeRateRequest";
    value: QueryExchangeRateRequestAmino;
}
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequestSDKType {
    denom: string;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
    /** exchange_rate defines the exchange rate of Sei denominated in various Sei */
    oracleExchangeRate: OracleExchangeRate;
}
export interface QueryExchangeRateResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateResponse";
    value: Uint8Array;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponseAmino {
    /** exchange_rate defines the exchange rate of Sei denominated in various Sei */
    oracle_exchange_rate?: OracleExchangeRateAmino;
}
export interface QueryExchangeRateResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryExchangeRateResponse";
    value: QueryExchangeRateResponseAmino;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponseSDKType {
    oracle_exchange_rate: OracleExchangeRateSDKType;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {
}
export interface QueryExchangeRatesRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesRequest";
    value: Uint8Array;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestAmino {
}
export interface QueryExchangeRatesRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryExchangeRatesRequest";
    value: QueryExchangeRatesRequestAmino;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestSDKType {
}
export interface DenomOracleExchangeRatePair {
    denom: string;
    oracleExchangeRate: OracleExchangeRate;
}
export interface DenomOracleExchangeRatePairProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.DenomOracleExchangeRatePair";
    value: Uint8Array;
}
export interface DenomOracleExchangeRatePairAmino {
    denom?: string;
    oracle_exchange_rate?: OracleExchangeRateAmino;
}
export interface DenomOracleExchangeRatePairAminoMsg {
    type: "/seiprotocol.seichain.oracle.DenomOracleExchangeRatePair";
    value: DenomOracleExchangeRatePairAmino;
}
export interface DenomOracleExchangeRatePairSDKType {
    denom: string;
    oracle_exchange_rate: OracleExchangeRateSDKType;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
    /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
    denomOracleExchangeRatePairs: DenomOracleExchangeRatePair[];
}
export interface QueryExchangeRatesResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesResponse";
    value: Uint8Array;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseAmino {
    /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
    denom_oracle_exchange_rate_pairs?: DenomOracleExchangeRatePairAmino[];
}
export interface QueryExchangeRatesResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryExchangeRatesResponse";
    value: QueryExchangeRatesResponseAmino;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
    denom_oracle_exchange_rate_pairs: DenomOracleExchangeRatePairSDKType[];
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {
}
export interface QueryActivesRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryActivesRequest";
    value: Uint8Array;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestAmino {
}
export interface QueryActivesRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryActivesRequest";
    value: QueryActivesRequestAmino;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestSDKType {
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
    /** actives defines a list of the denomination which oracle prices aggreed upon. */
    actives: string[];
}
export interface QueryActivesResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryActivesResponse";
    value: Uint8Array;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponseAmino {
    /** actives defines a list of the denomination which oracle prices aggreed upon. */
    actives?: string[];
}
export interface QueryActivesResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryActivesResponse";
    value: QueryActivesResponseAmino;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponseSDKType {
    actives: string[];
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {
}
export interface QueryVoteTargetsRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsRequest";
    value: Uint8Array;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestAmino {
}
export interface QueryVoteTargetsRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryVoteTargetsRequest";
    value: QueryVoteTargetsRequestAmino;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestSDKType {
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
    /**
     * vote_targets defines a list of the denomination in which everyone
     * should vote in the current vote period.
     */
    voteTargets: string[];
}
export interface QueryVoteTargetsResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsResponse";
    value: Uint8Array;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponseAmino {
    /**
     * vote_targets defines a list of the denomination in which everyone
     * should vote in the current vote period.
     */
    vote_targets?: string[];
}
export interface QueryVoteTargetsResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryVoteTargetsResponse";
    value: QueryVoteTargetsResponseAmino;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponseSDKType {
    vote_targets: string[];
}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequest {
}
export interface QueryPriceSnapshotHistoryRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest";
    value: Uint8Array;
}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequestAmino {
}
export interface QueryPriceSnapshotHistoryRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest";
    value: QueryPriceSnapshotHistoryRequestAmino;
}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequestSDKType {
}
export interface QueryPriceSnapshotHistoryResponse {
    priceSnapshots: PriceSnapshot[];
}
export interface QueryPriceSnapshotHistoryResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse";
    value: Uint8Array;
}
export interface QueryPriceSnapshotHistoryResponseAmino {
    price_snapshots?: PriceSnapshotAmino[];
}
export interface QueryPriceSnapshotHistoryResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse";
    value: QueryPriceSnapshotHistoryResponseAmino;
}
export interface QueryPriceSnapshotHistoryResponseSDKType {
    price_snapshots: PriceSnapshotSDKType[];
}
/** request type for twap RPC method */
export interface QueryTwapsRequest {
    lookbackSeconds: Long;
}
export interface QueryTwapsRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsRequest";
    value: Uint8Array;
}
/** request type for twap RPC method */
export interface QueryTwapsRequestAmino {
    lookback_seconds?: string;
}
export interface QueryTwapsRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryTwapsRequest";
    value: QueryTwapsRequestAmino;
}
/** request type for twap RPC method */
export interface QueryTwapsRequestSDKType {
    lookback_seconds: Long;
}
export interface QueryTwapsResponse {
    oracleTwaps: OracleTwap[];
}
export interface QueryTwapsResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsResponse";
    value: Uint8Array;
}
export interface QueryTwapsResponseAmino {
    oracle_twaps?: OracleTwapAmino[];
}
export interface QueryTwapsResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryTwapsResponse";
    value: QueryTwapsResponseAmino;
}
export interface QueryTwapsResponseSDKType {
    oracle_twaps: OracleTwapSDKType[];
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryFeederDelegationRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationRequest";
    value: Uint8Array;
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequestAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryFeederDelegationRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryFeederDelegationRequest";
    value: QueryFeederDelegationRequestAmino;
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequestSDKType {
    validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
    /** feeder_addr defines the feeder delegation of a validator */
    feederAddr: string;
}
export interface QueryFeederDelegationResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationResponse";
    value: Uint8Array;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseAmino {
    /** feeder_addr defines the feeder delegation of a validator */
    feeder_addr?: string;
}
export interface QueryFeederDelegationResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryFeederDelegationResponse";
    value: QueryFeederDelegationResponseAmino;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
    feeder_addr: string;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequest {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryVotePenaltyCounterRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest";
    value: Uint8Array;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequestAmino {
    /** validator defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryVotePenaltyCounterRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest";
    value: QueryVotePenaltyCounterRequestAmino;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequestSDKType {
    validator_addr: string;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponse {
    votePenaltyCounter?: VotePenaltyCounter;
}
export interface QueryVotePenaltyCounterResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse";
    value: Uint8Array;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponseAmino {
    vote_penalty_counter?: VotePenaltyCounterAmino;
}
export interface QueryVotePenaltyCounterResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse";
    value: QueryVotePenaltyCounterResponseAmino;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponseSDKType {
    vote_penalty_counter?: VotePenaltyCounterSDKType;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowRequest {
}
export interface QuerySlashWindowRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowRequest";
    value: Uint8Array;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowRequestAmino {
}
export interface QuerySlashWindowRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QuerySlashWindowRequest";
    value: QuerySlashWindowRequestAmino;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowRequestSDKType {
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponse {
    /**
     * window_progress defines the number of voting periods
     * since the last slashing event would have taken place.
     */
    windowProgress: Long;
}
export interface QuerySlashWindowResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowResponse";
    value: Uint8Array;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseAmino {
    /**
     * window_progress defines the number of voting periods
     * since the last slashing event would have taken place.
     */
    window_progress?: string;
}
export interface QuerySlashWindowResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QuerySlashWindowResponse";
    value: QuerySlashWindowResponseAmino;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseSDKType {
    window_progress: Long;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryExchangeRateRequest: {
    typeUrl: string;
    encode(message: QueryExchangeRateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateRequest;
    fromJSON(object: any): QueryExchangeRateRequest;
    toJSON(message: QueryExchangeRateRequest): unknown;
    fromPartial(object: Partial<QueryExchangeRateRequest>): QueryExchangeRateRequest;
    fromAmino(object: QueryExchangeRateRequestAmino): QueryExchangeRateRequest;
    toAmino(message: QueryExchangeRateRequest): QueryExchangeRateRequestAmino;
    fromAminoMsg(object: QueryExchangeRateRequestAminoMsg): QueryExchangeRateRequest;
    fromProtoMsg(message: QueryExchangeRateRequestProtoMsg): QueryExchangeRateRequest;
    toProto(message: QueryExchangeRateRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeRateRequest): QueryExchangeRateRequestProtoMsg;
};
export declare const QueryExchangeRateResponse: {
    typeUrl: string;
    encode(message: QueryExchangeRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateResponse;
    fromJSON(object: any): QueryExchangeRateResponse;
    toJSON(message: QueryExchangeRateResponse): unknown;
    fromPartial(object: Partial<QueryExchangeRateResponse>): QueryExchangeRateResponse;
    fromAmino(object: QueryExchangeRateResponseAmino): QueryExchangeRateResponse;
    toAmino(message: QueryExchangeRateResponse): QueryExchangeRateResponseAmino;
    fromAminoMsg(object: QueryExchangeRateResponseAminoMsg): QueryExchangeRateResponse;
    fromProtoMsg(message: QueryExchangeRateResponseProtoMsg): QueryExchangeRateResponse;
    toProto(message: QueryExchangeRateResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeRateResponse): QueryExchangeRateResponseProtoMsg;
};
export declare const QueryExchangeRatesRequest: {
    typeUrl: string;
    encode(_: QueryExchangeRatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesRequest;
    fromJSON(_: any): QueryExchangeRatesRequest;
    toJSON(_: QueryExchangeRatesRequest): unknown;
    fromPartial(_: Partial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest;
    fromAmino(_: QueryExchangeRatesRequestAmino): QueryExchangeRatesRequest;
    toAmino(_: QueryExchangeRatesRequest): QueryExchangeRatesRequestAmino;
    fromAminoMsg(object: QueryExchangeRatesRequestAminoMsg): QueryExchangeRatesRequest;
    fromProtoMsg(message: QueryExchangeRatesRequestProtoMsg): QueryExchangeRatesRequest;
    toProto(message: QueryExchangeRatesRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeRatesRequest): QueryExchangeRatesRequestProtoMsg;
};
export declare const DenomOracleExchangeRatePair: {
    typeUrl: string;
    encode(message: DenomOracleExchangeRatePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomOracleExchangeRatePair;
    fromJSON(object: any): DenomOracleExchangeRatePair;
    toJSON(message: DenomOracleExchangeRatePair): unknown;
    fromPartial(object: Partial<DenomOracleExchangeRatePair>): DenomOracleExchangeRatePair;
    fromAmino(object: DenomOracleExchangeRatePairAmino): DenomOracleExchangeRatePair;
    toAmino(message: DenomOracleExchangeRatePair): DenomOracleExchangeRatePairAmino;
    fromAminoMsg(object: DenomOracleExchangeRatePairAminoMsg): DenomOracleExchangeRatePair;
    fromProtoMsg(message: DenomOracleExchangeRatePairProtoMsg): DenomOracleExchangeRatePair;
    toProto(message: DenomOracleExchangeRatePair): Uint8Array;
    toProtoMsg(message: DenomOracleExchangeRatePair): DenomOracleExchangeRatePairProtoMsg;
};
export declare const QueryExchangeRatesResponse: {
    typeUrl: string;
    encode(message: QueryExchangeRatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesResponse;
    fromJSON(object: any): QueryExchangeRatesResponse;
    toJSON(message: QueryExchangeRatesResponse): unknown;
    fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse;
    fromAmino(object: QueryExchangeRatesResponseAmino): QueryExchangeRatesResponse;
    toAmino(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseAmino;
    fromAminoMsg(object: QueryExchangeRatesResponseAminoMsg): QueryExchangeRatesResponse;
    fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse;
    toProto(message: QueryExchangeRatesResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg;
};
export declare const QueryActivesRequest: {
    typeUrl: string;
    encode(_: QueryActivesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesRequest;
    fromJSON(_: any): QueryActivesRequest;
    toJSON(_: QueryActivesRequest): unknown;
    fromPartial(_: Partial<QueryActivesRequest>): QueryActivesRequest;
    fromAmino(_: QueryActivesRequestAmino): QueryActivesRequest;
    toAmino(_: QueryActivesRequest): QueryActivesRequestAmino;
    fromAminoMsg(object: QueryActivesRequestAminoMsg): QueryActivesRequest;
    fromProtoMsg(message: QueryActivesRequestProtoMsg): QueryActivesRequest;
    toProto(message: QueryActivesRequest): Uint8Array;
    toProtoMsg(message: QueryActivesRequest): QueryActivesRequestProtoMsg;
};
export declare const QueryActivesResponse: {
    typeUrl: string;
    encode(message: QueryActivesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesResponse;
    fromJSON(object: any): QueryActivesResponse;
    toJSON(message: QueryActivesResponse): unknown;
    fromPartial(object: Partial<QueryActivesResponse>): QueryActivesResponse;
    fromAmino(object: QueryActivesResponseAmino): QueryActivesResponse;
    toAmino(message: QueryActivesResponse): QueryActivesResponseAmino;
    fromAminoMsg(object: QueryActivesResponseAminoMsg): QueryActivesResponse;
    fromProtoMsg(message: QueryActivesResponseProtoMsg): QueryActivesResponse;
    toProto(message: QueryActivesResponse): Uint8Array;
    toProtoMsg(message: QueryActivesResponse): QueryActivesResponseProtoMsg;
};
export declare const QueryVoteTargetsRequest: {
    typeUrl: string;
    encode(_: QueryVoteTargetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsRequest;
    fromJSON(_: any): QueryVoteTargetsRequest;
    toJSON(_: QueryVoteTargetsRequest): unknown;
    fromPartial(_: Partial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest;
    fromAmino(_: QueryVoteTargetsRequestAmino): QueryVoteTargetsRequest;
    toAmino(_: QueryVoteTargetsRequest): QueryVoteTargetsRequestAmino;
    fromAminoMsg(object: QueryVoteTargetsRequestAminoMsg): QueryVoteTargetsRequest;
    fromProtoMsg(message: QueryVoteTargetsRequestProtoMsg): QueryVoteTargetsRequest;
    toProto(message: QueryVoteTargetsRequest): Uint8Array;
    toProtoMsg(message: QueryVoteTargetsRequest): QueryVoteTargetsRequestProtoMsg;
};
export declare const QueryVoteTargetsResponse: {
    typeUrl: string;
    encode(message: QueryVoteTargetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsResponse;
    fromJSON(object: any): QueryVoteTargetsResponse;
    toJSON(message: QueryVoteTargetsResponse): unknown;
    fromPartial(object: Partial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse;
    fromAmino(object: QueryVoteTargetsResponseAmino): QueryVoteTargetsResponse;
    toAmino(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseAmino;
    fromAminoMsg(object: QueryVoteTargetsResponseAminoMsg): QueryVoteTargetsResponse;
    fromProtoMsg(message: QueryVoteTargetsResponseProtoMsg): QueryVoteTargetsResponse;
    toProto(message: QueryVoteTargetsResponse): Uint8Array;
    toProtoMsg(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseProtoMsg;
};
export declare const QueryPriceSnapshotHistoryRequest: {
    typeUrl: string;
    encode(_: QueryPriceSnapshotHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceSnapshotHistoryRequest;
    fromJSON(_: any): QueryPriceSnapshotHistoryRequest;
    toJSON(_: QueryPriceSnapshotHistoryRequest): unknown;
    fromPartial(_: Partial<QueryPriceSnapshotHistoryRequest>): QueryPriceSnapshotHistoryRequest;
    fromAmino(_: QueryPriceSnapshotHistoryRequestAmino): QueryPriceSnapshotHistoryRequest;
    toAmino(_: QueryPriceSnapshotHistoryRequest): QueryPriceSnapshotHistoryRequestAmino;
    fromAminoMsg(object: QueryPriceSnapshotHistoryRequestAminoMsg): QueryPriceSnapshotHistoryRequest;
    fromProtoMsg(message: QueryPriceSnapshotHistoryRequestProtoMsg): QueryPriceSnapshotHistoryRequest;
    toProto(message: QueryPriceSnapshotHistoryRequest): Uint8Array;
    toProtoMsg(message: QueryPriceSnapshotHistoryRequest): QueryPriceSnapshotHistoryRequestProtoMsg;
};
export declare const QueryPriceSnapshotHistoryResponse: {
    typeUrl: string;
    encode(message: QueryPriceSnapshotHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceSnapshotHistoryResponse;
    fromJSON(object: any): QueryPriceSnapshotHistoryResponse;
    toJSON(message: QueryPriceSnapshotHistoryResponse): unknown;
    fromPartial(object: Partial<QueryPriceSnapshotHistoryResponse>): QueryPriceSnapshotHistoryResponse;
    fromAmino(object: QueryPriceSnapshotHistoryResponseAmino): QueryPriceSnapshotHistoryResponse;
    toAmino(message: QueryPriceSnapshotHistoryResponse): QueryPriceSnapshotHistoryResponseAmino;
    fromAminoMsg(object: QueryPriceSnapshotHistoryResponseAminoMsg): QueryPriceSnapshotHistoryResponse;
    fromProtoMsg(message: QueryPriceSnapshotHistoryResponseProtoMsg): QueryPriceSnapshotHistoryResponse;
    toProto(message: QueryPriceSnapshotHistoryResponse): Uint8Array;
    toProtoMsg(message: QueryPriceSnapshotHistoryResponse): QueryPriceSnapshotHistoryResponseProtoMsg;
};
export declare const QueryTwapsRequest: {
    typeUrl: string;
    encode(message: QueryTwapsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTwapsRequest;
    fromJSON(object: any): QueryTwapsRequest;
    toJSON(message: QueryTwapsRequest): unknown;
    fromPartial(object: Partial<QueryTwapsRequest>): QueryTwapsRequest;
    fromAmino(object: QueryTwapsRequestAmino): QueryTwapsRequest;
    toAmino(message: QueryTwapsRequest): QueryTwapsRequestAmino;
    fromAminoMsg(object: QueryTwapsRequestAminoMsg): QueryTwapsRequest;
    fromProtoMsg(message: QueryTwapsRequestProtoMsg): QueryTwapsRequest;
    toProto(message: QueryTwapsRequest): Uint8Array;
    toProtoMsg(message: QueryTwapsRequest): QueryTwapsRequestProtoMsg;
};
export declare const QueryTwapsResponse: {
    typeUrl: string;
    encode(message: QueryTwapsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTwapsResponse;
    fromJSON(object: any): QueryTwapsResponse;
    toJSON(message: QueryTwapsResponse): unknown;
    fromPartial(object: Partial<QueryTwapsResponse>): QueryTwapsResponse;
    fromAmino(object: QueryTwapsResponseAmino): QueryTwapsResponse;
    toAmino(message: QueryTwapsResponse): QueryTwapsResponseAmino;
    fromAminoMsg(object: QueryTwapsResponseAminoMsg): QueryTwapsResponse;
    fromProtoMsg(message: QueryTwapsResponseProtoMsg): QueryTwapsResponse;
    toProto(message: QueryTwapsResponse): Uint8Array;
    toProtoMsg(message: QueryTwapsResponse): QueryTwapsResponseProtoMsg;
};
export declare const QueryFeederDelegationRequest: {
    typeUrl: string;
    encode(message: QueryFeederDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationRequest;
    fromJSON(object: any): QueryFeederDelegationRequest;
    toJSON(message: QueryFeederDelegationRequest): unknown;
    fromPartial(object: Partial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest;
    fromAmino(object: QueryFeederDelegationRequestAmino): QueryFeederDelegationRequest;
    toAmino(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestAmino;
    fromAminoMsg(object: QueryFeederDelegationRequestAminoMsg): QueryFeederDelegationRequest;
    fromProtoMsg(message: QueryFeederDelegationRequestProtoMsg): QueryFeederDelegationRequest;
    toProto(message: QueryFeederDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestProtoMsg;
};
export declare const QueryFeederDelegationResponse: {
    typeUrl: string;
    encode(message: QueryFeederDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationResponse;
    fromJSON(object: any): QueryFeederDelegationResponse;
    toJSON(message: QueryFeederDelegationResponse): unknown;
    fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse;
    fromAmino(object: QueryFeederDelegationResponseAmino): QueryFeederDelegationResponse;
    toAmino(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseAmino;
    fromAminoMsg(object: QueryFeederDelegationResponseAminoMsg): QueryFeederDelegationResponse;
    fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse;
    toProto(message: QueryFeederDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg;
};
export declare const QueryVotePenaltyCounterRequest: {
    typeUrl: string;
    encode(message: QueryVotePenaltyCounterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotePenaltyCounterRequest;
    fromJSON(object: any): QueryVotePenaltyCounterRequest;
    toJSON(message: QueryVotePenaltyCounterRequest): unknown;
    fromPartial(object: Partial<QueryVotePenaltyCounterRequest>): QueryVotePenaltyCounterRequest;
    fromAmino(object: QueryVotePenaltyCounterRequestAmino): QueryVotePenaltyCounterRequest;
    toAmino(message: QueryVotePenaltyCounterRequest): QueryVotePenaltyCounterRequestAmino;
    fromAminoMsg(object: QueryVotePenaltyCounterRequestAminoMsg): QueryVotePenaltyCounterRequest;
    fromProtoMsg(message: QueryVotePenaltyCounterRequestProtoMsg): QueryVotePenaltyCounterRequest;
    toProto(message: QueryVotePenaltyCounterRequest): Uint8Array;
    toProtoMsg(message: QueryVotePenaltyCounterRequest): QueryVotePenaltyCounterRequestProtoMsg;
};
export declare const QueryVotePenaltyCounterResponse: {
    typeUrl: string;
    encode(message: QueryVotePenaltyCounterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotePenaltyCounterResponse;
    fromJSON(object: any): QueryVotePenaltyCounterResponse;
    toJSON(message: QueryVotePenaltyCounterResponse): unknown;
    fromPartial(object: Partial<QueryVotePenaltyCounterResponse>): QueryVotePenaltyCounterResponse;
    fromAmino(object: QueryVotePenaltyCounterResponseAmino): QueryVotePenaltyCounterResponse;
    toAmino(message: QueryVotePenaltyCounterResponse): QueryVotePenaltyCounterResponseAmino;
    fromAminoMsg(object: QueryVotePenaltyCounterResponseAminoMsg): QueryVotePenaltyCounterResponse;
    fromProtoMsg(message: QueryVotePenaltyCounterResponseProtoMsg): QueryVotePenaltyCounterResponse;
    toProto(message: QueryVotePenaltyCounterResponse): Uint8Array;
    toProtoMsg(message: QueryVotePenaltyCounterResponse): QueryVotePenaltyCounterResponseProtoMsg;
};
export declare const QuerySlashWindowRequest: {
    typeUrl: string;
    encode(_: QuerySlashWindowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashWindowRequest;
    fromJSON(_: any): QuerySlashWindowRequest;
    toJSON(_: QuerySlashWindowRequest): unknown;
    fromPartial(_: Partial<QuerySlashWindowRequest>): QuerySlashWindowRequest;
    fromAmino(_: QuerySlashWindowRequestAmino): QuerySlashWindowRequest;
    toAmino(_: QuerySlashWindowRequest): QuerySlashWindowRequestAmino;
    fromAminoMsg(object: QuerySlashWindowRequestAminoMsg): QuerySlashWindowRequest;
    fromProtoMsg(message: QuerySlashWindowRequestProtoMsg): QuerySlashWindowRequest;
    toProto(message: QuerySlashWindowRequest): Uint8Array;
    toProtoMsg(message: QuerySlashWindowRequest): QuerySlashWindowRequestProtoMsg;
};
export declare const QuerySlashWindowResponse: {
    typeUrl: string;
    encode(message: QuerySlashWindowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashWindowResponse;
    fromJSON(object: any): QuerySlashWindowResponse;
    toJSON(message: QuerySlashWindowResponse): unknown;
    fromPartial(object: Partial<QuerySlashWindowResponse>): QuerySlashWindowResponse;
    fromAmino(object: QuerySlashWindowResponseAmino): QuerySlashWindowResponse;
    toAmino(message: QuerySlashWindowResponse): QuerySlashWindowResponseAmino;
    fromAminoMsg(object: QuerySlashWindowResponseAminoMsg): QuerySlashWindowResponse;
    fromProtoMsg(message: QuerySlashWindowResponseProtoMsg): QuerySlashWindowResponse;
    toProto(message: QuerySlashWindowResponse): Uint8Array;
    toProtoMsg(message: QuerySlashWindowResponse): QuerySlashWindowResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
