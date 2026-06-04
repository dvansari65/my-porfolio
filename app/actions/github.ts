"use server";

export async function getGithubContributions(userName: string, fromDate?: string, toDate?: string) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is not set in environment variables.");
  }

  const query = `
    query($userName:String!, $from:DateTime, $to:DateTime) { 
      user(login: $userName){
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

  const variables = {
    userName,
    from: fromDate,
    to: toDate
  };

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store", 
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const data = await response.json();
  if (data.errors) {
    throw new Error(`GraphQL Error: ${data.errors[0].message}`);
  }

  return data.data.user.contributionsCollection.contributionCalendar;
}
