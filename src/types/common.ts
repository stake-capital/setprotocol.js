
import { BigNumber } from '../util';

export type Address = string;
export type Bytes32 = string;
export type UInt = number | BigNumber;

export interface Component {
  address: Address;
  unit: BigNumber;
}

export interface SetComponent {
  address: string;
  quantity: string;
  name: string;
  symbol: string;
}

export interface Token {
  address: string;
  name: string;
  symbol: string;
  balance: BigNumber;
  decimals: BigNumber;
}

export interface ECSig {
  v: UInt;
  r: string;
  s: string;
}

export interface IssuanceOrder {
  setAddress: string;
  makerAddress: string;
  makerToken: string;
  relayerAddress: string;
  relayerToken: string;
  quantity: BigNumber;
  makerTokenAmount: BigNumber;
  expiration: BigNumber;
  relayerTokenAmount: BigNumber;
  salt: BigNumber;
  requiredComponents: string[];
  requiredComponentAmounts: BigNumber[];
}

export interface SignedIssuanceOrder {
  setAddress: string;
  makerAddress: string;
  makerToken: string;
  relayerAddress: string;
  relayerToken: string;
  quantity: BigNumber;
  makerTokenAmount: BigNumber;
  expiration: BigNumber;
  relayerTokenAmount: BigNumber;
  salt: BigNumber;
  requiredComponents: string[];
  requiredComponentAmounts: BigNumber[];
  signature: ECSig;
}

export interface TransactionOpts {
  gas?: number;
  gasPrice?: BigNumber;
}

export interface TxData {
  from?: string;
  gas?: BigNumber;
  gasPrice?: BigNumber;
  nonce?: number;
}

export interface TxDataPayable extends TxData {
  value?: BigNumber;
}

export interface Log {
  event: string;
  address: Address;
  args: any;
}

export interface CreateLogArgs {
  _setTokenAddress: Address;
  _factoryAddress: Address;
  _components: Address[];
  _units: BigNumber[];
  _naturalUnit: BigNumber;
  _name: string;
  _symbol: string;
}
