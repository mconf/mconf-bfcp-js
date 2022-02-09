'use strict';

const { v4: uuidv4 } = require('uuid');

/**
 * Base transaction for the BFCP API
 * @memberof module:mconf-bfcp-js
 */
class Transaction {
  /**
   * Creates a Transaction object
   */
  constructor (transactionId) {
    if (transactionId) {
      this.transactionId = transactionId;
      return;
    } else {
      this.transactionId = uuidv4();
      // A bit of a defer antipattern, I'll leave it to the highlanders
      // to improve - prlanzarin 04/08/18
      this.response = null;
      this.promise = new Promise((resolve, reject) => {
        let isResolved = false;
        this.response = response => {
          if (!isResolved) {
            isResolved = true;
            return resolve(response);
          }
        };
      });
    }
  }

  resolve (response) {
    return this.response(response);
  }
}

module.exports = Transaction;
