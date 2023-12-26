import * as _100 from "../dex/asset_list";
import * as _101 from "../dex/contract";
import * as _102 from "../dex/deposit";
import * as _103 from "../dex/enums";
import * as _104 from "../dex/genesis";
import * as _105 from "../dex/gov";
import * as _106 from "../dex/long_book";
import * as _107 from "../dex/match_result";
import * as _108 from "../dex/order_entry";
import * as _109 from "../dex/order";
import * as _110 from "../dex/pair";
import * as _111 from "../dex/params";
import * as _112 from "../dex/price";
import * as _113 from "../dex/query";
import * as _114 from "../dex/settlement";
import * as _115 from "../dex/short_book";
import * as _116 from "../dex/tick_size";
import * as _117 from "../dex/twap";
import * as _118 from "../dex/tx";
import * as _119 from "./seichain/dex/asset_list";
import * as _120 from "./seichain/dex/contract";
import * as _121 from "./seichain/dex/deposit";
import * as _122 from "./seichain/dex/enums";
import * as _123 from "./seichain/dex/genesis";
import * as _124 from "./seichain/dex/gov";
import * as _125 from "./seichain/dex/long_book";
import * as _126 from "./seichain/dex/match_result";
import * as _127 from "./seichain/dex/order_entry";
import * as _128 from "./seichain/dex/order";
import * as _129 from "./seichain/dex/pair";
import * as _130 from "./seichain/dex/params";
import * as _131 from "./seichain/dex/price";
import * as _132 from "./seichain/dex/query";
import * as _133 from "./seichain/dex/settlement";
import * as _134 from "./seichain/dex/short_book";
import * as _135 from "./seichain/dex/tick_size";
import * as _136 from "./seichain/dex/twap";
import * as _137 from "./seichain/dex/tx";
import * as _138 from "../epoch/epoch";
import * as _139 from "../epoch/genesis";
import * as _140 from "../epoch/params";
import * as _141 from "../epoch/query";
import * as _142 from "../epoch/tx";
import * as _143 from "./seichain/epoch/epoch";
import * as _144 from "./seichain/epoch/genesis";
import * as _145 from "./seichain/epoch/params";
import * as _146 from "./seichain/epoch/query";
import * as _147 from "./seichain/epoch/tx";
import * as _148 from "../mint/v1beta1/genesis";
import * as _149 from "../mint/v1beta1/gov";
import * as _150 from "../mint/v1beta1/mint";
import * as _151 from "../mint/v1beta1/query";
import * as _152 from "./seichain/mint/v1beta1/genesis";
import * as _153 from "./seichain/mint/v1beta1/gov";
import * as _154 from "./seichain/mint/v1beta1/mint";
import * as _155 from "./seichain/mint/v1beta1/query";
import * as _156 from "../oracle/genesis";
import * as _157 from "../oracle/oracle";
import * as _158 from "../oracle/query";
import * as _159 from "../oracle/tx";
import * as _160 from "./seichain/oracle/genesis";
import * as _161 from "./seichain/oracle/oracle";
import * as _162 from "./seichain/oracle/query";
import * as _163 from "./seichain/oracle/tx";
import * as _164 from "./seichain/tokenfactory/authorityMetadata";
import * as _165 from "./seichain/tokenfactory/genesis";
import * as _166 from "./seichain/tokenfactory/params";
import * as _167 from "./seichain/tokenfactory/query";
import * as _168 from "./seichain/tokenfactory/tx";
import * as _169 from "../tokenfactory/authorityMetadata";
import * as _170 from "../tokenfactory/genesis";
import * as _171 from "../tokenfactory/params";
import * as _172 from "../tokenfactory/query";
import * as _173 from "../tokenfactory/tx";
import * as _299 from "../dex/tx.amino";
import * as _300 from "../oracle/tx.amino";
import * as _301 from "./seichain/dex/tx.amino";
import * as _302 from "./seichain/oracle/tx.amino";
import * as _303 from "./seichain/tokenfactory/tx.amino";
import * as _304 from "../tokenfactory/tx.amino";
import * as _305 from "../dex/tx.registry";
import * as _306 from "../oracle/tx.registry";
import * as _307 from "./seichain/dex/tx.registry";
import * as _308 from "./seichain/oracle/tx.registry";
import * as _309 from "./seichain/tokenfactory/tx.registry";
import * as _310 from "../tokenfactory/tx.registry";
import * as _311 from "../dex/query.lcd";
import * as _312 from "../epoch/query.lcd";
import * as _313 from "../mint/v1beta1/query.lcd";
import * as _314 from "../oracle/query.lcd";
import * as _315 from "./seichain/dex/query.lcd";
import * as _316 from "./seichain/epoch/query.lcd";
import * as _317 from "./seichain/mint/v1beta1/query.lcd";
import * as _318 from "./seichain/oracle/query.lcd";
import * as _319 from "./seichain/tokenfactory/query.lcd";
import * as _320 from "../tokenfactory/query.lcd";
import * as _321 from "../dex/query.rpc.Query";
import * as _322 from "../epoch/query.rpc.Query";
import * as _323 from "../mint/v1beta1/query.rpc.Query";
import * as _324 from "../oracle/query.rpc.Query";
import * as _325 from "./seichain/dex/query.rpc.Query";
import * as _326 from "./seichain/epoch/query.rpc.Query";
import * as _327 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _328 from "./seichain/oracle/query.rpc.Query";
import * as _329 from "./seichain/tokenfactory/query.rpc.Query";
import * as _330 from "../tokenfactory/query.rpc.Query";
import * as _331 from "../dex/tx.rpc.msg";
import * as _332 from "../oracle/tx.rpc.msg";
import * as _333 from "./seichain/dex/tx.rpc.msg";
import * as _334 from "./seichain/oracle/tx.rpc.msg";
import * as _335 from "./seichain/tokenfactory/tx.rpc.msg";
import * as _336 from "../tokenfactory/tx.rpc.msg";
import * as _364 from "./lcd";
import * as _365 from "./rpc.query";
import * as _366 from "./rpc.tx";
export namespace seiprotocol {
  export namespace seichain {
    export const dex = {
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._299,
      ..._301,
      ..._305,
      ..._307,
      ..._311,
      ..._315,
      ..._321,
      ..._325,
      ..._331,
      ..._333
    };
    export const epoch = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._312,
      ..._316,
      ..._322,
      ..._326
    };
    export const mint = {
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._313,
      ..._317,
      ..._323,
      ..._327
    };
    export const oracle = {
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._300,
      ..._302,
      ..._306,
      ..._308,
      ..._314,
      ..._318,
      ..._324,
      ..._328,
      ..._332,
      ..._334
    };
    export const tokenfactory = {
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._303,
      ..._304,
      ..._309,
      ..._310,
      ..._319,
      ..._320,
      ..._329,
      ..._330,
      ..._335,
      ..._336
    };
  }
  export const ClientFactory = {
    ..._364,
    ..._365,
    ..._366
  };
}