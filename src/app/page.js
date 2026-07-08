import Banner from "./components/Banner";
import TopDoctors from "./components/TopDoctors";
import ClientReviews from "./components/Review";

export default function Home() {


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner></Banner>
      <TopDoctors />
      <ClientReviews />


    </div>
  );
}
