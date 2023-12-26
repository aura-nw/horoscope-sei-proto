import * as _182 from "./applications/transfer/v1/genesis";
import * as _183 from "./applications/transfer/v1/query";
import * as _184 from "./applications/transfer/v1/transfer";
import * as _185 from "./applications/transfer/v1/tx";
import * as _186 from "./applications/transfer/v2/packet";
import * as _187 from "./core/channel/v1/channel";
import * as _188 from "./core/channel/v1/genesis";
import * as _189 from "./core/channel/v1/query";
import * as _190 from "./core/channel/v1/tx";
import * as _191 from "./core/client/v1/client";
import * as _192 from "./core/client/v1/genesis";
import * as _193 from "./core/client/v1/query";
import * as _194 from "./core/client/v1/tx";
import * as _195 from "./core/commitment/v1/commitment";
import * as _196 from "./core/connection/v1/connection";
import * as _197 from "./core/connection/v1/genesis";
import * as _198 from "./core/connection/v1/query";
import * as _199 from "./core/connection/v1/tx";
import * as _200 from "./core/port/v1/query";
import * as _201 from "./core/types/v1/genesis";
import * as _202 from "./lightclients/localhost/v1/localhost";
import * as _203 from "./lightclients/solomachine/v1/solomachine";
import * as _204 from "./lightclients/solomachine/v2/solomachine";
import * as _205 from "./lightclients/tendermint/v1/tendermint";
import * as _345 from "./applications/transfer/v1/query.lcd";
import * as _346 from "./core/channel/v1/query.lcd";
import * as _347 from "./core/client/v1/query.lcd";
import * as _348 from "./core/connection/v1/query.lcd";
import * as _349 from "./applications/transfer/v1/query.rpc.Query";
import * as _350 from "./core/channel/v1/query.rpc.Query";
import * as _351 from "./core/client/v1/query.rpc.Query";
import * as _352 from "./core/connection/v1/query.rpc.Query";
import * as _353 from "./core/port/v1/query.rpc.Query";
import * as _354 from "./applications/transfer/v1/tx.rpc.msg";
import * as _355 from "./core/channel/v1/tx.rpc.msg";
import * as _356 from "./core/client/v1/tx.rpc.msg";
import * as _357 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _354.MsgClientImpl;
                QueryClientImpl: typeof _349.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _183.QueryDenomTraceRequest): Promise<_183.QueryDenomTraceResponse>;
                    denomTraces(request?: _183.QueryDenomTracesRequest): Promise<_183.QueryDenomTracesResponse>;
                    params(request?: _183.QueryParamsRequest): Promise<_183.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _345.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _185.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _185.MsgTransfer): {
                            typeUrl: string;
                            value: _185.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _185.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _185.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _185.MsgTransfer): {
                            typeUrl: string;
                            value: _185.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _185.MsgTransfer) => _185.MsgTransferAmino;
                        fromAmino: (object: _185.MsgTransferAmino) => _185.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _185.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgTransfer;
                    fromJSON(object: any): _185.MsgTransfer;
                    toJSON(message: _185.MsgTransfer): unknown;
                    fromPartial(object: Partial<_185.MsgTransfer>): _185.MsgTransfer;
                    fromAmino(object: _185.MsgTransferAmino): _185.MsgTransfer;
                    toAmino(message: _185.MsgTransfer): _185.MsgTransferAmino;
                    fromAminoMsg(object: _185.MsgTransferAminoMsg): _185.MsgTransfer;
                    toAminoMsg(message: _185.MsgTransfer): _185.MsgTransferAminoMsg;
                    fromProtoMsg(message: _185.MsgTransferProtoMsg): _185.MsgTransfer;
                    toProto(message: _185.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _185.MsgTransfer): _185.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _185.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgTransferResponse;
                    fromJSON(_: any): _185.MsgTransferResponse;
                    toJSON(_: _185.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_185.MsgTransferResponse>): _185.MsgTransferResponse;
                    fromAmino(_: _185.MsgTransferResponseAmino): _185.MsgTransferResponse;
                    toAmino(_: _185.MsgTransferResponse): _185.MsgTransferResponseAmino;
                    fromAminoMsg(object: _185.MsgTransferResponseAminoMsg): _185.MsgTransferResponse;
                    toAminoMsg(message: _185.MsgTransferResponse): _185.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _185.MsgTransferResponseProtoMsg): _185.MsgTransferResponse;
                    toProto(message: _185.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _185.MsgTransferResponse): _185.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _184.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.DenomTrace;
                    fromJSON(object: any): _184.DenomTrace;
                    toJSON(message: _184.DenomTrace): unknown;
                    fromPartial(object: Partial<_184.DenomTrace>): _184.DenomTrace;
                    fromAmino(object: _184.DenomTraceAmino): _184.DenomTrace;
                    toAmino(message: _184.DenomTrace): _184.DenomTraceAmino;
                    fromAminoMsg(object: _184.DenomTraceAminoMsg): _184.DenomTrace;
                    toAminoMsg(message: _184.DenomTrace): _184.DenomTraceAminoMsg;
                    fromProtoMsg(message: _184.DenomTraceProtoMsg): _184.DenomTrace;
                    toProto(message: _184.DenomTrace): Uint8Array;
                    toProtoMsg(message: _184.DenomTrace): _184.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _184.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Params;
                    fromJSON(object: any): _184.Params;
                    toJSON(message: _184.Params): unknown;
                    fromPartial(object: Partial<_184.Params>): _184.Params;
                    fromAmino(object: _184.ParamsAmino): _184.Params;
                    toAmino(message: _184.Params): _184.ParamsAmino;
                    fromAminoMsg(object: _184.ParamsAminoMsg): _184.Params;
                    toAminoMsg(message: _184.Params): _184.ParamsAminoMsg;
                    fromProtoMsg(message: _184.ParamsProtoMsg): _184.Params;
                    toProto(message: _184.Params): Uint8Array;
                    toProtoMsg(message: _184.Params): _184.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryDenomTraceRequest;
                    fromJSON(object: any): _183.QueryDenomTraceRequest;
                    toJSON(message: _183.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_183.QueryDenomTraceRequest>): _183.QueryDenomTraceRequest;
                    fromAmino(object: _183.QueryDenomTraceRequestAmino): _183.QueryDenomTraceRequest;
                    toAmino(message: _183.QueryDenomTraceRequest): _183.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _183.QueryDenomTraceRequestAminoMsg): _183.QueryDenomTraceRequest;
                    toAminoMsg(message: _183.QueryDenomTraceRequest): _183.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryDenomTraceRequestProtoMsg): _183.QueryDenomTraceRequest;
                    toProto(message: _183.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryDenomTraceRequest): _183.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryDenomTraceResponse;
                    fromJSON(object: any): _183.QueryDenomTraceResponse;
                    toJSON(message: _183.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_183.QueryDenomTraceResponse>): _183.QueryDenomTraceResponse;
                    fromAmino(object: _183.QueryDenomTraceResponseAmino): _183.QueryDenomTraceResponse;
                    toAmino(message: _183.QueryDenomTraceResponse): _183.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _183.QueryDenomTraceResponseAminoMsg): _183.QueryDenomTraceResponse;
                    toAminoMsg(message: _183.QueryDenomTraceResponse): _183.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryDenomTraceResponseProtoMsg): _183.QueryDenomTraceResponse;
                    toProto(message: _183.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryDenomTraceResponse): _183.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryDenomTracesRequest;
                    fromJSON(object: any): _183.QueryDenomTracesRequest;
                    toJSON(message: _183.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_183.QueryDenomTracesRequest>): _183.QueryDenomTracesRequest;
                    fromAmino(object: _183.QueryDenomTracesRequestAmino): _183.QueryDenomTracesRequest;
                    toAmino(message: _183.QueryDenomTracesRequest): _183.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _183.QueryDenomTracesRequestAminoMsg): _183.QueryDenomTracesRequest;
                    toAminoMsg(message: _183.QueryDenomTracesRequest): _183.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryDenomTracesRequestProtoMsg): _183.QueryDenomTracesRequest;
                    toProto(message: _183.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryDenomTracesRequest): _183.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryDenomTracesResponse;
                    fromJSON(object: any): _183.QueryDenomTracesResponse;
                    toJSON(message: _183.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_183.QueryDenomTracesResponse>): _183.QueryDenomTracesResponse;
                    fromAmino(object: _183.QueryDenomTracesResponseAmino): _183.QueryDenomTracesResponse;
                    toAmino(message: _183.QueryDenomTracesResponse): _183.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _183.QueryDenomTracesResponseAminoMsg): _183.QueryDenomTracesResponse;
                    toAminoMsg(message: _183.QueryDenomTracesResponse): _183.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryDenomTracesResponseProtoMsg): _183.QueryDenomTracesResponse;
                    toProto(message: _183.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryDenomTracesResponse): _183.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _183.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryParamsRequest;
                    fromJSON(_: any): _183.QueryParamsRequest;
                    toJSON(_: _183.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_183.QueryParamsRequest>): _183.QueryParamsRequest;
                    fromAmino(_: _183.QueryParamsRequestAmino): _183.QueryParamsRequest;
                    toAmino(_: _183.QueryParamsRequest): _183.QueryParamsRequestAmino;
                    fromAminoMsg(object: _183.QueryParamsRequestAminoMsg): _183.QueryParamsRequest;
                    toAminoMsg(message: _183.QueryParamsRequest): _183.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryParamsRequestProtoMsg): _183.QueryParamsRequest;
                    toProto(message: _183.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryParamsRequest): _183.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryParamsResponse;
                    fromJSON(object: any): _183.QueryParamsResponse;
                    toJSON(message: _183.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_183.QueryParamsResponse>): _183.QueryParamsResponse;
                    fromAmino(object: _183.QueryParamsResponseAmino): _183.QueryParamsResponse;
                    toAmino(message: _183.QueryParamsResponse): _183.QueryParamsResponseAmino;
                    fromAminoMsg(object: _183.QueryParamsResponseAminoMsg): _183.QueryParamsResponse;
                    toAminoMsg(message: _183.QueryParamsResponse): _183.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryParamsResponseProtoMsg): _183.QueryParamsResponse;
                    toProto(message: _183.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryParamsResponse): _183.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _182.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.GenesisState;
                    fromJSON(object: any): _182.GenesisState;
                    toJSON(message: _182.GenesisState): unknown;
                    fromPartial(object: Partial<_182.GenesisState>): _182.GenesisState;
                    fromAmino(object: _182.GenesisStateAmino): _182.GenesisState;
                    toAmino(message: _182.GenesisState): _182.GenesisStateAmino;
                    fromAminoMsg(object: _182.GenesisStateAminoMsg): _182.GenesisState;
                    toAminoMsg(message: _182.GenesisState): _182.GenesisStateAminoMsg;
                    fromProtoMsg(message: _182.GenesisStateProtoMsg): _182.GenesisState;
                    toProto(message: _182.GenesisState): Uint8Array;
                    toProtoMsg(message: _182.GenesisState): _182.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _186.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.FungibleTokenPacketData;
                    fromJSON(object: any): _186.FungibleTokenPacketData;
                    toJSON(message: _186.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_186.FungibleTokenPacketData>): _186.FungibleTokenPacketData;
                    fromAmino(object: _186.FungibleTokenPacketDataAmino): _186.FungibleTokenPacketData;
                    toAmino(message: _186.FungibleTokenPacketData): _186.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _186.FungibleTokenPacketDataAminoMsg): _186.FungibleTokenPacketData;
                    toAminoMsg(message: _186.FungibleTokenPacketData): _186.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _186.FungibleTokenPacketDataProtoMsg): _186.FungibleTokenPacketData;
                    toProto(message: _186.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _186.FungibleTokenPacketData): _186.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _355.MsgClientImpl;
                QueryClientImpl: typeof _350.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _189.QueryChannelRequest): Promise<_189.QueryChannelResponse>;
                    channels(request?: _189.QueryChannelsRequest): Promise<_189.QueryChannelsResponse>;
                    connectionChannels(request: _189.QueryConnectionChannelsRequest): Promise<_189.QueryConnectionChannelsResponse>;
                    channelClientState(request: _189.QueryChannelClientStateRequest): Promise<_189.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _189.QueryChannelConsensusStateRequest): Promise<_189.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _189.QueryPacketCommitmentRequest): Promise<_189.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _189.QueryPacketCommitmentsRequest): Promise<_189.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _189.QueryPacketReceiptRequest): Promise<_189.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _189.QueryPacketAcknowledgementRequest): Promise<_189.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _189.QueryPacketAcknowledgementsRequest): Promise<_189.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _189.QueryUnreceivedPacketsRequest): Promise<_189.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _189.QueryUnreceivedAcksRequest): Promise<_189.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _189.QueryNextSequenceReceiveRequest): Promise<_189.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _346.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _190.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _190.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _190.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _190.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _190.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _190.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _190.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _190.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _190.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _190.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _190.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _190.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _190.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _190.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _190.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _190.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _190.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _190.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _190.MsgRecvPacket): {
                            typeUrl: string;
                            value: _190.MsgRecvPacket;
                        };
                        timeout(value: _190.MsgTimeout): {
                            typeUrl: string;
                            value: _190.MsgTimeout;
                        };
                        timeoutOnClose(value: _190.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _190.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _190.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _190.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _190.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _190.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _190.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _190.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _190.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _190.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _190.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _190.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _190.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _190.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _190.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _190.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _190.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _190.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _190.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _190.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _190.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _190.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _190.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _190.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _190.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _190.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _190.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _190.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _190.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _190.MsgRecvPacket): {
                            typeUrl: string;
                            value: _190.MsgRecvPacket;
                        };
                        timeout(value: _190.MsgTimeout): {
                            typeUrl: string;
                            value: _190.MsgTimeout;
                        };
                        timeoutOnClose(value: _190.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _190.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _190.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _190.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _190.MsgChannelOpenInit) => _190.MsgChannelOpenInitAmino;
                        fromAmino: (object: _190.MsgChannelOpenInitAmino) => _190.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _190.MsgChannelOpenTry) => _190.MsgChannelOpenTryAmino;
                        fromAmino: (object: _190.MsgChannelOpenTryAmino) => _190.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _190.MsgChannelOpenAck) => _190.MsgChannelOpenAckAmino;
                        fromAmino: (object: _190.MsgChannelOpenAckAmino) => _190.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _190.MsgChannelOpenConfirm) => _190.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _190.MsgChannelOpenConfirmAmino) => _190.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _190.MsgChannelCloseInit) => _190.MsgChannelCloseInitAmino;
                        fromAmino: (object: _190.MsgChannelCloseInitAmino) => _190.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _190.MsgChannelCloseConfirm) => _190.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _190.MsgChannelCloseConfirmAmino) => _190.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _190.MsgRecvPacket) => _190.MsgRecvPacketAmino;
                        fromAmino: (object: _190.MsgRecvPacketAmino) => _190.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _190.MsgTimeout) => _190.MsgTimeoutAmino;
                        fromAmino: (object: _190.MsgTimeoutAmino) => _190.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _190.MsgTimeoutOnClose) => _190.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _190.MsgTimeoutOnCloseAmino) => _190.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _190.MsgAcknowledgement) => _190.MsgAcknowledgementAmino;
                        fromAmino: (object: _190.MsgAcknowledgementAmino) => _190.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _190.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelOpenInit;
                    fromJSON(object: any): _190.MsgChannelOpenInit;
                    toJSON(message: _190.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_190.MsgChannelOpenInit>): _190.MsgChannelOpenInit;
                    fromAmino(object: _190.MsgChannelOpenInitAmino): _190.MsgChannelOpenInit;
                    toAmino(message: _190.MsgChannelOpenInit): _190.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _190.MsgChannelOpenInitAminoMsg): _190.MsgChannelOpenInit;
                    toAminoMsg(message: _190.MsgChannelOpenInit): _190.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelOpenInitProtoMsg): _190.MsgChannelOpenInit;
                    toProto(message: _190.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelOpenInit): _190.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _190.MsgChannelOpenInitResponse;
                    toJSON(_: _190.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_190.MsgChannelOpenInitResponse>): _190.MsgChannelOpenInitResponse;
                    fromAmino(_: _190.MsgChannelOpenInitResponseAmino): _190.MsgChannelOpenInitResponse;
                    toAmino(_: _190.MsgChannelOpenInitResponse): _190.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _190.MsgChannelOpenInitResponseAminoMsg): _190.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _190.MsgChannelOpenInitResponse): _190.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelOpenInitResponseProtoMsg): _190.MsgChannelOpenInitResponse;
                    toProto(message: _190.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelOpenInitResponse): _190.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _190.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelOpenTry;
                    fromJSON(object: any): _190.MsgChannelOpenTry;
                    toJSON(message: _190.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_190.MsgChannelOpenTry>): _190.MsgChannelOpenTry;
                    fromAmino(object: _190.MsgChannelOpenTryAmino): _190.MsgChannelOpenTry;
                    toAmino(message: _190.MsgChannelOpenTry): _190.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _190.MsgChannelOpenTryAminoMsg): _190.MsgChannelOpenTry;
                    toAminoMsg(message: _190.MsgChannelOpenTry): _190.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelOpenTryProtoMsg): _190.MsgChannelOpenTry;
                    toProto(message: _190.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelOpenTry): _190.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _190.MsgChannelOpenTryResponse;
                    toJSON(_: _190.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_190.MsgChannelOpenTryResponse>): _190.MsgChannelOpenTryResponse;
                    fromAmino(_: _190.MsgChannelOpenTryResponseAmino): _190.MsgChannelOpenTryResponse;
                    toAmino(_: _190.MsgChannelOpenTryResponse): _190.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _190.MsgChannelOpenTryResponseAminoMsg): _190.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _190.MsgChannelOpenTryResponse): _190.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelOpenTryResponseProtoMsg): _190.MsgChannelOpenTryResponse;
                    toProto(message: _190.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelOpenTryResponse): _190.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _190.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelOpenAck;
                    fromJSON(object: any): _190.MsgChannelOpenAck;
                    toJSON(message: _190.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_190.MsgChannelOpenAck>): _190.MsgChannelOpenAck;
                    fromAmino(object: _190.MsgChannelOpenAckAmino): _190.MsgChannelOpenAck;
                    toAmino(message: _190.MsgChannelOpenAck): _190.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _190.MsgChannelOpenAckAminoMsg): _190.MsgChannelOpenAck;
                    toAminoMsg(message: _190.MsgChannelOpenAck): _190.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelOpenAckProtoMsg): _190.MsgChannelOpenAck;
                    toProto(message: _190.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelOpenAck): _190.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _190.MsgChannelOpenAckResponse;
                    toJSON(_: _190.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_190.MsgChannelOpenAckResponse>): _190.MsgChannelOpenAckResponse;
                    fromAmino(_: _190.MsgChannelOpenAckResponseAmino): _190.MsgChannelOpenAckResponse;
                    toAmino(_: _190.MsgChannelOpenAckResponse): _190.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _190.MsgChannelOpenAckResponseAminoMsg): _190.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _190.MsgChannelOpenAckResponse): _190.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelOpenAckResponseProtoMsg): _190.MsgChannelOpenAckResponse;
                    toProto(message: _190.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelOpenAckResponse): _190.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _190.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelOpenConfirm;
                    fromJSON(object: any): _190.MsgChannelOpenConfirm;
                    toJSON(message: _190.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_190.MsgChannelOpenConfirm>): _190.MsgChannelOpenConfirm;
                    fromAmino(object: _190.MsgChannelOpenConfirmAmino): _190.MsgChannelOpenConfirm;
                    toAmino(message: _190.MsgChannelOpenConfirm): _190.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _190.MsgChannelOpenConfirmAminoMsg): _190.MsgChannelOpenConfirm;
                    toAminoMsg(message: _190.MsgChannelOpenConfirm): _190.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelOpenConfirmProtoMsg): _190.MsgChannelOpenConfirm;
                    toProto(message: _190.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelOpenConfirm): _190.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _190.MsgChannelOpenConfirmResponse;
                    toJSON(_: _190.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_190.MsgChannelOpenConfirmResponse>): _190.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _190.MsgChannelOpenConfirmResponseAmino): _190.MsgChannelOpenConfirmResponse;
                    toAmino(_: _190.MsgChannelOpenConfirmResponse): _190.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _190.MsgChannelOpenConfirmResponseAminoMsg): _190.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _190.MsgChannelOpenConfirmResponse): _190.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelOpenConfirmResponseProtoMsg): _190.MsgChannelOpenConfirmResponse;
                    toProto(message: _190.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelOpenConfirmResponse): _190.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _190.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelCloseInit;
                    fromJSON(object: any): _190.MsgChannelCloseInit;
                    toJSON(message: _190.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_190.MsgChannelCloseInit>): _190.MsgChannelCloseInit;
                    fromAmino(object: _190.MsgChannelCloseInitAmino): _190.MsgChannelCloseInit;
                    toAmino(message: _190.MsgChannelCloseInit): _190.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _190.MsgChannelCloseInitAminoMsg): _190.MsgChannelCloseInit;
                    toAminoMsg(message: _190.MsgChannelCloseInit): _190.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelCloseInitProtoMsg): _190.MsgChannelCloseInit;
                    toProto(message: _190.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelCloseInit): _190.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _190.MsgChannelCloseInitResponse;
                    toJSON(_: _190.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_190.MsgChannelCloseInitResponse>): _190.MsgChannelCloseInitResponse;
                    fromAmino(_: _190.MsgChannelCloseInitResponseAmino): _190.MsgChannelCloseInitResponse;
                    toAmino(_: _190.MsgChannelCloseInitResponse): _190.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _190.MsgChannelCloseInitResponseAminoMsg): _190.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _190.MsgChannelCloseInitResponse): _190.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelCloseInitResponseProtoMsg): _190.MsgChannelCloseInitResponse;
                    toProto(message: _190.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelCloseInitResponse): _190.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _190.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelCloseConfirm;
                    fromJSON(object: any): _190.MsgChannelCloseConfirm;
                    toJSON(message: _190.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_190.MsgChannelCloseConfirm>): _190.MsgChannelCloseConfirm;
                    fromAmino(object: _190.MsgChannelCloseConfirmAmino): _190.MsgChannelCloseConfirm;
                    toAmino(message: _190.MsgChannelCloseConfirm): _190.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _190.MsgChannelCloseConfirmAminoMsg): _190.MsgChannelCloseConfirm;
                    toAminoMsg(message: _190.MsgChannelCloseConfirm): _190.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelCloseConfirmProtoMsg): _190.MsgChannelCloseConfirm;
                    toProto(message: _190.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelCloseConfirm): _190.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _190.MsgChannelCloseConfirmResponse;
                    toJSON(_: _190.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_190.MsgChannelCloseConfirmResponse>): _190.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _190.MsgChannelCloseConfirmResponseAmino): _190.MsgChannelCloseConfirmResponse;
                    toAmino(_: _190.MsgChannelCloseConfirmResponse): _190.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _190.MsgChannelCloseConfirmResponseAminoMsg): _190.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _190.MsgChannelCloseConfirmResponse): _190.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgChannelCloseConfirmResponseProtoMsg): _190.MsgChannelCloseConfirmResponse;
                    toProto(message: _190.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgChannelCloseConfirmResponse): _190.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _190.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgRecvPacket;
                    fromJSON(object: any): _190.MsgRecvPacket;
                    toJSON(message: _190.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_190.MsgRecvPacket>): _190.MsgRecvPacket;
                    fromAmino(object: _190.MsgRecvPacketAmino): _190.MsgRecvPacket;
                    toAmino(message: _190.MsgRecvPacket): _190.MsgRecvPacketAmino;
                    fromAminoMsg(object: _190.MsgRecvPacketAminoMsg): _190.MsgRecvPacket;
                    toAminoMsg(message: _190.MsgRecvPacket): _190.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _190.MsgRecvPacketProtoMsg): _190.MsgRecvPacket;
                    toProto(message: _190.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _190.MsgRecvPacket): _190.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgRecvPacketResponse;
                    fromJSON(_: any): _190.MsgRecvPacketResponse;
                    toJSON(_: _190.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_190.MsgRecvPacketResponse>): _190.MsgRecvPacketResponse;
                    fromAmino(_: _190.MsgRecvPacketResponseAmino): _190.MsgRecvPacketResponse;
                    toAmino(_: _190.MsgRecvPacketResponse): _190.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _190.MsgRecvPacketResponseAminoMsg): _190.MsgRecvPacketResponse;
                    toAminoMsg(message: _190.MsgRecvPacketResponse): _190.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgRecvPacketResponseProtoMsg): _190.MsgRecvPacketResponse;
                    toProto(message: _190.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgRecvPacketResponse): _190.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _190.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgTimeout;
                    fromJSON(object: any): _190.MsgTimeout;
                    toJSON(message: _190.MsgTimeout): unknown;
                    fromPartial(object: Partial<_190.MsgTimeout>): _190.MsgTimeout;
                    fromAmino(object: _190.MsgTimeoutAmino): _190.MsgTimeout;
                    toAmino(message: _190.MsgTimeout): _190.MsgTimeoutAmino;
                    fromAminoMsg(object: _190.MsgTimeoutAminoMsg): _190.MsgTimeout;
                    toAminoMsg(message: _190.MsgTimeout): _190.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _190.MsgTimeoutProtoMsg): _190.MsgTimeout;
                    toProto(message: _190.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _190.MsgTimeout): _190.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgTimeoutResponse;
                    fromJSON(_: any): _190.MsgTimeoutResponse;
                    toJSON(_: _190.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_190.MsgTimeoutResponse>): _190.MsgTimeoutResponse;
                    fromAmino(_: _190.MsgTimeoutResponseAmino): _190.MsgTimeoutResponse;
                    toAmino(_: _190.MsgTimeoutResponse): _190.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _190.MsgTimeoutResponseAminoMsg): _190.MsgTimeoutResponse;
                    toAminoMsg(message: _190.MsgTimeoutResponse): _190.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgTimeoutResponseProtoMsg): _190.MsgTimeoutResponse;
                    toProto(message: _190.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgTimeoutResponse): _190.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _190.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgTimeoutOnClose;
                    fromJSON(object: any): _190.MsgTimeoutOnClose;
                    toJSON(message: _190.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_190.MsgTimeoutOnClose>): _190.MsgTimeoutOnClose;
                    fromAmino(object: _190.MsgTimeoutOnCloseAmino): _190.MsgTimeoutOnClose;
                    toAmino(message: _190.MsgTimeoutOnClose): _190.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _190.MsgTimeoutOnCloseAminoMsg): _190.MsgTimeoutOnClose;
                    toAminoMsg(message: _190.MsgTimeoutOnClose): _190.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _190.MsgTimeoutOnCloseProtoMsg): _190.MsgTimeoutOnClose;
                    toProto(message: _190.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _190.MsgTimeoutOnClose): _190.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _190.MsgTimeoutOnCloseResponse;
                    toJSON(_: _190.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_190.MsgTimeoutOnCloseResponse>): _190.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _190.MsgTimeoutOnCloseResponseAmino): _190.MsgTimeoutOnCloseResponse;
                    toAmino(_: _190.MsgTimeoutOnCloseResponse): _190.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _190.MsgTimeoutOnCloseResponseAminoMsg): _190.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _190.MsgTimeoutOnCloseResponse): _190.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgTimeoutOnCloseResponseProtoMsg): _190.MsgTimeoutOnCloseResponse;
                    toProto(message: _190.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgTimeoutOnCloseResponse): _190.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _190.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgAcknowledgement;
                    fromJSON(object: any): _190.MsgAcknowledgement;
                    toJSON(message: _190.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_190.MsgAcknowledgement>): _190.MsgAcknowledgement;
                    fromAmino(object: _190.MsgAcknowledgementAmino): _190.MsgAcknowledgement;
                    toAmino(message: _190.MsgAcknowledgement): _190.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _190.MsgAcknowledgementAminoMsg): _190.MsgAcknowledgement;
                    toAminoMsg(message: _190.MsgAcknowledgement): _190.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _190.MsgAcknowledgementProtoMsg): _190.MsgAcknowledgement;
                    toProto(message: _190.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _190.MsgAcknowledgement): _190.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(_: _190.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgAcknowledgementResponse;
                    fromJSON(_: any): _190.MsgAcknowledgementResponse;
                    toJSON(_: _190.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_190.MsgAcknowledgementResponse>): _190.MsgAcknowledgementResponse;
                    fromAmino(_: _190.MsgAcknowledgementResponseAmino): _190.MsgAcknowledgementResponse;
                    toAmino(_: _190.MsgAcknowledgementResponse): _190.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _190.MsgAcknowledgementResponseAminoMsg): _190.MsgAcknowledgementResponse;
                    toAminoMsg(message: _190.MsgAcknowledgementResponse): _190.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _190.MsgAcknowledgementResponseProtoMsg): _190.MsgAcknowledgementResponse;
                    toProto(message: _190.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _190.MsgAcknowledgementResponse): _190.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChannelRequest;
                    fromJSON(object: any): _189.QueryChannelRequest;
                    toJSON(message: _189.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_189.QueryChannelRequest>): _189.QueryChannelRequest;
                    fromAmino(object: _189.QueryChannelRequestAmino): _189.QueryChannelRequest;
                    toAmino(message: _189.QueryChannelRequest): _189.QueryChannelRequestAmino;
                    fromAminoMsg(object: _189.QueryChannelRequestAminoMsg): _189.QueryChannelRequest;
                    toAminoMsg(message: _189.QueryChannelRequest): _189.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryChannelRequestProtoMsg): _189.QueryChannelRequest;
                    toProto(message: _189.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryChannelRequest): _189.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChannelResponse;
                    fromJSON(object: any): _189.QueryChannelResponse;
                    toJSON(message: _189.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_189.QueryChannelResponse>): _189.QueryChannelResponse;
                    fromAmino(object: _189.QueryChannelResponseAmino): _189.QueryChannelResponse;
                    toAmino(message: _189.QueryChannelResponse): _189.QueryChannelResponseAmino;
                    fromAminoMsg(object: _189.QueryChannelResponseAminoMsg): _189.QueryChannelResponse;
                    toAminoMsg(message: _189.QueryChannelResponse): _189.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryChannelResponseProtoMsg): _189.QueryChannelResponse;
                    toProto(message: _189.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryChannelResponse): _189.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChannelsRequest;
                    fromJSON(object: any): _189.QueryChannelsRequest;
                    toJSON(message: _189.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_189.QueryChannelsRequest>): _189.QueryChannelsRequest;
                    fromAmino(object: _189.QueryChannelsRequestAmino): _189.QueryChannelsRequest;
                    toAmino(message: _189.QueryChannelsRequest): _189.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _189.QueryChannelsRequestAminoMsg): _189.QueryChannelsRequest;
                    toAminoMsg(message: _189.QueryChannelsRequest): _189.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryChannelsRequestProtoMsg): _189.QueryChannelsRequest;
                    toProto(message: _189.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryChannelsRequest): _189.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChannelsResponse;
                    fromJSON(object: any): _189.QueryChannelsResponse;
                    toJSON(message: _189.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_189.QueryChannelsResponse>): _189.QueryChannelsResponse;
                    fromAmino(object: _189.QueryChannelsResponseAmino): _189.QueryChannelsResponse;
                    toAmino(message: _189.QueryChannelsResponse): _189.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _189.QueryChannelsResponseAminoMsg): _189.QueryChannelsResponse;
                    toAminoMsg(message: _189.QueryChannelsResponse): _189.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryChannelsResponseProtoMsg): _189.QueryChannelsResponse;
                    toProto(message: _189.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryChannelsResponse): _189.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _189.QueryConnectionChannelsRequest;
                    toJSON(message: _189.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_189.QueryConnectionChannelsRequest>): _189.QueryConnectionChannelsRequest;
                    fromAmino(object: _189.QueryConnectionChannelsRequestAmino): _189.QueryConnectionChannelsRequest;
                    toAmino(message: _189.QueryConnectionChannelsRequest): _189.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _189.QueryConnectionChannelsRequestAminoMsg): _189.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _189.QueryConnectionChannelsRequest): _189.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryConnectionChannelsRequestProtoMsg): _189.QueryConnectionChannelsRequest;
                    toProto(message: _189.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryConnectionChannelsRequest): _189.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _189.QueryConnectionChannelsResponse;
                    toJSON(message: _189.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_189.QueryConnectionChannelsResponse>): _189.QueryConnectionChannelsResponse;
                    fromAmino(object: _189.QueryConnectionChannelsResponseAmino): _189.QueryConnectionChannelsResponse;
                    toAmino(message: _189.QueryConnectionChannelsResponse): _189.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _189.QueryConnectionChannelsResponseAminoMsg): _189.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _189.QueryConnectionChannelsResponse): _189.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryConnectionChannelsResponseProtoMsg): _189.QueryConnectionChannelsResponse;
                    toProto(message: _189.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryConnectionChannelsResponse): _189.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChannelClientStateRequest;
                    fromJSON(object: any): _189.QueryChannelClientStateRequest;
                    toJSON(message: _189.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_189.QueryChannelClientStateRequest>): _189.QueryChannelClientStateRequest;
                    fromAmino(object: _189.QueryChannelClientStateRequestAmino): _189.QueryChannelClientStateRequest;
                    toAmino(message: _189.QueryChannelClientStateRequest): _189.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _189.QueryChannelClientStateRequestAminoMsg): _189.QueryChannelClientStateRequest;
                    toAminoMsg(message: _189.QueryChannelClientStateRequest): _189.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryChannelClientStateRequestProtoMsg): _189.QueryChannelClientStateRequest;
                    toProto(message: _189.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryChannelClientStateRequest): _189.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChannelClientStateResponse;
                    fromJSON(object: any): _189.QueryChannelClientStateResponse;
                    toJSON(message: _189.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_189.QueryChannelClientStateResponse>): _189.QueryChannelClientStateResponse;
                    fromAmino(object: _189.QueryChannelClientStateResponseAmino): _189.QueryChannelClientStateResponse;
                    toAmino(message: _189.QueryChannelClientStateResponse): _189.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _189.QueryChannelClientStateResponseAminoMsg): _189.QueryChannelClientStateResponse;
                    toAminoMsg(message: _189.QueryChannelClientStateResponse): _189.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryChannelClientStateResponseProtoMsg): _189.QueryChannelClientStateResponse;
                    toProto(message: _189.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryChannelClientStateResponse): _189.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _189.QueryChannelConsensusStateRequest;
                    toJSON(message: _189.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_189.QueryChannelConsensusStateRequest>): _189.QueryChannelConsensusStateRequest;
                    fromAmino(object: _189.QueryChannelConsensusStateRequestAmino): _189.QueryChannelConsensusStateRequest;
                    toAmino(message: _189.QueryChannelConsensusStateRequest): _189.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _189.QueryChannelConsensusStateRequestAminoMsg): _189.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _189.QueryChannelConsensusStateRequest): _189.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryChannelConsensusStateRequestProtoMsg): _189.QueryChannelConsensusStateRequest;
                    toProto(message: _189.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryChannelConsensusStateRequest): _189.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _189.QueryChannelConsensusStateResponse;
                    toJSON(message: _189.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_189.QueryChannelConsensusStateResponse>): _189.QueryChannelConsensusStateResponse;
                    fromAmino(object: _189.QueryChannelConsensusStateResponseAmino): _189.QueryChannelConsensusStateResponse;
                    toAmino(message: _189.QueryChannelConsensusStateResponse): _189.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _189.QueryChannelConsensusStateResponseAminoMsg): _189.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _189.QueryChannelConsensusStateResponse): _189.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryChannelConsensusStateResponseProtoMsg): _189.QueryChannelConsensusStateResponse;
                    toProto(message: _189.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryChannelConsensusStateResponse): _189.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _189.QueryPacketCommitmentRequest;
                    toJSON(message: _189.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_189.QueryPacketCommitmentRequest>): _189.QueryPacketCommitmentRequest;
                    fromAmino(object: _189.QueryPacketCommitmentRequestAmino): _189.QueryPacketCommitmentRequest;
                    toAmino(message: _189.QueryPacketCommitmentRequest): _189.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _189.QueryPacketCommitmentRequestAminoMsg): _189.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _189.QueryPacketCommitmentRequest): _189.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketCommitmentRequestProtoMsg): _189.QueryPacketCommitmentRequest;
                    toProto(message: _189.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketCommitmentRequest): _189.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _189.QueryPacketCommitmentResponse;
                    toJSON(message: _189.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_189.QueryPacketCommitmentResponse>): _189.QueryPacketCommitmentResponse;
                    fromAmino(object: _189.QueryPacketCommitmentResponseAmino): _189.QueryPacketCommitmentResponse;
                    toAmino(message: _189.QueryPacketCommitmentResponse): _189.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _189.QueryPacketCommitmentResponseAminoMsg): _189.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _189.QueryPacketCommitmentResponse): _189.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketCommitmentResponseProtoMsg): _189.QueryPacketCommitmentResponse;
                    toProto(message: _189.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketCommitmentResponse): _189.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _189.QueryPacketCommitmentsRequest;
                    toJSON(message: _189.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_189.QueryPacketCommitmentsRequest>): _189.QueryPacketCommitmentsRequest;
                    fromAmino(object: _189.QueryPacketCommitmentsRequestAmino): _189.QueryPacketCommitmentsRequest;
                    toAmino(message: _189.QueryPacketCommitmentsRequest): _189.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _189.QueryPacketCommitmentsRequestAminoMsg): _189.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _189.QueryPacketCommitmentsRequest): _189.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketCommitmentsRequestProtoMsg): _189.QueryPacketCommitmentsRequest;
                    toProto(message: _189.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketCommitmentsRequest): _189.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _189.QueryPacketCommitmentsResponse;
                    toJSON(message: _189.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_189.QueryPacketCommitmentsResponse>): _189.QueryPacketCommitmentsResponse;
                    fromAmino(object: _189.QueryPacketCommitmentsResponseAmino): _189.QueryPacketCommitmentsResponse;
                    toAmino(message: _189.QueryPacketCommitmentsResponse): _189.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _189.QueryPacketCommitmentsResponseAminoMsg): _189.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _189.QueryPacketCommitmentsResponse): _189.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketCommitmentsResponseProtoMsg): _189.QueryPacketCommitmentsResponse;
                    toProto(message: _189.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketCommitmentsResponse): _189.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketReceiptRequest;
                    fromJSON(object: any): _189.QueryPacketReceiptRequest;
                    toJSON(message: _189.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_189.QueryPacketReceiptRequest>): _189.QueryPacketReceiptRequest;
                    fromAmino(object: _189.QueryPacketReceiptRequestAmino): _189.QueryPacketReceiptRequest;
                    toAmino(message: _189.QueryPacketReceiptRequest): _189.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _189.QueryPacketReceiptRequestAminoMsg): _189.QueryPacketReceiptRequest;
                    toAminoMsg(message: _189.QueryPacketReceiptRequest): _189.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketReceiptRequestProtoMsg): _189.QueryPacketReceiptRequest;
                    toProto(message: _189.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketReceiptRequest): _189.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketReceiptResponse;
                    fromJSON(object: any): _189.QueryPacketReceiptResponse;
                    toJSON(message: _189.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_189.QueryPacketReceiptResponse>): _189.QueryPacketReceiptResponse;
                    fromAmino(object: _189.QueryPacketReceiptResponseAmino): _189.QueryPacketReceiptResponse;
                    toAmino(message: _189.QueryPacketReceiptResponse): _189.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _189.QueryPacketReceiptResponseAminoMsg): _189.QueryPacketReceiptResponse;
                    toAminoMsg(message: _189.QueryPacketReceiptResponse): _189.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketReceiptResponseProtoMsg): _189.QueryPacketReceiptResponse;
                    toProto(message: _189.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketReceiptResponse): _189.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _189.QueryPacketAcknowledgementRequest;
                    toJSON(message: _189.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_189.QueryPacketAcknowledgementRequest>): _189.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _189.QueryPacketAcknowledgementRequestAmino): _189.QueryPacketAcknowledgementRequest;
                    toAmino(message: _189.QueryPacketAcknowledgementRequest): _189.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _189.QueryPacketAcknowledgementRequestAminoMsg): _189.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _189.QueryPacketAcknowledgementRequest): _189.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketAcknowledgementRequestProtoMsg): _189.QueryPacketAcknowledgementRequest;
                    toProto(message: _189.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketAcknowledgementRequest): _189.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _189.QueryPacketAcknowledgementResponse;
                    toJSON(message: _189.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_189.QueryPacketAcknowledgementResponse>): _189.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _189.QueryPacketAcknowledgementResponseAmino): _189.QueryPacketAcknowledgementResponse;
                    toAmino(message: _189.QueryPacketAcknowledgementResponse): _189.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _189.QueryPacketAcknowledgementResponseAminoMsg): _189.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _189.QueryPacketAcknowledgementResponse): _189.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketAcknowledgementResponseProtoMsg): _189.QueryPacketAcknowledgementResponse;
                    toProto(message: _189.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketAcknowledgementResponse): _189.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _189.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _189.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_189.QueryPacketAcknowledgementsRequest>): _189.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _189.QueryPacketAcknowledgementsRequestAmino): _189.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _189.QueryPacketAcknowledgementsRequest): _189.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _189.QueryPacketAcknowledgementsRequestAminoMsg): _189.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _189.QueryPacketAcknowledgementsRequest): _189.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketAcknowledgementsRequestProtoMsg): _189.QueryPacketAcknowledgementsRequest;
                    toProto(message: _189.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketAcknowledgementsRequest): _189.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _189.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _189.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_189.QueryPacketAcknowledgementsResponse>): _189.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _189.QueryPacketAcknowledgementsResponseAmino): _189.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _189.QueryPacketAcknowledgementsResponse): _189.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _189.QueryPacketAcknowledgementsResponseAminoMsg): _189.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _189.QueryPacketAcknowledgementsResponse): _189.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryPacketAcknowledgementsResponseProtoMsg): _189.QueryPacketAcknowledgementsResponse;
                    toProto(message: _189.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryPacketAcknowledgementsResponse): _189.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _189.QueryUnreceivedPacketsRequest;
                    toJSON(message: _189.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_189.QueryUnreceivedPacketsRequest>): _189.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _189.QueryUnreceivedPacketsRequestAmino): _189.QueryUnreceivedPacketsRequest;
                    toAmino(message: _189.QueryUnreceivedPacketsRequest): _189.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _189.QueryUnreceivedPacketsRequestAminoMsg): _189.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _189.QueryUnreceivedPacketsRequest): _189.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryUnreceivedPacketsRequestProtoMsg): _189.QueryUnreceivedPacketsRequest;
                    toProto(message: _189.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryUnreceivedPacketsRequest): _189.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _189.QueryUnreceivedPacketsResponse;
                    toJSON(message: _189.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_189.QueryUnreceivedPacketsResponse>): _189.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _189.QueryUnreceivedPacketsResponseAmino): _189.QueryUnreceivedPacketsResponse;
                    toAmino(message: _189.QueryUnreceivedPacketsResponse): _189.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _189.QueryUnreceivedPacketsResponseAminoMsg): _189.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _189.QueryUnreceivedPacketsResponse): _189.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryUnreceivedPacketsResponseProtoMsg): _189.QueryUnreceivedPacketsResponse;
                    toProto(message: _189.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryUnreceivedPacketsResponse): _189.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _189.QueryUnreceivedAcksRequest;
                    toJSON(message: _189.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_189.QueryUnreceivedAcksRequest>): _189.QueryUnreceivedAcksRequest;
                    fromAmino(object: _189.QueryUnreceivedAcksRequestAmino): _189.QueryUnreceivedAcksRequest;
                    toAmino(message: _189.QueryUnreceivedAcksRequest): _189.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _189.QueryUnreceivedAcksRequestAminoMsg): _189.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _189.QueryUnreceivedAcksRequest): _189.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryUnreceivedAcksRequestProtoMsg): _189.QueryUnreceivedAcksRequest;
                    toProto(message: _189.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryUnreceivedAcksRequest): _189.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _189.QueryUnreceivedAcksResponse;
                    toJSON(message: _189.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_189.QueryUnreceivedAcksResponse>): _189.QueryUnreceivedAcksResponse;
                    fromAmino(object: _189.QueryUnreceivedAcksResponseAmino): _189.QueryUnreceivedAcksResponse;
                    toAmino(message: _189.QueryUnreceivedAcksResponse): _189.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _189.QueryUnreceivedAcksResponseAminoMsg): _189.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _189.QueryUnreceivedAcksResponse): _189.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryUnreceivedAcksResponseProtoMsg): _189.QueryUnreceivedAcksResponse;
                    toProto(message: _189.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryUnreceivedAcksResponse): _189.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _189.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _189.QueryNextSequenceReceiveRequest;
                    toJSON(message: _189.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_189.QueryNextSequenceReceiveRequest>): _189.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _189.QueryNextSequenceReceiveRequestAmino): _189.QueryNextSequenceReceiveRequest;
                    toAmino(message: _189.QueryNextSequenceReceiveRequest): _189.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _189.QueryNextSequenceReceiveRequestAminoMsg): _189.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _189.QueryNextSequenceReceiveRequest): _189.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _189.QueryNextSequenceReceiveRequestProtoMsg): _189.QueryNextSequenceReceiveRequest;
                    toProto(message: _189.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _189.QueryNextSequenceReceiveRequest): _189.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _189.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _189.QueryNextSequenceReceiveResponse;
                    toJSON(message: _189.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_189.QueryNextSequenceReceiveResponse>): _189.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _189.QueryNextSequenceReceiveResponseAmino): _189.QueryNextSequenceReceiveResponse;
                    toAmino(message: _189.QueryNextSequenceReceiveResponse): _189.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _189.QueryNextSequenceReceiveResponseAminoMsg): _189.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _189.QueryNextSequenceReceiveResponse): _189.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _189.QueryNextSequenceReceiveResponseProtoMsg): _189.QueryNextSequenceReceiveResponse;
                    toProto(message: _189.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _189.QueryNextSequenceReceiveResponse): _189.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _188.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.GenesisState;
                    fromJSON(object: any): _188.GenesisState;
                    toJSON(message: _188.GenesisState): unknown;
                    fromPartial(object: Partial<_188.GenesisState>): _188.GenesisState;
                    fromAmino(object: _188.GenesisStateAmino): _188.GenesisState;
                    toAmino(message: _188.GenesisState): _188.GenesisStateAmino;
                    fromAminoMsg(object: _188.GenesisStateAminoMsg): _188.GenesisState;
                    toAminoMsg(message: _188.GenesisState): _188.GenesisStateAminoMsg;
                    fromProtoMsg(message: _188.GenesisStateProtoMsg): _188.GenesisState;
                    toProto(message: _188.GenesisState): Uint8Array;
                    toProtoMsg(message: _188.GenesisState): _188.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _188.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.PacketSequence;
                    fromJSON(object: any): _188.PacketSequence;
                    toJSON(message: _188.PacketSequence): unknown;
                    fromPartial(object: Partial<_188.PacketSequence>): _188.PacketSequence;
                    fromAmino(object: _188.PacketSequenceAmino): _188.PacketSequence;
                    toAmino(message: _188.PacketSequence): _188.PacketSequenceAmino;
                    fromAminoMsg(object: _188.PacketSequenceAminoMsg): _188.PacketSequence;
                    toAminoMsg(message: _188.PacketSequence): _188.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _188.PacketSequenceProtoMsg): _188.PacketSequence;
                    toProto(message: _188.PacketSequence): Uint8Array;
                    toProtoMsg(message: _188.PacketSequence): _188.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _187.State;
                stateToJSON(object: _187.State): string;
                orderFromJSON(object: any): _187.Order;
                orderToJSON(object: _187.Order): string;
                State: typeof _187.State;
                StateSDKType: typeof _187.State;
                StateAmino: typeof _187.State;
                Order: typeof _187.Order;
                OrderSDKType: typeof _187.Order;
                OrderAmino: typeof _187.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _187.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Channel;
                    fromJSON(object: any): _187.Channel;
                    toJSON(message: _187.Channel): unknown;
                    fromPartial(object: Partial<_187.Channel>): _187.Channel;
                    fromAmino(object: _187.ChannelAmino): _187.Channel;
                    toAmino(message: _187.Channel): _187.ChannelAmino;
                    fromAminoMsg(object: _187.ChannelAminoMsg): _187.Channel;
                    toAminoMsg(message: _187.Channel): _187.ChannelAminoMsg;
                    fromProtoMsg(message: _187.ChannelProtoMsg): _187.Channel;
                    toProto(message: _187.Channel): Uint8Array;
                    toProtoMsg(message: _187.Channel): _187.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _187.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.IdentifiedChannel;
                    fromJSON(object: any): _187.IdentifiedChannel;
                    toJSON(message: _187.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_187.IdentifiedChannel>): _187.IdentifiedChannel;
                    fromAmino(object: _187.IdentifiedChannelAmino): _187.IdentifiedChannel;
                    toAmino(message: _187.IdentifiedChannel): _187.IdentifiedChannelAmino;
                    fromAminoMsg(object: _187.IdentifiedChannelAminoMsg): _187.IdentifiedChannel;
                    toAminoMsg(message: _187.IdentifiedChannel): _187.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _187.IdentifiedChannelProtoMsg): _187.IdentifiedChannel;
                    toProto(message: _187.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _187.IdentifiedChannel): _187.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _187.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Counterparty;
                    fromJSON(object: any): _187.Counterparty;
                    toJSON(message: _187.Counterparty): unknown;
                    fromPartial(object: Partial<_187.Counterparty>): _187.Counterparty;
                    fromAmino(object: _187.CounterpartyAmino): _187.Counterparty;
                    toAmino(message: _187.Counterparty): _187.CounterpartyAmino;
                    fromAminoMsg(object: _187.CounterpartyAminoMsg): _187.Counterparty;
                    toAminoMsg(message: _187.Counterparty): _187.CounterpartyAminoMsg;
                    fromProtoMsg(message: _187.CounterpartyProtoMsg): _187.Counterparty;
                    toProto(message: _187.Counterparty): Uint8Array;
                    toProtoMsg(message: _187.Counterparty): _187.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _187.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Packet;
                    fromJSON(object: any): _187.Packet;
                    toJSON(message: _187.Packet): unknown;
                    fromPartial(object: Partial<_187.Packet>): _187.Packet;
                    fromAmino(object: _187.PacketAmino): _187.Packet;
                    toAmino(message: _187.Packet): _187.PacketAmino;
                    fromAminoMsg(object: _187.PacketAminoMsg): _187.Packet;
                    toAminoMsg(message: _187.Packet): _187.PacketAminoMsg;
                    fromProtoMsg(message: _187.PacketProtoMsg): _187.Packet;
                    toProto(message: _187.Packet): Uint8Array;
                    toProtoMsg(message: _187.Packet): _187.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _187.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.PacketState;
                    fromJSON(object: any): _187.PacketState;
                    toJSON(message: _187.PacketState): unknown;
                    fromPartial(object: Partial<_187.PacketState>): _187.PacketState;
                    fromAmino(object: _187.PacketStateAmino): _187.PacketState;
                    toAmino(message: _187.PacketState): _187.PacketStateAmino;
                    fromAminoMsg(object: _187.PacketStateAminoMsg): _187.PacketState;
                    toAminoMsg(message: _187.PacketState): _187.PacketStateAminoMsg;
                    fromProtoMsg(message: _187.PacketStateProtoMsg): _187.PacketState;
                    toProto(message: _187.PacketState): Uint8Array;
                    toProtoMsg(message: _187.PacketState): _187.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _187.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Acknowledgement;
                    fromJSON(object: any): _187.Acknowledgement;
                    toJSON(message: _187.Acknowledgement): unknown;
                    fromPartial(object: Partial<_187.Acknowledgement>): _187.Acknowledgement;
                    fromAmino(object: _187.AcknowledgementAmino): _187.Acknowledgement;
                    toAmino(message: _187.Acknowledgement): _187.AcknowledgementAmino;
                    fromAminoMsg(object: _187.AcknowledgementAminoMsg): _187.Acknowledgement;
                    toAminoMsg(message: _187.Acknowledgement): _187.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _187.AcknowledgementProtoMsg): _187.Acknowledgement;
                    toProto(message: _187.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _187.Acknowledgement): _187.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _356.MsgClientImpl;
                QueryClientImpl: typeof _351.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _193.QueryClientStateRequest): Promise<_193.QueryClientStateResponse>;
                    clientStates(request?: _193.QueryClientStatesRequest): Promise<_193.QueryClientStatesResponse>;
                    consensusState(request: _193.QueryConsensusStateRequest): Promise<_193.QueryConsensusStateResponse>;
                    consensusStates(request: _193.QueryConsensusStatesRequest): Promise<_193.QueryConsensusStatesResponse>;
                    clientStatus(request: _193.QueryClientStatusRequest): Promise<_193.QueryClientStatusResponse>;
                    clientParams(request?: _193.QueryClientParamsRequest): Promise<_193.QueryClientParamsResponse>;
                    upgradedClientState(request?: _193.QueryUpgradedClientStateRequest): Promise<_193.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _193.QueryUpgradedConsensusStateRequest): Promise<_193.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _347.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _194.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _194.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _194.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _194.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _194.MsgCreateClient): {
                            typeUrl: string;
                            value: _194.MsgCreateClient;
                        };
                        updateClient(value: _194.MsgUpdateClient): {
                            typeUrl: string;
                            value: _194.MsgUpdateClient;
                        };
                        upgradeClient(value: _194.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _194.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _194.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _194.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _194.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _194.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _194.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _194.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _194.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _194.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _194.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _194.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _194.MsgCreateClient): {
                            typeUrl: string;
                            value: _194.MsgCreateClient;
                        };
                        updateClient(value: _194.MsgUpdateClient): {
                            typeUrl: string;
                            value: _194.MsgUpdateClient;
                        };
                        upgradeClient(value: _194.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _194.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _194.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _194.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _194.MsgCreateClient) => _194.MsgCreateClientAmino;
                        fromAmino: (object: _194.MsgCreateClientAmino) => _194.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _194.MsgUpdateClient) => _194.MsgUpdateClientAmino;
                        fromAmino: (object: _194.MsgUpdateClientAmino) => _194.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _194.MsgUpgradeClient) => _194.MsgUpgradeClientAmino;
                        fromAmino: (object: _194.MsgUpgradeClientAmino) => _194.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _194.MsgSubmitMisbehaviour) => _194.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _194.MsgSubmitMisbehaviourAmino) => _194.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _194.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgCreateClient;
                    fromJSON(object: any): _194.MsgCreateClient;
                    toJSON(message: _194.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_194.MsgCreateClient>): _194.MsgCreateClient;
                    fromAmino(object: _194.MsgCreateClientAmino): _194.MsgCreateClient;
                    toAmino(message: _194.MsgCreateClient): _194.MsgCreateClientAmino;
                    fromAminoMsg(object: _194.MsgCreateClientAminoMsg): _194.MsgCreateClient;
                    toAminoMsg(message: _194.MsgCreateClient): _194.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _194.MsgCreateClientProtoMsg): _194.MsgCreateClient;
                    toProto(message: _194.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _194.MsgCreateClient): _194.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _194.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgCreateClientResponse;
                    fromJSON(_: any): _194.MsgCreateClientResponse;
                    toJSON(_: _194.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_194.MsgCreateClientResponse>): _194.MsgCreateClientResponse;
                    fromAmino(_: _194.MsgCreateClientResponseAmino): _194.MsgCreateClientResponse;
                    toAmino(_: _194.MsgCreateClientResponse): _194.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _194.MsgCreateClientResponseAminoMsg): _194.MsgCreateClientResponse;
                    toAminoMsg(message: _194.MsgCreateClientResponse): _194.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _194.MsgCreateClientResponseProtoMsg): _194.MsgCreateClientResponse;
                    toProto(message: _194.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _194.MsgCreateClientResponse): _194.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _194.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgUpdateClient;
                    fromJSON(object: any): _194.MsgUpdateClient;
                    toJSON(message: _194.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_194.MsgUpdateClient>): _194.MsgUpdateClient;
                    fromAmino(object: _194.MsgUpdateClientAmino): _194.MsgUpdateClient;
                    toAmino(message: _194.MsgUpdateClient): _194.MsgUpdateClientAmino;
                    fromAminoMsg(object: _194.MsgUpdateClientAminoMsg): _194.MsgUpdateClient;
                    toAminoMsg(message: _194.MsgUpdateClient): _194.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _194.MsgUpdateClientProtoMsg): _194.MsgUpdateClient;
                    toProto(message: _194.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _194.MsgUpdateClient): _194.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _194.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgUpdateClientResponse;
                    fromJSON(_: any): _194.MsgUpdateClientResponse;
                    toJSON(_: _194.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_194.MsgUpdateClientResponse>): _194.MsgUpdateClientResponse;
                    fromAmino(_: _194.MsgUpdateClientResponseAmino): _194.MsgUpdateClientResponse;
                    toAmino(_: _194.MsgUpdateClientResponse): _194.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _194.MsgUpdateClientResponseAminoMsg): _194.MsgUpdateClientResponse;
                    toAminoMsg(message: _194.MsgUpdateClientResponse): _194.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _194.MsgUpdateClientResponseProtoMsg): _194.MsgUpdateClientResponse;
                    toProto(message: _194.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _194.MsgUpdateClientResponse): _194.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _194.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgUpgradeClient;
                    fromJSON(object: any): _194.MsgUpgradeClient;
                    toJSON(message: _194.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_194.MsgUpgradeClient>): _194.MsgUpgradeClient;
                    fromAmino(object: _194.MsgUpgradeClientAmino): _194.MsgUpgradeClient;
                    toAmino(message: _194.MsgUpgradeClient): _194.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _194.MsgUpgradeClientAminoMsg): _194.MsgUpgradeClient;
                    toAminoMsg(message: _194.MsgUpgradeClient): _194.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _194.MsgUpgradeClientProtoMsg): _194.MsgUpgradeClient;
                    toProto(message: _194.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _194.MsgUpgradeClient): _194.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _194.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgUpgradeClientResponse;
                    fromJSON(_: any): _194.MsgUpgradeClientResponse;
                    toJSON(_: _194.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_194.MsgUpgradeClientResponse>): _194.MsgUpgradeClientResponse;
                    fromAmino(_: _194.MsgUpgradeClientResponseAmino): _194.MsgUpgradeClientResponse;
                    toAmino(_: _194.MsgUpgradeClientResponse): _194.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _194.MsgUpgradeClientResponseAminoMsg): _194.MsgUpgradeClientResponse;
                    toAminoMsg(message: _194.MsgUpgradeClientResponse): _194.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _194.MsgUpgradeClientResponseProtoMsg): _194.MsgUpgradeClientResponse;
                    toProto(message: _194.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _194.MsgUpgradeClientResponse): _194.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _194.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _194.MsgSubmitMisbehaviour;
                    toJSON(message: _194.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_194.MsgSubmitMisbehaviour>): _194.MsgSubmitMisbehaviour;
                    fromAmino(object: _194.MsgSubmitMisbehaviourAmino): _194.MsgSubmitMisbehaviour;
                    toAmino(message: _194.MsgSubmitMisbehaviour): _194.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _194.MsgSubmitMisbehaviourAminoMsg): _194.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _194.MsgSubmitMisbehaviour): _194.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _194.MsgSubmitMisbehaviourProtoMsg): _194.MsgSubmitMisbehaviour;
                    toProto(message: _194.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _194.MsgSubmitMisbehaviour): _194.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _194.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _194.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _194.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_194.MsgSubmitMisbehaviourResponse>): _194.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _194.MsgSubmitMisbehaviourResponseAmino): _194.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _194.MsgSubmitMisbehaviourResponse): _194.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _194.MsgSubmitMisbehaviourResponseAminoMsg): _194.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _194.MsgSubmitMisbehaviourResponse): _194.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _194.MsgSubmitMisbehaviourResponseProtoMsg): _194.MsgSubmitMisbehaviourResponse;
                    toProto(message: _194.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _194.MsgSubmitMisbehaviourResponse): _194.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _193.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryClientStateRequest;
                    fromJSON(object: any): _193.QueryClientStateRequest;
                    toJSON(message: _193.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_193.QueryClientStateRequest>): _193.QueryClientStateRequest;
                    fromAmino(object: _193.QueryClientStateRequestAmino): _193.QueryClientStateRequest;
                    toAmino(message: _193.QueryClientStateRequest): _193.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _193.QueryClientStateRequestAminoMsg): _193.QueryClientStateRequest;
                    toAminoMsg(message: _193.QueryClientStateRequest): _193.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _193.QueryClientStateRequestProtoMsg): _193.QueryClientStateRequest;
                    toProto(message: _193.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _193.QueryClientStateRequest): _193.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _193.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryClientStateResponse;
                    fromJSON(object: any): _193.QueryClientStateResponse;
                    toJSON(message: _193.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_193.QueryClientStateResponse>): _193.QueryClientStateResponse;
                    fromAmino(object: _193.QueryClientStateResponseAmino): _193.QueryClientStateResponse;
                    toAmino(message: _193.QueryClientStateResponse): _193.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _193.QueryClientStateResponseAminoMsg): _193.QueryClientStateResponse;
                    toAminoMsg(message: _193.QueryClientStateResponse): _193.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _193.QueryClientStateResponseProtoMsg): _193.QueryClientStateResponse;
                    toProto(message: _193.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _193.QueryClientStateResponse): _193.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _193.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryClientStatesRequest;
                    fromJSON(object: any): _193.QueryClientStatesRequest;
                    toJSON(message: _193.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_193.QueryClientStatesRequest>): _193.QueryClientStatesRequest;
                    fromAmino(object: _193.QueryClientStatesRequestAmino): _193.QueryClientStatesRequest;
                    toAmino(message: _193.QueryClientStatesRequest): _193.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _193.QueryClientStatesRequestAminoMsg): _193.QueryClientStatesRequest;
                    toAminoMsg(message: _193.QueryClientStatesRequest): _193.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _193.QueryClientStatesRequestProtoMsg): _193.QueryClientStatesRequest;
                    toProto(message: _193.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _193.QueryClientStatesRequest): _193.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _193.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryClientStatesResponse;
                    fromJSON(object: any): _193.QueryClientStatesResponse;
                    toJSON(message: _193.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_193.QueryClientStatesResponse>): _193.QueryClientStatesResponse;
                    fromAmino(object: _193.QueryClientStatesResponseAmino): _193.QueryClientStatesResponse;
                    toAmino(message: _193.QueryClientStatesResponse): _193.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _193.QueryClientStatesResponseAminoMsg): _193.QueryClientStatesResponse;
                    toAminoMsg(message: _193.QueryClientStatesResponse): _193.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _193.QueryClientStatesResponseProtoMsg): _193.QueryClientStatesResponse;
                    toProto(message: _193.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _193.QueryClientStatesResponse): _193.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _193.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryConsensusStateRequest;
                    fromJSON(object: any): _193.QueryConsensusStateRequest;
                    toJSON(message: _193.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_193.QueryConsensusStateRequest>): _193.QueryConsensusStateRequest;
                    fromAmino(object: _193.QueryConsensusStateRequestAmino): _193.QueryConsensusStateRequest;
                    toAmino(message: _193.QueryConsensusStateRequest): _193.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _193.QueryConsensusStateRequestAminoMsg): _193.QueryConsensusStateRequest;
                    toAminoMsg(message: _193.QueryConsensusStateRequest): _193.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _193.QueryConsensusStateRequestProtoMsg): _193.QueryConsensusStateRequest;
                    toProto(message: _193.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _193.QueryConsensusStateRequest): _193.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _193.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryConsensusStateResponse;
                    fromJSON(object: any): _193.QueryConsensusStateResponse;
                    toJSON(message: _193.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_193.QueryConsensusStateResponse>): _193.QueryConsensusStateResponse;
                    fromAmino(object: _193.QueryConsensusStateResponseAmino): _193.QueryConsensusStateResponse;
                    toAmino(message: _193.QueryConsensusStateResponse): _193.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _193.QueryConsensusStateResponseAminoMsg): _193.QueryConsensusStateResponse;
                    toAminoMsg(message: _193.QueryConsensusStateResponse): _193.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _193.QueryConsensusStateResponseProtoMsg): _193.QueryConsensusStateResponse;
                    toProto(message: _193.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _193.QueryConsensusStateResponse): _193.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _193.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryConsensusStatesRequest;
                    fromJSON(object: any): _193.QueryConsensusStatesRequest;
                    toJSON(message: _193.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_193.QueryConsensusStatesRequest>): _193.QueryConsensusStatesRequest;
                    fromAmino(object: _193.QueryConsensusStatesRequestAmino): _193.QueryConsensusStatesRequest;
                    toAmino(message: _193.QueryConsensusStatesRequest): _193.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _193.QueryConsensusStatesRequestAminoMsg): _193.QueryConsensusStatesRequest;
                    toAminoMsg(message: _193.QueryConsensusStatesRequest): _193.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _193.QueryConsensusStatesRequestProtoMsg): _193.QueryConsensusStatesRequest;
                    toProto(message: _193.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _193.QueryConsensusStatesRequest): _193.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _193.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryConsensusStatesResponse;
                    fromJSON(object: any): _193.QueryConsensusStatesResponse;
                    toJSON(message: _193.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_193.QueryConsensusStatesResponse>): _193.QueryConsensusStatesResponse;
                    fromAmino(object: _193.QueryConsensusStatesResponseAmino): _193.QueryConsensusStatesResponse;
                    toAmino(message: _193.QueryConsensusStatesResponse): _193.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _193.QueryConsensusStatesResponseAminoMsg): _193.QueryConsensusStatesResponse;
                    toAminoMsg(message: _193.QueryConsensusStatesResponse): _193.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _193.QueryConsensusStatesResponseProtoMsg): _193.QueryConsensusStatesResponse;
                    toProto(message: _193.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _193.QueryConsensusStatesResponse): _193.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _193.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryClientStatusRequest;
                    fromJSON(object: any): _193.QueryClientStatusRequest;
                    toJSON(message: _193.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_193.QueryClientStatusRequest>): _193.QueryClientStatusRequest;
                    fromAmino(object: _193.QueryClientStatusRequestAmino): _193.QueryClientStatusRequest;
                    toAmino(message: _193.QueryClientStatusRequest): _193.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _193.QueryClientStatusRequestAminoMsg): _193.QueryClientStatusRequest;
                    toAminoMsg(message: _193.QueryClientStatusRequest): _193.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _193.QueryClientStatusRequestProtoMsg): _193.QueryClientStatusRequest;
                    toProto(message: _193.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _193.QueryClientStatusRequest): _193.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _193.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryClientStatusResponse;
                    fromJSON(object: any): _193.QueryClientStatusResponse;
                    toJSON(message: _193.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_193.QueryClientStatusResponse>): _193.QueryClientStatusResponse;
                    fromAmino(object: _193.QueryClientStatusResponseAmino): _193.QueryClientStatusResponse;
                    toAmino(message: _193.QueryClientStatusResponse): _193.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _193.QueryClientStatusResponseAminoMsg): _193.QueryClientStatusResponse;
                    toAminoMsg(message: _193.QueryClientStatusResponse): _193.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _193.QueryClientStatusResponseProtoMsg): _193.QueryClientStatusResponse;
                    toProto(message: _193.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _193.QueryClientStatusResponse): _193.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _193.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryClientParamsRequest;
                    fromJSON(_: any): _193.QueryClientParamsRequest;
                    toJSON(_: _193.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_193.QueryClientParamsRequest>): _193.QueryClientParamsRequest;
                    fromAmino(_: _193.QueryClientParamsRequestAmino): _193.QueryClientParamsRequest;
                    toAmino(_: _193.QueryClientParamsRequest): _193.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _193.QueryClientParamsRequestAminoMsg): _193.QueryClientParamsRequest;
                    toAminoMsg(message: _193.QueryClientParamsRequest): _193.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _193.QueryClientParamsRequestProtoMsg): _193.QueryClientParamsRequest;
                    toProto(message: _193.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _193.QueryClientParamsRequest): _193.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _193.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryClientParamsResponse;
                    fromJSON(object: any): _193.QueryClientParamsResponse;
                    toJSON(message: _193.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_193.QueryClientParamsResponse>): _193.QueryClientParamsResponse;
                    fromAmino(object: _193.QueryClientParamsResponseAmino): _193.QueryClientParamsResponse;
                    toAmino(message: _193.QueryClientParamsResponse): _193.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _193.QueryClientParamsResponseAminoMsg): _193.QueryClientParamsResponse;
                    toAminoMsg(message: _193.QueryClientParamsResponse): _193.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _193.QueryClientParamsResponseProtoMsg): _193.QueryClientParamsResponse;
                    toProto(message: _193.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _193.QueryClientParamsResponse): _193.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _193.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _193.QueryUpgradedClientStateRequest;
                    toJSON(_: _193.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_193.QueryUpgradedClientStateRequest>): _193.QueryUpgradedClientStateRequest;
                    fromAmino(_: _193.QueryUpgradedClientStateRequestAmino): _193.QueryUpgradedClientStateRequest;
                    toAmino(_: _193.QueryUpgradedClientStateRequest): _193.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _193.QueryUpgradedClientStateRequestAminoMsg): _193.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _193.QueryUpgradedClientStateRequest): _193.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _193.QueryUpgradedClientStateRequestProtoMsg): _193.QueryUpgradedClientStateRequest;
                    toProto(message: _193.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _193.QueryUpgradedClientStateRequest): _193.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _193.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _193.QueryUpgradedClientStateResponse;
                    toJSON(message: _193.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_193.QueryUpgradedClientStateResponse>): _193.QueryUpgradedClientStateResponse;
                    fromAmino(object: _193.QueryUpgradedClientStateResponseAmino): _193.QueryUpgradedClientStateResponse;
                    toAmino(message: _193.QueryUpgradedClientStateResponse): _193.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _193.QueryUpgradedClientStateResponseAminoMsg): _193.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _193.QueryUpgradedClientStateResponse): _193.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _193.QueryUpgradedClientStateResponseProtoMsg): _193.QueryUpgradedClientStateResponse;
                    toProto(message: _193.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _193.QueryUpgradedClientStateResponse): _193.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _193.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _193.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _193.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_193.QueryUpgradedConsensusStateRequest>): _193.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _193.QueryUpgradedConsensusStateRequestAmino): _193.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _193.QueryUpgradedConsensusStateRequest): _193.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _193.QueryUpgradedConsensusStateRequestAminoMsg): _193.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _193.QueryUpgradedConsensusStateRequest): _193.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _193.QueryUpgradedConsensusStateRequestProtoMsg): _193.QueryUpgradedConsensusStateRequest;
                    toProto(message: _193.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _193.QueryUpgradedConsensusStateRequest): _193.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _193.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _193.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _193.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_193.QueryUpgradedConsensusStateResponse>): _193.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _193.QueryUpgradedConsensusStateResponseAmino): _193.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _193.QueryUpgradedConsensusStateResponse): _193.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _193.QueryUpgradedConsensusStateResponseAminoMsg): _193.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _193.QueryUpgradedConsensusStateResponse): _193.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _193.QueryUpgradedConsensusStateResponseProtoMsg): _193.QueryUpgradedConsensusStateResponse;
                    toProto(message: _193.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _193.QueryUpgradedConsensusStateResponse): _193.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _192.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.GenesisState;
                    fromJSON(object: any): _192.GenesisState;
                    toJSON(message: _192.GenesisState): unknown;
                    fromPartial(object: Partial<_192.GenesisState>): _192.GenesisState;
                    fromAmino(object: _192.GenesisStateAmino): _192.GenesisState;
                    toAmino(message: _192.GenesisState): _192.GenesisStateAmino;
                    fromAminoMsg(object: _192.GenesisStateAminoMsg): _192.GenesisState;
                    toAminoMsg(message: _192.GenesisState): _192.GenesisStateAminoMsg;
                    fromProtoMsg(message: _192.GenesisStateProtoMsg): _192.GenesisState;
                    toProto(message: _192.GenesisState): Uint8Array;
                    toProtoMsg(message: _192.GenesisState): _192.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _192.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.GenesisMetadata;
                    fromJSON(object: any): _192.GenesisMetadata;
                    toJSON(message: _192.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_192.GenesisMetadata>): _192.GenesisMetadata;
                    fromAmino(object: _192.GenesisMetadataAmino): _192.GenesisMetadata;
                    toAmino(message: _192.GenesisMetadata): _192.GenesisMetadataAmino;
                    fromAminoMsg(object: _192.GenesisMetadataAminoMsg): _192.GenesisMetadata;
                    toAminoMsg(message: _192.GenesisMetadata): _192.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _192.GenesisMetadataProtoMsg): _192.GenesisMetadata;
                    toProto(message: _192.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _192.GenesisMetadata): _192.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _192.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _192.IdentifiedGenesisMetadata;
                    toJSON(message: _192.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_192.IdentifiedGenesisMetadata>): _192.IdentifiedGenesisMetadata;
                    fromAmino(object: _192.IdentifiedGenesisMetadataAmino): _192.IdentifiedGenesisMetadata;
                    toAmino(message: _192.IdentifiedGenesisMetadata): _192.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _192.IdentifiedGenesisMetadataAminoMsg): _192.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _192.IdentifiedGenesisMetadata): _192.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _192.IdentifiedGenesisMetadataProtoMsg): _192.IdentifiedGenesisMetadata;
                    toProto(message: _192.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _192.IdentifiedGenesisMetadata): _192.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _191.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.IdentifiedClientState;
                    fromJSON(object: any): _191.IdentifiedClientState;
                    toJSON(message: _191.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_191.IdentifiedClientState>): _191.IdentifiedClientState;
                    fromAmino(object: _191.IdentifiedClientStateAmino): _191.IdentifiedClientState;
                    toAmino(message: _191.IdentifiedClientState): _191.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _191.IdentifiedClientStateAminoMsg): _191.IdentifiedClientState;
                    toAminoMsg(message: _191.IdentifiedClientState): _191.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _191.IdentifiedClientStateProtoMsg): _191.IdentifiedClientState;
                    toProto(message: _191.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _191.IdentifiedClientState): _191.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _191.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ConsensusStateWithHeight;
                    fromJSON(object: any): _191.ConsensusStateWithHeight;
                    toJSON(message: _191.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_191.ConsensusStateWithHeight>): _191.ConsensusStateWithHeight;
                    fromAmino(object: _191.ConsensusStateWithHeightAmino): _191.ConsensusStateWithHeight;
                    toAmino(message: _191.ConsensusStateWithHeight): _191.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _191.ConsensusStateWithHeightAminoMsg): _191.ConsensusStateWithHeight;
                    toAminoMsg(message: _191.ConsensusStateWithHeight): _191.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _191.ConsensusStateWithHeightProtoMsg): _191.ConsensusStateWithHeight;
                    toProto(message: _191.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _191.ConsensusStateWithHeight): _191.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _191.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ClientConsensusStates;
                    fromJSON(object: any): _191.ClientConsensusStates;
                    toJSON(message: _191.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_191.ClientConsensusStates>): _191.ClientConsensusStates;
                    fromAmino(object: _191.ClientConsensusStatesAmino): _191.ClientConsensusStates;
                    toAmino(message: _191.ClientConsensusStates): _191.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _191.ClientConsensusStatesAminoMsg): _191.ClientConsensusStates;
                    toAminoMsg(message: _191.ClientConsensusStates): _191.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _191.ClientConsensusStatesProtoMsg): _191.ClientConsensusStates;
                    toProto(message: _191.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _191.ClientConsensusStates): _191.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _191.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ClientUpdateProposal;
                    fromJSON(object: any): _191.ClientUpdateProposal;
                    toJSON(message: _191.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_191.ClientUpdateProposal>): _191.ClientUpdateProposal;
                    fromAmino(object: _191.ClientUpdateProposalAmino): _191.ClientUpdateProposal;
                    toAmino(message: _191.ClientUpdateProposal): _191.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _191.ClientUpdateProposalAminoMsg): _191.ClientUpdateProposal;
                    toAminoMsg(message: _191.ClientUpdateProposal): _191.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _191.ClientUpdateProposalProtoMsg): _191.ClientUpdateProposal;
                    toProto(message: _191.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _191.ClientUpdateProposal): _191.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _191.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.UpgradeProposal;
                    fromJSON(object: any): _191.UpgradeProposal;
                    toJSON(message: _191.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_191.UpgradeProposal>): _191.UpgradeProposal;
                    fromAmino(object: _191.UpgradeProposalAmino): _191.UpgradeProposal;
                    toAmino(message: _191.UpgradeProposal): _191.UpgradeProposalAmino;
                    fromAminoMsg(object: _191.UpgradeProposalAminoMsg): _191.UpgradeProposal;
                    toAminoMsg(message: _191.UpgradeProposal): _191.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _191.UpgradeProposalProtoMsg): _191.UpgradeProposal;
                    toProto(message: _191.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _191.UpgradeProposal): _191.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _191.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Height;
                    fromJSON(object: any): _191.Height;
                    toJSON(message: _191.Height): unknown;
                    fromPartial(object: Partial<_191.Height>): _191.Height;
                    fromAmino(object: _191.HeightAmino): _191.Height;
                    toAmino(message: _191.Height): _191.HeightAmino;
                    fromAminoMsg(object: _191.HeightAminoMsg): _191.Height;
                    toAminoMsg(message: _191.Height): _191.HeightAminoMsg;
                    fromProtoMsg(message: _191.HeightProtoMsg): _191.Height;
                    toProto(message: _191.Height): Uint8Array;
                    toProtoMsg(message: _191.Height): _191.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _191.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Params;
                    fromJSON(object: any): _191.Params;
                    toJSON(message: _191.Params): unknown;
                    fromPartial(object: Partial<_191.Params>): _191.Params;
                    fromAmino(object: _191.ParamsAmino): _191.Params;
                    toAmino(message: _191.Params): _191.ParamsAmino;
                    fromAminoMsg(object: _191.ParamsAminoMsg): _191.Params;
                    toAminoMsg(message: _191.Params): _191.ParamsAminoMsg;
                    fromProtoMsg(message: _191.ParamsProtoMsg): _191.Params;
                    toProto(message: _191.Params): Uint8Array;
                    toProtoMsg(message: _191.Params): _191.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _195.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MerkleRoot;
                    fromJSON(object: any): _195.MerkleRoot;
                    toJSON(message: _195.MerkleRoot): unknown;
                    fromPartial(object: Partial<_195.MerkleRoot>): _195.MerkleRoot;
                    fromAmino(object: _195.MerkleRootAmino): _195.MerkleRoot;
                    toAmino(message: _195.MerkleRoot): _195.MerkleRootAmino;
                    fromAminoMsg(object: _195.MerkleRootAminoMsg): _195.MerkleRoot;
                    toAminoMsg(message: _195.MerkleRoot): _195.MerkleRootAminoMsg;
                    fromProtoMsg(message: _195.MerkleRootProtoMsg): _195.MerkleRoot;
                    toProto(message: _195.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _195.MerkleRoot): _195.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _195.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MerklePrefix;
                    fromJSON(object: any): _195.MerklePrefix;
                    toJSON(message: _195.MerklePrefix): unknown;
                    fromPartial(object: Partial<_195.MerklePrefix>): _195.MerklePrefix;
                    fromAmino(object: _195.MerklePrefixAmino): _195.MerklePrefix;
                    toAmino(message: _195.MerklePrefix): _195.MerklePrefixAmino;
                    fromAminoMsg(object: _195.MerklePrefixAminoMsg): _195.MerklePrefix;
                    toAminoMsg(message: _195.MerklePrefix): _195.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _195.MerklePrefixProtoMsg): _195.MerklePrefix;
                    toProto(message: _195.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _195.MerklePrefix): _195.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _195.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MerklePath;
                    fromJSON(object: any): _195.MerklePath;
                    toJSON(message: _195.MerklePath): unknown;
                    fromPartial(object: Partial<_195.MerklePath>): _195.MerklePath;
                    fromAmino(object: _195.MerklePathAmino): _195.MerklePath;
                    toAmino(message: _195.MerklePath): _195.MerklePathAmino;
                    fromAminoMsg(object: _195.MerklePathAminoMsg): _195.MerklePath;
                    toAminoMsg(message: _195.MerklePath): _195.MerklePathAminoMsg;
                    fromProtoMsg(message: _195.MerklePathProtoMsg): _195.MerklePath;
                    toProto(message: _195.MerklePath): Uint8Array;
                    toProtoMsg(message: _195.MerklePath): _195.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _195.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MerkleProof;
                    fromJSON(object: any): _195.MerkleProof;
                    toJSON(message: _195.MerkleProof): unknown;
                    fromPartial(object: Partial<_195.MerkleProof>): _195.MerkleProof;
                    fromAmino(object: _195.MerkleProofAmino): _195.MerkleProof;
                    toAmino(message: _195.MerkleProof): _195.MerkleProofAmino;
                    fromAminoMsg(object: _195.MerkleProofAminoMsg): _195.MerkleProof;
                    toAminoMsg(message: _195.MerkleProof): _195.MerkleProofAminoMsg;
                    fromProtoMsg(message: _195.MerkleProofProtoMsg): _195.MerkleProof;
                    toProto(message: _195.MerkleProof): Uint8Array;
                    toProtoMsg(message: _195.MerkleProof): _195.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _357.MsgClientImpl;
                QueryClientImpl: typeof _352.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _198.QueryConnectionRequest): Promise<_198.QueryConnectionResponse>;
                    connections(request?: _198.QueryConnectionsRequest): Promise<_198.QueryConnectionsResponse>;
                    clientConnections(request: _198.QueryClientConnectionsRequest): Promise<_198.QueryClientConnectionsResponse>;
                    connectionClientState(request: _198.QueryConnectionClientStateRequest): Promise<_198.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _198.QueryConnectionConsensusStateRequest): Promise<_198.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _348.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _199.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _199.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _199.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _199.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _199.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _199.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _199.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _199.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _199.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _199.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _199.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _199.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _199.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _199.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _199.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _199.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _199.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _199.MsgConnectionOpenInit) => _199.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _199.MsgConnectionOpenInitAmino) => _199.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _199.MsgConnectionOpenTry) => _199.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _199.MsgConnectionOpenTryAmino) => _199.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _199.MsgConnectionOpenAck) => _199.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _199.MsgConnectionOpenAckAmino) => _199.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _199.MsgConnectionOpenConfirm) => _199.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _199.MsgConnectionOpenConfirmAmino) => _199.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _199.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgConnectionOpenInit;
                    fromJSON(object: any): _199.MsgConnectionOpenInit;
                    toJSON(message: _199.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_199.MsgConnectionOpenInit>): _199.MsgConnectionOpenInit;
                    fromAmino(object: _199.MsgConnectionOpenInitAmino): _199.MsgConnectionOpenInit;
                    toAmino(message: _199.MsgConnectionOpenInit): _199.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _199.MsgConnectionOpenInitAminoMsg): _199.MsgConnectionOpenInit;
                    toAminoMsg(message: _199.MsgConnectionOpenInit): _199.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _199.MsgConnectionOpenInitProtoMsg): _199.MsgConnectionOpenInit;
                    toProto(message: _199.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _199.MsgConnectionOpenInit): _199.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _199.MsgConnectionOpenInitResponse;
                    toJSON(_: _199.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_199.MsgConnectionOpenInitResponse>): _199.MsgConnectionOpenInitResponse;
                    fromAmino(_: _199.MsgConnectionOpenInitResponseAmino): _199.MsgConnectionOpenInitResponse;
                    toAmino(_: _199.MsgConnectionOpenInitResponse): _199.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _199.MsgConnectionOpenInitResponseAminoMsg): _199.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _199.MsgConnectionOpenInitResponse): _199.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgConnectionOpenInitResponseProtoMsg): _199.MsgConnectionOpenInitResponse;
                    toProto(message: _199.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgConnectionOpenInitResponse): _199.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _199.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgConnectionOpenTry;
                    fromJSON(object: any): _199.MsgConnectionOpenTry;
                    toJSON(message: _199.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_199.MsgConnectionOpenTry>): _199.MsgConnectionOpenTry;
                    fromAmino(object: _199.MsgConnectionOpenTryAmino): _199.MsgConnectionOpenTry;
                    toAmino(message: _199.MsgConnectionOpenTry): _199.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _199.MsgConnectionOpenTryAminoMsg): _199.MsgConnectionOpenTry;
                    toAminoMsg(message: _199.MsgConnectionOpenTry): _199.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _199.MsgConnectionOpenTryProtoMsg): _199.MsgConnectionOpenTry;
                    toProto(message: _199.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _199.MsgConnectionOpenTry): _199.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _199.MsgConnectionOpenTryResponse;
                    toJSON(_: _199.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_199.MsgConnectionOpenTryResponse>): _199.MsgConnectionOpenTryResponse;
                    fromAmino(_: _199.MsgConnectionOpenTryResponseAmino): _199.MsgConnectionOpenTryResponse;
                    toAmino(_: _199.MsgConnectionOpenTryResponse): _199.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _199.MsgConnectionOpenTryResponseAminoMsg): _199.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _199.MsgConnectionOpenTryResponse): _199.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgConnectionOpenTryResponseProtoMsg): _199.MsgConnectionOpenTryResponse;
                    toProto(message: _199.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgConnectionOpenTryResponse): _199.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _199.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgConnectionOpenAck;
                    fromJSON(object: any): _199.MsgConnectionOpenAck;
                    toJSON(message: _199.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_199.MsgConnectionOpenAck>): _199.MsgConnectionOpenAck;
                    fromAmino(object: _199.MsgConnectionOpenAckAmino): _199.MsgConnectionOpenAck;
                    toAmino(message: _199.MsgConnectionOpenAck): _199.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _199.MsgConnectionOpenAckAminoMsg): _199.MsgConnectionOpenAck;
                    toAminoMsg(message: _199.MsgConnectionOpenAck): _199.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _199.MsgConnectionOpenAckProtoMsg): _199.MsgConnectionOpenAck;
                    toProto(message: _199.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _199.MsgConnectionOpenAck): _199.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _199.MsgConnectionOpenAckResponse;
                    toJSON(_: _199.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_199.MsgConnectionOpenAckResponse>): _199.MsgConnectionOpenAckResponse;
                    fromAmino(_: _199.MsgConnectionOpenAckResponseAmino): _199.MsgConnectionOpenAckResponse;
                    toAmino(_: _199.MsgConnectionOpenAckResponse): _199.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _199.MsgConnectionOpenAckResponseAminoMsg): _199.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _199.MsgConnectionOpenAckResponse): _199.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgConnectionOpenAckResponseProtoMsg): _199.MsgConnectionOpenAckResponse;
                    toProto(message: _199.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgConnectionOpenAckResponse): _199.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _199.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _199.MsgConnectionOpenConfirm;
                    toJSON(message: _199.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_199.MsgConnectionOpenConfirm>): _199.MsgConnectionOpenConfirm;
                    fromAmino(object: _199.MsgConnectionOpenConfirmAmino): _199.MsgConnectionOpenConfirm;
                    toAmino(message: _199.MsgConnectionOpenConfirm): _199.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _199.MsgConnectionOpenConfirmAminoMsg): _199.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _199.MsgConnectionOpenConfirm): _199.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _199.MsgConnectionOpenConfirmProtoMsg): _199.MsgConnectionOpenConfirm;
                    toProto(message: _199.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _199.MsgConnectionOpenConfirm): _199.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _199.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _199.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_199.MsgConnectionOpenConfirmResponse>): _199.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _199.MsgConnectionOpenConfirmResponseAmino): _199.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _199.MsgConnectionOpenConfirmResponse): _199.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _199.MsgConnectionOpenConfirmResponseAminoMsg): _199.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _199.MsgConnectionOpenConfirmResponse): _199.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgConnectionOpenConfirmResponseProtoMsg): _199.MsgConnectionOpenConfirmResponse;
                    toProto(message: _199.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgConnectionOpenConfirmResponse): _199.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionRequest;
                    fromJSON(object: any): _198.QueryConnectionRequest;
                    toJSON(message: _198.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionRequest>): _198.QueryConnectionRequest;
                    fromAmino(object: _198.QueryConnectionRequestAmino): _198.QueryConnectionRequest;
                    toAmino(message: _198.QueryConnectionRequest): _198.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _198.QueryConnectionRequestAminoMsg): _198.QueryConnectionRequest;
                    toAminoMsg(message: _198.QueryConnectionRequest): _198.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionRequestProtoMsg): _198.QueryConnectionRequest;
                    toProto(message: _198.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionRequest): _198.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionResponse;
                    fromJSON(object: any): _198.QueryConnectionResponse;
                    toJSON(message: _198.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionResponse>): _198.QueryConnectionResponse;
                    fromAmino(object: _198.QueryConnectionResponseAmino): _198.QueryConnectionResponse;
                    toAmino(message: _198.QueryConnectionResponse): _198.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _198.QueryConnectionResponseAminoMsg): _198.QueryConnectionResponse;
                    toAminoMsg(message: _198.QueryConnectionResponse): _198.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionResponseProtoMsg): _198.QueryConnectionResponse;
                    toProto(message: _198.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionResponse): _198.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionsRequest;
                    fromJSON(object: any): _198.QueryConnectionsRequest;
                    toJSON(message: _198.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionsRequest>): _198.QueryConnectionsRequest;
                    fromAmino(object: _198.QueryConnectionsRequestAmino): _198.QueryConnectionsRequest;
                    toAmino(message: _198.QueryConnectionsRequest): _198.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _198.QueryConnectionsRequestAminoMsg): _198.QueryConnectionsRequest;
                    toAminoMsg(message: _198.QueryConnectionsRequest): _198.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionsRequestProtoMsg): _198.QueryConnectionsRequest;
                    toProto(message: _198.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionsRequest): _198.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionsResponse;
                    fromJSON(object: any): _198.QueryConnectionsResponse;
                    toJSON(message: _198.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionsResponse>): _198.QueryConnectionsResponse;
                    fromAmino(object: _198.QueryConnectionsResponseAmino): _198.QueryConnectionsResponse;
                    toAmino(message: _198.QueryConnectionsResponse): _198.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _198.QueryConnectionsResponseAminoMsg): _198.QueryConnectionsResponse;
                    toAminoMsg(message: _198.QueryConnectionsResponse): _198.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionsResponseProtoMsg): _198.QueryConnectionsResponse;
                    toProto(message: _198.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionsResponse): _198.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryClientConnectionsRequest;
                    fromJSON(object: any): _198.QueryClientConnectionsRequest;
                    toJSON(message: _198.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryClientConnectionsRequest>): _198.QueryClientConnectionsRequest;
                    fromAmino(object: _198.QueryClientConnectionsRequestAmino): _198.QueryClientConnectionsRequest;
                    toAmino(message: _198.QueryClientConnectionsRequest): _198.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _198.QueryClientConnectionsRequestAminoMsg): _198.QueryClientConnectionsRequest;
                    toAminoMsg(message: _198.QueryClientConnectionsRequest): _198.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryClientConnectionsRequestProtoMsg): _198.QueryClientConnectionsRequest;
                    toProto(message: _198.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryClientConnectionsRequest): _198.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryClientConnectionsResponse;
                    fromJSON(object: any): _198.QueryClientConnectionsResponse;
                    toJSON(message: _198.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryClientConnectionsResponse>): _198.QueryClientConnectionsResponse;
                    fromAmino(object: _198.QueryClientConnectionsResponseAmino): _198.QueryClientConnectionsResponse;
                    toAmino(message: _198.QueryClientConnectionsResponse): _198.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _198.QueryClientConnectionsResponseAminoMsg): _198.QueryClientConnectionsResponse;
                    toAminoMsg(message: _198.QueryClientConnectionsResponse): _198.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryClientConnectionsResponseProtoMsg): _198.QueryClientConnectionsResponse;
                    toProto(message: _198.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryClientConnectionsResponse): _198.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _198.QueryConnectionClientStateRequest;
                    toJSON(message: _198.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionClientStateRequest>): _198.QueryConnectionClientStateRequest;
                    fromAmino(object: _198.QueryConnectionClientStateRequestAmino): _198.QueryConnectionClientStateRequest;
                    toAmino(message: _198.QueryConnectionClientStateRequest): _198.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _198.QueryConnectionClientStateRequestAminoMsg): _198.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _198.QueryConnectionClientStateRequest): _198.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionClientStateRequestProtoMsg): _198.QueryConnectionClientStateRequest;
                    toProto(message: _198.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionClientStateRequest): _198.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _198.QueryConnectionClientStateResponse;
                    toJSON(message: _198.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionClientStateResponse>): _198.QueryConnectionClientStateResponse;
                    fromAmino(object: _198.QueryConnectionClientStateResponseAmino): _198.QueryConnectionClientStateResponse;
                    toAmino(message: _198.QueryConnectionClientStateResponse): _198.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _198.QueryConnectionClientStateResponseAminoMsg): _198.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _198.QueryConnectionClientStateResponse): _198.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionClientStateResponseProtoMsg): _198.QueryConnectionClientStateResponse;
                    toProto(message: _198.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionClientStateResponse): _198.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _198.QueryConnectionConsensusStateRequest;
                    toJSON(message: _198.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionConsensusStateRequest>): _198.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _198.QueryConnectionConsensusStateRequestAmino): _198.QueryConnectionConsensusStateRequest;
                    toAmino(message: _198.QueryConnectionConsensusStateRequest): _198.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _198.QueryConnectionConsensusStateRequestAminoMsg): _198.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _198.QueryConnectionConsensusStateRequest): _198.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionConsensusStateRequestProtoMsg): _198.QueryConnectionConsensusStateRequest;
                    toProto(message: _198.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionConsensusStateRequest): _198.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _198.QueryConnectionConsensusStateResponse;
                    toJSON(message: _198.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionConsensusStateResponse>): _198.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _198.QueryConnectionConsensusStateResponseAmino): _198.QueryConnectionConsensusStateResponse;
                    toAmino(message: _198.QueryConnectionConsensusStateResponse): _198.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _198.QueryConnectionConsensusStateResponseAminoMsg): _198.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _198.QueryConnectionConsensusStateResponse): _198.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionConsensusStateResponseProtoMsg): _198.QueryConnectionConsensusStateResponse;
                    toProto(message: _198.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionConsensusStateResponse): _198.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _197.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.GenesisState;
                    fromJSON(object: any): _197.GenesisState;
                    toJSON(message: _197.GenesisState): unknown;
                    fromPartial(object: Partial<_197.GenesisState>): _197.GenesisState;
                    fromAmino(object: _197.GenesisStateAmino): _197.GenesisState;
                    toAmino(message: _197.GenesisState): _197.GenesisStateAmino;
                    fromAminoMsg(object: _197.GenesisStateAminoMsg): _197.GenesisState;
                    toAminoMsg(message: _197.GenesisState): _197.GenesisStateAminoMsg;
                    fromProtoMsg(message: _197.GenesisStateProtoMsg): _197.GenesisState;
                    toProto(message: _197.GenesisState): Uint8Array;
                    toProtoMsg(message: _197.GenesisState): _197.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _196.State;
                stateToJSON(object: _196.State): string;
                State: typeof _196.State;
                StateSDKType: typeof _196.State;
                StateAmino: typeof _196.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _196.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ConnectionEnd;
                    fromJSON(object: any): _196.ConnectionEnd;
                    toJSON(message: _196.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_196.ConnectionEnd>): _196.ConnectionEnd;
                    fromAmino(object: _196.ConnectionEndAmino): _196.ConnectionEnd;
                    toAmino(message: _196.ConnectionEnd): _196.ConnectionEndAmino;
                    fromAminoMsg(object: _196.ConnectionEndAminoMsg): _196.ConnectionEnd;
                    toAminoMsg(message: _196.ConnectionEnd): _196.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _196.ConnectionEndProtoMsg): _196.ConnectionEnd;
                    toProto(message: _196.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _196.ConnectionEnd): _196.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _196.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.IdentifiedConnection;
                    fromJSON(object: any): _196.IdentifiedConnection;
                    toJSON(message: _196.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_196.IdentifiedConnection>): _196.IdentifiedConnection;
                    fromAmino(object: _196.IdentifiedConnectionAmino): _196.IdentifiedConnection;
                    toAmino(message: _196.IdentifiedConnection): _196.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _196.IdentifiedConnectionAminoMsg): _196.IdentifiedConnection;
                    toAminoMsg(message: _196.IdentifiedConnection): _196.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _196.IdentifiedConnectionProtoMsg): _196.IdentifiedConnection;
                    toProto(message: _196.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _196.IdentifiedConnection): _196.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _196.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Counterparty;
                    fromJSON(object: any): _196.Counterparty;
                    toJSON(message: _196.Counterparty): unknown;
                    fromPartial(object: Partial<_196.Counterparty>): _196.Counterparty;
                    fromAmino(object: _196.CounterpartyAmino): _196.Counterparty;
                    toAmino(message: _196.Counterparty): _196.CounterpartyAmino;
                    fromAminoMsg(object: _196.CounterpartyAminoMsg): _196.Counterparty;
                    toAminoMsg(message: _196.Counterparty): _196.CounterpartyAminoMsg;
                    fromProtoMsg(message: _196.CounterpartyProtoMsg): _196.Counterparty;
                    toProto(message: _196.Counterparty): Uint8Array;
                    toProtoMsg(message: _196.Counterparty): _196.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _196.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ClientPaths;
                    fromJSON(object: any): _196.ClientPaths;
                    toJSON(message: _196.ClientPaths): unknown;
                    fromPartial(object: Partial<_196.ClientPaths>): _196.ClientPaths;
                    fromAmino(object: _196.ClientPathsAmino): _196.ClientPaths;
                    toAmino(message: _196.ClientPaths): _196.ClientPathsAmino;
                    fromAminoMsg(object: _196.ClientPathsAminoMsg): _196.ClientPaths;
                    toAminoMsg(message: _196.ClientPaths): _196.ClientPathsAminoMsg;
                    fromProtoMsg(message: _196.ClientPathsProtoMsg): _196.ClientPaths;
                    toProto(message: _196.ClientPaths): Uint8Array;
                    toProtoMsg(message: _196.ClientPaths): _196.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _196.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ConnectionPaths;
                    fromJSON(object: any): _196.ConnectionPaths;
                    toJSON(message: _196.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_196.ConnectionPaths>): _196.ConnectionPaths;
                    fromAmino(object: _196.ConnectionPathsAmino): _196.ConnectionPaths;
                    toAmino(message: _196.ConnectionPaths): _196.ConnectionPathsAmino;
                    fromAminoMsg(object: _196.ConnectionPathsAminoMsg): _196.ConnectionPaths;
                    toAminoMsg(message: _196.ConnectionPaths): _196.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _196.ConnectionPathsProtoMsg): _196.ConnectionPaths;
                    toProto(message: _196.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _196.ConnectionPaths): _196.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _196.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Version;
                    fromJSON(object: any): _196.Version;
                    toJSON(message: _196.Version): unknown;
                    fromPartial(object: Partial<_196.Version>): _196.Version;
                    fromAmino(object: _196.VersionAmino): _196.Version;
                    toAmino(message: _196.Version): _196.VersionAmino;
                    fromAminoMsg(object: _196.VersionAminoMsg): _196.Version;
                    toAminoMsg(message: _196.Version): _196.VersionAminoMsg;
                    fromProtoMsg(message: _196.VersionProtoMsg): _196.Version;
                    toProto(message: _196.Version): Uint8Array;
                    toProtoMsg(message: _196.Version): _196.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _196.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Params;
                    fromJSON(object: any): _196.Params;
                    toJSON(message: _196.Params): unknown;
                    fromPartial(object: Partial<_196.Params>): _196.Params;
                    fromAmino(object: _196.ParamsAmino): _196.Params;
                    toAmino(message: _196.Params): _196.ParamsAmino;
                    fromAminoMsg(object: _196.ParamsAminoMsg): _196.Params;
                    toAminoMsg(message: _196.Params): _196.ParamsAminoMsg;
                    fromProtoMsg(message: _196.ParamsProtoMsg): _196.Params;
                    toProto(message: _196.Params): Uint8Array;
                    toProtoMsg(message: _196.Params): _196.ParamsProtoMsg;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _353.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _200.QueryAppVersionRequest): Promise<_200.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    typeUrl: string;
                    encode(message: _200.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.QueryAppVersionRequest;
                    fromJSON(object: any): _200.QueryAppVersionRequest;
                    toJSON(message: _200.QueryAppVersionRequest): unknown;
                    fromPartial(object: Partial<_200.QueryAppVersionRequest>): _200.QueryAppVersionRequest;
                    fromAmino(object: _200.QueryAppVersionRequestAmino): _200.QueryAppVersionRequest;
                    toAmino(message: _200.QueryAppVersionRequest): _200.QueryAppVersionRequestAmino;
                    fromAminoMsg(object: _200.QueryAppVersionRequestAminoMsg): _200.QueryAppVersionRequest;
                    toAminoMsg(message: _200.QueryAppVersionRequest): _200.QueryAppVersionRequestAminoMsg;
                    fromProtoMsg(message: _200.QueryAppVersionRequestProtoMsg): _200.QueryAppVersionRequest;
                    toProto(message: _200.QueryAppVersionRequest): Uint8Array;
                    toProtoMsg(message: _200.QueryAppVersionRequest): _200.QueryAppVersionRequestProtoMsg;
                };
                QueryAppVersionResponse: {
                    typeUrl: string;
                    encode(message: _200.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.QueryAppVersionResponse;
                    fromJSON(object: any): _200.QueryAppVersionResponse;
                    toJSON(message: _200.QueryAppVersionResponse): unknown;
                    fromPartial(object: Partial<_200.QueryAppVersionResponse>): _200.QueryAppVersionResponse;
                    fromAmino(object: _200.QueryAppVersionResponseAmino): _200.QueryAppVersionResponse;
                    toAmino(message: _200.QueryAppVersionResponse): _200.QueryAppVersionResponseAmino;
                    fromAminoMsg(object: _200.QueryAppVersionResponseAminoMsg): _200.QueryAppVersionResponse;
                    toAminoMsg(message: _200.QueryAppVersionResponse): _200.QueryAppVersionResponseAminoMsg;
                    fromProtoMsg(message: _200.QueryAppVersionResponseProtoMsg): _200.QueryAppVersionResponse;
                    toProto(message: _200.QueryAppVersionResponse): Uint8Array;
                    toProtoMsg(message: _200.QueryAppVersionResponse): _200.QueryAppVersionResponseProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _201.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.GenesisState;
                    fromJSON(object: any): _201.GenesisState;
                    toJSON(message: _201.GenesisState): unknown;
                    fromPartial(object: Partial<_201.GenesisState>): _201.GenesisState;
                    fromAmino(object: _201.GenesisStateAmino): _201.GenesisState;
                    toAmino(message: _201.GenesisState): _201.GenesisStateAmino;
                    fromAminoMsg(object: _201.GenesisStateAminoMsg): _201.GenesisState;
                    toAminoMsg(message: _201.GenesisState): _201.GenesisStateAminoMsg;
                    fromProtoMsg(message: _201.GenesisStateProtoMsg): _201.GenesisState;
                    toProto(message: _201.GenesisState): Uint8Array;
                    toProtoMsg(message: _201.GenesisState): _201.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _202.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ClientState;
                    fromJSON(object: any): _202.ClientState;
                    toJSON(message: _202.ClientState): unknown;
                    fromPartial(object: Partial<_202.ClientState>): _202.ClientState;
                    fromAmino(object: _202.ClientStateAmino): _202.ClientState;
                    toAmino(message: _202.ClientState): _202.ClientStateAmino;
                    fromAminoMsg(object: _202.ClientStateAminoMsg): _202.ClientState;
                    toAminoMsg(message: _202.ClientState): _202.ClientStateAminoMsg;
                    fromProtoMsg(message: _202.ClientStateProtoMsg): _202.ClientState;
                    toProto(message: _202.ClientState): Uint8Array;
                    toProtoMsg(message: _202.ClientState): _202.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _203.DataType;
                dataTypeToJSON(object: _203.DataType): string;
                DataType: typeof _203.DataType;
                DataTypeSDKType: typeof _203.DataType;
                DataTypeAmino: typeof _203.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _203.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.ClientState;
                    fromJSON(object: any): _203.ClientState;
                    toJSON(message: _203.ClientState): unknown;
                    fromPartial(object: Partial<_203.ClientState>): _203.ClientState;
                    fromAmino(object: _203.ClientStateAmino): _203.ClientState;
                    toAmino(message: _203.ClientState): _203.ClientStateAmino;
                    fromAminoMsg(object: _203.ClientStateAminoMsg): _203.ClientState;
                    toAminoMsg(message: _203.ClientState): _203.ClientStateAminoMsg;
                    fromProtoMsg(message: _203.ClientStateProtoMsg): _203.ClientState;
                    toProto(message: _203.ClientState): Uint8Array;
                    toProtoMsg(message: _203.ClientState): _203.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _203.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.ConsensusState;
                    fromJSON(object: any): _203.ConsensusState;
                    toJSON(message: _203.ConsensusState): unknown;
                    fromPartial(object: Partial<_203.ConsensusState>): _203.ConsensusState;
                    fromAmino(object: _203.ConsensusStateAmino): _203.ConsensusState;
                    toAmino(message: _203.ConsensusState): _203.ConsensusStateAmino;
                    fromAminoMsg(object: _203.ConsensusStateAminoMsg): _203.ConsensusState;
                    toAminoMsg(message: _203.ConsensusState): _203.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _203.ConsensusStateProtoMsg): _203.ConsensusState;
                    toProto(message: _203.ConsensusState): Uint8Array;
                    toProtoMsg(message: _203.ConsensusState): _203.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _203.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.Header;
                    fromJSON(object: any): _203.Header;
                    toJSON(message: _203.Header): unknown;
                    fromPartial(object: Partial<_203.Header>): _203.Header;
                    fromAmino(object: _203.HeaderAmino): _203.Header;
                    toAmino(message: _203.Header): _203.HeaderAmino;
                    fromAminoMsg(object: _203.HeaderAminoMsg): _203.Header;
                    toAminoMsg(message: _203.Header): _203.HeaderAminoMsg;
                    fromProtoMsg(message: _203.HeaderProtoMsg): _203.Header;
                    toProto(message: _203.Header): Uint8Array;
                    toProtoMsg(message: _203.Header): _203.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _203.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.Misbehaviour;
                    fromJSON(object: any): _203.Misbehaviour;
                    toJSON(message: _203.Misbehaviour): unknown;
                    fromPartial(object: Partial<_203.Misbehaviour>): _203.Misbehaviour;
                    fromAmino(object: _203.MisbehaviourAmino): _203.Misbehaviour;
                    toAmino(message: _203.Misbehaviour): _203.MisbehaviourAmino;
                    fromAminoMsg(object: _203.MisbehaviourAminoMsg): _203.Misbehaviour;
                    toAminoMsg(message: _203.Misbehaviour): _203.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _203.MisbehaviourProtoMsg): _203.Misbehaviour;
                    toProto(message: _203.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _203.Misbehaviour): _203.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _203.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.SignatureAndData;
                    fromJSON(object: any): _203.SignatureAndData;
                    toJSON(message: _203.SignatureAndData): unknown;
                    fromPartial(object: Partial<_203.SignatureAndData>): _203.SignatureAndData;
                    fromAmino(object: _203.SignatureAndDataAmino): _203.SignatureAndData;
                    toAmino(message: _203.SignatureAndData): _203.SignatureAndDataAmino;
                    fromAminoMsg(object: _203.SignatureAndDataAminoMsg): _203.SignatureAndData;
                    toAminoMsg(message: _203.SignatureAndData): _203.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _203.SignatureAndDataProtoMsg): _203.SignatureAndData;
                    toProto(message: _203.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _203.SignatureAndData): _203.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _203.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.TimestampedSignatureData;
                    fromJSON(object: any): _203.TimestampedSignatureData;
                    toJSON(message: _203.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_203.TimestampedSignatureData>): _203.TimestampedSignatureData;
                    fromAmino(object: _203.TimestampedSignatureDataAmino): _203.TimestampedSignatureData;
                    toAmino(message: _203.TimestampedSignatureData): _203.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _203.TimestampedSignatureDataAminoMsg): _203.TimestampedSignatureData;
                    toAminoMsg(message: _203.TimestampedSignatureData): _203.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _203.TimestampedSignatureDataProtoMsg): _203.TimestampedSignatureData;
                    toProto(message: _203.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _203.TimestampedSignatureData): _203.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _203.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.SignBytes;
                    fromJSON(object: any): _203.SignBytes;
                    toJSON(message: _203.SignBytes): unknown;
                    fromPartial(object: Partial<_203.SignBytes>): _203.SignBytes;
                    fromAmino(object: _203.SignBytesAmino): _203.SignBytes;
                    toAmino(message: _203.SignBytes): _203.SignBytesAmino;
                    fromAminoMsg(object: _203.SignBytesAminoMsg): _203.SignBytes;
                    toAminoMsg(message: _203.SignBytes): _203.SignBytesAminoMsg;
                    fromProtoMsg(message: _203.SignBytesProtoMsg): _203.SignBytes;
                    toProto(message: _203.SignBytes): Uint8Array;
                    toProtoMsg(message: _203.SignBytes): _203.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _203.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.HeaderData;
                    fromJSON(object: any): _203.HeaderData;
                    toJSON(message: _203.HeaderData): unknown;
                    fromPartial(object: Partial<_203.HeaderData>): _203.HeaderData;
                    fromAmino(object: _203.HeaderDataAmino): _203.HeaderData;
                    toAmino(message: _203.HeaderData): _203.HeaderDataAmino;
                    fromAminoMsg(object: _203.HeaderDataAminoMsg): _203.HeaderData;
                    toAminoMsg(message: _203.HeaderData): _203.HeaderDataAminoMsg;
                    fromProtoMsg(message: _203.HeaderDataProtoMsg): _203.HeaderData;
                    toProto(message: _203.HeaderData): Uint8Array;
                    toProtoMsg(message: _203.HeaderData): _203.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _203.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.ClientStateData;
                    fromJSON(object: any): _203.ClientStateData;
                    toJSON(message: _203.ClientStateData): unknown;
                    fromPartial(object: Partial<_203.ClientStateData>): _203.ClientStateData;
                    fromAmino(object: _203.ClientStateDataAmino): _203.ClientStateData;
                    toAmino(message: _203.ClientStateData): _203.ClientStateDataAmino;
                    fromAminoMsg(object: _203.ClientStateDataAminoMsg): _203.ClientStateData;
                    toAminoMsg(message: _203.ClientStateData): _203.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _203.ClientStateDataProtoMsg): _203.ClientStateData;
                    toProto(message: _203.ClientStateData): Uint8Array;
                    toProtoMsg(message: _203.ClientStateData): _203.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _203.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.ConsensusStateData;
                    fromJSON(object: any): _203.ConsensusStateData;
                    toJSON(message: _203.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_203.ConsensusStateData>): _203.ConsensusStateData;
                    fromAmino(object: _203.ConsensusStateDataAmino): _203.ConsensusStateData;
                    toAmino(message: _203.ConsensusStateData): _203.ConsensusStateDataAmino;
                    fromAminoMsg(object: _203.ConsensusStateDataAminoMsg): _203.ConsensusStateData;
                    toAminoMsg(message: _203.ConsensusStateData): _203.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _203.ConsensusStateDataProtoMsg): _203.ConsensusStateData;
                    toProto(message: _203.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _203.ConsensusStateData): _203.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _203.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.ConnectionStateData;
                    fromJSON(object: any): _203.ConnectionStateData;
                    toJSON(message: _203.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_203.ConnectionStateData>): _203.ConnectionStateData;
                    fromAmino(object: _203.ConnectionStateDataAmino): _203.ConnectionStateData;
                    toAmino(message: _203.ConnectionStateData): _203.ConnectionStateDataAmino;
                    fromAminoMsg(object: _203.ConnectionStateDataAminoMsg): _203.ConnectionStateData;
                    toAminoMsg(message: _203.ConnectionStateData): _203.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _203.ConnectionStateDataProtoMsg): _203.ConnectionStateData;
                    toProto(message: _203.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _203.ConnectionStateData): _203.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _203.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.ChannelStateData;
                    fromJSON(object: any): _203.ChannelStateData;
                    toJSON(message: _203.ChannelStateData): unknown;
                    fromPartial(object: Partial<_203.ChannelStateData>): _203.ChannelStateData;
                    fromAmino(object: _203.ChannelStateDataAmino): _203.ChannelStateData;
                    toAmino(message: _203.ChannelStateData): _203.ChannelStateDataAmino;
                    fromAminoMsg(object: _203.ChannelStateDataAminoMsg): _203.ChannelStateData;
                    toAminoMsg(message: _203.ChannelStateData): _203.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _203.ChannelStateDataProtoMsg): _203.ChannelStateData;
                    toProto(message: _203.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _203.ChannelStateData): _203.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _203.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.PacketCommitmentData;
                    fromJSON(object: any): _203.PacketCommitmentData;
                    toJSON(message: _203.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_203.PacketCommitmentData>): _203.PacketCommitmentData;
                    fromAmino(object: _203.PacketCommitmentDataAmino): _203.PacketCommitmentData;
                    toAmino(message: _203.PacketCommitmentData): _203.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _203.PacketCommitmentDataAminoMsg): _203.PacketCommitmentData;
                    toAminoMsg(message: _203.PacketCommitmentData): _203.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _203.PacketCommitmentDataProtoMsg): _203.PacketCommitmentData;
                    toProto(message: _203.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _203.PacketCommitmentData): _203.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _203.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.PacketAcknowledgementData;
                    fromJSON(object: any): _203.PacketAcknowledgementData;
                    toJSON(message: _203.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_203.PacketAcknowledgementData>): _203.PacketAcknowledgementData;
                    fromAmino(object: _203.PacketAcknowledgementDataAmino): _203.PacketAcknowledgementData;
                    toAmino(message: _203.PacketAcknowledgementData): _203.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _203.PacketAcknowledgementDataAminoMsg): _203.PacketAcknowledgementData;
                    toAminoMsg(message: _203.PacketAcknowledgementData): _203.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _203.PacketAcknowledgementDataProtoMsg): _203.PacketAcknowledgementData;
                    toProto(message: _203.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _203.PacketAcknowledgementData): _203.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _203.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.PacketReceiptAbsenceData;
                    fromJSON(object: any): _203.PacketReceiptAbsenceData;
                    toJSON(message: _203.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_203.PacketReceiptAbsenceData>): _203.PacketReceiptAbsenceData;
                    fromAmino(object: _203.PacketReceiptAbsenceDataAmino): _203.PacketReceiptAbsenceData;
                    toAmino(message: _203.PacketReceiptAbsenceData): _203.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _203.PacketReceiptAbsenceDataAminoMsg): _203.PacketReceiptAbsenceData;
                    toAminoMsg(message: _203.PacketReceiptAbsenceData): _203.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _203.PacketReceiptAbsenceDataProtoMsg): _203.PacketReceiptAbsenceData;
                    toProto(message: _203.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _203.PacketReceiptAbsenceData): _203.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _203.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.NextSequenceRecvData;
                    fromJSON(object: any): _203.NextSequenceRecvData;
                    toJSON(message: _203.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_203.NextSequenceRecvData>): _203.NextSequenceRecvData;
                    fromAmino(object: _203.NextSequenceRecvDataAmino): _203.NextSequenceRecvData;
                    toAmino(message: _203.NextSequenceRecvData): _203.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _203.NextSequenceRecvDataAminoMsg): _203.NextSequenceRecvData;
                    toAminoMsg(message: _203.NextSequenceRecvData): _203.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _203.NextSequenceRecvDataProtoMsg): _203.NextSequenceRecvData;
                    toProto(message: _203.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _203.NextSequenceRecvData): _203.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _204.DataType;
                dataTypeToJSON(object: _204.DataType): string;
                DataType: typeof _204.DataType;
                DataTypeSDKType: typeof _204.DataType;
                DataTypeAmino: typeof _204.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _204.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ClientState;
                    fromJSON(object: any): _204.ClientState;
                    toJSON(message: _204.ClientState): unknown;
                    fromPartial(object: Partial<_204.ClientState>): _204.ClientState;
                    fromAmino(object: _204.ClientStateAmino): _204.ClientState;
                    toAmino(message: _204.ClientState): _204.ClientStateAmino;
                    fromAminoMsg(object: _204.ClientStateAminoMsg): _204.ClientState;
                    toAminoMsg(message: _204.ClientState): _204.ClientStateAminoMsg;
                    fromProtoMsg(message: _204.ClientStateProtoMsg): _204.ClientState;
                    toProto(message: _204.ClientState): Uint8Array;
                    toProtoMsg(message: _204.ClientState): _204.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _204.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ConsensusState;
                    fromJSON(object: any): _204.ConsensusState;
                    toJSON(message: _204.ConsensusState): unknown;
                    fromPartial(object: Partial<_204.ConsensusState>): _204.ConsensusState;
                    fromAmino(object: _204.ConsensusStateAmino): _204.ConsensusState;
                    toAmino(message: _204.ConsensusState): _204.ConsensusStateAmino;
                    fromAminoMsg(object: _204.ConsensusStateAminoMsg): _204.ConsensusState;
                    toAminoMsg(message: _204.ConsensusState): _204.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _204.ConsensusStateProtoMsg): _204.ConsensusState;
                    toProto(message: _204.ConsensusState): Uint8Array;
                    toProtoMsg(message: _204.ConsensusState): _204.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _204.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.Header;
                    fromJSON(object: any): _204.Header;
                    toJSON(message: _204.Header): unknown;
                    fromPartial(object: Partial<_204.Header>): _204.Header;
                    fromAmino(object: _204.HeaderAmino): _204.Header;
                    toAmino(message: _204.Header): _204.HeaderAmino;
                    fromAminoMsg(object: _204.HeaderAminoMsg): _204.Header;
                    toAminoMsg(message: _204.Header): _204.HeaderAminoMsg;
                    fromProtoMsg(message: _204.HeaderProtoMsg): _204.Header;
                    toProto(message: _204.Header): Uint8Array;
                    toProtoMsg(message: _204.Header): _204.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _204.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.Misbehaviour;
                    fromJSON(object: any): _204.Misbehaviour;
                    toJSON(message: _204.Misbehaviour): unknown;
                    fromPartial(object: Partial<_204.Misbehaviour>): _204.Misbehaviour;
                    fromAmino(object: _204.MisbehaviourAmino): _204.Misbehaviour;
                    toAmino(message: _204.Misbehaviour): _204.MisbehaviourAmino;
                    fromAminoMsg(object: _204.MisbehaviourAminoMsg): _204.Misbehaviour;
                    toAminoMsg(message: _204.Misbehaviour): _204.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _204.MisbehaviourProtoMsg): _204.Misbehaviour;
                    toProto(message: _204.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _204.Misbehaviour): _204.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _204.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.SignatureAndData;
                    fromJSON(object: any): _204.SignatureAndData;
                    toJSON(message: _204.SignatureAndData): unknown;
                    fromPartial(object: Partial<_204.SignatureAndData>): _204.SignatureAndData;
                    fromAmino(object: _204.SignatureAndDataAmino): _204.SignatureAndData;
                    toAmino(message: _204.SignatureAndData): _204.SignatureAndDataAmino;
                    fromAminoMsg(object: _204.SignatureAndDataAminoMsg): _204.SignatureAndData;
                    toAminoMsg(message: _204.SignatureAndData): _204.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _204.SignatureAndDataProtoMsg): _204.SignatureAndData;
                    toProto(message: _204.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _204.SignatureAndData): _204.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _204.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.TimestampedSignatureData;
                    fromJSON(object: any): _204.TimestampedSignatureData;
                    toJSON(message: _204.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_204.TimestampedSignatureData>): _204.TimestampedSignatureData;
                    fromAmino(object: _204.TimestampedSignatureDataAmino): _204.TimestampedSignatureData;
                    toAmino(message: _204.TimestampedSignatureData): _204.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _204.TimestampedSignatureDataAminoMsg): _204.TimestampedSignatureData;
                    toAminoMsg(message: _204.TimestampedSignatureData): _204.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _204.TimestampedSignatureDataProtoMsg): _204.TimestampedSignatureData;
                    toProto(message: _204.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _204.TimestampedSignatureData): _204.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _204.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.SignBytes;
                    fromJSON(object: any): _204.SignBytes;
                    toJSON(message: _204.SignBytes): unknown;
                    fromPartial(object: Partial<_204.SignBytes>): _204.SignBytes;
                    fromAmino(object: _204.SignBytesAmino): _204.SignBytes;
                    toAmino(message: _204.SignBytes): _204.SignBytesAmino;
                    fromAminoMsg(object: _204.SignBytesAminoMsg): _204.SignBytes;
                    toAminoMsg(message: _204.SignBytes): _204.SignBytesAminoMsg;
                    fromProtoMsg(message: _204.SignBytesProtoMsg): _204.SignBytes;
                    toProto(message: _204.SignBytes): Uint8Array;
                    toProtoMsg(message: _204.SignBytes): _204.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _204.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.HeaderData;
                    fromJSON(object: any): _204.HeaderData;
                    toJSON(message: _204.HeaderData): unknown;
                    fromPartial(object: Partial<_204.HeaderData>): _204.HeaderData;
                    fromAmino(object: _204.HeaderDataAmino): _204.HeaderData;
                    toAmino(message: _204.HeaderData): _204.HeaderDataAmino;
                    fromAminoMsg(object: _204.HeaderDataAminoMsg): _204.HeaderData;
                    toAminoMsg(message: _204.HeaderData): _204.HeaderDataAminoMsg;
                    fromProtoMsg(message: _204.HeaderDataProtoMsg): _204.HeaderData;
                    toProto(message: _204.HeaderData): Uint8Array;
                    toProtoMsg(message: _204.HeaderData): _204.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _204.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ClientStateData;
                    fromJSON(object: any): _204.ClientStateData;
                    toJSON(message: _204.ClientStateData): unknown;
                    fromPartial(object: Partial<_204.ClientStateData>): _204.ClientStateData;
                    fromAmino(object: _204.ClientStateDataAmino): _204.ClientStateData;
                    toAmino(message: _204.ClientStateData): _204.ClientStateDataAmino;
                    fromAminoMsg(object: _204.ClientStateDataAminoMsg): _204.ClientStateData;
                    toAminoMsg(message: _204.ClientStateData): _204.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _204.ClientStateDataProtoMsg): _204.ClientStateData;
                    toProto(message: _204.ClientStateData): Uint8Array;
                    toProtoMsg(message: _204.ClientStateData): _204.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _204.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ConsensusStateData;
                    fromJSON(object: any): _204.ConsensusStateData;
                    toJSON(message: _204.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_204.ConsensusStateData>): _204.ConsensusStateData;
                    fromAmino(object: _204.ConsensusStateDataAmino): _204.ConsensusStateData;
                    toAmino(message: _204.ConsensusStateData): _204.ConsensusStateDataAmino;
                    fromAminoMsg(object: _204.ConsensusStateDataAminoMsg): _204.ConsensusStateData;
                    toAminoMsg(message: _204.ConsensusStateData): _204.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _204.ConsensusStateDataProtoMsg): _204.ConsensusStateData;
                    toProto(message: _204.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _204.ConsensusStateData): _204.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _204.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ConnectionStateData;
                    fromJSON(object: any): _204.ConnectionStateData;
                    toJSON(message: _204.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_204.ConnectionStateData>): _204.ConnectionStateData;
                    fromAmino(object: _204.ConnectionStateDataAmino): _204.ConnectionStateData;
                    toAmino(message: _204.ConnectionStateData): _204.ConnectionStateDataAmino;
                    fromAminoMsg(object: _204.ConnectionStateDataAminoMsg): _204.ConnectionStateData;
                    toAminoMsg(message: _204.ConnectionStateData): _204.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _204.ConnectionStateDataProtoMsg): _204.ConnectionStateData;
                    toProto(message: _204.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _204.ConnectionStateData): _204.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _204.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ChannelStateData;
                    fromJSON(object: any): _204.ChannelStateData;
                    toJSON(message: _204.ChannelStateData): unknown;
                    fromPartial(object: Partial<_204.ChannelStateData>): _204.ChannelStateData;
                    fromAmino(object: _204.ChannelStateDataAmino): _204.ChannelStateData;
                    toAmino(message: _204.ChannelStateData): _204.ChannelStateDataAmino;
                    fromAminoMsg(object: _204.ChannelStateDataAminoMsg): _204.ChannelStateData;
                    toAminoMsg(message: _204.ChannelStateData): _204.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _204.ChannelStateDataProtoMsg): _204.ChannelStateData;
                    toProto(message: _204.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _204.ChannelStateData): _204.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _204.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.PacketCommitmentData;
                    fromJSON(object: any): _204.PacketCommitmentData;
                    toJSON(message: _204.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_204.PacketCommitmentData>): _204.PacketCommitmentData;
                    fromAmino(object: _204.PacketCommitmentDataAmino): _204.PacketCommitmentData;
                    toAmino(message: _204.PacketCommitmentData): _204.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _204.PacketCommitmentDataAminoMsg): _204.PacketCommitmentData;
                    toAminoMsg(message: _204.PacketCommitmentData): _204.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _204.PacketCommitmentDataProtoMsg): _204.PacketCommitmentData;
                    toProto(message: _204.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _204.PacketCommitmentData): _204.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _204.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.PacketAcknowledgementData;
                    fromJSON(object: any): _204.PacketAcknowledgementData;
                    toJSON(message: _204.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_204.PacketAcknowledgementData>): _204.PacketAcknowledgementData;
                    fromAmino(object: _204.PacketAcknowledgementDataAmino): _204.PacketAcknowledgementData;
                    toAmino(message: _204.PacketAcknowledgementData): _204.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _204.PacketAcknowledgementDataAminoMsg): _204.PacketAcknowledgementData;
                    toAminoMsg(message: _204.PacketAcknowledgementData): _204.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _204.PacketAcknowledgementDataProtoMsg): _204.PacketAcknowledgementData;
                    toProto(message: _204.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _204.PacketAcknowledgementData): _204.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _204.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.PacketReceiptAbsenceData;
                    fromJSON(object: any): _204.PacketReceiptAbsenceData;
                    toJSON(message: _204.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_204.PacketReceiptAbsenceData>): _204.PacketReceiptAbsenceData;
                    fromAmino(object: _204.PacketReceiptAbsenceDataAmino): _204.PacketReceiptAbsenceData;
                    toAmino(message: _204.PacketReceiptAbsenceData): _204.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _204.PacketReceiptAbsenceDataAminoMsg): _204.PacketReceiptAbsenceData;
                    toAminoMsg(message: _204.PacketReceiptAbsenceData): _204.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _204.PacketReceiptAbsenceDataProtoMsg): _204.PacketReceiptAbsenceData;
                    toProto(message: _204.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _204.PacketReceiptAbsenceData): _204.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _204.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.NextSequenceRecvData;
                    fromJSON(object: any): _204.NextSequenceRecvData;
                    toJSON(message: _204.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_204.NextSequenceRecvData>): _204.NextSequenceRecvData;
                    fromAmino(object: _204.NextSequenceRecvDataAmino): _204.NextSequenceRecvData;
                    toAmino(message: _204.NextSequenceRecvData): _204.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _204.NextSequenceRecvDataAminoMsg): _204.NextSequenceRecvData;
                    toAminoMsg(message: _204.NextSequenceRecvData): _204.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _204.NextSequenceRecvDataProtoMsg): _204.NextSequenceRecvData;
                    toProto(message: _204.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _204.NextSequenceRecvData): _204.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _205.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ClientState;
                    fromJSON(object: any): _205.ClientState;
                    toJSON(message: _205.ClientState): unknown;
                    fromPartial(object: Partial<_205.ClientState>): _205.ClientState;
                    fromAmino(object: _205.ClientStateAmino): _205.ClientState;
                    toAmino(message: _205.ClientState): _205.ClientStateAmino;
                    fromAminoMsg(object: _205.ClientStateAminoMsg): _205.ClientState;
                    toAminoMsg(message: _205.ClientState): _205.ClientStateAminoMsg;
                    fromProtoMsg(message: _205.ClientStateProtoMsg): _205.ClientState;
                    toProto(message: _205.ClientState): Uint8Array;
                    toProtoMsg(message: _205.ClientState): _205.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _205.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ConsensusState;
                    fromJSON(object: any): _205.ConsensusState;
                    toJSON(message: _205.ConsensusState): unknown;
                    fromPartial(object: Partial<_205.ConsensusState>): _205.ConsensusState;
                    fromAmino(object: _205.ConsensusStateAmino): _205.ConsensusState;
                    toAmino(message: _205.ConsensusState): _205.ConsensusStateAmino;
                    fromAminoMsg(object: _205.ConsensusStateAminoMsg): _205.ConsensusState;
                    toAminoMsg(message: _205.ConsensusState): _205.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _205.ConsensusStateProtoMsg): _205.ConsensusState;
                    toProto(message: _205.ConsensusState): Uint8Array;
                    toProtoMsg(message: _205.ConsensusState): _205.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _205.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Misbehaviour;
                    fromJSON(object: any): _205.Misbehaviour;
                    toJSON(message: _205.Misbehaviour): unknown;
                    fromPartial(object: Partial<_205.Misbehaviour>): _205.Misbehaviour;
                    fromAmino(object: _205.MisbehaviourAmino): _205.Misbehaviour;
                    toAmino(message: _205.Misbehaviour): _205.MisbehaviourAmino;
                    fromAminoMsg(object: _205.MisbehaviourAminoMsg): _205.Misbehaviour;
                    toAminoMsg(message: _205.Misbehaviour): _205.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _205.MisbehaviourProtoMsg): _205.Misbehaviour;
                    toProto(message: _205.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _205.Misbehaviour): _205.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _205.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Header;
                    fromJSON(object: any): _205.Header;
                    toJSON(message: _205.Header): unknown;
                    fromPartial(object: Partial<_205.Header>): _205.Header;
                    fromAmino(object: _205.HeaderAmino): _205.Header;
                    toAmino(message: _205.Header): _205.HeaderAmino;
                    fromAminoMsg(object: _205.HeaderAminoMsg): _205.Header;
                    toAminoMsg(message: _205.Header): _205.HeaderAminoMsg;
                    fromProtoMsg(message: _205.HeaderProtoMsg): _205.Header;
                    toProto(message: _205.Header): Uint8Array;
                    toProtoMsg(message: _205.Header): _205.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _205.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Fraction;
                    fromJSON(object: any): _205.Fraction;
                    toJSON(message: _205.Fraction): unknown;
                    fromPartial(object: Partial<_205.Fraction>): _205.Fraction;
                    fromAmino(object: _205.FractionAmino): _205.Fraction;
                    toAmino(message: _205.Fraction): _205.FractionAmino;
                    fromAminoMsg(object: _205.FractionAminoMsg): _205.Fraction;
                    toAminoMsg(message: _205.Fraction): _205.FractionAminoMsg;
                    fromProtoMsg(message: _205.FractionProtoMsg): _205.Fraction;
                    toProto(message: _205.Fraction): Uint8Array;
                    toProtoMsg(message: _205.Fraction): _205.FractionProtoMsg;
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _354.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _355.MsgClientImpl;
                    };
                    client: {
                        v1: _356.MsgClientImpl;
                    };
                    connection: {
                        v1: _357.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _183.QueryDenomTraceRequest): Promise<_183.QueryDenomTraceResponse>;
                            denomTraces(request?: _183.QueryDenomTracesRequest): Promise<_183.QueryDenomTracesResponse>;
                            params(request?: _183.QueryParamsRequest): Promise<_183.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _189.QueryChannelRequest): Promise<_189.QueryChannelResponse>;
                            channels(request?: _189.QueryChannelsRequest): Promise<_189.QueryChannelsResponse>;
                            connectionChannels(request: _189.QueryConnectionChannelsRequest): Promise<_189.QueryConnectionChannelsResponse>;
                            channelClientState(request: _189.QueryChannelClientStateRequest): Promise<_189.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _189.QueryChannelConsensusStateRequest): Promise<_189.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _189.QueryPacketCommitmentRequest): Promise<_189.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _189.QueryPacketCommitmentsRequest): Promise<_189.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _189.QueryPacketReceiptRequest): Promise<_189.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _189.QueryPacketAcknowledgementRequest): Promise<_189.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _189.QueryPacketAcknowledgementsRequest): Promise<_189.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _189.QueryUnreceivedPacketsRequest): Promise<_189.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _189.QueryUnreceivedAcksRequest): Promise<_189.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _189.QueryNextSequenceReceiveRequest): Promise<_189.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _193.QueryClientStateRequest): Promise<_193.QueryClientStateResponse>;
                            clientStates(request?: _193.QueryClientStatesRequest): Promise<_193.QueryClientStatesResponse>;
                            consensusState(request: _193.QueryConsensusStateRequest): Promise<_193.QueryConsensusStateResponse>;
                            consensusStates(request: _193.QueryConsensusStatesRequest): Promise<_193.QueryConsensusStatesResponse>;
                            clientStatus(request: _193.QueryClientStatusRequest): Promise<_193.QueryClientStatusResponse>;
                            clientParams(request?: _193.QueryClientParamsRequest): Promise<_193.QueryClientParamsResponse>;
                            upgradedClientState(request?: _193.QueryUpgradedClientStateRequest): Promise<_193.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _193.QueryUpgradedConsensusStateRequest): Promise<_193.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _198.QueryConnectionRequest): Promise<_198.QueryConnectionResponse>;
                            connections(request?: _198.QueryConnectionsRequest): Promise<_198.QueryConnectionsResponse>;
                            clientConnections(request: _198.QueryClientConnectionsRequest): Promise<_198.QueryClientConnectionsResponse>;
                            connectionClientState(request: _198.QueryConnectionClientStateRequest): Promise<_198.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _198.QueryConnectionConsensusStateRequest): Promise<_198.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _200.QueryAppVersionRequest): Promise<_200.QueryAppVersionResponse>;
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _345.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _346.LCDQueryClient;
                    };
                    client: {
                        v1: _347.LCDQueryClient;
                    };
                    connection: {
                        v1: _348.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
