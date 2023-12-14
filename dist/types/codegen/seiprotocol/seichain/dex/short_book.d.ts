import { OrderEntry, OrderEntryAmino, OrderEntrySDKType } from "./order_entry";
import * as _m0 from "protobufjs/minimal";
export interface ShortBook {
    price: string;
    entry?: OrderEntry;
}
export interface ShortBookProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.ShortBook";
    value: Uint8Array;
}
export interface ShortBookAmino {
    price?: string;
    entry?: OrderEntryAmino;
}
export interface ShortBookAminoMsg {
    type: "/seiprotocol.seichain.dex.ShortBook";
    value: ShortBookAmino;
}
export interface ShortBookSDKType {
    price: string;
    entry?: OrderEntrySDKType;
}
export declare const ShortBook: {
    typeUrl: string;
    encode(message: ShortBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ShortBook;
    fromJSON(object: any): ShortBook;
    toJSON(message: ShortBook): unknown;
    fromPartial(object: Partial<ShortBook>): ShortBook;
    fromAmino(object: ShortBookAmino): ShortBook;
    toAmino(message: ShortBook): ShortBookAmino;
    fromAminoMsg(object: ShortBookAminoMsg): ShortBook;
    fromProtoMsg(message: ShortBookProtoMsg): ShortBook;
    toProto(message: ShortBook): Uint8Array;
    toProtoMsg(message: ShortBook): ShortBookProtoMsg;
};
