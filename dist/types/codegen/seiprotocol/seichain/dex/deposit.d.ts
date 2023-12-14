import * as _m0 from "protobufjs/minimal";
export interface DepositInfoEntry {
    creator: string;
    denom: string;
    amount: string;
}
export interface DepositInfoEntryProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.DepositInfoEntry";
    value: Uint8Array;
}
export interface DepositInfoEntryAmino {
    creator?: string;
    denom?: string;
    amount?: string;
}
export interface DepositInfoEntryAminoMsg {
    type: "/seiprotocol.seichain.dex.DepositInfoEntry";
    value: DepositInfoEntryAmino;
}
export interface DepositInfoEntrySDKType {
    creator: string;
    denom: string;
    amount: string;
}
export declare const DepositInfoEntry: {
    typeUrl: string;
    encode(message: DepositInfoEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositInfoEntry;
    fromJSON(object: any): DepositInfoEntry;
    toJSON(message: DepositInfoEntry): unknown;
    fromPartial(object: Partial<DepositInfoEntry>): DepositInfoEntry;
    fromAmino(object: DepositInfoEntryAmino): DepositInfoEntry;
    toAmino(message: DepositInfoEntry): DepositInfoEntryAmino;
    fromAminoMsg(object: DepositInfoEntryAminoMsg): DepositInfoEntry;
    fromProtoMsg(message: DepositInfoEntryProtoMsg): DepositInfoEntry;
    toProto(message: DepositInfoEntry): Uint8Array;
    toProtoMsg(message: DepositInfoEntry): DepositInfoEntryProtoMsg;
};
