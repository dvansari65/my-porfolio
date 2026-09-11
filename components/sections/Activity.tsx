import Section from "@/components/ui/Section";
import GithubGraph from "@/components/GithubGraph";

export default function Activity() {
  return (
    <Section eyebrow="Activity" index={4}>
      <GithubGraph />
    </Section>
  );
}
