'use client'
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import type { Metadata } from "next";
type MetaProps = {
  siteTitle?: "TaskyApp";
  description?: string;
  canonical?: string;
  thisSite?: string;
};
export const metadata: Metadata = {
  title: "TaskyApp",
  description: "Organize your tasks with TaskyApp",
};
const Meta = ({siteTitle, description, canonical, thisSite} : MetaProps) => {
  const router = useRouter();

  return (
      <Head>
          <title>{siteTitle} | </title>
          <meta name="description" content={description} key="description" />
          <meta property="og:title" content="My page title" key="title" />
          <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
      </Head>
  );
};

export { Meta };