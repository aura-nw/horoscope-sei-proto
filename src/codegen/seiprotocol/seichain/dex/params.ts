import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
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
function createBaseParams(): Params {
  return {
    priceSnapshotRetention: Long.UZERO,
    sudoCallGasPrice: "",
    beginBlockGasLimit: Long.UZERO,
    endBlockGasLimit: Long.UZERO,
    defaultGasPerOrder: Long.UZERO,
    defaultGasPerCancel: Long.UZERO,
    minRentDeposit: Long.UZERO,
    gasAllowancePerSettlement: Long.UZERO,
    minProcessableRent: Long.UZERO,
    orderBookEntriesPerLoad: Long.UZERO,
    contractUnsuspendCost: Long.UZERO,
    maxOrderPerPrice: Long.UZERO,
    maxPairsPerContract: Long.UZERO,
    defaultGasPerOrderDataByte: Long.UZERO
  };
}
export const Params = {
  typeUrl: "/seiprotocol.seichain.dex.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.priceSnapshotRetention.isZero()) {
      writer.uint32(8).uint64(message.priceSnapshotRetention);
    }
    if (message.sudoCallGasPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.sudoCallGasPrice, 18).atomics);
    }
    if (!message.beginBlockGasLimit.isZero()) {
      writer.uint32(24).uint64(message.beginBlockGasLimit);
    }
    if (!message.endBlockGasLimit.isZero()) {
      writer.uint32(32).uint64(message.endBlockGasLimit);
    }
    if (!message.defaultGasPerOrder.isZero()) {
      writer.uint32(40).uint64(message.defaultGasPerOrder);
    }
    if (!message.defaultGasPerCancel.isZero()) {
      writer.uint32(48).uint64(message.defaultGasPerCancel);
    }
    if (!message.minRentDeposit.isZero()) {
      writer.uint32(56).uint64(message.minRentDeposit);
    }
    if (!message.gasAllowancePerSettlement.isZero()) {
      writer.uint32(64).uint64(message.gasAllowancePerSettlement);
    }
    if (!message.minProcessableRent.isZero()) {
      writer.uint32(72).uint64(message.minProcessableRent);
    }
    if (!message.orderBookEntriesPerLoad.isZero()) {
      writer.uint32(80).uint64(message.orderBookEntriesPerLoad);
    }
    if (!message.contractUnsuspendCost.isZero()) {
      writer.uint32(88).uint64(message.contractUnsuspendCost);
    }
    if (!message.maxOrderPerPrice.isZero()) {
      writer.uint32(96).uint64(message.maxOrderPerPrice);
    }
    if (!message.maxPairsPerContract.isZero()) {
      writer.uint32(104).uint64(message.maxPairsPerContract);
    }
    if (!message.defaultGasPerOrderDataByte.isZero()) {
      writer.uint32(112).uint64(message.defaultGasPerOrderDataByte);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceSnapshotRetention = (reader.uint64() as Long);
          break;
        case 2:
          message.sudoCallGasPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.beginBlockGasLimit = (reader.uint64() as Long);
          break;
        case 4:
          message.endBlockGasLimit = (reader.uint64() as Long);
          break;
        case 5:
          message.defaultGasPerOrder = (reader.uint64() as Long);
          break;
        case 6:
          message.defaultGasPerCancel = (reader.uint64() as Long);
          break;
        case 7:
          message.minRentDeposit = (reader.uint64() as Long);
          break;
        case 8:
          message.gasAllowancePerSettlement = (reader.uint64() as Long);
          break;
        case 9:
          message.minProcessableRent = (reader.uint64() as Long);
          break;
        case 10:
          message.orderBookEntriesPerLoad = (reader.uint64() as Long);
          break;
        case 11:
          message.contractUnsuspendCost = (reader.uint64() as Long);
          break;
        case 12:
          message.maxOrderPerPrice = (reader.uint64() as Long);
          break;
        case 13:
          message.maxPairsPerContract = (reader.uint64() as Long);
          break;
        case 14:
          message.defaultGasPerOrderDataByte = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      priceSnapshotRetention: isSet(object.priceSnapshotRetention) ? Long.fromValue(object.priceSnapshotRetention) : Long.UZERO,
      sudoCallGasPrice: isSet(object.sudoCallGasPrice) ? String(object.sudoCallGasPrice) : "",
      beginBlockGasLimit: isSet(object.beginBlockGasLimit) ? Long.fromValue(object.beginBlockGasLimit) : Long.UZERO,
      endBlockGasLimit: isSet(object.endBlockGasLimit) ? Long.fromValue(object.endBlockGasLimit) : Long.UZERO,
      defaultGasPerOrder: isSet(object.defaultGasPerOrder) ? Long.fromValue(object.defaultGasPerOrder) : Long.UZERO,
      defaultGasPerCancel: isSet(object.defaultGasPerCancel) ? Long.fromValue(object.defaultGasPerCancel) : Long.UZERO,
      minRentDeposit: isSet(object.minRentDeposit) ? Long.fromValue(object.minRentDeposit) : Long.UZERO,
      gasAllowancePerSettlement: isSet(object.gasAllowancePerSettlement) ? Long.fromValue(object.gasAllowancePerSettlement) : Long.UZERO,
      minProcessableRent: isSet(object.minProcessableRent) ? Long.fromValue(object.minProcessableRent) : Long.UZERO,
      orderBookEntriesPerLoad: isSet(object.orderBookEntriesPerLoad) ? Long.fromValue(object.orderBookEntriesPerLoad) : Long.UZERO,
      contractUnsuspendCost: isSet(object.contractUnsuspendCost) ? Long.fromValue(object.contractUnsuspendCost) : Long.UZERO,
      maxOrderPerPrice: isSet(object.maxOrderPerPrice) ? Long.fromValue(object.maxOrderPerPrice) : Long.UZERO,
      maxPairsPerContract: isSet(object.maxPairsPerContract) ? Long.fromValue(object.maxPairsPerContract) : Long.UZERO,
      defaultGasPerOrderDataByte: isSet(object.defaultGasPerOrderDataByte) ? Long.fromValue(object.defaultGasPerOrderDataByte) : Long.UZERO
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.priceSnapshotRetention !== undefined && (obj.priceSnapshotRetention = (message.priceSnapshotRetention || Long.UZERO).toString());
    message.sudoCallGasPrice !== undefined && (obj.sudoCallGasPrice = message.sudoCallGasPrice);
    message.beginBlockGasLimit !== undefined && (obj.beginBlockGasLimit = (message.beginBlockGasLimit || Long.UZERO).toString());
    message.endBlockGasLimit !== undefined && (obj.endBlockGasLimit = (message.endBlockGasLimit || Long.UZERO).toString());
    message.defaultGasPerOrder !== undefined && (obj.defaultGasPerOrder = (message.defaultGasPerOrder || Long.UZERO).toString());
    message.defaultGasPerCancel !== undefined && (obj.defaultGasPerCancel = (message.defaultGasPerCancel || Long.UZERO).toString());
    message.minRentDeposit !== undefined && (obj.minRentDeposit = (message.minRentDeposit || Long.UZERO).toString());
    message.gasAllowancePerSettlement !== undefined && (obj.gasAllowancePerSettlement = (message.gasAllowancePerSettlement || Long.UZERO).toString());
    message.minProcessableRent !== undefined && (obj.minProcessableRent = (message.minProcessableRent || Long.UZERO).toString());
    message.orderBookEntriesPerLoad !== undefined && (obj.orderBookEntriesPerLoad = (message.orderBookEntriesPerLoad || Long.UZERO).toString());
    message.contractUnsuspendCost !== undefined && (obj.contractUnsuspendCost = (message.contractUnsuspendCost || Long.UZERO).toString());
    message.maxOrderPerPrice !== undefined && (obj.maxOrderPerPrice = (message.maxOrderPerPrice || Long.UZERO).toString());
    message.maxPairsPerContract !== undefined && (obj.maxPairsPerContract = (message.maxPairsPerContract || Long.UZERO).toString());
    message.defaultGasPerOrderDataByte !== undefined && (obj.defaultGasPerOrderDataByte = (message.defaultGasPerOrderDataByte || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.priceSnapshotRetention = object.priceSnapshotRetention !== undefined && object.priceSnapshotRetention !== null ? Long.fromValue(object.priceSnapshotRetention) : Long.UZERO;
    message.sudoCallGasPrice = object.sudoCallGasPrice ?? "";
    message.beginBlockGasLimit = object.beginBlockGasLimit !== undefined && object.beginBlockGasLimit !== null ? Long.fromValue(object.beginBlockGasLimit) : Long.UZERO;
    message.endBlockGasLimit = object.endBlockGasLimit !== undefined && object.endBlockGasLimit !== null ? Long.fromValue(object.endBlockGasLimit) : Long.UZERO;
    message.defaultGasPerOrder = object.defaultGasPerOrder !== undefined && object.defaultGasPerOrder !== null ? Long.fromValue(object.defaultGasPerOrder) : Long.UZERO;
    message.defaultGasPerCancel = object.defaultGasPerCancel !== undefined && object.defaultGasPerCancel !== null ? Long.fromValue(object.defaultGasPerCancel) : Long.UZERO;
    message.minRentDeposit = object.minRentDeposit !== undefined && object.minRentDeposit !== null ? Long.fromValue(object.minRentDeposit) : Long.UZERO;
    message.gasAllowancePerSettlement = object.gasAllowancePerSettlement !== undefined && object.gasAllowancePerSettlement !== null ? Long.fromValue(object.gasAllowancePerSettlement) : Long.UZERO;
    message.minProcessableRent = object.minProcessableRent !== undefined && object.minProcessableRent !== null ? Long.fromValue(object.minProcessableRent) : Long.UZERO;
    message.orderBookEntriesPerLoad = object.orderBookEntriesPerLoad !== undefined && object.orderBookEntriesPerLoad !== null ? Long.fromValue(object.orderBookEntriesPerLoad) : Long.UZERO;
    message.contractUnsuspendCost = object.contractUnsuspendCost !== undefined && object.contractUnsuspendCost !== null ? Long.fromValue(object.contractUnsuspendCost) : Long.UZERO;
    message.maxOrderPerPrice = object.maxOrderPerPrice !== undefined && object.maxOrderPerPrice !== null ? Long.fromValue(object.maxOrderPerPrice) : Long.UZERO;
    message.maxPairsPerContract = object.maxPairsPerContract !== undefined && object.maxPairsPerContract !== null ? Long.fromValue(object.maxPairsPerContract) : Long.UZERO;
    message.defaultGasPerOrderDataByte = object.defaultGasPerOrderDataByte !== undefined && object.defaultGasPerOrderDataByte !== null ? Long.fromValue(object.defaultGasPerOrderDataByte) : Long.UZERO;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.price_snapshot_retention !== undefined && object.price_snapshot_retention !== null) {
      message.priceSnapshotRetention = Long.fromString(object.price_snapshot_retention);
    }
    if (object.sudo_call_gas_price !== undefined && object.sudo_call_gas_price !== null) {
      message.sudoCallGasPrice = object.sudo_call_gas_price;
    }
    if (object.begin_block_gas_limit !== undefined && object.begin_block_gas_limit !== null) {
      message.beginBlockGasLimit = Long.fromString(object.begin_block_gas_limit);
    }
    if (object.end_block_gas_limit !== undefined && object.end_block_gas_limit !== null) {
      message.endBlockGasLimit = Long.fromString(object.end_block_gas_limit);
    }
    if (object.default_gas_per_order !== undefined && object.default_gas_per_order !== null) {
      message.defaultGasPerOrder = Long.fromString(object.default_gas_per_order);
    }
    if (object.default_gas_per_cancel !== undefined && object.default_gas_per_cancel !== null) {
      message.defaultGasPerCancel = Long.fromString(object.default_gas_per_cancel);
    }
    if (object.min_rent_deposit !== undefined && object.min_rent_deposit !== null) {
      message.minRentDeposit = Long.fromString(object.min_rent_deposit);
    }
    if (object.gas_allowance_per_settlement !== undefined && object.gas_allowance_per_settlement !== null) {
      message.gasAllowancePerSettlement = Long.fromString(object.gas_allowance_per_settlement);
    }
    if (object.min_processable_rent !== undefined && object.min_processable_rent !== null) {
      message.minProcessableRent = Long.fromString(object.min_processable_rent);
    }
    if (object.order_book_entries_per_load !== undefined && object.order_book_entries_per_load !== null) {
      message.orderBookEntriesPerLoad = Long.fromString(object.order_book_entries_per_load);
    }
    if (object.contract_unsuspend_cost !== undefined && object.contract_unsuspend_cost !== null) {
      message.contractUnsuspendCost = Long.fromString(object.contract_unsuspend_cost);
    }
    if (object.max_order_per_price !== undefined && object.max_order_per_price !== null) {
      message.maxOrderPerPrice = Long.fromString(object.max_order_per_price);
    }
    if (object.max_pairs_per_contract !== undefined && object.max_pairs_per_contract !== null) {
      message.maxPairsPerContract = Long.fromString(object.max_pairs_per_contract);
    }
    if (object.default_gas_per_order_data_byte !== undefined && object.default_gas_per_order_data_byte !== null) {
      message.defaultGasPerOrderDataByte = Long.fromString(object.default_gas_per_order_data_byte);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.price_snapshot_retention = message.priceSnapshotRetention ? message.priceSnapshotRetention.toString() : undefined;
    obj.sudo_call_gas_price = message.sudoCallGasPrice;
    obj.begin_block_gas_limit = message.beginBlockGasLimit ? message.beginBlockGasLimit.toString() : undefined;
    obj.end_block_gas_limit = message.endBlockGasLimit ? message.endBlockGasLimit.toString() : undefined;
    obj.default_gas_per_order = message.defaultGasPerOrder ? message.defaultGasPerOrder.toString() : undefined;
    obj.default_gas_per_cancel = message.defaultGasPerCancel ? message.defaultGasPerCancel.toString() : undefined;
    obj.min_rent_deposit = message.minRentDeposit ? message.minRentDeposit.toString() : undefined;
    obj.gas_allowance_per_settlement = message.gasAllowancePerSettlement ? message.gasAllowancePerSettlement.toString() : undefined;
    obj.min_processable_rent = message.minProcessableRent ? message.minProcessableRent.toString() : undefined;
    obj.order_book_entries_per_load = message.orderBookEntriesPerLoad ? message.orderBookEntriesPerLoad.toString() : undefined;
    obj.contract_unsuspend_cost = message.contractUnsuspendCost ? message.contractUnsuspendCost.toString() : undefined;
    obj.max_order_per_price = message.maxOrderPerPrice ? message.maxOrderPerPrice.toString() : undefined;
    obj.max_pairs_per_contract = message.maxPairsPerContract ? message.maxPairsPerContract.toString() : undefined;
    obj.default_gas_per_order_data_byte = message.defaultGasPerOrderDataByte ? message.defaultGasPerOrderDataByte.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.Params",
      value: Params.encode(message).finish()
    };
  }
};