import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export const registry = [["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: MsgStoreCode.encode(value).finish()
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: MsgInstantiateContract.encode(value).finish()
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: MsgExecuteContract.encode(value).finish()
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: MsgMigrateContract.encode(value).finish()
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: MsgUpdateAdmin.encode(value).finish()
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: MsgClearAdmin.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value
            };
        }
    },
    toJSON: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: MsgStoreCode.toJSON(value)
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: MsgInstantiateContract.toJSON(value)
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: MsgExecuteContract.toJSON(value)
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: MsgMigrateContract.toJSON(value)
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: MsgUpdateAdmin.toJSON(value)
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: MsgClearAdmin.toJSON(value)
            };
        }
    },
    fromJSON: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: MsgStoreCode.fromJSON(value)
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: MsgInstantiateContract.fromJSON(value)
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: MsgExecuteContract.fromJSON(value)
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: MsgMigrateContract.fromJSON(value)
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: MsgUpdateAdmin.fromJSON(value)
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: MsgClearAdmin.fromJSON(value)
            };
        }
    },
    fromPartial: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: MsgStoreCode.fromPartial(value)
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: MsgInstantiateContract.fromPartial(value)
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: MsgExecuteContract.fromPartial(value)
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: MsgMigrateContract.fromPartial(value)
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: MsgUpdateAdmin.fromPartial(value)
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: MsgClearAdmin.fromPartial(value)
            };
        }
    }
};
