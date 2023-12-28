export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.resourceDependencyMappingFromMessageKey = this.resourceDependencyMappingFromMessageKey.bind(this);
        this.listResourceDependencyMapping = this.listResourceDependencyMapping.bind(this);
        this.wasmDependencyMapping = this.wasmDependencyMapping.bind(this);
        this.listWasmDependencyMapping = this.listWasmDependencyMapping.bind(this);
    }
    /* Params */
    async params(_params = {}) {
        const endpoint = `cosmos/cosmos-sdk/accesscontrol/params`;
        return await this.req.get(endpoint);
    }
    /* ResourceDependencyMappingFromMessageKey */
    async resourceDependencyMappingFromMessageKey(params) {
        const endpoint = `cosmos/cosmos-sdk/accesscontrol/resource_dependency_mapping_from_message_key/${params.messageKey}`;
        return await this.req.get(endpoint);
    }
    /* ListResourceDependencyMapping */
    async listResourceDependencyMapping(_params = {}) {
        const endpoint = `cosmos/cosmos-sdk/accesscontrol/list_resource_dependency_mapping`;
        return await this.req.get(endpoint);
    }
    /* WasmDependencyMapping */
    async wasmDependencyMapping(params) {
        const endpoint = `cosmos/cosmos-sdk/accesscontrol/wasm_dependency_mapping/${params.contractAddress}`;
        return await this.req.get(endpoint);
    }
    /* ListWasmDependencyMapping */
    async listWasmDependencyMapping(_params = {}) {
        const endpoint = `cosmos/cosmos-sdk/accesscontrol/list_wasm_dependency_mapping`;
        return await this.req.get(endpoint);
    }
}
