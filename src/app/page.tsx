import Image from "next/image";
import logo from "../../public/images/logo.svg";

// Header component
const Header = () => {
  return (
    <nav className="fixed p-8 pt-16 flex flex-row items-center h-20 w-full justify-between bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <Image src={logo} alt="logo" />
      <div className="burger-menu flex flex-col items-center justify-center w-10 h-10">
        <div className="line bg-[#FF2D70] w-10 h-1 mb-1 rounded-lg border-black"></div>
        <div className="line bg-[#FF2D70] w-10 h-1 mb-1 rounded-lg"></div>
        <div className="line bg-[#FF2D70] w-10 h-1 mb-1 rounded-lg"></div>
      </div>
    </nav>
  );
};

// Section component
const Section = ({ title, description, bgColor }) => {
  return (
    <section className={`flex flex-col items-center justify-center w-full h-[500px] ${bgColor}`}>
      <h1 className="text-white text-4xl font-bold">{title}</h1>
      <p className="text-white text-xl">{description}</p>
    </section>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#4400B2]">
      <Header />
      <Section
        title="Hello World"
        description="Welcome to my first Next.js app"
        bgColor="bg-[#4400B2]"
      />
      <Section
        title="Hello World"
        description="Welcome to my first Next.js app"
        bgColor="bg-[#4400B2]"
      />
      <Section
        title="Hello World"
        description="Welcome to my first Next.js app"
        bgColor="bg-[#4400B2]"
      />
    </main>
  );
}
