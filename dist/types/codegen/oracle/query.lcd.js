export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.exchangeRate = this.exchangeRate.bind(this);
        this.exchangeRates = this.exchangeRates.bind(this);
        this.actives = this.actives.bind(this);
        this.voteTargets = this.voteTargets.bind(this);
        this.priceSnapshotHistory = this.priceSnapshotHistory.bind(this);
        this.twaps = this.twaps.bind(this);
        this.feederDelegation = this.feederDelegation.bind(this);
        this.votePenaltyCounter = this.votePenaltyCounter.bind(this);
        this.slashWindow = this.slashWindow.bind(this);
        this.params = this.params.bind(this);
    }
    /* ExchangeRate returns exchange rate of a denom */
    async exchangeRate(params) {
        const endpoint = `sei-protocol/sei-chain/oracle/denoms/${params.denom}/exchange_rate`;
        return await this.req.get(endpoint);
    }
    /* ExchangeRates returns exchange rates of all denoms */
    async exchangeRates(_params = {}) {
        const endpoint = `sei-protocol/sei-chain/oracle/denoms/exchange_rates`;
        return await this.req.get(endpoint);
    }
    /* Actives returns all active denoms */
    async actives(_params = {}) {
        const endpoint = `sei-protocol/sei-chain/oracle/denoms/actives`;
        return await this.req.get(endpoint);
    }
    /* VoteTargets returns all vote target denoms */
    async voteTargets(_params = {}) {
        const endpoint = `sei-protocol/sei-chain/oracle/denoms/vote_targets`;
        return await this.req.get(endpoint);
    }
    /* PriceSnapshotHistory returns the history of price snapshots for all assets */
    async priceSnapshotHistory(_params = {}) {
        const endpoint = `sei-protocol/sei-chain/oracle/denoms/price_snapshot_history`;
        return await this.req.get(endpoint);
    }
    /* Twaps */
    async twaps(params) {
        const endpoint = `sei-protocol/sei-chain/oracle/denoms/twaps/${params.lookbackSeconds}`;
        return await this.req.get(endpoint);
    }
    /* FeederDelegation returns feeder delegation of a validator */
    async feederDelegation(params) {
        const endpoint = `sei-protocol/sei-chain/oracle/validators/${params.validatorAddr}/feeder`;
        return await this.req.get(endpoint);
    }
    /* MissCounter returns oracle miss counter of a validator */
    async votePenaltyCounter(params) {
        const endpoint = `sei-protocol/sei-chain/oracle/validators/${params.validatorAddr}/vote_penalty_counter`;
        return await this.req.get(endpoint);
    }
    /* SlashWindow returns slash window information */
    async slashWindow(_params = {}) {
        const endpoint = `sei-protocol/sei-chain/oracle/slash_window`;
        return await this.req.get(endpoint);
    }
    /* Params queries all parameters. */
    async params(_params = {}) {
        const endpoint = `sei-protocol/sei-chain/oracle/params`;
        return await this.req.get(endpoint);
    }
}
