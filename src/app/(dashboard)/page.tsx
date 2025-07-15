"use client"

import Image from "next/image";
import useAuth from "../../customHooks/useAuth/useAuth";
import FormSubmissionToast from "@/components/toast/formSubmissionToast/formSubmissionToast";

export default function Home() {
  const auth = useAuth();
  console.log("auth", auth);
  
  return (
    <main className="min-h-screen p-8 sm:p-12 flex flex-col gap-8">
        <FormSubmissionToast />
      <div>
        <h1 className="text-2xl font-semibold mb-2">
          Welcome to your Dashboard
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Manage your app settings and explore documentation below.
        </p>
      </div>

      <section className="flex flex-col gap-6">
        <ol className="list-decimal list-inside text-sm/6 font-[family-name:var(--font-geist-mono)] text-gray-700 dark:text-gray-300">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </section>

      <footer className="pt-10 border-t border-gray-200 dark:border-white/[.1] flex gap-6 flex-wrap text-sm text-gray-600 dark:text-gray-400">
        <a
          href="https://nextjs.org/learn"
          className="flex items-center gap-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/file.svg" alt="File" width={16} height={16} />
          Learn
        </a>
        <a
          href="https://vercel.com/templates"
          className="flex items-center gap-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/window.svg" alt="Templates" width={16} height={16} />
          Examples
        </a>
        <a
          href="https://nextjs.org"
          className="flex items-center gap-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/globe.svg" alt="Globe" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </main>
  );
}
