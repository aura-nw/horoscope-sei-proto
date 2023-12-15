import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as dexTxRegistry from "../dex/tx.registry";
import * as oracleTxRegistry from "../oracle/tx.registry";
import * as seiprotocolSeichainDexTxRegistry from "./seichain/dex/tx.registry";
import * as seiprotocolSeichainOracleTxRegistry from "./seichain/oracle/tx.registry";
import * as seiprotocolSeichainTokenfactoryTxRegistry from "./seichain/tokenfactory/tx.registry";
import * as tokenfactoryTxRegistry from "../tokenfactory/tx.registry";
import * as dexTxAmino from "../dex/tx.amino";
import * as oracleTxAmino from "../oracle/tx.amino";
import * as seiprotocolSeichainDexTxAmino from "./seichain/dex/tx.amino";
import * as seiprotocolSeichainOracleTxAmino from "./seichain/oracle/tx.amino";
import * as seiprotocolSeichainTokenfactoryTxAmino from "./seichain/tokenfactory/tx.amino";
import * as tokenfactoryTxAmino from "../tokenfactory/tx.amino";
export const seiprotocolAminoConverters = {
    ...dexTxAmino.AminoConverter,
    ...oracleTxAmino.AminoConverter,
    ...seiprotocolSeichainDexTxAmino.AminoConverter,
    ...seiprotocolSeichainOracleTxAmino.AminoConverter,
    ...seiprotocolSeichainTokenfactoryTxAmino.AminoConverter,
    ...tokenfactoryTxAmino.AminoConverter
};
export const seiprotocolProtoRegistry = [...dexTxRegistry.registry, ...oracleTxRegistry.registry, ...seiprotocolSeichainDexTxRegistry.registry, ...seiprotocolSeichainOracleTxRegistry.registry, ...seiprotocolSeichainTokenfactoryTxRegistry.registry, ...tokenfactoryTxRegistry.registry];
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
