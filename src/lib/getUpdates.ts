 import { fetchGitHub } from "./fetchGitHub";
import { fetchYouTube } from "./fetchYouTube";
import { fetchMedium } from "./fetchMedium";

export type Update = {
  id: string;
  source: "LinkedIn" | "GitHub" | "YouTube" | "Medium" | "Manual";
  title: string;
  description?: string;
  date: string;
  url: string;
  media?: { type: "thumbnail"; src: string };
};

export async function getUpdates(): Promise<Update[]> {
  const [github, youtube, medium] = await Promise.all([
    fetchGitHub(process.env.GITHUB_USERNAME || ""),
    fetchYouTube(
      process.env.YOUTUBE_CHANNEL_ID || ""),
    fetchMedium(process.env.MEDIUM_USERNAME || ""),
  ]);

  return [...github, ...youtube, ...medium].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
