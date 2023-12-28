import { LCDClient } from "@cosmology/lcd";
import { QueryAccountsRequest, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryNextAccountNumberRequest, QueryNextAccountNumberResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    accounts(params?: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
    account(params: QueryAccountRequest): Promise<QueryAccountResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    nextAccountNumber(_params?: QueryNextAccountNumberRequest): Promise<QueryNextAccountNumberResponseSDKType>;
}
