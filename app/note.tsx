interface NoteTitleProps {
  title: string;
  date: string;
  href: string;
}

export function NoteTitle({ title, date, href }: NoteTitleProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="mr-2">•</span>
      <a href={href} className="transition-colors underline">{title}</a>
      <span className="flex-1" />
      <span className="">{date}</span>
    </div>
  )
}