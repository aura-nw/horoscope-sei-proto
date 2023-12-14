import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./tx";
import { Params, CodeInfo, ContractInfo, Model } from "./types";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        codes: [],
        contracts: [],
        sequences: [],
        genMsgs: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmwasm.wasm.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.codes) {
            Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contracts) {
            Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            Sequence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.genMsgs) {
            GenesisState_GenMsgs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.codes.push(Code.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contracts.push(Contract.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(Sequence.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.genMsgs.push(GenesisState_GenMsgs.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            codes: Array.isArray(object?.codes) ? object.codes.map((e) => Code.fromJSON(e)) : [],
            contracts: Array.isArray(object?.contracts) ? object.contracts.map((e) => Contract.fromJSON(e)) : [],
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => Sequence.fromJSON(e)) : [],
            genMsgs: Array.isArray(object?.genMsgs) ? object.genMsgs.map((e) => GenesisState_GenMsgs.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.codes) {
            obj.codes = message.codes.map(e => e ? Code.toJSON(e) : undefined);
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e ? Contract.toJSON(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e ? Sequence.toJSON(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        if (message.genMsgs) {
            obj.genMsgs = message.genMsgs.map(e => e ? GenesisState_GenMsgs.toJSON(e) : undefined);
        }
        else {
            obj.genMsgs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
        message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
        message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
        message.genMsgs = object.genMsgs?.map(e => GenesisState_GenMsgs.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.codes = object.codes?.map(e => Code.fromAmino(e)) || [];
        message.contracts = object.contracts?.map(e => Contract.fromAmino(e)) || [];
        message.sequences = object.sequences?.map(e => Sequence.fromAmino(e)) || [];
        message.genMsgs = object.gen_msgs?.map(e => GenesisState_GenMsgs.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.codes) {
            obj.codes = message.codes.map(e => e ? Code.toAmino(e) : undefined);
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e ? Contract.toAmino(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e ? Sequence.toAmino(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        if (message.genMsgs) {
            obj.gen_msgs = message.genMsgs.map(e => e ? GenesisState_GenMsgs.toAmino(e) : undefined);
        }
        else {
            obj.gen_msgs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisState_GenMsgs() {
    return {
        storeCode: undefined,
        instantiateContract: undefined,
        executeContract: undefined
    };
}
export const GenesisState_GenMsgs = {
    typeUrl: "/cosmwasm.wasm.v1.GenMsgs",
    encode(message, writer = _m0.Writer.create()) {
        if (message.storeCode !== undefined) {
            MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateContract !== undefined) {
            MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
        }
        if (message.executeContract !== undefined) {
            MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState_GenMsgs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeCode = MsgStoreCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiateContract = MsgInstantiateContract.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.executeContract = MsgExecuteContract.decode(reader, reader.uint32());
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
            storeCode: isSet(object.storeCode) ? MsgStoreCode.fromJSON(object.storeCode) : undefined,
            instantiateContract: isSet(object.instantiateContract) ? MsgInstantiateContract.fromJSON(object.instantiateContract) : undefined,
            executeContract: isSet(object.executeContract) ? MsgExecuteContract.fromJSON(object.executeContract) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.storeCode !== undefined && (obj.storeCode = message.storeCode ? MsgStoreCode.toJSON(message.storeCode) : undefined);
        message.instantiateContract !== undefined && (obj.instantiateContract = message.instantiateContract ? MsgInstantiateContract.toJSON(message.instantiateContract) : undefined);
        message.executeContract !== undefined && (obj.executeContract = message.executeContract ? MsgExecuteContract.toJSON(message.executeContract) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState_GenMsgs();
        message.storeCode = object.storeCode !== undefined && object.storeCode !== null ? MsgStoreCode.fromPartial(object.storeCode) : undefined;
        message.instantiateContract = object.instantiateContract !== undefined && object.instantiateContract !== null ? MsgInstantiateContract.fromPartial(object.instantiateContract) : undefined;
        message.executeContract = object.executeContract !== undefined && object.executeContract !== null ? MsgExecuteContract.fromPartial(object.executeContract) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState_GenMsgs();
        if (object.store_code !== undefined && object.store_code !== null) {
            message.storeCode = MsgStoreCode.fromAmino(object.store_code);
        }
        if (object.instantiate_contract !== undefined && object.instantiate_contract !== null) {
            message.instantiateContract = MsgInstantiateContract.fromAmino(object.instantiate_contract);
        }
        if (object.execute_contract !== undefined && object.execute_contract !== null) {
            message.executeContract = MsgExecuteContract.fromAmino(object.execute_contract);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.store_code = message.storeCode ? MsgStoreCode.toAmino(message.storeCode) : undefined;
        obj.instantiate_contract = message.instantiateContract ? MsgInstantiateContract.toAmino(message.instantiateContract) : undefined;
        obj.execute_contract = message.executeContract ? MsgExecuteContract.toAmino(message.executeContract) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState_GenMsgs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/GenMsgs",
            value: GenesisState_GenMsgs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState_GenMsgs.decode(message.value);
    },
    toProto(message) {
        return GenesisState_GenMsgs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.GenMsgs",
            value: GenesisState_GenMsgs.encode(message).finish()
        };
    }
};
function createBaseCode() {
    return {
        codeId: Long.UZERO,
        codeInfo: CodeInfo.fromPartial({}),
        codeBytes: new Uint8Array(),
        pinned: false
    };
}
export const Code = {
    typeUrl: "/cosmwasm.wasm.v1.Code",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.codeInfo !== undefined) {
            CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.codeBytes.length !== 0) {
            writer.uint32(26).bytes(message.codeBytes);
        }
        if (message.pinned === true) {
            writer.uint32(32).bool(message.pinned);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.codeInfo = CodeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codeBytes = reader.bytes();
                    break;
                case 4:
                    message.pinned = reader.bool();
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
            codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
            codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
            codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array(),
            pinned: isSet(object.pinned) ? Boolean(object.pinned) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
        message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
        message.codeBytes !== undefined && (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
        message.pinned !== undefined && (obj.pinned = message.pinned);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCode();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
        message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : undefined;
        message.codeBytes = object.codeBytes ?? new Uint8Array();
        message.pinned = object.pinned ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCode();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = Long.fromString(object.code_id);
        }
        if (object.code_info !== undefined && object.code_info !== null) {
            message.codeInfo = CodeInfo.fromAmino(object.code_info);
        }
        if (object.code_bytes !== undefined && object.code_bytes !== null) {
            message.codeBytes = bytesFromBase64(object.code_bytes);
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = object.pinned;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.code_info = message.codeInfo ? CodeInfo.toAmino(message.codeInfo) : undefined;
        obj.code_bytes = message.codeBytes ? base64FromBytes(message.codeBytes) : undefined;
        obj.pinned = message.pinned;
        return obj;
    },
    fromAminoMsg(object) {
        return Code.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Code",
            value: Code.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Code.decode(message.value);
    },
    toProto(message) {
        return Code.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Code",
            value: Code.encode(message).finish()
        };
    }
};
function createBaseContract() {
    return {
        contractAddress: "",
        contractInfo: ContractInfo.fromPartial({}),
        contractState: []
    };
}
export const Contract = {
    typeUrl: "/cosmwasm.wasm.v1.Contract",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.contractInfo !== undefined) {
            ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contractState) {
            Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.contractInfo = ContractInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.contractState.push(Model.decode(reader, reader.uint32()));
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
            contractState: Array.isArray(object?.contractState) ? object.contractState.map((e) => Model.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
        if (message.contractState) {
            obj.contractState = message.contractState.map(e => e ? Model.toJSON(e) : undefined);
        }
        else {
            obj.contractState = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseContract();
        message.contractAddress = object.contractAddress ?? "";
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
        message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContract();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contractInfo = ContractInfo.fromAmino(object.contract_info);
        }
        message.contractState = object.contract_state?.map(e => Model.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : undefined;
        if (message.contractState) {
            obj.contract_state = message.contractState.map(e => e ? Model.toAmino(e) : undefined);
        }
        else {
            obj.contract_state = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Contract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Contract",
            value: Contract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Contract.decode(message.value);
    },
    toProto(message) {
        return Contract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Contract",
            value: Contract.encode(message).finish()
        };
    }
};
function createBaseSequence() {
    return {
        idKey: new Uint8Array(),
        value: Long.UZERO
    };
}
export const Sequence = {
    typeUrl: "/cosmwasm.wasm.v1.Sequence",
    encode(message, writer = _m0.Writer.create()) {
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (!message.value.isZero()) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idKey = reader.bytes();
                    break;
                case 2:
                    message.value = reader.uint64();
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
            idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(),
            value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.idKey !== undefined && (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
        message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSequence();
        message.idKey = object.idKey ?? new Uint8Array();
        message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSequence();
        if (object.id_key !== undefined && object.id_key !== null) {
            message.idKey = bytesFromBase64(object.id_key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Long.fromString(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id_key = message.idKey ? base64FromBytes(message.idKey) : undefined;
        obj.value = message.value ? message.value.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Sequence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Sequence",
            value: Sequence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Sequence.decode(message.value);
    },
    toProto(message) {
        return Sequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Sequence",
            value: Sequence.encode(message).finish()
        };
    }
};
