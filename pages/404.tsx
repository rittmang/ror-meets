import { ChevronRightIcon } from "@heroicons/react/solid";
import { BookOpenIcon, CheckIcon, CodeIcon, DocumentTextIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { HeadSeo } from "@components/seo/head-seo";

const links = [
  {
    title: "Documentation",
    description: "Learn how to integrate our tools with your app",
    icon: DocumentTextIcon,
    href: "https://docs.cal.com",
  },
  {
    title: "API Reference",
    description: "A complete API reference for our libraries",
    icon: CodeIcon,
    href: "https://api.docs.cal.com",
  },
  {
    title: "Blog",
    description: "Read our latest news and articles",
    icon: BookOpenIcon,
    href: "https://cal.com/blog",
  },
];

export default function Custom404() {
  const router = useRouter();
  const username = router.asPath.replace("%20", "-");

  const isEventType404 = router.asPath.includes("/event-types");

  return (
    <>
      <HeadSeo
        title="404: This page could not be found."
        description="404: This page could not be found."
        nextSeoProps={{
          nofollow: true,
          noindex: true,
        }}
      />
      <div className="bg-white min-h-screen px-4">
        <main className="max-w-xl mx-auto pb-6 pt-16 sm:pt-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-black uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
          </div>
        </main>
      </div>
    </>
  );
}
