import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, toDuration, fromDuration, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ValidatorSigningInfoLegacyMissedHeights {
  address: string;
  /** Height at which validator was first a candidate OR was unjailed */
  startHeight: Long;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailedUntil: Date;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned: boolean;
  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missedBlocksCounter: Long;
}
export interface ValidatorSigningInfoLegacyMissedHeightsProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfoLegacyMissedHeights";
  value: Uint8Array;
}
export interface ValidatorSigningInfoLegacyMissedHeightsAmino {
  address?: string;
  /** Height at which validator was first a candidate OR was unjailed */
  start_height?: string;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailed_until?: string;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned?: boolean;
  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missed_blocks_counter?: string;
}
export interface ValidatorSigningInfoLegacyMissedHeightsAminoMsg {
  type: "cosmos-sdk/ValidatorSigningInfoLegacyMissedHeights";
  value: ValidatorSigningInfoLegacyMissedHeightsAmino;
}
export interface ValidatorSigningInfoLegacyMissedHeightsSDKType {
  address: string;
  start_height: Long;
  jailed_until: Date;
  tombstoned: boolean;
  missed_blocks_counter: Long;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
  address: string;
  /** Height at which validator was first a candidate OR was unjailed */
  startHeight: Long;
  /**
   * Index which is incremented each time the validator was a bonded
   * in a block and may have signed a precommit or not. This in conjunction with the
   * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
   */
  indexOffset: Long;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailedUntil: Date;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned: boolean;
  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missedBlocksCounter: Long;
}
export interface ValidatorSigningInfoProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo";
  value: Uint8Array;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoAmino {
  address?: string;
  /** Height at which validator was first a candidate OR was unjailed */
  start_height?: string;
  /**
   * Index which is incremented each time the validator was a bonded
   * in a block and may have signed a precommit or not. This in conjunction with the
   * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
   */
  index_offset?: string;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailed_until?: string;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned?: boolean;
  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missed_blocks_counter?: string;
}
export interface ValidatorSigningInfoAminoMsg {
  type: "cosmos-sdk/ValidatorSigningInfo";
  value: ValidatorSigningInfoAmino;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoSDKType {
  address: string;
  start_height: Long;
  index_offset: Long;
  jailed_until: Date;
  tombstoned: boolean;
  missed_blocks_counter: Long;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArrayLegacyMissedHeights {
  address: string;
  /** Array of contains the heights when the validator missed the block */
  missedHeights: Long[];
}
export interface ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights";
  value: Uint8Array;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArrayLegacyMissedHeightsAmino {
  address?: string;
  /** Array of contains the heights when the validator missed the block */
  missed_heights?: string[];
}
export interface ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg {
  type: "cosmos-sdk/ValidatorMissedBlockArrayLegacyMissedHeights";
  value: ValidatorMissedBlockArrayLegacyMissedHeightsAmino;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArrayLegacyMissedHeightsSDKType {
  address: string;
  missed_heights: Long[];
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArray {
  address: string;
  /** store this in case window size changes but doesn't affect number of bit groups */
  windowSize: Long;
  /** Array of contains the missed block bits packed into uint64s */
  missedBlocks: Long[];
}
export interface ValidatorMissedBlockArrayProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArray";
  value: Uint8Array;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArrayAmino {
  address?: string;
  /** store this in case window size changes but doesn't affect number of bit groups */
  window_size?: string;
  /** Array of contains the missed block bits packed into uint64s */
  missed_blocks?: string[];
}
export interface ValidatorMissedBlockArrayAminoMsg {
  type: "cosmos-sdk/ValidatorMissedBlockArray";
  value: ValidatorMissedBlockArrayAmino;
}
/** Stores a sliding window of the last `signed_blocks_window` blocks indicating whether the validator missed the block */
export interface ValidatorMissedBlockArraySDKType {
  address: string;
  window_size: Long;
  missed_blocks: Long[];
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
  signedBlocksWindow: Long;
  minSignedPerWindow: Uint8Array;
  downtimeJailDuration: string;
  slashFractionDoubleSign: Uint8Array;
  slashFractionDowntime: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.Params";
  value: Uint8Array;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsAmino {
  signed_blocks_window?: string;
  min_signed_per_window?: string;
  downtime_jail_duration?: string;
  slash_fraction_double_sign?: string;
  slash_fraction_downtime?: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsSDKType {
  signed_blocks_window: Long;
  min_signed_per_window: Uint8Array;
  downtime_jail_duration: string;
  slash_fraction_double_sign: Uint8Array;
  slash_fraction_downtime: Uint8Array;
}
function createBaseValidatorSigningInfoLegacyMissedHeights(): ValidatorSigningInfoLegacyMissedHeights {
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
  encode(message: ValidatorSigningInfoLegacyMissedHeights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfoLegacyMissedHeights {
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
          message.startHeight = (reader.int64() as Long);
          break;
        case 3:
          message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tombstoned = reader.bool();
          break;
        case 5:
          message.missedBlocksCounter = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSigningInfoLegacyMissedHeights {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      startHeight: isSet(object.startHeight) ? Long.fromValue(object.startHeight) : Long.ZERO,
      jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      missedBlocksCounter: isSet(object.missedBlocksCounter) ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO
    };
  },
  toJSON(message: ValidatorSigningInfoLegacyMissedHeights): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.startHeight !== undefined && (obj.startHeight = (message.startHeight || Long.ZERO).toString());
    message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.missedBlocksCounter !== undefined && (obj.missedBlocksCounter = (message.missedBlocksCounter || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ValidatorSigningInfoLegacyMissedHeights>): ValidatorSigningInfoLegacyMissedHeights {
    const message = createBaseValidatorSigningInfoLegacyMissedHeights();
    message.address = object.address ?? "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? Long.fromValue(object.startHeight) : Long.ZERO;
    message.jailedUntil = object.jailedUntil ?? undefined;
    message.tombstoned = object.tombstoned ?? false;
    message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO;
    return message;
  },
  fromAmino(object: ValidatorSigningInfoLegacyMissedHeightsAmino): ValidatorSigningInfoLegacyMissedHeights {
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
  toAmino(message: ValidatorSigningInfoLegacyMissedHeights): ValidatorSigningInfoLegacyMissedHeightsAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
    obj.jailed_until = message.jailedUntil ? Timestamp.toAmino(toTimestamp(message.jailedUntil)) : undefined;
    obj.tombstoned = message.tombstoned;
    obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSigningInfoLegacyMissedHeightsAminoMsg): ValidatorSigningInfoLegacyMissedHeights {
    return ValidatorSigningInfoLegacyMissedHeights.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSigningInfoLegacyMissedHeights): ValidatorSigningInfoLegacyMissedHeightsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSigningInfoLegacyMissedHeights",
      value: ValidatorSigningInfoLegacyMissedHeights.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSigningInfoLegacyMissedHeightsProtoMsg): ValidatorSigningInfoLegacyMissedHeights {
    return ValidatorSigningInfoLegacyMissedHeights.decode(message.value);
  },
  toProto(message: ValidatorSigningInfoLegacyMissedHeights): Uint8Array {
    return ValidatorSigningInfoLegacyMissedHeights.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSigningInfoLegacyMissedHeights): ValidatorSigningInfoLegacyMissedHeightsProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfoLegacyMissedHeights",
      value: ValidatorSigningInfoLegacyMissedHeights.encode(message).finish()
    };
  }
};
function createBaseValidatorSigningInfo(): ValidatorSigningInfo {
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
  encode(message: ValidatorSigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo {
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
          message.startHeight = (reader.int64() as Long);
          break;
        case 3:
          message.indexOffset = (reader.int64() as Long);
          break;
        case 4:
          message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSigningInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      startHeight: isSet(object.startHeight) ? Long.fromValue(object.startHeight) : Long.ZERO,
      indexOffset: isSet(object.indexOffset) ? Long.fromValue(object.indexOffset) : Long.ZERO,
      jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      missedBlocksCounter: isSet(object.missedBlocksCounter) ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO
    };
  },
  toJSON(message: ValidatorSigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.startHeight !== undefined && (obj.startHeight = (message.startHeight || Long.ZERO).toString());
    message.indexOffset !== undefined && (obj.indexOffset = (message.indexOffset || Long.ZERO).toString());
    message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.missedBlocksCounter !== undefined && (obj.missedBlocksCounter = (message.missedBlocksCounter || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ValidatorSigningInfo>): ValidatorSigningInfo {
    const message = createBaseValidatorSigningInfo();
    message.address = object.address ?? "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? Long.fromValue(object.startHeight) : Long.ZERO;
    message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? Long.fromValue(object.indexOffset) : Long.ZERO;
    message.jailedUntil = object.jailedUntil ?? undefined;
    message.tombstoned = object.tombstoned ?? false;
    message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO;
    return message;
  },
  fromAmino(object: ValidatorSigningInfoAmino): ValidatorSigningInfo {
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
  toAmino(message: ValidatorSigningInfo): ValidatorSigningInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
    obj.index_offset = message.indexOffset ? message.indexOffset.toString() : undefined;
    obj.jailed_until = message.jailedUntil ? Timestamp.toAmino(toTimestamp(message.jailedUntil)) : undefined;
    obj.tombstoned = message.tombstoned;
    obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSigningInfoAminoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSigningInfo",
      value: ValidatorSigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSigningInfoProtoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.decode(message.value);
  },
  toProto(message: ValidatorSigningInfo): Uint8Array {
    return ValidatorSigningInfo.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
      value: ValidatorSigningInfo.encode(message).finish()
    };
  }
};
function createBaseValidatorMissedBlockArrayLegacyMissedHeights(): ValidatorMissedBlockArrayLegacyMissedHeights {
  return {
    address: "",
    missedHeights: []
  };
}
export const ValidatorMissedBlockArrayLegacyMissedHeights = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights",
  encode(message: ValidatorMissedBlockArrayLegacyMissedHeights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlockArrayLegacyMissedHeights {
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
              message.missedHeights.push((reader.int64() as Long));
            }
          } else {
            message.missedHeights.push((reader.int64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorMissedBlockArrayLegacyMissedHeights {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      missedHeights: Array.isArray(object?.missedHeights) ? object.missedHeights.map((e: any) => Long.fromValue(e)) : []
    };
  },
  toJSON(message: ValidatorMissedBlockArrayLegacyMissedHeights): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.missedHeights) {
      obj.missedHeights = message.missedHeights.map(e => (e || Long.ZERO).toString());
    } else {
      obj.missedHeights = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorMissedBlockArrayLegacyMissedHeights>): ValidatorMissedBlockArrayLegacyMissedHeights {
    const message = createBaseValidatorMissedBlockArrayLegacyMissedHeights();
    message.address = object.address ?? "";
    message.missedHeights = object.missedHeights?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorMissedBlockArrayLegacyMissedHeightsAmino): ValidatorMissedBlockArrayLegacyMissedHeights {
    const message = createBaseValidatorMissedBlockArrayLegacyMissedHeights();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.missedHeights = object.missed_heights?.map(e => Long.fromString(e)) || [];
    return message;
  },
  toAmino(message: ValidatorMissedBlockArrayLegacyMissedHeights): ValidatorMissedBlockArrayLegacyMissedHeightsAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.missedHeights) {
      obj.missed_heights = message.missedHeights.map(e => e);
    } else {
      obj.missed_heights = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg): ValidatorMissedBlockArrayLegacyMissedHeights {
    return ValidatorMissedBlockArrayLegacyMissedHeights.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorMissedBlockArrayLegacyMissedHeights): ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorMissedBlockArrayLegacyMissedHeights",
      value: ValidatorMissedBlockArrayLegacyMissedHeights.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg): ValidatorMissedBlockArrayLegacyMissedHeights {
    return ValidatorMissedBlockArrayLegacyMissedHeights.decode(message.value);
  },
  toProto(message: ValidatorMissedBlockArrayLegacyMissedHeights): Uint8Array {
    return ValidatorMissedBlockArrayLegacyMissedHeights.encode(message).finish();
  },
  toProtoMsg(message: ValidatorMissedBlockArrayLegacyMissedHeights): ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights",
      value: ValidatorMissedBlockArrayLegacyMissedHeights.encode(message).finish()
    };
  }
};
function createBaseValidatorMissedBlockArray(): ValidatorMissedBlockArray {
  return {
    address: "",
    windowSize: Long.ZERO,
    missedBlocks: []
  };
}
export const ValidatorMissedBlockArray = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArray",
  encode(message: ValidatorMissedBlockArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlockArray {
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
          message.windowSize = (reader.int64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.missedBlocks.push((reader.uint64() as Long));
            }
          } else {
            message.missedBlocks.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorMissedBlockArray {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      windowSize: isSet(object.windowSize) ? Long.fromValue(object.windowSize) : Long.ZERO,
      missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e: any) => Long.fromValue(e)) : []
    };
  },
  toJSON(message: ValidatorMissedBlockArray): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.windowSize !== undefined && (obj.windowSize = (message.windowSize || Long.ZERO).toString());
    if (message.missedBlocks) {
      obj.missedBlocks = message.missedBlocks.map(e => (e || Long.UZERO).toString());
    } else {
      obj.missedBlocks = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorMissedBlockArray>): ValidatorMissedBlockArray {
    const message = createBaseValidatorMissedBlockArray();
    message.address = object.address ?? "";
    message.windowSize = object.windowSize !== undefined && object.windowSize !== null ? Long.fromValue(object.windowSize) : Long.ZERO;
    message.missedBlocks = object.missedBlocks?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorMissedBlockArrayAmino): ValidatorMissedBlockArray {
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
  toAmino(message: ValidatorMissedBlockArray): ValidatorMissedBlockArrayAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.window_size = message.windowSize ? message.windowSize.toString() : undefined;
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e);
    } else {
      obj.missed_blocks = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorMissedBlockArrayAminoMsg): ValidatorMissedBlockArray {
    return ValidatorMissedBlockArray.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorMissedBlockArray): ValidatorMissedBlockArrayAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorMissedBlockArray",
      value: ValidatorMissedBlockArray.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorMissedBlockArrayProtoMsg): ValidatorMissedBlockArray {
    return ValidatorMissedBlockArray.decode(message.value);
  },
  toProto(message: ValidatorMissedBlockArray): Uint8Array {
    return ValidatorMissedBlockArray.encode(message).finish();
  },
  toProtoMsg(message: ValidatorMissedBlockArray): ValidatorMissedBlockArrayProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlockArray",
      value: ValidatorMissedBlockArray.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedBlocksWindow = (reader.int64() as Long);
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
  fromJSON(object: any): Params {
    return {
      signedBlocksWindow: isSet(object.signedBlocksWindow) ? Long.fromValue(object.signedBlocksWindow) : Long.ZERO,
      minSignedPerWindow: isSet(object.minSignedPerWindow) ? bytesFromBase64(object.minSignedPerWindow) : new Uint8Array(),
      downtimeJailDuration: isSet(object.downtimeJailDuration) ? String(object.downtimeJailDuration) : undefined,
      slashFractionDoubleSign: isSet(object.slashFractionDoubleSign) ? bytesFromBase64(object.slashFractionDoubleSign) : new Uint8Array(),
      slashFractionDowntime: isSet(object.slashFractionDowntime) ? bytesFromBase64(object.slashFractionDowntime) : new Uint8Array()
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.signedBlocksWindow !== undefined && (obj.signedBlocksWindow = (message.signedBlocksWindow || Long.ZERO).toString());
    message.minSignedPerWindow !== undefined && (obj.minSignedPerWindow = base64FromBytes(message.minSignedPerWindow !== undefined ? message.minSignedPerWindow : new Uint8Array()));
    message.downtimeJailDuration !== undefined && (obj.downtimeJailDuration = message.downtimeJailDuration);
    message.slashFractionDoubleSign !== undefined && (obj.slashFractionDoubleSign = base64FromBytes(message.slashFractionDoubleSign !== undefined ? message.slashFractionDoubleSign : new Uint8Array()));
    message.slashFractionDowntime !== undefined && (obj.slashFractionDowntime = base64FromBytes(message.slashFractionDowntime !== undefined ? message.slashFractionDowntime : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? Long.fromValue(object.signedBlocksWindow) : Long.ZERO;
    message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
    message.downtimeJailDuration = object.downtimeJailDuration ?? undefined;
    message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
    message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
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
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.signed_blocks_window = message.signedBlocksWindow ? message.signedBlocksWindow.toString() : undefined;
    obj.min_signed_per_window = message.minSignedPerWindow ? base64FromBytes(message.minSignedPerWindow) : undefined;
    obj.downtime_jail_duration = message.downtimeJailDuration ? Duration.toAmino(message.downtimeJailDuration) : undefined;
    obj.slash_fraction_double_sign = message.slashFractionDoubleSign ? base64FromBytes(message.slashFractionDoubleSign) : undefined;
    obj.slash_fraction_downtime = message.slashFractionDowntime ? base64FromBytes(message.slashFractionDowntime) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};