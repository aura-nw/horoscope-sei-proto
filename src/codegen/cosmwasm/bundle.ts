import * as _44 from "./wasm/v1/genesis";
import * as _45 from "./wasm/v1/ibc";
import * as _46 from "./wasm/v1/proposal";
import * as _47 from "./wasm/v1/query";
import * as _48 from "./wasm/v1/tx";
import * as _49 from "./wasm/v1/types";
import * as _197 from "./wasm/v1/tx.amino";
import * as _198 from "./wasm/v1/tx.registry";
import * as _199 from "./wasm/v1/query.lcd";
import * as _200 from "./wasm/v1/query.rpc.Query";
import * as _201 from "./wasm/v1/tx.rpc.msg";
import * as _263 from "./lcd";
import * as _264 from "./rpc.query";
import * as _265 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201
    };
  }
  export const ClientFactory = {
    ..._263,
    ..._264,
    ..._265
  };
}