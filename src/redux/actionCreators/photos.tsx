import {PhotosAction, PhotosActionTypes} from '../types/photos';
import {Dispatch} from 'redux';
import axios from 'axios';

import {API} from '../../utils';
import {IResponsePhoto} from '../../interfaces';

export const fetchPhotosBySearch = (
  text: string,
  page: number,
  refreshList = false,
) => {
  return async (dispatch: Dispatch<PhotosAction>) => {
    try {
      dispatch({
        type: PhotosActionTypes.FETCH_PHOTOS,
      });

      const response = await axios.get(
        `${API.search}text=${text}&page=${page}`,
      );
      response.data.photos.photo = response.data.photos.photo.map(
        (photo: IResponsePhoto) => ({
          ...photo,
          photo_url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
        }),
      );
      dispatch({
        type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
        payload: {photos: response.data.photos, refreshList: refreshList},
      });
    } catch (e) {
      dispatch({
        type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
        payload: 'Search photos error',
      });
    }
  };
};
