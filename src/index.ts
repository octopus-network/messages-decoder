import { TypeRegistry, createType } from "@polkadot/types";
import BN from "bn.js";
import { DetectCodec } from "@polkadot/types/types";
import {
  deserialize,
  generateSchemas,
  field,
  vec,
  option
} from "@s2g/borsh";

function toHex(data: number[]): string {
  return "0x" + Buffer.from(data).toString("hex");
}

function decodeData(type: any, data: any): DetectCodec<any, any> {
  const registry = new TypeRegistry();
  registry.register(type);
  return createType(registry, Object.keys(type)[0], data);
}

function hexStringToBuffer(hex: string): Buffer {
  const hexString = hex.slice(0, 2) === "0x" ? hex.slice(2) : hex;
  return Buffer.from(hexString, "hex");
}

class LockPayloadLast {
  @field({ type: "String" })
  public sender: string = "";

  @field({ type: "String" })
  public receiver_id: string = "";

  @field({ type: "u128" })
  public amount: BN = new BN("0");

  constructor(properties?: { sender: string; receiver_id: string, amount: BN }) {
    if (properties) {
      this.sender = properties.sender;
      this.receiver_id = properties.receiver_id;
      this.amount = properties.amount;
    }
  }
}

class LockPayload {
  @field({ type: "String" })
  public sender: string = "";

  @field({ type: "String" })
  public receiver_id: string = "";

  @field({ type: "u128" })
  public amount: BN = new BN("0");

  @field({ type: "u128" })
  public fee: BN = new BN("0");

  constructor(properties?: { sender: string; receiver_id: string, amount: BN, fee: BN }) {
    if (properties) {
      this.sender = properties.sender;
      this.receiver_id = properties.receiver_id;
      this.amount = properties.amount;
      this.fee = properties.fee;
    }
  }
}

class BurnAssetPayloadLast {
  @field({ type: "String" })
  public token_id: string = "";

  @field({ type: "String" })
  public sender: string = "";

  @field({ type: "String" })
  public receiver_id: string = "";

  @field({ type: "u128" })
  public amount: BN = new BN("0");

  constructor(properties?: { token_id: string; sender: string; receiver_id: string, amount: BN }) {
    if (properties) {
      this.token_id = properties.token_id;
      this.sender = properties.sender;
      this.receiver_id = properties.receiver_id;
      this.amount = properties.amount;
    }
  }
}

class BurnAssetPayload {
  @field({ type: "String" })
  public token_id: string = "";

  @field({ type: "String" })
  public sender: string = "";

  @field({ type: "String" })
  public receiver_id: string = "";

  @field({ type: "u128" })
  public amount: BN = new BN("0");

  @field({ type: "u128" })
  public fee: BN = new BN("0");

  constructor(properties?: { token_id: string; sender: string; receiver_id: string, amount: BN, fee: BN }) {
    if (properties) {
      this.token_id = properties.token_id;
      this.sender = properties.sender;
      this.receiver_id = properties.receiver_id;
      this.amount = properties.amount;
      this.fee = properties.fee;
    }
  }
}

class TokenMetadata {
  @field({ type: option("String") })
  public title: string = "";

  @field({ type: option("String") })
  public description: string = "";

  @field({ type: option("String") })
  public media: string = "";

  @field({ type: option(vec("u8")) })
  public media_hash: string = "";

  @field({ type: option("u64") })
  public copies: BN = new BN("0");

  @field({ type: option("String") })
  public issued_at: string = "";

  @field({ type: option("String") })
  public expires_at: string = "";

  @field({ type: option("String") })
  public starts_at: string = "";

  @field({ type: option("String") })
  public updated_at: string = "";

  @field({ type: option("String") })
  public extra: string = "";

  @field({ type: option("String") })
  public reference: string = "";

  @field({ type: option(vec("u8")) })
  public reference_hash: string = "";


