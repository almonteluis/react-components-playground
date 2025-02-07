"use client";
import { Button } from "@/components/atoms/Button";
import Socials from "@/components/molecules/Socials";
import Image from "next/image";
export default function ProfileCard() {
  function handleButton() {
    console.log("test");
  }
  return (
    <main
      role="main"
      className="h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] text-black py-[200px]"
    >
      <article className="w-[340px] flex flex-col gap-10 bg-white px-4 py-6 rounded-lg">
        <section className="flex flex-col items-center gap-6 self-stretch">
          <header className="w-16 h-16 card-header">
            <Image
              className="w-16 h-16 object-cover"
              src="/profile.png"
              width={64}
              height={64}
              alt="Sarah Dole Profile Photo"
            ></Image>
          </header>
          <section className="flex flex-col justify-center items-center gap-1 self-stretch card-body">
            <p className="font-medium text-xl text-center text-neutral-900">
              Sarah Dole
            </p>
            <p className="font-normal text-sm text-center text-neutral-600">
              Front End Engineer @ Microsoft
            </p>
          </section>
          <p className="font-normal text-base text-center text-neutral-600">
            I turn coffee into bugs which are fixed by someone else. Certified
            Stack Overflow and ChatGPT developer.
          </p>
        </section>
        <section className="flex flex-col gap-6 self-stretch card-footer">
          <Button title="Contact me" onClick={handleButton} />
          <Socials />
        </section>
      </article>
    </main>
  );
}
