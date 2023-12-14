import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface OrderEntry {
    price: string;
    quantity: string;
    allocations: Allocation[];
    priceDenom: string;
    assetDenom: string;
}
export interface OrderEntryProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.OrderEntry";
    value: Uint8Array;
}
export interface OrderEntryAmino {
    price?: string;
    quantity?: string;
    allocations?: AllocationAmino[];
    priceDenom?: string;
    assetDenom?: string;
}
export interface OrderEntryAminoMsg {
    type: "/seiprotocol.seichain.dex.OrderEntry";
    value: OrderEntryAmino;
}
export interface OrderEntrySDKType {
    price: string;
    quantity: string;
    allocations: AllocationSDKType[];
    priceDenom: string;
    assetDenom: string;
}
export interface Allocation {
    orderId: Long;
    quantity: string;
    account: string;
}
export interface AllocationProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.Allocation";
    value: Uint8Array;
}
export interface AllocationAmino {
    orderId?: string;
    quantity?: string;
    account?: string;
}
export interface AllocationAminoMsg {
    type: "/seiprotocol.seichain.dex.Allocation";
    value: AllocationAmino;
}
export interface AllocationSDKType {
    orderId: Long;
    quantity: string;
    account: string;
}
export declare const OrderEntry: {
    typeUrl: string;
    encode(message: OrderEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderEntry;
    fromJSON(object: any): OrderEntry;
    toJSON(message: OrderEntry): unknown;
    fromPartial(object: Partial<OrderEntry>): OrderEntry;
    fromAmino(object: OrderEntryAmino): OrderEntry;
    toAmino(message: OrderEntry): OrderEntryAmino;
    fromAminoMsg(object: OrderEntryAminoMsg): OrderEntry;
    fromProtoMsg(message: OrderEntryProtoMsg): OrderEntry;
    toProto(message: OrderEntry): Uint8Array;
    toProtoMsg(message: OrderEntry): OrderEntryProtoMsg;
};
export declare const Allocation: {
    typeUrl: string;
    encode(message: Allocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Allocation;
    fromJSON(object: any): Allocation;
    toJSON(message: Allocation): unknown;
    fromPartial(object: Partial<Allocation>): Allocation;
    fromAmino(object: AllocationAmino): Allocation;
    toAmino(message: Allocation): AllocationAmino;
    fromAminoMsg(object: AllocationAminoMsg): Allocation;
    fromProtoMsg(message: AllocationProtoMsg): Allocation;
    toProto(message: Allocation): Uint8Array;
    toProtoMsg(message: Allocation): AllocationProtoMsg;
};
