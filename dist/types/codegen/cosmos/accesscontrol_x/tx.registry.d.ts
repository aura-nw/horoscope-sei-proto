import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterWasmDependency } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerWasmDependency(value: MsgRegisterWasmDependency): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerWasmDependency(value: MsgRegisterWasmDependency): {
            typeUrl: string;
            value: MsgRegisterWasmDependency;
        };
    };
    toJSON: {
        registerWasmDependency(value: MsgRegisterWasmDependency): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        registerWasmDependency(value: any): {
            typeUrl: string;
            value: MsgRegisterWasmDependency;
        };
    };
    fromPartial: {
        registerWasmDependency(value: MsgRegisterWasmDependency): {
            typeUrl: string;
            value: MsgRegisterWasmDependency;
        };
    };
};
