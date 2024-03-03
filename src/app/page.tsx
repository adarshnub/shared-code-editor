import HomePage from "@/components/pages/HomePage";
import Landingpage from "@/components/shared/Landingpage";

export interface Language {
  id: string;
  name: string;
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Landingpage /> */}
      <HomePage />
    </main>
  );
}
