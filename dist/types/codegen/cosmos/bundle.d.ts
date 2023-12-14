import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./crypto/multisig/keys";
import * as _23 from "./crypto/secp256k1/keys";
import * as _24 from "./crypto/secp256r1/keys";
import * as _25 from "./distribution/v1beta1/distribution";
import * as _26 from "./distribution/v1beta1/genesis";
import * as _27 from "./distribution/v1beta1/query";
import * as _28 from "./distribution/v1beta1/tx";
import * as _29 from "./gov/v1beta1/genesis";
import * as _30 from "./gov/v1beta1/gov";
import * as _31 from "./gov/v1beta1/query";
import * as _32 from "./gov/v1beta1/tx";
import * as _33 from "./staking/v1beta1/authz";
import * as _34 from "./staking/v1beta1/genesis";
import * as _35 from "./staking/v1beta1/query";
import * as _36 from "./staking/v1beta1/staking";
import * as _37 from "./staking/v1beta1/tx";
import * as _38 from "./tx/signing/v1beta1/signing";
import * as _39 from "./tx/v1beta1/service";
import * as _40 from "./tx/v1beta1/tx";
import * as _41 from "./upgrade/v1beta1/query";
import * as _42 from "./upgrade/v1beta1/tx";
import * as _43 from "./upgrade/v1beta1/upgrade";
import * as _138 from "./auth/v1beta1/query.lcd";
import * as _139 from "./authz/v1beta1/query.lcd";
import * as _140 from "./bank/v1beta1/query.lcd";
import * as _141 from "./distribution/v1beta1/query.lcd";
import * as _142 from "./gov/v1beta1/query.lcd";
import * as _143 from "./staking/v1beta1/query.lcd";
import * as _144 from "./tx/v1beta1/service.lcd";
import * as _145 from "./upgrade/v1beta1/query.lcd";
import * as _146 from "./auth/v1beta1/query.rpc.Query";
import * as _147 from "./authz/v1beta1/query.rpc.Query";
import * as _148 from "./bank/v1beta1/query.rpc.Query";
import * as _149 from "./distribution/v1beta1/query.rpc.Query";
import * as _150 from "./gov/v1beta1/query.rpc.Query";
import * as _151 from "./staking/v1beta1/query.rpc.Query";
import * as _152 from "./tx/v1beta1/service.rpc.Service";
import * as _153 from "./upgrade/v1beta1/query.rpc.Query";
import * as _154 from "./authz/v1beta1/tx.rpc.msg";
import * as _155 from "./bank/v1beta1/tx.rpc.msg";
import * as _156 from "./distribution/v1beta1/tx.rpc.msg";
import * as _157 from "./gov/v1beta1/tx.rpc.msg";
import * as _158 from "./staking/v1beta1/tx.rpc.msg";
import * as _159 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                moduleAccounts(request?: _4.QueryModuleAccountsRequest): Promise<_4.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _4.Bech32PrefixRequest): Promise<_4.Bech32PrefixResponse>;
                addressBytesToString(request: _4.AddressBytesToStringRequest): Promise<_4.AddressBytesToStringResponse>;
                addressStringToBytes(request: _4.AddressStringToBytesRequest): Promise<_4.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _138.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _4.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountsRequest;
                fromJSON(object: any): _4.QueryAccountsRequest;
                toJSON(message: _4.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_4.QueryAccountsRequest>): _4.QueryAccountsRequest;
                fromAmino(object: _4.QueryAccountsRequestAmino): _4.QueryAccountsRequest;
                toAmino(message: _4.QueryAccountsRequest): _4.QueryAccountsRequestAmino;
                fromAminoMsg(object: _4.QueryAccountsRequestAminoMsg): _4.QueryAccountsRequest;
                toAminoMsg(message: _4.QueryAccountsRequest): _4.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryAccountsRequestProtoMsg): _4.QueryAccountsRequest;
                toProto(message: _4.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryAccountsRequest): _4.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _4.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountsResponse;
                fromJSON(object: any): _4.QueryAccountsResponse;
                toJSON(message: _4.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_4.QueryAccountsResponse>): _4.QueryAccountsResponse;
                fromAmino(object: _4.QueryAccountsResponseAmino): _4.QueryAccountsResponse;
                toAmino(message: _4.QueryAccountsResponse): _4.QueryAccountsResponseAmino;
                fromAminoMsg(object: _4.QueryAccountsResponseAminoMsg): _4.QueryAccountsResponse;
                toAminoMsg(message: _4.QueryAccountsResponse): _4.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryAccountsResponseProtoMsg): _4.QueryAccountsResponse;
                toProto(message: _4.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryAccountsResponse): _4.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _4.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountRequest;
                fromJSON(object: any): _4.QueryAccountRequest;
                toJSON(message: _4.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_4.QueryAccountRequest>): _4.QueryAccountRequest;
                fromAmino(object: _4.QueryAccountRequestAmino): _4.QueryAccountRequest;
                toAmino(message: _4.QueryAccountRequest): _4.QueryAccountRequestAmino;
                fromAminoMsg(object: _4.QueryAccountRequestAminoMsg): _4.QueryAccountRequest;
                toAminoMsg(message: _4.QueryAccountRequest): _4.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _4.QueryAccountRequestProtoMsg): _4.QueryAccountRequest;
                toProto(message: _4.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _4.QueryAccountRequest): _4.QueryAccountRequestProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _4.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryModuleAccountsRequest;
                fromJSON(_: any): _4.QueryModuleAccountsRequest;
                toJSON(_: _4.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_4.QueryModuleAccountsRequest>): _4.QueryModuleAccountsRequest;
                fromAmino(_: _4.QueryModuleAccountsRequestAmino): _4.QueryModuleAccountsRequest;
                toAmino(_: _4.QueryModuleAccountsRequest): _4.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _4.QueryModuleAccountsRequestAminoMsg): _4.QueryModuleAccountsRequest;
                toAminoMsg(message: _4.QueryModuleAccountsRequest): _4.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryModuleAccountsRequestProtoMsg): _4.QueryModuleAccountsRequest;
                toProto(message: _4.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryModuleAccountsRequest): _4.QueryModuleAccountsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsResponse;
                fromJSON(object: any): _4.QueryParamsResponse;
                toJSON(message: _4.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
                fromAmino(object: _4.QueryParamsResponseAmino): _4.QueryParamsResponse;
                toAmino(message: _4.QueryParamsResponse): _4.QueryParamsResponseAmino;
                fromAminoMsg(object: _4.QueryParamsResponseAminoMsg): _4.QueryParamsResponse;
                toAminoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryParamsResponseProtoMsg): _4.QueryParamsResponse;
                toProto(message: _4.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _4.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountResponse;
                fromJSON(object: any): _4.QueryAccountResponse;
                toJSON(message: _4.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_4.QueryAccountResponse>): _4.QueryAccountResponse;
                fromAmino(object: _4.QueryAccountResponseAmino): _4.QueryAccountResponse;
                toAmino(message: _4.QueryAccountResponse): _4.QueryAccountResponseAmino;
                fromAminoMsg(object: _4.QueryAccountResponseAminoMsg): _4.QueryAccountResponse;
                toAminoMsg(message: _4.QueryAccountResponse): _4.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _4.QueryAccountResponseProtoMsg): _4.QueryAccountResponse;
                toProto(message: _4.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _4.QueryAccountResponse): _4.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsRequest;
                fromJSON(_: any): _4.QueryParamsRequest;
                toJSON(_: _4.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
                fromAmino(_: _4.QueryParamsRequestAmino): _4.QueryParamsRequest;
                toAmino(_: _4.QueryParamsRequest): _4.QueryParamsRequestAmino;
                fromAminoMsg(object: _4.QueryParamsRequestAminoMsg): _4.QueryParamsRequest;
                toAminoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryParamsRequestProtoMsg): _4.QueryParamsRequest;
                toProto(message: _4.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _4.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryModuleAccountsResponse;
                fromJSON(object: any): _4.QueryModuleAccountsResponse;
                toJSON(message: _4.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_4.QueryModuleAccountsResponse>): _4.QueryModuleAccountsResponse;
                fromAmino(object: _4.QueryModuleAccountsResponseAmino): _4.QueryModuleAccountsResponse;
                toAmino(message: _4.QueryModuleAccountsResponse): _4.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _4.QueryModuleAccountsResponseAminoMsg): _4.QueryModuleAccountsResponse;
                toAminoMsg(message: _4.QueryModuleAccountsResponse): _4.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryModuleAccountsResponseProtoMsg): _4.QueryModuleAccountsResponse;
                toProto(message: _4.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryModuleAccountsResponse): _4.QueryModuleAccountsResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _4.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Bech32PrefixRequest;
                fromJSON(_: any): _4.Bech32PrefixRequest;
                toJSON(_: _4.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_4.Bech32PrefixRequest>): _4.Bech32PrefixRequest;
                fromAmino(_: _4.Bech32PrefixRequestAmino): _4.Bech32PrefixRequest;
                toAmino(_: _4.Bech32PrefixRequest): _4.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _4.Bech32PrefixRequestAminoMsg): _4.Bech32PrefixRequest;
                toAminoMsg(message: _4.Bech32PrefixRequest): _4.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _4.Bech32PrefixRequestProtoMsg): _4.Bech32PrefixRequest;
                toProto(message: _4.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _4.Bech32PrefixRequest): _4.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _4.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Bech32PrefixResponse;
                fromJSON(object: any): _4.Bech32PrefixResponse;
                toJSON(message: _4.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_4.Bech32PrefixResponse>): _4.Bech32PrefixResponse;
                fromAmino(object: _4.Bech32PrefixResponseAmino): _4.Bech32PrefixResponse;
                toAmino(message: _4.Bech32PrefixResponse): _4.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _4.Bech32PrefixResponseAminoMsg): _4.Bech32PrefixResponse;
                toAminoMsg(message: _4.Bech32PrefixResponse): _4.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _4.Bech32PrefixResponseProtoMsg): _4.Bech32PrefixResponse;
                toProto(message: _4.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _4.Bech32PrefixResponse): _4.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _4.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AddressBytesToStringRequest;
                fromJSON(object: any): _4.AddressBytesToStringRequest;
                toJSON(message: _4.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_4.AddressBytesToStringRequest>): _4.AddressBytesToStringRequest;
                fromAmino(object: _4.AddressBytesToStringRequestAmino): _4.AddressBytesToStringRequest;
                toAmino(message: _4.AddressBytesToStringRequest): _4.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _4.AddressBytesToStringRequestAminoMsg): _4.AddressBytesToStringRequest;
                toAminoMsg(message: _4.AddressBytesToStringRequest): _4.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _4.AddressBytesToStringRequestProtoMsg): _4.AddressBytesToStringRequest;
                toProto(message: _4.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _4.AddressBytesToStringRequest): _4.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _4.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AddressBytesToStringResponse;
                fromJSON(object: any): _4.AddressBytesToStringResponse;
                toJSON(message: _4.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_4.AddressBytesToStringResponse>): _4.AddressBytesToStringResponse;
                fromAmino(object: _4.AddressBytesToStringResponseAmino): _4.AddressBytesToStringResponse;
                toAmino(message: _4.AddressBytesToStringResponse): _4.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _4.AddressBytesToStringResponseAminoMsg): _4.AddressBytesToStringResponse;
                toAminoMsg(message: _4.AddressBytesToStringResponse): _4.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _4.AddressBytesToStringResponseProtoMsg): _4.AddressBytesToStringResponse;
                toProto(message: _4.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _4.AddressBytesToStringResponse): _4.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _4.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AddressStringToBytesRequest;
                fromJSON(object: any): _4.AddressStringToBytesRequest;
                toJSON(message: _4.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_4.AddressStringToBytesRequest>): _4.AddressStringToBytesRequest;
                fromAmino(object: _4.AddressStringToBytesRequestAmino): _4.AddressStringToBytesRequest;
                toAmino(message: _4.AddressStringToBytesRequest): _4.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _4.AddressStringToBytesRequestAminoMsg): _4.AddressStringToBytesRequest;
                toAminoMsg(message: _4.AddressStringToBytesRequest): _4.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _4.AddressStringToBytesRequestProtoMsg): _4.AddressStringToBytesRequest;
                toProto(message: _4.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _4.AddressStringToBytesRequest): _4.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _4.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AddressStringToBytesResponse;
                fromJSON(object: any): _4.AddressStringToBytesResponse;
                toJSON(message: _4.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_4.AddressStringToBytesResponse>): _4.AddressStringToBytesResponse;
                fromAmino(object: _4.AddressStringToBytesResponseAmino): _4.AddressStringToBytesResponse;
                toAmino(message: _4.AddressStringToBytesResponse): _4.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _4.AddressStringToBytesResponseAminoMsg): _4.AddressStringToBytesResponse;
                toAminoMsg(message: _4.AddressStringToBytesResponse): _4.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _4.AddressStringToBytesResponseProtoMsg): _4.AddressStringToBytesResponse;
                toProto(message: _4.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _4.AddressStringToBytesResponse): _4.AddressStringToBytesResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _2.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _2.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromJSON(object: any): _3.GenesisState;
                toJSON(message: _3.GenesisState): unknown;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                toAminoMsg(message: _3.GenesisState): _3.GenesisStateAminoMsg;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _2.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BaseAccount;
                fromJSON(object: any): _2.BaseAccount;
                toJSON(message: _2.BaseAccount): unknown;
                fromPartial(object: Partial<_2.BaseAccount>): _2.BaseAccount;
                fromAmino(object: _2.BaseAccountAmino): _2.BaseAccount;
                toAmino(message: _2.BaseAccount): _2.BaseAccountAmino;
                fromAminoMsg(object: _2.BaseAccountAminoMsg): _2.BaseAccount;
                toAminoMsg(message: _2.BaseAccount): _2.BaseAccountAminoMsg;
                fromProtoMsg(message: _2.BaseAccountProtoMsg): _2.BaseAccount;
                toProto(message: _2.BaseAccount): Uint8Array;
                toProtoMsg(message: _2.BaseAccount): _2.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _2.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleAccount;
                fromJSON(object: any): _2.ModuleAccount;
                toJSON(message: _2.ModuleAccount): unknown;
                fromPartial(object: Partial<_2.ModuleAccount>): _2.ModuleAccount;
                fromAmino(object: _2.ModuleAccountAmino): _2.ModuleAccount;
                toAmino(message: _2.ModuleAccount): _2.ModuleAccountAmino;
                fromAminoMsg(object: _2.ModuleAccountAminoMsg): _2.ModuleAccount;
                toAminoMsg(message: _2.ModuleAccount): _2.ModuleAccountAminoMsg;
                fromProtoMsg(message: _2.ModuleAccountProtoMsg): _2.ModuleAccount;
                toProto(message: _2.ModuleAccount): Uint8Array;
                toProtoMsg(message: _2.ModuleAccount): _2.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromJSON(object: any): _2.Params;
                toJSON(message: _2.Params): unknown;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                toAminoMsg(message: _2.Params): _2.ParamsAminoMsg;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _154.MsgClientImpl;
            QueryClientImpl: typeof _147.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _139.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _9.MsgGrant) => _9.MsgGrantAmino;
                    fromAmino: (object: _9.MsgGrantAmino) => _9.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _9.MsgExec) => _9.MsgExecAmino;
                    fromAmino: (object: _9.MsgExecAmino) => _9.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _9.MsgRevoke) => _9.MsgRevokeAmino;
                    fromAmino: (object: _9.MsgRevokeAmino) => _9.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _9.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgGrant;
                fromJSON(object: any): _9.MsgGrant;
                toJSON(message: _9.MsgGrant): unknown;
                fromPartial(object: Partial<_9.MsgGrant>): _9.MsgGrant;
                fromAmino(object: _9.MsgGrantAmino): _9.MsgGrant;
                toAmino(message: _9.MsgGrant): _9.MsgGrantAmino;
                fromAminoMsg(object: _9.MsgGrantAminoMsg): _9.MsgGrant;
                toAminoMsg(message: _9.MsgGrant): _9.MsgGrantAminoMsg;
                fromProtoMsg(message: _9.MsgGrantProtoMsg): _9.MsgGrant;
                toProto(message: _9.MsgGrant): Uint8Array;
                toProtoMsg(message: _9.MsgGrant): _9.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _9.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExecResponse;
                fromJSON(object: any): _9.MsgExecResponse;
                toJSON(message: _9.MsgExecResponse): unknown;
                fromPartial(object: Partial<_9.MsgExecResponse>): _9.MsgExecResponse;
                fromAmino(object: _9.MsgExecResponseAmino): _9.MsgExecResponse;
                toAmino(message: _9.MsgExecResponse): _9.MsgExecResponseAmino;
                fromAminoMsg(object: _9.MsgExecResponseAminoMsg): _9.MsgExecResponse;
                toAminoMsg(message: _9.MsgExecResponse): _9.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _9.MsgExecResponseProtoMsg): _9.MsgExecResponse;
                toProto(message: _9.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _9.MsgExecResponse): _9.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _9.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExec;
                fromJSON(object: any): _9.MsgExec;
                toJSON(message: _9.MsgExec): unknown;
                fromPartial(object: Partial<_9.MsgExec>): _9.MsgExec;
                fromAmino(object: _9.MsgExecAmino): _9.MsgExec;
                toAmino(message: _9.MsgExec): _9.MsgExecAmino;
                fromAminoMsg(object: _9.MsgExecAminoMsg): _9.MsgExec;
                toAminoMsg(message: _9.MsgExec): _9.MsgExecAminoMsg;
                fromProtoMsg(message: _9.MsgExecProtoMsg): _9.MsgExec;
                toProto(message: _9.MsgExec): Uint8Array;
                toProtoMsg(message: _9.MsgExec): _9.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _9.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgGrantResponse;
                fromJSON(_: any): _9.MsgGrantResponse;
                toJSON(_: _9.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_9.MsgGrantResponse>): _9.MsgGrantResponse;
                fromAmino(_: _9.MsgGrantResponseAmino): _9.MsgGrantResponse;
                toAmino(_: _9.MsgGrantResponse): _9.MsgGrantResponseAmino;
                fromAminoMsg(object: _9.MsgGrantResponseAminoMsg): _9.MsgGrantResponse;
                toAminoMsg(message: _9.MsgGrantResponse): _9.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _9.MsgGrantResponseProtoMsg): _9.MsgGrantResponse;
                toProto(message: _9.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _9.MsgGrantResponse): _9.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _9.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgRevoke;
                fromJSON(object: any): _9.MsgRevoke;
                toJSON(message: _9.MsgRevoke): unknown;
                fromPartial(object: Partial<_9.MsgRevoke>): _9.MsgRevoke;
                fromAmino(object: _9.MsgRevokeAmino): _9.MsgRevoke;
                toAmino(message: _9.MsgRevoke): _9.MsgRevokeAmino;
                fromAminoMsg(object: _9.MsgRevokeAminoMsg): _9.MsgRevoke;
                toAminoMsg(message: _9.MsgRevoke): _9.MsgRevokeAminoMsg;
                fromProtoMsg(message: _9.MsgRevokeProtoMsg): _9.MsgRevoke;
                toProto(message: _9.MsgRevoke): Uint8Array;
                toProtoMsg(message: _9.MsgRevoke): _9.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _9.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgRevokeResponse;
                fromJSON(_: any): _9.MsgRevokeResponse;
                toJSON(_: _9.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_9.MsgRevokeResponse>): _9.MsgRevokeResponse;
                fromAmino(_: _9.MsgRevokeResponseAmino): _9.MsgRevokeResponse;
                toAmino(_: _9.MsgRevokeResponse): _9.MsgRevokeResponseAmino;
                fromAminoMsg(object: _9.MsgRevokeResponseAminoMsg): _9.MsgRevokeResponse;
                toAminoMsg(message: _9.MsgRevokeResponse): _9.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _9.MsgRevokeResponseProtoMsg): _9.MsgRevokeResponse;
                toProto(message: _9.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _9.MsgRevokeResponse): _9.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _8.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGrantsRequest;
                fromJSON(object: any): _8.QueryGrantsRequest;
                toJSON(message: _8.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_8.QueryGrantsRequest>): _8.QueryGrantsRequest;
                fromAmino(object: _8.QueryGrantsRequestAmino): _8.QueryGrantsRequest;
                toAmino(message: _8.QueryGrantsRequest): _8.QueryGrantsRequestAmino;
                fromAminoMsg(object: _8.QueryGrantsRequestAminoMsg): _8.QueryGrantsRequest;
                toAminoMsg(message: _8.QueryGrantsRequest): _8.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryGrantsRequestProtoMsg): _8.QueryGrantsRequest;
                toProto(message: _8.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGrantsRequest): _8.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _8.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGrantsResponse;
                fromJSON(object: any): _8.QueryGrantsResponse;
                toJSON(message: _8.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_8.QueryGrantsResponse>): _8.QueryGrantsResponse;
                fromAmino(object: _8.QueryGrantsResponseAmino): _8.QueryGrantsResponse;
                toAmino(message: _8.QueryGrantsResponse): _8.QueryGrantsResponseAmino;
                fromAminoMsg(object: _8.QueryGrantsResponseAminoMsg): _8.QueryGrantsResponse;
                toAminoMsg(message: _8.QueryGrantsResponse): _8.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryGrantsResponseProtoMsg): _8.QueryGrantsResponse;
                toProto(message: _8.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGrantsResponse): _8.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _8.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranterGrantsRequest;
                fromJSON(object: any): _8.QueryGranterGrantsRequest;
                toJSON(message: _8.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_8.QueryGranterGrantsRequest>): _8.QueryGranterGrantsRequest;
                fromAmino(object: _8.QueryGranterGrantsRequestAmino): _8.QueryGranterGrantsRequest;
                toAmino(message: _8.QueryGranterGrantsRequest): _8.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _8.QueryGranterGrantsRequestAminoMsg): _8.QueryGranterGrantsRequest;
                toAminoMsg(message: _8.QueryGranterGrantsRequest): _8.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryGranterGrantsRequestProtoMsg): _8.QueryGranterGrantsRequest;
                toProto(message: _8.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGranterGrantsRequest): _8.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _8.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranterGrantsResponse;
                fromJSON(object: any): _8.QueryGranterGrantsResponse;
                toJSON(message: _8.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_8.QueryGranterGrantsResponse>): _8.QueryGranterGrantsResponse;
                fromAmino(object: _8.QueryGranterGrantsResponseAmino): _8.QueryGranterGrantsResponse;
                toAmino(message: _8.QueryGranterGrantsResponse): _8.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _8.QueryGranterGrantsResponseAminoMsg): _8.QueryGranterGrantsResponse;
                toAminoMsg(message: _8.QueryGranterGrantsResponse): _8.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryGranterGrantsResponseProtoMsg): _8.QueryGranterGrantsResponse;
                toProto(message: _8.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGranterGrantsResponse): _8.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _8.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranteeGrantsRequest;
                fromJSON(object: any): _8.QueryGranteeGrantsRequest;
                toJSON(message: _8.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_8.QueryGranteeGrantsRequest>): _8.QueryGranteeGrantsRequest;
                fromAmino(object: _8.QueryGranteeGrantsRequestAmino): _8.QueryGranteeGrantsRequest;
                toAmino(message: _8.QueryGranteeGrantsRequest): _8.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _8.QueryGranteeGrantsRequestAminoMsg): _8.QueryGranteeGrantsRequest;
                toAminoMsg(message: _8.QueryGranteeGrantsRequest): _8.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryGranteeGrantsRequestProtoMsg): _8.QueryGranteeGrantsRequest;
                toProto(message: _8.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGranteeGrantsRequest): _8.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _8.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranteeGrantsResponse;
                fromJSON(object: any): _8.QueryGranteeGrantsResponse;
                toJSON(message: _8.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_8.QueryGranteeGrantsResponse>): _8.QueryGranteeGrantsResponse;
                fromAmino(object: _8.QueryGranteeGrantsResponseAmino): _8.QueryGranteeGrantsResponse;
                toAmino(message: _8.QueryGranteeGrantsResponse): _8.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _8.QueryGranteeGrantsResponseAminoMsg): _8.QueryGranteeGrantsResponse;
                toAminoMsg(message: _8.QueryGranteeGrantsResponse): _8.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryGranteeGrantsResponseProtoMsg): _8.QueryGranteeGrantsResponse;
                toProto(message: _8.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGranteeGrantsResponse): _8.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GenesisState;
                fromJSON(object: any): _7.GenesisState;
                toJSON(message: _7.GenesisState): unknown;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                toAminoMsg(message: _7.GenesisState): _7.GenesisStateAminoMsg;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _6.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventGrant;
                fromJSON(object: any): _6.EventGrant;
                toJSON(message: _6.EventGrant): unknown;
                fromPartial(object: Partial<_6.EventGrant>): _6.EventGrant;
                fromAmino(object: _6.EventGrantAmino): _6.EventGrant;
                toAmino(message: _6.EventGrant): _6.EventGrantAmino;
                fromAminoMsg(object: _6.EventGrantAminoMsg): _6.EventGrant;
                toAminoMsg(message: _6.EventGrant): _6.EventGrantAminoMsg;
                fromProtoMsg(message: _6.EventGrantProtoMsg): _6.EventGrant;
                toProto(message: _6.EventGrant): Uint8Array;
                toProtoMsg(message: _6.EventGrant): _6.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _6.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventRevoke;
                fromJSON(object: any): _6.EventRevoke;
                toJSON(message: _6.EventRevoke): unknown;
                fromPartial(object: Partial<_6.EventRevoke>): _6.EventRevoke;
                fromAmino(object: _6.EventRevokeAmino): _6.EventRevoke;
                toAmino(message: _6.EventRevoke): _6.EventRevokeAmino;
                fromAminoMsg(object: _6.EventRevokeAminoMsg): _6.EventRevoke;
                toAminoMsg(message: _6.EventRevoke): _6.EventRevokeAminoMsg;
                fromProtoMsg(message: _6.EventRevokeProtoMsg): _6.EventRevoke;
                toProto(message: _6.EventRevoke): Uint8Array;
                toProtoMsg(message: _6.EventRevoke): _6.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _5.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenericAuthorization;
                fromJSON(object: any): _5.GenericAuthorization;
                toJSON(message: _5.GenericAuthorization): unknown;
                fromPartial(object: Partial<_5.GenericAuthorization>): _5.GenericAuthorization;
                fromAmino(object: _5.GenericAuthorizationAmino): _5.GenericAuthorization;
                toAmino(message: _5.GenericAuthorization): _5.GenericAuthorizationAmino;
                fromAminoMsg(object: _5.GenericAuthorizationAminoMsg): _5.GenericAuthorization;
                toAminoMsg(message: _5.GenericAuthorization): _5.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _5.GenericAuthorizationProtoMsg): _5.GenericAuthorization;
                toProto(message: _5.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _5.GenericAuthorization): _5.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _5.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Grant;
                fromJSON(object: any): _5.Grant;
                toJSON(message: _5.Grant): unknown;
                fromPartial(object: Partial<_5.Grant>): _5.Grant;
                fromAmino(object: _5.GrantAmino): _5.Grant;
                toAmino(message: _5.Grant): _5.GrantAmino;
                fromAminoMsg(object: _5.GrantAminoMsg): _5.Grant;
                toAminoMsg(message: _5.Grant): _5.GrantAminoMsg;
                fromProtoMsg(message: _5.GrantProtoMsg): _5.Grant;
                toProto(message: _5.Grant): Uint8Array;
                toProtoMsg(message: _5.Grant): _5.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _5.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GrantAuthorization;
                fromJSON(object: any): _5.GrantAuthorization;
                toJSON(message: _5.GrantAuthorization): unknown;
                fromPartial(object: Partial<_5.GrantAuthorization>): _5.GrantAuthorization;
                fromAmino(object: _5.GrantAuthorizationAmino): _5.GrantAuthorization;
                toAmino(message: _5.GrantAuthorization): _5.GrantAuthorizationAmino;
                fromAminoMsg(object: _5.GrantAuthorizationAminoMsg): _5.GrantAuthorization;
                toAminoMsg(message: _5.GrantAuthorization): _5.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _5.GrantAuthorizationProtoMsg): _5.GrantAuthorization;
                toProto(message: _5.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _5.GrantAuthorization): _5.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _5.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GrantQueueItem;
                fromJSON(object: any): _5.GrantQueueItem;
                toJSON(message: _5.GrantQueueItem): unknown;
                fromPartial(object: Partial<_5.GrantQueueItem>): _5.GrantQueueItem;
                fromAmino(object: _5.GrantQueueItemAmino): _5.GrantQueueItem;
                toAmino(message: _5.GrantQueueItem): _5.GrantQueueItemAmino;
                fromAminoMsg(object: _5.GrantQueueItemAminoMsg): _5.GrantQueueItem;
                toAminoMsg(message: _5.GrantQueueItem): _5.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _5.GrantQueueItemProtoMsg): _5.GrantQueueItem;
                toProto(message: _5.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _5.GrantQueueItem): _5.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _10.SendAuthorization | _33.StakeAuthorization | _5.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _155.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
                denomOwners(request: _13.QueryDenomOwnersRequest): Promise<_13.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _140.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _14.MsgSend) => _14.MsgSendAmino;
                    fromAmino: (object: _14.MsgSendAmino) => _14.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _14.MsgMultiSend) => _14.MsgMultiSendAmino;
                    fromAmino: (object: _14.MsgMultiSendAmino) => _14.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _14.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgSend;
                fromJSON(object: any): _14.MsgSend;
                toJSON(message: _14.MsgSend): unknown;
                fromPartial(object: Partial<_14.MsgSend>): _14.MsgSend;
                fromAmino(object: _14.MsgSendAmino): _14.MsgSend;
                toAmino(message: _14.MsgSend): _14.MsgSendAmino;
                fromAminoMsg(object: _14.MsgSendAminoMsg): _14.MsgSend;
                toAminoMsg(message: _14.MsgSend): _14.MsgSendAminoMsg;
                fromProtoMsg(message: _14.MsgSendProtoMsg): _14.MsgSend;
                toProto(message: _14.MsgSend): Uint8Array;
                toProtoMsg(message: _14.MsgSend): _14.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _14.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgSendResponse;
                fromJSON(_: any): _14.MsgSendResponse;
                toJSON(_: _14.MsgSendResponse): unknown;
                fromPartial(_: Partial<_14.MsgSendResponse>): _14.MsgSendResponse;
                fromAmino(_: _14.MsgSendResponseAmino): _14.MsgSendResponse;
                toAmino(_: _14.MsgSendResponse): _14.MsgSendResponseAmino;
                fromAminoMsg(object: _14.MsgSendResponseAminoMsg): _14.MsgSendResponse;
                toAminoMsg(message: _14.MsgSendResponse): _14.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _14.MsgSendResponseProtoMsg): _14.MsgSendResponse;
                toProto(message: _14.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _14.MsgSendResponse): _14.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _14.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgMultiSend;
                fromJSON(object: any): _14.MsgMultiSend;
                toJSON(message: _14.MsgMultiSend): unknown;
                fromPartial(object: Partial<_14.MsgMultiSend>): _14.MsgMultiSend;
                fromAmino(object: _14.MsgMultiSendAmino): _14.MsgMultiSend;
                toAmino(message: _14.MsgMultiSend): _14.MsgMultiSendAmino;
                fromAminoMsg(object: _14.MsgMultiSendAminoMsg): _14.MsgMultiSend;
                toAminoMsg(message: _14.MsgMultiSend): _14.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _14.MsgMultiSendProtoMsg): _14.MsgMultiSend;
                toProto(message: _14.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _14.MsgMultiSend): _14.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _14.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgMultiSendResponse;
                fromJSON(_: any): _14.MsgMultiSendResponse;
                toJSON(_: _14.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_14.MsgMultiSendResponse>): _14.MsgMultiSendResponse;
                fromAmino(_: _14.MsgMultiSendResponseAmino): _14.MsgMultiSendResponse;
                toAmino(_: _14.MsgMultiSendResponse): _14.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _14.MsgMultiSendResponseAminoMsg): _14.MsgMultiSendResponse;
                toAminoMsg(message: _14.MsgMultiSendResponse): _14.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _14.MsgMultiSendResponseProtoMsg): _14.MsgMultiSendResponse;
                toProto(message: _14.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _14.MsgMultiSendResponse): _14.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _13.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryBalanceRequest;
                fromJSON(object: any): _13.QueryBalanceRequest;
                toJSON(message: _13.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_13.QueryBalanceRequest>): _13.QueryBalanceRequest;
                fromAmino(object: _13.QueryBalanceRequestAmino): _13.QueryBalanceRequest;
                toAmino(message: _13.QueryBalanceRequest): _13.QueryBalanceRequestAmino;
                fromAminoMsg(object: _13.QueryBalanceRequestAminoMsg): _13.QueryBalanceRequest;
                toAminoMsg(message: _13.QueryBalanceRequest): _13.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _13.QueryBalanceRequestProtoMsg): _13.QueryBalanceRequest;
                toProto(message: _13.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _13.QueryBalanceRequest): _13.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _13.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryBalanceResponse;
                fromJSON(object: any): _13.QueryBalanceResponse;
                toJSON(message: _13.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_13.QueryBalanceResponse>): _13.QueryBalanceResponse;
                fromAmino(object: _13.QueryBalanceResponseAmino): _13.QueryBalanceResponse;
                toAmino(message: _13.QueryBalanceResponse): _13.QueryBalanceResponseAmino;
                fromAminoMsg(object: _13.QueryBalanceResponseAminoMsg): _13.QueryBalanceResponse;
                toAminoMsg(message: _13.QueryBalanceResponse): _13.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _13.QueryBalanceResponseProtoMsg): _13.QueryBalanceResponse;
                toProto(message: _13.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _13.QueryBalanceResponse): _13.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _13.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllBalancesRequest;
                fromJSON(object: any): _13.QueryAllBalancesRequest;
                toJSON(message: _13.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_13.QueryAllBalancesRequest>): _13.QueryAllBalancesRequest;
                fromAmino(object: _13.QueryAllBalancesRequestAmino): _13.QueryAllBalancesRequest;
                toAmino(message: _13.QueryAllBalancesRequest): _13.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _13.QueryAllBalancesRequestAminoMsg): _13.QueryAllBalancesRequest;
                toAminoMsg(message: _13.QueryAllBalancesRequest): _13.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _13.QueryAllBalancesRequestProtoMsg): _13.QueryAllBalancesRequest;
                toProto(message: _13.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _13.QueryAllBalancesRequest): _13.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _13.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllBalancesResponse;
                fromJSON(object: any): _13.QueryAllBalancesResponse;
                toJSON(message: _13.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_13.QueryAllBalancesResponse>): _13.QueryAllBalancesResponse;
                fromAmino(object: _13.QueryAllBalancesResponseAmino): _13.QueryAllBalancesResponse;
                toAmino(message: _13.QueryAllBalancesResponse): _13.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _13.QueryAllBalancesResponseAminoMsg): _13.QueryAllBalancesResponse;
                toAminoMsg(message: _13.QueryAllBalancesResponse): _13.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _13.QueryAllBalancesResponseProtoMsg): _13.QueryAllBalancesResponse;
                toProto(message: _13.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _13.QueryAllBalancesResponse): _13.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _13.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySpendableBalancesRequest;
                fromJSON(object: any): _13.QuerySpendableBalancesRequest;
                toJSON(message: _13.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_13.QuerySpendableBalancesRequest>): _13.QuerySpendableBalancesRequest;
                fromAmino(object: _13.QuerySpendableBalancesRequestAmino): _13.QuerySpendableBalancesRequest;
                toAmino(message: _13.QuerySpendableBalancesRequest): _13.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _13.QuerySpendableBalancesRequestAminoMsg): _13.QuerySpendableBalancesRequest;
                toAminoMsg(message: _13.QuerySpendableBalancesRequest): _13.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _13.QuerySpendableBalancesRequestProtoMsg): _13.QuerySpendableBalancesRequest;
                toProto(message: _13.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _13.QuerySpendableBalancesRequest): _13.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _13.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySpendableBalancesResponse;
                fromJSON(object: any): _13.QuerySpendableBalancesResponse;
                toJSON(message: _13.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_13.QuerySpendableBalancesResponse>): _13.QuerySpendableBalancesResponse;
                fromAmino(object: _13.QuerySpendableBalancesResponseAmino): _13.QuerySpendableBalancesResponse;
                toAmino(message: _13.QuerySpendableBalancesResponse): _13.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _13.QuerySpendableBalancesResponseAminoMsg): _13.QuerySpendableBalancesResponse;
                toAminoMsg(message: _13.QuerySpendableBalancesResponse): _13.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _13.QuerySpendableBalancesResponseProtoMsg): _13.QuerySpendableBalancesResponse;
                toProto(message: _13.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _13.QuerySpendableBalancesResponse): _13.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _13.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryTotalSupplyRequest;
                fromJSON(object: any): _13.QueryTotalSupplyRequest;
                toJSON(message: _13.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_13.QueryTotalSupplyRequest>): _13.QueryTotalSupplyRequest;
                fromAmino(object: _13.QueryTotalSupplyRequestAmino): _13.QueryTotalSupplyRequest;
                toAmino(message: _13.QueryTotalSupplyRequest): _13.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _13.QueryTotalSupplyRequestAminoMsg): _13.QueryTotalSupplyRequest;
                toAminoMsg(message: _13.QueryTotalSupplyRequest): _13.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _13.QueryTotalSupplyRequestProtoMsg): _13.QueryTotalSupplyRequest;
                toProto(message: _13.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _13.QueryTotalSupplyRequest): _13.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _13.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryTotalSupplyResponse;
                fromJSON(object: any): _13.QueryTotalSupplyResponse;
                toJSON(message: _13.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_13.QueryTotalSupplyResponse>): _13.QueryTotalSupplyResponse;
                fromAmino(object: _13.QueryTotalSupplyResponseAmino): _13.QueryTotalSupplyResponse;
                toAmino(message: _13.QueryTotalSupplyResponse): _13.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _13.QueryTotalSupplyResponseAminoMsg): _13.QueryTotalSupplyResponse;
                toAminoMsg(message: _13.QueryTotalSupplyResponse): _13.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _13.QueryTotalSupplyResponseProtoMsg): _13.QueryTotalSupplyResponse;
                toProto(message: _13.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _13.QueryTotalSupplyResponse): _13.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _13.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySupplyOfRequest;
                fromJSON(object: any): _13.QuerySupplyOfRequest;
                toJSON(message: _13.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_13.QuerySupplyOfRequest>): _13.QuerySupplyOfRequest;
                fromAmino(object: _13.QuerySupplyOfRequestAmino): _13.QuerySupplyOfRequest;
                toAmino(message: _13.QuerySupplyOfRequest): _13.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _13.QuerySupplyOfRequestAminoMsg): _13.QuerySupplyOfRequest;
                toAminoMsg(message: _13.QuerySupplyOfRequest): _13.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _13.QuerySupplyOfRequestProtoMsg): _13.QuerySupplyOfRequest;
                toProto(message: _13.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _13.QuerySupplyOfRequest): _13.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _13.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySupplyOfResponse;
                fromJSON(object: any): _13.QuerySupplyOfResponse;
                toJSON(message: _13.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_13.QuerySupplyOfResponse>): _13.QuerySupplyOfResponse;
                fromAmino(object: _13.QuerySupplyOfResponseAmino): _13.QuerySupplyOfResponse;
                toAmino(message: _13.QuerySupplyOfResponse): _13.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _13.QuerySupplyOfResponseAminoMsg): _13.QuerySupplyOfResponse;
                toAminoMsg(message: _13.QuerySupplyOfResponse): _13.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _13.QuerySupplyOfResponseProtoMsg): _13.QuerySupplyOfResponse;
                toProto(message: _13.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _13.QuerySupplyOfResponse): _13.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsRequest;
                fromJSON(_: any): _13.QueryParamsRequest;
                toJSON(_: _13.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
                fromAmino(_: _13.QueryParamsRequestAmino): _13.QueryParamsRequest;
                toAmino(_: _13.QueryParamsRequest): _13.QueryParamsRequestAmino;
                fromAminoMsg(object: _13.QueryParamsRequestAminoMsg): _13.QueryParamsRequest;
                toAminoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryParamsRequestProtoMsg): _13.QueryParamsRequest;
                toProto(message: _13.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsResponse;
                fromJSON(object: any): _13.QueryParamsResponse;
                toJSON(message: _13.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
                fromAmino(object: _13.QueryParamsResponseAmino): _13.QueryParamsResponse;
                toAmino(message: _13.QueryParamsResponse): _13.QueryParamsResponseAmino;
                fromAminoMsg(object: _13.QueryParamsResponseAminoMsg): _13.QueryParamsResponse;
                toAminoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryParamsResponseProtoMsg): _13.QueryParamsResponse;
                toProto(message: _13.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _13.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomsMetadataRequest;
                fromJSON(object: any): _13.QueryDenomsMetadataRequest;
                toJSON(message: _13.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_13.QueryDenomsMetadataRequest>): _13.QueryDenomsMetadataRequest;
                fromAmino(object: _13.QueryDenomsMetadataRequestAmino): _13.QueryDenomsMetadataRequest;
                toAmino(message: _13.QueryDenomsMetadataRequest): _13.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _13.QueryDenomsMetadataRequestAminoMsg): _13.QueryDenomsMetadataRequest;
                toAminoMsg(message: _13.QueryDenomsMetadataRequest): _13.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _13.QueryDenomsMetadataRequestProtoMsg): _13.QueryDenomsMetadataRequest;
                toProto(message: _13.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _13.QueryDenomsMetadataRequest): _13.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _13.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomsMetadataResponse;
                fromJSON(object: any): _13.QueryDenomsMetadataResponse;
                toJSON(message: _13.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_13.QueryDenomsMetadataResponse>): _13.QueryDenomsMetadataResponse;
                fromAmino(object: _13.QueryDenomsMetadataResponseAmino): _13.QueryDenomsMetadataResponse;
                toAmino(message: _13.QueryDenomsMetadataResponse): _13.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _13.QueryDenomsMetadataResponseAminoMsg): _13.QueryDenomsMetadataResponse;
                toAminoMsg(message: _13.QueryDenomsMetadataResponse): _13.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _13.QueryDenomsMetadataResponseProtoMsg): _13.QueryDenomsMetadataResponse;
                toProto(message: _13.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _13.QueryDenomsMetadataResponse): _13.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _13.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomMetadataRequest;
                fromJSON(object: any): _13.QueryDenomMetadataRequest;
                toJSON(message: _13.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_13.QueryDenomMetadataRequest>): _13.QueryDenomMetadataRequest;
                fromAmino(object: _13.QueryDenomMetadataRequestAmino): _13.QueryDenomMetadataRequest;
                toAmino(message: _13.QueryDenomMetadataRequest): _13.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _13.QueryDenomMetadataRequestAminoMsg): _13.QueryDenomMetadataRequest;
                toAminoMsg(message: _13.QueryDenomMetadataRequest): _13.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _13.QueryDenomMetadataRequestProtoMsg): _13.QueryDenomMetadataRequest;
                toProto(message: _13.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _13.QueryDenomMetadataRequest): _13.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _13.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomMetadataResponse;
                fromJSON(object: any): _13.QueryDenomMetadataResponse;
                toJSON(message: _13.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_13.QueryDenomMetadataResponse>): _13.QueryDenomMetadataResponse;
                fromAmino(object: _13.QueryDenomMetadataResponseAmino): _13.QueryDenomMetadataResponse;
                toAmino(message: _13.QueryDenomMetadataResponse): _13.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _13.QueryDenomMetadataResponseAminoMsg): _13.QueryDenomMetadataResponse;
                toAminoMsg(message: _13.QueryDenomMetadataResponse): _13.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _13.QueryDenomMetadataResponseProtoMsg): _13.QueryDenomMetadataResponse;
                toProto(message: _13.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _13.QueryDenomMetadataResponse): _13.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _13.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomOwnersRequest;
                fromJSON(object: any): _13.QueryDenomOwnersRequest;
                toJSON(message: _13.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_13.QueryDenomOwnersRequest>): _13.QueryDenomOwnersRequest;
                fromAmino(object: _13.QueryDenomOwnersRequestAmino): _13.QueryDenomOwnersRequest;
                toAmino(message: _13.QueryDenomOwnersRequest): _13.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _13.QueryDenomOwnersRequestAminoMsg): _13.QueryDenomOwnersRequest;
                toAminoMsg(message: _13.QueryDenomOwnersRequest): _13.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _13.QueryDenomOwnersRequestProtoMsg): _13.QueryDenomOwnersRequest;
                toProto(message: _13.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _13.QueryDenomOwnersRequest): _13.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _13.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.DenomOwner;
                fromJSON(object: any): _13.DenomOwner;
                toJSON(message: _13.DenomOwner): unknown;
                fromPartial(object: Partial<_13.DenomOwner>): _13.DenomOwner;
                fromAmino(object: _13.DenomOwnerAmino): _13.DenomOwner;
                toAmino(message: _13.DenomOwner): _13.DenomOwnerAmino;
                fromAminoMsg(object: _13.DenomOwnerAminoMsg): _13.DenomOwner;
                toAminoMsg(message: _13.DenomOwner): _13.DenomOwnerAminoMsg;
                fromProtoMsg(message: _13.DenomOwnerProtoMsg): _13.DenomOwner;
                toProto(message: _13.DenomOwner): Uint8Array;
                toProtoMsg(message: _13.DenomOwner): _13.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _13.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomOwnersResponse;
                fromJSON(object: any): _13.QueryDenomOwnersResponse;
                toJSON(message: _13.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_13.QueryDenomOwnersResponse>): _13.QueryDenomOwnersResponse;
                fromAmino(object: _13.QueryDenomOwnersResponseAmino): _13.QueryDenomOwnersResponse;
                toAmino(message: _13.QueryDenomOwnersResponse): _13.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _13.QueryDenomOwnersResponseAminoMsg): _13.QueryDenomOwnersResponse;
                toAminoMsg(message: _13.QueryDenomOwnersResponse): _13.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _13.QueryDenomOwnersResponseProtoMsg): _13.QueryDenomOwnersResponse;
                toProto(message: _13.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _13.QueryDenomOwnersResponse): _13.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromJSON(object: any): _12.GenesisState;
                toJSON(message: _12.GenesisState): unknown;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                toAminoMsg(message: _12.GenesisState): _12.GenesisStateAminoMsg;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _12.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Balance;
                fromJSON(object: any): _12.Balance;
                toJSON(message: _12.Balance): unknown;
                fromPartial(object: Partial<_12.Balance>): _12.Balance;
                fromAmino(object: _12.BalanceAmino): _12.Balance;
                toAmino(message: _12.Balance): _12.BalanceAmino;
                fromAminoMsg(object: _12.BalanceAminoMsg): _12.Balance;
                toAminoMsg(message: _12.Balance): _12.BalanceAminoMsg;
                fromProtoMsg(message: _12.BalanceProtoMsg): _12.Balance;
                toProto(message: _12.Balance): Uint8Array;
                toProtoMsg(message: _12.Balance): _12.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Params;
                fromJSON(object: any): _11.Params;
                toJSON(message: _11.Params): unknown;
                fromPartial(object: Partial<_11.Params>): _11.Params;
                fromAmino(object: _11.ParamsAmino): _11.Params;
                toAmino(message: _11.Params): _11.ParamsAmino;
                fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
                toAminoMsg(message: _11.Params): _11.ParamsAminoMsg;
                fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
                toProto(message: _11.Params): Uint8Array;
                toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _11.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SendEnabled;
                fromJSON(object: any): _11.SendEnabled;
                toJSON(message: _11.SendEnabled): unknown;
                fromPartial(object: Partial<_11.SendEnabled>): _11.SendEnabled;
                fromAmino(object: _11.SendEnabledAmino): _11.SendEnabled;
                toAmino(message: _11.SendEnabled): _11.SendEnabledAmino;
                fromAminoMsg(object: _11.SendEnabledAminoMsg): _11.SendEnabled;
                toAminoMsg(message: _11.SendEnabled): _11.SendEnabledAminoMsg;
                fromProtoMsg(message: _11.SendEnabledProtoMsg): _11.SendEnabled;
                toProto(message: _11.SendEnabled): Uint8Array;
                toProtoMsg(message: _11.SendEnabled): _11.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _11.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Input;
                fromJSON(object: any): _11.Input;
                toJSON(message: _11.Input): unknown;
                fromPartial(object: Partial<_11.Input>): _11.Input;
                fromAmino(object: _11.InputAmino): _11.Input;
                toAmino(message: _11.Input): _11.InputAmino;
                fromAminoMsg(object: _11.InputAminoMsg): _11.Input;
                toAminoMsg(message: _11.Input): _11.InputAminoMsg;
                fromProtoMsg(message: _11.InputProtoMsg): _11.Input;
                toProto(message: _11.Input): Uint8Array;
                toProtoMsg(message: _11.Input): _11.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _11.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Output;
                fromJSON(object: any): _11.Output;
                toJSON(message: _11.Output): unknown;
                fromPartial(object: Partial<_11.Output>): _11.Output;
                fromAmino(object: _11.OutputAmino): _11.Output;
                toAmino(message: _11.Output): _11.OutputAmino;
                fromAminoMsg(object: _11.OutputAminoMsg): _11.Output;
                toAminoMsg(message: _11.Output): _11.OutputAminoMsg;
                fromProtoMsg(message: _11.OutputProtoMsg): _11.Output;
                toProto(message: _11.Output): Uint8Array;
                toProtoMsg(message: _11.Output): _11.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _11.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Supply;
                fromJSON(object: any): _11.Supply;
                toJSON(message: _11.Supply): unknown;
                fromPartial(object: Partial<_11.Supply>): _11.Supply;
                fromAmino(object: _11.SupplyAmino): _11.Supply;
                toAmino(message: _11.Supply): _11.SupplyAmino;
                fromAminoMsg(object: _11.SupplyAminoMsg): _11.Supply;
                toAminoMsg(message: _11.Supply): _11.SupplyAminoMsg;
                fromProtoMsg(message: _11.SupplyProtoMsg): _11.Supply;
                toProto(message: _11.Supply): Uint8Array;
                toProtoMsg(message: _11.Supply): _11.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _11.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DenomUnit;
                fromJSON(object: any): _11.DenomUnit;
                toJSON(message: _11.DenomUnit): unknown;
                fromPartial(object: Partial<_11.DenomUnit>): _11.DenomUnit;
                fromAmino(object: _11.DenomUnitAmino): _11.DenomUnit;
                toAmino(message: _11.DenomUnit): _11.DenomUnitAmino;
                fromAminoMsg(object: _11.DenomUnitAminoMsg): _11.DenomUnit;
                toAminoMsg(message: _11.DenomUnit): _11.DenomUnitAminoMsg;
                fromProtoMsg(message: _11.DenomUnitProtoMsg): _11.DenomUnit;
                toProto(message: _11.DenomUnit): Uint8Array;
                toProtoMsg(message: _11.DenomUnit): _11.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _11.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Metadata;
                fromJSON(object: any): _11.Metadata;
                toJSON(message: _11.Metadata): unknown;
                fromPartial(object: Partial<_11.Metadata>): _11.Metadata;
                fromAmino(object: _11.MetadataAmino): _11.Metadata;
                toAmino(message: _11.Metadata): _11.MetadataAmino;
                fromAminoMsg(object: _11.MetadataAminoMsg): _11.Metadata;
                toAminoMsg(message: _11.Metadata): _11.MetadataAminoMsg;
                fromProtoMsg(message: _11.MetadataProtoMsg): _11.Metadata;
                toProto(message: _11.Metadata): Uint8Array;
                toProtoMsg(message: _11.Metadata): _11.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _10.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SendAuthorization;
                fromJSON(object: any): _10.SendAuthorization;
                toJSON(message: _10.SendAuthorization): unknown;
                fromPartial(object: Partial<_10.SendAuthorization>): _10.SendAuthorization;
                fromAmino(object: _10.SendAuthorizationAmino): _10.SendAuthorization;
                toAmino(message: _10.SendAuthorization): _10.SendAuthorizationAmino;
                fromAminoMsg(object: _10.SendAuthorizationAminoMsg): _10.SendAuthorization;
                toAminoMsg(message: _10.SendAuthorization): _10.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _10.SendAuthorizationProtoMsg): _10.SendAuthorization;
                toProto(message: _10.SendAuthorization): Uint8Array;
                toProtoMsg(message: _10.SendAuthorization): _10.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _15.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TxResponse;
                    fromJSON(object: any): _15.TxResponse;
                    toJSON(message: _15.TxResponse): unknown;
                    fromPartial(object: Partial<_15.TxResponse>): _15.TxResponse;
                    fromAmino(object: _15.TxResponseAmino): _15.TxResponse;
                    toAmino(message: _15.TxResponse): _15.TxResponseAmino;
                    fromAminoMsg(object: _15.TxResponseAminoMsg): _15.TxResponse;
                    toAminoMsg(message: _15.TxResponse): _15.TxResponseAminoMsg;
                    fromProtoMsg(message: _15.TxResponseProtoMsg): _15.TxResponse;
                    toProto(message: _15.TxResponse): Uint8Array;
                    toProtoMsg(message: _15.TxResponse): _15.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _15.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ABCIMessageLog;
                    fromJSON(object: any): _15.ABCIMessageLog;
                    toJSON(message: _15.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_15.ABCIMessageLog>): _15.ABCIMessageLog;
                    fromAmino(object: _15.ABCIMessageLogAmino): _15.ABCIMessageLog;
                    toAmino(message: _15.ABCIMessageLog): _15.ABCIMessageLogAmino;
                    fromAminoMsg(object: _15.ABCIMessageLogAminoMsg): _15.ABCIMessageLog;
                    toAminoMsg(message: _15.ABCIMessageLog): _15.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _15.ABCIMessageLogProtoMsg): _15.ABCIMessageLog;
                    toProto(message: _15.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _15.ABCIMessageLog): _15.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _15.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.StringEvent;
                    fromJSON(object: any): _15.StringEvent;
                    toJSON(message: _15.StringEvent): unknown;
                    fromPartial(object: Partial<_15.StringEvent>): _15.StringEvent;
                    fromAmino(object: _15.StringEventAmino): _15.StringEvent;
                    toAmino(message: _15.StringEvent): _15.StringEventAmino;
                    fromAminoMsg(object: _15.StringEventAminoMsg): _15.StringEvent;
                    toAminoMsg(message: _15.StringEvent): _15.StringEventAminoMsg;
                    fromProtoMsg(message: _15.StringEventProtoMsg): _15.StringEvent;
                    toProto(message: _15.StringEvent): Uint8Array;
                    toProtoMsg(message: _15.StringEvent): _15.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _15.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Attribute;
                    fromJSON(object: any): _15.Attribute;
                    toJSON(message: _15.Attribute): unknown;
                    fromPartial(object: Partial<_15.Attribute>): _15.Attribute;
                    fromAmino(object: _15.AttributeAmino): _15.Attribute;
                    toAmino(message: _15.Attribute): _15.AttributeAmino;
                    fromAminoMsg(object: _15.AttributeAminoMsg): _15.Attribute;
                    toAminoMsg(message: _15.Attribute): _15.AttributeAminoMsg;
                    fromProtoMsg(message: _15.AttributeProtoMsg): _15.Attribute;
                    toProto(message: _15.Attribute): Uint8Array;
                    toProtoMsg(message: _15.Attribute): _15.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _15.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GasInfo;
                    fromJSON(object: any): _15.GasInfo;
                    toJSON(message: _15.GasInfo): unknown;
                    fromPartial(object: Partial<_15.GasInfo>): _15.GasInfo;
                    fromAmino(object: _15.GasInfoAmino): _15.GasInfo;
                    toAmino(message: _15.GasInfo): _15.GasInfoAmino;
                    fromAminoMsg(object: _15.GasInfoAminoMsg): _15.GasInfo;
                    toAminoMsg(message: _15.GasInfo): _15.GasInfoAminoMsg;
                    fromProtoMsg(message: _15.GasInfoProtoMsg): _15.GasInfo;
                    toProto(message: _15.GasInfo): Uint8Array;
                    toProtoMsg(message: _15.GasInfo): _15.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _15.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Result;
                    fromJSON(object: any): _15.Result;
                    toJSON(message: _15.Result): unknown;
                    fromPartial(object: Partial<_15.Result>): _15.Result;
                    fromAmino(object: _15.ResultAmino): _15.Result;
                    toAmino(message: _15.Result): _15.ResultAmino;
                    fromAminoMsg(object: _15.ResultAminoMsg): _15.Result;
                    toAminoMsg(message: _15.Result): _15.ResultAminoMsg;
                    fromProtoMsg(message: _15.ResultProtoMsg): _15.Result;
                    toProto(message: _15.Result): Uint8Array;
                    toProtoMsg(message: _15.Result): _15.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _15.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SimulationResponse;
                    fromJSON(object: any): _15.SimulationResponse;
                    toJSON(message: _15.SimulationResponse): unknown;
                    fromPartial(object: Partial<_15.SimulationResponse>): _15.SimulationResponse;
                    fromAmino(object: _15.SimulationResponseAmino): _15.SimulationResponse;
                    toAmino(message: _15.SimulationResponse): _15.SimulationResponseAmino;
                    fromAminoMsg(object: _15.SimulationResponseAminoMsg): _15.SimulationResponse;
                    toAminoMsg(message: _15.SimulationResponse): _15.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _15.SimulationResponseProtoMsg): _15.SimulationResponse;
                    toProto(message: _15.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _15.SimulationResponse): _15.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _15.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgData;
                    fromJSON(object: any): _15.MsgData;
                    toJSON(message: _15.MsgData): unknown;
                    fromPartial(object: Partial<_15.MsgData>): _15.MsgData;
                    fromAmino(object: _15.MsgDataAmino): _15.MsgData;
                    toAmino(message: _15.MsgData): _15.MsgDataAmino;
                    fromAminoMsg(object: _15.MsgDataAminoMsg): _15.MsgData;
                    toAminoMsg(message: _15.MsgData): _15.MsgDataAminoMsg;
                    fromProtoMsg(message: _15.MsgDataProtoMsg): _15.MsgData;
                    toProto(message: _15.MsgData): Uint8Array;
                    toProtoMsg(message: _15.MsgData): _15.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _15.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TxMsgData;
                    fromJSON(object: any): _15.TxMsgData;
                    toJSON(message: _15.TxMsgData): unknown;
                    fromPartial(object: Partial<_15.TxMsgData>): _15.TxMsgData;
                    fromAmino(object: _15.TxMsgDataAmino): _15.TxMsgData;
                    toAmino(message: _15.TxMsgData): _15.TxMsgDataAmino;
                    fromAminoMsg(object: _15.TxMsgDataAminoMsg): _15.TxMsgData;
                    toAminoMsg(message: _15.TxMsgData): _15.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _15.TxMsgDataProtoMsg): _15.TxMsgData;
                    toProto(message: _15.TxMsgData): Uint8Array;
                    toProtoMsg(message: _15.TxMsgData): _15.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _15.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SearchTxsResult;
                    fromJSON(object: any): _15.SearchTxsResult;
                    toJSON(message: _15.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_15.SearchTxsResult>): _15.SearchTxsResult;
                    fromAmino(object: _15.SearchTxsResultAmino): _15.SearchTxsResult;
                    toAmino(message: _15.SearchTxsResult): _15.SearchTxsResultAmino;
                    fromAminoMsg(object: _15.SearchTxsResultAminoMsg): _15.SearchTxsResult;
                    toAminoMsg(message: _15.SearchTxsResult): _15.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _15.SearchTxsResultProtoMsg): _15.SearchTxsResult;
                    toProto(message: _15.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _15.SearchTxsResult): _15.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _16.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageRequest;
                    fromJSON(object: any): _16.PageRequest;
                    toJSON(message: _16.PageRequest): unknown;
                    fromPartial(object: Partial<_16.PageRequest>): _16.PageRequest;
                    fromAmino(object: _16.PageRequestAmino): _16.PageRequest;
                    toAmino(message: _16.PageRequest): _16.PageRequestAmino;
                    fromAminoMsg(object: _16.PageRequestAminoMsg): _16.PageRequest;
                    toAminoMsg(message: _16.PageRequest): _16.PageRequestAminoMsg;
                    fromProtoMsg(message: _16.PageRequestProtoMsg): _16.PageRequest;
                    toProto(message: _16.PageRequest): Uint8Array;
                    toProtoMsg(message: _16.PageRequest): _16.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _16.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageResponse;
                    fromJSON(object: any): _16.PageResponse;
                    toJSON(message: _16.PageResponse): unknown;
                    fromPartial(object: Partial<_16.PageResponse>): _16.PageResponse;
                    fromAmino(object: _16.PageResponseAmino): _16.PageResponse;
                    toAmino(message: _16.PageResponse): _16.PageResponseAmino;
                    fromAminoMsg(object: _16.PageResponseAminoMsg): _16.PageResponse;
                    toAminoMsg(message: _16.PageResponse): _16.PageResponseAminoMsg;
                    fromProtoMsg(message: _16.PageResponseProtoMsg): _16.PageResponse;
                    toProto(message: _16.PageResponse): Uint8Array;
                    toProtoMsg(message: _16.PageResponse): _16.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _17.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppDescriptor;
                    fromJSON(object: any): _17.AppDescriptor;
                    toJSON(message: _17.AppDescriptor): unknown;
                    fromPartial(object: Partial<_17.AppDescriptor>): _17.AppDescriptor;
                    fromAmino(object: _17.AppDescriptorAmino): _17.AppDescriptor;
                    toAmino(message: _17.AppDescriptor): _17.AppDescriptorAmino;
                    fromAminoMsg(object: _17.AppDescriptorAminoMsg): _17.AppDescriptor;
                    toAminoMsg(message: _17.AppDescriptor): _17.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _17.AppDescriptorProtoMsg): _17.AppDescriptor;
                    toProto(message: _17.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _17.AppDescriptor): _17.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _17.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxDescriptor;
                    fromJSON(object: any): _17.TxDescriptor;
                    toJSON(message: _17.TxDescriptor): unknown;
                    fromPartial(object: Partial<_17.TxDescriptor>): _17.TxDescriptor;
                    fromAmino(object: _17.TxDescriptorAmino): _17.TxDescriptor;
                    toAmino(message: _17.TxDescriptor): _17.TxDescriptorAmino;
                    fromAminoMsg(object: _17.TxDescriptorAminoMsg): _17.TxDescriptor;
                    toAminoMsg(message: _17.TxDescriptor): _17.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _17.TxDescriptorProtoMsg): _17.TxDescriptor;
                    toProto(message: _17.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _17.TxDescriptor): _17.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _17.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AuthnDescriptor;
                    fromJSON(object: any): _17.AuthnDescriptor;
                    toJSON(message: _17.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_17.AuthnDescriptor>): _17.AuthnDescriptor;
                    fromAmino(object: _17.AuthnDescriptorAmino): _17.AuthnDescriptor;
                    toAmino(message: _17.AuthnDescriptor): _17.AuthnDescriptorAmino;
                    fromAminoMsg(object: _17.AuthnDescriptorAminoMsg): _17.AuthnDescriptor;
                    toAminoMsg(message: _17.AuthnDescriptor): _17.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _17.AuthnDescriptorProtoMsg): _17.AuthnDescriptor;
                    toProto(message: _17.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _17.AuthnDescriptor): _17.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _17.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SigningModeDescriptor;
                    fromJSON(object: any): _17.SigningModeDescriptor;
                    toJSON(message: _17.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_17.SigningModeDescriptor>): _17.SigningModeDescriptor;
                    fromAmino(object: _17.SigningModeDescriptorAmino): _17.SigningModeDescriptor;
                    toAmino(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _17.SigningModeDescriptorAminoMsg): _17.SigningModeDescriptor;
                    toAminoMsg(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _17.SigningModeDescriptorProtoMsg): _17.SigningModeDescriptor;
                    toProto(message: _17.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _17.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ChainDescriptor;
                    fromJSON(object: any): _17.ChainDescriptor;
                    toJSON(message: _17.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_17.ChainDescriptor>): _17.ChainDescriptor;
                    fromAmino(object: _17.ChainDescriptorAmino): _17.ChainDescriptor;
                    toAmino(message: _17.ChainDescriptor): _17.ChainDescriptorAmino;
                    fromAminoMsg(object: _17.ChainDescriptorAminoMsg): _17.ChainDescriptor;
                    toAminoMsg(message: _17.ChainDescriptor): _17.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _17.ChainDescriptorProtoMsg): _17.ChainDescriptor;
                    toProto(message: _17.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _17.ChainDescriptor): _17.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _17.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.CodecDescriptor;
                    fromJSON(object: any): _17.CodecDescriptor;
                    toJSON(message: _17.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_17.CodecDescriptor>): _17.CodecDescriptor;
                    fromAmino(object: _17.CodecDescriptorAmino): _17.CodecDescriptor;
                    toAmino(message: _17.CodecDescriptor): _17.CodecDescriptorAmino;
                    fromAminoMsg(object: _17.CodecDescriptorAminoMsg): _17.CodecDescriptor;
                    toAminoMsg(message: _17.CodecDescriptor): _17.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _17.CodecDescriptorProtoMsg): _17.CodecDescriptor;
                    toProto(message: _17.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _17.CodecDescriptor): _17.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _17.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceDescriptor;
                    fromJSON(object: any): _17.InterfaceDescriptor;
                    toJSON(message: _17.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_17.InterfaceDescriptor>): _17.InterfaceDescriptor;
                    fromAmino(object: _17.InterfaceDescriptorAmino): _17.InterfaceDescriptor;
                    toAmino(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceDescriptorAminoMsg): _17.InterfaceDescriptor;
                    toAminoMsg(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceDescriptorProtoMsg): _17.InterfaceDescriptor;
                    toProto(message: _17.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _17.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _17.InterfaceImplementerDescriptor;
                    toJSON(message: _17.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_17.InterfaceImplementerDescriptor>): _17.InterfaceImplementerDescriptor;
                    fromAmino(object: _17.InterfaceImplementerDescriptorAmino): _17.InterfaceImplementerDescriptor;
                    toAmino(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceImplementerDescriptorAminoMsg): _17.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceImplementerDescriptorProtoMsg): _17.InterfaceImplementerDescriptor;
                    toProto(message: _17.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _17.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _17.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _17.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_17.InterfaceAcceptingMessageDescriptor>): _17.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _17.InterfaceAcceptingMessageDescriptorAmino): _17.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceAcceptingMessageDescriptorAminoMsg): _17.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceAcceptingMessageDescriptorProtoMsg): _17.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _17.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _17.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ConfigurationDescriptor;
                    fromJSON(object: any): _17.ConfigurationDescriptor;
                    toJSON(message: _17.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_17.ConfigurationDescriptor>): _17.ConfigurationDescriptor;
                    fromAmino(object: _17.ConfigurationDescriptorAmino): _17.ConfigurationDescriptor;
                    toAmino(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _17.ConfigurationDescriptorAminoMsg): _17.ConfigurationDescriptor;
                    toAminoMsg(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _17.ConfigurationDescriptorProtoMsg): _17.ConfigurationDescriptor;
                    toProto(message: _17.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _17.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgDescriptor;
                    fromJSON(object: any): _17.MsgDescriptor;
                    toJSON(message: _17.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_17.MsgDescriptor>): _17.MsgDescriptor;
                    fromAmino(object: _17.MsgDescriptorAmino): _17.MsgDescriptor;
                    toAmino(message: _17.MsgDescriptor): _17.MsgDescriptorAmino;
                    fromAminoMsg(object: _17.MsgDescriptorAminoMsg): _17.MsgDescriptor;
                    toAminoMsg(message: _17.MsgDescriptor): _17.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _17.MsgDescriptorProtoMsg): _17.MsgDescriptor;
                    toProto(message: _17.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _17.MsgDescriptor): _17.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _17.GetAuthnDescriptorRequest;
                    toJSON(_: _17.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetAuthnDescriptorRequest>): _17.GetAuthnDescriptorRequest;
                    fromAmino(_: _17.GetAuthnDescriptorRequestAmino): _17.GetAuthnDescriptorRequest;
                    toAmino(_: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetAuthnDescriptorRequestAminoMsg): _17.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetAuthnDescriptorRequestProtoMsg): _17.GetAuthnDescriptorRequest;
                    toProto(message: _17.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _17.GetAuthnDescriptorResponse;
                    toJSON(message: _17.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetAuthnDescriptorResponse>): _17.GetAuthnDescriptorResponse;
                    fromAmino(object: _17.GetAuthnDescriptorResponseAmino): _17.GetAuthnDescriptorResponse;
                    toAmino(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetAuthnDescriptorResponseAminoMsg): _17.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetAuthnDescriptorResponseProtoMsg): _17.GetAuthnDescriptorResponse;
                    toProto(message: _17.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorRequest;
                    fromJSON(_: any): _17.GetChainDescriptorRequest;
                    toJSON(_: _17.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetChainDescriptorRequest>): _17.GetChainDescriptorRequest;
                    fromAmino(_: _17.GetChainDescriptorRequestAmino): _17.GetChainDescriptorRequest;
                    toAmino(_: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetChainDescriptorRequestAminoMsg): _17.GetChainDescriptorRequest;
                    toAminoMsg(message: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetChainDescriptorRequestProtoMsg): _17.GetChainDescriptorRequest;
                    toProto(message: _17.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorResponse;
                    fromJSON(object: any): _17.GetChainDescriptorResponse;
                    toJSON(message: _17.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetChainDescriptorResponse>): _17.GetChainDescriptorResponse;
                    fromAmino(object: _17.GetChainDescriptorResponseAmino): _17.GetChainDescriptorResponse;
                    toAmino(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetChainDescriptorResponseAminoMsg): _17.GetChainDescriptorResponse;
                    toAminoMsg(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetChainDescriptorResponseProtoMsg): _17.GetChainDescriptorResponse;
                    toProto(message: _17.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorRequest;
                    fromJSON(_: any): _17.GetCodecDescriptorRequest;
                    toJSON(_: _17.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetCodecDescriptorRequest>): _17.GetCodecDescriptorRequest;
                    fromAmino(_: _17.GetCodecDescriptorRequestAmino): _17.GetCodecDescriptorRequest;
                    toAmino(_: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetCodecDescriptorRequestAminoMsg): _17.GetCodecDescriptorRequest;
                    toAminoMsg(message: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetCodecDescriptorRequestProtoMsg): _17.GetCodecDescriptorRequest;
                    toProto(message: _17.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorResponse;
                    fromJSON(object: any): _17.GetCodecDescriptorResponse;
                    toJSON(message: _17.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetCodecDescriptorResponse>): _17.GetCodecDescriptorResponse;
                    fromAmino(object: _17.GetCodecDescriptorResponseAmino): _17.GetCodecDescriptorResponse;
                    toAmino(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetCodecDescriptorResponseAminoMsg): _17.GetCodecDescriptorResponse;
                    toAminoMsg(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetCodecDescriptorResponseProtoMsg): _17.GetCodecDescriptorResponse;
                    toProto(message: _17.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _17.GetConfigurationDescriptorRequest;
                    toJSON(_: _17.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetConfigurationDescriptorRequest>): _17.GetConfigurationDescriptorRequest;
                    fromAmino(_: _17.GetConfigurationDescriptorRequestAmino): _17.GetConfigurationDescriptorRequest;
                    toAmino(_: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetConfigurationDescriptorRequestAminoMsg): _17.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetConfigurationDescriptorRequestProtoMsg): _17.GetConfigurationDescriptorRequest;
                    toProto(message: _17.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _17.GetConfigurationDescriptorResponse;
                    toJSON(message: _17.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetConfigurationDescriptorResponse>): _17.GetConfigurationDescriptorResponse;
                    fromAmino(object: _17.GetConfigurationDescriptorResponseAmino): _17.GetConfigurationDescriptorResponse;
                    toAmino(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetConfigurationDescriptorResponseAminoMsg): _17.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetConfigurationDescriptorResponseProtoMsg): _17.GetConfigurationDescriptorResponse;
                    toProto(message: _17.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _17.GetQueryServicesDescriptorRequest;
                    toJSON(_: _17.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetQueryServicesDescriptorRequest>): _17.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _17.GetQueryServicesDescriptorRequestAmino): _17.GetQueryServicesDescriptorRequest;
                    toAmino(_: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetQueryServicesDescriptorRequestAminoMsg): _17.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetQueryServicesDescriptorRequestProtoMsg): _17.GetQueryServicesDescriptorRequest;
                    toProto(message: _17.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _17.GetQueryServicesDescriptorResponse;
                    toJSON(message: _17.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetQueryServicesDescriptorResponse>): _17.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _17.GetQueryServicesDescriptorResponseAmino): _17.GetQueryServicesDescriptorResponse;
                    toAmino(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetQueryServicesDescriptorResponseAminoMsg): _17.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetQueryServicesDescriptorResponseProtoMsg): _17.GetQueryServicesDescriptorResponse;
                    toProto(message: _17.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorRequest;
                    fromJSON(_: any): _17.GetTxDescriptorRequest;
                    toJSON(_: _17.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetTxDescriptorRequest>): _17.GetTxDescriptorRequest;
                    fromAmino(_: _17.GetTxDescriptorRequestAmino): _17.GetTxDescriptorRequest;
                    toAmino(_: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetTxDescriptorRequestAminoMsg): _17.GetTxDescriptorRequest;
                    toAminoMsg(message: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetTxDescriptorRequestProtoMsg): _17.GetTxDescriptorRequest;
                    toProto(message: _17.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorResponse;
                    fromJSON(object: any): _17.GetTxDescriptorResponse;
                    toJSON(message: _17.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetTxDescriptorResponse>): _17.GetTxDescriptorResponse;
                    fromAmino(object: _17.GetTxDescriptorResponseAmino): _17.GetTxDescriptorResponse;
                    toAmino(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetTxDescriptorResponseAminoMsg): _17.GetTxDescriptorResponse;
                    toAminoMsg(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetTxDescriptorResponseProtoMsg): _17.GetTxDescriptorResponse;
                    toProto(message: _17.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _17.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServicesDescriptor;
                    fromJSON(object: any): _17.QueryServicesDescriptor;
                    toJSON(message: _17.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_17.QueryServicesDescriptor>): _17.QueryServicesDescriptor;
                    fromAmino(object: _17.QueryServicesDescriptorAmino): _17.QueryServicesDescriptor;
                    toAmino(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _17.QueryServicesDescriptorAminoMsg): _17.QueryServicesDescriptor;
                    toAminoMsg(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryServicesDescriptorProtoMsg): _17.QueryServicesDescriptor;
                    toProto(message: _17.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _17.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServiceDescriptor;
                    fromJSON(object: any): _17.QueryServiceDescriptor;
                    toJSON(message: _17.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_17.QueryServiceDescriptor>): _17.QueryServiceDescriptor;
                    fromAmino(object: _17.QueryServiceDescriptorAmino): _17.QueryServiceDescriptor;
                    toAmino(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _17.QueryServiceDescriptorAminoMsg): _17.QueryServiceDescriptor;
                    toAminoMsg(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryServiceDescriptorProtoMsg): _17.QueryServiceDescriptor;
                    toProto(message: _17.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _17.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryMethodDescriptor;
                    fromJSON(object: any): _17.QueryMethodDescriptor;
                    toJSON(message: _17.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_17.QueryMethodDescriptor>): _17.QueryMethodDescriptor;
                    fromAmino(object: _17.QueryMethodDescriptorAmino): _17.QueryMethodDescriptor;
                    toAmino(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _17.QueryMethodDescriptorAminoMsg): _17.QueryMethodDescriptor;
                    toAminoMsg(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryMethodDescriptorProtoMsg): _17.QueryMethodDescriptor;
                    toProto(message: _17.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _18.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Coin;
                fromJSON(object: any): _18.Coin;
                toJSON(message: _18.Coin): unknown;
                fromPartial(object: Partial<_18.Coin>): _18.Coin;
                fromAmino(object: _18.CoinAmino): _18.Coin;
                toAmino(message: _18.Coin): _18.CoinAmino;
                fromAminoMsg(object: _18.CoinAminoMsg): _18.Coin;
                toAminoMsg(message: _18.Coin): _18.CoinAminoMsg;
                fromProtoMsg(message: _18.CoinProtoMsg): _18.Coin;
                toProto(message: _18.Coin): Uint8Array;
                toProtoMsg(message: _18.Coin): _18.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _18.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecCoin;
                fromJSON(object: any): _18.DecCoin;
                toJSON(message: _18.DecCoin): unknown;
                fromPartial(object: Partial<_18.DecCoin>): _18.DecCoin;
                fromAmino(object: _18.DecCoinAmino): _18.DecCoin;
                toAmino(message: _18.DecCoin): _18.DecCoinAmino;
                fromAminoMsg(object: _18.DecCoinAminoMsg): _18.DecCoin;
                toAminoMsg(message: _18.DecCoin): _18.DecCoinAminoMsg;
                fromProtoMsg(message: _18.DecCoinProtoMsg): _18.DecCoin;
                toProto(message: _18.DecCoin): Uint8Array;
                toProtoMsg(message: _18.DecCoin): _18.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _18.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.IntProto;
                fromJSON(object: any): _18.IntProto;
                toJSON(message: _18.IntProto): unknown;
                fromPartial(object: Partial<_18.IntProto>): _18.IntProto;
                fromAmino(object: _18.IntProtoAmino): _18.IntProto;
                toAmino(message: _18.IntProto): _18.IntProtoAmino;
                fromAminoMsg(object: _18.IntProtoAminoMsg): _18.IntProto;
                toAminoMsg(message: _18.IntProto): _18.IntProtoAminoMsg;
                fromProtoMsg(message: _18.IntProtoProtoMsg): _18.IntProto;
                toProto(message: _18.IntProto): Uint8Array;
                toProtoMsg(message: _18.IntProto): _18.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _18.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecProto;
                fromJSON(object: any): _18.DecProto;
                toJSON(message: _18.DecProto): unknown;
                fromPartial(object: Partial<_18.DecProto>): _18.DecProto;
                fromAmino(object: _18.DecProtoAmino): _18.DecProto;
                toAmino(message: _18.DecProto): _18.DecProtoAmino;
                fromAminoMsg(object: _18.DecProtoAminoMsg): _18.DecProto;
                toAminoMsg(message: _18.DecProto): _18.DecProtoAminoMsg;
                fromProtoMsg(message: _18.DecProtoProtoMsg): _18.DecProto;
                toProto(message: _18.DecProto): Uint8Array;
                toProtoMsg(message: _18.DecProto): _18.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _19.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PubKey;
                fromJSON(object: any): _19.PubKey;
                toJSON(message: _19.PubKey): unknown;
                fromPartial(object: Partial<_19.PubKey>): _19.PubKey;
                fromAmino(object: _19.PubKeyAmino): _19.PubKey;
                toAmino(message: _19.PubKey): _19.PubKeyAmino;
                fromAminoMsg(object: _19.PubKeyAminoMsg): _19.PubKey;
                toAminoMsg(message: _19.PubKey): _19.PubKeyAminoMsg;
                fromProtoMsg(message: _19.PubKeyProtoMsg): _19.PubKey;
                toProto(message: _19.PubKey): Uint8Array;
                toProtoMsg(message: _19.PubKey): _19.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _19.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PrivKey;
                fromJSON(object: any): _19.PrivKey;
                toJSON(message: _19.PrivKey): unknown;
                fromPartial(object: Partial<_19.PrivKey>): _19.PrivKey;
                fromAmino(object: _19.PrivKeyAmino): _19.PrivKey;
                toAmino(message: _19.PrivKey): _19.PrivKeyAmino;
                fromAminoMsg(object: _19.PrivKeyAminoMsg): _19.PrivKey;
                toAminoMsg(message: _19.PrivKey): _19.PrivKeyAminoMsg;
                fromProtoMsg(message: _19.PrivKeyProtoMsg): _19.PrivKey;
                toProto(message: _19.PrivKey): Uint8Array;
                toProtoMsg(message: _19.PrivKey): _19.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _20.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.BIP44Params;
                    fromJSON(object: any): _20.BIP44Params;
                    toJSON(message: _20.BIP44Params): unknown;
                    fromPartial(object: Partial<_20.BIP44Params>): _20.BIP44Params;
                    fromAmino(object: _20.BIP44ParamsAmino): _20.BIP44Params;
                    toAmino(message: _20.BIP44Params): _20.BIP44ParamsAmino;
                    fromAminoMsg(object: _20.BIP44ParamsAminoMsg): _20.BIP44Params;
                    toAminoMsg(message: _20.BIP44Params): _20.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _20.BIP44ParamsProtoMsg): _20.BIP44Params;
                    toProto(message: _20.BIP44Params): Uint8Array;
                    toProtoMsg(message: _20.BIP44Params): _20.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _21.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record;
                    fromJSON(object: any): _21.Record;
                    toJSON(message: _21.Record): unknown;
                    fromPartial(object: Partial<_21.Record>): _21.Record;
                    fromAmino(object: _21.RecordAmino): _21.Record;
                    toAmino(message: _21.Record): _21.RecordAmino;
                    fromAminoMsg(object: _21.RecordAminoMsg): _21.Record;
                    toAminoMsg(message: _21.Record): _21.RecordAminoMsg;
                    fromProtoMsg(message: _21.RecordProtoMsg): _21.Record;
                    toProto(message: _21.Record): Uint8Array;
                    toProtoMsg(message: _21.Record): _21.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _21.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Local;
                    fromJSON(object: any): _21.Record_Local;
                    toJSON(message: _21.Record_Local): unknown;
                    fromPartial(object: Partial<_21.Record_Local>): _21.Record_Local;
                    fromAmino(object: _21.Record_LocalAmino): _21.Record_Local;
                    toAmino(message: _21.Record_Local): _21.Record_LocalAmino;
                    fromAminoMsg(object: _21.Record_LocalAminoMsg): _21.Record_Local;
                    toAminoMsg(message: _21.Record_Local): _21.Record_LocalAminoMsg;
                    fromProtoMsg(message: _21.Record_LocalProtoMsg): _21.Record_Local;
                    toProto(message: _21.Record_Local): Uint8Array;
                    toProtoMsg(message: _21.Record_Local): _21.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _21.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Ledger;
                    fromJSON(object: any): _21.Record_Ledger;
                    toJSON(message: _21.Record_Ledger): unknown;
                    fromPartial(object: Partial<_21.Record_Ledger>): _21.Record_Ledger;
                    fromAmino(object: _21.Record_LedgerAmino): _21.Record_Ledger;
                    toAmino(message: _21.Record_Ledger): _21.Record_LedgerAmino;
                    fromAminoMsg(object: _21.Record_LedgerAminoMsg): _21.Record_Ledger;
                    toAminoMsg(message: _21.Record_Ledger): _21.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _21.Record_LedgerProtoMsg): _21.Record_Ledger;
                    toProto(message: _21.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _21.Record_Ledger): _21.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _21.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Multi;
                    fromJSON(_: any): _21.Record_Multi;
                    toJSON(_: _21.Record_Multi): unknown;
                    fromPartial(_: Partial<_21.Record_Multi>): _21.Record_Multi;
                    fromAmino(_: _21.Record_MultiAmino): _21.Record_Multi;
                    toAmino(_: _21.Record_Multi): _21.Record_MultiAmino;
                    fromAminoMsg(object: _21.Record_MultiAminoMsg): _21.Record_Multi;
                    toAminoMsg(message: _21.Record_Multi): _21.Record_MultiAminoMsg;
                    fromProtoMsg(message: _21.Record_MultiProtoMsg): _21.Record_Multi;
                    toProto(message: _21.Record_Multi): Uint8Array;
                    toProtoMsg(message: _21.Record_Multi): _21.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _21.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Offline;
                    fromJSON(_: any): _21.Record_Offline;
                    toJSON(_: _21.Record_Offline): unknown;
                    fromPartial(_: Partial<_21.Record_Offline>): _21.Record_Offline;
                    fromAmino(_: _21.Record_OfflineAmino): _21.Record_Offline;
                    toAmino(_: _21.Record_Offline): _21.Record_OfflineAmino;
                    fromAminoMsg(object: _21.Record_OfflineAminoMsg): _21.Record_Offline;
                    toAminoMsg(message: _21.Record_Offline): _21.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _21.Record_OfflineProtoMsg): _21.Record_Offline;
                    toProto(message: _21.Record_Offline): Uint8Array;
                    toProtoMsg(message: _21.Record_Offline): _21.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _22.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.LegacyAminoPubKey;
                fromJSON(object: any): _22.LegacyAminoPubKey;
                toJSON(message: _22.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_22.LegacyAminoPubKey>): _22.LegacyAminoPubKey;
                fromAmino(object: _22.LegacyAminoPubKeyAmino): _22.LegacyAminoPubKey;
                toAmino(message: _22.LegacyAminoPubKey): _22.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _22.LegacyAminoPubKeyAminoMsg): _22.LegacyAminoPubKey;
                toAminoMsg(message: _22.LegacyAminoPubKey): _22.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _22.LegacyAminoPubKeyProtoMsg): _22.LegacyAminoPubKey;
                toProto(message: _22.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _22.LegacyAminoPubKey): _22.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _23.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PubKey;
                fromJSON(object: any): _23.PubKey;
                toJSON(message: _23.PubKey): unknown;
                fromPartial(object: Partial<_23.PubKey>): _23.PubKey;
                fromAmino(object: _23.PubKeyAmino): _23.PubKey;
                toAmino(message: _23.PubKey): _23.PubKeyAmino;
                fromAminoMsg(object: _23.PubKeyAminoMsg): _23.PubKey;
                toAminoMsg(message: _23.PubKey): _23.PubKeyAminoMsg;
                fromProtoMsg(message: _23.PubKeyProtoMsg): _23.PubKey;
                toProto(message: _23.PubKey): Uint8Array;
                toProtoMsg(message: _23.PubKey): _23.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _23.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PrivKey;
                fromJSON(object: any): _23.PrivKey;
                toJSON(message: _23.PrivKey): unknown;
                fromPartial(object: Partial<_23.PrivKey>): _23.PrivKey;
                fromAmino(object: _23.PrivKeyAmino): _23.PrivKey;
                toAmino(message: _23.PrivKey): _23.PrivKeyAmino;
                fromAminoMsg(object: _23.PrivKeyAminoMsg): _23.PrivKey;
                toAminoMsg(message: _23.PrivKey): _23.PrivKeyAminoMsg;
                fromProtoMsg(message: _23.PrivKeyProtoMsg): _23.PrivKey;
                toProto(message: _23.PrivKey): Uint8Array;
                toProtoMsg(message: _23.PrivKey): _23.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _24.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PubKey;
                fromJSON(object: any): _24.PubKey;
                toJSON(message: _24.PubKey): unknown;
                fromPartial(object: Partial<_24.PubKey>): _24.PubKey;
                fromAmino(object: _24.PubKeyAmino): _24.PubKey;
                toAmino(message: _24.PubKey): _24.PubKeyAmino;
                fromAminoMsg(object: _24.PubKeyAminoMsg): _24.PubKey;
                toAminoMsg(message: _24.PubKey): _24.PubKeyAminoMsg;
                fromProtoMsg(message: _24.PubKeyProtoMsg): _24.PubKey;
                toProto(message: _24.PubKey): Uint8Array;
                toProtoMsg(message: _24.PubKey): _24.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _24.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PrivKey;
                fromJSON(object: any): _24.PrivKey;
                toJSON(message: _24.PrivKey): unknown;
                fromPartial(object: Partial<_24.PrivKey>): _24.PrivKey;
                fromAmino(object: _24.PrivKeyAmino): _24.PrivKey;
                toAmino(message: _24.PrivKey): _24.PrivKeyAmino;
                fromAminoMsg(object: _24.PrivKeyAminoMsg): _24.PrivKey;
                toAminoMsg(message: _24.PrivKey): _24.PrivKeyAminoMsg;
                fromProtoMsg(message: _24.PrivKeyProtoMsg): _24.PrivKey;
                toProto(message: _24.PrivKey): Uint8Array;
                toProtoMsg(message: _24.PrivKey): _24.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _156.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                validatorOutstandingRewards(request: _27.QueryValidatorOutstandingRewardsRequest): Promise<_27.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _27.QueryValidatorCommissionRequest): Promise<_27.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _27.QueryValidatorSlashesRequest): Promise<_27.QueryValidatorSlashesResponse>;
                delegationRewards(request: _27.QueryDelegationRewardsRequest): Promise<_27.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _27.QueryDelegationTotalRewardsRequest): Promise<_27.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _27.QueryDelegatorValidatorsRequest): Promise<_27.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _27.QueryDelegatorWithdrawAddressRequest): Promise<_27.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _27.QueryCommunityPoolRequest): Promise<_27.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _141.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _28.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _28.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _28.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _28.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _28.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _28.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _28.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _28.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _28.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _28.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _28.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _28.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _28.MsgSetWithdrawAddress) => _28.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _28.MsgSetWithdrawAddressAmino) => _28.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _28.MsgWithdrawDelegatorReward) => _28.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _28.MsgWithdrawDelegatorRewardAmino) => _28.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _28.MsgWithdrawValidatorCommission) => _28.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _28.MsgWithdrawValidatorCommissionAmino) => _28.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _28.MsgFundCommunityPool) => _28.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _28.MsgFundCommunityPoolAmino) => _28.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _28.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSetWithdrawAddress;
                fromJSON(object: any): _28.MsgSetWithdrawAddress;
                toJSON(message: _28.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_28.MsgSetWithdrawAddress>): _28.MsgSetWithdrawAddress;
                fromAmino(object: _28.MsgSetWithdrawAddressAmino): _28.MsgSetWithdrawAddress;
                toAmino(message: _28.MsgSetWithdrawAddress): _28.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _28.MsgSetWithdrawAddressAminoMsg): _28.MsgSetWithdrawAddress;
                toAminoMsg(message: _28.MsgSetWithdrawAddress): _28.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _28.MsgSetWithdrawAddressProtoMsg): _28.MsgSetWithdrawAddress;
                toProto(message: _28.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _28.MsgSetWithdrawAddress): _28.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _28.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _28.MsgSetWithdrawAddressResponse;
                toJSON(_: _28.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_28.MsgSetWithdrawAddressResponse>): _28.MsgSetWithdrawAddressResponse;
                fromAmino(_: _28.MsgSetWithdrawAddressResponseAmino): _28.MsgSetWithdrawAddressResponse;
                toAmino(_: _28.MsgSetWithdrawAddressResponse): _28.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _28.MsgSetWithdrawAddressResponseAminoMsg): _28.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _28.MsgSetWithdrawAddressResponse): _28.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _28.MsgSetWithdrawAddressResponseProtoMsg): _28.MsgSetWithdrawAddressResponse;
                toProto(message: _28.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _28.MsgSetWithdrawAddressResponse): _28.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _28.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _28.MsgWithdrawDelegatorReward;
                toJSON(message: _28.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_28.MsgWithdrawDelegatorReward>): _28.MsgWithdrawDelegatorReward;
                fromAmino(object: _28.MsgWithdrawDelegatorRewardAmino): _28.MsgWithdrawDelegatorReward;
                toAmino(message: _28.MsgWithdrawDelegatorReward): _28.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _28.MsgWithdrawDelegatorRewardAminoMsg): _28.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _28.MsgWithdrawDelegatorReward): _28.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawDelegatorRewardProtoMsg): _28.MsgWithdrawDelegatorReward;
                toProto(message: _28.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawDelegatorReward): _28.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _28.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _28.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _28.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_28.MsgWithdrawDelegatorRewardResponse>): _28.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _28.MsgWithdrawDelegatorRewardResponseAmino): _28.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _28.MsgWithdrawDelegatorRewardResponse): _28.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _28.MsgWithdrawDelegatorRewardResponseAminoMsg): _28.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _28.MsgWithdrawDelegatorRewardResponse): _28.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawDelegatorRewardResponseProtoMsg): _28.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _28.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawDelegatorRewardResponse): _28.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _28.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _28.MsgWithdrawValidatorCommission;
                toJSON(message: _28.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_28.MsgWithdrawValidatorCommission>): _28.MsgWithdrawValidatorCommission;
                fromAmino(object: _28.MsgWithdrawValidatorCommissionAmino): _28.MsgWithdrawValidatorCommission;
                toAmino(message: _28.MsgWithdrawValidatorCommission): _28.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _28.MsgWithdrawValidatorCommissionAminoMsg): _28.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _28.MsgWithdrawValidatorCommission): _28.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawValidatorCommissionProtoMsg): _28.MsgWithdrawValidatorCommission;
                toProto(message: _28.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawValidatorCommission): _28.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _28.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _28.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _28.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_28.MsgWithdrawValidatorCommissionResponse>): _28.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _28.MsgWithdrawValidatorCommissionResponseAmino): _28.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _28.MsgWithdrawValidatorCommissionResponse): _28.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _28.MsgWithdrawValidatorCommissionResponseAminoMsg): _28.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _28.MsgWithdrawValidatorCommissionResponse): _28.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawValidatorCommissionResponseProtoMsg): _28.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _28.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawValidatorCommissionResponse): _28.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _28.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgFundCommunityPool;
                fromJSON(object: any): _28.MsgFundCommunityPool;
                toJSON(message: _28.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_28.MsgFundCommunityPool>): _28.MsgFundCommunityPool;
                fromAmino(object: _28.MsgFundCommunityPoolAmino): _28.MsgFundCommunityPool;
                toAmino(message: _28.MsgFundCommunityPool): _28.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _28.MsgFundCommunityPoolAminoMsg): _28.MsgFundCommunityPool;
                toAminoMsg(message: _28.MsgFundCommunityPool): _28.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _28.MsgFundCommunityPoolProtoMsg): _28.MsgFundCommunityPool;
                toProto(message: _28.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _28.MsgFundCommunityPool): _28.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _28.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _28.MsgFundCommunityPoolResponse;
                toJSON(_: _28.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_28.MsgFundCommunityPoolResponse>): _28.MsgFundCommunityPoolResponse;
                fromAmino(_: _28.MsgFundCommunityPoolResponseAmino): _28.MsgFundCommunityPoolResponse;
                toAmino(_: _28.MsgFundCommunityPoolResponse): _28.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _28.MsgFundCommunityPoolResponseAminoMsg): _28.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _28.MsgFundCommunityPoolResponse): _28.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _28.MsgFundCommunityPoolResponseProtoMsg): _28.MsgFundCommunityPoolResponse;
                toProto(message: _28.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _28.MsgFundCommunityPoolResponse): _28.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _27.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsRequest;
                fromJSON(_: any): _27.QueryParamsRequest;
                toJSON(_: _27.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_27.QueryParamsRequest>): _27.QueryParamsRequest;
                fromAmino(_: _27.QueryParamsRequestAmino): _27.QueryParamsRequest;
                toAmino(_: _27.QueryParamsRequest): _27.QueryParamsRequestAmino;
                fromAminoMsg(object: _27.QueryParamsRequestAminoMsg): _27.QueryParamsRequest;
                toAminoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryParamsRequestProtoMsg): _27.QueryParamsRequest;
                toProto(message: _27.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _27.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsResponse;
                fromJSON(object: any): _27.QueryParamsResponse;
                toJSON(message: _27.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_27.QueryParamsResponse>): _27.QueryParamsResponse;
                fromAmino(object: _27.QueryParamsResponseAmino): _27.QueryParamsResponse;
                toAmino(message: _27.QueryParamsResponse): _27.QueryParamsResponseAmino;
                fromAminoMsg(object: _27.QueryParamsResponseAminoMsg): _27.QueryParamsResponse;
                toAminoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryParamsResponseProtoMsg): _27.QueryParamsResponse;
                toProto(message: _27.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _27.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _27.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _27.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_27.QueryValidatorOutstandingRewardsRequest>): _27.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _27.QueryValidatorOutstandingRewardsRequestAmino): _27.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _27.QueryValidatorOutstandingRewardsRequest): _27.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _27.QueryValidatorOutstandingRewardsRequestAminoMsg): _27.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _27.QueryValidatorOutstandingRewardsRequest): _27.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorOutstandingRewardsRequestProtoMsg): _27.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _27.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorOutstandingRewardsRequest): _27.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _27.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _27.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _27.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_27.QueryValidatorOutstandingRewardsResponse>): _27.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _27.QueryValidatorOutstandingRewardsResponseAmino): _27.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _27.QueryValidatorOutstandingRewardsResponse): _27.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _27.QueryValidatorOutstandingRewardsResponseAminoMsg): _27.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _27.QueryValidatorOutstandingRewardsResponse): _27.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorOutstandingRewardsResponseProtoMsg): _27.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _27.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorOutstandingRewardsResponse): _27.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _27.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorCommissionRequest;
                fromJSON(object: any): _27.QueryValidatorCommissionRequest;
                toJSON(message: _27.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_27.QueryValidatorCommissionRequest>): _27.QueryValidatorCommissionRequest;
                fromAmino(object: _27.QueryValidatorCommissionRequestAmino): _27.QueryValidatorCommissionRequest;
                toAmino(message: _27.QueryValidatorCommissionRequest): _27.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _27.QueryValidatorCommissionRequestAminoMsg): _27.QueryValidatorCommissionRequest;
                toAminoMsg(message: _27.QueryValidatorCommissionRequest): _27.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorCommissionRequestProtoMsg): _27.QueryValidatorCommissionRequest;
                toProto(message: _27.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorCommissionRequest): _27.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _27.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorCommissionResponse;
                fromJSON(object: any): _27.QueryValidatorCommissionResponse;
                toJSON(message: _27.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_27.QueryValidatorCommissionResponse>): _27.QueryValidatorCommissionResponse;
                fromAmino(object: _27.QueryValidatorCommissionResponseAmino): _27.QueryValidatorCommissionResponse;
                toAmino(message: _27.QueryValidatorCommissionResponse): _27.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _27.QueryValidatorCommissionResponseAminoMsg): _27.QueryValidatorCommissionResponse;
                toAminoMsg(message: _27.QueryValidatorCommissionResponse): _27.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorCommissionResponseProtoMsg): _27.QueryValidatorCommissionResponse;
                toProto(message: _27.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorCommissionResponse): _27.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _27.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorSlashesRequest;
                fromJSON(object: any): _27.QueryValidatorSlashesRequest;
                toJSON(message: _27.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_27.QueryValidatorSlashesRequest>): _27.QueryValidatorSlashesRequest;
                fromAmino(object: _27.QueryValidatorSlashesRequestAmino): _27.QueryValidatorSlashesRequest;
                toAmino(message: _27.QueryValidatorSlashesRequest): _27.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _27.QueryValidatorSlashesRequestAminoMsg): _27.QueryValidatorSlashesRequest;
                toAminoMsg(message: _27.QueryValidatorSlashesRequest): _27.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorSlashesRequestProtoMsg): _27.QueryValidatorSlashesRequest;
                toProto(message: _27.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorSlashesRequest): _27.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _27.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorSlashesResponse;
                fromJSON(object: any): _27.QueryValidatorSlashesResponse;
                toJSON(message: _27.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_27.QueryValidatorSlashesResponse>): _27.QueryValidatorSlashesResponse;
                fromAmino(object: _27.QueryValidatorSlashesResponseAmino): _27.QueryValidatorSlashesResponse;
                toAmino(message: _27.QueryValidatorSlashesResponse): _27.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _27.QueryValidatorSlashesResponseAminoMsg): _27.QueryValidatorSlashesResponse;
                toAminoMsg(message: _27.QueryValidatorSlashesResponse): _27.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorSlashesResponseProtoMsg): _27.QueryValidatorSlashesResponse;
                toProto(message: _27.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorSlashesResponse): _27.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _27.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationRewardsRequest;
                fromJSON(object: any): _27.QueryDelegationRewardsRequest;
                toJSON(message: _27.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_27.QueryDelegationRewardsRequest>): _27.QueryDelegationRewardsRequest;
                fromAmino(object: _27.QueryDelegationRewardsRequestAmino): _27.QueryDelegationRewardsRequest;
                toAmino(message: _27.QueryDelegationRewardsRequest): _27.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _27.QueryDelegationRewardsRequestAminoMsg): _27.QueryDelegationRewardsRequest;
                toAminoMsg(message: _27.QueryDelegationRewardsRequest): _27.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationRewardsRequestProtoMsg): _27.QueryDelegationRewardsRequest;
                toProto(message: _27.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationRewardsRequest): _27.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _27.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationRewardsResponse;
                fromJSON(object: any): _27.QueryDelegationRewardsResponse;
                toJSON(message: _27.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_27.QueryDelegationRewardsResponse>): _27.QueryDelegationRewardsResponse;
                fromAmino(object: _27.QueryDelegationRewardsResponseAmino): _27.QueryDelegationRewardsResponse;
                toAmino(message: _27.QueryDelegationRewardsResponse): _27.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _27.QueryDelegationRewardsResponseAminoMsg): _27.QueryDelegationRewardsResponse;
                toAminoMsg(message: _27.QueryDelegationRewardsResponse): _27.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationRewardsResponseProtoMsg): _27.QueryDelegationRewardsResponse;
                toProto(message: _27.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationRewardsResponse): _27.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _27.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _27.QueryDelegationTotalRewardsRequest;
                toJSON(message: _27.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_27.QueryDelegationTotalRewardsRequest>): _27.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _27.QueryDelegationTotalRewardsRequestAmino): _27.QueryDelegationTotalRewardsRequest;
                toAmino(message: _27.QueryDelegationTotalRewardsRequest): _27.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _27.QueryDelegationTotalRewardsRequestAminoMsg): _27.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _27.QueryDelegationTotalRewardsRequest): _27.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationTotalRewardsRequestProtoMsg): _27.QueryDelegationTotalRewardsRequest;
                toProto(message: _27.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationTotalRewardsRequest): _27.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _27.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _27.QueryDelegationTotalRewardsResponse;
                toJSON(message: _27.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_27.QueryDelegationTotalRewardsResponse>): _27.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _27.QueryDelegationTotalRewardsResponseAmino): _27.QueryDelegationTotalRewardsResponse;
                toAmino(message: _27.QueryDelegationTotalRewardsResponse): _27.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _27.QueryDelegationTotalRewardsResponseAminoMsg): _27.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _27.QueryDelegationTotalRewardsResponse): _27.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationTotalRewardsResponseProtoMsg): _27.QueryDelegationTotalRewardsResponse;
                toProto(message: _27.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationTotalRewardsResponse): _27.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _27.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _27.QueryDelegatorValidatorsRequest;
                toJSON(message: _27.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_27.QueryDelegatorValidatorsRequest>): _27.QueryDelegatorValidatorsRequest;
                fromAmino(object: _27.QueryDelegatorValidatorsRequestAmino): _27.QueryDelegatorValidatorsRequest;
                toAmino(message: _27.QueryDelegatorValidatorsRequest): _27.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _27.QueryDelegatorValidatorsRequestAminoMsg): _27.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _27.QueryDelegatorValidatorsRequest): _27.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorValidatorsRequestProtoMsg): _27.QueryDelegatorValidatorsRequest;
                toProto(message: _27.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorValidatorsRequest): _27.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _27.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _27.QueryDelegatorValidatorsResponse;
                toJSON(message: _27.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_27.QueryDelegatorValidatorsResponse>): _27.QueryDelegatorValidatorsResponse;
                fromAmino(object: _27.QueryDelegatorValidatorsResponseAmino): _27.QueryDelegatorValidatorsResponse;
                toAmino(message: _27.QueryDelegatorValidatorsResponse): _27.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _27.QueryDelegatorValidatorsResponseAminoMsg): _27.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _27.QueryDelegatorValidatorsResponse): _27.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorValidatorsResponseProtoMsg): _27.QueryDelegatorValidatorsResponse;
                toProto(message: _27.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorValidatorsResponse): _27.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _27.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _27.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _27.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_27.QueryDelegatorWithdrawAddressRequest>): _27.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _27.QueryDelegatorWithdrawAddressRequestAmino): _27.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _27.QueryDelegatorWithdrawAddressRequest): _27.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _27.QueryDelegatorWithdrawAddressRequestAminoMsg): _27.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _27.QueryDelegatorWithdrawAddressRequest): _27.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorWithdrawAddressRequestProtoMsg): _27.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _27.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorWithdrawAddressRequest): _27.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _27.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _27.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _27.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_27.QueryDelegatorWithdrawAddressResponse>): _27.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _27.QueryDelegatorWithdrawAddressResponseAmino): _27.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _27.QueryDelegatorWithdrawAddressResponse): _27.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _27.QueryDelegatorWithdrawAddressResponseAminoMsg): _27.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _27.QueryDelegatorWithdrawAddressResponse): _27.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorWithdrawAddressResponseProtoMsg): _27.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _27.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorWithdrawAddressResponse): _27.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _27.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryCommunityPoolRequest;
                fromJSON(_: any): _27.QueryCommunityPoolRequest;
                toJSON(_: _27.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_27.QueryCommunityPoolRequest>): _27.QueryCommunityPoolRequest;
                fromAmino(_: _27.QueryCommunityPoolRequestAmino): _27.QueryCommunityPoolRequest;
                toAmino(_: _27.QueryCommunityPoolRequest): _27.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _27.QueryCommunityPoolRequestAminoMsg): _27.QueryCommunityPoolRequest;
                toAminoMsg(message: _27.QueryCommunityPoolRequest): _27.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _27.QueryCommunityPoolRequestProtoMsg): _27.QueryCommunityPoolRequest;
                toProto(message: _27.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _27.QueryCommunityPoolRequest): _27.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _27.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryCommunityPoolResponse;
                fromJSON(object: any): _27.QueryCommunityPoolResponse;
                toJSON(message: _27.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_27.QueryCommunityPoolResponse>): _27.QueryCommunityPoolResponse;
                fromAmino(object: _27.QueryCommunityPoolResponseAmino): _27.QueryCommunityPoolResponse;
                toAmino(message: _27.QueryCommunityPoolResponse): _27.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _27.QueryCommunityPoolResponseAminoMsg): _27.QueryCommunityPoolResponse;
                toAminoMsg(message: _27.QueryCommunityPoolResponse): _27.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _27.QueryCommunityPoolResponseProtoMsg): _27.QueryCommunityPoolResponse;
                toProto(message: _27.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _27.QueryCommunityPoolResponse): _27.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _26.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegatorWithdrawInfo;
                fromJSON(object: any): _26.DelegatorWithdrawInfo;
                toJSON(message: _26.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_26.DelegatorWithdrawInfo>): _26.DelegatorWithdrawInfo;
                fromAmino(object: _26.DelegatorWithdrawInfoAmino): _26.DelegatorWithdrawInfo;
                toAmino(message: _26.DelegatorWithdrawInfo): _26.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _26.DelegatorWithdrawInfoAminoMsg): _26.DelegatorWithdrawInfo;
                toAminoMsg(message: _26.DelegatorWithdrawInfo): _26.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _26.DelegatorWithdrawInfoProtoMsg): _26.DelegatorWithdrawInfo;
                toProto(message: _26.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _26.DelegatorWithdrawInfo): _26.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _26.ValidatorOutstandingRewardsRecord;
                toJSON(message: _26.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_26.ValidatorOutstandingRewardsRecord>): _26.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _26.ValidatorOutstandingRewardsRecordAmino): _26.ValidatorOutstandingRewardsRecord;
                toAmino(message: _26.ValidatorOutstandingRewardsRecord): _26.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _26.ValidatorOutstandingRewardsRecordAminoMsg): _26.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _26.ValidatorOutstandingRewardsRecord): _26.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorOutstandingRewardsRecordProtoMsg): _26.ValidatorOutstandingRewardsRecord;
                toProto(message: _26.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorOutstandingRewardsRecord): _26.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _26.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _26.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_26.ValidatorAccumulatedCommissionRecord>): _26.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _26.ValidatorAccumulatedCommissionRecordAmino): _26.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _26.ValidatorAccumulatedCommissionRecord): _26.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _26.ValidatorAccumulatedCommissionRecordAminoMsg): _26.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _26.ValidatorAccumulatedCommissionRecord): _26.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorAccumulatedCommissionRecordProtoMsg): _26.ValidatorAccumulatedCommissionRecord;
                toProto(message: _26.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorAccumulatedCommissionRecord): _26.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _26.ValidatorHistoricalRewardsRecord;
                toJSON(message: _26.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_26.ValidatorHistoricalRewardsRecord>): _26.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _26.ValidatorHistoricalRewardsRecordAmino): _26.ValidatorHistoricalRewardsRecord;
                toAmino(message: _26.ValidatorHistoricalRewardsRecord): _26.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _26.ValidatorHistoricalRewardsRecordAminoMsg): _26.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _26.ValidatorHistoricalRewardsRecord): _26.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorHistoricalRewardsRecordProtoMsg): _26.ValidatorHistoricalRewardsRecord;
                toProto(message: _26.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorHistoricalRewardsRecord): _26.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _26.ValidatorCurrentRewardsRecord;
                toJSON(message: _26.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_26.ValidatorCurrentRewardsRecord>): _26.ValidatorCurrentRewardsRecord;
                fromAmino(object: _26.ValidatorCurrentRewardsRecordAmino): _26.ValidatorCurrentRewardsRecord;
                toAmino(message: _26.ValidatorCurrentRewardsRecord): _26.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _26.ValidatorCurrentRewardsRecordAminoMsg): _26.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _26.ValidatorCurrentRewardsRecord): _26.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorCurrentRewardsRecordProtoMsg): _26.ValidatorCurrentRewardsRecord;
                toProto(message: _26.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorCurrentRewardsRecord): _26.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _26.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegatorStartingInfoRecord;
                fromJSON(object: any): _26.DelegatorStartingInfoRecord;
                toJSON(message: _26.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_26.DelegatorStartingInfoRecord>): _26.DelegatorStartingInfoRecord;
                fromAmino(object: _26.DelegatorStartingInfoRecordAmino): _26.DelegatorStartingInfoRecord;
                toAmino(message: _26.DelegatorStartingInfoRecord): _26.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _26.DelegatorStartingInfoRecordAminoMsg): _26.DelegatorStartingInfoRecord;
                toAminoMsg(message: _26.DelegatorStartingInfoRecord): _26.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _26.DelegatorStartingInfoRecordProtoMsg): _26.DelegatorStartingInfoRecord;
                toProto(message: _26.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _26.DelegatorStartingInfoRecord): _26.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorSlashEventRecord;
                fromJSON(object: any): _26.ValidatorSlashEventRecord;
                toJSON(message: _26.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_26.ValidatorSlashEventRecord>): _26.ValidatorSlashEventRecord;
                fromAmino(object: _26.ValidatorSlashEventRecordAmino): _26.ValidatorSlashEventRecord;
                toAmino(message: _26.ValidatorSlashEventRecord): _26.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _26.ValidatorSlashEventRecordAminoMsg): _26.ValidatorSlashEventRecord;
                toAminoMsg(message: _26.ValidatorSlashEventRecord): _26.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorSlashEventRecordProtoMsg): _26.ValidatorSlashEventRecord;
                toProto(message: _26.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorSlashEventRecord): _26.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromJSON(object: any): _26.GenesisState;
                toJSON(message: _26.GenesisState): unknown;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
                fromAmino(object: _26.GenesisStateAmino): _26.GenesisState;
                toAmino(message: _26.GenesisState): _26.GenesisStateAmino;
                fromAminoMsg(object: _26.GenesisStateAminoMsg): _26.GenesisState;
                toAminoMsg(message: _26.GenesisState): _26.GenesisStateAminoMsg;
                fromProtoMsg(message: _26.GenesisStateProtoMsg): _26.GenesisState;
                toProto(message: _26.GenesisState): Uint8Array;
                toProtoMsg(message: _26.GenesisState): _26.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _25.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Params;
                fromJSON(object: any): _25.Params;
                toJSON(message: _25.Params): unknown;
                fromPartial(object: Partial<_25.Params>): _25.Params;
                fromAmino(object: _25.ParamsAmino): _25.Params;
                toAmino(message: _25.Params): _25.ParamsAmino;
                fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
                toAminoMsg(message: _25.Params): _25.ParamsAminoMsg;
                fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
                toProto(message: _25.Params): Uint8Array;
                toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _25.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorHistoricalRewards;
                fromJSON(object: any): _25.ValidatorHistoricalRewards;
                toJSON(message: _25.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_25.ValidatorHistoricalRewards>): _25.ValidatorHistoricalRewards;
                fromAmino(object: _25.ValidatorHistoricalRewardsAmino): _25.ValidatorHistoricalRewards;
                toAmino(message: _25.ValidatorHistoricalRewards): _25.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _25.ValidatorHistoricalRewardsAminoMsg): _25.ValidatorHistoricalRewards;
                toAminoMsg(message: _25.ValidatorHistoricalRewards): _25.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _25.ValidatorHistoricalRewardsProtoMsg): _25.ValidatorHistoricalRewards;
                toProto(message: _25.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _25.ValidatorHistoricalRewards): _25.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _25.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorCurrentRewards;
                fromJSON(object: any): _25.ValidatorCurrentRewards;
                toJSON(message: _25.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_25.ValidatorCurrentRewards>): _25.ValidatorCurrentRewards;
                fromAmino(object: _25.ValidatorCurrentRewardsAmino): _25.ValidatorCurrentRewards;
                toAmino(message: _25.ValidatorCurrentRewards): _25.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _25.ValidatorCurrentRewardsAminoMsg): _25.ValidatorCurrentRewards;
                toAminoMsg(message: _25.ValidatorCurrentRewards): _25.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _25.ValidatorCurrentRewardsProtoMsg): _25.ValidatorCurrentRewards;
                toProto(message: _25.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _25.ValidatorCurrentRewards): _25.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _25.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorAccumulatedCommission;
                fromJSON(object: any): _25.ValidatorAccumulatedCommission;
                toJSON(message: _25.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_25.ValidatorAccumulatedCommission>): _25.ValidatorAccumulatedCommission;
                fromAmino(object: _25.ValidatorAccumulatedCommissionAmino): _25.ValidatorAccumulatedCommission;
                toAmino(message: _25.ValidatorAccumulatedCommission): _25.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _25.ValidatorAccumulatedCommissionAminoMsg): _25.ValidatorAccumulatedCommission;
                toAminoMsg(message: _25.ValidatorAccumulatedCommission): _25.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _25.ValidatorAccumulatedCommissionProtoMsg): _25.ValidatorAccumulatedCommission;
                toProto(message: _25.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _25.ValidatorAccumulatedCommission): _25.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _25.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorOutstandingRewards;
                fromJSON(object: any): _25.ValidatorOutstandingRewards;
                toJSON(message: _25.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_25.ValidatorOutstandingRewards>): _25.ValidatorOutstandingRewards;
                fromAmino(object: _25.ValidatorOutstandingRewardsAmino): _25.ValidatorOutstandingRewards;
                toAmino(message: _25.ValidatorOutstandingRewards): _25.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _25.ValidatorOutstandingRewardsAminoMsg): _25.ValidatorOutstandingRewards;
                toAminoMsg(message: _25.ValidatorOutstandingRewards): _25.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _25.ValidatorOutstandingRewardsProtoMsg): _25.ValidatorOutstandingRewards;
                toProto(message: _25.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _25.ValidatorOutstandingRewards): _25.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _25.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorSlashEvent;
                fromJSON(object: any): _25.ValidatorSlashEvent;
                toJSON(message: _25.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_25.ValidatorSlashEvent>): _25.ValidatorSlashEvent;
                fromAmino(object: _25.ValidatorSlashEventAmino): _25.ValidatorSlashEvent;
                toAmino(message: _25.ValidatorSlashEvent): _25.ValidatorSlashEventAmino;
                fromAminoMsg(object: _25.ValidatorSlashEventAminoMsg): _25.ValidatorSlashEvent;
                toAminoMsg(message: _25.ValidatorSlashEvent): _25.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _25.ValidatorSlashEventProtoMsg): _25.ValidatorSlashEvent;
                toProto(message: _25.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _25.ValidatorSlashEvent): _25.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _25.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorSlashEvents;
                fromJSON(object: any): _25.ValidatorSlashEvents;
                toJSON(message: _25.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_25.ValidatorSlashEvents>): _25.ValidatorSlashEvents;
                fromAmino(object: _25.ValidatorSlashEventsAmino): _25.ValidatorSlashEvents;
                toAmino(message: _25.ValidatorSlashEvents): _25.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _25.ValidatorSlashEventsAminoMsg): _25.ValidatorSlashEvents;
                toAminoMsg(message: _25.ValidatorSlashEvents): _25.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _25.ValidatorSlashEventsProtoMsg): _25.ValidatorSlashEvents;
                toProto(message: _25.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _25.ValidatorSlashEvents): _25.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _25.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.FeePool;
                fromJSON(object: any): _25.FeePool;
                toJSON(message: _25.FeePool): unknown;
                fromPartial(object: Partial<_25.FeePool>): _25.FeePool;
                fromAmino(object: _25.FeePoolAmino): _25.FeePool;
                toAmino(message: _25.FeePool): _25.FeePoolAmino;
                fromAminoMsg(object: _25.FeePoolAminoMsg): _25.FeePool;
                toAminoMsg(message: _25.FeePool): _25.FeePoolAminoMsg;
                fromProtoMsg(message: _25.FeePoolProtoMsg): _25.FeePool;
                toProto(message: _25.FeePool): Uint8Array;
                toProtoMsg(message: _25.FeePool): _25.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _25.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommunityPoolSpendProposal;
                fromJSON(object: any): _25.CommunityPoolSpendProposal;
                toJSON(message: _25.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_25.CommunityPoolSpendProposal>): _25.CommunityPoolSpendProposal;
                fromAmino(object: _25.CommunityPoolSpendProposalAmino): _25.CommunityPoolSpendProposal;
                toAmino(message: _25.CommunityPoolSpendProposal): _25.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _25.CommunityPoolSpendProposalAminoMsg): _25.CommunityPoolSpendProposal;
                toAminoMsg(message: _25.CommunityPoolSpendProposal): _25.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _25.CommunityPoolSpendProposalProtoMsg): _25.CommunityPoolSpendProposal;
                toProto(message: _25.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _25.CommunityPoolSpendProposal): _25.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _25.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegatorStartingInfo;
                fromJSON(object: any): _25.DelegatorStartingInfo;
                toJSON(message: _25.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_25.DelegatorStartingInfo>): _25.DelegatorStartingInfo;
                fromAmino(object: _25.DelegatorStartingInfoAmino): _25.DelegatorStartingInfo;
                toAmino(message: _25.DelegatorStartingInfo): _25.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _25.DelegatorStartingInfoAminoMsg): _25.DelegatorStartingInfo;
                toAminoMsg(message: _25.DelegatorStartingInfo): _25.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _25.DelegatorStartingInfoProtoMsg): _25.DelegatorStartingInfo;
                toProto(message: _25.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _25.DelegatorStartingInfo): _25.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _25.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegationDelegatorReward;
                fromJSON(object: any): _25.DelegationDelegatorReward;
                toJSON(message: _25.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_25.DelegationDelegatorReward>): _25.DelegationDelegatorReward;
                fromAmino(object: _25.DelegationDelegatorRewardAmino): _25.DelegationDelegatorReward;
                toAmino(message: _25.DelegationDelegatorReward): _25.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _25.DelegationDelegatorRewardAminoMsg): _25.DelegationDelegatorReward;
                toAminoMsg(message: _25.DelegationDelegatorReward): _25.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _25.DelegationDelegatorRewardProtoMsg): _25.DelegationDelegatorReward;
                toProto(message: _25.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _25.DelegationDelegatorReward): _25.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _25.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _25.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _25.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_25.CommunityPoolSpendProposalWithDeposit>): _25.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _25.CommunityPoolSpendProposalWithDepositAmino): _25.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _25.CommunityPoolSpendProposalWithDeposit): _25.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _25.CommunityPoolSpendProposalWithDepositAminoMsg): _25.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _25.CommunityPoolSpendProposalWithDeposit): _25.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _25.CommunityPoolSpendProposalWithDepositProtoMsg): _25.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _25.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _25.CommunityPoolSpendProposalWithDeposit): _25.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _157.MsgClientImpl;
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _31.QueryProposalRequest): Promise<_31.QueryProposalResponse>;
                proposals(request: _31.QueryProposalsRequest): Promise<_31.QueryProposalsResponse>;
                vote(request: _31.QueryVoteRequest): Promise<_31.QueryVoteResponse>;
                votes(request: _31.QueryVotesRequest): Promise<_31.QueryVotesResponse>;
                params(request: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                deposit(request: _31.QueryDepositRequest): Promise<_31.QueryDepositResponse>;
                deposits(request: _31.QueryDepositsRequest): Promise<_31.QueryDepositsResponse>;
                tallyResult(request: _31.QueryTallyResultRequest): Promise<_31.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _32.MsgSubmitProposal;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: _32.MsgVote;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _32.MsgVoteWeighted;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: _32.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _32.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _32.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _32.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _32.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _32.MsgSubmitProposal;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: _32.MsgVote;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _32.MsgVoteWeighted;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: _32.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _32.MsgSubmitProposal) => _32.MsgSubmitProposalAmino;
                    fromAmino: (object: _32.MsgSubmitProposalAmino) => _32.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _32.MsgVote) => _32.MsgVoteAmino;
                    fromAmino: (object: _32.MsgVoteAmino) => _32.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _32.MsgVoteWeighted) => _32.MsgVoteWeightedAmino;
                    fromAmino: (object: _32.MsgVoteWeightedAmino) => _32.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _32.MsgDeposit) => _32.MsgDepositAmino;
                    fromAmino: (object: _32.MsgDepositAmino) => _32.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _32.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgSubmitProposal;
                fromJSON(object: any): _32.MsgSubmitProposal;
                toJSON(message: _32.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_32.MsgSubmitProposal>): _32.MsgSubmitProposal;
                fromAmino(object: _32.MsgSubmitProposalAmino): _32.MsgSubmitProposal;
                toAmino(message: _32.MsgSubmitProposal): _32.MsgSubmitProposalAmino;
                fromAminoMsg(object: _32.MsgSubmitProposalAminoMsg): _32.MsgSubmitProposal;
                toAminoMsg(message: _32.MsgSubmitProposal): _32.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _32.MsgSubmitProposalProtoMsg): _32.MsgSubmitProposal;
                toProto(message: _32.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _32.MsgSubmitProposal): _32.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _32.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgSubmitProposalResponse;
                fromJSON(object: any): _32.MsgSubmitProposalResponse;
                toJSON(message: _32.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_32.MsgSubmitProposalResponse>): _32.MsgSubmitProposalResponse;
                fromAmino(object: _32.MsgSubmitProposalResponseAmino): _32.MsgSubmitProposalResponse;
                toAmino(message: _32.MsgSubmitProposalResponse): _32.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _32.MsgSubmitProposalResponseAminoMsg): _32.MsgSubmitProposalResponse;
                toAminoMsg(message: _32.MsgSubmitProposalResponse): _32.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _32.MsgSubmitProposalResponseProtoMsg): _32.MsgSubmitProposalResponse;
                toProto(message: _32.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _32.MsgSubmitProposalResponse): _32.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _32.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVote;
                fromJSON(object: any): _32.MsgVote;
                toJSON(message: _32.MsgVote): unknown;
                fromPartial(object: Partial<_32.MsgVote>): _32.MsgVote;
                fromAmino(object: _32.MsgVoteAmino): _32.MsgVote;
                toAmino(message: _32.MsgVote): _32.MsgVoteAmino;
                fromAminoMsg(object: _32.MsgVoteAminoMsg): _32.MsgVote;
                toAminoMsg(message: _32.MsgVote): _32.MsgVoteAminoMsg;
                fromProtoMsg(message: _32.MsgVoteProtoMsg): _32.MsgVote;
                toProto(message: _32.MsgVote): Uint8Array;
                toProtoMsg(message: _32.MsgVote): _32.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _32.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteResponse;
                fromJSON(_: any): _32.MsgVoteResponse;
                toJSON(_: _32.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_32.MsgVoteResponse>): _32.MsgVoteResponse;
                fromAmino(_: _32.MsgVoteResponseAmino): _32.MsgVoteResponse;
                toAmino(_: _32.MsgVoteResponse): _32.MsgVoteResponseAmino;
                fromAminoMsg(object: _32.MsgVoteResponseAminoMsg): _32.MsgVoteResponse;
                toAminoMsg(message: _32.MsgVoteResponse): _32.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _32.MsgVoteResponseProtoMsg): _32.MsgVoteResponse;
                toProto(message: _32.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _32.MsgVoteResponse): _32.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _32.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteWeighted;
                fromJSON(object: any): _32.MsgVoteWeighted;
                toJSON(message: _32.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_32.MsgVoteWeighted>): _32.MsgVoteWeighted;
                fromAmino(object: _32.MsgVoteWeightedAmino): _32.MsgVoteWeighted;
                toAmino(message: _32.MsgVoteWeighted): _32.MsgVoteWeightedAmino;
                fromAminoMsg(object: _32.MsgVoteWeightedAminoMsg): _32.MsgVoteWeighted;
                toAminoMsg(message: _32.MsgVoteWeighted): _32.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _32.MsgVoteWeightedProtoMsg): _32.MsgVoteWeighted;
                toProto(message: _32.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _32.MsgVoteWeighted): _32.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _32.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteWeightedResponse;
                fromJSON(_: any): _32.MsgVoteWeightedResponse;
                toJSON(_: _32.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_32.MsgVoteWeightedResponse>): _32.MsgVoteWeightedResponse;
                fromAmino(_: _32.MsgVoteWeightedResponseAmino): _32.MsgVoteWeightedResponse;
                toAmino(_: _32.MsgVoteWeightedResponse): _32.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _32.MsgVoteWeightedResponseAminoMsg): _32.MsgVoteWeightedResponse;
                toAminoMsg(message: _32.MsgVoteWeightedResponse): _32.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _32.MsgVoteWeightedResponseProtoMsg): _32.MsgVoteWeightedResponse;
                toProto(message: _32.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _32.MsgVoteWeightedResponse): _32.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _32.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgDeposit;
                fromJSON(object: any): _32.MsgDeposit;
                toJSON(message: _32.MsgDeposit): unknown;
                fromPartial(object: Partial<_32.MsgDeposit>): _32.MsgDeposit;
                fromAmino(object: _32.MsgDepositAmino): _32.MsgDeposit;
                toAmino(message: _32.MsgDeposit): _32.MsgDepositAmino;
                fromAminoMsg(object: _32.MsgDepositAminoMsg): _32.MsgDeposit;
                toAminoMsg(message: _32.MsgDeposit): _32.MsgDepositAminoMsg;
                fromProtoMsg(message: _32.MsgDepositProtoMsg): _32.MsgDeposit;
                toProto(message: _32.MsgDeposit): Uint8Array;
                toProtoMsg(message: _32.MsgDeposit): _32.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _32.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgDepositResponse;
                fromJSON(_: any): _32.MsgDepositResponse;
                toJSON(_: _32.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_32.MsgDepositResponse>): _32.MsgDepositResponse;
                fromAmino(_: _32.MsgDepositResponseAmino): _32.MsgDepositResponse;
                toAmino(_: _32.MsgDepositResponse): _32.MsgDepositResponseAmino;
                fromAminoMsg(object: _32.MsgDepositResponseAminoMsg): _32.MsgDepositResponse;
                toAminoMsg(message: _32.MsgDepositResponse): _32.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _32.MsgDepositResponseProtoMsg): _32.MsgDepositResponse;
                toProto(message: _32.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _32.MsgDepositResponse): _32.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _30.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _31.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalRequest;
                fromJSON(object: any): _31.QueryProposalRequest;
                toJSON(message: _31.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_31.QueryProposalRequest>): _31.QueryProposalRequest;
                fromAmino(object: _31.QueryProposalRequestAmino): _31.QueryProposalRequest;
                toAmino(message: _31.QueryProposalRequest): _31.QueryProposalRequestAmino;
                fromAminoMsg(object: _31.QueryProposalRequestAminoMsg): _31.QueryProposalRequest;
                toAminoMsg(message: _31.QueryProposalRequest): _31.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _31.QueryProposalRequestProtoMsg): _31.QueryProposalRequest;
                toProto(message: _31.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _31.QueryProposalRequest): _31.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _31.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalResponse;
                fromJSON(object: any): _31.QueryProposalResponse;
                toJSON(message: _31.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_31.QueryProposalResponse>): _31.QueryProposalResponse;
                fromAmino(object: _31.QueryProposalResponseAmino): _31.QueryProposalResponse;
                toAmino(message: _31.QueryProposalResponse): _31.QueryProposalResponseAmino;
                fromAminoMsg(object: _31.QueryProposalResponseAminoMsg): _31.QueryProposalResponse;
                toAminoMsg(message: _31.QueryProposalResponse): _31.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _31.QueryProposalResponseProtoMsg): _31.QueryProposalResponse;
                toProto(message: _31.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _31.QueryProposalResponse): _31.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _31.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalsRequest;
                fromJSON(object: any): _31.QueryProposalsRequest;
                toJSON(message: _31.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_31.QueryProposalsRequest>): _31.QueryProposalsRequest;
                fromAmino(object: _31.QueryProposalsRequestAmino): _31.QueryProposalsRequest;
                toAmino(message: _31.QueryProposalsRequest): _31.QueryProposalsRequestAmino;
                fromAminoMsg(object: _31.QueryProposalsRequestAminoMsg): _31.QueryProposalsRequest;
                toAminoMsg(message: _31.QueryProposalsRequest): _31.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryProposalsRequestProtoMsg): _31.QueryProposalsRequest;
                toProto(message: _31.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryProposalsRequest): _31.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _31.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalsResponse;
                fromJSON(object: any): _31.QueryProposalsResponse;
                toJSON(message: _31.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_31.QueryProposalsResponse>): _31.QueryProposalsResponse;
                fromAmino(object: _31.QueryProposalsResponseAmino): _31.QueryProposalsResponse;
                toAmino(message: _31.QueryProposalsResponse): _31.QueryProposalsResponseAmino;
                fromAminoMsg(object: _31.QueryProposalsResponseAminoMsg): _31.QueryProposalsResponse;
                toAminoMsg(message: _31.QueryProposalsResponse): _31.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryProposalsResponseProtoMsg): _31.QueryProposalsResponse;
                toProto(message: _31.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryProposalsResponse): _31.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _31.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVoteRequest;
                fromJSON(object: any): _31.QueryVoteRequest;
                toJSON(message: _31.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_31.QueryVoteRequest>): _31.QueryVoteRequest;
                fromAmino(object: _31.QueryVoteRequestAmino): _31.QueryVoteRequest;
                toAmino(message: _31.QueryVoteRequest): _31.QueryVoteRequestAmino;
                fromAminoMsg(object: _31.QueryVoteRequestAminoMsg): _31.QueryVoteRequest;
                toAminoMsg(message: _31.QueryVoteRequest): _31.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _31.QueryVoteRequestProtoMsg): _31.QueryVoteRequest;
                toProto(message: _31.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _31.QueryVoteRequest): _31.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _31.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVoteResponse;
                fromJSON(object: any): _31.QueryVoteResponse;
                toJSON(message: _31.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_31.QueryVoteResponse>): _31.QueryVoteResponse;
                fromAmino(object: _31.QueryVoteResponseAmino): _31.QueryVoteResponse;
                toAmino(message: _31.QueryVoteResponse): _31.QueryVoteResponseAmino;
                fromAminoMsg(object: _31.QueryVoteResponseAminoMsg): _31.QueryVoteResponse;
                toAminoMsg(message: _31.QueryVoteResponse): _31.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _31.QueryVoteResponseProtoMsg): _31.QueryVoteResponse;
                toProto(message: _31.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _31.QueryVoteResponse): _31.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _31.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVotesRequest;
                fromJSON(object: any): _31.QueryVotesRequest;
                toJSON(message: _31.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_31.QueryVotesRequest>): _31.QueryVotesRequest;
                fromAmino(object: _31.QueryVotesRequestAmino): _31.QueryVotesRequest;
                toAmino(message: _31.QueryVotesRequest): _31.QueryVotesRequestAmino;
                fromAminoMsg(object: _31.QueryVotesRequestAminoMsg): _31.QueryVotesRequest;
                toAminoMsg(message: _31.QueryVotesRequest): _31.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _31.QueryVotesRequestProtoMsg): _31.QueryVotesRequest;
                toProto(message: _31.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _31.QueryVotesRequest): _31.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _31.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVotesResponse;
                fromJSON(object: any): _31.QueryVotesResponse;
                toJSON(message: _31.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_31.QueryVotesResponse>): _31.QueryVotesResponse;
                fromAmino(object: _31.QueryVotesResponseAmino): _31.QueryVotesResponse;
                toAmino(message: _31.QueryVotesResponse): _31.QueryVotesResponseAmino;
                fromAminoMsg(object: _31.QueryVotesResponseAminoMsg): _31.QueryVotesResponse;
                toAminoMsg(message: _31.QueryVotesResponse): _31.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _31.QueryVotesResponseProtoMsg): _31.QueryVotesResponse;
                toProto(message: _31.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _31.QueryVotesResponse): _31.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _31.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryParamsRequest;
                fromJSON(object: any): _31.QueryParamsRequest;
                toJSON(message: _31.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_31.QueryParamsRequest>): _31.QueryParamsRequest;
                fromAmino(object: _31.QueryParamsRequestAmino): _31.QueryParamsRequest;
                toAmino(message: _31.QueryParamsRequest): _31.QueryParamsRequestAmino;
                fromAminoMsg(object: _31.QueryParamsRequestAminoMsg): _31.QueryParamsRequest;
                toAminoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryParamsRequestProtoMsg): _31.QueryParamsRequest;
                toProto(message: _31.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _31.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryParamsResponse;
                fromJSON(object: any): _31.QueryParamsResponse;
                toJSON(message: _31.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_31.QueryParamsResponse>): _31.QueryParamsResponse;
                fromAmino(object: _31.QueryParamsResponseAmino): _31.QueryParamsResponse;
                toAmino(message: _31.QueryParamsResponse): _31.QueryParamsResponseAmino;
                fromAminoMsg(object: _31.QueryParamsResponseAminoMsg): _31.QueryParamsResponse;
                toAminoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryParamsResponseProtoMsg): _31.QueryParamsResponse;
                toProto(message: _31.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _31.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositRequest;
                fromJSON(object: any): _31.QueryDepositRequest;
                toJSON(message: _31.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_31.QueryDepositRequest>): _31.QueryDepositRequest;
                fromAmino(object: _31.QueryDepositRequestAmino): _31.QueryDepositRequest;
                toAmino(message: _31.QueryDepositRequest): _31.QueryDepositRequestAmino;
                fromAminoMsg(object: _31.QueryDepositRequestAminoMsg): _31.QueryDepositRequest;
                toAminoMsg(message: _31.QueryDepositRequest): _31.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDepositRequestProtoMsg): _31.QueryDepositRequest;
                toProto(message: _31.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDepositRequest): _31.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _31.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositResponse;
                fromJSON(object: any): _31.QueryDepositResponse;
                toJSON(message: _31.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_31.QueryDepositResponse>): _31.QueryDepositResponse;
                fromAmino(object: _31.QueryDepositResponseAmino): _31.QueryDepositResponse;
                toAmino(message: _31.QueryDepositResponse): _31.QueryDepositResponseAmino;
                fromAminoMsg(object: _31.QueryDepositResponseAminoMsg): _31.QueryDepositResponse;
                toAminoMsg(message: _31.QueryDepositResponse): _31.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDepositResponseProtoMsg): _31.QueryDepositResponse;
                toProto(message: _31.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDepositResponse): _31.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _31.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositsRequest;
                fromJSON(object: any): _31.QueryDepositsRequest;
                toJSON(message: _31.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_31.QueryDepositsRequest>): _31.QueryDepositsRequest;
                fromAmino(object: _31.QueryDepositsRequestAmino): _31.QueryDepositsRequest;
                toAmino(message: _31.QueryDepositsRequest): _31.QueryDepositsRequestAmino;
                fromAminoMsg(object: _31.QueryDepositsRequestAminoMsg): _31.QueryDepositsRequest;
                toAminoMsg(message: _31.QueryDepositsRequest): _31.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDepositsRequestProtoMsg): _31.QueryDepositsRequest;
                toProto(message: _31.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDepositsRequest): _31.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _31.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositsResponse;
                fromJSON(object: any): _31.QueryDepositsResponse;
                toJSON(message: _31.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_31.QueryDepositsResponse>): _31.QueryDepositsResponse;
                fromAmino(object: _31.QueryDepositsResponseAmino): _31.QueryDepositsResponse;
                toAmino(message: _31.QueryDepositsResponse): _31.QueryDepositsResponseAmino;
                fromAminoMsg(object: _31.QueryDepositsResponseAminoMsg): _31.QueryDepositsResponse;
                toAminoMsg(message: _31.QueryDepositsResponse): _31.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDepositsResponseProtoMsg): _31.QueryDepositsResponse;
                toProto(message: _31.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDepositsResponse): _31.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _31.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryTallyResultRequest;
                fromJSON(object: any): _31.QueryTallyResultRequest;
                toJSON(message: _31.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_31.QueryTallyResultRequest>): _31.QueryTallyResultRequest;
                fromAmino(object: _31.QueryTallyResultRequestAmino): _31.QueryTallyResultRequest;
                toAmino(message: _31.QueryTallyResultRequest): _31.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _31.QueryTallyResultRequestAminoMsg): _31.QueryTallyResultRequest;
                toAminoMsg(message: _31.QueryTallyResultRequest): _31.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _31.QueryTallyResultRequestProtoMsg): _31.QueryTallyResultRequest;
                toProto(message: _31.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _31.QueryTallyResultRequest): _31.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _31.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryTallyResultResponse;
                fromJSON(object: any): _31.QueryTallyResultResponse;
                toJSON(message: _31.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_31.QueryTallyResultResponse>): _31.QueryTallyResultResponse;
                fromAmino(object: _31.QueryTallyResultResponseAmino): _31.QueryTallyResultResponse;
                toAmino(message: _31.QueryTallyResultResponse): _31.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _31.QueryTallyResultResponseAminoMsg): _31.QueryTallyResultResponse;
                toAminoMsg(message: _31.QueryTallyResultResponse): _31.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _31.QueryTallyResultResponseProtoMsg): _31.QueryTallyResultResponse;
                toProto(message: _31.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _31.QueryTallyResultResponse): _31.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _30.VoteOption;
            voteOptionToJSON(object: _30.VoteOption): string;
            proposalStatusFromJSON(object: any): _30.ProposalStatus;
            proposalStatusToJSON(object: _30.ProposalStatus): string;
            VoteOption: typeof _30.VoteOption;
            VoteOptionSDKType: typeof _30.VoteOption;
            VoteOptionAmino: typeof _30.VoteOption;
            ProposalStatus: typeof _30.ProposalStatus;
            ProposalStatusSDKType: typeof _30.ProposalStatus;
            ProposalStatusAmino: typeof _30.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _30.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.WeightedVoteOption;
                fromJSON(object: any): _30.WeightedVoteOption;
                toJSON(message: _30.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_30.WeightedVoteOption>): _30.WeightedVoteOption;
                fromAmino(object: _30.WeightedVoteOptionAmino): _30.WeightedVoteOption;
                toAmino(message: _30.WeightedVoteOption): _30.WeightedVoteOptionAmino;
                fromAminoMsg(object: _30.WeightedVoteOptionAminoMsg): _30.WeightedVoteOption;
                toAminoMsg(message: _30.WeightedVoteOption): _30.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _30.WeightedVoteOptionProtoMsg): _30.WeightedVoteOption;
                toProto(message: _30.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _30.WeightedVoteOption): _30.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _30.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TextProposal;
                fromJSON(object: any): _30.TextProposal;
                toJSON(message: _30.TextProposal): unknown;
                fromPartial(object: Partial<_30.TextProposal>): _30.TextProposal;
                fromAmino(object: _30.TextProposalAmino): _30.TextProposal;
                toAmino(message: _30.TextProposal): _30.TextProposalAmino;
                fromAminoMsg(object: _30.TextProposalAminoMsg): _30.TextProposal;
                toAminoMsg(message: _30.TextProposal): _30.TextProposalAminoMsg;
                fromProtoMsg(message: _30.TextProposalProtoMsg): _30.TextProposal;
                toProto(message: _30.TextProposal): Uint8Array;
                toProtoMsg(message: _30.TextProposal): _30.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _30.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Deposit;
                fromJSON(object: any): _30.Deposit;
                toJSON(message: _30.Deposit): unknown;
                fromPartial(object: Partial<_30.Deposit>): _30.Deposit;
                fromAmino(object: _30.DepositAmino): _30.Deposit;
                toAmino(message: _30.Deposit): _30.DepositAmino;
                fromAminoMsg(object: _30.DepositAminoMsg): _30.Deposit;
                toAminoMsg(message: _30.Deposit): _30.DepositAminoMsg;
                fromProtoMsg(message: _30.DepositProtoMsg): _30.Deposit;
                toProto(message: _30.Deposit): Uint8Array;
                toProtoMsg(message: _30.Deposit): _30.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _30.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Proposal;
                fromJSON(object: any): _30.Proposal;
                toJSON(message: _30.Proposal): unknown;
                fromPartial(object: Partial<_30.Proposal>): _30.Proposal;
                fromAmino(object: _30.ProposalAmino): _30.Proposal;
                toAmino(message: _30.Proposal): _30.ProposalAmino;
                fromAminoMsg(object: _30.ProposalAminoMsg): _30.Proposal;
                toAminoMsg(message: _30.Proposal): _30.ProposalAminoMsg;
                fromProtoMsg(message: _30.ProposalProtoMsg): _30.Proposal;
                toProto(message: _30.Proposal): Uint8Array;
                toProtoMsg(message: _30.Proposal): _30.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _30.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TallyResult;
                fromJSON(object: any): _30.TallyResult;
                toJSON(message: _30.TallyResult): unknown;
                fromPartial(object: Partial<_30.TallyResult>): _30.TallyResult;
                fromAmino(object: _30.TallyResultAmino): _30.TallyResult;
                toAmino(message: _30.TallyResult): _30.TallyResultAmino;
                fromAminoMsg(object: _30.TallyResultAminoMsg): _30.TallyResult;
                toAminoMsg(message: _30.TallyResult): _30.TallyResultAminoMsg;
                fromProtoMsg(message: _30.TallyResultProtoMsg): _30.TallyResult;
                toProto(message: _30.TallyResult): Uint8Array;
                toProtoMsg(message: _30.TallyResult): _30.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _30.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Vote;
                fromJSON(object: any): _30.Vote;
                toJSON(message: _30.Vote): unknown;
                fromPartial(object: Partial<_30.Vote>): _30.Vote;
                fromAmino(object: _30.VoteAmino): _30.Vote;
                toAmino(message: _30.Vote): _30.VoteAmino;
                fromAminoMsg(object: _30.VoteAminoMsg): _30.Vote;
                toAminoMsg(message: _30.Vote): _30.VoteAminoMsg;
                fromProtoMsg(message: _30.VoteProtoMsg): _30.Vote;
                toProto(message: _30.Vote): Uint8Array;
                toProtoMsg(message: _30.Vote): _30.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _30.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.DepositParams;
                fromJSON(object: any): _30.DepositParams;
                toJSON(message: _30.DepositParams): unknown;
                fromPartial(object: Partial<_30.DepositParams>): _30.DepositParams;
                fromAmino(object: _30.DepositParamsAmino): _30.DepositParams;
                toAmino(message: _30.DepositParams): _30.DepositParamsAmino;
                fromAminoMsg(object: _30.DepositParamsAminoMsg): _30.DepositParams;
                toAminoMsg(message: _30.DepositParams): _30.DepositParamsAminoMsg;
                fromProtoMsg(message: _30.DepositParamsProtoMsg): _30.DepositParams;
                toProto(message: _30.DepositParams): Uint8Array;
                toProtoMsg(message: _30.DepositParams): _30.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _30.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.VotingParams;
                fromJSON(object: any): _30.VotingParams;
                toJSON(message: _30.VotingParams): unknown;
                fromPartial(object: Partial<_30.VotingParams>): _30.VotingParams;
                fromAmino(object: _30.VotingParamsAmino): _30.VotingParams;
                toAmino(message: _30.VotingParams): _30.VotingParamsAmino;
                fromAminoMsg(object: _30.VotingParamsAminoMsg): _30.VotingParams;
                toAminoMsg(message: _30.VotingParams): _30.VotingParamsAminoMsg;
                fromProtoMsg(message: _30.VotingParamsProtoMsg): _30.VotingParams;
                toProto(message: _30.VotingParams): Uint8Array;
                toProtoMsg(message: _30.VotingParams): _30.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _30.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TallyParams;
                fromJSON(object: any): _30.TallyParams;
                toJSON(message: _30.TallyParams): unknown;
                fromPartial(object: Partial<_30.TallyParams>): _30.TallyParams;
                fromAmino(object: _30.TallyParamsAmino): _30.TallyParams;
                toAmino(message: _30.TallyParams): _30.TallyParamsAmino;
                fromAminoMsg(object: _30.TallyParamsAminoMsg): _30.TallyParams;
                toAminoMsg(message: _30.TallyParams): _30.TallyParamsAminoMsg;
                fromProtoMsg(message: _30.TallyParamsProtoMsg): _30.TallyParams;
                toProto(message: _30.TallyParams): Uint8Array;
                toProtoMsg(message: _30.TallyParams): _30.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromJSON(object: any): _29.GenesisState;
                toJSON(message: _29.GenesisState): unknown;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _158.MsgClientImpl;
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _35.QueryValidatorsRequest): Promise<_35.QueryValidatorsResponse>;
                validator(request: _35.QueryValidatorRequest): Promise<_35.QueryValidatorResponse>;
                validatorDelegations(request: _35.QueryValidatorDelegationsRequest): Promise<_35.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _35.QueryValidatorUnbondingDelegationsRequest): Promise<_35.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _35.QueryDelegationRequest): Promise<_35.QueryDelegationResponse>;
                unbondingDelegation(request: _35.QueryUnbondingDelegationRequest): Promise<_35.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _35.QueryDelegatorDelegationsRequest): Promise<_35.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _35.QueryDelegatorUnbondingDelegationsRequest): Promise<_35.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _35.QueryRedelegationsRequest): Promise<_35.QueryRedelegationsResponse>;
                delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _35.QueryDelegatorValidatorRequest): Promise<_35.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _35.QueryHistoricalInfoRequest): Promise<_35.QueryHistoricalInfoResponse>;
                pool(request?: _35.QueryPoolRequest): Promise<_35.QueryPoolResponse>;
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _37.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _37.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _37.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _37.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _37.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _37.MsgCreateValidator): {
                        typeUrl: string;
                        value: _37.MsgCreateValidator;
                    };
                    editValidator(value: _37.MsgEditValidator): {
                        typeUrl: string;
                        value: _37.MsgEditValidator;
                    };
                    delegate(value: _37.MsgDelegate): {
                        typeUrl: string;
                        value: _37.MsgDelegate;
                    };
                    beginRedelegate(value: _37.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _37.MsgBeginRedelegate;
                    };
                    undelegate(value: _37.MsgUndelegate): {
                        typeUrl: string;
                        value: _37.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _37.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _37.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _37.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _37.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _37.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _37.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _37.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _37.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _37.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _37.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _37.MsgCreateValidator): {
                        typeUrl: string;
                        value: _37.MsgCreateValidator;
                    };
                    editValidator(value: _37.MsgEditValidator): {
                        typeUrl: string;
                        value: _37.MsgEditValidator;
                    };
                    delegate(value: _37.MsgDelegate): {
                        typeUrl: string;
                        value: _37.MsgDelegate;
                    };
                    beginRedelegate(value: _37.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _37.MsgBeginRedelegate;
                    };
                    undelegate(value: _37.MsgUndelegate): {
                        typeUrl: string;
                        value: _37.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _37.MsgCreateValidator) => _37.MsgCreateValidatorAmino;
                    fromAmino: (object: _37.MsgCreateValidatorAmino) => _37.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _37.MsgEditValidator) => _37.MsgEditValidatorAmino;
                    fromAmino: (object: _37.MsgEditValidatorAmino) => _37.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _37.MsgDelegate) => _37.MsgDelegateAmino;
                    fromAmino: (object: _37.MsgDelegateAmino) => _37.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _37.MsgBeginRedelegate) => _37.MsgBeginRedelegateAmino;
                    fromAmino: (object: _37.MsgBeginRedelegateAmino) => _37.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _37.MsgUndelegate) => _37.MsgUndelegateAmino;
                    fromAmino: (object: _37.MsgUndelegateAmino) => _37.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _37.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgCreateValidator;
                fromJSON(object: any): _37.MsgCreateValidator;
                toJSON(message: _37.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_37.MsgCreateValidator>): _37.MsgCreateValidator;
                fromAmino(object: _37.MsgCreateValidatorAmino): _37.MsgCreateValidator;
                toAmino(message: _37.MsgCreateValidator): _37.MsgCreateValidatorAmino;
                fromAminoMsg(object: _37.MsgCreateValidatorAminoMsg): _37.MsgCreateValidator;
                toAminoMsg(message: _37.MsgCreateValidator): _37.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _37.MsgCreateValidatorProtoMsg): _37.MsgCreateValidator;
                toProto(message: _37.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _37.MsgCreateValidator): _37.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _37.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgCreateValidatorResponse;
                fromJSON(_: any): _37.MsgCreateValidatorResponse;
                toJSON(_: _37.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_37.MsgCreateValidatorResponse>): _37.MsgCreateValidatorResponse;
                fromAmino(_: _37.MsgCreateValidatorResponseAmino): _37.MsgCreateValidatorResponse;
                toAmino(_: _37.MsgCreateValidatorResponse): _37.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _37.MsgCreateValidatorResponseAminoMsg): _37.MsgCreateValidatorResponse;
                toAminoMsg(message: _37.MsgCreateValidatorResponse): _37.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _37.MsgCreateValidatorResponseProtoMsg): _37.MsgCreateValidatorResponse;
                toProto(message: _37.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _37.MsgCreateValidatorResponse): _37.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _37.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgEditValidator;
                fromJSON(object: any): _37.MsgEditValidator;
                toJSON(message: _37.MsgEditValidator): unknown;
                fromPartial(object: Partial<_37.MsgEditValidator>): _37.MsgEditValidator;
                fromAmino(object: _37.MsgEditValidatorAmino): _37.MsgEditValidator;
                toAmino(message: _37.MsgEditValidator): _37.MsgEditValidatorAmino;
                fromAminoMsg(object: _37.MsgEditValidatorAminoMsg): _37.MsgEditValidator;
                toAminoMsg(message: _37.MsgEditValidator): _37.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _37.MsgEditValidatorProtoMsg): _37.MsgEditValidator;
                toProto(message: _37.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _37.MsgEditValidator): _37.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _37.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgEditValidatorResponse;
                fromJSON(_: any): _37.MsgEditValidatorResponse;
                toJSON(_: _37.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_37.MsgEditValidatorResponse>): _37.MsgEditValidatorResponse;
                fromAmino(_: _37.MsgEditValidatorResponseAmino): _37.MsgEditValidatorResponse;
                toAmino(_: _37.MsgEditValidatorResponse): _37.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _37.MsgEditValidatorResponseAminoMsg): _37.MsgEditValidatorResponse;
                toAminoMsg(message: _37.MsgEditValidatorResponse): _37.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _37.MsgEditValidatorResponseProtoMsg): _37.MsgEditValidatorResponse;
                toProto(message: _37.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _37.MsgEditValidatorResponse): _37.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _37.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgDelegate;
                fromJSON(object: any): _37.MsgDelegate;
                toJSON(message: _37.MsgDelegate): unknown;
                fromPartial(object: Partial<_37.MsgDelegate>): _37.MsgDelegate;
                fromAmino(object: _37.MsgDelegateAmino): _37.MsgDelegate;
                toAmino(message: _37.MsgDelegate): _37.MsgDelegateAmino;
                fromAminoMsg(object: _37.MsgDelegateAminoMsg): _37.MsgDelegate;
                toAminoMsg(message: _37.MsgDelegate): _37.MsgDelegateAminoMsg;
                fromProtoMsg(message: _37.MsgDelegateProtoMsg): _37.MsgDelegate;
                toProto(message: _37.MsgDelegate): Uint8Array;
                toProtoMsg(message: _37.MsgDelegate): _37.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _37.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgDelegateResponse;
                fromJSON(_: any): _37.MsgDelegateResponse;
                toJSON(_: _37.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_37.MsgDelegateResponse>): _37.MsgDelegateResponse;
                fromAmino(_: _37.MsgDelegateResponseAmino): _37.MsgDelegateResponse;
                toAmino(_: _37.MsgDelegateResponse): _37.MsgDelegateResponseAmino;
                fromAminoMsg(object: _37.MsgDelegateResponseAminoMsg): _37.MsgDelegateResponse;
                toAminoMsg(message: _37.MsgDelegateResponse): _37.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _37.MsgDelegateResponseProtoMsg): _37.MsgDelegateResponse;
                toProto(message: _37.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _37.MsgDelegateResponse): _37.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _37.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgBeginRedelegate;
                fromJSON(object: any): _37.MsgBeginRedelegate;
                toJSON(message: _37.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_37.MsgBeginRedelegate>): _37.MsgBeginRedelegate;
                fromAmino(object: _37.MsgBeginRedelegateAmino): _37.MsgBeginRedelegate;
                toAmino(message: _37.MsgBeginRedelegate): _37.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _37.MsgBeginRedelegateAminoMsg): _37.MsgBeginRedelegate;
                toAminoMsg(message: _37.MsgBeginRedelegate): _37.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _37.MsgBeginRedelegateProtoMsg): _37.MsgBeginRedelegate;
                toProto(message: _37.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _37.MsgBeginRedelegate): _37.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _37.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgBeginRedelegateResponse;
                fromJSON(object: any): _37.MsgBeginRedelegateResponse;
                toJSON(message: _37.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_37.MsgBeginRedelegateResponse>): _37.MsgBeginRedelegateResponse;
                fromAmino(object: _37.MsgBeginRedelegateResponseAmino): _37.MsgBeginRedelegateResponse;
                toAmino(message: _37.MsgBeginRedelegateResponse): _37.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _37.MsgBeginRedelegateResponseAminoMsg): _37.MsgBeginRedelegateResponse;
                toAminoMsg(message: _37.MsgBeginRedelegateResponse): _37.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _37.MsgBeginRedelegateResponseProtoMsg): _37.MsgBeginRedelegateResponse;
                toProto(message: _37.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _37.MsgBeginRedelegateResponse): _37.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _37.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgUndelegate;
                fromJSON(object: any): _37.MsgUndelegate;
                toJSON(message: _37.MsgUndelegate): unknown;
                fromPartial(object: Partial<_37.MsgUndelegate>): _37.MsgUndelegate;
                fromAmino(object: _37.MsgUndelegateAmino): _37.MsgUndelegate;
                toAmino(message: _37.MsgUndelegate): _37.MsgUndelegateAmino;
                fromAminoMsg(object: _37.MsgUndelegateAminoMsg): _37.MsgUndelegate;
                toAminoMsg(message: _37.MsgUndelegate): _37.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _37.MsgUndelegateProtoMsg): _37.MsgUndelegate;
                toProto(message: _37.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _37.MsgUndelegate): _37.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _37.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgUndelegateResponse;
                fromJSON(object: any): _37.MsgUndelegateResponse;
                toJSON(message: _37.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_37.MsgUndelegateResponse>): _37.MsgUndelegateResponse;
                fromAmino(object: _37.MsgUndelegateResponseAmino): _37.MsgUndelegateResponse;
                toAmino(message: _37.MsgUndelegateResponse): _37.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _37.MsgUndelegateResponseAminoMsg): _37.MsgUndelegateResponse;
                toAminoMsg(message: _37.MsgUndelegateResponse): _37.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _37.MsgUndelegateResponseProtoMsg): _37.MsgUndelegateResponse;
                toProto(message: _37.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _37.MsgUndelegateResponse): _37.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _36.BondStatus;
            bondStatusToJSON(object: _36.BondStatus): string;
            BondStatus: typeof _36.BondStatus;
            BondStatusSDKType: typeof _36.BondStatus;
            BondStatusAmino: typeof _36.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _36.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.HistoricalInfo;
                fromJSON(object: any): _36.HistoricalInfo;
                toJSON(message: _36.HistoricalInfo): unknown;
                fromPartial(object: Partial<_36.HistoricalInfo>): _36.HistoricalInfo;
                fromAmino(object: _36.HistoricalInfoAmino): _36.HistoricalInfo;
                toAmino(message: _36.HistoricalInfo): _36.HistoricalInfoAmino;
                fromAminoMsg(object: _36.HistoricalInfoAminoMsg): _36.HistoricalInfo;
                toAminoMsg(message: _36.HistoricalInfo): _36.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _36.HistoricalInfoProtoMsg): _36.HistoricalInfo;
                toProto(message: _36.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _36.HistoricalInfo): _36.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _36.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.CommissionRates;
                fromJSON(object: any): _36.CommissionRates;
                toJSON(message: _36.CommissionRates): unknown;
                fromPartial(object: Partial<_36.CommissionRates>): _36.CommissionRates;
                fromAmino(object: _36.CommissionRatesAmino): _36.CommissionRates;
                toAmino(message: _36.CommissionRates): _36.CommissionRatesAmino;
                fromAminoMsg(object: _36.CommissionRatesAminoMsg): _36.CommissionRates;
                toAminoMsg(message: _36.CommissionRates): _36.CommissionRatesAminoMsg;
                fromProtoMsg(message: _36.CommissionRatesProtoMsg): _36.CommissionRates;
                toProto(message: _36.CommissionRates): Uint8Array;
                toProtoMsg(message: _36.CommissionRates): _36.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _36.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Commission;
                fromJSON(object: any): _36.Commission;
                toJSON(message: _36.Commission): unknown;
                fromPartial(object: Partial<_36.Commission>): _36.Commission;
                fromAmino(object: _36.CommissionAmino): _36.Commission;
                toAmino(message: _36.Commission): _36.CommissionAmino;
                fromAminoMsg(object: _36.CommissionAminoMsg): _36.Commission;
                toAminoMsg(message: _36.Commission): _36.CommissionAminoMsg;
                fromProtoMsg(message: _36.CommissionProtoMsg): _36.Commission;
                toProto(message: _36.Commission): Uint8Array;
                toProtoMsg(message: _36.Commission): _36.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _36.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Description;
                fromJSON(object: any): _36.Description;
                toJSON(message: _36.Description): unknown;
                fromPartial(object: Partial<_36.Description>): _36.Description;
                fromAmino(object: _36.DescriptionAmino): _36.Description;
                toAmino(message: _36.Description): _36.DescriptionAmino;
                fromAminoMsg(object: _36.DescriptionAminoMsg): _36.Description;
                toAminoMsg(message: _36.Description): _36.DescriptionAminoMsg;
                fromProtoMsg(message: _36.DescriptionProtoMsg): _36.Description;
                toProto(message: _36.Description): Uint8Array;
                toProtoMsg(message: _36.Description): _36.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _36.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Validator;
                fromJSON(object: any): _36.Validator;
                toJSON(message: _36.Validator): unknown;
                fromPartial(object: Partial<_36.Validator>): _36.Validator;
                fromAmino(object: _36.ValidatorAmino): _36.Validator;
                toAmino(message: _36.Validator): _36.ValidatorAmino;
                fromAminoMsg(object: _36.ValidatorAminoMsg): _36.Validator;
                toAminoMsg(message: _36.Validator): _36.ValidatorAminoMsg;
                fromProtoMsg(message: _36.ValidatorProtoMsg): _36.Validator;
                toProto(message: _36.Validator): Uint8Array;
                toProtoMsg(message: _36.Validator): _36.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _36.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.ValAddresses;
                fromJSON(object: any): _36.ValAddresses;
                toJSON(message: _36.ValAddresses): unknown;
                fromPartial(object: Partial<_36.ValAddresses>): _36.ValAddresses;
                fromAmino(object: _36.ValAddressesAmino): _36.ValAddresses;
                toAmino(message: _36.ValAddresses): _36.ValAddressesAmino;
                fromAminoMsg(object: _36.ValAddressesAminoMsg): _36.ValAddresses;
                toAminoMsg(message: _36.ValAddresses): _36.ValAddressesAminoMsg;
                fromProtoMsg(message: _36.ValAddressesProtoMsg): _36.ValAddresses;
                toProto(message: _36.ValAddresses): Uint8Array;
                toProtoMsg(message: _36.ValAddresses): _36.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _36.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVPair;
                fromJSON(object: any): _36.DVPair;
                toJSON(message: _36.DVPair): unknown;
                fromPartial(object: Partial<_36.DVPair>): _36.DVPair;
                fromAmino(object: _36.DVPairAmino): _36.DVPair;
                toAmino(message: _36.DVPair): _36.DVPairAmino;
                fromAminoMsg(object: _36.DVPairAminoMsg): _36.DVPair;
                toAminoMsg(message: _36.DVPair): _36.DVPairAminoMsg;
                fromProtoMsg(message: _36.DVPairProtoMsg): _36.DVPair;
                toProto(message: _36.DVPair): Uint8Array;
                toProtoMsg(message: _36.DVPair): _36.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _36.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVPairs;
                fromJSON(object: any): _36.DVPairs;
                toJSON(message: _36.DVPairs): unknown;
                fromPartial(object: Partial<_36.DVPairs>): _36.DVPairs;
                fromAmino(object: _36.DVPairsAmino): _36.DVPairs;
                toAmino(message: _36.DVPairs): _36.DVPairsAmino;
                fromAminoMsg(object: _36.DVPairsAminoMsg): _36.DVPairs;
                toAminoMsg(message: _36.DVPairs): _36.DVPairsAminoMsg;
                fromProtoMsg(message: _36.DVPairsProtoMsg): _36.DVPairs;
                toProto(message: _36.DVPairs): Uint8Array;
                toProtoMsg(message: _36.DVPairs): _36.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _36.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVVTriplet;
                fromJSON(object: any): _36.DVVTriplet;
                toJSON(message: _36.DVVTriplet): unknown;
                fromPartial(object: Partial<_36.DVVTriplet>): _36.DVVTriplet;
                fromAmino(object: _36.DVVTripletAmino): _36.DVVTriplet;
                toAmino(message: _36.DVVTriplet): _36.DVVTripletAmino;
                fromAminoMsg(object: _36.DVVTripletAminoMsg): _36.DVVTriplet;
                toAminoMsg(message: _36.DVVTriplet): _36.DVVTripletAminoMsg;
                fromProtoMsg(message: _36.DVVTripletProtoMsg): _36.DVVTriplet;
                toProto(message: _36.DVVTriplet): Uint8Array;
                toProtoMsg(message: _36.DVVTriplet): _36.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _36.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVVTriplets;
                fromJSON(object: any): _36.DVVTriplets;
                toJSON(message: _36.DVVTriplets): unknown;
                fromPartial(object: Partial<_36.DVVTriplets>): _36.DVVTriplets;
                fromAmino(object: _36.DVVTripletsAmino): _36.DVVTriplets;
                toAmino(message: _36.DVVTriplets): _36.DVVTripletsAmino;
                fromAminoMsg(object: _36.DVVTripletsAminoMsg): _36.DVVTriplets;
                toAminoMsg(message: _36.DVVTriplets): _36.DVVTripletsAminoMsg;
                fromProtoMsg(message: _36.DVVTripletsProtoMsg): _36.DVVTriplets;
                toProto(message: _36.DVVTriplets): Uint8Array;
                toProtoMsg(message: _36.DVVTriplets): _36.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _36.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Delegation;
                fromJSON(object: any): _36.Delegation;
                toJSON(message: _36.Delegation): unknown;
                fromPartial(object: Partial<_36.Delegation>): _36.Delegation;
                fromAmino(object: _36.DelegationAmino): _36.Delegation;
                toAmino(message: _36.Delegation): _36.DelegationAmino;
                fromAminoMsg(object: _36.DelegationAminoMsg): _36.Delegation;
                toAminoMsg(message: _36.Delegation): _36.DelegationAminoMsg;
                fromProtoMsg(message: _36.DelegationProtoMsg): _36.Delegation;
                toProto(message: _36.Delegation): Uint8Array;
                toProtoMsg(message: _36.Delegation): _36.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _36.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.UnbondingDelegation;
                fromJSON(object: any): _36.UnbondingDelegation;
                toJSON(message: _36.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_36.UnbondingDelegation>): _36.UnbondingDelegation;
                fromAmino(object: _36.UnbondingDelegationAmino): _36.UnbondingDelegation;
                toAmino(message: _36.UnbondingDelegation): _36.UnbondingDelegationAmino;
                fromAminoMsg(object: _36.UnbondingDelegationAminoMsg): _36.UnbondingDelegation;
                toAminoMsg(message: _36.UnbondingDelegation): _36.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _36.UnbondingDelegationProtoMsg): _36.UnbondingDelegation;
                toProto(message: _36.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _36.UnbondingDelegation): _36.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _36.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.UnbondingDelegationEntry;
                fromJSON(object: any): _36.UnbondingDelegationEntry;
                toJSON(message: _36.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_36.UnbondingDelegationEntry>): _36.UnbondingDelegationEntry;
                fromAmino(object: _36.UnbondingDelegationEntryAmino): _36.UnbondingDelegationEntry;
                toAmino(message: _36.UnbondingDelegationEntry): _36.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _36.UnbondingDelegationEntryAminoMsg): _36.UnbondingDelegationEntry;
                toAminoMsg(message: _36.UnbondingDelegationEntry): _36.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _36.UnbondingDelegationEntryProtoMsg): _36.UnbondingDelegationEntry;
                toProto(message: _36.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _36.UnbondingDelegationEntry): _36.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _36.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RedelegationEntry;
                fromJSON(object: any): _36.RedelegationEntry;
                toJSON(message: _36.RedelegationEntry): unknown;
                fromPartial(object: Partial<_36.RedelegationEntry>): _36.RedelegationEntry;
                fromAmino(object: _36.RedelegationEntryAmino): _36.RedelegationEntry;
                toAmino(message: _36.RedelegationEntry): _36.RedelegationEntryAmino;
                fromAminoMsg(object: _36.RedelegationEntryAminoMsg): _36.RedelegationEntry;
                toAminoMsg(message: _36.RedelegationEntry): _36.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _36.RedelegationEntryProtoMsg): _36.RedelegationEntry;
                toProto(message: _36.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _36.RedelegationEntry): _36.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _36.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Redelegation;
                fromJSON(object: any): _36.Redelegation;
                toJSON(message: _36.Redelegation): unknown;
                fromPartial(object: Partial<_36.Redelegation>): _36.Redelegation;
                fromAmino(object: _36.RedelegationAmino): _36.Redelegation;
                toAmino(message: _36.Redelegation): _36.RedelegationAmino;
                fromAminoMsg(object: _36.RedelegationAminoMsg): _36.Redelegation;
                toAminoMsg(message: _36.Redelegation): _36.RedelegationAminoMsg;
                fromProtoMsg(message: _36.RedelegationProtoMsg): _36.Redelegation;
                toProto(message: _36.Redelegation): Uint8Array;
                toProtoMsg(message: _36.Redelegation): _36.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _36.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Params;
                fromJSON(object: any): _36.Params;
                toJSON(message: _36.Params): unknown;
                fromPartial(object: Partial<_36.Params>): _36.Params;
                fromAmino(object: _36.ParamsAmino): _36.Params;
                toAmino(message: _36.Params): _36.ParamsAmino;
                fromAminoMsg(object: _36.ParamsAminoMsg): _36.Params;
                toAminoMsg(message: _36.Params): _36.ParamsAminoMsg;
                fromProtoMsg(message: _36.ParamsProtoMsg): _36.Params;
                toProto(message: _36.Params): Uint8Array;
                toProtoMsg(message: _36.Params): _36.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _36.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DelegationResponse;
                fromJSON(object: any): _36.DelegationResponse;
                toJSON(message: _36.DelegationResponse): unknown;
                fromPartial(object: Partial<_36.DelegationResponse>): _36.DelegationResponse;
                fromAmino(object: _36.DelegationResponseAmino): _36.DelegationResponse;
                toAmino(message: _36.DelegationResponse): _36.DelegationResponseAmino;
                fromAminoMsg(object: _36.DelegationResponseAminoMsg): _36.DelegationResponse;
                toAminoMsg(message: _36.DelegationResponse): _36.DelegationResponseAminoMsg;
                fromProtoMsg(message: _36.DelegationResponseProtoMsg): _36.DelegationResponse;
                toProto(message: _36.DelegationResponse): Uint8Array;
                toProtoMsg(message: _36.DelegationResponse): _36.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _36.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RedelegationEntryResponse;
                fromJSON(object: any): _36.RedelegationEntryResponse;
                toJSON(message: _36.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_36.RedelegationEntryResponse>): _36.RedelegationEntryResponse;
                fromAmino(object: _36.RedelegationEntryResponseAmino): _36.RedelegationEntryResponse;
                toAmino(message: _36.RedelegationEntryResponse): _36.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _36.RedelegationEntryResponseAminoMsg): _36.RedelegationEntryResponse;
                toAminoMsg(message: _36.RedelegationEntryResponse): _36.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _36.RedelegationEntryResponseProtoMsg): _36.RedelegationEntryResponse;
                toProto(message: _36.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _36.RedelegationEntryResponse): _36.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _36.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RedelegationResponse;
                fromJSON(object: any): _36.RedelegationResponse;
                toJSON(message: _36.RedelegationResponse): unknown;
                fromPartial(object: Partial<_36.RedelegationResponse>): _36.RedelegationResponse;
                fromAmino(object: _36.RedelegationResponseAmino): _36.RedelegationResponse;
                toAmino(message: _36.RedelegationResponse): _36.RedelegationResponseAmino;
                fromAminoMsg(object: _36.RedelegationResponseAminoMsg): _36.RedelegationResponse;
                toAminoMsg(message: _36.RedelegationResponse): _36.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _36.RedelegationResponseProtoMsg): _36.RedelegationResponse;
                toProto(message: _36.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _36.RedelegationResponse): _36.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _36.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Pool;
                fromJSON(object: any): _36.Pool;
                toJSON(message: _36.Pool): unknown;
                fromPartial(object: Partial<_36.Pool>): _36.Pool;
                fromAmino(object: _36.PoolAmino): _36.Pool;
                toAmino(message: _36.Pool): _36.PoolAmino;
                fromAminoMsg(object: _36.PoolAminoMsg): _36.Pool;
                toAminoMsg(message: _36.Pool): _36.PoolAminoMsg;
                fromProtoMsg(message: _36.PoolProtoMsg): _36.Pool;
                toProto(message: _36.Pool): Uint8Array;
                toProtoMsg(message: _36.Pool): _36.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _35.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorsRequest;
                fromJSON(object: any): _35.QueryValidatorsRequest;
                toJSON(message: _35.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_35.QueryValidatorsRequest>): _35.QueryValidatorsRequest;
                fromAmino(object: _35.QueryValidatorsRequestAmino): _35.QueryValidatorsRequest;
                toAmino(message: _35.QueryValidatorsRequest): _35.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _35.QueryValidatorsRequestAminoMsg): _35.QueryValidatorsRequest;
                toAminoMsg(message: _35.QueryValidatorsRequest): _35.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryValidatorsRequestProtoMsg): _35.QueryValidatorsRequest;
                toProto(message: _35.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryValidatorsRequest): _35.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _35.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorsResponse;
                fromJSON(object: any): _35.QueryValidatorsResponse;
                toJSON(message: _35.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_35.QueryValidatorsResponse>): _35.QueryValidatorsResponse;
                fromAmino(object: _35.QueryValidatorsResponseAmino): _35.QueryValidatorsResponse;
                toAmino(message: _35.QueryValidatorsResponse): _35.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _35.QueryValidatorsResponseAminoMsg): _35.QueryValidatorsResponse;
                toAminoMsg(message: _35.QueryValidatorsResponse): _35.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryValidatorsResponseProtoMsg): _35.QueryValidatorsResponse;
                toProto(message: _35.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryValidatorsResponse): _35.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _35.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorRequest;
                fromJSON(object: any): _35.QueryValidatorRequest;
                toJSON(message: _35.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_35.QueryValidatorRequest>): _35.QueryValidatorRequest;
                fromAmino(object: _35.QueryValidatorRequestAmino): _35.QueryValidatorRequest;
                toAmino(message: _35.QueryValidatorRequest): _35.QueryValidatorRequestAmino;
                fromAminoMsg(object: _35.QueryValidatorRequestAminoMsg): _35.QueryValidatorRequest;
                toAminoMsg(message: _35.QueryValidatorRequest): _35.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _35.QueryValidatorRequestProtoMsg): _35.QueryValidatorRequest;
                toProto(message: _35.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _35.QueryValidatorRequest): _35.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _35.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorResponse;
                fromJSON(object: any): _35.QueryValidatorResponse;
                toJSON(message: _35.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_35.QueryValidatorResponse>): _35.QueryValidatorResponse;
                fromAmino(object: _35.QueryValidatorResponseAmino): _35.QueryValidatorResponse;
                toAmino(message: _35.QueryValidatorResponse): _35.QueryValidatorResponseAmino;
                fromAminoMsg(object: _35.QueryValidatorResponseAminoMsg): _35.QueryValidatorResponse;
                toAminoMsg(message: _35.QueryValidatorResponse): _35.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _35.QueryValidatorResponseProtoMsg): _35.QueryValidatorResponse;
                toProto(message: _35.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _35.QueryValidatorResponse): _35.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _35.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _35.QueryValidatorDelegationsRequest;
                toJSON(message: _35.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_35.QueryValidatorDelegationsRequest>): _35.QueryValidatorDelegationsRequest;
                fromAmino(object: _35.QueryValidatorDelegationsRequestAmino): _35.QueryValidatorDelegationsRequest;
                toAmino(message: _35.QueryValidatorDelegationsRequest): _35.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _35.QueryValidatorDelegationsRequestAminoMsg): _35.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _35.QueryValidatorDelegationsRequest): _35.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryValidatorDelegationsRequestProtoMsg): _35.QueryValidatorDelegationsRequest;
                toProto(message: _35.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryValidatorDelegationsRequest): _35.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _35.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _35.QueryValidatorDelegationsResponse;
                toJSON(message: _35.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_35.QueryValidatorDelegationsResponse>): _35.QueryValidatorDelegationsResponse;
                fromAmino(object: _35.QueryValidatorDelegationsResponseAmino): _35.QueryValidatorDelegationsResponse;
                toAmino(message: _35.QueryValidatorDelegationsResponse): _35.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _35.QueryValidatorDelegationsResponseAminoMsg): _35.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _35.QueryValidatorDelegationsResponse): _35.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryValidatorDelegationsResponseProtoMsg): _35.QueryValidatorDelegationsResponse;
                toProto(message: _35.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryValidatorDelegationsResponse): _35.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _35.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _35.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _35.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_35.QueryValidatorUnbondingDelegationsRequest>): _35.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _35.QueryValidatorUnbondingDelegationsRequestAmino): _35.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _35.QueryValidatorUnbondingDelegationsRequest): _35.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _35.QueryValidatorUnbondingDelegationsRequestAminoMsg): _35.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _35.QueryValidatorUnbondingDelegationsRequest): _35.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryValidatorUnbondingDelegationsRequestProtoMsg): _35.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _35.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryValidatorUnbondingDelegationsRequest): _35.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _35.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _35.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _35.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_35.QueryValidatorUnbondingDelegationsResponse>): _35.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _35.QueryValidatorUnbondingDelegationsResponseAmino): _35.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _35.QueryValidatorUnbondingDelegationsResponse): _35.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _35.QueryValidatorUnbondingDelegationsResponseAminoMsg): _35.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _35.QueryValidatorUnbondingDelegationsResponse): _35.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryValidatorUnbondingDelegationsResponseProtoMsg): _35.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _35.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryValidatorUnbondingDelegationsResponse): _35.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _35.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationRequest;
                fromJSON(object: any): _35.QueryDelegationRequest;
                toJSON(message: _35.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_35.QueryDelegationRequest>): _35.QueryDelegationRequest;
                fromAmino(object: _35.QueryDelegationRequestAmino): _35.QueryDelegationRequest;
                toAmino(message: _35.QueryDelegationRequest): _35.QueryDelegationRequestAmino;
                fromAminoMsg(object: _35.QueryDelegationRequestAminoMsg): _35.QueryDelegationRequest;
                toAminoMsg(message: _35.QueryDelegationRequest): _35.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDelegationRequestProtoMsg): _35.QueryDelegationRequest;
                toProto(message: _35.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDelegationRequest): _35.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _35.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationResponse;
                fromJSON(object: any): _35.QueryDelegationResponse;
                toJSON(message: _35.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_35.QueryDelegationResponse>): _35.QueryDelegationResponse;
                fromAmino(object: _35.QueryDelegationResponseAmino): _35.QueryDelegationResponse;
                toAmino(message: _35.QueryDelegationResponse): _35.QueryDelegationResponseAmino;
                fromAminoMsg(object: _35.QueryDelegationResponseAminoMsg): _35.QueryDelegationResponse;
                toAminoMsg(message: _35.QueryDelegationResponse): _35.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDelegationResponseProtoMsg): _35.QueryDelegationResponse;
                toProto(message: _35.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDelegationResponse): _35.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _35.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _35.QueryUnbondingDelegationRequest;
                toJSON(message: _35.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_35.QueryUnbondingDelegationRequest>): _35.QueryUnbondingDelegationRequest;
                fromAmino(object: _35.QueryUnbondingDelegationRequestAmino): _35.QueryUnbondingDelegationRequest;
                toAmino(message: _35.QueryUnbondingDelegationRequest): _35.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _35.QueryUnbondingDelegationRequestAminoMsg): _35.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _35.QueryUnbondingDelegationRequest): _35.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _35.QueryUnbondingDelegationRequestProtoMsg): _35.QueryUnbondingDelegationRequest;
                toProto(message: _35.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _35.QueryUnbondingDelegationRequest): _35.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _35.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _35.QueryUnbondingDelegationResponse;
                toJSON(message: _35.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_35.QueryUnbondingDelegationResponse>): _35.QueryUnbondingDelegationResponse;
                fromAmino(object: _35.QueryUnbondingDelegationResponseAmino): _35.QueryUnbondingDelegationResponse;
                toAmino(message: _35.QueryUnbondingDelegationResponse): _35.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _35.QueryUnbondingDelegationResponseAminoMsg): _35.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _35.QueryUnbondingDelegationResponse): _35.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _35.QueryUnbondingDelegationResponseProtoMsg): _35.QueryUnbondingDelegationResponse;
                toProto(message: _35.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _35.QueryUnbondingDelegationResponse): _35.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _35.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _35.QueryDelegatorDelegationsRequest;
                toJSON(message: _35.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorDelegationsRequest>): _35.QueryDelegatorDelegationsRequest;
                fromAmino(object: _35.QueryDelegatorDelegationsRequestAmino): _35.QueryDelegatorDelegationsRequest;
                toAmino(message: _35.QueryDelegatorDelegationsRequest): _35.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _35.QueryDelegatorDelegationsRequestAminoMsg): _35.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _35.QueryDelegatorDelegationsRequest): _35.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDelegatorDelegationsRequestProtoMsg): _35.QueryDelegatorDelegationsRequest;
                toProto(message: _35.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDelegatorDelegationsRequest): _35.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _35.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _35.QueryDelegatorDelegationsResponse;
                toJSON(message: _35.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorDelegationsResponse>): _35.QueryDelegatorDelegationsResponse;
                fromAmino(object: _35.QueryDelegatorDelegationsResponseAmino): _35.QueryDelegatorDelegationsResponse;
                toAmino(message: _35.QueryDelegatorDelegationsResponse): _35.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _35.QueryDelegatorDelegationsResponseAminoMsg): _35.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _35.QueryDelegatorDelegationsResponse): _35.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDelegatorDelegationsResponseProtoMsg): _35.QueryDelegatorDelegationsResponse;
                toProto(message: _35.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDelegatorDelegationsResponse): _35.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _35.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _35.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _35.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorUnbondingDelegationsRequest>): _35.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _35.QueryDelegatorUnbondingDelegationsRequestAmino): _35.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _35.QueryDelegatorUnbondingDelegationsRequest): _35.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _35.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _35.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _35.QueryDelegatorUnbondingDelegationsRequest): _35.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _35.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _35.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDelegatorUnbondingDelegationsRequest): _35.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _35.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _35.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _35.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorUnbondingDelegationsResponse>): _35.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _35.QueryDelegatorUnbondingDelegationsResponseAmino): _35.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _35.QueryDelegatorUnbondingDelegationsResponse): _35.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _35.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _35.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _35.QueryDelegatorUnbondingDelegationsResponse): _35.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _35.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _35.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDelegatorUnbondingDelegationsResponse): _35.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _35.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryRedelegationsRequest;
                fromJSON(object: any): _35.QueryRedelegationsRequest;
                toJSON(message: _35.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_35.QueryRedelegationsRequest>): _35.QueryRedelegationsRequest;
                fromAmino(object: _35.QueryRedelegationsRequestAmino): _35.QueryRedelegationsRequest;
                toAmino(message: _35.QueryRedelegationsRequest): _35.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _35.QueryRedelegationsRequestAminoMsg): _35.QueryRedelegationsRequest;
                toAminoMsg(message: _35.QueryRedelegationsRequest): _35.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryRedelegationsRequestProtoMsg): _35.QueryRedelegationsRequest;
                toProto(message: _35.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryRedelegationsRequest): _35.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _35.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryRedelegationsResponse;
                fromJSON(object: any): _35.QueryRedelegationsResponse;
                toJSON(message: _35.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_35.QueryRedelegationsResponse>): _35.QueryRedelegationsResponse;
                fromAmino(object: _35.QueryRedelegationsResponseAmino): _35.QueryRedelegationsResponse;
                toAmino(message: _35.QueryRedelegationsResponse): _35.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _35.QueryRedelegationsResponseAminoMsg): _35.QueryRedelegationsResponse;
                toAminoMsg(message: _35.QueryRedelegationsResponse): _35.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryRedelegationsResponseProtoMsg): _35.QueryRedelegationsResponse;
                toProto(message: _35.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryRedelegationsResponse): _35.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _35.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _35.QueryDelegatorValidatorsRequest;
                toJSON(message: _35.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsRequest>): _35.QueryDelegatorValidatorsRequest;
                fromAmino(object: _35.QueryDelegatorValidatorsRequestAmino): _35.QueryDelegatorValidatorsRequest;
                toAmino(message: _35.QueryDelegatorValidatorsRequest): _35.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _35.QueryDelegatorValidatorsRequestAminoMsg): _35.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _35.QueryDelegatorValidatorsRequest): _35.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDelegatorValidatorsRequestProtoMsg): _35.QueryDelegatorValidatorsRequest;
                toProto(message: _35.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDelegatorValidatorsRequest): _35.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _35.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _35.QueryDelegatorValidatorsResponse;
                toJSON(message: _35.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsResponse>): _35.QueryDelegatorValidatorsResponse;
                fromAmino(object: _35.QueryDelegatorValidatorsResponseAmino): _35.QueryDelegatorValidatorsResponse;
                toAmino(message: _35.QueryDelegatorValidatorsResponse): _35.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _35.QueryDelegatorValidatorsResponseAminoMsg): _35.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _35.QueryDelegatorValidatorsResponse): _35.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDelegatorValidatorsResponseProtoMsg): _35.QueryDelegatorValidatorsResponse;
                toProto(message: _35.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDelegatorValidatorsResponse): _35.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _35.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _35.QueryDelegatorValidatorRequest;
                toJSON(message: _35.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorRequest>): _35.QueryDelegatorValidatorRequest;
                fromAmino(object: _35.QueryDelegatorValidatorRequestAmino): _35.QueryDelegatorValidatorRequest;
                toAmino(message: _35.QueryDelegatorValidatorRequest): _35.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _35.QueryDelegatorValidatorRequestAminoMsg): _35.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _35.QueryDelegatorValidatorRequest): _35.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDelegatorValidatorRequestProtoMsg): _35.QueryDelegatorValidatorRequest;
                toProto(message: _35.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDelegatorValidatorRequest): _35.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _35.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _35.QueryDelegatorValidatorResponse;
                toJSON(message: _35.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorResponse>): _35.QueryDelegatorValidatorResponse;
                fromAmino(object: _35.QueryDelegatorValidatorResponseAmino): _35.QueryDelegatorValidatorResponse;
                toAmino(message: _35.QueryDelegatorValidatorResponse): _35.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _35.QueryDelegatorValidatorResponseAminoMsg): _35.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _35.QueryDelegatorValidatorResponse): _35.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDelegatorValidatorResponseProtoMsg): _35.QueryDelegatorValidatorResponse;
                toProto(message: _35.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDelegatorValidatorResponse): _35.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _35.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryHistoricalInfoRequest;
                fromJSON(object: any): _35.QueryHistoricalInfoRequest;
                toJSON(message: _35.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_35.QueryHistoricalInfoRequest>): _35.QueryHistoricalInfoRequest;
                fromAmino(object: _35.QueryHistoricalInfoRequestAmino): _35.QueryHistoricalInfoRequest;
                toAmino(message: _35.QueryHistoricalInfoRequest): _35.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _35.QueryHistoricalInfoRequestAminoMsg): _35.QueryHistoricalInfoRequest;
                toAminoMsg(message: _35.QueryHistoricalInfoRequest): _35.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _35.QueryHistoricalInfoRequestProtoMsg): _35.QueryHistoricalInfoRequest;
                toProto(message: _35.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _35.QueryHistoricalInfoRequest): _35.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _35.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryHistoricalInfoResponse;
                fromJSON(object: any): _35.QueryHistoricalInfoResponse;
                toJSON(message: _35.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_35.QueryHistoricalInfoResponse>): _35.QueryHistoricalInfoResponse;
                fromAmino(object: _35.QueryHistoricalInfoResponseAmino): _35.QueryHistoricalInfoResponse;
                toAmino(message: _35.QueryHistoricalInfoResponse): _35.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _35.QueryHistoricalInfoResponseAminoMsg): _35.QueryHistoricalInfoResponse;
                toAminoMsg(message: _35.QueryHistoricalInfoResponse): _35.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _35.QueryHistoricalInfoResponseProtoMsg): _35.QueryHistoricalInfoResponse;
                toProto(message: _35.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _35.QueryHistoricalInfoResponse): _35.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _35.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryPoolRequest;
                fromJSON(_: any): _35.QueryPoolRequest;
                toJSON(_: _35.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_35.QueryPoolRequest>): _35.QueryPoolRequest;
                fromAmino(_: _35.QueryPoolRequestAmino): _35.QueryPoolRequest;
                toAmino(_: _35.QueryPoolRequest): _35.QueryPoolRequestAmino;
                fromAminoMsg(object: _35.QueryPoolRequestAminoMsg): _35.QueryPoolRequest;
                toAminoMsg(message: _35.QueryPoolRequest): _35.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _35.QueryPoolRequestProtoMsg): _35.QueryPoolRequest;
                toProto(message: _35.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _35.QueryPoolRequest): _35.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _35.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryPoolResponse;
                fromJSON(object: any): _35.QueryPoolResponse;
                toJSON(message: _35.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_35.QueryPoolResponse>): _35.QueryPoolResponse;
                fromAmino(object: _35.QueryPoolResponseAmino): _35.QueryPoolResponse;
                toAmino(message: _35.QueryPoolResponse): _35.QueryPoolResponseAmino;
                fromAminoMsg(object: _35.QueryPoolResponseAminoMsg): _35.QueryPoolResponse;
                toAminoMsg(message: _35.QueryPoolResponse): _35.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _35.QueryPoolResponseProtoMsg): _35.QueryPoolResponse;
                toProto(message: _35.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _35.QueryPoolResponse): _35.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromJSON(_: any): _35.QueryParamsRequest;
                toJSON(_: _35.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
                fromAmino(_: _35.QueryParamsRequestAmino): _35.QueryParamsRequest;
                toAmino(_: _35.QueryParamsRequest): _35.QueryParamsRequestAmino;
                fromAminoMsg(object: _35.QueryParamsRequestAminoMsg): _35.QueryParamsRequest;
                toAminoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryParamsRequestProtoMsg): _35.QueryParamsRequest;
                toProto(message: _35.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromJSON(object: any): _35.QueryParamsResponse;
                toJSON(message: _35.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
                fromAmino(object: _35.QueryParamsResponseAmino): _35.QueryParamsResponse;
                toAmino(message: _35.QueryParamsResponse): _35.QueryParamsResponseAmino;
                fromAminoMsg(object: _35.QueryParamsResponseAminoMsg): _35.QueryParamsResponse;
                toAminoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryParamsResponseProtoMsg): _35.QueryParamsResponse;
                toProto(message: _35.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromJSON(object: any): _34.GenesisState;
                toJSON(message: _34.GenesisState): unknown;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
                fromAmino(object: _34.GenesisStateAmino): _34.GenesisState;
                toAmino(message: _34.GenesisState): _34.GenesisStateAmino;
                fromAminoMsg(object: _34.GenesisStateAminoMsg): _34.GenesisState;
                toAminoMsg(message: _34.GenesisState): _34.GenesisStateAminoMsg;
                fromProtoMsg(message: _34.GenesisStateProtoMsg): _34.GenesisState;
                toProto(message: _34.GenesisState): Uint8Array;
                toProtoMsg(message: _34.GenesisState): _34.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _34.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.LastValidatorPower;
                fromJSON(object: any): _34.LastValidatorPower;
                toJSON(message: _34.LastValidatorPower): unknown;
                fromPartial(object: Partial<_34.LastValidatorPower>): _34.LastValidatorPower;
                fromAmino(object: _34.LastValidatorPowerAmino): _34.LastValidatorPower;
                toAmino(message: _34.LastValidatorPower): _34.LastValidatorPowerAmino;
                fromAminoMsg(object: _34.LastValidatorPowerAminoMsg): _34.LastValidatorPower;
                toAminoMsg(message: _34.LastValidatorPower): _34.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _34.LastValidatorPowerProtoMsg): _34.LastValidatorPower;
                toProto(message: _34.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _34.LastValidatorPower): _34.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _33.AuthorizationType;
            authorizationTypeToJSON(object: _33.AuthorizationType): string;
            AuthorizationType: typeof _33.AuthorizationType;
            AuthorizationTypeSDKType: typeof _33.AuthorizationType;
            AuthorizationTypeAmino: typeof _33.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _33.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.StakeAuthorization;
                fromJSON(object: any): _33.StakeAuthorization;
                toJSON(message: _33.StakeAuthorization): unknown;
                fromPartial(object: Partial<_33.StakeAuthorization>): _33.StakeAuthorization;
                fromAmino(object: _33.StakeAuthorizationAmino): _33.StakeAuthorization;
                toAmino(message: _33.StakeAuthorization): _33.StakeAuthorizationAmino;
                fromAminoMsg(object: _33.StakeAuthorizationAminoMsg): _33.StakeAuthorization;
                toAminoMsg(message: _33.StakeAuthorization): _33.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _33.StakeAuthorizationProtoMsg): _33.StakeAuthorization;
                toProto(message: _33.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _33.StakeAuthorization): _33.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _33.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.StakeAuthorization_Validators;
                fromJSON(object: any): _33.StakeAuthorization_Validators;
                toJSON(message: _33.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_33.StakeAuthorization_Validators>): _33.StakeAuthorization_Validators;
                fromAmino(object: _33.StakeAuthorization_ValidatorsAmino): _33.StakeAuthorization_Validators;
                toAmino(message: _33.StakeAuthorization_Validators): _33.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _33.StakeAuthorization_ValidatorsAminoMsg): _33.StakeAuthorization_Validators;
                toAminoMsg(message: _33.StakeAuthorization_Validators): _33.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _33.StakeAuthorization_ValidatorsProtoMsg): _33.StakeAuthorization_Validators;
                toProto(message: _33.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _33.StakeAuthorization_Validators): _33.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _38.SignMode;
                signModeToJSON(object: _38.SignMode): string;
                SignMode: typeof _38.SignMode;
                SignModeSDKType: typeof _38.SignMode;
                SignModeAmino: typeof _38.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _38.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptors;
                    fromJSON(object: any): _38.SignatureDescriptors;
                    toJSON(message: _38.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_38.SignatureDescriptors>): _38.SignatureDescriptors;
                    fromAmino(object: _38.SignatureDescriptorsAmino): _38.SignatureDescriptors;
                    toAmino(message: _38.SignatureDescriptors): _38.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _38.SignatureDescriptorsAminoMsg): _38.SignatureDescriptors;
                    toAminoMsg(message: _38.SignatureDescriptors): _38.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _38.SignatureDescriptorsProtoMsg): _38.SignatureDescriptors;
                    toProto(message: _38.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _38.SignatureDescriptors): _38.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _38.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor;
                    fromJSON(object: any): _38.SignatureDescriptor;
                    toJSON(message: _38.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_38.SignatureDescriptor>): _38.SignatureDescriptor;
                    fromAmino(object: _38.SignatureDescriptorAmino): _38.SignatureDescriptor;
                    toAmino(message: _38.SignatureDescriptor): _38.SignatureDescriptorAmino;
                    fromAminoMsg(object: _38.SignatureDescriptorAminoMsg): _38.SignatureDescriptor;
                    toAminoMsg(message: _38.SignatureDescriptor): _38.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _38.SignatureDescriptorProtoMsg): _38.SignatureDescriptor;
                    toProto(message: _38.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _38.SignatureDescriptor): _38.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _38.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor_Data;
                    fromJSON(object: any): _38.SignatureDescriptor_Data;
                    toJSON(message: _38.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_38.SignatureDescriptor_Data>): _38.SignatureDescriptor_Data;
                    fromAmino(object: _38.SignatureDescriptor_DataAmino): _38.SignatureDescriptor_Data;
                    toAmino(message: _38.SignatureDescriptor_Data): _38.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _38.SignatureDescriptor_DataAminoMsg): _38.SignatureDescriptor_Data;
                    toAminoMsg(message: _38.SignatureDescriptor_Data): _38.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _38.SignatureDescriptor_DataProtoMsg): _38.SignatureDescriptor_Data;
                    toProto(message: _38.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _38.SignatureDescriptor_Data): _38.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _38.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _38.SignatureDescriptor_Data_Single;
                    toJSON(message: _38.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_38.SignatureDescriptor_Data_Single>): _38.SignatureDescriptor_Data_Single;
                    fromAmino(object: _38.SignatureDescriptor_Data_SingleAmino): _38.SignatureDescriptor_Data_Single;
                    toAmino(message: _38.SignatureDescriptor_Data_Single): _38.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _38.SignatureDescriptor_Data_SingleAminoMsg): _38.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _38.SignatureDescriptor_Data_Single): _38.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _38.SignatureDescriptor_Data_SingleProtoMsg): _38.SignatureDescriptor_Data_Single;
                    toProto(message: _38.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _38.SignatureDescriptor_Data_Single): _38.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _38.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _38.SignatureDescriptor_Data_Multi;
                    toJSON(message: _38.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_38.SignatureDescriptor_Data_Multi>): _38.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _38.SignatureDescriptor_Data_MultiAmino): _38.SignatureDescriptor_Data_Multi;
                    toAmino(message: _38.SignatureDescriptor_Data_Multi): _38.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _38.SignatureDescriptor_Data_MultiAminoMsg): _38.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _38.SignatureDescriptor_Data_Multi): _38.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _38.SignatureDescriptor_Data_MultiProtoMsg): _38.SignatureDescriptor_Data_Multi;
                    toProto(message: _38.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _38.SignatureDescriptor_Data_Multi): _38.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _152.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _39.SimulateRequest): Promise<_39.SimulateResponse>;
                getTx(request: _39.GetTxRequest): Promise<_39.GetTxResponse>;
                broadcastTx(request: _39.BroadcastTxRequest): Promise<_39.BroadcastTxResponse>;
                getTxsEvent(request: _39.GetTxsEventRequest): Promise<_39.GetTxsEventResponse>;
                getBlockWithTxs(request: _39.GetBlockWithTxsRequest): Promise<_39.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _144.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _40.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Tx;
                fromJSON(object: any): _40.Tx;
                toJSON(message: _40.Tx): unknown;
                fromPartial(object: Partial<_40.Tx>): _40.Tx;
                fromAmino(object: _40.TxAmino): _40.Tx;
                toAmino(message: _40.Tx): _40.TxAmino;
                fromAminoMsg(object: _40.TxAminoMsg): _40.Tx;
                toAminoMsg(message: _40.Tx): _40.TxAminoMsg;
                fromProtoMsg(message: _40.TxProtoMsg): _40.Tx;
                toProto(message: _40.Tx): Uint8Array;
                toProtoMsg(message: _40.Tx): _40.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _40.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.TxRaw;
                fromJSON(object: any): _40.TxRaw;
                toJSON(message: _40.TxRaw): unknown;
                fromPartial(object: Partial<_40.TxRaw>): _40.TxRaw;
                fromAmino(object: _40.TxRawAmino): _40.TxRaw;
                toAmino(message: _40.TxRaw): _40.TxRawAmino;
                fromAminoMsg(object: _40.TxRawAminoMsg): _40.TxRaw;
                toAminoMsg(message: _40.TxRaw): _40.TxRawAminoMsg;
                fromProtoMsg(message: _40.TxRawProtoMsg): _40.TxRaw;
                toProto(message: _40.TxRaw): Uint8Array;
                toProtoMsg(message: _40.TxRaw): _40.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _40.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignDoc;
                fromJSON(object: any): _40.SignDoc;
                toJSON(message: _40.SignDoc): unknown;
                fromPartial(object: Partial<_40.SignDoc>): _40.SignDoc;
                fromAmino(object: _40.SignDocAmino): _40.SignDoc;
                toAmino(message: _40.SignDoc): _40.SignDocAmino;
                fromAminoMsg(object: _40.SignDocAminoMsg): _40.SignDoc;
                toAminoMsg(message: _40.SignDoc): _40.SignDocAminoMsg;
                fromProtoMsg(message: _40.SignDocProtoMsg): _40.SignDoc;
                toProto(message: _40.SignDoc): Uint8Array;
                toProtoMsg(message: _40.SignDoc): _40.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _40.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignDocDirectAux;
                fromJSON(object: any): _40.SignDocDirectAux;
                toJSON(message: _40.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_40.SignDocDirectAux>): _40.SignDocDirectAux;
                fromAmino(object: _40.SignDocDirectAuxAmino): _40.SignDocDirectAux;
                toAmino(message: _40.SignDocDirectAux): _40.SignDocDirectAuxAmino;
                fromAminoMsg(object: _40.SignDocDirectAuxAminoMsg): _40.SignDocDirectAux;
                toAminoMsg(message: _40.SignDocDirectAux): _40.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _40.SignDocDirectAuxProtoMsg): _40.SignDocDirectAux;
                toProto(message: _40.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _40.SignDocDirectAux): _40.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _40.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.TxBody;
                fromJSON(object: any): _40.TxBody;
                toJSON(message: _40.TxBody): unknown;
                fromPartial(object: Partial<_40.TxBody>): _40.TxBody;
                fromAmino(object: _40.TxBodyAmino): _40.TxBody;
                toAmino(message: _40.TxBody): _40.TxBodyAmino;
                fromAminoMsg(object: _40.TxBodyAminoMsg): _40.TxBody;
                toAminoMsg(message: _40.TxBody): _40.TxBodyAminoMsg;
                fromProtoMsg(message: _40.TxBodyProtoMsg): _40.TxBody;
                toProto(message: _40.TxBody): Uint8Array;
                toProtoMsg(message: _40.TxBody): _40.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _40.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.AuthInfo;
                fromJSON(object: any): _40.AuthInfo;
                toJSON(message: _40.AuthInfo): unknown;
                fromPartial(object: Partial<_40.AuthInfo>): _40.AuthInfo;
                fromAmino(object: _40.AuthInfoAmino): _40.AuthInfo;
                toAmino(message: _40.AuthInfo): _40.AuthInfoAmino;
                fromAminoMsg(object: _40.AuthInfoAminoMsg): _40.AuthInfo;
                toAminoMsg(message: _40.AuthInfo): _40.AuthInfoAminoMsg;
                fromProtoMsg(message: _40.AuthInfoProtoMsg): _40.AuthInfo;
                toProto(message: _40.AuthInfo): Uint8Array;
                toProtoMsg(message: _40.AuthInfo): _40.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _40.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignerInfo;
                fromJSON(object: any): _40.SignerInfo;
                toJSON(message: _40.SignerInfo): unknown;
                fromPartial(object: Partial<_40.SignerInfo>): _40.SignerInfo;
                fromAmino(object: _40.SignerInfoAmino): _40.SignerInfo;
                toAmino(message: _40.SignerInfo): _40.SignerInfoAmino;
                fromAminoMsg(object: _40.SignerInfoAminoMsg): _40.SignerInfo;
                toAminoMsg(message: _40.SignerInfo): _40.SignerInfoAminoMsg;
                fromProtoMsg(message: _40.SignerInfoProtoMsg): _40.SignerInfo;
                toProto(message: _40.SignerInfo): Uint8Array;
                toProtoMsg(message: _40.SignerInfo): _40.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _40.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ModeInfo;
                fromJSON(object: any): _40.ModeInfo;
                toJSON(message: _40.ModeInfo): unknown;
                fromPartial(object: Partial<_40.ModeInfo>): _40.ModeInfo;
                fromAmino(object: _40.ModeInfoAmino): _40.ModeInfo;
                toAmino(message: _40.ModeInfo): _40.ModeInfoAmino;
                fromAminoMsg(object: _40.ModeInfoAminoMsg): _40.ModeInfo;
                toAminoMsg(message: _40.ModeInfo): _40.ModeInfoAminoMsg;
                fromProtoMsg(message: _40.ModeInfoProtoMsg): _40.ModeInfo;
                toProto(message: _40.ModeInfo): Uint8Array;
                toProtoMsg(message: _40.ModeInfo): _40.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _40.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ModeInfo_Single;
                fromJSON(object: any): _40.ModeInfo_Single;
                toJSON(message: _40.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_40.ModeInfo_Single>): _40.ModeInfo_Single;
                fromAmino(object: _40.ModeInfo_SingleAmino): _40.ModeInfo_Single;
                toAmino(message: _40.ModeInfo_Single): _40.ModeInfo_SingleAmino;
                fromAminoMsg(object: _40.ModeInfo_SingleAminoMsg): _40.ModeInfo_Single;
                toAminoMsg(message: _40.ModeInfo_Single): _40.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _40.ModeInfo_SingleProtoMsg): _40.ModeInfo_Single;
                toProto(message: _40.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _40.ModeInfo_Single): _40.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _40.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ModeInfo_Multi;
                fromJSON(object: any): _40.ModeInfo_Multi;
                toJSON(message: _40.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_40.ModeInfo_Multi>): _40.ModeInfo_Multi;
                fromAmino(object: _40.ModeInfo_MultiAmino): _40.ModeInfo_Multi;
                toAmino(message: _40.ModeInfo_Multi): _40.ModeInfo_MultiAmino;
                fromAminoMsg(object: _40.ModeInfo_MultiAminoMsg): _40.ModeInfo_Multi;
                toAminoMsg(message: _40.ModeInfo_Multi): _40.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _40.ModeInfo_MultiProtoMsg): _40.ModeInfo_Multi;
                toProto(message: _40.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _40.ModeInfo_Multi): _40.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _40.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Fee;
                fromJSON(object: any): _40.Fee;
                toJSON(message: _40.Fee): unknown;
                fromPartial(object: Partial<_40.Fee>): _40.Fee;
                fromAmino(object: _40.FeeAmino): _40.Fee;
                toAmino(message: _40.Fee): _40.FeeAmino;
                fromAminoMsg(object: _40.FeeAminoMsg): _40.Fee;
                toAminoMsg(message: _40.Fee): _40.FeeAminoMsg;
                fromProtoMsg(message: _40.FeeProtoMsg): _40.Fee;
                toProto(message: _40.Fee): Uint8Array;
                toProtoMsg(message: _40.Fee): _40.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _40.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Tip;
                fromJSON(object: any): _40.Tip;
                toJSON(message: _40.Tip): unknown;
                fromPartial(object: Partial<_40.Tip>): _40.Tip;
                fromAmino(object: _40.TipAmino): _40.Tip;
                toAmino(message: _40.Tip): _40.TipAmino;
                fromAminoMsg(object: _40.TipAminoMsg): _40.Tip;
                toAminoMsg(message: _40.Tip): _40.TipAminoMsg;
                fromProtoMsg(message: _40.TipProtoMsg): _40.Tip;
                toProto(message: _40.Tip): Uint8Array;
                toProtoMsg(message: _40.Tip): _40.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _40.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.AuxSignerData;
                fromJSON(object: any): _40.AuxSignerData;
                toJSON(message: _40.AuxSignerData): unknown;
                fromPartial(object: Partial<_40.AuxSignerData>): _40.AuxSignerData;
                fromAmino(object: _40.AuxSignerDataAmino): _40.AuxSignerData;
                toAmino(message: _40.AuxSignerData): _40.AuxSignerDataAmino;
                fromAminoMsg(object: _40.AuxSignerDataAminoMsg): _40.AuxSignerData;
                toAminoMsg(message: _40.AuxSignerData): _40.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _40.AuxSignerDataProtoMsg): _40.AuxSignerData;
                toProto(message: _40.AuxSignerData): Uint8Array;
                toProtoMsg(message: _40.AuxSignerData): _40.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _39.OrderBy;
            orderByToJSON(object: _39.OrderBy): string;
            broadcastModeFromJSON(object: any): _39.BroadcastMode;
            broadcastModeToJSON(object: _39.BroadcastMode): string;
            OrderBy: typeof _39.OrderBy;
            OrderBySDKType: typeof _39.OrderBy;
            OrderByAmino: typeof _39.OrderBy;
            BroadcastMode: typeof _39.BroadcastMode;
            BroadcastModeSDKType: typeof _39.BroadcastMode;
            BroadcastModeAmino: typeof _39.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _39.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxsEventRequest;
                fromJSON(object: any): _39.GetTxsEventRequest;
                toJSON(message: _39.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_39.GetTxsEventRequest>): _39.GetTxsEventRequest;
                fromAmino(object: _39.GetTxsEventRequestAmino): _39.GetTxsEventRequest;
                toAmino(message: _39.GetTxsEventRequest): _39.GetTxsEventRequestAmino;
                fromAminoMsg(object: _39.GetTxsEventRequestAminoMsg): _39.GetTxsEventRequest;
                toAminoMsg(message: _39.GetTxsEventRequest): _39.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _39.GetTxsEventRequestProtoMsg): _39.GetTxsEventRequest;
                toProto(message: _39.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _39.GetTxsEventRequest): _39.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _39.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxsEventResponse;
                fromJSON(object: any): _39.GetTxsEventResponse;
                toJSON(message: _39.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_39.GetTxsEventResponse>): _39.GetTxsEventResponse;
                fromAmino(object: _39.GetTxsEventResponseAmino): _39.GetTxsEventResponse;
                toAmino(message: _39.GetTxsEventResponse): _39.GetTxsEventResponseAmino;
                fromAminoMsg(object: _39.GetTxsEventResponseAminoMsg): _39.GetTxsEventResponse;
                toAminoMsg(message: _39.GetTxsEventResponse): _39.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _39.GetTxsEventResponseProtoMsg): _39.GetTxsEventResponse;
                toProto(message: _39.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _39.GetTxsEventResponse): _39.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _39.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BroadcastTxRequest;
                fromJSON(object: any): _39.BroadcastTxRequest;
                toJSON(message: _39.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_39.BroadcastTxRequest>): _39.BroadcastTxRequest;
                fromAmino(object: _39.BroadcastTxRequestAmino): _39.BroadcastTxRequest;
                toAmino(message: _39.BroadcastTxRequest): _39.BroadcastTxRequestAmino;
                fromAminoMsg(object: _39.BroadcastTxRequestAminoMsg): _39.BroadcastTxRequest;
                toAminoMsg(message: _39.BroadcastTxRequest): _39.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _39.BroadcastTxRequestProtoMsg): _39.BroadcastTxRequest;
                toProto(message: _39.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _39.BroadcastTxRequest): _39.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _39.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BroadcastTxResponse;
                fromJSON(object: any): _39.BroadcastTxResponse;
                toJSON(message: _39.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_39.BroadcastTxResponse>): _39.BroadcastTxResponse;
                fromAmino(object: _39.BroadcastTxResponseAmino): _39.BroadcastTxResponse;
                toAmino(message: _39.BroadcastTxResponse): _39.BroadcastTxResponseAmino;
                fromAminoMsg(object: _39.BroadcastTxResponseAminoMsg): _39.BroadcastTxResponse;
                toAminoMsg(message: _39.BroadcastTxResponse): _39.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _39.BroadcastTxResponseProtoMsg): _39.BroadcastTxResponse;
                toProto(message: _39.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _39.BroadcastTxResponse): _39.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _39.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SimulateRequest;
                fromJSON(object: any): _39.SimulateRequest;
                toJSON(message: _39.SimulateRequest): unknown;
                fromPartial(object: Partial<_39.SimulateRequest>): _39.SimulateRequest;
                fromAmino(object: _39.SimulateRequestAmino): _39.SimulateRequest;
                toAmino(message: _39.SimulateRequest): _39.SimulateRequestAmino;
                fromAminoMsg(object: _39.SimulateRequestAminoMsg): _39.SimulateRequest;
                toAminoMsg(message: _39.SimulateRequest): _39.SimulateRequestAminoMsg;
                fromProtoMsg(message: _39.SimulateRequestProtoMsg): _39.SimulateRequest;
                toProto(message: _39.SimulateRequest): Uint8Array;
                toProtoMsg(message: _39.SimulateRequest): _39.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _39.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SimulateResponse;
                fromJSON(object: any): _39.SimulateResponse;
                toJSON(message: _39.SimulateResponse): unknown;
                fromPartial(object: Partial<_39.SimulateResponse>): _39.SimulateResponse;
                fromAmino(object: _39.SimulateResponseAmino): _39.SimulateResponse;
                toAmino(message: _39.SimulateResponse): _39.SimulateResponseAmino;
                fromAminoMsg(object: _39.SimulateResponseAminoMsg): _39.SimulateResponse;
                toAminoMsg(message: _39.SimulateResponse): _39.SimulateResponseAminoMsg;
                fromProtoMsg(message: _39.SimulateResponseProtoMsg): _39.SimulateResponse;
                toProto(message: _39.SimulateResponse): Uint8Array;
                toProtoMsg(message: _39.SimulateResponse): _39.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _39.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxRequest;
                fromJSON(object: any): _39.GetTxRequest;
                toJSON(message: _39.GetTxRequest): unknown;
                fromPartial(object: Partial<_39.GetTxRequest>): _39.GetTxRequest;
                fromAmino(object: _39.GetTxRequestAmino): _39.GetTxRequest;
                toAmino(message: _39.GetTxRequest): _39.GetTxRequestAmino;
                fromAminoMsg(object: _39.GetTxRequestAminoMsg): _39.GetTxRequest;
                toAminoMsg(message: _39.GetTxRequest): _39.GetTxRequestAminoMsg;
                fromProtoMsg(message: _39.GetTxRequestProtoMsg): _39.GetTxRequest;
                toProto(message: _39.GetTxRequest): Uint8Array;
                toProtoMsg(message: _39.GetTxRequest): _39.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _39.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxResponse;
                fromJSON(object: any): _39.GetTxResponse;
                toJSON(message: _39.GetTxResponse): unknown;
                fromPartial(object: Partial<_39.GetTxResponse>): _39.GetTxResponse;
                fromAmino(object: _39.GetTxResponseAmino): _39.GetTxResponse;
                toAmino(message: _39.GetTxResponse): _39.GetTxResponseAmino;
                fromAminoMsg(object: _39.GetTxResponseAminoMsg): _39.GetTxResponse;
                toAminoMsg(message: _39.GetTxResponse): _39.GetTxResponseAminoMsg;
                fromProtoMsg(message: _39.GetTxResponseProtoMsg): _39.GetTxResponse;
                toProto(message: _39.GetTxResponse): Uint8Array;
                toProtoMsg(message: _39.GetTxResponse): _39.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _39.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetBlockWithTxsRequest;
                fromJSON(object: any): _39.GetBlockWithTxsRequest;
                toJSON(message: _39.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_39.GetBlockWithTxsRequest>): _39.GetBlockWithTxsRequest;
                fromAmino(object: _39.GetBlockWithTxsRequestAmino): _39.GetBlockWithTxsRequest;
                toAmino(message: _39.GetBlockWithTxsRequest): _39.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _39.GetBlockWithTxsRequestAminoMsg): _39.GetBlockWithTxsRequest;
                toAminoMsg(message: _39.GetBlockWithTxsRequest): _39.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _39.GetBlockWithTxsRequestProtoMsg): _39.GetBlockWithTxsRequest;
                toProto(message: _39.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _39.GetBlockWithTxsRequest): _39.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _39.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetBlockWithTxsResponse;
                fromJSON(object: any): _39.GetBlockWithTxsResponse;
                toJSON(message: _39.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_39.GetBlockWithTxsResponse>): _39.GetBlockWithTxsResponse;
                fromAmino(object: _39.GetBlockWithTxsResponseAmino): _39.GetBlockWithTxsResponse;
                toAmino(message: _39.GetBlockWithTxsResponse): _39.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _39.GetBlockWithTxsResponseAminoMsg): _39.GetBlockWithTxsResponse;
                toAminoMsg(message: _39.GetBlockWithTxsResponse): _39.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _39.GetBlockWithTxsResponseProtoMsg): _39.GetBlockWithTxsResponse;
                toProto(message: _39.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _39.GetBlockWithTxsResponse): _39.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _159.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _41.QueryCurrentPlanRequest): Promise<_41.QueryCurrentPlanResponse>;
                appliedPlan(request: _41.QueryAppliedPlanRequest): Promise<_41.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _41.QueryUpgradedConsensusStateRequest): Promise<_41.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _41.QueryModuleVersionsRequest): Promise<_41.QueryModuleVersionsResponse>;
                authority(request?: _41.QueryAuthorityRequest): Promise<_41.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _42.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _42.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _42.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _42.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _42.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _42.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _42.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _42.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _42.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _42.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _42.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _42.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _42.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _42.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _42.MsgSoftwareUpgrade) => _42.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _42.MsgSoftwareUpgradeAmino) => _42.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _42.MsgCancelUpgrade) => _42.MsgCancelUpgradeAmino;
                    fromAmino: (object: _42.MsgCancelUpgradeAmino) => _42.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _43.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Plan;
                fromJSON(object: any): _43.Plan;
                toJSON(message: _43.Plan): unknown;
                fromPartial(object: Partial<_43.Plan>): _43.Plan;
                fromAmino(object: _43.PlanAmino): _43.Plan;
                toAmino(message: _43.Plan): _43.PlanAmino;
                fromAminoMsg(object: _43.PlanAminoMsg): _43.Plan;
                toAminoMsg(message: _43.Plan): _43.PlanAminoMsg;
                fromProtoMsg(message: _43.PlanProtoMsg): _43.Plan;
                toProto(message: _43.Plan): Uint8Array;
                toProtoMsg(message: _43.Plan): _43.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _43.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SoftwareUpgradeProposal;
                fromJSON(object: any): _43.SoftwareUpgradeProposal;
                toJSON(message: _43.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_43.SoftwareUpgradeProposal>): _43.SoftwareUpgradeProposal;
                fromAmino(object: _43.SoftwareUpgradeProposalAmino): _43.SoftwareUpgradeProposal;
                toAmino(message: _43.SoftwareUpgradeProposal): _43.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _43.SoftwareUpgradeProposalAminoMsg): _43.SoftwareUpgradeProposal;
                toAminoMsg(message: _43.SoftwareUpgradeProposal): _43.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _43.SoftwareUpgradeProposalProtoMsg): _43.SoftwareUpgradeProposal;
                toProto(message: _43.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _43.SoftwareUpgradeProposal): _43.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _43.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _43.CancelSoftwareUpgradeProposal;
                toJSON(message: _43.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_43.CancelSoftwareUpgradeProposal>): _43.CancelSoftwareUpgradeProposal;
                fromAmino(object: _43.CancelSoftwareUpgradeProposalAmino): _43.CancelSoftwareUpgradeProposal;
                toAmino(message: _43.CancelSoftwareUpgradeProposal): _43.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _43.CancelSoftwareUpgradeProposalAminoMsg): _43.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _43.CancelSoftwareUpgradeProposal): _43.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _43.CancelSoftwareUpgradeProposalProtoMsg): _43.CancelSoftwareUpgradeProposal;
                toProto(message: _43.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _43.CancelSoftwareUpgradeProposal): _43.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _43.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ModuleVersion;
                fromJSON(object: any): _43.ModuleVersion;
                toJSON(message: _43.ModuleVersion): unknown;
                fromPartial(object: Partial<_43.ModuleVersion>): _43.ModuleVersion;
                fromAmino(object: _43.ModuleVersionAmino): _43.ModuleVersion;
                toAmino(message: _43.ModuleVersion): _43.ModuleVersionAmino;
                fromAminoMsg(object: _43.ModuleVersionAminoMsg): _43.ModuleVersion;
                toAminoMsg(message: _43.ModuleVersion): _43.ModuleVersionAminoMsg;
                fromProtoMsg(message: _43.ModuleVersionProtoMsg): _43.ModuleVersion;
                toProto(message: _43.ModuleVersion): Uint8Array;
                toProtoMsg(message: _43.ModuleVersion): _43.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _42.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSoftwareUpgrade;
                fromJSON(object: any): _42.MsgSoftwareUpgrade;
                toJSON(message: _42.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_42.MsgSoftwareUpgrade>): _42.MsgSoftwareUpgrade;
                fromAmino(object: _42.MsgSoftwareUpgradeAmino): _42.MsgSoftwareUpgrade;
                toAmino(message: _42.MsgSoftwareUpgrade): _42.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _42.MsgSoftwareUpgradeAminoMsg): _42.MsgSoftwareUpgrade;
                toAminoMsg(message: _42.MsgSoftwareUpgrade): _42.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _42.MsgSoftwareUpgradeProtoMsg): _42.MsgSoftwareUpgrade;
                toProto(message: _42.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _42.MsgSoftwareUpgrade): _42.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _42.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _42.MsgSoftwareUpgradeResponse;
                toJSON(_: _42.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_42.MsgSoftwareUpgradeResponse>): _42.MsgSoftwareUpgradeResponse;
                fromAmino(_: _42.MsgSoftwareUpgradeResponseAmino): _42.MsgSoftwareUpgradeResponse;
                toAmino(_: _42.MsgSoftwareUpgradeResponse): _42.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _42.MsgSoftwareUpgradeResponseAminoMsg): _42.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _42.MsgSoftwareUpgradeResponse): _42.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _42.MsgSoftwareUpgradeResponseProtoMsg): _42.MsgSoftwareUpgradeResponse;
                toProto(message: _42.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _42.MsgSoftwareUpgradeResponse): _42.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _42.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCancelUpgrade;
                fromJSON(object: any): _42.MsgCancelUpgrade;
                toJSON(message: _42.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_42.MsgCancelUpgrade>): _42.MsgCancelUpgrade;
                fromAmino(object: _42.MsgCancelUpgradeAmino): _42.MsgCancelUpgrade;
                toAmino(message: _42.MsgCancelUpgrade): _42.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _42.MsgCancelUpgradeAminoMsg): _42.MsgCancelUpgrade;
                toAminoMsg(message: _42.MsgCancelUpgrade): _42.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _42.MsgCancelUpgradeProtoMsg): _42.MsgCancelUpgrade;
                toProto(message: _42.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _42.MsgCancelUpgrade): _42.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _42.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCancelUpgradeResponse;
                fromJSON(_: any): _42.MsgCancelUpgradeResponse;
                toJSON(_: _42.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_42.MsgCancelUpgradeResponse>): _42.MsgCancelUpgradeResponse;
                fromAmino(_: _42.MsgCancelUpgradeResponseAmino): _42.MsgCancelUpgradeResponse;
                toAmino(_: _42.MsgCancelUpgradeResponse): _42.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _42.MsgCancelUpgradeResponseAminoMsg): _42.MsgCancelUpgradeResponse;
                toAminoMsg(message: _42.MsgCancelUpgradeResponse): _42.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _42.MsgCancelUpgradeResponseProtoMsg): _42.MsgCancelUpgradeResponse;
                toProto(message: _42.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _42.MsgCancelUpgradeResponse): _42.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _41.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCurrentPlanRequest;
                fromJSON(_: any): _41.QueryCurrentPlanRequest;
                toJSON(_: _41.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_41.QueryCurrentPlanRequest>): _41.QueryCurrentPlanRequest;
                fromAmino(_: _41.QueryCurrentPlanRequestAmino): _41.QueryCurrentPlanRequest;
                toAmino(_: _41.QueryCurrentPlanRequest): _41.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _41.QueryCurrentPlanRequestAminoMsg): _41.QueryCurrentPlanRequest;
                toAminoMsg(message: _41.QueryCurrentPlanRequest): _41.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _41.QueryCurrentPlanRequestProtoMsg): _41.QueryCurrentPlanRequest;
                toProto(message: _41.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _41.QueryCurrentPlanRequest): _41.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _41.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCurrentPlanResponse;
                fromJSON(object: any): _41.QueryCurrentPlanResponse;
                toJSON(message: _41.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_41.QueryCurrentPlanResponse>): _41.QueryCurrentPlanResponse;
                fromAmino(object: _41.QueryCurrentPlanResponseAmino): _41.QueryCurrentPlanResponse;
                toAmino(message: _41.QueryCurrentPlanResponse): _41.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _41.QueryCurrentPlanResponseAminoMsg): _41.QueryCurrentPlanResponse;
                toAminoMsg(message: _41.QueryCurrentPlanResponse): _41.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _41.QueryCurrentPlanResponseProtoMsg): _41.QueryCurrentPlanResponse;
                toProto(message: _41.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _41.QueryCurrentPlanResponse): _41.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _41.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAppliedPlanRequest;
                fromJSON(object: any): _41.QueryAppliedPlanRequest;
                toJSON(message: _41.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_41.QueryAppliedPlanRequest>): _41.QueryAppliedPlanRequest;
                fromAmino(object: _41.QueryAppliedPlanRequestAmino): _41.QueryAppliedPlanRequest;
                toAmino(message: _41.QueryAppliedPlanRequest): _41.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _41.QueryAppliedPlanRequestAminoMsg): _41.QueryAppliedPlanRequest;
                toAminoMsg(message: _41.QueryAppliedPlanRequest): _41.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _41.QueryAppliedPlanRequestProtoMsg): _41.QueryAppliedPlanRequest;
                toProto(message: _41.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _41.QueryAppliedPlanRequest): _41.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _41.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAppliedPlanResponse;
                fromJSON(object: any): _41.QueryAppliedPlanResponse;
                toJSON(message: _41.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_41.QueryAppliedPlanResponse>): _41.QueryAppliedPlanResponse;
                fromAmino(object: _41.QueryAppliedPlanResponseAmino): _41.QueryAppliedPlanResponse;
                toAmino(message: _41.QueryAppliedPlanResponse): _41.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _41.QueryAppliedPlanResponseAminoMsg): _41.QueryAppliedPlanResponse;
                toAminoMsg(message: _41.QueryAppliedPlanResponse): _41.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _41.QueryAppliedPlanResponseProtoMsg): _41.QueryAppliedPlanResponse;
                toProto(message: _41.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _41.QueryAppliedPlanResponse): _41.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _41.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _41.QueryUpgradedConsensusStateRequest;
                toJSON(message: _41.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_41.QueryUpgradedConsensusStateRequest>): _41.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _41.QueryUpgradedConsensusStateRequestAmino): _41.QueryUpgradedConsensusStateRequest;
                toAmino(message: _41.QueryUpgradedConsensusStateRequest): _41.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _41.QueryUpgradedConsensusStateRequestAminoMsg): _41.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _41.QueryUpgradedConsensusStateRequest): _41.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _41.QueryUpgradedConsensusStateRequestProtoMsg): _41.QueryUpgradedConsensusStateRequest;
                toProto(message: _41.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _41.QueryUpgradedConsensusStateRequest): _41.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _41.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _41.QueryUpgradedConsensusStateResponse;
                toJSON(message: _41.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_41.QueryUpgradedConsensusStateResponse>): _41.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _41.QueryUpgradedConsensusStateResponseAmino): _41.QueryUpgradedConsensusStateResponse;
                toAmino(message: _41.QueryUpgradedConsensusStateResponse): _41.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _41.QueryUpgradedConsensusStateResponseAminoMsg): _41.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _41.QueryUpgradedConsensusStateResponse): _41.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _41.QueryUpgradedConsensusStateResponseProtoMsg): _41.QueryUpgradedConsensusStateResponse;
                toProto(message: _41.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _41.QueryUpgradedConsensusStateResponse): _41.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _41.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryModuleVersionsRequest;
                fromJSON(object: any): _41.QueryModuleVersionsRequest;
                toJSON(message: _41.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_41.QueryModuleVersionsRequest>): _41.QueryModuleVersionsRequest;
                fromAmino(object: _41.QueryModuleVersionsRequestAmino): _41.QueryModuleVersionsRequest;
                toAmino(message: _41.QueryModuleVersionsRequest): _41.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _41.QueryModuleVersionsRequestAminoMsg): _41.QueryModuleVersionsRequest;
                toAminoMsg(message: _41.QueryModuleVersionsRequest): _41.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryModuleVersionsRequestProtoMsg): _41.QueryModuleVersionsRequest;
                toProto(message: _41.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryModuleVersionsRequest): _41.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _41.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryModuleVersionsResponse;
                fromJSON(object: any): _41.QueryModuleVersionsResponse;
                toJSON(message: _41.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_41.QueryModuleVersionsResponse>): _41.QueryModuleVersionsResponse;
                fromAmino(object: _41.QueryModuleVersionsResponseAmino): _41.QueryModuleVersionsResponse;
                toAmino(message: _41.QueryModuleVersionsResponse): _41.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _41.QueryModuleVersionsResponseAminoMsg): _41.QueryModuleVersionsResponse;
                toAminoMsg(message: _41.QueryModuleVersionsResponse): _41.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryModuleVersionsResponseProtoMsg): _41.QueryModuleVersionsResponse;
                toProto(message: _41.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryModuleVersionsResponse): _41.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _41.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAuthorityRequest;
                fromJSON(_: any): _41.QueryAuthorityRequest;
                toJSON(_: _41.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_41.QueryAuthorityRequest>): _41.QueryAuthorityRequest;
                fromAmino(_: _41.QueryAuthorityRequestAmino): _41.QueryAuthorityRequest;
                toAmino(_: _41.QueryAuthorityRequest): _41.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _41.QueryAuthorityRequestAminoMsg): _41.QueryAuthorityRequest;
                toAminoMsg(message: _41.QueryAuthorityRequest): _41.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _41.QueryAuthorityRequestProtoMsg): _41.QueryAuthorityRequest;
                toProto(message: _41.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _41.QueryAuthorityRequest): _41.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _41.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAuthorityResponse;
                fromJSON(object: any): _41.QueryAuthorityResponse;
                toJSON(message: _41.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_41.QueryAuthorityResponse>): _41.QueryAuthorityResponse;
                fromAmino(object: _41.QueryAuthorityResponseAmino): _41.QueryAuthorityResponse;
                toAmino(message: _41.QueryAuthorityResponse): _41.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _41.QueryAuthorityResponseAminoMsg): _41.QueryAuthorityResponse;
                toAminoMsg(message: _41.QueryAuthorityResponse): _41.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _41.QueryAuthorityResponseProtoMsg): _41.QueryAuthorityResponse;
                toProto(message: _41.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _41.QueryAuthorityResponse): _41.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _154.MsgClientImpl;
                };
                bank: {
                    v1beta1: _155.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _156.MsgClientImpl;
                };
                gov: {
                    v1beta1: _157.MsgClientImpl;
                };
                staking: {
                    v1beta1: _158.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _159.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                        account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                        moduleAccounts(request?: _4.QueryModuleAccountsRequest): Promise<_4.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _4.Bech32PrefixRequest): Promise<_4.Bech32PrefixResponse>;
                        addressBytesToString(request: _4.AddressBytesToStringRequest): Promise<_4.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _4.AddressStringToBytesRequest): Promise<_4.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                        granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                        granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                        allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                        spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                        supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
                        denomOwners(request: _13.QueryDenomOwnersRequest): Promise<_13.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _27.QueryValidatorOutstandingRewardsRequest): Promise<_27.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _27.QueryValidatorCommissionRequest): Promise<_27.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _27.QueryValidatorSlashesRequest): Promise<_27.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _27.QueryDelegationRewardsRequest): Promise<_27.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _27.QueryDelegationTotalRewardsRequest): Promise<_27.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _27.QueryDelegatorValidatorsRequest): Promise<_27.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _27.QueryDelegatorWithdrawAddressRequest): Promise<_27.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _27.QueryCommunityPoolRequest): Promise<_27.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _31.QueryProposalRequest): Promise<_31.QueryProposalResponse>;
                        proposals(request: _31.QueryProposalsRequest): Promise<_31.QueryProposalsResponse>;
                        vote(request: _31.QueryVoteRequest): Promise<_31.QueryVoteResponse>;
                        votes(request: _31.QueryVotesRequest): Promise<_31.QueryVotesResponse>;
                        params(request: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                        deposit(request: _31.QueryDepositRequest): Promise<_31.QueryDepositResponse>;
                        deposits(request: _31.QueryDepositsRequest): Promise<_31.QueryDepositsResponse>;
                        tallyResult(request: _31.QueryTallyResultRequest): Promise<_31.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _35.QueryValidatorsRequest): Promise<_35.QueryValidatorsResponse>;
                        validator(request: _35.QueryValidatorRequest): Promise<_35.QueryValidatorResponse>;
                        validatorDelegations(request: _35.QueryValidatorDelegationsRequest): Promise<_35.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _35.QueryValidatorUnbondingDelegationsRequest): Promise<_35.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _35.QueryDelegationRequest): Promise<_35.QueryDelegationResponse>;
                        unbondingDelegation(request: _35.QueryUnbondingDelegationRequest): Promise<_35.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _35.QueryDelegatorDelegationsRequest): Promise<_35.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _35.QueryDelegatorUnbondingDelegationsRequest): Promise<_35.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _35.QueryRedelegationsRequest): Promise<_35.QueryRedelegationsResponse>;
                        delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _35.QueryDelegatorValidatorRequest): Promise<_35.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _35.QueryHistoricalInfoRequest): Promise<_35.QueryHistoricalInfoResponse>;
                        pool(request?: _35.QueryPoolRequest): Promise<_35.QueryPoolResponse>;
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _39.SimulateRequest): Promise<_39.SimulateResponse>;
                        getTx(request: _39.GetTxRequest): Promise<_39.GetTxResponse>;
                        broadcastTx(request: _39.BroadcastTxRequest): Promise<_39.BroadcastTxResponse>;
                        getTxsEvent(request: _39.GetTxsEventRequest): Promise<_39.GetTxsEventResponse>;
                        getBlockWithTxs(request: _39.GetBlockWithTxsRequest): Promise<_39.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _41.QueryCurrentPlanRequest): Promise<_41.QueryCurrentPlanResponse>;
                        appliedPlan(request: _41.QueryAppliedPlanRequest): Promise<_41.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _41.QueryUpgradedConsensusStateRequest): Promise<_41.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _41.QueryModuleVersionsRequest): Promise<_41.QueryModuleVersionsResponse>;
                        authority(request?: _41.QueryAuthorityRequest): Promise<_41.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _138.LCDQueryClient;
                };
                authz: {
                    v1beta1: _139.LCDQueryClient;
                };
                bank: {
                    v1beta1: _140.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _141.LCDQueryClient;
                };
                gov: {
                    v1beta1: _142.LCDQueryClient;
                };
                staking: {
                    v1beta1: _143.LCDQueryClient;
                };
                tx: {
                    v1beta1: _144.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _145.LCDQueryClient;
                };
            };
        }>;
    };
}
