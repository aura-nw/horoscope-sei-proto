import { Order, OrderAmino, OrderSDKType, Cancellation, CancellationAmino, CancellationSDKType } from "./order";
import { SettlementEntry, SettlementEntryAmino, SettlementEntrySDKType } from "./settlement";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MatchResult {
    height: Long;
    contractAddr: string;
    orders: Order[];
    settlements: SettlementEntry[];
    cancellations: Cancellation[];
}
export interface MatchResultProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MatchResult";
    value: Uint8Array;
}
export interface MatchResultAmino {
    height?: string;
    contractAddr?: string;
    orders?: OrderAmino[];
    settlements?: SettlementEntryAmino[];
    cancellations?: CancellationAmino[];
}
export interface MatchResultAminoMsg {
    type: "/seiprotocol.seichain.dex.MatchResult";
    value: MatchResultAmino;
}
export interface MatchResultSDKType {
    height: Long;
    contractAddr: string;
    orders: OrderSDKType[];
    settlements: SettlementEntrySDKType[];
    cancellations: CancellationSDKType[];
}
export declare const MatchResult: {
    typeUrl: string;
    encode(message: MatchResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MatchResult;
    fromJSON(object: any): MatchResult;
    toJSON(message: MatchResult): unknown;
    fromPartial(object: Partial<MatchResult>): MatchResult;
    fromAmino(object: MatchResultAmino): MatchResult;
    toAmino(message: MatchResult): MatchResultAmino;
    fromAminoMsg(object: MatchResultAminoMsg): MatchResult;
    fromProtoMsg(message: MatchResultProtoMsg): MatchResult;
    toProto(message: MatchResult): Uint8Array;
    toProtoMsg(message: MatchResult): MatchResultProtoMsg;
};
