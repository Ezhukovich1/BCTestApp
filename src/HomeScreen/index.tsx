import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';

import {useActions, useTypeSelector} from '../hooks';
import {IResponsePhoto, IScreenProps} from '../interfaces';

const EmptyList: React.FC = () => {
  return (
    <View style={{alignItems: 'center', padding: 10}}>
      <Text>List is empty</Text>
    </View>
  );
};

export const HomeScreen: React.FC<IScreenProps> = ({navigation}) => {
  const [page, setPage] = React.useState<number>(1);
  const [text, setText] = React.useState<string>('');
  const {photos} = useTypeSelector(state => state.photos);
  const {fetchPhotosBySearch} = useActions();

  const widthForCell = Dimensions.get('window').width / 2;

  React.useEffect(() => {
    fetchPhotosBySearch(text, page);
  }, [page]);

  const onSearching = () => {
    Keyboard.dismiss();
    fetchPhotosBySearch(text, 1, true);
  };

  const navigateTo = (photo_id: string, photo_url: string) => {
    navigation.navigate('Details', {photo_id, photo_url});
  };

  return (
    <FlatList
      keyboardShouldPersistTaps={'always'}
      ListEmptyComponent={<EmptyList />}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <TextInput
            placeholder="Search field"
            style={styles.inputStyle}
            onChangeText={(textValue: string) => setText(textValue)}
          />
          <TouchableOpacity style={styles.searchBtn} onPress={onSearching}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      }
      data={photos}
      numColumns={2}
      renderItem={({item}: {item: IResponsePhoto}) => (
        <TouchableOpacity
          style={{padding: 2}}
          onPress={() => navigateTo(item.id, item.photo_url)}>
          <Image
            style={{
              width: widthForCell - 4,
              height: widthForCell - 4,
              borderRadius: 7,
            }}
            source={{
              uri: item.url_s || item.photo_url,
            }}
          />
        </TouchableOpacity>
      )}
      onEndReached={() => {
        setPage(prev => prev + 1);
      }}
      onEndReachedThreshold={0}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#fff',
    height: 40,
    padding: 4,
    flexGrow: 1,
    borderRadius: 7,
  },
  searchBtn: {
    marginLeft: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ccc',
    borderRadius: 7,
    justifyContent: 'center',
  },
  headerContainer: {
    padding: 4,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
