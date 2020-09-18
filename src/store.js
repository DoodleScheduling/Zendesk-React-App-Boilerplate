import { observable, action } from 'mobx';
import zafClient from './api/zafClient';

export default class Store {
  @observable
  requester = {};

  @action
  async getRequester() {
    const res = await zafClient.get('ticket.requester');
    var settings = {
      url: '/api/v2/users/me.json',
      type:'GET',
      dataType: 'json',
    };
  
    zafClient.request(settings).then((data) => console.log(data.user.name));
    this.requester = res['ticket.requester'];
  }
}