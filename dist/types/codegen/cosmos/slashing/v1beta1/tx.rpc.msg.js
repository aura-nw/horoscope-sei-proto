import * as _m0 from "protobufjs/minimal";
import { MsgUnjail, MsgUnjailResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.unjail = this.unjail.bind(this);
    }
    unjail(request) {
        const data = MsgUnjail.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Unjail", data);
        return promise.then(data => MsgUnjailResponse.decode(new _m0.Reader(data)));
    }
}
