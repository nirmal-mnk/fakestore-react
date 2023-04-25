import Banner from "../Components/Banner/Banner";
import Category from "./Category";

export default function Home() {
  return (
    <div>
      <Banner bannerSrc={"Images/bannerone.webp"} />
      <Category />
    </div>
  );
}
