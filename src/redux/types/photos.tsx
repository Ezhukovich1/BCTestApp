import {IResponsePhoto} from '../../interfaces';

export interface IPhotosInitialState {
  photos: IResponsePhoto[];
  page: number;
  pages: number;
  loading: boolean;
  error: null | string;
}

export enum PhotosActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
}

interface FetchPhotosAction {
  type: PhotosActionTypes.FETCH_PHOTOS;
}

interface FetchPhotosSuccessAction {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS;
  payload: {
    photos: {
      page: number;
      pages: number;
      photo: IResponsePhoto[];
    };
    refreshList: boolean;
  };
}

interface FetchPhotosErrorAction {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR;
  payload: string;
}
export type PhotosAction =
  | FetchPhotosAction
  | FetchPhotosSuccessAction
  | FetchPhotosErrorAction;
