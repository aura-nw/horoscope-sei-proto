import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Defines fee params that are controlled through governance */
export interface FeesParams {
    globalMinimumGasPrices: DecCoin[];
}
export interface FeesParamsProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.FeesParams";
    value: Uint8Array;
}
/** Defines fee params that are controlled through governance */
export interface FeesParamsAmino {
    global_minimum_gas_prices?: DecCoinAmino[];
}
export interface FeesParamsAminoMsg {
    type: "cosmos-sdk/FeesParams";
    value: FeesParamsAmino;
}
/** Defines fee params that are controlled through governance */
export interface FeesParamsSDKType {
    global_minimum_gas_prices: DecCoinSDKType[];
}
export interface GenesisState {
    feesParams: FeesParams;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    fees_params?: FeesParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    fees_params: FeesParamsSDKType;
}
export declare const FeesParams: {
    typeUrl: string;
    encode(message: FeesParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeesParams;
    fromJSON(object: any): FeesParams;
    toJSON(message: FeesParams): unknown;
    fromPartial(object: Partial<FeesParams>): FeesParams;
    fromAmino(object: FeesParamsAmino): FeesParams;
    toAmino(message: FeesParams): FeesParamsAmino;
    fromAminoMsg(object: FeesParamsAminoMsg): FeesParams;
    toAminoMsg(message: FeesParams): FeesParamsAminoMsg;
    fromProtoMsg(message: FeesParamsProtoMsg): FeesParams;
    toProto(message: FeesParams): Uint8Array;
    toProtoMsg(message: FeesParams): FeesParamsProtoMsg;
};
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
