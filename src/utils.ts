// utils/dirname.ts
import { fileURLToPath } from 'url'
import path from 'path'

export const getDirname = (metaUrl: string) => {
  const __filename = fileURLToPath(metaUrl)
  return path.dirname(__filename)
}