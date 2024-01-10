import { View, Text } from "react-native";

import styles from "./title.style";

const Title = ({ title }) => {
  return <Text style={styles.text}>{title}</Text>;
};

export default Title;
