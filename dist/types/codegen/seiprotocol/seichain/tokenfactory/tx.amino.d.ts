import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin } from "./tx";
export declare const AminoConverter: {
    "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: MsgCreateDenom) => import("./tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./tx").MsgCreateDenomAmino) => MsgCreateDenom;
    };
    "/seiprotocol.seichain.tokenfactory.MsgMint": {
        aminoType: string;
        toAmino: (message: MsgMint) => import("./tx").MsgMintAmino;
        fromAmino: (object: import("./tx").MsgMintAmino) => MsgMint;
    };
    "/seiprotocol.seichain.tokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: (message: MsgBurn) => import("./tx").MsgBurnAmino;
        fromAmino: (object: import("./tx").MsgBurnAmino) => MsgBurn;
    };
    "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: MsgChangeAdmin) => import("./tx").MsgChangeAdminAmino;
        fromAmino: (object: import("./tx").MsgChangeAdminAmino) => MsgChangeAdmin;
    };
};
