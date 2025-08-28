 import Parser from "rss-parser";

const parser = new Parser();

export async function fetchMedium(username: string) {
  if (!username) return [];

  try {
    const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);

    return feed.items.map((item) => ({
      id: item.guid || item.link || "",
      source: "Medium" as const,
      title: item.title || "",
      description: item.contentSnippet || "",
      date: item.isoDate || "",
      url: item.link || "",
    }));
  } catch (err) {
    console.error("Medium fetch error:", err);
    return [];
  }
}
