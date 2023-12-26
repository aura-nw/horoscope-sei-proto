import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _294 from "./wasm/v1/tx.amino";
import * as _295 from "./wasm/v1/tx.registry";
import * as _296 from "./wasm/v1/query.lcd";
import * as _297 from "./wasm/v1/query.rpc.Query";
import * as _298 from "./wasm/v1/tx.rpc.msg";
import * as _361 from "./lcd";
import * as _362 from "./rpc.query";
import * as _363 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._298
    };
  }
  export const ClientFactory = {
    ..._361,
    ..._362,
    ..._363
  };
}