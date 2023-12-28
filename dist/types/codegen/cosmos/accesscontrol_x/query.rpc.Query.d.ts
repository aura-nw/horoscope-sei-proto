import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, ResourceDependencyMappingFromMessageKeyRequest, ResourceDependencyMappingFromMessageKeyResponse, ListResourceDependencyMappingRequest, ListResourceDependencyMappingResponse, WasmDependencyMappingRequest, WasmDependencyMappingResponse, ListWasmDependencyMappingRequest, ListWasmDependencyMappingResponse } from "./query";
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    resourceDependencyMappingFromMessageKey(request: ResourceDependencyMappingFromMessageKeyRequest): Promise<ResourceDependencyMappingFromMessageKeyResponse>;
    listResourceDependencyMapping(request?: ListResourceDependencyMappingRequest): Promise<ListResourceDependencyMappingResponse>;
    wasmDependencyMapping(request: WasmDependencyMappingRequest): Promise<WasmDependencyMappingResponse>;
    listWasmDependencyMapping(request?: ListWasmDependencyMappingRequest): Promise<ListWasmDependencyMappingResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    resourceDependencyMappingFromMessageKey(request: ResourceDependencyMappingFromMessageKeyRequest): Promise<ResourceDependencyMappingFromMessageKeyResponse>;
    listResourceDependencyMapping(request?: ListResourceDependencyMappingRequest): Promise<ListResourceDependencyMappingResponse>;
    wasmDependencyMapping(request: WasmDependencyMappingRequest): Promise<WasmDependencyMappingResponse>;
    listWasmDependencyMapping(request?: ListWasmDependencyMappingRequest): Promise<ListWasmDependencyMappingResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    resourceDependencyMappingFromMessageKey(request: ResourceDependencyMappingFromMessageKeyRequest): Promise<ResourceDependencyMappingFromMessageKeyResponse>;
    listResourceDependencyMapping(request?: ListResourceDependencyMappingRequest): Promise<ListResourceDependencyMappingResponse>;
    wasmDependencyMapping(request: WasmDependencyMappingRequest): Promise<WasmDependencyMappingResponse>;
    listWasmDependencyMapping(request?: ListWasmDependencyMappingRequest): Promise<ListWasmDependencyMappingResponse>;
};
