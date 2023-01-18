import axios from 'axios';

interface ServerClient {
  get: (query: string) => Promise<any>;
  delete: (query: string) => Promise<any>;
  put: (query: string, newData: any) => Promise<any>;
  post: (query: string, newData: any) => Promise<any>;
}

export class HttpClient implements ServerClient {
  private baseURL;
  private axiosInstance;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.axiosInstance = axios.create({ baseURL });
  }

  get(query: string) {
    return this.axiosInstance
      .get(`${query}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delete(query: string) {
    return this.axiosInstance
      .delete(`${query}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  post(query: string, newData: any) {
    return this.axiosInstance
      .post(`${query}`, newData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  put(query: string, newData: any) {
    return this.axiosInstance
      .put(`${query}`, newData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

// class CommentClient {
//   private static readonly baseURL = 'http://localhost:4000/comments';
//   constructor() {}
// }
