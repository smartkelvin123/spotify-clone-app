import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Track } from "../types";

type trackListProps = {
  track: Track;
};

const TrackListItem = ({ track }: trackListProps) => {
  console.log(track);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: track.album.images[0]?.url,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
        <Text style={styles.title}>{track.album.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 15,
    color: "white",
  },
  image: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default TrackListItem;
