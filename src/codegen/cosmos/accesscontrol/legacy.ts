import { AccessOperation, AccessOperationAmino, AccessOperationSDKType } from "./accesscontrol";
import { AccessOperationSelectorType, accessOperationSelectorTypeFromJSON, accessOperationSelectorTypeToJSON } from "./constants";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface LegacyAccessOperationWithSelector {
  operation?: AccessOperation;
  selectorType: AccessOperationSelectorType;
  selector: string;
}
export interface LegacyAccessOperationWithSelectorProtoMsg {
  typeUrl: "/cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector";
  value: Uint8Array;
}
export interface LegacyAccessOperationWithSelectorAmino {
  operation?: AccessOperationAmino;
  selector_type?: AccessOperationSelectorType;
  selector?: string;
}
export interface LegacyAccessOperationWithSelectorAminoMsg {
  type: "cosmos-sdk/LegacyAccessOperationWithSelector";
  value: LegacyAccessOperationWithSelectorAmino;
}
export interface LegacyAccessOperationWithSelectorSDKType {
  operation?: AccessOperationSDKType;
  selector_type: AccessOperationSelectorType;
  selector: string;
}
export interface LegacyWasmDependencyMapping {
  enabled: boolean;
  accessOps: LegacyAccessOperationWithSelector[];
  resetReason: string;
  contractAddress: string;
}
export interface LegacyWasmDependencyMappingProtoMsg {
  typeUrl: "/cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping";
  value: Uint8Array;
}
export interface LegacyWasmDependencyMappingAmino {
  enabled?: boolean;
  access_ops?: LegacyAccessOperationWithSelectorAmino[];
  reset_reason?: string;
  contract_address?: string;
}
export interface LegacyWasmDependencyMappingAminoMsg {
  type: "cosmos-sdk/LegacyWasmDependencyMapping";
  value: LegacyWasmDependencyMappingAmino;
}
export interface LegacyWasmDependencyMappingSDKType {
  enabled: boolean;
  access_ops: LegacyAccessOperationWithSelectorSDKType[];
  reset_reason: string;
  contract_address: string;
}
function createBaseLegacyAccessOperationWithSelector(): LegacyAccessOperationWithSelector {
  return {
    operation: undefined,
    selectorType: 0,
    selector: ""
  };
}
export const LegacyAccessOperationWithSelector = {
  typeUrl: "/cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector",
  encode(message: LegacyAccessOperationWithSelector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operation !== undefined) {
      AccessOperation.encode(message.operation, writer.uint32(10).fork()).ldelim();
    }
    if (message.selectorType !== 0) {
      writer.uint32(16).int32(message.selectorType);
    }
    if (message.selector !== "") {
      writer.uint32(26).string(message.selector);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyAccessOperationWithSelector {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAccessOperationWithSelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = AccessOperation.decode(reader, reader.uint32());
          break;
        case 2:
          message.selectorType = (reader.int32() as any);
          break;
        case 3:
          message.selector = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyAccessOperationWithSelector {
    return {
      operation: isSet(object.operation) ? AccessOperation.fromJSON(object.operation) : undefined,
      selectorType: isSet(object.selectorType) ? accessOperationSelectorTypeFromJSON(object.selectorType) : -1,
      selector: isSet(object.selector) ? String(object.selector) : ""
    };
  },
  toJSON(message: LegacyAccessOperationWithSelector): unknown {
    const obj: any = {};
    message.operation !== undefined && (obj.operation = message.operation ? AccessOperation.toJSON(message.operation) : undefined);
    message.selectorType !== undefined && (obj.selectorType = accessOperationSelectorTypeToJSON(message.selectorType));
    message.selector !== undefined && (obj.selector = message.selector);
    return obj;
  },
  fromPartial(object: Partial<LegacyAccessOperationWithSelector>): LegacyAccessOperationWithSelector {
    const message = createBaseLegacyAccessOperationWithSelector();
    message.operation = object.operation !== undefined && object.operation !== null ? AccessOperation.fromPartial(object.operation) : undefined;
    message.selectorType = object.selectorType ?? 0;
    message.selector = object.selector ?? "";
    return message;
  },
  fromAmino(object: LegacyAccessOperationWithSelectorAmino): LegacyAccessOperationWithSelector {
    const message = createBaseLegacyAccessOperationWithSelector();
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = AccessOperation.fromAmino(object.operation);
    }
    if (object.selector_type !== undefined && object.selector_type !== null) {
      message.selectorType = accessOperationSelectorTypeFromJSON(object.selector_type);
    }
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    return message;
  },
  toAmino(message: LegacyAccessOperationWithSelector): LegacyAccessOperationWithSelectorAmino {
    const obj: any = {};
    obj.operation = message.operation ? AccessOperation.toAmino(message.operation) : undefined;
    obj.selector_type = accessOperationSelectorTypeToJSON(message.selectorType);
    obj.selector = message.selector;
    return obj;
  },
  fromAminoMsg(object: LegacyAccessOperationWithSelectorAminoMsg): LegacyAccessOperationWithSelector {
    return LegacyAccessOperationWithSelector.fromAmino(object.value);
  },
  toAminoMsg(message: LegacyAccessOperationWithSelector): LegacyAccessOperationWithSelectorAminoMsg {
    return {
      type: "cosmos-sdk/LegacyAccessOperationWithSelector",
      value: LegacyAccessOperationWithSelector.toAmino(message)
    };
  },
  fromProtoMsg(message: LegacyAccessOperationWithSelectorProtoMsg): LegacyAccessOperationWithSelector {
    return LegacyAccessOperationWithSelector.decode(message.value);
  },
  toProto(message: LegacyAccessOperationWithSelector): Uint8Array {
    return LegacyAccessOperationWithSelector.encode(message).finish();
  },
  toProtoMsg(message: LegacyAccessOperationWithSelector): LegacyAccessOperationWithSelectorProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector",
      value: LegacyAccessOperationWithSelector.encode(message).finish()
    };
  }
};
function createBaseLegacyWasmDependencyMapping(): LegacyWasmDependencyMapping {
  return {
    enabled: false,
    accessOps: [],
    resetReason: "",
    contractAddress: ""
  };
}
export const LegacyWasmDependencyMapping = {
  typeUrl: "/cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping",
  encode(message: LegacyWasmDependencyMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    for (const v of message.accessOps) {
      LegacyAccessOperationWithSelector.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.resetReason !== "") {
      writer.uint32(26).string(message.resetReason);
    }
    if (message.contractAddress !== "") {
      writer.uint32(34).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyWasmDependencyMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyWasmDependencyMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.accessOps.push(LegacyAccessOperationWithSelector.decode(reader, reader.uint32()));
          break;
        case 3:
          message.resetReason = reader.string();
          break;
        case 4:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyWasmDependencyMapping {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      accessOps: Array.isArray(object?.accessOps) ? object.accessOps.map((e: any) => LegacyAccessOperationWithSelector.fromJSON(e)) : [],
      resetReason: isSet(object.resetReason) ? String(object.resetReason) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: LegacyWasmDependencyMapping): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.accessOps) {
      obj.accessOps = message.accessOps.map(e => e ? LegacyAccessOperationWithSelector.toJSON(e) : undefined);
    } else {
      obj.accessOps = [];
    }
    message.resetReason !== undefined && (obj.resetReason = message.resetReason);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<LegacyWasmDependencyMapping>): LegacyWasmDependencyMapping {
    const message = createBaseLegacyWasmDependencyMapping();
    message.enabled = object.enabled ?? false;
    message.accessOps = object.accessOps?.map(e => LegacyAccessOperationWithSelector.fromPartial(e)) || [];
    message.resetReason = object.resetReason ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: LegacyWasmDependencyMappingAmino): LegacyWasmDependencyMapping {
    const message = createBaseLegacyWasmDependencyMapping();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    message.accessOps = object.access_ops?.map(e => LegacyAccessOperationWithSelector.fromAmino(e)) || [];
    if (object.reset_reason !== undefined && object.reset_reason !== null) {
      message.resetReason = object.reset_reason;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: LegacyWasmDependencyMapping): LegacyWasmDependencyMappingAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    if (message.accessOps) {
      obj.access_ops = message.accessOps.map(e => e ? LegacyAccessOperationWithSelector.toAmino(e) : undefined);
    } else {
      obj.access_ops = [];
    }
    obj.reset_reason = message.resetReason;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: LegacyWasmDependencyMappingAminoMsg): LegacyWasmDependencyMapping {
    return LegacyWasmDependencyMapping.fromAmino(object.value);
  },
  toAminoMsg(message: LegacyWasmDependencyMapping): LegacyWasmDependencyMappingAminoMsg {
    return {
      type: "cosmos-sdk/LegacyWasmDependencyMapping",
      value: LegacyWasmDependencyMapping.toAmino(message)
    };
  },
  fromProtoMsg(message: LegacyWasmDependencyMappingProtoMsg): LegacyWasmDependencyMapping {
    return LegacyWasmDependencyMapping.decode(message.value);
  },
  toProto(message: LegacyWasmDependencyMapping): Uint8Array {
    return LegacyWasmDependencyMapping.encode(message).finish();
  },
  toProtoMsg(message: LegacyWasmDependencyMapping): LegacyWasmDependencyMappingProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping",
      value: LegacyWasmDependencyMapping.encode(message).finish()
    };
  }
};