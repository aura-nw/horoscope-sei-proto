import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    priceSnapshotRetention: Long;
    sudoCallGasPrice: string;
    beginBlockGasLimit: Long;
    endBlockGasLimit: Long;
    defaultGasPerOrder: Long;
    defaultGasPerCancel: Long;
    minRentDeposit: Long;
    gasAllowancePerSettlement: Long;
    minProcessableRent: Long;
    orderBookEntriesPerLoad: Long;
    contractUnsuspendCost: Long;
    maxOrderPerPrice: Long;
    maxPairsPerContract: Long;
    defaultGasPerOrderDataByte: Long;
}
export interface ParamsProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    price_snapshot_retention?: string;
    sudo_call_gas_price?: string;
    begin_block_gas_limit?: string;
    end_block_gas_limit?: string;
    default_gas_per_order?: string;
    default_gas_per_cancel?: string;
    min_rent_deposit?: string;
    gas_allowance_per_settlement?: string;
    min_processable_rent?: string;
    order_book_entries_per_load?: string;
    contract_unsuspend_cost?: string;
    max_order_per_price?: string;
    max_pairs_per_contract?: string;
    default_gas_per_order_data_byte?: string;
}
export interface ParamsAminoMsg {
    type: "/seiprotocol.seichain.dex.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    price_snapshot_retention: Long;
    sudo_call_gas_price: string;
    begin_block_gas_limit: Long;
    end_block_gas_limit: Long;
    default_gas_per_order: Long;
    default_gas_per_cancel: Long;
    min_rent_deposit: Long;
    gas_allowance_per_settlement: Long;
    min_processable_rent: Long;
    order_book_entries_per_load: Long;
    contract_unsuspend_cost: Long;
    max_order_per_price: Long;
    max_pairs_per_contract: Long;
    default_gas_per_order_data_byte: Long;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
