export async function fetchYouTube(channelId: string) {
  const apiKey = process.env.YOUTUBE_API_KEY; // ✅ comes from .env.local or Vercel
  if (!channelId || !apiKey) return [];

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&order=date&part=snippet&type=video&maxResults=5&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();

    if (!data.items) {
      console.error("YouTube API error:", data);
      return [];
    }

    return data.items.map((item: any) => ({
      id: item.id.videoId,
      source: "YouTube" as const,
      title: item.snippet.title,
      description: item.snippet.description,
      date: item.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      media: {
        type: "thumbnail" as const,
        src: item.snippet.thumbnails.medium.url,
      },
    }));
  } catch (err) {
    console.error("YouTube fetch error:", err);
    return [];
  }
}

