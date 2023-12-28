import * as _128 from "./seichain/dex/asset_list";
import * as _129 from "./seichain/dex/contract";
import * as _130 from "./seichain/dex/deposit";
import * as _131 from "./seichain/dex/enums";
import * as _132 from "./seichain/dex/genesis";
import * as _133 from "./seichain/dex/gov";
import * as _134 from "./seichain/dex/long_book";
import * as _135 from "./seichain/dex/match_result";
import * as _136 from "./seichain/dex/order_entry";
import * as _137 from "./seichain/dex/order";
import * as _138 from "./seichain/dex/pair";
import * as _139 from "./seichain/dex/params";
import * as _140 from "./seichain/dex/price";
import * as _141 from "./seichain/dex/query";
import * as _142 from "./seichain/dex/settlement";
import * as _143 from "./seichain/dex/short_book";
import * as _144 from "./seichain/dex/tick_size";
import * as _145 from "./seichain/dex/twap";
import * as _146 from "./seichain/dex/tx";
import * as _152 from "./seichain/epoch/epoch";
import * as _153 from "./seichain/epoch/genesis";
import * as _154 from "./seichain/epoch/params";
import * as _155 from "./seichain/epoch/query";
import * as _161 from "./seichain/mint/v1beta1/genesis";
import * as _162 from "./seichain/mint/v1beta1/gov";
import * as _163 from "./seichain/mint/v1beta1/mint";
import * as _164 from "./seichain/mint/v1beta1/query";
import * as _169 from "./seichain/oracle/genesis";
import * as _170 from "./seichain/oracle/oracle";
import * as _171 from "./seichain/oracle/query";
import * as _172 from "./seichain/oracle/tx";
import * as _178 from "../tokenfactory/authorityMetadata";
import * as _179 from "../tokenfactory/genesis";
import * as _180 from "../tokenfactory/params";
import * as _181 from "../tokenfactory/query";
import * as _182 from "../tokenfactory/tx";
import * as _329 from "./seichain/dex/query.lcd";
import * as _330 from "./seichain/epoch/query.lcd";
import * as _331 from "./seichain/mint/v1beta1/query.lcd";
import * as _332 from "./seichain/oracle/query.lcd";
import * as _334 from "../tokenfactory/query.lcd";
import * as _339 from "./seichain/dex/query.rpc.Query";
import * as _340 from "./seichain/epoch/query.rpc.Query";
import * as _341 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _342 from "./seichain/oracle/query.rpc.Query";
import * as _344 from "../tokenfactory/query.rpc.Query";
import * as _347 from "./seichain/dex/tx.rpc.msg";
import * as _348 from "./seichain/oracle/tx.rpc.msg";
import * as _350 from "../tokenfactory/tx.rpc.msg";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            MsgClientImpl: typeof _347.MsgClientImpl;
            QueryClientImpl: typeof _339.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
                longBook(request: _141.QueryGetLongBookRequest): Promise<_141.QueryGetLongBookResponse>;
                longBookAll(request: _141.QueryAllLongBookRequest): Promise<_141.QueryAllLongBookResponse>;
                shortBook(request: _141.QueryGetShortBookRequest): Promise<_141.QueryGetShortBookResponse>;
                shortBookAll(request: _141.QueryAllShortBookRequest): Promise<_141.QueryAllShortBookResponse>;
                getPrice(request: _141.QueryGetPriceRequest): Promise<_141.QueryGetPriceResponse>;
                getLatestPrice(request: _141.QueryGetLatestPriceRequest): Promise<_141.QueryGetLatestPriceResponse>;
                getPrices(request: _141.QueryGetPricesRequest): Promise<_141.QueryGetPricesResponse>;
                getTwaps(request: _141.QueryGetTwapsRequest): Promise<_141.QueryGetTwapsResponse>;
                assetMetadata(request: _141.QueryAssetMetadataRequest): Promise<_141.QueryAssetMetadataResponse>;
                assetList(request?: _141.QueryAssetListRequest): Promise<_141.QueryAssetListResponse>;
                getRegisteredPairs(request: _141.QueryRegisteredPairsRequest): Promise<_141.QueryRegisteredPairsResponse>;
                getRegisteredContract(request: _141.QueryRegisteredContractRequest): Promise<_141.QueryRegisteredContractResponse>;
                getOrders(request: _141.QueryGetOrdersRequest): Promise<_141.QueryGetOrdersResponse>;
                getOrder(request: _141.QueryGetOrderByIDRequest): Promise<_141.QueryGetOrderByIDResponse>;
                getHistoricalPrices(request: _141.QueryGetHistoricalPricesRequest): Promise<_141.QueryGetHistoricalPricesResponse>;
                getMarketSummary(request: _141.QueryGetMarketSummaryRequest): Promise<_141.QueryGetMarketSummaryResponse>;
                getOrderSimulation(request: _141.QueryOrderSimulationRequest): Promise<_141.QueryOrderSimulationResponse>;
                getMatchResult(request: _141.QueryGetMatchResultRequest): Promise<_141.QueryGetMatchResultResponse>;
                getOrderCount(request: _141.QueryGetOrderCountRequest): Promise<_141.QueryGetOrderCountResponse>;
            };
            LCDQueryClient: typeof _329.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeOrders(value: _146.MsgPlaceOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrders(value: _146.MsgCancelOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _146.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    contractDepositRent(value: _146.MsgContractDepositRent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterContract(value: _146.MsgUnregisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerPairs(value: _146.MsgRegisterPairs): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePriceTickSize(value: _146.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateQuantityTickSize(value: _146.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unsuspendContract(value: _146.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeOrders(value: _146.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _146.MsgPlaceOrders;
                    };
                    cancelOrders(value: _146.MsgCancelOrders): {
                        typeUrl: string;
                        value: _146.MsgCancelOrders;
                    };
                    registerContract(value: _146.MsgRegisterContract): {
                        typeUrl: string;
                        value: _146.MsgRegisterContract;
                    };
                    contractDepositRent(value: _146.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _146.MsgContractDepositRent;
                    };
                    unregisterContract(value: _146.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _146.MsgUnregisterContract;
                    };
                    registerPairs(value: _146.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _146.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _146.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _146.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _146.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _146.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _146.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _146.MsgUnsuspendContract;
                    };
                };
                toJSON: {
                    placeOrders(value: _146.MsgPlaceOrders): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelOrders(value: _146.MsgCancelOrders): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerContract(value: _146.MsgRegisterContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    contractDepositRent(value: _146.MsgContractDepositRent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unregisterContract(value: _146.MsgUnregisterContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerPairs(value: _146.MsgRegisterPairs): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePriceTickSize(value: _146.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateQuantityTickSize(value: _146.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unsuspendContract(value: _146.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    placeOrders(value: any): {
                        typeUrl: string;
                        value: _146.MsgPlaceOrders;
                    };
                    cancelOrders(value: any): {
                        typeUrl: string;
                        value: _146.MsgCancelOrders;
                    };
                    registerContract(value: any): {
                        typeUrl: string;
                        value: _146.MsgRegisterContract;
                    };
                    contractDepositRent(value: any): {
                        typeUrl: string;
                        value: _146.MsgContractDepositRent;
                    };
                    unregisterContract(value: any): {
                        typeUrl: string;
                        value: _146.MsgUnregisterContract;
                    };
                    registerPairs(value: any): {
                        typeUrl: string;
                        value: _146.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: any): {
                        typeUrl: string;
                        value: _146.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: any): {
                        typeUrl: string;
                        value: _146.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: any): {
                        typeUrl: string;
                        value: _146.MsgUnsuspendContract;
                    };
                };
                fromPartial: {
                    placeOrders(value: _146.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _146.MsgPlaceOrders;
                    };
                    cancelOrders(value: _146.MsgCancelOrders): {
                        typeUrl: string;
                        value: _146.MsgCancelOrders;
                    };
                    registerContract(value: _146.MsgRegisterContract): {
                        typeUrl: string;
                        value: _146.MsgRegisterContract;
                    };
                    contractDepositRent(value: _146.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _146.MsgContractDepositRent;
                    };
                    unregisterContract(value: _146.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _146.MsgUnregisterContract;
                    };
                    registerPairs(value: _146.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _146.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _146.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _146.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _146.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _146.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _146.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _146.MsgUnsuspendContract;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.dex.MsgPlaceOrders": {
                    aminoType: string;
                    toAmino: (message: _146.MsgPlaceOrders) => _146.MsgPlaceOrdersAmino;
                    fromAmino: (object: _146.MsgPlaceOrdersAmino) => _146.MsgPlaceOrders;
                };
                "/seiprotocol.seichain.dex.MsgCancelOrders": {
                    aminoType: string;
                    toAmino: (message: _146.MsgCancelOrders) => _146.MsgCancelOrdersAmino;
                    fromAmino: (object: _146.MsgCancelOrdersAmino) => _146.MsgCancelOrders;
                };
                "/seiprotocol.seichain.dex.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: (message: _146.MsgRegisterContract) => _146.MsgRegisterContractAmino;
                    fromAmino: (object: _146.MsgRegisterContractAmino) => _146.MsgRegisterContract;
                };
                "/seiprotocol.seichain.dex.MsgContractDepositRent": {
                    aminoType: string;
                    toAmino: (message: _146.MsgContractDepositRent) => _146.MsgContractDepositRentAmino;
                    fromAmino: (object: _146.MsgContractDepositRentAmino) => _146.MsgContractDepositRent;
                };
                "/seiprotocol.seichain.dex.MsgUnregisterContract": {
                    aminoType: string;
                    toAmino: (message: _146.MsgUnregisterContract) => _146.MsgUnregisterContractAmino;
                    fromAmino: (object: _146.MsgUnregisterContractAmino) => _146.MsgUnregisterContract;
                };
                "/seiprotocol.seichain.dex.MsgRegisterPairs": {
                    aminoType: string;
                    toAmino: (message: _146.MsgRegisterPairs) => _146.MsgRegisterPairsAmino;
                    fromAmino: (object: _146.MsgRegisterPairsAmino) => _146.MsgRegisterPairs;
                };
                "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
                    aminoType: string;
                    toAmino: (message: _146.MsgUpdatePriceTickSize) => _146.MsgUpdatePriceTickSizeAmino;
                    fromAmino: (object: _146.MsgUpdatePriceTickSizeAmino) => _146.MsgUpdatePriceTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
                    aminoType: string;
                    toAmino: (message: _146.MsgUpdateQuantityTickSize) => _146.MsgUpdateQuantityTickSizeAmino;
                    fromAmino: (object: _146.MsgUpdateQuantityTickSizeAmino) => _146.MsgUpdateQuantityTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
                    aminoType: string;
                    toAmino: (message: _146.MsgUnsuspendContract) => _146.MsgUnsuspendContractAmino;
                    fromAmino: (object: _146.MsgUnsuspendContractAmino) => _146.MsgUnsuspendContract;
                };
            };
            MsgPlaceOrders: {
                typeUrl: string;
                encode(message: _146.MsgPlaceOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgPlaceOrders;
                fromJSON(object: any): _146.MsgPlaceOrders;
                toJSON(message: _146.MsgPlaceOrders): unknown;
                fromPartial(object: Partial<_146.MsgPlaceOrders>): _146.MsgPlaceOrders;
                fromAmino(object: _146.MsgPlaceOrdersAmino): _146.MsgPlaceOrders;
                toAmino(message: _146.MsgPlaceOrders): _146.MsgPlaceOrdersAmino;
                fromAminoMsg(object: _146.MsgPlaceOrdersAminoMsg): _146.MsgPlaceOrders;
                fromProtoMsg(message: _146.MsgPlaceOrdersProtoMsg): _146.MsgPlaceOrders;
                toProto(message: _146.MsgPlaceOrders): Uint8Array;
                toProtoMsg(message: _146.MsgPlaceOrders): _146.MsgPlaceOrdersProtoMsg;
            };
            MsgPlaceOrdersResponse: {
                typeUrl: string;
                encode(message: _146.MsgPlaceOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgPlaceOrdersResponse;
                fromJSON(object: any): _146.MsgPlaceOrdersResponse;
                toJSON(message: _146.MsgPlaceOrdersResponse): unknown;
                fromPartial(object: Partial<_146.MsgPlaceOrdersResponse>): _146.MsgPlaceOrdersResponse;
                fromAmino(object: _146.MsgPlaceOrdersResponseAmino): _146.MsgPlaceOrdersResponse;
                toAmino(message: _146.MsgPlaceOrdersResponse): _146.MsgPlaceOrdersResponseAmino;
                fromAminoMsg(object: _146.MsgPlaceOrdersResponseAminoMsg): _146.MsgPlaceOrdersResponse;
                fromProtoMsg(message: _146.MsgPlaceOrdersResponseProtoMsg): _146.MsgPlaceOrdersResponse;
                toProto(message: _146.MsgPlaceOrdersResponse): Uint8Array;
                toProtoMsg(message: _146.MsgPlaceOrdersResponse): _146.MsgPlaceOrdersResponseProtoMsg;
            };
            MsgCancelOrders: {
                typeUrl: string;
                encode(message: _146.MsgCancelOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgCancelOrders;
                fromJSON(object: any): _146.MsgCancelOrders;
                toJSON(message: _146.MsgCancelOrders): unknown;
                fromPartial(object: Partial<_146.MsgCancelOrders>): _146.MsgCancelOrders;
                fromAmino(object: _146.MsgCancelOrdersAmino): _146.MsgCancelOrders;
                toAmino(message: _146.MsgCancelOrders): _146.MsgCancelOrdersAmino;
                fromAminoMsg(object: _146.MsgCancelOrdersAminoMsg): _146.MsgCancelOrders;
                fromProtoMsg(message: _146.MsgCancelOrdersProtoMsg): _146.MsgCancelOrders;
                toProto(message: _146.MsgCancelOrders): Uint8Array;
                toProtoMsg(message: _146.MsgCancelOrders): _146.MsgCancelOrdersProtoMsg;
            };
            MsgCancelOrdersResponse: {
                typeUrl: string;
                encode(_: _146.MsgCancelOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgCancelOrdersResponse;
                fromJSON(_: any): _146.MsgCancelOrdersResponse;
                toJSON(_: _146.MsgCancelOrdersResponse): unknown;
                fromPartial(_: Partial<_146.MsgCancelOrdersResponse>): _146.MsgCancelOrdersResponse;
                fromAmino(_: _146.MsgCancelOrdersResponseAmino): _146.MsgCancelOrdersResponse;
                toAmino(_: _146.MsgCancelOrdersResponse): _146.MsgCancelOrdersResponseAmino;
                fromAminoMsg(object: _146.MsgCancelOrdersResponseAminoMsg): _146.MsgCancelOrdersResponse;
                fromProtoMsg(message: _146.MsgCancelOrdersResponseProtoMsg): _146.MsgCancelOrdersResponse;
                toProto(message: _146.MsgCancelOrdersResponse): Uint8Array;
                toProtoMsg(message: _146.MsgCancelOrdersResponse): _146.MsgCancelOrdersResponseProtoMsg;
            };
            MsgRegisterContract: {
                typeUrl: string;
                encode(message: _146.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgRegisterContract;
                fromJSON(object: any): _146.MsgRegisterContract;
                toJSON(message: _146.MsgRegisterContract): unknown;
                fromPartial(object: Partial<_146.MsgRegisterContract>): _146.MsgRegisterContract;
                fromAmino(object: _146.MsgRegisterContractAmino): _146.MsgRegisterContract;
                toAmino(message: _146.MsgRegisterContract): _146.MsgRegisterContractAmino;
                fromAminoMsg(object: _146.MsgRegisterContractAminoMsg): _146.MsgRegisterContract;
                fromProtoMsg(message: _146.MsgRegisterContractProtoMsg): _146.MsgRegisterContract;
                toProto(message: _146.MsgRegisterContract): Uint8Array;
                toProtoMsg(message: _146.MsgRegisterContract): _146.MsgRegisterContractProtoMsg;
            };
            MsgRegisterContractResponse: {
                typeUrl: string;
                encode(_: _146.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgRegisterContractResponse;
                fromJSON(_: any): _146.MsgRegisterContractResponse;
                toJSON(_: _146.MsgRegisterContractResponse): unknown;
                fromPartial(_: Partial<_146.MsgRegisterContractResponse>): _146.MsgRegisterContractResponse;
                fromAmino(_: _146.MsgRegisterContractResponseAmino): _146.MsgRegisterContractResponse;
                toAmino(_: _146.MsgRegisterContractResponse): _146.MsgRegisterContractResponseAmino;
                fromAminoMsg(object: _146.MsgRegisterContractResponseAminoMsg): _146.MsgRegisterContractResponse;
                fromProtoMsg(message: _146.MsgRegisterContractResponseProtoMsg): _146.MsgRegisterContractResponse;
                toProto(message: _146.MsgRegisterContractResponse): Uint8Array;
                toProtoMsg(message: _146.MsgRegisterContractResponse): _146.MsgRegisterContractResponseProtoMsg;
            };
            MsgContractDepositRent: {
                typeUrl: string;
                encode(message: _146.MsgContractDepositRent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgContractDepositRent;
                fromJSON(object: any): _146.MsgContractDepositRent;
                toJSON(message: _146.MsgContractDepositRent): unknown;
                fromPartial(object: Partial<_146.MsgContractDepositRent>): _146.MsgContractDepositRent;
                fromAmino(object: _146.MsgContractDepositRentAmino): _146.MsgContractDepositRent;
                toAmino(message: _146.MsgContractDepositRent): _146.MsgContractDepositRentAmino;
                fromAminoMsg(object: _146.MsgContractDepositRentAminoMsg): _146.MsgContractDepositRent;
                fromProtoMsg(message: _146.MsgContractDepositRentProtoMsg): _146.MsgContractDepositRent;
                toProto(message: _146.MsgContractDepositRent): Uint8Array;
                toProtoMsg(message: _146.MsgContractDepositRent): _146.MsgContractDepositRentProtoMsg;
            };
            MsgContractDepositRentResponse: {
                typeUrl: string;
                encode(_: _146.MsgContractDepositRentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgContractDepositRentResponse;
                fromJSON(_: any): _146.MsgContractDepositRentResponse;
                toJSON(_: _146.MsgContractDepositRentResponse): unknown;
                fromPartial(_: Partial<_146.MsgContractDepositRentResponse>): _146.MsgContractDepositRentResponse;
                fromAmino(_: _146.MsgContractDepositRentResponseAmino): _146.MsgContractDepositRentResponse;
                toAmino(_: _146.MsgContractDepositRentResponse): _146.MsgContractDepositRentResponseAmino;
                fromAminoMsg(object: _146.MsgContractDepositRentResponseAminoMsg): _146.MsgContractDepositRentResponse;
                fromProtoMsg(message: _146.MsgContractDepositRentResponseProtoMsg): _146.MsgContractDepositRentResponse;
                toProto(message: _146.MsgContractDepositRentResponse): Uint8Array;
                toProtoMsg(message: _146.MsgContractDepositRentResponse): _146.MsgContractDepositRentResponseProtoMsg;
            };
            MsgUnregisterContract: {
                typeUrl: string;
                encode(message: _146.MsgUnregisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgUnregisterContract;
                fromJSON(object: any): _146.MsgUnregisterContract;
                toJSON(message: _146.MsgUnregisterContract): unknown;
                fromPartial(object: Partial<_146.MsgUnregisterContract>): _146.MsgUnregisterContract;
                fromAmino(object: _146.MsgUnregisterContractAmino): _146.MsgUnregisterContract;
                toAmino(message: _146.MsgUnregisterContract): _146.MsgUnregisterContractAmino;
                fromAminoMsg(object: _146.MsgUnregisterContractAminoMsg): _146.MsgUnregisterContract;
                fromProtoMsg(message: _146.MsgUnregisterContractProtoMsg): _146.MsgUnregisterContract;
                toProto(message: _146.MsgUnregisterContract): Uint8Array;
                toProtoMsg(message: _146.MsgUnregisterContract): _146.MsgUnregisterContractProtoMsg;
            };
            MsgUnregisterContractResponse: {
                typeUrl: string;
                encode(_: _146.MsgUnregisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgUnregisterContractResponse;
                fromJSON(_: any): _146.MsgUnregisterContractResponse;
                toJSON(_: _146.MsgUnregisterContractResponse): unknown;
                fromPartial(_: Partial<_146.MsgUnregisterContractResponse>): _146.MsgUnregisterContractResponse;
                fromAmino(_: _146.MsgUnregisterContractResponseAmino): _146.MsgUnregisterContractResponse;
                toAmino(_: _146.MsgUnregisterContractResponse): _146.MsgUnregisterContractResponseAmino;
                fromAminoMsg(object: _146.MsgUnregisterContractResponseAminoMsg): _146.MsgUnregisterContractResponse;
                fromProtoMsg(message: _146.MsgUnregisterContractResponseProtoMsg): _146.MsgUnregisterContractResponse;
                toProto(message: _146.MsgUnregisterContractResponse): Uint8Array;
                toProtoMsg(message: _146.MsgUnregisterContractResponse): _146.MsgUnregisterContractResponseProtoMsg;
            };
            MsgRegisterPairs: {
                typeUrl: string;
                encode(message: _146.MsgRegisterPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgRegisterPairs;
                fromJSON(object: any): _146.MsgRegisterPairs;
                toJSON(message: _146.MsgRegisterPairs): unknown;
                fromPartial(object: Partial<_146.MsgRegisterPairs>): _146.MsgRegisterPairs;
                fromAmino(object: _146.MsgRegisterPairsAmino): _146.MsgRegisterPairs;
                toAmino(message: _146.MsgRegisterPairs): _146.MsgRegisterPairsAmino;
                fromAminoMsg(object: _146.MsgRegisterPairsAminoMsg): _146.MsgRegisterPairs;
                fromProtoMsg(message: _146.MsgRegisterPairsProtoMsg): _146.MsgRegisterPairs;
                toProto(message: _146.MsgRegisterPairs): Uint8Array;
                toProtoMsg(message: _146.MsgRegisterPairs): _146.MsgRegisterPairsProtoMsg;
            };
            MsgRegisterPairsResponse: {
                typeUrl: string;
                encode(_: _146.MsgRegisterPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgRegisterPairsResponse;
                fromJSON(_: any): _146.MsgRegisterPairsResponse;
                toJSON(_: _146.MsgRegisterPairsResponse): unknown;
                fromPartial(_: Partial<_146.MsgRegisterPairsResponse>): _146.MsgRegisterPairsResponse;
                fromAmino(_: _146.MsgRegisterPairsResponseAmino): _146.MsgRegisterPairsResponse;
                toAmino(_: _146.MsgRegisterPairsResponse): _146.MsgRegisterPairsResponseAmino;
                fromAminoMsg(object: _146.MsgRegisterPairsResponseAminoMsg): _146.MsgRegisterPairsResponse;
                fromProtoMsg(message: _146.MsgRegisterPairsResponseProtoMsg): _146.MsgRegisterPairsResponse;
                toProto(message: _146.MsgRegisterPairsResponse): Uint8Array;
                toProtoMsg(message: _146.MsgRegisterPairsResponse): _146.MsgRegisterPairsResponseProtoMsg;
            };
            MsgUpdatePriceTickSize: {
                typeUrl: string;
                encode(message: _146.MsgUpdatePriceTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgUpdatePriceTickSize;
                fromJSON(object: any): _146.MsgUpdatePriceTickSize;
                toJSON(message: _146.MsgUpdatePriceTickSize): unknown;
                fromPartial(object: Partial<_146.MsgUpdatePriceTickSize>): _146.MsgUpdatePriceTickSize;
                fromAmino(object: _146.MsgUpdatePriceTickSizeAmino): _146.MsgUpdatePriceTickSize;
                toAmino(message: _146.MsgUpdatePriceTickSize): _146.MsgUpdatePriceTickSizeAmino;
                fromAminoMsg(object: _146.MsgUpdatePriceTickSizeAminoMsg): _146.MsgUpdatePriceTickSize;
                fromProtoMsg(message: _146.MsgUpdatePriceTickSizeProtoMsg): _146.MsgUpdatePriceTickSize;
                toProto(message: _146.MsgUpdatePriceTickSize): Uint8Array;
                toProtoMsg(message: _146.MsgUpdatePriceTickSize): _146.MsgUpdatePriceTickSizeProtoMsg;
            };
            MsgUpdateQuantityTickSize: {
                typeUrl: string;
                encode(message: _146.MsgUpdateQuantityTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgUpdateQuantityTickSize;
                fromJSON(object: any): _146.MsgUpdateQuantityTickSize;
                toJSON(message: _146.MsgUpdateQuantityTickSize): unknown;
                fromPartial(object: Partial<_146.MsgUpdateQuantityTickSize>): _146.MsgUpdateQuantityTickSize;
                fromAmino(object: _146.MsgUpdateQuantityTickSizeAmino): _146.MsgUpdateQuantityTickSize;
                toAmino(message: _146.MsgUpdateQuantityTickSize): _146.MsgUpdateQuantityTickSizeAmino;
                fromAminoMsg(object: _146.MsgUpdateQuantityTickSizeAminoMsg): _146.MsgUpdateQuantityTickSize;
                fromProtoMsg(message: _146.MsgUpdateQuantityTickSizeProtoMsg): _146.MsgUpdateQuantityTickSize;
                toProto(message: _146.MsgUpdateQuantityTickSize): Uint8Array;
                toProtoMsg(message: _146.MsgUpdateQuantityTickSize): _146.MsgUpdateQuantityTickSizeProtoMsg;
            };
            MsgUpdateTickSizeResponse: {
                typeUrl: string;
                encode(_: _146.MsgUpdateTickSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgUpdateTickSizeResponse;
                fromJSON(_: any): _146.MsgUpdateTickSizeResponse;
                toJSON(_: _146.MsgUpdateTickSizeResponse): unknown;
                fromPartial(_: Partial<_146.MsgUpdateTickSizeResponse>): _146.MsgUpdateTickSizeResponse;
                fromAmino(_: _146.MsgUpdateTickSizeResponseAmino): _146.MsgUpdateTickSizeResponse;
                toAmino(_: _146.MsgUpdateTickSizeResponse): _146.MsgUpdateTickSizeResponseAmino;
                fromAminoMsg(object: _146.MsgUpdateTickSizeResponseAminoMsg): _146.MsgUpdateTickSizeResponse;
                fromProtoMsg(message: _146.MsgUpdateTickSizeResponseProtoMsg): _146.MsgUpdateTickSizeResponse;
                toProto(message: _146.MsgUpdateTickSizeResponse): Uint8Array;
                toProtoMsg(message: _146.MsgUpdateTickSizeResponse): _146.MsgUpdateTickSizeResponseProtoMsg;
            };
            MsgUnsuspendContract: {
                typeUrl: string;
                encode(message: _146.MsgUnsuspendContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgUnsuspendContract;
                fromJSON(object: any): _146.MsgUnsuspendContract;
                toJSON(message: _146.MsgUnsuspendContract): unknown;
                fromPartial(object: Partial<_146.MsgUnsuspendContract>): _146.MsgUnsuspendContract;
                fromAmino(object: _146.MsgUnsuspendContractAmino): _146.MsgUnsuspendContract;
                toAmino(message: _146.MsgUnsuspendContract): _146.MsgUnsuspendContractAmino;
                fromAminoMsg(object: _146.MsgUnsuspendContractAminoMsg): _146.MsgUnsuspendContract;
                fromProtoMsg(message: _146.MsgUnsuspendContractProtoMsg): _146.MsgUnsuspendContract;
                toProto(message: _146.MsgUnsuspendContract): Uint8Array;
                toProtoMsg(message: _146.MsgUnsuspendContract): _146.MsgUnsuspendContractProtoMsg;
            };
            MsgUnsuspendContractResponse: {
                typeUrl: string;
                encode(_: _146.MsgUnsuspendContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgUnsuspendContractResponse;
                fromJSON(_: any): _146.MsgUnsuspendContractResponse;
                toJSON(_: _146.MsgUnsuspendContractResponse): unknown;
                fromPartial(_: Partial<_146.MsgUnsuspendContractResponse>): _146.MsgUnsuspendContractResponse;
                fromAmino(_: _146.MsgUnsuspendContractResponseAmino): _146.MsgUnsuspendContractResponse;
                toAmino(_: _146.MsgUnsuspendContractResponse): _146.MsgUnsuspendContractResponseAmino;
                fromAminoMsg(object: _146.MsgUnsuspendContractResponseAminoMsg): _146.MsgUnsuspendContractResponse;
                fromProtoMsg(message: _146.MsgUnsuspendContractResponseProtoMsg): _146.MsgUnsuspendContractResponse;
                toProto(message: _146.MsgUnsuspendContractResponse): Uint8Array;
                toProtoMsg(message: _146.MsgUnsuspendContractResponse): _146.MsgUnsuspendContractResponseProtoMsg;
            };
            Twap: {
                typeUrl: string;
                encode(message: _145.Twap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Twap;
                fromJSON(object: any): _145.Twap;
                toJSON(message: _145.Twap): unknown;
                fromPartial(object: Partial<_145.Twap>): _145.Twap;
                fromAmino(object: _145.TwapAmino): _145.Twap;
                toAmino(message: _145.Twap): _145.TwapAmino;
                fromAminoMsg(object: _145.TwapAminoMsg): _145.Twap;
                fromProtoMsg(message: _145.TwapProtoMsg): _145.Twap;
                toProto(message: _145.Twap): Uint8Array;
                toProtoMsg(message: _145.Twap): _145.TwapProtoMsg;
            };
            TickSize: {
                typeUrl: string;
                encode(message: _144.TickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.TickSize;
                fromJSON(object: any): _144.TickSize;
                toJSON(message: _144.TickSize): unknown;
                fromPartial(object: Partial<_144.TickSize>): _144.TickSize;
                fromAmino(object: _144.TickSizeAmino): _144.TickSize;
                toAmino(message: _144.TickSize): _144.TickSizeAmino;
                fromAminoMsg(object: _144.TickSizeAminoMsg): _144.TickSize;
                fromProtoMsg(message: _144.TickSizeProtoMsg): _144.TickSize;
                toProto(message: _144.TickSize): Uint8Array;
                toProtoMsg(message: _144.TickSize): _144.TickSizeProtoMsg;
            };
            ShortBook: {
                typeUrl: string;
                encode(message: _143.ShortBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ShortBook;
                fromJSON(object: any): _143.ShortBook;
                toJSON(message: _143.ShortBook): unknown;
                fromPartial(object: Partial<_143.ShortBook>): _143.ShortBook;
                fromAmino(object: _143.ShortBookAmino): _143.ShortBook;
                toAmino(message: _143.ShortBook): _143.ShortBookAmino;
                fromAminoMsg(object: _143.ShortBookAminoMsg): _143.ShortBook;
                fromProtoMsg(message: _143.ShortBookProtoMsg): _143.ShortBook;
                toProto(message: _143.ShortBook): Uint8Array;
                toProtoMsg(message: _143.ShortBook): _143.ShortBookProtoMsg;
            };
            SettlementEntry: {
                typeUrl: string;
                encode(message: _142.SettlementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SettlementEntry;
                fromJSON(object: any): _142.SettlementEntry;
                toJSON(message: _142.SettlementEntry): unknown;
                fromPartial(object: Partial<_142.SettlementEntry>): _142.SettlementEntry;
                fromAmino(object: _142.SettlementEntryAmino): _142.SettlementEntry;
                toAmino(message: _142.SettlementEntry): _142.SettlementEntryAmino;
                fromAminoMsg(object: _142.SettlementEntryAminoMsg): _142.SettlementEntry;
                fromProtoMsg(message: _142.SettlementEntryProtoMsg): _142.SettlementEntry;
                toProto(message: _142.SettlementEntry): Uint8Array;
                toProtoMsg(message: _142.SettlementEntry): _142.SettlementEntryProtoMsg;
            };
            Settlements: {
                typeUrl: string;
                encode(message: _142.Settlements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Settlements;
                fromJSON(object: any): _142.Settlements;
                toJSON(message: _142.Settlements): unknown;
                fromPartial(object: Partial<_142.Settlements>): _142.Settlements;
                fromAmino(object: _142.SettlementsAmino): _142.Settlements;
                toAmino(message: _142.Settlements): _142.SettlementsAmino;
                fromAminoMsg(object: _142.SettlementsAminoMsg): _142.Settlements;
                fromProtoMsg(message: _142.SettlementsProtoMsg): _142.Settlements;
                toProto(message: _142.Settlements): Uint8Array;
                toProtoMsg(message: _142.Settlements): _142.SettlementsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _141.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryParamsRequest;
                fromJSON(_: any): _141.QueryParamsRequest;
                toJSON(_: _141.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_141.QueryParamsRequest>): _141.QueryParamsRequest;
                fromAmino(_: _141.QueryParamsRequestAmino): _141.QueryParamsRequest;
                toAmino(_: _141.QueryParamsRequest): _141.QueryParamsRequestAmino;
                fromAminoMsg(object: _141.QueryParamsRequestAminoMsg): _141.QueryParamsRequest;
                fromProtoMsg(message: _141.QueryParamsRequestProtoMsg): _141.QueryParamsRequest;
                toProto(message: _141.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryParamsRequest): _141.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _141.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryParamsResponse;
                fromJSON(object: any): _141.QueryParamsResponse;
                toJSON(message: _141.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_141.QueryParamsResponse>): _141.QueryParamsResponse;
                fromAmino(object: _141.QueryParamsResponseAmino): _141.QueryParamsResponse;
                toAmino(message: _141.QueryParamsResponse): _141.QueryParamsResponseAmino;
                fromAminoMsg(object: _141.QueryParamsResponseAminoMsg): _141.QueryParamsResponse;
                fromProtoMsg(message: _141.QueryParamsResponseProtoMsg): _141.QueryParamsResponse;
                toProto(message: _141.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryParamsResponse): _141.QueryParamsResponseProtoMsg;
            };
            QueryGetLongBookRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetLongBookRequest;
                fromJSON(object: any): _141.QueryGetLongBookRequest;
                toJSON(message: _141.QueryGetLongBookRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetLongBookRequest>): _141.QueryGetLongBookRequest;
                fromAmino(object: _141.QueryGetLongBookRequestAmino): _141.QueryGetLongBookRequest;
                toAmino(message: _141.QueryGetLongBookRequest): _141.QueryGetLongBookRequestAmino;
                fromAminoMsg(object: _141.QueryGetLongBookRequestAminoMsg): _141.QueryGetLongBookRequest;
                fromProtoMsg(message: _141.QueryGetLongBookRequestProtoMsg): _141.QueryGetLongBookRequest;
                toProto(message: _141.QueryGetLongBookRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetLongBookRequest): _141.QueryGetLongBookRequestProtoMsg;
            };
            QueryGetLongBookResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetLongBookResponse;
                fromJSON(object: any): _141.QueryGetLongBookResponse;
                toJSON(message: _141.QueryGetLongBookResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetLongBookResponse>): _141.QueryGetLongBookResponse;
                fromAmino(object: _141.QueryGetLongBookResponseAmino): _141.QueryGetLongBookResponse;
                toAmino(message: _141.QueryGetLongBookResponse): _141.QueryGetLongBookResponseAmino;
                fromAminoMsg(object: _141.QueryGetLongBookResponseAminoMsg): _141.QueryGetLongBookResponse;
                fromProtoMsg(message: _141.QueryGetLongBookResponseProtoMsg): _141.QueryGetLongBookResponse;
                toProto(message: _141.QueryGetLongBookResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetLongBookResponse): _141.QueryGetLongBookResponseProtoMsg;
            };
            QueryAllLongBookRequest: {
                typeUrl: string;
                encode(message: _141.QueryAllLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAllLongBookRequest;
                fromJSON(object: any): _141.QueryAllLongBookRequest;
                toJSON(message: _141.QueryAllLongBookRequest): unknown;
                fromPartial(object: Partial<_141.QueryAllLongBookRequest>): _141.QueryAllLongBookRequest;
                fromAmino(object: _141.QueryAllLongBookRequestAmino): _141.QueryAllLongBookRequest;
                toAmino(message: _141.QueryAllLongBookRequest): _141.QueryAllLongBookRequestAmino;
                fromAminoMsg(object: _141.QueryAllLongBookRequestAminoMsg): _141.QueryAllLongBookRequest;
                fromProtoMsg(message: _141.QueryAllLongBookRequestProtoMsg): _141.QueryAllLongBookRequest;
                toProto(message: _141.QueryAllLongBookRequest): Uint8Array;
                toProtoMsg(message: _141.QueryAllLongBookRequest): _141.QueryAllLongBookRequestProtoMsg;
            };
            QueryAllLongBookResponse: {
                typeUrl: string;
                encode(message: _141.QueryAllLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAllLongBookResponse;
                fromJSON(object: any): _141.QueryAllLongBookResponse;
                toJSON(message: _141.QueryAllLongBookResponse): unknown;
                fromPartial(object: Partial<_141.QueryAllLongBookResponse>): _141.QueryAllLongBookResponse;
                fromAmino(object: _141.QueryAllLongBookResponseAmino): _141.QueryAllLongBookResponse;
                toAmino(message: _141.QueryAllLongBookResponse): _141.QueryAllLongBookResponseAmino;
                fromAminoMsg(object: _141.QueryAllLongBookResponseAminoMsg): _141.QueryAllLongBookResponse;
                fromProtoMsg(message: _141.QueryAllLongBookResponseProtoMsg): _141.QueryAllLongBookResponse;
                toProto(message: _141.QueryAllLongBookResponse): Uint8Array;
                toProtoMsg(message: _141.QueryAllLongBookResponse): _141.QueryAllLongBookResponseProtoMsg;
            };
            QueryGetShortBookRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetShortBookRequest;
                fromJSON(object: any): _141.QueryGetShortBookRequest;
                toJSON(message: _141.QueryGetShortBookRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetShortBookRequest>): _141.QueryGetShortBookRequest;
                fromAmino(object: _141.QueryGetShortBookRequestAmino): _141.QueryGetShortBookRequest;
                toAmino(message: _141.QueryGetShortBookRequest): _141.QueryGetShortBookRequestAmino;
                fromAminoMsg(object: _141.QueryGetShortBookRequestAminoMsg): _141.QueryGetShortBookRequest;
                fromProtoMsg(message: _141.QueryGetShortBookRequestProtoMsg): _141.QueryGetShortBookRequest;
                toProto(message: _141.QueryGetShortBookRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetShortBookRequest): _141.QueryGetShortBookRequestProtoMsg;
            };
            QueryGetShortBookResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetShortBookResponse;
                fromJSON(object: any): _141.QueryGetShortBookResponse;
                toJSON(message: _141.QueryGetShortBookResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetShortBookResponse>): _141.QueryGetShortBookResponse;
                fromAmino(object: _141.QueryGetShortBookResponseAmino): _141.QueryGetShortBookResponse;
                toAmino(message: _141.QueryGetShortBookResponse): _141.QueryGetShortBookResponseAmino;
                fromAminoMsg(object: _141.QueryGetShortBookResponseAminoMsg): _141.QueryGetShortBookResponse;
                fromProtoMsg(message: _141.QueryGetShortBookResponseProtoMsg): _141.QueryGetShortBookResponse;
                toProto(message: _141.QueryGetShortBookResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetShortBookResponse): _141.QueryGetShortBookResponseProtoMsg;
            };
            QueryAllShortBookRequest: {
                typeUrl: string;
                encode(message: _141.QueryAllShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAllShortBookRequest;
                fromJSON(object: any): _141.QueryAllShortBookRequest;
                toJSON(message: _141.QueryAllShortBookRequest): unknown;
                fromPartial(object: Partial<_141.QueryAllShortBookRequest>): _141.QueryAllShortBookRequest;
                fromAmino(object: _141.QueryAllShortBookRequestAmino): _141.QueryAllShortBookRequest;
                toAmino(message: _141.QueryAllShortBookRequest): _141.QueryAllShortBookRequestAmino;
                fromAminoMsg(object: _141.QueryAllShortBookRequestAminoMsg): _141.QueryAllShortBookRequest;
                fromProtoMsg(message: _141.QueryAllShortBookRequestProtoMsg): _141.QueryAllShortBookRequest;
                toProto(message: _141.QueryAllShortBookRequest): Uint8Array;
                toProtoMsg(message: _141.QueryAllShortBookRequest): _141.QueryAllShortBookRequestProtoMsg;
            };
            QueryAllShortBookResponse: {
                typeUrl: string;
                encode(message: _141.QueryAllShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAllShortBookResponse;
                fromJSON(object: any): _141.QueryAllShortBookResponse;
                toJSON(message: _141.QueryAllShortBookResponse): unknown;
                fromPartial(object: Partial<_141.QueryAllShortBookResponse>): _141.QueryAllShortBookResponse;
                fromAmino(object: _141.QueryAllShortBookResponseAmino): _141.QueryAllShortBookResponse;
                toAmino(message: _141.QueryAllShortBookResponse): _141.QueryAllShortBookResponseAmino;
                fromAminoMsg(object: _141.QueryAllShortBookResponseAminoMsg): _141.QueryAllShortBookResponse;
                fromProtoMsg(message: _141.QueryAllShortBookResponseProtoMsg): _141.QueryAllShortBookResponse;
                toProto(message: _141.QueryAllShortBookResponse): Uint8Array;
                toProtoMsg(message: _141.QueryAllShortBookResponse): _141.QueryAllShortBookResponseProtoMsg;
            };
            QueryGetPricesRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetPricesRequest;
                fromJSON(object: any): _141.QueryGetPricesRequest;
                toJSON(message: _141.QueryGetPricesRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetPricesRequest>): _141.QueryGetPricesRequest;
                fromAmino(object: _141.QueryGetPricesRequestAmino): _141.QueryGetPricesRequest;
                toAmino(message: _141.QueryGetPricesRequest): _141.QueryGetPricesRequestAmino;
                fromAminoMsg(object: _141.QueryGetPricesRequestAminoMsg): _141.QueryGetPricesRequest;
                fromProtoMsg(message: _141.QueryGetPricesRequestProtoMsg): _141.QueryGetPricesRequest;
                toProto(message: _141.QueryGetPricesRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetPricesRequest): _141.QueryGetPricesRequestProtoMsg;
            };
            QueryGetPricesResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetPricesResponse;
                fromJSON(object: any): _141.QueryGetPricesResponse;
                toJSON(message: _141.QueryGetPricesResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetPricesResponse>): _141.QueryGetPricesResponse;
                fromAmino(object: _141.QueryGetPricesResponseAmino): _141.QueryGetPricesResponse;
                toAmino(message: _141.QueryGetPricesResponse): _141.QueryGetPricesResponseAmino;
                fromAminoMsg(object: _141.QueryGetPricesResponseAminoMsg): _141.QueryGetPricesResponse;
                fromProtoMsg(message: _141.QueryGetPricesResponseProtoMsg): _141.QueryGetPricesResponse;
                toProto(message: _141.QueryGetPricesResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetPricesResponse): _141.QueryGetPricesResponseProtoMsg;
            };
            QueryGetPriceRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetPriceRequest;
                fromJSON(object: any): _141.QueryGetPriceRequest;
                toJSON(message: _141.QueryGetPriceRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetPriceRequest>): _141.QueryGetPriceRequest;
                fromAmino(object: _141.QueryGetPriceRequestAmino): _141.QueryGetPriceRequest;
                toAmino(message: _141.QueryGetPriceRequest): _141.QueryGetPriceRequestAmino;
                fromAminoMsg(object: _141.QueryGetPriceRequestAminoMsg): _141.QueryGetPriceRequest;
                fromProtoMsg(message: _141.QueryGetPriceRequestProtoMsg): _141.QueryGetPriceRequest;
                toProto(message: _141.QueryGetPriceRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetPriceRequest): _141.QueryGetPriceRequestProtoMsg;
            };
            QueryGetPriceResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetPriceResponse;
                fromJSON(object: any): _141.QueryGetPriceResponse;
                toJSON(message: _141.QueryGetPriceResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetPriceResponse>): _141.QueryGetPriceResponse;
                fromAmino(object: _141.QueryGetPriceResponseAmino): _141.QueryGetPriceResponse;
                toAmino(message: _141.QueryGetPriceResponse): _141.QueryGetPriceResponseAmino;
                fromAminoMsg(object: _141.QueryGetPriceResponseAminoMsg): _141.QueryGetPriceResponse;
                fromProtoMsg(message: _141.QueryGetPriceResponseProtoMsg): _141.QueryGetPriceResponse;
                toProto(message: _141.QueryGetPriceResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetPriceResponse): _141.QueryGetPriceResponseProtoMsg;
            };
            QueryGetLatestPriceRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetLatestPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetLatestPriceRequest;
                fromJSON(object: any): _141.QueryGetLatestPriceRequest;
                toJSON(message: _141.QueryGetLatestPriceRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetLatestPriceRequest>): _141.QueryGetLatestPriceRequest;
                fromAmino(object: _141.QueryGetLatestPriceRequestAmino): _141.QueryGetLatestPriceRequest;
                toAmino(message: _141.QueryGetLatestPriceRequest): _141.QueryGetLatestPriceRequestAmino;
                fromAminoMsg(object: _141.QueryGetLatestPriceRequestAminoMsg): _141.QueryGetLatestPriceRequest;
                fromProtoMsg(message: _141.QueryGetLatestPriceRequestProtoMsg): _141.QueryGetLatestPriceRequest;
                toProto(message: _141.QueryGetLatestPriceRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetLatestPriceRequest): _141.QueryGetLatestPriceRequestProtoMsg;
            };
            QueryGetLatestPriceResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetLatestPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetLatestPriceResponse;
                fromJSON(object: any): _141.QueryGetLatestPriceResponse;
                toJSON(message: _141.QueryGetLatestPriceResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetLatestPriceResponse>): _141.QueryGetLatestPriceResponse;
                fromAmino(object: _141.QueryGetLatestPriceResponseAmino): _141.QueryGetLatestPriceResponse;
                toAmino(message: _141.QueryGetLatestPriceResponse): _141.QueryGetLatestPriceResponseAmino;
                fromAminoMsg(object: _141.QueryGetLatestPriceResponseAminoMsg): _141.QueryGetLatestPriceResponse;
                fromProtoMsg(message: _141.QueryGetLatestPriceResponseProtoMsg): _141.QueryGetLatestPriceResponse;
                toProto(message: _141.QueryGetLatestPriceResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetLatestPriceResponse): _141.QueryGetLatestPriceResponseProtoMsg;
            };
            QueryGetTwapsRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetTwapsRequest;
                fromJSON(object: any): _141.QueryGetTwapsRequest;
                toJSON(message: _141.QueryGetTwapsRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetTwapsRequest>): _141.QueryGetTwapsRequest;
                fromAmino(object: _141.QueryGetTwapsRequestAmino): _141.QueryGetTwapsRequest;
                toAmino(message: _141.QueryGetTwapsRequest): _141.QueryGetTwapsRequestAmino;
                fromAminoMsg(object: _141.QueryGetTwapsRequestAminoMsg): _141.QueryGetTwapsRequest;
                fromProtoMsg(message: _141.QueryGetTwapsRequestProtoMsg): _141.QueryGetTwapsRequest;
                toProto(message: _141.QueryGetTwapsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetTwapsRequest): _141.QueryGetTwapsRequestProtoMsg;
            };
            QueryGetTwapsResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetTwapsResponse;
                fromJSON(object: any): _141.QueryGetTwapsResponse;
                toJSON(message: _141.QueryGetTwapsResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetTwapsResponse>): _141.QueryGetTwapsResponse;
                fromAmino(object: _141.QueryGetTwapsResponseAmino): _141.QueryGetTwapsResponse;
                toAmino(message: _141.QueryGetTwapsResponse): _141.QueryGetTwapsResponseAmino;
                fromAminoMsg(object: _141.QueryGetTwapsResponseAminoMsg): _141.QueryGetTwapsResponse;
                fromProtoMsg(message: _141.QueryGetTwapsResponseProtoMsg): _141.QueryGetTwapsResponse;
                toProto(message: _141.QueryGetTwapsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetTwapsResponse): _141.QueryGetTwapsResponseProtoMsg;
            };
            QueryAssetListRequest: {
                typeUrl: string;
                encode(_: _141.QueryAssetListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAssetListRequest;
                fromJSON(_: any): _141.QueryAssetListRequest;
                toJSON(_: _141.QueryAssetListRequest): unknown;
                fromPartial(_: Partial<_141.QueryAssetListRequest>): _141.QueryAssetListRequest;
                fromAmino(_: _141.QueryAssetListRequestAmino): _141.QueryAssetListRequest;
                toAmino(_: _141.QueryAssetListRequest): _141.QueryAssetListRequestAmino;
                fromAminoMsg(object: _141.QueryAssetListRequestAminoMsg): _141.QueryAssetListRequest;
                fromProtoMsg(message: _141.QueryAssetListRequestProtoMsg): _141.QueryAssetListRequest;
                toProto(message: _141.QueryAssetListRequest): Uint8Array;
                toProtoMsg(message: _141.QueryAssetListRequest): _141.QueryAssetListRequestProtoMsg;
            };
            QueryAssetListResponse: {
                typeUrl: string;
                encode(message: _141.QueryAssetListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAssetListResponse;
                fromJSON(object: any): _141.QueryAssetListResponse;
                toJSON(message: _141.QueryAssetListResponse): unknown;
                fromPartial(object: Partial<_141.QueryAssetListResponse>): _141.QueryAssetListResponse;
                fromAmino(object: _141.QueryAssetListResponseAmino): _141.QueryAssetListResponse;
                toAmino(message: _141.QueryAssetListResponse): _141.QueryAssetListResponseAmino;
                fromAminoMsg(object: _141.QueryAssetListResponseAminoMsg): _141.QueryAssetListResponse;
                fromProtoMsg(message: _141.QueryAssetListResponseProtoMsg): _141.QueryAssetListResponse;
                toProto(message: _141.QueryAssetListResponse): Uint8Array;
                toProtoMsg(message: _141.QueryAssetListResponse): _141.QueryAssetListResponseProtoMsg;
            };
            QueryAssetMetadataRequest: {
                typeUrl: string;
                encode(message: _141.QueryAssetMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAssetMetadataRequest;
                fromJSON(object: any): _141.QueryAssetMetadataRequest;
                toJSON(message: _141.QueryAssetMetadataRequest): unknown;
                fromPartial(object: Partial<_141.QueryAssetMetadataRequest>): _141.QueryAssetMetadataRequest;
                fromAmino(object: _141.QueryAssetMetadataRequestAmino): _141.QueryAssetMetadataRequest;
                toAmino(message: _141.QueryAssetMetadataRequest): _141.QueryAssetMetadataRequestAmino;
                fromAminoMsg(object: _141.QueryAssetMetadataRequestAminoMsg): _141.QueryAssetMetadataRequest;
                fromProtoMsg(message: _141.QueryAssetMetadataRequestProtoMsg): _141.QueryAssetMetadataRequest;
                toProto(message: _141.QueryAssetMetadataRequest): Uint8Array;
                toProtoMsg(message: _141.QueryAssetMetadataRequest): _141.QueryAssetMetadataRequestProtoMsg;
            };
            QueryAssetMetadataResponse: {
                typeUrl: string;
                encode(message: _141.QueryAssetMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAssetMetadataResponse;
                fromJSON(object: any): _141.QueryAssetMetadataResponse;
                toJSON(message: _141.QueryAssetMetadataResponse): unknown;
                fromPartial(object: Partial<_141.QueryAssetMetadataResponse>): _141.QueryAssetMetadataResponse;
                fromAmino(object: _141.QueryAssetMetadataResponseAmino): _141.QueryAssetMetadataResponse;
                toAmino(message: _141.QueryAssetMetadataResponse): _141.QueryAssetMetadataResponseAmino;
                fromAminoMsg(object: _141.QueryAssetMetadataResponseAminoMsg): _141.QueryAssetMetadataResponse;
                fromProtoMsg(message: _141.QueryAssetMetadataResponseProtoMsg): _141.QueryAssetMetadataResponse;
                toProto(message: _141.QueryAssetMetadataResponse): Uint8Array;
                toProtoMsg(message: _141.QueryAssetMetadataResponse): _141.QueryAssetMetadataResponseProtoMsg;
            };
            QueryRegisteredPairsRequest: {
                typeUrl: string;
                encode(message: _141.QueryRegisteredPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryRegisteredPairsRequest;
                fromJSON(object: any): _141.QueryRegisteredPairsRequest;
                toJSON(message: _141.QueryRegisteredPairsRequest): unknown;
                fromPartial(object: Partial<_141.QueryRegisteredPairsRequest>): _141.QueryRegisteredPairsRequest;
                fromAmino(object: _141.QueryRegisteredPairsRequestAmino): _141.QueryRegisteredPairsRequest;
                toAmino(message: _141.QueryRegisteredPairsRequest): _141.QueryRegisteredPairsRequestAmino;
                fromAminoMsg(object: _141.QueryRegisteredPairsRequestAminoMsg): _141.QueryRegisteredPairsRequest;
                fromProtoMsg(message: _141.QueryRegisteredPairsRequestProtoMsg): _141.QueryRegisteredPairsRequest;
                toProto(message: _141.QueryRegisteredPairsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryRegisteredPairsRequest): _141.QueryRegisteredPairsRequestProtoMsg;
            };
            QueryRegisteredPairsResponse: {
                typeUrl: string;
                encode(message: _141.QueryRegisteredPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryRegisteredPairsResponse;
                fromJSON(object: any): _141.QueryRegisteredPairsResponse;
                toJSON(message: _141.QueryRegisteredPairsResponse): unknown;
                fromPartial(object: Partial<_141.QueryRegisteredPairsResponse>): _141.QueryRegisteredPairsResponse;
                fromAmino(object: _141.QueryRegisteredPairsResponseAmino): _141.QueryRegisteredPairsResponse;
                toAmino(message: _141.QueryRegisteredPairsResponse): _141.QueryRegisteredPairsResponseAmino;
                fromAminoMsg(object: _141.QueryRegisteredPairsResponseAminoMsg): _141.QueryRegisteredPairsResponse;
                fromProtoMsg(message: _141.QueryRegisteredPairsResponseProtoMsg): _141.QueryRegisteredPairsResponse;
                toProto(message: _141.QueryRegisteredPairsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryRegisteredPairsResponse): _141.QueryRegisteredPairsResponseProtoMsg;
            };
            QueryRegisteredContractRequest: {
                typeUrl: string;
                encode(message: _141.QueryRegisteredContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryRegisteredContractRequest;
                fromJSON(object: any): _141.QueryRegisteredContractRequest;
                toJSON(message: _141.QueryRegisteredContractRequest): unknown;
                fromPartial(object: Partial<_141.QueryRegisteredContractRequest>): _141.QueryRegisteredContractRequest;
                fromAmino(object: _141.QueryRegisteredContractRequestAmino): _141.QueryRegisteredContractRequest;
                toAmino(message: _141.QueryRegisteredContractRequest): _141.QueryRegisteredContractRequestAmino;
                fromAminoMsg(object: _141.QueryRegisteredContractRequestAminoMsg): _141.QueryRegisteredContractRequest;
                fromProtoMsg(message: _141.QueryRegisteredContractRequestProtoMsg): _141.QueryRegisteredContractRequest;
                toProto(message: _141.QueryRegisteredContractRequest): Uint8Array;
                toProtoMsg(message: _141.QueryRegisteredContractRequest): _141.QueryRegisteredContractRequestProtoMsg;
            };
            QueryRegisteredContractResponse: {
                typeUrl: string;
                encode(message: _141.QueryRegisteredContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryRegisteredContractResponse;
                fromJSON(object: any): _141.QueryRegisteredContractResponse;
                toJSON(message: _141.QueryRegisteredContractResponse): unknown;
                fromPartial(object: Partial<_141.QueryRegisteredContractResponse>): _141.QueryRegisteredContractResponse;
                fromAmino(object: _141.QueryRegisteredContractResponseAmino): _141.QueryRegisteredContractResponse;
                toAmino(message: _141.QueryRegisteredContractResponse): _141.QueryRegisteredContractResponseAmino;
                fromAminoMsg(object: _141.QueryRegisteredContractResponseAminoMsg): _141.QueryRegisteredContractResponse;
                fromProtoMsg(message: _141.QueryRegisteredContractResponseProtoMsg): _141.QueryRegisteredContractResponse;
                toProto(message: _141.QueryRegisteredContractResponse): Uint8Array;
                toProtoMsg(message: _141.QueryRegisteredContractResponse): _141.QueryRegisteredContractResponseProtoMsg;
            };
            QueryGetOrdersRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetOrdersRequest;
                fromJSON(object: any): _141.QueryGetOrdersRequest;
                toJSON(message: _141.QueryGetOrdersRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetOrdersRequest>): _141.QueryGetOrdersRequest;
                fromAmino(object: _141.QueryGetOrdersRequestAmino): _141.QueryGetOrdersRequest;
                toAmino(message: _141.QueryGetOrdersRequest): _141.QueryGetOrdersRequestAmino;
                fromAminoMsg(object: _141.QueryGetOrdersRequestAminoMsg): _141.QueryGetOrdersRequest;
                fromProtoMsg(message: _141.QueryGetOrdersRequestProtoMsg): _141.QueryGetOrdersRequest;
                toProto(message: _141.QueryGetOrdersRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetOrdersRequest): _141.QueryGetOrdersRequestProtoMsg;
            };
            QueryGetOrdersResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetOrdersResponse;
                fromJSON(object: any): _141.QueryGetOrdersResponse;
                toJSON(message: _141.QueryGetOrdersResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetOrdersResponse>): _141.QueryGetOrdersResponse;
                fromAmino(object: _141.QueryGetOrdersResponseAmino): _141.QueryGetOrdersResponse;
                toAmino(message: _141.QueryGetOrdersResponse): _141.QueryGetOrdersResponseAmino;
                fromAminoMsg(object: _141.QueryGetOrdersResponseAminoMsg): _141.QueryGetOrdersResponse;
                fromProtoMsg(message: _141.QueryGetOrdersResponseProtoMsg): _141.QueryGetOrdersResponse;
                toProto(message: _141.QueryGetOrdersResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetOrdersResponse): _141.QueryGetOrdersResponseProtoMsg;
            };
            QueryGetOrderByIDRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetOrderByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetOrderByIDRequest;
                fromJSON(object: any): _141.QueryGetOrderByIDRequest;
                toJSON(message: _141.QueryGetOrderByIDRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetOrderByIDRequest>): _141.QueryGetOrderByIDRequest;
                fromAmino(object: _141.QueryGetOrderByIDRequestAmino): _141.QueryGetOrderByIDRequest;
                toAmino(message: _141.QueryGetOrderByIDRequest): _141.QueryGetOrderByIDRequestAmino;
                fromAminoMsg(object: _141.QueryGetOrderByIDRequestAminoMsg): _141.QueryGetOrderByIDRequest;
                fromProtoMsg(message: _141.QueryGetOrderByIDRequestProtoMsg): _141.QueryGetOrderByIDRequest;
                toProto(message: _141.QueryGetOrderByIDRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetOrderByIDRequest): _141.QueryGetOrderByIDRequestProtoMsg;
            };
            QueryGetOrderByIDResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetOrderByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetOrderByIDResponse;
                fromJSON(object: any): _141.QueryGetOrderByIDResponse;
                toJSON(message: _141.QueryGetOrderByIDResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetOrderByIDResponse>): _141.QueryGetOrderByIDResponse;
                fromAmino(object: _141.QueryGetOrderByIDResponseAmino): _141.QueryGetOrderByIDResponse;
                toAmino(message: _141.QueryGetOrderByIDResponse): _141.QueryGetOrderByIDResponseAmino;
                fromAminoMsg(object: _141.QueryGetOrderByIDResponseAminoMsg): _141.QueryGetOrderByIDResponse;
                fromProtoMsg(message: _141.QueryGetOrderByIDResponseProtoMsg): _141.QueryGetOrderByIDResponse;
                toProto(message: _141.QueryGetOrderByIDResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetOrderByIDResponse): _141.QueryGetOrderByIDResponseProtoMsg;
            };
            QueryGetHistoricalPricesRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetHistoricalPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetHistoricalPricesRequest;
                fromJSON(object: any): _141.QueryGetHistoricalPricesRequest;
                toJSON(message: _141.QueryGetHistoricalPricesRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetHistoricalPricesRequest>): _141.QueryGetHistoricalPricesRequest;
                fromAmino(object: _141.QueryGetHistoricalPricesRequestAmino): _141.QueryGetHistoricalPricesRequest;
                toAmino(message: _141.QueryGetHistoricalPricesRequest): _141.QueryGetHistoricalPricesRequestAmino;
                fromAminoMsg(object: _141.QueryGetHistoricalPricesRequestAminoMsg): _141.QueryGetHistoricalPricesRequest;
                fromProtoMsg(message: _141.QueryGetHistoricalPricesRequestProtoMsg): _141.QueryGetHistoricalPricesRequest;
                toProto(message: _141.QueryGetHistoricalPricesRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetHistoricalPricesRequest): _141.QueryGetHistoricalPricesRequestProtoMsg;
            };
            QueryGetHistoricalPricesResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetHistoricalPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetHistoricalPricesResponse;
                fromJSON(object: any): _141.QueryGetHistoricalPricesResponse;
                toJSON(message: _141.QueryGetHistoricalPricesResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetHistoricalPricesResponse>): _141.QueryGetHistoricalPricesResponse;
                fromAmino(object: _141.QueryGetHistoricalPricesResponseAmino): _141.QueryGetHistoricalPricesResponse;
                toAmino(message: _141.QueryGetHistoricalPricesResponse): _141.QueryGetHistoricalPricesResponseAmino;
                fromAminoMsg(object: _141.QueryGetHistoricalPricesResponseAminoMsg): _141.QueryGetHistoricalPricesResponse;
                fromProtoMsg(message: _141.QueryGetHistoricalPricesResponseProtoMsg): _141.QueryGetHistoricalPricesResponse;
                toProto(message: _141.QueryGetHistoricalPricesResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetHistoricalPricesResponse): _141.QueryGetHistoricalPricesResponseProtoMsg;
            };
            QueryGetMarketSummaryRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetMarketSummaryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetMarketSummaryRequest;
                fromJSON(object: any): _141.QueryGetMarketSummaryRequest;
                toJSON(message: _141.QueryGetMarketSummaryRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetMarketSummaryRequest>): _141.QueryGetMarketSummaryRequest;
                fromAmino(object: _141.QueryGetMarketSummaryRequestAmino): _141.QueryGetMarketSummaryRequest;
                toAmino(message: _141.QueryGetMarketSummaryRequest): _141.QueryGetMarketSummaryRequestAmino;
                fromAminoMsg(object: _141.QueryGetMarketSummaryRequestAminoMsg): _141.QueryGetMarketSummaryRequest;
                fromProtoMsg(message: _141.QueryGetMarketSummaryRequestProtoMsg): _141.QueryGetMarketSummaryRequest;
                toProto(message: _141.QueryGetMarketSummaryRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetMarketSummaryRequest): _141.QueryGetMarketSummaryRequestProtoMsg;
            };
            QueryGetMarketSummaryResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetMarketSummaryResponse;
                fromJSON(object: any): _141.QueryGetMarketSummaryResponse;
                toJSON(message: _141.QueryGetMarketSummaryResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetMarketSummaryResponse>): _141.QueryGetMarketSummaryResponse;
                fromAmino(object: _141.QueryGetMarketSummaryResponseAmino): _141.QueryGetMarketSummaryResponse;
                toAmino(message: _141.QueryGetMarketSummaryResponse): _141.QueryGetMarketSummaryResponseAmino;
                fromAminoMsg(object: _141.QueryGetMarketSummaryResponseAminoMsg): _141.QueryGetMarketSummaryResponse;
                fromProtoMsg(message: _141.QueryGetMarketSummaryResponseProtoMsg): _141.QueryGetMarketSummaryResponse;
                toProto(message: _141.QueryGetMarketSummaryResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetMarketSummaryResponse): _141.QueryGetMarketSummaryResponseProtoMsg;
            };
            QueryOrderSimulationRequest: {
                typeUrl: string;
                encode(message: _141.QueryOrderSimulationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryOrderSimulationRequest;
                fromJSON(object: any): _141.QueryOrderSimulationRequest;
                toJSON(message: _141.QueryOrderSimulationRequest): unknown;
                fromPartial(object: Partial<_141.QueryOrderSimulationRequest>): _141.QueryOrderSimulationRequest;
                fromAmino(object: _141.QueryOrderSimulationRequestAmino): _141.QueryOrderSimulationRequest;
                toAmino(message: _141.QueryOrderSimulationRequest): _141.QueryOrderSimulationRequestAmino;
                fromAminoMsg(object: _141.QueryOrderSimulationRequestAminoMsg): _141.QueryOrderSimulationRequest;
                fromProtoMsg(message: _141.QueryOrderSimulationRequestProtoMsg): _141.QueryOrderSimulationRequest;
                toProto(message: _141.QueryOrderSimulationRequest): Uint8Array;
                toProtoMsg(message: _141.QueryOrderSimulationRequest): _141.QueryOrderSimulationRequestProtoMsg;
            };
            QueryOrderSimulationResponse: {
                typeUrl: string;
                encode(message: _141.QueryOrderSimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryOrderSimulationResponse;
                fromJSON(object: any): _141.QueryOrderSimulationResponse;
                toJSON(message: _141.QueryOrderSimulationResponse): unknown;
                fromPartial(object: Partial<_141.QueryOrderSimulationResponse>): _141.QueryOrderSimulationResponse;
                fromAmino(object: _141.QueryOrderSimulationResponseAmino): _141.QueryOrderSimulationResponse;
                toAmino(message: _141.QueryOrderSimulationResponse): _141.QueryOrderSimulationResponseAmino;
                fromAminoMsg(object: _141.QueryOrderSimulationResponseAminoMsg): _141.QueryOrderSimulationResponse;
                fromProtoMsg(message: _141.QueryOrderSimulationResponseProtoMsg): _141.QueryOrderSimulationResponse;
                toProto(message: _141.QueryOrderSimulationResponse): Uint8Array;
                toProtoMsg(message: _141.QueryOrderSimulationResponse): _141.QueryOrderSimulationResponseProtoMsg;
            };
            QueryGetMatchResultRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetMatchResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetMatchResultRequest;
                fromJSON(object: any): _141.QueryGetMatchResultRequest;
                toJSON(message: _141.QueryGetMatchResultRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetMatchResultRequest>): _141.QueryGetMatchResultRequest;
                fromAmino(object: _141.QueryGetMatchResultRequestAmino): _141.QueryGetMatchResultRequest;
                toAmino(message: _141.QueryGetMatchResultRequest): _141.QueryGetMatchResultRequestAmino;
                fromAminoMsg(object: _141.QueryGetMatchResultRequestAminoMsg): _141.QueryGetMatchResultRequest;
                fromProtoMsg(message: _141.QueryGetMatchResultRequestProtoMsg): _141.QueryGetMatchResultRequest;
                toProto(message: _141.QueryGetMatchResultRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetMatchResultRequest): _141.QueryGetMatchResultRequestProtoMsg;
            };
            QueryGetMatchResultResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetMatchResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetMatchResultResponse;
                fromJSON(object: any): _141.QueryGetMatchResultResponse;
                toJSON(message: _141.QueryGetMatchResultResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetMatchResultResponse>): _141.QueryGetMatchResultResponse;
                fromAmino(object: _141.QueryGetMatchResultResponseAmino): _141.QueryGetMatchResultResponse;
                toAmino(message: _141.QueryGetMatchResultResponse): _141.QueryGetMatchResultResponseAmino;
                fromAminoMsg(object: _141.QueryGetMatchResultResponseAminoMsg): _141.QueryGetMatchResultResponse;
                fromProtoMsg(message: _141.QueryGetMatchResultResponseProtoMsg): _141.QueryGetMatchResultResponse;
                toProto(message: _141.QueryGetMatchResultResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetMatchResultResponse): _141.QueryGetMatchResultResponseProtoMsg;
            };
            QueryGetOrderCountRequest: {
                typeUrl: string;
                encode(message: _141.QueryGetOrderCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetOrderCountRequest;
                fromJSON(object: any): _141.QueryGetOrderCountRequest;
                toJSON(message: _141.QueryGetOrderCountRequest): unknown;
                fromPartial(object: Partial<_141.QueryGetOrderCountRequest>): _141.QueryGetOrderCountRequest;
                fromAmino(object: _141.QueryGetOrderCountRequestAmino): _141.QueryGetOrderCountRequest;
                toAmino(message: _141.QueryGetOrderCountRequest): _141.QueryGetOrderCountRequestAmino;
                fromAminoMsg(object: _141.QueryGetOrderCountRequestAminoMsg): _141.QueryGetOrderCountRequest;
                fromProtoMsg(message: _141.QueryGetOrderCountRequestProtoMsg): _141.QueryGetOrderCountRequest;
                toProto(message: _141.QueryGetOrderCountRequest): Uint8Array;
                toProtoMsg(message: _141.QueryGetOrderCountRequest): _141.QueryGetOrderCountRequestProtoMsg;
            };
            QueryGetOrderCountResponse: {
                typeUrl: string;
                encode(message: _141.QueryGetOrderCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryGetOrderCountResponse;
                fromJSON(object: any): _141.QueryGetOrderCountResponse;
                toJSON(message: _141.QueryGetOrderCountResponse): unknown;
                fromPartial(object: Partial<_141.QueryGetOrderCountResponse>): _141.QueryGetOrderCountResponse;
                fromAmino(object: _141.QueryGetOrderCountResponseAmino): _141.QueryGetOrderCountResponse;
                toAmino(message: _141.QueryGetOrderCountResponse): _141.QueryGetOrderCountResponseAmino;
                fromAminoMsg(object: _141.QueryGetOrderCountResponseAminoMsg): _141.QueryGetOrderCountResponse;
                fromProtoMsg(message: _141.QueryGetOrderCountResponseProtoMsg): _141.QueryGetOrderCountResponse;
                toProto(message: _141.QueryGetOrderCountResponse): Uint8Array;
                toProtoMsg(message: _141.QueryGetOrderCountResponse): _141.QueryGetOrderCountResponseProtoMsg;
            };
            Price: {
                typeUrl: string;
                encode(message: _140.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Price;
                fromJSON(object: any): _140.Price;
                toJSON(message: _140.Price): unknown;
                fromPartial(object: Partial<_140.Price>): _140.Price;
                fromAmino(object: _140.PriceAmino): _140.Price;
                toAmino(message: _140.Price): _140.PriceAmino;
                fromAminoMsg(object: _140.PriceAminoMsg): _140.Price;
                fromProtoMsg(message: _140.PriceProtoMsg): _140.Price;
                toProto(message: _140.Price): Uint8Array;
                toProtoMsg(message: _140.Price): _140.PriceProtoMsg;
            };
            PriceCandlestick: {
                typeUrl: string;
                encode(message: _140.PriceCandlestick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.PriceCandlestick;
                fromJSON(object: any): _140.PriceCandlestick;
                toJSON(message: _140.PriceCandlestick): unknown;
                fromPartial(object: Partial<_140.PriceCandlestick>): _140.PriceCandlestick;
                fromAmino(object: _140.PriceCandlestickAmino): _140.PriceCandlestick;
                toAmino(message: _140.PriceCandlestick): _140.PriceCandlestickAmino;
                fromAminoMsg(object: _140.PriceCandlestickAminoMsg): _140.PriceCandlestick;
                fromProtoMsg(message: _140.PriceCandlestickProtoMsg): _140.PriceCandlestick;
                toProto(message: _140.PriceCandlestick): Uint8Array;
                toProtoMsg(message: _140.PriceCandlestick): _140.PriceCandlestickProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _139.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Params;
                fromJSON(object: any): _139.Params;
                toJSON(message: _139.Params): unknown;
                fromPartial(object: Partial<_139.Params>): _139.Params;
                fromAmino(object: _139.ParamsAmino): _139.Params;
                toAmino(message: _139.Params): _139.ParamsAmino;
                fromAminoMsg(object: _139.ParamsAminoMsg): _139.Params;
                fromProtoMsg(message: _139.ParamsProtoMsg): _139.Params;
                toProto(message: _139.Params): Uint8Array;
                toProtoMsg(message: _139.Params): _139.ParamsProtoMsg;
            };
            Pair: {
                typeUrl: string;
                encode(message: _138.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Pair;
                fromJSON(object: any): _138.Pair;
                toJSON(message: _138.Pair): unknown;
                fromPartial(object: Partial<_138.Pair>): _138.Pair;
                fromAmino(object: _138.PairAmino): _138.Pair;
                toAmino(message: _138.Pair): _138.PairAmino;
                fromAminoMsg(object: _138.PairAminoMsg): _138.Pair;
                fromProtoMsg(message: _138.PairProtoMsg): _138.Pair;
                toProto(message: _138.Pair): Uint8Array;
                toProtoMsg(message: _138.Pair): _138.PairProtoMsg;
            };
            BatchContractPair: {
                typeUrl: string;
                encode(message: _138.BatchContractPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.BatchContractPair;
                fromJSON(object: any): _138.BatchContractPair;
                toJSON(message: _138.BatchContractPair): unknown;
                fromPartial(object: Partial<_138.BatchContractPair>): _138.BatchContractPair;
                fromAmino(object: _138.BatchContractPairAmino): _138.BatchContractPair;
                toAmino(message: _138.BatchContractPair): _138.BatchContractPairAmino;
                fromAminoMsg(object: _138.BatchContractPairAminoMsg): _138.BatchContractPair;
                fromProtoMsg(message: _138.BatchContractPairProtoMsg): _138.BatchContractPair;
                toProto(message: _138.BatchContractPair): Uint8Array;
                toProtoMsg(message: _138.BatchContractPair): _138.BatchContractPairProtoMsg;
            };
            Order: {
                typeUrl: string;
                encode(message: _137.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Order;
                fromJSON(object: any): _137.Order;
                toJSON(message: _137.Order): unknown;
                fromPartial(object: Partial<_137.Order>): _137.Order;
                fromAmino(object: _137.OrderAmino): _137.Order;
                toAmino(message: _137.Order): _137.OrderAmino;
                fromAminoMsg(object: _137.OrderAminoMsg): _137.Order;
                fromProtoMsg(message: _137.OrderProtoMsg): _137.Order;
                toProto(message: _137.Order): Uint8Array;
                toProtoMsg(message: _137.Order): _137.OrderProtoMsg;
            };
            Cancellation: {
                typeUrl: string;
                encode(message: _137.Cancellation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Cancellation;
                fromJSON(object: any): _137.Cancellation;
                toJSON(message: _137.Cancellation): unknown;
                fromPartial(object: Partial<_137.Cancellation>): _137.Cancellation;
                fromAmino(object: _137.CancellationAmino): _137.Cancellation;
                toAmino(message: _137.Cancellation): _137.CancellationAmino;
                fromAminoMsg(object: _137.CancellationAminoMsg): _137.Cancellation;
                fromProtoMsg(message: _137.CancellationProtoMsg): _137.Cancellation;
                toProto(message: _137.Cancellation): Uint8Array;
                toProtoMsg(message: _137.Cancellation): _137.CancellationProtoMsg;
            };
            ActiveOrders: {
                typeUrl: string;
                encode(message: _137.ActiveOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ActiveOrders;
                fromJSON(object: any): _137.ActiveOrders;
                toJSON(message: _137.ActiveOrders): unknown;
                fromPartial(object: Partial<_137.ActiveOrders>): _137.ActiveOrders;
                fromAmino(object: _137.ActiveOrdersAmino): _137.ActiveOrders;
                toAmino(message: _137.ActiveOrders): _137.ActiveOrdersAmino;
                fromAminoMsg(object: _137.ActiveOrdersAminoMsg): _137.ActiveOrders;
                fromProtoMsg(message: _137.ActiveOrdersProtoMsg): _137.ActiveOrders;
                toProto(message: _137.ActiveOrders): Uint8Array;
                toProtoMsg(message: _137.ActiveOrders): _137.ActiveOrdersProtoMsg;
            };
            OrderEntry: {
                typeUrl: string;
                encode(message: _136.OrderEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.OrderEntry;
                fromJSON(object: any): _136.OrderEntry;
                toJSON(message: _136.OrderEntry): unknown;
                fromPartial(object: Partial<_136.OrderEntry>): _136.OrderEntry;
                fromAmino(object: _136.OrderEntryAmino): _136.OrderEntry;
                toAmino(message: _136.OrderEntry): _136.OrderEntryAmino;
                fromAminoMsg(object: _136.OrderEntryAminoMsg): _136.OrderEntry;
                fromProtoMsg(message: _136.OrderEntryProtoMsg): _136.OrderEntry;
                toProto(message: _136.OrderEntry): Uint8Array;
                toProtoMsg(message: _136.OrderEntry): _136.OrderEntryProtoMsg;
            };
            Allocation: {
                typeUrl: string;
                encode(message: _136.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Allocation;
                fromJSON(object: any): _136.Allocation;
                toJSON(message: _136.Allocation): unknown;
                fromPartial(object: Partial<_136.Allocation>): _136.Allocation;
                fromAmino(object: _136.AllocationAmino): _136.Allocation;
                toAmino(message: _136.Allocation): _136.AllocationAmino;
                fromAminoMsg(object: _136.AllocationAminoMsg): _136.Allocation;
                fromProtoMsg(message: _136.AllocationProtoMsg): _136.Allocation;
                toProto(message: _136.Allocation): Uint8Array;
                toProtoMsg(message: _136.Allocation): _136.AllocationProtoMsg;
            };
            MatchResult: {
                typeUrl: string;
                encode(message: _135.MatchResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MatchResult;
                fromJSON(object: any): _135.MatchResult;
                toJSON(message: _135.MatchResult): unknown;
                fromPartial(object: Partial<_135.MatchResult>): _135.MatchResult;
                fromAmino(object: _135.MatchResultAmino): _135.MatchResult;
                toAmino(message: _135.MatchResult): _135.MatchResultAmino;
                fromAminoMsg(object: _135.MatchResultAminoMsg): _135.MatchResult;
                fromProtoMsg(message: _135.MatchResultProtoMsg): _135.MatchResult;
                toProto(message: _135.MatchResult): Uint8Array;
                toProtoMsg(message: _135.MatchResult): _135.MatchResultProtoMsg;
            };
            LongBook: {
                typeUrl: string;
                encode(message: _134.LongBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.LongBook;
                fromJSON(object: any): _134.LongBook;
                toJSON(message: _134.LongBook): unknown;
                fromPartial(object: Partial<_134.LongBook>): _134.LongBook;
                fromAmino(object: _134.LongBookAmino): _134.LongBook;
                toAmino(message: _134.LongBook): _134.LongBookAmino;
                fromAminoMsg(object: _134.LongBookAminoMsg): _134.LongBook;
                fromProtoMsg(message: _134.LongBookProtoMsg): _134.LongBook;
                toProto(message: _134.LongBook): Uint8Array;
                toProtoMsg(message: _134.LongBook): _134.LongBookProtoMsg;
            };
            AddAssetMetadataProposal: {
                typeUrl: string;
                encode(message: _133.AddAssetMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.AddAssetMetadataProposal;
                fromJSON(object: any): _133.AddAssetMetadataProposal;
                toJSON(message: _133.AddAssetMetadataProposal): unknown;
                fromPartial(object: Partial<_133.AddAssetMetadataProposal>): _133.AddAssetMetadataProposal;
                fromAmino(object: _133.AddAssetMetadataProposalAmino): _133.AddAssetMetadataProposal;
                toAmino(message: _133.AddAssetMetadataProposal): _133.AddAssetMetadataProposalAmino;
                fromAminoMsg(object: _133.AddAssetMetadataProposalAminoMsg): _133.AddAssetMetadataProposal;
                fromProtoMsg(message: _133.AddAssetMetadataProposalProtoMsg): _133.AddAssetMetadataProposal;
                toProto(message: _133.AddAssetMetadataProposal): Uint8Array;
                toProtoMsg(message: _133.AddAssetMetadataProposal): _133.AddAssetMetadataProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _132.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.GenesisState;
                fromJSON(object: any): _132.GenesisState;
                toJSON(message: _132.GenesisState): unknown;
                fromPartial(object: Partial<_132.GenesisState>): _132.GenesisState;
                fromAmino(object: _132.GenesisStateAmino): _132.GenesisState;
                toAmino(message: _132.GenesisState): _132.GenesisStateAmino;
                fromAminoMsg(object: _132.GenesisStateAminoMsg): _132.GenesisState;
                fromProtoMsg(message: _132.GenesisStateProtoMsg): _132.GenesisState;
                toProto(message: _132.GenesisState): Uint8Array;
                toProtoMsg(message: _132.GenesisState): _132.GenesisStateProtoMsg;
            };
            ContractState: {
                typeUrl: string;
                encode(message: _132.ContractState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ContractState;
                fromJSON(object: any): _132.ContractState;
                toJSON(message: _132.ContractState): unknown;
                fromPartial(object: Partial<_132.ContractState>): _132.ContractState;
                fromAmino(object: _132.ContractStateAmino): _132.ContractState;
                toAmino(message: _132.ContractState): _132.ContractStateAmino;
                fromAminoMsg(object: _132.ContractStateAminoMsg): _132.ContractState;
                fromProtoMsg(message: _132.ContractStateProtoMsg): _132.ContractState;
                toProto(message: _132.ContractState): Uint8Array;
                toProtoMsg(message: _132.ContractState): _132.ContractStateProtoMsg;
            };
            ContractPairPrices: {
                typeUrl: string;
                encode(message: _132.ContractPairPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ContractPairPrices;
                fromJSON(object: any): _132.ContractPairPrices;
                toJSON(message: _132.ContractPairPrices): unknown;
                fromPartial(object: Partial<_132.ContractPairPrices>): _132.ContractPairPrices;
                fromAmino(object: _132.ContractPairPricesAmino): _132.ContractPairPrices;
                toAmino(message: _132.ContractPairPrices): _132.ContractPairPricesAmino;
                fromAminoMsg(object: _132.ContractPairPricesAminoMsg): _132.ContractPairPrices;
                fromProtoMsg(message: _132.ContractPairPricesProtoMsg): _132.ContractPairPrices;
                toProto(message: _132.ContractPairPrices): Uint8Array;
                toProtoMsg(message: _132.ContractPairPrices): _132.ContractPairPricesProtoMsg;
            };
            positionDirectionFromJSON(object: any): _131.PositionDirection;
            positionDirectionToJSON(object: _131.PositionDirection): string;
            positionEffectFromJSON(object: any): _131.PositionEffect;
            positionEffectToJSON(object: _131.PositionEffect): string;
            orderTypeFromJSON(object: any): _131.OrderType;
            orderTypeToJSON(object: _131.OrderType): string;
            unitFromJSON(object: any): _131.Unit;
            unitToJSON(object: _131.Unit): string;
            orderStatusFromJSON(object: any): _131.OrderStatus;
            orderStatusToJSON(object: _131.OrderStatus): string;
            cancellationInitiatorFromJSON(object: any): _131.CancellationInitiator;
            cancellationInitiatorToJSON(object: _131.CancellationInitiator): string;
            PositionDirection: typeof _131.PositionDirection;
            PositionDirectionSDKType: typeof _131.PositionDirection;
            PositionDirectionAmino: typeof _131.PositionDirection;
            PositionEffect: typeof _131.PositionEffect;
            PositionEffectSDKType: typeof _131.PositionEffect;
            PositionEffectAmino: typeof _131.PositionEffect;
            OrderType: typeof _131.OrderType;
            OrderTypeSDKType: typeof _131.OrderType;
            OrderTypeAmino: typeof _131.OrderType;
            Unit: typeof _131.Unit;
            UnitSDKType: typeof _131.Unit;
            UnitAmino: typeof _131.Unit;
            OrderStatus: typeof _131.OrderStatus;
            OrderStatusSDKType: typeof _131.OrderStatus;
            OrderStatusAmino: typeof _131.OrderStatus;
            CancellationInitiator: typeof _131.CancellationInitiator;
            CancellationInitiatorSDKType: typeof _131.CancellationInitiator;
            CancellationInitiatorAmino: typeof _131.CancellationInitiator;
            DepositInfoEntry: {
                typeUrl: string;
                encode(message: _130.DepositInfoEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.DepositInfoEntry;
                fromJSON(object: any): _130.DepositInfoEntry;
                toJSON(message: _130.DepositInfoEntry): unknown;
                fromPartial(object: Partial<_130.DepositInfoEntry>): _130.DepositInfoEntry;
                fromAmino(object: _130.DepositInfoEntryAmino): _130.DepositInfoEntry;
                toAmino(message: _130.DepositInfoEntry): _130.DepositInfoEntryAmino;
                fromAminoMsg(object: _130.DepositInfoEntryAminoMsg): _130.DepositInfoEntry;
                fromProtoMsg(message: _130.DepositInfoEntryProtoMsg): _130.DepositInfoEntry;
                toProto(message: _130.DepositInfoEntry): Uint8Array;
                toProtoMsg(message: _130.DepositInfoEntry): _130.DepositInfoEntryProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _129.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ContractInfo;
                fromJSON(object: any): _129.ContractInfo;
                toJSON(message: _129.ContractInfo): unknown;
                fromPartial(object: Partial<_129.ContractInfo>): _129.ContractInfo;
                fromAmino(object: _129.ContractInfoAmino): _129.ContractInfo;
                toAmino(message: _129.ContractInfo): _129.ContractInfoAmino;
                fromAminoMsg(object: _129.ContractInfoAminoMsg): _129.ContractInfo;
                fromProtoMsg(message: _129.ContractInfoProtoMsg): _129.ContractInfo;
                toProto(message: _129.ContractInfo): Uint8Array;
                toProtoMsg(message: _129.ContractInfo): _129.ContractInfoProtoMsg;
            };
            ContractInfoV2: {
                typeUrl: string;
                encode(message: _129.ContractInfoV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ContractInfoV2;
                fromJSON(object: any): _129.ContractInfoV2;
                toJSON(message: _129.ContractInfoV2): unknown;
                fromPartial(object: Partial<_129.ContractInfoV2>): _129.ContractInfoV2;
                fromAmino(object: _129.ContractInfoV2Amino): _129.ContractInfoV2;
                toAmino(message: _129.ContractInfoV2): _129.ContractInfoV2Amino;
                fromAminoMsg(object: _129.ContractInfoV2AminoMsg): _129.ContractInfoV2;
                fromProtoMsg(message: _129.ContractInfoV2ProtoMsg): _129.ContractInfoV2;
                toProto(message: _129.ContractInfoV2): Uint8Array;
                toProtoMsg(message: _129.ContractInfoV2): _129.ContractInfoV2ProtoMsg;
            };
            ContractDependencyInfo: {
                typeUrl: string;
                encode(message: _129.ContractDependencyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ContractDependencyInfo;
                fromJSON(object: any): _129.ContractDependencyInfo;
                toJSON(message: _129.ContractDependencyInfo): unknown;
                fromPartial(object: Partial<_129.ContractDependencyInfo>): _129.ContractDependencyInfo;
                fromAmino(object: _129.ContractDependencyInfoAmino): _129.ContractDependencyInfo;
                toAmino(message: _129.ContractDependencyInfo): _129.ContractDependencyInfoAmino;
                fromAminoMsg(object: _129.ContractDependencyInfoAminoMsg): _129.ContractDependencyInfo;
                fromProtoMsg(message: _129.ContractDependencyInfoProtoMsg): _129.ContractDependencyInfo;
                toProto(message: _129.ContractDependencyInfo): Uint8Array;
                toProtoMsg(message: _129.ContractDependencyInfo): _129.ContractDependencyInfoProtoMsg;
            };
            LegacyContractInfo: {
                typeUrl: string;
                encode(message: _129.LegacyContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.LegacyContractInfo;
                fromJSON(object: any): _129.LegacyContractInfo;
                toJSON(message: _129.LegacyContractInfo): unknown;
                fromPartial(object: Partial<_129.LegacyContractInfo>): _129.LegacyContractInfo;
                fromAmino(object: _129.LegacyContractInfoAmino): _129.LegacyContractInfo;
                toAmino(message: _129.LegacyContractInfo): _129.LegacyContractInfoAmino;
                fromAminoMsg(object: _129.LegacyContractInfoAminoMsg): _129.LegacyContractInfo;
                fromProtoMsg(message: _129.LegacyContractInfoProtoMsg): _129.LegacyContractInfo;
                toProto(message: _129.LegacyContractInfo): Uint8Array;
                toProtoMsg(message: _129.LegacyContractInfo): _129.LegacyContractInfoProtoMsg;
            };
            AssetIBCInfo: {
                typeUrl: string;
                encode(message: _128.AssetIBCInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.AssetIBCInfo;
                fromJSON(object: any): _128.AssetIBCInfo;
                toJSON(message: _128.AssetIBCInfo): unknown;
                fromPartial(object: Partial<_128.AssetIBCInfo>): _128.AssetIBCInfo;
                fromAmino(object: _128.AssetIBCInfoAmino): _128.AssetIBCInfo;
                toAmino(message: _128.AssetIBCInfo): _128.AssetIBCInfoAmino;
                fromAminoMsg(object: _128.AssetIBCInfoAminoMsg): _128.AssetIBCInfo;
                fromProtoMsg(message: _128.AssetIBCInfoProtoMsg): _128.AssetIBCInfo;
                toProto(message: _128.AssetIBCInfo): Uint8Array;
                toProtoMsg(message: _128.AssetIBCInfo): _128.AssetIBCInfoProtoMsg;
            };
            AssetMetadata: {
                typeUrl: string;
                encode(message: _128.AssetMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.AssetMetadata;
                fromJSON(object: any): _128.AssetMetadata;
                toJSON(message: _128.AssetMetadata): unknown;
                fromPartial(object: Partial<_128.AssetMetadata>): _128.AssetMetadata;
                fromAmino(object: _128.AssetMetadataAmino): _128.AssetMetadata;
                toAmino(message: _128.AssetMetadata): _128.AssetMetadataAmino;
                fromAminoMsg(object: _128.AssetMetadataAminoMsg): _128.AssetMetadata;
                fromProtoMsg(message: _128.AssetMetadataProtoMsg): _128.AssetMetadata;
                toProto(message: _128.AssetMetadata): Uint8Array;
                toProtoMsg(message: _128.AssetMetadata): _128.AssetMetadataProtoMsg;
            };
        };
        const epoch: {
            QueryClientImpl: typeof _340.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epoch(request?: _155.QueryEpochRequest): Promise<_155.QueryEpochResponse>;
                params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _330.LCDQueryClient;
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
            QueryEpochRequest: {
                typeUrl: string;
                encode(_: _155.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryEpochRequest;
                fromJSON(_: any): _155.QueryEpochRequest;
                toJSON(_: _155.QueryEpochRequest): unknown;
                fromPartial(_: Partial<_155.QueryEpochRequest>): _155.QueryEpochRequest;
                fromAmino(_: _155.QueryEpochRequestAmino): _155.QueryEpochRequest;
                toAmino(_: _155.QueryEpochRequest): _155.QueryEpochRequestAmino;
                fromAminoMsg(object: _155.QueryEpochRequestAminoMsg): _155.QueryEpochRequest;
                fromProtoMsg(message: _155.QueryEpochRequestProtoMsg): _155.QueryEpochRequest;
                toProto(message: _155.QueryEpochRequest): Uint8Array;
                toProtoMsg(message: _155.QueryEpochRequest): _155.QueryEpochRequestProtoMsg;
            };
            QueryEpochResponse: {
                typeUrl: string;
                encode(message: _155.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryEpochResponse;
                fromJSON(object: any): _155.QueryEpochResponse;
                toJSON(message: _155.QueryEpochResponse): unknown;
                fromPartial(object: Partial<_155.QueryEpochResponse>): _155.QueryEpochResponse;
                fromAmino(object: _155.QueryEpochResponseAmino): _155.QueryEpochResponse;
                toAmino(message: _155.QueryEpochResponse): _155.QueryEpochResponseAmino;
                fromAminoMsg(object: _155.QueryEpochResponseAminoMsg): _155.QueryEpochResponse;
                fromProtoMsg(message: _155.QueryEpochResponseProtoMsg): _155.QueryEpochResponse;
                toProto(message: _155.QueryEpochResponse): Uint8Array;
                toProtoMsg(message: _155.QueryEpochResponse): _155.QueryEpochResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _154.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Params;
                fromJSON(_: any): _154.Params;
                toJSON(_: _154.Params): unknown;
                fromPartial(_: Partial<_154.Params>): _154.Params;
                fromAmino(_: _154.ParamsAmino): _154.Params;
                toAmino(_: _154.Params): _154.ParamsAmino;
                fromAminoMsg(object: _154.ParamsAminoMsg): _154.Params;
                fromProtoMsg(message: _154.ParamsProtoMsg): _154.Params;
                toProto(message: _154.Params): Uint8Array;
                toProtoMsg(message: _154.Params): _154.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _153.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GenesisState;
                fromJSON(object: any): _153.GenesisState;
                toJSON(message: _153.GenesisState): unknown;
                fromPartial(object: Partial<_153.GenesisState>): _153.GenesisState;
                fromAmino(object: _153.GenesisStateAmino): _153.GenesisState;
                toAmino(message: _153.GenesisState): _153.GenesisStateAmino;
                fromAminoMsg(object: _153.GenesisStateAminoMsg): _153.GenesisState;
                fromProtoMsg(message: _153.GenesisStateProtoMsg): _153.GenesisState;
                toProto(message: _153.GenesisState): Uint8Array;
                toProtoMsg(message: _153.GenesisState): _153.GenesisStateProtoMsg;
            };
            Epoch: {
                typeUrl: string;
                encode(message: _152.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Epoch;
                fromJSON(object: any): _152.Epoch;
                toJSON(message: _152.Epoch): unknown;
                fromPartial(object: Partial<_152.Epoch>): _152.Epoch;
                fromAmino(object: _152.EpochAmino): _152.Epoch;
                toAmino(message: _152.Epoch): _152.EpochAmino;
                fromAminoMsg(object: _152.EpochAminoMsg): _152.Epoch;
                fromProtoMsg(message: _152.EpochProtoMsg): _152.Epoch;
                toProto(message: _152.Epoch): Uint8Array;
                toProtoMsg(message: _152.Epoch): _152.EpochProtoMsg;
            };
        };
        const mint: {
            QueryClientImpl: typeof _341.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponse>;
                minter(request?: _164.QueryMinterRequest): Promise<_164.QueryMinterResponse>;
            };
            LCDQueryClient: typeof _331.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _164.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsRequest;
                fromJSON(_: any): _164.QueryParamsRequest;
                toJSON(_: _164.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_164.QueryParamsRequest>): _164.QueryParamsRequest;
                fromAmino(_: _164.QueryParamsRequestAmino): _164.QueryParamsRequest;
                toAmino(_: _164.QueryParamsRequest): _164.QueryParamsRequestAmino;
                fromAminoMsg(object: _164.QueryParamsRequestAminoMsg): _164.QueryParamsRequest;
                fromProtoMsg(message: _164.QueryParamsRequestProtoMsg): _164.QueryParamsRequest;
                toProto(message: _164.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryParamsRequest): _164.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _164.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsResponse;
                fromJSON(object: any): _164.QueryParamsResponse;
                toJSON(message: _164.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_164.QueryParamsResponse>): _164.QueryParamsResponse;
                fromAmino(object: _164.QueryParamsResponseAmino): _164.QueryParamsResponse;
                toAmino(message: _164.QueryParamsResponse): _164.QueryParamsResponseAmino;
                fromAminoMsg(object: _164.QueryParamsResponseAminoMsg): _164.QueryParamsResponse;
                fromProtoMsg(message: _164.QueryParamsResponseProtoMsg): _164.QueryParamsResponse;
                toProto(message: _164.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryParamsResponse): _164.QueryParamsResponseProtoMsg;
            };
            QueryMinterRequest: {
                typeUrl: string;
                encode(_: _164.QueryMinterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryMinterRequest;
                fromJSON(_: any): _164.QueryMinterRequest;
                toJSON(_: _164.QueryMinterRequest): unknown;
                fromPartial(_: Partial<_164.QueryMinterRequest>): _164.QueryMinterRequest;
                fromAmino(_: _164.QueryMinterRequestAmino): _164.QueryMinterRequest;
                toAmino(_: _164.QueryMinterRequest): _164.QueryMinterRequestAmino;
                fromAminoMsg(object: _164.QueryMinterRequestAminoMsg): _164.QueryMinterRequest;
                fromProtoMsg(message: _164.QueryMinterRequestProtoMsg): _164.QueryMinterRequest;
                toProto(message: _164.QueryMinterRequest): Uint8Array;
                toProtoMsg(message: _164.QueryMinterRequest): _164.QueryMinterRequestProtoMsg;
            };
            QueryMinterResponse: {
                typeUrl: string;
                encode(message: _164.QueryMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryMinterResponse;
                fromJSON(object: any): _164.QueryMinterResponse;
                toJSON(message: _164.QueryMinterResponse): unknown;
                fromPartial(object: Partial<_164.QueryMinterResponse>): _164.QueryMinterResponse;
                fromAmino(object: _164.QueryMinterResponseAmino): _164.QueryMinterResponse;
                toAmino(message: _164.QueryMinterResponse): _164.QueryMinterResponseAmino;
                fromAminoMsg(object: _164.QueryMinterResponseAminoMsg): _164.QueryMinterResponse;
                fromProtoMsg(message: _164.QueryMinterResponseProtoMsg): _164.QueryMinterResponse;
                toProto(message: _164.QueryMinterResponse): Uint8Array;
                toProtoMsg(message: _164.QueryMinterResponse): _164.QueryMinterResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _163.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Minter;
                fromJSON(object: any): _163.Minter;
                toJSON(message: _163.Minter): unknown;
                fromPartial(object: Partial<_163.Minter>): _163.Minter;
                fromAmino(object: _163.MinterAmino): _163.Minter;
                toAmino(message: _163.Minter): _163.MinterAmino;
                fromAminoMsg(object: _163.MinterAminoMsg): _163.Minter;
                fromProtoMsg(message: _163.MinterProtoMsg): _163.Minter;
                toProto(message: _163.Minter): Uint8Array;
                toProtoMsg(message: _163.Minter): _163.MinterProtoMsg;
            };
            ScheduledTokenRelease: {
                typeUrl: string;
                encode(message: _163.ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ScheduledTokenRelease;
                fromJSON(object: any): _163.ScheduledTokenRelease;
                toJSON(message: _163.ScheduledTokenRelease): unknown;
                fromPartial(object: Partial<_163.ScheduledTokenRelease>): _163.ScheduledTokenRelease;
                fromAmino(object: _163.ScheduledTokenReleaseAmino): _163.ScheduledTokenRelease;
                toAmino(message: _163.ScheduledTokenRelease): _163.ScheduledTokenReleaseAmino;
                fromAminoMsg(object: _163.ScheduledTokenReleaseAminoMsg): _163.ScheduledTokenRelease;
                fromProtoMsg(message: _163.ScheduledTokenReleaseProtoMsg): _163.ScheduledTokenRelease;
                toProto(message: _163.ScheduledTokenRelease): Uint8Array;
                toProtoMsg(message: _163.ScheduledTokenRelease): _163.ScheduledTokenReleaseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _163.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Params;
                fromJSON(object: any): _163.Params;
                toJSON(message: _163.Params): unknown;
                fromPartial(object: Partial<_163.Params>): _163.Params;
                fromAmino(object: _163.ParamsAmino): _163.Params;
                toAmino(message: _163.Params): _163.ParamsAmino;
                fromAminoMsg(object: _163.ParamsAminoMsg): _163.Params;
                fromProtoMsg(message: _163.ParamsProtoMsg): _163.Params;
                toProto(message: _163.Params): Uint8Array;
                toProtoMsg(message: _163.Params): _163.ParamsProtoMsg;
            };
            Version2Minter: {
                typeUrl: string;
                encode(message: _163.Version2Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Version2Minter;
                fromJSON(object: any): _163.Version2Minter;
                toJSON(message: _163.Version2Minter): unknown;
                fromPartial(object: Partial<_163.Version2Minter>): _163.Version2Minter;
                fromAmino(object: _163.Version2MinterAmino): _163.Version2Minter;
                toAmino(message: _163.Version2Minter): _163.Version2MinterAmino;
                fromAminoMsg(object: _163.Version2MinterAminoMsg): _163.Version2Minter;
                fromProtoMsg(message: _163.Version2MinterProtoMsg): _163.Version2Minter;
                toProto(message: _163.Version2Minter): Uint8Array;
                toProtoMsg(message: _163.Version2Minter): _163.Version2MinterProtoMsg;
            };
            Version2ScheduledTokenRelease: {
                typeUrl: string;
                encode(message: _163.Version2ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Version2ScheduledTokenRelease;
                fromJSON(object: any): _163.Version2ScheduledTokenRelease;
                toJSON(message: _163.Version2ScheduledTokenRelease): unknown;
                fromPartial(object: Partial<_163.Version2ScheduledTokenRelease>): _163.Version2ScheduledTokenRelease;
                fromAmino(object: _163.Version2ScheduledTokenReleaseAmino): _163.Version2ScheduledTokenRelease;
                toAmino(message: _163.Version2ScheduledTokenRelease): _163.Version2ScheduledTokenReleaseAmino;
                fromAminoMsg(object: _163.Version2ScheduledTokenReleaseAminoMsg): _163.Version2ScheduledTokenRelease;
                fromProtoMsg(message: _163.Version2ScheduledTokenReleaseProtoMsg): _163.Version2ScheduledTokenRelease;
                toProto(message: _163.Version2ScheduledTokenRelease): Uint8Array;
                toProtoMsg(message: _163.Version2ScheduledTokenRelease): _163.Version2ScheduledTokenReleaseProtoMsg;
            };
            Version2Params: {
                typeUrl: string;
                encode(message: _163.Version2Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Version2Params;
                fromJSON(object: any): _163.Version2Params;
                toJSON(message: _163.Version2Params): unknown;
                fromPartial(object: Partial<_163.Version2Params>): _163.Version2Params;
                fromAmino(object: _163.Version2ParamsAmino): _163.Version2Params;
                toAmino(message: _163.Version2Params): _163.Version2ParamsAmino;
                fromAminoMsg(object: _163.Version2ParamsAminoMsg): _163.Version2Params;
                fromProtoMsg(message: _163.Version2ParamsProtoMsg): _163.Version2Params;
                toProto(message: _163.Version2Params): Uint8Array;
                toProtoMsg(message: _163.Version2Params): _163.Version2ParamsProtoMsg;
            };
            UpdateMinterProposal: {
                typeUrl: string;
                encode(message: _162.UpdateMinterProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.UpdateMinterProposal;
                fromJSON(object: any): _162.UpdateMinterProposal;
                toJSON(message: _162.UpdateMinterProposal): unknown;
                fromPartial(object: Partial<_162.UpdateMinterProposal>): _162.UpdateMinterProposal;
                fromAmino(object: _162.UpdateMinterProposalAmino): _162.UpdateMinterProposal;
                toAmino(message: _162.UpdateMinterProposal): _162.UpdateMinterProposalAmino;
                fromAminoMsg(object: _162.UpdateMinterProposalAminoMsg): _162.UpdateMinterProposal;
                fromProtoMsg(message: _162.UpdateMinterProposalProtoMsg): _162.UpdateMinterProposal;
                toProto(message: _162.UpdateMinterProposal): Uint8Array;
                toProtoMsg(message: _162.UpdateMinterProposal): _162.UpdateMinterProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _161.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GenesisState;
                fromJSON(object: any): _161.GenesisState;
                toJSON(message: _161.GenesisState): unknown;
                fromPartial(object: Partial<_161.GenesisState>): _161.GenesisState;
                fromAmino(object: _161.GenesisStateAmino): _161.GenesisState;
                toAmino(message: _161.GenesisState): _161.GenesisStateAmino;
                fromAminoMsg(object: _161.GenesisStateAminoMsg): _161.GenesisState;
                fromProtoMsg(message: _161.GenesisStateProtoMsg): _161.GenesisState;
                toProto(message: _161.GenesisState): Uint8Array;
                toProtoMsg(message: _161.GenesisState): _161.GenesisStateProtoMsg;
            };
        };
        const oracle: {
            MsgClientImpl: typeof _348.MsgClientImpl;
            QueryClientImpl: typeof _342.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                exchangeRate(request: _171.QueryExchangeRateRequest): Promise<_171.QueryExchangeRateResponse>;
                exchangeRates(request?: _171.QueryExchangeRatesRequest): Promise<_171.QueryExchangeRatesResponse>;
                actives(request?: _171.QueryActivesRequest): Promise<_171.QueryActivesResponse>;
                voteTargets(request?: _171.QueryVoteTargetsRequest): Promise<_171.QueryVoteTargetsResponse>;
                priceSnapshotHistory(request?: _171.QueryPriceSnapshotHistoryRequest): Promise<_171.QueryPriceSnapshotHistoryResponse>;
                twaps(request: _171.QueryTwapsRequest): Promise<_171.QueryTwapsResponse>;
                feederDelegation(request: _171.QueryFeederDelegationRequest): Promise<_171.QueryFeederDelegationResponse>;
                votePenaltyCounter(request: _171.QueryVotePenaltyCounterRequest): Promise<_171.QueryVotePenaltyCounterResponse>;
                slashWindow(request?: _171.QuerySlashWindowRequest): Promise<_171.QuerySlashWindowResponse>;
                params(request?: _171.QueryParamsRequest): Promise<_171.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _332.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _172.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _172.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _172.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _172.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _172.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _172.MsgDelegateFeedConsent;
                    };
                };
                toJSON: {
                    aggregateExchangeRateVote(value: _172.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateFeedConsent(value: _172.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    aggregateExchangeRateVote(value: any): {
                        typeUrl: string;
                        value: _172.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: any): {
                        typeUrl: string;
                        value: _172.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _172.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _172.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _172.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _172.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: (message: _172.MsgAggregateExchangeRateVote) => _172.MsgAggregateExchangeRateVoteAmino;
                    fromAmino: (object: _172.MsgAggregateExchangeRateVoteAmino) => _172.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: (message: _172.MsgDelegateFeedConsent) => _172.MsgDelegateFeedConsentAmino;
                    fromAmino: (object: _172.MsgDelegateFeedConsentAmino) => _172.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _172.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgAggregateExchangeRateVote;
                fromJSON(object: any): _172.MsgAggregateExchangeRateVote;
                toJSON(message: _172.MsgAggregateExchangeRateVote): unknown;
                fromPartial(object: Partial<_172.MsgAggregateExchangeRateVote>): _172.MsgAggregateExchangeRateVote;
                fromAmino(object: _172.MsgAggregateExchangeRateVoteAmino): _172.MsgAggregateExchangeRateVote;
                toAmino(message: _172.MsgAggregateExchangeRateVote): _172.MsgAggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _172.MsgAggregateExchangeRateVoteAminoMsg): _172.MsgAggregateExchangeRateVote;
                fromProtoMsg(message: _172.MsgAggregateExchangeRateVoteProtoMsg): _172.MsgAggregateExchangeRateVote;
                toProto(message: _172.MsgAggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _172.MsgAggregateExchangeRateVote): _172.MsgAggregateExchangeRateVoteProtoMsg;
            };
            MsgAggregateExchangeRateVoteResponse: {
                typeUrl: string;
                encode(_: _172.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgAggregateExchangeRateVoteResponse;
                fromJSON(_: any): _172.MsgAggregateExchangeRateVoteResponse;
                toJSON(_: _172.MsgAggregateExchangeRateVoteResponse): unknown;
                fromPartial(_: Partial<_172.MsgAggregateExchangeRateVoteResponse>): _172.MsgAggregateExchangeRateVoteResponse;
                fromAmino(_: _172.MsgAggregateExchangeRateVoteResponseAmino): _172.MsgAggregateExchangeRateVoteResponse;
                toAmino(_: _172.MsgAggregateExchangeRateVoteResponse): _172.MsgAggregateExchangeRateVoteResponseAmino;
                fromAminoMsg(object: _172.MsgAggregateExchangeRateVoteResponseAminoMsg): _172.MsgAggregateExchangeRateVoteResponse;
                fromProtoMsg(message: _172.MsgAggregateExchangeRateVoteResponseProtoMsg): _172.MsgAggregateExchangeRateVoteResponse;
                toProto(message: _172.MsgAggregateExchangeRateVoteResponse): Uint8Array;
                toProtoMsg(message: _172.MsgAggregateExchangeRateVoteResponse): _172.MsgAggregateExchangeRateVoteResponseProtoMsg;
            };
            MsgDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _172.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgDelegateFeedConsent;
                fromJSON(object: any): _172.MsgDelegateFeedConsent;
                toJSON(message: _172.MsgDelegateFeedConsent): unknown;
                fromPartial(object: Partial<_172.MsgDelegateFeedConsent>): _172.MsgDelegateFeedConsent;
                fromAmino(object: _172.MsgDelegateFeedConsentAmino): _172.MsgDelegateFeedConsent;
                toAmino(message: _172.MsgDelegateFeedConsent): _172.MsgDelegateFeedConsentAmino;
                fromAminoMsg(object: _172.MsgDelegateFeedConsentAminoMsg): _172.MsgDelegateFeedConsent;
                fromProtoMsg(message: _172.MsgDelegateFeedConsentProtoMsg): _172.MsgDelegateFeedConsent;
                toProto(message: _172.MsgDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _172.MsgDelegateFeedConsent): _172.MsgDelegateFeedConsentProtoMsg;
            };
            MsgDelegateFeedConsentResponse: {
                typeUrl: string;
                encode(_: _172.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgDelegateFeedConsentResponse;
                fromJSON(_: any): _172.MsgDelegateFeedConsentResponse;
                toJSON(_: _172.MsgDelegateFeedConsentResponse): unknown;
                fromPartial(_: Partial<_172.MsgDelegateFeedConsentResponse>): _172.MsgDelegateFeedConsentResponse;
                fromAmino(_: _172.MsgDelegateFeedConsentResponseAmino): _172.MsgDelegateFeedConsentResponse;
                toAmino(_: _172.MsgDelegateFeedConsentResponse): _172.MsgDelegateFeedConsentResponseAmino;
                fromAminoMsg(object: _172.MsgDelegateFeedConsentResponseAminoMsg): _172.MsgDelegateFeedConsentResponse;
                fromProtoMsg(message: _172.MsgDelegateFeedConsentResponseProtoMsg): _172.MsgDelegateFeedConsentResponse;
                toProto(message: _172.MsgDelegateFeedConsentResponse): Uint8Array;
                toProtoMsg(message: _172.MsgDelegateFeedConsentResponse): _172.MsgDelegateFeedConsentResponseProtoMsg;
            };
            QueryExchangeRateRequest: {
                typeUrl: string;
                encode(message: _171.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryExchangeRateRequest;
                fromJSON(object: any): _171.QueryExchangeRateRequest;
                toJSON(message: _171.QueryExchangeRateRequest): unknown;
                fromPartial(object: Partial<_171.QueryExchangeRateRequest>): _171.QueryExchangeRateRequest;
                fromAmino(object: _171.QueryExchangeRateRequestAmino): _171.QueryExchangeRateRequest;
                toAmino(message: _171.QueryExchangeRateRequest): _171.QueryExchangeRateRequestAmino;
                fromAminoMsg(object: _171.QueryExchangeRateRequestAminoMsg): _171.QueryExchangeRateRequest;
                fromProtoMsg(message: _171.QueryExchangeRateRequestProtoMsg): _171.QueryExchangeRateRequest;
                toProto(message: _171.QueryExchangeRateRequest): Uint8Array;
                toProtoMsg(message: _171.QueryExchangeRateRequest): _171.QueryExchangeRateRequestProtoMsg;
            };
            QueryExchangeRateResponse: {
                typeUrl: string;
                encode(message: _171.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryExchangeRateResponse;
                fromJSON(object: any): _171.QueryExchangeRateResponse;
                toJSON(message: _171.QueryExchangeRateResponse): unknown;
                fromPartial(object: Partial<_171.QueryExchangeRateResponse>): _171.QueryExchangeRateResponse;
                fromAmino(object: _171.QueryExchangeRateResponseAmino): _171.QueryExchangeRateResponse;
                toAmino(message: _171.QueryExchangeRateResponse): _171.QueryExchangeRateResponseAmino;
                fromAminoMsg(object: _171.QueryExchangeRateResponseAminoMsg): _171.QueryExchangeRateResponse;
                fromProtoMsg(message: _171.QueryExchangeRateResponseProtoMsg): _171.QueryExchangeRateResponse;
                toProto(message: _171.QueryExchangeRateResponse): Uint8Array;
                toProtoMsg(message: _171.QueryExchangeRateResponse): _171.QueryExchangeRateResponseProtoMsg;
            };
            QueryExchangeRatesRequest: {
                typeUrl: string;
                encode(_: _171.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryExchangeRatesRequest;
                fromJSON(_: any): _171.QueryExchangeRatesRequest;
                toJSON(_: _171.QueryExchangeRatesRequest): unknown;
                fromPartial(_: Partial<_171.QueryExchangeRatesRequest>): _171.QueryExchangeRatesRequest;
                fromAmino(_: _171.QueryExchangeRatesRequestAmino): _171.QueryExchangeRatesRequest;
                toAmino(_: _171.QueryExchangeRatesRequest): _171.QueryExchangeRatesRequestAmino;
                fromAminoMsg(object: _171.QueryExchangeRatesRequestAminoMsg): _171.QueryExchangeRatesRequest;
                fromProtoMsg(message: _171.QueryExchangeRatesRequestProtoMsg): _171.QueryExchangeRatesRequest;
                toProto(message: _171.QueryExchangeRatesRequest): Uint8Array;
                toProtoMsg(message: _171.QueryExchangeRatesRequest): _171.QueryExchangeRatesRequestProtoMsg;
            };
            DenomOracleExchangeRatePair: {
                typeUrl: string;
                encode(message: _171.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.DenomOracleExchangeRatePair;
                fromJSON(object: any): _171.DenomOracleExchangeRatePair;
                toJSON(message: _171.DenomOracleExchangeRatePair): unknown;
                fromPartial(object: Partial<_171.DenomOracleExchangeRatePair>): _171.DenomOracleExchangeRatePair;
                fromAmino(object: _171.DenomOracleExchangeRatePairAmino): _171.DenomOracleExchangeRatePair;
                toAmino(message: _171.DenomOracleExchangeRatePair): _171.DenomOracleExchangeRatePairAmino;
                fromAminoMsg(object: _171.DenomOracleExchangeRatePairAminoMsg): _171.DenomOracleExchangeRatePair;
                fromProtoMsg(message: _171.DenomOracleExchangeRatePairProtoMsg): _171.DenomOracleExchangeRatePair;
                toProto(message: _171.DenomOracleExchangeRatePair): Uint8Array;
                toProtoMsg(message: _171.DenomOracleExchangeRatePair): _171.DenomOracleExchangeRatePairProtoMsg;
            };
            QueryExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _171.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryExchangeRatesResponse;
                fromJSON(object: any): _171.QueryExchangeRatesResponse;
                toJSON(message: _171.QueryExchangeRatesResponse): unknown;
                fromPartial(object: Partial<_171.QueryExchangeRatesResponse>): _171.QueryExchangeRatesResponse;
                fromAmino(object: _171.QueryExchangeRatesResponseAmino): _171.QueryExchangeRatesResponse;
                toAmino(message: _171.QueryExchangeRatesResponse): _171.QueryExchangeRatesResponseAmino;
                fromAminoMsg(object: _171.QueryExchangeRatesResponseAminoMsg): _171.QueryExchangeRatesResponse;
                fromProtoMsg(message: _171.QueryExchangeRatesResponseProtoMsg): _171.QueryExchangeRatesResponse;
                toProto(message: _171.QueryExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _171.QueryExchangeRatesResponse): _171.QueryExchangeRatesResponseProtoMsg;
            };
            QueryActivesRequest: {
                typeUrl: string;
                encode(_: _171.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryActivesRequest;
                fromJSON(_: any): _171.QueryActivesRequest;
                toJSON(_: _171.QueryActivesRequest): unknown;
                fromPartial(_: Partial<_171.QueryActivesRequest>): _171.QueryActivesRequest;
                fromAmino(_: _171.QueryActivesRequestAmino): _171.QueryActivesRequest;
                toAmino(_: _171.QueryActivesRequest): _171.QueryActivesRequestAmino;
                fromAminoMsg(object: _171.QueryActivesRequestAminoMsg): _171.QueryActivesRequest;
                fromProtoMsg(message: _171.QueryActivesRequestProtoMsg): _171.QueryActivesRequest;
                toProto(message: _171.QueryActivesRequest): Uint8Array;
                toProtoMsg(message: _171.QueryActivesRequest): _171.QueryActivesRequestProtoMsg;
            };
            QueryActivesResponse: {
                typeUrl: string;
                encode(message: _171.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryActivesResponse;
                fromJSON(object: any): _171.QueryActivesResponse;
                toJSON(message: _171.QueryActivesResponse): unknown;
                fromPartial(object: Partial<_171.QueryActivesResponse>): _171.QueryActivesResponse;
                fromAmino(object: _171.QueryActivesResponseAmino): _171.QueryActivesResponse;
                toAmino(message: _171.QueryActivesResponse): _171.QueryActivesResponseAmino;
                fromAminoMsg(object: _171.QueryActivesResponseAminoMsg): _171.QueryActivesResponse;
                fromProtoMsg(message: _171.QueryActivesResponseProtoMsg): _171.QueryActivesResponse;
                toProto(message: _171.QueryActivesResponse): Uint8Array;
                toProtoMsg(message: _171.QueryActivesResponse): _171.QueryActivesResponseProtoMsg;
            };
            QueryVoteTargetsRequest: {
                typeUrl: string;
                encode(_: _171.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryVoteTargetsRequest;
                fromJSON(_: any): _171.QueryVoteTargetsRequest;
                toJSON(_: _171.QueryVoteTargetsRequest): unknown;
                fromPartial(_: Partial<_171.QueryVoteTargetsRequest>): _171.QueryVoteTargetsRequest;
                fromAmino(_: _171.QueryVoteTargetsRequestAmino): _171.QueryVoteTargetsRequest;
                toAmino(_: _171.QueryVoteTargetsRequest): _171.QueryVoteTargetsRequestAmino;
                fromAminoMsg(object: _171.QueryVoteTargetsRequestAminoMsg): _171.QueryVoteTargetsRequest;
                fromProtoMsg(message: _171.QueryVoteTargetsRequestProtoMsg): _171.QueryVoteTargetsRequest;
                toProto(message: _171.QueryVoteTargetsRequest): Uint8Array;
                toProtoMsg(message: _171.QueryVoteTargetsRequest): _171.QueryVoteTargetsRequestProtoMsg;
            };
            QueryVoteTargetsResponse: {
                typeUrl: string;
                encode(message: _171.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryVoteTargetsResponse;
                fromJSON(object: any): _171.QueryVoteTargetsResponse;
                toJSON(message: _171.QueryVoteTargetsResponse): unknown;
                fromPartial(object: Partial<_171.QueryVoteTargetsResponse>): _171.QueryVoteTargetsResponse;
                fromAmino(object: _171.QueryVoteTargetsResponseAmino): _171.QueryVoteTargetsResponse;
                toAmino(message: _171.QueryVoteTargetsResponse): _171.QueryVoteTargetsResponseAmino;
                fromAminoMsg(object: _171.QueryVoteTargetsResponseAminoMsg): _171.QueryVoteTargetsResponse;
                fromProtoMsg(message: _171.QueryVoteTargetsResponseProtoMsg): _171.QueryVoteTargetsResponse;
                toProto(message: _171.QueryVoteTargetsResponse): Uint8Array;
                toProtoMsg(message: _171.QueryVoteTargetsResponse): _171.QueryVoteTargetsResponseProtoMsg;
            };
            QueryPriceSnapshotHistoryRequest: {
                typeUrl: string;
                encode(_: _171.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPriceSnapshotHistoryRequest;
                fromJSON(_: any): _171.QueryPriceSnapshotHistoryRequest;
                toJSON(_: _171.QueryPriceSnapshotHistoryRequest): unknown;
                fromPartial(_: Partial<_171.QueryPriceSnapshotHistoryRequest>): _171.QueryPriceSnapshotHistoryRequest;
                fromAmino(_: _171.QueryPriceSnapshotHistoryRequestAmino): _171.QueryPriceSnapshotHistoryRequest;
                toAmino(_: _171.QueryPriceSnapshotHistoryRequest): _171.QueryPriceSnapshotHistoryRequestAmino;
                fromAminoMsg(object: _171.QueryPriceSnapshotHistoryRequestAminoMsg): _171.QueryPriceSnapshotHistoryRequest;
                fromProtoMsg(message: _171.QueryPriceSnapshotHistoryRequestProtoMsg): _171.QueryPriceSnapshotHistoryRequest;
                toProto(message: _171.QueryPriceSnapshotHistoryRequest): Uint8Array;
                toProtoMsg(message: _171.QueryPriceSnapshotHistoryRequest): _171.QueryPriceSnapshotHistoryRequestProtoMsg;
            };
            QueryPriceSnapshotHistoryResponse: {
                typeUrl: string;
                encode(message: _171.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPriceSnapshotHistoryResponse;
                fromJSON(object: any): _171.QueryPriceSnapshotHistoryResponse;
                toJSON(message: _171.QueryPriceSnapshotHistoryResponse): unknown;
                fromPartial(object: Partial<_171.QueryPriceSnapshotHistoryResponse>): _171.QueryPriceSnapshotHistoryResponse;
                fromAmino(object: _171.QueryPriceSnapshotHistoryResponseAmino): _171.QueryPriceSnapshotHistoryResponse;
                toAmino(message: _171.QueryPriceSnapshotHistoryResponse): _171.QueryPriceSnapshotHistoryResponseAmino;
                fromAminoMsg(object: _171.QueryPriceSnapshotHistoryResponseAminoMsg): _171.QueryPriceSnapshotHistoryResponse;
                fromProtoMsg(message: _171.QueryPriceSnapshotHistoryResponseProtoMsg): _171.QueryPriceSnapshotHistoryResponse;
                toProto(message: _171.QueryPriceSnapshotHistoryResponse): Uint8Array;
                toProtoMsg(message: _171.QueryPriceSnapshotHistoryResponse): _171.QueryPriceSnapshotHistoryResponseProtoMsg;
            };
            QueryTwapsRequest: {
                typeUrl: string;
                encode(message: _171.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryTwapsRequest;
                fromJSON(object: any): _171.QueryTwapsRequest;
                toJSON(message: _171.QueryTwapsRequest): unknown;
                fromPartial(object: Partial<_171.QueryTwapsRequest>): _171.QueryTwapsRequest;
                fromAmino(object: _171.QueryTwapsRequestAmino): _171.QueryTwapsRequest;
                toAmino(message: _171.QueryTwapsRequest): _171.QueryTwapsRequestAmino;
                fromAminoMsg(object: _171.QueryTwapsRequestAminoMsg): _171.QueryTwapsRequest;
                fromProtoMsg(message: _171.QueryTwapsRequestProtoMsg): _171.QueryTwapsRequest;
                toProto(message: _171.QueryTwapsRequest): Uint8Array;
                toProtoMsg(message: _171.QueryTwapsRequest): _171.QueryTwapsRequestProtoMsg;
            };
            QueryTwapsResponse: {
                typeUrl: string;
                encode(message: _171.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryTwapsResponse;
                fromJSON(object: any): _171.QueryTwapsResponse;
                toJSON(message: _171.QueryTwapsResponse): unknown;
                fromPartial(object: Partial<_171.QueryTwapsResponse>): _171.QueryTwapsResponse;
                fromAmino(object: _171.QueryTwapsResponseAmino): _171.QueryTwapsResponse;
                toAmino(message: _171.QueryTwapsResponse): _171.QueryTwapsResponseAmino;
                fromAminoMsg(object: _171.QueryTwapsResponseAminoMsg): _171.QueryTwapsResponse;
                fromProtoMsg(message: _171.QueryTwapsResponseProtoMsg): _171.QueryTwapsResponse;
                toProto(message: _171.QueryTwapsResponse): Uint8Array;
                toProtoMsg(message: _171.QueryTwapsResponse): _171.QueryTwapsResponseProtoMsg;
            };
            QueryFeederDelegationRequest: {
                typeUrl: string;
                encode(message: _171.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryFeederDelegationRequest;
                fromJSON(object: any): _171.QueryFeederDelegationRequest;
                toJSON(message: _171.QueryFeederDelegationRequest): unknown;
                fromPartial(object: Partial<_171.QueryFeederDelegationRequest>): _171.QueryFeederDelegationRequest;
                fromAmino(object: _171.QueryFeederDelegationRequestAmino): _171.QueryFeederDelegationRequest;
                toAmino(message: _171.QueryFeederDelegationRequest): _171.QueryFeederDelegationRequestAmino;
                fromAminoMsg(object: _171.QueryFeederDelegationRequestAminoMsg): _171.QueryFeederDelegationRequest;
                fromProtoMsg(message: _171.QueryFeederDelegationRequestProtoMsg): _171.QueryFeederDelegationRequest;
                toProto(message: _171.QueryFeederDelegationRequest): Uint8Array;
                toProtoMsg(message: _171.QueryFeederDelegationRequest): _171.QueryFeederDelegationRequestProtoMsg;
            };
            QueryFeederDelegationResponse: {
                typeUrl: string;
                encode(message: _171.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryFeederDelegationResponse;
                fromJSON(object: any): _171.QueryFeederDelegationResponse;
                toJSON(message: _171.QueryFeederDelegationResponse): unknown;
                fromPartial(object: Partial<_171.QueryFeederDelegationResponse>): _171.QueryFeederDelegationResponse;
                fromAmino(object: _171.QueryFeederDelegationResponseAmino): _171.QueryFeederDelegationResponse;
                toAmino(message: _171.QueryFeederDelegationResponse): _171.QueryFeederDelegationResponseAmino;
                fromAminoMsg(object: _171.QueryFeederDelegationResponseAminoMsg): _171.QueryFeederDelegationResponse;
                fromProtoMsg(message: _171.QueryFeederDelegationResponseProtoMsg): _171.QueryFeederDelegationResponse;
                toProto(message: _171.QueryFeederDelegationResponse): Uint8Array;
                toProtoMsg(message: _171.QueryFeederDelegationResponse): _171.QueryFeederDelegationResponseProtoMsg;
            };
            QueryVotePenaltyCounterRequest: {
                typeUrl: string;
                encode(message: _171.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryVotePenaltyCounterRequest;
                fromJSON(object: any): _171.QueryVotePenaltyCounterRequest;
                toJSON(message: _171.QueryVotePenaltyCounterRequest): unknown;
                fromPartial(object: Partial<_171.QueryVotePenaltyCounterRequest>): _171.QueryVotePenaltyCounterRequest;
                fromAmino(object: _171.QueryVotePenaltyCounterRequestAmino): _171.QueryVotePenaltyCounterRequest;
                toAmino(message: _171.QueryVotePenaltyCounterRequest): _171.QueryVotePenaltyCounterRequestAmino;
                fromAminoMsg(object: _171.QueryVotePenaltyCounterRequestAminoMsg): _171.QueryVotePenaltyCounterRequest;
                fromProtoMsg(message: _171.QueryVotePenaltyCounterRequestProtoMsg): _171.QueryVotePenaltyCounterRequest;
                toProto(message: _171.QueryVotePenaltyCounterRequest): Uint8Array;
                toProtoMsg(message: _171.QueryVotePenaltyCounterRequest): _171.QueryVotePenaltyCounterRequestProtoMsg;
            };
            QueryVotePenaltyCounterResponse: {
                typeUrl: string;
                encode(message: _171.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryVotePenaltyCounterResponse;
                fromJSON(object: any): _171.QueryVotePenaltyCounterResponse;
                toJSON(message: _171.QueryVotePenaltyCounterResponse): unknown;
                fromPartial(object: Partial<_171.QueryVotePenaltyCounterResponse>): _171.QueryVotePenaltyCounterResponse;
                fromAmino(object: _171.QueryVotePenaltyCounterResponseAmino): _171.QueryVotePenaltyCounterResponse;
                toAmino(message: _171.QueryVotePenaltyCounterResponse): _171.QueryVotePenaltyCounterResponseAmino;
                fromAminoMsg(object: _171.QueryVotePenaltyCounterResponseAminoMsg): _171.QueryVotePenaltyCounterResponse;
                fromProtoMsg(message: _171.QueryVotePenaltyCounterResponseProtoMsg): _171.QueryVotePenaltyCounterResponse;
                toProto(message: _171.QueryVotePenaltyCounterResponse): Uint8Array;
                toProtoMsg(message: _171.QueryVotePenaltyCounterResponse): _171.QueryVotePenaltyCounterResponseProtoMsg;
            };
            QuerySlashWindowRequest: {
                typeUrl: string;
                encode(_: _171.QuerySlashWindowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QuerySlashWindowRequest;
                fromJSON(_: any): _171.QuerySlashWindowRequest;
                toJSON(_: _171.QuerySlashWindowRequest): unknown;
                fromPartial(_: Partial<_171.QuerySlashWindowRequest>): _171.QuerySlashWindowRequest;
                fromAmino(_: _171.QuerySlashWindowRequestAmino): _171.QuerySlashWindowRequest;
                toAmino(_: _171.QuerySlashWindowRequest): _171.QuerySlashWindowRequestAmino;
                fromAminoMsg(object: _171.QuerySlashWindowRequestAminoMsg): _171.QuerySlashWindowRequest;
                fromProtoMsg(message: _171.QuerySlashWindowRequestProtoMsg): _171.QuerySlashWindowRequest;
                toProto(message: _171.QuerySlashWindowRequest): Uint8Array;
                toProtoMsg(message: _171.QuerySlashWindowRequest): _171.QuerySlashWindowRequestProtoMsg;
            };
            QuerySlashWindowResponse: {
                typeUrl: string;
                encode(message: _171.QuerySlashWindowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QuerySlashWindowResponse;
                fromJSON(object: any): _171.QuerySlashWindowResponse;
                toJSON(message: _171.QuerySlashWindowResponse): unknown;
                fromPartial(object: Partial<_171.QuerySlashWindowResponse>): _171.QuerySlashWindowResponse;
                fromAmino(object: _171.QuerySlashWindowResponseAmino): _171.QuerySlashWindowResponse;
                toAmino(message: _171.QuerySlashWindowResponse): _171.QuerySlashWindowResponseAmino;
                fromAminoMsg(object: _171.QuerySlashWindowResponseAminoMsg): _171.QuerySlashWindowResponse;
                fromProtoMsg(message: _171.QuerySlashWindowResponseProtoMsg): _171.QuerySlashWindowResponse;
                toProto(message: _171.QuerySlashWindowResponse): Uint8Array;
                toProtoMsg(message: _171.QuerySlashWindowResponse): _171.QuerySlashWindowResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _171.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryParamsRequest;
                fromJSON(_: any): _171.QueryParamsRequest;
                toJSON(_: _171.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_171.QueryParamsRequest>): _171.QueryParamsRequest;
                fromAmino(_: _171.QueryParamsRequestAmino): _171.QueryParamsRequest;
                toAmino(_: _171.QueryParamsRequest): _171.QueryParamsRequestAmino;
                fromAminoMsg(object: _171.QueryParamsRequestAminoMsg): _171.QueryParamsRequest;
                fromProtoMsg(message: _171.QueryParamsRequestProtoMsg): _171.QueryParamsRequest;
                toProto(message: _171.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _171.QueryParamsRequest): _171.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _171.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryParamsResponse;
                fromJSON(object: any): _171.QueryParamsResponse;
                toJSON(message: _171.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_171.QueryParamsResponse>): _171.QueryParamsResponse;
                fromAmino(object: _171.QueryParamsResponseAmino): _171.QueryParamsResponse;
                toAmino(message: _171.QueryParamsResponse): _171.QueryParamsResponseAmino;
                fromAminoMsg(object: _171.QueryParamsResponseAminoMsg): _171.QueryParamsResponse;
                fromProtoMsg(message: _171.QueryParamsResponseProtoMsg): _171.QueryParamsResponse;
                toProto(message: _171.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _171.QueryParamsResponse): _171.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _170.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Params;
                fromJSON(object: any): _170.Params;
                toJSON(message: _170.Params): unknown;
                fromPartial(object: Partial<_170.Params>): _170.Params;
                fromAmino(object: _170.ParamsAmino): _170.Params;
                toAmino(message: _170.Params): _170.ParamsAmino;
                fromAminoMsg(object: _170.ParamsAminoMsg): _170.Params;
                fromProtoMsg(message: _170.ParamsProtoMsg): _170.Params;
                toProto(message: _170.Params): Uint8Array;
                toProtoMsg(message: _170.Params): _170.ParamsProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _170.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Denom;
                fromJSON(object: any): _170.Denom;
                toJSON(message: _170.Denom): unknown;
                fromPartial(object: Partial<_170.Denom>): _170.Denom;
                fromAmino(object: _170.DenomAmino): _170.Denom;
                toAmino(message: _170.Denom): _170.DenomAmino;
                fromAminoMsg(object: _170.DenomAminoMsg): _170.Denom;
                fromProtoMsg(message: _170.DenomProtoMsg): _170.Denom;
                toProto(message: _170.Denom): Uint8Array;
                toProtoMsg(message: _170.Denom): _170.DenomProtoMsg;
            };
            AggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _170.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.AggregateExchangeRateVote;
                fromJSON(object: any): _170.AggregateExchangeRateVote;
                toJSON(message: _170.AggregateExchangeRateVote): unknown;
                fromPartial(object: Partial<_170.AggregateExchangeRateVote>): _170.AggregateExchangeRateVote;
                fromAmino(object: _170.AggregateExchangeRateVoteAmino): _170.AggregateExchangeRateVote;
                toAmino(message: _170.AggregateExchangeRateVote): _170.AggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _170.AggregateExchangeRateVoteAminoMsg): _170.AggregateExchangeRateVote;
                fromProtoMsg(message: _170.AggregateExchangeRateVoteProtoMsg): _170.AggregateExchangeRateVote;
                toProto(message: _170.AggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _170.AggregateExchangeRateVote): _170.AggregateExchangeRateVoteProtoMsg;
            };
            ExchangeRateTuple: {
                typeUrl: string;
                encode(message: _170.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ExchangeRateTuple;
                fromJSON(object: any): _170.ExchangeRateTuple;
                toJSON(message: _170.ExchangeRateTuple): unknown;
                fromPartial(object: Partial<_170.ExchangeRateTuple>): _170.ExchangeRateTuple;
                fromAmino(object: _170.ExchangeRateTupleAmino): _170.ExchangeRateTuple;
                toAmino(message: _170.ExchangeRateTuple): _170.ExchangeRateTupleAmino;
                fromAminoMsg(object: _170.ExchangeRateTupleAminoMsg): _170.ExchangeRateTuple;
                fromProtoMsg(message: _170.ExchangeRateTupleProtoMsg): _170.ExchangeRateTuple;
                toProto(message: _170.ExchangeRateTuple): Uint8Array;
                toProtoMsg(message: _170.ExchangeRateTuple): _170.ExchangeRateTupleProtoMsg;
            };
            OracleExchangeRate: {
                typeUrl: string;
                encode(message: _170.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.OracleExchangeRate;
                fromJSON(object: any): _170.OracleExchangeRate;
                toJSON(message: _170.OracleExchangeRate): unknown;
                fromPartial(object: Partial<_170.OracleExchangeRate>): _170.OracleExchangeRate;
                fromAmino(object: _170.OracleExchangeRateAmino): _170.OracleExchangeRate;
                toAmino(message: _170.OracleExchangeRate): _170.OracleExchangeRateAmino;
                fromAminoMsg(object: _170.OracleExchangeRateAminoMsg): _170.OracleExchangeRate;
                fromProtoMsg(message: _170.OracleExchangeRateProtoMsg): _170.OracleExchangeRate;
                toProto(message: _170.OracleExchangeRate): Uint8Array;
                toProtoMsg(message: _170.OracleExchangeRate): _170.OracleExchangeRateProtoMsg;
            };
            PriceSnapshotItem: {
                typeUrl: string;
                encode(message: _170.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PriceSnapshotItem;
                fromJSON(object: any): _170.PriceSnapshotItem;
                toJSON(message: _170.PriceSnapshotItem): unknown;
                fromPartial(object: Partial<_170.PriceSnapshotItem>): _170.PriceSnapshotItem;
                fromAmino(object: _170.PriceSnapshotItemAmino): _170.PriceSnapshotItem;
                toAmino(message: _170.PriceSnapshotItem): _170.PriceSnapshotItemAmino;
                fromAminoMsg(object: _170.PriceSnapshotItemAminoMsg): _170.PriceSnapshotItem;
                fromProtoMsg(message: _170.PriceSnapshotItemProtoMsg): _170.PriceSnapshotItem;
                toProto(message: _170.PriceSnapshotItem): Uint8Array;
                toProtoMsg(message: _170.PriceSnapshotItem): _170.PriceSnapshotItemProtoMsg;
            };
            PriceSnapshot: {
                typeUrl: string;
                encode(message: _170.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PriceSnapshot;
                fromJSON(object: any): _170.PriceSnapshot;
                toJSON(message: _170.PriceSnapshot): unknown;
                fromPartial(object: Partial<_170.PriceSnapshot>): _170.PriceSnapshot;
                fromAmino(object: _170.PriceSnapshotAmino): _170.PriceSnapshot;
                toAmino(message: _170.PriceSnapshot): _170.PriceSnapshotAmino;
                fromAminoMsg(object: _170.PriceSnapshotAminoMsg): _170.PriceSnapshot;
                fromProtoMsg(message: _170.PriceSnapshotProtoMsg): _170.PriceSnapshot;
                toProto(message: _170.PriceSnapshot): Uint8Array;
                toProtoMsg(message: _170.PriceSnapshot): _170.PriceSnapshotProtoMsg;
            };
            OracleTwap: {
                typeUrl: string;
                encode(message: _170.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.OracleTwap;
                fromJSON(object: any): _170.OracleTwap;
                toJSON(message: _170.OracleTwap): unknown;
                fromPartial(object: Partial<_170.OracleTwap>): _170.OracleTwap;
                fromAmino(object: _170.OracleTwapAmino): _170.OracleTwap;
                toAmino(message: _170.OracleTwap): _170.OracleTwapAmino;
                fromAminoMsg(object: _170.OracleTwapAminoMsg): _170.OracleTwap;
                fromProtoMsg(message: _170.OracleTwapProtoMsg): _170.OracleTwap;
                toProto(message: _170.OracleTwap): Uint8Array;
                toProtoMsg(message: _170.OracleTwap): _170.OracleTwapProtoMsg;
            };
            VotePenaltyCounter: {
                typeUrl: string;
                encode(message: _170.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.VotePenaltyCounter;
                fromJSON(object: any): _170.VotePenaltyCounter;
                toJSON(message: _170.VotePenaltyCounter): unknown;
                fromPartial(object: Partial<_170.VotePenaltyCounter>): _170.VotePenaltyCounter;
                fromAmino(object: _170.VotePenaltyCounterAmino): _170.VotePenaltyCounter;
                toAmino(message: _170.VotePenaltyCounter): _170.VotePenaltyCounterAmino;
                fromAminoMsg(object: _170.VotePenaltyCounterAminoMsg): _170.VotePenaltyCounter;
                fromProtoMsg(message: _170.VotePenaltyCounterProtoMsg): _170.VotePenaltyCounter;
                toProto(message: _170.VotePenaltyCounter): Uint8Array;
                toProtoMsg(message: _170.VotePenaltyCounter): _170.VotePenaltyCounterProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _169.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.GenesisState;
                fromJSON(object: any): _169.GenesisState;
                toJSON(message: _169.GenesisState): unknown;
                fromPartial(object: Partial<_169.GenesisState>): _169.GenesisState;
                fromAmino(object: _169.GenesisStateAmino): _169.GenesisState;
                toAmino(message: _169.GenesisState): _169.GenesisStateAmino;
                fromAminoMsg(object: _169.GenesisStateAminoMsg): _169.GenesisState;
                fromProtoMsg(message: _169.GenesisStateProtoMsg): _169.GenesisState;
                toProto(message: _169.GenesisState): Uint8Array;
                toProtoMsg(message: _169.GenesisState): _169.GenesisStateProtoMsg;
            };
            FeederDelegation: {
                typeUrl: string;
                encode(message: _169.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.FeederDelegation;
                fromJSON(object: any): _169.FeederDelegation;
                toJSON(message: _169.FeederDelegation): unknown;
                fromPartial(object: Partial<_169.FeederDelegation>): _169.FeederDelegation;
                fromAmino(object: _169.FeederDelegationAmino): _169.FeederDelegation;
                toAmino(message: _169.FeederDelegation): _169.FeederDelegationAmino;
                fromAminoMsg(object: _169.FeederDelegationAminoMsg): _169.FeederDelegation;
                fromProtoMsg(message: _169.FeederDelegationProtoMsg): _169.FeederDelegation;
                toProto(message: _169.FeederDelegation): Uint8Array;
                toProtoMsg(message: _169.FeederDelegation): _169.FeederDelegationProtoMsg;
            };
            PenaltyCounter: {
                typeUrl: string;
                encode(message: _169.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PenaltyCounter;
                fromJSON(object: any): _169.PenaltyCounter;
                toJSON(message: _169.PenaltyCounter): unknown;
                fromPartial(object: Partial<_169.PenaltyCounter>): _169.PenaltyCounter;
                fromAmino(object: _169.PenaltyCounterAmino): _169.PenaltyCounter;
                toAmino(message: _169.PenaltyCounter): _169.PenaltyCounterAmino;
                fromAminoMsg(object: _169.PenaltyCounterAminoMsg): _169.PenaltyCounter;
                fromProtoMsg(message: _169.PenaltyCounterProtoMsg): _169.PenaltyCounter;
                toProto(message: _169.PenaltyCounter): Uint8Array;
                toProtoMsg(message: _169.PenaltyCounter): _169.PenaltyCounterProtoMsg;
            };
        };
        const tokenfactory: {
            MsgClientImpl: typeof _350.MsgClientImpl;
            QueryClientImpl: typeof _344.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _181.QueryParamsRequest): Promise<_181.QueryParamsResponse>;
                denomAuthorityMetadata(request: _181.QueryDenomAuthorityMetadataRequest): Promise<_181.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _181.QueryDenomsFromCreatorRequest): Promise<_181.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _334.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _182.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _182.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _182.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _182.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _182.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _182.MsgCreateDenom): {
                        typeUrl: string;
                        value: _182.MsgCreateDenom;
                    };
                    mint(value: _182.MsgMint): {
                        typeUrl: string;
                        value: _182.MsgMint;
                    };
                    burn(value: _182.MsgBurn): {
                        typeUrl: string;
                        value: _182.MsgBurn;
                    };
                    changeAdmin(value: _182.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _182.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _182.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _182.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _182.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _182.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _182.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _182.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _182.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _182.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _182.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _182.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _182.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _182.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _182.MsgCreateDenom): {
                        typeUrl: string;
                        value: _182.MsgCreateDenom;
                    };
                    mint(value: _182.MsgMint): {
                        typeUrl: string;
                        value: _182.MsgMint;
                    };
                    burn(value: _182.MsgBurn): {
                        typeUrl: string;
                        value: _182.MsgBurn;
                    };
                    changeAdmin(value: _182.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _182.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _182.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _182.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _182.MsgCreateDenom) => _182.MsgCreateDenomAmino;
                    fromAmino: (object: _182.MsgCreateDenomAmino) => _182.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _182.MsgMint) => _182.MsgMintAmino;
                    fromAmino: (object: _182.MsgMintAmino) => _182.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _182.MsgBurn) => _182.MsgBurnAmino;
                    fromAmino: (object: _182.MsgBurnAmino) => _182.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _182.MsgChangeAdmin) => _182.MsgChangeAdminAmino;
                    fromAmino: (object: _182.MsgChangeAdminAmino) => _182.MsgChangeAdmin;
                };
                "/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _182.MsgSetDenomMetadata) => _182.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _182.MsgSetDenomMetadataAmino) => _182.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _182.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgCreateDenom;
                fromJSON(object: any): _182.MsgCreateDenom;
                toJSON(message: _182.MsgCreateDenom): unknown;
                fromPartial(object: Partial<_182.MsgCreateDenom>): _182.MsgCreateDenom;
                fromAmino(object: _182.MsgCreateDenomAmino): _182.MsgCreateDenom;
                toAmino(message: _182.MsgCreateDenom): _182.MsgCreateDenomAmino;
                fromAminoMsg(object: _182.MsgCreateDenomAminoMsg): _182.MsgCreateDenom;
                fromProtoMsg(message: _182.MsgCreateDenomProtoMsg): _182.MsgCreateDenom;
                toProto(message: _182.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _182.MsgCreateDenom): _182.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _182.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgCreateDenomResponse;
                fromJSON(object: any): _182.MsgCreateDenomResponse;
                toJSON(message: _182.MsgCreateDenomResponse): unknown;
                fromPartial(object: Partial<_182.MsgCreateDenomResponse>): _182.MsgCreateDenomResponse;
                fromAmino(object: _182.MsgCreateDenomResponseAmino): _182.MsgCreateDenomResponse;
                toAmino(message: _182.MsgCreateDenomResponse): _182.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _182.MsgCreateDenomResponseAminoMsg): _182.MsgCreateDenomResponse;
                fromProtoMsg(message: _182.MsgCreateDenomResponseProtoMsg): _182.MsgCreateDenomResponse;
                toProto(message: _182.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _182.MsgCreateDenomResponse): _182.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _182.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgMint;
                fromJSON(object: any): _182.MsgMint;
                toJSON(message: _182.MsgMint): unknown;
                fromPartial(object: Partial<_182.MsgMint>): _182.MsgMint;
                fromAmino(object: _182.MsgMintAmino): _182.MsgMint;
                toAmino(message: _182.MsgMint): _182.MsgMintAmino;
                fromAminoMsg(object: _182.MsgMintAminoMsg): _182.MsgMint;
                fromProtoMsg(message: _182.MsgMintProtoMsg): _182.MsgMint;
                toProto(message: _182.MsgMint): Uint8Array;
                toProtoMsg(message: _182.MsgMint): _182.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _182.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgMintResponse;
                fromJSON(_: any): _182.MsgMintResponse;
                toJSON(_: _182.MsgMintResponse): unknown;
                fromPartial(_: Partial<_182.MsgMintResponse>): _182.MsgMintResponse;
                fromAmino(_: _182.MsgMintResponseAmino): _182.MsgMintResponse;
                toAmino(_: _182.MsgMintResponse): _182.MsgMintResponseAmino;
                fromAminoMsg(object: _182.MsgMintResponseAminoMsg): _182.MsgMintResponse;
                fromProtoMsg(message: _182.MsgMintResponseProtoMsg): _182.MsgMintResponse;
                toProto(message: _182.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _182.MsgMintResponse): _182.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _182.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgBurn;
                fromJSON(object: any): _182.MsgBurn;
                toJSON(message: _182.MsgBurn): unknown;
                fromPartial(object: Partial<_182.MsgBurn>): _182.MsgBurn;
                fromAmino(object: _182.MsgBurnAmino): _182.MsgBurn;
                toAmino(message: _182.MsgBurn): _182.MsgBurnAmino;
                fromAminoMsg(object: _182.MsgBurnAminoMsg): _182.MsgBurn;
                fromProtoMsg(message: _182.MsgBurnProtoMsg): _182.MsgBurn;
                toProto(message: _182.MsgBurn): Uint8Array;
                toProtoMsg(message: _182.MsgBurn): _182.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _182.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgBurnResponse;
                fromJSON(_: any): _182.MsgBurnResponse;
                toJSON(_: _182.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_182.MsgBurnResponse>): _182.MsgBurnResponse;
                fromAmino(_: _182.MsgBurnResponseAmino): _182.MsgBurnResponse;
                toAmino(_: _182.MsgBurnResponse): _182.MsgBurnResponseAmino;
                fromAminoMsg(object: _182.MsgBurnResponseAminoMsg): _182.MsgBurnResponse;
                fromProtoMsg(message: _182.MsgBurnResponseProtoMsg): _182.MsgBurnResponse;
                toProto(message: _182.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _182.MsgBurnResponse): _182.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _182.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgChangeAdmin;
                fromJSON(object: any): _182.MsgChangeAdmin;
                toJSON(message: _182.MsgChangeAdmin): unknown;
                fromPartial(object: Partial<_182.MsgChangeAdmin>): _182.MsgChangeAdmin;
                fromAmino(object: _182.MsgChangeAdminAmino): _182.MsgChangeAdmin;
                toAmino(message: _182.MsgChangeAdmin): _182.MsgChangeAdminAmino;
                fromAminoMsg(object: _182.MsgChangeAdminAminoMsg): _182.MsgChangeAdmin;
                fromProtoMsg(message: _182.MsgChangeAdminProtoMsg): _182.MsgChangeAdmin;
                toProto(message: _182.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _182.MsgChangeAdmin): _182.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _182.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgChangeAdminResponse;
                fromJSON(_: any): _182.MsgChangeAdminResponse;
                toJSON(_: _182.MsgChangeAdminResponse): unknown;
                fromPartial(_: Partial<_182.MsgChangeAdminResponse>): _182.MsgChangeAdminResponse;
                fromAmino(_: _182.MsgChangeAdminResponseAmino): _182.MsgChangeAdminResponse;
                toAmino(_: _182.MsgChangeAdminResponse): _182.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _182.MsgChangeAdminResponseAminoMsg): _182.MsgChangeAdminResponse;
                fromProtoMsg(message: _182.MsgChangeAdminResponseProtoMsg): _182.MsgChangeAdminResponse;
                toProto(message: _182.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _182.MsgChangeAdminResponse): _182.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _182.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgSetDenomMetadata;
                fromJSON(object: any): _182.MsgSetDenomMetadata;
                toJSON(message: _182.MsgSetDenomMetadata): unknown;
                fromPartial(object: Partial<_182.MsgSetDenomMetadata>): _182.MsgSetDenomMetadata;
                fromAmino(object: _182.MsgSetDenomMetadataAmino): _182.MsgSetDenomMetadata;
                toAmino(message: _182.MsgSetDenomMetadata): _182.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _182.MsgSetDenomMetadataAminoMsg): _182.MsgSetDenomMetadata;
                fromProtoMsg(message: _182.MsgSetDenomMetadataProtoMsg): _182.MsgSetDenomMetadata;
                toProto(message: _182.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _182.MsgSetDenomMetadata): _182.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _182.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _182.MsgSetDenomMetadataResponse;
                toJSON(_: _182.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: Partial<_182.MsgSetDenomMetadataResponse>): _182.MsgSetDenomMetadataResponse;
                fromAmino(_: _182.MsgSetDenomMetadataResponseAmino): _182.MsgSetDenomMetadataResponse;
                toAmino(_: _182.MsgSetDenomMetadataResponse): _182.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _182.MsgSetDenomMetadataResponseAminoMsg): _182.MsgSetDenomMetadataResponse;
                fromProtoMsg(message: _182.MsgSetDenomMetadataResponseProtoMsg): _182.MsgSetDenomMetadataResponse;
                toProto(message: _182.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _182.MsgSetDenomMetadataResponse): _182.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _181.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryParamsRequest;
                fromJSON(_: any): _181.QueryParamsRequest;
                toJSON(_: _181.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_181.QueryParamsRequest>): _181.QueryParamsRequest;
                fromAmino(_: _181.QueryParamsRequestAmino): _181.QueryParamsRequest;
                toAmino(_: _181.QueryParamsRequest): _181.QueryParamsRequestAmino;
                fromAminoMsg(object: _181.QueryParamsRequestAminoMsg): _181.QueryParamsRequest;
                fromProtoMsg(message: _181.QueryParamsRequestProtoMsg): _181.QueryParamsRequest;
                toProto(message: _181.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _181.QueryParamsRequest): _181.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _181.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryParamsResponse;
                fromJSON(object: any): _181.QueryParamsResponse;
                toJSON(message: _181.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_181.QueryParamsResponse>): _181.QueryParamsResponse;
                fromAmino(object: _181.QueryParamsResponseAmino): _181.QueryParamsResponse;
                toAmino(message: _181.QueryParamsResponse): _181.QueryParamsResponseAmino;
                fromAminoMsg(object: _181.QueryParamsResponseAminoMsg): _181.QueryParamsResponse;
                fromProtoMsg(message: _181.QueryParamsResponseProtoMsg): _181.QueryParamsResponse;
                toProto(message: _181.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _181.QueryParamsResponse): _181.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _181.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _181.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _181.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: Partial<_181.QueryDenomAuthorityMetadataRequest>): _181.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _181.QueryDenomAuthorityMetadataRequestAmino): _181.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _181.QueryDenomAuthorityMetadataRequest): _181.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _181.QueryDenomAuthorityMetadataRequestAminoMsg): _181.QueryDenomAuthorityMetadataRequest;
                fromProtoMsg(message: _181.QueryDenomAuthorityMetadataRequestProtoMsg): _181.QueryDenomAuthorityMetadataRequest;
                toProto(message: _181.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _181.QueryDenomAuthorityMetadataRequest): _181.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _181.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _181.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _181.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: Partial<_181.QueryDenomAuthorityMetadataResponse>): _181.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _181.QueryDenomAuthorityMetadataResponseAmino): _181.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _181.QueryDenomAuthorityMetadataResponse): _181.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _181.QueryDenomAuthorityMetadataResponseAminoMsg): _181.QueryDenomAuthorityMetadataResponse;
                fromProtoMsg(message: _181.QueryDenomAuthorityMetadataResponseProtoMsg): _181.QueryDenomAuthorityMetadataResponse;
                toProto(message: _181.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _181.QueryDenomAuthorityMetadataResponse): _181.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _181.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _181.QueryDenomsFromCreatorRequest;
                toJSON(message: _181.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: Partial<_181.QueryDenomsFromCreatorRequest>): _181.QueryDenomsFromCreatorRequest;
                fromAmino(object: _181.QueryDenomsFromCreatorRequestAmino): _181.QueryDenomsFromCreatorRequest;
                toAmino(message: _181.QueryDenomsFromCreatorRequest): _181.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _181.QueryDenomsFromCreatorRequestAminoMsg): _181.QueryDenomsFromCreatorRequest;
                fromProtoMsg(message: _181.QueryDenomsFromCreatorRequestProtoMsg): _181.QueryDenomsFromCreatorRequest;
                toProto(message: _181.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _181.QueryDenomsFromCreatorRequest): _181.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _181.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _181.QueryDenomsFromCreatorResponse;
                toJSON(message: _181.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: Partial<_181.QueryDenomsFromCreatorResponse>): _181.QueryDenomsFromCreatorResponse;
                fromAmino(object: _181.QueryDenomsFromCreatorResponseAmino): _181.QueryDenomsFromCreatorResponse;
                toAmino(message: _181.QueryDenomsFromCreatorResponse): _181.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _181.QueryDenomsFromCreatorResponseAminoMsg): _181.QueryDenomsFromCreatorResponse;
                fromProtoMsg(message: _181.QueryDenomsFromCreatorResponseProtoMsg): _181.QueryDenomsFromCreatorResponse;
                toProto(message: _181.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _181.QueryDenomsFromCreatorResponse): _181.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _180.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Params;
                fromJSON(_: any): _180.Params;
                toJSON(_: _180.Params): unknown;
                fromPartial(_: Partial<_180.Params>): _180.Params;
                fromAmino(_: _180.ParamsAmino): _180.Params;
                toAmino(_: _180.Params): _180.ParamsAmino;
                fromAminoMsg(object: _180.ParamsAminoMsg): _180.Params;
                fromProtoMsg(message: _180.ParamsProtoMsg): _180.Params;
                toProto(message: _180.Params): Uint8Array;
                toProtoMsg(message: _180.Params): _180.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _179.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.GenesisState;
                fromJSON(object: any): _179.GenesisState;
                toJSON(message: _179.GenesisState): unknown;
                fromPartial(object: Partial<_179.GenesisState>): _179.GenesisState;
                fromAmino(object: _179.GenesisStateAmino): _179.GenesisState;
                toAmino(message: _179.GenesisState): _179.GenesisStateAmino;
                fromAminoMsg(object: _179.GenesisStateAminoMsg): _179.GenesisState;
                fromProtoMsg(message: _179.GenesisStateProtoMsg): _179.GenesisState;
                toProto(message: _179.GenesisState): Uint8Array;
                toProtoMsg(message: _179.GenesisState): _179.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _179.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.GenesisDenom;
                fromJSON(object: any): _179.GenesisDenom;
                toJSON(message: _179.GenesisDenom): unknown;
                fromPartial(object: Partial<_179.GenesisDenom>): _179.GenesisDenom;
                fromAmino(object: _179.GenesisDenomAmino): _179.GenesisDenom;
                toAmino(message: _179.GenesisDenom): _179.GenesisDenomAmino;
                fromAminoMsg(object: _179.GenesisDenomAminoMsg): _179.GenesisDenom;
                fromProtoMsg(message: _179.GenesisDenomProtoMsg): _179.GenesisDenom;
                toProto(message: _179.GenesisDenom): Uint8Array;
                toProtoMsg(message: _179.GenesisDenom): _179.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _178.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.DenomAuthorityMetadata;
                fromJSON(object: any): _178.DenomAuthorityMetadata;
                toJSON(message: _178.DenomAuthorityMetadata): unknown;
                fromPartial(object: Partial<_178.DenomAuthorityMetadata>): _178.DenomAuthorityMetadata;
                fromAmino(object: _178.DenomAuthorityMetadataAmino): _178.DenomAuthorityMetadata;
                toAmino(message: _178.DenomAuthorityMetadata): _178.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _178.DenomAuthorityMetadataAminoMsg): _178.DenomAuthorityMetadata;
                fromProtoMsg(message: _178.DenomAuthorityMetadataProtoMsg): _178.DenomAuthorityMetadata;
                toProto(message: _178.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _178.DenomAuthorityMetadata): _178.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: import("../cosmos/accesscontrol_x/tx.rpc.msg").MsgClientImpl;
                };
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
                    dex: _347.MsgClientImpl;
                    oracle: _348.MsgClientImpl;
                    tokenfactory: _350.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: {
                        params(request?: import("../cosmos/accesscontrol_x/query").QueryParamsRequest): Promise<import("../cosmos/accesscontrol_x/query").QueryParamsResponse>;
                        resourceDependencyMappingFromMessageKey(request: import("../cosmos/accesscontrol_x/query").ResourceDependencyMappingFromMessageKeyRequest): Promise<import("../cosmos/accesscontrol_x/query").ResourceDependencyMappingFromMessageKeyResponse>;
                        listResourceDependencyMapping(request?: import("../cosmos/accesscontrol_x/query").ListResourceDependencyMappingRequest): Promise<import("../cosmos/accesscontrol_x/query").ListResourceDependencyMappingResponse>;
                        wasmDependencyMapping(request: import("../cosmos/accesscontrol_x/query").WasmDependencyMappingRequest): Promise<import("../cosmos/accesscontrol_x/query").WasmDependencyMappingResponse>;
                        listWasmDependencyMapping(request?: import("../cosmos/accesscontrol_x/query").ListWasmDependencyMappingRequest): Promise<import("../cosmos/accesscontrol_x/query").ListWasmDependencyMappingResponse>;
                    };
                };
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
                        nextAccountNumber(request?: import("../cosmos/auth/v1beta1/query").QueryNextAccountNumberRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryNextAccountNumberResponse>;
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
                    };
                };
            };
            seiprotocol: {
                seichain: {
                    dex: {
                        params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
                        longBook(request: _141.QueryGetLongBookRequest): Promise<_141.QueryGetLongBookResponse>;
                        longBookAll(request: _141.QueryAllLongBookRequest): Promise<_141.QueryAllLongBookResponse>;
                        shortBook(request: _141.QueryGetShortBookRequest): Promise<_141.QueryGetShortBookResponse>;
                        shortBookAll(request: _141.QueryAllShortBookRequest): Promise<_141.QueryAllShortBookResponse>;
                        getPrice(request: _141.QueryGetPriceRequest): Promise<_141.QueryGetPriceResponse>;
                        getLatestPrice(request: _141.QueryGetLatestPriceRequest): Promise<_141.QueryGetLatestPriceResponse>;
                        getPrices(request: _141.QueryGetPricesRequest): Promise<_141.QueryGetPricesResponse>;
                        getTwaps(request: _141.QueryGetTwapsRequest): Promise<_141.QueryGetTwapsResponse>;
                        assetMetadata(request: _141.QueryAssetMetadataRequest): Promise<_141.QueryAssetMetadataResponse>;
                        assetList(request?: _141.QueryAssetListRequest): Promise<_141.QueryAssetListResponse>;
                        getRegisteredPairs(request: _141.QueryRegisteredPairsRequest): Promise<_141.QueryRegisteredPairsResponse>;
                        getRegisteredContract(request: _141.QueryRegisteredContractRequest): Promise<_141.QueryRegisteredContractResponse>;
                        getOrders(request: _141.QueryGetOrdersRequest): Promise<_141.QueryGetOrdersResponse>;
                        getOrder(request: _141.QueryGetOrderByIDRequest): Promise<_141.QueryGetOrderByIDResponse>;
                        getHistoricalPrices(request: _141.QueryGetHistoricalPricesRequest): Promise<_141.QueryGetHistoricalPricesResponse>;
                        getMarketSummary(request: _141.QueryGetMarketSummaryRequest): Promise<_141.QueryGetMarketSummaryResponse>;
                        getOrderSimulation(request: _141.QueryOrderSimulationRequest): Promise<_141.QueryOrderSimulationResponse>;
                        getMatchResult(request: _141.QueryGetMatchResultRequest): Promise<_141.QueryGetMatchResultResponse>;
                        getOrderCount(request: _141.QueryGetOrderCountRequest): Promise<_141.QueryGetOrderCountResponse>;
                    };
                    epoch: {
                        epoch(request?: _155.QueryEpochRequest): Promise<_155.QueryEpochResponse>;
                        params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                    };
                    mint: {
                        params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponse>;
                        minter(request?: _164.QueryMinterRequest): Promise<_164.QueryMinterResponse>;
                    };
                    oracle: {
                        exchangeRate(request: _171.QueryExchangeRateRequest): Promise<_171.QueryExchangeRateResponse>;
                        exchangeRates(request?: _171.QueryExchangeRatesRequest): Promise<_171.QueryExchangeRatesResponse>;
                        actives(request?: _171.QueryActivesRequest): Promise<_171.QueryActivesResponse>;
                        voteTargets(request?: _171.QueryVoteTargetsRequest): Promise<_171.QueryVoteTargetsResponse>;
                        priceSnapshotHistory(request?: _171.QueryPriceSnapshotHistoryRequest): Promise<_171.QueryPriceSnapshotHistoryResponse>;
                        twaps(request: _171.QueryTwapsRequest): Promise<_171.QueryTwapsResponse>;
                        feederDelegation(request: _171.QueryFeederDelegationRequest): Promise<_171.QueryFeederDelegationResponse>;
                        votePenaltyCounter(request: _171.QueryVotePenaltyCounterRequest): Promise<_171.QueryVotePenaltyCounterResponse>;
                        slashWindow(request?: _171.QuerySlashWindowRequest): Promise<_171.QuerySlashWindowResponse>;
                        params(request?: _171.QueryParamsRequest): Promise<_171.QueryParamsResponse>;
                    };
                    tokenfactory: {
                        params(request?: _181.QueryParamsRequest): Promise<_181.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _181.QueryDenomAuthorityMetadataRequest): Promise<_181.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _181.QueryDenomsFromCreatorRequest): Promise<_181.QueryDenomsFromCreatorResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: import("../cosmos/accesscontrol_x/query.lcd").LCDQueryClient;
                };
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
                    dex: _329.LCDQueryClient;
                    epoch: _330.LCDQueryClient;
                    mint: _331.LCDQueryClient;
                    oracle: _332.LCDQueryClient;
                    tokenfactory: _334.LCDQueryClient;
                };
            };
        }>;
    };
}
