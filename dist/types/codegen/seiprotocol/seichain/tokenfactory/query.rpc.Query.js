import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
        this.denomsFromCreator = this.denomsFromCreator.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    denomAuthorityMetadata(request) {
        const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Query", "DenomAuthorityMetadata", data);
        return promise.then(data => QueryDenomAuthorityMetadataResponse.decode(new _m0.Reader(data)));
    }
    denomsFromCreator(request) {
        const data = QueryDenomsFromCreatorRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Query", "DenomsFromCreator", data);
        return promise.then(data => QueryDenomsFromCreatorResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        denomAuthorityMetadata(request) {
            return queryService.denomAuthorityMetadata(request);
        },
        denomsFromCreator(request) {
            return queryService.denomsFromCreator(request);
        }
    };
};
