import Homes from "../app/components/Home/home";
import Header from "../app/components/common/Headers";
import Contact from "./components/Home/ contact";
import About from "./components/Home/about";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Homes />
      <About />
      <Contact />
    </div>
  );
}
