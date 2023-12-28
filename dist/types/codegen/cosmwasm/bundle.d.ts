import * as _103 from "./wasm/v1/genesis";
import * as _104 from "./wasm/v1/ibc";
import * as _105 from "./wasm/v1/proposal";
import * as _106 from "./wasm/v1/query";
import * as _107 from "./wasm/v1/tx";
import * as _108 from "./wasm/v1/types";
import * as _310 from "./wasm/v1/query.lcd";
import * as _311 from "./wasm/v1/query.rpc.Query";
import * as _312 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _312.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _106.QueryContractInfoRequest): Promise<_106.QueryContractInfoResponse>;
                contractHistory(request: _106.QueryContractHistoryRequest): Promise<_106.QueryContractHistoryResponse>;
                contractsByCode(request: _106.QueryContractsByCodeRequest): Promise<_106.QueryContractsByCodeResponse>;
                allContractState(request: _106.QueryAllContractStateRequest): Promise<_106.QueryAllContractStateResponse>;
                rawContractState(request: _106.QueryRawContractStateRequest): Promise<_106.QueryRawContractStateResponse>;
                smartContractState(request: _106.QuerySmartContractStateRequest): Promise<_106.QuerySmartContractStateResponse>;
                code(request: _106.QueryCodeRequest): Promise<_106.QueryCodeResponse>;
                codes(request?: _106.QueryCodesRequest): Promise<_106.QueryCodesResponse>;
                pinnedCodes(request?: _106.QueryPinnedCodesRequest): Promise<_106.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _310.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _107.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _107.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _107.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _107.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _107.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _107.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _107.MsgStoreCode): {
                        typeUrl: string;
                        value: _107.MsgStoreCode;
                    };
                    instantiateContract(value: _107.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _107.MsgInstantiateContract;
                    };
                    executeContract(value: _107.MsgExecuteContract): {
                        typeUrl: string;
                        value: _107.MsgExecuteContract;
                    };
                    migrateContract(value: _107.MsgMigrateContract): {
                        typeUrl: string;
                        value: _107.MsgMigrateContract;
                    };
                    updateAdmin(value: _107.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _107.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _107.MsgClearAdmin): {
                        typeUrl: string;
                        value: _107.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _107.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _107.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _107.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _107.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _107.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _107.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _107.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _107.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _107.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _107.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _107.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _107.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _107.MsgStoreCode): {
                        typeUrl: string;
                        value: _107.MsgStoreCode;
                    };
                    instantiateContract(value: _107.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _107.MsgInstantiateContract;
                    };
                    executeContract(value: _107.MsgExecuteContract): {
                        typeUrl: string;
                        value: _107.MsgExecuteContract;
                    };
                    migrateContract(value: _107.MsgMigrateContract): {
                        typeUrl: string;
                        value: _107.MsgMigrateContract;
                    };
                    updateAdmin(value: _107.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _107.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _107.MsgClearAdmin): {
                        typeUrl: string;
                        value: _107.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _107.MsgStoreCode) => _107.MsgStoreCodeAmino;
                    fromAmino: (object: _107.MsgStoreCodeAmino) => _107.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _107.MsgInstantiateContract) => _107.MsgInstantiateContractAmino;
                    fromAmino: (object: _107.MsgInstantiateContractAmino) => _107.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _107.MsgExecuteContract) => _107.MsgExecuteContractAmino;
                    fromAmino: (object: _107.MsgExecuteContractAmino) => _107.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _107.MsgMigrateContract) => _107.MsgMigrateContractAmino;
                    fromAmino: (object: _107.MsgMigrateContractAmino) => _107.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _107.MsgUpdateAdmin) => _107.MsgUpdateAdminAmino;
                    fromAmino: (object: _107.MsgUpdateAdminAmino) => _107.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _107.MsgClearAdmin) => _107.MsgClearAdminAmino;
                    fromAmino: (object: _107.MsgClearAdminAmino) => _107.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _108.AccessType;
            accessTypeToJSON(object: _108.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _108.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _108.ContractCodeHistoryOperationType): string;
            AccessType: typeof _108.AccessType;
            AccessTypeSDKType: typeof _108.AccessType;
            AccessTypeAmino: typeof _108.AccessType;
            ContractCodeHistoryOperationType: typeof _108.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _108.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _108.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _108.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.AccessTypeParam;
                fromJSON(object: any): _108.AccessTypeParam;
                toJSON(message: _108.AccessTypeParam): unknown;
                fromPartial(object: Partial<_108.AccessTypeParam>): _108.AccessTypeParam;
                fromAmino(object: _108.AccessTypeParamAmino): _108.AccessTypeParam;
                toAmino(message: _108.AccessTypeParam): _108.AccessTypeParamAmino;
                fromAminoMsg(object: _108.AccessTypeParamAminoMsg): _108.AccessTypeParam;
                toAminoMsg(message: _108.AccessTypeParam): _108.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _108.AccessTypeParamProtoMsg): _108.AccessTypeParam;
                toProto(message: _108.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _108.AccessTypeParam): _108.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _108.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.AccessConfig;
                fromJSON(object: any): _108.AccessConfig;
                toJSON(message: _108.AccessConfig): unknown;
                fromPartial(object: Partial<_108.AccessConfig>): _108.AccessConfig;
                fromAmino(object: _108.AccessConfigAmino): _108.AccessConfig;
                toAmino(message: _108.AccessConfig): _108.AccessConfigAmino;
                fromAminoMsg(object: _108.AccessConfigAminoMsg): _108.AccessConfig;
                toAminoMsg(message: _108.AccessConfig): _108.AccessConfigAminoMsg;
                fromProtoMsg(message: _108.AccessConfigProtoMsg): _108.AccessConfig;
                toProto(message: _108.AccessConfig): Uint8Array;
                toProtoMsg(message: _108.AccessConfig): _108.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _108.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Params;
                fromJSON(object: any): _108.Params;
                toJSON(message: _108.Params): unknown;
                fromPartial(object: Partial<_108.Params>): _108.Params;
                fromAmino(object: _108.ParamsAmino): _108.Params;
                toAmino(message: _108.Params): _108.ParamsAmino;
                fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
                toAminoMsg(message: _108.Params): _108.ParamsAminoMsg;
                fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
                toProto(message: _108.Params): Uint8Array;
                toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _108.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.CodeInfo;
                fromJSON(object: any): _108.CodeInfo;
                toJSON(message: _108.CodeInfo): unknown;
                fromPartial(object: Partial<_108.CodeInfo>): _108.CodeInfo;
                fromAmino(object: _108.CodeInfoAmino): _108.CodeInfo;
                toAmino(message: _108.CodeInfo): _108.CodeInfoAmino;
                fromAminoMsg(object: _108.CodeInfoAminoMsg): _108.CodeInfo;
                toAminoMsg(message: _108.CodeInfo): _108.CodeInfoAminoMsg;
                fromProtoMsg(message: _108.CodeInfoProtoMsg): _108.CodeInfo;
                toProto(message: _108.CodeInfo): Uint8Array;
                toProtoMsg(message: _108.CodeInfo): _108.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _108.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ContractInfo;
                fromJSON(object: any): _108.ContractInfo;
                toJSON(message: _108.ContractInfo): unknown;
                fromPartial(object: Partial<_108.ContractInfo>): _108.ContractInfo;
                fromAmino(object: _108.ContractInfoAmino): _108.ContractInfo;
                toAmino(message: _108.ContractInfo): _108.ContractInfoAmino;
                fromAminoMsg(object: _108.ContractInfoAminoMsg): _108.ContractInfo;
                toAminoMsg(message: _108.ContractInfo): _108.ContractInfoAminoMsg;
                fromProtoMsg(message: _108.ContractInfoProtoMsg): _108.ContractInfo;
                toProto(message: _108.ContractInfo): Uint8Array;
                toProtoMsg(message: _108.ContractInfo): _108.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _108.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ContractCodeHistoryEntry;
                fromJSON(object: any): _108.ContractCodeHistoryEntry;
                toJSON(message: _108.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_108.ContractCodeHistoryEntry>): _108.ContractCodeHistoryEntry;
                fromAmino(object: _108.ContractCodeHistoryEntryAmino): _108.ContractCodeHistoryEntry;
                toAmino(message: _108.ContractCodeHistoryEntry): _108.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _108.ContractCodeHistoryEntryAminoMsg): _108.ContractCodeHistoryEntry;
                toAminoMsg(message: _108.ContractCodeHistoryEntry): _108.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _108.ContractCodeHistoryEntryProtoMsg): _108.ContractCodeHistoryEntry;
                toProto(message: _108.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _108.ContractCodeHistoryEntry): _108.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _108.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.AbsoluteTxPosition;
                fromJSON(object: any): _108.AbsoluteTxPosition;
                toJSON(message: _108.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_108.AbsoluteTxPosition>): _108.AbsoluteTxPosition;
                fromAmino(object: _108.AbsoluteTxPositionAmino): _108.AbsoluteTxPosition;
                toAmino(message: _108.AbsoluteTxPosition): _108.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _108.AbsoluteTxPositionAminoMsg): _108.AbsoluteTxPosition;
                toAminoMsg(message: _108.AbsoluteTxPosition): _108.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _108.AbsoluteTxPositionProtoMsg): _108.AbsoluteTxPosition;
                toProto(message: _108.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _108.AbsoluteTxPosition): _108.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _108.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Model;
                fromJSON(object: any): _108.Model;
                toJSON(message: _108.Model): unknown;
                fromPartial(object: Partial<_108.Model>): _108.Model;
                fromAmino(object: _108.ModelAmino): _108.Model;
                toAmino(message: _108.Model): _108.ModelAmino;
                fromAminoMsg(object: _108.ModelAminoMsg): _108.Model;
                toAminoMsg(message: _108.Model): _108.ModelAminoMsg;
                fromProtoMsg(message: _108.ModelProtoMsg): _108.Model;
                toProto(message: _108.Model): Uint8Array;
                toProtoMsg(message: _108.Model): _108.ModelProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _107.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgStoreCode;
                fromJSON(object: any): _107.MsgStoreCode;
                toJSON(message: _107.MsgStoreCode): unknown;
                fromPartial(object: Partial<_107.MsgStoreCode>): _107.MsgStoreCode;
                fromAmino(object: _107.MsgStoreCodeAmino): _107.MsgStoreCode;
                toAmino(message: _107.MsgStoreCode): _107.MsgStoreCodeAmino;
                fromAminoMsg(object: _107.MsgStoreCodeAminoMsg): _107.MsgStoreCode;
                toAminoMsg(message: _107.MsgStoreCode): _107.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _107.MsgStoreCodeProtoMsg): _107.MsgStoreCode;
                toProto(message: _107.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _107.MsgStoreCode): _107.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _107.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgStoreCodeResponse;
                fromJSON(object: any): _107.MsgStoreCodeResponse;
                toJSON(message: _107.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_107.MsgStoreCodeResponse>): _107.MsgStoreCodeResponse;
                fromAmino(object: _107.MsgStoreCodeResponseAmino): _107.MsgStoreCodeResponse;
                toAmino(message: _107.MsgStoreCodeResponse): _107.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _107.MsgStoreCodeResponseAminoMsg): _107.MsgStoreCodeResponse;
                toAminoMsg(message: _107.MsgStoreCodeResponse): _107.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _107.MsgStoreCodeResponseProtoMsg): _107.MsgStoreCodeResponse;
                toProto(message: _107.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _107.MsgStoreCodeResponse): _107.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _107.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgInstantiateContract;
                fromJSON(object: any): _107.MsgInstantiateContract;
                toJSON(message: _107.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_107.MsgInstantiateContract>): _107.MsgInstantiateContract;
                fromAmino(object: _107.MsgInstantiateContractAmino): _107.MsgInstantiateContract;
                toAmino(message: _107.MsgInstantiateContract): _107.MsgInstantiateContractAmino;
                fromAminoMsg(object: _107.MsgInstantiateContractAminoMsg): _107.MsgInstantiateContract;
                toAminoMsg(message: _107.MsgInstantiateContract): _107.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _107.MsgInstantiateContractProtoMsg): _107.MsgInstantiateContract;
                toProto(message: _107.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _107.MsgInstantiateContract): _107.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _107.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgInstantiateContractResponse;
                fromJSON(object: any): _107.MsgInstantiateContractResponse;
                toJSON(message: _107.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_107.MsgInstantiateContractResponse>): _107.MsgInstantiateContractResponse;
                fromAmino(object: _107.MsgInstantiateContractResponseAmino): _107.MsgInstantiateContractResponse;
                toAmino(message: _107.MsgInstantiateContractResponse): _107.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _107.MsgInstantiateContractResponseAminoMsg): _107.MsgInstantiateContractResponse;
                toAminoMsg(message: _107.MsgInstantiateContractResponse): _107.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _107.MsgInstantiateContractResponseProtoMsg): _107.MsgInstantiateContractResponse;
                toProto(message: _107.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _107.MsgInstantiateContractResponse): _107.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _107.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgExecuteContract;
                fromJSON(object: any): _107.MsgExecuteContract;
                toJSON(message: _107.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_107.MsgExecuteContract>): _107.MsgExecuteContract;
                fromAmino(object: _107.MsgExecuteContractAmino): _107.MsgExecuteContract;
                toAmino(message: _107.MsgExecuteContract): _107.MsgExecuteContractAmino;
                fromAminoMsg(object: _107.MsgExecuteContractAminoMsg): _107.MsgExecuteContract;
                toAminoMsg(message: _107.MsgExecuteContract): _107.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _107.MsgExecuteContractProtoMsg): _107.MsgExecuteContract;
                toProto(message: _107.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _107.MsgExecuteContract): _107.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _107.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgExecuteContractResponse;
                fromJSON(object: any): _107.MsgExecuteContractResponse;
                toJSON(message: _107.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_107.MsgExecuteContractResponse>): _107.MsgExecuteContractResponse;
                fromAmino(object: _107.MsgExecuteContractResponseAmino): _107.MsgExecuteContractResponse;
                toAmino(message: _107.MsgExecuteContractResponse): _107.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _107.MsgExecuteContractResponseAminoMsg): _107.MsgExecuteContractResponse;
                toAminoMsg(message: _107.MsgExecuteContractResponse): _107.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _107.MsgExecuteContractResponseProtoMsg): _107.MsgExecuteContractResponse;
                toProto(message: _107.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _107.MsgExecuteContractResponse): _107.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _107.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgMigrateContract;
                fromJSON(object: any): _107.MsgMigrateContract;
                toJSON(message: _107.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_107.MsgMigrateContract>): _107.MsgMigrateContract;
                fromAmino(object: _107.MsgMigrateContractAmino): _107.MsgMigrateContract;
                toAmino(message: _107.MsgMigrateContract): _107.MsgMigrateContractAmino;
                fromAminoMsg(object: _107.MsgMigrateContractAminoMsg): _107.MsgMigrateContract;
                toAminoMsg(message: _107.MsgMigrateContract): _107.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _107.MsgMigrateContractProtoMsg): _107.MsgMigrateContract;
                toProto(message: _107.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _107.MsgMigrateContract): _107.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _107.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgMigrateContractResponse;
                fromJSON(object: any): _107.MsgMigrateContractResponse;
                toJSON(message: _107.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_107.MsgMigrateContractResponse>): _107.MsgMigrateContractResponse;
                fromAmino(object: _107.MsgMigrateContractResponseAmino): _107.MsgMigrateContractResponse;
                toAmino(message: _107.MsgMigrateContractResponse): _107.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _107.MsgMigrateContractResponseAminoMsg): _107.MsgMigrateContractResponse;
                toAminoMsg(message: _107.MsgMigrateContractResponse): _107.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _107.MsgMigrateContractResponseProtoMsg): _107.MsgMigrateContractResponse;
                toProto(message: _107.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _107.MsgMigrateContractResponse): _107.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _107.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgUpdateAdmin;
                fromJSON(object: any): _107.MsgUpdateAdmin;
                toJSON(message: _107.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_107.MsgUpdateAdmin>): _107.MsgUpdateAdmin;
                fromAmino(object: _107.MsgUpdateAdminAmino): _107.MsgUpdateAdmin;
                toAmino(message: _107.MsgUpdateAdmin): _107.MsgUpdateAdminAmino;
                fromAminoMsg(object: _107.MsgUpdateAdminAminoMsg): _107.MsgUpdateAdmin;
                toAminoMsg(message: _107.MsgUpdateAdmin): _107.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _107.MsgUpdateAdminProtoMsg): _107.MsgUpdateAdmin;
                toProto(message: _107.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _107.MsgUpdateAdmin): _107.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _107.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgUpdateAdminResponse;
                fromJSON(_: any): _107.MsgUpdateAdminResponse;
                toJSON(_: _107.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_107.MsgUpdateAdminResponse>): _107.MsgUpdateAdminResponse;
                fromAmino(_: _107.MsgUpdateAdminResponseAmino): _107.MsgUpdateAdminResponse;
                toAmino(_: _107.MsgUpdateAdminResponse): _107.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _107.MsgUpdateAdminResponseAminoMsg): _107.MsgUpdateAdminResponse;
                toAminoMsg(message: _107.MsgUpdateAdminResponse): _107.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _107.MsgUpdateAdminResponseProtoMsg): _107.MsgUpdateAdminResponse;
                toProto(message: _107.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _107.MsgUpdateAdminResponse): _107.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _107.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgClearAdmin;
                fromJSON(object: any): _107.MsgClearAdmin;
                toJSON(message: _107.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_107.MsgClearAdmin>): _107.MsgClearAdmin;
                fromAmino(object: _107.MsgClearAdminAmino): _107.MsgClearAdmin;
                toAmino(message: _107.MsgClearAdmin): _107.MsgClearAdminAmino;
                fromAminoMsg(object: _107.MsgClearAdminAminoMsg): _107.MsgClearAdmin;
                toAminoMsg(message: _107.MsgClearAdmin): _107.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _107.MsgClearAdminProtoMsg): _107.MsgClearAdmin;
                toProto(message: _107.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _107.MsgClearAdmin): _107.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _107.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgClearAdminResponse;
                fromJSON(_: any): _107.MsgClearAdminResponse;
                toJSON(_: _107.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_107.MsgClearAdminResponse>): _107.MsgClearAdminResponse;
                fromAmino(_: _107.MsgClearAdminResponseAmino): _107.MsgClearAdminResponse;
                toAmino(_: _107.MsgClearAdminResponse): _107.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _107.MsgClearAdminResponseAminoMsg): _107.MsgClearAdminResponse;
                toAminoMsg(message: _107.MsgClearAdminResponse): _107.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _107.MsgClearAdminResponseProtoMsg): _107.MsgClearAdminResponse;
                toProto(message: _107.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _107.MsgClearAdminResponse): _107.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _106.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryContractInfoRequest;
                fromJSON(object: any): _106.QueryContractInfoRequest;
                toJSON(message: _106.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_106.QueryContractInfoRequest>): _106.QueryContractInfoRequest;
                fromAmino(object: _106.QueryContractInfoRequestAmino): _106.QueryContractInfoRequest;
                toAmino(message: _106.QueryContractInfoRequest): _106.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _106.QueryContractInfoRequestAminoMsg): _106.QueryContractInfoRequest;
                toAminoMsg(message: _106.QueryContractInfoRequest): _106.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _106.QueryContractInfoRequestProtoMsg): _106.QueryContractInfoRequest;
                toProto(message: _106.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _106.QueryContractInfoRequest): _106.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _106.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryContractInfoResponse;
                fromJSON(object: any): _106.QueryContractInfoResponse;
                toJSON(message: _106.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_106.QueryContractInfoResponse>): _106.QueryContractInfoResponse;
                fromAmino(object: _106.QueryContractInfoResponseAmino): _106.QueryContractInfoResponse;
                toAmino(message: _106.QueryContractInfoResponse): _106.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _106.QueryContractInfoResponseAminoMsg): _106.QueryContractInfoResponse;
                toAminoMsg(message: _106.QueryContractInfoResponse): _106.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _106.QueryContractInfoResponseProtoMsg): _106.QueryContractInfoResponse;
                toProto(message: _106.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _106.QueryContractInfoResponse): _106.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _106.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryContractHistoryRequest;
                fromJSON(object: any): _106.QueryContractHistoryRequest;
                toJSON(message: _106.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_106.QueryContractHistoryRequest>): _106.QueryContractHistoryRequest;
                fromAmino(object: _106.QueryContractHistoryRequestAmino): _106.QueryContractHistoryRequest;
                toAmino(message: _106.QueryContractHistoryRequest): _106.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _106.QueryContractHistoryRequestAminoMsg): _106.QueryContractHistoryRequest;
                toAminoMsg(message: _106.QueryContractHistoryRequest): _106.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _106.QueryContractHistoryRequestProtoMsg): _106.QueryContractHistoryRequest;
                toProto(message: _106.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _106.QueryContractHistoryRequest): _106.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _106.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryContractHistoryResponse;
                fromJSON(object: any): _106.QueryContractHistoryResponse;
                toJSON(message: _106.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_106.QueryContractHistoryResponse>): _106.QueryContractHistoryResponse;
                fromAmino(object: _106.QueryContractHistoryResponseAmino): _106.QueryContractHistoryResponse;
                toAmino(message: _106.QueryContractHistoryResponse): _106.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _106.QueryContractHistoryResponseAminoMsg): _106.QueryContractHistoryResponse;
                toAminoMsg(message: _106.QueryContractHistoryResponse): _106.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _106.QueryContractHistoryResponseProtoMsg): _106.QueryContractHistoryResponse;
                toProto(message: _106.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _106.QueryContractHistoryResponse): _106.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _106.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryContractsByCodeRequest;
                fromJSON(object: any): _106.QueryContractsByCodeRequest;
                toJSON(message: _106.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_106.QueryContractsByCodeRequest>): _106.QueryContractsByCodeRequest;
                fromAmino(object: _106.QueryContractsByCodeRequestAmino): _106.QueryContractsByCodeRequest;
                toAmino(message: _106.QueryContractsByCodeRequest): _106.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _106.QueryContractsByCodeRequestAminoMsg): _106.QueryContractsByCodeRequest;
                toAminoMsg(message: _106.QueryContractsByCodeRequest): _106.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _106.QueryContractsByCodeRequestProtoMsg): _106.QueryContractsByCodeRequest;
                toProto(message: _106.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _106.QueryContractsByCodeRequest): _106.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _106.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryContractsByCodeResponse;
                fromJSON(object: any): _106.QueryContractsByCodeResponse;
                toJSON(message: _106.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_106.QueryContractsByCodeResponse>): _106.QueryContractsByCodeResponse;
                fromAmino(object: _106.QueryContractsByCodeResponseAmino): _106.QueryContractsByCodeResponse;
                toAmino(message: _106.QueryContractsByCodeResponse): _106.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _106.QueryContractsByCodeResponseAminoMsg): _106.QueryContractsByCodeResponse;
                toAminoMsg(message: _106.QueryContractsByCodeResponse): _106.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _106.QueryContractsByCodeResponseProtoMsg): _106.QueryContractsByCodeResponse;
                toProto(message: _106.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _106.QueryContractsByCodeResponse): _106.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _106.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAllContractStateRequest;
                fromJSON(object: any): _106.QueryAllContractStateRequest;
                toJSON(message: _106.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_106.QueryAllContractStateRequest>): _106.QueryAllContractStateRequest;
                fromAmino(object: _106.QueryAllContractStateRequestAmino): _106.QueryAllContractStateRequest;
                toAmino(message: _106.QueryAllContractStateRequest): _106.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _106.QueryAllContractStateRequestAminoMsg): _106.QueryAllContractStateRequest;
                toAminoMsg(message: _106.QueryAllContractStateRequest): _106.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _106.QueryAllContractStateRequestProtoMsg): _106.QueryAllContractStateRequest;
                toProto(message: _106.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _106.QueryAllContractStateRequest): _106.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _106.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAllContractStateResponse;
                fromJSON(object: any): _106.QueryAllContractStateResponse;
                toJSON(message: _106.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_106.QueryAllContractStateResponse>): _106.QueryAllContractStateResponse;
                fromAmino(object: _106.QueryAllContractStateResponseAmino): _106.QueryAllContractStateResponse;
                toAmino(message: _106.QueryAllContractStateResponse): _106.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _106.QueryAllContractStateResponseAminoMsg): _106.QueryAllContractStateResponse;
                toAminoMsg(message: _106.QueryAllContractStateResponse): _106.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _106.QueryAllContractStateResponseProtoMsg): _106.QueryAllContractStateResponse;
                toProto(message: _106.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _106.QueryAllContractStateResponse): _106.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _106.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryRawContractStateRequest;
                fromJSON(object: any): _106.QueryRawContractStateRequest;
                toJSON(message: _106.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_106.QueryRawContractStateRequest>): _106.QueryRawContractStateRequest;
                fromAmino(object: _106.QueryRawContractStateRequestAmino): _106.QueryRawContractStateRequest;
                toAmino(message: _106.QueryRawContractStateRequest): _106.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _106.QueryRawContractStateRequestAminoMsg): _106.QueryRawContractStateRequest;
                toAminoMsg(message: _106.QueryRawContractStateRequest): _106.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _106.QueryRawContractStateRequestProtoMsg): _106.QueryRawContractStateRequest;
                toProto(message: _106.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _106.QueryRawContractStateRequest): _106.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _106.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryRawContractStateResponse;
                fromJSON(object: any): _106.QueryRawContractStateResponse;
                toJSON(message: _106.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_106.QueryRawContractStateResponse>): _106.QueryRawContractStateResponse;
                fromAmino(object: _106.QueryRawContractStateResponseAmino): _106.QueryRawContractStateResponse;
                toAmino(message: _106.QueryRawContractStateResponse): _106.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _106.QueryRawContractStateResponseAminoMsg): _106.QueryRawContractStateResponse;
                toAminoMsg(message: _106.QueryRawContractStateResponse): _106.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _106.QueryRawContractStateResponseProtoMsg): _106.QueryRawContractStateResponse;
                toProto(message: _106.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _106.QueryRawContractStateResponse): _106.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _106.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QuerySmartContractStateRequest;
                fromJSON(object: any): _106.QuerySmartContractStateRequest;
                toJSON(message: _106.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_106.QuerySmartContractStateRequest>): _106.QuerySmartContractStateRequest;
                fromAmino(object: _106.QuerySmartContractStateRequestAmino): _106.QuerySmartContractStateRequest;
                toAmino(message: _106.QuerySmartContractStateRequest): _106.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _106.QuerySmartContractStateRequestAminoMsg): _106.QuerySmartContractStateRequest;
                toAminoMsg(message: _106.QuerySmartContractStateRequest): _106.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _106.QuerySmartContractStateRequestProtoMsg): _106.QuerySmartContractStateRequest;
                toProto(message: _106.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _106.QuerySmartContractStateRequest): _106.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _106.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QuerySmartContractStateResponse;
                fromJSON(object: any): _106.QuerySmartContractStateResponse;
                toJSON(message: _106.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_106.QuerySmartContractStateResponse>): _106.QuerySmartContractStateResponse;
                fromAmino(object: _106.QuerySmartContractStateResponseAmino): _106.QuerySmartContractStateResponse;
                toAmino(message: _106.QuerySmartContractStateResponse): _106.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _106.QuerySmartContractStateResponseAminoMsg): _106.QuerySmartContractStateResponse;
                toAminoMsg(message: _106.QuerySmartContractStateResponse): _106.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _106.QuerySmartContractStateResponseProtoMsg): _106.QuerySmartContractStateResponse;
                toProto(message: _106.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _106.QuerySmartContractStateResponse): _106.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _106.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCodeRequest;
                fromJSON(object: any): _106.QueryCodeRequest;
                toJSON(message: _106.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_106.QueryCodeRequest>): _106.QueryCodeRequest;
                fromAmino(object: _106.QueryCodeRequestAmino): _106.QueryCodeRequest;
                toAmino(message: _106.QueryCodeRequest): _106.QueryCodeRequestAmino;
                fromAminoMsg(object: _106.QueryCodeRequestAminoMsg): _106.QueryCodeRequest;
                toAminoMsg(message: _106.QueryCodeRequest): _106.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _106.QueryCodeRequestProtoMsg): _106.QueryCodeRequest;
                toProto(message: _106.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _106.QueryCodeRequest): _106.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _106.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.CodeInfoResponse;
                fromJSON(object: any): _106.CodeInfoResponse;
                toJSON(message: _106.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_106.CodeInfoResponse>): _106.CodeInfoResponse;
                fromAmino(object: _106.CodeInfoResponseAmino): _106.CodeInfoResponse;
                toAmino(message: _106.CodeInfoResponse): _106.CodeInfoResponseAmino;
                fromAminoMsg(object: _106.CodeInfoResponseAminoMsg): _106.CodeInfoResponse;
                toAminoMsg(message: _106.CodeInfoResponse): _106.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _106.CodeInfoResponseProtoMsg): _106.CodeInfoResponse;
                toProto(message: _106.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _106.CodeInfoResponse): _106.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _106.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCodeResponse;
                fromJSON(object: any): _106.QueryCodeResponse;
                toJSON(message: _106.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_106.QueryCodeResponse>): _106.QueryCodeResponse;
                fromAmino(object: _106.QueryCodeResponseAmino): _106.QueryCodeResponse;
                toAmino(message: _106.QueryCodeResponse): _106.QueryCodeResponseAmino;
                fromAminoMsg(object: _106.QueryCodeResponseAminoMsg): _106.QueryCodeResponse;
                toAminoMsg(message: _106.QueryCodeResponse): _106.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _106.QueryCodeResponseProtoMsg): _106.QueryCodeResponse;
                toProto(message: _106.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _106.QueryCodeResponse): _106.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _106.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCodesRequest;
                fromJSON(object: any): _106.QueryCodesRequest;
                toJSON(message: _106.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_106.QueryCodesRequest>): _106.QueryCodesRequest;
                fromAmino(object: _106.QueryCodesRequestAmino): _106.QueryCodesRequest;
                toAmino(message: _106.QueryCodesRequest): _106.QueryCodesRequestAmino;
                fromAminoMsg(object: _106.QueryCodesRequestAminoMsg): _106.QueryCodesRequest;
                toAminoMsg(message: _106.QueryCodesRequest): _106.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _106.QueryCodesRequestProtoMsg): _106.QueryCodesRequest;
                toProto(message: _106.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _106.QueryCodesRequest): _106.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _106.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCodesResponse;
                fromJSON(object: any): _106.QueryCodesResponse;
                toJSON(message: _106.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_106.QueryCodesResponse>): _106.QueryCodesResponse;
                fromAmino(object: _106.QueryCodesResponseAmino): _106.QueryCodesResponse;
                toAmino(message: _106.QueryCodesResponse): _106.QueryCodesResponseAmino;
                fromAminoMsg(object: _106.QueryCodesResponseAminoMsg): _106.QueryCodesResponse;
                toAminoMsg(message: _106.QueryCodesResponse): _106.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _106.QueryCodesResponseProtoMsg): _106.QueryCodesResponse;
                toProto(message: _106.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _106.QueryCodesResponse): _106.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _106.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryPinnedCodesRequest;
                fromJSON(object: any): _106.QueryPinnedCodesRequest;
                toJSON(message: _106.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_106.QueryPinnedCodesRequest>): _106.QueryPinnedCodesRequest;
                fromAmino(object: _106.QueryPinnedCodesRequestAmino): _106.QueryPinnedCodesRequest;
                toAmino(message: _106.QueryPinnedCodesRequest): _106.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _106.QueryPinnedCodesRequestAminoMsg): _106.QueryPinnedCodesRequest;
                toAminoMsg(message: _106.QueryPinnedCodesRequest): _106.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _106.QueryPinnedCodesRequestProtoMsg): _106.QueryPinnedCodesRequest;
                toProto(message: _106.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _106.QueryPinnedCodesRequest): _106.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _106.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryPinnedCodesResponse;
                fromJSON(object: any): _106.QueryPinnedCodesResponse;
                toJSON(message: _106.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_106.QueryPinnedCodesResponse>): _106.QueryPinnedCodesResponse;
                fromAmino(object: _106.QueryPinnedCodesResponseAmino): _106.QueryPinnedCodesResponse;
                toAmino(message: _106.QueryPinnedCodesResponse): _106.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _106.QueryPinnedCodesResponseAminoMsg): _106.QueryPinnedCodesResponse;
                toAminoMsg(message: _106.QueryPinnedCodesResponse): _106.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _106.QueryPinnedCodesResponseProtoMsg): _106.QueryPinnedCodesResponse;
                toProto(message: _106.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _106.QueryPinnedCodesResponse): _106.QueryPinnedCodesResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _105.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.StoreCodeProposal;
                fromJSON(object: any): _105.StoreCodeProposal;
                toJSON(message: _105.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_105.StoreCodeProposal>): _105.StoreCodeProposal;
                fromAmino(object: _105.StoreCodeProposalAmino): _105.StoreCodeProposal;
                toAmino(message: _105.StoreCodeProposal): _105.StoreCodeProposalAmino;
                fromAminoMsg(object: _105.StoreCodeProposalAminoMsg): _105.StoreCodeProposal;
                toAminoMsg(message: _105.StoreCodeProposal): _105.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _105.StoreCodeProposalProtoMsg): _105.StoreCodeProposal;
                toProto(message: _105.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _105.StoreCodeProposal): _105.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _105.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.InstantiateContractProposal;
                fromJSON(object: any): _105.InstantiateContractProposal;
                toJSON(message: _105.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_105.InstantiateContractProposal>): _105.InstantiateContractProposal;
                fromAmino(object: _105.InstantiateContractProposalAmino): _105.InstantiateContractProposal;
                toAmino(message: _105.InstantiateContractProposal): _105.InstantiateContractProposalAmino;
                fromAminoMsg(object: _105.InstantiateContractProposalAminoMsg): _105.InstantiateContractProposal;
                toAminoMsg(message: _105.InstantiateContractProposal): _105.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _105.InstantiateContractProposalProtoMsg): _105.InstantiateContractProposal;
                toProto(message: _105.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _105.InstantiateContractProposal): _105.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _105.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MigrateContractProposal;
                fromJSON(object: any): _105.MigrateContractProposal;
                toJSON(message: _105.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_105.MigrateContractProposal>): _105.MigrateContractProposal;
                fromAmino(object: _105.MigrateContractProposalAmino): _105.MigrateContractProposal;
                toAmino(message: _105.MigrateContractProposal): _105.MigrateContractProposalAmino;
                fromAminoMsg(object: _105.MigrateContractProposalAminoMsg): _105.MigrateContractProposal;
                toAminoMsg(message: _105.MigrateContractProposal): _105.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _105.MigrateContractProposalProtoMsg): _105.MigrateContractProposal;
                toProto(message: _105.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _105.MigrateContractProposal): _105.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _105.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SudoContractProposal;
                fromJSON(object: any): _105.SudoContractProposal;
                toJSON(message: _105.SudoContractProposal): unknown;
                fromPartial(object: Partial<_105.SudoContractProposal>): _105.SudoContractProposal;
                fromAmino(object: _105.SudoContractProposalAmino): _105.SudoContractProposal;
                toAmino(message: _105.SudoContractProposal): _105.SudoContractProposalAmino;
                fromAminoMsg(object: _105.SudoContractProposalAminoMsg): _105.SudoContractProposal;
                toAminoMsg(message: _105.SudoContractProposal): _105.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _105.SudoContractProposalProtoMsg): _105.SudoContractProposal;
                toProto(message: _105.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _105.SudoContractProposal): _105.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _105.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ExecuteContractProposal;
                fromJSON(object: any): _105.ExecuteContractProposal;
                toJSON(message: _105.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_105.ExecuteContractProposal>): _105.ExecuteContractProposal;
                fromAmino(object: _105.ExecuteContractProposalAmino): _105.ExecuteContractProposal;
                toAmino(message: _105.ExecuteContractProposal): _105.ExecuteContractProposalAmino;
                fromAminoMsg(object: _105.ExecuteContractProposalAminoMsg): _105.ExecuteContractProposal;
                toAminoMsg(message: _105.ExecuteContractProposal): _105.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _105.ExecuteContractProposalProtoMsg): _105.ExecuteContractProposal;
                toProto(message: _105.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _105.ExecuteContractProposal): _105.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _105.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.UpdateAdminProposal;
                fromJSON(object: any): _105.UpdateAdminProposal;
                toJSON(message: _105.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_105.UpdateAdminProposal>): _105.UpdateAdminProposal;
                fromAmino(object: _105.UpdateAdminProposalAmino): _105.UpdateAdminProposal;
                toAmino(message: _105.UpdateAdminProposal): _105.UpdateAdminProposalAmino;
                fromAminoMsg(object: _105.UpdateAdminProposalAminoMsg): _105.UpdateAdminProposal;
                toAminoMsg(message: _105.UpdateAdminProposal): _105.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _105.UpdateAdminProposalProtoMsg): _105.UpdateAdminProposal;
                toProto(message: _105.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _105.UpdateAdminProposal): _105.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _105.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ClearAdminProposal;
                fromJSON(object: any): _105.ClearAdminProposal;
                toJSON(message: _105.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_105.ClearAdminProposal>): _105.ClearAdminProposal;
                fromAmino(object: _105.ClearAdminProposalAmino): _105.ClearAdminProposal;
                toAmino(message: _105.ClearAdminProposal): _105.ClearAdminProposalAmino;
                fromAminoMsg(object: _105.ClearAdminProposalAminoMsg): _105.ClearAdminProposal;
                toAminoMsg(message: _105.ClearAdminProposal): _105.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _105.ClearAdminProposalProtoMsg): _105.ClearAdminProposal;
                toProto(message: _105.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _105.ClearAdminProposal): _105.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _105.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.PinCodesProposal;
                fromJSON(object: any): _105.PinCodesProposal;
                toJSON(message: _105.PinCodesProposal): unknown;
                fromPartial(object: Partial<_105.PinCodesProposal>): _105.PinCodesProposal;
                fromAmino(object: _105.PinCodesProposalAmino): _105.PinCodesProposal;
                toAmino(message: _105.PinCodesProposal): _105.PinCodesProposalAmino;
                fromAminoMsg(object: _105.PinCodesProposalAminoMsg): _105.PinCodesProposal;
                toAminoMsg(message: _105.PinCodesProposal): _105.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _105.PinCodesProposalProtoMsg): _105.PinCodesProposal;
                toProto(message: _105.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _105.PinCodesProposal): _105.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _105.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.UnpinCodesProposal;
                fromJSON(object: any): _105.UnpinCodesProposal;
                toJSON(message: _105.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_105.UnpinCodesProposal>): _105.UnpinCodesProposal;
                fromAmino(object: _105.UnpinCodesProposalAmino): _105.UnpinCodesProposal;
                toAmino(message: _105.UnpinCodesProposal): _105.UnpinCodesProposalAmino;
                fromAminoMsg(object: _105.UnpinCodesProposalAminoMsg): _105.UnpinCodesProposal;
                toAminoMsg(message: _105.UnpinCodesProposal): _105.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _105.UnpinCodesProposalProtoMsg): _105.UnpinCodesProposal;
                toProto(message: _105.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _105.UnpinCodesProposal): _105.UnpinCodesProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _104.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgIBCSend;
                fromJSON(object: any): _104.MsgIBCSend;
                toJSON(message: _104.MsgIBCSend): unknown;
                fromPartial(object: Partial<_104.MsgIBCSend>): _104.MsgIBCSend;
                fromAmino(object: _104.MsgIBCSendAmino): _104.MsgIBCSend;
                toAmino(message: _104.MsgIBCSend): _104.MsgIBCSendAmino;
                fromAminoMsg(object: _104.MsgIBCSendAminoMsg): _104.MsgIBCSend;
                toAminoMsg(message: _104.MsgIBCSend): _104.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _104.MsgIBCSendProtoMsg): _104.MsgIBCSend;
                toProto(message: _104.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _104.MsgIBCSend): _104.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _104.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgIBCCloseChannel;
                fromJSON(object: any): _104.MsgIBCCloseChannel;
                toJSON(message: _104.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_104.MsgIBCCloseChannel>): _104.MsgIBCCloseChannel;
                fromAmino(object: _104.MsgIBCCloseChannelAmino): _104.MsgIBCCloseChannel;
                toAmino(message: _104.MsgIBCCloseChannel): _104.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _104.MsgIBCCloseChannelAminoMsg): _104.MsgIBCCloseChannel;
                toAminoMsg(message: _104.MsgIBCCloseChannel): _104.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _104.MsgIBCCloseChannelProtoMsg): _104.MsgIBCCloseChannel;
                toProto(message: _104.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _104.MsgIBCCloseChannel): _104.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GenesisState;
                fromJSON(object: any): _103.GenesisState;
                toJSON(message: _103.GenesisState): unknown;
                fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
                fromAmino(object: _103.GenesisStateAmino): _103.GenesisState;
                toAmino(message: _103.GenesisState): _103.GenesisStateAmino;
                fromAminoMsg(object: _103.GenesisStateAminoMsg): _103.GenesisState;
                toAminoMsg(message: _103.GenesisState): _103.GenesisStateAminoMsg;
                fromProtoMsg(message: _103.GenesisStateProtoMsg): _103.GenesisState;
                toProto(message: _103.GenesisState): Uint8Array;
                toProtoMsg(message: _103.GenesisState): _103.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                encode(message: _103.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GenesisState_GenMsgs;
                fromJSON(object: any): _103.GenesisState_GenMsgs;
                toJSON(message: _103.GenesisState_GenMsgs): unknown;
                fromPartial(object: Partial<_103.GenesisState_GenMsgs>): _103.GenesisState_GenMsgs;
                fromAmino(object: _103.GenesisState_GenMsgsAmino): _103.GenesisState_GenMsgs;
                toAmino(message: _103.GenesisState_GenMsgs): _103.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _103.GenesisState_GenMsgsAminoMsg): _103.GenesisState_GenMsgs;
                toAminoMsg(message: _103.GenesisState_GenMsgs): _103.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _103.GenesisState_GenMsgsProtoMsg): _103.GenesisState_GenMsgs;
                toProto(message: _103.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _103.GenesisState_GenMsgs): _103.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _103.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Code;
                fromJSON(object: any): _103.Code;
                toJSON(message: _103.Code): unknown;
                fromPartial(object: Partial<_103.Code>): _103.Code;
                fromAmino(object: _103.CodeAmino): _103.Code;
                toAmino(message: _103.Code): _103.CodeAmino;
                fromAminoMsg(object: _103.CodeAminoMsg): _103.Code;
                toAminoMsg(message: _103.Code): _103.CodeAminoMsg;
                fromProtoMsg(message: _103.CodeProtoMsg): _103.Code;
                toProto(message: _103.Code): Uint8Array;
                toProtoMsg(message: _103.Code): _103.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _103.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Contract;
                fromJSON(object: any): _103.Contract;
                toJSON(message: _103.Contract): unknown;
                fromPartial(object: Partial<_103.Contract>): _103.Contract;
                fromAmino(object: _103.ContractAmino): _103.Contract;
                toAmino(message: _103.Contract): _103.ContractAmino;
                fromAminoMsg(object: _103.ContractAminoMsg): _103.Contract;
                toAminoMsg(message: _103.Contract): _103.ContractAminoMsg;
                fromProtoMsg(message: _103.ContractProtoMsg): _103.Contract;
                toProto(message: _103.Contract): Uint8Array;
                toProtoMsg(message: _103.Contract): _103.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _103.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Sequence;
                fromJSON(object: any): _103.Sequence;
                toJSON(message: _103.Sequence): unknown;
                fromPartial(object: Partial<_103.Sequence>): _103.Sequence;
                fromAmino(object: _103.SequenceAmino): _103.Sequence;
                toAmino(message: _103.Sequence): _103.SequenceAmino;
                fromAminoMsg(object: _103.SequenceAminoMsg): _103.Sequence;
                toAminoMsg(message: _103.Sequence): _103.SequenceAminoMsg;
                fromProtoMsg(message: _103.SequenceProtoMsg): _103.Sequence;
                toProto(message: _103.Sequence): Uint8Array;
                toProtoMsg(message: _103.Sequence): _103.SequenceProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: import("../cosmos/accesscontrol_x/tx.rpc.msg").MsgClientImpl;
                };
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
                    v1: _312.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: {
                        params(request?: import("../cosmos/accesscontrol_x/query").QueryParamsRequest): Promise<import("../cosmos/accesscontrol_x/query").QueryParamsResponse>;
                        resourceDependencyMappingFromMessageKey(request: import("../cosmos/accesscontrol_x/query").ResourceDependencyMappingFromMessageKeyRequest): Promise<import("../cosmos/accesscontrol_x/query").ResourceDependencyMappingFromMessageKeyResponse>;
                        listResourceDependencyMapping(request?: import("../cosmos/accesscontrol_x/query").ListResourceDependencyMappingRequest): Promise<import("../cosmos/accesscontrol_x/query").ListResourceDependencyMappingResponse>;
                        wasmDependencyMapping(request: import("../cosmos/accesscontrol_x/query").WasmDependencyMappingRequest): Promise<import("../cosmos/accesscontrol_x/query").WasmDependencyMappingResponse>;
                        listWasmDependencyMapping(request?: import("../cosmos/accesscontrol_x/query").ListWasmDependencyMappingRequest): Promise<import("../cosmos/accesscontrol_x/query").ListWasmDependencyMappingResponse>;
                    };
                };
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
                        nextAccountNumber(request?: import("../cosmos/auth/v1beta1/query").QueryNextAccountNumberRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryNextAccountNumberResponse>;
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
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _106.QueryContractInfoRequest): Promise<_106.QueryContractInfoResponse>;
                        contractHistory(request: _106.QueryContractHistoryRequest): Promise<_106.QueryContractHistoryResponse>;
                        contractsByCode(request: _106.QueryContractsByCodeRequest): Promise<_106.QueryContractsByCodeResponse>;
                        allContractState(request: _106.QueryAllContractStateRequest): Promise<_106.QueryAllContractStateResponse>;
                        rawContractState(request: _106.QueryRawContractStateRequest): Promise<_106.QueryRawContractStateResponse>;
                        smartContractState(request: _106.QuerySmartContractStateRequest): Promise<_106.QuerySmartContractStateResponse>;
                        code(request: _106.QueryCodeRequest): Promise<_106.QueryCodeResponse>;
                        codes(request?: _106.QueryCodesRequest): Promise<_106.QueryCodesResponse>;
                        pinnedCodes(request?: _106.QueryPinnedCodesRequest): Promise<_106.QueryPinnedCodesResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: import("../cosmos/accesscontrol_x/query.lcd").LCDQueryClient;
                };
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
                    v1: _310.LCDQueryClient;
                };
            };
        }>;
    };
}
