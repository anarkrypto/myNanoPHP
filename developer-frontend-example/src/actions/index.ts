import { my_wallet, NOTIFY_MESSAGE } from '../utils/wallet_interface';

const ACTION_NONE = 0;
const EXTRACT_PUBLIC_KEY = 1;
const EXTRACT_ADDRESS_FROM_PUBLIC_KEY = 2;
const SET_MY_WALLET_PARAM = 3;
const SET_LANGUAGE = 4;
const OPEN_WALLET_DIALOG = 5;
const CLOSE_WALLET_DIALOG = 6;
const DIALOG_STATUS = 7;
const SET_PENDING_AMOUNT = 8;
const CLEAR_PENDING_AMOUNT = 10;
const SET_BACKGROUND_MODE = 11;
const GET_NOTIFY_MESSAGE = 12;
const SET_NOTIFY_MESSAGE = 13;

export const NANO_WALLET_ACTIONS = {

    ACTION_NONE,
    EXTRACT_PUBLIC_KEY,
    EXTRACT_ADDRESS_FROM_PUBLIC_KEY,
    SET_MY_WALLET_PARAM,
    SET_LANGUAGE,
    OPEN_WALLET_DIALOG,
    CLOSE_WALLET_DIALOG,
    DIALOG_STATUS,
    SET_PENDING_AMOUNT,
    CLEAR_PENDING_AMOUNT,
    SET_BACKGROUND_MODE,
    GET_NOTIFY_MESSAGE,
    SET_NOTIFY_MESSAGE
    
}

export function setPublicKey(public_key: my_wallet) {
    return { type: EXTRACT_PUBLIC_KEY, public_key };
}

export function setMyWallet(wallet_param: my_wallet) {
    return { type: SET_MY_WALLET_PARAM, wallet_param };
}

export function setLanguage(language: string) {
    return { type: SET_LANGUAGE, language };
}

export function openWalletDialog() {
    return { type: OPEN_WALLET_DIALOG };
}

export function closeWalletDialog() {
    return { type: CLOSE_WALLET_DIALOG };
}

export function dialogStatus(status: string = "") {
    return { type: DIALOG_STATUS, status };
}

export function setPendingAmount(func: any) {
    return { type: SET_PENDING_AMOUNT, func };
}

export function clearPendingAmout() {
    return { type: CLEAR_PENDING_AMOUNT };
}

export function changeBackgroundMode(mode: string) {
    let body_background: any = document.getElementsByTagName('body');
    body_background[0].className=mode;
    return { type: SET_BACKGROUND_MODE, mode };
}

export function getNotifyMessage() {
    return { type: GET_NOTIFY_MESSAGE };
}

export function setNotifyMessage(msg: NOTIFY_MESSAGE) {
    return { type: SET_NOTIFY_MESSAGE, msg};
}
