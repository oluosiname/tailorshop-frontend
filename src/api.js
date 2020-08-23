import axios from "axios";
// import auth from "./Auth";

export const transformAPIError = (error) => {
  if (Array.isArray(error)) {
    return error;
  }

  return [error];
};

class API {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL + "/api/v1",
      // headers: { common: { Authorization: auth.token } },
      headers: {
        common: { Authorization: process.env.REACT_APP_TEST_PARTNER_TOKEN },
      },
    });
  }

  // async post(path, body) {
  //   const headers = {
  //     Authorization: "Bearer " + auth.token,
  //   };
  //   try {
  //     const response = await this.axios.post(path, body, { headers });
  //     return response.data;
  //   } catch (e) {
  //     throw e;
  //   }
  // }

  async get(path, params = {}, args = {}) {
    try {
      const response = await this.axios.get(path, { params, ...args });
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async put(path, params = {}, args = {}) {
    try {
      const response = await this.axios.put(path, { params, ...args });
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async patch(path, params = {}, args = {}) {
    try {
      const response = await this.axios.patch(path, { ...params, ...args });
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async delete(path) {
    try {
      const response = await this.axios.delete(path);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}

export default new API();
