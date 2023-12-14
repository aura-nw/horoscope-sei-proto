import { OrderStatus, OrderType, PositionDirection, CancellationInitiator } from "./enums";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Order {
    id?: Long;
    status?: OrderStatus;
    account?: string;
    contractAddr?: string;
    price: string;
    quantity: string;
    priceDenom: string;
    assetDenom: string;
    orderType: OrderType;
    positionDirection: PositionDirection;
    data: string;
    statusDescription: string;
    nominal: string;
    triggerPrice: string;
    triggerStatus: boolean;
}
export interface OrderProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.Order";
    value: Uint8Array;
}
export interface OrderAmino {
    id?: string;
    status?: OrderStatus;
    account?: string;
    contractAddr?: string;
    price?: string;
    quantity?: string;
    priceDenom?: string;
    assetDenom?: string;
    orderType?: OrderType;
    positionDirection?: PositionDirection;
    data?: string;
    statusDescription?: string;
    nominal?: string;
    triggerPrice?: string;
    triggerStatus?: boolean;
}
export interface OrderAminoMsg {
    type: "/seiprotocol.seichain.dex.Order";
    value: OrderAmino;
}
export interface OrderSDKType {
    id?: Long;
    status?: OrderStatus;
    account?: string;
    contractAddr?: string;
    price: string;
    quantity: string;
    priceDenom: string;
    assetDenom: string;
    orderType: OrderType;
    positionDirection: PositionDirection;
    data: string;
    statusDescription: string;
    nominal: string;
    triggerPrice: string;
    triggerStatus: boolean;
}
export interface Cancellation {
    id: Long;
    initiator: CancellationInitiator;
    creator?: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    positionDirection: PositionDirection;
    price: string;
}
export interface CancellationProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.Cancellation";
    value: Uint8Array;
}
export interface CancellationAmino {
    id?: string;
    initiator?: CancellationInitiator;
    creator?: string;
    contractAddr?: string;
    priceDenom?: string;
    assetDenom?: string;
    positionDirection?: PositionDirection;
    price?: string;
}
export interface CancellationAminoMsg {
    type: "/seiprotocol.seichain.dex.Cancellation";
    value: CancellationAmino;
}
export interface CancellationSDKType {
    id: Long;
    initiator: CancellationInitiator;
    creator?: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    positionDirection: PositionDirection;
    price: string;
}
export interface ActiveOrders {
    ids: Long[];
}
export interface ActiveOrdersProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.ActiveOrders";
    value: Uint8Array;
}
export interface ActiveOrdersAmino {
    ids?: string[];
}
export interface ActiveOrdersAminoMsg {
    type: "/seiprotocol.seichain.dex.ActiveOrders";
    value: ActiveOrdersAmino;
}
export interface ActiveOrdersSDKType {
    ids: Long[];
}
export declare const Order: {
    typeUrl: string;
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    fromPartial(object: Partial<Order>): Order;
    fromAmino(object: OrderAmino): Order;
    toAmino(message: Order): OrderAmino;
    fromAminoMsg(object: OrderAminoMsg): Order;
    fromProtoMsg(message: OrderProtoMsg): Order;
    toProto(message: Order): Uint8Array;
    toProtoMsg(message: Order): OrderProtoMsg;
};
export declare const Cancellation: {
    typeUrl: string;
    encode(message: Cancellation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cancellation;
    fromJSON(object: any): Cancellation;
    toJSON(message: Cancellation): unknown;
    fromPartial(object: Partial<Cancellation>): Cancellation;
    fromAmino(object: CancellationAmino): Cancellation;
    toAmino(message: Cancellation): CancellationAmino;
    fromAminoMsg(object: CancellationAminoMsg): Cancellation;
    fromProtoMsg(message: CancellationProtoMsg): Cancellation;
    toProto(message: Cancellation): Uint8Array;
    toProtoMsg(message: Cancellation): CancellationProtoMsg;
};
export declare const ActiveOrders: {
    typeUrl: string;
    encode(message: ActiveOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveOrders;
    fromJSON(object: any): ActiveOrders;
    toJSON(message: ActiveOrders): unknown;
    fromPartial(object: Partial<ActiveOrders>): ActiveOrders;
    fromAmino(object: ActiveOrdersAmino): ActiveOrders;
    toAmino(message: ActiveOrders): ActiveOrdersAmino;
    fromAminoMsg(object: ActiveOrdersAminoMsg): ActiveOrders;
    fromProtoMsg(message: ActiveOrdersProtoMsg): ActiveOrders;
    toProto(message: ActiveOrders): Uint8Array;
    toProtoMsg(message: ActiveOrders): ActiveOrdersProtoMsg;
};
