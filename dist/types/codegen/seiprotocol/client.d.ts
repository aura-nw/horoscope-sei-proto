import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const seiprotocolAminoConverters: {
    "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: import("./seichain/tokenfactory/tx").MsgCreateDenom) => import("./seichain/tokenfactory/tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./seichain/tokenfactory/tx").MsgCreateDenomAmino) => import("./seichain/tokenfactory/tx").MsgCreateDenom;
    };
    "/seiprotocol.seichain.tokenfactory.MsgMint": {
        aminoType: string;
        toAmino: (message: import("./seichain/tokenfactory/tx").MsgMint) => import("./seichain/tokenfactory/tx").MsgMintAmino;
        fromAmino: (object: import("./seichain/tokenfactory/tx").MsgMintAmino) => import("./seichain/tokenfactory/tx").MsgMint;
    };
    "/seiprotocol.seichain.tokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: (message: import("./seichain/tokenfactory/tx").MsgBurn) => import("./seichain/tokenfactory/tx").MsgBurnAmino;
        fromAmino: (object: import("./seichain/tokenfactory/tx").MsgBurnAmino) => import("./seichain/tokenfactory/tx").MsgBurn;
    };
    "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: import("./seichain/tokenfactory/tx").MsgChangeAdmin) => import("./seichain/tokenfactory/tx").MsgChangeAdminAmino;
        fromAmino: (object: import("./seichain/tokenfactory/tx").MsgChangeAdminAmino) => import("./seichain/tokenfactory/tx").MsgChangeAdmin;
    };
    "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: (message: import("./seichain/oracle/tx").MsgAggregateExchangeRateVote) => import("./seichain/oracle/tx").MsgAggregateExchangeRateVoteAmino;
        fromAmino: (object: import("./seichain/oracle/tx").MsgAggregateExchangeRateVoteAmino) => import("./seichain/oracle/tx").MsgAggregateExchangeRateVote;
    };
    "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: (message: import("./seichain/oracle/tx").MsgDelegateFeedConsent) => import("./seichain/oracle/tx").MsgDelegateFeedConsentAmino;
        fromAmino: (object: import("./seichain/oracle/tx").MsgDelegateFeedConsentAmino) => import("./seichain/oracle/tx").MsgDelegateFeedConsent;
    };
    "/seiprotocol.seichain.dex.MsgPlaceOrders": {
        aminoType: string;
        toAmino: (message: import("./seichain/dex/tx").MsgPlaceOrders) => import("./seichain/dex/tx").MsgPlaceOrdersAmino;
        fromAmino: (object: import("./seichain/dex/tx").MsgPlaceOrdersAmino) => import("./seichain/dex/tx").MsgPlaceOrders;
    };
    "/seiprotocol.seichain.dex.MsgCancelOrders": {
        aminoType: string;
        toAmino: (message: import("./seichain/dex/tx").MsgCancelOrders) => import("./seichain/dex/tx").MsgCancelOrdersAmino;
        fromAmino: (object: import("./seichain/dex/tx").MsgCancelOrdersAmino) => import("./seichain/dex/tx").MsgCancelOrders;
    };
    "/seiprotocol.seichain.dex.MsgRegisterContract": {
        aminoType: string;
        toAmino: (message: import("./seichain/dex/tx").MsgRegisterContract) => import("./seichain/dex/tx").MsgRegisterContractAmino;
        fromAmino: (object: import("./seichain/dex/tx").MsgRegisterContractAmino) => import("./seichain/dex/tx").MsgRegisterContract;
    };
    "/seiprotocol.seichain.dex.MsgContractDepositRent": {
        aminoType: string;
        toAmino: (message: import("./seichain/dex/tx").MsgContractDepositRent) => import("./seichain/dex/tx").MsgContractDepositRentAmino;
        fromAmino: (object: import("./seichain/dex/tx").MsgContractDepositRentAmino) => import("./seichain/dex/tx").MsgContractDepositRent;
    };
    "/seiprotocol.seichain.dex.MsgUnregisterContract": {
        aminoType: string;
        toAmino: (message: import("./seichain/dex/tx").MsgUnregisterContract) => import("./seichain/dex/tx").MsgUnregisterContractAmino;
        fromAmino: (object: import("./seichain/dex/tx").MsgUnregisterContractAmino) => import("./seichain/dex/tx").MsgUnregisterContract;
    };
    "/seiprotocol.seichain.dex.MsgRegisterPairs": {
        aminoType: string;
        toAmino: (message: import("./seichain/dex/tx").MsgRegisterPairs) => import("./seichain/dex/tx").MsgRegisterPairsAmino;
        fromAmino: (object: import("./seichain/dex/tx").MsgRegisterPairsAmino) => import("./seichain/dex/tx").MsgRegisterPairs;
    };
    "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
        aminoType: string;
        toAmino: (message: import("./seichain/dex/tx").MsgUpdatePriceTickSize) => import("./seichain/dex/tx").MsgUpdatePriceTickSizeAmino;
        fromAmino: (object: import("./seichain/dex/tx").MsgUpdatePriceTickSizeAmino) => import("./seichain/dex/tx").MsgUpdatePriceTickSize;
    };
    "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
        aminoType: string;
        toAmino: (message: import("./seichain/dex/tx").MsgUpdateQuantityTickSize) => import("./seichain/dex/tx").MsgUpdateQuantityTickSizeAmino;
        fromAmino: (object: import("./seichain/dex/tx").MsgUpdateQuantityTickSizeAmino) => import("./seichain/dex/tx").MsgUpdateQuantityTickSize;
    };
    "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
        aminoType: string;
        toAmino: (message: import("./seichain/dex/tx").MsgUnsuspendContract) => import("./seichain/dex/tx").MsgUnsuspendContractAmino;
        fromAmino: (object: import("./seichain/dex/tx").MsgUnsuspendContractAmino) => import("./seichain/dex/tx").MsgUnsuspendContract;
    };
};
export declare const seiprotocolProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningSeiprotocolClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningSeiprotocolClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
