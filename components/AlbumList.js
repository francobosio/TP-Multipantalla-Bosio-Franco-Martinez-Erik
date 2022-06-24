import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = (props) => {
  const styles = StyleSheet.create({
    mainViewStyle: {
      backgroundColor: '#FAFCFF',
      height: '100%'
    },
    flatListStyle:{
      flexGrow: 0,
      height: '100%'
    }
  })

  const [photoset, setPhotoset] = useState(null);
  useEffect(() => {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
      )
      .then((response) =>
        setPhotoset(response.data.photosets.photoset),
      );
  }, [])

  const renderAlbums = ({ item }) => (
    <AlbumDetail
      navigation={props.navigation}
      key={item.id}
      title={item.title._content}
      albumId={item.id}
      description={item.description._content}
      countPhotos={item.count_photos}
    />
  );

  console.log(photoset);
  return (
    (!photoset ? 
      <Text>Loading...</Text>
    :
    <View style={styles.mainViewStyle}>
      <FlatList
      style={styles.flatListStyle}
      data={photoset}
      renderItem={renderAlbums}
      keyExtractor={item => item.id}
      />
    </View>)
  );
}

export default AlbumList;
