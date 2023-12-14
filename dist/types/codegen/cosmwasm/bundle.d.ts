import * as _44 from "./wasm/v1/genesis";
import * as _45 from "./wasm/v1/ibc";
import * as _46 from "./wasm/v1/proposal";
import * as _47 from "./wasm/v1/query";
import * as _48 from "./wasm/v1/tx";
import * as _49 from "./wasm/v1/types";
import * as _162 from "./wasm/v1/query.lcd";
import * as _163 from "./wasm/v1/query.rpc.Query";
import * as _164 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _47.QueryContractInfoRequest): Promise<_47.QueryContractInfoResponse>;
                contractHistory(request: _47.QueryContractHistoryRequest): Promise<_47.QueryContractHistoryResponse>;
                contractsByCode(request: _47.QueryContractsByCodeRequest): Promise<_47.QueryContractsByCodeResponse>;
                allContractState(request: _47.QueryAllContractStateRequest): Promise<_47.QueryAllContractStateResponse>;
                rawContractState(request: _47.QueryRawContractStateRequest): Promise<_47.QueryRawContractStateResponse>;
                smartContractState(request: _47.QuerySmartContractStateRequest): Promise<_47.QuerySmartContractStateResponse>;
                code(request: _47.QueryCodeRequest): Promise<_47.QueryCodeResponse>;
                codes(request?: _47.QueryCodesRequest): Promise<_47.QueryCodesResponse>;
                pinnedCodes(request?: _47.QueryPinnedCodesRequest): Promise<_47.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _162.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _48.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _48.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _48.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _48.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _48.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _48.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _48.MsgStoreCode): {
                        typeUrl: string;
                        value: _48.MsgStoreCode;
                    };
                    instantiateContract(value: _48.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _48.MsgInstantiateContract;
                    };
                    executeContract(value: _48.MsgExecuteContract): {
                        typeUrl: string;
                        value: _48.MsgExecuteContract;
                    };
                    migrateContract(value: _48.MsgMigrateContract): {
                        typeUrl: string;
                        value: _48.MsgMigrateContract;
                    };
                    updateAdmin(value: _48.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _48.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _48.MsgClearAdmin): {
                        typeUrl: string;
                        value: _48.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _48.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _48.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _48.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _48.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _48.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _48.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _48.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _48.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _48.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _48.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _48.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _48.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _48.MsgStoreCode): {
                        typeUrl: string;
                        value: _48.MsgStoreCode;
                    };
                    instantiateContract(value: _48.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _48.MsgInstantiateContract;
                    };
                    executeContract(value: _48.MsgExecuteContract): {
                        typeUrl: string;
                        value: _48.MsgExecuteContract;
                    };
                    migrateContract(value: _48.MsgMigrateContract): {
                        typeUrl: string;
                        value: _48.MsgMigrateContract;
                    };
                    updateAdmin(value: _48.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _48.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _48.MsgClearAdmin): {
                        typeUrl: string;
                        value: _48.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _48.MsgStoreCode) => _48.MsgStoreCodeAmino;
                    fromAmino: (object: _48.MsgStoreCodeAmino) => _48.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _48.MsgInstantiateContract) => _48.MsgInstantiateContractAmino;
                    fromAmino: (object: _48.MsgInstantiateContractAmino) => _48.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _48.MsgExecuteContract) => _48.MsgExecuteContractAmino;
                    fromAmino: (object: _48.MsgExecuteContractAmino) => _48.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _48.MsgMigrateContract) => _48.MsgMigrateContractAmino;
                    fromAmino: (object: _48.MsgMigrateContractAmino) => _48.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _48.MsgUpdateAdmin) => _48.MsgUpdateAdminAmino;
                    fromAmino: (object: _48.MsgUpdateAdminAmino) => _48.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _48.MsgClearAdmin) => _48.MsgClearAdminAmino;
                    fromAmino: (object: _48.MsgClearAdminAmino) => _48.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _49.AccessType;
            accessTypeToJSON(object: _49.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _49.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _49.ContractCodeHistoryOperationType): string;
            AccessType: typeof _49.AccessType;
            AccessTypeSDKType: typeof _49.AccessType;
            AccessTypeAmino: typeof _49.AccessType;
            ContractCodeHistoryOperationType: typeof _49.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _49.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _49.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _49.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.AccessTypeParam;
                fromJSON(object: any): _49.AccessTypeParam;
                toJSON(message: _49.AccessTypeParam): unknown;
                fromPartial(object: Partial<_49.AccessTypeParam>): _49.AccessTypeParam;
                fromAmino(object: _49.AccessTypeParamAmino): _49.AccessTypeParam;
                toAmino(message: _49.AccessTypeParam): _49.AccessTypeParamAmino;
                fromAminoMsg(object: _49.AccessTypeParamAminoMsg): _49.AccessTypeParam;
                toAminoMsg(message: _49.AccessTypeParam): _49.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _49.AccessTypeParamProtoMsg): _49.AccessTypeParam;
                toProto(message: _49.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _49.AccessTypeParam): _49.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _49.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.AccessConfig;
                fromJSON(object: any): _49.AccessConfig;
                toJSON(message: _49.AccessConfig): unknown;
                fromPartial(object: Partial<_49.AccessConfig>): _49.AccessConfig;
                fromAmino(object: _49.AccessConfigAmino): _49.AccessConfig;
                toAmino(message: _49.AccessConfig): _49.AccessConfigAmino;
                fromAminoMsg(object: _49.AccessConfigAminoMsg): _49.AccessConfig;
                toAminoMsg(message: _49.AccessConfig): _49.AccessConfigAminoMsg;
                fromProtoMsg(message: _49.AccessConfigProtoMsg): _49.AccessConfig;
                toProto(message: _49.AccessConfig): Uint8Array;
                toProtoMsg(message: _49.AccessConfig): _49.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _49.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Params;
                fromJSON(object: any): _49.Params;
                toJSON(message: _49.Params): unknown;
                fromPartial(object: Partial<_49.Params>): _49.Params;
                fromAmino(object: _49.ParamsAmino): _49.Params;
                toAmino(message: _49.Params): _49.ParamsAmino;
                fromAminoMsg(object: _49.ParamsAminoMsg): _49.Params;
                toAminoMsg(message: _49.Params): _49.ParamsAminoMsg;
                fromProtoMsg(message: _49.ParamsProtoMsg): _49.Params;
                toProto(message: _49.Params): Uint8Array;
                toProtoMsg(message: _49.Params): _49.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _49.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CodeInfo;
                fromJSON(object: any): _49.CodeInfo;
                toJSON(message: _49.CodeInfo): unknown;
                fromPartial(object: Partial<_49.CodeInfo>): _49.CodeInfo;
                fromAmino(object: _49.CodeInfoAmino): _49.CodeInfo;
                toAmino(message: _49.CodeInfo): _49.CodeInfoAmino;
                fromAminoMsg(object: _49.CodeInfoAminoMsg): _49.CodeInfo;
                toAminoMsg(message: _49.CodeInfo): _49.CodeInfoAminoMsg;
                fromProtoMsg(message: _49.CodeInfoProtoMsg): _49.CodeInfo;
                toProto(message: _49.CodeInfo): Uint8Array;
                toProtoMsg(message: _49.CodeInfo): _49.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _49.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ContractInfo;
                fromJSON(object: any): _49.ContractInfo;
                toJSON(message: _49.ContractInfo): unknown;
                fromPartial(object: Partial<_49.ContractInfo>): _49.ContractInfo;
                fromAmino(object: _49.ContractInfoAmino): _49.ContractInfo;
                toAmino(message: _49.ContractInfo): _49.ContractInfoAmino;
                fromAminoMsg(object: _49.ContractInfoAminoMsg): _49.ContractInfo;
                toAminoMsg(message: _49.ContractInfo): _49.ContractInfoAminoMsg;
                fromProtoMsg(message: _49.ContractInfoProtoMsg): _49.ContractInfo;
                toProto(message: _49.ContractInfo): Uint8Array;
                toProtoMsg(message: _49.ContractInfo): _49.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _49.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ContractCodeHistoryEntry;
                fromJSON(object: any): _49.ContractCodeHistoryEntry;
                toJSON(message: _49.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_49.ContractCodeHistoryEntry>): _49.ContractCodeHistoryEntry;
                fromAmino(object: _49.ContractCodeHistoryEntryAmino): _49.ContractCodeHistoryEntry;
                toAmino(message: _49.ContractCodeHistoryEntry): _49.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _49.ContractCodeHistoryEntryAminoMsg): _49.ContractCodeHistoryEntry;
                toAminoMsg(message: _49.ContractCodeHistoryEntry): _49.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _49.ContractCodeHistoryEntryProtoMsg): _49.ContractCodeHistoryEntry;
                toProto(message: _49.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _49.ContractCodeHistoryEntry): _49.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _49.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.AbsoluteTxPosition;
                fromJSON(object: any): _49.AbsoluteTxPosition;
                toJSON(message: _49.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_49.AbsoluteTxPosition>): _49.AbsoluteTxPosition;
                fromAmino(object: _49.AbsoluteTxPositionAmino): _49.AbsoluteTxPosition;
                toAmino(message: _49.AbsoluteTxPosition): _49.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _49.AbsoluteTxPositionAminoMsg): _49.AbsoluteTxPosition;
                toAminoMsg(message: _49.AbsoluteTxPosition): _49.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _49.AbsoluteTxPositionProtoMsg): _49.AbsoluteTxPosition;
                toProto(message: _49.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _49.AbsoluteTxPosition): _49.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _49.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Model;
                fromJSON(object: any): _49.Model;
                toJSON(message: _49.Model): unknown;
                fromPartial(object: Partial<_49.Model>): _49.Model;
                fromAmino(object: _49.ModelAmino): _49.Model;
                toAmino(message: _49.Model): _49.ModelAmino;
                fromAminoMsg(object: _49.ModelAminoMsg): _49.Model;
                toAminoMsg(message: _49.Model): _49.ModelAminoMsg;
                fromProtoMsg(message: _49.ModelProtoMsg): _49.Model;
                toProto(message: _49.Model): Uint8Array;
                toProtoMsg(message: _49.Model): _49.ModelProtoMsg;
            };
            ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _48.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgStoreCode;
                fromJSON(object: any): _48.MsgStoreCode;
                toJSON(message: _48.MsgStoreCode): unknown;
                fromPartial(object: Partial<_48.MsgStoreCode>): _48.MsgStoreCode;
                fromAmino(object: _48.MsgStoreCodeAmino): _48.MsgStoreCode;
                toAmino(message: _48.MsgStoreCode): _48.MsgStoreCodeAmino;
                fromAminoMsg(object: _48.MsgStoreCodeAminoMsg): _48.MsgStoreCode;
                toAminoMsg(message: _48.MsgStoreCode): _48.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _48.MsgStoreCodeProtoMsg): _48.MsgStoreCode;
                toProto(message: _48.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _48.MsgStoreCode): _48.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _48.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgStoreCodeResponse;
                fromJSON(object: any): _48.MsgStoreCodeResponse;
                toJSON(message: _48.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_48.MsgStoreCodeResponse>): _48.MsgStoreCodeResponse;
                fromAmino(object: _48.MsgStoreCodeResponseAmino): _48.MsgStoreCodeResponse;
                toAmino(message: _48.MsgStoreCodeResponse): _48.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _48.MsgStoreCodeResponseAminoMsg): _48.MsgStoreCodeResponse;
                toAminoMsg(message: _48.MsgStoreCodeResponse): _48.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _48.MsgStoreCodeResponseProtoMsg): _48.MsgStoreCodeResponse;
                toProto(message: _48.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _48.MsgStoreCodeResponse): _48.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _48.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgInstantiateContract;
                fromJSON(object: any): _48.MsgInstantiateContract;
                toJSON(message: _48.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_48.MsgInstantiateContract>): _48.MsgInstantiateContract;
                fromAmino(object: _48.MsgInstantiateContractAmino): _48.MsgInstantiateContract;
                toAmino(message: _48.MsgInstantiateContract): _48.MsgInstantiateContractAmino;
                fromAminoMsg(object: _48.MsgInstantiateContractAminoMsg): _48.MsgInstantiateContract;
                toAminoMsg(message: _48.MsgInstantiateContract): _48.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _48.MsgInstantiateContractProtoMsg): _48.MsgInstantiateContract;
                toProto(message: _48.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _48.MsgInstantiateContract): _48.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _48.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgInstantiateContractResponse;
                fromJSON(object: any): _48.MsgInstantiateContractResponse;
                toJSON(message: _48.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_48.MsgInstantiateContractResponse>): _48.MsgInstantiateContractResponse;
                fromAmino(object: _48.MsgInstantiateContractResponseAmino): _48.MsgInstantiateContractResponse;
                toAmino(message: _48.MsgInstantiateContractResponse): _48.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _48.MsgInstantiateContractResponseAminoMsg): _48.MsgInstantiateContractResponse;
                toAminoMsg(message: _48.MsgInstantiateContractResponse): _48.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _48.MsgInstantiateContractResponseProtoMsg): _48.MsgInstantiateContractResponse;
                toProto(message: _48.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _48.MsgInstantiateContractResponse): _48.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _48.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgExecuteContract;
                fromJSON(object: any): _48.MsgExecuteContract;
                toJSON(message: _48.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_48.MsgExecuteContract>): _48.MsgExecuteContract;
                fromAmino(object: _48.MsgExecuteContractAmino): _48.MsgExecuteContract;
                toAmino(message: _48.MsgExecuteContract): _48.MsgExecuteContractAmino;
                fromAminoMsg(object: _48.MsgExecuteContractAminoMsg): _48.MsgExecuteContract;
                toAminoMsg(message: _48.MsgExecuteContract): _48.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _48.MsgExecuteContractProtoMsg): _48.MsgExecuteContract;
                toProto(message: _48.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _48.MsgExecuteContract): _48.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _48.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgExecuteContractResponse;
                fromJSON(object: any): _48.MsgExecuteContractResponse;
                toJSON(message: _48.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_48.MsgExecuteContractResponse>): _48.MsgExecuteContractResponse;
                fromAmino(object: _48.MsgExecuteContractResponseAmino): _48.MsgExecuteContractResponse;
                toAmino(message: _48.MsgExecuteContractResponse): _48.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _48.MsgExecuteContractResponseAminoMsg): _48.MsgExecuteContractResponse;
                toAminoMsg(message: _48.MsgExecuteContractResponse): _48.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _48.MsgExecuteContractResponseProtoMsg): _48.MsgExecuteContractResponse;
                toProto(message: _48.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _48.MsgExecuteContractResponse): _48.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _48.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgMigrateContract;
                fromJSON(object: any): _48.MsgMigrateContract;
                toJSON(message: _48.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_48.MsgMigrateContract>): _48.MsgMigrateContract;
                fromAmino(object: _48.MsgMigrateContractAmino): _48.MsgMigrateContract;
                toAmino(message: _48.MsgMigrateContract): _48.MsgMigrateContractAmino;
                fromAminoMsg(object: _48.MsgMigrateContractAminoMsg): _48.MsgMigrateContract;
                toAminoMsg(message: _48.MsgMigrateContract): _48.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _48.MsgMigrateContractProtoMsg): _48.MsgMigrateContract;
                toProto(message: _48.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _48.MsgMigrateContract): _48.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _48.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgMigrateContractResponse;
                fromJSON(object: any): _48.MsgMigrateContractResponse;
                toJSON(message: _48.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_48.MsgMigrateContractResponse>): _48.MsgMigrateContractResponse;
                fromAmino(object: _48.MsgMigrateContractResponseAmino): _48.MsgMigrateContractResponse;
                toAmino(message: _48.MsgMigrateContractResponse): _48.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _48.MsgMigrateContractResponseAminoMsg): _48.MsgMigrateContractResponse;
                toAminoMsg(message: _48.MsgMigrateContractResponse): _48.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _48.MsgMigrateContractResponseProtoMsg): _48.MsgMigrateContractResponse;
                toProto(message: _48.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _48.MsgMigrateContractResponse): _48.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _48.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgUpdateAdmin;
                fromJSON(object: any): _48.MsgUpdateAdmin;
                toJSON(message: _48.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_48.MsgUpdateAdmin>): _48.MsgUpdateAdmin;
                fromAmino(object: _48.MsgUpdateAdminAmino): _48.MsgUpdateAdmin;
                toAmino(message: _48.MsgUpdateAdmin): _48.MsgUpdateAdminAmino;
                fromAminoMsg(object: _48.MsgUpdateAdminAminoMsg): _48.MsgUpdateAdmin;
                toAminoMsg(message: _48.MsgUpdateAdmin): _48.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _48.MsgUpdateAdminProtoMsg): _48.MsgUpdateAdmin;
                toProto(message: _48.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _48.MsgUpdateAdmin): _48.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _48.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgUpdateAdminResponse;
                fromJSON(_: any): _48.MsgUpdateAdminResponse;
                toJSON(_: _48.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_48.MsgUpdateAdminResponse>): _48.MsgUpdateAdminResponse;
                fromAmino(_: _48.MsgUpdateAdminResponseAmino): _48.MsgUpdateAdminResponse;
                toAmino(_: _48.MsgUpdateAdminResponse): _48.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _48.MsgUpdateAdminResponseAminoMsg): _48.MsgUpdateAdminResponse;
                toAminoMsg(message: _48.MsgUpdateAdminResponse): _48.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _48.MsgUpdateAdminResponseProtoMsg): _48.MsgUpdateAdminResponse;
                toProto(message: _48.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _48.MsgUpdateAdminResponse): _48.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _48.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgClearAdmin;
                fromJSON(object: any): _48.MsgClearAdmin;
                toJSON(message: _48.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_48.MsgClearAdmin>): _48.MsgClearAdmin;
                fromAmino(object: _48.MsgClearAdminAmino): _48.MsgClearAdmin;
                toAmino(message: _48.MsgClearAdmin): _48.MsgClearAdminAmino;
                fromAminoMsg(object: _48.MsgClearAdminAminoMsg): _48.MsgClearAdmin;
                toAminoMsg(message: _48.MsgClearAdmin): _48.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _48.MsgClearAdminProtoMsg): _48.MsgClearAdmin;
                toProto(message: _48.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _48.MsgClearAdmin): _48.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _48.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgClearAdminResponse;
                fromJSON(_: any): _48.MsgClearAdminResponse;
                toJSON(_: _48.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_48.MsgClearAdminResponse>): _48.MsgClearAdminResponse;
                fromAmino(_: _48.MsgClearAdminResponseAmino): _48.MsgClearAdminResponse;
                toAmino(_: _48.MsgClearAdminResponse): _48.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _48.MsgClearAdminResponseAminoMsg): _48.MsgClearAdminResponse;
                toAminoMsg(message: _48.MsgClearAdminResponse): _48.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _48.MsgClearAdminResponseProtoMsg): _48.MsgClearAdminResponse;
                toProto(message: _48.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _48.MsgClearAdminResponse): _48.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _47.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractInfoRequest;
                fromJSON(object: any): _47.QueryContractInfoRequest;
                toJSON(message: _47.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_47.QueryContractInfoRequest>): _47.QueryContractInfoRequest;
                fromAmino(object: _47.QueryContractInfoRequestAmino): _47.QueryContractInfoRequest;
                toAmino(message: _47.QueryContractInfoRequest): _47.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _47.QueryContractInfoRequestAminoMsg): _47.QueryContractInfoRequest;
                toAminoMsg(message: _47.QueryContractInfoRequest): _47.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _47.QueryContractInfoRequestProtoMsg): _47.QueryContractInfoRequest;
                toProto(message: _47.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _47.QueryContractInfoRequest): _47.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _47.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractInfoResponse;
                fromJSON(object: any): _47.QueryContractInfoResponse;
                toJSON(message: _47.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_47.QueryContractInfoResponse>): _47.QueryContractInfoResponse;
                fromAmino(object: _47.QueryContractInfoResponseAmino): _47.QueryContractInfoResponse;
                toAmino(message: _47.QueryContractInfoResponse): _47.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _47.QueryContractInfoResponseAminoMsg): _47.QueryContractInfoResponse;
                toAminoMsg(message: _47.QueryContractInfoResponse): _47.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _47.QueryContractInfoResponseProtoMsg): _47.QueryContractInfoResponse;
                toProto(message: _47.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _47.QueryContractInfoResponse): _47.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _47.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractHistoryRequest;
                fromJSON(object: any): _47.QueryContractHistoryRequest;
                toJSON(message: _47.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_47.QueryContractHistoryRequest>): _47.QueryContractHistoryRequest;
                fromAmino(object: _47.QueryContractHistoryRequestAmino): _47.QueryContractHistoryRequest;
                toAmino(message: _47.QueryContractHistoryRequest): _47.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _47.QueryContractHistoryRequestAminoMsg): _47.QueryContractHistoryRequest;
                toAminoMsg(message: _47.QueryContractHistoryRequest): _47.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _47.QueryContractHistoryRequestProtoMsg): _47.QueryContractHistoryRequest;
                toProto(message: _47.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _47.QueryContractHistoryRequest): _47.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _47.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractHistoryResponse;
                fromJSON(object: any): _47.QueryContractHistoryResponse;
                toJSON(message: _47.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_47.QueryContractHistoryResponse>): _47.QueryContractHistoryResponse;
                fromAmino(object: _47.QueryContractHistoryResponseAmino): _47.QueryContractHistoryResponse;
                toAmino(message: _47.QueryContractHistoryResponse): _47.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _47.QueryContractHistoryResponseAminoMsg): _47.QueryContractHistoryResponse;
                toAminoMsg(message: _47.QueryContractHistoryResponse): _47.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _47.QueryContractHistoryResponseProtoMsg): _47.QueryContractHistoryResponse;
                toProto(message: _47.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _47.QueryContractHistoryResponse): _47.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _47.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractsByCodeRequest;
                fromJSON(object: any): _47.QueryContractsByCodeRequest;
                toJSON(message: _47.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_47.QueryContractsByCodeRequest>): _47.QueryContractsByCodeRequest;
                fromAmino(object: _47.QueryContractsByCodeRequestAmino): _47.QueryContractsByCodeRequest;
                toAmino(message: _47.QueryContractsByCodeRequest): _47.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _47.QueryContractsByCodeRequestAminoMsg): _47.QueryContractsByCodeRequest;
                toAminoMsg(message: _47.QueryContractsByCodeRequest): _47.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _47.QueryContractsByCodeRequestProtoMsg): _47.QueryContractsByCodeRequest;
                toProto(message: _47.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _47.QueryContractsByCodeRequest): _47.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _47.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractsByCodeResponse;
                fromJSON(object: any): _47.QueryContractsByCodeResponse;
                toJSON(message: _47.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_47.QueryContractsByCodeResponse>): _47.QueryContractsByCodeResponse;
                fromAmino(object: _47.QueryContractsByCodeResponseAmino): _47.QueryContractsByCodeResponse;
                toAmino(message: _47.QueryContractsByCodeResponse): _47.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _47.QueryContractsByCodeResponseAminoMsg): _47.QueryContractsByCodeResponse;
                toAminoMsg(message: _47.QueryContractsByCodeResponse): _47.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _47.QueryContractsByCodeResponseProtoMsg): _47.QueryContractsByCodeResponse;
                toProto(message: _47.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _47.QueryContractsByCodeResponse): _47.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _47.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllContractStateRequest;
                fromJSON(object: any): _47.QueryAllContractStateRequest;
                toJSON(message: _47.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_47.QueryAllContractStateRequest>): _47.QueryAllContractStateRequest;
                fromAmino(object: _47.QueryAllContractStateRequestAmino): _47.QueryAllContractStateRequest;
                toAmino(message: _47.QueryAllContractStateRequest): _47.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _47.QueryAllContractStateRequestAminoMsg): _47.QueryAllContractStateRequest;
                toAminoMsg(message: _47.QueryAllContractStateRequest): _47.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAllContractStateRequestProtoMsg): _47.QueryAllContractStateRequest;
                toProto(message: _47.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAllContractStateRequest): _47.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _47.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllContractStateResponse;
                fromJSON(object: any): _47.QueryAllContractStateResponse;
                toJSON(message: _47.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_47.QueryAllContractStateResponse>): _47.QueryAllContractStateResponse;
                fromAmino(object: _47.QueryAllContractStateResponseAmino): _47.QueryAllContractStateResponse;
                toAmino(message: _47.QueryAllContractStateResponse): _47.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _47.QueryAllContractStateResponseAminoMsg): _47.QueryAllContractStateResponse;
                toAminoMsg(message: _47.QueryAllContractStateResponse): _47.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAllContractStateResponseProtoMsg): _47.QueryAllContractStateResponse;
                toProto(message: _47.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAllContractStateResponse): _47.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _47.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryRawContractStateRequest;
                fromJSON(object: any): _47.QueryRawContractStateRequest;
                toJSON(message: _47.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_47.QueryRawContractStateRequest>): _47.QueryRawContractStateRequest;
                fromAmino(object: _47.QueryRawContractStateRequestAmino): _47.QueryRawContractStateRequest;
                toAmino(message: _47.QueryRawContractStateRequest): _47.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _47.QueryRawContractStateRequestAminoMsg): _47.QueryRawContractStateRequest;
                toAminoMsg(message: _47.QueryRawContractStateRequest): _47.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _47.QueryRawContractStateRequestProtoMsg): _47.QueryRawContractStateRequest;
                toProto(message: _47.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _47.QueryRawContractStateRequest): _47.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _47.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryRawContractStateResponse;
                fromJSON(object: any): _47.QueryRawContractStateResponse;
                toJSON(message: _47.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_47.QueryRawContractStateResponse>): _47.QueryRawContractStateResponse;
                fromAmino(object: _47.QueryRawContractStateResponseAmino): _47.QueryRawContractStateResponse;
                toAmino(message: _47.QueryRawContractStateResponse): _47.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _47.QueryRawContractStateResponseAminoMsg): _47.QueryRawContractStateResponse;
                toAminoMsg(message: _47.QueryRawContractStateResponse): _47.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _47.QueryRawContractStateResponseProtoMsg): _47.QueryRawContractStateResponse;
                toProto(message: _47.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _47.QueryRawContractStateResponse): _47.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _47.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QuerySmartContractStateRequest;
                fromJSON(object: any): _47.QuerySmartContractStateRequest;
                toJSON(message: _47.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_47.QuerySmartContractStateRequest>): _47.QuerySmartContractStateRequest;
                fromAmino(object: _47.QuerySmartContractStateRequestAmino): _47.QuerySmartContractStateRequest;
                toAmino(message: _47.QuerySmartContractStateRequest): _47.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _47.QuerySmartContractStateRequestAminoMsg): _47.QuerySmartContractStateRequest;
                toAminoMsg(message: _47.QuerySmartContractStateRequest): _47.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _47.QuerySmartContractStateRequestProtoMsg): _47.QuerySmartContractStateRequest;
                toProto(message: _47.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _47.QuerySmartContractStateRequest): _47.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _47.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QuerySmartContractStateResponse;
                fromJSON(object: any): _47.QuerySmartContractStateResponse;
                toJSON(message: _47.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_47.QuerySmartContractStateResponse>): _47.QuerySmartContractStateResponse;
                fromAmino(object: _47.QuerySmartContractStateResponseAmino): _47.QuerySmartContractStateResponse;
                toAmino(message: _47.QuerySmartContractStateResponse): _47.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _47.QuerySmartContractStateResponseAminoMsg): _47.QuerySmartContractStateResponse;
                toAminoMsg(message: _47.QuerySmartContractStateResponse): _47.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _47.QuerySmartContractStateResponseProtoMsg): _47.QuerySmartContractStateResponse;
                toProto(message: _47.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _47.QuerySmartContractStateResponse): _47.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _47.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCodeRequest;
                fromJSON(object: any): _47.QueryCodeRequest;
                toJSON(message: _47.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_47.QueryCodeRequest>): _47.QueryCodeRequest;
                fromAmino(object: _47.QueryCodeRequestAmino): _47.QueryCodeRequest;
                toAmino(message: _47.QueryCodeRequest): _47.QueryCodeRequestAmino;
                fromAminoMsg(object: _47.QueryCodeRequestAminoMsg): _47.QueryCodeRequest;
                toAminoMsg(message: _47.QueryCodeRequest): _47.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _47.QueryCodeRequestProtoMsg): _47.QueryCodeRequest;
                toProto(message: _47.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _47.QueryCodeRequest): _47.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _47.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.CodeInfoResponse;
                fromJSON(object: any): _47.CodeInfoResponse;
                toJSON(message: _47.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_47.CodeInfoResponse>): _47.CodeInfoResponse;
                fromAmino(object: _47.CodeInfoResponseAmino): _47.CodeInfoResponse;
                toAmino(message: _47.CodeInfoResponse): _47.CodeInfoResponseAmino;
                fromAminoMsg(object: _47.CodeInfoResponseAminoMsg): _47.CodeInfoResponse;
                toAminoMsg(message: _47.CodeInfoResponse): _47.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _47.CodeInfoResponseProtoMsg): _47.CodeInfoResponse;
                toProto(message: _47.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _47.CodeInfoResponse): _47.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _47.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCodeResponse;
                fromJSON(object: any): _47.QueryCodeResponse;
                toJSON(message: _47.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_47.QueryCodeResponse>): _47.QueryCodeResponse;
                fromAmino(object: _47.QueryCodeResponseAmino): _47.QueryCodeResponse;
                toAmino(message: _47.QueryCodeResponse): _47.QueryCodeResponseAmino;
                fromAminoMsg(object: _47.QueryCodeResponseAminoMsg): _47.QueryCodeResponse;
                toAminoMsg(message: _47.QueryCodeResponse): _47.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _47.QueryCodeResponseProtoMsg): _47.QueryCodeResponse;
                toProto(message: _47.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _47.QueryCodeResponse): _47.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _47.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCodesRequest;
                fromJSON(object: any): _47.QueryCodesRequest;
                toJSON(message: _47.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_47.QueryCodesRequest>): _47.QueryCodesRequest;
                fromAmino(object: _47.QueryCodesRequestAmino): _47.QueryCodesRequest;
                toAmino(message: _47.QueryCodesRequest): _47.QueryCodesRequestAmino;
                fromAminoMsg(object: _47.QueryCodesRequestAminoMsg): _47.QueryCodesRequest;
                toAminoMsg(message: _47.QueryCodesRequest): _47.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _47.QueryCodesRequestProtoMsg): _47.QueryCodesRequest;
                toProto(message: _47.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _47.QueryCodesRequest): _47.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _47.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCodesResponse;
                fromJSON(object: any): _47.QueryCodesResponse;
                toJSON(message: _47.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_47.QueryCodesResponse>): _47.QueryCodesResponse;
                fromAmino(object: _47.QueryCodesResponseAmino): _47.QueryCodesResponse;
                toAmino(message: _47.QueryCodesResponse): _47.QueryCodesResponseAmino;
                fromAminoMsg(object: _47.QueryCodesResponseAminoMsg): _47.QueryCodesResponse;
                toAminoMsg(message: _47.QueryCodesResponse): _47.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _47.QueryCodesResponseProtoMsg): _47.QueryCodesResponse;
                toProto(message: _47.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _47.QueryCodesResponse): _47.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _47.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryPinnedCodesRequest;
                fromJSON(object: any): _47.QueryPinnedCodesRequest;
                toJSON(message: _47.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_47.QueryPinnedCodesRequest>): _47.QueryPinnedCodesRequest;
                fromAmino(object: _47.QueryPinnedCodesRequestAmino): _47.QueryPinnedCodesRequest;
                toAmino(message: _47.QueryPinnedCodesRequest): _47.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _47.QueryPinnedCodesRequestAminoMsg): _47.QueryPinnedCodesRequest;
                toAminoMsg(message: _47.QueryPinnedCodesRequest): _47.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _47.QueryPinnedCodesRequestProtoMsg): _47.QueryPinnedCodesRequest;
                toProto(message: _47.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _47.QueryPinnedCodesRequest): _47.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _47.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryPinnedCodesResponse;
                fromJSON(object: any): _47.QueryPinnedCodesResponse;
                toJSON(message: _47.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_47.QueryPinnedCodesResponse>): _47.QueryPinnedCodesResponse;
                fromAmino(object: _47.QueryPinnedCodesResponseAmino): _47.QueryPinnedCodesResponse;
                toAmino(message: _47.QueryPinnedCodesResponse): _47.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _47.QueryPinnedCodesResponseAminoMsg): _47.QueryPinnedCodesResponse;
                toAminoMsg(message: _47.QueryPinnedCodesResponse): _47.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _47.QueryPinnedCodesResponseProtoMsg): _47.QueryPinnedCodesResponse;
                toProto(message: _47.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _47.QueryPinnedCodesResponse): _47.QueryPinnedCodesResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _46.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.StoreCodeProposal;
                fromJSON(object: any): _46.StoreCodeProposal;
                toJSON(message: _46.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_46.StoreCodeProposal>): _46.StoreCodeProposal;
                fromAmino(object: _46.StoreCodeProposalAmino): _46.StoreCodeProposal;
                toAmino(message: _46.StoreCodeProposal): _46.StoreCodeProposalAmino;
                fromAminoMsg(object: _46.StoreCodeProposalAminoMsg): _46.StoreCodeProposal;
                toAminoMsg(message: _46.StoreCodeProposal): _46.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _46.StoreCodeProposalProtoMsg): _46.StoreCodeProposal;
                toProto(message: _46.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _46.StoreCodeProposal): _46.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _46.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.InstantiateContractProposal;
                fromJSON(object: any): _46.InstantiateContractProposal;
                toJSON(message: _46.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_46.InstantiateContractProposal>): _46.InstantiateContractProposal;
                fromAmino(object: _46.InstantiateContractProposalAmino): _46.InstantiateContractProposal;
                toAmino(message: _46.InstantiateContractProposal): _46.InstantiateContractProposalAmino;
                fromAminoMsg(object: _46.InstantiateContractProposalAminoMsg): _46.InstantiateContractProposal;
                toAminoMsg(message: _46.InstantiateContractProposal): _46.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _46.InstantiateContractProposalProtoMsg): _46.InstantiateContractProposal;
                toProto(message: _46.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _46.InstantiateContractProposal): _46.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _46.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MigrateContractProposal;
                fromJSON(object: any): _46.MigrateContractProposal;
                toJSON(message: _46.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_46.MigrateContractProposal>): _46.MigrateContractProposal;
                fromAmino(object: _46.MigrateContractProposalAmino): _46.MigrateContractProposal;
                toAmino(message: _46.MigrateContractProposal): _46.MigrateContractProposalAmino;
                fromAminoMsg(object: _46.MigrateContractProposalAminoMsg): _46.MigrateContractProposal;
                toAminoMsg(message: _46.MigrateContractProposal): _46.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _46.MigrateContractProposalProtoMsg): _46.MigrateContractProposal;
                toProto(message: _46.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _46.MigrateContractProposal): _46.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _46.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SudoContractProposal;
                fromJSON(object: any): _46.SudoContractProposal;
                toJSON(message: _46.SudoContractProposal): unknown;
                fromPartial(object: Partial<_46.SudoContractProposal>): _46.SudoContractProposal;
                fromAmino(object: _46.SudoContractProposalAmino): _46.SudoContractProposal;
                toAmino(message: _46.SudoContractProposal): _46.SudoContractProposalAmino;
                fromAminoMsg(object: _46.SudoContractProposalAminoMsg): _46.SudoContractProposal;
                toAminoMsg(message: _46.SudoContractProposal): _46.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _46.SudoContractProposalProtoMsg): _46.SudoContractProposal;
                toProto(message: _46.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _46.SudoContractProposal): _46.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _46.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ExecuteContractProposal;
                fromJSON(object: any): _46.ExecuteContractProposal;
                toJSON(message: _46.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_46.ExecuteContractProposal>): _46.ExecuteContractProposal;
                fromAmino(object: _46.ExecuteContractProposalAmino): _46.ExecuteContractProposal;
                toAmino(message: _46.ExecuteContractProposal): _46.ExecuteContractProposalAmino;
                fromAminoMsg(object: _46.ExecuteContractProposalAminoMsg): _46.ExecuteContractProposal;
                toAminoMsg(message: _46.ExecuteContractProposal): _46.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _46.ExecuteContractProposalProtoMsg): _46.ExecuteContractProposal;
                toProto(message: _46.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _46.ExecuteContractProposal): _46.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _46.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.UpdateAdminProposal;
                fromJSON(object: any): _46.UpdateAdminProposal;
                toJSON(message: _46.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_46.UpdateAdminProposal>): _46.UpdateAdminProposal;
                fromAmino(object: _46.UpdateAdminProposalAmino): _46.UpdateAdminProposal;
                toAmino(message: _46.UpdateAdminProposal): _46.UpdateAdminProposalAmino;
                fromAminoMsg(object: _46.UpdateAdminProposalAminoMsg): _46.UpdateAdminProposal;
                toAminoMsg(message: _46.UpdateAdminProposal): _46.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _46.UpdateAdminProposalProtoMsg): _46.UpdateAdminProposal;
                toProto(message: _46.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _46.UpdateAdminProposal): _46.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _46.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ClearAdminProposal;
                fromJSON(object: any): _46.ClearAdminProposal;
                toJSON(message: _46.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_46.ClearAdminProposal>): _46.ClearAdminProposal;
                fromAmino(object: _46.ClearAdminProposalAmino): _46.ClearAdminProposal;
                toAmino(message: _46.ClearAdminProposal): _46.ClearAdminProposalAmino;
                fromAminoMsg(object: _46.ClearAdminProposalAminoMsg): _46.ClearAdminProposal;
                toAminoMsg(message: _46.ClearAdminProposal): _46.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _46.ClearAdminProposalProtoMsg): _46.ClearAdminProposal;
                toProto(message: _46.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _46.ClearAdminProposal): _46.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _46.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PinCodesProposal;
                fromJSON(object: any): _46.PinCodesProposal;
                toJSON(message: _46.PinCodesProposal): unknown;
                fromPartial(object: Partial<_46.PinCodesProposal>): _46.PinCodesProposal;
                fromAmino(object: _46.PinCodesProposalAmino): _46.PinCodesProposal;
                toAmino(message: _46.PinCodesProposal): _46.PinCodesProposalAmino;
                fromAminoMsg(object: _46.PinCodesProposalAminoMsg): _46.PinCodesProposal;
                toAminoMsg(message: _46.PinCodesProposal): _46.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _46.PinCodesProposalProtoMsg): _46.PinCodesProposal;
                toProto(message: _46.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _46.PinCodesProposal): _46.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _46.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.UnpinCodesProposal;
                fromJSON(object: any): _46.UnpinCodesProposal;
                toJSON(message: _46.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_46.UnpinCodesProposal>): _46.UnpinCodesProposal;
                fromAmino(object: _46.UnpinCodesProposalAmino): _46.UnpinCodesProposal;
                toAmino(message: _46.UnpinCodesProposal): _46.UnpinCodesProposalAmino;
                fromAminoMsg(object: _46.UnpinCodesProposalAminoMsg): _46.UnpinCodesProposal;
                toAminoMsg(message: _46.UnpinCodesProposal): _46.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _46.UnpinCodesProposalProtoMsg): _46.UnpinCodesProposal;
                toProto(message: _46.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _46.UnpinCodesProposal): _46.UnpinCodesProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _45.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgIBCSend;
                fromJSON(object: any): _45.MsgIBCSend;
                toJSON(message: _45.MsgIBCSend): unknown;
                fromPartial(object: Partial<_45.MsgIBCSend>): _45.MsgIBCSend;
                fromAmino(object: _45.MsgIBCSendAmino): _45.MsgIBCSend;
                toAmino(message: _45.MsgIBCSend): _45.MsgIBCSendAmino;
                fromAminoMsg(object: _45.MsgIBCSendAminoMsg): _45.MsgIBCSend;
                toAminoMsg(message: _45.MsgIBCSend): _45.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _45.MsgIBCSendProtoMsg): _45.MsgIBCSend;
                toProto(message: _45.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _45.MsgIBCSend): _45.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _45.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgIBCCloseChannel;
                fromJSON(object: any): _45.MsgIBCCloseChannel;
                toJSON(message: _45.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_45.MsgIBCCloseChannel>): _45.MsgIBCCloseChannel;
                fromAmino(object: _45.MsgIBCCloseChannelAmino): _45.MsgIBCCloseChannel;
                toAmino(message: _45.MsgIBCCloseChannel): _45.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _45.MsgIBCCloseChannelAminoMsg): _45.MsgIBCCloseChannel;
                toAminoMsg(message: _45.MsgIBCCloseChannel): _45.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _45.MsgIBCCloseChannelProtoMsg): _45.MsgIBCCloseChannel;
                toProto(message: _45.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _45.MsgIBCCloseChannel): _45.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GenesisState;
                fromJSON(object: any): _44.GenesisState;
                toJSON(message: _44.GenesisState): unknown;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                toAminoMsg(message: _44.GenesisState): _44.GenesisStateAminoMsg;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                encode(message: _44.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GenesisState_GenMsgs;
                fromJSON(object: any): _44.GenesisState_GenMsgs;
                toJSON(message: _44.GenesisState_GenMsgs): unknown;
                fromPartial(object: Partial<_44.GenesisState_GenMsgs>): _44.GenesisState_GenMsgs;
                fromAmino(object: _44.GenesisState_GenMsgsAmino): _44.GenesisState_GenMsgs;
                toAmino(message: _44.GenesisState_GenMsgs): _44.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _44.GenesisState_GenMsgsAminoMsg): _44.GenesisState_GenMsgs;
                toAminoMsg(message: _44.GenesisState_GenMsgs): _44.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _44.GenesisState_GenMsgsProtoMsg): _44.GenesisState_GenMsgs;
                toProto(message: _44.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _44.GenesisState_GenMsgs): _44.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _44.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Code;
                fromJSON(object: any): _44.Code;
                toJSON(message: _44.Code): unknown;
                fromPartial(object: Partial<_44.Code>): _44.Code;
                fromAmino(object: _44.CodeAmino): _44.Code;
                toAmino(message: _44.Code): _44.CodeAmino;
                fromAminoMsg(object: _44.CodeAminoMsg): _44.Code;
                toAminoMsg(message: _44.Code): _44.CodeAminoMsg;
                fromProtoMsg(message: _44.CodeProtoMsg): _44.Code;
                toProto(message: _44.Code): Uint8Array;
                toProtoMsg(message: _44.Code): _44.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _44.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Contract;
                fromJSON(object: any): _44.Contract;
                toJSON(message: _44.Contract): unknown;
                fromPartial(object: Partial<_44.Contract>): _44.Contract;
                fromAmino(object: _44.ContractAmino): _44.Contract;
                toAmino(message: _44.Contract): _44.ContractAmino;
                fromAminoMsg(object: _44.ContractAminoMsg): _44.Contract;
                toAminoMsg(message: _44.Contract): _44.ContractAminoMsg;
                fromProtoMsg(message: _44.ContractProtoMsg): _44.Contract;
                toProto(message: _44.Contract): Uint8Array;
                toProtoMsg(message: _44.Contract): _44.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _44.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Sequence;
                fromJSON(object: any): _44.Sequence;
                toJSON(message: _44.Sequence): unknown;
                fromPartial(object: Partial<_44.Sequence>): _44.Sequence;
                fromAmino(object: _44.SequenceAmino): _44.Sequence;
                toAmino(message: _44.Sequence): _44.SequenceAmino;
                fromAminoMsg(object: _44.SequenceAminoMsg): _44.Sequence;
                toAminoMsg(message: _44.Sequence): _44.SequenceAminoMsg;
                fromProtoMsg(message: _44.SequenceProtoMsg): _44.Sequence;
                toProto(message: _44.Sequence): Uint8Array;
                toProtoMsg(message: _44.Sequence): _44.SequenceProtoMsg;
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
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _164.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
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
                gov: {
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
                        contractInfo(request: _47.QueryContractInfoRequest): Promise<_47.QueryContractInfoResponse>;
                        contractHistory(request: _47.QueryContractHistoryRequest): Promise<_47.QueryContractHistoryResponse>;
                        contractsByCode(request: _47.QueryContractsByCodeRequest): Promise<_47.QueryContractsByCodeResponse>;
                        allContractState(request: _47.QueryAllContractStateRequest): Promise<_47.QueryAllContractStateResponse>;
                        rawContractState(request: _47.QueryRawContractStateRequest): Promise<_47.QueryRawContractStateResponse>;
                        smartContractState(request: _47.QuerySmartContractStateRequest): Promise<_47.QuerySmartContractStateResponse>;
                        code(request: _47.QueryCodeRequest): Promise<_47.QueryCodeResponse>;
                        codes(request?: _47.QueryCodesRequest): Promise<_47.QueryCodesResponse>;
                        pinnedCodes(request?: _47.QueryPinnedCodesRequest): Promise<_47.QueryPinnedCodesResponse>;
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
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
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
                    v1: _162.LCDQueryClient;
                };
            };
        }>;
    };
}
