import React from 'react';
import { connect } from 'react-redux';
import { setPublicKey } from '../actions';

import { 
  MY_NANO_PHP_ERROR, 
  PUBLIC_KEY2ADDRESS, 
  my_wallet
} from '../utils/wallet_interface';

import {

  my_nano_php_open_encrypted_seed,
  my_nano_php_seed2keypair,
  MY_NANO_PHP_SEED2KEYPAIR,
  my_nano_php_public_key2address

} from '../service';

export function OpenEncryptedWalletFile(props: any) {

  function teste(e: any) {

    let password:any = document.getElementById('file-password');
    let reader = new FileReader();
    let fileUploader:any = document.getElementById('file-uploader-id');
    let txt: any;

    reader.onloadend = function () {
      txt = reader.result;
      console.log(txt);
      console.log(Buffer.from(txt).toString('hex'));
      my_nano_php_open_encrypted_seed(Buffer.from(txt).toString('hex'), password.value).then(
        (d: any) =>
        {
          console.log(d);
          my_nano_php_seed2keypair(0, d.result.seed).then(
            (key_pair) => {

              my_nano_php_public_key2address((key_pair as MY_NANO_PHP_SEED2KEYPAIR).key_pair.public_key).then(
                (wallet_address) => {

                  props.wallet_public_key(
                    {
                      wallet: (wallet_address as PUBLIC_KEY2ADDRESS).wallet,
                      public_key: (key_pair as MY_NANO_PHP_SEED2KEYPAIR).key_pair.public_key,
                      wallet_number: 0
                    }
                  )
                },
                (error) => console.log(error)
              )
              
            },
            (key_pair_err) => {
              console.log(key_pair_err as MY_NANO_PHP_ERROR);
            }
          );
        },
        (e) => console.log(e)
      );
    }

    if (fileUploader)
      if (fileUploader.files[0])
        reader.readAsArrayBuffer(fileUploader.files[0]);


  }
 
  function openFile() {

    var myfile = document.getElementById('file-uploader-id');

    if (myfile)
      myfile.click();

  }

  return (
    <div>
      <input 
        type="file" 
        id="file-uploader-id"
        onChange={ () => teste('')}
      />
      <input 
        type="password" 
        id="file-password" 
        placeholder="Type your password to open file"
      />
      <button
        onClick={ () => openFile()}
      >
        Clique para abrir arq criptografado
      </button>
    </div>
  );
}

const mapStateToProps = (state: any, ownProps: any) => ({
  nano_wallet: state.wallet
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  wallet_public_key: (public_key: my_wallet) => dispatch(setPublicKey(public_key)),

});

export default connect(mapStateToProps, mapDispatchToProps)(OpenEncryptedWalletFile);
