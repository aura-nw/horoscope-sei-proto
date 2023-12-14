import { Pair, PairAmino, PairSDKType } from "./pair";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Price {
    snapshotTimestampInSeconds: Long;
    price: string;
    pair?: Pair;
}
export interface PriceProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.Price";
    value: Uint8Array;
}
export interface PriceAmino {
    snapshotTimestampInSeconds?: string;
    price?: string;
    pair?: PairAmino;
}
export interface PriceAminoMsg {
    type: "/seiprotocol.seichain.dex.Price";
    value: PriceAmino;
}
export interface PriceSDKType {
    snapshotTimestampInSeconds: Long;
    price: string;
    pair?: PairSDKType;
}
export interface PriceCandlestick {
    beginTimestamp: Long;
    endTimestamp: Long;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
}
export interface PriceCandlestickProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.PriceCandlestick";
    value: Uint8Array;
}
export interface PriceCandlestickAmino {
    beginTimestamp?: string;
    endTimestamp?: string;
    open?: string;
    high?: string;
    low?: string;
    close?: string;
    volume?: string;
}
export interface PriceCandlestickAminoMsg {
    type: "/seiprotocol.seichain.dex.PriceCandlestick";
    value: PriceCandlestickAmino;
}
export interface PriceCandlestickSDKType {
    beginTimestamp: Long;
    endTimestamp: Long;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
}
export declare const Price: {
    typeUrl: string;
    encode(message: Price, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Price;
    fromJSON(object: any): Price;
    toJSON(message: Price): unknown;
    fromPartial(object: Partial<Price>): Price;
    fromAmino(object: PriceAmino): Price;
    toAmino(message: Price): PriceAmino;
    fromAminoMsg(object: PriceAminoMsg): Price;
    fromProtoMsg(message: PriceProtoMsg): Price;
    toProto(message: Price): Uint8Array;
    toProtoMsg(message: Price): PriceProtoMsg;
};
export declare const PriceCandlestick: {
    typeUrl: string;
    encode(message: PriceCandlestick, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceCandlestick;
    fromJSON(object: any): PriceCandlestick;
    toJSON(message: PriceCandlestick): unknown;
    fromPartial(object: Partial<PriceCandlestick>): PriceCandlestick;
    fromAmino(object: PriceCandlestickAmino): PriceCandlestick;
    toAmino(message: PriceCandlestick): PriceCandlestickAmino;
    fromAminoMsg(object: PriceCandlestickAminoMsg): PriceCandlestick;
    fromProtoMsg(message: PriceCandlestickProtoMsg): PriceCandlestick;
    toProto(message: PriceCandlestick): Uint8Array;
    toProtoMsg(message: PriceCandlestick): PriceCandlestickProtoMsg;
};
