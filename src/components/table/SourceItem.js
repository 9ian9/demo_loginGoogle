export function SourceItem({ source }) {
  return (
    <p
      className={`${source === 'Form' ? 'text-neutral underline' : 'text-[#0091FF] underline'}`}
    >
      {source}
    </p>
  );
}
