import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Epoch, EpochAmino, EpochSDKType } from "./epoch";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the epoch module's genesis state. */
export interface GenesisState {
    params: Params;
    epoch?: Epoch;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/seiprotocol.seichain.epoch.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the epoch module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    epoch?: EpochAmino;
}
export interface GenesisStateAminoMsg {
    type: "/seiprotocol.seichain.epoch.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the epoch module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    epoch?: EpochSDKType;
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
