import * as _182 from "./applications/transfer/v1/genesis";
import * as _183 from "./applications/transfer/v1/query";
import * as _184 from "./applications/transfer/v1/transfer";
import * as _185 from "./applications/transfer/v1/tx";
import * as _186 from "./applications/transfer/v2/packet";
import * as _187 from "./core/channel/v1/channel";
import * as _188 from "./core/channel/v1/genesis";
import * as _189 from "./core/channel/v1/query";
import * as _190 from "./core/channel/v1/tx";
import * as _191 from "./core/client/v1/client";
import * as _192 from "./core/client/v1/genesis";
import * as _193 from "./core/client/v1/query";
import * as _194 from "./core/client/v1/tx";
import * as _195 from "./core/commitment/v1/commitment";
import * as _196 from "./core/connection/v1/connection";
import * as _197 from "./core/connection/v1/genesis";
import * as _198 from "./core/connection/v1/query";
import * as _199 from "./core/connection/v1/tx";
import * as _200 from "./core/port/v1/query";
import * as _201 from "./core/types/v1/genesis";
import * as _202 from "./lightclients/localhost/v1/localhost";
import * as _203 from "./lightclients/solomachine/v1/solomachine";
import * as _204 from "./lightclients/solomachine/v2/solomachine";
import * as _205 from "./lightclients/tendermint/v1/tendermint";
import * as _337 from "./applications/transfer/v1/tx.amino";
import * as _338 from "./core/channel/v1/tx.amino";
import * as _339 from "./core/client/v1/tx.amino";
import * as _340 from "./core/connection/v1/tx.amino";
import * as _341 from "./applications/transfer/v1/tx.registry";
import * as _342 from "./core/channel/v1/tx.registry";
import * as _343 from "./core/client/v1/tx.registry";
import * as _344 from "./core/connection/v1/tx.registry";
import * as _345 from "./applications/transfer/v1/query.lcd";
import * as _346 from "./core/channel/v1/query.lcd";
import * as _347 from "./core/client/v1/query.lcd";
import * as _348 from "./core/connection/v1/query.lcd";
import * as _349 from "./applications/transfer/v1/query.rpc.Query";
import * as _350 from "./core/channel/v1/query.rpc.Query";
import * as _351 from "./core/client/v1/query.rpc.Query";
import * as _352 from "./core/connection/v1/query.rpc.Query";
import * as _353 from "./core/port/v1/query.rpc.Query";
import * as _354 from "./applications/transfer/v1/tx.rpc.msg";
import * as _355 from "./core/channel/v1/tx.rpc.msg";
import * as _356 from "./core/client/v1/tx.rpc.msg";
import * as _357 from "./core/connection/v1/tx.rpc.msg";
import * as _367 from "./lcd";
import * as _368 from "./rpc.query";
import * as _369 from "./rpc.tx";
export var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._182,
                ..._183,
                ..._184,
                ..._185,
                ..._337,
                ..._341,
                ..._345,
                ..._349,
                ..._354
            };
            transfer.v2 = {
                ..._186
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._187,
                ..._188,
                ..._189,
                ..._190,
                ..._338,
                ..._342,
                ..._346,
                ..._350,
                ..._355
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._191,
                ..._192,
                ..._193,
                ..._194,
                ..._339,
                ..._343,
                ..._347,
                ..._351,
                ..._356
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._195
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._196,
                ..._197,
                ..._198,
                ..._199,
                ..._340,
                ..._344,
                ..._348,
                ..._352,
                ..._357
            };
        })(connection = core.connection || (core.connection = {}));
        let port;
        (function (port) {
            port.v1 = {
                ..._200,
                ..._353
            };
        })(port = core.port || (core.port = {}));
        let types;
        (function (types) {
            types.v1 = {
                ..._201
            };
        })(types = core.types || (core.types = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._202
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._203
            };
            solomachine.v2 = {
                ..._204
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._205
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._367,
        ..._368,
        ..._369
    };
})(ibc || (ibc = {}));
