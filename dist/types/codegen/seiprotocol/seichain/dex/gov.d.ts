import { AssetMetadata, AssetMetadataAmino, AssetMetadataSDKType } from "./asset_list";
import * as _m0 from "protobufjs/minimal";
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface AddAssetMetadataProposal {
    title: string;
    description: string;
    assetList: AssetMetadata[];
}
export interface AddAssetMetadataProposalProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.AddAssetMetadataProposal";
    value: Uint8Array;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface AddAssetMetadataProposalAmino {
    title?: string;
    description?: string;
    assetList?: AssetMetadataAmino[];
}
export interface AddAssetMetadataProposalAminoMsg {
    type: "/seiprotocol.seichain.dex.AddAssetMetadataProposal";
    value: AddAssetMetadataProposalAmino;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface AddAssetMetadataProposalSDKType {
    title: string;
    description: string;
    assetList: AssetMetadataSDKType[];
}
export declare const AddAssetMetadataProposal: {
    typeUrl: string;
    encode(message: AddAssetMetadataProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAssetMetadataProposal;
    fromJSON(object: any): AddAssetMetadataProposal;
    toJSON(message: AddAssetMetadataProposal): unknown;
    fromPartial(object: Partial<AddAssetMetadataProposal>): AddAssetMetadataProposal;
    fromAmino(object: AddAssetMetadataProposalAmino): AddAssetMetadataProposal;
    toAmino(message: AddAssetMetadataProposal): AddAssetMetadataProposalAmino;
    fromAminoMsg(object: AddAssetMetadataProposalAminoMsg): AddAssetMetadataProposal;
    fromProtoMsg(message: AddAssetMetadataProposalProtoMsg): AddAssetMetadataProposal;
    toProto(message: AddAssetMetadataProposal): Uint8Array;
    toProtoMsg(message: AddAssetMetadataProposal): AddAssetMetadataProposalProtoMsg;
};
