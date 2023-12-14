import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ContractInfoV2, ContractInfoV2Amino, ContractInfoV2SDKType } from "./contract";
import { LongBook, LongBookAmino, LongBookSDKType } from "./long_book";
import { ShortBook, ShortBookAmino, ShortBookSDKType } from "./short_book";
import { Order, OrderAmino, OrderSDKType } from "./order";
import { Pair, PairAmino, PairSDKType } from "./pair";
import { Price, PriceAmino, PriceSDKType } from "./price";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
    params: Params;
    contractState: ContractState[];
    lastEpoch: Long;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    contractState?: ContractStateAmino[];
    lastEpoch?: string;
}
export interface GenesisStateAminoMsg {
    type: "/seiprotocol.seichain.dex.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    contractState: ContractStateSDKType[];
    lastEpoch: Long;
}
export interface ContractState {
    contractInfo: ContractInfoV2;
    longBookList: LongBook[];
    shortBookList: ShortBook[];
    triggeredOrdersList: Order[];
    pairList: Pair[];
    priceList: ContractPairPrices[];
    nextOrderId: Long;
}
export interface ContractStateProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.ContractState";
    value: Uint8Array;
}
export interface ContractStateAmino {
    contractInfo?: ContractInfoV2Amino;
    longBookList?: LongBookAmino[];
    shortBookList?: ShortBookAmino[];
    triggeredOrdersList?: OrderAmino[];
    pairList?: PairAmino[];
    priceList?: ContractPairPricesAmino[];
    nextOrderId?: string;
}
export interface ContractStateAminoMsg {
    type: "/seiprotocol.seichain.dex.ContractState";
    value: ContractStateAmino;
}
export interface ContractStateSDKType {
    contractInfo: ContractInfoV2SDKType;
    longBookList: LongBookSDKType[];
    shortBookList: ShortBookSDKType[];
    triggeredOrdersList: OrderSDKType[];
    pairList: PairSDKType[];
    priceList: ContractPairPricesSDKType[];
    nextOrderId: Long;
}
export interface ContractPairPrices {
    pricePair: Pair;
    prices: Price[];
}
export interface ContractPairPricesProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.ContractPairPrices";
    value: Uint8Array;
}
export interface ContractPairPricesAmino {
    pricePair?: PairAmino;
    prices?: PriceAmino[];
}
export interface ContractPairPricesAminoMsg {
    type: "/seiprotocol.seichain.dex.ContractPairPrices";
    value: ContractPairPricesAmino;
}
export interface ContractPairPricesSDKType {
    pricePair: PairSDKType;
    prices: PriceSDKType[];
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
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const ContractState: {
    typeUrl: string;
    encode(message: ContractState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractState;
    fromJSON(object: any): ContractState;
    toJSON(message: ContractState): unknown;
    fromPartial(object: Partial<ContractState>): ContractState;
    fromAmino(object: ContractStateAmino): ContractState;
    toAmino(message: ContractState): ContractStateAmino;
    fromAminoMsg(object: ContractStateAminoMsg): ContractState;
    fromProtoMsg(message: ContractStateProtoMsg): ContractState;
    toProto(message: ContractState): Uint8Array;
    toProtoMsg(message: ContractState): ContractStateProtoMsg;
};
export declare const ContractPairPrices: {
    typeUrl: string;
    encode(message: ContractPairPrices, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractPairPrices;
    fromJSON(object: any): ContractPairPrices;
    toJSON(message: ContractPairPrices): unknown;
    fromPartial(object: Partial<ContractPairPrices>): ContractPairPrices;
    fromAmino(object: ContractPairPricesAmino): ContractPairPrices;
    toAmino(message: ContractPairPrices): ContractPairPricesAmino;
    fromAminoMsg(object: ContractPairPricesAminoMsg): ContractPairPrices;
    fromProtoMsg(message: ContractPairPricesProtoMsg): ContractPairPrices;
    toProto(message: ContractPairPrices): Uint8Array;
    toProtoMsg(message: ContractPairPrices): ContractPairPricesProtoMsg;
};
