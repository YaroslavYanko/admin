import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  uuid: any;
};

export type AdminGetMeOutput = {
  __typename?: 'AdminGetMeOutput';
  id: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  accessToken: Scalars['String'];
};

export type AdminRegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String'];
};

export type CloudinariSignatureOutput = {
  __typename?: 'CloudinariSignatureOutput';
  apiKey: Scalars['String'];
  cloudName: Scalars['String'];
  publicId: Scalars['String'];
  signature: Scalars['String'];
  timestamp: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = 'admin_username_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "goods" */
export type Goods = {
  __typename?: 'goods';
  description: Scalars['String'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  price: Scalars['numeric'];
  shortName: Scalars['String'];
  title: Scalars['String'];
};

/** aggregated selection of "goods" */
export type Goods_Aggregate = {
  __typename?: 'goods_aggregate';
  aggregate?: Maybe<Goods_Aggregate_Fields>;
  nodes: Array<Goods>;
};

/** aggregate fields of "goods" */
export type Goods_Aggregate_Fields = {
  __typename?: 'goods_aggregate_fields';
  avg?: Maybe<Goods_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Goods_Max_Fields>;
  min?: Maybe<Goods_Min_Fields>;
  stddev?: Maybe<Goods_Stddev_Fields>;
  stddev_pop?: Maybe<Goods_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Goods_Stddev_Samp_Fields>;
  sum?: Maybe<Goods_Sum_Fields>;
  var_pop?: Maybe<Goods_Var_Pop_Fields>;
  var_samp?: Maybe<Goods_Var_Samp_Fields>;
  variance?: Maybe<Goods_Variance_Fields>;
};


/** aggregate fields of "goods" */
export type Goods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Goods_Avg_Fields = {
  __typename?: 'goods_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "goods". All fields are combined with a logical 'AND'. */
export type Goods_Bool_Exp = {
  _and?: InputMaybe<Array<Goods_Bool_Exp>>;
  _not?: InputMaybe<Goods_Bool_Exp>;
  _or?: InputMaybe<Array<Goods_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  shortName?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "goods" */
export enum Goods_Constraint {
  /** unique or primary key constraint on columns "id" */
  GoodsPkey = 'goods_pkey'
}

/** input type for incrementing numeric columns in table "goods" */
export type Goods_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "goods" */
export type Goods_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  shortName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Goods_Max_Fields = {
  __typename?: 'goods_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  shortName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Goods_Min_Fields = {
  __typename?: 'goods_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  shortName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "goods" */
export type Goods_Mutation_Response = {
  __typename?: 'goods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Goods>;
};

/** on_conflict condition type for table "goods" */
export type Goods_On_Conflict = {
  constraint: Goods_Constraint;
  update_columns?: Array<Goods_Update_Column>;
  where?: InputMaybe<Goods_Bool_Exp>;
};

/** Ordering options when selecting data from "goods". */
export type Goods_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  shortName?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: goods */
export type Goods_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "goods" */
export enum Goods_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "goods" */
export type Goods_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  shortName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Goods_Stddev_Fields = {
  __typename?: 'goods_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Goods_Stddev_Pop_Fields = {
  __typename?: 'goods_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Goods_Stddev_Samp_Fields = {
  __typename?: 'goods_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "goods" */
export type Goods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goods_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  shortName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Goods_Sum_Fields = {
  __typename?: 'goods_sum_fields';
  price?: Maybe<Scalars['numeric']>;
};

/** update columns of table "goods" */
export enum Goods_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  Title = 'title'
}

export type Goods_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Goods_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goods_Set_Input>;
  where: Goods_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Goods_Var_Pop_Fields = {
  __typename?: 'goods_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Goods_Var_Samp_Fields = {
  __typename?: 'goods_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Goods_Variance_Fields = {
  __typename?: 'goods_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Admin registration */
  adminRegister?: Maybe<AdminRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "goods" */
  delete_goods?: Maybe<Goods_Mutation_Response>;
  /** delete single row from the table: "goods" */
  delete_goods_by_pk?: Maybe<Goods>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "goods" */
  insert_goods?: Maybe<Goods_Mutation_Response>;
  /** insert a single row into the table: "goods" */
  insert_goods_one?: Maybe<Goods>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "goods" */
  update_goods?: Maybe<Goods_Mutation_Response>;
  /** update single row of the table: "goods" */
  update_goods_by_pk?: Maybe<Goods>;
  /** update multiples rows of table: "goods" */
  update_goods_many?: Maybe<Array<Maybe<Goods_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAdminRegisterArgs = {
  admin: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GoodsArgs = {
  where: Goods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goods_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GoodsArgs = {
  objects: Array<Goods_Insert_Input>;
  on_conflict?: InputMaybe<Goods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goods_OneArgs = {
  object: Goods_Insert_Input;
  on_conflict?: InputMaybe<Goods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GoodsArgs = {
  _inc?: InputMaybe<Goods_Inc_Input>;
  _set?: InputMaybe<Goods_Set_Input>;
  where: Goods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goods_By_PkArgs = {
  _inc?: InputMaybe<Goods_Inc_Input>;
  _set?: InputMaybe<Goods_Set_Input>;
  pk_columns: Goods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goods_ManyArgs = {
  updates: Array<Goods_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  adminGetMe?: Maybe<AdminGetMeOutput>;
  /** Login admin */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  cloudinariSignature?: Maybe<CloudinariSignatureOutput>;
  /** fetch data from the table: "goods" */
  goods: Array<Goods>;
  /** fetch aggregated fields from the table: "goods" */
  goods_aggregate: Goods_Aggregate;
  /** fetch data from the table: "goods" using primary key columns */
  goods_by_pk?: Maybe<Goods>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGoodsArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Query_RootGoods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Query_RootGoods_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Array<Admin>;
  /** fetch data from the table: "goods" */
  goods: Array<Goods>;
  /** fetch aggregated fields from the table: "goods" */
  goods_aggregate: Goods_Aggregate;
  /** fetch data from the table: "goods" using primary key columns */
  goods_by_pk?: Maybe<Goods>;
  /** fetch data from the table in a streaming manner: "goods" */
  goods_stream: Array<Goods>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootGoodsArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Subscription_RootGoods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Subscription_RootGoods_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGoods_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Goods_Stream_Cursor_Input>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AdminGetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetMeQuery = { __typename?: 'query_root', adminGetMe?: { __typename?: 'AdminGetMeOutput', id: string, username: string } | null };

export type AdminLoginQueryVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type AdminLoginQuery = { __typename?: 'query_root', adminLogin?: { __typename?: 'AdminLoginOutput', accessToken: string } | null };

export type CloudinarySignatureQueryVariables = Exact<{ [key: string]: never; }>;


export type CloudinarySignatureQuery = { __typename?: 'query_root', cloudinariSignature?: { __typename?: 'CloudinariSignatureOutput', apiKey: string, cloudName: string, publicId: string, signature: string, timestamp: number } | null };


export const AdminGetMeDocument = gql`
    query AdminGetMe {
  adminGetMe {
    id
    username
  }
}
    `;

/**
 * __useAdminGetMeQuery__
 *
 * To run a query within a React component, call `useAdminGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminGetMeQuery(baseOptions?: Apollo.QueryHookOptions<AdminGetMeQuery, AdminGetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminGetMeQuery, AdminGetMeQueryVariables>(AdminGetMeDocument, options);
      }
export function useAdminGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminGetMeQuery, AdminGetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminGetMeQuery, AdminGetMeQueryVariables>(AdminGetMeDocument, options);
        }
export type AdminGetMeQueryHookResult = ReturnType<typeof useAdminGetMeQuery>;
export type AdminGetMeLazyQueryHookResult = ReturnType<typeof useAdminGetMeLazyQuery>;
export type AdminGetMeQueryResult = Apollo.QueryResult<AdminGetMeQuery, AdminGetMeQueryVariables>;
export const AdminLoginDocument = gql`
    query AdminLogin($password: String!, $username: String!) {
  adminLogin(admin: {password: $password, username: $username}) {
    accessToken
  }
}
    `;

/**
 * __useAdminLoginQuery__
 *
 * To run a query within a React component, call `useAdminLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminLoginQuery({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useAdminLoginQuery(baseOptions: Apollo.QueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
      }
export function useAdminLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
        }
export type AdminLoginQueryHookResult = ReturnType<typeof useAdminLoginQuery>;
export type AdminLoginLazyQueryHookResult = ReturnType<typeof useAdminLoginLazyQuery>;
export type AdminLoginQueryResult = Apollo.QueryResult<AdminLoginQuery, AdminLoginQueryVariables>;
export const CloudinarySignatureDocument = gql`
    query CloudinarySignature {
  cloudinariSignature {
    apiKey
    cloudName
    publicId
    signature
    timestamp
  }
}
    `;

/**
 * __useCloudinarySignatureQuery__
 *
 * To run a query within a React component, call `useCloudinarySignatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useCloudinarySignatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCloudinarySignatureQuery({
 *   variables: {
 *   },
 * });
 */
export function useCloudinarySignatureQuery(baseOptions?: Apollo.QueryHookOptions<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>(CloudinarySignatureDocument, options);
      }
export function useCloudinarySignatureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>(CloudinarySignatureDocument, options);
        }
export type CloudinarySignatureQueryHookResult = ReturnType<typeof useCloudinarySignatureQuery>;
export type CloudinarySignatureLazyQueryHookResult = ReturnType<typeof useCloudinarySignatureLazyQuery>;
export type CloudinarySignatureQueryResult = Apollo.QueryResult<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>;