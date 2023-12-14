import * as _56 from "./applications/transfer/v1/genesis";
import * as _57 from "./applications/transfer/v1/query";
import * as _58 from "./applications/transfer/v1/transfer";
import * as _59 from "./applications/transfer/v1/tx";
import * as _60 from "./applications/transfer/v2/packet";
import * as _61 from "./core/channel/v1/channel";
import * as _62 from "./core/channel/v1/genesis";
import * as _63 from "./core/channel/v1/query";
import * as _64 from "./core/channel/v1/tx";
import * as _65 from "./core/client/v1/client";
import * as _66 from "./core/client/v1/genesis";
import * as _67 from "./core/client/v1/query";
import * as _68 from "./core/client/v1/tx";
import * as _69 from "./core/commitment/v1/commitment";
import * as _70 from "./core/connection/v1/connection";
import * as _71 from "./core/connection/v1/genesis";
import * as _72 from "./core/connection/v1/query";
import * as _73 from "./core/connection/v1/tx";
import * as _74 from "./lightclients/localhost/v1/localhost";
import * as _75 from "./lightclients/solomachine/v1/solomachine";
import * as _76 from "./lightclients/solomachine/v2/solomachine";
import * as _77 from "./lightclients/tendermint/v1/tendermint";
import * as _173 from "./applications/transfer/v1/query.lcd";
import * as _174 from "./core/channel/v1/query.lcd";
import * as _175 from "./core/client/v1/query.lcd";
import * as _176 from "./core/connection/v1/query.lcd";
import * as _177 from "./applications/transfer/v1/query.rpc.Query";
import * as _178 from "./core/channel/v1/query.rpc.Query";
import * as _179 from "./core/client/v1/query.rpc.Query";
import * as _180 from "./core/connection/v1/query.rpc.Query";
import * as _181 from "./applications/transfer/v1/tx.rpc.msg";
import * as _182 from "./core/channel/v1/tx.rpc.msg";
import * as _183 from "./core/client/v1/tx.rpc.msg";
import * as _184 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _181.MsgClientImpl;
                QueryClientImpl: typeof _177.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _57.QueryDenomTraceRequest): Promise<_57.QueryDenomTraceResponse>;
                    denomTraces(request?: _57.QueryDenomTracesRequest): Promise<_57.QueryDenomTracesResponse>;
                    params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _173.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _59.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _59.MsgTransfer): {
                            typeUrl: string;
                            value: _59.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _59.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _59.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _59.MsgTransfer): {
                            typeUrl: string;
                            value: _59.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _59.MsgTransfer) => _59.MsgTransferAmino;
                        fromAmino: (object: _59.MsgTransferAmino) => _59.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _59.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgTransfer;
                    fromJSON(object: any): _59.MsgTransfer;
                    toJSON(message: _59.MsgTransfer): unknown;
                    fromPartial(object: Partial<_59.MsgTransfer>): _59.MsgTransfer;
                    fromAmino(object: _59.MsgTransferAmino): _59.MsgTransfer;
                    toAmino(message: _59.MsgTransfer): _59.MsgTransferAmino;
                    fromAminoMsg(object: _59.MsgTransferAminoMsg): _59.MsgTransfer;
                    toAminoMsg(message: _59.MsgTransfer): _59.MsgTransferAminoMsg;
                    fromProtoMsg(message: _59.MsgTransferProtoMsg): _59.MsgTransfer;
                    toProto(message: _59.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _59.MsgTransfer): _59.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _59.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgTransferResponse;
                    fromJSON(_: any): _59.MsgTransferResponse;
                    toJSON(_: _59.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_59.MsgTransferResponse>): _59.MsgTransferResponse;
                    fromAmino(_: _59.MsgTransferResponseAmino): _59.MsgTransferResponse;
                    toAmino(_: _59.MsgTransferResponse): _59.MsgTransferResponseAmino;
                    fromAminoMsg(object: _59.MsgTransferResponseAminoMsg): _59.MsgTransferResponse;
                    toAminoMsg(message: _59.MsgTransferResponse): _59.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _59.MsgTransferResponseProtoMsg): _59.MsgTransferResponse;
                    toProto(message: _59.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _59.MsgTransferResponse): _59.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _58.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.DenomTrace;
                    fromJSON(object: any): _58.DenomTrace;
                    toJSON(message: _58.DenomTrace): unknown;
                    fromPartial(object: Partial<_58.DenomTrace>): _58.DenomTrace;
                    fromAmino(object: _58.DenomTraceAmino): _58.DenomTrace;
                    toAmino(message: _58.DenomTrace): _58.DenomTraceAmino;
                    fromAminoMsg(object: _58.DenomTraceAminoMsg): _58.DenomTrace;
                    toAminoMsg(message: _58.DenomTrace): _58.DenomTraceAminoMsg;
                    fromProtoMsg(message: _58.DenomTraceProtoMsg): _58.DenomTrace;
                    toProto(message: _58.DenomTrace): Uint8Array;
                    toProtoMsg(message: _58.DenomTrace): _58.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _58.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Params;
                    fromJSON(object: any): _58.Params;
                    toJSON(message: _58.Params): unknown;
                    fromPartial(object: Partial<_58.Params>): _58.Params;
                    fromAmino(object: _58.ParamsAmino): _58.Params;
                    toAmino(message: _58.Params): _58.ParamsAmino;
                    fromAminoMsg(object: _58.ParamsAminoMsg): _58.Params;
                    toAminoMsg(message: _58.Params): _58.ParamsAminoMsg;
                    fromProtoMsg(message: _58.ParamsProtoMsg): _58.Params;
                    toProto(message: _58.Params): Uint8Array;
                    toProtoMsg(message: _58.Params): _58.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _57.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomTraceRequest;
                    fromJSON(object: any): _57.QueryDenomTraceRequest;
                    toJSON(message: _57.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_57.QueryDenomTraceRequest>): _57.QueryDenomTraceRequest;
                    fromAmino(object: _57.QueryDenomTraceRequestAmino): _57.QueryDenomTraceRequest;
                    toAmino(message: _57.QueryDenomTraceRequest): _57.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _57.QueryDenomTraceRequestAminoMsg): _57.QueryDenomTraceRequest;
                    toAminoMsg(message: _57.QueryDenomTraceRequest): _57.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _57.QueryDenomTraceRequestProtoMsg): _57.QueryDenomTraceRequest;
                    toProto(message: _57.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _57.QueryDenomTraceRequest): _57.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _57.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomTraceResponse;
                    fromJSON(object: any): _57.QueryDenomTraceResponse;
                    toJSON(message: _57.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_57.QueryDenomTraceResponse>): _57.QueryDenomTraceResponse;
                    fromAmino(object: _57.QueryDenomTraceResponseAmino): _57.QueryDenomTraceResponse;
                    toAmino(message: _57.QueryDenomTraceResponse): _57.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _57.QueryDenomTraceResponseAminoMsg): _57.QueryDenomTraceResponse;
                    toAminoMsg(message: _57.QueryDenomTraceResponse): _57.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _57.QueryDenomTraceResponseProtoMsg): _57.QueryDenomTraceResponse;
                    toProto(message: _57.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _57.QueryDenomTraceResponse): _57.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _57.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomTracesRequest;
                    fromJSON(object: any): _57.QueryDenomTracesRequest;
                    toJSON(message: _57.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_57.QueryDenomTracesRequest>): _57.QueryDenomTracesRequest;
                    fromAmino(object: _57.QueryDenomTracesRequestAmino): _57.QueryDenomTracesRequest;
                    toAmino(message: _57.QueryDenomTracesRequest): _57.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _57.QueryDenomTracesRequestAminoMsg): _57.QueryDenomTracesRequest;
                    toAminoMsg(message: _57.QueryDenomTracesRequest): _57.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _57.QueryDenomTracesRequestProtoMsg): _57.QueryDenomTracesRequest;
                    toProto(message: _57.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _57.QueryDenomTracesRequest): _57.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _57.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomTracesResponse;
                    fromJSON(object: any): _57.QueryDenomTracesResponse;
                    toJSON(message: _57.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_57.QueryDenomTracesResponse>): _57.QueryDenomTracesResponse;
                    fromAmino(object: _57.QueryDenomTracesResponseAmino): _57.QueryDenomTracesResponse;
                    toAmino(message: _57.QueryDenomTracesResponse): _57.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _57.QueryDenomTracesResponseAminoMsg): _57.QueryDenomTracesResponse;
                    toAminoMsg(message: _57.QueryDenomTracesResponse): _57.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _57.QueryDenomTracesResponseProtoMsg): _57.QueryDenomTracesResponse;
                    toProto(message: _57.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _57.QueryDenomTracesResponse): _57.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                    fromJSON(_: any): _57.QueryParamsRequest;
                    toJSON(_: _57.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
                    fromAmino(_: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
                    toAmino(_: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
                    fromAminoMsg(object: _57.QueryParamsRequestAminoMsg): _57.QueryParamsRequest;
                    toAminoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _57.QueryParamsRequestProtoMsg): _57.QueryParamsRequest;
                    toProto(message: _57.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                    fromJSON(object: any): _57.QueryParamsResponse;
                    toJSON(message: _57.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
                    fromAmino(object: _57.QueryParamsResponseAmino): _57.QueryParamsResponse;
                    toAmino(message: _57.QueryParamsResponse): _57.QueryParamsResponseAmino;
                    fromAminoMsg(object: _57.QueryParamsResponseAminoMsg): _57.QueryParamsResponse;
                    toAminoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _57.QueryParamsResponseProtoMsg): _57.QueryParamsResponse;
                    toProto(message: _57.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                    fromJSON(object: any): _56.GenesisState;
                    toJSON(message: _56.GenesisState): unknown;
                    fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
                    fromAmino(object: _56.GenesisStateAmino): _56.GenesisState;
                    toAmino(message: _56.GenesisState): _56.GenesisStateAmino;
                    fromAminoMsg(object: _56.GenesisStateAminoMsg): _56.GenesisState;
                    toAminoMsg(message: _56.GenesisState): _56.GenesisStateAminoMsg;
                    fromProtoMsg(message: _56.GenesisStateProtoMsg): _56.GenesisState;
                    toProto(message: _56.GenesisState): Uint8Array;
                    toProtoMsg(message: _56.GenesisState): _56.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _60.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.FungibleTokenPacketData;
                    fromJSON(object: any): _60.FungibleTokenPacketData;
                    toJSON(message: _60.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_60.FungibleTokenPacketData>): _60.FungibleTokenPacketData;
                    fromAmino(object: _60.FungibleTokenPacketDataAmino): _60.FungibleTokenPacketData;
                    toAmino(message: _60.FungibleTokenPacketData): _60.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _60.FungibleTokenPacketDataAminoMsg): _60.FungibleTokenPacketData;
                    toAminoMsg(message: _60.FungibleTokenPacketData): _60.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _60.FungibleTokenPacketDataProtoMsg): _60.FungibleTokenPacketData;
                    toProto(message: _60.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _60.FungibleTokenPacketData): _60.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _182.MsgClientImpl;
                QueryClientImpl: typeof _178.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _63.QueryChannelRequest): Promise<_63.QueryChannelResponse>;
                    channels(request?: _63.QueryChannelsRequest): Promise<_63.QueryChannelsResponse>;
                    connectionChannels(request: _63.QueryConnectionChannelsRequest): Promise<_63.QueryConnectionChannelsResponse>;
                    channelClientState(request: _63.QueryChannelClientStateRequest): Promise<_63.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _63.QueryChannelConsensusStateRequest): Promise<_63.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _63.QueryPacketCommitmentRequest): Promise<_63.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _63.QueryPacketCommitmentsRequest): Promise<_63.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _63.QueryPacketReceiptRequest): Promise<_63.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _63.QueryPacketAcknowledgementRequest): Promise<_63.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _63.QueryPacketAcknowledgementsRequest): Promise<_63.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _63.QueryUnreceivedPacketsRequest): Promise<_63.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _63.QueryUnreceivedAcksRequest): Promise<_63.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _63.QueryNextSequenceReceiveRequest): Promise<_63.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _174.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _64.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _64.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _64.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _64.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _64.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _64.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _64.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _64.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _64.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _64.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _64.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _64.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _64.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _64.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _64.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _64.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _64.MsgRecvPacket): {
                            typeUrl: string;
                            value: _64.MsgRecvPacket;
                        };
                        timeout(value: _64.MsgTimeout): {
                            typeUrl: string;
                            value: _64.MsgTimeout;
                        };
                        timeoutOnClose(value: _64.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _64.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _64.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _64.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _64.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _64.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _64.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _64.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _64.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _64.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _64.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _64.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _64.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _64.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _64.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _64.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _64.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _64.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _64.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _64.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _64.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _64.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _64.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _64.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _64.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _64.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _64.MsgRecvPacket): {
                            typeUrl: string;
                            value: _64.MsgRecvPacket;
                        };
                        timeout(value: _64.MsgTimeout): {
                            typeUrl: string;
                            value: _64.MsgTimeout;
                        };
                        timeoutOnClose(value: _64.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _64.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _64.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _64.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _64.MsgChannelOpenInit) => _64.MsgChannelOpenInitAmino;
                        fromAmino: (object: _64.MsgChannelOpenInitAmino) => _64.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _64.MsgChannelOpenTry) => _64.MsgChannelOpenTryAmino;
                        fromAmino: (object: _64.MsgChannelOpenTryAmino) => _64.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _64.MsgChannelOpenAck) => _64.MsgChannelOpenAckAmino;
                        fromAmino: (object: _64.MsgChannelOpenAckAmino) => _64.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _64.MsgChannelOpenConfirm) => _64.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _64.MsgChannelOpenConfirmAmino) => _64.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _64.MsgChannelCloseInit) => _64.MsgChannelCloseInitAmino;
                        fromAmino: (object: _64.MsgChannelCloseInitAmino) => _64.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _64.MsgChannelCloseConfirm) => _64.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _64.MsgChannelCloseConfirmAmino) => _64.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _64.MsgRecvPacket) => _64.MsgRecvPacketAmino;
                        fromAmino: (object: _64.MsgRecvPacketAmino) => _64.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _64.MsgTimeout) => _64.MsgTimeoutAmino;
                        fromAmino: (object: _64.MsgTimeoutAmino) => _64.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _64.MsgTimeoutOnClose) => _64.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _64.MsgTimeoutOnCloseAmino) => _64.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _64.MsgAcknowledgement) => _64.MsgAcknowledgementAmino;
                        fromAmino: (object: _64.MsgAcknowledgementAmino) => _64.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _64.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenInit;
                    fromJSON(object: any): _64.MsgChannelOpenInit;
                    toJSON(message: _64.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_64.MsgChannelOpenInit>): _64.MsgChannelOpenInit;
                    fromAmino(object: _64.MsgChannelOpenInitAmino): _64.MsgChannelOpenInit;
                    toAmino(message: _64.MsgChannelOpenInit): _64.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _64.MsgChannelOpenInitAminoMsg): _64.MsgChannelOpenInit;
                    toAminoMsg(message: _64.MsgChannelOpenInit): _64.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelOpenInitProtoMsg): _64.MsgChannelOpenInit;
                    toProto(message: _64.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelOpenInit): _64.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _64.MsgChannelOpenInitResponse;
                    toJSON(_: _64.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_64.MsgChannelOpenInitResponse>): _64.MsgChannelOpenInitResponse;
                    fromAmino(_: _64.MsgChannelOpenInitResponseAmino): _64.MsgChannelOpenInitResponse;
                    toAmino(_: _64.MsgChannelOpenInitResponse): _64.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _64.MsgChannelOpenInitResponseAminoMsg): _64.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _64.MsgChannelOpenInitResponse): _64.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelOpenInitResponseProtoMsg): _64.MsgChannelOpenInitResponse;
                    toProto(message: _64.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelOpenInitResponse): _64.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _64.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenTry;
                    fromJSON(object: any): _64.MsgChannelOpenTry;
                    toJSON(message: _64.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_64.MsgChannelOpenTry>): _64.MsgChannelOpenTry;
                    fromAmino(object: _64.MsgChannelOpenTryAmino): _64.MsgChannelOpenTry;
                    toAmino(message: _64.MsgChannelOpenTry): _64.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _64.MsgChannelOpenTryAminoMsg): _64.MsgChannelOpenTry;
                    toAminoMsg(message: _64.MsgChannelOpenTry): _64.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelOpenTryProtoMsg): _64.MsgChannelOpenTry;
                    toProto(message: _64.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelOpenTry): _64.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _64.MsgChannelOpenTryResponse;
                    toJSON(_: _64.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_64.MsgChannelOpenTryResponse>): _64.MsgChannelOpenTryResponse;
                    fromAmino(_: _64.MsgChannelOpenTryResponseAmino): _64.MsgChannelOpenTryResponse;
                    toAmino(_: _64.MsgChannelOpenTryResponse): _64.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _64.MsgChannelOpenTryResponseAminoMsg): _64.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _64.MsgChannelOpenTryResponse): _64.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelOpenTryResponseProtoMsg): _64.MsgChannelOpenTryResponse;
                    toProto(message: _64.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelOpenTryResponse): _64.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _64.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenAck;
                    fromJSON(object: any): _64.MsgChannelOpenAck;
                    toJSON(message: _64.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_64.MsgChannelOpenAck>): _64.MsgChannelOpenAck;
                    fromAmino(object: _64.MsgChannelOpenAckAmino): _64.MsgChannelOpenAck;
                    toAmino(message: _64.MsgChannelOpenAck): _64.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _64.MsgChannelOpenAckAminoMsg): _64.MsgChannelOpenAck;
                    toAminoMsg(message: _64.MsgChannelOpenAck): _64.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelOpenAckProtoMsg): _64.MsgChannelOpenAck;
                    toProto(message: _64.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelOpenAck): _64.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _64.MsgChannelOpenAckResponse;
                    toJSON(_: _64.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_64.MsgChannelOpenAckResponse>): _64.MsgChannelOpenAckResponse;
                    fromAmino(_: _64.MsgChannelOpenAckResponseAmino): _64.MsgChannelOpenAckResponse;
                    toAmino(_: _64.MsgChannelOpenAckResponse): _64.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _64.MsgChannelOpenAckResponseAminoMsg): _64.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _64.MsgChannelOpenAckResponse): _64.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelOpenAckResponseProtoMsg): _64.MsgChannelOpenAckResponse;
                    toProto(message: _64.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelOpenAckResponse): _64.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _64.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenConfirm;
                    fromJSON(object: any): _64.MsgChannelOpenConfirm;
                    toJSON(message: _64.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_64.MsgChannelOpenConfirm>): _64.MsgChannelOpenConfirm;
                    fromAmino(object: _64.MsgChannelOpenConfirmAmino): _64.MsgChannelOpenConfirm;
                    toAmino(message: _64.MsgChannelOpenConfirm): _64.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _64.MsgChannelOpenConfirmAminoMsg): _64.MsgChannelOpenConfirm;
                    toAminoMsg(message: _64.MsgChannelOpenConfirm): _64.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelOpenConfirmProtoMsg): _64.MsgChannelOpenConfirm;
                    toProto(message: _64.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelOpenConfirm): _64.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _64.MsgChannelOpenConfirmResponse;
                    toJSON(_: _64.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_64.MsgChannelOpenConfirmResponse>): _64.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _64.MsgChannelOpenConfirmResponseAmino): _64.MsgChannelOpenConfirmResponse;
                    toAmino(_: _64.MsgChannelOpenConfirmResponse): _64.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _64.MsgChannelOpenConfirmResponseAminoMsg): _64.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _64.MsgChannelOpenConfirmResponse): _64.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelOpenConfirmResponseProtoMsg): _64.MsgChannelOpenConfirmResponse;
                    toProto(message: _64.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelOpenConfirmResponse): _64.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _64.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelCloseInit;
                    fromJSON(object: any): _64.MsgChannelCloseInit;
                    toJSON(message: _64.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_64.MsgChannelCloseInit>): _64.MsgChannelCloseInit;
                    fromAmino(object: _64.MsgChannelCloseInitAmino): _64.MsgChannelCloseInit;
                    toAmino(message: _64.MsgChannelCloseInit): _64.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _64.MsgChannelCloseInitAminoMsg): _64.MsgChannelCloseInit;
                    toAminoMsg(message: _64.MsgChannelCloseInit): _64.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelCloseInitProtoMsg): _64.MsgChannelCloseInit;
                    toProto(message: _64.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelCloseInit): _64.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _64.MsgChannelCloseInitResponse;
                    toJSON(_: _64.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_64.MsgChannelCloseInitResponse>): _64.MsgChannelCloseInitResponse;
                    fromAmino(_: _64.MsgChannelCloseInitResponseAmino): _64.MsgChannelCloseInitResponse;
                    toAmino(_: _64.MsgChannelCloseInitResponse): _64.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _64.MsgChannelCloseInitResponseAminoMsg): _64.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _64.MsgChannelCloseInitResponse): _64.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelCloseInitResponseProtoMsg): _64.MsgChannelCloseInitResponse;
                    toProto(message: _64.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelCloseInitResponse): _64.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _64.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelCloseConfirm;
                    fromJSON(object: any): _64.MsgChannelCloseConfirm;
                    toJSON(message: _64.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_64.MsgChannelCloseConfirm>): _64.MsgChannelCloseConfirm;
                    fromAmino(object: _64.MsgChannelCloseConfirmAmino): _64.MsgChannelCloseConfirm;
                    toAmino(message: _64.MsgChannelCloseConfirm): _64.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _64.MsgChannelCloseConfirmAminoMsg): _64.MsgChannelCloseConfirm;
                    toAminoMsg(message: _64.MsgChannelCloseConfirm): _64.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelCloseConfirmProtoMsg): _64.MsgChannelCloseConfirm;
                    toProto(message: _64.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelCloseConfirm): _64.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _64.MsgChannelCloseConfirmResponse;
                    toJSON(_: _64.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_64.MsgChannelCloseConfirmResponse>): _64.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _64.MsgChannelCloseConfirmResponseAmino): _64.MsgChannelCloseConfirmResponse;
                    toAmino(_: _64.MsgChannelCloseConfirmResponse): _64.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _64.MsgChannelCloseConfirmResponseAminoMsg): _64.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _64.MsgChannelCloseConfirmResponse): _64.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgChannelCloseConfirmResponseProtoMsg): _64.MsgChannelCloseConfirmResponse;
                    toProto(message: _64.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgChannelCloseConfirmResponse): _64.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _64.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRecvPacket;
                    fromJSON(object: any): _64.MsgRecvPacket;
                    toJSON(message: _64.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_64.MsgRecvPacket>): _64.MsgRecvPacket;
                    fromAmino(object: _64.MsgRecvPacketAmino): _64.MsgRecvPacket;
                    toAmino(message: _64.MsgRecvPacket): _64.MsgRecvPacketAmino;
                    fromAminoMsg(object: _64.MsgRecvPacketAminoMsg): _64.MsgRecvPacket;
                    toAminoMsg(message: _64.MsgRecvPacket): _64.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _64.MsgRecvPacketProtoMsg): _64.MsgRecvPacket;
                    toProto(message: _64.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _64.MsgRecvPacket): _64.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRecvPacketResponse;
                    fromJSON(_: any): _64.MsgRecvPacketResponse;
                    toJSON(_: _64.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_64.MsgRecvPacketResponse>): _64.MsgRecvPacketResponse;
                    fromAmino(_: _64.MsgRecvPacketResponseAmino): _64.MsgRecvPacketResponse;
                    toAmino(_: _64.MsgRecvPacketResponse): _64.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _64.MsgRecvPacketResponseAminoMsg): _64.MsgRecvPacketResponse;
                    toAminoMsg(message: _64.MsgRecvPacketResponse): _64.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgRecvPacketResponseProtoMsg): _64.MsgRecvPacketResponse;
                    toProto(message: _64.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgRecvPacketResponse): _64.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _64.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgTimeout;
                    fromJSON(object: any): _64.MsgTimeout;
                    toJSON(message: _64.MsgTimeout): unknown;
                    fromPartial(object: Partial<_64.MsgTimeout>): _64.MsgTimeout;
                    fromAmino(object: _64.MsgTimeoutAmino): _64.MsgTimeout;
                    toAmino(message: _64.MsgTimeout): _64.MsgTimeoutAmino;
                    fromAminoMsg(object: _64.MsgTimeoutAminoMsg): _64.MsgTimeout;
                    toAminoMsg(message: _64.MsgTimeout): _64.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _64.MsgTimeoutProtoMsg): _64.MsgTimeout;
                    toProto(message: _64.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _64.MsgTimeout): _64.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgTimeoutResponse;
                    fromJSON(_: any): _64.MsgTimeoutResponse;
                    toJSON(_: _64.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_64.MsgTimeoutResponse>): _64.MsgTimeoutResponse;
                    fromAmino(_: _64.MsgTimeoutResponseAmino): _64.MsgTimeoutResponse;
                    toAmino(_: _64.MsgTimeoutResponse): _64.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _64.MsgTimeoutResponseAminoMsg): _64.MsgTimeoutResponse;
                    toAminoMsg(message: _64.MsgTimeoutResponse): _64.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgTimeoutResponseProtoMsg): _64.MsgTimeoutResponse;
                    toProto(message: _64.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgTimeoutResponse): _64.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _64.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgTimeoutOnClose;
                    fromJSON(object: any): _64.MsgTimeoutOnClose;
                    toJSON(message: _64.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_64.MsgTimeoutOnClose>): _64.MsgTimeoutOnClose;
                    fromAmino(object: _64.MsgTimeoutOnCloseAmino): _64.MsgTimeoutOnClose;
                    toAmino(message: _64.MsgTimeoutOnClose): _64.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _64.MsgTimeoutOnCloseAminoMsg): _64.MsgTimeoutOnClose;
                    toAminoMsg(message: _64.MsgTimeoutOnClose): _64.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _64.MsgTimeoutOnCloseProtoMsg): _64.MsgTimeoutOnClose;
                    toProto(message: _64.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _64.MsgTimeoutOnClose): _64.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _64.MsgTimeoutOnCloseResponse;
                    toJSON(_: _64.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_64.MsgTimeoutOnCloseResponse>): _64.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _64.MsgTimeoutOnCloseResponseAmino): _64.MsgTimeoutOnCloseResponse;
                    toAmino(_: _64.MsgTimeoutOnCloseResponse): _64.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _64.MsgTimeoutOnCloseResponseAminoMsg): _64.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _64.MsgTimeoutOnCloseResponse): _64.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgTimeoutOnCloseResponseProtoMsg): _64.MsgTimeoutOnCloseResponse;
                    toProto(message: _64.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgTimeoutOnCloseResponse): _64.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _64.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgAcknowledgement;
                    fromJSON(object: any): _64.MsgAcknowledgement;
                    toJSON(message: _64.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_64.MsgAcknowledgement>): _64.MsgAcknowledgement;
                    fromAmino(object: _64.MsgAcknowledgementAmino): _64.MsgAcknowledgement;
                    toAmino(message: _64.MsgAcknowledgement): _64.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _64.MsgAcknowledgementAminoMsg): _64.MsgAcknowledgement;
                    toAminoMsg(message: _64.MsgAcknowledgement): _64.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _64.MsgAcknowledgementProtoMsg): _64.MsgAcknowledgement;
                    toProto(message: _64.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _64.MsgAcknowledgement): _64.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgAcknowledgementResponse;
                    fromJSON(_: any): _64.MsgAcknowledgementResponse;
                    toJSON(_: _64.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_64.MsgAcknowledgementResponse>): _64.MsgAcknowledgementResponse;
                    fromAmino(_: _64.MsgAcknowledgementResponseAmino): _64.MsgAcknowledgementResponse;
                    toAmino(_: _64.MsgAcknowledgementResponse): _64.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _64.MsgAcknowledgementResponseAminoMsg): _64.MsgAcknowledgementResponse;
                    toAminoMsg(message: _64.MsgAcknowledgementResponse): _64.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgAcknowledgementResponseProtoMsg): _64.MsgAcknowledgementResponse;
                    toProto(message: _64.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgAcknowledgementResponse): _64.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelRequest;
                    fromJSON(object: any): _63.QueryChannelRequest;
                    toJSON(message: _63.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_63.QueryChannelRequest>): _63.QueryChannelRequest;
                    fromAmino(object: _63.QueryChannelRequestAmino): _63.QueryChannelRequest;
                    toAmino(message: _63.QueryChannelRequest): _63.QueryChannelRequestAmino;
                    fromAminoMsg(object: _63.QueryChannelRequestAminoMsg): _63.QueryChannelRequest;
                    toAminoMsg(message: _63.QueryChannelRequest): _63.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryChannelRequestProtoMsg): _63.QueryChannelRequest;
                    toProto(message: _63.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryChannelRequest): _63.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelResponse;
                    fromJSON(object: any): _63.QueryChannelResponse;
                    toJSON(message: _63.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_63.QueryChannelResponse>): _63.QueryChannelResponse;
                    fromAmino(object: _63.QueryChannelResponseAmino): _63.QueryChannelResponse;
                    toAmino(message: _63.QueryChannelResponse): _63.QueryChannelResponseAmino;
                    fromAminoMsg(object: _63.QueryChannelResponseAminoMsg): _63.QueryChannelResponse;
                    toAminoMsg(message: _63.QueryChannelResponse): _63.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryChannelResponseProtoMsg): _63.QueryChannelResponse;
                    toProto(message: _63.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryChannelResponse): _63.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelsRequest;
                    fromJSON(object: any): _63.QueryChannelsRequest;
                    toJSON(message: _63.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_63.QueryChannelsRequest>): _63.QueryChannelsRequest;
                    fromAmino(object: _63.QueryChannelsRequestAmino): _63.QueryChannelsRequest;
                    toAmino(message: _63.QueryChannelsRequest): _63.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _63.QueryChannelsRequestAminoMsg): _63.QueryChannelsRequest;
                    toAminoMsg(message: _63.QueryChannelsRequest): _63.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryChannelsRequestProtoMsg): _63.QueryChannelsRequest;
                    toProto(message: _63.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryChannelsRequest): _63.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelsResponse;
                    fromJSON(object: any): _63.QueryChannelsResponse;
                    toJSON(message: _63.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_63.QueryChannelsResponse>): _63.QueryChannelsResponse;
                    fromAmino(object: _63.QueryChannelsResponseAmino): _63.QueryChannelsResponse;
                    toAmino(message: _63.QueryChannelsResponse): _63.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _63.QueryChannelsResponseAminoMsg): _63.QueryChannelsResponse;
                    toAminoMsg(message: _63.QueryChannelsResponse): _63.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryChannelsResponseProtoMsg): _63.QueryChannelsResponse;
                    toProto(message: _63.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryChannelsResponse): _63.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _63.QueryConnectionChannelsRequest;
                    toJSON(message: _63.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_63.QueryConnectionChannelsRequest>): _63.QueryConnectionChannelsRequest;
                    fromAmino(object: _63.QueryConnectionChannelsRequestAmino): _63.QueryConnectionChannelsRequest;
                    toAmino(message: _63.QueryConnectionChannelsRequest): _63.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _63.QueryConnectionChannelsRequestAminoMsg): _63.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _63.QueryConnectionChannelsRequest): _63.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryConnectionChannelsRequestProtoMsg): _63.QueryConnectionChannelsRequest;
                    toProto(message: _63.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryConnectionChannelsRequest): _63.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _63.QueryConnectionChannelsResponse;
                    toJSON(message: _63.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_63.QueryConnectionChannelsResponse>): _63.QueryConnectionChannelsResponse;
                    fromAmino(object: _63.QueryConnectionChannelsResponseAmino): _63.QueryConnectionChannelsResponse;
                    toAmino(message: _63.QueryConnectionChannelsResponse): _63.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _63.QueryConnectionChannelsResponseAminoMsg): _63.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _63.QueryConnectionChannelsResponse): _63.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryConnectionChannelsResponseProtoMsg): _63.QueryConnectionChannelsResponse;
                    toProto(message: _63.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryConnectionChannelsResponse): _63.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelClientStateRequest;
                    fromJSON(object: any): _63.QueryChannelClientStateRequest;
                    toJSON(message: _63.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_63.QueryChannelClientStateRequest>): _63.QueryChannelClientStateRequest;
                    fromAmino(object: _63.QueryChannelClientStateRequestAmino): _63.QueryChannelClientStateRequest;
                    toAmino(message: _63.QueryChannelClientStateRequest): _63.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _63.QueryChannelClientStateRequestAminoMsg): _63.QueryChannelClientStateRequest;
                    toAminoMsg(message: _63.QueryChannelClientStateRequest): _63.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryChannelClientStateRequestProtoMsg): _63.QueryChannelClientStateRequest;
                    toProto(message: _63.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryChannelClientStateRequest): _63.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelClientStateResponse;
                    fromJSON(object: any): _63.QueryChannelClientStateResponse;
                    toJSON(message: _63.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_63.QueryChannelClientStateResponse>): _63.QueryChannelClientStateResponse;
                    fromAmino(object: _63.QueryChannelClientStateResponseAmino): _63.QueryChannelClientStateResponse;
                    toAmino(message: _63.QueryChannelClientStateResponse): _63.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _63.QueryChannelClientStateResponseAminoMsg): _63.QueryChannelClientStateResponse;
                    toAminoMsg(message: _63.QueryChannelClientStateResponse): _63.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryChannelClientStateResponseProtoMsg): _63.QueryChannelClientStateResponse;
                    toProto(message: _63.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryChannelClientStateResponse): _63.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _63.QueryChannelConsensusStateRequest;
                    toJSON(message: _63.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_63.QueryChannelConsensusStateRequest>): _63.QueryChannelConsensusStateRequest;
                    fromAmino(object: _63.QueryChannelConsensusStateRequestAmino): _63.QueryChannelConsensusStateRequest;
                    toAmino(message: _63.QueryChannelConsensusStateRequest): _63.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _63.QueryChannelConsensusStateRequestAminoMsg): _63.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _63.QueryChannelConsensusStateRequest): _63.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryChannelConsensusStateRequestProtoMsg): _63.QueryChannelConsensusStateRequest;
                    toProto(message: _63.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryChannelConsensusStateRequest): _63.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _63.QueryChannelConsensusStateResponse;
                    toJSON(message: _63.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_63.QueryChannelConsensusStateResponse>): _63.QueryChannelConsensusStateResponse;
                    fromAmino(object: _63.QueryChannelConsensusStateResponseAmino): _63.QueryChannelConsensusStateResponse;
                    toAmino(message: _63.QueryChannelConsensusStateResponse): _63.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _63.QueryChannelConsensusStateResponseAminoMsg): _63.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _63.QueryChannelConsensusStateResponse): _63.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryChannelConsensusStateResponseProtoMsg): _63.QueryChannelConsensusStateResponse;
                    toProto(message: _63.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryChannelConsensusStateResponse): _63.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _63.QueryPacketCommitmentRequest;
                    toJSON(message: _63.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_63.QueryPacketCommitmentRequest>): _63.QueryPacketCommitmentRequest;
                    fromAmino(object: _63.QueryPacketCommitmentRequestAmino): _63.QueryPacketCommitmentRequest;
                    toAmino(message: _63.QueryPacketCommitmentRequest): _63.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _63.QueryPacketCommitmentRequestAminoMsg): _63.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _63.QueryPacketCommitmentRequest): _63.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketCommitmentRequestProtoMsg): _63.QueryPacketCommitmentRequest;
                    toProto(message: _63.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketCommitmentRequest): _63.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _63.QueryPacketCommitmentResponse;
                    toJSON(message: _63.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_63.QueryPacketCommitmentResponse>): _63.QueryPacketCommitmentResponse;
                    fromAmino(object: _63.QueryPacketCommitmentResponseAmino): _63.QueryPacketCommitmentResponse;
                    toAmino(message: _63.QueryPacketCommitmentResponse): _63.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _63.QueryPacketCommitmentResponseAminoMsg): _63.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _63.QueryPacketCommitmentResponse): _63.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketCommitmentResponseProtoMsg): _63.QueryPacketCommitmentResponse;
                    toProto(message: _63.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketCommitmentResponse): _63.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _63.QueryPacketCommitmentsRequest;
                    toJSON(message: _63.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_63.QueryPacketCommitmentsRequest>): _63.QueryPacketCommitmentsRequest;
                    fromAmino(object: _63.QueryPacketCommitmentsRequestAmino): _63.QueryPacketCommitmentsRequest;
                    toAmino(message: _63.QueryPacketCommitmentsRequest): _63.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _63.QueryPacketCommitmentsRequestAminoMsg): _63.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _63.QueryPacketCommitmentsRequest): _63.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketCommitmentsRequestProtoMsg): _63.QueryPacketCommitmentsRequest;
                    toProto(message: _63.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketCommitmentsRequest): _63.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _63.QueryPacketCommitmentsResponse;
                    toJSON(message: _63.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_63.QueryPacketCommitmentsResponse>): _63.QueryPacketCommitmentsResponse;
                    fromAmino(object: _63.QueryPacketCommitmentsResponseAmino): _63.QueryPacketCommitmentsResponse;
                    toAmino(message: _63.QueryPacketCommitmentsResponse): _63.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _63.QueryPacketCommitmentsResponseAminoMsg): _63.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _63.QueryPacketCommitmentsResponse): _63.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketCommitmentsResponseProtoMsg): _63.QueryPacketCommitmentsResponse;
                    toProto(message: _63.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketCommitmentsResponse): _63.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketReceiptRequest;
                    fromJSON(object: any): _63.QueryPacketReceiptRequest;
                    toJSON(message: _63.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_63.QueryPacketReceiptRequest>): _63.QueryPacketReceiptRequest;
                    fromAmino(object: _63.QueryPacketReceiptRequestAmino): _63.QueryPacketReceiptRequest;
                    toAmino(message: _63.QueryPacketReceiptRequest): _63.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _63.QueryPacketReceiptRequestAminoMsg): _63.QueryPacketReceiptRequest;
                    toAminoMsg(message: _63.QueryPacketReceiptRequest): _63.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketReceiptRequestProtoMsg): _63.QueryPacketReceiptRequest;
                    toProto(message: _63.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketReceiptRequest): _63.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketReceiptResponse;
                    fromJSON(object: any): _63.QueryPacketReceiptResponse;
                    toJSON(message: _63.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_63.QueryPacketReceiptResponse>): _63.QueryPacketReceiptResponse;
                    fromAmino(object: _63.QueryPacketReceiptResponseAmino): _63.QueryPacketReceiptResponse;
                    toAmino(message: _63.QueryPacketReceiptResponse): _63.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _63.QueryPacketReceiptResponseAminoMsg): _63.QueryPacketReceiptResponse;
                    toAminoMsg(message: _63.QueryPacketReceiptResponse): _63.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketReceiptResponseProtoMsg): _63.QueryPacketReceiptResponse;
                    toProto(message: _63.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketReceiptResponse): _63.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _63.QueryPacketAcknowledgementRequest;
                    toJSON(message: _63.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_63.QueryPacketAcknowledgementRequest>): _63.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _63.QueryPacketAcknowledgementRequestAmino): _63.QueryPacketAcknowledgementRequest;
                    toAmino(message: _63.QueryPacketAcknowledgementRequest): _63.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _63.QueryPacketAcknowledgementRequestAminoMsg): _63.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _63.QueryPacketAcknowledgementRequest): _63.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketAcknowledgementRequestProtoMsg): _63.QueryPacketAcknowledgementRequest;
                    toProto(message: _63.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketAcknowledgementRequest): _63.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _63.QueryPacketAcknowledgementResponse;
                    toJSON(message: _63.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_63.QueryPacketAcknowledgementResponse>): _63.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _63.QueryPacketAcknowledgementResponseAmino): _63.QueryPacketAcknowledgementResponse;
                    toAmino(message: _63.QueryPacketAcknowledgementResponse): _63.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _63.QueryPacketAcknowledgementResponseAminoMsg): _63.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _63.QueryPacketAcknowledgementResponse): _63.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketAcknowledgementResponseProtoMsg): _63.QueryPacketAcknowledgementResponse;
                    toProto(message: _63.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketAcknowledgementResponse): _63.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _63.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _63.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_63.QueryPacketAcknowledgementsRequest>): _63.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _63.QueryPacketAcknowledgementsRequestAmino): _63.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _63.QueryPacketAcknowledgementsRequest): _63.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _63.QueryPacketAcknowledgementsRequestAminoMsg): _63.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _63.QueryPacketAcknowledgementsRequest): _63.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketAcknowledgementsRequestProtoMsg): _63.QueryPacketAcknowledgementsRequest;
                    toProto(message: _63.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketAcknowledgementsRequest): _63.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _63.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _63.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_63.QueryPacketAcknowledgementsResponse>): _63.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _63.QueryPacketAcknowledgementsResponseAmino): _63.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _63.QueryPacketAcknowledgementsResponse): _63.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _63.QueryPacketAcknowledgementsResponseAminoMsg): _63.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _63.QueryPacketAcknowledgementsResponse): _63.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryPacketAcknowledgementsResponseProtoMsg): _63.QueryPacketAcknowledgementsResponse;
                    toProto(message: _63.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryPacketAcknowledgementsResponse): _63.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _63.QueryUnreceivedPacketsRequest;
                    toJSON(message: _63.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_63.QueryUnreceivedPacketsRequest>): _63.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _63.QueryUnreceivedPacketsRequestAmino): _63.QueryUnreceivedPacketsRequest;
                    toAmino(message: _63.QueryUnreceivedPacketsRequest): _63.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _63.QueryUnreceivedPacketsRequestAminoMsg): _63.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _63.QueryUnreceivedPacketsRequest): _63.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryUnreceivedPacketsRequestProtoMsg): _63.QueryUnreceivedPacketsRequest;
                    toProto(message: _63.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryUnreceivedPacketsRequest): _63.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _63.QueryUnreceivedPacketsResponse;
                    toJSON(message: _63.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_63.QueryUnreceivedPacketsResponse>): _63.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _63.QueryUnreceivedPacketsResponseAmino): _63.QueryUnreceivedPacketsResponse;
                    toAmino(message: _63.QueryUnreceivedPacketsResponse): _63.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _63.QueryUnreceivedPacketsResponseAminoMsg): _63.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _63.QueryUnreceivedPacketsResponse): _63.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryUnreceivedPacketsResponseProtoMsg): _63.QueryUnreceivedPacketsResponse;
                    toProto(message: _63.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryUnreceivedPacketsResponse): _63.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _63.QueryUnreceivedAcksRequest;
                    toJSON(message: _63.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_63.QueryUnreceivedAcksRequest>): _63.QueryUnreceivedAcksRequest;
                    fromAmino(object: _63.QueryUnreceivedAcksRequestAmino): _63.QueryUnreceivedAcksRequest;
                    toAmino(message: _63.QueryUnreceivedAcksRequest): _63.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _63.QueryUnreceivedAcksRequestAminoMsg): _63.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _63.QueryUnreceivedAcksRequest): _63.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryUnreceivedAcksRequestProtoMsg): _63.QueryUnreceivedAcksRequest;
                    toProto(message: _63.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryUnreceivedAcksRequest): _63.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _63.QueryUnreceivedAcksResponse;
                    toJSON(message: _63.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_63.QueryUnreceivedAcksResponse>): _63.QueryUnreceivedAcksResponse;
                    fromAmino(object: _63.QueryUnreceivedAcksResponseAmino): _63.QueryUnreceivedAcksResponse;
                    toAmino(message: _63.QueryUnreceivedAcksResponse): _63.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _63.QueryUnreceivedAcksResponseAminoMsg): _63.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _63.QueryUnreceivedAcksResponse): _63.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryUnreceivedAcksResponseProtoMsg): _63.QueryUnreceivedAcksResponse;
                    toProto(message: _63.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryUnreceivedAcksResponse): _63.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _63.QueryNextSequenceReceiveRequest;
                    toJSON(message: _63.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_63.QueryNextSequenceReceiveRequest>): _63.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _63.QueryNextSequenceReceiveRequestAmino): _63.QueryNextSequenceReceiveRequest;
                    toAmino(message: _63.QueryNextSequenceReceiveRequest): _63.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _63.QueryNextSequenceReceiveRequestAminoMsg): _63.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _63.QueryNextSequenceReceiveRequest): _63.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryNextSequenceReceiveRequestProtoMsg): _63.QueryNextSequenceReceiveRequest;
                    toProto(message: _63.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryNextSequenceReceiveRequest): _63.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _63.QueryNextSequenceReceiveResponse;
                    toJSON(message: _63.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_63.QueryNextSequenceReceiveResponse>): _63.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _63.QueryNextSequenceReceiveResponseAmino): _63.QueryNextSequenceReceiveResponse;
                    toAmino(message: _63.QueryNextSequenceReceiveResponse): _63.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _63.QueryNextSequenceReceiveResponseAminoMsg): _63.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _63.QueryNextSequenceReceiveResponse): _63.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryNextSequenceReceiveResponseProtoMsg): _63.QueryNextSequenceReceiveResponse;
                    toProto(message: _63.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryNextSequenceReceiveResponse): _63.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                    fromJSON(object: any): _62.GenesisState;
                    toJSON(message: _62.GenesisState): unknown;
                    fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
                    fromAmino(object: _62.GenesisStateAmino): _62.GenesisState;
                    toAmino(message: _62.GenesisState): _62.GenesisStateAmino;
                    fromAminoMsg(object: _62.GenesisStateAminoMsg): _62.GenesisState;
                    toAminoMsg(message: _62.GenesisState): _62.GenesisStateAminoMsg;
                    fromProtoMsg(message: _62.GenesisStateProtoMsg): _62.GenesisState;
                    toProto(message: _62.GenesisState): Uint8Array;
                    toProtoMsg(message: _62.GenesisState): _62.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _62.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.PacketSequence;
                    fromJSON(object: any): _62.PacketSequence;
                    toJSON(message: _62.PacketSequence): unknown;
                    fromPartial(object: Partial<_62.PacketSequence>): _62.PacketSequence;
                    fromAmino(object: _62.PacketSequenceAmino): _62.PacketSequence;
                    toAmino(message: _62.PacketSequence): _62.PacketSequenceAmino;
                    fromAminoMsg(object: _62.PacketSequenceAminoMsg): _62.PacketSequence;
                    toAminoMsg(message: _62.PacketSequence): _62.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _62.PacketSequenceProtoMsg): _62.PacketSequence;
                    toProto(message: _62.PacketSequence): Uint8Array;
                    toProtoMsg(message: _62.PacketSequence): _62.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _61.State;
                stateToJSON(object: _61.State): string;
                orderFromJSON(object: any): _61.Order;
                orderToJSON(object: _61.Order): string;
                State: typeof _61.State;
                StateSDKType: typeof _61.State;
                StateAmino: typeof _61.State;
                Order: typeof _61.Order;
                OrderSDKType: typeof _61.Order;
                OrderAmino: typeof _61.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _61.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Channel;
                    fromJSON(object: any): _61.Channel;
                    toJSON(message: _61.Channel): unknown;
                    fromPartial(object: Partial<_61.Channel>): _61.Channel;
                    fromAmino(object: _61.ChannelAmino): _61.Channel;
                    toAmino(message: _61.Channel): _61.ChannelAmino;
                    fromAminoMsg(object: _61.ChannelAminoMsg): _61.Channel;
                    toAminoMsg(message: _61.Channel): _61.ChannelAminoMsg;
                    fromProtoMsg(message: _61.ChannelProtoMsg): _61.Channel;
                    toProto(message: _61.Channel): Uint8Array;
                    toProtoMsg(message: _61.Channel): _61.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _61.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.IdentifiedChannel;
                    fromJSON(object: any): _61.IdentifiedChannel;
                    toJSON(message: _61.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_61.IdentifiedChannel>): _61.IdentifiedChannel;
                    fromAmino(object: _61.IdentifiedChannelAmino): _61.IdentifiedChannel;
                    toAmino(message: _61.IdentifiedChannel): _61.IdentifiedChannelAmino;
                    fromAminoMsg(object: _61.IdentifiedChannelAminoMsg): _61.IdentifiedChannel;
                    toAminoMsg(message: _61.IdentifiedChannel): _61.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _61.IdentifiedChannelProtoMsg): _61.IdentifiedChannel;
                    toProto(message: _61.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _61.IdentifiedChannel): _61.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _61.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Counterparty;
                    fromJSON(object: any): _61.Counterparty;
                    toJSON(message: _61.Counterparty): unknown;
                    fromPartial(object: Partial<_61.Counterparty>): _61.Counterparty;
                    fromAmino(object: _61.CounterpartyAmino): _61.Counterparty;
                    toAmino(message: _61.Counterparty): _61.CounterpartyAmino;
                    fromAminoMsg(object: _61.CounterpartyAminoMsg): _61.Counterparty;
                    toAminoMsg(message: _61.Counterparty): _61.CounterpartyAminoMsg;
                    fromProtoMsg(message: _61.CounterpartyProtoMsg): _61.Counterparty;
                    toProto(message: _61.Counterparty): Uint8Array;
                    toProtoMsg(message: _61.Counterparty): _61.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _61.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Packet;
                    fromJSON(object: any): _61.Packet;
                    toJSON(message: _61.Packet): unknown;
                    fromPartial(object: Partial<_61.Packet>): _61.Packet;
                    fromAmino(object: _61.PacketAmino): _61.Packet;
                    toAmino(message: _61.Packet): _61.PacketAmino;
                    fromAminoMsg(object: _61.PacketAminoMsg): _61.Packet;
                    toAminoMsg(message: _61.Packet): _61.PacketAminoMsg;
                    fromProtoMsg(message: _61.PacketProtoMsg): _61.Packet;
                    toProto(message: _61.Packet): Uint8Array;
                    toProtoMsg(message: _61.Packet): _61.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _61.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.PacketState;
                    fromJSON(object: any): _61.PacketState;
                    toJSON(message: _61.PacketState): unknown;
                    fromPartial(object: Partial<_61.PacketState>): _61.PacketState;
                    fromAmino(object: _61.PacketStateAmino): _61.PacketState;
                    toAmino(message: _61.PacketState): _61.PacketStateAmino;
                    fromAminoMsg(object: _61.PacketStateAminoMsg): _61.PacketState;
                    toAminoMsg(message: _61.PacketState): _61.PacketStateAminoMsg;
                    fromProtoMsg(message: _61.PacketStateProtoMsg): _61.PacketState;
                    toProto(message: _61.PacketState): Uint8Array;
                    toProtoMsg(message: _61.PacketState): _61.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _61.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Acknowledgement;
                    fromJSON(object: any): _61.Acknowledgement;
                    toJSON(message: _61.Acknowledgement): unknown;
                    fromPartial(object: Partial<_61.Acknowledgement>): _61.Acknowledgement;
                    fromAmino(object: _61.AcknowledgementAmino): _61.Acknowledgement;
                    toAmino(message: _61.Acknowledgement): _61.AcknowledgementAmino;
                    fromAminoMsg(object: _61.AcknowledgementAminoMsg): _61.Acknowledgement;
                    toAminoMsg(message: _61.Acknowledgement): _61.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _61.AcknowledgementProtoMsg): _61.Acknowledgement;
                    toProto(message: _61.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _61.Acknowledgement): _61.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _183.MsgClientImpl;
                QueryClientImpl: typeof _179.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _67.QueryClientStateRequest): Promise<_67.QueryClientStateResponse>;
                    clientStates(request?: _67.QueryClientStatesRequest): Promise<_67.QueryClientStatesResponse>;
                    consensusState(request: _67.QueryConsensusStateRequest): Promise<_67.QueryConsensusStateResponse>;
                    consensusStates(request: _67.QueryConsensusStatesRequest): Promise<_67.QueryConsensusStatesResponse>;
                    clientStatus(request: _67.QueryClientStatusRequest): Promise<_67.QueryClientStatusResponse>;
                    clientParams(request?: _67.QueryClientParamsRequest): Promise<_67.QueryClientParamsResponse>;
                    upgradedClientState(request?: _67.QueryUpgradedClientStateRequest): Promise<_67.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _67.QueryUpgradedConsensusStateRequest): Promise<_67.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _175.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _68.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _68.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _68.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _68.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _68.MsgCreateClient): {
                            typeUrl: string;
                            value: _68.MsgCreateClient;
                        };
                        updateClient(value: _68.MsgUpdateClient): {
                            typeUrl: string;
                            value: _68.MsgUpdateClient;
                        };
                        upgradeClient(value: _68.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _68.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _68.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _68.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _68.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _68.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _68.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _68.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _68.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _68.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _68.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _68.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _68.MsgCreateClient): {
                            typeUrl: string;
                            value: _68.MsgCreateClient;
                        };
                        updateClient(value: _68.MsgUpdateClient): {
                            typeUrl: string;
                            value: _68.MsgUpdateClient;
                        };
                        upgradeClient(value: _68.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _68.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _68.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _68.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _68.MsgCreateClient) => _68.MsgCreateClientAmino;
                        fromAmino: (object: _68.MsgCreateClientAmino) => _68.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _68.MsgUpdateClient) => _68.MsgUpdateClientAmino;
                        fromAmino: (object: _68.MsgUpdateClientAmino) => _68.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _68.MsgUpgradeClient) => _68.MsgUpgradeClientAmino;
                        fromAmino: (object: _68.MsgUpgradeClientAmino) => _68.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _68.MsgSubmitMisbehaviour) => _68.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _68.MsgSubmitMisbehaviourAmino) => _68.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _68.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateClient;
                    fromJSON(object: any): _68.MsgCreateClient;
                    toJSON(message: _68.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_68.MsgCreateClient>): _68.MsgCreateClient;
                    fromAmino(object: _68.MsgCreateClientAmino): _68.MsgCreateClient;
                    toAmino(message: _68.MsgCreateClient): _68.MsgCreateClientAmino;
                    fromAminoMsg(object: _68.MsgCreateClientAminoMsg): _68.MsgCreateClient;
                    toAminoMsg(message: _68.MsgCreateClient): _68.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _68.MsgCreateClientProtoMsg): _68.MsgCreateClient;
                    toProto(message: _68.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _68.MsgCreateClient): _68.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _68.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateClientResponse;
                    fromJSON(_: any): _68.MsgCreateClientResponse;
                    toJSON(_: _68.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_68.MsgCreateClientResponse>): _68.MsgCreateClientResponse;
                    fromAmino(_: _68.MsgCreateClientResponseAmino): _68.MsgCreateClientResponse;
                    toAmino(_: _68.MsgCreateClientResponse): _68.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _68.MsgCreateClientResponseAminoMsg): _68.MsgCreateClientResponse;
                    toAminoMsg(message: _68.MsgCreateClientResponse): _68.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgCreateClientResponseProtoMsg): _68.MsgCreateClientResponse;
                    toProto(message: _68.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgCreateClientResponse): _68.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _68.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateClient;
                    fromJSON(object: any): _68.MsgUpdateClient;
                    toJSON(message: _68.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_68.MsgUpdateClient>): _68.MsgUpdateClient;
                    fromAmino(object: _68.MsgUpdateClientAmino): _68.MsgUpdateClient;
                    toAmino(message: _68.MsgUpdateClient): _68.MsgUpdateClientAmino;
                    fromAminoMsg(object: _68.MsgUpdateClientAminoMsg): _68.MsgUpdateClient;
                    toAminoMsg(message: _68.MsgUpdateClient): _68.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _68.MsgUpdateClientProtoMsg): _68.MsgUpdateClient;
                    toProto(message: _68.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _68.MsgUpdateClient): _68.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _68.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateClientResponse;
                    fromJSON(_: any): _68.MsgUpdateClientResponse;
                    toJSON(_: _68.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_68.MsgUpdateClientResponse>): _68.MsgUpdateClientResponse;
                    fromAmino(_: _68.MsgUpdateClientResponseAmino): _68.MsgUpdateClientResponse;
                    toAmino(_: _68.MsgUpdateClientResponse): _68.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _68.MsgUpdateClientResponseAminoMsg): _68.MsgUpdateClientResponse;
                    toAminoMsg(message: _68.MsgUpdateClientResponse): _68.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgUpdateClientResponseProtoMsg): _68.MsgUpdateClientResponse;
                    toProto(message: _68.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgUpdateClientResponse): _68.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _68.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpgradeClient;
                    fromJSON(object: any): _68.MsgUpgradeClient;
                    toJSON(message: _68.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_68.MsgUpgradeClient>): _68.MsgUpgradeClient;
                    fromAmino(object: _68.MsgUpgradeClientAmino): _68.MsgUpgradeClient;
                    toAmino(message: _68.MsgUpgradeClient): _68.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _68.MsgUpgradeClientAminoMsg): _68.MsgUpgradeClient;
                    toAminoMsg(message: _68.MsgUpgradeClient): _68.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _68.MsgUpgradeClientProtoMsg): _68.MsgUpgradeClient;
                    toProto(message: _68.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _68.MsgUpgradeClient): _68.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _68.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpgradeClientResponse;
                    fromJSON(_: any): _68.MsgUpgradeClientResponse;
                    toJSON(_: _68.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_68.MsgUpgradeClientResponse>): _68.MsgUpgradeClientResponse;
                    fromAmino(_: _68.MsgUpgradeClientResponseAmino): _68.MsgUpgradeClientResponse;
                    toAmino(_: _68.MsgUpgradeClientResponse): _68.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _68.MsgUpgradeClientResponseAminoMsg): _68.MsgUpgradeClientResponse;
                    toAminoMsg(message: _68.MsgUpgradeClientResponse): _68.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgUpgradeClientResponseProtoMsg): _68.MsgUpgradeClientResponse;
                    toProto(message: _68.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgUpgradeClientResponse): _68.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _68.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _68.MsgSubmitMisbehaviour;
                    toJSON(message: _68.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_68.MsgSubmitMisbehaviour>): _68.MsgSubmitMisbehaviour;
                    fromAmino(object: _68.MsgSubmitMisbehaviourAmino): _68.MsgSubmitMisbehaviour;
                    toAmino(message: _68.MsgSubmitMisbehaviour): _68.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _68.MsgSubmitMisbehaviourAminoMsg): _68.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _68.MsgSubmitMisbehaviour): _68.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _68.MsgSubmitMisbehaviourProtoMsg): _68.MsgSubmitMisbehaviour;
                    toProto(message: _68.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _68.MsgSubmitMisbehaviour): _68.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _68.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _68.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _68.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_68.MsgSubmitMisbehaviourResponse>): _68.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _68.MsgSubmitMisbehaviourResponseAmino): _68.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _68.MsgSubmitMisbehaviourResponse): _68.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _68.MsgSubmitMisbehaviourResponseAminoMsg): _68.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _68.MsgSubmitMisbehaviourResponse): _68.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgSubmitMisbehaviourResponseProtoMsg): _68.MsgSubmitMisbehaviourResponse;
                    toProto(message: _68.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgSubmitMisbehaviourResponse): _68.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStateRequest;
                    fromJSON(object: any): _67.QueryClientStateRequest;
                    toJSON(message: _67.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_67.QueryClientStateRequest>): _67.QueryClientStateRequest;
                    fromAmino(object: _67.QueryClientStateRequestAmino): _67.QueryClientStateRequest;
                    toAmino(message: _67.QueryClientStateRequest): _67.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _67.QueryClientStateRequestAminoMsg): _67.QueryClientStateRequest;
                    toAminoMsg(message: _67.QueryClientStateRequest): _67.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryClientStateRequestProtoMsg): _67.QueryClientStateRequest;
                    toProto(message: _67.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryClientStateRequest): _67.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStateResponse;
                    fromJSON(object: any): _67.QueryClientStateResponse;
                    toJSON(message: _67.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_67.QueryClientStateResponse>): _67.QueryClientStateResponse;
                    fromAmino(object: _67.QueryClientStateResponseAmino): _67.QueryClientStateResponse;
                    toAmino(message: _67.QueryClientStateResponse): _67.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _67.QueryClientStateResponseAminoMsg): _67.QueryClientStateResponse;
                    toAminoMsg(message: _67.QueryClientStateResponse): _67.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryClientStateResponseProtoMsg): _67.QueryClientStateResponse;
                    toProto(message: _67.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryClientStateResponse): _67.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStatesRequest;
                    fromJSON(object: any): _67.QueryClientStatesRequest;
                    toJSON(message: _67.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_67.QueryClientStatesRequest>): _67.QueryClientStatesRequest;
                    fromAmino(object: _67.QueryClientStatesRequestAmino): _67.QueryClientStatesRequest;
                    toAmino(message: _67.QueryClientStatesRequest): _67.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _67.QueryClientStatesRequestAminoMsg): _67.QueryClientStatesRequest;
                    toAminoMsg(message: _67.QueryClientStatesRequest): _67.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryClientStatesRequestProtoMsg): _67.QueryClientStatesRequest;
                    toProto(message: _67.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryClientStatesRequest): _67.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStatesResponse;
                    fromJSON(object: any): _67.QueryClientStatesResponse;
                    toJSON(message: _67.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_67.QueryClientStatesResponse>): _67.QueryClientStatesResponse;
                    fromAmino(object: _67.QueryClientStatesResponseAmino): _67.QueryClientStatesResponse;
                    toAmino(message: _67.QueryClientStatesResponse): _67.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _67.QueryClientStatesResponseAminoMsg): _67.QueryClientStatesResponse;
                    toAminoMsg(message: _67.QueryClientStatesResponse): _67.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryClientStatesResponseProtoMsg): _67.QueryClientStatesResponse;
                    toProto(message: _67.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryClientStatesResponse): _67.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConsensusStateRequest;
                    fromJSON(object: any): _67.QueryConsensusStateRequest;
                    toJSON(message: _67.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_67.QueryConsensusStateRequest>): _67.QueryConsensusStateRequest;
                    fromAmino(object: _67.QueryConsensusStateRequestAmino): _67.QueryConsensusStateRequest;
                    toAmino(message: _67.QueryConsensusStateRequest): _67.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _67.QueryConsensusStateRequestAminoMsg): _67.QueryConsensusStateRequest;
                    toAminoMsg(message: _67.QueryConsensusStateRequest): _67.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryConsensusStateRequestProtoMsg): _67.QueryConsensusStateRequest;
                    toProto(message: _67.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryConsensusStateRequest): _67.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConsensusStateResponse;
                    fromJSON(object: any): _67.QueryConsensusStateResponse;
                    toJSON(message: _67.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_67.QueryConsensusStateResponse>): _67.QueryConsensusStateResponse;
                    fromAmino(object: _67.QueryConsensusStateResponseAmino): _67.QueryConsensusStateResponse;
                    toAmino(message: _67.QueryConsensusStateResponse): _67.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _67.QueryConsensusStateResponseAminoMsg): _67.QueryConsensusStateResponse;
                    toAminoMsg(message: _67.QueryConsensusStateResponse): _67.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryConsensusStateResponseProtoMsg): _67.QueryConsensusStateResponse;
                    toProto(message: _67.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryConsensusStateResponse): _67.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConsensusStatesRequest;
                    fromJSON(object: any): _67.QueryConsensusStatesRequest;
                    toJSON(message: _67.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_67.QueryConsensusStatesRequest>): _67.QueryConsensusStatesRequest;
                    fromAmino(object: _67.QueryConsensusStatesRequestAmino): _67.QueryConsensusStatesRequest;
                    toAmino(message: _67.QueryConsensusStatesRequest): _67.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _67.QueryConsensusStatesRequestAminoMsg): _67.QueryConsensusStatesRequest;
                    toAminoMsg(message: _67.QueryConsensusStatesRequest): _67.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryConsensusStatesRequestProtoMsg): _67.QueryConsensusStatesRequest;
                    toProto(message: _67.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryConsensusStatesRequest): _67.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConsensusStatesResponse;
                    fromJSON(object: any): _67.QueryConsensusStatesResponse;
                    toJSON(message: _67.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_67.QueryConsensusStatesResponse>): _67.QueryConsensusStatesResponse;
                    fromAmino(object: _67.QueryConsensusStatesResponseAmino): _67.QueryConsensusStatesResponse;
                    toAmino(message: _67.QueryConsensusStatesResponse): _67.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _67.QueryConsensusStatesResponseAminoMsg): _67.QueryConsensusStatesResponse;
                    toAminoMsg(message: _67.QueryConsensusStatesResponse): _67.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryConsensusStatesResponseProtoMsg): _67.QueryConsensusStatesResponse;
                    toProto(message: _67.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryConsensusStatesResponse): _67.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStatusRequest;
                    fromJSON(object: any): _67.QueryClientStatusRequest;
                    toJSON(message: _67.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_67.QueryClientStatusRequest>): _67.QueryClientStatusRequest;
                    fromAmino(object: _67.QueryClientStatusRequestAmino): _67.QueryClientStatusRequest;
                    toAmino(message: _67.QueryClientStatusRequest): _67.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _67.QueryClientStatusRequestAminoMsg): _67.QueryClientStatusRequest;
                    toAminoMsg(message: _67.QueryClientStatusRequest): _67.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryClientStatusRequestProtoMsg): _67.QueryClientStatusRequest;
                    toProto(message: _67.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryClientStatusRequest): _67.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientStatusResponse;
                    fromJSON(object: any): _67.QueryClientStatusResponse;
                    toJSON(message: _67.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_67.QueryClientStatusResponse>): _67.QueryClientStatusResponse;
                    fromAmino(object: _67.QueryClientStatusResponseAmino): _67.QueryClientStatusResponse;
                    toAmino(message: _67.QueryClientStatusResponse): _67.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _67.QueryClientStatusResponseAminoMsg): _67.QueryClientStatusResponse;
                    toAminoMsg(message: _67.QueryClientStatusResponse): _67.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryClientStatusResponseProtoMsg): _67.QueryClientStatusResponse;
                    toProto(message: _67.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryClientStatusResponse): _67.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _67.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientParamsRequest;
                    fromJSON(_: any): _67.QueryClientParamsRequest;
                    toJSON(_: _67.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_67.QueryClientParamsRequest>): _67.QueryClientParamsRequest;
                    fromAmino(_: _67.QueryClientParamsRequestAmino): _67.QueryClientParamsRequest;
                    toAmino(_: _67.QueryClientParamsRequest): _67.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _67.QueryClientParamsRequestAminoMsg): _67.QueryClientParamsRequest;
                    toAminoMsg(message: _67.QueryClientParamsRequest): _67.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryClientParamsRequestProtoMsg): _67.QueryClientParamsRequest;
                    toProto(message: _67.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryClientParamsRequest): _67.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryClientParamsResponse;
                    fromJSON(object: any): _67.QueryClientParamsResponse;
                    toJSON(message: _67.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_67.QueryClientParamsResponse>): _67.QueryClientParamsResponse;
                    fromAmino(object: _67.QueryClientParamsResponseAmino): _67.QueryClientParamsResponse;
                    toAmino(message: _67.QueryClientParamsResponse): _67.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _67.QueryClientParamsResponseAminoMsg): _67.QueryClientParamsResponse;
                    toAminoMsg(message: _67.QueryClientParamsResponse): _67.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryClientParamsResponseProtoMsg): _67.QueryClientParamsResponse;
                    toProto(message: _67.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryClientParamsResponse): _67.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _67.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _67.QueryUpgradedClientStateRequest;
                    toJSON(_: _67.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_67.QueryUpgradedClientStateRequest>): _67.QueryUpgradedClientStateRequest;
                    fromAmino(_: _67.QueryUpgradedClientStateRequestAmino): _67.QueryUpgradedClientStateRequest;
                    toAmino(_: _67.QueryUpgradedClientStateRequest): _67.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _67.QueryUpgradedClientStateRequestAminoMsg): _67.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _67.QueryUpgradedClientStateRequest): _67.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryUpgradedClientStateRequestProtoMsg): _67.QueryUpgradedClientStateRequest;
                    toProto(message: _67.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryUpgradedClientStateRequest): _67.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _67.QueryUpgradedClientStateResponse;
                    toJSON(message: _67.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_67.QueryUpgradedClientStateResponse>): _67.QueryUpgradedClientStateResponse;
                    fromAmino(object: _67.QueryUpgradedClientStateResponseAmino): _67.QueryUpgradedClientStateResponse;
                    toAmino(message: _67.QueryUpgradedClientStateResponse): _67.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _67.QueryUpgradedClientStateResponseAminoMsg): _67.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _67.QueryUpgradedClientStateResponse): _67.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryUpgradedClientStateResponseProtoMsg): _67.QueryUpgradedClientStateResponse;
                    toProto(message: _67.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryUpgradedClientStateResponse): _67.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _67.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _67.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _67.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_67.QueryUpgradedConsensusStateRequest>): _67.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _67.QueryUpgradedConsensusStateRequestAmino): _67.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _67.QueryUpgradedConsensusStateRequest): _67.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _67.QueryUpgradedConsensusStateRequestAminoMsg): _67.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _67.QueryUpgradedConsensusStateRequest): _67.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryUpgradedConsensusStateRequestProtoMsg): _67.QueryUpgradedConsensusStateRequest;
                    toProto(message: _67.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryUpgradedConsensusStateRequest): _67.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _67.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _67.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_67.QueryUpgradedConsensusStateResponse>): _67.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _67.QueryUpgradedConsensusStateResponseAmino): _67.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _67.QueryUpgradedConsensusStateResponse): _67.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _67.QueryUpgradedConsensusStateResponseAminoMsg): _67.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _67.QueryUpgradedConsensusStateResponse): _67.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryUpgradedConsensusStateResponseProtoMsg): _67.QueryUpgradedConsensusStateResponse;
                    toProto(message: _67.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryUpgradedConsensusStateResponse): _67.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisState;
                    fromJSON(object: any): _66.GenesisState;
                    toJSON(message: _66.GenesisState): unknown;
                    fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
                    fromAmino(object: _66.GenesisStateAmino): _66.GenesisState;
                    toAmino(message: _66.GenesisState): _66.GenesisStateAmino;
                    fromAminoMsg(object: _66.GenesisStateAminoMsg): _66.GenesisState;
                    toAminoMsg(message: _66.GenesisState): _66.GenesisStateAminoMsg;
                    fromProtoMsg(message: _66.GenesisStateProtoMsg): _66.GenesisState;
                    toProto(message: _66.GenesisState): Uint8Array;
                    toProtoMsg(message: _66.GenesisState): _66.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _66.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisMetadata;
                    fromJSON(object: any): _66.GenesisMetadata;
                    toJSON(message: _66.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_66.GenesisMetadata>): _66.GenesisMetadata;
                    fromAmino(object: _66.GenesisMetadataAmino): _66.GenesisMetadata;
                    toAmino(message: _66.GenesisMetadata): _66.GenesisMetadataAmino;
                    fromAminoMsg(object: _66.GenesisMetadataAminoMsg): _66.GenesisMetadata;
                    toAminoMsg(message: _66.GenesisMetadata): _66.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _66.GenesisMetadataProtoMsg): _66.GenesisMetadata;
                    toProto(message: _66.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _66.GenesisMetadata): _66.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _66.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _66.IdentifiedGenesisMetadata;
                    toJSON(message: _66.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_66.IdentifiedGenesisMetadata>): _66.IdentifiedGenesisMetadata;
                    fromAmino(object: _66.IdentifiedGenesisMetadataAmino): _66.IdentifiedGenesisMetadata;
                    toAmino(message: _66.IdentifiedGenesisMetadata): _66.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _66.IdentifiedGenesisMetadataAminoMsg): _66.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _66.IdentifiedGenesisMetadata): _66.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _66.IdentifiedGenesisMetadataProtoMsg): _66.IdentifiedGenesisMetadata;
                    toProto(message: _66.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _66.IdentifiedGenesisMetadata): _66.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _65.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.IdentifiedClientState;
                    fromJSON(object: any): _65.IdentifiedClientState;
                    toJSON(message: _65.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_65.IdentifiedClientState>): _65.IdentifiedClientState;
                    fromAmino(object: _65.IdentifiedClientStateAmino): _65.IdentifiedClientState;
                    toAmino(message: _65.IdentifiedClientState): _65.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _65.IdentifiedClientStateAminoMsg): _65.IdentifiedClientState;
                    toAminoMsg(message: _65.IdentifiedClientState): _65.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _65.IdentifiedClientStateProtoMsg): _65.IdentifiedClientState;
                    toProto(message: _65.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _65.IdentifiedClientState): _65.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _65.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConsensusStateWithHeight;
                    fromJSON(object: any): _65.ConsensusStateWithHeight;
                    toJSON(message: _65.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_65.ConsensusStateWithHeight>): _65.ConsensusStateWithHeight;
                    fromAmino(object: _65.ConsensusStateWithHeightAmino): _65.ConsensusStateWithHeight;
                    toAmino(message: _65.ConsensusStateWithHeight): _65.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _65.ConsensusStateWithHeightAminoMsg): _65.ConsensusStateWithHeight;
                    toAminoMsg(message: _65.ConsensusStateWithHeight): _65.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _65.ConsensusStateWithHeightProtoMsg): _65.ConsensusStateWithHeight;
                    toProto(message: _65.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _65.ConsensusStateWithHeight): _65.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _65.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ClientConsensusStates;
                    fromJSON(object: any): _65.ClientConsensusStates;
                    toJSON(message: _65.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_65.ClientConsensusStates>): _65.ClientConsensusStates;
                    fromAmino(object: _65.ClientConsensusStatesAmino): _65.ClientConsensusStates;
                    toAmino(message: _65.ClientConsensusStates): _65.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _65.ClientConsensusStatesAminoMsg): _65.ClientConsensusStates;
                    toAminoMsg(message: _65.ClientConsensusStates): _65.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _65.ClientConsensusStatesProtoMsg): _65.ClientConsensusStates;
                    toProto(message: _65.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _65.ClientConsensusStates): _65.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _65.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ClientUpdateProposal;
                    fromJSON(object: any): _65.ClientUpdateProposal;
                    toJSON(message: _65.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_65.ClientUpdateProposal>): _65.ClientUpdateProposal;
                    fromAmino(object: _65.ClientUpdateProposalAmino): _65.ClientUpdateProposal;
                    toAmino(message: _65.ClientUpdateProposal): _65.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _65.ClientUpdateProposalAminoMsg): _65.ClientUpdateProposal;
                    toAminoMsg(message: _65.ClientUpdateProposal): _65.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _65.ClientUpdateProposalProtoMsg): _65.ClientUpdateProposal;
                    toProto(message: _65.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _65.ClientUpdateProposal): _65.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _65.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.UpgradeProposal;
                    fromJSON(object: any): _65.UpgradeProposal;
                    toJSON(message: _65.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_65.UpgradeProposal>): _65.UpgradeProposal;
                    fromAmino(object: _65.UpgradeProposalAmino): _65.UpgradeProposal;
                    toAmino(message: _65.UpgradeProposal): _65.UpgradeProposalAmino;
                    fromAminoMsg(object: _65.UpgradeProposalAminoMsg): _65.UpgradeProposal;
                    toAminoMsg(message: _65.UpgradeProposal): _65.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _65.UpgradeProposalProtoMsg): _65.UpgradeProposal;
                    toProto(message: _65.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _65.UpgradeProposal): _65.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _65.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Height;
                    fromJSON(object: any): _65.Height;
                    toJSON(message: _65.Height): unknown;
                    fromPartial(object: Partial<_65.Height>): _65.Height;
                    fromAmino(object: _65.HeightAmino): _65.Height;
                    toAmino(message: _65.Height): _65.HeightAmino;
                    fromAminoMsg(object: _65.HeightAminoMsg): _65.Height;
                    toAminoMsg(message: _65.Height): _65.HeightAminoMsg;
                    fromProtoMsg(message: _65.HeightProtoMsg): _65.Height;
                    toProto(message: _65.Height): Uint8Array;
                    toProtoMsg(message: _65.Height): _65.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Params;
                    fromJSON(object: any): _65.Params;
                    toJSON(message: _65.Params): unknown;
                    fromPartial(object: Partial<_65.Params>): _65.Params;
                    fromAmino(object: _65.ParamsAmino): _65.Params;
                    toAmino(message: _65.Params): _65.ParamsAmino;
                    fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                    toAminoMsg(message: _65.Params): _65.ParamsAminoMsg;
                    fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                    toProto(message: _65.Params): Uint8Array;
                    toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _69.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MerkleRoot;
                    fromJSON(object: any): _69.MerkleRoot;
                    toJSON(message: _69.MerkleRoot): unknown;
                    fromPartial(object: Partial<_69.MerkleRoot>): _69.MerkleRoot;
                    fromAmino(object: _69.MerkleRootAmino): _69.MerkleRoot;
                    toAmino(message: _69.MerkleRoot): _69.MerkleRootAmino;
                    fromAminoMsg(object: _69.MerkleRootAminoMsg): _69.MerkleRoot;
                    toAminoMsg(message: _69.MerkleRoot): _69.MerkleRootAminoMsg;
                    fromProtoMsg(message: _69.MerkleRootProtoMsg): _69.MerkleRoot;
                    toProto(message: _69.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _69.MerkleRoot): _69.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _69.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MerklePrefix;
                    fromJSON(object: any): _69.MerklePrefix;
                    toJSON(message: _69.MerklePrefix): unknown;
                    fromPartial(object: Partial<_69.MerklePrefix>): _69.MerklePrefix;
                    fromAmino(object: _69.MerklePrefixAmino): _69.MerklePrefix;
                    toAmino(message: _69.MerklePrefix): _69.MerklePrefixAmino;
                    fromAminoMsg(object: _69.MerklePrefixAminoMsg): _69.MerklePrefix;
                    toAminoMsg(message: _69.MerklePrefix): _69.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _69.MerklePrefixProtoMsg): _69.MerklePrefix;
                    toProto(message: _69.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _69.MerklePrefix): _69.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _69.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MerklePath;
                    fromJSON(object: any): _69.MerklePath;
                    toJSON(message: _69.MerklePath): unknown;
                    fromPartial(object: Partial<_69.MerklePath>): _69.MerklePath;
                    fromAmino(object: _69.MerklePathAmino): _69.MerklePath;
                    toAmino(message: _69.MerklePath): _69.MerklePathAmino;
                    fromAminoMsg(object: _69.MerklePathAminoMsg): _69.MerklePath;
                    toAminoMsg(message: _69.MerklePath): _69.MerklePathAminoMsg;
                    fromProtoMsg(message: _69.MerklePathProtoMsg): _69.MerklePath;
                    toProto(message: _69.MerklePath): Uint8Array;
                    toProtoMsg(message: _69.MerklePath): _69.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _69.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MerkleProof;
                    fromJSON(object: any): _69.MerkleProof;
                    toJSON(message: _69.MerkleProof): unknown;
                    fromPartial(object: Partial<_69.MerkleProof>): _69.MerkleProof;
                    fromAmino(object: _69.MerkleProofAmino): _69.MerkleProof;
                    toAmino(message: _69.MerkleProof): _69.MerkleProofAmino;
                    fromAminoMsg(object: _69.MerkleProofAminoMsg): _69.MerkleProof;
                    toAminoMsg(message: _69.MerkleProof): _69.MerkleProofAminoMsg;
                    fromProtoMsg(message: _69.MerkleProofProtoMsg): _69.MerkleProof;
                    toProto(message: _69.MerkleProof): Uint8Array;
                    toProtoMsg(message: _69.MerkleProof): _69.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _184.MsgClientImpl;
                QueryClientImpl: typeof _180.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _72.QueryConnectionRequest): Promise<_72.QueryConnectionResponse>;
                    connections(request?: _72.QueryConnectionsRequest): Promise<_72.QueryConnectionsResponse>;
                    clientConnections(request: _72.QueryClientConnectionsRequest): Promise<_72.QueryClientConnectionsResponse>;
                    connectionClientState(request: _72.QueryConnectionClientStateRequest): Promise<_72.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _72.QueryConnectionConsensusStateRequest): Promise<_72.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _176.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _73.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _73.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _73.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _73.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _73.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _73.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _73.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _73.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _73.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _73.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _73.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _73.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _73.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _73.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _73.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _73.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _73.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _73.MsgConnectionOpenInit) => _73.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _73.MsgConnectionOpenInitAmino) => _73.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _73.MsgConnectionOpenTry) => _73.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _73.MsgConnectionOpenTryAmino) => _73.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _73.MsgConnectionOpenAck) => _73.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _73.MsgConnectionOpenAckAmino) => _73.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _73.MsgConnectionOpenConfirm) => _73.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _73.MsgConnectionOpenConfirmAmino) => _73.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _73.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenInit;
                    fromJSON(object: any): _73.MsgConnectionOpenInit;
                    toJSON(message: _73.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_73.MsgConnectionOpenInit>): _73.MsgConnectionOpenInit;
                    fromAmino(object: _73.MsgConnectionOpenInitAmino): _73.MsgConnectionOpenInit;
                    toAmino(message: _73.MsgConnectionOpenInit): _73.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _73.MsgConnectionOpenInitAminoMsg): _73.MsgConnectionOpenInit;
                    toAminoMsg(message: _73.MsgConnectionOpenInit): _73.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _73.MsgConnectionOpenInitProtoMsg): _73.MsgConnectionOpenInit;
                    toProto(message: _73.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _73.MsgConnectionOpenInit): _73.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _73.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _73.MsgConnectionOpenInitResponse;
                    toJSON(_: _73.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_73.MsgConnectionOpenInitResponse>): _73.MsgConnectionOpenInitResponse;
                    fromAmino(_: _73.MsgConnectionOpenInitResponseAmino): _73.MsgConnectionOpenInitResponse;
                    toAmino(_: _73.MsgConnectionOpenInitResponse): _73.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _73.MsgConnectionOpenInitResponseAminoMsg): _73.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _73.MsgConnectionOpenInitResponse): _73.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _73.MsgConnectionOpenInitResponseProtoMsg): _73.MsgConnectionOpenInitResponse;
                    toProto(message: _73.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _73.MsgConnectionOpenInitResponse): _73.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _73.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenTry;
                    fromJSON(object: any): _73.MsgConnectionOpenTry;
                    toJSON(message: _73.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_73.MsgConnectionOpenTry>): _73.MsgConnectionOpenTry;
                    fromAmino(object: _73.MsgConnectionOpenTryAmino): _73.MsgConnectionOpenTry;
                    toAmino(message: _73.MsgConnectionOpenTry): _73.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _73.MsgConnectionOpenTryAminoMsg): _73.MsgConnectionOpenTry;
                    toAminoMsg(message: _73.MsgConnectionOpenTry): _73.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _73.MsgConnectionOpenTryProtoMsg): _73.MsgConnectionOpenTry;
                    toProto(message: _73.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _73.MsgConnectionOpenTry): _73.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _73.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _73.MsgConnectionOpenTryResponse;
                    toJSON(_: _73.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_73.MsgConnectionOpenTryResponse>): _73.MsgConnectionOpenTryResponse;
                    fromAmino(_: _73.MsgConnectionOpenTryResponseAmino): _73.MsgConnectionOpenTryResponse;
                    toAmino(_: _73.MsgConnectionOpenTryResponse): _73.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _73.MsgConnectionOpenTryResponseAminoMsg): _73.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _73.MsgConnectionOpenTryResponse): _73.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _73.MsgConnectionOpenTryResponseProtoMsg): _73.MsgConnectionOpenTryResponse;
                    toProto(message: _73.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _73.MsgConnectionOpenTryResponse): _73.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _73.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenAck;
                    fromJSON(object: any): _73.MsgConnectionOpenAck;
                    toJSON(message: _73.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_73.MsgConnectionOpenAck>): _73.MsgConnectionOpenAck;
                    fromAmino(object: _73.MsgConnectionOpenAckAmino): _73.MsgConnectionOpenAck;
                    toAmino(message: _73.MsgConnectionOpenAck): _73.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _73.MsgConnectionOpenAckAminoMsg): _73.MsgConnectionOpenAck;
                    toAminoMsg(message: _73.MsgConnectionOpenAck): _73.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _73.MsgConnectionOpenAckProtoMsg): _73.MsgConnectionOpenAck;
                    toProto(message: _73.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _73.MsgConnectionOpenAck): _73.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _73.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _73.MsgConnectionOpenAckResponse;
                    toJSON(_: _73.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_73.MsgConnectionOpenAckResponse>): _73.MsgConnectionOpenAckResponse;
                    fromAmino(_: _73.MsgConnectionOpenAckResponseAmino): _73.MsgConnectionOpenAckResponse;
                    toAmino(_: _73.MsgConnectionOpenAckResponse): _73.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _73.MsgConnectionOpenAckResponseAminoMsg): _73.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _73.MsgConnectionOpenAckResponse): _73.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _73.MsgConnectionOpenAckResponseProtoMsg): _73.MsgConnectionOpenAckResponse;
                    toProto(message: _73.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _73.MsgConnectionOpenAckResponse): _73.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _73.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _73.MsgConnectionOpenConfirm;
                    toJSON(message: _73.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_73.MsgConnectionOpenConfirm>): _73.MsgConnectionOpenConfirm;
                    fromAmino(object: _73.MsgConnectionOpenConfirmAmino): _73.MsgConnectionOpenConfirm;
                    toAmino(message: _73.MsgConnectionOpenConfirm): _73.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _73.MsgConnectionOpenConfirmAminoMsg): _73.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _73.MsgConnectionOpenConfirm): _73.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _73.MsgConnectionOpenConfirmProtoMsg): _73.MsgConnectionOpenConfirm;
                    toProto(message: _73.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _73.MsgConnectionOpenConfirm): _73.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _73.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _73.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _73.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_73.MsgConnectionOpenConfirmResponse>): _73.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _73.MsgConnectionOpenConfirmResponseAmino): _73.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _73.MsgConnectionOpenConfirmResponse): _73.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _73.MsgConnectionOpenConfirmResponseAminoMsg): _73.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _73.MsgConnectionOpenConfirmResponse): _73.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _73.MsgConnectionOpenConfirmResponseProtoMsg): _73.MsgConnectionOpenConfirmResponse;
                    toProto(message: _73.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _73.MsgConnectionOpenConfirmResponse): _73.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _72.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionRequest;
                    fromJSON(object: any): _72.QueryConnectionRequest;
                    toJSON(message: _72.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_72.QueryConnectionRequest>): _72.QueryConnectionRequest;
                    fromAmino(object: _72.QueryConnectionRequestAmino): _72.QueryConnectionRequest;
                    toAmino(message: _72.QueryConnectionRequest): _72.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _72.QueryConnectionRequestAminoMsg): _72.QueryConnectionRequest;
                    toAminoMsg(message: _72.QueryConnectionRequest): _72.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _72.QueryConnectionRequestProtoMsg): _72.QueryConnectionRequest;
                    toProto(message: _72.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _72.QueryConnectionRequest): _72.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _72.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionResponse;
                    fromJSON(object: any): _72.QueryConnectionResponse;
                    toJSON(message: _72.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_72.QueryConnectionResponse>): _72.QueryConnectionResponse;
                    fromAmino(object: _72.QueryConnectionResponseAmino): _72.QueryConnectionResponse;
                    toAmino(message: _72.QueryConnectionResponse): _72.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _72.QueryConnectionResponseAminoMsg): _72.QueryConnectionResponse;
                    toAminoMsg(message: _72.QueryConnectionResponse): _72.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _72.QueryConnectionResponseProtoMsg): _72.QueryConnectionResponse;
                    toProto(message: _72.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _72.QueryConnectionResponse): _72.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _72.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionsRequest;
                    fromJSON(object: any): _72.QueryConnectionsRequest;
                    toJSON(message: _72.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_72.QueryConnectionsRequest>): _72.QueryConnectionsRequest;
                    fromAmino(object: _72.QueryConnectionsRequestAmino): _72.QueryConnectionsRequest;
                    toAmino(message: _72.QueryConnectionsRequest): _72.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _72.QueryConnectionsRequestAminoMsg): _72.QueryConnectionsRequest;
                    toAminoMsg(message: _72.QueryConnectionsRequest): _72.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _72.QueryConnectionsRequestProtoMsg): _72.QueryConnectionsRequest;
                    toProto(message: _72.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _72.QueryConnectionsRequest): _72.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _72.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionsResponse;
                    fromJSON(object: any): _72.QueryConnectionsResponse;
                    toJSON(message: _72.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_72.QueryConnectionsResponse>): _72.QueryConnectionsResponse;
                    fromAmino(object: _72.QueryConnectionsResponseAmino): _72.QueryConnectionsResponse;
                    toAmino(message: _72.QueryConnectionsResponse): _72.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _72.QueryConnectionsResponseAminoMsg): _72.QueryConnectionsResponse;
                    toAminoMsg(message: _72.QueryConnectionsResponse): _72.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _72.QueryConnectionsResponseProtoMsg): _72.QueryConnectionsResponse;
                    toProto(message: _72.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _72.QueryConnectionsResponse): _72.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _72.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClientConnectionsRequest;
                    fromJSON(object: any): _72.QueryClientConnectionsRequest;
                    toJSON(message: _72.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_72.QueryClientConnectionsRequest>): _72.QueryClientConnectionsRequest;
                    fromAmino(object: _72.QueryClientConnectionsRequestAmino): _72.QueryClientConnectionsRequest;
                    toAmino(message: _72.QueryClientConnectionsRequest): _72.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _72.QueryClientConnectionsRequestAminoMsg): _72.QueryClientConnectionsRequest;
                    toAminoMsg(message: _72.QueryClientConnectionsRequest): _72.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _72.QueryClientConnectionsRequestProtoMsg): _72.QueryClientConnectionsRequest;
                    toProto(message: _72.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _72.QueryClientConnectionsRequest): _72.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _72.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClientConnectionsResponse;
                    fromJSON(object: any): _72.QueryClientConnectionsResponse;
                    toJSON(message: _72.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_72.QueryClientConnectionsResponse>): _72.QueryClientConnectionsResponse;
                    fromAmino(object: _72.QueryClientConnectionsResponseAmino): _72.QueryClientConnectionsResponse;
                    toAmino(message: _72.QueryClientConnectionsResponse): _72.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _72.QueryClientConnectionsResponseAminoMsg): _72.QueryClientConnectionsResponse;
                    toAminoMsg(message: _72.QueryClientConnectionsResponse): _72.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _72.QueryClientConnectionsResponseProtoMsg): _72.QueryClientConnectionsResponse;
                    toProto(message: _72.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _72.QueryClientConnectionsResponse): _72.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _72.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _72.QueryConnectionClientStateRequest;
                    toJSON(message: _72.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_72.QueryConnectionClientStateRequest>): _72.QueryConnectionClientStateRequest;
                    fromAmino(object: _72.QueryConnectionClientStateRequestAmino): _72.QueryConnectionClientStateRequest;
                    toAmino(message: _72.QueryConnectionClientStateRequest): _72.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _72.QueryConnectionClientStateRequestAminoMsg): _72.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _72.QueryConnectionClientStateRequest): _72.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _72.QueryConnectionClientStateRequestProtoMsg): _72.QueryConnectionClientStateRequest;
                    toProto(message: _72.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _72.QueryConnectionClientStateRequest): _72.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _72.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _72.QueryConnectionClientStateResponse;
                    toJSON(message: _72.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_72.QueryConnectionClientStateResponse>): _72.QueryConnectionClientStateResponse;
                    fromAmino(object: _72.QueryConnectionClientStateResponseAmino): _72.QueryConnectionClientStateResponse;
                    toAmino(message: _72.QueryConnectionClientStateResponse): _72.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _72.QueryConnectionClientStateResponseAminoMsg): _72.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _72.QueryConnectionClientStateResponse): _72.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _72.QueryConnectionClientStateResponseProtoMsg): _72.QueryConnectionClientStateResponse;
                    toProto(message: _72.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _72.QueryConnectionClientStateResponse): _72.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _72.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _72.QueryConnectionConsensusStateRequest;
                    toJSON(message: _72.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_72.QueryConnectionConsensusStateRequest>): _72.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _72.QueryConnectionConsensusStateRequestAmino): _72.QueryConnectionConsensusStateRequest;
                    toAmino(message: _72.QueryConnectionConsensusStateRequest): _72.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _72.QueryConnectionConsensusStateRequestAminoMsg): _72.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _72.QueryConnectionConsensusStateRequest): _72.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _72.QueryConnectionConsensusStateRequestProtoMsg): _72.QueryConnectionConsensusStateRequest;
                    toProto(message: _72.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _72.QueryConnectionConsensusStateRequest): _72.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _72.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _72.QueryConnectionConsensusStateResponse;
                    toJSON(message: _72.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_72.QueryConnectionConsensusStateResponse>): _72.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _72.QueryConnectionConsensusStateResponseAmino): _72.QueryConnectionConsensusStateResponse;
                    toAmino(message: _72.QueryConnectionConsensusStateResponse): _72.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _72.QueryConnectionConsensusStateResponseAminoMsg): _72.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _72.QueryConnectionConsensusStateResponse): _72.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _72.QueryConnectionConsensusStateResponseProtoMsg): _72.QueryConnectionConsensusStateResponse;
                    toProto(message: _72.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _72.QueryConnectionConsensusStateResponse): _72.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                    fromJSON(object: any): _71.GenesisState;
                    toJSON(message: _71.GenesisState): unknown;
                    fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
                    fromAmino(object: _71.GenesisStateAmino): _71.GenesisState;
                    toAmino(message: _71.GenesisState): _71.GenesisStateAmino;
                    fromAminoMsg(object: _71.GenesisStateAminoMsg): _71.GenesisState;
                    toAminoMsg(message: _71.GenesisState): _71.GenesisStateAminoMsg;
                    fromProtoMsg(message: _71.GenesisStateProtoMsg): _71.GenesisState;
                    toProto(message: _71.GenesisState): Uint8Array;
                    toProtoMsg(message: _71.GenesisState): _71.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _70.State;
                stateToJSON(object: _70.State): string;
                State: typeof _70.State;
                StateSDKType: typeof _70.State;
                StateAmino: typeof _70.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _70.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ConnectionEnd;
                    fromJSON(object: any): _70.ConnectionEnd;
                    toJSON(message: _70.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_70.ConnectionEnd>): _70.ConnectionEnd;
                    fromAmino(object: _70.ConnectionEndAmino): _70.ConnectionEnd;
                    toAmino(message: _70.ConnectionEnd): _70.ConnectionEndAmino;
                    fromAminoMsg(object: _70.ConnectionEndAminoMsg): _70.ConnectionEnd;
                    toAminoMsg(message: _70.ConnectionEnd): _70.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _70.ConnectionEndProtoMsg): _70.ConnectionEnd;
                    toProto(message: _70.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _70.ConnectionEnd): _70.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _70.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.IdentifiedConnection;
                    fromJSON(object: any): _70.IdentifiedConnection;
                    toJSON(message: _70.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_70.IdentifiedConnection>): _70.IdentifiedConnection;
                    fromAmino(object: _70.IdentifiedConnectionAmino): _70.IdentifiedConnection;
                    toAmino(message: _70.IdentifiedConnection): _70.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _70.IdentifiedConnectionAminoMsg): _70.IdentifiedConnection;
                    toAminoMsg(message: _70.IdentifiedConnection): _70.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _70.IdentifiedConnectionProtoMsg): _70.IdentifiedConnection;
                    toProto(message: _70.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _70.IdentifiedConnection): _70.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _70.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Counterparty;
                    fromJSON(object: any): _70.Counterparty;
                    toJSON(message: _70.Counterparty): unknown;
                    fromPartial(object: Partial<_70.Counterparty>): _70.Counterparty;
                    fromAmino(object: _70.CounterpartyAmino): _70.Counterparty;
                    toAmino(message: _70.Counterparty): _70.CounterpartyAmino;
                    fromAminoMsg(object: _70.CounterpartyAminoMsg): _70.Counterparty;
                    toAminoMsg(message: _70.Counterparty): _70.CounterpartyAminoMsg;
                    fromProtoMsg(message: _70.CounterpartyProtoMsg): _70.Counterparty;
                    toProto(message: _70.Counterparty): Uint8Array;
                    toProtoMsg(message: _70.Counterparty): _70.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _70.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ClientPaths;
                    fromJSON(object: any): _70.ClientPaths;
                    toJSON(message: _70.ClientPaths): unknown;
                    fromPartial(object: Partial<_70.ClientPaths>): _70.ClientPaths;
                    fromAmino(object: _70.ClientPathsAmino): _70.ClientPaths;
                    toAmino(message: _70.ClientPaths): _70.ClientPathsAmino;
                    fromAminoMsg(object: _70.ClientPathsAminoMsg): _70.ClientPaths;
                    toAminoMsg(message: _70.ClientPaths): _70.ClientPathsAminoMsg;
                    fromProtoMsg(message: _70.ClientPathsProtoMsg): _70.ClientPaths;
                    toProto(message: _70.ClientPaths): Uint8Array;
                    toProtoMsg(message: _70.ClientPaths): _70.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _70.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ConnectionPaths;
                    fromJSON(object: any): _70.ConnectionPaths;
                    toJSON(message: _70.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_70.ConnectionPaths>): _70.ConnectionPaths;
                    fromAmino(object: _70.ConnectionPathsAmino): _70.ConnectionPaths;
                    toAmino(message: _70.ConnectionPaths): _70.ConnectionPathsAmino;
                    fromAminoMsg(object: _70.ConnectionPathsAminoMsg): _70.ConnectionPaths;
                    toAminoMsg(message: _70.ConnectionPaths): _70.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _70.ConnectionPathsProtoMsg): _70.ConnectionPaths;
                    toProto(message: _70.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _70.ConnectionPaths): _70.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _70.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Version;
                    fromJSON(object: any): _70.Version;
                    toJSON(message: _70.Version): unknown;
                    fromPartial(object: Partial<_70.Version>): _70.Version;
                    fromAmino(object: _70.VersionAmino): _70.Version;
                    toAmino(message: _70.Version): _70.VersionAmino;
                    fromAminoMsg(object: _70.VersionAminoMsg): _70.Version;
                    toAminoMsg(message: _70.Version): _70.VersionAminoMsg;
                    fromProtoMsg(message: _70.VersionProtoMsg): _70.Version;
                    toProto(message: _70.Version): Uint8Array;
                    toProtoMsg(message: _70.Version): _70.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Params;
                    fromJSON(object: any): _70.Params;
                    toJSON(message: _70.Params): unknown;
                    fromPartial(object: Partial<_70.Params>): _70.Params;
                    fromAmino(object: _70.ParamsAmino): _70.Params;
                    toAmino(message: _70.Params): _70.ParamsAmino;
                    fromAminoMsg(object: _70.ParamsAminoMsg): _70.Params;
                    toAminoMsg(message: _70.Params): _70.ParamsAminoMsg;
                    fromProtoMsg(message: _70.ParamsProtoMsg): _70.Params;
                    toProto(message: _70.Params): Uint8Array;
                    toProtoMsg(message: _70.Params): _70.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _74.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ClientState;
                    fromJSON(object: any): _74.ClientState;
                    toJSON(message: _74.ClientState): unknown;
                    fromPartial(object: Partial<_74.ClientState>): _74.ClientState;
                    fromAmino(object: _74.ClientStateAmino): _74.ClientState;
                    toAmino(message: _74.ClientState): _74.ClientStateAmino;
                    fromAminoMsg(object: _74.ClientStateAminoMsg): _74.ClientState;
                    toAminoMsg(message: _74.ClientState): _74.ClientStateAminoMsg;
                    fromProtoMsg(message: _74.ClientStateProtoMsg): _74.ClientState;
                    toProto(message: _74.ClientState): Uint8Array;
                    toProtoMsg(message: _74.ClientState): _74.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _75.DataType;
                dataTypeToJSON(object: _75.DataType): string;
                DataType: typeof _75.DataType;
                DataTypeSDKType: typeof _75.DataType;
                DataTypeAmino: typeof _75.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _75.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ClientState;
                    fromJSON(object: any): _75.ClientState;
                    toJSON(message: _75.ClientState): unknown;
                    fromPartial(object: Partial<_75.ClientState>): _75.ClientState;
                    fromAmino(object: _75.ClientStateAmino): _75.ClientState;
                    toAmino(message: _75.ClientState): _75.ClientStateAmino;
                    fromAminoMsg(object: _75.ClientStateAminoMsg): _75.ClientState;
                    toAminoMsg(message: _75.ClientState): _75.ClientStateAminoMsg;
                    fromProtoMsg(message: _75.ClientStateProtoMsg): _75.ClientState;
                    toProto(message: _75.ClientState): Uint8Array;
                    toProtoMsg(message: _75.ClientState): _75.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _75.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ConsensusState;
                    fromJSON(object: any): _75.ConsensusState;
                    toJSON(message: _75.ConsensusState): unknown;
                    fromPartial(object: Partial<_75.ConsensusState>): _75.ConsensusState;
                    fromAmino(object: _75.ConsensusStateAmino): _75.ConsensusState;
                    toAmino(message: _75.ConsensusState): _75.ConsensusStateAmino;
                    fromAminoMsg(object: _75.ConsensusStateAminoMsg): _75.ConsensusState;
                    toAminoMsg(message: _75.ConsensusState): _75.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _75.ConsensusStateProtoMsg): _75.ConsensusState;
                    toProto(message: _75.ConsensusState): Uint8Array;
                    toProtoMsg(message: _75.ConsensusState): _75.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _75.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Header;
                    fromJSON(object: any): _75.Header;
                    toJSON(message: _75.Header): unknown;
                    fromPartial(object: Partial<_75.Header>): _75.Header;
                    fromAmino(object: _75.HeaderAmino): _75.Header;
                    toAmino(message: _75.Header): _75.HeaderAmino;
                    fromAminoMsg(object: _75.HeaderAminoMsg): _75.Header;
                    toAminoMsg(message: _75.Header): _75.HeaderAminoMsg;
                    fromProtoMsg(message: _75.HeaderProtoMsg): _75.Header;
                    toProto(message: _75.Header): Uint8Array;
                    toProtoMsg(message: _75.Header): _75.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _75.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Misbehaviour;
                    fromJSON(object: any): _75.Misbehaviour;
                    toJSON(message: _75.Misbehaviour): unknown;
                    fromPartial(object: Partial<_75.Misbehaviour>): _75.Misbehaviour;
                    fromAmino(object: _75.MisbehaviourAmino): _75.Misbehaviour;
                    toAmino(message: _75.Misbehaviour): _75.MisbehaviourAmino;
                    fromAminoMsg(object: _75.MisbehaviourAminoMsg): _75.Misbehaviour;
                    toAminoMsg(message: _75.Misbehaviour): _75.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _75.MisbehaviourProtoMsg): _75.Misbehaviour;
                    toProto(message: _75.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _75.Misbehaviour): _75.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _75.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SignatureAndData;
                    fromJSON(object: any): _75.SignatureAndData;
                    toJSON(message: _75.SignatureAndData): unknown;
                    fromPartial(object: Partial<_75.SignatureAndData>): _75.SignatureAndData;
                    fromAmino(object: _75.SignatureAndDataAmino): _75.SignatureAndData;
                    toAmino(message: _75.SignatureAndData): _75.SignatureAndDataAmino;
                    fromAminoMsg(object: _75.SignatureAndDataAminoMsg): _75.SignatureAndData;
                    toAminoMsg(message: _75.SignatureAndData): _75.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _75.SignatureAndDataProtoMsg): _75.SignatureAndData;
                    toProto(message: _75.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _75.SignatureAndData): _75.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _75.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TimestampedSignatureData;
                    fromJSON(object: any): _75.TimestampedSignatureData;
                    toJSON(message: _75.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_75.TimestampedSignatureData>): _75.TimestampedSignatureData;
                    fromAmino(object: _75.TimestampedSignatureDataAmino): _75.TimestampedSignatureData;
                    toAmino(message: _75.TimestampedSignatureData): _75.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _75.TimestampedSignatureDataAminoMsg): _75.TimestampedSignatureData;
                    toAminoMsg(message: _75.TimestampedSignatureData): _75.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _75.TimestampedSignatureDataProtoMsg): _75.TimestampedSignatureData;
                    toProto(message: _75.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _75.TimestampedSignatureData): _75.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _75.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SignBytes;
                    fromJSON(object: any): _75.SignBytes;
                    toJSON(message: _75.SignBytes): unknown;
                    fromPartial(object: Partial<_75.SignBytes>): _75.SignBytes;
                    fromAmino(object: _75.SignBytesAmino): _75.SignBytes;
                    toAmino(message: _75.SignBytes): _75.SignBytesAmino;
                    fromAminoMsg(object: _75.SignBytesAminoMsg): _75.SignBytes;
                    toAminoMsg(message: _75.SignBytes): _75.SignBytesAminoMsg;
                    fromProtoMsg(message: _75.SignBytesProtoMsg): _75.SignBytes;
                    toProto(message: _75.SignBytes): Uint8Array;
                    toProtoMsg(message: _75.SignBytes): _75.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _75.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.HeaderData;
                    fromJSON(object: any): _75.HeaderData;
                    toJSON(message: _75.HeaderData): unknown;
                    fromPartial(object: Partial<_75.HeaderData>): _75.HeaderData;
                    fromAmino(object: _75.HeaderDataAmino): _75.HeaderData;
                    toAmino(message: _75.HeaderData): _75.HeaderDataAmino;
                    fromAminoMsg(object: _75.HeaderDataAminoMsg): _75.HeaderData;
                    toAminoMsg(message: _75.HeaderData): _75.HeaderDataAminoMsg;
                    fromProtoMsg(message: _75.HeaderDataProtoMsg): _75.HeaderData;
                    toProto(message: _75.HeaderData): Uint8Array;
                    toProtoMsg(message: _75.HeaderData): _75.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _75.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ClientStateData;
                    fromJSON(object: any): _75.ClientStateData;
                    toJSON(message: _75.ClientStateData): unknown;
                    fromPartial(object: Partial<_75.ClientStateData>): _75.ClientStateData;
                    fromAmino(object: _75.ClientStateDataAmino): _75.ClientStateData;
                    toAmino(message: _75.ClientStateData): _75.ClientStateDataAmino;
                    fromAminoMsg(object: _75.ClientStateDataAminoMsg): _75.ClientStateData;
                    toAminoMsg(message: _75.ClientStateData): _75.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _75.ClientStateDataProtoMsg): _75.ClientStateData;
                    toProto(message: _75.ClientStateData): Uint8Array;
                    toProtoMsg(message: _75.ClientStateData): _75.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _75.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ConsensusStateData;
                    fromJSON(object: any): _75.ConsensusStateData;
                    toJSON(message: _75.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_75.ConsensusStateData>): _75.ConsensusStateData;
                    fromAmino(object: _75.ConsensusStateDataAmino): _75.ConsensusStateData;
                    toAmino(message: _75.ConsensusStateData): _75.ConsensusStateDataAmino;
                    fromAminoMsg(object: _75.ConsensusStateDataAminoMsg): _75.ConsensusStateData;
                    toAminoMsg(message: _75.ConsensusStateData): _75.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _75.ConsensusStateDataProtoMsg): _75.ConsensusStateData;
                    toProto(message: _75.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _75.ConsensusStateData): _75.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _75.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ConnectionStateData;
                    fromJSON(object: any): _75.ConnectionStateData;
                    toJSON(message: _75.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_75.ConnectionStateData>): _75.ConnectionStateData;
                    fromAmino(object: _75.ConnectionStateDataAmino): _75.ConnectionStateData;
                    toAmino(message: _75.ConnectionStateData): _75.ConnectionStateDataAmino;
                    fromAminoMsg(object: _75.ConnectionStateDataAminoMsg): _75.ConnectionStateData;
                    toAminoMsg(message: _75.ConnectionStateData): _75.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _75.ConnectionStateDataProtoMsg): _75.ConnectionStateData;
                    toProto(message: _75.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _75.ConnectionStateData): _75.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _75.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ChannelStateData;
                    fromJSON(object: any): _75.ChannelStateData;
                    toJSON(message: _75.ChannelStateData): unknown;
                    fromPartial(object: Partial<_75.ChannelStateData>): _75.ChannelStateData;
                    fromAmino(object: _75.ChannelStateDataAmino): _75.ChannelStateData;
                    toAmino(message: _75.ChannelStateData): _75.ChannelStateDataAmino;
                    fromAminoMsg(object: _75.ChannelStateDataAminoMsg): _75.ChannelStateData;
                    toAminoMsg(message: _75.ChannelStateData): _75.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _75.ChannelStateDataProtoMsg): _75.ChannelStateData;
                    toProto(message: _75.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _75.ChannelStateData): _75.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _75.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.PacketCommitmentData;
                    fromJSON(object: any): _75.PacketCommitmentData;
                    toJSON(message: _75.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_75.PacketCommitmentData>): _75.PacketCommitmentData;
                    fromAmino(object: _75.PacketCommitmentDataAmino): _75.PacketCommitmentData;
                    toAmino(message: _75.PacketCommitmentData): _75.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _75.PacketCommitmentDataAminoMsg): _75.PacketCommitmentData;
                    toAminoMsg(message: _75.PacketCommitmentData): _75.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _75.PacketCommitmentDataProtoMsg): _75.PacketCommitmentData;
                    toProto(message: _75.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _75.PacketCommitmentData): _75.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _75.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.PacketAcknowledgementData;
                    fromJSON(object: any): _75.PacketAcknowledgementData;
                    toJSON(message: _75.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_75.PacketAcknowledgementData>): _75.PacketAcknowledgementData;
                    fromAmino(object: _75.PacketAcknowledgementDataAmino): _75.PacketAcknowledgementData;
                    toAmino(message: _75.PacketAcknowledgementData): _75.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _75.PacketAcknowledgementDataAminoMsg): _75.PacketAcknowledgementData;
                    toAminoMsg(message: _75.PacketAcknowledgementData): _75.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _75.PacketAcknowledgementDataProtoMsg): _75.PacketAcknowledgementData;
                    toProto(message: _75.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _75.PacketAcknowledgementData): _75.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _75.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.PacketReceiptAbsenceData;
                    fromJSON(object: any): _75.PacketReceiptAbsenceData;
                    toJSON(message: _75.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_75.PacketReceiptAbsenceData>): _75.PacketReceiptAbsenceData;
                    fromAmino(object: _75.PacketReceiptAbsenceDataAmino): _75.PacketReceiptAbsenceData;
                    toAmino(message: _75.PacketReceiptAbsenceData): _75.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _75.PacketReceiptAbsenceDataAminoMsg): _75.PacketReceiptAbsenceData;
                    toAminoMsg(message: _75.PacketReceiptAbsenceData): _75.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _75.PacketReceiptAbsenceDataProtoMsg): _75.PacketReceiptAbsenceData;
                    toProto(message: _75.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _75.PacketReceiptAbsenceData): _75.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _75.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.NextSequenceRecvData;
                    fromJSON(object: any): _75.NextSequenceRecvData;
                    toJSON(message: _75.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_75.NextSequenceRecvData>): _75.NextSequenceRecvData;
                    fromAmino(object: _75.NextSequenceRecvDataAmino): _75.NextSequenceRecvData;
                    toAmino(message: _75.NextSequenceRecvData): _75.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _75.NextSequenceRecvDataAminoMsg): _75.NextSequenceRecvData;
                    toAminoMsg(message: _75.NextSequenceRecvData): _75.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _75.NextSequenceRecvDataProtoMsg): _75.NextSequenceRecvData;
                    toProto(message: _75.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _75.NextSequenceRecvData): _75.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _76.DataType;
                dataTypeToJSON(object: _76.DataType): string;
                DataType: typeof _76.DataType;
                DataTypeSDKType: typeof _76.DataType;
                DataTypeAmino: typeof _76.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _76.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientState;
                    fromJSON(object: any): _76.ClientState;
                    toJSON(message: _76.ClientState): unknown;
                    fromPartial(object: Partial<_76.ClientState>): _76.ClientState;
                    fromAmino(object: _76.ClientStateAmino): _76.ClientState;
                    toAmino(message: _76.ClientState): _76.ClientStateAmino;
                    fromAminoMsg(object: _76.ClientStateAminoMsg): _76.ClientState;
                    toAminoMsg(message: _76.ClientState): _76.ClientStateAminoMsg;
                    fromProtoMsg(message: _76.ClientStateProtoMsg): _76.ClientState;
                    toProto(message: _76.ClientState): Uint8Array;
                    toProtoMsg(message: _76.ClientState): _76.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _76.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConsensusState;
                    fromJSON(object: any): _76.ConsensusState;
                    toJSON(message: _76.ConsensusState): unknown;
                    fromPartial(object: Partial<_76.ConsensusState>): _76.ConsensusState;
                    fromAmino(object: _76.ConsensusStateAmino): _76.ConsensusState;
                    toAmino(message: _76.ConsensusState): _76.ConsensusStateAmino;
                    fromAminoMsg(object: _76.ConsensusStateAminoMsg): _76.ConsensusState;
                    toAminoMsg(message: _76.ConsensusState): _76.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _76.ConsensusStateProtoMsg): _76.ConsensusState;
                    toProto(message: _76.ConsensusState): Uint8Array;
                    toProtoMsg(message: _76.ConsensusState): _76.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _76.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Header;
                    fromJSON(object: any): _76.Header;
                    toJSON(message: _76.Header): unknown;
                    fromPartial(object: Partial<_76.Header>): _76.Header;
                    fromAmino(object: _76.HeaderAmino): _76.Header;
                    toAmino(message: _76.Header): _76.HeaderAmino;
                    fromAminoMsg(object: _76.HeaderAminoMsg): _76.Header;
                    toAminoMsg(message: _76.Header): _76.HeaderAminoMsg;
                    fromProtoMsg(message: _76.HeaderProtoMsg): _76.Header;
                    toProto(message: _76.Header): Uint8Array;
                    toProtoMsg(message: _76.Header): _76.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _76.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Misbehaviour;
                    fromJSON(object: any): _76.Misbehaviour;
                    toJSON(message: _76.Misbehaviour): unknown;
                    fromPartial(object: Partial<_76.Misbehaviour>): _76.Misbehaviour;
                    fromAmino(object: _76.MisbehaviourAmino): _76.Misbehaviour;
                    toAmino(message: _76.Misbehaviour): _76.MisbehaviourAmino;
                    fromAminoMsg(object: _76.MisbehaviourAminoMsg): _76.Misbehaviour;
                    toAminoMsg(message: _76.Misbehaviour): _76.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _76.MisbehaviourProtoMsg): _76.Misbehaviour;
                    toProto(message: _76.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _76.Misbehaviour): _76.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _76.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SignatureAndData;
                    fromJSON(object: any): _76.SignatureAndData;
                    toJSON(message: _76.SignatureAndData): unknown;
                    fromPartial(object: Partial<_76.SignatureAndData>): _76.SignatureAndData;
                    fromAmino(object: _76.SignatureAndDataAmino): _76.SignatureAndData;
                    toAmino(message: _76.SignatureAndData): _76.SignatureAndDataAmino;
                    fromAminoMsg(object: _76.SignatureAndDataAminoMsg): _76.SignatureAndData;
                    toAminoMsg(message: _76.SignatureAndData): _76.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _76.SignatureAndDataProtoMsg): _76.SignatureAndData;
                    toProto(message: _76.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _76.SignatureAndData): _76.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _76.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.TimestampedSignatureData;
                    fromJSON(object: any): _76.TimestampedSignatureData;
                    toJSON(message: _76.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_76.TimestampedSignatureData>): _76.TimestampedSignatureData;
                    fromAmino(object: _76.TimestampedSignatureDataAmino): _76.TimestampedSignatureData;
                    toAmino(message: _76.TimestampedSignatureData): _76.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _76.TimestampedSignatureDataAminoMsg): _76.TimestampedSignatureData;
                    toAminoMsg(message: _76.TimestampedSignatureData): _76.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _76.TimestampedSignatureDataProtoMsg): _76.TimestampedSignatureData;
                    toProto(message: _76.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _76.TimestampedSignatureData): _76.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _76.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SignBytes;
                    fromJSON(object: any): _76.SignBytes;
                    toJSON(message: _76.SignBytes): unknown;
                    fromPartial(object: Partial<_76.SignBytes>): _76.SignBytes;
                    fromAmino(object: _76.SignBytesAmino): _76.SignBytes;
                    toAmino(message: _76.SignBytes): _76.SignBytesAmino;
                    fromAminoMsg(object: _76.SignBytesAminoMsg): _76.SignBytes;
                    toAminoMsg(message: _76.SignBytes): _76.SignBytesAminoMsg;
                    fromProtoMsg(message: _76.SignBytesProtoMsg): _76.SignBytes;
                    toProto(message: _76.SignBytes): Uint8Array;
                    toProtoMsg(message: _76.SignBytes): _76.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _76.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.HeaderData;
                    fromJSON(object: any): _76.HeaderData;
                    toJSON(message: _76.HeaderData): unknown;
                    fromPartial(object: Partial<_76.HeaderData>): _76.HeaderData;
                    fromAmino(object: _76.HeaderDataAmino): _76.HeaderData;
                    toAmino(message: _76.HeaderData): _76.HeaderDataAmino;
                    fromAminoMsg(object: _76.HeaderDataAminoMsg): _76.HeaderData;
                    toAminoMsg(message: _76.HeaderData): _76.HeaderDataAminoMsg;
                    fromProtoMsg(message: _76.HeaderDataProtoMsg): _76.HeaderData;
                    toProto(message: _76.HeaderData): Uint8Array;
                    toProtoMsg(message: _76.HeaderData): _76.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _76.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientStateData;
                    fromJSON(object: any): _76.ClientStateData;
                    toJSON(message: _76.ClientStateData): unknown;
                    fromPartial(object: Partial<_76.ClientStateData>): _76.ClientStateData;
                    fromAmino(object: _76.ClientStateDataAmino): _76.ClientStateData;
                    toAmino(message: _76.ClientStateData): _76.ClientStateDataAmino;
                    fromAminoMsg(object: _76.ClientStateDataAminoMsg): _76.ClientStateData;
                    toAminoMsg(message: _76.ClientStateData): _76.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _76.ClientStateDataProtoMsg): _76.ClientStateData;
                    toProto(message: _76.ClientStateData): Uint8Array;
                    toProtoMsg(message: _76.ClientStateData): _76.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _76.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConsensusStateData;
                    fromJSON(object: any): _76.ConsensusStateData;
                    toJSON(message: _76.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_76.ConsensusStateData>): _76.ConsensusStateData;
                    fromAmino(object: _76.ConsensusStateDataAmino): _76.ConsensusStateData;
                    toAmino(message: _76.ConsensusStateData): _76.ConsensusStateDataAmino;
                    fromAminoMsg(object: _76.ConsensusStateDataAminoMsg): _76.ConsensusStateData;
                    toAminoMsg(message: _76.ConsensusStateData): _76.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _76.ConsensusStateDataProtoMsg): _76.ConsensusStateData;
                    toProto(message: _76.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _76.ConsensusStateData): _76.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _76.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConnectionStateData;
                    fromJSON(object: any): _76.ConnectionStateData;
                    toJSON(message: _76.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_76.ConnectionStateData>): _76.ConnectionStateData;
                    fromAmino(object: _76.ConnectionStateDataAmino): _76.ConnectionStateData;
                    toAmino(message: _76.ConnectionStateData): _76.ConnectionStateDataAmino;
                    fromAminoMsg(object: _76.ConnectionStateDataAminoMsg): _76.ConnectionStateData;
                    toAminoMsg(message: _76.ConnectionStateData): _76.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _76.ConnectionStateDataProtoMsg): _76.ConnectionStateData;
                    toProto(message: _76.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _76.ConnectionStateData): _76.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _76.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ChannelStateData;
                    fromJSON(object: any): _76.ChannelStateData;
                    toJSON(message: _76.ChannelStateData): unknown;
                    fromPartial(object: Partial<_76.ChannelStateData>): _76.ChannelStateData;
                    fromAmino(object: _76.ChannelStateDataAmino): _76.ChannelStateData;
                    toAmino(message: _76.ChannelStateData): _76.ChannelStateDataAmino;
                    fromAminoMsg(object: _76.ChannelStateDataAminoMsg): _76.ChannelStateData;
                    toAminoMsg(message: _76.ChannelStateData): _76.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _76.ChannelStateDataProtoMsg): _76.ChannelStateData;
                    toProto(message: _76.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _76.ChannelStateData): _76.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _76.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketCommitmentData;
                    fromJSON(object: any): _76.PacketCommitmentData;
                    toJSON(message: _76.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_76.PacketCommitmentData>): _76.PacketCommitmentData;
                    fromAmino(object: _76.PacketCommitmentDataAmino): _76.PacketCommitmentData;
                    toAmino(message: _76.PacketCommitmentData): _76.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _76.PacketCommitmentDataAminoMsg): _76.PacketCommitmentData;
                    toAminoMsg(message: _76.PacketCommitmentData): _76.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _76.PacketCommitmentDataProtoMsg): _76.PacketCommitmentData;
                    toProto(message: _76.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _76.PacketCommitmentData): _76.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _76.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketAcknowledgementData;
                    fromJSON(object: any): _76.PacketAcknowledgementData;
                    toJSON(message: _76.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_76.PacketAcknowledgementData>): _76.PacketAcknowledgementData;
                    fromAmino(object: _76.PacketAcknowledgementDataAmino): _76.PacketAcknowledgementData;
                    toAmino(message: _76.PacketAcknowledgementData): _76.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _76.PacketAcknowledgementDataAminoMsg): _76.PacketAcknowledgementData;
                    toAminoMsg(message: _76.PacketAcknowledgementData): _76.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _76.PacketAcknowledgementDataProtoMsg): _76.PacketAcknowledgementData;
                    toProto(message: _76.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _76.PacketAcknowledgementData): _76.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _76.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketReceiptAbsenceData;
                    fromJSON(object: any): _76.PacketReceiptAbsenceData;
                    toJSON(message: _76.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_76.PacketReceiptAbsenceData>): _76.PacketReceiptAbsenceData;
                    fromAmino(object: _76.PacketReceiptAbsenceDataAmino): _76.PacketReceiptAbsenceData;
                    toAmino(message: _76.PacketReceiptAbsenceData): _76.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _76.PacketReceiptAbsenceDataAminoMsg): _76.PacketReceiptAbsenceData;
                    toAminoMsg(message: _76.PacketReceiptAbsenceData): _76.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _76.PacketReceiptAbsenceDataProtoMsg): _76.PacketReceiptAbsenceData;
                    toProto(message: _76.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _76.PacketReceiptAbsenceData): _76.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _76.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.NextSequenceRecvData;
                    fromJSON(object: any): _76.NextSequenceRecvData;
                    toJSON(message: _76.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_76.NextSequenceRecvData>): _76.NextSequenceRecvData;
                    fromAmino(object: _76.NextSequenceRecvDataAmino): _76.NextSequenceRecvData;
                    toAmino(message: _76.NextSequenceRecvData): _76.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _76.NextSequenceRecvDataAminoMsg): _76.NextSequenceRecvData;
                    toAminoMsg(message: _76.NextSequenceRecvData): _76.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _76.NextSequenceRecvDataProtoMsg): _76.NextSequenceRecvData;
                    toProto(message: _76.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _76.NextSequenceRecvData): _76.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _77.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ClientState;
                    fromJSON(object: any): _77.ClientState;
                    toJSON(message: _77.ClientState): unknown;
                    fromPartial(object: Partial<_77.ClientState>): _77.ClientState;
                    fromAmino(object: _77.ClientStateAmino): _77.ClientState;
                    toAmino(message: _77.ClientState): _77.ClientStateAmino;
                    fromAminoMsg(object: _77.ClientStateAminoMsg): _77.ClientState;
                    toAminoMsg(message: _77.ClientState): _77.ClientStateAminoMsg;
                    fromProtoMsg(message: _77.ClientStateProtoMsg): _77.ClientState;
                    toProto(message: _77.ClientState): Uint8Array;
                    toProtoMsg(message: _77.ClientState): _77.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _77.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConsensusState;
                    fromJSON(object: any): _77.ConsensusState;
                    toJSON(message: _77.ConsensusState): unknown;
                    fromPartial(object: Partial<_77.ConsensusState>): _77.ConsensusState;
                    fromAmino(object: _77.ConsensusStateAmino): _77.ConsensusState;
                    toAmino(message: _77.ConsensusState): _77.ConsensusStateAmino;
                    fromAminoMsg(object: _77.ConsensusStateAminoMsg): _77.ConsensusState;
                    toAminoMsg(message: _77.ConsensusState): _77.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _77.ConsensusStateProtoMsg): _77.ConsensusState;
                    toProto(message: _77.ConsensusState): Uint8Array;
                    toProtoMsg(message: _77.ConsensusState): _77.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _77.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Misbehaviour;
                    fromJSON(object: any): _77.Misbehaviour;
                    toJSON(message: _77.Misbehaviour): unknown;
                    fromPartial(object: Partial<_77.Misbehaviour>): _77.Misbehaviour;
                    fromAmino(object: _77.MisbehaviourAmino): _77.Misbehaviour;
                    toAmino(message: _77.Misbehaviour): _77.MisbehaviourAmino;
                    fromAminoMsg(object: _77.MisbehaviourAminoMsg): _77.Misbehaviour;
                    toAminoMsg(message: _77.Misbehaviour): _77.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _77.MisbehaviourProtoMsg): _77.Misbehaviour;
                    toProto(message: _77.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _77.Misbehaviour): _77.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _77.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Header;
                    fromJSON(object: any): _77.Header;
                    toJSON(message: _77.Header): unknown;
                    fromPartial(object: Partial<_77.Header>): _77.Header;
                    fromAmino(object: _77.HeaderAmino): _77.Header;
                    toAmino(message: _77.Header): _77.HeaderAmino;
                    fromAminoMsg(object: _77.HeaderAminoMsg): _77.Header;
                    toAminoMsg(message: _77.Header): _77.HeaderAminoMsg;
                    fromProtoMsg(message: _77.HeaderProtoMsg): _77.Header;
                    toProto(message: _77.Header): Uint8Array;
                    toProtoMsg(message: _77.Header): _77.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _77.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Fraction;
                    fromJSON(object: any): _77.Fraction;
                    toJSON(message: _77.Fraction): unknown;
                    fromPartial(object: Partial<_77.Fraction>): _77.Fraction;
                    fromAmino(object: _77.FractionAmino): _77.Fraction;
                    toAmino(message: _77.Fraction): _77.FractionAmino;
                    fromAminoMsg(object: _77.FractionAminoMsg): _77.Fraction;
                    toAminoMsg(message: _77.Fraction): _77.FractionAminoMsg;
                    fromProtoMsg(message: _77.FractionProtoMsg): _77.Fraction;
                    toProto(message: _77.Fraction): Uint8Array;
                    toProtoMsg(message: _77.Fraction): _77.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _181.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _182.MsgClientImpl;
                    };
                    client: {
                        v1: _183.MsgClientImpl;
                    };
                    connection: {
                        v1: _184.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _57.QueryDenomTraceRequest): Promise<_57.QueryDenomTraceResponse>;
                            denomTraces(request?: _57.QueryDenomTracesRequest): Promise<_57.QueryDenomTracesResponse>;
                            params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _63.QueryChannelRequest): Promise<_63.QueryChannelResponse>;
                            channels(request?: _63.QueryChannelsRequest): Promise<_63.QueryChannelsResponse>;
                            connectionChannels(request: _63.QueryConnectionChannelsRequest): Promise<_63.QueryConnectionChannelsResponse>;
                            channelClientState(request: _63.QueryChannelClientStateRequest): Promise<_63.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _63.QueryChannelConsensusStateRequest): Promise<_63.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _63.QueryPacketCommitmentRequest): Promise<_63.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _63.QueryPacketCommitmentsRequest): Promise<_63.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _63.QueryPacketReceiptRequest): Promise<_63.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _63.QueryPacketAcknowledgementRequest): Promise<_63.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _63.QueryPacketAcknowledgementsRequest): Promise<_63.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _63.QueryUnreceivedPacketsRequest): Promise<_63.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _63.QueryUnreceivedAcksRequest): Promise<_63.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _63.QueryNextSequenceReceiveRequest): Promise<_63.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _67.QueryClientStateRequest): Promise<_67.QueryClientStateResponse>;
                            clientStates(request?: _67.QueryClientStatesRequest): Promise<_67.QueryClientStatesResponse>;
                            consensusState(request: _67.QueryConsensusStateRequest): Promise<_67.QueryConsensusStateResponse>;
                            consensusStates(request: _67.QueryConsensusStatesRequest): Promise<_67.QueryConsensusStatesResponse>;
                            clientStatus(request: _67.QueryClientStatusRequest): Promise<_67.QueryClientStatusResponse>;
                            clientParams(request?: _67.QueryClientParamsRequest): Promise<_67.QueryClientParamsResponse>;
                            upgradedClientState(request?: _67.QueryUpgradedClientStateRequest): Promise<_67.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _67.QueryUpgradedConsensusStateRequest): Promise<_67.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _72.QueryConnectionRequest): Promise<_72.QueryConnectionResponse>;
                            connections(request?: _72.QueryConnectionsRequest): Promise<_72.QueryConnectionsResponse>;
                            clientConnections(request: _72.QueryClientConnectionsRequest): Promise<_72.QueryClientConnectionsResponse>;
                            connectionClientState(request: _72.QueryConnectionClientStateRequest): Promise<_72.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _72.QueryConnectionConsensusStateRequest): Promise<_72.QueryConnectionConsensusStateResponse>;
                        };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _173.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _174.LCDQueryClient;
                    };
                    client: {
                        v1: _175.LCDQueryClient;
                    };
                    connection: {
                        v1: _176.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
