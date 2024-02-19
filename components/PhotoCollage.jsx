import React, { useState } from 'react';
import { View, Image, Modal, TouchableOpacity, SafeAreaView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const PhotoCollage = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const imagesForViewer = images.map(img => ({ url: img.uri }));

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {images.map((img, index) => (
        <TouchableOpacity key={img.uri} onPress={() => setCurrentImageIndex(index)}>
            <Image source={{ uri: img.uri }} style={{ width: 100, height: 100 }} />
        </TouchableOpacity>
      ))}

        <SafeAreaView>
            <Modal visible={currentImageIndex !== null} transparent={true}>
                <ImageViewer
                imageUrls={imagesForViewer}
                index={currentImageIndex}
                onSwipeDown={() => setCurrentImageIndex(null)}
                enableSwipeDown={true}
                />
                
            </Modal>
        </SafeAreaView>
    </View>
  );
};

export default PhotoCollage;
