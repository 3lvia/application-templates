import axios from 'axios';

export interface UserValue {
  type: string;
  value: string | number;
}

export default {
  getBffUser(): Promise<UserValue[]> {
    return axios.get<UserValue[]>('/bff/user').then(res => res.data);
  },
};
