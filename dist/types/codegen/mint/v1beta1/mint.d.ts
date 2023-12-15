import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the most recent */
export interface Minter {
    /** yyyy-mm-dd */
    startDate: string;
    /** yyyy-mm-dd */
    endDate: string;
    denom: string;
    totalMintAmount: Long;
    remainingMintAmount: Long;
    lastMintAmount: Long;
    lastMintDate: string;
    /** yyyy-mm-dd */
    lastMintHeight: Long;
}
export interface MinterProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.Minter";
    value: Uint8Array;
}
/** Minter represents the most recent */
export interface MinterAmino {
    /** yyyy-mm-dd */
    start_date?: string;
    /** yyyy-mm-dd */
    end_date?: string;
    denom?: string;
    total_mint_amount?: string;
    remaining_mint_amount?: string;
    last_mint_amount?: string;
    last_mint_date?: string;
    /** yyyy-mm-dd */
    last_mint_height?: string;
}
export interface MinterAminoMsg {
    type: "/seiprotocol.seichain.mint.Minter";
    value: MinterAmino;
}
/** Minter represents the most recent */
export interface MinterSDKType {
    start_date: string;
    end_date: string;
    denom: string;
    total_mint_amount: Long;
    remaining_mint_amount: Long;
    last_mint_amount: Long;
    last_mint_date: string;
    last_mint_height: Long;
}
export interface ScheduledTokenRelease {
    /** yyyy-mm-dd */
    startDate: string;
    /** yyyy-mm-dd */
    endDate: string;
    tokenReleaseAmount: Long;
}
export interface ScheduledTokenReleaseProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.ScheduledTokenRelease";
    value: Uint8Array;
}
export interface ScheduledTokenReleaseAmino {
    /** yyyy-mm-dd */
    start_date?: string;
    /** yyyy-mm-dd */
    end_date?: string;
    token_release_amount?: string;
}
export interface ScheduledTokenReleaseAminoMsg {
    type: "/seiprotocol.seichain.mint.ScheduledTokenRelease";
    value: ScheduledTokenReleaseAmino;
}
export interface ScheduledTokenReleaseSDKType {
    start_date: string;
    end_date: string;
    token_release_amount: Long;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** List of token release schedules */
    tokenReleaseSchedule: ScheduledTokenRelease[];
}
export interface ParamsProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.Params";
    value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
    /** type of coin to mint */
    mint_denom?: string;
    /** List of token release schedules */
    token_release_schedule?: ScheduledTokenReleaseAmino[];
}
export interface ParamsAminoMsg {
    type: "/seiprotocol.seichain.mint.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    mint_denom: string;
    token_release_schedule: ScheduledTokenReleaseSDKType[];
}
/** Minter represents the most recent */
export interface Version2Minter {
    lastMintAmount: string;
    lastMintDate: string;
    lastMintHeight: Long;
    denom: string;
}
export interface Version2MinterProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.Version2Minter";
    value: Uint8Array;
}
/** Minter represents the most recent */
export interface Version2MinterAmino {
    last_mint_amount?: string;
    last_mint_date?: string;
    last_mint_height?: string;
    denom?: string;
}
export interface Version2MinterAminoMsg {
    type: "/seiprotocol.seichain.mint.Version2Minter";
    value: Version2MinterAmino;
}
/** Minter represents the most recent */
export interface Version2MinterSDKType {
    last_mint_amount: string;
    last_mint_date: string;
    last_mint_height: Long;
    denom: string;
}
export interface Version2ScheduledTokenRelease {
    /** yyyy-mm-dd */
    date: string;
    tokenReleaseAmount: Long;
}
export interface Version2ScheduledTokenReleaseProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.Version2ScheduledTokenRelease";
    value: Uint8Array;
}
export interface Version2ScheduledTokenReleaseAmino {
    /** yyyy-mm-dd */
    date?: string;
    token_release_amount?: string;
}
export interface Version2ScheduledTokenReleaseAminoMsg {
    type: "/seiprotocol.seichain.mint.Version2ScheduledTokenRelease";
    value: Version2ScheduledTokenReleaseAmino;
}
export interface Version2ScheduledTokenReleaseSDKType {
    date: string;
    token_release_amount: Long;
}
/** Params holds parameters for the mint module. */
export interface Version2Params {
    /** type of coin to mint */
    mintDenom: string;
    /** List of token release schedules */
    tokenReleaseSchedule: Version2ScheduledTokenRelease[];
}
export interface Version2ParamsProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.Version2Params";
    value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface Version2ParamsAmino {
    /** type of coin to mint */
    mint_denom?: string;
    /** List of token release schedules */
    token_release_schedule?: Version2ScheduledTokenReleaseAmino[];
}
export interface Version2ParamsAminoMsg {
    type: "/seiprotocol.seichain.mint.Version2Params";
    value: Version2ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface Version2ParamsSDKType {
    mint_denom: string;
    token_release_schedule: Version2ScheduledTokenReleaseSDKType[];
}
export declare const Minter: {
    typeUrl: string;
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial(object: Partial<Minter>): Minter;
    fromAmino(object: MinterAmino): Minter;
    toAmino(message: Minter): MinterAmino;
    fromAminoMsg(object: MinterAminoMsg): Minter;
    fromProtoMsg(message: MinterProtoMsg): Minter;
    toProto(message: Minter): Uint8Array;
    toProtoMsg(message: Minter): MinterProtoMsg;
};
export declare const ScheduledTokenRelease: {
    typeUrl: string;
    encode(message: ScheduledTokenRelease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledTokenRelease;
    fromJSON(object: any): ScheduledTokenRelease;
    toJSON(message: ScheduledTokenRelease): unknown;
    fromPartial(object: Partial<ScheduledTokenRelease>): ScheduledTokenRelease;
    fromAmino(object: ScheduledTokenReleaseAmino): ScheduledTokenRelease;
    toAmino(message: ScheduledTokenRelease): ScheduledTokenReleaseAmino;
    fromAminoMsg(object: ScheduledTokenReleaseAminoMsg): ScheduledTokenRelease;
    fromProtoMsg(message: ScheduledTokenReleaseProtoMsg): ScheduledTokenRelease;
    toProto(message: ScheduledTokenRelease): Uint8Array;
    toProtoMsg(message: ScheduledTokenRelease): ScheduledTokenReleaseProtoMsg;
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
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Version2Minter: {
    typeUrl: string;
    encode(message: Version2Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version2Minter;
    fromJSON(object: any): Version2Minter;
    toJSON(message: Version2Minter): unknown;
    fromPartial(object: Partial<Version2Minter>): Version2Minter;
    fromAmino(object: Version2MinterAmino): Version2Minter;
    toAmino(message: Version2Minter): Version2MinterAmino;
    fromAminoMsg(object: Version2MinterAminoMsg): Version2Minter;
    fromProtoMsg(message: Version2MinterProtoMsg): Version2Minter;
    toProto(message: Version2Minter): Uint8Array;
    toProtoMsg(message: Version2Minter): Version2MinterProtoMsg;
};
export declare const Version2ScheduledTokenRelease: {
    typeUrl: string;
    encode(message: Version2ScheduledTokenRelease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version2ScheduledTokenRelease;
    fromJSON(object: any): Version2ScheduledTokenRelease;
    toJSON(message: Version2ScheduledTokenRelease): unknown;
    fromPartial(object: Partial<Version2ScheduledTokenRelease>): Version2ScheduledTokenRelease;
    fromAmino(object: Version2ScheduledTokenReleaseAmino): Version2ScheduledTokenRelease;
    toAmino(message: Version2ScheduledTokenRelease): Version2ScheduledTokenReleaseAmino;
    fromAminoMsg(object: Version2ScheduledTokenReleaseAminoMsg): Version2ScheduledTokenRelease;
    fromProtoMsg(message: Version2ScheduledTokenReleaseProtoMsg): Version2ScheduledTokenRelease;
    toProto(message: Version2ScheduledTokenRelease): Uint8Array;
    toProtoMsg(message: Version2ScheduledTokenRelease): Version2ScheduledTokenReleaseProtoMsg;
};
export declare const Version2Params: {
    typeUrl: string;
    encode(message: Version2Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version2Params;
    fromJSON(object: any): Version2Params;
    toJSON(message: Version2Params): unknown;
    fromPartial(object: Partial<Version2Params>): Version2Params;
    fromAmino(object: Version2ParamsAmino): Version2Params;
    toAmino(message: Version2Params): Version2ParamsAmino;
    fromAminoMsg(object: Version2ParamsAminoMsg): Version2Params;
    fromProtoMsg(message: Version2ParamsProtoMsg): Version2Params;
    toProto(message: Version2Params): Uint8Array;
    toProtoMsg(message: Version2Params): Version2ParamsProtoMsg;
};
