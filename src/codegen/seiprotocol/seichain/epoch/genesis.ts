import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Epoch, EpochAmino, EpochSDKType } from "./epoch";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the epoch module's genesis state. */
export interface GenesisState {
  params: Params;
  epoch?: Epoch;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/seiprotocol.seichain.epoch.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the epoch module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  epoch?: EpochAmino;
}
export interface GenesisStateAminoMsg {
  type: "/seiprotocol.seichain.epoch.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the epoch module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  epoch?: EpochSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    epoch: undefined
  };
}
export const GenesisState = {
  typeUrl: "/seiprotocol.seichain.epoch.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.epoch !== undefined) {
      Epoch.encode(message.epoch, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.epoch = Epoch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      epoch: isSet(object.epoch) ? Epoch.fromJSON(object.epoch) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.epoch !== undefined && (obj.epoch = message.epoch ? Epoch.toJSON(message.epoch) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Epoch.fromPartial(object.epoch) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = Epoch.fromAmino(object.epoch);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.epoch = message.epoch ? Epoch.toAmino(message.epoch) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.epoch.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};