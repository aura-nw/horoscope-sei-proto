import * as _m0 from "protobufjs/minimal";
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
    key: Uint8Array;
}
export interface PubKeyProtoMsg {
    typeUrl: "/cosmos.crypto.sr25519.PubKey";
    value: Uint8Array;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeyAmino {
    key?: string;
}
export interface PubKeyAminoMsg {
    type: "cosmos-sdk/PubKey";
    value: PubKeyAmino;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeySDKType {
    key: Uint8Array;
}
export declare const PubKey: {
    typeUrl: string;
    encode(message: PubKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKey;
    fromJSON(object: any): PubKey;
    toJSON(message: PubKey): unknown;
    fromPartial(object: Partial<PubKey>): PubKey;
    fromAmino(object: PubKeyAmino): PubKey;
    toAmino(message: PubKey): PubKeyAmino;
    fromAminoMsg(object: PubKeyAminoMsg): PubKey;
    toAminoMsg(message: PubKey): PubKeyAminoMsg;
    fromProtoMsg(message: PubKeyProtoMsg): PubKey;
    toProto(message: PubKey): Uint8Array;
    toProtoMsg(message: PubKey): PubKeyProtoMsg;
};
