import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Epoch, EpochAmino, EpochSDKType } from "./epoch";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.epoch.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/seiprotocol.seichain.epoch.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.epoch.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/seiprotocol.seichain.epoch.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryEpochRequest {
}
export interface QueryEpochRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.epoch.QueryEpochRequest";
    value: Uint8Array;
}
export interface QueryEpochRequestAmino {
}
export interface QueryEpochRequestAminoMsg {
    type: "/seiprotocol.seichain.epoch.QueryEpochRequest";
    value: QueryEpochRequestAmino;
}
export interface QueryEpochRequestSDKType {
}
export interface QueryEpochResponse {
    epoch: Epoch;
}
export interface QueryEpochResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.epoch.QueryEpochResponse";
    value: Uint8Array;
}
export interface QueryEpochResponseAmino {
    epoch?: EpochAmino;
}
export interface QueryEpochResponseAminoMsg {
    type: "/seiprotocol.seichain.epoch.QueryEpochResponse";
    value: QueryEpochResponseAmino;
}
export interface QueryEpochResponseSDKType {
    epoch: EpochSDKType;
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
export declare const QueryEpochRequest: {
    typeUrl: string;
    encode(_: QueryEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochRequest;
    fromJSON(_: any): QueryEpochRequest;
    toJSON(_: QueryEpochRequest): unknown;
    fromPartial(_: Partial<QueryEpochRequest>): QueryEpochRequest;
    fromAmino(_: QueryEpochRequestAmino): QueryEpochRequest;
    toAmino(_: QueryEpochRequest): QueryEpochRequestAmino;
    fromAminoMsg(object: QueryEpochRequestAminoMsg): QueryEpochRequest;
    fromProtoMsg(message: QueryEpochRequestProtoMsg): QueryEpochRequest;
    toProto(message: QueryEpochRequest): Uint8Array;
    toProtoMsg(message: QueryEpochRequest): QueryEpochRequestProtoMsg;
};
export declare const QueryEpochResponse: {
    typeUrl: string;
    encode(message: QueryEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochResponse;
    fromJSON(object: any): QueryEpochResponse;
    toJSON(message: QueryEpochResponse): unknown;
    fromPartial(object: Partial<QueryEpochResponse>): QueryEpochResponse;
    fromAmino(object: QueryEpochResponseAmino): QueryEpochResponse;
    toAmino(message: QueryEpochResponse): QueryEpochResponseAmino;
    fromAminoMsg(object: QueryEpochResponseAminoMsg): QueryEpochResponse;
    fromProtoMsg(message: QueryEpochResponseProtoMsg): QueryEpochResponse;
    toProto(message: QueryEpochResponse): Uint8Array;
    toProtoMsg(message: QueryEpochResponse): QueryEpochResponseProtoMsg;
};
