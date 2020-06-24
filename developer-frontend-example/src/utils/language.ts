export const PORTUGUESE_LANGUAGE = "pt-br";
export const ENGLISH_LANGUAGE = "en-us";
export const MY_PHP_LANGUAGE = "myphplanguage";

export const LANG_PT_BR = {
    
    not_found: "Não encontrado",
    wallet_number: "Número da carteira",
    wallet: "Carteira",
    pk: "Chave pública",
    balance: "Balanço",
    pending_account: "Pendente",
    send: "Enviar",
    brainwallet: "Brainwallet",
    salt: "Salt",
    open_brainwallet: "Abrir Brainwallet",
    msg_brainwallet_empty: "O campo Brainwallet está vazio",
    msg_salt_empty: "O campo 'salt' está vazio",
    loading_balance: "Carregando balanço ...",
    loading_pending: "Carregando balanços pendendentes ...",
    type_your_password: "Digite sua senha aqui",
    open_enc_file: "Clique aqui para abrir o arq. criptografado",
    open_nano_seed: "Abrir Nano SEED",
    type_your_seed_here: "Digite sua SEED aqui",
    your_seed: "Sua SEED NANO",
    msg_empty_seed: "A SEED|BIP39|Par de chaves está vazia",
    open_selected: "Abrir selecionado",
    open_with_seed: "Abrir com a semente",
    open_with_bip39: "Abrir com Bip39",
    open_with_encrypted_file: "Abrir com o arquivo criptografado *.nse",
    open_with_brainwallet: "Abrir com sua Brainwallet",
    open_gen_new_seed: "Gerar uma nova semente",
    gen_select_new_seed_title: "Seleciona uma opção para gerar uma nova Semente NANO",
    gen_opt_paranoic: "Paranóico (Muito lento mas recomendável)",
    gen_opt_excelent: "Excelente (Lento)",
    gen_opt_good: "Bom (normal)",
    gen_opt_not_enough: "Não suficiente (rápido)",
    gen_opt_not_recommended: "Não recomendável (muito rápido)",
    gen_btn: "Gerar Semente Nano e Bip39",
    save_to_enc_btn: "Salvar o arquivo criptografado",
    passwd_create_file: "Digite sua senha para encriptar sua nova semente",
    empty_password: "A senha não pode estar vazia",
    msg_gen_random_seed: "Gerando semente da Nano randomicamente com entropia %d ... Espere ...",
    msg_seed_success: "Semente NANO gerada com sucesso",
    msg_opening_enc_block: "Abrindo o bloco criptografado ...",
    msg_unknown_server_error: "Erro de servidor desconhecido",
    msg_done: "Feito!",
    msg_done_seed_and_bip39: "Sua semente: '%d' e seu Bip39: '%e'. Guarde com segurança e não conte pra ninguém",
    your_bip39: "Seu menemonico Bip39",
    type_your_bip39_here: "Digite seu menemonico aqui",
    open_nano_bip39: "Extrair par de chaves do Bip39",
    msg_invalid_keypair_size: "Tamanho do par de chaves inválidos",
    open_keypair: "Abrir carteira com par de chaves",
    your_keypair: "Seu par de chaves",
    type_your_keypair_here: "Digite seu par de chaves aqui",
    msg_invalid_public_key_size: "Tamanho da chave pública inválida",
    open_from_public_key: "Abrir carteira com chave pública (somente leitura)",
    your_public_key: "Sua chave pública",
    type_your_public_key_here: "Digite sua chave pública aqui",
    open_public_key: "Abrir carteira com a chave pública",
    label_allow_p2pow_dpow_label: "Permitir taxa da Prova de Trabalho (P2PoW or DPoW)",
    label_fee: "Taxa máxima",
    representative_title: "Representativo",
    amount: "Valor",
    destination_wallet_label: "Carteira de destino",
    cancel_button: "Cancelar",
    dialog_password_empty: "Senha para desemcriptar o stream não deve estar vazio",
    dialog_seed_empty: "A semente é necessária",
    dialog_bip39_required: "Bip 39 é requerido para extrair seu par de chaves",
    dialog_brainwallet_empty: "A Braiwallet não pode estar vazia",
    dialog_salt_empty: "O Salt não deve estar vazio",
    dialog_missing_keypair: "É necessário o par de chaves",
    dialog_wrong_keypair_length: "Tamanho do par de chaves inválido",
    msg_missing_file_password: "É necessário a senha para abrir o arquivo %d",
    msg_amount_is_empty: "Valor para enviar está vazio",
    msg_destination_wallet_empty: "Carteira de destino está vazia",
    send_enc_file_passwd_placeholder: "Digite sua senha para desencriptar semente e enviar quantia",
    dark_toggle_txt: "Escuro",
    light_toggle_txt: "Claro",
    welcome_msg: "myNanoPHP. Uma pequena biblioteca em C que integra Nano ao PHP",
    opening_wallet_from_seed: "Abrindo a carteira NANO da semente",
    about_author: "Sobre",
    placeholder_dest_wallet: "Digite a carteira de destino aqui",
    placeholder_amount_to_send: "Digite a quantia para enviar",
    placeholder_type_your_fee: "Digite sua taxa",
    btn_send_title: "Clica aqui para enviar",
    light_mode_title: "Modo claro",
    dark_mode_title: "Mode escuro",
    success_open_wallet: "Carteira %d. Saldo: %e. Valor pendente %f",
    notification_light_mode_changed: "Mudou para o modo claro",
    notification_dark_mode_changed: "Mudou para o modo escuro",
    notification_language_changed: "Changed to English language",
    go_back: "Voltar",
    placehold_type_brainwallet: "Digite sua Brainwallet aqui",
    placehold_type_salt: "Digite seu Salt aqui",
    password_txt: "Senha:",
    entropy_type_title: "Tipo de entropia:",
    keep_safe_msg: "Mantenha sempre suas SEED's, Bip39, Brainwallet e chaves privadas em locais seguros. Criptografe seus arquivos com senha forte e NUNCA divulgue-as pra NINGUÉM",
    encrypted_block_not_found_msg: "Bloco criptografado NÃO encontrado. Por favor crie uma Semente NANO primeiro",
    about_text: "Esta aplicação é uma Prova de Conceito para devs para explicar como implementar solução em Blockchain com criptomoeda Nano em PHP. Documentações: https://github.com/devfabiosilva/myNanoPHP/blob/master/README.md e Template API: https://github.com/devfabiosilva/myNanoPHP/blob/master/README_API.md. Esta aplicação não deve ter o propósito de ser usada como uma carteira pois a Semente, Bip39, Brainwallet e chaves privadas são compartilhadas entre o servidor e cliente. Você pode usar este aplicativo para enviar e receber dinheiro. Mas lembre-se: É somente para teste para desenvolvedores. Faça transações com pequenas quantias.",
    proof_of_concept: "Prova de conceito",
    author_title: "Autor",
    donation: "Doação",
    go_home: "Ir para a página inicial",
    decrypt_wallet: "Desencriptar carteira",
    your_token_msg: "Seu token. Ele é será requisitado para enviar/receber Nanos, assinar mensagens e alterar número da carteira. Se você esqueceu, não se preocupe. Abra a carteira novamente para gerar outro token",
    proceed: "Prosseguir",
    msg_generating_token: "Gerando token ...",
    msg_bip39_encrypted_success: "Bip39 criptografado com sucesso",
    msg_opening_wallet: "Abrindo a carteira ...",
    msg_encrypting_private_key_with_token: "Criptografando a chave privada com o token ...",
    msg_extracting_public_key: "Extraindo a chave pública",
    msg_extracting_seed: "Extraindo a semente ...",
    msg_extracting_keypair_from_encrypted_block: "Extraindo o par de chaves do bloco criptografado ..."

}

