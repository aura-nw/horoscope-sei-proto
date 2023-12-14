import { Order, Cancellation } from "./order";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ContractInfoV2 } from "./contract";
import { BatchContractPair } from "./pair";
import { TickSize } from "./tick_size";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgPlaceOrders() {
    return {
        creator: "",
        orders: [],
        contractAddr: "",
        funds: []
    };
}
export const MsgPlaceOrders = {
    typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        for (const v of message.orders) {
            Order.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.contractAddr !== "") {
            writer.uint32(26).string(message.contractAddr);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.orders.push(Order.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contractAddr = reader.string();
                    break;
                case 4:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            orders: Array.isArray(object?.orders) ? object.orders.map((e) => Order.fromJSON(e)) : [],
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? Order.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgPlaceOrders();
        message.creator = object.creator ?? "";
        message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
        message.contractAddr = object.contractAddr ?? "";
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPlaceOrders();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        obj.contractAddr = message.contractAddr;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPlaceOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgPlaceOrders.decode(message.value);
    },
    toProto(message) {
        return MsgPlaceOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
            value: MsgPlaceOrders.encode(message).finish()
        };
    }
};
function createBaseMsgPlaceOrdersResponse() {
    return {
        orderIds: []
    };
}
export const MsgPlaceOrdersResponse = {
    typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrdersResponse",
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.orderIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.orderIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.orderIds.push(reader.uint64());
                    }
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
            orderIds: Array.isArray(object?.orderIds) ? object.orderIds.map((e) => Long.fromValue(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orderIds) {
            obj.orderIds = message.orderIds.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.orderIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgPlaceOrdersResponse();
        message.orderIds = object.orderIds?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPlaceOrdersResponse();
        message.orderIds = object.orderIds?.map(e => Long.fromString(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orderIds) {
            obj.orderIds = message.orderIds.map(e => e);
        }
        else {
            obj.orderIds = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPlaceOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgPlaceOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgPlaceOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrdersResponse",
            value: MsgPlaceOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelOrders() {
    return {
        creator: "",
        cancellations: [],
        contractAddr: ""
    };
}
export const MsgCancelOrders = {
    typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        for (const v of message.cancellations) {
            Cancellation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.contractAddr !== "") {
            writer.uint32(26).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cancellations.push(Cancellation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contractAddr = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            cancellations: Array.isArray(object?.cancellations) ? object.cancellations.map((e) => Cancellation.fromJSON(e)) : [],
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.cancellations) {
            obj.cancellations = message.cancellations.map(e => e ? Cancellation.toJSON(e) : undefined);
        }
        else {
            obj.cancellations = [];
        }
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelOrders();
        message.creator = object.creator ?? "";
        message.cancellations = object.cancellations?.map(e => Cancellation.fromPartial(e)) || [];
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelOrders();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        message.cancellations = object.cancellations?.map(e => Cancellation.fromAmino(e)) || [];
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        if (message.cancellations) {
            obj.cancellations = message.cancellations.map(e => e ? Cancellation.toAmino(e) : undefined);
        }
        else {
            obj.cancellations = [];
        }
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelOrders.decode(message.value);
    },
    toProto(message) {
        return MsgCancelOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
            value: MsgCancelOrders.encode(message).finish()
        };
    }
};
function createBaseMsgCancelOrdersResponse() {
    return {};
}
export const MsgCancelOrdersResponse = {
    typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrdersResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCancelOrdersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelOrdersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrdersResponse",
            value: MsgCancelOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterContract() {
    return {
        creator: "",
        contract: undefined
    };
}
export const MsgRegisterContract = {
    typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.contract !== undefined) {
            ContractInfoV2.encode(message.contract, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.contract = ContractInfoV2.decode(reader, reader.uint32());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            contract: isSet(object.contract) ? ContractInfoV2.fromJSON(object.contract) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.contract !== undefined && (obj.contract = message.contract ? ContractInfoV2.toJSON(message.contract) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterContract();
        message.creator = object.creator ?? "";
        message.contract = object.contract !== undefined && object.contract !== null ? ContractInfoV2.fromPartial(object.contract) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterContract();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = ContractInfoV2.fromAmino(object.contract);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.contract = message.contract ? ContractInfoV2.toAmino(message.contract) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterContract.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRegisterContract.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
            value: MsgRegisterContract.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterContractResponse() {
    return {};
}
export const MsgRegisterContractResponse = {
    typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContractResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterContractResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRegisterContractResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterContractResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRegisterContractResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContractResponse",
            value: MsgRegisterContractResponse.encode(message).finish()
        };
    }
};
function createBaseMsgContractDepositRent() {
    return {
        contractAddr: "",
        amount: Long.UZERO,
        sender: ""
    };
}
export const MsgContractDepositRent = {
    typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        if (!message.amount.isZero()) {
            writer.uint32(16).uint64(message.amount);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgContractDepositRent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
                    break;
                case 2:
                    message.amount = reader.uint64();
                    break;
                case 3:
                    message.sender = reader.string();
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
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
            amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
            sender: isSet(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgContractDepositRent();
        message.contractAddr = object.contractAddr ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgContractDepositRent();
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Long.fromString(object.amount);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contractAddr = message.contractAddr;
        obj.amount = message.amount ? message.amount.toString() : undefined;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgContractDepositRent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgContractDepositRent.decode(message.value);
    },
    toProto(message) {
        return MsgContractDepositRent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
            value: MsgContractDepositRent.encode(message).finish()
        };
    }
};
function createBaseMsgContractDepositRentResponse() {
    return {};
}
export const MsgContractDepositRentResponse = {
    typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRentResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgContractDepositRentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgContractDepositRentResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgContractDepositRentResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgContractDepositRentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgContractDepositRentResponse.decode(message.value);
    },
    toProto(message) {
        return MsgContractDepositRentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRentResponse",
            value: MsgContractDepositRentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUnregisterContract() {
    return {
        creator: "",
        contractAddr: ""
    };
}
export const MsgUnregisterContract = {
    typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.contractAddr !== "") {
            writer.uint32(18).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnregisterContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.contractAddr = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnregisterContract();
        message.creator = object.creator ?? "";
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnregisterContract();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnregisterContract.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUnregisterContract.decode(message.value);
    },
    toProto(message) {
        return MsgUnregisterContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
            value: MsgUnregisterContract.encode(message).finish()
        };
    }
};
function createBaseMsgUnregisterContractResponse() {
    return {};
}
export const MsgUnregisterContractResponse = {
    typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContractResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnregisterContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUnregisterContractResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUnregisterContractResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnregisterContractResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUnregisterContractResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUnregisterContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContractResponse",
            value: MsgUnregisterContractResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterPairs() {
    return {
        creator: "",
        batchcontractpair: []
    };
}
export const MsgRegisterPairs = {
    typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        for (const v of message.batchcontractpair) {
            BatchContractPair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.batchcontractpair.push(BatchContractPair.decode(reader, reader.uint32()));
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            batchcontractpair: Array.isArray(object?.batchcontractpair) ? object.batchcontractpair.map((e) => BatchContractPair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.batchcontractpair) {
            obj.batchcontractpair = message.batchcontractpair.map(e => e ? BatchContractPair.toJSON(e) : undefined);
        }
        else {
            obj.batchcontractpair = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterPairs();
        message.creator = object.creator ?? "";
        message.batchcontractpair = object.batchcontractpair?.map(e => BatchContractPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterPairs();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        message.batchcontractpair = object.batchcontractpair?.map(e => BatchContractPair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        if (message.batchcontractpair) {
            obj.batchcontractpair = message.batchcontractpair.map(e => e ? BatchContractPair.toAmino(e) : undefined);
        }
        else {
            obj.batchcontractpair = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterPairs.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRegisterPairs.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterPairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
            value: MsgRegisterPairs.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterPairsResponse() {
    return {};
}
export const MsgRegisterPairsResponse = {
    typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairsResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterPairsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRegisterPairsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterPairsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRegisterPairsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterPairsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairsResponse",
            value: MsgRegisterPairsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePriceTickSize() {
    return {
        creator: "",
        tickSizeList: []
    };
}
export const MsgUpdatePriceTickSize = {
    typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        for (const v of message.tickSizeList) {
            TickSize.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePriceTickSize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.tickSizeList.push(TickSize.decode(reader, reader.uint32()));
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            tickSizeList: Array.isArray(object?.tickSizeList) ? object.tickSizeList.map((e) => TickSize.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.tickSizeList) {
            obj.tickSizeList = message.tickSizeList.map(e => e ? TickSize.toJSON(e) : undefined);
        }
        else {
            obj.tickSizeList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdatePriceTickSize();
        message.creator = object.creator ?? "";
        message.tickSizeList = object.tickSizeList?.map(e => TickSize.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdatePriceTickSize();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        message.tickSizeList = object.tickSizeList?.map(e => TickSize.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        if (message.tickSizeList) {
            obj.tickSizeList = message.tickSizeList.map(e => e ? TickSize.toAmino(e) : undefined);
        }
        else {
            obj.tickSizeList = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdatePriceTickSize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdatePriceTickSize.decode(message.value);
    },
    toProto(message) {
        return MsgUpdatePriceTickSize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
            value: MsgUpdatePriceTickSize.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateQuantityTickSize() {
    return {
        creator: "",
        tickSizeList: []
    };
}
export const MsgUpdateQuantityTickSize = {
    typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        for (const v of message.tickSizeList) {
            TickSize.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateQuantityTickSize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.tickSizeList.push(TickSize.decode(reader, reader.uint32()));
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            tickSizeList: Array.isArray(object?.tickSizeList) ? object.tickSizeList.map((e) => TickSize.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.tickSizeList) {
            obj.tickSizeList = message.tickSizeList.map(e => e ? TickSize.toJSON(e) : undefined);
        }
        else {
            obj.tickSizeList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateQuantityTickSize();
        message.creator = object.creator ?? "";
        message.tickSizeList = object.tickSizeList?.map(e => TickSize.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateQuantityTickSize();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        message.tickSizeList = object.tickSizeList?.map(e => TickSize.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        if (message.tickSizeList) {
            obj.tickSizeList = message.tickSizeList.map(e => e ? TickSize.toAmino(e) : undefined);
        }
        else {
            obj.tickSizeList = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateQuantityTickSize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateQuantityTickSize.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateQuantityTickSize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
            value: MsgUpdateQuantityTickSize.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateTickSizeResponse() {
    return {};
}
export const MsgUpdateTickSizeResponse = {
    typeUrl: "/seiprotocol.seichain.dex.MsgUpdateTickSizeResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateTickSizeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateTickSizeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateTickSizeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateTickSizeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateTickSizeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateTickSizeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgUpdateTickSizeResponse",
            value: MsgUpdateTickSizeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUnsuspendContract() {
    return {
        creator: "",
        contractAddr: ""
    };
}
export const MsgUnsuspendContract = {
    typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.contractAddr !== "") {
            writer.uint32(18).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnsuspendContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.contractAddr = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnsuspendContract();
        message.creator = object.creator ?? "";
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnsuspendContract();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.contractAddr !== undefined && object.contractAddr !== null) {
            message.contractAddr = object.contractAddr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.contractAddr = message.contractAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnsuspendContract.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUnsuspendContract.decode(message.value);
    },
    toProto(message) {
        return MsgUnsuspendContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
            value: MsgUnsuspendContract.encode(message).finish()
        };
    }
};
function createBaseMsgUnsuspendContractResponse() {
    return {};
}
export const MsgUnsuspendContractResponse = {
    typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContractResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnsuspendContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUnsuspendContractResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUnsuspendContractResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnsuspendContractResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUnsuspendContractResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUnsuspendContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContractResponse",
            value: MsgUnsuspendContractResponse.encode(message).finish()
        };
    }
};
