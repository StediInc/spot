import {
  Date,
  DateTime,
  Double,
  Float,
  Int32,
  Int64,
  Integer,
  Number,
  String
} from "@stediinc/spot";

interface TypeInterface {
  null: null;
  boolean: boolean;
  true: true;
  false: false;
  string: string;
  String: String;
  literalString: "literalString";
  number: number;
  Number: Number;
  Float: Float;
  Double: Double;
  literalFloat: 1.02;
  Integer: Integer;
  Int32: Int32;
  Int64: Int64;
  literalInteger: 2;
  Date: Date;
  DateTime: DateTime;
  literalObject: {
    /** Property description */
    propertyA: string;
    propertyB?: boolean;
  };
  array: boolean[];
  arrayConstructor: Array<{ a: boolean }>;
  union: boolean | Date | null;
  unionDiscriminated: DiscriminatedUnionElementA | DiscriminatedUnionElementB;
  unionDiscriminatedNullable:
    | DiscriminatedUnionElementA
    | DiscriminatedUnionElementB
    | null;
  aliasString: AliasString;
  aliasArray: AliasArray;
  aliasWithDescription: AliasWithDescription;
  interface: Interface;
  interfaceWithDescription: InterfaceWithDescription;
  interfaceExtends: InterfaceExtends;
  indexedAccess: IndexedAccess["root"];
  indexedAccessNested: IndexedAccess["child"]["nested"]["secondNest"];
  indexedIndexedAccess: IndexedAccess["indexed"]["root"];
  indexedAccessInline: { root: boolean }["root"];
  enum: Enum;
  enumConstant: Enum.A;
  map: Map<string, boolean>;
  indexSignature: { [index: string]: boolean };
  interfaceWithIndexSignature: InterfaceWithIndexSignature;
}

interface DiscriminatedUnionElementA {
  type: "a";
  a: string;
}

interface DiscriminatedUnionElementB {
  type: "b";
  b: string;
}

type AliasString = string;

type AliasArray = string[];

/** Alias description */
type AliasWithDescription = string;

interface Interface {
  interfaceProperty: boolean;
}

/** Interface description */
interface InterfaceWithDescription {
  interfaceProperty: boolean;
}

interface InterfaceExtends extends Interface {
  interfaceExtendsProperty: boolean;
}

interface InterfaceWithIndexSignature {
  [index: string]: boolean;
}

interface IndexedAccess {
  root: boolean;
  child: {
    nested: {
      secondNest: boolean;
    };
  };
  indexed: IndexedIndexedAccess;
}

interface IndexedIndexedAccess {
  root: boolean;
}

enum Enum {
  A,
  B,
  C
}
