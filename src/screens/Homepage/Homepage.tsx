import React from "react";
import { Button } from "../../components/ui/button";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Tech Specs", href: "#tech-specs" },
];

const colorVariants = [
  { color: "bg-[#d8b74b]", size: "w-[60px] h-[60px]", active: false },
  { color: "bg-[#94915b]", size: "w-[62px] h-[62px]", active: true },
  { color: "bg-[#883d39]", size: "w-[60px] h-[60px]", active: false },
];

const featureCards = [
  {
    gradient:
      "bg-[linear-gradient(180deg,rgba(210,205,198,1)_0%,rgba(248,191,147,1)_100%)]",
    text: "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
    image: "https://c.animaapp.com/mgjq4pouROb7EA/img/headphone-model.png",
  },
  {
    gradient:
      "bg-[linear-gradient(180deg,rgba(210,205,198,1)_0%,rgba(242,235,227,1)_100%)]",
    text: "Silence distractions. Control everything with a gentle tap.",
    image: "https://c.animaapp.com/mgjq4pouROb7EA/img/headphone-detail-4.png",
  },
  {
    gradient:
      "bg-[linear-gradient(180deg,rgba(216,183,75,1)_0%,rgba(242,235,227,1)_100%)]",
    text: "Thoughtfully packed in plastic-free, high quality materials.",
    image: "https://c.animaapp.com/mgjq4pouROb7EA/img/headphone-detail-4-1.png",
  },
];

const detailImages = [
  "https://c.animaapp.com/mgjq4pouROb7EA/img/headphone-detail-4-2.png",
  "https://c.animaapp.com/mgjq4pouROb7EA/img/headphone-detail-3.png",
  "https://c.animaapp.com/mgjq4pouROb7EA/img/headphone-detail-5.png",
  "https://c.animaapp.com/mgjq4pouROb7EA/img/headphoner-detail-2.png",
  "https://c.animaapp.com/mgjq4pouROb7EA/img/headphone-detail-6.png",
  "https://c.animaapp.com/mgjq4pouROb7EA/img/headphone-detail-1.png",
];

const footerProducts = [
  { label: "Aura Pro II", href: "#aura-pro" },
  { label: "Flow II", href: "#flow" },
];

const socialIcons = [
  {
    alt: "Discord logo",
    src: "https://c.animaapp.com/mgjq4pouROb7EA/img/discordlogo.svg",
  },
  { alt: "X logo", src: "https://c.animaapp.com/mgjq4pouROb7EA/img/xlogo.svg" },
  {
    alt: "Meta logo",
    src: "https://c.animaapp.com/mgjq4pouROb7EA/img/metalogo.svg",
  },
];

