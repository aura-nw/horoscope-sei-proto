import { Member, voteOptionFromJSON, voteOptionToJSON } from "./types";
import { Any } from "../../../google/protobuf/any";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export var Exec;
(function (Exec) {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
    Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (Exec = {}));
export const ExecSDKType = Exec;
export const ExecAmino = Exec;
export function execFromJSON(object) {
    switch (object) {
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
export function execToJSON(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateGroup() {
    return {
        admin: "",
        members: [],
        metadata: ""
    };
}
export const MsgCreateGroup = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroup",
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(Member.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromJSON(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroup();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => Member.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroup();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.members = object.members?.map(e => Member.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroup",
            value: MsgCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroup.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroup",
            value: MsgCreateGroup.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupResponse() {
    return {
        groupId: Long.UZERO
    };
}
export const MsgCreateGroupResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
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
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupResponse();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupResponse();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = Long.fromString(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupResponse",
            value: MsgCreateGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
            value: MsgCreateGroupResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMembers() {
    return {
        admin: "",
        groupId: Long.UZERO,
        memberUpdates: []
    };
}
export const MsgUpdateGroupMembers = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        for (const v of message.memberUpdates) {
            Member.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.memberUpdates.push(Member.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            memberUpdates: Array.isArray(object?.memberUpdates) ? object.memberUpdates.map((e) => Member.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        if (message.memberUpdates) {
            obj.memberUpdates = message.memberUpdates.map(e => e ? Member.toJSON(e) : undefined);
        }
        else {
            obj.memberUpdates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMembers();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
        message.memberUpdates = object.memberUpdates?.map(e => Member.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupMembers();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = Long.fromString(object.group_id);
        }
        message.memberUpdates = object.member_updates?.map(e => Member.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        if (message.memberUpdates) {
            obj.member_updates = message.memberUpdates.map(e => e ? Member.toAmino(e) : undefined);
        }
        else {
            obj.member_updates = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMembers.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMembers",
            value: MsgUpdateGroupMembers.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMembers.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMembers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
            value: MsgUpdateGroupMembers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
export const MsgUpdateGroupMembersResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMembersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMembersResponse",
            value: MsgUpdateGroupMembersResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
            value: MsgUpdateGroupMembersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAdmin() {
    return {
        admin: "",
        groupId: Long.UZERO,
        newAdmin: ""
    };
}
export const MsgUpdateGroupAdmin = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = Long.fromString(object.group_id);
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.new_admin = message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupAdmin",
            value: MsgUpdateGroupAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
            value: MsgUpdateGroupAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
export const MsgUpdateGroupAdminResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupAdminResponse",
            value: MsgUpdateGroupAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
            value: MsgUpdateGroupAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMetadata() {
    return {
        admin: "",
        groupId: Long.UZERO,
        metadata: ""
    };
}
export const MsgUpdateGroupMetadata = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = Long.fromString(object.group_id);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMetadata",
            value: MsgUpdateGroupMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
            value: MsgUpdateGroupMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
export const MsgUpdateGroupMetadataResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
            value: MsgUpdateGroupMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
            value: MsgUpdateGroupMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupPolicy() {
    return {
        admin: "",
        groupId: Long.UZERO,
        metadata: "",
        decisionPolicy: undefined
    };
}
export const MsgCreateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupPolicy();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
        message.metadata = object.metadata ?? "";
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = Long.fromString(object.group_id);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = Any.fromAmino(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.metadata = message.metadata;
        obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupPolicy",
            value: MsgCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
            value: MsgCreateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupPolicyResponse() {
    return {
        address: ""
    };
}
export const MsgCreateGroupPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupPolicyResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupPolicyResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupPolicyResponse",
            value: MsgCreateGroupPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
            value: MsgCreateGroupPolicyResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyAdmin() {
    return {
        admin: "",
        address: "",
        newAdmin: ""
    };
}
export const MsgUpdateGroupPolicyAdmin = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            address: isSet(object.address) ? String(object.address) : "",
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        obj.new_admin = message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
            value: MsgUpdateGroupPolicyAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
            value: MsgUpdateGroupPolicyAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupWithPolicy() {
    return {
        admin: "",
        members: [],
        groupMetadata: "",
        groupPolicyMetadata: "",
        groupPolicyAsAdmin: false,
        decisionPolicy: undefined
    };
}
export const MsgCreateGroupWithPolicy = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.groupMetadata !== "") {
            writer.uint32(26).string(message.groupMetadata);
        }
        if (message.groupPolicyMetadata !== "") {
            writer.uint32(34).string(message.groupPolicyMetadata);
        }
        if (message.groupPolicyAsAdmin === true) {
            writer.uint32(40).bool(message.groupPolicyAsAdmin);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(Member.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMetadata = reader.string();
                    break;
                case 4:
                    message.groupPolicyMetadata = reader.string();
                    break;
                case 5:
                    message.groupPolicyAsAdmin = reader.bool();
                    break;
                case 6:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromJSON(e)) : [],
            groupMetadata: isSet(object.groupMetadata) ? String(object.groupMetadata) : "",
            groupPolicyMetadata: isSet(object.groupPolicyMetadata) ? String(object.groupPolicyMetadata) : "",
            groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin) ? Boolean(object.groupPolicyAsAdmin) : false,
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.groupMetadata !== undefined && (obj.groupMetadata = message.groupMetadata);
        message.groupPolicyMetadata !== undefined && (obj.groupPolicyMetadata = message.groupPolicyMetadata);
        message.groupPolicyAsAdmin !== undefined && (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
        message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicy();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => Member.fromPartial(e)) || [];
        message.groupMetadata = object.groupMetadata ?? "";
        message.groupPolicyMetadata = object.groupPolicyMetadata ?? "";
        message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupWithPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.members = object.members?.map(e => Member.fromAmino(e)) || [];
        if (object.group_metadata !== undefined && object.group_metadata !== null) {
            message.groupMetadata = object.group_metadata;
        }
        if (object.group_policy_metadata !== undefined && object.group_policy_metadata !== null) {
            message.groupPolicyMetadata = object.group_policy_metadata;
        }
        if (object.group_policy_as_admin !== undefined && object.group_policy_as_admin !== null) {
            message.groupPolicyAsAdmin = object.group_policy_as_admin;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = Any.fromAmino(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.group_metadata = message.groupMetadata;
        obj.group_policy_metadata = message.groupPolicyMetadata;
        obj.group_policy_as_admin = message.groupPolicyAsAdmin;
        obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupWithPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupWithPolicy",
            value: MsgCreateGroupWithPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupWithPolicy.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupWithPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
            value: MsgCreateGroupWithPolicy.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupWithPolicyResponse() {
    return {
        groupId: Long.UZERO,
        groupPolicyAddress: ""
    };
}
export const MsgCreateGroupWithPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
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
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = Long.fromString(object.group_id);
        }
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.groupPolicyAddress = object.group_policy_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.group_policy_address = message.groupPolicyAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupWithPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
            value: MsgCreateGroupWithPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupWithPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupWithPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
            value: MsgCreateGroupWithPolicyResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
export const MsgUpdateGroupPolicyAdminResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
            value: MsgUpdateGroupPolicyAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
            value: MsgUpdateGroupPolicyAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return {
        admin: "",
        address: "",
        decisionPolicy: undefined
    };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            address: isSet(object.address) ? String(object.address) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = Any.fromAmino(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
            value: MsgUpdateGroupPolicyDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
            value: MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyDecisionPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
            value: MsgUpdateGroupPolicyDecisionPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyDecisionPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
            value: MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyMetadata() {
    return {
        admin: "",
        address: "",
        metadata: ""
    };
}
export const MsgUpdateGroupPolicyMetadata = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            address: isSet(object.address) ? String(object.address) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
            value: MsgUpdateGroupPolicyMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
            value: MsgUpdateGroupPolicyMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
export const MsgUpdateGroupPolicyMetadataResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
            value: MsgUpdateGroupPolicyMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
            value: MsgUpdateGroupPolicyMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitProposal() {
    return {
        address: "",
        proposers: [],
        metadata: "",
        messages: [],
        exec: 0
    };
}
export const MsgSubmitProposal = {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.proposers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.proposers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.exec = reader.int32();
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
            address: isSet(object.address) ? String(object.address) : "",
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => String(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.address = object.address ?? "";
        message.proposers = object.proposers?.map(e => e) || [];
        message.metadata = object.metadata ?? "";
        message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
        message.exec = object.exec ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposal();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.proposers = object.proposers?.map(e => e) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
        if (object.exec !== undefined && object.exec !== null) {
            message.exec = execFromJSON(object.exec);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        obj.metadata = message.metadata;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.exec = execToJSON(message.exec);
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgSubmitProposal",
            value: MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
            value: MsgSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitProposalResponse() {
    return {
        proposalId: Long.UZERO
    };
}
export const MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposalResponse();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = Long.fromString(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposalResponse",
            value: MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
            value: MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawProposal() {
    return {
        proposalId: Long.UZERO,
        address: ""
    };
}
export const MsgWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = Long.fromString(object.proposal_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgWithdrawProposal",
            value: MsgWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawProposal.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
            value: MsgWithdrawProposal.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
export const MsgWithdrawProposalResponse = {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawProposalResponse",
            value: MsgWithdrawProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawProposalResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
            value: MsgWithdrawProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVote() {
    return {
        proposalId: Long.UZERO,
        voter: "",
        option: 0,
        metadata: "",
        exec: 0
    };
}
export const MsgVote = {
    typeUrl: "/cosmos.group.v1.MsgVote",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.exec = reader.int32();
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        message.exec = object.exec ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = Long.fromString(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = voteOptionFromJSON(object.option);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.exec !== undefined && object.exec !== null) {
            message.exec = execFromJSON(object.exec);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.voter = message.voter;
        obj.option = voteOptionToJSON(message.option);
        obj.metadata = message.metadata;
        obj.exec = execToJSON(message.exec);
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgVote",
            value: MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVote.decode(message.value);
    },
    toProto(message) {
        return MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgVote",
            value: MsgVote.encode(message).finish()
        };
    }
};
function createBaseMsgVoteResponse() {
    return {};
}
export const MsgVoteResponse = {
    typeUrl: "/cosmos.group.v1.MsgVoteResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteResponse",
            value: MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgVoteResponse",
            value: MsgVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExec() {
    return {
        proposalId: Long.UZERO,
        signer: ""
    };
}
export const MsgExec = {
    typeUrl: "/cosmos.group.v1.MsgExec",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.signer !== "") {
            writer.uint32(18).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.signer = reader.string();
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExec();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = Long.fromString(object.proposal_id);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgExec",
            value: MsgExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExec.decode(message.value);
    },
    toProto(message) {
        return MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgExec",
            value: MsgExec.encode(message).finish()
        };
    }
};
function createBaseMsgExecResponse() {
    return {};
}
export const MsgExecResponse = {
    typeUrl: "/cosmos.group.v1.MsgExecResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgExecResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgExecResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExecResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExecResponse",
            value: MsgExecResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgExecResponse",
            value: MsgExecResponse.encode(message).finish()
        };
    }
};
function createBaseMsgLeaveGroup() {
    return {
        address: "",
        groupId: Long.UZERO
    };
}
export const MsgLeaveGroup = {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
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
            address: isSet(object.address) ? String(object.address) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLeaveGroup();
        message.address = object.address ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLeaveGroup();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = Long.fromString(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgLeaveGroup",
            value: MsgLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgLeaveGroup.decode(message.value);
    },
    toProto(message) {
        return MsgLeaveGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
            value: MsgLeaveGroup.encode(message).finish()
        };
    }
};
function createBaseMsgLeaveGroupResponse() {
    return {};
}
export const MsgLeaveGroupResponse = {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgLeaveGroupResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgLeaveGroupResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLeaveGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgLeaveGroupResponse",
            value: MsgLeaveGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgLeaveGroupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgLeaveGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
            value: MsgLeaveGroupResponse.encode(message).finish()
        };
    }
};
