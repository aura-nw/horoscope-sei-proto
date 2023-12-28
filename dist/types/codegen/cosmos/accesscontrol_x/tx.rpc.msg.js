import * as _m0 from "protobufjs/minimal";
import { MsgRegisterWasmDependency, MsgRegisterWasmDependencyResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.registerWasmDependency = this.registerWasmDependency.bind(this);
    }
    registerWasmDependency(request) {
        const data = MsgRegisterWasmDependency.encode(request).finish();
        const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Msg", "RegisterWasmDependency", data);
        return promise.then(data => MsgRegisterWasmDependencyResponse.decode(new _m0.Reader(data)));
    }
}
