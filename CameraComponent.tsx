import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CameraComponent = () => {
  const [imageUri, setImageUri] = useState<any>(
    'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
  );
  const openCameraLib = async () => {
    const result = await launchCamera({mediaType: 'photo', saveToPhotos: true});
    setImageUri(result?.assets?.[0]?.uri);
    console.log(result, 'result');
  };

  const openLib = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    setImageUri(result?.assets?.[0]?.uri);
    console.log(result, 'result');
  };

  return (
    <View>
      <Image
        resizeMode="contain"
        source={{
          uri: imageUri,
        }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.buttonTouch} onPress={openCameraLib}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonTouch} onPress={openLib}>
        <Text style={styles.buttonText}>Open Galary Library</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTouch: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'green',
    margin: 10,
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  image: {
    height: 300,
    width: '90%',
    alignSelf: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default CameraComponent;
