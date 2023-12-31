import * as _m0 from "protobufjs/minimal";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgClearAdmin, MsgClearAdminResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.storeCode = this.storeCode.bind(this);
        this.instantiateContract = this.instantiateContract.bind(this);
        this.executeContract = this.executeContract.bind(this);
        this.migrateContract = this.migrateContract.bind(this);
        this.updateAdmin = this.updateAdmin.bind(this);
        this.clearAdmin = this.clearAdmin.bind(this);
    }
    storeCode(request) {
        const data = MsgStoreCode.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
        return promise.then(data => MsgStoreCodeResponse.decode(new _m0.Reader(data)));
    }
    instantiateContract(request) {
        const data = MsgInstantiateContract.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
        return promise.then(data => MsgInstantiateContractResponse.decode(new _m0.Reader(data)));
    }
    executeContract(request) {
        const data = MsgExecuteContract.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
        return promise.then(data => MsgExecuteContractResponse.decode(new _m0.Reader(data)));
    }
    migrateContract(request) {
        const data = MsgMigrateContract.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
        return promise.then(data => MsgMigrateContractResponse.decode(new _m0.Reader(data)));
    }
    updateAdmin(request) {
        const data = MsgUpdateAdmin.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
        return promise.then(data => MsgUpdateAdminResponse.decode(new _m0.Reader(data)));
    }
    clearAdmin(request) {
        const data = MsgClearAdmin.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
        return promise.then(data => MsgClearAdminResponse.decode(new _m0.Reader(data)));
    }
}
