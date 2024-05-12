import { SignIn } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { ArrowBigLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="flex items-center mb-6">
        <ArrowBigLeftIcon />
        <Link href={'/'}>Back to Home</Link>
      </div>
      <SignIn path="/sign-in" />
    </main>
  )
}