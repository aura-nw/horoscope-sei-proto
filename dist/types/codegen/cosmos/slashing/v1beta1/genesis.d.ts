import { Params, ParamsAmino, ParamsSDKType, ValidatorMissedBlockArray, ValidatorMissedBlockArrayAmino, ValidatorMissedBlockArraySDKType, ValidatorMissedBlockArrayLegacyMissedHeights, ValidatorMissedBlockArrayLegacyMissedHeightsAmino, ValidatorMissedBlockArrayLegacyMissedHeightsSDKType, ValidatorSigningInfo, ValidatorSigningInfoAmino, ValidatorSigningInfoSDKType, ValidatorSigningInfoLegacyMissedHeights, ValidatorSigningInfoLegacyMissedHeightsAmino, ValidatorSigningInfoLegacyMissedHeightsSDKType } from "./slashing";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to slashing. */
    params: Params;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signingInfos: SigningInfo[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missedBlocks: ValidatorMissedBlockArray[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of related to slashing. */
    params?: ParamsAmino;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signing_infos?: SigningInfoAmino[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missed_blocks?: ValidatorMissedBlockArrayAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    signing_infos: SigningInfoSDKType[];
    missed_blocks: ValidatorMissedBlockArraySDKType[];
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateLegacyMissingHeights {
    /** params defines all the paramaters of related to slashing. */
    params: Params;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signingInfos: SigningInfo[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missedBlocks: ValidatorMissedBlockArrayLegacyMissedHeights[];
}
export interface GenesisStateLegacyMissingHeightsProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisStateLegacyMissingHeights";
    value: Uint8Array;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateLegacyMissingHeightsAmino {
    /** params defines all the paramaters of related to slashing. */
    params?: ParamsAmino;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signing_infos?: SigningInfoAmino[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missed_blocks?: ValidatorMissedBlockArrayLegacyMissedHeightsAmino[];
}
export interface GenesisStateLegacyMissingHeightsAminoMsg {
    type: "cosmos-sdk/GenesisStateLegacyMissingHeights";
    value: GenesisStateLegacyMissingHeightsAmino;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateLegacyMissingHeightsSDKType {
    params: ParamsSDKType;
    signing_infos: SigningInfoSDKType[];
    missed_blocks: ValidatorMissedBlockArrayLegacyMissedHeightsSDKType[];
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateLegacyV43 {
    /** params defines all the paramaters of related to slashing. */
    params: Params;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signingInfos: SigningInfo[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missedBlocks: ValidatorMissedBlocks[];
}
export interface GenesisStateLegacyV43ProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisStateLegacyV43";
    value: Uint8Array;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateLegacyV43Amino {
    /** params defines all the paramaters of related to slashing. */
    params?: ParamsAmino;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signing_infos?: SigningInfoAmino[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missed_blocks?: ValidatorMissedBlocksAmino[];
}
export interface GenesisStateLegacyV43AminoMsg {
    type: "cosmos-sdk/GenesisStateLegacyV43";
    value: GenesisStateLegacyV43Amino;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateLegacyV43SDKType {
    params: ParamsSDKType;
    signing_infos: SigningInfoSDKType[];
    missed_blocks: ValidatorMissedBlocksSDKType[];
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
    /** address is the validator address. */
    address: string;
    /** validator_signing_info represents the signing info of this validator. */
    validatorSigningInfo: ValidatorSigningInfo;
}
export interface SigningInfoProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfo";
    value: Uint8Array;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoAmino {
    /** address is the validator address. */
    address?: string;
    /** validator_signing_info represents the signing info of this validator. */
    validator_signing_info?: ValidatorSigningInfoAmino;
}
export interface SigningInfoAminoMsg {
    type: "cosmos-sdk/SigningInfo";
    value: SigningInfoAmino;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoSDKType {
    address: string;
    validator_signing_info: ValidatorSigningInfoSDKType;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoLegacyMissedHeights {
    /** address is the validator address. */
    address: string;
    /** validator_signing_info represents the signing info of this validator. */
    validatorSigningInfo: ValidatorSigningInfoLegacyMissedHeights;
}
export interface SigningInfoLegacyMissedHeightsProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfoLegacyMissedHeights";
    value: Uint8Array;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoLegacyMissedHeightsAmino {
    /** address is the validator address. */
    address?: string;
    /** validator_signing_info represents the signing info of this validator. */
    validator_signing_info?: ValidatorSigningInfoLegacyMissedHeightsAmino;
}
export interface SigningInfoLegacyMissedHeightsAminoMsg {
    type: "cosmos-sdk/SigningInfoLegacyMissedHeights";
    value: SigningInfoLegacyMissedHeightsAmino;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoLegacyMissedHeightsSDKType {
    address: string;
    validator_signing_info: ValidatorSigningInfoLegacyMissedHeightsSDKType;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
    /** address is the validator address. */
    address: string;
    /** missed_blocks is an array of missed blocks by the validator. */
    missedBlocks: MissedBlock[];
}
export interface ValidatorMissedBlocksProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks";
    value: Uint8Array;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocksAmino {
    /** address is the validator address. */
    address?: string;
    /** missed_blocks is an array of missed blocks by the validator. */
    missed_blocks?: MissedBlockAmino[];
}
export interface ValidatorMissedBlocksAminoMsg {
    type: "cosmos-sdk/ValidatorMissedBlocks";
    value: ValidatorMissedBlocksAmino;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocksSDKType {
    address: string;
    missed_blocks: MissedBlockSDKType[];
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
    /** index is the height at which the block was missed. */
    index: Long;
    /** missed is the missed status. */
    missed: boolean;
}
export interface MissedBlockProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MissedBlock";
    value: Uint8Array;
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockAmino {
    /** index is the height at which the block was missed. */
    index?: string;
    /** missed is the missed status. */
    missed?: boolean;
}
export interface MissedBlockAminoMsg {
    type: "cosmos-sdk/MissedBlock";
    value: MissedBlockAmino;
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockSDKType {
    index: Long;
    missed: boolean;
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
export declare const GenesisStateLegacyMissingHeights: {
    typeUrl: string;
    encode(message: GenesisStateLegacyMissingHeights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisStateLegacyMissingHeights;
    fromJSON(object: any): GenesisStateLegacyMissingHeights;
    toJSON(message: GenesisStateLegacyMissingHeights): unknown;
    fromPartial(object: Partial<GenesisStateLegacyMissingHeights>): GenesisStateLegacyMissingHeights;
    fromAmino(object: GenesisStateLegacyMissingHeightsAmino): GenesisStateLegacyMissingHeights;
    toAmino(message: GenesisStateLegacyMissingHeights): GenesisStateLegacyMissingHeightsAmino;
    fromAminoMsg(object: GenesisStateLegacyMissingHeightsAminoMsg): GenesisStateLegacyMissingHeights;
    toAminoMsg(message: GenesisStateLegacyMissingHeights): GenesisStateLegacyMissingHeightsAminoMsg;
    fromProtoMsg(message: GenesisStateLegacyMissingHeightsProtoMsg): GenesisStateLegacyMissingHeights;
    toProto(message: GenesisStateLegacyMissingHeights): Uint8Array;
    toProtoMsg(message: GenesisStateLegacyMissingHeights): GenesisStateLegacyMissingHeightsProtoMsg;
};
export declare const GenesisStateLegacyV43: {
    typeUrl: string;
    encode(message: GenesisStateLegacyV43, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisStateLegacyV43;
    fromJSON(object: any): GenesisStateLegacyV43;
    toJSON(message: GenesisStateLegacyV43): unknown;
    fromPartial(object: Partial<GenesisStateLegacyV43>): GenesisStateLegacyV43;
    fromAmino(object: GenesisStateLegacyV43Amino): GenesisStateLegacyV43;
    toAmino(message: GenesisStateLegacyV43): GenesisStateLegacyV43Amino;
    fromAminoMsg(object: GenesisStateLegacyV43AminoMsg): GenesisStateLegacyV43;
    toAminoMsg(message: GenesisStateLegacyV43): GenesisStateLegacyV43AminoMsg;
    fromProtoMsg(message: GenesisStateLegacyV43ProtoMsg): GenesisStateLegacyV43;
    toProto(message: GenesisStateLegacyV43): Uint8Array;
    toProtoMsg(message: GenesisStateLegacyV43): GenesisStateLegacyV43ProtoMsg;
};
export declare const SigningInfo: {
    typeUrl: string;
    encode(message: SigningInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningInfo;
    fromJSON(object: any): SigningInfo;
    toJSON(message: SigningInfo): unknown;
    fromPartial(object: Partial<SigningInfo>): SigningInfo;
    fromAmino(object: SigningInfoAmino): SigningInfo;
    toAmino(message: SigningInfo): SigningInfoAmino;
    fromAminoMsg(object: SigningInfoAminoMsg): SigningInfo;
    toAminoMsg(message: SigningInfo): SigningInfoAminoMsg;
    fromProtoMsg(message: SigningInfoProtoMsg): SigningInfo;
    toProto(message: SigningInfo): Uint8Array;
    toProtoMsg(message: SigningInfo): SigningInfoProtoMsg;
};
export declare const SigningInfoLegacyMissedHeights: {
    typeUrl: string;
    encode(message: SigningInfoLegacyMissedHeights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningInfoLegacyMissedHeights;
    fromJSON(object: any): SigningInfoLegacyMissedHeights;
    toJSON(message: SigningInfoLegacyMissedHeights): unknown;
    fromPartial(object: Partial<SigningInfoLegacyMissedHeights>): SigningInfoLegacyMissedHeights;
    fromAmino(object: SigningInfoLegacyMissedHeightsAmino): SigningInfoLegacyMissedHeights;
    toAmino(message: SigningInfoLegacyMissedHeights): SigningInfoLegacyMissedHeightsAmino;
    fromAminoMsg(object: SigningInfoLegacyMissedHeightsAminoMsg): SigningInfoLegacyMissedHeights;
    toAminoMsg(message: SigningInfoLegacyMissedHeights): SigningInfoLegacyMissedHeightsAminoMsg;
    fromProtoMsg(message: SigningInfoLegacyMissedHeightsProtoMsg): SigningInfoLegacyMissedHeights;
    toProto(message: SigningInfoLegacyMissedHeights): Uint8Array;
    toProtoMsg(message: SigningInfoLegacyMissedHeights): SigningInfoLegacyMissedHeightsProtoMsg;
};
export declare const ValidatorMissedBlocks: {
    typeUrl: string;
    encode(message: ValidatorMissedBlocks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlocks;
    fromJSON(object: any): ValidatorMissedBlocks;
    toJSON(message: ValidatorMissedBlocks): unknown;
    fromPartial(object: Partial<ValidatorMissedBlocks>): ValidatorMissedBlocks;
    fromAmino(object: ValidatorMissedBlocksAmino): ValidatorMissedBlocks;
    toAmino(message: ValidatorMissedBlocks): ValidatorMissedBlocksAmino;
    fromAminoMsg(object: ValidatorMissedBlocksAminoMsg): ValidatorMissedBlocks;
    toAminoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksAminoMsg;
    fromProtoMsg(message: ValidatorMissedBlocksProtoMsg): ValidatorMissedBlocks;
    toProto(message: ValidatorMissedBlocks): Uint8Array;
    toProtoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksProtoMsg;
};
export declare const MissedBlock: {
    typeUrl: string;
    encode(message: MissedBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MissedBlock;
    fromJSON(object: any): MissedBlock;
    toJSON(message: MissedBlock): unknown;
    fromPartial(object: Partial<MissedBlock>): MissedBlock;
    fromAmino(object: MissedBlockAmino): MissedBlock;
    toAmino(message: MissedBlock): MissedBlockAmino;
    fromAminoMsg(object: MissedBlockAminoMsg): MissedBlock;
    toAminoMsg(message: MissedBlock): MissedBlockAminoMsg;
    fromProtoMsg(message: MissedBlockProtoMsg): MissedBlock;
    toProto(message: MissedBlock): Uint8Array;
    toProtoMsg(message: MissedBlock): MissedBlockProtoMsg;
};
