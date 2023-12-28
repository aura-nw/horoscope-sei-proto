import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { MessageDependencyMapping, MessageDependencyMappingAmino, MessageDependencyMappingSDKType, WasmDependencyMapping, WasmDependencyMappingAmino, WasmDependencyMappingSDKType } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface ResourceDependencyMappingFromMessageKeyRequest {
    messageKey: string;
}
export interface ResourceDependencyMappingFromMessageKeyRequestProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyRequest";
    value: Uint8Array;
}
export interface ResourceDependencyMappingFromMessageKeyRequestAmino {
    message_key?: string;
}
export interface ResourceDependencyMappingFromMessageKeyRequestAminoMsg {
    type: "cosmos-sdk/ResourceDependencyMappingFromMessageKeyRequest";
    value: ResourceDependencyMappingFromMessageKeyRequestAmino;
}
export interface ResourceDependencyMappingFromMessageKeyRequestSDKType {
    message_key: string;
}
export interface ResourceDependencyMappingFromMessageKeyResponse {
    messageDependencyMapping: MessageDependencyMapping;
}
export interface ResourceDependencyMappingFromMessageKeyResponseProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyResponse";
    value: Uint8Array;
}
export interface ResourceDependencyMappingFromMessageKeyResponseAmino {
    message_dependency_mapping?: MessageDependencyMappingAmino;
}
export interface ResourceDependencyMappingFromMessageKeyResponseAminoMsg {
    type: "cosmos-sdk/ResourceDependencyMappingFromMessageKeyResponse";
    value: ResourceDependencyMappingFromMessageKeyResponseAmino;
}
export interface ResourceDependencyMappingFromMessageKeyResponseSDKType {
    message_dependency_mapping: MessageDependencyMappingSDKType;
}
export interface WasmDependencyMappingRequest {
    contractAddress: string;
}
export interface WasmDependencyMappingRequestProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingRequest";
    value: Uint8Array;
}
export interface WasmDependencyMappingRequestAmino {
    contract_address?: string;
}
export interface WasmDependencyMappingRequestAminoMsg {
    type: "cosmos-sdk/WasmDependencyMappingRequest";
    value: WasmDependencyMappingRequestAmino;
}
export interface WasmDependencyMappingRequestSDKType {
    contract_address: string;
}
export interface WasmDependencyMappingResponse {
    wasmDependencyMapping: WasmDependencyMapping;
}
export interface WasmDependencyMappingResponseProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingResponse";
    value: Uint8Array;
}
export interface WasmDependencyMappingResponseAmino {
    wasm_dependency_mapping?: WasmDependencyMappingAmino;
}
export interface WasmDependencyMappingResponseAminoMsg {
    type: "cosmos-sdk/WasmDependencyMappingResponse";
    value: WasmDependencyMappingResponseAmino;
}
export interface WasmDependencyMappingResponseSDKType {
    wasm_dependency_mapping: WasmDependencyMappingSDKType;
}
export interface ListResourceDependencyMappingRequest {
}
export interface ListResourceDependencyMappingRequestProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingRequest";
    value: Uint8Array;
}
export interface ListResourceDependencyMappingRequestAmino {
}
export interface ListResourceDependencyMappingRequestAminoMsg {
    type: "cosmos-sdk/ListResourceDependencyMappingRequest";
    value: ListResourceDependencyMappingRequestAmino;
}
export interface ListResourceDependencyMappingRequestSDKType {
}
export interface ListResourceDependencyMappingResponse {
    messageDependencyMappingList: MessageDependencyMapping[];
}
export interface ListResourceDependencyMappingResponseProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingResponse";
    value: Uint8Array;
}
export interface ListResourceDependencyMappingResponseAmino {
    message_dependency_mapping_list?: MessageDependencyMappingAmino[];
}
export interface ListResourceDependencyMappingResponseAminoMsg {
    type: "cosmos-sdk/ListResourceDependencyMappingResponse";
    value: ListResourceDependencyMappingResponseAmino;
}
export interface ListResourceDependencyMappingResponseSDKType {
    message_dependency_mapping_list: MessageDependencyMappingSDKType[];
}
export interface ListWasmDependencyMappingRequest {
}
export interface ListWasmDependencyMappingRequestProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingRequest";
    value: Uint8Array;
}
export interface ListWasmDependencyMappingRequestAmino {
}
export interface ListWasmDependencyMappingRequestAminoMsg {
    type: "cosmos-sdk/ListWasmDependencyMappingRequest";
    value: ListWasmDependencyMappingRequestAmino;
}
export interface ListWasmDependencyMappingRequestSDKType {
}
export interface ListWasmDependencyMappingResponse {
    wasmDependencyMappingList: WasmDependencyMapping[];
}
export interface ListWasmDependencyMappingResponseProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingResponse";
    value: Uint8Array;
}
export interface ListWasmDependencyMappingResponseAmino {
    wasm_dependency_mapping_list?: WasmDependencyMappingAmino[];
}
export interface ListWasmDependencyMappingResponseAminoMsg {
    type: "cosmos-sdk/ListWasmDependencyMappingResponse";
    value: ListWasmDependencyMappingResponseAmino;
}
export interface ListWasmDependencyMappingResponseSDKType {
    wasm_dependency_mapping_list: WasmDependencyMappingSDKType[];
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
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
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
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const ResourceDependencyMappingFromMessageKeyRequest: {
    typeUrl: string;
    encode(message: ResourceDependencyMappingFromMessageKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDependencyMappingFromMessageKeyRequest;
    fromJSON(object: any): ResourceDependencyMappingFromMessageKeyRequest;
    toJSON(message: ResourceDependencyMappingFromMessageKeyRequest): unknown;
    fromPartial(object: Partial<ResourceDependencyMappingFromMessageKeyRequest>): ResourceDependencyMappingFromMessageKeyRequest;
    fromAmino(object: ResourceDependencyMappingFromMessageKeyRequestAmino): ResourceDependencyMappingFromMessageKeyRequest;
    toAmino(message: ResourceDependencyMappingFromMessageKeyRequest): ResourceDependencyMappingFromMessageKeyRequestAmino;
    fromAminoMsg(object: ResourceDependencyMappingFromMessageKeyRequestAminoMsg): ResourceDependencyMappingFromMessageKeyRequest;
    toAminoMsg(message: ResourceDependencyMappingFromMessageKeyRequest): ResourceDependencyMappingFromMessageKeyRequestAminoMsg;
    fromProtoMsg(message: ResourceDependencyMappingFromMessageKeyRequestProtoMsg): ResourceDependencyMappingFromMessageKeyRequest;
    toProto(message: ResourceDependencyMappingFromMessageKeyRequest): Uint8Array;
    toProtoMsg(message: ResourceDependencyMappingFromMessageKeyRequest): ResourceDependencyMappingFromMessageKeyRequestProtoMsg;
};
export declare const ResourceDependencyMappingFromMessageKeyResponse: {
    typeUrl: string;
    encode(message: ResourceDependencyMappingFromMessageKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDependencyMappingFromMessageKeyResponse;
    fromJSON(object: any): ResourceDependencyMappingFromMessageKeyResponse;
    toJSON(message: ResourceDependencyMappingFromMessageKeyResponse): unknown;
    fromPartial(object: Partial<ResourceDependencyMappingFromMessageKeyResponse>): ResourceDependencyMappingFromMessageKeyResponse;
    fromAmino(object: ResourceDependencyMappingFromMessageKeyResponseAmino): ResourceDependencyMappingFromMessageKeyResponse;
    toAmino(message: ResourceDependencyMappingFromMessageKeyResponse): ResourceDependencyMappingFromMessageKeyResponseAmino;
    fromAminoMsg(object: ResourceDependencyMappingFromMessageKeyResponseAminoMsg): ResourceDependencyMappingFromMessageKeyResponse;
    toAminoMsg(message: ResourceDependencyMappingFromMessageKeyResponse): ResourceDependencyMappingFromMessageKeyResponseAminoMsg;
    fromProtoMsg(message: ResourceDependencyMappingFromMessageKeyResponseProtoMsg): ResourceDependencyMappingFromMessageKeyResponse;
    toProto(message: ResourceDependencyMappingFromMessageKeyResponse): Uint8Array;
    toProtoMsg(message: ResourceDependencyMappingFromMessageKeyResponse): ResourceDependencyMappingFromMessageKeyResponseProtoMsg;
};
export declare const WasmDependencyMappingRequest: {
    typeUrl: string;
    encode(message: WasmDependencyMappingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmDependencyMappingRequest;
    fromJSON(object: any): WasmDependencyMappingRequest;
    toJSON(message: WasmDependencyMappingRequest): unknown;
    fromPartial(object: Partial<WasmDependencyMappingRequest>): WasmDependencyMappingRequest;
    fromAmino(object: WasmDependencyMappingRequestAmino): WasmDependencyMappingRequest;
    toAmino(message: WasmDependencyMappingRequest): WasmDependencyMappingRequestAmino;
    fromAminoMsg(object: WasmDependencyMappingRequestAminoMsg): WasmDependencyMappingRequest;
    toAminoMsg(message: WasmDependencyMappingRequest): WasmDependencyMappingRequestAminoMsg;
    fromProtoMsg(message: WasmDependencyMappingRequestProtoMsg): WasmDependencyMappingRequest;
    toProto(message: WasmDependencyMappingRequest): Uint8Array;
    toProtoMsg(message: WasmDependencyMappingRequest): WasmDependencyMappingRequestProtoMsg;
};
export declare const WasmDependencyMappingResponse: {
    typeUrl: string;
    encode(message: WasmDependencyMappingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmDependencyMappingResponse;
    fromJSON(object: any): WasmDependencyMappingResponse;
    toJSON(message: WasmDependencyMappingResponse): unknown;
    fromPartial(object: Partial<WasmDependencyMappingResponse>): WasmDependencyMappingResponse;
    fromAmino(object: WasmDependencyMappingResponseAmino): WasmDependencyMappingResponse;
    toAmino(message: WasmDependencyMappingResponse): WasmDependencyMappingResponseAmino;
    fromAminoMsg(object: WasmDependencyMappingResponseAminoMsg): WasmDependencyMappingResponse;
    toAminoMsg(message: WasmDependencyMappingResponse): WasmDependencyMappingResponseAminoMsg;
    fromProtoMsg(message: WasmDependencyMappingResponseProtoMsg): WasmDependencyMappingResponse;
    toProto(message: WasmDependencyMappingResponse): Uint8Array;
    toProtoMsg(message: WasmDependencyMappingResponse): WasmDependencyMappingResponseProtoMsg;
};
export declare const ListResourceDependencyMappingRequest: {
    typeUrl: string;
    encode(_: ListResourceDependencyMappingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceDependencyMappingRequest;
    fromJSON(_: any): ListResourceDependencyMappingRequest;
    toJSON(_: ListResourceDependencyMappingRequest): unknown;
    fromPartial(_: Partial<ListResourceDependencyMappingRequest>): ListResourceDependencyMappingRequest;
    fromAmino(_: ListResourceDependencyMappingRequestAmino): ListResourceDependencyMappingRequest;
    toAmino(_: ListResourceDependencyMappingRequest): ListResourceDependencyMappingRequestAmino;
    fromAminoMsg(object: ListResourceDependencyMappingRequestAminoMsg): ListResourceDependencyMappingRequest;
    toAminoMsg(message: ListResourceDependencyMappingRequest): ListResourceDependencyMappingRequestAminoMsg;
    fromProtoMsg(message: ListResourceDependencyMappingRequestProtoMsg): ListResourceDependencyMappingRequest;
    toProto(message: ListResourceDependencyMappingRequest): Uint8Array;
    toProtoMsg(message: ListResourceDependencyMappingRequest): ListResourceDependencyMappingRequestProtoMsg;
};
export declare const ListResourceDependencyMappingResponse: {
    typeUrl: string;
    encode(message: ListResourceDependencyMappingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceDependencyMappingResponse;
    fromJSON(object: any): ListResourceDependencyMappingResponse;
    toJSON(message: ListResourceDependencyMappingResponse): unknown;
    fromPartial(object: Partial<ListResourceDependencyMappingResponse>): ListResourceDependencyMappingResponse;
    fromAmino(object: ListResourceDependencyMappingResponseAmino): ListResourceDependencyMappingResponse;
    toAmino(message: ListResourceDependencyMappingResponse): ListResourceDependencyMappingResponseAmino;
    fromAminoMsg(object: ListResourceDependencyMappingResponseAminoMsg): ListResourceDependencyMappingResponse;
    toAminoMsg(message: ListResourceDependencyMappingResponse): ListResourceDependencyMappingResponseAminoMsg;
    fromProtoMsg(message: ListResourceDependencyMappingResponseProtoMsg): ListResourceDependencyMappingResponse;
    toProto(message: ListResourceDependencyMappingResponse): Uint8Array;
    toProtoMsg(message: ListResourceDependencyMappingResponse): ListResourceDependencyMappingResponseProtoMsg;
};
export declare const ListWasmDependencyMappingRequest: {
    typeUrl: string;
    encode(_: ListWasmDependencyMappingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListWasmDependencyMappingRequest;
    fromJSON(_: any): ListWasmDependencyMappingRequest;
    toJSON(_: ListWasmDependencyMappingRequest): unknown;
    fromPartial(_: Partial<ListWasmDependencyMappingRequest>): ListWasmDependencyMappingRequest;
    fromAmino(_: ListWasmDependencyMappingRequestAmino): ListWasmDependencyMappingRequest;
    toAmino(_: ListWasmDependencyMappingRequest): ListWasmDependencyMappingRequestAmino;
    fromAminoMsg(object: ListWasmDependencyMappingRequestAminoMsg): ListWasmDependencyMappingRequest;
    toAminoMsg(message: ListWasmDependencyMappingRequest): ListWasmDependencyMappingRequestAminoMsg;
    fromProtoMsg(message: ListWasmDependencyMappingRequestProtoMsg): ListWasmDependencyMappingRequest;
    toProto(message: ListWasmDependencyMappingRequest): Uint8Array;
    toProtoMsg(message: ListWasmDependencyMappingRequest): ListWasmDependencyMappingRequestProtoMsg;
};
export declare const ListWasmDependencyMappingResponse: {
    typeUrl: string;
    encode(message: ListWasmDependencyMappingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListWasmDependencyMappingResponse;
    fromJSON(object: any): ListWasmDependencyMappingResponse;
    toJSON(message: ListWasmDependencyMappingResponse): unknown;
    fromPartial(object: Partial<ListWasmDependencyMappingResponse>): ListWasmDependencyMappingResponse;
    fromAmino(object: ListWasmDependencyMappingResponseAmino): ListWasmDependencyMappingResponse;
    toAmino(message: ListWasmDependencyMappingResponse): ListWasmDependencyMappingResponseAmino;
    fromAminoMsg(object: ListWasmDependencyMappingResponseAminoMsg): ListWasmDependencyMappingResponse;
    toAminoMsg(message: ListWasmDependencyMappingResponse): ListWasmDependencyMappingResponseAminoMsg;
    fromProtoMsg(message: ListWasmDependencyMappingResponseProtoMsg): ListWasmDependencyMappingResponse;
    toProto(message: ListWasmDependencyMappingResponse): Uint8Array;
    toProtoMsg(message: ListWasmDependencyMappingResponse): ListWasmDependencyMappingResponseProtoMsg;
};
