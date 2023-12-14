import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ContractInfo {
  codeId: Long;
  contractAddr: string;
  needHook: boolean;
  needOrderMatching: boolean;
  dependencies: ContractDependencyInfo[];
  numIncomingDependencies: Long;
}
export interface ContractInfoProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.ContractInfo";
  value: Uint8Array;
}
export interface ContractInfoAmino {
  codeId?: string;
  contractAddr?: string;
  needHook?: boolean;
  needOrderMatching?: boolean;
  dependencies?: ContractDependencyInfoAmino[];
  numIncomingDependencies?: string;
}
export interface ContractInfoAminoMsg {
  type: "/seiprotocol.seichain.dex.ContractInfo";
  value: ContractInfoAmino;
}
export interface ContractInfoSDKType {
  codeId: Long;
  contractAddr: string;
  needHook: boolean;
  needOrderMatching: boolean;
  dependencies: ContractDependencyInfoSDKType[];
  numIncomingDependencies: Long;
}
export interface ContractInfoV2 {
  codeId: Long;
  contractAddr: string;
  needHook: boolean;
  needOrderMatching: boolean;
  dependencies: ContractDependencyInfo[];
  numIncomingDependencies: Long;
  creator: string;
  rentBalance: Long;
  suspended: boolean;
  suspensionReason: string;
}
export interface ContractInfoV2ProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.ContractInfoV2";
  value: Uint8Array;
}
export interface ContractInfoV2Amino {
  codeId?: string;
  contractAddr?: string;
  needHook?: boolean;
  needOrderMatching?: boolean;
  dependencies?: ContractDependencyInfoAmino[];
  numIncomingDependencies?: string;
  creator?: string;
  rentBalance?: string;
  suspended?: boolean;
  suspensionReason?: string;
}
export interface ContractInfoV2AminoMsg {
  type: "/seiprotocol.seichain.dex.ContractInfoV2";
  value: ContractInfoV2Amino;
}
export interface ContractInfoV2SDKType {
  codeId: Long;
  contractAddr: string;
  needHook: boolean;
  needOrderMatching: boolean;
  dependencies: ContractDependencyInfoSDKType[];
  numIncomingDependencies: Long;
  creator: string;
  rentBalance: Long;
  suspended: boolean;
  suspensionReason: string;
}
/**
 * suppose A is first registered and depends on X, then B is added and depends on X,
 * and then C is added and depends on X, then A is the elder sibling to B and B is
 * the younger sibling to A, and B is the elder sibling to C and C is the younger to B
 */
export interface ContractDependencyInfo {
  dependency: string;
  immediateElderSibling: string;
  immediateYoungerSibling: string;
}
export interface ContractDependencyInfoProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.ContractDependencyInfo";
  value: Uint8Array;
}
/**
 * suppose A is first registered and depends on X, then B is added and depends on X,
 * and then C is added and depends on X, then A is the elder sibling to B and B is
 * the younger sibling to A, and B is the elder sibling to C and C is the younger to B
 */
export interface ContractDependencyInfoAmino {
  dependency?: string;
  immediateElderSibling?: string;
  immediateYoungerSibling?: string;
}
export interface ContractDependencyInfoAminoMsg {
  type: "/seiprotocol.seichain.dex.ContractDependencyInfo";
  value: ContractDependencyInfoAmino;
}
/**
 * suppose A is first registered and depends on X, then B is added and depends on X,
 * and then C is added and depends on X, then A is the elder sibling to B and B is
 * the younger sibling to A, and B is the elder sibling to C and C is the younger to B
 */
