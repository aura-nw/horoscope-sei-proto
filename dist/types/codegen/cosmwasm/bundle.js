import * as _103 from "./wasm/v1/genesis";
import * as _104 from "./wasm/v1/ibc";
import * as _105 from "./wasm/v1/proposal";
import * as _106 from "./wasm/v1/query";
import * as _107 from "./wasm/v1/tx";
import * as _108 from "./wasm/v1/types";
import * as _308 from "./wasm/v1/tx.amino";
import * as _309 from "./wasm/v1/tx.registry";
import * as _310 from "./wasm/v1/query.lcd";
import * as _311 from "./wasm/v1/query.rpc.Query";
import * as _312 from "./wasm/v1/tx.rpc.msg";
import * as _375 from "./lcd";
import * as _376 from "./rpc.query";
import * as _377 from "./rpc.tx";
export var cosmwasm;
(function (cosmwasm) {
    let wasm;
    (function (wasm) {
        wasm.v1 = {
            ..._103,
            ..._104,
            ..._105,
            ..._106,
            ..._107,
            ..._108,
            ..._308,
            ..._309,
            ..._310,
            ..._311,
            ..._312
        };
    })(wasm = cosmwasm.wasm || (cosmwasm.wasm = {}));
    cosmwasm.ClientFactory = {
        ..._375,
        ..._376,
        ..._377
    };
})(cosmwasm || (cosmwasm = {}));
