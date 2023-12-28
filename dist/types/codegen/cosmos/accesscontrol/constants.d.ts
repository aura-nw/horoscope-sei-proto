export declare enum AccessType {
    UNKNOWN = 0,
    READ = 1,
    WRITE = 2,
    COMMIT = 3,
    UNRECOGNIZED = -1
}
export declare const AccessTypeSDKType: typeof AccessType;
export declare const AccessTypeAmino: typeof AccessType;
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
export declare enum AccessOperationSelectorType {
    NONE = 0,
    JQ = 1,
    JQ_BECH32_ADDRESS = 2,
    JQ_LENGTH_PREFIXED_ADDRESS = 3,
    SENDER_BECH32_ADDRESS = 4,
    SENDER_LENGTH_PREFIXED_ADDRESS = 5,
    CONTRACT_ADDRESS = 6,
    JQ_MESSAGE_CONDITIONAL = 7,
    CONSTANT_STRING_TO_HEX = 8,
    CONTRACT_REFERENCE = 9,
    UNRECOGNIZED = -1
}
export declare const AccessOperationSelectorTypeSDKType: typeof AccessOperationSelectorType;
export declare const AccessOperationSelectorTypeAmino: typeof AccessOperationSelectorType;
export declare function accessOperationSelectorTypeFromJSON(object: any): AccessOperationSelectorType;
export declare function accessOperationSelectorTypeToJSON(object: AccessOperationSelectorType): string;
export declare enum ResourceType {
    ANY = 0,
    /** KV - child of ANY */
    KV = 1,
    /** Mem - child of ANY */
    Mem = 2,
    /** DexMem - child of MEM */
    DexMem = 3,
    /** KV_BANK - child of KV */
    KV_BANK = 4,
    /** KV_STAKING - child of KV */
    KV_STAKING = 5,
    /** KV_WASM - child of KV */
    KV_WASM = 6,
    /** KV_ORACLE - child of KV */
    KV_ORACLE = 7,
    /** KV_DEX - child of KV */
    KV_DEX = 8,
    /** KV_EPOCH - child of KV */
    KV_EPOCH = 9,
    /** KV_TOKENFACTORY - child of KV */
    KV_TOKENFACTORY = 10,
    /** KV_ORACLE_VOTE_TARGETS - child of KV_ORACLE */
    KV_ORACLE_VOTE_TARGETS = 11,
    /** KV_ORACLE_AGGREGATE_VOTES - child of KV_ORACLE */
    KV_ORACLE_AGGREGATE_VOTES = 12,
    /** KV_ORACLE_FEEDERS - child of KV_ORACLE */
    KV_ORACLE_FEEDERS = 13,
    /** KV_STAKING_DELEGATION - child of KV_STAKING */
    KV_STAKING_DELEGATION = 14,
    /** KV_STAKING_VALIDATOR - child of KV_STAKING */
    KV_STAKING_VALIDATOR = 15,
    /** KV_AUTH - child of KV */
    KV_AUTH = 16,
    /** KV_AUTH_ADDRESS_STORE - child of KV */
    KV_AUTH_ADDRESS_STORE = 17,
    /** KV_BANK_SUPPLY - child of KV_BANK */
    KV_BANK_SUPPLY = 18,
    /** KV_BANK_DENOM - child of KV_BANK */
    KV_BANK_DENOM = 19,
    /** KV_BANK_BALANCES - child of KV_BANK */
    KV_BANK_BALANCES = 20,
    /** KV_TOKENFACTORY_DENOM - child of KV_TOKENFACTORY */
    KV_TOKENFACTORY_DENOM = 21,
    /** KV_TOKENFACTORY_METADATA - child of KV_TOKENFACTORY */
    KV_TOKENFACTORY_METADATA = 22,
    /** KV_TOKENFACTORY_ADMIN - child of KV_TOKENFACTORY */
    KV_TOKENFACTORY_ADMIN = 23,
    /** KV_TOKENFACTORY_CREATOR - child of KV_TOKENFACTORY */
    KV_TOKENFACTORY_CREATOR = 24,
    /** KV_ORACLE_EXCHANGE_RATE - child of KV_ORACLE */
    KV_ORACLE_EXCHANGE_RATE = 25,
    /** KV_ORACLE_VOTE_PENALTY_COUNTER - child of KV_ORACLE */
    KV_ORACLE_VOTE_PENALTY_COUNTER = 26,
    /** KV_ORACLE_PRICE_SNAPSHOT - child of KV_ORACLE */
    KV_ORACLE_PRICE_SNAPSHOT = 27,
    /** KV_STAKING_VALIDATION_POWER - child of KV_STAKING */
    KV_STAKING_VALIDATION_POWER = 28,
    /** KV_STAKING_TOTAL_POWER - child of KV_STAKING */
    KV_STAKING_TOTAL_POWER = 29,
    /** KV_STAKING_VALIDATORS_CON_ADDR - child of KV_STAKING */
    KV_STAKING_VALIDATORS_CON_ADDR = 30,
    /** KV_STAKING_UNBONDING_DELEGATION - child of KV_STAKING */
    KV_STAKING_UNBONDING_DELEGATION = 31,
    /** KV_STAKING_UNBONDING_DELEGATION_VAL - child of KV_STAKING */
    KV_STAKING_UNBONDING_DELEGATION_VAL = 32,
    /** KV_STAKING_REDELEGATION - child of KV_STAKING */
    KV_STAKING_REDELEGATION = 33,
    /** KV_STAKING_REDELEGATION_VAL_SRC - child of KV_STAKING */
    KV_STAKING_REDELEGATION_VAL_SRC = 34,
    /** KV_STAKING_REDELEGATION_VAL_DST - child of KV_STAKING */
    KV_STAKING_REDELEGATION_VAL_DST = 35,
    /** KV_STAKING_REDELEGATION_QUEUE - child of KV_STAKING */
    KV_STAKING_REDELEGATION_QUEUE = 36,
    /** KV_STAKING_VALIDATOR_QUEUE - child of KV_STAKING */
    KV_STAKING_VALIDATOR_QUEUE = 37,
    /** KV_STAKING_HISTORICAL_INFO - child of KV_STAKING */
    KV_STAKING_HISTORICAL_INFO = 38,
    /** KV_STAKING_UNBONDING - child of KV_STAKING */
    KV_STAKING_UNBONDING = 39,
    /** KV_STAKING_VALIDATORS_BY_POWER - child of KV_STAKING */
    KV_STAKING_VALIDATORS_BY_POWER = 41,
    /** KV_DISTRIBUTION - child of KV */
    KV_DISTRIBUTION = 40,
    /** KV_DISTRIBUTION_FEE_POOL - child of KV_DISTRIBUTION */
    KV_DISTRIBUTION_FEE_POOL = 42,
    /** KV_DISTRIBUTION_PROPOSER_KEY - child of KV_DISTRIBUTION */
    KV_DISTRIBUTION_PROPOSER_KEY = 43,
    /** KV_DISTRIBUTION_OUTSTANDING_REWARDS - child of KV_DISTRIBUTION */
    KV_DISTRIBUTION_OUTSTANDING_REWARDS = 44,
    /** KV_DISTRIBUTION_DELEGATOR_WITHDRAW_ADDR - child of KV_DISTRIBUTION */
    KV_DISTRIBUTION_DELEGATOR_WITHDRAW_ADDR = 45,
    /** KV_DISTRIBUTION_DELEGATOR_STARTING_INFO - child of KV_DISTRIBUTION */
    KV_DISTRIBUTION_DELEGATOR_STARTING_INFO = 46,
    /** KV_DISTRIBUTION_VAL_HISTORICAL_REWARDS - child of KV_DISTRIBUTION */
    KV_DISTRIBUTION_VAL_HISTORICAL_REWARDS = 47,
    /** KV_DISTRIBUTION_VAL_CURRENT_REWARDS - child of KV_DISTRIBUTION */
    KV_DISTRIBUTION_VAL_CURRENT_REWARDS = 48,
    /** KV_DISTRIBUTION_VAL_ACCUM_COMMISSION - child of KV_DISTRIBUTION */
    KV_DISTRIBUTION_VAL_ACCUM_COMMISSION = 49,
    /** KV_DISTRIBUTION_SLASH_EVENT - child of KV_DISTRIBUTION */
    KV_DISTRIBUTION_SLASH_EVENT = 50,
    /** KV_DEX_CONTRACT_LONGBOOK - child of KV_DEX */
    KV_DEX_CONTRACT_LONGBOOK = 51,
    /** KV_DEX_CONTRACT_SHORTBOOK - child of KV_DEX */
    KV_DEX_CONTRACT_SHORTBOOK = 52,
    /** KV_DEX_SETTLEMENT - child of KV_DEX */
    KV_DEX_SETTLEMENT = 53,
    /** KV_DEX_PAIR_PREFIX - child of KV_DEX */
    KV_DEX_PAIR_PREFIX = 54,
    /** KV_DEX_TWAP - child of KV_DEX */
    KV_DEX_TWAP = 55,
    /** KV_DEX_PRICE - child of KV_DEX */
    KV_DEX_PRICE = 56,
    /** KV_DEX_SETTLEMENT_ENTRY - child of KV_DEX */
    KV_DEX_SETTLEMENT_ENTRY = 57,
    /** KV_DEX_REGISTERED_PAIR - child of KV_DEX */
    KV_DEX_REGISTERED_PAIR = 58,
    /** KV_DEX_ORDER - child of KV_DEX */
    KV_DEX_ORDER = 60,
    /** KV_DEX_CANCEL - child of KV_DEX */
    KV_DEX_CANCEL = 61,
    /** KV_DEX_ACCOUNT_ACTIVE_ORDERS - child of KV_DEX */
    KV_DEX_ACCOUNT_ACTIVE_ORDERS = 62,
    /** KV_DEX_ASSET_LIST - child of KV_DEX */
    KV_DEX_ASSET_LIST = 64,
    /** KV_DEX_NEXT_ORDER_ID - child of KV_DEX */
    KV_DEX_NEXT_ORDER_ID = 65,
    /** KV_DEX_NEXT_SETTLEMENT_ID - child of KV_DEX */
    KV_DEX_NEXT_SETTLEMENT_ID = 66,
    /** KV_DEX_MATCH_RESULT - child of KV_DEX */
    KV_DEX_MATCH_RESULT = 67,
    /** KV_DEX_SETTLEMENT_ORDER_ID - child of KV_DEX */
    KV_DEX_SETTLEMENT_ORDER_ID = 68,
    /** KV_DEX_ORDER_BOOK - child of KV_DEX */
    KV_DEX_ORDER_BOOK = 69,
    /** KV_ACCESSCONTROL - child of KV */
    KV_ACCESSCONTROL = 71,
    /** KV_ACCESSCONTROL_WASM_DEPENDENCY_MAPPING - child of KV_ACCESSCONTROL */
    KV_ACCESSCONTROL_WASM_DEPENDENCY_MAPPING = 72,
    /** KV_WASM_CODE - child of KV_WASM */
    KV_WASM_CODE = 73,
    /** KV_WASM_CONTRACT_ADDRESS - child of KV_WASM */
    KV_WASM_CONTRACT_ADDRESS = 74,
    /** KV_WASM_CONTRACT_STORE - child of KV_WASM */
    KV_WASM_CONTRACT_STORE = 75,
    /** KV_WASM_SEQUENCE_KEY - child of KV_WASM */
    KV_WASM_SEQUENCE_KEY = 76,
    /** KV_WASM_CONTRACT_CODE_HISTORY - child of KV_WASM */
    KV_WASM_CONTRACT_CODE_HISTORY = 77,
    /** KV_WASM_CONTRACT_BY_CODE_ID - child of KV_WASM */
    KV_WASM_CONTRACT_BY_CODE_ID = 78,
    /** KV_WASM_PINNED_CODE_INDEX - child of KV_WASM */
    KV_WASM_PINNED_CODE_INDEX = 79,
    /** KV_AUTH_GLOBAL_ACCOUNT_NUMBER - child of KV_AUTH */
    KV_AUTH_GLOBAL_ACCOUNT_NUMBER = 80,
    /** KV_AUTHZ - child of KV */
    KV_AUTHZ = 81,
    /** KV_FEEGRANT - child of KV */
    KV_FEEGRANT = 82,
    /** KV_FEEGRANT_ALLOWANCE - child of KV_FEEGRANT */
    KV_FEEGRANT_ALLOWANCE = 83,
    /** KV_SLASHING - child of KV */
    KV_SLASHING = 84,
    /** KV_SLASHING_VAL_SIGNING_INFO - child of KV_SLASHING */
    KV_SLASHING_VAL_SIGNING_INFO = 85,
    /** KV_SLASHING_ADDR_PUBKEY_RELATION_KEY - child of KV_SLASHING */
    KV_SLASHING_ADDR_PUBKEY_RELATION_KEY = 86,
    KV_DEX_MEM_ORDER = 87,
    KV_DEX_MEM_CANCEL = 88,
    KV_DEX_MEM_DEPOSIT = 89,
    /** KV_DEX_CONTRACT - child of KV_DEX */
    KV_DEX_CONTRACT = 90,
    /** KV_DEX_LONG_ORDER_COUNT - child of KV_DEX */
    KV_DEX_LONG_ORDER_COUNT = 91,
    /** KV_DEX_SHORT_ORDER_COUNT - child of KV_DEX */
    KV_DEX_SHORT_ORDER_COUNT = 92,
    /** KV_BANK_DEFERRED - child of KV */
    KV_BANK_DEFERRED = 93,
    /** KV_BANK_DEFERRED_MODULE_TX_INDEX - child of KV_BANK_DEFERRED */
    KV_BANK_DEFERRED_MODULE_TX_INDEX = 95,
    UNRECOGNIZED = -1
}
export declare const ResourceTypeSDKType: typeof ResourceType;
export declare const ResourceTypeAmino: typeof ResourceType;
export declare function resourceTypeFromJSON(object: any): ResourceType;
export declare function resourceTypeToJSON(object: ResourceType): string;
export declare enum WasmMessageSubtype {
    QUERY = 0,
    EXECUTE = 1,
    UNRECOGNIZED = -1
}
export declare const WasmMessageSubtypeSDKType: typeof WasmMessageSubtype;
export declare const WasmMessageSubtypeAmino: typeof WasmMessageSubtype;
export declare function wasmMessageSubtypeFromJSON(object: any): WasmMessageSubtype;
export declare function wasmMessageSubtypeToJSON(object: WasmMessageSubtype): string;
