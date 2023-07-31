export const baseUrl = (url, assets = false) => {
  if (!url) return null;
  if (assets)
    return process.env.NEXT_PUBLIC_BACKEND_URL + "/" + "assets/images/" + url;
  if (url.startsWith("http")) return url;
  return process.env.NEXT_PUBLIC_BACKEND_URL + "/" + url;
};
