import { Pair, PairAmino, PairSDKType } from "./pair";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Twap {
    pair?: Pair;
    twap: string;
    lookbackSeconds: Long;
}
export interface TwapProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.Twap";
    value: Uint8Array;
}
export interface TwapAmino {
    pair?: PairAmino;
    twap?: string;
    lookbackSeconds?: string;
}
export interface TwapAminoMsg {
    type: "/seiprotocol.seichain.dex.Twap";
    value: TwapAmino;
}
export interface TwapSDKType {
    pair?: PairSDKType;
    twap: string;
    lookbackSeconds: Long;
}
export declare const Twap: {
    typeUrl: string;
    encode(message: Twap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Twap;
    fromJSON(object: any): Twap;
    toJSON(message: Twap): unknown;
    fromPartial(object: Partial<Twap>): Twap;
    fromAmino(object: TwapAmino): Twap;
    toAmino(message: Twap): TwapAmino;
    fromAminoMsg(object: TwapAminoMsg): Twap;
    fromProtoMsg(message: TwapProtoMsg): Twap;
    toProto(message: Twap): Uint8Array;
    toProtoMsg(message: Twap): TwapProtoMsg;
};
