import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseGenesisState() {
    return {
        genTxs: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.genTxs) {
            writer.uint32(10).bytes(v);
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
                    message.genTxs.push(reader.bytes());
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
            genTxs: Array.isArray(object?.genTxs) ? object.genTxs.map((e) => bytesFromBase64(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.genTxs) {
            obj.genTxs = message.genTxs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.genTxs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.genTxs = object.genTxs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.genTxs = object.gen_txs?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.genTxs) {
            obj.gen_txs = message.genTxs.map(e => base64FromBytes(e));
        }
        else {
            obj.gen_txs = [];
        }
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
            typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
