import React from 'react'

type Tool = string | { name: string; color?: string }

interface Props {
  tools: Tool[];
  customClassName?: string;
}

const TECH_COLORS: Record<string, { bg: string; fg: string }> = {
  react: { bg: '#61dafb', fg: '#001d2b' },
  javascript: { bg: '#f7df1e', fg: '#000000' },
  typescript: { bg: '#3178c6', fg: '#ffffff' },
  php: { bg: '#777bb4', fg: '#ffffff' },
  'redux toolkit': { bg: '#764abc', fg: '#ffffff' },
  html: { bg: '#e34f26', fg: '#ffffff' },
  css: { bg: '#1572b6', fg: '#ffffff' },
  'tailwind css': { bg: '#38bdf8', fg: '#0b1220' },
}

function toSlug(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export const CardTools = ({ tools, customClassName = '' }: Props) => {
  // Combinar clases CSS: base + personalizada
  const toolsClasses = `project-card-tools ${customClassName}`.trim()
  
  return (
    <div className={toolsClasses}>
      {tools.map((t, idx) => {
        const label = typeof t === 'string' ? t : t.name
        const customColor = typeof t === 'string' ? undefined : t.color
        const slug = toSlug(label)
        const theme = TECH_COLORS[label.trim().toLowerCase()]
        const style = customColor
          ? { backgroundColor: customColor }
          : theme
            ? { backgroundColor: theme.bg, color: theme.fg }
            : undefined
        return (
          <span key={`${label}-${idx}`} className={`tool-chip tool-${slug}`} style={style}>
            {label}
          </span>
        )
      })}
    </div>
  )
}