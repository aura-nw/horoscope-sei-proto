import { MessageDependencyMapping, MessageDependencyMappingAmino, MessageDependencyMappingSDKType, WasmDependencyMapping, WasmDependencyMappingAmino, WasmDependencyMappingSDKType } from "../accesscontrol/accesscontrol";
import * as _m0 from "protobufjs/minimal";
export interface MsgUpdateResourceDependencyMappingProposal {
    title: string;
    description: string;
    messageDependencyMapping: MessageDependencyMapping[];
}
export interface MsgUpdateResourceDependencyMappingProposalProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposal";
    value: Uint8Array;
}
export interface MsgUpdateResourceDependencyMappingProposalAmino {
    title?: string;
    description?: string;
    message_dependency_mapping?: MessageDependencyMappingAmino[];
}
export interface MsgUpdateResourceDependencyMappingProposalAminoMsg {
    type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposal";
    value: MsgUpdateResourceDependencyMappingProposalAmino;
}
export interface MsgUpdateResourceDependencyMappingProposalSDKType {
    title: string;
    description: string;
    message_dependency_mapping: MessageDependencyMappingSDKType[];
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFile {
    title: string;
    description: string;
    deposit: string;
    messageDependencyMapping: MessageDependencyMapping[];
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalJsonFile";
    value: Uint8Array;
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFileAmino {
    title?: string;
    description?: string;
    deposit?: string;
    message_dependency_mapping?: MessageDependencyMappingAmino[];
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg {
    type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposalJsonFile";
    value: MsgUpdateResourceDependencyMappingProposalJsonFileAmino;
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFileSDKType {
    title: string;
    description: string;
    deposit: string;
    message_dependency_mapping: MessageDependencyMappingSDKType[];
}
export interface MsgUpdateResourceDependencyMappingProposalResponse {
}
export interface MsgUpdateResourceDependencyMappingProposalResponseProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalResponse";
    value: Uint8Array;
}
export interface MsgUpdateResourceDependencyMappingProposalResponseAmino {
}
export interface MsgUpdateResourceDependencyMappingProposalResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposalResponse";
    value: MsgUpdateResourceDependencyMappingProposalResponseAmino;
}
export interface MsgUpdateResourceDependencyMappingProposalResponseSDKType {
}
export interface MsgUpdateWasmDependencyMappingProposal {
    title: string;
    description: string;
    contractAddress: string;
    wasmDependencyMapping: WasmDependencyMapping;
}
export interface MsgUpdateWasmDependencyMappingProposalProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposal";
    value: Uint8Array;
}
export interface MsgUpdateWasmDependencyMappingProposalAmino {
    title?: string;
    description?: string;
    contract_address?: string;
    wasm_dependency_mapping?: WasmDependencyMappingAmino;
}
export interface MsgUpdateWasmDependencyMappingProposalAminoMsg {
    type: "cosmos-sdk/MsgUpdateWasmDependencyMappingProposal";
    value: MsgUpdateWasmDependencyMappingProposalAmino;
}
export interface MsgUpdateWasmDependencyMappingProposalSDKType {
    title: string;
    description: string;
    contract_address: string;
    wasm_dependency_mapping: WasmDependencyMappingSDKType;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFile {
    title: string;
    description: string;
    deposit: string;
    contractAddress: string;
    wasmDependencyMapping: WasmDependencyMapping;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposalJsonFile";
    value: Uint8Array;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFileAmino {
    title?: string;
    description?: string;
    deposit?: string;
    contract_address?: string;
    wasm_dependency_mapping?: WasmDependencyMappingAmino;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg {
    type: "cosmos-sdk/MsgUpdateWasmDependencyMappingProposalJsonFile";
    value: MsgUpdateWasmDependencyMappingProposalJsonFileAmino;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFileSDKType {
    title: string;
    description: string;
    deposit: string;
    contract_address: string;
    wasm_dependency_mapping: WasmDependencyMappingSDKType;
}
export declare const MsgUpdateResourceDependencyMappingProposal: {
    typeUrl: string;
    encode(message: MsgUpdateResourceDependencyMappingProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResourceDependencyMappingProposal;
    fromJSON(object: any): MsgUpdateResourceDependencyMappingProposal;
    toJSON(message: MsgUpdateResourceDependencyMappingProposal): unknown;
    fromPartial(object: Partial<MsgUpdateResourceDependencyMappingProposal>): MsgUpdateResourceDependencyMappingProposal;
    fromAmino(object: MsgUpdateResourceDependencyMappingProposalAmino): MsgUpdateResourceDependencyMappingProposal;
    toAmino(message: MsgUpdateResourceDependencyMappingProposal): MsgUpdateResourceDependencyMappingProposalAmino;
    fromAminoMsg(object: MsgUpdateResourceDependencyMappingProposalAminoMsg): MsgUpdateResourceDependencyMappingProposal;
    toAminoMsg(message: MsgUpdateResourceDependencyMappingProposal): MsgUpdateResourceDependencyMappingProposalAminoMsg;
    fromProtoMsg(message: MsgUpdateResourceDependencyMappingProposalProtoMsg): MsgUpdateResourceDependencyMappingProposal;
    toProto(message: MsgUpdateResourceDependencyMappingProposal): Uint8Array;
    toProtoMsg(message: MsgUpdateResourceDependencyMappingProposal): MsgUpdateResourceDependencyMappingProposalProtoMsg;
};
export declare const MsgUpdateResourceDependencyMappingProposalJsonFile: {
    typeUrl: string;
    encode(message: MsgUpdateResourceDependencyMappingProposalJsonFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResourceDependencyMappingProposalJsonFile;
    fromJSON(object: any): MsgUpdateResourceDependencyMappingProposalJsonFile;
    toJSON(message: MsgUpdateResourceDependencyMappingProposalJsonFile): unknown;
    fromPartial(object: Partial<MsgUpdateResourceDependencyMappingProposalJsonFile>): MsgUpdateResourceDependencyMappingProposalJsonFile;
    fromAmino(object: MsgUpdateResourceDependencyMappingProposalJsonFileAmino): MsgUpdateResourceDependencyMappingProposalJsonFile;
    toAmino(message: MsgUpdateResourceDependencyMappingProposalJsonFile): MsgUpdateResourceDependencyMappingProposalJsonFileAmino;
    fromAminoMsg(object: MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg): MsgUpdateResourceDependencyMappingProposalJsonFile;
    toAminoMsg(message: MsgUpdateResourceDependencyMappingProposalJsonFile): MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg;
    fromProtoMsg(message: MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg): MsgUpdateResourceDependencyMappingProposalJsonFile;
    toProto(message: MsgUpdateResourceDependencyMappingProposalJsonFile): Uint8Array;
    toProtoMsg(message: MsgUpdateResourceDependencyMappingProposalJsonFile): MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg;
};
export declare const MsgUpdateResourceDependencyMappingProposalResponse: {
    typeUrl: string;
    encode(_: MsgUpdateResourceDependencyMappingProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResourceDependencyMappingProposalResponse;
    fromJSON(_: any): MsgUpdateResourceDependencyMappingProposalResponse;
    toJSON(_: MsgUpdateResourceDependencyMappingProposalResponse): unknown;
    fromPartial(_: Partial<MsgUpdateResourceDependencyMappingProposalResponse>): MsgUpdateResourceDependencyMappingProposalResponse;
    fromAmino(_: MsgUpdateResourceDependencyMappingProposalResponseAmino): MsgUpdateResourceDependencyMappingProposalResponse;
    toAmino(_: MsgUpdateResourceDependencyMappingProposalResponse): MsgUpdateResourceDependencyMappingProposalResponseAmino;
    fromAminoMsg(object: MsgUpdateResourceDependencyMappingProposalResponseAminoMsg): MsgUpdateResourceDependencyMappingProposalResponse;
    toAminoMsg(message: MsgUpdateResourceDependencyMappingProposalResponse): MsgUpdateResourceDependencyMappingProposalResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateResourceDependencyMappingProposalResponseProtoMsg): MsgUpdateResourceDependencyMappingProposalResponse;
    toProto(message: MsgUpdateResourceDependencyMappingProposalResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateResourceDependencyMappingProposalResponse): MsgUpdateResourceDependencyMappingProposalResponseProtoMsg;
};
export declare const MsgUpdateWasmDependencyMappingProposal: {
    typeUrl: string;
    encode(message: MsgUpdateWasmDependencyMappingProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWasmDependencyMappingProposal;
    fromJSON(object: any): MsgUpdateWasmDependencyMappingProposal;
    toJSON(message: MsgUpdateWasmDependencyMappingProposal): unknown;
    fromPartial(object: Partial<MsgUpdateWasmDependencyMappingProposal>): MsgUpdateWasmDependencyMappingProposal;
    fromAmino(object: MsgUpdateWasmDependencyMappingProposalAmino): MsgUpdateWasmDependencyMappingProposal;
    toAmino(message: MsgUpdateWasmDependencyMappingProposal): MsgUpdateWasmDependencyMappingProposalAmino;
    fromAminoMsg(object: MsgUpdateWasmDependencyMappingProposalAminoMsg): MsgUpdateWasmDependencyMappingProposal;
    toAminoMsg(message: MsgUpdateWasmDependencyMappingProposal): MsgUpdateWasmDependencyMappingProposalAminoMsg;
    fromProtoMsg(message: MsgUpdateWasmDependencyMappingProposalProtoMsg): MsgUpdateWasmDependencyMappingProposal;
    toProto(message: MsgUpdateWasmDependencyMappingProposal): Uint8Array;
    toProtoMsg(message: MsgUpdateWasmDependencyMappingProposal): MsgUpdateWasmDependencyMappingProposalProtoMsg;
};
export declare const MsgUpdateWasmDependencyMappingProposalJsonFile: {
    typeUrl: string;
    encode(message: MsgUpdateWasmDependencyMappingProposalJsonFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWasmDependencyMappingProposalJsonFile;
    fromJSON(object: any): MsgUpdateWasmDependencyMappingProposalJsonFile;
    toJSON(message: MsgUpdateWasmDependencyMappingProposalJsonFile): unknown;
    fromPartial(object: Partial<MsgUpdateWasmDependencyMappingProposalJsonFile>): MsgUpdateWasmDependencyMappingProposalJsonFile;
    fromAmino(object: MsgUpdateWasmDependencyMappingProposalJsonFileAmino): MsgUpdateWasmDependencyMappingProposalJsonFile;
    toAmino(message: MsgUpdateWasmDependencyMappingProposalJsonFile): MsgUpdateWasmDependencyMappingProposalJsonFileAmino;
    fromAminoMsg(object: MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg): MsgUpdateWasmDependencyMappingProposalJsonFile;
    toAminoMsg(message: MsgUpdateWasmDependencyMappingProposalJsonFile): MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg;
    fromProtoMsg(message: MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg): MsgUpdateWasmDependencyMappingProposalJsonFile;
    toProto(message: MsgUpdateWasmDependencyMappingProposalJsonFile): Uint8Array;
    toProtoMsg(message: MsgUpdateWasmDependencyMappingProposalJsonFile): MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg;
};
