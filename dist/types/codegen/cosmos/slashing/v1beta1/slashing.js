import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, toDuration, fromDuration, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseValidatorSigningInfoLegacyMissedHeights() {
    return {
        address: "",
        startHeight: Long.ZERO,
        jailedUntil: new Date(),
        tombstoned: false,
        missedBlocksCounter: Long.ZERO
    };
}
export const ValidatorSigningInfoLegacyMissedHeights = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfoLegacyMissedHeights",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.startHeight.isZero()) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (message.jailedUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(26).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(32).bool(message.tombstoned);
        }
        if (!message.missedBlocksCounter.isZero()) {
            writer.uint32(40).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfoLegacyMissedHeights();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.startHeight = reader.int64();
                    break;
                case 3:
                    message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tombstoned = reader.bool();
                    break;
                case 5:
                    message.missedBlocksCounter = reader.int64();
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
            address: isSet(object.address) ? String(object.address) : "",
            startHeight: isSet(object.startHeight) ? Long.fromValue(object.startHeight) : Long.ZERO,
            jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missedBlocksCounter: isSet(object.missedBlocksCounter) ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.startHeight !== undefined && (obj.startHeight = (message.startHeight || Long.ZERO).toString());
        message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.missedBlocksCounter !== undefined && (obj.missedBlocksCounter = (message.missedBlocksCounter || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSigningInfoLegacyMissedHeights();
        message.address = object.address ?? "";
        message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? Long.fromValue(object.startHeight) : Long.ZERO;
        message.jailedUntil = object.jailedUntil ?? undefined;
        message.tombstoned = object.tombstoned ?? false;
        message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSigningInfoLegacyMissedHeights();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.start_height !== undefined && object.start_height !== null) {
            message.startHeight = Long.fromString(object.start_height);
        }
        if (object.jailed_until !== undefined && object.jailed_until !== null) {
            message.jailedUntil = fromTimestamp(Timestamp.fromAmino(object.jailed_until));
        }
        if (object.tombstoned !== undefined && object.tombstoned !== null) {
            message.tombstoned = object.tombstoned;
        }
        if (object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null) {
            message.missedBlocksCounter = Long.fromString(object.missed_blocks_counter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
        obj.jailed_until = message.jailedUntil ? Timestamp.toAmino(toTimestamp(message.jailedUntil)) : undefined;
        obj.tombstoned = message.tombstoned;
        obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSigningInfoLegacyMissedHeights.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSigningInfoLegacyMissedHeights",
            value: ValidatorSigningInfoLegacyMissedHeights.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSigningInfoLegacyMissedHeights.decode(message.value);
    },
    toProto(message) {
        return ValidatorSigningInfoLegacyMissedHeights.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfoLegacyMissedHeights",
            value: ValidatorSigningInfoLegacyMissedHeights.encode(message).finish()
        };
    }
};
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        startHeight: Long.ZERO,
        indexOffset: Long.ZERO,
        jailedUntil: new Date(),
        tombstoned: false,
        missedBlocksCounter: Long.ZERO
    };
}
export const ValidatorSigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.startHeight.isZero()) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (!message.indexOffset.isZero()) {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (!message.missedBlocksCounter.isZero()) {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.startHeight = reader.int64();
                    break;
                case 3:
                    message.indexOffset = reader.int64();
                    break;
                case 4:
                    message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missedBlocksCounter = reader.int64();
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
            address: isSet(object.address) ? String(object.address) : "",
            startHeight: isSet(object.startHeight) ? Long.fromValue(object.startHeight) : Long.ZERO,
            indexOffset: isSet(object.indexOffset) ? Long.fromValue(object.indexOffset) : Long.ZERO,
            jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missedBlocksCounter: isSet(object.missedBlocksCounter) ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.startHeight !== undefined && (obj.startHeight = (message.startHeight || Long.ZERO).toString());
        message.indexOffset !== undefined && (obj.indexOffset = (message.indexOffset || Long.ZERO).toString());
        message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.missedBlocksCounter !== undefined && (obj.missedBlocksCounter = (message.missedBlocksCounter || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSigningInfo();
        message.address = object.address ?? "";
        message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? Long.fromValue(object.startHeight) : Long.ZERO;
        message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? Long.fromValue(object.indexOffset) : Long.ZERO;
        message.jailedUntil = object.jailedUntil ?? undefined;
        message.tombstoned = object.tombstoned ?? false;
        message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSigningInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.start_height !== undefined && object.start_height !== null) {
            message.startHeight = Long.fromString(object.start_height);
        }
        if (object.index_offset !== undefined && object.index_offset !== null) {
            message.indexOffset = Long.fromString(object.index_offset);
        }
        if (object.jailed_until !== undefined && object.jailed_until !== null) {
            message.jailedUntil = fromTimestamp(Timestamp.fromAmino(object.jailed_until));
        }
        if (object.tombstoned !== undefined && object.tombstoned !== null) {
            message.tombstoned = object.tombstoned;
        }
        if (object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null) {
            message.missedBlocksCounter = Long.fromString(object.missed_blocks_counter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
        obj.index_offset = message.indexOffset ? message.indexOffset.toString() : undefined;
        obj.jailed_until = message.jailedUntil ? Timestamp.toAmino(toTimestamp(message.jailedUntil)) : undefined;
        obj.tombstoned = message.tombstoned;
        obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSigningInfo",
            value: ValidatorSigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSigningInfo.decode(message.value);
    },
    toProto(message) {
        return ValidatorSigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
            value: ValidatorSigningInfo.encode(message).finish()
        };
    }
};
function createBaseValidatorMissedBlockArrayLegacyMissedHeights() {
    return {
        address: "",
        missedHeights: []
    };
}
export const ValidatorMissedBlockArrayLegacyMissedHeights = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        writer.uint32(18).fork();
        for (const v of message.missedHeights) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMissedBlockArrayLegacyMissedHeights();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.missedHeights.push(reader.int64());
                        }
                    }
                    else {
                        message.missedHeights.push(reader.int64());
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
            address: isSet(object.address) ? String(object.address) : "",
            missedHeights: Array.isArray(object?.missedHeights) ? object.missedHeights.map((e) => Long.fromValue(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missedHeights) {
            obj.missedHeights = message.missedHeights.map(e => (e || Long.ZERO).toString());
        }
        else {
            obj.missedHeights = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorMissedBlockArrayLegacyMissedHeights();
        message.address = object.address ?? "";
        message.missedHeights = object.missedHeights?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorMissedBlockArrayLegacyMissedHeights();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.missedHeights = object.missed_heights?.map(e => Long.fromString(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.missedHeights) {
            obj.missed_heights = message.missedHeights.map(e => e);
        }
        else {
            obj.missed_heights = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorMissedBlockArrayLegacyMissedHeights.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorMissedBlockArrayLegacyMissedHeights",
            value: ValidatorMissedBlockArrayLegacyMissedHeights.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorMissedBlockArrayLegacyMissedHeights.decode(message.value);
    },
    toProto(message) {
        return ValidatorMissedBlockArrayLegacyMissedHeights.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights",
            value: ValidatorMissedBlockArrayLegacyMissedHeights.encode(message).finish()
        };
    }
};
function createBaseValidatorMissedBlockArray() {
    return {
        address: "",
        windowSize: Long.ZERO,
        missedBlocks: []
    };
}
export const ValidatorMissedBlockArray = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArray",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.windowSize.isZero()) {
            writer.uint32(16).int64(message.windowSize);
        }
        writer.uint32(26).fork();
        for (const v of message.missedBlocks) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMissedBlockArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.windowSize = reader.int64();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.missedBlocks.push(reader.uint64());
                        }
                    }
                    else {
                        message.missedBlocks.push(reader.uint64());
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
            address: isSet(object.address) ? String(object.address) : "",
            windowSize: isSet(object.windowSize) ? Long.fromValue(object.windowSize) : Long.ZERO,
            missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e) => Long.fromValue(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.windowSize !== undefined && (obj.windowSize = (message.windowSize || Long.ZERO).toString());
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorMissedBlockArray();
        message.address = object.address ?? "";
        message.windowSize = object.windowSize !== undefined && object.windowSize !== null ? Long.fromValue(object.windowSize) : Long.ZERO;
        message.missedBlocks = object.missedBlocks?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorMissedBlockArray();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.window_size !== undefined && object.window_size !== null) {
            message.windowSize = Long.fromString(object.window_size);
        }
        message.missedBlocks = object.missed_blocks?.map(e => Long.fromString(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.window_size = message.windowSize ? message.windowSize.toString() : undefined;
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorMissedBlockArray.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorMissedBlockArray",
            value: ValidatorMissedBlockArray.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorMissedBlockArray.decode(message.value);
    },
    toProto(message) {
        return ValidatorMissedBlockArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArray",
            value: ValidatorMissedBlockArray.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        signedBlocksWindow: Long.ZERO,
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: Duration.fromPartial({}),
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array()
    };
}
export const Params = {
    typeUrl: "/cosmos.slashing.v1beta1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.signedBlocksWindow.isZero()) {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            Duration.encode(toDuration(message.downtimeJailDuration), writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
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
                    message.signedBlocksWindow = reader.int64();
                    break;
                case 2:
                    message.minSignedPerWindow = reader.bytes();
                    break;
                case 3:
                    message.downtimeJailDuration = fromDuration(Duration.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.slashFractionDoubleSign = reader.bytes();
                    break;
                case 5:
                    message.slashFractionDowntime = reader.bytes();
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
            signedBlocksWindow: isSet(object.signedBlocksWindow) ? Long.fromValue(object.signedBlocksWindow) : Long.ZERO,
            minSignedPerWindow: isSet(object.minSignedPerWindow) ? bytesFromBase64(object.minSignedPerWindow) : new Uint8Array(),
            downtimeJailDuration: isSet(object.downtimeJailDuration) ? String(object.downtimeJailDuration) : undefined,
            slashFractionDoubleSign: isSet(object.slashFractionDoubleSign) ? bytesFromBase64(object.slashFractionDoubleSign) : new Uint8Array(),
            slashFractionDowntime: isSet(object.slashFractionDowntime) ? bytesFromBase64(object.slashFractionDowntime) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedBlocksWindow !== undefined && (obj.signedBlocksWindow = (message.signedBlocksWindow || Long.ZERO).toString());
        message.minSignedPerWindow !== undefined && (obj.minSignedPerWindow = base64FromBytes(message.minSignedPerWindow !== undefined ? message.minSignedPerWindow : new Uint8Array()));
        message.downtimeJailDuration !== undefined && (obj.downtimeJailDuration = message.downtimeJailDuration);
        message.slashFractionDoubleSign !== undefined && (obj.slashFractionDoubleSign = base64FromBytes(message.slashFractionDoubleSign !== undefined ? message.slashFractionDoubleSign : new Uint8Array()));
        message.slashFractionDowntime !== undefined && (obj.slashFractionDowntime = base64FromBytes(message.slashFractionDowntime !== undefined ? message.slashFractionDowntime : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? Long.fromValue(object.signedBlocksWindow) : Long.ZERO;
        message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
        message.downtimeJailDuration = object.downtimeJailDuration ?? undefined;
        message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
        message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.signed_blocks_window !== undefined && object.signed_blocks_window !== null) {
            message.signedBlocksWindow = Long.fromString(object.signed_blocks_window);
        }
        if (object.min_signed_per_window !== undefined && object.min_signed_per_window !== null) {
            message.minSignedPerWindow = bytesFromBase64(object.min_signed_per_window);
        }
        if (object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null) {
            message.downtimeJailDuration = Duration.fromAmino(object.downtime_jail_duration);
        }
        if (object.slash_fraction_double_sign !== undefined && object.slash_fraction_double_sign !== null) {
            message.slashFractionDoubleSign = bytesFromBase64(object.slash_fraction_double_sign);
        }
        if (object.slash_fraction_downtime !== undefined && object.slash_fraction_downtime !== null) {
            message.slashFractionDowntime = bytesFromBase64(object.slash_fraction_downtime);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_blocks_window = message.signedBlocksWindow ? message.signedBlocksWindow.toString() : undefined;
        obj.min_signed_per_window = message.minSignedPerWindow ? base64FromBytes(message.minSignedPerWindow) : undefined;
        obj.downtime_jail_duration = message.downtimeJailDuration ? Duration.toAmino(message.downtimeJailDuration) : undefined;
        obj.slash_fraction_double_sign = message.slashFractionDoubleSign ? base64FromBytes(message.slashFractionDoubleSign) : undefined;
        obj.slash_fraction_downtime = message.slashFractionDowntime ? base64FromBytes(message.slashFractionDowntime) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
