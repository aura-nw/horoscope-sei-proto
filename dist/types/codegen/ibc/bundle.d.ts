import * as _130 from "./applications/transfer/v1/genesis";
import * as _131 from "./applications/transfer/v1/query";
import * as _132 from "./applications/transfer/v1/transfer";
import * as _133 from "./applications/transfer/v1/tx";
import * as _134 from "./applications/transfer/v2/packet";
import * as _135 from "./core/channel/v1/channel";
import * as _136 from "./core/channel/v1/genesis";
import * as _137 from "./core/channel/v1/query";
import * as _138 from "./core/channel/v1/tx";
import * as _139 from "./core/client/v1/client";
import * as _140 from "./core/client/v1/genesis";
import * as _141 from "./core/client/v1/query";
import * as _142 from "./core/client/v1/tx";
import * as _143 from "./core/commitment/v1/commitment";
import * as _144 from "./core/connection/v1/connection";
import * as _145 from "./core/connection/v1/genesis";
import * as _146 from "./core/connection/v1/query";
import * as _147 from "./core/connection/v1/tx";
import * as _148 from "./lightclients/localhost/v1/localhost";
import * as _149 from "./lightclients/solomachine/v1/solomachine";
import * as _150 from "./lightclients/solomachine/v2/solomachine";
import * as _151 from "./lightclients/tendermint/v1/tendermint";
import * as _248 from "./applications/transfer/v1/query.lcd";
import * as _249 from "./core/channel/v1/query.lcd";
import * as _250 from "./core/client/v1/query.lcd";
import * as _251 from "./core/connection/v1/query.lcd";
import * as _252 from "./applications/transfer/v1/query.rpc.Query";
import * as _253 from "./core/channel/v1/query.rpc.Query";
import * as _254 from "./core/client/v1/query.rpc.Query";
import * as _255 from "./core/connection/v1/query.rpc.Query";
import * as _256 from "./applications/transfer/v1/tx.rpc.msg";
import * as _257 from "./core/channel/v1/tx.rpc.msg";
import * as _258 from "./core/client/v1/tx.rpc.msg";
import * as _259 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _256.MsgClientImpl;
                QueryClientImpl: typeof _252.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _131.QueryDenomTraceRequest): Promise<_131.QueryDenomTraceResponse>;
                    denomTraces(request?: _131.QueryDenomTracesRequest): Promise<_131.QueryDenomTracesResponse>;
                    params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _248.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _133.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _133.MsgTransfer): {
                            typeUrl: string;
                            value: _133.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _133.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _133.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _133.MsgTransfer): {
                            typeUrl: string;
                            value: _133.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _133.MsgTransfer) => _133.MsgTransferAmino;
                        fromAmino: (object: _133.MsgTransferAmino) => _133.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _133.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgTransfer;
                    fromJSON(object: any): _133.MsgTransfer;
                    toJSON(message: _133.MsgTransfer): unknown;
                    fromPartial(object: Partial<_133.MsgTransfer>): _133.MsgTransfer;
                    fromAmino(object: _133.MsgTransferAmino): _133.MsgTransfer;
                    toAmino(message: _133.MsgTransfer): _133.MsgTransferAmino;
                    fromAminoMsg(object: _133.MsgTransferAminoMsg): _133.MsgTransfer;
                    toAminoMsg(message: _133.MsgTransfer): _133.MsgTransferAminoMsg;
                    fromProtoMsg(message: _133.MsgTransferProtoMsg): _133.MsgTransfer;
                    toProto(message: _133.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _133.MsgTransfer): _133.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _133.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgTransferResponse;
                    fromJSON(_: any): _133.MsgTransferResponse;
                    toJSON(_: _133.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_133.MsgTransferResponse>): _133.MsgTransferResponse;
                    fromAmino(_: _133.MsgTransferResponseAmino): _133.MsgTransferResponse;
                    toAmino(_: _133.MsgTransferResponse): _133.MsgTransferResponseAmino;
                    fromAminoMsg(object: _133.MsgTransferResponseAminoMsg): _133.MsgTransferResponse;
                    toAminoMsg(message: _133.MsgTransferResponse): _133.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgTransferResponseProtoMsg): _133.MsgTransferResponse;
                    toProto(message: _133.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgTransferResponse): _133.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _132.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.DenomTrace;
                    fromJSON(object: any): _132.DenomTrace;
                    toJSON(message: _132.DenomTrace): unknown;
                    fromPartial(object: Partial<_132.DenomTrace>): _132.DenomTrace;
                    fromAmino(object: _132.DenomTraceAmino): _132.DenomTrace;
                    toAmino(message: _132.DenomTrace): _132.DenomTraceAmino;
                    fromAminoMsg(object: _132.DenomTraceAminoMsg): _132.DenomTrace;
                    toAminoMsg(message: _132.DenomTrace): _132.DenomTraceAminoMsg;
                    fromProtoMsg(message: _132.DenomTraceProtoMsg): _132.DenomTrace;
                    toProto(message: _132.DenomTrace): Uint8Array;
                    toProtoMsg(message: _132.DenomTrace): _132.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                    fromJSON(object: any): _132.Params;
                    toJSON(message: _132.Params): unknown;
                    fromPartial(object: Partial<_132.Params>): _132.Params;
                    fromAmino(object: _132.ParamsAmino): _132.Params;
                    toAmino(message: _132.Params): _132.ParamsAmino;
                    fromAminoMsg(object: _132.ParamsAminoMsg): _132.Params;
                    toAminoMsg(message: _132.Params): _132.ParamsAminoMsg;
                    fromProtoMsg(message: _132.ParamsProtoMsg): _132.Params;
                    toProto(message: _132.Params): Uint8Array;
                    toProtoMsg(message: _132.Params): _132.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _131.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryDenomTraceRequest;
                    fromJSON(object: any): _131.QueryDenomTraceRequest;
                    toJSON(message: _131.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_131.QueryDenomTraceRequest>): _131.QueryDenomTraceRequest;
                    fromAmino(object: _131.QueryDenomTraceRequestAmino): _131.QueryDenomTraceRequest;
                    toAmino(message: _131.QueryDenomTraceRequest): _131.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _131.QueryDenomTraceRequestAminoMsg): _131.QueryDenomTraceRequest;
                    toAminoMsg(message: _131.QueryDenomTraceRequest): _131.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _131.QueryDenomTraceRequestProtoMsg): _131.QueryDenomTraceRequest;
                    toProto(message: _131.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _131.QueryDenomTraceRequest): _131.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _131.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryDenomTraceResponse;
                    fromJSON(object: any): _131.QueryDenomTraceResponse;
                    toJSON(message: _131.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_131.QueryDenomTraceResponse>): _131.QueryDenomTraceResponse;
                    fromAmino(object: _131.QueryDenomTraceResponseAmino): _131.QueryDenomTraceResponse;
                    toAmino(message: _131.QueryDenomTraceResponse): _131.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _131.QueryDenomTraceResponseAminoMsg): _131.QueryDenomTraceResponse;
                    toAminoMsg(message: _131.QueryDenomTraceResponse): _131.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _131.QueryDenomTraceResponseProtoMsg): _131.QueryDenomTraceResponse;
                    toProto(message: _131.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _131.QueryDenomTraceResponse): _131.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _131.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryDenomTracesRequest;
                    fromJSON(object: any): _131.QueryDenomTracesRequest;
                    toJSON(message: _131.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_131.QueryDenomTracesRequest>): _131.QueryDenomTracesRequest;
                    fromAmino(object: _131.QueryDenomTracesRequestAmino): _131.QueryDenomTracesRequest;
                    toAmino(message: _131.QueryDenomTracesRequest): _131.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _131.QueryDenomTracesRequestAminoMsg): _131.QueryDenomTracesRequest;
                    toAminoMsg(message: _131.QueryDenomTracesRequest): _131.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _131.QueryDenomTracesRequestProtoMsg): _131.QueryDenomTracesRequest;
                    toProto(message: _131.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _131.QueryDenomTracesRequest): _131.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _131.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryDenomTracesResponse;
                    fromJSON(object: any): _131.QueryDenomTracesResponse;
                    toJSON(message: _131.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_131.QueryDenomTracesResponse>): _131.QueryDenomTracesResponse;
                    fromAmino(object: _131.QueryDenomTracesResponseAmino): _131.QueryDenomTracesResponse;
                    toAmino(message: _131.QueryDenomTracesResponse): _131.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _131.QueryDenomTracesResponseAminoMsg): _131.QueryDenomTracesResponse;
                    toAminoMsg(message: _131.QueryDenomTracesResponse): _131.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _131.QueryDenomTracesResponseProtoMsg): _131.QueryDenomTracesResponse;
                    toProto(message: _131.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _131.QueryDenomTracesResponse): _131.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _131.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryParamsRequest;
                    fromJSON(_: any): _131.QueryParamsRequest;
                    toJSON(_: _131.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_131.QueryParamsRequest>): _131.QueryParamsRequest;
                    fromAmino(_: _131.QueryParamsRequestAmino): _131.QueryParamsRequest;
                    toAmino(_: _131.QueryParamsRequest): _131.QueryParamsRequestAmino;
                    fromAminoMsg(object: _131.QueryParamsRequestAminoMsg): _131.QueryParamsRequest;
                    toAminoMsg(message: _131.QueryParamsRequest): _131.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _131.QueryParamsRequestProtoMsg): _131.QueryParamsRequest;
                    toProto(message: _131.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _131.QueryParamsRequest): _131.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _131.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryParamsResponse;
                    fromJSON(object: any): _131.QueryParamsResponse;
                    toJSON(message: _131.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_131.QueryParamsResponse>): _131.QueryParamsResponse;
                    fromAmino(object: _131.QueryParamsResponseAmino): _131.QueryParamsResponse;
                    toAmino(message: _131.QueryParamsResponse): _131.QueryParamsResponseAmino;
                    fromAminoMsg(object: _131.QueryParamsResponseAminoMsg): _131.QueryParamsResponse;
                    toAminoMsg(message: _131.QueryParamsResponse): _131.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _131.QueryParamsResponseProtoMsg): _131.QueryParamsResponse;
                    toProto(message: _131.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _131.QueryParamsResponse): _131.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
                    fromJSON(object: any): _130.GenesisState;
                    toJSON(message: _130.GenesisState): unknown;
                    fromPartial(object: Partial<_130.GenesisState>): _130.GenesisState;
                    fromAmino(object: _130.GenesisStateAmino): _130.GenesisState;
                    toAmino(message: _130.GenesisState): _130.GenesisStateAmino;
                    fromAminoMsg(object: _130.GenesisStateAminoMsg): _130.GenesisState;
                    toAminoMsg(message: _130.GenesisState): _130.GenesisStateAminoMsg;
                    fromProtoMsg(message: _130.GenesisStateProtoMsg): _130.GenesisState;
                    toProto(message: _130.GenesisState): Uint8Array;
                    toProtoMsg(message: _130.GenesisState): _130.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _134.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.FungibleTokenPacketData;
                    fromJSON(object: any): _134.FungibleTokenPacketData;
                    toJSON(message: _134.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_134.FungibleTokenPacketData>): _134.FungibleTokenPacketData;
                    fromAmino(object: _134.FungibleTokenPacketDataAmino): _134.FungibleTokenPacketData;
                    toAmino(message: _134.FungibleTokenPacketData): _134.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _134.FungibleTokenPacketDataAminoMsg): _134.FungibleTokenPacketData;
                    toAminoMsg(message: _134.FungibleTokenPacketData): _134.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _134.FungibleTokenPacketDataProtoMsg): _134.FungibleTokenPacketData;
                    toProto(message: _134.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _134.FungibleTokenPacketData): _134.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _257.MsgClientImpl;
                QueryClientImpl: typeof _253.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _137.QueryChannelRequest): Promise<_137.QueryChannelResponse>;
                    channels(request?: _137.QueryChannelsRequest): Promise<_137.QueryChannelsResponse>;
                    connectionChannels(request: _137.QueryConnectionChannelsRequest): Promise<_137.QueryConnectionChannelsResponse>;
                    channelClientState(request: _137.QueryChannelClientStateRequest): Promise<_137.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _137.QueryChannelConsensusStateRequest): Promise<_137.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _137.QueryPacketCommitmentRequest): Promise<_137.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _137.QueryPacketCommitmentsRequest): Promise<_137.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _137.QueryPacketReceiptRequest): Promise<_137.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _137.QueryPacketAcknowledgementRequest): Promise<_137.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _137.QueryPacketAcknowledgementsRequest): Promise<_137.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _137.QueryUnreceivedPacketsRequest): Promise<_137.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _137.QueryUnreceivedAcksRequest): Promise<_137.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _137.QueryNextSequenceReceiveRequest): Promise<_137.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _249.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _138.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _138.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _138.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _138.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _138.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _138.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _138.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _138.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _138.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _138.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _138.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _138.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _138.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _138.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _138.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _138.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _138.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _138.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _138.MsgRecvPacket): {
                            typeUrl: string;
                            value: _138.MsgRecvPacket;
                        };
                        timeout(value: _138.MsgTimeout): {
                            typeUrl: string;
                            value: _138.MsgTimeout;
                        };
                        timeoutOnClose(value: _138.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _138.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _138.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _138.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _138.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _138.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _138.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _138.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _138.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _138.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _138.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _138.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _138.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _138.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _138.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _138.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _138.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _138.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _138.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _138.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _138.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _138.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _138.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _138.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _138.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _138.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _138.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _138.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _138.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _138.MsgRecvPacket): {
                            typeUrl: string;
                            value: _138.MsgRecvPacket;
                        };
                        timeout(value: _138.MsgTimeout): {
                            typeUrl: string;
                            value: _138.MsgTimeout;
                        };
                        timeoutOnClose(value: _138.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _138.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _138.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _138.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _138.MsgChannelOpenInit) => _138.MsgChannelOpenInitAmino;
                        fromAmino: (object: _138.MsgChannelOpenInitAmino) => _138.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _138.MsgChannelOpenTry) => _138.MsgChannelOpenTryAmino;
                        fromAmino: (object: _138.MsgChannelOpenTryAmino) => _138.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _138.MsgChannelOpenAck) => _138.MsgChannelOpenAckAmino;
                        fromAmino: (object: _138.MsgChannelOpenAckAmino) => _138.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _138.MsgChannelOpenConfirm) => _138.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _138.MsgChannelOpenConfirmAmino) => _138.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _138.MsgChannelCloseInit) => _138.MsgChannelCloseInitAmino;
                        fromAmino: (object: _138.MsgChannelCloseInitAmino) => _138.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _138.MsgChannelCloseConfirm) => _138.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _138.MsgChannelCloseConfirmAmino) => _138.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _138.MsgRecvPacket) => _138.MsgRecvPacketAmino;
                        fromAmino: (object: _138.MsgRecvPacketAmino) => _138.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _138.MsgTimeout) => _138.MsgTimeoutAmino;
                        fromAmino: (object: _138.MsgTimeoutAmino) => _138.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _138.MsgTimeoutOnClose) => _138.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _138.MsgTimeoutOnCloseAmino) => _138.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _138.MsgAcknowledgement) => _138.MsgAcknowledgementAmino;
                        fromAmino: (object: _138.MsgAcknowledgementAmino) => _138.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _138.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelOpenInit;
                    fromJSON(object: any): _138.MsgChannelOpenInit;
                    toJSON(message: _138.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_138.MsgChannelOpenInit>): _138.MsgChannelOpenInit;
                    fromAmino(object: _138.MsgChannelOpenInitAmino): _138.MsgChannelOpenInit;
                    toAmino(message: _138.MsgChannelOpenInit): _138.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _138.MsgChannelOpenInitAminoMsg): _138.MsgChannelOpenInit;
                    toAminoMsg(message: _138.MsgChannelOpenInit): _138.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelOpenInitProtoMsg): _138.MsgChannelOpenInit;
                    toProto(message: _138.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelOpenInit): _138.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _138.MsgChannelOpenInitResponse;
                    toJSON(_: _138.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_138.MsgChannelOpenInitResponse>): _138.MsgChannelOpenInitResponse;
                    fromAmino(_: _138.MsgChannelOpenInitResponseAmino): _138.MsgChannelOpenInitResponse;
                    toAmino(_: _138.MsgChannelOpenInitResponse): _138.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _138.MsgChannelOpenInitResponseAminoMsg): _138.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _138.MsgChannelOpenInitResponse): _138.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelOpenInitResponseProtoMsg): _138.MsgChannelOpenInitResponse;
                    toProto(message: _138.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelOpenInitResponse): _138.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _138.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelOpenTry;
                    fromJSON(object: any): _138.MsgChannelOpenTry;
                    toJSON(message: _138.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_138.MsgChannelOpenTry>): _138.MsgChannelOpenTry;
                    fromAmino(object: _138.MsgChannelOpenTryAmino): _138.MsgChannelOpenTry;
                    toAmino(message: _138.MsgChannelOpenTry): _138.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _138.MsgChannelOpenTryAminoMsg): _138.MsgChannelOpenTry;
                    toAminoMsg(message: _138.MsgChannelOpenTry): _138.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelOpenTryProtoMsg): _138.MsgChannelOpenTry;
                    toProto(message: _138.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelOpenTry): _138.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _138.MsgChannelOpenTryResponse;
                    toJSON(_: _138.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_138.MsgChannelOpenTryResponse>): _138.MsgChannelOpenTryResponse;
                    fromAmino(_: _138.MsgChannelOpenTryResponseAmino): _138.MsgChannelOpenTryResponse;
                    toAmino(_: _138.MsgChannelOpenTryResponse): _138.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _138.MsgChannelOpenTryResponseAminoMsg): _138.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _138.MsgChannelOpenTryResponse): _138.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelOpenTryResponseProtoMsg): _138.MsgChannelOpenTryResponse;
                    toProto(message: _138.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelOpenTryResponse): _138.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _138.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelOpenAck;
                    fromJSON(object: any): _138.MsgChannelOpenAck;
                    toJSON(message: _138.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_138.MsgChannelOpenAck>): _138.MsgChannelOpenAck;
                    fromAmino(object: _138.MsgChannelOpenAckAmino): _138.MsgChannelOpenAck;
                    toAmino(message: _138.MsgChannelOpenAck): _138.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _138.MsgChannelOpenAckAminoMsg): _138.MsgChannelOpenAck;
                    toAminoMsg(message: _138.MsgChannelOpenAck): _138.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelOpenAckProtoMsg): _138.MsgChannelOpenAck;
                    toProto(message: _138.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelOpenAck): _138.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _138.MsgChannelOpenAckResponse;
                    toJSON(_: _138.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_138.MsgChannelOpenAckResponse>): _138.MsgChannelOpenAckResponse;
                    fromAmino(_: _138.MsgChannelOpenAckResponseAmino): _138.MsgChannelOpenAckResponse;
                    toAmino(_: _138.MsgChannelOpenAckResponse): _138.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _138.MsgChannelOpenAckResponseAminoMsg): _138.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _138.MsgChannelOpenAckResponse): _138.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelOpenAckResponseProtoMsg): _138.MsgChannelOpenAckResponse;
                    toProto(message: _138.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelOpenAckResponse): _138.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _138.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelOpenConfirm;
                    fromJSON(object: any): _138.MsgChannelOpenConfirm;
                    toJSON(message: _138.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_138.MsgChannelOpenConfirm>): _138.MsgChannelOpenConfirm;
                    fromAmino(object: _138.MsgChannelOpenConfirmAmino): _138.MsgChannelOpenConfirm;
                    toAmino(message: _138.MsgChannelOpenConfirm): _138.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _138.MsgChannelOpenConfirmAminoMsg): _138.MsgChannelOpenConfirm;
                    toAminoMsg(message: _138.MsgChannelOpenConfirm): _138.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelOpenConfirmProtoMsg): _138.MsgChannelOpenConfirm;
                    toProto(message: _138.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelOpenConfirm): _138.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _138.MsgChannelOpenConfirmResponse;
                    toJSON(_: _138.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_138.MsgChannelOpenConfirmResponse>): _138.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _138.MsgChannelOpenConfirmResponseAmino): _138.MsgChannelOpenConfirmResponse;
                    toAmino(_: _138.MsgChannelOpenConfirmResponse): _138.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _138.MsgChannelOpenConfirmResponseAminoMsg): _138.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _138.MsgChannelOpenConfirmResponse): _138.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelOpenConfirmResponseProtoMsg): _138.MsgChannelOpenConfirmResponse;
                    toProto(message: _138.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelOpenConfirmResponse): _138.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _138.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelCloseInit;
                    fromJSON(object: any): _138.MsgChannelCloseInit;
                    toJSON(message: _138.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_138.MsgChannelCloseInit>): _138.MsgChannelCloseInit;
                    fromAmino(object: _138.MsgChannelCloseInitAmino): _138.MsgChannelCloseInit;
                    toAmino(message: _138.MsgChannelCloseInit): _138.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _138.MsgChannelCloseInitAminoMsg): _138.MsgChannelCloseInit;
                    toAminoMsg(message: _138.MsgChannelCloseInit): _138.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelCloseInitProtoMsg): _138.MsgChannelCloseInit;
                    toProto(message: _138.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelCloseInit): _138.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _138.MsgChannelCloseInitResponse;
                    toJSON(_: _138.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_138.MsgChannelCloseInitResponse>): _138.MsgChannelCloseInitResponse;
                    fromAmino(_: _138.MsgChannelCloseInitResponseAmino): _138.MsgChannelCloseInitResponse;
                    toAmino(_: _138.MsgChannelCloseInitResponse): _138.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _138.MsgChannelCloseInitResponseAminoMsg): _138.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _138.MsgChannelCloseInitResponse): _138.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelCloseInitResponseProtoMsg): _138.MsgChannelCloseInitResponse;
                    toProto(message: _138.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelCloseInitResponse): _138.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _138.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelCloseConfirm;
                    fromJSON(object: any): _138.MsgChannelCloseConfirm;
                    toJSON(message: _138.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_138.MsgChannelCloseConfirm>): _138.MsgChannelCloseConfirm;
                    fromAmino(object: _138.MsgChannelCloseConfirmAmino): _138.MsgChannelCloseConfirm;
                    toAmino(message: _138.MsgChannelCloseConfirm): _138.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _138.MsgChannelCloseConfirmAminoMsg): _138.MsgChannelCloseConfirm;
                    toAminoMsg(message: _138.MsgChannelCloseConfirm): _138.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelCloseConfirmProtoMsg): _138.MsgChannelCloseConfirm;
                    toProto(message: _138.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelCloseConfirm): _138.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _138.MsgChannelCloseConfirmResponse;
                    toJSON(_: _138.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_138.MsgChannelCloseConfirmResponse>): _138.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _138.MsgChannelCloseConfirmResponseAmino): _138.MsgChannelCloseConfirmResponse;
                    toAmino(_: _138.MsgChannelCloseConfirmResponse): _138.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _138.MsgChannelCloseConfirmResponseAminoMsg): _138.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _138.MsgChannelCloseConfirmResponse): _138.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgChannelCloseConfirmResponseProtoMsg): _138.MsgChannelCloseConfirmResponse;
                    toProto(message: _138.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgChannelCloseConfirmResponse): _138.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _138.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgRecvPacket;
                    fromJSON(object: any): _138.MsgRecvPacket;
                    toJSON(message: _138.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_138.MsgRecvPacket>): _138.MsgRecvPacket;
                    fromAmino(object: _138.MsgRecvPacketAmino): _138.MsgRecvPacket;
                    toAmino(message: _138.MsgRecvPacket): _138.MsgRecvPacketAmino;
                    fromAminoMsg(object: _138.MsgRecvPacketAminoMsg): _138.MsgRecvPacket;
                    toAminoMsg(message: _138.MsgRecvPacket): _138.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _138.MsgRecvPacketProtoMsg): _138.MsgRecvPacket;
                    toProto(message: _138.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _138.MsgRecvPacket): _138.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgRecvPacketResponse;
                    fromJSON(_: any): _138.MsgRecvPacketResponse;
                    toJSON(_: _138.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_138.MsgRecvPacketResponse>): _138.MsgRecvPacketResponse;
                    fromAmino(_: _138.MsgRecvPacketResponseAmino): _138.MsgRecvPacketResponse;
                    toAmino(_: _138.MsgRecvPacketResponse): _138.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _138.MsgRecvPacketResponseAminoMsg): _138.MsgRecvPacketResponse;
                    toAminoMsg(message: _138.MsgRecvPacketResponse): _138.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgRecvPacketResponseProtoMsg): _138.MsgRecvPacketResponse;
                    toProto(message: _138.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgRecvPacketResponse): _138.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _138.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgTimeout;
                    fromJSON(object: any): _138.MsgTimeout;
                    toJSON(message: _138.MsgTimeout): unknown;
                    fromPartial(object: Partial<_138.MsgTimeout>): _138.MsgTimeout;
                    fromAmino(object: _138.MsgTimeoutAmino): _138.MsgTimeout;
                    toAmino(message: _138.MsgTimeout): _138.MsgTimeoutAmino;
                    fromAminoMsg(object: _138.MsgTimeoutAminoMsg): _138.MsgTimeout;
                    toAminoMsg(message: _138.MsgTimeout): _138.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _138.MsgTimeoutProtoMsg): _138.MsgTimeout;
                    toProto(message: _138.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _138.MsgTimeout): _138.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgTimeoutResponse;
                    fromJSON(_: any): _138.MsgTimeoutResponse;
                    toJSON(_: _138.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_138.MsgTimeoutResponse>): _138.MsgTimeoutResponse;
                    fromAmino(_: _138.MsgTimeoutResponseAmino): _138.MsgTimeoutResponse;
                    toAmino(_: _138.MsgTimeoutResponse): _138.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _138.MsgTimeoutResponseAminoMsg): _138.MsgTimeoutResponse;
                    toAminoMsg(message: _138.MsgTimeoutResponse): _138.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgTimeoutResponseProtoMsg): _138.MsgTimeoutResponse;
                    toProto(message: _138.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgTimeoutResponse): _138.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _138.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgTimeoutOnClose;
                    fromJSON(object: any): _138.MsgTimeoutOnClose;
                    toJSON(message: _138.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_138.MsgTimeoutOnClose>): _138.MsgTimeoutOnClose;
                    fromAmino(object: _138.MsgTimeoutOnCloseAmino): _138.MsgTimeoutOnClose;
                    toAmino(message: _138.MsgTimeoutOnClose): _138.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _138.MsgTimeoutOnCloseAminoMsg): _138.MsgTimeoutOnClose;
                    toAminoMsg(message: _138.MsgTimeoutOnClose): _138.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _138.MsgTimeoutOnCloseProtoMsg): _138.MsgTimeoutOnClose;
                    toProto(message: _138.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _138.MsgTimeoutOnClose): _138.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _138.MsgTimeoutOnCloseResponse;
                    toJSON(_: _138.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_138.MsgTimeoutOnCloseResponse>): _138.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _138.MsgTimeoutOnCloseResponseAmino): _138.MsgTimeoutOnCloseResponse;
                    toAmino(_: _138.MsgTimeoutOnCloseResponse): _138.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _138.MsgTimeoutOnCloseResponseAminoMsg): _138.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _138.MsgTimeoutOnCloseResponse): _138.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgTimeoutOnCloseResponseProtoMsg): _138.MsgTimeoutOnCloseResponse;
                    toProto(message: _138.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgTimeoutOnCloseResponse): _138.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _138.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgAcknowledgement;
                    fromJSON(object: any): _138.MsgAcknowledgement;
                    toJSON(message: _138.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_138.MsgAcknowledgement>): _138.MsgAcknowledgement;
                    fromAmino(object: _138.MsgAcknowledgementAmino): _138.MsgAcknowledgement;
                    toAmino(message: _138.MsgAcknowledgement): _138.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _138.MsgAcknowledgementAminoMsg): _138.MsgAcknowledgement;
                    toAminoMsg(message: _138.MsgAcknowledgement): _138.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _138.MsgAcknowledgementProtoMsg): _138.MsgAcknowledgement;
                    toProto(message: _138.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _138.MsgAcknowledgement): _138.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(_: _138.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgAcknowledgementResponse;
                    fromJSON(_: any): _138.MsgAcknowledgementResponse;
                    toJSON(_: _138.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_138.MsgAcknowledgementResponse>): _138.MsgAcknowledgementResponse;
                    fromAmino(_: _138.MsgAcknowledgementResponseAmino): _138.MsgAcknowledgementResponse;
                    toAmino(_: _138.MsgAcknowledgementResponse): _138.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _138.MsgAcknowledgementResponseAminoMsg): _138.MsgAcknowledgementResponse;
                    toAminoMsg(message: _138.MsgAcknowledgementResponse): _138.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _138.MsgAcknowledgementResponseProtoMsg): _138.MsgAcknowledgementResponse;
                    toProto(message: _138.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _138.MsgAcknowledgementResponse): _138.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryChannelRequest;
                    fromJSON(object: any): _137.QueryChannelRequest;
                    toJSON(message: _137.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_137.QueryChannelRequest>): _137.QueryChannelRequest;
                    fromAmino(object: _137.QueryChannelRequestAmino): _137.QueryChannelRequest;
                    toAmino(message: _137.QueryChannelRequest): _137.QueryChannelRequestAmino;
                    fromAminoMsg(object: _137.QueryChannelRequestAminoMsg): _137.QueryChannelRequest;
                    toAminoMsg(message: _137.QueryChannelRequest): _137.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryChannelRequestProtoMsg): _137.QueryChannelRequest;
                    toProto(message: _137.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryChannelRequest): _137.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryChannelResponse;
                    fromJSON(object: any): _137.QueryChannelResponse;
                    toJSON(message: _137.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_137.QueryChannelResponse>): _137.QueryChannelResponse;
                    fromAmino(object: _137.QueryChannelResponseAmino): _137.QueryChannelResponse;
                    toAmino(message: _137.QueryChannelResponse): _137.QueryChannelResponseAmino;
                    fromAminoMsg(object: _137.QueryChannelResponseAminoMsg): _137.QueryChannelResponse;
                    toAminoMsg(message: _137.QueryChannelResponse): _137.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryChannelResponseProtoMsg): _137.QueryChannelResponse;
                    toProto(message: _137.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryChannelResponse): _137.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryChannelsRequest;
                    fromJSON(object: any): _137.QueryChannelsRequest;
                    toJSON(message: _137.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_137.QueryChannelsRequest>): _137.QueryChannelsRequest;
                    fromAmino(object: _137.QueryChannelsRequestAmino): _137.QueryChannelsRequest;
                    toAmino(message: _137.QueryChannelsRequest): _137.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _137.QueryChannelsRequestAminoMsg): _137.QueryChannelsRequest;
                    toAminoMsg(message: _137.QueryChannelsRequest): _137.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryChannelsRequestProtoMsg): _137.QueryChannelsRequest;
                    toProto(message: _137.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryChannelsRequest): _137.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryChannelsResponse;
                    fromJSON(object: any): _137.QueryChannelsResponse;
                    toJSON(message: _137.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_137.QueryChannelsResponse>): _137.QueryChannelsResponse;
                    fromAmino(object: _137.QueryChannelsResponseAmino): _137.QueryChannelsResponse;
                    toAmino(message: _137.QueryChannelsResponse): _137.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _137.QueryChannelsResponseAminoMsg): _137.QueryChannelsResponse;
                    toAminoMsg(message: _137.QueryChannelsResponse): _137.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryChannelsResponseProtoMsg): _137.QueryChannelsResponse;
                    toProto(message: _137.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryChannelsResponse): _137.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _137.QueryConnectionChannelsRequest;
                    toJSON(message: _137.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_137.QueryConnectionChannelsRequest>): _137.QueryConnectionChannelsRequest;
                    fromAmino(object: _137.QueryConnectionChannelsRequestAmino): _137.QueryConnectionChannelsRequest;
                    toAmino(message: _137.QueryConnectionChannelsRequest): _137.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _137.QueryConnectionChannelsRequestAminoMsg): _137.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _137.QueryConnectionChannelsRequest): _137.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryConnectionChannelsRequestProtoMsg): _137.QueryConnectionChannelsRequest;
                    toProto(message: _137.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryConnectionChannelsRequest): _137.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _137.QueryConnectionChannelsResponse;
                    toJSON(message: _137.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_137.QueryConnectionChannelsResponse>): _137.QueryConnectionChannelsResponse;
                    fromAmino(object: _137.QueryConnectionChannelsResponseAmino): _137.QueryConnectionChannelsResponse;
                    toAmino(message: _137.QueryConnectionChannelsResponse): _137.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _137.QueryConnectionChannelsResponseAminoMsg): _137.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _137.QueryConnectionChannelsResponse): _137.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryConnectionChannelsResponseProtoMsg): _137.QueryConnectionChannelsResponse;
                    toProto(message: _137.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryConnectionChannelsResponse): _137.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryChannelClientStateRequest;
                    fromJSON(object: any): _137.QueryChannelClientStateRequest;
                    toJSON(message: _137.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_137.QueryChannelClientStateRequest>): _137.QueryChannelClientStateRequest;
                    fromAmino(object: _137.QueryChannelClientStateRequestAmino): _137.QueryChannelClientStateRequest;
                    toAmino(message: _137.QueryChannelClientStateRequest): _137.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _137.QueryChannelClientStateRequestAminoMsg): _137.QueryChannelClientStateRequest;
                    toAminoMsg(message: _137.QueryChannelClientStateRequest): _137.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryChannelClientStateRequestProtoMsg): _137.QueryChannelClientStateRequest;
                    toProto(message: _137.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryChannelClientStateRequest): _137.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryChannelClientStateResponse;
                    fromJSON(object: any): _137.QueryChannelClientStateResponse;
                    toJSON(message: _137.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_137.QueryChannelClientStateResponse>): _137.QueryChannelClientStateResponse;
                    fromAmino(object: _137.QueryChannelClientStateResponseAmino): _137.QueryChannelClientStateResponse;
                    toAmino(message: _137.QueryChannelClientStateResponse): _137.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _137.QueryChannelClientStateResponseAminoMsg): _137.QueryChannelClientStateResponse;
                    toAminoMsg(message: _137.QueryChannelClientStateResponse): _137.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryChannelClientStateResponseProtoMsg): _137.QueryChannelClientStateResponse;
                    toProto(message: _137.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryChannelClientStateResponse): _137.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _137.QueryChannelConsensusStateRequest;
                    toJSON(message: _137.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_137.QueryChannelConsensusStateRequest>): _137.QueryChannelConsensusStateRequest;
                    fromAmino(object: _137.QueryChannelConsensusStateRequestAmino): _137.QueryChannelConsensusStateRequest;
                    toAmino(message: _137.QueryChannelConsensusStateRequest): _137.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _137.QueryChannelConsensusStateRequestAminoMsg): _137.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _137.QueryChannelConsensusStateRequest): _137.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryChannelConsensusStateRequestProtoMsg): _137.QueryChannelConsensusStateRequest;
                    toProto(message: _137.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryChannelConsensusStateRequest): _137.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _137.QueryChannelConsensusStateResponse;
                    toJSON(message: _137.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_137.QueryChannelConsensusStateResponse>): _137.QueryChannelConsensusStateResponse;
                    fromAmino(object: _137.QueryChannelConsensusStateResponseAmino): _137.QueryChannelConsensusStateResponse;
                    toAmino(message: _137.QueryChannelConsensusStateResponse): _137.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _137.QueryChannelConsensusStateResponseAminoMsg): _137.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _137.QueryChannelConsensusStateResponse): _137.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryChannelConsensusStateResponseProtoMsg): _137.QueryChannelConsensusStateResponse;
                    toProto(message: _137.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryChannelConsensusStateResponse): _137.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _137.QueryPacketCommitmentRequest;
                    toJSON(message: _137.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_137.QueryPacketCommitmentRequest>): _137.QueryPacketCommitmentRequest;
                    fromAmino(object: _137.QueryPacketCommitmentRequestAmino): _137.QueryPacketCommitmentRequest;
                    toAmino(message: _137.QueryPacketCommitmentRequest): _137.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _137.QueryPacketCommitmentRequestAminoMsg): _137.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _137.QueryPacketCommitmentRequest): _137.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketCommitmentRequestProtoMsg): _137.QueryPacketCommitmentRequest;
                    toProto(message: _137.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketCommitmentRequest): _137.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _137.QueryPacketCommitmentResponse;
                    toJSON(message: _137.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_137.QueryPacketCommitmentResponse>): _137.QueryPacketCommitmentResponse;
                    fromAmino(object: _137.QueryPacketCommitmentResponseAmino): _137.QueryPacketCommitmentResponse;
                    toAmino(message: _137.QueryPacketCommitmentResponse): _137.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _137.QueryPacketCommitmentResponseAminoMsg): _137.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _137.QueryPacketCommitmentResponse): _137.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketCommitmentResponseProtoMsg): _137.QueryPacketCommitmentResponse;
                    toProto(message: _137.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketCommitmentResponse): _137.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _137.QueryPacketCommitmentsRequest;
                    toJSON(message: _137.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_137.QueryPacketCommitmentsRequest>): _137.QueryPacketCommitmentsRequest;
                    fromAmino(object: _137.QueryPacketCommitmentsRequestAmino): _137.QueryPacketCommitmentsRequest;
                    toAmino(message: _137.QueryPacketCommitmentsRequest): _137.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _137.QueryPacketCommitmentsRequestAminoMsg): _137.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _137.QueryPacketCommitmentsRequest): _137.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketCommitmentsRequestProtoMsg): _137.QueryPacketCommitmentsRequest;
                    toProto(message: _137.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketCommitmentsRequest): _137.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _137.QueryPacketCommitmentsResponse;
                    toJSON(message: _137.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_137.QueryPacketCommitmentsResponse>): _137.QueryPacketCommitmentsResponse;
                    fromAmino(object: _137.QueryPacketCommitmentsResponseAmino): _137.QueryPacketCommitmentsResponse;
                    toAmino(message: _137.QueryPacketCommitmentsResponse): _137.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _137.QueryPacketCommitmentsResponseAminoMsg): _137.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _137.QueryPacketCommitmentsResponse): _137.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketCommitmentsResponseProtoMsg): _137.QueryPacketCommitmentsResponse;
                    toProto(message: _137.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketCommitmentsResponse): _137.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketReceiptRequest;
                    fromJSON(object: any): _137.QueryPacketReceiptRequest;
                    toJSON(message: _137.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_137.QueryPacketReceiptRequest>): _137.QueryPacketReceiptRequest;
                    fromAmino(object: _137.QueryPacketReceiptRequestAmino): _137.QueryPacketReceiptRequest;
                    toAmino(message: _137.QueryPacketReceiptRequest): _137.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _137.QueryPacketReceiptRequestAminoMsg): _137.QueryPacketReceiptRequest;
                    toAminoMsg(message: _137.QueryPacketReceiptRequest): _137.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketReceiptRequestProtoMsg): _137.QueryPacketReceiptRequest;
                    toProto(message: _137.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketReceiptRequest): _137.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketReceiptResponse;
                    fromJSON(object: any): _137.QueryPacketReceiptResponse;
                    toJSON(message: _137.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_137.QueryPacketReceiptResponse>): _137.QueryPacketReceiptResponse;
                    fromAmino(object: _137.QueryPacketReceiptResponseAmino): _137.QueryPacketReceiptResponse;
                    toAmino(message: _137.QueryPacketReceiptResponse): _137.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _137.QueryPacketReceiptResponseAminoMsg): _137.QueryPacketReceiptResponse;
                    toAminoMsg(message: _137.QueryPacketReceiptResponse): _137.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketReceiptResponseProtoMsg): _137.QueryPacketReceiptResponse;
                    toProto(message: _137.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketReceiptResponse): _137.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _137.QueryPacketAcknowledgementRequest;
                    toJSON(message: _137.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_137.QueryPacketAcknowledgementRequest>): _137.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _137.QueryPacketAcknowledgementRequestAmino): _137.QueryPacketAcknowledgementRequest;
                    toAmino(message: _137.QueryPacketAcknowledgementRequest): _137.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _137.QueryPacketAcknowledgementRequestAminoMsg): _137.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _137.QueryPacketAcknowledgementRequest): _137.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketAcknowledgementRequestProtoMsg): _137.QueryPacketAcknowledgementRequest;
                    toProto(message: _137.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketAcknowledgementRequest): _137.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _137.QueryPacketAcknowledgementResponse;
                    toJSON(message: _137.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_137.QueryPacketAcknowledgementResponse>): _137.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _137.QueryPacketAcknowledgementResponseAmino): _137.QueryPacketAcknowledgementResponse;
                    toAmino(message: _137.QueryPacketAcknowledgementResponse): _137.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _137.QueryPacketAcknowledgementResponseAminoMsg): _137.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _137.QueryPacketAcknowledgementResponse): _137.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketAcknowledgementResponseProtoMsg): _137.QueryPacketAcknowledgementResponse;
                    toProto(message: _137.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketAcknowledgementResponse): _137.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _137.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _137.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_137.QueryPacketAcknowledgementsRequest>): _137.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _137.QueryPacketAcknowledgementsRequestAmino): _137.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _137.QueryPacketAcknowledgementsRequest): _137.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _137.QueryPacketAcknowledgementsRequestAminoMsg): _137.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _137.QueryPacketAcknowledgementsRequest): _137.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketAcknowledgementsRequestProtoMsg): _137.QueryPacketAcknowledgementsRequest;
                    toProto(message: _137.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketAcknowledgementsRequest): _137.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _137.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _137.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_137.QueryPacketAcknowledgementsResponse>): _137.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _137.QueryPacketAcknowledgementsResponseAmino): _137.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _137.QueryPacketAcknowledgementsResponse): _137.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _137.QueryPacketAcknowledgementsResponseAminoMsg): _137.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _137.QueryPacketAcknowledgementsResponse): _137.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryPacketAcknowledgementsResponseProtoMsg): _137.QueryPacketAcknowledgementsResponse;
                    toProto(message: _137.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryPacketAcknowledgementsResponse): _137.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _137.QueryUnreceivedPacketsRequest;
                    toJSON(message: _137.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_137.QueryUnreceivedPacketsRequest>): _137.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _137.QueryUnreceivedPacketsRequestAmino): _137.QueryUnreceivedPacketsRequest;
                    toAmino(message: _137.QueryUnreceivedPacketsRequest): _137.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _137.QueryUnreceivedPacketsRequestAminoMsg): _137.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _137.QueryUnreceivedPacketsRequest): _137.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryUnreceivedPacketsRequestProtoMsg): _137.QueryUnreceivedPacketsRequest;
                    toProto(message: _137.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryUnreceivedPacketsRequest): _137.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _137.QueryUnreceivedPacketsResponse;
                    toJSON(message: _137.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_137.QueryUnreceivedPacketsResponse>): _137.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _137.QueryUnreceivedPacketsResponseAmino): _137.QueryUnreceivedPacketsResponse;
                    toAmino(message: _137.QueryUnreceivedPacketsResponse): _137.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _137.QueryUnreceivedPacketsResponseAminoMsg): _137.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _137.QueryUnreceivedPacketsResponse): _137.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryUnreceivedPacketsResponseProtoMsg): _137.QueryUnreceivedPacketsResponse;
                    toProto(message: _137.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryUnreceivedPacketsResponse): _137.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _137.QueryUnreceivedAcksRequest;
                    toJSON(message: _137.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_137.QueryUnreceivedAcksRequest>): _137.QueryUnreceivedAcksRequest;
                    fromAmino(object: _137.QueryUnreceivedAcksRequestAmino): _137.QueryUnreceivedAcksRequest;
                    toAmino(message: _137.QueryUnreceivedAcksRequest): _137.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _137.QueryUnreceivedAcksRequestAminoMsg): _137.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _137.QueryUnreceivedAcksRequest): _137.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryUnreceivedAcksRequestProtoMsg): _137.QueryUnreceivedAcksRequest;
                    toProto(message: _137.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryUnreceivedAcksRequest): _137.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _137.QueryUnreceivedAcksResponse;
                    toJSON(message: _137.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_137.QueryUnreceivedAcksResponse>): _137.QueryUnreceivedAcksResponse;
                    fromAmino(object: _137.QueryUnreceivedAcksResponseAmino): _137.QueryUnreceivedAcksResponse;
                    toAmino(message: _137.QueryUnreceivedAcksResponse): _137.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _137.QueryUnreceivedAcksResponseAminoMsg): _137.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _137.QueryUnreceivedAcksResponse): _137.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryUnreceivedAcksResponseProtoMsg): _137.QueryUnreceivedAcksResponse;
                    toProto(message: _137.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryUnreceivedAcksResponse): _137.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _137.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _137.QueryNextSequenceReceiveRequest;
                    toJSON(message: _137.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_137.QueryNextSequenceReceiveRequest>): _137.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _137.QueryNextSequenceReceiveRequestAmino): _137.QueryNextSequenceReceiveRequest;
                    toAmino(message: _137.QueryNextSequenceReceiveRequest): _137.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _137.QueryNextSequenceReceiveRequestAminoMsg): _137.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _137.QueryNextSequenceReceiveRequest): _137.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _137.QueryNextSequenceReceiveRequestProtoMsg): _137.QueryNextSequenceReceiveRequest;
                    toProto(message: _137.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _137.QueryNextSequenceReceiveRequest): _137.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _137.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _137.QueryNextSequenceReceiveResponse;
                    toJSON(message: _137.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_137.QueryNextSequenceReceiveResponse>): _137.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _137.QueryNextSequenceReceiveResponseAmino): _137.QueryNextSequenceReceiveResponse;
                    toAmino(message: _137.QueryNextSequenceReceiveResponse): _137.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _137.QueryNextSequenceReceiveResponseAminoMsg): _137.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _137.QueryNextSequenceReceiveResponse): _137.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _137.QueryNextSequenceReceiveResponseProtoMsg): _137.QueryNextSequenceReceiveResponse;
                    toProto(message: _137.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _137.QueryNextSequenceReceiveResponse): _137.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                    fromJSON(object: any): _136.GenesisState;
                    toJSON(message: _136.GenesisState): unknown;
                    fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
                    fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
                    toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
                    fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
                    toAminoMsg(message: _136.GenesisState): _136.GenesisStateAminoMsg;
                    fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
                    toProto(message: _136.GenesisState): Uint8Array;
                    toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _136.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PacketSequence;
                    fromJSON(object: any): _136.PacketSequence;
                    toJSON(message: _136.PacketSequence): unknown;
                    fromPartial(object: Partial<_136.PacketSequence>): _136.PacketSequence;
                    fromAmino(object: _136.PacketSequenceAmino): _136.PacketSequence;
                    toAmino(message: _136.PacketSequence): _136.PacketSequenceAmino;
                    fromAminoMsg(object: _136.PacketSequenceAminoMsg): _136.PacketSequence;
                    toAminoMsg(message: _136.PacketSequence): _136.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _136.PacketSequenceProtoMsg): _136.PacketSequence;
                    toProto(message: _136.PacketSequence): Uint8Array;
                    toProtoMsg(message: _136.PacketSequence): _136.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _135.State;
                stateToJSON(object: _135.State): string;
                orderFromJSON(object: any): _135.Order;
                orderToJSON(object: _135.Order): string;
                State: typeof _135.State;
                StateSDKType: typeof _135.State;
                StateAmino: typeof _135.State;
                Order: typeof _135.Order;
                OrderSDKType: typeof _135.Order;
                OrderAmino: typeof _135.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _135.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Channel;
                    fromJSON(object: any): _135.Channel;
                    toJSON(message: _135.Channel): unknown;
                    fromPartial(object: Partial<_135.Channel>): _135.Channel;
                    fromAmino(object: _135.ChannelAmino): _135.Channel;
                    toAmino(message: _135.Channel): _135.ChannelAmino;
                    fromAminoMsg(object: _135.ChannelAminoMsg): _135.Channel;
                    toAminoMsg(message: _135.Channel): _135.ChannelAminoMsg;
                    fromProtoMsg(message: _135.ChannelProtoMsg): _135.Channel;
                    toProto(message: _135.Channel): Uint8Array;
                    toProtoMsg(message: _135.Channel): _135.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _135.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.IdentifiedChannel;
                    fromJSON(object: any): _135.IdentifiedChannel;
                    toJSON(message: _135.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_135.IdentifiedChannel>): _135.IdentifiedChannel;
                    fromAmino(object: _135.IdentifiedChannelAmino): _135.IdentifiedChannel;
                    toAmino(message: _135.IdentifiedChannel): _135.IdentifiedChannelAmino;
                    fromAminoMsg(object: _135.IdentifiedChannelAminoMsg): _135.IdentifiedChannel;
                    toAminoMsg(message: _135.IdentifiedChannel): _135.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _135.IdentifiedChannelProtoMsg): _135.IdentifiedChannel;
                    toProto(message: _135.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _135.IdentifiedChannel): _135.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _135.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Counterparty;
                    fromJSON(object: any): _135.Counterparty;
                    toJSON(message: _135.Counterparty): unknown;
                    fromPartial(object: Partial<_135.Counterparty>): _135.Counterparty;
                    fromAmino(object: _135.CounterpartyAmino): _135.Counterparty;
                    toAmino(message: _135.Counterparty): _135.CounterpartyAmino;
                    fromAminoMsg(object: _135.CounterpartyAminoMsg): _135.Counterparty;
                    toAminoMsg(message: _135.Counterparty): _135.CounterpartyAminoMsg;
                    fromProtoMsg(message: _135.CounterpartyProtoMsg): _135.Counterparty;
                    toProto(message: _135.Counterparty): Uint8Array;
                    toProtoMsg(message: _135.Counterparty): _135.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _135.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Packet;
                    fromJSON(object: any): _135.Packet;
                    toJSON(message: _135.Packet): unknown;
                    fromPartial(object: Partial<_135.Packet>): _135.Packet;
                    fromAmino(object: _135.PacketAmino): _135.Packet;
                    toAmino(message: _135.Packet): _135.PacketAmino;
                    fromAminoMsg(object: _135.PacketAminoMsg): _135.Packet;
                    toAminoMsg(message: _135.Packet): _135.PacketAminoMsg;
                    fromProtoMsg(message: _135.PacketProtoMsg): _135.Packet;
                    toProto(message: _135.Packet): Uint8Array;
                    toProtoMsg(message: _135.Packet): _135.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _135.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.PacketState;
                    fromJSON(object: any): _135.PacketState;
                    toJSON(message: _135.PacketState): unknown;
                    fromPartial(object: Partial<_135.PacketState>): _135.PacketState;
                    fromAmino(object: _135.PacketStateAmino): _135.PacketState;
                    toAmino(message: _135.PacketState): _135.PacketStateAmino;
                    fromAminoMsg(object: _135.PacketStateAminoMsg): _135.PacketState;
                    toAminoMsg(message: _135.PacketState): _135.PacketStateAminoMsg;
                    fromProtoMsg(message: _135.PacketStateProtoMsg): _135.PacketState;
                    toProto(message: _135.PacketState): Uint8Array;
                    toProtoMsg(message: _135.PacketState): _135.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _135.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Acknowledgement;
                    fromJSON(object: any): _135.Acknowledgement;
                    toJSON(message: _135.Acknowledgement): unknown;
                    fromPartial(object: Partial<_135.Acknowledgement>): _135.Acknowledgement;
                    fromAmino(object: _135.AcknowledgementAmino): _135.Acknowledgement;
                    toAmino(message: _135.Acknowledgement): _135.AcknowledgementAmino;
                    fromAminoMsg(object: _135.AcknowledgementAminoMsg): _135.Acknowledgement;
                    toAminoMsg(message: _135.Acknowledgement): _135.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _135.AcknowledgementProtoMsg): _135.Acknowledgement;
                    toProto(message: _135.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _135.Acknowledgement): _135.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _258.MsgClientImpl;
                QueryClientImpl: typeof _254.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _141.QueryClientStateRequest): Promise<_141.QueryClientStateResponse>;
                    clientStates(request?: _141.QueryClientStatesRequest): Promise<_141.QueryClientStatesResponse>;
                    consensusState(request: _141.QueryConsensusStateRequest): Promise<_141.QueryConsensusStateResponse>;
                    consensusStates(request: _141.QueryConsensusStatesRequest): Promise<_141.QueryConsensusStatesResponse>;
                    clientStatus(request: _141.QueryClientStatusRequest): Promise<_141.QueryClientStatusResponse>;
                    clientParams(request?: _141.QueryClientParamsRequest): Promise<_141.QueryClientParamsResponse>;
                    upgradedClientState(request?: _141.QueryUpgradedClientStateRequest): Promise<_141.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _141.QueryUpgradedConsensusStateRequest): Promise<_141.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _250.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _142.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _142.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _142.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _142.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _142.MsgCreateClient): {
                            typeUrl: string;
                            value: _142.MsgCreateClient;
                        };
                        updateClient(value: _142.MsgUpdateClient): {
                            typeUrl: string;
                            value: _142.MsgUpdateClient;
                        };
                        upgradeClient(value: _142.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _142.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _142.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _142.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _142.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _142.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _142.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _142.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _142.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _142.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _142.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _142.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _142.MsgCreateClient): {
                            typeUrl: string;
                            value: _142.MsgCreateClient;
                        };
                        updateClient(value: _142.MsgUpdateClient): {
                            typeUrl: string;
                            value: _142.MsgUpdateClient;
                        };
                        upgradeClient(value: _142.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _142.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _142.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _142.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _142.MsgCreateClient) => _142.MsgCreateClientAmino;
                        fromAmino: (object: _142.MsgCreateClientAmino) => _142.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _142.MsgUpdateClient) => _142.MsgUpdateClientAmino;
                        fromAmino: (object: _142.MsgUpdateClientAmino) => _142.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _142.MsgUpgradeClient) => _142.MsgUpgradeClientAmino;
                        fromAmino: (object: _142.MsgUpgradeClientAmino) => _142.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _142.MsgSubmitMisbehaviour) => _142.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _142.MsgSubmitMisbehaviourAmino) => _142.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _142.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgCreateClient;
                    fromJSON(object: any): _142.MsgCreateClient;
                    toJSON(message: _142.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_142.MsgCreateClient>): _142.MsgCreateClient;
                    fromAmino(object: _142.MsgCreateClientAmino): _142.MsgCreateClient;
                    toAmino(message: _142.MsgCreateClient): _142.MsgCreateClientAmino;
                    fromAminoMsg(object: _142.MsgCreateClientAminoMsg): _142.MsgCreateClient;
                    toAminoMsg(message: _142.MsgCreateClient): _142.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _142.MsgCreateClientProtoMsg): _142.MsgCreateClient;
                    toProto(message: _142.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _142.MsgCreateClient): _142.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _142.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgCreateClientResponse;
                    fromJSON(_: any): _142.MsgCreateClientResponse;
                    toJSON(_: _142.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_142.MsgCreateClientResponse>): _142.MsgCreateClientResponse;
                    fromAmino(_: _142.MsgCreateClientResponseAmino): _142.MsgCreateClientResponse;
                    toAmino(_: _142.MsgCreateClientResponse): _142.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _142.MsgCreateClientResponseAminoMsg): _142.MsgCreateClientResponse;
                    toAminoMsg(message: _142.MsgCreateClientResponse): _142.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgCreateClientResponseProtoMsg): _142.MsgCreateClientResponse;
                    toProto(message: _142.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgCreateClientResponse): _142.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _142.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgUpdateClient;
                    fromJSON(object: any): _142.MsgUpdateClient;
                    toJSON(message: _142.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_142.MsgUpdateClient>): _142.MsgUpdateClient;
                    fromAmino(object: _142.MsgUpdateClientAmino): _142.MsgUpdateClient;
                    toAmino(message: _142.MsgUpdateClient): _142.MsgUpdateClientAmino;
                    fromAminoMsg(object: _142.MsgUpdateClientAminoMsg): _142.MsgUpdateClient;
                    toAminoMsg(message: _142.MsgUpdateClient): _142.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _142.MsgUpdateClientProtoMsg): _142.MsgUpdateClient;
                    toProto(message: _142.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _142.MsgUpdateClient): _142.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _142.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgUpdateClientResponse;
                    fromJSON(_: any): _142.MsgUpdateClientResponse;
                    toJSON(_: _142.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_142.MsgUpdateClientResponse>): _142.MsgUpdateClientResponse;
                    fromAmino(_: _142.MsgUpdateClientResponseAmino): _142.MsgUpdateClientResponse;
                    toAmino(_: _142.MsgUpdateClientResponse): _142.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _142.MsgUpdateClientResponseAminoMsg): _142.MsgUpdateClientResponse;
                    toAminoMsg(message: _142.MsgUpdateClientResponse): _142.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgUpdateClientResponseProtoMsg): _142.MsgUpdateClientResponse;
                    toProto(message: _142.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgUpdateClientResponse): _142.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _142.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgUpgradeClient;
                    fromJSON(object: any): _142.MsgUpgradeClient;
                    toJSON(message: _142.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_142.MsgUpgradeClient>): _142.MsgUpgradeClient;
                    fromAmino(object: _142.MsgUpgradeClientAmino): _142.MsgUpgradeClient;
                    toAmino(message: _142.MsgUpgradeClient): _142.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _142.MsgUpgradeClientAminoMsg): _142.MsgUpgradeClient;
                    toAminoMsg(message: _142.MsgUpgradeClient): _142.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _142.MsgUpgradeClientProtoMsg): _142.MsgUpgradeClient;
                    toProto(message: _142.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _142.MsgUpgradeClient): _142.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _142.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgUpgradeClientResponse;
                    fromJSON(_: any): _142.MsgUpgradeClientResponse;
                    toJSON(_: _142.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_142.MsgUpgradeClientResponse>): _142.MsgUpgradeClientResponse;
                    fromAmino(_: _142.MsgUpgradeClientResponseAmino): _142.MsgUpgradeClientResponse;
                    toAmino(_: _142.MsgUpgradeClientResponse): _142.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _142.MsgUpgradeClientResponseAminoMsg): _142.MsgUpgradeClientResponse;
                    toAminoMsg(message: _142.MsgUpgradeClientResponse): _142.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgUpgradeClientResponseProtoMsg): _142.MsgUpgradeClientResponse;
                    toProto(message: _142.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgUpgradeClientResponse): _142.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _142.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _142.MsgSubmitMisbehaviour;
                    toJSON(message: _142.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_142.MsgSubmitMisbehaviour>): _142.MsgSubmitMisbehaviour;
                    fromAmino(object: _142.MsgSubmitMisbehaviourAmino): _142.MsgSubmitMisbehaviour;
                    toAmino(message: _142.MsgSubmitMisbehaviour): _142.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _142.MsgSubmitMisbehaviourAminoMsg): _142.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _142.MsgSubmitMisbehaviour): _142.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _142.MsgSubmitMisbehaviourProtoMsg): _142.MsgSubmitMisbehaviour;
                    toProto(message: _142.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _142.MsgSubmitMisbehaviour): _142.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _142.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _142.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _142.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_142.MsgSubmitMisbehaviourResponse>): _142.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _142.MsgSubmitMisbehaviourResponseAmino): _142.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _142.MsgSubmitMisbehaviourResponse): _142.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _142.MsgSubmitMisbehaviourResponseAminoMsg): _142.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _142.MsgSubmitMisbehaviourResponse): _142.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgSubmitMisbehaviourResponseProtoMsg): _142.MsgSubmitMisbehaviourResponse;
                    toProto(message: _142.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgSubmitMisbehaviourResponse): _142.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _141.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClientStateRequest;
                    fromJSON(object: any): _141.QueryClientStateRequest;
                    toJSON(message: _141.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_141.QueryClientStateRequest>): _141.QueryClientStateRequest;
                    fromAmino(object: _141.QueryClientStateRequestAmino): _141.QueryClientStateRequest;
                    toAmino(message: _141.QueryClientStateRequest): _141.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _141.QueryClientStateRequestAminoMsg): _141.QueryClientStateRequest;
                    toAminoMsg(message: _141.QueryClientStateRequest): _141.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryClientStateRequestProtoMsg): _141.QueryClientStateRequest;
                    toProto(message: _141.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryClientStateRequest): _141.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _141.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClientStateResponse;
                    fromJSON(object: any): _141.QueryClientStateResponse;
                    toJSON(message: _141.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_141.QueryClientStateResponse>): _141.QueryClientStateResponse;
                    fromAmino(object: _141.QueryClientStateResponseAmino): _141.QueryClientStateResponse;
                    toAmino(message: _141.QueryClientStateResponse): _141.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _141.QueryClientStateResponseAminoMsg): _141.QueryClientStateResponse;
                    toAminoMsg(message: _141.QueryClientStateResponse): _141.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryClientStateResponseProtoMsg): _141.QueryClientStateResponse;
                    toProto(message: _141.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryClientStateResponse): _141.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _141.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClientStatesRequest;
                    fromJSON(object: any): _141.QueryClientStatesRequest;
                    toJSON(message: _141.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_141.QueryClientStatesRequest>): _141.QueryClientStatesRequest;
                    fromAmino(object: _141.QueryClientStatesRequestAmino): _141.QueryClientStatesRequest;
                    toAmino(message: _141.QueryClientStatesRequest): _141.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _141.QueryClientStatesRequestAminoMsg): _141.QueryClientStatesRequest;
                    toAminoMsg(message: _141.QueryClientStatesRequest): _141.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryClientStatesRequestProtoMsg): _141.QueryClientStatesRequest;
                    toProto(message: _141.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryClientStatesRequest): _141.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _141.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClientStatesResponse;
                    fromJSON(object: any): _141.QueryClientStatesResponse;
                    toJSON(message: _141.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_141.QueryClientStatesResponse>): _141.QueryClientStatesResponse;
                    fromAmino(object: _141.QueryClientStatesResponseAmino): _141.QueryClientStatesResponse;
                    toAmino(message: _141.QueryClientStatesResponse): _141.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _141.QueryClientStatesResponseAminoMsg): _141.QueryClientStatesResponse;
                    toAminoMsg(message: _141.QueryClientStatesResponse): _141.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryClientStatesResponseProtoMsg): _141.QueryClientStatesResponse;
                    toProto(message: _141.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryClientStatesResponse): _141.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _141.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryConsensusStateRequest;
                    fromJSON(object: any): _141.QueryConsensusStateRequest;
                    toJSON(message: _141.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_141.QueryConsensusStateRequest>): _141.QueryConsensusStateRequest;
                    fromAmino(object: _141.QueryConsensusStateRequestAmino): _141.QueryConsensusStateRequest;
                    toAmino(message: _141.QueryConsensusStateRequest): _141.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _141.QueryConsensusStateRequestAminoMsg): _141.QueryConsensusStateRequest;
                    toAminoMsg(message: _141.QueryConsensusStateRequest): _141.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryConsensusStateRequestProtoMsg): _141.QueryConsensusStateRequest;
                    toProto(message: _141.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryConsensusStateRequest): _141.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _141.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryConsensusStateResponse;
                    fromJSON(object: any): _141.QueryConsensusStateResponse;
                    toJSON(message: _141.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_141.QueryConsensusStateResponse>): _141.QueryConsensusStateResponse;
                    fromAmino(object: _141.QueryConsensusStateResponseAmino): _141.QueryConsensusStateResponse;
                    toAmino(message: _141.QueryConsensusStateResponse): _141.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _141.QueryConsensusStateResponseAminoMsg): _141.QueryConsensusStateResponse;
                    toAminoMsg(message: _141.QueryConsensusStateResponse): _141.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryConsensusStateResponseProtoMsg): _141.QueryConsensusStateResponse;
                    toProto(message: _141.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryConsensusStateResponse): _141.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _141.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryConsensusStatesRequest;
                    fromJSON(object: any): _141.QueryConsensusStatesRequest;
                    toJSON(message: _141.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_141.QueryConsensusStatesRequest>): _141.QueryConsensusStatesRequest;
                    fromAmino(object: _141.QueryConsensusStatesRequestAmino): _141.QueryConsensusStatesRequest;
                    toAmino(message: _141.QueryConsensusStatesRequest): _141.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _141.QueryConsensusStatesRequestAminoMsg): _141.QueryConsensusStatesRequest;
                    toAminoMsg(message: _141.QueryConsensusStatesRequest): _141.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryConsensusStatesRequestProtoMsg): _141.QueryConsensusStatesRequest;
                    toProto(message: _141.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryConsensusStatesRequest): _141.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _141.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryConsensusStatesResponse;
                    fromJSON(object: any): _141.QueryConsensusStatesResponse;
                    toJSON(message: _141.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_141.QueryConsensusStatesResponse>): _141.QueryConsensusStatesResponse;
                    fromAmino(object: _141.QueryConsensusStatesResponseAmino): _141.QueryConsensusStatesResponse;
                    toAmino(message: _141.QueryConsensusStatesResponse): _141.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _141.QueryConsensusStatesResponseAminoMsg): _141.QueryConsensusStatesResponse;
                    toAminoMsg(message: _141.QueryConsensusStatesResponse): _141.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryConsensusStatesResponseProtoMsg): _141.QueryConsensusStatesResponse;
                    toProto(message: _141.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryConsensusStatesResponse): _141.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _141.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClientStatusRequest;
                    fromJSON(object: any): _141.QueryClientStatusRequest;
                    toJSON(message: _141.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_141.QueryClientStatusRequest>): _141.QueryClientStatusRequest;
                    fromAmino(object: _141.QueryClientStatusRequestAmino): _141.QueryClientStatusRequest;
                    toAmino(message: _141.QueryClientStatusRequest): _141.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _141.QueryClientStatusRequestAminoMsg): _141.QueryClientStatusRequest;
                    toAminoMsg(message: _141.QueryClientStatusRequest): _141.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryClientStatusRequestProtoMsg): _141.QueryClientStatusRequest;
                    toProto(message: _141.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryClientStatusRequest): _141.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _141.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClientStatusResponse;
                    fromJSON(object: any): _141.QueryClientStatusResponse;
                    toJSON(message: _141.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_141.QueryClientStatusResponse>): _141.QueryClientStatusResponse;
                    fromAmino(object: _141.QueryClientStatusResponseAmino): _141.QueryClientStatusResponse;
                    toAmino(message: _141.QueryClientStatusResponse): _141.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _141.QueryClientStatusResponseAminoMsg): _141.QueryClientStatusResponse;
                    toAminoMsg(message: _141.QueryClientStatusResponse): _141.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryClientStatusResponseProtoMsg): _141.QueryClientStatusResponse;
                    toProto(message: _141.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryClientStatusResponse): _141.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _141.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClientParamsRequest;
                    fromJSON(_: any): _141.QueryClientParamsRequest;
                    toJSON(_: _141.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_141.QueryClientParamsRequest>): _141.QueryClientParamsRequest;
                    fromAmino(_: _141.QueryClientParamsRequestAmino): _141.QueryClientParamsRequest;
                    toAmino(_: _141.QueryClientParamsRequest): _141.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _141.QueryClientParamsRequestAminoMsg): _141.QueryClientParamsRequest;
                    toAminoMsg(message: _141.QueryClientParamsRequest): _141.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryClientParamsRequestProtoMsg): _141.QueryClientParamsRequest;
                    toProto(message: _141.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryClientParamsRequest): _141.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _141.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryClientParamsResponse;
                    fromJSON(object: any): _141.QueryClientParamsResponse;
                    toJSON(message: _141.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_141.QueryClientParamsResponse>): _141.QueryClientParamsResponse;
                    fromAmino(object: _141.QueryClientParamsResponseAmino): _141.QueryClientParamsResponse;
                    toAmino(message: _141.QueryClientParamsResponse): _141.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _141.QueryClientParamsResponseAminoMsg): _141.QueryClientParamsResponse;
                    toAminoMsg(message: _141.QueryClientParamsResponse): _141.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryClientParamsResponseProtoMsg): _141.QueryClientParamsResponse;
                    toProto(message: _141.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryClientParamsResponse): _141.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _141.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _141.QueryUpgradedClientStateRequest;
                    toJSON(_: _141.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_141.QueryUpgradedClientStateRequest>): _141.QueryUpgradedClientStateRequest;
                    fromAmino(_: _141.QueryUpgradedClientStateRequestAmino): _141.QueryUpgradedClientStateRequest;
                    toAmino(_: _141.QueryUpgradedClientStateRequest): _141.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _141.QueryUpgradedClientStateRequestAminoMsg): _141.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _141.QueryUpgradedClientStateRequest): _141.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryUpgradedClientStateRequestProtoMsg): _141.QueryUpgradedClientStateRequest;
                    toProto(message: _141.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryUpgradedClientStateRequest): _141.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _141.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _141.QueryUpgradedClientStateResponse;
                    toJSON(message: _141.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_141.QueryUpgradedClientStateResponse>): _141.QueryUpgradedClientStateResponse;
                    fromAmino(object: _141.QueryUpgradedClientStateResponseAmino): _141.QueryUpgradedClientStateResponse;
                    toAmino(message: _141.QueryUpgradedClientStateResponse): _141.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _141.QueryUpgradedClientStateResponseAminoMsg): _141.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _141.QueryUpgradedClientStateResponse): _141.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryUpgradedClientStateResponseProtoMsg): _141.QueryUpgradedClientStateResponse;
                    toProto(message: _141.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryUpgradedClientStateResponse): _141.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _141.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _141.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _141.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_141.QueryUpgradedConsensusStateRequest>): _141.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _141.QueryUpgradedConsensusStateRequestAmino): _141.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _141.QueryUpgradedConsensusStateRequest): _141.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _141.QueryUpgradedConsensusStateRequestAminoMsg): _141.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _141.QueryUpgradedConsensusStateRequest): _141.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryUpgradedConsensusStateRequestProtoMsg): _141.QueryUpgradedConsensusStateRequest;
                    toProto(message: _141.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryUpgradedConsensusStateRequest): _141.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _141.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _141.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _141.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_141.QueryUpgradedConsensusStateResponse>): _141.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _141.QueryUpgradedConsensusStateResponseAmino): _141.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _141.QueryUpgradedConsensusStateResponse): _141.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _141.QueryUpgradedConsensusStateResponseAminoMsg): _141.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _141.QueryUpgradedConsensusStateResponse): _141.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryUpgradedConsensusStateResponseProtoMsg): _141.QueryUpgradedConsensusStateResponse;
                    toProto(message: _141.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryUpgradedConsensusStateResponse): _141.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
                    fromJSON(object: any): _140.GenesisState;
                    toJSON(message: _140.GenesisState): unknown;
                    fromPartial(object: Partial<_140.GenesisState>): _140.GenesisState;
                    fromAmino(object: _140.GenesisStateAmino): _140.GenesisState;
                    toAmino(message: _140.GenesisState): _140.GenesisStateAmino;
                    fromAminoMsg(object: _140.GenesisStateAminoMsg): _140.GenesisState;
                    toAminoMsg(message: _140.GenesisState): _140.GenesisStateAminoMsg;
                    fromProtoMsg(message: _140.GenesisStateProtoMsg): _140.GenesisState;
                    toProto(message: _140.GenesisState): Uint8Array;
                    toProtoMsg(message: _140.GenesisState): _140.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _140.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisMetadata;
                    fromJSON(object: any): _140.GenesisMetadata;
                    toJSON(message: _140.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_140.GenesisMetadata>): _140.GenesisMetadata;
                    fromAmino(object: _140.GenesisMetadataAmino): _140.GenesisMetadata;
                    toAmino(message: _140.GenesisMetadata): _140.GenesisMetadataAmino;
                    fromAminoMsg(object: _140.GenesisMetadataAminoMsg): _140.GenesisMetadata;
                    toAminoMsg(message: _140.GenesisMetadata): _140.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _140.GenesisMetadataProtoMsg): _140.GenesisMetadata;
                    toProto(message: _140.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _140.GenesisMetadata): _140.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _140.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _140.IdentifiedGenesisMetadata;
                    toJSON(message: _140.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_140.IdentifiedGenesisMetadata>): _140.IdentifiedGenesisMetadata;
                    fromAmino(object: _140.IdentifiedGenesisMetadataAmino): _140.IdentifiedGenesisMetadata;
                    toAmino(message: _140.IdentifiedGenesisMetadata): _140.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _140.IdentifiedGenesisMetadataAminoMsg): _140.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _140.IdentifiedGenesisMetadata): _140.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _140.IdentifiedGenesisMetadataProtoMsg): _140.IdentifiedGenesisMetadata;
                    toProto(message: _140.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _140.IdentifiedGenesisMetadata): _140.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _139.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.IdentifiedClientState;
                    fromJSON(object: any): _139.IdentifiedClientState;
                    toJSON(message: _139.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_139.IdentifiedClientState>): _139.IdentifiedClientState;
                    fromAmino(object: _139.IdentifiedClientStateAmino): _139.IdentifiedClientState;
                    toAmino(message: _139.IdentifiedClientState): _139.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _139.IdentifiedClientStateAminoMsg): _139.IdentifiedClientState;
                    toAminoMsg(message: _139.IdentifiedClientState): _139.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _139.IdentifiedClientStateProtoMsg): _139.IdentifiedClientState;
                    toProto(message: _139.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _139.IdentifiedClientState): _139.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _139.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ConsensusStateWithHeight;
                    fromJSON(object: any): _139.ConsensusStateWithHeight;
                    toJSON(message: _139.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_139.ConsensusStateWithHeight>): _139.ConsensusStateWithHeight;
                    fromAmino(object: _139.ConsensusStateWithHeightAmino): _139.ConsensusStateWithHeight;
                    toAmino(message: _139.ConsensusStateWithHeight): _139.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _139.ConsensusStateWithHeightAminoMsg): _139.ConsensusStateWithHeight;
                    toAminoMsg(message: _139.ConsensusStateWithHeight): _139.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _139.ConsensusStateWithHeightProtoMsg): _139.ConsensusStateWithHeight;
                    toProto(message: _139.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _139.ConsensusStateWithHeight): _139.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _139.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ClientConsensusStates;
                    fromJSON(object: any): _139.ClientConsensusStates;
                    toJSON(message: _139.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_139.ClientConsensusStates>): _139.ClientConsensusStates;
                    fromAmino(object: _139.ClientConsensusStatesAmino): _139.ClientConsensusStates;
                    toAmino(message: _139.ClientConsensusStates): _139.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _139.ClientConsensusStatesAminoMsg): _139.ClientConsensusStates;
                    toAminoMsg(message: _139.ClientConsensusStates): _139.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _139.ClientConsensusStatesProtoMsg): _139.ClientConsensusStates;
                    toProto(message: _139.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _139.ClientConsensusStates): _139.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _139.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ClientUpdateProposal;
                    fromJSON(object: any): _139.ClientUpdateProposal;
                    toJSON(message: _139.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_139.ClientUpdateProposal>): _139.ClientUpdateProposal;
                    fromAmino(object: _139.ClientUpdateProposalAmino): _139.ClientUpdateProposal;
                    toAmino(message: _139.ClientUpdateProposal): _139.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _139.ClientUpdateProposalAminoMsg): _139.ClientUpdateProposal;
                    toAminoMsg(message: _139.ClientUpdateProposal): _139.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _139.ClientUpdateProposalProtoMsg): _139.ClientUpdateProposal;
                    toProto(message: _139.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _139.ClientUpdateProposal): _139.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _139.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.UpgradeProposal;
                    fromJSON(object: any): _139.UpgradeProposal;
                    toJSON(message: _139.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_139.UpgradeProposal>): _139.UpgradeProposal;
                    fromAmino(object: _139.UpgradeProposalAmino): _139.UpgradeProposal;
                    toAmino(message: _139.UpgradeProposal): _139.UpgradeProposalAmino;
                    fromAminoMsg(object: _139.UpgradeProposalAminoMsg): _139.UpgradeProposal;
                    toAminoMsg(message: _139.UpgradeProposal): _139.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _139.UpgradeProposalProtoMsg): _139.UpgradeProposal;
                    toProto(message: _139.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _139.UpgradeProposal): _139.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _139.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Height;
                    fromJSON(object: any): _139.Height;
                    toJSON(message: _139.Height): unknown;
                    fromPartial(object: Partial<_139.Height>): _139.Height;
                    fromAmino(object: _139.HeightAmino): _139.Height;
                    toAmino(message: _139.Height): _139.HeightAmino;
                    fromAminoMsg(object: _139.HeightAminoMsg): _139.Height;
                    toAminoMsg(message: _139.Height): _139.HeightAminoMsg;
                    fromProtoMsg(message: _139.HeightProtoMsg): _139.Height;
                    toProto(message: _139.Height): Uint8Array;
                    toProtoMsg(message: _139.Height): _139.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _139.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Params;
                    fromJSON(object: any): _139.Params;
                    toJSON(message: _139.Params): unknown;
                    fromPartial(object: Partial<_139.Params>): _139.Params;
                    fromAmino(object: _139.ParamsAmino): _139.Params;
                    toAmino(message: _139.Params): _139.ParamsAmino;
                    fromAminoMsg(object: _139.ParamsAminoMsg): _139.Params;
                    toAminoMsg(message: _139.Params): _139.ParamsAminoMsg;
                    fromProtoMsg(message: _139.ParamsProtoMsg): _139.Params;
                    toProto(message: _139.Params): Uint8Array;
                    toProtoMsg(message: _139.Params): _139.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _143.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MerkleRoot;
                    fromJSON(object: any): _143.MerkleRoot;
                    toJSON(message: _143.MerkleRoot): unknown;
                    fromPartial(object: Partial<_143.MerkleRoot>): _143.MerkleRoot;
                    fromAmino(object: _143.MerkleRootAmino): _143.MerkleRoot;
                    toAmino(message: _143.MerkleRoot): _143.MerkleRootAmino;
                    fromAminoMsg(object: _143.MerkleRootAminoMsg): _143.MerkleRoot;
                    toAminoMsg(message: _143.MerkleRoot): _143.MerkleRootAminoMsg;
                    fromProtoMsg(message: _143.MerkleRootProtoMsg): _143.MerkleRoot;
                    toProto(message: _143.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _143.MerkleRoot): _143.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _143.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MerklePrefix;
                    fromJSON(object: any): _143.MerklePrefix;
                    toJSON(message: _143.MerklePrefix): unknown;
                    fromPartial(object: Partial<_143.MerklePrefix>): _143.MerklePrefix;
                    fromAmino(object: _143.MerklePrefixAmino): _143.MerklePrefix;
                    toAmino(message: _143.MerklePrefix): _143.MerklePrefixAmino;
                    fromAminoMsg(object: _143.MerklePrefixAminoMsg): _143.MerklePrefix;
                    toAminoMsg(message: _143.MerklePrefix): _143.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _143.MerklePrefixProtoMsg): _143.MerklePrefix;
                    toProto(message: _143.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _143.MerklePrefix): _143.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _143.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MerklePath;
                    fromJSON(object: any): _143.MerklePath;
                    toJSON(message: _143.MerklePath): unknown;
                    fromPartial(object: Partial<_143.MerklePath>): _143.MerklePath;
                    fromAmino(object: _143.MerklePathAmino): _143.MerklePath;
                    toAmino(message: _143.MerklePath): _143.MerklePathAmino;
                    fromAminoMsg(object: _143.MerklePathAminoMsg): _143.MerklePath;
                    toAminoMsg(message: _143.MerklePath): _143.MerklePathAminoMsg;
                    fromProtoMsg(message: _143.MerklePathProtoMsg): _143.MerklePath;
                    toProto(message: _143.MerklePath): Uint8Array;
                    toProtoMsg(message: _143.MerklePath): _143.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _143.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MerkleProof;
                    fromJSON(object: any): _143.MerkleProof;
                    toJSON(message: _143.MerkleProof): unknown;
                    fromPartial(object: Partial<_143.MerkleProof>): _143.MerkleProof;
                    fromAmino(object: _143.MerkleProofAmino): _143.MerkleProof;
                    toAmino(message: _143.MerkleProof): _143.MerkleProofAmino;
                    fromAminoMsg(object: _143.MerkleProofAminoMsg): _143.MerkleProof;
                    toAminoMsg(message: _143.MerkleProof): _143.MerkleProofAminoMsg;
                    fromProtoMsg(message: _143.MerkleProofProtoMsg): _143.MerkleProof;
                    toProto(message: _143.MerkleProof): Uint8Array;
                    toProtoMsg(message: _143.MerkleProof): _143.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _259.MsgClientImpl;
                QueryClientImpl: typeof _255.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _146.QueryConnectionRequest): Promise<_146.QueryConnectionResponse>;
                    connections(request?: _146.QueryConnectionsRequest): Promise<_146.QueryConnectionsResponse>;
                    clientConnections(request: _146.QueryClientConnectionsRequest): Promise<_146.QueryClientConnectionsResponse>;
                    connectionClientState(request: _146.QueryConnectionClientStateRequest): Promise<_146.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _146.QueryConnectionConsensusStateRequest): Promise<_146.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _251.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _147.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _147.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _147.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _147.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _147.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _147.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _147.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _147.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _147.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _147.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _147.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _147.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _147.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _147.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _147.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _147.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _147.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _147.MsgConnectionOpenInit) => _147.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _147.MsgConnectionOpenInitAmino) => _147.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _147.MsgConnectionOpenTry) => _147.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _147.MsgConnectionOpenTryAmino) => _147.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _147.MsgConnectionOpenAck) => _147.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _147.MsgConnectionOpenAckAmino) => _147.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _147.MsgConnectionOpenConfirm) => _147.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _147.MsgConnectionOpenConfirmAmino) => _147.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _147.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgConnectionOpenInit;
                    fromJSON(object: any): _147.MsgConnectionOpenInit;
                    toJSON(message: _147.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_147.MsgConnectionOpenInit>): _147.MsgConnectionOpenInit;
                    fromAmino(object: _147.MsgConnectionOpenInitAmino): _147.MsgConnectionOpenInit;
                    toAmino(message: _147.MsgConnectionOpenInit): _147.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _147.MsgConnectionOpenInitAminoMsg): _147.MsgConnectionOpenInit;
                    toAminoMsg(message: _147.MsgConnectionOpenInit): _147.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _147.MsgConnectionOpenInitProtoMsg): _147.MsgConnectionOpenInit;
                    toProto(message: _147.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _147.MsgConnectionOpenInit): _147.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _147.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _147.MsgConnectionOpenInitResponse;
                    toJSON(_: _147.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_147.MsgConnectionOpenInitResponse>): _147.MsgConnectionOpenInitResponse;
                    fromAmino(_: _147.MsgConnectionOpenInitResponseAmino): _147.MsgConnectionOpenInitResponse;
                    toAmino(_: _147.MsgConnectionOpenInitResponse): _147.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _147.MsgConnectionOpenInitResponseAminoMsg): _147.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _147.MsgConnectionOpenInitResponse): _147.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgConnectionOpenInitResponseProtoMsg): _147.MsgConnectionOpenInitResponse;
                    toProto(message: _147.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgConnectionOpenInitResponse): _147.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _147.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgConnectionOpenTry;
                    fromJSON(object: any): _147.MsgConnectionOpenTry;
                    toJSON(message: _147.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_147.MsgConnectionOpenTry>): _147.MsgConnectionOpenTry;
                    fromAmino(object: _147.MsgConnectionOpenTryAmino): _147.MsgConnectionOpenTry;
                    toAmino(message: _147.MsgConnectionOpenTry): _147.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _147.MsgConnectionOpenTryAminoMsg): _147.MsgConnectionOpenTry;
                    toAminoMsg(message: _147.MsgConnectionOpenTry): _147.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _147.MsgConnectionOpenTryProtoMsg): _147.MsgConnectionOpenTry;
                    toProto(message: _147.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _147.MsgConnectionOpenTry): _147.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _147.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _147.MsgConnectionOpenTryResponse;
                    toJSON(_: _147.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_147.MsgConnectionOpenTryResponse>): _147.MsgConnectionOpenTryResponse;
                    fromAmino(_: _147.MsgConnectionOpenTryResponseAmino): _147.MsgConnectionOpenTryResponse;
                    toAmino(_: _147.MsgConnectionOpenTryResponse): _147.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _147.MsgConnectionOpenTryResponseAminoMsg): _147.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _147.MsgConnectionOpenTryResponse): _147.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgConnectionOpenTryResponseProtoMsg): _147.MsgConnectionOpenTryResponse;
                    toProto(message: _147.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgConnectionOpenTryResponse): _147.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _147.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgConnectionOpenAck;
                    fromJSON(object: any): _147.MsgConnectionOpenAck;
                    toJSON(message: _147.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_147.MsgConnectionOpenAck>): _147.MsgConnectionOpenAck;
                    fromAmino(object: _147.MsgConnectionOpenAckAmino): _147.MsgConnectionOpenAck;
                    toAmino(message: _147.MsgConnectionOpenAck): _147.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _147.MsgConnectionOpenAckAminoMsg): _147.MsgConnectionOpenAck;
                    toAminoMsg(message: _147.MsgConnectionOpenAck): _147.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _147.MsgConnectionOpenAckProtoMsg): _147.MsgConnectionOpenAck;
                    toProto(message: _147.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _147.MsgConnectionOpenAck): _147.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _147.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _147.MsgConnectionOpenAckResponse;
                    toJSON(_: _147.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_147.MsgConnectionOpenAckResponse>): _147.MsgConnectionOpenAckResponse;
                    fromAmino(_: _147.MsgConnectionOpenAckResponseAmino): _147.MsgConnectionOpenAckResponse;
                    toAmino(_: _147.MsgConnectionOpenAckResponse): _147.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _147.MsgConnectionOpenAckResponseAminoMsg): _147.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _147.MsgConnectionOpenAckResponse): _147.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgConnectionOpenAckResponseProtoMsg): _147.MsgConnectionOpenAckResponse;
                    toProto(message: _147.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgConnectionOpenAckResponse): _147.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _147.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _147.MsgConnectionOpenConfirm;
                    toJSON(message: _147.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_147.MsgConnectionOpenConfirm>): _147.MsgConnectionOpenConfirm;
                    fromAmino(object: _147.MsgConnectionOpenConfirmAmino): _147.MsgConnectionOpenConfirm;
                    toAmino(message: _147.MsgConnectionOpenConfirm): _147.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _147.MsgConnectionOpenConfirmAminoMsg): _147.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _147.MsgConnectionOpenConfirm): _147.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _147.MsgConnectionOpenConfirmProtoMsg): _147.MsgConnectionOpenConfirm;
                    toProto(message: _147.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _147.MsgConnectionOpenConfirm): _147.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _147.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _147.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _147.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_147.MsgConnectionOpenConfirmResponse>): _147.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _147.MsgConnectionOpenConfirmResponseAmino): _147.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _147.MsgConnectionOpenConfirmResponse): _147.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _147.MsgConnectionOpenConfirmResponseAminoMsg): _147.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _147.MsgConnectionOpenConfirmResponse): _147.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _147.MsgConnectionOpenConfirmResponseProtoMsg): _147.MsgConnectionOpenConfirmResponse;
                    toProto(message: _147.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _147.MsgConnectionOpenConfirmResponse): _147.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryConnectionRequest;
                    fromJSON(object: any): _146.QueryConnectionRequest;
                    toJSON(message: _146.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_146.QueryConnectionRequest>): _146.QueryConnectionRequest;
                    fromAmino(object: _146.QueryConnectionRequestAmino): _146.QueryConnectionRequest;
                    toAmino(message: _146.QueryConnectionRequest): _146.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _146.QueryConnectionRequestAminoMsg): _146.QueryConnectionRequest;
                    toAminoMsg(message: _146.QueryConnectionRequest): _146.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionRequestProtoMsg): _146.QueryConnectionRequest;
                    toProto(message: _146.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionRequest): _146.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryConnectionResponse;
                    fromJSON(object: any): _146.QueryConnectionResponse;
                    toJSON(message: _146.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_146.QueryConnectionResponse>): _146.QueryConnectionResponse;
                    fromAmino(object: _146.QueryConnectionResponseAmino): _146.QueryConnectionResponse;
                    toAmino(message: _146.QueryConnectionResponse): _146.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _146.QueryConnectionResponseAminoMsg): _146.QueryConnectionResponse;
                    toAminoMsg(message: _146.QueryConnectionResponse): _146.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionResponseProtoMsg): _146.QueryConnectionResponse;
                    toProto(message: _146.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionResponse): _146.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryConnectionsRequest;
                    fromJSON(object: any): _146.QueryConnectionsRequest;
                    toJSON(message: _146.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_146.QueryConnectionsRequest>): _146.QueryConnectionsRequest;
                    fromAmino(object: _146.QueryConnectionsRequestAmino): _146.QueryConnectionsRequest;
                    toAmino(message: _146.QueryConnectionsRequest): _146.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _146.QueryConnectionsRequestAminoMsg): _146.QueryConnectionsRequest;
                    toAminoMsg(message: _146.QueryConnectionsRequest): _146.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionsRequestProtoMsg): _146.QueryConnectionsRequest;
                    toProto(message: _146.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionsRequest): _146.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryConnectionsResponse;
                    fromJSON(object: any): _146.QueryConnectionsResponse;
                    toJSON(message: _146.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_146.QueryConnectionsResponse>): _146.QueryConnectionsResponse;
                    fromAmino(object: _146.QueryConnectionsResponseAmino): _146.QueryConnectionsResponse;
                    toAmino(message: _146.QueryConnectionsResponse): _146.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _146.QueryConnectionsResponseAminoMsg): _146.QueryConnectionsResponse;
                    toAminoMsg(message: _146.QueryConnectionsResponse): _146.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionsResponseProtoMsg): _146.QueryConnectionsResponse;
                    toProto(message: _146.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionsResponse): _146.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryClientConnectionsRequest;
                    fromJSON(object: any): _146.QueryClientConnectionsRequest;
                    toJSON(message: _146.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_146.QueryClientConnectionsRequest>): _146.QueryClientConnectionsRequest;
                    fromAmino(object: _146.QueryClientConnectionsRequestAmino): _146.QueryClientConnectionsRequest;
                    toAmino(message: _146.QueryClientConnectionsRequest): _146.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _146.QueryClientConnectionsRequestAminoMsg): _146.QueryClientConnectionsRequest;
                    toAminoMsg(message: _146.QueryClientConnectionsRequest): _146.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryClientConnectionsRequestProtoMsg): _146.QueryClientConnectionsRequest;
                    toProto(message: _146.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryClientConnectionsRequest): _146.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryClientConnectionsResponse;
                    fromJSON(object: any): _146.QueryClientConnectionsResponse;
                    toJSON(message: _146.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_146.QueryClientConnectionsResponse>): _146.QueryClientConnectionsResponse;
                    fromAmino(object: _146.QueryClientConnectionsResponseAmino): _146.QueryClientConnectionsResponse;
                    toAmino(message: _146.QueryClientConnectionsResponse): _146.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _146.QueryClientConnectionsResponseAminoMsg): _146.QueryClientConnectionsResponse;
                    toAminoMsg(message: _146.QueryClientConnectionsResponse): _146.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryClientConnectionsResponseProtoMsg): _146.QueryClientConnectionsResponse;
                    toProto(message: _146.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryClientConnectionsResponse): _146.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _146.QueryConnectionClientStateRequest;
                    toJSON(message: _146.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_146.QueryConnectionClientStateRequest>): _146.QueryConnectionClientStateRequest;
                    fromAmino(object: _146.QueryConnectionClientStateRequestAmino): _146.QueryConnectionClientStateRequest;
                    toAmino(message: _146.QueryConnectionClientStateRequest): _146.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _146.QueryConnectionClientStateRequestAminoMsg): _146.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _146.QueryConnectionClientStateRequest): _146.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionClientStateRequestProtoMsg): _146.QueryConnectionClientStateRequest;
                    toProto(message: _146.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionClientStateRequest): _146.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _146.QueryConnectionClientStateResponse;
                    toJSON(message: _146.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_146.QueryConnectionClientStateResponse>): _146.QueryConnectionClientStateResponse;
                    fromAmino(object: _146.QueryConnectionClientStateResponseAmino): _146.QueryConnectionClientStateResponse;
                    toAmino(message: _146.QueryConnectionClientStateResponse): _146.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _146.QueryConnectionClientStateResponseAminoMsg): _146.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _146.QueryConnectionClientStateResponse): _146.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionClientStateResponseProtoMsg): _146.QueryConnectionClientStateResponse;
                    toProto(message: _146.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionClientStateResponse): _146.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _146.QueryConnectionConsensusStateRequest;
                    toJSON(message: _146.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_146.QueryConnectionConsensusStateRequest>): _146.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _146.QueryConnectionConsensusStateRequestAmino): _146.QueryConnectionConsensusStateRequest;
                    toAmino(message: _146.QueryConnectionConsensusStateRequest): _146.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _146.QueryConnectionConsensusStateRequestAminoMsg): _146.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _146.QueryConnectionConsensusStateRequest): _146.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionConsensusStateRequestProtoMsg): _146.QueryConnectionConsensusStateRequest;
                    toProto(message: _146.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionConsensusStateRequest): _146.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _146.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _146.QueryConnectionConsensusStateResponse;
                    toJSON(message: _146.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_146.QueryConnectionConsensusStateResponse>): _146.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _146.QueryConnectionConsensusStateResponseAmino): _146.QueryConnectionConsensusStateResponse;
                    toAmino(message: _146.QueryConnectionConsensusStateResponse): _146.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _146.QueryConnectionConsensusStateResponseAminoMsg): _146.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _146.QueryConnectionConsensusStateResponse): _146.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _146.QueryConnectionConsensusStateResponseProtoMsg): _146.QueryConnectionConsensusStateResponse;
                    toProto(message: _146.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _146.QueryConnectionConsensusStateResponse): _146.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _145.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GenesisState;
                    fromJSON(object: any): _145.GenesisState;
                    toJSON(message: _145.GenesisState): unknown;
                    fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
                    fromAmino(object: _145.GenesisStateAmino): _145.GenesisState;
                    toAmino(message: _145.GenesisState): _145.GenesisStateAmino;
                    fromAminoMsg(object: _145.GenesisStateAminoMsg): _145.GenesisState;
                    toAminoMsg(message: _145.GenesisState): _145.GenesisStateAminoMsg;
                    fromProtoMsg(message: _145.GenesisStateProtoMsg): _145.GenesisState;
                    toProto(message: _145.GenesisState): Uint8Array;
                    toProtoMsg(message: _145.GenesisState): _145.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _144.State;
                stateToJSON(object: _144.State): string;
                State: typeof _144.State;
                StateSDKType: typeof _144.State;
                StateAmino: typeof _144.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _144.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ConnectionEnd;
                    fromJSON(object: any): _144.ConnectionEnd;
                    toJSON(message: _144.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_144.ConnectionEnd>): _144.ConnectionEnd;
                    fromAmino(object: _144.ConnectionEndAmino): _144.ConnectionEnd;
                    toAmino(message: _144.ConnectionEnd): _144.ConnectionEndAmino;
                    fromAminoMsg(object: _144.ConnectionEndAminoMsg): _144.ConnectionEnd;
                    toAminoMsg(message: _144.ConnectionEnd): _144.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _144.ConnectionEndProtoMsg): _144.ConnectionEnd;
                    toProto(message: _144.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _144.ConnectionEnd): _144.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _144.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.IdentifiedConnection;
                    fromJSON(object: any): _144.IdentifiedConnection;
                    toJSON(message: _144.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_144.IdentifiedConnection>): _144.IdentifiedConnection;
                    fromAmino(object: _144.IdentifiedConnectionAmino): _144.IdentifiedConnection;
                    toAmino(message: _144.IdentifiedConnection): _144.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _144.IdentifiedConnectionAminoMsg): _144.IdentifiedConnection;
                    toAminoMsg(message: _144.IdentifiedConnection): _144.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _144.IdentifiedConnectionProtoMsg): _144.IdentifiedConnection;
                    toProto(message: _144.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _144.IdentifiedConnection): _144.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _144.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Counterparty;
                    fromJSON(object: any): _144.Counterparty;
                    toJSON(message: _144.Counterparty): unknown;
                    fromPartial(object: Partial<_144.Counterparty>): _144.Counterparty;
                    fromAmino(object: _144.CounterpartyAmino): _144.Counterparty;
                    toAmino(message: _144.Counterparty): _144.CounterpartyAmino;
                    fromAminoMsg(object: _144.CounterpartyAminoMsg): _144.Counterparty;
                    toAminoMsg(message: _144.Counterparty): _144.CounterpartyAminoMsg;
                    fromProtoMsg(message: _144.CounterpartyProtoMsg): _144.Counterparty;
                    toProto(message: _144.Counterparty): Uint8Array;
                    toProtoMsg(message: _144.Counterparty): _144.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _144.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ClientPaths;
                    fromJSON(object: any): _144.ClientPaths;
                    toJSON(message: _144.ClientPaths): unknown;
                    fromPartial(object: Partial<_144.ClientPaths>): _144.ClientPaths;
                    fromAmino(object: _144.ClientPathsAmino): _144.ClientPaths;
                    toAmino(message: _144.ClientPaths): _144.ClientPathsAmino;
                    fromAminoMsg(object: _144.ClientPathsAminoMsg): _144.ClientPaths;
                    toAminoMsg(message: _144.ClientPaths): _144.ClientPathsAminoMsg;
                    fromProtoMsg(message: _144.ClientPathsProtoMsg): _144.ClientPaths;
                    toProto(message: _144.ClientPaths): Uint8Array;
                    toProtoMsg(message: _144.ClientPaths): _144.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _144.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ConnectionPaths;
                    fromJSON(object: any): _144.ConnectionPaths;
                    toJSON(message: _144.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_144.ConnectionPaths>): _144.ConnectionPaths;
                    fromAmino(object: _144.ConnectionPathsAmino): _144.ConnectionPaths;
                    toAmino(message: _144.ConnectionPaths): _144.ConnectionPathsAmino;
                    fromAminoMsg(object: _144.ConnectionPathsAminoMsg): _144.ConnectionPaths;
                    toAminoMsg(message: _144.ConnectionPaths): _144.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _144.ConnectionPathsProtoMsg): _144.ConnectionPaths;
                    toProto(message: _144.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _144.ConnectionPaths): _144.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _144.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Version;
                    fromJSON(object: any): _144.Version;
                    toJSON(message: _144.Version): unknown;
                    fromPartial(object: Partial<_144.Version>): _144.Version;
                    fromAmino(object: _144.VersionAmino): _144.Version;
                    toAmino(message: _144.Version): _144.VersionAmino;
                    fromAminoMsg(object: _144.VersionAminoMsg): _144.Version;
                    toAminoMsg(message: _144.Version): _144.VersionAminoMsg;
                    fromProtoMsg(message: _144.VersionProtoMsg): _144.Version;
                    toProto(message: _144.Version): Uint8Array;
                    toProtoMsg(message: _144.Version): _144.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _144.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Params;
                    fromJSON(object: any): _144.Params;
                    toJSON(message: _144.Params): unknown;
                    fromPartial(object: Partial<_144.Params>): _144.Params;
                    fromAmino(object: _144.ParamsAmino): _144.Params;
                    toAmino(message: _144.Params): _144.ParamsAmino;
                    fromAminoMsg(object: _144.ParamsAminoMsg): _144.Params;
                    toAminoMsg(message: _144.Params): _144.ParamsAminoMsg;
                    fromProtoMsg(message: _144.ParamsProtoMsg): _144.Params;
                    toProto(message: _144.Params): Uint8Array;
                    toProtoMsg(message: _144.Params): _144.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _148.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ClientState;
                    fromJSON(object: any): _148.ClientState;
                    toJSON(message: _148.ClientState): unknown;
                    fromPartial(object: Partial<_148.ClientState>): _148.ClientState;
                    fromAmino(object: _148.ClientStateAmino): _148.ClientState;
                    toAmino(message: _148.ClientState): _148.ClientStateAmino;
                    fromAminoMsg(object: _148.ClientStateAminoMsg): _148.ClientState;
                    toAminoMsg(message: _148.ClientState): _148.ClientStateAminoMsg;
                    fromProtoMsg(message: _148.ClientStateProtoMsg): _148.ClientState;
                    toProto(message: _148.ClientState): Uint8Array;
                    toProtoMsg(message: _148.ClientState): _148.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _149.DataType;
                dataTypeToJSON(object: _149.DataType): string;
                DataType: typeof _149.DataType;
                DataTypeSDKType: typeof _149.DataType;
                DataTypeAmino: typeof _149.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _149.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ClientState;
                    fromJSON(object: any): _149.ClientState;
                    toJSON(message: _149.ClientState): unknown;
                    fromPartial(object: Partial<_149.ClientState>): _149.ClientState;
                    fromAmino(object: _149.ClientStateAmino): _149.ClientState;
                    toAmino(message: _149.ClientState): _149.ClientStateAmino;
                    fromAminoMsg(object: _149.ClientStateAminoMsg): _149.ClientState;
                    toAminoMsg(message: _149.ClientState): _149.ClientStateAminoMsg;
                    fromProtoMsg(message: _149.ClientStateProtoMsg): _149.ClientState;
                    toProto(message: _149.ClientState): Uint8Array;
                    toProtoMsg(message: _149.ClientState): _149.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _149.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ConsensusState;
                    fromJSON(object: any): _149.ConsensusState;
                    toJSON(message: _149.ConsensusState): unknown;
                    fromPartial(object: Partial<_149.ConsensusState>): _149.ConsensusState;
                    fromAmino(object: _149.ConsensusStateAmino): _149.ConsensusState;
                    toAmino(message: _149.ConsensusState): _149.ConsensusStateAmino;
                    fromAminoMsg(object: _149.ConsensusStateAminoMsg): _149.ConsensusState;
                    toAminoMsg(message: _149.ConsensusState): _149.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _149.ConsensusStateProtoMsg): _149.ConsensusState;
                    toProto(message: _149.ConsensusState): Uint8Array;
                    toProtoMsg(message: _149.ConsensusState): _149.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _149.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Header;
                    fromJSON(object: any): _149.Header;
                    toJSON(message: _149.Header): unknown;
                    fromPartial(object: Partial<_149.Header>): _149.Header;
                    fromAmino(object: _149.HeaderAmino): _149.Header;
                    toAmino(message: _149.Header): _149.HeaderAmino;
                    fromAminoMsg(object: _149.HeaderAminoMsg): _149.Header;
                    toAminoMsg(message: _149.Header): _149.HeaderAminoMsg;
                    fromProtoMsg(message: _149.HeaderProtoMsg): _149.Header;
                    toProto(message: _149.Header): Uint8Array;
                    toProtoMsg(message: _149.Header): _149.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _149.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Misbehaviour;
                    fromJSON(object: any): _149.Misbehaviour;
                    toJSON(message: _149.Misbehaviour): unknown;
                    fromPartial(object: Partial<_149.Misbehaviour>): _149.Misbehaviour;
                    fromAmino(object: _149.MisbehaviourAmino): _149.Misbehaviour;
                    toAmino(message: _149.Misbehaviour): _149.MisbehaviourAmino;
                    fromAminoMsg(object: _149.MisbehaviourAminoMsg): _149.Misbehaviour;
                    toAminoMsg(message: _149.Misbehaviour): _149.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _149.MisbehaviourProtoMsg): _149.Misbehaviour;
                    toProto(message: _149.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _149.Misbehaviour): _149.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _149.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SignatureAndData;
                    fromJSON(object: any): _149.SignatureAndData;
                    toJSON(message: _149.SignatureAndData): unknown;
                    fromPartial(object: Partial<_149.SignatureAndData>): _149.SignatureAndData;
                    fromAmino(object: _149.SignatureAndDataAmino): _149.SignatureAndData;
                    toAmino(message: _149.SignatureAndData): _149.SignatureAndDataAmino;
                    fromAminoMsg(object: _149.SignatureAndDataAminoMsg): _149.SignatureAndData;
                    toAminoMsg(message: _149.SignatureAndData): _149.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _149.SignatureAndDataProtoMsg): _149.SignatureAndData;
                    toProto(message: _149.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _149.SignatureAndData): _149.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _149.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.TimestampedSignatureData;
                    fromJSON(object: any): _149.TimestampedSignatureData;
                    toJSON(message: _149.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_149.TimestampedSignatureData>): _149.TimestampedSignatureData;
                    fromAmino(object: _149.TimestampedSignatureDataAmino): _149.TimestampedSignatureData;
                    toAmino(message: _149.TimestampedSignatureData): _149.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _149.TimestampedSignatureDataAminoMsg): _149.TimestampedSignatureData;
                    toAminoMsg(message: _149.TimestampedSignatureData): _149.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _149.TimestampedSignatureDataProtoMsg): _149.TimestampedSignatureData;
                    toProto(message: _149.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _149.TimestampedSignatureData): _149.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _149.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SignBytes;
                    fromJSON(object: any): _149.SignBytes;
                    toJSON(message: _149.SignBytes): unknown;
                    fromPartial(object: Partial<_149.SignBytes>): _149.SignBytes;
                    fromAmino(object: _149.SignBytesAmino): _149.SignBytes;
                    toAmino(message: _149.SignBytes): _149.SignBytesAmino;
                    fromAminoMsg(object: _149.SignBytesAminoMsg): _149.SignBytes;
                    toAminoMsg(message: _149.SignBytes): _149.SignBytesAminoMsg;
                    fromProtoMsg(message: _149.SignBytesProtoMsg): _149.SignBytes;
                    toProto(message: _149.SignBytes): Uint8Array;
                    toProtoMsg(message: _149.SignBytes): _149.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _149.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.HeaderData;
                    fromJSON(object: any): _149.HeaderData;
                    toJSON(message: _149.HeaderData): unknown;
                    fromPartial(object: Partial<_149.HeaderData>): _149.HeaderData;
                    fromAmino(object: _149.HeaderDataAmino): _149.HeaderData;
                    toAmino(message: _149.HeaderData): _149.HeaderDataAmino;
                    fromAminoMsg(object: _149.HeaderDataAminoMsg): _149.HeaderData;
                    toAminoMsg(message: _149.HeaderData): _149.HeaderDataAminoMsg;
                    fromProtoMsg(message: _149.HeaderDataProtoMsg): _149.HeaderData;
                    toProto(message: _149.HeaderData): Uint8Array;
                    toProtoMsg(message: _149.HeaderData): _149.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _149.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ClientStateData;
                    fromJSON(object: any): _149.ClientStateData;
                    toJSON(message: _149.ClientStateData): unknown;
                    fromPartial(object: Partial<_149.ClientStateData>): _149.ClientStateData;
                    fromAmino(object: _149.ClientStateDataAmino): _149.ClientStateData;
                    toAmino(message: _149.ClientStateData): _149.ClientStateDataAmino;
                    fromAminoMsg(object: _149.ClientStateDataAminoMsg): _149.ClientStateData;
                    toAminoMsg(message: _149.ClientStateData): _149.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _149.ClientStateDataProtoMsg): _149.ClientStateData;
                    toProto(message: _149.ClientStateData): Uint8Array;
                    toProtoMsg(message: _149.ClientStateData): _149.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _149.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ConsensusStateData;
                    fromJSON(object: any): _149.ConsensusStateData;
                    toJSON(message: _149.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_149.ConsensusStateData>): _149.ConsensusStateData;
                    fromAmino(object: _149.ConsensusStateDataAmino): _149.ConsensusStateData;
                    toAmino(message: _149.ConsensusStateData): _149.ConsensusStateDataAmino;
                    fromAminoMsg(object: _149.ConsensusStateDataAminoMsg): _149.ConsensusStateData;
                    toAminoMsg(message: _149.ConsensusStateData): _149.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _149.ConsensusStateDataProtoMsg): _149.ConsensusStateData;
                    toProto(message: _149.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _149.ConsensusStateData): _149.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _149.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ConnectionStateData;
                    fromJSON(object: any): _149.ConnectionStateData;
                    toJSON(message: _149.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_149.ConnectionStateData>): _149.ConnectionStateData;
                    fromAmino(object: _149.ConnectionStateDataAmino): _149.ConnectionStateData;
                    toAmino(message: _149.ConnectionStateData): _149.ConnectionStateDataAmino;
                    fromAminoMsg(object: _149.ConnectionStateDataAminoMsg): _149.ConnectionStateData;
                    toAminoMsg(message: _149.ConnectionStateData): _149.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _149.ConnectionStateDataProtoMsg): _149.ConnectionStateData;
                    toProto(message: _149.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _149.ConnectionStateData): _149.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _149.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ChannelStateData;
                    fromJSON(object: any): _149.ChannelStateData;
                    toJSON(message: _149.ChannelStateData): unknown;
                    fromPartial(object: Partial<_149.ChannelStateData>): _149.ChannelStateData;
                    fromAmino(object: _149.ChannelStateDataAmino): _149.ChannelStateData;
                    toAmino(message: _149.ChannelStateData): _149.ChannelStateDataAmino;
                    fromAminoMsg(object: _149.ChannelStateDataAminoMsg): _149.ChannelStateData;
                    toAminoMsg(message: _149.ChannelStateData): _149.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _149.ChannelStateDataProtoMsg): _149.ChannelStateData;
                    toProto(message: _149.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _149.ChannelStateData): _149.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _149.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PacketCommitmentData;
                    fromJSON(object: any): _149.PacketCommitmentData;
                    toJSON(message: _149.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_149.PacketCommitmentData>): _149.PacketCommitmentData;
                    fromAmino(object: _149.PacketCommitmentDataAmino): _149.PacketCommitmentData;
                    toAmino(message: _149.PacketCommitmentData): _149.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _149.PacketCommitmentDataAminoMsg): _149.PacketCommitmentData;
                    toAminoMsg(message: _149.PacketCommitmentData): _149.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _149.PacketCommitmentDataProtoMsg): _149.PacketCommitmentData;
                    toProto(message: _149.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _149.PacketCommitmentData): _149.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _149.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PacketAcknowledgementData;
                    fromJSON(object: any): _149.PacketAcknowledgementData;
                    toJSON(message: _149.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_149.PacketAcknowledgementData>): _149.PacketAcknowledgementData;
                    fromAmino(object: _149.PacketAcknowledgementDataAmino): _149.PacketAcknowledgementData;
                    toAmino(message: _149.PacketAcknowledgementData): _149.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _149.PacketAcknowledgementDataAminoMsg): _149.PacketAcknowledgementData;
                    toAminoMsg(message: _149.PacketAcknowledgementData): _149.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _149.PacketAcknowledgementDataProtoMsg): _149.PacketAcknowledgementData;
                    toProto(message: _149.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _149.PacketAcknowledgementData): _149.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _149.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PacketReceiptAbsenceData;
                    fromJSON(object: any): _149.PacketReceiptAbsenceData;
                    toJSON(message: _149.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_149.PacketReceiptAbsenceData>): _149.PacketReceiptAbsenceData;
                    fromAmino(object: _149.PacketReceiptAbsenceDataAmino): _149.PacketReceiptAbsenceData;
                    toAmino(message: _149.PacketReceiptAbsenceData): _149.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _149.PacketReceiptAbsenceDataAminoMsg): _149.PacketReceiptAbsenceData;
                    toAminoMsg(message: _149.PacketReceiptAbsenceData): _149.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _149.PacketReceiptAbsenceDataProtoMsg): _149.PacketReceiptAbsenceData;
                    toProto(message: _149.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _149.PacketReceiptAbsenceData): _149.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _149.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.NextSequenceRecvData;
                    fromJSON(object: any): _149.NextSequenceRecvData;
                    toJSON(message: _149.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_149.NextSequenceRecvData>): _149.NextSequenceRecvData;
                    fromAmino(object: _149.NextSequenceRecvDataAmino): _149.NextSequenceRecvData;
                    toAmino(message: _149.NextSequenceRecvData): _149.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _149.NextSequenceRecvDataAminoMsg): _149.NextSequenceRecvData;
                    toAminoMsg(message: _149.NextSequenceRecvData): _149.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _149.NextSequenceRecvDataProtoMsg): _149.NextSequenceRecvData;
                    toProto(message: _149.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _149.NextSequenceRecvData): _149.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _150.DataType;
                dataTypeToJSON(object: _150.DataType): string;
                DataType: typeof _150.DataType;
                DataTypeSDKType: typeof _150.DataType;
                DataTypeAmino: typeof _150.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _150.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ClientState;
                    fromJSON(object: any): _150.ClientState;
                    toJSON(message: _150.ClientState): unknown;
                    fromPartial(object: Partial<_150.ClientState>): _150.ClientState;
                    fromAmino(object: _150.ClientStateAmino): _150.ClientState;
                    toAmino(message: _150.ClientState): _150.ClientStateAmino;
                    fromAminoMsg(object: _150.ClientStateAminoMsg): _150.ClientState;
                    toAminoMsg(message: _150.ClientState): _150.ClientStateAminoMsg;
                    fromProtoMsg(message: _150.ClientStateProtoMsg): _150.ClientState;
                    toProto(message: _150.ClientState): Uint8Array;
                    toProtoMsg(message: _150.ClientState): _150.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _150.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ConsensusState;
                    fromJSON(object: any): _150.ConsensusState;
                    toJSON(message: _150.ConsensusState): unknown;
                    fromPartial(object: Partial<_150.ConsensusState>): _150.ConsensusState;
                    fromAmino(object: _150.ConsensusStateAmino): _150.ConsensusState;
                    toAmino(message: _150.ConsensusState): _150.ConsensusStateAmino;
                    fromAminoMsg(object: _150.ConsensusStateAminoMsg): _150.ConsensusState;
                    toAminoMsg(message: _150.ConsensusState): _150.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _150.ConsensusStateProtoMsg): _150.ConsensusState;
                    toProto(message: _150.ConsensusState): Uint8Array;
                    toProtoMsg(message: _150.ConsensusState): _150.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _150.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Header;
                    fromJSON(object: any): _150.Header;
                    toJSON(message: _150.Header): unknown;
                    fromPartial(object: Partial<_150.Header>): _150.Header;
                    fromAmino(object: _150.HeaderAmino): _150.Header;
                    toAmino(message: _150.Header): _150.HeaderAmino;
                    fromAminoMsg(object: _150.HeaderAminoMsg): _150.Header;
                    toAminoMsg(message: _150.Header): _150.HeaderAminoMsg;
                    fromProtoMsg(message: _150.HeaderProtoMsg): _150.Header;
                    toProto(message: _150.Header): Uint8Array;
                    toProtoMsg(message: _150.Header): _150.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _150.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Misbehaviour;
                    fromJSON(object: any): _150.Misbehaviour;
                    toJSON(message: _150.Misbehaviour): unknown;
                    fromPartial(object: Partial<_150.Misbehaviour>): _150.Misbehaviour;
                    fromAmino(object: _150.MisbehaviourAmino): _150.Misbehaviour;
                    toAmino(message: _150.Misbehaviour): _150.MisbehaviourAmino;
                    fromAminoMsg(object: _150.MisbehaviourAminoMsg): _150.Misbehaviour;
                    toAminoMsg(message: _150.Misbehaviour): _150.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _150.MisbehaviourProtoMsg): _150.Misbehaviour;
                    toProto(message: _150.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _150.Misbehaviour): _150.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _150.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SignatureAndData;
                    fromJSON(object: any): _150.SignatureAndData;
                    toJSON(message: _150.SignatureAndData): unknown;
                    fromPartial(object: Partial<_150.SignatureAndData>): _150.SignatureAndData;
                    fromAmino(object: _150.SignatureAndDataAmino): _150.SignatureAndData;
                    toAmino(message: _150.SignatureAndData): _150.SignatureAndDataAmino;
                    fromAminoMsg(object: _150.SignatureAndDataAminoMsg): _150.SignatureAndData;
                    toAminoMsg(message: _150.SignatureAndData): _150.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _150.SignatureAndDataProtoMsg): _150.SignatureAndData;
                    toProto(message: _150.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _150.SignatureAndData): _150.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _150.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TimestampedSignatureData;
                    fromJSON(object: any): _150.TimestampedSignatureData;
                    toJSON(message: _150.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_150.TimestampedSignatureData>): _150.TimestampedSignatureData;
                    fromAmino(object: _150.TimestampedSignatureDataAmino): _150.TimestampedSignatureData;
                    toAmino(message: _150.TimestampedSignatureData): _150.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _150.TimestampedSignatureDataAminoMsg): _150.TimestampedSignatureData;
                    toAminoMsg(message: _150.TimestampedSignatureData): _150.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _150.TimestampedSignatureDataProtoMsg): _150.TimestampedSignatureData;
                    toProto(message: _150.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _150.TimestampedSignatureData): _150.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _150.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SignBytes;
                    fromJSON(object: any): _150.SignBytes;
                    toJSON(message: _150.SignBytes): unknown;
                    fromPartial(object: Partial<_150.SignBytes>): _150.SignBytes;
                    fromAmino(object: _150.SignBytesAmino): _150.SignBytes;
                    toAmino(message: _150.SignBytes): _150.SignBytesAmino;
                    fromAminoMsg(object: _150.SignBytesAminoMsg): _150.SignBytes;
                    toAminoMsg(message: _150.SignBytes): _150.SignBytesAminoMsg;
                    fromProtoMsg(message: _150.SignBytesProtoMsg): _150.SignBytes;
                    toProto(message: _150.SignBytes): Uint8Array;
                    toProtoMsg(message: _150.SignBytes): _150.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _150.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.HeaderData;
                    fromJSON(object: any): _150.HeaderData;
                    toJSON(message: _150.HeaderData): unknown;
                    fromPartial(object: Partial<_150.HeaderData>): _150.HeaderData;
                    fromAmino(object: _150.HeaderDataAmino): _150.HeaderData;
                    toAmino(message: _150.HeaderData): _150.HeaderDataAmino;
                    fromAminoMsg(object: _150.HeaderDataAminoMsg): _150.HeaderData;
                    toAminoMsg(message: _150.HeaderData): _150.HeaderDataAminoMsg;
                    fromProtoMsg(message: _150.HeaderDataProtoMsg): _150.HeaderData;
                    toProto(message: _150.HeaderData): Uint8Array;
                    toProtoMsg(message: _150.HeaderData): _150.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _150.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ClientStateData;
                    fromJSON(object: any): _150.ClientStateData;
                    toJSON(message: _150.ClientStateData): unknown;
                    fromPartial(object: Partial<_150.ClientStateData>): _150.ClientStateData;
                    fromAmino(object: _150.ClientStateDataAmino): _150.ClientStateData;
                    toAmino(message: _150.ClientStateData): _150.ClientStateDataAmino;
                    fromAminoMsg(object: _150.ClientStateDataAminoMsg): _150.ClientStateData;
                    toAminoMsg(message: _150.ClientStateData): _150.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _150.ClientStateDataProtoMsg): _150.ClientStateData;
                    toProto(message: _150.ClientStateData): Uint8Array;
                    toProtoMsg(message: _150.ClientStateData): _150.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _150.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ConsensusStateData;
                    fromJSON(object: any): _150.ConsensusStateData;
                    toJSON(message: _150.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_150.ConsensusStateData>): _150.ConsensusStateData;
                    fromAmino(object: _150.ConsensusStateDataAmino): _150.ConsensusStateData;
                    toAmino(message: _150.ConsensusStateData): _150.ConsensusStateDataAmino;
                    fromAminoMsg(object: _150.ConsensusStateDataAminoMsg): _150.ConsensusStateData;
                    toAminoMsg(message: _150.ConsensusStateData): _150.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _150.ConsensusStateDataProtoMsg): _150.ConsensusStateData;
                    toProto(message: _150.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _150.ConsensusStateData): _150.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _150.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ConnectionStateData;
                    fromJSON(object: any): _150.ConnectionStateData;
                    toJSON(message: _150.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_150.ConnectionStateData>): _150.ConnectionStateData;
                    fromAmino(object: _150.ConnectionStateDataAmino): _150.ConnectionStateData;
                    toAmino(message: _150.ConnectionStateData): _150.ConnectionStateDataAmino;
                    fromAminoMsg(object: _150.ConnectionStateDataAminoMsg): _150.ConnectionStateData;
                    toAminoMsg(message: _150.ConnectionStateData): _150.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _150.ConnectionStateDataProtoMsg): _150.ConnectionStateData;
                    toProto(message: _150.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _150.ConnectionStateData): _150.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _150.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ChannelStateData;
                    fromJSON(object: any): _150.ChannelStateData;
                    toJSON(message: _150.ChannelStateData): unknown;
                    fromPartial(object: Partial<_150.ChannelStateData>): _150.ChannelStateData;
                    fromAmino(object: _150.ChannelStateDataAmino): _150.ChannelStateData;
                    toAmino(message: _150.ChannelStateData): _150.ChannelStateDataAmino;
                    fromAminoMsg(object: _150.ChannelStateDataAminoMsg): _150.ChannelStateData;
                    toAminoMsg(message: _150.ChannelStateData): _150.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _150.ChannelStateDataProtoMsg): _150.ChannelStateData;
                    toProto(message: _150.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _150.ChannelStateData): _150.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _150.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PacketCommitmentData;
                    fromJSON(object: any): _150.PacketCommitmentData;
                    toJSON(message: _150.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_150.PacketCommitmentData>): _150.PacketCommitmentData;
                    fromAmino(object: _150.PacketCommitmentDataAmino): _150.PacketCommitmentData;
                    toAmino(message: _150.PacketCommitmentData): _150.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _150.PacketCommitmentDataAminoMsg): _150.PacketCommitmentData;
                    toAminoMsg(message: _150.PacketCommitmentData): _150.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _150.PacketCommitmentDataProtoMsg): _150.PacketCommitmentData;
                    toProto(message: _150.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _150.PacketCommitmentData): _150.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _150.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PacketAcknowledgementData;
                    fromJSON(object: any): _150.PacketAcknowledgementData;
                    toJSON(message: _150.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_150.PacketAcknowledgementData>): _150.PacketAcknowledgementData;
                    fromAmino(object: _150.PacketAcknowledgementDataAmino): _150.PacketAcknowledgementData;
                    toAmino(message: _150.PacketAcknowledgementData): _150.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _150.PacketAcknowledgementDataAminoMsg): _150.PacketAcknowledgementData;
                    toAminoMsg(message: _150.PacketAcknowledgementData): _150.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _150.PacketAcknowledgementDataProtoMsg): _150.PacketAcknowledgementData;
                    toProto(message: _150.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _150.PacketAcknowledgementData): _150.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _150.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PacketReceiptAbsenceData;
                    fromJSON(object: any): _150.PacketReceiptAbsenceData;
                    toJSON(message: _150.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_150.PacketReceiptAbsenceData>): _150.PacketReceiptAbsenceData;
                    fromAmino(object: _150.PacketReceiptAbsenceDataAmino): _150.PacketReceiptAbsenceData;
                    toAmino(message: _150.PacketReceiptAbsenceData): _150.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _150.PacketReceiptAbsenceDataAminoMsg): _150.PacketReceiptAbsenceData;
                    toAminoMsg(message: _150.PacketReceiptAbsenceData): _150.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _150.PacketReceiptAbsenceDataProtoMsg): _150.PacketReceiptAbsenceData;
                    toProto(message: _150.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _150.PacketReceiptAbsenceData): _150.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _150.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.NextSequenceRecvData;
                    fromJSON(object: any): _150.NextSequenceRecvData;
                    toJSON(message: _150.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_150.NextSequenceRecvData>): _150.NextSequenceRecvData;
                    fromAmino(object: _150.NextSequenceRecvDataAmino): _150.NextSequenceRecvData;
                    toAmino(message: _150.NextSequenceRecvData): _150.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _150.NextSequenceRecvDataAminoMsg): _150.NextSequenceRecvData;
                    toAminoMsg(message: _150.NextSequenceRecvData): _150.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _150.NextSequenceRecvDataProtoMsg): _150.NextSequenceRecvData;
                    toProto(message: _150.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _150.NextSequenceRecvData): _150.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _151.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ClientState;
                    fromJSON(object: any): _151.ClientState;
                    toJSON(message: _151.ClientState): unknown;
                    fromPartial(object: Partial<_151.ClientState>): _151.ClientState;
                    fromAmino(object: _151.ClientStateAmino): _151.ClientState;
                    toAmino(message: _151.ClientState): _151.ClientStateAmino;
                    fromAminoMsg(object: _151.ClientStateAminoMsg): _151.ClientState;
                    toAminoMsg(message: _151.ClientState): _151.ClientStateAminoMsg;
                    fromProtoMsg(message: _151.ClientStateProtoMsg): _151.ClientState;
                    toProto(message: _151.ClientState): Uint8Array;
                    toProtoMsg(message: _151.ClientState): _151.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _151.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ConsensusState;
                    fromJSON(object: any): _151.ConsensusState;
                    toJSON(message: _151.ConsensusState): unknown;
                    fromPartial(object: Partial<_151.ConsensusState>): _151.ConsensusState;
                    fromAmino(object: _151.ConsensusStateAmino): _151.ConsensusState;
                    toAmino(message: _151.ConsensusState): _151.ConsensusStateAmino;
                    fromAminoMsg(object: _151.ConsensusStateAminoMsg): _151.ConsensusState;
                    toAminoMsg(message: _151.ConsensusState): _151.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _151.ConsensusStateProtoMsg): _151.ConsensusState;
                    toProto(message: _151.ConsensusState): Uint8Array;
                    toProtoMsg(message: _151.ConsensusState): _151.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _151.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Misbehaviour;
                    fromJSON(object: any): _151.Misbehaviour;
                    toJSON(message: _151.Misbehaviour): unknown;
                    fromPartial(object: Partial<_151.Misbehaviour>): _151.Misbehaviour;
                    fromAmino(object: _151.MisbehaviourAmino): _151.Misbehaviour;
                    toAmino(message: _151.Misbehaviour): _151.MisbehaviourAmino;
                    fromAminoMsg(object: _151.MisbehaviourAminoMsg): _151.Misbehaviour;
                    toAminoMsg(message: _151.Misbehaviour): _151.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _151.MisbehaviourProtoMsg): _151.Misbehaviour;
                    toProto(message: _151.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _151.Misbehaviour): _151.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _151.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Header;
                    fromJSON(object: any): _151.Header;
                    toJSON(message: _151.Header): unknown;
                    fromPartial(object: Partial<_151.Header>): _151.Header;
                    fromAmino(object: _151.HeaderAmino): _151.Header;
                    toAmino(message: _151.Header): _151.HeaderAmino;
                    fromAminoMsg(object: _151.HeaderAminoMsg): _151.Header;
                    toAminoMsg(message: _151.Header): _151.HeaderAminoMsg;
                    fromProtoMsg(message: _151.HeaderProtoMsg): _151.Header;
                    toProto(message: _151.Header): Uint8Array;
                    toProtoMsg(message: _151.Header): _151.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _151.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Fraction;
                    fromJSON(object: any): _151.Fraction;
                    toJSON(message: _151.Fraction): unknown;
                    fromPartial(object: Partial<_151.Fraction>): _151.Fraction;
                    fromAmino(object: _151.FractionAmino): _151.Fraction;
                    toAmino(message: _151.Fraction): _151.FractionAmino;
                    fromAminoMsg(object: _151.FractionAminoMsg): _151.Fraction;
                    toAminoMsg(message: _151.Fraction): _151.FractionAminoMsg;
                    fromProtoMsg(message: _151.FractionProtoMsg): _151.Fraction;
                    toProto(message: _151.Fraction): Uint8Array;
                    toProtoMsg(message: _151.Fraction): _151.FractionProtoMsg;
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
                        v1: _256.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _257.MsgClientImpl;
                    };
                    client: {
                        v1: _258.MsgClientImpl;
                    };
                    connection: {
                        v1: _259.MsgClientImpl;
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
                            denomTrace(request: _131.QueryDenomTraceRequest): Promise<_131.QueryDenomTraceResponse>;
                            denomTraces(request?: _131.QueryDenomTracesRequest): Promise<_131.QueryDenomTracesResponse>;
                            params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _137.QueryChannelRequest): Promise<_137.QueryChannelResponse>;
                            channels(request?: _137.QueryChannelsRequest): Promise<_137.QueryChannelsResponse>;
                            connectionChannels(request: _137.QueryConnectionChannelsRequest): Promise<_137.QueryConnectionChannelsResponse>;
                            channelClientState(request: _137.QueryChannelClientStateRequest): Promise<_137.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _137.QueryChannelConsensusStateRequest): Promise<_137.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _137.QueryPacketCommitmentRequest): Promise<_137.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _137.QueryPacketCommitmentsRequest): Promise<_137.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _137.QueryPacketReceiptRequest): Promise<_137.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _137.QueryPacketAcknowledgementRequest): Promise<_137.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _137.QueryPacketAcknowledgementsRequest): Promise<_137.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _137.QueryUnreceivedPacketsRequest): Promise<_137.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _137.QueryUnreceivedAcksRequest): Promise<_137.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _137.QueryNextSequenceReceiveRequest): Promise<_137.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _141.QueryClientStateRequest): Promise<_141.QueryClientStateResponse>;
                            clientStates(request?: _141.QueryClientStatesRequest): Promise<_141.QueryClientStatesResponse>;
                            consensusState(request: _141.QueryConsensusStateRequest): Promise<_141.QueryConsensusStateResponse>;
                            consensusStates(request: _141.QueryConsensusStatesRequest): Promise<_141.QueryConsensusStatesResponse>;
                            clientStatus(request: _141.QueryClientStatusRequest): Promise<_141.QueryClientStatusResponse>;
                            clientParams(request?: _141.QueryClientParamsRequest): Promise<_141.QueryClientParamsResponse>;
                            upgradedClientState(request?: _141.QueryUpgradedClientStateRequest): Promise<_141.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _141.QueryUpgradedConsensusStateRequest): Promise<_141.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _146.QueryConnectionRequest): Promise<_146.QueryConnectionResponse>;
                            connections(request?: _146.QueryConnectionsRequest): Promise<_146.QueryConnectionsResponse>;
                            clientConnections(request: _146.QueryClientConnectionsRequest): Promise<_146.QueryClientConnectionsResponse>;
                            connectionClientState(request: _146.QueryConnectionClientStateRequest): Promise<_146.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _146.QueryConnectionConsensusStateRequest): Promise<_146.QueryConnectionConsensusStateResponse>;
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
                        v1: _248.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _249.LCDQueryClient;
                    };
                    client: {
                        v1: _250.LCDQueryClient;
                    };
                    connection: {
                        v1: _251.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
