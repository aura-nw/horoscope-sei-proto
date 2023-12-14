import { Order, OrderAmino, OrderSDKType, Cancellation, CancellationAmino, CancellationSDKType } from "./order";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ContractInfoV2, ContractInfoV2Amino, ContractInfoV2SDKType } from "./contract";
import { BatchContractPair, BatchContractPairAmino, BatchContractPairSDKType } from "./pair";
import { TickSize, TickSizeAmino, TickSizeSDKType } from "./tick_size";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgPlaceOrders {
    creator: string;
    orders: Order[];
    contractAddr: string;
    funds: Coin[];
}
export interface MsgPlaceOrdersProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders";
    value: Uint8Array;
}
export interface MsgPlaceOrdersAmino {
    creator?: string;
    orders?: OrderAmino[];
    contractAddr?: string;
    funds?: CoinAmino[];
}
export interface MsgPlaceOrdersAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgPlaceOrders";
    value: MsgPlaceOrdersAmino;
}
export interface MsgPlaceOrdersSDKType {
    creator: string;
    orders: OrderSDKType[];
    contractAddr: string;
    funds: CoinSDKType[];
}
export interface MsgPlaceOrdersResponse {
    orderIds: Long[];
}
export interface MsgPlaceOrdersResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrdersResponse";
    value: Uint8Array;
}
export interface MsgPlaceOrdersResponseAmino {
    orderIds?: string[];
}
export interface MsgPlaceOrdersResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgPlaceOrdersResponse";
    value: MsgPlaceOrdersResponseAmino;
}
export interface MsgPlaceOrdersResponseSDKType {
    orderIds: Long[];
}
export interface MsgCancelOrders {
    creator: string;
    cancellations: Cancellation[];
    contractAddr: string;
}
export interface MsgCancelOrdersProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders";
    value: Uint8Array;
}
export interface MsgCancelOrdersAmino {
    creator?: string;
    cancellations?: CancellationAmino[];
    contractAddr?: string;
}
export interface MsgCancelOrdersAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgCancelOrders";
    value: MsgCancelOrdersAmino;
}
export interface MsgCancelOrdersSDKType {
    creator: string;
    cancellations: CancellationSDKType[];
    contractAddr: string;
}
export interface MsgCancelOrdersResponse {
}
export interface MsgCancelOrdersResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrdersResponse";
    value: Uint8Array;
}
export interface MsgCancelOrdersResponseAmino {
}
export interface MsgCancelOrdersResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgCancelOrdersResponse";
    value: MsgCancelOrdersResponseAmino;
}
export interface MsgCancelOrdersResponseSDKType {
}
export interface MsgRegisterContract {
    creator: string;
    contract?: ContractInfoV2;
}
export interface MsgRegisterContractProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract";
    value: Uint8Array;
}
export interface MsgRegisterContractAmino {
    creator?: string;
    contract?: ContractInfoV2Amino;
}
export interface MsgRegisterContractAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgRegisterContract";
    value: MsgRegisterContractAmino;
}
export interface MsgRegisterContractSDKType {
    creator: string;
    contract?: ContractInfoV2SDKType;
}
export interface MsgRegisterContractResponse {
}
export interface MsgRegisterContractResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContractResponse";
    value: Uint8Array;
}
export interface MsgRegisterContractResponseAmino {
}
export interface MsgRegisterContractResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgRegisterContractResponse";
    value: MsgRegisterContractResponseAmino;
}
export interface MsgRegisterContractResponseSDKType {
}
export interface MsgContractDepositRent {
    contractAddr: string;
    amount: Long;
    sender: string;
}
export interface MsgContractDepositRentProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent";
    value: Uint8Array;
}
export interface MsgContractDepositRentAmino {
    contractAddr?: string;
    amount?: string;
    sender?: string;
}
export interface MsgContractDepositRentAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgContractDepositRent";
    value: MsgContractDepositRentAmino;
}
export interface MsgContractDepositRentSDKType {
    contractAddr: string;
    amount: Long;
    sender: string;
}
export interface MsgContractDepositRentResponse {
}
export interface MsgContractDepositRentResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRentResponse";
    value: Uint8Array;
}
export interface MsgContractDepositRentResponseAmino {
}
export interface MsgContractDepositRentResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgContractDepositRentResponse";
    value: MsgContractDepositRentResponseAmino;
}
export interface MsgContractDepositRentResponseSDKType {
}
export interface MsgUnregisterContract {
    creator: string;
    contractAddr: string;
}
export interface MsgUnregisterContractProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract";
    value: Uint8Array;
}
export interface MsgUnregisterContractAmino {
    creator?: string;
    contractAddr?: string;
}
export interface MsgUnregisterContractAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUnregisterContract";
    value: MsgUnregisterContractAmino;
}
export interface MsgUnregisterContractSDKType {
    creator: string;
    contractAddr: string;
}
export interface MsgUnregisterContractResponse {
}
export interface MsgUnregisterContractResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContractResponse";
    value: Uint8Array;
}
export interface MsgUnregisterContractResponseAmino {
}
export interface MsgUnregisterContractResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUnregisterContractResponse";
    value: MsgUnregisterContractResponseAmino;
}
export interface MsgUnregisterContractResponseSDKType {
}
export interface MsgRegisterPairs {
    creator: string;
    batchcontractpair: BatchContractPair[];
}
export interface MsgRegisterPairsProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs";
    value: Uint8Array;
}
export interface MsgRegisterPairsAmino {
    creator?: string;
    batchcontractpair?: BatchContractPairAmino[];
}
export interface MsgRegisterPairsAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgRegisterPairs";
    value: MsgRegisterPairsAmino;
}
export interface MsgRegisterPairsSDKType {
    creator: string;
    batchcontractpair: BatchContractPairSDKType[];
}
export interface MsgRegisterPairsResponse {
}
export interface MsgRegisterPairsResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairsResponse";
    value: Uint8Array;
}
export interface MsgRegisterPairsResponseAmino {
}
export interface MsgRegisterPairsResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgRegisterPairsResponse";
    value: MsgRegisterPairsResponseAmino;
}
export interface MsgRegisterPairsResponseSDKType {
}
export interface MsgUpdatePriceTickSize {
    creator: string;
    tickSizeList: TickSize[];
}
export interface MsgUpdatePriceTickSizeProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize";
    value: Uint8Array;
}
export interface MsgUpdatePriceTickSizeAmino {
    creator?: string;
    tickSizeList?: TickSizeAmino[];
}
export interface MsgUpdatePriceTickSizeAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize";
    value: MsgUpdatePriceTickSizeAmino;
}
export interface MsgUpdatePriceTickSizeSDKType {
    creator: string;
    tickSizeList: TickSizeSDKType[];
}
export interface MsgUpdateQuantityTickSize {
    creator: string;
    tickSizeList: TickSize[];
}
export interface MsgUpdateQuantityTickSizeProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize";
    value: Uint8Array;
}
export interface MsgUpdateQuantityTickSizeAmino {
    creator?: string;
    tickSizeList?: TickSizeAmino[];
}
export interface MsgUpdateQuantityTickSizeAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize";
    value: MsgUpdateQuantityTickSizeAmino;
}
export interface MsgUpdateQuantityTickSizeSDKType {
    creator: string;
    tickSizeList: TickSizeSDKType[];
}
export interface MsgUpdateTickSizeResponse {
}
export interface MsgUpdateTickSizeResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgUpdateTickSizeResponse";
    value: Uint8Array;
}
export interface MsgUpdateTickSizeResponseAmino {
}
export interface MsgUpdateTickSizeResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUpdateTickSizeResponse";
    value: MsgUpdateTickSizeResponseAmino;
}
export interface MsgUpdateTickSizeResponseSDKType {
}
export interface MsgUnsuspendContract {
    creator: string;
    contractAddr: string;
}
export interface MsgUnsuspendContractProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract";
    value: Uint8Array;
}
export interface MsgUnsuspendContractAmino {
    creator?: string;
    contractAddr?: string;
}
export interface MsgUnsuspendContractAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUnsuspendContract";
    value: MsgUnsuspendContractAmino;
}
export interface MsgUnsuspendContractSDKType {
    creator: string;
    contractAddr: string;
}
export interface MsgUnsuspendContractResponse {
}
export interface MsgUnsuspendContractResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContractResponse";
    value: Uint8Array;
}
export interface MsgUnsuspendContractResponseAmino {
}
export interface MsgUnsuspendContractResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUnsuspendContractResponse";
    value: MsgUnsuspendContractResponseAmino;
}
export interface MsgUnsuspendContractResponseSDKType {
}
export declare const MsgPlaceOrders: {
    typeUrl: string;
    encode(message: MsgPlaceOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceOrders;
    fromJSON(object: any): MsgPlaceOrders;
    toJSON(message: MsgPlaceOrders): unknown;
    fromPartial(object: Partial<MsgPlaceOrders>): MsgPlaceOrders;
    fromAmino(object: MsgPlaceOrdersAmino): MsgPlaceOrders;
    toAmino(message: MsgPlaceOrders): MsgPlaceOrdersAmino;
    fromAminoMsg(object: MsgPlaceOrdersAminoMsg): MsgPlaceOrders;
    fromProtoMsg(message: MsgPlaceOrdersProtoMsg): MsgPlaceOrders;
    toProto(message: MsgPlaceOrders): Uint8Array;
    toProtoMsg(message: MsgPlaceOrders): MsgPlaceOrdersProtoMsg;
};
export declare const MsgPlaceOrdersResponse: {
    typeUrl: string;
    encode(message: MsgPlaceOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceOrdersResponse;
    fromJSON(object: any): MsgPlaceOrdersResponse;
    toJSON(message: MsgPlaceOrdersResponse): unknown;
    fromPartial(object: Partial<MsgPlaceOrdersResponse>): MsgPlaceOrdersResponse;
    fromAmino(object: MsgPlaceOrdersResponseAmino): MsgPlaceOrdersResponse;
    toAmino(message: MsgPlaceOrdersResponse): MsgPlaceOrdersResponseAmino;
    fromAminoMsg(object: MsgPlaceOrdersResponseAminoMsg): MsgPlaceOrdersResponse;
    fromProtoMsg(message: MsgPlaceOrdersResponseProtoMsg): MsgPlaceOrdersResponse;
    toProto(message: MsgPlaceOrdersResponse): Uint8Array;
    toProtoMsg(message: MsgPlaceOrdersResponse): MsgPlaceOrdersResponseProtoMsg;
};
export declare const MsgCancelOrders: {
    typeUrl: string;
    encode(message: MsgCancelOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrders;
    fromJSON(object: any): MsgCancelOrders;
    toJSON(message: MsgCancelOrders): unknown;
    fromPartial(object: Partial<MsgCancelOrders>): MsgCancelOrders;
    fromAmino(object: MsgCancelOrdersAmino): MsgCancelOrders;
    toAmino(message: MsgCancelOrders): MsgCancelOrdersAmino;
    fromAminoMsg(object: MsgCancelOrdersAminoMsg): MsgCancelOrders;
    fromProtoMsg(message: MsgCancelOrdersProtoMsg): MsgCancelOrders;
    toProto(message: MsgCancelOrders): Uint8Array;
    toProtoMsg(message: MsgCancelOrders): MsgCancelOrdersProtoMsg;
};
export declare const MsgCancelOrdersResponse: {
    typeUrl: string;
    encode(_: MsgCancelOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrdersResponse;
    fromJSON(_: any): MsgCancelOrdersResponse;
    toJSON(_: MsgCancelOrdersResponse): unknown;
    fromPartial(_: Partial<MsgCancelOrdersResponse>): MsgCancelOrdersResponse;
    fromAmino(_: MsgCancelOrdersResponseAmino): MsgCancelOrdersResponse;
    toAmino(_: MsgCancelOrdersResponse): MsgCancelOrdersResponseAmino;
    fromAminoMsg(object: MsgCancelOrdersResponseAminoMsg): MsgCancelOrdersResponse;
    fromProtoMsg(message: MsgCancelOrdersResponseProtoMsg): MsgCancelOrdersResponse;
    toProto(message: MsgCancelOrdersResponse): Uint8Array;
    toProtoMsg(message: MsgCancelOrdersResponse): MsgCancelOrdersResponseProtoMsg;
};
export declare const MsgRegisterContract: {
    typeUrl: string;
    encode(message: MsgRegisterContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContract;
    fromJSON(object: any): MsgRegisterContract;
    toJSON(message: MsgRegisterContract): unknown;
    fromPartial(object: Partial<MsgRegisterContract>): MsgRegisterContract;
    fromAmino(object: MsgRegisterContractAmino): MsgRegisterContract;
    toAmino(message: MsgRegisterContract): MsgRegisterContractAmino;
    fromAminoMsg(object: MsgRegisterContractAminoMsg): MsgRegisterContract;
    fromProtoMsg(message: MsgRegisterContractProtoMsg): MsgRegisterContract;
    toProto(message: MsgRegisterContract): Uint8Array;
    toProtoMsg(message: MsgRegisterContract): MsgRegisterContractProtoMsg;
};
export declare const MsgRegisterContractResponse: {
    typeUrl: string;
    encode(_: MsgRegisterContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContractResponse;
    fromJSON(_: any): MsgRegisterContractResponse;
    toJSON(_: MsgRegisterContractResponse): unknown;
    fromPartial(_: Partial<MsgRegisterContractResponse>): MsgRegisterContractResponse;
    fromAmino(_: MsgRegisterContractResponseAmino): MsgRegisterContractResponse;
    toAmino(_: MsgRegisterContractResponse): MsgRegisterContractResponseAmino;
    fromAminoMsg(object: MsgRegisterContractResponseAminoMsg): MsgRegisterContractResponse;
    fromProtoMsg(message: MsgRegisterContractResponseProtoMsg): MsgRegisterContractResponse;
    toProto(message: MsgRegisterContractResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterContractResponse): MsgRegisterContractResponseProtoMsg;
};
export declare const MsgContractDepositRent: {
    typeUrl: string;
    encode(message: MsgContractDepositRent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgContractDepositRent;
    fromJSON(object: any): MsgContractDepositRent;
    toJSON(message: MsgContractDepositRent): unknown;
    fromPartial(object: Partial<MsgContractDepositRent>): MsgContractDepositRent;
    fromAmino(object: MsgContractDepositRentAmino): MsgContractDepositRent;
    toAmino(message: MsgContractDepositRent): MsgContractDepositRentAmino;
    fromAminoMsg(object: MsgContractDepositRentAminoMsg): MsgContractDepositRent;
    fromProtoMsg(message: MsgContractDepositRentProtoMsg): MsgContractDepositRent;
    toProto(message: MsgContractDepositRent): Uint8Array;
    toProtoMsg(message: MsgContractDepositRent): MsgContractDepositRentProtoMsg;
};
export declare const MsgContractDepositRentResponse: {
    typeUrl: string;
    encode(_: MsgContractDepositRentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgContractDepositRentResponse;
    fromJSON(_: any): MsgContractDepositRentResponse;
    toJSON(_: MsgContractDepositRentResponse): unknown;
    fromPartial(_: Partial<MsgContractDepositRentResponse>): MsgContractDepositRentResponse;
    fromAmino(_: MsgContractDepositRentResponseAmino): MsgContractDepositRentResponse;
    toAmino(_: MsgContractDepositRentResponse): MsgContractDepositRentResponseAmino;
    fromAminoMsg(object: MsgContractDepositRentResponseAminoMsg): MsgContractDepositRentResponse;
    fromProtoMsg(message: MsgContractDepositRentResponseProtoMsg): MsgContractDepositRentResponse;
    toProto(message: MsgContractDepositRentResponse): Uint8Array;
    toProtoMsg(message: MsgContractDepositRentResponse): MsgContractDepositRentResponseProtoMsg;
};
export declare const MsgUnregisterContract: {
    typeUrl: string;
    encode(message: MsgUnregisterContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterContract;
    fromJSON(object: any): MsgUnregisterContract;
    toJSON(message: MsgUnregisterContract): unknown;
    fromPartial(object: Partial<MsgUnregisterContract>): MsgUnregisterContract;
    fromAmino(object: MsgUnregisterContractAmino): MsgUnregisterContract;
    toAmino(message: MsgUnregisterContract): MsgUnregisterContractAmino;
    fromAminoMsg(object: MsgUnregisterContractAminoMsg): MsgUnregisterContract;
    fromProtoMsg(message: MsgUnregisterContractProtoMsg): MsgUnregisterContract;
    toProto(message: MsgUnregisterContract): Uint8Array;
    toProtoMsg(message: MsgUnregisterContract): MsgUnregisterContractProtoMsg;
};
export declare const MsgUnregisterContractResponse: {
    typeUrl: string;
    encode(_: MsgUnregisterContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterContractResponse;
    fromJSON(_: any): MsgUnregisterContractResponse;
    toJSON(_: MsgUnregisterContractResponse): unknown;
    fromPartial(_: Partial<MsgUnregisterContractResponse>): MsgUnregisterContractResponse;
    fromAmino(_: MsgUnregisterContractResponseAmino): MsgUnregisterContractResponse;
    toAmino(_: MsgUnregisterContractResponse): MsgUnregisterContractResponseAmino;
    fromAminoMsg(object: MsgUnregisterContractResponseAminoMsg): MsgUnregisterContractResponse;
    fromProtoMsg(message: MsgUnregisterContractResponseProtoMsg): MsgUnregisterContractResponse;
    toProto(message: MsgUnregisterContractResponse): Uint8Array;
    toProtoMsg(message: MsgUnregisterContractResponse): MsgUnregisterContractResponseProtoMsg;
};
export declare const MsgRegisterPairs: {
    typeUrl: string;
    encode(message: MsgRegisterPairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPairs;
    fromJSON(object: any): MsgRegisterPairs;
    toJSON(message: MsgRegisterPairs): unknown;
    fromPartial(object: Partial<MsgRegisterPairs>): MsgRegisterPairs;
    fromAmino(object: MsgRegisterPairsAmino): MsgRegisterPairs;
    toAmino(message: MsgRegisterPairs): MsgRegisterPairsAmino;
    fromAminoMsg(object: MsgRegisterPairsAminoMsg): MsgRegisterPairs;
    fromProtoMsg(message: MsgRegisterPairsProtoMsg): MsgRegisterPairs;
    toProto(message: MsgRegisterPairs): Uint8Array;
    toProtoMsg(message: MsgRegisterPairs): MsgRegisterPairsProtoMsg;
};
export declare const MsgRegisterPairsResponse: {
    typeUrl: string;
    encode(_: MsgRegisterPairsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPairsResponse;
    fromJSON(_: any): MsgRegisterPairsResponse;
    toJSON(_: MsgRegisterPairsResponse): unknown;
    fromPartial(_: Partial<MsgRegisterPairsResponse>): MsgRegisterPairsResponse;
    fromAmino(_: MsgRegisterPairsResponseAmino): MsgRegisterPairsResponse;
    toAmino(_: MsgRegisterPairsResponse): MsgRegisterPairsResponseAmino;
    fromAminoMsg(object: MsgRegisterPairsResponseAminoMsg): MsgRegisterPairsResponse;
    fromProtoMsg(message: MsgRegisterPairsResponseProtoMsg): MsgRegisterPairsResponse;
    toProto(message: MsgRegisterPairsResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterPairsResponse): MsgRegisterPairsResponseProtoMsg;
};
export declare const MsgUpdatePriceTickSize: {
    typeUrl: string;
    encode(message: MsgUpdatePriceTickSize, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePriceTickSize;
    fromJSON(object: any): MsgUpdatePriceTickSize;
    toJSON(message: MsgUpdatePriceTickSize): unknown;
    fromPartial(object: Partial<MsgUpdatePriceTickSize>): MsgUpdatePriceTickSize;
    fromAmino(object: MsgUpdatePriceTickSizeAmino): MsgUpdatePriceTickSize;
    toAmino(message: MsgUpdatePriceTickSize): MsgUpdatePriceTickSizeAmino;
    fromAminoMsg(object: MsgUpdatePriceTickSizeAminoMsg): MsgUpdatePriceTickSize;
    fromProtoMsg(message: MsgUpdatePriceTickSizeProtoMsg): MsgUpdatePriceTickSize;
    toProto(message: MsgUpdatePriceTickSize): Uint8Array;
    toProtoMsg(message: MsgUpdatePriceTickSize): MsgUpdatePriceTickSizeProtoMsg;
};
export declare const MsgUpdateQuantityTickSize: {
    typeUrl: string;
    encode(message: MsgUpdateQuantityTickSize, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuantityTickSize;
    fromJSON(object: any): MsgUpdateQuantityTickSize;
    toJSON(message: MsgUpdateQuantityTickSize): unknown;
    fromPartial(object: Partial<MsgUpdateQuantityTickSize>): MsgUpdateQuantityTickSize;
    fromAmino(object: MsgUpdateQuantityTickSizeAmino): MsgUpdateQuantityTickSize;
    toAmino(message: MsgUpdateQuantityTickSize): MsgUpdateQuantityTickSizeAmino;
    fromAminoMsg(object: MsgUpdateQuantityTickSizeAminoMsg): MsgUpdateQuantityTickSize;
    fromProtoMsg(message: MsgUpdateQuantityTickSizeProtoMsg): MsgUpdateQuantityTickSize;
    toProto(message: MsgUpdateQuantityTickSize): Uint8Array;
    toProtoMsg(message: MsgUpdateQuantityTickSize): MsgUpdateQuantityTickSizeProtoMsg;
};
export declare const MsgUpdateTickSizeResponse: {
    typeUrl: string;
    encode(_: MsgUpdateTickSizeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTickSizeResponse;
    fromJSON(_: any): MsgUpdateTickSizeResponse;
    toJSON(_: MsgUpdateTickSizeResponse): unknown;
    fromPartial(_: Partial<MsgUpdateTickSizeResponse>): MsgUpdateTickSizeResponse;
    fromAmino(_: MsgUpdateTickSizeResponseAmino): MsgUpdateTickSizeResponse;
    toAmino(_: MsgUpdateTickSizeResponse): MsgUpdateTickSizeResponseAmino;
    fromAminoMsg(object: MsgUpdateTickSizeResponseAminoMsg): MsgUpdateTickSizeResponse;
    fromProtoMsg(message: MsgUpdateTickSizeResponseProtoMsg): MsgUpdateTickSizeResponse;
    toProto(message: MsgUpdateTickSizeResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateTickSizeResponse): MsgUpdateTickSizeResponseProtoMsg;
};
export declare const MsgUnsuspendContract: {
    typeUrl: string;
    encode(message: MsgUnsuspendContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsuspendContract;
    fromJSON(object: any): MsgUnsuspendContract;
    toJSON(message: MsgUnsuspendContract): unknown;
    fromPartial(object: Partial<MsgUnsuspendContract>): MsgUnsuspendContract;
    fromAmino(object: MsgUnsuspendContractAmino): MsgUnsuspendContract;
    toAmino(message: MsgUnsuspendContract): MsgUnsuspendContractAmino;
    fromAminoMsg(object: MsgUnsuspendContractAminoMsg): MsgUnsuspendContract;
    fromProtoMsg(message: MsgUnsuspendContractProtoMsg): MsgUnsuspendContract;
    toProto(message: MsgUnsuspendContract): Uint8Array;
    toProtoMsg(message: MsgUnsuspendContract): MsgUnsuspendContractProtoMsg;
};
export declare const MsgUnsuspendContractResponse: {
    typeUrl: string;
    encode(_: MsgUnsuspendContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsuspendContractResponse;
    fromJSON(_: any): MsgUnsuspendContractResponse;
    toJSON(_: MsgUnsuspendContractResponse): unknown;
    fromPartial(_: Partial<MsgUnsuspendContractResponse>): MsgUnsuspendContractResponse;
    fromAmino(_: MsgUnsuspendContractResponseAmino): MsgUnsuspendContractResponse;
    toAmino(_: MsgUnsuspendContractResponse): MsgUnsuspendContractResponseAmino;
    fromAminoMsg(object: MsgUnsuspendContractResponseAminoMsg): MsgUnsuspendContractResponse;
    fromProtoMsg(message: MsgUnsuspendContractResponseProtoMsg): MsgUnsuspendContractResponse;
    toProto(message: MsgUnsuspendContractResponse): Uint8Array;
    toProtoMsg(message: MsgUnsuspendContractResponse): MsgUnsuspendContractResponseProtoMsg;
};
