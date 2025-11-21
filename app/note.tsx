interface NoteTitleProps {
  title: string;
  date: string;
  href: string;
}

export function NoteTitle({ title, date, href }: NoteTitleProps) {
  return (
    <div className="flex items-center justify-between text-zinc-400">
      <a href={href} className="transition-colors underline">{title}</a>
      <span className="">{date}</span>
    </div>
  )
}