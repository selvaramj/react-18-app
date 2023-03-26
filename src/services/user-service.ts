import create from './http-service';
import HttpService from './http-service';

export interface User {
  id: number;
  name: string;
}
export default new HttpService('/users');
