import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { MessageDependencyMapping, MessageDependencyMappingAmino, MessageDependencyMappingSDKType, WasmDependencyMapping, WasmDependencyMappingAmino, WasmDependencyMappingSDKType } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
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
export interface ListResourceDependencyMappingRequest {}
export interface ListResourceDependencyMappingRequestProtoMsg {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingRequest";
  value: Uint8Array;
}
export interface ListResourceDependencyMappingRequestAmino {}
export interface ListResourceDependencyMappingRequestAminoMsg {
  type: "cosmos-sdk/ListResourceDependencyMappingRequest";
  value: ListResourceDependencyMappingRequestAmino;
}
export interface ListResourceDependencyMappingRequestSDKType {}
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
export interface ListWasmDependencyMappingRequest {}
export interface ListWasmDependencyMappingRequestProtoMsg {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingRequest";
  value: Uint8Array;
}
export interface ListWasmDependencyMappingRequestAmino {}
export interface ListWasmDependencyMappingRequestAminoMsg {
  type: "cosmos-sdk/ListWasmDependencyMappingRequest";
  value: ListWasmDependencyMappingRequestAmino;
}
export interface ListWasmDependencyMappingRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseResourceDependencyMappingFromMessageKeyRequest(): ResourceDependencyMappingFromMessageKeyRequest {
  return {
    messageKey: ""
  };
}
export const ResourceDependencyMappingFromMessageKeyRequest = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyRequest",
  encode(message: ResourceDependencyMappingFromMessageKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageKey !== "") {
      writer.uint32(10).string(message.messageKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDependencyMappingFromMessageKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceDependencyMappingFromMessageKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceDependencyMappingFromMessageKeyRequest {
    return {
      messageKey: isSet(object.messageKey) ? String(object.messageKey) : ""
    };
  },
  toJSON(message: ResourceDependencyMappingFromMessageKeyRequest): unknown {
    const obj: any = {};
    message.messageKey !== undefined && (obj.messageKey = message.messageKey);
    return obj;
  },
  fromPartial(object: Partial<ResourceDependencyMappingFromMessageKeyRequest>): ResourceDependencyMappingFromMessageKeyRequest {
    const message = createBaseResourceDependencyMappingFromMessageKeyRequest();
    message.messageKey = object.messageKey ?? "";
    return message;
  },
  fromAmino(object: ResourceDependencyMappingFromMessageKeyRequestAmino): ResourceDependencyMappingFromMessageKeyRequest {
    const message = createBaseResourceDependencyMappingFromMessageKeyRequest();
    if (object.message_key !== undefined && object.message_key !== null) {
      message.messageKey = object.message_key;
    }
    return message;
  },
  toAmino(message: ResourceDependencyMappingFromMessageKeyRequest): ResourceDependencyMappingFromMessageKeyRequestAmino {
    const obj: any = {};
    obj.message_key = message.messageKey;
    return obj;
  },
  fromAminoMsg(object: ResourceDependencyMappingFromMessageKeyRequestAminoMsg): ResourceDependencyMappingFromMessageKeyRequest {
    return ResourceDependencyMappingFromMessageKeyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ResourceDependencyMappingFromMessageKeyRequest): ResourceDependencyMappingFromMessageKeyRequestAminoMsg {
    return {
      type: "cosmos-sdk/ResourceDependencyMappingFromMessageKeyRequest",
      value: ResourceDependencyMappingFromMessageKeyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ResourceDependencyMappingFromMessageKeyRequestProtoMsg): ResourceDependencyMappingFromMessageKeyRequest {
    return ResourceDependencyMappingFromMessageKeyRequest.decode(message.value);
  },
  toProto(message: ResourceDependencyMappingFromMessageKeyRequest): Uint8Array {
    return ResourceDependencyMappingFromMessageKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: ResourceDependencyMappingFromMessageKeyRequest): ResourceDependencyMappingFromMessageKeyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyRequest",
      value: ResourceDependencyMappingFromMessageKeyRequest.encode(message).finish()
    };
  }
};
function createBaseResourceDependencyMappingFromMessageKeyResponse(): ResourceDependencyMappingFromMessageKeyResponse {
  return {
    messageDependencyMapping: MessageDependencyMapping.fromPartial({})
  };
}
export const ResourceDependencyMappingFromMessageKeyResponse = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyResponse",
  encode(message: ResourceDependencyMappingFromMessageKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageDependencyMapping !== undefined) {
      MessageDependencyMapping.encode(message.messageDependencyMapping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDependencyMappingFromMessageKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceDependencyMappingFromMessageKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageDependencyMapping = MessageDependencyMapping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceDependencyMappingFromMessageKeyResponse {
    return {
      messageDependencyMapping: isSet(object.messageDependencyMapping) ? MessageDependencyMapping.fromJSON(object.messageDependencyMapping) : undefined
    };
  },
  toJSON(message: ResourceDependencyMappingFromMessageKeyResponse): unknown {
    const obj: any = {};
    message.messageDependencyMapping !== undefined && (obj.messageDependencyMapping = message.messageDependencyMapping ? MessageDependencyMapping.toJSON(message.messageDependencyMapping) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ResourceDependencyMappingFromMessageKeyResponse>): ResourceDependencyMappingFromMessageKeyResponse {
    const message = createBaseResourceDependencyMappingFromMessageKeyResponse();
    message.messageDependencyMapping = object.messageDependencyMapping !== undefined && object.messageDependencyMapping !== null ? MessageDependencyMapping.fromPartial(object.messageDependencyMapping) : undefined;
    return message;
  },
  fromAmino(object: ResourceDependencyMappingFromMessageKeyResponseAmino): ResourceDependencyMappingFromMessageKeyResponse {
    const message = createBaseResourceDependencyMappingFromMessageKeyResponse();
    if (object.message_dependency_mapping !== undefined && object.message_dependency_mapping !== null) {
      message.messageDependencyMapping = MessageDependencyMapping.fromAmino(object.message_dependency_mapping);
    }
    return message;
  },
  toAmino(message: ResourceDependencyMappingFromMessageKeyResponse): ResourceDependencyMappingFromMessageKeyResponseAmino {
    const obj: any = {};
    obj.message_dependency_mapping = message.messageDependencyMapping ? MessageDependencyMapping.toAmino(message.messageDependencyMapping) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResourceDependencyMappingFromMessageKeyResponseAminoMsg): ResourceDependencyMappingFromMessageKeyResponse {
    return ResourceDependencyMappingFromMessageKeyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ResourceDependencyMappingFromMessageKeyResponse): ResourceDependencyMappingFromMessageKeyResponseAminoMsg {
    return {
      type: "cosmos-sdk/ResourceDependencyMappingFromMessageKeyResponse",
      value: ResourceDependencyMappingFromMessageKeyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ResourceDependencyMappingFromMessageKeyResponseProtoMsg): ResourceDependencyMappingFromMessageKeyResponse {
    return ResourceDependencyMappingFromMessageKeyResponse.decode(message.value);
  },
  toProto(message: ResourceDependencyMappingFromMessageKeyResponse): Uint8Array {
    return ResourceDependencyMappingFromMessageKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: ResourceDependencyMappingFromMessageKeyResponse): ResourceDependencyMappingFromMessageKeyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyResponse",
      value: ResourceDependencyMappingFromMessageKeyResponse.encode(message).finish()
    };
  }
};
function createBaseWasmDependencyMappingRequest(): WasmDependencyMappingRequest {
  return {
    contractAddress: ""
  };
}
export const WasmDependencyMappingRequest = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingRequest",
  encode(message: WasmDependencyMappingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WasmDependencyMappingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWasmDependencyMappingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WasmDependencyMappingRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: WasmDependencyMappingRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<WasmDependencyMappingRequest>): WasmDependencyMappingRequest {
    const message = createBaseWasmDependencyMappingRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: WasmDependencyMappingRequestAmino): WasmDependencyMappingRequest {
    const message = createBaseWasmDependencyMappingRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: WasmDependencyMappingRequest): WasmDependencyMappingRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: WasmDependencyMappingRequestAminoMsg): WasmDependencyMappingRequest {
    return WasmDependencyMappingRequest.fromAmino(object.value);
  },
  toAminoMsg(message: WasmDependencyMappingRequest): WasmDependencyMappingRequestAminoMsg {
    return {
      type: "cosmos-sdk/WasmDependencyMappingRequest",
      value: WasmDependencyMappingRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: WasmDependencyMappingRequestProtoMsg): WasmDependencyMappingRequest {
    return WasmDependencyMappingRequest.decode(message.value);
  },
  toProto(message: WasmDependencyMappingRequest): Uint8Array {
    return WasmDependencyMappingRequest.encode(message).finish();
  },
  toProtoMsg(message: WasmDependencyMappingRequest): WasmDependencyMappingRequestProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingRequest",
      value: WasmDependencyMappingRequest.encode(message).finish()
    };
  }
};
function createBaseWasmDependencyMappingResponse(): WasmDependencyMappingResponse {
  return {
    wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
  };
}
export const WasmDependencyMappingResponse = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingResponse",
  encode(message: WasmDependencyMappingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wasmDependencyMapping !== undefined) {
      WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WasmDependencyMappingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWasmDependencyMappingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wasmDependencyMapping = WasmDependencyMapping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WasmDependencyMappingResponse {
    return {
      wasmDependencyMapping: isSet(object.wasmDependencyMapping) ? WasmDependencyMapping.fromJSON(object.wasmDependencyMapping) : undefined
    };
  },
  toJSON(message: WasmDependencyMappingResponse): unknown {
    const obj: any = {};
    message.wasmDependencyMapping !== undefined && (obj.wasmDependencyMapping = message.wasmDependencyMapping ? WasmDependencyMapping.toJSON(message.wasmDependencyMapping) : undefined);
    return obj;
  },
  fromPartial(object: Partial<WasmDependencyMappingResponse>): WasmDependencyMappingResponse {
    const message = createBaseWasmDependencyMappingResponse();
    message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
    return message;
  },
  fromAmino(object: WasmDependencyMappingResponseAmino): WasmDependencyMappingResponse {
    const message = createBaseWasmDependencyMappingResponse();
    if (object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null) {
      message.wasmDependencyMapping = WasmDependencyMapping.fromAmino(object.wasm_dependency_mapping);
    }
    return message;
  },
  toAmino(message: WasmDependencyMappingResponse): WasmDependencyMappingResponseAmino {
    const obj: any = {};
    obj.wasm_dependency_mapping = message.wasmDependencyMapping ? WasmDependencyMapping.toAmino(message.wasmDependencyMapping) : undefined;
    return obj;
  },
  fromAminoMsg(object: WasmDependencyMappingResponseAminoMsg): WasmDependencyMappingResponse {
    return WasmDependencyMappingResponse.fromAmino(object.value);
  },
  toAminoMsg(message: WasmDependencyMappingResponse): WasmDependencyMappingResponseAminoMsg {
    return {
      type: "cosmos-sdk/WasmDependencyMappingResponse",
      value: WasmDependencyMappingResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: WasmDependencyMappingResponseProtoMsg): WasmDependencyMappingResponse {
    return WasmDependencyMappingResponse.decode(message.value);
  },
  toProto(message: WasmDependencyMappingResponse): Uint8Array {
    return WasmDependencyMappingResponse.encode(message).finish();
  },
  toProtoMsg(message: WasmDependencyMappingResponse): WasmDependencyMappingResponseProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingResponse",
      value: WasmDependencyMappingResponse.encode(message).finish()
    };
  }
};
function createBaseListResourceDependencyMappingRequest(): ListResourceDependencyMappingRequest {
  return {};
}
export const ListResourceDependencyMappingRequest = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingRequest",
  encode(_: ListResourceDependencyMappingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceDependencyMappingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourceDependencyMappingRequest();
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
  fromJSON(_: any): ListResourceDependencyMappingRequest {
    return {};
  },
  toJSON(_: ListResourceDependencyMappingRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ListResourceDependencyMappingRequest>): ListResourceDependencyMappingRequest {
    const message = createBaseListResourceDependencyMappingRequest();
    return message;
  },
  fromAmino(_: ListResourceDependencyMappingRequestAmino): ListResourceDependencyMappingRequest {
    const message = createBaseListResourceDependencyMappingRequest();
    return message;
  },
  toAmino(_: ListResourceDependencyMappingRequest): ListResourceDependencyMappingRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListResourceDependencyMappingRequestAminoMsg): ListResourceDependencyMappingRequest {
    return ListResourceDependencyMappingRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListResourceDependencyMappingRequest): ListResourceDependencyMappingRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListResourceDependencyMappingRequest",
      value: ListResourceDependencyMappingRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListResourceDependencyMappingRequestProtoMsg): ListResourceDependencyMappingRequest {
    return ListResourceDependencyMappingRequest.decode(message.value);
  },
  toProto(message: ListResourceDependencyMappingRequest): Uint8Array {
    return ListResourceDependencyMappingRequest.encode(message).finish();
  },
  toProtoMsg(message: ListResourceDependencyMappingRequest): ListResourceDependencyMappingRequestProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingRequest",
      value: ListResourceDependencyMappingRequest.encode(message).finish()
    };
  }
};
function createBaseListResourceDependencyMappingResponse(): ListResourceDependencyMappingResponse {
  return {
    messageDependencyMappingList: []
  };
}
export const ListResourceDependencyMappingResponse = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingResponse",
  encode(message: ListResourceDependencyMappingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messageDependencyMappingList) {
      MessageDependencyMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourceDependencyMappingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourceDependencyMappingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageDependencyMappingList.push(MessageDependencyMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListResourceDependencyMappingResponse {
    return {
      messageDependencyMappingList: Array.isArray(object?.messageDependencyMappingList) ? object.messageDependencyMappingList.map((e: any) => MessageDependencyMapping.fromJSON(e)) : []
    };
  },
  toJSON(message: ListResourceDependencyMappingResponse): unknown {
    const obj: any = {};
    if (message.messageDependencyMappingList) {
      obj.messageDependencyMappingList = message.messageDependencyMappingList.map(e => e ? MessageDependencyMapping.toJSON(e) : undefined);
    } else {
      obj.messageDependencyMappingList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ListResourceDependencyMappingResponse>): ListResourceDependencyMappingResponse {
    const message = createBaseListResourceDependencyMappingResponse();
    message.messageDependencyMappingList = object.messageDependencyMappingList?.map(e => MessageDependencyMapping.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListResourceDependencyMappingResponseAmino): ListResourceDependencyMappingResponse {
    const message = createBaseListResourceDependencyMappingResponse();
    message.messageDependencyMappingList = object.message_dependency_mapping_list?.map(e => MessageDependencyMapping.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListResourceDependencyMappingResponse): ListResourceDependencyMappingResponseAmino {
    const obj: any = {};
    if (message.messageDependencyMappingList) {
      obj.message_dependency_mapping_list = message.messageDependencyMappingList.map(e => e ? MessageDependencyMapping.toAmino(e) : undefined);
    } else {
      obj.message_dependency_mapping_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListResourceDependencyMappingResponseAminoMsg): ListResourceDependencyMappingResponse {
    return ListResourceDependencyMappingResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListResourceDependencyMappingResponse): ListResourceDependencyMappingResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListResourceDependencyMappingResponse",
      value: ListResourceDependencyMappingResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListResourceDependencyMappingResponseProtoMsg): ListResourceDependencyMappingResponse {
    return ListResourceDependencyMappingResponse.decode(message.value);
  },
  toProto(message: ListResourceDependencyMappingResponse): Uint8Array {
    return ListResourceDependencyMappingResponse.encode(message).finish();
  },
  toProtoMsg(message: ListResourceDependencyMappingResponse): ListResourceDependencyMappingResponseProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingResponse",
      value: ListResourceDependencyMappingResponse.encode(message).finish()
    };
  }
};
function createBaseListWasmDependencyMappingRequest(): ListWasmDependencyMappingRequest {
  return {};
}
export const ListWasmDependencyMappingRequest = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingRequest",
  encode(_: ListWasmDependencyMappingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListWasmDependencyMappingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWasmDependencyMappingRequest();
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
  fromJSON(_: any): ListWasmDependencyMappingRequest {
    return {};
  },
  toJSON(_: ListWasmDependencyMappingRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ListWasmDependencyMappingRequest>): ListWasmDependencyMappingRequest {
    const message = createBaseListWasmDependencyMappingRequest();
    return message;
  },
  fromAmino(_: ListWasmDependencyMappingRequestAmino): ListWasmDependencyMappingRequest {
    const message = createBaseListWasmDependencyMappingRequest();
    return message;
  },
  toAmino(_: ListWasmDependencyMappingRequest): ListWasmDependencyMappingRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListWasmDependencyMappingRequestAminoMsg): ListWasmDependencyMappingRequest {
    return ListWasmDependencyMappingRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListWasmDependencyMappingRequest): ListWasmDependencyMappingRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListWasmDependencyMappingRequest",
      value: ListWasmDependencyMappingRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListWasmDependencyMappingRequestProtoMsg): ListWasmDependencyMappingRequest {
    return ListWasmDependencyMappingRequest.decode(message.value);
  },
  toProto(message: ListWasmDependencyMappingRequest): Uint8Array {
    return ListWasmDependencyMappingRequest.encode(message).finish();
  },
  toProtoMsg(message: ListWasmDependencyMappingRequest): ListWasmDependencyMappingRequestProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingRequest",
      value: ListWasmDependencyMappingRequest.encode(message).finish()
    };
  }
};
function createBaseListWasmDependencyMappingResponse(): ListWasmDependencyMappingResponse {
  return {
    wasmDependencyMappingList: []
  };
}
export const ListWasmDependencyMappingResponse = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingResponse",
  encode(message: ListWasmDependencyMappingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.wasmDependencyMappingList) {
      WasmDependencyMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListWasmDependencyMappingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWasmDependencyMappingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wasmDependencyMappingList.push(WasmDependencyMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListWasmDependencyMappingResponse {
    return {
      wasmDependencyMappingList: Array.isArray(object?.wasmDependencyMappingList) ? object.wasmDependencyMappingList.map((e: any) => WasmDependencyMapping.fromJSON(e)) : []
    };
  },
  toJSON(message: ListWasmDependencyMappingResponse): unknown {
    const obj: any = {};
    if (message.wasmDependencyMappingList) {
      obj.wasmDependencyMappingList = message.wasmDependencyMappingList.map(e => e ? WasmDependencyMapping.toJSON(e) : undefined);
    } else {
      obj.wasmDependencyMappingList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ListWasmDependencyMappingResponse>): ListWasmDependencyMappingResponse {
    const message = createBaseListWasmDependencyMappingResponse();
    message.wasmDependencyMappingList = object.wasmDependencyMappingList?.map(e => WasmDependencyMapping.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListWasmDependencyMappingResponseAmino): ListWasmDependencyMappingResponse {
    const message = createBaseListWasmDependencyMappingResponse();
    message.wasmDependencyMappingList = object.wasm_dependency_mapping_list?.map(e => WasmDependencyMapping.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListWasmDependencyMappingResponse): ListWasmDependencyMappingResponseAmino {
    const obj: any = {};
    if (message.wasmDependencyMappingList) {
      obj.wasm_dependency_mapping_list = message.wasmDependencyMappingList.map(e => e ? WasmDependencyMapping.toAmino(e) : undefined);
    } else {
      obj.wasm_dependency_mapping_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListWasmDependencyMappingResponseAminoMsg): ListWasmDependencyMappingResponse {
    return ListWasmDependencyMappingResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListWasmDependencyMappingResponse): ListWasmDependencyMappingResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListWasmDependencyMappingResponse",
      value: ListWasmDependencyMappingResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListWasmDependencyMappingResponseProtoMsg): ListWasmDependencyMappingResponse {
    return ListWasmDependencyMappingResponse.decode(message.value);
  },
  toProto(message: ListWasmDependencyMappingResponse): Uint8Array {
    return ListWasmDependencyMappingResponse.encode(message).finish();
  },
  toProtoMsg(message: ListWasmDependencyMappingResponse): ListWasmDependencyMappingResponseProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingResponse",
      value: ListWasmDependencyMappingResponse.encode(message).finish()
    };
  }
};