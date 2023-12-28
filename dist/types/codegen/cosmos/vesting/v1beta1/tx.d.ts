import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    endTime: Long;
    delayed: boolean;
    admin: string;
}
export interface MsgCreateVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
    from_address?: string;
    to_address?: string;
    amount?: CoinAmino[];
    end_time?: string;
    delayed?: boolean;
    admin?: string;
}
export interface MsgCreateVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccount";
    value: MsgCreateVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
    end_time: Long;
    delayed: boolean;
    admin: string;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
export interface MsgCreateVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
    value: Uint8Array;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseAmino {
}
export interface MsgCreateVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccountResponse";
    value: MsgCreateVestingAccountResponseAmino;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {
}
export declare const MsgCreateVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreateVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccount;
    fromJSON(object: any): MsgCreateVestingAccount;
    toJSON(message: MsgCreateVestingAccount): unknown;
    fromPartial(object: Partial<MsgCreateVestingAccount>): MsgCreateVestingAccount;
    fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount;
    toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino;
    fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount;
    toAminoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount;
    toProto(message: MsgCreateVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg;
};
export declare const MsgCreateVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgCreateVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccountResponse;
    fromJSON(_: any): MsgCreateVestingAccountResponse;
    toJSON(_: MsgCreateVestingAccountResponse): unknown;
    fromPartial(_: Partial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse;
    fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse;
    toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse;
    toAminoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse;
    toProto(message: MsgCreateVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg;
};
