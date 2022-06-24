import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

const PhotoList = (props) => {
	const [ photos, setPhotos ] = useState(null);

	const styles = StyleSheet.create({
		mainViewStyle: {
		  height: '100%',
		  display: 'flex'
		},
		flatListStyle:{
		  flexGrow: 0,
		  height: '100%'
		}
	  })

	useEffect(() => {
		const getPhotos = async () => {
			let response;
			try {
				response = await axios.get(
					`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props
						.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`
				);
				setPhotos(response.data.photoset.photo);
			} catch (error) {
				console.log(error);
			}
		};
		getPhotos();
	}, []);

	const renderAlbums = ({ item }) => (
		<PhotoDetail
			key={item.title}
			title={item.title}
			imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
		/>
	);

	console.log(photos)
	return !photos ? (
		<View style={styles.mainViewStyle}>
			<Text>Loading...</Text>
		</View>
	) : (
		<View style={styles.mainViewStyle}>
			<FlatList 
			data={photos} 
			renderItem={renderAlbums} 
			keyExtractor={(item) => item.id} 
			/>
		</View>
	);
};

export default PhotoList;
