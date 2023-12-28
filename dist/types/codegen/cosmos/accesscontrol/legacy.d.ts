import { AccessOperation, AccessOperationAmino, AccessOperationSDKType } from "./accesscontrol";
import { AccessOperationSelectorType } from "./constants";
import * as _m0 from "protobufjs/minimal";
export interface LegacyAccessOperationWithSelector {
    operation?: AccessOperation;
    selectorType: AccessOperationSelectorType;
    selector: string;
}
export interface LegacyAccessOperationWithSelectorProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector";
    value: Uint8Array;
}
export interface LegacyAccessOperationWithSelectorAmino {
    operation?: AccessOperationAmino;
    selector_type?: AccessOperationSelectorType;
    selector?: string;
}
export interface LegacyAccessOperationWithSelectorAminoMsg {
    type: "cosmos-sdk/LegacyAccessOperationWithSelector";
    value: LegacyAccessOperationWithSelectorAmino;
}
export interface LegacyAccessOperationWithSelectorSDKType {
    operation?: AccessOperationSDKType;
    selector_type: AccessOperationSelectorType;
    selector: string;
}
export interface LegacyWasmDependencyMapping {
    enabled: boolean;
    accessOps: LegacyAccessOperationWithSelector[];
    resetReason: string;
    contractAddress: string;
}
export interface LegacyWasmDependencyMappingProtoMsg {
    typeUrl: "/cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping";
    value: Uint8Array;
}
export interface LegacyWasmDependencyMappingAmino {
    enabled?: boolean;
    access_ops?: LegacyAccessOperationWithSelectorAmino[];
    reset_reason?: string;
    contract_address?: string;
}
export interface LegacyWasmDependencyMappingAminoMsg {
    type: "cosmos-sdk/LegacyWasmDependencyMapping";
    value: LegacyWasmDependencyMappingAmino;
}
export interface LegacyWasmDependencyMappingSDKType {
    enabled: boolean;
    access_ops: LegacyAccessOperationWithSelectorSDKType[];
    reset_reason: string;
    contract_address: string;
}
export declare const LegacyAccessOperationWithSelector: {
    typeUrl: string;
    encode(message: LegacyAccessOperationWithSelector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyAccessOperationWithSelector;
    fromJSON(object: any): LegacyAccessOperationWithSelector;
    toJSON(message: LegacyAccessOperationWithSelector): unknown;
    fromPartial(object: Partial<LegacyAccessOperationWithSelector>): LegacyAccessOperationWithSelector;
    fromAmino(object: LegacyAccessOperationWithSelectorAmino): LegacyAccessOperationWithSelector;
    toAmino(message: LegacyAccessOperationWithSelector): LegacyAccessOperationWithSelectorAmino;
    fromAminoMsg(object: LegacyAccessOperationWithSelectorAminoMsg): LegacyAccessOperationWithSelector;
    toAminoMsg(message: LegacyAccessOperationWithSelector): LegacyAccessOperationWithSelectorAminoMsg;
    fromProtoMsg(message: LegacyAccessOperationWithSelectorProtoMsg): LegacyAccessOperationWithSelector;
    toProto(message: LegacyAccessOperationWithSelector): Uint8Array;
    toProtoMsg(message: LegacyAccessOperationWithSelector): LegacyAccessOperationWithSelectorProtoMsg;
};
export declare const LegacyWasmDependencyMapping: {
    typeUrl: string;
    encode(message: LegacyWasmDependencyMapping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyWasmDependencyMapping;
    fromJSON(object: any): LegacyWasmDependencyMapping;
    toJSON(message: LegacyWasmDependencyMapping): unknown;
    fromPartial(object: Partial<LegacyWasmDependencyMapping>): LegacyWasmDependencyMapping;
    fromAmino(object: LegacyWasmDependencyMappingAmino): LegacyWasmDependencyMapping;
    toAmino(message: LegacyWasmDependencyMapping): LegacyWasmDependencyMappingAmino;
    fromAminoMsg(object: LegacyWasmDependencyMappingAminoMsg): LegacyWasmDependencyMapping;
    toAminoMsg(message: LegacyWasmDependencyMapping): LegacyWasmDependencyMappingAminoMsg;
    fromProtoMsg(message: LegacyWasmDependencyMappingProtoMsg): LegacyWasmDependencyMapping;
    toProto(message: LegacyWasmDependencyMapping): Uint8Array;
    toProtoMsg(message: LegacyWasmDependencyMapping): LegacyWasmDependencyMappingProtoMsg;
};
