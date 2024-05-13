import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { archivo } from "@/lib/fonts";
import React, { ReactNode } from "react";
import { coreFeature } from "@/lib/const";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
const Section = ({children} : {children : React.ReactNode} ) =>{
  return(
    <section className="py-12">
      {children}
    </section>
  )
}
export default function Home() {
  return (
      <section className="">
        <main className="container mx-auto">
          <section className="flex flex-col items-center justify-center pb-12 pt-12 md:pt-16 lg:pt-20 mx-auto">
            <div className="max-w-screen-md">
              <h1 className={`${archivo} font-bold text-4xl md:text-6xl lg:text-6xl text-center pb-6`}>Organize your daily Task and Projects with <span className="underline text-lime-500">TaskyApp</span></h1>
              <p className="text-center text-zinc-400 mx-auto">A Task Manager for personal or team projects including boards, schedule, daily task, project management like a roadmap, memos, boards, and more.</p>
              <Link className="flex items-center w-max mx-auto gap-1 py-4 justify-center z-10 mt-6 rounded-full hover:-translate-y-1 px-6 shadow-xl bg-onyx-700 dark:bg-white text-onyx-50 dark:text-onyx-800 transition-all duration-150 ease-linear font-medium uppercase" href={'/login'}>
                <span>Start for Free</span>
                <ChevronRightIcon />
              </Link>
            </div>
            <Image className="rounded-lg border border-white/20 mt-9" src={'/preview.webp'} width={1000} height={700} alt="preview" />
          </section>
          <Section>
            <h1 className="text-center text-4xl font-semibold pb-6">Core Features</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreFeature.map((feature) => (
              <Card className="p-4 CardStyle">
                <CardHeader className="flex items-center flex-col gap-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl borderStyle bg-gradient-to-b from-onyx-50 to-onyx-200 dark:from-onyx-600 dark:to-onyx-800 shadow-2xl">
                    <feature.icon />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardDescription className="text-center text-onyx-500">
                  {feature.description}
                </CardDescription>
              </Card>
            ))}
            </ul>
          </Section>
        </main>
      </section>
  );
}
