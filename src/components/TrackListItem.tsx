import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Track } from "../types";

type trackListProps = {
  track: Track;
};

const TrackListItem = ({ track }: trackListProps) => {
  console.log(track);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{track.name}</Text>
      <Text style={styles.title}>{track.artists[0].name}</Text>
      <Text style={styles.title}>{track.album.name}</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default TrackListItem;
