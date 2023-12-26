import * as _119 from "./seichain/dex/asset_list";
import * as _120 from "./seichain/dex/contract";
import * as _121 from "./seichain/dex/deposit";
import * as _122 from "./seichain/dex/enums";
import * as _123 from "./seichain/dex/genesis";
import * as _124 from "./seichain/dex/gov";
import * as _125 from "./seichain/dex/long_book";
import * as _126 from "./seichain/dex/match_result";
import * as _127 from "./seichain/dex/order_entry";
import * as _128 from "./seichain/dex/order";
import * as _129 from "./seichain/dex/pair";
import * as _130 from "./seichain/dex/params";
import * as _131 from "./seichain/dex/price";
import * as _132 from "./seichain/dex/query";
import * as _133 from "./seichain/dex/settlement";
import * as _134 from "./seichain/dex/short_book";
import * as _135 from "./seichain/dex/tick_size";
import * as _136 from "./seichain/dex/twap";
import * as _137 from "./seichain/dex/tx";
import * as _143 from "./seichain/epoch/epoch";
import * as _144 from "./seichain/epoch/genesis";
import * as _145 from "./seichain/epoch/params";
import * as _146 from "./seichain/epoch/query";
import * as _152 from "./seichain/mint/v1beta1/genesis";
import * as _153 from "./seichain/mint/v1beta1/gov";
import * as _154 from "./seichain/mint/v1beta1/mint";
import * as _155 from "./seichain/mint/v1beta1/query";
import * as _160 from "./seichain/oracle/genesis";
import * as _161 from "./seichain/oracle/oracle";
import * as _162 from "./seichain/oracle/query";
import * as _163 from "./seichain/oracle/tx";
import * as _169 from "../tokenfactory/authorityMetadata";
import * as _170 from "../tokenfactory/genesis";
import * as _171 from "../tokenfactory/params";
import * as _172 from "../tokenfactory/query";
import * as _173 from "../tokenfactory/tx";
import * as _315 from "./seichain/dex/query.lcd";
import * as _316 from "./seichain/epoch/query.lcd";
import * as _317 from "./seichain/mint/v1beta1/query.lcd";
import * as _318 from "./seichain/oracle/query.lcd";
import * as _320 from "../tokenfactory/query.lcd";
import * as _325 from "./seichain/dex/query.rpc.Query";
import * as _326 from "./seichain/epoch/query.rpc.Query";
import * as _327 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _328 from "./seichain/oracle/query.rpc.Query";
import * as _330 from "../tokenfactory/query.rpc.Query";
import * as _333 from "./seichain/dex/tx.rpc.msg";
import * as _334 from "./seichain/oracle/tx.rpc.msg";
import * as _336 from "../tokenfactory/tx.rpc.msg";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            MsgClientImpl: typeof _333.MsgClientImpl;
            QueryClientImpl: typeof _325.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                longBook(request: _132.QueryGetLongBookRequest): Promise<_132.QueryGetLongBookResponse>;
                longBookAll(request: _132.QueryAllLongBookRequest): Promise<_132.QueryAllLongBookResponse>;
                shortBook(request: _132.QueryGetShortBookRequest): Promise<_132.QueryGetShortBookResponse>;
                shortBookAll(request: _132.QueryAllShortBookRequest): Promise<_132.QueryAllShortBookResponse>;
                getPrice(request: _132.QueryGetPriceRequest): Promise<_132.QueryGetPriceResponse>;
                getLatestPrice(request: _132.QueryGetLatestPriceRequest): Promise<_132.QueryGetLatestPriceResponse>;
                getPrices(request: _132.QueryGetPricesRequest): Promise<_132.QueryGetPricesResponse>;
                getTwaps(request: _132.QueryGetTwapsRequest): Promise<_132.QueryGetTwapsResponse>;
                assetMetadata(request: _132.QueryAssetMetadataRequest): Promise<_132.QueryAssetMetadataResponse>;
                assetList(request?: _132.QueryAssetListRequest): Promise<_132.QueryAssetListResponse>;
                getRegisteredPairs(request: _132.QueryRegisteredPairsRequest): Promise<_132.QueryRegisteredPairsResponse>;
                getRegisteredContract(request: _132.QueryRegisteredContractRequest): Promise<_132.QueryRegisteredContractResponse>;
                getOrders(request: _132.QueryGetOrdersRequest): Promise<_132.QueryGetOrdersResponse>;
                getOrder(request: _132.QueryGetOrderByIDRequest): Promise<_132.QueryGetOrderByIDResponse>;
                getHistoricalPrices(request: _132.QueryGetHistoricalPricesRequest): Promise<_132.QueryGetHistoricalPricesResponse>;
                getMarketSummary(request: _132.QueryGetMarketSummaryRequest): Promise<_132.QueryGetMarketSummaryResponse>;
                getOrderSimulation(request: _132.QueryOrderSimulationRequest): Promise<_132.QueryOrderSimulationResponse>;
                getMatchResult(request: _132.QueryGetMatchResultRequest): Promise<_132.QueryGetMatchResultResponse>;
                getOrderCount(request: _132.QueryGetOrderCountRequest): Promise<_132.QueryGetOrderCountResponse>;
            };
            LCDQueryClient: typeof _315.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeOrders(value: _137.MsgPlaceOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrders(value: _137.MsgCancelOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _137.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    contractDepositRent(value: _137.MsgContractDepositRent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterContract(value: _137.MsgUnregisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerPairs(value: _137.MsgRegisterPairs): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePriceTickSize(value: _137.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateQuantityTickSize(value: _137.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unsuspendContract(value: _137.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeOrders(value: _137.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _137.MsgPlaceOrders;
                    };
                    cancelOrders(value: _137.MsgCancelOrders): {
                        typeUrl: string;
                        value: _137.MsgCancelOrders;
                    };
                    registerContract(value: _137.MsgRegisterContract): {
                        typeUrl: string;
                        value: _137.MsgRegisterContract;
                    };
                    contractDepositRent(value: _137.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _137.MsgContractDepositRent;
                    };
                    unregisterContract(value: _137.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _137.MsgUnregisterContract;
                    };
                    registerPairs(value: _137.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _137.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _137.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _137.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _137.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _137.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _137.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _137.MsgUnsuspendContract;
                    };
                };
                toJSON: {
                    placeOrders(value: _137.MsgPlaceOrders): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelOrders(value: _137.MsgCancelOrders): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerContract(value: _137.MsgRegisterContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    contractDepositRent(value: _137.MsgContractDepositRent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unregisterContract(value: _137.MsgUnregisterContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerPairs(value: _137.MsgRegisterPairs): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePriceTickSize(value: _137.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateQuantityTickSize(value: _137.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unsuspendContract(value: _137.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    placeOrders(value: any): {
                        typeUrl: string;
                        value: _137.MsgPlaceOrders;
                    };
                    cancelOrders(value: any): {
                        typeUrl: string;
                        value: _137.MsgCancelOrders;
                    };
                    registerContract(value: any): {
                        typeUrl: string;
                        value: _137.MsgRegisterContract;
                    };
                    contractDepositRent(value: any): {
                        typeUrl: string;
                        value: _137.MsgContractDepositRent;
                    };
                    unregisterContract(value: any): {
                        typeUrl: string;
                        value: _137.MsgUnregisterContract;
                    };
                    registerPairs(value: any): {
                        typeUrl: string;
                        value: _137.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: any): {
                        typeUrl: string;
                        value: _137.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: any): {
                        typeUrl: string;
                        value: _137.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: any): {
                        typeUrl: string;
                        value: _137.MsgUnsuspendContract;
                    };
                };
                fromPartial: {
                    placeOrders(value: _137.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _137.MsgPlaceOrders;
                    };
                    cancelOrders(value: _137.MsgCancelOrders): {
                        typeUrl: string;
                        value: _137.MsgCancelOrders;
                    };
                    registerContract(value: _137.MsgRegisterContract): {
                        typeUrl: string;
                        value: _137.MsgRegisterContract;
                    };
                    contractDepositRent(value: _137.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _137.MsgContractDepositRent;
                    };
                    unregisterContract(value: _137.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _137.MsgUnregisterContract;
                    };
                    registerPairs(value: _137.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _137.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _137.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _137.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _137.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _137.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _137.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _137.MsgUnsuspendContract;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.dex.MsgPlaceOrders": {
                    aminoType: string;
                    toAmino: (message: _137.MsgPlaceOrders) => _137.MsgPlaceOrdersAmino;
                    fromAmino: (object: _137.MsgPlaceOrdersAmino) => _137.MsgPlaceOrders;
                };
                "/seiprotocol.seichain.dex.MsgCancelOrders": {
                    aminoType: string;
                    toAmino: (message: _137.MsgCancelOrders) => _137.MsgCancelOrdersAmino;
                    fromAmino: (object: _137.MsgCancelOrdersAmino) => _137.MsgCancelOrders;
                };
                "/seiprotocol.seichain.dex.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: (message: _137.MsgRegisterContract) => _137.MsgRegisterContractAmino;
                    fromAmino: (object: _137.MsgRegisterContractAmino) => _137.MsgRegisterContract;
                };
                "/seiprotocol.seichain.dex.MsgContractDepositRent": {
                    aminoType: string;
                    toAmino: (message: _137.MsgContractDepositRent) => _137.MsgContractDepositRentAmino;
                    fromAmino: (object: _137.MsgContractDepositRentAmino) => _137.MsgContractDepositRent;
                };
                "/seiprotocol.seichain.dex.MsgUnregisterContract": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUnregisterContract) => _137.MsgUnregisterContractAmino;
                    fromAmino: (object: _137.MsgUnregisterContractAmino) => _137.MsgUnregisterContract;
                };
                "/seiprotocol.seichain.dex.MsgRegisterPairs": {
                    aminoType: string;
                    toAmino: (message: _137.MsgRegisterPairs) => _137.MsgRegisterPairsAmino;
                    fromAmino: (object: _137.MsgRegisterPairsAmino) => _137.MsgRegisterPairs;
                };
                "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUpdatePriceTickSize) => _137.MsgUpdatePriceTickSizeAmino;
                    fromAmino: (object: _137.MsgUpdatePriceTickSizeAmino) => _137.MsgUpdatePriceTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUpdateQuantityTickSize) => _137.MsgUpdateQuantityTickSizeAmino;
                    fromAmino: (object: _137.MsgUpdateQuantityTickSizeAmino) => _137.MsgUpdateQuantityTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUnsuspendContract) => _137.MsgUnsuspendContractAmino;
                    fromAmino: (object: _137.MsgUnsuspendContractAmino) => _137.MsgUnsuspendContract;
                };
            };
            MsgPlaceOrders: {
                typeUrl: string;
                encode(message: _137.MsgPlaceOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgPlaceOrders;
                fromJSON(object: any): _137.MsgPlaceOrders;
                toJSON(message: _137.MsgPlaceOrders): unknown;
                fromPartial(object: Partial<_137.MsgPlaceOrders>): _137.MsgPlaceOrders;
                fromAmino(object: _137.MsgPlaceOrdersAmino): _137.MsgPlaceOrders;
                toAmino(message: _137.MsgPlaceOrders): _137.MsgPlaceOrdersAmino;
                fromAminoMsg(object: _137.MsgPlaceOrdersAminoMsg): _137.MsgPlaceOrders;
                fromProtoMsg(message: _137.MsgPlaceOrdersProtoMsg): _137.MsgPlaceOrders;
                toProto(message: _137.MsgPlaceOrders): Uint8Array;
                toProtoMsg(message: _137.MsgPlaceOrders): _137.MsgPlaceOrdersProtoMsg;
            };
            MsgPlaceOrdersResponse: {
                typeUrl: string;
                encode(message: _137.MsgPlaceOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgPlaceOrdersResponse;
                fromJSON(object: any): _137.MsgPlaceOrdersResponse;
                toJSON(message: _137.MsgPlaceOrdersResponse): unknown;
                fromPartial(object: Partial<_137.MsgPlaceOrdersResponse>): _137.MsgPlaceOrdersResponse;
                fromAmino(object: _137.MsgPlaceOrdersResponseAmino): _137.MsgPlaceOrdersResponse;
                toAmino(message: _137.MsgPlaceOrdersResponse): _137.MsgPlaceOrdersResponseAmino;
                fromAminoMsg(object: _137.MsgPlaceOrdersResponseAminoMsg): _137.MsgPlaceOrdersResponse;
                fromProtoMsg(message: _137.MsgPlaceOrdersResponseProtoMsg): _137.MsgPlaceOrdersResponse;
                toProto(message: _137.MsgPlaceOrdersResponse): Uint8Array;
                toProtoMsg(message: _137.MsgPlaceOrdersResponse): _137.MsgPlaceOrdersResponseProtoMsg;
            };
            MsgCancelOrders: {
                typeUrl: string;
                encode(message: _137.MsgCancelOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgCancelOrders;
                fromJSON(object: any): _137.MsgCancelOrders;
                toJSON(message: _137.MsgCancelOrders): unknown;
                fromPartial(object: Partial<_137.MsgCancelOrders>): _137.MsgCancelOrders;
                fromAmino(object: _137.MsgCancelOrdersAmino): _137.MsgCancelOrders;
                toAmino(message: _137.MsgCancelOrders): _137.MsgCancelOrdersAmino;
                fromAminoMsg(object: _137.MsgCancelOrdersAminoMsg): _137.MsgCancelOrders;
                fromProtoMsg(message: _137.MsgCancelOrdersProtoMsg): _137.MsgCancelOrders;
                toProto(message: _137.MsgCancelOrders): Uint8Array;
                toProtoMsg(message: _137.MsgCancelOrders): _137.MsgCancelOrdersProtoMsg;
            };
            MsgCancelOrdersResponse: {
                typeUrl: string;
                encode(_: _137.MsgCancelOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgCancelOrdersResponse;
                fromJSON(_: any): _137.MsgCancelOrdersResponse;
                toJSON(_: _137.MsgCancelOrdersResponse): unknown;
                fromPartial(_: Partial<_137.MsgCancelOrdersResponse>): _137.MsgCancelOrdersResponse;
                fromAmino(_: _137.MsgCancelOrdersResponseAmino): _137.MsgCancelOrdersResponse;
                toAmino(_: _137.MsgCancelOrdersResponse): _137.MsgCancelOrdersResponseAmino;
                fromAminoMsg(object: _137.MsgCancelOrdersResponseAminoMsg): _137.MsgCancelOrdersResponse;
                fromProtoMsg(message: _137.MsgCancelOrdersResponseProtoMsg): _137.MsgCancelOrdersResponse;
                toProto(message: _137.MsgCancelOrdersResponse): Uint8Array;
                toProtoMsg(message: _137.MsgCancelOrdersResponse): _137.MsgCancelOrdersResponseProtoMsg;
            };
            MsgRegisterContract: {
                typeUrl: string;
                encode(message: _137.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgRegisterContract;
                fromJSON(object: any): _137.MsgRegisterContract;
                toJSON(message: _137.MsgRegisterContract): unknown;
                fromPartial(object: Partial<_137.MsgRegisterContract>): _137.MsgRegisterContract;
                fromAmino(object: _137.MsgRegisterContractAmino): _137.MsgRegisterContract;
                toAmino(message: _137.MsgRegisterContract): _137.MsgRegisterContractAmino;
                fromAminoMsg(object: _137.MsgRegisterContractAminoMsg): _137.MsgRegisterContract;
                fromProtoMsg(message: _137.MsgRegisterContractProtoMsg): _137.MsgRegisterContract;
                toProto(message: _137.MsgRegisterContract): Uint8Array;
                toProtoMsg(message: _137.MsgRegisterContract): _137.MsgRegisterContractProtoMsg;
            };
            MsgRegisterContractResponse: {
                typeUrl: string;
                encode(_: _137.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgRegisterContractResponse;
                fromJSON(_: any): _137.MsgRegisterContractResponse;
                toJSON(_: _137.MsgRegisterContractResponse): unknown;
                fromPartial(_: Partial<_137.MsgRegisterContractResponse>): _137.MsgRegisterContractResponse;
                fromAmino(_: _137.MsgRegisterContractResponseAmino): _137.MsgRegisterContractResponse;
                toAmino(_: _137.MsgRegisterContractResponse): _137.MsgRegisterContractResponseAmino;
                fromAminoMsg(object: _137.MsgRegisterContractResponseAminoMsg): _137.MsgRegisterContractResponse;
                fromProtoMsg(message: _137.MsgRegisterContractResponseProtoMsg): _137.MsgRegisterContractResponse;
                toProto(message: _137.MsgRegisterContractResponse): Uint8Array;
                toProtoMsg(message: _137.MsgRegisterContractResponse): _137.MsgRegisterContractResponseProtoMsg;
            };
            MsgContractDepositRent: {
                typeUrl: string;
                encode(message: _137.MsgContractDepositRent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgContractDepositRent;
                fromJSON(object: any): _137.MsgContractDepositRent;
                toJSON(message: _137.MsgContractDepositRent): unknown;
                fromPartial(object: Partial<_137.MsgContractDepositRent>): _137.MsgContractDepositRent;
                fromAmino(object: _137.MsgContractDepositRentAmino): _137.MsgContractDepositRent;
                toAmino(message: _137.MsgContractDepositRent): _137.MsgContractDepositRentAmino;
                fromAminoMsg(object: _137.MsgContractDepositRentAminoMsg): _137.MsgContractDepositRent;
                fromProtoMsg(message: _137.MsgContractDepositRentProtoMsg): _137.MsgContractDepositRent;
                toProto(message: _137.MsgContractDepositRent): Uint8Array;
                toProtoMsg(message: _137.MsgContractDepositRent): _137.MsgContractDepositRentProtoMsg;
            };
            MsgContractDepositRentResponse: {
                typeUrl: string;
                encode(_: _137.MsgContractDepositRentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgContractDepositRentResponse;
                fromJSON(_: any): _137.MsgContractDepositRentResponse;
                toJSON(_: _137.MsgContractDepositRentResponse): unknown;
                fromPartial(_: Partial<_137.MsgContractDepositRentResponse>): _137.MsgContractDepositRentResponse;
                fromAmino(_: _137.MsgContractDepositRentResponseAmino): _137.MsgContractDepositRentResponse;
                toAmino(_: _137.MsgContractDepositRentResponse): _137.MsgContractDepositRentResponseAmino;
                fromAminoMsg(object: _137.MsgContractDepositRentResponseAminoMsg): _137.MsgContractDepositRentResponse;
                fromProtoMsg(message: _137.MsgContractDepositRentResponseProtoMsg): _137.MsgContractDepositRentResponse;
                toProto(message: _137.MsgContractDepositRentResponse): Uint8Array;
                toProtoMsg(message: _137.MsgContractDepositRentResponse): _137.MsgContractDepositRentResponseProtoMsg;
            };
            MsgUnregisterContract: {
                typeUrl: string;
                encode(message: _137.MsgUnregisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUnregisterContract;
                fromJSON(object: any): _137.MsgUnregisterContract;
                toJSON(message: _137.MsgUnregisterContract): unknown;
                fromPartial(object: Partial<_137.MsgUnregisterContract>): _137.MsgUnregisterContract;
                fromAmino(object: _137.MsgUnregisterContractAmino): _137.MsgUnregisterContract;
                toAmino(message: _137.MsgUnregisterContract): _137.MsgUnregisterContractAmino;
                fromAminoMsg(object: _137.MsgUnregisterContractAminoMsg): _137.MsgUnregisterContract;
                fromProtoMsg(message: _137.MsgUnregisterContractProtoMsg): _137.MsgUnregisterContract;
                toProto(message: _137.MsgUnregisterContract): Uint8Array;
                toProtoMsg(message: _137.MsgUnregisterContract): _137.MsgUnregisterContractProtoMsg;
            };
            MsgUnregisterContractResponse: {
                typeUrl: string;
                encode(_: _137.MsgUnregisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUnregisterContractResponse;
                fromJSON(_: any): _137.MsgUnregisterContractResponse;
                toJSON(_: _137.MsgUnregisterContractResponse): unknown;
                fromPartial(_: Partial<_137.MsgUnregisterContractResponse>): _137.MsgUnregisterContractResponse;
                fromAmino(_: _137.MsgUnregisterContractResponseAmino): _137.MsgUnregisterContractResponse;
                toAmino(_: _137.MsgUnregisterContractResponse): _137.MsgUnregisterContractResponseAmino;
                fromAminoMsg(object: _137.MsgUnregisterContractResponseAminoMsg): _137.MsgUnregisterContractResponse;
                fromProtoMsg(message: _137.MsgUnregisterContractResponseProtoMsg): _137.MsgUnregisterContractResponse;
                toProto(message: _137.MsgUnregisterContractResponse): Uint8Array;
                toProtoMsg(message: _137.MsgUnregisterContractResponse): _137.MsgUnregisterContractResponseProtoMsg;
            };
            MsgRegisterPairs: {
                typeUrl: string;
                encode(message: _137.MsgRegisterPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgRegisterPairs;
                fromJSON(object: any): _137.MsgRegisterPairs;
                toJSON(message: _137.MsgRegisterPairs): unknown;
                fromPartial(object: Partial<_137.MsgRegisterPairs>): _137.MsgRegisterPairs;
                fromAmino(object: _137.MsgRegisterPairsAmino): _137.MsgRegisterPairs;
                toAmino(message: _137.MsgRegisterPairs): _137.MsgRegisterPairsAmino;
                fromAminoMsg(object: _137.MsgRegisterPairsAminoMsg): _137.MsgRegisterPairs;
                fromProtoMsg(message: _137.MsgRegisterPairsProtoMsg): _137.MsgRegisterPairs;
                toProto(message: _137.MsgRegisterPairs): Uint8Array;
                toProtoMsg(message: _137.MsgRegisterPairs): _137.MsgRegisterPairsProtoMsg;
            };
            MsgRegisterPairsResponse: {
                typeUrl: string;
                encode(_: _137.MsgRegisterPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgRegisterPairsResponse;
                fromJSON(_: any): _137.MsgRegisterPairsResponse;
                toJSON(_: _137.MsgRegisterPairsResponse): unknown;
                fromPartial(_: Partial<_137.MsgRegisterPairsResponse>): _137.MsgRegisterPairsResponse;
                fromAmino(_: _137.MsgRegisterPairsResponseAmino): _137.MsgRegisterPairsResponse;
                toAmino(_: _137.MsgRegisterPairsResponse): _137.MsgRegisterPairsResponseAmino;
                fromAminoMsg(object: _137.MsgRegisterPairsResponseAminoMsg): _137.MsgRegisterPairsResponse;
                fromProtoMsg(message: _137.MsgRegisterPairsResponseProtoMsg): _137.MsgRegisterPairsResponse;
                toProto(message: _137.MsgRegisterPairsResponse): Uint8Array;
                toProtoMsg(message: _137.MsgRegisterPairsResponse): _137.MsgRegisterPairsResponseProtoMsg;
            };
            MsgUpdatePriceTickSize: {
                typeUrl: string;
                encode(message: _137.MsgUpdatePriceTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdatePriceTickSize;
                fromJSON(object: any): _137.MsgUpdatePriceTickSize;
                toJSON(message: _137.MsgUpdatePriceTickSize): unknown;
                fromPartial(object: Partial<_137.MsgUpdatePriceTickSize>): _137.MsgUpdatePriceTickSize;
                fromAmino(object: _137.MsgUpdatePriceTickSizeAmino): _137.MsgUpdatePriceTickSize;
                toAmino(message: _137.MsgUpdatePriceTickSize): _137.MsgUpdatePriceTickSizeAmino;
                fromAminoMsg(object: _137.MsgUpdatePriceTickSizeAminoMsg): _137.MsgUpdatePriceTickSize;
                fromProtoMsg(message: _137.MsgUpdatePriceTickSizeProtoMsg): _137.MsgUpdatePriceTickSize;
                toProto(message: _137.MsgUpdatePriceTickSize): Uint8Array;
                toProtoMsg(message: _137.MsgUpdatePriceTickSize): _137.MsgUpdatePriceTickSizeProtoMsg;
            };
            MsgUpdateQuantityTickSize: {
                typeUrl: string;
                encode(message: _137.MsgUpdateQuantityTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateQuantityTickSize;
                fromJSON(object: any): _137.MsgUpdateQuantityTickSize;
                toJSON(message: _137.MsgUpdateQuantityTickSize): unknown;
                fromPartial(object: Partial<_137.MsgUpdateQuantityTickSize>): _137.MsgUpdateQuantityTickSize;
                fromAmino(object: _137.MsgUpdateQuantityTickSizeAmino): _137.MsgUpdateQuantityTickSize;
                toAmino(message: _137.MsgUpdateQuantityTickSize): _137.MsgUpdateQuantityTickSizeAmino;
                fromAminoMsg(object: _137.MsgUpdateQuantityTickSizeAminoMsg): _137.MsgUpdateQuantityTickSize;
                fromProtoMsg(message: _137.MsgUpdateQuantityTickSizeProtoMsg): _137.MsgUpdateQuantityTickSize;
                toProto(message: _137.MsgUpdateQuantityTickSize): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateQuantityTickSize): _137.MsgUpdateQuantityTickSizeProtoMsg;
            };
            MsgUpdateTickSizeResponse: {
                typeUrl: string;
                encode(_: _137.MsgUpdateTickSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateTickSizeResponse;
                fromJSON(_: any): _137.MsgUpdateTickSizeResponse;
                toJSON(_: _137.MsgUpdateTickSizeResponse): unknown;
                fromPartial(_: Partial<_137.MsgUpdateTickSizeResponse>): _137.MsgUpdateTickSizeResponse;
                fromAmino(_: _137.MsgUpdateTickSizeResponseAmino): _137.MsgUpdateTickSizeResponse;
                toAmino(_: _137.MsgUpdateTickSizeResponse): _137.MsgUpdateTickSizeResponseAmino;
                fromAminoMsg(object: _137.MsgUpdateTickSizeResponseAminoMsg): _137.MsgUpdateTickSizeResponse;
                fromProtoMsg(message: _137.MsgUpdateTickSizeResponseProtoMsg): _137.MsgUpdateTickSizeResponse;
                toProto(message: _137.MsgUpdateTickSizeResponse): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateTickSizeResponse): _137.MsgUpdateTickSizeResponseProtoMsg;
            };
            MsgUnsuspendContract: {
                typeUrl: string;
                encode(message: _137.MsgUnsuspendContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUnsuspendContract;
                fromJSON(object: any): _137.MsgUnsuspendContract;
                toJSON(message: _137.MsgUnsuspendContract): unknown;
                fromPartial(object: Partial<_137.MsgUnsuspendContract>): _137.MsgUnsuspendContract;
                fromAmino(object: _137.MsgUnsuspendContractAmino): _137.MsgUnsuspendContract;
                toAmino(message: _137.MsgUnsuspendContract): _137.MsgUnsuspendContractAmino;
                fromAminoMsg(object: _137.MsgUnsuspendContractAminoMsg): _137.MsgUnsuspendContract;
                fromProtoMsg(message: _137.MsgUnsuspendContractProtoMsg): _137.MsgUnsuspendContract;
                toProto(message: _137.MsgUnsuspendContract): Uint8Array;
                toProtoMsg(message: _137.MsgUnsuspendContract): _137.MsgUnsuspendContractProtoMsg;
            };
            MsgUnsuspendContractResponse: {
                typeUrl: string;
                encode(_: _137.MsgUnsuspendContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUnsuspendContractResponse;
                fromJSON(_: any): _137.MsgUnsuspendContractResponse;
                toJSON(_: _137.MsgUnsuspendContractResponse): unknown;
                fromPartial(_: Partial<_137.MsgUnsuspendContractResponse>): _137.MsgUnsuspendContractResponse;
                fromAmino(_: _137.MsgUnsuspendContractResponseAmino): _137.MsgUnsuspendContractResponse;
                toAmino(_: _137.MsgUnsuspendContractResponse): _137.MsgUnsuspendContractResponseAmino;
                fromAminoMsg(object: _137.MsgUnsuspendContractResponseAminoMsg): _137.MsgUnsuspendContractResponse;
                fromProtoMsg(message: _137.MsgUnsuspendContractResponseProtoMsg): _137.MsgUnsuspendContractResponse;
                toProto(message: _137.MsgUnsuspendContractResponse): Uint8Array;
                toProtoMsg(message: _137.MsgUnsuspendContractResponse): _137.MsgUnsuspendContractResponseProtoMsg;
            };
            Twap: {
                typeUrl: string;
                encode(message: _136.Twap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Twap;
                fromJSON(object: any): _136.Twap;
                toJSON(message: _136.Twap): unknown;
                fromPartial(object: Partial<_136.Twap>): _136.Twap;
                fromAmino(object: _136.TwapAmino): _136.Twap;
                toAmino(message: _136.Twap): _136.TwapAmino;
                fromAminoMsg(object: _136.TwapAminoMsg): _136.Twap;
                fromProtoMsg(message: _136.TwapProtoMsg): _136.Twap;
                toProto(message: _136.Twap): Uint8Array;
                toProtoMsg(message: _136.Twap): _136.TwapProtoMsg;
            };
            TickSize: {
                typeUrl: string;
                encode(message: _135.TickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.TickSize;
                fromJSON(object: any): _135.TickSize;
                toJSON(message: _135.TickSize): unknown;
                fromPartial(object: Partial<_135.TickSize>): _135.TickSize;
                fromAmino(object: _135.TickSizeAmino): _135.TickSize;
                toAmino(message: _135.TickSize): _135.TickSizeAmino;
                fromAminoMsg(object: _135.TickSizeAminoMsg): _135.TickSize;
                fromProtoMsg(message: _135.TickSizeProtoMsg): _135.TickSize;
                toProto(message: _135.TickSize): Uint8Array;
                toProtoMsg(message: _135.TickSize): _135.TickSizeProtoMsg;
            };
            ShortBook: {
                typeUrl: string;
                encode(message: _134.ShortBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ShortBook;
                fromJSON(object: any): _134.ShortBook;
                toJSON(message: _134.ShortBook): unknown;
                fromPartial(object: Partial<_134.ShortBook>): _134.ShortBook;
                fromAmino(object: _134.ShortBookAmino): _134.ShortBook;
                toAmino(message: _134.ShortBook): _134.ShortBookAmino;
                fromAminoMsg(object: _134.ShortBookAminoMsg): _134.ShortBook;
                fromProtoMsg(message: _134.ShortBookProtoMsg): _134.ShortBook;
                toProto(message: _134.ShortBook): Uint8Array;
                toProtoMsg(message: _134.ShortBook): _134.ShortBookProtoMsg;
            };
            SettlementEntry: {
                typeUrl: string;
                encode(message: _133.SettlementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.SettlementEntry;
                fromJSON(object: any): _133.SettlementEntry;
                toJSON(message: _133.SettlementEntry): unknown;
                fromPartial(object: Partial<_133.SettlementEntry>): _133.SettlementEntry;
                fromAmino(object: _133.SettlementEntryAmino): _133.SettlementEntry;
                toAmino(message: _133.SettlementEntry): _133.SettlementEntryAmino;
                fromAminoMsg(object: _133.SettlementEntryAminoMsg): _133.SettlementEntry;
                fromProtoMsg(message: _133.SettlementEntryProtoMsg): _133.SettlementEntry;
                toProto(message: _133.SettlementEntry): Uint8Array;
                toProtoMsg(message: _133.SettlementEntry): _133.SettlementEntryProtoMsg;
            };
            Settlements: {
                typeUrl: string;
                encode(message: _133.Settlements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Settlements;
                fromJSON(object: any): _133.Settlements;
                toJSON(message: _133.Settlements): unknown;
                fromPartial(object: Partial<_133.Settlements>): _133.Settlements;
                fromAmino(object: _133.SettlementsAmino): _133.Settlements;
                toAmino(message: _133.Settlements): _133.SettlementsAmino;
                fromAminoMsg(object: _133.SettlementsAminoMsg): _133.Settlements;
                fromProtoMsg(message: _133.SettlementsProtoMsg): _133.Settlements;
                toProto(message: _133.Settlements): Uint8Array;
                toProtoMsg(message: _133.Settlements): _133.SettlementsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _132.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryParamsRequest;
                fromJSON(_: any): _132.QueryParamsRequest;
                toJSON(_: _132.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
                fromAmino(_: _132.QueryParamsRequestAmino): _132.QueryParamsRequest;
                toAmino(_: _132.QueryParamsRequest): _132.QueryParamsRequestAmino;
                fromAminoMsg(object: _132.QueryParamsRequestAminoMsg): _132.QueryParamsRequest;
                fromProtoMsg(message: _132.QueryParamsRequestProtoMsg): _132.QueryParamsRequest;
                toProto(message: _132.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _132.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryParamsResponse;
                fromJSON(object: any): _132.QueryParamsResponse;
                toJSON(message: _132.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
                fromAmino(object: _132.QueryParamsResponseAmino): _132.QueryParamsResponse;
                toAmino(message: _132.QueryParamsResponse): _132.QueryParamsResponseAmino;
                fromAminoMsg(object: _132.QueryParamsResponseAminoMsg): _132.QueryParamsResponse;
                fromProtoMsg(message: _132.QueryParamsResponseProtoMsg): _132.QueryParamsResponse;
                toProto(message: _132.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseProtoMsg;
            };
            QueryGetLongBookRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetLongBookRequest;
                fromJSON(object: any): _132.QueryGetLongBookRequest;
                toJSON(message: _132.QueryGetLongBookRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetLongBookRequest>): _132.QueryGetLongBookRequest;
                fromAmino(object: _132.QueryGetLongBookRequestAmino): _132.QueryGetLongBookRequest;
                toAmino(message: _132.QueryGetLongBookRequest): _132.QueryGetLongBookRequestAmino;
                fromAminoMsg(object: _132.QueryGetLongBookRequestAminoMsg): _132.QueryGetLongBookRequest;
                fromProtoMsg(message: _132.QueryGetLongBookRequestProtoMsg): _132.QueryGetLongBookRequest;
                toProto(message: _132.QueryGetLongBookRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetLongBookRequest): _132.QueryGetLongBookRequestProtoMsg;
            };
            QueryGetLongBookResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetLongBookResponse;
                fromJSON(object: any): _132.QueryGetLongBookResponse;
                toJSON(message: _132.QueryGetLongBookResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetLongBookResponse>): _132.QueryGetLongBookResponse;
                fromAmino(object: _132.QueryGetLongBookResponseAmino): _132.QueryGetLongBookResponse;
                toAmino(message: _132.QueryGetLongBookResponse): _132.QueryGetLongBookResponseAmino;
                fromAminoMsg(object: _132.QueryGetLongBookResponseAminoMsg): _132.QueryGetLongBookResponse;
                fromProtoMsg(message: _132.QueryGetLongBookResponseProtoMsg): _132.QueryGetLongBookResponse;
                toProto(message: _132.QueryGetLongBookResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetLongBookResponse): _132.QueryGetLongBookResponseProtoMsg;
            };
            QueryAllLongBookRequest: {
                typeUrl: string;
                encode(message: _132.QueryAllLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryAllLongBookRequest;
                fromJSON(object: any): _132.QueryAllLongBookRequest;
                toJSON(message: _132.QueryAllLongBookRequest): unknown;
                fromPartial(object: Partial<_132.QueryAllLongBookRequest>): _132.QueryAllLongBookRequest;
                fromAmino(object: _132.QueryAllLongBookRequestAmino): _132.QueryAllLongBookRequest;
                toAmino(message: _132.QueryAllLongBookRequest): _132.QueryAllLongBookRequestAmino;
                fromAminoMsg(object: _132.QueryAllLongBookRequestAminoMsg): _132.QueryAllLongBookRequest;
                fromProtoMsg(message: _132.QueryAllLongBookRequestProtoMsg): _132.QueryAllLongBookRequest;
                toProto(message: _132.QueryAllLongBookRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAllLongBookRequest): _132.QueryAllLongBookRequestProtoMsg;
            };
            QueryAllLongBookResponse: {
                typeUrl: string;
                encode(message: _132.QueryAllLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryAllLongBookResponse;
                fromJSON(object: any): _132.QueryAllLongBookResponse;
                toJSON(message: _132.QueryAllLongBookResponse): unknown;
                fromPartial(object: Partial<_132.QueryAllLongBookResponse>): _132.QueryAllLongBookResponse;
                fromAmino(object: _132.QueryAllLongBookResponseAmino): _132.QueryAllLongBookResponse;
                toAmino(message: _132.QueryAllLongBookResponse): _132.QueryAllLongBookResponseAmino;
                fromAminoMsg(object: _132.QueryAllLongBookResponseAminoMsg): _132.QueryAllLongBookResponse;
                fromProtoMsg(message: _132.QueryAllLongBookResponseProtoMsg): _132.QueryAllLongBookResponse;
                toProto(message: _132.QueryAllLongBookResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAllLongBookResponse): _132.QueryAllLongBookResponseProtoMsg;
            };
            QueryGetShortBookRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetShortBookRequest;
                fromJSON(object: any): _132.QueryGetShortBookRequest;
                toJSON(message: _132.QueryGetShortBookRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetShortBookRequest>): _132.QueryGetShortBookRequest;
                fromAmino(object: _132.QueryGetShortBookRequestAmino): _132.QueryGetShortBookRequest;
                toAmino(message: _132.QueryGetShortBookRequest): _132.QueryGetShortBookRequestAmino;
                fromAminoMsg(object: _132.QueryGetShortBookRequestAminoMsg): _132.QueryGetShortBookRequest;
                fromProtoMsg(message: _132.QueryGetShortBookRequestProtoMsg): _132.QueryGetShortBookRequest;
                toProto(message: _132.QueryGetShortBookRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetShortBookRequest): _132.QueryGetShortBookRequestProtoMsg;
            };
            QueryGetShortBookResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetShortBookResponse;
                fromJSON(object: any): _132.QueryGetShortBookResponse;
                toJSON(message: _132.QueryGetShortBookResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetShortBookResponse>): _132.QueryGetShortBookResponse;
                fromAmino(object: _132.QueryGetShortBookResponseAmino): _132.QueryGetShortBookResponse;
                toAmino(message: _132.QueryGetShortBookResponse): _132.QueryGetShortBookResponseAmino;
                fromAminoMsg(object: _132.QueryGetShortBookResponseAminoMsg): _132.QueryGetShortBookResponse;
                fromProtoMsg(message: _132.QueryGetShortBookResponseProtoMsg): _132.QueryGetShortBookResponse;
                toProto(message: _132.QueryGetShortBookResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetShortBookResponse): _132.QueryGetShortBookResponseProtoMsg;
            };
            QueryAllShortBookRequest: {
                typeUrl: string;
                encode(message: _132.QueryAllShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryAllShortBookRequest;
                fromJSON(object: any): _132.QueryAllShortBookRequest;
                toJSON(message: _132.QueryAllShortBookRequest): unknown;
                fromPartial(object: Partial<_132.QueryAllShortBookRequest>): _132.QueryAllShortBookRequest;
                fromAmino(object: _132.QueryAllShortBookRequestAmino): _132.QueryAllShortBookRequest;
                toAmino(message: _132.QueryAllShortBookRequest): _132.QueryAllShortBookRequestAmino;
                fromAminoMsg(object: _132.QueryAllShortBookRequestAminoMsg): _132.QueryAllShortBookRequest;
                fromProtoMsg(message: _132.QueryAllShortBookRequestProtoMsg): _132.QueryAllShortBookRequest;
                toProto(message: _132.QueryAllShortBookRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAllShortBookRequest): _132.QueryAllShortBookRequestProtoMsg;
            };
            QueryAllShortBookResponse: {
                typeUrl: string;
                encode(message: _132.QueryAllShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryAllShortBookResponse;
                fromJSON(object: any): _132.QueryAllShortBookResponse;
                toJSON(message: _132.QueryAllShortBookResponse): unknown;
                fromPartial(object: Partial<_132.QueryAllShortBookResponse>): _132.QueryAllShortBookResponse;
                fromAmino(object: _132.QueryAllShortBookResponseAmino): _132.QueryAllShortBookResponse;
                toAmino(message: _132.QueryAllShortBookResponse): _132.QueryAllShortBookResponseAmino;
                fromAminoMsg(object: _132.QueryAllShortBookResponseAminoMsg): _132.QueryAllShortBookResponse;
                fromProtoMsg(message: _132.QueryAllShortBookResponseProtoMsg): _132.QueryAllShortBookResponse;
                toProto(message: _132.QueryAllShortBookResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAllShortBookResponse): _132.QueryAllShortBookResponseProtoMsg;
            };
            QueryGetPricesRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetPricesRequest;
                fromJSON(object: any): _132.QueryGetPricesRequest;
                toJSON(message: _132.QueryGetPricesRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetPricesRequest>): _132.QueryGetPricesRequest;
                fromAmino(object: _132.QueryGetPricesRequestAmino): _132.QueryGetPricesRequest;
                toAmino(message: _132.QueryGetPricesRequest): _132.QueryGetPricesRequestAmino;
                fromAminoMsg(object: _132.QueryGetPricesRequestAminoMsg): _132.QueryGetPricesRequest;
                fromProtoMsg(message: _132.QueryGetPricesRequestProtoMsg): _132.QueryGetPricesRequest;
                toProto(message: _132.QueryGetPricesRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetPricesRequest): _132.QueryGetPricesRequestProtoMsg;
            };
            QueryGetPricesResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetPricesResponse;
                fromJSON(object: any): _132.QueryGetPricesResponse;
                toJSON(message: _132.QueryGetPricesResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetPricesResponse>): _132.QueryGetPricesResponse;
                fromAmino(object: _132.QueryGetPricesResponseAmino): _132.QueryGetPricesResponse;
                toAmino(message: _132.QueryGetPricesResponse): _132.QueryGetPricesResponseAmino;
                fromAminoMsg(object: _132.QueryGetPricesResponseAminoMsg): _132.QueryGetPricesResponse;
                fromProtoMsg(message: _132.QueryGetPricesResponseProtoMsg): _132.QueryGetPricesResponse;
                toProto(message: _132.QueryGetPricesResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetPricesResponse): _132.QueryGetPricesResponseProtoMsg;
            };
            QueryGetPriceRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetPriceRequest;
                fromJSON(object: any): _132.QueryGetPriceRequest;
                toJSON(message: _132.QueryGetPriceRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetPriceRequest>): _132.QueryGetPriceRequest;
                fromAmino(object: _132.QueryGetPriceRequestAmino): _132.QueryGetPriceRequest;
                toAmino(message: _132.QueryGetPriceRequest): _132.QueryGetPriceRequestAmino;
                fromAminoMsg(object: _132.QueryGetPriceRequestAminoMsg): _132.QueryGetPriceRequest;
                fromProtoMsg(message: _132.QueryGetPriceRequestProtoMsg): _132.QueryGetPriceRequest;
                toProto(message: _132.QueryGetPriceRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetPriceRequest): _132.QueryGetPriceRequestProtoMsg;
            };
            QueryGetPriceResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetPriceResponse;
                fromJSON(object: any): _132.QueryGetPriceResponse;
                toJSON(message: _132.QueryGetPriceResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetPriceResponse>): _132.QueryGetPriceResponse;
                fromAmino(object: _132.QueryGetPriceResponseAmino): _132.QueryGetPriceResponse;
                toAmino(message: _132.QueryGetPriceResponse): _132.QueryGetPriceResponseAmino;
                fromAminoMsg(object: _132.QueryGetPriceResponseAminoMsg): _132.QueryGetPriceResponse;
                fromProtoMsg(message: _132.QueryGetPriceResponseProtoMsg): _132.QueryGetPriceResponse;
                toProto(message: _132.QueryGetPriceResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetPriceResponse): _132.QueryGetPriceResponseProtoMsg;
            };
            QueryGetLatestPriceRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetLatestPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetLatestPriceRequest;
                fromJSON(object: any): _132.QueryGetLatestPriceRequest;
                toJSON(message: _132.QueryGetLatestPriceRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetLatestPriceRequest>): _132.QueryGetLatestPriceRequest;
                fromAmino(object: _132.QueryGetLatestPriceRequestAmino): _132.QueryGetLatestPriceRequest;
                toAmino(message: _132.QueryGetLatestPriceRequest): _132.QueryGetLatestPriceRequestAmino;
                fromAminoMsg(object: _132.QueryGetLatestPriceRequestAminoMsg): _132.QueryGetLatestPriceRequest;
                fromProtoMsg(message: _132.QueryGetLatestPriceRequestProtoMsg): _132.QueryGetLatestPriceRequest;
                toProto(message: _132.QueryGetLatestPriceRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetLatestPriceRequest): _132.QueryGetLatestPriceRequestProtoMsg;
            };
            QueryGetLatestPriceResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetLatestPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetLatestPriceResponse;
                fromJSON(object: any): _132.QueryGetLatestPriceResponse;
                toJSON(message: _132.QueryGetLatestPriceResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetLatestPriceResponse>): _132.QueryGetLatestPriceResponse;
                fromAmino(object: _132.QueryGetLatestPriceResponseAmino): _132.QueryGetLatestPriceResponse;
                toAmino(message: _132.QueryGetLatestPriceResponse): _132.QueryGetLatestPriceResponseAmino;
                fromAminoMsg(object: _132.QueryGetLatestPriceResponseAminoMsg): _132.QueryGetLatestPriceResponse;
                fromProtoMsg(message: _132.QueryGetLatestPriceResponseProtoMsg): _132.QueryGetLatestPriceResponse;
                toProto(message: _132.QueryGetLatestPriceResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetLatestPriceResponse): _132.QueryGetLatestPriceResponseProtoMsg;
            };
            QueryGetTwapsRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetTwapsRequest;
                fromJSON(object: any): _132.QueryGetTwapsRequest;
                toJSON(message: _132.QueryGetTwapsRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetTwapsRequest>): _132.QueryGetTwapsRequest;
                fromAmino(object: _132.QueryGetTwapsRequestAmino): _132.QueryGetTwapsRequest;
                toAmino(message: _132.QueryGetTwapsRequest): _132.QueryGetTwapsRequestAmino;
                fromAminoMsg(object: _132.QueryGetTwapsRequestAminoMsg): _132.QueryGetTwapsRequest;
                fromProtoMsg(message: _132.QueryGetTwapsRequestProtoMsg): _132.QueryGetTwapsRequest;
                toProto(message: _132.QueryGetTwapsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetTwapsRequest): _132.QueryGetTwapsRequestProtoMsg;
            };
            QueryGetTwapsResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetTwapsResponse;
                fromJSON(object: any): _132.QueryGetTwapsResponse;
                toJSON(message: _132.QueryGetTwapsResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetTwapsResponse>): _132.QueryGetTwapsResponse;
                fromAmino(object: _132.QueryGetTwapsResponseAmino): _132.QueryGetTwapsResponse;
                toAmino(message: _132.QueryGetTwapsResponse): _132.QueryGetTwapsResponseAmino;
                fromAminoMsg(object: _132.QueryGetTwapsResponseAminoMsg): _132.QueryGetTwapsResponse;
                fromProtoMsg(message: _132.QueryGetTwapsResponseProtoMsg): _132.QueryGetTwapsResponse;
                toProto(message: _132.QueryGetTwapsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetTwapsResponse): _132.QueryGetTwapsResponseProtoMsg;
            };
            QueryAssetListRequest: {
                typeUrl: string;
                encode(_: _132.QueryAssetListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryAssetListRequest;
                fromJSON(_: any): _132.QueryAssetListRequest;
                toJSON(_: _132.QueryAssetListRequest): unknown;
                fromPartial(_: Partial<_132.QueryAssetListRequest>): _132.QueryAssetListRequest;
                fromAmino(_: _132.QueryAssetListRequestAmino): _132.QueryAssetListRequest;
                toAmino(_: _132.QueryAssetListRequest): _132.QueryAssetListRequestAmino;
                fromAminoMsg(object: _132.QueryAssetListRequestAminoMsg): _132.QueryAssetListRequest;
                fromProtoMsg(message: _132.QueryAssetListRequestProtoMsg): _132.QueryAssetListRequest;
                toProto(message: _132.QueryAssetListRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAssetListRequest): _132.QueryAssetListRequestProtoMsg;
            };
            QueryAssetListResponse: {
                typeUrl: string;
                encode(message: _132.QueryAssetListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryAssetListResponse;
                fromJSON(object: any): _132.QueryAssetListResponse;
                toJSON(message: _132.QueryAssetListResponse): unknown;
                fromPartial(object: Partial<_132.QueryAssetListResponse>): _132.QueryAssetListResponse;
                fromAmino(object: _132.QueryAssetListResponseAmino): _132.QueryAssetListResponse;
                toAmino(message: _132.QueryAssetListResponse): _132.QueryAssetListResponseAmino;
                fromAminoMsg(object: _132.QueryAssetListResponseAminoMsg): _132.QueryAssetListResponse;
                fromProtoMsg(message: _132.QueryAssetListResponseProtoMsg): _132.QueryAssetListResponse;
                toProto(message: _132.QueryAssetListResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAssetListResponse): _132.QueryAssetListResponseProtoMsg;
            };
            QueryAssetMetadataRequest: {
                typeUrl: string;
                encode(message: _132.QueryAssetMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryAssetMetadataRequest;
                fromJSON(object: any): _132.QueryAssetMetadataRequest;
                toJSON(message: _132.QueryAssetMetadataRequest): unknown;
                fromPartial(object: Partial<_132.QueryAssetMetadataRequest>): _132.QueryAssetMetadataRequest;
                fromAmino(object: _132.QueryAssetMetadataRequestAmino): _132.QueryAssetMetadataRequest;
                toAmino(message: _132.QueryAssetMetadataRequest): _132.QueryAssetMetadataRequestAmino;
                fromAminoMsg(object: _132.QueryAssetMetadataRequestAminoMsg): _132.QueryAssetMetadataRequest;
                fromProtoMsg(message: _132.QueryAssetMetadataRequestProtoMsg): _132.QueryAssetMetadataRequest;
                toProto(message: _132.QueryAssetMetadataRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAssetMetadataRequest): _132.QueryAssetMetadataRequestProtoMsg;
            };
            QueryAssetMetadataResponse: {
                typeUrl: string;
                encode(message: _132.QueryAssetMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryAssetMetadataResponse;
                fromJSON(object: any): _132.QueryAssetMetadataResponse;
                toJSON(message: _132.QueryAssetMetadataResponse): unknown;
                fromPartial(object: Partial<_132.QueryAssetMetadataResponse>): _132.QueryAssetMetadataResponse;
                fromAmino(object: _132.QueryAssetMetadataResponseAmino): _132.QueryAssetMetadataResponse;
                toAmino(message: _132.QueryAssetMetadataResponse): _132.QueryAssetMetadataResponseAmino;
                fromAminoMsg(object: _132.QueryAssetMetadataResponseAminoMsg): _132.QueryAssetMetadataResponse;
                fromProtoMsg(message: _132.QueryAssetMetadataResponseProtoMsg): _132.QueryAssetMetadataResponse;
                toProto(message: _132.QueryAssetMetadataResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAssetMetadataResponse): _132.QueryAssetMetadataResponseProtoMsg;
            };
            QueryRegisteredPairsRequest: {
                typeUrl: string;
                encode(message: _132.QueryRegisteredPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryRegisteredPairsRequest;
                fromJSON(object: any): _132.QueryRegisteredPairsRequest;
                toJSON(message: _132.QueryRegisteredPairsRequest): unknown;
                fromPartial(object: Partial<_132.QueryRegisteredPairsRequest>): _132.QueryRegisteredPairsRequest;
                fromAmino(object: _132.QueryRegisteredPairsRequestAmino): _132.QueryRegisteredPairsRequest;
                toAmino(message: _132.QueryRegisteredPairsRequest): _132.QueryRegisteredPairsRequestAmino;
                fromAminoMsg(object: _132.QueryRegisteredPairsRequestAminoMsg): _132.QueryRegisteredPairsRequest;
                fromProtoMsg(message: _132.QueryRegisteredPairsRequestProtoMsg): _132.QueryRegisteredPairsRequest;
                toProto(message: _132.QueryRegisteredPairsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryRegisteredPairsRequest): _132.QueryRegisteredPairsRequestProtoMsg;
            };
            QueryRegisteredPairsResponse: {
                typeUrl: string;
                encode(message: _132.QueryRegisteredPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryRegisteredPairsResponse;
                fromJSON(object: any): _132.QueryRegisteredPairsResponse;
                toJSON(message: _132.QueryRegisteredPairsResponse): unknown;
                fromPartial(object: Partial<_132.QueryRegisteredPairsResponse>): _132.QueryRegisteredPairsResponse;
                fromAmino(object: _132.QueryRegisteredPairsResponseAmino): _132.QueryRegisteredPairsResponse;
                toAmino(message: _132.QueryRegisteredPairsResponse): _132.QueryRegisteredPairsResponseAmino;
                fromAminoMsg(object: _132.QueryRegisteredPairsResponseAminoMsg): _132.QueryRegisteredPairsResponse;
                fromProtoMsg(message: _132.QueryRegisteredPairsResponseProtoMsg): _132.QueryRegisteredPairsResponse;
                toProto(message: _132.QueryRegisteredPairsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryRegisteredPairsResponse): _132.QueryRegisteredPairsResponseProtoMsg;
            };
            QueryRegisteredContractRequest: {
                typeUrl: string;
                encode(message: _132.QueryRegisteredContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryRegisteredContractRequest;
                fromJSON(object: any): _132.QueryRegisteredContractRequest;
                toJSON(message: _132.QueryRegisteredContractRequest): unknown;
                fromPartial(object: Partial<_132.QueryRegisteredContractRequest>): _132.QueryRegisteredContractRequest;
                fromAmino(object: _132.QueryRegisteredContractRequestAmino): _132.QueryRegisteredContractRequest;
                toAmino(message: _132.QueryRegisteredContractRequest): _132.QueryRegisteredContractRequestAmino;
                fromAminoMsg(object: _132.QueryRegisteredContractRequestAminoMsg): _132.QueryRegisteredContractRequest;
                fromProtoMsg(message: _132.QueryRegisteredContractRequestProtoMsg): _132.QueryRegisteredContractRequest;
                toProto(message: _132.QueryRegisteredContractRequest): Uint8Array;
                toProtoMsg(message: _132.QueryRegisteredContractRequest): _132.QueryRegisteredContractRequestProtoMsg;
            };
            QueryRegisteredContractResponse: {
                typeUrl: string;
                encode(message: _132.QueryRegisteredContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryRegisteredContractResponse;
                fromJSON(object: any): _132.QueryRegisteredContractResponse;
                toJSON(message: _132.QueryRegisteredContractResponse): unknown;
                fromPartial(object: Partial<_132.QueryRegisteredContractResponse>): _132.QueryRegisteredContractResponse;
                fromAmino(object: _132.QueryRegisteredContractResponseAmino): _132.QueryRegisteredContractResponse;
                toAmino(message: _132.QueryRegisteredContractResponse): _132.QueryRegisteredContractResponseAmino;
                fromAminoMsg(object: _132.QueryRegisteredContractResponseAminoMsg): _132.QueryRegisteredContractResponse;
                fromProtoMsg(message: _132.QueryRegisteredContractResponseProtoMsg): _132.QueryRegisteredContractResponse;
                toProto(message: _132.QueryRegisteredContractResponse): Uint8Array;
                toProtoMsg(message: _132.QueryRegisteredContractResponse): _132.QueryRegisteredContractResponseProtoMsg;
            };
            QueryGetOrdersRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetOrdersRequest;
                fromJSON(object: any): _132.QueryGetOrdersRequest;
                toJSON(message: _132.QueryGetOrdersRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetOrdersRequest>): _132.QueryGetOrdersRequest;
                fromAmino(object: _132.QueryGetOrdersRequestAmino): _132.QueryGetOrdersRequest;
                toAmino(message: _132.QueryGetOrdersRequest): _132.QueryGetOrdersRequestAmino;
                fromAminoMsg(object: _132.QueryGetOrdersRequestAminoMsg): _132.QueryGetOrdersRequest;
                fromProtoMsg(message: _132.QueryGetOrdersRequestProtoMsg): _132.QueryGetOrdersRequest;
                toProto(message: _132.QueryGetOrdersRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetOrdersRequest): _132.QueryGetOrdersRequestProtoMsg;
            };
            QueryGetOrdersResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetOrdersResponse;
                fromJSON(object: any): _132.QueryGetOrdersResponse;
                toJSON(message: _132.QueryGetOrdersResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetOrdersResponse>): _132.QueryGetOrdersResponse;
                fromAmino(object: _132.QueryGetOrdersResponseAmino): _132.QueryGetOrdersResponse;
                toAmino(message: _132.QueryGetOrdersResponse): _132.QueryGetOrdersResponseAmino;
                fromAminoMsg(object: _132.QueryGetOrdersResponseAminoMsg): _132.QueryGetOrdersResponse;
                fromProtoMsg(message: _132.QueryGetOrdersResponseProtoMsg): _132.QueryGetOrdersResponse;
                toProto(message: _132.QueryGetOrdersResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetOrdersResponse): _132.QueryGetOrdersResponseProtoMsg;
            };
            QueryGetOrderByIDRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetOrderByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetOrderByIDRequest;
                fromJSON(object: any): _132.QueryGetOrderByIDRequest;
                toJSON(message: _132.QueryGetOrderByIDRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetOrderByIDRequest>): _132.QueryGetOrderByIDRequest;
                fromAmino(object: _132.QueryGetOrderByIDRequestAmino): _132.QueryGetOrderByIDRequest;
                toAmino(message: _132.QueryGetOrderByIDRequest): _132.QueryGetOrderByIDRequestAmino;
                fromAminoMsg(object: _132.QueryGetOrderByIDRequestAminoMsg): _132.QueryGetOrderByIDRequest;
                fromProtoMsg(message: _132.QueryGetOrderByIDRequestProtoMsg): _132.QueryGetOrderByIDRequest;
                toProto(message: _132.QueryGetOrderByIDRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetOrderByIDRequest): _132.QueryGetOrderByIDRequestProtoMsg;
            };
            QueryGetOrderByIDResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetOrderByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetOrderByIDResponse;
                fromJSON(object: any): _132.QueryGetOrderByIDResponse;
                toJSON(message: _132.QueryGetOrderByIDResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetOrderByIDResponse>): _132.QueryGetOrderByIDResponse;
                fromAmino(object: _132.QueryGetOrderByIDResponseAmino): _132.QueryGetOrderByIDResponse;
                toAmino(message: _132.QueryGetOrderByIDResponse): _132.QueryGetOrderByIDResponseAmino;
                fromAminoMsg(object: _132.QueryGetOrderByIDResponseAminoMsg): _132.QueryGetOrderByIDResponse;
                fromProtoMsg(message: _132.QueryGetOrderByIDResponseProtoMsg): _132.QueryGetOrderByIDResponse;
                toProto(message: _132.QueryGetOrderByIDResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetOrderByIDResponse): _132.QueryGetOrderByIDResponseProtoMsg;
            };
            QueryGetHistoricalPricesRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetHistoricalPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetHistoricalPricesRequest;
                fromJSON(object: any): _132.QueryGetHistoricalPricesRequest;
                toJSON(message: _132.QueryGetHistoricalPricesRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetHistoricalPricesRequest>): _132.QueryGetHistoricalPricesRequest;
                fromAmino(object: _132.QueryGetHistoricalPricesRequestAmino): _132.QueryGetHistoricalPricesRequest;
                toAmino(message: _132.QueryGetHistoricalPricesRequest): _132.QueryGetHistoricalPricesRequestAmino;
                fromAminoMsg(object: _132.QueryGetHistoricalPricesRequestAminoMsg): _132.QueryGetHistoricalPricesRequest;
                fromProtoMsg(message: _132.QueryGetHistoricalPricesRequestProtoMsg): _132.QueryGetHistoricalPricesRequest;
                toProto(message: _132.QueryGetHistoricalPricesRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetHistoricalPricesRequest): _132.QueryGetHistoricalPricesRequestProtoMsg;
            };
            QueryGetHistoricalPricesResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetHistoricalPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetHistoricalPricesResponse;
                fromJSON(object: any): _132.QueryGetHistoricalPricesResponse;
                toJSON(message: _132.QueryGetHistoricalPricesResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetHistoricalPricesResponse>): _132.QueryGetHistoricalPricesResponse;
                fromAmino(object: _132.QueryGetHistoricalPricesResponseAmino): _132.QueryGetHistoricalPricesResponse;
                toAmino(message: _132.QueryGetHistoricalPricesResponse): _132.QueryGetHistoricalPricesResponseAmino;
                fromAminoMsg(object: _132.QueryGetHistoricalPricesResponseAminoMsg): _132.QueryGetHistoricalPricesResponse;
                fromProtoMsg(message: _132.QueryGetHistoricalPricesResponseProtoMsg): _132.QueryGetHistoricalPricesResponse;
                toProto(message: _132.QueryGetHistoricalPricesResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetHistoricalPricesResponse): _132.QueryGetHistoricalPricesResponseProtoMsg;
            };
            QueryGetMarketSummaryRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetMarketSummaryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetMarketSummaryRequest;
                fromJSON(object: any): _132.QueryGetMarketSummaryRequest;
                toJSON(message: _132.QueryGetMarketSummaryRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetMarketSummaryRequest>): _132.QueryGetMarketSummaryRequest;
                fromAmino(object: _132.QueryGetMarketSummaryRequestAmino): _132.QueryGetMarketSummaryRequest;
                toAmino(message: _132.QueryGetMarketSummaryRequest): _132.QueryGetMarketSummaryRequestAmino;
                fromAminoMsg(object: _132.QueryGetMarketSummaryRequestAminoMsg): _132.QueryGetMarketSummaryRequest;
                fromProtoMsg(message: _132.QueryGetMarketSummaryRequestProtoMsg): _132.QueryGetMarketSummaryRequest;
                toProto(message: _132.QueryGetMarketSummaryRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetMarketSummaryRequest): _132.QueryGetMarketSummaryRequestProtoMsg;
            };
            QueryGetMarketSummaryResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetMarketSummaryResponse;
                fromJSON(object: any): _132.QueryGetMarketSummaryResponse;
                toJSON(message: _132.QueryGetMarketSummaryResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetMarketSummaryResponse>): _132.QueryGetMarketSummaryResponse;
                fromAmino(object: _132.QueryGetMarketSummaryResponseAmino): _132.QueryGetMarketSummaryResponse;
                toAmino(message: _132.QueryGetMarketSummaryResponse): _132.QueryGetMarketSummaryResponseAmino;
                fromAminoMsg(object: _132.QueryGetMarketSummaryResponseAminoMsg): _132.QueryGetMarketSummaryResponse;
                fromProtoMsg(message: _132.QueryGetMarketSummaryResponseProtoMsg): _132.QueryGetMarketSummaryResponse;
                toProto(message: _132.QueryGetMarketSummaryResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetMarketSummaryResponse): _132.QueryGetMarketSummaryResponseProtoMsg;
            };
            QueryOrderSimulationRequest: {
                typeUrl: string;
                encode(message: _132.QueryOrderSimulationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryOrderSimulationRequest;
                fromJSON(object: any): _132.QueryOrderSimulationRequest;
                toJSON(message: _132.QueryOrderSimulationRequest): unknown;
                fromPartial(object: Partial<_132.QueryOrderSimulationRequest>): _132.QueryOrderSimulationRequest;
                fromAmino(object: _132.QueryOrderSimulationRequestAmino): _132.QueryOrderSimulationRequest;
                toAmino(message: _132.QueryOrderSimulationRequest): _132.QueryOrderSimulationRequestAmino;
                fromAminoMsg(object: _132.QueryOrderSimulationRequestAminoMsg): _132.QueryOrderSimulationRequest;
                fromProtoMsg(message: _132.QueryOrderSimulationRequestProtoMsg): _132.QueryOrderSimulationRequest;
                toProto(message: _132.QueryOrderSimulationRequest): Uint8Array;
                toProtoMsg(message: _132.QueryOrderSimulationRequest): _132.QueryOrderSimulationRequestProtoMsg;
            };
            QueryOrderSimulationResponse: {
                typeUrl: string;
                encode(message: _132.QueryOrderSimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryOrderSimulationResponse;
                fromJSON(object: any): _132.QueryOrderSimulationResponse;
                toJSON(message: _132.QueryOrderSimulationResponse): unknown;
                fromPartial(object: Partial<_132.QueryOrderSimulationResponse>): _132.QueryOrderSimulationResponse;
                fromAmino(object: _132.QueryOrderSimulationResponseAmino): _132.QueryOrderSimulationResponse;
                toAmino(message: _132.QueryOrderSimulationResponse): _132.QueryOrderSimulationResponseAmino;
                fromAminoMsg(object: _132.QueryOrderSimulationResponseAminoMsg): _132.QueryOrderSimulationResponse;
                fromProtoMsg(message: _132.QueryOrderSimulationResponseProtoMsg): _132.QueryOrderSimulationResponse;
                toProto(message: _132.QueryOrderSimulationResponse): Uint8Array;
                toProtoMsg(message: _132.QueryOrderSimulationResponse): _132.QueryOrderSimulationResponseProtoMsg;
            };
            QueryGetMatchResultRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetMatchResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetMatchResultRequest;
                fromJSON(object: any): _132.QueryGetMatchResultRequest;
                toJSON(message: _132.QueryGetMatchResultRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetMatchResultRequest>): _132.QueryGetMatchResultRequest;
                fromAmino(object: _132.QueryGetMatchResultRequestAmino): _132.QueryGetMatchResultRequest;
                toAmino(message: _132.QueryGetMatchResultRequest): _132.QueryGetMatchResultRequestAmino;
                fromAminoMsg(object: _132.QueryGetMatchResultRequestAminoMsg): _132.QueryGetMatchResultRequest;
                fromProtoMsg(message: _132.QueryGetMatchResultRequestProtoMsg): _132.QueryGetMatchResultRequest;
                toProto(message: _132.QueryGetMatchResultRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetMatchResultRequest): _132.QueryGetMatchResultRequestProtoMsg;
            };
            QueryGetMatchResultResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetMatchResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetMatchResultResponse;
                fromJSON(object: any): _132.QueryGetMatchResultResponse;
                toJSON(message: _132.QueryGetMatchResultResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetMatchResultResponse>): _132.QueryGetMatchResultResponse;
                fromAmino(object: _132.QueryGetMatchResultResponseAmino): _132.QueryGetMatchResultResponse;
                toAmino(message: _132.QueryGetMatchResultResponse): _132.QueryGetMatchResultResponseAmino;
                fromAminoMsg(object: _132.QueryGetMatchResultResponseAminoMsg): _132.QueryGetMatchResultResponse;
                fromProtoMsg(message: _132.QueryGetMatchResultResponseProtoMsg): _132.QueryGetMatchResultResponse;
                toProto(message: _132.QueryGetMatchResultResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetMatchResultResponse): _132.QueryGetMatchResultResponseProtoMsg;
            };
            QueryGetOrderCountRequest: {
                typeUrl: string;
                encode(message: _132.QueryGetOrderCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetOrderCountRequest;
                fromJSON(object: any): _132.QueryGetOrderCountRequest;
                toJSON(message: _132.QueryGetOrderCountRequest): unknown;
                fromPartial(object: Partial<_132.QueryGetOrderCountRequest>): _132.QueryGetOrderCountRequest;
                fromAmino(object: _132.QueryGetOrderCountRequestAmino): _132.QueryGetOrderCountRequest;
                toAmino(message: _132.QueryGetOrderCountRequest): _132.QueryGetOrderCountRequestAmino;
                fromAminoMsg(object: _132.QueryGetOrderCountRequestAminoMsg): _132.QueryGetOrderCountRequest;
                fromProtoMsg(message: _132.QueryGetOrderCountRequestProtoMsg): _132.QueryGetOrderCountRequest;
                toProto(message: _132.QueryGetOrderCountRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGetOrderCountRequest): _132.QueryGetOrderCountRequestProtoMsg;
            };
            QueryGetOrderCountResponse: {
                typeUrl: string;
                encode(message: _132.QueryGetOrderCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGetOrderCountResponse;
                fromJSON(object: any): _132.QueryGetOrderCountResponse;
                toJSON(message: _132.QueryGetOrderCountResponse): unknown;
                fromPartial(object: Partial<_132.QueryGetOrderCountResponse>): _132.QueryGetOrderCountResponse;
                fromAmino(object: _132.QueryGetOrderCountResponseAmino): _132.QueryGetOrderCountResponse;
                toAmino(message: _132.QueryGetOrderCountResponse): _132.QueryGetOrderCountResponseAmino;
                fromAminoMsg(object: _132.QueryGetOrderCountResponseAminoMsg): _132.QueryGetOrderCountResponse;
                fromProtoMsg(message: _132.QueryGetOrderCountResponseProtoMsg): _132.QueryGetOrderCountResponse;
                toProto(message: _132.QueryGetOrderCountResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGetOrderCountResponse): _132.QueryGetOrderCountResponseProtoMsg;
            };
            Price: {
                typeUrl: string;
                encode(message: _131.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Price;
                fromJSON(object: any): _131.Price;
                toJSON(message: _131.Price): unknown;
                fromPartial(object: Partial<_131.Price>): _131.Price;
                fromAmino(object: _131.PriceAmino): _131.Price;
                toAmino(message: _131.Price): _131.PriceAmino;
                fromAminoMsg(object: _131.PriceAminoMsg): _131.Price;
                fromProtoMsg(message: _131.PriceProtoMsg): _131.Price;
                toProto(message: _131.Price): Uint8Array;
                toProtoMsg(message: _131.Price): _131.PriceProtoMsg;
            };
            PriceCandlestick: {
                typeUrl: string;
                encode(message: _131.PriceCandlestick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PriceCandlestick;
                fromJSON(object: any): _131.PriceCandlestick;
                toJSON(message: _131.PriceCandlestick): unknown;
                fromPartial(object: Partial<_131.PriceCandlestick>): _131.PriceCandlestick;
                fromAmino(object: _131.PriceCandlestickAmino): _131.PriceCandlestick;
                toAmino(message: _131.PriceCandlestick): _131.PriceCandlestickAmino;
                fromAminoMsg(object: _131.PriceCandlestickAminoMsg): _131.PriceCandlestick;
                fromProtoMsg(message: _131.PriceCandlestickProtoMsg): _131.PriceCandlestick;
                toProto(message: _131.PriceCandlestick): Uint8Array;
                toProtoMsg(message: _131.PriceCandlestick): _131.PriceCandlestickProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Params;
                fromJSON(object: any): _130.Params;
                toJSON(message: _130.Params): unknown;
                fromPartial(object: Partial<_130.Params>): _130.Params;
                fromAmino(object: _130.ParamsAmino): _130.Params;
                toAmino(message: _130.Params): _130.ParamsAmino;
                fromAminoMsg(object: _130.ParamsAminoMsg): _130.Params;
                fromProtoMsg(message: _130.ParamsProtoMsg): _130.Params;
                toProto(message: _130.Params): Uint8Array;
                toProtoMsg(message: _130.Params): _130.ParamsProtoMsg;
            };
            Pair: {
                typeUrl: string;
                encode(message: _129.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Pair;
                fromJSON(object: any): _129.Pair;
                toJSON(message: _129.Pair): unknown;
                fromPartial(object: Partial<_129.Pair>): _129.Pair;
                fromAmino(object: _129.PairAmino): _129.Pair;
                toAmino(message: _129.Pair): _129.PairAmino;
                fromAminoMsg(object: _129.PairAminoMsg): _129.Pair;
                fromProtoMsg(message: _129.PairProtoMsg): _129.Pair;
                toProto(message: _129.Pair): Uint8Array;
                toProtoMsg(message: _129.Pair): _129.PairProtoMsg;
            };
            BatchContractPair: {
                typeUrl: string;
                encode(message: _129.BatchContractPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.BatchContractPair;
                fromJSON(object: any): _129.BatchContractPair;
                toJSON(message: _129.BatchContractPair): unknown;
                fromPartial(object: Partial<_129.BatchContractPair>): _129.BatchContractPair;
                fromAmino(object: _129.BatchContractPairAmino): _129.BatchContractPair;
                toAmino(message: _129.BatchContractPair): _129.BatchContractPairAmino;
                fromAminoMsg(object: _129.BatchContractPairAminoMsg): _129.BatchContractPair;
                fromProtoMsg(message: _129.BatchContractPairProtoMsg): _129.BatchContractPair;
                toProto(message: _129.BatchContractPair): Uint8Array;
                toProtoMsg(message: _129.BatchContractPair): _129.BatchContractPairProtoMsg;
            };
            Order: {
                typeUrl: string;
                encode(message: _128.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Order;
                fromJSON(object: any): _128.Order;
                toJSON(message: _128.Order): unknown;
                fromPartial(object: Partial<_128.Order>): _128.Order;
                fromAmino(object: _128.OrderAmino): _128.Order;
                toAmino(message: _128.Order): _128.OrderAmino;
                fromAminoMsg(object: _128.OrderAminoMsg): _128.Order;
                fromProtoMsg(message: _128.OrderProtoMsg): _128.Order;
                toProto(message: _128.Order): Uint8Array;
                toProtoMsg(message: _128.Order): _128.OrderProtoMsg;
            };
            Cancellation: {
                typeUrl: string;
                encode(message: _128.Cancellation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Cancellation;
                fromJSON(object: any): _128.Cancellation;
                toJSON(message: _128.Cancellation): unknown;
                fromPartial(object: Partial<_128.Cancellation>): _128.Cancellation;
                fromAmino(object: _128.CancellationAmino): _128.Cancellation;
                toAmino(message: _128.Cancellation): _128.CancellationAmino;
                fromAminoMsg(object: _128.CancellationAminoMsg): _128.Cancellation;
                fromProtoMsg(message: _128.CancellationProtoMsg): _128.Cancellation;
                toProto(message: _128.Cancellation): Uint8Array;
                toProtoMsg(message: _128.Cancellation): _128.CancellationProtoMsg;
            };
            ActiveOrders: {
                typeUrl: string;
                encode(message: _128.ActiveOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ActiveOrders;
                fromJSON(object: any): _128.ActiveOrders;
                toJSON(message: _128.ActiveOrders): unknown;
                fromPartial(object: Partial<_128.ActiveOrders>): _128.ActiveOrders;
                fromAmino(object: _128.ActiveOrdersAmino): _128.ActiveOrders;
                toAmino(message: _128.ActiveOrders): _128.ActiveOrdersAmino;
                fromAminoMsg(object: _128.ActiveOrdersAminoMsg): _128.ActiveOrders;
                fromProtoMsg(message: _128.ActiveOrdersProtoMsg): _128.ActiveOrders;
                toProto(message: _128.ActiveOrders): Uint8Array;
                toProtoMsg(message: _128.ActiveOrders): _128.ActiveOrdersProtoMsg;
            };
            OrderEntry: {
                typeUrl: string;
                encode(message: _127.OrderEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.OrderEntry;
                fromJSON(object: any): _127.OrderEntry;
                toJSON(message: _127.OrderEntry): unknown;
                fromPartial(object: Partial<_127.OrderEntry>): _127.OrderEntry;
                fromAmino(object: _127.OrderEntryAmino): _127.OrderEntry;
                toAmino(message: _127.OrderEntry): _127.OrderEntryAmino;
                fromAminoMsg(object: _127.OrderEntryAminoMsg): _127.OrderEntry;
                fromProtoMsg(message: _127.OrderEntryProtoMsg): _127.OrderEntry;
                toProto(message: _127.OrderEntry): Uint8Array;
                toProtoMsg(message: _127.OrderEntry): _127.OrderEntryProtoMsg;
            };
            Allocation: {
                typeUrl: string;
                encode(message: _127.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Allocation;
                fromJSON(object: any): _127.Allocation;
                toJSON(message: _127.Allocation): unknown;
                fromPartial(object: Partial<_127.Allocation>): _127.Allocation;
                fromAmino(object: _127.AllocationAmino): _127.Allocation;
                toAmino(message: _127.Allocation): _127.AllocationAmino;
                fromAminoMsg(object: _127.AllocationAminoMsg): _127.Allocation;
                fromProtoMsg(message: _127.AllocationProtoMsg): _127.Allocation;
                toProto(message: _127.Allocation): Uint8Array;
                toProtoMsg(message: _127.Allocation): _127.AllocationProtoMsg;
            };
            MatchResult: {
                typeUrl: string;
                encode(message: _126.MatchResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MatchResult;
                fromJSON(object: any): _126.MatchResult;
                toJSON(message: _126.MatchResult): unknown;
                fromPartial(object: Partial<_126.MatchResult>): _126.MatchResult;
                fromAmino(object: _126.MatchResultAmino): _126.MatchResult;
                toAmino(message: _126.MatchResult): _126.MatchResultAmino;
                fromAminoMsg(object: _126.MatchResultAminoMsg): _126.MatchResult;
                fromProtoMsg(message: _126.MatchResultProtoMsg): _126.MatchResult;
                toProto(message: _126.MatchResult): Uint8Array;
                toProtoMsg(message: _126.MatchResult): _126.MatchResultProtoMsg;
            };
            LongBook: {
                typeUrl: string;
                encode(message: _125.LongBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.LongBook;
                fromJSON(object: any): _125.LongBook;
                toJSON(message: _125.LongBook): unknown;
                fromPartial(object: Partial<_125.LongBook>): _125.LongBook;
                fromAmino(object: _125.LongBookAmino): _125.LongBook;
                toAmino(message: _125.LongBook): _125.LongBookAmino;
                fromAminoMsg(object: _125.LongBookAminoMsg): _125.LongBook;
                fromProtoMsg(message: _125.LongBookProtoMsg): _125.LongBook;
                toProto(message: _125.LongBook): Uint8Array;
                toProtoMsg(message: _125.LongBook): _125.LongBookProtoMsg;
            };
            AddAssetMetadataProposal: {
                typeUrl: string;
                encode(message: _124.AddAssetMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AddAssetMetadataProposal;
                fromJSON(object: any): _124.AddAssetMetadataProposal;
                toJSON(message: _124.AddAssetMetadataProposal): unknown;
                fromPartial(object: Partial<_124.AddAssetMetadataProposal>): _124.AddAssetMetadataProposal;
                fromAmino(object: _124.AddAssetMetadataProposalAmino): _124.AddAssetMetadataProposal;
                toAmino(message: _124.AddAssetMetadataProposal): _124.AddAssetMetadataProposalAmino;
                fromAminoMsg(object: _124.AddAssetMetadataProposalAminoMsg): _124.AddAssetMetadataProposal;
                fromProtoMsg(message: _124.AddAssetMetadataProposalProtoMsg): _124.AddAssetMetadataProposal;
                toProto(message: _124.AddAssetMetadataProposal): Uint8Array;
                toProtoMsg(message: _124.AddAssetMetadataProposal): _124.AddAssetMetadataProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GenesisState;
                fromJSON(object: any): _123.GenesisState;
                toJSON(message: _123.GenesisState): unknown;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
                fromAmino(object: _123.GenesisStateAmino): _123.GenesisState;
                toAmino(message: _123.GenesisState): _123.GenesisStateAmino;
                fromAminoMsg(object: _123.GenesisStateAminoMsg): _123.GenesisState;
                fromProtoMsg(message: _123.GenesisStateProtoMsg): _123.GenesisState;
                toProto(message: _123.GenesisState): Uint8Array;
                toProtoMsg(message: _123.GenesisState): _123.GenesisStateProtoMsg;
            };
            ContractState: {
                typeUrl: string;
                encode(message: _123.ContractState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ContractState;
                fromJSON(object: any): _123.ContractState;
                toJSON(message: _123.ContractState): unknown;
                fromPartial(object: Partial<_123.ContractState>): _123.ContractState;
                fromAmino(object: _123.ContractStateAmino): _123.ContractState;
                toAmino(message: _123.ContractState): _123.ContractStateAmino;
                fromAminoMsg(object: _123.ContractStateAminoMsg): _123.ContractState;
                fromProtoMsg(message: _123.ContractStateProtoMsg): _123.ContractState;
                toProto(message: _123.ContractState): Uint8Array;
                toProtoMsg(message: _123.ContractState): _123.ContractStateProtoMsg;
            };
            ContractPairPrices: {
                typeUrl: string;
                encode(message: _123.ContractPairPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ContractPairPrices;
                fromJSON(object: any): _123.ContractPairPrices;
                toJSON(message: _123.ContractPairPrices): unknown;
                fromPartial(object: Partial<_123.ContractPairPrices>): _123.ContractPairPrices;
                fromAmino(object: _123.ContractPairPricesAmino): _123.ContractPairPrices;
                toAmino(message: _123.ContractPairPrices): _123.ContractPairPricesAmino;
                fromAminoMsg(object: _123.ContractPairPricesAminoMsg): _123.ContractPairPrices;
                fromProtoMsg(message: _123.ContractPairPricesProtoMsg): _123.ContractPairPrices;
                toProto(message: _123.ContractPairPrices): Uint8Array;
                toProtoMsg(message: _123.ContractPairPrices): _123.ContractPairPricesProtoMsg;
            };
            positionDirectionFromJSON(object: any): _122.PositionDirection;
            positionDirectionToJSON(object: _122.PositionDirection): string;
            positionEffectFromJSON(object: any): _122.PositionEffect;
            positionEffectToJSON(object: _122.PositionEffect): string;
            orderTypeFromJSON(object: any): _122.OrderType;
            orderTypeToJSON(object: _122.OrderType): string;
            unitFromJSON(object: any): _122.Unit;
            unitToJSON(object: _122.Unit): string;
            orderStatusFromJSON(object: any): _122.OrderStatus;
            orderStatusToJSON(object: _122.OrderStatus): string;
            cancellationInitiatorFromJSON(object: any): _122.CancellationInitiator;
            cancellationInitiatorToJSON(object: _122.CancellationInitiator): string;
            PositionDirection: typeof _122.PositionDirection;
            PositionDirectionSDKType: typeof _122.PositionDirection;
            PositionDirectionAmino: typeof _122.PositionDirection;
            PositionEffect: typeof _122.PositionEffect;
            PositionEffectSDKType: typeof _122.PositionEffect;
            PositionEffectAmino: typeof _122.PositionEffect;
            OrderType: typeof _122.OrderType;
            OrderTypeSDKType: typeof _122.OrderType;
            OrderTypeAmino: typeof _122.OrderType;
            Unit: typeof _122.Unit;
            UnitSDKType: typeof _122.Unit;
            UnitAmino: typeof _122.Unit;
            OrderStatus: typeof _122.OrderStatus;
            OrderStatusSDKType: typeof _122.OrderStatus;
            OrderStatusAmino: typeof _122.OrderStatus;
            CancellationInitiator: typeof _122.CancellationInitiator;
            CancellationInitiatorSDKType: typeof _122.CancellationInitiator;
            CancellationInitiatorAmino: typeof _122.CancellationInitiator;
            DepositInfoEntry: {
                typeUrl: string;
                encode(message: _121.DepositInfoEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.DepositInfoEntry;
                fromJSON(object: any): _121.DepositInfoEntry;
                toJSON(message: _121.DepositInfoEntry): unknown;
                fromPartial(object: Partial<_121.DepositInfoEntry>): _121.DepositInfoEntry;
                fromAmino(object: _121.DepositInfoEntryAmino): _121.DepositInfoEntry;
                toAmino(message: _121.DepositInfoEntry): _121.DepositInfoEntryAmino;
                fromAminoMsg(object: _121.DepositInfoEntryAminoMsg): _121.DepositInfoEntry;
                fromProtoMsg(message: _121.DepositInfoEntryProtoMsg): _121.DepositInfoEntry;
                toProto(message: _121.DepositInfoEntry): Uint8Array;
                toProtoMsg(message: _121.DepositInfoEntry): _121.DepositInfoEntryProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _120.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ContractInfo;
                fromJSON(object: any): _120.ContractInfo;
                toJSON(message: _120.ContractInfo): unknown;
                fromPartial(object: Partial<_120.ContractInfo>): _120.ContractInfo;
                fromAmino(object: _120.ContractInfoAmino): _120.ContractInfo;
                toAmino(message: _120.ContractInfo): _120.ContractInfoAmino;
                fromAminoMsg(object: _120.ContractInfoAminoMsg): _120.ContractInfo;
                fromProtoMsg(message: _120.ContractInfoProtoMsg): _120.ContractInfo;
                toProto(message: _120.ContractInfo): Uint8Array;
                toProtoMsg(message: _120.ContractInfo): _120.ContractInfoProtoMsg;
            };
            ContractInfoV2: {
                typeUrl: string;
                encode(message: _120.ContractInfoV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ContractInfoV2;
                fromJSON(object: any): _120.ContractInfoV2;
                toJSON(message: _120.ContractInfoV2): unknown;
                fromPartial(object: Partial<_120.ContractInfoV2>): _120.ContractInfoV2;
                fromAmino(object: _120.ContractInfoV2Amino): _120.ContractInfoV2;
                toAmino(message: _120.ContractInfoV2): _120.ContractInfoV2Amino;
                fromAminoMsg(object: _120.ContractInfoV2AminoMsg): _120.ContractInfoV2;
                fromProtoMsg(message: _120.ContractInfoV2ProtoMsg): _120.ContractInfoV2;
                toProto(message: _120.ContractInfoV2): Uint8Array;
                toProtoMsg(message: _120.ContractInfoV2): _120.ContractInfoV2ProtoMsg;
            };
            ContractDependencyInfo: {
                typeUrl: string;
                encode(message: _120.ContractDependencyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ContractDependencyInfo;
                fromJSON(object: any): _120.ContractDependencyInfo;
                toJSON(message: _120.ContractDependencyInfo): unknown;
                fromPartial(object: Partial<_120.ContractDependencyInfo>): _120.ContractDependencyInfo;
                fromAmino(object: _120.ContractDependencyInfoAmino): _120.ContractDependencyInfo;
                toAmino(message: _120.ContractDependencyInfo): _120.ContractDependencyInfoAmino;
                fromAminoMsg(object: _120.ContractDependencyInfoAminoMsg): _120.ContractDependencyInfo;
                fromProtoMsg(message: _120.ContractDependencyInfoProtoMsg): _120.ContractDependencyInfo;
                toProto(message: _120.ContractDependencyInfo): Uint8Array;
                toProtoMsg(message: _120.ContractDependencyInfo): _120.ContractDependencyInfoProtoMsg;
            };
            LegacyContractInfo: {
                typeUrl: string;
                encode(message: _120.LegacyContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.LegacyContractInfo;
                fromJSON(object: any): _120.LegacyContractInfo;
                toJSON(message: _120.LegacyContractInfo): unknown;
                fromPartial(object: Partial<_120.LegacyContractInfo>): _120.LegacyContractInfo;
                fromAmino(object: _120.LegacyContractInfoAmino): _120.LegacyContractInfo;
                toAmino(message: _120.LegacyContractInfo): _120.LegacyContractInfoAmino;
                fromAminoMsg(object: _120.LegacyContractInfoAminoMsg): _120.LegacyContractInfo;
                fromProtoMsg(message: _120.LegacyContractInfoProtoMsg): _120.LegacyContractInfo;
                toProto(message: _120.LegacyContractInfo): Uint8Array;
                toProtoMsg(message: _120.LegacyContractInfo): _120.LegacyContractInfoProtoMsg;
            };
            AssetIBCInfo: {
                typeUrl: string;
                encode(message: _119.AssetIBCInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.AssetIBCInfo;
                fromJSON(object: any): _119.AssetIBCInfo;
                toJSON(message: _119.AssetIBCInfo): unknown;
                fromPartial(object: Partial<_119.AssetIBCInfo>): _119.AssetIBCInfo;
                fromAmino(object: _119.AssetIBCInfoAmino): _119.AssetIBCInfo;
                toAmino(message: _119.AssetIBCInfo): _119.AssetIBCInfoAmino;
                fromAminoMsg(object: _119.AssetIBCInfoAminoMsg): _119.AssetIBCInfo;
                fromProtoMsg(message: _119.AssetIBCInfoProtoMsg): _119.AssetIBCInfo;
                toProto(message: _119.AssetIBCInfo): Uint8Array;
                toProtoMsg(message: _119.AssetIBCInfo): _119.AssetIBCInfoProtoMsg;
            };
            AssetMetadata: {
                typeUrl: string;
                encode(message: _119.AssetMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.AssetMetadata;
                fromJSON(object: any): _119.AssetMetadata;
                toJSON(message: _119.AssetMetadata): unknown;
                fromPartial(object: Partial<_119.AssetMetadata>): _119.AssetMetadata;
                fromAmino(object: _119.AssetMetadataAmino): _119.AssetMetadata;
                toAmino(message: _119.AssetMetadata): _119.AssetMetadataAmino;
                fromAminoMsg(object: _119.AssetMetadataAminoMsg): _119.AssetMetadata;
                fromProtoMsg(message: _119.AssetMetadataProtoMsg): _119.AssetMetadata;
                toProto(message: _119.AssetMetadata): Uint8Array;
                toProtoMsg(message: _119.AssetMetadata): _119.AssetMetadataProtoMsg;
            };
        };
        const epoch: {
            QueryClientImpl: typeof _326.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epoch(request?: _146.QueryEpochRequest): Promise<_146.QueryEpochResponse>;
                params(request?: _146.QueryParamsRequest): Promise<_146.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _316.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _146.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsRequest;
                fromJSON(_: any): _146.QueryParamsRequest;
                toJSON(_: _146.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_146.QueryParamsRequest>): _146.QueryParamsRequest;
                fromAmino(_: _146.QueryParamsRequestAmino): _146.QueryParamsRequest;
                toAmino(_: _146.QueryParamsRequest): _146.QueryParamsRequestAmino;
                fromAminoMsg(object: _146.QueryParamsRequestAminoMsg): _146.QueryParamsRequest;
                fromProtoMsg(message: _146.QueryParamsRequestProtoMsg): _146.QueryParamsRequest;
                toProto(message: _146.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _146.QueryParamsRequest): _146.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _146.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsResponse;
                fromJSON(object: any): _146.QueryParamsResponse;
                toJSON(message: _146.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_146.QueryParamsResponse>): _146.QueryParamsResponse;
                fromAmino(object: _146.QueryParamsResponseAmino): _146.QueryParamsResponse;
                toAmino(message: _146.QueryParamsResponse): _146.QueryParamsResponseAmino;
                fromAminoMsg(object: _146.QueryParamsResponseAminoMsg): _146.QueryParamsResponse;
                fromProtoMsg(message: _146.QueryParamsResponseProtoMsg): _146.QueryParamsResponse;
                toProto(message: _146.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _146.QueryParamsResponse): _146.QueryParamsResponseProtoMsg;
            };
            QueryEpochRequest: {
                typeUrl: string;
                encode(_: _146.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryEpochRequest;
                fromJSON(_: any): _146.QueryEpochRequest;
                toJSON(_: _146.QueryEpochRequest): unknown;
                fromPartial(_: Partial<_146.QueryEpochRequest>): _146.QueryEpochRequest;
                fromAmino(_: _146.QueryEpochRequestAmino): _146.QueryEpochRequest;
                toAmino(_: _146.QueryEpochRequest): _146.QueryEpochRequestAmino;
                fromAminoMsg(object: _146.QueryEpochRequestAminoMsg): _146.QueryEpochRequest;
                fromProtoMsg(message: _146.QueryEpochRequestProtoMsg): _146.QueryEpochRequest;
                toProto(message: _146.QueryEpochRequest): Uint8Array;
                toProtoMsg(message: _146.QueryEpochRequest): _146.QueryEpochRequestProtoMsg;
            };
            QueryEpochResponse: {
                typeUrl: string;
                encode(message: _146.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryEpochResponse;
                fromJSON(object: any): _146.QueryEpochResponse;
                toJSON(message: _146.QueryEpochResponse): unknown;
                fromPartial(object: Partial<_146.QueryEpochResponse>): _146.QueryEpochResponse;
                fromAmino(object: _146.QueryEpochResponseAmino): _146.QueryEpochResponse;
                toAmino(message: _146.QueryEpochResponse): _146.QueryEpochResponseAmino;
                fromAminoMsg(object: _146.QueryEpochResponseAminoMsg): _146.QueryEpochResponse;
                fromProtoMsg(message: _146.QueryEpochResponseProtoMsg): _146.QueryEpochResponse;
                toProto(message: _146.QueryEpochResponse): Uint8Array;
                toProtoMsg(message: _146.QueryEpochResponse): _146.QueryEpochResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _145.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Params;
                fromJSON(_: any): _145.Params;
                toJSON(_: _145.Params): unknown;
                fromPartial(_: Partial<_145.Params>): _145.Params;
                fromAmino(_: _145.ParamsAmino): _145.Params;
                toAmino(_: _145.Params): _145.ParamsAmino;
                fromAminoMsg(object: _145.ParamsAminoMsg): _145.Params;
                fromProtoMsg(message: _145.ParamsProtoMsg): _145.Params;
                toProto(message: _145.Params): Uint8Array;
                toProtoMsg(message: _145.Params): _145.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
                fromJSON(object: any): _144.GenesisState;
                toJSON(message: _144.GenesisState): unknown;
                fromPartial(object: Partial<_144.GenesisState>): _144.GenesisState;
                fromAmino(object: _144.GenesisStateAmino): _144.GenesisState;
                toAmino(message: _144.GenesisState): _144.GenesisStateAmino;
                fromAminoMsg(object: _144.GenesisStateAminoMsg): _144.GenesisState;
                fromProtoMsg(message: _144.GenesisStateProtoMsg): _144.GenesisState;
                toProto(message: _144.GenesisState): Uint8Array;
                toProtoMsg(message: _144.GenesisState): _144.GenesisStateProtoMsg;
            };
            Epoch: {
                typeUrl: string;
                encode(message: _143.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Epoch;
                fromJSON(object: any): _143.Epoch;
                toJSON(message: _143.Epoch): unknown;
                fromPartial(object: Partial<_143.Epoch>): _143.Epoch;
                fromAmino(object: _143.EpochAmino): _143.Epoch;
                toAmino(message: _143.Epoch): _143.EpochAmino;
                fromAminoMsg(object: _143.EpochAminoMsg): _143.Epoch;
                fromProtoMsg(message: _143.EpochProtoMsg): _143.Epoch;
                toProto(message: _143.Epoch): Uint8Array;
                toProtoMsg(message: _143.Epoch): _143.EpochProtoMsg;
            };
        };
        const mint: {
            QueryClientImpl: typeof _327.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                minter(request?: _155.QueryMinterRequest): Promise<_155.QueryMinterResponse>;
            };
            LCDQueryClient: typeof _317.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _155.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryParamsRequest;
                fromJSON(_: any): _155.QueryParamsRequest;
                toJSON(_: _155.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_155.QueryParamsRequest>): _155.QueryParamsRequest;
                fromAmino(_: _155.QueryParamsRequestAmino): _155.QueryParamsRequest;
                toAmino(_: _155.QueryParamsRequest): _155.QueryParamsRequestAmino;
                fromAminoMsg(object: _155.QueryParamsRequestAminoMsg): _155.QueryParamsRequest;
                fromProtoMsg(message: _155.QueryParamsRequestProtoMsg): _155.QueryParamsRequest;
                toProto(message: _155.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _155.QueryParamsRequest): _155.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _155.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryParamsResponse;
                fromJSON(object: any): _155.QueryParamsResponse;
                toJSON(message: _155.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_155.QueryParamsResponse>): _155.QueryParamsResponse;
                fromAmino(object: _155.QueryParamsResponseAmino): _155.QueryParamsResponse;
                toAmino(message: _155.QueryParamsResponse): _155.QueryParamsResponseAmino;
                fromAminoMsg(object: _155.QueryParamsResponseAminoMsg): _155.QueryParamsResponse;
                fromProtoMsg(message: _155.QueryParamsResponseProtoMsg): _155.QueryParamsResponse;
                toProto(message: _155.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _155.QueryParamsResponse): _155.QueryParamsResponseProtoMsg;
            };
            QueryMinterRequest: {
                typeUrl: string;
                encode(_: _155.QueryMinterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryMinterRequest;
                fromJSON(_: any): _155.QueryMinterRequest;
                toJSON(_: _155.QueryMinterRequest): unknown;
                fromPartial(_: Partial<_155.QueryMinterRequest>): _155.QueryMinterRequest;
                fromAmino(_: _155.QueryMinterRequestAmino): _155.QueryMinterRequest;
                toAmino(_: _155.QueryMinterRequest): _155.QueryMinterRequestAmino;
                fromAminoMsg(object: _155.QueryMinterRequestAminoMsg): _155.QueryMinterRequest;
                fromProtoMsg(message: _155.QueryMinterRequestProtoMsg): _155.QueryMinterRequest;
                toProto(message: _155.QueryMinterRequest): Uint8Array;
                toProtoMsg(message: _155.QueryMinterRequest): _155.QueryMinterRequestProtoMsg;
            };
            QueryMinterResponse: {
                typeUrl: string;
                encode(message: _155.QueryMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryMinterResponse;
                fromJSON(object: any): _155.QueryMinterResponse;
                toJSON(message: _155.QueryMinterResponse): unknown;
                fromPartial(object: Partial<_155.QueryMinterResponse>): _155.QueryMinterResponse;
                fromAmino(object: _155.QueryMinterResponseAmino): _155.QueryMinterResponse;
                toAmino(message: _155.QueryMinterResponse): _155.QueryMinterResponseAmino;
                fromAminoMsg(object: _155.QueryMinterResponseAminoMsg): _155.QueryMinterResponse;
                fromProtoMsg(message: _155.QueryMinterResponseProtoMsg): _155.QueryMinterResponse;
                toProto(message: _155.QueryMinterResponse): Uint8Array;
                toProtoMsg(message: _155.QueryMinterResponse): _155.QueryMinterResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _154.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Minter;
                fromJSON(object: any): _154.Minter;
                toJSON(message: _154.Minter): unknown;
                fromPartial(object: Partial<_154.Minter>): _154.Minter;
                fromAmino(object: _154.MinterAmino): _154.Minter;
                toAmino(message: _154.Minter): _154.MinterAmino;
                fromAminoMsg(object: _154.MinterAminoMsg): _154.Minter;
                fromProtoMsg(message: _154.MinterProtoMsg): _154.Minter;
                toProto(message: _154.Minter): Uint8Array;
                toProtoMsg(message: _154.Minter): _154.MinterProtoMsg;
            };
            ScheduledTokenRelease: {
                typeUrl: string;
                encode(message: _154.ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ScheduledTokenRelease;
                fromJSON(object: any): _154.ScheduledTokenRelease;
                toJSON(message: _154.ScheduledTokenRelease): unknown;
                fromPartial(object: Partial<_154.ScheduledTokenRelease>): _154.ScheduledTokenRelease;
                fromAmino(object: _154.ScheduledTokenReleaseAmino): _154.ScheduledTokenRelease;
                toAmino(message: _154.ScheduledTokenRelease): _154.ScheduledTokenReleaseAmino;
                fromAminoMsg(object: _154.ScheduledTokenReleaseAminoMsg): _154.ScheduledTokenRelease;
                fromProtoMsg(message: _154.ScheduledTokenReleaseProtoMsg): _154.ScheduledTokenRelease;
                toProto(message: _154.ScheduledTokenRelease): Uint8Array;
                toProtoMsg(message: _154.ScheduledTokenRelease): _154.ScheduledTokenReleaseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _154.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Params;
                fromJSON(object: any): _154.Params;
                toJSON(message: _154.Params): unknown;
                fromPartial(object: Partial<_154.Params>): _154.Params;
                fromAmino(object: _154.ParamsAmino): _154.Params;
                toAmino(message: _154.Params): _154.ParamsAmino;
                fromAminoMsg(object: _154.ParamsAminoMsg): _154.Params;
                fromProtoMsg(message: _154.ParamsProtoMsg): _154.Params;
                toProto(message: _154.Params): Uint8Array;
                toProtoMsg(message: _154.Params): _154.ParamsProtoMsg;
            };
            Version2Minter: {
                typeUrl: string;
                encode(message: _154.Version2Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Version2Minter;
                fromJSON(object: any): _154.Version2Minter;
                toJSON(message: _154.Version2Minter): unknown;
                fromPartial(object: Partial<_154.Version2Minter>): _154.Version2Minter;
                fromAmino(object: _154.Version2MinterAmino): _154.Version2Minter;
                toAmino(message: _154.Version2Minter): _154.Version2MinterAmino;
                fromAminoMsg(object: _154.Version2MinterAminoMsg): _154.Version2Minter;
                fromProtoMsg(message: _154.Version2MinterProtoMsg): _154.Version2Minter;
                toProto(message: _154.Version2Minter): Uint8Array;
                toProtoMsg(message: _154.Version2Minter): _154.Version2MinterProtoMsg;
            };
            Version2ScheduledTokenRelease: {
                typeUrl: string;
                encode(message: _154.Version2ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Version2ScheduledTokenRelease;
                fromJSON(object: any): _154.Version2ScheduledTokenRelease;
                toJSON(message: _154.Version2ScheduledTokenRelease): unknown;
                fromPartial(object: Partial<_154.Version2ScheduledTokenRelease>): _154.Version2ScheduledTokenRelease;
                fromAmino(object: _154.Version2ScheduledTokenReleaseAmino): _154.Version2ScheduledTokenRelease;
                toAmino(message: _154.Version2ScheduledTokenRelease): _154.Version2ScheduledTokenReleaseAmino;
                fromAminoMsg(object: _154.Version2ScheduledTokenReleaseAminoMsg): _154.Version2ScheduledTokenRelease;
                fromProtoMsg(message: _154.Version2ScheduledTokenReleaseProtoMsg): _154.Version2ScheduledTokenRelease;
                toProto(message: _154.Version2ScheduledTokenRelease): Uint8Array;
                toProtoMsg(message: _154.Version2ScheduledTokenRelease): _154.Version2ScheduledTokenReleaseProtoMsg;
            };
            Version2Params: {
                typeUrl: string;
                encode(message: _154.Version2Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Version2Params;
                fromJSON(object: any): _154.Version2Params;
                toJSON(message: _154.Version2Params): unknown;
                fromPartial(object: Partial<_154.Version2Params>): _154.Version2Params;
                fromAmino(object: _154.Version2ParamsAmino): _154.Version2Params;
                toAmino(message: _154.Version2Params): _154.Version2ParamsAmino;
                fromAminoMsg(object: _154.Version2ParamsAminoMsg): _154.Version2Params;
                fromProtoMsg(message: _154.Version2ParamsProtoMsg): _154.Version2Params;
                toProto(message: _154.Version2Params): Uint8Array;
                toProtoMsg(message: _154.Version2Params): _154.Version2ParamsProtoMsg;
            };
            UpdateMinterProposal: {
                typeUrl: string;
                encode(message: _153.UpdateMinterProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.UpdateMinterProposal;
                fromJSON(object: any): _153.UpdateMinterProposal;
                toJSON(message: _153.UpdateMinterProposal): unknown;
                fromPartial(object: Partial<_153.UpdateMinterProposal>): _153.UpdateMinterProposal;
                fromAmino(object: _153.UpdateMinterProposalAmino): _153.UpdateMinterProposal;
                toAmino(message: _153.UpdateMinterProposal): _153.UpdateMinterProposalAmino;
                fromAminoMsg(object: _153.UpdateMinterProposalAminoMsg): _153.UpdateMinterProposal;
                fromProtoMsg(message: _153.UpdateMinterProposalProtoMsg): _153.UpdateMinterProposal;
                toProto(message: _153.UpdateMinterProposal): Uint8Array;
                toProtoMsg(message: _153.UpdateMinterProposal): _153.UpdateMinterProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
                fromJSON(object: any): _152.GenesisState;
                toJSON(message: _152.GenesisState): unknown;
                fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
                fromAmino(object: _152.GenesisStateAmino): _152.GenesisState;
                toAmino(message: _152.GenesisState): _152.GenesisStateAmino;
                fromAminoMsg(object: _152.GenesisStateAminoMsg): _152.GenesisState;
                fromProtoMsg(message: _152.GenesisStateProtoMsg): _152.GenesisState;
                toProto(message: _152.GenesisState): Uint8Array;
                toProtoMsg(message: _152.GenesisState): _152.GenesisStateProtoMsg;
            };
        };
        const oracle: {
            MsgClientImpl: typeof _334.MsgClientImpl;
            QueryClientImpl: typeof _328.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                exchangeRate(request: _162.QueryExchangeRateRequest): Promise<_162.QueryExchangeRateResponse>;
                exchangeRates(request?: _162.QueryExchangeRatesRequest): Promise<_162.QueryExchangeRatesResponse>;
                actives(request?: _162.QueryActivesRequest): Promise<_162.QueryActivesResponse>;
                voteTargets(request?: _162.QueryVoteTargetsRequest): Promise<_162.QueryVoteTargetsResponse>;
                priceSnapshotHistory(request?: _162.QueryPriceSnapshotHistoryRequest): Promise<_162.QueryPriceSnapshotHistoryResponse>;
                twaps(request: _162.QueryTwapsRequest): Promise<_162.QueryTwapsResponse>;
                feederDelegation(request: _162.QueryFeederDelegationRequest): Promise<_162.QueryFeederDelegationResponse>;
                votePenaltyCounter(request: _162.QueryVotePenaltyCounterRequest): Promise<_162.QueryVotePenaltyCounterResponse>;
                slashWindow(request?: _162.QuerySlashWindowRequest): Promise<_162.QuerySlashWindowResponse>;
                params(request?: _162.QueryParamsRequest): Promise<_162.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _318.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _163.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _163.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _163.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _163.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _163.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _163.MsgDelegateFeedConsent;
                    };
                };
                toJSON: {
                    aggregateExchangeRateVote(value: _163.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateFeedConsent(value: _163.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    aggregateExchangeRateVote(value: any): {
                        typeUrl: string;
                        value: _163.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: any): {
                        typeUrl: string;
                        value: _163.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _163.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _163.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _163.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _163.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: (message: _163.MsgAggregateExchangeRateVote) => _163.MsgAggregateExchangeRateVoteAmino;
                    fromAmino: (object: _163.MsgAggregateExchangeRateVoteAmino) => _163.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: (message: _163.MsgDelegateFeedConsent) => _163.MsgDelegateFeedConsentAmino;
                    fromAmino: (object: _163.MsgDelegateFeedConsentAmino) => _163.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _163.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgAggregateExchangeRateVote;
                fromJSON(object: any): _163.MsgAggregateExchangeRateVote;
                toJSON(message: _163.MsgAggregateExchangeRateVote): unknown;
                fromPartial(object: Partial<_163.MsgAggregateExchangeRateVote>): _163.MsgAggregateExchangeRateVote;
                fromAmino(object: _163.MsgAggregateExchangeRateVoteAmino): _163.MsgAggregateExchangeRateVote;
                toAmino(message: _163.MsgAggregateExchangeRateVote): _163.MsgAggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _163.MsgAggregateExchangeRateVoteAminoMsg): _163.MsgAggregateExchangeRateVote;
                fromProtoMsg(message: _163.MsgAggregateExchangeRateVoteProtoMsg): _163.MsgAggregateExchangeRateVote;
                toProto(message: _163.MsgAggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _163.MsgAggregateExchangeRateVote): _163.MsgAggregateExchangeRateVoteProtoMsg;
            };
            MsgAggregateExchangeRateVoteResponse: {
                typeUrl: string;
                encode(_: _163.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgAggregateExchangeRateVoteResponse;
                fromJSON(_: any): _163.MsgAggregateExchangeRateVoteResponse;
                toJSON(_: _163.MsgAggregateExchangeRateVoteResponse): unknown;
                fromPartial(_: Partial<_163.MsgAggregateExchangeRateVoteResponse>): _163.MsgAggregateExchangeRateVoteResponse;
                fromAmino(_: _163.MsgAggregateExchangeRateVoteResponseAmino): _163.MsgAggregateExchangeRateVoteResponse;
                toAmino(_: _163.MsgAggregateExchangeRateVoteResponse): _163.MsgAggregateExchangeRateVoteResponseAmino;
                fromAminoMsg(object: _163.MsgAggregateExchangeRateVoteResponseAminoMsg): _163.MsgAggregateExchangeRateVoteResponse;
                fromProtoMsg(message: _163.MsgAggregateExchangeRateVoteResponseProtoMsg): _163.MsgAggregateExchangeRateVoteResponse;
                toProto(message: _163.MsgAggregateExchangeRateVoteResponse): Uint8Array;
                toProtoMsg(message: _163.MsgAggregateExchangeRateVoteResponse): _163.MsgAggregateExchangeRateVoteResponseProtoMsg;
            };
            MsgDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _163.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgDelegateFeedConsent;
                fromJSON(object: any): _163.MsgDelegateFeedConsent;
                toJSON(message: _163.MsgDelegateFeedConsent): unknown;
                fromPartial(object: Partial<_163.MsgDelegateFeedConsent>): _163.MsgDelegateFeedConsent;
                fromAmino(object: _163.MsgDelegateFeedConsentAmino): _163.MsgDelegateFeedConsent;
                toAmino(message: _163.MsgDelegateFeedConsent): _163.MsgDelegateFeedConsentAmino;
                fromAminoMsg(object: _163.MsgDelegateFeedConsentAminoMsg): _163.MsgDelegateFeedConsent;
                fromProtoMsg(message: _163.MsgDelegateFeedConsentProtoMsg): _163.MsgDelegateFeedConsent;
                toProto(message: _163.MsgDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _163.MsgDelegateFeedConsent): _163.MsgDelegateFeedConsentProtoMsg;
            };
            MsgDelegateFeedConsentResponse: {
                typeUrl: string;
                encode(_: _163.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgDelegateFeedConsentResponse;
                fromJSON(_: any): _163.MsgDelegateFeedConsentResponse;
                toJSON(_: _163.MsgDelegateFeedConsentResponse): unknown;
                fromPartial(_: Partial<_163.MsgDelegateFeedConsentResponse>): _163.MsgDelegateFeedConsentResponse;
                fromAmino(_: _163.MsgDelegateFeedConsentResponseAmino): _163.MsgDelegateFeedConsentResponse;
                toAmino(_: _163.MsgDelegateFeedConsentResponse): _163.MsgDelegateFeedConsentResponseAmino;
                fromAminoMsg(object: _163.MsgDelegateFeedConsentResponseAminoMsg): _163.MsgDelegateFeedConsentResponse;
                fromProtoMsg(message: _163.MsgDelegateFeedConsentResponseProtoMsg): _163.MsgDelegateFeedConsentResponse;
                toProto(message: _163.MsgDelegateFeedConsentResponse): Uint8Array;
                toProtoMsg(message: _163.MsgDelegateFeedConsentResponse): _163.MsgDelegateFeedConsentResponseProtoMsg;
            };
            QueryExchangeRateRequest: {
                typeUrl: string;
                encode(message: _162.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryExchangeRateRequest;
                fromJSON(object: any): _162.QueryExchangeRateRequest;
                toJSON(message: _162.QueryExchangeRateRequest): unknown;
                fromPartial(object: Partial<_162.QueryExchangeRateRequest>): _162.QueryExchangeRateRequest;
                fromAmino(object: _162.QueryExchangeRateRequestAmino): _162.QueryExchangeRateRequest;
                toAmino(message: _162.QueryExchangeRateRequest): _162.QueryExchangeRateRequestAmino;
                fromAminoMsg(object: _162.QueryExchangeRateRequestAminoMsg): _162.QueryExchangeRateRequest;
                fromProtoMsg(message: _162.QueryExchangeRateRequestProtoMsg): _162.QueryExchangeRateRequest;
                toProto(message: _162.QueryExchangeRateRequest): Uint8Array;
                toProtoMsg(message: _162.QueryExchangeRateRequest): _162.QueryExchangeRateRequestProtoMsg;
            };
            QueryExchangeRateResponse: {
                typeUrl: string;
                encode(message: _162.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryExchangeRateResponse;
                fromJSON(object: any): _162.QueryExchangeRateResponse;
                toJSON(message: _162.QueryExchangeRateResponse): unknown;
                fromPartial(object: Partial<_162.QueryExchangeRateResponse>): _162.QueryExchangeRateResponse;
                fromAmino(object: _162.QueryExchangeRateResponseAmino): _162.QueryExchangeRateResponse;
                toAmino(message: _162.QueryExchangeRateResponse): _162.QueryExchangeRateResponseAmino;
                fromAminoMsg(object: _162.QueryExchangeRateResponseAminoMsg): _162.QueryExchangeRateResponse;
                fromProtoMsg(message: _162.QueryExchangeRateResponseProtoMsg): _162.QueryExchangeRateResponse;
                toProto(message: _162.QueryExchangeRateResponse): Uint8Array;
                toProtoMsg(message: _162.QueryExchangeRateResponse): _162.QueryExchangeRateResponseProtoMsg;
            };
            QueryExchangeRatesRequest: {
                typeUrl: string;
                encode(_: _162.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryExchangeRatesRequest;
                fromJSON(_: any): _162.QueryExchangeRatesRequest;
                toJSON(_: _162.QueryExchangeRatesRequest): unknown;
                fromPartial(_: Partial<_162.QueryExchangeRatesRequest>): _162.QueryExchangeRatesRequest;
                fromAmino(_: _162.QueryExchangeRatesRequestAmino): _162.QueryExchangeRatesRequest;
                toAmino(_: _162.QueryExchangeRatesRequest): _162.QueryExchangeRatesRequestAmino;
                fromAminoMsg(object: _162.QueryExchangeRatesRequestAminoMsg): _162.QueryExchangeRatesRequest;
                fromProtoMsg(message: _162.QueryExchangeRatesRequestProtoMsg): _162.QueryExchangeRatesRequest;
                toProto(message: _162.QueryExchangeRatesRequest): Uint8Array;
                toProtoMsg(message: _162.QueryExchangeRatesRequest): _162.QueryExchangeRatesRequestProtoMsg;
            };
            DenomOracleExchangeRatePair: {
                typeUrl: string;
                encode(message: _162.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DenomOracleExchangeRatePair;
                fromJSON(object: any): _162.DenomOracleExchangeRatePair;
                toJSON(message: _162.DenomOracleExchangeRatePair): unknown;
                fromPartial(object: Partial<_162.DenomOracleExchangeRatePair>): _162.DenomOracleExchangeRatePair;
                fromAmino(object: _162.DenomOracleExchangeRatePairAmino): _162.DenomOracleExchangeRatePair;
                toAmino(message: _162.DenomOracleExchangeRatePair): _162.DenomOracleExchangeRatePairAmino;
                fromAminoMsg(object: _162.DenomOracleExchangeRatePairAminoMsg): _162.DenomOracleExchangeRatePair;
                fromProtoMsg(message: _162.DenomOracleExchangeRatePairProtoMsg): _162.DenomOracleExchangeRatePair;
                toProto(message: _162.DenomOracleExchangeRatePair): Uint8Array;
                toProtoMsg(message: _162.DenomOracleExchangeRatePair): _162.DenomOracleExchangeRatePairProtoMsg;
            };
            QueryExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _162.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryExchangeRatesResponse;
                fromJSON(object: any): _162.QueryExchangeRatesResponse;
                toJSON(message: _162.QueryExchangeRatesResponse): unknown;
                fromPartial(object: Partial<_162.QueryExchangeRatesResponse>): _162.QueryExchangeRatesResponse;
                fromAmino(object: _162.QueryExchangeRatesResponseAmino): _162.QueryExchangeRatesResponse;
                toAmino(message: _162.QueryExchangeRatesResponse): _162.QueryExchangeRatesResponseAmino;
                fromAminoMsg(object: _162.QueryExchangeRatesResponseAminoMsg): _162.QueryExchangeRatesResponse;
                fromProtoMsg(message: _162.QueryExchangeRatesResponseProtoMsg): _162.QueryExchangeRatesResponse;
                toProto(message: _162.QueryExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _162.QueryExchangeRatesResponse): _162.QueryExchangeRatesResponseProtoMsg;
            };
            QueryActivesRequest: {
                typeUrl: string;
                encode(_: _162.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryActivesRequest;
                fromJSON(_: any): _162.QueryActivesRequest;
                toJSON(_: _162.QueryActivesRequest): unknown;
                fromPartial(_: Partial<_162.QueryActivesRequest>): _162.QueryActivesRequest;
                fromAmino(_: _162.QueryActivesRequestAmino): _162.QueryActivesRequest;
                toAmino(_: _162.QueryActivesRequest): _162.QueryActivesRequestAmino;
                fromAminoMsg(object: _162.QueryActivesRequestAminoMsg): _162.QueryActivesRequest;
                fromProtoMsg(message: _162.QueryActivesRequestProtoMsg): _162.QueryActivesRequest;
                toProto(message: _162.QueryActivesRequest): Uint8Array;
                toProtoMsg(message: _162.QueryActivesRequest): _162.QueryActivesRequestProtoMsg;
            };
            QueryActivesResponse: {
                typeUrl: string;
                encode(message: _162.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryActivesResponse;
                fromJSON(object: any): _162.QueryActivesResponse;
                toJSON(message: _162.QueryActivesResponse): unknown;
                fromPartial(object: Partial<_162.QueryActivesResponse>): _162.QueryActivesResponse;
                fromAmino(object: _162.QueryActivesResponseAmino): _162.QueryActivesResponse;
                toAmino(message: _162.QueryActivesResponse): _162.QueryActivesResponseAmino;
                fromAminoMsg(object: _162.QueryActivesResponseAminoMsg): _162.QueryActivesResponse;
                fromProtoMsg(message: _162.QueryActivesResponseProtoMsg): _162.QueryActivesResponse;
                toProto(message: _162.QueryActivesResponse): Uint8Array;
                toProtoMsg(message: _162.QueryActivesResponse): _162.QueryActivesResponseProtoMsg;
            };
            QueryVoteTargetsRequest: {
                typeUrl: string;
                encode(_: _162.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryVoteTargetsRequest;
                fromJSON(_: any): _162.QueryVoteTargetsRequest;
                toJSON(_: _162.QueryVoteTargetsRequest): unknown;
                fromPartial(_: Partial<_162.QueryVoteTargetsRequest>): _162.QueryVoteTargetsRequest;
                fromAmino(_: _162.QueryVoteTargetsRequestAmino): _162.QueryVoteTargetsRequest;
                toAmino(_: _162.QueryVoteTargetsRequest): _162.QueryVoteTargetsRequestAmino;
                fromAminoMsg(object: _162.QueryVoteTargetsRequestAminoMsg): _162.QueryVoteTargetsRequest;
                fromProtoMsg(message: _162.QueryVoteTargetsRequestProtoMsg): _162.QueryVoteTargetsRequest;
                toProto(message: _162.QueryVoteTargetsRequest): Uint8Array;
                toProtoMsg(message: _162.QueryVoteTargetsRequest): _162.QueryVoteTargetsRequestProtoMsg;
            };
            QueryVoteTargetsResponse: {
                typeUrl: string;
                encode(message: _162.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryVoteTargetsResponse;
                fromJSON(object: any): _162.QueryVoteTargetsResponse;
                toJSON(message: _162.QueryVoteTargetsResponse): unknown;
                fromPartial(object: Partial<_162.QueryVoteTargetsResponse>): _162.QueryVoteTargetsResponse;
                fromAmino(object: _162.QueryVoteTargetsResponseAmino): _162.QueryVoteTargetsResponse;
                toAmino(message: _162.QueryVoteTargetsResponse): _162.QueryVoteTargetsResponseAmino;
                fromAminoMsg(object: _162.QueryVoteTargetsResponseAminoMsg): _162.QueryVoteTargetsResponse;
                fromProtoMsg(message: _162.QueryVoteTargetsResponseProtoMsg): _162.QueryVoteTargetsResponse;
                toProto(message: _162.QueryVoteTargetsResponse): Uint8Array;
                toProtoMsg(message: _162.QueryVoteTargetsResponse): _162.QueryVoteTargetsResponseProtoMsg;
            };
            QueryPriceSnapshotHistoryRequest: {
                typeUrl: string;
                encode(_: _162.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPriceSnapshotHistoryRequest;
                fromJSON(_: any): _162.QueryPriceSnapshotHistoryRequest;
                toJSON(_: _162.QueryPriceSnapshotHistoryRequest): unknown;
                fromPartial(_: Partial<_162.QueryPriceSnapshotHistoryRequest>): _162.QueryPriceSnapshotHistoryRequest;
                fromAmino(_: _162.QueryPriceSnapshotHistoryRequestAmino): _162.QueryPriceSnapshotHistoryRequest;
                toAmino(_: _162.QueryPriceSnapshotHistoryRequest): _162.QueryPriceSnapshotHistoryRequestAmino;
                fromAminoMsg(object: _162.QueryPriceSnapshotHistoryRequestAminoMsg): _162.QueryPriceSnapshotHistoryRequest;
                fromProtoMsg(message: _162.QueryPriceSnapshotHistoryRequestProtoMsg): _162.QueryPriceSnapshotHistoryRequest;
                toProto(message: _162.QueryPriceSnapshotHistoryRequest): Uint8Array;
                toProtoMsg(message: _162.QueryPriceSnapshotHistoryRequest): _162.QueryPriceSnapshotHistoryRequestProtoMsg;
            };
            QueryPriceSnapshotHistoryResponse: {
                typeUrl: string;
                encode(message: _162.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPriceSnapshotHistoryResponse;
                fromJSON(object: any): _162.QueryPriceSnapshotHistoryResponse;
                toJSON(message: _162.QueryPriceSnapshotHistoryResponse): unknown;
                fromPartial(object: Partial<_162.QueryPriceSnapshotHistoryResponse>): _162.QueryPriceSnapshotHistoryResponse;
                fromAmino(object: _162.QueryPriceSnapshotHistoryResponseAmino): _162.QueryPriceSnapshotHistoryResponse;
                toAmino(message: _162.QueryPriceSnapshotHistoryResponse): _162.QueryPriceSnapshotHistoryResponseAmino;
                fromAminoMsg(object: _162.QueryPriceSnapshotHistoryResponseAminoMsg): _162.QueryPriceSnapshotHistoryResponse;
                fromProtoMsg(message: _162.QueryPriceSnapshotHistoryResponseProtoMsg): _162.QueryPriceSnapshotHistoryResponse;
                toProto(message: _162.QueryPriceSnapshotHistoryResponse): Uint8Array;
                toProtoMsg(message: _162.QueryPriceSnapshotHistoryResponse): _162.QueryPriceSnapshotHistoryResponseProtoMsg;
            };
            QueryTwapsRequest: {
                typeUrl: string;
                encode(message: _162.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryTwapsRequest;
                fromJSON(object: any): _162.QueryTwapsRequest;
                toJSON(message: _162.QueryTwapsRequest): unknown;
                fromPartial(object: Partial<_162.QueryTwapsRequest>): _162.QueryTwapsRequest;
                fromAmino(object: _162.QueryTwapsRequestAmino): _162.QueryTwapsRequest;
                toAmino(message: _162.QueryTwapsRequest): _162.QueryTwapsRequestAmino;
                fromAminoMsg(object: _162.QueryTwapsRequestAminoMsg): _162.QueryTwapsRequest;
                fromProtoMsg(message: _162.QueryTwapsRequestProtoMsg): _162.QueryTwapsRequest;
                toProto(message: _162.QueryTwapsRequest): Uint8Array;
                toProtoMsg(message: _162.QueryTwapsRequest): _162.QueryTwapsRequestProtoMsg;
            };
            QueryTwapsResponse: {
                typeUrl: string;
                encode(message: _162.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryTwapsResponse;
                fromJSON(object: any): _162.QueryTwapsResponse;
                toJSON(message: _162.QueryTwapsResponse): unknown;
                fromPartial(object: Partial<_162.QueryTwapsResponse>): _162.QueryTwapsResponse;
                fromAmino(object: _162.QueryTwapsResponseAmino): _162.QueryTwapsResponse;
                toAmino(message: _162.QueryTwapsResponse): _162.QueryTwapsResponseAmino;
                fromAminoMsg(object: _162.QueryTwapsResponseAminoMsg): _162.QueryTwapsResponse;
                fromProtoMsg(message: _162.QueryTwapsResponseProtoMsg): _162.QueryTwapsResponse;
                toProto(message: _162.QueryTwapsResponse): Uint8Array;
                toProtoMsg(message: _162.QueryTwapsResponse): _162.QueryTwapsResponseProtoMsg;
            };
            QueryFeederDelegationRequest: {
                typeUrl: string;
                encode(message: _162.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryFeederDelegationRequest;
                fromJSON(object: any): _162.QueryFeederDelegationRequest;
                toJSON(message: _162.QueryFeederDelegationRequest): unknown;
                fromPartial(object: Partial<_162.QueryFeederDelegationRequest>): _162.QueryFeederDelegationRequest;
                fromAmino(object: _162.QueryFeederDelegationRequestAmino): _162.QueryFeederDelegationRequest;
                toAmino(message: _162.QueryFeederDelegationRequest): _162.QueryFeederDelegationRequestAmino;
                fromAminoMsg(object: _162.QueryFeederDelegationRequestAminoMsg): _162.QueryFeederDelegationRequest;
                fromProtoMsg(message: _162.QueryFeederDelegationRequestProtoMsg): _162.QueryFeederDelegationRequest;
                toProto(message: _162.QueryFeederDelegationRequest): Uint8Array;
                toProtoMsg(message: _162.QueryFeederDelegationRequest): _162.QueryFeederDelegationRequestProtoMsg;
            };
            QueryFeederDelegationResponse: {
                typeUrl: string;
                encode(message: _162.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryFeederDelegationResponse;
                fromJSON(object: any): _162.QueryFeederDelegationResponse;
                toJSON(message: _162.QueryFeederDelegationResponse): unknown;
                fromPartial(object: Partial<_162.QueryFeederDelegationResponse>): _162.QueryFeederDelegationResponse;
                fromAmino(object: _162.QueryFeederDelegationResponseAmino): _162.QueryFeederDelegationResponse;
                toAmino(message: _162.QueryFeederDelegationResponse): _162.QueryFeederDelegationResponseAmino;
                fromAminoMsg(object: _162.QueryFeederDelegationResponseAminoMsg): _162.QueryFeederDelegationResponse;
                fromProtoMsg(message: _162.QueryFeederDelegationResponseProtoMsg): _162.QueryFeederDelegationResponse;
                toProto(message: _162.QueryFeederDelegationResponse): Uint8Array;
                toProtoMsg(message: _162.QueryFeederDelegationResponse): _162.QueryFeederDelegationResponseProtoMsg;
            };
            QueryVotePenaltyCounterRequest: {
                typeUrl: string;
                encode(message: _162.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryVotePenaltyCounterRequest;
                fromJSON(object: any): _162.QueryVotePenaltyCounterRequest;
                toJSON(message: _162.QueryVotePenaltyCounterRequest): unknown;
                fromPartial(object: Partial<_162.QueryVotePenaltyCounterRequest>): _162.QueryVotePenaltyCounterRequest;
                fromAmino(object: _162.QueryVotePenaltyCounterRequestAmino): _162.QueryVotePenaltyCounterRequest;
                toAmino(message: _162.QueryVotePenaltyCounterRequest): _162.QueryVotePenaltyCounterRequestAmino;
                fromAminoMsg(object: _162.QueryVotePenaltyCounterRequestAminoMsg): _162.QueryVotePenaltyCounterRequest;
                fromProtoMsg(message: _162.QueryVotePenaltyCounterRequestProtoMsg): _162.QueryVotePenaltyCounterRequest;
                toProto(message: _162.QueryVotePenaltyCounterRequest): Uint8Array;
                toProtoMsg(message: _162.QueryVotePenaltyCounterRequest): _162.QueryVotePenaltyCounterRequestProtoMsg;
            };
            QueryVotePenaltyCounterResponse: {
                typeUrl: string;
                encode(message: _162.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryVotePenaltyCounterResponse;
                fromJSON(object: any): _162.QueryVotePenaltyCounterResponse;
                toJSON(message: _162.QueryVotePenaltyCounterResponse): unknown;
                fromPartial(object: Partial<_162.QueryVotePenaltyCounterResponse>): _162.QueryVotePenaltyCounterResponse;
                fromAmino(object: _162.QueryVotePenaltyCounterResponseAmino): _162.QueryVotePenaltyCounterResponse;
                toAmino(message: _162.QueryVotePenaltyCounterResponse): _162.QueryVotePenaltyCounterResponseAmino;
                fromAminoMsg(object: _162.QueryVotePenaltyCounterResponseAminoMsg): _162.QueryVotePenaltyCounterResponse;
                fromProtoMsg(message: _162.QueryVotePenaltyCounterResponseProtoMsg): _162.QueryVotePenaltyCounterResponse;
                toProto(message: _162.QueryVotePenaltyCounterResponse): Uint8Array;
                toProtoMsg(message: _162.QueryVotePenaltyCounterResponse): _162.QueryVotePenaltyCounterResponseProtoMsg;
            };
            QuerySlashWindowRequest: {
                typeUrl: string;
                encode(_: _162.QuerySlashWindowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QuerySlashWindowRequest;
                fromJSON(_: any): _162.QuerySlashWindowRequest;
                toJSON(_: _162.QuerySlashWindowRequest): unknown;
                fromPartial(_: Partial<_162.QuerySlashWindowRequest>): _162.QuerySlashWindowRequest;
                fromAmino(_: _162.QuerySlashWindowRequestAmino): _162.QuerySlashWindowRequest;
                toAmino(_: _162.QuerySlashWindowRequest): _162.QuerySlashWindowRequestAmino;
                fromAminoMsg(object: _162.QuerySlashWindowRequestAminoMsg): _162.QuerySlashWindowRequest;
                fromProtoMsg(message: _162.QuerySlashWindowRequestProtoMsg): _162.QuerySlashWindowRequest;
                toProto(message: _162.QuerySlashWindowRequest): Uint8Array;
                toProtoMsg(message: _162.QuerySlashWindowRequest): _162.QuerySlashWindowRequestProtoMsg;
            };
            QuerySlashWindowResponse: {
                typeUrl: string;
                encode(message: _162.QuerySlashWindowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QuerySlashWindowResponse;
                fromJSON(object: any): _162.QuerySlashWindowResponse;
                toJSON(message: _162.QuerySlashWindowResponse): unknown;
                fromPartial(object: Partial<_162.QuerySlashWindowResponse>): _162.QuerySlashWindowResponse;
                fromAmino(object: _162.QuerySlashWindowResponseAmino): _162.QuerySlashWindowResponse;
                toAmino(message: _162.QuerySlashWindowResponse): _162.QuerySlashWindowResponseAmino;
                fromAminoMsg(object: _162.QuerySlashWindowResponseAminoMsg): _162.QuerySlashWindowResponse;
                fromProtoMsg(message: _162.QuerySlashWindowResponseProtoMsg): _162.QuerySlashWindowResponse;
                toProto(message: _162.QuerySlashWindowResponse): Uint8Array;
                toProtoMsg(message: _162.QuerySlashWindowResponse): _162.QuerySlashWindowResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _162.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsRequest;
                fromJSON(_: any): _162.QueryParamsRequest;
                toJSON(_: _162.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_162.QueryParamsRequest>): _162.QueryParamsRequest;
                fromAmino(_: _162.QueryParamsRequestAmino): _162.QueryParamsRequest;
                toAmino(_: _162.QueryParamsRequest): _162.QueryParamsRequestAmino;
                fromAminoMsg(object: _162.QueryParamsRequestAminoMsg): _162.QueryParamsRequest;
                fromProtoMsg(message: _162.QueryParamsRequestProtoMsg): _162.QueryParamsRequest;
                toProto(message: _162.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _162.QueryParamsRequest): _162.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _162.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsResponse;
                fromJSON(object: any): _162.QueryParamsResponse;
                toJSON(message: _162.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_162.QueryParamsResponse>): _162.QueryParamsResponse;
                fromAmino(object: _162.QueryParamsResponseAmino): _162.QueryParamsResponse;
                toAmino(message: _162.QueryParamsResponse): _162.QueryParamsResponseAmino;
                fromAminoMsg(object: _162.QueryParamsResponseAminoMsg): _162.QueryParamsResponse;
                fromProtoMsg(message: _162.QueryParamsResponseProtoMsg): _162.QueryParamsResponse;
                toProto(message: _162.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _162.QueryParamsResponse): _162.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _161.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Params;
                fromJSON(object: any): _161.Params;
                toJSON(message: _161.Params): unknown;
                fromPartial(object: Partial<_161.Params>): _161.Params;
                fromAmino(object: _161.ParamsAmino): _161.Params;
                toAmino(message: _161.Params): _161.ParamsAmino;
                fromAminoMsg(object: _161.ParamsAminoMsg): _161.Params;
                fromProtoMsg(message: _161.ParamsProtoMsg): _161.Params;
                toProto(message: _161.Params): Uint8Array;
                toProtoMsg(message: _161.Params): _161.ParamsProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _161.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Denom;
                fromJSON(object: any): _161.Denom;
                toJSON(message: _161.Denom): unknown;
                fromPartial(object: Partial<_161.Denom>): _161.Denom;
                fromAmino(object: _161.DenomAmino): _161.Denom;
                toAmino(message: _161.Denom): _161.DenomAmino;
                fromAminoMsg(object: _161.DenomAminoMsg): _161.Denom;
                fromProtoMsg(message: _161.DenomProtoMsg): _161.Denom;
                toProto(message: _161.Denom): Uint8Array;
                toProtoMsg(message: _161.Denom): _161.DenomProtoMsg;
            };
            AggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _161.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.AggregateExchangeRateVote;
                fromJSON(object: any): _161.AggregateExchangeRateVote;
                toJSON(message: _161.AggregateExchangeRateVote): unknown;
                fromPartial(object: Partial<_161.AggregateExchangeRateVote>): _161.AggregateExchangeRateVote;
                fromAmino(object: _161.AggregateExchangeRateVoteAmino): _161.AggregateExchangeRateVote;
                toAmino(message: _161.AggregateExchangeRateVote): _161.AggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _161.AggregateExchangeRateVoteAminoMsg): _161.AggregateExchangeRateVote;
                fromProtoMsg(message: _161.AggregateExchangeRateVoteProtoMsg): _161.AggregateExchangeRateVote;
                toProto(message: _161.AggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _161.AggregateExchangeRateVote): _161.AggregateExchangeRateVoteProtoMsg;
            };
            ExchangeRateTuple: {
                typeUrl: string;
                encode(message: _161.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ExchangeRateTuple;
                fromJSON(object: any): _161.ExchangeRateTuple;
                toJSON(message: _161.ExchangeRateTuple): unknown;
                fromPartial(object: Partial<_161.ExchangeRateTuple>): _161.ExchangeRateTuple;
                fromAmino(object: _161.ExchangeRateTupleAmino): _161.ExchangeRateTuple;
                toAmino(message: _161.ExchangeRateTuple): _161.ExchangeRateTupleAmino;
                fromAminoMsg(object: _161.ExchangeRateTupleAminoMsg): _161.ExchangeRateTuple;
                fromProtoMsg(message: _161.ExchangeRateTupleProtoMsg): _161.ExchangeRateTuple;
                toProto(message: _161.ExchangeRateTuple): Uint8Array;
                toProtoMsg(message: _161.ExchangeRateTuple): _161.ExchangeRateTupleProtoMsg;
            };
            OracleExchangeRate: {
                typeUrl: string;
                encode(message: _161.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.OracleExchangeRate;
                fromJSON(object: any): _161.OracleExchangeRate;
                toJSON(message: _161.OracleExchangeRate): unknown;
                fromPartial(object: Partial<_161.OracleExchangeRate>): _161.OracleExchangeRate;
                fromAmino(object: _161.OracleExchangeRateAmino): _161.OracleExchangeRate;
                toAmino(message: _161.OracleExchangeRate): _161.OracleExchangeRateAmino;
                fromAminoMsg(object: _161.OracleExchangeRateAminoMsg): _161.OracleExchangeRate;
                fromProtoMsg(message: _161.OracleExchangeRateProtoMsg): _161.OracleExchangeRate;
                toProto(message: _161.OracleExchangeRate): Uint8Array;
                toProtoMsg(message: _161.OracleExchangeRate): _161.OracleExchangeRateProtoMsg;
            };
            PriceSnapshotItem: {
                typeUrl: string;
                encode(message: _161.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PriceSnapshotItem;
                fromJSON(object: any): _161.PriceSnapshotItem;
                toJSON(message: _161.PriceSnapshotItem): unknown;
                fromPartial(object: Partial<_161.PriceSnapshotItem>): _161.PriceSnapshotItem;
                fromAmino(object: _161.PriceSnapshotItemAmino): _161.PriceSnapshotItem;
                toAmino(message: _161.PriceSnapshotItem): _161.PriceSnapshotItemAmino;
                fromAminoMsg(object: _161.PriceSnapshotItemAminoMsg): _161.PriceSnapshotItem;
                fromProtoMsg(message: _161.PriceSnapshotItemProtoMsg): _161.PriceSnapshotItem;
                toProto(message: _161.PriceSnapshotItem): Uint8Array;
                toProtoMsg(message: _161.PriceSnapshotItem): _161.PriceSnapshotItemProtoMsg;
            };
            PriceSnapshot: {
                typeUrl: string;
                encode(message: _161.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PriceSnapshot;
                fromJSON(object: any): _161.PriceSnapshot;
                toJSON(message: _161.PriceSnapshot): unknown;
                fromPartial(object: Partial<_161.PriceSnapshot>): _161.PriceSnapshot;
                fromAmino(object: _161.PriceSnapshotAmino): _161.PriceSnapshot;
                toAmino(message: _161.PriceSnapshot): _161.PriceSnapshotAmino;
                fromAminoMsg(object: _161.PriceSnapshotAminoMsg): _161.PriceSnapshot;
                fromProtoMsg(message: _161.PriceSnapshotProtoMsg): _161.PriceSnapshot;
                toProto(message: _161.PriceSnapshot): Uint8Array;
                toProtoMsg(message: _161.PriceSnapshot): _161.PriceSnapshotProtoMsg;
            };
            OracleTwap: {
                typeUrl: string;
                encode(message: _161.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.OracleTwap;
                fromJSON(object: any): _161.OracleTwap;
                toJSON(message: _161.OracleTwap): unknown;
                fromPartial(object: Partial<_161.OracleTwap>): _161.OracleTwap;
                fromAmino(object: _161.OracleTwapAmino): _161.OracleTwap;
                toAmino(message: _161.OracleTwap): _161.OracleTwapAmino;
                fromAminoMsg(object: _161.OracleTwapAminoMsg): _161.OracleTwap;
                fromProtoMsg(message: _161.OracleTwapProtoMsg): _161.OracleTwap;
                toProto(message: _161.OracleTwap): Uint8Array;
                toProtoMsg(message: _161.OracleTwap): _161.OracleTwapProtoMsg;
            };
            VotePenaltyCounter: {
                typeUrl: string;
                encode(message: _161.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.VotePenaltyCounter;
                fromJSON(object: any): _161.VotePenaltyCounter;
                toJSON(message: _161.VotePenaltyCounter): unknown;
                fromPartial(object: Partial<_161.VotePenaltyCounter>): _161.VotePenaltyCounter;
                fromAmino(object: _161.VotePenaltyCounterAmino): _161.VotePenaltyCounter;
                toAmino(message: _161.VotePenaltyCounter): _161.VotePenaltyCounterAmino;
                fromAminoMsg(object: _161.VotePenaltyCounterAminoMsg): _161.VotePenaltyCounter;
                fromProtoMsg(message: _161.VotePenaltyCounterProtoMsg): _161.VotePenaltyCounter;
                toProto(message: _161.VotePenaltyCounter): Uint8Array;
                toProtoMsg(message: _161.VotePenaltyCounter): _161.VotePenaltyCounterProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _160.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisState;
                fromJSON(object: any): _160.GenesisState;
                toJSON(message: _160.GenesisState): unknown;
                fromPartial(object: Partial<_160.GenesisState>): _160.GenesisState;
                fromAmino(object: _160.GenesisStateAmino): _160.GenesisState;
                toAmino(message: _160.GenesisState): _160.GenesisStateAmino;
                fromAminoMsg(object: _160.GenesisStateAminoMsg): _160.GenesisState;
                fromProtoMsg(message: _160.GenesisStateProtoMsg): _160.GenesisState;
                toProto(message: _160.GenesisState): Uint8Array;
                toProtoMsg(message: _160.GenesisState): _160.GenesisStateProtoMsg;
            };
            FeederDelegation: {
                typeUrl: string;
                encode(message: _160.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.FeederDelegation;
                fromJSON(object: any): _160.FeederDelegation;
                toJSON(message: _160.FeederDelegation): unknown;
                fromPartial(object: Partial<_160.FeederDelegation>): _160.FeederDelegation;
                fromAmino(object: _160.FeederDelegationAmino): _160.FeederDelegation;
                toAmino(message: _160.FeederDelegation): _160.FeederDelegationAmino;
                fromAminoMsg(object: _160.FeederDelegationAminoMsg): _160.FeederDelegation;
                fromProtoMsg(message: _160.FeederDelegationProtoMsg): _160.FeederDelegation;
                toProto(message: _160.FeederDelegation): Uint8Array;
                toProtoMsg(message: _160.FeederDelegation): _160.FeederDelegationProtoMsg;
            };
            PenaltyCounter: {
                typeUrl: string;
                encode(message: _160.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.PenaltyCounter;
                fromJSON(object: any): _160.PenaltyCounter;
                toJSON(message: _160.PenaltyCounter): unknown;
                fromPartial(object: Partial<_160.PenaltyCounter>): _160.PenaltyCounter;
                fromAmino(object: _160.PenaltyCounterAmino): _160.PenaltyCounter;
                toAmino(message: _160.PenaltyCounter): _160.PenaltyCounterAmino;
                fromAminoMsg(object: _160.PenaltyCounterAminoMsg): _160.PenaltyCounter;
                fromProtoMsg(message: _160.PenaltyCounterProtoMsg): _160.PenaltyCounter;
                toProto(message: _160.PenaltyCounter): Uint8Array;
                toProtoMsg(message: _160.PenaltyCounter): _160.PenaltyCounterProtoMsg;
            };
        };
        const tokenfactory: {
            MsgClientImpl: typeof _336.MsgClientImpl;
            QueryClientImpl: typeof _330.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                denomAuthorityMetadata(request: _172.QueryDenomAuthorityMetadataRequest): Promise<_172.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _172.QueryDenomsFromCreatorRequest): Promise<_172.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _320.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _173.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _173.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _173.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _173.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _173.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _173.MsgCreateDenom): {
                        typeUrl: string;
                        value: _173.MsgCreateDenom;
                    };
                    mint(value: _173.MsgMint): {
                        typeUrl: string;
                        value: _173.MsgMint;
                    };
                    burn(value: _173.MsgBurn): {
                        typeUrl: string;
                        value: _173.MsgBurn;
                    };
                    changeAdmin(value: _173.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _173.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _173.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _173.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _173.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _173.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _173.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _173.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _173.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _173.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _173.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _173.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _173.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _173.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _173.MsgCreateDenom): {
                        typeUrl: string;
                        value: _173.MsgCreateDenom;
                    };
                    mint(value: _173.MsgMint): {
                        typeUrl: string;
                        value: _173.MsgMint;
                    };
                    burn(value: _173.MsgBurn): {
                        typeUrl: string;
                        value: _173.MsgBurn;
                    };
                    changeAdmin(value: _173.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _173.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _173.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _173.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _173.MsgCreateDenom) => _173.MsgCreateDenomAmino;
                    fromAmino: (object: _173.MsgCreateDenomAmino) => _173.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _173.MsgMint) => _173.MsgMintAmino;
                    fromAmino: (object: _173.MsgMintAmino) => _173.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _173.MsgBurn) => _173.MsgBurnAmino;
                    fromAmino: (object: _173.MsgBurnAmino) => _173.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _173.MsgChangeAdmin) => _173.MsgChangeAdminAmino;
                    fromAmino: (object: _173.MsgChangeAdminAmino) => _173.MsgChangeAdmin;
                };
                "/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _173.MsgSetDenomMetadata) => _173.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _173.MsgSetDenomMetadataAmino) => _173.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _173.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgCreateDenom;
                fromJSON(object: any): _173.MsgCreateDenom;
                toJSON(message: _173.MsgCreateDenom): unknown;
                fromPartial(object: Partial<_173.MsgCreateDenom>): _173.MsgCreateDenom;
                fromAmino(object: _173.MsgCreateDenomAmino): _173.MsgCreateDenom;
                toAmino(message: _173.MsgCreateDenom): _173.MsgCreateDenomAmino;
                fromAminoMsg(object: _173.MsgCreateDenomAminoMsg): _173.MsgCreateDenom;
                fromProtoMsg(message: _173.MsgCreateDenomProtoMsg): _173.MsgCreateDenom;
                toProto(message: _173.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _173.MsgCreateDenom): _173.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _173.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgCreateDenomResponse;
                fromJSON(object: any): _173.MsgCreateDenomResponse;
                toJSON(message: _173.MsgCreateDenomResponse): unknown;
                fromPartial(object: Partial<_173.MsgCreateDenomResponse>): _173.MsgCreateDenomResponse;
                fromAmino(object: _173.MsgCreateDenomResponseAmino): _173.MsgCreateDenomResponse;
                toAmino(message: _173.MsgCreateDenomResponse): _173.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _173.MsgCreateDenomResponseAminoMsg): _173.MsgCreateDenomResponse;
                fromProtoMsg(message: _173.MsgCreateDenomResponseProtoMsg): _173.MsgCreateDenomResponse;
                toProto(message: _173.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _173.MsgCreateDenomResponse): _173.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _173.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgMint;
                fromJSON(object: any): _173.MsgMint;
                toJSON(message: _173.MsgMint): unknown;
                fromPartial(object: Partial<_173.MsgMint>): _173.MsgMint;
                fromAmino(object: _173.MsgMintAmino): _173.MsgMint;
                toAmino(message: _173.MsgMint): _173.MsgMintAmino;
                fromAminoMsg(object: _173.MsgMintAminoMsg): _173.MsgMint;
                fromProtoMsg(message: _173.MsgMintProtoMsg): _173.MsgMint;
                toProto(message: _173.MsgMint): Uint8Array;
                toProtoMsg(message: _173.MsgMint): _173.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _173.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgMintResponse;
                fromJSON(_: any): _173.MsgMintResponse;
                toJSON(_: _173.MsgMintResponse): unknown;
                fromPartial(_: Partial<_173.MsgMintResponse>): _173.MsgMintResponse;
                fromAmino(_: _173.MsgMintResponseAmino): _173.MsgMintResponse;
                toAmino(_: _173.MsgMintResponse): _173.MsgMintResponseAmino;
                fromAminoMsg(object: _173.MsgMintResponseAminoMsg): _173.MsgMintResponse;
                fromProtoMsg(message: _173.MsgMintResponseProtoMsg): _173.MsgMintResponse;
                toProto(message: _173.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _173.MsgMintResponse): _173.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _173.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgBurn;
                fromJSON(object: any): _173.MsgBurn;
                toJSON(message: _173.MsgBurn): unknown;
                fromPartial(object: Partial<_173.MsgBurn>): _173.MsgBurn;
                fromAmino(object: _173.MsgBurnAmino): _173.MsgBurn;
                toAmino(message: _173.MsgBurn): _173.MsgBurnAmino;
                fromAminoMsg(object: _173.MsgBurnAminoMsg): _173.MsgBurn;
                fromProtoMsg(message: _173.MsgBurnProtoMsg): _173.MsgBurn;
                toProto(message: _173.MsgBurn): Uint8Array;
                toProtoMsg(message: _173.MsgBurn): _173.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _173.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgBurnResponse;
                fromJSON(_: any): _173.MsgBurnResponse;
                toJSON(_: _173.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_173.MsgBurnResponse>): _173.MsgBurnResponse;
                fromAmino(_: _173.MsgBurnResponseAmino): _173.MsgBurnResponse;
                toAmino(_: _173.MsgBurnResponse): _173.MsgBurnResponseAmino;
                fromAminoMsg(object: _173.MsgBurnResponseAminoMsg): _173.MsgBurnResponse;
                fromProtoMsg(message: _173.MsgBurnResponseProtoMsg): _173.MsgBurnResponse;
                toProto(message: _173.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _173.MsgBurnResponse): _173.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _173.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChangeAdmin;
                fromJSON(object: any): _173.MsgChangeAdmin;
                toJSON(message: _173.MsgChangeAdmin): unknown;
                fromPartial(object: Partial<_173.MsgChangeAdmin>): _173.MsgChangeAdmin;
                fromAmino(object: _173.MsgChangeAdminAmino): _173.MsgChangeAdmin;
                toAmino(message: _173.MsgChangeAdmin): _173.MsgChangeAdminAmino;
                fromAminoMsg(object: _173.MsgChangeAdminAminoMsg): _173.MsgChangeAdmin;
                fromProtoMsg(message: _173.MsgChangeAdminProtoMsg): _173.MsgChangeAdmin;
                toProto(message: _173.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _173.MsgChangeAdmin): _173.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _173.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChangeAdminResponse;
                fromJSON(_: any): _173.MsgChangeAdminResponse;
                toJSON(_: _173.MsgChangeAdminResponse): unknown;
                fromPartial(_: Partial<_173.MsgChangeAdminResponse>): _173.MsgChangeAdminResponse;
                fromAmino(_: _173.MsgChangeAdminResponseAmino): _173.MsgChangeAdminResponse;
                toAmino(_: _173.MsgChangeAdminResponse): _173.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _173.MsgChangeAdminResponseAminoMsg): _173.MsgChangeAdminResponse;
                fromProtoMsg(message: _173.MsgChangeAdminResponseProtoMsg): _173.MsgChangeAdminResponse;
                toProto(message: _173.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _173.MsgChangeAdminResponse): _173.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _173.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgSetDenomMetadata;
                fromJSON(object: any): _173.MsgSetDenomMetadata;
                toJSON(message: _173.MsgSetDenomMetadata): unknown;
                fromPartial(object: Partial<_173.MsgSetDenomMetadata>): _173.MsgSetDenomMetadata;
                fromAmino(object: _173.MsgSetDenomMetadataAmino): _173.MsgSetDenomMetadata;
                toAmino(message: _173.MsgSetDenomMetadata): _173.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _173.MsgSetDenomMetadataAminoMsg): _173.MsgSetDenomMetadata;
                fromProtoMsg(message: _173.MsgSetDenomMetadataProtoMsg): _173.MsgSetDenomMetadata;
                toProto(message: _173.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _173.MsgSetDenomMetadata): _173.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _173.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _173.MsgSetDenomMetadataResponse;
                toJSON(_: _173.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: Partial<_173.MsgSetDenomMetadataResponse>): _173.MsgSetDenomMetadataResponse;
                fromAmino(_: _173.MsgSetDenomMetadataResponseAmino): _173.MsgSetDenomMetadataResponse;
                toAmino(_: _173.MsgSetDenomMetadataResponse): _173.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _173.MsgSetDenomMetadataResponseAminoMsg): _173.MsgSetDenomMetadataResponse;
                fromProtoMsg(message: _173.MsgSetDenomMetadataResponseProtoMsg): _173.MsgSetDenomMetadataResponse;
                toProto(message: _173.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _173.MsgSetDenomMetadataResponse): _173.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _172.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryParamsRequest;
                fromJSON(_: any): _172.QueryParamsRequest;
                toJSON(_: _172.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_172.QueryParamsRequest>): _172.QueryParamsRequest;
                fromAmino(_: _172.QueryParamsRequestAmino): _172.QueryParamsRequest;
                toAmino(_: _172.QueryParamsRequest): _172.QueryParamsRequestAmino;
                fromAminoMsg(object: _172.QueryParamsRequestAminoMsg): _172.QueryParamsRequest;
                fromProtoMsg(message: _172.QueryParamsRequestProtoMsg): _172.QueryParamsRequest;
                toProto(message: _172.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryParamsRequest): _172.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _172.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryParamsResponse;
                fromJSON(object: any): _172.QueryParamsResponse;
                toJSON(message: _172.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_172.QueryParamsResponse>): _172.QueryParamsResponse;
                fromAmino(object: _172.QueryParamsResponseAmino): _172.QueryParamsResponse;
                toAmino(message: _172.QueryParamsResponse): _172.QueryParamsResponseAmino;
                fromAminoMsg(object: _172.QueryParamsResponseAminoMsg): _172.QueryParamsResponse;
                fromProtoMsg(message: _172.QueryParamsResponseProtoMsg): _172.QueryParamsResponse;
                toProto(message: _172.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryParamsResponse): _172.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _172.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _172.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _172.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: Partial<_172.QueryDenomAuthorityMetadataRequest>): _172.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _172.QueryDenomAuthorityMetadataRequestAmino): _172.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _172.QueryDenomAuthorityMetadataRequest): _172.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _172.QueryDenomAuthorityMetadataRequestAminoMsg): _172.QueryDenomAuthorityMetadataRequest;
                fromProtoMsg(message: _172.QueryDenomAuthorityMetadataRequestProtoMsg): _172.QueryDenomAuthorityMetadataRequest;
                toProto(message: _172.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _172.QueryDenomAuthorityMetadataRequest): _172.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _172.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _172.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _172.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: Partial<_172.QueryDenomAuthorityMetadataResponse>): _172.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _172.QueryDenomAuthorityMetadataResponseAmino): _172.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _172.QueryDenomAuthorityMetadataResponse): _172.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _172.QueryDenomAuthorityMetadataResponseAminoMsg): _172.QueryDenomAuthorityMetadataResponse;
                fromProtoMsg(message: _172.QueryDenomAuthorityMetadataResponseProtoMsg): _172.QueryDenomAuthorityMetadataResponse;
                toProto(message: _172.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _172.QueryDenomAuthorityMetadataResponse): _172.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _172.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _172.QueryDenomsFromCreatorRequest;
                toJSON(message: _172.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: Partial<_172.QueryDenomsFromCreatorRequest>): _172.QueryDenomsFromCreatorRequest;
                fromAmino(object: _172.QueryDenomsFromCreatorRequestAmino): _172.QueryDenomsFromCreatorRequest;
                toAmino(message: _172.QueryDenomsFromCreatorRequest): _172.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _172.QueryDenomsFromCreatorRequestAminoMsg): _172.QueryDenomsFromCreatorRequest;
                fromProtoMsg(message: _172.QueryDenomsFromCreatorRequestProtoMsg): _172.QueryDenomsFromCreatorRequest;
                toProto(message: _172.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _172.QueryDenomsFromCreatorRequest): _172.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _172.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _172.QueryDenomsFromCreatorResponse;
                toJSON(message: _172.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: Partial<_172.QueryDenomsFromCreatorResponse>): _172.QueryDenomsFromCreatorResponse;
                fromAmino(object: _172.QueryDenomsFromCreatorResponseAmino): _172.QueryDenomsFromCreatorResponse;
                toAmino(message: _172.QueryDenomsFromCreatorResponse): _172.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _172.QueryDenomsFromCreatorResponseAminoMsg): _172.QueryDenomsFromCreatorResponse;
                fromProtoMsg(message: _172.QueryDenomsFromCreatorResponseProtoMsg): _172.QueryDenomsFromCreatorResponse;
                toProto(message: _172.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _172.QueryDenomsFromCreatorResponse): _172.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _171.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Params;
                fromJSON(_: any): _171.Params;
                toJSON(_: _171.Params): unknown;
                fromPartial(_: Partial<_171.Params>): _171.Params;
                fromAmino(_: _171.ParamsAmino): _171.Params;
                toAmino(_: _171.Params): _171.ParamsAmino;
                fromAminoMsg(object: _171.ParamsAminoMsg): _171.Params;
                fromProtoMsg(message: _171.ParamsProtoMsg): _171.Params;
                toProto(message: _171.Params): Uint8Array;
                toProtoMsg(message: _171.Params): _171.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _170.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GenesisState;
                fromJSON(object: any): _170.GenesisState;
                toJSON(message: _170.GenesisState): unknown;
                fromPartial(object: Partial<_170.GenesisState>): _170.GenesisState;
                fromAmino(object: _170.GenesisStateAmino): _170.GenesisState;
                toAmino(message: _170.GenesisState): _170.GenesisStateAmino;
                fromAminoMsg(object: _170.GenesisStateAminoMsg): _170.GenesisState;
                fromProtoMsg(message: _170.GenesisStateProtoMsg): _170.GenesisState;
                toProto(message: _170.GenesisState): Uint8Array;
                toProtoMsg(message: _170.GenesisState): _170.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _170.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GenesisDenom;
                fromJSON(object: any): _170.GenesisDenom;
                toJSON(message: _170.GenesisDenom): unknown;
                fromPartial(object: Partial<_170.GenesisDenom>): _170.GenesisDenom;
                fromAmino(object: _170.GenesisDenomAmino): _170.GenesisDenom;
                toAmino(message: _170.GenesisDenom): _170.GenesisDenomAmino;
                fromAminoMsg(object: _170.GenesisDenomAminoMsg): _170.GenesisDenom;
                fromProtoMsg(message: _170.GenesisDenomProtoMsg): _170.GenesisDenom;
                toProto(message: _170.GenesisDenom): Uint8Array;
                toProtoMsg(message: _170.GenesisDenom): _170.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _169.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.DenomAuthorityMetadata;
                fromJSON(object: any): _169.DenomAuthorityMetadata;
                toJSON(message: _169.DenomAuthorityMetadata): unknown;
                fromPartial(object: Partial<_169.DenomAuthorityMetadata>): _169.DenomAuthorityMetadata;
                fromAmino(object: _169.DenomAuthorityMetadataAmino): _169.DenomAuthorityMetadata;
                toAmino(message: _169.DenomAuthorityMetadata): _169.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _169.DenomAuthorityMetadataAminoMsg): _169.DenomAuthorityMetadata;
                fromProtoMsg(message: _169.DenomAuthorityMetadataProtoMsg): _169.DenomAuthorityMetadata;
                toProto(message: _169.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _169.DenomAuthorityMetadata): _169.DenomAuthorityMetadataProtoMsg;
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
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            seiprotocol: {
                seichain: {
                    dex: _333.MsgClientImpl;
                    oracle: _334.MsgClientImpl;
                    tokenfactory: _336.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
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
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
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
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
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
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
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
                        params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                        longBook(request: _132.QueryGetLongBookRequest): Promise<_132.QueryGetLongBookResponse>;
                        longBookAll(request: _132.QueryAllLongBookRequest): Promise<_132.QueryAllLongBookResponse>;
                        shortBook(request: _132.QueryGetShortBookRequest): Promise<_132.QueryGetShortBookResponse>;
                        shortBookAll(request: _132.QueryAllShortBookRequest): Promise<_132.QueryAllShortBookResponse>;
                        getPrice(request: _132.QueryGetPriceRequest): Promise<_132.QueryGetPriceResponse>;
                        getLatestPrice(request: _132.QueryGetLatestPriceRequest): Promise<_132.QueryGetLatestPriceResponse>;
                        getPrices(request: _132.QueryGetPricesRequest): Promise<_132.QueryGetPricesResponse>;
                        getTwaps(request: _132.QueryGetTwapsRequest): Promise<_132.QueryGetTwapsResponse>;
                        assetMetadata(request: _132.QueryAssetMetadataRequest): Promise<_132.QueryAssetMetadataResponse>;
                        assetList(request?: _132.QueryAssetListRequest): Promise<_132.QueryAssetListResponse>;
                        getRegisteredPairs(request: _132.QueryRegisteredPairsRequest): Promise<_132.QueryRegisteredPairsResponse>;
                        getRegisteredContract(request: _132.QueryRegisteredContractRequest): Promise<_132.QueryRegisteredContractResponse>;
                        getOrders(request: _132.QueryGetOrdersRequest): Promise<_132.QueryGetOrdersResponse>;
                        getOrder(request: _132.QueryGetOrderByIDRequest): Promise<_132.QueryGetOrderByIDResponse>;
                        getHistoricalPrices(request: _132.QueryGetHistoricalPricesRequest): Promise<_132.QueryGetHistoricalPricesResponse>;
                        getMarketSummary(request: _132.QueryGetMarketSummaryRequest): Promise<_132.QueryGetMarketSummaryResponse>;
                        getOrderSimulation(request: _132.QueryOrderSimulationRequest): Promise<_132.QueryOrderSimulationResponse>;
                        getMatchResult(request: _132.QueryGetMatchResultRequest): Promise<_132.QueryGetMatchResultResponse>;
                        getOrderCount(request: _132.QueryGetOrderCountRequest): Promise<_132.QueryGetOrderCountResponse>;
                    };
                    epoch: {
                        epoch(request?: _146.QueryEpochRequest): Promise<_146.QueryEpochResponse>;
                        params(request?: _146.QueryParamsRequest): Promise<_146.QueryParamsResponse>;
                    };
                    mint: {
                        params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                        minter(request?: _155.QueryMinterRequest): Promise<_155.QueryMinterResponse>;
                    };
                    oracle: {
                        exchangeRate(request: _162.QueryExchangeRateRequest): Promise<_162.QueryExchangeRateResponse>;
                        exchangeRates(request?: _162.QueryExchangeRatesRequest): Promise<_162.QueryExchangeRatesResponse>;
                        actives(request?: _162.QueryActivesRequest): Promise<_162.QueryActivesResponse>;
                        voteTargets(request?: _162.QueryVoteTargetsRequest): Promise<_162.QueryVoteTargetsResponse>;
                        priceSnapshotHistory(request?: _162.QueryPriceSnapshotHistoryRequest): Promise<_162.QueryPriceSnapshotHistoryResponse>;
                        twaps(request: _162.QueryTwapsRequest): Promise<_162.QueryTwapsResponse>;
                        feederDelegation(request: _162.QueryFeederDelegationRequest): Promise<_162.QueryFeederDelegationResponse>;
                        votePenaltyCounter(request: _162.QueryVotePenaltyCounterRequest): Promise<_162.QueryVotePenaltyCounterResponse>;
                        slashWindow(request?: _162.QuerySlashWindowRequest): Promise<_162.QuerySlashWindowResponse>;
                        params(request?: _162.QueryParamsRequest): Promise<_162.QueryParamsResponse>;
                    };
                    tokenfactory: {
                        params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _172.QueryDenomAuthorityMetadataRequest): Promise<_172.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _172.QueryDenomsFromCreatorRequest): Promise<_172.QueryDenomsFromCreatorResponse>;
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
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
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
                    dex: _315.LCDQueryClient;
                    epoch: _316.LCDQueryClient;
                    mint: _317.LCDQueryClient;
                    oracle: _318.LCDQueryClient;
                    tokenfactory: _320.LCDQueryClient;
                };
            };
        }>;
    };
}
