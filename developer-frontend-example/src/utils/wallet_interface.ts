export const WALLET_FROM = {

    SELECT_OPTION: "-1",
    FROM_SEED: "1",
    FROM_BIP39: "2",
    FROM_BRAINWALLET: "3",
    FROM_ENCRYPTED_FILE: "4",
    FROM_GENERATING_SEED: "5"

}

export interface MY_NANO_PHP_SEED2KEYPAIR {
    error: string|number,
    reason: string,
    key_pair: {
        private_key: string,
        public_key: string,
        wallet_number: number|string,
        wallet: string
    }
}

export interface MY_NANO_PHP_PK2ADDRESS {
    error: string|number,
    reason: string,
    wallet: string,
    public_key: string
}

export interface MY_NANO_PHP_ERROR {

    error: string|number,
    reason: string

}

export interface my_wallet {

    origin?: string|number,
    seed?: string; // SECURITY: Fire and forget. Extract public key from encrypted file|brainwallet|Bip39 and forget SEED immediately
    public_key: string|null;
    private_key?: string; //SECURITY: Fire and forget. Extract public key from (encrypted file|brainwallet|Bip39) and forget private key immediately
    wallet_number?: number;
    wallet_representative?: string,
    wallet?: string,
    pending?: string,
    balance?: string,
    bip39?: string  //SECURITY: Fire and forget. Extract public key from (encrypted file|brainwallet|Bip39) and forget private key immediately

}

export interface NANO_KEY_PAIR {

    private_key?: string,
    public_key: string,
    wallet_number?: number|string,
    wallet?: string,
    representative?: string
    
}

export interface PUBLIC_KEY2ADDRESS {
    error: string|number,
    reason: string
    wallet: string,
    public_key: string,
}

export interface BRAINWALLET_RESPONSE {
    error: string|number,
    reason: string,
    text: string,
    salt: string,
    extracted: {
      result: {
        seed: string,
        bip39: string
      },
      warning_msg: string
    },
    warning: string
}
