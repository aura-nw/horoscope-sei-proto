import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ValidatorSigningInfoLegacyMissedHeights {
    address: string;
    /** Height at which validator was first a candidate OR was unjailed */
    startHeight: Long;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailedUntil: Date;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     */
    tombstoned: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     */
    missedBlocksCounter: Long;
}
export interface ValidatorSigningInfoLegacyMissedHeightsProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfoLegacyMissedHeights";
    value: Uint8Array;
}
export interface ValidatorSigningInfoLegacyMissedHeightsAmino {
    address?: string;
    /** Height at which validator was first a candidate OR was unjailed */
    start_height?: string;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailed_until?: string;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     */
    tombstoned?: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     */
    missed_blocks_counter?: string;
}
export interface ValidatorSigningInfoLegacyMissedHeightsAminoMsg {
    type: "cosmos-sdk/ValidatorSigningInfoLegacyMissedHeights";
    value: ValidatorSigningInfoLegacyMissedHeightsAmino;
}
export interface ValidatorSigningInfoLegacyMissedHeightsSDKType {
    address: string;
    start_height: Long;
    jailed_until: Date;
    tombstoned: boolean;
    missed_blocks_counter: Long;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
    address: string;
    /** Height at which validator was first a candidate OR was unjailed */
    startHeight: Long;
    /**
     * Index which is incremented each time the validator was a bonded
     * in a block and may have signed a precommit or not. This in conjunction with the
     * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
     */
    indexOffset: Long;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailedUntil: Date;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     */
    tombstoned: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     */
    missedBlocksCounter: Long;
}
export interface ValidatorSigningInfoProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo";
    value: Uint8Array;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoAmino {
    address?: string;
    /** Height at which validator was first a candidate OR was unjailed */
    start_height?: string;
    /**
     * Index which is incremented each time the validator was a bonded
     * in a block and may have signed a precommit or not. This in conjunction with the
     * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
     */
    index_offset?: string;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailed_until?: string;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     */
    tombstoned?: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     */
    missed_blocks_counter?: string;
}
export interface ValidatorSigningInfoAminoMsg {
    type: "cosmos-sdk/ValidatorSigningInfo";
    value: ValidatorSigningInfoAmino;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoSDKType {
    address: string;
    start_height: Long;
    index_offset: Long;
    jailed_until: Date;
    tombstoned: boolean;
    missed_blocks_counter: Long;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArrayLegacyMissedHeights {
    address: string;
    /** Array of contains the heights when the validator missed the block */
    missedHeights: Long[];
}
export interface ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights";
    value: Uint8Array;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArrayLegacyMissedHeightsAmino {
    address?: string;
    /** Array of contains the heights when the validator missed the block */
    missed_heights?: string[];
}
export interface ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg {
    type: "cosmos-sdk/ValidatorMissedBlockArrayLegacyMissedHeights";
    value: ValidatorMissedBlockArrayLegacyMissedHeightsAmino;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArrayLegacyMissedHeightsSDKType {
    address: string;
    missed_heights: Long[];
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArray {
    address: string;
    /** store this in case window size changes but doesn't affect number of bit groups */
    windowSize: Long;
    /** Array of contains the missed block bits packed into uint64s */
    missedBlocks: Long[];
}
export interface ValidatorMissedBlockArrayProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArray";
    value: Uint8Array;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArrayAmino {
    address?: string;
    /** store this in case window size changes but doesn't affect number of bit groups */
    window_size?: string;
    /** Array of contains the missed block bits packed into uint64s */
    missed_blocks?: string[];
}
export interface ValidatorMissedBlockArrayAminoMsg {
    type: "cosmos-sdk/ValidatorMissedBlockArray";
    value: ValidatorMissedBlockArrayAmino;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArraySDKType {
    address: string;
    window_size: Long;
    missed_blocks: Long[];
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
    signedBlocksWindow: Long;
    minSignedPerWindow: Uint8Array;
    downtimeJailDuration: string;
    slashFractionDoubleSign: Uint8Array;
    slashFractionDowntime: Uint8Array;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.Params";
    value: Uint8Array;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsAmino {
    signed_blocks_window?: string;
    min_signed_per_window?: string;
    downtime_jail_duration?: string;
    slash_fraction_double_sign?: string;
    slash_fraction_downtime?: string;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsSDKType {
    signed_blocks_window: Long;
    min_signed_per_window: Uint8Array;
    downtime_jail_duration: string;
    slash_fraction_double_sign: Uint8Array;
    slash_fraction_downtime: Uint8Array;
}
export declare const ValidatorSigningInfoLegacyMissedHeights: {
    typeUrl: string;
    encode(message: ValidatorSigningInfoLegacyMissedHeights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfoLegacyMissedHeights;
    fromJSON(object: any): ValidatorSigningInfoLegacyMissedHeights;
    toJSON(message: ValidatorSigningInfoLegacyMissedHeights): unknown;
    fromPartial(object: Partial<ValidatorSigningInfoLegacyMissedHeights>): ValidatorSigningInfoLegacyMissedHeights;
    fromAmino(object: ValidatorSigningInfoLegacyMissedHeightsAmino): ValidatorSigningInfoLegacyMissedHeights;
    toAmino(message: ValidatorSigningInfoLegacyMissedHeights): ValidatorSigningInfoLegacyMissedHeightsAmino;
    fromAminoMsg(object: ValidatorSigningInfoLegacyMissedHeightsAminoMsg): ValidatorSigningInfoLegacyMissedHeights;
    toAminoMsg(message: ValidatorSigningInfoLegacyMissedHeights): ValidatorSigningInfoLegacyMissedHeightsAminoMsg;
    fromProtoMsg(message: ValidatorSigningInfoLegacyMissedHeightsProtoMsg): ValidatorSigningInfoLegacyMissedHeights;
    toProto(message: ValidatorSigningInfoLegacyMissedHeights): Uint8Array;
    toProtoMsg(message: ValidatorSigningInfoLegacyMissedHeights): ValidatorSigningInfoLegacyMissedHeightsProtoMsg;
};
export declare const ValidatorSigningInfo: {
    typeUrl: string;
    encode(message: ValidatorSigningInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo;
    fromJSON(object: any): ValidatorSigningInfo;
    toJSON(message: ValidatorSigningInfo): unknown;
    fromPartial(object: Partial<ValidatorSigningInfo>): ValidatorSigningInfo;
    fromAmino(object: ValidatorSigningInfoAmino): ValidatorSigningInfo;
    toAmino(message: ValidatorSigningInfo): ValidatorSigningInfoAmino;
    fromAminoMsg(object: ValidatorSigningInfoAminoMsg): ValidatorSigningInfo;
    toAminoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoAminoMsg;
    fromProtoMsg(message: ValidatorSigningInfoProtoMsg): ValidatorSigningInfo;
    toProto(message: ValidatorSigningInfo): Uint8Array;
    toProtoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoProtoMsg;
};
export declare const ValidatorMissedBlockArrayLegacyMissedHeights: {
    typeUrl: string;
    encode(message: ValidatorMissedBlockArrayLegacyMissedHeights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlockArrayLegacyMissedHeights;
    fromJSON(object: any): ValidatorMissedBlockArrayLegacyMissedHeights;
    toJSON(message: ValidatorMissedBlockArrayLegacyMissedHeights): unknown;
    fromPartial(object: Partial<ValidatorMissedBlockArrayLegacyMissedHeights>): ValidatorMissedBlockArrayLegacyMissedHeights;
    fromAmino(object: ValidatorMissedBlockArrayLegacyMissedHeightsAmino): ValidatorMissedBlockArrayLegacyMissedHeights;
    toAmino(message: ValidatorMissedBlockArrayLegacyMissedHeights): ValidatorMissedBlockArrayLegacyMissedHeightsAmino;
    fromAminoMsg(object: ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg): ValidatorMissedBlockArrayLegacyMissedHeights;
    toAminoMsg(message: ValidatorMissedBlockArrayLegacyMissedHeights): ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg;
    fromProtoMsg(message: ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg): ValidatorMissedBlockArrayLegacyMissedHeights;
    toProto(message: ValidatorMissedBlockArrayLegacyMissedHeights): Uint8Array;
    toProtoMsg(message: ValidatorMissedBlockArrayLegacyMissedHeights): ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg;
};
export declare const ValidatorMissedBlockArray: {
    typeUrl: string;
    encode(message: ValidatorMissedBlockArray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlockArray;
    fromJSON(object: any): ValidatorMissedBlockArray;
    toJSON(message: ValidatorMissedBlockArray): unknown;
    fromPartial(object: Partial<ValidatorMissedBlockArray>): ValidatorMissedBlockArray;
    fromAmino(object: ValidatorMissedBlockArrayAmino): ValidatorMissedBlockArray;
    toAmino(message: ValidatorMissedBlockArray): ValidatorMissedBlockArrayAmino;
    fromAminoMsg(object: ValidatorMissedBlockArrayAminoMsg): ValidatorMissedBlockArray;
    toAminoMsg(message: ValidatorMissedBlockArray): ValidatorMissedBlockArrayAminoMsg;
    fromProtoMsg(message: ValidatorMissedBlockArrayProtoMsg): ValidatorMissedBlockArray;
    toProto(message: ValidatorMissedBlockArray): Uint8Array;
    toProtoMsg(message: ValidatorMissedBlockArray): ValidatorMissedBlockArrayProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
