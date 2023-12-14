import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/seiprotocol.seichain.mint.QueryParamsRequest";
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
    typeUrl: "/seiprotocol.seichain.mint.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/seiprotocol.seichain.mint.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryMinterRequest is the request type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterRequest {
}
export interface QueryMinterRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.QueryMinterRequest";
    value: Uint8Array;
}
/**
 * QueryMinterRequest is the request type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterRequestAmino {
}
export interface QueryMinterRequestAminoMsg {
    type: "/seiprotocol.seichain.mint.QueryMinterRequest";
    value: QueryMinterRequestAmino;
}
/**
 * QueryMinterRequest is the request type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterRequestSDKType {
}
/**
 * QueryMinterResponse is the response type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterResponse {
    startDate: string;
    endDate: string;
    denom: string;
    totalMintAmount: Long;
    remainingMintAmount: Long;
    lastMintAmount: Long;
    lastMintDate: string;
    lastMintHeight: Long;
}
export interface QueryMinterResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.QueryMinterResponse";
    value: Uint8Array;
}
/**
 * QueryMinterResponse is the response type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterResponseAmino {
    start_date?: string;
    end_date?: string;
    denom?: string;
    total_mint_amount?: string;
    remaining_mint_amount?: string;
    last_mint_amount?: string;
    last_mint_date?: string;
    last_mint_height?: string;
}
export interface QueryMinterResponseAminoMsg {
    type: "/seiprotocol.seichain.mint.QueryMinterResponse";
    value: QueryMinterResponseAmino;
}
/**
 * QueryMinterResponse is the response type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterResponseSDKType {
    start_date: string;
    end_date: string;
    denom: string;
    total_mint_amount: Long;
    remaining_mint_amount: Long;
    last_mint_amount: Long;
    last_mint_date: string;
    last_mint_height: Long;
}
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
export declare const QueryMinterRequest: {
    typeUrl: string;
    encode(_: QueryMinterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinterRequest;
    fromJSON(_: any): QueryMinterRequest;
    toJSON(_: QueryMinterRequest): unknown;
    fromPartial(_: Partial<QueryMinterRequest>): QueryMinterRequest;
    fromAmino(_: QueryMinterRequestAmino): QueryMinterRequest;
    toAmino(_: QueryMinterRequest): QueryMinterRequestAmino;
    fromAminoMsg(object: QueryMinterRequestAminoMsg): QueryMinterRequest;
    fromProtoMsg(message: QueryMinterRequestProtoMsg): QueryMinterRequest;
    toProto(message: QueryMinterRequest): Uint8Array;
    toProtoMsg(message: QueryMinterRequest): QueryMinterRequestProtoMsg;
};
export declare const QueryMinterResponse: {
    typeUrl: string;
    encode(message: QueryMinterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinterResponse;
    fromJSON(object: any): QueryMinterResponse;
    toJSON(message: QueryMinterResponse): unknown;
    fromPartial(object: Partial<QueryMinterResponse>): QueryMinterResponse;
    fromAmino(object: QueryMinterResponseAmino): QueryMinterResponse;
    toAmino(message: QueryMinterResponse): QueryMinterResponseAmino;
    fromAminoMsg(object: QueryMinterResponseAminoMsg): QueryMinterResponse;
    fromProtoMsg(message: QueryMinterResponseProtoMsg): QueryMinterResponse;
    toProto(message: QueryMinterResponse): Uint8Array;
    toProtoMsg(message: QueryMinterResponse): QueryMinterResponseProtoMsg;
};
