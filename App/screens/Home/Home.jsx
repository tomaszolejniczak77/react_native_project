import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import Title from "../../components/Title/Title";

import styles from "./home.style";

const Home = () => {
  return (
    <View style={styles.container}>
      <Title title="Test" />
    </View>
  );
};

export default Home;
