/*
  Copyright 2018 Set Labs Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

'use strict';


export const exchangeIssuanceErrors = {
  ONLY_ONE_SEND_TOKEN: () => `Only one send token is allowed in Payable Exchange Issuance`,
  ONLY_ONE_RECEIVE_TOKEN: () => `Only one receive token is allowed in Payable Exchange Redemption`,
  REDEEM_AND_TRADE_QUANTITIES_MISMATCH: (quantityFromRebalancingSetQuantity: string, quantityToTrade: string) =>
    `The quantity of base set redeemable from the quantity of the rebalancing set: ` +
    `${quantityFromRebalancingSetQuantity} must be greater or equal to the amount required for the redemption ` +
    `trades: ${quantityToTrade}`,
  PAYMENT_TOKEN_NOT_WETH: (paymentToken: string, wethAddress: string) => `Payment token at ${paymentToken} is ` +
    `not the expected wrapped ether token at ${wethAddress}`,
  ISSUING_SET_NOT_BASE_SET: (setAddress: string, currentSet: string) => `Set token at ${setAddress} is ` +
    `not the expected rebalancing set token current Set at ${currentSet}`,
  REDEEMING_SET_NOT_BASE_SET: (setAddress: string, currentSet: string) => `Set token at ${setAddress} is ` +
    `not the expected rebalancing set token current Set at ${currentSet}`,
  ETHER_VALUE_NOT_UNDEFINED: () =>
    `Ether value should not be undefined`,
  TRADE_TOKENS_NOT_COMPONENT: (setAddress: string, componentAddress: string) => `Component at ${componentAddress} ` +
    `is not part of the collateralizing set at ${setAddress}`,
};