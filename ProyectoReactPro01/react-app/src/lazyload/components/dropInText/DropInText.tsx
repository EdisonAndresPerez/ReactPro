import React from 'react'



type DropInTextProps = {
  text: string;
  className: string;
  staggerMs: number;
}

export default function DropInText({
  text,
  className = "",
  staggerMs = 60,
}: DropInTextProps) {
  const letters = Array.from(text); // maneja bien acentos/emoji

  return (
    <h1 className={`dropin ${className}`} aria-label={text}>
      {letters.map((ch, i) => (
        <span key={i} style={{ animationDelay: `${i * staggerMs}ms` }}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </h1>
  );
}