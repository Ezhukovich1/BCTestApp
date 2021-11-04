import {Dispatch} from 'redux';
import axios from 'axios';

import {PhotoDetailAction, PhotoDetailActionTypes} from '../types/photoDetail';

import {API} from '../../utils';

export const fetchPhotoDetail = (photo_id: string) => {
  return async (dispatch: Dispatch<PhotoDetailAction>) => {
    try {
      dispatch({
        type: PhotoDetailActionTypes.FETCH_PHOTO_DETAIL,
      });

      const response = await axios.get(
        `${API.photoDetail}photo_id=${photo_id}`,
      );
      dispatch({
        type: PhotoDetailActionTypes.FETCH_PHOTO_DETAIL_SUCCESS,
        payload: response.data.photo,
      });
    } catch (e) {
      dispatch({
        type: PhotoDetailActionTypes.FETCH_PHOTO_DETAIL_ERROR,
        payload: 'fetch photo detail error',
      });
    }
  };
};
