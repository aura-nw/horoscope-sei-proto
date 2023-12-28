import { DecCoin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseFeesParams() {
    return {
        globalMinimumGasPrices: []
    };
}
export const FeesParams = {
    typeUrl: "/cosmos.params.v1beta1.FeesParams",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.globalMinimumGasPrices) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeesParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.globalMinimumGasPrices.push(DecCoin.decode(reader, reader.uint32()));
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
            globalMinimumGasPrices: Array.isArray(object?.globalMinimumGasPrices) ? object.globalMinimumGasPrices.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.globalMinimumGasPrices) {
            obj.globalMinimumGasPrices = message.globalMinimumGasPrices.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.globalMinimumGasPrices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeesParams();
        message.globalMinimumGasPrices = object.globalMinimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeesParams();
        message.globalMinimumGasPrices = object.global_minimum_gas_prices?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.globalMinimumGasPrices) {
            obj.global_minimum_gas_prices = message.globalMinimumGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.global_minimum_gas_prices = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FeesParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FeesParams",
            value: FeesParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return FeesParams.decode(message.value);
    },
    toProto(message) {
        return FeesParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.FeesParams",
            value: FeesParams.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        feesParams: FeesParams.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.params.v1beta1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.feesParams !== undefined) {
            FeesParams.encode(message.feesParams, writer.uint32(10).fork()).ldelim();
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
                    message.feesParams = FeesParams.decode(reader, reader.uint32());
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
            feesParams: isSet(object.feesParams) ? FeesParams.fromJSON(object.feesParams) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.feesParams !== undefined && (obj.feesParams = message.feesParams ? FeesParams.toJSON(message.feesParams) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.feesParams = object.feesParams !== undefined && object.feesParams !== null ? FeesParams.fromPartial(object.feesParams) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.fees_params !== undefined && object.fees_params !== null) {
            message.feesParams = FeesParams.fromAmino(object.fees_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fees_params = message.feesParams ? FeesParams.toAmino(message.feesParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
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
            typeUrl: "/cosmos.params.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
