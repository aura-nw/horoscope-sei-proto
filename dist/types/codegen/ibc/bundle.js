import * as _130 from "./applications/transfer/v1/genesis";
import * as _131 from "./applications/transfer/v1/query";
import * as _132 from "./applications/transfer/v1/transfer";
import * as _133 from "./applications/transfer/v1/tx";
import * as _134 from "./applications/transfer/v2/packet";
import * as _135 from "./core/channel/v1/channel";
import * as _136 from "./core/channel/v1/genesis";
import * as _137 from "./core/channel/v1/query";
import * as _138 from "./core/channel/v1/tx";
import * as _139 from "./core/client/v1/client";
import * as _140 from "./core/client/v1/genesis";
import * as _141 from "./core/client/v1/query";
import * as _142 from "./core/client/v1/tx";
import * as _143 from "./core/commitment/v1/commitment";
import * as _144 from "./core/connection/v1/connection";
import * as _145 from "./core/connection/v1/genesis";
import * as _146 from "./core/connection/v1/query";
import * as _147 from "./core/connection/v1/tx";
import * as _148 from "./lightclients/localhost/v1/localhost";
import * as _149 from "./lightclients/solomachine/v1/solomachine";
import * as _150 from "./lightclients/solomachine/v2/solomachine";
import * as _151 from "./lightclients/tendermint/v1/tendermint";
import * as _240 from "./applications/transfer/v1/tx.amino";
import * as _241 from "./core/channel/v1/tx.amino";
import * as _242 from "./core/client/v1/tx.amino";
import * as _243 from "./core/connection/v1/tx.amino";
import * as _244 from "./applications/transfer/v1/tx.registry";
import * as _245 from "./core/channel/v1/tx.registry";
import * as _246 from "./core/client/v1/tx.registry";
import * as _247 from "./core/connection/v1/tx.registry";
import * as _248 from "./applications/transfer/v1/query.lcd";
import * as _249 from "./core/channel/v1/query.lcd";
import * as _250 from "./core/client/v1/query.lcd";
import * as _251 from "./core/connection/v1/query.lcd";
import * as _252 from "./applications/transfer/v1/query.rpc.Query";
import * as _253 from "./core/channel/v1/query.rpc.Query";
import * as _254 from "./core/client/v1/query.rpc.Query";
import * as _255 from "./core/connection/v1/query.rpc.Query";
import * as _256 from "./applications/transfer/v1/tx.rpc.msg";
import * as _257 from "./core/channel/v1/tx.rpc.msg";
import * as _258 from "./core/client/v1/tx.rpc.msg";
import * as _259 from "./core/connection/v1/tx.rpc.msg";
import * as _269 from "./lcd";
import * as _270 from "./rpc.query";
import * as _271 from "./rpc.tx";
export var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._130,
                ..._131,
                ..._132,
                ..._133,
                ..._240,
                ..._244,
                ..._248,
                ..._252,
                ..._256
            };
            transfer.v2 = {
                ..._134
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._135,
                ..._136,
                ..._137,
                ..._138,
                ..._241,
                ..._245,
                ..._249,
                ..._253,
                ..._257
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._139,
                ..._140,
                ..._141,
                ..._142,
                ..._242,
                ..._246,
                ..._250,
                ..._254,
                ..._258
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._143
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._144,
                ..._145,
                ..._146,
                ..._147,
                ..._243,
                ..._247,
                ..._251,
                ..._255,
                ..._259
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._148
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._149
            };
            solomachine.v2 = {
                ..._150
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._151
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._269,
        ..._270,
        ..._271
    };
})(ibc || (ibc = {}));
