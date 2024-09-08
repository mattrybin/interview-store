import Link from "next/link"

export const Header = ({ name }: { name: string }) => {
  console.log({ name })
  return (
    <header className="p-4 capitalize border-b border-slate-700 font-bold">
      {name === "Categories" ? (
        <>{decodeURIComponent(name)}</>
      ) : (
        <Link
          className="flex place-items-center gap-1"
          href="/"
        >
          <i className="ph-fill ph-arrow-fat-left"></i>
          {decodeURIComponent(name)}
        </Link>
      )}
    </header>
  )
}
