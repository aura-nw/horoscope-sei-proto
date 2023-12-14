import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Order, OrderAmino, OrderSDKType } from "./order";
import { PositionDirection } from "./enums";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { LongBook, LongBookAmino, LongBookSDKType } from "./long_book";
import { ShortBook, ShortBookAmino, ShortBookSDKType } from "./short_book";
import { Price, PriceAmino, PriceSDKType, PriceCandlestick, PriceCandlestickAmino, PriceCandlestickSDKType } from "./price";
import { Twap, TwapAmino, TwapSDKType } from "./twap";
import { AssetMetadata, AssetMetadataAmino, AssetMetadataSDKType } from "./asset_list";
import { Pair, PairAmino, PairSDKType } from "./pair";
import { ContractInfoV2, ContractInfoV2Amino, ContractInfoV2SDKType } from "./contract";
import { MatchResult, MatchResultAmino, MatchResultSDKType } from "./match_result";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetLongBookRequest {
    price: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryGetLongBookRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookRequest";
    value: Uint8Array;
}
export interface QueryGetLongBookRequestAmino {
    price?: string;
    contractAddr?: string;
    priceDenom?: string;
    assetDenom?: string;
}
export interface QueryGetLongBookRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetLongBookRequest";
    value: QueryGetLongBookRequestAmino;
}
export interface QueryGetLongBookRequestSDKType {
    price: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryGetLongBookResponse {
    LongBook: LongBook;
}
export interface QueryGetLongBookResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookResponse";
    value: Uint8Array;
}
export interface QueryGetLongBookResponseAmino {
    LongBook?: LongBookAmino;
}
export interface QueryGetLongBookResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetLongBookResponse";
    value: QueryGetLongBookResponseAmino;
}
export interface QueryGetLongBookResponseSDKType {
    LongBook: LongBookSDKType;
}
export interface QueryAllLongBookRequest {
    pagination?: PageRequest;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryAllLongBookRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookRequest";
    value: Uint8Array;
}
export interface QueryAllLongBookRequestAmino {
    pagination?: PageRequestAmino;
    contractAddr?: string;
    priceDenom?: string;
    assetDenom?: string;
}
export interface QueryAllLongBookRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryAllLongBookRequest";
    value: QueryAllLongBookRequestAmino;
}
export interface QueryAllLongBookRequestSDKType {
    pagination?: PageRequestSDKType;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryAllLongBookResponse {
    LongBook: LongBook[];
    pagination?: PageResponse;
}
export interface QueryAllLongBookResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookResponse";
    value: Uint8Array;
}
export interface QueryAllLongBookResponseAmino {
    LongBook?: LongBookAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllLongBookResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryAllLongBookResponse";
    value: QueryAllLongBookResponseAmino;
}
export interface QueryAllLongBookResponseSDKType {
    LongBook: LongBookSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetShortBookRequest {
    price: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryGetShortBookRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookRequest";
    value: Uint8Array;
}
export interface QueryGetShortBookRequestAmino {
    price?: string;
    contractAddr?: string;
    priceDenom?: string;
    assetDenom?: string;
}
export interface QueryGetShortBookRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetShortBookRequest";
    value: QueryGetShortBookRequestAmino;
}
export interface QueryGetShortBookRequestSDKType {
    price: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryGetShortBookResponse {
    ShortBook: ShortBook;
}
export interface QueryGetShortBookResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookResponse";
    value: Uint8Array;
}
export interface QueryGetShortBookResponseAmino {
    ShortBook?: ShortBookAmino;
}
export interface QueryGetShortBookResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetShortBookResponse";
    value: QueryGetShortBookResponseAmino;
}
export interface QueryGetShortBookResponseSDKType {
    ShortBook: ShortBookSDKType;
}
export interface QueryAllShortBookRequest {
    pagination?: PageRequest;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryAllShortBookRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookRequest";
    value: Uint8Array;
}
export interface QueryAllShortBookRequestAmino {
    pagination?: PageRequestAmino;
    contractAddr?: string;
    priceDenom?: string;
    assetDenom?: string;
}
export interface QueryAllShortBookRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryAllShortBookRequest";
    value: QueryAllShortBookRequestAmino;
}
export interface QueryAllShortBookRequestSDKType {
    pagination?: PageRequestSDKType;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryAllShortBookResponse {
    ShortBook: ShortBook[];
    pagination?: PageResponse;
}
export interface QueryAllShortBookResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookResponse";
    value: Uint8Array;
}
export interface QueryAllShortBookResponseAmino {
    ShortBook?: ShortBookAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllShortBookResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryAllShortBookResponse";
    value: QueryAllShortBookResponseAmino;
}
export interface QueryAllShortBookResponseSDKType {
    ShortBook: ShortBookSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetPricesRequest {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
}
export interface QueryGetPricesRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesRequest";
    value: Uint8Array;
}
export interface QueryGetPricesRequestAmino {
    priceDenom?: string;
    assetDenom?: string;
    contractAddr?: string;
}
export interface QueryGetPricesRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetPricesRequest";
    value: QueryGetPricesRequestAmino;
}
export interface QueryGetPricesRequestSDKType {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
}
export interface QueryGetPricesResponse {
    prices: Price[];
}
export interface QueryGetPricesResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesResponse";
    value: Uint8Array;
}
export interface QueryGetPricesResponseAmino {
    prices?: PriceAmino[];
}
export interface QueryGetPricesResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetPricesResponse";
    value: QueryGetPricesResponseAmino;
}
export interface QueryGetPricesResponseSDKType {
    prices: PriceSDKType[];
}
export interface QueryGetPriceRequest {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
    timestamp: Long;
}
export interface QueryGetPriceRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceRequest";
    value: Uint8Array;
}
export interface QueryGetPriceRequestAmino {
    priceDenom?: string;
    assetDenom?: string;
    contractAddr?: string;
    timestamp?: string;
}
export interface QueryGetPriceRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetPriceRequest";
    value: QueryGetPriceRequestAmino;
}
export interface QueryGetPriceRequestSDKType {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
    timestamp: Long;
}
export interface QueryGetPriceResponse {
    price?: Price;
    found: boolean;
}
export interface QueryGetPriceResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceResponse";
    value: Uint8Array;
}
export interface QueryGetPriceResponseAmino {
    price?: PriceAmino;
    found?: boolean;
}
export interface QueryGetPriceResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetPriceResponse";
    value: QueryGetPriceResponseAmino;
}
export interface QueryGetPriceResponseSDKType {
    price?: PriceSDKType;
    found: boolean;
}
export interface QueryGetLatestPriceRequest {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
}
export interface QueryGetLatestPriceRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceRequest";
    value: Uint8Array;
}
export interface QueryGetLatestPriceRequestAmino {
    priceDenom?: string;
    assetDenom?: string;
    contractAddr?: string;
}
export interface QueryGetLatestPriceRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetLatestPriceRequest";
    value: QueryGetLatestPriceRequestAmino;
}
export interface QueryGetLatestPriceRequestSDKType {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
}
export interface QueryGetLatestPriceResponse {
    price?: Price;
}
export interface QueryGetLatestPriceResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceResponse";
    value: Uint8Array;
}
export interface QueryGetLatestPriceResponseAmino {
    price?: PriceAmino;
}
export interface QueryGetLatestPriceResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetLatestPriceResponse";
    value: QueryGetLatestPriceResponseAmino;
}
export interface QueryGetLatestPriceResponseSDKType {
    price?: PriceSDKType;
}
export interface QueryGetTwapsRequest {
    contractAddr: string;
    lookbackSeconds: Long;
}
export interface QueryGetTwapsRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsRequest";
    value: Uint8Array;
}
export interface QueryGetTwapsRequestAmino {
    contractAddr?: string;
    lookbackSeconds?: string;
}
export interface QueryGetTwapsRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetTwapsRequest";
    value: QueryGetTwapsRequestAmino;
}
export interface QueryGetTwapsRequestSDKType {
    contractAddr: string;
    lookbackSeconds: Long;
}
export interface QueryGetTwapsResponse {
    twaps: Twap[];
}
export interface QueryGetTwapsResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsResponse";
    value: Uint8Array;
}
export interface QueryGetTwapsResponseAmino {
    twaps?: TwapAmino[];
}
export interface QueryGetTwapsResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetTwapsResponse";
    value: QueryGetTwapsResponseAmino;
}
export interface QueryGetTwapsResponseSDKType {
    twaps: TwapSDKType[];
}
export interface QueryAssetListRequest {
}
export interface QueryAssetListRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryAssetListRequest";
    value: Uint8Array;
}
export interface QueryAssetListRequestAmino {
}
export interface QueryAssetListRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryAssetListRequest";
    value: QueryAssetListRequestAmino;
}
export interface QueryAssetListRequestSDKType {
}
export interface QueryAssetListResponse {
    assetList: AssetMetadata[];
}
export interface QueryAssetListResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryAssetListResponse";
    value: Uint8Array;
}
export interface QueryAssetListResponseAmino {
    assetList?: AssetMetadataAmino[];
}
export interface QueryAssetListResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryAssetListResponse";
    value: QueryAssetListResponseAmino;
}
export interface QueryAssetListResponseSDKType {
    assetList: AssetMetadataSDKType[];
}
export interface QueryAssetMetadataRequest {
    denom: string;
}
export interface QueryAssetMetadataRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataRequest";
    value: Uint8Array;
}
export interface QueryAssetMetadataRequestAmino {
    denom?: string;
}
export interface QueryAssetMetadataRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryAssetMetadataRequest";
    value: QueryAssetMetadataRequestAmino;
}
export interface QueryAssetMetadataRequestSDKType {
    denom: string;
}
export interface QueryAssetMetadataResponse {
    metadata?: AssetMetadata;
}
export interface QueryAssetMetadataResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataResponse";
    value: Uint8Array;
}
export interface QueryAssetMetadataResponseAmino {
    metadata?: AssetMetadataAmino;
}
export interface QueryAssetMetadataResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryAssetMetadataResponse";
    value: QueryAssetMetadataResponseAmino;
}
export interface QueryAssetMetadataResponseSDKType {
    metadata?: AssetMetadataSDKType;
}
export interface QueryRegisteredPairsRequest {
    contractAddr: string;
}
export interface QueryRegisteredPairsRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsRequest";
    value: Uint8Array;
}
export interface QueryRegisteredPairsRequestAmino {
    contractAddr?: string;
}
export interface QueryRegisteredPairsRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryRegisteredPairsRequest";
    value: QueryRegisteredPairsRequestAmino;
}
export interface QueryRegisteredPairsRequestSDKType {
    contractAddr: string;
}
export interface QueryRegisteredPairsResponse {
    pairs: Pair[];
}
export interface QueryRegisteredPairsResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsResponse";
    value: Uint8Array;
}
export interface QueryRegisteredPairsResponseAmino {
    pairs?: PairAmino[];
}
export interface QueryRegisteredPairsResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryRegisteredPairsResponse";
    value: QueryRegisteredPairsResponseAmino;
}
export interface QueryRegisteredPairsResponseSDKType {
    pairs: PairSDKType[];
}
export interface QueryRegisteredContractRequest {
    contractAddr: string;
}
export interface QueryRegisteredContractRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractRequest";
    value: Uint8Array;
}
export interface QueryRegisteredContractRequestAmino {
    contractAddr?: string;
}
export interface QueryRegisteredContractRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryRegisteredContractRequest";
    value: QueryRegisteredContractRequestAmino;
}
export interface QueryRegisteredContractRequestSDKType {
    contractAddr: string;
}
export interface QueryRegisteredContractResponse {
    contractInfo?: ContractInfoV2;
}
export interface QueryRegisteredContractResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractResponse";
    value: Uint8Array;
}
export interface QueryRegisteredContractResponseAmino {
    contract_info?: ContractInfoV2Amino;
}
export interface QueryRegisteredContractResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryRegisteredContractResponse";
    value: QueryRegisteredContractResponseAmino;
}
export interface QueryRegisteredContractResponseSDKType {
    contract_info?: ContractInfoV2SDKType;
}
export interface QueryGetOrdersRequest {
    contractAddr: string;
    account: string;
}
export interface QueryGetOrdersRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersRequest";
    value: Uint8Array;
}
export interface QueryGetOrdersRequestAmino {
    contractAddr?: string;
    account?: string;
}
export interface QueryGetOrdersRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetOrdersRequest";
    value: QueryGetOrdersRequestAmino;
}
export interface QueryGetOrdersRequestSDKType {
    contractAddr: string;
    account: string;
}
export interface QueryGetOrdersResponse {
    orders: Order[];
}
export interface QueryGetOrdersResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersResponse";
    value: Uint8Array;
}
export interface QueryGetOrdersResponseAmino {
    orders?: OrderAmino[];
}
export interface QueryGetOrdersResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetOrdersResponse";
    value: QueryGetOrdersResponseAmino;
}
export interface QueryGetOrdersResponseSDKType {
    orders: OrderSDKType[];
}
export interface QueryGetOrderByIDRequest {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    id: Long;
}
export interface QueryGetOrderByIDRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDRequest";
    value: Uint8Array;
}
export interface QueryGetOrderByIDRequestAmino {
    contractAddr?: string;
    priceDenom?: string;
    assetDenom?: string;
    id?: string;
}
export interface QueryGetOrderByIDRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetOrderByIDRequest";
    value: QueryGetOrderByIDRequestAmino;
}
export interface QueryGetOrderByIDRequestSDKType {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    id: Long;
}
export interface QueryGetOrderByIDResponse {
    order?: Order;
}
export interface QueryGetOrderByIDResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDResponse";
    value: Uint8Array;
}
export interface QueryGetOrderByIDResponseAmino {
    order?: OrderAmino;
}
export interface QueryGetOrderByIDResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetOrderByIDResponse";
    value: QueryGetOrderByIDResponseAmino;
}
export interface QueryGetOrderByIDResponseSDKType {
    order?: OrderSDKType;
}
export interface QueryGetHistoricalPricesRequest {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    periodLengthInSeconds: Long;
    numOfPeriods: Long;
}
export interface QueryGetHistoricalPricesRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesRequest";
    value: Uint8Array;
}
export interface QueryGetHistoricalPricesRequestAmino {
    contractAddr?: string;
    priceDenom?: string;
    assetDenom?: string;
    periodLengthInSeconds?: string;
    numOfPeriods?: string;
}
export interface QueryGetHistoricalPricesRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesRequest";
    value: QueryGetHistoricalPricesRequestAmino;
}
export interface QueryGetHistoricalPricesRequestSDKType {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    periodLengthInSeconds: Long;
    numOfPeriods: Long;
}
export interface QueryGetHistoricalPricesResponse {
    prices: PriceCandlestick[];
}
export interface QueryGetHistoricalPricesResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesResponse";
    value: Uint8Array;
}
export interface QueryGetHistoricalPricesResponseAmino {
    prices?: PriceCandlestickAmino[];
}
export interface QueryGetHistoricalPricesResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesResponse";
    value: QueryGetHistoricalPricesResponseAmino;
}
export interface QueryGetHistoricalPricesResponseSDKType {
    prices: PriceCandlestickSDKType[];
}
export interface QueryGetMarketSummaryRequest {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    lookbackInSeconds: Long;
}
export interface QueryGetMarketSummaryRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryRequest";
    value: Uint8Array;
}
export interface QueryGetMarketSummaryRequestAmino {
    contractAddr?: string;
    priceDenom?: string;
    assetDenom?: string;
    lookbackInSeconds?: string;
}
export interface QueryGetMarketSummaryRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetMarketSummaryRequest";
    value: QueryGetMarketSummaryRequestAmino;
}
export interface QueryGetMarketSummaryRequestSDKType {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    lookbackInSeconds: Long;
}
export interface QueryGetMarketSummaryResponse {
    totalVolume: string;
    totalVolumeNotional: string;
    highPrice: string;
    lowPrice: string;
    lastPrice: string;
}
export interface QueryGetMarketSummaryResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryResponse";
    value: Uint8Array;
}
export interface QueryGetMarketSummaryResponseAmino {
    totalVolume?: string;
    totalVolumeNotional?: string;
    highPrice?: string;
    lowPrice?: string;
    lastPrice?: string;
}
export interface QueryGetMarketSummaryResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetMarketSummaryResponse";
    value: QueryGetMarketSummaryResponseAmino;
}
export interface QueryGetMarketSummaryResponseSDKType {
    totalVolume: string;
    totalVolumeNotional: string;
    highPrice: string;
    lowPrice: string;
    lastPrice: string;
}
export interface QueryOrderSimulationRequest {
    order?: Order;
    contractAddr: string;
}
export interface QueryOrderSimulationRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationRequest";
    value: Uint8Array;
}
export interface QueryOrderSimulationRequestAmino {
    order?: OrderAmino;
    contractAddr?: string;
}
export interface QueryOrderSimulationRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryOrderSimulationRequest";
    value: QueryOrderSimulationRequestAmino;
}
export interface QueryOrderSimulationRequestSDKType {
    order?: OrderSDKType;
    contractAddr: string;
}
export interface QueryOrderSimulationResponse {
    ExecutedQuantity: string;
}
export interface QueryOrderSimulationResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationResponse";
    value: Uint8Array;
}
export interface QueryOrderSimulationResponseAmino {
    ExecutedQuantity?: string;
}
export interface QueryOrderSimulationResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryOrderSimulationResponse";
    value: QueryOrderSimulationResponseAmino;
}
export interface QueryOrderSimulationResponseSDKType {
    ExecutedQuantity: string;
}
export interface QueryGetMatchResultRequest {
    contractAddr: string;
}
export interface QueryGetMatchResultRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultRequest";
    value: Uint8Array;
}
export interface QueryGetMatchResultRequestAmino {
    contractAddr?: string;
}
export interface QueryGetMatchResultRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetMatchResultRequest";
    value: QueryGetMatchResultRequestAmino;
}
export interface QueryGetMatchResultRequestSDKType {
    contractAddr: string;
}
export interface QueryGetMatchResultResponse {
    result?: MatchResult;
}
export interface QueryGetMatchResultResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultResponse";
    value: Uint8Array;
}
export interface QueryGetMatchResultResponseAmino {
    result?: MatchResultAmino;
}
export interface QueryGetMatchResultResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetMatchResultResponse";
    value: QueryGetMatchResultResponseAmino;
}
export interface QueryGetMatchResultResponseSDKType {
    result?: MatchResultSDKType;
}
export interface QueryGetOrderCountRequest {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    price: string;
    positionDirection: PositionDirection;
}
export interface QueryGetOrderCountRequestProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountRequest";
    value: Uint8Array;
}
export interface QueryGetOrderCountRequestAmino {
    contractAddr?: string;
    priceDenom?: string;
    assetDenom?: string;
    price?: string;
    positionDirection?: PositionDirection;
}
export interface QueryGetOrderCountRequestAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetOrderCountRequest";
    value: QueryGetOrderCountRequestAmino;
}
export interface QueryGetOrderCountRequestSDKType {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    price: string;
    positionDirection: PositionDirection;
}
export interface QueryGetOrderCountResponse {
    count: Long;
}
export interface QueryGetOrderCountResponseProtoMsg {
    typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountResponse";
    value: Uint8Array;
}
export interface QueryGetOrderCountResponseAmino {
    count?: string;
}
export interface QueryGetOrderCountResponseAminoMsg {
    type: "/seiprotocol.seichain.dex.QueryGetOrderCountResponse";
    value: QueryGetOrderCountResponseAmino;
}
export interface QueryGetOrderCountResponseSDKType {
    count: Long;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetLongBookRequest: {
    typeUrl: string;
    encode(message: QueryGetLongBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLongBookRequest;
    fromJSON(object: any): QueryGetLongBookRequest;
    toJSON(message: QueryGetLongBookRequest): unknown;
    fromPartial(object: Partial<QueryGetLongBookRequest>): QueryGetLongBookRequest;
    fromAmino(object: QueryGetLongBookRequestAmino): QueryGetLongBookRequest;
    toAmino(message: QueryGetLongBookRequest): QueryGetLongBookRequestAmino;
    fromAminoMsg(object: QueryGetLongBookRequestAminoMsg): QueryGetLongBookRequest;
    fromProtoMsg(message: QueryGetLongBookRequestProtoMsg): QueryGetLongBookRequest;
    toProto(message: QueryGetLongBookRequest): Uint8Array;
    toProtoMsg(message: QueryGetLongBookRequest): QueryGetLongBookRequestProtoMsg;
};
export declare const QueryGetLongBookResponse: {
    typeUrl: string;
    encode(message: QueryGetLongBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLongBookResponse;
    fromJSON(object: any): QueryGetLongBookResponse;
    toJSON(message: QueryGetLongBookResponse): unknown;
    fromPartial(object: Partial<QueryGetLongBookResponse>): QueryGetLongBookResponse;
    fromAmino(object: QueryGetLongBookResponseAmino): QueryGetLongBookResponse;
    toAmino(message: QueryGetLongBookResponse): QueryGetLongBookResponseAmino;
    fromAminoMsg(object: QueryGetLongBookResponseAminoMsg): QueryGetLongBookResponse;
    fromProtoMsg(message: QueryGetLongBookResponseProtoMsg): QueryGetLongBookResponse;
    toProto(message: QueryGetLongBookResponse): Uint8Array;
    toProtoMsg(message: QueryGetLongBookResponse): QueryGetLongBookResponseProtoMsg;
};
export declare const QueryAllLongBookRequest: {
    typeUrl: string;
    encode(message: QueryAllLongBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLongBookRequest;
    fromJSON(object: any): QueryAllLongBookRequest;
    toJSON(message: QueryAllLongBookRequest): unknown;
    fromPartial(object: Partial<QueryAllLongBookRequest>): QueryAllLongBookRequest;
    fromAmino(object: QueryAllLongBookRequestAmino): QueryAllLongBookRequest;
    toAmino(message: QueryAllLongBookRequest): QueryAllLongBookRequestAmino;
    fromAminoMsg(object: QueryAllLongBookRequestAminoMsg): QueryAllLongBookRequest;
    fromProtoMsg(message: QueryAllLongBookRequestProtoMsg): QueryAllLongBookRequest;
    toProto(message: QueryAllLongBookRequest): Uint8Array;
    toProtoMsg(message: QueryAllLongBookRequest): QueryAllLongBookRequestProtoMsg;
};
export declare const QueryAllLongBookResponse: {
    typeUrl: string;
    encode(message: QueryAllLongBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLongBookResponse;
    fromJSON(object: any): QueryAllLongBookResponse;
    toJSON(message: QueryAllLongBookResponse): unknown;
    fromPartial(object: Partial<QueryAllLongBookResponse>): QueryAllLongBookResponse;
    fromAmino(object: QueryAllLongBookResponseAmino): QueryAllLongBookResponse;
    toAmino(message: QueryAllLongBookResponse): QueryAllLongBookResponseAmino;
    fromAminoMsg(object: QueryAllLongBookResponseAminoMsg): QueryAllLongBookResponse;
    fromProtoMsg(message: QueryAllLongBookResponseProtoMsg): QueryAllLongBookResponse;
    toProto(message: QueryAllLongBookResponse): Uint8Array;
    toProtoMsg(message: QueryAllLongBookResponse): QueryAllLongBookResponseProtoMsg;
};
export declare const QueryGetShortBookRequest: {
    typeUrl: string;
    encode(message: QueryGetShortBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetShortBookRequest;
    fromJSON(object: any): QueryGetShortBookRequest;
    toJSON(message: QueryGetShortBookRequest): unknown;
    fromPartial(object: Partial<QueryGetShortBookRequest>): QueryGetShortBookRequest;
    fromAmino(object: QueryGetShortBookRequestAmino): QueryGetShortBookRequest;
    toAmino(message: QueryGetShortBookRequest): QueryGetShortBookRequestAmino;
    fromAminoMsg(object: QueryGetShortBookRequestAminoMsg): QueryGetShortBookRequest;
    fromProtoMsg(message: QueryGetShortBookRequestProtoMsg): QueryGetShortBookRequest;
    toProto(message: QueryGetShortBookRequest): Uint8Array;
    toProtoMsg(message: QueryGetShortBookRequest): QueryGetShortBookRequestProtoMsg;
};
export declare const QueryGetShortBookResponse: {
    typeUrl: string;
    encode(message: QueryGetShortBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetShortBookResponse;
    fromJSON(object: any): QueryGetShortBookResponse;
    toJSON(message: QueryGetShortBookResponse): unknown;
    fromPartial(object: Partial<QueryGetShortBookResponse>): QueryGetShortBookResponse;
    fromAmino(object: QueryGetShortBookResponseAmino): QueryGetShortBookResponse;
    toAmino(message: QueryGetShortBookResponse): QueryGetShortBookResponseAmino;
    fromAminoMsg(object: QueryGetShortBookResponseAminoMsg): QueryGetShortBookResponse;
    fromProtoMsg(message: QueryGetShortBookResponseProtoMsg): QueryGetShortBookResponse;
    toProto(message: QueryGetShortBookResponse): Uint8Array;
    toProtoMsg(message: QueryGetShortBookResponse): QueryGetShortBookResponseProtoMsg;
};
export declare const QueryAllShortBookRequest: {
    typeUrl: string;
    encode(message: QueryAllShortBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllShortBookRequest;
    fromJSON(object: any): QueryAllShortBookRequest;
    toJSON(message: QueryAllShortBookRequest): unknown;
    fromPartial(object: Partial<QueryAllShortBookRequest>): QueryAllShortBookRequest;
    fromAmino(object: QueryAllShortBookRequestAmino): QueryAllShortBookRequest;
    toAmino(message: QueryAllShortBookRequest): QueryAllShortBookRequestAmino;
    fromAminoMsg(object: QueryAllShortBookRequestAminoMsg): QueryAllShortBookRequest;
    fromProtoMsg(message: QueryAllShortBookRequestProtoMsg): QueryAllShortBookRequest;
    toProto(message: QueryAllShortBookRequest): Uint8Array;
    toProtoMsg(message: QueryAllShortBookRequest): QueryAllShortBookRequestProtoMsg;
};
export declare const QueryAllShortBookResponse: {
    typeUrl: string;
    encode(message: QueryAllShortBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllShortBookResponse;
    fromJSON(object: any): QueryAllShortBookResponse;
    toJSON(message: QueryAllShortBookResponse): unknown;
    fromPartial(object: Partial<QueryAllShortBookResponse>): QueryAllShortBookResponse;
    fromAmino(object: QueryAllShortBookResponseAmino): QueryAllShortBookResponse;
    toAmino(message: QueryAllShortBookResponse): QueryAllShortBookResponseAmino;
    fromAminoMsg(object: QueryAllShortBookResponseAminoMsg): QueryAllShortBookResponse;
    fromProtoMsg(message: QueryAllShortBookResponseProtoMsg): QueryAllShortBookResponse;
    toProto(message: QueryAllShortBookResponse): Uint8Array;
    toProtoMsg(message: QueryAllShortBookResponse): QueryAllShortBookResponseProtoMsg;
};
export declare const QueryGetPricesRequest: {
    typeUrl: string;
    encode(message: QueryGetPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPricesRequest;
    fromJSON(object: any): QueryGetPricesRequest;
    toJSON(message: QueryGetPricesRequest): unknown;
    fromPartial(object: Partial<QueryGetPricesRequest>): QueryGetPricesRequest;
    fromAmino(object: QueryGetPricesRequestAmino): QueryGetPricesRequest;
    toAmino(message: QueryGetPricesRequest): QueryGetPricesRequestAmino;
    fromAminoMsg(object: QueryGetPricesRequestAminoMsg): QueryGetPricesRequest;
    fromProtoMsg(message: QueryGetPricesRequestProtoMsg): QueryGetPricesRequest;
    toProto(message: QueryGetPricesRequest): Uint8Array;
    toProtoMsg(message: QueryGetPricesRequest): QueryGetPricesRequestProtoMsg;
};
export declare const QueryGetPricesResponse: {
    typeUrl: string;
    encode(message: QueryGetPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPricesResponse;
    fromJSON(object: any): QueryGetPricesResponse;
    toJSON(message: QueryGetPricesResponse): unknown;
    fromPartial(object: Partial<QueryGetPricesResponse>): QueryGetPricesResponse;
    fromAmino(object: QueryGetPricesResponseAmino): QueryGetPricesResponse;
    toAmino(message: QueryGetPricesResponse): QueryGetPricesResponseAmino;
    fromAminoMsg(object: QueryGetPricesResponseAminoMsg): QueryGetPricesResponse;
    fromProtoMsg(message: QueryGetPricesResponseProtoMsg): QueryGetPricesResponse;
    toProto(message: QueryGetPricesResponse): Uint8Array;
    toProtoMsg(message: QueryGetPricesResponse): QueryGetPricesResponseProtoMsg;
};
export declare const QueryGetPriceRequest: {
    typeUrl: string;
    encode(message: QueryGetPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPriceRequest;
    fromJSON(object: any): QueryGetPriceRequest;
    toJSON(message: QueryGetPriceRequest): unknown;
    fromPartial(object: Partial<QueryGetPriceRequest>): QueryGetPriceRequest;
    fromAmino(object: QueryGetPriceRequestAmino): QueryGetPriceRequest;
    toAmino(message: QueryGetPriceRequest): QueryGetPriceRequestAmino;
    fromAminoMsg(object: QueryGetPriceRequestAminoMsg): QueryGetPriceRequest;
    fromProtoMsg(message: QueryGetPriceRequestProtoMsg): QueryGetPriceRequest;
    toProto(message: QueryGetPriceRequest): Uint8Array;
    toProtoMsg(message: QueryGetPriceRequest): QueryGetPriceRequestProtoMsg;
};
export declare const QueryGetPriceResponse: {
    typeUrl: string;
    encode(message: QueryGetPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPriceResponse;
    fromJSON(object: any): QueryGetPriceResponse;
    toJSON(message: QueryGetPriceResponse): unknown;
    fromPartial(object: Partial<QueryGetPriceResponse>): QueryGetPriceResponse;
    fromAmino(object: QueryGetPriceResponseAmino): QueryGetPriceResponse;
    toAmino(message: QueryGetPriceResponse): QueryGetPriceResponseAmino;
    fromAminoMsg(object: QueryGetPriceResponseAminoMsg): QueryGetPriceResponse;
    fromProtoMsg(message: QueryGetPriceResponseProtoMsg): QueryGetPriceResponse;
    toProto(message: QueryGetPriceResponse): Uint8Array;
    toProtoMsg(message: QueryGetPriceResponse): QueryGetPriceResponseProtoMsg;
};
export declare const QueryGetLatestPriceRequest: {
    typeUrl: string;
    encode(message: QueryGetLatestPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLatestPriceRequest;
    fromJSON(object: any): QueryGetLatestPriceRequest;
    toJSON(message: QueryGetLatestPriceRequest): unknown;
    fromPartial(object: Partial<QueryGetLatestPriceRequest>): QueryGetLatestPriceRequest;
    fromAmino(object: QueryGetLatestPriceRequestAmino): QueryGetLatestPriceRequest;
    toAmino(message: QueryGetLatestPriceRequest): QueryGetLatestPriceRequestAmino;
    fromAminoMsg(object: QueryGetLatestPriceRequestAminoMsg): QueryGetLatestPriceRequest;
    fromProtoMsg(message: QueryGetLatestPriceRequestProtoMsg): QueryGetLatestPriceRequest;
    toProto(message: QueryGetLatestPriceRequest): Uint8Array;
    toProtoMsg(message: QueryGetLatestPriceRequest): QueryGetLatestPriceRequestProtoMsg;
};
export declare const QueryGetLatestPriceResponse: {
    typeUrl: string;
    encode(message: QueryGetLatestPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLatestPriceResponse;
    fromJSON(object: any): QueryGetLatestPriceResponse;
    toJSON(message: QueryGetLatestPriceResponse): unknown;
    fromPartial(object: Partial<QueryGetLatestPriceResponse>): QueryGetLatestPriceResponse;
    fromAmino(object: QueryGetLatestPriceResponseAmino): QueryGetLatestPriceResponse;
    toAmino(message: QueryGetLatestPriceResponse): QueryGetLatestPriceResponseAmino;
    fromAminoMsg(object: QueryGetLatestPriceResponseAminoMsg): QueryGetLatestPriceResponse;
    fromProtoMsg(message: QueryGetLatestPriceResponseProtoMsg): QueryGetLatestPriceResponse;
    toProto(message: QueryGetLatestPriceResponse): Uint8Array;
    toProtoMsg(message: QueryGetLatestPriceResponse): QueryGetLatestPriceResponseProtoMsg;
};
export declare const QueryGetTwapsRequest: {
    typeUrl: string;
    encode(message: QueryGetTwapsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTwapsRequest;
    fromJSON(object: any): QueryGetTwapsRequest;
    toJSON(message: QueryGetTwapsRequest): unknown;
    fromPartial(object: Partial<QueryGetTwapsRequest>): QueryGetTwapsRequest;
    fromAmino(object: QueryGetTwapsRequestAmino): QueryGetTwapsRequest;
    toAmino(message: QueryGetTwapsRequest): QueryGetTwapsRequestAmino;
    fromAminoMsg(object: QueryGetTwapsRequestAminoMsg): QueryGetTwapsRequest;
    fromProtoMsg(message: QueryGetTwapsRequestProtoMsg): QueryGetTwapsRequest;
    toProto(message: QueryGetTwapsRequest): Uint8Array;
    toProtoMsg(message: QueryGetTwapsRequest): QueryGetTwapsRequestProtoMsg;
};
export declare const QueryGetTwapsResponse: {
    typeUrl: string;
    encode(message: QueryGetTwapsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTwapsResponse;
    fromJSON(object: any): QueryGetTwapsResponse;
    toJSON(message: QueryGetTwapsResponse): unknown;
    fromPartial(object: Partial<QueryGetTwapsResponse>): QueryGetTwapsResponse;
    fromAmino(object: QueryGetTwapsResponseAmino): QueryGetTwapsResponse;
    toAmino(message: QueryGetTwapsResponse): QueryGetTwapsResponseAmino;
    fromAminoMsg(object: QueryGetTwapsResponseAminoMsg): QueryGetTwapsResponse;
    fromProtoMsg(message: QueryGetTwapsResponseProtoMsg): QueryGetTwapsResponse;
    toProto(message: QueryGetTwapsResponse): Uint8Array;
    toProtoMsg(message: QueryGetTwapsResponse): QueryGetTwapsResponseProtoMsg;
};
export declare const QueryAssetListRequest: {
    typeUrl: string;
    encode(_: QueryAssetListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetListRequest;
    fromJSON(_: any): QueryAssetListRequest;
    toJSON(_: QueryAssetListRequest): unknown;
    fromPartial(_: Partial<QueryAssetListRequest>): QueryAssetListRequest;
    fromAmino(_: QueryAssetListRequestAmino): QueryAssetListRequest;
    toAmino(_: QueryAssetListRequest): QueryAssetListRequestAmino;
    fromAminoMsg(object: QueryAssetListRequestAminoMsg): QueryAssetListRequest;
    fromProtoMsg(message: QueryAssetListRequestProtoMsg): QueryAssetListRequest;
    toProto(message: QueryAssetListRequest): Uint8Array;
    toProtoMsg(message: QueryAssetListRequest): QueryAssetListRequestProtoMsg;
};
export declare const QueryAssetListResponse: {
    typeUrl: string;
    encode(message: QueryAssetListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetListResponse;
    fromJSON(object: any): QueryAssetListResponse;
    toJSON(message: QueryAssetListResponse): unknown;
    fromPartial(object: Partial<QueryAssetListResponse>): QueryAssetListResponse;
    fromAmino(object: QueryAssetListResponseAmino): QueryAssetListResponse;
    toAmino(message: QueryAssetListResponse): QueryAssetListResponseAmino;
    fromAminoMsg(object: QueryAssetListResponseAminoMsg): QueryAssetListResponse;
    fromProtoMsg(message: QueryAssetListResponseProtoMsg): QueryAssetListResponse;
    toProto(message: QueryAssetListResponse): Uint8Array;
    toProtoMsg(message: QueryAssetListResponse): QueryAssetListResponseProtoMsg;
};
export declare const QueryAssetMetadataRequest: {
    typeUrl: string;
    encode(message: QueryAssetMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMetadataRequest;
    fromJSON(object: any): QueryAssetMetadataRequest;
    toJSON(message: QueryAssetMetadataRequest): unknown;
    fromPartial(object: Partial<QueryAssetMetadataRequest>): QueryAssetMetadataRequest;
    fromAmino(object: QueryAssetMetadataRequestAmino): QueryAssetMetadataRequest;
    toAmino(message: QueryAssetMetadataRequest): QueryAssetMetadataRequestAmino;
    fromAminoMsg(object: QueryAssetMetadataRequestAminoMsg): QueryAssetMetadataRequest;
    fromProtoMsg(message: QueryAssetMetadataRequestProtoMsg): QueryAssetMetadataRequest;
    toProto(message: QueryAssetMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryAssetMetadataRequest): QueryAssetMetadataRequestProtoMsg;
};
export declare const QueryAssetMetadataResponse: {
    typeUrl: string;
    encode(message: QueryAssetMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMetadataResponse;
    fromJSON(object: any): QueryAssetMetadataResponse;
    toJSON(message: QueryAssetMetadataResponse): unknown;
    fromPartial(object: Partial<QueryAssetMetadataResponse>): QueryAssetMetadataResponse;
    fromAmino(object: QueryAssetMetadataResponseAmino): QueryAssetMetadataResponse;
    toAmino(message: QueryAssetMetadataResponse): QueryAssetMetadataResponseAmino;
    fromAminoMsg(object: QueryAssetMetadataResponseAminoMsg): QueryAssetMetadataResponse;
    fromProtoMsg(message: QueryAssetMetadataResponseProtoMsg): QueryAssetMetadataResponse;
    toProto(message: QueryAssetMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryAssetMetadataResponse): QueryAssetMetadataResponseProtoMsg;
};
export declare const QueryRegisteredPairsRequest: {
    typeUrl: string;
    encode(message: QueryRegisteredPairsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredPairsRequest;
    fromJSON(object: any): QueryRegisteredPairsRequest;
    toJSON(message: QueryRegisteredPairsRequest): unknown;
    fromPartial(object: Partial<QueryRegisteredPairsRequest>): QueryRegisteredPairsRequest;
    fromAmino(object: QueryRegisteredPairsRequestAmino): QueryRegisteredPairsRequest;
    toAmino(message: QueryRegisteredPairsRequest): QueryRegisteredPairsRequestAmino;
    fromAminoMsg(object: QueryRegisteredPairsRequestAminoMsg): QueryRegisteredPairsRequest;
    fromProtoMsg(message: QueryRegisteredPairsRequestProtoMsg): QueryRegisteredPairsRequest;
    toProto(message: QueryRegisteredPairsRequest): Uint8Array;
    toProtoMsg(message: QueryRegisteredPairsRequest): QueryRegisteredPairsRequestProtoMsg;
};
export declare const QueryRegisteredPairsResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredPairsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredPairsResponse;
    fromJSON(object: any): QueryRegisteredPairsResponse;
    toJSON(message: QueryRegisteredPairsResponse): unknown;
    fromPartial(object: Partial<QueryRegisteredPairsResponse>): QueryRegisteredPairsResponse;
    fromAmino(object: QueryRegisteredPairsResponseAmino): QueryRegisteredPairsResponse;
    toAmino(message: QueryRegisteredPairsResponse): QueryRegisteredPairsResponseAmino;
    fromAminoMsg(object: QueryRegisteredPairsResponseAminoMsg): QueryRegisteredPairsResponse;
    fromProtoMsg(message: QueryRegisteredPairsResponseProtoMsg): QueryRegisteredPairsResponse;
    toProto(message: QueryRegisteredPairsResponse): Uint8Array;
    toProtoMsg(message: QueryRegisteredPairsResponse): QueryRegisteredPairsResponseProtoMsg;
};
export declare const QueryRegisteredContractRequest: {
    typeUrl: string;
    encode(message: QueryRegisteredContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredContractRequest;
    fromJSON(object: any): QueryRegisteredContractRequest;
    toJSON(message: QueryRegisteredContractRequest): unknown;
    fromPartial(object: Partial<QueryRegisteredContractRequest>): QueryRegisteredContractRequest;
    fromAmino(object: QueryRegisteredContractRequestAmino): QueryRegisteredContractRequest;
    toAmino(message: QueryRegisteredContractRequest): QueryRegisteredContractRequestAmino;
    fromAminoMsg(object: QueryRegisteredContractRequestAminoMsg): QueryRegisteredContractRequest;
    fromProtoMsg(message: QueryRegisteredContractRequestProtoMsg): QueryRegisteredContractRequest;
    toProto(message: QueryRegisteredContractRequest): Uint8Array;
    toProtoMsg(message: QueryRegisteredContractRequest): QueryRegisteredContractRequestProtoMsg;
};
export declare const QueryRegisteredContractResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredContractResponse;
    fromJSON(object: any): QueryRegisteredContractResponse;
    toJSON(message: QueryRegisteredContractResponse): unknown;
    fromPartial(object: Partial<QueryRegisteredContractResponse>): QueryRegisteredContractResponse;
    fromAmino(object: QueryRegisteredContractResponseAmino): QueryRegisteredContractResponse;
    toAmino(message: QueryRegisteredContractResponse): QueryRegisteredContractResponseAmino;
    fromAminoMsg(object: QueryRegisteredContractResponseAminoMsg): QueryRegisteredContractResponse;
    fromProtoMsg(message: QueryRegisteredContractResponseProtoMsg): QueryRegisteredContractResponse;
    toProto(message: QueryRegisteredContractResponse): Uint8Array;
    toProtoMsg(message: QueryRegisteredContractResponse): QueryRegisteredContractResponseProtoMsg;
};
export declare const QueryGetOrdersRequest: {
    typeUrl: string;
    encode(message: QueryGetOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrdersRequest;
    fromJSON(object: any): QueryGetOrdersRequest;
    toJSON(message: QueryGetOrdersRequest): unknown;
    fromPartial(object: Partial<QueryGetOrdersRequest>): QueryGetOrdersRequest;
    fromAmino(object: QueryGetOrdersRequestAmino): QueryGetOrdersRequest;
    toAmino(message: QueryGetOrdersRequest): QueryGetOrdersRequestAmino;
    fromAminoMsg(object: QueryGetOrdersRequestAminoMsg): QueryGetOrdersRequest;
    fromProtoMsg(message: QueryGetOrdersRequestProtoMsg): QueryGetOrdersRequest;
    toProto(message: QueryGetOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryGetOrdersRequest): QueryGetOrdersRequestProtoMsg;
};
export declare const QueryGetOrdersResponse: {
    typeUrl: string;
    encode(message: QueryGetOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrdersResponse;
    fromJSON(object: any): QueryGetOrdersResponse;
    toJSON(message: QueryGetOrdersResponse): unknown;
    fromPartial(object: Partial<QueryGetOrdersResponse>): QueryGetOrdersResponse;
    fromAmino(object: QueryGetOrdersResponseAmino): QueryGetOrdersResponse;
    toAmino(message: QueryGetOrdersResponse): QueryGetOrdersResponseAmino;
    fromAminoMsg(object: QueryGetOrdersResponseAminoMsg): QueryGetOrdersResponse;
    fromProtoMsg(message: QueryGetOrdersResponseProtoMsg): QueryGetOrdersResponse;
    toProto(message: QueryGetOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryGetOrdersResponse): QueryGetOrdersResponseProtoMsg;
};
export declare const QueryGetOrderByIDRequest: {
    typeUrl: string;
    encode(message: QueryGetOrderByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderByIDRequest;
    fromJSON(object: any): QueryGetOrderByIDRequest;
    toJSON(message: QueryGetOrderByIDRequest): unknown;
    fromPartial(object: Partial<QueryGetOrderByIDRequest>): QueryGetOrderByIDRequest;
    fromAmino(object: QueryGetOrderByIDRequestAmino): QueryGetOrderByIDRequest;
    toAmino(message: QueryGetOrderByIDRequest): QueryGetOrderByIDRequestAmino;
    fromAminoMsg(object: QueryGetOrderByIDRequestAminoMsg): QueryGetOrderByIDRequest;
    fromProtoMsg(message: QueryGetOrderByIDRequestProtoMsg): QueryGetOrderByIDRequest;
    toProto(message: QueryGetOrderByIDRequest): Uint8Array;
    toProtoMsg(message: QueryGetOrderByIDRequest): QueryGetOrderByIDRequestProtoMsg;
};
export declare const QueryGetOrderByIDResponse: {
    typeUrl: string;
    encode(message: QueryGetOrderByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderByIDResponse;
    fromJSON(object: any): QueryGetOrderByIDResponse;
    toJSON(message: QueryGetOrderByIDResponse): unknown;
    fromPartial(object: Partial<QueryGetOrderByIDResponse>): QueryGetOrderByIDResponse;
    fromAmino(object: QueryGetOrderByIDResponseAmino): QueryGetOrderByIDResponse;
    toAmino(message: QueryGetOrderByIDResponse): QueryGetOrderByIDResponseAmino;
    fromAminoMsg(object: QueryGetOrderByIDResponseAminoMsg): QueryGetOrderByIDResponse;
    fromProtoMsg(message: QueryGetOrderByIDResponseProtoMsg): QueryGetOrderByIDResponse;
    toProto(message: QueryGetOrderByIDResponse): Uint8Array;
    toProtoMsg(message: QueryGetOrderByIDResponse): QueryGetOrderByIDResponseProtoMsg;
};
export declare const QueryGetHistoricalPricesRequest: {
    typeUrl: string;
    encode(message: QueryGetHistoricalPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoricalPricesRequest;
    fromJSON(object: any): QueryGetHistoricalPricesRequest;
    toJSON(message: QueryGetHistoricalPricesRequest): unknown;
    fromPartial(object: Partial<QueryGetHistoricalPricesRequest>): QueryGetHistoricalPricesRequest;
    fromAmino(object: QueryGetHistoricalPricesRequestAmino): QueryGetHistoricalPricesRequest;
    toAmino(message: QueryGetHistoricalPricesRequest): QueryGetHistoricalPricesRequestAmino;
    fromAminoMsg(object: QueryGetHistoricalPricesRequestAminoMsg): QueryGetHistoricalPricesRequest;
    fromProtoMsg(message: QueryGetHistoricalPricesRequestProtoMsg): QueryGetHistoricalPricesRequest;
    toProto(message: QueryGetHistoricalPricesRequest): Uint8Array;
    toProtoMsg(message: QueryGetHistoricalPricesRequest): QueryGetHistoricalPricesRequestProtoMsg;
};
export declare const QueryGetHistoricalPricesResponse: {
    typeUrl: string;
    encode(message: QueryGetHistoricalPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoricalPricesResponse;
    fromJSON(object: any): QueryGetHistoricalPricesResponse;
    toJSON(message: QueryGetHistoricalPricesResponse): unknown;
    fromPartial(object: Partial<QueryGetHistoricalPricesResponse>): QueryGetHistoricalPricesResponse;
    fromAmino(object: QueryGetHistoricalPricesResponseAmino): QueryGetHistoricalPricesResponse;
    toAmino(message: QueryGetHistoricalPricesResponse): QueryGetHistoricalPricesResponseAmino;
    fromAminoMsg(object: QueryGetHistoricalPricesResponseAminoMsg): QueryGetHistoricalPricesResponse;
    fromProtoMsg(message: QueryGetHistoricalPricesResponseProtoMsg): QueryGetHistoricalPricesResponse;
    toProto(message: QueryGetHistoricalPricesResponse): Uint8Array;
    toProtoMsg(message: QueryGetHistoricalPricesResponse): QueryGetHistoricalPricesResponseProtoMsg;
};
export declare const QueryGetMarketSummaryRequest: {
    typeUrl: string;
    encode(message: QueryGetMarketSummaryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketSummaryRequest;
    fromJSON(object: any): QueryGetMarketSummaryRequest;
    toJSON(message: QueryGetMarketSummaryRequest): unknown;
    fromPartial(object: Partial<QueryGetMarketSummaryRequest>): QueryGetMarketSummaryRequest;
    fromAmino(object: QueryGetMarketSummaryRequestAmino): QueryGetMarketSummaryRequest;
    toAmino(message: QueryGetMarketSummaryRequest): QueryGetMarketSummaryRequestAmino;
    fromAminoMsg(object: QueryGetMarketSummaryRequestAminoMsg): QueryGetMarketSummaryRequest;
    fromProtoMsg(message: QueryGetMarketSummaryRequestProtoMsg): QueryGetMarketSummaryRequest;
    toProto(message: QueryGetMarketSummaryRequest): Uint8Array;
    toProtoMsg(message: QueryGetMarketSummaryRequest): QueryGetMarketSummaryRequestProtoMsg;
};
export declare const QueryGetMarketSummaryResponse: {
    typeUrl: string;
    encode(message: QueryGetMarketSummaryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketSummaryResponse;
    fromJSON(object: any): QueryGetMarketSummaryResponse;
    toJSON(message: QueryGetMarketSummaryResponse): unknown;
    fromPartial(object: Partial<QueryGetMarketSummaryResponse>): QueryGetMarketSummaryResponse;
    fromAmino(object: QueryGetMarketSummaryResponseAmino): QueryGetMarketSummaryResponse;
    toAmino(message: QueryGetMarketSummaryResponse): QueryGetMarketSummaryResponseAmino;
    fromAminoMsg(object: QueryGetMarketSummaryResponseAminoMsg): QueryGetMarketSummaryResponse;
    fromProtoMsg(message: QueryGetMarketSummaryResponseProtoMsg): QueryGetMarketSummaryResponse;
    toProto(message: QueryGetMarketSummaryResponse): Uint8Array;
    toProtoMsg(message: QueryGetMarketSummaryResponse): QueryGetMarketSummaryResponseProtoMsg;
};
export declare const QueryOrderSimulationRequest: {
    typeUrl: string;
    encode(message: QueryOrderSimulationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderSimulationRequest;
    fromJSON(object: any): QueryOrderSimulationRequest;
    toJSON(message: QueryOrderSimulationRequest): unknown;
    fromPartial(object: Partial<QueryOrderSimulationRequest>): QueryOrderSimulationRequest;
    fromAmino(object: QueryOrderSimulationRequestAmino): QueryOrderSimulationRequest;
    toAmino(message: QueryOrderSimulationRequest): QueryOrderSimulationRequestAmino;
    fromAminoMsg(object: QueryOrderSimulationRequestAminoMsg): QueryOrderSimulationRequest;
    fromProtoMsg(message: QueryOrderSimulationRequestProtoMsg): QueryOrderSimulationRequest;
    toProto(message: QueryOrderSimulationRequest): Uint8Array;
    toProtoMsg(message: QueryOrderSimulationRequest): QueryOrderSimulationRequestProtoMsg;
};
export declare const QueryOrderSimulationResponse: {
    typeUrl: string;
    encode(message: QueryOrderSimulationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderSimulationResponse;
    fromJSON(object: any): QueryOrderSimulationResponse;
    toJSON(message: QueryOrderSimulationResponse): unknown;
    fromPartial(object: Partial<QueryOrderSimulationResponse>): QueryOrderSimulationResponse;
    fromAmino(object: QueryOrderSimulationResponseAmino): QueryOrderSimulationResponse;
    toAmino(message: QueryOrderSimulationResponse): QueryOrderSimulationResponseAmino;
    fromAminoMsg(object: QueryOrderSimulationResponseAminoMsg): QueryOrderSimulationResponse;
    fromProtoMsg(message: QueryOrderSimulationResponseProtoMsg): QueryOrderSimulationResponse;
    toProto(message: QueryOrderSimulationResponse): Uint8Array;
    toProtoMsg(message: QueryOrderSimulationResponse): QueryOrderSimulationResponseProtoMsg;
};
export declare const QueryGetMatchResultRequest: {
    typeUrl: string;
    encode(message: QueryGetMatchResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMatchResultRequest;
    fromJSON(object: any): QueryGetMatchResultRequest;
    toJSON(message: QueryGetMatchResultRequest): unknown;
    fromPartial(object: Partial<QueryGetMatchResultRequest>): QueryGetMatchResultRequest;
    fromAmino(object: QueryGetMatchResultRequestAmino): QueryGetMatchResultRequest;
    toAmino(message: QueryGetMatchResultRequest): QueryGetMatchResultRequestAmino;
    fromAminoMsg(object: QueryGetMatchResultRequestAminoMsg): QueryGetMatchResultRequest;
    fromProtoMsg(message: QueryGetMatchResultRequestProtoMsg): QueryGetMatchResultRequest;
    toProto(message: QueryGetMatchResultRequest): Uint8Array;
    toProtoMsg(message: QueryGetMatchResultRequest): QueryGetMatchResultRequestProtoMsg;
};
export declare const QueryGetMatchResultResponse: {
    typeUrl: string;
    encode(message: QueryGetMatchResultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMatchResultResponse;
    fromJSON(object: any): QueryGetMatchResultResponse;
    toJSON(message: QueryGetMatchResultResponse): unknown;
    fromPartial(object: Partial<QueryGetMatchResultResponse>): QueryGetMatchResultResponse;
    fromAmino(object: QueryGetMatchResultResponseAmino): QueryGetMatchResultResponse;
    toAmino(message: QueryGetMatchResultResponse): QueryGetMatchResultResponseAmino;
    fromAminoMsg(object: QueryGetMatchResultResponseAminoMsg): QueryGetMatchResultResponse;
    fromProtoMsg(message: QueryGetMatchResultResponseProtoMsg): QueryGetMatchResultResponse;
    toProto(message: QueryGetMatchResultResponse): Uint8Array;
    toProtoMsg(message: QueryGetMatchResultResponse): QueryGetMatchResultResponseProtoMsg;
};
export declare const QueryGetOrderCountRequest: {
    typeUrl: string;
    encode(message: QueryGetOrderCountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderCountRequest;
    fromJSON(object: any): QueryGetOrderCountRequest;
    toJSON(message: QueryGetOrderCountRequest): unknown;
    fromPartial(object: Partial<QueryGetOrderCountRequest>): QueryGetOrderCountRequest;
    fromAmino(object: QueryGetOrderCountRequestAmino): QueryGetOrderCountRequest;
    toAmino(message: QueryGetOrderCountRequest): QueryGetOrderCountRequestAmino;
    fromAminoMsg(object: QueryGetOrderCountRequestAminoMsg): QueryGetOrderCountRequest;
    fromProtoMsg(message: QueryGetOrderCountRequestProtoMsg): QueryGetOrderCountRequest;
    toProto(message: QueryGetOrderCountRequest): Uint8Array;
    toProtoMsg(message: QueryGetOrderCountRequest): QueryGetOrderCountRequestProtoMsg;
};
export declare const QueryGetOrderCountResponse: {
    typeUrl: string;
    encode(message: QueryGetOrderCountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderCountResponse;
    fromJSON(object: any): QueryGetOrderCountResponse;
    toJSON(message: QueryGetOrderCountResponse): unknown;
    fromPartial(object: Partial<QueryGetOrderCountResponse>): QueryGetOrderCountResponse;
    fromAmino(object: QueryGetOrderCountResponseAmino): QueryGetOrderCountResponse;
    toAmino(message: QueryGetOrderCountResponse): QueryGetOrderCountResponseAmino;
    fromAminoMsg(object: QueryGetOrderCountResponseAminoMsg): QueryGetOrderCountResponse;
    fromProtoMsg(message: QueryGetOrderCountResponseProtoMsg): QueryGetOrderCountResponse;
    toProto(message: QueryGetOrderCountResponse): Uint8Array;
    toProtoMsg(message: QueryGetOrderCountResponse): QueryGetOrderCountResponseProtoMsg;
};
