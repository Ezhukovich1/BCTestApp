import {
  IPhotoDetailInitialState,
  PhotoDetailAction,
  PhotoDetailActionTypes,
} from '../types/photoDetail';

export const photoDetailState: IPhotoDetailInitialState = {
  photoDetail: {
    id: '',
    owner: {
      realname: '',
    },
    views: '',
    urls: {
      url: [{_content: '', type: ''}],
    },
  },
  loading: false,
  error: null,
};

export const photoDetailReducer = (
  state = photoDetailState,
  action: PhotoDetailAction,
): IPhotoDetailInitialState => {
  switch (action.type) {
    case PhotoDetailActionTypes.FETCH_PHOTO_DETAIL:
      return {...state, loading: true};
    case PhotoDetailActionTypes.FETCH_PHOTO_DETAIL_SUCCESS:
      return {...state, loading: false, photoDetail: action.payload};
    case PhotoDetailActionTypes.FETCH_PHOTO_DETAIL_ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
