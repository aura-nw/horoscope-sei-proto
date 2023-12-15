import { OrderEntry, OrderEntryAmino, OrderEntrySDKType } from "./order_entry";
import * as _m0 from "protobufjs/minimal";
export interface LongBook {
    price: string;
    entry?: OrderEntry;
}
export interface LongBookProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.LongBook";
    value: Uint8Array;
}
export interface LongBookAmino {
    price?: string;
    entry?: OrderEntryAmino;
}
export interface LongBookAminoMsg {
    type: "/seiprotocol.seichain.dex.LongBook";
    value: LongBookAmino;
}
export interface LongBookSDKType {
    price: string;
    entry?: OrderEntrySDKType;
}
export declare const LongBook: {
    typeUrl: string;
    encode(message: LongBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LongBook;
    fromJSON(object: any): LongBook;
    toJSON(message: LongBook): unknown;
    fromPartial(object: Partial<LongBook>): LongBook;
    fromAmino(object: LongBookAmino): LongBook;
    toAmino(message: LongBook): LongBookAmino;
    fromAminoMsg(object: LongBookAminoMsg): LongBook;
    fromProtoMsg(message: LongBookProtoMsg): LongBook;
    toProto(message: LongBook): Uint8Array;
    toProtoMsg(message: LongBook): LongBookProtoMsg;
};
