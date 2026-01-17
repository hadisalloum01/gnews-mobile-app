import { useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { fetchNews } from "./api/gnews";
import ArticleCard from "./components/ArticleCard";

export default function App() {
  const [query, setQuery] = useState("technology");
  const [max, setMax] = useState("5");
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");

  const loadNews = async () => {
    const data = await fetchNews(query, Number(max));
    setArticles(data);
  };

  const filteredArticles = articles.filter(
    a =>
      a.title.toLowerCase().includes(filter.toLowerCase()) ||
      (a.source?.name || "").toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search keyword" value={query} onChangeText={setQuery} style={styles.input} />
      <TextInput placeholder="Number of articles" value={max} onChangeText={setMax} keyboardType="numeric" style={styles.input} />
      <Button title="Fetch News" onPress={loadNews} />
      <TextInput placeholder="Filter by title or author" value={filter} onChangeText={setFilter} style={styles.input} />
      <FlatList data={filteredArticles} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <ArticleCard article={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  input: { borderWidth: 1, padding: 10, marginVertical: 8, borderRadius: 6 },
});