import { Minter, MinterAmino, MinterSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposal {
    title: string;
    description: string;
    minter?: Minter;
}
export interface UpdateMinterProposalProtoMsg {
    typeUrl: "/seiprotocol.seichain.mint.UpdateMinterProposal";
    value: Uint8Array;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposalAmino {
    title?: string;
    description?: string;
    minter?: MinterAmino;
}
export interface UpdateMinterProposalAminoMsg {
    type: "/seiprotocol.seichain.mint.UpdateMinterProposal";
    value: UpdateMinterProposalAmino;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposalSDKType {
    title: string;
    description: string;
    minter?: MinterSDKType;
}
export declare const UpdateMinterProposal: {
    typeUrl: string;
    encode(message: UpdateMinterProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMinterProposal;
    fromJSON(object: any): UpdateMinterProposal;
    toJSON(message: UpdateMinterProposal): unknown;
    fromPartial(object: Partial<UpdateMinterProposal>): UpdateMinterProposal;
    fromAmino(object: UpdateMinterProposalAmino): UpdateMinterProposal;
    toAmino(message: UpdateMinterProposal): UpdateMinterProposalAmino;
    fromAminoMsg(object: UpdateMinterProposalAminoMsg): UpdateMinterProposal;
    fromProtoMsg(message: UpdateMinterProposalProtoMsg): UpdateMinterProposal;
    toProto(message: UpdateMinterProposal): Uint8Array;
    toProtoMsg(message: UpdateMinterProposal): UpdateMinterProposalProtoMsg;
};
