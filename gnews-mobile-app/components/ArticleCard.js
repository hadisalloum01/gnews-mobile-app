import { View, Text, StyleSheet, Linking } from "react-native";

export default function ArticleCard({ article }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{article.title}</Text>
      <Text>Author: {article.source?.name || "Unknown"}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(article.url)}>
        Read more
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, marginVertical: 8, borderWidth: 1, borderRadius: 8 },
  title: { fontWeight: "bold", marginBottom: 6 },
  link: { color: "blue", marginTop: 6 },
});