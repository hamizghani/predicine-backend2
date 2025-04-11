
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>
/**
 * Model TransactionHistory
 * 
 */
export type TransactionHistory = $Result.DefaultSelection<Prisma.$TransactionHistoryPayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model UserStock
 * 
 */
export type UserStock = $Result.DefaultSelection<Prisma.$UserStockPayload>
/**
 * Model StockBatch
 * 
 */
export type StockBatch = $Result.DefaultSelection<Prisma.$StockBatchPayload>
/**
 * Model ForecastedUserStock
 * 
 */
export type ForecastedUserStock = $Result.DefaultSelection<Prisma.$ForecastedUserStockPayload>
/**
 * Model Disease
 * 
 */
export type Disease = $Result.DefaultSelection<Prisma.$DiseasePayload>
/**
 * Model DiseaseRecord
 * 
 */
export type DiseaseRecord = $Result.DefaultSelection<Prisma.$DiseaseRecordPayload>
/**
 * Model DiseaseMedicineCorrelation
 * 
 */
export type DiseaseMedicineCorrelation = $Result.DefaultSelection<Prisma.$DiseaseMedicineCorrelationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionHistory`: Exposes CRUD operations for the **TransactionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionHistories
    * const transactionHistories = await prisma.transactionHistory.findMany()
    * ```
    */
  get transactionHistory(): Prisma.TransactionHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStock`: Exposes CRUD operations for the **UserStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStocks
    * const userStocks = await prisma.userStock.findMany()
    * ```
    */
  get userStock(): Prisma.UserStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockBatch`: Exposes CRUD operations for the **StockBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockBatches
    * const stockBatches = await prisma.stockBatch.findMany()
    * ```
    */
  get stockBatch(): Prisma.StockBatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forecastedUserStock`: Exposes CRUD operations for the **ForecastedUserStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForecastedUserStocks
    * const forecastedUserStocks = await prisma.forecastedUserStock.findMany()
    * ```
    */
  get forecastedUserStock(): Prisma.ForecastedUserStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disease`: Exposes CRUD operations for the **Disease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diseases
    * const diseases = await prisma.disease.findMany()
    * ```
    */
  get disease(): Prisma.DiseaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diseaseRecord`: Exposes CRUD operations for the **DiseaseRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiseaseRecords
    * const diseaseRecords = await prisma.diseaseRecord.findMany()
    * ```
    */
  get diseaseRecord(): Prisma.DiseaseRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diseaseMedicineCorrelation`: Exposes CRUD operations for the **DiseaseMedicineCorrelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiseaseMedicineCorrelations
    * const diseaseMedicineCorrelations = await prisma.diseaseMedicineCorrelation.findMany()
    * ```
    */
  get diseaseMedicineCorrelation(): Prisma.DiseaseMedicineCorrelationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tokens: 'Tokens',
    TransactionHistory: 'TransactionHistory',
    Medicine: 'Medicine',
    UserStock: 'UserStock',
    StockBatch: 'StockBatch',
    ForecastedUserStock: 'ForecastedUserStock',
    Disease: 'Disease',
    DiseaseRecord: 'DiseaseRecord',
    DiseaseMedicineCorrelation: 'DiseaseMedicineCorrelation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tokens" | "transactionHistory" | "medicine" | "userStock" | "stockBatch" | "forecastedUserStock" | "disease" | "diseaseRecord" | "diseaseMedicineCorrelation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      TransactionHistory: {
        payload: Prisma.$TransactionHistoryPayload<ExtArgs>
        fields: Prisma.TransactionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          findFirst: {
            args: Prisma.TransactionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          findMany: {
            args: Prisma.TransactionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>[]
          }
          create: {
            args: Prisma.TransactionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          createMany: {
            args: Prisma.TransactionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>[]
          }
          delete: {
            args: Prisma.TransactionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          update: {
            args: Prisma.TransactionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TransactionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TransactionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionHistoryPayload>
          }
          aggregate: {
            args: Prisma.TransactionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionHistory>
          }
          groupBy: {
            args: Prisma.TransactionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionHistoryCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      UserStock: {
        payload: Prisma.$UserStockPayload<ExtArgs>
        fields: Prisma.UserStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload>
          }
          findFirst: {
            args: Prisma.UserStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload>
          }
          findMany: {
            args: Prisma.UserStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload>[]
          }
          create: {
            args: Prisma.UserStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload>
          }
          createMany: {
            args: Prisma.UserStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload>[]
          }
          delete: {
            args: Prisma.UserStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload>
          }
          update: {
            args: Prisma.UserStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload>
          }
          deleteMany: {
            args: Prisma.UserStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload>[]
          }
          upsert: {
            args: Prisma.UserStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockPayload>
          }
          aggregate: {
            args: Prisma.UserStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStock>
          }
          groupBy: {
            args: Prisma.UserStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStockCountArgs<ExtArgs>
            result: $Utils.Optional<UserStockCountAggregateOutputType> | number
          }
        }
      }
      StockBatch: {
        payload: Prisma.$StockBatchPayload<ExtArgs>
        fields: Prisma.StockBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload>
          }
          findFirst: {
            args: Prisma.StockBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload>
          }
          findMany: {
            args: Prisma.StockBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload>[]
          }
          create: {
            args: Prisma.StockBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload>
          }
          createMany: {
            args: Prisma.StockBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload>[]
          }
          delete: {
            args: Prisma.StockBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload>
          }
          update: {
            args: Prisma.StockBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload>
          }
          deleteMany: {
            args: Prisma.StockBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockBatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload>[]
          }
          upsert: {
            args: Prisma.StockBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockBatchPayload>
          }
          aggregate: {
            args: Prisma.StockBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockBatch>
          }
          groupBy: {
            args: Prisma.StockBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockBatchCountArgs<ExtArgs>
            result: $Utils.Optional<StockBatchCountAggregateOutputType> | number
          }
        }
      }
      ForecastedUserStock: {
        payload: Prisma.$ForecastedUserStockPayload<ExtArgs>
        fields: Prisma.ForecastedUserStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForecastedUserStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForecastedUserStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload>
          }
          findFirst: {
            args: Prisma.ForecastedUserStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForecastedUserStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload>
          }
          findMany: {
            args: Prisma.ForecastedUserStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload>[]
          }
          create: {
            args: Prisma.ForecastedUserStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload>
          }
          createMany: {
            args: Prisma.ForecastedUserStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForecastedUserStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload>[]
          }
          delete: {
            args: Prisma.ForecastedUserStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload>
          }
          update: {
            args: Prisma.ForecastedUserStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload>
          }
          deleteMany: {
            args: Prisma.ForecastedUserStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForecastedUserStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForecastedUserStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload>[]
          }
          upsert: {
            args: Prisma.ForecastedUserStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastedUserStockPayload>
          }
          aggregate: {
            args: Prisma.ForecastedUserStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForecastedUserStock>
          }
          groupBy: {
            args: Prisma.ForecastedUserStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForecastedUserStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForecastedUserStockCountArgs<ExtArgs>
            result: $Utils.Optional<ForecastedUserStockCountAggregateOutputType> | number
          }
        }
      }
      Disease: {
        payload: Prisma.$DiseasePayload<ExtArgs>
        fields: Prisma.DiseaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findFirst: {
            args: Prisma.DiseaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findMany: {
            args: Prisma.DiseaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          create: {
            args: Prisma.DiseaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          createMany: {
            args: Prisma.DiseaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiseaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          delete: {
            args: Prisma.DiseaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          update: {
            args: Prisma.DiseaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          deleteMany: {
            args: Prisma.DiseaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiseaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          upsert: {
            args: Prisma.DiseaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          aggregate: {
            args: Prisma.DiseaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisease>
          }
          groupBy: {
            args: Prisma.DiseaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiseaseCountArgs<ExtArgs>
            result: $Utils.Optional<DiseaseCountAggregateOutputType> | number
          }
        }
      }
      DiseaseRecord: {
        payload: Prisma.$DiseaseRecordPayload<ExtArgs>
        fields: Prisma.DiseaseRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseaseRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseaseRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload>
          }
          findFirst: {
            args: Prisma.DiseaseRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseaseRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload>
          }
          findMany: {
            args: Prisma.DiseaseRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload>[]
          }
          create: {
            args: Prisma.DiseaseRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload>
          }
          createMany: {
            args: Prisma.DiseaseRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiseaseRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload>[]
          }
          delete: {
            args: Prisma.DiseaseRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload>
          }
          update: {
            args: Prisma.DiseaseRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload>
          }
          deleteMany: {
            args: Prisma.DiseaseRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseaseRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiseaseRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload>[]
          }
          upsert: {
            args: Prisma.DiseaseRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseRecordPayload>
          }
          aggregate: {
            args: Prisma.DiseaseRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiseaseRecord>
          }
          groupBy: {
            args: Prisma.DiseaseRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseaseRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiseaseRecordCountArgs<ExtArgs>
            result: $Utils.Optional<DiseaseRecordCountAggregateOutputType> | number
          }
        }
      }
      DiseaseMedicineCorrelation: {
        payload: Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>
        fields: Prisma.DiseaseMedicineCorrelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseaseMedicineCorrelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseaseMedicineCorrelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload>
          }
          findFirst: {
            args: Prisma.DiseaseMedicineCorrelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseaseMedicineCorrelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload>
          }
          findMany: {
            args: Prisma.DiseaseMedicineCorrelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload>[]
          }
          create: {
            args: Prisma.DiseaseMedicineCorrelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload>
          }
          createMany: {
            args: Prisma.DiseaseMedicineCorrelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiseaseMedicineCorrelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload>[]
          }
          delete: {
            args: Prisma.DiseaseMedicineCorrelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload>
          }
          update: {
            args: Prisma.DiseaseMedicineCorrelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload>
          }
          deleteMany: {
            args: Prisma.DiseaseMedicineCorrelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseaseMedicineCorrelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiseaseMedicineCorrelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload>[]
          }
          upsert: {
            args: Prisma.DiseaseMedicineCorrelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseaseMedicineCorrelationPayload>
          }
          aggregate: {
            args: Prisma.DiseaseMedicineCorrelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiseaseMedicineCorrelation>
          }
          groupBy: {
            args: Prisma.DiseaseMedicineCorrelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseaseMedicineCorrelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiseaseMedicineCorrelationCountArgs<ExtArgs>
            result: $Utils.Optional<DiseaseMedicineCorrelationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tokens?: TokensOmit
    transactionHistory?: TransactionHistoryOmit
    medicine?: MedicineOmit
    userStock?: UserStockOmit
    stockBatch?: StockBatchOmit
    forecastedUserStock?: ForecastedUserStockOmit
    disease?: DiseaseOmit
    diseaseRecord?: DiseaseRecordOmit
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transactionHistory: number
    userStock: number
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionHistory?: boolean | UserCountOutputTypeCountTransactionHistoryArgs
    userStock?: boolean | UserCountOutputTypeCountUserStockArgs
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
  }


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    transactionHistory: number
    userStock: number
    diseaseMedicineCorrelation: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionHistory?: boolean | MedicineCountOutputTypeCountTransactionHistoryArgs
    userStock?: boolean | MedicineCountOutputTypeCountUserStockArgs
    diseaseMedicineCorrelation?: boolean | MedicineCountOutputTypeCountDiseaseMedicineCorrelationArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountTransactionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionHistoryWhereInput
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountUserStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStockWhereInput
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountDiseaseMedicineCorrelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseMedicineCorrelationWhereInput
  }


  /**
   * Count Type UserStockCountOutputType
   */

  export type UserStockCountOutputType = {
    batches: number
  }

  export type UserStockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | UserStockCountOutputTypeCountBatchesArgs
  }

  // Custom InputTypes
  /**
   * UserStockCountOutputType without action
   */
  export type UserStockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCountOutputType
     */
    select?: UserStockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserStockCountOutputType without action
   */
  export type UserStockCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockBatchWhereInput
  }


  /**
   * Count Type DiseaseCountOutputType
   */

  export type DiseaseCountOutputType = {
    diseaseMedicineCorrelation: number
    diseaseRecords: number
  }

  export type DiseaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diseaseMedicineCorrelation?: boolean | DiseaseCountOutputTypeCountDiseaseMedicineCorrelationArgs
    diseaseRecords?: boolean | DiseaseCountOutputTypeCountDiseaseRecordsArgs
  }

  // Custom InputTypes
  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseCountOutputType
     */
    select?: DiseaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeCountDiseaseMedicineCorrelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseMedicineCorrelationWhereInput
  }

  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeCountDiseaseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    sales: number | null
    quantitySold: number | null
    price: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    sales: number | null
    quantitySold: number | null
    price: number[]
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    name: string | null
    passwordHash: string | null
    region: string | null
    sales: number | null
    quantitySold: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    name: string | null
    passwordHash: string | null
    region: string | null
    sales: number | null
    quantitySold: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    name: number
    passwordHash: number
    region: number
    sales: number
    quantitySold: number
    price: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    sales?: true
    quantitySold?: true
    price?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    sales?: true
    quantitySold?: true
    price?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    passwordHash?: true
    region?: true
    sales?: true
    quantitySold?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    passwordHash?: true
    region?: true
    sales?: true
    quantitySold?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    passwordHash?: true
    region?: true
    sales?: true
    quantitySold?: true
    price?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    name: string
    passwordHash: string
    region: string
    sales: number
    quantitySold: number
    price: number[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    passwordHash?: boolean
    region?: boolean
    sales?: boolean
    quantitySold?: boolean
    price?: boolean
    transactionHistory?: boolean | User$transactionHistoryArgs<ExtArgs>
    userStock?: boolean | User$userStockArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    passwordHash?: boolean
    region?: boolean
    sales?: boolean
    quantitySold?: boolean
    price?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    passwordHash?: boolean
    region?: boolean
    sales?: boolean
    quantitySold?: boolean
    price?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    passwordHash?: boolean
    region?: boolean
    sales?: boolean
    quantitySold?: boolean
    price?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "name" | "passwordHash" | "region" | "sales" | "quantitySold" | "price", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionHistory?: boolean | User$transactionHistoryArgs<ExtArgs>
    userStock?: boolean | User$userStockArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transactionHistory: Prisma.$TransactionHistoryPayload<ExtArgs>[]
      userStock: Prisma.$UserStockPayload<ExtArgs>[]
      tokens: Prisma.$TokensPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      name: string
      passwordHash: string
      region: string
      sales: number
      quantitySold: number
      price: number[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactionHistory<T extends User$transactionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userStock<T extends User$userStockArgs<ExtArgs> = {}>(args?: Subset<T, User$userStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly region: FieldRef<"User", 'String'>
    readonly sales: FieldRef<"User", 'Int'>
    readonly quantitySold: FieldRef<"User", 'Int'>
    readonly price: FieldRef<"User", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.transactionHistory
   */
  export type User$transactionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    where?: TransactionHistoryWhereInput
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    cursor?: TransactionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * User.userStock
   */
  export type User$userStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    where?: UserStockWhereInput
    orderBy?: UserStockOrderByWithRelationInput | UserStockOrderByWithRelationInput[]
    cursor?: UserStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStockScalarFieldEnum | UserStockScalarFieldEnum[]
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    cursor?: TokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensAvgAggregateOutputType = {
    userId: number | null
  }

  export type TokensSumAggregateOutputType = {
    userId: number | null
  }

  export type TokensMinAggregateOutputType = {
    userId: number | null
    refresh: string | null
    access: string | null
  }

  export type TokensMaxAggregateOutputType = {
    userId: number | null
    refresh: string | null
    access: string | null
  }

  export type TokensCountAggregateOutputType = {
    userId: number
    refresh: number
    access: number
    _all: number
  }


  export type TokensAvgAggregateInputType = {
    userId?: true
  }

  export type TokensSumAggregateInputType = {
    userId?: true
  }

  export type TokensMinAggregateInputType = {
    userId?: true
    refresh?: true
    access?: true
  }

  export type TokensMaxAggregateInputType = {
    userId?: true
    refresh?: true
    access?: true
  }

  export type TokensCountAggregateInputType = {
    userId?: true
    refresh?: true
    access?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _avg?: TokensAvgAggregateInputType
    _sum?: TokensSumAggregateInputType
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    userId: number
    refresh: string
    access: string
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    refresh?: boolean
    access?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    refresh?: boolean
    access?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    refresh?: boolean
    access?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectScalar = {
    userId?: boolean
    refresh?: boolean
    access?: boolean
  }

  export type TokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "refresh" | "access", ExtArgs["result"]["tokens"]>
  export type TokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      refresh: string
      access: string
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const tokensWithUserIdOnly = await prisma.tokens.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `userId`
     * const tokensWithUserIdOnly = await prisma.tokens.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokensCreateManyAndReturnArgs>(args?: SelectSubset<T, TokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokensUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `userId`
     * const tokensWithUserIdOnly = await prisma.tokens.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokensUpdateManyAndReturnArgs>(args: SelectSubset<T, TokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tokens model
   */
  interface TokensFieldRefs {
    readonly userId: FieldRef<"Tokens", 'Int'>
    readonly refresh: FieldRef<"Tokens", 'String'>
    readonly access: FieldRef<"Tokens", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens createManyAndReturn
   */
  export type TokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens updateManyAndReturn
   */
  export type TokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
  }


  /**
   * Model TransactionHistory
   */

  export type AggregateTransactionHistory = {
    _count: TransactionHistoryCountAggregateOutputType | null
    _avg: TransactionHistoryAvgAggregateOutputType | null
    _sum: TransactionHistorySumAggregateOutputType | null
    _min: TransactionHistoryMinAggregateOutputType | null
    _max: TransactionHistoryMaxAggregateOutputType | null
  }

  export type TransactionHistoryAvgAggregateOutputType = {
    id: number | null
    medicineId: number | null
    amount: number | null
    userId: number | null
    price: number | null
  }

  export type TransactionHistorySumAggregateOutputType = {
    id: number | null
    medicineId: number | null
    amount: number | null
    userId: number | null
    price: number | null
  }

  export type TransactionHistoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    medicineId: number | null
    amount: number | null
    userId: number | null
    price: number | null
  }

  export type TransactionHistoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    medicineId: number | null
    amount: number | null
    userId: number | null
    price: number | null
  }

  export type TransactionHistoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    medicineId: number
    amount: number
    userId: number
    price: number
    _all: number
  }


  export type TransactionHistoryAvgAggregateInputType = {
    id?: true
    medicineId?: true
    amount?: true
    userId?: true
    price?: true
  }

  export type TransactionHistorySumAggregateInputType = {
    id?: true
    medicineId?: true
    amount?: true
    userId?: true
    price?: true
  }

  export type TransactionHistoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    medicineId?: true
    amount?: true
    userId?: true
    price?: true
  }

  export type TransactionHistoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    medicineId?: true
    amount?: true
    userId?: true
    price?: true
  }

  export type TransactionHistoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    medicineId?: true
    amount?: true
    userId?: true
    price?: true
    _all?: true
  }

  export type TransactionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionHistory to aggregate.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionHistories
    **/
    _count?: true | TransactionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionHistoryMaxAggregateInputType
  }

  export type GetTransactionHistoryAggregateType<T extends TransactionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionHistory[P]>
      : GetScalarType<T[P], AggregateTransactionHistory[P]>
  }




  export type TransactionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionHistoryWhereInput
    orderBy?: TransactionHistoryOrderByWithAggregationInput | TransactionHistoryOrderByWithAggregationInput[]
    by: TransactionHistoryScalarFieldEnum[] | TransactionHistoryScalarFieldEnum
    having?: TransactionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionHistoryCountAggregateInputType | true
    _avg?: TransactionHistoryAvgAggregateInputType
    _sum?: TransactionHistorySumAggregateInputType
    _min?: TransactionHistoryMinAggregateInputType
    _max?: TransactionHistoryMaxAggregateInputType
  }

  export type TransactionHistoryGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    medicineId: number
    amount: number
    userId: number
    price: number
    _count: TransactionHistoryCountAggregateOutputType | null
    _avg: TransactionHistoryAvgAggregateOutputType | null
    _sum: TransactionHistorySumAggregateOutputType | null
    _min: TransactionHistoryMinAggregateOutputType | null
    _max: TransactionHistoryMaxAggregateOutputType | null
  }

  type GetTransactionHistoryGroupByPayload<T extends TransactionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TransactionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicineId?: boolean
    amount?: boolean
    userId?: boolean
    price?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionHistory"]>

  export type TransactionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicineId?: boolean
    amount?: boolean
    userId?: boolean
    price?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionHistory"]>

  export type TransactionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicineId?: boolean
    amount?: boolean
    userId?: boolean
    price?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionHistory"]>

  export type TransactionHistorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicineId?: boolean
    amount?: boolean
    userId?: boolean
    price?: boolean
  }

  export type TransactionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "medicineId" | "amount" | "userId" | "price", ExtArgs["result"]["transactionHistory"]>
  export type TransactionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type TransactionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type TransactionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $TransactionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      medicineId: number
      amount: number
      userId: number
      price: number
    }, ExtArgs["result"]["transactionHistory"]>
    composites: {}
  }

  type TransactionHistoryGetPayload<S extends boolean | null | undefined | TransactionHistoryDefaultArgs> = $Result.GetResult<Prisma.$TransactionHistoryPayload, S>

  type TransactionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionHistoryCountAggregateInputType | true
    }

  export interface TransactionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionHistory'], meta: { name: 'TransactionHistory' } }
    /**
     * Find zero or one TransactionHistory that matches the filter.
     * @param {TransactionHistoryFindUniqueArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionHistoryFindUniqueArgs>(args: SelectSubset<T, TransactionHistoryFindUniqueArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionHistoryFindUniqueOrThrowArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindFirstArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionHistoryFindFirstArgs>(args?: SelectSubset<T, TransactionHistoryFindFirstArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindFirstOrThrowArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionHistories
     * const transactionHistories = await prisma.transactionHistory.findMany()
     * 
     * // Get first 10 TransactionHistories
     * const transactionHistories = await prisma.transactionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionHistoryWithIdOnly = await prisma.transactionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionHistoryFindManyArgs>(args?: SelectSubset<T, TransactionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionHistory.
     * @param {TransactionHistoryCreateArgs} args - Arguments to create a TransactionHistory.
     * @example
     * // Create one TransactionHistory
     * const TransactionHistory = await prisma.transactionHistory.create({
     *   data: {
     *     // ... data to create a TransactionHistory
     *   }
     * })
     * 
     */
    create<T extends TransactionHistoryCreateArgs>(args: SelectSubset<T, TransactionHistoryCreateArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionHistories.
     * @param {TransactionHistoryCreateManyArgs} args - Arguments to create many TransactionHistories.
     * @example
     * // Create many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionHistoryCreateManyArgs>(args?: SelectSubset<T, TransactionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionHistories and returns the data saved in the database.
     * @param {TransactionHistoryCreateManyAndReturnArgs} args - Arguments to create many TransactionHistories.
     * @example
     * // Create many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionHistories and only return the `id`
     * const transactionHistoryWithIdOnly = await prisma.transactionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionHistory.
     * @param {TransactionHistoryDeleteArgs} args - Arguments to delete one TransactionHistory.
     * @example
     * // Delete one TransactionHistory
     * const TransactionHistory = await prisma.transactionHistory.delete({
     *   where: {
     *     // ... filter to delete one TransactionHistory
     *   }
     * })
     * 
     */
    delete<T extends TransactionHistoryDeleteArgs>(args: SelectSubset<T, TransactionHistoryDeleteArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionHistory.
     * @param {TransactionHistoryUpdateArgs} args - Arguments to update one TransactionHistory.
     * @example
     * // Update one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionHistoryUpdateArgs>(args: SelectSubset<T, TransactionHistoryUpdateArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionHistories.
     * @param {TransactionHistoryDeleteManyArgs} args - Arguments to filter TransactionHistories to delete.
     * @example
     * // Delete a few TransactionHistories
     * const { count } = await prisma.transactionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionHistoryDeleteManyArgs>(args?: SelectSubset<T, TransactionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionHistoryUpdateManyArgs>(args: SelectSubset<T, TransactionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionHistories and returns the data updated in the database.
     * @param {TransactionHistoryUpdateManyAndReturnArgs} args - Arguments to update many TransactionHistories.
     * @example
     * // Update many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionHistories and only return the `id`
     * const transactionHistoryWithIdOnly = await prisma.transactionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionHistory.
     * @param {TransactionHistoryUpsertArgs} args - Arguments to update or create a TransactionHistory.
     * @example
     * // Update or create a TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.upsert({
     *   create: {
     *     // ... data to create a TransactionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionHistory we want to update
     *   }
     * })
     */
    upsert<T extends TransactionHistoryUpsertArgs>(args: SelectSubset<T, TransactionHistoryUpsertArgs<ExtArgs>>): Prisma__TransactionHistoryClient<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryCountArgs} args - Arguments to filter TransactionHistories to count.
     * @example
     * // Count the number of TransactionHistories
     * const count = await prisma.transactionHistory.count({
     *   where: {
     *     // ... the filter for the TransactionHistories we want to count
     *   }
     * })
    **/
    count<T extends TransactionHistoryCountArgs>(
      args?: Subset<T, TransactionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionHistoryAggregateArgs>(args: Subset<T, TransactionHistoryAggregateArgs>): Prisma.PrismaPromise<GetTransactionHistoryAggregateType<T>>

    /**
     * Group by TransactionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TransactionHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionHistory model
   */
  readonly fields: TransactionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionHistory model
   */
  interface TransactionHistoryFieldRefs {
    readonly id: FieldRef<"TransactionHistory", 'Int'>
    readonly createdAt: FieldRef<"TransactionHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"TransactionHistory", 'DateTime'>
    readonly medicineId: FieldRef<"TransactionHistory", 'Int'>
    readonly amount: FieldRef<"TransactionHistory", 'Int'>
    readonly userId: FieldRef<"TransactionHistory", 'Int'>
    readonly price: FieldRef<"TransactionHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TransactionHistory findUnique
   */
  export type TransactionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory findUniqueOrThrow
   */
  export type TransactionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory findFirst
   */
  export type TransactionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionHistories.
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionHistories.
     */
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * TransactionHistory findFirstOrThrow
   */
  export type TransactionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistory to fetch.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionHistories.
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionHistories.
     */
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * TransactionHistory findMany
   */
  export type TransactionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TransactionHistories to fetch.
     */
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     */
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionHistories.
     */
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     */
    skip?: number
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * TransactionHistory create
   */
  export type TransactionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionHistory.
     */
    data: XOR<TransactionHistoryCreateInput, TransactionHistoryUncheckedCreateInput>
  }

  /**
   * TransactionHistory createMany
   */
  export type TransactionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionHistories.
     */
    data: TransactionHistoryCreateManyInput | TransactionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionHistory createManyAndReturn
   */
  export type TransactionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionHistories.
     */
    data: TransactionHistoryCreateManyInput | TransactionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionHistory update
   */
  export type TransactionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionHistory.
     */
    data: XOR<TransactionHistoryUpdateInput, TransactionHistoryUncheckedUpdateInput>
    /**
     * Choose, which TransactionHistory to update.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory updateMany
   */
  export type TransactionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionHistories.
     */
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TransactionHistories to update
     */
    where?: TransactionHistoryWhereInput
    /**
     * Limit how many TransactionHistories to update.
     */
    limit?: number
  }

  /**
   * TransactionHistory updateManyAndReturn
   */
  export type TransactionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TransactionHistories.
     */
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TransactionHistories to update
     */
    where?: TransactionHistoryWhereInput
    /**
     * Limit how many TransactionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionHistory upsert
   */
  export type TransactionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionHistory to update in case it exists.
     */
    where: TransactionHistoryWhereUniqueInput
    /**
     * In case the TransactionHistory found by the `where` argument doesn't exist, create a new TransactionHistory with this data.
     */
    create: XOR<TransactionHistoryCreateInput, TransactionHistoryUncheckedCreateInput>
    /**
     * In case the TransactionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionHistoryUpdateInput, TransactionHistoryUncheckedUpdateInput>
  }

  /**
   * TransactionHistory delete
   */
  export type TransactionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    /**
     * Filter which TransactionHistory to delete.
     */
    where: TransactionHistoryWhereUniqueInput
  }

  /**
   * TransactionHistory deleteMany
   */
  export type TransactionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionHistories to delete
     */
    where?: TransactionHistoryWhereInput
    /**
     * Limit how many TransactionHistories to delete.
     */
    limit?: number
  }

  /**
   * TransactionHistory without action
   */
  export type TransactionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    id: number | null
  }

  export type MedicineSumAggregateOutputType = {
    id: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    brief: string | null
    imageUrl: string | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    brief: string | null
    imageUrl: string | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    name: number
    description: number
    brief: number
    imageUrl: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    id?: true
  }

  export type MedicineSumAggregateInputType = {
    id?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brief?: true
    imageUrl?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brief?: true
    imageUrl?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brief?: true
    imageUrl?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: number
    name: string
    description: string
    brief: string
    imageUrl: string
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brief?: boolean
    imageUrl?: boolean
    transactionHistory?: boolean | Medicine$transactionHistoryArgs<ExtArgs>
    userStock?: boolean | Medicine$userStockArgs<ExtArgs>
    diseaseMedicineCorrelation?: boolean | Medicine$diseaseMedicineCorrelationArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brief?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brief?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    brief?: boolean
    imageUrl?: boolean
  }

  export type MedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "brief" | "imageUrl", ExtArgs["result"]["medicine"]>
  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionHistory?: boolean | Medicine$transactionHistoryArgs<ExtArgs>
    userStock?: boolean | Medicine$userStockArgs<ExtArgs>
    diseaseMedicineCorrelation?: boolean | Medicine$diseaseMedicineCorrelationArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      transactionHistory: Prisma.$TransactionHistoryPayload<ExtArgs>[]
      userStock: Prisma.$UserStockPayload<ExtArgs>[]
      diseaseMedicineCorrelation: Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      brief: string
      imageUrl: string
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {MedicineUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactionHistory<T extends Medicine$transactionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$transactionHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userStock<T extends Medicine$userStockArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$userStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diseaseMedicineCorrelation<T extends Medicine$diseaseMedicineCorrelationArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$diseaseMedicineCorrelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medicine model
   */
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'Int'>
    readonly name: FieldRef<"Medicine", 'String'>
    readonly description: FieldRef<"Medicine", 'String'>
    readonly brief: FieldRef<"Medicine", 'String'>
    readonly imageUrl: FieldRef<"Medicine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine updateManyAndReturn
   */
  export type MedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number
  }

  /**
   * Medicine.transactionHistory
   */
  export type Medicine$transactionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     */
    select?: TransactionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionHistory
     */
    omit?: TransactionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionHistoryInclude<ExtArgs> | null
    where?: TransactionHistoryWhereInput
    orderBy?: TransactionHistoryOrderByWithRelationInput | TransactionHistoryOrderByWithRelationInput[]
    cursor?: TransactionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionHistoryScalarFieldEnum | TransactionHistoryScalarFieldEnum[]
  }

  /**
   * Medicine.userStock
   */
  export type Medicine$userStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    where?: UserStockWhereInput
    orderBy?: UserStockOrderByWithRelationInput | UserStockOrderByWithRelationInput[]
    cursor?: UserStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStockScalarFieldEnum | UserStockScalarFieldEnum[]
  }

  /**
   * Medicine.diseaseMedicineCorrelation
   */
  export type Medicine$diseaseMedicineCorrelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    where?: DiseaseMedicineCorrelationWhereInput
    orderBy?: DiseaseMedicineCorrelationOrderByWithRelationInput | DiseaseMedicineCorrelationOrderByWithRelationInput[]
    cursor?: DiseaseMedicineCorrelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiseaseMedicineCorrelationScalarFieldEnum | DiseaseMedicineCorrelationScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model UserStock
   */

  export type AggregateUserStock = {
    _count: UserStockCountAggregateOutputType | null
    _avg: UserStockAvgAggregateOutputType | null
    _sum: UserStockSumAggregateOutputType | null
    _min: UserStockMinAggregateOutputType | null
    _max: UserStockMaxAggregateOutputType | null
  }

  export type UserStockAvgAggregateOutputType = {
    id: number | null
    medicineId: number | null
    total: number | null
    sold: number | null
    userId: number | null
  }

  export type UserStockSumAggregateOutputType = {
    id: number | null
    medicineId: number | null
    total: number | null
    sold: number | null
    userId: number | null
  }

  export type UserStockMinAggregateOutputType = {
    id: number | null
    medicineId: number | null
    total: number | null
    sold: number | null
    userId: number | null
  }

  export type UserStockMaxAggregateOutputType = {
    id: number | null
    medicineId: number | null
    total: number | null
    sold: number | null
    userId: number | null
  }

  export type UserStockCountAggregateOutputType = {
    id: number
    medicineId: number
    total: number
    sold: number
    userId: number
    _all: number
  }


  export type UserStockAvgAggregateInputType = {
    id?: true
    medicineId?: true
    total?: true
    sold?: true
    userId?: true
  }

  export type UserStockSumAggregateInputType = {
    id?: true
    medicineId?: true
    total?: true
    sold?: true
    userId?: true
  }

  export type UserStockMinAggregateInputType = {
    id?: true
    medicineId?: true
    total?: true
    sold?: true
    userId?: true
  }

  export type UserStockMaxAggregateInputType = {
    id?: true
    medicineId?: true
    total?: true
    sold?: true
    userId?: true
  }

  export type UserStockCountAggregateInputType = {
    id?: true
    medicineId?: true
    total?: true
    sold?: true
    userId?: true
    _all?: true
  }

  export type UserStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStock to aggregate.
     */
    where?: UserStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStocks to fetch.
     */
    orderBy?: UserStockOrderByWithRelationInput | UserStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStocks
    **/
    _count?: true | UserStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStockMaxAggregateInputType
  }

  export type GetUserStockAggregateType<T extends UserStockAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStock[P]>
      : GetScalarType<T[P], AggregateUserStock[P]>
  }




  export type UserStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStockWhereInput
    orderBy?: UserStockOrderByWithAggregationInput | UserStockOrderByWithAggregationInput[]
    by: UserStockScalarFieldEnum[] | UserStockScalarFieldEnum
    having?: UserStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStockCountAggregateInputType | true
    _avg?: UserStockAvgAggregateInputType
    _sum?: UserStockSumAggregateInputType
    _min?: UserStockMinAggregateInputType
    _max?: UserStockMaxAggregateInputType
  }

  export type UserStockGroupByOutputType = {
    id: number
    medicineId: number
    total: number
    sold: number
    userId: number
    _count: UserStockCountAggregateOutputType | null
    _avg: UserStockAvgAggregateOutputType | null
    _sum: UserStockSumAggregateOutputType | null
    _min: UserStockMinAggregateOutputType | null
    _max: UserStockMaxAggregateOutputType | null
  }

  type GetUserStockGroupByPayload<T extends UserStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStockGroupByOutputType[P]>
            : GetScalarType<T[P], UserStockGroupByOutputType[P]>
        }
      >
    >


  export type UserStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    total?: boolean
    sold?: boolean
    userId?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    batches?: boolean | UserStock$batchesArgs<ExtArgs>
    forecastedUserStock?: boolean | UserStock$forecastedUserStockArgs<ExtArgs>
    _count?: boolean | UserStockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStock"]>

  export type UserStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    total?: boolean
    sold?: boolean
    userId?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStock"]>

  export type UserStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    total?: boolean
    sold?: boolean
    userId?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStock"]>

  export type UserStockSelectScalar = {
    id?: boolean
    medicineId?: boolean
    total?: boolean
    sold?: boolean
    userId?: boolean
  }

  export type UserStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicineId" | "total" | "sold" | "userId", ExtArgs["result"]["userStock"]>
  export type UserStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    batches?: boolean | UserStock$batchesArgs<ExtArgs>
    forecastedUserStock?: boolean | UserStock$forecastedUserStockArgs<ExtArgs>
    _count?: boolean | UserStockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStock"
    objects: {
      medicine: Prisma.$MedicinePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      batches: Prisma.$StockBatchPayload<ExtArgs>[]
      forecastedUserStock: Prisma.$ForecastedUserStockPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicineId: number
      total: number
      sold: number
      userId: number
    }, ExtArgs["result"]["userStock"]>
    composites: {}
  }

  type UserStockGetPayload<S extends boolean | null | undefined | UserStockDefaultArgs> = $Result.GetResult<Prisma.$UserStockPayload, S>

  type UserStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStockCountAggregateInputType | true
    }

  export interface UserStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStock'], meta: { name: 'UserStock' } }
    /**
     * Find zero or one UserStock that matches the filter.
     * @param {UserStockFindUniqueArgs} args - Arguments to find a UserStock
     * @example
     * // Get one UserStock
     * const userStock = await prisma.userStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStockFindUniqueArgs>(args: SelectSubset<T, UserStockFindUniqueArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStockFindUniqueOrThrowArgs} args - Arguments to find a UserStock
     * @example
     * // Get one UserStock
     * const userStock = await prisma.userStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStockFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockFindFirstArgs} args - Arguments to find a UserStock
     * @example
     * // Get one UserStock
     * const userStock = await prisma.userStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStockFindFirstArgs>(args?: SelectSubset<T, UserStockFindFirstArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockFindFirstOrThrowArgs} args - Arguments to find a UserStock
     * @example
     * // Get one UserStock
     * const userStock = await prisma.userStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStockFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStocks
     * const userStocks = await prisma.userStock.findMany()
     * 
     * // Get first 10 UserStocks
     * const userStocks = await prisma.userStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStockWithIdOnly = await prisma.userStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStockFindManyArgs>(args?: SelectSubset<T, UserStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStock.
     * @param {UserStockCreateArgs} args - Arguments to create a UserStock.
     * @example
     * // Create one UserStock
     * const UserStock = await prisma.userStock.create({
     *   data: {
     *     // ... data to create a UserStock
     *   }
     * })
     * 
     */
    create<T extends UserStockCreateArgs>(args: SelectSubset<T, UserStockCreateArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStocks.
     * @param {UserStockCreateManyArgs} args - Arguments to create many UserStocks.
     * @example
     * // Create many UserStocks
     * const userStock = await prisma.userStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStockCreateManyArgs>(args?: SelectSubset<T, UserStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStocks and returns the data saved in the database.
     * @param {UserStockCreateManyAndReturnArgs} args - Arguments to create many UserStocks.
     * @example
     * // Create many UserStocks
     * const userStock = await prisma.userStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStocks and only return the `id`
     * const userStockWithIdOnly = await prisma.userStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStockCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStock.
     * @param {UserStockDeleteArgs} args - Arguments to delete one UserStock.
     * @example
     * // Delete one UserStock
     * const UserStock = await prisma.userStock.delete({
     *   where: {
     *     // ... filter to delete one UserStock
     *   }
     * })
     * 
     */
    delete<T extends UserStockDeleteArgs>(args: SelectSubset<T, UserStockDeleteArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStock.
     * @param {UserStockUpdateArgs} args - Arguments to update one UserStock.
     * @example
     * // Update one UserStock
     * const userStock = await prisma.userStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStockUpdateArgs>(args: SelectSubset<T, UserStockUpdateArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStocks.
     * @param {UserStockDeleteManyArgs} args - Arguments to filter UserStocks to delete.
     * @example
     * // Delete a few UserStocks
     * const { count } = await prisma.userStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStockDeleteManyArgs>(args?: SelectSubset<T, UserStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStocks
     * const userStock = await prisma.userStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStockUpdateManyArgs>(args: SelectSubset<T, UserStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStocks and returns the data updated in the database.
     * @param {UserStockUpdateManyAndReturnArgs} args - Arguments to update many UserStocks.
     * @example
     * // Update many UserStocks
     * const userStock = await prisma.userStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStocks and only return the `id`
     * const userStockWithIdOnly = await prisma.userStock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserStockUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStock.
     * @param {UserStockUpsertArgs} args - Arguments to update or create a UserStock.
     * @example
     * // Update or create a UserStock
     * const userStock = await prisma.userStock.upsert({
     *   create: {
     *     // ... data to create a UserStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStock we want to update
     *   }
     * })
     */
    upsert<T extends UserStockUpsertArgs>(args: SelectSubset<T, UserStockUpsertArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockCountArgs} args - Arguments to filter UserStocks to count.
     * @example
     * // Count the number of UserStocks
     * const count = await prisma.userStock.count({
     *   where: {
     *     // ... the filter for the UserStocks we want to count
     *   }
     * })
    **/
    count<T extends UserStockCountArgs>(
      args?: Subset<T, UserStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStockAggregateArgs>(args: Subset<T, UserStockAggregateArgs>): Prisma.PrismaPromise<GetUserStockAggregateType<T>>

    /**
     * Group by UserStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStockGroupByArgs['orderBy'] }
        : { orderBy?: UserStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStock model
   */
  readonly fields: UserStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batches<T extends UserStock$batchesArgs<ExtArgs> = {}>(args?: Subset<T, UserStock$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forecastedUserStock<T extends UserStock$forecastedUserStockArgs<ExtArgs> = {}>(args?: Subset<T, UserStock$forecastedUserStockArgs<ExtArgs>>): Prisma__ForecastedUserStockClient<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStock model
   */
  interface UserStockFieldRefs {
    readonly id: FieldRef<"UserStock", 'Int'>
    readonly medicineId: FieldRef<"UserStock", 'Int'>
    readonly total: FieldRef<"UserStock", 'Int'>
    readonly sold: FieldRef<"UserStock", 'Int'>
    readonly userId: FieldRef<"UserStock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserStock findUnique
   */
  export type UserStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    /**
     * Filter, which UserStock to fetch.
     */
    where: UserStockWhereUniqueInput
  }

  /**
   * UserStock findUniqueOrThrow
   */
  export type UserStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    /**
     * Filter, which UserStock to fetch.
     */
    where: UserStockWhereUniqueInput
  }

  /**
   * UserStock findFirst
   */
  export type UserStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    /**
     * Filter, which UserStock to fetch.
     */
    where?: UserStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStocks to fetch.
     */
    orderBy?: UserStockOrderByWithRelationInput | UserStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStocks.
     */
    cursor?: UserStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStocks.
     */
    distinct?: UserStockScalarFieldEnum | UserStockScalarFieldEnum[]
  }

  /**
   * UserStock findFirstOrThrow
   */
  export type UserStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    /**
     * Filter, which UserStock to fetch.
     */
    where?: UserStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStocks to fetch.
     */
    orderBy?: UserStockOrderByWithRelationInput | UserStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStocks.
     */
    cursor?: UserStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStocks.
     */
    distinct?: UserStockScalarFieldEnum | UserStockScalarFieldEnum[]
  }

  /**
   * UserStock findMany
   */
  export type UserStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    /**
     * Filter, which UserStocks to fetch.
     */
    where?: UserStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStocks to fetch.
     */
    orderBy?: UserStockOrderByWithRelationInput | UserStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStocks.
     */
    cursor?: UserStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStocks.
     */
    skip?: number
    distinct?: UserStockScalarFieldEnum | UserStockScalarFieldEnum[]
  }

  /**
   * UserStock create
   */
  export type UserStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStock.
     */
    data: XOR<UserStockCreateInput, UserStockUncheckedCreateInput>
  }

  /**
   * UserStock createMany
   */
  export type UserStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStocks.
     */
    data: UserStockCreateManyInput | UserStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStock createManyAndReturn
   */
  export type UserStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * The data used to create many UserStocks.
     */
    data: UserStockCreateManyInput | UserStockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStock update
   */
  export type UserStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStock.
     */
    data: XOR<UserStockUpdateInput, UserStockUncheckedUpdateInput>
    /**
     * Choose, which UserStock to update.
     */
    where: UserStockWhereUniqueInput
  }

  /**
   * UserStock updateMany
   */
  export type UserStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStocks.
     */
    data: XOR<UserStockUpdateManyMutationInput, UserStockUncheckedUpdateManyInput>
    /**
     * Filter which UserStocks to update
     */
    where?: UserStockWhereInput
    /**
     * Limit how many UserStocks to update.
     */
    limit?: number
  }

  /**
   * UserStock updateManyAndReturn
   */
  export type UserStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * The data used to update UserStocks.
     */
    data: XOR<UserStockUpdateManyMutationInput, UserStockUncheckedUpdateManyInput>
    /**
     * Filter which UserStocks to update
     */
    where?: UserStockWhereInput
    /**
     * Limit how many UserStocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStock upsert
   */
  export type UserStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStock to update in case it exists.
     */
    where: UserStockWhereUniqueInput
    /**
     * In case the UserStock found by the `where` argument doesn't exist, create a new UserStock with this data.
     */
    create: XOR<UserStockCreateInput, UserStockUncheckedCreateInput>
    /**
     * In case the UserStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStockUpdateInput, UserStockUncheckedUpdateInput>
  }

  /**
   * UserStock delete
   */
  export type UserStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
    /**
     * Filter which UserStock to delete.
     */
    where: UserStockWhereUniqueInput
  }

  /**
   * UserStock deleteMany
   */
  export type UserStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStocks to delete
     */
    where?: UserStockWhereInput
    /**
     * Limit how many UserStocks to delete.
     */
    limit?: number
  }

  /**
   * UserStock.batches
   */
  export type UserStock$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    where?: StockBatchWhereInput
    orderBy?: StockBatchOrderByWithRelationInput | StockBatchOrderByWithRelationInput[]
    cursor?: StockBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockBatchScalarFieldEnum | StockBatchScalarFieldEnum[]
  }

  /**
   * UserStock.forecastedUserStock
   */
  export type UserStock$forecastedUserStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    where?: ForecastedUserStockWhereInput
  }

  /**
   * UserStock without action
   */
  export type UserStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStock
     */
    select?: UserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStock
     */
    omit?: UserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockInclude<ExtArgs> | null
  }


  /**
   * Model StockBatch
   */

  export type AggregateStockBatch = {
    _count: StockBatchCountAggregateOutputType | null
    _avg: StockBatchAvgAggregateOutputType | null
    _sum: StockBatchSumAggregateOutputType | null
    _min: StockBatchMinAggregateOutputType | null
    _max: StockBatchMaxAggregateOutputType | null
  }

  export type StockBatchAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userStockId: number | null
  }

  export type StockBatchSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userStockId: number | null
  }

  export type StockBatchMinAggregateOutputType = {
    id: number | null
    expirationDate: Date | null
    amount: number | null
    userStockId: number | null
  }

  export type StockBatchMaxAggregateOutputType = {
    id: number | null
    expirationDate: Date | null
    amount: number | null
    userStockId: number | null
  }

  export type StockBatchCountAggregateOutputType = {
    id: number
    expirationDate: number
    amount: number
    userStockId: number
    _all: number
  }


  export type StockBatchAvgAggregateInputType = {
    id?: true
    amount?: true
    userStockId?: true
  }

  export type StockBatchSumAggregateInputType = {
    id?: true
    amount?: true
    userStockId?: true
  }

  export type StockBatchMinAggregateInputType = {
    id?: true
    expirationDate?: true
    amount?: true
    userStockId?: true
  }

  export type StockBatchMaxAggregateInputType = {
    id?: true
    expirationDate?: true
    amount?: true
    userStockId?: true
  }

  export type StockBatchCountAggregateInputType = {
    id?: true
    expirationDate?: true
    amount?: true
    userStockId?: true
    _all?: true
  }

  export type StockBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockBatch to aggregate.
     */
    where?: StockBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockBatches to fetch.
     */
    orderBy?: StockBatchOrderByWithRelationInput | StockBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockBatches
    **/
    _count?: true | StockBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockBatchMaxAggregateInputType
  }

  export type GetStockBatchAggregateType<T extends StockBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateStockBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockBatch[P]>
      : GetScalarType<T[P], AggregateStockBatch[P]>
  }




  export type StockBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockBatchWhereInput
    orderBy?: StockBatchOrderByWithAggregationInput | StockBatchOrderByWithAggregationInput[]
    by: StockBatchScalarFieldEnum[] | StockBatchScalarFieldEnum
    having?: StockBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockBatchCountAggregateInputType | true
    _avg?: StockBatchAvgAggregateInputType
    _sum?: StockBatchSumAggregateInputType
    _min?: StockBatchMinAggregateInputType
    _max?: StockBatchMaxAggregateInputType
  }

  export type StockBatchGroupByOutputType = {
    id: number
    expirationDate: Date
    amount: number
    userStockId: number
    _count: StockBatchCountAggregateOutputType | null
    _avg: StockBatchAvgAggregateOutputType | null
    _sum: StockBatchSumAggregateOutputType | null
    _min: StockBatchMinAggregateOutputType | null
    _max: StockBatchMaxAggregateOutputType | null
  }

  type GetStockBatchGroupByPayload<T extends StockBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockBatchGroupByOutputType[P]>
            : GetScalarType<T[P], StockBatchGroupByOutputType[P]>
        }
      >
    >


  export type StockBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expirationDate?: boolean
    amount?: boolean
    userStockId?: boolean
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockBatch"]>

  export type StockBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expirationDate?: boolean
    amount?: boolean
    userStockId?: boolean
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockBatch"]>

  export type StockBatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expirationDate?: boolean
    amount?: boolean
    userStockId?: boolean
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockBatch"]>

  export type StockBatchSelectScalar = {
    id?: boolean
    expirationDate?: boolean
    amount?: boolean
    userStockId?: boolean
  }

  export type StockBatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expirationDate" | "amount" | "userStockId", ExtArgs["result"]["stockBatch"]>
  export type StockBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }
  export type StockBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }
  export type StockBatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }

  export type $StockBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockBatch"
    objects: {
      userStock: Prisma.$UserStockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      expirationDate: Date
      amount: number
      userStockId: number
    }, ExtArgs["result"]["stockBatch"]>
    composites: {}
  }

  type StockBatchGetPayload<S extends boolean | null | undefined | StockBatchDefaultArgs> = $Result.GetResult<Prisma.$StockBatchPayload, S>

  type StockBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockBatchCountAggregateInputType | true
    }

  export interface StockBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockBatch'], meta: { name: 'StockBatch' } }
    /**
     * Find zero or one StockBatch that matches the filter.
     * @param {StockBatchFindUniqueArgs} args - Arguments to find a StockBatch
     * @example
     * // Get one StockBatch
     * const stockBatch = await prisma.stockBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockBatchFindUniqueArgs>(args: SelectSubset<T, StockBatchFindUniqueArgs<ExtArgs>>): Prisma__StockBatchClient<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockBatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockBatchFindUniqueOrThrowArgs} args - Arguments to find a StockBatch
     * @example
     * // Get one StockBatch
     * const stockBatch = await prisma.stockBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, StockBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockBatchClient<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBatchFindFirstArgs} args - Arguments to find a StockBatch
     * @example
     * // Get one StockBatch
     * const stockBatch = await prisma.stockBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockBatchFindFirstArgs>(args?: SelectSubset<T, StockBatchFindFirstArgs<ExtArgs>>): Prisma__StockBatchClient<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBatchFindFirstOrThrowArgs} args - Arguments to find a StockBatch
     * @example
     * // Get one StockBatch
     * const stockBatch = await prisma.stockBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, StockBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockBatchClient<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockBatches
     * const stockBatches = await prisma.stockBatch.findMany()
     * 
     * // Get first 10 StockBatches
     * const stockBatches = await prisma.stockBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockBatchWithIdOnly = await prisma.stockBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockBatchFindManyArgs>(args?: SelectSubset<T, StockBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockBatch.
     * @param {StockBatchCreateArgs} args - Arguments to create a StockBatch.
     * @example
     * // Create one StockBatch
     * const StockBatch = await prisma.stockBatch.create({
     *   data: {
     *     // ... data to create a StockBatch
     *   }
     * })
     * 
     */
    create<T extends StockBatchCreateArgs>(args: SelectSubset<T, StockBatchCreateArgs<ExtArgs>>): Prisma__StockBatchClient<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockBatches.
     * @param {StockBatchCreateManyArgs} args - Arguments to create many StockBatches.
     * @example
     * // Create many StockBatches
     * const stockBatch = await prisma.stockBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockBatchCreateManyArgs>(args?: SelectSubset<T, StockBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockBatches and returns the data saved in the database.
     * @param {StockBatchCreateManyAndReturnArgs} args - Arguments to create many StockBatches.
     * @example
     * // Create many StockBatches
     * const stockBatch = await prisma.stockBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockBatches and only return the `id`
     * const stockBatchWithIdOnly = await prisma.stockBatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, StockBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockBatch.
     * @param {StockBatchDeleteArgs} args - Arguments to delete one StockBatch.
     * @example
     * // Delete one StockBatch
     * const StockBatch = await prisma.stockBatch.delete({
     *   where: {
     *     // ... filter to delete one StockBatch
     *   }
     * })
     * 
     */
    delete<T extends StockBatchDeleteArgs>(args: SelectSubset<T, StockBatchDeleteArgs<ExtArgs>>): Prisma__StockBatchClient<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockBatch.
     * @param {StockBatchUpdateArgs} args - Arguments to update one StockBatch.
     * @example
     * // Update one StockBatch
     * const stockBatch = await prisma.stockBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockBatchUpdateArgs>(args: SelectSubset<T, StockBatchUpdateArgs<ExtArgs>>): Prisma__StockBatchClient<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockBatches.
     * @param {StockBatchDeleteManyArgs} args - Arguments to filter StockBatches to delete.
     * @example
     * // Delete a few StockBatches
     * const { count } = await prisma.stockBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockBatchDeleteManyArgs>(args?: SelectSubset<T, StockBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockBatches
     * const stockBatch = await prisma.stockBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockBatchUpdateManyArgs>(args: SelectSubset<T, StockBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockBatches and returns the data updated in the database.
     * @param {StockBatchUpdateManyAndReturnArgs} args - Arguments to update many StockBatches.
     * @example
     * // Update many StockBatches
     * const stockBatch = await prisma.stockBatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockBatches and only return the `id`
     * const stockBatchWithIdOnly = await prisma.stockBatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockBatchUpdateManyAndReturnArgs>(args: SelectSubset<T, StockBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockBatch.
     * @param {StockBatchUpsertArgs} args - Arguments to update or create a StockBatch.
     * @example
     * // Update or create a StockBatch
     * const stockBatch = await prisma.stockBatch.upsert({
     *   create: {
     *     // ... data to create a StockBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockBatch we want to update
     *   }
     * })
     */
    upsert<T extends StockBatchUpsertArgs>(args: SelectSubset<T, StockBatchUpsertArgs<ExtArgs>>): Prisma__StockBatchClient<$Result.GetResult<Prisma.$StockBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBatchCountArgs} args - Arguments to filter StockBatches to count.
     * @example
     * // Count the number of StockBatches
     * const count = await prisma.stockBatch.count({
     *   where: {
     *     // ... the filter for the StockBatches we want to count
     *   }
     * })
    **/
    count<T extends StockBatchCountArgs>(
      args?: Subset<T, StockBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockBatchAggregateArgs>(args: Subset<T, StockBatchAggregateArgs>): Prisma.PrismaPromise<GetStockBatchAggregateType<T>>

    /**
     * Group by StockBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockBatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockBatchGroupByArgs['orderBy'] }
        : { orderBy?: StockBatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockBatch model
   */
  readonly fields: StockBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userStock<T extends UserStockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserStockDefaultArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockBatch model
   */
  interface StockBatchFieldRefs {
    readonly id: FieldRef<"StockBatch", 'Int'>
    readonly expirationDate: FieldRef<"StockBatch", 'DateTime'>
    readonly amount: FieldRef<"StockBatch", 'Int'>
    readonly userStockId: FieldRef<"StockBatch", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StockBatch findUnique
   */
  export type StockBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    /**
     * Filter, which StockBatch to fetch.
     */
    where: StockBatchWhereUniqueInput
  }

  /**
   * StockBatch findUniqueOrThrow
   */
  export type StockBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    /**
     * Filter, which StockBatch to fetch.
     */
    where: StockBatchWhereUniqueInput
  }

  /**
   * StockBatch findFirst
   */
  export type StockBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    /**
     * Filter, which StockBatch to fetch.
     */
    where?: StockBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockBatches to fetch.
     */
    orderBy?: StockBatchOrderByWithRelationInput | StockBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockBatches.
     */
    cursor?: StockBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockBatches.
     */
    distinct?: StockBatchScalarFieldEnum | StockBatchScalarFieldEnum[]
  }

  /**
   * StockBatch findFirstOrThrow
   */
  export type StockBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    /**
     * Filter, which StockBatch to fetch.
     */
    where?: StockBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockBatches to fetch.
     */
    orderBy?: StockBatchOrderByWithRelationInput | StockBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockBatches.
     */
    cursor?: StockBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockBatches.
     */
    distinct?: StockBatchScalarFieldEnum | StockBatchScalarFieldEnum[]
  }

  /**
   * StockBatch findMany
   */
  export type StockBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    /**
     * Filter, which StockBatches to fetch.
     */
    where?: StockBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockBatches to fetch.
     */
    orderBy?: StockBatchOrderByWithRelationInput | StockBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockBatches.
     */
    cursor?: StockBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockBatches.
     */
    skip?: number
    distinct?: StockBatchScalarFieldEnum | StockBatchScalarFieldEnum[]
  }

  /**
   * StockBatch create
   */
  export type StockBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a StockBatch.
     */
    data: XOR<StockBatchCreateInput, StockBatchUncheckedCreateInput>
  }

  /**
   * StockBatch createMany
   */
  export type StockBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockBatches.
     */
    data: StockBatchCreateManyInput | StockBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockBatch createManyAndReturn
   */
  export type StockBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * The data used to create many StockBatches.
     */
    data: StockBatchCreateManyInput | StockBatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockBatch update
   */
  export type StockBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a StockBatch.
     */
    data: XOR<StockBatchUpdateInput, StockBatchUncheckedUpdateInput>
    /**
     * Choose, which StockBatch to update.
     */
    where: StockBatchWhereUniqueInput
  }

  /**
   * StockBatch updateMany
   */
  export type StockBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockBatches.
     */
    data: XOR<StockBatchUpdateManyMutationInput, StockBatchUncheckedUpdateManyInput>
    /**
     * Filter which StockBatches to update
     */
    where?: StockBatchWhereInput
    /**
     * Limit how many StockBatches to update.
     */
    limit?: number
  }

  /**
   * StockBatch updateManyAndReturn
   */
  export type StockBatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * The data used to update StockBatches.
     */
    data: XOR<StockBatchUpdateManyMutationInput, StockBatchUncheckedUpdateManyInput>
    /**
     * Filter which StockBatches to update
     */
    where?: StockBatchWhereInput
    /**
     * Limit how many StockBatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockBatch upsert
   */
  export type StockBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the StockBatch to update in case it exists.
     */
    where: StockBatchWhereUniqueInput
    /**
     * In case the StockBatch found by the `where` argument doesn't exist, create a new StockBatch with this data.
     */
    create: XOR<StockBatchCreateInput, StockBatchUncheckedCreateInput>
    /**
     * In case the StockBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockBatchUpdateInput, StockBatchUncheckedUpdateInput>
  }

  /**
   * StockBatch delete
   */
  export type StockBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
    /**
     * Filter which StockBatch to delete.
     */
    where: StockBatchWhereUniqueInput
  }

  /**
   * StockBatch deleteMany
   */
  export type StockBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockBatches to delete
     */
    where?: StockBatchWhereInput
    /**
     * Limit how many StockBatches to delete.
     */
    limit?: number
  }

  /**
   * StockBatch without action
   */
  export type StockBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockBatch
     */
    select?: StockBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockBatch
     */
    omit?: StockBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockBatchInclude<ExtArgs> | null
  }


  /**
   * Model ForecastedUserStock
   */

  export type AggregateForecastedUserStock = {
    _count: ForecastedUserStockCountAggregateOutputType | null
    _avg: ForecastedUserStockAvgAggregateOutputType | null
    _sum: ForecastedUserStockSumAggregateOutputType | null
    _min: ForecastedUserStockMinAggregateOutputType | null
    _max: ForecastedUserStockMaxAggregateOutputType | null
  }

  export type ForecastedUserStockAvgAggregateOutputType = {
    id: number | null
    userStockId: number | null
    requiredStock: number | null
    percentage: number | null
  }

  export type ForecastedUserStockSumAggregateOutputType = {
    id: number | null
    userStockId: number | null
    requiredStock: number | null
    percentage: number | null
  }

  export type ForecastedUserStockMinAggregateOutputType = {
    id: number | null
    userStockId: number | null
    requiredStock: number | null
    percentage: number | null
    stockoutDate: Date | null
  }

  export type ForecastedUserStockMaxAggregateOutputType = {
    id: number | null
    userStockId: number | null
    requiredStock: number | null
    percentage: number | null
    stockoutDate: Date | null
  }

  export type ForecastedUserStockCountAggregateOutputType = {
    id: number
    userStockId: number
    requiredStock: number
    percentage: number
    stockoutDate: number
    _all: number
  }


  export type ForecastedUserStockAvgAggregateInputType = {
    id?: true
    userStockId?: true
    requiredStock?: true
    percentage?: true
  }

  export type ForecastedUserStockSumAggregateInputType = {
    id?: true
    userStockId?: true
    requiredStock?: true
    percentage?: true
  }

  export type ForecastedUserStockMinAggregateInputType = {
    id?: true
    userStockId?: true
    requiredStock?: true
    percentage?: true
    stockoutDate?: true
  }

  export type ForecastedUserStockMaxAggregateInputType = {
    id?: true
    userStockId?: true
    requiredStock?: true
    percentage?: true
    stockoutDate?: true
  }

  export type ForecastedUserStockCountAggregateInputType = {
    id?: true
    userStockId?: true
    requiredStock?: true
    percentage?: true
    stockoutDate?: true
    _all?: true
  }

  export type ForecastedUserStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForecastedUserStock to aggregate.
     */
    where?: ForecastedUserStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastedUserStocks to fetch.
     */
    orderBy?: ForecastedUserStockOrderByWithRelationInput | ForecastedUserStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForecastedUserStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastedUserStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastedUserStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForecastedUserStocks
    **/
    _count?: true | ForecastedUserStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForecastedUserStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForecastedUserStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForecastedUserStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForecastedUserStockMaxAggregateInputType
  }

  export type GetForecastedUserStockAggregateType<T extends ForecastedUserStockAggregateArgs> = {
        [P in keyof T & keyof AggregateForecastedUserStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForecastedUserStock[P]>
      : GetScalarType<T[P], AggregateForecastedUserStock[P]>
  }




  export type ForecastedUserStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastedUserStockWhereInput
    orderBy?: ForecastedUserStockOrderByWithAggregationInput | ForecastedUserStockOrderByWithAggregationInput[]
    by: ForecastedUserStockScalarFieldEnum[] | ForecastedUserStockScalarFieldEnum
    having?: ForecastedUserStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForecastedUserStockCountAggregateInputType | true
    _avg?: ForecastedUserStockAvgAggregateInputType
    _sum?: ForecastedUserStockSumAggregateInputType
    _min?: ForecastedUserStockMinAggregateInputType
    _max?: ForecastedUserStockMaxAggregateInputType
  }

  export type ForecastedUserStockGroupByOutputType = {
    id: number
    userStockId: number
    requiredStock: number
    percentage: number
    stockoutDate: Date
    _count: ForecastedUserStockCountAggregateOutputType | null
    _avg: ForecastedUserStockAvgAggregateOutputType | null
    _sum: ForecastedUserStockSumAggregateOutputType | null
    _min: ForecastedUserStockMinAggregateOutputType | null
    _max: ForecastedUserStockMaxAggregateOutputType | null
  }

  type GetForecastedUserStockGroupByPayload<T extends ForecastedUserStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForecastedUserStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForecastedUserStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForecastedUserStockGroupByOutputType[P]>
            : GetScalarType<T[P], ForecastedUserStockGroupByOutputType[P]>
        }
      >
    >


  export type ForecastedUserStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userStockId?: boolean
    requiredStock?: boolean
    percentage?: boolean
    stockoutDate?: boolean
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastedUserStock"]>

  export type ForecastedUserStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userStockId?: boolean
    requiredStock?: boolean
    percentage?: boolean
    stockoutDate?: boolean
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastedUserStock"]>

  export type ForecastedUserStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userStockId?: boolean
    requiredStock?: boolean
    percentage?: boolean
    stockoutDate?: boolean
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastedUserStock"]>

  export type ForecastedUserStockSelectScalar = {
    id?: boolean
    userStockId?: boolean
    requiredStock?: boolean
    percentage?: boolean
    stockoutDate?: boolean
  }

  export type ForecastedUserStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userStockId" | "requiredStock" | "percentage" | "stockoutDate", ExtArgs["result"]["forecastedUserStock"]>
  export type ForecastedUserStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }
  export type ForecastedUserStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }
  export type ForecastedUserStockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStock?: boolean | UserStockDefaultArgs<ExtArgs>
  }

  export type $ForecastedUserStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForecastedUserStock"
    objects: {
      userStock: Prisma.$UserStockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userStockId: number
      requiredStock: number
      percentage: number
      stockoutDate: Date
    }, ExtArgs["result"]["forecastedUserStock"]>
    composites: {}
  }

  type ForecastedUserStockGetPayload<S extends boolean | null | undefined | ForecastedUserStockDefaultArgs> = $Result.GetResult<Prisma.$ForecastedUserStockPayload, S>

  type ForecastedUserStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForecastedUserStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForecastedUserStockCountAggregateInputType | true
    }

  export interface ForecastedUserStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForecastedUserStock'], meta: { name: 'ForecastedUserStock' } }
    /**
     * Find zero or one ForecastedUserStock that matches the filter.
     * @param {ForecastedUserStockFindUniqueArgs} args - Arguments to find a ForecastedUserStock
     * @example
     * // Get one ForecastedUserStock
     * const forecastedUserStock = await prisma.forecastedUserStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForecastedUserStockFindUniqueArgs>(args: SelectSubset<T, ForecastedUserStockFindUniqueArgs<ExtArgs>>): Prisma__ForecastedUserStockClient<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForecastedUserStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForecastedUserStockFindUniqueOrThrowArgs} args - Arguments to find a ForecastedUserStock
     * @example
     * // Get one ForecastedUserStock
     * const forecastedUserStock = await prisma.forecastedUserStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForecastedUserStockFindUniqueOrThrowArgs>(args: SelectSubset<T, ForecastedUserStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForecastedUserStockClient<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForecastedUserStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastedUserStockFindFirstArgs} args - Arguments to find a ForecastedUserStock
     * @example
     * // Get one ForecastedUserStock
     * const forecastedUserStock = await prisma.forecastedUserStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForecastedUserStockFindFirstArgs>(args?: SelectSubset<T, ForecastedUserStockFindFirstArgs<ExtArgs>>): Prisma__ForecastedUserStockClient<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForecastedUserStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastedUserStockFindFirstOrThrowArgs} args - Arguments to find a ForecastedUserStock
     * @example
     * // Get one ForecastedUserStock
     * const forecastedUserStock = await prisma.forecastedUserStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForecastedUserStockFindFirstOrThrowArgs>(args?: SelectSubset<T, ForecastedUserStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForecastedUserStockClient<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForecastedUserStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastedUserStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForecastedUserStocks
     * const forecastedUserStocks = await prisma.forecastedUserStock.findMany()
     * 
     * // Get first 10 ForecastedUserStocks
     * const forecastedUserStocks = await prisma.forecastedUserStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forecastedUserStockWithIdOnly = await prisma.forecastedUserStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForecastedUserStockFindManyArgs>(args?: SelectSubset<T, ForecastedUserStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForecastedUserStock.
     * @param {ForecastedUserStockCreateArgs} args - Arguments to create a ForecastedUserStock.
     * @example
     * // Create one ForecastedUserStock
     * const ForecastedUserStock = await prisma.forecastedUserStock.create({
     *   data: {
     *     // ... data to create a ForecastedUserStock
     *   }
     * })
     * 
     */
    create<T extends ForecastedUserStockCreateArgs>(args: SelectSubset<T, ForecastedUserStockCreateArgs<ExtArgs>>): Prisma__ForecastedUserStockClient<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForecastedUserStocks.
     * @param {ForecastedUserStockCreateManyArgs} args - Arguments to create many ForecastedUserStocks.
     * @example
     * // Create many ForecastedUserStocks
     * const forecastedUserStock = await prisma.forecastedUserStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForecastedUserStockCreateManyArgs>(args?: SelectSubset<T, ForecastedUserStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForecastedUserStocks and returns the data saved in the database.
     * @param {ForecastedUserStockCreateManyAndReturnArgs} args - Arguments to create many ForecastedUserStocks.
     * @example
     * // Create many ForecastedUserStocks
     * const forecastedUserStock = await prisma.forecastedUserStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForecastedUserStocks and only return the `id`
     * const forecastedUserStockWithIdOnly = await prisma.forecastedUserStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForecastedUserStockCreateManyAndReturnArgs>(args?: SelectSubset<T, ForecastedUserStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForecastedUserStock.
     * @param {ForecastedUserStockDeleteArgs} args - Arguments to delete one ForecastedUserStock.
     * @example
     * // Delete one ForecastedUserStock
     * const ForecastedUserStock = await prisma.forecastedUserStock.delete({
     *   where: {
     *     // ... filter to delete one ForecastedUserStock
     *   }
     * })
     * 
     */
    delete<T extends ForecastedUserStockDeleteArgs>(args: SelectSubset<T, ForecastedUserStockDeleteArgs<ExtArgs>>): Prisma__ForecastedUserStockClient<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForecastedUserStock.
     * @param {ForecastedUserStockUpdateArgs} args - Arguments to update one ForecastedUserStock.
     * @example
     * // Update one ForecastedUserStock
     * const forecastedUserStock = await prisma.forecastedUserStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForecastedUserStockUpdateArgs>(args: SelectSubset<T, ForecastedUserStockUpdateArgs<ExtArgs>>): Prisma__ForecastedUserStockClient<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForecastedUserStocks.
     * @param {ForecastedUserStockDeleteManyArgs} args - Arguments to filter ForecastedUserStocks to delete.
     * @example
     * // Delete a few ForecastedUserStocks
     * const { count } = await prisma.forecastedUserStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForecastedUserStockDeleteManyArgs>(args?: SelectSubset<T, ForecastedUserStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForecastedUserStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastedUserStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForecastedUserStocks
     * const forecastedUserStock = await prisma.forecastedUserStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForecastedUserStockUpdateManyArgs>(args: SelectSubset<T, ForecastedUserStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForecastedUserStocks and returns the data updated in the database.
     * @param {ForecastedUserStockUpdateManyAndReturnArgs} args - Arguments to update many ForecastedUserStocks.
     * @example
     * // Update many ForecastedUserStocks
     * const forecastedUserStock = await prisma.forecastedUserStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForecastedUserStocks and only return the `id`
     * const forecastedUserStockWithIdOnly = await prisma.forecastedUserStock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForecastedUserStockUpdateManyAndReturnArgs>(args: SelectSubset<T, ForecastedUserStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForecastedUserStock.
     * @param {ForecastedUserStockUpsertArgs} args - Arguments to update or create a ForecastedUserStock.
     * @example
     * // Update or create a ForecastedUserStock
     * const forecastedUserStock = await prisma.forecastedUserStock.upsert({
     *   create: {
     *     // ... data to create a ForecastedUserStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForecastedUserStock we want to update
     *   }
     * })
     */
    upsert<T extends ForecastedUserStockUpsertArgs>(args: SelectSubset<T, ForecastedUserStockUpsertArgs<ExtArgs>>): Prisma__ForecastedUserStockClient<$Result.GetResult<Prisma.$ForecastedUserStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForecastedUserStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastedUserStockCountArgs} args - Arguments to filter ForecastedUserStocks to count.
     * @example
     * // Count the number of ForecastedUserStocks
     * const count = await prisma.forecastedUserStock.count({
     *   where: {
     *     // ... the filter for the ForecastedUserStocks we want to count
     *   }
     * })
    **/
    count<T extends ForecastedUserStockCountArgs>(
      args?: Subset<T, ForecastedUserStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForecastedUserStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForecastedUserStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastedUserStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForecastedUserStockAggregateArgs>(args: Subset<T, ForecastedUserStockAggregateArgs>): Prisma.PrismaPromise<GetForecastedUserStockAggregateType<T>>

    /**
     * Group by ForecastedUserStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastedUserStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForecastedUserStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForecastedUserStockGroupByArgs['orderBy'] }
        : { orderBy?: ForecastedUserStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForecastedUserStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForecastedUserStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForecastedUserStock model
   */
  readonly fields: ForecastedUserStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForecastedUserStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForecastedUserStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userStock<T extends UserStockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserStockDefaultArgs<ExtArgs>>): Prisma__UserStockClient<$Result.GetResult<Prisma.$UserStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForecastedUserStock model
   */
  interface ForecastedUserStockFieldRefs {
    readonly id: FieldRef<"ForecastedUserStock", 'Int'>
    readonly userStockId: FieldRef<"ForecastedUserStock", 'Int'>
    readonly requiredStock: FieldRef<"ForecastedUserStock", 'Int'>
    readonly percentage: FieldRef<"ForecastedUserStock", 'Int'>
    readonly stockoutDate: FieldRef<"ForecastedUserStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForecastedUserStock findUnique
   */
  export type ForecastedUserStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    /**
     * Filter, which ForecastedUserStock to fetch.
     */
    where: ForecastedUserStockWhereUniqueInput
  }

  /**
   * ForecastedUserStock findUniqueOrThrow
   */
  export type ForecastedUserStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    /**
     * Filter, which ForecastedUserStock to fetch.
     */
    where: ForecastedUserStockWhereUniqueInput
  }

  /**
   * ForecastedUserStock findFirst
   */
  export type ForecastedUserStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    /**
     * Filter, which ForecastedUserStock to fetch.
     */
    where?: ForecastedUserStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastedUserStocks to fetch.
     */
    orderBy?: ForecastedUserStockOrderByWithRelationInput | ForecastedUserStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForecastedUserStocks.
     */
    cursor?: ForecastedUserStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastedUserStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastedUserStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForecastedUserStocks.
     */
    distinct?: ForecastedUserStockScalarFieldEnum | ForecastedUserStockScalarFieldEnum[]
  }

  /**
   * ForecastedUserStock findFirstOrThrow
   */
  export type ForecastedUserStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    /**
     * Filter, which ForecastedUserStock to fetch.
     */
    where?: ForecastedUserStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastedUserStocks to fetch.
     */
    orderBy?: ForecastedUserStockOrderByWithRelationInput | ForecastedUserStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForecastedUserStocks.
     */
    cursor?: ForecastedUserStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastedUserStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastedUserStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForecastedUserStocks.
     */
    distinct?: ForecastedUserStockScalarFieldEnum | ForecastedUserStockScalarFieldEnum[]
  }

  /**
   * ForecastedUserStock findMany
   */
  export type ForecastedUserStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    /**
     * Filter, which ForecastedUserStocks to fetch.
     */
    where?: ForecastedUserStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastedUserStocks to fetch.
     */
    orderBy?: ForecastedUserStockOrderByWithRelationInput | ForecastedUserStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForecastedUserStocks.
     */
    cursor?: ForecastedUserStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastedUserStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastedUserStocks.
     */
    skip?: number
    distinct?: ForecastedUserStockScalarFieldEnum | ForecastedUserStockScalarFieldEnum[]
  }

  /**
   * ForecastedUserStock create
   */
  export type ForecastedUserStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    /**
     * The data needed to create a ForecastedUserStock.
     */
    data: XOR<ForecastedUserStockCreateInput, ForecastedUserStockUncheckedCreateInput>
  }

  /**
   * ForecastedUserStock createMany
   */
  export type ForecastedUserStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForecastedUserStocks.
     */
    data: ForecastedUserStockCreateManyInput | ForecastedUserStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForecastedUserStock createManyAndReturn
   */
  export type ForecastedUserStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * The data used to create many ForecastedUserStocks.
     */
    data: ForecastedUserStockCreateManyInput | ForecastedUserStockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForecastedUserStock update
   */
  export type ForecastedUserStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    /**
     * The data needed to update a ForecastedUserStock.
     */
    data: XOR<ForecastedUserStockUpdateInput, ForecastedUserStockUncheckedUpdateInput>
    /**
     * Choose, which ForecastedUserStock to update.
     */
    where: ForecastedUserStockWhereUniqueInput
  }

  /**
   * ForecastedUserStock updateMany
   */
  export type ForecastedUserStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForecastedUserStocks.
     */
    data: XOR<ForecastedUserStockUpdateManyMutationInput, ForecastedUserStockUncheckedUpdateManyInput>
    /**
     * Filter which ForecastedUserStocks to update
     */
    where?: ForecastedUserStockWhereInput
    /**
     * Limit how many ForecastedUserStocks to update.
     */
    limit?: number
  }

  /**
   * ForecastedUserStock updateManyAndReturn
   */
  export type ForecastedUserStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * The data used to update ForecastedUserStocks.
     */
    data: XOR<ForecastedUserStockUpdateManyMutationInput, ForecastedUserStockUncheckedUpdateManyInput>
    /**
     * Filter which ForecastedUserStocks to update
     */
    where?: ForecastedUserStockWhereInput
    /**
     * Limit how many ForecastedUserStocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForecastedUserStock upsert
   */
  export type ForecastedUserStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    /**
     * The filter to search for the ForecastedUserStock to update in case it exists.
     */
    where: ForecastedUserStockWhereUniqueInput
    /**
     * In case the ForecastedUserStock found by the `where` argument doesn't exist, create a new ForecastedUserStock with this data.
     */
    create: XOR<ForecastedUserStockCreateInput, ForecastedUserStockUncheckedCreateInput>
    /**
     * In case the ForecastedUserStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForecastedUserStockUpdateInput, ForecastedUserStockUncheckedUpdateInput>
  }

  /**
   * ForecastedUserStock delete
   */
  export type ForecastedUserStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
    /**
     * Filter which ForecastedUserStock to delete.
     */
    where: ForecastedUserStockWhereUniqueInput
  }

  /**
   * ForecastedUserStock deleteMany
   */
  export type ForecastedUserStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForecastedUserStocks to delete
     */
    where?: ForecastedUserStockWhereInput
    /**
     * Limit how many ForecastedUserStocks to delete.
     */
    limit?: number
  }

  /**
   * ForecastedUserStock without action
   */
  export type ForecastedUserStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastedUserStock
     */
    select?: ForecastedUserStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastedUserStock
     */
    omit?: ForecastedUserStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastedUserStockInclude<ExtArgs> | null
  }


  /**
   * Model Disease
   */

  export type AggregateDisease = {
    _count: DiseaseCountAggregateOutputType | null
    _avg: DiseaseAvgAggregateOutputType | null
    _sum: DiseaseSumAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  export type DiseaseAvgAggregateOutputType = {
    id: number | null
  }

  export type DiseaseSumAggregateOutputType = {
    id: number | null
  }

  export type DiseaseMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DiseaseMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DiseaseCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DiseaseAvgAggregateInputType = {
    id?: true
  }

  export type DiseaseSumAggregateInputType = {
    id?: true
  }

  export type DiseaseMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DiseaseMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DiseaseCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DiseaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disease to aggregate.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diseases
    **/
    _count?: true | DiseaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiseaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiseaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseaseMaxAggregateInputType
  }

  export type GetDiseaseAggregateType<T extends DiseaseAggregateArgs> = {
        [P in keyof T & keyof AggregateDisease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisease[P]>
      : GetScalarType<T[P], AggregateDisease[P]>
  }




  export type DiseaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseWhereInput
    orderBy?: DiseaseOrderByWithAggregationInput | DiseaseOrderByWithAggregationInput[]
    by: DiseaseScalarFieldEnum[] | DiseaseScalarFieldEnum
    having?: DiseaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseaseCountAggregateInputType | true
    _avg?: DiseaseAvgAggregateInputType
    _sum?: DiseaseSumAggregateInputType
    _min?: DiseaseMinAggregateInputType
    _max?: DiseaseMaxAggregateInputType
  }

  export type DiseaseGroupByOutputType = {
    id: number
    name: string
    _count: DiseaseCountAggregateOutputType | null
    _avg: DiseaseAvgAggregateOutputType | null
    _sum: DiseaseSumAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  type GetDiseaseGroupByPayload<T extends DiseaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
            : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
        }
      >
    >


  export type DiseaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    diseaseMedicineCorrelation?: boolean | Disease$diseaseMedicineCorrelationArgs<ExtArgs>
    diseaseRecords?: boolean | Disease$diseaseRecordsArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DiseaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["disease"]>
  export type DiseaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diseaseMedicineCorrelation?: boolean | Disease$diseaseMedicineCorrelationArgs<ExtArgs>
    diseaseRecords?: boolean | Disease$diseaseRecordsArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiseaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiseaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiseasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disease"
    objects: {
      diseaseMedicineCorrelation: Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>[]
      diseaseRecords: Prisma.$DiseaseRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["disease"]>
    composites: {}
  }

  type DiseaseGetPayload<S extends boolean | null | undefined | DiseaseDefaultArgs> = $Result.GetResult<Prisma.$DiseasePayload, S>

  type DiseaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiseaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseaseCountAggregateInputType | true
    }

  export interface DiseaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disease'], meta: { name: 'Disease' } }
    /**
     * Find zero or one Disease that matches the filter.
     * @param {DiseaseFindUniqueArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseaseFindUniqueArgs>(args: SelectSubset<T, DiseaseFindUniqueArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiseaseFindUniqueOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseaseFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseaseFindFirstArgs>(args?: SelectSubset<T, DiseaseFindFirstArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseaseFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diseases
     * const diseases = await prisma.disease.findMany()
     * 
     * // Get first 10 Diseases
     * const diseases = await prisma.disease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseaseWithIdOnly = await prisma.disease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseaseFindManyArgs>(args?: SelectSubset<T, DiseaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disease.
     * @param {DiseaseCreateArgs} args - Arguments to create a Disease.
     * @example
     * // Create one Disease
     * const Disease = await prisma.disease.create({
     *   data: {
     *     // ... data to create a Disease
     *   }
     * })
     * 
     */
    create<T extends DiseaseCreateArgs>(args: SelectSubset<T, DiseaseCreateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diseases.
     * @param {DiseaseCreateManyArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseaseCreateManyArgs>(args?: SelectSubset<T, DiseaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diseases and returns the data saved in the database.
     * @param {DiseaseCreateManyAndReturnArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diseases and only return the `id`
     * const diseaseWithIdOnly = await prisma.disease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiseaseCreateManyAndReturnArgs>(args?: SelectSubset<T, DiseaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disease.
     * @param {DiseaseDeleteArgs} args - Arguments to delete one Disease.
     * @example
     * // Delete one Disease
     * const Disease = await prisma.disease.delete({
     *   where: {
     *     // ... filter to delete one Disease
     *   }
     * })
     * 
     */
    delete<T extends DiseaseDeleteArgs>(args: SelectSubset<T, DiseaseDeleteArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disease.
     * @param {DiseaseUpdateArgs} args - Arguments to update one Disease.
     * @example
     * // Update one Disease
     * const disease = await prisma.disease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseaseUpdateArgs>(args: SelectSubset<T, DiseaseUpdateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diseases.
     * @param {DiseaseDeleteManyArgs} args - Arguments to filter Diseases to delete.
     * @example
     * // Delete a few Diseases
     * const { count } = await prisma.disease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseaseDeleteManyArgs>(args?: SelectSubset<T, DiseaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseaseUpdateManyArgs>(args: SelectSubset<T, DiseaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases and returns the data updated in the database.
     * @param {DiseaseUpdateManyAndReturnArgs} args - Arguments to update many Diseases.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diseases and only return the `id`
     * const diseaseWithIdOnly = await prisma.disease.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiseaseUpdateManyAndReturnArgs>(args: SelectSubset<T, DiseaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disease.
     * @param {DiseaseUpsertArgs} args - Arguments to update or create a Disease.
     * @example
     * // Update or create a Disease
     * const disease = await prisma.disease.upsert({
     *   create: {
     *     // ... data to create a Disease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disease we want to update
     *   }
     * })
     */
    upsert<T extends DiseaseUpsertArgs>(args: SelectSubset<T, DiseaseUpsertArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseCountArgs} args - Arguments to filter Diseases to count.
     * @example
     * // Count the number of Diseases
     * const count = await prisma.disease.count({
     *   where: {
     *     // ... the filter for the Diseases we want to count
     *   }
     * })
    **/
    count<T extends DiseaseCountArgs>(
      args?: Subset<T, DiseaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiseaseAggregateArgs>(args: Subset<T, DiseaseAggregateArgs>): Prisma.PrismaPromise<GetDiseaseAggregateType<T>>

    /**
     * Group by Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiseaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseaseGroupByArgs['orderBy'] }
        : { orderBy?: DiseaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiseaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disease model
   */
  readonly fields: DiseaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diseaseMedicineCorrelation<T extends Disease$diseaseMedicineCorrelationArgs<ExtArgs> = {}>(args?: Subset<T, Disease$diseaseMedicineCorrelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diseaseRecords<T extends Disease$diseaseRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Disease$diseaseRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disease model
   */
  interface DiseaseFieldRefs {
    readonly id: FieldRef<"Disease", 'Int'>
    readonly name: FieldRef<"Disease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disease findUnique
   */
  export type DiseaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findUniqueOrThrow
   */
  export type DiseaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findFirst
   */
  export type DiseaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findFirstOrThrow
   */
  export type DiseaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findMany
   */
  export type DiseaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease create
   */
  export type DiseaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Disease.
     */
    data: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
  }

  /**
   * Disease createMany
   */
  export type DiseaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disease createManyAndReturn
   */
  export type DiseaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disease update
   */
  export type DiseaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Disease.
     */
    data: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
    /**
     * Choose, which Disease to update.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease updateMany
   */
  export type DiseaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Disease updateManyAndReturn
   */
  export type DiseaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Disease upsert
   */
  export type DiseaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Disease to update in case it exists.
     */
    where: DiseaseWhereUniqueInput
    /**
     * In case the Disease found by the `where` argument doesn't exist, create a new Disease with this data.
     */
    create: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
    /**
     * In case the Disease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
  }

  /**
   * Disease delete
   */
  export type DiseaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter which Disease to delete.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease deleteMany
   */
  export type DiseaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diseases to delete
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to delete.
     */
    limit?: number
  }

  /**
   * Disease.diseaseMedicineCorrelation
   */
  export type Disease$diseaseMedicineCorrelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    where?: DiseaseMedicineCorrelationWhereInput
    orderBy?: DiseaseMedicineCorrelationOrderByWithRelationInput | DiseaseMedicineCorrelationOrderByWithRelationInput[]
    cursor?: DiseaseMedicineCorrelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiseaseMedicineCorrelationScalarFieldEnum | DiseaseMedicineCorrelationScalarFieldEnum[]
  }

  /**
   * Disease.diseaseRecords
   */
  export type Disease$diseaseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    where?: DiseaseRecordWhereInput
    orderBy?: DiseaseRecordOrderByWithRelationInput | DiseaseRecordOrderByWithRelationInput[]
    cursor?: DiseaseRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiseaseRecordScalarFieldEnum | DiseaseRecordScalarFieldEnum[]
  }

  /**
   * Disease without action
   */
  export type DiseaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
  }


  /**
   * Model DiseaseRecord
   */

  export type AggregateDiseaseRecord = {
    _count: DiseaseRecordCountAggregateOutputType | null
    _avg: DiseaseRecordAvgAggregateOutputType | null
    _sum: DiseaseRecordSumAggregateOutputType | null
    _min: DiseaseRecordMinAggregateOutputType | null
    _max: DiseaseRecordMaxAggregateOutputType | null
  }

  export type DiseaseRecordAvgAggregateOutputType = {
    id: number | null
    diseaseId: number | null
    amount: number | null
  }

  export type DiseaseRecordSumAggregateOutputType = {
    id: number | null
    diseaseId: number | null
    amount: number | null
  }

  export type DiseaseRecordMinAggregateOutputType = {
    id: number | null
    diseaseId: number | null
    amount: number | null
    timestamp: Date | null
  }

  export type DiseaseRecordMaxAggregateOutputType = {
    id: number | null
    diseaseId: number | null
    amount: number | null
    timestamp: Date | null
  }

  export type DiseaseRecordCountAggregateOutputType = {
    id: number
    diseaseId: number
    amount: number
    timestamp: number
    _all: number
  }


  export type DiseaseRecordAvgAggregateInputType = {
    id?: true
    diseaseId?: true
    amount?: true
  }

  export type DiseaseRecordSumAggregateInputType = {
    id?: true
    diseaseId?: true
    amount?: true
  }

  export type DiseaseRecordMinAggregateInputType = {
    id?: true
    diseaseId?: true
    amount?: true
    timestamp?: true
  }

  export type DiseaseRecordMaxAggregateInputType = {
    id?: true
    diseaseId?: true
    amount?: true
    timestamp?: true
  }

  export type DiseaseRecordCountAggregateInputType = {
    id?: true
    diseaseId?: true
    amount?: true
    timestamp?: true
    _all?: true
  }

  export type DiseaseRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiseaseRecord to aggregate.
     */
    where?: DiseaseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseRecords to fetch.
     */
    orderBy?: DiseaseRecordOrderByWithRelationInput | DiseaseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseaseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiseaseRecords
    **/
    _count?: true | DiseaseRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiseaseRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiseaseRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseaseRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseaseRecordMaxAggregateInputType
  }

  export type GetDiseaseRecordAggregateType<T extends DiseaseRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDiseaseRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiseaseRecord[P]>
      : GetScalarType<T[P], AggregateDiseaseRecord[P]>
  }




  export type DiseaseRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseRecordWhereInput
    orderBy?: DiseaseRecordOrderByWithAggregationInput | DiseaseRecordOrderByWithAggregationInput[]
    by: DiseaseRecordScalarFieldEnum[] | DiseaseRecordScalarFieldEnum
    having?: DiseaseRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseaseRecordCountAggregateInputType | true
    _avg?: DiseaseRecordAvgAggregateInputType
    _sum?: DiseaseRecordSumAggregateInputType
    _min?: DiseaseRecordMinAggregateInputType
    _max?: DiseaseRecordMaxAggregateInputType
  }

  export type DiseaseRecordGroupByOutputType = {
    id: number
    diseaseId: number
    amount: number
    timestamp: Date
    _count: DiseaseRecordCountAggregateOutputType | null
    _avg: DiseaseRecordAvgAggregateOutputType | null
    _sum: DiseaseRecordSumAggregateOutputType | null
    _min: DiseaseRecordMinAggregateOutputType | null
    _max: DiseaseRecordMaxAggregateOutputType | null
  }

  type GetDiseaseRecordGroupByPayload<T extends DiseaseRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseaseRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseaseRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseaseRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DiseaseRecordGroupByOutputType[P]>
        }
      >
    >


  export type DiseaseRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diseaseId?: boolean
    amount?: boolean
    timestamp?: boolean
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseaseRecord"]>

  export type DiseaseRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diseaseId?: boolean
    amount?: boolean
    timestamp?: boolean
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseaseRecord"]>

  export type DiseaseRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diseaseId?: boolean
    amount?: boolean
    timestamp?: boolean
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseaseRecord"]>

  export type DiseaseRecordSelectScalar = {
    id?: boolean
    diseaseId?: boolean
    amount?: boolean
    timestamp?: boolean
  }

  export type DiseaseRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diseaseId" | "amount" | "timestamp", ExtArgs["result"]["diseaseRecord"]>
  export type DiseaseRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }
  export type DiseaseRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }
  export type DiseaseRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }

  export type $DiseaseRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiseaseRecord"
    objects: {
      disease: Prisma.$DiseasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diseaseId: number
      amount: number
      timestamp: Date
    }, ExtArgs["result"]["diseaseRecord"]>
    composites: {}
  }

  type DiseaseRecordGetPayload<S extends boolean | null | undefined | DiseaseRecordDefaultArgs> = $Result.GetResult<Prisma.$DiseaseRecordPayload, S>

  type DiseaseRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiseaseRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseaseRecordCountAggregateInputType | true
    }

  export interface DiseaseRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiseaseRecord'], meta: { name: 'DiseaseRecord' } }
    /**
     * Find zero or one DiseaseRecord that matches the filter.
     * @param {DiseaseRecordFindUniqueArgs} args - Arguments to find a DiseaseRecord
     * @example
     * // Get one DiseaseRecord
     * const diseaseRecord = await prisma.diseaseRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseaseRecordFindUniqueArgs>(args: SelectSubset<T, DiseaseRecordFindUniqueArgs<ExtArgs>>): Prisma__DiseaseRecordClient<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiseaseRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiseaseRecordFindUniqueOrThrowArgs} args - Arguments to find a DiseaseRecord
     * @example
     * // Get one DiseaseRecord
     * const diseaseRecord = await prisma.diseaseRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseaseRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseaseRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseaseRecordClient<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiseaseRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseRecordFindFirstArgs} args - Arguments to find a DiseaseRecord
     * @example
     * // Get one DiseaseRecord
     * const diseaseRecord = await prisma.diseaseRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseaseRecordFindFirstArgs>(args?: SelectSubset<T, DiseaseRecordFindFirstArgs<ExtArgs>>): Prisma__DiseaseRecordClient<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiseaseRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseRecordFindFirstOrThrowArgs} args - Arguments to find a DiseaseRecord
     * @example
     * // Get one DiseaseRecord
     * const diseaseRecord = await prisma.diseaseRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseaseRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseaseRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseaseRecordClient<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiseaseRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiseaseRecords
     * const diseaseRecords = await prisma.diseaseRecord.findMany()
     * 
     * // Get first 10 DiseaseRecords
     * const diseaseRecords = await prisma.diseaseRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseaseRecordWithIdOnly = await prisma.diseaseRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseaseRecordFindManyArgs>(args?: SelectSubset<T, DiseaseRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiseaseRecord.
     * @param {DiseaseRecordCreateArgs} args - Arguments to create a DiseaseRecord.
     * @example
     * // Create one DiseaseRecord
     * const DiseaseRecord = await prisma.diseaseRecord.create({
     *   data: {
     *     // ... data to create a DiseaseRecord
     *   }
     * })
     * 
     */
    create<T extends DiseaseRecordCreateArgs>(args: SelectSubset<T, DiseaseRecordCreateArgs<ExtArgs>>): Prisma__DiseaseRecordClient<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiseaseRecords.
     * @param {DiseaseRecordCreateManyArgs} args - Arguments to create many DiseaseRecords.
     * @example
     * // Create many DiseaseRecords
     * const diseaseRecord = await prisma.diseaseRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseaseRecordCreateManyArgs>(args?: SelectSubset<T, DiseaseRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiseaseRecords and returns the data saved in the database.
     * @param {DiseaseRecordCreateManyAndReturnArgs} args - Arguments to create many DiseaseRecords.
     * @example
     * // Create many DiseaseRecords
     * const diseaseRecord = await prisma.diseaseRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiseaseRecords and only return the `id`
     * const diseaseRecordWithIdOnly = await prisma.diseaseRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiseaseRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, DiseaseRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiseaseRecord.
     * @param {DiseaseRecordDeleteArgs} args - Arguments to delete one DiseaseRecord.
     * @example
     * // Delete one DiseaseRecord
     * const DiseaseRecord = await prisma.diseaseRecord.delete({
     *   where: {
     *     // ... filter to delete one DiseaseRecord
     *   }
     * })
     * 
     */
    delete<T extends DiseaseRecordDeleteArgs>(args: SelectSubset<T, DiseaseRecordDeleteArgs<ExtArgs>>): Prisma__DiseaseRecordClient<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiseaseRecord.
     * @param {DiseaseRecordUpdateArgs} args - Arguments to update one DiseaseRecord.
     * @example
     * // Update one DiseaseRecord
     * const diseaseRecord = await prisma.diseaseRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseaseRecordUpdateArgs>(args: SelectSubset<T, DiseaseRecordUpdateArgs<ExtArgs>>): Prisma__DiseaseRecordClient<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiseaseRecords.
     * @param {DiseaseRecordDeleteManyArgs} args - Arguments to filter DiseaseRecords to delete.
     * @example
     * // Delete a few DiseaseRecords
     * const { count } = await prisma.diseaseRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseaseRecordDeleteManyArgs>(args?: SelectSubset<T, DiseaseRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiseaseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiseaseRecords
     * const diseaseRecord = await prisma.diseaseRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseaseRecordUpdateManyArgs>(args: SelectSubset<T, DiseaseRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiseaseRecords and returns the data updated in the database.
     * @param {DiseaseRecordUpdateManyAndReturnArgs} args - Arguments to update many DiseaseRecords.
     * @example
     * // Update many DiseaseRecords
     * const diseaseRecord = await prisma.diseaseRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiseaseRecords and only return the `id`
     * const diseaseRecordWithIdOnly = await prisma.diseaseRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiseaseRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, DiseaseRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiseaseRecord.
     * @param {DiseaseRecordUpsertArgs} args - Arguments to update or create a DiseaseRecord.
     * @example
     * // Update or create a DiseaseRecord
     * const diseaseRecord = await prisma.diseaseRecord.upsert({
     *   create: {
     *     // ... data to create a DiseaseRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiseaseRecord we want to update
     *   }
     * })
     */
    upsert<T extends DiseaseRecordUpsertArgs>(args: SelectSubset<T, DiseaseRecordUpsertArgs<ExtArgs>>): Prisma__DiseaseRecordClient<$Result.GetResult<Prisma.$DiseaseRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiseaseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseRecordCountArgs} args - Arguments to filter DiseaseRecords to count.
     * @example
     * // Count the number of DiseaseRecords
     * const count = await prisma.diseaseRecord.count({
     *   where: {
     *     // ... the filter for the DiseaseRecords we want to count
     *   }
     * })
    **/
    count<T extends DiseaseRecordCountArgs>(
      args?: Subset<T, DiseaseRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseaseRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiseaseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiseaseRecordAggregateArgs>(args: Subset<T, DiseaseRecordAggregateArgs>): Prisma.PrismaPromise<GetDiseaseRecordAggregateType<T>>

    /**
     * Group by DiseaseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiseaseRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseaseRecordGroupByArgs['orderBy'] }
        : { orderBy?: DiseaseRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiseaseRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseaseRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiseaseRecord model
   */
  readonly fields: DiseaseRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiseaseRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseaseRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disease<T extends DiseaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiseaseDefaultArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiseaseRecord model
   */
  interface DiseaseRecordFieldRefs {
    readonly id: FieldRef<"DiseaseRecord", 'Int'>
    readonly diseaseId: FieldRef<"DiseaseRecord", 'Int'>
    readonly amount: FieldRef<"DiseaseRecord", 'Int'>
    readonly timestamp: FieldRef<"DiseaseRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiseaseRecord findUnique
   */
  export type DiseaseRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseRecord to fetch.
     */
    where: DiseaseRecordWhereUniqueInput
  }

  /**
   * DiseaseRecord findUniqueOrThrow
   */
  export type DiseaseRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseRecord to fetch.
     */
    where: DiseaseRecordWhereUniqueInput
  }

  /**
   * DiseaseRecord findFirst
   */
  export type DiseaseRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseRecord to fetch.
     */
    where?: DiseaseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseRecords to fetch.
     */
    orderBy?: DiseaseRecordOrderByWithRelationInput | DiseaseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiseaseRecords.
     */
    cursor?: DiseaseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiseaseRecords.
     */
    distinct?: DiseaseRecordScalarFieldEnum | DiseaseRecordScalarFieldEnum[]
  }

  /**
   * DiseaseRecord findFirstOrThrow
   */
  export type DiseaseRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseRecord to fetch.
     */
    where?: DiseaseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseRecords to fetch.
     */
    orderBy?: DiseaseRecordOrderByWithRelationInput | DiseaseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiseaseRecords.
     */
    cursor?: DiseaseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiseaseRecords.
     */
    distinct?: DiseaseRecordScalarFieldEnum | DiseaseRecordScalarFieldEnum[]
  }

  /**
   * DiseaseRecord findMany
   */
  export type DiseaseRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseRecords to fetch.
     */
    where?: DiseaseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseRecords to fetch.
     */
    orderBy?: DiseaseRecordOrderByWithRelationInput | DiseaseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiseaseRecords.
     */
    cursor?: DiseaseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseRecords.
     */
    skip?: number
    distinct?: DiseaseRecordScalarFieldEnum | DiseaseRecordScalarFieldEnum[]
  }

  /**
   * DiseaseRecord create
   */
  export type DiseaseRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a DiseaseRecord.
     */
    data: XOR<DiseaseRecordCreateInput, DiseaseRecordUncheckedCreateInput>
  }

  /**
   * DiseaseRecord createMany
   */
  export type DiseaseRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiseaseRecords.
     */
    data: DiseaseRecordCreateManyInput | DiseaseRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiseaseRecord createManyAndReturn
   */
  export type DiseaseRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * The data used to create many DiseaseRecords.
     */
    data: DiseaseRecordCreateManyInput | DiseaseRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiseaseRecord update
   */
  export type DiseaseRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a DiseaseRecord.
     */
    data: XOR<DiseaseRecordUpdateInput, DiseaseRecordUncheckedUpdateInput>
    /**
     * Choose, which DiseaseRecord to update.
     */
    where: DiseaseRecordWhereUniqueInput
  }

  /**
   * DiseaseRecord updateMany
   */
  export type DiseaseRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiseaseRecords.
     */
    data: XOR<DiseaseRecordUpdateManyMutationInput, DiseaseRecordUncheckedUpdateManyInput>
    /**
     * Filter which DiseaseRecords to update
     */
    where?: DiseaseRecordWhereInput
    /**
     * Limit how many DiseaseRecords to update.
     */
    limit?: number
  }

  /**
   * DiseaseRecord updateManyAndReturn
   */
  export type DiseaseRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * The data used to update DiseaseRecords.
     */
    data: XOR<DiseaseRecordUpdateManyMutationInput, DiseaseRecordUncheckedUpdateManyInput>
    /**
     * Filter which DiseaseRecords to update
     */
    where?: DiseaseRecordWhereInput
    /**
     * Limit how many DiseaseRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiseaseRecord upsert
   */
  export type DiseaseRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the DiseaseRecord to update in case it exists.
     */
    where: DiseaseRecordWhereUniqueInput
    /**
     * In case the DiseaseRecord found by the `where` argument doesn't exist, create a new DiseaseRecord with this data.
     */
    create: XOR<DiseaseRecordCreateInput, DiseaseRecordUncheckedCreateInput>
    /**
     * In case the DiseaseRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseaseRecordUpdateInput, DiseaseRecordUncheckedUpdateInput>
  }

  /**
   * DiseaseRecord delete
   */
  export type DiseaseRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
    /**
     * Filter which DiseaseRecord to delete.
     */
    where: DiseaseRecordWhereUniqueInput
  }

  /**
   * DiseaseRecord deleteMany
   */
  export type DiseaseRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiseaseRecords to delete
     */
    where?: DiseaseRecordWhereInput
    /**
     * Limit how many DiseaseRecords to delete.
     */
    limit?: number
  }

  /**
   * DiseaseRecord without action
   */
  export type DiseaseRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseRecord
     */
    select?: DiseaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseRecord
     */
    omit?: DiseaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseRecordInclude<ExtArgs> | null
  }


  /**
   * Model DiseaseMedicineCorrelation
   */

  export type AggregateDiseaseMedicineCorrelation = {
    _count: DiseaseMedicineCorrelationCountAggregateOutputType | null
    _avg: DiseaseMedicineCorrelationAvgAggregateOutputType | null
    _sum: DiseaseMedicineCorrelationSumAggregateOutputType | null
    _min: DiseaseMedicineCorrelationMinAggregateOutputType | null
    _max: DiseaseMedicineCorrelationMaxAggregateOutputType | null
  }

  export type DiseaseMedicineCorrelationAvgAggregateOutputType = {
    id: number | null
    diseaseId: number | null
    medicineId: number | null
    correlationPercentage: number | null
  }

  export type DiseaseMedicineCorrelationSumAggregateOutputType = {
    id: number | null
    diseaseId: number | null
    medicineId: number | null
    correlationPercentage: number | null
  }

  export type DiseaseMedicineCorrelationMinAggregateOutputType = {
    id: number | null
    diseaseId: number | null
    medicineId: number | null
    correlationPercentage: number | null
  }

  export type DiseaseMedicineCorrelationMaxAggregateOutputType = {
    id: number | null
    diseaseId: number | null
    medicineId: number | null
    correlationPercentage: number | null
  }

  export type DiseaseMedicineCorrelationCountAggregateOutputType = {
    id: number
    diseaseId: number
    medicineId: number
    correlationPercentage: number
    _all: number
  }


  export type DiseaseMedicineCorrelationAvgAggregateInputType = {
    id?: true
    diseaseId?: true
    medicineId?: true
    correlationPercentage?: true
  }

  export type DiseaseMedicineCorrelationSumAggregateInputType = {
    id?: true
    diseaseId?: true
    medicineId?: true
    correlationPercentage?: true
  }

  export type DiseaseMedicineCorrelationMinAggregateInputType = {
    id?: true
    diseaseId?: true
    medicineId?: true
    correlationPercentage?: true
  }

  export type DiseaseMedicineCorrelationMaxAggregateInputType = {
    id?: true
    diseaseId?: true
    medicineId?: true
    correlationPercentage?: true
  }

  export type DiseaseMedicineCorrelationCountAggregateInputType = {
    id?: true
    diseaseId?: true
    medicineId?: true
    correlationPercentage?: true
    _all?: true
  }

  export type DiseaseMedicineCorrelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiseaseMedicineCorrelation to aggregate.
     */
    where?: DiseaseMedicineCorrelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseMedicineCorrelations to fetch.
     */
    orderBy?: DiseaseMedicineCorrelationOrderByWithRelationInput | DiseaseMedicineCorrelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseaseMedicineCorrelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseMedicineCorrelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseMedicineCorrelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiseaseMedicineCorrelations
    **/
    _count?: true | DiseaseMedicineCorrelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiseaseMedicineCorrelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiseaseMedicineCorrelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseaseMedicineCorrelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseaseMedicineCorrelationMaxAggregateInputType
  }

  export type GetDiseaseMedicineCorrelationAggregateType<T extends DiseaseMedicineCorrelationAggregateArgs> = {
        [P in keyof T & keyof AggregateDiseaseMedicineCorrelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiseaseMedicineCorrelation[P]>
      : GetScalarType<T[P], AggregateDiseaseMedicineCorrelation[P]>
  }




  export type DiseaseMedicineCorrelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseMedicineCorrelationWhereInput
    orderBy?: DiseaseMedicineCorrelationOrderByWithAggregationInput | DiseaseMedicineCorrelationOrderByWithAggregationInput[]
    by: DiseaseMedicineCorrelationScalarFieldEnum[] | DiseaseMedicineCorrelationScalarFieldEnum
    having?: DiseaseMedicineCorrelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseaseMedicineCorrelationCountAggregateInputType | true
    _avg?: DiseaseMedicineCorrelationAvgAggregateInputType
    _sum?: DiseaseMedicineCorrelationSumAggregateInputType
    _min?: DiseaseMedicineCorrelationMinAggregateInputType
    _max?: DiseaseMedicineCorrelationMaxAggregateInputType
  }

  export type DiseaseMedicineCorrelationGroupByOutputType = {
    id: number
    diseaseId: number
    medicineId: number
    correlationPercentage: number
    _count: DiseaseMedicineCorrelationCountAggregateOutputType | null
    _avg: DiseaseMedicineCorrelationAvgAggregateOutputType | null
    _sum: DiseaseMedicineCorrelationSumAggregateOutputType | null
    _min: DiseaseMedicineCorrelationMinAggregateOutputType | null
    _max: DiseaseMedicineCorrelationMaxAggregateOutputType | null
  }

  type GetDiseaseMedicineCorrelationGroupByPayload<T extends DiseaseMedicineCorrelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseaseMedicineCorrelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseaseMedicineCorrelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseaseMedicineCorrelationGroupByOutputType[P]>
            : GetScalarType<T[P], DiseaseMedicineCorrelationGroupByOutputType[P]>
        }
      >
    >


  export type DiseaseMedicineCorrelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diseaseId?: boolean
    medicineId?: boolean
    correlationPercentage?: boolean
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseaseMedicineCorrelation"]>

  export type DiseaseMedicineCorrelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diseaseId?: boolean
    medicineId?: boolean
    correlationPercentage?: boolean
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseaseMedicineCorrelation"]>

  export type DiseaseMedicineCorrelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diseaseId?: boolean
    medicineId?: boolean
    correlationPercentage?: boolean
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseaseMedicineCorrelation"]>

  export type DiseaseMedicineCorrelationSelectScalar = {
    id?: boolean
    diseaseId?: boolean
    medicineId?: boolean
    correlationPercentage?: boolean
  }

  export type DiseaseMedicineCorrelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diseaseId" | "medicineId" | "correlationPercentage", ExtArgs["result"]["diseaseMedicineCorrelation"]>
  export type DiseaseMedicineCorrelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type DiseaseMedicineCorrelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type DiseaseMedicineCorrelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $DiseaseMedicineCorrelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiseaseMedicineCorrelation"
    objects: {
      disease: Prisma.$DiseasePayload<ExtArgs>
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diseaseId: number
      medicineId: number
      correlationPercentage: number
    }, ExtArgs["result"]["diseaseMedicineCorrelation"]>
    composites: {}
  }

  type DiseaseMedicineCorrelationGetPayload<S extends boolean | null | undefined | DiseaseMedicineCorrelationDefaultArgs> = $Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload, S>

  type DiseaseMedicineCorrelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiseaseMedicineCorrelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseaseMedicineCorrelationCountAggregateInputType | true
    }

  export interface DiseaseMedicineCorrelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiseaseMedicineCorrelation'], meta: { name: 'DiseaseMedicineCorrelation' } }
    /**
     * Find zero or one DiseaseMedicineCorrelation that matches the filter.
     * @param {DiseaseMedicineCorrelationFindUniqueArgs} args - Arguments to find a DiseaseMedicineCorrelation
     * @example
     * // Get one DiseaseMedicineCorrelation
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseaseMedicineCorrelationFindUniqueArgs>(args: SelectSubset<T, DiseaseMedicineCorrelationFindUniqueArgs<ExtArgs>>): Prisma__DiseaseMedicineCorrelationClient<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiseaseMedicineCorrelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiseaseMedicineCorrelationFindUniqueOrThrowArgs} args - Arguments to find a DiseaseMedicineCorrelation
     * @example
     * // Get one DiseaseMedicineCorrelation
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseaseMedicineCorrelationFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseaseMedicineCorrelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseaseMedicineCorrelationClient<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiseaseMedicineCorrelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseMedicineCorrelationFindFirstArgs} args - Arguments to find a DiseaseMedicineCorrelation
     * @example
     * // Get one DiseaseMedicineCorrelation
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseaseMedicineCorrelationFindFirstArgs>(args?: SelectSubset<T, DiseaseMedicineCorrelationFindFirstArgs<ExtArgs>>): Prisma__DiseaseMedicineCorrelationClient<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiseaseMedicineCorrelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseMedicineCorrelationFindFirstOrThrowArgs} args - Arguments to find a DiseaseMedicineCorrelation
     * @example
     * // Get one DiseaseMedicineCorrelation
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseaseMedicineCorrelationFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseaseMedicineCorrelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseaseMedicineCorrelationClient<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiseaseMedicineCorrelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseMedicineCorrelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiseaseMedicineCorrelations
     * const diseaseMedicineCorrelations = await prisma.diseaseMedicineCorrelation.findMany()
     * 
     * // Get first 10 DiseaseMedicineCorrelations
     * const diseaseMedicineCorrelations = await prisma.diseaseMedicineCorrelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseaseMedicineCorrelationWithIdOnly = await prisma.diseaseMedicineCorrelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseaseMedicineCorrelationFindManyArgs>(args?: SelectSubset<T, DiseaseMedicineCorrelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiseaseMedicineCorrelation.
     * @param {DiseaseMedicineCorrelationCreateArgs} args - Arguments to create a DiseaseMedicineCorrelation.
     * @example
     * // Create one DiseaseMedicineCorrelation
     * const DiseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.create({
     *   data: {
     *     // ... data to create a DiseaseMedicineCorrelation
     *   }
     * })
     * 
     */
    create<T extends DiseaseMedicineCorrelationCreateArgs>(args: SelectSubset<T, DiseaseMedicineCorrelationCreateArgs<ExtArgs>>): Prisma__DiseaseMedicineCorrelationClient<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiseaseMedicineCorrelations.
     * @param {DiseaseMedicineCorrelationCreateManyArgs} args - Arguments to create many DiseaseMedicineCorrelations.
     * @example
     * // Create many DiseaseMedicineCorrelations
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseaseMedicineCorrelationCreateManyArgs>(args?: SelectSubset<T, DiseaseMedicineCorrelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiseaseMedicineCorrelations and returns the data saved in the database.
     * @param {DiseaseMedicineCorrelationCreateManyAndReturnArgs} args - Arguments to create many DiseaseMedicineCorrelations.
     * @example
     * // Create many DiseaseMedicineCorrelations
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiseaseMedicineCorrelations and only return the `id`
     * const diseaseMedicineCorrelationWithIdOnly = await prisma.diseaseMedicineCorrelation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiseaseMedicineCorrelationCreateManyAndReturnArgs>(args?: SelectSubset<T, DiseaseMedicineCorrelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiseaseMedicineCorrelation.
     * @param {DiseaseMedicineCorrelationDeleteArgs} args - Arguments to delete one DiseaseMedicineCorrelation.
     * @example
     * // Delete one DiseaseMedicineCorrelation
     * const DiseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.delete({
     *   where: {
     *     // ... filter to delete one DiseaseMedicineCorrelation
     *   }
     * })
     * 
     */
    delete<T extends DiseaseMedicineCorrelationDeleteArgs>(args: SelectSubset<T, DiseaseMedicineCorrelationDeleteArgs<ExtArgs>>): Prisma__DiseaseMedicineCorrelationClient<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiseaseMedicineCorrelation.
     * @param {DiseaseMedicineCorrelationUpdateArgs} args - Arguments to update one DiseaseMedicineCorrelation.
     * @example
     * // Update one DiseaseMedicineCorrelation
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseaseMedicineCorrelationUpdateArgs>(args: SelectSubset<T, DiseaseMedicineCorrelationUpdateArgs<ExtArgs>>): Prisma__DiseaseMedicineCorrelationClient<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiseaseMedicineCorrelations.
     * @param {DiseaseMedicineCorrelationDeleteManyArgs} args - Arguments to filter DiseaseMedicineCorrelations to delete.
     * @example
     * // Delete a few DiseaseMedicineCorrelations
     * const { count } = await prisma.diseaseMedicineCorrelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseaseMedicineCorrelationDeleteManyArgs>(args?: SelectSubset<T, DiseaseMedicineCorrelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiseaseMedicineCorrelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseMedicineCorrelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiseaseMedicineCorrelations
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseaseMedicineCorrelationUpdateManyArgs>(args: SelectSubset<T, DiseaseMedicineCorrelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiseaseMedicineCorrelations and returns the data updated in the database.
     * @param {DiseaseMedicineCorrelationUpdateManyAndReturnArgs} args - Arguments to update many DiseaseMedicineCorrelations.
     * @example
     * // Update many DiseaseMedicineCorrelations
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiseaseMedicineCorrelations and only return the `id`
     * const diseaseMedicineCorrelationWithIdOnly = await prisma.diseaseMedicineCorrelation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiseaseMedicineCorrelationUpdateManyAndReturnArgs>(args: SelectSubset<T, DiseaseMedicineCorrelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiseaseMedicineCorrelation.
     * @param {DiseaseMedicineCorrelationUpsertArgs} args - Arguments to update or create a DiseaseMedicineCorrelation.
     * @example
     * // Update or create a DiseaseMedicineCorrelation
     * const diseaseMedicineCorrelation = await prisma.diseaseMedicineCorrelation.upsert({
     *   create: {
     *     // ... data to create a DiseaseMedicineCorrelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiseaseMedicineCorrelation we want to update
     *   }
     * })
     */
    upsert<T extends DiseaseMedicineCorrelationUpsertArgs>(args: SelectSubset<T, DiseaseMedicineCorrelationUpsertArgs<ExtArgs>>): Prisma__DiseaseMedicineCorrelationClient<$Result.GetResult<Prisma.$DiseaseMedicineCorrelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiseaseMedicineCorrelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseMedicineCorrelationCountArgs} args - Arguments to filter DiseaseMedicineCorrelations to count.
     * @example
     * // Count the number of DiseaseMedicineCorrelations
     * const count = await prisma.diseaseMedicineCorrelation.count({
     *   where: {
     *     // ... the filter for the DiseaseMedicineCorrelations we want to count
     *   }
     * })
    **/
    count<T extends DiseaseMedicineCorrelationCountArgs>(
      args?: Subset<T, DiseaseMedicineCorrelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseaseMedicineCorrelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiseaseMedicineCorrelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseMedicineCorrelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiseaseMedicineCorrelationAggregateArgs>(args: Subset<T, DiseaseMedicineCorrelationAggregateArgs>): Prisma.PrismaPromise<GetDiseaseMedicineCorrelationAggregateType<T>>

    /**
     * Group by DiseaseMedicineCorrelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseMedicineCorrelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiseaseMedicineCorrelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseaseMedicineCorrelationGroupByArgs['orderBy'] }
        : { orderBy?: DiseaseMedicineCorrelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiseaseMedicineCorrelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseaseMedicineCorrelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiseaseMedicineCorrelation model
   */
  readonly fields: DiseaseMedicineCorrelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiseaseMedicineCorrelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseaseMedicineCorrelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disease<T extends DiseaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiseaseDefaultArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiseaseMedicineCorrelation model
   */
  interface DiseaseMedicineCorrelationFieldRefs {
    readonly id: FieldRef<"DiseaseMedicineCorrelation", 'Int'>
    readonly diseaseId: FieldRef<"DiseaseMedicineCorrelation", 'Int'>
    readonly medicineId: FieldRef<"DiseaseMedicineCorrelation", 'Int'>
    readonly correlationPercentage: FieldRef<"DiseaseMedicineCorrelation", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * DiseaseMedicineCorrelation findUnique
   */
  export type DiseaseMedicineCorrelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseMedicineCorrelation to fetch.
     */
    where: DiseaseMedicineCorrelationWhereUniqueInput
  }

  /**
   * DiseaseMedicineCorrelation findUniqueOrThrow
   */
  export type DiseaseMedicineCorrelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseMedicineCorrelation to fetch.
     */
    where: DiseaseMedicineCorrelationWhereUniqueInput
  }

  /**
   * DiseaseMedicineCorrelation findFirst
   */
  export type DiseaseMedicineCorrelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseMedicineCorrelation to fetch.
     */
    where?: DiseaseMedicineCorrelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseMedicineCorrelations to fetch.
     */
    orderBy?: DiseaseMedicineCorrelationOrderByWithRelationInput | DiseaseMedicineCorrelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiseaseMedicineCorrelations.
     */
    cursor?: DiseaseMedicineCorrelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseMedicineCorrelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseMedicineCorrelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiseaseMedicineCorrelations.
     */
    distinct?: DiseaseMedicineCorrelationScalarFieldEnum | DiseaseMedicineCorrelationScalarFieldEnum[]
  }

  /**
   * DiseaseMedicineCorrelation findFirstOrThrow
   */
  export type DiseaseMedicineCorrelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseMedicineCorrelation to fetch.
     */
    where?: DiseaseMedicineCorrelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseMedicineCorrelations to fetch.
     */
    orderBy?: DiseaseMedicineCorrelationOrderByWithRelationInput | DiseaseMedicineCorrelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiseaseMedicineCorrelations.
     */
    cursor?: DiseaseMedicineCorrelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseMedicineCorrelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseMedicineCorrelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiseaseMedicineCorrelations.
     */
    distinct?: DiseaseMedicineCorrelationScalarFieldEnum | DiseaseMedicineCorrelationScalarFieldEnum[]
  }

  /**
   * DiseaseMedicineCorrelation findMany
   */
  export type DiseaseMedicineCorrelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    /**
     * Filter, which DiseaseMedicineCorrelations to fetch.
     */
    where?: DiseaseMedicineCorrelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiseaseMedicineCorrelations to fetch.
     */
    orderBy?: DiseaseMedicineCorrelationOrderByWithRelationInput | DiseaseMedicineCorrelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiseaseMedicineCorrelations.
     */
    cursor?: DiseaseMedicineCorrelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiseaseMedicineCorrelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiseaseMedicineCorrelations.
     */
    skip?: number
    distinct?: DiseaseMedicineCorrelationScalarFieldEnum | DiseaseMedicineCorrelationScalarFieldEnum[]
  }

  /**
   * DiseaseMedicineCorrelation create
   */
  export type DiseaseMedicineCorrelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    /**
     * The data needed to create a DiseaseMedicineCorrelation.
     */
    data: XOR<DiseaseMedicineCorrelationCreateInput, DiseaseMedicineCorrelationUncheckedCreateInput>
  }

  /**
   * DiseaseMedicineCorrelation createMany
   */
  export type DiseaseMedicineCorrelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiseaseMedicineCorrelations.
     */
    data: DiseaseMedicineCorrelationCreateManyInput | DiseaseMedicineCorrelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiseaseMedicineCorrelation createManyAndReturn
   */
  export type DiseaseMedicineCorrelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * The data used to create many DiseaseMedicineCorrelations.
     */
    data: DiseaseMedicineCorrelationCreateManyInput | DiseaseMedicineCorrelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiseaseMedicineCorrelation update
   */
  export type DiseaseMedicineCorrelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    /**
     * The data needed to update a DiseaseMedicineCorrelation.
     */
    data: XOR<DiseaseMedicineCorrelationUpdateInput, DiseaseMedicineCorrelationUncheckedUpdateInput>
    /**
     * Choose, which DiseaseMedicineCorrelation to update.
     */
    where: DiseaseMedicineCorrelationWhereUniqueInput
  }

  /**
   * DiseaseMedicineCorrelation updateMany
   */
  export type DiseaseMedicineCorrelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiseaseMedicineCorrelations.
     */
    data: XOR<DiseaseMedicineCorrelationUpdateManyMutationInput, DiseaseMedicineCorrelationUncheckedUpdateManyInput>
    /**
     * Filter which DiseaseMedicineCorrelations to update
     */
    where?: DiseaseMedicineCorrelationWhereInput
    /**
     * Limit how many DiseaseMedicineCorrelations to update.
     */
    limit?: number
  }

  /**
   * DiseaseMedicineCorrelation updateManyAndReturn
   */
  export type DiseaseMedicineCorrelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * The data used to update DiseaseMedicineCorrelations.
     */
    data: XOR<DiseaseMedicineCorrelationUpdateManyMutationInput, DiseaseMedicineCorrelationUncheckedUpdateManyInput>
    /**
     * Filter which DiseaseMedicineCorrelations to update
     */
    where?: DiseaseMedicineCorrelationWhereInput
    /**
     * Limit how many DiseaseMedicineCorrelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiseaseMedicineCorrelation upsert
   */
  export type DiseaseMedicineCorrelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    /**
     * The filter to search for the DiseaseMedicineCorrelation to update in case it exists.
     */
    where: DiseaseMedicineCorrelationWhereUniqueInput
    /**
     * In case the DiseaseMedicineCorrelation found by the `where` argument doesn't exist, create a new DiseaseMedicineCorrelation with this data.
     */
    create: XOR<DiseaseMedicineCorrelationCreateInput, DiseaseMedicineCorrelationUncheckedCreateInput>
    /**
     * In case the DiseaseMedicineCorrelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseaseMedicineCorrelationUpdateInput, DiseaseMedicineCorrelationUncheckedUpdateInput>
  }

  /**
   * DiseaseMedicineCorrelation delete
   */
  export type DiseaseMedicineCorrelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
    /**
     * Filter which DiseaseMedicineCorrelation to delete.
     */
    where: DiseaseMedicineCorrelationWhereUniqueInput
  }

  /**
   * DiseaseMedicineCorrelation deleteMany
   */
  export type DiseaseMedicineCorrelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiseaseMedicineCorrelations to delete
     */
    where?: DiseaseMedicineCorrelationWhereInput
    /**
     * Limit how many DiseaseMedicineCorrelations to delete.
     */
    limit?: number
  }

  /**
   * DiseaseMedicineCorrelation without action
   */
  export type DiseaseMedicineCorrelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseMedicineCorrelation
     */
    select?: DiseaseMedicineCorrelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiseaseMedicineCorrelation
     */
    omit?: DiseaseMedicineCorrelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseMedicineCorrelationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    passwordHash: 'passwordHash',
    region: 'region',
    sales: 'sales',
    quantitySold: 'quantitySold',
    price: 'price'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    userId: 'userId',
    refresh: 'refresh',
    access: 'access'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const TransactionHistoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    medicineId: 'medicineId',
    amount: 'amount',
    userId: 'userId',
    price: 'price'
  };

  export type TransactionHistoryScalarFieldEnum = (typeof TransactionHistoryScalarFieldEnum)[keyof typeof TransactionHistoryScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    brief: 'brief',
    imageUrl: 'imageUrl'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const UserStockScalarFieldEnum: {
    id: 'id',
    medicineId: 'medicineId',
    total: 'total',
    sold: 'sold',
    userId: 'userId'
  };

  export type UserStockScalarFieldEnum = (typeof UserStockScalarFieldEnum)[keyof typeof UserStockScalarFieldEnum]


  export const StockBatchScalarFieldEnum: {
    id: 'id',
    expirationDate: 'expirationDate',
    amount: 'amount',
    userStockId: 'userStockId'
  };

  export type StockBatchScalarFieldEnum = (typeof StockBatchScalarFieldEnum)[keyof typeof StockBatchScalarFieldEnum]


  export const ForecastedUserStockScalarFieldEnum: {
    id: 'id',
    userStockId: 'userStockId',
    requiredStock: 'requiredStock',
    percentage: 'percentage',
    stockoutDate: 'stockoutDate'
  };

  export type ForecastedUserStockScalarFieldEnum = (typeof ForecastedUserStockScalarFieldEnum)[keyof typeof ForecastedUserStockScalarFieldEnum]


  export const DiseaseScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DiseaseScalarFieldEnum = (typeof DiseaseScalarFieldEnum)[keyof typeof DiseaseScalarFieldEnum]


  export const DiseaseRecordScalarFieldEnum: {
    id: 'id',
    diseaseId: 'diseaseId',
    amount: 'amount',
    timestamp: 'timestamp'
  };

  export type DiseaseRecordScalarFieldEnum = (typeof DiseaseRecordScalarFieldEnum)[keyof typeof DiseaseRecordScalarFieldEnum]


  export const DiseaseMedicineCorrelationScalarFieldEnum: {
    id: 'id',
    diseaseId: 'diseaseId',
    medicineId: 'medicineId',
    correlationPercentage: 'correlationPercentage'
  };

  export type DiseaseMedicineCorrelationScalarFieldEnum = (typeof DiseaseMedicineCorrelationScalarFieldEnum)[keyof typeof DiseaseMedicineCorrelationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    region?: StringFilter<"User"> | string
    sales?: IntFilter<"User"> | number
    quantitySold?: IntFilter<"User"> | number
    price?: IntNullableListFilter<"User">
    transactionHistory?: TransactionHistoryListRelationFilter
    userStock?: UserStockListRelationFilter
    tokens?: TokensListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    region?: SortOrder
    sales?: SortOrder
    quantitySold?: SortOrder
    price?: SortOrder
    transactionHistory?: TransactionHistoryOrderByRelationAggregateInput
    userStock?: UserStockOrderByRelationAggregateInput
    tokens?: TokensOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    region?: StringFilter<"User"> | string
    sales?: IntFilter<"User"> | number
    quantitySold?: IntFilter<"User"> | number
    price?: IntNullableListFilter<"User">
    transactionHistory?: TransactionHistoryListRelationFilter
    userStock?: UserStockListRelationFilter
    tokens?: TokensListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    region?: SortOrder
    sales?: SortOrder
    quantitySold?: SortOrder
    price?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    region?: StringWithAggregatesFilter<"User"> | string
    sales?: IntWithAggregatesFilter<"User"> | number
    quantitySold?: IntWithAggregatesFilter<"User"> | number
    price?: IntNullableListFilter<"User">
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    userId?: IntFilter<"Tokens"> | number
    refresh?: StringFilter<"Tokens"> | string
    access?: StringFilter<"Tokens"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokensOrderByWithRelationInput = {
    userId?: SortOrder
    refresh?: SortOrder
    access?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    refresh?: string
    access?: string
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId" | "refresh" | "access">

  export type TokensOrderByWithAggregationInput = {
    userId?: SortOrder
    refresh?: SortOrder
    access?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _avg?: TokensAvgOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
    _sum?: TokensSumOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Tokens"> | number
    refresh?: StringWithAggregatesFilter<"Tokens"> | string
    access?: StringWithAggregatesFilter<"Tokens"> | string
  }

  export type TransactionHistoryWhereInput = {
    AND?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    OR?: TransactionHistoryWhereInput[]
    NOT?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    id?: IntFilter<"TransactionHistory"> | number
    createdAt?: DateTimeFilter<"TransactionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionHistory"> | Date | string
    medicineId?: IntFilter<"TransactionHistory"> | number
    amount?: IntFilter<"TransactionHistory"> | number
    userId?: IntFilter<"TransactionHistory"> | number
    price?: IntFilter<"TransactionHistory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }

  export type TransactionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicineId?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    user?: UserOrderByWithRelationInput
    medicine?: MedicineOrderByWithRelationInput
  }

  export type TransactionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    OR?: TransactionHistoryWhereInput[]
    NOT?: TransactionHistoryWhereInput | TransactionHistoryWhereInput[]
    createdAt?: DateTimeFilter<"TransactionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionHistory"> | Date | string
    medicineId?: IntFilter<"TransactionHistory"> | number
    amount?: IntFilter<"TransactionHistory"> | number
    userId?: IntFilter<"TransactionHistory"> | number
    price?: IntFilter<"TransactionHistory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }, "id">

  export type TransactionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicineId?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    _count?: TransactionHistoryCountOrderByAggregateInput
    _avg?: TransactionHistoryAvgOrderByAggregateInput
    _max?: TransactionHistoryMaxOrderByAggregateInput
    _min?: TransactionHistoryMinOrderByAggregateInput
    _sum?: TransactionHistorySumOrderByAggregateInput
  }

  export type TransactionHistoryScalarWhereWithAggregatesInput = {
    AND?: TransactionHistoryScalarWhereWithAggregatesInput | TransactionHistoryScalarWhereWithAggregatesInput[]
    OR?: TransactionHistoryScalarWhereWithAggregatesInput[]
    NOT?: TransactionHistoryScalarWhereWithAggregatesInput | TransactionHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TransactionHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransactionHistory"> | Date | string
    medicineId?: IntWithAggregatesFilter<"TransactionHistory"> | number
    amount?: IntWithAggregatesFilter<"TransactionHistory"> | number
    userId?: IntWithAggregatesFilter<"TransactionHistory"> | number
    price?: IntWithAggregatesFilter<"TransactionHistory"> | number
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: IntFilter<"Medicine"> | number
    name?: StringFilter<"Medicine"> | string
    description?: StringFilter<"Medicine"> | string
    brief?: StringFilter<"Medicine"> | string
    imageUrl?: StringFilter<"Medicine"> | string
    transactionHistory?: TransactionHistoryListRelationFilter
    userStock?: UserStockListRelationFilter
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brief?: SortOrder
    imageUrl?: SortOrder
    transactionHistory?: TransactionHistoryOrderByRelationAggregateInput
    userStock?: UserStockOrderByRelationAggregateInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationOrderByRelationAggregateInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    name?: StringFilter<"Medicine"> | string
    description?: StringFilter<"Medicine"> | string
    brief?: StringFilter<"Medicine"> | string
    imageUrl?: StringFilter<"Medicine"> | string
    transactionHistory?: TransactionHistoryListRelationFilter
    userStock?: UserStockListRelationFilter
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationListRelationFilter
  }, "id">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brief?: SortOrder
    imageUrl?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medicine"> | number
    name?: StringWithAggregatesFilter<"Medicine"> | string
    description?: StringWithAggregatesFilter<"Medicine"> | string
    brief?: StringWithAggregatesFilter<"Medicine"> | string
    imageUrl?: StringWithAggregatesFilter<"Medicine"> | string
  }

  export type UserStockWhereInput = {
    AND?: UserStockWhereInput | UserStockWhereInput[]
    OR?: UserStockWhereInput[]
    NOT?: UserStockWhereInput | UserStockWhereInput[]
    id?: IntFilter<"UserStock"> | number
    medicineId?: IntFilter<"UserStock"> | number
    total?: IntFilter<"UserStock"> | number
    sold?: IntFilter<"UserStock"> | number
    userId?: IntFilter<"UserStock"> | number
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    batches?: StockBatchListRelationFilter
    forecastedUserStock?: XOR<ForecastedUserStockNullableScalarRelationFilter, ForecastedUserStockWhereInput> | null
  }

  export type UserStockOrderByWithRelationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    total?: SortOrder
    sold?: SortOrder
    userId?: SortOrder
    medicine?: MedicineOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    batches?: StockBatchOrderByRelationAggregateInput
    forecastedUserStock?: ForecastedUserStockOrderByWithRelationInput
  }

  export type UserStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_medicineId?: UserStockUserIdMedicineIdCompoundUniqueInput
    AND?: UserStockWhereInput | UserStockWhereInput[]
    OR?: UserStockWhereInput[]
    NOT?: UserStockWhereInput | UserStockWhereInput[]
    medicineId?: IntFilter<"UserStock"> | number
    total?: IntFilter<"UserStock"> | number
    sold?: IntFilter<"UserStock"> | number
    userId?: IntFilter<"UserStock"> | number
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    batches?: StockBatchListRelationFilter
    forecastedUserStock?: XOR<ForecastedUserStockNullableScalarRelationFilter, ForecastedUserStockWhereInput> | null
  }, "id" | "userId_medicineId">

  export type UserStockOrderByWithAggregationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    total?: SortOrder
    sold?: SortOrder
    userId?: SortOrder
    _count?: UserStockCountOrderByAggregateInput
    _avg?: UserStockAvgOrderByAggregateInput
    _max?: UserStockMaxOrderByAggregateInput
    _min?: UserStockMinOrderByAggregateInput
    _sum?: UserStockSumOrderByAggregateInput
  }

  export type UserStockScalarWhereWithAggregatesInput = {
    AND?: UserStockScalarWhereWithAggregatesInput | UserStockScalarWhereWithAggregatesInput[]
    OR?: UserStockScalarWhereWithAggregatesInput[]
    NOT?: UserStockScalarWhereWithAggregatesInput | UserStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserStock"> | number
    medicineId?: IntWithAggregatesFilter<"UserStock"> | number
    total?: IntWithAggregatesFilter<"UserStock"> | number
    sold?: IntWithAggregatesFilter<"UserStock"> | number
    userId?: IntWithAggregatesFilter<"UserStock"> | number
  }

  export type StockBatchWhereInput = {
    AND?: StockBatchWhereInput | StockBatchWhereInput[]
    OR?: StockBatchWhereInput[]
    NOT?: StockBatchWhereInput | StockBatchWhereInput[]
    id?: IntFilter<"StockBatch"> | number
    expirationDate?: DateTimeFilter<"StockBatch"> | Date | string
    amount?: IntFilter<"StockBatch"> | number
    userStockId?: IntFilter<"StockBatch"> | number
    userStock?: XOR<UserStockScalarRelationFilter, UserStockWhereInput>
  }

  export type StockBatchOrderByWithRelationInput = {
    id?: SortOrder
    expirationDate?: SortOrder
    amount?: SortOrder
    userStockId?: SortOrder
    userStock?: UserStockOrderByWithRelationInput
  }

  export type StockBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userStockId_expirationDate?: StockBatchUserStockIdExpirationDateCompoundUniqueInput
    AND?: StockBatchWhereInput | StockBatchWhereInput[]
    OR?: StockBatchWhereInput[]
    NOT?: StockBatchWhereInput | StockBatchWhereInput[]
    expirationDate?: DateTimeFilter<"StockBatch"> | Date | string
    amount?: IntFilter<"StockBatch"> | number
    userStockId?: IntFilter<"StockBatch"> | number
    userStock?: XOR<UserStockScalarRelationFilter, UserStockWhereInput>
  }, "id" | "userStockId_expirationDate">

  export type StockBatchOrderByWithAggregationInput = {
    id?: SortOrder
    expirationDate?: SortOrder
    amount?: SortOrder
    userStockId?: SortOrder
    _count?: StockBatchCountOrderByAggregateInput
    _avg?: StockBatchAvgOrderByAggregateInput
    _max?: StockBatchMaxOrderByAggregateInput
    _min?: StockBatchMinOrderByAggregateInput
    _sum?: StockBatchSumOrderByAggregateInput
  }

  export type StockBatchScalarWhereWithAggregatesInput = {
    AND?: StockBatchScalarWhereWithAggregatesInput | StockBatchScalarWhereWithAggregatesInput[]
    OR?: StockBatchScalarWhereWithAggregatesInput[]
    NOT?: StockBatchScalarWhereWithAggregatesInput | StockBatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockBatch"> | number
    expirationDate?: DateTimeWithAggregatesFilter<"StockBatch"> | Date | string
    amount?: IntWithAggregatesFilter<"StockBatch"> | number
    userStockId?: IntWithAggregatesFilter<"StockBatch"> | number
  }

  export type ForecastedUserStockWhereInput = {
    AND?: ForecastedUserStockWhereInput | ForecastedUserStockWhereInput[]
    OR?: ForecastedUserStockWhereInput[]
    NOT?: ForecastedUserStockWhereInput | ForecastedUserStockWhereInput[]
    id?: IntFilter<"ForecastedUserStock"> | number
    userStockId?: IntFilter<"ForecastedUserStock"> | number
    requiredStock?: IntFilter<"ForecastedUserStock"> | number
    percentage?: IntFilter<"ForecastedUserStock"> | number
    stockoutDate?: DateTimeFilter<"ForecastedUserStock"> | Date | string
    userStock?: XOR<UserStockScalarRelationFilter, UserStockWhereInput>
  }

  export type ForecastedUserStockOrderByWithRelationInput = {
    id?: SortOrder
    userStockId?: SortOrder
    requiredStock?: SortOrder
    percentage?: SortOrder
    stockoutDate?: SortOrder
    userStock?: UserStockOrderByWithRelationInput
  }

  export type ForecastedUserStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userStockId?: number
    id_userStockId?: ForecastedUserStockIdUserStockIdCompoundUniqueInput
    AND?: ForecastedUserStockWhereInput | ForecastedUserStockWhereInput[]
    OR?: ForecastedUserStockWhereInput[]
    NOT?: ForecastedUserStockWhereInput | ForecastedUserStockWhereInput[]
    requiredStock?: IntFilter<"ForecastedUserStock"> | number
    percentage?: IntFilter<"ForecastedUserStock"> | number
    stockoutDate?: DateTimeFilter<"ForecastedUserStock"> | Date | string
    userStock?: XOR<UserStockScalarRelationFilter, UserStockWhereInput>
  }, "id" | "userStockId" | "id_userStockId">

  export type ForecastedUserStockOrderByWithAggregationInput = {
    id?: SortOrder
    userStockId?: SortOrder
    requiredStock?: SortOrder
    percentage?: SortOrder
    stockoutDate?: SortOrder
    _count?: ForecastedUserStockCountOrderByAggregateInput
    _avg?: ForecastedUserStockAvgOrderByAggregateInput
    _max?: ForecastedUserStockMaxOrderByAggregateInput
    _min?: ForecastedUserStockMinOrderByAggregateInput
    _sum?: ForecastedUserStockSumOrderByAggregateInput
  }

  export type ForecastedUserStockScalarWhereWithAggregatesInput = {
    AND?: ForecastedUserStockScalarWhereWithAggregatesInput | ForecastedUserStockScalarWhereWithAggregatesInput[]
    OR?: ForecastedUserStockScalarWhereWithAggregatesInput[]
    NOT?: ForecastedUserStockScalarWhereWithAggregatesInput | ForecastedUserStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ForecastedUserStock"> | number
    userStockId?: IntWithAggregatesFilter<"ForecastedUserStock"> | number
    requiredStock?: IntWithAggregatesFilter<"ForecastedUserStock"> | number
    percentage?: IntWithAggregatesFilter<"ForecastedUserStock"> | number
    stockoutDate?: DateTimeWithAggregatesFilter<"ForecastedUserStock"> | Date | string
  }

  export type DiseaseWhereInput = {
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    id?: IntFilter<"Disease"> | number
    name?: StringFilter<"Disease"> | string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationListRelationFilter
    diseaseRecords?: DiseaseRecordListRelationFilter
  }

  export type DiseaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationOrderByRelationAggregateInput
    diseaseRecords?: DiseaseRecordOrderByRelationAggregateInput
  }

  export type DiseaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    name?: StringFilter<"Disease"> | string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationListRelationFilter
    diseaseRecords?: DiseaseRecordListRelationFilter
  }, "id">

  export type DiseaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DiseaseCountOrderByAggregateInput
    _avg?: DiseaseAvgOrderByAggregateInput
    _max?: DiseaseMaxOrderByAggregateInput
    _min?: DiseaseMinOrderByAggregateInput
    _sum?: DiseaseSumOrderByAggregateInput
  }

  export type DiseaseScalarWhereWithAggregatesInput = {
    AND?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    OR?: DiseaseScalarWhereWithAggregatesInput[]
    NOT?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disease"> | number
    name?: StringWithAggregatesFilter<"Disease"> | string
  }

  export type DiseaseRecordWhereInput = {
    AND?: DiseaseRecordWhereInput | DiseaseRecordWhereInput[]
    OR?: DiseaseRecordWhereInput[]
    NOT?: DiseaseRecordWhereInput | DiseaseRecordWhereInput[]
    id?: IntFilter<"DiseaseRecord"> | number
    diseaseId?: IntFilter<"DiseaseRecord"> | number
    amount?: IntFilter<"DiseaseRecord"> | number
    timestamp?: DateTimeFilter<"DiseaseRecord"> | Date | string
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }

  export type DiseaseRecordOrderByWithRelationInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    disease?: DiseaseOrderByWithRelationInput
  }

  export type DiseaseRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiseaseRecordWhereInput | DiseaseRecordWhereInput[]
    OR?: DiseaseRecordWhereInput[]
    NOT?: DiseaseRecordWhereInput | DiseaseRecordWhereInput[]
    diseaseId?: IntFilter<"DiseaseRecord"> | number
    amount?: IntFilter<"DiseaseRecord"> | number
    timestamp?: DateTimeFilter<"DiseaseRecord"> | Date | string
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }, "id">

  export type DiseaseRecordOrderByWithAggregationInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    _count?: DiseaseRecordCountOrderByAggregateInput
    _avg?: DiseaseRecordAvgOrderByAggregateInput
    _max?: DiseaseRecordMaxOrderByAggregateInput
    _min?: DiseaseRecordMinOrderByAggregateInput
    _sum?: DiseaseRecordSumOrderByAggregateInput
  }

  export type DiseaseRecordScalarWhereWithAggregatesInput = {
    AND?: DiseaseRecordScalarWhereWithAggregatesInput | DiseaseRecordScalarWhereWithAggregatesInput[]
    OR?: DiseaseRecordScalarWhereWithAggregatesInput[]
    NOT?: DiseaseRecordScalarWhereWithAggregatesInput | DiseaseRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiseaseRecord"> | number
    diseaseId?: IntWithAggregatesFilter<"DiseaseRecord"> | number
    amount?: IntWithAggregatesFilter<"DiseaseRecord"> | number
    timestamp?: DateTimeWithAggregatesFilter<"DiseaseRecord"> | Date | string
  }

  export type DiseaseMedicineCorrelationWhereInput = {
    AND?: DiseaseMedicineCorrelationWhereInput | DiseaseMedicineCorrelationWhereInput[]
    OR?: DiseaseMedicineCorrelationWhereInput[]
    NOT?: DiseaseMedicineCorrelationWhereInput | DiseaseMedicineCorrelationWhereInput[]
    id?: IntFilter<"DiseaseMedicineCorrelation"> | number
    diseaseId?: IntFilter<"DiseaseMedicineCorrelation"> | number
    medicineId?: IntFilter<"DiseaseMedicineCorrelation"> | number
    correlationPercentage?: FloatFilter<"DiseaseMedicineCorrelation"> | number
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }

  export type DiseaseMedicineCorrelationOrderByWithRelationInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    medicineId?: SortOrder
    correlationPercentage?: SortOrder
    disease?: DiseaseOrderByWithRelationInput
    medicine?: MedicineOrderByWithRelationInput
  }

  export type DiseaseMedicineCorrelationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    medicineId_diseaseId?: DiseaseMedicineCorrelationMedicineIdDiseaseIdCompoundUniqueInput
    AND?: DiseaseMedicineCorrelationWhereInput | DiseaseMedicineCorrelationWhereInput[]
    OR?: DiseaseMedicineCorrelationWhereInput[]
    NOT?: DiseaseMedicineCorrelationWhereInput | DiseaseMedicineCorrelationWhereInput[]
    diseaseId?: IntFilter<"DiseaseMedicineCorrelation"> | number
    medicineId?: IntFilter<"DiseaseMedicineCorrelation"> | number
    correlationPercentage?: FloatFilter<"DiseaseMedicineCorrelation"> | number
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }, "id" | "medicineId_diseaseId">

  export type DiseaseMedicineCorrelationOrderByWithAggregationInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    medicineId?: SortOrder
    correlationPercentage?: SortOrder
    _count?: DiseaseMedicineCorrelationCountOrderByAggregateInput
    _avg?: DiseaseMedicineCorrelationAvgOrderByAggregateInput
    _max?: DiseaseMedicineCorrelationMaxOrderByAggregateInput
    _min?: DiseaseMedicineCorrelationMinOrderByAggregateInput
    _sum?: DiseaseMedicineCorrelationSumOrderByAggregateInput
  }

  export type DiseaseMedicineCorrelationScalarWhereWithAggregatesInput = {
    AND?: DiseaseMedicineCorrelationScalarWhereWithAggregatesInput | DiseaseMedicineCorrelationScalarWhereWithAggregatesInput[]
    OR?: DiseaseMedicineCorrelationScalarWhereWithAggregatesInput[]
    NOT?: DiseaseMedicineCorrelationScalarWhereWithAggregatesInput | DiseaseMedicineCorrelationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiseaseMedicineCorrelation"> | number
    diseaseId?: IntWithAggregatesFilter<"DiseaseMedicineCorrelation"> | number
    medicineId?: IntWithAggregatesFilter<"DiseaseMedicineCorrelation"> | number
    correlationPercentage?: FloatWithAggregatesFilter<"DiseaseMedicineCorrelation"> | number
  }

  export type UserCreateInput = {
    username: string
    name: string
    passwordHash: string
    region: string
    sales?: number
    quantitySold?: number
    price?: UserCreatepriceInput | number[]
    transactionHistory?: TransactionHistoryCreateNestedManyWithoutUserInput
    userStock?: UserStockCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    name: string
    passwordHash: string
    region: string
    sales?: number
    quantitySold?: number
    price?: UserCreatepriceInput | number[]
    transactionHistory?: TransactionHistoryUncheckedCreateNestedManyWithoutUserInput
    userStock?: UserStockUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
    transactionHistory?: TransactionHistoryUpdateManyWithoutUserNestedInput
    userStock?: UserStockUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
    transactionHistory?: TransactionHistoryUncheckedUpdateManyWithoutUserNestedInput
    userStock?: UserStockUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    name: string
    passwordHash: string
    region: string
    sales?: number
    quantitySold?: number
    price?: UserCreatepriceInput | number[]
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
  }

  export type TokensCreateInput = {
    refresh: string
    access: string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokensUncheckedCreateInput = {
    userId: number
    refresh: string
    access: string
  }

  export type TokensUpdateInput = {
    refresh?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokensUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    refresh?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
  }

  export type TokensCreateManyInput = {
    userId: number
    refresh: string
    access: string
  }

  export type TokensUpdateManyMutationInput = {
    refresh?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
  }

  export type TokensUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    refresh?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionHistoryCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number
    price?: number
    user: UserCreateNestedOneWithoutTransactionHistoryInput
    medicine: MedicineCreateNestedOneWithoutTransactionHistoryInput
  }

  export type TransactionHistoryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineId: number
    amount?: number
    userId: number
    price?: number
  }

  export type TransactionHistoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTransactionHistoryNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutTransactionHistoryNestedInput
  }

  export type TransactionHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionHistoryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineId: number
    amount?: number
    userId: number
    price?: number
  }

  export type TransactionHistoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineCreateInput = {
    name: string
    description: string
    brief: string
    imageUrl: string
    transactionHistory?: TransactionHistoryCreateNestedManyWithoutMedicineInput
    userStock?: UserStockCreateNestedManyWithoutMedicineInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    brief: string
    imageUrl: string
    transactionHistory?: TransactionHistoryUncheckedCreateNestedManyWithoutMedicineInput
    userStock?: UserStockUncheckedCreateNestedManyWithoutMedicineInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    transactionHistory?: TransactionHistoryUpdateManyWithoutMedicineNestedInput
    userStock?: UserStockUpdateManyWithoutMedicineNestedInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    transactionHistory?: TransactionHistoryUncheckedUpdateManyWithoutMedicineNestedInput
    userStock?: UserStockUncheckedUpdateManyWithoutMedicineNestedInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: number
    name: string
    description: string
    brief: string
    imageUrl: string
  }

  export type MedicineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type UserStockCreateInput = {
    total?: number
    sold?: number
    medicine: MedicineCreateNestedOneWithoutUserStockInput
    user: UserCreateNestedOneWithoutUserStockInput
    batches?: StockBatchCreateNestedManyWithoutUserStockInput
    forecastedUserStock?: ForecastedUserStockCreateNestedOneWithoutUserStockInput
  }

  export type UserStockUncheckedCreateInput = {
    id?: number
    medicineId: number
    total?: number
    sold?: number
    userId: number
    batches?: StockBatchUncheckedCreateNestedManyWithoutUserStockInput
    forecastedUserStock?: ForecastedUserStockUncheckedCreateNestedOneWithoutUserStockInput
  }

  export type UserStockUpdateInput = {
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutUserStockNestedInput
    user?: UserUpdateOneRequiredWithoutUserStockNestedInput
    batches?: StockBatchUpdateManyWithoutUserStockNestedInput
    forecastedUserStock?: ForecastedUserStockUpdateOneWithoutUserStockNestedInput
  }

  export type UserStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    batches?: StockBatchUncheckedUpdateManyWithoutUserStockNestedInput
    forecastedUserStock?: ForecastedUserStockUncheckedUpdateOneWithoutUserStockNestedInput
  }

  export type UserStockCreateManyInput = {
    id?: number
    medicineId: number
    total?: number
    sold?: number
    userId: number
  }

  export type UserStockUpdateManyMutationInput = {
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
  }

  export type UserStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StockBatchCreateInput = {
    expirationDate: Date | string
    amount?: number
    userStock: UserStockCreateNestedOneWithoutBatchesInput
  }

  export type StockBatchUncheckedCreateInput = {
    id?: number
    expirationDate: Date | string
    amount?: number
    userStockId: number
  }

  export type StockBatchUpdateInput = {
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    userStock?: UserStockUpdateOneRequiredWithoutBatchesNestedInput
  }

  export type StockBatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    userStockId?: IntFieldUpdateOperationsInput | number
  }

  export type StockBatchCreateManyInput = {
    id?: number
    expirationDate: Date | string
    amount?: number
    userStockId: number
  }

  export type StockBatchUpdateManyMutationInput = {
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type StockBatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    userStockId?: IntFieldUpdateOperationsInput | number
  }

  export type ForecastedUserStockCreateInput = {
    requiredStock: number
    percentage: number
    stockoutDate: Date | string
    userStock: UserStockCreateNestedOneWithoutForecastedUserStockInput
  }

  export type ForecastedUserStockUncheckedCreateInput = {
    id?: number
    userStockId: number
    requiredStock: number
    percentage: number
    stockoutDate: Date | string
  }

  export type ForecastedUserStockUpdateInput = {
    requiredStock?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    stockoutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userStock?: UserStockUpdateOneRequiredWithoutForecastedUserStockNestedInput
  }

  export type ForecastedUserStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userStockId?: IntFieldUpdateOperationsInput | number
    requiredStock?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    stockoutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastedUserStockCreateManyInput = {
    id?: number
    userStockId: number
    requiredStock: number
    percentage: number
    stockoutDate: Date | string
  }

  export type ForecastedUserStockUpdateManyMutationInput = {
    requiredStock?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    stockoutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastedUserStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userStockId?: IntFieldUpdateOperationsInput | number
    requiredStock?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    stockoutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseCreateInput = {
    name: string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationCreateNestedManyWithoutDiseaseInput
    diseaseRecords?: DiseaseRecordCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUncheckedCreateInput = {
    id?: number
    name: string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedCreateNestedManyWithoutDiseaseInput
    diseaseRecords?: DiseaseRecordUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUpdateManyWithoutDiseaseNestedInput
    diseaseRecords?: DiseaseRecordUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedUpdateManyWithoutDiseaseNestedInput
    diseaseRecords?: DiseaseRecordUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseCreateManyInput = {
    id?: number
    name: string
  }

  export type DiseaseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseRecordCreateInput = {
    amount: number
    timestamp: Date | string
    disease: DiseaseCreateNestedOneWithoutDiseaseRecordsInput
  }

  export type DiseaseRecordUncheckedCreateInput = {
    id?: number
    diseaseId: number
    amount: number
    timestamp: Date | string
  }

  export type DiseaseRecordUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    disease?: DiseaseUpdateOneRequiredWithoutDiseaseRecordsNestedInput
  }

  export type DiseaseRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseRecordCreateManyInput = {
    id?: number
    diseaseId: number
    amount: number
    timestamp: Date | string
  }

  export type DiseaseRecordUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseMedicineCorrelationCreateInput = {
    correlationPercentage: number
    disease: DiseaseCreateNestedOneWithoutDiseaseMedicineCorrelationInput
    medicine: MedicineCreateNestedOneWithoutDiseaseMedicineCorrelationInput
  }

  export type DiseaseMedicineCorrelationUncheckedCreateInput = {
    id?: number
    diseaseId: number
    medicineId: number
    correlationPercentage: number
  }

  export type DiseaseMedicineCorrelationUpdateInput = {
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
    disease?: DiseaseUpdateOneRequiredWithoutDiseaseMedicineCorrelationNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutDiseaseMedicineCorrelationNestedInput
  }

  export type DiseaseMedicineCorrelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type DiseaseMedicineCorrelationCreateManyInput = {
    id?: number
    diseaseId: number
    medicineId: number
    correlationPercentage: number
  }

  export type DiseaseMedicineCorrelationUpdateManyMutationInput = {
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type DiseaseMedicineCorrelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TransactionHistoryListRelationFilter = {
    every?: TransactionHistoryWhereInput
    some?: TransactionHistoryWhereInput
    none?: TransactionHistoryWhereInput
  }

  export type UserStockListRelationFilter = {
    every?: UserStockWhereInput
    some?: UserStockWhereInput
    none?: UserStockWhereInput
  }

  export type TokensListRelationFilter = {
    every?: TokensWhereInput
    some?: TokensWhereInput
    none?: TokensWhereInput
  }

  export type TransactionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    region?: SortOrder
    sales?: SortOrder
    quantitySold?: SortOrder
    price?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    sales?: SortOrder
    quantitySold?: SortOrder
    price?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    region?: SortOrder
    sales?: SortOrder
    quantitySold?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    region?: SortOrder
    sales?: SortOrder
    quantitySold?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    sales?: SortOrder
    quantitySold?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokensCountOrderByAggregateInput = {
    userId?: SortOrder
    refresh?: SortOrder
    access?: SortOrder
  }

  export type TokensAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    userId?: SortOrder
    refresh?: SortOrder
    access?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    userId?: SortOrder
    refresh?: SortOrder
    access?: SortOrder
  }

  export type TokensSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MedicineScalarRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type TransactionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicineId?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type TransactionHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type TransactionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicineId?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type TransactionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicineId?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type TransactionHistorySumOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DiseaseMedicineCorrelationListRelationFilter = {
    every?: DiseaseMedicineCorrelationWhereInput
    some?: DiseaseMedicineCorrelationWhereInput
    none?: DiseaseMedicineCorrelationWhereInput
  }

  export type DiseaseMedicineCorrelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brief?: SortOrder
    imageUrl?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brief?: SortOrder
    imageUrl?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brief?: SortOrder
    imageUrl?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StockBatchListRelationFilter = {
    every?: StockBatchWhereInput
    some?: StockBatchWhereInput
    none?: StockBatchWhereInput
  }

  export type ForecastedUserStockNullableScalarRelationFilter = {
    is?: ForecastedUserStockWhereInput | null
    isNot?: ForecastedUserStockWhereInput | null
  }

  export type StockBatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStockUserIdMedicineIdCompoundUniqueInput = {
    userId: number
    medicineId: number
  }

  export type UserStockCountOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    total?: SortOrder
    sold?: SortOrder
    userId?: SortOrder
  }

  export type UserStockAvgOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    total?: SortOrder
    sold?: SortOrder
    userId?: SortOrder
  }

  export type UserStockMaxOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    total?: SortOrder
    sold?: SortOrder
    userId?: SortOrder
  }

  export type UserStockMinOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    total?: SortOrder
    sold?: SortOrder
    userId?: SortOrder
  }

  export type UserStockSumOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    total?: SortOrder
    sold?: SortOrder
    userId?: SortOrder
  }

  export type UserStockScalarRelationFilter = {
    is?: UserStockWhereInput
    isNot?: UserStockWhereInput
  }

  export type StockBatchUserStockIdExpirationDateCompoundUniqueInput = {
    userStockId: number
    expirationDate: Date | string
  }

  export type StockBatchCountOrderByAggregateInput = {
    id?: SortOrder
    expirationDate?: SortOrder
    amount?: SortOrder
    userStockId?: SortOrder
  }

  export type StockBatchAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userStockId?: SortOrder
  }

  export type StockBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    expirationDate?: SortOrder
    amount?: SortOrder
    userStockId?: SortOrder
  }

  export type StockBatchMinOrderByAggregateInput = {
    id?: SortOrder
    expirationDate?: SortOrder
    amount?: SortOrder
    userStockId?: SortOrder
  }

  export type StockBatchSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userStockId?: SortOrder
  }

  export type ForecastedUserStockIdUserStockIdCompoundUniqueInput = {
    id: number
    userStockId: number
  }

  export type ForecastedUserStockCountOrderByAggregateInput = {
    id?: SortOrder
    userStockId?: SortOrder
    requiredStock?: SortOrder
    percentage?: SortOrder
    stockoutDate?: SortOrder
  }

  export type ForecastedUserStockAvgOrderByAggregateInput = {
    id?: SortOrder
    userStockId?: SortOrder
    requiredStock?: SortOrder
    percentage?: SortOrder
  }

  export type ForecastedUserStockMaxOrderByAggregateInput = {
    id?: SortOrder
    userStockId?: SortOrder
    requiredStock?: SortOrder
    percentage?: SortOrder
    stockoutDate?: SortOrder
  }

  export type ForecastedUserStockMinOrderByAggregateInput = {
    id?: SortOrder
    userStockId?: SortOrder
    requiredStock?: SortOrder
    percentage?: SortOrder
    stockoutDate?: SortOrder
  }

  export type ForecastedUserStockSumOrderByAggregateInput = {
    id?: SortOrder
    userStockId?: SortOrder
    requiredStock?: SortOrder
    percentage?: SortOrder
  }

  export type DiseaseRecordListRelationFilter = {
    every?: DiseaseRecordWhereInput
    some?: DiseaseRecordWhereInput
    none?: DiseaseRecordWhereInput
  }

  export type DiseaseRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiseaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DiseaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiseaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DiseaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DiseaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiseaseScalarRelationFilter = {
    is?: DiseaseWhereInput
    isNot?: DiseaseWhereInput
  }

  export type DiseaseRecordCountOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type DiseaseRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    amount?: SortOrder
  }

  export type DiseaseRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type DiseaseRecordMinOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type DiseaseRecordSumOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    amount?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DiseaseMedicineCorrelationMedicineIdDiseaseIdCompoundUniqueInput = {
    medicineId: number
    diseaseId: number
  }

  export type DiseaseMedicineCorrelationCountOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    medicineId?: SortOrder
    correlationPercentage?: SortOrder
  }

  export type DiseaseMedicineCorrelationAvgOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    medicineId?: SortOrder
    correlationPercentage?: SortOrder
  }

  export type DiseaseMedicineCorrelationMaxOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    medicineId?: SortOrder
    correlationPercentage?: SortOrder
  }

  export type DiseaseMedicineCorrelationMinOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    medicineId?: SortOrder
    correlationPercentage?: SortOrder
  }

  export type DiseaseMedicineCorrelationSumOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
    medicineId?: SortOrder
    correlationPercentage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreatepriceInput = {
    set: number[]
  }

  export type TransactionHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput> | TransactionHistoryCreateWithoutUserInput[] | TransactionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutUserInput | TransactionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TransactionHistoryCreateManyUserInputEnvelope
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
  }

  export type UserStockCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStockCreateWithoutUserInput, UserStockUncheckedCreateWithoutUserInput> | UserStockCreateWithoutUserInput[] | UserStockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStockCreateOrConnectWithoutUserInput | UserStockCreateOrConnectWithoutUserInput[]
    createMany?: UserStockCreateManyUserInputEnvelope
    connect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
  }

  export type TokensCreateNestedManyWithoutUserInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
  }

  export type TransactionHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput> | TransactionHistoryCreateWithoutUserInput[] | TransactionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutUserInput | TransactionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TransactionHistoryCreateManyUserInputEnvelope
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
  }

  export type UserStockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStockCreateWithoutUserInput, UserStockUncheckedCreateWithoutUserInput> | UserStockCreateWithoutUserInput[] | UserStockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStockCreateOrConnectWithoutUserInput | UserStockCreateOrConnectWithoutUserInput[]
    createMany?: UserStockCreateManyUserInputEnvelope
    connect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
  }

  export type TokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdatepriceInput = {
    set?: number[]
    push?: number | number[]
  }

  export type TransactionHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput> | TransactionHistoryCreateWithoutUserInput[] | TransactionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutUserInput | TransactionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TransactionHistoryUpsertWithWhereUniqueWithoutUserInput | TransactionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionHistoryCreateManyUserInputEnvelope
    set?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    disconnect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    delete?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    update?: TransactionHistoryUpdateWithWhereUniqueWithoutUserInput | TransactionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionHistoryUpdateManyWithWhereWithoutUserInput | TransactionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
  }

  export type UserStockUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStockCreateWithoutUserInput, UserStockUncheckedCreateWithoutUserInput> | UserStockCreateWithoutUserInput[] | UserStockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStockCreateOrConnectWithoutUserInput | UserStockCreateOrConnectWithoutUserInput[]
    upsert?: UserStockUpsertWithWhereUniqueWithoutUserInput | UserStockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStockCreateManyUserInputEnvelope
    set?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    disconnect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    delete?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    connect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    update?: UserStockUpdateWithWhereUniqueWithoutUserInput | UserStockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStockUpdateManyWithWhereWithoutUserInput | UserStockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStockScalarWhereInput | UserStockScalarWhereInput[]
  }

  export type TokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutUserInput | TokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutUserInput | TokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutUserInput | TokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
  }

  export type TransactionHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput> | TransactionHistoryCreateWithoutUserInput[] | TransactionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutUserInput | TransactionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TransactionHistoryUpsertWithWhereUniqueWithoutUserInput | TransactionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionHistoryCreateManyUserInputEnvelope
    set?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    disconnect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    delete?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    update?: TransactionHistoryUpdateWithWhereUniqueWithoutUserInput | TransactionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionHistoryUpdateManyWithWhereWithoutUserInput | TransactionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
  }

  export type UserStockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStockCreateWithoutUserInput, UserStockUncheckedCreateWithoutUserInput> | UserStockCreateWithoutUserInput[] | UserStockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStockCreateOrConnectWithoutUserInput | UserStockCreateOrConnectWithoutUserInput[]
    upsert?: UserStockUpsertWithWhereUniqueWithoutUserInput | UserStockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStockCreateManyUserInputEnvelope
    set?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    disconnect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    delete?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    connect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    update?: UserStockUpdateWithWhereUniqueWithoutUserInput | UserStockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStockUpdateManyWithWhereWithoutUserInput | UserStockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStockScalarWhereInput | UserStockScalarWhereInput[]
  }

  export type TokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutUserInput | TokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutUserInput | TokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutUserInput | TokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserCreateNestedOneWithoutTransactionHistoryInput = {
    create?: XOR<UserCreateWithoutTransactionHistoryInput, UserUncheckedCreateWithoutTransactionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type MedicineCreateNestedOneWithoutTransactionHistoryInput = {
    create?: XOR<MedicineCreateWithoutTransactionHistoryInput, MedicineUncheckedCreateWithoutTransactionHistoryInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutTransactionHistoryInput
    connect?: MedicineWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutTransactionHistoryNestedInput = {
    create?: XOR<UserCreateWithoutTransactionHistoryInput, UserUncheckedCreateWithoutTransactionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionHistoryInput
    upsert?: UserUpsertWithoutTransactionHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionHistoryInput, UserUpdateWithoutTransactionHistoryInput>, UserUncheckedUpdateWithoutTransactionHistoryInput>
  }

  export type MedicineUpdateOneRequiredWithoutTransactionHistoryNestedInput = {
    create?: XOR<MedicineCreateWithoutTransactionHistoryInput, MedicineUncheckedCreateWithoutTransactionHistoryInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutTransactionHistoryInput
    upsert?: MedicineUpsertWithoutTransactionHistoryInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutTransactionHistoryInput, MedicineUpdateWithoutTransactionHistoryInput>, MedicineUncheckedUpdateWithoutTransactionHistoryInput>
  }

  export type TransactionHistoryCreateNestedManyWithoutMedicineInput = {
    create?: XOR<TransactionHistoryCreateWithoutMedicineInput, TransactionHistoryUncheckedCreateWithoutMedicineInput> | TransactionHistoryCreateWithoutMedicineInput[] | TransactionHistoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutMedicineInput | TransactionHistoryCreateOrConnectWithoutMedicineInput[]
    createMany?: TransactionHistoryCreateManyMedicineInputEnvelope
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
  }

  export type UserStockCreateNestedManyWithoutMedicineInput = {
    create?: XOR<UserStockCreateWithoutMedicineInput, UserStockUncheckedCreateWithoutMedicineInput> | UserStockCreateWithoutMedicineInput[] | UserStockUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: UserStockCreateOrConnectWithoutMedicineInput | UserStockCreateOrConnectWithoutMedicineInput[]
    createMany?: UserStockCreateManyMedicineInputEnvelope
    connect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
  }

  export type DiseaseMedicineCorrelationCreateNestedManyWithoutMedicineInput = {
    create?: XOR<DiseaseMedicineCorrelationCreateWithoutMedicineInput, DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput> | DiseaseMedicineCorrelationCreateWithoutMedicineInput[] | DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: DiseaseMedicineCorrelationCreateOrConnectWithoutMedicineInput | DiseaseMedicineCorrelationCreateOrConnectWithoutMedicineInput[]
    createMany?: DiseaseMedicineCorrelationCreateManyMedicineInputEnvelope
    connect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
  }

  export type TransactionHistoryUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<TransactionHistoryCreateWithoutMedicineInput, TransactionHistoryUncheckedCreateWithoutMedicineInput> | TransactionHistoryCreateWithoutMedicineInput[] | TransactionHistoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutMedicineInput | TransactionHistoryCreateOrConnectWithoutMedicineInput[]
    createMany?: TransactionHistoryCreateManyMedicineInputEnvelope
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
  }

  export type UserStockUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<UserStockCreateWithoutMedicineInput, UserStockUncheckedCreateWithoutMedicineInput> | UserStockCreateWithoutMedicineInput[] | UserStockUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: UserStockCreateOrConnectWithoutMedicineInput | UserStockCreateOrConnectWithoutMedicineInput[]
    createMany?: UserStockCreateManyMedicineInputEnvelope
    connect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
  }

  export type DiseaseMedicineCorrelationUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<DiseaseMedicineCorrelationCreateWithoutMedicineInput, DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput> | DiseaseMedicineCorrelationCreateWithoutMedicineInput[] | DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: DiseaseMedicineCorrelationCreateOrConnectWithoutMedicineInput | DiseaseMedicineCorrelationCreateOrConnectWithoutMedicineInput[]
    createMany?: DiseaseMedicineCorrelationCreateManyMedicineInputEnvelope
    connect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
  }

  export type TransactionHistoryUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<TransactionHistoryCreateWithoutMedicineInput, TransactionHistoryUncheckedCreateWithoutMedicineInput> | TransactionHistoryCreateWithoutMedicineInput[] | TransactionHistoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutMedicineInput | TransactionHistoryCreateOrConnectWithoutMedicineInput[]
    upsert?: TransactionHistoryUpsertWithWhereUniqueWithoutMedicineInput | TransactionHistoryUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: TransactionHistoryCreateManyMedicineInputEnvelope
    set?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    disconnect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    delete?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    update?: TransactionHistoryUpdateWithWhereUniqueWithoutMedicineInput | TransactionHistoryUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: TransactionHistoryUpdateManyWithWhereWithoutMedicineInput | TransactionHistoryUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
  }

  export type UserStockUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<UserStockCreateWithoutMedicineInput, UserStockUncheckedCreateWithoutMedicineInput> | UserStockCreateWithoutMedicineInput[] | UserStockUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: UserStockCreateOrConnectWithoutMedicineInput | UserStockCreateOrConnectWithoutMedicineInput[]
    upsert?: UserStockUpsertWithWhereUniqueWithoutMedicineInput | UserStockUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: UserStockCreateManyMedicineInputEnvelope
    set?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    disconnect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    delete?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    connect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    update?: UserStockUpdateWithWhereUniqueWithoutMedicineInput | UserStockUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: UserStockUpdateManyWithWhereWithoutMedicineInput | UserStockUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: UserStockScalarWhereInput | UserStockScalarWhereInput[]
  }

  export type DiseaseMedicineCorrelationUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<DiseaseMedicineCorrelationCreateWithoutMedicineInput, DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput> | DiseaseMedicineCorrelationCreateWithoutMedicineInput[] | DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: DiseaseMedicineCorrelationCreateOrConnectWithoutMedicineInput | DiseaseMedicineCorrelationCreateOrConnectWithoutMedicineInput[]
    upsert?: DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutMedicineInput | DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: DiseaseMedicineCorrelationCreateManyMedicineInputEnvelope
    set?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    disconnect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    delete?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    connect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    update?: DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutMedicineInput | DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: DiseaseMedicineCorrelationUpdateManyWithWhereWithoutMedicineInput | DiseaseMedicineCorrelationUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: DiseaseMedicineCorrelationScalarWhereInput | DiseaseMedicineCorrelationScalarWhereInput[]
  }

  export type TransactionHistoryUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<TransactionHistoryCreateWithoutMedicineInput, TransactionHistoryUncheckedCreateWithoutMedicineInput> | TransactionHistoryCreateWithoutMedicineInput[] | TransactionHistoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: TransactionHistoryCreateOrConnectWithoutMedicineInput | TransactionHistoryCreateOrConnectWithoutMedicineInput[]
    upsert?: TransactionHistoryUpsertWithWhereUniqueWithoutMedicineInput | TransactionHistoryUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: TransactionHistoryCreateManyMedicineInputEnvelope
    set?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    disconnect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    delete?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    connect?: TransactionHistoryWhereUniqueInput | TransactionHistoryWhereUniqueInput[]
    update?: TransactionHistoryUpdateWithWhereUniqueWithoutMedicineInput | TransactionHistoryUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: TransactionHistoryUpdateManyWithWhereWithoutMedicineInput | TransactionHistoryUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
  }

  export type UserStockUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<UserStockCreateWithoutMedicineInput, UserStockUncheckedCreateWithoutMedicineInput> | UserStockCreateWithoutMedicineInput[] | UserStockUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: UserStockCreateOrConnectWithoutMedicineInput | UserStockCreateOrConnectWithoutMedicineInput[]
    upsert?: UserStockUpsertWithWhereUniqueWithoutMedicineInput | UserStockUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: UserStockCreateManyMedicineInputEnvelope
    set?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    disconnect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    delete?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    connect?: UserStockWhereUniqueInput | UserStockWhereUniqueInput[]
    update?: UserStockUpdateWithWhereUniqueWithoutMedicineInput | UserStockUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: UserStockUpdateManyWithWhereWithoutMedicineInput | UserStockUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: UserStockScalarWhereInput | UserStockScalarWhereInput[]
  }

  export type DiseaseMedicineCorrelationUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<DiseaseMedicineCorrelationCreateWithoutMedicineInput, DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput> | DiseaseMedicineCorrelationCreateWithoutMedicineInput[] | DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: DiseaseMedicineCorrelationCreateOrConnectWithoutMedicineInput | DiseaseMedicineCorrelationCreateOrConnectWithoutMedicineInput[]
    upsert?: DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutMedicineInput | DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: DiseaseMedicineCorrelationCreateManyMedicineInputEnvelope
    set?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    disconnect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    delete?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    connect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    update?: DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutMedicineInput | DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: DiseaseMedicineCorrelationUpdateManyWithWhereWithoutMedicineInput | DiseaseMedicineCorrelationUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: DiseaseMedicineCorrelationScalarWhereInput | DiseaseMedicineCorrelationScalarWhereInput[]
  }

  export type MedicineCreateNestedOneWithoutUserStockInput = {
    create?: XOR<MedicineCreateWithoutUserStockInput, MedicineUncheckedCreateWithoutUserStockInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutUserStockInput
    connect?: MedicineWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserStockInput = {
    create?: XOR<UserCreateWithoutUserStockInput, UserUncheckedCreateWithoutUserStockInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStockInput
    connect?: UserWhereUniqueInput
  }

  export type StockBatchCreateNestedManyWithoutUserStockInput = {
    create?: XOR<StockBatchCreateWithoutUserStockInput, StockBatchUncheckedCreateWithoutUserStockInput> | StockBatchCreateWithoutUserStockInput[] | StockBatchUncheckedCreateWithoutUserStockInput[]
    connectOrCreate?: StockBatchCreateOrConnectWithoutUserStockInput | StockBatchCreateOrConnectWithoutUserStockInput[]
    createMany?: StockBatchCreateManyUserStockInputEnvelope
    connect?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
  }

  export type ForecastedUserStockCreateNestedOneWithoutUserStockInput = {
    create?: XOR<ForecastedUserStockCreateWithoutUserStockInput, ForecastedUserStockUncheckedCreateWithoutUserStockInput>
    connectOrCreate?: ForecastedUserStockCreateOrConnectWithoutUserStockInput
    connect?: ForecastedUserStockWhereUniqueInput
  }

  export type StockBatchUncheckedCreateNestedManyWithoutUserStockInput = {
    create?: XOR<StockBatchCreateWithoutUserStockInput, StockBatchUncheckedCreateWithoutUserStockInput> | StockBatchCreateWithoutUserStockInput[] | StockBatchUncheckedCreateWithoutUserStockInput[]
    connectOrCreate?: StockBatchCreateOrConnectWithoutUserStockInput | StockBatchCreateOrConnectWithoutUserStockInput[]
    createMany?: StockBatchCreateManyUserStockInputEnvelope
    connect?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
  }

  export type ForecastedUserStockUncheckedCreateNestedOneWithoutUserStockInput = {
    create?: XOR<ForecastedUserStockCreateWithoutUserStockInput, ForecastedUserStockUncheckedCreateWithoutUserStockInput>
    connectOrCreate?: ForecastedUserStockCreateOrConnectWithoutUserStockInput
    connect?: ForecastedUserStockWhereUniqueInput
  }

  export type MedicineUpdateOneRequiredWithoutUserStockNestedInput = {
    create?: XOR<MedicineCreateWithoutUserStockInput, MedicineUncheckedCreateWithoutUserStockInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutUserStockInput
    upsert?: MedicineUpsertWithoutUserStockInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutUserStockInput, MedicineUpdateWithoutUserStockInput>, MedicineUncheckedUpdateWithoutUserStockInput>
  }

  export type UserUpdateOneRequiredWithoutUserStockNestedInput = {
    create?: XOR<UserCreateWithoutUserStockInput, UserUncheckedCreateWithoutUserStockInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStockInput
    upsert?: UserUpsertWithoutUserStockInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserStockInput, UserUpdateWithoutUserStockInput>, UserUncheckedUpdateWithoutUserStockInput>
  }

  export type StockBatchUpdateManyWithoutUserStockNestedInput = {
    create?: XOR<StockBatchCreateWithoutUserStockInput, StockBatchUncheckedCreateWithoutUserStockInput> | StockBatchCreateWithoutUserStockInput[] | StockBatchUncheckedCreateWithoutUserStockInput[]
    connectOrCreate?: StockBatchCreateOrConnectWithoutUserStockInput | StockBatchCreateOrConnectWithoutUserStockInput[]
    upsert?: StockBatchUpsertWithWhereUniqueWithoutUserStockInput | StockBatchUpsertWithWhereUniqueWithoutUserStockInput[]
    createMany?: StockBatchCreateManyUserStockInputEnvelope
    set?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
    disconnect?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
    delete?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
    connect?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
    update?: StockBatchUpdateWithWhereUniqueWithoutUserStockInput | StockBatchUpdateWithWhereUniqueWithoutUserStockInput[]
    updateMany?: StockBatchUpdateManyWithWhereWithoutUserStockInput | StockBatchUpdateManyWithWhereWithoutUserStockInput[]
    deleteMany?: StockBatchScalarWhereInput | StockBatchScalarWhereInput[]
  }

  export type ForecastedUserStockUpdateOneWithoutUserStockNestedInput = {
    create?: XOR<ForecastedUserStockCreateWithoutUserStockInput, ForecastedUserStockUncheckedCreateWithoutUserStockInput>
    connectOrCreate?: ForecastedUserStockCreateOrConnectWithoutUserStockInput
    upsert?: ForecastedUserStockUpsertWithoutUserStockInput
    disconnect?: ForecastedUserStockWhereInput | boolean
    delete?: ForecastedUserStockWhereInput | boolean
    connect?: ForecastedUserStockWhereUniqueInput
    update?: XOR<XOR<ForecastedUserStockUpdateToOneWithWhereWithoutUserStockInput, ForecastedUserStockUpdateWithoutUserStockInput>, ForecastedUserStockUncheckedUpdateWithoutUserStockInput>
  }

  export type StockBatchUncheckedUpdateManyWithoutUserStockNestedInput = {
    create?: XOR<StockBatchCreateWithoutUserStockInput, StockBatchUncheckedCreateWithoutUserStockInput> | StockBatchCreateWithoutUserStockInput[] | StockBatchUncheckedCreateWithoutUserStockInput[]
    connectOrCreate?: StockBatchCreateOrConnectWithoutUserStockInput | StockBatchCreateOrConnectWithoutUserStockInput[]
    upsert?: StockBatchUpsertWithWhereUniqueWithoutUserStockInput | StockBatchUpsertWithWhereUniqueWithoutUserStockInput[]
    createMany?: StockBatchCreateManyUserStockInputEnvelope
    set?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
    disconnect?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
    delete?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
    connect?: StockBatchWhereUniqueInput | StockBatchWhereUniqueInput[]
    update?: StockBatchUpdateWithWhereUniqueWithoutUserStockInput | StockBatchUpdateWithWhereUniqueWithoutUserStockInput[]
    updateMany?: StockBatchUpdateManyWithWhereWithoutUserStockInput | StockBatchUpdateManyWithWhereWithoutUserStockInput[]
    deleteMany?: StockBatchScalarWhereInput | StockBatchScalarWhereInput[]
  }

  export type ForecastedUserStockUncheckedUpdateOneWithoutUserStockNestedInput = {
    create?: XOR<ForecastedUserStockCreateWithoutUserStockInput, ForecastedUserStockUncheckedCreateWithoutUserStockInput>
    connectOrCreate?: ForecastedUserStockCreateOrConnectWithoutUserStockInput
    upsert?: ForecastedUserStockUpsertWithoutUserStockInput
    disconnect?: ForecastedUserStockWhereInput | boolean
    delete?: ForecastedUserStockWhereInput | boolean
    connect?: ForecastedUserStockWhereUniqueInput
    update?: XOR<XOR<ForecastedUserStockUpdateToOneWithWhereWithoutUserStockInput, ForecastedUserStockUpdateWithoutUserStockInput>, ForecastedUserStockUncheckedUpdateWithoutUserStockInput>
  }

  export type UserStockCreateNestedOneWithoutBatchesInput = {
    create?: XOR<UserStockCreateWithoutBatchesInput, UserStockUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: UserStockCreateOrConnectWithoutBatchesInput
    connect?: UserStockWhereUniqueInput
  }

  export type UserStockUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<UserStockCreateWithoutBatchesInput, UserStockUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: UserStockCreateOrConnectWithoutBatchesInput
    upsert?: UserStockUpsertWithoutBatchesInput
    connect?: UserStockWhereUniqueInput
    update?: XOR<XOR<UserStockUpdateToOneWithWhereWithoutBatchesInput, UserStockUpdateWithoutBatchesInput>, UserStockUncheckedUpdateWithoutBatchesInput>
  }

  export type UserStockCreateNestedOneWithoutForecastedUserStockInput = {
    create?: XOR<UserStockCreateWithoutForecastedUserStockInput, UserStockUncheckedCreateWithoutForecastedUserStockInput>
    connectOrCreate?: UserStockCreateOrConnectWithoutForecastedUserStockInput
    connect?: UserStockWhereUniqueInput
  }

  export type UserStockUpdateOneRequiredWithoutForecastedUserStockNestedInput = {
    create?: XOR<UserStockCreateWithoutForecastedUserStockInput, UserStockUncheckedCreateWithoutForecastedUserStockInput>
    connectOrCreate?: UserStockCreateOrConnectWithoutForecastedUserStockInput
    upsert?: UserStockUpsertWithoutForecastedUserStockInput
    connect?: UserStockWhereUniqueInput
    update?: XOR<XOR<UserStockUpdateToOneWithWhereWithoutForecastedUserStockInput, UserStockUpdateWithoutForecastedUserStockInput>, UserStockUncheckedUpdateWithoutForecastedUserStockInput>
  }

  export type DiseaseMedicineCorrelationCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<DiseaseMedicineCorrelationCreateWithoutDiseaseInput, DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput> | DiseaseMedicineCorrelationCreateWithoutDiseaseInput[] | DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiseaseMedicineCorrelationCreateOrConnectWithoutDiseaseInput | DiseaseMedicineCorrelationCreateOrConnectWithoutDiseaseInput[]
    createMany?: DiseaseMedicineCorrelationCreateManyDiseaseInputEnvelope
    connect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
  }

  export type DiseaseRecordCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<DiseaseRecordCreateWithoutDiseaseInput, DiseaseRecordUncheckedCreateWithoutDiseaseInput> | DiseaseRecordCreateWithoutDiseaseInput[] | DiseaseRecordUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiseaseRecordCreateOrConnectWithoutDiseaseInput | DiseaseRecordCreateOrConnectWithoutDiseaseInput[]
    createMany?: DiseaseRecordCreateManyDiseaseInputEnvelope
    connect?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
  }

  export type DiseaseMedicineCorrelationUncheckedCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<DiseaseMedicineCorrelationCreateWithoutDiseaseInput, DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput> | DiseaseMedicineCorrelationCreateWithoutDiseaseInput[] | DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiseaseMedicineCorrelationCreateOrConnectWithoutDiseaseInput | DiseaseMedicineCorrelationCreateOrConnectWithoutDiseaseInput[]
    createMany?: DiseaseMedicineCorrelationCreateManyDiseaseInputEnvelope
    connect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
  }

  export type DiseaseRecordUncheckedCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<DiseaseRecordCreateWithoutDiseaseInput, DiseaseRecordUncheckedCreateWithoutDiseaseInput> | DiseaseRecordCreateWithoutDiseaseInput[] | DiseaseRecordUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiseaseRecordCreateOrConnectWithoutDiseaseInput | DiseaseRecordCreateOrConnectWithoutDiseaseInput[]
    createMany?: DiseaseRecordCreateManyDiseaseInputEnvelope
    connect?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
  }

  export type DiseaseMedicineCorrelationUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<DiseaseMedicineCorrelationCreateWithoutDiseaseInput, DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput> | DiseaseMedicineCorrelationCreateWithoutDiseaseInput[] | DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiseaseMedicineCorrelationCreateOrConnectWithoutDiseaseInput | DiseaseMedicineCorrelationCreateOrConnectWithoutDiseaseInput[]
    upsert?: DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutDiseaseInput | DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: DiseaseMedicineCorrelationCreateManyDiseaseInputEnvelope
    set?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    disconnect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    delete?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    connect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    update?: DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutDiseaseInput | DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: DiseaseMedicineCorrelationUpdateManyWithWhereWithoutDiseaseInput | DiseaseMedicineCorrelationUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: DiseaseMedicineCorrelationScalarWhereInput | DiseaseMedicineCorrelationScalarWhereInput[]
  }

  export type DiseaseRecordUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<DiseaseRecordCreateWithoutDiseaseInput, DiseaseRecordUncheckedCreateWithoutDiseaseInput> | DiseaseRecordCreateWithoutDiseaseInput[] | DiseaseRecordUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiseaseRecordCreateOrConnectWithoutDiseaseInput | DiseaseRecordCreateOrConnectWithoutDiseaseInput[]
    upsert?: DiseaseRecordUpsertWithWhereUniqueWithoutDiseaseInput | DiseaseRecordUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: DiseaseRecordCreateManyDiseaseInputEnvelope
    set?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
    disconnect?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
    delete?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
    connect?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
    update?: DiseaseRecordUpdateWithWhereUniqueWithoutDiseaseInput | DiseaseRecordUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: DiseaseRecordUpdateManyWithWhereWithoutDiseaseInput | DiseaseRecordUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: DiseaseRecordScalarWhereInput | DiseaseRecordScalarWhereInput[]
  }

  export type DiseaseMedicineCorrelationUncheckedUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<DiseaseMedicineCorrelationCreateWithoutDiseaseInput, DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput> | DiseaseMedicineCorrelationCreateWithoutDiseaseInput[] | DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiseaseMedicineCorrelationCreateOrConnectWithoutDiseaseInput | DiseaseMedicineCorrelationCreateOrConnectWithoutDiseaseInput[]
    upsert?: DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutDiseaseInput | DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: DiseaseMedicineCorrelationCreateManyDiseaseInputEnvelope
    set?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    disconnect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    delete?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    connect?: DiseaseMedicineCorrelationWhereUniqueInput | DiseaseMedicineCorrelationWhereUniqueInput[]
    update?: DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutDiseaseInput | DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: DiseaseMedicineCorrelationUpdateManyWithWhereWithoutDiseaseInput | DiseaseMedicineCorrelationUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: DiseaseMedicineCorrelationScalarWhereInput | DiseaseMedicineCorrelationScalarWhereInput[]
  }

  export type DiseaseRecordUncheckedUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<DiseaseRecordCreateWithoutDiseaseInput, DiseaseRecordUncheckedCreateWithoutDiseaseInput> | DiseaseRecordCreateWithoutDiseaseInput[] | DiseaseRecordUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiseaseRecordCreateOrConnectWithoutDiseaseInput | DiseaseRecordCreateOrConnectWithoutDiseaseInput[]
    upsert?: DiseaseRecordUpsertWithWhereUniqueWithoutDiseaseInput | DiseaseRecordUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: DiseaseRecordCreateManyDiseaseInputEnvelope
    set?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
    disconnect?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
    delete?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
    connect?: DiseaseRecordWhereUniqueInput | DiseaseRecordWhereUniqueInput[]
    update?: DiseaseRecordUpdateWithWhereUniqueWithoutDiseaseInput | DiseaseRecordUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: DiseaseRecordUpdateManyWithWhereWithoutDiseaseInput | DiseaseRecordUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: DiseaseRecordScalarWhereInput | DiseaseRecordScalarWhereInput[]
  }

  export type DiseaseCreateNestedOneWithoutDiseaseRecordsInput = {
    create?: XOR<DiseaseCreateWithoutDiseaseRecordsInput, DiseaseUncheckedCreateWithoutDiseaseRecordsInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiseaseRecordsInput
    connect?: DiseaseWhereUniqueInput
  }

  export type DiseaseUpdateOneRequiredWithoutDiseaseRecordsNestedInput = {
    create?: XOR<DiseaseCreateWithoutDiseaseRecordsInput, DiseaseUncheckedCreateWithoutDiseaseRecordsInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiseaseRecordsInput
    upsert?: DiseaseUpsertWithoutDiseaseRecordsInput
    connect?: DiseaseWhereUniqueInput
    update?: XOR<XOR<DiseaseUpdateToOneWithWhereWithoutDiseaseRecordsInput, DiseaseUpdateWithoutDiseaseRecordsInput>, DiseaseUncheckedUpdateWithoutDiseaseRecordsInput>
  }

  export type DiseaseCreateNestedOneWithoutDiseaseMedicineCorrelationInput = {
    create?: XOR<DiseaseCreateWithoutDiseaseMedicineCorrelationInput, DiseaseUncheckedCreateWithoutDiseaseMedicineCorrelationInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiseaseMedicineCorrelationInput
    connect?: DiseaseWhereUniqueInput
  }

  export type MedicineCreateNestedOneWithoutDiseaseMedicineCorrelationInput = {
    create?: XOR<MedicineCreateWithoutDiseaseMedicineCorrelationInput, MedicineUncheckedCreateWithoutDiseaseMedicineCorrelationInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutDiseaseMedicineCorrelationInput
    connect?: MedicineWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiseaseUpdateOneRequiredWithoutDiseaseMedicineCorrelationNestedInput = {
    create?: XOR<DiseaseCreateWithoutDiseaseMedicineCorrelationInput, DiseaseUncheckedCreateWithoutDiseaseMedicineCorrelationInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiseaseMedicineCorrelationInput
    upsert?: DiseaseUpsertWithoutDiseaseMedicineCorrelationInput
    connect?: DiseaseWhereUniqueInput
    update?: XOR<XOR<DiseaseUpdateToOneWithWhereWithoutDiseaseMedicineCorrelationInput, DiseaseUpdateWithoutDiseaseMedicineCorrelationInput>, DiseaseUncheckedUpdateWithoutDiseaseMedicineCorrelationInput>
  }

  export type MedicineUpdateOneRequiredWithoutDiseaseMedicineCorrelationNestedInput = {
    create?: XOR<MedicineCreateWithoutDiseaseMedicineCorrelationInput, MedicineUncheckedCreateWithoutDiseaseMedicineCorrelationInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutDiseaseMedicineCorrelationInput
    upsert?: MedicineUpsertWithoutDiseaseMedicineCorrelationInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutDiseaseMedicineCorrelationInput, MedicineUpdateWithoutDiseaseMedicineCorrelationInput>, MedicineUncheckedUpdateWithoutDiseaseMedicineCorrelationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TransactionHistoryCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number
    price?: number
    medicine: MedicineCreateNestedOneWithoutTransactionHistoryInput
  }

  export type TransactionHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineId: number
    amount?: number
    price?: number
  }

  export type TransactionHistoryCreateOrConnectWithoutUserInput = {
    where: TransactionHistoryWhereUniqueInput
    create: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput>
  }

  export type TransactionHistoryCreateManyUserInputEnvelope = {
    data: TransactionHistoryCreateManyUserInput | TransactionHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserStockCreateWithoutUserInput = {
    total?: number
    sold?: number
    medicine: MedicineCreateNestedOneWithoutUserStockInput
    batches?: StockBatchCreateNestedManyWithoutUserStockInput
    forecastedUserStock?: ForecastedUserStockCreateNestedOneWithoutUserStockInput
  }

  export type UserStockUncheckedCreateWithoutUserInput = {
    id?: number
    medicineId: number
    total?: number
    sold?: number
    batches?: StockBatchUncheckedCreateNestedManyWithoutUserStockInput
    forecastedUserStock?: ForecastedUserStockUncheckedCreateNestedOneWithoutUserStockInput
  }

  export type UserStockCreateOrConnectWithoutUserInput = {
    where: UserStockWhereUniqueInput
    create: XOR<UserStockCreateWithoutUserInput, UserStockUncheckedCreateWithoutUserInput>
  }

  export type UserStockCreateManyUserInputEnvelope = {
    data: UserStockCreateManyUserInput | UserStockCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokensCreateWithoutUserInput = {
    refresh: string
    access: string
  }

  export type TokensUncheckedCreateWithoutUserInput = {
    refresh: string
    access: string
  }

  export type TokensCreateOrConnectWithoutUserInput = {
    where: TokensWhereUniqueInput
    create: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput>
  }

  export type TokensCreateManyUserInputEnvelope = {
    data: TokensCreateManyUserInput | TokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionHistoryWhereUniqueInput
    update: XOR<TransactionHistoryUpdateWithoutUserInput, TransactionHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionHistoryCreateWithoutUserInput, TransactionHistoryUncheckedCreateWithoutUserInput>
  }

  export type TransactionHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionHistoryWhereUniqueInput
    data: XOR<TransactionHistoryUpdateWithoutUserInput, TransactionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type TransactionHistoryUpdateManyWithWhereWithoutUserInput = {
    where: TransactionHistoryScalarWhereInput
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionHistoryScalarWhereInput = {
    AND?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
    OR?: TransactionHistoryScalarWhereInput[]
    NOT?: TransactionHistoryScalarWhereInput | TransactionHistoryScalarWhereInput[]
    id?: IntFilter<"TransactionHistory"> | number
    createdAt?: DateTimeFilter<"TransactionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionHistory"> | Date | string
    medicineId?: IntFilter<"TransactionHistory"> | number
    amount?: IntFilter<"TransactionHistory"> | number
    userId?: IntFilter<"TransactionHistory"> | number
    price?: IntFilter<"TransactionHistory"> | number
  }

  export type UserStockUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStockWhereUniqueInput
    update: XOR<UserStockUpdateWithoutUserInput, UserStockUncheckedUpdateWithoutUserInput>
    create: XOR<UserStockCreateWithoutUserInput, UserStockUncheckedCreateWithoutUserInput>
  }

  export type UserStockUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStockWhereUniqueInput
    data: XOR<UserStockUpdateWithoutUserInput, UserStockUncheckedUpdateWithoutUserInput>
  }

  export type UserStockUpdateManyWithWhereWithoutUserInput = {
    where: UserStockScalarWhereInput
    data: XOR<UserStockUpdateManyMutationInput, UserStockUncheckedUpdateManyWithoutUserInput>
  }

  export type UserStockScalarWhereInput = {
    AND?: UserStockScalarWhereInput | UserStockScalarWhereInput[]
    OR?: UserStockScalarWhereInput[]
    NOT?: UserStockScalarWhereInput | UserStockScalarWhereInput[]
    id?: IntFilter<"UserStock"> | number
    medicineId?: IntFilter<"UserStock"> | number
    total?: IntFilter<"UserStock"> | number
    sold?: IntFilter<"UserStock"> | number
    userId?: IntFilter<"UserStock"> | number
  }

  export type TokensUpsertWithWhereUniqueWithoutUserInput = {
    where: TokensWhereUniqueInput
    update: XOR<TokensUpdateWithoutUserInput, TokensUncheckedUpdateWithoutUserInput>
    create: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput>
  }

  export type TokensUpdateWithWhereUniqueWithoutUserInput = {
    where: TokensWhereUniqueInput
    data: XOR<TokensUpdateWithoutUserInput, TokensUncheckedUpdateWithoutUserInput>
  }

  export type TokensUpdateManyWithWhereWithoutUserInput = {
    where: TokensScalarWhereInput
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyWithoutUserInput>
  }

  export type TokensScalarWhereInput = {
    AND?: TokensScalarWhereInput | TokensScalarWhereInput[]
    OR?: TokensScalarWhereInput[]
    NOT?: TokensScalarWhereInput | TokensScalarWhereInput[]
    userId?: IntFilter<"Tokens"> | number
    refresh?: StringFilter<"Tokens"> | string
    access?: StringFilter<"Tokens"> | string
  }

  export type UserCreateWithoutTokensInput = {
    username: string
    name: string
    passwordHash: string
    region: string
    sales?: number
    quantitySold?: number
    price?: UserCreatepriceInput | number[]
    transactionHistory?: TransactionHistoryCreateNestedManyWithoutUserInput
    userStock?: UserStockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: number
    username: string
    name: string
    passwordHash: string
    region: string
    sales?: number
    quantitySold?: number
    price?: UserCreatepriceInput | number[]
    transactionHistory?: TransactionHistoryUncheckedCreateNestedManyWithoutUserInput
    userStock?: UserStockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
    transactionHistory?: TransactionHistoryUpdateManyWithoutUserNestedInput
    userStock?: UserStockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
    transactionHistory?: TransactionHistoryUncheckedUpdateManyWithoutUserNestedInput
    userStock?: UserStockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionHistoryInput = {
    username: string
    name: string
    passwordHash: string
    region: string
    sales?: number
    quantitySold?: number
    price?: UserCreatepriceInput | number[]
    userStock?: UserStockCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionHistoryInput = {
    id?: number
    username: string
    name: string
    passwordHash: string
    region: string
    sales?: number
    quantitySold?: number
    price?: UserCreatepriceInput | number[]
    userStock?: UserStockUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionHistoryInput, UserUncheckedCreateWithoutTransactionHistoryInput>
  }

  export type MedicineCreateWithoutTransactionHistoryInput = {
    name: string
    description: string
    brief: string
    imageUrl: string
    userStock?: UserStockCreateNestedManyWithoutMedicineInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutTransactionHistoryInput = {
    id?: number
    name: string
    description: string
    brief: string
    imageUrl: string
    userStock?: UserStockUncheckedCreateNestedManyWithoutMedicineInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutTransactionHistoryInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutTransactionHistoryInput, MedicineUncheckedCreateWithoutTransactionHistoryInput>
  }

  export type UserUpsertWithoutTransactionHistoryInput = {
    update: XOR<UserUpdateWithoutTransactionHistoryInput, UserUncheckedUpdateWithoutTransactionHistoryInput>
    create: XOR<UserCreateWithoutTransactionHistoryInput, UserUncheckedCreateWithoutTransactionHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionHistoryInput, UserUncheckedUpdateWithoutTransactionHistoryInput>
  }

  export type UserUpdateWithoutTransactionHistoryInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
    userStock?: UserStockUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
    userStock?: UserStockUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicineUpsertWithoutTransactionHistoryInput = {
    update: XOR<MedicineUpdateWithoutTransactionHistoryInput, MedicineUncheckedUpdateWithoutTransactionHistoryInput>
    create: XOR<MedicineCreateWithoutTransactionHistoryInput, MedicineUncheckedCreateWithoutTransactionHistoryInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutTransactionHistoryInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutTransactionHistoryInput, MedicineUncheckedUpdateWithoutTransactionHistoryInput>
  }

  export type MedicineUpdateWithoutTransactionHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userStock?: UserStockUpdateManyWithoutMedicineNestedInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutTransactionHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userStock?: UserStockUncheckedUpdateManyWithoutMedicineNestedInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type TransactionHistoryCreateWithoutMedicineInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number
    price?: number
    user: UserCreateNestedOneWithoutTransactionHistoryInput
  }

  export type TransactionHistoryUncheckedCreateWithoutMedicineInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number
    userId: number
    price?: number
  }

  export type TransactionHistoryCreateOrConnectWithoutMedicineInput = {
    where: TransactionHistoryWhereUniqueInput
    create: XOR<TransactionHistoryCreateWithoutMedicineInput, TransactionHistoryUncheckedCreateWithoutMedicineInput>
  }

  export type TransactionHistoryCreateManyMedicineInputEnvelope = {
    data: TransactionHistoryCreateManyMedicineInput | TransactionHistoryCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type UserStockCreateWithoutMedicineInput = {
    total?: number
    sold?: number
    user: UserCreateNestedOneWithoutUserStockInput
    batches?: StockBatchCreateNestedManyWithoutUserStockInput
    forecastedUserStock?: ForecastedUserStockCreateNestedOneWithoutUserStockInput
  }

  export type UserStockUncheckedCreateWithoutMedicineInput = {
    id?: number
    total?: number
    sold?: number
    userId: number
    batches?: StockBatchUncheckedCreateNestedManyWithoutUserStockInput
    forecastedUserStock?: ForecastedUserStockUncheckedCreateNestedOneWithoutUserStockInput
  }

  export type UserStockCreateOrConnectWithoutMedicineInput = {
    where: UserStockWhereUniqueInput
    create: XOR<UserStockCreateWithoutMedicineInput, UserStockUncheckedCreateWithoutMedicineInput>
  }

  export type UserStockCreateManyMedicineInputEnvelope = {
    data: UserStockCreateManyMedicineInput | UserStockCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type DiseaseMedicineCorrelationCreateWithoutMedicineInput = {
    correlationPercentage: number
    disease: DiseaseCreateNestedOneWithoutDiseaseMedicineCorrelationInput
  }

  export type DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput = {
    id?: number
    diseaseId: number
    correlationPercentage: number
  }

  export type DiseaseMedicineCorrelationCreateOrConnectWithoutMedicineInput = {
    where: DiseaseMedicineCorrelationWhereUniqueInput
    create: XOR<DiseaseMedicineCorrelationCreateWithoutMedicineInput, DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput>
  }

  export type DiseaseMedicineCorrelationCreateManyMedicineInputEnvelope = {
    data: DiseaseMedicineCorrelationCreateManyMedicineInput | DiseaseMedicineCorrelationCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type TransactionHistoryUpsertWithWhereUniqueWithoutMedicineInput = {
    where: TransactionHistoryWhereUniqueInput
    update: XOR<TransactionHistoryUpdateWithoutMedicineInput, TransactionHistoryUncheckedUpdateWithoutMedicineInput>
    create: XOR<TransactionHistoryCreateWithoutMedicineInput, TransactionHistoryUncheckedCreateWithoutMedicineInput>
  }

  export type TransactionHistoryUpdateWithWhereUniqueWithoutMedicineInput = {
    where: TransactionHistoryWhereUniqueInput
    data: XOR<TransactionHistoryUpdateWithoutMedicineInput, TransactionHistoryUncheckedUpdateWithoutMedicineInput>
  }

  export type TransactionHistoryUpdateManyWithWhereWithoutMedicineInput = {
    where: TransactionHistoryScalarWhereInput
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyWithoutMedicineInput>
  }

  export type UserStockUpsertWithWhereUniqueWithoutMedicineInput = {
    where: UserStockWhereUniqueInput
    update: XOR<UserStockUpdateWithoutMedicineInput, UserStockUncheckedUpdateWithoutMedicineInput>
    create: XOR<UserStockCreateWithoutMedicineInput, UserStockUncheckedCreateWithoutMedicineInput>
  }

  export type UserStockUpdateWithWhereUniqueWithoutMedicineInput = {
    where: UserStockWhereUniqueInput
    data: XOR<UserStockUpdateWithoutMedicineInput, UserStockUncheckedUpdateWithoutMedicineInput>
  }

  export type UserStockUpdateManyWithWhereWithoutMedicineInput = {
    where: UserStockScalarWhereInput
    data: XOR<UserStockUpdateManyMutationInput, UserStockUncheckedUpdateManyWithoutMedicineInput>
  }

  export type DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutMedicineInput = {
    where: DiseaseMedicineCorrelationWhereUniqueInput
    update: XOR<DiseaseMedicineCorrelationUpdateWithoutMedicineInput, DiseaseMedicineCorrelationUncheckedUpdateWithoutMedicineInput>
    create: XOR<DiseaseMedicineCorrelationCreateWithoutMedicineInput, DiseaseMedicineCorrelationUncheckedCreateWithoutMedicineInput>
  }

  export type DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutMedicineInput = {
    where: DiseaseMedicineCorrelationWhereUniqueInput
    data: XOR<DiseaseMedicineCorrelationUpdateWithoutMedicineInput, DiseaseMedicineCorrelationUncheckedUpdateWithoutMedicineInput>
  }

  export type DiseaseMedicineCorrelationUpdateManyWithWhereWithoutMedicineInput = {
    where: DiseaseMedicineCorrelationScalarWhereInput
    data: XOR<DiseaseMedicineCorrelationUpdateManyMutationInput, DiseaseMedicineCorrelationUncheckedUpdateManyWithoutMedicineInput>
  }

  export type DiseaseMedicineCorrelationScalarWhereInput = {
    AND?: DiseaseMedicineCorrelationScalarWhereInput | DiseaseMedicineCorrelationScalarWhereInput[]
    OR?: DiseaseMedicineCorrelationScalarWhereInput[]
    NOT?: DiseaseMedicineCorrelationScalarWhereInput | DiseaseMedicineCorrelationScalarWhereInput[]
    id?: IntFilter<"DiseaseMedicineCorrelation"> | number
    diseaseId?: IntFilter<"DiseaseMedicineCorrelation"> | number
    medicineId?: IntFilter<"DiseaseMedicineCorrelation"> | number
    correlationPercentage?: FloatFilter<"DiseaseMedicineCorrelation"> | number
  }

  export type MedicineCreateWithoutUserStockInput = {
    name: string
    description: string
    brief: string
    imageUrl: string
    transactionHistory?: TransactionHistoryCreateNestedManyWithoutMedicineInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutUserStockInput = {
    id?: number
    name: string
    description: string
    brief: string
    imageUrl: string
    transactionHistory?: TransactionHistoryUncheckedCreateNestedManyWithoutMedicineInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutUserStockInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutUserStockInput, MedicineUncheckedCreateWithoutUserStockInput>
  }

  export type UserCreateWithoutUserStockInput = {
    username: string
    name: string
    passwordHash: string
    region: string
    sales?: number
    quantitySold?: number
    price?: UserCreatepriceInput | number[]
    transactionHistory?: TransactionHistoryCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserStockInput = {
    id?: number
    username: string
    name: string
    passwordHash: string
    region: string
    sales?: number
    quantitySold?: number
    price?: UserCreatepriceInput | number[]
    transactionHistory?: TransactionHistoryUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserStockInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStockInput, UserUncheckedCreateWithoutUserStockInput>
  }

  export type StockBatchCreateWithoutUserStockInput = {
    expirationDate: Date | string
    amount?: number
  }

  export type StockBatchUncheckedCreateWithoutUserStockInput = {
    id?: number
    expirationDate: Date | string
    amount?: number
  }

  export type StockBatchCreateOrConnectWithoutUserStockInput = {
    where: StockBatchWhereUniqueInput
    create: XOR<StockBatchCreateWithoutUserStockInput, StockBatchUncheckedCreateWithoutUserStockInput>
  }

  export type StockBatchCreateManyUserStockInputEnvelope = {
    data: StockBatchCreateManyUserStockInput | StockBatchCreateManyUserStockInput[]
    skipDuplicates?: boolean
  }

  export type ForecastedUserStockCreateWithoutUserStockInput = {
    requiredStock: number
    percentage: number
    stockoutDate: Date | string
  }

  export type ForecastedUserStockUncheckedCreateWithoutUserStockInput = {
    id?: number
    requiredStock: number
    percentage: number
    stockoutDate: Date | string
  }

  export type ForecastedUserStockCreateOrConnectWithoutUserStockInput = {
    where: ForecastedUserStockWhereUniqueInput
    create: XOR<ForecastedUserStockCreateWithoutUserStockInput, ForecastedUserStockUncheckedCreateWithoutUserStockInput>
  }

  export type MedicineUpsertWithoutUserStockInput = {
    update: XOR<MedicineUpdateWithoutUserStockInput, MedicineUncheckedUpdateWithoutUserStockInput>
    create: XOR<MedicineCreateWithoutUserStockInput, MedicineUncheckedCreateWithoutUserStockInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutUserStockInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutUserStockInput, MedicineUncheckedUpdateWithoutUserStockInput>
  }

  export type MedicineUpdateWithoutUserStockInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    transactionHistory?: TransactionHistoryUpdateManyWithoutMedicineNestedInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutUserStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    transactionHistory?: TransactionHistoryUncheckedUpdateManyWithoutMedicineNestedInput
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type UserUpsertWithoutUserStockInput = {
    update: XOR<UserUpdateWithoutUserStockInput, UserUncheckedUpdateWithoutUserStockInput>
    create: XOR<UserCreateWithoutUserStockInput, UserUncheckedCreateWithoutUserStockInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserStockInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserStockInput, UserUncheckedUpdateWithoutUserStockInput>
  }

  export type UserUpdateWithoutUserStockInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
    transactionHistory?: TransactionHistoryUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sales?: IntFieldUpdateOperationsInput | number
    quantitySold?: IntFieldUpdateOperationsInput | number
    price?: UserUpdatepriceInput | number[]
    transactionHistory?: TransactionHistoryUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StockBatchUpsertWithWhereUniqueWithoutUserStockInput = {
    where: StockBatchWhereUniqueInput
    update: XOR<StockBatchUpdateWithoutUserStockInput, StockBatchUncheckedUpdateWithoutUserStockInput>
    create: XOR<StockBatchCreateWithoutUserStockInput, StockBatchUncheckedCreateWithoutUserStockInput>
  }

  export type StockBatchUpdateWithWhereUniqueWithoutUserStockInput = {
    where: StockBatchWhereUniqueInput
    data: XOR<StockBatchUpdateWithoutUserStockInput, StockBatchUncheckedUpdateWithoutUserStockInput>
  }

  export type StockBatchUpdateManyWithWhereWithoutUserStockInput = {
    where: StockBatchScalarWhereInput
    data: XOR<StockBatchUpdateManyMutationInput, StockBatchUncheckedUpdateManyWithoutUserStockInput>
  }

  export type StockBatchScalarWhereInput = {
    AND?: StockBatchScalarWhereInput | StockBatchScalarWhereInput[]
    OR?: StockBatchScalarWhereInput[]
    NOT?: StockBatchScalarWhereInput | StockBatchScalarWhereInput[]
    id?: IntFilter<"StockBatch"> | number
    expirationDate?: DateTimeFilter<"StockBatch"> | Date | string
    amount?: IntFilter<"StockBatch"> | number
    userStockId?: IntFilter<"StockBatch"> | number
  }

  export type ForecastedUserStockUpsertWithoutUserStockInput = {
    update: XOR<ForecastedUserStockUpdateWithoutUserStockInput, ForecastedUserStockUncheckedUpdateWithoutUserStockInput>
    create: XOR<ForecastedUserStockCreateWithoutUserStockInput, ForecastedUserStockUncheckedCreateWithoutUserStockInput>
    where?: ForecastedUserStockWhereInput
  }

  export type ForecastedUserStockUpdateToOneWithWhereWithoutUserStockInput = {
    where?: ForecastedUserStockWhereInput
    data: XOR<ForecastedUserStockUpdateWithoutUserStockInput, ForecastedUserStockUncheckedUpdateWithoutUserStockInput>
  }

  export type ForecastedUserStockUpdateWithoutUserStockInput = {
    requiredStock?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    stockoutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastedUserStockUncheckedUpdateWithoutUserStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    requiredStock?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    stockoutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStockCreateWithoutBatchesInput = {
    total?: number
    sold?: number
    medicine: MedicineCreateNestedOneWithoutUserStockInput
    user: UserCreateNestedOneWithoutUserStockInput
    forecastedUserStock?: ForecastedUserStockCreateNestedOneWithoutUserStockInput
  }

  export type UserStockUncheckedCreateWithoutBatchesInput = {
    id?: number
    medicineId: number
    total?: number
    sold?: number
    userId: number
    forecastedUserStock?: ForecastedUserStockUncheckedCreateNestedOneWithoutUserStockInput
  }

  export type UserStockCreateOrConnectWithoutBatchesInput = {
    where: UserStockWhereUniqueInput
    create: XOR<UserStockCreateWithoutBatchesInput, UserStockUncheckedCreateWithoutBatchesInput>
  }

  export type UserStockUpsertWithoutBatchesInput = {
    update: XOR<UserStockUpdateWithoutBatchesInput, UserStockUncheckedUpdateWithoutBatchesInput>
    create: XOR<UserStockCreateWithoutBatchesInput, UserStockUncheckedCreateWithoutBatchesInput>
    where?: UserStockWhereInput
  }

  export type UserStockUpdateToOneWithWhereWithoutBatchesInput = {
    where?: UserStockWhereInput
    data: XOR<UserStockUpdateWithoutBatchesInput, UserStockUncheckedUpdateWithoutBatchesInput>
  }

  export type UserStockUpdateWithoutBatchesInput = {
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutUserStockNestedInput
    user?: UserUpdateOneRequiredWithoutUserStockNestedInput
    forecastedUserStock?: ForecastedUserStockUpdateOneWithoutUserStockNestedInput
  }

  export type UserStockUncheckedUpdateWithoutBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    forecastedUserStock?: ForecastedUserStockUncheckedUpdateOneWithoutUserStockNestedInput
  }

  export type UserStockCreateWithoutForecastedUserStockInput = {
    total?: number
    sold?: number
    medicine: MedicineCreateNestedOneWithoutUserStockInput
    user: UserCreateNestedOneWithoutUserStockInput
    batches?: StockBatchCreateNestedManyWithoutUserStockInput
  }

  export type UserStockUncheckedCreateWithoutForecastedUserStockInput = {
    id?: number
    medicineId: number
    total?: number
    sold?: number
    userId: number
    batches?: StockBatchUncheckedCreateNestedManyWithoutUserStockInput
  }

  export type UserStockCreateOrConnectWithoutForecastedUserStockInput = {
    where: UserStockWhereUniqueInput
    create: XOR<UserStockCreateWithoutForecastedUserStockInput, UserStockUncheckedCreateWithoutForecastedUserStockInput>
  }

  export type UserStockUpsertWithoutForecastedUserStockInput = {
    update: XOR<UserStockUpdateWithoutForecastedUserStockInput, UserStockUncheckedUpdateWithoutForecastedUserStockInput>
    create: XOR<UserStockCreateWithoutForecastedUserStockInput, UserStockUncheckedCreateWithoutForecastedUserStockInput>
    where?: UserStockWhereInput
  }

  export type UserStockUpdateToOneWithWhereWithoutForecastedUserStockInput = {
    where?: UserStockWhereInput
    data: XOR<UserStockUpdateWithoutForecastedUserStockInput, UserStockUncheckedUpdateWithoutForecastedUserStockInput>
  }

  export type UserStockUpdateWithoutForecastedUserStockInput = {
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutUserStockNestedInput
    user?: UserUpdateOneRequiredWithoutUserStockNestedInput
    batches?: StockBatchUpdateManyWithoutUserStockNestedInput
  }

  export type UserStockUncheckedUpdateWithoutForecastedUserStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    batches?: StockBatchUncheckedUpdateManyWithoutUserStockNestedInput
  }

  export type DiseaseMedicineCorrelationCreateWithoutDiseaseInput = {
    correlationPercentage: number
    medicine: MedicineCreateNestedOneWithoutDiseaseMedicineCorrelationInput
  }

  export type DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput = {
    id?: number
    medicineId: number
    correlationPercentage: number
  }

  export type DiseaseMedicineCorrelationCreateOrConnectWithoutDiseaseInput = {
    where: DiseaseMedicineCorrelationWhereUniqueInput
    create: XOR<DiseaseMedicineCorrelationCreateWithoutDiseaseInput, DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput>
  }

  export type DiseaseMedicineCorrelationCreateManyDiseaseInputEnvelope = {
    data: DiseaseMedicineCorrelationCreateManyDiseaseInput | DiseaseMedicineCorrelationCreateManyDiseaseInput[]
    skipDuplicates?: boolean
  }

  export type DiseaseRecordCreateWithoutDiseaseInput = {
    amount: number
    timestamp: Date | string
  }

  export type DiseaseRecordUncheckedCreateWithoutDiseaseInput = {
    id?: number
    amount: number
    timestamp: Date | string
  }

  export type DiseaseRecordCreateOrConnectWithoutDiseaseInput = {
    where: DiseaseRecordWhereUniqueInput
    create: XOR<DiseaseRecordCreateWithoutDiseaseInput, DiseaseRecordUncheckedCreateWithoutDiseaseInput>
  }

  export type DiseaseRecordCreateManyDiseaseInputEnvelope = {
    data: DiseaseRecordCreateManyDiseaseInput | DiseaseRecordCreateManyDiseaseInput[]
    skipDuplicates?: boolean
  }

  export type DiseaseMedicineCorrelationUpsertWithWhereUniqueWithoutDiseaseInput = {
    where: DiseaseMedicineCorrelationWhereUniqueInput
    update: XOR<DiseaseMedicineCorrelationUpdateWithoutDiseaseInput, DiseaseMedicineCorrelationUncheckedUpdateWithoutDiseaseInput>
    create: XOR<DiseaseMedicineCorrelationCreateWithoutDiseaseInput, DiseaseMedicineCorrelationUncheckedCreateWithoutDiseaseInput>
  }

  export type DiseaseMedicineCorrelationUpdateWithWhereUniqueWithoutDiseaseInput = {
    where: DiseaseMedicineCorrelationWhereUniqueInput
    data: XOR<DiseaseMedicineCorrelationUpdateWithoutDiseaseInput, DiseaseMedicineCorrelationUncheckedUpdateWithoutDiseaseInput>
  }

  export type DiseaseMedicineCorrelationUpdateManyWithWhereWithoutDiseaseInput = {
    where: DiseaseMedicineCorrelationScalarWhereInput
    data: XOR<DiseaseMedicineCorrelationUpdateManyMutationInput, DiseaseMedicineCorrelationUncheckedUpdateManyWithoutDiseaseInput>
  }

  export type DiseaseRecordUpsertWithWhereUniqueWithoutDiseaseInput = {
    where: DiseaseRecordWhereUniqueInput
    update: XOR<DiseaseRecordUpdateWithoutDiseaseInput, DiseaseRecordUncheckedUpdateWithoutDiseaseInput>
    create: XOR<DiseaseRecordCreateWithoutDiseaseInput, DiseaseRecordUncheckedCreateWithoutDiseaseInput>
  }

  export type DiseaseRecordUpdateWithWhereUniqueWithoutDiseaseInput = {
    where: DiseaseRecordWhereUniqueInput
    data: XOR<DiseaseRecordUpdateWithoutDiseaseInput, DiseaseRecordUncheckedUpdateWithoutDiseaseInput>
  }

  export type DiseaseRecordUpdateManyWithWhereWithoutDiseaseInput = {
    where: DiseaseRecordScalarWhereInput
    data: XOR<DiseaseRecordUpdateManyMutationInput, DiseaseRecordUncheckedUpdateManyWithoutDiseaseInput>
  }

  export type DiseaseRecordScalarWhereInput = {
    AND?: DiseaseRecordScalarWhereInput | DiseaseRecordScalarWhereInput[]
    OR?: DiseaseRecordScalarWhereInput[]
    NOT?: DiseaseRecordScalarWhereInput | DiseaseRecordScalarWhereInput[]
    id?: IntFilter<"DiseaseRecord"> | number
    diseaseId?: IntFilter<"DiseaseRecord"> | number
    amount?: IntFilter<"DiseaseRecord"> | number
    timestamp?: DateTimeFilter<"DiseaseRecord"> | Date | string
  }

  export type DiseaseCreateWithoutDiseaseRecordsInput = {
    name: string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUncheckedCreateWithoutDiseaseRecordsInput = {
    id?: number
    name: string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseCreateOrConnectWithoutDiseaseRecordsInput = {
    where: DiseaseWhereUniqueInput
    create: XOR<DiseaseCreateWithoutDiseaseRecordsInput, DiseaseUncheckedCreateWithoutDiseaseRecordsInput>
  }

  export type DiseaseUpsertWithoutDiseaseRecordsInput = {
    update: XOR<DiseaseUpdateWithoutDiseaseRecordsInput, DiseaseUncheckedUpdateWithoutDiseaseRecordsInput>
    create: XOR<DiseaseCreateWithoutDiseaseRecordsInput, DiseaseUncheckedCreateWithoutDiseaseRecordsInput>
    where?: DiseaseWhereInput
  }

  export type DiseaseUpdateToOneWithWhereWithoutDiseaseRecordsInput = {
    where?: DiseaseWhereInput
    data: XOR<DiseaseUpdateWithoutDiseaseRecordsInput, DiseaseUncheckedUpdateWithoutDiseaseRecordsInput>
  }

  export type DiseaseUpdateWithoutDiseaseRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateWithoutDiseaseRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    diseaseMedicineCorrelation?: DiseaseMedicineCorrelationUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseCreateWithoutDiseaseMedicineCorrelationInput = {
    name: string
    diseaseRecords?: DiseaseRecordCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUncheckedCreateWithoutDiseaseMedicineCorrelationInput = {
    id?: number
    name: string
    diseaseRecords?: DiseaseRecordUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseCreateOrConnectWithoutDiseaseMedicineCorrelationInput = {
    where: DiseaseWhereUniqueInput
    create: XOR<DiseaseCreateWithoutDiseaseMedicineCorrelationInput, DiseaseUncheckedCreateWithoutDiseaseMedicineCorrelationInput>
  }

  export type MedicineCreateWithoutDiseaseMedicineCorrelationInput = {
    name: string
    description: string
    brief: string
    imageUrl: string
    transactionHistory?: TransactionHistoryCreateNestedManyWithoutMedicineInput
    userStock?: UserStockCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutDiseaseMedicineCorrelationInput = {
    id?: number
    name: string
    description: string
    brief: string
    imageUrl: string
    transactionHistory?: TransactionHistoryUncheckedCreateNestedManyWithoutMedicineInput
    userStock?: UserStockUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutDiseaseMedicineCorrelationInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutDiseaseMedicineCorrelationInput, MedicineUncheckedCreateWithoutDiseaseMedicineCorrelationInput>
  }

  export type DiseaseUpsertWithoutDiseaseMedicineCorrelationInput = {
    update: XOR<DiseaseUpdateWithoutDiseaseMedicineCorrelationInput, DiseaseUncheckedUpdateWithoutDiseaseMedicineCorrelationInput>
    create: XOR<DiseaseCreateWithoutDiseaseMedicineCorrelationInput, DiseaseUncheckedCreateWithoutDiseaseMedicineCorrelationInput>
    where?: DiseaseWhereInput
  }

  export type DiseaseUpdateToOneWithWhereWithoutDiseaseMedicineCorrelationInput = {
    where?: DiseaseWhereInput
    data: XOR<DiseaseUpdateWithoutDiseaseMedicineCorrelationInput, DiseaseUncheckedUpdateWithoutDiseaseMedicineCorrelationInput>
  }

  export type DiseaseUpdateWithoutDiseaseMedicineCorrelationInput = {
    name?: StringFieldUpdateOperationsInput | string
    diseaseRecords?: DiseaseRecordUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateWithoutDiseaseMedicineCorrelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    diseaseRecords?: DiseaseRecordUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type MedicineUpsertWithoutDiseaseMedicineCorrelationInput = {
    update: XOR<MedicineUpdateWithoutDiseaseMedicineCorrelationInput, MedicineUncheckedUpdateWithoutDiseaseMedicineCorrelationInput>
    create: XOR<MedicineCreateWithoutDiseaseMedicineCorrelationInput, MedicineUncheckedCreateWithoutDiseaseMedicineCorrelationInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutDiseaseMedicineCorrelationInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutDiseaseMedicineCorrelationInput, MedicineUncheckedUpdateWithoutDiseaseMedicineCorrelationInput>
  }

  export type MedicineUpdateWithoutDiseaseMedicineCorrelationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    transactionHistory?: TransactionHistoryUpdateManyWithoutMedicineNestedInput
    userStock?: UserStockUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutDiseaseMedicineCorrelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brief?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    transactionHistory?: TransactionHistoryUncheckedUpdateManyWithoutMedicineNestedInput
    userStock?: UserStockUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type TransactionHistoryCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineId: number
    amount?: number
    price?: number
  }

  export type UserStockCreateManyUserInput = {
    id?: number
    medicineId: number
    total?: number
    sold?: number
  }

  export type TokensCreateManyUserInput = {
    refresh: string
    access: string
  }

  export type TransactionHistoryUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutTransactionHistoryNestedInput
  }

  export type TransactionHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type UserStockUpdateWithoutUserInput = {
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutUserStockNestedInput
    batches?: StockBatchUpdateManyWithoutUserStockNestedInput
    forecastedUserStock?: ForecastedUserStockUpdateOneWithoutUserStockNestedInput
  }

  export type UserStockUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    batches?: StockBatchUncheckedUpdateManyWithoutUserStockNestedInput
    forecastedUserStock?: ForecastedUserStockUncheckedUpdateOneWithoutUserStockNestedInput
  }

  export type UserStockUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
  }

  export type TokensUpdateWithoutUserInput = {
    refresh?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
  }

  export type TokensUncheckedUpdateWithoutUserInput = {
    refresh?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
  }

  export type TokensUncheckedUpdateManyWithoutUserInput = {
    refresh?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionHistoryCreateManyMedicineInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number
    userId: number
    price?: number
  }

  export type UserStockCreateManyMedicineInput = {
    id?: number
    total?: number
    sold?: number
    userId: number
  }

  export type DiseaseMedicineCorrelationCreateManyMedicineInput = {
    id?: number
    diseaseId: number
    correlationPercentage: number
  }

  export type TransactionHistoryUpdateWithoutMedicineInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTransactionHistoryNestedInput
  }

  export type TransactionHistoryUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionHistoryUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type UserStockUpdateWithoutMedicineInput = {
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserStockNestedInput
    batches?: StockBatchUpdateManyWithoutUserStockNestedInput
    forecastedUserStock?: ForecastedUserStockUpdateOneWithoutUserStockNestedInput
  }

  export type UserStockUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    batches?: StockBatchUncheckedUpdateManyWithoutUserStockNestedInput
    forecastedUserStock?: ForecastedUserStockUncheckedUpdateOneWithoutUserStockNestedInput
  }

  export type UserStockUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DiseaseMedicineCorrelationUpdateWithoutMedicineInput = {
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
    disease?: DiseaseUpdateOneRequiredWithoutDiseaseMedicineCorrelationNestedInput
  }

  export type DiseaseMedicineCorrelationUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type DiseaseMedicineCorrelationUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type StockBatchCreateManyUserStockInput = {
    id?: number
    expirationDate: Date | string
    amount?: number
  }

  export type StockBatchUpdateWithoutUserStockInput = {
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type StockBatchUncheckedUpdateWithoutUserStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type StockBatchUncheckedUpdateManyWithoutUserStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type DiseaseMedicineCorrelationCreateManyDiseaseInput = {
    id?: number
    medicineId: number
    correlationPercentage: number
  }

  export type DiseaseRecordCreateManyDiseaseInput = {
    id?: number
    amount: number
    timestamp: Date | string
  }

  export type DiseaseMedicineCorrelationUpdateWithoutDiseaseInput = {
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutDiseaseMedicineCorrelationNestedInput
  }

  export type DiseaseMedicineCorrelationUncheckedUpdateWithoutDiseaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type DiseaseMedicineCorrelationUncheckedUpdateManyWithoutDiseaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    correlationPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type DiseaseRecordUpdateWithoutDiseaseInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseRecordUncheckedUpdateWithoutDiseaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseRecordUncheckedUpdateManyWithoutDiseaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}