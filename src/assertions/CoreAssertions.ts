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

import * as _ from 'lodash';
import Web3 from 'web3';
import { Address } from 'set-protocol-utils';
import { CoreContract } from 'set-protocol-contracts';
import { coreAssertionErrors } from '../errors';


export class CoreAssertions {
  private web3: Web3;

  constructor(web3: Web3) {
    this.web3 = web3;
  }

  /**
   * Throws if the given candidateContract does not respond to some methods from the Core interface.
   *
   * @param  coreAddress The address of the core contract
   * @return              Void Promise
   */
  public async implementsCore(coreAddress: Address): Promise<void> {
    const coreContract = await CoreContract.at(coreAddress, this.web3, {});

    try {
      await coreContract.vault.callAsync();
      await coreContract.transferProxy.callAsync();
      await coreContract.owner.callAsync();
    } catch (error) {
      throw new Error(coreAssertionErrors.MISSING_CORE_METHOD(coreAddress));
    }
  }
}
