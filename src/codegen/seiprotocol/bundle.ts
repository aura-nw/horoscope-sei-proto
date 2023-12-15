import * as _50 from "../dex/asset_list";
import * as _51 from "../dex/contract";
import * as _52 from "../dex/deposit";
import * as _53 from "../dex/enums";
import * as _54 from "../dex/genesis";
import * as _55 from "../dex/gov";
import * as _56 from "../dex/long_book";
import * as _57 from "../dex/match_result";
import * as _58 from "../dex/order_entry";
import * as _59 from "../dex/order";
import * as _60 from "../dex/pair";
import * as _61 from "../dex/params";
import * as _62 from "../dex/price";
import * as _63 from "../dex/query";
import * as _64 from "../dex/settlement";
import * as _65 from "../dex/short_book";
import * as _66 from "../dex/tick_size";
import * as _67 from "../dex/twap";
import * as _68 from "../dex/tx";
import * as _69 from "./seichain/dex/asset_list";
import * as _70 from "./seichain/dex/contract";
import * as _71 from "./seichain/dex/deposit";
import * as _72 from "./seichain/dex/enums";
import * as _73 from "./seichain/dex/genesis";
import * as _74 from "./seichain/dex/gov";
import * as _75 from "./seichain/dex/long_book";
import * as _76 from "./seichain/dex/match_result";
import * as _77 from "./seichain/dex/order_entry";
import * as _78 from "./seichain/dex/order";
import * as _79 from "./seichain/dex/pair";
import * as _80 from "./seichain/dex/params";
import * as _81 from "./seichain/dex/price";
import * as _82 from "./seichain/dex/query";
import * as _83 from "./seichain/dex/settlement";
import * as _84 from "./seichain/dex/short_book";
import * as _85 from "./seichain/dex/tick_size";
import * as _86 from "./seichain/dex/twap";
import * as _87 from "./seichain/dex/tx";
import * as _88 from "../epoch/epoch";
import * as _89 from "../epoch/genesis";
import * as _90 from "../epoch/params";
import * as _91 from "../epoch/query";
import * as _92 from "../epoch/tx";
import * as _93 from "./seichain/epoch/epoch";
import * as _94 from "./seichain/epoch/genesis";
import * as _95 from "./seichain/epoch/params";
import * as _96 from "./seichain/epoch/query";
import * as _97 from "./seichain/epoch/tx";
import * as _98 from "../mint/v1beta1/genesis";
import * as _99 from "../mint/v1beta1/gov";
import * as _100 from "../mint/v1beta1/mint";
import * as _101 from "../mint/v1beta1/query";
import * as _102 from "./seichain/mint/v1beta1/genesis";
import * as _103 from "./seichain/mint/v1beta1/gov";
import * as _104 from "./seichain/mint/v1beta1/mint";
import * as _105 from "./seichain/mint/v1beta1/query";
import * as _106 from "../oracle/genesis";
import * as _107 from "../oracle/oracle";
import * as _108 from "../oracle/query";
import * as _109 from "../oracle/tx";
import * as _110 from "./seichain/oracle/genesis";
import * as _111 from "./seichain/oracle/oracle";
import * as _112 from "./seichain/oracle/query";
import * as _113 from "./seichain/oracle/tx";
import * as _114 from "./seichain/tokenfactory/authorityMetadata";
import * as _115 from "./seichain/tokenfactory/genesis";
import * as _116 from "./seichain/tokenfactory/params";
import * as _117 from "./seichain/tokenfactory/query";
import * as _118 from "./seichain/tokenfactory/tx";
import * as _119 from "../tokenfactory/authorityMetadata";
import * as _120 from "../tokenfactory/genesis";
import * as _121 from "../tokenfactory/params";
import * as _122 from "../tokenfactory/query";
import * as _123 from "../tokenfactory/tx";
import * as _202 from "../dex/tx.amino";
import * as _203 from "../oracle/tx.amino";
import * as _204 from "./seichain/dex/tx.amino";
import * as _205 from "./seichain/oracle/tx.amino";
import * as _206 from "./seichain/tokenfactory/tx.amino";
import * as _207 from "../tokenfactory/tx.amino";
import * as _208 from "../dex/tx.registry";
import * as _209 from "../oracle/tx.registry";
import * as _210 from "./seichain/dex/tx.registry";
import * as _211 from "./seichain/oracle/tx.registry";
import * as _212 from "./seichain/tokenfactory/tx.registry";
import * as _213 from "../tokenfactory/tx.registry";
import * as _214 from "../dex/query.lcd";
import * as _215 from "../epoch/query.lcd";
import * as _216 from "../mint/v1beta1/query.lcd";
import * as _217 from "../oracle/query.lcd";
import * as _218 from "./seichain/dex/query.lcd";
import * as _219 from "./seichain/epoch/query.lcd";
import * as _220 from "./seichain/mint/v1beta1/query.lcd";
import * as _221 from "./seichain/oracle/query.lcd";
import * as _222 from "./seichain/tokenfactory/query.lcd";
import * as _223 from "../tokenfactory/query.lcd";
import * as _224 from "../dex/query.rpc.Query";
import * as _225 from "../epoch/query.rpc.Query";
import * as _226 from "../mint/v1beta1/query.rpc.Query";
import * as _227 from "../oracle/query.rpc.Query";
import * as _228 from "./seichain/dex/query.rpc.Query";
import * as _229 from "./seichain/epoch/query.rpc.Query";
import * as _230 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _231 from "./seichain/oracle/query.rpc.Query";
import * as _232 from "./seichain/tokenfactory/query.rpc.Query";
import * as _233 from "../tokenfactory/query.rpc.Query";
import * as _234 from "../dex/tx.rpc.msg";
import * as _235 from "../oracle/tx.rpc.msg";
import * as _236 from "./seichain/dex/tx.rpc.msg";
import * as _237 from "./seichain/oracle/tx.rpc.msg";
import * as _238 from "./seichain/tokenfactory/tx.rpc.msg";
import * as _239 from "../tokenfactory/tx.rpc.msg";
import * as _266 from "./lcd";
import * as _267 from "./rpc.query";
import * as _268 from "./rpc.tx";
export namespace seiprotocol {
  export namespace seichain {
    export const dex = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._202,
      ..._204,
      ..._208,
      ..._210,
      ..._214,
      ..._218,
      ..._224,
      ..._228,
      ..._234,
      ..._236
    };
    export const epoch = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._215,
      ..._219,
      ..._225,
      ..._229
    };
    export const mint = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._216,
      ..._220,
      ..._226,
      ..._230
    };
    export const oracle = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._203,
      ..._205,
      ..._209,
      ..._211,
      ..._217,
      ..._221,
      ..._227,
      ..._231,
      ..._235,
      ..._237
    };
    export const tokenfactory = {
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
      ..._206,
      ..._207,
      ..._212,
      ..._213,
      ..._222,
      ..._223,
      ..._232,
      ..._233,
      ..._238,
      ..._239
    };
  }
  export const ClientFactory = {
    ..._266,
    ..._267,
    ..._268
  };
}