import * as _69 from "./seichain/dex/asset_list";
import * as _70 from "./seichain/dex/contract";
import * as _71 from "./seichain/dex/deposit";
import * as _72 from "./seichain/dex/enums";
import * as _73 from "./seichain/dex/genesis";
import * as _74 from "./seichain/dex/gov";
import * as _75 from "./seichain/dex/long_book";
import * as _76 from "./seichain/dex/match_result";
import * as _77 from "./seichain/dex/order_entry";
import * as _78 from "./seichain/dex/order";
import * as _79 from "./seichain/dex/pair";
import * as _80 from "./seichain/dex/params";
import * as _81 from "./seichain/dex/price";
import * as _82 from "./seichain/dex/query";
import * as _83 from "./seichain/dex/settlement";
import * as _84 from "./seichain/dex/short_book";
import * as _85 from "./seichain/dex/tick_size";
import * as _86 from "./seichain/dex/twap";
import * as _87 from "./seichain/dex/tx";
import * as _93 from "./seichain/epoch/epoch";
import * as _94 from "./seichain/epoch/genesis";
import * as _95 from "./seichain/epoch/params";
import * as _96 from "./seichain/epoch/query";
import * as _102 from "./seichain/mint/v1beta1/genesis";
import * as _103 from "./seichain/mint/v1beta1/gov";
import * as _104 from "./seichain/mint/v1beta1/mint";
import * as _105 from "./seichain/mint/v1beta1/query";
import * as _110 from "./seichain/oracle/genesis";
import * as _111 from "./seichain/oracle/oracle";
import * as _112 from "./seichain/oracle/query";
import * as _113 from "./seichain/oracle/tx";
import * as _119 from "../tokenfactory/authorityMetadata";
import * as _120 from "../tokenfactory/genesis";
import * as _121 from "../tokenfactory/params";
import * as _122 from "../tokenfactory/query";
import * as _123 from "../tokenfactory/tx";
import * as _218 from "./seichain/dex/query.lcd";
import * as _219 from "./seichain/epoch/query.lcd";
import * as _220 from "./seichain/mint/v1beta1/query.lcd";
import * as _221 from "./seichain/oracle/query.lcd";
import * as _223 from "../tokenfactory/query.lcd";
import * as _228 from "./seichain/dex/query.rpc.Query";
import * as _229 from "./seichain/epoch/query.rpc.Query";
import * as _230 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _231 from "./seichain/oracle/query.rpc.Query";
import * as _233 from "../tokenfactory/query.rpc.Query";
import * as _236 from "./seichain/dex/tx.rpc.msg";
import * as _237 from "./seichain/oracle/tx.rpc.msg";
import * as _239 from "../tokenfactory/tx.rpc.msg";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                longBook(request: _82.QueryGetLongBookRequest): Promise<_82.QueryGetLongBookResponse>;
                longBookAll(request: _82.QueryAllLongBookRequest): Promise<_82.QueryAllLongBookResponse>;
                shortBook(request: _82.QueryGetShortBookRequest): Promise<_82.QueryGetShortBookResponse>;
                shortBookAll(request: _82.QueryAllShortBookRequest): Promise<_82.QueryAllShortBookResponse>;
                getPrice(request: _82.QueryGetPriceRequest): Promise<_82.QueryGetPriceResponse>;
                getLatestPrice(request: _82.QueryGetLatestPriceRequest): Promise<_82.QueryGetLatestPriceResponse>;
                getPrices(request: _82.QueryGetPricesRequest): Promise<_82.QueryGetPricesResponse>;
                getTwaps(request: _82.QueryGetTwapsRequest): Promise<_82.QueryGetTwapsResponse>;
                assetMetadata(request: _82.QueryAssetMetadataRequest): Promise<_82.QueryAssetMetadataResponse>;
                assetList(request?: _82.QueryAssetListRequest): Promise<_82.QueryAssetListResponse>;
                getRegisteredPairs(request: _82.QueryRegisteredPairsRequest): Promise<_82.QueryRegisteredPairsResponse>;
                getRegisteredContract(request: _82.QueryRegisteredContractRequest): Promise<_82.QueryRegisteredContractResponse>;
                getOrders(request: _82.QueryGetOrdersRequest): Promise<_82.QueryGetOrdersResponse>;
                getOrder(request: _82.QueryGetOrderByIDRequest): Promise<_82.QueryGetOrderByIDResponse>;
                getHistoricalPrices(request: _82.QueryGetHistoricalPricesRequest): Promise<_82.QueryGetHistoricalPricesResponse>;
                getMarketSummary(request: _82.QueryGetMarketSummaryRequest): Promise<_82.QueryGetMarketSummaryResponse>;
                getOrderSimulation(request: _82.QueryOrderSimulationRequest): Promise<_82.QueryOrderSimulationResponse>;
                getMatchResult(request: _82.QueryGetMatchResultRequest): Promise<_82.QueryGetMatchResultResponse>;
                getOrderCount(request: _82.QueryGetOrderCountRequest): Promise<_82.QueryGetOrderCountResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeOrders(value: _87.MsgPlaceOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrders(value: _87.MsgCancelOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _87.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    contractDepositRent(value: _87.MsgContractDepositRent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterContract(value: _87.MsgUnregisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerPairs(value: _87.MsgRegisterPairs): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePriceTickSize(value: _87.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateQuantityTickSize(value: _87.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unsuspendContract(value: _87.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeOrders(value: _87.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _87.MsgPlaceOrders;
                    };
                    cancelOrders(value: _87.MsgCancelOrders): {
                        typeUrl: string;
                        value: _87.MsgCancelOrders;
                    };
                    registerContract(value: _87.MsgRegisterContract): {
                        typeUrl: string;
                        value: _87.MsgRegisterContract;
                    };
                    contractDepositRent(value: _87.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _87.MsgContractDepositRent;
                    };
                    unregisterContract(value: _87.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _87.MsgUnregisterContract;
                    };
                    registerPairs(value: _87.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _87.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _87.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _87.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _87.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _87.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _87.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _87.MsgUnsuspendContract;
                    };
                };
                toJSON: {
                    placeOrders(value: _87.MsgPlaceOrders): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelOrders(value: _87.MsgCancelOrders): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerContract(value: _87.MsgRegisterContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    contractDepositRent(value: _87.MsgContractDepositRent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unregisterContract(value: _87.MsgUnregisterContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerPairs(value: _87.MsgRegisterPairs): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePriceTickSize(value: _87.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateQuantityTickSize(value: _87.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unsuspendContract(value: _87.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    placeOrders(value: any): {
                        typeUrl: string;
                        value: _87.MsgPlaceOrders;
                    };
                    cancelOrders(value: any): {
                        typeUrl: string;
                        value: _87.MsgCancelOrders;
                    };
                    registerContract(value: any): {
                        typeUrl: string;
                        value: _87.MsgRegisterContract;
                    };
                    contractDepositRent(value: any): {
                        typeUrl: string;
                        value: _87.MsgContractDepositRent;
                    };
                    unregisterContract(value: any): {
                        typeUrl: string;
                        value: _87.MsgUnregisterContract;
                    };
                    registerPairs(value: any): {
                        typeUrl: string;
                        value: _87.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: any): {
                        typeUrl: string;
                        value: _87.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: any): {
                        typeUrl: string;
                        value: _87.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: any): {
                        typeUrl: string;
                        value: _87.MsgUnsuspendContract;
                    };
                };
                fromPartial: {
                    placeOrders(value: _87.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _87.MsgPlaceOrders;
                    };
                    cancelOrders(value: _87.MsgCancelOrders): {
                        typeUrl: string;
                        value: _87.MsgCancelOrders;
                    };
                    registerContract(value: _87.MsgRegisterContract): {
                        typeUrl: string;
                        value: _87.MsgRegisterContract;
                    };
                    contractDepositRent(value: _87.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _87.MsgContractDepositRent;
                    };
                    unregisterContract(value: _87.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _87.MsgUnregisterContract;
                    };
                    registerPairs(value: _87.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _87.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _87.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _87.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _87.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _87.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _87.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _87.MsgUnsuspendContract;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.dex.MsgPlaceOrders": {
                    aminoType: string;
                    toAmino: (message: _87.MsgPlaceOrders) => _87.MsgPlaceOrdersAmino;
                    fromAmino: (object: _87.MsgPlaceOrdersAmino) => _87.MsgPlaceOrders;
                };
                "/seiprotocol.seichain.dex.MsgCancelOrders": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCancelOrders) => _87.MsgCancelOrdersAmino;
                    fromAmino: (object: _87.MsgCancelOrdersAmino) => _87.MsgCancelOrders;
                };
                "/seiprotocol.seichain.dex.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: (message: _87.MsgRegisterContract) => _87.MsgRegisterContractAmino;
                    fromAmino: (object: _87.MsgRegisterContractAmino) => _87.MsgRegisterContract;
                };
                "/seiprotocol.seichain.dex.MsgContractDepositRent": {
                    aminoType: string;
                    toAmino: (message: _87.MsgContractDepositRent) => _87.MsgContractDepositRentAmino;
                    fromAmino: (object: _87.MsgContractDepositRentAmino) => _87.MsgContractDepositRent;
                };
                "/seiprotocol.seichain.dex.MsgUnregisterContract": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUnregisterContract) => _87.MsgUnregisterContractAmino;
                    fromAmino: (object: _87.MsgUnregisterContractAmino) => _87.MsgUnregisterContract;
                };
                "/seiprotocol.seichain.dex.MsgRegisterPairs": {
                    aminoType: string;
                    toAmino: (message: _87.MsgRegisterPairs) => _87.MsgRegisterPairsAmino;
                    fromAmino: (object: _87.MsgRegisterPairsAmino) => _87.MsgRegisterPairs;
                };
                "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdatePriceTickSize) => _87.MsgUpdatePriceTickSizeAmino;
                    fromAmino: (object: _87.MsgUpdatePriceTickSizeAmino) => _87.MsgUpdatePriceTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateQuantityTickSize) => _87.MsgUpdateQuantityTickSizeAmino;
                    fromAmino: (object: _87.MsgUpdateQuantityTickSizeAmino) => _87.MsgUpdateQuantityTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUnsuspendContract) => _87.MsgUnsuspendContractAmino;
                    fromAmino: (object: _87.MsgUnsuspendContractAmino) => _87.MsgUnsuspendContract;
                };
            };
            MsgPlaceOrders: {
                typeUrl: string;
                encode(message: _87.MsgPlaceOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgPlaceOrders;
                fromJSON(object: any): _87.MsgPlaceOrders;
                toJSON(message: _87.MsgPlaceOrders): unknown;
                fromPartial(object: Partial<_87.MsgPlaceOrders>): _87.MsgPlaceOrders;
                fromAmino(object: _87.MsgPlaceOrdersAmino): _87.MsgPlaceOrders;
                toAmino(message: _87.MsgPlaceOrders): _87.MsgPlaceOrdersAmino;
                fromAminoMsg(object: _87.MsgPlaceOrdersAminoMsg): _87.MsgPlaceOrders;
                fromProtoMsg(message: _87.MsgPlaceOrdersProtoMsg): _87.MsgPlaceOrders;
                toProto(message: _87.MsgPlaceOrders): Uint8Array;
                toProtoMsg(message: _87.MsgPlaceOrders): _87.MsgPlaceOrdersProtoMsg;
            };
            MsgPlaceOrdersResponse: {
                typeUrl: string;
                encode(message: _87.MsgPlaceOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgPlaceOrdersResponse;
                fromJSON(object: any): _87.MsgPlaceOrdersResponse;
                toJSON(message: _87.MsgPlaceOrdersResponse): unknown;
                fromPartial(object: Partial<_87.MsgPlaceOrdersResponse>): _87.MsgPlaceOrdersResponse;
                fromAmino(object: _87.MsgPlaceOrdersResponseAmino): _87.MsgPlaceOrdersResponse;
                toAmino(message: _87.MsgPlaceOrdersResponse): _87.MsgPlaceOrdersResponseAmino;
                fromAminoMsg(object: _87.MsgPlaceOrdersResponseAminoMsg): _87.MsgPlaceOrdersResponse;
                fromProtoMsg(message: _87.MsgPlaceOrdersResponseProtoMsg): _87.MsgPlaceOrdersResponse;
                toProto(message: _87.MsgPlaceOrdersResponse): Uint8Array;
                toProtoMsg(message: _87.MsgPlaceOrdersResponse): _87.MsgPlaceOrdersResponseProtoMsg;
            };
            MsgCancelOrders: {
                typeUrl: string;
                encode(message: _87.MsgCancelOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCancelOrders;
                fromJSON(object: any): _87.MsgCancelOrders;
                toJSON(message: _87.MsgCancelOrders): unknown;
                fromPartial(object: Partial<_87.MsgCancelOrders>): _87.MsgCancelOrders;
                fromAmino(object: _87.MsgCancelOrdersAmino): _87.MsgCancelOrders;
                toAmino(message: _87.MsgCancelOrders): _87.MsgCancelOrdersAmino;
                fromAminoMsg(object: _87.MsgCancelOrdersAminoMsg): _87.MsgCancelOrders;
                fromProtoMsg(message: _87.MsgCancelOrdersProtoMsg): _87.MsgCancelOrders;
                toProto(message: _87.MsgCancelOrders): Uint8Array;
                toProtoMsg(message: _87.MsgCancelOrders): _87.MsgCancelOrdersProtoMsg;
            };
            MsgCancelOrdersResponse: {
                typeUrl: string;
                encode(_: _87.MsgCancelOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCancelOrdersResponse;
                fromJSON(_: any): _87.MsgCancelOrdersResponse;
                toJSON(_: _87.MsgCancelOrdersResponse): unknown;
                fromPartial(_: Partial<_87.MsgCancelOrdersResponse>): _87.MsgCancelOrdersResponse;
                fromAmino(_: _87.MsgCancelOrdersResponseAmino): _87.MsgCancelOrdersResponse;
                toAmino(_: _87.MsgCancelOrdersResponse): _87.MsgCancelOrdersResponseAmino;
                fromAminoMsg(object: _87.MsgCancelOrdersResponseAminoMsg): _87.MsgCancelOrdersResponse;
                fromProtoMsg(message: _87.MsgCancelOrdersResponseProtoMsg): _87.MsgCancelOrdersResponse;
                toProto(message: _87.MsgCancelOrdersResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCancelOrdersResponse): _87.MsgCancelOrdersResponseProtoMsg;
            };
            MsgRegisterContract: {
                typeUrl: string;
                encode(message: _87.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgRegisterContract;
                fromJSON(object: any): _87.MsgRegisterContract;
                toJSON(message: _87.MsgRegisterContract): unknown;
                fromPartial(object: Partial<_87.MsgRegisterContract>): _87.MsgRegisterContract;
                fromAmino(object: _87.MsgRegisterContractAmino): _87.MsgRegisterContract;
                toAmino(message: _87.MsgRegisterContract): _87.MsgRegisterContractAmino;
                fromAminoMsg(object: _87.MsgRegisterContractAminoMsg): _87.MsgRegisterContract;
                fromProtoMsg(message: _87.MsgRegisterContractProtoMsg): _87.MsgRegisterContract;
                toProto(message: _87.MsgRegisterContract): Uint8Array;
                toProtoMsg(message: _87.MsgRegisterContract): _87.MsgRegisterContractProtoMsg;
            };
            MsgRegisterContractResponse: {
                typeUrl: string;
                encode(_: _87.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgRegisterContractResponse;
                fromJSON(_: any): _87.MsgRegisterContractResponse;
                toJSON(_: _87.MsgRegisterContractResponse): unknown;
                fromPartial(_: Partial<_87.MsgRegisterContractResponse>): _87.MsgRegisterContractResponse;
                fromAmino(_: _87.MsgRegisterContractResponseAmino): _87.MsgRegisterContractResponse;
                toAmino(_: _87.MsgRegisterContractResponse): _87.MsgRegisterContractResponseAmino;
                fromAminoMsg(object: _87.MsgRegisterContractResponseAminoMsg): _87.MsgRegisterContractResponse;
                fromProtoMsg(message: _87.MsgRegisterContractResponseProtoMsg): _87.MsgRegisterContractResponse;
                toProto(message: _87.MsgRegisterContractResponse): Uint8Array;
                toProtoMsg(message: _87.MsgRegisterContractResponse): _87.MsgRegisterContractResponseProtoMsg;
            };
            MsgContractDepositRent: {
                typeUrl: string;
                encode(message: _87.MsgContractDepositRent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgContractDepositRent;
                fromJSON(object: any): _87.MsgContractDepositRent;
                toJSON(message: _87.MsgContractDepositRent): unknown;
                fromPartial(object: Partial<_87.MsgContractDepositRent>): _87.MsgContractDepositRent;
                fromAmino(object: _87.MsgContractDepositRentAmino): _87.MsgContractDepositRent;
                toAmino(message: _87.MsgContractDepositRent): _87.MsgContractDepositRentAmino;
                fromAminoMsg(object: _87.MsgContractDepositRentAminoMsg): _87.MsgContractDepositRent;
                fromProtoMsg(message: _87.MsgContractDepositRentProtoMsg): _87.MsgContractDepositRent;
                toProto(message: _87.MsgContractDepositRent): Uint8Array;
                toProtoMsg(message: _87.MsgContractDepositRent): _87.MsgContractDepositRentProtoMsg;
            };
            MsgContractDepositRentResponse: {
                typeUrl: string;
                encode(_: _87.MsgContractDepositRentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgContractDepositRentResponse;
                fromJSON(_: any): _87.MsgContractDepositRentResponse;
                toJSON(_: _87.MsgContractDepositRentResponse): unknown;
                fromPartial(_: Partial<_87.MsgContractDepositRentResponse>): _87.MsgContractDepositRentResponse;
                fromAmino(_: _87.MsgContractDepositRentResponseAmino): _87.MsgContractDepositRentResponse;
                toAmino(_: _87.MsgContractDepositRentResponse): _87.MsgContractDepositRentResponseAmino;
                fromAminoMsg(object: _87.MsgContractDepositRentResponseAminoMsg): _87.MsgContractDepositRentResponse;
                fromProtoMsg(message: _87.MsgContractDepositRentResponseProtoMsg): _87.MsgContractDepositRentResponse;
                toProto(message: _87.MsgContractDepositRentResponse): Uint8Array;
                toProtoMsg(message: _87.MsgContractDepositRentResponse): _87.MsgContractDepositRentResponseProtoMsg;
            };
            MsgUnregisterContract: {
                typeUrl: string;
                encode(message: _87.MsgUnregisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUnregisterContract;
                fromJSON(object: any): _87.MsgUnregisterContract;
                toJSON(message: _87.MsgUnregisterContract): unknown;
                fromPartial(object: Partial<_87.MsgUnregisterContract>): _87.MsgUnregisterContract;
                fromAmino(object: _87.MsgUnregisterContractAmino): _87.MsgUnregisterContract;
                toAmino(message: _87.MsgUnregisterContract): _87.MsgUnregisterContractAmino;
                fromAminoMsg(object: _87.MsgUnregisterContractAminoMsg): _87.MsgUnregisterContract;
                fromProtoMsg(message: _87.MsgUnregisterContractProtoMsg): _87.MsgUnregisterContract;
                toProto(message: _87.MsgUnregisterContract): Uint8Array;
                toProtoMsg(message: _87.MsgUnregisterContract): _87.MsgUnregisterContractProtoMsg;
            };
            MsgUnregisterContractResponse: {
                typeUrl: string;
                encode(_: _87.MsgUnregisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUnregisterContractResponse;
                fromJSON(_: any): _87.MsgUnregisterContractResponse;
                toJSON(_: _87.MsgUnregisterContractResponse): unknown;
                fromPartial(_: Partial<_87.MsgUnregisterContractResponse>): _87.MsgUnregisterContractResponse;
                fromAmino(_: _87.MsgUnregisterContractResponseAmino): _87.MsgUnregisterContractResponse;
                toAmino(_: _87.MsgUnregisterContractResponse): _87.MsgUnregisterContractResponseAmino;
                fromAminoMsg(object: _87.MsgUnregisterContractResponseAminoMsg): _87.MsgUnregisterContractResponse;
                fromProtoMsg(message: _87.MsgUnregisterContractResponseProtoMsg): _87.MsgUnregisterContractResponse;
                toProto(message: _87.MsgUnregisterContractResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUnregisterContractResponse): _87.MsgUnregisterContractResponseProtoMsg;
            };
            MsgRegisterPairs: {
                typeUrl: string;
                encode(message: _87.MsgRegisterPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgRegisterPairs;
                fromJSON(object: any): _87.MsgRegisterPairs;
                toJSON(message: _87.MsgRegisterPairs): unknown;
                fromPartial(object: Partial<_87.MsgRegisterPairs>): _87.MsgRegisterPairs;
                fromAmino(object: _87.MsgRegisterPairsAmino): _87.MsgRegisterPairs;
                toAmino(message: _87.MsgRegisterPairs): _87.MsgRegisterPairsAmino;
                fromAminoMsg(object: _87.MsgRegisterPairsAminoMsg): _87.MsgRegisterPairs;
                fromProtoMsg(message: _87.MsgRegisterPairsProtoMsg): _87.MsgRegisterPairs;
                toProto(message: _87.MsgRegisterPairs): Uint8Array;
                toProtoMsg(message: _87.MsgRegisterPairs): _87.MsgRegisterPairsProtoMsg;
            };
            MsgRegisterPairsResponse: {
                typeUrl: string;
                encode(_: _87.MsgRegisterPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgRegisterPairsResponse;
                fromJSON(_: any): _87.MsgRegisterPairsResponse;
                toJSON(_: _87.MsgRegisterPairsResponse): unknown;
                fromPartial(_: Partial<_87.MsgRegisterPairsResponse>): _87.MsgRegisterPairsResponse;
                fromAmino(_: _87.MsgRegisterPairsResponseAmino): _87.MsgRegisterPairsResponse;
                toAmino(_: _87.MsgRegisterPairsResponse): _87.MsgRegisterPairsResponseAmino;
                fromAminoMsg(object: _87.MsgRegisterPairsResponseAminoMsg): _87.MsgRegisterPairsResponse;
                fromProtoMsg(message: _87.MsgRegisterPairsResponseProtoMsg): _87.MsgRegisterPairsResponse;
                toProto(message: _87.MsgRegisterPairsResponse): Uint8Array;
                toProtoMsg(message: _87.MsgRegisterPairsResponse): _87.MsgRegisterPairsResponseProtoMsg;
            };
            MsgUpdatePriceTickSize: {
                typeUrl: string;
                encode(message: _87.MsgUpdatePriceTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUpdatePriceTickSize;
                fromJSON(object: any): _87.MsgUpdatePriceTickSize;
                toJSON(message: _87.MsgUpdatePriceTickSize): unknown;
                fromPartial(object: Partial<_87.MsgUpdatePriceTickSize>): _87.MsgUpdatePriceTickSize;
                fromAmino(object: _87.MsgUpdatePriceTickSizeAmino): _87.MsgUpdatePriceTickSize;
                toAmino(message: _87.MsgUpdatePriceTickSize): _87.MsgUpdatePriceTickSizeAmino;
                fromAminoMsg(object: _87.MsgUpdatePriceTickSizeAminoMsg): _87.MsgUpdatePriceTickSize;
                fromProtoMsg(message: _87.MsgUpdatePriceTickSizeProtoMsg): _87.MsgUpdatePriceTickSize;
                toProto(message: _87.MsgUpdatePriceTickSize): Uint8Array;
                toProtoMsg(message: _87.MsgUpdatePriceTickSize): _87.MsgUpdatePriceTickSizeProtoMsg;
            };
            MsgUpdateQuantityTickSize: {
                typeUrl: string;
                encode(message: _87.MsgUpdateQuantityTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUpdateQuantityTickSize;
                fromJSON(object: any): _87.MsgUpdateQuantityTickSize;
                toJSON(message: _87.MsgUpdateQuantityTickSize): unknown;
                fromPartial(object: Partial<_87.MsgUpdateQuantityTickSize>): _87.MsgUpdateQuantityTickSize;
                fromAmino(object: _87.MsgUpdateQuantityTickSizeAmino): _87.MsgUpdateQuantityTickSize;
                toAmino(message: _87.MsgUpdateQuantityTickSize): _87.MsgUpdateQuantityTickSizeAmino;
                fromAminoMsg(object: _87.MsgUpdateQuantityTickSizeAminoMsg): _87.MsgUpdateQuantityTickSize;
                fromProtoMsg(message: _87.MsgUpdateQuantityTickSizeProtoMsg): _87.MsgUpdateQuantityTickSize;
                toProto(message: _87.MsgUpdateQuantityTickSize): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateQuantityTickSize): _87.MsgUpdateQuantityTickSizeProtoMsg;
            };
            MsgUpdateTickSizeResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateTickSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUpdateTickSizeResponse;
                fromJSON(_: any): _87.MsgUpdateTickSizeResponse;
                toJSON(_: _87.MsgUpdateTickSizeResponse): unknown;
                fromPartial(_: Partial<_87.MsgUpdateTickSizeResponse>): _87.MsgUpdateTickSizeResponse;
                fromAmino(_: _87.MsgUpdateTickSizeResponseAmino): _87.MsgUpdateTickSizeResponse;
                toAmino(_: _87.MsgUpdateTickSizeResponse): _87.MsgUpdateTickSizeResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateTickSizeResponseAminoMsg): _87.MsgUpdateTickSizeResponse;
                fromProtoMsg(message: _87.MsgUpdateTickSizeResponseProtoMsg): _87.MsgUpdateTickSizeResponse;
                toProto(message: _87.MsgUpdateTickSizeResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateTickSizeResponse): _87.MsgUpdateTickSizeResponseProtoMsg;
            };
            MsgUnsuspendContract: {
                typeUrl: string;
                encode(message: _87.MsgUnsuspendContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUnsuspendContract;
                fromJSON(object: any): _87.MsgUnsuspendContract;
                toJSON(message: _87.MsgUnsuspendContract): unknown;
                fromPartial(object: Partial<_87.MsgUnsuspendContract>): _87.MsgUnsuspendContract;
                fromAmino(object: _87.MsgUnsuspendContractAmino): _87.MsgUnsuspendContract;
                toAmino(message: _87.MsgUnsuspendContract): _87.MsgUnsuspendContractAmino;
                fromAminoMsg(object: _87.MsgUnsuspendContractAminoMsg): _87.MsgUnsuspendContract;
                fromProtoMsg(message: _87.MsgUnsuspendContractProtoMsg): _87.MsgUnsuspendContract;
                toProto(message: _87.MsgUnsuspendContract): Uint8Array;
                toProtoMsg(message: _87.MsgUnsuspendContract): _87.MsgUnsuspendContractProtoMsg;
            };
            MsgUnsuspendContractResponse: {
                typeUrl: string;
                encode(_: _87.MsgUnsuspendContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUnsuspendContractResponse;
                fromJSON(_: any): _87.MsgUnsuspendContractResponse;
                toJSON(_: _87.MsgUnsuspendContractResponse): unknown;
                fromPartial(_: Partial<_87.MsgUnsuspendContractResponse>): _87.MsgUnsuspendContractResponse;
                fromAmino(_: _87.MsgUnsuspendContractResponseAmino): _87.MsgUnsuspendContractResponse;
                toAmino(_: _87.MsgUnsuspendContractResponse): _87.MsgUnsuspendContractResponseAmino;
                fromAminoMsg(object: _87.MsgUnsuspendContractResponseAminoMsg): _87.MsgUnsuspendContractResponse;
                fromProtoMsg(message: _87.MsgUnsuspendContractResponseProtoMsg): _87.MsgUnsuspendContractResponse;
                toProto(message: _87.MsgUnsuspendContractResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUnsuspendContractResponse): _87.MsgUnsuspendContractResponseProtoMsg;
            };
            Twap: {
                typeUrl: string;
                encode(message: _86.Twap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Twap;
                fromJSON(object: any): _86.Twap;
                toJSON(message: _86.Twap): unknown;
                fromPartial(object: Partial<_86.Twap>): _86.Twap;
                fromAmino(object: _86.TwapAmino): _86.Twap;
                toAmino(message: _86.Twap): _86.TwapAmino;
                fromAminoMsg(object: _86.TwapAminoMsg): _86.Twap;
                fromProtoMsg(message: _86.TwapProtoMsg): _86.Twap;
                toProto(message: _86.Twap): Uint8Array;
                toProtoMsg(message: _86.Twap): _86.TwapProtoMsg;
            };
            TickSize: {
                typeUrl: string;
                encode(message: _85.TickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.TickSize;
                fromJSON(object: any): _85.TickSize;
                toJSON(message: _85.TickSize): unknown;
                fromPartial(object: Partial<_85.TickSize>): _85.TickSize;
                fromAmino(object: _85.TickSizeAmino): _85.TickSize;
                toAmino(message: _85.TickSize): _85.TickSizeAmino;
                fromAminoMsg(object: _85.TickSizeAminoMsg): _85.TickSize;
                fromProtoMsg(message: _85.TickSizeProtoMsg): _85.TickSize;
                toProto(message: _85.TickSize): Uint8Array;
                toProtoMsg(message: _85.TickSize): _85.TickSizeProtoMsg;
            };
            ShortBook: {
                typeUrl: string;
                encode(message: _84.ShortBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ShortBook;
                fromJSON(object: any): _84.ShortBook;
                toJSON(message: _84.ShortBook): unknown;
                fromPartial(object: Partial<_84.ShortBook>): _84.ShortBook;
                fromAmino(object: _84.ShortBookAmino): _84.ShortBook;
                toAmino(message: _84.ShortBook): _84.ShortBookAmino;
                fromAminoMsg(object: _84.ShortBookAminoMsg): _84.ShortBook;
                fromProtoMsg(message: _84.ShortBookProtoMsg): _84.ShortBook;
                toProto(message: _84.ShortBook): Uint8Array;
                toProtoMsg(message: _84.ShortBook): _84.ShortBookProtoMsg;
            };
            SettlementEntry: {
                typeUrl: string;
                encode(message: _83.SettlementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SettlementEntry;
                fromJSON(object: any): _83.SettlementEntry;
                toJSON(message: _83.SettlementEntry): unknown;
                fromPartial(object: Partial<_83.SettlementEntry>): _83.SettlementEntry;
                fromAmino(object: _83.SettlementEntryAmino): _83.SettlementEntry;
                toAmino(message: _83.SettlementEntry): _83.SettlementEntryAmino;
                fromAminoMsg(object: _83.SettlementEntryAminoMsg): _83.SettlementEntry;
                fromProtoMsg(message: _83.SettlementEntryProtoMsg): _83.SettlementEntry;
                toProto(message: _83.SettlementEntry): Uint8Array;
                toProtoMsg(message: _83.SettlementEntry): _83.SettlementEntryProtoMsg;
            };
            Settlements: {
                typeUrl: string;
                encode(message: _83.Settlements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Settlements;
                fromJSON(object: any): _83.Settlements;
                toJSON(message: _83.Settlements): unknown;
                fromPartial(object: Partial<_83.Settlements>): _83.Settlements;
                fromAmino(object: _83.SettlementsAmino): _83.Settlements;
                toAmino(message: _83.Settlements): _83.SettlementsAmino;
                fromAminoMsg(object: _83.SettlementsAminoMsg): _83.Settlements;
                fromProtoMsg(message: _83.SettlementsProtoMsg): _83.Settlements;
                toProto(message: _83.Settlements): Uint8Array;
                toProtoMsg(message: _83.Settlements): _83.SettlementsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsRequest;
                fromJSON(_: any): _82.QueryParamsRequest;
                toJSON(_: _82.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
                fromAmino(_: _82.QueryParamsRequestAmino): _82.QueryParamsRequest;
                toAmino(_: _82.QueryParamsRequest): _82.QueryParamsRequestAmino;
                fromAminoMsg(object: _82.QueryParamsRequestAminoMsg): _82.QueryParamsRequest;
                fromProtoMsg(message: _82.QueryParamsRequestProtoMsg): _82.QueryParamsRequest;
                toProto(message: _82.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryParamsRequest): _82.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsResponse;
                fromJSON(object: any): _82.QueryParamsResponse;
                toJSON(message: _82.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
                fromAmino(object: _82.QueryParamsResponseAmino): _82.QueryParamsResponse;
                toAmino(message: _82.QueryParamsResponse): _82.QueryParamsResponseAmino;
                fromAminoMsg(object: _82.QueryParamsResponseAminoMsg): _82.QueryParamsResponse;
                fromProtoMsg(message: _82.QueryParamsResponseProtoMsg): _82.QueryParamsResponse;
                toProto(message: _82.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryParamsResponse): _82.QueryParamsResponseProtoMsg;
            };
            QueryGetLongBookRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetLongBookRequest;
                fromJSON(object: any): _82.QueryGetLongBookRequest;
                toJSON(message: _82.QueryGetLongBookRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetLongBookRequest>): _82.QueryGetLongBookRequest;
                fromAmino(object: _82.QueryGetLongBookRequestAmino): _82.QueryGetLongBookRequest;
                toAmino(message: _82.QueryGetLongBookRequest): _82.QueryGetLongBookRequestAmino;
                fromAminoMsg(object: _82.QueryGetLongBookRequestAminoMsg): _82.QueryGetLongBookRequest;
                fromProtoMsg(message: _82.QueryGetLongBookRequestProtoMsg): _82.QueryGetLongBookRequest;
                toProto(message: _82.QueryGetLongBookRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetLongBookRequest): _82.QueryGetLongBookRequestProtoMsg;
            };
            QueryGetLongBookResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetLongBookResponse;
                fromJSON(object: any): _82.QueryGetLongBookResponse;
                toJSON(message: _82.QueryGetLongBookResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetLongBookResponse>): _82.QueryGetLongBookResponse;
                fromAmino(object: _82.QueryGetLongBookResponseAmino): _82.QueryGetLongBookResponse;
                toAmino(message: _82.QueryGetLongBookResponse): _82.QueryGetLongBookResponseAmino;
                fromAminoMsg(object: _82.QueryGetLongBookResponseAminoMsg): _82.QueryGetLongBookResponse;
                fromProtoMsg(message: _82.QueryGetLongBookResponseProtoMsg): _82.QueryGetLongBookResponse;
                toProto(message: _82.QueryGetLongBookResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetLongBookResponse): _82.QueryGetLongBookResponseProtoMsg;
            };
            QueryAllLongBookRequest: {
                typeUrl: string;
                encode(message: _82.QueryAllLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryAllLongBookRequest;
                fromJSON(object: any): _82.QueryAllLongBookRequest;
                toJSON(message: _82.QueryAllLongBookRequest): unknown;
                fromPartial(object: Partial<_82.QueryAllLongBookRequest>): _82.QueryAllLongBookRequest;
                fromAmino(object: _82.QueryAllLongBookRequestAmino): _82.QueryAllLongBookRequest;
                toAmino(message: _82.QueryAllLongBookRequest): _82.QueryAllLongBookRequestAmino;
                fromAminoMsg(object: _82.QueryAllLongBookRequestAminoMsg): _82.QueryAllLongBookRequest;
                fromProtoMsg(message: _82.QueryAllLongBookRequestProtoMsg): _82.QueryAllLongBookRequest;
                toProto(message: _82.QueryAllLongBookRequest): Uint8Array;
                toProtoMsg(message: _82.QueryAllLongBookRequest): _82.QueryAllLongBookRequestProtoMsg;
            };
            QueryAllLongBookResponse: {
                typeUrl: string;
                encode(message: _82.QueryAllLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryAllLongBookResponse;
                fromJSON(object: any): _82.QueryAllLongBookResponse;
                toJSON(message: _82.QueryAllLongBookResponse): unknown;
                fromPartial(object: Partial<_82.QueryAllLongBookResponse>): _82.QueryAllLongBookResponse;
                fromAmino(object: _82.QueryAllLongBookResponseAmino): _82.QueryAllLongBookResponse;
                toAmino(message: _82.QueryAllLongBookResponse): _82.QueryAllLongBookResponseAmino;
                fromAminoMsg(object: _82.QueryAllLongBookResponseAminoMsg): _82.QueryAllLongBookResponse;
                fromProtoMsg(message: _82.QueryAllLongBookResponseProtoMsg): _82.QueryAllLongBookResponse;
                toProto(message: _82.QueryAllLongBookResponse): Uint8Array;
                toProtoMsg(message: _82.QueryAllLongBookResponse): _82.QueryAllLongBookResponseProtoMsg;
            };
            QueryGetShortBookRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetShortBookRequest;
                fromJSON(object: any): _82.QueryGetShortBookRequest;
                toJSON(message: _82.QueryGetShortBookRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetShortBookRequest>): _82.QueryGetShortBookRequest;
                fromAmino(object: _82.QueryGetShortBookRequestAmino): _82.QueryGetShortBookRequest;
                toAmino(message: _82.QueryGetShortBookRequest): _82.QueryGetShortBookRequestAmino;
                fromAminoMsg(object: _82.QueryGetShortBookRequestAminoMsg): _82.QueryGetShortBookRequest;
                fromProtoMsg(message: _82.QueryGetShortBookRequestProtoMsg): _82.QueryGetShortBookRequest;
                toProto(message: _82.QueryGetShortBookRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetShortBookRequest): _82.QueryGetShortBookRequestProtoMsg;
            };
            QueryGetShortBookResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetShortBookResponse;
                fromJSON(object: any): _82.QueryGetShortBookResponse;
                toJSON(message: _82.QueryGetShortBookResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetShortBookResponse>): _82.QueryGetShortBookResponse;
                fromAmino(object: _82.QueryGetShortBookResponseAmino): _82.QueryGetShortBookResponse;
                toAmino(message: _82.QueryGetShortBookResponse): _82.QueryGetShortBookResponseAmino;
                fromAminoMsg(object: _82.QueryGetShortBookResponseAminoMsg): _82.QueryGetShortBookResponse;
                fromProtoMsg(message: _82.QueryGetShortBookResponseProtoMsg): _82.QueryGetShortBookResponse;
                toProto(message: _82.QueryGetShortBookResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetShortBookResponse): _82.QueryGetShortBookResponseProtoMsg;
            };
            QueryAllShortBookRequest: {
                typeUrl: string;
                encode(message: _82.QueryAllShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryAllShortBookRequest;
                fromJSON(object: any): _82.QueryAllShortBookRequest;
                toJSON(message: _82.QueryAllShortBookRequest): unknown;
                fromPartial(object: Partial<_82.QueryAllShortBookRequest>): _82.QueryAllShortBookRequest;
                fromAmino(object: _82.QueryAllShortBookRequestAmino): _82.QueryAllShortBookRequest;
                toAmino(message: _82.QueryAllShortBookRequest): _82.QueryAllShortBookRequestAmino;
                fromAminoMsg(object: _82.QueryAllShortBookRequestAminoMsg): _82.QueryAllShortBookRequest;
                fromProtoMsg(message: _82.QueryAllShortBookRequestProtoMsg): _82.QueryAllShortBookRequest;
                toProto(message: _82.QueryAllShortBookRequest): Uint8Array;
                toProtoMsg(message: _82.QueryAllShortBookRequest): _82.QueryAllShortBookRequestProtoMsg;
            };
            QueryAllShortBookResponse: {
                typeUrl: string;
                encode(message: _82.QueryAllShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryAllShortBookResponse;
                fromJSON(object: any): _82.QueryAllShortBookResponse;
                toJSON(message: _82.QueryAllShortBookResponse): unknown;
                fromPartial(object: Partial<_82.QueryAllShortBookResponse>): _82.QueryAllShortBookResponse;
                fromAmino(object: _82.QueryAllShortBookResponseAmino): _82.QueryAllShortBookResponse;
                toAmino(message: _82.QueryAllShortBookResponse): _82.QueryAllShortBookResponseAmino;
                fromAminoMsg(object: _82.QueryAllShortBookResponseAminoMsg): _82.QueryAllShortBookResponse;
                fromProtoMsg(message: _82.QueryAllShortBookResponseProtoMsg): _82.QueryAllShortBookResponse;
                toProto(message: _82.QueryAllShortBookResponse): Uint8Array;
                toProtoMsg(message: _82.QueryAllShortBookResponse): _82.QueryAllShortBookResponseProtoMsg;
            };
            QueryGetPricesRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetPricesRequest;
                fromJSON(object: any): _82.QueryGetPricesRequest;
                toJSON(message: _82.QueryGetPricesRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetPricesRequest>): _82.QueryGetPricesRequest;
                fromAmino(object: _82.QueryGetPricesRequestAmino): _82.QueryGetPricesRequest;
                toAmino(message: _82.QueryGetPricesRequest): _82.QueryGetPricesRequestAmino;
                fromAminoMsg(object: _82.QueryGetPricesRequestAminoMsg): _82.QueryGetPricesRequest;
                fromProtoMsg(message: _82.QueryGetPricesRequestProtoMsg): _82.QueryGetPricesRequest;
                toProto(message: _82.QueryGetPricesRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetPricesRequest): _82.QueryGetPricesRequestProtoMsg;
            };
            QueryGetPricesResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetPricesResponse;
                fromJSON(object: any): _82.QueryGetPricesResponse;
                toJSON(message: _82.QueryGetPricesResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetPricesResponse>): _82.QueryGetPricesResponse;
                fromAmino(object: _82.QueryGetPricesResponseAmino): _82.QueryGetPricesResponse;
                toAmino(message: _82.QueryGetPricesResponse): _82.QueryGetPricesResponseAmino;
                fromAminoMsg(object: _82.QueryGetPricesResponseAminoMsg): _82.QueryGetPricesResponse;
                fromProtoMsg(message: _82.QueryGetPricesResponseProtoMsg): _82.QueryGetPricesResponse;
                toProto(message: _82.QueryGetPricesResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetPricesResponse): _82.QueryGetPricesResponseProtoMsg;
            };
            QueryGetPriceRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetPriceRequest;
                fromJSON(object: any): _82.QueryGetPriceRequest;
                toJSON(message: _82.QueryGetPriceRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetPriceRequest>): _82.QueryGetPriceRequest;
                fromAmino(object: _82.QueryGetPriceRequestAmino): _82.QueryGetPriceRequest;
                toAmino(message: _82.QueryGetPriceRequest): _82.QueryGetPriceRequestAmino;
                fromAminoMsg(object: _82.QueryGetPriceRequestAminoMsg): _82.QueryGetPriceRequest;
                fromProtoMsg(message: _82.QueryGetPriceRequestProtoMsg): _82.QueryGetPriceRequest;
                toProto(message: _82.QueryGetPriceRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetPriceRequest): _82.QueryGetPriceRequestProtoMsg;
            };
            QueryGetPriceResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetPriceResponse;
                fromJSON(object: any): _82.QueryGetPriceResponse;
                toJSON(message: _82.QueryGetPriceResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetPriceResponse>): _82.QueryGetPriceResponse;
                fromAmino(object: _82.QueryGetPriceResponseAmino): _82.QueryGetPriceResponse;
                toAmino(message: _82.QueryGetPriceResponse): _82.QueryGetPriceResponseAmino;
                fromAminoMsg(object: _82.QueryGetPriceResponseAminoMsg): _82.QueryGetPriceResponse;
                fromProtoMsg(message: _82.QueryGetPriceResponseProtoMsg): _82.QueryGetPriceResponse;
                toProto(message: _82.QueryGetPriceResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetPriceResponse): _82.QueryGetPriceResponseProtoMsg;
            };
            QueryGetLatestPriceRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetLatestPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetLatestPriceRequest;
                fromJSON(object: any): _82.QueryGetLatestPriceRequest;
                toJSON(message: _82.QueryGetLatestPriceRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetLatestPriceRequest>): _82.QueryGetLatestPriceRequest;
                fromAmino(object: _82.QueryGetLatestPriceRequestAmino): _82.QueryGetLatestPriceRequest;
                toAmino(message: _82.QueryGetLatestPriceRequest): _82.QueryGetLatestPriceRequestAmino;
                fromAminoMsg(object: _82.QueryGetLatestPriceRequestAminoMsg): _82.QueryGetLatestPriceRequest;
                fromProtoMsg(message: _82.QueryGetLatestPriceRequestProtoMsg): _82.QueryGetLatestPriceRequest;
                toProto(message: _82.QueryGetLatestPriceRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetLatestPriceRequest): _82.QueryGetLatestPriceRequestProtoMsg;
            };
            QueryGetLatestPriceResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetLatestPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetLatestPriceResponse;
                fromJSON(object: any): _82.QueryGetLatestPriceResponse;
                toJSON(message: _82.QueryGetLatestPriceResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetLatestPriceResponse>): _82.QueryGetLatestPriceResponse;
                fromAmino(object: _82.QueryGetLatestPriceResponseAmino): _82.QueryGetLatestPriceResponse;
                toAmino(message: _82.QueryGetLatestPriceResponse): _82.QueryGetLatestPriceResponseAmino;
                fromAminoMsg(object: _82.QueryGetLatestPriceResponseAminoMsg): _82.QueryGetLatestPriceResponse;
                fromProtoMsg(message: _82.QueryGetLatestPriceResponseProtoMsg): _82.QueryGetLatestPriceResponse;
                toProto(message: _82.QueryGetLatestPriceResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetLatestPriceResponse): _82.QueryGetLatestPriceResponseProtoMsg;
            };
            QueryGetTwapsRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetTwapsRequest;
                fromJSON(object: any): _82.QueryGetTwapsRequest;
                toJSON(message: _82.QueryGetTwapsRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetTwapsRequest>): _82.QueryGetTwapsRequest;
                fromAmino(object: _82.QueryGetTwapsRequestAmino): _82.QueryGetTwapsRequest;
                toAmino(message: _82.QueryGetTwapsRequest): _82.QueryGetTwapsRequestAmino;
                fromAminoMsg(object: _82.QueryGetTwapsRequestAminoMsg): _82.QueryGetTwapsRequest;
                fromProtoMsg(message: _82.QueryGetTwapsRequestProtoMsg): _82.QueryGetTwapsRequest;
                toProto(message: _82.QueryGetTwapsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetTwapsRequest): _82.QueryGetTwapsRequestProtoMsg;
            };
            QueryGetTwapsResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetTwapsResponse;
                fromJSON(object: any): _82.QueryGetTwapsResponse;
                toJSON(message: _82.QueryGetTwapsResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetTwapsResponse>): _82.QueryGetTwapsResponse;
                fromAmino(object: _82.QueryGetTwapsResponseAmino): _82.QueryGetTwapsResponse;
                toAmino(message: _82.QueryGetTwapsResponse): _82.QueryGetTwapsResponseAmino;
                fromAminoMsg(object: _82.QueryGetTwapsResponseAminoMsg): _82.QueryGetTwapsResponse;
                fromProtoMsg(message: _82.QueryGetTwapsResponseProtoMsg): _82.QueryGetTwapsResponse;
                toProto(message: _82.QueryGetTwapsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetTwapsResponse): _82.QueryGetTwapsResponseProtoMsg;
            };
            QueryAssetListRequest: {
                typeUrl: string;
                encode(_: _82.QueryAssetListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryAssetListRequest;
                fromJSON(_: any): _82.QueryAssetListRequest;
                toJSON(_: _82.QueryAssetListRequest): unknown;
                fromPartial(_: Partial<_82.QueryAssetListRequest>): _82.QueryAssetListRequest;
                fromAmino(_: _82.QueryAssetListRequestAmino): _82.QueryAssetListRequest;
                toAmino(_: _82.QueryAssetListRequest): _82.QueryAssetListRequestAmino;
                fromAminoMsg(object: _82.QueryAssetListRequestAminoMsg): _82.QueryAssetListRequest;
                fromProtoMsg(message: _82.QueryAssetListRequestProtoMsg): _82.QueryAssetListRequest;
                toProto(message: _82.QueryAssetListRequest): Uint8Array;
                toProtoMsg(message: _82.QueryAssetListRequest): _82.QueryAssetListRequestProtoMsg;
            };
            QueryAssetListResponse: {
                typeUrl: string;
                encode(message: _82.QueryAssetListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryAssetListResponse;
                fromJSON(object: any): _82.QueryAssetListResponse;
                toJSON(message: _82.QueryAssetListResponse): unknown;
                fromPartial(object: Partial<_82.QueryAssetListResponse>): _82.QueryAssetListResponse;
                fromAmino(object: _82.QueryAssetListResponseAmino): _82.QueryAssetListResponse;
                toAmino(message: _82.QueryAssetListResponse): _82.QueryAssetListResponseAmino;
                fromAminoMsg(object: _82.QueryAssetListResponseAminoMsg): _82.QueryAssetListResponse;
                fromProtoMsg(message: _82.QueryAssetListResponseProtoMsg): _82.QueryAssetListResponse;
                toProto(message: _82.QueryAssetListResponse): Uint8Array;
                toProtoMsg(message: _82.QueryAssetListResponse): _82.QueryAssetListResponseProtoMsg;
            };
            QueryAssetMetadataRequest: {
                typeUrl: string;
                encode(message: _82.QueryAssetMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryAssetMetadataRequest;
                fromJSON(object: any): _82.QueryAssetMetadataRequest;
                toJSON(message: _82.QueryAssetMetadataRequest): unknown;
                fromPartial(object: Partial<_82.QueryAssetMetadataRequest>): _82.QueryAssetMetadataRequest;
                fromAmino(object: _82.QueryAssetMetadataRequestAmino): _82.QueryAssetMetadataRequest;
                toAmino(message: _82.QueryAssetMetadataRequest): _82.QueryAssetMetadataRequestAmino;
                fromAminoMsg(object: _82.QueryAssetMetadataRequestAminoMsg): _82.QueryAssetMetadataRequest;
                fromProtoMsg(message: _82.QueryAssetMetadataRequestProtoMsg): _82.QueryAssetMetadataRequest;
                toProto(message: _82.QueryAssetMetadataRequest): Uint8Array;
                toProtoMsg(message: _82.QueryAssetMetadataRequest): _82.QueryAssetMetadataRequestProtoMsg;
            };
            QueryAssetMetadataResponse: {
                typeUrl: string;
                encode(message: _82.QueryAssetMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryAssetMetadataResponse;
                fromJSON(object: any): _82.QueryAssetMetadataResponse;
                toJSON(message: _82.QueryAssetMetadataResponse): unknown;
                fromPartial(object: Partial<_82.QueryAssetMetadataResponse>): _82.QueryAssetMetadataResponse;
                fromAmino(object: _82.QueryAssetMetadataResponseAmino): _82.QueryAssetMetadataResponse;
                toAmino(message: _82.QueryAssetMetadataResponse): _82.QueryAssetMetadataResponseAmino;
                fromAminoMsg(object: _82.QueryAssetMetadataResponseAminoMsg): _82.QueryAssetMetadataResponse;
                fromProtoMsg(message: _82.QueryAssetMetadataResponseProtoMsg): _82.QueryAssetMetadataResponse;
                toProto(message: _82.QueryAssetMetadataResponse): Uint8Array;
                toProtoMsg(message: _82.QueryAssetMetadataResponse): _82.QueryAssetMetadataResponseProtoMsg;
            };
            QueryRegisteredPairsRequest: {
                typeUrl: string;
                encode(message: _82.QueryRegisteredPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryRegisteredPairsRequest;
                fromJSON(object: any): _82.QueryRegisteredPairsRequest;
                toJSON(message: _82.QueryRegisteredPairsRequest): unknown;
                fromPartial(object: Partial<_82.QueryRegisteredPairsRequest>): _82.QueryRegisteredPairsRequest;
                fromAmino(object: _82.QueryRegisteredPairsRequestAmino): _82.QueryRegisteredPairsRequest;
                toAmino(message: _82.QueryRegisteredPairsRequest): _82.QueryRegisteredPairsRequestAmino;
                fromAminoMsg(object: _82.QueryRegisteredPairsRequestAminoMsg): _82.QueryRegisteredPairsRequest;
                fromProtoMsg(message: _82.QueryRegisteredPairsRequestProtoMsg): _82.QueryRegisteredPairsRequest;
                toProto(message: _82.QueryRegisteredPairsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryRegisteredPairsRequest): _82.QueryRegisteredPairsRequestProtoMsg;
            };
            QueryRegisteredPairsResponse: {
                typeUrl: string;
                encode(message: _82.QueryRegisteredPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryRegisteredPairsResponse;
                fromJSON(object: any): _82.QueryRegisteredPairsResponse;
                toJSON(message: _82.QueryRegisteredPairsResponse): unknown;
                fromPartial(object: Partial<_82.QueryRegisteredPairsResponse>): _82.QueryRegisteredPairsResponse;
                fromAmino(object: _82.QueryRegisteredPairsResponseAmino): _82.QueryRegisteredPairsResponse;
                toAmino(message: _82.QueryRegisteredPairsResponse): _82.QueryRegisteredPairsResponseAmino;
                fromAminoMsg(object: _82.QueryRegisteredPairsResponseAminoMsg): _82.QueryRegisteredPairsResponse;
                fromProtoMsg(message: _82.QueryRegisteredPairsResponseProtoMsg): _82.QueryRegisteredPairsResponse;
                toProto(message: _82.QueryRegisteredPairsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryRegisteredPairsResponse): _82.QueryRegisteredPairsResponseProtoMsg;
            };
            QueryRegisteredContractRequest: {
                typeUrl: string;
                encode(message: _82.QueryRegisteredContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryRegisteredContractRequest;
                fromJSON(object: any): _82.QueryRegisteredContractRequest;
                toJSON(message: _82.QueryRegisteredContractRequest): unknown;
                fromPartial(object: Partial<_82.QueryRegisteredContractRequest>): _82.QueryRegisteredContractRequest;
                fromAmino(object: _82.QueryRegisteredContractRequestAmino): _82.QueryRegisteredContractRequest;
                toAmino(message: _82.QueryRegisteredContractRequest): _82.QueryRegisteredContractRequestAmino;
                fromAminoMsg(object: _82.QueryRegisteredContractRequestAminoMsg): _82.QueryRegisteredContractRequest;
                fromProtoMsg(message: _82.QueryRegisteredContractRequestProtoMsg): _82.QueryRegisteredContractRequest;
                toProto(message: _82.QueryRegisteredContractRequest): Uint8Array;
                toProtoMsg(message: _82.QueryRegisteredContractRequest): _82.QueryRegisteredContractRequestProtoMsg;
            };
            QueryRegisteredContractResponse: {
                typeUrl: string;
                encode(message: _82.QueryRegisteredContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryRegisteredContractResponse;
                fromJSON(object: any): _82.QueryRegisteredContractResponse;
                toJSON(message: _82.QueryRegisteredContractResponse): unknown;
                fromPartial(object: Partial<_82.QueryRegisteredContractResponse>): _82.QueryRegisteredContractResponse;
                fromAmino(object: _82.QueryRegisteredContractResponseAmino): _82.QueryRegisteredContractResponse;
                toAmino(message: _82.QueryRegisteredContractResponse): _82.QueryRegisteredContractResponseAmino;
                fromAminoMsg(object: _82.QueryRegisteredContractResponseAminoMsg): _82.QueryRegisteredContractResponse;
                fromProtoMsg(message: _82.QueryRegisteredContractResponseProtoMsg): _82.QueryRegisteredContractResponse;
                toProto(message: _82.QueryRegisteredContractResponse): Uint8Array;
                toProtoMsg(message: _82.QueryRegisteredContractResponse): _82.QueryRegisteredContractResponseProtoMsg;
            };
            QueryGetOrdersRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetOrdersRequest;
                fromJSON(object: any): _82.QueryGetOrdersRequest;
                toJSON(message: _82.QueryGetOrdersRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetOrdersRequest>): _82.QueryGetOrdersRequest;
                fromAmino(object: _82.QueryGetOrdersRequestAmino): _82.QueryGetOrdersRequest;
                toAmino(message: _82.QueryGetOrdersRequest): _82.QueryGetOrdersRequestAmino;
                fromAminoMsg(object: _82.QueryGetOrdersRequestAminoMsg): _82.QueryGetOrdersRequest;
                fromProtoMsg(message: _82.QueryGetOrdersRequestProtoMsg): _82.QueryGetOrdersRequest;
                toProto(message: _82.QueryGetOrdersRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetOrdersRequest): _82.QueryGetOrdersRequestProtoMsg;
            };
            QueryGetOrdersResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetOrdersResponse;
                fromJSON(object: any): _82.QueryGetOrdersResponse;
                toJSON(message: _82.QueryGetOrdersResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetOrdersResponse>): _82.QueryGetOrdersResponse;
                fromAmino(object: _82.QueryGetOrdersResponseAmino): _82.QueryGetOrdersResponse;
                toAmino(message: _82.QueryGetOrdersResponse): _82.QueryGetOrdersResponseAmino;
                fromAminoMsg(object: _82.QueryGetOrdersResponseAminoMsg): _82.QueryGetOrdersResponse;
                fromProtoMsg(message: _82.QueryGetOrdersResponseProtoMsg): _82.QueryGetOrdersResponse;
                toProto(message: _82.QueryGetOrdersResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetOrdersResponse): _82.QueryGetOrdersResponseProtoMsg;
            };
            QueryGetOrderByIDRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetOrderByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetOrderByIDRequest;
                fromJSON(object: any): _82.QueryGetOrderByIDRequest;
                toJSON(message: _82.QueryGetOrderByIDRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetOrderByIDRequest>): _82.QueryGetOrderByIDRequest;
                fromAmino(object: _82.QueryGetOrderByIDRequestAmino): _82.QueryGetOrderByIDRequest;
                toAmino(message: _82.QueryGetOrderByIDRequest): _82.QueryGetOrderByIDRequestAmino;
                fromAminoMsg(object: _82.QueryGetOrderByIDRequestAminoMsg): _82.QueryGetOrderByIDRequest;
                fromProtoMsg(message: _82.QueryGetOrderByIDRequestProtoMsg): _82.QueryGetOrderByIDRequest;
                toProto(message: _82.QueryGetOrderByIDRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetOrderByIDRequest): _82.QueryGetOrderByIDRequestProtoMsg;
            };
            QueryGetOrderByIDResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetOrderByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetOrderByIDResponse;
                fromJSON(object: any): _82.QueryGetOrderByIDResponse;
                toJSON(message: _82.QueryGetOrderByIDResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetOrderByIDResponse>): _82.QueryGetOrderByIDResponse;
                fromAmino(object: _82.QueryGetOrderByIDResponseAmino): _82.QueryGetOrderByIDResponse;
                toAmino(message: _82.QueryGetOrderByIDResponse): _82.QueryGetOrderByIDResponseAmino;
                fromAminoMsg(object: _82.QueryGetOrderByIDResponseAminoMsg): _82.QueryGetOrderByIDResponse;
                fromProtoMsg(message: _82.QueryGetOrderByIDResponseProtoMsg): _82.QueryGetOrderByIDResponse;
                toProto(message: _82.QueryGetOrderByIDResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetOrderByIDResponse): _82.QueryGetOrderByIDResponseProtoMsg;
            };
            QueryGetHistoricalPricesRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetHistoricalPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetHistoricalPricesRequest;
                fromJSON(object: any): _82.QueryGetHistoricalPricesRequest;
                toJSON(message: _82.QueryGetHistoricalPricesRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetHistoricalPricesRequest>): _82.QueryGetHistoricalPricesRequest;
                fromAmino(object: _82.QueryGetHistoricalPricesRequestAmino): _82.QueryGetHistoricalPricesRequest;
                toAmino(message: _82.QueryGetHistoricalPricesRequest): _82.QueryGetHistoricalPricesRequestAmino;
                fromAminoMsg(object: _82.QueryGetHistoricalPricesRequestAminoMsg): _82.QueryGetHistoricalPricesRequest;
                fromProtoMsg(message: _82.QueryGetHistoricalPricesRequestProtoMsg): _82.QueryGetHistoricalPricesRequest;
                toProto(message: _82.QueryGetHistoricalPricesRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetHistoricalPricesRequest): _82.QueryGetHistoricalPricesRequestProtoMsg;
            };
            QueryGetHistoricalPricesResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetHistoricalPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetHistoricalPricesResponse;
                fromJSON(object: any): _82.QueryGetHistoricalPricesResponse;
                toJSON(message: _82.QueryGetHistoricalPricesResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetHistoricalPricesResponse>): _82.QueryGetHistoricalPricesResponse;
                fromAmino(object: _82.QueryGetHistoricalPricesResponseAmino): _82.QueryGetHistoricalPricesResponse;
                toAmino(message: _82.QueryGetHistoricalPricesResponse): _82.QueryGetHistoricalPricesResponseAmino;
                fromAminoMsg(object: _82.QueryGetHistoricalPricesResponseAminoMsg): _82.QueryGetHistoricalPricesResponse;
                fromProtoMsg(message: _82.QueryGetHistoricalPricesResponseProtoMsg): _82.QueryGetHistoricalPricesResponse;
                toProto(message: _82.QueryGetHistoricalPricesResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetHistoricalPricesResponse): _82.QueryGetHistoricalPricesResponseProtoMsg;
            };
            QueryGetMarketSummaryRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetMarketSummaryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetMarketSummaryRequest;
                fromJSON(object: any): _82.QueryGetMarketSummaryRequest;
                toJSON(message: _82.QueryGetMarketSummaryRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetMarketSummaryRequest>): _82.QueryGetMarketSummaryRequest;
                fromAmino(object: _82.QueryGetMarketSummaryRequestAmino): _82.QueryGetMarketSummaryRequest;
                toAmino(message: _82.QueryGetMarketSummaryRequest): _82.QueryGetMarketSummaryRequestAmino;
                fromAminoMsg(object: _82.QueryGetMarketSummaryRequestAminoMsg): _82.QueryGetMarketSummaryRequest;
                fromProtoMsg(message: _82.QueryGetMarketSummaryRequestProtoMsg): _82.QueryGetMarketSummaryRequest;
                toProto(message: _82.QueryGetMarketSummaryRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetMarketSummaryRequest): _82.QueryGetMarketSummaryRequestProtoMsg;
            };
            QueryGetMarketSummaryResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetMarketSummaryResponse;
                fromJSON(object: any): _82.QueryGetMarketSummaryResponse;
                toJSON(message: _82.QueryGetMarketSummaryResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetMarketSummaryResponse>): _82.QueryGetMarketSummaryResponse;
                fromAmino(object: _82.QueryGetMarketSummaryResponseAmino): _82.QueryGetMarketSummaryResponse;
                toAmino(message: _82.QueryGetMarketSummaryResponse): _82.QueryGetMarketSummaryResponseAmino;
                fromAminoMsg(object: _82.QueryGetMarketSummaryResponseAminoMsg): _82.QueryGetMarketSummaryResponse;
                fromProtoMsg(message: _82.QueryGetMarketSummaryResponseProtoMsg): _82.QueryGetMarketSummaryResponse;
                toProto(message: _82.QueryGetMarketSummaryResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetMarketSummaryResponse): _82.QueryGetMarketSummaryResponseProtoMsg;
            };
            QueryOrderSimulationRequest: {
                typeUrl: string;
                encode(message: _82.QueryOrderSimulationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryOrderSimulationRequest;
                fromJSON(object: any): _82.QueryOrderSimulationRequest;
                toJSON(message: _82.QueryOrderSimulationRequest): unknown;
                fromPartial(object: Partial<_82.QueryOrderSimulationRequest>): _82.QueryOrderSimulationRequest;
                fromAmino(object: _82.QueryOrderSimulationRequestAmino): _82.QueryOrderSimulationRequest;
                toAmino(message: _82.QueryOrderSimulationRequest): _82.QueryOrderSimulationRequestAmino;
                fromAminoMsg(object: _82.QueryOrderSimulationRequestAminoMsg): _82.QueryOrderSimulationRequest;
                fromProtoMsg(message: _82.QueryOrderSimulationRequestProtoMsg): _82.QueryOrderSimulationRequest;
                toProto(message: _82.QueryOrderSimulationRequest): Uint8Array;
                toProtoMsg(message: _82.QueryOrderSimulationRequest): _82.QueryOrderSimulationRequestProtoMsg;
            };
            QueryOrderSimulationResponse: {
                typeUrl: string;
                encode(message: _82.QueryOrderSimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryOrderSimulationResponse;
                fromJSON(object: any): _82.QueryOrderSimulationResponse;
                toJSON(message: _82.QueryOrderSimulationResponse): unknown;
                fromPartial(object: Partial<_82.QueryOrderSimulationResponse>): _82.QueryOrderSimulationResponse;
                fromAmino(object: _82.QueryOrderSimulationResponseAmino): _82.QueryOrderSimulationResponse;
                toAmino(message: _82.QueryOrderSimulationResponse): _82.QueryOrderSimulationResponseAmino;
                fromAminoMsg(object: _82.QueryOrderSimulationResponseAminoMsg): _82.QueryOrderSimulationResponse;
                fromProtoMsg(message: _82.QueryOrderSimulationResponseProtoMsg): _82.QueryOrderSimulationResponse;
                toProto(message: _82.QueryOrderSimulationResponse): Uint8Array;
                toProtoMsg(message: _82.QueryOrderSimulationResponse): _82.QueryOrderSimulationResponseProtoMsg;
            };
            QueryGetMatchResultRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetMatchResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetMatchResultRequest;
                fromJSON(object: any): _82.QueryGetMatchResultRequest;
                toJSON(message: _82.QueryGetMatchResultRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetMatchResultRequest>): _82.QueryGetMatchResultRequest;
                fromAmino(object: _82.QueryGetMatchResultRequestAmino): _82.QueryGetMatchResultRequest;
                toAmino(message: _82.QueryGetMatchResultRequest): _82.QueryGetMatchResultRequestAmino;
                fromAminoMsg(object: _82.QueryGetMatchResultRequestAminoMsg): _82.QueryGetMatchResultRequest;
                fromProtoMsg(message: _82.QueryGetMatchResultRequestProtoMsg): _82.QueryGetMatchResultRequest;
                toProto(message: _82.QueryGetMatchResultRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetMatchResultRequest): _82.QueryGetMatchResultRequestProtoMsg;
            };
            QueryGetMatchResultResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetMatchResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetMatchResultResponse;
                fromJSON(object: any): _82.QueryGetMatchResultResponse;
                toJSON(message: _82.QueryGetMatchResultResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetMatchResultResponse>): _82.QueryGetMatchResultResponse;
                fromAmino(object: _82.QueryGetMatchResultResponseAmino): _82.QueryGetMatchResultResponse;
                toAmino(message: _82.QueryGetMatchResultResponse): _82.QueryGetMatchResultResponseAmino;
                fromAminoMsg(object: _82.QueryGetMatchResultResponseAminoMsg): _82.QueryGetMatchResultResponse;
                fromProtoMsg(message: _82.QueryGetMatchResultResponseProtoMsg): _82.QueryGetMatchResultResponse;
                toProto(message: _82.QueryGetMatchResultResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetMatchResultResponse): _82.QueryGetMatchResultResponseProtoMsg;
            };
            QueryGetOrderCountRequest: {
                typeUrl: string;
                encode(message: _82.QueryGetOrderCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetOrderCountRequest;
                fromJSON(object: any): _82.QueryGetOrderCountRequest;
                toJSON(message: _82.QueryGetOrderCountRequest): unknown;
                fromPartial(object: Partial<_82.QueryGetOrderCountRequest>): _82.QueryGetOrderCountRequest;
                fromAmino(object: _82.QueryGetOrderCountRequestAmino): _82.QueryGetOrderCountRequest;
                toAmino(message: _82.QueryGetOrderCountRequest): _82.QueryGetOrderCountRequestAmino;
                fromAminoMsg(object: _82.QueryGetOrderCountRequestAminoMsg): _82.QueryGetOrderCountRequest;
                fromProtoMsg(message: _82.QueryGetOrderCountRequestProtoMsg): _82.QueryGetOrderCountRequest;
                toProto(message: _82.QueryGetOrderCountRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGetOrderCountRequest): _82.QueryGetOrderCountRequestProtoMsg;
            };
            QueryGetOrderCountResponse: {
                typeUrl: string;
                encode(message: _82.QueryGetOrderCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryGetOrderCountResponse;
                fromJSON(object: any): _82.QueryGetOrderCountResponse;
                toJSON(message: _82.QueryGetOrderCountResponse): unknown;
                fromPartial(object: Partial<_82.QueryGetOrderCountResponse>): _82.QueryGetOrderCountResponse;
                fromAmino(object: _82.QueryGetOrderCountResponseAmino): _82.QueryGetOrderCountResponse;
                toAmino(message: _82.QueryGetOrderCountResponse): _82.QueryGetOrderCountResponseAmino;
                fromAminoMsg(object: _82.QueryGetOrderCountResponseAminoMsg): _82.QueryGetOrderCountResponse;
                fromProtoMsg(message: _82.QueryGetOrderCountResponseProtoMsg): _82.QueryGetOrderCountResponse;
                toProto(message: _82.QueryGetOrderCountResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGetOrderCountResponse): _82.QueryGetOrderCountResponseProtoMsg;
            };
            Price: {
                typeUrl: string;
                encode(message: _81.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Price;
                fromJSON(object: any): _81.Price;
                toJSON(message: _81.Price): unknown;
                fromPartial(object: Partial<_81.Price>): _81.Price;
                fromAmino(object: _81.PriceAmino): _81.Price;
                toAmino(message: _81.Price): _81.PriceAmino;
                fromAminoMsg(object: _81.PriceAminoMsg): _81.Price;
                fromProtoMsg(message: _81.PriceProtoMsg): _81.Price;
                toProto(message: _81.Price): Uint8Array;
                toProtoMsg(message: _81.Price): _81.PriceProtoMsg;
            };
            PriceCandlestick: {
                typeUrl: string;
                encode(message: _81.PriceCandlestick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PriceCandlestick;
                fromJSON(object: any): _81.PriceCandlestick;
                toJSON(message: _81.PriceCandlestick): unknown;
                fromPartial(object: Partial<_81.PriceCandlestick>): _81.PriceCandlestick;
                fromAmino(object: _81.PriceCandlestickAmino): _81.PriceCandlestick;
                toAmino(message: _81.PriceCandlestick): _81.PriceCandlestickAmino;
                fromAminoMsg(object: _81.PriceCandlestickAminoMsg): _81.PriceCandlestick;
                fromProtoMsg(message: _81.PriceCandlestickProtoMsg): _81.PriceCandlestick;
                toProto(message: _81.PriceCandlestick): Uint8Array;
                toProtoMsg(message: _81.PriceCandlestick): _81.PriceCandlestickProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Params;
                fromJSON(object: any): _80.Params;
                toJSON(message: _80.Params): unknown;
                fromPartial(object: Partial<_80.Params>): _80.Params;
                fromAmino(object: _80.ParamsAmino): _80.Params;
                toAmino(message: _80.Params): _80.ParamsAmino;
                fromAminoMsg(object: _80.ParamsAminoMsg): _80.Params;
                fromProtoMsg(message: _80.ParamsProtoMsg): _80.Params;
                toProto(message: _80.Params): Uint8Array;
                toProtoMsg(message: _80.Params): _80.ParamsProtoMsg;
            };
            Pair: {
                typeUrl: string;
                encode(message: _79.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Pair;
                fromJSON(object: any): _79.Pair;
                toJSON(message: _79.Pair): unknown;
                fromPartial(object: Partial<_79.Pair>): _79.Pair;
                fromAmino(object: _79.PairAmino): _79.Pair;
                toAmino(message: _79.Pair): _79.PairAmino;
                fromAminoMsg(object: _79.PairAminoMsg): _79.Pair;
                fromProtoMsg(message: _79.PairProtoMsg): _79.Pair;
                toProto(message: _79.Pair): Uint8Array;
                toProtoMsg(message: _79.Pair): _79.PairProtoMsg;
            };
            BatchContractPair: {
                typeUrl: string;
                encode(message: _79.BatchContractPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.BatchContractPair;
                fromJSON(object: any): _79.BatchContractPair;
                toJSON(message: _79.BatchContractPair): unknown;
                fromPartial(object: Partial<_79.BatchContractPair>): _79.BatchContractPair;
                fromAmino(object: _79.BatchContractPairAmino): _79.BatchContractPair;
                toAmino(message: _79.BatchContractPair): _79.BatchContractPairAmino;
                fromAminoMsg(object: _79.BatchContractPairAminoMsg): _79.BatchContractPair;
                fromProtoMsg(message: _79.BatchContractPairProtoMsg): _79.BatchContractPair;
                toProto(message: _79.BatchContractPair): Uint8Array;
                toProtoMsg(message: _79.BatchContractPair): _79.BatchContractPairProtoMsg;
            };
            Order: {
                typeUrl: string;
                encode(message: _78.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Order;
                fromJSON(object: any): _78.Order;
                toJSON(message: _78.Order): unknown;
                fromPartial(object: Partial<_78.Order>): _78.Order;
                fromAmino(object: _78.OrderAmino): _78.Order;
                toAmino(message: _78.Order): _78.OrderAmino;
                fromAminoMsg(object: _78.OrderAminoMsg): _78.Order;
                fromProtoMsg(message: _78.OrderProtoMsg): _78.Order;
                toProto(message: _78.Order): Uint8Array;
                toProtoMsg(message: _78.Order): _78.OrderProtoMsg;
            };
            Cancellation: {
                typeUrl: string;
                encode(message: _78.Cancellation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Cancellation;
                fromJSON(object: any): _78.Cancellation;
                toJSON(message: _78.Cancellation): unknown;
                fromPartial(object: Partial<_78.Cancellation>): _78.Cancellation;
                fromAmino(object: _78.CancellationAmino): _78.Cancellation;
                toAmino(message: _78.Cancellation): _78.CancellationAmino;
                fromAminoMsg(object: _78.CancellationAminoMsg): _78.Cancellation;
                fromProtoMsg(message: _78.CancellationProtoMsg): _78.Cancellation;
                toProto(message: _78.Cancellation): Uint8Array;
                toProtoMsg(message: _78.Cancellation): _78.CancellationProtoMsg;
            };
            ActiveOrders: {
                typeUrl: string;
                encode(message: _78.ActiveOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ActiveOrders;
                fromJSON(object: any): _78.ActiveOrders;
                toJSON(message: _78.ActiveOrders): unknown;
                fromPartial(object: Partial<_78.ActiveOrders>): _78.ActiveOrders;
                fromAmino(object: _78.ActiveOrdersAmino): _78.ActiveOrders;
                toAmino(message: _78.ActiveOrders): _78.ActiveOrdersAmino;
                fromAminoMsg(object: _78.ActiveOrdersAminoMsg): _78.ActiveOrders;
                fromProtoMsg(message: _78.ActiveOrdersProtoMsg): _78.ActiveOrders;
                toProto(message: _78.ActiveOrders): Uint8Array;
                toProtoMsg(message: _78.ActiveOrders): _78.ActiveOrdersProtoMsg;
            };
            OrderEntry: {
                typeUrl: string;
                encode(message: _77.OrderEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.OrderEntry;
                fromJSON(object: any): _77.OrderEntry;
                toJSON(message: _77.OrderEntry): unknown;
                fromPartial(object: Partial<_77.OrderEntry>): _77.OrderEntry;
                fromAmino(object: _77.OrderEntryAmino): _77.OrderEntry;
                toAmino(message: _77.OrderEntry): _77.OrderEntryAmino;
                fromAminoMsg(object: _77.OrderEntryAminoMsg): _77.OrderEntry;
                fromProtoMsg(message: _77.OrderEntryProtoMsg): _77.OrderEntry;
                toProto(message: _77.OrderEntry): Uint8Array;
                toProtoMsg(message: _77.OrderEntry): _77.OrderEntryProtoMsg;
            };
            Allocation: {
                typeUrl: string;
                encode(message: _77.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Allocation;
                fromJSON(object: any): _77.Allocation;
                toJSON(message: _77.Allocation): unknown;
                fromPartial(object: Partial<_77.Allocation>): _77.Allocation;
                fromAmino(object: _77.AllocationAmino): _77.Allocation;
                toAmino(message: _77.Allocation): _77.AllocationAmino;
                fromAminoMsg(object: _77.AllocationAminoMsg): _77.Allocation;
                fromProtoMsg(message: _77.AllocationProtoMsg): _77.Allocation;
                toProto(message: _77.Allocation): Uint8Array;
                toProtoMsg(message: _77.Allocation): _77.AllocationProtoMsg;
            };
            MatchResult: {
                typeUrl: string;
                encode(message: _76.MatchResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MatchResult;
                fromJSON(object: any): _76.MatchResult;
                toJSON(message: _76.MatchResult): unknown;
                fromPartial(object: Partial<_76.MatchResult>): _76.MatchResult;
                fromAmino(object: _76.MatchResultAmino): _76.MatchResult;
                toAmino(message: _76.MatchResult): _76.MatchResultAmino;
                fromAminoMsg(object: _76.MatchResultAminoMsg): _76.MatchResult;
                fromProtoMsg(message: _76.MatchResultProtoMsg): _76.MatchResult;
                toProto(message: _76.MatchResult): Uint8Array;
                toProtoMsg(message: _76.MatchResult): _76.MatchResultProtoMsg;
            };
            LongBook: {
                typeUrl: string;
                encode(message: _75.LongBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.LongBook;
                fromJSON(object: any): _75.LongBook;
                toJSON(message: _75.LongBook): unknown;
                fromPartial(object: Partial<_75.LongBook>): _75.LongBook;
                fromAmino(object: _75.LongBookAmino): _75.LongBook;
                toAmino(message: _75.LongBook): _75.LongBookAmino;
                fromAminoMsg(object: _75.LongBookAminoMsg): _75.LongBook;
                fromProtoMsg(message: _75.LongBookProtoMsg): _75.LongBook;
                toProto(message: _75.LongBook): Uint8Array;
                toProtoMsg(message: _75.LongBook): _75.LongBookProtoMsg;
            };
            AddAssetMetadataProposal: {
                typeUrl: string;
                encode(message: _74.AddAssetMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.AddAssetMetadataProposal;
                fromJSON(object: any): _74.AddAssetMetadataProposal;
                toJSON(message: _74.AddAssetMetadataProposal): unknown;
                fromPartial(object: Partial<_74.AddAssetMetadataProposal>): _74.AddAssetMetadataProposal;
                fromAmino(object: _74.AddAssetMetadataProposalAmino): _74.AddAssetMetadataProposal;
                toAmino(message: _74.AddAssetMetadataProposal): _74.AddAssetMetadataProposalAmino;
                fromAminoMsg(object: _74.AddAssetMetadataProposalAminoMsg): _74.AddAssetMetadataProposal;
                fromProtoMsg(message: _74.AddAssetMetadataProposalProtoMsg): _74.AddAssetMetadataProposal;
                toProto(message: _74.AddAssetMetadataProposal): Uint8Array;
                toProtoMsg(message: _74.AddAssetMetadataProposal): _74.AddAssetMetadataProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisState;
                fromJSON(object: any): _73.GenesisState;
                toJSON(message: _73.GenesisState): unknown;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                toProto(message: _73.GenesisState): Uint8Array;
                toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
            };
            ContractState: {
                typeUrl: string;
                encode(message: _73.ContractState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ContractState;
                fromJSON(object: any): _73.ContractState;
                toJSON(message: _73.ContractState): unknown;
                fromPartial(object: Partial<_73.ContractState>): _73.ContractState;
                fromAmino(object: _73.ContractStateAmino): _73.ContractState;
                toAmino(message: _73.ContractState): _73.ContractStateAmino;
                fromAminoMsg(object: _73.ContractStateAminoMsg): _73.ContractState;
                fromProtoMsg(message: _73.ContractStateProtoMsg): _73.ContractState;
                toProto(message: _73.ContractState): Uint8Array;
                toProtoMsg(message: _73.ContractState): _73.ContractStateProtoMsg;
            };
            ContractPairPrices: {
                typeUrl: string;
                encode(message: _73.ContractPairPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ContractPairPrices;
                fromJSON(object: any): _73.ContractPairPrices;
                toJSON(message: _73.ContractPairPrices): unknown;
                fromPartial(object: Partial<_73.ContractPairPrices>): _73.ContractPairPrices;
                fromAmino(object: _73.ContractPairPricesAmino): _73.ContractPairPrices;
                toAmino(message: _73.ContractPairPrices): _73.ContractPairPricesAmino;
                fromAminoMsg(object: _73.ContractPairPricesAminoMsg): _73.ContractPairPrices;
                fromProtoMsg(message: _73.ContractPairPricesProtoMsg): _73.ContractPairPrices;
                toProto(message: _73.ContractPairPrices): Uint8Array;
                toProtoMsg(message: _73.ContractPairPrices): _73.ContractPairPricesProtoMsg;
            };
            positionDirectionFromJSON(object: any): _72.PositionDirection;
            positionDirectionToJSON(object: _72.PositionDirection): string;
            positionEffectFromJSON(object: any): _72.PositionEffect;
            positionEffectToJSON(object: _72.PositionEffect): string;
            orderTypeFromJSON(object: any): _72.OrderType;
            orderTypeToJSON(object: _72.OrderType): string;
            unitFromJSON(object: any): _72.Unit;
            unitToJSON(object: _72.Unit): string;
            orderStatusFromJSON(object: any): _72.OrderStatus;
            orderStatusToJSON(object: _72.OrderStatus): string;
            cancellationInitiatorFromJSON(object: any): _72.CancellationInitiator;
            cancellationInitiatorToJSON(object: _72.CancellationInitiator): string;
            PositionDirection: typeof _72.PositionDirection;
            PositionDirectionSDKType: typeof _72.PositionDirection;
            PositionDirectionAmino: typeof _72.PositionDirection;
            PositionEffect: typeof _72.PositionEffect;
            PositionEffectSDKType: typeof _72.PositionEffect;
            PositionEffectAmino: typeof _72.PositionEffect;
            OrderType: typeof _72.OrderType;
            OrderTypeSDKType: typeof _72.OrderType;
            OrderTypeAmino: typeof _72.OrderType;
            Unit: typeof _72.Unit;
            UnitSDKType: typeof _72.Unit;
            UnitAmino: typeof _72.Unit;
            OrderStatus: typeof _72.OrderStatus;
            OrderStatusSDKType: typeof _72.OrderStatus;
            OrderStatusAmino: typeof _72.OrderStatus;
            CancellationInitiator: typeof _72.CancellationInitiator;
            CancellationInitiatorSDKType: typeof _72.CancellationInitiator;
            CancellationInitiatorAmino: typeof _72.CancellationInitiator;
            DepositInfoEntry: {
                typeUrl: string;
                encode(message: _71.DepositInfoEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.DepositInfoEntry;
                fromJSON(object: any): _71.DepositInfoEntry;
                toJSON(message: _71.DepositInfoEntry): unknown;
                fromPartial(object: Partial<_71.DepositInfoEntry>): _71.DepositInfoEntry;
                fromAmino(object: _71.DepositInfoEntryAmino): _71.DepositInfoEntry;
                toAmino(message: _71.DepositInfoEntry): _71.DepositInfoEntryAmino;
                fromAminoMsg(object: _71.DepositInfoEntryAminoMsg): _71.DepositInfoEntry;
                fromProtoMsg(message: _71.DepositInfoEntryProtoMsg): _71.DepositInfoEntry;
                toProto(message: _71.DepositInfoEntry): Uint8Array;
                toProtoMsg(message: _71.DepositInfoEntry): _71.DepositInfoEntryProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _70.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ContractInfo;
                fromJSON(object: any): _70.ContractInfo;
                toJSON(message: _70.ContractInfo): unknown;
                fromPartial(object: Partial<_70.ContractInfo>): _70.ContractInfo;
                fromAmino(object: _70.ContractInfoAmino): _70.ContractInfo;
                toAmino(message: _70.ContractInfo): _70.ContractInfoAmino;
                fromAminoMsg(object: _70.ContractInfoAminoMsg): _70.ContractInfo;
                fromProtoMsg(message: _70.ContractInfoProtoMsg): _70.ContractInfo;
                toProto(message: _70.ContractInfo): Uint8Array;
                toProtoMsg(message: _70.ContractInfo): _70.ContractInfoProtoMsg;
            };
            ContractInfoV2: {
                typeUrl: string;
                encode(message: _70.ContractInfoV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ContractInfoV2;
                fromJSON(object: any): _70.ContractInfoV2;
                toJSON(message: _70.ContractInfoV2): unknown;
                fromPartial(object: Partial<_70.ContractInfoV2>): _70.ContractInfoV2;
                fromAmino(object: _70.ContractInfoV2Amino): _70.ContractInfoV2;
                toAmino(message: _70.ContractInfoV2): _70.ContractInfoV2Amino;
                fromAminoMsg(object: _70.ContractInfoV2AminoMsg): _70.ContractInfoV2;
                fromProtoMsg(message: _70.ContractInfoV2ProtoMsg): _70.ContractInfoV2;
                toProto(message: _70.ContractInfoV2): Uint8Array;
                toProtoMsg(message: _70.ContractInfoV2): _70.ContractInfoV2ProtoMsg;
            };
            ContractDependencyInfo: {
                typeUrl: string;
                encode(message: _70.ContractDependencyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ContractDependencyInfo;
                fromJSON(object: any): _70.ContractDependencyInfo;
                toJSON(message: _70.ContractDependencyInfo): unknown;
                fromPartial(object: Partial<_70.ContractDependencyInfo>): _70.ContractDependencyInfo;
                fromAmino(object: _70.ContractDependencyInfoAmino): _70.ContractDependencyInfo;
                toAmino(message: _70.ContractDependencyInfo): _70.ContractDependencyInfoAmino;
                fromAminoMsg(object: _70.ContractDependencyInfoAminoMsg): _70.ContractDependencyInfo;
                fromProtoMsg(message: _70.ContractDependencyInfoProtoMsg): _70.ContractDependencyInfo;
                toProto(message: _70.ContractDependencyInfo): Uint8Array;
                toProtoMsg(message: _70.ContractDependencyInfo): _70.ContractDependencyInfoProtoMsg;
            };
            LegacyContractInfo: {
                typeUrl: string;
                encode(message: _70.LegacyContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.LegacyContractInfo;
                fromJSON(object: any): _70.LegacyContractInfo;
                toJSON(message: _70.LegacyContractInfo): unknown;
                fromPartial(object: Partial<_70.LegacyContractInfo>): _70.LegacyContractInfo;
                fromAmino(object: _70.LegacyContractInfoAmino): _70.LegacyContractInfo;
                toAmino(message: _70.LegacyContractInfo): _70.LegacyContractInfoAmino;
                fromAminoMsg(object: _70.LegacyContractInfoAminoMsg): _70.LegacyContractInfo;
                fromProtoMsg(message: _70.LegacyContractInfoProtoMsg): _70.LegacyContractInfo;
                toProto(message: _70.LegacyContractInfo): Uint8Array;
                toProtoMsg(message: _70.LegacyContractInfo): _70.LegacyContractInfoProtoMsg;
            };
            AssetIBCInfo: {
                typeUrl: string;
                encode(message: _69.AssetIBCInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.AssetIBCInfo;
                fromJSON(object: any): _69.AssetIBCInfo;
                toJSON(message: _69.AssetIBCInfo): unknown;
                fromPartial(object: Partial<_69.AssetIBCInfo>): _69.AssetIBCInfo;
                fromAmino(object: _69.AssetIBCInfoAmino): _69.AssetIBCInfo;
                toAmino(message: _69.AssetIBCInfo): _69.AssetIBCInfoAmino;
                fromAminoMsg(object: _69.AssetIBCInfoAminoMsg): _69.AssetIBCInfo;
                fromProtoMsg(message: _69.AssetIBCInfoProtoMsg): _69.AssetIBCInfo;
                toProto(message: _69.AssetIBCInfo): Uint8Array;
                toProtoMsg(message: _69.AssetIBCInfo): _69.AssetIBCInfoProtoMsg;
            };
            AssetMetadata: {
                typeUrl: string;
                encode(message: _69.AssetMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.AssetMetadata;
                fromJSON(object: any): _69.AssetMetadata;
                toJSON(message: _69.AssetMetadata): unknown;
                fromPartial(object: Partial<_69.AssetMetadata>): _69.AssetMetadata;
                fromAmino(object: _69.AssetMetadataAmino): _69.AssetMetadata;
                toAmino(message: _69.AssetMetadata): _69.AssetMetadataAmino;
                fromAminoMsg(object: _69.AssetMetadataAminoMsg): _69.AssetMetadata;
                fromProtoMsg(message: _69.AssetMetadataProtoMsg): _69.AssetMetadata;
                toProto(message: _69.AssetMetadata): Uint8Array;
                toProtoMsg(message: _69.AssetMetadata): _69.AssetMetadataProtoMsg;
            };
        };
        const epoch: {
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epoch(request?: _96.QueryEpochRequest): Promise<_96.QueryEpochResponse>;
                params(request?: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _96.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryParamsRequest;
                fromJSON(_: any): _96.QueryParamsRequest;
                toJSON(_: _96.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_96.QueryParamsRequest>): _96.QueryParamsRequest;
                fromAmino(_: _96.QueryParamsRequestAmino): _96.QueryParamsRequest;
                toAmino(_: _96.QueryParamsRequest): _96.QueryParamsRequestAmino;
                fromAminoMsg(object: _96.QueryParamsRequestAminoMsg): _96.QueryParamsRequest;
                fromProtoMsg(message: _96.QueryParamsRequestProtoMsg): _96.QueryParamsRequest;
                toProto(message: _96.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _96.QueryParamsRequest): _96.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _96.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryParamsResponse;
                fromJSON(object: any): _96.QueryParamsResponse;
                toJSON(message: _96.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_96.QueryParamsResponse>): _96.QueryParamsResponse;
                fromAmino(object: _96.QueryParamsResponseAmino): _96.QueryParamsResponse;
                toAmino(message: _96.QueryParamsResponse): _96.QueryParamsResponseAmino;
                fromAminoMsg(object: _96.QueryParamsResponseAminoMsg): _96.QueryParamsResponse;
                fromProtoMsg(message: _96.QueryParamsResponseProtoMsg): _96.QueryParamsResponse;
                toProto(message: _96.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _96.QueryParamsResponse): _96.QueryParamsResponseProtoMsg;
            };
            QueryEpochRequest: {
                typeUrl: string;
                encode(_: _96.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochRequest;
                fromJSON(_: any): _96.QueryEpochRequest;
                toJSON(_: _96.QueryEpochRequest): unknown;
                fromPartial(_: Partial<_96.QueryEpochRequest>): _96.QueryEpochRequest;
                fromAmino(_: _96.QueryEpochRequestAmino): _96.QueryEpochRequest;
                toAmino(_: _96.QueryEpochRequest): _96.QueryEpochRequestAmino;
                fromAminoMsg(object: _96.QueryEpochRequestAminoMsg): _96.QueryEpochRequest;
                fromProtoMsg(message: _96.QueryEpochRequestProtoMsg): _96.QueryEpochRequest;
                toProto(message: _96.QueryEpochRequest): Uint8Array;
                toProtoMsg(message: _96.QueryEpochRequest): _96.QueryEpochRequestProtoMsg;
            };
            QueryEpochResponse: {
                typeUrl: string;
                encode(message: _96.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochResponse;
                fromJSON(object: any): _96.QueryEpochResponse;
                toJSON(message: _96.QueryEpochResponse): unknown;
                fromPartial(object: Partial<_96.QueryEpochResponse>): _96.QueryEpochResponse;
                fromAmino(object: _96.QueryEpochResponseAmino): _96.QueryEpochResponse;
                toAmino(message: _96.QueryEpochResponse): _96.QueryEpochResponseAmino;
                fromAminoMsg(object: _96.QueryEpochResponseAminoMsg): _96.QueryEpochResponse;
                fromProtoMsg(message: _96.QueryEpochResponseProtoMsg): _96.QueryEpochResponse;
                toProto(message: _96.QueryEpochResponse): Uint8Array;
                toProtoMsg(message: _96.QueryEpochResponse): _96.QueryEpochResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _95.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Params;
                fromJSON(_: any): _95.Params;
                toJSON(_: _95.Params): unknown;
                fromPartial(_: Partial<_95.Params>): _95.Params;
                fromAmino(_: _95.ParamsAmino): _95.Params;
                toAmino(_: _95.Params): _95.ParamsAmino;
                fromAminoMsg(object: _95.ParamsAminoMsg): _95.Params;
                fromProtoMsg(message: _95.ParamsProtoMsg): _95.Params;
                toProto(message: _95.Params): Uint8Array;
                toProtoMsg(message: _95.Params): _95.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _94.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState;
                fromJSON(object: any): _94.GenesisState;
                toJSON(message: _94.GenesisState): unknown;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
                fromAmino(object: _94.GenesisStateAmino): _94.GenesisState;
                toAmino(message: _94.GenesisState): _94.GenesisStateAmino;
                fromAminoMsg(object: _94.GenesisStateAminoMsg): _94.GenesisState;
                fromProtoMsg(message: _94.GenesisStateProtoMsg): _94.GenesisState;
                toProto(message: _94.GenesisState): Uint8Array;
                toProtoMsg(message: _94.GenesisState): _94.GenesisStateProtoMsg;
            };
            Epoch: {
                typeUrl: string;
                encode(message: _93.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Epoch;
                fromJSON(object: any): _93.Epoch;
                toJSON(message: _93.Epoch): unknown;
                fromPartial(object: Partial<_93.Epoch>): _93.Epoch;
                fromAmino(object: _93.EpochAmino): _93.Epoch;
                toAmino(message: _93.Epoch): _93.EpochAmino;
                fromAminoMsg(object: _93.EpochAminoMsg): _93.Epoch;
                fromProtoMsg(message: _93.EpochProtoMsg): _93.Epoch;
                toProto(message: _93.Epoch): Uint8Array;
                toProtoMsg(message: _93.Epoch): _93.EpochProtoMsg;
            };
        };
        const mint: {
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                minter(request?: _105.QueryMinterRequest): Promise<_105.QueryMinterResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _105.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsRequest;
                fromJSON(_: any): _105.QueryParamsRequest;
                toJSON(_: _105.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
                fromAmino(_: _105.QueryParamsRequestAmino): _105.QueryParamsRequest;
                toAmino(_: _105.QueryParamsRequest): _105.QueryParamsRequestAmino;
                fromAminoMsg(object: _105.QueryParamsRequestAminoMsg): _105.QueryParamsRequest;
                fromProtoMsg(message: _105.QueryParamsRequestProtoMsg): _105.QueryParamsRequest;
                toProto(message: _105.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _105.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsResponse;
                fromJSON(object: any): _105.QueryParamsResponse;
                toJSON(message: _105.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_105.QueryParamsResponse>): _105.QueryParamsResponse;
                fromAmino(object: _105.QueryParamsResponseAmino): _105.QueryParamsResponse;
                toAmino(message: _105.QueryParamsResponse): _105.QueryParamsResponseAmino;
                fromAminoMsg(object: _105.QueryParamsResponseAminoMsg): _105.QueryParamsResponse;
                fromProtoMsg(message: _105.QueryParamsResponseProtoMsg): _105.QueryParamsResponse;
                toProto(message: _105.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseProtoMsg;
            };
            QueryMinterRequest: {
                typeUrl: string;
                encode(_: _105.QueryMinterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryMinterRequest;
                fromJSON(_: any): _105.QueryMinterRequest;
                toJSON(_: _105.QueryMinterRequest): unknown;
                fromPartial(_: Partial<_105.QueryMinterRequest>): _105.QueryMinterRequest;
                fromAmino(_: _105.QueryMinterRequestAmino): _105.QueryMinterRequest;
                toAmino(_: _105.QueryMinterRequest): _105.QueryMinterRequestAmino;
                fromAminoMsg(object: _105.QueryMinterRequestAminoMsg): _105.QueryMinterRequest;
                fromProtoMsg(message: _105.QueryMinterRequestProtoMsg): _105.QueryMinterRequest;
                toProto(message: _105.QueryMinterRequest): Uint8Array;
                toProtoMsg(message: _105.QueryMinterRequest): _105.QueryMinterRequestProtoMsg;
            };
            QueryMinterResponse: {
                typeUrl: string;
                encode(message: _105.QueryMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryMinterResponse;
                fromJSON(object: any): _105.QueryMinterResponse;
                toJSON(message: _105.QueryMinterResponse): unknown;
                fromPartial(object: Partial<_105.QueryMinterResponse>): _105.QueryMinterResponse;
                fromAmino(object: _105.QueryMinterResponseAmino): _105.QueryMinterResponse;
                toAmino(message: _105.QueryMinterResponse): _105.QueryMinterResponseAmino;
                fromAminoMsg(object: _105.QueryMinterResponseAminoMsg): _105.QueryMinterResponse;
                fromProtoMsg(message: _105.QueryMinterResponseProtoMsg): _105.QueryMinterResponse;
                toProto(message: _105.QueryMinterResponse): Uint8Array;
                toProtoMsg(message: _105.QueryMinterResponse): _105.QueryMinterResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _104.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Minter;
                fromJSON(object: any): _104.Minter;
                toJSON(message: _104.Minter): unknown;
                fromPartial(object: Partial<_104.Minter>): _104.Minter;
                fromAmino(object: _104.MinterAmino): _104.Minter;
                toAmino(message: _104.Minter): _104.MinterAmino;
                fromAminoMsg(object: _104.MinterAminoMsg): _104.Minter;
                fromProtoMsg(message: _104.MinterProtoMsg): _104.Minter;
                toProto(message: _104.Minter): Uint8Array;
                toProtoMsg(message: _104.Minter): _104.MinterProtoMsg;
            };
            ScheduledTokenRelease: {
                typeUrl: string;
                encode(message: _104.ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ScheduledTokenRelease;
                fromJSON(object: any): _104.ScheduledTokenRelease;
                toJSON(message: _104.ScheduledTokenRelease): unknown;
                fromPartial(object: Partial<_104.ScheduledTokenRelease>): _104.ScheduledTokenRelease;
                fromAmino(object: _104.ScheduledTokenReleaseAmino): _104.ScheduledTokenRelease;
                toAmino(message: _104.ScheduledTokenRelease): _104.ScheduledTokenReleaseAmino;
                fromAminoMsg(object: _104.ScheduledTokenReleaseAminoMsg): _104.ScheduledTokenRelease;
                fromProtoMsg(message: _104.ScheduledTokenReleaseProtoMsg): _104.ScheduledTokenRelease;
                toProto(message: _104.ScheduledTokenRelease): Uint8Array;
                toProtoMsg(message: _104.ScheduledTokenRelease): _104.ScheduledTokenReleaseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                fromJSON(object: any): _104.Params;
                toJSON(message: _104.Params): unknown;
                fromPartial(object: Partial<_104.Params>): _104.Params;
                fromAmino(object: _104.ParamsAmino): _104.Params;
                toAmino(message: _104.Params): _104.ParamsAmino;
                fromAminoMsg(object: _104.ParamsAminoMsg): _104.Params;
                fromProtoMsg(message: _104.ParamsProtoMsg): _104.Params;
                toProto(message: _104.Params): Uint8Array;
                toProtoMsg(message: _104.Params): _104.ParamsProtoMsg;
            };
            Version2Minter: {
                typeUrl: string;
                encode(message: _104.Version2Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Version2Minter;
                fromJSON(object: any): _104.Version2Minter;
                toJSON(message: _104.Version2Minter): unknown;
                fromPartial(object: Partial<_104.Version2Minter>): _104.Version2Minter;
                fromAmino(object: _104.Version2MinterAmino): _104.Version2Minter;
                toAmino(message: _104.Version2Minter): _104.Version2MinterAmino;
                fromAminoMsg(object: _104.Version2MinterAminoMsg): _104.Version2Minter;
                fromProtoMsg(message: _104.Version2MinterProtoMsg): _104.Version2Minter;
                toProto(message: _104.Version2Minter): Uint8Array;
                toProtoMsg(message: _104.Version2Minter): _104.Version2MinterProtoMsg;
            };
            Version2ScheduledTokenRelease: {
                typeUrl: string;
                encode(message: _104.Version2ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Version2ScheduledTokenRelease;
                fromJSON(object: any): _104.Version2ScheduledTokenRelease;
                toJSON(message: _104.Version2ScheduledTokenRelease): unknown;
                fromPartial(object: Partial<_104.Version2ScheduledTokenRelease>): _104.Version2ScheduledTokenRelease;
                fromAmino(object: _104.Version2ScheduledTokenReleaseAmino): _104.Version2ScheduledTokenRelease;
                toAmino(message: _104.Version2ScheduledTokenRelease): _104.Version2ScheduledTokenReleaseAmino;
                fromAminoMsg(object: _104.Version2ScheduledTokenReleaseAminoMsg): _104.Version2ScheduledTokenRelease;
                fromProtoMsg(message: _104.Version2ScheduledTokenReleaseProtoMsg): _104.Version2ScheduledTokenRelease;
                toProto(message: _104.Version2ScheduledTokenRelease): Uint8Array;
                toProtoMsg(message: _104.Version2ScheduledTokenRelease): _104.Version2ScheduledTokenReleaseProtoMsg;
            };
            Version2Params: {
                typeUrl: string;
                encode(message: _104.Version2Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Version2Params;
                fromJSON(object: any): _104.Version2Params;
                toJSON(message: _104.Version2Params): unknown;
                fromPartial(object: Partial<_104.Version2Params>): _104.Version2Params;
                fromAmino(object: _104.Version2ParamsAmino): _104.Version2Params;
                toAmino(message: _104.Version2Params): _104.Version2ParamsAmino;
                fromAminoMsg(object: _104.Version2ParamsAminoMsg): _104.Version2Params;
                fromProtoMsg(message: _104.Version2ParamsProtoMsg): _104.Version2Params;
                toProto(message: _104.Version2Params): Uint8Array;
                toProtoMsg(message: _104.Version2Params): _104.Version2ParamsProtoMsg;
            };
            UpdateMinterProposal: {
                typeUrl: string;
                encode(message: _103.UpdateMinterProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UpdateMinterProposal;
                fromJSON(object: any): _103.UpdateMinterProposal;
                toJSON(message: _103.UpdateMinterProposal): unknown;
                fromPartial(object: Partial<_103.UpdateMinterProposal>): _103.UpdateMinterProposal;
                fromAmino(object: _103.UpdateMinterProposalAmino): _103.UpdateMinterProposal;
                toAmino(message: _103.UpdateMinterProposal): _103.UpdateMinterProposalAmino;
                fromAminoMsg(object: _103.UpdateMinterProposalAminoMsg): _103.UpdateMinterProposal;
                fromProtoMsg(message: _103.UpdateMinterProposalProtoMsg): _103.UpdateMinterProposal;
                toProto(message: _103.UpdateMinterProposal): Uint8Array;
                toProtoMsg(message: _103.UpdateMinterProposal): _103.UpdateMinterProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                fromJSON(object: any): _102.GenesisState;
                toJSON(message: _102.GenesisState): unknown;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                fromAmino(object: _102.GenesisStateAmino): _102.GenesisState;
                toAmino(message: _102.GenesisState): _102.GenesisStateAmino;
                fromAminoMsg(object: _102.GenesisStateAminoMsg): _102.GenesisState;
                fromProtoMsg(message: _102.GenesisStateProtoMsg): _102.GenesisState;
                toProto(message: _102.GenesisState): Uint8Array;
                toProtoMsg(message: _102.GenesisState): _102.GenesisStateProtoMsg;
            };
        };
        const oracle: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                exchangeRate(request: _112.QueryExchangeRateRequest): Promise<_112.QueryExchangeRateResponse>;
                exchangeRates(request?: _112.QueryExchangeRatesRequest): Promise<_112.QueryExchangeRatesResponse>;
                actives(request?: _112.QueryActivesRequest): Promise<_112.QueryActivesResponse>;
                voteTargets(request?: _112.QueryVoteTargetsRequest): Promise<_112.QueryVoteTargetsResponse>;
                priceSnapshotHistory(request?: _112.QueryPriceSnapshotHistoryRequest): Promise<_112.QueryPriceSnapshotHistoryResponse>;
                twaps(request: _112.QueryTwapsRequest): Promise<_112.QueryTwapsResponse>;
                feederDelegation(request: _112.QueryFeederDelegationRequest): Promise<_112.QueryFeederDelegationResponse>;
                votePenaltyCounter(request: _112.QueryVotePenaltyCounterRequest): Promise<_112.QueryVotePenaltyCounterResponse>;
                slashWindow(request?: _112.QuerySlashWindowRequest): Promise<_112.QuerySlashWindowResponse>;
                params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _113.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _113.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _113.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _113.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _113.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _113.MsgDelegateFeedConsent;
                    };
                };
                toJSON: {
                    aggregateExchangeRateVote(value: _113.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateFeedConsent(value: _113.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    aggregateExchangeRateVote(value: any): {
                        typeUrl: string;
                        value: _113.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: any): {
                        typeUrl: string;
                        value: _113.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _113.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _113.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _113.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _113.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: (message: _113.MsgAggregateExchangeRateVote) => _113.MsgAggregateExchangeRateVoteAmino;
                    fromAmino: (object: _113.MsgAggregateExchangeRateVoteAmino) => _113.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: (message: _113.MsgDelegateFeedConsent) => _113.MsgDelegateFeedConsentAmino;
                    fromAmino: (object: _113.MsgDelegateFeedConsentAmino) => _113.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _113.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgAggregateExchangeRateVote;
                fromJSON(object: any): _113.MsgAggregateExchangeRateVote;
                toJSON(message: _113.MsgAggregateExchangeRateVote): unknown;
                fromPartial(object: Partial<_113.MsgAggregateExchangeRateVote>): _113.MsgAggregateExchangeRateVote;
                fromAmino(object: _113.MsgAggregateExchangeRateVoteAmino): _113.MsgAggregateExchangeRateVote;
                toAmino(message: _113.MsgAggregateExchangeRateVote): _113.MsgAggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _113.MsgAggregateExchangeRateVoteAminoMsg): _113.MsgAggregateExchangeRateVote;
                fromProtoMsg(message: _113.MsgAggregateExchangeRateVoteProtoMsg): _113.MsgAggregateExchangeRateVote;
                toProto(message: _113.MsgAggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _113.MsgAggregateExchangeRateVote): _113.MsgAggregateExchangeRateVoteProtoMsg;
            };
            MsgAggregateExchangeRateVoteResponse: {
                typeUrl: string;
                encode(_: _113.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgAggregateExchangeRateVoteResponse;
                fromJSON(_: any): _113.MsgAggregateExchangeRateVoteResponse;
                toJSON(_: _113.MsgAggregateExchangeRateVoteResponse): unknown;
                fromPartial(_: Partial<_113.MsgAggregateExchangeRateVoteResponse>): _113.MsgAggregateExchangeRateVoteResponse;
                fromAmino(_: _113.MsgAggregateExchangeRateVoteResponseAmino): _113.MsgAggregateExchangeRateVoteResponse;
                toAmino(_: _113.MsgAggregateExchangeRateVoteResponse): _113.MsgAggregateExchangeRateVoteResponseAmino;
                fromAminoMsg(object: _113.MsgAggregateExchangeRateVoteResponseAminoMsg): _113.MsgAggregateExchangeRateVoteResponse;
                fromProtoMsg(message: _113.MsgAggregateExchangeRateVoteResponseProtoMsg): _113.MsgAggregateExchangeRateVoteResponse;
                toProto(message: _113.MsgAggregateExchangeRateVoteResponse): Uint8Array;
                toProtoMsg(message: _113.MsgAggregateExchangeRateVoteResponse): _113.MsgAggregateExchangeRateVoteResponseProtoMsg;
            };
            MsgDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _113.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgDelegateFeedConsent;
                fromJSON(object: any): _113.MsgDelegateFeedConsent;
                toJSON(message: _113.MsgDelegateFeedConsent): unknown;
                fromPartial(object: Partial<_113.MsgDelegateFeedConsent>): _113.MsgDelegateFeedConsent;
                fromAmino(object: _113.MsgDelegateFeedConsentAmino): _113.MsgDelegateFeedConsent;
                toAmino(message: _113.MsgDelegateFeedConsent): _113.MsgDelegateFeedConsentAmino;
                fromAminoMsg(object: _113.MsgDelegateFeedConsentAminoMsg): _113.MsgDelegateFeedConsent;
                fromProtoMsg(message: _113.MsgDelegateFeedConsentProtoMsg): _113.MsgDelegateFeedConsent;
                toProto(message: _113.MsgDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _113.MsgDelegateFeedConsent): _113.MsgDelegateFeedConsentProtoMsg;
            };
            MsgDelegateFeedConsentResponse: {
                typeUrl: string;
                encode(_: _113.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgDelegateFeedConsentResponse;
                fromJSON(_: any): _113.MsgDelegateFeedConsentResponse;
                toJSON(_: _113.MsgDelegateFeedConsentResponse): unknown;
                fromPartial(_: Partial<_113.MsgDelegateFeedConsentResponse>): _113.MsgDelegateFeedConsentResponse;
                fromAmino(_: _113.MsgDelegateFeedConsentResponseAmino): _113.MsgDelegateFeedConsentResponse;
                toAmino(_: _113.MsgDelegateFeedConsentResponse): _113.MsgDelegateFeedConsentResponseAmino;
                fromAminoMsg(object: _113.MsgDelegateFeedConsentResponseAminoMsg): _113.MsgDelegateFeedConsentResponse;
                fromProtoMsg(message: _113.MsgDelegateFeedConsentResponseProtoMsg): _113.MsgDelegateFeedConsentResponse;
                toProto(message: _113.MsgDelegateFeedConsentResponse): Uint8Array;
                toProtoMsg(message: _113.MsgDelegateFeedConsentResponse): _113.MsgDelegateFeedConsentResponseProtoMsg;
            };
            QueryExchangeRateRequest: {
                typeUrl: string;
                encode(message: _112.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryExchangeRateRequest;
                fromJSON(object: any): _112.QueryExchangeRateRequest;
                toJSON(message: _112.QueryExchangeRateRequest): unknown;
                fromPartial(object: Partial<_112.QueryExchangeRateRequest>): _112.QueryExchangeRateRequest;
                fromAmino(object: _112.QueryExchangeRateRequestAmino): _112.QueryExchangeRateRequest;
                toAmino(message: _112.QueryExchangeRateRequest): _112.QueryExchangeRateRequestAmino;
                fromAminoMsg(object: _112.QueryExchangeRateRequestAminoMsg): _112.QueryExchangeRateRequest;
                fromProtoMsg(message: _112.QueryExchangeRateRequestProtoMsg): _112.QueryExchangeRateRequest;
                toProto(message: _112.QueryExchangeRateRequest): Uint8Array;
                toProtoMsg(message: _112.QueryExchangeRateRequest): _112.QueryExchangeRateRequestProtoMsg;
            };
            QueryExchangeRateResponse: {
                typeUrl: string;
                encode(message: _112.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryExchangeRateResponse;
                fromJSON(object: any): _112.QueryExchangeRateResponse;
                toJSON(message: _112.QueryExchangeRateResponse): unknown;
                fromPartial(object: Partial<_112.QueryExchangeRateResponse>): _112.QueryExchangeRateResponse;
                fromAmino(object: _112.QueryExchangeRateResponseAmino): _112.QueryExchangeRateResponse;
                toAmino(message: _112.QueryExchangeRateResponse): _112.QueryExchangeRateResponseAmino;
                fromAminoMsg(object: _112.QueryExchangeRateResponseAminoMsg): _112.QueryExchangeRateResponse;
                fromProtoMsg(message: _112.QueryExchangeRateResponseProtoMsg): _112.QueryExchangeRateResponse;
                toProto(message: _112.QueryExchangeRateResponse): Uint8Array;
                toProtoMsg(message: _112.QueryExchangeRateResponse): _112.QueryExchangeRateResponseProtoMsg;
            };
            QueryExchangeRatesRequest: {
                typeUrl: string;
                encode(_: _112.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryExchangeRatesRequest;
                fromJSON(_: any): _112.QueryExchangeRatesRequest;
                toJSON(_: _112.QueryExchangeRatesRequest): unknown;
                fromPartial(_: Partial<_112.QueryExchangeRatesRequest>): _112.QueryExchangeRatesRequest;
                fromAmino(_: _112.QueryExchangeRatesRequestAmino): _112.QueryExchangeRatesRequest;
                toAmino(_: _112.QueryExchangeRatesRequest): _112.QueryExchangeRatesRequestAmino;
                fromAminoMsg(object: _112.QueryExchangeRatesRequestAminoMsg): _112.QueryExchangeRatesRequest;
                fromProtoMsg(message: _112.QueryExchangeRatesRequestProtoMsg): _112.QueryExchangeRatesRequest;
                toProto(message: _112.QueryExchangeRatesRequest): Uint8Array;
                toProtoMsg(message: _112.QueryExchangeRatesRequest): _112.QueryExchangeRatesRequestProtoMsg;
            };
            DenomOracleExchangeRatePair: {
                typeUrl: string;
                encode(message: _112.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DenomOracleExchangeRatePair;
                fromJSON(object: any): _112.DenomOracleExchangeRatePair;
                toJSON(message: _112.DenomOracleExchangeRatePair): unknown;
                fromPartial(object: Partial<_112.DenomOracleExchangeRatePair>): _112.DenomOracleExchangeRatePair;
                fromAmino(object: _112.DenomOracleExchangeRatePairAmino): _112.DenomOracleExchangeRatePair;
                toAmino(message: _112.DenomOracleExchangeRatePair): _112.DenomOracleExchangeRatePairAmino;
                fromAminoMsg(object: _112.DenomOracleExchangeRatePairAminoMsg): _112.DenomOracleExchangeRatePair;
                fromProtoMsg(message: _112.DenomOracleExchangeRatePairProtoMsg): _112.DenomOracleExchangeRatePair;
                toProto(message: _112.DenomOracleExchangeRatePair): Uint8Array;
                toProtoMsg(message: _112.DenomOracleExchangeRatePair): _112.DenomOracleExchangeRatePairProtoMsg;
            };
            QueryExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _112.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryExchangeRatesResponse;
                fromJSON(object: any): _112.QueryExchangeRatesResponse;
                toJSON(message: _112.QueryExchangeRatesResponse): unknown;
                fromPartial(object: Partial<_112.QueryExchangeRatesResponse>): _112.QueryExchangeRatesResponse;
                fromAmino(object: _112.QueryExchangeRatesResponseAmino): _112.QueryExchangeRatesResponse;
                toAmino(message: _112.QueryExchangeRatesResponse): _112.QueryExchangeRatesResponseAmino;
                fromAminoMsg(object: _112.QueryExchangeRatesResponseAminoMsg): _112.QueryExchangeRatesResponse;
                fromProtoMsg(message: _112.QueryExchangeRatesResponseProtoMsg): _112.QueryExchangeRatesResponse;
                toProto(message: _112.QueryExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _112.QueryExchangeRatesResponse): _112.QueryExchangeRatesResponseProtoMsg;
            };
            QueryActivesRequest: {
                typeUrl: string;
                encode(_: _112.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryActivesRequest;
                fromJSON(_: any): _112.QueryActivesRequest;
                toJSON(_: _112.QueryActivesRequest): unknown;
                fromPartial(_: Partial<_112.QueryActivesRequest>): _112.QueryActivesRequest;
                fromAmino(_: _112.QueryActivesRequestAmino): _112.QueryActivesRequest;
                toAmino(_: _112.QueryActivesRequest): _112.QueryActivesRequestAmino;
                fromAminoMsg(object: _112.QueryActivesRequestAminoMsg): _112.QueryActivesRequest;
                fromProtoMsg(message: _112.QueryActivesRequestProtoMsg): _112.QueryActivesRequest;
                toProto(message: _112.QueryActivesRequest): Uint8Array;
                toProtoMsg(message: _112.QueryActivesRequest): _112.QueryActivesRequestProtoMsg;
            };
            QueryActivesResponse: {
                typeUrl: string;
                encode(message: _112.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryActivesResponse;
                fromJSON(object: any): _112.QueryActivesResponse;
                toJSON(message: _112.QueryActivesResponse): unknown;
                fromPartial(object: Partial<_112.QueryActivesResponse>): _112.QueryActivesResponse;
                fromAmino(object: _112.QueryActivesResponseAmino): _112.QueryActivesResponse;
                toAmino(message: _112.QueryActivesResponse): _112.QueryActivesResponseAmino;
                fromAminoMsg(object: _112.QueryActivesResponseAminoMsg): _112.QueryActivesResponse;
                fromProtoMsg(message: _112.QueryActivesResponseProtoMsg): _112.QueryActivesResponse;
                toProto(message: _112.QueryActivesResponse): Uint8Array;
                toProtoMsg(message: _112.QueryActivesResponse): _112.QueryActivesResponseProtoMsg;
            };
            QueryVoteTargetsRequest: {
                typeUrl: string;
                encode(_: _112.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryVoteTargetsRequest;
                fromJSON(_: any): _112.QueryVoteTargetsRequest;
                toJSON(_: _112.QueryVoteTargetsRequest): unknown;
                fromPartial(_: Partial<_112.QueryVoteTargetsRequest>): _112.QueryVoteTargetsRequest;
                fromAmino(_: _112.QueryVoteTargetsRequestAmino): _112.QueryVoteTargetsRequest;
                toAmino(_: _112.QueryVoteTargetsRequest): _112.QueryVoteTargetsRequestAmino;
                fromAminoMsg(object: _112.QueryVoteTargetsRequestAminoMsg): _112.QueryVoteTargetsRequest;
                fromProtoMsg(message: _112.QueryVoteTargetsRequestProtoMsg): _112.QueryVoteTargetsRequest;
                toProto(message: _112.QueryVoteTargetsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryVoteTargetsRequest): _112.QueryVoteTargetsRequestProtoMsg;
            };
            QueryVoteTargetsResponse: {
                typeUrl: string;
                encode(message: _112.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryVoteTargetsResponse;
                fromJSON(object: any): _112.QueryVoteTargetsResponse;
                toJSON(message: _112.QueryVoteTargetsResponse): unknown;
                fromPartial(object: Partial<_112.QueryVoteTargetsResponse>): _112.QueryVoteTargetsResponse;
                fromAmino(object: _112.QueryVoteTargetsResponseAmino): _112.QueryVoteTargetsResponse;
                toAmino(message: _112.QueryVoteTargetsResponse): _112.QueryVoteTargetsResponseAmino;
                fromAminoMsg(object: _112.QueryVoteTargetsResponseAminoMsg): _112.QueryVoteTargetsResponse;
                fromProtoMsg(message: _112.QueryVoteTargetsResponseProtoMsg): _112.QueryVoteTargetsResponse;
                toProto(message: _112.QueryVoteTargetsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryVoteTargetsResponse): _112.QueryVoteTargetsResponseProtoMsg;
            };
            QueryPriceSnapshotHistoryRequest: {
                typeUrl: string;
                encode(_: _112.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryPriceSnapshotHistoryRequest;
                fromJSON(_: any): _112.QueryPriceSnapshotHistoryRequest;
                toJSON(_: _112.QueryPriceSnapshotHistoryRequest): unknown;
                fromPartial(_: Partial<_112.QueryPriceSnapshotHistoryRequest>): _112.QueryPriceSnapshotHistoryRequest;
                fromAmino(_: _112.QueryPriceSnapshotHistoryRequestAmino): _112.QueryPriceSnapshotHistoryRequest;
                toAmino(_: _112.QueryPriceSnapshotHistoryRequest): _112.QueryPriceSnapshotHistoryRequestAmino;
                fromAminoMsg(object: _112.QueryPriceSnapshotHistoryRequestAminoMsg): _112.QueryPriceSnapshotHistoryRequest;
                fromProtoMsg(message: _112.QueryPriceSnapshotHistoryRequestProtoMsg): _112.QueryPriceSnapshotHistoryRequest;
                toProto(message: _112.QueryPriceSnapshotHistoryRequest): Uint8Array;
                toProtoMsg(message: _112.QueryPriceSnapshotHistoryRequest): _112.QueryPriceSnapshotHistoryRequestProtoMsg;
            };
            QueryPriceSnapshotHistoryResponse: {
                typeUrl: string;
                encode(message: _112.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryPriceSnapshotHistoryResponse;
                fromJSON(object: any): _112.QueryPriceSnapshotHistoryResponse;
                toJSON(message: _112.QueryPriceSnapshotHistoryResponse): unknown;
                fromPartial(object: Partial<_112.QueryPriceSnapshotHistoryResponse>): _112.QueryPriceSnapshotHistoryResponse;
                fromAmino(object: _112.QueryPriceSnapshotHistoryResponseAmino): _112.QueryPriceSnapshotHistoryResponse;
                toAmino(message: _112.QueryPriceSnapshotHistoryResponse): _112.QueryPriceSnapshotHistoryResponseAmino;
                fromAminoMsg(object: _112.QueryPriceSnapshotHistoryResponseAminoMsg): _112.QueryPriceSnapshotHistoryResponse;
                fromProtoMsg(message: _112.QueryPriceSnapshotHistoryResponseProtoMsg): _112.QueryPriceSnapshotHistoryResponse;
                toProto(message: _112.QueryPriceSnapshotHistoryResponse): Uint8Array;
                toProtoMsg(message: _112.QueryPriceSnapshotHistoryResponse): _112.QueryPriceSnapshotHistoryResponseProtoMsg;
            };
            QueryTwapsRequest: {
                typeUrl: string;
                encode(message: _112.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryTwapsRequest;
                fromJSON(object: any): _112.QueryTwapsRequest;
                toJSON(message: _112.QueryTwapsRequest): unknown;
                fromPartial(object: Partial<_112.QueryTwapsRequest>): _112.QueryTwapsRequest;
                fromAmino(object: _112.QueryTwapsRequestAmino): _112.QueryTwapsRequest;
                toAmino(message: _112.QueryTwapsRequest): _112.QueryTwapsRequestAmino;
                fromAminoMsg(object: _112.QueryTwapsRequestAminoMsg): _112.QueryTwapsRequest;
                fromProtoMsg(message: _112.QueryTwapsRequestProtoMsg): _112.QueryTwapsRequest;
                toProto(message: _112.QueryTwapsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryTwapsRequest): _112.QueryTwapsRequestProtoMsg;
            };
            QueryTwapsResponse: {
                typeUrl: string;
                encode(message: _112.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryTwapsResponse;
                fromJSON(object: any): _112.QueryTwapsResponse;
                toJSON(message: _112.QueryTwapsResponse): unknown;
                fromPartial(object: Partial<_112.QueryTwapsResponse>): _112.QueryTwapsResponse;
                fromAmino(object: _112.QueryTwapsResponseAmino): _112.QueryTwapsResponse;
                toAmino(message: _112.QueryTwapsResponse): _112.QueryTwapsResponseAmino;
                fromAminoMsg(object: _112.QueryTwapsResponseAminoMsg): _112.QueryTwapsResponse;
                fromProtoMsg(message: _112.QueryTwapsResponseProtoMsg): _112.QueryTwapsResponse;
                toProto(message: _112.QueryTwapsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryTwapsResponse): _112.QueryTwapsResponseProtoMsg;
            };
            QueryFeederDelegationRequest: {
                typeUrl: string;
                encode(message: _112.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryFeederDelegationRequest;
                fromJSON(object: any): _112.QueryFeederDelegationRequest;
                toJSON(message: _112.QueryFeederDelegationRequest): unknown;
                fromPartial(object: Partial<_112.QueryFeederDelegationRequest>): _112.QueryFeederDelegationRequest;
                fromAmino(object: _112.QueryFeederDelegationRequestAmino): _112.QueryFeederDelegationRequest;
                toAmino(message: _112.QueryFeederDelegationRequest): _112.QueryFeederDelegationRequestAmino;
                fromAminoMsg(object: _112.QueryFeederDelegationRequestAminoMsg): _112.QueryFeederDelegationRequest;
                fromProtoMsg(message: _112.QueryFeederDelegationRequestProtoMsg): _112.QueryFeederDelegationRequest;
                toProto(message: _112.QueryFeederDelegationRequest): Uint8Array;
                toProtoMsg(message: _112.QueryFeederDelegationRequest): _112.QueryFeederDelegationRequestProtoMsg;
            };
            QueryFeederDelegationResponse: {
                typeUrl: string;
                encode(message: _112.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryFeederDelegationResponse;
                fromJSON(object: any): _112.QueryFeederDelegationResponse;
                toJSON(message: _112.QueryFeederDelegationResponse): unknown;
                fromPartial(object: Partial<_112.QueryFeederDelegationResponse>): _112.QueryFeederDelegationResponse;
                fromAmino(object: _112.QueryFeederDelegationResponseAmino): _112.QueryFeederDelegationResponse;
                toAmino(message: _112.QueryFeederDelegationResponse): _112.QueryFeederDelegationResponseAmino;
                fromAminoMsg(object: _112.QueryFeederDelegationResponseAminoMsg): _112.QueryFeederDelegationResponse;
                fromProtoMsg(message: _112.QueryFeederDelegationResponseProtoMsg): _112.QueryFeederDelegationResponse;
                toProto(message: _112.QueryFeederDelegationResponse): Uint8Array;
                toProtoMsg(message: _112.QueryFeederDelegationResponse): _112.QueryFeederDelegationResponseProtoMsg;
            };
            QueryVotePenaltyCounterRequest: {
                typeUrl: string;
                encode(message: _112.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryVotePenaltyCounterRequest;
                fromJSON(object: any): _112.QueryVotePenaltyCounterRequest;
                toJSON(message: _112.QueryVotePenaltyCounterRequest): unknown;
                fromPartial(object: Partial<_112.QueryVotePenaltyCounterRequest>): _112.QueryVotePenaltyCounterRequest;
                fromAmino(object: _112.QueryVotePenaltyCounterRequestAmino): _112.QueryVotePenaltyCounterRequest;
                toAmino(message: _112.QueryVotePenaltyCounterRequest): _112.QueryVotePenaltyCounterRequestAmino;
                fromAminoMsg(object: _112.QueryVotePenaltyCounterRequestAminoMsg): _112.QueryVotePenaltyCounterRequest;
                fromProtoMsg(message: _112.QueryVotePenaltyCounterRequestProtoMsg): _112.QueryVotePenaltyCounterRequest;
                toProto(message: _112.QueryVotePenaltyCounterRequest): Uint8Array;
                toProtoMsg(message: _112.QueryVotePenaltyCounterRequest): _112.QueryVotePenaltyCounterRequestProtoMsg;
            };
            QueryVotePenaltyCounterResponse: {
                typeUrl: string;
                encode(message: _112.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryVotePenaltyCounterResponse;
                fromJSON(object: any): _112.QueryVotePenaltyCounterResponse;
                toJSON(message: _112.QueryVotePenaltyCounterResponse): unknown;
                fromPartial(object: Partial<_112.QueryVotePenaltyCounterResponse>): _112.QueryVotePenaltyCounterResponse;
                fromAmino(object: _112.QueryVotePenaltyCounterResponseAmino): _112.QueryVotePenaltyCounterResponse;
                toAmino(message: _112.QueryVotePenaltyCounterResponse): _112.QueryVotePenaltyCounterResponseAmino;
                fromAminoMsg(object: _112.QueryVotePenaltyCounterResponseAminoMsg): _112.QueryVotePenaltyCounterResponse;
                fromProtoMsg(message: _112.QueryVotePenaltyCounterResponseProtoMsg): _112.QueryVotePenaltyCounterResponse;
                toProto(message: _112.QueryVotePenaltyCounterResponse): Uint8Array;
                toProtoMsg(message: _112.QueryVotePenaltyCounterResponse): _112.QueryVotePenaltyCounterResponseProtoMsg;
            };
            QuerySlashWindowRequest: {
                typeUrl: string;
                encode(_: _112.QuerySlashWindowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QuerySlashWindowRequest;
                fromJSON(_: any): _112.QuerySlashWindowRequest;
                toJSON(_: _112.QuerySlashWindowRequest): unknown;
                fromPartial(_: Partial<_112.QuerySlashWindowRequest>): _112.QuerySlashWindowRequest;
                fromAmino(_: _112.QuerySlashWindowRequestAmino): _112.QuerySlashWindowRequest;
                toAmino(_: _112.QuerySlashWindowRequest): _112.QuerySlashWindowRequestAmino;
                fromAminoMsg(object: _112.QuerySlashWindowRequestAminoMsg): _112.QuerySlashWindowRequest;
                fromProtoMsg(message: _112.QuerySlashWindowRequestProtoMsg): _112.QuerySlashWindowRequest;
                toProto(message: _112.QuerySlashWindowRequest): Uint8Array;
                toProtoMsg(message: _112.QuerySlashWindowRequest): _112.QuerySlashWindowRequestProtoMsg;
            };
            QuerySlashWindowResponse: {
                typeUrl: string;
                encode(message: _112.QuerySlashWindowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QuerySlashWindowResponse;
                fromJSON(object: any): _112.QuerySlashWindowResponse;
                toJSON(message: _112.QuerySlashWindowResponse): unknown;
                fromPartial(object: Partial<_112.QuerySlashWindowResponse>): _112.QuerySlashWindowResponse;
                fromAmino(object: _112.QuerySlashWindowResponseAmino): _112.QuerySlashWindowResponse;
                toAmino(message: _112.QuerySlashWindowResponse): _112.QuerySlashWindowResponseAmino;
                fromAminoMsg(object: _112.QuerySlashWindowResponseAminoMsg): _112.QuerySlashWindowResponse;
                fromProtoMsg(message: _112.QuerySlashWindowResponseProtoMsg): _112.QuerySlashWindowResponse;
                toProto(message: _112.QuerySlashWindowResponse): Uint8Array;
                toProtoMsg(message: _112.QuerySlashWindowResponse): _112.QuerySlashWindowResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _112.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryParamsRequest;
                fromJSON(_: any): _112.QueryParamsRequest;
                toJSON(_: _112.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
                fromAmino(_: _112.QueryParamsRequestAmino): _112.QueryParamsRequest;
                toAmino(_: _112.QueryParamsRequest): _112.QueryParamsRequestAmino;
                fromAminoMsg(object: _112.QueryParamsRequestAminoMsg): _112.QueryParamsRequest;
                fromProtoMsg(message: _112.QueryParamsRequestProtoMsg): _112.QueryParamsRequest;
                toProto(message: _112.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _112.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryParamsResponse;
                fromJSON(object: any): _112.QueryParamsResponse;
                toJSON(message: _112.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
                fromAmino(object: _112.QueryParamsResponseAmino): _112.QueryParamsResponse;
                toAmino(message: _112.QueryParamsResponse): _112.QueryParamsResponseAmino;
                fromAminoMsg(object: _112.QueryParamsResponseAminoMsg): _112.QueryParamsResponse;
                fromProtoMsg(message: _112.QueryParamsResponseProtoMsg): _112.QueryParamsResponse;
                toProto(message: _112.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _111.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Params;
                fromJSON(object: any): _111.Params;
                toJSON(message: _111.Params): unknown;
                fromPartial(object: Partial<_111.Params>): _111.Params;
                fromAmino(object: _111.ParamsAmino): _111.Params;
                toAmino(message: _111.Params): _111.ParamsAmino;
                fromAminoMsg(object: _111.ParamsAminoMsg): _111.Params;
                fromProtoMsg(message: _111.ParamsProtoMsg): _111.Params;
                toProto(message: _111.Params): Uint8Array;
                toProtoMsg(message: _111.Params): _111.ParamsProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _111.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Denom;
                fromJSON(object: any): _111.Denom;
                toJSON(message: _111.Denom): unknown;
                fromPartial(object: Partial<_111.Denom>): _111.Denom;
                fromAmino(object: _111.DenomAmino): _111.Denom;
                toAmino(message: _111.Denom): _111.DenomAmino;
                fromAminoMsg(object: _111.DenomAminoMsg): _111.Denom;
                fromProtoMsg(message: _111.DenomProtoMsg): _111.Denom;
                toProto(message: _111.Denom): Uint8Array;
                toProtoMsg(message: _111.Denom): _111.DenomProtoMsg;
            };
            AggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _111.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.AggregateExchangeRateVote;
                fromJSON(object: any): _111.AggregateExchangeRateVote;
                toJSON(message: _111.AggregateExchangeRateVote): unknown;
                fromPartial(object: Partial<_111.AggregateExchangeRateVote>): _111.AggregateExchangeRateVote;
                fromAmino(object: _111.AggregateExchangeRateVoteAmino): _111.AggregateExchangeRateVote;
                toAmino(message: _111.AggregateExchangeRateVote): _111.AggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _111.AggregateExchangeRateVoteAminoMsg): _111.AggregateExchangeRateVote;
                fromProtoMsg(message: _111.AggregateExchangeRateVoteProtoMsg): _111.AggregateExchangeRateVote;
                toProto(message: _111.AggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _111.AggregateExchangeRateVote): _111.AggregateExchangeRateVoteProtoMsg;
            };
            ExchangeRateTuple: {
                typeUrl: string;
                encode(message: _111.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ExchangeRateTuple;
                fromJSON(object: any): _111.ExchangeRateTuple;
                toJSON(message: _111.ExchangeRateTuple): unknown;
                fromPartial(object: Partial<_111.ExchangeRateTuple>): _111.ExchangeRateTuple;
                fromAmino(object: _111.ExchangeRateTupleAmino): _111.ExchangeRateTuple;
                toAmino(message: _111.ExchangeRateTuple): _111.ExchangeRateTupleAmino;
                fromAminoMsg(object: _111.ExchangeRateTupleAminoMsg): _111.ExchangeRateTuple;
                fromProtoMsg(message: _111.ExchangeRateTupleProtoMsg): _111.ExchangeRateTuple;
                toProto(message: _111.ExchangeRateTuple): Uint8Array;
                toProtoMsg(message: _111.ExchangeRateTuple): _111.ExchangeRateTupleProtoMsg;
            };
            OracleExchangeRate: {
                typeUrl: string;
                encode(message: _111.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.OracleExchangeRate;
                fromJSON(object: any): _111.OracleExchangeRate;
                toJSON(message: _111.OracleExchangeRate): unknown;
                fromPartial(object: Partial<_111.OracleExchangeRate>): _111.OracleExchangeRate;
                fromAmino(object: _111.OracleExchangeRateAmino): _111.OracleExchangeRate;
                toAmino(message: _111.OracleExchangeRate): _111.OracleExchangeRateAmino;
                fromAminoMsg(object: _111.OracleExchangeRateAminoMsg): _111.OracleExchangeRate;
                fromProtoMsg(message: _111.OracleExchangeRateProtoMsg): _111.OracleExchangeRate;
                toProto(message: _111.OracleExchangeRate): Uint8Array;
                toProtoMsg(message: _111.OracleExchangeRate): _111.OracleExchangeRateProtoMsg;
            };
            PriceSnapshotItem: {
                typeUrl: string;
                encode(message: _111.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.PriceSnapshotItem;
                fromJSON(object: any): _111.PriceSnapshotItem;
                toJSON(message: _111.PriceSnapshotItem): unknown;
                fromPartial(object: Partial<_111.PriceSnapshotItem>): _111.PriceSnapshotItem;
                fromAmino(object: _111.PriceSnapshotItemAmino): _111.PriceSnapshotItem;
                toAmino(message: _111.PriceSnapshotItem): _111.PriceSnapshotItemAmino;
                fromAminoMsg(object: _111.PriceSnapshotItemAminoMsg): _111.PriceSnapshotItem;
                fromProtoMsg(message: _111.PriceSnapshotItemProtoMsg): _111.PriceSnapshotItem;
                toProto(message: _111.PriceSnapshotItem): Uint8Array;
                toProtoMsg(message: _111.PriceSnapshotItem): _111.PriceSnapshotItemProtoMsg;
            };
            PriceSnapshot: {
                typeUrl: string;
                encode(message: _111.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.PriceSnapshot;
                fromJSON(object: any): _111.PriceSnapshot;
                toJSON(message: _111.PriceSnapshot): unknown;
                fromPartial(object: Partial<_111.PriceSnapshot>): _111.PriceSnapshot;
                fromAmino(object: _111.PriceSnapshotAmino): _111.PriceSnapshot;
                toAmino(message: _111.PriceSnapshot): _111.PriceSnapshotAmino;
                fromAminoMsg(object: _111.PriceSnapshotAminoMsg): _111.PriceSnapshot;
                fromProtoMsg(message: _111.PriceSnapshotProtoMsg): _111.PriceSnapshot;
                toProto(message: _111.PriceSnapshot): Uint8Array;
                toProtoMsg(message: _111.PriceSnapshot): _111.PriceSnapshotProtoMsg;
            };
            OracleTwap: {
                typeUrl: string;
                encode(message: _111.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.OracleTwap;
                fromJSON(object: any): _111.OracleTwap;
                toJSON(message: _111.OracleTwap): unknown;
                fromPartial(object: Partial<_111.OracleTwap>): _111.OracleTwap;
                fromAmino(object: _111.OracleTwapAmino): _111.OracleTwap;
                toAmino(message: _111.OracleTwap): _111.OracleTwapAmino;
                fromAminoMsg(object: _111.OracleTwapAminoMsg): _111.OracleTwap;
                fromProtoMsg(message: _111.OracleTwapProtoMsg): _111.OracleTwap;
                toProto(message: _111.OracleTwap): Uint8Array;
                toProtoMsg(message: _111.OracleTwap): _111.OracleTwapProtoMsg;
            };
            VotePenaltyCounter: {
                typeUrl: string;
                encode(message: _111.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.VotePenaltyCounter;
                fromJSON(object: any): _111.VotePenaltyCounter;
                toJSON(message: _111.VotePenaltyCounter): unknown;
                fromPartial(object: Partial<_111.VotePenaltyCounter>): _111.VotePenaltyCounter;
                fromAmino(object: _111.VotePenaltyCounterAmino): _111.VotePenaltyCounter;
                toAmino(message: _111.VotePenaltyCounter): _111.VotePenaltyCounterAmino;
                fromAminoMsg(object: _111.VotePenaltyCounterAminoMsg): _111.VotePenaltyCounter;
                fromProtoMsg(message: _111.VotePenaltyCounterProtoMsg): _111.VotePenaltyCounter;
                toProto(message: _111.VotePenaltyCounter): Uint8Array;
                toProtoMsg(message: _111.VotePenaltyCounter): _111.VotePenaltyCounterProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
                fromJSON(object: any): _110.GenesisState;
                toJSON(message: _110.GenesisState): unknown;
                fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                toProto(message: _110.GenesisState): Uint8Array;
                toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
            };
            FeederDelegation: {
                typeUrl: string;
                encode(message: _110.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.FeederDelegation;
                fromJSON(object: any): _110.FeederDelegation;
                toJSON(message: _110.FeederDelegation): unknown;
                fromPartial(object: Partial<_110.FeederDelegation>): _110.FeederDelegation;
                fromAmino(object: _110.FeederDelegationAmino): _110.FeederDelegation;
                toAmino(message: _110.FeederDelegation): _110.FeederDelegationAmino;
                fromAminoMsg(object: _110.FeederDelegationAminoMsg): _110.FeederDelegation;
                fromProtoMsg(message: _110.FeederDelegationProtoMsg): _110.FeederDelegation;
                toProto(message: _110.FeederDelegation): Uint8Array;
                toProtoMsg(message: _110.FeederDelegation): _110.FeederDelegationProtoMsg;
            };
            PenaltyCounter: {
                typeUrl: string;
                encode(message: _110.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.PenaltyCounter;
                fromJSON(object: any): _110.PenaltyCounter;
                toJSON(message: _110.PenaltyCounter): unknown;
                fromPartial(object: Partial<_110.PenaltyCounter>): _110.PenaltyCounter;
                fromAmino(object: _110.PenaltyCounterAmino): _110.PenaltyCounter;
                toAmino(message: _110.PenaltyCounter): _110.PenaltyCounterAmino;
                fromAminoMsg(object: _110.PenaltyCounterAminoMsg): _110.PenaltyCounter;
                fromProtoMsg(message: _110.PenaltyCounterProtoMsg): _110.PenaltyCounter;
                toProto(message: _110.PenaltyCounter): Uint8Array;
                toProtoMsg(message: _110.PenaltyCounter): _110.PenaltyCounterProtoMsg;
            };
        };
        const tokenfactory: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                denomAuthorityMetadata(request: _122.QueryDenomAuthorityMetadataRequest): Promise<_122.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _122.QueryDenomsFromCreatorRequest): Promise<_122.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _123.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _123.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _123.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _123.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _123.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _123.MsgCreateDenom): {
                        typeUrl: string;
                        value: _123.MsgCreateDenom;
                    };
                    mint(value: _123.MsgMint): {
                        typeUrl: string;
                        value: _123.MsgMint;
                    };
                    burn(value: _123.MsgBurn): {
                        typeUrl: string;
                        value: _123.MsgBurn;
                    };
                    changeAdmin(value: _123.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _123.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _123.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _123.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _123.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _123.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _123.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _123.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _123.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _123.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _123.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _123.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _123.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _123.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _123.MsgCreateDenom): {
                        typeUrl: string;
                        value: _123.MsgCreateDenom;
                    };
                    mint(value: _123.MsgMint): {
                        typeUrl: string;
                        value: _123.MsgMint;
                    };
                    burn(value: _123.MsgBurn): {
                        typeUrl: string;
                        value: _123.MsgBurn;
                    };
                    changeAdmin(value: _123.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _123.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _123.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _123.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _123.MsgCreateDenom) => _123.MsgCreateDenomAmino;
                    fromAmino: (object: _123.MsgCreateDenomAmino) => _123.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _123.MsgMint) => _123.MsgMintAmino;
                    fromAmino: (object: _123.MsgMintAmino) => _123.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _123.MsgBurn) => _123.MsgBurnAmino;
                    fromAmino: (object: _123.MsgBurnAmino) => _123.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _123.MsgChangeAdmin) => _123.MsgChangeAdminAmino;
                    fromAmino: (object: _123.MsgChangeAdminAmino) => _123.MsgChangeAdmin;
                };
                "/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSetDenomMetadata) => _123.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _123.MsgSetDenomMetadataAmino) => _123.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _123.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgCreateDenom;
                fromJSON(object: any): _123.MsgCreateDenom;
                toJSON(message: _123.MsgCreateDenom): unknown;
                fromPartial(object: Partial<_123.MsgCreateDenom>): _123.MsgCreateDenom;
                fromAmino(object: _123.MsgCreateDenomAmino): _123.MsgCreateDenom;
                toAmino(message: _123.MsgCreateDenom): _123.MsgCreateDenomAmino;
                fromAminoMsg(object: _123.MsgCreateDenomAminoMsg): _123.MsgCreateDenom;
                fromProtoMsg(message: _123.MsgCreateDenomProtoMsg): _123.MsgCreateDenom;
                toProto(message: _123.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _123.MsgCreateDenom): _123.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _123.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgCreateDenomResponse;
                fromJSON(object: any): _123.MsgCreateDenomResponse;
                toJSON(message: _123.MsgCreateDenomResponse): unknown;
                fromPartial(object: Partial<_123.MsgCreateDenomResponse>): _123.MsgCreateDenomResponse;
                fromAmino(object: _123.MsgCreateDenomResponseAmino): _123.MsgCreateDenomResponse;
                toAmino(message: _123.MsgCreateDenomResponse): _123.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _123.MsgCreateDenomResponseAminoMsg): _123.MsgCreateDenomResponse;
                fromProtoMsg(message: _123.MsgCreateDenomResponseProtoMsg): _123.MsgCreateDenomResponse;
                toProto(message: _123.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _123.MsgCreateDenomResponse): _123.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _123.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgMint;
                fromJSON(object: any): _123.MsgMint;
                toJSON(message: _123.MsgMint): unknown;
                fromPartial(object: Partial<_123.MsgMint>): _123.MsgMint;
                fromAmino(object: _123.MsgMintAmino): _123.MsgMint;
                toAmino(message: _123.MsgMint): _123.MsgMintAmino;
                fromAminoMsg(object: _123.MsgMintAminoMsg): _123.MsgMint;
                fromProtoMsg(message: _123.MsgMintProtoMsg): _123.MsgMint;
                toProto(message: _123.MsgMint): Uint8Array;
                toProtoMsg(message: _123.MsgMint): _123.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _123.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgMintResponse;
                fromJSON(_: any): _123.MsgMintResponse;
                toJSON(_: _123.MsgMintResponse): unknown;
                fromPartial(_: Partial<_123.MsgMintResponse>): _123.MsgMintResponse;
                fromAmino(_: _123.MsgMintResponseAmino): _123.MsgMintResponse;
                toAmino(_: _123.MsgMintResponse): _123.MsgMintResponseAmino;
                fromAminoMsg(object: _123.MsgMintResponseAminoMsg): _123.MsgMintResponse;
                fromProtoMsg(message: _123.MsgMintResponseProtoMsg): _123.MsgMintResponse;
                toProto(message: _123.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _123.MsgMintResponse): _123.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _123.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgBurn;
                fromJSON(object: any): _123.MsgBurn;
                toJSON(message: _123.MsgBurn): unknown;
                fromPartial(object: Partial<_123.MsgBurn>): _123.MsgBurn;
                fromAmino(object: _123.MsgBurnAmino): _123.MsgBurn;
                toAmino(message: _123.MsgBurn): _123.MsgBurnAmino;
                fromAminoMsg(object: _123.MsgBurnAminoMsg): _123.MsgBurn;
                fromProtoMsg(message: _123.MsgBurnProtoMsg): _123.MsgBurn;
                toProto(message: _123.MsgBurn): Uint8Array;
                toProtoMsg(message: _123.MsgBurn): _123.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _123.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgBurnResponse;
                fromJSON(_: any): _123.MsgBurnResponse;
                toJSON(_: _123.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_123.MsgBurnResponse>): _123.MsgBurnResponse;
                fromAmino(_: _123.MsgBurnResponseAmino): _123.MsgBurnResponse;
                toAmino(_: _123.MsgBurnResponse): _123.MsgBurnResponseAmino;
                fromAminoMsg(object: _123.MsgBurnResponseAminoMsg): _123.MsgBurnResponse;
                fromProtoMsg(message: _123.MsgBurnResponseProtoMsg): _123.MsgBurnResponse;
                toProto(message: _123.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _123.MsgBurnResponse): _123.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _123.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgChangeAdmin;
                fromJSON(object: any): _123.MsgChangeAdmin;
                toJSON(message: _123.MsgChangeAdmin): unknown;
                fromPartial(object: Partial<_123.MsgChangeAdmin>): _123.MsgChangeAdmin;
                fromAmino(object: _123.MsgChangeAdminAmino): _123.MsgChangeAdmin;
                toAmino(message: _123.MsgChangeAdmin): _123.MsgChangeAdminAmino;
                fromAminoMsg(object: _123.MsgChangeAdminAminoMsg): _123.MsgChangeAdmin;
                fromProtoMsg(message: _123.MsgChangeAdminProtoMsg): _123.MsgChangeAdmin;
                toProto(message: _123.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _123.MsgChangeAdmin): _123.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _123.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgChangeAdminResponse;
                fromJSON(_: any): _123.MsgChangeAdminResponse;
                toJSON(_: _123.MsgChangeAdminResponse): unknown;
                fromPartial(_: Partial<_123.MsgChangeAdminResponse>): _123.MsgChangeAdminResponse;
                fromAmino(_: _123.MsgChangeAdminResponseAmino): _123.MsgChangeAdminResponse;
                toAmino(_: _123.MsgChangeAdminResponse): _123.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _123.MsgChangeAdminResponseAminoMsg): _123.MsgChangeAdminResponse;
                fromProtoMsg(message: _123.MsgChangeAdminResponseProtoMsg): _123.MsgChangeAdminResponse;
                toProto(message: _123.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _123.MsgChangeAdminResponse): _123.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _123.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSetDenomMetadata;
                fromJSON(object: any): _123.MsgSetDenomMetadata;
                toJSON(message: _123.MsgSetDenomMetadata): unknown;
                fromPartial(object: Partial<_123.MsgSetDenomMetadata>): _123.MsgSetDenomMetadata;
                fromAmino(object: _123.MsgSetDenomMetadataAmino): _123.MsgSetDenomMetadata;
                toAmino(message: _123.MsgSetDenomMetadata): _123.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _123.MsgSetDenomMetadataAminoMsg): _123.MsgSetDenomMetadata;
                fromProtoMsg(message: _123.MsgSetDenomMetadataProtoMsg): _123.MsgSetDenomMetadata;
                toProto(message: _123.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _123.MsgSetDenomMetadata): _123.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _123.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _123.MsgSetDenomMetadataResponse;
                toJSON(_: _123.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: Partial<_123.MsgSetDenomMetadataResponse>): _123.MsgSetDenomMetadataResponse;
                fromAmino(_: _123.MsgSetDenomMetadataResponseAmino): _123.MsgSetDenomMetadataResponse;
                toAmino(_: _123.MsgSetDenomMetadataResponse): _123.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _123.MsgSetDenomMetadataResponseAminoMsg): _123.MsgSetDenomMetadataResponse;
                fromProtoMsg(message: _123.MsgSetDenomMetadataResponseProtoMsg): _123.MsgSetDenomMetadataResponse;
                toProto(message: _123.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSetDenomMetadataResponse): _123.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _122.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsRequest;
                fromJSON(_: any): _122.QueryParamsRequest;
                toJSON(_: _122.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
                fromAmino(_: _122.QueryParamsRequestAmino): _122.QueryParamsRequest;
                toAmino(_: _122.QueryParamsRequest): _122.QueryParamsRequestAmino;
                fromAminoMsg(object: _122.QueryParamsRequestAminoMsg): _122.QueryParamsRequest;
                fromProtoMsg(message: _122.QueryParamsRequestProtoMsg): _122.QueryParamsRequest;
                toProto(message: _122.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _122.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsResponse;
                fromJSON(object: any): _122.QueryParamsResponse;
                toJSON(message: _122.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
                fromAmino(object: _122.QueryParamsResponseAmino): _122.QueryParamsResponse;
                toAmino(message: _122.QueryParamsResponse): _122.QueryParamsResponseAmino;
                fromAminoMsg(object: _122.QueryParamsResponseAminoMsg): _122.QueryParamsResponse;
                fromProtoMsg(message: _122.QueryParamsResponseProtoMsg): _122.QueryParamsResponse;
                toProto(message: _122.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _122.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _122.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _122.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: Partial<_122.QueryDenomAuthorityMetadataRequest>): _122.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _122.QueryDenomAuthorityMetadataRequestAmino): _122.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _122.QueryDenomAuthorityMetadataRequest): _122.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _122.QueryDenomAuthorityMetadataRequestAminoMsg): _122.QueryDenomAuthorityMetadataRequest;
                fromProtoMsg(message: _122.QueryDenomAuthorityMetadataRequestProtoMsg): _122.QueryDenomAuthorityMetadataRequest;
                toProto(message: _122.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _122.QueryDenomAuthorityMetadataRequest): _122.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _122.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _122.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _122.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: Partial<_122.QueryDenomAuthorityMetadataResponse>): _122.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _122.QueryDenomAuthorityMetadataResponseAmino): _122.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _122.QueryDenomAuthorityMetadataResponse): _122.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _122.QueryDenomAuthorityMetadataResponseAminoMsg): _122.QueryDenomAuthorityMetadataResponse;
                fromProtoMsg(message: _122.QueryDenomAuthorityMetadataResponseProtoMsg): _122.QueryDenomAuthorityMetadataResponse;
                toProto(message: _122.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _122.QueryDenomAuthorityMetadataResponse): _122.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _122.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _122.QueryDenomsFromCreatorRequest;
                toJSON(message: _122.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: Partial<_122.QueryDenomsFromCreatorRequest>): _122.QueryDenomsFromCreatorRequest;
                fromAmino(object: _122.QueryDenomsFromCreatorRequestAmino): _122.QueryDenomsFromCreatorRequest;
                toAmino(message: _122.QueryDenomsFromCreatorRequest): _122.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _122.QueryDenomsFromCreatorRequestAminoMsg): _122.QueryDenomsFromCreatorRequest;
                fromProtoMsg(message: _122.QueryDenomsFromCreatorRequestProtoMsg): _122.QueryDenomsFromCreatorRequest;
                toProto(message: _122.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _122.QueryDenomsFromCreatorRequest): _122.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _122.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _122.QueryDenomsFromCreatorResponse;
                toJSON(message: _122.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: Partial<_122.QueryDenomsFromCreatorResponse>): _122.QueryDenomsFromCreatorResponse;
                fromAmino(object: _122.QueryDenomsFromCreatorResponseAmino): _122.QueryDenomsFromCreatorResponse;
                toAmino(message: _122.QueryDenomsFromCreatorResponse): _122.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _122.QueryDenomsFromCreatorResponseAminoMsg): _122.QueryDenomsFromCreatorResponse;
                fromProtoMsg(message: _122.QueryDenomsFromCreatorResponseProtoMsg): _122.QueryDenomsFromCreatorResponse;
                toProto(message: _122.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _122.QueryDenomsFromCreatorResponse): _122.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _121.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Params;
                fromJSON(_: any): _121.Params;
                toJSON(_: _121.Params): unknown;
                fromPartial(_: Partial<_121.Params>): _121.Params;
                fromAmino(_: _121.ParamsAmino): _121.Params;
                toAmino(_: _121.Params): _121.ParamsAmino;
                fromAminoMsg(object: _121.ParamsAminoMsg): _121.Params;
                fromProtoMsg(message: _121.ParamsProtoMsg): _121.Params;
                toProto(message: _121.Params): Uint8Array;
                toProtoMsg(message: _121.Params): _121.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisState;
                fromJSON(object: any): _120.GenesisState;
                toJSON(message: _120.GenesisState): unknown;
                fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
                fromAmino(object: _120.GenesisStateAmino): _120.GenesisState;
                toAmino(message: _120.GenesisState): _120.GenesisStateAmino;
                fromAminoMsg(object: _120.GenesisStateAminoMsg): _120.GenesisState;
                fromProtoMsg(message: _120.GenesisStateProtoMsg): _120.GenesisState;
                toProto(message: _120.GenesisState): Uint8Array;
                toProtoMsg(message: _120.GenesisState): _120.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _120.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisDenom;
                fromJSON(object: any): _120.GenesisDenom;
                toJSON(message: _120.GenesisDenom): unknown;
                fromPartial(object: Partial<_120.GenesisDenom>): _120.GenesisDenom;
                fromAmino(object: _120.GenesisDenomAmino): _120.GenesisDenom;
                toAmino(message: _120.GenesisDenom): _120.GenesisDenomAmino;
                fromAminoMsg(object: _120.GenesisDenomAminoMsg): _120.GenesisDenom;
                fromProtoMsg(message: _120.GenesisDenomProtoMsg): _120.GenesisDenom;
                toProto(message: _120.GenesisDenom): Uint8Array;
                toProtoMsg(message: _120.GenesisDenom): _120.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _119.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.DenomAuthorityMetadata;
                fromJSON(object: any): _119.DenomAuthorityMetadata;
                toJSON(message: _119.DenomAuthorityMetadata): unknown;
                fromPartial(object: Partial<_119.DenomAuthorityMetadata>): _119.DenomAuthorityMetadata;
                fromAmino(object: _119.DenomAuthorityMetadataAmino): _119.DenomAuthorityMetadata;
                toAmino(message: _119.DenomAuthorityMetadata): _119.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _119.DenomAuthorityMetadataAminoMsg): _119.DenomAuthorityMetadata;
                fromProtoMsg(message: _119.DenomAuthorityMetadataProtoMsg): _119.DenomAuthorityMetadata;
                toProto(message: _119.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _119.DenomAuthorityMetadata): _119.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            seiprotocol: {
                seichain: {
                    dex: _236.MsgClientImpl;
                    oracle: _237.MsgClientImpl;
                    tokenfactory: _239.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            seiprotocol: {
                seichain: {
                    dex: {
                        params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                        longBook(request: _82.QueryGetLongBookRequest): Promise<_82.QueryGetLongBookResponse>;
                        longBookAll(request: _82.QueryAllLongBookRequest): Promise<_82.QueryAllLongBookResponse>;
                        shortBook(request: _82.QueryGetShortBookRequest): Promise<_82.QueryGetShortBookResponse>;
                        shortBookAll(request: _82.QueryAllShortBookRequest): Promise<_82.QueryAllShortBookResponse>;
                        getPrice(request: _82.QueryGetPriceRequest): Promise<_82.QueryGetPriceResponse>;
                        getLatestPrice(request: _82.QueryGetLatestPriceRequest): Promise<_82.QueryGetLatestPriceResponse>;
                        getPrices(request: _82.QueryGetPricesRequest): Promise<_82.QueryGetPricesResponse>;
                        getTwaps(request: _82.QueryGetTwapsRequest): Promise<_82.QueryGetTwapsResponse>;
                        assetMetadata(request: _82.QueryAssetMetadataRequest): Promise<_82.QueryAssetMetadataResponse>;
                        assetList(request?: _82.QueryAssetListRequest): Promise<_82.QueryAssetListResponse>;
                        getRegisteredPairs(request: _82.QueryRegisteredPairsRequest): Promise<_82.QueryRegisteredPairsResponse>;
                        getRegisteredContract(request: _82.QueryRegisteredContractRequest): Promise<_82.QueryRegisteredContractResponse>;
                        getOrders(request: _82.QueryGetOrdersRequest): Promise<_82.QueryGetOrdersResponse>;
                        getOrder(request: _82.QueryGetOrderByIDRequest): Promise<_82.QueryGetOrderByIDResponse>;
                        getHistoricalPrices(request: _82.QueryGetHistoricalPricesRequest): Promise<_82.QueryGetHistoricalPricesResponse>;
                        getMarketSummary(request: _82.QueryGetMarketSummaryRequest): Promise<_82.QueryGetMarketSummaryResponse>;
                        getOrderSimulation(request: _82.QueryOrderSimulationRequest): Promise<_82.QueryOrderSimulationResponse>;
                        getMatchResult(request: _82.QueryGetMatchResultRequest): Promise<_82.QueryGetMatchResultResponse>;
                        getOrderCount(request: _82.QueryGetOrderCountRequest): Promise<_82.QueryGetOrderCountResponse>;
                    };
                    epoch: {
                        epoch(request?: _96.QueryEpochRequest): Promise<_96.QueryEpochResponse>;
                        params(request?: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
                    };
                    mint: {
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        minter(request?: _105.QueryMinterRequest): Promise<_105.QueryMinterResponse>;
                    };
                    oracle: {
                        exchangeRate(request: _112.QueryExchangeRateRequest): Promise<_112.QueryExchangeRateResponse>;
                        exchangeRates(request?: _112.QueryExchangeRatesRequest): Promise<_112.QueryExchangeRatesResponse>;
                        actives(request?: _112.QueryActivesRequest): Promise<_112.QueryActivesResponse>;
                        voteTargets(request?: _112.QueryVoteTargetsRequest): Promise<_112.QueryVoteTargetsResponse>;
                        priceSnapshotHistory(request?: _112.QueryPriceSnapshotHistoryRequest): Promise<_112.QueryPriceSnapshotHistoryResponse>;
                        twaps(request: _112.QueryTwapsRequest): Promise<_112.QueryTwapsResponse>;
                        feederDelegation(request: _112.QueryFeederDelegationRequest): Promise<_112.QueryFeederDelegationResponse>;
                        votePenaltyCounter(request: _112.QueryVotePenaltyCounterRequest): Promise<_112.QueryVotePenaltyCounterResponse>;
                        slashWindow(request?: _112.QuerySlashWindowRequest): Promise<_112.QuerySlashWindowResponse>;
                        params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                    };
                    tokenfactory: {
                        params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _122.QueryDenomAuthorityMetadataRequest): Promise<_122.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _122.QueryDenomsFromCreatorRequest): Promise<_122.QueryDenomsFromCreatorResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            seiprotocol: {
                seichain: {
                    dex: _218.LCDQueryClient;
                    epoch: _219.LCDQueryClient;
                    mint: _220.LCDQueryClient;
                    oracle: _221.LCDQueryClient;
                    tokenfactory: _223.LCDQueryClient;
                };
            };
        }>;
    };
}
