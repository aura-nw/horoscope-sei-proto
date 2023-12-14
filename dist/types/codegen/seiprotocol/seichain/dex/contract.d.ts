import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ContractInfo {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependencies: ContractDependencyInfo[];
    numIncomingDependencies: Long;
}
export interface ContractInfoProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.ContractInfo";
    value: Uint8Array;
}
export interface ContractInfoAmino {
    codeId?: string;
    contractAddr?: string;
    needHook?: boolean;
    needOrderMatching?: boolean;
    dependencies?: ContractDependencyInfoAmino[];
    numIncomingDependencies?: string;
}
export interface ContractInfoAminoMsg {
    type: "/seiprotocol.seichain.dex.ContractInfo";
    value: ContractInfoAmino;
}
export interface ContractInfoSDKType {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependencies: ContractDependencyInfoSDKType[];
    numIncomingDependencies: Long;
}
export interface ContractInfoV2 {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependencies: ContractDependencyInfo[];
    numIncomingDependencies: Long;
    creator: string;
    rentBalance: Long;
    suspended: boolean;
    suspensionReason: string;
}
export interface ContractInfoV2ProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.ContractInfoV2";
    value: Uint8Array;
}
export interface ContractInfoV2Amino {
    codeId?: string;
    contractAddr?: string;
    needHook?: boolean;
    needOrderMatching?: boolean;
    dependencies?: ContractDependencyInfoAmino[];
    numIncomingDependencies?: string;
    creator?: string;
    rentBalance?: string;
    suspended?: boolean;
    suspensionReason?: string;
}
export interface ContractInfoV2AminoMsg {
    type: "/seiprotocol.seichain.dex.ContractInfoV2";
    value: ContractInfoV2Amino;
}
export interface ContractInfoV2SDKType {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependencies: ContractDependencyInfoSDKType[];
    numIncomingDependencies: Long;
    creator: string;
    rentBalance: Long;
    suspended: boolean;
    suspensionReason: string;
}
/**
 * suppose A is first registered and depends on X, then B is added and depends on X,
 * and then C is added and depends on X, then A is the elder sibling to B and B is
 * the younger sibling to A, and B is the elder sibling to C and C is the younger to B
 */
export interface ContractDependencyInfo {
    dependency: string;
    immediateElderSibling: string;
    immediateYoungerSibling: string;
}
export interface ContractDependencyInfoProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.ContractDependencyInfo";
    value: Uint8Array;
}
/**
 * suppose A is first registered and depends on X, then B is added and depends on X,
 * and then C is added and depends on X, then A is the elder sibling to B and B is
 * the younger sibling to A, and B is the elder sibling to C and C is the younger to B
 */
export interface ContractDependencyInfoAmino {
    dependency?: string;
    immediateElderSibling?: string;
    immediateYoungerSibling?: string;
}
export interface ContractDependencyInfoAminoMsg {
    type: "/seiprotocol.seichain.dex.ContractDependencyInfo";
    value: ContractDependencyInfoAmino;
}
/**
 * suppose A is first registered and depends on X, then B is added and depends on X,
 * and then C is added and depends on X, then A is the elder sibling to B and B is
 * the younger sibling to A, and B is the elder sibling to C and C is the younger to B
 */
export interface ContractDependencyInfoSDKType {
    dependency: string;
    immediateElderSibling: string;
    immediateYoungerSibling: string;
}
export interface LegacyContractInfo {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependentContractAddrs: string[];
}
export interface LegacyContractInfoProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.LegacyContractInfo";
    value: Uint8Array;
}
export interface LegacyContractInfoAmino {
    codeId?: string;
    contractAddr?: string;
    needHook?: boolean;
    needOrderMatching?: boolean;
    dependentContractAddrs?: string[];
}
export interface LegacyContractInfoAminoMsg {
    type: "/seiprotocol.seichain.dex.LegacyContractInfo";
    value: LegacyContractInfoAmino;
}
export interface LegacyContractInfoSDKType {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependentContractAddrs: string[];
}
export declare const ContractInfo: {
    typeUrl: string;
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo;
    fromJSON(object: any): ContractInfo;
    toJSON(message: ContractInfo): unknown;
    fromPartial(object: Partial<ContractInfo>): ContractInfo;
    fromAmino(object: ContractInfoAmino): ContractInfo;
    toAmino(message: ContractInfo): ContractInfoAmino;
    fromAminoMsg(object: ContractInfoAminoMsg): ContractInfo;
    fromProtoMsg(message: ContractInfoProtoMsg): ContractInfo;
    toProto(message: ContractInfo): Uint8Array;
    toProtoMsg(message: ContractInfo): ContractInfoProtoMsg;
};
export declare const ContractInfoV2: {
    typeUrl: string;
    encode(message: ContractInfoV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoV2;
    fromJSON(object: any): ContractInfoV2;
    toJSON(message: ContractInfoV2): unknown;
    fromPartial(object: Partial<ContractInfoV2>): ContractInfoV2;
    fromAmino(object: ContractInfoV2Amino): ContractInfoV2;
    toAmino(message: ContractInfoV2): ContractInfoV2Amino;
    fromAminoMsg(object: ContractInfoV2AminoMsg): ContractInfoV2;
    fromProtoMsg(message: ContractInfoV2ProtoMsg): ContractInfoV2;
    toProto(message: ContractInfoV2): Uint8Array;
    toProtoMsg(message: ContractInfoV2): ContractInfoV2ProtoMsg;
};
export declare const ContractDependencyInfo: {
    typeUrl: string;
    encode(message: ContractDependencyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractDependencyInfo;
    fromJSON(object: any): ContractDependencyInfo;
    toJSON(message: ContractDependencyInfo): unknown;
    fromPartial(object: Partial<ContractDependencyInfo>): ContractDependencyInfo;
    fromAmino(object: ContractDependencyInfoAmino): ContractDependencyInfo;
    toAmino(message: ContractDependencyInfo): ContractDependencyInfoAmino;
    fromAminoMsg(object: ContractDependencyInfoAminoMsg): ContractDependencyInfo;
    fromProtoMsg(message: ContractDependencyInfoProtoMsg): ContractDependencyInfo;
    toProto(message: ContractDependencyInfo): Uint8Array;
    toProtoMsg(message: ContractDependencyInfo): ContractDependencyInfoProtoMsg;
};
export declare const LegacyContractInfo: {
    typeUrl: string;
    encode(message: LegacyContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyContractInfo;
    fromJSON(object: any): LegacyContractInfo;
    toJSON(message: LegacyContractInfo): unknown;
    fromPartial(object: Partial<LegacyContractInfo>): LegacyContractInfo;
    fromAmino(object: LegacyContractInfoAmino): LegacyContractInfo;
    toAmino(message: LegacyContractInfo): LegacyContractInfoAmino;
    fromAminoMsg(object: LegacyContractInfoAminoMsg): LegacyContractInfo;
    fromProtoMsg(message: LegacyContractInfoProtoMsg): LegacyContractInfo;
    toProto(message: LegacyContractInfo): Uint8Array;
    toProtoMsg(message: LegacyContractInfo): LegacyContractInfoProtoMsg;
};
