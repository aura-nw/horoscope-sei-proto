import * as _78 from "./seichain/dex/asset_list";
import * as _79 from "./seichain/dex/contract";
import * as _80 from "./seichain/dex/deposit";
import * as _81 from "./seichain/dex/enums";
import * as _82 from "./seichain/dex/genesis";
import * as _83 from "./seichain/dex/gov";
import * as _84 from "./seichain/dex/long_book";
import * as _85 from "./seichain/dex/match_result";
import * as _86 from "./seichain/dex/order_entry";
import * as _87 from "./seichain/dex/order";
import * as _88 from "./seichain/dex/pair";
import * as _89 from "./seichain/dex/params";
import * as _90 from "./seichain/dex/price";
import * as _91 from "./seichain/dex/query";
import * as _92 from "./seichain/dex/settlement";
import * as _93 from "./seichain/dex/short_book";
import * as _94 from "./seichain/dex/tick_size";
import * as _95 from "./seichain/dex/twap";
import * as _96 from "./seichain/dex/tx";
import * as _97 from "./seichain/epoch/epoch";
import * as _98 from "./seichain/epoch/genesis";
import * as _99 from "./seichain/epoch/params";
import * as _100 from "./seichain/epoch/query";
import * as _102 from "./seichain/mint/v1beta1/genesis";
import * as _103 from "./seichain/mint/v1beta1/gov";
import * as _104 from "./seichain/mint/v1beta1/mint";
import * as _105 from "./seichain/mint/v1beta1/query";
import * as _106 from "./seichain/oracle/genesis";
import * as _107 from "./seichain/oracle/oracle";
import * as _108 from "./seichain/oracle/query";
import * as _109 from "./seichain/oracle/tx";
import * as _110 from "./seichain/tokenfactory/authorityMetadata";
import * as _111 from "./seichain/tokenfactory/genesis";
import * as _112 from "./seichain/tokenfactory/params";
import * as _113 from "./seichain/tokenfactory/query";
import * as _114 from "./seichain/tokenfactory/tx";
import * as _191 from "./seichain/dex/query.lcd";
import * as _192 from "./seichain/epoch/query.lcd";
import * as _193 from "./seichain/mint/v1beta1/query.lcd";
import * as _194 from "./seichain/oracle/query.lcd";
import * as _195 from "./seichain/tokenfactory/query.lcd";
import * as _196 from "./seichain/dex/query.rpc.Query";
import * as _197 from "./seichain/epoch/query.rpc.Query";
import * as _198 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _199 from "./seichain/oracle/query.rpc.Query";
import * as _200 from "./seichain/tokenfactory/query.rpc.Query";
import * as _201 from "./seichain/dex/tx.rpc.msg";
import * as _202 from "./seichain/oracle/tx.rpc.msg";
import * as _203 from "./seichain/tokenfactory/tx.rpc.msg";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                longBook(request: _91.QueryGetLongBookRequest): Promise<_91.QueryGetLongBookResponse>;
                longBookAll(request: _91.QueryAllLongBookRequest): Promise<_91.QueryAllLongBookResponse>;
                shortBook(request: _91.QueryGetShortBookRequest): Promise<_91.QueryGetShortBookResponse>;
                shortBookAll(request: _91.QueryAllShortBookRequest): Promise<_91.QueryAllShortBookResponse>;
                getPrice(request: _91.QueryGetPriceRequest): Promise<_91.QueryGetPriceResponse>;
                getLatestPrice(request: _91.QueryGetLatestPriceRequest): Promise<_91.QueryGetLatestPriceResponse>;
                getPrices(request: _91.QueryGetPricesRequest): Promise<_91.QueryGetPricesResponse>;
                getTwaps(request: _91.QueryGetTwapsRequest): Promise<_91.QueryGetTwapsResponse>;
                assetMetadata(request: _91.QueryAssetMetadataRequest): Promise<_91.QueryAssetMetadataResponse>;
                assetList(request?: _91.QueryAssetListRequest): Promise<_91.QueryAssetListResponse>;
                getRegisteredPairs(request: _91.QueryRegisteredPairsRequest): Promise<_91.QueryRegisteredPairsResponse>;
                getRegisteredContract(request: _91.QueryRegisteredContractRequest): Promise<_91.QueryRegisteredContractResponse>;
                getOrders(request: _91.QueryGetOrdersRequest): Promise<_91.QueryGetOrdersResponse>;
                getOrder(request: _91.QueryGetOrderByIDRequest): Promise<_91.QueryGetOrderByIDResponse>;
                getHistoricalPrices(request: _91.QueryGetHistoricalPricesRequest): Promise<_91.QueryGetHistoricalPricesResponse>;
                getMarketSummary(request: _91.QueryGetMarketSummaryRequest): Promise<_91.QueryGetMarketSummaryResponse>;
                getOrderSimulation(request: _91.QueryOrderSimulationRequest): Promise<_91.QueryOrderSimulationResponse>;
                getMatchResult(request: _91.QueryGetMatchResultRequest): Promise<_91.QueryGetMatchResultResponse>;
                getOrderCount(request: _91.QueryGetOrderCountRequest): Promise<_91.QueryGetOrderCountResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeOrders(value: _96.MsgPlaceOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrders(value: _96.MsgCancelOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _96.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    contractDepositRent(value: _96.MsgContractDepositRent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterContract(value: _96.MsgUnregisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerPairs(value: _96.MsgRegisterPairs): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePriceTickSize(value: _96.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateQuantityTickSize(value: _96.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unsuspendContract(value: _96.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeOrders(value: _96.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _96.MsgPlaceOrders;
                    };
                    cancelOrders(value: _96.MsgCancelOrders): {
                        typeUrl: string;
                        value: _96.MsgCancelOrders;
                    };
                    registerContract(value: _96.MsgRegisterContract): {
                        typeUrl: string;
                        value: _96.MsgRegisterContract;
                    };
                    contractDepositRent(value: _96.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _96.MsgContractDepositRent;
                    };
                    unregisterContract(value: _96.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _96.MsgUnregisterContract;
                    };
                    registerPairs(value: _96.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _96.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _96.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _96.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _96.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _96.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _96.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _96.MsgUnsuspendContract;
                    };
                };
                toJSON: {
                    placeOrders(value: _96.MsgPlaceOrders): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelOrders(value: _96.MsgCancelOrders): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerContract(value: _96.MsgRegisterContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    contractDepositRent(value: _96.MsgContractDepositRent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unregisterContract(value: _96.MsgUnregisterContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerPairs(value: _96.MsgRegisterPairs): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePriceTickSize(value: _96.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateQuantityTickSize(value: _96.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unsuspendContract(value: _96.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    placeOrders(value: any): {
                        typeUrl: string;
                        value: _96.MsgPlaceOrders;
                    };
                    cancelOrders(value: any): {
                        typeUrl: string;
                        value: _96.MsgCancelOrders;
                    };
                    registerContract(value: any): {
                        typeUrl: string;
                        value: _96.MsgRegisterContract;
                    };
                    contractDepositRent(value: any): {
                        typeUrl: string;
                        value: _96.MsgContractDepositRent;
                    };
                    unregisterContract(value: any): {
                        typeUrl: string;
                        value: _96.MsgUnregisterContract;
                    };
                    registerPairs(value: any): {
                        typeUrl: string;
                        value: _96.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: any): {
                        typeUrl: string;
                        value: _96.MsgUnsuspendContract;
                    };
                };
                fromPartial: {
                    placeOrders(value: _96.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _96.MsgPlaceOrders;
                    };
                    cancelOrders(value: _96.MsgCancelOrders): {
                        typeUrl: string;
                        value: _96.MsgCancelOrders;
                    };
                    registerContract(value: _96.MsgRegisterContract): {
                        typeUrl: string;
                        value: _96.MsgRegisterContract;
                    };
                    contractDepositRent(value: _96.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _96.MsgContractDepositRent;
                    };
                    unregisterContract(value: _96.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _96.MsgUnregisterContract;
                    };
                    registerPairs(value: _96.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _96.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _96.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _96.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _96.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _96.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _96.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _96.MsgUnsuspendContract;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.dex.MsgPlaceOrders": {
                    aminoType: string;
                    toAmino: (message: _96.MsgPlaceOrders) => _96.MsgPlaceOrdersAmino;
                    fromAmino: (object: _96.MsgPlaceOrdersAmino) => _96.MsgPlaceOrders;
                };
                "/seiprotocol.seichain.dex.MsgCancelOrders": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCancelOrders) => _96.MsgCancelOrdersAmino;
                    fromAmino: (object: _96.MsgCancelOrdersAmino) => _96.MsgCancelOrders;
                };
                "/seiprotocol.seichain.dex.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: (message: _96.MsgRegisterContract) => _96.MsgRegisterContractAmino;
                    fromAmino: (object: _96.MsgRegisterContractAmino) => _96.MsgRegisterContract;
                };
                "/seiprotocol.seichain.dex.MsgContractDepositRent": {
                    aminoType: string;
                    toAmino: (message: _96.MsgContractDepositRent) => _96.MsgContractDepositRentAmino;
                    fromAmino: (object: _96.MsgContractDepositRentAmino) => _96.MsgContractDepositRent;
                };
                "/seiprotocol.seichain.dex.MsgUnregisterContract": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUnregisterContract) => _96.MsgUnregisterContractAmino;
                    fromAmino: (object: _96.MsgUnregisterContractAmino) => _96.MsgUnregisterContract;
                };
                "/seiprotocol.seichain.dex.MsgRegisterPairs": {
                    aminoType: string;
                    toAmino: (message: _96.MsgRegisterPairs) => _96.MsgRegisterPairsAmino;
                    fromAmino: (object: _96.MsgRegisterPairsAmino) => _96.MsgRegisterPairs;
                };
                "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdatePriceTickSize) => _96.MsgUpdatePriceTickSizeAmino;
                    fromAmino: (object: _96.MsgUpdatePriceTickSizeAmino) => _96.MsgUpdatePriceTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdateQuantityTickSize) => _96.MsgUpdateQuantityTickSizeAmino;
                    fromAmino: (object: _96.MsgUpdateQuantityTickSizeAmino) => _96.MsgUpdateQuantityTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUnsuspendContract) => _96.MsgUnsuspendContractAmino;
                    fromAmino: (object: _96.MsgUnsuspendContractAmino) => _96.MsgUnsuspendContract;
                };
            };
            MsgPlaceOrders: {
                typeUrl: string;
                encode(message: _96.MsgPlaceOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgPlaceOrders;
                fromJSON(object: any): _96.MsgPlaceOrders;
                toJSON(message: _96.MsgPlaceOrders): unknown;
                fromPartial(object: Partial<_96.MsgPlaceOrders>): _96.MsgPlaceOrders;
                fromAmino(object: _96.MsgPlaceOrdersAmino): _96.MsgPlaceOrders;
                toAmino(message: _96.MsgPlaceOrders): _96.MsgPlaceOrdersAmino;
                fromAminoMsg(object: _96.MsgPlaceOrdersAminoMsg): _96.MsgPlaceOrders;
                fromProtoMsg(message: _96.MsgPlaceOrdersProtoMsg): _96.MsgPlaceOrders;
                toProto(message: _96.MsgPlaceOrders): Uint8Array;
                toProtoMsg(message: _96.MsgPlaceOrders): _96.MsgPlaceOrdersProtoMsg;
            };
            MsgPlaceOrdersResponse: {
                typeUrl: string;
                encode(message: _96.MsgPlaceOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgPlaceOrdersResponse;
                fromJSON(object: any): _96.MsgPlaceOrdersResponse;
                toJSON(message: _96.MsgPlaceOrdersResponse): unknown;
                fromPartial(object: Partial<_96.MsgPlaceOrdersResponse>): _96.MsgPlaceOrdersResponse;
                fromAmino(object: _96.MsgPlaceOrdersResponseAmino): _96.MsgPlaceOrdersResponse;
                toAmino(message: _96.MsgPlaceOrdersResponse): _96.MsgPlaceOrdersResponseAmino;
                fromAminoMsg(object: _96.MsgPlaceOrdersResponseAminoMsg): _96.MsgPlaceOrdersResponse;
                fromProtoMsg(message: _96.MsgPlaceOrdersResponseProtoMsg): _96.MsgPlaceOrdersResponse;
                toProto(message: _96.MsgPlaceOrdersResponse): Uint8Array;
                toProtoMsg(message: _96.MsgPlaceOrdersResponse): _96.MsgPlaceOrdersResponseProtoMsg;
            };
            MsgCancelOrders: {
                typeUrl: string;
                encode(message: _96.MsgCancelOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCancelOrders;
                fromJSON(object: any): _96.MsgCancelOrders;
                toJSON(message: _96.MsgCancelOrders): unknown;
                fromPartial(object: Partial<_96.MsgCancelOrders>): _96.MsgCancelOrders;
                fromAmino(object: _96.MsgCancelOrdersAmino): _96.MsgCancelOrders;
                toAmino(message: _96.MsgCancelOrders): _96.MsgCancelOrdersAmino;
                fromAminoMsg(object: _96.MsgCancelOrdersAminoMsg): _96.MsgCancelOrders;
                fromProtoMsg(message: _96.MsgCancelOrdersProtoMsg): _96.MsgCancelOrders;
                toProto(message: _96.MsgCancelOrders): Uint8Array;
                toProtoMsg(message: _96.MsgCancelOrders): _96.MsgCancelOrdersProtoMsg;
            };
            MsgCancelOrdersResponse: {
                typeUrl: string;
                encode(_: _96.MsgCancelOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCancelOrdersResponse;
                fromJSON(_: any): _96.MsgCancelOrdersResponse;
                toJSON(_: _96.MsgCancelOrdersResponse): unknown;
                fromPartial(_: Partial<_96.MsgCancelOrdersResponse>): _96.MsgCancelOrdersResponse;
                fromAmino(_: _96.MsgCancelOrdersResponseAmino): _96.MsgCancelOrdersResponse;
                toAmino(_: _96.MsgCancelOrdersResponse): _96.MsgCancelOrdersResponseAmino;
                fromAminoMsg(object: _96.MsgCancelOrdersResponseAminoMsg): _96.MsgCancelOrdersResponse;
                fromProtoMsg(message: _96.MsgCancelOrdersResponseProtoMsg): _96.MsgCancelOrdersResponse;
                toProto(message: _96.MsgCancelOrdersResponse): Uint8Array;
                toProtoMsg(message: _96.MsgCancelOrdersResponse): _96.MsgCancelOrdersResponseProtoMsg;
            };
            MsgRegisterContract: {
                typeUrl: string;
                encode(message: _96.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgRegisterContract;
                fromJSON(object: any): _96.MsgRegisterContract;
                toJSON(message: _96.MsgRegisterContract): unknown;
                fromPartial(object: Partial<_96.MsgRegisterContract>): _96.MsgRegisterContract;
                fromAmino(object: _96.MsgRegisterContractAmino): _96.MsgRegisterContract;
                toAmino(message: _96.MsgRegisterContract): _96.MsgRegisterContractAmino;
                fromAminoMsg(object: _96.MsgRegisterContractAminoMsg): _96.MsgRegisterContract;
                fromProtoMsg(message: _96.MsgRegisterContractProtoMsg): _96.MsgRegisterContract;
                toProto(message: _96.MsgRegisterContract): Uint8Array;
                toProtoMsg(message: _96.MsgRegisterContract): _96.MsgRegisterContractProtoMsg;
            };
            MsgRegisterContractResponse: {
                typeUrl: string;
                encode(_: _96.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgRegisterContractResponse;
                fromJSON(_: any): _96.MsgRegisterContractResponse;
                toJSON(_: _96.MsgRegisterContractResponse): unknown;
                fromPartial(_: Partial<_96.MsgRegisterContractResponse>): _96.MsgRegisterContractResponse;
                fromAmino(_: _96.MsgRegisterContractResponseAmino): _96.MsgRegisterContractResponse;
                toAmino(_: _96.MsgRegisterContractResponse): _96.MsgRegisterContractResponseAmino;
                fromAminoMsg(object: _96.MsgRegisterContractResponseAminoMsg): _96.MsgRegisterContractResponse;
                fromProtoMsg(message: _96.MsgRegisterContractResponseProtoMsg): _96.MsgRegisterContractResponse;
                toProto(message: _96.MsgRegisterContractResponse): Uint8Array;
                toProtoMsg(message: _96.MsgRegisterContractResponse): _96.MsgRegisterContractResponseProtoMsg;
            };
            MsgContractDepositRent: {
                typeUrl: string;
                encode(message: _96.MsgContractDepositRent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgContractDepositRent;
                fromJSON(object: any): _96.MsgContractDepositRent;
                toJSON(message: _96.MsgContractDepositRent): unknown;
                fromPartial(object: Partial<_96.MsgContractDepositRent>): _96.MsgContractDepositRent;
                fromAmino(object: _96.MsgContractDepositRentAmino): _96.MsgContractDepositRent;
                toAmino(message: _96.MsgContractDepositRent): _96.MsgContractDepositRentAmino;
                fromAminoMsg(object: _96.MsgContractDepositRentAminoMsg): _96.MsgContractDepositRent;
                fromProtoMsg(message: _96.MsgContractDepositRentProtoMsg): _96.MsgContractDepositRent;
                toProto(message: _96.MsgContractDepositRent): Uint8Array;
                toProtoMsg(message: _96.MsgContractDepositRent): _96.MsgContractDepositRentProtoMsg;
            };
            MsgContractDepositRentResponse: {
                typeUrl: string;
                encode(_: _96.MsgContractDepositRentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgContractDepositRentResponse;
                fromJSON(_: any): _96.MsgContractDepositRentResponse;
                toJSON(_: _96.MsgContractDepositRentResponse): unknown;
                fromPartial(_: Partial<_96.MsgContractDepositRentResponse>): _96.MsgContractDepositRentResponse;
                fromAmino(_: _96.MsgContractDepositRentResponseAmino): _96.MsgContractDepositRentResponse;
                toAmino(_: _96.MsgContractDepositRentResponse): _96.MsgContractDepositRentResponseAmino;
                fromAminoMsg(object: _96.MsgContractDepositRentResponseAminoMsg): _96.MsgContractDepositRentResponse;
                fromProtoMsg(message: _96.MsgContractDepositRentResponseProtoMsg): _96.MsgContractDepositRentResponse;
                toProto(message: _96.MsgContractDepositRentResponse): Uint8Array;
                toProtoMsg(message: _96.MsgContractDepositRentResponse): _96.MsgContractDepositRentResponseProtoMsg;
            };
            MsgUnregisterContract: {
                typeUrl: string;
                encode(message: _96.MsgUnregisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUnregisterContract;
                fromJSON(object: any): _96.MsgUnregisterContract;
                toJSON(message: _96.MsgUnregisterContract): unknown;
                fromPartial(object: Partial<_96.MsgUnregisterContract>): _96.MsgUnregisterContract;
                fromAmino(object: _96.MsgUnregisterContractAmino): _96.MsgUnregisterContract;
                toAmino(message: _96.MsgUnregisterContract): _96.MsgUnregisterContractAmino;
                fromAminoMsg(object: _96.MsgUnregisterContractAminoMsg): _96.MsgUnregisterContract;
                fromProtoMsg(message: _96.MsgUnregisterContractProtoMsg): _96.MsgUnregisterContract;
                toProto(message: _96.MsgUnregisterContract): Uint8Array;
                toProtoMsg(message: _96.MsgUnregisterContract): _96.MsgUnregisterContractProtoMsg;
            };
            MsgUnregisterContractResponse: {
                typeUrl: string;
                encode(_: _96.MsgUnregisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUnregisterContractResponse;
                fromJSON(_: any): _96.MsgUnregisterContractResponse;
                toJSON(_: _96.MsgUnregisterContractResponse): unknown;
                fromPartial(_: Partial<_96.MsgUnregisterContractResponse>): _96.MsgUnregisterContractResponse;
                fromAmino(_: _96.MsgUnregisterContractResponseAmino): _96.MsgUnregisterContractResponse;
                toAmino(_: _96.MsgUnregisterContractResponse): _96.MsgUnregisterContractResponseAmino;
                fromAminoMsg(object: _96.MsgUnregisterContractResponseAminoMsg): _96.MsgUnregisterContractResponse;
                fromProtoMsg(message: _96.MsgUnregisterContractResponseProtoMsg): _96.MsgUnregisterContractResponse;
                toProto(message: _96.MsgUnregisterContractResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUnregisterContractResponse): _96.MsgUnregisterContractResponseProtoMsg;
            };
            MsgRegisterPairs: {
                typeUrl: string;
                encode(message: _96.MsgRegisterPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgRegisterPairs;
                fromJSON(object: any): _96.MsgRegisterPairs;
                toJSON(message: _96.MsgRegisterPairs): unknown;
                fromPartial(object: Partial<_96.MsgRegisterPairs>): _96.MsgRegisterPairs;
                fromAmino(object: _96.MsgRegisterPairsAmino): _96.MsgRegisterPairs;
                toAmino(message: _96.MsgRegisterPairs): _96.MsgRegisterPairsAmino;
                fromAminoMsg(object: _96.MsgRegisterPairsAminoMsg): _96.MsgRegisterPairs;
                fromProtoMsg(message: _96.MsgRegisterPairsProtoMsg): _96.MsgRegisterPairs;
                toProto(message: _96.MsgRegisterPairs): Uint8Array;
                toProtoMsg(message: _96.MsgRegisterPairs): _96.MsgRegisterPairsProtoMsg;
            };
            MsgRegisterPairsResponse: {
                typeUrl: string;
                encode(_: _96.MsgRegisterPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgRegisterPairsResponse;
                fromJSON(_: any): _96.MsgRegisterPairsResponse;
                toJSON(_: _96.MsgRegisterPairsResponse): unknown;
                fromPartial(_: Partial<_96.MsgRegisterPairsResponse>): _96.MsgRegisterPairsResponse;
                fromAmino(_: _96.MsgRegisterPairsResponseAmino): _96.MsgRegisterPairsResponse;
                toAmino(_: _96.MsgRegisterPairsResponse): _96.MsgRegisterPairsResponseAmino;
                fromAminoMsg(object: _96.MsgRegisterPairsResponseAminoMsg): _96.MsgRegisterPairsResponse;
                fromProtoMsg(message: _96.MsgRegisterPairsResponseProtoMsg): _96.MsgRegisterPairsResponse;
                toProto(message: _96.MsgRegisterPairsResponse): Uint8Array;
                toProtoMsg(message: _96.MsgRegisterPairsResponse): _96.MsgRegisterPairsResponseProtoMsg;
            };
            MsgUpdatePriceTickSize: {
                typeUrl: string;
                encode(message: _96.MsgUpdatePriceTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUpdatePriceTickSize;
                fromJSON(object: any): _96.MsgUpdatePriceTickSize;
                toJSON(message: _96.MsgUpdatePriceTickSize): unknown;
                fromPartial(object: Partial<_96.MsgUpdatePriceTickSize>): _96.MsgUpdatePriceTickSize;
                fromAmino(object: _96.MsgUpdatePriceTickSizeAmino): _96.MsgUpdatePriceTickSize;
                toAmino(message: _96.MsgUpdatePriceTickSize): _96.MsgUpdatePriceTickSizeAmino;
                fromAminoMsg(object: _96.MsgUpdatePriceTickSizeAminoMsg): _96.MsgUpdatePriceTickSize;
                fromProtoMsg(message: _96.MsgUpdatePriceTickSizeProtoMsg): _96.MsgUpdatePriceTickSize;
                toProto(message: _96.MsgUpdatePriceTickSize): Uint8Array;
                toProtoMsg(message: _96.MsgUpdatePriceTickSize): _96.MsgUpdatePriceTickSizeProtoMsg;
            };
            MsgUpdateQuantityTickSize: {
                typeUrl: string;
                encode(message: _96.MsgUpdateQuantityTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUpdateQuantityTickSize;
                fromJSON(object: any): _96.MsgUpdateQuantityTickSize;
                toJSON(message: _96.MsgUpdateQuantityTickSize): unknown;
                fromPartial(object: Partial<_96.MsgUpdateQuantityTickSize>): _96.MsgUpdateQuantityTickSize;
                fromAmino(object: _96.MsgUpdateQuantityTickSizeAmino): _96.MsgUpdateQuantityTickSize;
                toAmino(message: _96.MsgUpdateQuantityTickSize): _96.MsgUpdateQuantityTickSizeAmino;
                fromAminoMsg(object: _96.MsgUpdateQuantityTickSizeAminoMsg): _96.MsgUpdateQuantityTickSize;
                fromProtoMsg(message: _96.MsgUpdateQuantityTickSizeProtoMsg): _96.MsgUpdateQuantityTickSize;
                toProto(message: _96.MsgUpdateQuantityTickSize): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateQuantityTickSize): _96.MsgUpdateQuantityTickSizeProtoMsg;
            };
            MsgUpdateTickSizeResponse: {
                typeUrl: string;
                encode(_: _96.MsgUpdateTickSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUpdateTickSizeResponse;
                fromJSON(_: any): _96.MsgUpdateTickSizeResponse;
                toJSON(_: _96.MsgUpdateTickSizeResponse): unknown;
                fromPartial(_: Partial<_96.MsgUpdateTickSizeResponse>): _96.MsgUpdateTickSizeResponse;
                fromAmino(_: _96.MsgUpdateTickSizeResponseAmino): _96.MsgUpdateTickSizeResponse;
                toAmino(_: _96.MsgUpdateTickSizeResponse): _96.MsgUpdateTickSizeResponseAmino;
                fromAminoMsg(object: _96.MsgUpdateTickSizeResponseAminoMsg): _96.MsgUpdateTickSizeResponse;
                fromProtoMsg(message: _96.MsgUpdateTickSizeResponseProtoMsg): _96.MsgUpdateTickSizeResponse;
                toProto(message: _96.MsgUpdateTickSizeResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateTickSizeResponse): _96.MsgUpdateTickSizeResponseProtoMsg;
            };
            MsgUnsuspendContract: {
                typeUrl: string;
                encode(message: _96.MsgUnsuspendContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUnsuspendContract;
                fromJSON(object: any): _96.MsgUnsuspendContract;
                toJSON(message: _96.MsgUnsuspendContract): unknown;
                fromPartial(object: Partial<_96.MsgUnsuspendContract>): _96.MsgUnsuspendContract;
                fromAmino(object: _96.MsgUnsuspendContractAmino): _96.MsgUnsuspendContract;
                toAmino(message: _96.MsgUnsuspendContract): _96.MsgUnsuspendContractAmino;
                fromAminoMsg(object: _96.MsgUnsuspendContractAminoMsg): _96.MsgUnsuspendContract;
                fromProtoMsg(message: _96.MsgUnsuspendContractProtoMsg): _96.MsgUnsuspendContract;
                toProto(message: _96.MsgUnsuspendContract): Uint8Array;
                toProtoMsg(message: _96.MsgUnsuspendContract): _96.MsgUnsuspendContractProtoMsg;
            };
            MsgUnsuspendContractResponse: {
                typeUrl: string;
                encode(_: _96.MsgUnsuspendContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUnsuspendContractResponse;
                fromJSON(_: any): _96.MsgUnsuspendContractResponse;
                toJSON(_: _96.MsgUnsuspendContractResponse): unknown;
                fromPartial(_: Partial<_96.MsgUnsuspendContractResponse>): _96.MsgUnsuspendContractResponse;
                fromAmino(_: _96.MsgUnsuspendContractResponseAmino): _96.MsgUnsuspendContractResponse;
                toAmino(_: _96.MsgUnsuspendContractResponse): _96.MsgUnsuspendContractResponseAmino;
                fromAminoMsg(object: _96.MsgUnsuspendContractResponseAminoMsg): _96.MsgUnsuspendContractResponse;
                fromProtoMsg(message: _96.MsgUnsuspendContractResponseProtoMsg): _96.MsgUnsuspendContractResponse;
                toProto(message: _96.MsgUnsuspendContractResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUnsuspendContractResponse): _96.MsgUnsuspendContractResponseProtoMsg;
            };
            Twap: {
                typeUrl: string;
                encode(message: _95.Twap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Twap;
                fromJSON(object: any): _95.Twap;
                toJSON(message: _95.Twap): unknown;
                fromPartial(object: Partial<_95.Twap>): _95.Twap;
                fromAmino(object: _95.TwapAmino): _95.Twap;
                toAmino(message: _95.Twap): _95.TwapAmino;
                fromAminoMsg(object: _95.TwapAminoMsg): _95.Twap;
                fromProtoMsg(message: _95.TwapProtoMsg): _95.Twap;
                toProto(message: _95.Twap): Uint8Array;
                toProtoMsg(message: _95.Twap): _95.TwapProtoMsg;
            };
            TickSize: {
                typeUrl: string;
                encode(message: _94.TickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.TickSize;
                fromJSON(object: any): _94.TickSize;
                toJSON(message: _94.TickSize): unknown;
                fromPartial(object: Partial<_94.TickSize>): _94.TickSize;
                fromAmino(object: _94.TickSizeAmino): _94.TickSize;
                toAmino(message: _94.TickSize): _94.TickSizeAmino;
                fromAminoMsg(object: _94.TickSizeAminoMsg): _94.TickSize;
                fromProtoMsg(message: _94.TickSizeProtoMsg): _94.TickSize;
                toProto(message: _94.TickSize): Uint8Array;
                toProtoMsg(message: _94.TickSize): _94.TickSizeProtoMsg;
            };
            ShortBook: {
                typeUrl: string;
                encode(message: _93.ShortBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ShortBook;
                fromJSON(object: any): _93.ShortBook;
                toJSON(message: _93.ShortBook): unknown;
                fromPartial(object: Partial<_93.ShortBook>): _93.ShortBook;
                fromAmino(object: _93.ShortBookAmino): _93.ShortBook;
                toAmino(message: _93.ShortBook): _93.ShortBookAmino;
                fromAminoMsg(object: _93.ShortBookAminoMsg): _93.ShortBook;
                fromProtoMsg(message: _93.ShortBookProtoMsg): _93.ShortBook;
                toProto(message: _93.ShortBook): Uint8Array;
                toProtoMsg(message: _93.ShortBook): _93.ShortBookProtoMsg;
            };
            SettlementEntry: {
                typeUrl: string;
                encode(message: _92.SettlementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SettlementEntry;
                fromJSON(object: any): _92.SettlementEntry;
                toJSON(message: _92.SettlementEntry): unknown;
                fromPartial(object: Partial<_92.SettlementEntry>): _92.SettlementEntry;
                fromAmino(object: _92.SettlementEntryAmino): _92.SettlementEntry;
                toAmino(message: _92.SettlementEntry): _92.SettlementEntryAmino;
                fromAminoMsg(object: _92.SettlementEntryAminoMsg): _92.SettlementEntry;
                fromProtoMsg(message: _92.SettlementEntryProtoMsg): _92.SettlementEntry;
                toProto(message: _92.SettlementEntry): Uint8Array;
                toProtoMsg(message: _92.SettlementEntry): _92.SettlementEntryProtoMsg;
            };
            Settlements: {
                typeUrl: string;
                encode(message: _92.Settlements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Settlements;
                fromJSON(object: any): _92.Settlements;
                toJSON(message: _92.Settlements): unknown;
                fromPartial(object: Partial<_92.Settlements>): _92.Settlements;
                fromAmino(object: _92.SettlementsAmino): _92.Settlements;
                toAmino(message: _92.Settlements): _92.SettlementsAmino;
                fromAminoMsg(object: _92.SettlementsAminoMsg): _92.Settlements;
                fromProtoMsg(message: _92.SettlementsProtoMsg): _92.Settlements;
                toProto(message: _92.Settlements): Uint8Array;
                toProtoMsg(message: _92.Settlements): _92.SettlementsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _91.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsRequest;
                fromJSON(_: any): _91.QueryParamsRequest;
                toJSON(_: _91.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_91.QueryParamsRequest>): _91.QueryParamsRequest;
                fromAmino(_: _91.QueryParamsRequestAmino): _91.QueryParamsRequest;
                toAmino(_: _91.QueryParamsRequest): _91.QueryParamsRequestAmino;
                fromAminoMsg(object: _91.QueryParamsRequestAminoMsg): _91.QueryParamsRequest;
                fromProtoMsg(message: _91.QueryParamsRequestProtoMsg): _91.QueryParamsRequest;
                toProto(message: _91.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _91.QueryParamsRequest): _91.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _91.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsResponse;
                fromJSON(object: any): _91.QueryParamsResponse;
                toJSON(message: _91.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_91.QueryParamsResponse>): _91.QueryParamsResponse;
                fromAmino(object: _91.QueryParamsResponseAmino): _91.QueryParamsResponse;
                toAmino(message: _91.QueryParamsResponse): _91.QueryParamsResponseAmino;
                fromAminoMsg(object: _91.QueryParamsResponseAminoMsg): _91.QueryParamsResponse;
                fromProtoMsg(message: _91.QueryParamsResponseProtoMsg): _91.QueryParamsResponse;
                toProto(message: _91.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _91.QueryParamsResponse): _91.QueryParamsResponseProtoMsg;
            };
            QueryGetLongBookRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetLongBookRequest;
                fromJSON(object: any): _91.QueryGetLongBookRequest;
                toJSON(message: _91.QueryGetLongBookRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetLongBookRequest>): _91.QueryGetLongBookRequest;
                fromAmino(object: _91.QueryGetLongBookRequestAmino): _91.QueryGetLongBookRequest;
                toAmino(message: _91.QueryGetLongBookRequest): _91.QueryGetLongBookRequestAmino;
                fromAminoMsg(object: _91.QueryGetLongBookRequestAminoMsg): _91.QueryGetLongBookRequest;
                fromProtoMsg(message: _91.QueryGetLongBookRequestProtoMsg): _91.QueryGetLongBookRequest;
                toProto(message: _91.QueryGetLongBookRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetLongBookRequest): _91.QueryGetLongBookRequestProtoMsg;
            };
            QueryGetLongBookResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetLongBookResponse;
                fromJSON(object: any): _91.QueryGetLongBookResponse;
                toJSON(message: _91.QueryGetLongBookResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetLongBookResponse>): _91.QueryGetLongBookResponse;
                fromAmino(object: _91.QueryGetLongBookResponseAmino): _91.QueryGetLongBookResponse;
                toAmino(message: _91.QueryGetLongBookResponse): _91.QueryGetLongBookResponseAmino;
                fromAminoMsg(object: _91.QueryGetLongBookResponseAminoMsg): _91.QueryGetLongBookResponse;
                fromProtoMsg(message: _91.QueryGetLongBookResponseProtoMsg): _91.QueryGetLongBookResponse;
                toProto(message: _91.QueryGetLongBookResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetLongBookResponse): _91.QueryGetLongBookResponseProtoMsg;
            };
            QueryAllLongBookRequest: {
                typeUrl: string;
                encode(message: _91.QueryAllLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAllLongBookRequest;
                fromJSON(object: any): _91.QueryAllLongBookRequest;
                toJSON(message: _91.QueryAllLongBookRequest): unknown;
                fromPartial(object: Partial<_91.QueryAllLongBookRequest>): _91.QueryAllLongBookRequest;
                fromAmino(object: _91.QueryAllLongBookRequestAmino): _91.QueryAllLongBookRequest;
                toAmino(message: _91.QueryAllLongBookRequest): _91.QueryAllLongBookRequestAmino;
                fromAminoMsg(object: _91.QueryAllLongBookRequestAminoMsg): _91.QueryAllLongBookRequest;
                fromProtoMsg(message: _91.QueryAllLongBookRequestProtoMsg): _91.QueryAllLongBookRequest;
                toProto(message: _91.QueryAllLongBookRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAllLongBookRequest): _91.QueryAllLongBookRequestProtoMsg;
            };
            QueryAllLongBookResponse: {
                typeUrl: string;
                encode(message: _91.QueryAllLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAllLongBookResponse;
                fromJSON(object: any): _91.QueryAllLongBookResponse;
                toJSON(message: _91.QueryAllLongBookResponse): unknown;
                fromPartial(object: Partial<_91.QueryAllLongBookResponse>): _91.QueryAllLongBookResponse;
                fromAmino(object: _91.QueryAllLongBookResponseAmino): _91.QueryAllLongBookResponse;
                toAmino(message: _91.QueryAllLongBookResponse): _91.QueryAllLongBookResponseAmino;
                fromAminoMsg(object: _91.QueryAllLongBookResponseAminoMsg): _91.QueryAllLongBookResponse;
                fromProtoMsg(message: _91.QueryAllLongBookResponseProtoMsg): _91.QueryAllLongBookResponse;
                toProto(message: _91.QueryAllLongBookResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAllLongBookResponse): _91.QueryAllLongBookResponseProtoMsg;
            };
            QueryGetShortBookRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetShortBookRequest;
                fromJSON(object: any): _91.QueryGetShortBookRequest;
                toJSON(message: _91.QueryGetShortBookRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetShortBookRequest>): _91.QueryGetShortBookRequest;
                fromAmino(object: _91.QueryGetShortBookRequestAmino): _91.QueryGetShortBookRequest;
                toAmino(message: _91.QueryGetShortBookRequest): _91.QueryGetShortBookRequestAmino;
                fromAminoMsg(object: _91.QueryGetShortBookRequestAminoMsg): _91.QueryGetShortBookRequest;
                fromProtoMsg(message: _91.QueryGetShortBookRequestProtoMsg): _91.QueryGetShortBookRequest;
                toProto(message: _91.QueryGetShortBookRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetShortBookRequest): _91.QueryGetShortBookRequestProtoMsg;
            };
            QueryGetShortBookResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetShortBookResponse;
                fromJSON(object: any): _91.QueryGetShortBookResponse;
                toJSON(message: _91.QueryGetShortBookResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetShortBookResponse>): _91.QueryGetShortBookResponse;
                fromAmino(object: _91.QueryGetShortBookResponseAmino): _91.QueryGetShortBookResponse;
                toAmino(message: _91.QueryGetShortBookResponse): _91.QueryGetShortBookResponseAmino;
                fromAminoMsg(object: _91.QueryGetShortBookResponseAminoMsg): _91.QueryGetShortBookResponse;
                fromProtoMsg(message: _91.QueryGetShortBookResponseProtoMsg): _91.QueryGetShortBookResponse;
                toProto(message: _91.QueryGetShortBookResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetShortBookResponse): _91.QueryGetShortBookResponseProtoMsg;
            };
            QueryAllShortBookRequest: {
                typeUrl: string;
                encode(message: _91.QueryAllShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAllShortBookRequest;
                fromJSON(object: any): _91.QueryAllShortBookRequest;
                toJSON(message: _91.QueryAllShortBookRequest): unknown;
                fromPartial(object: Partial<_91.QueryAllShortBookRequest>): _91.QueryAllShortBookRequest;
                fromAmino(object: _91.QueryAllShortBookRequestAmino): _91.QueryAllShortBookRequest;
                toAmino(message: _91.QueryAllShortBookRequest): _91.QueryAllShortBookRequestAmino;
                fromAminoMsg(object: _91.QueryAllShortBookRequestAminoMsg): _91.QueryAllShortBookRequest;
                fromProtoMsg(message: _91.QueryAllShortBookRequestProtoMsg): _91.QueryAllShortBookRequest;
                toProto(message: _91.QueryAllShortBookRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAllShortBookRequest): _91.QueryAllShortBookRequestProtoMsg;
            };
            QueryAllShortBookResponse: {
                typeUrl: string;
                encode(message: _91.QueryAllShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAllShortBookResponse;
                fromJSON(object: any): _91.QueryAllShortBookResponse;
                toJSON(message: _91.QueryAllShortBookResponse): unknown;
                fromPartial(object: Partial<_91.QueryAllShortBookResponse>): _91.QueryAllShortBookResponse;
                fromAmino(object: _91.QueryAllShortBookResponseAmino): _91.QueryAllShortBookResponse;
                toAmino(message: _91.QueryAllShortBookResponse): _91.QueryAllShortBookResponseAmino;
                fromAminoMsg(object: _91.QueryAllShortBookResponseAminoMsg): _91.QueryAllShortBookResponse;
                fromProtoMsg(message: _91.QueryAllShortBookResponseProtoMsg): _91.QueryAllShortBookResponse;
                toProto(message: _91.QueryAllShortBookResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAllShortBookResponse): _91.QueryAllShortBookResponseProtoMsg;
            };
            QueryGetPricesRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetPricesRequest;
                fromJSON(object: any): _91.QueryGetPricesRequest;
                toJSON(message: _91.QueryGetPricesRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetPricesRequest>): _91.QueryGetPricesRequest;
                fromAmino(object: _91.QueryGetPricesRequestAmino): _91.QueryGetPricesRequest;
                toAmino(message: _91.QueryGetPricesRequest): _91.QueryGetPricesRequestAmino;
                fromAminoMsg(object: _91.QueryGetPricesRequestAminoMsg): _91.QueryGetPricesRequest;
                fromProtoMsg(message: _91.QueryGetPricesRequestProtoMsg): _91.QueryGetPricesRequest;
                toProto(message: _91.QueryGetPricesRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetPricesRequest): _91.QueryGetPricesRequestProtoMsg;
            };
            QueryGetPricesResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetPricesResponse;
                fromJSON(object: any): _91.QueryGetPricesResponse;
                toJSON(message: _91.QueryGetPricesResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetPricesResponse>): _91.QueryGetPricesResponse;
                fromAmino(object: _91.QueryGetPricesResponseAmino): _91.QueryGetPricesResponse;
                toAmino(message: _91.QueryGetPricesResponse): _91.QueryGetPricesResponseAmino;
                fromAminoMsg(object: _91.QueryGetPricesResponseAminoMsg): _91.QueryGetPricesResponse;
                fromProtoMsg(message: _91.QueryGetPricesResponseProtoMsg): _91.QueryGetPricesResponse;
                toProto(message: _91.QueryGetPricesResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetPricesResponse): _91.QueryGetPricesResponseProtoMsg;
            };
            QueryGetPriceRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetPriceRequest;
                fromJSON(object: any): _91.QueryGetPriceRequest;
                toJSON(message: _91.QueryGetPriceRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetPriceRequest>): _91.QueryGetPriceRequest;
                fromAmino(object: _91.QueryGetPriceRequestAmino): _91.QueryGetPriceRequest;
                toAmino(message: _91.QueryGetPriceRequest): _91.QueryGetPriceRequestAmino;
                fromAminoMsg(object: _91.QueryGetPriceRequestAminoMsg): _91.QueryGetPriceRequest;
                fromProtoMsg(message: _91.QueryGetPriceRequestProtoMsg): _91.QueryGetPriceRequest;
                toProto(message: _91.QueryGetPriceRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetPriceRequest): _91.QueryGetPriceRequestProtoMsg;
            };
            QueryGetPriceResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetPriceResponse;
                fromJSON(object: any): _91.QueryGetPriceResponse;
                toJSON(message: _91.QueryGetPriceResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetPriceResponse>): _91.QueryGetPriceResponse;
                fromAmino(object: _91.QueryGetPriceResponseAmino): _91.QueryGetPriceResponse;
                toAmino(message: _91.QueryGetPriceResponse): _91.QueryGetPriceResponseAmino;
                fromAminoMsg(object: _91.QueryGetPriceResponseAminoMsg): _91.QueryGetPriceResponse;
                fromProtoMsg(message: _91.QueryGetPriceResponseProtoMsg): _91.QueryGetPriceResponse;
                toProto(message: _91.QueryGetPriceResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetPriceResponse): _91.QueryGetPriceResponseProtoMsg;
            };
            QueryGetLatestPriceRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetLatestPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetLatestPriceRequest;
                fromJSON(object: any): _91.QueryGetLatestPriceRequest;
                toJSON(message: _91.QueryGetLatestPriceRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetLatestPriceRequest>): _91.QueryGetLatestPriceRequest;
                fromAmino(object: _91.QueryGetLatestPriceRequestAmino): _91.QueryGetLatestPriceRequest;
                toAmino(message: _91.QueryGetLatestPriceRequest): _91.QueryGetLatestPriceRequestAmino;
                fromAminoMsg(object: _91.QueryGetLatestPriceRequestAminoMsg): _91.QueryGetLatestPriceRequest;
                fromProtoMsg(message: _91.QueryGetLatestPriceRequestProtoMsg): _91.QueryGetLatestPriceRequest;
                toProto(message: _91.QueryGetLatestPriceRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetLatestPriceRequest): _91.QueryGetLatestPriceRequestProtoMsg;
            };
            QueryGetLatestPriceResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetLatestPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetLatestPriceResponse;
                fromJSON(object: any): _91.QueryGetLatestPriceResponse;
                toJSON(message: _91.QueryGetLatestPriceResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetLatestPriceResponse>): _91.QueryGetLatestPriceResponse;
                fromAmino(object: _91.QueryGetLatestPriceResponseAmino): _91.QueryGetLatestPriceResponse;
                toAmino(message: _91.QueryGetLatestPriceResponse): _91.QueryGetLatestPriceResponseAmino;
                fromAminoMsg(object: _91.QueryGetLatestPriceResponseAminoMsg): _91.QueryGetLatestPriceResponse;
                fromProtoMsg(message: _91.QueryGetLatestPriceResponseProtoMsg): _91.QueryGetLatestPriceResponse;
                toProto(message: _91.QueryGetLatestPriceResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetLatestPriceResponse): _91.QueryGetLatestPriceResponseProtoMsg;
            };
            QueryGetTwapsRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetTwapsRequest;
                fromJSON(object: any): _91.QueryGetTwapsRequest;
                toJSON(message: _91.QueryGetTwapsRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetTwapsRequest>): _91.QueryGetTwapsRequest;
                fromAmino(object: _91.QueryGetTwapsRequestAmino): _91.QueryGetTwapsRequest;
                toAmino(message: _91.QueryGetTwapsRequest): _91.QueryGetTwapsRequestAmino;
                fromAminoMsg(object: _91.QueryGetTwapsRequestAminoMsg): _91.QueryGetTwapsRequest;
                fromProtoMsg(message: _91.QueryGetTwapsRequestProtoMsg): _91.QueryGetTwapsRequest;
                toProto(message: _91.QueryGetTwapsRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetTwapsRequest): _91.QueryGetTwapsRequestProtoMsg;
            };
            QueryGetTwapsResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetTwapsResponse;
                fromJSON(object: any): _91.QueryGetTwapsResponse;
                toJSON(message: _91.QueryGetTwapsResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetTwapsResponse>): _91.QueryGetTwapsResponse;
                fromAmino(object: _91.QueryGetTwapsResponseAmino): _91.QueryGetTwapsResponse;
                toAmino(message: _91.QueryGetTwapsResponse): _91.QueryGetTwapsResponseAmino;
                fromAminoMsg(object: _91.QueryGetTwapsResponseAminoMsg): _91.QueryGetTwapsResponse;
                fromProtoMsg(message: _91.QueryGetTwapsResponseProtoMsg): _91.QueryGetTwapsResponse;
                toProto(message: _91.QueryGetTwapsResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetTwapsResponse): _91.QueryGetTwapsResponseProtoMsg;
            };
            QueryAssetListRequest: {
                typeUrl: string;
                encode(_: _91.QueryAssetListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAssetListRequest;
                fromJSON(_: any): _91.QueryAssetListRequest;
                toJSON(_: _91.QueryAssetListRequest): unknown;
                fromPartial(_: Partial<_91.QueryAssetListRequest>): _91.QueryAssetListRequest;
                fromAmino(_: _91.QueryAssetListRequestAmino): _91.QueryAssetListRequest;
                toAmino(_: _91.QueryAssetListRequest): _91.QueryAssetListRequestAmino;
                fromAminoMsg(object: _91.QueryAssetListRequestAminoMsg): _91.QueryAssetListRequest;
                fromProtoMsg(message: _91.QueryAssetListRequestProtoMsg): _91.QueryAssetListRequest;
                toProto(message: _91.QueryAssetListRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAssetListRequest): _91.QueryAssetListRequestProtoMsg;
            };
            QueryAssetListResponse: {
                typeUrl: string;
                encode(message: _91.QueryAssetListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAssetListResponse;
                fromJSON(object: any): _91.QueryAssetListResponse;
                toJSON(message: _91.QueryAssetListResponse): unknown;
                fromPartial(object: Partial<_91.QueryAssetListResponse>): _91.QueryAssetListResponse;
                fromAmino(object: _91.QueryAssetListResponseAmino): _91.QueryAssetListResponse;
                toAmino(message: _91.QueryAssetListResponse): _91.QueryAssetListResponseAmino;
                fromAminoMsg(object: _91.QueryAssetListResponseAminoMsg): _91.QueryAssetListResponse;
                fromProtoMsg(message: _91.QueryAssetListResponseProtoMsg): _91.QueryAssetListResponse;
                toProto(message: _91.QueryAssetListResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAssetListResponse): _91.QueryAssetListResponseProtoMsg;
            };
            QueryAssetMetadataRequest: {
                typeUrl: string;
                encode(message: _91.QueryAssetMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAssetMetadataRequest;
                fromJSON(object: any): _91.QueryAssetMetadataRequest;
                toJSON(message: _91.QueryAssetMetadataRequest): unknown;
                fromPartial(object: Partial<_91.QueryAssetMetadataRequest>): _91.QueryAssetMetadataRequest;
                fromAmino(object: _91.QueryAssetMetadataRequestAmino): _91.QueryAssetMetadataRequest;
                toAmino(message: _91.QueryAssetMetadataRequest): _91.QueryAssetMetadataRequestAmino;
                fromAminoMsg(object: _91.QueryAssetMetadataRequestAminoMsg): _91.QueryAssetMetadataRequest;
                fromProtoMsg(message: _91.QueryAssetMetadataRequestProtoMsg): _91.QueryAssetMetadataRequest;
                toProto(message: _91.QueryAssetMetadataRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAssetMetadataRequest): _91.QueryAssetMetadataRequestProtoMsg;
            };
            QueryAssetMetadataResponse: {
                typeUrl: string;
                encode(message: _91.QueryAssetMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAssetMetadataResponse;
                fromJSON(object: any): _91.QueryAssetMetadataResponse;
                toJSON(message: _91.QueryAssetMetadataResponse): unknown;
                fromPartial(object: Partial<_91.QueryAssetMetadataResponse>): _91.QueryAssetMetadataResponse;
                fromAmino(object: _91.QueryAssetMetadataResponseAmino): _91.QueryAssetMetadataResponse;
                toAmino(message: _91.QueryAssetMetadataResponse): _91.QueryAssetMetadataResponseAmino;
                fromAminoMsg(object: _91.QueryAssetMetadataResponseAminoMsg): _91.QueryAssetMetadataResponse;
                fromProtoMsg(message: _91.QueryAssetMetadataResponseProtoMsg): _91.QueryAssetMetadataResponse;
                toProto(message: _91.QueryAssetMetadataResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAssetMetadataResponse): _91.QueryAssetMetadataResponseProtoMsg;
            };
            QueryRegisteredPairsRequest: {
                typeUrl: string;
                encode(message: _91.QueryRegisteredPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryRegisteredPairsRequest;
                fromJSON(object: any): _91.QueryRegisteredPairsRequest;
                toJSON(message: _91.QueryRegisteredPairsRequest): unknown;
                fromPartial(object: Partial<_91.QueryRegisteredPairsRequest>): _91.QueryRegisteredPairsRequest;
                fromAmino(object: _91.QueryRegisteredPairsRequestAmino): _91.QueryRegisteredPairsRequest;
                toAmino(message: _91.QueryRegisteredPairsRequest): _91.QueryRegisteredPairsRequestAmino;
                fromAminoMsg(object: _91.QueryRegisteredPairsRequestAminoMsg): _91.QueryRegisteredPairsRequest;
                fromProtoMsg(message: _91.QueryRegisteredPairsRequestProtoMsg): _91.QueryRegisteredPairsRequest;
                toProto(message: _91.QueryRegisteredPairsRequest): Uint8Array;
                toProtoMsg(message: _91.QueryRegisteredPairsRequest): _91.QueryRegisteredPairsRequestProtoMsg;
            };
            QueryRegisteredPairsResponse: {
                typeUrl: string;
                encode(message: _91.QueryRegisteredPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryRegisteredPairsResponse;
                fromJSON(object: any): _91.QueryRegisteredPairsResponse;
                toJSON(message: _91.QueryRegisteredPairsResponse): unknown;
                fromPartial(object: Partial<_91.QueryRegisteredPairsResponse>): _91.QueryRegisteredPairsResponse;
                fromAmino(object: _91.QueryRegisteredPairsResponseAmino): _91.QueryRegisteredPairsResponse;
                toAmino(message: _91.QueryRegisteredPairsResponse): _91.QueryRegisteredPairsResponseAmino;
                fromAminoMsg(object: _91.QueryRegisteredPairsResponseAminoMsg): _91.QueryRegisteredPairsResponse;
                fromProtoMsg(message: _91.QueryRegisteredPairsResponseProtoMsg): _91.QueryRegisteredPairsResponse;
                toProto(message: _91.QueryRegisteredPairsResponse): Uint8Array;
                toProtoMsg(message: _91.QueryRegisteredPairsResponse): _91.QueryRegisteredPairsResponseProtoMsg;
            };
            QueryRegisteredContractRequest: {
                typeUrl: string;
                encode(message: _91.QueryRegisteredContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryRegisteredContractRequest;
                fromJSON(object: any): _91.QueryRegisteredContractRequest;
                toJSON(message: _91.QueryRegisteredContractRequest): unknown;
                fromPartial(object: Partial<_91.QueryRegisteredContractRequest>): _91.QueryRegisteredContractRequest;
                fromAmino(object: _91.QueryRegisteredContractRequestAmino): _91.QueryRegisteredContractRequest;
                toAmino(message: _91.QueryRegisteredContractRequest): _91.QueryRegisteredContractRequestAmino;
                fromAminoMsg(object: _91.QueryRegisteredContractRequestAminoMsg): _91.QueryRegisteredContractRequest;
                fromProtoMsg(message: _91.QueryRegisteredContractRequestProtoMsg): _91.QueryRegisteredContractRequest;
                toProto(message: _91.QueryRegisteredContractRequest): Uint8Array;
                toProtoMsg(message: _91.QueryRegisteredContractRequest): _91.QueryRegisteredContractRequestProtoMsg;
            };
            QueryRegisteredContractResponse: {
                typeUrl: string;
                encode(message: _91.QueryRegisteredContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryRegisteredContractResponse;
                fromJSON(object: any): _91.QueryRegisteredContractResponse;
                toJSON(message: _91.QueryRegisteredContractResponse): unknown;
                fromPartial(object: Partial<_91.QueryRegisteredContractResponse>): _91.QueryRegisteredContractResponse;
                fromAmino(object: _91.QueryRegisteredContractResponseAmino): _91.QueryRegisteredContractResponse;
                toAmino(message: _91.QueryRegisteredContractResponse): _91.QueryRegisteredContractResponseAmino;
                fromAminoMsg(object: _91.QueryRegisteredContractResponseAminoMsg): _91.QueryRegisteredContractResponse;
                fromProtoMsg(message: _91.QueryRegisteredContractResponseProtoMsg): _91.QueryRegisteredContractResponse;
                toProto(message: _91.QueryRegisteredContractResponse): Uint8Array;
                toProtoMsg(message: _91.QueryRegisteredContractResponse): _91.QueryRegisteredContractResponseProtoMsg;
            };
            QueryGetOrdersRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrdersRequest;
                fromJSON(object: any): _91.QueryGetOrdersRequest;
                toJSON(message: _91.QueryGetOrdersRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetOrdersRequest>): _91.QueryGetOrdersRequest;
                fromAmino(object: _91.QueryGetOrdersRequestAmino): _91.QueryGetOrdersRequest;
                toAmino(message: _91.QueryGetOrdersRequest): _91.QueryGetOrdersRequestAmino;
                fromAminoMsg(object: _91.QueryGetOrdersRequestAminoMsg): _91.QueryGetOrdersRequest;
                fromProtoMsg(message: _91.QueryGetOrdersRequestProtoMsg): _91.QueryGetOrdersRequest;
                toProto(message: _91.QueryGetOrdersRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetOrdersRequest): _91.QueryGetOrdersRequestProtoMsg;
            };
            QueryGetOrdersResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrdersResponse;
                fromJSON(object: any): _91.QueryGetOrdersResponse;
                toJSON(message: _91.QueryGetOrdersResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetOrdersResponse>): _91.QueryGetOrdersResponse;
                fromAmino(object: _91.QueryGetOrdersResponseAmino): _91.QueryGetOrdersResponse;
                toAmino(message: _91.QueryGetOrdersResponse): _91.QueryGetOrdersResponseAmino;
                fromAminoMsg(object: _91.QueryGetOrdersResponseAminoMsg): _91.QueryGetOrdersResponse;
                fromProtoMsg(message: _91.QueryGetOrdersResponseProtoMsg): _91.QueryGetOrdersResponse;
                toProto(message: _91.QueryGetOrdersResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetOrdersResponse): _91.QueryGetOrdersResponseProtoMsg;
            };
            QueryGetOrderByIDRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetOrderByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrderByIDRequest;
                fromJSON(object: any): _91.QueryGetOrderByIDRequest;
                toJSON(message: _91.QueryGetOrderByIDRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetOrderByIDRequest>): _91.QueryGetOrderByIDRequest;
                fromAmino(object: _91.QueryGetOrderByIDRequestAmino): _91.QueryGetOrderByIDRequest;
                toAmino(message: _91.QueryGetOrderByIDRequest): _91.QueryGetOrderByIDRequestAmino;
                fromAminoMsg(object: _91.QueryGetOrderByIDRequestAminoMsg): _91.QueryGetOrderByIDRequest;
                fromProtoMsg(message: _91.QueryGetOrderByIDRequestProtoMsg): _91.QueryGetOrderByIDRequest;
                toProto(message: _91.QueryGetOrderByIDRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetOrderByIDRequest): _91.QueryGetOrderByIDRequestProtoMsg;
            };
            QueryGetOrderByIDResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetOrderByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrderByIDResponse;
                fromJSON(object: any): _91.QueryGetOrderByIDResponse;
                toJSON(message: _91.QueryGetOrderByIDResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetOrderByIDResponse>): _91.QueryGetOrderByIDResponse;
                fromAmino(object: _91.QueryGetOrderByIDResponseAmino): _91.QueryGetOrderByIDResponse;
                toAmino(message: _91.QueryGetOrderByIDResponse): _91.QueryGetOrderByIDResponseAmino;
                fromAminoMsg(object: _91.QueryGetOrderByIDResponseAminoMsg): _91.QueryGetOrderByIDResponse;
                fromProtoMsg(message: _91.QueryGetOrderByIDResponseProtoMsg): _91.QueryGetOrderByIDResponse;
                toProto(message: _91.QueryGetOrderByIDResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetOrderByIDResponse): _91.QueryGetOrderByIDResponseProtoMsg;
            };
            QueryGetHistoricalPricesRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetHistoricalPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetHistoricalPricesRequest;
                fromJSON(object: any): _91.QueryGetHistoricalPricesRequest;
                toJSON(message: _91.QueryGetHistoricalPricesRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetHistoricalPricesRequest>): _91.QueryGetHistoricalPricesRequest;
                fromAmino(object: _91.QueryGetHistoricalPricesRequestAmino): _91.QueryGetHistoricalPricesRequest;
                toAmino(message: _91.QueryGetHistoricalPricesRequest): _91.QueryGetHistoricalPricesRequestAmino;
                fromAminoMsg(object: _91.QueryGetHistoricalPricesRequestAminoMsg): _91.QueryGetHistoricalPricesRequest;
                fromProtoMsg(message: _91.QueryGetHistoricalPricesRequestProtoMsg): _91.QueryGetHistoricalPricesRequest;
                toProto(message: _91.QueryGetHistoricalPricesRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetHistoricalPricesRequest): _91.QueryGetHistoricalPricesRequestProtoMsg;
            };
            QueryGetHistoricalPricesResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetHistoricalPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetHistoricalPricesResponse;
                fromJSON(object: any): _91.QueryGetHistoricalPricesResponse;
                toJSON(message: _91.QueryGetHistoricalPricesResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetHistoricalPricesResponse>): _91.QueryGetHistoricalPricesResponse;
                fromAmino(object: _91.QueryGetHistoricalPricesResponseAmino): _91.QueryGetHistoricalPricesResponse;
                toAmino(message: _91.QueryGetHistoricalPricesResponse): _91.QueryGetHistoricalPricesResponseAmino;
                fromAminoMsg(object: _91.QueryGetHistoricalPricesResponseAminoMsg): _91.QueryGetHistoricalPricesResponse;
                fromProtoMsg(message: _91.QueryGetHistoricalPricesResponseProtoMsg): _91.QueryGetHistoricalPricesResponse;
                toProto(message: _91.QueryGetHistoricalPricesResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetHistoricalPricesResponse): _91.QueryGetHistoricalPricesResponseProtoMsg;
            };
            QueryGetMarketSummaryRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetMarketSummaryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetMarketSummaryRequest;
                fromJSON(object: any): _91.QueryGetMarketSummaryRequest;
                toJSON(message: _91.QueryGetMarketSummaryRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetMarketSummaryRequest>): _91.QueryGetMarketSummaryRequest;
                fromAmino(object: _91.QueryGetMarketSummaryRequestAmino): _91.QueryGetMarketSummaryRequest;
                toAmino(message: _91.QueryGetMarketSummaryRequest): _91.QueryGetMarketSummaryRequestAmino;
                fromAminoMsg(object: _91.QueryGetMarketSummaryRequestAminoMsg): _91.QueryGetMarketSummaryRequest;
                fromProtoMsg(message: _91.QueryGetMarketSummaryRequestProtoMsg): _91.QueryGetMarketSummaryRequest;
                toProto(message: _91.QueryGetMarketSummaryRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetMarketSummaryRequest): _91.QueryGetMarketSummaryRequestProtoMsg;
            };
            QueryGetMarketSummaryResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetMarketSummaryResponse;
                fromJSON(object: any): _91.QueryGetMarketSummaryResponse;
                toJSON(message: _91.QueryGetMarketSummaryResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetMarketSummaryResponse>): _91.QueryGetMarketSummaryResponse;
                fromAmino(object: _91.QueryGetMarketSummaryResponseAmino): _91.QueryGetMarketSummaryResponse;
                toAmino(message: _91.QueryGetMarketSummaryResponse): _91.QueryGetMarketSummaryResponseAmino;
                fromAminoMsg(object: _91.QueryGetMarketSummaryResponseAminoMsg): _91.QueryGetMarketSummaryResponse;
                fromProtoMsg(message: _91.QueryGetMarketSummaryResponseProtoMsg): _91.QueryGetMarketSummaryResponse;
                toProto(message: _91.QueryGetMarketSummaryResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetMarketSummaryResponse): _91.QueryGetMarketSummaryResponseProtoMsg;
            };
            QueryOrderSimulationRequest: {
                typeUrl: string;
                encode(message: _91.QueryOrderSimulationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryOrderSimulationRequest;
                fromJSON(object: any): _91.QueryOrderSimulationRequest;
                toJSON(message: _91.QueryOrderSimulationRequest): unknown;
                fromPartial(object: Partial<_91.QueryOrderSimulationRequest>): _91.QueryOrderSimulationRequest;
                fromAmino(object: _91.QueryOrderSimulationRequestAmino): _91.QueryOrderSimulationRequest;
                toAmino(message: _91.QueryOrderSimulationRequest): _91.QueryOrderSimulationRequestAmino;
                fromAminoMsg(object: _91.QueryOrderSimulationRequestAminoMsg): _91.QueryOrderSimulationRequest;
                fromProtoMsg(message: _91.QueryOrderSimulationRequestProtoMsg): _91.QueryOrderSimulationRequest;
                toProto(message: _91.QueryOrderSimulationRequest): Uint8Array;
                toProtoMsg(message: _91.QueryOrderSimulationRequest): _91.QueryOrderSimulationRequestProtoMsg;
            };
            QueryOrderSimulationResponse: {
                typeUrl: string;
                encode(message: _91.QueryOrderSimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryOrderSimulationResponse;
                fromJSON(object: any): _91.QueryOrderSimulationResponse;
                toJSON(message: _91.QueryOrderSimulationResponse): unknown;
                fromPartial(object: Partial<_91.QueryOrderSimulationResponse>): _91.QueryOrderSimulationResponse;
                fromAmino(object: _91.QueryOrderSimulationResponseAmino): _91.QueryOrderSimulationResponse;
                toAmino(message: _91.QueryOrderSimulationResponse): _91.QueryOrderSimulationResponseAmino;
                fromAminoMsg(object: _91.QueryOrderSimulationResponseAminoMsg): _91.QueryOrderSimulationResponse;
                fromProtoMsg(message: _91.QueryOrderSimulationResponseProtoMsg): _91.QueryOrderSimulationResponse;
                toProto(message: _91.QueryOrderSimulationResponse): Uint8Array;
                toProtoMsg(message: _91.QueryOrderSimulationResponse): _91.QueryOrderSimulationResponseProtoMsg;
            };
            QueryGetMatchResultRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetMatchResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetMatchResultRequest;
                fromJSON(object: any): _91.QueryGetMatchResultRequest;
                toJSON(message: _91.QueryGetMatchResultRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetMatchResultRequest>): _91.QueryGetMatchResultRequest;
                fromAmino(object: _91.QueryGetMatchResultRequestAmino): _91.QueryGetMatchResultRequest;
                toAmino(message: _91.QueryGetMatchResultRequest): _91.QueryGetMatchResultRequestAmino;
                fromAminoMsg(object: _91.QueryGetMatchResultRequestAminoMsg): _91.QueryGetMatchResultRequest;
                fromProtoMsg(message: _91.QueryGetMatchResultRequestProtoMsg): _91.QueryGetMatchResultRequest;
                toProto(message: _91.QueryGetMatchResultRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetMatchResultRequest): _91.QueryGetMatchResultRequestProtoMsg;
            };
            QueryGetMatchResultResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetMatchResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetMatchResultResponse;
                fromJSON(object: any): _91.QueryGetMatchResultResponse;
                toJSON(message: _91.QueryGetMatchResultResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetMatchResultResponse>): _91.QueryGetMatchResultResponse;
                fromAmino(object: _91.QueryGetMatchResultResponseAmino): _91.QueryGetMatchResultResponse;
                toAmino(message: _91.QueryGetMatchResultResponse): _91.QueryGetMatchResultResponseAmino;
                fromAminoMsg(object: _91.QueryGetMatchResultResponseAminoMsg): _91.QueryGetMatchResultResponse;
                fromProtoMsg(message: _91.QueryGetMatchResultResponseProtoMsg): _91.QueryGetMatchResultResponse;
                toProto(message: _91.QueryGetMatchResultResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetMatchResultResponse): _91.QueryGetMatchResultResponseProtoMsg;
            };
            QueryGetOrderCountRequest: {
                typeUrl: string;
                encode(message: _91.QueryGetOrderCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrderCountRequest;
                fromJSON(object: any): _91.QueryGetOrderCountRequest;
                toJSON(message: _91.QueryGetOrderCountRequest): unknown;
                fromPartial(object: Partial<_91.QueryGetOrderCountRequest>): _91.QueryGetOrderCountRequest;
                fromAmino(object: _91.QueryGetOrderCountRequestAmino): _91.QueryGetOrderCountRequest;
                toAmino(message: _91.QueryGetOrderCountRequest): _91.QueryGetOrderCountRequestAmino;
                fromAminoMsg(object: _91.QueryGetOrderCountRequestAminoMsg): _91.QueryGetOrderCountRequest;
                fromProtoMsg(message: _91.QueryGetOrderCountRequestProtoMsg): _91.QueryGetOrderCountRequest;
                toProto(message: _91.QueryGetOrderCountRequest): Uint8Array;
                toProtoMsg(message: _91.QueryGetOrderCountRequest): _91.QueryGetOrderCountRequestProtoMsg;
            };
            QueryGetOrderCountResponse: {
                typeUrl: string;
                encode(message: _91.QueryGetOrderCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrderCountResponse;
                fromJSON(object: any): _91.QueryGetOrderCountResponse;
                toJSON(message: _91.QueryGetOrderCountResponse): unknown;
                fromPartial(object: Partial<_91.QueryGetOrderCountResponse>): _91.QueryGetOrderCountResponse;
                fromAmino(object: _91.QueryGetOrderCountResponseAmino): _91.QueryGetOrderCountResponse;
                toAmino(message: _91.QueryGetOrderCountResponse): _91.QueryGetOrderCountResponseAmino;
                fromAminoMsg(object: _91.QueryGetOrderCountResponseAminoMsg): _91.QueryGetOrderCountResponse;
                fromProtoMsg(message: _91.QueryGetOrderCountResponseProtoMsg): _91.QueryGetOrderCountResponse;
                toProto(message: _91.QueryGetOrderCountResponse): Uint8Array;
                toProtoMsg(message: _91.QueryGetOrderCountResponse): _91.QueryGetOrderCountResponseProtoMsg;
            };
            Price: {
                typeUrl: string;
                encode(message: _90.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Price;
                fromJSON(object: any): _90.Price;
                toJSON(message: _90.Price): unknown;
                fromPartial(object: Partial<_90.Price>): _90.Price;
                fromAmino(object: _90.PriceAmino): _90.Price;
                toAmino(message: _90.Price): _90.PriceAmino;
                fromAminoMsg(object: _90.PriceAminoMsg): _90.Price;
                fromProtoMsg(message: _90.PriceProtoMsg): _90.Price;
                toProto(message: _90.Price): Uint8Array;
                toProtoMsg(message: _90.Price): _90.PriceProtoMsg;
            };
            PriceCandlestick: {
                typeUrl: string;
                encode(message: _90.PriceCandlestick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PriceCandlestick;
                fromJSON(object: any): _90.PriceCandlestick;
                toJSON(message: _90.PriceCandlestick): unknown;
                fromPartial(object: Partial<_90.PriceCandlestick>): _90.PriceCandlestick;
                fromAmino(object: _90.PriceCandlestickAmino): _90.PriceCandlestick;
                toAmino(message: _90.PriceCandlestick): _90.PriceCandlestickAmino;
                fromAminoMsg(object: _90.PriceCandlestickAminoMsg): _90.PriceCandlestick;
                fromProtoMsg(message: _90.PriceCandlestickProtoMsg): _90.PriceCandlestick;
                toProto(message: _90.PriceCandlestick): Uint8Array;
                toProtoMsg(message: _90.PriceCandlestick): _90.PriceCandlestickProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _89.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Params;
                fromJSON(object: any): _89.Params;
                toJSON(message: _89.Params): unknown;
                fromPartial(object: Partial<_89.Params>): _89.Params;
                fromAmino(object: _89.ParamsAmino): _89.Params;
                toAmino(message: _89.Params): _89.ParamsAmino;
                fromAminoMsg(object: _89.ParamsAminoMsg): _89.Params;
                fromProtoMsg(message: _89.ParamsProtoMsg): _89.Params;
                toProto(message: _89.Params): Uint8Array;
                toProtoMsg(message: _89.Params): _89.ParamsProtoMsg;
            };
            Pair: {
                typeUrl: string;
                encode(message: _88.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Pair;
                fromJSON(object: any): _88.Pair;
                toJSON(message: _88.Pair): unknown;
                fromPartial(object: Partial<_88.Pair>): _88.Pair;
                fromAmino(object: _88.PairAmino): _88.Pair;
                toAmino(message: _88.Pair): _88.PairAmino;
                fromAminoMsg(object: _88.PairAminoMsg): _88.Pair;
                fromProtoMsg(message: _88.PairProtoMsg): _88.Pair;
                toProto(message: _88.Pair): Uint8Array;
                toProtoMsg(message: _88.Pair): _88.PairProtoMsg;
            };
            BatchContractPair: {
                typeUrl: string;
                encode(message: _88.BatchContractPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BatchContractPair;
                fromJSON(object: any): _88.BatchContractPair;
                toJSON(message: _88.BatchContractPair): unknown;
                fromPartial(object: Partial<_88.BatchContractPair>): _88.BatchContractPair;
                fromAmino(object: _88.BatchContractPairAmino): _88.BatchContractPair;
                toAmino(message: _88.BatchContractPair): _88.BatchContractPairAmino;
                fromAminoMsg(object: _88.BatchContractPairAminoMsg): _88.BatchContractPair;
                fromProtoMsg(message: _88.BatchContractPairProtoMsg): _88.BatchContractPair;
                toProto(message: _88.BatchContractPair): Uint8Array;
                toProtoMsg(message: _88.BatchContractPair): _88.BatchContractPairProtoMsg;
            };
            Order: {
                typeUrl: string;
                encode(message: _87.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Order;
                fromJSON(object: any): _87.Order;
                toJSON(message: _87.Order): unknown;
                fromPartial(object: Partial<_87.Order>): _87.Order;
                fromAmino(object: _87.OrderAmino): _87.Order;
                toAmino(message: _87.Order): _87.OrderAmino;
                fromAminoMsg(object: _87.OrderAminoMsg): _87.Order;
                fromProtoMsg(message: _87.OrderProtoMsg): _87.Order;
                toProto(message: _87.Order): Uint8Array;
                toProtoMsg(message: _87.Order): _87.OrderProtoMsg;
            };
            Cancellation: {
                typeUrl: string;
                encode(message: _87.Cancellation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Cancellation;
                fromJSON(object: any): _87.Cancellation;
                toJSON(message: _87.Cancellation): unknown;
                fromPartial(object: Partial<_87.Cancellation>): _87.Cancellation;
                fromAmino(object: _87.CancellationAmino): _87.Cancellation;
                toAmino(message: _87.Cancellation): _87.CancellationAmino;
                fromAminoMsg(object: _87.CancellationAminoMsg): _87.Cancellation;
                fromProtoMsg(message: _87.CancellationProtoMsg): _87.Cancellation;
                toProto(message: _87.Cancellation): Uint8Array;
                toProtoMsg(message: _87.Cancellation): _87.CancellationProtoMsg;
            };
            ActiveOrders: {
                typeUrl: string;
                encode(message: _87.ActiveOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ActiveOrders;
                fromJSON(object: any): _87.ActiveOrders;
                toJSON(message: _87.ActiveOrders): unknown;
                fromPartial(object: Partial<_87.ActiveOrders>): _87.ActiveOrders;
                fromAmino(object: _87.ActiveOrdersAmino): _87.ActiveOrders;
                toAmino(message: _87.ActiveOrders): _87.ActiveOrdersAmino;
                fromAminoMsg(object: _87.ActiveOrdersAminoMsg): _87.ActiveOrders;
                fromProtoMsg(message: _87.ActiveOrdersProtoMsg): _87.ActiveOrders;
                toProto(message: _87.ActiveOrders): Uint8Array;
                toProtoMsg(message: _87.ActiveOrders): _87.ActiveOrdersProtoMsg;
            };
            OrderEntry: {
                typeUrl: string;
                encode(message: _86.OrderEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.OrderEntry;
                fromJSON(object: any): _86.OrderEntry;
                toJSON(message: _86.OrderEntry): unknown;
                fromPartial(object: Partial<_86.OrderEntry>): _86.OrderEntry;
                fromAmino(object: _86.OrderEntryAmino): _86.OrderEntry;
                toAmino(message: _86.OrderEntry): _86.OrderEntryAmino;
                fromAminoMsg(object: _86.OrderEntryAminoMsg): _86.OrderEntry;
                fromProtoMsg(message: _86.OrderEntryProtoMsg): _86.OrderEntry;
                toProto(message: _86.OrderEntry): Uint8Array;
                toProtoMsg(message: _86.OrderEntry): _86.OrderEntryProtoMsg;
            };
            Allocation: {
                typeUrl: string;
                encode(message: _86.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Allocation;
                fromJSON(object: any): _86.Allocation;
                toJSON(message: _86.Allocation): unknown;
                fromPartial(object: Partial<_86.Allocation>): _86.Allocation;
                fromAmino(object: _86.AllocationAmino): _86.Allocation;
                toAmino(message: _86.Allocation): _86.AllocationAmino;
                fromAminoMsg(object: _86.AllocationAminoMsg): _86.Allocation;
                fromProtoMsg(message: _86.AllocationProtoMsg): _86.Allocation;
                toProto(message: _86.Allocation): Uint8Array;
                toProtoMsg(message: _86.Allocation): _86.AllocationProtoMsg;
            };
            MatchResult: {
                typeUrl: string;
                encode(message: _85.MatchResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MatchResult;
                fromJSON(object: any): _85.MatchResult;
                toJSON(message: _85.MatchResult): unknown;
                fromPartial(object: Partial<_85.MatchResult>): _85.MatchResult;
                fromAmino(object: _85.MatchResultAmino): _85.MatchResult;
                toAmino(message: _85.MatchResult): _85.MatchResultAmino;
                fromAminoMsg(object: _85.MatchResultAminoMsg): _85.MatchResult;
                fromProtoMsg(message: _85.MatchResultProtoMsg): _85.MatchResult;
                toProto(message: _85.MatchResult): Uint8Array;
                toProtoMsg(message: _85.MatchResult): _85.MatchResultProtoMsg;
            };
            LongBook: {
                typeUrl: string;
                encode(message: _84.LongBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.LongBook;
                fromJSON(object: any): _84.LongBook;
                toJSON(message: _84.LongBook): unknown;
                fromPartial(object: Partial<_84.LongBook>): _84.LongBook;
                fromAmino(object: _84.LongBookAmino): _84.LongBook;
                toAmino(message: _84.LongBook): _84.LongBookAmino;
                fromAminoMsg(object: _84.LongBookAminoMsg): _84.LongBook;
                fromProtoMsg(message: _84.LongBookProtoMsg): _84.LongBook;
                toProto(message: _84.LongBook): Uint8Array;
                toProtoMsg(message: _84.LongBook): _84.LongBookProtoMsg;
            };
            AddAssetMetadataProposal: {
                typeUrl: string;
                encode(message: _83.AddAssetMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.AddAssetMetadataProposal;
                fromJSON(object: any): _83.AddAssetMetadataProposal;
                toJSON(message: _83.AddAssetMetadataProposal): unknown;
                fromPartial(object: Partial<_83.AddAssetMetadataProposal>): _83.AddAssetMetadataProposal;
                fromAmino(object: _83.AddAssetMetadataProposalAmino): _83.AddAssetMetadataProposal;
                toAmino(message: _83.AddAssetMetadataProposal): _83.AddAssetMetadataProposalAmino;
                fromAminoMsg(object: _83.AddAssetMetadataProposalAminoMsg): _83.AddAssetMetadataProposal;
                fromProtoMsg(message: _83.AddAssetMetadataProposalProtoMsg): _83.AddAssetMetadataProposal;
                toProto(message: _83.AddAssetMetadataProposal): Uint8Array;
                toProtoMsg(message: _83.AddAssetMetadataProposal): _83.AddAssetMetadataProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromJSON(object: any): _82.GenesisState;
                toJSON(message: _82.GenesisState): unknown;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
                fromAmino(object: _82.GenesisStateAmino): _82.GenesisState;
                toAmino(message: _82.GenesisState): _82.GenesisStateAmino;
                fromAminoMsg(object: _82.GenesisStateAminoMsg): _82.GenesisState;
                fromProtoMsg(message: _82.GenesisStateProtoMsg): _82.GenesisState;
                toProto(message: _82.GenesisState): Uint8Array;
                toProtoMsg(message: _82.GenesisState): _82.GenesisStateProtoMsg;
            };
            ContractState: {
                typeUrl: string;
                encode(message: _82.ContractState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ContractState;
                fromJSON(object: any): _82.ContractState;
                toJSON(message: _82.ContractState): unknown;
                fromPartial(object: Partial<_82.ContractState>): _82.ContractState;
                fromAmino(object: _82.ContractStateAmino): _82.ContractState;
                toAmino(message: _82.ContractState): _82.ContractStateAmino;
                fromAminoMsg(object: _82.ContractStateAminoMsg): _82.ContractState;
                fromProtoMsg(message: _82.ContractStateProtoMsg): _82.ContractState;
                toProto(message: _82.ContractState): Uint8Array;
                toProtoMsg(message: _82.ContractState): _82.ContractStateProtoMsg;
            };
            ContractPairPrices: {
                typeUrl: string;
                encode(message: _82.ContractPairPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ContractPairPrices;
                fromJSON(object: any): _82.ContractPairPrices;
                toJSON(message: _82.ContractPairPrices): unknown;
                fromPartial(object: Partial<_82.ContractPairPrices>): _82.ContractPairPrices;
                fromAmino(object: _82.ContractPairPricesAmino): _82.ContractPairPrices;
                toAmino(message: _82.ContractPairPrices): _82.ContractPairPricesAmino;
                fromAminoMsg(object: _82.ContractPairPricesAminoMsg): _82.ContractPairPrices;
                fromProtoMsg(message: _82.ContractPairPricesProtoMsg): _82.ContractPairPrices;
                toProto(message: _82.ContractPairPrices): Uint8Array;
                toProtoMsg(message: _82.ContractPairPrices): _82.ContractPairPricesProtoMsg;
            };
            positionDirectionFromJSON(object: any): _81.PositionDirection;
            positionDirectionToJSON(object: _81.PositionDirection): string;
            positionEffectFromJSON(object: any): _81.PositionEffect;
            positionEffectToJSON(object: _81.PositionEffect): string;
            orderTypeFromJSON(object: any): _81.OrderType;
            orderTypeToJSON(object: _81.OrderType): string;
            unitFromJSON(object: any): _81.Unit;
            unitToJSON(object: _81.Unit): string;
            orderStatusFromJSON(object: any): _81.OrderStatus;
            orderStatusToJSON(object: _81.OrderStatus): string;
            cancellationInitiatorFromJSON(object: any): _81.CancellationInitiator;
            cancellationInitiatorToJSON(object: _81.CancellationInitiator): string;
            PositionDirection: typeof _81.PositionDirection;
            PositionDirectionSDKType: typeof _81.PositionDirection;
            PositionDirectionAmino: typeof _81.PositionDirection;
            PositionEffect: typeof _81.PositionEffect;
            PositionEffectSDKType: typeof _81.PositionEffect;
            PositionEffectAmino: typeof _81.PositionEffect;
            OrderType: typeof _81.OrderType;
            OrderTypeSDKType: typeof _81.OrderType;
            OrderTypeAmino: typeof _81.OrderType;
            Unit: typeof _81.Unit;
            UnitSDKType: typeof _81.Unit;
            UnitAmino: typeof _81.Unit;
            OrderStatus: typeof _81.OrderStatus;
            OrderStatusSDKType: typeof _81.OrderStatus;
            OrderStatusAmino: typeof _81.OrderStatus;
            CancellationInitiator: typeof _81.CancellationInitiator;
            CancellationInitiatorSDKType: typeof _81.CancellationInitiator;
            CancellationInitiatorAmino: typeof _81.CancellationInitiator;
            DepositInfoEntry: {
                typeUrl: string;
                encode(message: _80.DepositInfoEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DepositInfoEntry;
                fromJSON(object: any): _80.DepositInfoEntry;
                toJSON(message: _80.DepositInfoEntry): unknown;
                fromPartial(object: Partial<_80.DepositInfoEntry>): _80.DepositInfoEntry;
                fromAmino(object: _80.DepositInfoEntryAmino): _80.DepositInfoEntry;
                toAmino(message: _80.DepositInfoEntry): _80.DepositInfoEntryAmino;
                fromAminoMsg(object: _80.DepositInfoEntryAminoMsg): _80.DepositInfoEntry;
                fromProtoMsg(message: _80.DepositInfoEntryProtoMsg): _80.DepositInfoEntry;
                toProto(message: _80.DepositInfoEntry): Uint8Array;
                toProtoMsg(message: _80.DepositInfoEntry): _80.DepositInfoEntryProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _79.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ContractInfo;
                fromJSON(object: any): _79.ContractInfo;
                toJSON(message: _79.ContractInfo): unknown;
                fromPartial(object: Partial<_79.ContractInfo>): _79.ContractInfo;
                fromAmino(object: _79.ContractInfoAmino): _79.ContractInfo;
                toAmino(message: _79.ContractInfo): _79.ContractInfoAmino;
                fromAminoMsg(object: _79.ContractInfoAminoMsg): _79.ContractInfo;
                fromProtoMsg(message: _79.ContractInfoProtoMsg): _79.ContractInfo;
                toProto(message: _79.ContractInfo): Uint8Array;
                toProtoMsg(message: _79.ContractInfo): _79.ContractInfoProtoMsg;
            };
            ContractInfoV2: {
                typeUrl: string;
                encode(message: _79.ContractInfoV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ContractInfoV2;
                fromJSON(object: any): _79.ContractInfoV2;
                toJSON(message: _79.ContractInfoV2): unknown;
                fromPartial(object: Partial<_79.ContractInfoV2>): _79.ContractInfoV2;
                fromAmino(object: _79.ContractInfoV2Amino): _79.ContractInfoV2;
                toAmino(message: _79.ContractInfoV2): _79.ContractInfoV2Amino;
                fromAminoMsg(object: _79.ContractInfoV2AminoMsg): _79.ContractInfoV2;
                fromProtoMsg(message: _79.ContractInfoV2ProtoMsg): _79.ContractInfoV2;
                toProto(message: _79.ContractInfoV2): Uint8Array;
                toProtoMsg(message: _79.ContractInfoV2): _79.ContractInfoV2ProtoMsg;
            };
            ContractDependencyInfo: {
                typeUrl: string;
                encode(message: _79.ContractDependencyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ContractDependencyInfo;
                fromJSON(object: any): _79.ContractDependencyInfo;
                toJSON(message: _79.ContractDependencyInfo): unknown;
                fromPartial(object: Partial<_79.ContractDependencyInfo>): _79.ContractDependencyInfo;
                fromAmino(object: _79.ContractDependencyInfoAmino): _79.ContractDependencyInfo;
                toAmino(message: _79.ContractDependencyInfo): _79.ContractDependencyInfoAmino;
                fromAminoMsg(object: _79.ContractDependencyInfoAminoMsg): _79.ContractDependencyInfo;
                fromProtoMsg(message: _79.ContractDependencyInfoProtoMsg): _79.ContractDependencyInfo;
                toProto(message: _79.ContractDependencyInfo): Uint8Array;
                toProtoMsg(message: _79.ContractDependencyInfo): _79.ContractDependencyInfoProtoMsg;
            };
            LegacyContractInfo: {
                typeUrl: string;
                encode(message: _79.LegacyContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.LegacyContractInfo;
                fromJSON(object: any): _79.LegacyContractInfo;
                toJSON(message: _79.LegacyContractInfo): unknown;
                fromPartial(object: Partial<_79.LegacyContractInfo>): _79.LegacyContractInfo;
                fromAmino(object: _79.LegacyContractInfoAmino): _79.LegacyContractInfo;
                toAmino(message: _79.LegacyContractInfo): _79.LegacyContractInfoAmino;
                fromAminoMsg(object: _79.LegacyContractInfoAminoMsg): _79.LegacyContractInfo;
                fromProtoMsg(message: _79.LegacyContractInfoProtoMsg): _79.LegacyContractInfo;
                toProto(message: _79.LegacyContractInfo): Uint8Array;
                toProtoMsg(message: _79.LegacyContractInfo): _79.LegacyContractInfoProtoMsg;
            };
            AssetIBCInfo: {
                typeUrl: string;
                encode(message: _78.AssetIBCInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.AssetIBCInfo;
                fromJSON(object: any): _78.AssetIBCInfo;
                toJSON(message: _78.AssetIBCInfo): unknown;
                fromPartial(object: Partial<_78.AssetIBCInfo>): _78.AssetIBCInfo;
                fromAmino(object: _78.AssetIBCInfoAmino): _78.AssetIBCInfo;
                toAmino(message: _78.AssetIBCInfo): _78.AssetIBCInfoAmino;
                fromAminoMsg(object: _78.AssetIBCInfoAminoMsg): _78.AssetIBCInfo;
                fromProtoMsg(message: _78.AssetIBCInfoProtoMsg): _78.AssetIBCInfo;
                toProto(message: _78.AssetIBCInfo): Uint8Array;
                toProtoMsg(message: _78.AssetIBCInfo): _78.AssetIBCInfoProtoMsg;
            };
            AssetMetadata: {
                typeUrl: string;
                encode(message: _78.AssetMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.AssetMetadata;
                fromJSON(object: any): _78.AssetMetadata;
                toJSON(message: _78.AssetMetadata): unknown;
                fromPartial(object: Partial<_78.AssetMetadata>): _78.AssetMetadata;
                fromAmino(object: _78.AssetMetadataAmino): _78.AssetMetadata;
                toAmino(message: _78.AssetMetadata): _78.AssetMetadataAmino;
                fromAminoMsg(object: _78.AssetMetadataAminoMsg): _78.AssetMetadata;
                fromProtoMsg(message: _78.AssetMetadataProtoMsg): _78.AssetMetadata;
                toProto(message: _78.AssetMetadata): Uint8Array;
                toProtoMsg(message: _78.AssetMetadata): _78.AssetMetadataProtoMsg;
            };
        };
        const epoch: {
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epoch(request?: _100.QueryEpochRequest): Promise<_100.QueryEpochResponse>;
                params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _100.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryParamsRequest;
                fromJSON(_: any): _100.QueryParamsRequest;
                toJSON(_: _100.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_100.QueryParamsRequest>): _100.QueryParamsRequest;
                fromAmino(_: _100.QueryParamsRequestAmino): _100.QueryParamsRequest;
                toAmino(_: _100.QueryParamsRequest): _100.QueryParamsRequestAmino;
                fromAminoMsg(object: _100.QueryParamsRequestAminoMsg): _100.QueryParamsRequest;
                fromProtoMsg(message: _100.QueryParamsRequestProtoMsg): _100.QueryParamsRequest;
                toProto(message: _100.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryParamsRequest): _100.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _100.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryParamsResponse;
                fromJSON(object: any): _100.QueryParamsResponse;
                toJSON(message: _100.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_100.QueryParamsResponse>): _100.QueryParamsResponse;
                fromAmino(object: _100.QueryParamsResponseAmino): _100.QueryParamsResponse;
                toAmino(message: _100.QueryParamsResponse): _100.QueryParamsResponseAmino;
                fromAminoMsg(object: _100.QueryParamsResponseAminoMsg): _100.QueryParamsResponse;
                fromProtoMsg(message: _100.QueryParamsResponseProtoMsg): _100.QueryParamsResponse;
                toProto(message: _100.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryParamsResponse): _100.QueryParamsResponseProtoMsg;
            };
            QueryEpochRequest: {
                typeUrl: string;
                encode(_: _100.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryEpochRequest;
                fromJSON(_: any): _100.QueryEpochRequest;
                toJSON(_: _100.QueryEpochRequest): unknown;
                fromPartial(_: Partial<_100.QueryEpochRequest>): _100.QueryEpochRequest;
                fromAmino(_: _100.QueryEpochRequestAmino): _100.QueryEpochRequest;
                toAmino(_: _100.QueryEpochRequest): _100.QueryEpochRequestAmino;
                fromAminoMsg(object: _100.QueryEpochRequestAminoMsg): _100.QueryEpochRequest;
                fromProtoMsg(message: _100.QueryEpochRequestProtoMsg): _100.QueryEpochRequest;
                toProto(message: _100.QueryEpochRequest): Uint8Array;
                toProtoMsg(message: _100.QueryEpochRequest): _100.QueryEpochRequestProtoMsg;
            };
            QueryEpochResponse: {
                typeUrl: string;
                encode(message: _100.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryEpochResponse;
                fromJSON(object: any): _100.QueryEpochResponse;
                toJSON(message: _100.QueryEpochResponse): unknown;
                fromPartial(object: Partial<_100.QueryEpochResponse>): _100.QueryEpochResponse;
                fromAmino(object: _100.QueryEpochResponseAmino): _100.QueryEpochResponse;
                toAmino(message: _100.QueryEpochResponse): _100.QueryEpochResponseAmino;
                fromAminoMsg(object: _100.QueryEpochResponseAminoMsg): _100.QueryEpochResponse;
                fromProtoMsg(message: _100.QueryEpochResponseProtoMsg): _100.QueryEpochResponse;
                toProto(message: _100.QueryEpochResponse): Uint8Array;
                toProtoMsg(message: _100.QueryEpochResponse): _100.QueryEpochResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _99.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Params;
                fromJSON(_: any): _99.Params;
                toJSON(_: _99.Params): unknown;
                fromPartial(_: Partial<_99.Params>): _99.Params;
                fromAmino(_: _99.ParamsAmino): _99.Params;
                toAmino(_: _99.Params): _99.ParamsAmino;
                fromAminoMsg(object: _99.ParamsAminoMsg): _99.Params;
                fromProtoMsg(message: _99.ParamsProtoMsg): _99.Params;
                toProto(message: _99.Params): Uint8Array;
                toProtoMsg(message: _99.Params): _99.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                fromJSON(object: any): _98.GenesisState;
                toJSON(message: _98.GenesisState): unknown;
                fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
                fromAmino(object: _98.GenesisStateAmino): _98.GenesisState;
                toAmino(message: _98.GenesisState): _98.GenesisStateAmino;
                fromAminoMsg(object: _98.GenesisStateAminoMsg): _98.GenesisState;
                fromProtoMsg(message: _98.GenesisStateProtoMsg): _98.GenesisState;
                toProto(message: _98.GenesisState): Uint8Array;
                toProtoMsg(message: _98.GenesisState): _98.GenesisStateProtoMsg;
            };
            Epoch: {
                typeUrl: string;
                encode(message: _97.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Epoch;
                fromJSON(object: any): _97.Epoch;
                toJSON(message: _97.Epoch): unknown;
                fromPartial(object: Partial<_97.Epoch>): _97.Epoch;
                fromAmino(object: _97.EpochAmino): _97.Epoch;
                toAmino(message: _97.Epoch): _97.EpochAmino;
                fromAminoMsg(object: _97.EpochAminoMsg): _97.Epoch;
                fromProtoMsg(message: _97.EpochProtoMsg): _97.Epoch;
                toProto(message: _97.Epoch): Uint8Array;
                toProtoMsg(message: _97.Epoch): _97.EpochProtoMsg;
            };
        };
        const mint: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                minter(request?: _105.QueryMinterRequest): Promise<_105.QueryMinterResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
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
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                exchangeRate(request: _108.QueryExchangeRateRequest): Promise<_108.QueryExchangeRateResponse>;
                exchangeRates(request?: _108.QueryExchangeRatesRequest): Promise<_108.QueryExchangeRatesResponse>;
                actives(request?: _108.QueryActivesRequest): Promise<_108.QueryActivesResponse>;
                voteTargets(request?: _108.QueryVoteTargetsRequest): Promise<_108.QueryVoteTargetsResponse>;
                priceSnapshotHistory(request?: _108.QueryPriceSnapshotHistoryRequest): Promise<_108.QueryPriceSnapshotHistoryResponse>;
                twaps(request: _108.QueryTwapsRequest): Promise<_108.QueryTwapsResponse>;
                feederDelegation(request: _108.QueryFeederDelegationRequest): Promise<_108.QueryFeederDelegationResponse>;
                votePenaltyCounter(request: _108.QueryVotePenaltyCounterRequest): Promise<_108.QueryVotePenaltyCounterResponse>;
                slashWindow(request?: _108.QuerySlashWindowRequest): Promise<_108.QuerySlashWindowResponse>;
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _109.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _109.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _109.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _109.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _109.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _109.MsgDelegateFeedConsent;
                    };
                };
                toJSON: {
                    aggregateExchangeRateVote(value: _109.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateFeedConsent(value: _109.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    aggregateExchangeRateVote(value: any): {
                        typeUrl: string;
                        value: _109.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: any): {
                        typeUrl: string;
                        value: _109.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _109.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _109.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _109.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _109.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: (message: _109.MsgAggregateExchangeRateVote) => _109.MsgAggregateExchangeRateVoteAmino;
                    fromAmino: (object: _109.MsgAggregateExchangeRateVoteAmino) => _109.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: (message: _109.MsgDelegateFeedConsent) => _109.MsgDelegateFeedConsentAmino;
                    fromAmino: (object: _109.MsgDelegateFeedConsentAmino) => _109.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _109.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgAggregateExchangeRateVote;
                fromJSON(object: any): _109.MsgAggregateExchangeRateVote;
                toJSON(message: _109.MsgAggregateExchangeRateVote): unknown;
                fromPartial(object: Partial<_109.MsgAggregateExchangeRateVote>): _109.MsgAggregateExchangeRateVote;
                fromAmino(object: _109.MsgAggregateExchangeRateVoteAmino): _109.MsgAggregateExchangeRateVote;
                toAmino(message: _109.MsgAggregateExchangeRateVote): _109.MsgAggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _109.MsgAggregateExchangeRateVoteAminoMsg): _109.MsgAggregateExchangeRateVote;
                fromProtoMsg(message: _109.MsgAggregateExchangeRateVoteProtoMsg): _109.MsgAggregateExchangeRateVote;
                toProto(message: _109.MsgAggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _109.MsgAggregateExchangeRateVote): _109.MsgAggregateExchangeRateVoteProtoMsg;
            };
            MsgAggregateExchangeRateVoteResponse: {
                typeUrl: string;
                encode(_: _109.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgAggregateExchangeRateVoteResponse;
                fromJSON(_: any): _109.MsgAggregateExchangeRateVoteResponse;
                toJSON(_: _109.MsgAggregateExchangeRateVoteResponse): unknown;
                fromPartial(_: Partial<_109.MsgAggregateExchangeRateVoteResponse>): _109.MsgAggregateExchangeRateVoteResponse;
                fromAmino(_: _109.MsgAggregateExchangeRateVoteResponseAmino): _109.MsgAggregateExchangeRateVoteResponse;
                toAmino(_: _109.MsgAggregateExchangeRateVoteResponse): _109.MsgAggregateExchangeRateVoteResponseAmino;
                fromAminoMsg(object: _109.MsgAggregateExchangeRateVoteResponseAminoMsg): _109.MsgAggregateExchangeRateVoteResponse;
                fromProtoMsg(message: _109.MsgAggregateExchangeRateVoteResponseProtoMsg): _109.MsgAggregateExchangeRateVoteResponse;
                toProto(message: _109.MsgAggregateExchangeRateVoteResponse): Uint8Array;
                toProtoMsg(message: _109.MsgAggregateExchangeRateVoteResponse): _109.MsgAggregateExchangeRateVoteResponseProtoMsg;
            };
            MsgDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _109.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgDelegateFeedConsent;
                fromJSON(object: any): _109.MsgDelegateFeedConsent;
                toJSON(message: _109.MsgDelegateFeedConsent): unknown;
                fromPartial(object: Partial<_109.MsgDelegateFeedConsent>): _109.MsgDelegateFeedConsent;
                fromAmino(object: _109.MsgDelegateFeedConsentAmino): _109.MsgDelegateFeedConsent;
                toAmino(message: _109.MsgDelegateFeedConsent): _109.MsgDelegateFeedConsentAmino;
                fromAminoMsg(object: _109.MsgDelegateFeedConsentAminoMsg): _109.MsgDelegateFeedConsent;
                fromProtoMsg(message: _109.MsgDelegateFeedConsentProtoMsg): _109.MsgDelegateFeedConsent;
                toProto(message: _109.MsgDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _109.MsgDelegateFeedConsent): _109.MsgDelegateFeedConsentProtoMsg;
            };
            MsgDelegateFeedConsentResponse: {
                typeUrl: string;
                encode(_: _109.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgDelegateFeedConsentResponse;
                fromJSON(_: any): _109.MsgDelegateFeedConsentResponse;
                toJSON(_: _109.MsgDelegateFeedConsentResponse): unknown;
                fromPartial(_: Partial<_109.MsgDelegateFeedConsentResponse>): _109.MsgDelegateFeedConsentResponse;
                fromAmino(_: _109.MsgDelegateFeedConsentResponseAmino): _109.MsgDelegateFeedConsentResponse;
                toAmino(_: _109.MsgDelegateFeedConsentResponse): _109.MsgDelegateFeedConsentResponseAmino;
                fromAminoMsg(object: _109.MsgDelegateFeedConsentResponseAminoMsg): _109.MsgDelegateFeedConsentResponse;
                fromProtoMsg(message: _109.MsgDelegateFeedConsentResponseProtoMsg): _109.MsgDelegateFeedConsentResponse;
                toProto(message: _109.MsgDelegateFeedConsentResponse): Uint8Array;
                toProtoMsg(message: _109.MsgDelegateFeedConsentResponse): _109.MsgDelegateFeedConsentResponseProtoMsg;
            };
            QueryExchangeRateRequest: {
                typeUrl: string;
                encode(message: _108.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryExchangeRateRequest;
                fromJSON(object: any): _108.QueryExchangeRateRequest;
                toJSON(message: _108.QueryExchangeRateRequest): unknown;
                fromPartial(object: Partial<_108.QueryExchangeRateRequest>): _108.QueryExchangeRateRequest;
                fromAmino(object: _108.QueryExchangeRateRequestAmino): _108.QueryExchangeRateRequest;
                toAmino(message: _108.QueryExchangeRateRequest): _108.QueryExchangeRateRequestAmino;
                fromAminoMsg(object: _108.QueryExchangeRateRequestAminoMsg): _108.QueryExchangeRateRequest;
                fromProtoMsg(message: _108.QueryExchangeRateRequestProtoMsg): _108.QueryExchangeRateRequest;
                toProto(message: _108.QueryExchangeRateRequest): Uint8Array;
                toProtoMsg(message: _108.QueryExchangeRateRequest): _108.QueryExchangeRateRequestProtoMsg;
            };
            QueryExchangeRateResponse: {
                typeUrl: string;
                encode(message: _108.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryExchangeRateResponse;
                fromJSON(object: any): _108.QueryExchangeRateResponse;
                toJSON(message: _108.QueryExchangeRateResponse): unknown;
                fromPartial(object: Partial<_108.QueryExchangeRateResponse>): _108.QueryExchangeRateResponse;
                fromAmino(object: _108.QueryExchangeRateResponseAmino): _108.QueryExchangeRateResponse;
                toAmino(message: _108.QueryExchangeRateResponse): _108.QueryExchangeRateResponseAmino;
                fromAminoMsg(object: _108.QueryExchangeRateResponseAminoMsg): _108.QueryExchangeRateResponse;
                fromProtoMsg(message: _108.QueryExchangeRateResponseProtoMsg): _108.QueryExchangeRateResponse;
                toProto(message: _108.QueryExchangeRateResponse): Uint8Array;
                toProtoMsg(message: _108.QueryExchangeRateResponse): _108.QueryExchangeRateResponseProtoMsg;
            };
            QueryExchangeRatesRequest: {
                typeUrl: string;
                encode(_: _108.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryExchangeRatesRequest;
                fromJSON(_: any): _108.QueryExchangeRatesRequest;
                toJSON(_: _108.QueryExchangeRatesRequest): unknown;
                fromPartial(_: Partial<_108.QueryExchangeRatesRequest>): _108.QueryExchangeRatesRequest;
                fromAmino(_: _108.QueryExchangeRatesRequestAmino): _108.QueryExchangeRatesRequest;
                toAmino(_: _108.QueryExchangeRatesRequest): _108.QueryExchangeRatesRequestAmino;
                fromAminoMsg(object: _108.QueryExchangeRatesRequestAminoMsg): _108.QueryExchangeRatesRequest;
                fromProtoMsg(message: _108.QueryExchangeRatesRequestProtoMsg): _108.QueryExchangeRatesRequest;
                toProto(message: _108.QueryExchangeRatesRequest): Uint8Array;
                toProtoMsg(message: _108.QueryExchangeRatesRequest): _108.QueryExchangeRatesRequestProtoMsg;
            };
            DenomOracleExchangeRatePair: {
                typeUrl: string;
                encode(message: _108.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.DenomOracleExchangeRatePair;
                fromJSON(object: any): _108.DenomOracleExchangeRatePair;
                toJSON(message: _108.DenomOracleExchangeRatePair): unknown;
                fromPartial(object: Partial<_108.DenomOracleExchangeRatePair>): _108.DenomOracleExchangeRatePair;
                fromAmino(object: _108.DenomOracleExchangeRatePairAmino): _108.DenomOracleExchangeRatePair;
                toAmino(message: _108.DenomOracleExchangeRatePair): _108.DenomOracleExchangeRatePairAmino;
                fromAminoMsg(object: _108.DenomOracleExchangeRatePairAminoMsg): _108.DenomOracleExchangeRatePair;
                fromProtoMsg(message: _108.DenomOracleExchangeRatePairProtoMsg): _108.DenomOracleExchangeRatePair;
                toProto(message: _108.DenomOracleExchangeRatePair): Uint8Array;
                toProtoMsg(message: _108.DenomOracleExchangeRatePair): _108.DenomOracleExchangeRatePairProtoMsg;
            };
            QueryExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _108.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryExchangeRatesResponse;
                fromJSON(object: any): _108.QueryExchangeRatesResponse;
                toJSON(message: _108.QueryExchangeRatesResponse): unknown;
                fromPartial(object: Partial<_108.QueryExchangeRatesResponse>): _108.QueryExchangeRatesResponse;
                fromAmino(object: _108.QueryExchangeRatesResponseAmino): _108.QueryExchangeRatesResponse;
                toAmino(message: _108.QueryExchangeRatesResponse): _108.QueryExchangeRatesResponseAmino;
                fromAminoMsg(object: _108.QueryExchangeRatesResponseAminoMsg): _108.QueryExchangeRatesResponse;
                fromProtoMsg(message: _108.QueryExchangeRatesResponseProtoMsg): _108.QueryExchangeRatesResponse;
                toProto(message: _108.QueryExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _108.QueryExchangeRatesResponse): _108.QueryExchangeRatesResponseProtoMsg;
            };
            QueryActivesRequest: {
                typeUrl: string;
                encode(_: _108.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryActivesRequest;
                fromJSON(_: any): _108.QueryActivesRequest;
                toJSON(_: _108.QueryActivesRequest): unknown;
                fromPartial(_: Partial<_108.QueryActivesRequest>): _108.QueryActivesRequest;
                fromAmino(_: _108.QueryActivesRequestAmino): _108.QueryActivesRequest;
                toAmino(_: _108.QueryActivesRequest): _108.QueryActivesRequestAmino;
                fromAminoMsg(object: _108.QueryActivesRequestAminoMsg): _108.QueryActivesRequest;
                fromProtoMsg(message: _108.QueryActivesRequestProtoMsg): _108.QueryActivesRequest;
                toProto(message: _108.QueryActivesRequest): Uint8Array;
                toProtoMsg(message: _108.QueryActivesRequest): _108.QueryActivesRequestProtoMsg;
            };
            QueryActivesResponse: {
                typeUrl: string;
                encode(message: _108.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryActivesResponse;
                fromJSON(object: any): _108.QueryActivesResponse;
                toJSON(message: _108.QueryActivesResponse): unknown;
                fromPartial(object: Partial<_108.QueryActivesResponse>): _108.QueryActivesResponse;
                fromAmino(object: _108.QueryActivesResponseAmino): _108.QueryActivesResponse;
                toAmino(message: _108.QueryActivesResponse): _108.QueryActivesResponseAmino;
                fromAminoMsg(object: _108.QueryActivesResponseAminoMsg): _108.QueryActivesResponse;
                fromProtoMsg(message: _108.QueryActivesResponseProtoMsg): _108.QueryActivesResponse;
                toProto(message: _108.QueryActivesResponse): Uint8Array;
                toProtoMsg(message: _108.QueryActivesResponse): _108.QueryActivesResponseProtoMsg;
            };
            QueryVoteTargetsRequest: {
                typeUrl: string;
                encode(_: _108.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVoteTargetsRequest;
                fromJSON(_: any): _108.QueryVoteTargetsRequest;
                toJSON(_: _108.QueryVoteTargetsRequest): unknown;
                fromPartial(_: Partial<_108.QueryVoteTargetsRequest>): _108.QueryVoteTargetsRequest;
                fromAmino(_: _108.QueryVoteTargetsRequestAmino): _108.QueryVoteTargetsRequest;
                toAmino(_: _108.QueryVoteTargetsRequest): _108.QueryVoteTargetsRequestAmino;
                fromAminoMsg(object: _108.QueryVoteTargetsRequestAminoMsg): _108.QueryVoteTargetsRequest;
                fromProtoMsg(message: _108.QueryVoteTargetsRequestProtoMsg): _108.QueryVoteTargetsRequest;
                toProto(message: _108.QueryVoteTargetsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryVoteTargetsRequest): _108.QueryVoteTargetsRequestProtoMsg;
            };
            QueryVoteTargetsResponse: {
                typeUrl: string;
                encode(message: _108.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVoteTargetsResponse;
                fromJSON(object: any): _108.QueryVoteTargetsResponse;
                toJSON(message: _108.QueryVoteTargetsResponse): unknown;
                fromPartial(object: Partial<_108.QueryVoteTargetsResponse>): _108.QueryVoteTargetsResponse;
                fromAmino(object: _108.QueryVoteTargetsResponseAmino): _108.QueryVoteTargetsResponse;
                toAmino(message: _108.QueryVoteTargetsResponse): _108.QueryVoteTargetsResponseAmino;
                fromAminoMsg(object: _108.QueryVoteTargetsResponseAminoMsg): _108.QueryVoteTargetsResponse;
                fromProtoMsg(message: _108.QueryVoteTargetsResponseProtoMsg): _108.QueryVoteTargetsResponse;
                toProto(message: _108.QueryVoteTargetsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryVoteTargetsResponse): _108.QueryVoteTargetsResponseProtoMsg;
            };
            QueryPriceSnapshotHistoryRequest: {
                typeUrl: string;
                encode(_: _108.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPriceSnapshotHistoryRequest;
                fromJSON(_: any): _108.QueryPriceSnapshotHistoryRequest;
                toJSON(_: _108.QueryPriceSnapshotHistoryRequest): unknown;
                fromPartial(_: Partial<_108.QueryPriceSnapshotHistoryRequest>): _108.QueryPriceSnapshotHistoryRequest;
                fromAmino(_: _108.QueryPriceSnapshotHistoryRequestAmino): _108.QueryPriceSnapshotHistoryRequest;
                toAmino(_: _108.QueryPriceSnapshotHistoryRequest): _108.QueryPriceSnapshotHistoryRequestAmino;
                fromAminoMsg(object: _108.QueryPriceSnapshotHistoryRequestAminoMsg): _108.QueryPriceSnapshotHistoryRequest;
                fromProtoMsg(message: _108.QueryPriceSnapshotHistoryRequestProtoMsg): _108.QueryPriceSnapshotHistoryRequest;
                toProto(message: _108.QueryPriceSnapshotHistoryRequest): Uint8Array;
                toProtoMsg(message: _108.QueryPriceSnapshotHistoryRequest): _108.QueryPriceSnapshotHistoryRequestProtoMsg;
            };
            QueryPriceSnapshotHistoryResponse: {
                typeUrl: string;
                encode(message: _108.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPriceSnapshotHistoryResponse;
                fromJSON(object: any): _108.QueryPriceSnapshotHistoryResponse;
                toJSON(message: _108.QueryPriceSnapshotHistoryResponse): unknown;
                fromPartial(object: Partial<_108.QueryPriceSnapshotHistoryResponse>): _108.QueryPriceSnapshotHistoryResponse;
                fromAmino(object: _108.QueryPriceSnapshotHistoryResponseAmino): _108.QueryPriceSnapshotHistoryResponse;
                toAmino(message: _108.QueryPriceSnapshotHistoryResponse): _108.QueryPriceSnapshotHistoryResponseAmino;
                fromAminoMsg(object: _108.QueryPriceSnapshotHistoryResponseAminoMsg): _108.QueryPriceSnapshotHistoryResponse;
                fromProtoMsg(message: _108.QueryPriceSnapshotHistoryResponseProtoMsg): _108.QueryPriceSnapshotHistoryResponse;
                toProto(message: _108.QueryPriceSnapshotHistoryResponse): Uint8Array;
                toProtoMsg(message: _108.QueryPriceSnapshotHistoryResponse): _108.QueryPriceSnapshotHistoryResponseProtoMsg;
            };
            QueryTwapsRequest: {
                typeUrl: string;
                encode(message: _108.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTwapsRequest;
                fromJSON(object: any): _108.QueryTwapsRequest;
                toJSON(message: _108.QueryTwapsRequest): unknown;
                fromPartial(object: Partial<_108.QueryTwapsRequest>): _108.QueryTwapsRequest;
                fromAmino(object: _108.QueryTwapsRequestAmino): _108.QueryTwapsRequest;
                toAmino(message: _108.QueryTwapsRequest): _108.QueryTwapsRequestAmino;
                fromAminoMsg(object: _108.QueryTwapsRequestAminoMsg): _108.QueryTwapsRequest;
                fromProtoMsg(message: _108.QueryTwapsRequestProtoMsg): _108.QueryTwapsRequest;
                toProto(message: _108.QueryTwapsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryTwapsRequest): _108.QueryTwapsRequestProtoMsg;
            };
            QueryTwapsResponse: {
                typeUrl: string;
                encode(message: _108.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTwapsResponse;
                fromJSON(object: any): _108.QueryTwapsResponse;
                toJSON(message: _108.QueryTwapsResponse): unknown;
                fromPartial(object: Partial<_108.QueryTwapsResponse>): _108.QueryTwapsResponse;
                fromAmino(object: _108.QueryTwapsResponseAmino): _108.QueryTwapsResponse;
                toAmino(message: _108.QueryTwapsResponse): _108.QueryTwapsResponseAmino;
                fromAminoMsg(object: _108.QueryTwapsResponseAminoMsg): _108.QueryTwapsResponse;
                fromProtoMsg(message: _108.QueryTwapsResponseProtoMsg): _108.QueryTwapsResponse;
                toProto(message: _108.QueryTwapsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryTwapsResponse): _108.QueryTwapsResponseProtoMsg;
            };
            QueryFeederDelegationRequest: {
                typeUrl: string;
                encode(message: _108.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryFeederDelegationRequest;
                fromJSON(object: any): _108.QueryFeederDelegationRequest;
                toJSON(message: _108.QueryFeederDelegationRequest): unknown;
                fromPartial(object: Partial<_108.QueryFeederDelegationRequest>): _108.QueryFeederDelegationRequest;
                fromAmino(object: _108.QueryFeederDelegationRequestAmino): _108.QueryFeederDelegationRequest;
                toAmino(message: _108.QueryFeederDelegationRequest): _108.QueryFeederDelegationRequestAmino;
                fromAminoMsg(object: _108.QueryFeederDelegationRequestAminoMsg): _108.QueryFeederDelegationRequest;
                fromProtoMsg(message: _108.QueryFeederDelegationRequestProtoMsg): _108.QueryFeederDelegationRequest;
                toProto(message: _108.QueryFeederDelegationRequest): Uint8Array;
                toProtoMsg(message: _108.QueryFeederDelegationRequest): _108.QueryFeederDelegationRequestProtoMsg;
            };
            QueryFeederDelegationResponse: {
                typeUrl: string;
                encode(message: _108.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryFeederDelegationResponse;
                fromJSON(object: any): _108.QueryFeederDelegationResponse;
                toJSON(message: _108.QueryFeederDelegationResponse): unknown;
                fromPartial(object: Partial<_108.QueryFeederDelegationResponse>): _108.QueryFeederDelegationResponse;
                fromAmino(object: _108.QueryFeederDelegationResponseAmino): _108.QueryFeederDelegationResponse;
                toAmino(message: _108.QueryFeederDelegationResponse): _108.QueryFeederDelegationResponseAmino;
                fromAminoMsg(object: _108.QueryFeederDelegationResponseAminoMsg): _108.QueryFeederDelegationResponse;
                fromProtoMsg(message: _108.QueryFeederDelegationResponseProtoMsg): _108.QueryFeederDelegationResponse;
                toProto(message: _108.QueryFeederDelegationResponse): Uint8Array;
                toProtoMsg(message: _108.QueryFeederDelegationResponse): _108.QueryFeederDelegationResponseProtoMsg;
            };
            QueryVotePenaltyCounterRequest: {
                typeUrl: string;
                encode(message: _108.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVotePenaltyCounterRequest;
                fromJSON(object: any): _108.QueryVotePenaltyCounterRequest;
                toJSON(message: _108.QueryVotePenaltyCounterRequest): unknown;
                fromPartial(object: Partial<_108.QueryVotePenaltyCounterRequest>): _108.QueryVotePenaltyCounterRequest;
                fromAmino(object: _108.QueryVotePenaltyCounterRequestAmino): _108.QueryVotePenaltyCounterRequest;
                toAmino(message: _108.QueryVotePenaltyCounterRequest): _108.QueryVotePenaltyCounterRequestAmino;
                fromAminoMsg(object: _108.QueryVotePenaltyCounterRequestAminoMsg): _108.QueryVotePenaltyCounterRequest;
                fromProtoMsg(message: _108.QueryVotePenaltyCounterRequestProtoMsg): _108.QueryVotePenaltyCounterRequest;
                toProto(message: _108.QueryVotePenaltyCounterRequest): Uint8Array;
                toProtoMsg(message: _108.QueryVotePenaltyCounterRequest): _108.QueryVotePenaltyCounterRequestProtoMsg;
            };
            QueryVotePenaltyCounterResponse: {
                typeUrl: string;
                encode(message: _108.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVotePenaltyCounterResponse;
                fromJSON(object: any): _108.QueryVotePenaltyCounterResponse;
                toJSON(message: _108.QueryVotePenaltyCounterResponse): unknown;
                fromPartial(object: Partial<_108.QueryVotePenaltyCounterResponse>): _108.QueryVotePenaltyCounterResponse;
                fromAmino(object: _108.QueryVotePenaltyCounterResponseAmino): _108.QueryVotePenaltyCounterResponse;
                toAmino(message: _108.QueryVotePenaltyCounterResponse): _108.QueryVotePenaltyCounterResponseAmino;
                fromAminoMsg(object: _108.QueryVotePenaltyCounterResponseAminoMsg): _108.QueryVotePenaltyCounterResponse;
                fromProtoMsg(message: _108.QueryVotePenaltyCounterResponseProtoMsg): _108.QueryVotePenaltyCounterResponse;
                toProto(message: _108.QueryVotePenaltyCounterResponse): Uint8Array;
                toProtoMsg(message: _108.QueryVotePenaltyCounterResponse): _108.QueryVotePenaltyCounterResponseProtoMsg;
            };
            QuerySlashWindowRequest: {
                typeUrl: string;
                encode(_: _108.QuerySlashWindowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySlashWindowRequest;
                fromJSON(_: any): _108.QuerySlashWindowRequest;
                toJSON(_: _108.QuerySlashWindowRequest): unknown;
                fromPartial(_: Partial<_108.QuerySlashWindowRequest>): _108.QuerySlashWindowRequest;
                fromAmino(_: _108.QuerySlashWindowRequestAmino): _108.QuerySlashWindowRequest;
                toAmino(_: _108.QuerySlashWindowRequest): _108.QuerySlashWindowRequestAmino;
                fromAminoMsg(object: _108.QuerySlashWindowRequestAminoMsg): _108.QuerySlashWindowRequest;
                fromProtoMsg(message: _108.QuerySlashWindowRequestProtoMsg): _108.QuerySlashWindowRequest;
                toProto(message: _108.QuerySlashWindowRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySlashWindowRequest): _108.QuerySlashWindowRequestProtoMsg;
            };
            QuerySlashWindowResponse: {
                typeUrl: string;
                encode(message: _108.QuerySlashWindowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySlashWindowResponse;
                fromJSON(object: any): _108.QuerySlashWindowResponse;
                toJSON(message: _108.QuerySlashWindowResponse): unknown;
                fromPartial(object: Partial<_108.QuerySlashWindowResponse>): _108.QuerySlashWindowResponse;
                fromAmino(object: _108.QuerySlashWindowResponseAmino): _108.QuerySlashWindowResponse;
                toAmino(message: _108.QuerySlashWindowResponse): _108.QuerySlashWindowResponseAmino;
                fromAminoMsg(object: _108.QuerySlashWindowResponseAminoMsg): _108.QuerySlashWindowResponse;
                fromProtoMsg(message: _108.QuerySlashWindowResponseProtoMsg): _108.QuerySlashWindowResponse;
                toProto(message: _108.QuerySlashWindowResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySlashWindowResponse): _108.QuerySlashWindowResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _108.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsRequest;
                fromJSON(_: any): _108.QueryParamsRequest;
                toJSON(_: _108.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_108.QueryParamsRequest>): _108.QueryParamsRequest;
                fromAmino(_: _108.QueryParamsRequestAmino): _108.QueryParamsRequest;
                toAmino(_: _108.QueryParamsRequest): _108.QueryParamsRequestAmino;
                fromAminoMsg(object: _108.QueryParamsRequestAminoMsg): _108.QueryParamsRequest;
                fromProtoMsg(message: _108.QueryParamsRequestProtoMsg): _108.QueryParamsRequest;
                toProto(message: _108.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _108.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsResponse;
                fromJSON(object: any): _108.QueryParamsResponse;
                toJSON(message: _108.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_108.QueryParamsResponse>): _108.QueryParamsResponse;
                fromAmino(object: _108.QueryParamsResponseAmino): _108.QueryParamsResponse;
                toAmino(message: _108.QueryParamsResponse): _108.QueryParamsResponseAmino;
                fromAminoMsg(object: _108.QueryParamsResponseAminoMsg): _108.QueryParamsResponse;
                fromProtoMsg(message: _108.QueryParamsResponseProtoMsg): _108.QueryParamsResponse;
                toProto(message: _108.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Params;
                fromJSON(object: any): _107.Params;
                toJSON(message: _107.Params): unknown;
                fromPartial(object: Partial<_107.Params>): _107.Params;
                fromAmino(object: _107.ParamsAmino): _107.Params;
                toAmino(message: _107.Params): _107.ParamsAmino;
                fromAminoMsg(object: _107.ParamsAminoMsg): _107.Params;
                fromProtoMsg(message: _107.ParamsProtoMsg): _107.Params;
                toProto(message: _107.Params): Uint8Array;
                toProtoMsg(message: _107.Params): _107.ParamsProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _107.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Denom;
                fromJSON(object: any): _107.Denom;
                toJSON(message: _107.Denom): unknown;
                fromPartial(object: Partial<_107.Denom>): _107.Denom;
                fromAmino(object: _107.DenomAmino): _107.Denom;
                toAmino(message: _107.Denom): _107.DenomAmino;
                fromAminoMsg(object: _107.DenomAminoMsg): _107.Denom;
                fromProtoMsg(message: _107.DenomProtoMsg): _107.Denom;
                toProto(message: _107.Denom): Uint8Array;
                toProtoMsg(message: _107.Denom): _107.DenomProtoMsg;
            };
            AggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _107.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.AggregateExchangeRateVote;
                fromJSON(object: any): _107.AggregateExchangeRateVote;
                toJSON(message: _107.AggregateExchangeRateVote): unknown;
                fromPartial(object: Partial<_107.AggregateExchangeRateVote>): _107.AggregateExchangeRateVote;
                fromAmino(object: _107.AggregateExchangeRateVoteAmino): _107.AggregateExchangeRateVote;
                toAmino(message: _107.AggregateExchangeRateVote): _107.AggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _107.AggregateExchangeRateVoteAminoMsg): _107.AggregateExchangeRateVote;
                fromProtoMsg(message: _107.AggregateExchangeRateVoteProtoMsg): _107.AggregateExchangeRateVote;
                toProto(message: _107.AggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _107.AggregateExchangeRateVote): _107.AggregateExchangeRateVoteProtoMsg;
            };
            ExchangeRateTuple: {
                typeUrl: string;
                encode(message: _107.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ExchangeRateTuple;
                fromJSON(object: any): _107.ExchangeRateTuple;
                toJSON(message: _107.ExchangeRateTuple): unknown;
                fromPartial(object: Partial<_107.ExchangeRateTuple>): _107.ExchangeRateTuple;
                fromAmino(object: _107.ExchangeRateTupleAmino): _107.ExchangeRateTuple;
                toAmino(message: _107.ExchangeRateTuple): _107.ExchangeRateTupleAmino;
                fromAminoMsg(object: _107.ExchangeRateTupleAminoMsg): _107.ExchangeRateTuple;
                fromProtoMsg(message: _107.ExchangeRateTupleProtoMsg): _107.ExchangeRateTuple;
                toProto(message: _107.ExchangeRateTuple): Uint8Array;
                toProtoMsg(message: _107.ExchangeRateTuple): _107.ExchangeRateTupleProtoMsg;
            };
            OracleExchangeRate: {
                typeUrl: string;
                encode(message: _107.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.OracleExchangeRate;
                fromJSON(object: any): _107.OracleExchangeRate;
                toJSON(message: _107.OracleExchangeRate): unknown;
                fromPartial(object: Partial<_107.OracleExchangeRate>): _107.OracleExchangeRate;
                fromAmino(object: _107.OracleExchangeRateAmino): _107.OracleExchangeRate;
                toAmino(message: _107.OracleExchangeRate): _107.OracleExchangeRateAmino;
                fromAminoMsg(object: _107.OracleExchangeRateAminoMsg): _107.OracleExchangeRate;
                fromProtoMsg(message: _107.OracleExchangeRateProtoMsg): _107.OracleExchangeRate;
                toProto(message: _107.OracleExchangeRate): Uint8Array;
                toProtoMsg(message: _107.OracleExchangeRate): _107.OracleExchangeRateProtoMsg;
            };
            PriceSnapshotItem: {
                typeUrl: string;
                encode(message: _107.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PriceSnapshotItem;
                fromJSON(object: any): _107.PriceSnapshotItem;
                toJSON(message: _107.PriceSnapshotItem): unknown;
                fromPartial(object: Partial<_107.PriceSnapshotItem>): _107.PriceSnapshotItem;
                fromAmino(object: _107.PriceSnapshotItemAmino): _107.PriceSnapshotItem;
                toAmino(message: _107.PriceSnapshotItem): _107.PriceSnapshotItemAmino;
                fromAminoMsg(object: _107.PriceSnapshotItemAminoMsg): _107.PriceSnapshotItem;
                fromProtoMsg(message: _107.PriceSnapshotItemProtoMsg): _107.PriceSnapshotItem;
                toProto(message: _107.PriceSnapshotItem): Uint8Array;
                toProtoMsg(message: _107.PriceSnapshotItem): _107.PriceSnapshotItemProtoMsg;
            };
            PriceSnapshot: {
                typeUrl: string;
                encode(message: _107.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PriceSnapshot;
                fromJSON(object: any): _107.PriceSnapshot;
                toJSON(message: _107.PriceSnapshot): unknown;
                fromPartial(object: Partial<_107.PriceSnapshot>): _107.PriceSnapshot;
                fromAmino(object: _107.PriceSnapshotAmino): _107.PriceSnapshot;
                toAmino(message: _107.PriceSnapshot): _107.PriceSnapshotAmino;
                fromAminoMsg(object: _107.PriceSnapshotAminoMsg): _107.PriceSnapshot;
                fromProtoMsg(message: _107.PriceSnapshotProtoMsg): _107.PriceSnapshot;
                toProto(message: _107.PriceSnapshot): Uint8Array;
                toProtoMsg(message: _107.PriceSnapshot): _107.PriceSnapshotProtoMsg;
            };
            OracleTwap: {
                typeUrl: string;
                encode(message: _107.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.OracleTwap;
                fromJSON(object: any): _107.OracleTwap;
                toJSON(message: _107.OracleTwap): unknown;
                fromPartial(object: Partial<_107.OracleTwap>): _107.OracleTwap;
                fromAmino(object: _107.OracleTwapAmino): _107.OracleTwap;
                toAmino(message: _107.OracleTwap): _107.OracleTwapAmino;
                fromAminoMsg(object: _107.OracleTwapAminoMsg): _107.OracleTwap;
                fromProtoMsg(message: _107.OracleTwapProtoMsg): _107.OracleTwap;
                toProto(message: _107.OracleTwap): Uint8Array;
                toProtoMsg(message: _107.OracleTwap): _107.OracleTwapProtoMsg;
            };
            VotePenaltyCounter: {
                typeUrl: string;
                encode(message: _107.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.VotePenaltyCounter;
                fromJSON(object: any): _107.VotePenaltyCounter;
                toJSON(message: _107.VotePenaltyCounter): unknown;
                fromPartial(object: Partial<_107.VotePenaltyCounter>): _107.VotePenaltyCounter;
                fromAmino(object: _107.VotePenaltyCounterAmino): _107.VotePenaltyCounter;
                toAmino(message: _107.VotePenaltyCounter): _107.VotePenaltyCounterAmino;
                fromAminoMsg(object: _107.VotePenaltyCounterAminoMsg): _107.VotePenaltyCounter;
                fromProtoMsg(message: _107.VotePenaltyCounterProtoMsg): _107.VotePenaltyCounter;
                toProto(message: _107.VotePenaltyCounter): Uint8Array;
                toProtoMsg(message: _107.VotePenaltyCounter): _107.VotePenaltyCounterProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromJSON(object: any): _106.GenesisState;
                toJSON(message: _106.GenesisState): unknown;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                toProto(message: _106.GenesisState): Uint8Array;
                toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
            };
            FeederDelegation: {
                typeUrl: string;
                encode(message: _106.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FeederDelegation;
                fromJSON(object: any): _106.FeederDelegation;
                toJSON(message: _106.FeederDelegation): unknown;
                fromPartial(object: Partial<_106.FeederDelegation>): _106.FeederDelegation;
                fromAmino(object: _106.FeederDelegationAmino): _106.FeederDelegation;
                toAmino(message: _106.FeederDelegation): _106.FeederDelegationAmino;
                fromAminoMsg(object: _106.FeederDelegationAminoMsg): _106.FeederDelegation;
                fromProtoMsg(message: _106.FeederDelegationProtoMsg): _106.FeederDelegation;
                toProto(message: _106.FeederDelegation): Uint8Array;
                toProtoMsg(message: _106.FeederDelegation): _106.FeederDelegationProtoMsg;
            };
            PenaltyCounter: {
                typeUrl: string;
                encode(message: _106.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.PenaltyCounter;
                fromJSON(object: any): _106.PenaltyCounter;
                toJSON(message: _106.PenaltyCounter): unknown;
                fromPartial(object: Partial<_106.PenaltyCounter>): _106.PenaltyCounter;
                fromAmino(object: _106.PenaltyCounterAmino): _106.PenaltyCounter;
                toAmino(message: _106.PenaltyCounter): _106.PenaltyCounterAmino;
                fromAminoMsg(object: _106.PenaltyCounterAminoMsg): _106.PenaltyCounter;
                fromProtoMsg(message: _106.PenaltyCounterProtoMsg): _106.PenaltyCounter;
                toProto(message: _106.PenaltyCounter): Uint8Array;
                toProtoMsg(message: _106.PenaltyCounter): _106.PenaltyCounterProtoMsg;
            };
        };
        const tokenfactory: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                denomAuthorityMetadata(request: _113.QueryDenomAuthorityMetadataRequest): Promise<_113.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _113.QueryDenomsFromCreatorRequest): Promise<_113.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _114.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _114.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _114.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _114.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _114.MsgCreateDenom): {
                        typeUrl: string;
                        value: _114.MsgCreateDenom;
                    };
                    mint(value: _114.MsgMint): {
                        typeUrl: string;
                        value: _114.MsgMint;
                    };
                    burn(value: _114.MsgBurn): {
                        typeUrl: string;
                        value: _114.MsgBurn;
                    };
                    changeAdmin(value: _114.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _114.MsgChangeAdmin;
                    };
                };
                toJSON: {
                    createDenom(value: _114.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _114.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _114.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _114.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _114.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _114.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _114.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _114.MsgCreateDenom): {
                        typeUrl: string;
                        value: _114.MsgCreateDenom;
                    };
                    mint(value: _114.MsgMint): {
                        typeUrl: string;
                        value: _114.MsgMint;
                    };
                    burn(value: _114.MsgBurn): {
                        typeUrl: string;
                        value: _114.MsgBurn;
                    };
                    changeAdmin(value: _114.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _114.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreateDenom) => _114.MsgCreateDenomAmino;
                    fromAmino: (object: _114.MsgCreateDenomAmino) => _114.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _114.MsgMint) => _114.MsgMintAmino;
                    fromAmino: (object: _114.MsgMintAmino) => _114.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _114.MsgBurn) => _114.MsgBurnAmino;
                    fromAmino: (object: _114.MsgBurnAmino) => _114.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _114.MsgChangeAdmin) => _114.MsgChangeAdminAmino;
                    fromAmino: (object: _114.MsgChangeAdminAmino) => _114.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _114.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateDenom;
                fromJSON(object: any): _114.MsgCreateDenom;
                toJSON(message: _114.MsgCreateDenom): unknown;
                fromPartial(object: Partial<_114.MsgCreateDenom>): _114.MsgCreateDenom;
                fromAmino(object: _114.MsgCreateDenomAmino): _114.MsgCreateDenom;
                toAmino(message: _114.MsgCreateDenom): _114.MsgCreateDenomAmino;
                fromAminoMsg(object: _114.MsgCreateDenomAminoMsg): _114.MsgCreateDenom;
                fromProtoMsg(message: _114.MsgCreateDenomProtoMsg): _114.MsgCreateDenom;
                toProto(message: _114.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _114.MsgCreateDenom): _114.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _114.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateDenomResponse;
                fromJSON(object: any): _114.MsgCreateDenomResponse;
                toJSON(message: _114.MsgCreateDenomResponse): unknown;
                fromPartial(object: Partial<_114.MsgCreateDenomResponse>): _114.MsgCreateDenomResponse;
                fromAmino(object: _114.MsgCreateDenomResponseAmino): _114.MsgCreateDenomResponse;
                toAmino(message: _114.MsgCreateDenomResponse): _114.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _114.MsgCreateDenomResponseAminoMsg): _114.MsgCreateDenomResponse;
                fromProtoMsg(message: _114.MsgCreateDenomResponseProtoMsg): _114.MsgCreateDenomResponse;
                toProto(message: _114.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreateDenomResponse): _114.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _114.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgMint;
                fromJSON(object: any): _114.MsgMint;
                toJSON(message: _114.MsgMint): unknown;
                fromPartial(object: Partial<_114.MsgMint>): _114.MsgMint;
                fromAmino(object: _114.MsgMintAmino): _114.MsgMint;
                toAmino(message: _114.MsgMint): _114.MsgMintAmino;
                fromAminoMsg(object: _114.MsgMintAminoMsg): _114.MsgMint;
                fromProtoMsg(message: _114.MsgMintProtoMsg): _114.MsgMint;
                toProto(message: _114.MsgMint): Uint8Array;
                toProtoMsg(message: _114.MsgMint): _114.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _114.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgMintResponse;
                fromJSON(_: any): _114.MsgMintResponse;
                toJSON(_: _114.MsgMintResponse): unknown;
                fromPartial(_: Partial<_114.MsgMintResponse>): _114.MsgMintResponse;
                fromAmino(_: _114.MsgMintResponseAmino): _114.MsgMintResponse;
                toAmino(_: _114.MsgMintResponse): _114.MsgMintResponseAmino;
                fromAminoMsg(object: _114.MsgMintResponseAminoMsg): _114.MsgMintResponse;
                fromProtoMsg(message: _114.MsgMintResponseProtoMsg): _114.MsgMintResponse;
                toProto(message: _114.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _114.MsgMintResponse): _114.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _114.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgBurn;
                fromJSON(object: any): _114.MsgBurn;
                toJSON(message: _114.MsgBurn): unknown;
                fromPartial(object: Partial<_114.MsgBurn>): _114.MsgBurn;
                fromAmino(object: _114.MsgBurnAmino): _114.MsgBurn;
                toAmino(message: _114.MsgBurn): _114.MsgBurnAmino;
                fromAminoMsg(object: _114.MsgBurnAminoMsg): _114.MsgBurn;
                fromProtoMsg(message: _114.MsgBurnProtoMsg): _114.MsgBurn;
                toProto(message: _114.MsgBurn): Uint8Array;
                toProtoMsg(message: _114.MsgBurn): _114.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _114.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgBurnResponse;
                fromJSON(_: any): _114.MsgBurnResponse;
                toJSON(_: _114.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_114.MsgBurnResponse>): _114.MsgBurnResponse;
                fromAmino(_: _114.MsgBurnResponseAmino): _114.MsgBurnResponse;
                toAmino(_: _114.MsgBurnResponse): _114.MsgBurnResponseAmino;
                fromAminoMsg(object: _114.MsgBurnResponseAminoMsg): _114.MsgBurnResponse;
                fromProtoMsg(message: _114.MsgBurnResponseProtoMsg): _114.MsgBurnResponse;
                toProto(message: _114.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _114.MsgBurnResponse): _114.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _114.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChangeAdmin;
                fromJSON(object: any): _114.MsgChangeAdmin;
                toJSON(message: _114.MsgChangeAdmin): unknown;
                fromPartial(object: Partial<_114.MsgChangeAdmin>): _114.MsgChangeAdmin;
                fromAmino(object: _114.MsgChangeAdminAmino): _114.MsgChangeAdmin;
                toAmino(message: _114.MsgChangeAdmin): _114.MsgChangeAdminAmino;
                fromAminoMsg(object: _114.MsgChangeAdminAminoMsg): _114.MsgChangeAdmin;
                fromProtoMsg(message: _114.MsgChangeAdminProtoMsg): _114.MsgChangeAdmin;
                toProto(message: _114.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _114.MsgChangeAdmin): _114.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _114.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChangeAdminResponse;
                fromJSON(_: any): _114.MsgChangeAdminResponse;
                toJSON(_: _114.MsgChangeAdminResponse): unknown;
                fromPartial(_: Partial<_114.MsgChangeAdminResponse>): _114.MsgChangeAdminResponse;
                fromAmino(_: _114.MsgChangeAdminResponseAmino): _114.MsgChangeAdminResponse;
                toAmino(_: _114.MsgChangeAdminResponse): _114.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _114.MsgChangeAdminResponseAminoMsg): _114.MsgChangeAdminResponse;
                fromProtoMsg(message: _114.MsgChangeAdminResponseProtoMsg): _114.MsgChangeAdminResponse;
                toProto(message: _114.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _114.MsgChangeAdminResponse): _114.MsgChangeAdminResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _113.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsRequest;
                fromJSON(_: any): _113.QueryParamsRequest;
                toJSON(_: _113.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_113.QueryParamsRequest>): _113.QueryParamsRequest;
                fromAmino(_: _113.QueryParamsRequestAmino): _113.QueryParamsRequest;
                toAmino(_: _113.QueryParamsRequest): _113.QueryParamsRequestAmino;
                fromAminoMsg(object: _113.QueryParamsRequestAminoMsg): _113.QueryParamsRequest;
                fromProtoMsg(message: _113.QueryParamsRequestProtoMsg): _113.QueryParamsRequest;
                toProto(message: _113.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryParamsRequest): _113.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _113.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsResponse;
                fromJSON(object: any): _113.QueryParamsResponse;
                toJSON(message: _113.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_113.QueryParamsResponse>): _113.QueryParamsResponse;
                fromAmino(object: _113.QueryParamsResponseAmino): _113.QueryParamsResponse;
                toAmino(message: _113.QueryParamsResponse): _113.QueryParamsResponseAmino;
                fromAminoMsg(object: _113.QueryParamsResponseAminoMsg): _113.QueryParamsResponse;
                fromProtoMsg(message: _113.QueryParamsResponseProtoMsg): _113.QueryParamsResponse;
                toProto(message: _113.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryParamsResponse): _113.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _113.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _113.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _113.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: Partial<_113.QueryDenomAuthorityMetadataRequest>): _113.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _113.QueryDenomAuthorityMetadataRequestAmino): _113.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _113.QueryDenomAuthorityMetadataRequest): _113.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _113.QueryDenomAuthorityMetadataRequestAminoMsg): _113.QueryDenomAuthorityMetadataRequest;
                fromProtoMsg(message: _113.QueryDenomAuthorityMetadataRequestProtoMsg): _113.QueryDenomAuthorityMetadataRequest;
                toProto(message: _113.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _113.QueryDenomAuthorityMetadataRequest): _113.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _113.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _113.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _113.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: Partial<_113.QueryDenomAuthorityMetadataResponse>): _113.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _113.QueryDenomAuthorityMetadataResponseAmino): _113.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _113.QueryDenomAuthorityMetadataResponse): _113.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _113.QueryDenomAuthorityMetadataResponseAminoMsg): _113.QueryDenomAuthorityMetadataResponse;
                fromProtoMsg(message: _113.QueryDenomAuthorityMetadataResponseProtoMsg): _113.QueryDenomAuthorityMetadataResponse;
                toProto(message: _113.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _113.QueryDenomAuthorityMetadataResponse): _113.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _113.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _113.QueryDenomsFromCreatorRequest;
                toJSON(message: _113.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: Partial<_113.QueryDenomsFromCreatorRequest>): _113.QueryDenomsFromCreatorRequest;
                fromAmino(object: _113.QueryDenomsFromCreatorRequestAmino): _113.QueryDenomsFromCreatorRequest;
                toAmino(message: _113.QueryDenomsFromCreatorRequest): _113.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _113.QueryDenomsFromCreatorRequestAminoMsg): _113.QueryDenomsFromCreatorRequest;
                fromProtoMsg(message: _113.QueryDenomsFromCreatorRequestProtoMsg): _113.QueryDenomsFromCreatorRequest;
                toProto(message: _113.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _113.QueryDenomsFromCreatorRequest): _113.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _113.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _113.QueryDenomsFromCreatorResponse;
                toJSON(message: _113.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: Partial<_113.QueryDenomsFromCreatorResponse>): _113.QueryDenomsFromCreatorResponse;
                fromAmino(object: _113.QueryDenomsFromCreatorResponseAmino): _113.QueryDenomsFromCreatorResponse;
                toAmino(message: _113.QueryDenomsFromCreatorResponse): _113.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _113.QueryDenomsFromCreatorResponseAminoMsg): _113.QueryDenomsFromCreatorResponse;
                fromProtoMsg(message: _113.QueryDenomsFromCreatorResponseProtoMsg): _113.QueryDenomsFromCreatorResponse;
                toProto(message: _113.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _113.QueryDenomsFromCreatorResponse): _113.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Params;
                fromJSON(_: any): _112.Params;
                toJSON(_: _112.Params): unknown;
                fromPartial(_: Partial<_112.Params>): _112.Params;
                fromAmino(_: _112.ParamsAmino): _112.Params;
                toAmino(_: _112.Params): _112.ParamsAmino;
                fromAminoMsg(object: _112.ParamsAminoMsg): _112.Params;
                fromProtoMsg(message: _112.ParamsProtoMsg): _112.Params;
                toProto(message: _112.Params): Uint8Array;
                toProtoMsg(message: _112.Params): _112.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
                fromJSON(object: any): _111.GenesisState;
                toJSON(message: _111.GenesisState): unknown;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                toProto(message: _111.GenesisState): Uint8Array;
                toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _111.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisDenom;
                fromJSON(object: any): _111.GenesisDenom;
                toJSON(message: _111.GenesisDenom): unknown;
                fromPartial(object: Partial<_111.GenesisDenom>): _111.GenesisDenom;
                fromAmino(object: _111.GenesisDenomAmino): _111.GenesisDenom;
                toAmino(message: _111.GenesisDenom): _111.GenesisDenomAmino;
                fromAminoMsg(object: _111.GenesisDenomAminoMsg): _111.GenesisDenom;
                fromProtoMsg(message: _111.GenesisDenomProtoMsg): _111.GenesisDenom;
                toProto(message: _111.GenesisDenom): Uint8Array;
                toProtoMsg(message: _111.GenesisDenom): _111.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _110.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DenomAuthorityMetadata;
                fromJSON(object: any): _110.DenomAuthorityMetadata;
                toJSON(message: _110.DenomAuthorityMetadata): unknown;
                fromPartial(object: Partial<_110.DenomAuthorityMetadata>): _110.DenomAuthorityMetadata;
                fromAmino(object: _110.DenomAuthorityMetadataAmino): _110.DenomAuthorityMetadata;
                toAmino(message: _110.DenomAuthorityMetadata): _110.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _110.DenomAuthorityMetadataAminoMsg): _110.DenomAuthorityMetadata;
                fromProtoMsg(message: _110.DenomAuthorityMetadataProtoMsg): _110.DenomAuthorityMetadata;
                toProto(message: _110.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _110.DenomAuthorityMetadata): _110.DenomAuthorityMetadataProtoMsg;
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
                    dex: _201.MsgClientImpl;
                    oracle: _202.MsgClientImpl;
                    tokenfactory: _203.MsgClientImpl;
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
                        params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                        longBook(request: _91.QueryGetLongBookRequest): Promise<_91.QueryGetLongBookResponse>;
                        longBookAll(request: _91.QueryAllLongBookRequest): Promise<_91.QueryAllLongBookResponse>;
                        shortBook(request: _91.QueryGetShortBookRequest): Promise<_91.QueryGetShortBookResponse>;
                        shortBookAll(request: _91.QueryAllShortBookRequest): Promise<_91.QueryAllShortBookResponse>;
                        getPrice(request: _91.QueryGetPriceRequest): Promise<_91.QueryGetPriceResponse>;
                        getLatestPrice(request: _91.QueryGetLatestPriceRequest): Promise<_91.QueryGetLatestPriceResponse>;
                        getPrices(request: _91.QueryGetPricesRequest): Promise<_91.QueryGetPricesResponse>;
                        getTwaps(request: _91.QueryGetTwapsRequest): Promise<_91.QueryGetTwapsResponse>;
                        assetMetadata(request: _91.QueryAssetMetadataRequest): Promise<_91.QueryAssetMetadataResponse>;
                        assetList(request?: _91.QueryAssetListRequest): Promise<_91.QueryAssetListResponse>;
                        getRegisteredPairs(request: _91.QueryRegisteredPairsRequest): Promise<_91.QueryRegisteredPairsResponse>;
                        getRegisteredContract(request: _91.QueryRegisteredContractRequest): Promise<_91.QueryRegisteredContractResponse>;
                        getOrders(request: _91.QueryGetOrdersRequest): Promise<_91.QueryGetOrdersResponse>;
                        getOrder(request: _91.QueryGetOrderByIDRequest): Promise<_91.QueryGetOrderByIDResponse>;
                        getHistoricalPrices(request: _91.QueryGetHistoricalPricesRequest): Promise<_91.QueryGetHistoricalPricesResponse>;
                        getMarketSummary(request: _91.QueryGetMarketSummaryRequest): Promise<_91.QueryGetMarketSummaryResponse>;
                        getOrderSimulation(request: _91.QueryOrderSimulationRequest): Promise<_91.QueryOrderSimulationResponse>;
                        getMatchResult(request: _91.QueryGetMatchResultRequest): Promise<_91.QueryGetMatchResultResponse>;
                        getOrderCount(request: _91.QueryGetOrderCountRequest): Promise<_91.QueryGetOrderCountResponse>;
                    };
                    epoch: {
                        epoch(request?: _100.QueryEpochRequest): Promise<_100.QueryEpochResponse>;
                        params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                    };
                    mint: {
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        minter(request?: _105.QueryMinterRequest): Promise<_105.QueryMinterResponse>;
                    };
                    oracle: {
                        exchangeRate(request: _108.QueryExchangeRateRequest): Promise<_108.QueryExchangeRateResponse>;
                        exchangeRates(request?: _108.QueryExchangeRatesRequest): Promise<_108.QueryExchangeRatesResponse>;
                        actives(request?: _108.QueryActivesRequest): Promise<_108.QueryActivesResponse>;
                        voteTargets(request?: _108.QueryVoteTargetsRequest): Promise<_108.QueryVoteTargetsResponse>;
                        priceSnapshotHistory(request?: _108.QueryPriceSnapshotHistoryRequest): Promise<_108.QueryPriceSnapshotHistoryResponse>;
                        twaps(request: _108.QueryTwapsRequest): Promise<_108.QueryTwapsResponse>;
                        feederDelegation(request: _108.QueryFeederDelegationRequest): Promise<_108.QueryFeederDelegationResponse>;
                        votePenaltyCounter(request: _108.QueryVotePenaltyCounterRequest): Promise<_108.QueryVotePenaltyCounterResponse>;
                        slashWindow(request?: _108.QuerySlashWindowRequest): Promise<_108.QuerySlashWindowResponse>;
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                    };
                    tokenfactory: {
                        params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _113.QueryDenomAuthorityMetadataRequest): Promise<_113.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _113.QueryDenomsFromCreatorRequest): Promise<_113.QueryDenomsFromCreatorResponse>;
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
                    dex: _191.LCDQueryClient;
                    epoch: _192.LCDQueryClient;
                    mint: _193.LCDQueryClient;
                    oracle: _194.LCDQueryClient;
                    tokenfactory: _195.LCDQueryClient;
                };
            };
        }>;
    };
}
