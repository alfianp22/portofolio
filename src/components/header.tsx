import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div>
        <Image
          src="/durian.png"
          alt="Durian Logo"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </header>
  );
}
