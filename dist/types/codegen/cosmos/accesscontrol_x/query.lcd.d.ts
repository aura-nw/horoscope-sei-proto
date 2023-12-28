import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, ResourceDependencyMappingFromMessageKeyRequest, ResourceDependencyMappingFromMessageKeyResponseSDKType, ListResourceDependencyMappingRequest, ListResourceDependencyMappingResponseSDKType, WasmDependencyMappingRequest, WasmDependencyMappingResponseSDKType, ListWasmDependencyMappingRequest, ListWasmDependencyMappingResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    resourceDependencyMappingFromMessageKey(params: ResourceDependencyMappingFromMessageKeyRequest): Promise<ResourceDependencyMappingFromMessageKeyResponseSDKType>;
    listResourceDependencyMapping(_params?: ListResourceDependencyMappingRequest): Promise<ListResourceDependencyMappingResponseSDKType>;
    wasmDependencyMapping(params: WasmDependencyMappingRequest): Promise<WasmDependencyMappingResponseSDKType>;
    listWasmDependencyMapping(_params?: ListWasmDependencyMappingRequest): Promise<ListWasmDependencyMappingResponseSDKType>;
}