export const LANG_EN_US = {

    not_found: "Not found",
    wallet_number: "Wallet number",
    wallet: "Wallet",
    pk: "Public key",
    balance: "Balance",
    pending_account: "Pending",
    send: "Send",
    brainwallet: "Brainwallet",
    salt: "Salt",
    open_brainwallet: "Open Brainwallet",
    msg_brainwallet_empty: "Brainwallet cannot be empty string",
    msg_salt_empty: "Salt cannot be empty string",
    loading_balance: "Loading balance ...",
    loading_pending: "Loading pending balance ...",
    type_your_password: "Type your password to open file",
    open_enc_file: "Click here to open encrypted file",
    open_nano_seed: "Open Nano SEED",
    type_your_seed_here: "Type your SEED here",
    your_seed: "Your NANO SEED",
    msg_empty_seed: "SEED|BIP39|KeyPair|PublicKey is empty",
    open_selected: "Open selected",
    open_with_seed: "Open with seed",
    open_with_bip39: "Open with Bip39",
    open_with_encrypted_file: "Open with *.nse encrypted file",
    open_with_brainwallet: "Open with a Brainwallet",
    open_gen_new_seed: "Generate a new SEED",
    gen_select_new_seed_title: "Select an option to generate your Nano SEED and Bip39",
    gen_opt_paranoic: "Paranoic (Very slow but recommended)",
    gen_opt_excelent: "Excelent (Slow)",
    gen_opt_good: "Good (normal)",
    gen_opt_not_enough: "Not enough (fast)",
    gen_opt_not_recommended: "Not recommended (very fast)",
    gen_btn: "Generate Nano SEED and Bip39",
    save_to_enc_btn: "Save to encrypted file",
    passwd_create_file: "Type your password to create encrypted file",
    empty_password: "Password cannot be empty",
    msg_gen_random_seed: "Generating random Nano SEED with entropy %d ... Please wait ...",
    msg_seed_success: "Nano SEED generated successfully",
    msg_opening_enc_block: "Opening encripted block ...",
    msg_unknown_server_error: "Unknown server error",
    msg_done: "Done",
    msg_done_seed_and_bip39: "Your SEED: '%d' and your Bip39: '%e'. Keep it safe and don't tell it to anybody",
    your_bip39: "Your Bip39 menemonic",
    type_your_bip39_here: "Type your menemonic here",
    open_nano_bip39: "Extract KeyPair from Bip39",
    msg_invalid_keypair_size: "Invalid keypair size",
    open_keypair: "Open wallet with keypair",
    your_keypair: "Your KeyPair",
    type_your_keypair_here: "Type your keypair here",
    msg_invalid_public_key_size: "Invalid public key size",
    open_from_public_key: "Open wallet with public key (read only)",
    your_public_key: "Your public key",
    type_your_public_key_here: "Type your public key here",
    open_public_key: "Open wallet with public key",
    label_allow_p2pow_dpow_label: "Allow Proof of Work fee (P2PoW or DPoW)",
    label_fee: "Maximum fee",
    representative_title: "Representative",
    amount: "Amount",
    destination_wallet_label: "Destination wallet",
    cancel_button: "Cancel",
    dialog_password_empty: "Password to decrypt file stream must be not empty",
    dialog_seed_empty: "SEED can not be an empty string",
    dialog_bip39_required: "Required Bip39 to extract key pair to sign transaction",
    dialog_brainwallet_empty: "Braiwallet must be not empty",
    dialog_salt_empty: "Salt must be not empty string",
    dialog_missing_keypair: "Missing keypair",
    dialog_wrong_keypair_length: "Wrong keypair length",
    msg_missing_file_password: "Password required to open file %d",
    msg_amount_is_empty: "Amount is empty",
    msg_destination_wallet_empty: "Destination wallet is empty",
    send_enc_file_passwd_placeholder: "Type your password to decrypt file",
    dark_toggle_txt: "Dark",
    light_toggle_txt: "Light",
    welcome_msg: "myNanoPHP. A small C library that integrates Nano to PHP",
    opening_wallet_from_seed: "Opening NANO wallet from SEED",
    about_author: "About",
    placeholder_dest_wallet: "Type destination wallet here",
    placeholder_amount_to_send: "Type amount to send",
    placeholder_type_your_fee: "Type your fee",
    btn_send_title: "Click here to send",
    light_mode_title: "Light mode",
    dark_mode_title: "Dark mode",
    success_open_wallet: "Wallet %d. Balance: %e. Pending %f",
    notification_light_mode_changed: "Changed to light mode",
    notification_dark_mode_changed: "Changed to dark mode",
    notification_language_changed: "Mudou para o português do Brasil",
    go_back: "Back",
    placehold_type_brainwallet: "Type your Brainwallet here",
    placehold_type_salt: "Type your Salt here",
    password_txt: "Password:",
    entropy_type_title: "Entropy type:",
    keep_safe_msg: "Keep your SEED's, Bip39, Brainwallet and Private Keys in safe place. Encrypt all of them with a strong password and NEVER tell them to ANYBODY",
    encrypted_block_not_found_msg: "Encrypted block NOT found. Please create a NANO Seed first",
    about_text: "This Webapplication is a Proof of Concept for developers how to implement Blockchain solutions with Nano criptocurrency in PHP language. Documentation available at https://github.com/devfabiosilva/myNanoPHP/blob/master/README.md and Template API: https://github.com/devfabiosilva/myNanoPHP/blob/master/README_API.md. It should never be intended to use as wallet because SEED, Private Keys, Bip39 and Brainwallet are shared between server-client side. You can use this app to send/receive real money. But remember: It's for a developer test. Do it with a small amout of money.",
    proof_of_concept: "Proof of Concept",
    author_title: "Author",
    donation: "Donation",
    go_home: "Go to main menu",
    decrypt_wallet: "Decrypt wallet",
    your_token_msg: "Your token. It will be required to send/receive Nanos, sign messages and modify your wallet number. If you forgot this token. Don'r worry. Open your wallet again to generate new token",
    proceed: "Proceed",
    msg_generating_token: "Generating token ...",
    msg_bip39_encrypted_success: "Bip39 encrypted successfully",
    msg_opening_wallet: "Opening wallet ...",
    msg_encrypting_private_key_with_token: "Encrypting private key with token ...",
    msg_extracting_public_key: "Extracting public key ...",
    msg_extracting_seed: "Extracting Nano SEED ...",
    msg_extracting_keypair_from_encrypted_block: "Extracting KeyPair from encrypted block ..."

}

export function getLanguageFromLocalStorage() {

    let language = localStorage.getItem(MY_PHP_LANGUAGE);

    if ( ( language === null ) || ( language === undefined ) ) {

        localStorage.setItem(MY_PHP_LANGUAGE, ENGLISH_LANGUAGE);
        language = localStorage.getItem(MY_PHP_LANGUAGE);

    }

    return language;

}

export function setLanguageToLocalStorage(lang: string) {

    localStorage.setItem(MY_PHP_LANGUAGE, lang);

    return localStorage.getItem(MY_PHP_LANGUAGE);

}