  constructor(properties?: {
    title: string,
    description: string,
    media: string,
    media_hash: string,
    copies: BN,
    issued_at: string,
    expires_at: string,
    starts_at: string,
    updated_at: string,
    extra: string,
    reference: string,
    reference_hash: string
  }) {
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

class Offender {
  @field({ type: "String" })
  public kind: string = "";

  @field({ type: "String" })
  public who: string = "";

  @field({ type: "u32" })
  public offences: number = 0;

  constructor(properties?: {
    kind: string,
    who: string,
    offences: number,
  }) {
    if (properties) {
      this.kind = properties.kind;
      this.who = properties.who;
      this.offences = properties.offences;
    }
  }
}

class LockNftPayloadLast {
  @field({ type: "String" })
  public sender: string = "";

  @field({ type: "String" })
  public receiver_id: string = "";

  @field({ type: "u128" })
  public collection: BN = new BN("0");

  @field({ type: "u128" })
  public item: BN = new BN("0");

  @field({ type: TokenMetadata })
  public metadata: TokenMetadata = new TokenMetadata();

  constructor(properties?: { sender: string; receiver_id: string, collection: BN, item: BN, tokenMetadata: TokenMetadata, fee: BN }) {
    if (properties) {
      this.sender = properties.sender;
      this.receiver_id = properties.receiver_id;
      this.collection = properties.collection;
      this.item = properties.item;
      this.metadata = properties.tokenMetadata;;
    }
  }
}

class LockNftPayload {
  @field({ type: "String" })
  public sender: string = "";

  @field({ type: "String" })
  public receiver_id: string = "";

  @field({ type: "u128" })
  public collection: BN = new BN("0");

  @field({ type: "u128" })
  public item: BN = new BN("0");

  @field({ type: TokenMetadata })
  public metadata: TokenMetadata = new TokenMetadata();

  @field({ type: "u128" })
  public fee: BN = new BN("0");

  constructor(properties?: { sender: string; receiver_id: string, collection: BN, item: BN, tokenMetadata: TokenMetadata, fee: BN }) {
    if (properties) {
      this.sender = properties.sender;
      this.receiver_id = properties.receiver_id;
      this.collection = properties.collection;
      this.item = properties.item;
      this.metadata = properties.tokenMetadata;;
      this.fee = properties.fee;;
    }
  }
}

class PlanNewEraPayload {
  @field({ type: "u32" })
  public new_era: number = 0;

  constructor(properties?: { new_era: number }) {
    if (properties) {
      this.new_era = properties.new_era;
    }
  }
}

class EraPayoutPayloadLast {
  @field({ type: "u32" })
  public end_era: number = 0;

  @field({ type: vec("String") })
  public excluded_validators: string[] = [];

  constructor(properties?: { end_era: number; excluded_validators: string[] }) {
    if (properties) {
      this.end_era = properties.end_era;
      this.excluded_validators = properties.excluded_validators;
    }
  }
}

class EraPayoutPayload {
  @field({ type: "u32" })
  public end_era: number = 0;

  @field({ type: vec("String") })
  public excluded_validators: string[] = [];

  @field({ type: vec(Offender) })
  public offenders: Offender[] = [];

  constructor(properties?: { end_era: number; excluded_validators: string[], offenders: Offender[] }) {
    if (properties) {
      this.end_era = properties.end_era;
      this.excluded_validators = properties.excluded_validators;
      this.offenders = properties.offenders;
    }
  }
}

const payloadTypeWithVersionMap: any = {
  Lock: LockPayload,
  LockLast: LockPayloadLast,
  BurnAsset: BurnAssetPayload,
  BurnAssetLast: BurnAssetPayloadLast,
  LockNft: LockNftPayload,
  LockNftLast: LockNftPayloadLast,
  PlanNewEra: PlanNewEraPayload,
  EraPayout: EraPayoutPayload,
  EraPayoutLast: EraPayoutPayloadLast,
}

function decodeMessagesWithPayloadVec(hashString: string) {
  let decodedMessages: any[] = [];
  try {
    decodedMessages = decodeData(
      {
        Messages: "Vec<Message>",
        Message: {
          nonce: "u64",
          payload_type: "PayloadType",
          payload: "Vec<u8>",
        },
        PayloadType: {
          _enum: ["Lock", "BurnAsset", "PlanNewEra", "EraPayout", "LockNft"],
        },
      },
      hashString
    ).toJSON();
  } catch (error) {
    decodedMessages = decodeData(
      {
        Messages: "Vec<Message>",
        Message: {
          nonce: "u64",
          payload_type: "PayloadType",
          payload: "Vec<u8>",
        },
        PayloadType: {
          _enum: ["Lock", "BurnAsset", "PlanNewEra", "EraPayout"],
        },
      },
      hashString
    ).toJSON();
  }
  return decodedMessages;
}

function decodeMessagesWithPayloadBoundedVec(hashString: string) {
  let decodedMessages: any[] = [];
  decodedMessages = decodeData(
    {
      Messages: "Vec<Message>",
      Message: {
        nonce: "Compact<u64>",
        payload_type: "PayloadType",
        payload: "BoundedVec<u8, u32>",
      },
      PayloadType: {
        _enum: ["Lock", "BurnAsset", "PlanNewEra", "EraPayout", "LockNft"],
      },
    },
    hashString
  ).toJSON();
  return decodedMessages;
}

function decodeMessagesInner(_decodedMessages: any[]) {
  let decodedMessages: any[] = _decodedMessages;
  decodedMessages.forEach((cdm: any) => {
    cdm.payload = decodeMessagePayload(cdm.payloadType, cdm.payload);
  });
  return decodedMessages;
}

export function decodeMessagePayload(payloadType: string, payload: string) {
  const buf = hexStringToBuffer(payload);
  let deserialized;
  try {
    const payloadTypeWithVersion = payloadTypeWithVersionMap[payloadType + "Last"];
    const generatedSchemas = generateSchemas([payloadTypeWithVersion]);
    deserialized = deserialize(
      generatedSchemas,
      payloadTypeWithVersion,
      buf
    );
  } catch (e) {
    const payloadTypeWithVersion = payloadTypeWithVersionMap[payloadType];
    const generatedSchemas = generateSchemas([payloadTypeWithVersion]);
    deserialized = deserialize(
      generatedSchemas,
      payloadTypeWithVersion,
      buf
    );
  }
  return deserialized;
}

export function decodeMessages(hashString: string) {
  let decodedMessages: any[] = [];
  try {
    decodedMessages = decodeMessagesWithPayloadVec(hashString);
    decodedMessages = decodeMessagesInner(decodedMessages);
    if (decodedMessages.length === 0) {
      decodedMessages = decodeMessagesWithPayloadBoundedVec(hashString);
      decodedMessages = decodeMessagesInner(decodedMessages);
    }
  } catch (error) {
    decodedMessages = decodeMessagesWithPayloadBoundedVec(hashString);
    decodedMessages = decodeMessagesInner(decodedMessages);
  }
  return decodedMessages;
}

export function decodeMessagesByNumberArray(encodedMsg: number[]) {
  const hashString = toHex(encodedMsg);
  return decodeMessages(hashString);
}