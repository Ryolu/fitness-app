import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import { Thumbnail } from "react-native-thumbnail-video";

const videos = [
  {
    id: "FDNIz3FVf10",
    title: "Getting IPPT Gold",
    url: "https://www.youtube.com/watch?v=FDNIz3FVf10",
  },
  {
    id: "0a6vV1FRW1o",
    title: "Training your stamina",
    url: "https://www.youtube.com/watch?v=0a6vV1FRW1o",
  },
  {
    id: "eIP20t1ltmY",
    title: "Training with ELISS",
    url: "https://www.youtube.com/watch?v=eIP20t1ltmY",
  },
];

const RecommendedVideosScreen = () => {
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Thumbnail
              imageWidth="100%"
              url={item.url}
              onPress={() => {
                Linking.openURL(item.url);
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  videoContainer: {
    marginVertical: "5%",
    marginHorizontal: "2.5%",
    padding: "5%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  video: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
});

export default RecommendedVideosScreen;
