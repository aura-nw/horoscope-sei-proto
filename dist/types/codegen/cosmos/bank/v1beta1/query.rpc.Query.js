import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.balance = this.balance.bind(this);
        this.allBalances = this.allBalances.bind(this);
        this.spendableBalances = this.spendableBalances.bind(this);
        this.totalSupply = this.totalSupply.bind(this);
        this.supplyOf = this.supplyOf.bind(this);
        this.params = this.params.bind(this);
        this.denomMetadata = this.denomMetadata.bind(this);
        this.denomsMetadata = this.denomsMetadata.bind(this);
    }
    balance(request) {
        const data = QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
        return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
    }
    allBalances(request) {
        const data = QueryAllBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
        return promise.then(data => QueryAllBalancesResponse.decode(new _m0.Reader(data)));
    }
    spendableBalances(request) {
        const data = QuerySpendableBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
        return promise.then(data => QuerySpendableBalancesResponse.decode(new _m0.Reader(data)));
    }
    totalSupply(request = {
        pagination: undefined
    }) {
        const data = QueryTotalSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
        return promise.then(data => QueryTotalSupplyResponse.decode(new _m0.Reader(data)));
    }
    supplyOf(request) {
        const data = QuerySupplyOfRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
        return promise.then(data => QuerySupplyOfResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    denomMetadata(request) {
        const data = QueryDenomMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
        return promise.then(data => QueryDenomMetadataResponse.decode(new _m0.Reader(data)));
    }
    denomsMetadata(request = {
        pagination: undefined
    }) {
        const data = QueryDenomsMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
        return promise.then(data => QueryDenomsMetadataResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        balance(request) {
            return queryService.balance(request);
        },
        allBalances(request) {
            return queryService.allBalances(request);
        },
        spendableBalances(request) {
            return queryService.spendableBalances(request);
        },
        totalSupply(request) {
            return queryService.totalSupply(request);
        },
        supplyOf(request) {
            return queryService.supplyOf(request);
        },
        params(request) {
            return queryService.params(request);
        },
        denomMetadata(request) {
            return queryService.denomMetadata(request);
        },
        denomsMetadata(request) {
            return queryService.denomsMetadata(request);
        }
    };
};
