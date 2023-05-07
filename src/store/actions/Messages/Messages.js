
import {GET_TYPING,ADD_MESSAGES,GET_MESSAGES} from '../Types';

export const addMessage = (item) => {
      return {
      type: ADD_MESSAGES,
      payload:item
      }
}

export const getTyping = (item) => {
    return {
    type: GET_TYPING,
    payload:item
    }
}

export const getMessage = (item) => {
      return {
      type: GET_MESSAGES,
      payload:item
      }
}