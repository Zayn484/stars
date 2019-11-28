import axios from 'axios';

class HttpHelper {
  sendRequest = async (args) => {
    try {
      const response = await axios(args);

      return response;
    } catch (error) {
      
      return { error };
    }
  };

  getRequest = async (args) => {
    const {
      data, error, status,
    } = await this.sendRequest({
      ...args,
      method: 'get',
      mode: 'cors'
    });

    if (status === 200) {
      return {
        data,
        error: null,
        status,
      };
    }

    return {
      data,
      error: error || data,
      status,
    };
  };
}

export default HttpHelper;
