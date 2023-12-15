import * as _152 from "./abci/types";
import * as _153 from "./crypto/keys";
import * as _154 from "./crypto/proof";
import * as _155 from "./libs/bits/types";
import * as _156 from "./p2p/types";
import * as _157 from "./types/block";
import * as _158 from "./types/evidence";
import * as _159 from "./types/params";
import * as _160 from "./types/types";
import * as _161 from "./types/validator";
import * as _162 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._152
    };
    tendermint.crypto = {
        ..._153,
        ..._154
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._155
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._156
    };
    tendermint.types = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._161
    };
    tendermint.version = {
        ..._162
    };
})(tendermint || (tendermint = {}));
