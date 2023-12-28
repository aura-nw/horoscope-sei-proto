import { AccessType, ResourceType, AccessOperationSelectorType, WasmMessageSubtype } from "./constants";
import * as _m0 from "protobufjs/minimal";
export interface AccessOperation {
    accessType: AccessType;
    resourceType: ResourceType;
    identifierTemplate: string;
}
export interface AccessOperationProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.AccessOperation";
    value: Uint8Array;
}
export interface AccessOperationAmino {
    access_type?: AccessType;
    resource_type?: ResourceType;
    identifier_template?: string;
}
export interface AccessOperationAminoMsg {
    type: "cosmos-sdk/AccessOperation";
    value: AccessOperationAmino;
}
export interface AccessOperationSDKType {
    access_type: AccessType;
    resource_type: ResourceType;
    identifier_template: string;
}
export interface WasmAccessOperation {
    operation?: AccessOperation;
    selectorType: AccessOperationSelectorType;
    selector: string;
}
export interface WasmAccessOperationProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmAccessOperation";
    value: Uint8Array;
}
export interface WasmAccessOperationAmino {
    operation?: AccessOperationAmino;
    selector_type?: AccessOperationSelectorType;
    selector?: string;
}
export interface WasmAccessOperationAminoMsg {
    type: "cosmos-sdk/WasmAccessOperation";
    value: WasmAccessOperationAmino;
}
export interface WasmAccessOperationSDKType {
    operation?: AccessOperationSDKType;
    selector_type: AccessOperationSelectorType;
    selector: string;
}
export interface WasmContractReference {
    contractAddress: string;
    messageType: WasmMessageSubtype;
    messageName: string;
    jsonTranslationTemplate: string;
}
export interface WasmContractReferenceProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmContractReference";
    value: Uint8Array;
}
export interface WasmContractReferenceAmino {
    contract_address?: string;
    message_type?: WasmMessageSubtype;
    message_name?: string;
    json_translation_template?: string;
}
export interface WasmContractReferenceAminoMsg {
    type: "cosmos-sdk/WasmContractReference";
    value: WasmContractReferenceAmino;
}
export interface WasmContractReferenceSDKType {
    contract_address: string;
    message_type: WasmMessageSubtype;
    message_name: string;
    json_translation_template: string;
}
export interface WasmContractReferences {
    messageName: string;
    contractReferences: WasmContractReference[];
}
export interface WasmContractReferencesProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmContractReferences";
    value: Uint8Array;
}
export interface WasmContractReferencesAmino {
    message_name?: string;
    contract_references?: WasmContractReferenceAmino[];
}
export interface WasmContractReferencesAminoMsg {
    type: "cosmos-sdk/WasmContractReferences";
    value: WasmContractReferencesAmino;
}
export interface WasmContractReferencesSDKType {
    message_name: string;
    contract_references: WasmContractReferenceSDKType[];
}
export interface WasmAccessOperations {
    messageName: string;
    wasmOperations: WasmAccessOperation[];
}
export interface WasmAccessOperationsProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmAccessOperations";
    value: Uint8Array;
}
export interface WasmAccessOperationsAmino {
    message_name?: string;
    wasm_operations?: WasmAccessOperationAmino[];
}
export interface WasmAccessOperationsAminoMsg {
    type: "cosmos-sdk/WasmAccessOperations";
    value: WasmAccessOperationsAmino;
}
export interface WasmAccessOperationsSDKType {
    message_name: string;
    wasm_operations: WasmAccessOperationSDKType[];
}
export interface MessageDependencyMapping {
    messageKey: string;
    accessOps: AccessOperation[];
    dynamicEnabled: boolean;
}
export interface MessageDependencyMappingProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.MessageDependencyMapping";
    value: Uint8Array;
}
export interface MessageDependencyMappingAmino {
    message_key?: string;
    access_ops?: AccessOperationAmino[];
    dynamic_enabled?: boolean;
}
export interface MessageDependencyMappingAminoMsg {
    type: "cosmos-sdk/MessageDependencyMapping";
    value: MessageDependencyMappingAmino;
}
export interface MessageDependencyMappingSDKType {
    message_key: string;
    access_ops: AccessOperationSDKType[];
    dynamic_enabled: boolean;
}
export interface WasmDependencyMapping {
    baseAccessOps: WasmAccessOperation[];
    queryAccessOps: WasmAccessOperations[];
    executeAccessOps: WasmAccessOperations[];
    baseContractReferences: WasmContractReference[];
    queryContractReferences: WasmContractReferences[];
    executeContractReferences: WasmContractReferences[];
    resetReason: string;
    contractAddress: string;
}
export interface WasmDependencyMappingProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.WasmDependencyMapping";
    value: Uint8Array;
}
export interface WasmDependencyMappingAmino {
    base_access_ops?: WasmAccessOperationAmino[];
    query_access_ops?: WasmAccessOperationsAmino[];
    execute_access_ops?: WasmAccessOperationsAmino[];
    base_contract_references?: WasmContractReferenceAmino[];
    query_contract_references?: WasmContractReferencesAmino[];
    execute_contract_references?: WasmContractReferencesAmino[];
    reset_reason?: string;
    contract_address?: string;
}
export interface WasmDependencyMappingAminoMsg {
    type: "cosmos-sdk/WasmDependencyMapping";
    value: WasmDependencyMappingAmino;
}
export interface WasmDependencyMappingSDKType {
    base_access_ops: WasmAccessOperationSDKType[];
    query_access_ops: WasmAccessOperationsSDKType[];
    execute_access_ops: WasmAccessOperationsSDKType[];
    base_contract_references: WasmContractReferenceSDKType[];
    query_contract_references: WasmContractReferencesSDKType[];
    execute_contract_references: WasmContractReferencesSDKType[];
    reset_reason: string;
    contract_address: string;
}
export declare const AccessOperation: {
    typeUrl: string;
    encode(message: AccessOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessOperation;
    fromJSON(object: any): AccessOperation;
    toJSON(message: AccessOperation): unknown;
    fromPartial(object: Partial<AccessOperation>): AccessOperation;
    fromAmino(object: AccessOperationAmino): AccessOperation;
    toAmino(message: AccessOperation): AccessOperationAmino;
    fromAminoMsg(object: AccessOperationAminoMsg): AccessOperation;
    toAminoMsg(message: AccessOperation): AccessOperationAminoMsg;
    fromProtoMsg(message: AccessOperationProtoMsg): AccessOperation;
    toProto(message: AccessOperation): Uint8Array;
    toProtoMsg(message: AccessOperation): AccessOperationProtoMsg;
};
export declare const WasmAccessOperation: {
    typeUrl: string;
    encode(message: WasmAccessOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmAccessOperation;
    fromJSON(object: any): WasmAccessOperation;
    toJSON(message: WasmAccessOperation): unknown;
    fromPartial(object: Partial<WasmAccessOperation>): WasmAccessOperation;
    fromAmino(object: WasmAccessOperationAmino): WasmAccessOperation;
    toAmino(message: WasmAccessOperation): WasmAccessOperationAmino;
    fromAminoMsg(object: WasmAccessOperationAminoMsg): WasmAccessOperation;
    toAminoMsg(message: WasmAccessOperation): WasmAccessOperationAminoMsg;
    fromProtoMsg(message: WasmAccessOperationProtoMsg): WasmAccessOperation;
    toProto(message: WasmAccessOperation): Uint8Array;
    toProtoMsg(message: WasmAccessOperation): WasmAccessOperationProtoMsg;
};
export declare const WasmContractReference: {
    typeUrl: string;
    encode(message: WasmContractReference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmContractReference;
    fromJSON(object: any): WasmContractReference;
    toJSON(message: WasmContractReference): unknown;
    fromPartial(object: Partial<WasmContractReference>): WasmContractReference;
    fromAmino(object: WasmContractReferenceAmino): WasmContractReference;
    toAmino(message: WasmContractReference): WasmContractReferenceAmino;
    fromAminoMsg(object: WasmContractReferenceAminoMsg): WasmContractReference;
    toAminoMsg(message: WasmContractReference): WasmContractReferenceAminoMsg;
    fromProtoMsg(message: WasmContractReferenceProtoMsg): WasmContractReference;
    toProto(message: WasmContractReference): Uint8Array;
    toProtoMsg(message: WasmContractReference): WasmContractReferenceProtoMsg;
};
export declare const WasmContractReferences: {
    typeUrl: string;
    encode(message: WasmContractReferences, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmContractReferences;
    fromJSON(object: any): WasmContractReferences;
    toJSON(message: WasmContractReferences): unknown;
    fromPartial(object: Partial<WasmContractReferences>): WasmContractReferences;
    fromAmino(object: WasmContractReferencesAmino): WasmContractReferences;
    toAmino(message: WasmContractReferences): WasmContractReferencesAmino;
    fromAminoMsg(object: WasmContractReferencesAminoMsg): WasmContractReferences;
    toAminoMsg(message: WasmContractReferences): WasmContractReferencesAminoMsg;
    fromProtoMsg(message: WasmContractReferencesProtoMsg): WasmContractReferences;
    toProto(message: WasmContractReferences): Uint8Array;
    toProtoMsg(message: WasmContractReferences): WasmContractReferencesProtoMsg;
};
export declare const WasmAccessOperations: {
    typeUrl: string;
    encode(message: WasmAccessOperations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmAccessOperations;
    fromJSON(object: any): WasmAccessOperations;
    toJSON(message: WasmAccessOperations): unknown;
    fromPartial(object: Partial<WasmAccessOperations>): WasmAccessOperations;
    fromAmino(object: WasmAccessOperationsAmino): WasmAccessOperations;
    toAmino(message: WasmAccessOperations): WasmAccessOperationsAmino;
    fromAminoMsg(object: WasmAccessOperationsAminoMsg): WasmAccessOperations;
    toAminoMsg(message: WasmAccessOperations): WasmAccessOperationsAminoMsg;
    fromProtoMsg(message: WasmAccessOperationsProtoMsg): WasmAccessOperations;
    toProto(message: WasmAccessOperations): Uint8Array;
    toProtoMsg(message: WasmAccessOperations): WasmAccessOperationsProtoMsg;
};
export declare const MessageDependencyMapping: {
    typeUrl: string;
    encode(message: MessageDependencyMapping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageDependencyMapping;
    fromJSON(object: any): MessageDependencyMapping;
    toJSON(message: MessageDependencyMapping): unknown;
    fromPartial(object: Partial<MessageDependencyMapping>): MessageDependencyMapping;
    fromAmino(object: MessageDependencyMappingAmino): MessageDependencyMapping;
    toAmino(message: MessageDependencyMapping): MessageDependencyMappingAmino;
    fromAminoMsg(object: MessageDependencyMappingAminoMsg): MessageDependencyMapping;
    toAminoMsg(message: MessageDependencyMapping): MessageDependencyMappingAminoMsg;
    fromProtoMsg(message: MessageDependencyMappingProtoMsg): MessageDependencyMapping;
    toProto(message: MessageDependencyMapping): Uint8Array;
    toProtoMsg(message: MessageDependencyMapping): MessageDependencyMappingProtoMsg;
};
export declare const WasmDependencyMapping: {
    typeUrl: string;
    encode(message: WasmDependencyMapping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmDependencyMapping;
    fromJSON(object: any): WasmDependencyMapping;
    toJSON(message: WasmDependencyMapping): unknown;
    fromPartial(object: Partial<WasmDependencyMapping>): WasmDependencyMapping;
    fromAmino(object: WasmDependencyMappingAmino): WasmDependencyMapping;
    toAmino(message: WasmDependencyMapping): WasmDependencyMappingAmino;
    fromAminoMsg(object: WasmDependencyMappingAminoMsg): WasmDependencyMapping;
    toAminoMsg(message: WasmDependencyMapping): WasmDependencyMappingAminoMsg;
    fromProtoMsg(message: WasmDependencyMappingProtoMsg): WasmDependencyMapping;
    toProto(message: WasmDependencyMapping): Uint8Array;
    toProtoMsg(message: WasmDependencyMapping): WasmDependencyMappingProtoMsg;
};
