import { MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export const registry = [["/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote", MsgAggregateExchangeRateVote], ["/seiprotocol.seichain.oracle.MsgDelegateFeedConsent", MsgDelegateFeedConsent]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote",
                value: MsgAggregateExchangeRateVote.encode(value).finish()
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent",
                value: MsgDelegateFeedConsent.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote",
                value
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent",
                value
            };
        }
    },
    toJSON: {
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote",
                value: MsgAggregateExchangeRateVote.toJSON(value)
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent",
                value: MsgDelegateFeedConsent.toJSON(value)
            };
        }
    },
    fromJSON: {
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote",
                value: MsgAggregateExchangeRateVote.fromJSON(value)
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent",
                value: MsgDelegateFeedConsent.fromJSON(value)
            };
        }
    },
    fromPartial: {
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote",
                value: MsgAggregateExchangeRateVote.fromPartial(value)
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent",
                value: MsgDelegateFeedConsent.fromPartial(value)
            };
        }
    }
};
