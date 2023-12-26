import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _296 from "./wasm/v1/query.lcd";
import * as _297 from "./wasm/v1/query.rpc.Query";
import * as _298 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _297.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _97.QueryContractInfoRequest): Promise<_97.QueryContractInfoResponse>;
                contractHistory(request: _97.QueryContractHistoryRequest): Promise<_97.QueryContractHistoryResponse>;
                contractsByCode(request: _97.QueryContractsByCodeRequest): Promise<_97.QueryContractsByCodeResponse>;
                allContractState(request: _97.QueryAllContractStateRequest): Promise<_97.QueryAllContractStateResponse>;
                rawContractState(request: _97.QueryRawContractStateRequest): Promise<_97.QueryRawContractStateResponse>;
                smartContractState(request: _97.QuerySmartContractStateRequest): Promise<_97.QuerySmartContractStateResponse>;
                code(request: _97.QueryCodeRequest): Promise<_97.QueryCodeResponse>;
                codes(request?: _97.QueryCodesRequest): Promise<_97.QueryCodesResponse>;
                pinnedCodes(request?: _97.QueryPinnedCodesRequest): Promise<_97.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _296.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _98.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _98.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _98.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _98.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _98.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _98.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _98.MsgStoreCode): {
                        typeUrl: string;
                        value: _98.MsgStoreCode;
                    };
                    instantiateContract(value: _98.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _98.MsgInstantiateContract;
                    };
                    executeContract(value: _98.MsgExecuteContract): {
                        typeUrl: string;
                        value: _98.MsgExecuteContract;
                    };
                    migrateContract(value: _98.MsgMigrateContract): {
                        typeUrl: string;
                        value: _98.MsgMigrateContract;
                    };
                    updateAdmin(value: _98.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _98.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _98.MsgClearAdmin): {
                        typeUrl: string;
                        value: _98.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _98.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _98.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _98.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _98.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _98.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _98.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _98.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _98.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _98.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _98.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _98.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _98.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _98.MsgStoreCode): {
                        typeUrl: string;
                        value: _98.MsgStoreCode;
                    };
                    instantiateContract(value: _98.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _98.MsgInstantiateContract;
                    };
                    executeContract(value: _98.MsgExecuteContract): {
                        typeUrl: string;
                        value: _98.MsgExecuteContract;
                    };
                    migrateContract(value: _98.MsgMigrateContract): {
                        typeUrl: string;
                        value: _98.MsgMigrateContract;
                    };
                    updateAdmin(value: _98.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _98.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _98.MsgClearAdmin): {
                        typeUrl: string;
                        value: _98.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _98.MsgStoreCode) => _98.MsgStoreCodeAmino;
                    fromAmino: (object: _98.MsgStoreCodeAmino) => _98.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _98.MsgInstantiateContract) => _98.MsgInstantiateContractAmino;
                    fromAmino: (object: _98.MsgInstantiateContractAmino) => _98.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _98.MsgExecuteContract) => _98.MsgExecuteContractAmino;
                    fromAmino: (object: _98.MsgExecuteContractAmino) => _98.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _98.MsgMigrateContract) => _98.MsgMigrateContractAmino;
                    fromAmino: (object: _98.MsgMigrateContractAmino) => _98.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _98.MsgUpdateAdmin) => _98.MsgUpdateAdminAmino;
                    fromAmino: (object: _98.MsgUpdateAdminAmino) => _98.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _98.MsgClearAdmin) => _98.MsgClearAdminAmino;
                    fromAmino: (object: _98.MsgClearAdminAmino) => _98.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _99.AccessType;
            accessTypeToJSON(object: _99.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _99.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _99.ContractCodeHistoryOperationType): string;
            AccessType: typeof _99.AccessType;
            AccessTypeSDKType: typeof _99.AccessType;
            AccessTypeAmino: typeof _99.AccessType;
            ContractCodeHistoryOperationType: typeof _99.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _99.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _99.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _99.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AccessTypeParam;
                fromJSON(object: any): _99.AccessTypeParam;
                toJSON(message: _99.AccessTypeParam): unknown;
                fromPartial(object: Partial<_99.AccessTypeParam>): _99.AccessTypeParam;
                fromAmino(object: _99.AccessTypeParamAmino): _99.AccessTypeParam;
                toAmino(message: _99.AccessTypeParam): _99.AccessTypeParamAmino;
                fromAminoMsg(object: _99.AccessTypeParamAminoMsg): _99.AccessTypeParam;
                toAminoMsg(message: _99.AccessTypeParam): _99.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _99.AccessTypeParamProtoMsg): _99.AccessTypeParam;
                toProto(message: _99.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _99.AccessTypeParam): _99.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _99.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AccessConfig;
                fromJSON(object: any): _99.AccessConfig;
                toJSON(message: _99.AccessConfig): unknown;
                fromPartial(object: Partial<_99.AccessConfig>): _99.AccessConfig;
                fromAmino(object: _99.AccessConfigAmino): _99.AccessConfig;
                toAmino(message: _99.AccessConfig): _99.AccessConfigAmino;
                fromAminoMsg(object: _99.AccessConfigAminoMsg): _99.AccessConfig;
                toAminoMsg(message: _99.AccessConfig): _99.AccessConfigAminoMsg;
                fromProtoMsg(message: _99.AccessConfigProtoMsg): _99.AccessConfig;
                toProto(message: _99.AccessConfig): Uint8Array;
                toProtoMsg(message: _99.AccessConfig): _99.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _99.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Params;
                fromJSON(object: any): _99.Params;
                toJSON(message: _99.Params): unknown;
                fromPartial(object: Partial<_99.Params>): _99.Params;
                fromAmino(object: _99.ParamsAmino): _99.Params;
                toAmino(message: _99.Params): _99.ParamsAmino;
                fromAminoMsg(object: _99.ParamsAminoMsg): _99.Params;
                toAminoMsg(message: _99.Params): _99.ParamsAminoMsg;
                fromProtoMsg(message: _99.ParamsProtoMsg): _99.Params;
                toProto(message: _99.Params): Uint8Array;
                toProtoMsg(message: _99.Params): _99.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _99.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.CodeInfo;
                fromJSON(object: any): _99.CodeInfo;
                toJSON(message: _99.CodeInfo): unknown;
                fromPartial(object: Partial<_99.CodeInfo>): _99.CodeInfo;
                fromAmino(object: _99.CodeInfoAmino): _99.CodeInfo;
                toAmino(message: _99.CodeInfo): _99.CodeInfoAmino;
                fromAminoMsg(object: _99.CodeInfoAminoMsg): _99.CodeInfo;
                toAminoMsg(message: _99.CodeInfo): _99.CodeInfoAminoMsg;
                fromProtoMsg(message: _99.CodeInfoProtoMsg): _99.CodeInfo;
                toProto(message: _99.CodeInfo): Uint8Array;
                toProtoMsg(message: _99.CodeInfo): _99.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _99.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ContractInfo;
                fromJSON(object: any): _99.ContractInfo;
                toJSON(message: _99.ContractInfo): unknown;
                fromPartial(object: Partial<_99.ContractInfo>): _99.ContractInfo;
                fromAmino(object: _99.ContractInfoAmino): _99.ContractInfo;
                toAmino(message: _99.ContractInfo): _99.ContractInfoAmino;
                fromAminoMsg(object: _99.ContractInfoAminoMsg): _99.ContractInfo;
                toAminoMsg(message: _99.ContractInfo): _99.ContractInfoAminoMsg;
                fromProtoMsg(message: _99.ContractInfoProtoMsg): _99.ContractInfo;
                toProto(message: _99.ContractInfo): Uint8Array;
                toProtoMsg(message: _99.ContractInfo): _99.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _99.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ContractCodeHistoryEntry;
                fromJSON(object: any): _99.ContractCodeHistoryEntry;
                toJSON(message: _99.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_99.ContractCodeHistoryEntry>): _99.ContractCodeHistoryEntry;
                fromAmino(object: _99.ContractCodeHistoryEntryAmino): _99.ContractCodeHistoryEntry;
                toAmino(message: _99.ContractCodeHistoryEntry): _99.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _99.ContractCodeHistoryEntryAminoMsg): _99.ContractCodeHistoryEntry;
                toAminoMsg(message: _99.ContractCodeHistoryEntry): _99.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _99.ContractCodeHistoryEntryProtoMsg): _99.ContractCodeHistoryEntry;
                toProto(message: _99.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _99.ContractCodeHistoryEntry): _99.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _99.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AbsoluteTxPosition;
                fromJSON(object: any): _99.AbsoluteTxPosition;
                toJSON(message: _99.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_99.AbsoluteTxPosition>): _99.AbsoluteTxPosition;
                fromAmino(object: _99.AbsoluteTxPositionAmino): _99.AbsoluteTxPosition;
                toAmino(message: _99.AbsoluteTxPosition): _99.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _99.AbsoluteTxPositionAminoMsg): _99.AbsoluteTxPosition;
                toAminoMsg(message: _99.AbsoluteTxPosition): _99.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _99.AbsoluteTxPositionProtoMsg): _99.AbsoluteTxPosition;
                toProto(message: _99.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _99.AbsoluteTxPosition): _99.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _99.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Model;
                fromJSON(object: any): _99.Model;
                toJSON(message: _99.Model): unknown;
                fromPartial(object: Partial<_99.Model>): _99.Model;
                fromAmino(object: _99.ModelAmino): _99.Model;
                toAmino(message: _99.Model): _99.ModelAmino;
                fromAminoMsg(object: _99.ModelAminoMsg): _99.Model;
                toAminoMsg(message: _99.Model): _99.ModelAminoMsg;
                fromProtoMsg(message: _99.ModelProtoMsg): _99.Model;
                toProto(message: _99.Model): Uint8Array;
                toProtoMsg(message: _99.Model): _99.ModelProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _98.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStoreCode;
                fromJSON(object: any): _98.MsgStoreCode;
                toJSON(message: _98.MsgStoreCode): unknown;
                fromPartial(object: Partial<_98.MsgStoreCode>): _98.MsgStoreCode;
                fromAmino(object: _98.MsgStoreCodeAmino): _98.MsgStoreCode;
                toAmino(message: _98.MsgStoreCode): _98.MsgStoreCodeAmino;
                fromAminoMsg(object: _98.MsgStoreCodeAminoMsg): _98.MsgStoreCode;
                toAminoMsg(message: _98.MsgStoreCode): _98.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _98.MsgStoreCodeProtoMsg): _98.MsgStoreCode;
                toProto(message: _98.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _98.MsgStoreCode): _98.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _98.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStoreCodeResponse;
                fromJSON(object: any): _98.MsgStoreCodeResponse;
                toJSON(message: _98.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_98.MsgStoreCodeResponse>): _98.MsgStoreCodeResponse;
                fromAmino(object: _98.MsgStoreCodeResponseAmino): _98.MsgStoreCodeResponse;
                toAmino(message: _98.MsgStoreCodeResponse): _98.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _98.MsgStoreCodeResponseAminoMsg): _98.MsgStoreCodeResponse;
                toAminoMsg(message: _98.MsgStoreCodeResponse): _98.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _98.MsgStoreCodeResponseProtoMsg): _98.MsgStoreCodeResponse;
                toProto(message: _98.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _98.MsgStoreCodeResponse): _98.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _98.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgInstantiateContract;
                fromJSON(object: any): _98.MsgInstantiateContract;
                toJSON(message: _98.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_98.MsgInstantiateContract>): _98.MsgInstantiateContract;
                fromAmino(object: _98.MsgInstantiateContractAmino): _98.MsgInstantiateContract;
                toAmino(message: _98.MsgInstantiateContract): _98.MsgInstantiateContractAmino;
                fromAminoMsg(object: _98.MsgInstantiateContractAminoMsg): _98.MsgInstantiateContract;
                toAminoMsg(message: _98.MsgInstantiateContract): _98.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _98.MsgInstantiateContractProtoMsg): _98.MsgInstantiateContract;
                toProto(message: _98.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _98.MsgInstantiateContract): _98.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _98.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgInstantiateContractResponse;
                fromJSON(object: any): _98.MsgInstantiateContractResponse;
                toJSON(message: _98.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_98.MsgInstantiateContractResponse>): _98.MsgInstantiateContractResponse;
                fromAmino(object: _98.MsgInstantiateContractResponseAmino): _98.MsgInstantiateContractResponse;
                toAmino(message: _98.MsgInstantiateContractResponse): _98.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _98.MsgInstantiateContractResponseAminoMsg): _98.MsgInstantiateContractResponse;
                toAminoMsg(message: _98.MsgInstantiateContractResponse): _98.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _98.MsgInstantiateContractResponseProtoMsg): _98.MsgInstantiateContractResponse;
                toProto(message: _98.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _98.MsgInstantiateContractResponse): _98.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _98.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExecuteContract;
                fromJSON(object: any): _98.MsgExecuteContract;
                toJSON(message: _98.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_98.MsgExecuteContract>): _98.MsgExecuteContract;
                fromAmino(object: _98.MsgExecuteContractAmino): _98.MsgExecuteContract;
                toAmino(message: _98.MsgExecuteContract): _98.MsgExecuteContractAmino;
                fromAminoMsg(object: _98.MsgExecuteContractAminoMsg): _98.MsgExecuteContract;
                toAminoMsg(message: _98.MsgExecuteContract): _98.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _98.MsgExecuteContractProtoMsg): _98.MsgExecuteContract;
                toProto(message: _98.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _98.MsgExecuteContract): _98.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _98.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExecuteContractResponse;
                fromJSON(object: any): _98.MsgExecuteContractResponse;
                toJSON(message: _98.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_98.MsgExecuteContractResponse>): _98.MsgExecuteContractResponse;
                fromAmino(object: _98.MsgExecuteContractResponseAmino): _98.MsgExecuteContractResponse;
                toAmino(message: _98.MsgExecuteContractResponse): _98.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _98.MsgExecuteContractResponseAminoMsg): _98.MsgExecuteContractResponse;
                toAminoMsg(message: _98.MsgExecuteContractResponse): _98.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _98.MsgExecuteContractResponseProtoMsg): _98.MsgExecuteContractResponse;
                toProto(message: _98.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _98.MsgExecuteContractResponse): _98.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _98.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgMigrateContract;
                fromJSON(object: any): _98.MsgMigrateContract;
                toJSON(message: _98.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_98.MsgMigrateContract>): _98.MsgMigrateContract;
                fromAmino(object: _98.MsgMigrateContractAmino): _98.MsgMigrateContract;
                toAmino(message: _98.MsgMigrateContract): _98.MsgMigrateContractAmino;
                fromAminoMsg(object: _98.MsgMigrateContractAminoMsg): _98.MsgMigrateContract;
                toAminoMsg(message: _98.MsgMigrateContract): _98.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _98.MsgMigrateContractProtoMsg): _98.MsgMigrateContract;
                toProto(message: _98.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _98.MsgMigrateContract): _98.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _98.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgMigrateContractResponse;
                fromJSON(object: any): _98.MsgMigrateContractResponse;
                toJSON(message: _98.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_98.MsgMigrateContractResponse>): _98.MsgMigrateContractResponse;
                fromAmino(object: _98.MsgMigrateContractResponseAmino): _98.MsgMigrateContractResponse;
                toAmino(message: _98.MsgMigrateContractResponse): _98.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _98.MsgMigrateContractResponseAminoMsg): _98.MsgMigrateContractResponse;
                toAminoMsg(message: _98.MsgMigrateContractResponse): _98.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _98.MsgMigrateContractResponseProtoMsg): _98.MsgMigrateContractResponse;
                toProto(message: _98.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _98.MsgMigrateContractResponse): _98.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _98.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateAdmin;
                fromJSON(object: any): _98.MsgUpdateAdmin;
                toJSON(message: _98.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_98.MsgUpdateAdmin>): _98.MsgUpdateAdmin;
                fromAmino(object: _98.MsgUpdateAdminAmino): _98.MsgUpdateAdmin;
                toAmino(message: _98.MsgUpdateAdmin): _98.MsgUpdateAdminAmino;
                fromAminoMsg(object: _98.MsgUpdateAdminAminoMsg): _98.MsgUpdateAdmin;
                toAminoMsg(message: _98.MsgUpdateAdmin): _98.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _98.MsgUpdateAdminProtoMsg): _98.MsgUpdateAdmin;
                toProto(message: _98.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _98.MsgUpdateAdmin): _98.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _98.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateAdminResponse;
                fromJSON(_: any): _98.MsgUpdateAdminResponse;
                toJSON(_: _98.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_98.MsgUpdateAdminResponse>): _98.MsgUpdateAdminResponse;
                fromAmino(_: _98.MsgUpdateAdminResponseAmino): _98.MsgUpdateAdminResponse;
                toAmino(_: _98.MsgUpdateAdminResponse): _98.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _98.MsgUpdateAdminResponseAminoMsg): _98.MsgUpdateAdminResponse;
                toAminoMsg(message: _98.MsgUpdateAdminResponse): _98.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _98.MsgUpdateAdminResponseProtoMsg): _98.MsgUpdateAdminResponse;
                toProto(message: _98.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _98.MsgUpdateAdminResponse): _98.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _98.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgClearAdmin;
                fromJSON(object: any): _98.MsgClearAdmin;
                toJSON(message: _98.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_98.MsgClearAdmin>): _98.MsgClearAdmin;
                fromAmino(object: _98.MsgClearAdminAmino): _98.MsgClearAdmin;
                toAmino(message: _98.MsgClearAdmin): _98.MsgClearAdminAmino;
                fromAminoMsg(object: _98.MsgClearAdminAminoMsg): _98.MsgClearAdmin;
                toAminoMsg(message: _98.MsgClearAdmin): _98.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _98.MsgClearAdminProtoMsg): _98.MsgClearAdmin;
                toProto(message: _98.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _98.MsgClearAdmin): _98.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _98.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgClearAdminResponse;
                fromJSON(_: any): _98.MsgClearAdminResponse;
                toJSON(_: _98.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_98.MsgClearAdminResponse>): _98.MsgClearAdminResponse;
                fromAmino(_: _98.MsgClearAdminResponseAmino): _98.MsgClearAdminResponse;
                toAmino(_: _98.MsgClearAdminResponse): _98.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _98.MsgClearAdminResponseAminoMsg): _98.MsgClearAdminResponse;
                toAminoMsg(message: _98.MsgClearAdminResponse): _98.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _98.MsgClearAdminResponseProtoMsg): _98.MsgClearAdminResponse;
                toProto(message: _98.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _98.MsgClearAdminResponse): _98.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _97.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractInfoRequest;
                fromJSON(object: any): _97.QueryContractInfoRequest;
                toJSON(message: _97.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_97.QueryContractInfoRequest>): _97.QueryContractInfoRequest;
                fromAmino(object: _97.QueryContractInfoRequestAmino): _97.QueryContractInfoRequest;
                toAmino(message: _97.QueryContractInfoRequest): _97.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _97.QueryContractInfoRequestAminoMsg): _97.QueryContractInfoRequest;
                toAminoMsg(message: _97.QueryContractInfoRequest): _97.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _97.QueryContractInfoRequestProtoMsg): _97.QueryContractInfoRequest;
                toProto(message: _97.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _97.QueryContractInfoRequest): _97.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _97.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractInfoResponse;
                fromJSON(object: any): _97.QueryContractInfoResponse;
                toJSON(message: _97.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_97.QueryContractInfoResponse>): _97.QueryContractInfoResponse;
                fromAmino(object: _97.QueryContractInfoResponseAmino): _97.QueryContractInfoResponse;
                toAmino(message: _97.QueryContractInfoResponse): _97.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _97.QueryContractInfoResponseAminoMsg): _97.QueryContractInfoResponse;
                toAminoMsg(message: _97.QueryContractInfoResponse): _97.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _97.QueryContractInfoResponseProtoMsg): _97.QueryContractInfoResponse;
                toProto(message: _97.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _97.QueryContractInfoResponse): _97.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _97.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractHistoryRequest;
                fromJSON(object: any): _97.QueryContractHistoryRequest;
                toJSON(message: _97.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_97.QueryContractHistoryRequest>): _97.QueryContractHistoryRequest;
                fromAmino(object: _97.QueryContractHistoryRequestAmino): _97.QueryContractHistoryRequest;
                toAmino(message: _97.QueryContractHistoryRequest): _97.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _97.QueryContractHistoryRequestAminoMsg): _97.QueryContractHistoryRequest;
                toAminoMsg(message: _97.QueryContractHistoryRequest): _97.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _97.QueryContractHistoryRequestProtoMsg): _97.QueryContractHistoryRequest;
                toProto(message: _97.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _97.QueryContractHistoryRequest): _97.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _97.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractHistoryResponse;
                fromJSON(object: any): _97.QueryContractHistoryResponse;
                toJSON(message: _97.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_97.QueryContractHistoryResponse>): _97.QueryContractHistoryResponse;
                fromAmino(object: _97.QueryContractHistoryResponseAmino): _97.QueryContractHistoryResponse;
                toAmino(message: _97.QueryContractHistoryResponse): _97.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _97.QueryContractHistoryResponseAminoMsg): _97.QueryContractHistoryResponse;
                toAminoMsg(message: _97.QueryContractHistoryResponse): _97.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _97.QueryContractHistoryResponseProtoMsg): _97.QueryContractHistoryResponse;
                toProto(message: _97.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _97.QueryContractHistoryResponse): _97.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _97.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractsByCodeRequest;
                fromJSON(object: any): _97.QueryContractsByCodeRequest;
                toJSON(message: _97.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_97.QueryContractsByCodeRequest>): _97.QueryContractsByCodeRequest;
                fromAmino(object: _97.QueryContractsByCodeRequestAmino): _97.QueryContractsByCodeRequest;
                toAmino(message: _97.QueryContractsByCodeRequest): _97.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _97.QueryContractsByCodeRequestAminoMsg): _97.QueryContractsByCodeRequest;
                toAminoMsg(message: _97.QueryContractsByCodeRequest): _97.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _97.QueryContractsByCodeRequestProtoMsg): _97.QueryContractsByCodeRequest;
                toProto(message: _97.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _97.QueryContractsByCodeRequest): _97.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _97.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractsByCodeResponse;
                fromJSON(object: any): _97.QueryContractsByCodeResponse;
                toJSON(message: _97.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_97.QueryContractsByCodeResponse>): _97.QueryContractsByCodeResponse;
                fromAmino(object: _97.QueryContractsByCodeResponseAmino): _97.QueryContractsByCodeResponse;
                toAmino(message: _97.QueryContractsByCodeResponse): _97.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _97.QueryContractsByCodeResponseAminoMsg): _97.QueryContractsByCodeResponse;
                toAminoMsg(message: _97.QueryContractsByCodeResponse): _97.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _97.QueryContractsByCodeResponseProtoMsg): _97.QueryContractsByCodeResponse;
                toProto(message: _97.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _97.QueryContractsByCodeResponse): _97.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _97.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllContractStateRequest;
                fromJSON(object: any): _97.QueryAllContractStateRequest;
                toJSON(message: _97.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_97.QueryAllContractStateRequest>): _97.QueryAllContractStateRequest;
                fromAmino(object: _97.QueryAllContractStateRequestAmino): _97.QueryAllContractStateRequest;
                toAmino(message: _97.QueryAllContractStateRequest): _97.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _97.QueryAllContractStateRequestAminoMsg): _97.QueryAllContractStateRequest;
                toAminoMsg(message: _97.QueryAllContractStateRequest): _97.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _97.QueryAllContractStateRequestProtoMsg): _97.QueryAllContractStateRequest;
                toProto(message: _97.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _97.QueryAllContractStateRequest): _97.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _97.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllContractStateResponse;
                fromJSON(object: any): _97.QueryAllContractStateResponse;
                toJSON(message: _97.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_97.QueryAllContractStateResponse>): _97.QueryAllContractStateResponse;
                fromAmino(object: _97.QueryAllContractStateResponseAmino): _97.QueryAllContractStateResponse;
                toAmino(message: _97.QueryAllContractStateResponse): _97.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _97.QueryAllContractStateResponseAminoMsg): _97.QueryAllContractStateResponse;
                toAminoMsg(message: _97.QueryAllContractStateResponse): _97.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _97.QueryAllContractStateResponseProtoMsg): _97.QueryAllContractStateResponse;
                toProto(message: _97.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _97.QueryAllContractStateResponse): _97.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _97.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryRawContractStateRequest;
                fromJSON(object: any): _97.QueryRawContractStateRequest;
                toJSON(message: _97.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_97.QueryRawContractStateRequest>): _97.QueryRawContractStateRequest;
                fromAmino(object: _97.QueryRawContractStateRequestAmino): _97.QueryRawContractStateRequest;
                toAmino(message: _97.QueryRawContractStateRequest): _97.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _97.QueryRawContractStateRequestAminoMsg): _97.QueryRawContractStateRequest;
                toAminoMsg(message: _97.QueryRawContractStateRequest): _97.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _97.QueryRawContractStateRequestProtoMsg): _97.QueryRawContractStateRequest;
                toProto(message: _97.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _97.QueryRawContractStateRequest): _97.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _97.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryRawContractStateResponse;
                fromJSON(object: any): _97.QueryRawContractStateResponse;
                toJSON(message: _97.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_97.QueryRawContractStateResponse>): _97.QueryRawContractStateResponse;
                fromAmino(object: _97.QueryRawContractStateResponseAmino): _97.QueryRawContractStateResponse;
                toAmino(message: _97.QueryRawContractStateResponse): _97.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _97.QueryRawContractStateResponseAminoMsg): _97.QueryRawContractStateResponse;
                toAminoMsg(message: _97.QueryRawContractStateResponse): _97.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _97.QueryRawContractStateResponseProtoMsg): _97.QueryRawContractStateResponse;
                toProto(message: _97.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _97.QueryRawContractStateResponse): _97.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _97.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySmartContractStateRequest;
                fromJSON(object: any): _97.QuerySmartContractStateRequest;
                toJSON(message: _97.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_97.QuerySmartContractStateRequest>): _97.QuerySmartContractStateRequest;
                fromAmino(object: _97.QuerySmartContractStateRequestAmino): _97.QuerySmartContractStateRequest;
                toAmino(message: _97.QuerySmartContractStateRequest): _97.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _97.QuerySmartContractStateRequestAminoMsg): _97.QuerySmartContractStateRequest;
                toAminoMsg(message: _97.QuerySmartContractStateRequest): _97.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _97.QuerySmartContractStateRequestProtoMsg): _97.QuerySmartContractStateRequest;
                toProto(message: _97.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _97.QuerySmartContractStateRequest): _97.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _97.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySmartContractStateResponse;
                fromJSON(object: any): _97.QuerySmartContractStateResponse;
                toJSON(message: _97.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_97.QuerySmartContractStateResponse>): _97.QuerySmartContractStateResponse;
                fromAmino(object: _97.QuerySmartContractStateResponseAmino): _97.QuerySmartContractStateResponse;
                toAmino(message: _97.QuerySmartContractStateResponse): _97.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _97.QuerySmartContractStateResponseAminoMsg): _97.QuerySmartContractStateResponse;
                toAminoMsg(message: _97.QuerySmartContractStateResponse): _97.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _97.QuerySmartContractStateResponseProtoMsg): _97.QuerySmartContractStateResponse;
                toProto(message: _97.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _97.QuerySmartContractStateResponse): _97.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _97.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodeRequest;
                fromJSON(object: any): _97.QueryCodeRequest;
                toJSON(message: _97.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_97.QueryCodeRequest>): _97.QueryCodeRequest;
                fromAmino(object: _97.QueryCodeRequestAmino): _97.QueryCodeRequest;
                toAmino(message: _97.QueryCodeRequest): _97.QueryCodeRequestAmino;
                fromAminoMsg(object: _97.QueryCodeRequestAminoMsg): _97.QueryCodeRequest;
                toAminoMsg(message: _97.QueryCodeRequest): _97.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _97.QueryCodeRequestProtoMsg): _97.QueryCodeRequest;
                toProto(message: _97.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _97.QueryCodeRequest): _97.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _97.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CodeInfoResponse;
                fromJSON(object: any): _97.CodeInfoResponse;
                toJSON(message: _97.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_97.CodeInfoResponse>): _97.CodeInfoResponse;
                fromAmino(object: _97.CodeInfoResponseAmino): _97.CodeInfoResponse;
                toAmino(message: _97.CodeInfoResponse): _97.CodeInfoResponseAmino;
                fromAminoMsg(object: _97.CodeInfoResponseAminoMsg): _97.CodeInfoResponse;
                toAminoMsg(message: _97.CodeInfoResponse): _97.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _97.CodeInfoResponseProtoMsg): _97.CodeInfoResponse;
                toProto(message: _97.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _97.CodeInfoResponse): _97.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _97.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodeResponse;
                fromJSON(object: any): _97.QueryCodeResponse;
                toJSON(message: _97.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_97.QueryCodeResponse>): _97.QueryCodeResponse;
                fromAmino(object: _97.QueryCodeResponseAmino): _97.QueryCodeResponse;
                toAmino(message: _97.QueryCodeResponse): _97.QueryCodeResponseAmino;
                fromAminoMsg(object: _97.QueryCodeResponseAminoMsg): _97.QueryCodeResponse;
                toAminoMsg(message: _97.QueryCodeResponse): _97.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _97.QueryCodeResponseProtoMsg): _97.QueryCodeResponse;
                toProto(message: _97.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _97.QueryCodeResponse): _97.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _97.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodesRequest;
                fromJSON(object: any): _97.QueryCodesRequest;
                toJSON(message: _97.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_97.QueryCodesRequest>): _97.QueryCodesRequest;
                fromAmino(object: _97.QueryCodesRequestAmino): _97.QueryCodesRequest;
                toAmino(message: _97.QueryCodesRequest): _97.QueryCodesRequestAmino;
                fromAminoMsg(object: _97.QueryCodesRequestAminoMsg): _97.QueryCodesRequest;
                toAminoMsg(message: _97.QueryCodesRequest): _97.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryCodesRequestProtoMsg): _97.QueryCodesRequest;
                toProto(message: _97.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryCodesRequest): _97.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _97.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodesResponse;
                fromJSON(object: any): _97.QueryCodesResponse;
                toJSON(message: _97.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_97.QueryCodesResponse>): _97.QueryCodesResponse;
                fromAmino(object: _97.QueryCodesResponseAmino): _97.QueryCodesResponse;
                toAmino(message: _97.QueryCodesResponse): _97.QueryCodesResponseAmino;
                fromAminoMsg(object: _97.QueryCodesResponseAminoMsg): _97.QueryCodesResponse;
                toAminoMsg(message: _97.QueryCodesResponse): _97.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryCodesResponseProtoMsg): _97.QueryCodesResponse;
                toProto(message: _97.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryCodesResponse): _97.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _97.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPinnedCodesRequest;
                fromJSON(object: any): _97.QueryPinnedCodesRequest;
                toJSON(message: _97.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_97.QueryPinnedCodesRequest>): _97.QueryPinnedCodesRequest;
                fromAmino(object: _97.QueryPinnedCodesRequestAmino): _97.QueryPinnedCodesRequest;
                toAmino(message: _97.QueryPinnedCodesRequest): _97.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _97.QueryPinnedCodesRequestAminoMsg): _97.QueryPinnedCodesRequest;
                toAminoMsg(message: _97.QueryPinnedCodesRequest): _97.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryPinnedCodesRequestProtoMsg): _97.QueryPinnedCodesRequest;
                toProto(message: _97.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryPinnedCodesRequest): _97.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _97.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPinnedCodesResponse;
                fromJSON(object: any): _97.QueryPinnedCodesResponse;
                toJSON(message: _97.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_97.QueryPinnedCodesResponse>): _97.QueryPinnedCodesResponse;
                fromAmino(object: _97.QueryPinnedCodesResponseAmino): _97.QueryPinnedCodesResponse;
                toAmino(message: _97.QueryPinnedCodesResponse): _97.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _97.QueryPinnedCodesResponseAminoMsg): _97.QueryPinnedCodesResponse;
                toAminoMsg(message: _97.QueryPinnedCodesResponse): _97.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryPinnedCodesResponseProtoMsg): _97.QueryPinnedCodesResponse;
                toProto(message: _97.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryPinnedCodesResponse): _97.QueryPinnedCodesResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _96.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.StoreCodeProposal;
                fromJSON(object: any): _96.StoreCodeProposal;
                toJSON(message: _96.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_96.StoreCodeProposal>): _96.StoreCodeProposal;
                fromAmino(object: _96.StoreCodeProposalAmino): _96.StoreCodeProposal;
                toAmino(message: _96.StoreCodeProposal): _96.StoreCodeProposalAmino;
                fromAminoMsg(object: _96.StoreCodeProposalAminoMsg): _96.StoreCodeProposal;
                toAminoMsg(message: _96.StoreCodeProposal): _96.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _96.StoreCodeProposalProtoMsg): _96.StoreCodeProposal;
                toProto(message: _96.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _96.StoreCodeProposal): _96.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _96.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.InstantiateContractProposal;
                fromJSON(object: any): _96.InstantiateContractProposal;
                toJSON(message: _96.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_96.InstantiateContractProposal>): _96.InstantiateContractProposal;
                fromAmino(object: _96.InstantiateContractProposalAmino): _96.InstantiateContractProposal;
                toAmino(message: _96.InstantiateContractProposal): _96.InstantiateContractProposalAmino;
                fromAminoMsg(object: _96.InstantiateContractProposalAminoMsg): _96.InstantiateContractProposal;
                toAminoMsg(message: _96.InstantiateContractProposal): _96.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _96.InstantiateContractProposalProtoMsg): _96.InstantiateContractProposal;
                toProto(message: _96.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _96.InstantiateContractProposal): _96.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _96.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MigrateContractProposal;
                fromJSON(object: any): _96.MigrateContractProposal;
                toJSON(message: _96.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_96.MigrateContractProposal>): _96.MigrateContractProposal;
                fromAmino(object: _96.MigrateContractProposalAmino): _96.MigrateContractProposal;
                toAmino(message: _96.MigrateContractProposal): _96.MigrateContractProposalAmino;
                fromAminoMsg(object: _96.MigrateContractProposalAminoMsg): _96.MigrateContractProposal;
                toAminoMsg(message: _96.MigrateContractProposal): _96.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _96.MigrateContractProposalProtoMsg): _96.MigrateContractProposal;
                toProto(message: _96.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _96.MigrateContractProposal): _96.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _96.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SudoContractProposal;
                fromJSON(object: any): _96.SudoContractProposal;
                toJSON(message: _96.SudoContractProposal): unknown;
                fromPartial(object: Partial<_96.SudoContractProposal>): _96.SudoContractProposal;
                fromAmino(object: _96.SudoContractProposalAmino): _96.SudoContractProposal;
                toAmino(message: _96.SudoContractProposal): _96.SudoContractProposalAmino;
                fromAminoMsg(object: _96.SudoContractProposalAminoMsg): _96.SudoContractProposal;
                toAminoMsg(message: _96.SudoContractProposal): _96.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _96.SudoContractProposalProtoMsg): _96.SudoContractProposal;
                toProto(message: _96.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _96.SudoContractProposal): _96.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _96.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ExecuteContractProposal;
                fromJSON(object: any): _96.ExecuteContractProposal;
                toJSON(message: _96.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_96.ExecuteContractProposal>): _96.ExecuteContractProposal;
                fromAmino(object: _96.ExecuteContractProposalAmino): _96.ExecuteContractProposal;
                toAmino(message: _96.ExecuteContractProposal): _96.ExecuteContractProposalAmino;
                fromAminoMsg(object: _96.ExecuteContractProposalAminoMsg): _96.ExecuteContractProposal;
                toAminoMsg(message: _96.ExecuteContractProposal): _96.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _96.ExecuteContractProposalProtoMsg): _96.ExecuteContractProposal;
                toProto(message: _96.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _96.ExecuteContractProposal): _96.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _96.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.UpdateAdminProposal;
                fromJSON(object: any): _96.UpdateAdminProposal;
                toJSON(message: _96.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_96.UpdateAdminProposal>): _96.UpdateAdminProposal;
                fromAmino(object: _96.UpdateAdminProposalAmino): _96.UpdateAdminProposal;
                toAmino(message: _96.UpdateAdminProposal): _96.UpdateAdminProposalAmino;
                fromAminoMsg(object: _96.UpdateAdminProposalAminoMsg): _96.UpdateAdminProposal;
                toAminoMsg(message: _96.UpdateAdminProposal): _96.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _96.UpdateAdminProposalProtoMsg): _96.UpdateAdminProposal;
                toProto(message: _96.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _96.UpdateAdminProposal): _96.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _96.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ClearAdminProposal;
                fromJSON(object: any): _96.ClearAdminProposal;
                toJSON(message: _96.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_96.ClearAdminProposal>): _96.ClearAdminProposal;
                fromAmino(object: _96.ClearAdminProposalAmino): _96.ClearAdminProposal;
                toAmino(message: _96.ClearAdminProposal): _96.ClearAdminProposalAmino;
                fromAminoMsg(object: _96.ClearAdminProposalAminoMsg): _96.ClearAdminProposal;
                toAminoMsg(message: _96.ClearAdminProposal): _96.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _96.ClearAdminProposalProtoMsg): _96.ClearAdminProposal;
                toProto(message: _96.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _96.ClearAdminProposal): _96.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _96.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.PinCodesProposal;
                fromJSON(object: any): _96.PinCodesProposal;
                toJSON(message: _96.PinCodesProposal): unknown;
                fromPartial(object: Partial<_96.PinCodesProposal>): _96.PinCodesProposal;
                fromAmino(object: _96.PinCodesProposalAmino): _96.PinCodesProposal;
                toAmino(message: _96.PinCodesProposal): _96.PinCodesProposalAmino;
                fromAminoMsg(object: _96.PinCodesProposalAminoMsg): _96.PinCodesProposal;
                toAminoMsg(message: _96.PinCodesProposal): _96.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _96.PinCodesProposalProtoMsg): _96.PinCodesProposal;
                toProto(message: _96.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _96.PinCodesProposal): _96.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _96.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.UnpinCodesProposal;
                fromJSON(object: any): _96.UnpinCodesProposal;
                toJSON(message: _96.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_96.UnpinCodesProposal>): _96.UnpinCodesProposal;
                fromAmino(object: _96.UnpinCodesProposalAmino): _96.UnpinCodesProposal;
                toAmino(message: _96.UnpinCodesProposal): _96.UnpinCodesProposalAmino;
                fromAminoMsg(object: _96.UnpinCodesProposalAminoMsg): _96.UnpinCodesProposal;
                toAminoMsg(message: _96.UnpinCodesProposal): _96.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _96.UnpinCodesProposalProtoMsg): _96.UnpinCodesProposal;
                toProto(message: _96.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _96.UnpinCodesProposal): _96.UnpinCodesProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _95.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgIBCSend;
                fromJSON(object: any): _95.MsgIBCSend;
                toJSON(message: _95.MsgIBCSend): unknown;
                fromPartial(object: Partial<_95.MsgIBCSend>): _95.MsgIBCSend;
                fromAmino(object: _95.MsgIBCSendAmino): _95.MsgIBCSend;
                toAmino(message: _95.MsgIBCSend): _95.MsgIBCSendAmino;
                fromAminoMsg(object: _95.MsgIBCSendAminoMsg): _95.MsgIBCSend;
                toAminoMsg(message: _95.MsgIBCSend): _95.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _95.MsgIBCSendProtoMsg): _95.MsgIBCSend;
                toProto(message: _95.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _95.MsgIBCSend): _95.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _95.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgIBCCloseChannel;
                fromJSON(object: any): _95.MsgIBCCloseChannel;
                toJSON(message: _95.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_95.MsgIBCCloseChannel>): _95.MsgIBCCloseChannel;
                fromAmino(object: _95.MsgIBCCloseChannelAmino): _95.MsgIBCCloseChannel;
                toAmino(message: _95.MsgIBCCloseChannel): _95.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _95.MsgIBCCloseChannelAminoMsg): _95.MsgIBCCloseChannel;
                toAminoMsg(message: _95.MsgIBCCloseChannel): _95.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _95.MsgIBCCloseChannelProtoMsg): _95.MsgIBCCloseChannel;
                toProto(message: _95.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _95.MsgIBCCloseChannel): _95.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _94.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState;
                fromJSON(object: any): _94.GenesisState;
                toJSON(message: _94.GenesisState): unknown;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
                fromAmino(object: _94.GenesisStateAmino): _94.GenesisState;
                toAmino(message: _94.GenesisState): _94.GenesisStateAmino;
                fromAminoMsg(object: _94.GenesisStateAminoMsg): _94.GenesisState;
                toAminoMsg(message: _94.GenesisState): _94.GenesisStateAminoMsg;
                fromProtoMsg(message: _94.GenesisStateProtoMsg): _94.GenesisState;
                toProto(message: _94.GenesisState): Uint8Array;
                toProtoMsg(message: _94.GenesisState): _94.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                encode(message: _94.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState_GenMsgs;
                fromJSON(object: any): _94.GenesisState_GenMsgs;
                toJSON(message: _94.GenesisState_GenMsgs): unknown;
                fromPartial(object: Partial<_94.GenesisState_GenMsgs>): _94.GenesisState_GenMsgs;
                fromAmino(object: _94.GenesisState_GenMsgsAmino): _94.GenesisState_GenMsgs;
                toAmino(message: _94.GenesisState_GenMsgs): _94.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _94.GenesisState_GenMsgsAminoMsg): _94.GenesisState_GenMsgs;
                toAminoMsg(message: _94.GenesisState_GenMsgs): _94.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _94.GenesisState_GenMsgsProtoMsg): _94.GenesisState_GenMsgs;
                toProto(message: _94.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _94.GenesisState_GenMsgs): _94.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _94.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Code;
                fromJSON(object: any): _94.Code;
                toJSON(message: _94.Code): unknown;
                fromPartial(object: Partial<_94.Code>): _94.Code;
                fromAmino(object: _94.CodeAmino): _94.Code;
                toAmino(message: _94.Code): _94.CodeAmino;
                fromAminoMsg(object: _94.CodeAminoMsg): _94.Code;
                toAminoMsg(message: _94.Code): _94.CodeAminoMsg;
                fromProtoMsg(message: _94.CodeProtoMsg): _94.Code;
                toProto(message: _94.Code): Uint8Array;
                toProtoMsg(message: _94.Code): _94.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _94.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Contract;
                fromJSON(object: any): _94.Contract;
                toJSON(message: _94.Contract): unknown;
                fromPartial(object: Partial<_94.Contract>): _94.Contract;
                fromAmino(object: _94.ContractAmino): _94.Contract;
                toAmino(message: _94.Contract): _94.ContractAmino;
                fromAminoMsg(object: _94.ContractAminoMsg): _94.Contract;
                toAminoMsg(message: _94.Contract): _94.ContractAminoMsg;
                fromProtoMsg(message: _94.ContractProtoMsg): _94.Contract;
                toProto(message: _94.Contract): Uint8Array;
                toProtoMsg(message: _94.Contract): _94.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _94.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Sequence;
                fromJSON(object: any): _94.Sequence;
                toJSON(message: _94.Sequence): unknown;
                fromPartial(object: Partial<_94.Sequence>): _94.Sequence;
                fromAmino(object: _94.SequenceAmino): _94.Sequence;
                toAmino(message: _94.Sequence): _94.SequenceAmino;
                fromAminoMsg(object: _94.SequenceAminoMsg): _94.Sequence;
                toAminoMsg(message: _94.Sequence): _94.SequenceAminoMsg;
                fromProtoMsg(message: _94.SequenceProtoMsg): _94.Sequence;
                toProto(message: _94.Sequence): Uint8Array;
                toProtoMsg(message: _94.Sequence): _94.SequenceProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _298.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _97.QueryContractInfoRequest): Promise<_97.QueryContractInfoResponse>;
                        contractHistory(request: _97.QueryContractHistoryRequest): Promise<_97.QueryContractHistoryResponse>;
                        contractsByCode(request: _97.QueryContractsByCodeRequest): Promise<_97.QueryContractsByCodeResponse>;
                        allContractState(request: _97.QueryAllContractStateRequest): Promise<_97.QueryAllContractStateResponse>;
                        rawContractState(request: _97.QueryRawContractStateRequest): Promise<_97.QueryRawContractStateResponse>;
                        smartContractState(request: _97.QuerySmartContractStateRequest): Promise<_97.QuerySmartContractStateResponse>;
                        code(request: _97.QueryCodeRequest): Promise<_97.QueryCodeResponse>;
                        codes(request?: _97.QueryCodesRequest): Promise<_97.QueryCodesResponse>;
                        pinnedCodes(request?: _97.QueryPinnedCodesRequest): Promise<_97.QueryPinnedCodesResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _296.LCDQueryClient;
                };
            };
        }>;
    };
}
