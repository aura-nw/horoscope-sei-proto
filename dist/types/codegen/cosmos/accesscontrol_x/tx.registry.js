import { MsgRegisterWasmDependency } from "./tx";
export const registry = [["/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency", MsgRegisterWasmDependency]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        registerWasmDependency(value) {
            return {
                typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
                value: MsgRegisterWasmDependency.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        registerWasmDependency(value) {
            return {
                typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
                value
            };
        }
    },
    toJSON: {
        registerWasmDependency(value) {
            return {
                typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
                value: MsgRegisterWasmDependency.toJSON(value)
            };
        }
    },
    fromJSON: {
        registerWasmDependency(value) {
            return {
                typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
                value: MsgRegisterWasmDependency.fromJSON(value)
            };
        }
    },
    fromPartial: {
        registerWasmDependency(value) {
            return {
                typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
                value: MsgRegisterWasmDependency.fromPartial(value)
            };
        }
    }
};
