import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminApi } from "../../api";

const initialState = {
  shops: [],
  changeRoleRequest: [],
};

const slice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAddShop(state, { payload }) {
      const { shop } = payload;
      state.shops.push(shop);
    },
    getShops(state, { payload }) {
      const { address, city, statusClose } = payload;
      state.shops.push({
        address: address,
        city: city,
        statusClose: statusClose,
      });
    },
    getRequestOnChangeRole(state, { payload }) {
      const { address, role, id_shop, statusClose } = payload;
      state.changeRoleRequest.push({
        address: address,
        role: role,
        id_shop: id_shop,
        statusClose: statusClose,
      });
    },
    clearRequests(state, { payload }) {
      state.changeRoleRequest = [];
    },
    clearShop(state){
      state.shops = []
    }
  },
});

export const createShopThunk = createAsyncThunk(
  "admin/createShop",
  async ({ shopAddress, city, address }, { dispatch }) => {
    console.log(shopAddress, city, address);
    console.log(adminApi);
    const response = await adminApi.createShop(shopAddress, city, address);
    console.log(response);
    if (response) {
      console.log(response);
      dispatch(slice.actions.clearShop())
      let shops = await adminApi.getShops();
      console.log(shops);
      for (let item of shops) {
        console.log(item);
        dispatch(
          slice.actions.getShops({
            address: item.shop_address,
            city: item.city,
            statusClose: item.statusClose,
          })
        );
      }
    } else {
      console.log("error switch role");
    }
  }
);
export const getShopsThunk = createAsyncThunk(
  "admin/getShops",
  async ({ address }, { dispatch }) => {
    console.log("q");
    dispatch(slice.actions.clearShop())
    let shops = await adminApi.getShops();
    console.log(shops, "-", address);
    for (let item of shops) {
      console.log(item);
      dispatch(
        slice.actions.getShops({
          address: item.shop_address,
          city: item.city,
          statusClose: item.statusClose,
        })
      );
    }
  }
);
export const deleteShopThunk = createAsyncThunk(
  "admin/deleteShop",
  async ({ id_shop, address }, { dispatch }) => {
    console.log("delete1");
    const response = await adminApi.deleteShop(id_shop, address);
    if (response) {
      dispatch(slice.actions.clearShop())
      let shops = await adminApi.getShops();
      console.log(shops);
      for (let item of shops) {
        console.log(item);
        dispatch(
          slice.actions.getShops({
            address: item.shop_address,
            city: item.city,
            statusClose: item.statusClose,
          })
        );
      }
    }
  }
);
export const changeRoleThunk = createAsyncThunk(
  "admin/changeRole",
  async ({ AddressUser, id_shop, address }, { dispatch }) => {
    console.log("delete1");

    const response = await adminApi.changeRole(AddressUser, id_shop, address);
    if (response) {
    }
  }
);
export const changeRoleOnRequestThunk = createAsyncThunk(
  "admin/changeRoleOnRequest",
  async ({ id_request, answer, address }, { dispatch }) => {
    console.log(id_request, answer, address);
    const response = await adminApi.changeRoleOnRequest(
      id_request,
      answer,
      address
    );
    if (response) {
      dispatch(slice.actions.clearRequests())
      let requests = await adminApi.getRequestsChangeRole();
      console.log(requests);
      for (let item of requests) {
        console.log(item);
        dispatch(
          slice.actions.getRequestOnChangeRole({
            address: item.user,
            role: item.role,
            id_shop: item.id_shop,
            statusClose: item.status,
          })
        );
      }
    }
  }
);

export const getRequestThunk = createAsyncThunk(
  "admin/getRequest",
  async ({ address }, { dispatch }) => {
    console.log("getDATA");
    let requests = await adminApi.getRequestsChangeRole();
    console.log(requests, "-", address);
    console.log(adminReducer);
    dispatch(slice.actions.clearRequests())
    console.log("Мы прошли точку остановки");
    for (let item of requests) {
      console.log(item);
      dispatch(
        slice.actions.getRequestOnChangeRole({
          address: item.user,
          role: item.role,
          id_shop: item.id_shop,
          statusClose: item.status,
        })
      );
    }
  }
);
export const { reducer: adminReducer } = slice;
export const { actions: adminActions } = slice;
