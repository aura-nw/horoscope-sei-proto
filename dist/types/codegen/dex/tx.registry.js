import { MsgPlaceOrders, MsgCancelOrders, MsgRegisterContract, MsgContractDepositRent, MsgUnregisterContract, MsgRegisterPairs, MsgUpdatePriceTickSize, MsgUpdateQuantityTickSize, MsgUnsuspendContract } from "./tx";
export const registry = [["/seiprotocol.seichain.dex.MsgPlaceOrders", MsgPlaceOrders], ["/seiprotocol.seichain.dex.MsgCancelOrders", MsgCancelOrders], ["/seiprotocol.seichain.dex.MsgRegisterContract", MsgRegisterContract], ["/seiprotocol.seichain.dex.MsgContractDepositRent", MsgContractDepositRent], ["/seiprotocol.seichain.dex.MsgUnregisterContract", MsgUnregisterContract], ["/seiprotocol.seichain.dex.MsgRegisterPairs", MsgRegisterPairs], ["/seiprotocol.seichain.dex.MsgUpdatePriceTickSize", MsgUpdatePriceTickSize], ["/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize", MsgUpdateQuantityTickSize], ["/seiprotocol.seichain.dex.MsgUnsuspendContract", MsgUnsuspendContract]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        placeOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
                value: MsgPlaceOrders.encode(value).finish()
            };
        },
        cancelOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
                value: MsgCancelOrders.encode(value).finish()
            };
        },
        registerContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
                value: MsgRegisterContract.encode(value).finish()
            };
        },
        contractDepositRent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
                value: MsgContractDepositRent.encode(value).finish()
            };
        },
        unregisterContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
                value: MsgUnregisterContract.encode(value).finish()
            };
        },
        registerPairs(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
                value: MsgRegisterPairs.encode(value).finish()
            };
        },
        updatePriceTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
                value: MsgUpdatePriceTickSize.encode(value).finish()
            };
        },
        updateQuantityTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
                value: MsgUpdateQuantityTickSize.encode(value).finish()
            };
        },
        unsuspendContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
                value: MsgUnsuspendContract.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        placeOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
                value
            };
        },
        cancelOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
                value
            };
        },
        registerContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
                value
            };
        },
        contractDepositRent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
                value
            };
        },
        unregisterContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
                value
            };
        },
        registerPairs(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
                value
            };
        },
        updatePriceTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
                value
            };
        },
        updateQuantityTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
                value
            };
        },
        unsuspendContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
                value
            };
        }
    },
    toJSON: {
        placeOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
                value: MsgPlaceOrders.toJSON(value)
            };
        },
        cancelOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
                value: MsgCancelOrders.toJSON(value)
            };
        },
        registerContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
                value: MsgRegisterContract.toJSON(value)
            };
        },
        contractDepositRent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
                value: MsgContractDepositRent.toJSON(value)
            };
        },
        unregisterContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
                value: MsgUnregisterContract.toJSON(value)
            };
        },
        registerPairs(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
                value: MsgRegisterPairs.toJSON(value)
            };
        },
        updatePriceTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
                value: MsgUpdatePriceTickSize.toJSON(value)
            };
        },
        updateQuantityTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
                value: MsgUpdateQuantityTickSize.toJSON(value)
            };
        },
        unsuspendContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
                value: MsgUnsuspendContract.toJSON(value)
            };
        }
    },
    fromJSON: {
        placeOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
                value: MsgPlaceOrders.fromJSON(value)
            };
        },
        cancelOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
                value: MsgCancelOrders.fromJSON(value)
            };
        },
        registerContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
                value: MsgRegisterContract.fromJSON(value)
            };
        },
        contractDepositRent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
                value: MsgContractDepositRent.fromJSON(value)
            };
        },
        unregisterContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
                value: MsgUnregisterContract.fromJSON(value)
            };
        },
        registerPairs(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
                value: MsgRegisterPairs.fromJSON(value)
            };
        },
        updatePriceTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
                value: MsgUpdatePriceTickSize.fromJSON(value)
            };
        },
        updateQuantityTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
                value: MsgUpdateQuantityTickSize.fromJSON(value)
            };
        },
        unsuspendContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
                value: MsgUnsuspendContract.fromJSON(value)
            };
        }
    },
    fromPartial: {
        placeOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
                value: MsgPlaceOrders.fromPartial(value)
            };
        },
        cancelOrders(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
                value: MsgCancelOrders.fromPartial(value)
            };
        },
        registerContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
                value: MsgRegisterContract.fromPartial(value)
            };
        },
        contractDepositRent(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
                value: MsgContractDepositRent.fromPartial(value)
            };
        },
        unregisterContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
                value: MsgUnregisterContract.fromPartial(value)
            };
        },
        registerPairs(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
                value: MsgRegisterPairs.fromPartial(value)
            };
        },
        updatePriceTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
                value: MsgUpdatePriceTickSize.fromPartial(value)
            };
        },
        updateQuantityTickSize(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
                value: MsgUpdateQuantityTickSize.fromPartial(value)
            };
        },
        unsuspendContract(value) {
            return {
                typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
                value: MsgUnsuspendContract.fromPartial(value)
            };
        }
    }
};
