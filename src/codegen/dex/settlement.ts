import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
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
function createBaseSettlementEntry(): SettlementEntry {
  return {
    account: "",
    priceDenom: "",
    assetDenom: "",
    quantity: "",
    executionCostOrProceed: "",
    expectedCostOrProceed: "",
    positionDirection: "",
    orderType: "",
    orderId: Long.UZERO,
    timestamp: Long.UZERO,
    height: Long.UZERO,
    settlementId: Long.UZERO
  };
}
export const SettlementEntry = {
  typeUrl: "/seiprotocol.seichain.dex.SettlementEntry",
  encode(message: SettlementEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.executionCostOrProceed !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.executionCostOrProceed, 18).atomics);
    }
    if (message.expectedCostOrProceed !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.expectedCostOrProceed, 18).atomics);
    }
    if (message.positionDirection !== "") {
      writer.uint32(58).string(message.positionDirection);
    }
    if (message.orderType !== "") {
      writer.uint32(66).string(message.orderType);
    }
    if (!message.orderId.isZero()) {
      writer.uint32(72).uint64(message.orderId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(80).uint64(message.timestamp);
    }
    if (!message.height.isZero()) {
      writer.uint32(88).uint64(message.height);
    }
    if (!message.settlementId.isZero()) {
      writer.uint32(96).uint64(message.settlementId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SettlementEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettlementEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.priceDenom = reader.string();
          break;
        case 3:
          message.assetDenom = reader.string();
          break;
        case 4:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.executionCostOrProceed = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.expectedCostOrProceed = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.positionDirection = reader.string();
          break;
        case 8:
          message.orderType = reader.string();
          break;
        case 9:
          message.orderId = (reader.uint64() as Long);
          break;
        case 10:
          message.timestamp = (reader.uint64() as Long);
          break;
        case 11:
          message.height = (reader.uint64() as Long);
          break;
        case 12:
          message.settlementId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SettlementEntry {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      executionCostOrProceed: isSet(object.executionCostOrProceed) ? String(object.executionCostOrProceed) : "",
      expectedCostOrProceed: isSet(object.expectedCostOrProceed) ? String(object.expectedCostOrProceed) : "",
      positionDirection: isSet(object.positionDirection) ? String(object.positionDirection) : "",
      orderType: isSet(object.orderType) ? String(object.orderType) : "",
      orderId: isSet(object.orderId) ? Long.fromValue(object.orderId) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      settlementId: isSet(object.settlementId) ? Long.fromValue(object.settlementId) : Long.UZERO
    };
  },
  toJSON(message: SettlementEntry): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.executionCostOrProceed !== undefined && (obj.executionCostOrProceed = message.executionCostOrProceed);
    message.expectedCostOrProceed !== undefined && (obj.expectedCostOrProceed = message.expectedCostOrProceed);
    message.positionDirection !== undefined && (obj.positionDirection = message.positionDirection);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.orderId !== undefined && (obj.orderId = (message.orderId || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    message.settlementId !== undefined && (obj.settlementId = (message.settlementId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<SettlementEntry>): SettlementEntry {
    const message = createBaseSettlementEntry();
    message.account = object.account ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.quantity = object.quantity ?? "";
    message.executionCostOrProceed = object.executionCostOrProceed ?? "";
    message.expectedCostOrProceed = object.expectedCostOrProceed ?? "";
    message.positionDirection = object.positionDirection ?? "";
    message.orderType = object.orderType ?? "";
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.settlementId = object.settlementId !== undefined && object.settlementId !== null ? Long.fromValue(object.settlementId) : Long.UZERO;
    return message;
  },
  fromAmino(object: SettlementEntryAmino): SettlementEntry {
    const message = createBaseSettlementEntry();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = object.priceDenom;
    }
    if (object.assetDenom !== undefined && object.assetDenom !== null) {
      message.assetDenom = object.assetDenom;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.executionCostOrProceed !== undefined && object.executionCostOrProceed !== null) {
      message.executionCostOrProceed = object.executionCostOrProceed;
    }
    if (object.expectedCostOrProceed !== undefined && object.expectedCostOrProceed !== null) {
      message.expectedCostOrProceed = object.expectedCostOrProceed;
    }
    if (object.positionDirection !== undefined && object.positionDirection !== null) {
      message.positionDirection = object.positionDirection;
    }
    if (object.orderType !== undefined && object.orderType !== null) {
      message.orderType = object.orderType;
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = Long.fromString(object.orderId);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    }
    if (object.settlementId !== undefined && object.settlementId !== null) {
      message.settlementId = Long.fromString(object.settlementId);
    }
    return message;
  },
  toAmino(message: SettlementEntry): SettlementEntryAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.quantity = message.quantity;
    obj.executionCostOrProceed = message.executionCostOrProceed;
    obj.expectedCostOrProceed = message.expectedCostOrProceed;
    obj.positionDirection = message.positionDirection;
    obj.orderType = message.orderType;
    obj.orderId = message.orderId ? message.orderId.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.settlementId = message.settlementId ? message.settlementId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SettlementEntryAminoMsg): SettlementEntry {
    return SettlementEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: SettlementEntryProtoMsg): SettlementEntry {
    return SettlementEntry.decode(message.value);
  },
  toProto(message: SettlementEntry): Uint8Array {
    return SettlementEntry.encode(message).finish();
  },
  toProtoMsg(message: SettlementEntry): SettlementEntryProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.SettlementEntry",
      value: SettlementEntry.encode(message).finish()
    };
  }
};
function createBaseSettlements(): Settlements {
  return {
    epoch: Long.ZERO,
    entries: []
  };
}
export const Settlements = {
  typeUrl: "/seiprotocol.seichain.dex.Settlements",
  encode(message: Settlements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epoch.isZero()) {
      writer.uint32(8).int64(message.epoch);
    }
    for (const v of message.entries) {
      SettlementEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Settlements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettlements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = (reader.int64() as Long);
          break;
        case 2:
          message.entries.push(SettlementEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Settlements {
    return {
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.ZERO,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => SettlementEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: Settlements): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.ZERO).toString());
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? SettlementEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Settlements>): Settlements {
    const message = createBaseSettlements();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.ZERO;
    message.entries = object.entries?.map(e => SettlementEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SettlementsAmino): Settlements {
    const message = createBaseSettlements();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = Long.fromString(object.epoch);
    }
    message.entries = object.entries?.map(e => SettlementEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Settlements): SettlementsAmino {
    const obj: any = {};
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? SettlementEntry.toAmino(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg(object: SettlementsAminoMsg): Settlements {
    return Settlements.fromAmino(object.value);
  },
  fromProtoMsg(message: SettlementsProtoMsg): Settlements {
    return Settlements.decode(message.value);
  },
  toProto(message: Settlements): Uint8Array {
    return Settlements.encode(message).finish();
  },
  toProtoMsg(message: Settlements): SettlementsProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.Settlements",
      value: Settlements.encode(message).finish()
    };
  }
};