import { MsgPlaceOrders, MsgCancelOrders, MsgRegisterContract, MsgContractDepositRent, MsgUnregisterContract, MsgRegisterPairs, MsgUpdatePriceTickSize, MsgUpdateQuantityTickSize, MsgUnsuspendContract } from "./tx";
export declare const AminoConverter: {
    "/seiprotocol.seichain.dex.MsgPlaceOrders": {
        aminoType: string;
        toAmino: (message: MsgPlaceOrders) => import("./tx").MsgPlaceOrdersAmino;
        fromAmino: (object: import("./tx").MsgPlaceOrdersAmino) => MsgPlaceOrders;
    };
    "/seiprotocol.seichain.dex.MsgCancelOrders": {
        aminoType: string;
        toAmino: (message: MsgCancelOrders) => import("./tx").MsgCancelOrdersAmino;
        fromAmino: (object: import("./tx").MsgCancelOrdersAmino) => MsgCancelOrders;
    };
    "/seiprotocol.seichain.dex.MsgRegisterContract": {
        aminoType: string;
        toAmino: (message: MsgRegisterContract) => import("./tx").MsgRegisterContractAmino;
        fromAmino: (object: import("./tx").MsgRegisterContractAmino) => MsgRegisterContract;
    };
    "/seiprotocol.seichain.dex.MsgContractDepositRent": {
        aminoType: string;
        toAmino: (message: MsgContractDepositRent) => import("./tx").MsgContractDepositRentAmino;
        fromAmino: (object: import("./tx").MsgContractDepositRentAmino) => MsgContractDepositRent;
    };
    "/seiprotocol.seichain.dex.MsgUnregisterContract": {
        aminoType: string;
        toAmino: (message: MsgUnregisterContract) => import("./tx").MsgUnregisterContractAmino;
        fromAmino: (object: import("./tx").MsgUnregisterContractAmino) => MsgUnregisterContract;
    };
    "/seiprotocol.seichain.dex.MsgRegisterPairs": {
        aminoType: string;
        toAmino: (message: MsgRegisterPairs) => import("./tx").MsgRegisterPairsAmino;
        fromAmino: (object: import("./tx").MsgRegisterPairsAmino) => MsgRegisterPairs;
    };
    "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
        aminoType: string;
        toAmino: (message: MsgUpdatePriceTickSize) => import("./tx").MsgUpdatePriceTickSizeAmino;
        fromAmino: (object: import("./tx").MsgUpdatePriceTickSizeAmino) => MsgUpdatePriceTickSize;
    };
    "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
        aminoType: string;
        toAmino: (message: MsgUpdateQuantityTickSize) => import("./tx").MsgUpdateQuantityTickSizeAmino;
        fromAmino: (object: import("./tx").MsgUpdateQuantityTickSizeAmino) => MsgUpdateQuantityTickSize;
    };
    "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
        aminoType: string;
        toAmino: (message: MsgUnsuspendContract) => import("./tx").MsgUnsuspendContractAmino;
        fromAmino: (object: import("./tx").MsgUnsuspendContractAmino) => MsgUnsuspendContract;
    };
};
