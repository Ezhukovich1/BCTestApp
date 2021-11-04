import {combineReducers} from 'redux';

import {photosReducer} from './photosReducer';
import {photoDetailReducer} from './photoDetailReducer';

export const rootReducer = combineReducers({
  photos: photosReducer,
  photoDetail: photoDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
