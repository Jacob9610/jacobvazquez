 export async function fetchGitHub(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/events/public`, {
      headers: { "User-Agent": "portfolio-site" },
      next: { revalidate: 3600 }, // cache 1h
    });
    const data = await res.json();

    return data
      .filter((event: any) => event.type === "PushEvent")
      .map((event: any) => ({
        id: event.id,
        source: "GitHub" as const,
        title: `Pushed to ${event.repo.name}`,
        description: event.payload.commits
          .map((c: any) => c.message)
          .join(", "),
        date: event.created_at,
        url: `https://github.com/${event.repo.name}`,
      }));
  } catch (err) {
    console.error("GitHub fetch error:", err);
    return [];
  }
}
