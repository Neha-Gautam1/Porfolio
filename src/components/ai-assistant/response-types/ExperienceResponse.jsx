import TimelineList from "./TimelineList";

export default function ExperienceResponse({ message, items }) {
  return <TimelineList message={message} items={items} accent="purple" />;
}
