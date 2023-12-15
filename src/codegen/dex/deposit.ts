import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../helpers";
export interface DepositInfoEntry {
  creator: string;
  denom: string;
  amount: string;
}
export interface DepositInfoEntryProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.DepositInfoEntry";
  value: Uint8Array;
}
export interface DepositInfoEntryAmino {
  creator?: string;
  denom?: string;
  amount?: string;
}
export interface DepositInfoEntryAminoMsg {
  type: "/seiprotocol.seichain.dex.DepositInfoEntry";
  value: DepositInfoEntryAmino;
}
export interface DepositInfoEntrySDKType {
  creator: string;
  denom: string;
  amount: string;
}
function createBaseDepositInfoEntry(): DepositInfoEntry {
  return {
    creator: "",
    denom: "",
    amount: ""
  };
}
export const DepositInfoEntry = {
  typeUrl: "/seiprotocol.seichain.dex.DepositInfoEntry",
  encode(message: DepositInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DepositInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositInfoEntry {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: DepositInfoEntry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<DepositInfoEntry>): DepositInfoEntry {
    const message = createBaseDepositInfoEntry();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DepositInfoEntryAmino): DepositInfoEntry {
    const message = createBaseDepositInfoEntry();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: DepositInfoEntry): DepositInfoEntryAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: DepositInfoEntryAminoMsg): DepositInfoEntry {
    return DepositInfoEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositInfoEntryProtoMsg): DepositInfoEntry {
    return DepositInfoEntry.decode(message.value);
  },
  toProto(message: DepositInfoEntry): Uint8Array {
    return DepositInfoEntry.encode(message).finish();
  },
  toProtoMsg(message: DepositInfoEntry): DepositInfoEntryProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.DepositInfoEntry",
      value: DepositInfoEntry.encode(message).finish()
    };
  }
};