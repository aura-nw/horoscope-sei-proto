import { Coin } from "../../base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgCreateVestingAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: [],
        endTime: Long.ZERO,
        delayed: false,
        admin: ""
    };
}
export const MsgCreateVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.endTime.isZero()) {
            writer.uint32(32).int64(message.endTime);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        if (message.admin !== "") {
            writer.uint32(50).string(message.admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endTime = reader.int64();
                    break;
                case 5:
                    message.delayed = reader.bool();
                    break;
                case 6:
                    message.admin = reader.string();
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
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
            toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
            endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO,
            delayed: isSet(object.delayed) ? Boolean(object.delayed) : false,
            admin: isSet(object.admin) ? String(object.admin) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
        message.delayed !== undefined && (obj.delayed = message.delayed);
        message.admin !== undefined && (obj.admin = message.admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateVestingAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.endTime = object.endTime !== undefined && object.endTime !== null ? Long.fromValue(object.endTime) : Long.ZERO;
        message.delayed = object.delayed ?? false;
        message.admin = object.admin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = Long.fromString(object.end_time);
        }
        if (object.delayed !== undefined && object.delayed !== null) {
            message.delayed = object.delayed;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.to_address = message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.end_time = message.endTime ? message.endTime.toString() : undefined;
        obj.delayed = message.delayed;
        obj.admin = message.admin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccount",
            value: MsgCreateVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateVestingAccount.decode(message.value);
    },
    toProto(message) {
        return MsgCreateVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
            value: MsgCreateVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
export const MsgCreateVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccountResponse();
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
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccountResponse",
            value: MsgCreateVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
            value: MsgCreateVestingAccountResponse.encode(message).finish()
        };
    }
};
