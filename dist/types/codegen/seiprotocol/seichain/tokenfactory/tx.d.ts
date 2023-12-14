import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
export interface MsgCreateDenomProtoMsg {
    typeUrl: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom";
    value: Uint8Array;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomAmino {
    sender?: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom?: string;
}
export interface MsgCreateDenomAminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom";
    value: MsgCreateDenomAmino;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomSDKType {
    sender: string;
    subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    newTokenDenom: string;
}
export interface MsgCreateDenomResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.tokenfactory.MsgCreateDenomResponse";
    value: Uint8Array;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseAmino {
    new_token_denom?: string;
}
export interface MsgCreateDenomResponseAminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgCreateDenomResponse";
    value: MsgCreateDenomResponseAmino;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseSDKType {
    new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
    sender: string;
    amount: Coin;
}
export interface MsgMintProtoMsg {
    typeUrl: "/seiprotocol.seichain.tokenfactory.MsgMint";
    value: Uint8Array;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintAmino {
    sender?: string;
    amount?: CoinAmino;
}
export interface MsgMintAminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgMint";
    value: MsgMintAmino;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintSDKType {
    sender: string;
    amount: CoinSDKType;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.tokenfactory.MsgMintResponse";
    value: Uint8Array;
}
export interface MsgMintResponseAmino {
}
export interface MsgMintResponseAminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgMintResponse";
    value: MsgMintResponseAmino;
}
export interface MsgMintResponseSDKType {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
    sender: string;
    amount: Coin;
}
export interface MsgBurnProtoMsg {
    typeUrl: "/seiprotocol.seichain.tokenfactory.MsgBurn";
    value: Uint8Array;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnAmino {
    sender?: string;
    amount?: CoinAmino;
}
export interface MsgBurnAminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgBurn";
    value: MsgBurnAmino;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
    sender: string;
    amount: CoinSDKType;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.tokenfactory.MsgBurnResponse";
    value: Uint8Array;
}
export interface MsgBurnResponseAmino {
}
export interface MsgBurnResponseAminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgBurnResponse";
    value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
export interface MsgChangeAdminProtoMsg {
    typeUrl: "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin";
    value: Uint8Array;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminAmino {
    sender?: string;
    denom?: string;
    new_admin?: string;
}
export interface MsgChangeAdminAminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin";
    value: MsgChangeAdminAmino;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminSDKType {
    sender: string;
    denom: string;
    new_admin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponse {
}
export interface MsgChangeAdminResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.tokenfactory.MsgChangeAdminResponse";
    value: Uint8Array;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseAmino {
}
export interface MsgChangeAdminResponseAminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgChangeAdminResponse";
    value: MsgChangeAdminResponseAmino;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseSDKType {
}
export declare const MsgCreateDenom: {
    typeUrl: string;
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: Partial<MsgCreateDenom>): MsgCreateDenom;
    fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom;
    toAmino(message: MsgCreateDenom): MsgCreateDenomAmino;
    fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom;
    fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom;
    toProto(message: MsgCreateDenom): Uint8Array;
    toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg;
};
export declare const MsgCreateDenomResponse: {
    typeUrl: string;
    encode(message: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromJSON(object: any): MsgCreateDenomResponse;
    toJSON(message: MsgCreateDenomResponse): unknown;
    fromPartial(object: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
    fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse;
    toAmino(message: MsgCreateDenomResponse): MsgCreateDenomResponseAmino;
    fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse;
    fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse;
    toProto(message: MsgCreateDenomResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg;
};
export declare const MsgMint: {
    typeUrl: string;
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: Partial<MsgMint>): MsgMint;
    fromAmino(object: MsgMintAmino): MsgMint;
    toAmino(message: MsgMint): MsgMintAmino;
    fromAminoMsg(object: MsgMintAminoMsg): MsgMint;
    fromProtoMsg(message: MsgMintProtoMsg): MsgMint;
    toProto(message: MsgMint): Uint8Array;
    toProtoMsg(message: MsgMint): MsgMintProtoMsg;
};
export declare const MsgMintResponse: {
    typeUrl: string;
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse;
    fromAmino(_: MsgMintResponseAmino): MsgMintResponse;
    toAmino(_: MsgMintResponse): MsgMintResponseAmino;
    fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse;
    fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse;
    toProto(message: MsgMintResponse): Uint8Array;
    toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg;
};
export declare const MsgBurn: {
    typeUrl: string;
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: Partial<MsgBurn>): MsgBurn;
    fromAmino(object: MsgBurnAmino): MsgBurn;
    toAmino(message: MsgBurn): MsgBurnAmino;
    fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn;
    fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn;
    toProto(message: MsgBurn): Uint8Array;
    toProtoMsg(message: MsgBurn): MsgBurnProtoMsg;
};
export declare const MsgBurnResponse: {
    typeUrl: string;
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse;
    fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse;
    toAmino(_: MsgBurnResponse): MsgBurnResponseAmino;
    fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse;
    fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse;
    toProto(message: MsgBurnResponse): Uint8Array;
    toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg;
};
export declare const MsgChangeAdmin: {
    typeUrl: string;
    encode(message: MsgChangeAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdmin;
    fromJSON(object: any): MsgChangeAdmin;
    toJSON(message: MsgChangeAdmin): unknown;
    fromPartial(object: Partial<MsgChangeAdmin>): MsgChangeAdmin;
    fromAmino(object: MsgChangeAdminAmino): MsgChangeAdmin;
    toAmino(message: MsgChangeAdmin): MsgChangeAdminAmino;
    fromAminoMsg(object: MsgChangeAdminAminoMsg): MsgChangeAdmin;
    fromProtoMsg(message: MsgChangeAdminProtoMsg): MsgChangeAdmin;
    toProto(message: MsgChangeAdmin): Uint8Array;
    toProtoMsg(message: MsgChangeAdmin): MsgChangeAdminProtoMsg;
};
export declare const MsgChangeAdminResponse: {
    typeUrl: string;
    encode(_: MsgChangeAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdminResponse;
    fromJSON(_: any): MsgChangeAdminResponse;
    toJSON(_: MsgChangeAdminResponse): unknown;
    fromPartial(_: Partial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
    fromAmino(_: MsgChangeAdminResponseAmino): MsgChangeAdminResponse;
    toAmino(_: MsgChangeAdminResponse): MsgChangeAdminResponseAmino;
    fromAminoMsg(object: MsgChangeAdminResponseAminoMsg): MsgChangeAdminResponse;
    fromProtoMsg(message: MsgChangeAdminResponseProtoMsg): MsgChangeAdminResponse;
    toProto(message: MsgChangeAdminResponse): Uint8Array;
    toProtoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseProtoMsg;
};
