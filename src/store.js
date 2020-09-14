import { observable, action } from 'mobx';
import zafClient from './api/zafClient';

export default class Store {
  @observable
  requester = {};

  @action
  async getRequester() {
    const res = await zafClient.get('ticket.requester');
    this.requester = res['ticket.requester'];
  }
}