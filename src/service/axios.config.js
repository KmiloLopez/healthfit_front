import { toast } from 'react-toastify';
import instanceClientAPI from './api';

//================== REGISTER USER ====================
export const register = async ({ name, email, password }) => {
  try {
    const res = await instanceClientAPI.post(`/users/signup`, {
      name,
      email,
      password,
    });
    toast.success('Registro Exitoso');
    return res;
  } catch (e) {
    if (e.response.status === 409) {
      toast.error(`Esta dirección de correo electrónico ya existe`);
    } else {
      toast.error('Error de registro');
    }
  }
};

//================== LOGIN USER =====================
export const login = async ({ email, password }) => {
  try {
    const res = await instanceClientAPI.post(`/users/login`, {
      email,
      password,
    });

    if (res.data.code === 200) {
      toast.success(`Bienvenido ${res.data.data.user.name}`);
    }
    return res;
  } catch (error) {
    toast.error('Error de autorización');
  }
};

//================== LOGOUT USER =====================
export const logout = async () => {
  try {
    const res = await instanceClientAPI.get(`/users/logout`);
    return res;
  } catch (error) {
    toast.error('¡Ups, algo salió mal!');
    console.error(error.message);
  }
};

//================== CURRENT USER =====================
export const current = async () => {
  return await instanceClientAPI.get(`/users/current`);
};

//=============== get New Tokens ========================

export const getNewTokens = async payload => {
  return await instanceClientAPI.post(`/users/refresh-tokens`, payload);
};

//================== GET LIST OF PRODUCTS BY QUERY =====================

export const getProductsByQuery = async (payload, langua) => {
  try {
    console.log('paylod de solicitud', payload);
    const { data } = await instanceClientAPI.get(
      `/products/search?query=${payload}&lang=${langua}`,
    );

    console.log('data retornada del back', data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

//================== Advice recomendation for not loggin user =====================

export const adviceForNoAuthUser = async payload => {
  try {
    const { data } = await instanceClientAPI.post(
      '/users/nutrition-advice',
      payload,
    );
    console.log(data);
    return data;
  } catch (error) {
    toast.error('¡Ups, algo salió mal!');
    console.log(error.message);
  }
};

//================== Advice recomendation for Login in user =====================

export const adviceForLoginUser = async payload => {
  try {
    const { data } = await instanceClientAPI.post(
      '/users/logged-nutrition-advice',
      payload,
    );

    return data;
  } catch (error) {
    toast.error('¡Ups, algo salió mal!');
    console.log(error.message);
  }
};

// ================ GET PRODUCTS IN DIETARY BY DATE ================
export const getProductsByDate = async ({ date }) => {
  try {
    console.log('calling api to /dietaries?date=', date);
    const { data } = await instanceClientAPI.get(`/dietaries?date=${date}`);
    console.log('respuesta es data', data);
    return data;
  } catch (error) {
    if (error.response.status === 404) {
      return { data: '"La dieta para esta fecha aún no ha sido creada' };
    } else {
      console.log(error.message);
    }
  }
};
//================== CREATE OBJ FOR PRODUCTS TO DIETARY BY DATE =====================

export const createProductsListByDate = async ({ date }) => {
  try {
    return await instanceClientAPI.post('/dietaries', { date });
  } catch (error) {
    console.log(error);
  }
};

//================== ADD PRODUCTS TO DIETARY BY DATE =====================

export const addProductByDate = async ({ date, data }) => {
  try {
    return await instanceClientAPI.patch('/dietaries', { date, data });
  } catch (error) {
    console.log(error);
  }
};

//================== DELETE PRODUCTS TO DIETARY BY DATE =====================

export const deleteProductByDate = async ({ productId, date }) => {
  try {
    return await instanceClientAPI.delete(
      `dietaries/?productId=${productId}&date=${date}`,
    );
  } catch (error) {
    console.log(error);
  }
};

export const clientAPI = {
  register,
  login,
  logout,
  current,
  getNewTokens,
  getProductsByQuery,
  adviceForNoAuthUser,
  adviceForLoginUser,
  getProductsByDate,
  createProductsListByDate,
  addProductByDate,
  deleteProductByDate,
};
