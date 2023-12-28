import * as _191 from "./applications/transfer/v1/genesis";
import * as _192 from "./applications/transfer/v1/query";
import * as _193 from "./applications/transfer/v1/transfer";
import * as _194 from "./applications/transfer/v1/tx";
import * as _195 from "./applications/transfer/v2/packet";
import * as _196 from "./core/channel/v1/channel";
import * as _197 from "./core/channel/v1/genesis";
import * as _198 from "./core/channel/v1/query";
import * as _199 from "./core/channel/v1/tx";
import * as _200 from "./core/client/v1/client";
import * as _201 from "./core/client/v1/genesis";
import * as _202 from "./core/client/v1/query";
import * as _203 from "./core/client/v1/tx";
import * as _204 from "./core/commitment/v1/commitment";
import * as _205 from "./core/connection/v1/connection";
import * as _206 from "./core/connection/v1/genesis";
import * as _207 from "./core/connection/v1/query";
import * as _208 from "./core/connection/v1/tx";
import * as _209 from "./core/port/v1/query";
import * as _210 from "./core/types/v1/genesis";
import * as _211 from "./lightclients/localhost/v1/localhost";
import * as _212 from "./lightclients/solomachine/v1/solomachine";
import * as _213 from "./lightclients/solomachine/v2/solomachine";
import * as _214 from "./lightclients/tendermint/v1/tendermint";
import * as _359 from "./applications/transfer/v1/query.lcd";
import * as _360 from "./core/channel/v1/query.lcd";
import * as _361 from "./core/client/v1/query.lcd";
import * as _362 from "./core/connection/v1/query.lcd";
import * as _363 from "./applications/transfer/v1/query.rpc.Query";
import * as _364 from "./core/channel/v1/query.rpc.Query";
import * as _365 from "./core/client/v1/query.rpc.Query";
import * as _366 from "./core/connection/v1/query.rpc.Query";
import * as _367 from "./core/port/v1/query.rpc.Query";
import * as _368 from "./applications/transfer/v1/tx.rpc.msg";
import * as _369 from "./core/channel/v1/tx.rpc.msg";
import * as _370 from "./core/client/v1/tx.rpc.msg";
import * as _371 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _368.MsgClientImpl;
                QueryClientImpl: typeof _363.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _192.QueryDenomTraceRequest): Promise<_192.QueryDenomTraceResponse>;
                    denomTraces(request?: _192.QueryDenomTracesRequest): Promise<_192.QueryDenomTracesResponse>;
                    params(request?: _192.QueryParamsRequest): Promise<_192.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _359.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _194.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _194.MsgTransfer): {
                            typeUrl: string;
                            value: _194.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _194.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _194.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _194.MsgTransfer): {
                            typeUrl: string;
                            value: _194.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _194.MsgTransfer) => _194.MsgTransferAmino;
                        fromAmino: (object: _194.MsgTransferAmino) => _194.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _194.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgTransfer;
                    fromJSON(object: any): _194.MsgTransfer;
                    toJSON(message: _194.MsgTransfer): unknown;
                    fromPartial(object: Partial<_194.MsgTransfer>): _194.MsgTransfer;
                    fromAmino(object: _194.MsgTransferAmino): _194.MsgTransfer;
                    toAmino(message: _194.MsgTransfer): _194.MsgTransferAmino;
                    fromAminoMsg(object: _194.MsgTransferAminoMsg): _194.MsgTransfer;
                    toAminoMsg(message: _194.MsgTransfer): _194.MsgTransferAminoMsg;
                    fromProtoMsg(message: _194.MsgTransferProtoMsg): _194.MsgTransfer;
                    toProto(message: _194.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _194.MsgTransfer): _194.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _194.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgTransferResponse;
                    fromJSON(_: any): _194.MsgTransferResponse;
                    toJSON(_: _194.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_194.MsgTransferResponse>): _194.MsgTransferResponse;
                    fromAmino(_: _194.MsgTransferResponseAmino): _194.MsgTransferResponse;
                    toAmino(_: _194.MsgTransferResponse): _194.MsgTransferResponseAmino;
                    fromAminoMsg(object: _194.MsgTransferResponseAminoMsg): _194.MsgTransferResponse;
                    toAminoMsg(message: _194.MsgTransferResponse): _194.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _194.MsgTransferResponseProtoMsg): _194.MsgTransferResponse;
                    toProto(message: _194.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _194.MsgTransferResponse): _194.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _193.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.DenomTrace;
                    fromJSON(object: any): _193.DenomTrace;
                    toJSON(message: _193.DenomTrace): unknown;
                    fromPartial(object: Partial<_193.DenomTrace>): _193.DenomTrace;
                    fromAmino(object: _193.DenomTraceAmino): _193.DenomTrace;
                    toAmino(message: _193.DenomTrace): _193.DenomTraceAmino;
                    fromAminoMsg(object: _193.DenomTraceAminoMsg): _193.DenomTrace;
                    toAminoMsg(message: _193.DenomTrace): _193.DenomTraceAminoMsg;
                    fromProtoMsg(message: _193.DenomTraceProtoMsg): _193.DenomTrace;
                    toProto(message: _193.DenomTrace): Uint8Array;
                    toProtoMsg(message: _193.DenomTrace): _193.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _193.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Params;
                    fromJSON(object: any): _193.Params;
                    toJSON(message: _193.Params): unknown;
                    fromPartial(object: Partial<_193.Params>): _193.Params;
                    fromAmino(object: _193.ParamsAmino): _193.Params;
                    toAmino(message: _193.Params): _193.ParamsAmino;
                    fromAminoMsg(object: _193.ParamsAminoMsg): _193.Params;
                    toAminoMsg(message: _193.Params): _193.ParamsAminoMsg;
                    fromProtoMsg(message: _193.ParamsProtoMsg): _193.Params;
                    toProto(message: _193.Params): Uint8Array;
                    toProtoMsg(message: _193.Params): _193.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomTraceRequest;
                    fromJSON(object: any): _192.QueryDenomTraceRequest;
                    toJSON(message: _192.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_192.QueryDenomTraceRequest>): _192.QueryDenomTraceRequest;
                    fromAmino(object: _192.QueryDenomTraceRequestAmino): _192.QueryDenomTraceRequest;
                    toAmino(message: _192.QueryDenomTraceRequest): _192.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _192.QueryDenomTraceRequestAminoMsg): _192.QueryDenomTraceRequest;
                    toAminoMsg(message: _192.QueryDenomTraceRequest): _192.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomTraceRequestProtoMsg): _192.QueryDenomTraceRequest;
                    toProto(message: _192.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomTraceRequest): _192.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomTraceResponse;
                    fromJSON(object: any): _192.QueryDenomTraceResponse;
                    toJSON(message: _192.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_192.QueryDenomTraceResponse>): _192.QueryDenomTraceResponse;
                    fromAmino(object: _192.QueryDenomTraceResponseAmino): _192.QueryDenomTraceResponse;
                    toAmino(message: _192.QueryDenomTraceResponse): _192.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _192.QueryDenomTraceResponseAminoMsg): _192.QueryDenomTraceResponse;
                    toAminoMsg(message: _192.QueryDenomTraceResponse): _192.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomTraceResponseProtoMsg): _192.QueryDenomTraceResponse;
                    toProto(message: _192.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomTraceResponse): _192.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomTracesRequest;
                    fromJSON(object: any): _192.QueryDenomTracesRequest;
                    toJSON(message: _192.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_192.QueryDenomTracesRequest>): _192.QueryDenomTracesRequest;
                    fromAmino(object: _192.QueryDenomTracesRequestAmino): _192.QueryDenomTracesRequest;
                    toAmino(message: _192.QueryDenomTracesRequest): _192.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _192.QueryDenomTracesRequestAminoMsg): _192.QueryDenomTracesRequest;
                    toAminoMsg(message: _192.QueryDenomTracesRequest): _192.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomTracesRequestProtoMsg): _192.QueryDenomTracesRequest;
                    toProto(message: _192.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomTracesRequest): _192.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomTracesResponse;
                    fromJSON(object: any): _192.QueryDenomTracesResponse;
                    toJSON(message: _192.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_192.QueryDenomTracesResponse>): _192.QueryDenomTracesResponse;
                    fromAmino(object: _192.QueryDenomTracesResponseAmino): _192.QueryDenomTracesResponse;
                    toAmino(message: _192.QueryDenomTracesResponse): _192.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _192.QueryDenomTracesResponseAminoMsg): _192.QueryDenomTracesResponse;
                    toAminoMsg(message: _192.QueryDenomTracesResponse): _192.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomTracesResponseProtoMsg): _192.QueryDenomTracesResponse;
                    toProto(message: _192.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomTracesResponse): _192.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _192.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryParamsRequest;
                    fromJSON(_: any): _192.QueryParamsRequest;
                    toJSON(_: _192.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_192.QueryParamsRequest>): _192.QueryParamsRequest;
                    fromAmino(_: _192.QueryParamsRequestAmino): _192.QueryParamsRequest;
                    toAmino(_: _192.QueryParamsRequest): _192.QueryParamsRequestAmino;
                    fromAminoMsg(object: _192.QueryParamsRequestAminoMsg): _192.QueryParamsRequest;
                    toAminoMsg(message: _192.QueryParamsRequest): _192.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryParamsRequestProtoMsg): _192.QueryParamsRequest;
                    toProto(message: _192.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryParamsRequest): _192.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryParamsResponse;
                    fromJSON(object: any): _192.QueryParamsResponse;
                    toJSON(message: _192.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_192.QueryParamsResponse>): _192.QueryParamsResponse;
                    fromAmino(object: _192.QueryParamsResponseAmino): _192.QueryParamsResponse;
                    toAmino(message: _192.QueryParamsResponse): _192.QueryParamsResponseAmino;
                    fromAminoMsg(object: _192.QueryParamsResponseAminoMsg): _192.QueryParamsResponse;
                    toAminoMsg(message: _192.QueryParamsResponse): _192.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryParamsResponseProtoMsg): _192.QueryParamsResponse;
                    toProto(message: _192.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryParamsResponse): _192.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _191.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.GenesisState;
                    fromJSON(object: any): _191.GenesisState;
                    toJSON(message: _191.GenesisState): unknown;
                    fromPartial(object: Partial<_191.GenesisState>): _191.GenesisState;
                    fromAmino(object: _191.GenesisStateAmino): _191.GenesisState;
                    toAmino(message: _191.GenesisState): _191.GenesisStateAmino;
                    fromAminoMsg(object: _191.GenesisStateAminoMsg): _191.GenesisState;
                    toAminoMsg(message: _191.GenesisState): _191.GenesisStateAminoMsg;
                    fromProtoMsg(message: _191.GenesisStateProtoMsg): _191.GenesisState;
                    toProto(message: _191.GenesisState): Uint8Array;
                    toProtoMsg(message: _191.GenesisState): _191.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _195.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.FungibleTokenPacketData;
                    fromJSON(object: any): _195.FungibleTokenPacketData;
                    toJSON(message: _195.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_195.FungibleTokenPacketData>): _195.FungibleTokenPacketData;
                    fromAmino(object: _195.FungibleTokenPacketDataAmino): _195.FungibleTokenPacketData;
                    toAmino(message: _195.FungibleTokenPacketData): _195.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _195.FungibleTokenPacketDataAminoMsg): _195.FungibleTokenPacketData;
                    toAminoMsg(message: _195.FungibleTokenPacketData): _195.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _195.FungibleTokenPacketDataProtoMsg): _195.FungibleTokenPacketData;
                    toProto(message: _195.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _195.FungibleTokenPacketData): _195.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _369.MsgClientImpl;
                QueryClientImpl: typeof _364.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _198.QueryChannelRequest): Promise<_198.QueryChannelResponse>;
                    channels(request?: _198.QueryChannelsRequest): Promise<_198.QueryChannelsResponse>;
                    connectionChannels(request: _198.QueryConnectionChannelsRequest): Promise<_198.QueryConnectionChannelsResponse>;
                    channelClientState(request: _198.QueryChannelClientStateRequest): Promise<_198.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _198.QueryChannelConsensusStateRequest): Promise<_198.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _198.QueryPacketCommitmentRequest): Promise<_198.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _198.QueryPacketCommitmentsRequest): Promise<_198.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _198.QueryPacketReceiptRequest): Promise<_198.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _198.QueryPacketAcknowledgementRequest): Promise<_198.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _198.QueryPacketAcknowledgementsRequest): Promise<_198.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _198.QueryUnreceivedPacketsRequest): Promise<_198.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _198.QueryUnreceivedAcksRequest): Promise<_198.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _198.QueryNextSequenceReceiveRequest): Promise<_198.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _360.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _199.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _199.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _199.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _199.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _199.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _199.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _199.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _199.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _199.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _199.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _199.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _199.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _199.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _199.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _199.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _199.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _199.MsgRecvPacket): {
                            typeUrl: string;
                            value: _199.MsgRecvPacket;
                        };
                        timeout(value: _199.MsgTimeout): {
                            typeUrl: string;
                            value: _199.MsgTimeout;
                        };
                        timeoutOnClose(value: _199.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _199.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _199.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _199.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _199.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _199.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _199.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _199.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _199.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _199.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _199.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _199.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _199.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _199.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _199.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _199.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _199.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _199.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _199.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _199.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _199.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _199.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _199.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _199.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _199.MsgRecvPacket): {
                            typeUrl: string;
                            value: _199.MsgRecvPacket;
                        };
                        timeout(value: _199.MsgTimeout): {
                            typeUrl: string;
                            value: _199.MsgTimeout;
                        };
                        timeoutOnClose(value: _199.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _199.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _199.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _199.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelOpenInit) => _199.MsgChannelOpenInitAmino;
                        fromAmino: (object: _199.MsgChannelOpenInitAmino) => _199.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelOpenTry) => _199.MsgChannelOpenTryAmino;
                        fromAmino: (object: _199.MsgChannelOpenTryAmino) => _199.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelOpenAck) => _199.MsgChannelOpenAckAmino;
                        fromAmino: (object: _199.MsgChannelOpenAckAmino) => _199.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelOpenConfirm) => _199.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _199.MsgChannelOpenConfirmAmino) => _199.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelCloseInit) => _199.MsgChannelCloseInitAmino;
                        fromAmino: (object: _199.MsgChannelCloseInitAmino) => _199.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelCloseConfirm) => _199.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _199.MsgChannelCloseConfirmAmino) => _199.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _199.MsgRecvPacket) => _199.MsgRecvPacketAmino;
                        fromAmino: (object: _199.MsgRecvPacketAmino) => _199.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _199.MsgTimeout) => _199.MsgTimeoutAmino;
                        fromAmino: (object: _199.MsgTimeoutAmino) => _199.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _199.MsgTimeoutOnClose) => _199.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _199.MsgTimeoutOnCloseAmino) => _199.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _199.MsgAcknowledgement) => _199.MsgAcknowledgementAmino;
                        fromAmino: (object: _199.MsgAcknowledgementAmino) => _199.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenInit;
                    fromJSON(object: any): _199.MsgChannelOpenInit;
                    toJSON(message: _199.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenInit>): _199.MsgChannelOpenInit;
                    fromAmino(object: _199.MsgChannelOpenInitAmino): _199.MsgChannelOpenInit;
                    toAmino(message: _199.MsgChannelOpenInit): _199.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenInitAminoMsg): _199.MsgChannelOpenInit;
                    toAminoMsg(message: _199.MsgChannelOpenInit): _199.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenInitProtoMsg): _199.MsgChannelOpenInit;
                    toProto(message: _199.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenInit): _199.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _199.MsgChannelOpenInitResponse;
                    toJSON(_: _199.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelOpenInitResponse>): _199.MsgChannelOpenInitResponse;
                    fromAmino(_: _199.MsgChannelOpenInitResponseAmino): _199.MsgChannelOpenInitResponse;
                    toAmino(_: _199.MsgChannelOpenInitResponse): _199.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenInitResponseAminoMsg): _199.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _199.MsgChannelOpenInitResponse): _199.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenInitResponseProtoMsg): _199.MsgChannelOpenInitResponse;
                    toProto(message: _199.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenInitResponse): _199.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenTry;
                    fromJSON(object: any): _199.MsgChannelOpenTry;
                    toJSON(message: _199.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenTry>): _199.MsgChannelOpenTry;
                    fromAmino(object: _199.MsgChannelOpenTryAmino): _199.MsgChannelOpenTry;
                    toAmino(message: _199.MsgChannelOpenTry): _199.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenTryAminoMsg): _199.MsgChannelOpenTry;
                    toAminoMsg(message: _199.MsgChannelOpenTry): _199.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenTryProtoMsg): _199.MsgChannelOpenTry;
                    toProto(message: _199.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenTry): _199.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _199.MsgChannelOpenTryResponse;
                    toJSON(_: _199.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelOpenTryResponse>): _199.MsgChannelOpenTryResponse;
                    fromAmino(_: _199.MsgChannelOpenTryResponseAmino): _199.MsgChannelOpenTryResponse;
                    toAmino(_: _199.MsgChannelOpenTryResponse): _199.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenTryResponseAminoMsg): _199.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _199.MsgChannelOpenTryResponse): _199.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenTryResponseProtoMsg): _199.MsgChannelOpenTryResponse;
                    toProto(message: _199.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenTryResponse): _199.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenAck;
                    fromJSON(object: any): _199.MsgChannelOpenAck;
                    toJSON(message: _199.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenAck>): _199.MsgChannelOpenAck;
                    fromAmino(object: _199.MsgChannelOpenAckAmino): _199.MsgChannelOpenAck;
                    toAmino(message: _199.MsgChannelOpenAck): _199.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenAckAminoMsg): _199.MsgChannelOpenAck;
                    toAminoMsg(message: _199.MsgChannelOpenAck): _199.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenAckProtoMsg): _199.MsgChannelOpenAck;
                    toProto(message: _199.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenAck): _199.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _199.MsgChannelOpenAckResponse;
                    toJSON(_: _199.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelOpenAckResponse>): _199.MsgChannelOpenAckResponse;
                    fromAmino(_: _199.MsgChannelOpenAckResponseAmino): _199.MsgChannelOpenAckResponse;
                    toAmino(_: _199.MsgChannelOpenAckResponse): _199.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenAckResponseAminoMsg): _199.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _199.MsgChannelOpenAckResponse): _199.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenAckResponseProtoMsg): _199.MsgChannelOpenAckResponse;
                    toProto(message: _199.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenAckResponse): _199.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenConfirm;
                    fromJSON(object: any): _199.MsgChannelOpenConfirm;
                    toJSON(message: _199.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenConfirm>): _199.MsgChannelOpenConfirm;
                    fromAmino(object: _199.MsgChannelOpenConfirmAmino): _199.MsgChannelOpenConfirm;
                    toAmino(message: _199.MsgChannelOpenConfirm): _199.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenConfirmAminoMsg): _199.MsgChannelOpenConfirm;
                    toAminoMsg(message: _199.MsgChannelOpenConfirm): _199.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenConfirmProtoMsg): _199.MsgChannelOpenConfirm;
                    toProto(message: _199.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenConfirm): _199.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _199.MsgChannelOpenConfirmResponse;
                    toJSON(_: _199.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelOpenConfirmResponse>): _199.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _199.MsgChannelOpenConfirmResponseAmino): _199.MsgChannelOpenConfirmResponse;
                    toAmino(_: _199.MsgChannelOpenConfirmResponse): _199.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenConfirmResponseAminoMsg): _199.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _199.MsgChannelOpenConfirmResponse): _199.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenConfirmResponseProtoMsg): _199.MsgChannelOpenConfirmResponse;
                    toProto(message: _199.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenConfirmResponse): _199.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelCloseInit;
                    fromJSON(object: any): _199.MsgChannelCloseInit;
                    toJSON(message: _199.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_199.MsgChannelCloseInit>): _199.MsgChannelCloseInit;
                    fromAmino(object: _199.MsgChannelCloseInitAmino): _199.MsgChannelCloseInit;
                    toAmino(message: _199.MsgChannelCloseInit): _199.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _199.MsgChannelCloseInitAminoMsg): _199.MsgChannelCloseInit;
                    toAminoMsg(message: _199.MsgChannelCloseInit): _199.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelCloseInitProtoMsg): _199.MsgChannelCloseInit;
                    toProto(message: _199.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelCloseInit): _199.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _199.MsgChannelCloseInitResponse;
                    toJSON(_: _199.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelCloseInitResponse>): _199.MsgChannelCloseInitResponse;
                    fromAmino(_: _199.MsgChannelCloseInitResponseAmino): _199.MsgChannelCloseInitResponse;
                    toAmino(_: _199.MsgChannelCloseInitResponse): _199.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelCloseInitResponseAminoMsg): _199.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _199.MsgChannelCloseInitResponse): _199.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelCloseInitResponseProtoMsg): _199.MsgChannelCloseInitResponse;
                    toProto(message: _199.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelCloseInitResponse): _199.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelCloseConfirm;
                    fromJSON(object: any): _199.MsgChannelCloseConfirm;
                    toJSON(message: _199.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_199.MsgChannelCloseConfirm>): _199.MsgChannelCloseConfirm;
                    fromAmino(object: _199.MsgChannelCloseConfirmAmino): _199.MsgChannelCloseConfirm;
                    toAmino(message: _199.MsgChannelCloseConfirm): _199.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _199.MsgChannelCloseConfirmAminoMsg): _199.MsgChannelCloseConfirm;
                    toAminoMsg(message: _199.MsgChannelCloseConfirm): _199.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelCloseConfirmProtoMsg): _199.MsgChannelCloseConfirm;
                    toProto(message: _199.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelCloseConfirm): _199.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _199.MsgChannelCloseConfirmResponse;
                    toJSON(_: _199.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelCloseConfirmResponse>): _199.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _199.MsgChannelCloseConfirmResponseAmino): _199.MsgChannelCloseConfirmResponse;
                    toAmino(_: _199.MsgChannelCloseConfirmResponse): _199.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelCloseConfirmResponseAminoMsg): _199.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _199.MsgChannelCloseConfirmResponse): _199.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelCloseConfirmResponseProtoMsg): _199.MsgChannelCloseConfirmResponse;
                    toProto(message: _199.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelCloseConfirmResponse): _199.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _199.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgRecvPacket;
                    fromJSON(object: any): _199.MsgRecvPacket;
                    toJSON(message: _199.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_199.MsgRecvPacket>): _199.MsgRecvPacket;
                    fromAmino(object: _199.MsgRecvPacketAmino): _199.MsgRecvPacket;
                    toAmino(message: _199.MsgRecvPacket): _199.MsgRecvPacketAmino;
                    fromAminoMsg(object: _199.MsgRecvPacketAminoMsg): _199.MsgRecvPacket;
                    toAminoMsg(message: _199.MsgRecvPacket): _199.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _199.MsgRecvPacketProtoMsg): _199.MsgRecvPacket;
                    toProto(message: _199.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _199.MsgRecvPacket): _199.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgRecvPacketResponse;
                    fromJSON(_: any): _199.MsgRecvPacketResponse;
                    toJSON(_: _199.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_199.MsgRecvPacketResponse>): _199.MsgRecvPacketResponse;
                    fromAmino(_: _199.MsgRecvPacketResponseAmino): _199.MsgRecvPacketResponse;
                    toAmino(_: _199.MsgRecvPacketResponse): _199.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _199.MsgRecvPacketResponseAminoMsg): _199.MsgRecvPacketResponse;
                    toAminoMsg(message: _199.MsgRecvPacketResponse): _199.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgRecvPacketResponseProtoMsg): _199.MsgRecvPacketResponse;
                    toProto(message: _199.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgRecvPacketResponse): _199.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _199.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgTimeout;
                    fromJSON(object: any): _199.MsgTimeout;
                    toJSON(message: _199.MsgTimeout): unknown;
                    fromPartial(object: Partial<_199.MsgTimeout>): _199.MsgTimeout;
                    fromAmino(object: _199.MsgTimeoutAmino): _199.MsgTimeout;
                    toAmino(message: _199.MsgTimeout): _199.MsgTimeoutAmino;
                    fromAminoMsg(object: _199.MsgTimeoutAminoMsg): _199.MsgTimeout;
                    toAminoMsg(message: _199.MsgTimeout): _199.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _199.MsgTimeoutProtoMsg): _199.MsgTimeout;
                    toProto(message: _199.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _199.MsgTimeout): _199.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgTimeoutResponse;
                    fromJSON(_: any): _199.MsgTimeoutResponse;
                    toJSON(_: _199.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_199.MsgTimeoutResponse>): _199.MsgTimeoutResponse;
                    fromAmino(_: _199.MsgTimeoutResponseAmino): _199.MsgTimeoutResponse;
                    toAmino(_: _199.MsgTimeoutResponse): _199.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _199.MsgTimeoutResponseAminoMsg): _199.MsgTimeoutResponse;
                    toAminoMsg(message: _199.MsgTimeoutResponse): _199.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgTimeoutResponseProtoMsg): _199.MsgTimeoutResponse;
                    toProto(message: _199.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgTimeoutResponse): _199.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _199.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgTimeoutOnClose;
                    fromJSON(object: any): _199.MsgTimeoutOnClose;
                    toJSON(message: _199.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_199.MsgTimeoutOnClose>): _199.MsgTimeoutOnClose;
                    fromAmino(object: _199.MsgTimeoutOnCloseAmino): _199.MsgTimeoutOnClose;
                    toAmino(message: _199.MsgTimeoutOnClose): _199.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _199.MsgTimeoutOnCloseAminoMsg): _199.MsgTimeoutOnClose;
                    toAminoMsg(message: _199.MsgTimeoutOnClose): _199.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _199.MsgTimeoutOnCloseProtoMsg): _199.MsgTimeoutOnClose;
                    toProto(message: _199.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _199.MsgTimeoutOnClose): _199.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _199.MsgTimeoutOnCloseResponse;
                    toJSON(_: _199.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_199.MsgTimeoutOnCloseResponse>): _199.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _199.MsgTimeoutOnCloseResponseAmino): _199.MsgTimeoutOnCloseResponse;
                    toAmino(_: _199.MsgTimeoutOnCloseResponse): _199.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _199.MsgTimeoutOnCloseResponseAminoMsg): _199.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _199.MsgTimeoutOnCloseResponse): _199.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgTimeoutOnCloseResponseProtoMsg): _199.MsgTimeoutOnCloseResponse;
                    toProto(message: _199.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgTimeoutOnCloseResponse): _199.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _199.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgAcknowledgement;
                    fromJSON(object: any): _199.MsgAcknowledgement;
                    toJSON(message: _199.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_199.MsgAcknowledgement>): _199.MsgAcknowledgement;
                    fromAmino(object: _199.MsgAcknowledgementAmino): _199.MsgAcknowledgement;
                    toAmino(message: _199.MsgAcknowledgement): _199.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _199.MsgAcknowledgementAminoMsg): _199.MsgAcknowledgement;
                    toAminoMsg(message: _199.MsgAcknowledgement): _199.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _199.MsgAcknowledgementProtoMsg): _199.MsgAcknowledgement;
                    toProto(message: _199.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _199.MsgAcknowledgement): _199.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgAcknowledgementResponse;
                    fromJSON(_: any): _199.MsgAcknowledgementResponse;
                    toJSON(_: _199.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_199.MsgAcknowledgementResponse>): _199.MsgAcknowledgementResponse;
                    fromAmino(_: _199.MsgAcknowledgementResponseAmino): _199.MsgAcknowledgementResponse;
                    toAmino(_: _199.MsgAcknowledgementResponse): _199.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _199.MsgAcknowledgementResponseAminoMsg): _199.MsgAcknowledgementResponse;
                    toAminoMsg(message: _199.MsgAcknowledgementResponse): _199.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgAcknowledgementResponseProtoMsg): _199.MsgAcknowledgementResponse;
                    toProto(message: _199.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgAcknowledgementResponse): _199.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelRequest;
                    fromJSON(object: any): _198.QueryChannelRequest;
                    toJSON(message: _198.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_198.QueryChannelRequest>): _198.QueryChannelRequest;
                    fromAmino(object: _198.QueryChannelRequestAmino): _198.QueryChannelRequest;
                    toAmino(message: _198.QueryChannelRequest): _198.QueryChannelRequestAmino;
                    fromAminoMsg(object: _198.QueryChannelRequestAminoMsg): _198.QueryChannelRequest;
                    toAminoMsg(message: _198.QueryChannelRequest): _198.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelRequestProtoMsg): _198.QueryChannelRequest;
                    toProto(message: _198.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelRequest): _198.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelResponse;
                    fromJSON(object: any): _198.QueryChannelResponse;
                    toJSON(message: _198.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_198.QueryChannelResponse>): _198.QueryChannelResponse;
                    fromAmino(object: _198.QueryChannelResponseAmino): _198.QueryChannelResponse;
                    toAmino(message: _198.QueryChannelResponse): _198.QueryChannelResponseAmino;
                    fromAminoMsg(object: _198.QueryChannelResponseAminoMsg): _198.QueryChannelResponse;
                    toAminoMsg(message: _198.QueryChannelResponse): _198.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelResponseProtoMsg): _198.QueryChannelResponse;
                    toProto(message: _198.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelResponse): _198.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelsRequest;
                    fromJSON(object: any): _198.QueryChannelsRequest;
                    toJSON(message: _198.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryChannelsRequest>): _198.QueryChannelsRequest;
                    fromAmino(object: _198.QueryChannelsRequestAmino): _198.QueryChannelsRequest;
                    toAmino(message: _198.QueryChannelsRequest): _198.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _198.QueryChannelsRequestAminoMsg): _198.QueryChannelsRequest;
                    toAminoMsg(message: _198.QueryChannelsRequest): _198.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelsRequestProtoMsg): _198.QueryChannelsRequest;
                    toProto(message: _198.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelsRequest): _198.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelsResponse;
                    fromJSON(object: any): _198.QueryChannelsResponse;
                    toJSON(message: _198.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryChannelsResponse>): _198.QueryChannelsResponse;
                    fromAmino(object: _198.QueryChannelsResponseAmino): _198.QueryChannelsResponse;
                    toAmino(message: _198.QueryChannelsResponse): _198.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _198.QueryChannelsResponseAminoMsg): _198.QueryChannelsResponse;
                    toAminoMsg(message: _198.QueryChannelsResponse): _198.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelsResponseProtoMsg): _198.QueryChannelsResponse;
                    toProto(message: _198.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelsResponse): _198.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _198.QueryConnectionChannelsRequest;
                    toJSON(message: _198.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionChannelsRequest>): _198.QueryConnectionChannelsRequest;
                    fromAmino(object: _198.QueryConnectionChannelsRequestAmino): _198.QueryConnectionChannelsRequest;
                    toAmino(message: _198.QueryConnectionChannelsRequest): _198.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _198.QueryConnectionChannelsRequestAminoMsg): _198.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _198.QueryConnectionChannelsRequest): _198.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionChannelsRequestProtoMsg): _198.QueryConnectionChannelsRequest;
                    toProto(message: _198.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionChannelsRequest): _198.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _198.QueryConnectionChannelsResponse;
                    toJSON(message: _198.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionChannelsResponse>): _198.QueryConnectionChannelsResponse;
                    fromAmino(object: _198.QueryConnectionChannelsResponseAmino): _198.QueryConnectionChannelsResponse;
                    toAmino(message: _198.QueryConnectionChannelsResponse): _198.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _198.QueryConnectionChannelsResponseAminoMsg): _198.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _198.QueryConnectionChannelsResponse): _198.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionChannelsResponseProtoMsg): _198.QueryConnectionChannelsResponse;
                    toProto(message: _198.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionChannelsResponse): _198.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelClientStateRequest;
                    fromJSON(object: any): _198.QueryChannelClientStateRequest;
                    toJSON(message: _198.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_198.QueryChannelClientStateRequest>): _198.QueryChannelClientStateRequest;
                    fromAmino(object: _198.QueryChannelClientStateRequestAmino): _198.QueryChannelClientStateRequest;
                    toAmino(message: _198.QueryChannelClientStateRequest): _198.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _198.QueryChannelClientStateRequestAminoMsg): _198.QueryChannelClientStateRequest;
                    toAminoMsg(message: _198.QueryChannelClientStateRequest): _198.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelClientStateRequestProtoMsg): _198.QueryChannelClientStateRequest;
                    toProto(message: _198.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelClientStateRequest): _198.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelClientStateResponse;
                    fromJSON(object: any): _198.QueryChannelClientStateResponse;
                    toJSON(message: _198.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_198.QueryChannelClientStateResponse>): _198.QueryChannelClientStateResponse;
                    fromAmino(object: _198.QueryChannelClientStateResponseAmino): _198.QueryChannelClientStateResponse;
                    toAmino(message: _198.QueryChannelClientStateResponse): _198.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _198.QueryChannelClientStateResponseAminoMsg): _198.QueryChannelClientStateResponse;
                    toAminoMsg(message: _198.QueryChannelClientStateResponse): _198.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelClientStateResponseProtoMsg): _198.QueryChannelClientStateResponse;
                    toProto(message: _198.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelClientStateResponse): _198.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _198.QueryChannelConsensusStateRequest;
                    toJSON(message: _198.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_198.QueryChannelConsensusStateRequest>): _198.QueryChannelConsensusStateRequest;
                    fromAmino(object: _198.QueryChannelConsensusStateRequestAmino): _198.QueryChannelConsensusStateRequest;
                    toAmino(message: _198.QueryChannelConsensusStateRequest): _198.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _198.QueryChannelConsensusStateRequestAminoMsg): _198.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _198.QueryChannelConsensusStateRequest): _198.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelConsensusStateRequestProtoMsg): _198.QueryChannelConsensusStateRequest;
                    toProto(message: _198.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelConsensusStateRequest): _198.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _198.QueryChannelConsensusStateResponse;
                    toJSON(message: _198.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_198.QueryChannelConsensusStateResponse>): _198.QueryChannelConsensusStateResponse;
                    fromAmino(object: _198.QueryChannelConsensusStateResponseAmino): _198.QueryChannelConsensusStateResponse;
                    toAmino(message: _198.QueryChannelConsensusStateResponse): _198.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _198.QueryChannelConsensusStateResponseAminoMsg): _198.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _198.QueryChannelConsensusStateResponse): _198.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelConsensusStateResponseProtoMsg): _198.QueryChannelConsensusStateResponse;
                    toProto(message: _198.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelConsensusStateResponse): _198.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _198.QueryPacketCommitmentRequest;
                    toJSON(message: _198.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketCommitmentRequest>): _198.QueryPacketCommitmentRequest;
                    fromAmino(object: _198.QueryPacketCommitmentRequestAmino): _198.QueryPacketCommitmentRequest;
                    toAmino(message: _198.QueryPacketCommitmentRequest): _198.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketCommitmentRequestAminoMsg): _198.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _198.QueryPacketCommitmentRequest): _198.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketCommitmentRequestProtoMsg): _198.QueryPacketCommitmentRequest;
                    toProto(message: _198.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketCommitmentRequest): _198.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _198.QueryPacketCommitmentResponse;
                    toJSON(message: _198.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketCommitmentResponse>): _198.QueryPacketCommitmentResponse;
                    fromAmino(object: _198.QueryPacketCommitmentResponseAmino): _198.QueryPacketCommitmentResponse;
                    toAmino(message: _198.QueryPacketCommitmentResponse): _198.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketCommitmentResponseAminoMsg): _198.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _198.QueryPacketCommitmentResponse): _198.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketCommitmentResponseProtoMsg): _198.QueryPacketCommitmentResponse;
                    toProto(message: _198.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketCommitmentResponse): _198.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _198.QueryPacketCommitmentsRequest;
                    toJSON(message: _198.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketCommitmentsRequest>): _198.QueryPacketCommitmentsRequest;
                    fromAmino(object: _198.QueryPacketCommitmentsRequestAmino): _198.QueryPacketCommitmentsRequest;
                    toAmino(message: _198.QueryPacketCommitmentsRequest): _198.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketCommitmentsRequestAminoMsg): _198.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _198.QueryPacketCommitmentsRequest): _198.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketCommitmentsRequestProtoMsg): _198.QueryPacketCommitmentsRequest;
                    toProto(message: _198.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketCommitmentsRequest): _198.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _198.QueryPacketCommitmentsResponse;
                    toJSON(message: _198.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketCommitmentsResponse>): _198.QueryPacketCommitmentsResponse;
                    fromAmino(object: _198.QueryPacketCommitmentsResponseAmino): _198.QueryPacketCommitmentsResponse;
                    toAmino(message: _198.QueryPacketCommitmentsResponse): _198.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketCommitmentsResponseAminoMsg): _198.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _198.QueryPacketCommitmentsResponse): _198.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketCommitmentsResponseProtoMsg): _198.QueryPacketCommitmentsResponse;
                    toProto(message: _198.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketCommitmentsResponse): _198.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketReceiptRequest;
                    fromJSON(object: any): _198.QueryPacketReceiptRequest;
                    toJSON(message: _198.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketReceiptRequest>): _198.QueryPacketReceiptRequest;
                    fromAmino(object: _198.QueryPacketReceiptRequestAmino): _198.QueryPacketReceiptRequest;
                    toAmino(message: _198.QueryPacketReceiptRequest): _198.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketReceiptRequestAminoMsg): _198.QueryPacketReceiptRequest;
                    toAminoMsg(message: _198.QueryPacketReceiptRequest): _198.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketReceiptRequestProtoMsg): _198.QueryPacketReceiptRequest;
                    toProto(message: _198.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketReceiptRequest): _198.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketReceiptResponse;
                    fromJSON(object: any): _198.QueryPacketReceiptResponse;
                    toJSON(message: _198.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketReceiptResponse>): _198.QueryPacketReceiptResponse;
                    fromAmino(object: _198.QueryPacketReceiptResponseAmino): _198.QueryPacketReceiptResponse;
                    toAmino(message: _198.QueryPacketReceiptResponse): _198.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketReceiptResponseAminoMsg): _198.QueryPacketReceiptResponse;
                    toAminoMsg(message: _198.QueryPacketReceiptResponse): _198.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketReceiptResponseProtoMsg): _198.QueryPacketReceiptResponse;
                    toProto(message: _198.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketReceiptResponse): _198.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _198.QueryPacketAcknowledgementRequest;
                    toJSON(message: _198.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketAcknowledgementRequest>): _198.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _198.QueryPacketAcknowledgementRequestAmino): _198.QueryPacketAcknowledgementRequest;
                    toAmino(message: _198.QueryPacketAcknowledgementRequest): _198.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketAcknowledgementRequestAminoMsg): _198.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _198.QueryPacketAcknowledgementRequest): _198.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketAcknowledgementRequestProtoMsg): _198.QueryPacketAcknowledgementRequest;
                    toProto(message: _198.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketAcknowledgementRequest): _198.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _198.QueryPacketAcknowledgementResponse;
                    toJSON(message: _198.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketAcknowledgementResponse>): _198.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _198.QueryPacketAcknowledgementResponseAmino): _198.QueryPacketAcknowledgementResponse;
                    toAmino(message: _198.QueryPacketAcknowledgementResponse): _198.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketAcknowledgementResponseAminoMsg): _198.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _198.QueryPacketAcknowledgementResponse): _198.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketAcknowledgementResponseProtoMsg): _198.QueryPacketAcknowledgementResponse;
                    toProto(message: _198.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketAcknowledgementResponse): _198.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _198.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _198.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketAcknowledgementsRequest>): _198.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _198.QueryPacketAcknowledgementsRequestAmino): _198.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _198.QueryPacketAcknowledgementsRequest): _198.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketAcknowledgementsRequestAminoMsg): _198.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _198.QueryPacketAcknowledgementsRequest): _198.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketAcknowledgementsRequestProtoMsg): _198.QueryPacketAcknowledgementsRequest;
                    toProto(message: _198.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketAcknowledgementsRequest): _198.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _198.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _198.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketAcknowledgementsResponse>): _198.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _198.QueryPacketAcknowledgementsResponseAmino): _198.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _198.QueryPacketAcknowledgementsResponse): _198.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketAcknowledgementsResponseAminoMsg): _198.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _198.QueryPacketAcknowledgementsResponse): _198.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketAcknowledgementsResponseProtoMsg): _198.QueryPacketAcknowledgementsResponse;
                    toProto(message: _198.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketAcknowledgementsResponse): _198.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _198.QueryUnreceivedPacketsRequest;
                    toJSON(message: _198.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryUnreceivedPacketsRequest>): _198.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _198.QueryUnreceivedPacketsRequestAmino): _198.QueryUnreceivedPacketsRequest;
                    toAmino(message: _198.QueryUnreceivedPacketsRequest): _198.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _198.QueryUnreceivedPacketsRequestAminoMsg): _198.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _198.QueryUnreceivedPacketsRequest): _198.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryUnreceivedPacketsRequestProtoMsg): _198.QueryUnreceivedPacketsRequest;
                    toProto(message: _198.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryUnreceivedPacketsRequest): _198.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _198.QueryUnreceivedPacketsResponse;
                    toJSON(message: _198.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryUnreceivedPacketsResponse>): _198.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _198.QueryUnreceivedPacketsResponseAmino): _198.QueryUnreceivedPacketsResponse;
                    toAmino(message: _198.QueryUnreceivedPacketsResponse): _198.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _198.QueryUnreceivedPacketsResponseAminoMsg): _198.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _198.QueryUnreceivedPacketsResponse): _198.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryUnreceivedPacketsResponseProtoMsg): _198.QueryUnreceivedPacketsResponse;
                    toProto(message: _198.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryUnreceivedPacketsResponse): _198.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _198.QueryUnreceivedAcksRequest;
                    toJSON(message: _198.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_198.QueryUnreceivedAcksRequest>): _198.QueryUnreceivedAcksRequest;
                    fromAmino(object: _198.QueryUnreceivedAcksRequestAmino): _198.QueryUnreceivedAcksRequest;
                    toAmino(message: _198.QueryUnreceivedAcksRequest): _198.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _198.QueryUnreceivedAcksRequestAminoMsg): _198.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _198.QueryUnreceivedAcksRequest): _198.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryUnreceivedAcksRequestProtoMsg): _198.QueryUnreceivedAcksRequest;
                    toProto(message: _198.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryUnreceivedAcksRequest): _198.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _198.QueryUnreceivedAcksResponse;
                    toJSON(message: _198.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_198.QueryUnreceivedAcksResponse>): _198.QueryUnreceivedAcksResponse;
                    fromAmino(object: _198.QueryUnreceivedAcksResponseAmino): _198.QueryUnreceivedAcksResponse;
                    toAmino(message: _198.QueryUnreceivedAcksResponse): _198.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _198.QueryUnreceivedAcksResponseAminoMsg): _198.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _198.QueryUnreceivedAcksResponse): _198.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryUnreceivedAcksResponseProtoMsg): _198.QueryUnreceivedAcksResponse;
                    toProto(message: _198.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryUnreceivedAcksResponse): _198.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _198.QueryNextSequenceReceiveRequest;
                    toJSON(message: _198.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_198.QueryNextSequenceReceiveRequest>): _198.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _198.QueryNextSequenceReceiveRequestAmino): _198.QueryNextSequenceReceiveRequest;
                    toAmino(message: _198.QueryNextSequenceReceiveRequest): _198.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _198.QueryNextSequenceReceiveRequestAminoMsg): _198.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _198.QueryNextSequenceReceiveRequest): _198.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryNextSequenceReceiveRequestProtoMsg): _198.QueryNextSequenceReceiveRequest;
                    toProto(message: _198.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryNextSequenceReceiveRequest): _198.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _198.QueryNextSequenceReceiveResponse;
                    toJSON(message: _198.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_198.QueryNextSequenceReceiveResponse>): _198.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _198.QueryNextSequenceReceiveResponseAmino): _198.QueryNextSequenceReceiveResponse;
                    toAmino(message: _198.QueryNextSequenceReceiveResponse): _198.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _198.QueryNextSequenceReceiveResponseAminoMsg): _198.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _198.QueryNextSequenceReceiveResponse): _198.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryNextSequenceReceiveResponseProtoMsg): _198.QueryNextSequenceReceiveResponse;
                    toProto(message: _198.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryNextSequenceReceiveResponse): _198.QueryNextSequenceReceiveResponseProtoMsg;
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
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _197.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.PacketSequence;
                    fromJSON(object: any): _197.PacketSequence;
                    toJSON(message: _197.PacketSequence): unknown;
                    fromPartial(object: Partial<_197.PacketSequence>): _197.PacketSequence;
                    fromAmino(object: _197.PacketSequenceAmino): _197.PacketSequence;
                    toAmino(message: _197.PacketSequence): _197.PacketSequenceAmino;
                    fromAminoMsg(object: _197.PacketSequenceAminoMsg): _197.PacketSequence;
                    toAminoMsg(message: _197.PacketSequence): _197.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _197.PacketSequenceProtoMsg): _197.PacketSequence;
                    toProto(message: _197.PacketSequence): Uint8Array;
                    toProtoMsg(message: _197.PacketSequence): _197.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _196.State;
                stateToJSON(object: _196.State): string;
                orderFromJSON(object: any): _196.Order;
                orderToJSON(object: _196.Order): string;
                State: typeof _196.State;
                StateSDKType: typeof _196.State;
                StateAmino: typeof _196.State;
                Order: typeof _196.Order;
                OrderSDKType: typeof _196.Order;
                OrderAmino: typeof _196.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _196.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Channel;
                    fromJSON(object: any): _196.Channel;
                    toJSON(message: _196.Channel): unknown;
                    fromPartial(object: Partial<_196.Channel>): _196.Channel;
                    fromAmino(object: _196.ChannelAmino): _196.Channel;
                    toAmino(message: _196.Channel): _196.ChannelAmino;
                    fromAminoMsg(object: _196.ChannelAminoMsg): _196.Channel;
                    toAminoMsg(message: _196.Channel): _196.ChannelAminoMsg;
                    fromProtoMsg(message: _196.ChannelProtoMsg): _196.Channel;
                    toProto(message: _196.Channel): Uint8Array;
                    toProtoMsg(message: _196.Channel): _196.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _196.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.IdentifiedChannel;
                    fromJSON(object: any): _196.IdentifiedChannel;
                    toJSON(message: _196.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_196.IdentifiedChannel>): _196.IdentifiedChannel;
                    fromAmino(object: _196.IdentifiedChannelAmino): _196.IdentifiedChannel;
                    toAmino(message: _196.IdentifiedChannel): _196.IdentifiedChannelAmino;
                    fromAminoMsg(object: _196.IdentifiedChannelAminoMsg): _196.IdentifiedChannel;
                    toAminoMsg(message: _196.IdentifiedChannel): _196.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _196.IdentifiedChannelProtoMsg): _196.IdentifiedChannel;
                    toProto(message: _196.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _196.IdentifiedChannel): _196.IdentifiedChannelProtoMsg;
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
                Packet: {
                    typeUrl: string;
                    encode(message: _196.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Packet;
                    fromJSON(object: any): _196.Packet;
                    toJSON(message: _196.Packet): unknown;
                    fromPartial(object: Partial<_196.Packet>): _196.Packet;
                    fromAmino(object: _196.PacketAmino): _196.Packet;
                    toAmino(message: _196.Packet): _196.PacketAmino;
                    fromAminoMsg(object: _196.PacketAminoMsg): _196.Packet;
                    toAminoMsg(message: _196.Packet): _196.PacketAminoMsg;
                    fromProtoMsg(message: _196.PacketProtoMsg): _196.Packet;
                    toProto(message: _196.Packet): Uint8Array;
                    toProtoMsg(message: _196.Packet): _196.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _196.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.PacketState;
                    fromJSON(object: any): _196.PacketState;
                    toJSON(message: _196.PacketState): unknown;
                    fromPartial(object: Partial<_196.PacketState>): _196.PacketState;
                    fromAmino(object: _196.PacketStateAmino): _196.PacketState;
                    toAmino(message: _196.PacketState): _196.PacketStateAmino;
                    fromAminoMsg(object: _196.PacketStateAminoMsg): _196.PacketState;
                    toAminoMsg(message: _196.PacketState): _196.PacketStateAminoMsg;
                    fromProtoMsg(message: _196.PacketStateProtoMsg): _196.PacketState;
                    toProto(message: _196.PacketState): Uint8Array;
                    toProtoMsg(message: _196.PacketState): _196.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _196.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Acknowledgement;
                    fromJSON(object: any): _196.Acknowledgement;
                    toJSON(message: _196.Acknowledgement): unknown;
                    fromPartial(object: Partial<_196.Acknowledgement>): _196.Acknowledgement;
                    fromAmino(object: _196.AcknowledgementAmino): _196.Acknowledgement;
                    toAmino(message: _196.Acknowledgement): _196.AcknowledgementAmino;
                    fromAminoMsg(object: _196.AcknowledgementAminoMsg): _196.Acknowledgement;
                    toAminoMsg(message: _196.Acknowledgement): _196.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _196.AcknowledgementProtoMsg): _196.Acknowledgement;
                    toProto(message: _196.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _196.Acknowledgement): _196.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _370.MsgClientImpl;
                QueryClientImpl: typeof _365.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _202.QueryClientStateRequest): Promise<_202.QueryClientStateResponse>;
                    clientStates(request?: _202.QueryClientStatesRequest): Promise<_202.QueryClientStatesResponse>;
                    consensusState(request: _202.QueryConsensusStateRequest): Promise<_202.QueryConsensusStateResponse>;
                    consensusStates(request: _202.QueryConsensusStatesRequest): Promise<_202.QueryConsensusStatesResponse>;
                    clientStatus(request: _202.QueryClientStatusRequest): Promise<_202.QueryClientStatusResponse>;
                    clientParams(request?: _202.QueryClientParamsRequest): Promise<_202.QueryClientParamsResponse>;
                    upgradedClientState(request?: _202.QueryUpgradedClientStateRequest): Promise<_202.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _202.QueryUpgradedConsensusStateRequest): Promise<_202.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _361.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _203.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _203.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _203.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _203.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _203.MsgCreateClient): {
                            typeUrl: string;
                            value: _203.MsgCreateClient;
                        };
                        updateClient(value: _203.MsgUpdateClient): {
                            typeUrl: string;
                            value: _203.MsgUpdateClient;
                        };
                        upgradeClient(value: _203.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _203.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _203.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _203.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _203.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _203.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _203.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _203.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _203.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _203.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _203.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _203.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _203.MsgCreateClient): {
                            typeUrl: string;
                            value: _203.MsgCreateClient;
                        };
                        updateClient(value: _203.MsgUpdateClient): {
                            typeUrl: string;
                            value: _203.MsgUpdateClient;
                        };
                        upgradeClient(value: _203.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _203.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _203.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _203.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _203.MsgCreateClient) => _203.MsgCreateClientAmino;
                        fromAmino: (object: _203.MsgCreateClientAmino) => _203.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _203.MsgUpdateClient) => _203.MsgUpdateClientAmino;
                        fromAmino: (object: _203.MsgUpdateClientAmino) => _203.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _203.MsgUpgradeClient) => _203.MsgUpgradeClientAmino;
                        fromAmino: (object: _203.MsgUpgradeClientAmino) => _203.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _203.MsgSubmitMisbehaviour) => _203.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _203.MsgSubmitMisbehaviourAmino) => _203.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _203.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgCreateClient;
                    fromJSON(object: any): _203.MsgCreateClient;
                    toJSON(message: _203.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_203.MsgCreateClient>): _203.MsgCreateClient;
                    fromAmino(object: _203.MsgCreateClientAmino): _203.MsgCreateClient;
                    toAmino(message: _203.MsgCreateClient): _203.MsgCreateClientAmino;
                    fromAminoMsg(object: _203.MsgCreateClientAminoMsg): _203.MsgCreateClient;
                    toAminoMsg(message: _203.MsgCreateClient): _203.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _203.MsgCreateClientProtoMsg): _203.MsgCreateClient;
                    toProto(message: _203.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _203.MsgCreateClient): _203.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _203.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgCreateClientResponse;
                    fromJSON(_: any): _203.MsgCreateClientResponse;
                    toJSON(_: _203.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_203.MsgCreateClientResponse>): _203.MsgCreateClientResponse;
                    fromAmino(_: _203.MsgCreateClientResponseAmino): _203.MsgCreateClientResponse;
                    toAmino(_: _203.MsgCreateClientResponse): _203.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _203.MsgCreateClientResponseAminoMsg): _203.MsgCreateClientResponse;
                    toAminoMsg(message: _203.MsgCreateClientResponse): _203.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _203.MsgCreateClientResponseProtoMsg): _203.MsgCreateClientResponse;
                    toProto(message: _203.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _203.MsgCreateClientResponse): _203.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _203.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUpdateClient;
                    fromJSON(object: any): _203.MsgUpdateClient;
                    toJSON(message: _203.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_203.MsgUpdateClient>): _203.MsgUpdateClient;
                    fromAmino(object: _203.MsgUpdateClientAmino): _203.MsgUpdateClient;
                    toAmino(message: _203.MsgUpdateClient): _203.MsgUpdateClientAmino;
                    fromAminoMsg(object: _203.MsgUpdateClientAminoMsg): _203.MsgUpdateClient;
                    toAminoMsg(message: _203.MsgUpdateClient): _203.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _203.MsgUpdateClientProtoMsg): _203.MsgUpdateClient;
                    toProto(message: _203.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _203.MsgUpdateClient): _203.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _203.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUpdateClientResponse;
                    fromJSON(_: any): _203.MsgUpdateClientResponse;
                    toJSON(_: _203.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_203.MsgUpdateClientResponse>): _203.MsgUpdateClientResponse;
                    fromAmino(_: _203.MsgUpdateClientResponseAmino): _203.MsgUpdateClientResponse;
                    toAmino(_: _203.MsgUpdateClientResponse): _203.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _203.MsgUpdateClientResponseAminoMsg): _203.MsgUpdateClientResponse;
                    toAminoMsg(message: _203.MsgUpdateClientResponse): _203.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _203.MsgUpdateClientResponseProtoMsg): _203.MsgUpdateClientResponse;
                    toProto(message: _203.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _203.MsgUpdateClientResponse): _203.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _203.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUpgradeClient;
                    fromJSON(object: any): _203.MsgUpgradeClient;
                    toJSON(message: _203.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_203.MsgUpgradeClient>): _203.MsgUpgradeClient;
                    fromAmino(object: _203.MsgUpgradeClientAmino): _203.MsgUpgradeClient;
                    toAmino(message: _203.MsgUpgradeClient): _203.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _203.MsgUpgradeClientAminoMsg): _203.MsgUpgradeClient;
                    toAminoMsg(message: _203.MsgUpgradeClient): _203.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _203.MsgUpgradeClientProtoMsg): _203.MsgUpgradeClient;
                    toProto(message: _203.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _203.MsgUpgradeClient): _203.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _203.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUpgradeClientResponse;
                    fromJSON(_: any): _203.MsgUpgradeClientResponse;
                    toJSON(_: _203.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_203.MsgUpgradeClientResponse>): _203.MsgUpgradeClientResponse;
                    fromAmino(_: _203.MsgUpgradeClientResponseAmino): _203.MsgUpgradeClientResponse;
                    toAmino(_: _203.MsgUpgradeClientResponse): _203.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _203.MsgUpgradeClientResponseAminoMsg): _203.MsgUpgradeClientResponse;
                    toAminoMsg(message: _203.MsgUpgradeClientResponse): _203.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _203.MsgUpgradeClientResponseProtoMsg): _203.MsgUpgradeClientResponse;
                    toProto(message: _203.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _203.MsgUpgradeClientResponse): _203.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _203.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _203.MsgSubmitMisbehaviour;
                    toJSON(message: _203.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_203.MsgSubmitMisbehaviour>): _203.MsgSubmitMisbehaviour;
                    fromAmino(object: _203.MsgSubmitMisbehaviourAmino): _203.MsgSubmitMisbehaviour;
                    toAmino(message: _203.MsgSubmitMisbehaviour): _203.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _203.MsgSubmitMisbehaviourAminoMsg): _203.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _203.MsgSubmitMisbehaviour): _203.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _203.MsgSubmitMisbehaviourProtoMsg): _203.MsgSubmitMisbehaviour;
                    toProto(message: _203.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _203.MsgSubmitMisbehaviour): _203.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _203.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _203.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _203.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_203.MsgSubmitMisbehaviourResponse>): _203.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _203.MsgSubmitMisbehaviourResponseAmino): _203.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _203.MsgSubmitMisbehaviourResponse): _203.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _203.MsgSubmitMisbehaviourResponseAminoMsg): _203.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _203.MsgSubmitMisbehaviourResponse): _203.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _203.MsgSubmitMisbehaviourResponseProtoMsg): _203.MsgSubmitMisbehaviourResponse;
                    toProto(message: _203.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _203.MsgSubmitMisbehaviourResponse): _203.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStateRequest;
                    fromJSON(object: any): _202.QueryClientStateRequest;
                    toJSON(message: _202.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_202.QueryClientStateRequest>): _202.QueryClientStateRequest;
                    fromAmino(object: _202.QueryClientStateRequestAmino): _202.QueryClientStateRequest;
                    toAmino(message: _202.QueryClientStateRequest): _202.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _202.QueryClientStateRequestAminoMsg): _202.QueryClientStateRequest;
                    toAminoMsg(message: _202.QueryClientStateRequest): _202.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStateRequestProtoMsg): _202.QueryClientStateRequest;
                    toProto(message: _202.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStateRequest): _202.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStateResponse;
                    fromJSON(object: any): _202.QueryClientStateResponse;
                    toJSON(message: _202.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_202.QueryClientStateResponse>): _202.QueryClientStateResponse;
                    fromAmino(object: _202.QueryClientStateResponseAmino): _202.QueryClientStateResponse;
                    toAmino(message: _202.QueryClientStateResponse): _202.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _202.QueryClientStateResponseAminoMsg): _202.QueryClientStateResponse;
                    toAminoMsg(message: _202.QueryClientStateResponse): _202.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStateResponseProtoMsg): _202.QueryClientStateResponse;
                    toProto(message: _202.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStateResponse): _202.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStatesRequest;
                    fromJSON(object: any): _202.QueryClientStatesRequest;
                    toJSON(message: _202.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_202.QueryClientStatesRequest>): _202.QueryClientStatesRequest;
                    fromAmino(object: _202.QueryClientStatesRequestAmino): _202.QueryClientStatesRequest;
                    toAmino(message: _202.QueryClientStatesRequest): _202.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _202.QueryClientStatesRequestAminoMsg): _202.QueryClientStatesRequest;
                    toAminoMsg(message: _202.QueryClientStatesRequest): _202.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStatesRequestProtoMsg): _202.QueryClientStatesRequest;
                    toProto(message: _202.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStatesRequest): _202.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStatesResponse;
                    fromJSON(object: any): _202.QueryClientStatesResponse;
                    toJSON(message: _202.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_202.QueryClientStatesResponse>): _202.QueryClientStatesResponse;
                    fromAmino(object: _202.QueryClientStatesResponseAmino): _202.QueryClientStatesResponse;
                    toAmino(message: _202.QueryClientStatesResponse): _202.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _202.QueryClientStatesResponseAminoMsg): _202.QueryClientStatesResponse;
                    toAminoMsg(message: _202.QueryClientStatesResponse): _202.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStatesResponseProtoMsg): _202.QueryClientStatesResponse;
                    toProto(message: _202.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStatesResponse): _202.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStateRequest;
                    fromJSON(object: any): _202.QueryConsensusStateRequest;
                    toJSON(message: _202.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStateRequest>): _202.QueryConsensusStateRequest;
                    fromAmino(object: _202.QueryConsensusStateRequestAmino): _202.QueryConsensusStateRequest;
                    toAmino(message: _202.QueryConsensusStateRequest): _202.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _202.QueryConsensusStateRequestAminoMsg): _202.QueryConsensusStateRequest;
                    toAminoMsg(message: _202.QueryConsensusStateRequest): _202.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStateRequestProtoMsg): _202.QueryConsensusStateRequest;
                    toProto(message: _202.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStateRequest): _202.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStateResponse;
                    fromJSON(object: any): _202.QueryConsensusStateResponse;
                    toJSON(message: _202.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStateResponse>): _202.QueryConsensusStateResponse;
                    fromAmino(object: _202.QueryConsensusStateResponseAmino): _202.QueryConsensusStateResponse;
                    toAmino(message: _202.QueryConsensusStateResponse): _202.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _202.QueryConsensusStateResponseAminoMsg): _202.QueryConsensusStateResponse;
                    toAminoMsg(message: _202.QueryConsensusStateResponse): _202.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStateResponseProtoMsg): _202.QueryConsensusStateResponse;
                    toProto(message: _202.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStateResponse): _202.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStatesRequest;
                    fromJSON(object: any): _202.QueryConsensusStatesRequest;
                    toJSON(message: _202.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStatesRequest>): _202.QueryConsensusStatesRequest;
                    fromAmino(object: _202.QueryConsensusStatesRequestAmino): _202.QueryConsensusStatesRequest;
                    toAmino(message: _202.QueryConsensusStatesRequest): _202.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _202.QueryConsensusStatesRequestAminoMsg): _202.QueryConsensusStatesRequest;
                    toAminoMsg(message: _202.QueryConsensusStatesRequest): _202.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStatesRequestProtoMsg): _202.QueryConsensusStatesRequest;
                    toProto(message: _202.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStatesRequest): _202.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStatesResponse;
                    fromJSON(object: any): _202.QueryConsensusStatesResponse;
                    toJSON(message: _202.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStatesResponse>): _202.QueryConsensusStatesResponse;
                    fromAmino(object: _202.QueryConsensusStatesResponseAmino): _202.QueryConsensusStatesResponse;
                    toAmino(message: _202.QueryConsensusStatesResponse): _202.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _202.QueryConsensusStatesResponseAminoMsg): _202.QueryConsensusStatesResponse;
                    toAminoMsg(message: _202.QueryConsensusStatesResponse): _202.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStatesResponseProtoMsg): _202.QueryConsensusStatesResponse;
                    toProto(message: _202.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStatesResponse): _202.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStatusRequest;
                    fromJSON(object: any): _202.QueryClientStatusRequest;
                    toJSON(message: _202.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_202.QueryClientStatusRequest>): _202.QueryClientStatusRequest;
                    fromAmino(object: _202.QueryClientStatusRequestAmino): _202.QueryClientStatusRequest;
                    toAmino(message: _202.QueryClientStatusRequest): _202.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _202.QueryClientStatusRequestAminoMsg): _202.QueryClientStatusRequest;
                    toAminoMsg(message: _202.QueryClientStatusRequest): _202.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStatusRequestProtoMsg): _202.QueryClientStatusRequest;
                    toProto(message: _202.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStatusRequest): _202.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStatusResponse;
                    fromJSON(object: any): _202.QueryClientStatusResponse;
                    toJSON(message: _202.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_202.QueryClientStatusResponse>): _202.QueryClientStatusResponse;
                    fromAmino(object: _202.QueryClientStatusResponseAmino): _202.QueryClientStatusResponse;
                    toAmino(message: _202.QueryClientStatusResponse): _202.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _202.QueryClientStatusResponseAminoMsg): _202.QueryClientStatusResponse;
                    toAminoMsg(message: _202.QueryClientStatusResponse): _202.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStatusResponseProtoMsg): _202.QueryClientStatusResponse;
                    toProto(message: _202.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStatusResponse): _202.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _202.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientParamsRequest;
                    fromJSON(_: any): _202.QueryClientParamsRequest;
                    toJSON(_: _202.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_202.QueryClientParamsRequest>): _202.QueryClientParamsRequest;
                    fromAmino(_: _202.QueryClientParamsRequestAmino): _202.QueryClientParamsRequest;
                    toAmino(_: _202.QueryClientParamsRequest): _202.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _202.QueryClientParamsRequestAminoMsg): _202.QueryClientParamsRequest;
                    toAminoMsg(message: _202.QueryClientParamsRequest): _202.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryClientParamsRequestProtoMsg): _202.QueryClientParamsRequest;
                    toProto(message: _202.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryClientParamsRequest): _202.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientParamsResponse;
                    fromJSON(object: any): _202.QueryClientParamsResponse;
                    toJSON(message: _202.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_202.QueryClientParamsResponse>): _202.QueryClientParamsResponse;
                    fromAmino(object: _202.QueryClientParamsResponseAmino): _202.QueryClientParamsResponse;
                    toAmino(message: _202.QueryClientParamsResponse): _202.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _202.QueryClientParamsResponseAminoMsg): _202.QueryClientParamsResponse;
                    toAminoMsg(message: _202.QueryClientParamsResponse): _202.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryClientParamsResponseProtoMsg): _202.QueryClientParamsResponse;
                    toProto(message: _202.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryClientParamsResponse): _202.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _202.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _202.QueryUpgradedClientStateRequest;
                    toJSON(_: _202.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_202.QueryUpgradedClientStateRequest>): _202.QueryUpgradedClientStateRequest;
                    fromAmino(_: _202.QueryUpgradedClientStateRequestAmino): _202.QueryUpgradedClientStateRequest;
                    toAmino(_: _202.QueryUpgradedClientStateRequest): _202.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _202.QueryUpgradedClientStateRequestAminoMsg): _202.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _202.QueryUpgradedClientStateRequest): _202.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryUpgradedClientStateRequestProtoMsg): _202.QueryUpgradedClientStateRequest;
                    toProto(message: _202.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryUpgradedClientStateRequest): _202.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _202.QueryUpgradedClientStateResponse;
                    toJSON(message: _202.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_202.QueryUpgradedClientStateResponse>): _202.QueryUpgradedClientStateResponse;
                    fromAmino(object: _202.QueryUpgradedClientStateResponseAmino): _202.QueryUpgradedClientStateResponse;
                    toAmino(message: _202.QueryUpgradedClientStateResponse): _202.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _202.QueryUpgradedClientStateResponseAminoMsg): _202.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _202.QueryUpgradedClientStateResponse): _202.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryUpgradedClientStateResponseProtoMsg): _202.QueryUpgradedClientStateResponse;
                    toProto(message: _202.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryUpgradedClientStateResponse): _202.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _202.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _202.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _202.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_202.QueryUpgradedConsensusStateRequest>): _202.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _202.QueryUpgradedConsensusStateRequestAmino): _202.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _202.QueryUpgradedConsensusStateRequest): _202.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _202.QueryUpgradedConsensusStateRequestAminoMsg): _202.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _202.QueryUpgradedConsensusStateRequest): _202.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryUpgradedConsensusStateRequestProtoMsg): _202.QueryUpgradedConsensusStateRequest;
                    toProto(message: _202.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryUpgradedConsensusStateRequest): _202.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _202.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _202.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_202.QueryUpgradedConsensusStateResponse>): _202.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _202.QueryUpgradedConsensusStateResponseAmino): _202.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _202.QueryUpgradedConsensusStateResponse): _202.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _202.QueryUpgradedConsensusStateResponseAminoMsg): _202.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _202.QueryUpgradedConsensusStateResponse): _202.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryUpgradedConsensusStateResponseProtoMsg): _202.QueryUpgradedConsensusStateResponse;
                    toProto(message: _202.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryUpgradedConsensusStateResponse): _202.QueryUpgradedConsensusStateResponseProtoMsg;
                };
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
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _201.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.GenesisMetadata;
                    fromJSON(object: any): _201.GenesisMetadata;
                    toJSON(message: _201.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_201.GenesisMetadata>): _201.GenesisMetadata;
                    fromAmino(object: _201.GenesisMetadataAmino): _201.GenesisMetadata;
                    toAmino(message: _201.GenesisMetadata): _201.GenesisMetadataAmino;
                    fromAminoMsg(object: _201.GenesisMetadataAminoMsg): _201.GenesisMetadata;
                    toAminoMsg(message: _201.GenesisMetadata): _201.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _201.GenesisMetadataProtoMsg): _201.GenesisMetadata;
                    toProto(message: _201.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _201.GenesisMetadata): _201.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _201.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _201.IdentifiedGenesisMetadata;
                    toJSON(message: _201.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_201.IdentifiedGenesisMetadata>): _201.IdentifiedGenesisMetadata;
                    fromAmino(object: _201.IdentifiedGenesisMetadataAmino): _201.IdentifiedGenesisMetadata;
                    toAmino(message: _201.IdentifiedGenesisMetadata): _201.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _201.IdentifiedGenesisMetadataAminoMsg): _201.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _201.IdentifiedGenesisMetadata): _201.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _201.IdentifiedGenesisMetadataProtoMsg): _201.IdentifiedGenesisMetadata;
                    toProto(message: _201.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _201.IdentifiedGenesisMetadata): _201.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _200.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.IdentifiedClientState;
                    fromJSON(object: any): _200.IdentifiedClientState;
                    toJSON(message: _200.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_200.IdentifiedClientState>): _200.IdentifiedClientState;
                    fromAmino(object: _200.IdentifiedClientStateAmino): _200.IdentifiedClientState;
                    toAmino(message: _200.IdentifiedClientState): _200.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _200.IdentifiedClientStateAminoMsg): _200.IdentifiedClientState;
                    toAminoMsg(message: _200.IdentifiedClientState): _200.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _200.IdentifiedClientStateProtoMsg): _200.IdentifiedClientState;
                    toProto(message: _200.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _200.IdentifiedClientState): _200.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _200.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ConsensusStateWithHeight;
                    fromJSON(object: any): _200.ConsensusStateWithHeight;
                    toJSON(message: _200.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_200.ConsensusStateWithHeight>): _200.ConsensusStateWithHeight;
                    fromAmino(object: _200.ConsensusStateWithHeightAmino): _200.ConsensusStateWithHeight;
                    toAmino(message: _200.ConsensusStateWithHeight): _200.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _200.ConsensusStateWithHeightAminoMsg): _200.ConsensusStateWithHeight;
                    toAminoMsg(message: _200.ConsensusStateWithHeight): _200.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _200.ConsensusStateWithHeightProtoMsg): _200.ConsensusStateWithHeight;
                    toProto(message: _200.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _200.ConsensusStateWithHeight): _200.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _200.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ClientConsensusStates;
                    fromJSON(object: any): _200.ClientConsensusStates;
                    toJSON(message: _200.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_200.ClientConsensusStates>): _200.ClientConsensusStates;
                    fromAmino(object: _200.ClientConsensusStatesAmino): _200.ClientConsensusStates;
                    toAmino(message: _200.ClientConsensusStates): _200.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _200.ClientConsensusStatesAminoMsg): _200.ClientConsensusStates;
                    toAminoMsg(message: _200.ClientConsensusStates): _200.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _200.ClientConsensusStatesProtoMsg): _200.ClientConsensusStates;
                    toProto(message: _200.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _200.ClientConsensusStates): _200.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _200.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ClientUpdateProposal;
                    fromJSON(object: any): _200.ClientUpdateProposal;
                    toJSON(message: _200.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_200.ClientUpdateProposal>): _200.ClientUpdateProposal;
                    fromAmino(object: _200.ClientUpdateProposalAmino): _200.ClientUpdateProposal;
                    toAmino(message: _200.ClientUpdateProposal): _200.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _200.ClientUpdateProposalAminoMsg): _200.ClientUpdateProposal;
                    toAminoMsg(message: _200.ClientUpdateProposal): _200.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _200.ClientUpdateProposalProtoMsg): _200.ClientUpdateProposal;
                    toProto(message: _200.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _200.ClientUpdateProposal): _200.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _200.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.UpgradeProposal;
                    fromJSON(object: any): _200.UpgradeProposal;
                    toJSON(message: _200.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_200.UpgradeProposal>): _200.UpgradeProposal;
                    fromAmino(object: _200.UpgradeProposalAmino): _200.UpgradeProposal;
                    toAmino(message: _200.UpgradeProposal): _200.UpgradeProposalAmino;
                    fromAminoMsg(object: _200.UpgradeProposalAminoMsg): _200.UpgradeProposal;
                    toAminoMsg(message: _200.UpgradeProposal): _200.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _200.UpgradeProposalProtoMsg): _200.UpgradeProposal;
                    toProto(message: _200.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _200.UpgradeProposal): _200.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _200.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Height;
                    fromJSON(object: any): _200.Height;
                    toJSON(message: _200.Height): unknown;
                    fromPartial(object: Partial<_200.Height>): _200.Height;
                    fromAmino(object: _200.HeightAmino): _200.Height;
                    toAmino(message: _200.Height): _200.HeightAmino;
                    fromAminoMsg(object: _200.HeightAminoMsg): _200.Height;
                    toAminoMsg(message: _200.Height): _200.HeightAminoMsg;
                    fromProtoMsg(message: _200.HeightProtoMsg): _200.Height;
                    toProto(message: _200.Height): Uint8Array;
                    toProtoMsg(message: _200.Height): _200.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _200.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Params;
                    fromJSON(object: any): _200.Params;
                    toJSON(message: _200.Params): unknown;
                    fromPartial(object: Partial<_200.Params>): _200.Params;
                    fromAmino(object: _200.ParamsAmino): _200.Params;
                    toAmino(message: _200.Params): _200.ParamsAmino;
                    fromAminoMsg(object: _200.ParamsAminoMsg): _200.Params;
                    toAminoMsg(message: _200.Params): _200.ParamsAminoMsg;
                    fromProtoMsg(message: _200.ParamsProtoMsg): _200.Params;
                    toProto(message: _200.Params): Uint8Array;
                    toProtoMsg(message: _200.Params): _200.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _204.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MerkleRoot;
                    fromJSON(object: any): _204.MerkleRoot;
                    toJSON(message: _204.MerkleRoot): unknown;
                    fromPartial(object: Partial<_204.MerkleRoot>): _204.MerkleRoot;
                    fromAmino(object: _204.MerkleRootAmino): _204.MerkleRoot;
                    toAmino(message: _204.MerkleRoot): _204.MerkleRootAmino;
                    fromAminoMsg(object: _204.MerkleRootAminoMsg): _204.MerkleRoot;
                    toAminoMsg(message: _204.MerkleRoot): _204.MerkleRootAminoMsg;
                    fromProtoMsg(message: _204.MerkleRootProtoMsg): _204.MerkleRoot;
                    toProto(message: _204.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _204.MerkleRoot): _204.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _204.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MerklePrefix;
                    fromJSON(object: any): _204.MerklePrefix;
                    toJSON(message: _204.MerklePrefix): unknown;
                    fromPartial(object: Partial<_204.MerklePrefix>): _204.MerklePrefix;
                    fromAmino(object: _204.MerklePrefixAmino): _204.MerklePrefix;
                    toAmino(message: _204.MerklePrefix): _204.MerklePrefixAmino;
                    fromAminoMsg(object: _204.MerklePrefixAminoMsg): _204.MerklePrefix;
                    toAminoMsg(message: _204.MerklePrefix): _204.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _204.MerklePrefixProtoMsg): _204.MerklePrefix;
                    toProto(message: _204.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _204.MerklePrefix): _204.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _204.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MerklePath;
                    fromJSON(object: any): _204.MerklePath;
                    toJSON(message: _204.MerklePath): unknown;
                    fromPartial(object: Partial<_204.MerklePath>): _204.MerklePath;
                    fromAmino(object: _204.MerklePathAmino): _204.MerklePath;
                    toAmino(message: _204.MerklePath): _204.MerklePathAmino;
                    fromAminoMsg(object: _204.MerklePathAminoMsg): _204.MerklePath;
                    toAminoMsg(message: _204.MerklePath): _204.MerklePathAminoMsg;
                    fromProtoMsg(message: _204.MerklePathProtoMsg): _204.MerklePath;
                    toProto(message: _204.MerklePath): Uint8Array;
                    toProtoMsg(message: _204.MerklePath): _204.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _204.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MerkleProof;
                    fromJSON(object: any): _204.MerkleProof;
                    toJSON(message: _204.MerkleProof): unknown;
                    fromPartial(object: Partial<_204.MerkleProof>): _204.MerkleProof;
                    fromAmino(object: _204.MerkleProofAmino): _204.MerkleProof;
                    toAmino(message: _204.MerkleProof): _204.MerkleProofAmino;
                    fromAminoMsg(object: _204.MerkleProofAminoMsg): _204.MerkleProof;
                    toAminoMsg(message: _204.MerkleProof): _204.MerkleProofAminoMsg;
                    fromProtoMsg(message: _204.MerkleProofProtoMsg): _204.MerkleProof;
                    toProto(message: _204.MerkleProof): Uint8Array;
                    toProtoMsg(message: _204.MerkleProof): _204.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _371.MsgClientImpl;
                QueryClientImpl: typeof _366.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _207.QueryConnectionRequest): Promise<_207.QueryConnectionResponse>;
                    connections(request?: _207.QueryConnectionsRequest): Promise<_207.QueryConnectionsResponse>;
                    clientConnections(request: _207.QueryClientConnectionsRequest): Promise<_207.QueryClientConnectionsResponse>;
                    connectionClientState(request: _207.QueryConnectionClientStateRequest): Promise<_207.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _207.QueryConnectionConsensusStateRequest): Promise<_207.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _362.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _208.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _208.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _208.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _208.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _208.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _208.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _208.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _208.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _208.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _208.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _208.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _208.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _208.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _208.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _208.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _208.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _208.MsgConnectionOpenInit) => _208.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _208.MsgConnectionOpenInitAmino) => _208.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _208.MsgConnectionOpenTry) => _208.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _208.MsgConnectionOpenTryAmino) => _208.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _208.MsgConnectionOpenAck) => _208.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _208.MsgConnectionOpenAckAmino) => _208.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _208.MsgConnectionOpenConfirm) => _208.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _208.MsgConnectionOpenConfirmAmino) => _208.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _208.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenInit;
                    fromJSON(object: any): _208.MsgConnectionOpenInit;
                    toJSON(message: _208.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_208.MsgConnectionOpenInit>): _208.MsgConnectionOpenInit;
                    fromAmino(object: _208.MsgConnectionOpenInitAmino): _208.MsgConnectionOpenInit;
                    toAmino(message: _208.MsgConnectionOpenInit): _208.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenInitAminoMsg): _208.MsgConnectionOpenInit;
                    toAminoMsg(message: _208.MsgConnectionOpenInit): _208.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenInitProtoMsg): _208.MsgConnectionOpenInit;
                    toProto(message: _208.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenInit): _208.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _208.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _208.MsgConnectionOpenInitResponse;
                    toJSON(_: _208.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_208.MsgConnectionOpenInitResponse>): _208.MsgConnectionOpenInitResponse;
                    fromAmino(_: _208.MsgConnectionOpenInitResponseAmino): _208.MsgConnectionOpenInitResponse;
                    toAmino(_: _208.MsgConnectionOpenInitResponse): _208.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenInitResponseAminoMsg): _208.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _208.MsgConnectionOpenInitResponse): _208.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenInitResponseProtoMsg): _208.MsgConnectionOpenInitResponse;
                    toProto(message: _208.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenInitResponse): _208.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _208.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenTry;
                    fromJSON(object: any): _208.MsgConnectionOpenTry;
                    toJSON(message: _208.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_208.MsgConnectionOpenTry>): _208.MsgConnectionOpenTry;
                    fromAmino(object: _208.MsgConnectionOpenTryAmino): _208.MsgConnectionOpenTry;
                    toAmino(message: _208.MsgConnectionOpenTry): _208.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenTryAminoMsg): _208.MsgConnectionOpenTry;
                    toAminoMsg(message: _208.MsgConnectionOpenTry): _208.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenTryProtoMsg): _208.MsgConnectionOpenTry;
                    toProto(message: _208.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenTry): _208.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _208.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _208.MsgConnectionOpenTryResponse;
                    toJSON(_: _208.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_208.MsgConnectionOpenTryResponse>): _208.MsgConnectionOpenTryResponse;
                    fromAmino(_: _208.MsgConnectionOpenTryResponseAmino): _208.MsgConnectionOpenTryResponse;
                    toAmino(_: _208.MsgConnectionOpenTryResponse): _208.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenTryResponseAminoMsg): _208.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _208.MsgConnectionOpenTryResponse): _208.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenTryResponseProtoMsg): _208.MsgConnectionOpenTryResponse;
                    toProto(message: _208.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenTryResponse): _208.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _208.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenAck;
                    fromJSON(object: any): _208.MsgConnectionOpenAck;
                    toJSON(message: _208.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_208.MsgConnectionOpenAck>): _208.MsgConnectionOpenAck;
                    fromAmino(object: _208.MsgConnectionOpenAckAmino): _208.MsgConnectionOpenAck;
                    toAmino(message: _208.MsgConnectionOpenAck): _208.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenAckAminoMsg): _208.MsgConnectionOpenAck;
                    toAminoMsg(message: _208.MsgConnectionOpenAck): _208.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenAckProtoMsg): _208.MsgConnectionOpenAck;
                    toProto(message: _208.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenAck): _208.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _208.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _208.MsgConnectionOpenAckResponse;
                    toJSON(_: _208.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_208.MsgConnectionOpenAckResponse>): _208.MsgConnectionOpenAckResponse;
                    fromAmino(_: _208.MsgConnectionOpenAckResponseAmino): _208.MsgConnectionOpenAckResponse;
                    toAmino(_: _208.MsgConnectionOpenAckResponse): _208.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenAckResponseAminoMsg): _208.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _208.MsgConnectionOpenAckResponse): _208.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenAckResponseProtoMsg): _208.MsgConnectionOpenAckResponse;
                    toProto(message: _208.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenAckResponse): _208.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _208.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _208.MsgConnectionOpenConfirm;
                    toJSON(message: _208.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_208.MsgConnectionOpenConfirm>): _208.MsgConnectionOpenConfirm;
                    fromAmino(object: _208.MsgConnectionOpenConfirmAmino): _208.MsgConnectionOpenConfirm;
                    toAmino(message: _208.MsgConnectionOpenConfirm): _208.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenConfirmAminoMsg): _208.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _208.MsgConnectionOpenConfirm): _208.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenConfirmProtoMsg): _208.MsgConnectionOpenConfirm;
                    toProto(message: _208.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenConfirm): _208.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _208.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _208.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _208.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_208.MsgConnectionOpenConfirmResponse>): _208.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _208.MsgConnectionOpenConfirmResponseAmino): _208.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _208.MsgConnectionOpenConfirmResponse): _208.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenConfirmResponseAminoMsg): _208.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _208.MsgConnectionOpenConfirmResponse): _208.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenConfirmResponseProtoMsg): _208.MsgConnectionOpenConfirmResponse;
                    toProto(message: _208.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenConfirmResponse): _208.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionRequest;
                    fromJSON(object: any): _207.QueryConnectionRequest;
                    toJSON(message: _207.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionRequest>): _207.QueryConnectionRequest;
                    fromAmino(object: _207.QueryConnectionRequestAmino): _207.QueryConnectionRequest;
                    toAmino(message: _207.QueryConnectionRequest): _207.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _207.QueryConnectionRequestAminoMsg): _207.QueryConnectionRequest;
                    toAminoMsg(message: _207.QueryConnectionRequest): _207.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionRequestProtoMsg): _207.QueryConnectionRequest;
                    toProto(message: _207.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionRequest): _207.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionResponse;
                    fromJSON(object: any): _207.QueryConnectionResponse;
                    toJSON(message: _207.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionResponse>): _207.QueryConnectionResponse;
                    fromAmino(object: _207.QueryConnectionResponseAmino): _207.QueryConnectionResponse;
                    toAmino(message: _207.QueryConnectionResponse): _207.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _207.QueryConnectionResponseAminoMsg): _207.QueryConnectionResponse;
                    toAminoMsg(message: _207.QueryConnectionResponse): _207.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionResponseProtoMsg): _207.QueryConnectionResponse;
                    toProto(message: _207.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionResponse): _207.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionsRequest;
                    fromJSON(object: any): _207.QueryConnectionsRequest;
                    toJSON(message: _207.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionsRequest>): _207.QueryConnectionsRequest;
                    fromAmino(object: _207.QueryConnectionsRequestAmino): _207.QueryConnectionsRequest;
                    toAmino(message: _207.QueryConnectionsRequest): _207.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _207.QueryConnectionsRequestAminoMsg): _207.QueryConnectionsRequest;
                    toAminoMsg(message: _207.QueryConnectionsRequest): _207.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionsRequestProtoMsg): _207.QueryConnectionsRequest;
                    toProto(message: _207.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionsRequest): _207.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionsResponse;
                    fromJSON(object: any): _207.QueryConnectionsResponse;
                    toJSON(message: _207.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionsResponse>): _207.QueryConnectionsResponse;
                    fromAmino(object: _207.QueryConnectionsResponseAmino): _207.QueryConnectionsResponse;
                    toAmino(message: _207.QueryConnectionsResponse): _207.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _207.QueryConnectionsResponseAminoMsg): _207.QueryConnectionsResponse;
                    toAminoMsg(message: _207.QueryConnectionsResponse): _207.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionsResponseProtoMsg): _207.QueryConnectionsResponse;
                    toProto(message: _207.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionsResponse): _207.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryClientConnectionsRequest;
                    fromJSON(object: any): _207.QueryClientConnectionsRequest;
                    toJSON(message: _207.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_207.QueryClientConnectionsRequest>): _207.QueryClientConnectionsRequest;
                    fromAmino(object: _207.QueryClientConnectionsRequestAmino): _207.QueryClientConnectionsRequest;
                    toAmino(message: _207.QueryClientConnectionsRequest): _207.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _207.QueryClientConnectionsRequestAminoMsg): _207.QueryClientConnectionsRequest;
                    toAminoMsg(message: _207.QueryClientConnectionsRequest): _207.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryClientConnectionsRequestProtoMsg): _207.QueryClientConnectionsRequest;
                    toProto(message: _207.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryClientConnectionsRequest): _207.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryClientConnectionsResponse;
                    fromJSON(object: any): _207.QueryClientConnectionsResponse;
                    toJSON(message: _207.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_207.QueryClientConnectionsResponse>): _207.QueryClientConnectionsResponse;
                    fromAmino(object: _207.QueryClientConnectionsResponseAmino): _207.QueryClientConnectionsResponse;
                    toAmino(message: _207.QueryClientConnectionsResponse): _207.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _207.QueryClientConnectionsResponseAminoMsg): _207.QueryClientConnectionsResponse;
                    toAminoMsg(message: _207.QueryClientConnectionsResponse): _207.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryClientConnectionsResponseProtoMsg): _207.QueryClientConnectionsResponse;
                    toProto(message: _207.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryClientConnectionsResponse): _207.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _207.QueryConnectionClientStateRequest;
                    toJSON(message: _207.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionClientStateRequest>): _207.QueryConnectionClientStateRequest;
                    fromAmino(object: _207.QueryConnectionClientStateRequestAmino): _207.QueryConnectionClientStateRequest;
                    toAmino(message: _207.QueryConnectionClientStateRequest): _207.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _207.QueryConnectionClientStateRequestAminoMsg): _207.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _207.QueryConnectionClientStateRequest): _207.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionClientStateRequestProtoMsg): _207.QueryConnectionClientStateRequest;
                    toProto(message: _207.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionClientStateRequest): _207.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _207.QueryConnectionClientStateResponse;
                    toJSON(message: _207.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionClientStateResponse>): _207.QueryConnectionClientStateResponse;
                    fromAmino(object: _207.QueryConnectionClientStateResponseAmino): _207.QueryConnectionClientStateResponse;
                    toAmino(message: _207.QueryConnectionClientStateResponse): _207.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _207.QueryConnectionClientStateResponseAminoMsg): _207.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _207.QueryConnectionClientStateResponse): _207.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionClientStateResponseProtoMsg): _207.QueryConnectionClientStateResponse;
                    toProto(message: _207.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionClientStateResponse): _207.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _207.QueryConnectionConsensusStateRequest;
                    toJSON(message: _207.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionConsensusStateRequest>): _207.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _207.QueryConnectionConsensusStateRequestAmino): _207.QueryConnectionConsensusStateRequest;
                    toAmino(message: _207.QueryConnectionConsensusStateRequest): _207.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _207.QueryConnectionConsensusStateRequestAminoMsg): _207.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _207.QueryConnectionConsensusStateRequest): _207.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionConsensusStateRequestProtoMsg): _207.QueryConnectionConsensusStateRequest;
                    toProto(message: _207.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionConsensusStateRequest): _207.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _207.QueryConnectionConsensusStateResponse;
                    toJSON(message: _207.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionConsensusStateResponse>): _207.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _207.QueryConnectionConsensusStateResponseAmino): _207.QueryConnectionConsensusStateResponse;
                    toAmino(message: _207.QueryConnectionConsensusStateResponse): _207.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _207.QueryConnectionConsensusStateResponseAminoMsg): _207.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _207.QueryConnectionConsensusStateResponse): _207.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionConsensusStateResponseProtoMsg): _207.QueryConnectionConsensusStateResponse;
                    toProto(message: _207.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionConsensusStateResponse): _207.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _206.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.GenesisState;
                    fromJSON(object: any): _206.GenesisState;
                    toJSON(message: _206.GenesisState): unknown;
                    fromPartial(object: Partial<_206.GenesisState>): _206.GenesisState;
                    fromAmino(object: _206.GenesisStateAmino): _206.GenesisState;
                    toAmino(message: _206.GenesisState): _206.GenesisStateAmino;
                    fromAminoMsg(object: _206.GenesisStateAminoMsg): _206.GenesisState;
                    toAminoMsg(message: _206.GenesisState): _206.GenesisStateAminoMsg;
                    fromProtoMsg(message: _206.GenesisStateProtoMsg): _206.GenesisState;
                    toProto(message: _206.GenesisState): Uint8Array;
                    toProtoMsg(message: _206.GenesisState): _206.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _205.State;
                stateToJSON(object: _205.State): string;
                State: typeof _205.State;
                StateSDKType: typeof _205.State;
                StateAmino: typeof _205.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _205.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ConnectionEnd;
                    fromJSON(object: any): _205.ConnectionEnd;
                    toJSON(message: _205.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_205.ConnectionEnd>): _205.ConnectionEnd;
                    fromAmino(object: _205.ConnectionEndAmino): _205.ConnectionEnd;
                    toAmino(message: _205.ConnectionEnd): _205.ConnectionEndAmino;
                    fromAminoMsg(object: _205.ConnectionEndAminoMsg): _205.ConnectionEnd;
                    toAminoMsg(message: _205.ConnectionEnd): _205.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _205.ConnectionEndProtoMsg): _205.ConnectionEnd;
                    toProto(message: _205.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _205.ConnectionEnd): _205.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _205.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.IdentifiedConnection;
                    fromJSON(object: any): _205.IdentifiedConnection;
                    toJSON(message: _205.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_205.IdentifiedConnection>): _205.IdentifiedConnection;
                    fromAmino(object: _205.IdentifiedConnectionAmino): _205.IdentifiedConnection;
                    toAmino(message: _205.IdentifiedConnection): _205.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _205.IdentifiedConnectionAminoMsg): _205.IdentifiedConnection;
                    toAminoMsg(message: _205.IdentifiedConnection): _205.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _205.IdentifiedConnectionProtoMsg): _205.IdentifiedConnection;
                    toProto(message: _205.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _205.IdentifiedConnection): _205.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _205.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Counterparty;
                    fromJSON(object: any): _205.Counterparty;
                    toJSON(message: _205.Counterparty): unknown;
                    fromPartial(object: Partial<_205.Counterparty>): _205.Counterparty;
                    fromAmino(object: _205.CounterpartyAmino): _205.Counterparty;
                    toAmino(message: _205.Counterparty): _205.CounterpartyAmino;
                    fromAminoMsg(object: _205.CounterpartyAminoMsg): _205.Counterparty;
                    toAminoMsg(message: _205.Counterparty): _205.CounterpartyAminoMsg;
                    fromProtoMsg(message: _205.CounterpartyProtoMsg): _205.Counterparty;
                    toProto(message: _205.Counterparty): Uint8Array;
                    toProtoMsg(message: _205.Counterparty): _205.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _205.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ClientPaths;
                    fromJSON(object: any): _205.ClientPaths;
                    toJSON(message: _205.ClientPaths): unknown;
                    fromPartial(object: Partial<_205.ClientPaths>): _205.ClientPaths;
                    fromAmino(object: _205.ClientPathsAmino): _205.ClientPaths;
                    toAmino(message: _205.ClientPaths): _205.ClientPathsAmino;
                    fromAminoMsg(object: _205.ClientPathsAminoMsg): _205.ClientPaths;
                    toAminoMsg(message: _205.ClientPaths): _205.ClientPathsAminoMsg;
                    fromProtoMsg(message: _205.ClientPathsProtoMsg): _205.ClientPaths;
                    toProto(message: _205.ClientPaths): Uint8Array;
                    toProtoMsg(message: _205.ClientPaths): _205.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _205.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ConnectionPaths;
                    fromJSON(object: any): _205.ConnectionPaths;
                    toJSON(message: _205.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_205.ConnectionPaths>): _205.ConnectionPaths;
                    fromAmino(object: _205.ConnectionPathsAmino): _205.ConnectionPaths;
                    toAmino(message: _205.ConnectionPaths): _205.ConnectionPathsAmino;
                    fromAminoMsg(object: _205.ConnectionPathsAminoMsg): _205.ConnectionPaths;
                    toAminoMsg(message: _205.ConnectionPaths): _205.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _205.ConnectionPathsProtoMsg): _205.ConnectionPaths;
                    toProto(message: _205.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _205.ConnectionPaths): _205.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _205.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Version;
                    fromJSON(object: any): _205.Version;
                    toJSON(message: _205.Version): unknown;
                    fromPartial(object: Partial<_205.Version>): _205.Version;
                    fromAmino(object: _205.VersionAmino): _205.Version;
                    toAmino(message: _205.Version): _205.VersionAmino;
                    fromAminoMsg(object: _205.VersionAminoMsg): _205.Version;
                    toAminoMsg(message: _205.Version): _205.VersionAminoMsg;
                    fromProtoMsg(message: _205.VersionProtoMsg): _205.Version;
                    toProto(message: _205.Version): Uint8Array;
                    toProtoMsg(message: _205.Version): _205.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _205.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Params;
                    fromJSON(object: any): _205.Params;
                    toJSON(message: _205.Params): unknown;
                    fromPartial(object: Partial<_205.Params>): _205.Params;
                    fromAmino(object: _205.ParamsAmino): _205.Params;
                    toAmino(message: _205.Params): _205.ParamsAmino;
                    fromAminoMsg(object: _205.ParamsAminoMsg): _205.Params;
                    toAminoMsg(message: _205.Params): _205.ParamsAminoMsg;
                    fromProtoMsg(message: _205.ParamsProtoMsg): _205.Params;
                    toProto(message: _205.Params): Uint8Array;
                    toProtoMsg(message: _205.Params): _205.ParamsProtoMsg;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _367.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _209.QueryAppVersionRequest): Promise<_209.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    typeUrl: string;
                    encode(message: _209.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryAppVersionRequest;
                    fromJSON(object: any): _209.QueryAppVersionRequest;
                    toJSON(message: _209.QueryAppVersionRequest): unknown;
                    fromPartial(object: Partial<_209.QueryAppVersionRequest>): _209.QueryAppVersionRequest;
                    fromAmino(object: _209.QueryAppVersionRequestAmino): _209.QueryAppVersionRequest;
                    toAmino(message: _209.QueryAppVersionRequest): _209.QueryAppVersionRequestAmino;
                    fromAminoMsg(object: _209.QueryAppVersionRequestAminoMsg): _209.QueryAppVersionRequest;
                    toAminoMsg(message: _209.QueryAppVersionRequest): _209.QueryAppVersionRequestAminoMsg;
                    fromProtoMsg(message: _209.QueryAppVersionRequestProtoMsg): _209.QueryAppVersionRequest;
                    toProto(message: _209.QueryAppVersionRequest): Uint8Array;
                    toProtoMsg(message: _209.QueryAppVersionRequest): _209.QueryAppVersionRequestProtoMsg;
                };
                QueryAppVersionResponse: {
                    typeUrl: string;
                    encode(message: _209.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryAppVersionResponse;
                    fromJSON(object: any): _209.QueryAppVersionResponse;
                    toJSON(message: _209.QueryAppVersionResponse): unknown;
                    fromPartial(object: Partial<_209.QueryAppVersionResponse>): _209.QueryAppVersionResponse;
                    fromAmino(object: _209.QueryAppVersionResponseAmino): _209.QueryAppVersionResponse;
                    toAmino(message: _209.QueryAppVersionResponse): _209.QueryAppVersionResponseAmino;
                    fromAminoMsg(object: _209.QueryAppVersionResponseAminoMsg): _209.QueryAppVersionResponse;
                    toAminoMsg(message: _209.QueryAppVersionResponse): _209.QueryAppVersionResponseAminoMsg;
                    fromProtoMsg(message: _209.QueryAppVersionResponseProtoMsg): _209.QueryAppVersionResponse;
                    toProto(message: _209.QueryAppVersionResponse): Uint8Array;
                    toProtoMsg(message: _209.QueryAppVersionResponse): _209.QueryAppVersionResponseProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _210.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GenesisState;
                    fromJSON(object: any): _210.GenesisState;
                    toJSON(message: _210.GenesisState): unknown;
                    fromPartial(object: Partial<_210.GenesisState>): _210.GenesisState;
                    fromAmino(object: _210.GenesisStateAmino): _210.GenesisState;
                    toAmino(message: _210.GenesisState): _210.GenesisStateAmino;
                    fromAminoMsg(object: _210.GenesisStateAminoMsg): _210.GenesisState;
                    toAminoMsg(message: _210.GenesisState): _210.GenesisStateAminoMsg;
                    fromProtoMsg(message: _210.GenesisStateProtoMsg): _210.GenesisState;
                    toProto(message: _210.GenesisState): Uint8Array;
                    toProtoMsg(message: _210.GenesisState): _210.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _211.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.ClientState;
                    fromJSON(object: any): _211.ClientState;
                    toJSON(message: _211.ClientState): unknown;
                    fromPartial(object: Partial<_211.ClientState>): _211.ClientState;
                    fromAmino(object: _211.ClientStateAmino): _211.ClientState;
                    toAmino(message: _211.ClientState): _211.ClientStateAmino;
                    fromAminoMsg(object: _211.ClientStateAminoMsg): _211.ClientState;
                    toAminoMsg(message: _211.ClientState): _211.ClientStateAminoMsg;
                    fromProtoMsg(message: _211.ClientStateProtoMsg): _211.ClientState;
                    toProto(message: _211.ClientState): Uint8Array;
                    toProtoMsg(message: _211.ClientState): _211.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _212.DataType;
                dataTypeToJSON(object: _212.DataType): string;
                DataType: typeof _212.DataType;
                DataTypeSDKType: typeof _212.DataType;
                DataTypeAmino: typeof _212.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _212.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ClientState;
                    fromJSON(object: any): _212.ClientState;
                    toJSON(message: _212.ClientState): unknown;
                    fromPartial(object: Partial<_212.ClientState>): _212.ClientState;
                    fromAmino(object: _212.ClientStateAmino): _212.ClientState;
                    toAmino(message: _212.ClientState): _212.ClientStateAmino;
                    fromAminoMsg(object: _212.ClientStateAminoMsg): _212.ClientState;
                    toAminoMsg(message: _212.ClientState): _212.ClientStateAminoMsg;
                    fromProtoMsg(message: _212.ClientStateProtoMsg): _212.ClientState;
                    toProto(message: _212.ClientState): Uint8Array;
                    toProtoMsg(message: _212.ClientState): _212.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _212.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ConsensusState;
                    fromJSON(object: any): _212.ConsensusState;
                    toJSON(message: _212.ConsensusState): unknown;
                    fromPartial(object: Partial<_212.ConsensusState>): _212.ConsensusState;
                    fromAmino(object: _212.ConsensusStateAmino): _212.ConsensusState;
                    toAmino(message: _212.ConsensusState): _212.ConsensusStateAmino;
                    fromAminoMsg(object: _212.ConsensusStateAminoMsg): _212.ConsensusState;
                    toAminoMsg(message: _212.ConsensusState): _212.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _212.ConsensusStateProtoMsg): _212.ConsensusState;
                    toProto(message: _212.ConsensusState): Uint8Array;
                    toProtoMsg(message: _212.ConsensusState): _212.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _212.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Header;
                    fromJSON(object: any): _212.Header;
                    toJSON(message: _212.Header): unknown;
                    fromPartial(object: Partial<_212.Header>): _212.Header;
                    fromAmino(object: _212.HeaderAmino): _212.Header;
                    toAmino(message: _212.Header): _212.HeaderAmino;
                    fromAminoMsg(object: _212.HeaderAminoMsg): _212.Header;
                    toAminoMsg(message: _212.Header): _212.HeaderAminoMsg;
                    fromProtoMsg(message: _212.HeaderProtoMsg): _212.Header;
                    toProto(message: _212.Header): Uint8Array;
                    toProtoMsg(message: _212.Header): _212.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _212.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Misbehaviour;
                    fromJSON(object: any): _212.Misbehaviour;
                    toJSON(message: _212.Misbehaviour): unknown;
                    fromPartial(object: Partial<_212.Misbehaviour>): _212.Misbehaviour;
                    fromAmino(object: _212.MisbehaviourAmino): _212.Misbehaviour;
                    toAmino(message: _212.Misbehaviour): _212.MisbehaviourAmino;
                    fromAminoMsg(object: _212.MisbehaviourAminoMsg): _212.Misbehaviour;
                    toAminoMsg(message: _212.Misbehaviour): _212.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _212.MisbehaviourProtoMsg): _212.Misbehaviour;
                    toProto(message: _212.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _212.Misbehaviour): _212.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _212.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.SignatureAndData;
                    fromJSON(object: any): _212.SignatureAndData;
                    toJSON(message: _212.SignatureAndData): unknown;
                    fromPartial(object: Partial<_212.SignatureAndData>): _212.SignatureAndData;
                    fromAmino(object: _212.SignatureAndDataAmino): _212.SignatureAndData;
                    toAmino(message: _212.SignatureAndData): _212.SignatureAndDataAmino;
                    fromAminoMsg(object: _212.SignatureAndDataAminoMsg): _212.SignatureAndData;
                    toAminoMsg(message: _212.SignatureAndData): _212.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _212.SignatureAndDataProtoMsg): _212.SignatureAndData;
                    toProto(message: _212.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _212.SignatureAndData): _212.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _212.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.TimestampedSignatureData;
                    fromJSON(object: any): _212.TimestampedSignatureData;
                    toJSON(message: _212.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_212.TimestampedSignatureData>): _212.TimestampedSignatureData;
                    fromAmino(object: _212.TimestampedSignatureDataAmino): _212.TimestampedSignatureData;
                    toAmino(message: _212.TimestampedSignatureData): _212.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _212.TimestampedSignatureDataAminoMsg): _212.TimestampedSignatureData;
                    toAminoMsg(message: _212.TimestampedSignatureData): _212.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _212.TimestampedSignatureDataProtoMsg): _212.TimestampedSignatureData;
                    toProto(message: _212.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _212.TimestampedSignatureData): _212.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _212.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.SignBytes;
                    fromJSON(object: any): _212.SignBytes;
                    toJSON(message: _212.SignBytes): unknown;
                    fromPartial(object: Partial<_212.SignBytes>): _212.SignBytes;
                    fromAmino(object: _212.SignBytesAmino): _212.SignBytes;
                    toAmino(message: _212.SignBytes): _212.SignBytesAmino;
                    fromAminoMsg(object: _212.SignBytesAminoMsg): _212.SignBytes;
                    toAminoMsg(message: _212.SignBytes): _212.SignBytesAminoMsg;
                    fromProtoMsg(message: _212.SignBytesProtoMsg): _212.SignBytes;
                    toProto(message: _212.SignBytes): Uint8Array;
                    toProtoMsg(message: _212.SignBytes): _212.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _212.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.HeaderData;
                    fromJSON(object: any): _212.HeaderData;
                    toJSON(message: _212.HeaderData): unknown;
                    fromPartial(object: Partial<_212.HeaderData>): _212.HeaderData;
                    fromAmino(object: _212.HeaderDataAmino): _212.HeaderData;
                    toAmino(message: _212.HeaderData): _212.HeaderDataAmino;
                    fromAminoMsg(object: _212.HeaderDataAminoMsg): _212.HeaderData;
                    toAminoMsg(message: _212.HeaderData): _212.HeaderDataAminoMsg;
                    fromProtoMsg(message: _212.HeaderDataProtoMsg): _212.HeaderData;
                    toProto(message: _212.HeaderData): Uint8Array;
                    toProtoMsg(message: _212.HeaderData): _212.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _212.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ClientStateData;
                    fromJSON(object: any): _212.ClientStateData;
                    toJSON(message: _212.ClientStateData): unknown;
                    fromPartial(object: Partial<_212.ClientStateData>): _212.ClientStateData;
                    fromAmino(object: _212.ClientStateDataAmino): _212.ClientStateData;
                    toAmino(message: _212.ClientStateData): _212.ClientStateDataAmino;
                    fromAminoMsg(object: _212.ClientStateDataAminoMsg): _212.ClientStateData;
                    toAminoMsg(message: _212.ClientStateData): _212.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _212.ClientStateDataProtoMsg): _212.ClientStateData;
                    toProto(message: _212.ClientStateData): Uint8Array;
                    toProtoMsg(message: _212.ClientStateData): _212.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _212.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ConsensusStateData;
                    fromJSON(object: any): _212.ConsensusStateData;
                    toJSON(message: _212.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_212.ConsensusStateData>): _212.ConsensusStateData;
                    fromAmino(object: _212.ConsensusStateDataAmino): _212.ConsensusStateData;
                    toAmino(message: _212.ConsensusStateData): _212.ConsensusStateDataAmino;
                    fromAminoMsg(object: _212.ConsensusStateDataAminoMsg): _212.ConsensusStateData;
                    toAminoMsg(message: _212.ConsensusStateData): _212.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _212.ConsensusStateDataProtoMsg): _212.ConsensusStateData;
                    toProto(message: _212.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _212.ConsensusStateData): _212.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _212.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ConnectionStateData;
                    fromJSON(object: any): _212.ConnectionStateData;
                    toJSON(message: _212.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_212.ConnectionStateData>): _212.ConnectionStateData;
                    fromAmino(object: _212.ConnectionStateDataAmino): _212.ConnectionStateData;
                    toAmino(message: _212.ConnectionStateData): _212.ConnectionStateDataAmino;
                    fromAminoMsg(object: _212.ConnectionStateDataAminoMsg): _212.ConnectionStateData;
                    toAminoMsg(message: _212.ConnectionStateData): _212.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _212.ConnectionStateDataProtoMsg): _212.ConnectionStateData;
                    toProto(message: _212.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _212.ConnectionStateData): _212.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _212.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ChannelStateData;
                    fromJSON(object: any): _212.ChannelStateData;
                    toJSON(message: _212.ChannelStateData): unknown;
                    fromPartial(object: Partial<_212.ChannelStateData>): _212.ChannelStateData;
                    fromAmino(object: _212.ChannelStateDataAmino): _212.ChannelStateData;
                    toAmino(message: _212.ChannelStateData): _212.ChannelStateDataAmino;
                    fromAminoMsg(object: _212.ChannelStateDataAminoMsg): _212.ChannelStateData;
                    toAminoMsg(message: _212.ChannelStateData): _212.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _212.ChannelStateDataProtoMsg): _212.ChannelStateData;
                    toProto(message: _212.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _212.ChannelStateData): _212.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _212.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.PacketCommitmentData;
                    fromJSON(object: any): _212.PacketCommitmentData;
                    toJSON(message: _212.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_212.PacketCommitmentData>): _212.PacketCommitmentData;
                    fromAmino(object: _212.PacketCommitmentDataAmino): _212.PacketCommitmentData;
                    toAmino(message: _212.PacketCommitmentData): _212.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _212.PacketCommitmentDataAminoMsg): _212.PacketCommitmentData;
                    toAminoMsg(message: _212.PacketCommitmentData): _212.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _212.PacketCommitmentDataProtoMsg): _212.PacketCommitmentData;
                    toProto(message: _212.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _212.PacketCommitmentData): _212.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _212.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.PacketAcknowledgementData;
                    fromJSON(object: any): _212.PacketAcknowledgementData;
                    toJSON(message: _212.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_212.PacketAcknowledgementData>): _212.PacketAcknowledgementData;
                    fromAmino(object: _212.PacketAcknowledgementDataAmino): _212.PacketAcknowledgementData;
                    toAmino(message: _212.PacketAcknowledgementData): _212.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _212.PacketAcknowledgementDataAminoMsg): _212.PacketAcknowledgementData;
                    toAminoMsg(message: _212.PacketAcknowledgementData): _212.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _212.PacketAcknowledgementDataProtoMsg): _212.PacketAcknowledgementData;
                    toProto(message: _212.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _212.PacketAcknowledgementData): _212.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _212.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.PacketReceiptAbsenceData;
                    fromJSON(object: any): _212.PacketReceiptAbsenceData;
                    toJSON(message: _212.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_212.PacketReceiptAbsenceData>): _212.PacketReceiptAbsenceData;
                    fromAmino(object: _212.PacketReceiptAbsenceDataAmino): _212.PacketReceiptAbsenceData;
                    toAmino(message: _212.PacketReceiptAbsenceData): _212.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _212.PacketReceiptAbsenceDataAminoMsg): _212.PacketReceiptAbsenceData;
                    toAminoMsg(message: _212.PacketReceiptAbsenceData): _212.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _212.PacketReceiptAbsenceDataProtoMsg): _212.PacketReceiptAbsenceData;
                    toProto(message: _212.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _212.PacketReceiptAbsenceData): _212.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _212.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.NextSequenceRecvData;
                    fromJSON(object: any): _212.NextSequenceRecvData;
                    toJSON(message: _212.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_212.NextSequenceRecvData>): _212.NextSequenceRecvData;
                    fromAmino(object: _212.NextSequenceRecvDataAmino): _212.NextSequenceRecvData;
                    toAmino(message: _212.NextSequenceRecvData): _212.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _212.NextSequenceRecvDataAminoMsg): _212.NextSequenceRecvData;
                    toAminoMsg(message: _212.NextSequenceRecvData): _212.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _212.NextSequenceRecvDataProtoMsg): _212.NextSequenceRecvData;
                    toProto(message: _212.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _212.NextSequenceRecvData): _212.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _213.DataType;
                dataTypeToJSON(object: _213.DataType): string;
                DataType: typeof _213.DataType;
                DataTypeSDKType: typeof _213.DataType;
                DataTypeAmino: typeof _213.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _213.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ClientState;
                    fromJSON(object: any): _213.ClientState;
                    toJSON(message: _213.ClientState): unknown;
                    fromPartial(object: Partial<_213.ClientState>): _213.ClientState;
                    fromAmino(object: _213.ClientStateAmino): _213.ClientState;
                    toAmino(message: _213.ClientState): _213.ClientStateAmino;
                    fromAminoMsg(object: _213.ClientStateAminoMsg): _213.ClientState;
                    toAminoMsg(message: _213.ClientState): _213.ClientStateAminoMsg;
                    fromProtoMsg(message: _213.ClientStateProtoMsg): _213.ClientState;
                    toProto(message: _213.ClientState): Uint8Array;
                    toProtoMsg(message: _213.ClientState): _213.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _213.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ConsensusState;
                    fromJSON(object: any): _213.ConsensusState;
                    toJSON(message: _213.ConsensusState): unknown;
                    fromPartial(object: Partial<_213.ConsensusState>): _213.ConsensusState;
                    fromAmino(object: _213.ConsensusStateAmino): _213.ConsensusState;
                    toAmino(message: _213.ConsensusState): _213.ConsensusStateAmino;
                    fromAminoMsg(object: _213.ConsensusStateAminoMsg): _213.ConsensusState;
                    toAminoMsg(message: _213.ConsensusState): _213.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _213.ConsensusStateProtoMsg): _213.ConsensusState;
                    toProto(message: _213.ConsensusState): Uint8Array;
                    toProtoMsg(message: _213.ConsensusState): _213.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _213.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Header;
                    fromJSON(object: any): _213.Header;
                    toJSON(message: _213.Header): unknown;
                    fromPartial(object: Partial<_213.Header>): _213.Header;
                    fromAmino(object: _213.HeaderAmino): _213.Header;
                    toAmino(message: _213.Header): _213.HeaderAmino;
                    fromAminoMsg(object: _213.HeaderAminoMsg): _213.Header;
                    toAminoMsg(message: _213.Header): _213.HeaderAminoMsg;
                    fromProtoMsg(message: _213.HeaderProtoMsg): _213.Header;
                    toProto(message: _213.Header): Uint8Array;
                    toProtoMsg(message: _213.Header): _213.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _213.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Misbehaviour;
                    fromJSON(object: any): _213.Misbehaviour;
                    toJSON(message: _213.Misbehaviour): unknown;
                    fromPartial(object: Partial<_213.Misbehaviour>): _213.Misbehaviour;
                    fromAmino(object: _213.MisbehaviourAmino): _213.Misbehaviour;
                    toAmino(message: _213.Misbehaviour): _213.MisbehaviourAmino;
                    fromAminoMsg(object: _213.MisbehaviourAminoMsg): _213.Misbehaviour;
                    toAminoMsg(message: _213.Misbehaviour): _213.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _213.MisbehaviourProtoMsg): _213.Misbehaviour;
                    toProto(message: _213.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _213.Misbehaviour): _213.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _213.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.SignatureAndData;
                    fromJSON(object: any): _213.SignatureAndData;
                    toJSON(message: _213.SignatureAndData): unknown;
                    fromPartial(object: Partial<_213.SignatureAndData>): _213.SignatureAndData;
                    fromAmino(object: _213.SignatureAndDataAmino): _213.SignatureAndData;
                    toAmino(message: _213.SignatureAndData): _213.SignatureAndDataAmino;
                    fromAminoMsg(object: _213.SignatureAndDataAminoMsg): _213.SignatureAndData;
                    toAminoMsg(message: _213.SignatureAndData): _213.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _213.SignatureAndDataProtoMsg): _213.SignatureAndData;
                    toProto(message: _213.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _213.SignatureAndData): _213.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _213.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.TimestampedSignatureData;
                    fromJSON(object: any): _213.TimestampedSignatureData;
                    toJSON(message: _213.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_213.TimestampedSignatureData>): _213.TimestampedSignatureData;
                    fromAmino(object: _213.TimestampedSignatureDataAmino): _213.TimestampedSignatureData;
                    toAmino(message: _213.TimestampedSignatureData): _213.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _213.TimestampedSignatureDataAminoMsg): _213.TimestampedSignatureData;
                    toAminoMsg(message: _213.TimestampedSignatureData): _213.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _213.TimestampedSignatureDataProtoMsg): _213.TimestampedSignatureData;
                    toProto(message: _213.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _213.TimestampedSignatureData): _213.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _213.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.SignBytes;
                    fromJSON(object: any): _213.SignBytes;
                    toJSON(message: _213.SignBytes): unknown;
                    fromPartial(object: Partial<_213.SignBytes>): _213.SignBytes;
                    fromAmino(object: _213.SignBytesAmino): _213.SignBytes;
                    toAmino(message: _213.SignBytes): _213.SignBytesAmino;
                    fromAminoMsg(object: _213.SignBytesAminoMsg): _213.SignBytes;
                    toAminoMsg(message: _213.SignBytes): _213.SignBytesAminoMsg;
                    fromProtoMsg(message: _213.SignBytesProtoMsg): _213.SignBytes;
                    toProto(message: _213.SignBytes): Uint8Array;
                    toProtoMsg(message: _213.SignBytes): _213.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _213.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.HeaderData;
                    fromJSON(object: any): _213.HeaderData;
                    toJSON(message: _213.HeaderData): unknown;
                    fromPartial(object: Partial<_213.HeaderData>): _213.HeaderData;
                    fromAmino(object: _213.HeaderDataAmino): _213.HeaderData;
                    toAmino(message: _213.HeaderData): _213.HeaderDataAmino;
                    fromAminoMsg(object: _213.HeaderDataAminoMsg): _213.HeaderData;
                    toAminoMsg(message: _213.HeaderData): _213.HeaderDataAminoMsg;
                    fromProtoMsg(message: _213.HeaderDataProtoMsg): _213.HeaderData;
                    toProto(message: _213.HeaderData): Uint8Array;
                    toProtoMsg(message: _213.HeaderData): _213.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _213.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ClientStateData;
                    fromJSON(object: any): _213.ClientStateData;
                    toJSON(message: _213.ClientStateData): unknown;
                    fromPartial(object: Partial<_213.ClientStateData>): _213.ClientStateData;
                    fromAmino(object: _213.ClientStateDataAmino): _213.ClientStateData;
                    toAmino(message: _213.ClientStateData): _213.ClientStateDataAmino;
                    fromAminoMsg(object: _213.ClientStateDataAminoMsg): _213.ClientStateData;
                    toAminoMsg(message: _213.ClientStateData): _213.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _213.ClientStateDataProtoMsg): _213.ClientStateData;
                    toProto(message: _213.ClientStateData): Uint8Array;
                    toProtoMsg(message: _213.ClientStateData): _213.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _213.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ConsensusStateData;
                    fromJSON(object: any): _213.ConsensusStateData;
                    toJSON(message: _213.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_213.ConsensusStateData>): _213.ConsensusStateData;
                    fromAmino(object: _213.ConsensusStateDataAmino): _213.ConsensusStateData;
                    toAmino(message: _213.ConsensusStateData): _213.ConsensusStateDataAmino;
                    fromAminoMsg(object: _213.ConsensusStateDataAminoMsg): _213.ConsensusStateData;
                    toAminoMsg(message: _213.ConsensusStateData): _213.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _213.ConsensusStateDataProtoMsg): _213.ConsensusStateData;
                    toProto(message: _213.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _213.ConsensusStateData): _213.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _213.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ConnectionStateData;
                    fromJSON(object: any): _213.ConnectionStateData;
                    toJSON(message: _213.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_213.ConnectionStateData>): _213.ConnectionStateData;
                    fromAmino(object: _213.ConnectionStateDataAmino): _213.ConnectionStateData;
                    toAmino(message: _213.ConnectionStateData): _213.ConnectionStateDataAmino;
                    fromAminoMsg(object: _213.ConnectionStateDataAminoMsg): _213.ConnectionStateData;
                    toAminoMsg(message: _213.ConnectionStateData): _213.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _213.ConnectionStateDataProtoMsg): _213.ConnectionStateData;
                    toProto(message: _213.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _213.ConnectionStateData): _213.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _213.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ChannelStateData;
                    fromJSON(object: any): _213.ChannelStateData;
                    toJSON(message: _213.ChannelStateData): unknown;
                    fromPartial(object: Partial<_213.ChannelStateData>): _213.ChannelStateData;
                    fromAmino(object: _213.ChannelStateDataAmino): _213.ChannelStateData;
                    toAmino(message: _213.ChannelStateData): _213.ChannelStateDataAmino;
                    fromAminoMsg(object: _213.ChannelStateDataAminoMsg): _213.ChannelStateData;
                    toAminoMsg(message: _213.ChannelStateData): _213.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _213.ChannelStateDataProtoMsg): _213.ChannelStateData;
                    toProto(message: _213.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _213.ChannelStateData): _213.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _213.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.PacketCommitmentData;
                    fromJSON(object: any): _213.PacketCommitmentData;
                    toJSON(message: _213.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_213.PacketCommitmentData>): _213.PacketCommitmentData;
                    fromAmino(object: _213.PacketCommitmentDataAmino): _213.PacketCommitmentData;
                    toAmino(message: _213.PacketCommitmentData): _213.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _213.PacketCommitmentDataAminoMsg): _213.PacketCommitmentData;
                    toAminoMsg(message: _213.PacketCommitmentData): _213.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _213.PacketCommitmentDataProtoMsg): _213.PacketCommitmentData;
                    toProto(message: _213.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _213.PacketCommitmentData): _213.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _213.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.PacketAcknowledgementData;
                    fromJSON(object: any): _213.PacketAcknowledgementData;
                    toJSON(message: _213.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_213.PacketAcknowledgementData>): _213.PacketAcknowledgementData;
                    fromAmino(object: _213.PacketAcknowledgementDataAmino): _213.PacketAcknowledgementData;
                    toAmino(message: _213.PacketAcknowledgementData): _213.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _213.PacketAcknowledgementDataAminoMsg): _213.PacketAcknowledgementData;
                    toAminoMsg(message: _213.PacketAcknowledgementData): _213.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _213.PacketAcknowledgementDataProtoMsg): _213.PacketAcknowledgementData;
                    toProto(message: _213.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _213.PacketAcknowledgementData): _213.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _213.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.PacketReceiptAbsenceData;
                    fromJSON(object: any): _213.PacketReceiptAbsenceData;
                    toJSON(message: _213.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_213.PacketReceiptAbsenceData>): _213.PacketReceiptAbsenceData;
                    fromAmino(object: _213.PacketReceiptAbsenceDataAmino): _213.PacketReceiptAbsenceData;
                    toAmino(message: _213.PacketReceiptAbsenceData): _213.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _213.PacketReceiptAbsenceDataAminoMsg): _213.PacketReceiptAbsenceData;
                    toAminoMsg(message: _213.PacketReceiptAbsenceData): _213.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _213.PacketReceiptAbsenceDataProtoMsg): _213.PacketReceiptAbsenceData;
                    toProto(message: _213.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _213.PacketReceiptAbsenceData): _213.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _213.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.NextSequenceRecvData;
                    fromJSON(object: any): _213.NextSequenceRecvData;
                    toJSON(message: _213.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_213.NextSequenceRecvData>): _213.NextSequenceRecvData;
                    fromAmino(object: _213.NextSequenceRecvDataAmino): _213.NextSequenceRecvData;
                    toAmino(message: _213.NextSequenceRecvData): _213.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _213.NextSequenceRecvDataAminoMsg): _213.NextSequenceRecvData;
                    toAminoMsg(message: _213.NextSequenceRecvData): _213.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _213.NextSequenceRecvDataProtoMsg): _213.NextSequenceRecvData;
                    toProto(message: _213.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _213.NextSequenceRecvData): _213.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _214.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ClientState;
                    fromJSON(object: any): _214.ClientState;
                    toJSON(message: _214.ClientState): unknown;
                    fromPartial(object: Partial<_214.ClientState>): _214.ClientState;
                    fromAmino(object: _214.ClientStateAmino): _214.ClientState;
                    toAmino(message: _214.ClientState): _214.ClientStateAmino;
                    fromAminoMsg(object: _214.ClientStateAminoMsg): _214.ClientState;
                    toAminoMsg(message: _214.ClientState): _214.ClientStateAminoMsg;
                    fromProtoMsg(message: _214.ClientStateProtoMsg): _214.ClientState;
                    toProto(message: _214.ClientState): Uint8Array;
                    toProtoMsg(message: _214.ClientState): _214.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _214.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ConsensusState;
                    fromJSON(object: any): _214.ConsensusState;
                    toJSON(message: _214.ConsensusState): unknown;
                    fromPartial(object: Partial<_214.ConsensusState>): _214.ConsensusState;
                    fromAmino(object: _214.ConsensusStateAmino): _214.ConsensusState;
                    toAmino(message: _214.ConsensusState): _214.ConsensusStateAmino;
                    fromAminoMsg(object: _214.ConsensusStateAminoMsg): _214.ConsensusState;
                    toAminoMsg(message: _214.ConsensusState): _214.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _214.ConsensusStateProtoMsg): _214.ConsensusState;
                    toProto(message: _214.ConsensusState): Uint8Array;
                    toProtoMsg(message: _214.ConsensusState): _214.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _214.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Misbehaviour;
                    fromJSON(object: any): _214.Misbehaviour;
                    toJSON(message: _214.Misbehaviour): unknown;
                    fromPartial(object: Partial<_214.Misbehaviour>): _214.Misbehaviour;
                    fromAmino(object: _214.MisbehaviourAmino): _214.Misbehaviour;
                    toAmino(message: _214.Misbehaviour): _214.MisbehaviourAmino;
                    fromAminoMsg(object: _214.MisbehaviourAminoMsg): _214.Misbehaviour;
                    toAminoMsg(message: _214.Misbehaviour): _214.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _214.MisbehaviourProtoMsg): _214.Misbehaviour;
                    toProto(message: _214.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _214.Misbehaviour): _214.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _214.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Header;
                    fromJSON(object: any): _214.Header;
                    toJSON(message: _214.Header): unknown;
                    fromPartial(object: Partial<_214.Header>): _214.Header;
                    fromAmino(object: _214.HeaderAmino): _214.Header;
                    toAmino(message: _214.Header): _214.HeaderAmino;
                    fromAminoMsg(object: _214.HeaderAminoMsg): _214.Header;
                    toAminoMsg(message: _214.Header): _214.HeaderAminoMsg;
                    fromProtoMsg(message: _214.HeaderProtoMsg): _214.Header;
                    toProto(message: _214.Header): Uint8Array;
                    toProtoMsg(message: _214.Header): _214.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _214.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Fraction;
                    fromJSON(object: any): _214.Fraction;
                    toJSON(message: _214.Fraction): unknown;
                    fromPartial(object: Partial<_214.Fraction>): _214.Fraction;
                    fromAmino(object: _214.FractionAmino): _214.Fraction;
                    toAmino(message: _214.Fraction): _214.FractionAmino;
                    fromAminoMsg(object: _214.FractionAminoMsg): _214.Fraction;
                    toAminoMsg(message: _214.Fraction): _214.FractionAminoMsg;
                    fromProtoMsg(message: _214.FractionProtoMsg): _214.Fraction;
                    toProto(message: _214.Fraction): Uint8Array;
                    toProtoMsg(message: _214.Fraction): _214.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _368.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _369.MsgClientImpl;
                    };
                    client: {
                        v1: _370.MsgClientImpl;
                    };
                    connection: {
                        v1: _371.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _192.QueryDenomTraceRequest): Promise<_192.QueryDenomTraceResponse>;
                            denomTraces(request?: _192.QueryDenomTracesRequest): Promise<_192.QueryDenomTracesResponse>;
                            params(request?: _192.QueryParamsRequest): Promise<_192.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _198.QueryChannelRequest): Promise<_198.QueryChannelResponse>;
                            channels(request?: _198.QueryChannelsRequest): Promise<_198.QueryChannelsResponse>;
                            connectionChannels(request: _198.QueryConnectionChannelsRequest): Promise<_198.QueryConnectionChannelsResponse>;
                            channelClientState(request: _198.QueryChannelClientStateRequest): Promise<_198.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _198.QueryChannelConsensusStateRequest): Promise<_198.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _198.QueryPacketCommitmentRequest): Promise<_198.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _198.QueryPacketCommitmentsRequest): Promise<_198.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _198.QueryPacketReceiptRequest): Promise<_198.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _198.QueryPacketAcknowledgementRequest): Promise<_198.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _198.QueryPacketAcknowledgementsRequest): Promise<_198.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _198.QueryUnreceivedPacketsRequest): Promise<_198.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _198.QueryUnreceivedAcksRequest): Promise<_198.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _198.QueryNextSequenceReceiveRequest): Promise<_198.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _202.QueryClientStateRequest): Promise<_202.QueryClientStateResponse>;
                            clientStates(request?: _202.QueryClientStatesRequest): Promise<_202.QueryClientStatesResponse>;
                            consensusState(request: _202.QueryConsensusStateRequest): Promise<_202.QueryConsensusStateResponse>;
                            consensusStates(request: _202.QueryConsensusStatesRequest): Promise<_202.QueryConsensusStatesResponse>;
                            clientStatus(request: _202.QueryClientStatusRequest): Promise<_202.QueryClientStatusResponse>;
                            clientParams(request?: _202.QueryClientParamsRequest): Promise<_202.QueryClientParamsResponse>;
                            upgradedClientState(request?: _202.QueryUpgradedClientStateRequest): Promise<_202.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _202.QueryUpgradedConsensusStateRequest): Promise<_202.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _207.QueryConnectionRequest): Promise<_207.QueryConnectionResponse>;
                            connections(request?: _207.QueryConnectionsRequest): Promise<_207.QueryConnectionsResponse>;
                            clientConnections(request: _207.QueryClientConnectionsRequest): Promise<_207.QueryClientConnectionsResponse>;
                            connectionClientState(request: _207.QueryConnectionClientStateRequest): Promise<_207.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _207.QueryConnectionConsensusStateRequest): Promise<_207.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _209.QueryAppVersionRequest): Promise<_209.QueryAppVersionResponse>;
                        };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _359.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _360.LCDQueryClient;
                    };
                    client: {
                        v1: _361.LCDQueryClient;
                    };
                    connection: {
                        v1: _362.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
