import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
function createBaseMinter() {
    return {
        startDate: "",
        endDate: "",
        denom: "",
        totalMintAmount: Long.UZERO,
        remainingMintAmount: Long.UZERO,
        lastMintAmount: Long.UZERO,
        lastMintDate: "",
        lastMintHeight: Long.UZERO
    };
}
export const Minter = {
    typeUrl: "/seiprotocol.seichain.mint.Minter",
    encode(message, writer = _m0.Writer.create()) {
        if (message.startDate !== "") {
            writer.uint32(10).string(message.startDate);
        }
        if (message.endDate !== "") {
            writer.uint32(18).string(message.endDate);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (!message.totalMintAmount.isZero()) {
            writer.uint32(32).uint64(message.totalMintAmount);
        }
        if (!message.remainingMintAmount.isZero()) {
            writer.uint32(40).uint64(message.remainingMintAmount);
        }
        if (!message.lastMintAmount.isZero()) {
            writer.uint32(48).uint64(message.lastMintAmount);
        }
        if (message.lastMintDate !== "") {
            writer.uint32(58).string(message.lastMintDate);
        }
        if (!message.lastMintHeight.isZero()) {
            writer.uint32(64).uint64(message.lastMintHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startDate = reader.string();
                    break;
                case 2:
                    message.endDate = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.totalMintAmount = reader.uint64();
                    break;
                case 5:
                    message.remainingMintAmount = reader.uint64();
                    break;
                case 6:
                    message.lastMintAmount = reader.uint64();
                    break;
                case 7:
                    message.lastMintDate = reader.string();
                    break;
                case 8:
                    message.lastMintHeight = reader.uint64();
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
            startDate: isSet(object.startDate) ? String(object.startDate) : "",
            endDate: isSet(object.endDate) ? String(object.endDate) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            totalMintAmount: isSet(object.totalMintAmount) ? Long.fromValue(object.totalMintAmount) : Long.UZERO,
            remainingMintAmount: isSet(object.remainingMintAmount) ? Long.fromValue(object.remainingMintAmount) : Long.UZERO,
            lastMintAmount: isSet(object.lastMintAmount) ? Long.fromValue(object.lastMintAmount) : Long.UZERO,
            lastMintDate: isSet(object.lastMintDate) ? String(object.lastMintDate) : "",
            lastMintHeight: isSet(object.lastMintHeight) ? Long.fromValue(object.lastMintHeight) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        message.denom !== undefined && (obj.denom = message.denom);
        message.totalMintAmount !== undefined && (obj.totalMintAmount = (message.totalMintAmount || Long.UZERO).toString());
        message.remainingMintAmount !== undefined && (obj.remainingMintAmount = (message.remainingMintAmount || Long.UZERO).toString());
        message.lastMintAmount !== undefined && (obj.lastMintAmount = (message.lastMintAmount || Long.UZERO).toString());
        message.lastMintDate !== undefined && (obj.lastMintDate = message.lastMintDate);
        message.lastMintHeight !== undefined && (obj.lastMintHeight = (message.lastMintHeight || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.startDate = object.startDate ?? "";
        message.endDate = object.endDate ?? "";
        message.denom = object.denom ?? "";
        message.totalMintAmount = object.totalMintAmount !== undefined && object.totalMintAmount !== null ? Long.fromValue(object.totalMintAmount) : Long.UZERO;
        message.remainingMintAmount = object.remainingMintAmount !== undefined && object.remainingMintAmount !== null ? Long.fromValue(object.remainingMintAmount) : Long.UZERO;
        message.lastMintAmount = object.lastMintAmount !== undefined && object.lastMintAmount !== null ? Long.fromValue(object.lastMintAmount) : Long.UZERO;
        message.lastMintDate = object.lastMintDate ?? "";
        message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? Long.fromValue(object.lastMintHeight) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMinter();
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = object.start_date;
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = object.end_date;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.total_mint_amount !== undefined && object.total_mint_amount !== null) {
            message.totalMintAmount = Long.fromString(object.total_mint_amount);
        }
        if (object.remaining_mint_amount !== undefined && object.remaining_mint_amount !== null) {
            message.remainingMintAmount = Long.fromString(object.remaining_mint_amount);
        }
        if (object.last_mint_amount !== undefined && object.last_mint_amount !== null) {
            message.lastMintAmount = Long.fromString(object.last_mint_amount);
        }
        if (object.last_mint_date !== undefined && object.last_mint_date !== null) {
            message.lastMintDate = object.last_mint_date;
        }
        if (object.last_mint_height !== undefined && object.last_mint_height !== null) {
            message.lastMintHeight = Long.fromString(object.last_mint_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.start_date = message.startDate;
        obj.end_date = message.endDate;
        obj.denom = message.denom;
        obj.total_mint_amount = message.totalMintAmount ? message.totalMintAmount.toString() : undefined;
        obj.remaining_mint_amount = message.remainingMintAmount ? message.remainingMintAmount.toString() : undefined;
        obj.last_mint_amount = message.lastMintAmount ? message.lastMintAmount.toString() : undefined;
        obj.last_mint_date = message.lastMintDate;
        obj.last_mint_height = message.lastMintHeight ? message.lastMintHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Minter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Minter.decode(message.value);
    },
    toProto(message) {
        return Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.mint.Minter",
            value: Minter.encode(message).finish()
        };
    }
};
function createBaseScheduledTokenRelease() {
    return {
        startDate: "",
        endDate: "",
        tokenReleaseAmount: Long.UZERO
    };
}
export const ScheduledTokenRelease = {
    typeUrl: "/seiprotocol.seichain.mint.ScheduledTokenRelease",
    encode(message, writer = _m0.Writer.create()) {
        if (message.startDate !== "") {
            writer.uint32(10).string(message.startDate);
        }
        if (message.endDate !== "") {
            writer.uint32(18).string(message.endDate);
        }
        if (!message.tokenReleaseAmount.isZero()) {
            writer.uint32(24).uint64(message.tokenReleaseAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScheduledTokenRelease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startDate = reader.string();
                    break;
                case 2:
                    message.endDate = reader.string();
                    break;
                case 3:
                    message.tokenReleaseAmount = reader.uint64();
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
            startDate: isSet(object.startDate) ? String(object.startDate) : "",
            endDate: isSet(object.endDate) ? String(object.endDate) : "",
            tokenReleaseAmount: isSet(object.tokenReleaseAmount) ? Long.fromValue(object.tokenReleaseAmount) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        message.tokenReleaseAmount !== undefined && (obj.tokenReleaseAmount = (message.tokenReleaseAmount || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseScheduledTokenRelease();
        message.startDate = object.startDate ?? "";
        message.endDate = object.endDate ?? "";
        message.tokenReleaseAmount = object.tokenReleaseAmount !== undefined && object.tokenReleaseAmount !== null ? Long.fromValue(object.tokenReleaseAmount) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseScheduledTokenRelease();
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = object.start_date;
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = object.end_date;
        }
        if (object.token_release_amount !== undefined && object.token_release_amount !== null) {
            message.tokenReleaseAmount = Long.fromString(object.token_release_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.start_date = message.startDate;
        obj.end_date = message.endDate;
        obj.token_release_amount = message.tokenReleaseAmount ? message.tokenReleaseAmount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ScheduledTokenRelease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ScheduledTokenRelease.decode(message.value);
    },
    toProto(message) {
        return ScheduledTokenRelease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.mint.ScheduledTokenRelease",
            value: ScheduledTokenRelease.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        mintDenom: "",
        tokenReleaseSchedule: []
    };
}
export const Params = {
    typeUrl: "/seiprotocol.seichain.mint.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        for (const v of message.tokenReleaseSchedule) {
            ScheduledTokenRelease.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.tokenReleaseSchedule.push(ScheduledTokenRelease.decode(reader, reader.uint32()));
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
            mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
            tokenReleaseSchedule: Array.isArray(object?.tokenReleaseSchedule) ? object.tokenReleaseSchedule.map((e) => ScheduledTokenRelease.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
        if (message.tokenReleaseSchedule) {
            obj.tokenReleaseSchedule = message.tokenReleaseSchedule.map(e => e ? ScheduledTokenRelease.toJSON(e) : undefined);
        }
        else {
            obj.tokenReleaseSchedule = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintDenom = object.mintDenom ?? "";
        message.tokenReleaseSchedule = object.tokenReleaseSchedule?.map(e => ScheduledTokenRelease.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mintDenom = object.mint_denom;
        }
        message.tokenReleaseSchedule = object.token_release_schedule?.map(e => ScheduledTokenRelease.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom;
        if (message.tokenReleaseSchedule) {
            obj.token_release_schedule = message.tokenReleaseSchedule.map(e => e ? ScheduledTokenRelease.toAmino(e) : undefined);
        }
        else {
            obj.token_release_schedule = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.mint.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseVersion2Minter() {
    return {
        lastMintAmount: "",
        lastMintDate: "",
        lastMintHeight: Long.ZERO,
        denom: ""
    };
}
export const Version2Minter = {
    typeUrl: "/seiprotocol.seichain.mint.Version2Minter",
    encode(message, writer = _m0.Writer.create()) {
        if (message.lastMintAmount !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.lastMintAmount, 18).atomics);
        }
        if (message.lastMintDate !== "") {
            writer.uint32(18).string(message.lastMintDate);
        }
        if (!message.lastMintHeight.isZero()) {
            writer.uint32(24).int64(message.lastMintHeight);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersion2Minter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastMintAmount = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.lastMintDate = reader.string();
                    break;
                case 3:
                    message.lastMintHeight = reader.int64();
                    break;
                case 4:
                    message.denom = reader.string();
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
            lastMintAmount: isSet(object.lastMintAmount) ? String(object.lastMintAmount) : "",
            lastMintDate: isSet(object.lastMintDate) ? String(object.lastMintDate) : "",
            lastMintHeight: isSet(object.lastMintHeight) ? Long.fromValue(object.lastMintHeight) : Long.ZERO,
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.lastMintAmount !== undefined && (obj.lastMintAmount = message.lastMintAmount);
        message.lastMintDate !== undefined && (obj.lastMintDate = message.lastMintDate);
        message.lastMintHeight !== undefined && (obj.lastMintHeight = (message.lastMintHeight || Long.ZERO).toString());
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersion2Minter();
        message.lastMintAmount = object.lastMintAmount ?? "";
        message.lastMintDate = object.lastMintDate ?? "";
        message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? Long.fromValue(object.lastMintHeight) : Long.ZERO;
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVersion2Minter();
        if (object.last_mint_amount !== undefined && object.last_mint_amount !== null) {
            message.lastMintAmount = object.last_mint_amount;
        }
        if (object.last_mint_date !== undefined && object.last_mint_date !== null) {
            message.lastMintDate = object.last_mint_date;
        }
        if (object.last_mint_height !== undefined && object.last_mint_height !== null) {
            message.lastMintHeight = Long.fromString(object.last_mint_height);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.last_mint_amount = message.lastMintAmount;
        obj.last_mint_date = message.lastMintDate;
        obj.last_mint_height = message.lastMintHeight ? message.lastMintHeight.toString() : undefined;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return Version2Minter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Version2Minter.decode(message.value);
    },
    toProto(message) {
        return Version2Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.mint.Version2Minter",
            value: Version2Minter.encode(message).finish()
        };
    }
};
function createBaseVersion2ScheduledTokenRelease() {
    return {
        date: "",
        tokenReleaseAmount: Long.ZERO
    };
}
export const Version2ScheduledTokenRelease = {
    typeUrl: "/seiprotocol.seichain.mint.Version2ScheduledTokenRelease",
    encode(message, writer = _m0.Writer.create()) {
        if (message.date !== "") {
            writer.uint32(10).string(message.date);
        }
        if (!message.tokenReleaseAmount.isZero()) {
            writer.uint32(16).int64(message.tokenReleaseAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersion2ScheduledTokenRelease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.date = reader.string();
                    break;
                case 2:
                    message.tokenReleaseAmount = reader.int64();
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
            date: isSet(object.date) ? String(object.date) : "",
            tokenReleaseAmount: isSet(object.tokenReleaseAmount) ? Long.fromValue(object.tokenReleaseAmount) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.date !== undefined && (obj.date = message.date);
        message.tokenReleaseAmount !== undefined && (obj.tokenReleaseAmount = (message.tokenReleaseAmount || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersion2ScheduledTokenRelease();
        message.date = object.date ?? "";
        message.tokenReleaseAmount = object.tokenReleaseAmount !== undefined && object.tokenReleaseAmount !== null ? Long.fromValue(object.tokenReleaseAmount) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVersion2ScheduledTokenRelease();
        if (object.date !== undefined && object.date !== null) {
            message.date = object.date;
        }
        if (object.token_release_amount !== undefined && object.token_release_amount !== null) {
            message.tokenReleaseAmount = Long.fromString(object.token_release_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.date = message.date;
        obj.token_release_amount = message.tokenReleaseAmount ? message.tokenReleaseAmount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Version2ScheduledTokenRelease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Version2ScheduledTokenRelease.decode(message.value);
    },
    toProto(message) {
        return Version2ScheduledTokenRelease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.mint.Version2ScheduledTokenRelease",
            value: Version2ScheduledTokenRelease.encode(message).finish()
        };
    }
};
function createBaseVersion2Params() {
    return {
        mintDenom: "",
        tokenReleaseSchedule: []
    };
}
export const Version2Params = {
    typeUrl: "/seiprotocol.seichain.mint.Version2Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        for (const v of message.tokenReleaseSchedule) {
            Version2ScheduledTokenRelease.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersion2Params();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.tokenReleaseSchedule.push(Version2ScheduledTokenRelease.decode(reader, reader.uint32()));
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
            mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
            tokenReleaseSchedule: Array.isArray(object?.tokenReleaseSchedule) ? object.tokenReleaseSchedule.map((e) => Version2ScheduledTokenRelease.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
        if (message.tokenReleaseSchedule) {
            obj.tokenReleaseSchedule = message.tokenReleaseSchedule.map(e => e ? Version2ScheduledTokenRelease.toJSON(e) : undefined);
        }
        else {
            obj.tokenReleaseSchedule = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersion2Params();
        message.mintDenom = object.mintDenom ?? "";
        message.tokenReleaseSchedule = object.tokenReleaseSchedule?.map(e => Version2ScheduledTokenRelease.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseVersion2Params();
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mintDenom = object.mint_denom;
        }
        message.tokenReleaseSchedule = object.token_release_schedule?.map(e => Version2ScheduledTokenRelease.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom;
        if (message.tokenReleaseSchedule) {
            obj.token_release_schedule = message.tokenReleaseSchedule.map(e => e ? Version2ScheduledTokenRelease.toAmino(e) : undefined);
        }
        else {
            obj.token_release_schedule = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Version2Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Version2Params.decode(message.value);
    },
    toProto(message) {
        return Version2Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.mint.Version2Params",
            value: Version2Params.encode(message).finish()
        };
    }
};
