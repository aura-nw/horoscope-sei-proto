import { MessageDependencyMapping, MessageDependencyMappingAmino, MessageDependencyMappingSDKType, WasmDependencyMapping, WasmDependencyMappingAmino, WasmDependencyMappingSDKType } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
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
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.accesscontrol_x.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(_: any): Params;
    toJSON(_: Params): unknown;
    fromPartial(_: Partial<Params>): Params;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
