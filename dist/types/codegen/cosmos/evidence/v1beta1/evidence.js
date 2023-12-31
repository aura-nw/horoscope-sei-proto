import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseEquivocation() {
    return {
        height: Long.ZERO,
        time: new Date(),
        power: Long.ZERO,
        consensusAddress: ""
    };
}
export const Equivocation = {
    typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (!message.power.isZero()) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEquivocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                case 4:
                    message.consensusAddress = reader.string();
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
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO,
            consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
        message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEquivocation();
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.time = object.time ?? undefined;
        message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
        message.consensusAddress = object.consensusAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEquivocation();
        if (object.height !== undefined && object.height !== null) {
            message.height = Long.fromString(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Long.fromString(object.power);
        }
        if (object.consensus_address !== undefined && object.consensus_address !== null) {
            message.consensusAddress = object.consensus_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        obj.consensus_address = message.consensusAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return Equivocation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Equivocation",
            value: Equivocation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Equivocation.decode(message.value);
    },
    toProto(message) {
        return Equivocation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
            value: Equivocation.encode(message).finish()
        };
    }
};
