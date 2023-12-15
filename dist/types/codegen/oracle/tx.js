import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
function createBaseMsgAggregateExchangeRateVote() {
    return {
        exchangeRates: "",
        feeder: "",
        validator: ""
    };
}
export const MsgAggregateExchangeRateVote = {
    typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote",
    encode(message, writer = _m0.Writer.create()) {
        if (message.exchangeRates !== "") {
            writer.uint32(18).string(message.exchangeRates);
        }
        if (message.feeder !== "") {
            writer.uint32(26).string(message.feeder);
        }
        if (message.validator !== "") {
            writer.uint32(34).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRateVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.exchangeRates = reader.string();
                    break;
                case 3:
                    message.feeder = reader.string();
                    break;
                case 4:
                    message.validator = reader.string();
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
            exchangeRates: isSet(object.exchangeRates) ? String(object.exchangeRates) : "",
            feeder: isSet(object.feeder) ? String(object.feeder) : "",
            validator: isSet(object.validator) ? String(object.validator) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.exchangeRates !== undefined && (obj.exchangeRates = message.exchangeRates);
        message.feeder !== undefined && (obj.feeder = message.feeder);
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAggregateExchangeRateVote();
        message.exchangeRates = object.exchangeRates ?? "";
        message.feeder = object.feeder ?? "";
        message.validator = object.validator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAggregateExchangeRateVote();
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            message.exchangeRates = object.exchange_rates;
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = object.feeder;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exchange_rates = message.exchangeRates;
        obj.feeder = message.feeder;
        obj.validator = message.validator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAggregateExchangeRateVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRateVote.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRateVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote",
            value: MsgAggregateExchangeRateVote.encode(message).finish()
        };
    }
};
function createBaseMsgAggregateExchangeRateVoteResponse() {
    return {};
}
export const MsgAggregateExchangeRateVoteResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRateVoteResponse();
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
        const message = createBaseMsgAggregateExchangeRateVoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAggregateExchangeRateVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAggregateExchangeRateVoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRateVoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRateVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVoteResponse",
            value: MsgAggregateExchangeRateVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateFeedConsent() {
    return {
        operator: "",
        delegate: ""
    };
}
export const MsgDelegateFeedConsent = {
    typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.operator !== "") {
            writer.uint32(10).string(message.operator);
        }
        if (message.delegate !== "") {
            writer.uint32(18).string(message.delegate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateFeedConsent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.string();
                    break;
                case 2:
                    message.delegate = reader.string();
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
            operator: isSet(object.operator) ? String(object.operator) : "",
            delegate: isSet(object.delegate) ? String(object.delegate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator !== undefined && (obj.operator = message.operator);
        message.delegate !== undefined && (obj.delegate = message.delegate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegateFeedConsent();
        message.operator = object.operator ?? "";
        message.delegate = object.delegate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDelegateFeedConsent();
        if (object.operator !== undefined && object.operator !== null) {
            message.operator = object.operator;
        }
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = object.delegate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operator = message.operator;
        obj.delegate = message.delegate;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDelegateFeedConsent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDelegateFeedConsent.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateFeedConsent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent",
            value: MsgDelegateFeedConsent.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateFeedConsentResponse() {
    return {};
}
export const MsgDelegateFeedConsentResponse = {
    typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateFeedConsentResponse();
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
        const message = createBaseMsgDelegateFeedConsentResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDelegateFeedConsentResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDelegateFeedConsentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDelegateFeedConsentResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateFeedConsentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsentResponse",
            value: MsgDelegateFeedConsentResponse.encode(message).finish()
        };
    }
};
