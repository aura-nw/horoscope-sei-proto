import { MessageDependencyMapping, MessageDependencyMappingAmino, MessageDependencyMappingSDKType, WasmDependencyMapping, WasmDependencyMappingAmino, WasmDependencyMappingSDKType } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface GenesisState {
  params: Params;
  /** mapping between every message type and its predetermined resource read/write sequence */
  messageDependencyMapping: MessageDependencyMapping[];
  wasmDependencyMappings: WasmDependencyMapping[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /** mapping between every message type and its predetermined resource read/write sequence */
  message_dependency_mapping?: MessageDependencyMappingAmino[];
  wasm_dependency_mappings?: WasmDependencyMappingAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  message_dependency_mapping: MessageDependencyMappingSDKType[];
  wasm_dependency_mappings: WasmDependencyMappingSDKType[];
}
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    messageDependencyMapping: [],
    wasmDependencyMappings: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.messageDependencyMapping) {
      MessageDependencyMapping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.wasmDependencyMappings) {
      WasmDependencyMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
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
          message.messageDependencyMapping.push(MessageDependencyMapping.decode(reader, reader.uint32()));
          break;
        case 3:
          message.wasmDependencyMappings.push(WasmDependencyMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      messageDependencyMapping: Array.isArray(object?.messageDependencyMapping) ? object.messageDependencyMapping.map((e: any) => MessageDependencyMapping.fromJSON(e)) : [],
      wasmDependencyMappings: Array.isArray(object?.wasmDependencyMappings) ? object.wasmDependencyMappings.map((e: any) => WasmDependencyMapping.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.messageDependencyMapping) {
      obj.messageDependencyMapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toJSON(e) : undefined);
    } else {
      obj.messageDependencyMapping = [];
    }
    if (message.wasmDependencyMappings) {
      obj.wasmDependencyMappings = message.wasmDependencyMappings.map(e => e ? WasmDependencyMapping.toJSON(e) : undefined);
    } else {
      obj.wasmDependencyMappings = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.messageDependencyMapping = object.messageDependencyMapping?.map(e => MessageDependencyMapping.fromPartial(e)) || [];
    message.wasmDependencyMappings = object.wasmDependencyMappings?.map(e => WasmDependencyMapping.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.messageDependencyMapping = object.message_dependency_mapping?.map(e => MessageDependencyMapping.fromAmino(e)) || [];
    message.wasmDependencyMappings = object.wasm_dependency_mappings?.map(e => WasmDependencyMapping.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.messageDependencyMapping) {
      obj.message_dependency_mapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toAmino(e) : undefined);
    } else {
      obj.message_dependency_mapping = [];
    }
    if (message.wasmDependencyMappings) {
      obj.wasm_dependency_mappings = message.wasmDependencyMappings.map(e => e ? WasmDependencyMapping.toAmino(e) : undefined);
    } else {
      obj.wasm_dependency_mappings = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.Params",
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
  fromJSON(_: any): Params {
    return {};
  },
  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};