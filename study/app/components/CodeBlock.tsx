import React from 'react'

interface Props {
    code: string
    language?: string
}

export const CodeBlock = ({code, language}: Props) => {
  return (
    <div className="relative rounded-lg border bg-zinc-900 text-zinc-100">
      {/* Code */}
      <div className="border-r p-4">
        <pre className="whitespace-pre-wrap">{decodeURIComponent(code)}</pre>
      </div>

    </div>
  )
}
