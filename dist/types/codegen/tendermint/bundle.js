import * as _215 from "./abci/types";
import * as _216 from "./crypto/keys";
import * as _217 from "./crypto/proof";
import * as _218 from "./libs/bits/types";
import * as _219 from "./p2p/types";
import * as _220 from "./types/block";
import * as _221 from "./types/evidence";
import * as _222 from "./types/params";
import * as _223 from "./types/types";
import * as _224 from "./types/validator";
import * as _225 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._215
    };
    tendermint.crypto = {
        ..._216,
        ..._217
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._218
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._219
    };
    tendermint.types = {
        ..._220,
        ..._221,
        ..._222,
        ..._223,
        ..._224
    };
    tendermint.version = {
        ..._225
    };
})(tendermint || (tendermint = {}));
