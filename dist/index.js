"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMessagesByNumberArray = exports.decodeMessages = exports.decodeMessagePayload = void 0;
const types_1 = require("@polkadot/types");
const bn_js_1 = __importDefault(require("bn.js"));
const borsh_1 = require("@s2g/borsh");
function toHex(data) {
    return "0x" + Buffer.from(data).toString("hex");
}
function decodeData(type, data) {
    const registry = new types_1.TypeRegistry();
    registry.register(type);
    return (0, types_1.createType)(registry, Object.keys(type)[0], data);
}
function hexStringToBuffer(hex) {
    const hexString = hex.slice(0, 2) === "0x" ? hex.slice(2) : hex;
    return Buffer.from(hexString, "hex");
}
class LockPayloadLast {
    constructor(properties) {
        this.sender = "";
        this.receiver_id = "";
        this.amount = new bn_js_1.default("0");
        if (properties) {
            this.sender = properties.sender;
            this.receiver_id = properties.receiver_id;
            this.amount = properties.amount;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "String" })
], LockPayloadLast.prototype, "sender", void 0);
__decorate([
    (0, borsh_1.field)({ type: "String" })
], LockPayloadLast.prototype, "receiver_id", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], LockPayloadLast.prototype, "amount", void 0);
class LockPayload {
    constructor(properties) {
        this.sender = "";
        this.receiver_id = "";
        this.amount = new bn_js_1.default("0");
        this.fee = new bn_js_1.default("0");
        if (properties) {
            this.sender = properties.sender;
            this.receiver_id = properties.receiver_id;
            this.amount = properties.amount;
            this.fee = properties.fee;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "String" })
], LockPayload.prototype, "sender", void 0);
__decorate([
    (0, borsh_1.field)({ type: "String" })
], LockPayload.prototype, "receiver_id", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], LockPayload.prototype, "amount", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], LockPayload.prototype, "fee", void 0);
class BurnAssetPayloadLast {
    constructor(properties) {
        this.token_id = "";
        this.sender = "";
        this.receiver_id = "";
        this.amount = new bn_js_1.default("0");
        if (properties) {
            this.token_id = properties.token_id;
            this.sender = properties.sender;
            this.receiver_id = properties.receiver_id;
            this.amount = properties.amount;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "String" })
], BurnAssetPayloadLast.prototype, "token_id", void 0);
__decorate([
    (0, borsh_1.field)({ type: "String" })
], BurnAssetPayloadLast.prototype, "sender", void 0);
__decorate([
    (0, borsh_1.field)({ type: "String" })
], BurnAssetPayloadLast.prototype, "receiver_id", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], BurnAssetPayloadLast.prototype, "amount", void 0);
class BurnAssetPayload {
    constructor(properties) {
        this.token_id = "";
        this.sender = "";
        this.receiver_id = "";
        this.amount = new bn_js_1.default("0");
        this.fee = new bn_js_1.default("0");
        if (properties) {
            this.token_id = properties.token_id;
            this.sender = properties.sender;
            this.receiver_id = properties.receiver_id;
            this.amount = properties.amount;
            this.fee = properties.fee;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "String" })
], BurnAssetPayload.prototype, "token_id", void 0);
__decorate([
    (0, borsh_1.field)({ type: "String" })
], BurnAssetPayload.prototype, "sender", void 0);
__decorate([
    (0, borsh_1.field)({ type: "String" })
], BurnAssetPayload.prototype, "receiver_id", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], BurnAssetPayload.prototype, "amount", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], BurnAssetPayload.prototype, "fee", void 0);
class TokenMetadata {
    constructor(properties) {
        this.title = "";
        this.description = "";
        this.media = "";
        this.media_hash = "";
        this.copies = new bn_js_1.default("0");
        this.issued_at = "";
        this.expires_at = "";
        this.starts_at = "";
        this.updated_at = "";
        this.extra = "";
        this.reference = "";
        this.reference_hash = "";
        if (properties) {
            this.title = properties.title;
            this.description = properties.description;
            this.media = properties.media;
            this.media_hash = properties.media_hash;
            this.copies = properties.copies;
            this.issued_at = properties.issued_at;
            this.expires_at = properties.expires_at;
            this.starts_at = properties.starts_at;
            this.updated_at = properties.updated_at;
            this.extra = properties.extra;
            this.reference = properties.reference;
            this.reference_hash = properties.reference_hash;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("String") })
], TokenMetadata.prototype, "title", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("String") })
], TokenMetadata.prototype, "description", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("String") })
], TokenMetadata.prototype, "media", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)((0, borsh_1.vec)("u8")) })
], TokenMetadata.prototype, "media_hash", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("u64") })
], TokenMetadata.prototype, "copies", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("String") })
], TokenMetadata.prototype, "issued_at", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("String") })
], TokenMetadata.prototype, "expires_at", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("String") })
], TokenMetadata.prototype, "starts_at", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("String") })
], TokenMetadata.prototype, "updated_at", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("String") })
], TokenMetadata.prototype, "extra", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)("String") })
], TokenMetadata.prototype, "reference", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.option)((0, borsh_1.vec)("u8")) })
], TokenMetadata.prototype, "reference_hash", void 0);
class Offender {
    constructor(properties) {
        this.kind = "";
        this.who = "";
        this.offences = 0;
        if (properties) {
            this.kind = properties.kind;
            this.who = properties.who;
            this.offences = properties.offences;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "String" })
], Offender.prototype, "kind", void 0);
__decorate([
    (0, borsh_1.field)({ type: "String" })
], Offender.prototype, "who", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u32" })
], Offender.prototype, "offences", void 0);
class LockNftPayloadLast {
    constructor(properties) {
        this.sender = "";
        this.receiver_id = "";
        this.collection = new bn_js_1.default("0");
        this.item = new bn_js_1.default("0");
        this.metadata = new TokenMetadata();
        if (properties) {
            this.sender = properties.sender;
            this.receiver_id = properties.receiver_id;
            this.collection = properties.collection;
            this.item = properties.item;
            this.metadata = properties.tokenMetadata;
            ;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "String" })
], LockNftPayloadLast.prototype, "sender", void 0);
__decorate([
    (0, borsh_1.field)({ type: "String" })
], LockNftPayloadLast.prototype, "receiver_id", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], LockNftPayloadLast.prototype, "collection", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], LockNftPayloadLast.prototype, "item", void 0);
__decorate([
    (0, borsh_1.field)({ type: TokenMetadata })
], LockNftPayloadLast.prototype, "metadata", void 0);
class LockNftPayload {
    constructor(properties) {
        this.sender = "";
        this.receiver_id = "";
        this.collection = new bn_js_1.default("0");
        this.item = new bn_js_1.default("0");
        this.metadata = new TokenMetadata();
        this.fee = new bn_js_1.default("0");
        if (properties) {
            this.sender = properties.sender;
            this.receiver_id = properties.receiver_id;
            this.collection = properties.collection;
            this.item = properties.item;
            this.metadata = properties.tokenMetadata;
            ;
            this.fee = properties.fee;
            ;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "String" })
], LockNftPayload.prototype, "sender", void 0);
__decorate([
    (0, borsh_1.field)({ type: "String" })
], LockNftPayload.prototype, "receiver_id", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], LockNftPayload.prototype, "collection", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], LockNftPayload.prototype, "item", void 0);
__decorate([
    (0, borsh_1.field)({ type: TokenMetadata })
], LockNftPayload.prototype, "metadata", void 0);
__decorate([
    (0, borsh_1.field)({ type: "u128" })
], LockNftPayload.prototype, "fee", void 0);
class PlanNewEraPayload {
    constructor(properties) {
        this.new_era = 0;
        if (properties) {
            this.new_era = properties.new_era;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "u32" })
], PlanNewEraPayload.prototype, "new_era", void 0);
class EraPayoutPayloadLast {
    constructor(properties) {
        this.end_era = 0;
        this.excluded_validators = [];
        if (properties) {
            this.end_era = properties.end_era;
            this.excluded_validators = properties.excluded_validators;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "u32" })
], EraPayoutPayloadLast.prototype, "end_era", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.vec)("String") })
], EraPayoutPayloadLast.prototype, "excluded_validators", void 0);
class EraPayoutPayload {
    constructor(properties) {
        this.end_era = 0;
        this.excluded_validators = [];
        this.offenders = [];
        if (properties) {
            this.end_era = properties.end_era;
            this.excluded_validators = properties.excluded_validators;
            this.offenders = properties.offenders;
        }
    }
}
__decorate([
    (0, borsh_1.field)({ type: "u32" })
], EraPayoutPayload.prototype, "end_era", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.vec)("String") })
], EraPayoutPayload.prototype, "excluded_validators", void 0);
__decorate([
    (0, borsh_1.field)({ type: (0, borsh_1.vec)(Offender) })
], EraPayoutPayload.prototype, "offenders", void 0);
const payloadTypeWithVersionMap = {
    Lock: LockPayload,
    LockLast: LockPayloadLast,
    BurnAsset: BurnAssetPayload,
    BurnAssetLast: BurnAssetPayloadLast,
    LockNft: LockNftPayload,
    LockNftLast: LockNftPayloadLast,
    PlanNewEra: PlanNewEraPayload,
    EraPayout: EraPayoutPayload,
    EraPayoutLast: EraPayoutPayloadLast,
};
function decodeMessagesWithPayloadVec(hashString) {
    let decodedMessages = [];
    try {
        decodedMessages = decodeData({
            Messages: "Vec<Message>",
            Message: {
                nonce: "u64",
                payload_type: "PayloadType",
                payload: "Vec<u8>",
            },
            PayloadType: {
                _enum: ["Lock", "BurnAsset", "PlanNewEra", "EraPayout", "LockNft"],
            },
        }, hashString).toJSON();
    }
    catch (error) {
        decodedMessages = decodeData({
            Messages: "Vec<Message>",
            Message: {
                nonce: "u64",
                payload_type: "PayloadType",
                payload: "Vec<u8>",
            },
            PayloadType: {
                _enum: ["Lock", "BurnAsset", "PlanNewEra", "EraPayout"],
            },
        }, hashString).toJSON();
    }
    return decodedMessages;
}
function decodeMessagesWithPayloadBoundedVec(hashString) {
    let decodedMessages = [];
    decodedMessages = decodeData({
        Messages: "Vec<Message>",
        Message: {
            nonce: "Compact<u64>",
            payload_type: "PayloadType",
            payload: "BoundedVec<u8, u32>",
        },
        PayloadType: {
            _enum: ["Lock", "BurnAsset", "PlanNewEra", "EraPayout", "LockNft"],
        },
    }, hashString).toJSON();
    return decodedMessages;
}
function decodeMessagesInner(_decodedMessages) {
    let decodedMessages = _decodedMessages;
    decodedMessages.forEach((cdm) => {
        cdm.payload = decodeMessagePayload(cdm.payload_type, cdm.payload);
    });
    return decodedMessages;
}
function decodeMessagePayload(payloadType, payload) {
    const buf = hexStringToBuffer(payload);
    let deserialized;
    try {
        const payloadTypeWithVersion = payloadTypeWithVersionMap[payloadType + "Last"];
        const generatedSchemas = (0, borsh_1.generateSchemas)([payloadTypeWithVersion]);
        deserialized = (0, borsh_1.deserialize)(generatedSchemas, payloadTypeWithVersion, buf);
    }
    catch (e) {
        const payloadTypeWithVersion = payloadTypeWithVersionMap[payloadType];
        const generatedSchemas = (0, borsh_1.generateSchemas)([payloadTypeWithVersion]);
        deserialized = (0, borsh_1.deserialize)(generatedSchemas, payloadTypeWithVersion, buf);
    }
    return deserialized;
}
exports.decodeMessagePayload = decodeMessagePayload;
function decodeMessages(hashString) {
    let decodedMessages = [];
    try {
        decodedMessages = decodeMessagesWithPayloadVec(hashString);
        decodedMessages = decodeMessagesInner(decodedMessages);
        if (decodedMessages.length === 0) {
            decodedMessages = decodeMessagesWithPayloadBoundedVec(hashString);
            decodedMessages = decodeMessagesInner(decodedMessages);
        }
    }
    catch (error) {
        decodedMessages = decodeMessagesWithPayloadBoundedVec(hashString);
        decodedMessages = decodeMessagesInner(decodedMessages);
    }
    return decodedMessages;
}
exports.decodeMessages = decodeMessages;
function decodeMessagesByNumberArray(encodedMsg) {
    const hashString = toHex(encodedMsg);
    return decodeMessages(hashString);
}
exports.decodeMessagesByNumberArray = decodeMessagesByNumberArray;
//# sourceMappingURL=index.js.map