import { Minter } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseUpdateMinterProposal() {
    return {
        title: "",
        description: "",
        minter: undefined
    };
}
export const UpdateMinterProposal = {
    typeUrl: "/seiprotocol.seichain.mint.UpdateMinterProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.minter !== undefined) {
            Minter.encode(message.minter, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMinterProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.minter = Minter.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.minter !== undefined && (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateMinterProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateMinterProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.minter !== undefined && object.minter !== null) {
            message.minter = Minter.fromAmino(object.minter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.minter = message.minter ? Minter.toAmino(message.minter) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateMinterProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateMinterProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateMinterProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/seiprotocol.seichain.mint.UpdateMinterProposal",
            value: UpdateMinterProposal.encode(message).finish()
        };
    }
};
