export function ChangeDateDisplay({isoDate, includeTime = false}) {
  const date = new Date(isoDate);

  if (isNaN(date)) return 'Invalid Date';

  const optionsDate = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  };

  if (includeTime) {
    const optionsTime = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    };
    const timePart = date.toLocaleTimeString('en-US', optionsTime);
    const datePart = date.toLocaleDateString('en-GB', optionsDate);
    return `${timePart} ${datePart}`;
  } else {
    return date.toLocaleDateString('en-GB', optionsDate);
  }
}
