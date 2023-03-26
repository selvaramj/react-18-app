import axios from './api-client';

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    console.log(this.endpoint);
  }
  getAll<T>() {
    console.log('The endpoint from get all function', this.endpoint);

    const controller = new AbortController();
    const request = axios.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    const cancel = () => controller.abort();
    return { request, cancel };
  }
  delete(id: number) {
    return axios.delete(this.endpoint + '/' + id);
  }
  create<T>(entity: T) {
    return axios.post(this.endpoint, entity);
  }
  update<T extends Entity>(entity: T) {
    return axios.patch(this.endpoint + '/' + entity.id, entity);
  }
}

export default HttpService;
