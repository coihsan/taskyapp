import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

const FooterOnSidebar = () => {
  return (
    <footer className="w-full flex items-center justify-evenly">
            <Link className="text-xs" href="/privacy">
              Privacy
            </Link>
            <Link className="text-xs" href="/policy">
              Policy
            </Link>
            <Link
              className="text-lime-600 text-xs dark:text-lime-400"
              href="/support"
            >
              Support
            </Link>
            <ModeToggle />
    </footer>
  )
}

export default FooterOnSidebar