import * as _m0 from "protobufjs/minimal";
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
    /** 1 reserved from old field `salt` */
    exchangeRates: string;
    feeder: string;
    validator: string;
}
export interface MsgAggregateExchangeRateVoteProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote";
    value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteAmino {
    /** 1 reserved from old field `salt` */
    exchange_rates?: string;
    feeder?: string;
    validator?: string;
}
export interface MsgAggregateExchangeRateVoteAminoMsg {
    type: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote";
    value: MsgAggregateExchangeRateVoteAmino;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteSDKType {
    exchange_rates: string;
    feeder: string;
    validator: string;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponse {
}
export interface MsgAggregateExchangeRateVoteResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse";
    value: Uint8Array;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponseAmino {
}
export interface MsgAggregateExchangeRateVoteResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse";
    value: MsgAggregateExchangeRateVoteResponseAmino;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponseSDKType {
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsent {
    operator: string;
    delegate: string;
}
export interface MsgDelegateFeedConsentProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent";
    value: Uint8Array;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsentAmino {
    operator?: string;
    delegate?: string;
}
export interface MsgDelegateFeedConsentAminoMsg {
    type: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent";
    value: MsgDelegateFeedConsentAmino;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsentSDKType {
    operator: string;
    delegate: string;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponse {
}
export interface MsgDelegateFeedConsentResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse";
    value: Uint8Array;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponseAmino {
}
export interface MsgDelegateFeedConsentResponseAminoMsg {
    type: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse";
    value: MsgDelegateFeedConsentResponseAmino;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponseSDKType {
}
export declare const MsgAggregateExchangeRateVote: {
    typeUrl: string;
    encode(message: MsgAggregateExchangeRateVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVote;
    fromJSON(object: any): MsgAggregateExchangeRateVote;
    toJSON(message: MsgAggregateExchangeRateVote): unknown;
    fromPartial(object: Partial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote;
    fromAmino(object: MsgAggregateExchangeRateVoteAmino): MsgAggregateExchangeRateVote;
    toAmino(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteAmino;
    fromAminoMsg(object: MsgAggregateExchangeRateVoteAminoMsg): MsgAggregateExchangeRateVote;
    fromProtoMsg(message: MsgAggregateExchangeRateVoteProtoMsg): MsgAggregateExchangeRateVote;
    toProto(message: MsgAggregateExchangeRateVote): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteProtoMsg;
};
export declare const MsgAggregateExchangeRateVoteResponse: {
    typeUrl: string;
    encode(_: MsgAggregateExchangeRateVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse;
    fromJSON(_: any): MsgAggregateExchangeRateVoteResponse;
    toJSON(_: MsgAggregateExchangeRateVoteResponse): unknown;
    fromPartial(_: Partial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse;
    fromAmino(_: MsgAggregateExchangeRateVoteResponseAmino): MsgAggregateExchangeRateVoteResponse;
    toAmino(_: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseAmino;
    fromAminoMsg(object: MsgAggregateExchangeRateVoteResponseAminoMsg): MsgAggregateExchangeRateVoteResponse;
    fromProtoMsg(message: MsgAggregateExchangeRateVoteResponseProtoMsg): MsgAggregateExchangeRateVoteResponse;
    toProto(message: MsgAggregateExchangeRateVoteResponse): Uint8Array;
    toProtoMsg(message: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseProtoMsg;
};
export declare const MsgDelegateFeedConsent: {
    typeUrl: string;
    encode(message: MsgDelegateFeedConsent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsent;
    fromJSON(object: any): MsgDelegateFeedConsent;
    toJSON(message: MsgDelegateFeedConsent): unknown;
    fromPartial(object: Partial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent;
    fromAmino(object: MsgDelegateFeedConsentAmino): MsgDelegateFeedConsent;
    toAmino(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentAmino;
    fromAminoMsg(object: MsgDelegateFeedConsentAminoMsg): MsgDelegateFeedConsent;
    fromProtoMsg(message: MsgDelegateFeedConsentProtoMsg): MsgDelegateFeedConsent;
    toProto(message: MsgDelegateFeedConsent): Uint8Array;
    toProtoMsg(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentProtoMsg;
};
export declare const MsgDelegateFeedConsentResponse: {
    typeUrl: string;
    encode(_: MsgDelegateFeedConsentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse;
    fromJSON(_: any): MsgDelegateFeedConsentResponse;
    toJSON(_: MsgDelegateFeedConsentResponse): unknown;
    fromPartial(_: Partial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse;
    fromAmino(_: MsgDelegateFeedConsentResponseAmino): MsgDelegateFeedConsentResponse;
    toAmino(_: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseAmino;
    fromAminoMsg(object: MsgDelegateFeedConsentResponseAminoMsg): MsgDelegateFeedConsentResponse;
    fromProtoMsg(message: MsgDelegateFeedConsentResponseProtoMsg): MsgDelegateFeedConsentResponse;
    toProto(message: MsgDelegateFeedConsentResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseProtoMsg;
};
