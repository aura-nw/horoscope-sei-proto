import { Pair, PairAmino, PairSDKType } from "./pair";
import * as _m0 from "protobufjs/minimal";
export interface TickSize {
    pair?: Pair;
    ticksize: string;
    contractAddr: string;
}
export interface TickSizeProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.TickSize";
    value: Uint8Array;
}
export interface TickSizeAmino {
    pair?: PairAmino;
    ticksize?: string;
    contractAddr?: string;
}
export interface TickSizeAminoMsg {
    type: "/seiprotocol.seichain.dex.TickSize";
    value: TickSizeAmino;
}
export interface TickSizeSDKType {
    pair?: PairSDKType;
    ticksize: string;
    contractAddr: string;
}
export declare const TickSize: {
    typeUrl: string;
    encode(message: TickSize, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TickSize;
    fromJSON(object: any): TickSize;
    toJSON(message: TickSize): unknown;
    fromPartial(object: Partial<TickSize>): TickSize;
    fromAmino(object: TickSizeAmino): TickSize;
    toAmino(message: TickSize): TickSizeAmino;
    fromAminoMsg(object: TickSizeAminoMsg): TickSize;
    fromProtoMsg(message: TickSizeProtoMsg): TickSize;
    toProto(message: TickSize): Uint8Array;
    toProtoMsg(message: TickSize): TickSizeProtoMsg;
};
