import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const registry = [["/seiprotocol.seichain.tokenfactory.MsgCreateDenom", MsgCreateDenom], ["/seiprotocol.seichain.tokenfactory.MsgMint", MsgMint], ["/seiprotocol.seichain.tokenfactory.MsgBurn", MsgBurn], ["/seiprotocol.seichain.tokenfactory.MsgChangeAdmin", MsgChangeAdmin], ["/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata", MsgSetDenomMetadata]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createDenom(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom",
                value: MsgCreateDenom.encode(value).finish()
            };
        },
        mint(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgMint",
                value: MsgMint.encode(value).finish()
            };
        },
        burn(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgBurn",
                value: MsgBurn.encode(value).finish()
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin",
                value: MsgChangeAdmin.encode(value).finish()
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createDenom(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom",
                value
            };
        },
        mint(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgMint",
                value
            };
        },
        burn(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgBurn",
                value
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin",
                value
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata",
                value
            };
        }
    },
    toJSON: {
        createDenom(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom",
                value: MsgCreateDenom.toJSON(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgMint",
                value: MsgMint.toJSON(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgBurn",
                value: MsgBurn.toJSON(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin",
                value: MsgChangeAdmin.toJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.toJSON(value)
            };
        }
    },
    fromJSON: {
        createDenom(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom",
                value: MsgCreateDenom.fromJSON(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgMint",
                value: MsgMint.fromJSON(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgBurn",
                value: MsgBurn.fromJSON(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin",
                value: MsgChangeAdmin.fromJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createDenom(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom",
                value: MsgCreateDenom.fromPartial(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgMint",
                value: MsgMint.fromPartial(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgBurn",
                value: MsgBurn.fromPartial(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin",
                value: MsgChangeAdmin.fromPartial(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.fromPartial(value)
            };
        }
    }
};
