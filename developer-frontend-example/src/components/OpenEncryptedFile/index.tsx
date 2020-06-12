import React from 'react';

import { connect } from 'react-redux';

import { 

  setPublicKey

} from '../../actions';

import {

  MY_NANO_PHP_ERROR, 
  PUBLIC_KEY2ADDRESS, 
  my_wallet,
  WALLET_FROM,
  MY_NANO_PHP_SEED2KEYPAIR

} from '../../utils/wallet_interface';

import {

  my_nano_php_open_encrypted_seed,
  my_nano_php_seed2keypair,
  my_nano_php_public_key2address,

} from '../../service';

import './style.css';

export function OpenEncryptedWalletFile(props: any) {

  function loadFile() {

    let password:any = document.getElementById('file-password');
    let reader = new FileReader();
    let fileUploader:any = document.getElementById('file-uploader-id');
    let encrypted_data: string;

    reader.onloadend = function () {

      if (password.value !== "") {
        encrypted_data = Buffer.from(reader.result as any).toString('hex');
        my_nano_php_open_encrypted_seed(encrypted_data, password.value).then(
          (d: any) =>
          {
            my_nano_php_seed2keypair(0, d.result.seed).then(
              (key_pair) => {

                my_nano_php_public_key2address((key_pair as MY_NANO_PHP_SEED2KEYPAIR).key_pair.public_key).then(
                  (wallet_address) => {

                    props.wallet_public_key(
                      {

                        origin: WALLET_FROM.FROM_ENCRYPTED_FILE,
                        wallet: (wallet_address as PUBLIC_KEY2ADDRESS).wallet,
                        public_key: (key_pair as MY_NANO_PHP_SEED2KEYPAIR).key_pair.public_key,
                        wallet_number: 0,
                        encrypted_block: encrypted_data

                      }
                    );

                    fileUploader.value='';

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
      } else {

        alert(props.language.msg_missing_file_password.replace(/%d/, fileUploader.files[0].name));
        fileUploader.value = '';
        
      }
    }

    if (fileUploader)
      if (fileUploader.files[0])
        reader.readAsArrayBuffer(fileUploader.files[0]);

  }
 
  function openFile() {

    var myfile: any = document.getElementById('file-uploader-id');

    if (myfile)
      myfile.click();

  }

  return (
    <div>
      <input 

        type="file" 
        id="file-uploader-id"
        className="file-uploader"
        onChange={ () => loadFile()}

      />
      <input 

        type="password" 
        id="file-password"
        placeholder={ props.language.type_your_password }

      />
      <button
        onClick={ () => openFile()}
      >
        { props.language.open_enc_file }
      </button>
    </div>
  );
}

const mapStateToProps = (state: any, ownProps: any) => ({
  nano_wallet: state.wallet,
  language: state.lang
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  wallet_public_key: (public_key: my_wallet) => dispatch(setPublicKey(public_key))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenEncryptedWalletFile);