export interface ContractDependencyInfoSDKType {
  dependency: string;
  immediateElderSibling: string;
  immediateYoungerSibling: string;
}
export interface LegacyContractInfo {
  codeId: Long;
  contractAddr: string;
  needHook: boolean;
  needOrderMatching: boolean;
  dependentContractAddrs: string[];
}
export interface LegacyContractInfoProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.LegacyContractInfo";
  value: Uint8Array;
}
export interface LegacyContractInfoAmino {
  codeId?: string;
  contractAddr?: string;
  needHook?: boolean;
  needOrderMatching?: boolean;
  dependentContractAddrs?: string[];
}
export interface LegacyContractInfoAminoMsg {
  type: "/seiprotocol.seichain.dex.LegacyContractInfo";
  value: LegacyContractInfoAmino;
}
export interface LegacyContractInfoSDKType {
  codeId: Long;
  contractAddr: string;
  needHook: boolean;
  needOrderMatching: boolean;
  dependentContractAddrs: string[];
}
function createBaseContractInfo(): ContractInfo {
  return {
    codeId: Long.UZERO,
    contractAddr: "",
    needHook: false,
    needOrderMatching: false,
    dependencies: [],
    numIncomingDependencies: Long.ZERO
  };
}
export const ContractInfo = {
  typeUrl: "/seiprotocol.seichain.dex.ContractInfo",
  encode(message: ContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    if (message.needHook === true) {
      writer.uint32(24).bool(message.needHook);
    }
    if (message.needOrderMatching === true) {
      writer.uint32(32).bool(message.needOrderMatching);
    }
    for (const v of message.dependencies) {
      ContractDependencyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.numIncomingDependencies.isZero()) {
      writer.uint32(48).int64(message.numIncomingDependencies);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;
        case 2:
          message.contractAddr = reader.string();
          break;
        case 3:
          message.needHook = reader.bool();
          break;
        case 4:
          message.needOrderMatching = reader.bool();
          break;
        case 5:
          message.dependencies.push(ContractDependencyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.numIncomingDependencies = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractInfo {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
      needHook: isSet(object.needHook) ? Boolean(object.needHook) : false,
      needOrderMatching: isSet(object.needOrderMatching) ? Boolean(object.needOrderMatching) : false,
      dependencies: Array.isArray(object?.dependencies) ? object.dependencies.map((e: any) => ContractDependencyInfo.fromJSON(e)) : [],
      numIncomingDependencies: isSet(object.numIncomingDependencies) ? Long.fromValue(object.numIncomingDependencies) : Long.ZERO
    };
  },
  toJSON(message: ContractInfo): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
    message.needHook !== undefined && (obj.needHook = message.needHook);
    message.needOrderMatching !== undefined && (obj.needOrderMatching = message.needOrderMatching);
    if (message.dependencies) {
      obj.dependencies = message.dependencies.map(e => e ? ContractDependencyInfo.toJSON(e) : undefined);
    } else {
      obj.dependencies = [];
    }
    message.numIncomingDependencies !== undefined && (obj.numIncomingDependencies = (message.numIncomingDependencies || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.contractAddr = object.contractAddr ?? "";
    message.needHook = object.needHook ?? false;
    message.needOrderMatching = object.needOrderMatching ?? false;
    message.dependencies = object.dependencies?.map(e => ContractDependencyInfo.fromPartial(e)) || [];
    message.numIncomingDependencies = object.numIncomingDependencies !== undefined && object.numIncomingDependencies !== null ? Long.fromValue(object.numIncomingDependencies) : Long.ZERO;
    return message;
  },
  fromAmino(object: ContractInfoAmino): ContractInfo {
    const message = createBaseContractInfo();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromString(object.codeId);
    }
    if (object.contractAddr !== undefined && object.contractAddr !== null) {
      message.contractAddr = object.contractAddr;
    }
    if (object.needHook !== undefined && object.needHook !== null) {
      message.needHook = object.needHook;
    }
    if (object.needOrderMatching !== undefined && object.needOrderMatching !== null) {
      message.needOrderMatching = object.needOrderMatching;
    }
    message.dependencies = object.dependencies?.map(e => ContractDependencyInfo.fromAmino(e)) || [];
    if (object.numIncomingDependencies !== undefined && object.numIncomingDependencies !== null) {
      message.numIncomingDependencies = Long.fromString(object.numIncomingDependencies);
    }
    return message;
  },
  toAmino(message: ContractInfo): ContractInfoAmino {
    const obj: any = {};
    obj.codeId = message.codeId ? message.codeId.toString() : undefined;
    obj.contractAddr = message.contractAddr;
    obj.needHook = message.needHook;
    obj.needOrderMatching = message.needOrderMatching;
    if (message.dependencies) {
      obj.dependencies = message.dependencies.map(e => e ? ContractDependencyInfo.toAmino(e) : undefined);
    } else {
      obj.dependencies = [];
    }
    obj.numIncomingDependencies = message.numIncomingDependencies ? message.numIncomingDependencies.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractInfoAminoMsg): ContractInfo {
    return ContractInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractInfoProtoMsg): ContractInfo {
    return ContractInfo.decode(message.value);
  },
  toProto(message: ContractInfo): Uint8Array {
    return ContractInfo.encode(message).finish();
  },
  toProtoMsg(message: ContractInfo): ContractInfoProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.ContractInfo",
      value: ContractInfo.encode(message).finish()
    };
  }
};
function createBaseContractInfoV2(): ContractInfoV2 {
  return {
    codeId: Long.UZERO,
    contractAddr: "",
    needHook: false,
    needOrderMatching: false,
    dependencies: [],
    numIncomingDependencies: Long.ZERO,
    creator: "",
    rentBalance: Long.UZERO,
    suspended: false,
    suspensionReason: ""
  };
}
export const ContractInfoV2 = {
  typeUrl: "/seiprotocol.seichain.dex.ContractInfoV2",
  encode(message: ContractInfoV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    if (message.needHook === true) {
      writer.uint32(24).bool(message.needHook);
    }
    if (message.needOrderMatching === true) {
      writer.uint32(32).bool(message.needOrderMatching);
    }
    for (const v of message.dependencies) {
      ContractDependencyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.numIncomingDependencies.isZero()) {
      writer.uint32(48).int64(message.numIncomingDependencies);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    if (!message.rentBalance.isZero()) {
      writer.uint32(64).uint64(message.rentBalance);
    }
    if (message.suspended === true) {
      writer.uint32(72).bool(message.suspended);
    }
    if (message.suspensionReason !== "") {
      writer.uint32(82).string(message.suspensionReason);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfoV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;
        case 2:
          message.contractAddr = reader.string();
          break;
        case 3:
          message.needHook = reader.bool();
          break;
        case 4:
          message.needOrderMatching = reader.bool();
          break;
        case 5:
          message.dependencies.push(ContractDependencyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.numIncomingDependencies = (reader.int64() as Long);
          break;
        case 7:
          message.creator = reader.string();
          break;
        case 8:
          message.rentBalance = (reader.uint64() as Long);
          break;
        case 9:
          message.suspended = reader.bool();
          break;
        case 10:
          message.suspensionReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractInfoV2 {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
      needHook: isSet(object.needHook) ? Boolean(object.needHook) : false,
      needOrderMatching: isSet(object.needOrderMatching) ? Boolean(object.needOrderMatching) : false,
      dependencies: Array.isArray(object?.dependencies) ? object.dependencies.map((e: any) => ContractDependencyInfo.fromJSON(e)) : [],
      numIncomingDependencies: isSet(object.numIncomingDependencies) ? Long.fromValue(object.numIncomingDependencies) : Long.ZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      rentBalance: isSet(object.rentBalance) ? Long.fromValue(object.rentBalance) : Long.UZERO,
      suspended: isSet(object.suspended) ? Boolean(object.suspended) : false,
      suspensionReason: isSet(object.suspensionReason) ? String(object.suspensionReason) : ""
    };
  },
  toJSON(message: ContractInfoV2): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
    message.needHook !== undefined && (obj.needHook = message.needHook);
    message.needOrderMatching !== undefined && (obj.needOrderMatching = message.needOrderMatching);
    if (message.dependencies) {
      obj.dependencies = message.dependencies.map(e => e ? ContractDependencyInfo.toJSON(e) : undefined);
    } else {
      obj.dependencies = [];
    }
    message.numIncomingDependencies !== undefined && (obj.numIncomingDependencies = (message.numIncomingDependencies || Long.ZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.rentBalance !== undefined && (obj.rentBalance = (message.rentBalance || Long.UZERO).toString());
    message.suspended !== undefined && (obj.suspended = message.suspended);
    message.suspensionReason !== undefined && (obj.suspensionReason = message.suspensionReason);
    return obj;
  },
  fromPartial(object: Partial<ContractInfoV2>): ContractInfoV2 {
    const message = createBaseContractInfoV2();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.contractAddr = object.contractAddr ?? "";
    message.needHook = object.needHook ?? false;
    message.needOrderMatching = object.needOrderMatching ?? false;
    message.dependencies = object.dependencies?.map(e => ContractDependencyInfo.fromPartial(e)) || [];
    message.numIncomingDependencies = object.numIncomingDependencies !== undefined && object.numIncomingDependencies !== null ? Long.fromValue(object.numIncomingDependencies) : Long.ZERO;
    message.creator = object.creator ?? "";
    message.rentBalance = object.rentBalance !== undefined && object.rentBalance !== null ? Long.fromValue(object.rentBalance) : Long.UZERO;
    message.suspended = object.suspended ?? false;
    message.suspensionReason = object.suspensionReason ?? "";
    return message;
  },
  fromAmino(object: ContractInfoV2Amino): ContractInfoV2 {
    const message = createBaseContractInfoV2();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromString(object.codeId);
    }
    if (object.contractAddr !== undefined && object.contractAddr !== null) {
      message.contractAddr = object.contractAddr;
    }
    if (object.needHook !== undefined && object.needHook !== null) {
      message.needHook = object.needHook;
    }
    if (object.needOrderMatching !== undefined && object.needOrderMatching !== null) {
      message.needOrderMatching = object.needOrderMatching;
    }
    message.dependencies = object.dependencies?.map(e => ContractDependencyInfo.fromAmino(e)) || [];
    if (object.numIncomingDependencies !== undefined && object.numIncomingDependencies !== null) {
      message.numIncomingDependencies = Long.fromString(object.numIncomingDependencies);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.rentBalance !== undefined && object.rentBalance !== null) {
      message.rentBalance = Long.fromString(object.rentBalance);
    }
    if (object.suspended !== undefined && object.suspended !== null) {
      message.suspended = object.suspended;
    }
    if (object.suspensionReason !== undefined && object.suspensionReason !== null) {
      message.suspensionReason = object.suspensionReason;
    }
    return message;
  },
  toAmino(message: ContractInfoV2): ContractInfoV2Amino {
    const obj: any = {};
    obj.codeId = message.codeId ? message.codeId.toString() : undefined;
    obj.contractAddr = message.contractAddr;
    obj.needHook = message.needHook;
    obj.needOrderMatching = message.needOrderMatching;
    if (message.dependencies) {
      obj.dependencies = message.dependencies.map(e => e ? ContractDependencyInfo.toAmino(e) : undefined);
    } else {
      obj.dependencies = [];
    }
    obj.numIncomingDependencies = message.numIncomingDependencies ? message.numIncomingDependencies.toString() : undefined;
    obj.creator = message.creator;
    obj.rentBalance = message.rentBalance ? message.rentBalance.toString() : undefined;
    obj.suspended = message.suspended;
    obj.suspensionReason = message.suspensionReason;
    return obj;
  },
  fromAminoMsg(object: ContractInfoV2AminoMsg): ContractInfoV2 {
    return ContractInfoV2.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractInfoV2ProtoMsg): ContractInfoV2 {
    return ContractInfoV2.decode(message.value);
  },
  toProto(message: ContractInfoV2): Uint8Array {
    return ContractInfoV2.encode(message).finish();
  },
  toProtoMsg(message: ContractInfoV2): ContractInfoV2ProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.ContractInfoV2",
      value: ContractInfoV2.encode(message).finish()
    };
  }
};
function createBaseContractDependencyInfo(): ContractDependencyInfo {
  return {
    dependency: "",
    immediateElderSibling: "",
    immediateYoungerSibling: ""
  };
}
export const ContractDependencyInfo = {
  typeUrl: "/seiprotocol.seichain.dex.ContractDependencyInfo",
  encode(message: ContractDependencyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dependency !== "") {
      writer.uint32(10).string(message.dependency);
    }
    if (message.immediateElderSibling !== "") {
      writer.uint32(18).string(message.immediateElderSibling);
    }
    if (message.immediateYoungerSibling !== "") {
      writer.uint32(26).string(message.immediateYoungerSibling);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractDependencyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractDependencyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dependency = reader.string();
          break;
        case 2:
          message.immediateElderSibling = reader.string();
          break;
        case 3:
          message.immediateYoungerSibling = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractDependencyInfo {
    return {
      dependency: isSet(object.dependency) ? String(object.dependency) : "",
      immediateElderSibling: isSet(object.immediateElderSibling) ? String(object.immediateElderSibling) : "",
      immediateYoungerSibling: isSet(object.immediateYoungerSibling) ? String(object.immediateYoungerSibling) : ""
    };
  },
  toJSON(message: ContractDependencyInfo): unknown {
    const obj: any = {};
    message.dependency !== undefined && (obj.dependency = message.dependency);
    message.immediateElderSibling !== undefined && (obj.immediateElderSibling = message.immediateElderSibling);
    message.immediateYoungerSibling !== undefined && (obj.immediateYoungerSibling = message.immediateYoungerSibling);
    return obj;
  },
  fromPartial(object: Partial<ContractDependencyInfo>): ContractDependencyInfo {
    const message = createBaseContractDependencyInfo();
    message.dependency = object.dependency ?? "";
    message.immediateElderSibling = object.immediateElderSibling ?? "";
    message.immediateYoungerSibling = object.immediateYoungerSibling ?? "";
    return message;
  },
  fromAmino(object: ContractDependencyInfoAmino): ContractDependencyInfo {
    const message = createBaseContractDependencyInfo();
    if (object.dependency !== undefined && object.dependency !== null) {
      message.dependency = object.dependency;
    }
    if (object.immediateElderSibling !== undefined && object.immediateElderSibling !== null) {
      message.immediateElderSibling = object.immediateElderSibling;
    }
    if (object.immediateYoungerSibling !== undefined && object.immediateYoungerSibling !== null) {
      message.immediateYoungerSibling = object.immediateYoungerSibling;
    }
    return message;
  },
  toAmino(message: ContractDependencyInfo): ContractDependencyInfoAmino {
    const obj: any = {};
    obj.dependency = message.dependency;
    obj.immediateElderSibling = message.immediateElderSibling;
    obj.immediateYoungerSibling = message.immediateYoungerSibling;
    return obj;
  },
  fromAminoMsg(object: ContractDependencyInfoAminoMsg): ContractDependencyInfo {
    return ContractDependencyInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractDependencyInfoProtoMsg): ContractDependencyInfo {
    return ContractDependencyInfo.decode(message.value);
  },
  toProto(message: ContractDependencyInfo): Uint8Array {
    return ContractDependencyInfo.encode(message).finish();
  },
  toProtoMsg(message: ContractDependencyInfo): ContractDependencyInfoProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.ContractDependencyInfo",
      value: ContractDependencyInfo.encode(message).finish()
    };
  }
};
function createBaseLegacyContractInfo(): LegacyContractInfo {
  return {
    codeId: Long.UZERO,
    contractAddr: "",
    needHook: false,
    needOrderMatching: false,
    dependentContractAddrs: []
  };
}
export const LegacyContractInfo = {
  typeUrl: "/seiprotocol.seichain.dex.LegacyContractInfo",
  encode(message: LegacyContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    if (message.needHook === true) {
      writer.uint32(24).bool(message.needHook);
    }
    if (message.needOrderMatching === true) {
      writer.uint32(32).bool(message.needOrderMatching);
    }
    for (const v of message.dependentContractAddrs) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyContractInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyContractInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;
        case 2:
          message.contractAddr = reader.string();
          break;
        case 3:
          message.needHook = reader.bool();
          break;
        case 4:
          message.needOrderMatching = reader.bool();
          break;
        case 5:
          message.dependentContractAddrs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyContractInfo {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
      needHook: isSet(object.needHook) ? Boolean(object.needHook) : false,
      needOrderMatching: isSet(object.needOrderMatching) ? Boolean(object.needOrderMatching) : false,
      dependentContractAddrs: Array.isArray(object?.dependentContractAddrs) ? object.dependentContractAddrs.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: LegacyContractInfo): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
    message.needHook !== undefined && (obj.needHook = message.needHook);
    message.needOrderMatching !== undefined && (obj.needOrderMatching = message.needOrderMatching);
    if (message.dependentContractAddrs) {
      obj.dependentContractAddrs = message.dependentContractAddrs.map(e => e);
    } else {
      obj.dependentContractAddrs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<LegacyContractInfo>): LegacyContractInfo {
    const message = createBaseLegacyContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.contractAddr = object.contractAddr ?? "";
    message.needHook = object.needHook ?? false;
    message.needOrderMatching = object.needOrderMatching ?? false;
    message.dependentContractAddrs = object.dependentContractAddrs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: LegacyContractInfoAmino): LegacyContractInfo {
    const message = createBaseLegacyContractInfo();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromString(object.codeId);
    }
    if (object.contractAddr !== undefined && object.contractAddr !== null) {
      message.contractAddr = object.contractAddr;
    }
    if (object.needHook !== undefined && object.needHook !== null) {
      message.needHook = object.needHook;
    }
    if (object.needOrderMatching !== undefined && object.needOrderMatching !== null) {
      message.needOrderMatching = object.needOrderMatching;
    }
    message.dependentContractAddrs = object.dependentContractAddrs?.map(e => e) || [];
    return message;
  },
  toAmino(message: LegacyContractInfo): LegacyContractInfoAmino {
    const obj: any = {};
    obj.codeId = message.codeId ? message.codeId.toString() : undefined;
    obj.contractAddr = message.contractAddr;
    obj.needHook = message.needHook;
    obj.needOrderMatching = message.needOrderMatching;
    if (message.dependentContractAddrs) {
      obj.dependentContractAddrs = message.dependentContractAddrs.map(e => e);
    } else {
      obj.dependentContractAddrs = [];
    }
    return obj;
  },
  fromAminoMsg(object: LegacyContractInfoAminoMsg): LegacyContractInfo {
    return LegacyContractInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyContractInfoProtoMsg): LegacyContractInfo {
    return LegacyContractInfo.decode(message.value);
  },
  toProto(message: LegacyContractInfo): Uint8Array {
    return LegacyContractInfo.encode(message).finish();
  },
  toProtoMsg(message: LegacyContractInfo): LegacyContractInfoProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.LegacyContractInfo",
      value: LegacyContractInfo.encode(message).finish()
    };
  }
};