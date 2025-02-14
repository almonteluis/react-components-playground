export default function Hero() {
  return (
    <section id="hero">
      <div className="gap-2 flex justify-between">
        <div className="flex-col flex flex-1 space-y-1.5">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I&apos;m Luis 👋
          </h1>
          <p className="max-w-[600px] md:text-xl">
            Frontend Engineer Happy reading! 🤠
          </p>
        </div>
        <span className="relative flex shrink-0 overflow-hidden rounded-full size-32 border">
          <img
            className="aspect-square h-full w-full"
            alt="Luis Almonte"
            src="/headshot.jpeg"
          />
        </span>
      </div>
    </section>
  );
}
