import {
  APP_LONG_DESCRIPTION,
  APP_NAME,
  APP_SHORT_DESCRIPTION,
} from "@/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl  text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            {APP_NAME}
          </h1>
          <h2 className="text-3xl font-bold tracking-tighter text-indigo-400">
            {APP_SHORT_DESCRIPTION}
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {APP_LONG_DESCRIPTION}
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch.
            <span> </span>
            <Link
              className="underline underline-offset-2"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
