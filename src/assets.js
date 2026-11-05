// Files in public/ must resolve under the deployed project path.
export function publicAsset(path, base = import.meta.env.BASE_URL) {
  if (/^(https?:|data:|blob:)/i.test(path)) return path;
  return `${base}${path.replace(/^\/+/, '')}`;
}
