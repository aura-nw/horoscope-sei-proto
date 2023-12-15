import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./crypto/multisig/keys";
import * as _23 from "./crypto/secp256k1/keys";
import * as _24 from "./crypto/secp256r1/keys";
import * as _25 from "./distribution/v1beta1/distribution";
import * as _26 from "./distribution/v1beta1/genesis";
import * as _27 from "./distribution/v1beta1/query";
import * as _28 from "./distribution/v1beta1/tx";
import * as _29 from "./gov/v1beta1/genesis";
import * as _30 from "./gov/v1beta1/gov";
import * as _31 from "./gov/v1beta1/query";
import * as _32 from "./gov/v1beta1/tx";
import * as _33 from "./staking/v1beta1/authz";
import * as _34 from "./staking/v1beta1/genesis";
import * as _35 from "./staking/v1beta1/query";
import * as _36 from "./staking/v1beta1/staking";
import * as _37 from "./staking/v1beta1/tx";
import * as _38 from "./tx/signing/v1beta1/signing";
import * as _39 from "./tx/v1beta1/service";
import * as _40 from "./tx/v1beta1/tx";
import * as _41 from "./upgrade/v1beta1/query";
import * as _42 from "./upgrade/v1beta1/tx";
import * as _43 from "./upgrade/v1beta1/upgrade";
import * as _163 from "./authz/v1beta1/tx.amino";
import * as _164 from "./bank/v1beta1/tx.amino";
import * as _165 from "./distribution/v1beta1/tx.amino";
import * as _166 from "./gov/v1beta1/tx.amino";
import * as _167 from "./staking/v1beta1/tx.amino";
import * as _168 from "./upgrade/v1beta1/tx.amino";
import * as _169 from "./authz/v1beta1/tx.registry";
import * as _170 from "./bank/v1beta1/tx.registry";
import * as _171 from "./distribution/v1beta1/tx.registry";
import * as _172 from "./gov/v1beta1/tx.registry";
import * as _173 from "./staking/v1beta1/tx.registry";
import * as _174 from "./upgrade/v1beta1/tx.registry";
import * as _175 from "./auth/v1beta1/query.lcd";
import * as _176 from "./authz/v1beta1/query.lcd";
import * as _177 from "./bank/v1beta1/query.lcd";
import * as _178 from "./distribution/v1beta1/query.lcd";
import * as _179 from "./gov/v1beta1/query.lcd";
import * as _180 from "./staking/v1beta1/query.lcd";
import * as _181 from "./tx/v1beta1/service.lcd";
import * as _182 from "./upgrade/v1beta1/query.lcd";
import * as _183 from "./auth/v1beta1/query.rpc.Query";
import * as _184 from "./authz/v1beta1/query.rpc.Query";
import * as _185 from "./bank/v1beta1/query.rpc.Query";
import * as _186 from "./distribution/v1beta1/query.rpc.Query";
import * as _187 from "./gov/v1beta1/query.rpc.Query";
import * as _188 from "./staking/v1beta1/query.rpc.Query";
import * as _189 from "./tx/v1beta1/service.rpc.Service";
import * as _190 from "./upgrade/v1beta1/query.rpc.Query";
import * as _191 from "./authz/v1beta1/tx.rpc.msg";
import * as _192 from "./bank/v1beta1/tx.rpc.msg";
import * as _193 from "./distribution/v1beta1/tx.rpc.msg";
import * as _194 from "./gov/v1beta1/tx.rpc.msg";
import * as _195 from "./staking/v1beta1/tx.rpc.msg";
import * as _196 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _260 from "./lcd";
import * as _261 from "./rpc.query";
import * as _262 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._2,
            ..._3,
            ..._4,
            ..._175,
            ..._183
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._5,
            ..._6,
            ..._7,
            ..._8,
            ..._9,
            ..._163,
            ..._169,
            ..._176,
            ..._184,
            ..._191
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._10,
            ..._11,
            ..._12,
            ..._13,
            ..._14,
            ..._164,
            ..._170,
            ..._177,
            ..._185,
            ..._192
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._15
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._16
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._17
            };
        })(reflection = base.reflection || (base.reflection = {}));
        base.v1beta1 = {
            ..._18
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._19
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._20
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._21
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._22
        };
        crypto.secp256k1 = {
            ..._23
        };
        crypto.secp256r1 = {
            ..._24
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._25,
            ..._26,
            ..._27,
            ..._28,
            ..._165,
            ..._171,
            ..._178,
            ..._186,
            ..._193
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._29,
            ..._30,
            ..._31,
            ..._32,
            ..._166,
            ..._172,
            ..._179,
            ..._187,
            ..._194
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._33,
            ..._34,
            ..._35,
            ..._36,
            ..._37,
            ..._167,
            ..._173,
            ..._180,
            ..._188,
            ..._195
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._38
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._39,
            ..._40,
            ..._181,
            ..._189
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._41,
            ..._42,
            ..._43,
            ..._168,
            ..._174,
            ..._182,
            ..._190,
            ..._196
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._260,
        ..._261,
        ..._262
    };
})(cosmos || (cosmos = {}));
