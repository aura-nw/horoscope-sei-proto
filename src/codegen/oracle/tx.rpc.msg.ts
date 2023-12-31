import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgAggregateExchangeRateVote, MsgAggregateExchangeRateVoteResponse, MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse } from "./tx";
/** Msg defines the oracle Msg service. */
export interface Msg {
  /**
   * AggregateExchangeRateVote defines a method for submitting
   * aggregate exchange rate vote
   */
  aggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse>;
  /** DelegateFeedConsent defines a method for setting the feeder delegation */
  delegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.aggregateExchangeRateVote = this.aggregateExchangeRateVote.bind(this);
    this.delegateFeedConsent = this.delegateFeedConsent.bind(this);
  }
  aggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse> {
    const data = MsgAggregateExchangeRateVote.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.oracle.Msg", "AggregateExchangeRateVote", data);
    return promise.then(data => MsgAggregateExchangeRateVoteResponse.decode(new _m0.Reader(data)));
  }
  delegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse> {
    const data = MsgDelegateFeedConsent.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.oracle.Msg", "DelegateFeedConsent", data);
    return promise.then(data => MsgDelegateFeedConsentResponse.decode(new _m0.Reader(data)));
  }
}