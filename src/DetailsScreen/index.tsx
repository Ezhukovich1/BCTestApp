import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

import {useActions, useTypeSelector} from '../hooks';
import {IScreenProps, IStyle} from '../interfaces';

export const DetailsScreen: React.FC<IScreenProps> = ({route}) => {
  const width = Dimensions.get('window').width;

  const {photoDetail, loading} = useTypeSelector(state => state.photoDetail);
  const {fetchPhotoDetail} = useActions();

  const {owner} = photoDetail;

  console.log(photoDetail);

  React.useEffect(() => {
    fetchPhotoDetail(route.params.photo_id);
  }, [route.params.photo_id]);

  // const [some, setSome] = React.useState('');
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View>
      <Image
        style={{width: width, height: width, marginBottom: 10}}
        resizeMode={'contain'}
        source={{
          uri: route.params.photo_url || '',
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontWeight: 'bold'}}>Owner: </Text>
        <Text>{owner.realname || owner.username}</Text>
      </View>
    </View>
  );
};

const styles: IStyle = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    padding: 5,
  },
});
