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
export namespace tendermint {
  export const abci = {
    ..._206
  };
  export const crypto = {
    ..._207,
    ..._208
  };
  export namespace libs {
    export const bits = {
      ..._209
    };
  }
  export const p2p = {
    ..._210
  };
  export const types = {
    ..._211,
    ..._212,
    ..._213,
    ..._214,
    ..._215
  };
  export const version = {
    ..._216
  };
}