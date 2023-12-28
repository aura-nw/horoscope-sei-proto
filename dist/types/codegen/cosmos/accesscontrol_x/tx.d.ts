import { WasmDependencyMapping, WasmDependencyMappingAmino, WasmDependencyMappingSDKType } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
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
export interface MsgRegisterWasmDependencyResponse {
}
export interface MsgRegisterWasmDependencyResponseProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependencyResponse";
    value: Uint8Array;
}
export interface MsgRegisterWasmDependencyResponseAmino {
}
export interface MsgRegisterWasmDependencyResponseAminoMsg {
    type: "cosmos-sdk/MsgRegisterWasmDependencyResponse";
    value: MsgRegisterWasmDependencyResponseAmino;
}
export interface MsgRegisterWasmDependencyResponseSDKType {
}
export declare const RegisterWasmDependencyJSONFile: {
    typeUrl: string;
    encode(message: RegisterWasmDependencyJSONFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterWasmDependencyJSONFile;
    fromJSON(object: any): RegisterWasmDependencyJSONFile;
    toJSON(message: RegisterWasmDependencyJSONFile): unknown;
    fromPartial(object: Partial<RegisterWasmDependencyJSONFile>): RegisterWasmDependencyJSONFile;
    fromAmino(object: RegisterWasmDependencyJSONFileAmino): RegisterWasmDependencyJSONFile;
    toAmino(message: RegisterWasmDependencyJSONFile): RegisterWasmDependencyJSONFileAmino;
    fromAminoMsg(object: RegisterWasmDependencyJSONFileAminoMsg): RegisterWasmDependencyJSONFile;
    toAminoMsg(message: RegisterWasmDependencyJSONFile): RegisterWasmDependencyJSONFileAminoMsg;
    fromProtoMsg(message: RegisterWasmDependencyJSONFileProtoMsg): RegisterWasmDependencyJSONFile;
    toProto(message: RegisterWasmDependencyJSONFile): Uint8Array;
    toProtoMsg(message: RegisterWasmDependencyJSONFile): RegisterWasmDependencyJSONFileProtoMsg;
};
export declare const MsgRegisterWasmDependency: {
    typeUrl: string;
    encode(message: MsgRegisterWasmDependency, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterWasmDependency;
    fromJSON(object: any): MsgRegisterWasmDependency;
    toJSON(message: MsgRegisterWasmDependency): unknown;
    fromPartial(object: Partial<MsgRegisterWasmDependency>): MsgRegisterWasmDependency;
    fromAmino(object: MsgRegisterWasmDependencyAmino): MsgRegisterWasmDependency;
    toAmino(message: MsgRegisterWasmDependency): MsgRegisterWasmDependencyAmino;
    fromAminoMsg(object: MsgRegisterWasmDependencyAminoMsg): MsgRegisterWasmDependency;
    toAminoMsg(message: MsgRegisterWasmDependency): MsgRegisterWasmDependencyAminoMsg;
    fromProtoMsg(message: MsgRegisterWasmDependencyProtoMsg): MsgRegisterWasmDependency;
    toProto(message: MsgRegisterWasmDependency): Uint8Array;
    toProtoMsg(message: MsgRegisterWasmDependency): MsgRegisterWasmDependencyProtoMsg;
};
export declare const MsgRegisterWasmDependencyResponse: {
    typeUrl: string;
    encode(_: MsgRegisterWasmDependencyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterWasmDependencyResponse;
    fromJSON(_: any): MsgRegisterWasmDependencyResponse;
    toJSON(_: MsgRegisterWasmDependencyResponse): unknown;
    fromPartial(_: Partial<MsgRegisterWasmDependencyResponse>): MsgRegisterWasmDependencyResponse;
    fromAmino(_: MsgRegisterWasmDependencyResponseAmino): MsgRegisterWasmDependencyResponse;
    toAmino(_: MsgRegisterWasmDependencyResponse): MsgRegisterWasmDependencyResponseAmino;
    fromAminoMsg(object: MsgRegisterWasmDependencyResponseAminoMsg): MsgRegisterWasmDependencyResponse;
    toAminoMsg(message: MsgRegisterWasmDependencyResponse): MsgRegisterWasmDependencyResponseAminoMsg;
    fromProtoMsg(message: MsgRegisterWasmDependencyResponseProtoMsg): MsgRegisterWasmDependencyResponse;
    toProto(message: MsgRegisterWasmDependencyResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterWasmDependencyResponse): MsgRegisterWasmDependencyResponseProtoMsg;
};
