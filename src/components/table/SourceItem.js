export function SourceItem({ source }) {
  return (
    <p className={`${source === 'Form' ? 'text-neutral underline' : 'text-info underline'}`}>
      {source}
    </p>
  );
}
