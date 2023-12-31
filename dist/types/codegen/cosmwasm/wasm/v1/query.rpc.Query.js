import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.contractInfo = this.contractInfo.bind(this);
        this.contractHistory = this.contractHistory.bind(this);
        this.contractsByCode = this.contractsByCode.bind(this);
        this.allContractState = this.allContractState.bind(this);
        this.rawContractState = this.rawContractState.bind(this);
        this.smartContractState = this.smartContractState.bind(this);
        this.code = this.code.bind(this);
        this.codes = this.codes.bind(this);
        this.pinnedCodes = this.pinnedCodes.bind(this);
    }
    contractInfo(request) {
        const data = QueryContractInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
        return promise.then(data => QueryContractInfoResponse.decode(new _m0.Reader(data)));
    }
    contractHistory(request) {
        const data = QueryContractHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
        return promise.then(data => QueryContractHistoryResponse.decode(new _m0.Reader(data)));
    }
    contractsByCode(request) {
        const data = QueryContractsByCodeRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
        return promise.then(data => QueryContractsByCodeResponse.decode(new _m0.Reader(data)));
    }
    allContractState(request) {
        const data = QueryAllContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
        return promise.then(data => QueryAllContractStateResponse.decode(new _m0.Reader(data)));
    }
    rawContractState(request) {
        const data = QueryRawContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
        return promise.then(data => QueryRawContractStateResponse.decode(new _m0.Reader(data)));
    }
    smartContractState(request) {
        const data = QuerySmartContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
        return promise.then(data => QuerySmartContractStateResponse.decode(new _m0.Reader(data)));
    }
    code(request) {
        const data = QueryCodeRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
        return promise.then(data => QueryCodeResponse.decode(new _m0.Reader(data)));
    }
    codes(request = {
        pagination: undefined
    }) {
        const data = QueryCodesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
        return promise.then(data => QueryCodesResponse.decode(new _m0.Reader(data)));
    }
    pinnedCodes(request = {
        pagination: undefined
    }) {
        const data = QueryPinnedCodesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
        return promise.then(data => QueryPinnedCodesResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        contractInfo(request) {
            return queryService.contractInfo(request);
        },
        contractHistory(request) {
            return queryService.contractHistory(request);
        },
        contractsByCode(request) {
            return queryService.contractsByCode(request);
        },
        allContractState(request) {
            return queryService.allContractState(request);
        },
        rawContractState(request) {
            return queryService.rawContractState(request);
        },
        smartContractState(request) {
            return queryService.smartContractState(request);
        },
        code(request) {
            return queryService.code(request);
        },
        codes(request) {
            return queryService.codes(request);
        },
        pinnedCodes(request) {
            return queryService.pinnedCodes(request);
        }
    };
};
