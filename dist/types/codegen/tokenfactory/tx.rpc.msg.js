import * as _m0 from "protobufjs/minimal";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.createDenom = this.createDenom.bind(this);
        this.mint = this.mint.bind(this);
        this.burn = this.burn.bind(this);
        this.changeAdmin = this.changeAdmin.bind(this);
        this.setDenomMetadata = this.setDenomMetadata.bind(this);
    }
    createDenom(request) {
        const data = MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Msg", "CreateDenom", data);
        return promise.then(data => MsgCreateDenomResponse.decode(new _m0.Reader(data)));
    }
    mint(request) {
        const data = MsgMint.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Msg", "Mint", data);
        return promise.then(data => MsgMintResponse.decode(new _m0.Reader(data)));
    }
    burn(request) {
        const data = MsgBurn.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Msg", "Burn", data);
        return promise.then(data => MsgBurnResponse.decode(new _m0.Reader(data)));
    }
    changeAdmin(request) {
        const data = MsgChangeAdmin.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Msg", "ChangeAdmin", data);
        return promise.then(data => MsgChangeAdminResponse.decode(new _m0.Reader(data)));
    }
    setDenomMetadata(request) {
        const data = MsgSetDenomMetadata.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Msg", "SetDenomMetadata", data);
        return promise.then(data => MsgSetDenomMetadataResponse.decode(new _m0.Reader(data)));
    }
}
