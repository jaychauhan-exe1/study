import { notFound } from "next/navigation"
import { getTopic } from "@/app/lib/getTopics"
import { CodeBlock } from "@/app/components/CodeBlock"

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const topic = getTopic(slug)
  if (!topic) return notFound()

  return (
    <article className="prose dark:prose-invert">
      <h1 className="text-6xl font-bold text-zinc-100 mb-10">
        {topic.title}
      </h1>

      <p className="whitespace-pre-wrap text-lg">
        {topic.content}
      </p>

      {topic.code && <CodeBlock code={topic.code} />}
    </article>
  )
}