export const Homepage = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center bg-neutral-100"
      data-model-id="358:128"
    >
      <section className="items-center gap-[180px] pt-0 pb-80 px-0 bg-[linear-gradient(180deg,rgba(210,205,198,1)_0%,rgba(245,245,245,1)_100%)] flex flex-col w-full">
        <header className="flex w-full max-w-[1280px] justify-between p-6 z-[1] rounded-3xl items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="inline-flex items-center gap-[2.2px]">
            <img
              className="w-[26px] h-[26px]"
              alt="Waveform"
              src="https://c.animaapp.com/mgjq4pouROb7EA/img/waveform.svg"
            />
            <div className="w-fit text-[#52483e] text-[19.6px] leading-[19.6px] whitespace-nowrap [font-family:'Poppins',Helvetica] font-semibold tracking-[0]">
              Resonance
            </div>
          </div>

          <nav className="inline-flex gap-4 items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-6 py-2.5 inline-flex items-center justify-center gap-2.5 transition-opacity hover:opacity-70"
              >
                <div className="w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(102,102,102,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-[normal]">
                  {item.label}
                </div>
              </a>
            ))}

            <Button className="px-8 py-2.5 h-auto rounded-3xl border-[none] bg-[linear-gradient(180deg,rgba(82,72,62,1)_0%,rgba(139,135,130,1)_100%)] inline-flex items-center justify-center gap-2.5 before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(139,135,130,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-transform hover:scale-105">
              <span className="text-white w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]">
                Compare
              </span>
            </Button>
          </nav>
        </header>

        <div className="items-start z-0 flex flex-col w-full">
          <h1 className="self-stretch mt-[-1.00px] z-[2] text-[#52483e] text-[180px] text-center leading-[172px] [font-family:'Poppins',Helvetica] font-semibold tracking-[0] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Resonance
          </h1>

          <img
            className="absolute top-[-272px] left-[calc(50.00%_-_542px)] w-[1084px] h-[1057px] z-[1] object-cover animate-fade-in opacity-0 [--animation-delay:400ms]"
            alt="Headphone image"
            src="https://c.animaapp.com/mgjq4pouROb7EA/img/headphone-image.png"
          />

          <h2 className="self-stretch z-0 bg-[linear-gradient(0deg,rgba(218,204,188,1)_0%,rgba(175,164,151,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-semibold text-transparent text-[180px] text-center tracking-[0] leading-[172px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            Aura Pro II
          </h2>
        </div>
      </section>

      <section className="flex flex-col gap-6 px-0 py-20 w-full items-center">
        <div className="flex flex-col max-w-[860px] items-start gap-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#51483e] text-[56px] text-center tracking-[0] leading-[normal]">
            Your Style. Your Sound.
          </h2>

          <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#8b8681] text-2xl text-center tracking-[0] leading-[normal]">
            Studio-grade acoustics that dissolve distractions and awaken
            clarity.
          </p>
        </div>

        <div className="flex items-center justify-center w-full overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="w-[420px] h-[420px] ml-[-110.00px] blur-[6.56px]">
            <img
              className="absolute w-full h-full top-0 left-[26.19%] object-cover"
              alt="Headphones yellow"
              src="https://c.animaapp.com/mgjq4pouROb7EA/img/headphones-yellow-.png"
            />
          </div>

          <div className="w-[660px] h-[660px] bg-[url(https://c.animaapp.com/mgjq4pouROb7EA/img/headphones-green-.png)] bg-cover bg-[50%_50%]" />

          <div className="w-[420px] h-[420px] blur-[6.56px]">
            <img
              className="absolute w-full h-full top-0 left-0 object-cover"
              alt="Headphones red"
              src="https://c.animaapp.com/mgjq4pouROb7EA/img/headphones-red-.png"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="inline-flex gap-10 items-center">
            {colorVariants.map((variant, index) => (
              <button
                key={index}
                className={`${variant.size} ${variant.color} rounded-[60px] ${
                  variant.active
                    ? "mt-[-1.00px] mb-[-1.00px] border-2 border-solid border-[#52483e]"
                    : ""
                } transition-transform hover:scale-110 cursor-pointer`}
                aria-label={`Select color variant ${index + 1}`}
              />
            ))}
          </div>

          <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#8b8681] text-2xl text-center tracking-[0] leading-[normal]">
            Choose a color that fits your flow.
          </p>
        </div>
      </section>

      <section className="min-h-[640px] items-center gap-4 p-20 w-full flex overflow-x-auto">
        {featureCards.map((card, index) => (
          <div
            key={index}
            className={`min-w-[1080px] h-[480px] items-center justify-center gap-4 rounded-3xl overflow-hidden ${card.gradient} flex translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              { "--animation-delay": `${index * 200}ms` } as React.CSSProperties
            }
          >
            <div className="flex-col max-w-[920px] items-start justify-center gap-[42px] px-20 py-0 flex-1 flex">
              <div className="flex-col items-start gap-6 w-full flex">
                <p className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-colorsgrey-400 text-[32px] tracking-[0] leading-[42px]">
                  {card.text}
                </p>
              </div>
            </div>

            <img
              className="flex-1 h-[480px] rounded-3xl object-cover"
              alt="Feature detail"
              src={card.image}
            />
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center gap-20 pt-20 pb-40 px-0 w-full">
        <div className="flex flex-col max-w-[860px] items-start gap-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#51483e] text-[56px] text-center tracking-[0] leading-[normal]">
            Every Detail Matters
          </h2>

          <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#8b8681] text-2xl text-center tracking-[0] leading-[normal]">
            From the stitch to the signal, precision lives here.
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="flex items-center gap-4 px-20 py-0">
            {detailImages.map((image, index) => (
              <img
                key={index}
                className="w-[386px] h-[386px] rounded-[26.62px] object-cover transition-transform hover:scale-105"
                alt={`Headphone detail ${index + 1}`}
                src={image}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      <section className="flex-col min-h-[894px] items-center gap-4 pt-20 pb-0 px-0 w-full [background:url(https://c.animaapp.com/mgjq4pouROb7EA/img/feature-image.png)_50%_50%_/_cover] flex">
        <div className="flex-col max-w-[920px] items-center justify-center gap-6 w-full flex translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="flex flex-col items-start w-full">
            <h2 className="self-stretch mt-[-1.00px] text-white text-[86px] text-center leading-[120px] [font-family:'Poppins',Helvetica] font-semibold tracking-[0]">
              Dreamlike Sound
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            <p className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal]">
              Starting at $320 — Available Now.
            </p>

            <Button className="px-8 py-2.5 h-auto bg-neutral-100 rounded-3xl border-[none] inline-flex items-center justify-center gap-2.5 before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(180deg,rgba(139,135,130,1)_0%,rgba(210,205,198,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-transform hover:scale-105">
              <span className="text-black w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]">
                Buy Now
              </span>
            </Button>
          </div>
        </div>
      </section>

      <footer className="flex flex-col w-full max-w-[1280px] items-center gap-[42px] pt-20 pb-0 px-0 bg-transparent bg-[linear-gradient(180deg,rgba(245,245,245,1)_0%,rgba(210,205,198,1)_100%)]">
        <div className="flex flex-col gap-8 w-full items-center">
          <div className="flex flex-col max-w-[860px] items-start gap-4 w-full">
            <h2 className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#51483e] text-[42px] text-center tracking-[0] leading-[normal]">
              Sound. Presence. Purpose.
            </h2>

            <p className="self-stretch text-[#8b8681] text-xl text-center leading-[normal] [font-family:'Poppins',Helvetica] font-normal tracking-[0]">
              Focused on crafting immersive audio experiences. <br />
              We believe sound should not just be heard—it should move you.
            </p>
          </div>

          <div className="inline-flex items-center gap-4">
            {footerProducts.map((product, index) => (
              <Button
                key={index}
                className="px-8 py-2.5 h-auto bg-neutral-100 rounded-3xl border-[none] inline-flex items-center justify-center gap-2.5 before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(180deg,rgba(139,135,130,1)_0%,rgba(210,205,198,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-transform hover:scale-105"
              >
                <span className="text-black w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]">
                  {product.label}
                </span>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[42px_42px] px-20 py-4 w-full border-t [border-top-style:solid] border-[#8b8782]">
          <div className="inline-flex items-center gap-[2.2px]">
            <img
              className="w-[26px] h-[26px]"
              alt="Waveform"
              src="https://c.animaapp.com/mgjq4pouROb7EA/img/waveform.svg"
            />

            <div className="w-fit text-[#51483e] text-[19.6px] leading-[19.6px] whitespace-nowrap [font-family:'Poppins',Helvetica] font-semibold tracking-[0]">
              Resonance
            </div>
          </div>

          <div className="inline-flex gap-4 items-center">
            <p className="flex-1 mt-[-1.00px] text-[#51483e] text-base text-right leading-[50px] [font-family:'Poppins',Helvetica] font-normal tracking-[0]">
              © 2025 Resonance. All rights reserved.
            </p>

            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className="transition-opacity hover:opacity-70"
                aria-label={icon.alt}
              >
                <img
                  className="w-[26px] h-[26px]"
                  alt={icon.alt}
                  src={icon.src}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
