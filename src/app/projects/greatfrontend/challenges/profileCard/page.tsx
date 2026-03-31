import ProfileCard from "@/components/organisms/ProfileCard";
import Navigation from "@/components/Navigation";

export default function ProfileCards() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navigation />
      <main
        role="main"
        className="pt-24 pb-16 min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] text-black py-[200px]"
      >
        <ProfileCard />
      </main>
    </div>
  );
}
