import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.mint.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/seiprotocol.seichain.mint.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
export interface QueryMinterRequest {}
export interface QueryMinterRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.mint.QueryMinterRequest";
  value: Uint8Array;
}
/**
 * QueryMinterRequest is the request type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterRequestAmino {}
export interface QueryMinterRequestAminoMsg {
  type: "/seiprotocol.seichain.mint.QueryMinterRequest";
  value: QueryMinterRequestAmino;
}
/**
 * QueryMinterRequest is the request type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/seiprotocol.seichain.mint.QueryParamsRequest",
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
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.mint.QueryParamsRequest",
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
  typeUrl: "/seiprotocol.seichain.mint.QueryParamsResponse",
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
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.mint.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMinterRequest(): QueryMinterRequest {
  return {};
}
export const QueryMinterRequest = {
  typeUrl: "/seiprotocol.seichain.mint.QueryMinterRequest",
  encode(_: QueryMinterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinterRequest();
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
  fromJSON(_: any): QueryMinterRequest {
    return {};
  },
  toJSON(_: QueryMinterRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryMinterRequest>): QueryMinterRequest {
    const message = createBaseQueryMinterRequest();
    return message;
  },
  fromAmino(_: QueryMinterRequestAmino): QueryMinterRequest {
    const message = createBaseQueryMinterRequest();
    return message;
  },
  toAmino(_: QueryMinterRequest): QueryMinterRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMinterRequestAminoMsg): QueryMinterRequest {
    return QueryMinterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinterRequestProtoMsg): QueryMinterRequest {
    return QueryMinterRequest.decode(message.value);
  },
  toProto(message: QueryMinterRequest): Uint8Array {
    return QueryMinterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMinterRequest): QueryMinterRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.mint.QueryMinterRequest",
      value: QueryMinterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMinterResponse(): QueryMinterResponse {
  return {
    startDate: "",
    endDate: "",
    denom: "",
    totalMintAmount: Long.UZERO,
    remainingMintAmount: Long.UZERO,
    lastMintAmount: Long.UZERO,
    lastMintDate: "",
    lastMintHeight: Long.UZERO
  };
}
export const QueryMinterResponse = {
  typeUrl: "/seiprotocol.seichain.mint.QueryMinterResponse",
  encode(message: QueryMinterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startDate !== "") {
      writer.uint32(10).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(18).string(message.endDate);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (!message.totalMintAmount.isZero()) {
      writer.uint32(32).uint64(message.totalMintAmount);
    }
    if (!message.remainingMintAmount.isZero()) {
      writer.uint32(40).uint64(message.remainingMintAmount);
    }
    if (!message.lastMintAmount.isZero()) {
      writer.uint32(48).uint64(message.lastMintAmount);
    }
    if (message.lastMintDate !== "") {
      writer.uint32(58).string(message.lastMintDate);
    }
    if (!message.lastMintHeight.isZero()) {
      writer.uint32(64).uint64(message.lastMintHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startDate = reader.string();
          break;
        case 2:
          message.endDate = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.totalMintAmount = (reader.uint64() as Long);
          break;
        case 5:
          message.remainingMintAmount = (reader.uint64() as Long);
          break;
        case 6:
          message.lastMintAmount = (reader.uint64() as Long);
          break;
        case 7:
          message.lastMintDate = reader.string();
          break;
        case 8:
          message.lastMintHeight = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMinterResponse {
    return {
      startDate: isSet(object.startDate) ? String(object.startDate) : "",
      endDate: isSet(object.endDate) ? String(object.endDate) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      totalMintAmount: isSet(object.totalMintAmount) ? Long.fromValue(object.totalMintAmount) : Long.UZERO,
      remainingMintAmount: isSet(object.remainingMintAmount) ? Long.fromValue(object.remainingMintAmount) : Long.UZERO,
      lastMintAmount: isSet(object.lastMintAmount) ? Long.fromValue(object.lastMintAmount) : Long.UZERO,
      lastMintDate: isSet(object.lastMintDate) ? String(object.lastMintDate) : "",
      lastMintHeight: isSet(object.lastMintHeight) ? Long.fromValue(object.lastMintHeight) : Long.UZERO
    };
  },
  toJSON(message: QueryMinterResponse): unknown {
    const obj: any = {};
    message.startDate !== undefined && (obj.startDate = message.startDate);
    message.endDate !== undefined && (obj.endDate = message.endDate);
    message.denom !== undefined && (obj.denom = message.denom);
    message.totalMintAmount !== undefined && (obj.totalMintAmount = (message.totalMintAmount || Long.UZERO).toString());
    message.remainingMintAmount !== undefined && (obj.remainingMintAmount = (message.remainingMintAmount || Long.UZERO).toString());
    message.lastMintAmount !== undefined && (obj.lastMintAmount = (message.lastMintAmount || Long.UZERO).toString());
    message.lastMintDate !== undefined && (obj.lastMintDate = message.lastMintDate);
    message.lastMintHeight !== undefined && (obj.lastMintHeight = (message.lastMintHeight || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryMinterResponse>): QueryMinterResponse {
    const message = createBaseQueryMinterResponse();
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.denom = object.denom ?? "";
    message.totalMintAmount = object.totalMintAmount !== undefined && object.totalMintAmount !== null ? Long.fromValue(object.totalMintAmount) : Long.UZERO;
    message.remainingMintAmount = object.remainingMintAmount !== undefined && object.remainingMintAmount !== null ? Long.fromValue(object.remainingMintAmount) : Long.UZERO;
    message.lastMintAmount = object.lastMintAmount !== undefined && object.lastMintAmount !== null ? Long.fromValue(object.lastMintAmount) : Long.UZERO;
    message.lastMintDate = object.lastMintDate ?? "";
    message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? Long.fromValue(object.lastMintHeight) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryMinterResponseAmino): QueryMinterResponse {
    const message = createBaseQueryMinterResponse();
    if (object.start_date !== undefined && object.start_date !== null) {
      message.startDate = object.start_date;
    }
    if (object.end_date !== undefined && object.end_date !== null) {
      message.endDate = object.end_date;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.total_mint_amount !== undefined && object.total_mint_amount !== null) {
      message.totalMintAmount = Long.fromString(object.total_mint_amount);
    }
    if (object.remaining_mint_amount !== undefined && object.remaining_mint_amount !== null) {
      message.remainingMintAmount = Long.fromString(object.remaining_mint_amount);
    }
    if (object.last_mint_amount !== undefined && object.last_mint_amount !== null) {
      message.lastMintAmount = Long.fromString(object.last_mint_amount);
    }
    if (object.last_mint_date !== undefined && object.last_mint_date !== null) {
      message.lastMintDate = object.last_mint_date;
    }
    if (object.last_mint_height !== undefined && object.last_mint_height !== null) {
      message.lastMintHeight = Long.fromString(object.last_mint_height);
    }
    return message;
  },
  toAmino(message: QueryMinterResponse): QueryMinterResponseAmino {
    const obj: any = {};
    obj.start_date = message.startDate;
    obj.end_date = message.endDate;
    obj.denom = message.denom;
    obj.total_mint_amount = message.totalMintAmount ? message.totalMintAmount.toString() : undefined;
    obj.remaining_mint_amount = message.remainingMintAmount ? message.remainingMintAmount.toString() : undefined;
    obj.last_mint_amount = message.lastMintAmount ? message.lastMintAmount.toString() : undefined;
    obj.last_mint_date = message.lastMintDate;
    obj.last_mint_height = message.lastMintHeight ? message.lastMintHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMinterResponseAminoMsg): QueryMinterResponse {
    return QueryMinterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinterResponseProtoMsg): QueryMinterResponse {
    return QueryMinterResponse.decode(message.value);
  },
  toProto(message: QueryMinterResponse): Uint8Array {
    return QueryMinterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMinterResponse): QueryMinterResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.mint.QueryMinterResponse",
      value: QueryMinterResponse.encode(message).finish()
    };
  }
};