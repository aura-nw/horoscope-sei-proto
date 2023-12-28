import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, ResourceDependencyMappingFromMessageKeyRequest, ResourceDependencyMappingFromMessageKeyResponse, ListResourceDependencyMappingRequest, ListResourceDependencyMappingResponse, WasmDependencyMappingRequest, WasmDependencyMappingResponse, ListWasmDependencyMappingRequest, ListWasmDependencyMappingResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.resourceDependencyMappingFromMessageKey = this.resourceDependencyMappingFromMessageKey.bind(this);
        this.listResourceDependencyMapping = this.listResourceDependencyMapping.bind(this);
        this.wasmDependencyMapping = this.wasmDependencyMapping.bind(this);
        this.listWasmDependencyMapping = this.listWasmDependencyMapping.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    resourceDependencyMappingFromMessageKey(request) {
        const data = ResourceDependencyMappingFromMessageKeyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "ResourceDependencyMappingFromMessageKey", data);
        return promise.then(data => ResourceDependencyMappingFromMessageKeyResponse.decode(new _m0.Reader(data)));
    }
    listResourceDependencyMapping(request = {}) {
        const data = ListResourceDependencyMappingRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "ListResourceDependencyMapping", data);
        return promise.then(data => ListResourceDependencyMappingResponse.decode(new _m0.Reader(data)));
    }
    wasmDependencyMapping(request) {
        const data = WasmDependencyMappingRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "WasmDependencyMapping", data);
        return promise.then(data => WasmDependencyMappingResponse.decode(new _m0.Reader(data)));
    }
    listWasmDependencyMapping(request = {}) {
        const data = ListWasmDependencyMappingRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "ListWasmDependencyMapping", data);
        return promise.then(data => ListWasmDependencyMappingResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        resourceDependencyMappingFromMessageKey(request) {
            return queryService.resourceDependencyMappingFromMessageKey(request);
        },
        listResourceDependencyMapping(request) {
            return queryService.listResourceDependencyMapping(request);
        },
        wasmDependencyMapping(request) {
            return queryService.wasmDependencyMapping(request);
        },
        listWasmDependencyMapping(request) {
            return queryService.listWasmDependencyMapping(request);
        }
    };
};
