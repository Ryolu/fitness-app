import React from "react";
import { View, StyleSheet, FlatList, Text, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";

const videos = [
  {
    id: "1",
    title: "Workout",
    url: "https://www.youtube.com/watch?v=FDNIz3FVf10&ab_channel=YourAverageGent",
  },
  {
    id: "2",
    title: "Gym",
    url: "https://v3.cdnpk.net/videvo_files/video/premium/partners0019/large_watermarked/BB_acb4635c-2509-4fa4-86cf-fc6bcbd52810_FPpreview.mp4",
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
            <Video
              source={{ uri: item.url }}
              style={styles.video}
              controls={true}
            />
            <View style={styles.buttons}>
              <Button
                title={status.isPlaying ? "Pause" : "Play"}
                onPress={() => {}}
              />
            </View>
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
    backgroundColor: "#ffffff",
  },
  videoContainer: {
    marginVertical: 10,
    padding: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  video: {
    width: "100%",
    height: 200,
  },
});

export default RecommendedVideosScreen;
