import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as seiprotocolSeichainDexTxRegistry from "./seichain/dex/tx.registry";
import * as seiprotocolSeichainOracleTxRegistry from "./seichain/oracle/tx.registry";
import * as seiprotocolSeichainTokenfactoryTxRegistry from "./seichain/tokenfactory/tx.registry";
import * as seiprotocolSeichainDexTxAmino from "./seichain/dex/tx.amino";
import * as seiprotocolSeichainOracleTxAmino from "./seichain/oracle/tx.amino";
import * as seiprotocolSeichainTokenfactoryTxAmino from "./seichain/tokenfactory/tx.amino";
export const seiprotocolAminoConverters = {
    ...seiprotocolSeichainDexTxAmino.AminoConverter,
    ...seiprotocolSeichainOracleTxAmino.AminoConverter,
    ...seiprotocolSeichainTokenfactoryTxAmino.AminoConverter
};
export const seiprotocolProtoRegistry = [...seiprotocolSeichainDexTxRegistry.registry, ...seiprotocolSeichainOracleTxRegistry.registry, ...seiprotocolSeichainTokenfactoryTxRegistry.registry];
export const getSigningSeiprotocolClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...seiprotocolProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...seiprotocolAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningSeiprotocolClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningSeiprotocolClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};