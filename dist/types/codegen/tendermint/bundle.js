import * as _206 from "./abci/types";
import * as _207 from "./crypto/keys";
import * as _208 from "./crypto/proof";
import * as _209 from "./libs/bits/types";
import * as _210 from "./p2p/types";
import * as _211 from "./types/block";
import * as _212 from "./types/evidence";
import * as _213 from "./types/params";
import * as _214 from "./types/types";
import * as _215 from "./types/validator";
import * as _216 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._206
    };
    tendermint.crypto = {
        ..._207,
        ..._208
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._209
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._210
    };
    tendermint.types = {
        ..._211,
        ..._212,
        ..._213,
        ..._214,
        ..._215
    };
    tendermint.version = {
        ..._216
    };
})(tendermint || (tendermint = {}));
