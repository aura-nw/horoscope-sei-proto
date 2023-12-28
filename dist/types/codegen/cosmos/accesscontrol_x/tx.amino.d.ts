import { MsgRegisterWasmDependency } from "./tx";
export declare const AminoConverter: {
    "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency": {
        aminoType: string;
        toAmino: (message: MsgRegisterWasmDependency) => import("./tx").MsgRegisterWasmDependencyAmino;
        fromAmino: (object: import("./tx").MsgRegisterWasmDependencyAmino) => MsgRegisterWasmDependency;
    };
};
