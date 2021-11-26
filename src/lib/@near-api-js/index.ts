import { Buffer } from 'buffer'
if (typeof window !== 'undefined') window.Buffer = Buffer;
import keyStores from './key_stores';
import { connect } from './browser-connect';
import {
  accountCreator,
  providers,
  utils,
  transactions,
  validators,
  multisig,
  Account,
  Connection,
  Contract,
  InMemorySigner,
  Signer,
  KeyPair,
  Near,
  ConnectedWalletAccount,
  WalletAccount,
  WalletConnection
} from './common-index'

export default {
  keyStores,
  connect,
  accountCreator,
  providers,
  utils,
  transactions,
  validators,
  multisig,
  Account,
  Connection,
  Contract,
  InMemorySigner,
  Signer,
  KeyPair,
  Near,
  ConnectedWalletAccount,
  WalletAccount,
  WalletConnection
}
export {
  keyStores,
  connect,
  accountCreator,
  providers,
  utils,
  transactions,
  validators,
  multisig,
  Account,
  Connection,
  Contract,
  InMemorySigner,
  Signer,
  KeyPair,
  Near,
  ConnectedWalletAccount,
  WalletAccount,
  WalletConnection
}