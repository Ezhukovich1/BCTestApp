import * as PhotosActionCreators from './photos';
import * as PhotoDetailActionCreators from './photoDetail';

export default {
  ...PhotosActionCreators,
  ...PhotoDetailActionCreators,
};
