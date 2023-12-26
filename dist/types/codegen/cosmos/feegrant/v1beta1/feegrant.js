import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, toDuration, fromDuration } from "../../../helpers";
function createBaseBasicAllowance() {
    return {
        spendLimit: [],
        expiration: undefined
    };
}
export const BasicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.spendLimit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e) => Coin.fromJSON(e)) : [],
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spendLimit = message.spendLimit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.spendLimit = [];
        }
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBasicAllowance();
        message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBasicAllowance();
        message.spendLimit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spend_limit = message.spendLimit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BasicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BasicAllowance",
            value: BasicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BasicAllowance.decode(message.value);
    },
    toProto(message) {
        return BasicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
            value: BasicAllowance.encode(message).finish()
        };
    }
};
function createBasePeriodicAllowance() {
    return {
        basic: BasicAllowance.fromPartial({}),
        period: Duration.fromPartial({}),
        periodSpendLimit: [],
        periodCanSpend: [],
        periodReset: new Date()
    };
}
export const PeriodicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    encode(message, writer = _m0.Writer.create()) {
        if (message.basic !== undefined) {
            BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            Duration.encode(toDuration(message.period), writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.periodSpendLimit) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.periodCanSpend) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.periodReset !== undefined) {
            Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = fromDuration(Duration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.periodCanSpend.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.periodReset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            basic: isSet(object.basic) ? BasicAllowance.fromJSON(object.basic) : undefined,
            period: isSet(object.period) ? String(object.period) : undefined,
            periodSpendLimit: Array.isArray(object?.periodSpendLimit) ? object.periodSpendLimit.map((e) => Coin.fromJSON(e)) : [],
            periodCanSpend: Array.isArray(object?.periodCanSpend) ? object.periodCanSpend.map((e) => Coin.fromJSON(e)) : [],
            periodReset: isSet(object.periodReset) ? fromJsonTimestamp(object.periodReset) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.basic !== undefined && (obj.basic = message.basic ? BasicAllowance.toJSON(message.basic) : undefined);
        message.period !== undefined && (obj.period = message.period);
        if (message.periodSpendLimit) {
            obj.periodSpendLimit = message.periodSpendLimit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.periodSpendLimit = [];
        }
        if (message.periodCanSpend) {
            obj.periodCanSpend = message.periodCanSpend.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.periodCanSpend = [];
        }
        message.periodReset !== undefined && (obj.periodReset = message.periodReset.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriodicAllowance();
        message.basic = object.basic !== undefined && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : undefined;
        message.period = object.period ?? undefined;
        message.periodSpendLimit = object.periodSpendLimit?.map(e => Coin.fromPartial(e)) || [];
        message.periodCanSpend = object.periodCanSpend?.map(e => Coin.fromPartial(e)) || [];
        message.periodReset = object.periodReset ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePeriodicAllowance();
        if (object.basic !== undefined && object.basic !== null) {
            message.basic = BasicAllowance.fromAmino(object.basic);
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = Duration.fromAmino(object.period);
        }
        message.periodSpendLimit = object.period_spend_limit?.map(e => Coin.fromAmino(e)) || [];
        message.periodCanSpend = object.period_can_spend?.map(e => Coin.fromAmino(e)) || [];
        if (object.period_reset !== undefined && object.period_reset !== null) {
            message.periodReset = fromTimestamp(Timestamp.fromAmino(object.period_reset));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basic = message.basic ? BasicAllowance.toAmino(message.basic) : undefined;
        obj.period = message.period ? Duration.toAmino(message.period) : undefined;
        if (message.periodSpendLimit) {
            obj.period_spend_limit = message.periodSpendLimit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.periodCanSpend) {
            obj.period_can_spend = message.periodCanSpend.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_can_spend = [];
        }
        obj.period_reset = message.periodReset ? Timestamp.toAmino(toTimestamp(message.periodReset)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PeriodicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PeriodicAllowance",
            value: PeriodicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PeriodicAllowance.decode(message.value);
    },
    toProto(message) {
        return PeriodicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
            value: PeriodicAllowance.encode(message).finish()
        };
    }
};
function createBaseAllowedMsgAllowance() {
    return {
        allowance: undefined,
        allowedMessages: []
    };
}
export const AllowedMsgAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
    encode(message, writer = _m0.Writer.create()) {
        if (message.allowance !== undefined) {
            Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allowedMessages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowedMsgAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allowedMessages.push(reader.string());
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
            allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined,
            allowedMessages: Array.isArray(object?.allowedMessages) ? object.allowedMessages.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
        if (message.allowedMessages) {
            obj.allowedMessages = message.allowedMessages.map(e => e);
        }
        else {
            obj.allowedMessages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllowedMsgAllowance();
        message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
        message.allowedMessages = object.allowedMessages?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllowedMsgAllowance();
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = Any.fromAmino(object.allowance);
        }
        message.allowedMessages = object.allowed_messages?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.allowance = message.allowance ? Any.toAmino(message.allowance) : undefined;
        if (message.allowedMessages) {
            obj.allowed_messages = message.allowedMessages.map(e => e);
        }
        else {
            obj.allowed_messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AllowedMsgAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AllowedMsgAllowance",
            value: AllowedMsgAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AllowedMsgAllowance.decode(message.value);
    },
    toProto(message) {
        return AllowedMsgAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
            value: AllowedMsgAllowance.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
export const Grant = {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant",
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = Any.decode(reader, reader.uint32());
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = Any.fromAmino(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.allowance = message.allowance ? Any.toAmino(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Grant.decode(message.value);
    },
    toProto(message) {
        return Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.Grant",
            value: Grant.encode(message).finish()
        };
    }
};
