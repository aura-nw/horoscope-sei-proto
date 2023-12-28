import * as _191 from "./applications/transfer/v1/genesis";
import * as _192 from "./applications/transfer/v1/query";
import * as _193 from "./applications/transfer/v1/transfer";
import * as _194 from "./applications/transfer/v1/tx";
import * as _195 from "./applications/transfer/v2/packet";
import * as _196 from "./core/channel/v1/channel";
import * as _197 from "./core/channel/v1/genesis";
import * as _198 from "./core/channel/v1/query";
import * as _199 from "./core/channel/v1/tx";
import * as _200 from "./core/client/v1/client";
import * as _201 from "./core/client/v1/genesis";
import * as _202 from "./core/client/v1/query";
import * as _203 from "./core/client/v1/tx";
import * as _204 from "./core/commitment/v1/commitment";
import * as _205 from "./core/connection/v1/connection";
import * as _206 from "./core/connection/v1/genesis";
import * as _207 from "./core/connection/v1/query";
import * as _208 from "./core/connection/v1/tx";
import * as _209 from "./core/port/v1/query";
import * as _210 from "./core/types/v1/genesis";
import * as _211 from "./lightclients/localhost/v1/localhost";
import * as _212 from "./lightclients/solomachine/v1/solomachine";
import * as _213 from "./lightclients/solomachine/v2/solomachine";
import * as _214 from "./lightclients/tendermint/v1/tendermint";
import * as _351 from "./applications/transfer/v1/tx.amino";
import * as _352 from "./core/channel/v1/tx.amino";
import * as _353 from "./core/client/v1/tx.amino";
import * as _354 from "./core/connection/v1/tx.amino";
import * as _355 from "./applications/transfer/v1/tx.registry";
import * as _356 from "./core/channel/v1/tx.registry";
import * as _357 from "./core/client/v1/tx.registry";
import * as _358 from "./core/connection/v1/tx.registry";
import * as _359 from "./applications/transfer/v1/query.lcd";
import * as _360 from "./core/channel/v1/query.lcd";
import * as _361 from "./core/client/v1/query.lcd";
import * as _362 from "./core/connection/v1/query.lcd";
import * as _363 from "./applications/transfer/v1/query.rpc.Query";
import * as _364 from "./core/channel/v1/query.rpc.Query";
import * as _365 from "./core/client/v1/query.rpc.Query";
import * as _366 from "./core/connection/v1/query.rpc.Query";
import * as _367 from "./core/port/v1/query.rpc.Query";
import * as _368 from "./applications/transfer/v1/tx.rpc.msg";
import * as _369 from "./core/channel/v1/tx.rpc.msg";
import * as _370 from "./core/client/v1/tx.rpc.msg";
import * as _371 from "./core/connection/v1/tx.rpc.msg";
import * as _381 from "./lcd";
import * as _382 from "./rpc.query";
import * as _383 from "./rpc.tx";
export var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._191,
                ..._192,
                ..._193,
                ..._194,
                ..._351,
                ..._355,
                ..._359,
                ..._363,
                ..._368
            };
            transfer.v2 = {
                ..._195
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._196,
                ..._197,
                ..._198,
                ..._199,
                ..._352,
                ..._356,
                ..._360,
                ..._364,
                ..._369
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._200,
                ..._201,
                ..._202,
                ..._203,
                ..._353,
                ..._357,
                ..._361,
                ..._365,
                ..._370
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._204
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._205,
                ..._206,
                ..._207,
                ..._208,
                ..._354,
                ..._358,
                ..._362,
                ..._366,
                ..._371
            };
        })(connection = core.connection || (core.connection = {}));
        let port;
        (function (port) {
            port.v1 = {
                ..._209,
                ..._367
            };
        })(port = core.port || (core.port = {}));
        let types;
        (function (types) {
            types.v1 = {
                ..._210
            };
        })(types = core.types || (core.types = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._211
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._212
            };
            solomachine.v2 = {
                ..._213
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._214
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._381,
        ..._382,
        ..._383
    };
})(ibc || (ibc = {}));
