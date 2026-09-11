"use server";

export type ContributionCalendar = {
  totalContributions: number;
  weeks: {
    contributionDays: { contributionCount: number; date: string; contributionLevel: string }[];
  }[];
};

const QUERY = `
  query($userName: String!, $from: DateTime, $to: DateTime) {
    user(login: $userName) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetches the GitHub contribution calendar for a user. Returns `null`
 * instead of throwing so a missing token or a GitHub outage degrades to
 * an "unavailable" state on the client rather than a server error.
 */
export async function getGithubContributions(
  userName: string,
  fromDate?: string,
  toDate?: string,
): Promise<ContributionCalendar | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { userName, from: fromDate, to: toDate } }),
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;

    const json = await response.json();
    if (json.errors) return null;
    return json.data.user.contributionsCollection.contributionCalendar as ContributionCalendar;
  } catch {
    return null;
  }
}
