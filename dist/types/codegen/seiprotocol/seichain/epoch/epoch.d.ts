import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Epoch {
    genesisTime: Date;
    epochDuration: string;
    currentEpoch: Long;
    currentEpochStartTime: Date;
    currentEpochHeight: Long;
}
export interface EpochProtoMsg {
    typeUrl: "/seiprotocol.seichain.epoch.Epoch";
    value: Uint8Array;
}
export interface EpochAmino {
    genesis_time?: string;
    epoch_duration?: string;
    current_epoch?: string;
    current_epoch_start_time?: string;
    current_epoch_height?: string;
}
export interface EpochAminoMsg {
    type: "/seiprotocol.seichain.epoch.Epoch";
    value: EpochAmino;
}
export interface EpochSDKType {
    genesis_time: Date;
    epoch_duration: string;
    current_epoch: Long;
    current_epoch_start_time: Date;
    current_epoch_height: Long;
}
export declare const Epoch: {
    typeUrl: string;
    encode(message: Epoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Epoch;
    fromJSON(object: any): Epoch;
    toJSON(message: Epoch): unknown;
    fromPartial(object: Partial<Epoch>): Epoch;
    fromAmino(object: EpochAmino): Epoch;
    toAmino(message: Epoch): EpochAmino;
    fromAminoMsg(object: EpochAminoMsg): Epoch;
    fromProtoMsg(message: EpochProtoMsg): Epoch;
    toProto(message: Epoch): Uint8Array;
    toProtoMsg(message: Epoch): EpochProtoMsg;
};
