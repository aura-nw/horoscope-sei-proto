import { Timestamp } from "../google/protobuf/timestamp";
import { Duration } from "../google/protobuf/duration";
import { Long, toTimestamp, toDuration, fromTimestamp, fromDuration, isSet, fromJsonTimestamp } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Epoch {
  genesisTime: Date;
  epochDuration: string;
  currentEpoch: Long;
  currentEpochStartTime: Date;
  currentEpochHeight: Long;
}
export interface EpochProtoMsg {
  typeUrl: "/seiprotocol.seichain.epoch.Epoch";
  value: Uint8Array;
}
export interface EpochAmino {
  genesis_time?: string;
  epoch_duration?: string;
  current_epoch?: string;
  current_epoch_start_time?: string;
  current_epoch_height?: string;
}
export interface EpochAminoMsg {
  type: "/seiprotocol.seichain.epoch.Epoch";
  value: EpochAmino;
}
export interface EpochSDKType {
  genesis_time: Date;
  epoch_duration: string;
  current_epoch: Long;
  current_epoch_start_time: Date;
  current_epoch_height: Long;
}
function createBaseEpoch(): Epoch {
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
  encode(message: Epoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Epoch {
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
          message.currentEpoch = (reader.uint64() as Long);
          break;
        case 4:
          message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.currentEpochHeight = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Epoch {
    return {
      genesisTime: isSet(object.genesisTime) ? fromJsonTimestamp(object.genesisTime) : undefined,
      epochDuration: isSet(object.epochDuration) ? String(object.epochDuration) : undefined,
      currentEpoch: isSet(object.currentEpoch) ? Long.fromValue(object.currentEpoch) : Long.UZERO,
      currentEpochStartTime: isSet(object.currentEpochStartTime) ? fromJsonTimestamp(object.currentEpochStartTime) : undefined,
      currentEpochHeight: isSet(object.currentEpochHeight) ? Long.fromValue(object.currentEpochHeight) : Long.ZERO
    };
  },
  toJSON(message: Epoch): unknown {
    const obj: any = {};
    message.genesisTime !== undefined && (obj.genesisTime = message.genesisTime.toISOString());
    message.epochDuration !== undefined && (obj.epochDuration = message.epochDuration);
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.UZERO).toString());
    message.currentEpochStartTime !== undefined && (obj.currentEpochStartTime = message.currentEpochStartTime.toISOString());
    message.currentEpochHeight !== undefined && (obj.currentEpochHeight = (message.currentEpochHeight || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<Epoch>): Epoch {
    const message = createBaseEpoch();
    message.genesisTime = object.genesisTime ?? undefined;
    message.epochDuration = object.epochDuration ?? undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.UZERO;
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.currentEpochHeight = object.currentEpochHeight !== undefined && object.currentEpochHeight !== null ? Long.fromValue(object.currentEpochHeight) : Long.ZERO;
    return message;
  },
  fromAmino(object: EpochAmino): Epoch {
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
  toAmino(message: Epoch): EpochAmino {
    const obj: any = {};
    obj.genesis_time = message.genesisTime ? Timestamp.toAmino(toTimestamp(message.genesisTime)) : undefined;
    obj.epoch_duration = message.epochDuration ? Duration.toAmino(message.epochDuration) : undefined;
    obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
    obj.current_epoch_start_time = message.currentEpochStartTime ? Timestamp.toAmino(toTimestamp(message.currentEpochStartTime)) : undefined;
    obj.current_epoch_height = message.currentEpochHeight ? message.currentEpochHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochAminoMsg): Epoch {
    return Epoch.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochProtoMsg): Epoch {
    return Epoch.decode(message.value);
  },
  toProto(message: Epoch): Uint8Array {
    return Epoch.encode(message).finish();
  },
  toProtoMsg(message: Epoch): EpochProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.epoch.Epoch",
      value: Epoch.encode(message).finish()
    };
  }
};