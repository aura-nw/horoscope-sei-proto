import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Long, toTimestamp, toDuration, fromTimestamp, fromDuration, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseEpoch() {
    return {
        genesisTime: new Date(),
        epochDuration: Duration.fromPartial({}),
        currentEpoch: Long.UZERO,
        currentEpochStartTime: new Date(),
        currentEpochHeight: Long.ZERO
    };
}
export const Epoch = {
    typeUrl: "/seiprotocol.seichain.epoch.Epoch",
    encode(message, writer = _m0.Writer.create()) {
        if (message.genesisTime !== undefined) {
            Timestamp.encode(toTimestamp(message.genesisTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.epochDuration !== undefined) {
            Duration.encode(toDuration(message.epochDuration), writer.uint32(18).fork()).ldelim();
        }
        if (!message.currentEpoch.isZero()) {
            writer.uint32(24).uint64(message.currentEpoch);
        }
        if (message.currentEpochStartTime !== undefined) {
            Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(34).fork()).ldelim();
        }
        if (!message.currentEpochHeight.isZero()) {
            writer.uint32(40).int64(message.currentEpochHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpoch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.genesisTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.epochDuration = fromDuration(Duration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.currentEpoch = reader.uint64();
                    break;
                case 4:
                    message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.currentEpochHeight = reader.int64();
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
            genesisTime: isSet(object.genesisTime) ? fromJsonTimestamp(object.genesisTime) : undefined,
            epochDuration: isSet(object.epochDuration) ? String(object.epochDuration) : undefined,
            currentEpoch: isSet(object.currentEpoch) ? Long.fromValue(object.currentEpoch) : Long.UZERO,
            currentEpochStartTime: isSet(object.currentEpochStartTime) ? fromJsonTimestamp(object.currentEpochStartTime) : undefined,
            currentEpochHeight: isSet(object.currentEpochHeight) ? Long.fromValue(object.currentEpochHeight) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.genesisTime !== undefined && (obj.genesisTime = message.genesisTime.toISOString());
        message.epochDuration !== undefined && (obj.epochDuration = message.epochDuration);
        message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.UZERO).toString());
        message.currentEpochStartTime !== undefined && (obj.currentEpochStartTime = message.currentEpochStartTime.toISOString());
        message.currentEpochHeight !== undefined && (obj.currentEpochHeight = (message.currentEpochHeight || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEpoch();
        message.genesisTime = object.genesisTime ?? undefined;
        message.epochDuration = object.epochDuration ?? undefined;
        message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.UZERO;
        message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
        message.currentEpochHeight = object.currentEpochHeight !== undefined && object.currentEpochHeight !== null ? Long.fromValue(object.currentEpochHeight) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEpoch();
        if (object.genesis_time !== undefined && object.genesis_time !== null) {
            message.genesisTime = fromTimestamp(Timestamp.fromAmino(object.genesis_time));
        }
        if (object.epoch_duration !== undefined && object.epoch_duration !== null) {
            message.epochDuration = Duration.fromAmino(object.epoch_duration);
        }
        if (object.current_epoch !== undefined && object.current_epoch !== null) {
            message.currentEpoch = Long.fromString(object.current_epoch);
        }
        if (object.current_epoch_start_time !== undefined && object.current_epoch_start_time !== null) {
            message.currentEpochStartTime = fromTimestamp(Timestamp.fromAmino(object.current_epoch_start_time));
        }
        if (object.current_epoch_height !== undefined && object.current_epoch_height !== null) {
            message.currentEpochHeight = Long.fromString(object.current_epoch_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.genesis_time = message.genesisTime ? Timestamp.toAmino(toTimestamp(message.genesisTime)) : undefined;
        obj.epoch_duration = message.epochDuration ? Duration.toAmino(message.epochDuration) : undefined;
        obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
        obj.current_epoch_start_time = message.currentEpochStartTime ? Timestamp.toAmino(toTimestamp(message.currentEpochStartTime)) : undefined;
        obj.current_epoch_height = message.currentEpochHeight ? message.currentEpochHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Epoch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Epoch.decode(message.value);
    },
    toProto(message) {
        return Epoch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.epoch.Epoch",
            value: Epoch.encode(message).finish()
        };
    }
};
