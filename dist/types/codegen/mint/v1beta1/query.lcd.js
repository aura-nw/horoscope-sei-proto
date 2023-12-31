export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.minter = this.minter.bind(this);
    }
    /* Params returns the total set of minting parameters. */
    async params(_params = {}) {
        const endpoint = `seichain/mint/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* EpochProvisions current minting epoch provisions value. */
    async minter(_params = {}) {
        const endpoint = `seichain/mint/v1beta1/minter`;
        return await this.req.get(endpoint);
    }
}
