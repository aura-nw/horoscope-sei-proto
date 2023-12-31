import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryNextAccountNumberRequest, QueryNextAccountNumberResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** NextAccountNumber queries the next account number assigned */
    nextAccountNumber(request?: QueryNextAccountNumberRequest): Promise<QueryNextAccountNumberResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    nextAccountNumber(request?: QueryNextAccountNumberRequest): Promise<QueryNextAccountNumberResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    nextAccountNumber(request?: QueryNextAccountNumberRequest): Promise<QueryNextAccountNumberResponse>;
};
