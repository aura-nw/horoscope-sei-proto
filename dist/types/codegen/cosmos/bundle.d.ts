import * as _2 from "./accesscontrol_x/genesis";
import * as _3 from "./accesscontrol_x/query";
import * as _4 from "./accesscontrol_x/tx";
import * as _5 from "./accesscontrol_x/gov";
import * as _6 from "./accesscontrol/accesscontrol";
import * as _7 from "./accesscontrol/constants";
import * as _8 from "./accesscontrol/legacy";
import * as _9 from "./app/v1alpha1/config";
import * as _10 from "./app/v1alpha1/module";
import * as _11 from "./app/v1alpha1/query";
import * as _12 from "./auth/v1beta1/auth";
import * as _13 from "./auth/v1beta1/genesis";
import * as _14 from "./auth/v1beta1/query";
import * as _15 from "./authz/v1beta1/authz";
import * as _16 from "./authz/v1beta1/event";
import * as _17 from "./authz/v1beta1/genesis";
import * as _18 from "./authz/v1beta1/query";
import * as _19 from "./authz/v1beta1/tx";
import * as _20 from "./bank/v1beta1/authz";
import * as _21 from "./bank/v1beta1/bank";
import * as _22 from "./bank/v1beta1/genesis";
import * as _23 from "./bank/v1beta1/query";
import * as _24 from "./bank/v1beta1/tx";
import * as _25 from "./base/abci/v1beta1/abci";
import * as _26 from "./base/kv/v1beta1/kv";
import * as _27 from "./base/query/v1beta1/pagination";
import * as _28 from "./base/reflection/v1beta1/reflection";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/snapshots/v1beta1/snapshot";
import * as _31 from "./base/store/v1beta1/commit_info";
import * as _32 from "./base/store/v1beta1/listening";
import * as _33 from "./base/tendermint/v1beta1/query";
import * as _34 from "./base/v1beta1/coin";
import * as _35 from "./capability/v1beta1/capability";
import * as _36 from "./capability/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/genesis";
import * as _38 from "./crisis/v1beta1/tx";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/hd/v1/hd";
import * as _41 from "./crypto/keyring/v1/record";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./crypto/sr25519/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./feegrant/v1beta1/feegrant";
import * as _55 from "./feegrant/v1beta1/genesis";
import * as _56 from "./feegrant/v1beta1/query";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./genutil/v1beta1/genesis";
import * as _59 from "./gov/v1/genesis";
import * as _60 from "./gov/v1/gov";
import * as _61 from "./gov/v1/query";
import * as _62 from "./gov/v1/tx";
import * as _63 from "./gov/v1beta1/genesis";
import * as _64 from "./gov/v1beta1/gov";
import * as _65 from "./gov/v1beta1/query";
import * as _66 from "./gov/v1beta1/tx";
import * as _67 from "./group/v1/events";
import * as _68 from "./group/v1/genesis";
import * as _69 from "./group/v1/query";
import * as _70 from "./group/v1/tx";
import * as _71 from "./group/v1/types";
import * as _72 from "./mint/v1beta1/genesis";
import * as _73 from "./mint/v1beta1/mint";
import * as _74 from "./mint/v1beta1/query";
import * as _76 from "./nft/v1beta1/event";
import * as _77 from "./nft/v1beta1/genesis";
import * as _78 from "./nft/v1beta1/nft";
import * as _79 from "./nft/v1beta1/query";
import * as _80 from "./nft/v1beta1/tx";
import * as _81 from "./orm/v1/orm";
import * as _82 from "./orm/v1alpha1/schema";
import * as _83 from "./params/types/types";
import * as _84 from "./params/v1beta1/params";
import * as _85 from "./params/v1beta1/query";
import * as _86 from "./slashing/v1beta1/genesis";
import * as _87 from "./slashing/v1beta1/query";
import * as _88 from "./slashing/v1beta1/slashing";
import * as _89 from "./slashing/v1beta1/tx";
import * as _90 from "./staking/v1beta1/authz";
import * as _91 from "./staking/v1beta1/genesis";
import * as _92 from "./staking/v1beta1/query";
import * as _93 from "./staking/v1beta1/staking";
import * as _94 from "./staking/v1beta1/tx";
import * as _95 from "./tx/signing/v1beta1/signing";
import * as _96 from "./tx/v1beta1/service";
import * as _97 from "./tx/v1beta1/tx";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/tx";
import * as _100 from "./upgrade/v1beta1/upgrade";
import * as _101 from "./vesting/v1beta1/tx";
import * as _102 from "./vesting/v1beta1/vesting";
import * as _256 from "./accesscontrol_x/query.lcd";
import * as _257 from "./auth/v1beta1/query.lcd";
import * as _258 from "./authz/v1beta1/query.lcd";
import * as _259 from "./bank/v1beta1/query.lcd";
import * as _260 from "./base/tendermint/v1beta1/query.lcd";
import * as _261 from "./distribution/v1beta1/query.lcd";
import * as _262 from "./evidence/v1beta1/query.lcd";
import * as _263 from "./feegrant/v1beta1/query.lcd";
import * as _264 from "./gov/v1/query.lcd";
import * as _265 from "./gov/v1beta1/query.lcd";
import * as _266 from "./group/v1/query.lcd";
import * as _267 from "./mint/v1beta1/query.lcd";
import * as _268 from "./nft/v1beta1/query.lcd";
import * as _269 from "./params/v1beta1/query.lcd";
import * as _270 from "./slashing/v1beta1/query.lcd";
import * as _271 from "./staking/v1beta1/query.lcd";
import * as _272 from "./tx/v1beta1/service.lcd";
import * as _273 from "./upgrade/v1beta1/query.lcd";
import * as _274 from "./accesscontrol_x/query.rpc.Query";
import * as _275 from "./app/v1alpha1/query.rpc.Query";
import * as _276 from "./auth/v1beta1/query.rpc.Query";
import * as _277 from "./authz/v1beta1/query.rpc.Query";
import * as _278 from "./bank/v1beta1/query.rpc.Query";
import * as _279 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _280 from "./distribution/v1beta1/query.rpc.Query";
import * as _281 from "./evidence/v1beta1/query.rpc.Query";
import * as _282 from "./feegrant/v1beta1/query.rpc.Query";
import * as _283 from "./gov/v1/query.rpc.Query";
import * as _284 from "./gov/v1beta1/query.rpc.Query";
import * as _285 from "./group/v1/query.rpc.Query";
import * as _286 from "./mint/v1beta1/query.rpc.Query";
import * as _287 from "./nft/v1beta1/query.rpc.Query";
import * as _288 from "./params/v1beta1/query.rpc.Query";
import * as _289 from "./slashing/v1beta1/query.rpc.Query";
import * as _290 from "./staking/v1beta1/query.rpc.Query";
import * as _291 from "./tx/v1beta1/service.rpc.Service";
import * as _292 from "./upgrade/v1beta1/query.rpc.Query";
import * as _293 from "./accesscontrol_x/tx.rpc.msg";
import * as _294 from "./authz/v1beta1/tx.rpc.msg";
import * as _295 from "./bank/v1beta1/tx.rpc.msg";
import * as _296 from "./crisis/v1beta1/tx.rpc.msg";
import * as _297 from "./distribution/v1beta1/tx.rpc.msg";
import * as _298 from "./evidence/v1beta1/tx.rpc.msg";
import * as _299 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _300 from "./gov/v1/tx.rpc.msg";
import * as _301 from "./gov/v1beta1/tx.rpc.msg";
import * as _302 from "./group/v1/tx.rpc.msg";
import * as _303 from "./nft/v1beta1/tx.rpc.msg";
import * as _304 from "./slashing/v1beta1/tx.rpc.msg";
import * as _305 from "./staking/v1beta1/tx.rpc.msg";
import * as _306 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _307 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace accesscontrol_x {
        const v1beta1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                resourceDependencyMappingFromMessageKey(request: _3.ResourceDependencyMappingFromMessageKeyRequest): Promise<_3.ResourceDependencyMappingFromMessageKeyResponse>;
                listResourceDependencyMapping(request?: _3.ListResourceDependencyMappingRequest): Promise<_3.ListResourceDependencyMappingResponse>;
                wasmDependencyMapping(request: _3.WasmDependencyMappingRequest): Promise<_3.WasmDependencyMappingResponse>;
                listWasmDependencyMapping(request?: _3.ListWasmDependencyMappingRequest): Promise<_3.ListWasmDependencyMappingResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerWasmDependency(value: _4.MsgRegisterWasmDependency): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerWasmDependency(value: _4.MsgRegisterWasmDependency): {
                        typeUrl: string;
                        value: _4.MsgRegisterWasmDependency;
                    };
                };
                toJSON: {
                    registerWasmDependency(value: _4.MsgRegisterWasmDependency): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerWasmDependency(value: any): {
                        typeUrl: string;
                        value: _4.MsgRegisterWasmDependency;
                    };
                };
                fromPartial: {
                    registerWasmDependency(value: _4.MsgRegisterWasmDependency): {
                        typeUrl: string;
                        value: _4.MsgRegisterWasmDependency;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency": {
                    aminoType: string;
                    toAmino: (message: _4.MsgRegisterWasmDependency) => _4.MsgRegisterWasmDependencyAmino;
                    fromAmino: (object: _4.MsgRegisterWasmDependencyAmino) => _4.MsgRegisterWasmDependency;
                };
            };
            RegisterWasmDependencyJSONFile: {
                typeUrl: string;
                encode(message: _4.RegisterWasmDependencyJSONFile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.RegisterWasmDependencyJSONFile;
                fromJSON(object: any): _4.RegisterWasmDependencyJSONFile;
                toJSON(message: _4.RegisterWasmDependencyJSONFile): unknown;
                fromPartial(object: Partial<_4.RegisterWasmDependencyJSONFile>): _4.RegisterWasmDependencyJSONFile;
                fromAmino(object: _4.RegisterWasmDependencyJSONFileAmino): _4.RegisterWasmDependencyJSONFile;
                toAmino(message: _4.RegisterWasmDependencyJSONFile): _4.RegisterWasmDependencyJSONFileAmino;
                fromAminoMsg(object: _4.RegisterWasmDependencyJSONFileAminoMsg): _4.RegisterWasmDependencyJSONFile;
                toAminoMsg(message: _4.RegisterWasmDependencyJSONFile): _4.RegisterWasmDependencyJSONFileAminoMsg;
                fromProtoMsg(message: _4.RegisterWasmDependencyJSONFileProtoMsg): _4.RegisterWasmDependencyJSONFile;
                toProto(message: _4.RegisterWasmDependencyJSONFile): Uint8Array;
                toProtoMsg(message: _4.RegisterWasmDependencyJSONFile): _4.RegisterWasmDependencyJSONFileProtoMsg;
            };
            MsgRegisterWasmDependency: {
                typeUrl: string;
                encode(message: _4.MsgRegisterWasmDependency, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgRegisterWasmDependency;
                fromJSON(object: any): _4.MsgRegisterWasmDependency;
                toJSON(message: _4.MsgRegisterWasmDependency): unknown;
                fromPartial(object: Partial<_4.MsgRegisterWasmDependency>): _4.MsgRegisterWasmDependency;
                fromAmino(object: _4.MsgRegisterWasmDependencyAmino): _4.MsgRegisterWasmDependency;
                toAmino(message: _4.MsgRegisterWasmDependency): _4.MsgRegisterWasmDependencyAmino;
                fromAminoMsg(object: _4.MsgRegisterWasmDependencyAminoMsg): _4.MsgRegisterWasmDependency;
                toAminoMsg(message: _4.MsgRegisterWasmDependency): _4.MsgRegisterWasmDependencyAminoMsg;
                fromProtoMsg(message: _4.MsgRegisterWasmDependencyProtoMsg): _4.MsgRegisterWasmDependency;
                toProto(message: _4.MsgRegisterWasmDependency): Uint8Array;
                toProtoMsg(message: _4.MsgRegisterWasmDependency): _4.MsgRegisterWasmDependencyProtoMsg;
            };
            MsgRegisterWasmDependencyResponse: {
                typeUrl: string;
                encode(_: _4.MsgRegisterWasmDependencyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgRegisterWasmDependencyResponse;
                fromJSON(_: any): _4.MsgRegisterWasmDependencyResponse;
                toJSON(_: _4.MsgRegisterWasmDependencyResponse): unknown;
                fromPartial(_: Partial<_4.MsgRegisterWasmDependencyResponse>): _4.MsgRegisterWasmDependencyResponse;
                fromAmino(_: _4.MsgRegisterWasmDependencyResponseAmino): _4.MsgRegisterWasmDependencyResponse;
                toAmino(_: _4.MsgRegisterWasmDependencyResponse): _4.MsgRegisterWasmDependencyResponseAmino;
                fromAminoMsg(object: _4.MsgRegisterWasmDependencyResponseAminoMsg): _4.MsgRegisterWasmDependencyResponse;
                toAminoMsg(message: _4.MsgRegisterWasmDependencyResponse): _4.MsgRegisterWasmDependencyResponseAminoMsg;
                fromProtoMsg(message: _4.MsgRegisterWasmDependencyResponseProtoMsg): _4.MsgRegisterWasmDependencyResponse;
                toProto(message: _4.MsgRegisterWasmDependencyResponse): Uint8Array;
                toProtoMsg(message: _4.MsgRegisterWasmDependencyResponse): _4.MsgRegisterWasmDependencyResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsRequest;
                fromJSON(_: any): _3.QueryParamsRequest;
                toJSON(_: _3.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
                fromAmino(_: _3.QueryParamsRequestAmino): _3.QueryParamsRequest;
                toAmino(_: _3.QueryParamsRequest): _3.QueryParamsRequestAmino;
                fromAminoMsg(object: _3.QueryParamsRequestAminoMsg): _3.QueryParamsRequest;
                toAminoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryParamsRequestProtoMsg): _3.QueryParamsRequest;
                toProto(message: _3.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsResponse;
                fromJSON(object: any): _3.QueryParamsResponse;
                toJSON(message: _3.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
                fromAmino(object: _3.QueryParamsResponseAmino): _3.QueryParamsResponse;
                toAmino(message: _3.QueryParamsResponse): _3.QueryParamsResponseAmino;
                fromAminoMsg(object: _3.QueryParamsResponseAminoMsg): _3.QueryParamsResponse;
                toAminoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryParamsResponseProtoMsg): _3.QueryParamsResponse;
                toProto(message: _3.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseProtoMsg;
            };
            ResourceDependencyMappingFromMessageKeyRequest: {
                typeUrl: string;
                encode(message: _3.ResourceDependencyMappingFromMessageKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ResourceDependencyMappingFromMessageKeyRequest;
                fromJSON(object: any): _3.ResourceDependencyMappingFromMessageKeyRequest;
                toJSON(message: _3.ResourceDependencyMappingFromMessageKeyRequest): unknown;
                fromPartial(object: Partial<_3.ResourceDependencyMappingFromMessageKeyRequest>): _3.ResourceDependencyMappingFromMessageKeyRequest;
                fromAmino(object: _3.ResourceDependencyMappingFromMessageKeyRequestAmino): _3.ResourceDependencyMappingFromMessageKeyRequest;
                toAmino(message: _3.ResourceDependencyMappingFromMessageKeyRequest): _3.ResourceDependencyMappingFromMessageKeyRequestAmino;
                fromAminoMsg(object: _3.ResourceDependencyMappingFromMessageKeyRequestAminoMsg): _3.ResourceDependencyMappingFromMessageKeyRequest;
                toAminoMsg(message: _3.ResourceDependencyMappingFromMessageKeyRequest): _3.ResourceDependencyMappingFromMessageKeyRequestAminoMsg;
                fromProtoMsg(message: _3.ResourceDependencyMappingFromMessageKeyRequestProtoMsg): _3.ResourceDependencyMappingFromMessageKeyRequest;
                toProto(message: _3.ResourceDependencyMappingFromMessageKeyRequest): Uint8Array;
                toProtoMsg(message: _3.ResourceDependencyMappingFromMessageKeyRequest): _3.ResourceDependencyMappingFromMessageKeyRequestProtoMsg;
            };
            ResourceDependencyMappingFromMessageKeyResponse: {
                typeUrl: string;
                encode(message: _3.ResourceDependencyMappingFromMessageKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ResourceDependencyMappingFromMessageKeyResponse;
                fromJSON(object: any): _3.ResourceDependencyMappingFromMessageKeyResponse;
                toJSON(message: _3.ResourceDependencyMappingFromMessageKeyResponse): unknown;
                fromPartial(object: Partial<_3.ResourceDependencyMappingFromMessageKeyResponse>): _3.ResourceDependencyMappingFromMessageKeyResponse;
                fromAmino(object: _3.ResourceDependencyMappingFromMessageKeyResponseAmino): _3.ResourceDependencyMappingFromMessageKeyResponse;
                toAmino(message: _3.ResourceDependencyMappingFromMessageKeyResponse): _3.ResourceDependencyMappingFromMessageKeyResponseAmino;
                fromAminoMsg(object: _3.ResourceDependencyMappingFromMessageKeyResponseAminoMsg): _3.ResourceDependencyMappingFromMessageKeyResponse;
                toAminoMsg(message: _3.ResourceDependencyMappingFromMessageKeyResponse): _3.ResourceDependencyMappingFromMessageKeyResponseAminoMsg;
                fromProtoMsg(message: _3.ResourceDependencyMappingFromMessageKeyResponseProtoMsg): _3.ResourceDependencyMappingFromMessageKeyResponse;
                toProto(message: _3.ResourceDependencyMappingFromMessageKeyResponse): Uint8Array;
                toProtoMsg(message: _3.ResourceDependencyMappingFromMessageKeyResponse): _3.ResourceDependencyMappingFromMessageKeyResponseProtoMsg;
            };
            WasmDependencyMappingRequest: {
                typeUrl: string;
                encode(message: _3.WasmDependencyMappingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.WasmDependencyMappingRequest;
                fromJSON(object: any): _3.WasmDependencyMappingRequest;
                toJSON(message: _3.WasmDependencyMappingRequest): unknown;
                fromPartial(object: Partial<_3.WasmDependencyMappingRequest>): _3.WasmDependencyMappingRequest;
                fromAmino(object: _3.WasmDependencyMappingRequestAmino): _3.WasmDependencyMappingRequest;
                toAmino(message: _3.WasmDependencyMappingRequest): _3.WasmDependencyMappingRequestAmino;
                fromAminoMsg(object: _3.WasmDependencyMappingRequestAminoMsg): _3.WasmDependencyMappingRequest;
                toAminoMsg(message: _3.WasmDependencyMappingRequest): _3.WasmDependencyMappingRequestAminoMsg;
                fromProtoMsg(message: _3.WasmDependencyMappingRequestProtoMsg): _3.WasmDependencyMappingRequest;
                toProto(message: _3.WasmDependencyMappingRequest): Uint8Array;
                toProtoMsg(message: _3.WasmDependencyMappingRequest): _3.WasmDependencyMappingRequestProtoMsg;
            };
            WasmDependencyMappingResponse: {
                typeUrl: string;
                encode(message: _3.WasmDependencyMappingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.WasmDependencyMappingResponse;
                fromJSON(object: any): _3.WasmDependencyMappingResponse;
                toJSON(message: _3.WasmDependencyMappingResponse): unknown;
                fromPartial(object: Partial<_3.WasmDependencyMappingResponse>): _3.WasmDependencyMappingResponse;
                fromAmino(object: _3.WasmDependencyMappingResponseAmino): _3.WasmDependencyMappingResponse;
                toAmino(message: _3.WasmDependencyMappingResponse): _3.WasmDependencyMappingResponseAmino;
                fromAminoMsg(object: _3.WasmDependencyMappingResponseAminoMsg): _3.WasmDependencyMappingResponse;
                toAminoMsg(message: _3.WasmDependencyMappingResponse): _3.WasmDependencyMappingResponseAminoMsg;
                fromProtoMsg(message: _3.WasmDependencyMappingResponseProtoMsg): _3.WasmDependencyMappingResponse;
                toProto(message: _3.WasmDependencyMappingResponse): Uint8Array;
                toProtoMsg(message: _3.WasmDependencyMappingResponse): _3.WasmDependencyMappingResponseProtoMsg;
            };
            ListResourceDependencyMappingRequest: {
                typeUrl: string;
                encode(_: _3.ListResourceDependencyMappingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ListResourceDependencyMappingRequest;
                fromJSON(_: any): _3.ListResourceDependencyMappingRequest;
                toJSON(_: _3.ListResourceDependencyMappingRequest): unknown;
                fromPartial(_: Partial<_3.ListResourceDependencyMappingRequest>): _3.ListResourceDependencyMappingRequest;
                fromAmino(_: _3.ListResourceDependencyMappingRequestAmino): _3.ListResourceDependencyMappingRequest;
                toAmino(_: _3.ListResourceDependencyMappingRequest): _3.ListResourceDependencyMappingRequestAmino;
                fromAminoMsg(object: _3.ListResourceDependencyMappingRequestAminoMsg): _3.ListResourceDependencyMappingRequest;
                toAminoMsg(message: _3.ListResourceDependencyMappingRequest): _3.ListResourceDependencyMappingRequestAminoMsg;
                fromProtoMsg(message: _3.ListResourceDependencyMappingRequestProtoMsg): _3.ListResourceDependencyMappingRequest;
                toProto(message: _3.ListResourceDependencyMappingRequest): Uint8Array;
                toProtoMsg(message: _3.ListResourceDependencyMappingRequest): _3.ListResourceDependencyMappingRequestProtoMsg;
            };
            ListResourceDependencyMappingResponse: {
                typeUrl: string;
                encode(message: _3.ListResourceDependencyMappingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ListResourceDependencyMappingResponse;
                fromJSON(object: any): _3.ListResourceDependencyMappingResponse;
                toJSON(message: _3.ListResourceDependencyMappingResponse): unknown;
                fromPartial(object: Partial<_3.ListResourceDependencyMappingResponse>): _3.ListResourceDependencyMappingResponse;
                fromAmino(object: _3.ListResourceDependencyMappingResponseAmino): _3.ListResourceDependencyMappingResponse;
                toAmino(message: _3.ListResourceDependencyMappingResponse): _3.ListResourceDependencyMappingResponseAmino;
                fromAminoMsg(object: _3.ListResourceDependencyMappingResponseAminoMsg): _3.ListResourceDependencyMappingResponse;
                toAminoMsg(message: _3.ListResourceDependencyMappingResponse): _3.ListResourceDependencyMappingResponseAminoMsg;
                fromProtoMsg(message: _3.ListResourceDependencyMappingResponseProtoMsg): _3.ListResourceDependencyMappingResponse;
                toProto(message: _3.ListResourceDependencyMappingResponse): Uint8Array;
                toProtoMsg(message: _3.ListResourceDependencyMappingResponse): _3.ListResourceDependencyMappingResponseProtoMsg;
            };
            ListWasmDependencyMappingRequest: {
                typeUrl: string;
                encode(_: _3.ListWasmDependencyMappingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ListWasmDependencyMappingRequest;
                fromJSON(_: any): _3.ListWasmDependencyMappingRequest;
                toJSON(_: _3.ListWasmDependencyMappingRequest): unknown;
                fromPartial(_: Partial<_3.ListWasmDependencyMappingRequest>): _3.ListWasmDependencyMappingRequest;
                fromAmino(_: _3.ListWasmDependencyMappingRequestAmino): _3.ListWasmDependencyMappingRequest;
                toAmino(_: _3.ListWasmDependencyMappingRequest): _3.ListWasmDependencyMappingRequestAmino;
                fromAminoMsg(object: _3.ListWasmDependencyMappingRequestAminoMsg): _3.ListWasmDependencyMappingRequest;
                toAminoMsg(message: _3.ListWasmDependencyMappingRequest): _3.ListWasmDependencyMappingRequestAminoMsg;
                fromProtoMsg(message: _3.ListWasmDependencyMappingRequestProtoMsg): _3.ListWasmDependencyMappingRequest;
                toProto(message: _3.ListWasmDependencyMappingRequest): Uint8Array;
                toProtoMsg(message: _3.ListWasmDependencyMappingRequest): _3.ListWasmDependencyMappingRequestProtoMsg;
            };
            ListWasmDependencyMappingResponse: {
                typeUrl: string;
                encode(message: _3.ListWasmDependencyMappingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ListWasmDependencyMappingResponse;
                fromJSON(object: any): _3.ListWasmDependencyMappingResponse;
                toJSON(message: _3.ListWasmDependencyMappingResponse): unknown;
                fromPartial(object: Partial<_3.ListWasmDependencyMappingResponse>): _3.ListWasmDependencyMappingResponse;
                fromAmino(object: _3.ListWasmDependencyMappingResponseAmino): _3.ListWasmDependencyMappingResponse;
                toAmino(message: _3.ListWasmDependencyMappingResponse): _3.ListWasmDependencyMappingResponseAmino;
                fromAminoMsg(object: _3.ListWasmDependencyMappingResponseAminoMsg): _3.ListWasmDependencyMappingResponse;
                toAminoMsg(message: _3.ListWasmDependencyMappingResponse): _3.ListWasmDependencyMappingResponseAminoMsg;
                fromProtoMsg(message: _3.ListWasmDependencyMappingResponseProtoMsg): _3.ListWasmDependencyMappingResponse;
                toProto(message: _3.ListWasmDependencyMappingResponse): Uint8Array;
                toProtoMsg(message: _3.ListWasmDependencyMappingResponse): _3.ListWasmDependencyMappingResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenesisState;
                fromJSON(object: any): _2.GenesisState;
                toJSON(message: _2.GenesisState): unknown;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
                fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
                toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
                fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
                toAminoMsg(message: _2.GenesisState): _2.GenesisStateAminoMsg;
                fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
                toProto(message: _2.GenesisState): Uint8Array;
                toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromJSON(_: any): _2.Params;
                toJSON(_: _2.Params): unknown;
                fromPartial(_: Partial<_2.Params>): _2.Params;
                fromAmino(_: _2.ParamsAmino): _2.Params;
                toAmino(_: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                toAminoMsg(message: _2.Params): _2.ParamsAminoMsg;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
        };
    }
    namespace accesscontrol {
        const v1beta1: {
            LegacyAccessOperationWithSelector: {
                typeUrl: string;
                encode(message: _8.LegacyAccessOperationWithSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.LegacyAccessOperationWithSelector;
                fromJSON(object: any): _8.LegacyAccessOperationWithSelector;
                toJSON(message: _8.LegacyAccessOperationWithSelector): unknown;
                fromPartial(object: Partial<_8.LegacyAccessOperationWithSelector>): _8.LegacyAccessOperationWithSelector;
                fromAmino(object: _8.LegacyAccessOperationWithSelectorAmino): _8.LegacyAccessOperationWithSelector;
                toAmino(message: _8.LegacyAccessOperationWithSelector): _8.LegacyAccessOperationWithSelectorAmino;
                fromAminoMsg(object: _8.LegacyAccessOperationWithSelectorAminoMsg): _8.LegacyAccessOperationWithSelector;
                toAminoMsg(message: _8.LegacyAccessOperationWithSelector): _8.LegacyAccessOperationWithSelectorAminoMsg;
                fromProtoMsg(message: _8.LegacyAccessOperationWithSelectorProtoMsg): _8.LegacyAccessOperationWithSelector;
                toProto(message: _8.LegacyAccessOperationWithSelector): Uint8Array;
                toProtoMsg(message: _8.LegacyAccessOperationWithSelector): _8.LegacyAccessOperationWithSelectorProtoMsg;
            };
            LegacyWasmDependencyMapping: {
                typeUrl: string;
                encode(message: _8.LegacyWasmDependencyMapping, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.LegacyWasmDependencyMapping;
                fromJSON(object: any): _8.LegacyWasmDependencyMapping;
                toJSON(message: _8.LegacyWasmDependencyMapping): unknown;
                fromPartial(object: Partial<_8.LegacyWasmDependencyMapping>): _8.LegacyWasmDependencyMapping;
                fromAmino(object: _8.LegacyWasmDependencyMappingAmino): _8.LegacyWasmDependencyMapping;
                toAmino(message: _8.LegacyWasmDependencyMapping): _8.LegacyWasmDependencyMappingAmino;
                fromAminoMsg(object: _8.LegacyWasmDependencyMappingAminoMsg): _8.LegacyWasmDependencyMapping;
                toAminoMsg(message: _8.LegacyWasmDependencyMapping): _8.LegacyWasmDependencyMappingAminoMsg;
                fromProtoMsg(message: _8.LegacyWasmDependencyMappingProtoMsg): _8.LegacyWasmDependencyMapping;
                toProto(message: _8.LegacyWasmDependencyMapping): Uint8Array;
                toProtoMsg(message: _8.LegacyWasmDependencyMapping): _8.LegacyWasmDependencyMappingProtoMsg;
            };
            accessTypeFromJSON(object: any): _7.AccessType;
            accessTypeToJSON(object: _7.AccessType): string;
            accessOperationSelectorTypeFromJSON(object: any): _7.AccessOperationSelectorType;
            accessOperationSelectorTypeToJSON(object: _7.AccessOperationSelectorType): string;
            resourceTypeFromJSON(object: any): _7.ResourceType;
            resourceTypeToJSON(object: _7.ResourceType): string;
            wasmMessageSubtypeFromJSON(object: any): _7.WasmMessageSubtype;
            wasmMessageSubtypeToJSON(object: _7.WasmMessageSubtype): string;
            AccessType: typeof _7.AccessType;
            AccessTypeSDKType: typeof _7.AccessType;
            AccessTypeAmino: typeof _7.AccessType;
            AccessOperationSelectorType: typeof _7.AccessOperationSelectorType;
            AccessOperationSelectorTypeSDKType: typeof _7.AccessOperationSelectorType;
            AccessOperationSelectorTypeAmino: typeof _7.AccessOperationSelectorType;
            ResourceType: typeof _7.ResourceType;
            ResourceTypeSDKType: typeof _7.ResourceType;
            ResourceTypeAmino: typeof _7.ResourceType;
            WasmMessageSubtype: typeof _7.WasmMessageSubtype;
            WasmMessageSubtypeSDKType: typeof _7.WasmMessageSubtype;
            WasmMessageSubtypeAmino: typeof _7.WasmMessageSubtype;
            AccessOperation: {
                typeUrl: string;
                encode(message: _6.AccessOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.AccessOperation;
                fromJSON(object: any): _6.AccessOperation;
                toJSON(message: _6.AccessOperation): unknown;
                fromPartial(object: Partial<_6.AccessOperation>): _6.AccessOperation;
                fromAmino(object: _6.AccessOperationAmino): _6.AccessOperation;
                toAmino(message: _6.AccessOperation): _6.AccessOperationAmino;
                fromAminoMsg(object: _6.AccessOperationAminoMsg): _6.AccessOperation;
                toAminoMsg(message: _6.AccessOperation): _6.AccessOperationAminoMsg;
                fromProtoMsg(message: _6.AccessOperationProtoMsg): _6.AccessOperation;
                toProto(message: _6.AccessOperation): Uint8Array;
                toProtoMsg(message: _6.AccessOperation): _6.AccessOperationProtoMsg;
            };
            WasmAccessOperation: {
                typeUrl: string;
                encode(message: _6.WasmAccessOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.WasmAccessOperation;
                fromJSON(object: any): _6.WasmAccessOperation;
                toJSON(message: _6.WasmAccessOperation): unknown;
                fromPartial(object: Partial<_6.WasmAccessOperation>): _6.WasmAccessOperation;
                fromAmino(object: _6.WasmAccessOperationAmino): _6.WasmAccessOperation;
                toAmino(message: _6.WasmAccessOperation): _6.WasmAccessOperationAmino;
                fromAminoMsg(object: _6.WasmAccessOperationAminoMsg): _6.WasmAccessOperation;
                toAminoMsg(message: _6.WasmAccessOperation): _6.WasmAccessOperationAminoMsg;
                fromProtoMsg(message: _6.WasmAccessOperationProtoMsg): _6.WasmAccessOperation;
                toProto(message: _6.WasmAccessOperation): Uint8Array;
                toProtoMsg(message: _6.WasmAccessOperation): _6.WasmAccessOperationProtoMsg;
            };
            WasmContractReference: {
                typeUrl: string;
                encode(message: _6.WasmContractReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.WasmContractReference;
                fromJSON(object: any): _6.WasmContractReference;
                toJSON(message: _6.WasmContractReference): unknown;
                fromPartial(object: Partial<_6.WasmContractReference>): _6.WasmContractReference;
                fromAmino(object: _6.WasmContractReferenceAmino): _6.WasmContractReference;
                toAmino(message: _6.WasmContractReference): _6.WasmContractReferenceAmino;
                fromAminoMsg(object: _6.WasmContractReferenceAminoMsg): _6.WasmContractReference;
                toAminoMsg(message: _6.WasmContractReference): _6.WasmContractReferenceAminoMsg;
                fromProtoMsg(message: _6.WasmContractReferenceProtoMsg): _6.WasmContractReference;
                toProto(message: _6.WasmContractReference): Uint8Array;
                toProtoMsg(message: _6.WasmContractReference): _6.WasmContractReferenceProtoMsg;
            };
            WasmContractReferences: {
                typeUrl: string;
                encode(message: _6.WasmContractReferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.WasmContractReferences;
                fromJSON(object: any): _6.WasmContractReferences;
                toJSON(message: _6.WasmContractReferences): unknown;
                fromPartial(object: Partial<_6.WasmContractReferences>): _6.WasmContractReferences;
                fromAmino(object: _6.WasmContractReferencesAmino): _6.WasmContractReferences;
                toAmino(message: _6.WasmContractReferences): _6.WasmContractReferencesAmino;
                fromAminoMsg(object: _6.WasmContractReferencesAminoMsg): _6.WasmContractReferences;
                toAminoMsg(message: _6.WasmContractReferences): _6.WasmContractReferencesAminoMsg;
                fromProtoMsg(message: _6.WasmContractReferencesProtoMsg): _6.WasmContractReferences;
                toProto(message: _6.WasmContractReferences): Uint8Array;
                toProtoMsg(message: _6.WasmContractReferences): _6.WasmContractReferencesProtoMsg;
            };
            WasmAccessOperations: {
                typeUrl: string;
                encode(message: _6.WasmAccessOperations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.WasmAccessOperations;
                fromJSON(object: any): _6.WasmAccessOperations;
                toJSON(message: _6.WasmAccessOperations): unknown;
                fromPartial(object: Partial<_6.WasmAccessOperations>): _6.WasmAccessOperations;
                fromAmino(object: _6.WasmAccessOperationsAmino): _6.WasmAccessOperations;
                toAmino(message: _6.WasmAccessOperations): _6.WasmAccessOperationsAmino;
                fromAminoMsg(object: _6.WasmAccessOperationsAminoMsg): _6.WasmAccessOperations;
                toAminoMsg(message: _6.WasmAccessOperations): _6.WasmAccessOperationsAminoMsg;
                fromProtoMsg(message: _6.WasmAccessOperationsProtoMsg): _6.WasmAccessOperations;
                toProto(message: _6.WasmAccessOperations): Uint8Array;
                toProtoMsg(message: _6.WasmAccessOperations): _6.WasmAccessOperationsProtoMsg;
            };
            MessageDependencyMapping: {
                typeUrl: string;
                encode(message: _6.MessageDependencyMapping, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MessageDependencyMapping;
                fromJSON(object: any): _6.MessageDependencyMapping;
                toJSON(message: _6.MessageDependencyMapping): unknown;
                fromPartial(object: Partial<_6.MessageDependencyMapping>): _6.MessageDependencyMapping;
                fromAmino(object: _6.MessageDependencyMappingAmino): _6.MessageDependencyMapping;
                toAmino(message: _6.MessageDependencyMapping): _6.MessageDependencyMappingAmino;
                fromAminoMsg(object: _6.MessageDependencyMappingAminoMsg): _6.MessageDependencyMapping;
                toAminoMsg(message: _6.MessageDependencyMapping): _6.MessageDependencyMappingAminoMsg;
                fromProtoMsg(message: _6.MessageDependencyMappingProtoMsg): _6.MessageDependencyMapping;
                toProto(message: _6.MessageDependencyMapping): Uint8Array;
                toProtoMsg(message: _6.MessageDependencyMapping): _6.MessageDependencyMappingProtoMsg;
            };
            WasmDependencyMapping: {
                typeUrl: string;
                encode(message: _6.WasmDependencyMapping, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.WasmDependencyMapping;
                fromJSON(object: any): _6.WasmDependencyMapping;
                toJSON(message: _6.WasmDependencyMapping): unknown;
                fromPartial(object: Partial<_6.WasmDependencyMapping>): _6.WasmDependencyMapping;
                fromAmino(object: _6.WasmDependencyMappingAmino): _6.WasmDependencyMapping;
                toAmino(message: _6.WasmDependencyMapping): _6.WasmDependencyMappingAmino;
                fromAminoMsg(object: _6.WasmDependencyMappingAminoMsg): _6.WasmDependencyMapping;
                toAminoMsg(message: _6.WasmDependencyMapping): _6.WasmDependencyMappingAminoMsg;
                fromProtoMsg(message: _6.WasmDependencyMappingProtoMsg): _6.WasmDependencyMapping;
                toProto(message: _6.WasmDependencyMapping): Uint8Array;
                toProtoMsg(message: _6.WasmDependencyMapping): _6.WasmDependencyMappingProtoMsg;
            };
            MsgUpdateResourceDependencyMappingProposal: {
                typeUrl: string;
                encode(message: _5.MsgUpdateResourceDependencyMappingProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateResourceDependencyMappingProposal;
                fromJSON(object: any): _5.MsgUpdateResourceDependencyMappingProposal;
                toJSON(message: _5.MsgUpdateResourceDependencyMappingProposal): unknown;
                fromPartial(object: Partial<_5.MsgUpdateResourceDependencyMappingProposal>): _5.MsgUpdateResourceDependencyMappingProposal;
                fromAmino(object: _5.MsgUpdateResourceDependencyMappingProposalAmino): _5.MsgUpdateResourceDependencyMappingProposal;
                toAmino(message: _5.MsgUpdateResourceDependencyMappingProposal): _5.MsgUpdateResourceDependencyMappingProposalAmino;
                fromAminoMsg(object: _5.MsgUpdateResourceDependencyMappingProposalAminoMsg): _5.MsgUpdateResourceDependencyMappingProposal;
                toAminoMsg(message: _5.MsgUpdateResourceDependencyMappingProposal): _5.MsgUpdateResourceDependencyMappingProposalAminoMsg;
                fromProtoMsg(message: _5.MsgUpdateResourceDependencyMappingProposalProtoMsg): _5.MsgUpdateResourceDependencyMappingProposal;
                toProto(message: _5.MsgUpdateResourceDependencyMappingProposal): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateResourceDependencyMappingProposal): _5.MsgUpdateResourceDependencyMappingProposalProtoMsg;
            };
            MsgUpdateResourceDependencyMappingProposalJsonFile: {
                typeUrl: string;
                encode(message: _5.MsgUpdateResourceDependencyMappingProposalJsonFile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateResourceDependencyMappingProposalJsonFile;
                fromJSON(object: any): _5.MsgUpdateResourceDependencyMappingProposalJsonFile;
                toJSON(message: _5.MsgUpdateResourceDependencyMappingProposalJsonFile): unknown;
                fromPartial(object: Partial<_5.MsgUpdateResourceDependencyMappingProposalJsonFile>): _5.MsgUpdateResourceDependencyMappingProposalJsonFile;
                fromAmino(object: _5.MsgUpdateResourceDependencyMappingProposalJsonFileAmino): _5.MsgUpdateResourceDependencyMappingProposalJsonFile;
                toAmino(message: _5.MsgUpdateResourceDependencyMappingProposalJsonFile): _5.MsgUpdateResourceDependencyMappingProposalJsonFileAmino;
                fromAminoMsg(object: _5.MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg): _5.MsgUpdateResourceDependencyMappingProposalJsonFile;
                toAminoMsg(message: _5.MsgUpdateResourceDependencyMappingProposalJsonFile): _5.MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg;
                fromProtoMsg(message: _5.MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg): _5.MsgUpdateResourceDependencyMappingProposalJsonFile;
                toProto(message: _5.MsgUpdateResourceDependencyMappingProposalJsonFile): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateResourceDependencyMappingProposalJsonFile): _5.MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg;
            };
            MsgUpdateResourceDependencyMappingProposalResponse: {
                typeUrl: string;
                encode(_: _5.MsgUpdateResourceDependencyMappingProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateResourceDependencyMappingProposalResponse;
                fromJSON(_: any): _5.MsgUpdateResourceDependencyMappingProposalResponse;
                toJSON(_: _5.MsgUpdateResourceDependencyMappingProposalResponse): unknown;
                fromPartial(_: Partial<_5.MsgUpdateResourceDependencyMappingProposalResponse>): _5.MsgUpdateResourceDependencyMappingProposalResponse;
                fromAmino(_: _5.MsgUpdateResourceDependencyMappingProposalResponseAmino): _5.MsgUpdateResourceDependencyMappingProposalResponse;
                toAmino(_: _5.MsgUpdateResourceDependencyMappingProposalResponse): _5.MsgUpdateResourceDependencyMappingProposalResponseAmino;
                fromAminoMsg(object: _5.MsgUpdateResourceDependencyMappingProposalResponseAminoMsg): _5.MsgUpdateResourceDependencyMappingProposalResponse;
                toAminoMsg(message: _5.MsgUpdateResourceDependencyMappingProposalResponse): _5.MsgUpdateResourceDependencyMappingProposalResponseAminoMsg;
                fromProtoMsg(message: _5.MsgUpdateResourceDependencyMappingProposalResponseProtoMsg): _5.MsgUpdateResourceDependencyMappingProposalResponse;
                toProto(message: _5.MsgUpdateResourceDependencyMappingProposalResponse): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateResourceDependencyMappingProposalResponse): _5.MsgUpdateResourceDependencyMappingProposalResponseProtoMsg;
            };
            MsgUpdateWasmDependencyMappingProposal: {
                typeUrl: string;
                encode(message: _5.MsgUpdateWasmDependencyMappingProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateWasmDependencyMappingProposal;
                fromJSON(object: any): _5.MsgUpdateWasmDependencyMappingProposal;
                toJSON(message: _5.MsgUpdateWasmDependencyMappingProposal): unknown;
                fromPartial(object: Partial<_5.MsgUpdateWasmDependencyMappingProposal>): _5.MsgUpdateWasmDependencyMappingProposal;
                fromAmino(object: _5.MsgUpdateWasmDependencyMappingProposalAmino): _5.MsgUpdateWasmDependencyMappingProposal;
                toAmino(message: _5.MsgUpdateWasmDependencyMappingProposal): _5.MsgUpdateWasmDependencyMappingProposalAmino;
                fromAminoMsg(object: _5.MsgUpdateWasmDependencyMappingProposalAminoMsg): _5.MsgUpdateWasmDependencyMappingProposal;
                toAminoMsg(message: _5.MsgUpdateWasmDependencyMappingProposal): _5.MsgUpdateWasmDependencyMappingProposalAminoMsg;
                fromProtoMsg(message: _5.MsgUpdateWasmDependencyMappingProposalProtoMsg): _5.MsgUpdateWasmDependencyMappingProposal;
                toProto(message: _5.MsgUpdateWasmDependencyMappingProposal): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateWasmDependencyMappingProposal): _5.MsgUpdateWasmDependencyMappingProposalProtoMsg;
            };
            MsgUpdateWasmDependencyMappingProposalJsonFile: {
                typeUrl: string;
                encode(message: _5.MsgUpdateWasmDependencyMappingProposalJsonFile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateWasmDependencyMappingProposalJsonFile;
                fromJSON(object: any): _5.MsgUpdateWasmDependencyMappingProposalJsonFile;
                toJSON(message: _5.MsgUpdateWasmDependencyMappingProposalJsonFile): unknown;
                fromPartial(object: Partial<_5.MsgUpdateWasmDependencyMappingProposalJsonFile>): _5.MsgUpdateWasmDependencyMappingProposalJsonFile;
                fromAmino(object: _5.MsgUpdateWasmDependencyMappingProposalJsonFileAmino): _5.MsgUpdateWasmDependencyMappingProposalJsonFile;
                toAmino(message: _5.MsgUpdateWasmDependencyMappingProposalJsonFile): _5.MsgUpdateWasmDependencyMappingProposalJsonFileAmino;
                fromAminoMsg(object: _5.MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg): _5.MsgUpdateWasmDependencyMappingProposalJsonFile;
                toAminoMsg(message: _5.MsgUpdateWasmDependencyMappingProposalJsonFile): _5.MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg;
                fromProtoMsg(message: _5.MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg): _5.MsgUpdateWasmDependencyMappingProposalJsonFile;
                toProto(message: _5.MsgUpdateWasmDependencyMappingProposalJsonFile): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateWasmDependencyMappingProposalJsonFile): _5.MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg;
            };
        };
    }
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _11.QueryConfigRequest): Promise<_11.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _11.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryConfigRequest;
                fromJSON(_: any): _11.QueryConfigRequest;
                toJSON(_: _11.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_11.QueryConfigRequest>): _11.QueryConfigRequest;
                fromAmino(_: _11.QueryConfigRequestAmino): _11.QueryConfigRequest;
                toAmino(_: _11.QueryConfigRequest): _11.QueryConfigRequestAmino;
                fromAminoMsg(object: _11.QueryConfigRequestAminoMsg): _11.QueryConfigRequest;
                toAminoMsg(message: _11.QueryConfigRequest): _11.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _11.QueryConfigRequestProtoMsg): _11.QueryConfigRequest;
                toProto(message: _11.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _11.QueryConfigRequest): _11.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _11.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryConfigResponse;
                fromJSON(object: any): _11.QueryConfigResponse;
                toJSON(message: _11.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_11.QueryConfigResponse>): _11.QueryConfigResponse;
                fromAmino(object: _11.QueryConfigResponseAmino): _11.QueryConfigResponse;
                toAmino(message: _11.QueryConfigResponse): _11.QueryConfigResponseAmino;
                fromAminoMsg(object: _11.QueryConfigResponseAminoMsg): _11.QueryConfigResponse;
                toAminoMsg(message: _11.QueryConfigResponse): _11.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _11.QueryConfigResponseProtoMsg): _11.QueryConfigResponse;
                toProto(message: _11.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _11.QueryConfigResponse): _11.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _10.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.ModuleDescriptor;
                fromJSON(object: any): _10.ModuleDescriptor;
                toJSON(message: _10.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_10.ModuleDescriptor>): _10.ModuleDescriptor;
                fromAmino(object: _10.ModuleDescriptorAmino): _10.ModuleDescriptor;
                toAmino(message: _10.ModuleDescriptor): _10.ModuleDescriptorAmino;
                fromAminoMsg(object: _10.ModuleDescriptorAminoMsg): _10.ModuleDescriptor;
                toAminoMsg(message: _10.ModuleDescriptor): _10.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _10.ModuleDescriptorProtoMsg): _10.ModuleDescriptor;
                toProto(message: _10.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _10.ModuleDescriptor): _10.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _10.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.PackageReference;
                fromJSON(object: any): _10.PackageReference;
                toJSON(message: _10.PackageReference): unknown;
                fromPartial(object: Partial<_10.PackageReference>): _10.PackageReference;
                fromAmino(object: _10.PackageReferenceAmino): _10.PackageReference;
                toAmino(message: _10.PackageReference): _10.PackageReferenceAmino;
                fromAminoMsg(object: _10.PackageReferenceAminoMsg): _10.PackageReference;
                toAminoMsg(message: _10.PackageReference): _10.PackageReferenceAminoMsg;
                fromProtoMsg(message: _10.PackageReferenceProtoMsg): _10.PackageReference;
                toProto(message: _10.PackageReference): Uint8Array;
                toProtoMsg(message: _10.PackageReference): _10.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _10.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MigrateFromInfo;
                fromJSON(object: any): _10.MigrateFromInfo;
                toJSON(message: _10.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_10.MigrateFromInfo>): _10.MigrateFromInfo;
                fromAmino(object: _10.MigrateFromInfoAmino): _10.MigrateFromInfo;
                toAmino(message: _10.MigrateFromInfo): _10.MigrateFromInfoAmino;
                fromAminoMsg(object: _10.MigrateFromInfoAminoMsg): _10.MigrateFromInfo;
                toAminoMsg(message: _10.MigrateFromInfo): _10.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _10.MigrateFromInfoProtoMsg): _10.MigrateFromInfo;
                toProto(message: _10.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _10.MigrateFromInfo): _10.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _9.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Config;
                fromJSON(object: any): _9.Config;
                toJSON(message: _9.Config): unknown;
                fromPartial(object: Partial<_9.Config>): _9.Config;
                fromAmino(object: _9.ConfigAmino): _9.Config;
                toAmino(message: _9.Config): _9.ConfigAmino;
                fromAminoMsg(object: _9.ConfigAminoMsg): _9.Config;
                toAminoMsg(message: _9.Config): _9.ConfigAminoMsg;
                fromProtoMsg(message: _9.ConfigProtoMsg): _9.Config;
                toProto(message: _9.Config): Uint8Array;
                toProtoMsg(message: _9.Config): _9.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _9.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.ModuleConfig;
                fromJSON(object: any): _9.ModuleConfig;
                toJSON(message: _9.ModuleConfig): unknown;
                fromPartial(object: Partial<_9.ModuleConfig>): _9.ModuleConfig;
                fromAmino(object: _9.ModuleConfigAmino): _9.ModuleConfig;
                toAmino(message: _9.ModuleConfig): _9.ModuleConfigAmino;
                fromAminoMsg(object: _9.ModuleConfigAminoMsg): _9.ModuleConfig;
                toAminoMsg(message: _9.ModuleConfig): _9.ModuleConfigAminoMsg;
                fromProtoMsg(message: _9.ModuleConfigProtoMsg): _9.ModuleConfig;
                toProto(message: _9.ModuleConfig): Uint8Array;
                toProtoMsg(message: _9.ModuleConfig): _9.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _14.QueryAccountsRequest): Promise<_14.QueryAccountsResponse>;
                account(request: _14.QueryAccountRequest): Promise<_14.QueryAccountResponse>;
                params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                nextAccountNumber(request?: _14.QueryNextAccountNumberRequest): Promise<_14.QueryNextAccountNumberResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _14.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAccountsRequest;
                fromJSON(object: any): _14.QueryAccountsRequest;
                toJSON(message: _14.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_14.QueryAccountsRequest>): _14.QueryAccountsRequest;
                fromAmino(object: _14.QueryAccountsRequestAmino): _14.QueryAccountsRequest;
                toAmino(message: _14.QueryAccountsRequest): _14.QueryAccountsRequestAmino;
                fromAminoMsg(object: _14.QueryAccountsRequestAminoMsg): _14.QueryAccountsRequest;
                toAminoMsg(message: _14.QueryAccountsRequest): _14.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAccountsRequestProtoMsg): _14.QueryAccountsRequest;
                toProto(message: _14.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAccountsRequest): _14.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _14.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAccountsResponse;
                fromJSON(object: any): _14.QueryAccountsResponse;
                toJSON(message: _14.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_14.QueryAccountsResponse>): _14.QueryAccountsResponse;
                fromAmino(object: _14.QueryAccountsResponseAmino): _14.QueryAccountsResponse;
                toAmino(message: _14.QueryAccountsResponse): _14.QueryAccountsResponseAmino;
                fromAminoMsg(object: _14.QueryAccountsResponseAminoMsg): _14.QueryAccountsResponse;
                toAminoMsg(message: _14.QueryAccountsResponse): _14.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAccountsResponseProtoMsg): _14.QueryAccountsResponse;
                toProto(message: _14.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAccountsResponse): _14.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _14.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAccountRequest;
                fromJSON(object: any): _14.QueryAccountRequest;
                toJSON(message: _14.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_14.QueryAccountRequest>): _14.QueryAccountRequest;
                fromAmino(object: _14.QueryAccountRequestAmino): _14.QueryAccountRequest;
                toAmino(message: _14.QueryAccountRequest): _14.QueryAccountRequestAmino;
                fromAminoMsg(object: _14.QueryAccountRequestAminoMsg): _14.QueryAccountRequest;
                toAminoMsg(message: _14.QueryAccountRequest): _14.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAccountRequestProtoMsg): _14.QueryAccountRequest;
                toProto(message: _14.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAccountRequest): _14.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _14.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAccountResponse;
                fromJSON(object: any): _14.QueryAccountResponse;
                toJSON(message: _14.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_14.QueryAccountResponse>): _14.QueryAccountResponse;
                fromAmino(object: _14.QueryAccountResponseAmino): _14.QueryAccountResponse;
                toAmino(message: _14.QueryAccountResponse): _14.QueryAccountResponseAmino;
                fromAminoMsg(object: _14.QueryAccountResponseAminoMsg): _14.QueryAccountResponse;
                toAminoMsg(message: _14.QueryAccountResponse): _14.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAccountResponseProtoMsg): _14.QueryAccountResponse;
                toProto(message: _14.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAccountResponse): _14.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _14.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryParamsRequest;
                fromJSON(_: any): _14.QueryParamsRequest;
                toJSON(_: _14.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
                fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
                toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
                fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
                toAminoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
                toProto(message: _14.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _14.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryParamsResponse;
                fromJSON(object: any): _14.QueryParamsResponse;
                toJSON(message: _14.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
                fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
                toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
                fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
                toAminoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
                toProto(message: _14.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
            };
            QueryNextAccountNumberRequest: {
                typeUrl: string;
                encode(_: _14.QueryNextAccountNumberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryNextAccountNumberRequest;
                fromJSON(_: any): _14.QueryNextAccountNumberRequest;
                toJSON(_: _14.QueryNextAccountNumberRequest): unknown;
                fromPartial(_: Partial<_14.QueryNextAccountNumberRequest>): _14.QueryNextAccountNumberRequest;
                fromAmino(_: _14.QueryNextAccountNumberRequestAmino): _14.QueryNextAccountNumberRequest;
                toAmino(_: _14.QueryNextAccountNumberRequest): _14.QueryNextAccountNumberRequestAmino;
                fromAminoMsg(object: _14.QueryNextAccountNumberRequestAminoMsg): _14.QueryNextAccountNumberRequest;
                toAminoMsg(message: _14.QueryNextAccountNumberRequest): _14.QueryNextAccountNumberRequestAminoMsg;
                fromProtoMsg(message: _14.QueryNextAccountNumberRequestProtoMsg): _14.QueryNextAccountNumberRequest;
                toProto(message: _14.QueryNextAccountNumberRequest): Uint8Array;
                toProtoMsg(message: _14.QueryNextAccountNumberRequest): _14.QueryNextAccountNumberRequestProtoMsg;
            };
            QueryNextAccountNumberResponse: {
                typeUrl: string;
                encode(message: _14.QueryNextAccountNumberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryNextAccountNumberResponse;
                fromJSON(object: any): _14.QueryNextAccountNumberResponse;
                toJSON(message: _14.QueryNextAccountNumberResponse): unknown;
                fromPartial(object: Partial<_14.QueryNextAccountNumberResponse>): _14.QueryNextAccountNumberResponse;
                fromAmino(object: _14.QueryNextAccountNumberResponseAmino): _14.QueryNextAccountNumberResponse;
                toAmino(message: _14.QueryNextAccountNumberResponse): _14.QueryNextAccountNumberResponseAmino;
                fromAminoMsg(object: _14.QueryNextAccountNumberResponseAminoMsg): _14.QueryNextAccountNumberResponse;
                toAminoMsg(message: _14.QueryNextAccountNumberResponse): _14.QueryNextAccountNumberResponseAminoMsg;
                fromProtoMsg(message: _14.QueryNextAccountNumberResponseProtoMsg): _14.QueryNextAccountNumberResponse;
                toProto(message: _14.QueryNextAccountNumberResponse): Uint8Array;
                toProtoMsg(message: _14.QueryNextAccountNumberResponse): _14.QueryNextAccountNumberResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GenesisState;
                fromJSON(object: any): _13.GenesisState;
                toJSON(message: _13.GenesisState): unknown;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                toAminoMsg(message: _13.GenesisState): _13.GenesisStateAminoMsg;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _12.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.BaseAccount;
                fromJSON(object: any): _12.BaseAccount;
                toJSON(message: _12.BaseAccount): unknown;
                fromPartial(object: Partial<_12.BaseAccount>): _12.BaseAccount;
                fromAmino(object: _12.BaseAccountAmino): _12.BaseAccount;
                toAmino(message: _12.BaseAccount): _12.BaseAccountAmino;
                fromAminoMsg(object: _12.BaseAccountAminoMsg): _12.BaseAccount;
                toAminoMsg(message: _12.BaseAccount): _12.BaseAccountAminoMsg;
                fromProtoMsg(message: _12.BaseAccountProtoMsg): _12.BaseAccount;
                toProto(message: _12.BaseAccount): Uint8Array;
                toProtoMsg(message: _12.BaseAccount): _12.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _12.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ModuleAccount;
                fromJSON(object: any): _12.ModuleAccount;
                toJSON(message: _12.ModuleAccount): unknown;
                fromPartial(object: Partial<_12.ModuleAccount>): _12.ModuleAccount;
                fromAmino(object: _12.ModuleAccountAmino): _12.ModuleAccount;
                toAmino(message: _12.ModuleAccount): _12.ModuleAccountAmino;
                fromAminoMsg(object: _12.ModuleAccountAminoMsg): _12.ModuleAccount;
                toAminoMsg(message: _12.ModuleAccount): _12.ModuleAccountAminoMsg;
                fromProtoMsg(message: _12.ModuleAccountProtoMsg): _12.ModuleAccount;
                toProto(message: _12.ModuleAccount): Uint8Array;
                toProtoMsg(message: _12.ModuleAccount): _12.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _12.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Params;
                fromJSON(object: any): _12.Params;
                toJSON(message: _12.Params): unknown;
                fromPartial(object: Partial<_12.Params>): _12.Params;
                fromAmino(object: _12.ParamsAmino): _12.Params;
                toAmino(message: _12.Params): _12.ParamsAmino;
                fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
                toAminoMsg(message: _12.Params): _12.ParamsAminoMsg;
                fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
                toProto(message: _12.Params): Uint8Array;
                toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _18.QueryGrantsRequest): Promise<_18.QueryGrantsResponse>;
                granterGrants(request: _18.QueryGranterGrantsRequest): Promise<_18.QueryGranterGrantsResponse>;
                granteeGrants(request: _18.QueryGranteeGrantsRequest): Promise<_18.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _19.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _19.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _19.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _19.MsgGrant): {
                        typeUrl: string;
                        value: _19.MsgGrant;
                    };
                    exec(value: _19.MsgExec): {
                        typeUrl: string;
                        value: _19.MsgExec;
                    };
                    revoke(value: _19.MsgRevoke): {
                        typeUrl: string;
                        value: _19.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _19.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _19.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _19.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _19.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _19.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _19.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _19.MsgGrant): {
                        typeUrl: string;
                        value: _19.MsgGrant;
                    };
                    exec(value: _19.MsgExec): {
                        typeUrl: string;
                        value: _19.MsgExec;
                    };
                    revoke(value: _19.MsgRevoke): {
                        typeUrl: string;
                        value: _19.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _19.MsgGrant) => _19.MsgGrantAmino;
                    fromAmino: (object: _19.MsgGrantAmino) => _19.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _19.MsgExec) => _19.MsgExecAmino;
                    fromAmino: (object: _19.MsgExecAmino) => _19.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _19.MsgRevoke) => _19.MsgRevokeAmino;
                    fromAmino: (object: _19.MsgRevokeAmino) => _19.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _19.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgGrant;
                fromJSON(object: any): _19.MsgGrant;
                toJSON(message: _19.MsgGrant): unknown;
                fromPartial(object: Partial<_19.MsgGrant>): _19.MsgGrant;
                fromAmino(object: _19.MsgGrantAmino): _19.MsgGrant;
                toAmino(message: _19.MsgGrant): _19.MsgGrantAmino;
                fromAminoMsg(object: _19.MsgGrantAminoMsg): _19.MsgGrant;
                toAminoMsg(message: _19.MsgGrant): _19.MsgGrantAminoMsg;
                fromProtoMsg(message: _19.MsgGrantProtoMsg): _19.MsgGrant;
                toProto(message: _19.MsgGrant): Uint8Array;
                toProtoMsg(message: _19.MsgGrant): _19.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _19.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgExecResponse;
                fromJSON(object: any): _19.MsgExecResponse;
                toJSON(message: _19.MsgExecResponse): unknown;
                fromPartial(object: Partial<_19.MsgExecResponse>): _19.MsgExecResponse;
                fromAmino(object: _19.MsgExecResponseAmino): _19.MsgExecResponse;
                toAmino(message: _19.MsgExecResponse): _19.MsgExecResponseAmino;
                fromAminoMsg(object: _19.MsgExecResponseAminoMsg): _19.MsgExecResponse;
                toAminoMsg(message: _19.MsgExecResponse): _19.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _19.MsgExecResponseProtoMsg): _19.MsgExecResponse;
                toProto(message: _19.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _19.MsgExecResponse): _19.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _19.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgExec;
                fromJSON(object: any): _19.MsgExec;
                toJSON(message: _19.MsgExec): unknown;
                fromPartial(object: Partial<_19.MsgExec>): _19.MsgExec;
                fromAmino(object: _19.MsgExecAmino): _19.MsgExec;
                toAmino(message: _19.MsgExec): _19.MsgExecAmino;
                fromAminoMsg(object: _19.MsgExecAminoMsg): _19.MsgExec;
                toAminoMsg(message: _19.MsgExec): _19.MsgExecAminoMsg;
                fromProtoMsg(message: _19.MsgExecProtoMsg): _19.MsgExec;
                toProto(message: _19.MsgExec): Uint8Array;
                toProtoMsg(message: _19.MsgExec): _19.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _19.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgGrantResponse;
                fromJSON(_: any): _19.MsgGrantResponse;
                toJSON(_: _19.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_19.MsgGrantResponse>): _19.MsgGrantResponse;
                fromAmino(_: _19.MsgGrantResponseAmino): _19.MsgGrantResponse;
                toAmino(_: _19.MsgGrantResponse): _19.MsgGrantResponseAmino;
                fromAminoMsg(object: _19.MsgGrantResponseAminoMsg): _19.MsgGrantResponse;
                toAminoMsg(message: _19.MsgGrantResponse): _19.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _19.MsgGrantResponseProtoMsg): _19.MsgGrantResponse;
                toProto(message: _19.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _19.MsgGrantResponse): _19.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _19.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgRevoke;
                fromJSON(object: any): _19.MsgRevoke;
                toJSON(message: _19.MsgRevoke): unknown;
                fromPartial(object: Partial<_19.MsgRevoke>): _19.MsgRevoke;
                fromAmino(object: _19.MsgRevokeAmino): _19.MsgRevoke;
                toAmino(message: _19.MsgRevoke): _19.MsgRevokeAmino;
                fromAminoMsg(object: _19.MsgRevokeAminoMsg): _19.MsgRevoke;
                toAminoMsg(message: _19.MsgRevoke): _19.MsgRevokeAminoMsg;
                fromProtoMsg(message: _19.MsgRevokeProtoMsg): _19.MsgRevoke;
                toProto(message: _19.MsgRevoke): Uint8Array;
                toProtoMsg(message: _19.MsgRevoke): _19.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _19.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgRevokeResponse;
                fromJSON(_: any): _19.MsgRevokeResponse;
                toJSON(_: _19.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_19.MsgRevokeResponse>): _19.MsgRevokeResponse;
                fromAmino(_: _19.MsgRevokeResponseAmino): _19.MsgRevokeResponse;
                toAmino(_: _19.MsgRevokeResponse): _19.MsgRevokeResponseAmino;
                fromAminoMsg(object: _19.MsgRevokeResponseAminoMsg): _19.MsgRevokeResponse;
                toAminoMsg(message: _19.MsgRevokeResponse): _19.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _19.MsgRevokeResponseProtoMsg): _19.MsgRevokeResponse;
                toProto(message: _19.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _19.MsgRevokeResponse): _19.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _18.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryGrantsRequest;
                fromJSON(object: any): _18.QueryGrantsRequest;
                toJSON(message: _18.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_18.QueryGrantsRequest>): _18.QueryGrantsRequest;
                fromAmino(object: _18.QueryGrantsRequestAmino): _18.QueryGrantsRequest;
                toAmino(message: _18.QueryGrantsRequest): _18.QueryGrantsRequestAmino;
                fromAminoMsg(object: _18.QueryGrantsRequestAminoMsg): _18.QueryGrantsRequest;
                toAminoMsg(message: _18.QueryGrantsRequest): _18.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _18.QueryGrantsRequestProtoMsg): _18.QueryGrantsRequest;
                toProto(message: _18.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryGrantsRequest): _18.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _18.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryGrantsResponse;
                fromJSON(object: any): _18.QueryGrantsResponse;
                toJSON(message: _18.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_18.QueryGrantsResponse>): _18.QueryGrantsResponse;
                fromAmino(object: _18.QueryGrantsResponseAmino): _18.QueryGrantsResponse;
                toAmino(message: _18.QueryGrantsResponse): _18.QueryGrantsResponseAmino;
                fromAminoMsg(object: _18.QueryGrantsResponseAminoMsg): _18.QueryGrantsResponse;
                toAminoMsg(message: _18.QueryGrantsResponse): _18.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _18.QueryGrantsResponseProtoMsg): _18.QueryGrantsResponse;
                toProto(message: _18.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryGrantsResponse): _18.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _18.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryGranterGrantsRequest;
                fromJSON(object: any): _18.QueryGranterGrantsRequest;
                toJSON(message: _18.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_18.QueryGranterGrantsRequest>): _18.QueryGranterGrantsRequest;
                fromAmino(object: _18.QueryGranterGrantsRequestAmino): _18.QueryGranterGrantsRequest;
                toAmino(message: _18.QueryGranterGrantsRequest): _18.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _18.QueryGranterGrantsRequestAminoMsg): _18.QueryGranterGrantsRequest;
                toAminoMsg(message: _18.QueryGranterGrantsRequest): _18.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _18.QueryGranterGrantsRequestProtoMsg): _18.QueryGranterGrantsRequest;
                toProto(message: _18.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryGranterGrantsRequest): _18.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _18.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryGranterGrantsResponse;
                fromJSON(object: any): _18.QueryGranterGrantsResponse;
                toJSON(message: _18.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_18.QueryGranterGrantsResponse>): _18.QueryGranterGrantsResponse;
                fromAmino(object: _18.QueryGranterGrantsResponseAmino): _18.QueryGranterGrantsResponse;
                toAmino(message: _18.QueryGranterGrantsResponse): _18.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _18.QueryGranterGrantsResponseAminoMsg): _18.QueryGranterGrantsResponse;
                toAminoMsg(message: _18.QueryGranterGrantsResponse): _18.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _18.QueryGranterGrantsResponseProtoMsg): _18.QueryGranterGrantsResponse;
                toProto(message: _18.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryGranterGrantsResponse): _18.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _18.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryGranteeGrantsRequest;
                fromJSON(object: any): _18.QueryGranteeGrantsRequest;
                toJSON(message: _18.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_18.QueryGranteeGrantsRequest>): _18.QueryGranteeGrantsRequest;
                fromAmino(object: _18.QueryGranteeGrantsRequestAmino): _18.QueryGranteeGrantsRequest;
                toAmino(message: _18.QueryGranteeGrantsRequest): _18.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _18.QueryGranteeGrantsRequestAminoMsg): _18.QueryGranteeGrantsRequest;
                toAminoMsg(message: _18.QueryGranteeGrantsRequest): _18.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _18.QueryGranteeGrantsRequestProtoMsg): _18.QueryGranteeGrantsRequest;
                toProto(message: _18.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryGranteeGrantsRequest): _18.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _18.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryGranteeGrantsResponse;
                fromJSON(object: any): _18.QueryGranteeGrantsResponse;
                toJSON(message: _18.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_18.QueryGranteeGrantsResponse>): _18.QueryGranteeGrantsResponse;
                fromAmino(object: _18.QueryGranteeGrantsResponseAmino): _18.QueryGranteeGrantsResponse;
                toAmino(message: _18.QueryGranteeGrantsResponse): _18.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _18.QueryGranteeGrantsResponseAminoMsg): _18.QueryGranteeGrantsResponse;
                toAminoMsg(message: _18.QueryGranteeGrantsResponse): _18.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _18.QueryGranteeGrantsResponseProtoMsg): _18.QueryGranteeGrantsResponse;
                toProto(message: _18.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryGranteeGrantsResponse): _18.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _17.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GenesisState;
                fromJSON(object: any): _17.GenesisState;
                toJSON(message: _17.GenesisState): unknown;
                fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
                fromAmino(object: _17.GenesisStateAmino): _17.GenesisState;
                toAmino(message: _17.GenesisState): _17.GenesisStateAmino;
                fromAminoMsg(object: _17.GenesisStateAminoMsg): _17.GenesisState;
                toAminoMsg(message: _17.GenesisState): _17.GenesisStateAminoMsg;
                fromProtoMsg(message: _17.GenesisStateProtoMsg): _17.GenesisState;
                toProto(message: _17.GenesisState): Uint8Array;
                toProtoMsg(message: _17.GenesisState): _17.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _16.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.EventGrant;
                fromJSON(object: any): _16.EventGrant;
                toJSON(message: _16.EventGrant): unknown;
                fromPartial(object: Partial<_16.EventGrant>): _16.EventGrant;
                fromAmino(object: _16.EventGrantAmino): _16.EventGrant;
                toAmino(message: _16.EventGrant): _16.EventGrantAmino;
                fromAminoMsg(object: _16.EventGrantAminoMsg): _16.EventGrant;
                toAminoMsg(message: _16.EventGrant): _16.EventGrantAminoMsg;
                fromProtoMsg(message: _16.EventGrantProtoMsg): _16.EventGrant;
                toProto(message: _16.EventGrant): Uint8Array;
                toProtoMsg(message: _16.EventGrant): _16.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _16.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.EventRevoke;
                fromJSON(object: any): _16.EventRevoke;
                toJSON(message: _16.EventRevoke): unknown;
                fromPartial(object: Partial<_16.EventRevoke>): _16.EventRevoke;
                fromAmino(object: _16.EventRevokeAmino): _16.EventRevoke;
                toAmino(message: _16.EventRevoke): _16.EventRevokeAmino;
                fromAminoMsg(object: _16.EventRevokeAminoMsg): _16.EventRevoke;
                toAminoMsg(message: _16.EventRevoke): _16.EventRevokeAminoMsg;
                fromProtoMsg(message: _16.EventRevokeProtoMsg): _16.EventRevoke;
                toProto(message: _16.EventRevoke): Uint8Array;
                toProtoMsg(message: _16.EventRevoke): _16.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _15.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenericAuthorization;
                fromJSON(object: any): _15.GenericAuthorization;
                toJSON(message: _15.GenericAuthorization): unknown;
                fromPartial(object: Partial<_15.GenericAuthorization>): _15.GenericAuthorization;
                fromAmino(object: _15.GenericAuthorizationAmino): _15.GenericAuthorization;
                toAmino(message: _15.GenericAuthorization): _15.GenericAuthorizationAmino;
                fromAminoMsg(object: _15.GenericAuthorizationAminoMsg): _15.GenericAuthorization;
                toAminoMsg(message: _15.GenericAuthorization): _15.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _15.GenericAuthorizationProtoMsg): _15.GenericAuthorization;
                toProto(message: _15.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _15.GenericAuthorization): _15.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _15.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Grant;
                fromJSON(object: any): _15.Grant;
                toJSON(message: _15.Grant): unknown;
                fromPartial(object: Partial<_15.Grant>): _15.Grant;
                fromAmino(object: _15.GrantAmino): _15.Grant;
                toAmino(message: _15.Grant): _15.GrantAmino;
                fromAminoMsg(object: _15.GrantAminoMsg): _15.Grant;
                toAminoMsg(message: _15.Grant): _15.GrantAminoMsg;
                fromProtoMsg(message: _15.GrantProtoMsg): _15.Grant;
                toProto(message: _15.Grant): Uint8Array;
                toProtoMsg(message: _15.Grant): _15.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _15.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GrantAuthorization;
                fromJSON(object: any): _15.GrantAuthorization;
                toJSON(message: _15.GrantAuthorization): unknown;
                fromPartial(object: Partial<_15.GrantAuthorization>): _15.GrantAuthorization;
                fromAmino(object: _15.GrantAuthorizationAmino): _15.GrantAuthorization;
                toAmino(message: _15.GrantAuthorization): _15.GrantAuthorizationAmino;
                fromAminoMsg(object: _15.GrantAuthorizationAminoMsg): _15.GrantAuthorization;
                toAminoMsg(message: _15.GrantAuthorization): _15.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _15.GrantAuthorizationProtoMsg): _15.GrantAuthorization;
                toProto(message: _15.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _15.GrantAuthorization): _15.GrantAuthorizationProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _23.QueryBalanceRequest): Promise<_23.QueryBalanceResponse>;
                allBalances(request: _23.QueryAllBalancesRequest): Promise<_23.QueryAllBalancesResponse>;
                spendableBalances(request: _23.QuerySpendableBalancesRequest): Promise<_23.QuerySpendableBalancesResponse>;
                totalSupply(request?: _23.QueryTotalSupplyRequest): Promise<_23.QueryTotalSupplyResponse>;
                supplyOf(request: _23.QuerySupplyOfRequest): Promise<_23.QuerySupplyOfResponse>;
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                denomMetadata(request: _23.QueryDenomMetadataRequest): Promise<_23.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _23.QueryDenomsMetadataRequest): Promise<_23.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: _24.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _24.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: _24.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _24.MsgSend) => _24.MsgSendAmino;
                    fromAmino: (object: _24.MsgSendAmino) => _24.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _24.MsgMultiSend) => _24.MsgMultiSendAmino;
                    fromAmino: (object: _24.MsgMultiSendAmino) => _24.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _24.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgSend;
                fromJSON(object: any): _24.MsgSend;
                toJSON(message: _24.MsgSend): unknown;
                fromPartial(object: Partial<_24.MsgSend>): _24.MsgSend;
                fromAmino(object: _24.MsgSendAmino): _24.MsgSend;
                toAmino(message: _24.MsgSend): _24.MsgSendAmino;
                fromAminoMsg(object: _24.MsgSendAminoMsg): _24.MsgSend;
                toAminoMsg(message: _24.MsgSend): _24.MsgSendAminoMsg;
                fromProtoMsg(message: _24.MsgSendProtoMsg): _24.MsgSend;
                toProto(message: _24.MsgSend): Uint8Array;
                toProtoMsg(message: _24.MsgSend): _24.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _24.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgSendResponse;
                fromJSON(_: any): _24.MsgSendResponse;
                toJSON(_: _24.MsgSendResponse): unknown;
                fromPartial(_: Partial<_24.MsgSendResponse>): _24.MsgSendResponse;
                fromAmino(_: _24.MsgSendResponseAmino): _24.MsgSendResponse;
                toAmino(_: _24.MsgSendResponse): _24.MsgSendResponseAmino;
                fromAminoMsg(object: _24.MsgSendResponseAminoMsg): _24.MsgSendResponse;
                toAminoMsg(message: _24.MsgSendResponse): _24.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _24.MsgSendResponseProtoMsg): _24.MsgSendResponse;
                toProto(message: _24.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _24.MsgSendResponse): _24.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _24.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgMultiSend;
                fromJSON(object: any): _24.MsgMultiSend;
                toJSON(message: _24.MsgMultiSend): unknown;
                fromPartial(object: Partial<_24.MsgMultiSend>): _24.MsgMultiSend;
                fromAmino(object: _24.MsgMultiSendAmino): _24.MsgMultiSend;
                toAmino(message: _24.MsgMultiSend): _24.MsgMultiSendAmino;
                fromAminoMsg(object: _24.MsgMultiSendAminoMsg): _24.MsgMultiSend;
                toAminoMsg(message: _24.MsgMultiSend): _24.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _24.MsgMultiSendProtoMsg): _24.MsgMultiSend;
                toProto(message: _24.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _24.MsgMultiSend): _24.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _24.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgMultiSendResponse;
                fromJSON(_: any): _24.MsgMultiSendResponse;
                toJSON(_: _24.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_24.MsgMultiSendResponse>): _24.MsgMultiSendResponse;
                fromAmino(_: _24.MsgMultiSendResponseAmino): _24.MsgMultiSendResponse;
                toAmino(_: _24.MsgMultiSendResponse): _24.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _24.MsgMultiSendResponseAminoMsg): _24.MsgMultiSendResponse;
                toAminoMsg(message: _24.MsgMultiSendResponse): _24.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _24.MsgMultiSendResponseProtoMsg): _24.MsgMultiSendResponse;
                toProto(message: _24.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _24.MsgMultiSendResponse): _24.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _23.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryBalanceRequest;
                fromJSON(object: any): _23.QueryBalanceRequest;
                toJSON(message: _23.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_23.QueryBalanceRequest>): _23.QueryBalanceRequest;
                fromAmino(object: _23.QueryBalanceRequestAmino): _23.QueryBalanceRequest;
                toAmino(message: _23.QueryBalanceRequest): _23.QueryBalanceRequestAmino;
                fromAminoMsg(object: _23.QueryBalanceRequestAminoMsg): _23.QueryBalanceRequest;
                toAminoMsg(message: _23.QueryBalanceRequest): _23.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _23.QueryBalanceRequestProtoMsg): _23.QueryBalanceRequest;
                toProto(message: _23.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBalanceRequest): _23.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _23.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryBalanceResponse;
                fromJSON(object: any): _23.QueryBalanceResponse;
                toJSON(message: _23.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_23.QueryBalanceResponse>): _23.QueryBalanceResponse;
                fromAmino(object: _23.QueryBalanceResponseAmino): _23.QueryBalanceResponse;
                toAmino(message: _23.QueryBalanceResponse): _23.QueryBalanceResponseAmino;
                fromAminoMsg(object: _23.QueryBalanceResponseAminoMsg): _23.QueryBalanceResponse;
                toAminoMsg(message: _23.QueryBalanceResponse): _23.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _23.QueryBalanceResponseProtoMsg): _23.QueryBalanceResponse;
                toProto(message: _23.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBalanceResponse): _23.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _23.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryAllBalancesRequest;
                fromJSON(object: any): _23.QueryAllBalancesRequest;
                toJSON(message: _23.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_23.QueryAllBalancesRequest>): _23.QueryAllBalancesRequest;
                fromAmino(object: _23.QueryAllBalancesRequestAmino): _23.QueryAllBalancesRequest;
                toAmino(message: _23.QueryAllBalancesRequest): _23.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _23.QueryAllBalancesRequestAminoMsg): _23.QueryAllBalancesRequest;
                toAminoMsg(message: _23.QueryAllBalancesRequest): _23.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _23.QueryAllBalancesRequestProtoMsg): _23.QueryAllBalancesRequest;
                toProto(message: _23.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAllBalancesRequest): _23.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _23.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryAllBalancesResponse;
                fromJSON(object: any): _23.QueryAllBalancesResponse;
                toJSON(message: _23.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_23.QueryAllBalancesResponse>): _23.QueryAllBalancesResponse;
                fromAmino(object: _23.QueryAllBalancesResponseAmino): _23.QueryAllBalancesResponse;
                toAmino(message: _23.QueryAllBalancesResponse): _23.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _23.QueryAllBalancesResponseAminoMsg): _23.QueryAllBalancesResponse;
                toAminoMsg(message: _23.QueryAllBalancesResponse): _23.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _23.QueryAllBalancesResponseProtoMsg): _23.QueryAllBalancesResponse;
                toProto(message: _23.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAllBalancesResponse): _23.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _23.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySpendableBalancesRequest;
                fromJSON(object: any): _23.QuerySpendableBalancesRequest;
                toJSON(message: _23.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_23.QuerySpendableBalancesRequest>): _23.QuerySpendableBalancesRequest;
                fromAmino(object: _23.QuerySpendableBalancesRequestAmino): _23.QuerySpendableBalancesRequest;
                toAmino(message: _23.QuerySpendableBalancesRequest): _23.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _23.QuerySpendableBalancesRequestAminoMsg): _23.QuerySpendableBalancesRequest;
                toAminoMsg(message: _23.QuerySpendableBalancesRequest): _23.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _23.QuerySpendableBalancesRequestProtoMsg): _23.QuerySpendableBalancesRequest;
                toProto(message: _23.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySpendableBalancesRequest): _23.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _23.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySpendableBalancesResponse;
                fromJSON(object: any): _23.QuerySpendableBalancesResponse;
                toJSON(message: _23.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_23.QuerySpendableBalancesResponse>): _23.QuerySpendableBalancesResponse;
                fromAmino(object: _23.QuerySpendableBalancesResponseAmino): _23.QuerySpendableBalancesResponse;
                toAmino(message: _23.QuerySpendableBalancesResponse): _23.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _23.QuerySpendableBalancesResponseAminoMsg): _23.QuerySpendableBalancesResponse;
                toAminoMsg(message: _23.QuerySpendableBalancesResponse): _23.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _23.QuerySpendableBalancesResponseProtoMsg): _23.QuerySpendableBalancesResponse;
                toProto(message: _23.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySpendableBalancesResponse): _23.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _23.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryTotalSupplyRequest;
                fromJSON(object: any): _23.QueryTotalSupplyRequest;
                toJSON(message: _23.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_23.QueryTotalSupplyRequest>): _23.QueryTotalSupplyRequest;
                fromAmino(object: _23.QueryTotalSupplyRequestAmino): _23.QueryTotalSupplyRequest;
                toAmino(message: _23.QueryTotalSupplyRequest): _23.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _23.QueryTotalSupplyRequestAminoMsg): _23.QueryTotalSupplyRequest;
                toAminoMsg(message: _23.QueryTotalSupplyRequest): _23.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _23.QueryTotalSupplyRequestProtoMsg): _23.QueryTotalSupplyRequest;
                toProto(message: _23.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _23.QueryTotalSupplyRequest): _23.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _23.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryTotalSupplyResponse;
                fromJSON(object: any): _23.QueryTotalSupplyResponse;
                toJSON(message: _23.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_23.QueryTotalSupplyResponse>): _23.QueryTotalSupplyResponse;
                fromAmino(object: _23.QueryTotalSupplyResponseAmino): _23.QueryTotalSupplyResponse;
                toAmino(message: _23.QueryTotalSupplyResponse): _23.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _23.QueryTotalSupplyResponseAminoMsg): _23.QueryTotalSupplyResponse;
                toAminoMsg(message: _23.QueryTotalSupplyResponse): _23.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _23.QueryTotalSupplyResponseProtoMsg): _23.QueryTotalSupplyResponse;
                toProto(message: _23.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _23.QueryTotalSupplyResponse): _23.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _23.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySupplyOfRequest;
                fromJSON(object: any): _23.QuerySupplyOfRequest;
                toJSON(message: _23.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_23.QuerySupplyOfRequest>): _23.QuerySupplyOfRequest;
                fromAmino(object: _23.QuerySupplyOfRequestAmino): _23.QuerySupplyOfRequest;
                toAmino(message: _23.QuerySupplyOfRequest): _23.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _23.QuerySupplyOfRequestAminoMsg): _23.QuerySupplyOfRequest;
                toAminoMsg(message: _23.QuerySupplyOfRequest): _23.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _23.QuerySupplyOfRequestProtoMsg): _23.QuerySupplyOfRequest;
                toProto(message: _23.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySupplyOfRequest): _23.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _23.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySupplyOfResponse;
                fromJSON(object: any): _23.QuerySupplyOfResponse;
                toJSON(message: _23.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_23.QuerySupplyOfResponse>): _23.QuerySupplyOfResponse;
                fromAmino(object: _23.QuerySupplyOfResponseAmino): _23.QuerySupplyOfResponse;
                toAmino(message: _23.QuerySupplyOfResponse): _23.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _23.QuerySupplyOfResponseAminoMsg): _23.QuerySupplyOfResponse;
                toAminoMsg(message: _23.QuerySupplyOfResponse): _23.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _23.QuerySupplyOfResponseProtoMsg): _23.QuerySupplyOfResponse;
                toProto(message: _23.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySupplyOfResponse): _23.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _23.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryParamsRequest;
                fromJSON(_: any): _23.QueryParamsRequest;
                toJSON(_: _23.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
                fromAmino(_: _23.QueryParamsRequestAmino): _23.QueryParamsRequest;
                toAmino(_: _23.QueryParamsRequest): _23.QueryParamsRequestAmino;
                fromAminoMsg(object: _23.QueryParamsRequestAminoMsg): _23.QueryParamsRequest;
                toAminoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryParamsRequestProtoMsg): _23.QueryParamsRequest;
                toProto(message: _23.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _23.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryParamsResponse;
                fromJSON(object: any): _23.QueryParamsResponse;
                toJSON(message: _23.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
                fromAmino(object: _23.QueryParamsResponseAmino): _23.QueryParamsResponse;
                toAmino(message: _23.QueryParamsResponse): _23.QueryParamsResponseAmino;
                fromAminoMsg(object: _23.QueryParamsResponseAminoMsg): _23.QueryParamsResponse;
                toAminoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryParamsResponseProtoMsg): _23.QueryParamsResponse;
                toProto(message: _23.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _23.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomsMetadataRequest;
                fromJSON(object: any): _23.QueryDenomsMetadataRequest;
                toJSON(message: _23.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_23.QueryDenomsMetadataRequest>): _23.QueryDenomsMetadataRequest;
                fromAmino(object: _23.QueryDenomsMetadataRequestAmino): _23.QueryDenomsMetadataRequest;
                toAmino(message: _23.QueryDenomsMetadataRequest): _23.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _23.QueryDenomsMetadataRequestAminoMsg): _23.QueryDenomsMetadataRequest;
                toAminoMsg(message: _23.QueryDenomsMetadataRequest): _23.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _23.QueryDenomsMetadataRequestProtoMsg): _23.QueryDenomsMetadataRequest;
                toProto(message: _23.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _23.QueryDenomsMetadataRequest): _23.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _23.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomsMetadataResponse;
                fromJSON(object: any): _23.QueryDenomsMetadataResponse;
                toJSON(message: _23.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_23.QueryDenomsMetadataResponse>): _23.QueryDenomsMetadataResponse;
                fromAmino(object: _23.QueryDenomsMetadataResponseAmino): _23.QueryDenomsMetadataResponse;
                toAmino(message: _23.QueryDenomsMetadataResponse): _23.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _23.QueryDenomsMetadataResponseAminoMsg): _23.QueryDenomsMetadataResponse;
                toAminoMsg(message: _23.QueryDenomsMetadataResponse): _23.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _23.QueryDenomsMetadataResponseProtoMsg): _23.QueryDenomsMetadataResponse;
                toProto(message: _23.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _23.QueryDenomsMetadataResponse): _23.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _23.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomMetadataRequest;
                fromJSON(object: any): _23.QueryDenomMetadataRequest;
                toJSON(message: _23.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_23.QueryDenomMetadataRequest>): _23.QueryDenomMetadataRequest;
                fromAmino(object: _23.QueryDenomMetadataRequestAmino): _23.QueryDenomMetadataRequest;
                toAmino(message: _23.QueryDenomMetadataRequest): _23.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _23.QueryDenomMetadataRequestAminoMsg): _23.QueryDenomMetadataRequest;
                toAminoMsg(message: _23.QueryDenomMetadataRequest): _23.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _23.QueryDenomMetadataRequestProtoMsg): _23.QueryDenomMetadataRequest;
                toProto(message: _23.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _23.QueryDenomMetadataRequest): _23.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _23.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomMetadataResponse;
                fromJSON(object: any): _23.QueryDenomMetadataResponse;
                toJSON(message: _23.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_23.QueryDenomMetadataResponse>): _23.QueryDenomMetadataResponse;
                fromAmino(object: _23.QueryDenomMetadataResponseAmino): _23.QueryDenomMetadataResponse;
                toAmino(message: _23.QueryDenomMetadataResponse): _23.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _23.QueryDenomMetadataResponseAminoMsg): _23.QueryDenomMetadataResponse;
                toAminoMsg(message: _23.QueryDenomMetadataResponse): _23.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _23.QueryDenomMetadataResponseProtoMsg): _23.QueryDenomMetadataResponse;
                toProto(message: _23.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _23.QueryDenomMetadataResponse): _23.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _22.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GenesisState;
                fromJSON(object: any): _22.GenesisState;
                toJSON(message: _22.GenesisState): unknown;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
                fromAmino(object: _22.GenesisStateAmino): _22.GenesisState;
                toAmino(message: _22.GenesisState): _22.GenesisStateAmino;
                fromAminoMsg(object: _22.GenesisStateAminoMsg): _22.GenesisState;
                toAminoMsg(message: _22.GenesisState): _22.GenesisStateAminoMsg;
                fromProtoMsg(message: _22.GenesisStateProtoMsg): _22.GenesisState;
                toProto(message: _22.GenesisState): Uint8Array;
                toProtoMsg(message: _22.GenesisState): _22.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _22.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Balance;
                fromJSON(object: any): _22.Balance;
                toJSON(message: _22.Balance): unknown;
                fromPartial(object: Partial<_22.Balance>): _22.Balance;
                fromAmino(object: _22.BalanceAmino): _22.Balance;
                toAmino(message: _22.Balance): _22.BalanceAmino;
                fromAminoMsg(object: _22.BalanceAminoMsg): _22.Balance;
                toAminoMsg(message: _22.Balance): _22.BalanceAminoMsg;
                fromProtoMsg(message: _22.BalanceProtoMsg): _22.Balance;
                toProto(message: _22.Balance): Uint8Array;
                toProtoMsg(message: _22.Balance): _22.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _21.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Params;
                fromJSON(object: any): _21.Params;
                toJSON(message: _21.Params): unknown;
                fromPartial(object: Partial<_21.Params>): _21.Params;
                fromAmino(object: _21.ParamsAmino): _21.Params;
                toAmino(message: _21.Params): _21.ParamsAmino;
                fromAminoMsg(object: _21.ParamsAminoMsg): _21.Params;
                toAminoMsg(message: _21.Params): _21.ParamsAminoMsg;
                fromProtoMsg(message: _21.ParamsProtoMsg): _21.Params;
                toProto(message: _21.Params): Uint8Array;
                toProtoMsg(message: _21.Params): _21.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _21.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.SendEnabled;
                fromJSON(object: any): _21.SendEnabled;
                toJSON(message: _21.SendEnabled): unknown;
                fromPartial(object: Partial<_21.SendEnabled>): _21.SendEnabled;
                fromAmino(object: _21.SendEnabledAmino): _21.SendEnabled;
                toAmino(message: _21.SendEnabled): _21.SendEnabledAmino;
                fromAminoMsg(object: _21.SendEnabledAminoMsg): _21.SendEnabled;
                toAminoMsg(message: _21.SendEnabled): _21.SendEnabledAminoMsg;
                fromProtoMsg(message: _21.SendEnabledProtoMsg): _21.SendEnabled;
                toProto(message: _21.SendEnabled): Uint8Array;
                toProtoMsg(message: _21.SendEnabled): _21.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _21.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Input;
                fromJSON(object: any): _21.Input;
                toJSON(message: _21.Input): unknown;
                fromPartial(object: Partial<_21.Input>): _21.Input;
                fromAmino(object: _21.InputAmino): _21.Input;
                toAmino(message: _21.Input): _21.InputAmino;
                fromAminoMsg(object: _21.InputAminoMsg): _21.Input;
                toAminoMsg(message: _21.Input): _21.InputAminoMsg;
                fromProtoMsg(message: _21.InputProtoMsg): _21.Input;
                toProto(message: _21.Input): Uint8Array;
                toProtoMsg(message: _21.Input): _21.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _21.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Output;
                fromJSON(object: any): _21.Output;
                toJSON(message: _21.Output): unknown;
                fromPartial(object: Partial<_21.Output>): _21.Output;
                fromAmino(object: _21.OutputAmino): _21.Output;
                toAmino(message: _21.Output): _21.OutputAmino;
                fromAminoMsg(object: _21.OutputAminoMsg): _21.Output;
                toAminoMsg(message: _21.Output): _21.OutputAminoMsg;
                fromProtoMsg(message: _21.OutputProtoMsg): _21.Output;
                toProto(message: _21.Output): Uint8Array;
                toProtoMsg(message: _21.Output): _21.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _21.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Supply;
                fromJSON(object: any): _21.Supply;
                toJSON(message: _21.Supply): unknown;
                fromPartial(object: Partial<_21.Supply>): _21.Supply;
                fromAmino(object: _21.SupplyAmino): _21.Supply;
                toAmino(message: _21.Supply): _21.SupplyAmino;
                fromAminoMsg(object: _21.SupplyAminoMsg): _21.Supply;
                toAminoMsg(message: _21.Supply): _21.SupplyAminoMsg;
                fromProtoMsg(message: _21.SupplyProtoMsg): _21.Supply;
                toProto(message: _21.Supply): Uint8Array;
                toProtoMsg(message: _21.Supply): _21.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _21.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.DenomUnit;
                fromJSON(object: any): _21.DenomUnit;
                toJSON(message: _21.DenomUnit): unknown;
                fromPartial(object: Partial<_21.DenomUnit>): _21.DenomUnit;
                fromAmino(object: _21.DenomUnitAmino): _21.DenomUnit;
                toAmino(message: _21.DenomUnit): _21.DenomUnitAmino;
                fromAminoMsg(object: _21.DenomUnitAminoMsg): _21.DenomUnit;
                toAminoMsg(message: _21.DenomUnit): _21.DenomUnitAminoMsg;
                fromProtoMsg(message: _21.DenomUnitProtoMsg): _21.DenomUnit;
                toProto(message: _21.DenomUnit): Uint8Array;
                toProtoMsg(message: _21.DenomUnit): _21.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _21.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Metadata;
                fromJSON(object: any): _21.Metadata;
                toJSON(message: _21.Metadata): unknown;
                fromPartial(object: Partial<_21.Metadata>): _21.Metadata;
                fromAmino(object: _21.MetadataAmino): _21.Metadata;
                toAmino(message: _21.Metadata): _21.MetadataAmino;
                fromAminoMsg(object: _21.MetadataAminoMsg): _21.Metadata;
                toAminoMsg(message: _21.Metadata): _21.MetadataAminoMsg;
                fromProtoMsg(message: _21.MetadataProtoMsg): _21.Metadata;
                toProto(message: _21.Metadata): Uint8Array;
                toProtoMsg(message: _21.Metadata): _21.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _20.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SendAuthorization;
                fromJSON(object: any): _20.SendAuthorization;
                toJSON(message: _20.SendAuthorization): unknown;
                fromPartial(object: Partial<_20.SendAuthorization>): _20.SendAuthorization;
                fromAmino(object: _20.SendAuthorizationAmino): _20.SendAuthorization;
                toAmino(message: _20.SendAuthorization): _20.SendAuthorizationAmino;
                fromAminoMsg(object: _20.SendAuthorizationAminoMsg): _20.SendAuthorization;
                toAminoMsg(message: _20.SendAuthorization): _20.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _20.SendAuthorizationProtoMsg): _20.SendAuthorization;
                toProto(message: _20.SendAuthorization): Uint8Array;
                toProtoMsg(message: _20.SendAuthorization): _20.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _25.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TxResponse;
                    fromJSON(object: any): _25.TxResponse;
                    toJSON(message: _25.TxResponse): unknown;
                    fromPartial(object: Partial<_25.TxResponse>): _25.TxResponse;
                    fromAmino(object: _25.TxResponseAmino): _25.TxResponse;
                    toAmino(message: _25.TxResponse): _25.TxResponseAmino;
                    fromAminoMsg(object: _25.TxResponseAminoMsg): _25.TxResponse;
                    toAminoMsg(message: _25.TxResponse): _25.TxResponseAminoMsg;
                    fromProtoMsg(message: _25.TxResponseProtoMsg): _25.TxResponse;
                    toProto(message: _25.TxResponse): Uint8Array;
                    toProtoMsg(message: _25.TxResponse): _25.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _25.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ABCIMessageLog;
                    fromJSON(object: any): _25.ABCIMessageLog;
                    toJSON(message: _25.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_25.ABCIMessageLog>): _25.ABCIMessageLog;
                    fromAmino(object: _25.ABCIMessageLogAmino): _25.ABCIMessageLog;
                    toAmino(message: _25.ABCIMessageLog): _25.ABCIMessageLogAmino;
                    fromAminoMsg(object: _25.ABCIMessageLogAminoMsg): _25.ABCIMessageLog;
                    toAminoMsg(message: _25.ABCIMessageLog): _25.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _25.ABCIMessageLogProtoMsg): _25.ABCIMessageLog;
                    toProto(message: _25.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _25.ABCIMessageLog): _25.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _25.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StringEvent;
                    fromJSON(object: any): _25.StringEvent;
                    toJSON(message: _25.StringEvent): unknown;
                    fromPartial(object: Partial<_25.StringEvent>): _25.StringEvent;
                    fromAmino(object: _25.StringEventAmino): _25.StringEvent;
                    toAmino(message: _25.StringEvent): _25.StringEventAmino;
                    fromAminoMsg(object: _25.StringEventAminoMsg): _25.StringEvent;
                    toAminoMsg(message: _25.StringEvent): _25.StringEventAminoMsg;
                    fromProtoMsg(message: _25.StringEventProtoMsg): _25.StringEvent;
                    toProto(message: _25.StringEvent): Uint8Array;
                    toProtoMsg(message: _25.StringEvent): _25.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _25.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Attribute;
                    fromJSON(object: any): _25.Attribute;
                    toJSON(message: _25.Attribute): unknown;
                    fromPartial(object: Partial<_25.Attribute>): _25.Attribute;
                    fromAmino(object: _25.AttributeAmino): _25.Attribute;
                    toAmino(message: _25.Attribute): _25.AttributeAmino;
                    fromAminoMsg(object: _25.AttributeAminoMsg): _25.Attribute;
                    toAminoMsg(message: _25.Attribute): _25.AttributeAminoMsg;
                    fromProtoMsg(message: _25.AttributeProtoMsg): _25.Attribute;
                    toProto(message: _25.Attribute): Uint8Array;
                    toProtoMsg(message: _25.Attribute): _25.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _25.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GasInfo;
                    fromJSON(object: any): _25.GasInfo;
                    toJSON(message: _25.GasInfo): unknown;
                    fromPartial(object: Partial<_25.GasInfo>): _25.GasInfo;
                    fromAmino(object: _25.GasInfoAmino): _25.GasInfo;
                    toAmino(message: _25.GasInfo): _25.GasInfoAmino;
                    fromAminoMsg(object: _25.GasInfoAminoMsg): _25.GasInfo;
                    toAminoMsg(message: _25.GasInfo): _25.GasInfoAminoMsg;
                    fromProtoMsg(message: _25.GasInfoProtoMsg): _25.GasInfo;
                    toProto(message: _25.GasInfo): Uint8Array;
                    toProtoMsg(message: _25.GasInfo): _25.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _25.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Result;
                    fromJSON(object: any): _25.Result;
                    toJSON(message: _25.Result): unknown;
                    fromPartial(object: Partial<_25.Result>): _25.Result;
                    fromAmino(object: _25.ResultAmino): _25.Result;
                    toAmino(message: _25.Result): _25.ResultAmino;
                    fromAminoMsg(object: _25.ResultAminoMsg): _25.Result;
                    toAminoMsg(message: _25.Result): _25.ResultAminoMsg;
                    fromProtoMsg(message: _25.ResultProtoMsg): _25.Result;
                    toProto(message: _25.Result): Uint8Array;
                    toProtoMsg(message: _25.Result): _25.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _25.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SimulationResponse;
                    fromJSON(object: any): _25.SimulationResponse;
                    toJSON(message: _25.SimulationResponse): unknown;
                    fromPartial(object: Partial<_25.SimulationResponse>): _25.SimulationResponse;
                    fromAmino(object: _25.SimulationResponseAmino): _25.SimulationResponse;
                    toAmino(message: _25.SimulationResponse): _25.SimulationResponseAmino;
                    fromAminoMsg(object: _25.SimulationResponseAminoMsg): _25.SimulationResponse;
                    toAminoMsg(message: _25.SimulationResponse): _25.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _25.SimulationResponseProtoMsg): _25.SimulationResponse;
                    toProto(message: _25.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _25.SimulationResponse): _25.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _25.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgData;
                    fromJSON(object: any): _25.MsgData;
                    toJSON(message: _25.MsgData): unknown;
                    fromPartial(object: Partial<_25.MsgData>): _25.MsgData;
                    fromAmino(object: _25.MsgDataAmino): _25.MsgData;
                    toAmino(message: _25.MsgData): _25.MsgDataAmino;
                    fromAminoMsg(object: _25.MsgDataAminoMsg): _25.MsgData;
                    toAminoMsg(message: _25.MsgData): _25.MsgDataAminoMsg;
                    fromProtoMsg(message: _25.MsgDataProtoMsg): _25.MsgData;
                    toProto(message: _25.MsgData): Uint8Array;
                    toProtoMsg(message: _25.MsgData): _25.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _25.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TxMsgData;
                    fromJSON(object: any): _25.TxMsgData;
                    toJSON(message: _25.TxMsgData): unknown;
                    fromPartial(object: Partial<_25.TxMsgData>): _25.TxMsgData;
                    fromAmino(object: _25.TxMsgDataAmino): _25.TxMsgData;
                    toAmino(message: _25.TxMsgData): _25.TxMsgDataAmino;
                    fromAminoMsg(object: _25.TxMsgDataAminoMsg): _25.TxMsgData;
                    toAminoMsg(message: _25.TxMsgData): _25.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _25.TxMsgDataProtoMsg): _25.TxMsgData;
                    toProto(message: _25.TxMsgData): Uint8Array;
                    toProtoMsg(message: _25.TxMsgData): _25.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _25.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SearchTxsResult;
                    fromJSON(object: any): _25.SearchTxsResult;
                    toJSON(message: _25.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_25.SearchTxsResult>): _25.SearchTxsResult;
                    fromAmino(object: _25.SearchTxsResultAmino): _25.SearchTxsResult;
                    toAmino(message: _25.SearchTxsResult): _25.SearchTxsResultAmino;
                    fromAminoMsg(object: _25.SearchTxsResultAminoMsg): _25.SearchTxsResult;
                    toAminoMsg(message: _25.SearchTxsResult): _25.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _25.SearchTxsResultProtoMsg): _25.SearchTxsResult;
                    toProto(message: _25.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _25.SearchTxsResult): _25.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _26.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Pairs;
                    fromJSON(object: any): _26.Pairs;
                    toJSON(message: _26.Pairs): unknown;
                    fromPartial(object: Partial<_26.Pairs>): _26.Pairs;
                    fromAmino(object: _26.PairsAmino): _26.Pairs;
                    toAmino(message: _26.Pairs): _26.PairsAmino;
                    fromAminoMsg(object: _26.PairsAminoMsg): _26.Pairs;
                    toAminoMsg(message: _26.Pairs): _26.PairsAminoMsg;
                    fromProtoMsg(message: _26.PairsProtoMsg): _26.Pairs;
                    toProto(message: _26.Pairs): Uint8Array;
                    toProtoMsg(message: _26.Pairs): _26.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _26.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Pair;
                    fromJSON(object: any): _26.Pair;
                    toJSON(message: _26.Pair): unknown;
                    fromPartial(object: Partial<_26.Pair>): _26.Pair;
                    fromAmino(object: _26.PairAmino): _26.Pair;
                    toAmino(message: _26.Pair): _26.PairAmino;
                    fromAminoMsg(object: _26.PairAminoMsg): _26.Pair;
                    toAminoMsg(message: _26.Pair): _26.PairAminoMsg;
                    fromProtoMsg(message: _26.PairProtoMsg): _26.Pair;
                    toProto(message: _26.Pair): Uint8Array;
                    toProtoMsg(message: _26.Pair): _26.PairProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _27.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PageRequest;
                    fromJSON(object: any): _27.PageRequest;
                    toJSON(message: _27.PageRequest): unknown;
                    fromPartial(object: Partial<_27.PageRequest>): _27.PageRequest;
                    fromAmino(object: _27.PageRequestAmino): _27.PageRequest;
                    toAmino(message: _27.PageRequest): _27.PageRequestAmino;
                    fromAminoMsg(object: _27.PageRequestAminoMsg): _27.PageRequest;
                    toAminoMsg(message: _27.PageRequest): _27.PageRequestAminoMsg;
                    fromProtoMsg(message: _27.PageRequestProtoMsg): _27.PageRequest;
                    toProto(message: _27.PageRequest): Uint8Array;
                    toProtoMsg(message: _27.PageRequest): _27.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _27.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PageResponse;
                    fromJSON(object: any): _27.PageResponse;
                    toJSON(message: _27.PageResponse): unknown;
                    fromPartial(object: Partial<_27.PageResponse>): _27.PageResponse;
                    fromAmino(object: _27.PageResponseAmino): _27.PageResponse;
                    toAmino(message: _27.PageResponse): _27.PageResponseAmino;
                    fromAminoMsg(object: _27.PageResponseAminoMsg): _27.PageResponse;
                    toAminoMsg(message: _27.PageResponse): _27.PageResponseAminoMsg;
                    fromProtoMsg(message: _27.PageResponseProtoMsg): _27.PageResponse;
                    toProto(message: _27.PageResponse): Uint8Array;
                    toProtoMsg(message: _27.PageResponse): _27.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _28.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ListAllInterfacesRequest;
                    fromJSON(_: any): _28.ListAllInterfacesRequest;
                    toJSON(_: _28.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_28.ListAllInterfacesRequest>): _28.ListAllInterfacesRequest;
                    fromAmino(_: _28.ListAllInterfacesRequestAmino): _28.ListAllInterfacesRequest;
                    toAmino(_: _28.ListAllInterfacesRequest): _28.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _28.ListAllInterfacesRequestAminoMsg): _28.ListAllInterfacesRequest;
                    toAminoMsg(message: _28.ListAllInterfacesRequest): _28.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _28.ListAllInterfacesRequestProtoMsg): _28.ListAllInterfacesRequest;
                    toProto(message: _28.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _28.ListAllInterfacesRequest): _28.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _28.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ListAllInterfacesResponse;
                    fromJSON(object: any): _28.ListAllInterfacesResponse;
                    toJSON(message: _28.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_28.ListAllInterfacesResponse>): _28.ListAllInterfacesResponse;
                    fromAmino(object: _28.ListAllInterfacesResponseAmino): _28.ListAllInterfacesResponse;
                    toAmino(message: _28.ListAllInterfacesResponse): _28.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _28.ListAllInterfacesResponseAminoMsg): _28.ListAllInterfacesResponse;
                    toAminoMsg(message: _28.ListAllInterfacesResponse): _28.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _28.ListAllInterfacesResponseProtoMsg): _28.ListAllInterfacesResponse;
                    toProto(message: _28.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _28.ListAllInterfacesResponse): _28.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _28.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ListImplementationsRequest;
                    fromJSON(object: any): _28.ListImplementationsRequest;
                    toJSON(message: _28.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_28.ListImplementationsRequest>): _28.ListImplementationsRequest;
                    fromAmino(object: _28.ListImplementationsRequestAmino): _28.ListImplementationsRequest;
                    toAmino(message: _28.ListImplementationsRequest): _28.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _28.ListImplementationsRequestAminoMsg): _28.ListImplementationsRequest;
                    toAminoMsg(message: _28.ListImplementationsRequest): _28.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _28.ListImplementationsRequestProtoMsg): _28.ListImplementationsRequest;
                    toProto(message: _28.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _28.ListImplementationsRequest): _28.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _28.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ListImplementationsResponse;
                    fromJSON(object: any): _28.ListImplementationsResponse;
                    toJSON(message: _28.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_28.ListImplementationsResponse>): _28.ListImplementationsResponse;
                    fromAmino(object: _28.ListImplementationsResponseAmino): _28.ListImplementationsResponse;
                    toAmino(message: _28.ListImplementationsResponse): _28.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _28.ListImplementationsResponseAminoMsg): _28.ListImplementationsResponse;
                    toAminoMsg(message: _28.ListImplementationsResponse): _28.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _28.ListImplementationsResponseProtoMsg): _28.ListImplementationsResponse;
                    toProto(message: _28.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _28.ListImplementationsResponse): _28.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _29.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.AppDescriptor;
                    fromJSON(object: any): _29.AppDescriptor;
                    toJSON(message: _29.AppDescriptor): unknown;
                    fromPartial(object: Partial<_29.AppDescriptor>): _29.AppDescriptor;
                    fromAmino(object: _29.AppDescriptorAmino): _29.AppDescriptor;
                    toAmino(message: _29.AppDescriptor): _29.AppDescriptorAmino;
                    fromAminoMsg(object: _29.AppDescriptorAminoMsg): _29.AppDescriptor;
                    toAminoMsg(message: _29.AppDescriptor): _29.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _29.AppDescriptorProtoMsg): _29.AppDescriptor;
                    toProto(message: _29.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _29.AppDescriptor): _29.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _29.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.TxDescriptor;
                    fromJSON(object: any): _29.TxDescriptor;
                    toJSON(message: _29.TxDescriptor): unknown;
                    fromPartial(object: Partial<_29.TxDescriptor>): _29.TxDescriptor;
                    fromAmino(object: _29.TxDescriptorAmino): _29.TxDescriptor;
                    toAmino(message: _29.TxDescriptor): _29.TxDescriptorAmino;
                    fromAminoMsg(object: _29.TxDescriptorAminoMsg): _29.TxDescriptor;
                    toAminoMsg(message: _29.TxDescriptor): _29.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _29.TxDescriptorProtoMsg): _29.TxDescriptor;
                    toProto(message: _29.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _29.TxDescriptor): _29.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _29.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.AuthnDescriptor;
                    fromJSON(object: any): _29.AuthnDescriptor;
                    toJSON(message: _29.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_29.AuthnDescriptor>): _29.AuthnDescriptor;
                    fromAmino(object: _29.AuthnDescriptorAmino): _29.AuthnDescriptor;
                    toAmino(message: _29.AuthnDescriptor): _29.AuthnDescriptorAmino;
                    fromAminoMsg(object: _29.AuthnDescriptorAminoMsg): _29.AuthnDescriptor;
                    toAminoMsg(message: _29.AuthnDescriptor): _29.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _29.AuthnDescriptorProtoMsg): _29.AuthnDescriptor;
                    toProto(message: _29.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _29.AuthnDescriptor): _29.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _29.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SigningModeDescriptor;
                    fromJSON(object: any): _29.SigningModeDescriptor;
                    toJSON(message: _29.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_29.SigningModeDescriptor>): _29.SigningModeDescriptor;
                    fromAmino(object: _29.SigningModeDescriptorAmino): _29.SigningModeDescriptor;
                    toAmino(message: _29.SigningModeDescriptor): _29.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _29.SigningModeDescriptorAminoMsg): _29.SigningModeDescriptor;
                    toAminoMsg(message: _29.SigningModeDescriptor): _29.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _29.SigningModeDescriptorProtoMsg): _29.SigningModeDescriptor;
                    toProto(message: _29.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _29.SigningModeDescriptor): _29.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _29.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ChainDescriptor;
                    fromJSON(object: any): _29.ChainDescriptor;
                    toJSON(message: _29.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_29.ChainDescriptor>): _29.ChainDescriptor;
                    fromAmino(object: _29.ChainDescriptorAmino): _29.ChainDescriptor;
                    toAmino(message: _29.ChainDescriptor): _29.ChainDescriptorAmino;
                    fromAminoMsg(object: _29.ChainDescriptorAminoMsg): _29.ChainDescriptor;
                    toAminoMsg(message: _29.ChainDescriptor): _29.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _29.ChainDescriptorProtoMsg): _29.ChainDescriptor;
                    toProto(message: _29.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _29.ChainDescriptor): _29.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _29.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.CodecDescriptor;
                    fromJSON(object: any): _29.CodecDescriptor;
                    toJSON(message: _29.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_29.CodecDescriptor>): _29.CodecDescriptor;
                    fromAmino(object: _29.CodecDescriptorAmino): _29.CodecDescriptor;
                    toAmino(message: _29.CodecDescriptor): _29.CodecDescriptorAmino;
                    fromAminoMsg(object: _29.CodecDescriptorAminoMsg): _29.CodecDescriptor;
                    toAminoMsg(message: _29.CodecDescriptor): _29.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _29.CodecDescriptorProtoMsg): _29.CodecDescriptor;
                    toProto(message: _29.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _29.CodecDescriptor): _29.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _29.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.InterfaceDescriptor;
                    fromJSON(object: any): _29.InterfaceDescriptor;
                    toJSON(message: _29.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_29.InterfaceDescriptor>): _29.InterfaceDescriptor;
                    fromAmino(object: _29.InterfaceDescriptorAmino): _29.InterfaceDescriptor;
                    toAmino(message: _29.InterfaceDescriptor): _29.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _29.InterfaceDescriptorAminoMsg): _29.InterfaceDescriptor;
                    toAminoMsg(message: _29.InterfaceDescriptor): _29.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _29.InterfaceDescriptorProtoMsg): _29.InterfaceDescriptor;
                    toProto(message: _29.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _29.InterfaceDescriptor): _29.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _29.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _29.InterfaceImplementerDescriptor;
                    toJSON(message: _29.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_29.InterfaceImplementerDescriptor>): _29.InterfaceImplementerDescriptor;
                    fromAmino(object: _29.InterfaceImplementerDescriptorAmino): _29.InterfaceImplementerDescriptor;
                    toAmino(message: _29.InterfaceImplementerDescriptor): _29.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _29.InterfaceImplementerDescriptorAminoMsg): _29.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _29.InterfaceImplementerDescriptor): _29.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _29.InterfaceImplementerDescriptorProtoMsg): _29.InterfaceImplementerDescriptor;
                    toProto(message: _29.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _29.InterfaceImplementerDescriptor): _29.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _29.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _29.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _29.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_29.InterfaceAcceptingMessageDescriptor>): _29.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _29.InterfaceAcceptingMessageDescriptorAmino): _29.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _29.InterfaceAcceptingMessageDescriptor): _29.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _29.InterfaceAcceptingMessageDescriptorAminoMsg): _29.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _29.InterfaceAcceptingMessageDescriptor): _29.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _29.InterfaceAcceptingMessageDescriptorProtoMsg): _29.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _29.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _29.InterfaceAcceptingMessageDescriptor): _29.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _29.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ConfigurationDescriptor;
                    fromJSON(object: any): _29.ConfigurationDescriptor;
                    toJSON(message: _29.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_29.ConfigurationDescriptor>): _29.ConfigurationDescriptor;
                    fromAmino(object: _29.ConfigurationDescriptorAmino): _29.ConfigurationDescriptor;
                    toAmino(message: _29.ConfigurationDescriptor): _29.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _29.ConfigurationDescriptorAminoMsg): _29.ConfigurationDescriptor;
                    toAminoMsg(message: _29.ConfigurationDescriptor): _29.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _29.ConfigurationDescriptorProtoMsg): _29.ConfigurationDescriptor;
                    toProto(message: _29.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _29.ConfigurationDescriptor): _29.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _29.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDescriptor;
                    fromJSON(object: any): _29.MsgDescriptor;
                    toJSON(message: _29.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_29.MsgDescriptor>): _29.MsgDescriptor;
                    fromAmino(object: _29.MsgDescriptorAmino): _29.MsgDescriptor;
                    toAmino(message: _29.MsgDescriptor): _29.MsgDescriptorAmino;
                    fromAminoMsg(object: _29.MsgDescriptorAminoMsg): _29.MsgDescriptor;
                    toAminoMsg(message: _29.MsgDescriptor): _29.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _29.MsgDescriptorProtoMsg): _29.MsgDescriptor;
                    toProto(message: _29.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _29.MsgDescriptor): _29.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _29.GetAuthnDescriptorRequest;
                    toJSON(_: _29.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetAuthnDescriptorRequest>): _29.GetAuthnDescriptorRequest;
                    fromAmino(_: _29.GetAuthnDescriptorRequestAmino): _29.GetAuthnDescriptorRequest;
                    toAmino(_: _29.GetAuthnDescriptorRequest): _29.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetAuthnDescriptorRequestAminoMsg): _29.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _29.GetAuthnDescriptorRequest): _29.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetAuthnDescriptorRequestProtoMsg): _29.GetAuthnDescriptorRequest;
                    toProto(message: _29.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetAuthnDescriptorRequest): _29.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _29.GetAuthnDescriptorResponse;
                    toJSON(message: _29.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetAuthnDescriptorResponse>): _29.GetAuthnDescriptorResponse;
                    fromAmino(object: _29.GetAuthnDescriptorResponseAmino): _29.GetAuthnDescriptorResponse;
                    toAmino(message: _29.GetAuthnDescriptorResponse): _29.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetAuthnDescriptorResponseAminoMsg): _29.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _29.GetAuthnDescriptorResponse): _29.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetAuthnDescriptorResponseProtoMsg): _29.GetAuthnDescriptorResponse;
                    toProto(message: _29.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetAuthnDescriptorResponse): _29.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetChainDescriptorRequest;
                    fromJSON(_: any): _29.GetChainDescriptorRequest;
                    toJSON(_: _29.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetChainDescriptorRequest>): _29.GetChainDescriptorRequest;
                    fromAmino(_: _29.GetChainDescriptorRequestAmino): _29.GetChainDescriptorRequest;
                    toAmino(_: _29.GetChainDescriptorRequest): _29.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetChainDescriptorRequestAminoMsg): _29.GetChainDescriptorRequest;
                    toAminoMsg(message: _29.GetChainDescriptorRequest): _29.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetChainDescriptorRequestProtoMsg): _29.GetChainDescriptorRequest;
                    toProto(message: _29.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetChainDescriptorRequest): _29.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetChainDescriptorResponse;
                    fromJSON(object: any): _29.GetChainDescriptorResponse;
                    toJSON(message: _29.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetChainDescriptorResponse>): _29.GetChainDescriptorResponse;
                    fromAmino(object: _29.GetChainDescriptorResponseAmino): _29.GetChainDescriptorResponse;
                    toAmino(message: _29.GetChainDescriptorResponse): _29.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetChainDescriptorResponseAminoMsg): _29.GetChainDescriptorResponse;
                    toAminoMsg(message: _29.GetChainDescriptorResponse): _29.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetChainDescriptorResponseProtoMsg): _29.GetChainDescriptorResponse;
                    toProto(message: _29.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetChainDescriptorResponse): _29.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetCodecDescriptorRequest;
                    fromJSON(_: any): _29.GetCodecDescriptorRequest;
                    toJSON(_: _29.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetCodecDescriptorRequest>): _29.GetCodecDescriptorRequest;
                    fromAmino(_: _29.GetCodecDescriptorRequestAmino): _29.GetCodecDescriptorRequest;
                    toAmino(_: _29.GetCodecDescriptorRequest): _29.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetCodecDescriptorRequestAminoMsg): _29.GetCodecDescriptorRequest;
                    toAminoMsg(message: _29.GetCodecDescriptorRequest): _29.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetCodecDescriptorRequestProtoMsg): _29.GetCodecDescriptorRequest;
                    toProto(message: _29.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetCodecDescriptorRequest): _29.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetCodecDescriptorResponse;
                    fromJSON(object: any): _29.GetCodecDescriptorResponse;
                    toJSON(message: _29.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetCodecDescriptorResponse>): _29.GetCodecDescriptorResponse;
                    fromAmino(object: _29.GetCodecDescriptorResponseAmino): _29.GetCodecDescriptorResponse;
                    toAmino(message: _29.GetCodecDescriptorResponse): _29.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetCodecDescriptorResponseAminoMsg): _29.GetCodecDescriptorResponse;
                    toAminoMsg(message: _29.GetCodecDescriptorResponse): _29.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetCodecDescriptorResponseProtoMsg): _29.GetCodecDescriptorResponse;
                    toProto(message: _29.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetCodecDescriptorResponse): _29.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _29.GetConfigurationDescriptorRequest;
                    toJSON(_: _29.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetConfigurationDescriptorRequest>): _29.GetConfigurationDescriptorRequest;
                    fromAmino(_: _29.GetConfigurationDescriptorRequestAmino): _29.GetConfigurationDescriptorRequest;
                    toAmino(_: _29.GetConfigurationDescriptorRequest): _29.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetConfigurationDescriptorRequestAminoMsg): _29.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _29.GetConfigurationDescriptorRequest): _29.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetConfigurationDescriptorRequestProtoMsg): _29.GetConfigurationDescriptorRequest;
                    toProto(message: _29.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetConfigurationDescriptorRequest): _29.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _29.GetConfigurationDescriptorResponse;
                    toJSON(message: _29.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetConfigurationDescriptorResponse>): _29.GetConfigurationDescriptorResponse;
                    fromAmino(object: _29.GetConfigurationDescriptorResponseAmino): _29.GetConfigurationDescriptorResponse;
                    toAmino(message: _29.GetConfigurationDescriptorResponse): _29.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetConfigurationDescriptorResponseAminoMsg): _29.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _29.GetConfigurationDescriptorResponse): _29.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetConfigurationDescriptorResponseProtoMsg): _29.GetConfigurationDescriptorResponse;
                    toProto(message: _29.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetConfigurationDescriptorResponse): _29.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _29.GetQueryServicesDescriptorRequest;
                    toJSON(_: _29.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetQueryServicesDescriptorRequest>): _29.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _29.GetQueryServicesDescriptorRequestAmino): _29.GetQueryServicesDescriptorRequest;
                    toAmino(_: _29.GetQueryServicesDescriptorRequest): _29.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetQueryServicesDescriptorRequestAminoMsg): _29.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _29.GetQueryServicesDescriptorRequest): _29.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetQueryServicesDescriptorRequestProtoMsg): _29.GetQueryServicesDescriptorRequest;
                    toProto(message: _29.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetQueryServicesDescriptorRequest): _29.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _29.GetQueryServicesDescriptorResponse;
                    toJSON(message: _29.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetQueryServicesDescriptorResponse>): _29.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _29.GetQueryServicesDescriptorResponseAmino): _29.GetQueryServicesDescriptorResponse;
                    toAmino(message: _29.GetQueryServicesDescriptorResponse): _29.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetQueryServicesDescriptorResponseAminoMsg): _29.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _29.GetQueryServicesDescriptorResponse): _29.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetQueryServicesDescriptorResponseProtoMsg): _29.GetQueryServicesDescriptorResponse;
                    toProto(message: _29.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetQueryServicesDescriptorResponse): _29.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetTxDescriptorRequest;
                    fromJSON(_: any): _29.GetTxDescriptorRequest;
                    toJSON(_: _29.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetTxDescriptorRequest>): _29.GetTxDescriptorRequest;
                    fromAmino(_: _29.GetTxDescriptorRequestAmino): _29.GetTxDescriptorRequest;
                    toAmino(_: _29.GetTxDescriptorRequest): _29.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetTxDescriptorRequestAminoMsg): _29.GetTxDescriptorRequest;
                    toAminoMsg(message: _29.GetTxDescriptorRequest): _29.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetTxDescriptorRequestProtoMsg): _29.GetTxDescriptorRequest;
                    toProto(message: _29.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetTxDescriptorRequest): _29.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetTxDescriptorResponse;
                    fromJSON(object: any): _29.GetTxDescriptorResponse;
                    toJSON(message: _29.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetTxDescriptorResponse>): _29.GetTxDescriptorResponse;
                    fromAmino(object: _29.GetTxDescriptorResponseAmino): _29.GetTxDescriptorResponse;
                    toAmino(message: _29.GetTxDescriptorResponse): _29.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetTxDescriptorResponseAminoMsg): _29.GetTxDescriptorResponse;
                    toAminoMsg(message: _29.GetTxDescriptorResponse): _29.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetTxDescriptorResponseProtoMsg): _29.GetTxDescriptorResponse;
                    toProto(message: _29.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetTxDescriptorResponse): _29.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _29.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryServicesDescriptor;
                    fromJSON(object: any): _29.QueryServicesDescriptor;
                    toJSON(message: _29.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_29.QueryServicesDescriptor>): _29.QueryServicesDescriptor;
                    fromAmino(object: _29.QueryServicesDescriptorAmino): _29.QueryServicesDescriptor;
                    toAmino(message: _29.QueryServicesDescriptor): _29.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _29.QueryServicesDescriptorAminoMsg): _29.QueryServicesDescriptor;
                    toAminoMsg(message: _29.QueryServicesDescriptor): _29.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _29.QueryServicesDescriptorProtoMsg): _29.QueryServicesDescriptor;
                    toProto(message: _29.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _29.QueryServicesDescriptor): _29.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _29.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryServiceDescriptor;
                    fromJSON(object: any): _29.QueryServiceDescriptor;
                    toJSON(message: _29.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_29.QueryServiceDescriptor>): _29.QueryServiceDescriptor;
                    fromAmino(object: _29.QueryServiceDescriptorAmino): _29.QueryServiceDescriptor;
                    toAmino(message: _29.QueryServiceDescriptor): _29.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _29.QueryServiceDescriptorAminoMsg): _29.QueryServiceDescriptor;
                    toAminoMsg(message: _29.QueryServiceDescriptor): _29.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _29.QueryServiceDescriptorProtoMsg): _29.QueryServiceDescriptor;
                    toProto(message: _29.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _29.QueryServiceDescriptor): _29.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _29.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryMethodDescriptor;
                    fromJSON(object: any): _29.QueryMethodDescriptor;
                    toJSON(message: _29.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_29.QueryMethodDescriptor>): _29.QueryMethodDescriptor;
                    fromAmino(object: _29.QueryMethodDescriptorAmino): _29.QueryMethodDescriptor;
                    toAmino(message: _29.QueryMethodDescriptor): _29.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _29.QueryMethodDescriptorAminoMsg): _29.QueryMethodDescriptor;
                    toAminoMsg(message: _29.QueryMethodDescriptor): _29.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _29.QueryMethodDescriptorProtoMsg): _29.QueryMethodDescriptor;
                    toProto(message: _29.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _29.QueryMethodDescriptor): _29.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _30.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Snapshot;
                    fromJSON(object: any): _30.Snapshot;
                    toJSON(message: _30.Snapshot): unknown;
                    fromPartial(object: Partial<_30.Snapshot>): _30.Snapshot;
                    fromAmino(object: _30.SnapshotAmino): _30.Snapshot;
                    toAmino(message: _30.Snapshot): _30.SnapshotAmino;
                    fromAminoMsg(object: _30.SnapshotAminoMsg): _30.Snapshot;
                    toAminoMsg(message: _30.Snapshot): _30.SnapshotAminoMsg;
                    fromProtoMsg(message: _30.SnapshotProtoMsg): _30.Snapshot;
                    toProto(message: _30.Snapshot): Uint8Array;
                    toProtoMsg(message: _30.Snapshot): _30.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _30.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Metadata;
                    fromJSON(object: any): _30.Metadata;
                    toJSON(message: _30.Metadata): unknown;
                    fromPartial(object: Partial<_30.Metadata>): _30.Metadata;
                    fromAmino(object: _30.MetadataAmino): _30.Metadata;
                    toAmino(message: _30.Metadata): _30.MetadataAmino;
                    fromAminoMsg(object: _30.MetadataAminoMsg): _30.Metadata;
                    toAminoMsg(message: _30.Metadata): _30.MetadataAminoMsg;
                    fromProtoMsg(message: _30.MetadataProtoMsg): _30.Metadata;
                    toProto(message: _30.Metadata): Uint8Array;
                    toProtoMsg(message: _30.Metadata): _30.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.SnapshotItem;
                    fromJSON(object: any): _30.SnapshotItem;
                    toJSON(message: _30.SnapshotItem): unknown;
                    fromPartial(object: Partial<_30.SnapshotItem>): _30.SnapshotItem;
                    fromAmino(object: _30.SnapshotItemAmino): _30.SnapshotItem;
                    toAmino(message: _30.SnapshotItem): _30.SnapshotItemAmino;
                    fromAminoMsg(object: _30.SnapshotItemAminoMsg): _30.SnapshotItem;
                    toAminoMsg(message: _30.SnapshotItem): _30.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotItemProtoMsg): _30.SnapshotItem;
                    toProto(message: _30.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotItem): _30.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.SnapshotStoreItem;
                    fromJSON(object: any): _30.SnapshotStoreItem;
                    toJSON(message: _30.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_30.SnapshotStoreItem>): _30.SnapshotStoreItem;
                    fromAmino(object: _30.SnapshotStoreItemAmino): _30.SnapshotStoreItem;
                    toAmino(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _30.SnapshotStoreItemAminoMsg): _30.SnapshotStoreItem;
                    toAminoMsg(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotStoreItemProtoMsg): _30.SnapshotStoreItem;
                    toProto(message: _30.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.SnapshotIAVLItem;
                    fromJSON(object: any): _30.SnapshotIAVLItem;
                    toJSON(message: _30.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_30.SnapshotIAVLItem>): _30.SnapshotIAVLItem;
                    fromAmino(object: _30.SnapshotIAVLItemAmino): _30.SnapshotIAVLItem;
                    toAmino(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _30.SnapshotIAVLItemAminoMsg): _30.SnapshotIAVLItem;
                    toAminoMsg(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotIAVLItemProtoMsg): _30.SnapshotIAVLItem;
                    toProto(message: _30.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _30.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.SnapshotExtensionMeta;
                    fromJSON(object: any): _30.SnapshotExtensionMeta;
                    toJSON(message: _30.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_30.SnapshotExtensionMeta>): _30.SnapshotExtensionMeta;
                    fromAmino(object: _30.SnapshotExtensionMetaAmino): _30.SnapshotExtensionMeta;
                    toAmino(message: _30.SnapshotExtensionMeta): _30.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _30.SnapshotExtensionMetaAminoMsg): _30.SnapshotExtensionMeta;
                    toAminoMsg(message: _30.SnapshotExtensionMeta): _30.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _30.SnapshotExtensionMetaProtoMsg): _30.SnapshotExtensionMeta;
                    toProto(message: _30.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _30.SnapshotExtensionMeta): _30.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _30.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.SnapshotExtensionPayload;
                    fromJSON(object: any): _30.SnapshotExtensionPayload;
                    toJSON(message: _30.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_30.SnapshotExtensionPayload>): _30.SnapshotExtensionPayload;
                    fromAmino(object: _30.SnapshotExtensionPayloadAmino): _30.SnapshotExtensionPayload;
                    toAmino(message: _30.SnapshotExtensionPayload): _30.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _30.SnapshotExtensionPayloadAminoMsg): _30.SnapshotExtensionPayload;
                    toAminoMsg(message: _30.SnapshotExtensionPayload): _30.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _30.SnapshotExtensionPayloadProtoMsg): _30.SnapshotExtensionPayload;
                    toProto(message: _30.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _30.SnapshotExtensionPayload): _30.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _32.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.StoreKVPair;
                    fromJSON(object: any): _32.StoreKVPair;
                    toJSON(message: _32.StoreKVPair): unknown;
                    fromPartial(object: Partial<_32.StoreKVPair>): _32.StoreKVPair;
                    fromAmino(object: _32.StoreKVPairAmino): _32.StoreKVPair;
                    toAmino(message: _32.StoreKVPair): _32.StoreKVPairAmino;
                    fromAminoMsg(object: _32.StoreKVPairAminoMsg): _32.StoreKVPair;
                    toAminoMsg(message: _32.StoreKVPair): _32.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _32.StoreKVPairProtoMsg): _32.StoreKVPair;
                    toProto(message: _32.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _32.StoreKVPair): _32.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _31.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.CommitInfo;
                    fromJSON(object: any): _31.CommitInfo;
                    toJSON(message: _31.CommitInfo): unknown;
                    fromPartial(object: Partial<_31.CommitInfo>): _31.CommitInfo;
                    fromAmino(object: _31.CommitInfoAmino): _31.CommitInfo;
                    toAmino(message: _31.CommitInfo): _31.CommitInfoAmino;
                    fromAminoMsg(object: _31.CommitInfoAminoMsg): _31.CommitInfo;
                    toAminoMsg(message: _31.CommitInfo): _31.CommitInfoAminoMsg;
                    fromProtoMsg(message: _31.CommitInfoProtoMsg): _31.CommitInfo;
                    toProto(message: _31.CommitInfo): Uint8Array;
                    toProtoMsg(message: _31.CommitInfo): _31.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _31.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.StoreInfo;
                    fromJSON(object: any): _31.StoreInfo;
                    toJSON(message: _31.StoreInfo): unknown;
                    fromPartial(object: Partial<_31.StoreInfo>): _31.StoreInfo;
                    fromAmino(object: _31.StoreInfoAmino): _31.StoreInfo;
                    toAmino(message: _31.StoreInfo): _31.StoreInfoAmino;
                    fromAminoMsg(object: _31.StoreInfoAminoMsg): _31.StoreInfo;
                    toAminoMsg(message: _31.StoreInfo): _31.StoreInfoAminoMsg;
                    fromProtoMsg(message: _31.StoreInfoProtoMsg): _31.StoreInfo;
                    toProto(message: _31.StoreInfo): Uint8Array;
                    toProtoMsg(message: _31.StoreInfo): _31.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _31.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.CommitID;
                    fromJSON(object: any): _31.CommitID;
                    toJSON(message: _31.CommitID): unknown;
                    fromPartial(object: Partial<_31.CommitID>): _31.CommitID;
                    fromAmino(object: _31.CommitIDAmino): _31.CommitID;
                    toAmino(message: _31.CommitID): _31.CommitIDAmino;
                    fromAminoMsg(object: _31.CommitIDAminoMsg): _31.CommitID;
                    toAminoMsg(message: _31.CommitID): _31.CommitIDAminoMsg;
                    fromProtoMsg(message: _31.CommitIDProtoMsg): _31.CommitID;
                    toProto(message: _31.CommitID): Uint8Array;
                    toProtoMsg(message: _31.CommitID): _31.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _279.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _33.GetNodeInfoRequest): Promise<_33.GetNodeInfoResponse>;
                    getSyncing(request?: _33.GetSyncingRequest): Promise<_33.GetSyncingResponse>;
                    getLatestBlock(request?: _33.GetLatestBlockRequest): Promise<_33.GetLatestBlockResponse>;
                    getBlockByHeight(request: _33.GetBlockByHeightRequest): Promise<_33.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _33.GetLatestValidatorSetRequest): Promise<_33.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _33.GetValidatorSetByHeightRequest): Promise<_33.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _260.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _33.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _33.GetValidatorSetByHeightRequest;
                    toJSON(message: _33.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_33.GetValidatorSetByHeightRequest>): _33.GetValidatorSetByHeightRequest;
                    fromAmino(object: _33.GetValidatorSetByHeightRequestAmino): _33.GetValidatorSetByHeightRequest;
                    toAmino(message: _33.GetValidatorSetByHeightRequest): _33.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _33.GetValidatorSetByHeightRequestAminoMsg): _33.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _33.GetValidatorSetByHeightRequest): _33.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _33.GetValidatorSetByHeightRequestProtoMsg): _33.GetValidatorSetByHeightRequest;
                    toProto(message: _33.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _33.GetValidatorSetByHeightRequest): _33.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _33.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _33.GetValidatorSetByHeightResponse;
                    toJSON(message: _33.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_33.GetValidatorSetByHeightResponse>): _33.GetValidatorSetByHeightResponse;
                    fromAmino(object: _33.GetValidatorSetByHeightResponseAmino): _33.GetValidatorSetByHeightResponse;
                    toAmino(message: _33.GetValidatorSetByHeightResponse): _33.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _33.GetValidatorSetByHeightResponseAminoMsg): _33.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _33.GetValidatorSetByHeightResponse): _33.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _33.GetValidatorSetByHeightResponseProtoMsg): _33.GetValidatorSetByHeightResponse;
                    toProto(message: _33.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _33.GetValidatorSetByHeightResponse): _33.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _33.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _33.GetLatestValidatorSetRequest;
                    toJSON(message: _33.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_33.GetLatestValidatorSetRequest>): _33.GetLatestValidatorSetRequest;
                    fromAmino(object: _33.GetLatestValidatorSetRequestAmino): _33.GetLatestValidatorSetRequest;
                    toAmino(message: _33.GetLatestValidatorSetRequest): _33.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _33.GetLatestValidatorSetRequestAminoMsg): _33.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _33.GetLatestValidatorSetRequest): _33.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _33.GetLatestValidatorSetRequestProtoMsg): _33.GetLatestValidatorSetRequest;
                    toProto(message: _33.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _33.GetLatestValidatorSetRequest): _33.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _33.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _33.GetLatestValidatorSetResponse;
                    toJSON(message: _33.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_33.GetLatestValidatorSetResponse>): _33.GetLatestValidatorSetResponse;
                    fromAmino(object: _33.GetLatestValidatorSetResponseAmino): _33.GetLatestValidatorSetResponse;
                    toAmino(message: _33.GetLatestValidatorSetResponse): _33.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _33.GetLatestValidatorSetResponseAminoMsg): _33.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _33.GetLatestValidatorSetResponse): _33.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _33.GetLatestValidatorSetResponseProtoMsg): _33.GetLatestValidatorSetResponse;
                    toProto(message: _33.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _33.GetLatestValidatorSetResponse): _33.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _33.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Validator;
                    fromJSON(object: any): _33.Validator;
                    toJSON(message: _33.Validator): unknown;
                    fromPartial(object: Partial<_33.Validator>): _33.Validator;
                    fromAmino(object: _33.ValidatorAmino): _33.Validator;
                    toAmino(message: _33.Validator): _33.ValidatorAmino;
                    fromAminoMsg(object: _33.ValidatorAminoMsg): _33.Validator;
                    toAminoMsg(message: _33.Validator): _33.ValidatorAminoMsg;
                    fromProtoMsg(message: _33.ValidatorProtoMsg): _33.Validator;
                    toProto(message: _33.Validator): Uint8Array;
                    toProtoMsg(message: _33.Validator): _33.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _33.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetBlockByHeightRequest;
                    fromJSON(object: any): _33.GetBlockByHeightRequest;
                    toJSON(message: _33.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_33.GetBlockByHeightRequest>): _33.GetBlockByHeightRequest;
                    fromAmino(object: _33.GetBlockByHeightRequestAmino): _33.GetBlockByHeightRequest;
                    toAmino(message: _33.GetBlockByHeightRequest): _33.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _33.GetBlockByHeightRequestAminoMsg): _33.GetBlockByHeightRequest;
                    toAminoMsg(message: _33.GetBlockByHeightRequest): _33.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _33.GetBlockByHeightRequestProtoMsg): _33.GetBlockByHeightRequest;
                    toProto(message: _33.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _33.GetBlockByHeightRequest): _33.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _33.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetBlockByHeightResponse;
                    fromJSON(object: any): _33.GetBlockByHeightResponse;
                    toJSON(message: _33.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_33.GetBlockByHeightResponse>): _33.GetBlockByHeightResponse;
                    fromAmino(object: _33.GetBlockByHeightResponseAmino): _33.GetBlockByHeightResponse;
                    toAmino(message: _33.GetBlockByHeightResponse): _33.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _33.GetBlockByHeightResponseAminoMsg): _33.GetBlockByHeightResponse;
                    toAminoMsg(message: _33.GetBlockByHeightResponse): _33.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _33.GetBlockByHeightResponseProtoMsg): _33.GetBlockByHeightResponse;
                    toProto(message: _33.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _33.GetBlockByHeightResponse): _33.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _33.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetLatestBlockRequest;
                    fromJSON(_: any): _33.GetLatestBlockRequest;
                    toJSON(_: _33.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_33.GetLatestBlockRequest>): _33.GetLatestBlockRequest;
                    fromAmino(_: _33.GetLatestBlockRequestAmino): _33.GetLatestBlockRequest;
                    toAmino(_: _33.GetLatestBlockRequest): _33.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _33.GetLatestBlockRequestAminoMsg): _33.GetLatestBlockRequest;
                    toAminoMsg(message: _33.GetLatestBlockRequest): _33.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _33.GetLatestBlockRequestProtoMsg): _33.GetLatestBlockRequest;
                    toProto(message: _33.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _33.GetLatestBlockRequest): _33.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _33.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetLatestBlockResponse;
                    fromJSON(object: any): _33.GetLatestBlockResponse;
                    toJSON(message: _33.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_33.GetLatestBlockResponse>): _33.GetLatestBlockResponse;
                    fromAmino(object: _33.GetLatestBlockResponseAmino): _33.GetLatestBlockResponse;
                    toAmino(message: _33.GetLatestBlockResponse): _33.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _33.GetLatestBlockResponseAminoMsg): _33.GetLatestBlockResponse;
                    toAminoMsg(message: _33.GetLatestBlockResponse): _33.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _33.GetLatestBlockResponseProtoMsg): _33.GetLatestBlockResponse;
                    toProto(message: _33.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _33.GetLatestBlockResponse): _33.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _33.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetSyncingRequest;
                    fromJSON(_: any): _33.GetSyncingRequest;
                    toJSON(_: _33.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_33.GetSyncingRequest>): _33.GetSyncingRequest;
                    fromAmino(_: _33.GetSyncingRequestAmino): _33.GetSyncingRequest;
                    toAmino(_: _33.GetSyncingRequest): _33.GetSyncingRequestAmino;
                    fromAminoMsg(object: _33.GetSyncingRequestAminoMsg): _33.GetSyncingRequest;
                    toAminoMsg(message: _33.GetSyncingRequest): _33.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _33.GetSyncingRequestProtoMsg): _33.GetSyncingRequest;
                    toProto(message: _33.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _33.GetSyncingRequest): _33.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _33.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetSyncingResponse;
                    fromJSON(object: any): _33.GetSyncingResponse;
                    toJSON(message: _33.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_33.GetSyncingResponse>): _33.GetSyncingResponse;
                    fromAmino(object: _33.GetSyncingResponseAmino): _33.GetSyncingResponse;
                    toAmino(message: _33.GetSyncingResponse): _33.GetSyncingResponseAmino;
                    fromAminoMsg(object: _33.GetSyncingResponseAminoMsg): _33.GetSyncingResponse;
                    toAminoMsg(message: _33.GetSyncingResponse): _33.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _33.GetSyncingResponseProtoMsg): _33.GetSyncingResponse;
                    toProto(message: _33.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _33.GetSyncingResponse): _33.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _33.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetNodeInfoRequest;
                    fromJSON(_: any): _33.GetNodeInfoRequest;
                    toJSON(_: _33.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_33.GetNodeInfoRequest>): _33.GetNodeInfoRequest;
                    fromAmino(_: _33.GetNodeInfoRequestAmino): _33.GetNodeInfoRequest;
                    toAmino(_: _33.GetNodeInfoRequest): _33.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _33.GetNodeInfoRequestAminoMsg): _33.GetNodeInfoRequest;
                    toAminoMsg(message: _33.GetNodeInfoRequest): _33.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _33.GetNodeInfoRequestProtoMsg): _33.GetNodeInfoRequest;
                    toProto(message: _33.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _33.GetNodeInfoRequest): _33.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _33.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetNodeInfoResponse;
                    fromJSON(object: any): _33.GetNodeInfoResponse;
                    toJSON(message: _33.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_33.GetNodeInfoResponse>): _33.GetNodeInfoResponse;
                    fromAmino(object: _33.GetNodeInfoResponseAmino): _33.GetNodeInfoResponse;
                    toAmino(message: _33.GetNodeInfoResponse): _33.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _33.GetNodeInfoResponseAminoMsg): _33.GetNodeInfoResponse;
                    toAminoMsg(message: _33.GetNodeInfoResponse): _33.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _33.GetNodeInfoResponseProtoMsg): _33.GetNodeInfoResponse;
                    toProto(message: _33.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _33.GetNodeInfoResponse): _33.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _33.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.VersionInfo;
                    fromJSON(object: any): _33.VersionInfo;
                    toJSON(message: _33.VersionInfo): unknown;
                    fromPartial(object: Partial<_33.VersionInfo>): _33.VersionInfo;
                    fromAmino(object: _33.VersionInfoAmino): _33.VersionInfo;
                    toAmino(message: _33.VersionInfo): _33.VersionInfoAmino;
                    fromAminoMsg(object: _33.VersionInfoAminoMsg): _33.VersionInfo;
                    toAminoMsg(message: _33.VersionInfo): _33.VersionInfoAminoMsg;
                    fromProtoMsg(message: _33.VersionInfoProtoMsg): _33.VersionInfo;
                    toProto(message: _33.VersionInfo): Uint8Array;
                    toProtoMsg(message: _33.VersionInfo): _33.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _33.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Module;
                    fromJSON(object: any): _33.Module;
                    toJSON(message: _33.Module): unknown;
                    fromPartial(object: Partial<_33.Module>): _33.Module;
                    fromAmino(object: _33.ModuleAmino): _33.Module;
                    toAmino(message: _33.Module): _33.ModuleAmino;
                    fromAminoMsg(object: _33.ModuleAminoMsg): _33.Module;
                    toAminoMsg(message: _33.Module): _33.ModuleAminoMsg;
                    fromProtoMsg(message: _33.ModuleProtoMsg): _33.Module;
                    toProto(message: _33.Module): Uint8Array;
                    toProtoMsg(message: _33.Module): _33.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _34.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Coin;
                fromJSON(object: any): _34.Coin;
                toJSON(message: _34.Coin): unknown;
                fromPartial(object: Partial<_34.Coin>): _34.Coin;
                fromAmino(object: _34.CoinAmino): _34.Coin;
                toAmino(message: _34.Coin): _34.CoinAmino;
                fromAminoMsg(object: _34.CoinAminoMsg): _34.Coin;
                toAminoMsg(message: _34.Coin): _34.CoinAminoMsg;
                fromProtoMsg(message: _34.CoinProtoMsg): _34.Coin;
                toProto(message: _34.Coin): Uint8Array;
                toProtoMsg(message: _34.Coin): _34.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _34.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DecCoin;
                fromJSON(object: any): _34.DecCoin;
                toJSON(message: _34.DecCoin): unknown;
                fromPartial(object: Partial<_34.DecCoin>): _34.DecCoin;
                fromAmino(object: _34.DecCoinAmino): _34.DecCoin;
                toAmino(message: _34.DecCoin): _34.DecCoinAmino;
                fromAminoMsg(object: _34.DecCoinAminoMsg): _34.DecCoin;
                toAminoMsg(message: _34.DecCoin): _34.DecCoinAminoMsg;
                fromProtoMsg(message: _34.DecCoinProtoMsg): _34.DecCoin;
                toProto(message: _34.DecCoin): Uint8Array;
                toProtoMsg(message: _34.DecCoin): _34.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _34.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.IntProto;
                fromJSON(object: any): _34.IntProto;
                toJSON(message: _34.IntProto): unknown;
                fromPartial(object: Partial<_34.IntProto>): _34.IntProto;
                fromAmino(object: _34.IntProtoAmino): _34.IntProto;
                toAmino(message: _34.IntProto): _34.IntProtoAmino;
                fromAminoMsg(object: _34.IntProtoAminoMsg): _34.IntProto;
                toAminoMsg(message: _34.IntProto): _34.IntProtoAminoMsg;
                fromProtoMsg(message: _34.IntProtoProtoMsg): _34.IntProto;
                toProto(message: _34.IntProto): Uint8Array;
                toProtoMsg(message: _34.IntProto): _34.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _34.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DecProto;
                fromJSON(object: any): _34.DecProto;
                toJSON(message: _34.DecProto): unknown;
                fromPartial(object: Partial<_34.DecProto>): _34.DecProto;
                fromAmino(object: _34.DecProtoAmino): _34.DecProto;
                toAmino(message: _34.DecProto): _34.DecProtoAmino;
                fromAminoMsg(object: _34.DecProtoAminoMsg): _34.DecProto;
                toAminoMsg(message: _34.DecProto): _34.DecProtoAminoMsg;
                fromProtoMsg(message: _34.DecProtoProtoMsg): _34.DecProto;
                toProto(message: _34.DecProto): Uint8Array;
                toProtoMsg(message: _34.DecProto): _34.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _36.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisOwners;
                fromJSON(object: any): _36.GenesisOwners;
                toJSON(message: _36.GenesisOwners): unknown;
                fromPartial(object: Partial<_36.GenesisOwners>): _36.GenesisOwners;
                fromAmino(object: _36.GenesisOwnersAmino): _36.GenesisOwners;
                toAmino(message: _36.GenesisOwners): _36.GenesisOwnersAmino;
                fromAminoMsg(object: _36.GenesisOwnersAminoMsg): _36.GenesisOwners;
                toAminoMsg(message: _36.GenesisOwners): _36.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _36.GenesisOwnersProtoMsg): _36.GenesisOwners;
                toProto(message: _36.GenesisOwners): Uint8Array;
                toProtoMsg(message: _36.GenesisOwners): _36.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisState;
                fromJSON(object: any): _36.GenesisState;
                toJSON(message: _36.GenesisState): unknown;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
                fromAmino(object: _36.GenesisStateAmino): _36.GenesisState;
                toAmino(message: _36.GenesisState): _36.GenesisStateAmino;
                fromAminoMsg(object: _36.GenesisStateAminoMsg): _36.GenesisState;
                toAminoMsg(message: _36.GenesisState): _36.GenesisStateAminoMsg;
                fromProtoMsg(message: _36.GenesisStateProtoMsg): _36.GenesisState;
                toProto(message: _36.GenesisState): Uint8Array;
                toProtoMsg(message: _36.GenesisState): _36.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _35.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Capability;
                fromJSON(object: any): _35.Capability;
                toJSON(message: _35.Capability): unknown;
                fromPartial(object: Partial<_35.Capability>): _35.Capability;
                fromAmino(object: _35.CapabilityAmino): _35.Capability;
                toAmino(message: _35.Capability): _35.CapabilityAmino;
                fromAminoMsg(object: _35.CapabilityAminoMsg): _35.Capability;
                toAminoMsg(message: _35.Capability): _35.CapabilityAminoMsg;
                fromProtoMsg(message: _35.CapabilityProtoMsg): _35.Capability;
                toProto(message: _35.Capability): Uint8Array;
                toProtoMsg(message: _35.Capability): _35.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _35.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Owner;
                fromJSON(object: any): _35.Owner;
                toJSON(message: _35.Owner): unknown;
                fromPartial(object: Partial<_35.Owner>): _35.Owner;
                fromAmino(object: _35.OwnerAmino): _35.Owner;
                toAmino(message: _35.Owner): _35.OwnerAmino;
                fromAminoMsg(object: _35.OwnerAminoMsg): _35.Owner;
                toAminoMsg(message: _35.Owner): _35.OwnerAminoMsg;
                fromProtoMsg(message: _35.OwnerProtoMsg): _35.Owner;
                toProto(message: _35.Owner): Uint8Array;
                toProtoMsg(message: _35.Owner): _35.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _35.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.CapabilityOwners;
                fromJSON(object: any): _35.CapabilityOwners;
                toJSON(message: _35.CapabilityOwners): unknown;
                fromPartial(object: Partial<_35.CapabilityOwners>): _35.CapabilityOwners;
                fromAmino(object: _35.CapabilityOwnersAmino): _35.CapabilityOwners;
                toAmino(message: _35.CapabilityOwners): _35.CapabilityOwnersAmino;
                fromAminoMsg(object: _35.CapabilityOwnersAminoMsg): _35.CapabilityOwners;
                toAminoMsg(message: _35.CapabilityOwners): _35.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _35.CapabilityOwnersProtoMsg): _35.CapabilityOwners;
                toProto(message: _35.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _35.CapabilityOwners): _35.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _38.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _38.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _38.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _38.MsgVerifyInvariant) => _38.MsgVerifyInvariantAmino;
                    fromAmino: (object: _38.MsgVerifyInvariantAmino) => _38.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _38.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgVerifyInvariant;
                fromJSON(object: any): _38.MsgVerifyInvariant;
                toJSON(message: _38.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_38.MsgVerifyInvariant>): _38.MsgVerifyInvariant;
                fromAmino(object: _38.MsgVerifyInvariantAmino): _38.MsgVerifyInvariant;
                toAmino(message: _38.MsgVerifyInvariant): _38.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _38.MsgVerifyInvariantAminoMsg): _38.MsgVerifyInvariant;
                toAminoMsg(message: _38.MsgVerifyInvariant): _38.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _38.MsgVerifyInvariantProtoMsg): _38.MsgVerifyInvariant;
                toProto(message: _38.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _38.MsgVerifyInvariant): _38.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _38.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgVerifyInvariantResponse;
                fromJSON(_: any): _38.MsgVerifyInvariantResponse;
                toJSON(_: _38.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_38.MsgVerifyInvariantResponse>): _38.MsgVerifyInvariantResponse;
                fromAmino(_: _38.MsgVerifyInvariantResponseAmino): _38.MsgVerifyInvariantResponse;
                toAmino(_: _38.MsgVerifyInvariantResponse): _38.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _38.MsgVerifyInvariantResponseAminoMsg): _38.MsgVerifyInvariantResponse;
                toAminoMsg(message: _38.MsgVerifyInvariantResponse): _38.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _38.MsgVerifyInvariantResponseProtoMsg): _38.MsgVerifyInvariantResponse;
                toProto(message: _38.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _38.MsgVerifyInvariantResponse): _38.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GenesisState;
                fromJSON(object: any): _37.GenesisState;
                toJSON(message: _37.GenesisState): unknown;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _39.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PubKey;
                fromJSON(object: any): _39.PubKey;
                toJSON(message: _39.PubKey): unknown;
                fromPartial(object: Partial<_39.PubKey>): _39.PubKey;
                fromAmino(object: _39.PubKeyAmino): _39.PubKey;
                toAmino(message: _39.PubKey): _39.PubKeyAmino;
                fromAminoMsg(object: _39.PubKeyAminoMsg): _39.PubKey;
                toAminoMsg(message: _39.PubKey): _39.PubKeyAminoMsg;
                fromProtoMsg(message: _39.PubKeyProtoMsg): _39.PubKey;
                toProto(message: _39.PubKey): Uint8Array;
                toProtoMsg(message: _39.PubKey): _39.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _39.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PrivKey;
                fromJSON(object: any): _39.PrivKey;
                toJSON(message: _39.PrivKey): unknown;
                fromPartial(object: Partial<_39.PrivKey>): _39.PrivKey;
                fromAmino(object: _39.PrivKeyAmino): _39.PrivKey;
                toAmino(message: _39.PrivKey): _39.PrivKeyAmino;
                fromAminoMsg(object: _39.PrivKeyAminoMsg): _39.PrivKey;
                toAminoMsg(message: _39.PrivKey): _39.PrivKeyAminoMsg;
                fromProtoMsg(message: _39.PrivKeyProtoMsg): _39.PrivKey;
                toProto(message: _39.PrivKey): Uint8Array;
                toProtoMsg(message: _39.PrivKey): _39.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _40.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.BIP44Params;
                    fromJSON(object: any): _40.BIP44Params;
                    toJSON(message: _40.BIP44Params): unknown;
                    fromPartial(object: Partial<_40.BIP44Params>): _40.BIP44Params;
                    fromAmino(object: _40.BIP44ParamsAmino): _40.BIP44Params;
                    toAmino(message: _40.BIP44Params): _40.BIP44ParamsAmino;
                    fromAminoMsg(object: _40.BIP44ParamsAminoMsg): _40.BIP44Params;
                    toAminoMsg(message: _40.BIP44Params): _40.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _40.BIP44ParamsProtoMsg): _40.BIP44Params;
                    toProto(message: _40.BIP44Params): Uint8Array;
                    toProtoMsg(message: _40.BIP44Params): _40.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _41.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Record;
                    fromJSON(object: any): _41.Record;
                    toJSON(message: _41.Record): unknown;
                    fromPartial(object: Partial<_41.Record>): _41.Record;
                    fromAmino(object: _41.RecordAmino): _41.Record;
                    toAmino(message: _41.Record): _41.RecordAmino;
                    fromAminoMsg(object: _41.RecordAminoMsg): _41.Record;
                    toAminoMsg(message: _41.Record): _41.RecordAminoMsg;
                    fromProtoMsg(message: _41.RecordProtoMsg): _41.Record;
                    toProto(message: _41.Record): Uint8Array;
                    toProtoMsg(message: _41.Record): _41.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _41.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Record_Local;
                    fromJSON(object: any): _41.Record_Local;
                    toJSON(message: _41.Record_Local): unknown;
                    fromPartial(object: Partial<_41.Record_Local>): _41.Record_Local;
                    fromAmino(object: _41.Record_LocalAmino): _41.Record_Local;
                    toAmino(message: _41.Record_Local): _41.Record_LocalAmino;
                    fromAminoMsg(object: _41.Record_LocalAminoMsg): _41.Record_Local;
                    toAminoMsg(message: _41.Record_Local): _41.Record_LocalAminoMsg;
                    fromProtoMsg(message: _41.Record_LocalProtoMsg): _41.Record_Local;
                    toProto(message: _41.Record_Local): Uint8Array;
                    toProtoMsg(message: _41.Record_Local): _41.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _41.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Record_Ledger;
                    fromJSON(object: any): _41.Record_Ledger;
                    toJSON(message: _41.Record_Ledger): unknown;
                    fromPartial(object: Partial<_41.Record_Ledger>): _41.Record_Ledger;
                    fromAmino(object: _41.Record_LedgerAmino): _41.Record_Ledger;
                    toAmino(message: _41.Record_Ledger): _41.Record_LedgerAmino;
                    fromAminoMsg(object: _41.Record_LedgerAminoMsg): _41.Record_Ledger;
                    toAminoMsg(message: _41.Record_Ledger): _41.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _41.Record_LedgerProtoMsg): _41.Record_Ledger;
                    toProto(message: _41.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _41.Record_Ledger): _41.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _41.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Record_Multi;
                    fromJSON(_: any): _41.Record_Multi;
                    toJSON(_: _41.Record_Multi): unknown;
                    fromPartial(_: Partial<_41.Record_Multi>): _41.Record_Multi;
                    fromAmino(_: _41.Record_MultiAmino): _41.Record_Multi;
                    toAmino(_: _41.Record_Multi): _41.Record_MultiAmino;
                    fromAminoMsg(object: _41.Record_MultiAminoMsg): _41.Record_Multi;
                    toAminoMsg(message: _41.Record_Multi): _41.Record_MultiAminoMsg;
                    fromProtoMsg(message: _41.Record_MultiProtoMsg): _41.Record_Multi;
                    toProto(message: _41.Record_Multi): Uint8Array;
                    toProtoMsg(message: _41.Record_Multi): _41.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _41.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Record_Offline;
                    fromJSON(_: any): _41.Record_Offline;
                    toJSON(_: _41.Record_Offline): unknown;
                    fromPartial(_: Partial<_41.Record_Offline>): _41.Record_Offline;
                    fromAmino(_: _41.Record_OfflineAmino): _41.Record_Offline;
                    toAmino(_: _41.Record_Offline): _41.Record_OfflineAmino;
                    fromAminoMsg(object: _41.Record_OfflineAminoMsg): _41.Record_Offline;
                    toAminoMsg(message: _41.Record_Offline): _41.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _41.Record_OfflineProtoMsg): _41.Record_Offline;
                    toProto(message: _41.Record_Offline): Uint8Array;
                    toProtoMsg(message: _41.Record_Offline): _41.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _42.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.LegacyAminoPubKey;
                fromJSON(object: any): _42.LegacyAminoPubKey;
                toJSON(message: _42.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_42.LegacyAminoPubKey>): _42.LegacyAminoPubKey;
                fromAmino(object: _42.LegacyAminoPubKeyAmino): _42.LegacyAminoPubKey;
                toAmino(message: _42.LegacyAminoPubKey): _42.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _42.LegacyAminoPubKeyAminoMsg): _42.LegacyAminoPubKey;
                toAminoMsg(message: _42.LegacyAminoPubKey): _42.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _42.LegacyAminoPubKeyProtoMsg): _42.LegacyAminoPubKey;
                toProto(message: _42.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _42.LegacyAminoPubKey): _42.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _43.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PubKey;
                fromJSON(object: any): _43.PubKey;
                toJSON(message: _43.PubKey): unknown;
                fromPartial(object: Partial<_43.PubKey>): _43.PubKey;
                fromAmino(object: _43.PubKeyAmino): _43.PubKey;
                toAmino(message: _43.PubKey): _43.PubKeyAmino;
                fromAminoMsg(object: _43.PubKeyAminoMsg): _43.PubKey;
                toAminoMsg(message: _43.PubKey): _43.PubKeyAminoMsg;
                fromProtoMsg(message: _43.PubKeyProtoMsg): _43.PubKey;
                toProto(message: _43.PubKey): Uint8Array;
                toProtoMsg(message: _43.PubKey): _43.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _43.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PrivKey;
                fromJSON(object: any): _43.PrivKey;
                toJSON(message: _43.PrivKey): unknown;
                fromPartial(object: Partial<_43.PrivKey>): _43.PrivKey;
                fromAmino(object: _43.PrivKeyAmino): _43.PrivKey;
                toAmino(message: _43.PrivKey): _43.PrivKeyAmino;
                fromAminoMsg(object: _43.PrivKeyAminoMsg): _43.PrivKey;
                toAminoMsg(message: _43.PrivKey): _43.PrivKeyAminoMsg;
                fromProtoMsg(message: _43.PrivKeyProtoMsg): _43.PrivKey;
                toProto(message: _43.PrivKey): Uint8Array;
                toProtoMsg(message: _43.PrivKey): _43.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _44.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.PubKey;
                fromJSON(object: any): _44.PubKey;
                toJSON(message: _44.PubKey): unknown;
                fromPartial(object: Partial<_44.PubKey>): _44.PubKey;
                fromAmino(object: _44.PubKeyAmino): _44.PubKey;
                toAmino(message: _44.PubKey): _44.PubKeyAmino;
                fromAminoMsg(object: _44.PubKeyAminoMsg): _44.PubKey;
                toAminoMsg(message: _44.PubKey): _44.PubKeyAminoMsg;
                fromProtoMsg(message: _44.PubKeyProtoMsg): _44.PubKey;
                toProto(message: _44.PubKey): Uint8Array;
                toProtoMsg(message: _44.PubKey): _44.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _44.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.PrivKey;
                fromJSON(object: any): _44.PrivKey;
                toJSON(message: _44.PrivKey): unknown;
                fromPartial(object: Partial<_44.PrivKey>): _44.PrivKey;
                fromAmino(object: _44.PrivKeyAmino): _44.PrivKey;
                toAmino(message: _44.PrivKey): _44.PrivKeyAmino;
                fromAminoMsg(object: _44.PrivKeyAminoMsg): _44.PrivKey;
                toAminoMsg(message: _44.PrivKey): _44.PrivKeyAminoMsg;
                fromProtoMsg(message: _44.PrivKeyProtoMsg): _44.PrivKey;
                toProto(message: _44.PrivKey): Uint8Array;
                toProtoMsg(message: _44.PrivKey): _44.PrivKeyProtoMsg;
            };
        };
        const sr25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _45.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.PubKey;
                fromJSON(object: any): _45.PubKey;
                toJSON(message: _45.PubKey): unknown;
                fromPartial(object: Partial<_45.PubKey>): _45.PubKey;
                fromAmino(object: _45.PubKeyAmino): _45.PubKey;
                toAmino(message: _45.PubKey): _45.PubKeyAmino;
                fromAminoMsg(object: _45.PubKeyAminoMsg): _45.PubKey;
                toAminoMsg(message: _45.PubKey): _45.PubKeyAminoMsg;
                fromProtoMsg(message: _45.PubKeyProtoMsg): _45.PubKey;
                toProto(message: _45.PubKey): Uint8Array;
                toProtoMsg(message: _45.PubKey): _45.PubKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _49.MsgSetWithdrawAddress) => _49.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _49.MsgSetWithdrawAddressAmino) => _49.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _49.MsgWithdrawDelegatorReward) => _49.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _49.MsgWithdrawDelegatorRewardAmino) => _49.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _49.MsgWithdrawValidatorCommission) => _49.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _49.MsgWithdrawValidatorCommissionAmino) => _49.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _49.MsgFundCommunityPool) => _49.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _49.MsgFundCommunityPoolAmino) => _49.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _49.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSetWithdrawAddress;
                fromJSON(object: any): _49.MsgSetWithdrawAddress;
                toJSON(message: _49.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_49.MsgSetWithdrawAddress>): _49.MsgSetWithdrawAddress;
                fromAmino(object: _49.MsgSetWithdrawAddressAmino): _49.MsgSetWithdrawAddress;
                toAmino(message: _49.MsgSetWithdrawAddress): _49.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _49.MsgSetWithdrawAddressAminoMsg): _49.MsgSetWithdrawAddress;
                toAminoMsg(message: _49.MsgSetWithdrawAddress): _49.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _49.MsgSetWithdrawAddressProtoMsg): _49.MsgSetWithdrawAddress;
                toProto(message: _49.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _49.MsgSetWithdrawAddress): _49.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _49.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _49.MsgSetWithdrawAddressResponse;
                toJSON(_: _49.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_49.MsgSetWithdrawAddressResponse>): _49.MsgSetWithdrawAddressResponse;
                fromAmino(_: _49.MsgSetWithdrawAddressResponseAmino): _49.MsgSetWithdrawAddressResponse;
                toAmino(_: _49.MsgSetWithdrawAddressResponse): _49.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _49.MsgSetWithdrawAddressResponseAminoMsg): _49.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _49.MsgSetWithdrawAddressResponse): _49.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _49.MsgSetWithdrawAddressResponseProtoMsg): _49.MsgSetWithdrawAddressResponse;
                toProto(message: _49.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _49.MsgSetWithdrawAddressResponse): _49.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _49.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _49.MsgWithdrawDelegatorReward;
                toJSON(message: _49.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_49.MsgWithdrawDelegatorReward>): _49.MsgWithdrawDelegatorReward;
                fromAmino(object: _49.MsgWithdrawDelegatorRewardAmino): _49.MsgWithdrawDelegatorReward;
                toAmino(message: _49.MsgWithdrawDelegatorReward): _49.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _49.MsgWithdrawDelegatorRewardAminoMsg): _49.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _49.MsgWithdrawDelegatorReward): _49.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawDelegatorRewardProtoMsg): _49.MsgWithdrawDelegatorReward;
                toProto(message: _49.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawDelegatorReward): _49.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _49.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgWithdrawDelegatorRewardResponse;
                fromJSON(_: any): _49.MsgWithdrawDelegatorRewardResponse;
                toJSON(_: _49.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(_: Partial<_49.MsgWithdrawDelegatorRewardResponse>): _49.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _49.MsgWithdrawDelegatorRewardResponseAmino): _49.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _49.MsgWithdrawDelegatorRewardResponse): _49.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _49.MsgWithdrawDelegatorRewardResponseAminoMsg): _49.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _49.MsgWithdrawDelegatorRewardResponse): _49.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawDelegatorRewardResponseProtoMsg): _49.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _49.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawDelegatorRewardResponse): _49.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _49.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _49.MsgWithdrawValidatorCommission;
                toJSON(message: _49.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_49.MsgWithdrawValidatorCommission>): _49.MsgWithdrawValidatorCommission;
                fromAmino(object: _49.MsgWithdrawValidatorCommissionAmino): _49.MsgWithdrawValidatorCommission;
                toAmino(message: _49.MsgWithdrawValidatorCommission): _49.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _49.MsgWithdrawValidatorCommissionAminoMsg): _49.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _49.MsgWithdrawValidatorCommission): _49.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawValidatorCommissionProtoMsg): _49.MsgWithdrawValidatorCommission;
                toProto(message: _49.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawValidatorCommission): _49.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _49.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgWithdrawValidatorCommissionResponse;
                fromJSON(_: any): _49.MsgWithdrawValidatorCommissionResponse;
                toJSON(_: _49.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(_: Partial<_49.MsgWithdrawValidatorCommissionResponse>): _49.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _49.MsgWithdrawValidatorCommissionResponseAmino): _49.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _49.MsgWithdrawValidatorCommissionResponse): _49.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _49.MsgWithdrawValidatorCommissionResponseAminoMsg): _49.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _49.MsgWithdrawValidatorCommissionResponse): _49.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawValidatorCommissionResponseProtoMsg): _49.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _49.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawValidatorCommissionResponse): _49.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _49.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgFundCommunityPool;
                fromJSON(object: any): _49.MsgFundCommunityPool;
                toJSON(message: _49.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_49.MsgFundCommunityPool>): _49.MsgFundCommunityPool;
                fromAmino(object: _49.MsgFundCommunityPoolAmino): _49.MsgFundCommunityPool;
                toAmino(message: _49.MsgFundCommunityPool): _49.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _49.MsgFundCommunityPoolAminoMsg): _49.MsgFundCommunityPool;
                toAminoMsg(message: _49.MsgFundCommunityPool): _49.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _49.MsgFundCommunityPoolProtoMsg): _49.MsgFundCommunityPool;
                toProto(message: _49.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _49.MsgFundCommunityPool): _49.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _49.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _49.MsgFundCommunityPoolResponse;
                toJSON(_: _49.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_49.MsgFundCommunityPoolResponse>): _49.MsgFundCommunityPoolResponse;
                fromAmino(_: _49.MsgFundCommunityPoolResponseAmino): _49.MsgFundCommunityPoolResponse;
                toAmino(_: _49.MsgFundCommunityPoolResponse): _49.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _49.MsgFundCommunityPoolResponseAminoMsg): _49.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _49.MsgFundCommunityPoolResponse): _49.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _49.MsgFundCommunityPoolResponseProtoMsg): _49.MsgFundCommunityPoolResponse;
                toProto(message: _49.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _49.MsgFundCommunityPoolResponse): _49.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsRequest;
                fromJSON(_: any): _48.QueryParamsRequest;
                toJSON(_: _48.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
                fromAmino(_: _48.QueryParamsRequestAmino): _48.QueryParamsRequest;
                toAmino(_: _48.QueryParamsRequest): _48.QueryParamsRequestAmino;
                fromAminoMsg(object: _48.QueryParamsRequestAminoMsg): _48.QueryParamsRequest;
                toAminoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryParamsRequestProtoMsg): _48.QueryParamsRequest;
                toProto(message: _48.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsResponse;
                fromJSON(object: any): _48.QueryParamsResponse;
                toJSON(message: _48.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
                fromAmino(object: _48.QueryParamsResponseAmino): _48.QueryParamsResponse;
                toAmino(message: _48.QueryParamsResponse): _48.QueryParamsResponseAmino;
                fromAminoMsg(object: _48.QueryParamsResponseAminoMsg): _48.QueryParamsResponse;
                toAminoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryParamsResponseProtoMsg): _48.QueryParamsResponse;
                toProto(message: _48.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _48.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _48.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_48.QueryValidatorOutstandingRewardsRequest>): _48.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _48.QueryValidatorOutstandingRewardsRequestAmino): _48.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _48.QueryValidatorOutstandingRewardsRequest): _48.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _48.QueryValidatorOutstandingRewardsRequestAminoMsg): _48.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _48.QueryValidatorOutstandingRewardsRequest): _48.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorOutstandingRewardsRequestProtoMsg): _48.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _48.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorOutstandingRewardsRequest): _48.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _48.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _48.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_48.QueryValidatorOutstandingRewardsResponse>): _48.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _48.QueryValidatorOutstandingRewardsResponseAmino): _48.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _48.QueryValidatorOutstandingRewardsResponse): _48.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _48.QueryValidatorOutstandingRewardsResponseAminoMsg): _48.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _48.QueryValidatorOutstandingRewardsResponse): _48.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorOutstandingRewardsResponseProtoMsg): _48.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _48.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorOutstandingRewardsResponse): _48.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _48.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryValidatorCommissionRequest;
                fromJSON(object: any): _48.QueryValidatorCommissionRequest;
                toJSON(message: _48.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_48.QueryValidatorCommissionRequest>): _48.QueryValidatorCommissionRequest;
                fromAmino(object: _48.QueryValidatorCommissionRequestAmino): _48.QueryValidatorCommissionRequest;
                toAmino(message: _48.QueryValidatorCommissionRequest): _48.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _48.QueryValidatorCommissionRequestAminoMsg): _48.QueryValidatorCommissionRequest;
                toAminoMsg(message: _48.QueryValidatorCommissionRequest): _48.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorCommissionRequestProtoMsg): _48.QueryValidatorCommissionRequest;
                toProto(message: _48.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorCommissionRequest): _48.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _48.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryValidatorCommissionResponse;
                fromJSON(object: any): _48.QueryValidatorCommissionResponse;
                toJSON(message: _48.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_48.QueryValidatorCommissionResponse>): _48.QueryValidatorCommissionResponse;
                fromAmino(object: _48.QueryValidatorCommissionResponseAmino): _48.QueryValidatorCommissionResponse;
                toAmino(message: _48.QueryValidatorCommissionResponse): _48.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _48.QueryValidatorCommissionResponseAminoMsg): _48.QueryValidatorCommissionResponse;
                toAminoMsg(message: _48.QueryValidatorCommissionResponse): _48.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorCommissionResponseProtoMsg): _48.QueryValidatorCommissionResponse;
                toProto(message: _48.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorCommissionResponse): _48.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _48.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryValidatorSlashesRequest;
                fromJSON(object: any): _48.QueryValidatorSlashesRequest;
                toJSON(message: _48.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_48.QueryValidatorSlashesRequest>): _48.QueryValidatorSlashesRequest;
                fromAmino(object: _48.QueryValidatorSlashesRequestAmino): _48.QueryValidatorSlashesRequest;
                toAmino(message: _48.QueryValidatorSlashesRequest): _48.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _48.QueryValidatorSlashesRequestAminoMsg): _48.QueryValidatorSlashesRequest;
                toAminoMsg(message: _48.QueryValidatorSlashesRequest): _48.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorSlashesRequestProtoMsg): _48.QueryValidatorSlashesRequest;
                toProto(message: _48.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorSlashesRequest): _48.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _48.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryValidatorSlashesResponse;
                fromJSON(object: any): _48.QueryValidatorSlashesResponse;
                toJSON(message: _48.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_48.QueryValidatorSlashesResponse>): _48.QueryValidatorSlashesResponse;
                fromAmino(object: _48.QueryValidatorSlashesResponseAmino): _48.QueryValidatorSlashesResponse;
                toAmino(message: _48.QueryValidatorSlashesResponse): _48.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _48.QueryValidatorSlashesResponseAminoMsg): _48.QueryValidatorSlashesResponse;
                toAminoMsg(message: _48.QueryValidatorSlashesResponse): _48.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorSlashesResponseProtoMsg): _48.QueryValidatorSlashesResponse;
                toProto(message: _48.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorSlashesResponse): _48.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDelegationRewardsRequest;
                fromJSON(object: any): _48.QueryDelegationRewardsRequest;
                toJSON(message: _48.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_48.QueryDelegationRewardsRequest>): _48.QueryDelegationRewardsRequest;
                fromAmino(object: _48.QueryDelegationRewardsRequestAmino): _48.QueryDelegationRewardsRequest;
                toAmino(message: _48.QueryDelegationRewardsRequest): _48.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _48.QueryDelegationRewardsRequestAminoMsg): _48.QueryDelegationRewardsRequest;
                toAminoMsg(message: _48.QueryDelegationRewardsRequest): _48.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationRewardsRequestProtoMsg): _48.QueryDelegationRewardsRequest;
                toProto(message: _48.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationRewardsRequest): _48.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDelegationRewardsResponse;
                fromJSON(object: any): _48.QueryDelegationRewardsResponse;
                toJSON(message: _48.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_48.QueryDelegationRewardsResponse>): _48.QueryDelegationRewardsResponse;
                fromAmino(object: _48.QueryDelegationRewardsResponseAmino): _48.QueryDelegationRewardsResponse;
                toAmino(message: _48.QueryDelegationRewardsResponse): _48.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _48.QueryDelegationRewardsResponseAminoMsg): _48.QueryDelegationRewardsResponse;
                toAminoMsg(message: _48.QueryDelegationRewardsResponse): _48.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationRewardsResponseProtoMsg): _48.QueryDelegationRewardsResponse;
                toProto(message: _48.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationRewardsResponse): _48.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsRequest;
                toJSON(message: _48.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_48.QueryDelegationTotalRewardsRequest>): _48.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _48.QueryDelegationTotalRewardsRequestAmino): _48.QueryDelegationTotalRewardsRequest;
                toAmino(message: _48.QueryDelegationTotalRewardsRequest): _48.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _48.QueryDelegationTotalRewardsRequestAminoMsg): _48.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _48.QueryDelegationTotalRewardsRequest): _48.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationTotalRewardsRequestProtoMsg): _48.QueryDelegationTotalRewardsRequest;
                toProto(message: _48.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationTotalRewardsRequest): _48.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsResponse;
                toJSON(message: _48.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_48.QueryDelegationTotalRewardsResponse>): _48.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _48.QueryDelegationTotalRewardsResponseAmino): _48.QueryDelegationTotalRewardsResponse;
                toAmino(message: _48.QueryDelegationTotalRewardsResponse): _48.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _48.QueryDelegationTotalRewardsResponseAminoMsg): _48.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _48.QueryDelegationTotalRewardsResponse): _48.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationTotalRewardsResponseProtoMsg): _48.QueryDelegationTotalRewardsResponse;
                toProto(message: _48.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationTotalRewardsResponse): _48.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _48.QueryDelegatorValidatorsRequest;
                toJSON(message: _48.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_48.QueryDelegatorValidatorsRequest>): _48.QueryDelegatorValidatorsRequest;
                fromAmino(object: _48.QueryDelegatorValidatorsRequestAmino): _48.QueryDelegatorValidatorsRequest;
                toAmino(message: _48.QueryDelegatorValidatorsRequest): _48.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _48.QueryDelegatorValidatorsRequestAminoMsg): _48.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _48.QueryDelegatorValidatorsRequest): _48.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorValidatorsRequestProtoMsg): _48.QueryDelegatorValidatorsRequest;
                toProto(message: _48.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorValidatorsRequest): _48.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _48.QueryDelegatorValidatorsResponse;
                toJSON(message: _48.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_48.QueryDelegatorValidatorsResponse>): _48.QueryDelegatorValidatorsResponse;
                fromAmino(object: _48.QueryDelegatorValidatorsResponseAmino): _48.QueryDelegatorValidatorsResponse;
                toAmino(message: _48.QueryDelegatorValidatorsResponse): _48.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _48.QueryDelegatorValidatorsResponseAminoMsg): _48.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _48.QueryDelegatorValidatorsResponse): _48.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorValidatorsResponseProtoMsg): _48.QueryDelegatorValidatorsResponse;
                toProto(message: _48.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorValidatorsResponse): _48.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _48.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_48.QueryDelegatorWithdrawAddressRequest>): _48.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _48.QueryDelegatorWithdrawAddressRequestAmino): _48.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _48.QueryDelegatorWithdrawAddressRequest): _48.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _48.QueryDelegatorWithdrawAddressRequestAminoMsg): _48.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _48.QueryDelegatorWithdrawAddressRequest): _48.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorWithdrawAddressRequestProtoMsg): _48.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _48.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorWithdrawAddressRequest): _48.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _48.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_48.QueryDelegatorWithdrawAddressResponse>): _48.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _48.QueryDelegatorWithdrawAddressResponseAmino): _48.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _48.QueryDelegatorWithdrawAddressResponse): _48.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _48.QueryDelegatorWithdrawAddressResponseAminoMsg): _48.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _48.QueryDelegatorWithdrawAddressResponse): _48.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorWithdrawAddressResponseProtoMsg): _48.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _48.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorWithdrawAddressResponse): _48.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _48.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryCommunityPoolRequest;
                fromJSON(_: any): _48.QueryCommunityPoolRequest;
                toJSON(_: _48.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_48.QueryCommunityPoolRequest>): _48.QueryCommunityPoolRequest;
                fromAmino(_: _48.QueryCommunityPoolRequestAmino): _48.QueryCommunityPoolRequest;
                toAmino(_: _48.QueryCommunityPoolRequest): _48.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _48.QueryCommunityPoolRequestAminoMsg): _48.QueryCommunityPoolRequest;
                toAminoMsg(message: _48.QueryCommunityPoolRequest): _48.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _48.QueryCommunityPoolRequestProtoMsg): _48.QueryCommunityPoolRequest;
                toProto(message: _48.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _48.QueryCommunityPoolRequest): _48.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _48.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryCommunityPoolResponse;
                fromJSON(object: any): _48.QueryCommunityPoolResponse;
                toJSON(message: _48.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_48.QueryCommunityPoolResponse>): _48.QueryCommunityPoolResponse;
                fromAmino(object: _48.QueryCommunityPoolResponseAmino): _48.QueryCommunityPoolResponse;
                toAmino(message: _48.QueryCommunityPoolResponse): _48.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _48.QueryCommunityPoolResponseAminoMsg): _48.QueryCommunityPoolResponse;
                toAminoMsg(message: _48.QueryCommunityPoolResponse): _48.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _48.QueryCommunityPoolResponseProtoMsg): _48.QueryCommunityPoolResponse;
                toProto(message: _48.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _48.QueryCommunityPoolResponse): _48.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _47.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DelegatorWithdrawInfo;
                fromJSON(object: any): _47.DelegatorWithdrawInfo;
                toJSON(message: _47.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_47.DelegatorWithdrawInfo>): _47.DelegatorWithdrawInfo;
                fromAmino(object: _47.DelegatorWithdrawInfoAmino): _47.DelegatorWithdrawInfo;
                toAmino(message: _47.DelegatorWithdrawInfo): _47.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _47.DelegatorWithdrawInfoAminoMsg): _47.DelegatorWithdrawInfo;
                toAminoMsg(message: _47.DelegatorWithdrawInfo): _47.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _47.DelegatorWithdrawInfoProtoMsg): _47.DelegatorWithdrawInfo;
                toProto(message: _47.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _47.DelegatorWithdrawInfo): _47.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _47.ValidatorOutstandingRewardsRecord;
                toJSON(message: _47.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_47.ValidatorOutstandingRewardsRecord>): _47.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _47.ValidatorOutstandingRewardsRecordAmino): _47.ValidatorOutstandingRewardsRecord;
                toAmino(message: _47.ValidatorOutstandingRewardsRecord): _47.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _47.ValidatorOutstandingRewardsRecordAminoMsg): _47.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _47.ValidatorOutstandingRewardsRecord): _47.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorOutstandingRewardsRecordProtoMsg): _47.ValidatorOutstandingRewardsRecord;
                toProto(message: _47.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorOutstandingRewardsRecord): _47.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _47.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _47.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_47.ValidatorAccumulatedCommissionRecord>): _47.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _47.ValidatorAccumulatedCommissionRecordAmino): _47.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _47.ValidatorAccumulatedCommissionRecord): _47.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _47.ValidatorAccumulatedCommissionRecordAminoMsg): _47.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _47.ValidatorAccumulatedCommissionRecord): _47.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorAccumulatedCommissionRecordProtoMsg): _47.ValidatorAccumulatedCommissionRecord;
                toProto(message: _47.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorAccumulatedCommissionRecord): _47.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _47.ValidatorHistoricalRewardsRecord;
                toJSON(message: _47.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_47.ValidatorHistoricalRewardsRecord>): _47.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _47.ValidatorHistoricalRewardsRecordAmino): _47.ValidatorHistoricalRewardsRecord;
                toAmino(message: _47.ValidatorHistoricalRewardsRecord): _47.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _47.ValidatorHistoricalRewardsRecordAminoMsg): _47.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _47.ValidatorHistoricalRewardsRecord): _47.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorHistoricalRewardsRecordProtoMsg): _47.ValidatorHistoricalRewardsRecord;
                toProto(message: _47.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorHistoricalRewardsRecord): _47.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _47.ValidatorCurrentRewardsRecord;
                toJSON(message: _47.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_47.ValidatorCurrentRewardsRecord>): _47.ValidatorCurrentRewardsRecord;
                fromAmino(object: _47.ValidatorCurrentRewardsRecordAmino): _47.ValidatorCurrentRewardsRecord;
                toAmino(message: _47.ValidatorCurrentRewardsRecord): _47.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _47.ValidatorCurrentRewardsRecordAminoMsg): _47.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _47.ValidatorCurrentRewardsRecord): _47.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorCurrentRewardsRecordProtoMsg): _47.ValidatorCurrentRewardsRecord;
                toProto(message: _47.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorCurrentRewardsRecord): _47.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _47.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DelegatorStartingInfoRecord;
                fromJSON(object: any): _47.DelegatorStartingInfoRecord;
                toJSON(message: _47.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_47.DelegatorStartingInfoRecord>): _47.DelegatorStartingInfoRecord;
                fromAmino(object: _47.DelegatorStartingInfoRecordAmino): _47.DelegatorStartingInfoRecord;
                toAmino(message: _47.DelegatorStartingInfoRecord): _47.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _47.DelegatorStartingInfoRecordAminoMsg): _47.DelegatorStartingInfoRecord;
                toAminoMsg(message: _47.DelegatorStartingInfoRecord): _47.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _47.DelegatorStartingInfoRecordProtoMsg): _47.DelegatorStartingInfoRecord;
                toProto(message: _47.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _47.DelegatorStartingInfoRecord): _47.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorSlashEventRecord;
                fromJSON(object: any): _47.ValidatorSlashEventRecord;
                toJSON(message: _47.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_47.ValidatorSlashEventRecord>): _47.ValidatorSlashEventRecord;
                fromAmino(object: _47.ValidatorSlashEventRecordAmino): _47.ValidatorSlashEventRecord;
                toAmino(message: _47.ValidatorSlashEventRecord): _47.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _47.ValidatorSlashEventRecordAminoMsg): _47.ValidatorSlashEventRecord;
                toAminoMsg(message: _47.ValidatorSlashEventRecord): _47.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorSlashEventRecordProtoMsg): _47.ValidatorSlashEventRecord;
                toProto(message: _47.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorSlashEventRecord): _47.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GenesisState;
                fromJSON(object: any): _47.GenesisState;
                toJSON(message: _47.GenesisState): unknown;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
                fromAmino(object: _47.GenesisStateAmino): _47.GenesisState;
                toAmino(message: _47.GenesisState): _47.GenesisStateAmino;
                fromAminoMsg(object: _47.GenesisStateAminoMsg): _47.GenesisState;
                toAminoMsg(message: _47.GenesisState): _47.GenesisStateAminoMsg;
                fromProtoMsg(message: _47.GenesisStateProtoMsg): _47.GenesisState;
                toProto(message: _47.GenesisState): Uint8Array;
                toProtoMsg(message: _47.GenesisState): _47.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _46.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Params;
                fromJSON(object: any): _46.Params;
                toJSON(message: _46.Params): unknown;
                fromPartial(object: Partial<_46.Params>): _46.Params;
                fromAmino(object: _46.ParamsAmino): _46.Params;
                toAmino(message: _46.Params): _46.ParamsAmino;
                fromAminoMsg(object: _46.ParamsAminoMsg): _46.Params;
                toAminoMsg(message: _46.Params): _46.ParamsAminoMsg;
                fromProtoMsg(message: _46.ParamsProtoMsg): _46.Params;
                toProto(message: _46.Params): Uint8Array;
                toProtoMsg(message: _46.Params): _46.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _46.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorHistoricalRewards;
                fromJSON(object: any): _46.ValidatorHistoricalRewards;
                toJSON(message: _46.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_46.ValidatorHistoricalRewards>): _46.ValidatorHistoricalRewards;
                fromAmino(object: _46.ValidatorHistoricalRewardsAmino): _46.ValidatorHistoricalRewards;
                toAmino(message: _46.ValidatorHistoricalRewards): _46.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _46.ValidatorHistoricalRewardsAminoMsg): _46.ValidatorHistoricalRewards;
                toAminoMsg(message: _46.ValidatorHistoricalRewards): _46.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _46.ValidatorHistoricalRewardsProtoMsg): _46.ValidatorHistoricalRewards;
                toProto(message: _46.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _46.ValidatorHistoricalRewards): _46.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _46.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorCurrentRewards;
                fromJSON(object: any): _46.ValidatorCurrentRewards;
                toJSON(message: _46.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_46.ValidatorCurrentRewards>): _46.ValidatorCurrentRewards;
                fromAmino(object: _46.ValidatorCurrentRewardsAmino): _46.ValidatorCurrentRewards;
                toAmino(message: _46.ValidatorCurrentRewards): _46.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _46.ValidatorCurrentRewardsAminoMsg): _46.ValidatorCurrentRewards;
                toAminoMsg(message: _46.ValidatorCurrentRewards): _46.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _46.ValidatorCurrentRewardsProtoMsg): _46.ValidatorCurrentRewards;
                toProto(message: _46.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _46.ValidatorCurrentRewards): _46.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _46.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorAccumulatedCommission;
                fromJSON(object: any): _46.ValidatorAccumulatedCommission;
                toJSON(message: _46.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_46.ValidatorAccumulatedCommission>): _46.ValidatorAccumulatedCommission;
                fromAmino(object: _46.ValidatorAccumulatedCommissionAmino): _46.ValidatorAccumulatedCommission;
                toAmino(message: _46.ValidatorAccumulatedCommission): _46.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _46.ValidatorAccumulatedCommissionAminoMsg): _46.ValidatorAccumulatedCommission;
                toAminoMsg(message: _46.ValidatorAccumulatedCommission): _46.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _46.ValidatorAccumulatedCommissionProtoMsg): _46.ValidatorAccumulatedCommission;
                toProto(message: _46.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _46.ValidatorAccumulatedCommission): _46.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _46.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorOutstandingRewards;
                fromJSON(object: any): _46.ValidatorOutstandingRewards;
                toJSON(message: _46.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_46.ValidatorOutstandingRewards>): _46.ValidatorOutstandingRewards;
                fromAmino(object: _46.ValidatorOutstandingRewardsAmino): _46.ValidatorOutstandingRewards;
                toAmino(message: _46.ValidatorOutstandingRewards): _46.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _46.ValidatorOutstandingRewardsAminoMsg): _46.ValidatorOutstandingRewards;
                toAminoMsg(message: _46.ValidatorOutstandingRewards): _46.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _46.ValidatorOutstandingRewardsProtoMsg): _46.ValidatorOutstandingRewards;
                toProto(message: _46.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _46.ValidatorOutstandingRewards): _46.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _46.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorSlashEvent;
                fromJSON(object: any): _46.ValidatorSlashEvent;
                toJSON(message: _46.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_46.ValidatorSlashEvent>): _46.ValidatorSlashEvent;
                fromAmino(object: _46.ValidatorSlashEventAmino): _46.ValidatorSlashEvent;
                toAmino(message: _46.ValidatorSlashEvent): _46.ValidatorSlashEventAmino;
                fromAminoMsg(object: _46.ValidatorSlashEventAminoMsg): _46.ValidatorSlashEvent;
                toAminoMsg(message: _46.ValidatorSlashEvent): _46.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _46.ValidatorSlashEventProtoMsg): _46.ValidatorSlashEvent;
                toProto(message: _46.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _46.ValidatorSlashEvent): _46.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _46.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorSlashEvents;
                fromJSON(object: any): _46.ValidatorSlashEvents;
                toJSON(message: _46.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_46.ValidatorSlashEvents>): _46.ValidatorSlashEvents;
                fromAmino(object: _46.ValidatorSlashEventsAmino): _46.ValidatorSlashEvents;
                toAmino(message: _46.ValidatorSlashEvents): _46.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _46.ValidatorSlashEventsAminoMsg): _46.ValidatorSlashEvents;
                toAminoMsg(message: _46.ValidatorSlashEvents): _46.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _46.ValidatorSlashEventsProtoMsg): _46.ValidatorSlashEvents;
                toProto(message: _46.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _46.ValidatorSlashEvents): _46.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _46.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.FeePool;
                fromJSON(object: any): _46.FeePool;
                toJSON(message: _46.FeePool): unknown;
                fromPartial(object: Partial<_46.FeePool>): _46.FeePool;
                fromAmino(object: _46.FeePoolAmino): _46.FeePool;
                toAmino(message: _46.FeePool): _46.FeePoolAmino;
                fromAminoMsg(object: _46.FeePoolAminoMsg): _46.FeePool;
                toAminoMsg(message: _46.FeePool): _46.FeePoolAminoMsg;
                fromProtoMsg(message: _46.FeePoolProtoMsg): _46.FeePool;
                toProto(message: _46.FeePool): Uint8Array;
                toProtoMsg(message: _46.FeePool): _46.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _46.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.CommunityPoolSpendProposal;
                fromJSON(object: any): _46.CommunityPoolSpendProposal;
                toJSON(message: _46.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_46.CommunityPoolSpendProposal>): _46.CommunityPoolSpendProposal;
                fromAmino(object: _46.CommunityPoolSpendProposalAmino): _46.CommunityPoolSpendProposal;
                toAmino(message: _46.CommunityPoolSpendProposal): _46.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _46.CommunityPoolSpendProposalAminoMsg): _46.CommunityPoolSpendProposal;
                toAminoMsg(message: _46.CommunityPoolSpendProposal): _46.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _46.CommunityPoolSpendProposalProtoMsg): _46.CommunityPoolSpendProposal;
                toProto(message: _46.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _46.CommunityPoolSpendProposal): _46.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _46.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.DelegatorStartingInfo;
                fromJSON(object: any): _46.DelegatorStartingInfo;
                toJSON(message: _46.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_46.DelegatorStartingInfo>): _46.DelegatorStartingInfo;
                fromAmino(object: _46.DelegatorStartingInfoAmino): _46.DelegatorStartingInfo;
                toAmino(message: _46.DelegatorStartingInfo): _46.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _46.DelegatorStartingInfoAminoMsg): _46.DelegatorStartingInfo;
                toAminoMsg(message: _46.DelegatorStartingInfo): _46.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _46.DelegatorStartingInfoProtoMsg): _46.DelegatorStartingInfo;
                toProto(message: _46.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _46.DelegatorStartingInfo): _46.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _46.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.DelegationDelegatorReward;
                fromJSON(object: any): _46.DelegationDelegatorReward;
                toJSON(message: _46.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_46.DelegationDelegatorReward>): _46.DelegationDelegatorReward;
                fromAmino(object: _46.DelegationDelegatorRewardAmino): _46.DelegationDelegatorReward;
                toAmino(message: _46.DelegationDelegatorReward): _46.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _46.DelegationDelegatorRewardAminoMsg): _46.DelegationDelegatorReward;
                toAminoMsg(message: _46.DelegationDelegatorReward): _46.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _46.DelegationDelegatorRewardProtoMsg): _46.DelegationDelegatorReward;
                toProto(message: _46.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _46.DelegationDelegatorReward): _46.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _46.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _46.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _46.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_46.CommunityPoolSpendProposalWithDeposit>): _46.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _46.CommunityPoolSpendProposalWithDepositAmino): _46.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _46.CommunityPoolSpendProposalWithDeposit): _46.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _46.CommunityPoolSpendProposalWithDepositAminoMsg): _46.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _46.CommunityPoolSpendProposalWithDeposit): _46.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _46.CommunityPoolSpendProposalWithDepositProtoMsg): _46.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _46.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _46.CommunityPoolSpendProposalWithDeposit): _46.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _53.MsgSubmitEvidence) => _53.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _53.MsgSubmitEvidenceAmino) => _53.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _53.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitEvidence;
                fromJSON(object: any): _53.MsgSubmitEvidence;
                toJSON(message: _53.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_53.MsgSubmitEvidence>): _53.MsgSubmitEvidence;
                fromAmino(object: _53.MsgSubmitEvidenceAmino): _53.MsgSubmitEvidence;
                toAmino(message: _53.MsgSubmitEvidence): _53.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _53.MsgSubmitEvidenceAminoMsg): _53.MsgSubmitEvidence;
                toAminoMsg(message: _53.MsgSubmitEvidence): _53.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _53.MsgSubmitEvidenceProtoMsg): _53.MsgSubmitEvidence;
                toProto(message: _53.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _53.MsgSubmitEvidence): _53.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _53.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _53.MsgSubmitEvidenceResponse;
                toJSON(message: _53.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_53.MsgSubmitEvidenceResponse>): _53.MsgSubmitEvidenceResponse;
                fromAmino(object: _53.MsgSubmitEvidenceResponseAmino): _53.MsgSubmitEvidenceResponse;
                toAmino(message: _53.MsgSubmitEvidenceResponse): _53.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _53.MsgSubmitEvidenceResponseAminoMsg): _53.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _53.MsgSubmitEvidenceResponse): _53.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _53.MsgSubmitEvidenceResponseProtoMsg): _53.MsgSubmitEvidenceResponse;
                toProto(message: _53.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _53.MsgSubmitEvidenceResponse): _53.MsgSubmitEvidenceResponseProtoMsg;
            };
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _52.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryEvidenceRequest;
                fromJSON(object: any): _52.QueryEvidenceRequest;
                toJSON(message: _52.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_52.QueryEvidenceRequest>): _52.QueryEvidenceRequest;
                fromAmino(object: _52.QueryEvidenceRequestAmino): _52.QueryEvidenceRequest;
                toAmino(message: _52.QueryEvidenceRequest): _52.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _52.QueryEvidenceRequestAminoMsg): _52.QueryEvidenceRequest;
                toAminoMsg(message: _52.QueryEvidenceRequest): _52.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _52.QueryEvidenceRequestProtoMsg): _52.QueryEvidenceRequest;
                toProto(message: _52.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryEvidenceRequest): _52.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _52.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryEvidenceResponse;
                fromJSON(object: any): _52.QueryEvidenceResponse;
                toJSON(message: _52.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_52.QueryEvidenceResponse>): _52.QueryEvidenceResponse;
                fromAmino(object: _52.QueryEvidenceResponseAmino): _52.QueryEvidenceResponse;
                toAmino(message: _52.QueryEvidenceResponse): _52.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _52.QueryEvidenceResponseAminoMsg): _52.QueryEvidenceResponse;
                toAminoMsg(message: _52.QueryEvidenceResponse): _52.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _52.QueryEvidenceResponseProtoMsg): _52.QueryEvidenceResponse;
                toProto(message: _52.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryEvidenceResponse): _52.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _52.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllEvidenceRequest;
                fromJSON(object: any): _52.QueryAllEvidenceRequest;
                toJSON(message: _52.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_52.QueryAllEvidenceRequest>): _52.QueryAllEvidenceRequest;
                fromAmino(object: _52.QueryAllEvidenceRequestAmino): _52.QueryAllEvidenceRequest;
                toAmino(message: _52.QueryAllEvidenceRequest): _52.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _52.QueryAllEvidenceRequestAminoMsg): _52.QueryAllEvidenceRequest;
                toAminoMsg(message: _52.QueryAllEvidenceRequest): _52.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllEvidenceRequestProtoMsg): _52.QueryAllEvidenceRequest;
                toProto(message: _52.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllEvidenceRequest): _52.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _52.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllEvidenceResponse;
                fromJSON(object: any): _52.QueryAllEvidenceResponse;
                toJSON(message: _52.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_52.QueryAllEvidenceResponse>): _52.QueryAllEvidenceResponse;
                fromAmino(object: _52.QueryAllEvidenceResponseAmino): _52.QueryAllEvidenceResponse;
                toAmino(message: _52.QueryAllEvidenceResponse): _52.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _52.QueryAllEvidenceResponseAminoMsg): _52.QueryAllEvidenceResponse;
                toAminoMsg(message: _52.QueryAllEvidenceResponse): _52.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllEvidenceResponseProtoMsg): _52.QueryAllEvidenceResponse;
                toProto(message: _52.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllEvidenceResponse): _52.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
                fromAmino(object: _51.GenesisStateAmino): _51.GenesisState;
                toAmino(message: _51.GenesisState): _51.GenesisStateAmino;
                fromAminoMsg(object: _51.GenesisStateAminoMsg): _51.GenesisState;
                toAminoMsg(message: _51.GenesisState): _51.GenesisStateAminoMsg;
                fromProtoMsg(message: _51.GenesisStateProtoMsg): _51.GenesisState;
                toProto(message: _51.GenesisState): Uint8Array;
                toProtoMsg(message: _51.GenesisState): _51.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _50.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Equivocation;
                fromJSON(object: any): _50.Equivocation;
                toJSON(message: _50.Equivocation): unknown;
                fromPartial(object: Partial<_50.Equivocation>): _50.Equivocation;
                fromAmino(object: _50.EquivocationAmino): _50.Equivocation;
                toAmino(message: _50.Equivocation): _50.EquivocationAmino;
                fromAminoMsg(object: _50.EquivocationAminoMsg): _50.Equivocation;
                toAminoMsg(message: _50.Equivocation): _50.EquivocationAminoMsg;
                fromProtoMsg(message: _50.EquivocationProtoMsg): _50.Equivocation;
                toProto(message: _50.Equivocation): Uint8Array;
                toProtoMsg(message: _50.Equivocation): _50.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _56.QueryAllowanceRequest): Promise<_56.QueryAllowanceResponse>;
                allowances(request: _56.QueryAllowancesRequest): Promise<_56.QueryAllowancesResponse>;
                allowancesByGranter(request: _56.QueryAllowancesByGranterRequest): Promise<_56.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _57.MsgGrantAllowance) => _57.MsgGrantAllowanceAmino;
                    fromAmino: (object: _57.MsgGrantAllowanceAmino) => _57.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _57.MsgRevokeAllowance) => _57.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _57.MsgRevokeAllowanceAmino) => _57.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _57.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgGrantAllowance;
                fromJSON(object: any): _57.MsgGrantAllowance;
                toJSON(message: _57.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_57.MsgGrantAllowance>): _57.MsgGrantAllowance;
                fromAmino(object: _57.MsgGrantAllowanceAmino): _57.MsgGrantAllowance;
                toAmino(message: _57.MsgGrantAllowance): _57.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _57.MsgGrantAllowanceAminoMsg): _57.MsgGrantAllowance;
                toAminoMsg(message: _57.MsgGrantAllowance): _57.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _57.MsgGrantAllowanceProtoMsg): _57.MsgGrantAllowance;
                toProto(message: _57.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _57.MsgGrantAllowance): _57.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _57.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgGrantAllowanceResponse;
                fromJSON(_: any): _57.MsgGrantAllowanceResponse;
                toJSON(_: _57.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_57.MsgGrantAllowanceResponse>): _57.MsgGrantAllowanceResponse;
                fromAmino(_: _57.MsgGrantAllowanceResponseAmino): _57.MsgGrantAllowanceResponse;
                toAmino(_: _57.MsgGrantAllowanceResponse): _57.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _57.MsgGrantAllowanceResponseAminoMsg): _57.MsgGrantAllowanceResponse;
                toAminoMsg(message: _57.MsgGrantAllowanceResponse): _57.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _57.MsgGrantAllowanceResponseProtoMsg): _57.MsgGrantAllowanceResponse;
                toProto(message: _57.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _57.MsgGrantAllowanceResponse): _57.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _57.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgRevokeAllowance;
                fromJSON(object: any): _57.MsgRevokeAllowance;
                toJSON(message: _57.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_57.MsgRevokeAllowance>): _57.MsgRevokeAllowance;
                fromAmino(object: _57.MsgRevokeAllowanceAmino): _57.MsgRevokeAllowance;
                toAmino(message: _57.MsgRevokeAllowance): _57.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _57.MsgRevokeAllowanceAminoMsg): _57.MsgRevokeAllowance;
                toAminoMsg(message: _57.MsgRevokeAllowance): _57.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _57.MsgRevokeAllowanceProtoMsg): _57.MsgRevokeAllowance;
                toProto(message: _57.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _57.MsgRevokeAllowance): _57.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _57.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _57.MsgRevokeAllowanceResponse;
                toJSON(_: _57.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_57.MsgRevokeAllowanceResponse>): _57.MsgRevokeAllowanceResponse;
                fromAmino(_: _57.MsgRevokeAllowanceResponseAmino): _57.MsgRevokeAllowanceResponse;
                toAmino(_: _57.MsgRevokeAllowanceResponse): _57.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _57.MsgRevokeAllowanceResponseAminoMsg): _57.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _57.MsgRevokeAllowanceResponse): _57.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _57.MsgRevokeAllowanceResponseProtoMsg): _57.MsgRevokeAllowanceResponse;
                toProto(message: _57.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _57.MsgRevokeAllowanceResponse): _57.MsgRevokeAllowanceResponseProtoMsg;
            };
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllowanceRequest;
                fromJSON(object: any): _56.QueryAllowanceRequest;
                toJSON(message: _56.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_56.QueryAllowanceRequest>): _56.QueryAllowanceRequest;
                fromAmino(object: _56.QueryAllowanceRequestAmino): _56.QueryAllowanceRequest;
                toAmino(message: _56.QueryAllowanceRequest): _56.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _56.QueryAllowanceRequestAminoMsg): _56.QueryAllowanceRequest;
                toAminoMsg(message: _56.QueryAllowanceRequest): _56.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllowanceRequestProtoMsg): _56.QueryAllowanceRequest;
                toProto(message: _56.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllowanceRequest): _56.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllowanceResponse;
                fromJSON(object: any): _56.QueryAllowanceResponse;
                toJSON(message: _56.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_56.QueryAllowanceResponse>): _56.QueryAllowanceResponse;
                fromAmino(object: _56.QueryAllowanceResponseAmino): _56.QueryAllowanceResponse;
                toAmino(message: _56.QueryAllowanceResponse): _56.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _56.QueryAllowanceResponseAminoMsg): _56.QueryAllowanceResponse;
                toAminoMsg(message: _56.QueryAllowanceResponse): _56.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllowanceResponseProtoMsg): _56.QueryAllowanceResponse;
                toProto(message: _56.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllowanceResponse): _56.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllowancesRequest;
                fromJSON(object: any): _56.QueryAllowancesRequest;
                toJSON(message: _56.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_56.QueryAllowancesRequest>): _56.QueryAllowancesRequest;
                fromAmino(object: _56.QueryAllowancesRequestAmino): _56.QueryAllowancesRequest;
                toAmino(message: _56.QueryAllowancesRequest): _56.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _56.QueryAllowancesRequestAminoMsg): _56.QueryAllowancesRequest;
                toAminoMsg(message: _56.QueryAllowancesRequest): _56.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesRequestProtoMsg): _56.QueryAllowancesRequest;
                toProto(message: _56.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesRequest): _56.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllowancesResponse;
                fromJSON(object: any): _56.QueryAllowancesResponse;
                toJSON(message: _56.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_56.QueryAllowancesResponse>): _56.QueryAllowancesResponse;
                fromAmino(object: _56.QueryAllowancesResponseAmino): _56.QueryAllowancesResponse;
                toAmino(message: _56.QueryAllowancesResponse): _56.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _56.QueryAllowancesResponseAminoMsg): _56.QueryAllowancesResponse;
                toAminoMsg(message: _56.QueryAllowancesResponse): _56.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesResponseProtoMsg): _56.QueryAllowancesResponse;
                toProto(message: _56.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesResponse): _56.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _56.QueryAllowancesByGranterRequest;
                toJSON(message: _56.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_56.QueryAllowancesByGranterRequest>): _56.QueryAllowancesByGranterRequest;
                fromAmino(object: _56.QueryAllowancesByGranterRequestAmino): _56.QueryAllowancesByGranterRequest;
                toAmino(message: _56.QueryAllowancesByGranterRequest): _56.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _56.QueryAllowancesByGranterRequestAminoMsg): _56.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _56.QueryAllowancesByGranterRequest): _56.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesByGranterRequestProtoMsg): _56.QueryAllowancesByGranterRequest;
                toProto(message: _56.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesByGranterRequest): _56.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _56.QueryAllowancesByGranterResponse;
                toJSON(message: _56.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_56.QueryAllowancesByGranterResponse>): _56.QueryAllowancesByGranterResponse;
                fromAmino(object: _56.QueryAllowancesByGranterResponseAmino): _56.QueryAllowancesByGranterResponse;
                toAmino(message: _56.QueryAllowancesByGranterResponse): _56.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _56.QueryAllowancesByGranterResponseAminoMsg): _56.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _56.QueryAllowancesByGranterResponse): _56.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesByGranterResponseProtoMsg): _56.QueryAllowancesByGranterResponse;
                toProto(message: _56.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesByGranterResponse): _56.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromJSON(object: any): _55.GenesisState;
                toJSON(message: _55.GenesisState): unknown;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
                fromAmino(object: _55.GenesisStateAmino): _55.GenesisState;
                toAmino(message: _55.GenesisState): _55.GenesisStateAmino;
                fromAminoMsg(object: _55.GenesisStateAminoMsg): _55.GenesisState;
                toAminoMsg(message: _55.GenesisState): _55.GenesisStateAminoMsg;
                fromProtoMsg(message: _55.GenesisStateProtoMsg): _55.GenesisState;
                toProto(message: _55.GenesisState): Uint8Array;
                toProtoMsg(message: _55.GenesisState): _55.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _54.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.BasicAllowance;
                fromJSON(object: any): _54.BasicAllowance;
                toJSON(message: _54.BasicAllowance): unknown;
                fromPartial(object: Partial<_54.BasicAllowance>): _54.BasicAllowance;
                fromAmino(object: _54.BasicAllowanceAmino): _54.BasicAllowance;
                toAmino(message: _54.BasicAllowance): _54.BasicAllowanceAmino;
                fromAminoMsg(object: _54.BasicAllowanceAminoMsg): _54.BasicAllowance;
                toAminoMsg(message: _54.BasicAllowance): _54.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _54.BasicAllowanceProtoMsg): _54.BasicAllowance;
                toProto(message: _54.BasicAllowance): Uint8Array;
                toProtoMsg(message: _54.BasicAllowance): _54.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _54.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.PeriodicAllowance;
                fromJSON(object: any): _54.PeriodicAllowance;
                toJSON(message: _54.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_54.PeriodicAllowance>): _54.PeriodicAllowance;
                fromAmino(object: _54.PeriodicAllowanceAmino): _54.PeriodicAllowance;
                toAmino(message: _54.PeriodicAllowance): _54.PeriodicAllowanceAmino;
                fromAminoMsg(object: _54.PeriodicAllowanceAminoMsg): _54.PeriodicAllowance;
                toAminoMsg(message: _54.PeriodicAllowance): _54.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _54.PeriodicAllowanceProtoMsg): _54.PeriodicAllowance;
                toProto(message: _54.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _54.PeriodicAllowance): _54.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _54.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.AllowedMsgAllowance;
                fromJSON(object: any): _54.AllowedMsgAllowance;
                toJSON(message: _54.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_54.AllowedMsgAllowance>): _54.AllowedMsgAllowance;
                fromAmino(object: _54.AllowedMsgAllowanceAmino): _54.AllowedMsgAllowance;
                toAmino(message: _54.AllowedMsgAllowance): _54.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _54.AllowedMsgAllowanceAminoMsg): _54.AllowedMsgAllowance;
                toAminoMsg(message: _54.AllowedMsgAllowance): _54.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _54.AllowedMsgAllowanceProtoMsg): _54.AllowedMsgAllowance;
                toProto(message: _54.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _54.AllowedMsgAllowance): _54.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _54.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Grant;
                fromJSON(object: any): _54.Grant;
                toJSON(message: _54.Grant): unknown;
                fromPartial(object: Partial<_54.Grant>): _54.Grant;
                fromAmino(object: _54.GrantAmino): _54.Grant;
                toAmino(message: _54.Grant): _54.GrantAmino;
                fromAminoMsg(object: _54.GrantAminoMsg): _54.Grant;
                toAminoMsg(message: _54.Grant): _54.GrantAminoMsg;
                fromProtoMsg(message: _54.GrantProtoMsg): _54.Grant;
                toProto(message: _54.Grant): Uint8Array;
                toProtoMsg(message: _54.Grant): _54.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState;
                fromJSON(object: any): _58.GenesisState;
                toJSON(message: _58.GenesisState): unknown;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
                toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
                fromAminoMsg(object: _58.GenesisStateAminoMsg): _58.GenesisState;
                toAminoMsg(message: _58.GenesisState): _58.GenesisStateAminoMsg;
                fromProtoMsg(message: _58.GenesisStateProtoMsg): _58.GenesisState;
                toProto(message: _58.GenesisState): Uint8Array;
                toProtoMsg(message: _58.GenesisState): _58.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _283.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _264.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _62.MsgExecLegacyContent;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _62.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _62.MsgExecLegacyContent;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _62.MsgSubmitProposal) => _62.MsgSubmitProposalAmino;
                    fromAmino: (object: _62.MsgSubmitProposalAmino) => _62.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _62.MsgExecLegacyContent) => _62.MsgExecLegacyContentAmino;
                    fromAmino: (object: _62.MsgExecLegacyContentAmino) => _62.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _62.MsgVote) => _62.MsgVoteAmino;
                    fromAmino: (object: _62.MsgVoteAmino) => _62.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _62.MsgVoteWeighted) => _62.MsgVoteWeightedAmino;
                    fromAmino: (object: _62.MsgVoteWeightedAmino) => _62.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _62.MsgDeposit) => _62.MsgDepositAmino;
                    fromAmino: (object: _62.MsgDepositAmino) => _62.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _62.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposal;
                fromJSON(object: any): _62.MsgSubmitProposal;
                toJSON(message: _62.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_62.MsgSubmitProposal>): _62.MsgSubmitProposal;
                fromAmino(object: _62.MsgSubmitProposalAmino): _62.MsgSubmitProposal;
                toAmino(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalAminoMsg): _62.MsgSubmitProposal;
                toAminoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalProtoMsg): _62.MsgSubmitProposal;
                toProto(message: _62.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _62.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposalResponse;
                fromJSON(object: any): _62.MsgSubmitProposalResponse;
                toJSON(message: _62.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_62.MsgSubmitProposalResponse>): _62.MsgSubmitProposalResponse;
                fromAmino(object: _62.MsgSubmitProposalResponseAmino): _62.MsgSubmitProposalResponse;
                toAmino(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalResponseAminoMsg): _62.MsgSubmitProposalResponse;
                toAminoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalResponseProtoMsg): _62.MsgSubmitProposalResponse;
                toProto(message: _62.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _62.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExecLegacyContent;
                fromJSON(object: any): _62.MsgExecLegacyContent;
                toJSON(message: _62.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_62.MsgExecLegacyContent>): _62.MsgExecLegacyContent;
                fromAmino(object: _62.MsgExecLegacyContentAmino): _62.MsgExecLegacyContent;
                toAmino(message: _62.MsgExecLegacyContent): _62.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _62.MsgExecLegacyContentAminoMsg): _62.MsgExecLegacyContent;
                toAminoMsg(message: _62.MsgExecLegacyContent): _62.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _62.MsgExecLegacyContentProtoMsg): _62.MsgExecLegacyContent;
                toProto(message: _62.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _62.MsgExecLegacyContent): _62.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _62.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExecLegacyContentResponse;
                fromJSON(_: any): _62.MsgExecLegacyContentResponse;
                toJSON(_: _62.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_62.MsgExecLegacyContentResponse>): _62.MsgExecLegacyContentResponse;
                fromAmino(_: _62.MsgExecLegacyContentResponseAmino): _62.MsgExecLegacyContentResponse;
                toAmino(_: _62.MsgExecLegacyContentResponse): _62.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _62.MsgExecLegacyContentResponseAminoMsg): _62.MsgExecLegacyContentResponse;
                toAminoMsg(message: _62.MsgExecLegacyContentResponse): _62.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _62.MsgExecLegacyContentResponseProtoMsg): _62.MsgExecLegacyContentResponse;
                toProto(message: _62.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _62.MsgExecLegacyContentResponse): _62.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _62.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVote;
                fromJSON(object: any): _62.MsgVote;
                toJSON(message: _62.MsgVote): unknown;
                fromPartial(object: Partial<_62.MsgVote>): _62.MsgVote;
                fromAmino(object: _62.MsgVoteAmino): _62.MsgVote;
                toAmino(message: _62.MsgVote): _62.MsgVoteAmino;
                fromAminoMsg(object: _62.MsgVoteAminoMsg): _62.MsgVote;
                toAminoMsg(message: _62.MsgVote): _62.MsgVoteAminoMsg;
                fromProtoMsg(message: _62.MsgVoteProtoMsg): _62.MsgVote;
                toProto(message: _62.MsgVote): Uint8Array;
                toProtoMsg(message: _62.MsgVote): _62.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _62.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVoteResponse;
                fromJSON(_: any): _62.MsgVoteResponse;
                toJSON(_: _62.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_62.MsgVoteResponse>): _62.MsgVoteResponse;
                fromAmino(_: _62.MsgVoteResponseAmino): _62.MsgVoteResponse;
                toAmino(_: _62.MsgVoteResponse): _62.MsgVoteResponseAmino;
                fromAminoMsg(object: _62.MsgVoteResponseAminoMsg): _62.MsgVoteResponse;
                toAminoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _62.MsgVoteResponseProtoMsg): _62.MsgVoteResponse;
                toProto(message: _62.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _62.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVoteWeighted;
                fromJSON(object: any): _62.MsgVoteWeighted;
                toJSON(message: _62.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_62.MsgVoteWeighted>): _62.MsgVoteWeighted;
                fromAmino(object: _62.MsgVoteWeightedAmino): _62.MsgVoteWeighted;
                toAmino(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedAmino;
                fromAminoMsg(object: _62.MsgVoteWeightedAminoMsg): _62.MsgVoteWeighted;
                toAminoMsg(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _62.MsgVoteWeightedProtoMsg): _62.MsgVoteWeighted;
                toProto(message: _62.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _62.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVoteWeightedResponse;
                fromJSON(_: any): _62.MsgVoteWeightedResponse;
                toJSON(_: _62.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_62.MsgVoteWeightedResponse>): _62.MsgVoteWeightedResponse;
                fromAmino(_: _62.MsgVoteWeightedResponseAmino): _62.MsgVoteWeightedResponse;
                toAmino(_: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _62.MsgVoteWeightedResponseAminoMsg): _62.MsgVoteWeightedResponse;
                toAminoMsg(message: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _62.MsgVoteWeightedResponseProtoMsg): _62.MsgVoteWeightedResponse;
                toProto(message: _62.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _62.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgDeposit;
                fromJSON(object: any): _62.MsgDeposit;
                toJSON(message: _62.MsgDeposit): unknown;
                fromPartial(object: Partial<_62.MsgDeposit>): _62.MsgDeposit;
                fromAmino(object: _62.MsgDepositAmino): _62.MsgDeposit;
                toAmino(message: _62.MsgDeposit): _62.MsgDepositAmino;
                fromAminoMsg(object: _62.MsgDepositAminoMsg): _62.MsgDeposit;
                toAminoMsg(message: _62.MsgDeposit): _62.MsgDepositAminoMsg;
                fromProtoMsg(message: _62.MsgDepositProtoMsg): _62.MsgDeposit;
                toProto(message: _62.MsgDeposit): Uint8Array;
                toProtoMsg(message: _62.MsgDeposit): _62.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _62.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgDepositResponse;
                fromJSON(_: any): _62.MsgDepositResponse;
                toJSON(_: _62.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_62.MsgDepositResponse>): _62.MsgDepositResponse;
                fromAmino(_: _62.MsgDepositResponseAmino): _62.MsgDepositResponse;
                toAmino(_: _62.MsgDepositResponse): _62.MsgDepositResponseAmino;
                fromAminoMsg(object: _62.MsgDepositResponseAminoMsg): _62.MsgDepositResponse;
                toAminoMsg(message: _62.MsgDepositResponse): _62.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _62.MsgDepositResponseProtoMsg): _62.MsgDepositResponse;
                toProto(message: _62.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _62.MsgDepositResponse): _62.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _61.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalRequest;
                fromJSON(object: any): _61.QueryProposalRequest;
                toJSON(message: _61.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_61.QueryProposalRequest>): _61.QueryProposalRequest;
                fromAmino(object: _61.QueryProposalRequestAmino): _61.QueryProposalRequest;
                toAmino(message: _61.QueryProposalRequest): _61.QueryProposalRequestAmino;
                fromAminoMsg(object: _61.QueryProposalRequestAminoMsg): _61.QueryProposalRequest;
                toAminoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalRequestProtoMsg): _61.QueryProposalRequest;
                toProto(message: _61.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _61.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalResponse;
                fromJSON(object: any): _61.QueryProposalResponse;
                toJSON(message: _61.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_61.QueryProposalResponse>): _61.QueryProposalResponse;
                fromAmino(object: _61.QueryProposalResponseAmino): _61.QueryProposalResponse;
                toAmino(message: _61.QueryProposalResponse): _61.QueryProposalResponseAmino;
                fromAminoMsg(object: _61.QueryProposalResponseAminoMsg): _61.QueryProposalResponse;
                toAminoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalResponseProtoMsg): _61.QueryProposalResponse;
                toProto(message: _61.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _61.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsRequest;
                fromJSON(object: any): _61.QueryProposalsRequest;
                toJSON(message: _61.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_61.QueryProposalsRequest>): _61.QueryProposalsRequest;
                fromAmino(object: _61.QueryProposalsRequestAmino): _61.QueryProposalsRequest;
                toAmino(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestAmino;
                fromAminoMsg(object: _61.QueryProposalsRequestAminoMsg): _61.QueryProposalsRequest;
                toAminoMsg(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsRequestProtoMsg): _61.QueryProposalsRequest;
                toProto(message: _61.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _61.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsResponse;
                fromJSON(object: any): _61.QueryProposalsResponse;
                toJSON(message: _61.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_61.QueryProposalsResponse>): _61.QueryProposalsResponse;
                fromAmino(object: _61.QueryProposalsResponseAmino): _61.QueryProposalsResponse;
                toAmino(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseAmino;
                fromAminoMsg(object: _61.QueryProposalsResponseAminoMsg): _61.QueryProposalsResponse;
                toAminoMsg(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsResponseProtoMsg): _61.QueryProposalsResponse;
                toProto(message: _61.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _61.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteRequest;
                fromJSON(object: any): _61.QueryVoteRequest;
                toJSON(message: _61.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_61.QueryVoteRequest>): _61.QueryVoteRequest;
                fromAmino(object: _61.QueryVoteRequestAmino): _61.QueryVoteRequest;
                toAmino(message: _61.QueryVoteRequest): _61.QueryVoteRequestAmino;
                fromAminoMsg(object: _61.QueryVoteRequestAminoMsg): _61.QueryVoteRequest;
                toAminoMsg(message: _61.QueryVoteRequest): _61.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVoteRequestProtoMsg): _61.QueryVoteRequest;
                toProto(message: _61.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVoteRequest): _61.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _61.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteResponse;
                fromJSON(object: any): _61.QueryVoteResponse;
                toJSON(message: _61.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_61.QueryVoteResponse>): _61.QueryVoteResponse;
                fromAmino(object: _61.QueryVoteResponseAmino): _61.QueryVoteResponse;
                toAmino(message: _61.QueryVoteResponse): _61.QueryVoteResponseAmino;
                fromAminoMsg(object: _61.QueryVoteResponseAminoMsg): _61.QueryVoteResponse;
                toAminoMsg(message: _61.QueryVoteResponse): _61.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVoteResponseProtoMsg): _61.QueryVoteResponse;
                toProto(message: _61.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVoteResponse): _61.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _61.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesRequest;
                fromJSON(object: any): _61.QueryVotesRequest;
                toJSON(message: _61.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_61.QueryVotesRequest>): _61.QueryVotesRequest;
                fromAmino(object: _61.QueryVotesRequestAmino): _61.QueryVotesRequest;
                toAmino(message: _61.QueryVotesRequest): _61.QueryVotesRequestAmino;
                fromAminoMsg(object: _61.QueryVotesRequestAminoMsg): _61.QueryVotesRequest;
                toAminoMsg(message: _61.QueryVotesRequest): _61.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVotesRequestProtoMsg): _61.QueryVotesRequest;
                toProto(message: _61.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVotesRequest): _61.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _61.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesResponse;
                fromJSON(object: any): _61.QueryVotesResponse;
                toJSON(message: _61.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_61.QueryVotesResponse>): _61.QueryVotesResponse;
                fromAmino(object: _61.QueryVotesResponseAmino): _61.QueryVotesResponse;
                toAmino(message: _61.QueryVotesResponse): _61.QueryVotesResponseAmino;
                fromAminoMsg(object: _61.QueryVotesResponseAminoMsg): _61.QueryVotesResponse;
                toAminoMsg(message: _61.QueryVotesResponse): _61.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVotesResponseProtoMsg): _61.QueryVotesResponse;
                toProto(message: _61.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVotesResponse): _61.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                fromJSON(object: any): _61.QueryParamsRequest;
                toJSON(message: _61.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
                fromAmino(object: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                toAmino(message: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
                fromAminoMsg(object: _61.QueryParamsRequestAminoMsg): _61.QueryParamsRequest;
                toAminoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryParamsRequestProtoMsg): _61.QueryParamsRequest;
                toProto(message: _61.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponse;
                fromJSON(object: any): _61.QueryParamsResponse;
                toJSON(message: _61.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
                fromAmino(object: _61.QueryParamsResponseAmino): _61.QueryParamsResponse;
                toAmino(message: _61.QueryParamsResponse): _61.QueryParamsResponseAmino;
                fromAminoMsg(object: _61.QueryParamsResponseAminoMsg): _61.QueryParamsResponse;
                toAminoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryParamsResponseProtoMsg): _61.QueryParamsResponse;
                toProto(message: _61.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _61.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDepositRequest;
                fromJSON(object: any): _61.QueryDepositRequest;
                toJSON(message: _61.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_61.QueryDepositRequest>): _61.QueryDepositRequest;
                fromAmino(object: _61.QueryDepositRequestAmino): _61.QueryDepositRequest;
                toAmino(message: _61.QueryDepositRequest): _61.QueryDepositRequestAmino;
                fromAminoMsg(object: _61.QueryDepositRequestAminoMsg): _61.QueryDepositRequest;
                toAminoMsg(message: _61.QueryDepositRequest): _61.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDepositRequestProtoMsg): _61.QueryDepositRequest;
                toProto(message: _61.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDepositRequest): _61.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _61.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDepositResponse;
                fromJSON(object: any): _61.QueryDepositResponse;
                toJSON(message: _61.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_61.QueryDepositResponse>): _61.QueryDepositResponse;
                fromAmino(object: _61.QueryDepositResponseAmino): _61.QueryDepositResponse;
                toAmino(message: _61.QueryDepositResponse): _61.QueryDepositResponseAmino;
                fromAminoMsg(object: _61.QueryDepositResponseAminoMsg): _61.QueryDepositResponse;
                toAminoMsg(message: _61.QueryDepositResponse): _61.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDepositResponseProtoMsg): _61.QueryDepositResponse;
                toProto(message: _61.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDepositResponse): _61.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _61.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDepositsRequest;
                fromJSON(object: any): _61.QueryDepositsRequest;
                toJSON(message: _61.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_61.QueryDepositsRequest>): _61.QueryDepositsRequest;
                fromAmino(object: _61.QueryDepositsRequestAmino): _61.QueryDepositsRequest;
                toAmino(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestAmino;
                fromAminoMsg(object: _61.QueryDepositsRequestAminoMsg): _61.QueryDepositsRequest;
                toAminoMsg(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDepositsRequestProtoMsg): _61.QueryDepositsRequest;
                toProto(message: _61.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _61.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDepositsResponse;
                fromJSON(object: any): _61.QueryDepositsResponse;
                toJSON(message: _61.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_61.QueryDepositsResponse>): _61.QueryDepositsResponse;
                fromAmino(object: _61.QueryDepositsResponseAmino): _61.QueryDepositsResponse;
                toAmino(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseAmino;
                fromAminoMsg(object: _61.QueryDepositsResponseAminoMsg): _61.QueryDepositsResponse;
                toAminoMsg(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDepositsResponseProtoMsg): _61.QueryDepositsResponse;
                toProto(message: _61.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _61.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultRequest;
                fromJSON(object: any): _61.QueryTallyResultRequest;
                toJSON(message: _61.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_61.QueryTallyResultRequest>): _61.QueryTallyResultRequest;
                fromAmino(object: _61.QueryTallyResultRequestAmino): _61.QueryTallyResultRequest;
                toAmino(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _61.QueryTallyResultRequestAminoMsg): _61.QueryTallyResultRequest;
                toAminoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultRequestProtoMsg): _61.QueryTallyResultRequest;
                toProto(message: _61.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _61.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultResponse;
                fromJSON(object: any): _61.QueryTallyResultResponse;
                toJSON(message: _61.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_61.QueryTallyResultResponse>): _61.QueryTallyResultResponse;
                fromAmino(object: _61.QueryTallyResultResponseAmino): _61.QueryTallyResultResponse;
                toAmino(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _61.QueryTallyResultResponseAminoMsg): _61.QueryTallyResultResponse;
                toAminoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultResponseProtoMsg): _61.QueryTallyResultResponse;
                toProto(message: _61.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _60.VoteOption;
            voteOptionToJSON(object: _60.VoteOption): string;
            proposalStatusFromJSON(object: any): _60.ProposalStatus;
            proposalStatusToJSON(object: _60.ProposalStatus): string;
            VoteOption: typeof _60.VoteOption;
            VoteOptionSDKType: typeof _60.VoteOption;
            VoteOptionAmino: typeof _60.VoteOption;
            ProposalStatus: typeof _60.ProposalStatus;
            ProposalStatusSDKType: typeof _60.ProposalStatus;
            ProposalStatusAmino: typeof _60.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _60.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.WeightedVoteOption;
                fromJSON(object: any): _60.WeightedVoteOption;
                toJSON(message: _60.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_60.WeightedVoteOption>): _60.WeightedVoteOption;
                fromAmino(object: _60.WeightedVoteOptionAmino): _60.WeightedVoteOption;
                toAmino(message: _60.WeightedVoteOption): _60.WeightedVoteOptionAmino;
                fromAminoMsg(object: _60.WeightedVoteOptionAminoMsg): _60.WeightedVoteOption;
                toAminoMsg(message: _60.WeightedVoteOption): _60.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _60.WeightedVoteOptionProtoMsg): _60.WeightedVoteOption;
                toProto(message: _60.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _60.WeightedVoteOption): _60.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _60.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Deposit;
                fromJSON(object: any): _60.Deposit;
                toJSON(message: _60.Deposit): unknown;
                fromPartial(object: Partial<_60.Deposit>): _60.Deposit;
                fromAmino(object: _60.DepositAmino): _60.Deposit;
                toAmino(message: _60.Deposit): _60.DepositAmino;
                fromAminoMsg(object: _60.DepositAminoMsg): _60.Deposit;
                toAminoMsg(message: _60.Deposit): _60.DepositAminoMsg;
                fromProtoMsg(message: _60.DepositProtoMsg): _60.Deposit;
                toProto(message: _60.Deposit): Uint8Array;
                toProtoMsg(message: _60.Deposit): _60.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _60.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Proposal;
                fromJSON(object: any): _60.Proposal;
                toJSON(message: _60.Proposal): unknown;
                fromPartial(object: Partial<_60.Proposal>): _60.Proposal;
                fromAmino(object: _60.ProposalAmino): _60.Proposal;
                toAmino(message: _60.Proposal): _60.ProposalAmino;
                fromAminoMsg(object: _60.ProposalAminoMsg): _60.Proposal;
                toAminoMsg(message: _60.Proposal): _60.ProposalAminoMsg;
                fromProtoMsg(message: _60.ProposalProtoMsg): _60.Proposal;
                toProto(message: _60.Proposal): Uint8Array;
                toProtoMsg(message: _60.Proposal): _60.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _60.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.TallyResult;
                fromJSON(object: any): _60.TallyResult;
                toJSON(message: _60.TallyResult): unknown;
                fromPartial(object: Partial<_60.TallyResult>): _60.TallyResult;
                fromAmino(object: _60.TallyResultAmino): _60.TallyResult;
                toAmino(message: _60.TallyResult): _60.TallyResultAmino;
                fromAminoMsg(object: _60.TallyResultAminoMsg): _60.TallyResult;
                toAminoMsg(message: _60.TallyResult): _60.TallyResultAminoMsg;
                fromProtoMsg(message: _60.TallyResultProtoMsg): _60.TallyResult;
                toProto(message: _60.TallyResult): Uint8Array;
                toProtoMsg(message: _60.TallyResult): _60.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _60.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Vote;
                fromJSON(object: any): _60.Vote;
                toJSON(message: _60.Vote): unknown;
                fromPartial(object: Partial<_60.Vote>): _60.Vote;
                fromAmino(object: _60.VoteAmino): _60.Vote;
                toAmino(message: _60.Vote): _60.VoteAmino;
                fromAminoMsg(object: _60.VoteAminoMsg): _60.Vote;
                toAminoMsg(message: _60.Vote): _60.VoteAminoMsg;
                fromProtoMsg(message: _60.VoteProtoMsg): _60.Vote;
                toProto(message: _60.Vote): Uint8Array;
                toProtoMsg(message: _60.Vote): _60.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _60.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DepositParams;
                fromJSON(object: any): _60.DepositParams;
                toJSON(message: _60.DepositParams): unknown;
                fromPartial(object: Partial<_60.DepositParams>): _60.DepositParams;
                fromAmino(object: _60.DepositParamsAmino): _60.DepositParams;
                toAmino(message: _60.DepositParams): _60.DepositParamsAmino;
                fromAminoMsg(object: _60.DepositParamsAminoMsg): _60.DepositParams;
                toAminoMsg(message: _60.DepositParams): _60.DepositParamsAminoMsg;
                fromProtoMsg(message: _60.DepositParamsProtoMsg): _60.DepositParams;
                toProto(message: _60.DepositParams): Uint8Array;
                toProtoMsg(message: _60.DepositParams): _60.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _60.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.VotingParams;
                fromJSON(object: any): _60.VotingParams;
                toJSON(message: _60.VotingParams): unknown;
                fromPartial(object: Partial<_60.VotingParams>): _60.VotingParams;
                fromAmino(object: _60.VotingParamsAmino): _60.VotingParams;
                toAmino(message: _60.VotingParams): _60.VotingParamsAmino;
                fromAminoMsg(object: _60.VotingParamsAminoMsg): _60.VotingParams;
                toAminoMsg(message: _60.VotingParams): _60.VotingParamsAminoMsg;
                fromProtoMsg(message: _60.VotingParamsProtoMsg): _60.VotingParams;
                toProto(message: _60.VotingParams): Uint8Array;
                toProtoMsg(message: _60.VotingParams): _60.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _60.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.TallyParams;
                fromJSON(object: any): _60.TallyParams;
                toJSON(message: _60.TallyParams): unknown;
                fromPartial(object: Partial<_60.TallyParams>): _60.TallyParams;
                fromAmino(object: _60.TallyParamsAmino): _60.TallyParams;
                toAmino(message: _60.TallyParams): _60.TallyParamsAmino;
                fromAminoMsg(object: _60.TallyParamsAminoMsg): _60.TallyParams;
                toAminoMsg(message: _60.TallyParams): _60.TallyParamsAminoMsg;
                fromProtoMsg(message: _60.TallyParamsProtoMsg): _60.TallyParams;
                toProto(message: _60.TallyParams): Uint8Array;
                toProtoMsg(message: _60.TallyParams): _60.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
                fromJSON(object: any): _59.GenesisState;
                toJSON(message: _59.GenesisState): unknown;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
                fromAmino(object: _59.GenesisStateAmino): _59.GenesisState;
                toAmino(message: _59.GenesisState): _59.GenesisStateAmino;
                fromAminoMsg(object: _59.GenesisStateAminoMsg): _59.GenesisState;
                toAminoMsg(message: _59.GenesisState): _59.GenesisStateAminoMsg;
                fromProtoMsg(message: _59.GenesisStateProtoMsg): _59.GenesisState;
                toProto(message: _59.GenesisState): Uint8Array;
                toProtoMsg(message: _59.GenesisState): _59.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                proposals(request: _65.QueryProposalsRequest): Promise<_65.QueryProposalsResponse>;
                vote(request: _65.QueryVoteRequest): Promise<_65.QueryVoteResponse>;
                votes(request: _65.QueryVotesRequest): Promise<_65.QueryVotesResponse>;
                params(request: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                deposit(request: _65.QueryDepositRequest): Promise<_65.QueryDepositResponse>;
                deposits(request: _65.QueryDepositsRequest): Promise<_65.QueryDepositsResponse>;
                tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _265.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _66.MsgSubmitProposal) => _66.MsgSubmitProposalAmino;
                    fromAmino: (object: _66.MsgSubmitProposalAmino) => _66.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _66.MsgVote) => _66.MsgVoteAmino;
                    fromAmino: (object: _66.MsgVoteAmino) => _66.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _66.MsgVoteWeighted) => _66.MsgVoteWeightedAmino;
                    fromAmino: (object: _66.MsgVoteWeightedAmino) => _66.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _66.MsgDeposit) => _66.MsgDepositAmino;
                    fromAmino: (object: _66.MsgDepositAmino) => _66.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _66.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgSubmitProposal;
                fromJSON(object: any): _66.MsgSubmitProposal;
                toJSON(message: _66.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_66.MsgSubmitProposal>): _66.MsgSubmitProposal;
                fromAmino(object: _66.MsgSubmitProposalAmino): _66.MsgSubmitProposal;
                toAmino(message: _66.MsgSubmitProposal): _66.MsgSubmitProposalAmino;
                fromAminoMsg(object: _66.MsgSubmitProposalAminoMsg): _66.MsgSubmitProposal;
                toAminoMsg(message: _66.MsgSubmitProposal): _66.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitProposalProtoMsg): _66.MsgSubmitProposal;
                toProto(message: _66.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitProposal): _66.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _66.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgSubmitProposalResponse;
                fromJSON(object: any): _66.MsgSubmitProposalResponse;
                toJSON(message: _66.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_66.MsgSubmitProposalResponse>): _66.MsgSubmitProposalResponse;
                fromAmino(object: _66.MsgSubmitProposalResponseAmino): _66.MsgSubmitProposalResponse;
                toAmino(message: _66.MsgSubmitProposalResponse): _66.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _66.MsgSubmitProposalResponseAminoMsg): _66.MsgSubmitProposalResponse;
                toAminoMsg(message: _66.MsgSubmitProposalResponse): _66.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitProposalResponseProtoMsg): _66.MsgSubmitProposalResponse;
                toProto(message: _66.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitProposalResponse): _66.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _66.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgVote;
                fromJSON(object: any): _66.MsgVote;
                toJSON(message: _66.MsgVote): unknown;
                fromPartial(object: Partial<_66.MsgVote>): _66.MsgVote;
                fromAmino(object: _66.MsgVoteAmino): _66.MsgVote;
                toAmino(message: _66.MsgVote): _66.MsgVoteAmino;
                fromAminoMsg(object: _66.MsgVoteAminoMsg): _66.MsgVote;
                toAminoMsg(message: _66.MsgVote): _66.MsgVoteAminoMsg;
                fromProtoMsg(message: _66.MsgVoteProtoMsg): _66.MsgVote;
                toProto(message: _66.MsgVote): Uint8Array;
                toProtoMsg(message: _66.MsgVote): _66.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _66.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgVoteResponse;
                fromJSON(_: any): _66.MsgVoteResponse;
                toJSON(_: _66.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_66.MsgVoteResponse>): _66.MsgVoteResponse;
                fromAmino(_: _66.MsgVoteResponseAmino): _66.MsgVoteResponse;
                toAmino(_: _66.MsgVoteResponse): _66.MsgVoteResponseAmino;
                fromAminoMsg(object: _66.MsgVoteResponseAminoMsg): _66.MsgVoteResponse;
                toAminoMsg(message: _66.MsgVoteResponse): _66.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _66.MsgVoteResponseProtoMsg): _66.MsgVoteResponse;
                toProto(message: _66.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _66.MsgVoteResponse): _66.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _66.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgVoteWeighted;
                fromJSON(object: any): _66.MsgVoteWeighted;
                toJSON(message: _66.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_66.MsgVoteWeighted>): _66.MsgVoteWeighted;
                fromAmino(object: _66.MsgVoteWeightedAmino): _66.MsgVoteWeighted;
                toAmino(message: _66.MsgVoteWeighted): _66.MsgVoteWeightedAmino;
                fromAminoMsg(object: _66.MsgVoteWeightedAminoMsg): _66.MsgVoteWeighted;
                toAminoMsg(message: _66.MsgVoteWeighted): _66.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _66.MsgVoteWeightedProtoMsg): _66.MsgVoteWeighted;
                toProto(message: _66.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _66.MsgVoteWeighted): _66.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _66.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgVoteWeightedResponse;
                fromJSON(_: any): _66.MsgVoteWeightedResponse;
                toJSON(_: _66.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_66.MsgVoteWeightedResponse>): _66.MsgVoteWeightedResponse;
                fromAmino(_: _66.MsgVoteWeightedResponseAmino): _66.MsgVoteWeightedResponse;
                toAmino(_: _66.MsgVoteWeightedResponse): _66.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _66.MsgVoteWeightedResponseAminoMsg): _66.MsgVoteWeightedResponse;
                toAminoMsg(message: _66.MsgVoteWeightedResponse): _66.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _66.MsgVoteWeightedResponseProtoMsg): _66.MsgVoteWeightedResponse;
                toProto(message: _66.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _66.MsgVoteWeightedResponse): _66.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _66.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgDeposit;
                fromJSON(object: any): _66.MsgDeposit;
                toJSON(message: _66.MsgDeposit): unknown;
                fromPartial(object: Partial<_66.MsgDeposit>): _66.MsgDeposit;
                fromAmino(object: _66.MsgDepositAmino): _66.MsgDeposit;
                toAmino(message: _66.MsgDeposit): _66.MsgDepositAmino;
                fromAminoMsg(object: _66.MsgDepositAminoMsg): _66.MsgDeposit;
                toAminoMsg(message: _66.MsgDeposit): _66.MsgDepositAminoMsg;
                fromProtoMsg(message: _66.MsgDepositProtoMsg): _66.MsgDeposit;
                toProto(message: _66.MsgDeposit): Uint8Array;
                toProtoMsg(message: _66.MsgDeposit): _66.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _66.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgDepositResponse;
                fromJSON(_: any): _66.MsgDepositResponse;
                toJSON(_: _66.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_66.MsgDepositResponse>): _66.MsgDepositResponse;
                fromAmino(_: _66.MsgDepositResponseAmino): _66.MsgDepositResponse;
                toAmino(_: _66.MsgDepositResponse): _66.MsgDepositResponseAmino;
                fromAminoMsg(object: _66.MsgDepositResponseAminoMsg): _66.MsgDepositResponse;
                toAminoMsg(message: _66.MsgDepositResponse): _66.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _66.MsgDepositResponseProtoMsg): _66.MsgDepositResponse;
                toProto(message: _66.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _66.MsgDepositResponse): _66.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _65.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryProposalRequest;
                fromJSON(object: any): _65.QueryProposalRequest;
                toJSON(message: _65.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_65.QueryProposalRequest>): _65.QueryProposalRequest;
                fromAmino(object: _65.QueryProposalRequestAmino): _65.QueryProposalRequest;
                toAmino(message: _65.QueryProposalRequest): _65.QueryProposalRequestAmino;
                fromAminoMsg(object: _65.QueryProposalRequestAminoMsg): _65.QueryProposalRequest;
                toAminoMsg(message: _65.QueryProposalRequest): _65.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _65.QueryProposalRequestProtoMsg): _65.QueryProposalRequest;
                toProto(message: _65.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _65.QueryProposalRequest): _65.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _65.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryProposalResponse;
                fromJSON(object: any): _65.QueryProposalResponse;
                toJSON(message: _65.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_65.QueryProposalResponse>): _65.QueryProposalResponse;
                fromAmino(object: _65.QueryProposalResponseAmino): _65.QueryProposalResponse;
                toAmino(message: _65.QueryProposalResponse): _65.QueryProposalResponseAmino;
                fromAminoMsg(object: _65.QueryProposalResponseAminoMsg): _65.QueryProposalResponse;
                toAminoMsg(message: _65.QueryProposalResponse): _65.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _65.QueryProposalResponseProtoMsg): _65.QueryProposalResponse;
                toProto(message: _65.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _65.QueryProposalResponse): _65.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _65.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryProposalsRequest;
                fromJSON(object: any): _65.QueryProposalsRequest;
                toJSON(message: _65.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_65.QueryProposalsRequest>): _65.QueryProposalsRequest;
                fromAmino(object: _65.QueryProposalsRequestAmino): _65.QueryProposalsRequest;
                toAmino(message: _65.QueryProposalsRequest): _65.QueryProposalsRequestAmino;
                fromAminoMsg(object: _65.QueryProposalsRequestAminoMsg): _65.QueryProposalsRequest;
                toAminoMsg(message: _65.QueryProposalsRequest): _65.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryProposalsRequestProtoMsg): _65.QueryProposalsRequest;
                toProto(message: _65.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryProposalsRequest): _65.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _65.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryProposalsResponse;
                fromJSON(object: any): _65.QueryProposalsResponse;
                toJSON(message: _65.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_65.QueryProposalsResponse>): _65.QueryProposalsResponse;
                fromAmino(object: _65.QueryProposalsResponseAmino): _65.QueryProposalsResponse;
                toAmino(message: _65.QueryProposalsResponse): _65.QueryProposalsResponseAmino;
                fromAminoMsg(object: _65.QueryProposalsResponseAminoMsg): _65.QueryProposalsResponse;
                toAminoMsg(message: _65.QueryProposalsResponse): _65.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryProposalsResponseProtoMsg): _65.QueryProposalsResponse;
                toProto(message: _65.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryProposalsResponse): _65.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _65.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVoteRequest;
                fromJSON(object: any): _65.QueryVoteRequest;
                toJSON(message: _65.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_65.QueryVoteRequest>): _65.QueryVoteRequest;
                fromAmino(object: _65.QueryVoteRequestAmino): _65.QueryVoteRequest;
                toAmino(message: _65.QueryVoteRequest): _65.QueryVoteRequestAmino;
                fromAminoMsg(object: _65.QueryVoteRequestAminoMsg): _65.QueryVoteRequest;
                toAminoMsg(message: _65.QueryVoteRequest): _65.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _65.QueryVoteRequestProtoMsg): _65.QueryVoteRequest;
                toProto(message: _65.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _65.QueryVoteRequest): _65.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _65.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVoteResponse;
                fromJSON(object: any): _65.QueryVoteResponse;
                toJSON(message: _65.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_65.QueryVoteResponse>): _65.QueryVoteResponse;
                fromAmino(object: _65.QueryVoteResponseAmino): _65.QueryVoteResponse;
                toAmino(message: _65.QueryVoteResponse): _65.QueryVoteResponseAmino;
                fromAminoMsg(object: _65.QueryVoteResponseAminoMsg): _65.QueryVoteResponse;
                toAminoMsg(message: _65.QueryVoteResponse): _65.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _65.QueryVoteResponseProtoMsg): _65.QueryVoteResponse;
                toProto(message: _65.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _65.QueryVoteResponse): _65.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _65.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVotesRequest;
                fromJSON(object: any): _65.QueryVotesRequest;
                toJSON(message: _65.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_65.QueryVotesRequest>): _65.QueryVotesRequest;
                fromAmino(object: _65.QueryVotesRequestAmino): _65.QueryVotesRequest;
                toAmino(message: _65.QueryVotesRequest): _65.QueryVotesRequestAmino;
                fromAminoMsg(object: _65.QueryVotesRequestAminoMsg): _65.QueryVotesRequest;
                toAminoMsg(message: _65.QueryVotesRequest): _65.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _65.QueryVotesRequestProtoMsg): _65.QueryVotesRequest;
                toProto(message: _65.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _65.QueryVotesRequest): _65.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _65.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryVotesResponse;
                fromJSON(object: any): _65.QueryVotesResponse;
                toJSON(message: _65.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_65.QueryVotesResponse>): _65.QueryVotesResponse;
                fromAmino(object: _65.QueryVotesResponseAmino): _65.QueryVotesResponse;
                toAmino(message: _65.QueryVotesResponse): _65.QueryVotesResponseAmino;
                fromAminoMsg(object: _65.QueryVotesResponseAminoMsg): _65.QueryVotesResponse;
                toAminoMsg(message: _65.QueryVotesResponse): _65.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _65.QueryVotesResponseProtoMsg): _65.QueryVotesResponse;
                toProto(message: _65.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _65.QueryVotesResponse): _65.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _65.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryParamsRequest;
                fromJSON(object: any): _65.QueryParamsRequest;
                toJSON(message: _65.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_65.QueryParamsRequest>): _65.QueryParamsRequest;
                fromAmino(object: _65.QueryParamsRequestAmino): _65.QueryParamsRequest;
                toAmino(message: _65.QueryParamsRequest): _65.QueryParamsRequestAmino;
                fromAminoMsg(object: _65.QueryParamsRequestAminoMsg): _65.QueryParamsRequest;
                toAminoMsg(message: _65.QueryParamsRequest): _65.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryParamsRequestProtoMsg): _65.QueryParamsRequest;
                toProto(message: _65.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryParamsRequest): _65.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _65.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryParamsResponse;
                fromJSON(object: any): _65.QueryParamsResponse;
                toJSON(message: _65.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_65.QueryParamsResponse>): _65.QueryParamsResponse;
                fromAmino(object: _65.QueryParamsResponseAmino): _65.QueryParamsResponse;
                toAmino(message: _65.QueryParamsResponse): _65.QueryParamsResponseAmino;
                fromAminoMsg(object: _65.QueryParamsResponseAminoMsg): _65.QueryParamsResponse;
                toAminoMsg(message: _65.QueryParamsResponse): _65.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryParamsResponseProtoMsg): _65.QueryParamsResponse;
                toProto(message: _65.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryParamsResponse): _65.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _65.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryDepositRequest;
                fromJSON(object: any): _65.QueryDepositRequest;
                toJSON(message: _65.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_65.QueryDepositRequest>): _65.QueryDepositRequest;
                fromAmino(object: _65.QueryDepositRequestAmino): _65.QueryDepositRequest;
                toAmino(message: _65.QueryDepositRequest): _65.QueryDepositRequestAmino;
                fromAminoMsg(object: _65.QueryDepositRequestAminoMsg): _65.QueryDepositRequest;
                toAminoMsg(message: _65.QueryDepositRequest): _65.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _65.QueryDepositRequestProtoMsg): _65.QueryDepositRequest;
                toProto(message: _65.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _65.QueryDepositRequest): _65.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _65.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryDepositResponse;
                fromJSON(object: any): _65.QueryDepositResponse;
                toJSON(message: _65.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_65.QueryDepositResponse>): _65.QueryDepositResponse;
                fromAmino(object: _65.QueryDepositResponseAmino): _65.QueryDepositResponse;
                toAmino(message: _65.QueryDepositResponse): _65.QueryDepositResponseAmino;
                fromAminoMsg(object: _65.QueryDepositResponseAminoMsg): _65.QueryDepositResponse;
                toAminoMsg(message: _65.QueryDepositResponse): _65.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _65.QueryDepositResponseProtoMsg): _65.QueryDepositResponse;
                toProto(message: _65.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _65.QueryDepositResponse): _65.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _65.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryDepositsRequest;
                fromJSON(object: any): _65.QueryDepositsRequest;
                toJSON(message: _65.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_65.QueryDepositsRequest>): _65.QueryDepositsRequest;
                fromAmino(object: _65.QueryDepositsRequestAmino): _65.QueryDepositsRequest;
                toAmino(message: _65.QueryDepositsRequest): _65.QueryDepositsRequestAmino;
                fromAminoMsg(object: _65.QueryDepositsRequestAminoMsg): _65.QueryDepositsRequest;
                toAminoMsg(message: _65.QueryDepositsRequest): _65.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryDepositsRequestProtoMsg): _65.QueryDepositsRequest;
                toProto(message: _65.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryDepositsRequest): _65.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _65.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryDepositsResponse;
                fromJSON(object: any): _65.QueryDepositsResponse;
                toJSON(message: _65.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_65.QueryDepositsResponse>): _65.QueryDepositsResponse;
                fromAmino(object: _65.QueryDepositsResponseAmino): _65.QueryDepositsResponse;
                toAmino(message: _65.QueryDepositsResponse): _65.QueryDepositsResponseAmino;
                fromAminoMsg(object: _65.QueryDepositsResponseAminoMsg): _65.QueryDepositsResponse;
                toAminoMsg(message: _65.QueryDepositsResponse): _65.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryDepositsResponseProtoMsg): _65.QueryDepositsResponse;
                toProto(message: _65.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryDepositsResponse): _65.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _65.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryTallyResultRequest;
                fromJSON(object: any): _65.QueryTallyResultRequest;
                toJSON(message: _65.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_65.QueryTallyResultRequest>): _65.QueryTallyResultRequest;
                fromAmino(object: _65.QueryTallyResultRequestAmino): _65.QueryTallyResultRequest;
                toAmino(message: _65.QueryTallyResultRequest): _65.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _65.QueryTallyResultRequestAminoMsg): _65.QueryTallyResultRequest;
                toAminoMsg(message: _65.QueryTallyResultRequest): _65.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _65.QueryTallyResultRequestProtoMsg): _65.QueryTallyResultRequest;
                toProto(message: _65.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _65.QueryTallyResultRequest): _65.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _65.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryTallyResultResponse;
                fromJSON(object: any): _65.QueryTallyResultResponse;
                toJSON(message: _65.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_65.QueryTallyResultResponse>): _65.QueryTallyResultResponse;
                fromAmino(object: _65.QueryTallyResultResponseAmino): _65.QueryTallyResultResponse;
                toAmino(message: _65.QueryTallyResultResponse): _65.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _65.QueryTallyResultResponseAminoMsg): _65.QueryTallyResultResponse;
                toAminoMsg(message: _65.QueryTallyResultResponse): _65.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _65.QueryTallyResultResponseProtoMsg): _65.QueryTallyResultResponse;
                toProto(message: _65.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _65.QueryTallyResultResponse): _65.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            VoteOption: typeof _64.VoteOption;
            VoteOptionSDKType: typeof _64.VoteOption;
            VoteOptionAmino: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            ProposalStatusSDKType: typeof _64.ProposalStatus;
            ProposalStatusAmino: typeof _64.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _64.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.WeightedVoteOption;
                fromJSON(object: any): _64.WeightedVoteOption;
                toJSON(message: _64.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_64.WeightedVoteOption>): _64.WeightedVoteOption;
                fromAmino(object: _64.WeightedVoteOptionAmino): _64.WeightedVoteOption;
                toAmino(message: _64.WeightedVoteOption): _64.WeightedVoteOptionAmino;
                fromAminoMsg(object: _64.WeightedVoteOptionAminoMsg): _64.WeightedVoteOption;
                toAminoMsg(message: _64.WeightedVoteOption): _64.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _64.WeightedVoteOptionProtoMsg): _64.WeightedVoteOption;
                toProto(message: _64.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _64.WeightedVoteOption): _64.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _64.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TextProposal;
                fromJSON(object: any): _64.TextProposal;
                toJSON(message: _64.TextProposal): unknown;
                fromPartial(object: Partial<_64.TextProposal>): _64.TextProposal;
                fromAmino(object: _64.TextProposalAmino): _64.TextProposal;
                toAmino(message: _64.TextProposal): _64.TextProposalAmino;
                fromAminoMsg(object: _64.TextProposalAminoMsg): _64.TextProposal;
                toAminoMsg(message: _64.TextProposal): _64.TextProposalAminoMsg;
                fromProtoMsg(message: _64.TextProposalProtoMsg): _64.TextProposal;
                toProto(message: _64.TextProposal): Uint8Array;
                toProtoMsg(message: _64.TextProposal): _64.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _64.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Deposit;
                fromJSON(object: any): _64.Deposit;
                toJSON(message: _64.Deposit): unknown;
                fromPartial(object: Partial<_64.Deposit>): _64.Deposit;
                fromAmino(object: _64.DepositAmino): _64.Deposit;
                toAmino(message: _64.Deposit): _64.DepositAmino;
                fromAminoMsg(object: _64.DepositAminoMsg): _64.Deposit;
                toAminoMsg(message: _64.Deposit): _64.DepositAminoMsg;
                fromProtoMsg(message: _64.DepositProtoMsg): _64.Deposit;
                toProto(message: _64.Deposit): Uint8Array;
                toProtoMsg(message: _64.Deposit): _64.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _64.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Proposal;
                fromJSON(object: any): _64.Proposal;
                toJSON(message: _64.Proposal): unknown;
                fromPartial(object: Partial<_64.Proposal>): _64.Proposal;
                fromAmino(object: _64.ProposalAmino): _64.Proposal;
                toAmino(message: _64.Proposal): _64.ProposalAmino;
                fromAminoMsg(object: _64.ProposalAminoMsg): _64.Proposal;
                toAminoMsg(message: _64.Proposal): _64.ProposalAminoMsg;
                fromProtoMsg(message: _64.ProposalProtoMsg): _64.Proposal;
                toProto(message: _64.Proposal): Uint8Array;
                toProtoMsg(message: _64.Proposal): _64.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _64.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TallyResult;
                fromJSON(object: any): _64.TallyResult;
                toJSON(message: _64.TallyResult): unknown;
                fromPartial(object: Partial<_64.TallyResult>): _64.TallyResult;
                fromAmino(object: _64.TallyResultAmino): _64.TallyResult;
                toAmino(message: _64.TallyResult): _64.TallyResultAmino;
                fromAminoMsg(object: _64.TallyResultAminoMsg): _64.TallyResult;
                toAminoMsg(message: _64.TallyResult): _64.TallyResultAminoMsg;
                fromProtoMsg(message: _64.TallyResultProtoMsg): _64.TallyResult;
                toProto(message: _64.TallyResult): Uint8Array;
                toProtoMsg(message: _64.TallyResult): _64.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _64.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Vote;
                fromJSON(object: any): _64.Vote;
                toJSON(message: _64.Vote): unknown;
                fromPartial(object: Partial<_64.Vote>): _64.Vote;
                fromAmino(object: _64.VoteAmino): _64.Vote;
                toAmino(message: _64.Vote): _64.VoteAmino;
                fromAminoMsg(object: _64.VoteAminoMsg): _64.Vote;
                toAminoMsg(message: _64.Vote): _64.VoteAminoMsg;
                fromProtoMsg(message: _64.VoteProtoMsg): _64.Vote;
                toProto(message: _64.Vote): Uint8Array;
                toProtoMsg(message: _64.Vote): _64.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _64.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.DepositParams;
                fromJSON(object: any): _64.DepositParams;
                toJSON(message: _64.DepositParams): unknown;
                fromPartial(object: Partial<_64.DepositParams>): _64.DepositParams;
                fromAmino(object: _64.DepositParamsAmino): _64.DepositParams;
                toAmino(message: _64.DepositParams): _64.DepositParamsAmino;
                fromAminoMsg(object: _64.DepositParamsAminoMsg): _64.DepositParams;
                toAminoMsg(message: _64.DepositParams): _64.DepositParamsAminoMsg;
                fromProtoMsg(message: _64.DepositParamsProtoMsg): _64.DepositParams;
                toProto(message: _64.DepositParams): Uint8Array;
                toProtoMsg(message: _64.DepositParams): _64.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _64.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.VotingParams;
                fromJSON(object: any): _64.VotingParams;
                toJSON(message: _64.VotingParams): unknown;
                fromPartial(object: Partial<_64.VotingParams>): _64.VotingParams;
                fromAmino(object: _64.VotingParamsAmino): _64.VotingParams;
                toAmino(message: _64.VotingParams): _64.VotingParamsAmino;
                fromAminoMsg(object: _64.VotingParamsAminoMsg): _64.VotingParams;
                toAminoMsg(message: _64.VotingParams): _64.VotingParamsAminoMsg;
                fromProtoMsg(message: _64.VotingParamsProtoMsg): _64.VotingParams;
                toProto(message: _64.VotingParams): Uint8Array;
                toProtoMsg(message: _64.VotingParams): _64.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _64.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TallyParams;
                fromJSON(object: any): _64.TallyParams;
                toJSON(message: _64.TallyParams): unknown;
                fromPartial(object: Partial<_64.TallyParams>): _64.TallyParams;
                fromAmino(object: _64.TallyParamsAmino): _64.TallyParams;
                toAmino(message: _64.TallyParams): _64.TallyParamsAmino;
                fromAminoMsg(object: _64.TallyParamsAminoMsg): _64.TallyParams;
                toAminoMsg(message: _64.TallyParams): _64.TallyParamsAminoMsg;
                fromProtoMsg(message: _64.TallyParamsProtoMsg): _64.TallyParams;
                toProto(message: _64.TallyParams): Uint8Array;
                toProtoMsg(message: _64.TallyParams): _64.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                toProto(message: _63.GenesisState): Uint8Array;
                toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _302.MsgClientImpl;
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _69.QueryGroupInfoRequest): Promise<_69.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _69.QueryGroupPolicyInfoRequest): Promise<_69.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _69.QueryGroupMembersRequest): Promise<_69.QueryGroupMembersResponse>;
                groupsByAdmin(request: _69.QueryGroupsByAdminRequest): Promise<_69.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _69.QueryGroupPoliciesByGroupRequest): Promise<_69.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _69.QueryGroupPoliciesByAdminRequest): Promise<_69.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _69.QueryProposalsByGroupPolicyRequest): Promise<_69.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _69.QueryVoteByProposalVoterRequest): Promise<_69.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _69.QueryVotesByProposalRequest): Promise<_69.QueryVotesByProposalResponse>;
                votesByVoter(request: _69.QueryVotesByVoterRequest): Promise<_69.QueryVotesByVoterResponse>;
                groupsByMember(request: _69.QueryGroupsByMemberRequest): Promise<_69.QueryGroupsByMemberResponse>;
                tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _266.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: _70.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _70.MsgWithdrawProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: _70.MsgExec;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _70.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _70.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _70.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: _70.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _70.MsgWithdrawProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: _70.MsgExec;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _70.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _70.MsgCreateGroup) => _70.MsgCreateGroupAmino;
                    fromAmino: (object: _70.MsgCreateGroupAmino) => _70.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupMembers) => _70.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _70.MsgUpdateGroupMembersAmino) => _70.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupAdmin) => _70.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _70.MsgUpdateGroupAdminAmino) => _70.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupMetadata) => _70.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _70.MsgUpdateGroupMetadataAmino) => _70.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _70.MsgCreateGroupPolicy) => _70.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _70.MsgCreateGroupPolicyAmino) => _70.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _70.MsgCreateGroupWithPolicy) => _70.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _70.MsgCreateGroupWithPolicyAmino) => _70.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupPolicyAdmin) => _70.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _70.MsgUpdateGroupPolicyAdminAmino) => _70.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupPolicyDecisionPolicy) => _70.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _70.MsgUpdateGroupPolicyDecisionPolicyAmino) => _70.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupPolicyMetadata) => _70.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _70.MsgUpdateGroupPolicyMetadataAmino) => _70.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _70.MsgSubmitProposal) => _70.MsgSubmitProposalAmino;
                    fromAmino: (object: _70.MsgSubmitProposalAmino) => _70.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _70.MsgWithdrawProposal) => _70.MsgWithdrawProposalAmino;
                    fromAmino: (object: _70.MsgWithdrawProposalAmino) => _70.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _70.MsgVote) => _70.MsgVoteAmino;
                    fromAmino: (object: _70.MsgVoteAmino) => _70.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _70.MsgExec) => _70.MsgExecAmino;
                    fromAmino: (object: _70.MsgExecAmino) => _70.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _70.MsgLeaveGroup) => _70.MsgLeaveGroupAmino;
                    fromAmino: (object: _70.MsgLeaveGroupAmino) => _70.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _71.VoteOption;
            voteOptionToJSON(object: _71.VoteOption): string;
            proposalStatusFromJSON(object: any): _71.ProposalStatus;
            proposalStatusToJSON(object: _71.ProposalStatus): string;
            proposalResultFromJSON(object: any): _71.ProposalResult;
            proposalResultToJSON(object: _71.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _71.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _71.ProposalExecutorResult): string;
            VoteOption: typeof _71.VoteOption;
            VoteOptionSDKType: typeof _71.VoteOption;
            VoteOptionAmino: typeof _71.VoteOption;
            ProposalStatus: typeof _71.ProposalStatus;
            ProposalStatusSDKType: typeof _71.ProposalStatus;
            ProposalStatusAmino: typeof _71.ProposalStatus;
            ProposalResult: typeof _71.ProposalResult;
            ProposalResultSDKType: typeof _71.ProposalResult;
            ProposalResultAmino: typeof _71.ProposalResult;
            ProposalExecutorResult: typeof _71.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _71.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _71.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _71.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Member;
                fromJSON(object: any): _71.Member;
                toJSON(message: _71.Member): unknown;
                fromPartial(object: Partial<_71.Member>): _71.Member;
                fromAmino(object: _71.MemberAmino): _71.Member;
                toAmino(message: _71.Member): _71.MemberAmino;
                fromAminoMsg(object: _71.MemberAminoMsg): _71.Member;
                toAminoMsg(message: _71.Member): _71.MemberAminoMsg;
                fromProtoMsg(message: _71.MemberProtoMsg): _71.Member;
                toProto(message: _71.Member): Uint8Array;
                toProtoMsg(message: _71.Member): _71.MemberProtoMsg;
            };
            Members: {
                typeUrl: string;
                encode(message: _71.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Members;
                fromJSON(object: any): _71.Members;
                toJSON(message: _71.Members): unknown;
                fromPartial(object: Partial<_71.Members>): _71.Members;
                fromAmino(object: _71.MembersAmino): _71.Members;
                toAmino(message: _71.Members): _71.MembersAmino;
                fromAminoMsg(object: _71.MembersAminoMsg): _71.Members;
                toAminoMsg(message: _71.Members): _71.MembersAminoMsg;
                fromProtoMsg(message: _71.MembersProtoMsg): _71.Members;
                toProto(message: _71.Members): Uint8Array;
                toProtoMsg(message: _71.Members): _71.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _71.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ThresholdDecisionPolicy;
                fromJSON(object: any): _71.ThresholdDecisionPolicy;
                toJSON(message: _71.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_71.ThresholdDecisionPolicy>): _71.ThresholdDecisionPolicy;
                fromAmino(object: _71.ThresholdDecisionPolicyAmino): _71.ThresholdDecisionPolicy;
                toAmino(message: _71.ThresholdDecisionPolicy): _71.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _71.ThresholdDecisionPolicyAminoMsg): _71.ThresholdDecisionPolicy;
                toAminoMsg(message: _71.ThresholdDecisionPolicy): _71.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _71.ThresholdDecisionPolicyProtoMsg): _71.ThresholdDecisionPolicy;
                toProto(message: _71.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _71.ThresholdDecisionPolicy): _71.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _71.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.PercentageDecisionPolicy;
                fromJSON(object: any): _71.PercentageDecisionPolicy;
                toJSON(message: _71.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_71.PercentageDecisionPolicy>): _71.PercentageDecisionPolicy;
                fromAmino(object: _71.PercentageDecisionPolicyAmino): _71.PercentageDecisionPolicy;
                toAmino(message: _71.PercentageDecisionPolicy): _71.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _71.PercentageDecisionPolicyAminoMsg): _71.PercentageDecisionPolicy;
                toAminoMsg(message: _71.PercentageDecisionPolicy): _71.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _71.PercentageDecisionPolicyProtoMsg): _71.PercentageDecisionPolicy;
                toProto(message: _71.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _71.PercentageDecisionPolicy): _71.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _71.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.DecisionPolicyWindows;
                fromJSON(object: any): _71.DecisionPolicyWindows;
                toJSON(message: _71.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_71.DecisionPolicyWindows>): _71.DecisionPolicyWindows;
                fromAmino(object: _71.DecisionPolicyWindowsAmino): _71.DecisionPolicyWindows;
                toAmino(message: _71.DecisionPolicyWindows): _71.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _71.DecisionPolicyWindowsAminoMsg): _71.DecisionPolicyWindows;
                toAminoMsg(message: _71.DecisionPolicyWindows): _71.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _71.DecisionPolicyWindowsProtoMsg): _71.DecisionPolicyWindows;
                toProto(message: _71.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _71.DecisionPolicyWindows): _71.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _71.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GroupInfo;
                fromJSON(object: any): _71.GroupInfo;
                toJSON(message: _71.GroupInfo): unknown;
                fromPartial(object: Partial<_71.GroupInfo>): _71.GroupInfo;
                fromAmino(object: _71.GroupInfoAmino): _71.GroupInfo;
                toAmino(message: _71.GroupInfo): _71.GroupInfoAmino;
                fromAminoMsg(object: _71.GroupInfoAminoMsg): _71.GroupInfo;
                toAminoMsg(message: _71.GroupInfo): _71.GroupInfoAminoMsg;
                fromProtoMsg(message: _71.GroupInfoProtoMsg): _71.GroupInfo;
                toProto(message: _71.GroupInfo): Uint8Array;
                toProtoMsg(message: _71.GroupInfo): _71.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _71.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GroupMember;
                fromJSON(object: any): _71.GroupMember;
                toJSON(message: _71.GroupMember): unknown;
                fromPartial(object: Partial<_71.GroupMember>): _71.GroupMember;
                fromAmino(object: _71.GroupMemberAmino): _71.GroupMember;
                toAmino(message: _71.GroupMember): _71.GroupMemberAmino;
                fromAminoMsg(object: _71.GroupMemberAminoMsg): _71.GroupMember;
                toAminoMsg(message: _71.GroupMember): _71.GroupMemberAminoMsg;
                fromProtoMsg(message: _71.GroupMemberProtoMsg): _71.GroupMember;
                toProto(message: _71.GroupMember): Uint8Array;
                toProtoMsg(message: _71.GroupMember): _71.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _71.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GroupPolicyInfo;
                fromJSON(object: any): _71.GroupPolicyInfo;
                toJSON(message: _71.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_71.GroupPolicyInfo>): _71.GroupPolicyInfo;
                fromAmino(object: _71.GroupPolicyInfoAmino): _71.GroupPolicyInfo;
                toAmino(message: _71.GroupPolicyInfo): _71.GroupPolicyInfoAmino;
                fromAminoMsg(object: _71.GroupPolicyInfoAminoMsg): _71.GroupPolicyInfo;
                toAminoMsg(message: _71.GroupPolicyInfo): _71.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _71.GroupPolicyInfoProtoMsg): _71.GroupPolicyInfo;
                toProto(message: _71.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _71.GroupPolicyInfo): _71.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _71.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Proposal;
                fromJSON(object: any): _71.Proposal;
                toJSON(message: _71.Proposal): unknown;
                fromPartial(object: Partial<_71.Proposal>): _71.Proposal;
                fromAmino(object: _71.ProposalAmino): _71.Proposal;
                toAmino(message: _71.Proposal): _71.ProposalAmino;
                fromAminoMsg(object: _71.ProposalAminoMsg): _71.Proposal;
                toAminoMsg(message: _71.Proposal): _71.ProposalAminoMsg;
                fromProtoMsg(message: _71.ProposalProtoMsg): _71.Proposal;
                toProto(message: _71.Proposal): Uint8Array;
                toProtoMsg(message: _71.Proposal): _71.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _71.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.TallyResult;
                fromJSON(object: any): _71.TallyResult;
                toJSON(message: _71.TallyResult): unknown;
                fromPartial(object: Partial<_71.TallyResult>): _71.TallyResult;
                fromAmino(object: _71.TallyResultAmino): _71.TallyResult;
                toAmino(message: _71.TallyResult): _71.TallyResultAmino;
                fromAminoMsg(object: _71.TallyResultAminoMsg): _71.TallyResult;
                toAminoMsg(message: _71.TallyResult): _71.TallyResultAminoMsg;
                fromProtoMsg(message: _71.TallyResultProtoMsg): _71.TallyResult;
                toProto(message: _71.TallyResult): Uint8Array;
                toProtoMsg(message: _71.TallyResult): _71.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _71.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Vote;
                fromJSON(object: any): _71.Vote;
                toJSON(message: _71.Vote): unknown;
                fromPartial(object: Partial<_71.Vote>): _71.Vote;
                fromAmino(object: _71.VoteAmino): _71.Vote;
                toAmino(message: _71.Vote): _71.VoteAmino;
                fromAminoMsg(object: _71.VoteAminoMsg): _71.Vote;
                toAminoMsg(message: _71.Vote): _71.VoteAminoMsg;
                fromProtoMsg(message: _71.VoteProtoMsg): _71.Vote;
                toProto(message: _71.Vote): Uint8Array;
                toProtoMsg(message: _71.Vote): _71.VoteProtoMsg;
            };
            execFromJSON(object: any): _70.Exec;
            execToJSON(object: _70.Exec): string;
            Exec: typeof _70.Exec;
            ExecSDKType: typeof _70.Exec;
            ExecAmino: typeof _70.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateGroup;
                fromJSON(object: any): _70.MsgCreateGroup;
                toJSON(message: _70.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_70.MsgCreateGroup>): _70.MsgCreateGroup;
                fromAmino(object: _70.MsgCreateGroupAmino): _70.MsgCreateGroup;
                toAmino(message: _70.MsgCreateGroup): _70.MsgCreateGroupAmino;
                fromAminoMsg(object: _70.MsgCreateGroupAminoMsg): _70.MsgCreateGroup;
                toAminoMsg(message: _70.MsgCreateGroup): _70.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupProtoMsg): _70.MsgCreateGroup;
                toProto(message: _70.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroup): _70.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateGroupResponse;
                fromJSON(object: any): _70.MsgCreateGroupResponse;
                toJSON(message: _70.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_70.MsgCreateGroupResponse>): _70.MsgCreateGroupResponse;
                fromAmino(object: _70.MsgCreateGroupResponseAmino): _70.MsgCreateGroupResponse;
                toAmino(message: _70.MsgCreateGroupResponse): _70.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _70.MsgCreateGroupResponseAminoMsg): _70.MsgCreateGroupResponse;
                toAminoMsg(message: _70.MsgCreateGroupResponse): _70.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupResponseProtoMsg): _70.MsgCreateGroupResponse;
                toProto(message: _70.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupResponse): _70.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupMembers;
                fromJSON(object: any): _70.MsgUpdateGroupMembers;
                toJSON(message: _70.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_70.MsgUpdateGroupMembers>): _70.MsgUpdateGroupMembers;
                fromAmino(object: _70.MsgUpdateGroupMembersAmino): _70.MsgUpdateGroupMembers;
                toAmino(message: _70.MsgUpdateGroupMembers): _70.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupMembersAminoMsg): _70.MsgUpdateGroupMembers;
                toAminoMsg(message: _70.MsgUpdateGroupMembers): _70.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupMembersProtoMsg): _70.MsgUpdateGroupMembers;
                toProto(message: _70.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupMembers): _70.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _70.MsgUpdateGroupMembersResponse;
                toJSON(_: _70.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_70.MsgUpdateGroupMembersResponse>): _70.MsgUpdateGroupMembersResponse;
                fromAmino(_: _70.MsgUpdateGroupMembersResponseAmino): _70.MsgUpdateGroupMembersResponse;
                toAmino(_: _70.MsgUpdateGroupMembersResponse): _70.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupMembersResponseAminoMsg): _70.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _70.MsgUpdateGroupMembersResponse): _70.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupMembersResponseProtoMsg): _70.MsgUpdateGroupMembersResponse;
                toProto(message: _70.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupMembersResponse): _70.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupAdmin;
                fromJSON(object: any): _70.MsgUpdateGroupAdmin;
                toJSON(message: _70.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_70.MsgUpdateGroupAdmin>): _70.MsgUpdateGroupAdmin;
                fromAmino(object: _70.MsgUpdateGroupAdminAmino): _70.MsgUpdateGroupAdmin;
                toAmino(message: _70.MsgUpdateGroupAdmin): _70.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupAdminAminoMsg): _70.MsgUpdateGroupAdmin;
                toAminoMsg(message: _70.MsgUpdateGroupAdmin): _70.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupAdminProtoMsg): _70.MsgUpdateGroupAdmin;
                toProto(message: _70.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupAdmin): _70.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _70.MsgUpdateGroupAdminResponse;
                toJSON(_: _70.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_70.MsgUpdateGroupAdminResponse>): _70.MsgUpdateGroupAdminResponse;
                fromAmino(_: _70.MsgUpdateGroupAdminResponseAmino): _70.MsgUpdateGroupAdminResponse;
                toAmino(_: _70.MsgUpdateGroupAdminResponse): _70.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupAdminResponseAminoMsg): _70.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _70.MsgUpdateGroupAdminResponse): _70.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupAdminResponseProtoMsg): _70.MsgUpdateGroupAdminResponse;
                toProto(message: _70.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupAdminResponse): _70.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupMetadata;
                fromJSON(object: any): _70.MsgUpdateGroupMetadata;
                toJSON(message: _70.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_70.MsgUpdateGroupMetadata>): _70.MsgUpdateGroupMetadata;
                fromAmino(object: _70.MsgUpdateGroupMetadataAmino): _70.MsgUpdateGroupMetadata;
                toAmino(message: _70.MsgUpdateGroupMetadata): _70.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupMetadataAminoMsg): _70.MsgUpdateGroupMetadata;
                toAminoMsg(message: _70.MsgUpdateGroupMetadata): _70.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupMetadataProtoMsg): _70.MsgUpdateGroupMetadata;
                toProto(message: _70.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupMetadata): _70.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _70.MsgUpdateGroupMetadataResponse;
                toJSON(_: _70.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_70.MsgUpdateGroupMetadataResponse>): _70.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _70.MsgUpdateGroupMetadataResponseAmino): _70.MsgUpdateGroupMetadataResponse;
                toAmino(_: _70.MsgUpdateGroupMetadataResponse): _70.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupMetadataResponseAminoMsg): _70.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _70.MsgUpdateGroupMetadataResponse): _70.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupMetadataResponseProtoMsg): _70.MsgUpdateGroupMetadataResponse;
                toProto(message: _70.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupMetadataResponse): _70.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateGroupPolicy;
                fromJSON(object: any): _70.MsgCreateGroupPolicy;
                toJSON(message: _70.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_70.MsgCreateGroupPolicy>): _70.MsgCreateGroupPolicy;
                fromAmino(object: _70.MsgCreateGroupPolicyAmino): _70.MsgCreateGroupPolicy;
                toAmino(message: _70.MsgCreateGroupPolicy): _70.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _70.MsgCreateGroupPolicyAminoMsg): _70.MsgCreateGroupPolicy;
                toAminoMsg(message: _70.MsgCreateGroupPolicy): _70.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupPolicyProtoMsg): _70.MsgCreateGroupPolicy;
                toProto(message: _70.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupPolicy): _70.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _70.MsgCreateGroupPolicyResponse;
                toJSON(message: _70.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_70.MsgCreateGroupPolicyResponse>): _70.MsgCreateGroupPolicyResponse;
                fromAmino(object: _70.MsgCreateGroupPolicyResponseAmino): _70.MsgCreateGroupPolicyResponse;
                toAmino(message: _70.MsgCreateGroupPolicyResponse): _70.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _70.MsgCreateGroupPolicyResponseAminoMsg): _70.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _70.MsgCreateGroupPolicyResponse): _70.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupPolicyResponseProtoMsg): _70.MsgCreateGroupPolicyResponse;
                toProto(message: _70.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupPolicyResponse): _70.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _70.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _70.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_70.MsgUpdateGroupPolicyAdmin>): _70.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _70.MsgUpdateGroupPolicyAdminAmino): _70.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _70.MsgUpdateGroupPolicyAdmin): _70.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyAdminAminoMsg): _70.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyAdmin): _70.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyAdminProtoMsg): _70.MsgUpdateGroupPolicyAdmin;
                toProto(message: _70.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyAdmin): _70.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _70.MsgCreateGroupWithPolicy;
                toJSON(message: _70.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_70.MsgCreateGroupWithPolicy>): _70.MsgCreateGroupWithPolicy;
                fromAmino(object: _70.MsgCreateGroupWithPolicyAmino): _70.MsgCreateGroupWithPolicy;
                toAmino(message: _70.MsgCreateGroupWithPolicy): _70.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _70.MsgCreateGroupWithPolicyAminoMsg): _70.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _70.MsgCreateGroupWithPolicy): _70.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupWithPolicyProtoMsg): _70.MsgCreateGroupWithPolicy;
                toProto(message: _70.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupWithPolicy): _70.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _70.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _70.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_70.MsgCreateGroupWithPolicyResponse>): _70.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _70.MsgCreateGroupWithPolicyResponseAmino): _70.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _70.MsgCreateGroupWithPolicyResponse): _70.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _70.MsgCreateGroupWithPolicyResponseAminoMsg): _70.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _70.MsgCreateGroupWithPolicyResponse): _70.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupWithPolicyResponseProtoMsg): _70.MsgCreateGroupWithPolicyResponse;
                toProto(message: _70.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupWithPolicyResponse): _70.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _70.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _70.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_70.MsgUpdateGroupPolicyAdminResponse>): _70.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _70.MsgUpdateGroupPolicyAdminResponseAmino): _70.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _70.MsgUpdateGroupPolicyAdminResponse): _70.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyAdminResponseAminoMsg): _70.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyAdminResponse): _70.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyAdminResponseProtoMsg): _70.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _70.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyAdminResponse): _70.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _70.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _70.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_70.MsgUpdateGroupPolicyDecisionPolicy>): _70.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _70.MsgUpdateGroupPolicyDecisionPolicyAmino): _70.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _70.MsgUpdateGroupPolicyDecisionPolicy): _70.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _70.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicy): _70.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _70.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _70.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicy): _70.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _70.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_70.MsgUpdateGroupPolicyDecisionPolicyResponse>): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _70.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _70.MsgUpdateGroupPolicyDecisionPolicyResponse): _70.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicyResponse): _70.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _70.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicyResponse): _70.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _70.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _70.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_70.MsgUpdateGroupPolicyMetadata>): _70.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _70.MsgUpdateGroupPolicyMetadataAmino): _70.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _70.MsgUpdateGroupPolicyMetadata): _70.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyMetadataAminoMsg): _70.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyMetadata): _70.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyMetadataProtoMsg): _70.MsgUpdateGroupPolicyMetadata;
                toProto(message: _70.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyMetadata): _70.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _70.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _70.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_70.MsgUpdateGroupPolicyMetadataResponse>): _70.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _70.MsgUpdateGroupPolicyMetadataResponseAmino): _70.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _70.MsgUpdateGroupPolicyMetadataResponse): _70.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _70.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyMetadataResponse): _70.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _70.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _70.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyMetadataResponse): _70.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _70.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSubmitProposal;
                fromJSON(object: any): _70.MsgSubmitProposal;
                toJSON(message: _70.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_70.MsgSubmitProposal>): _70.MsgSubmitProposal;
                fromAmino(object: _70.MsgSubmitProposalAmino): _70.MsgSubmitProposal;
                toAmino(message: _70.MsgSubmitProposal): _70.MsgSubmitProposalAmino;
                fromAminoMsg(object: _70.MsgSubmitProposalAminoMsg): _70.MsgSubmitProposal;
                toAminoMsg(message: _70.MsgSubmitProposal): _70.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _70.MsgSubmitProposalProtoMsg): _70.MsgSubmitProposal;
                toProto(message: _70.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _70.MsgSubmitProposal): _70.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _70.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSubmitProposalResponse;
                fromJSON(object: any): _70.MsgSubmitProposalResponse;
                toJSON(message: _70.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_70.MsgSubmitProposalResponse>): _70.MsgSubmitProposalResponse;
                fromAmino(object: _70.MsgSubmitProposalResponseAmino): _70.MsgSubmitProposalResponse;
                toAmino(message: _70.MsgSubmitProposalResponse): _70.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _70.MsgSubmitProposalResponseAminoMsg): _70.MsgSubmitProposalResponse;
                toAminoMsg(message: _70.MsgSubmitProposalResponse): _70.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _70.MsgSubmitProposalResponseProtoMsg): _70.MsgSubmitProposalResponse;
                toProto(message: _70.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _70.MsgSubmitProposalResponse): _70.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _70.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgWithdrawProposal;
                fromJSON(object: any): _70.MsgWithdrawProposal;
                toJSON(message: _70.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_70.MsgWithdrawProposal>): _70.MsgWithdrawProposal;
                fromAmino(object: _70.MsgWithdrawProposalAmino): _70.MsgWithdrawProposal;
                toAmino(message: _70.MsgWithdrawProposal): _70.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _70.MsgWithdrawProposalAminoMsg): _70.MsgWithdrawProposal;
                toAminoMsg(message: _70.MsgWithdrawProposal): _70.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _70.MsgWithdrawProposalProtoMsg): _70.MsgWithdrawProposal;
                toProto(message: _70.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _70.MsgWithdrawProposal): _70.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _70.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgWithdrawProposalResponse;
                fromJSON(_: any): _70.MsgWithdrawProposalResponse;
                toJSON(_: _70.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_70.MsgWithdrawProposalResponse>): _70.MsgWithdrawProposalResponse;
                fromAmino(_: _70.MsgWithdrawProposalResponseAmino): _70.MsgWithdrawProposalResponse;
                toAmino(_: _70.MsgWithdrawProposalResponse): _70.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _70.MsgWithdrawProposalResponseAminoMsg): _70.MsgWithdrawProposalResponse;
                toAminoMsg(message: _70.MsgWithdrawProposalResponse): _70.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _70.MsgWithdrawProposalResponseProtoMsg): _70.MsgWithdrawProposalResponse;
                toProto(message: _70.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _70.MsgWithdrawProposalResponse): _70.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _70.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgVote;
                fromJSON(object: any): _70.MsgVote;
                toJSON(message: _70.MsgVote): unknown;
                fromPartial(object: Partial<_70.MsgVote>): _70.MsgVote;
                fromAmino(object: _70.MsgVoteAmino): _70.MsgVote;
                toAmino(message: _70.MsgVote): _70.MsgVoteAmino;
                fromAminoMsg(object: _70.MsgVoteAminoMsg): _70.MsgVote;
                toAminoMsg(message: _70.MsgVote): _70.MsgVoteAminoMsg;
                fromProtoMsg(message: _70.MsgVoteProtoMsg): _70.MsgVote;
                toProto(message: _70.MsgVote): Uint8Array;
                toProtoMsg(message: _70.MsgVote): _70.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _70.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgVoteResponse;
                fromJSON(_: any): _70.MsgVoteResponse;
                toJSON(_: _70.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_70.MsgVoteResponse>): _70.MsgVoteResponse;
                fromAmino(_: _70.MsgVoteResponseAmino): _70.MsgVoteResponse;
                toAmino(_: _70.MsgVoteResponse): _70.MsgVoteResponseAmino;
                fromAminoMsg(object: _70.MsgVoteResponseAminoMsg): _70.MsgVoteResponse;
                toAminoMsg(message: _70.MsgVoteResponse): _70.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _70.MsgVoteResponseProtoMsg): _70.MsgVoteResponse;
                toProto(message: _70.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _70.MsgVoteResponse): _70.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _70.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgExec;
                fromJSON(object: any): _70.MsgExec;
                toJSON(message: _70.MsgExec): unknown;
                fromPartial(object: Partial<_70.MsgExec>): _70.MsgExec;
                fromAmino(object: _70.MsgExecAmino): _70.MsgExec;
                toAmino(message: _70.MsgExec): _70.MsgExecAmino;
                fromAminoMsg(object: _70.MsgExecAminoMsg): _70.MsgExec;
                toAminoMsg(message: _70.MsgExec): _70.MsgExecAminoMsg;
                fromProtoMsg(message: _70.MsgExecProtoMsg): _70.MsgExec;
                toProto(message: _70.MsgExec): Uint8Array;
                toProtoMsg(message: _70.MsgExec): _70.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(_: _70.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgExecResponse;
                fromJSON(_: any): _70.MsgExecResponse;
                toJSON(_: _70.MsgExecResponse): unknown;
                fromPartial(_: Partial<_70.MsgExecResponse>): _70.MsgExecResponse;
                fromAmino(_: _70.MsgExecResponseAmino): _70.MsgExecResponse;
                toAmino(_: _70.MsgExecResponse): _70.MsgExecResponseAmino;
                fromAminoMsg(object: _70.MsgExecResponseAminoMsg): _70.MsgExecResponse;
                toAminoMsg(message: _70.MsgExecResponse): _70.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _70.MsgExecResponseProtoMsg): _70.MsgExecResponse;
                toProto(message: _70.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _70.MsgExecResponse): _70.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _70.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgLeaveGroup;
                fromJSON(object: any): _70.MsgLeaveGroup;
                toJSON(message: _70.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_70.MsgLeaveGroup>): _70.MsgLeaveGroup;
                fromAmino(object: _70.MsgLeaveGroupAmino): _70.MsgLeaveGroup;
                toAmino(message: _70.MsgLeaveGroup): _70.MsgLeaveGroupAmino;
                fromAminoMsg(object: _70.MsgLeaveGroupAminoMsg): _70.MsgLeaveGroup;
                toAminoMsg(message: _70.MsgLeaveGroup): _70.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _70.MsgLeaveGroupProtoMsg): _70.MsgLeaveGroup;
                toProto(message: _70.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _70.MsgLeaveGroup): _70.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _70.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgLeaveGroupResponse;
                fromJSON(_: any): _70.MsgLeaveGroupResponse;
                toJSON(_: _70.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_70.MsgLeaveGroupResponse>): _70.MsgLeaveGroupResponse;
                fromAmino(_: _70.MsgLeaveGroupResponseAmino): _70.MsgLeaveGroupResponse;
                toAmino(_: _70.MsgLeaveGroupResponse): _70.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _70.MsgLeaveGroupResponseAminoMsg): _70.MsgLeaveGroupResponse;
                toAminoMsg(message: _70.MsgLeaveGroupResponse): _70.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _70.MsgLeaveGroupResponseProtoMsg): _70.MsgLeaveGroupResponse;
                toProto(message: _70.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _70.MsgLeaveGroupResponse): _70.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupInfoRequest;
                fromJSON(object: any): _69.QueryGroupInfoRequest;
                toJSON(message: _69.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_69.QueryGroupInfoRequest>): _69.QueryGroupInfoRequest;
                fromAmino(object: _69.QueryGroupInfoRequestAmino): _69.QueryGroupInfoRequest;
                toAmino(message: _69.QueryGroupInfoRequest): _69.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _69.QueryGroupInfoRequestAminoMsg): _69.QueryGroupInfoRequest;
                toAminoMsg(message: _69.QueryGroupInfoRequest): _69.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupInfoRequestProtoMsg): _69.QueryGroupInfoRequest;
                toProto(message: _69.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupInfoRequest): _69.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupInfoResponse;
                fromJSON(object: any): _69.QueryGroupInfoResponse;
                toJSON(message: _69.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_69.QueryGroupInfoResponse>): _69.QueryGroupInfoResponse;
                fromAmino(object: _69.QueryGroupInfoResponseAmino): _69.QueryGroupInfoResponse;
                toAmino(message: _69.QueryGroupInfoResponse): _69.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _69.QueryGroupInfoResponseAminoMsg): _69.QueryGroupInfoResponse;
                toAminoMsg(message: _69.QueryGroupInfoResponse): _69.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupInfoResponseProtoMsg): _69.QueryGroupInfoResponse;
                toProto(message: _69.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupInfoResponse): _69.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _69.QueryGroupPolicyInfoRequest;
                toJSON(message: _69.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_69.QueryGroupPolicyInfoRequest>): _69.QueryGroupPolicyInfoRequest;
                fromAmino(object: _69.QueryGroupPolicyInfoRequestAmino): _69.QueryGroupPolicyInfoRequest;
                toAmino(message: _69.QueryGroupPolicyInfoRequest): _69.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _69.QueryGroupPolicyInfoRequestAminoMsg): _69.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _69.QueryGroupPolicyInfoRequest): _69.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPolicyInfoRequestProtoMsg): _69.QueryGroupPolicyInfoRequest;
                toProto(message: _69.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPolicyInfoRequest): _69.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _69.QueryGroupPolicyInfoResponse;
                toJSON(message: _69.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_69.QueryGroupPolicyInfoResponse>): _69.QueryGroupPolicyInfoResponse;
                fromAmino(object: _69.QueryGroupPolicyInfoResponseAmino): _69.QueryGroupPolicyInfoResponse;
                toAmino(message: _69.QueryGroupPolicyInfoResponse): _69.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _69.QueryGroupPolicyInfoResponseAminoMsg): _69.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _69.QueryGroupPolicyInfoResponse): _69.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPolicyInfoResponseProtoMsg): _69.QueryGroupPolicyInfoResponse;
                toProto(message: _69.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPolicyInfoResponse): _69.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupMembersRequest;
                fromJSON(object: any): _69.QueryGroupMembersRequest;
                toJSON(message: _69.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_69.QueryGroupMembersRequest>): _69.QueryGroupMembersRequest;
                fromAmino(object: _69.QueryGroupMembersRequestAmino): _69.QueryGroupMembersRequest;
                toAmino(message: _69.QueryGroupMembersRequest): _69.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _69.QueryGroupMembersRequestAminoMsg): _69.QueryGroupMembersRequest;
                toAminoMsg(message: _69.QueryGroupMembersRequest): _69.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupMembersRequestProtoMsg): _69.QueryGroupMembersRequest;
                toProto(message: _69.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupMembersRequest): _69.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupMembersResponse;
                fromJSON(object: any): _69.QueryGroupMembersResponse;
                toJSON(message: _69.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_69.QueryGroupMembersResponse>): _69.QueryGroupMembersResponse;
                fromAmino(object: _69.QueryGroupMembersResponseAmino): _69.QueryGroupMembersResponse;
                toAmino(message: _69.QueryGroupMembersResponse): _69.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _69.QueryGroupMembersResponseAminoMsg): _69.QueryGroupMembersResponse;
                toAminoMsg(message: _69.QueryGroupMembersResponse): _69.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupMembersResponseProtoMsg): _69.QueryGroupMembersResponse;
                toProto(message: _69.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupMembersResponse): _69.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupsByAdminRequest;
                fromJSON(object: any): _69.QueryGroupsByAdminRequest;
                toJSON(message: _69.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_69.QueryGroupsByAdminRequest>): _69.QueryGroupsByAdminRequest;
                fromAmino(object: _69.QueryGroupsByAdminRequestAmino): _69.QueryGroupsByAdminRequest;
                toAmino(message: _69.QueryGroupsByAdminRequest): _69.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _69.QueryGroupsByAdminRequestAminoMsg): _69.QueryGroupsByAdminRequest;
                toAminoMsg(message: _69.QueryGroupsByAdminRequest): _69.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsByAdminRequestProtoMsg): _69.QueryGroupsByAdminRequest;
                toProto(message: _69.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsByAdminRequest): _69.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupsByAdminResponse;
                fromJSON(object: any): _69.QueryGroupsByAdminResponse;
                toJSON(message: _69.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_69.QueryGroupsByAdminResponse>): _69.QueryGroupsByAdminResponse;
                fromAmino(object: _69.QueryGroupsByAdminResponseAmino): _69.QueryGroupsByAdminResponse;
                toAmino(message: _69.QueryGroupsByAdminResponse): _69.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _69.QueryGroupsByAdminResponseAminoMsg): _69.QueryGroupsByAdminResponse;
                toAminoMsg(message: _69.QueryGroupsByAdminResponse): _69.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsByAdminResponseProtoMsg): _69.QueryGroupsByAdminResponse;
                toProto(message: _69.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsByAdminResponse): _69.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _69.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _69.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByGroupRequest>): _69.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _69.QueryGroupPoliciesByGroupRequestAmino): _69.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _69.QueryGroupPoliciesByGroupRequest): _69.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _69.QueryGroupPoliciesByGroupRequestAminoMsg): _69.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _69.QueryGroupPoliciesByGroupRequest): _69.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPoliciesByGroupRequestProtoMsg): _69.QueryGroupPoliciesByGroupRequest;
                toProto(message: _69.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPoliciesByGroupRequest): _69.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _69.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _69.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByGroupResponse>): _69.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _69.QueryGroupPoliciesByGroupResponseAmino): _69.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _69.QueryGroupPoliciesByGroupResponse): _69.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _69.QueryGroupPoliciesByGroupResponseAminoMsg): _69.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _69.QueryGroupPoliciesByGroupResponse): _69.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPoliciesByGroupResponseProtoMsg): _69.QueryGroupPoliciesByGroupResponse;
                toProto(message: _69.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPoliciesByGroupResponse): _69.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _69.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _69.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByAdminRequest>): _69.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _69.QueryGroupPoliciesByAdminRequestAmino): _69.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _69.QueryGroupPoliciesByAdminRequest): _69.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _69.QueryGroupPoliciesByAdminRequestAminoMsg): _69.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _69.QueryGroupPoliciesByAdminRequest): _69.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPoliciesByAdminRequestProtoMsg): _69.QueryGroupPoliciesByAdminRequest;
                toProto(message: _69.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPoliciesByAdminRequest): _69.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _69.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _69.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByAdminResponse>): _69.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _69.QueryGroupPoliciesByAdminResponseAmino): _69.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _69.QueryGroupPoliciesByAdminResponse): _69.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _69.QueryGroupPoliciesByAdminResponseAminoMsg): _69.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _69.QueryGroupPoliciesByAdminResponse): _69.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPoliciesByAdminResponseProtoMsg): _69.QueryGroupPoliciesByAdminResponse;
                toProto(message: _69.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPoliciesByAdminResponse): _69.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _69.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryProposalRequest;
                fromJSON(object: any): _69.QueryProposalRequest;
                toJSON(message: _69.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_69.QueryProposalRequest>): _69.QueryProposalRequest;
                fromAmino(object: _69.QueryProposalRequestAmino): _69.QueryProposalRequest;
                toAmino(message: _69.QueryProposalRequest): _69.QueryProposalRequestAmino;
                fromAminoMsg(object: _69.QueryProposalRequestAminoMsg): _69.QueryProposalRequest;
                toAminoMsg(message: _69.QueryProposalRequest): _69.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _69.QueryProposalRequestProtoMsg): _69.QueryProposalRequest;
                toProto(message: _69.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _69.QueryProposalRequest): _69.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _69.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryProposalResponse;
                fromJSON(object: any): _69.QueryProposalResponse;
                toJSON(message: _69.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_69.QueryProposalResponse>): _69.QueryProposalResponse;
                fromAmino(object: _69.QueryProposalResponseAmino): _69.QueryProposalResponse;
                toAmino(message: _69.QueryProposalResponse): _69.QueryProposalResponseAmino;
                fromAminoMsg(object: _69.QueryProposalResponseAminoMsg): _69.QueryProposalResponse;
                toAminoMsg(message: _69.QueryProposalResponse): _69.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _69.QueryProposalResponseProtoMsg): _69.QueryProposalResponse;
                toProto(message: _69.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _69.QueryProposalResponse): _69.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _69.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _69.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _69.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_69.QueryProposalsByGroupPolicyRequest>): _69.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _69.QueryProposalsByGroupPolicyRequestAmino): _69.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _69.QueryProposalsByGroupPolicyRequest): _69.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _69.QueryProposalsByGroupPolicyRequestAminoMsg): _69.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _69.QueryProposalsByGroupPolicyRequest): _69.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _69.QueryProposalsByGroupPolicyRequestProtoMsg): _69.QueryProposalsByGroupPolicyRequest;
                toProto(message: _69.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _69.QueryProposalsByGroupPolicyRequest): _69.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _69.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _69.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _69.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_69.QueryProposalsByGroupPolicyResponse>): _69.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _69.QueryProposalsByGroupPolicyResponseAmino): _69.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _69.QueryProposalsByGroupPolicyResponse): _69.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _69.QueryProposalsByGroupPolicyResponseAminoMsg): _69.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _69.QueryProposalsByGroupPolicyResponse): _69.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _69.QueryProposalsByGroupPolicyResponseProtoMsg): _69.QueryProposalsByGroupPolicyResponse;
                toProto(message: _69.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _69.QueryProposalsByGroupPolicyResponse): _69.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _69.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _69.QueryVoteByProposalVoterRequest;
                toJSON(message: _69.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_69.QueryVoteByProposalVoterRequest>): _69.QueryVoteByProposalVoterRequest;
                fromAmino(object: _69.QueryVoteByProposalVoterRequestAmino): _69.QueryVoteByProposalVoterRequest;
                toAmino(message: _69.QueryVoteByProposalVoterRequest): _69.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _69.QueryVoteByProposalVoterRequestAminoMsg): _69.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _69.QueryVoteByProposalVoterRequest): _69.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _69.QueryVoteByProposalVoterRequestProtoMsg): _69.QueryVoteByProposalVoterRequest;
                toProto(message: _69.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _69.QueryVoteByProposalVoterRequest): _69.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _69.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _69.QueryVoteByProposalVoterResponse;
                toJSON(message: _69.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_69.QueryVoteByProposalVoterResponse>): _69.QueryVoteByProposalVoterResponse;
                fromAmino(object: _69.QueryVoteByProposalVoterResponseAmino): _69.QueryVoteByProposalVoterResponse;
                toAmino(message: _69.QueryVoteByProposalVoterResponse): _69.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _69.QueryVoteByProposalVoterResponseAminoMsg): _69.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _69.QueryVoteByProposalVoterResponse): _69.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _69.QueryVoteByProposalVoterResponseProtoMsg): _69.QueryVoteByProposalVoterResponse;
                toProto(message: _69.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _69.QueryVoteByProposalVoterResponse): _69.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _69.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVotesByProposalRequest;
                fromJSON(object: any): _69.QueryVotesByProposalRequest;
                toJSON(message: _69.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_69.QueryVotesByProposalRequest>): _69.QueryVotesByProposalRequest;
                fromAmino(object: _69.QueryVotesByProposalRequestAmino): _69.QueryVotesByProposalRequest;
                toAmino(message: _69.QueryVotesByProposalRequest): _69.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _69.QueryVotesByProposalRequestAminoMsg): _69.QueryVotesByProposalRequest;
                toAminoMsg(message: _69.QueryVotesByProposalRequest): _69.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _69.QueryVotesByProposalRequestProtoMsg): _69.QueryVotesByProposalRequest;
                toProto(message: _69.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _69.QueryVotesByProposalRequest): _69.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _69.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVotesByProposalResponse;
                fromJSON(object: any): _69.QueryVotesByProposalResponse;
                toJSON(message: _69.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_69.QueryVotesByProposalResponse>): _69.QueryVotesByProposalResponse;
                fromAmino(object: _69.QueryVotesByProposalResponseAmino): _69.QueryVotesByProposalResponse;
                toAmino(message: _69.QueryVotesByProposalResponse): _69.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _69.QueryVotesByProposalResponseAminoMsg): _69.QueryVotesByProposalResponse;
                toAminoMsg(message: _69.QueryVotesByProposalResponse): _69.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _69.QueryVotesByProposalResponseProtoMsg): _69.QueryVotesByProposalResponse;
                toProto(message: _69.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _69.QueryVotesByProposalResponse): _69.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _69.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVotesByVoterRequest;
                fromJSON(object: any): _69.QueryVotesByVoterRequest;
                toJSON(message: _69.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_69.QueryVotesByVoterRequest>): _69.QueryVotesByVoterRequest;
                fromAmino(object: _69.QueryVotesByVoterRequestAmino): _69.QueryVotesByVoterRequest;
                toAmino(message: _69.QueryVotesByVoterRequest): _69.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _69.QueryVotesByVoterRequestAminoMsg): _69.QueryVotesByVoterRequest;
                toAminoMsg(message: _69.QueryVotesByVoterRequest): _69.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _69.QueryVotesByVoterRequestProtoMsg): _69.QueryVotesByVoterRequest;
                toProto(message: _69.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _69.QueryVotesByVoterRequest): _69.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _69.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVotesByVoterResponse;
                fromJSON(object: any): _69.QueryVotesByVoterResponse;
                toJSON(message: _69.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_69.QueryVotesByVoterResponse>): _69.QueryVotesByVoterResponse;
                fromAmino(object: _69.QueryVotesByVoterResponseAmino): _69.QueryVotesByVoterResponse;
                toAmino(message: _69.QueryVotesByVoterResponse): _69.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _69.QueryVotesByVoterResponseAminoMsg): _69.QueryVotesByVoterResponse;
                toAminoMsg(message: _69.QueryVotesByVoterResponse): _69.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _69.QueryVotesByVoterResponseProtoMsg): _69.QueryVotesByVoterResponse;
                toProto(message: _69.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _69.QueryVotesByVoterResponse): _69.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupsByMemberRequest;
                fromJSON(object: any): _69.QueryGroupsByMemberRequest;
                toJSON(message: _69.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_69.QueryGroupsByMemberRequest>): _69.QueryGroupsByMemberRequest;
                fromAmino(object: _69.QueryGroupsByMemberRequestAmino): _69.QueryGroupsByMemberRequest;
                toAmino(message: _69.QueryGroupsByMemberRequest): _69.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _69.QueryGroupsByMemberRequestAminoMsg): _69.QueryGroupsByMemberRequest;
                toAminoMsg(message: _69.QueryGroupsByMemberRequest): _69.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsByMemberRequestProtoMsg): _69.QueryGroupsByMemberRequest;
                toProto(message: _69.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsByMemberRequest): _69.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryGroupsByMemberResponse;
                fromJSON(object: any): _69.QueryGroupsByMemberResponse;
                toJSON(message: _69.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_69.QueryGroupsByMemberResponse>): _69.QueryGroupsByMemberResponse;
                fromAmino(object: _69.QueryGroupsByMemberResponseAmino): _69.QueryGroupsByMemberResponse;
                toAmino(message: _69.QueryGroupsByMemberResponse): _69.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _69.QueryGroupsByMemberResponseAminoMsg): _69.QueryGroupsByMemberResponse;
                toAminoMsg(message: _69.QueryGroupsByMemberResponse): _69.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsByMemberResponseProtoMsg): _69.QueryGroupsByMemberResponse;
                toProto(message: _69.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsByMemberResponse): _69.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _69.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryTallyResultRequest;
                fromJSON(object: any): _69.QueryTallyResultRequest;
                toJSON(message: _69.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_69.QueryTallyResultRequest>): _69.QueryTallyResultRequest;
                fromAmino(object: _69.QueryTallyResultRequestAmino): _69.QueryTallyResultRequest;
                toAmino(message: _69.QueryTallyResultRequest): _69.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _69.QueryTallyResultRequestAminoMsg): _69.QueryTallyResultRequest;
                toAminoMsg(message: _69.QueryTallyResultRequest): _69.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _69.QueryTallyResultRequestProtoMsg): _69.QueryTallyResultRequest;
                toProto(message: _69.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _69.QueryTallyResultRequest): _69.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _69.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryTallyResultResponse;
                fromJSON(object: any): _69.QueryTallyResultResponse;
                toJSON(message: _69.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_69.QueryTallyResultResponse>): _69.QueryTallyResultResponse;
                fromAmino(object: _69.QueryTallyResultResponseAmino): _69.QueryTallyResultResponse;
                toAmino(message: _69.QueryTallyResultResponse): _69.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _69.QueryTallyResultResponseAminoMsg): _69.QueryTallyResultResponse;
                toAminoMsg(message: _69.QueryTallyResultResponse): _69.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _69.QueryTallyResultResponseProtoMsg): _69.QueryTallyResultResponse;
                toProto(message: _69.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _69.QueryTallyResultResponse): _69.QueryTallyResultResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                fromJSON(object: any): _68.GenesisState;
                toJSON(message: _68.GenesisState): unknown;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                fromAmino(object: _68.GenesisStateAmino): _68.GenesisState;
                toAmino(message: _68.GenesisState): _68.GenesisStateAmino;
                fromAminoMsg(object: _68.GenesisStateAminoMsg): _68.GenesisState;
                toAminoMsg(message: _68.GenesisState): _68.GenesisStateAminoMsg;
                fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
                toProto(message: _68.GenesisState): Uint8Array;
                toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _67.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventCreateGroup;
                fromJSON(object: any): _67.EventCreateGroup;
                toJSON(message: _67.EventCreateGroup): unknown;
                fromPartial(object: Partial<_67.EventCreateGroup>): _67.EventCreateGroup;
                fromAmino(object: _67.EventCreateGroupAmino): _67.EventCreateGroup;
                toAmino(message: _67.EventCreateGroup): _67.EventCreateGroupAmino;
                fromAminoMsg(object: _67.EventCreateGroupAminoMsg): _67.EventCreateGroup;
                toAminoMsg(message: _67.EventCreateGroup): _67.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _67.EventCreateGroupProtoMsg): _67.EventCreateGroup;
                toProto(message: _67.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _67.EventCreateGroup): _67.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _67.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventUpdateGroup;
                fromJSON(object: any): _67.EventUpdateGroup;
                toJSON(message: _67.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_67.EventUpdateGroup>): _67.EventUpdateGroup;
                fromAmino(object: _67.EventUpdateGroupAmino): _67.EventUpdateGroup;
                toAmino(message: _67.EventUpdateGroup): _67.EventUpdateGroupAmino;
                fromAminoMsg(object: _67.EventUpdateGroupAminoMsg): _67.EventUpdateGroup;
                toAminoMsg(message: _67.EventUpdateGroup): _67.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _67.EventUpdateGroupProtoMsg): _67.EventUpdateGroup;
                toProto(message: _67.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _67.EventUpdateGroup): _67.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _67.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventCreateGroupPolicy;
                fromJSON(object: any): _67.EventCreateGroupPolicy;
                toJSON(message: _67.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_67.EventCreateGroupPolicy>): _67.EventCreateGroupPolicy;
                fromAmino(object: _67.EventCreateGroupPolicyAmino): _67.EventCreateGroupPolicy;
                toAmino(message: _67.EventCreateGroupPolicy): _67.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _67.EventCreateGroupPolicyAminoMsg): _67.EventCreateGroupPolicy;
                toAminoMsg(message: _67.EventCreateGroupPolicy): _67.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _67.EventCreateGroupPolicyProtoMsg): _67.EventCreateGroupPolicy;
                toProto(message: _67.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _67.EventCreateGroupPolicy): _67.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _67.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventUpdateGroupPolicy;
                fromJSON(object: any): _67.EventUpdateGroupPolicy;
                toJSON(message: _67.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_67.EventUpdateGroupPolicy>): _67.EventUpdateGroupPolicy;
                fromAmino(object: _67.EventUpdateGroupPolicyAmino): _67.EventUpdateGroupPolicy;
                toAmino(message: _67.EventUpdateGroupPolicy): _67.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _67.EventUpdateGroupPolicyAminoMsg): _67.EventUpdateGroupPolicy;
                toAminoMsg(message: _67.EventUpdateGroupPolicy): _67.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _67.EventUpdateGroupPolicyProtoMsg): _67.EventUpdateGroupPolicy;
                toProto(message: _67.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _67.EventUpdateGroupPolicy): _67.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _67.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventSubmitProposal;
                fromJSON(object: any): _67.EventSubmitProposal;
                toJSON(message: _67.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_67.EventSubmitProposal>): _67.EventSubmitProposal;
                fromAmino(object: _67.EventSubmitProposalAmino): _67.EventSubmitProposal;
                toAmino(message: _67.EventSubmitProposal): _67.EventSubmitProposalAmino;
                fromAminoMsg(object: _67.EventSubmitProposalAminoMsg): _67.EventSubmitProposal;
                toAminoMsg(message: _67.EventSubmitProposal): _67.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _67.EventSubmitProposalProtoMsg): _67.EventSubmitProposal;
                toProto(message: _67.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _67.EventSubmitProposal): _67.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _67.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventWithdrawProposal;
                fromJSON(object: any): _67.EventWithdrawProposal;
                toJSON(message: _67.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_67.EventWithdrawProposal>): _67.EventWithdrawProposal;
                fromAmino(object: _67.EventWithdrawProposalAmino): _67.EventWithdrawProposal;
                toAmino(message: _67.EventWithdrawProposal): _67.EventWithdrawProposalAmino;
                fromAminoMsg(object: _67.EventWithdrawProposalAminoMsg): _67.EventWithdrawProposal;
                toAminoMsg(message: _67.EventWithdrawProposal): _67.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _67.EventWithdrawProposalProtoMsg): _67.EventWithdrawProposal;
                toProto(message: _67.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _67.EventWithdrawProposal): _67.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _67.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventVote;
                fromJSON(object: any): _67.EventVote;
                toJSON(message: _67.EventVote): unknown;
                fromPartial(object: Partial<_67.EventVote>): _67.EventVote;
                fromAmino(object: _67.EventVoteAmino): _67.EventVote;
                toAmino(message: _67.EventVote): _67.EventVoteAmino;
                fromAminoMsg(object: _67.EventVoteAminoMsg): _67.EventVote;
                toAminoMsg(message: _67.EventVote): _67.EventVoteAminoMsg;
                fromProtoMsg(message: _67.EventVoteProtoMsg): _67.EventVote;
                toProto(message: _67.EventVote): Uint8Array;
                toProtoMsg(message: _67.EventVote): _67.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _67.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventExec;
                fromJSON(object: any): _67.EventExec;
                toJSON(message: _67.EventExec): unknown;
                fromPartial(object: Partial<_67.EventExec>): _67.EventExec;
                fromAmino(object: _67.EventExecAmino): _67.EventExec;
                toAmino(message: _67.EventExec): _67.EventExecAmino;
                fromAminoMsg(object: _67.EventExecAminoMsg): _67.EventExec;
                toAminoMsg(message: _67.EventExec): _67.EventExecAminoMsg;
                fromProtoMsg(message: _67.EventExecProtoMsg): _67.EventExec;
                toProto(message: _67.EventExec): Uint8Array;
                toProtoMsg(message: _67.EventExec): _67.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _67.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventLeaveGroup;
                fromJSON(object: any): _67.EventLeaveGroup;
                toJSON(message: _67.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_67.EventLeaveGroup>): _67.EventLeaveGroup;
                fromAmino(object: _67.EventLeaveGroupAmino): _67.EventLeaveGroup;
                toAmino(message: _67.EventLeaveGroup): _67.EventLeaveGroupAmino;
                fromAminoMsg(object: _67.EventLeaveGroupAminoMsg): _67.EventLeaveGroup;
                toAminoMsg(message: _67.EventLeaveGroup): _67.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _67.EventLeaveGroupProtoMsg): _67.EventLeaveGroup;
                toProto(message: _67.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _67.EventLeaveGroup): _67.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _286.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                inflation(request?: _74.QueryInflationRequest): Promise<_74.QueryInflationResponse>;
                annualProvisions(request?: _74.QueryAnnualProvisionsRequest): Promise<_74.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _267.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _74.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsRequest;
                fromJSON(_: any): _74.QueryParamsRequest;
                toJSON(_: _74.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
                fromAmino(_: _74.QueryParamsRequestAmino): _74.QueryParamsRequest;
                toAmino(_: _74.QueryParamsRequest): _74.QueryParamsRequestAmino;
                fromAminoMsg(object: _74.QueryParamsRequestAminoMsg): _74.QueryParamsRequest;
                toAminoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryParamsRequestProtoMsg): _74.QueryParamsRequest;
                toProto(message: _74.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _74.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsResponse;
                fromJSON(object: any): _74.QueryParamsResponse;
                toJSON(message: _74.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
                fromAmino(object: _74.QueryParamsResponseAmino): _74.QueryParamsResponse;
                toAmino(message: _74.QueryParamsResponse): _74.QueryParamsResponseAmino;
                fromAminoMsg(object: _74.QueryParamsResponseAminoMsg): _74.QueryParamsResponse;
                toAminoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryParamsResponseProtoMsg): _74.QueryParamsResponse;
                toProto(message: _74.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _74.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryInflationRequest;
                fromJSON(_: any): _74.QueryInflationRequest;
                toJSON(_: _74.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_74.QueryInflationRequest>): _74.QueryInflationRequest;
                fromAmino(_: _74.QueryInflationRequestAmino): _74.QueryInflationRequest;
                toAmino(_: _74.QueryInflationRequest): _74.QueryInflationRequestAmino;
                fromAminoMsg(object: _74.QueryInflationRequestAminoMsg): _74.QueryInflationRequest;
                toAminoMsg(message: _74.QueryInflationRequest): _74.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _74.QueryInflationRequestProtoMsg): _74.QueryInflationRequest;
                toProto(message: _74.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _74.QueryInflationRequest): _74.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _74.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryInflationResponse;
                fromJSON(object: any): _74.QueryInflationResponse;
                toJSON(message: _74.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_74.QueryInflationResponse>): _74.QueryInflationResponse;
                fromAmino(object: _74.QueryInflationResponseAmino): _74.QueryInflationResponse;
                toAmino(message: _74.QueryInflationResponse): _74.QueryInflationResponseAmino;
                fromAminoMsg(object: _74.QueryInflationResponseAminoMsg): _74.QueryInflationResponse;
                toAminoMsg(message: _74.QueryInflationResponse): _74.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _74.QueryInflationResponseProtoMsg): _74.QueryInflationResponse;
                toProto(message: _74.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _74.QueryInflationResponse): _74.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _74.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _74.QueryAnnualProvisionsRequest;
                toJSON(_: _74.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_74.QueryAnnualProvisionsRequest>): _74.QueryAnnualProvisionsRequest;
                fromAmino(_: _74.QueryAnnualProvisionsRequestAmino): _74.QueryAnnualProvisionsRequest;
                toAmino(_: _74.QueryAnnualProvisionsRequest): _74.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _74.QueryAnnualProvisionsRequestAminoMsg): _74.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _74.QueryAnnualProvisionsRequest): _74.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAnnualProvisionsRequestProtoMsg): _74.QueryAnnualProvisionsRequest;
                toProto(message: _74.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAnnualProvisionsRequest): _74.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _74.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _74.QueryAnnualProvisionsResponse;
                toJSON(message: _74.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_74.QueryAnnualProvisionsResponse>): _74.QueryAnnualProvisionsResponse;
                fromAmino(object: _74.QueryAnnualProvisionsResponseAmino): _74.QueryAnnualProvisionsResponse;
                toAmino(message: _74.QueryAnnualProvisionsResponse): _74.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _74.QueryAnnualProvisionsResponseAminoMsg): _74.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _74.QueryAnnualProvisionsResponse): _74.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAnnualProvisionsResponseProtoMsg): _74.QueryAnnualProvisionsResponse;
                toProto(message: _74.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAnnualProvisionsResponse): _74.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _73.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Minter;
                fromJSON(object: any): _73.Minter;
                toJSON(message: _73.Minter): unknown;
                fromPartial(object: Partial<_73.Minter>): _73.Minter;
                fromAmino(object: _73.MinterAmino): _73.Minter;
                toAmino(message: _73.Minter): _73.MinterAmino;
                fromAminoMsg(object: _73.MinterAminoMsg): _73.Minter;
                toAminoMsg(message: _73.Minter): _73.MinterAminoMsg;
                fromProtoMsg(message: _73.MinterProtoMsg): _73.Minter;
                toProto(message: _73.Minter): Uint8Array;
                toProtoMsg(message: _73.Minter): _73.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _73.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Params;
                fromJSON(object: any): _73.Params;
                toJSON(message: _73.Params): unknown;
                fromPartial(object: Partial<_73.Params>): _73.Params;
                fromAmino(object: _73.ParamsAmino): _73.Params;
                toAmino(message: _73.Params): _73.ParamsAmino;
                fromAminoMsg(object: _73.ParamsAminoMsg): _73.Params;
                toAminoMsg(message: _73.Params): _73.ParamsAminoMsg;
                fromProtoMsg(message: _73.ParamsProtoMsg): _73.Params;
                toProto(message: _73.Params): Uint8Array;
                toProtoMsg(message: _73.Params): _73.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                fromAmino(object: _72.GenesisStateAmino): _72.GenesisState;
                toAmino(message: _72.GenesisState): _72.GenesisStateAmino;
                fromAminoMsg(object: _72.GenesisStateAminoMsg): _72.GenesisState;
                toAminoMsg(message: _72.GenesisState): _72.GenesisStateAminoMsg;
                fromProtoMsg(message: _72.GenesisStateProtoMsg): _72.GenesisState;
                toProto(message: _72.GenesisState): Uint8Array;
                toProtoMsg(message: _72.GenesisState): _72.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _303.MsgClientImpl;
            QueryClientImpl: typeof _287.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                owner(request: _79.QueryOwnerRequest): Promise<_79.QueryOwnerResponse>;
                supply(request: _79.QuerySupplyRequest): Promise<_79.QuerySupplyResponse>;
                nFTs(request: _79.QueryNFTsRequest): Promise<_79.QueryNFTsResponse>;
                nFT(request: _79.QueryNFTRequest): Promise<_79.QueryNFTResponse>;
                class(request: _79.QueryClassRequest): Promise<_79.QueryClassResponse>;
                classes(request?: _79.QueryClassesRequest): Promise<_79.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _268.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _80.MsgSend) => _80.MsgSendAmino;
                    fromAmino: (object: _80.MsgSendAmino) => _80.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _80.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgSend;
                fromJSON(object: any): _80.MsgSend;
                toJSON(message: _80.MsgSend): unknown;
                fromPartial(object: Partial<_80.MsgSend>): _80.MsgSend;
                fromAmino(object: _80.MsgSendAmino): _80.MsgSend;
                toAmino(message: _80.MsgSend): _80.MsgSendAmino;
                fromAminoMsg(object: _80.MsgSendAminoMsg): _80.MsgSend;
                toAminoMsg(message: _80.MsgSend): _80.MsgSendAminoMsg;
                fromProtoMsg(message: _80.MsgSendProtoMsg): _80.MsgSend;
                toProto(message: _80.MsgSend): Uint8Array;
                toProtoMsg(message: _80.MsgSend): _80.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _80.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgSendResponse;
                fromJSON(_: any): _80.MsgSendResponse;
                toJSON(_: _80.MsgSendResponse): unknown;
                fromPartial(_: Partial<_80.MsgSendResponse>): _80.MsgSendResponse;
                fromAmino(_: _80.MsgSendResponseAmino): _80.MsgSendResponse;
                toAmino(_: _80.MsgSendResponse): _80.MsgSendResponseAmino;
                fromAminoMsg(object: _80.MsgSendResponseAminoMsg): _80.MsgSendResponse;
                toAminoMsg(message: _80.MsgSendResponse): _80.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _80.MsgSendResponseProtoMsg): _80.MsgSendResponse;
                toProto(message: _80.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _80.MsgSendResponse): _80.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _79.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBalanceRequest;
                fromJSON(object: any): _79.QueryBalanceRequest;
                toJSON(message: _79.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_79.QueryBalanceRequest>): _79.QueryBalanceRequest;
                fromAmino(object: _79.QueryBalanceRequestAmino): _79.QueryBalanceRequest;
                toAmino(message: _79.QueryBalanceRequest): _79.QueryBalanceRequestAmino;
                fromAminoMsg(object: _79.QueryBalanceRequestAminoMsg): _79.QueryBalanceRequest;
                toAminoMsg(message: _79.QueryBalanceRequest): _79.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _79.QueryBalanceRequestProtoMsg): _79.QueryBalanceRequest;
                toProto(message: _79.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _79.QueryBalanceRequest): _79.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _79.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBalanceResponse;
                fromJSON(object: any): _79.QueryBalanceResponse;
                toJSON(message: _79.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_79.QueryBalanceResponse>): _79.QueryBalanceResponse;
                fromAmino(object: _79.QueryBalanceResponseAmino): _79.QueryBalanceResponse;
                toAmino(message: _79.QueryBalanceResponse): _79.QueryBalanceResponseAmino;
                fromAminoMsg(object: _79.QueryBalanceResponseAminoMsg): _79.QueryBalanceResponse;
                toAminoMsg(message: _79.QueryBalanceResponse): _79.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _79.QueryBalanceResponseProtoMsg): _79.QueryBalanceResponse;
                toProto(message: _79.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _79.QueryBalanceResponse): _79.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _79.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOwnerRequest;
                fromJSON(object: any): _79.QueryOwnerRequest;
                toJSON(message: _79.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_79.QueryOwnerRequest>): _79.QueryOwnerRequest;
                fromAmino(object: _79.QueryOwnerRequestAmino): _79.QueryOwnerRequest;
                toAmino(message: _79.QueryOwnerRequest): _79.QueryOwnerRequestAmino;
                fromAminoMsg(object: _79.QueryOwnerRequestAminoMsg): _79.QueryOwnerRequest;
                toAminoMsg(message: _79.QueryOwnerRequest): _79.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _79.QueryOwnerRequestProtoMsg): _79.QueryOwnerRequest;
                toProto(message: _79.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _79.QueryOwnerRequest): _79.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _79.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOwnerResponse;
                fromJSON(object: any): _79.QueryOwnerResponse;
                toJSON(message: _79.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_79.QueryOwnerResponse>): _79.QueryOwnerResponse;
                fromAmino(object: _79.QueryOwnerResponseAmino): _79.QueryOwnerResponse;
                toAmino(message: _79.QueryOwnerResponse): _79.QueryOwnerResponseAmino;
                fromAminoMsg(object: _79.QueryOwnerResponseAminoMsg): _79.QueryOwnerResponse;
                toAminoMsg(message: _79.QueryOwnerResponse): _79.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _79.QueryOwnerResponseProtoMsg): _79.QueryOwnerResponse;
                toProto(message: _79.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _79.QueryOwnerResponse): _79.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _79.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySupplyRequest;
                fromJSON(object: any): _79.QuerySupplyRequest;
                toJSON(message: _79.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_79.QuerySupplyRequest>): _79.QuerySupplyRequest;
                fromAmino(object: _79.QuerySupplyRequestAmino): _79.QuerySupplyRequest;
                toAmino(message: _79.QuerySupplyRequest): _79.QuerySupplyRequestAmino;
                fromAminoMsg(object: _79.QuerySupplyRequestAminoMsg): _79.QuerySupplyRequest;
                toAminoMsg(message: _79.QuerySupplyRequest): _79.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySupplyRequestProtoMsg): _79.QuerySupplyRequest;
                toProto(message: _79.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySupplyRequest): _79.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _79.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySupplyResponse;
                fromJSON(object: any): _79.QuerySupplyResponse;
                toJSON(message: _79.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_79.QuerySupplyResponse>): _79.QuerySupplyResponse;
                fromAmino(object: _79.QuerySupplyResponseAmino): _79.QuerySupplyResponse;
                toAmino(message: _79.QuerySupplyResponse): _79.QuerySupplyResponseAmino;
                fromAminoMsg(object: _79.QuerySupplyResponseAminoMsg): _79.QuerySupplyResponse;
                toAminoMsg(message: _79.QuerySupplyResponse): _79.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySupplyResponseProtoMsg): _79.QuerySupplyResponse;
                toProto(message: _79.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySupplyResponse): _79.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _79.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryNFTsRequest;
                fromJSON(object: any): _79.QueryNFTsRequest;
                toJSON(message: _79.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_79.QueryNFTsRequest>): _79.QueryNFTsRequest;
                fromAmino(object: _79.QueryNFTsRequestAmino): _79.QueryNFTsRequest;
                toAmino(message: _79.QueryNFTsRequest): _79.QueryNFTsRequestAmino;
                fromAminoMsg(object: _79.QueryNFTsRequestAminoMsg): _79.QueryNFTsRequest;
                toAminoMsg(message: _79.QueryNFTsRequest): _79.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryNFTsRequestProtoMsg): _79.QueryNFTsRequest;
                toProto(message: _79.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryNFTsRequest): _79.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _79.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryNFTsResponse;
                fromJSON(object: any): _79.QueryNFTsResponse;
                toJSON(message: _79.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_79.QueryNFTsResponse>): _79.QueryNFTsResponse;
                fromAmino(object: _79.QueryNFTsResponseAmino): _79.QueryNFTsResponse;
                toAmino(message: _79.QueryNFTsResponse): _79.QueryNFTsResponseAmino;
                fromAminoMsg(object: _79.QueryNFTsResponseAminoMsg): _79.QueryNFTsResponse;
                toAminoMsg(message: _79.QueryNFTsResponse): _79.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryNFTsResponseProtoMsg): _79.QueryNFTsResponse;
                toProto(message: _79.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryNFTsResponse): _79.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _79.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryNFTRequest;
                fromJSON(object: any): _79.QueryNFTRequest;
                toJSON(message: _79.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_79.QueryNFTRequest>): _79.QueryNFTRequest;
                fromAmino(object: _79.QueryNFTRequestAmino): _79.QueryNFTRequest;
                toAmino(message: _79.QueryNFTRequest): _79.QueryNFTRequestAmino;
                fromAminoMsg(object: _79.QueryNFTRequestAminoMsg): _79.QueryNFTRequest;
                toAminoMsg(message: _79.QueryNFTRequest): _79.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _79.QueryNFTRequestProtoMsg): _79.QueryNFTRequest;
                toProto(message: _79.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _79.QueryNFTRequest): _79.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _79.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryNFTResponse;
                fromJSON(object: any): _79.QueryNFTResponse;
                toJSON(message: _79.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_79.QueryNFTResponse>): _79.QueryNFTResponse;
                fromAmino(object: _79.QueryNFTResponseAmino): _79.QueryNFTResponse;
                toAmino(message: _79.QueryNFTResponse): _79.QueryNFTResponseAmino;
                fromAminoMsg(object: _79.QueryNFTResponseAminoMsg): _79.QueryNFTResponse;
                toAminoMsg(message: _79.QueryNFTResponse): _79.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _79.QueryNFTResponseProtoMsg): _79.QueryNFTResponse;
                toProto(message: _79.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _79.QueryNFTResponse): _79.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _79.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClassRequest;
                fromJSON(object: any): _79.QueryClassRequest;
                toJSON(message: _79.QueryClassRequest): unknown;
                fromPartial(object: Partial<_79.QueryClassRequest>): _79.QueryClassRequest;
                fromAmino(object: _79.QueryClassRequestAmino): _79.QueryClassRequest;
                toAmino(message: _79.QueryClassRequest): _79.QueryClassRequestAmino;
                fromAminoMsg(object: _79.QueryClassRequestAminoMsg): _79.QueryClassRequest;
                toAminoMsg(message: _79.QueryClassRequest): _79.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _79.QueryClassRequestProtoMsg): _79.QueryClassRequest;
                toProto(message: _79.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _79.QueryClassRequest): _79.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _79.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClassResponse;
                fromJSON(object: any): _79.QueryClassResponse;
                toJSON(message: _79.QueryClassResponse): unknown;
                fromPartial(object: Partial<_79.QueryClassResponse>): _79.QueryClassResponse;
                fromAmino(object: _79.QueryClassResponseAmino): _79.QueryClassResponse;
                toAmino(message: _79.QueryClassResponse): _79.QueryClassResponseAmino;
                fromAminoMsg(object: _79.QueryClassResponseAminoMsg): _79.QueryClassResponse;
                toAminoMsg(message: _79.QueryClassResponse): _79.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _79.QueryClassResponseProtoMsg): _79.QueryClassResponse;
                toProto(message: _79.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _79.QueryClassResponse): _79.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _79.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClassesRequest;
                fromJSON(object: any): _79.QueryClassesRequest;
                toJSON(message: _79.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_79.QueryClassesRequest>): _79.QueryClassesRequest;
                fromAmino(object: _79.QueryClassesRequestAmino): _79.QueryClassesRequest;
                toAmino(message: _79.QueryClassesRequest): _79.QueryClassesRequestAmino;
                fromAminoMsg(object: _79.QueryClassesRequestAminoMsg): _79.QueryClassesRequest;
                toAminoMsg(message: _79.QueryClassesRequest): _79.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _79.QueryClassesRequestProtoMsg): _79.QueryClassesRequest;
                toProto(message: _79.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _79.QueryClassesRequest): _79.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _79.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClassesResponse;
                fromJSON(object: any): _79.QueryClassesResponse;
                toJSON(message: _79.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_79.QueryClassesResponse>): _79.QueryClassesResponse;
                fromAmino(object: _79.QueryClassesResponseAmino): _79.QueryClassesResponse;
                toAmino(message: _79.QueryClassesResponse): _79.QueryClassesResponseAmino;
                fromAminoMsg(object: _79.QueryClassesResponseAminoMsg): _79.QueryClassesResponse;
                toAminoMsg(message: _79.QueryClassesResponse): _79.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _79.QueryClassesResponseProtoMsg): _79.QueryClassesResponse;
                toProto(message: _79.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _79.QueryClassesResponse): _79.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _78.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Class;
                fromJSON(object: any): _78.Class;
                toJSON(message: _78.Class): unknown;
                fromPartial(object: Partial<_78.Class>): _78.Class;
                fromAmino(object: _78.ClassAmino): _78.Class;
                toAmino(message: _78.Class): _78.ClassAmino;
                fromAminoMsg(object: _78.ClassAminoMsg): _78.Class;
                toAminoMsg(message: _78.Class): _78.ClassAminoMsg;
                fromProtoMsg(message: _78.ClassProtoMsg): _78.Class;
                toProto(message: _78.Class): Uint8Array;
                toProtoMsg(message: _78.Class): _78.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _78.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.NFT;
                fromJSON(object: any): _78.NFT;
                toJSON(message: _78.NFT): unknown;
                fromPartial(object: Partial<_78.NFT>): _78.NFT;
                fromAmino(object: _78.NFTAmino): _78.NFT;
                toAmino(message: _78.NFT): _78.NFTAmino;
                fromAminoMsg(object: _78.NFTAminoMsg): _78.NFT;
                toAminoMsg(message: _78.NFT): _78.NFTAminoMsg;
                fromProtoMsg(message: _78.NFTProtoMsg): _78.NFT;
                toProto(message: _78.NFT): Uint8Array;
                toProtoMsg(message: _78.NFT): _78.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                fromJSON(object: any): _77.GenesisState;
                toJSON(message: _77.GenesisState): unknown;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
                fromAmino(object: _77.GenesisStateAmino): _77.GenesisState;
                toAmino(message: _77.GenesisState): _77.GenesisStateAmino;
                fromAminoMsg(object: _77.GenesisStateAminoMsg): _77.GenesisState;
                toAminoMsg(message: _77.GenesisState): _77.GenesisStateAminoMsg;
                fromProtoMsg(message: _77.GenesisStateProtoMsg): _77.GenesisState;
                toProto(message: _77.GenesisState): Uint8Array;
                toProtoMsg(message: _77.GenesisState): _77.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _77.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Entry;
                fromJSON(object: any): _77.Entry;
                toJSON(message: _77.Entry): unknown;
                fromPartial(object: Partial<_77.Entry>): _77.Entry;
                fromAmino(object: _77.EntryAmino): _77.Entry;
                toAmino(message: _77.Entry): _77.EntryAmino;
                fromAminoMsg(object: _77.EntryAminoMsg): _77.Entry;
                toAminoMsg(message: _77.Entry): _77.EntryAminoMsg;
                fromProtoMsg(message: _77.EntryProtoMsg): _77.Entry;
                toProto(message: _77.Entry): Uint8Array;
                toProtoMsg(message: _77.Entry): _77.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _76.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventSend;
                fromJSON(object: any): _76.EventSend;
                toJSON(message: _76.EventSend): unknown;
                fromPartial(object: Partial<_76.EventSend>): _76.EventSend;
                fromAmino(object: _76.EventSendAmino): _76.EventSend;
                toAmino(message: _76.EventSend): _76.EventSendAmino;
                fromAminoMsg(object: _76.EventSendAminoMsg): _76.EventSend;
                toAminoMsg(message: _76.EventSend): _76.EventSendAminoMsg;
                fromProtoMsg(message: _76.EventSendProtoMsg): _76.EventSend;
                toProto(message: _76.EventSend): Uint8Array;
                toProtoMsg(message: _76.EventSend): _76.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _76.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventMint;
                fromJSON(object: any): _76.EventMint;
                toJSON(message: _76.EventMint): unknown;
                fromPartial(object: Partial<_76.EventMint>): _76.EventMint;
                fromAmino(object: _76.EventMintAmino): _76.EventMint;
                toAmino(message: _76.EventMint): _76.EventMintAmino;
                fromAminoMsg(object: _76.EventMintAminoMsg): _76.EventMint;
                toAminoMsg(message: _76.EventMint): _76.EventMintAminoMsg;
                fromProtoMsg(message: _76.EventMintProtoMsg): _76.EventMint;
                toProto(message: _76.EventMint): Uint8Array;
                toProtoMsg(message: _76.EventMint): _76.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _76.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventBurn;
                fromJSON(object: any): _76.EventBurn;
                toJSON(message: _76.EventBurn): unknown;
                fromPartial(object: Partial<_76.EventBurn>): _76.EventBurn;
                fromAmino(object: _76.EventBurnAmino): _76.EventBurn;
                toAmino(message: _76.EventBurn): _76.EventBurnAmino;
                fromAminoMsg(object: _76.EventBurnAminoMsg): _76.EventBurn;
                toAminoMsg(message: _76.EventBurn): _76.EventBurnAminoMsg;
                fromProtoMsg(message: _76.EventBurnProtoMsg): _76.EventBurn;
                toProto(message: _76.EventBurn): Uint8Array;
                toProtoMsg(message: _76.EventBurn): _76.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _81.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.TableDescriptor;
                fromJSON(object: any): _81.TableDescriptor;
                toJSON(message: _81.TableDescriptor): unknown;
                fromPartial(object: Partial<_81.TableDescriptor>): _81.TableDescriptor;
                fromAmino(object: _81.TableDescriptorAmino): _81.TableDescriptor;
                toAmino(message: _81.TableDescriptor): _81.TableDescriptorAmino;
                fromAminoMsg(object: _81.TableDescriptorAminoMsg): _81.TableDescriptor;
                toAminoMsg(message: _81.TableDescriptor): _81.TableDescriptorAminoMsg;
                fromProtoMsg(message: _81.TableDescriptorProtoMsg): _81.TableDescriptor;
                toProto(message: _81.TableDescriptor): Uint8Array;
                toProtoMsg(message: _81.TableDescriptor): _81.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _81.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PrimaryKeyDescriptor;
                fromJSON(object: any): _81.PrimaryKeyDescriptor;
                toJSON(message: _81.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_81.PrimaryKeyDescriptor>): _81.PrimaryKeyDescriptor;
                fromAmino(object: _81.PrimaryKeyDescriptorAmino): _81.PrimaryKeyDescriptor;
                toAmino(message: _81.PrimaryKeyDescriptor): _81.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _81.PrimaryKeyDescriptorAminoMsg): _81.PrimaryKeyDescriptor;
                toAminoMsg(message: _81.PrimaryKeyDescriptor): _81.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _81.PrimaryKeyDescriptorProtoMsg): _81.PrimaryKeyDescriptor;
                toProto(message: _81.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _81.PrimaryKeyDescriptor): _81.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _81.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SecondaryIndexDescriptor;
                fromJSON(object: any): _81.SecondaryIndexDescriptor;
                toJSON(message: _81.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_81.SecondaryIndexDescriptor>): _81.SecondaryIndexDescriptor;
                fromAmino(object: _81.SecondaryIndexDescriptorAmino): _81.SecondaryIndexDescriptor;
                toAmino(message: _81.SecondaryIndexDescriptor): _81.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _81.SecondaryIndexDescriptorAminoMsg): _81.SecondaryIndexDescriptor;
                toAminoMsg(message: _81.SecondaryIndexDescriptor): _81.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _81.SecondaryIndexDescriptorProtoMsg): _81.SecondaryIndexDescriptor;
                toProto(message: _81.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _81.SecondaryIndexDescriptor): _81.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _81.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SingletonDescriptor;
                fromJSON(object: any): _81.SingletonDescriptor;
                toJSON(message: _81.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_81.SingletonDescriptor>): _81.SingletonDescriptor;
                fromAmino(object: _81.SingletonDescriptorAmino): _81.SingletonDescriptor;
                toAmino(message: _81.SingletonDescriptor): _81.SingletonDescriptorAmino;
                fromAminoMsg(object: _81.SingletonDescriptorAminoMsg): _81.SingletonDescriptor;
                toAminoMsg(message: _81.SingletonDescriptor): _81.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _81.SingletonDescriptorProtoMsg): _81.SingletonDescriptor;
                toProto(message: _81.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _81.SingletonDescriptor): _81.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _82.StorageType;
            storageTypeToJSON(object: _82.StorageType): string;
            StorageType: typeof _82.StorageType;
            StorageTypeSDKType: typeof _82.StorageType;
            StorageTypeAmino: typeof _82.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _82.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ModuleSchemaDescriptor;
                fromJSON(object: any): _82.ModuleSchemaDescriptor;
                toJSON(message: _82.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_82.ModuleSchemaDescriptor>): _82.ModuleSchemaDescriptor;
                fromAmino(object: _82.ModuleSchemaDescriptorAmino): _82.ModuleSchemaDescriptor;
                toAmino(message: _82.ModuleSchemaDescriptor): _82.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _82.ModuleSchemaDescriptorAminoMsg): _82.ModuleSchemaDescriptor;
                toAminoMsg(message: _82.ModuleSchemaDescriptor): _82.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _82.ModuleSchemaDescriptorProtoMsg): _82.ModuleSchemaDescriptor;
                toProto(message: _82.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _82.ModuleSchemaDescriptor): _82.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _82.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _82.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _82.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_82.ModuleSchemaDescriptor_FileEntry>): _82.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _82.ModuleSchemaDescriptor_FileEntryAmino): _82.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _82.ModuleSchemaDescriptor_FileEntry): _82.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _82.ModuleSchemaDescriptor_FileEntryAminoMsg): _82.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _82.ModuleSchemaDescriptor_FileEntry): _82.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _82.ModuleSchemaDescriptor_FileEntryProtoMsg): _82.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _82.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _82.ModuleSchemaDescriptor_FileEntry): _82.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _288.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _269.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _85.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsRequest;
                fromJSON(object: any): _85.QueryParamsRequest;
                toJSON(message: _85.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
                fromAmino(object: _85.QueryParamsRequestAmino): _85.QueryParamsRequest;
                toAmino(message: _85.QueryParamsRequest): _85.QueryParamsRequestAmino;
                fromAminoMsg(object: _85.QueryParamsRequestAminoMsg): _85.QueryParamsRequest;
                toAminoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryParamsRequestProtoMsg): _85.QueryParamsRequest;
                toProto(message: _85.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _85.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsResponse;
                fromJSON(object: any): _85.QueryParamsResponse;
                toJSON(message: _85.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
                fromAmino(object: _85.QueryParamsResponseAmino): _85.QueryParamsResponse;
                toAmino(message: _85.QueryParamsResponse): _85.QueryParamsResponseAmino;
                fromAminoMsg(object: _85.QueryParamsResponseAminoMsg): _85.QueryParamsResponse;
                toAminoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryParamsResponseProtoMsg): _85.QueryParamsResponse;
                toProto(message: _85.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _84.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ParameterChangeProposal;
                fromJSON(object: any): _84.ParameterChangeProposal;
                toJSON(message: _84.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_84.ParameterChangeProposal>): _84.ParameterChangeProposal;
                fromAmino(object: _84.ParameterChangeProposalAmino): _84.ParameterChangeProposal;
                toAmino(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalAmino;
                fromAminoMsg(object: _84.ParameterChangeProposalAminoMsg): _84.ParameterChangeProposal;
                toAminoMsg(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _84.ParameterChangeProposalProtoMsg): _84.ParameterChangeProposal;
                toProto(message: _84.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _84.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ParamChange;
                fromJSON(object: any): _84.ParamChange;
                toJSON(message: _84.ParamChange): unknown;
                fromPartial(object: Partial<_84.ParamChange>): _84.ParamChange;
                fromAmino(object: _84.ParamChangeAmino): _84.ParamChange;
                toAmino(message: _84.ParamChange): _84.ParamChangeAmino;
                fromAminoMsg(object: _84.ParamChangeAminoMsg): _84.ParamChange;
                toAminoMsg(message: _84.ParamChange): _84.ParamChangeAminoMsg;
                fromProtoMsg(message: _84.ParamChangeProtoMsg): _84.ParamChange;
                toProto(message: _84.ParamChange): Uint8Array;
                toProtoMsg(message: _84.ParamChange): _84.ParamChangeProtoMsg;
            };
            FeesParams: {
                typeUrl: string;
                encode(message: _83.FeesParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.FeesParams;
                fromJSON(object: any): _83.FeesParams;
                toJSON(message: _83.FeesParams): unknown;
                fromPartial(object: Partial<_83.FeesParams>): _83.FeesParams;
                fromAmino(object: _83.FeesParamsAmino): _83.FeesParams;
                toAmino(message: _83.FeesParams): _83.FeesParamsAmino;
                fromAminoMsg(object: _83.FeesParamsAminoMsg): _83.FeesParams;
                toAminoMsg(message: _83.FeesParams): _83.FeesParamsAminoMsg;
                fromProtoMsg(message: _83.FeesParamsProtoMsg): _83.FeesParams;
                toProto(message: _83.FeesParams): Uint8Array;
                toProtoMsg(message: _83.FeesParams): _83.FeesParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromJSON(object: any): _83.GenesisState;
                toJSON(message: _83.GenesisState): unknown;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
                fromAmino(object: _83.GenesisStateAmino): _83.GenesisState;
                toAmino(message: _83.GenesisState): _83.GenesisStateAmino;
                fromAminoMsg(object: _83.GenesisStateAminoMsg): _83.GenesisState;
                toAminoMsg(message: _83.GenesisState): _83.GenesisStateAminoMsg;
                fromProtoMsg(message: _83.GenesisStateProtoMsg): _83.GenesisState;
                toProto(message: _83.GenesisState): Uint8Array;
                toProtoMsg(message: _83.GenesisState): _83.GenesisStateProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _304.MsgClientImpl;
            QueryClientImpl: typeof _289.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _270.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUnjail) => _89.MsgUnjailAmino;
                    fromAmino: (object: _89.MsgUnjailAmino) => _89.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _89.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUnjail;
                fromJSON(object: any): _89.MsgUnjail;
                toJSON(message: _89.MsgUnjail): unknown;
                fromPartial(object: Partial<_89.MsgUnjail>): _89.MsgUnjail;
                fromAmino(object: _89.MsgUnjailAmino): _89.MsgUnjail;
                toAmino(message: _89.MsgUnjail): _89.MsgUnjailAmino;
                fromAminoMsg(object: _89.MsgUnjailAminoMsg): _89.MsgUnjail;
                toAminoMsg(message: _89.MsgUnjail): _89.MsgUnjailAminoMsg;
                fromProtoMsg(message: _89.MsgUnjailProtoMsg): _89.MsgUnjail;
                toProto(message: _89.MsgUnjail): Uint8Array;
                toProtoMsg(message: _89.MsgUnjail): _89.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _89.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUnjailResponse;
                fromJSON(_: any): _89.MsgUnjailResponse;
                toJSON(_: _89.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_89.MsgUnjailResponse>): _89.MsgUnjailResponse;
                fromAmino(_: _89.MsgUnjailResponseAmino): _89.MsgUnjailResponse;
                toAmino(_: _89.MsgUnjailResponse): _89.MsgUnjailResponseAmino;
                fromAminoMsg(object: _89.MsgUnjailResponseAminoMsg): _89.MsgUnjailResponse;
                toAminoMsg(message: _89.MsgUnjailResponse): _89.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUnjailResponseProtoMsg): _89.MsgUnjailResponse;
                toProto(message: _89.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUnjailResponse): _89.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfoLegacyMissedHeights: {
                typeUrl: string;
                encode(message: _88.ValidatorSigningInfoLegacyMissedHeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorSigningInfoLegacyMissedHeights;
                fromJSON(object: any): _88.ValidatorSigningInfoLegacyMissedHeights;
                toJSON(message: _88.ValidatorSigningInfoLegacyMissedHeights): unknown;
                fromPartial(object: Partial<_88.ValidatorSigningInfoLegacyMissedHeights>): _88.ValidatorSigningInfoLegacyMissedHeights;
                fromAmino(object: _88.ValidatorSigningInfoLegacyMissedHeightsAmino): _88.ValidatorSigningInfoLegacyMissedHeights;
                toAmino(message: _88.ValidatorSigningInfoLegacyMissedHeights): _88.ValidatorSigningInfoLegacyMissedHeightsAmino;
                fromAminoMsg(object: _88.ValidatorSigningInfoLegacyMissedHeightsAminoMsg): _88.ValidatorSigningInfoLegacyMissedHeights;
                toAminoMsg(message: _88.ValidatorSigningInfoLegacyMissedHeights): _88.ValidatorSigningInfoLegacyMissedHeightsAminoMsg;
                fromProtoMsg(message: _88.ValidatorSigningInfoLegacyMissedHeightsProtoMsg): _88.ValidatorSigningInfoLegacyMissedHeights;
                toProto(message: _88.ValidatorSigningInfoLegacyMissedHeights): Uint8Array;
                toProtoMsg(message: _88.ValidatorSigningInfoLegacyMissedHeights): _88.ValidatorSigningInfoLegacyMissedHeightsProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _88.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorSigningInfo;
                fromJSON(object: any): _88.ValidatorSigningInfo;
                toJSON(message: _88.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_88.ValidatorSigningInfo>): _88.ValidatorSigningInfo;
                fromAmino(object: _88.ValidatorSigningInfoAmino): _88.ValidatorSigningInfo;
                toAmino(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _88.ValidatorSigningInfoAminoMsg): _88.ValidatorSigningInfo;
                toAminoMsg(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _88.ValidatorSigningInfoProtoMsg): _88.ValidatorSigningInfo;
                toProto(message: _88.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoProtoMsg;
            };
            ValidatorMissedBlockArrayLegacyMissedHeights: {
                typeUrl: string;
                encode(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                fromJSON(object: any): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                toJSON(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): unknown;
                fromPartial(object: Partial<_88.ValidatorMissedBlockArrayLegacyMissedHeights>): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                fromAmino(object: _88.ValidatorMissedBlockArrayLegacyMissedHeightsAmino): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                toAmino(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): _88.ValidatorMissedBlockArrayLegacyMissedHeightsAmino;
                fromAminoMsg(object: _88.ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                toAminoMsg(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): _88.ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg;
                fromProtoMsg(message: _88.ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                toProto(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): Uint8Array;
                toProtoMsg(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): _88.ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg;
            };
            ValidatorMissedBlockArray: {
                typeUrl: string;
                encode(message: _88.ValidatorMissedBlockArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorMissedBlockArray;
                fromJSON(object: any): _88.ValidatorMissedBlockArray;
                toJSON(message: _88.ValidatorMissedBlockArray): unknown;
                fromPartial(object: Partial<_88.ValidatorMissedBlockArray>): _88.ValidatorMissedBlockArray;
                fromAmino(object: _88.ValidatorMissedBlockArrayAmino): _88.ValidatorMissedBlockArray;
                toAmino(message: _88.ValidatorMissedBlockArray): _88.ValidatorMissedBlockArrayAmino;
                fromAminoMsg(object: _88.ValidatorMissedBlockArrayAminoMsg): _88.ValidatorMissedBlockArray;
                toAminoMsg(message: _88.ValidatorMissedBlockArray): _88.ValidatorMissedBlockArrayAminoMsg;
                fromProtoMsg(message: _88.ValidatorMissedBlockArrayProtoMsg): _88.ValidatorMissedBlockArray;
                toProto(message: _88.ValidatorMissedBlockArray): Uint8Array;
                toProtoMsg(message: _88.ValidatorMissedBlockArray): _88.ValidatorMissedBlockArrayProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Params;
                fromJSON(object: any): _88.Params;
                toJSON(message: _88.Params): unknown;
                fromPartial(object: Partial<_88.Params>): _88.Params;
                fromAmino(object: _88.ParamsAmino): _88.Params;
                toAmino(message: _88.Params): _88.ParamsAmino;
                fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                toAminoMsg(message: _88.Params): _88.ParamsAminoMsg;
                fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                toProto(message: _88.Params): Uint8Array;
                toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsRequest;
                fromJSON(_: any): _87.QueryParamsRequest;
                toJSON(_: _87.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                toAminoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                toProto(message: _87.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsResponse;
                fromJSON(object: any): _87.QueryParamsResponse;
                toJSON(message: _87.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                toAminoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                toProto(message: _87.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySigningInfoRequest;
                fromJSON(object: any): _87.QuerySigningInfoRequest;
                toJSON(message: _87.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_87.QuerySigningInfoRequest>): _87.QuerySigningInfoRequest;
                fromAmino(object: _87.QuerySigningInfoRequestAmino): _87.QuerySigningInfoRequest;
                toAmino(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _87.QuerySigningInfoRequestAminoMsg): _87.QuerySigningInfoRequest;
                toAminoMsg(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfoRequestProtoMsg): _87.QuerySigningInfoRequest;
                toProto(message: _87.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySigningInfoResponse;
                fromJSON(object: any): _87.QuerySigningInfoResponse;
                toJSON(message: _87.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_87.QuerySigningInfoResponse>): _87.QuerySigningInfoResponse;
                fromAmino(object: _87.QuerySigningInfoResponseAmino): _87.QuerySigningInfoResponse;
                toAmino(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _87.QuerySigningInfoResponseAminoMsg): _87.QuerySigningInfoResponse;
                toAminoMsg(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfoResponseProtoMsg): _87.QuerySigningInfoResponse;
                toProto(message: _87.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySigningInfosRequest;
                fromJSON(object: any): _87.QuerySigningInfosRequest;
                toJSON(message: _87.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_87.QuerySigningInfosRequest>): _87.QuerySigningInfosRequest;
                fromAmino(object: _87.QuerySigningInfosRequestAmino): _87.QuerySigningInfosRequest;
                toAmino(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _87.QuerySigningInfosRequestAminoMsg): _87.QuerySigningInfosRequest;
                toAminoMsg(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfosRequestProtoMsg): _87.QuerySigningInfosRequest;
                toProto(message: _87.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySigningInfosResponse;
                fromJSON(object: any): _87.QuerySigningInfosResponse;
                toJSON(message: _87.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_87.QuerySigningInfosResponse>): _87.QuerySigningInfosResponse;
                fromAmino(object: _87.QuerySigningInfosResponseAmino): _87.QuerySigningInfosResponse;
                toAmino(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _87.QuerySigningInfosResponseAminoMsg): _87.QuerySigningInfosResponse;
                toAminoMsg(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfosResponseProtoMsg): _87.QuerySigningInfosResponse;
                toProto(message: _87.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisState;
                fromJSON(object: any): _86.GenesisState;
                toJSON(message: _86.GenesisState): unknown;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
            GenesisStateLegacyMissingHeights: {
                typeUrl: string;
                encode(message: _86.GenesisStateLegacyMissingHeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisStateLegacyMissingHeights;
                fromJSON(object: any): _86.GenesisStateLegacyMissingHeights;
                toJSON(message: _86.GenesisStateLegacyMissingHeights): unknown;
                fromPartial(object: Partial<_86.GenesisStateLegacyMissingHeights>): _86.GenesisStateLegacyMissingHeights;
                fromAmino(object: _86.GenesisStateLegacyMissingHeightsAmino): _86.GenesisStateLegacyMissingHeights;
                toAmino(message: _86.GenesisStateLegacyMissingHeights): _86.GenesisStateLegacyMissingHeightsAmino;
                fromAminoMsg(object: _86.GenesisStateLegacyMissingHeightsAminoMsg): _86.GenesisStateLegacyMissingHeights;
                toAminoMsg(message: _86.GenesisStateLegacyMissingHeights): _86.GenesisStateLegacyMissingHeightsAminoMsg;
                fromProtoMsg(message: _86.GenesisStateLegacyMissingHeightsProtoMsg): _86.GenesisStateLegacyMissingHeights;
                toProto(message: _86.GenesisStateLegacyMissingHeights): Uint8Array;
                toProtoMsg(message: _86.GenesisStateLegacyMissingHeights): _86.GenesisStateLegacyMissingHeightsProtoMsg;
            };
            GenesisStateLegacyV43: {
                typeUrl: string;
                encode(message: _86.GenesisStateLegacyV43, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisStateLegacyV43;
                fromJSON(object: any): _86.GenesisStateLegacyV43;
                toJSON(message: _86.GenesisStateLegacyV43): unknown;
                fromPartial(object: Partial<_86.GenesisStateLegacyV43>): _86.GenesisStateLegacyV43;
                fromAmino(object: _86.GenesisStateLegacyV43Amino): _86.GenesisStateLegacyV43;
                toAmino(message: _86.GenesisStateLegacyV43): _86.GenesisStateLegacyV43Amino;
                fromAminoMsg(object: _86.GenesisStateLegacyV43AminoMsg): _86.GenesisStateLegacyV43;
                toAminoMsg(message: _86.GenesisStateLegacyV43): _86.GenesisStateLegacyV43AminoMsg;
                fromProtoMsg(message: _86.GenesisStateLegacyV43ProtoMsg): _86.GenesisStateLegacyV43;
                toProto(message: _86.GenesisStateLegacyV43): Uint8Array;
                toProtoMsg(message: _86.GenesisStateLegacyV43): _86.GenesisStateLegacyV43ProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _86.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SigningInfo;
                fromJSON(object: any): _86.SigningInfo;
                toJSON(message: _86.SigningInfo): unknown;
                fromPartial(object: Partial<_86.SigningInfo>): _86.SigningInfo;
                fromAmino(object: _86.SigningInfoAmino): _86.SigningInfo;
                toAmino(message: _86.SigningInfo): _86.SigningInfoAmino;
                fromAminoMsg(object: _86.SigningInfoAminoMsg): _86.SigningInfo;
                toAminoMsg(message: _86.SigningInfo): _86.SigningInfoAminoMsg;
                fromProtoMsg(message: _86.SigningInfoProtoMsg): _86.SigningInfo;
                toProto(message: _86.SigningInfo): Uint8Array;
                toProtoMsg(message: _86.SigningInfo): _86.SigningInfoProtoMsg;
            };
            SigningInfoLegacyMissedHeights: {
                typeUrl: string;
                encode(message: _86.SigningInfoLegacyMissedHeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SigningInfoLegacyMissedHeights;
                fromJSON(object: any): _86.SigningInfoLegacyMissedHeights;
                toJSON(message: _86.SigningInfoLegacyMissedHeights): unknown;
                fromPartial(object: Partial<_86.SigningInfoLegacyMissedHeights>): _86.SigningInfoLegacyMissedHeights;
                fromAmino(object: _86.SigningInfoLegacyMissedHeightsAmino): _86.SigningInfoLegacyMissedHeights;
                toAmino(message: _86.SigningInfoLegacyMissedHeights): _86.SigningInfoLegacyMissedHeightsAmino;
                fromAminoMsg(object: _86.SigningInfoLegacyMissedHeightsAminoMsg): _86.SigningInfoLegacyMissedHeights;
                toAminoMsg(message: _86.SigningInfoLegacyMissedHeights): _86.SigningInfoLegacyMissedHeightsAminoMsg;
                fromProtoMsg(message: _86.SigningInfoLegacyMissedHeightsProtoMsg): _86.SigningInfoLegacyMissedHeights;
                toProto(message: _86.SigningInfoLegacyMissedHeights): Uint8Array;
                toProtoMsg(message: _86.SigningInfoLegacyMissedHeights): _86.SigningInfoLegacyMissedHeightsProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _86.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValidatorMissedBlocks;
                fromJSON(object: any): _86.ValidatorMissedBlocks;
                toJSON(message: _86.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_86.ValidatorMissedBlocks>): _86.ValidatorMissedBlocks;
                fromAmino(object: _86.ValidatorMissedBlocksAmino): _86.ValidatorMissedBlocks;
                toAmino(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _86.ValidatorMissedBlocksAminoMsg): _86.ValidatorMissedBlocks;
                toAminoMsg(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _86.ValidatorMissedBlocksProtoMsg): _86.ValidatorMissedBlocks;
                toProto(message: _86.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _86.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MissedBlock;
                fromJSON(object: any): _86.MissedBlock;
                toJSON(message: _86.MissedBlock): unknown;
                fromPartial(object: Partial<_86.MissedBlock>): _86.MissedBlock;
                fromAmino(object: _86.MissedBlockAmino): _86.MissedBlock;
                toAmino(message: _86.MissedBlock): _86.MissedBlockAmino;
                fromAminoMsg(object: _86.MissedBlockAminoMsg): _86.MissedBlock;
                toAminoMsg(message: _86.MissedBlock): _86.MissedBlockAminoMsg;
                fromProtoMsg(message: _86.MissedBlockProtoMsg): _86.MissedBlock;
                toProto(message: _86.MissedBlock): Uint8Array;
                toProtoMsg(message: _86.MissedBlock): _86.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _305.MsgClientImpl;
            QueryClientImpl: typeof _290.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _271.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreateValidator) => _94.MsgCreateValidatorAmino;
                    fromAmino: (object: _94.MsgCreateValidatorAmino) => _94.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _94.MsgEditValidator) => _94.MsgEditValidatorAmino;
                    fromAmino: (object: _94.MsgEditValidatorAmino) => _94.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgDelegate) => _94.MsgDelegateAmino;
                    fromAmino: (object: _94.MsgDelegateAmino) => _94.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgBeginRedelegate) => _94.MsgBeginRedelegateAmino;
                    fromAmino: (object: _94.MsgBeginRedelegateAmino) => _94.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUndelegate) => _94.MsgUndelegateAmino;
                    fromAmino: (object: _94.MsgUndelegateAmino) => _94.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _94.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateValidator;
                fromJSON(object: any): _94.MsgCreateValidator;
                toJSON(message: _94.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_94.MsgCreateValidator>): _94.MsgCreateValidator;
                fromAmino(object: _94.MsgCreateValidatorAmino): _94.MsgCreateValidator;
                toAmino(message: _94.MsgCreateValidator): _94.MsgCreateValidatorAmino;
                fromAminoMsg(object: _94.MsgCreateValidatorAminoMsg): _94.MsgCreateValidator;
                toAminoMsg(message: _94.MsgCreateValidator): _94.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _94.MsgCreateValidatorProtoMsg): _94.MsgCreateValidator;
                toProto(message: _94.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _94.MsgCreateValidator): _94.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _94.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateValidatorResponse;
                fromJSON(_: any): _94.MsgCreateValidatorResponse;
                toJSON(_: _94.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_94.MsgCreateValidatorResponse>): _94.MsgCreateValidatorResponse;
                fromAmino(_: _94.MsgCreateValidatorResponseAmino): _94.MsgCreateValidatorResponse;
                toAmino(_: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _94.MsgCreateValidatorResponseAminoMsg): _94.MsgCreateValidatorResponse;
                toAminoMsg(message: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreateValidatorResponseProtoMsg): _94.MsgCreateValidatorResponse;
                toProto(message: _94.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _94.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgEditValidator;
                fromJSON(object: any): _94.MsgEditValidator;
                toJSON(message: _94.MsgEditValidator): unknown;
                fromPartial(object: Partial<_94.MsgEditValidator>): _94.MsgEditValidator;
                fromAmino(object: _94.MsgEditValidatorAmino): _94.MsgEditValidator;
                toAmino(message: _94.MsgEditValidator): _94.MsgEditValidatorAmino;
                fromAminoMsg(object: _94.MsgEditValidatorAminoMsg): _94.MsgEditValidator;
                toAminoMsg(message: _94.MsgEditValidator): _94.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _94.MsgEditValidatorProtoMsg): _94.MsgEditValidator;
                toProto(message: _94.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _94.MsgEditValidator): _94.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _94.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgEditValidatorResponse;
                fromJSON(_: any): _94.MsgEditValidatorResponse;
                toJSON(_: _94.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_94.MsgEditValidatorResponse>): _94.MsgEditValidatorResponse;
                fromAmino(_: _94.MsgEditValidatorResponseAmino): _94.MsgEditValidatorResponse;
                toAmino(_: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _94.MsgEditValidatorResponseAminoMsg): _94.MsgEditValidatorResponse;
                toAminoMsg(message: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _94.MsgEditValidatorResponseProtoMsg): _94.MsgEditValidatorResponse;
                toProto(message: _94.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _94.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgDelegate;
                fromJSON(object: any): _94.MsgDelegate;
                toJSON(message: _94.MsgDelegate): unknown;
                fromPartial(object: Partial<_94.MsgDelegate>): _94.MsgDelegate;
                fromAmino(object: _94.MsgDelegateAmino): _94.MsgDelegate;
                toAmino(message: _94.MsgDelegate): _94.MsgDelegateAmino;
                fromAminoMsg(object: _94.MsgDelegateAminoMsg): _94.MsgDelegate;
                toAminoMsg(message: _94.MsgDelegate): _94.MsgDelegateAminoMsg;
                fromProtoMsg(message: _94.MsgDelegateProtoMsg): _94.MsgDelegate;
                toProto(message: _94.MsgDelegate): Uint8Array;
                toProtoMsg(message: _94.MsgDelegate): _94.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _94.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgDelegateResponse;
                fromJSON(_: any): _94.MsgDelegateResponse;
                toJSON(_: _94.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_94.MsgDelegateResponse>): _94.MsgDelegateResponse;
                fromAmino(_: _94.MsgDelegateResponseAmino): _94.MsgDelegateResponse;
                toAmino(_: _94.MsgDelegateResponse): _94.MsgDelegateResponseAmino;
                fromAminoMsg(object: _94.MsgDelegateResponseAminoMsg): _94.MsgDelegateResponse;
                toAminoMsg(message: _94.MsgDelegateResponse): _94.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgDelegateResponseProtoMsg): _94.MsgDelegateResponse;
                toProto(message: _94.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgDelegateResponse): _94.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _94.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgBeginRedelegate;
                fromJSON(object: any): _94.MsgBeginRedelegate;
                toJSON(message: _94.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_94.MsgBeginRedelegate>): _94.MsgBeginRedelegate;
                fromAmino(object: _94.MsgBeginRedelegateAmino): _94.MsgBeginRedelegate;
                toAmino(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _94.MsgBeginRedelegateAminoMsg): _94.MsgBeginRedelegate;
                toAminoMsg(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _94.MsgBeginRedelegateProtoMsg): _94.MsgBeginRedelegate;
                toProto(message: _94.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _94.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgBeginRedelegateResponse;
                fromJSON(object: any): _94.MsgBeginRedelegateResponse;
                toJSON(message: _94.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_94.MsgBeginRedelegateResponse>): _94.MsgBeginRedelegateResponse;
                fromAmino(object: _94.MsgBeginRedelegateResponseAmino): _94.MsgBeginRedelegateResponse;
                toAmino(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _94.MsgBeginRedelegateResponseAminoMsg): _94.MsgBeginRedelegateResponse;
                toAminoMsg(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgBeginRedelegateResponseProtoMsg): _94.MsgBeginRedelegateResponse;
                toProto(message: _94.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _94.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgUndelegate;
                fromJSON(object: any): _94.MsgUndelegate;
                toJSON(message: _94.MsgUndelegate): unknown;
                fromPartial(object: Partial<_94.MsgUndelegate>): _94.MsgUndelegate;
                fromAmino(object: _94.MsgUndelegateAmino): _94.MsgUndelegate;
                toAmino(message: _94.MsgUndelegate): _94.MsgUndelegateAmino;
                fromAminoMsg(object: _94.MsgUndelegateAminoMsg): _94.MsgUndelegate;
                toAminoMsg(message: _94.MsgUndelegate): _94.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _94.MsgUndelegateProtoMsg): _94.MsgUndelegate;
                toProto(message: _94.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _94.MsgUndelegate): _94.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _94.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgUndelegateResponse;
                fromJSON(object: any): _94.MsgUndelegateResponse;
                toJSON(message: _94.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_94.MsgUndelegateResponse>): _94.MsgUndelegateResponse;
                fromAmino(object: _94.MsgUndelegateResponseAmino): _94.MsgUndelegateResponse;
                toAmino(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _94.MsgUndelegateResponseAminoMsg): _94.MsgUndelegateResponse;
                toAminoMsg(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUndelegateResponseProtoMsg): _94.MsgUndelegateResponse;
                toProto(message: _94.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _93.BondStatus;
            bondStatusToJSON(object: _93.BondStatus): string;
            BondStatus: typeof _93.BondStatus;
            BondStatusSDKType: typeof _93.BondStatus;
            BondStatusAmino: typeof _93.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _93.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.HistoricalInfo;
                fromJSON(object: any): _93.HistoricalInfo;
                toJSON(message: _93.HistoricalInfo): unknown;
                fromPartial(object: Partial<_93.HistoricalInfo>): _93.HistoricalInfo;
                fromAmino(object: _93.HistoricalInfoAmino): _93.HistoricalInfo;
                toAmino(message: _93.HistoricalInfo): _93.HistoricalInfoAmino;
                fromAminoMsg(object: _93.HistoricalInfoAminoMsg): _93.HistoricalInfo;
                toAminoMsg(message: _93.HistoricalInfo): _93.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _93.HistoricalInfoProtoMsg): _93.HistoricalInfo;
                toProto(message: _93.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _93.HistoricalInfo): _93.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _93.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.CommissionRates;
                fromJSON(object: any): _93.CommissionRates;
                toJSON(message: _93.CommissionRates): unknown;
                fromPartial(object: Partial<_93.CommissionRates>): _93.CommissionRates;
                fromAmino(object: _93.CommissionRatesAmino): _93.CommissionRates;
                toAmino(message: _93.CommissionRates): _93.CommissionRatesAmino;
                fromAminoMsg(object: _93.CommissionRatesAminoMsg): _93.CommissionRates;
                toAminoMsg(message: _93.CommissionRates): _93.CommissionRatesAminoMsg;
                fromProtoMsg(message: _93.CommissionRatesProtoMsg): _93.CommissionRates;
                toProto(message: _93.CommissionRates): Uint8Array;
                toProtoMsg(message: _93.CommissionRates): _93.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _93.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Commission;
                fromJSON(object: any): _93.Commission;
                toJSON(message: _93.Commission): unknown;
                fromPartial(object: Partial<_93.Commission>): _93.Commission;
                fromAmino(object: _93.CommissionAmino): _93.Commission;
                toAmino(message: _93.Commission): _93.CommissionAmino;
                fromAminoMsg(object: _93.CommissionAminoMsg): _93.Commission;
                toAminoMsg(message: _93.Commission): _93.CommissionAminoMsg;
                fromProtoMsg(message: _93.CommissionProtoMsg): _93.Commission;
                toProto(message: _93.Commission): Uint8Array;
                toProtoMsg(message: _93.Commission): _93.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _93.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Description;
                fromJSON(object: any): _93.Description;
                toJSON(message: _93.Description): unknown;
                fromPartial(object: Partial<_93.Description>): _93.Description;
                fromAmino(object: _93.DescriptionAmino): _93.Description;
                toAmino(message: _93.Description): _93.DescriptionAmino;
                fromAminoMsg(object: _93.DescriptionAminoMsg): _93.Description;
                toAminoMsg(message: _93.Description): _93.DescriptionAminoMsg;
                fromProtoMsg(message: _93.DescriptionProtoMsg): _93.Description;
                toProto(message: _93.Description): Uint8Array;
                toProtoMsg(message: _93.Description): _93.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _93.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Validator;
                fromJSON(object: any): _93.Validator;
                toJSON(message: _93.Validator): unknown;
                fromPartial(object: Partial<_93.Validator>): _93.Validator;
                fromAmino(object: _93.ValidatorAmino): _93.Validator;
                toAmino(message: _93.Validator): _93.ValidatorAmino;
                fromAminoMsg(object: _93.ValidatorAminoMsg): _93.Validator;
                toAminoMsg(message: _93.Validator): _93.ValidatorAminoMsg;
                fromProtoMsg(message: _93.ValidatorProtoMsg): _93.Validator;
                toProto(message: _93.Validator): Uint8Array;
                toProtoMsg(message: _93.Validator): _93.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _93.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ValAddresses;
                fromJSON(object: any): _93.ValAddresses;
                toJSON(message: _93.ValAddresses): unknown;
                fromPartial(object: Partial<_93.ValAddresses>): _93.ValAddresses;
                fromAmino(object: _93.ValAddressesAmino): _93.ValAddresses;
                toAmino(message: _93.ValAddresses): _93.ValAddressesAmino;
                fromAminoMsg(object: _93.ValAddressesAminoMsg): _93.ValAddresses;
                toAminoMsg(message: _93.ValAddresses): _93.ValAddressesAminoMsg;
                fromProtoMsg(message: _93.ValAddressesProtoMsg): _93.ValAddresses;
                toProto(message: _93.ValAddresses): Uint8Array;
                toProtoMsg(message: _93.ValAddresses): _93.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _93.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DVPair;
                fromJSON(object: any): _93.DVPair;
                toJSON(message: _93.DVPair): unknown;
                fromPartial(object: Partial<_93.DVPair>): _93.DVPair;
                fromAmino(object: _93.DVPairAmino): _93.DVPair;
                toAmino(message: _93.DVPair): _93.DVPairAmino;
                fromAminoMsg(object: _93.DVPairAminoMsg): _93.DVPair;
                toAminoMsg(message: _93.DVPair): _93.DVPairAminoMsg;
                fromProtoMsg(message: _93.DVPairProtoMsg): _93.DVPair;
                toProto(message: _93.DVPair): Uint8Array;
                toProtoMsg(message: _93.DVPair): _93.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _93.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DVPairs;
                fromJSON(object: any): _93.DVPairs;
                toJSON(message: _93.DVPairs): unknown;
                fromPartial(object: Partial<_93.DVPairs>): _93.DVPairs;
                fromAmino(object: _93.DVPairsAmino): _93.DVPairs;
                toAmino(message: _93.DVPairs): _93.DVPairsAmino;
                fromAminoMsg(object: _93.DVPairsAminoMsg): _93.DVPairs;
                toAminoMsg(message: _93.DVPairs): _93.DVPairsAminoMsg;
                fromProtoMsg(message: _93.DVPairsProtoMsg): _93.DVPairs;
                toProto(message: _93.DVPairs): Uint8Array;
                toProtoMsg(message: _93.DVPairs): _93.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _93.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DVVTriplet;
                fromJSON(object: any): _93.DVVTriplet;
                toJSON(message: _93.DVVTriplet): unknown;
                fromPartial(object: Partial<_93.DVVTriplet>): _93.DVVTriplet;
                fromAmino(object: _93.DVVTripletAmino): _93.DVVTriplet;
                toAmino(message: _93.DVVTriplet): _93.DVVTripletAmino;
                fromAminoMsg(object: _93.DVVTripletAminoMsg): _93.DVVTriplet;
                toAminoMsg(message: _93.DVVTriplet): _93.DVVTripletAminoMsg;
                fromProtoMsg(message: _93.DVVTripletProtoMsg): _93.DVVTriplet;
                toProto(message: _93.DVVTriplet): Uint8Array;
                toProtoMsg(message: _93.DVVTriplet): _93.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _93.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DVVTriplets;
                fromJSON(object: any): _93.DVVTriplets;
                toJSON(message: _93.DVVTriplets): unknown;
                fromPartial(object: Partial<_93.DVVTriplets>): _93.DVVTriplets;
                fromAmino(object: _93.DVVTripletsAmino): _93.DVVTriplets;
                toAmino(message: _93.DVVTriplets): _93.DVVTripletsAmino;
                fromAminoMsg(object: _93.DVVTripletsAminoMsg): _93.DVVTriplets;
                toAminoMsg(message: _93.DVVTriplets): _93.DVVTripletsAminoMsg;
                fromProtoMsg(message: _93.DVVTripletsProtoMsg): _93.DVVTriplets;
                toProto(message: _93.DVVTriplets): Uint8Array;
                toProtoMsg(message: _93.DVVTriplets): _93.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _93.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Delegation;
                fromJSON(object: any): _93.Delegation;
                toJSON(message: _93.Delegation): unknown;
                fromPartial(object: Partial<_93.Delegation>): _93.Delegation;
                fromAmino(object: _93.DelegationAmino): _93.Delegation;
                toAmino(message: _93.Delegation): _93.DelegationAmino;
                fromAminoMsg(object: _93.DelegationAminoMsg): _93.Delegation;
                toAminoMsg(message: _93.Delegation): _93.DelegationAminoMsg;
                fromProtoMsg(message: _93.DelegationProtoMsg): _93.Delegation;
                toProto(message: _93.Delegation): Uint8Array;
                toProtoMsg(message: _93.Delegation): _93.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _93.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.UnbondingDelegation;
                fromJSON(object: any): _93.UnbondingDelegation;
                toJSON(message: _93.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_93.UnbondingDelegation>): _93.UnbondingDelegation;
                fromAmino(object: _93.UnbondingDelegationAmino): _93.UnbondingDelegation;
                toAmino(message: _93.UnbondingDelegation): _93.UnbondingDelegationAmino;
                fromAminoMsg(object: _93.UnbondingDelegationAminoMsg): _93.UnbondingDelegation;
                toAminoMsg(message: _93.UnbondingDelegation): _93.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _93.UnbondingDelegationProtoMsg): _93.UnbondingDelegation;
                toProto(message: _93.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _93.UnbondingDelegation): _93.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _93.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.UnbondingDelegationEntry;
                fromJSON(object: any): _93.UnbondingDelegationEntry;
                toJSON(message: _93.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_93.UnbondingDelegationEntry>): _93.UnbondingDelegationEntry;
                fromAmino(object: _93.UnbondingDelegationEntryAmino): _93.UnbondingDelegationEntry;
                toAmino(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _93.UnbondingDelegationEntryAminoMsg): _93.UnbondingDelegationEntry;
                toAminoMsg(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _93.UnbondingDelegationEntryProtoMsg): _93.UnbondingDelegationEntry;
                toProto(message: _93.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _93.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RedelegationEntry;
                fromJSON(object: any): _93.RedelegationEntry;
                toJSON(message: _93.RedelegationEntry): unknown;
                fromPartial(object: Partial<_93.RedelegationEntry>): _93.RedelegationEntry;
                fromAmino(object: _93.RedelegationEntryAmino): _93.RedelegationEntry;
                toAmino(message: _93.RedelegationEntry): _93.RedelegationEntryAmino;
                fromAminoMsg(object: _93.RedelegationEntryAminoMsg): _93.RedelegationEntry;
                toAminoMsg(message: _93.RedelegationEntry): _93.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _93.RedelegationEntryProtoMsg): _93.RedelegationEntry;
                toProto(message: _93.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _93.RedelegationEntry): _93.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _93.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Redelegation;
                fromJSON(object: any): _93.Redelegation;
                toJSON(message: _93.Redelegation): unknown;
                fromPartial(object: Partial<_93.Redelegation>): _93.Redelegation;
                fromAmino(object: _93.RedelegationAmino): _93.Redelegation;
                toAmino(message: _93.Redelegation): _93.RedelegationAmino;
                fromAminoMsg(object: _93.RedelegationAminoMsg): _93.Redelegation;
                toAminoMsg(message: _93.Redelegation): _93.RedelegationAminoMsg;
                fromProtoMsg(message: _93.RedelegationProtoMsg): _93.Redelegation;
                toProto(message: _93.Redelegation): Uint8Array;
                toProtoMsg(message: _93.Redelegation): _93.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _93.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Params;
                fromJSON(object: any): _93.Params;
                toJSON(message: _93.Params): unknown;
                fromPartial(object: Partial<_93.Params>): _93.Params;
                fromAmino(object: _93.ParamsAmino): _93.Params;
                toAmino(message: _93.Params): _93.ParamsAmino;
                fromAminoMsg(object: _93.ParamsAminoMsg): _93.Params;
                toAminoMsg(message: _93.Params): _93.ParamsAminoMsg;
                fromProtoMsg(message: _93.ParamsProtoMsg): _93.Params;
                toProto(message: _93.Params): Uint8Array;
                toProtoMsg(message: _93.Params): _93.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _93.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DelegationResponse;
                fromJSON(object: any): _93.DelegationResponse;
                toJSON(message: _93.DelegationResponse): unknown;
                fromPartial(object: Partial<_93.DelegationResponse>): _93.DelegationResponse;
                fromAmino(object: _93.DelegationResponseAmino): _93.DelegationResponse;
                toAmino(message: _93.DelegationResponse): _93.DelegationResponseAmino;
                fromAminoMsg(object: _93.DelegationResponseAminoMsg): _93.DelegationResponse;
                toAminoMsg(message: _93.DelegationResponse): _93.DelegationResponseAminoMsg;
                fromProtoMsg(message: _93.DelegationResponseProtoMsg): _93.DelegationResponse;
                toProto(message: _93.DelegationResponse): Uint8Array;
                toProtoMsg(message: _93.DelegationResponse): _93.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _93.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RedelegationEntryResponse;
                fromJSON(object: any): _93.RedelegationEntryResponse;
                toJSON(message: _93.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_93.RedelegationEntryResponse>): _93.RedelegationEntryResponse;
                fromAmino(object: _93.RedelegationEntryResponseAmino): _93.RedelegationEntryResponse;
                toAmino(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _93.RedelegationEntryResponseAminoMsg): _93.RedelegationEntryResponse;
                toAminoMsg(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _93.RedelegationEntryResponseProtoMsg): _93.RedelegationEntryResponse;
                toProto(message: _93.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _93.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RedelegationResponse;
                fromJSON(object: any): _93.RedelegationResponse;
                toJSON(message: _93.RedelegationResponse): unknown;
                fromPartial(object: Partial<_93.RedelegationResponse>): _93.RedelegationResponse;
                fromAmino(object: _93.RedelegationResponseAmino): _93.RedelegationResponse;
                toAmino(message: _93.RedelegationResponse): _93.RedelegationResponseAmino;
                fromAminoMsg(object: _93.RedelegationResponseAminoMsg): _93.RedelegationResponse;
                toAminoMsg(message: _93.RedelegationResponse): _93.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _93.RedelegationResponseProtoMsg): _93.RedelegationResponse;
                toProto(message: _93.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _93.RedelegationResponse): _93.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _93.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Pool;
                fromJSON(object: any): _93.Pool;
                toJSON(message: _93.Pool): unknown;
                fromPartial(object: Partial<_93.Pool>): _93.Pool;
                fromAmino(object: _93.PoolAmino): _93.Pool;
                toAmino(message: _93.Pool): _93.PoolAmino;
                fromAminoMsg(object: _93.PoolAminoMsg): _93.Pool;
                toAminoMsg(message: _93.Pool): _93.PoolAminoMsg;
                fromProtoMsg(message: _93.PoolProtoMsg): _93.Pool;
                toProto(message: _93.Pool): Uint8Array;
                toProtoMsg(message: _93.Pool): _93.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorsRequest;
                fromJSON(object: any): _92.QueryValidatorsRequest;
                toJSON(message: _92.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_92.QueryValidatorsRequest>): _92.QueryValidatorsRequest;
                fromAmino(object: _92.QueryValidatorsRequestAmino): _92.QueryValidatorsRequest;
                toAmino(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorsRequestAminoMsg): _92.QueryValidatorsRequest;
                toAminoMsg(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorsRequestProtoMsg): _92.QueryValidatorsRequest;
                toProto(message: _92.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorsResponse;
                fromJSON(object: any): _92.QueryValidatorsResponse;
                toJSON(message: _92.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_92.QueryValidatorsResponse>): _92.QueryValidatorsResponse;
                fromAmino(object: _92.QueryValidatorsResponseAmino): _92.QueryValidatorsResponse;
                toAmino(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorsResponseAminoMsg): _92.QueryValidatorsResponse;
                toAminoMsg(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorsResponseProtoMsg): _92.QueryValidatorsResponse;
                toProto(message: _92.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorRequest;
                fromJSON(object: any): _92.QueryValidatorRequest;
                toJSON(message: _92.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_92.QueryValidatorRequest>): _92.QueryValidatorRequest;
                fromAmino(object: _92.QueryValidatorRequestAmino): _92.QueryValidatorRequest;
                toAmino(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorRequestAminoMsg): _92.QueryValidatorRequest;
                toAminoMsg(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorRequestProtoMsg): _92.QueryValidatorRequest;
                toProto(message: _92.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorResponse;
                fromJSON(object: any): _92.QueryValidatorResponse;
                toJSON(message: _92.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_92.QueryValidatorResponse>): _92.QueryValidatorResponse;
                fromAmino(object: _92.QueryValidatorResponseAmino): _92.QueryValidatorResponse;
                toAmino(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorResponseAminoMsg): _92.QueryValidatorResponse;
                toAminoMsg(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorResponseProtoMsg): _92.QueryValidatorResponse;
                toProto(message: _92.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _92.QueryValidatorDelegationsRequest;
                toJSON(message: _92.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsRequest>): _92.QueryValidatorDelegationsRequest;
                fromAmino(object: _92.QueryValidatorDelegationsRequestAmino): _92.QueryValidatorDelegationsRequest;
                toAmino(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorDelegationsRequestAminoMsg): _92.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorDelegationsRequestProtoMsg): _92.QueryValidatorDelegationsRequest;
                toProto(message: _92.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _92.QueryValidatorDelegationsResponse;
                toJSON(message: _92.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsResponse>): _92.QueryValidatorDelegationsResponse;
                fromAmino(object: _92.QueryValidatorDelegationsResponseAmino): _92.QueryValidatorDelegationsResponse;
                toAmino(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorDelegationsResponseAminoMsg): _92.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorDelegationsResponseProtoMsg): _92.QueryValidatorDelegationsResponse;
                toProto(message: _92.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _92.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsRequest>): _92.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _92.QueryValidatorUnbondingDelegationsRequestAmino): _92.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorUnbondingDelegationsRequestAminoMsg): _92.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorUnbondingDelegationsRequestProtoMsg): _92.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _92.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _92.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsResponse>): _92.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _92.QueryValidatorUnbondingDelegationsResponseAmino): _92.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorUnbondingDelegationsResponseAminoMsg): _92.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorUnbondingDelegationsResponseProtoMsg): _92.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _92.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegationRequest;
                fromJSON(object: any): _92.QueryDelegationRequest;
                toJSON(message: _92.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegationRequest>): _92.QueryDelegationRequest;
                fromAmino(object: _92.QueryDelegationRequestAmino): _92.QueryDelegationRequest;
                toAmino(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestAmino;
                fromAminoMsg(object: _92.QueryDelegationRequestAminoMsg): _92.QueryDelegationRequest;
                toAminoMsg(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegationRequestProtoMsg): _92.QueryDelegationRequest;
                toProto(message: _92.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegationResponse;
                fromJSON(object: any): _92.QueryDelegationResponse;
                toJSON(message: _92.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegationResponse>): _92.QueryDelegationResponse;
                fromAmino(object: _92.QueryDelegationResponseAmino): _92.QueryDelegationResponse;
                toAmino(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseAmino;
                fromAminoMsg(object: _92.QueryDelegationResponseAminoMsg): _92.QueryDelegationResponse;
                toAminoMsg(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegationResponseProtoMsg): _92.QueryDelegationResponse;
                toProto(message: _92.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _92.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _92.QueryUnbondingDelegationRequest;
                toJSON(message: _92.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationRequest>): _92.QueryUnbondingDelegationRequest;
                fromAmino(object: _92.QueryUnbondingDelegationRequestAmino): _92.QueryUnbondingDelegationRequest;
                toAmino(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _92.QueryUnbondingDelegationRequestAminoMsg): _92.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryUnbondingDelegationRequestProtoMsg): _92.QueryUnbondingDelegationRequest;
                toProto(message: _92.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _92.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _92.QueryUnbondingDelegationResponse;
                toJSON(message: _92.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationResponse>): _92.QueryUnbondingDelegationResponse;
                fromAmino(object: _92.QueryUnbondingDelegationResponseAmino): _92.QueryUnbondingDelegationResponse;
                toAmino(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _92.QueryUnbondingDelegationResponseAminoMsg): _92.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryUnbondingDelegationResponseProtoMsg): _92.QueryUnbondingDelegationResponse;
                toProto(message: _92.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _92.QueryDelegatorDelegationsRequest;
                toJSON(message: _92.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsRequest>): _92.QueryDelegatorDelegationsRequest;
                fromAmino(object: _92.QueryDelegatorDelegationsRequestAmino): _92.QueryDelegatorDelegationsRequest;
                toAmino(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorDelegationsRequestAminoMsg): _92.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorDelegationsRequestProtoMsg): _92.QueryDelegatorDelegationsRequest;
                toProto(message: _92.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _92.QueryDelegatorDelegationsResponse;
                toJSON(message: _92.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsResponse>): _92.QueryDelegatorDelegationsResponse;
                fromAmino(object: _92.QueryDelegatorDelegationsResponseAmino): _92.QueryDelegatorDelegationsResponse;
                toAmino(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorDelegationsResponseAminoMsg): _92.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorDelegationsResponseProtoMsg): _92.QueryDelegatorDelegationsResponse;
                toProto(message: _92.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _92.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsRequest>): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _92.QueryDelegatorUnbondingDelegationsRequestAmino): _92.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _92.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _92.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _92.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _92.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsResponse>): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _92.QueryDelegatorUnbondingDelegationsResponseAmino): _92.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _92.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _92.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _92.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryRedelegationsRequest;
                fromJSON(object: any): _92.QueryRedelegationsRequest;
                toJSON(message: _92.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryRedelegationsRequest>): _92.QueryRedelegationsRequest;
                fromAmino(object: _92.QueryRedelegationsRequestAmino): _92.QueryRedelegationsRequest;
                toAmino(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryRedelegationsRequestAminoMsg): _92.QueryRedelegationsRequest;
                toAminoMsg(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryRedelegationsRequestProtoMsg): _92.QueryRedelegationsRequest;
                toProto(message: _92.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryRedelegationsResponse;
                fromJSON(object: any): _92.QueryRedelegationsResponse;
                toJSON(message: _92.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryRedelegationsResponse>): _92.QueryRedelegationsResponse;
                fromAmino(object: _92.QueryRedelegationsResponseAmino): _92.QueryRedelegationsResponse;
                toAmino(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryRedelegationsResponseAminoMsg): _92.QueryRedelegationsResponse;
                toAminoMsg(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryRedelegationsResponseProtoMsg): _92.QueryRedelegationsResponse;
                toProto(message: _92.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _92.QueryDelegatorValidatorsRequest;
                toJSON(message: _92.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsRequest>): _92.QueryDelegatorValidatorsRequest;
                fromAmino(object: _92.QueryDelegatorValidatorsRequestAmino): _92.QueryDelegatorValidatorsRequest;
                toAmino(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorsRequestAminoMsg): _92.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorsRequestProtoMsg): _92.QueryDelegatorValidatorsRequest;
                toProto(message: _92.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _92.QueryDelegatorValidatorsResponse;
                toJSON(message: _92.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsResponse>): _92.QueryDelegatorValidatorsResponse;
                fromAmino(object: _92.QueryDelegatorValidatorsResponseAmino): _92.QueryDelegatorValidatorsResponse;
                toAmino(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorsResponseAminoMsg): _92.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorsResponseProtoMsg): _92.QueryDelegatorValidatorsResponse;
                toProto(message: _92.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _92.QueryDelegatorValidatorRequest;
                toJSON(message: _92.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorRequest>): _92.QueryDelegatorValidatorRequest;
                fromAmino(object: _92.QueryDelegatorValidatorRequestAmino): _92.QueryDelegatorValidatorRequest;
                toAmino(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorRequestAminoMsg): _92.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorRequestProtoMsg): _92.QueryDelegatorValidatorRequest;
                toProto(message: _92.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _92.QueryDelegatorValidatorResponse;
                toJSON(message: _92.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorResponse>): _92.QueryDelegatorValidatorResponse;
                fromAmino(object: _92.QueryDelegatorValidatorResponseAmino): _92.QueryDelegatorValidatorResponse;
                toAmino(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorResponseAminoMsg): _92.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorResponseProtoMsg): _92.QueryDelegatorValidatorResponse;
                toProto(message: _92.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _92.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryHistoricalInfoRequest;
                fromJSON(object: any): _92.QueryHistoricalInfoRequest;
                toJSON(message: _92.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_92.QueryHistoricalInfoRequest>): _92.QueryHistoricalInfoRequest;
                fromAmino(object: _92.QueryHistoricalInfoRequestAmino): _92.QueryHistoricalInfoRequest;
                toAmino(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _92.QueryHistoricalInfoRequestAminoMsg): _92.QueryHistoricalInfoRequest;
                toAminoMsg(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _92.QueryHistoricalInfoRequestProtoMsg): _92.QueryHistoricalInfoRequest;
                toProto(message: _92.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _92.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryHistoricalInfoResponse;
                fromJSON(object: any): _92.QueryHistoricalInfoResponse;
                toJSON(message: _92.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_92.QueryHistoricalInfoResponse>): _92.QueryHistoricalInfoResponse;
                fromAmino(object: _92.QueryHistoricalInfoResponseAmino): _92.QueryHistoricalInfoResponse;
                toAmino(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _92.QueryHistoricalInfoResponseAminoMsg): _92.QueryHistoricalInfoResponse;
                toAminoMsg(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _92.QueryHistoricalInfoResponseProtoMsg): _92.QueryHistoricalInfoResponse;
                toProto(message: _92.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _92.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryPoolRequest;
                fromJSON(_: any): _92.QueryPoolRequest;
                toJSON(_: _92.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_92.QueryPoolRequest>): _92.QueryPoolRequest;
                fromAmino(_: _92.QueryPoolRequestAmino): _92.QueryPoolRequest;
                toAmino(_: _92.QueryPoolRequest): _92.QueryPoolRequestAmino;
                fromAminoMsg(object: _92.QueryPoolRequestAminoMsg): _92.QueryPoolRequest;
                toAminoMsg(message: _92.QueryPoolRequest): _92.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _92.QueryPoolRequestProtoMsg): _92.QueryPoolRequest;
                toProto(message: _92.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _92.QueryPoolRequest): _92.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _92.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryPoolResponse;
                fromJSON(object: any): _92.QueryPoolResponse;
                toJSON(message: _92.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_92.QueryPoolResponse>): _92.QueryPoolResponse;
                fromAmino(object: _92.QueryPoolResponseAmino): _92.QueryPoolResponse;
                toAmino(message: _92.QueryPoolResponse): _92.QueryPoolResponseAmino;
                fromAminoMsg(object: _92.QueryPoolResponseAminoMsg): _92.QueryPoolResponse;
                toAminoMsg(message: _92.QueryPoolResponse): _92.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _92.QueryPoolResponseProtoMsg): _92.QueryPoolResponse;
                toProto(message: _92.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _92.QueryPoolResponse): _92.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _92.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryParamsRequest;
                fromJSON(_: any): _92.QueryParamsRequest;
                toJSON(_: _92.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                fromAmino(_: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                toAmino(_: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
                fromAminoMsg(object: _92.QueryParamsRequestAminoMsg): _92.QueryParamsRequest;
                toAminoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryParamsRequestProtoMsg): _92.QueryParamsRequest;
                toProto(message: _92.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _92.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryParamsResponse;
                fromJSON(object: any): _92.QueryParamsResponse;
                toJSON(message: _92.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                fromAmino(object: _92.QueryParamsResponseAmino): _92.QueryParamsResponse;
                toAmino(message: _92.QueryParamsResponse): _92.QueryParamsResponseAmino;
                fromAminoMsg(object: _92.QueryParamsResponseAminoMsg): _92.QueryParamsResponse;
                toAminoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryParamsResponseProtoMsg): _92.QueryParamsResponse;
                toProto(message: _92.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GenesisState;
                fromJSON(object: any): _91.GenesisState;
                toJSON(message: _91.GenesisState): unknown;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
                fromAmino(object: _91.GenesisStateAmino): _91.GenesisState;
                toAmino(message: _91.GenesisState): _91.GenesisStateAmino;
                fromAminoMsg(object: _91.GenesisStateAminoMsg): _91.GenesisState;
                toAminoMsg(message: _91.GenesisState): _91.GenesisStateAminoMsg;
                fromProtoMsg(message: _91.GenesisStateProtoMsg): _91.GenesisState;
                toProto(message: _91.GenesisState): Uint8Array;
                toProtoMsg(message: _91.GenesisState): _91.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _91.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.LastValidatorPower;
                fromJSON(object: any): _91.LastValidatorPower;
                toJSON(message: _91.LastValidatorPower): unknown;
                fromPartial(object: Partial<_91.LastValidatorPower>): _91.LastValidatorPower;
                fromAmino(object: _91.LastValidatorPowerAmino): _91.LastValidatorPower;
                toAmino(message: _91.LastValidatorPower): _91.LastValidatorPowerAmino;
                fromAminoMsg(object: _91.LastValidatorPowerAminoMsg): _91.LastValidatorPower;
                toAminoMsg(message: _91.LastValidatorPower): _91.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _91.LastValidatorPowerProtoMsg): _91.LastValidatorPower;
                toProto(message: _91.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _91.LastValidatorPower): _91.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _90.AuthorizationType;
            authorizationTypeToJSON(object: _90.AuthorizationType): string;
            AuthorizationType: typeof _90.AuthorizationType;
            AuthorizationTypeSDKType: typeof _90.AuthorizationType;
            AuthorizationTypeAmino: typeof _90.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _90.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.StakeAuthorization;
                fromJSON(object: any): _90.StakeAuthorization;
                toJSON(message: _90.StakeAuthorization): unknown;
                fromPartial(object: Partial<_90.StakeAuthorization>): _90.StakeAuthorization;
                fromAmino(object: _90.StakeAuthorizationAmino): _90.StakeAuthorization;
                toAmino(message: _90.StakeAuthorization): _90.StakeAuthorizationAmino;
                fromAminoMsg(object: _90.StakeAuthorizationAminoMsg): _90.StakeAuthorization;
                toAminoMsg(message: _90.StakeAuthorization): _90.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _90.StakeAuthorizationProtoMsg): _90.StakeAuthorization;
                toProto(message: _90.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _90.StakeAuthorization): _90.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _90.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.StakeAuthorization_Validators;
                fromJSON(object: any): _90.StakeAuthorization_Validators;
                toJSON(message: _90.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_90.StakeAuthorization_Validators>): _90.StakeAuthorization_Validators;
                fromAmino(object: _90.StakeAuthorization_ValidatorsAmino): _90.StakeAuthorization_Validators;
                toAmino(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _90.StakeAuthorization_ValidatorsAminoMsg): _90.StakeAuthorization_Validators;
                toAminoMsg(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _90.StakeAuthorization_ValidatorsProtoMsg): _90.StakeAuthorization_Validators;
                toProto(message: _90.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _95.SignMode;
                signModeToJSON(object: _95.SignMode): string;
                SignMode: typeof _95.SignMode;
                SignModeSDKType: typeof _95.SignMode;
                SignModeAmino: typeof _95.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptors;
                    fromJSON(object: any): _95.SignatureDescriptors;
                    toJSON(message: _95.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptors>): _95.SignatureDescriptors;
                    fromAmino(object: _95.SignatureDescriptorsAmino): _95.SignatureDescriptors;
                    toAmino(message: _95.SignatureDescriptors): _95.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _95.SignatureDescriptorsAminoMsg): _95.SignatureDescriptors;
                    toAminoMsg(message: _95.SignatureDescriptors): _95.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptorsProtoMsg): _95.SignatureDescriptors;
                    toProto(message: _95.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptors): _95.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptor;
                    fromJSON(object: any): _95.SignatureDescriptor;
                    toJSON(message: _95.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptor>): _95.SignatureDescriptor;
                    fromAmino(object: _95.SignatureDescriptorAmino): _95.SignatureDescriptor;
                    toAmino(message: _95.SignatureDescriptor): _95.SignatureDescriptorAmino;
                    fromAminoMsg(object: _95.SignatureDescriptorAminoMsg): _95.SignatureDescriptor;
                    toAminoMsg(message: _95.SignatureDescriptor): _95.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptorProtoMsg): _95.SignatureDescriptor;
                    toProto(message: _95.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor): _95.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptor_Data;
                    fromJSON(object: any): _95.SignatureDescriptor_Data;
                    toJSON(message: _95.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data>): _95.SignatureDescriptor_Data;
                    fromAmino(object: _95.SignatureDescriptor_DataAmino): _95.SignatureDescriptor_Data;
                    toAmino(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_DataAminoMsg): _95.SignatureDescriptor_Data;
                    toAminoMsg(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_DataProtoMsg): _95.SignatureDescriptor_Data;
                    toProto(message: _95.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Single;
                    toJSON(message: _95.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Single>): _95.SignatureDescriptor_Data_Single;
                    fromAmino(object: _95.SignatureDescriptor_Data_SingleAmino): _95.SignatureDescriptor_Data_Single;
                    toAmino(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_Data_SingleAminoMsg): _95.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_Data_SingleProtoMsg): _95.SignatureDescriptor_Data_Single;
                    toProto(message: _95.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Multi;
                    toJSON(message: _95.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Multi>): _95.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _95.SignatureDescriptor_Data_MultiAmino): _95.SignatureDescriptor_Data_Multi;
                    toAmino(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_Data_MultiAminoMsg): _95.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_Data_MultiProtoMsg): _95.SignatureDescriptor_Data_Multi;
                    toProto(message: _95.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _291.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _272.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _97.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Tx;
                fromJSON(object: any): _97.Tx;
                toJSON(message: _97.Tx): unknown;
                fromPartial(object: Partial<_97.Tx>): _97.Tx;
                fromAmino(object: _97.TxAmino): _97.Tx;
                toAmino(message: _97.Tx): _97.TxAmino;
                fromAminoMsg(object: _97.TxAminoMsg): _97.Tx;
                toAminoMsg(message: _97.Tx): _97.TxAminoMsg;
                fromProtoMsg(message: _97.TxProtoMsg): _97.Tx;
                toProto(message: _97.Tx): Uint8Array;
                toProtoMsg(message: _97.Tx): _97.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _97.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.TxRaw;
                fromJSON(object: any): _97.TxRaw;
                toJSON(message: _97.TxRaw): unknown;
                fromPartial(object: Partial<_97.TxRaw>): _97.TxRaw;
                fromAmino(object: _97.TxRawAmino): _97.TxRaw;
                toAmino(message: _97.TxRaw): _97.TxRawAmino;
                fromAminoMsg(object: _97.TxRawAminoMsg): _97.TxRaw;
                toAminoMsg(message: _97.TxRaw): _97.TxRawAminoMsg;
                fromProtoMsg(message: _97.TxRawProtoMsg): _97.TxRaw;
                toProto(message: _97.TxRaw): Uint8Array;
                toProtoMsg(message: _97.TxRaw): _97.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _97.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignDoc;
                fromJSON(object: any): _97.SignDoc;
                toJSON(message: _97.SignDoc): unknown;
                fromPartial(object: Partial<_97.SignDoc>): _97.SignDoc;
                fromAmino(object: _97.SignDocAmino): _97.SignDoc;
                toAmino(message: _97.SignDoc): _97.SignDocAmino;
                fromAminoMsg(object: _97.SignDocAminoMsg): _97.SignDoc;
                toAminoMsg(message: _97.SignDoc): _97.SignDocAminoMsg;
                fromProtoMsg(message: _97.SignDocProtoMsg): _97.SignDoc;
                toProto(message: _97.SignDoc): Uint8Array;
                toProtoMsg(message: _97.SignDoc): _97.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _97.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.TxBody;
                fromJSON(object: any): _97.TxBody;
                toJSON(message: _97.TxBody): unknown;
                fromPartial(object: Partial<_97.TxBody>): _97.TxBody;
                fromAmino(object: _97.TxBodyAmino): _97.TxBody;
                toAmino(message: _97.TxBody): _97.TxBodyAmino;
                fromAminoMsg(object: _97.TxBodyAminoMsg): _97.TxBody;
                toAminoMsg(message: _97.TxBody): _97.TxBodyAminoMsg;
                fromProtoMsg(message: _97.TxBodyProtoMsg): _97.TxBody;
                toProto(message: _97.TxBody): Uint8Array;
                toProtoMsg(message: _97.TxBody): _97.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _97.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.AuthInfo;
                fromJSON(object: any): _97.AuthInfo;
                toJSON(message: _97.AuthInfo): unknown;
                fromPartial(object: Partial<_97.AuthInfo>): _97.AuthInfo;
                fromAmino(object: _97.AuthInfoAmino): _97.AuthInfo;
                toAmino(message: _97.AuthInfo): _97.AuthInfoAmino;
                fromAminoMsg(object: _97.AuthInfoAminoMsg): _97.AuthInfo;
                toAminoMsg(message: _97.AuthInfo): _97.AuthInfoAminoMsg;
                fromProtoMsg(message: _97.AuthInfoProtoMsg): _97.AuthInfo;
                toProto(message: _97.AuthInfo): Uint8Array;
                toProtoMsg(message: _97.AuthInfo): _97.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _97.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignerInfo;
                fromJSON(object: any): _97.SignerInfo;
                toJSON(message: _97.SignerInfo): unknown;
                fromPartial(object: Partial<_97.SignerInfo>): _97.SignerInfo;
                fromAmino(object: _97.SignerInfoAmino): _97.SignerInfo;
                toAmino(message: _97.SignerInfo): _97.SignerInfoAmino;
                fromAminoMsg(object: _97.SignerInfoAminoMsg): _97.SignerInfo;
                toAminoMsg(message: _97.SignerInfo): _97.SignerInfoAminoMsg;
                fromProtoMsg(message: _97.SignerInfoProtoMsg): _97.SignerInfo;
                toProto(message: _97.SignerInfo): Uint8Array;
                toProtoMsg(message: _97.SignerInfo): _97.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _97.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ModeInfo;
                fromJSON(object: any): _97.ModeInfo;
                toJSON(message: _97.ModeInfo): unknown;
                fromPartial(object: Partial<_97.ModeInfo>): _97.ModeInfo;
                fromAmino(object: _97.ModeInfoAmino): _97.ModeInfo;
                toAmino(message: _97.ModeInfo): _97.ModeInfoAmino;
                fromAminoMsg(object: _97.ModeInfoAminoMsg): _97.ModeInfo;
                toAminoMsg(message: _97.ModeInfo): _97.ModeInfoAminoMsg;
                fromProtoMsg(message: _97.ModeInfoProtoMsg): _97.ModeInfo;
                toProto(message: _97.ModeInfo): Uint8Array;
                toProtoMsg(message: _97.ModeInfo): _97.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _97.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ModeInfo_Single;
                fromJSON(object: any): _97.ModeInfo_Single;
                toJSON(message: _97.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_97.ModeInfo_Single>): _97.ModeInfo_Single;
                fromAmino(object: _97.ModeInfo_SingleAmino): _97.ModeInfo_Single;
                toAmino(message: _97.ModeInfo_Single): _97.ModeInfo_SingleAmino;
                fromAminoMsg(object: _97.ModeInfo_SingleAminoMsg): _97.ModeInfo_Single;
                toAminoMsg(message: _97.ModeInfo_Single): _97.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _97.ModeInfo_SingleProtoMsg): _97.ModeInfo_Single;
                toProto(message: _97.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _97.ModeInfo_Single): _97.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _97.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ModeInfo_Multi;
                fromJSON(object: any): _97.ModeInfo_Multi;
                toJSON(message: _97.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_97.ModeInfo_Multi>): _97.ModeInfo_Multi;
                fromAmino(object: _97.ModeInfo_MultiAmino): _97.ModeInfo_Multi;
                toAmino(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiAmino;
                fromAminoMsg(object: _97.ModeInfo_MultiAminoMsg): _97.ModeInfo_Multi;
                toAminoMsg(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _97.ModeInfo_MultiProtoMsg): _97.ModeInfo_Multi;
                toProto(message: _97.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _97.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Fee;
                fromJSON(object: any): _97.Fee;
                toJSON(message: _97.Fee): unknown;
                fromPartial(object: Partial<_97.Fee>): _97.Fee;
                fromAmino(object: _97.FeeAmino): _97.Fee;
                toAmino(message: _97.Fee): _97.FeeAmino;
                fromAminoMsg(object: _97.FeeAminoMsg): _97.Fee;
                toAminoMsg(message: _97.Fee): _97.FeeAminoMsg;
                fromProtoMsg(message: _97.FeeProtoMsg): _97.Fee;
                toProto(message: _97.Fee): Uint8Array;
                toProtoMsg(message: _97.Fee): _97.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _96.OrderBy;
            orderByToJSON(object: _96.OrderBy): string;
            broadcastModeFromJSON(object: any): _96.BroadcastMode;
            broadcastModeToJSON(object: _96.BroadcastMode): string;
            OrderBy: typeof _96.OrderBy;
            OrderBySDKType: typeof _96.OrderBy;
            OrderByAmino: typeof _96.OrderBy;
            BroadcastMode: typeof _96.BroadcastMode;
            BroadcastModeSDKType: typeof _96.BroadcastMode;
            BroadcastModeAmino: typeof _96.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _96.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetTxsEventRequest;
                fromJSON(object: any): _96.GetTxsEventRequest;
                toJSON(message: _96.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_96.GetTxsEventRequest>): _96.GetTxsEventRequest;
                fromAmino(object: _96.GetTxsEventRequestAmino): _96.GetTxsEventRequest;
                toAmino(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestAmino;
                fromAminoMsg(object: _96.GetTxsEventRequestAminoMsg): _96.GetTxsEventRequest;
                toAminoMsg(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _96.GetTxsEventRequestProtoMsg): _96.GetTxsEventRequest;
                toProto(message: _96.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _96.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetTxsEventResponse;
                fromJSON(object: any): _96.GetTxsEventResponse;
                toJSON(message: _96.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_96.GetTxsEventResponse>): _96.GetTxsEventResponse;
                fromAmino(object: _96.GetTxsEventResponseAmino): _96.GetTxsEventResponse;
                toAmino(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseAmino;
                fromAminoMsg(object: _96.GetTxsEventResponseAminoMsg): _96.GetTxsEventResponse;
                toAminoMsg(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _96.GetTxsEventResponseProtoMsg): _96.GetTxsEventResponse;
                toProto(message: _96.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _96.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.BroadcastTxRequest;
                fromJSON(object: any): _96.BroadcastTxRequest;
                toJSON(message: _96.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_96.BroadcastTxRequest>): _96.BroadcastTxRequest;
                fromAmino(object: _96.BroadcastTxRequestAmino): _96.BroadcastTxRequest;
                toAmino(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestAmino;
                fromAminoMsg(object: _96.BroadcastTxRequestAminoMsg): _96.BroadcastTxRequest;
                toAminoMsg(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _96.BroadcastTxRequestProtoMsg): _96.BroadcastTxRequest;
                toProto(message: _96.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _96.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.BroadcastTxResponse;
                fromJSON(object: any): _96.BroadcastTxResponse;
                toJSON(message: _96.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_96.BroadcastTxResponse>): _96.BroadcastTxResponse;
                fromAmino(object: _96.BroadcastTxResponseAmino): _96.BroadcastTxResponse;
                toAmino(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseAmino;
                fromAminoMsg(object: _96.BroadcastTxResponseAminoMsg): _96.BroadcastTxResponse;
                toAminoMsg(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _96.BroadcastTxResponseProtoMsg): _96.BroadcastTxResponse;
                toProto(message: _96.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _96.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SimulateRequest;
                fromJSON(object: any): _96.SimulateRequest;
                toJSON(message: _96.SimulateRequest): unknown;
                fromPartial(object: Partial<_96.SimulateRequest>): _96.SimulateRequest;
                fromAmino(object: _96.SimulateRequestAmino): _96.SimulateRequest;
                toAmino(message: _96.SimulateRequest): _96.SimulateRequestAmino;
                fromAminoMsg(object: _96.SimulateRequestAminoMsg): _96.SimulateRequest;
                toAminoMsg(message: _96.SimulateRequest): _96.SimulateRequestAminoMsg;
                fromProtoMsg(message: _96.SimulateRequestProtoMsg): _96.SimulateRequest;
                toProto(message: _96.SimulateRequest): Uint8Array;
                toProtoMsg(message: _96.SimulateRequest): _96.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _96.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SimulateResponse;
                fromJSON(object: any): _96.SimulateResponse;
                toJSON(message: _96.SimulateResponse): unknown;
                fromPartial(object: Partial<_96.SimulateResponse>): _96.SimulateResponse;
                fromAmino(object: _96.SimulateResponseAmino): _96.SimulateResponse;
                toAmino(message: _96.SimulateResponse): _96.SimulateResponseAmino;
                fromAminoMsg(object: _96.SimulateResponseAminoMsg): _96.SimulateResponse;
                toAminoMsg(message: _96.SimulateResponse): _96.SimulateResponseAminoMsg;
                fromProtoMsg(message: _96.SimulateResponseProtoMsg): _96.SimulateResponse;
                toProto(message: _96.SimulateResponse): Uint8Array;
                toProtoMsg(message: _96.SimulateResponse): _96.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _96.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetTxRequest;
                fromJSON(object: any): _96.GetTxRequest;
                toJSON(message: _96.GetTxRequest): unknown;
                fromPartial(object: Partial<_96.GetTxRequest>): _96.GetTxRequest;
                fromAmino(object: _96.GetTxRequestAmino): _96.GetTxRequest;
                toAmino(message: _96.GetTxRequest): _96.GetTxRequestAmino;
                fromAminoMsg(object: _96.GetTxRequestAminoMsg): _96.GetTxRequest;
                toAminoMsg(message: _96.GetTxRequest): _96.GetTxRequestAminoMsg;
                fromProtoMsg(message: _96.GetTxRequestProtoMsg): _96.GetTxRequest;
                toProto(message: _96.GetTxRequest): Uint8Array;
                toProtoMsg(message: _96.GetTxRequest): _96.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _96.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetTxResponse;
                fromJSON(object: any): _96.GetTxResponse;
                toJSON(message: _96.GetTxResponse): unknown;
                fromPartial(object: Partial<_96.GetTxResponse>): _96.GetTxResponse;
                fromAmino(object: _96.GetTxResponseAmino): _96.GetTxResponse;
                toAmino(message: _96.GetTxResponse): _96.GetTxResponseAmino;
                fromAminoMsg(object: _96.GetTxResponseAminoMsg): _96.GetTxResponse;
                toAminoMsg(message: _96.GetTxResponse): _96.GetTxResponseAminoMsg;
                fromProtoMsg(message: _96.GetTxResponseProtoMsg): _96.GetTxResponse;
                toProto(message: _96.GetTxResponse): Uint8Array;
                toProtoMsg(message: _96.GetTxResponse): _96.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _96.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetBlockWithTxsRequest;
                fromJSON(object: any): _96.GetBlockWithTxsRequest;
                toJSON(message: _96.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_96.GetBlockWithTxsRequest>): _96.GetBlockWithTxsRequest;
                fromAmino(object: _96.GetBlockWithTxsRequestAmino): _96.GetBlockWithTxsRequest;
                toAmino(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _96.GetBlockWithTxsRequestAminoMsg): _96.GetBlockWithTxsRequest;
                toAminoMsg(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _96.GetBlockWithTxsRequestProtoMsg): _96.GetBlockWithTxsRequest;
                toProto(message: _96.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _96.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetBlockWithTxsResponse;
                fromJSON(object: any): _96.GetBlockWithTxsResponse;
                toJSON(message: _96.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_96.GetBlockWithTxsResponse>): _96.GetBlockWithTxsResponse;
                fromAmino(object: _96.GetBlockWithTxsResponseAmino): _96.GetBlockWithTxsResponse;
                toAmino(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _96.GetBlockWithTxsResponseAminoMsg): _96.GetBlockWithTxsResponse;
                toAminoMsg(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _96.GetBlockWithTxsResponseProtoMsg): _96.GetBlockWithTxsResponse;
                toProto(message: _96.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _306.MsgClientImpl;
            QueryClientImpl: typeof _292.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _273.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _99.MsgSoftwareUpgrade) => _99.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _99.MsgSoftwareUpgradeAmino) => _99.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _99.MsgCancelUpgrade) => _99.MsgCancelUpgradeAmino;
                    fromAmino: (object: _99.MsgCancelUpgradeAmino) => _99.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _100.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Plan;
                fromJSON(object: any): _100.Plan;
                toJSON(message: _100.Plan): unknown;
                fromPartial(object: Partial<_100.Plan>): _100.Plan;
                fromAmino(object: _100.PlanAmino): _100.Plan;
                toAmino(message: _100.Plan): _100.PlanAmino;
                fromAminoMsg(object: _100.PlanAminoMsg): _100.Plan;
                toAminoMsg(message: _100.Plan): _100.PlanAminoMsg;
                fromProtoMsg(message: _100.PlanProtoMsg): _100.Plan;
                toProto(message: _100.Plan): Uint8Array;
                toProtoMsg(message: _100.Plan): _100.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _100.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SoftwareUpgradeProposal;
                fromJSON(object: any): _100.SoftwareUpgradeProposal;
                toJSON(message: _100.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_100.SoftwareUpgradeProposal>): _100.SoftwareUpgradeProposal;
                fromAmino(object: _100.SoftwareUpgradeProposalAmino): _100.SoftwareUpgradeProposal;
                toAmino(message: _100.SoftwareUpgradeProposal): _100.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _100.SoftwareUpgradeProposalAminoMsg): _100.SoftwareUpgradeProposal;
                toAminoMsg(message: _100.SoftwareUpgradeProposal): _100.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _100.SoftwareUpgradeProposalProtoMsg): _100.SoftwareUpgradeProposal;
                toProto(message: _100.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _100.SoftwareUpgradeProposal): _100.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _100.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _100.CancelSoftwareUpgradeProposal;
                toJSON(message: _100.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_100.CancelSoftwareUpgradeProposal>): _100.CancelSoftwareUpgradeProposal;
                fromAmino(object: _100.CancelSoftwareUpgradeProposalAmino): _100.CancelSoftwareUpgradeProposal;
                toAmino(message: _100.CancelSoftwareUpgradeProposal): _100.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _100.CancelSoftwareUpgradeProposalAminoMsg): _100.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _100.CancelSoftwareUpgradeProposal): _100.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _100.CancelSoftwareUpgradeProposalProtoMsg): _100.CancelSoftwareUpgradeProposal;
                toProto(message: _100.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _100.CancelSoftwareUpgradeProposal): _100.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _100.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ModuleVersion;
                fromJSON(object: any): _100.ModuleVersion;
                toJSON(message: _100.ModuleVersion): unknown;
                fromPartial(object: Partial<_100.ModuleVersion>): _100.ModuleVersion;
                fromAmino(object: _100.ModuleVersionAmino): _100.ModuleVersion;
                toAmino(message: _100.ModuleVersion): _100.ModuleVersionAmino;
                fromAminoMsg(object: _100.ModuleVersionAminoMsg): _100.ModuleVersion;
                toAminoMsg(message: _100.ModuleVersion): _100.ModuleVersionAminoMsg;
                fromProtoMsg(message: _100.ModuleVersionProtoMsg): _100.ModuleVersion;
                toProto(message: _100.ModuleVersion): Uint8Array;
                toProtoMsg(message: _100.ModuleVersion): _100.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _99.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSoftwareUpgrade;
                fromJSON(object: any): _99.MsgSoftwareUpgrade;
                toJSON(message: _99.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_99.MsgSoftwareUpgrade>): _99.MsgSoftwareUpgrade;
                fromAmino(object: _99.MsgSoftwareUpgradeAmino): _99.MsgSoftwareUpgrade;
                toAmino(message: _99.MsgSoftwareUpgrade): _99.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _99.MsgSoftwareUpgradeAminoMsg): _99.MsgSoftwareUpgrade;
                toAminoMsg(message: _99.MsgSoftwareUpgrade): _99.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _99.MsgSoftwareUpgradeProtoMsg): _99.MsgSoftwareUpgrade;
                toProto(message: _99.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _99.MsgSoftwareUpgrade): _99.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _99.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _99.MsgSoftwareUpgradeResponse;
                toJSON(_: _99.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_99.MsgSoftwareUpgradeResponse>): _99.MsgSoftwareUpgradeResponse;
                fromAmino(_: _99.MsgSoftwareUpgradeResponseAmino): _99.MsgSoftwareUpgradeResponse;
                toAmino(_: _99.MsgSoftwareUpgradeResponse): _99.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _99.MsgSoftwareUpgradeResponseAminoMsg): _99.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _99.MsgSoftwareUpgradeResponse): _99.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _99.MsgSoftwareUpgradeResponseProtoMsg): _99.MsgSoftwareUpgradeResponse;
                toProto(message: _99.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _99.MsgSoftwareUpgradeResponse): _99.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _99.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgCancelUpgrade;
                fromJSON(object: any): _99.MsgCancelUpgrade;
                toJSON(message: _99.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_99.MsgCancelUpgrade>): _99.MsgCancelUpgrade;
                fromAmino(object: _99.MsgCancelUpgradeAmino): _99.MsgCancelUpgrade;
                toAmino(message: _99.MsgCancelUpgrade): _99.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _99.MsgCancelUpgradeAminoMsg): _99.MsgCancelUpgrade;
                toAminoMsg(message: _99.MsgCancelUpgrade): _99.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _99.MsgCancelUpgradeProtoMsg): _99.MsgCancelUpgrade;
                toProto(message: _99.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _99.MsgCancelUpgrade): _99.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _99.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgCancelUpgradeResponse;
                fromJSON(_: any): _99.MsgCancelUpgradeResponse;
                toJSON(_: _99.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_99.MsgCancelUpgradeResponse>): _99.MsgCancelUpgradeResponse;
                fromAmino(_: _99.MsgCancelUpgradeResponseAmino): _99.MsgCancelUpgradeResponse;
                toAmino(_: _99.MsgCancelUpgradeResponse): _99.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _99.MsgCancelUpgradeResponseAminoMsg): _99.MsgCancelUpgradeResponse;
                toAminoMsg(message: _99.MsgCancelUpgradeResponse): _99.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _99.MsgCancelUpgradeResponseProtoMsg): _99.MsgCancelUpgradeResponse;
                toProto(message: _99.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _99.MsgCancelUpgradeResponse): _99.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _98.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCurrentPlanRequest;
                fromJSON(_: any): _98.QueryCurrentPlanRequest;
                toJSON(_: _98.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_98.QueryCurrentPlanRequest>): _98.QueryCurrentPlanRequest;
                fromAmino(_: _98.QueryCurrentPlanRequestAmino): _98.QueryCurrentPlanRequest;
                toAmino(_: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _98.QueryCurrentPlanRequestAminoMsg): _98.QueryCurrentPlanRequest;
                toAminoMsg(message: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _98.QueryCurrentPlanRequestProtoMsg): _98.QueryCurrentPlanRequest;
                toProto(message: _98.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _98.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCurrentPlanResponse;
                fromJSON(object: any): _98.QueryCurrentPlanResponse;
                toJSON(message: _98.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_98.QueryCurrentPlanResponse>): _98.QueryCurrentPlanResponse;
                fromAmino(object: _98.QueryCurrentPlanResponseAmino): _98.QueryCurrentPlanResponse;
                toAmino(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _98.QueryCurrentPlanResponseAminoMsg): _98.QueryCurrentPlanResponse;
                toAminoMsg(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _98.QueryCurrentPlanResponseProtoMsg): _98.QueryCurrentPlanResponse;
                toProto(message: _98.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _98.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryAppliedPlanRequest;
                fromJSON(object: any): _98.QueryAppliedPlanRequest;
                toJSON(message: _98.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_98.QueryAppliedPlanRequest>): _98.QueryAppliedPlanRequest;
                fromAmino(object: _98.QueryAppliedPlanRequestAmino): _98.QueryAppliedPlanRequest;
                toAmino(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _98.QueryAppliedPlanRequestAminoMsg): _98.QueryAppliedPlanRequest;
                toAminoMsg(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAppliedPlanRequestProtoMsg): _98.QueryAppliedPlanRequest;
                toProto(message: _98.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _98.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryAppliedPlanResponse;
                fromJSON(object: any): _98.QueryAppliedPlanResponse;
                toJSON(message: _98.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_98.QueryAppliedPlanResponse>): _98.QueryAppliedPlanResponse;
                fromAmino(object: _98.QueryAppliedPlanResponseAmino): _98.QueryAppliedPlanResponse;
                toAmino(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _98.QueryAppliedPlanResponseAminoMsg): _98.QueryAppliedPlanResponse;
                toAminoMsg(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAppliedPlanResponseProtoMsg): _98.QueryAppliedPlanResponse;
                toProto(message: _98.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _98.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateRequest;
                toJSON(message: _98.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateRequest>): _98.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _98.QueryUpgradedConsensusStateRequestAmino): _98.QueryUpgradedConsensusStateRequest;
                toAmino(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _98.QueryUpgradedConsensusStateRequestAminoMsg): _98.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _98.QueryUpgradedConsensusStateRequestProtoMsg): _98.QueryUpgradedConsensusStateRequest;
                toProto(message: _98.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _98.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateResponse;
                toJSON(message: _98.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateResponse>): _98.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _98.QueryUpgradedConsensusStateResponseAmino): _98.QueryUpgradedConsensusStateResponse;
                toAmino(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _98.QueryUpgradedConsensusStateResponseAminoMsg): _98.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _98.QueryUpgradedConsensusStateResponseProtoMsg): _98.QueryUpgradedConsensusStateResponse;
                toProto(message: _98.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _98.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryModuleVersionsRequest;
                fromJSON(object: any): _98.QueryModuleVersionsRequest;
                toJSON(message: _98.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_98.QueryModuleVersionsRequest>): _98.QueryModuleVersionsRequest;
                fromAmino(object: _98.QueryModuleVersionsRequestAmino): _98.QueryModuleVersionsRequest;
                toAmino(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _98.QueryModuleVersionsRequestAminoMsg): _98.QueryModuleVersionsRequest;
                toAminoMsg(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryModuleVersionsRequestProtoMsg): _98.QueryModuleVersionsRequest;
                toProto(message: _98.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _98.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryModuleVersionsResponse;
                fromJSON(object: any): _98.QueryModuleVersionsResponse;
                toJSON(message: _98.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_98.QueryModuleVersionsResponse>): _98.QueryModuleVersionsResponse;
                fromAmino(object: _98.QueryModuleVersionsResponseAmino): _98.QueryModuleVersionsResponse;
                toAmino(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _98.QueryModuleVersionsResponseAminoMsg): _98.QueryModuleVersionsResponse;
                toAminoMsg(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryModuleVersionsResponseProtoMsg): _98.QueryModuleVersionsResponse;
                toProto(message: _98.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _307.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _101.MsgCreateVestingAccount) => _101.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _101.MsgCreateVestingAccountAmino) => _101.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _102.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.BaseVestingAccount;
                fromJSON(object: any): _102.BaseVestingAccount;
                toJSON(message: _102.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_102.BaseVestingAccount>): _102.BaseVestingAccount;
                fromAmino(object: _102.BaseVestingAccountAmino): _102.BaseVestingAccount;
                toAmino(message: _102.BaseVestingAccount): _102.BaseVestingAccountAmino;
                fromAminoMsg(object: _102.BaseVestingAccountAminoMsg): _102.BaseVestingAccount;
                toAminoMsg(message: _102.BaseVestingAccount): _102.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _102.BaseVestingAccountProtoMsg): _102.BaseVestingAccount;
                toProto(message: _102.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _102.BaseVestingAccount): _102.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _102.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ContinuousVestingAccount;
                fromJSON(object: any): _102.ContinuousVestingAccount;
                toJSON(message: _102.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_102.ContinuousVestingAccount>): _102.ContinuousVestingAccount;
                fromAmino(object: _102.ContinuousVestingAccountAmino): _102.ContinuousVestingAccount;
                toAmino(message: _102.ContinuousVestingAccount): _102.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _102.ContinuousVestingAccountAminoMsg): _102.ContinuousVestingAccount;
                toAminoMsg(message: _102.ContinuousVestingAccount): _102.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _102.ContinuousVestingAccountProtoMsg): _102.ContinuousVestingAccount;
                toProto(message: _102.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _102.ContinuousVestingAccount): _102.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _102.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DelayedVestingAccount;
                fromJSON(object: any): _102.DelayedVestingAccount;
                toJSON(message: _102.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_102.DelayedVestingAccount>): _102.DelayedVestingAccount;
                fromAmino(object: _102.DelayedVestingAccountAmino): _102.DelayedVestingAccount;
                toAmino(message: _102.DelayedVestingAccount): _102.DelayedVestingAccountAmino;
                fromAminoMsg(object: _102.DelayedVestingAccountAminoMsg): _102.DelayedVestingAccount;
                toAminoMsg(message: _102.DelayedVestingAccount): _102.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _102.DelayedVestingAccountProtoMsg): _102.DelayedVestingAccount;
                toProto(message: _102.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _102.DelayedVestingAccount): _102.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _102.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Period;
                fromJSON(object: any): _102.Period;
                toJSON(message: _102.Period): unknown;
                fromPartial(object: Partial<_102.Period>): _102.Period;
                fromAmino(object: _102.PeriodAmino): _102.Period;
                toAmino(message: _102.Period): _102.PeriodAmino;
                fromAminoMsg(object: _102.PeriodAminoMsg): _102.Period;
                toAminoMsg(message: _102.Period): _102.PeriodAminoMsg;
                fromProtoMsg(message: _102.PeriodProtoMsg): _102.Period;
                toProto(message: _102.Period): Uint8Array;
                toProtoMsg(message: _102.Period): _102.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _102.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PeriodicVestingAccount;
                fromJSON(object: any): _102.PeriodicVestingAccount;
                toJSON(message: _102.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_102.PeriodicVestingAccount>): _102.PeriodicVestingAccount;
                fromAmino(object: _102.PeriodicVestingAccountAmino): _102.PeriodicVestingAccount;
                toAmino(message: _102.PeriodicVestingAccount): _102.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _102.PeriodicVestingAccountAminoMsg): _102.PeriodicVestingAccount;
                toAminoMsg(message: _102.PeriodicVestingAccount): _102.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _102.PeriodicVestingAccountProtoMsg): _102.PeriodicVestingAccount;
                toProto(message: _102.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _102.PeriodicVestingAccount): _102.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _102.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PermanentLockedAccount;
                fromJSON(object: any): _102.PermanentLockedAccount;
                toJSON(message: _102.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_102.PermanentLockedAccount>): _102.PermanentLockedAccount;
                fromAmino(object: _102.PermanentLockedAccountAmino): _102.PermanentLockedAccount;
                toAmino(message: _102.PermanentLockedAccount): _102.PermanentLockedAccountAmino;
                fromAminoMsg(object: _102.PermanentLockedAccountAminoMsg): _102.PermanentLockedAccount;
                toAminoMsg(message: _102.PermanentLockedAccount): _102.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _102.PermanentLockedAccountProtoMsg): _102.PermanentLockedAccount;
                toProto(message: _102.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _102.PermanentLockedAccount): _102.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _101.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgCreateVestingAccount;
                fromJSON(object: any): _101.MsgCreateVestingAccount;
                toJSON(message: _101.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_101.MsgCreateVestingAccount>): _101.MsgCreateVestingAccount;
                fromAmino(object: _101.MsgCreateVestingAccountAmino): _101.MsgCreateVestingAccount;
                toAmino(message: _101.MsgCreateVestingAccount): _101.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _101.MsgCreateVestingAccountAminoMsg): _101.MsgCreateVestingAccount;
                toAminoMsg(message: _101.MsgCreateVestingAccount): _101.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _101.MsgCreateVestingAccountProtoMsg): _101.MsgCreateVestingAccount;
                toProto(message: _101.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _101.MsgCreateVestingAccount): _101.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _101.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _101.MsgCreateVestingAccountResponse;
                toJSON(_: _101.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_101.MsgCreateVestingAccountResponse>): _101.MsgCreateVestingAccountResponse;
                fromAmino(_: _101.MsgCreateVestingAccountResponseAmino): _101.MsgCreateVestingAccountResponse;
                toAmino(_: _101.MsgCreateVestingAccountResponse): _101.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _101.MsgCreateVestingAccountResponseAminoMsg): _101.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _101.MsgCreateVestingAccountResponse): _101.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _101.MsgCreateVestingAccountResponseProtoMsg): _101.MsgCreateVestingAccountResponse;
                toProto(message: _101.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _101.MsgCreateVestingAccountResponse): _101.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: _293.MsgClientImpl;
                };
                authz: {
                    v1beta1: _294.MsgClientImpl;
                };
                bank: {
                    v1beta1: _295.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _296.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _297.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _298.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _299.MsgClientImpl;
                };
                gov: {
                    v1: _300.MsgClientImpl;
                    v1beta1: _301.MsgClientImpl;
                };
                group: {
                    v1: _302.MsgClientImpl;
                };
                nft: {
                    v1beta1: _303.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _304.MsgClientImpl;
                };
                staking: {
                    v1beta1: _305.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _306.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _307.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: {
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                        resourceDependencyMappingFromMessageKey(request: _3.ResourceDependencyMappingFromMessageKeyRequest): Promise<_3.ResourceDependencyMappingFromMessageKeyResponse>;
                        listResourceDependencyMapping(request?: _3.ListResourceDependencyMappingRequest): Promise<_3.ListResourceDependencyMappingResponse>;
                        wasmDependencyMapping(request: _3.WasmDependencyMappingRequest): Promise<_3.WasmDependencyMappingResponse>;
                        listWasmDependencyMapping(request?: _3.ListWasmDependencyMappingRequest): Promise<_3.ListWasmDependencyMappingResponse>;
                    };
                };
                app: {
                    v1alpha1: {
                        config(request?: _11.QueryConfigRequest): Promise<_11.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _14.QueryAccountsRequest): Promise<_14.QueryAccountsResponse>;
                        account(request: _14.QueryAccountRequest): Promise<_14.QueryAccountResponse>;
                        params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                        nextAccountNumber(request?: _14.QueryNextAccountNumberRequest): Promise<_14.QueryNextAccountNumberResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _18.QueryGrantsRequest): Promise<_18.QueryGrantsResponse>;
                        granterGrants(request: _18.QueryGranterGrantsRequest): Promise<_18.QueryGranterGrantsResponse>;
                        granteeGrants(request: _18.QueryGranteeGrantsRequest): Promise<_18.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _23.QueryBalanceRequest): Promise<_23.QueryBalanceResponse>;
                        allBalances(request: _23.QueryAllBalancesRequest): Promise<_23.QueryAllBalancesResponse>;
                        spendableBalances(request: _23.QuerySpendableBalancesRequest): Promise<_23.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _23.QueryTotalSupplyRequest): Promise<_23.QueryTotalSupplyResponse>;
                        supplyOf(request: _23.QuerySupplyOfRequest): Promise<_23.QuerySupplyOfResponse>;
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                        denomMetadata(request: _23.QueryDenomMetadataRequest): Promise<_23.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _23.QueryDenomsMetadataRequest): Promise<_23.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _33.GetNodeInfoRequest): Promise<_33.GetNodeInfoResponse>;
                            getSyncing(request?: _33.GetSyncingRequest): Promise<_33.GetSyncingResponse>;
                            getLatestBlock(request?: _33.GetLatestBlockRequest): Promise<_33.GetLatestBlockResponse>;
                            getBlockByHeight(request: _33.GetBlockByHeightRequest): Promise<_33.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _33.GetLatestValidatorSetRequest): Promise<_33.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _33.GetValidatorSetByHeightRequest): Promise<_33.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                        allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _56.QueryAllowanceRequest): Promise<_56.QueryAllowanceResponse>;
                        allowances(request: _56.QueryAllowancesRequest): Promise<_56.QueryAllowancesResponse>;
                        allowancesByGranter(request: _56.QueryAllowancesByGranterRequest): Promise<_56.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                        proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                        vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                        votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                        params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                        deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                        tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                        proposals(request: _65.QueryProposalsRequest): Promise<_65.QueryProposalsResponse>;
                        vote(request: _65.QueryVoteRequest): Promise<_65.QueryVoteResponse>;
                        votes(request: _65.QueryVotesRequest): Promise<_65.QueryVotesResponse>;
                        params(request: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                        deposit(request: _65.QueryDepositRequest): Promise<_65.QueryDepositResponse>;
                        deposits(request: _65.QueryDepositsRequest): Promise<_65.QueryDepositsResponse>;
                        tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _69.QueryGroupInfoRequest): Promise<_69.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _69.QueryGroupPolicyInfoRequest): Promise<_69.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _69.QueryGroupMembersRequest): Promise<_69.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _69.QueryGroupsByAdminRequest): Promise<_69.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _69.QueryGroupPoliciesByGroupRequest): Promise<_69.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _69.QueryGroupPoliciesByAdminRequest): Promise<_69.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _69.QueryProposalsByGroupPolicyRequest): Promise<_69.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _69.QueryVoteByProposalVoterRequest): Promise<_69.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _69.QueryVotesByProposalRequest): Promise<_69.QueryVotesByProposalResponse>;
                        votesByVoter(request: _69.QueryVotesByVoterRequest): Promise<_69.QueryVotesByVoterResponse>;
                        groupsByMember(request: _69.QueryGroupsByMemberRequest): Promise<_69.QueryGroupsByMemberResponse>;
                        tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        inflation(request?: _74.QueryInflationRequest): Promise<_74.QueryInflationResponse>;
                        annualProvisions(request?: _74.QueryAnnualProvisionsRequest): Promise<_74.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                        owner(request: _79.QueryOwnerRequest): Promise<_79.QueryOwnerResponse>;
                        supply(request: _79.QuerySupplyRequest): Promise<_79.QuerySupplyResponse>;
                        nFTs(request: _79.QueryNFTsRequest): Promise<_79.QueryNFTsResponse>;
                        nFT(request: _79.QueryNFTRequest): Promise<_79.QueryNFTResponse>;
                        class(request: _79.QueryClassRequest): Promise<_79.QueryClassResponse>;
                        classes(request?: _79.QueryClassesRequest): Promise<_79.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                        signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                        validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                        validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                        unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                        delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                        pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                        getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                        broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                        getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                        getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                        appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: _256.LCDQueryClient;
                };
                auth: {
                    v1beta1: _257.LCDQueryClient;
                };
                authz: {
                    v1beta1: _258.LCDQueryClient;
                };
                bank: {
                    v1beta1: _259.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _260.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _261.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _262.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _263.LCDQueryClient;
                };
                gov: {
                    v1: _264.LCDQueryClient;
                    v1beta1: _265.LCDQueryClient;
                };
                group: {
                    v1: _266.LCDQueryClient;
                };
                mint: {
                    v1beta1: _267.LCDQueryClient;
                };
                nft: {
                    v1beta1: _268.LCDQueryClient;
                };
                params: {
                    v1beta1: _269.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _270.LCDQueryClient;
                };
                staking: {
                    v1beta1: _271.LCDQueryClient;
                };
                tx: {
                    v1beta1: _272.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _273.LCDQueryClient;
                };
            };
        }>;
    };
}
