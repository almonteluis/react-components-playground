export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi, I&apos;m Luis 👋
            </h1>
            <p className="max-w-[600px] md:text-xl">
              Frontend Engineer and Security Researcher focusing on AI, and
              Security. Happy reading! 🤠
            </p>
          </div>
          <span className="relative flex shrink-0 overflow-hidden rounded-full size-32 border">
            <img
              className="aspect-square h-full w-full"
              alt="Luis Almonte"
              src="/cdn-cgi/image/width=200/me.jpg"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
