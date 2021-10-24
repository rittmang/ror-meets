import { BookOpenIcon, CheckIcon, CodeIcon, DocumentTextIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useLocale } from "@lib/hooks/useLocale";

import { HeadSeo } from "@components/seo/head-seo";

export default function Custom404() {
  const { t } = useLocale();
  const router = useRouter();
  const username = router.asPath.replace("%20", "-");
  const links = [
    {
      title: t("documentation"),
      description: t("documentation_description"),
      icon: DocumentTextIcon,
      href: "https://docs.cal.com",
    },
    {
      title: t("api_reference"),
      description: t("api_reference_description"),
      icon: CodeIcon,
      href: "https://api.docs.cal.com",
    },
    {
      title: t("blog"),
      description: t("blog_description"),
      icon: BookOpenIcon,
      href: "https://cal.com/blog",
    },
  ];

  const isEventType404 = router.asPath.includes("/event-types");

  return (
    <>
      <HeadSeo
        title={t("404_page_not_found")}
        description={t("404_page_not_found")}
        nextSeoProps={{
          nofollow: true,
          noindex: true,
        }}
      />
      <div className="bg-white min-h-screen px-4">
        <main className="max-w-xl mx-auto pb-6 pt-16 sm:pt-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-black uppercase tracking-wide">404 error</p>
            <h1 className="font-cal mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              {t("page_doesnt_exist")}
            </h1>
          </div>
        </main>
      </div>
    </>
  );
}
