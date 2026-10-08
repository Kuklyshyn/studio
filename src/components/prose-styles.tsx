// Heading and paragraph styles for article bodies. The Tailwind typography plugin is not installed,
// so these rules provide the `prose` look. Rendered inline because `Head` exports are ignored in the App Router.
const css = `
.prose h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-top: 2.5em;
  margin-bottom: 1em;
}
.prose h3 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1em;
}
.prose p {
  line-height: 1.75;
  margin-bottom: 1.25em;
}
.prose a {
  color: hsl(var(--primary));
  text-decoration: none;
}
.prose a:hover {
  text-decoration: underline;
}
.prose ul {
  list-style-type: disc;
  padding-left: 1.5em;
  margin-bottom: 1.25em;
}
.prose li {
  margin-bottom: 0.5em;
}
`;

export function ProseStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
