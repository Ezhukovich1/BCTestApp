import {IResponsePhotoDetail} from '../../interfaces';

export interface IPhotoDetailInitialState {
  photoDetail: IResponsePhotoDetail;
  loading: boolean;
  error: null | string;
}

export enum PhotoDetailActionTypes {
  FETCH_PHOTO_DETAIL = 'FETCH_PHOTO_DETAIL',
  FETCH_PHOTO_DETAIL_SUCCESS = 'FETCH_PHOTO_DETAIL_SUCCESS',
  FETCH_PHOTO_DETAIL_ERROR = 'FETCH_PHOTO_DETAIL_ERROR',
}

interface FetchPhotoDetailAction {
  type: PhotoDetailActionTypes.FETCH_PHOTO_DETAIL;
}

interface FetchPhotoDetailSuccessAction {
  type: PhotoDetailActionTypes.FETCH_PHOTO_DETAIL_SUCCESS;
  payload: IResponsePhotoDetail;
}

interface FetchPhotoDetailErrorAction {
  type: PhotoDetailActionTypes.FETCH_PHOTO_DETAIL_ERROR;
  payload: string;
}

export type PhotoDetailAction =
  | FetchPhotoDetailAction
  | FetchPhotoDetailSuccessAction
  | FetchPhotoDetailErrorAction;
