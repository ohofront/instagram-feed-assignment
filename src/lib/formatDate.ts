export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('ko-KR', {
    month: 'long',
    day: 'numeric',
  }).format(date);
}
