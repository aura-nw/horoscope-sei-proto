import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
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
    /* ContractInfo gets the contract meta data */
    async contractInfo(params) {
        const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* ContractHistory gets the contract code history */
    async contractHistory(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
        return await this.req.get(endpoint, options);
    }
    /* ContractsByCode lists all smart contracts for a code id */
    async contractsByCode(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}/contracts`;
        return await this.req.get(endpoint, options);
    }
    /* AllContractState gets all raw store data for a single contract */
    async allContractState(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
        return await this.req.get(endpoint, options);
    }
    /* RawContractState gets single key from the raw store data of a contract */
    async rawContractState(params) {
        const endpoint = `wasm/v1/contract/${params.address}/raw/${params.queryData}`;
        return await this.req.get(endpoint);
    }
    /* SmartContractState get smart query result from the contract */
    async smartContractState(params) {
        const endpoint = `wasm/v1/contract/${params.address}/smart/${params.queryData}`;
        return await this.req.get(endpoint);
    }
    /* Code gets the binary code and metadata for a singe wasm code */
    async code(params) {
        const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}`;
        return await this.req.get(endpoint);
    }
    /* Codes gets the metadata for all stored wasm codes */
    async codes(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmwasm/wasm/v1/code`;
        return await this.req.get(endpoint, options);
    }
    /* PinnedCodes gets the pinned code ids */
    async pinnedCodes(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
        return await this.req.get(endpoint, options);
    }
}
