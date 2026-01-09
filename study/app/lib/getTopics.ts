import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
type TopicFrontmatter = {
  title: string
  code?: string
}
const CONTENT_PATH = path.join(process.cwd(), 'content/javascript')

export function getTopic(slug: string) {
  const filePath = path.join(CONTENT_PATH, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)

  return {
    title: data.title as string,
    content, // raw MDX string
    code: data.code as string,
  }
}
