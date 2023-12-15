import * as _m0 from "protobufjs/minimal";
export interface Pair {
    priceDenom: string;
    assetDenom: string;
    priceTicksize?: string;
    quantityTicksize?: string;
}
export interface PairProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.Pair";
    value: Uint8Array;
}
export interface PairAmino {
    priceDenom?: string;
    assetDenom?: string;
    priceTicksize?: string;
    quantityTicksize?: string;
}
export interface PairAminoMsg {
    type: "/seiprotocol.seichain.dex.Pair";
    value: PairAmino;
}
export interface PairSDKType {
    priceDenom: string;
    assetDenom: string;
    priceTicksize?: string;
    quantityTicksize?: string;
}
export interface BatchContractPair {
    contractAddr: string;
    pairs: Pair[];
}
export interface BatchContractPairProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.BatchContractPair";
    value: Uint8Array;
}
export interface BatchContractPairAmino {
    contractAddr?: string;
    pairs?: PairAmino[];
}
export interface BatchContractPairAminoMsg {
    type: "/seiprotocol.seichain.dex.BatchContractPair";
    value: BatchContractPairAmino;
}
export interface BatchContractPairSDKType {
    contractAddr: string;
    pairs: PairSDKType[];
}
export declare const Pair: {
    typeUrl: string;
    encode(message: Pair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pair;
    fromJSON(object: any): Pair;
    toJSON(message: Pair): unknown;
    fromPartial(object: Partial<Pair>): Pair;
    fromAmino(object: PairAmino): Pair;
    toAmino(message: Pair): PairAmino;
    fromAminoMsg(object: PairAminoMsg): Pair;
    fromProtoMsg(message: PairProtoMsg): Pair;
    toProto(message: Pair): Uint8Array;
    toProtoMsg(message: Pair): PairProtoMsg;
};
export declare const BatchContractPair: {
    typeUrl: string;
    encode(message: BatchContractPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchContractPair;
    fromJSON(object: any): BatchContractPair;
    toJSON(message: BatchContractPair): unknown;
    fromPartial(object: Partial<BatchContractPair>): BatchContractPair;
    fromAmino(object: BatchContractPairAmino): BatchContractPair;
    toAmino(message: BatchContractPair): BatchContractPairAmino;
    fromAminoMsg(object: BatchContractPairAminoMsg): BatchContractPair;
    fromProtoMsg(message: BatchContractPairProtoMsg): BatchContractPair;
    toProto(message: BatchContractPair): Uint8Array;
    toProtoMsg(message: BatchContractPair): BatchContractPairProtoMsg;
};
