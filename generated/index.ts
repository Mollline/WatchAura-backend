export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateNoteInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};

export type CreateOrderInput = {
  deliveryPlace: Scalars['String']['input'];
  items: Array<OrderItemInput>;
  phoneNumber: Scalars['String']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type CreateWatchInput = {
  adImage: Array<Scalars['String']['input']>;
  brand: Scalars['String']['input'];
  discountPercent?: InputMaybe<Scalars['Float']['input']>;
  image: Scalars['String']['input'];
  onSale?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  saleEndsAt?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type EditNoteInput = {
  completed: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type EditOrderInput = {
  deliveryPlace?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<OrderItemInput>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote?: Maybe<Note>;
  createOrder?: Maybe<Order>;
  createWatch?: Maybe<Watch>;
  deleteNote?: Maybe<Note>;
  deleteOrder?: Maybe<Order>;
  deleteWatch?: Maybe<Watch>;
  editNote?: Maybe<Note>;
  editOrder?: Maybe<Order>;
  updateWatch?: Maybe<Watch>;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateWatchArgs = {
  input: CreateWatchInput;
};


export type MutationDeleteNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWatchArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditNoteArgs = {
  input: EditNoteInput;
};


export type MutationEditOrderArgs = {
  id: Scalars['ID']['input'];
  input: EditOrderInput;
};


export type MutationUpdateWatchArgs = {
  input: UpdateWatchInput;
};

export type Note = {
  __typename?: 'Note';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['String']['output'];
  deliveryPlace: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  items: Array<OrderItem>;
  phoneNumber: Scalars['String']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  quantity: Scalars['Int']['output'];
  watch: Scalars['String']['output'];
};

export type OrderItemInput = {
  quantity: Scalars['Int']['input'];
  watch: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllNotes?: Maybe<Array<Maybe<Note>>>;
  getAllOrders?: Maybe<Array<Maybe<Order>>>;
  getAllWatches?: Maybe<Array<Maybe<Watch>>>;
  getOrderById?: Maybe<Order>;
  getWatch?: Maybe<Watch>;
};


export type QueryGetOrderByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetWatchArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateWatchInput = {
  adImage?: InputMaybe<Array<Scalars['String']['input']>>;
  brand?: InputMaybe<Scalars['String']['input']>;
  discountPercent?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  onSale?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  saleEndsAt?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Watch = {
  __typename?: 'Watch';
  adImage: Array<Scalars['String']['output']>;
  brand: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  discountPercent: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  onSale: Scalars['Boolean']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  saleEndsAt?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


