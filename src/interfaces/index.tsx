type StringOrNumber = string | number;

export interface IResponsePhoto {
  farm: number;
  id: string;
  owner: string;
  secret: string;
  server: string;
  title: string;
  url_s: string;
  photo_url: string;
}

export interface IScreenProps {
  navigation: {
    navigate: Function;
  };
  route: any;
}

export interface IResponsePhotoDetail {
  id: string;
  owner: {
    realname: string;
    username: string;
  };
  views: string;
  urls: {
    url: {type: string; _content: string}[];
  };
}

export interface IStyle {
  [key: string]: {
    [key: string]: StringOrNumber;
  };
}
