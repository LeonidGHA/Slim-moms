import { instance } from './auth-api';

export const productSearch = async data => {
  console.log(instance.defaults.headers.authorization);
  const { data: result } = await instance.get(`/product?search=${data}`);
  console.log(result);
  return result;
};
