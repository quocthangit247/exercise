import { from } from 'rxjs';
import axios from 'axios';
import config from './config';

const API = config.apiService.api;

interface IRes {
  bars: number[];
  buttons: number[];
  limit: number;
}

export default class ApiService {
  static getData = () => {
    return from(
      axios.get(`${API}/order`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  };
}
