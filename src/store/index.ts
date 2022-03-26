import { urls } from "./../utils/urls";
import { User } from "../interface/interface";
import { createStore } from "vuex";
import service from "@/utils/https";

const userInit = () => {
  const user = sessionStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }

  return {
    id: undefined,
    username: "",
    phone: "",
    password: "",
    gender: undefined,
    birthday: undefined,
    signature: "",
    avatarUrl: "",
    collectionCount: undefined,
    favoritesCounn: undefined,
  } as User;
};

export default createStore({
  state: {
    user: userInit(),
    token: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : "",
  },
  getters: {
    getUser: (state) => {
      const { user } = state;
      return user;
    },
  },
  mutations: {
    userLogin: (state, user) => {
      state.user = user;
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    userLogout: (state) => {
      sessionStorage.removeItem("user");
      localStorage.removeItem("token");
      state.user = userInit();
    },
    setToken: (state, token) => {
      state.token = token;
      localStorage.setItem("token", token);
    },
    userChange: (state: any, prop: any) => {
      state[prop.type] = prop.value;
    },
    userInit: (state) => {
      state.user = userInit();
    },
  },
  actions: {
    getUser: async (context): Promise<void> => {
      const data: any = await service.get(urls.getUser);
      const { commit } = context;
      const { user, token } = data;
      commit("userLogin", user);
      commit("setToken", token);
    },
  },
  modules: {},
});
