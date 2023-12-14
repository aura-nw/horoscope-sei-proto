import { MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export declare const AminoConverter: {
    "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: (message: MsgAggregateExchangeRateVote) => import("./tx").MsgAggregateExchangeRateVoteAmino;
        fromAmino: (object: import("./tx").MsgAggregateExchangeRateVoteAmino) => MsgAggregateExchangeRateVote;
    };
    "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: (message: MsgDelegateFeedConsent) => import("./tx").MsgDelegateFeedConsentAmino;
        fromAmino: (object: import("./tx").MsgDelegateFeedConsentAmino) => MsgDelegateFeedConsent;
    };
};
