import { Params } from "./params";
import { ContractInfoV2 } from "./contract";
import { LongBook } from "./long_book";
import { ShortBook } from "./short_book";
import { Order } from "./order";
import { Pair } from "./pair";
import { Price } from "./price";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        contractState: [],
        lastEpoch: Long.UZERO
    };
}
export const GenesisState = {
    typeUrl: "/seiprotocol.seichain.dex.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.contractState) {
            ContractState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (!message.lastEpoch.isZero()) {
            writer.uint32(24).uint64(message.lastEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.contractState.push(ContractState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastEpoch = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            contractState: Array.isArray(object?.contractState) ? object.contractState.map((e) => ContractState.fromJSON(e)) : [],
            lastEpoch: isSet(object.lastEpoch) ? Long.fromValue(object.lastEpoch) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.contractState) {
            obj.contractState = message.contractState.map(e => e ? ContractState.toJSON(e) : undefined);
        }
        else {
            obj.contractState = [];
        }
        message.lastEpoch !== undefined && (obj.lastEpoch = (message.lastEpoch || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.contractState = object.contractState?.map(e => ContractState.fromPartial(e)) || [];
        message.lastEpoch = object.lastEpoch !== undefined && object.lastEpoch !== null ? Long.fromValue(object.lastEpoch) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.contractState = object.contractState?.map(e => ContractState.fromAmino(e)) || [];
        if (object.lastEpoch !== undefined && object.lastEpoch !== null) {
            message.lastEpoch = Long.fromString(object.lastEpoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.contractState) {
            obj.contractState = message.contractState.map(e => e ? ContractState.toAmino(e) : undefined);
        }
        else {
            obj.contractState = [];
        }
        obj.lastEpoch = message.lastEpoch ? message.lastEpoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseContractState() {
    return {
        contractInfo: ContractInfoV2.fromPartial({}),
        longBookList: [],
        shortBookList: [],
        triggeredOrdersList: [],
        pairList: [],
        priceList: [],
        nextOrderId: Long.UZERO
    };
}
export const ContractState = {
    typeUrl: "/seiprotocol.seichain.dex.ContractState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractInfo !== undefined) {
            ContractInfoV2.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.longBookList) {
            LongBook.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.shortBookList) {
            ShortBook.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.triggeredOrdersList) {
            Order.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.pairList) {
            Pair.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.priceList) {
            ContractPairPrices.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (!message.nextOrderId.isZero()) {
            writer.uint32(56).uint64(message.nextOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractInfo = ContractInfoV2.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.longBookList.push(LongBook.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.shortBookList.push(ShortBook.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.triggeredOrdersList.push(Order.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.pairList.push(Pair.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.priceList.push(ContractPairPrices.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.nextOrderId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            contractInfo: isSet(object.contractInfo) ? ContractInfoV2.fromJSON(object.contractInfo) : undefined,
            longBookList: Array.isArray(object?.longBookList) ? object.longBookList.map((e) => LongBook.fromJSON(e)) : [],
            shortBookList: Array.isArray(object?.shortBookList) ? object.shortBookList.map((e) => ShortBook.fromJSON(e)) : [],
            triggeredOrdersList: Array.isArray(object?.triggeredOrdersList) ? object.triggeredOrdersList.map((e) => Order.fromJSON(e)) : [],
            pairList: Array.isArray(object?.pairList) ? object.pairList.map((e) => Pair.fromJSON(e)) : [],
            priceList: Array.isArray(object?.priceList) ? object.priceList.map((e) => ContractPairPrices.fromJSON(e)) : [],
            nextOrderId: isSet(object.nextOrderId) ? Long.fromValue(object.nextOrderId) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfoV2.toJSON(message.contractInfo) : undefined);
        if (message.longBookList) {
            obj.longBookList = message.longBookList.map(e => e ? LongBook.toJSON(e) : undefined);
        }
        else {
            obj.longBookList = [];
        }
        if (message.shortBookList) {
            obj.shortBookList = message.shortBookList.map(e => e ? ShortBook.toJSON(e) : undefined);
        }
        else {
            obj.shortBookList = [];
        }
        if (message.triggeredOrdersList) {
            obj.triggeredOrdersList = message.triggeredOrdersList.map(e => e ? Order.toJSON(e) : undefined);
        }
        else {
            obj.triggeredOrdersList = [];
        }
        if (message.pairList) {
            obj.pairList = message.pairList.map(e => e ? Pair.toJSON(e) : undefined);
        }
        else {
            obj.pairList = [];
        }
        if (message.priceList) {
            obj.priceList = message.priceList.map(e => e ? ContractPairPrices.toJSON(e) : undefined);
        }
        else {
            obj.priceList = [];
        }
        message.nextOrderId !== undefined && (obj.nextOrderId = (message.nextOrderId || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseContractState();
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfoV2.fromPartial(object.contractInfo) : undefined;
        message.longBookList = object.longBookList?.map(e => LongBook.fromPartial(e)) || [];
        message.shortBookList = object.shortBookList?.map(e => ShortBook.fromPartial(e)) || [];
        message.triggeredOrdersList = object.triggeredOrdersList?.map(e => Order.fromPartial(e)) || [];
        message.pairList = object.pairList?.map(e => Pair.fromPartial(e)) || [];
        message.priceList = object.priceList?.map(e => ContractPairPrices.fromPartial(e)) || [];
        message.nextOrderId = object.nextOrderId !== undefined && object.nextOrderId !== null ? Long.fromValue(object.nextOrderId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractState();
        if (object.contractInfo !== undefined && object.contractInfo !== null) {
            message.contractInfo = ContractInfoV2.fromAmino(object.contractInfo);
        }
        message.longBookList = object.longBookList?.map(e => LongBook.fromAmino(e)) || [];
        message.shortBookList = object.shortBookList?.map(e => ShortBook.fromAmino(e)) || [];
        message.triggeredOrdersList = object.triggeredOrdersList?.map(e => Order.fromAmino(e)) || [];
        message.pairList = object.pairList?.map(e => Pair.fromAmino(e)) || [];
        message.priceList = object.priceList?.map(e => ContractPairPrices.fromAmino(e)) || [];
        if (object.nextOrderId !== undefined && object.nextOrderId !== null) {
            message.nextOrderId = Long.fromString(object.nextOrderId);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractInfo = message.contractInfo ? ContractInfoV2.toAmino(message.contractInfo) : undefined;
        if (message.longBookList) {
            obj.longBookList = message.longBookList.map(e => e ? LongBook.toAmino(e) : undefined);
        }
        else {
            obj.longBookList = [];
        }
        if (message.shortBookList) {
            obj.shortBookList = message.shortBookList.map(e => e ? ShortBook.toAmino(e) : undefined);
        }
        else {
            obj.shortBookList = [];
        }
        if (message.triggeredOrdersList) {
            obj.triggeredOrdersList = message.triggeredOrdersList.map(e => e ? Order.toAmino(e) : undefined);
        }
        else {
            obj.triggeredOrdersList = [];
        }
        if (message.pairList) {
            obj.pairList = message.pairList.map(e => e ? Pair.toAmino(e) : undefined);
        }
        else {
            obj.pairList = [];
        }
        if (message.priceList) {
            obj.priceList = message.priceList.map(e => e ? ContractPairPrices.toAmino(e) : undefined);
        }
        else {
            obj.priceList = [];
        }
        obj.nextOrderId = message.nextOrderId ? message.nextOrderId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContractState.decode(message.value);
    },
    toProto(message) {
        return ContractState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.ContractState",
            value: ContractState.encode(message).finish()
        };
    }
};
function createBaseContractPairPrices() {
    return {
        pricePair: Pair.fromPartial({}),
        prices: []
    };
}
export const ContractPairPrices = {
    typeUrl: "/seiprotocol.seichain.dex.ContractPairPrices",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pricePair !== undefined) {
            Pair.encode(message.pricePair, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.prices) {
            Price.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractPairPrices();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pricePair = Pair.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.prices.push(Price.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pricePair: isSet(object.pricePair) ? Pair.fromJSON(object.pricePair) : undefined,
            prices: Array.isArray(object?.prices) ? object.prices.map((e) => Price.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.pricePair !== undefined && (obj.pricePair = message.pricePair ? Pair.toJSON(message.pricePair) : undefined);
        if (message.prices) {
            obj.prices = message.prices.map(e => e ? Price.toJSON(e) : undefined);
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseContractPairPrices();
        message.pricePair = object.pricePair !== undefined && object.pricePair !== null ? Pair.fromPartial(object.pricePair) : undefined;
        message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractPairPrices();
        if (object.pricePair !== undefined && object.pricePair !== null) {
            message.pricePair = Pair.fromAmino(object.pricePair);
        }
        message.prices = object.prices?.map(e => Price.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pricePair = message.pricePair ? Pair.toAmino(message.pricePair) : undefined;
        if (message.prices) {
            obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ContractPairPrices.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContractPairPrices.decode(message.value);
    },
    toProto(message) {
        return ContractPairPrices.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.ContractPairPrices",
            value: ContractPairPrices.encode(message).finish()
        };
    }
};
