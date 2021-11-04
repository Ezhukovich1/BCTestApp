import {
  IPhotosInitialState,
  PhotosAction,
  PhotosActionTypes,
} from '../types/photos';

export const photosInitialState: IPhotosInitialState = {
  photos: [],
  page: 1,
  pages: 1,
  loading: false,
  error: null,
};

export const photosReducer = (
  state = photosInitialState,
  action: PhotosAction,
): IPhotosInitialState => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTOS:
      return {...state, loading: true};
    case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
      const {photos, refreshList} = action.payload;

      const {photo, page, pages} = photos;
      return {
        ...state,
        loading: false,
        photos: refreshList ? photo : [...state.photos, ...photo],
        page: page,
        pages: pages,
      };
    case PhotosActionTypes.FETCH_PHOTOS_ERROR:
      return {...state, loading: false, error: action.payload, photos: []};
    default:
      return state;
  }
};
