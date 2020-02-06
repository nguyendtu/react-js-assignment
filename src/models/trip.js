import produce from 'immer';
import { notification } from 'antd';
import { HTTPCode } from '@/utils/utils';
import { fetchListTrips } from '@/services/trip';

const Trip = {
  namespace: 'trip',
  state: {
    list: [],
  },
  effects: {
    * fetch(_, { call, put }) {
      const response = yield call(fetchListTrips);
      if (!response || response.message) {
        notification.error({
          message: response.message ? response.message : HTTPCode.TRIP.FAIL,
        });
        return;
      }

      yield put({
        type: 'saveList',
        payload: response && Array.isArray(response.trips) ? response.trips : [],
      });
    },
  },
  reducers: {
    saveList(state, action) {
      return produce(state, draft => {
        draft.list = action.payload;
      });
    }
  },
};

export default Trip;
