import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SettlementEntry {
    account: string;
    priceDenom: string;
    assetDenom: string;
    quantity: string;
    executionCostOrProceed: string;
    expectedCostOrProceed: string;
    positionDirection: string;
    orderType: string;
    orderId: Long;
    timestamp: Long;
    height: Long;
    settlementId: Long;
}
export interface SettlementEntryProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.SettlementEntry";
    value: Uint8Array;
}
export interface SettlementEntryAmino {
    account?: string;
    priceDenom?: string;
    assetDenom?: string;
    quantity?: string;
    executionCostOrProceed?: string;
    expectedCostOrProceed?: string;
    positionDirection?: string;
    orderType?: string;
    orderId?: string;
    timestamp?: string;
    height?: string;
    settlementId?: string;
}
export interface SettlementEntryAminoMsg {
    type: "/seiprotocol.seichain.dex.SettlementEntry";
    value: SettlementEntryAmino;
}
export interface SettlementEntrySDKType {
    account: string;
    priceDenom: string;
    assetDenom: string;
    quantity: string;
    executionCostOrProceed: string;
    expectedCostOrProceed: string;
    positionDirection: string;
    orderType: string;
    orderId: Long;
    timestamp: Long;
    height: Long;
    settlementId: Long;
}
export interface Settlements {
    epoch: Long;
    entries: SettlementEntry[];
}
export interface SettlementsProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.Settlements";
    value: Uint8Array;
}
export interface SettlementsAmino {
    epoch?: string;
    entries?: SettlementEntryAmino[];
}
export interface SettlementsAminoMsg {
    type: "/seiprotocol.seichain.dex.Settlements";
    value: SettlementsAmino;
}
export interface SettlementsSDKType {
    epoch: Long;
    entries: SettlementEntrySDKType[];
}
export declare const SettlementEntry: {
    typeUrl: string;
    encode(message: SettlementEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SettlementEntry;
    fromJSON(object: any): SettlementEntry;
    toJSON(message: SettlementEntry): unknown;
    fromPartial(object: Partial<SettlementEntry>): SettlementEntry;
    fromAmino(object: SettlementEntryAmino): SettlementEntry;
    toAmino(message: SettlementEntry): SettlementEntryAmino;
    fromAminoMsg(object: SettlementEntryAminoMsg): SettlementEntry;
    fromProtoMsg(message: SettlementEntryProtoMsg): SettlementEntry;
    toProto(message: SettlementEntry): Uint8Array;
    toProtoMsg(message: SettlementEntry): SettlementEntryProtoMsg;
};
export declare const Settlements: {
    typeUrl: string;
    encode(message: Settlements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Settlements;
    fromJSON(object: any): Settlements;
    toJSON(message: Settlements): unknown;
    fromPartial(object: Partial<Settlements>): Settlements;
    fromAmino(object: SettlementsAmino): Settlements;
    toAmino(message: Settlements): SettlementsAmino;
    fromAminoMsg(object: SettlementsAminoMsg): Settlements;
    fromProtoMsg(message: SettlementsProtoMsg): Settlements;
    toProto(message: Settlements): Uint8Array;
    toProtoMsg(message: Settlements): SettlementsProtoMsg;
};
