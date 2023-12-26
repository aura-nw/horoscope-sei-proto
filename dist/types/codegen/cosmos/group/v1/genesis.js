import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        groupSeq: Long.UZERO,
        groups: [],
        groupMembers: [],
        groupPolicySeq: Long.UZERO,
        groupPolicies: [],
        proposalSeq: Long.UZERO,
        proposals: [],
        votes: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.group.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupSeq.isZero()) {
            writer.uint32(8).uint64(message.groupSeq);
        }
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.groupMembers) {
            GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.groupPolicySeq.isZero()) {
            writer.uint32(32).uint64(message.groupPolicySeq);
        }
        for (const v of message.groupPolicies) {
            GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (!message.proposalSeq.isZero()) {
            writer.uint32(48).uint64(message.proposalSeq);
        }
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupSeq = reader.uint64();
                    break;
                case 2:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMembers.push(GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.groupPolicySeq = reader.uint64();
                    break;
                case 5:
                    message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposalSeq = reader.uint64();
                    break;
                case 7:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            groupSeq: isSet(object.groupSeq) ? Long.fromValue(object.groupSeq) : Long.UZERO,
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
            groupMembers: Array.isArray(object?.groupMembers) ? object.groupMembers.map((e) => GroupMember.fromJSON(e)) : [],
            groupPolicySeq: isSet(object.groupPolicySeq) ? Long.fromValue(object.groupPolicySeq) : Long.UZERO,
            groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e) => GroupPolicyInfo.fromJSON(e)) : [],
            proposalSeq: isSet(object.proposalSeq) ? Long.fromValue(object.proposalSeq) : Long.UZERO,
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupSeq !== undefined && (obj.groupSeq = (message.groupSeq || Long.UZERO).toString());
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.groupMembers) {
            obj.groupMembers = message.groupMembers.map(e => e ? GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.groupMembers = [];
        }
        message.groupPolicySeq !== undefined && (obj.groupPolicySeq = (message.groupPolicySeq || Long.UZERO).toString());
        if (message.groupPolicies) {
            obj.groupPolicies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.groupPolicies = [];
        }
        message.proposalSeq !== undefined && (obj.proposalSeq = (message.proposalSeq || Long.UZERO).toString());
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? Long.fromValue(object.groupSeq) : Long.UZERO;
        message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
        message.groupMembers = object.groupMembers?.map(e => GroupMember.fromPartial(e)) || [];
        message.groupPolicySeq = object.groupPolicySeq !== undefined && object.groupPolicySeq !== null ? Long.fromValue(object.groupPolicySeq) : Long.UZERO;
        message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
        message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? Long.fromValue(object.proposalSeq) : Long.UZERO;
        message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.group_seq !== undefined && object.group_seq !== null) {
            message.groupSeq = Long.fromString(object.group_seq);
        }
        message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
        message.groupMembers = object.group_members?.map(e => GroupMember.fromAmino(e)) || [];
        if (object.group_policy_seq !== undefined && object.group_policy_seq !== null) {
            message.groupPolicySeq = Long.fromString(object.group_policy_seq);
        }
        message.groupPolicies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
        if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
            message.proposalSeq = Long.fromString(object.proposal_seq);
        }
        message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
        message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_seq = message.groupSeq ? message.groupSeq.toString() : undefined;
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.groupMembers) {
            obj.group_members = message.groupMembers.map(e => e ? GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.group_members = [];
        }
        obj.group_policy_seq = message.groupPolicySeq ? message.groupPolicySeq.toString() : undefined;
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.proposal_seq = message.proposalSeq ? message.proposalSeq.toString() : undefined;
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
