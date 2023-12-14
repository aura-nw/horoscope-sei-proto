import { OrderStatus, OrderType, PositionDirection, CancellationInitiator, orderStatusFromJSON, orderTypeFromJSON, positionDirectionFromJSON, orderStatusToJSON, orderTypeToJSON, positionDirectionToJSON, cancellationInitiatorFromJSON, cancellationInitiatorToJSON } from "./enums";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
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
function createBaseOrder(): Order {
  return {
    id: undefined,
    status: undefined,
    account: undefined,
    contractAddr: undefined,
    price: "",
    quantity: "",
    priceDenom: "",
    assetDenom: "",
    orderType: 0,
    positionDirection: 0,
    data: "",
    statusDescription: "",
    nominal: "",
    triggerPrice: "",
    triggerStatus: false
  };
}
export const Order = {
  typeUrl: "/seiprotocol.seichain.dex.Order",
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.account !== undefined) {
      writer.uint32(26).string(message.account);
    }
    if (message.contractAddr !== undefined) {
      writer.uint32(34).string(message.contractAddr);
    }
    if (message.price !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.priceDenom !== "") {
      writer.uint32(58).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(66).string(message.assetDenom);
    }
    if (message.orderType !== 0) {
      writer.uint32(72).int32(message.orderType);
    }
    if (message.positionDirection !== 0) {
      writer.uint32(80).int32(message.positionDirection);
    }
    if (message.data !== "") {
      writer.uint32(90).string(message.data);
    }
    if (message.statusDescription !== "") {
      writer.uint32(98).string(message.statusDescription);
    }
    if (message.nominal !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.nominal, 18).atomics);
    }
    if (message.triggerPrice !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.triggerStatus === true) {
      writer.uint32(120).bool(message.triggerStatus);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.status = (reader.int32() as any);
          break;
        case 3:
          message.account = reader.string();
          break;
        case 4:
          message.contractAddr = reader.string();
          break;
        case 5:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.priceDenom = reader.string();
          break;
        case 8:
          message.assetDenom = reader.string();
          break;
        case 9:
          message.orderType = (reader.int32() as any);
          break;
        case 10:
          message.positionDirection = (reader.int32() as any);
          break;
        case 11:
          message.data = reader.string();
          break;
        case 12:
          message.statusDescription = reader.string();
          break;
        case 13:
          message.nominal = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.triggerStatus = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : undefined,
      account: isSet(object.account) ? String(object.account) : undefined,
      contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : undefined,
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : -1,
      positionDirection: isSet(object.positionDirection) ? positionDirectionFromJSON(object.positionDirection) : -1,
      data: isSet(object.data) ? String(object.data) : "",
      statusDescription: isSet(object.statusDescription) ? String(object.statusDescription) : "",
      nominal: isSet(object.nominal) ? String(object.nominal) : "",
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
      triggerStatus: isSet(object.triggerStatus) ? Boolean(object.triggerStatus) : false
    };
  },
  toJSON(message: Order): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id.toString();
    }
    message.status !== undefined && (obj.status = orderStatusToJSON(message.status));
    message.account !== undefined && (obj.account = message.account);
    message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
    message.positionDirection !== undefined && (obj.positionDirection = positionDirectionToJSON(message.positionDirection));
    message.data !== undefined && (obj.data = message.data);
    message.statusDescription !== undefined && (obj.statusDescription = message.statusDescription);
    message.nominal !== undefined && (obj.nominal = message.nominal);
    message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
    message.triggerStatus !== undefined && (obj.triggerStatus = message.triggerStatus);
    return obj;
  },
  fromPartial(object: Partial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : undefined;
    message.status = object.status ?? undefined;
    message.account = object.account ?? undefined;
    message.contractAddr = object.contractAddr ?? undefined;
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.orderType = object.orderType ?? 0;
    message.positionDirection = object.positionDirection ?? 0;
    message.data = object.data ?? "";
    message.statusDescription = object.statusDescription ?? "";
    message.nominal = object.nominal ?? "";
    message.triggerPrice = object.triggerPrice ?? "";
    message.triggerStatus = object.triggerStatus ?? false;
    return message;
  },
  fromAmino(object: OrderAmino): Order {
    const message = createBaseOrder();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = orderStatusFromJSON(object.status);
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.contractAddr !== undefined && object.contractAddr !== null) {
      message.contractAddr = object.contractAddr;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = object.priceDenom;
    }
    if (object.assetDenom !== undefined && object.assetDenom !== null) {
      message.assetDenom = object.assetDenom;
    }
    if (object.orderType !== undefined && object.orderType !== null) {
      message.orderType = orderTypeFromJSON(object.orderType);
    }
    if (object.positionDirection !== undefined && object.positionDirection !== null) {
      message.positionDirection = positionDirectionFromJSON(object.positionDirection);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.statusDescription !== undefined && object.statusDescription !== null) {
      message.statusDescription = object.statusDescription;
    }
    if (object.nominal !== undefined && object.nominal !== null) {
      message.nominal = object.nominal;
    }
    if (object.triggerPrice !== undefined && object.triggerPrice !== null) {
      message.triggerPrice = object.triggerPrice;
    }
    if (object.triggerStatus !== undefined && object.triggerStatus !== null) {
      message.triggerStatus = object.triggerStatus;
    }
    return message;
  },
  toAmino(message: Order): OrderAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.status = orderStatusToJSON(message.status);
    obj.account = message.account;
    obj.contractAddr = message.contractAddr;
    obj.price = message.price;
    obj.quantity = message.quantity;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.orderType = orderTypeToJSON(message.orderType);
    obj.positionDirection = positionDirectionToJSON(message.positionDirection);
    obj.data = message.data;
    obj.statusDescription = message.statusDescription;
    obj.nominal = message.nominal;
    obj.triggerPrice = message.triggerPrice;
    obj.triggerStatus = message.triggerStatus;
    return obj;
  },
  fromAminoMsg(object: OrderAminoMsg): Order {
    return Order.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderProtoMsg): Order {
    return Order.decode(message.value);
  },
  toProto(message: Order): Uint8Array {
    return Order.encode(message).finish();
  },
  toProtoMsg(message: Order): OrderProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.Order",
      value: Order.encode(message).finish()
    };
  }
};
function createBaseCancellation(): Cancellation {
  return {
    id: Long.UZERO,
    initiator: 0,
    creator: undefined,
    contractAddr: "",
    priceDenom: "",
    assetDenom: "",
    positionDirection: 0,
    price: ""
  };
}
export const Cancellation = {
  typeUrl: "/seiprotocol.seichain.dex.Cancellation",
  encode(message: Cancellation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.initiator !== 0) {
      writer.uint32(16).int32(message.initiator);
    }
    if (message.creator !== undefined) {
      writer.uint32(26).string(message.creator);
    }
    if (message.contractAddr !== "") {
      writer.uint32(34).string(message.contractAddr);
    }
    if (message.priceDenom !== "") {
      writer.uint32(42).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(50).string(message.assetDenom);
    }
    if (message.positionDirection !== 0) {
      writer.uint32(56).int32(message.positionDirection);
    }
    if (message.price !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Cancellation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancellation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.initiator = (reader.int32() as any);
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.contractAddr = reader.string();
          break;
        case 5:
          message.priceDenom = reader.string();
          break;
        case 6:
          message.assetDenom = reader.string();
          break;
        case 7:
          message.positionDirection = (reader.int32() as any);
          break;
        case 8:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Cancellation {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      initiator: isSet(object.initiator) ? cancellationInitiatorFromJSON(object.initiator) : -1,
      creator: isSet(object.creator) ? String(object.creator) : undefined,
      contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
      positionDirection: isSet(object.positionDirection) ? positionDirectionFromJSON(object.positionDirection) : -1,
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  toJSON(message: Cancellation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.initiator !== undefined && (obj.initiator = cancellationInitiatorToJSON(message.initiator));
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.positionDirection !== undefined && (obj.positionDirection = positionDirectionToJSON(message.positionDirection));
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
  fromPartial(object: Partial<Cancellation>): Cancellation {
    const message = createBaseCancellation();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.initiator = object.initiator ?? 0;
    message.creator = object.creator ?? undefined;
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.positionDirection = object.positionDirection ?? 0;
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: CancellationAmino): Cancellation {
    const message = createBaseCancellation();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.initiator !== undefined && object.initiator !== null) {
      message.initiator = cancellationInitiatorFromJSON(object.initiator);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.contractAddr !== undefined && object.contractAddr !== null) {
      message.contractAddr = object.contractAddr;
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = object.priceDenom;
    }
    if (object.assetDenom !== undefined && object.assetDenom !== null) {
      message.assetDenom = object.assetDenom;
    }
    if (object.positionDirection !== undefined && object.positionDirection !== null) {
      message.positionDirection = positionDirectionFromJSON(object.positionDirection);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: Cancellation): CancellationAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.initiator = cancellationInitiatorToJSON(message.initiator);
    obj.creator = message.creator;
    obj.contractAddr = message.contractAddr;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.positionDirection = positionDirectionToJSON(message.positionDirection);
    obj.price = message.price;
    return obj;
  },
  fromAminoMsg(object: CancellationAminoMsg): Cancellation {
    return Cancellation.fromAmino(object.value);
  },
  fromProtoMsg(message: CancellationProtoMsg): Cancellation {
    return Cancellation.decode(message.value);
  },
  toProto(message: Cancellation): Uint8Array {
    return Cancellation.encode(message).finish();
  },
  toProtoMsg(message: Cancellation): CancellationProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.Cancellation",
      value: Cancellation.encode(message).finish()
    };
  }
};
function createBaseActiveOrders(): ActiveOrders {
  return {
    ids: []
  };
}
export const ActiveOrders = {
  typeUrl: "/seiprotocol.seichain.dex.ActiveOrders",
  encode(message: ActiveOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push((reader.uint64() as Long));
            }
          } else {
            message.ids.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveOrders {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : []
    };
  },
  toJSON(message: ActiveOrders): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ActiveOrders>): ActiveOrders {
    const message = createBaseActiveOrders();
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromAmino(object: ActiveOrdersAmino): ActiveOrders {
    const message = createBaseActiveOrders();
    message.ids = object.ids?.map(e => Long.fromString(e)) || [];
    return message;
  },
  toAmino(message: ActiveOrders): ActiveOrdersAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: ActiveOrdersAminoMsg): ActiveOrders {
    return ActiveOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: ActiveOrdersProtoMsg): ActiveOrders {
    return ActiveOrders.decode(message.value);
  },
  toProto(message: ActiveOrders): Uint8Array {
    return ActiveOrders.encode(message).finish();
  },
  toProtoMsg(message: ActiveOrders): ActiveOrdersProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.ActiveOrders",
      value: ActiveOrders.encode(message).finish()
    };
  }
};