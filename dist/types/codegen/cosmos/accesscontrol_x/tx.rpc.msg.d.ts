import { Rpc } from "../../helpers";
import { MsgRegisterWasmDependency, MsgRegisterWasmDependencyResponse } from "./tx";
export interface Msg {
    registerWasmDependency(request: MsgRegisterWasmDependency): Promise<MsgRegisterWasmDependencyResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerWasmDependency(request: MsgRegisterWasmDependency): Promise<MsgRegisterWasmDependencyResponse>;
}
