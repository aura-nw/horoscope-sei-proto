import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
export interface GenericAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
    value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationAmino {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg?: string;
}
export interface GenericAuthorizationAminoMsg {
    type: "cosmos-sdk/GenericAuthorization";
    value: GenericAuthorizationAmino;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationSDKType {
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
    authorization?: Any;
    expiration: Date;
}
export interface GrantProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.Grant";
    value: Uint8Array;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantAmino {
    authorization?: AnyAmino;
    expiration?: string;
}
export interface GrantAminoMsg {
    type: "cosmos-sdk/Grant";
    value: GrantAmino;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantSDKType {
    authorization?: AnySDKType;
    expiration: Date;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization?: Any;
    expiration: Date;
}
export interface GrantAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
    value: Uint8Array;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorizationAmino {
    granter?: string;
    grantee?: string;
    authorization?: AnyAmino;
    expiration?: string;
}
export interface GrantAuthorizationAminoMsg {
    type: "cosmos-sdk/GrantAuthorization";
    value: GrantAuthorizationAmino;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorizationSDKType {
    granter: string;
    grantee: string;
    authorization?: AnySDKType;
    expiration: Date;
}
export declare const GenericAuthorization: {
    typeUrl: string;
    encode(message: GenericAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenericAuthorization;
    fromJSON(object: any): GenericAuthorization;
    toJSON(message: GenericAuthorization): unknown;
    fromPartial(object: Partial<GenericAuthorization>): GenericAuthorization;
    fromAmino(object: GenericAuthorizationAmino): GenericAuthorization;
    toAmino(message: GenericAuthorization): GenericAuthorizationAmino;
    fromAminoMsg(object: GenericAuthorizationAminoMsg): GenericAuthorization;
    toAminoMsg(message: GenericAuthorization): GenericAuthorizationAminoMsg;
    fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization;
    toProto(message: GenericAuthorization): Uint8Array;
    toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg;
};
export declare const Grant: {
    typeUrl: string;
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    fromPartial(object: Partial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
    fromAminoMsg(object: GrantAminoMsg): Grant;
    toAminoMsg(message: Grant): GrantAminoMsg;
    fromProtoMsg(message: GrantProtoMsg): Grant;
    toProto(message: Grant): Uint8Array;
    toProtoMsg(message: Grant): GrantProtoMsg;
};
export declare const GrantAuthorization: {
    typeUrl: string;
    encode(message: GrantAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantAuthorization;
    fromJSON(object: any): GrantAuthorization;
    toJSON(message: GrantAuthorization): unknown;
    fromPartial(object: Partial<GrantAuthorization>): GrantAuthorization;
    fromAmino(object: GrantAuthorizationAmino): GrantAuthorization;
    toAmino(message: GrantAuthorization): GrantAuthorizationAmino;
    fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization;
    toAminoMsg(message: GrantAuthorization): GrantAuthorizationAminoMsg;
    fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization;
    toProto(message: GrantAuthorization): Uint8Array;
    toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg;
};
