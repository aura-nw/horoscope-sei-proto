import * as _109 from "../dex/asset_list";
import * as _110 from "../dex/contract";
import * as _111 from "../dex/deposit";
import * as _112 from "../dex/enums";
import * as _113 from "../dex/genesis";
import * as _114 from "../dex/gov";
import * as _115 from "../dex/long_book";
import * as _116 from "../dex/match_result";
import * as _117 from "../dex/order_entry";
import * as _118 from "../dex/order";
import * as _119 from "../dex/pair";
import * as _120 from "../dex/params";
import * as _121 from "../dex/price";
import * as _122 from "../dex/query";
import * as _123 from "../dex/settlement";
import * as _124 from "../dex/short_book";
import * as _125 from "../dex/tick_size";
import * as _126 from "../dex/twap";
import * as _127 from "../dex/tx";
import * as _128 from "./seichain/dex/asset_list";
import * as _129 from "./seichain/dex/contract";
import * as _130 from "./seichain/dex/deposit";
import * as _131 from "./seichain/dex/enums";
import * as _132 from "./seichain/dex/genesis";
import * as _133 from "./seichain/dex/gov";
import * as _134 from "./seichain/dex/long_book";
import * as _135 from "./seichain/dex/match_result";
import * as _136 from "./seichain/dex/order_entry";
import * as _137 from "./seichain/dex/order";
import * as _138 from "./seichain/dex/pair";
import * as _139 from "./seichain/dex/params";
import * as _140 from "./seichain/dex/price";
import * as _141 from "./seichain/dex/query";
import * as _142 from "./seichain/dex/settlement";
import * as _143 from "./seichain/dex/short_book";
import * as _144 from "./seichain/dex/tick_size";
import * as _145 from "./seichain/dex/twap";
import * as _146 from "./seichain/dex/tx";
import * as _147 from "../epoch/epoch";
import * as _148 from "../epoch/genesis";
import * as _149 from "../epoch/params";
import * as _150 from "../epoch/query";
import * as _151 from "../epoch/tx";
import * as _152 from "./seichain/epoch/epoch";
import * as _153 from "./seichain/epoch/genesis";
import * as _154 from "./seichain/epoch/params";
import * as _155 from "./seichain/epoch/query";
import * as _156 from "./seichain/epoch/tx";
import * as _157 from "../mint/v1beta1/genesis";
import * as _158 from "../mint/v1beta1/gov";
import * as _159 from "../mint/v1beta1/mint";
import * as _160 from "../mint/v1beta1/query";
import * as _161 from "./seichain/mint/v1beta1/genesis";
import * as _162 from "./seichain/mint/v1beta1/gov";
import * as _163 from "./seichain/mint/v1beta1/mint";
import * as _164 from "./seichain/mint/v1beta1/query";
import * as _165 from "../oracle/genesis";
import * as _166 from "../oracle/oracle";
import * as _167 from "../oracle/query";
import * as _168 from "../oracle/tx";
import * as _169 from "./seichain/oracle/genesis";
import * as _170 from "./seichain/oracle/oracle";
import * as _171 from "./seichain/oracle/query";
import * as _172 from "./seichain/oracle/tx";
import * as _173 from "./seichain/tokenfactory/authorityMetadata";
import * as _174 from "./seichain/tokenfactory/genesis";
import * as _175 from "./seichain/tokenfactory/params";
import * as _176 from "./seichain/tokenfactory/query";
import * as _177 from "./seichain/tokenfactory/tx";
import * as _178 from "../tokenfactory/authorityMetadata";
import * as _179 from "../tokenfactory/genesis";
import * as _180 from "../tokenfactory/params";
import * as _181 from "../tokenfactory/query";
import * as _182 from "../tokenfactory/tx";
import * as _313 from "../dex/tx.amino";
import * as _314 from "../oracle/tx.amino";
import * as _315 from "./seichain/dex/tx.amino";
import * as _316 from "./seichain/oracle/tx.amino";
import * as _317 from "./seichain/tokenfactory/tx.amino";
import * as _318 from "../tokenfactory/tx.amino";
import * as _319 from "../dex/tx.registry";
import * as _320 from "../oracle/tx.registry";
import * as _321 from "./seichain/dex/tx.registry";
import * as _322 from "./seichain/oracle/tx.registry";
import * as _323 from "./seichain/tokenfactory/tx.registry";
import * as _324 from "../tokenfactory/tx.registry";
import * as _325 from "../dex/query.lcd";
import * as _326 from "../epoch/query.lcd";
import * as _327 from "../mint/v1beta1/query.lcd";
import * as _328 from "../oracle/query.lcd";
import * as _329 from "./seichain/dex/query.lcd";
import * as _330 from "./seichain/epoch/query.lcd";
import * as _331 from "./seichain/mint/v1beta1/query.lcd";
import * as _332 from "./seichain/oracle/query.lcd";
import * as _333 from "./seichain/tokenfactory/query.lcd";
import * as _334 from "../tokenfactory/query.lcd";
import * as _335 from "../dex/query.rpc.Query";
import * as _336 from "../epoch/query.rpc.Query";
import * as _337 from "../mint/v1beta1/query.rpc.Query";
import * as _338 from "../oracle/query.rpc.Query";
import * as _339 from "./seichain/dex/query.rpc.Query";
import * as _340 from "./seichain/epoch/query.rpc.Query";
import * as _341 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _342 from "./seichain/oracle/query.rpc.Query";
import * as _343 from "./seichain/tokenfactory/query.rpc.Query";
import * as _344 from "../tokenfactory/query.rpc.Query";
import * as _345 from "../dex/tx.rpc.msg";
import * as _346 from "../oracle/tx.rpc.msg";
import * as _347 from "./seichain/dex/tx.rpc.msg";
import * as _348 from "./seichain/oracle/tx.rpc.msg";
import * as _349 from "./seichain/tokenfactory/tx.rpc.msg";
import * as _350 from "../tokenfactory/tx.rpc.msg";
import * as _378 from "./lcd";
import * as _379 from "./rpc.query";
import * as _380 from "./rpc.tx";
export var seiprotocol;
(function (seiprotocol) {
    let seichain;
    (function (seichain) {
        seichain.dex = {
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
            ..._138,
            ..._139,
            ..._140,
            ..._141,
            ..._142,
            ..._143,
            ..._144,
            ..._145,
            ..._146,
            ..._313,
            ..._315,
            ..._319,
            ..._321,
            ..._325,
            ..._329,
            ..._335,
            ..._339,
            ..._345,
            ..._347
        };
        seichain.epoch = {
            ..._147,
            ..._148,
            ..._149,
            ..._150,
            ..._151,
            ..._152,
            ..._153,
            ..._154,
            ..._155,
            ..._156,
            ..._326,
            ..._330,
            ..._336,
            ..._340
        };
        seichain.mint = {
            ..._157,
            ..._158,
            ..._159,
            ..._160,
            ..._161,
            ..._162,
            ..._163,
            ..._164,
            ..._327,
            ..._331,
            ..._337,
            ..._341
        };
        seichain.oracle = {
            ..._165,
            ..._166,
            ..._167,
            ..._168,
            ..._169,
            ..._170,
            ..._171,
            ..._172,
            ..._314,
            ..._316,
            ..._320,
            ..._322,
            ..._328,
            ..._332,
            ..._338,
            ..._342,
            ..._346,
            ..._348
        };
        seichain.tokenfactory = {
            ..._173,
            ..._174,
            ..._175,
            ..._176,
            ..._177,
            ..._178,
            ..._179,
            ..._180,
            ..._181,
            ..._182,
            ..._317,
            ..._318,
            ..._323,
            ..._324,
            ..._333,
            ..._334,
            ..._343,
            ..._344,
            ..._349,
            ..._350
        };
    })(seichain = seiprotocol.seichain || (seiprotocol.seichain = {}));
    seiprotocol.ClientFactory = {
        ..._378,
        ..._379,
        ..._380
    };
})(seiprotocol || (seiprotocol = {}));
