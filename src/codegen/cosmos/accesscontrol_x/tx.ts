import { WasmDependencyMapping, WasmDependencyMappingAmino, WasmDependencyMappingSDKType } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface RegisterWasmDependencyJSONFile {
  wasmDependencyMapping: WasmDependencyMapping;
}
export interface RegisterWasmDependencyJSONFileProtoMsg {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.RegisterWasmDependencyJSONFile";
  value: Uint8Array;
}
export interface RegisterWasmDependencyJSONFileAmino {
  wasm_dependency_mapping?: WasmDependencyMappingAmino;
}
export interface RegisterWasmDependencyJSONFileAminoMsg {
  type: "cosmos-sdk/RegisterWasmDependencyJSONFile";
  value: RegisterWasmDependencyJSONFileAmino;
}
export interface RegisterWasmDependencyJSONFileSDKType {
  wasm_dependency_mapping: WasmDependencyMappingSDKType;
}
export interface MsgRegisterWasmDependency {
  fromAddress: string;
  wasmDependencyMapping: WasmDependencyMapping;
}
export interface MsgRegisterWasmDependencyProtoMsg {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency";
  value: Uint8Array;
}
export interface MsgRegisterWasmDependencyAmino {
  from_address?: string;
  wasm_dependency_mapping?: WasmDependencyMappingAmino;
}
export interface MsgRegisterWasmDependencyAminoMsg {
  type: "cosmos-sdk/MsgRegisterWasmDependency";
  value: MsgRegisterWasmDependencyAmino;
}
export interface MsgRegisterWasmDependencySDKType {
  from_address: string;
  wasm_dependency_mapping: WasmDependencyMappingSDKType;
}
export interface MsgRegisterWasmDependencyResponse {}
export interface MsgRegisterWasmDependencyResponseProtoMsg {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependencyResponse";
  value: Uint8Array;
}
export interface MsgRegisterWasmDependencyResponseAmino {}
export interface MsgRegisterWasmDependencyResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterWasmDependencyResponse";
  value: MsgRegisterWasmDependencyResponseAmino;
}
export interface MsgRegisterWasmDependencyResponseSDKType {}
function createBaseRegisterWasmDependencyJSONFile(): RegisterWasmDependencyJSONFile {
  return {
    wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
  };
}
export const RegisterWasmDependencyJSONFile = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.RegisterWasmDependencyJSONFile",
  encode(message: RegisterWasmDependencyJSONFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wasmDependencyMapping !== undefined) {
      WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterWasmDependencyJSONFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterWasmDependencyJSONFile();
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
  fromJSON(object: any): RegisterWasmDependencyJSONFile {
    return {
      wasmDependencyMapping: isSet(object.wasmDependencyMapping) ? WasmDependencyMapping.fromJSON(object.wasmDependencyMapping) : undefined
    };
  },
  toJSON(message: RegisterWasmDependencyJSONFile): unknown {
    const obj: any = {};
    message.wasmDependencyMapping !== undefined && (obj.wasmDependencyMapping = message.wasmDependencyMapping ? WasmDependencyMapping.toJSON(message.wasmDependencyMapping) : undefined);
    return obj;
  },
  fromPartial(object: Partial<RegisterWasmDependencyJSONFile>): RegisterWasmDependencyJSONFile {
    const message = createBaseRegisterWasmDependencyJSONFile();
    message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
    return message;
  },
  fromAmino(object: RegisterWasmDependencyJSONFileAmino): RegisterWasmDependencyJSONFile {
    const message = createBaseRegisterWasmDependencyJSONFile();
    if (object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null) {
      message.wasmDependencyMapping = WasmDependencyMapping.fromAmino(object.wasm_dependency_mapping);
    }
    return message;
  },
  toAmino(message: RegisterWasmDependencyJSONFile): RegisterWasmDependencyJSONFileAmino {
    const obj: any = {};
    obj.wasm_dependency_mapping = message.wasmDependencyMapping ? WasmDependencyMapping.toAmino(message.wasmDependencyMapping) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterWasmDependencyJSONFileAminoMsg): RegisterWasmDependencyJSONFile {
    return RegisterWasmDependencyJSONFile.fromAmino(object.value);
  },
  toAminoMsg(message: RegisterWasmDependencyJSONFile): RegisterWasmDependencyJSONFileAminoMsg {
    return {
      type: "cosmos-sdk/RegisterWasmDependencyJSONFile",
      value: RegisterWasmDependencyJSONFile.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisterWasmDependencyJSONFileProtoMsg): RegisterWasmDependencyJSONFile {
    return RegisterWasmDependencyJSONFile.decode(message.value);
  },
  toProto(message: RegisterWasmDependencyJSONFile): Uint8Array {
    return RegisterWasmDependencyJSONFile.encode(message).finish();
  },
  toProtoMsg(message: RegisterWasmDependencyJSONFile): RegisterWasmDependencyJSONFileProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.RegisterWasmDependencyJSONFile",
      value: RegisterWasmDependencyJSONFile.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterWasmDependency(): MsgRegisterWasmDependency {
  return {
    fromAddress: "",
    wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
  };
}
export const MsgRegisterWasmDependency = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
  encode(message: MsgRegisterWasmDependency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.wasmDependencyMapping !== undefined) {
      WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterWasmDependency {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterWasmDependency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.wasmDependencyMapping = WasmDependencyMapping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterWasmDependency {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      wasmDependencyMapping: isSet(object.wasmDependencyMapping) ? WasmDependencyMapping.fromJSON(object.wasmDependencyMapping) : undefined
    };
  },
  toJSON(message: MsgRegisterWasmDependency): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.wasmDependencyMapping !== undefined && (obj.wasmDependencyMapping = message.wasmDependencyMapping ? WasmDependencyMapping.toJSON(message.wasmDependencyMapping) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterWasmDependency>): MsgRegisterWasmDependency {
    const message = createBaseMsgRegisterWasmDependency();
    message.fromAddress = object.fromAddress ?? "";
    message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterWasmDependencyAmino): MsgRegisterWasmDependency {
    const message = createBaseMsgRegisterWasmDependency();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null) {
      message.wasmDependencyMapping = WasmDependencyMapping.fromAmino(object.wasm_dependency_mapping);
    }
    return message;
  },
  toAmino(message: MsgRegisterWasmDependency): MsgRegisterWasmDependencyAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.wasm_dependency_mapping = message.wasmDependencyMapping ? WasmDependencyMapping.toAmino(message.wasmDependencyMapping) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterWasmDependencyAminoMsg): MsgRegisterWasmDependency {
    return MsgRegisterWasmDependency.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterWasmDependency): MsgRegisterWasmDependencyAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterWasmDependency",
      value: MsgRegisterWasmDependency.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterWasmDependencyProtoMsg): MsgRegisterWasmDependency {
    return MsgRegisterWasmDependency.decode(message.value);
  },
  toProto(message: MsgRegisterWasmDependency): Uint8Array {
    return MsgRegisterWasmDependency.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterWasmDependency): MsgRegisterWasmDependencyProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
      value: MsgRegisterWasmDependency.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterWasmDependencyResponse(): MsgRegisterWasmDependencyResponse {
  return {};
}
export const MsgRegisterWasmDependencyResponse = {
  typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependencyResponse",
  encode(_: MsgRegisterWasmDependencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterWasmDependencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterWasmDependencyResponse();
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
  fromJSON(_: any): MsgRegisterWasmDependencyResponse {
    return {};
  },
  toJSON(_: MsgRegisterWasmDependencyResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterWasmDependencyResponse>): MsgRegisterWasmDependencyResponse {
    const message = createBaseMsgRegisterWasmDependencyResponse();
    return message;
  },
  fromAmino(_: MsgRegisterWasmDependencyResponseAmino): MsgRegisterWasmDependencyResponse {
    const message = createBaseMsgRegisterWasmDependencyResponse();
    return message;
  },
  toAmino(_: MsgRegisterWasmDependencyResponse): MsgRegisterWasmDependencyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterWasmDependencyResponseAminoMsg): MsgRegisterWasmDependencyResponse {
    return MsgRegisterWasmDependencyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterWasmDependencyResponse): MsgRegisterWasmDependencyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterWasmDependencyResponse",
      value: MsgRegisterWasmDependencyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterWasmDependencyResponseProtoMsg): MsgRegisterWasmDependencyResponse {
    return MsgRegisterWasmDependencyResponse.decode(message.value);
  },
  toProto(message: MsgRegisterWasmDependencyResponse): Uint8Array {
    return MsgRegisterWasmDependencyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterWasmDependencyResponse): MsgRegisterWasmDependencyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependencyResponse",
      value: MsgRegisterWasmDependencyResponse.encode(message).finish()
    };
  }
};