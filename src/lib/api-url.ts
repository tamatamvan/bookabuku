export function apiUrl(
  path: string,
  searchParams?: Record<string, string | number>,
) {
  const url = new URL(`/api/${path}`, process.env.NEXT_PUBLIC_BASE_URL);

  if (searchParams) {
    Object.keys(searchParams).forEach((item) => {
      url.searchParams.append(item, searchParams[item]?.toString());
    });
  }

  return url;
}
