import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
export interface AssetIBCInfo {
    sourceChannel: string;
    dstChannel: string;
    sourceDenom: string;
    sourceChainID: string;
}
export interface AssetIBCInfoProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.AssetIBCInfo";
    value: Uint8Array;
}
export interface AssetIBCInfoAmino {
    sourceChannel?: string;
    dstChannel?: string;
    sourceDenom?: string;
    sourceChainID?: string;
}
export interface AssetIBCInfoAminoMsg {
    type: "/seiprotocol.seichain.dex.AssetIBCInfo";
    value: AssetIBCInfoAmino;
}
export interface AssetIBCInfoSDKType {
    sourceChannel: string;
    dstChannel: string;
    sourceDenom: string;
    sourceChainID: string;
}
export interface AssetMetadata {
    ibcInfo?: AssetIBCInfo;
    /** Ex: cw20, ics20, erc20 */
    typeAsset: string;
    metadata: Metadata;
}
export interface AssetMetadataProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.AssetMetadata";
    value: Uint8Array;
}
export interface AssetMetadataAmino {
    ibcInfo?: AssetIBCInfoAmino;
    /** Ex: cw20, ics20, erc20 */
    type_asset?: string;
    metadata?: MetadataAmino;
}
export interface AssetMetadataAminoMsg {
    type: "/seiprotocol.seichain.dex.AssetMetadata";
    value: AssetMetadataAmino;
}
export interface AssetMetadataSDKType {
    ibcInfo?: AssetIBCInfoSDKType;
    type_asset: string;
    metadata: MetadataSDKType;
}
export declare const AssetIBCInfo: {
    typeUrl: string;
    encode(message: AssetIBCInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetIBCInfo;
    fromJSON(object: any): AssetIBCInfo;
    toJSON(message: AssetIBCInfo): unknown;
    fromPartial(object: Partial<AssetIBCInfo>): AssetIBCInfo;
    fromAmino(object: AssetIBCInfoAmino): AssetIBCInfo;
    toAmino(message: AssetIBCInfo): AssetIBCInfoAmino;
    fromAminoMsg(object: AssetIBCInfoAminoMsg): AssetIBCInfo;
    fromProtoMsg(message: AssetIBCInfoProtoMsg): AssetIBCInfo;
    toProto(message: AssetIBCInfo): Uint8Array;
    toProtoMsg(message: AssetIBCInfo): AssetIBCInfoProtoMsg;
};
export declare const AssetMetadata: {
    typeUrl: string;
    encode(message: AssetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMetadata;
    fromJSON(object: any): AssetMetadata;
    toJSON(message: AssetMetadata): unknown;
    fromPartial(object: Partial<AssetMetadata>): AssetMetadata;
    fromAmino(object: AssetMetadataAmino): AssetMetadata;
    toAmino(message: AssetMetadata): AssetMetadataAmino;
    fromAminoMsg(object: AssetMetadataAminoMsg): AssetMetadata;
    fromProtoMsg(message: AssetMetadataProtoMsg): AssetMetadata;
    toProto(message: AssetMetadata): Uint8Array;
    toProtoMsg(message: AssetMetadata): AssetMetadataProtoMsg;
};
