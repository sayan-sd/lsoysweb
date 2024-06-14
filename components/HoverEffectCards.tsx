import { HoverEffect } from "./ui/CardHoverEffect";

export function CardHoverEffect() {
  return (
    <section className="pt-20" id="survice">
      <h1 className="heading">
        Discover Our Range of
        <span className="text-purple"> Expert Services</span>
      </h1>
      <HoverEffect items={projects} />
    </section>
  );
}
export const projects = [
  {
    title: "Game Development",
    description:
      "Crafting immersive and engaging gaming experiences with cutting-edge technology and creative storytelling to captivate players worldwide.",
    link: "https://google.com",
  },
  {
    title: "App Development",
    description:
      "Building intuitive and robust mobile applications designed to enhance user experience, streamline operations, and drive business growth.",
    link: "https://google.com",
  },
  {
    title: "Website Development",
    description:
      "Creating dynamic and responsive websites tailored to your brand, ensuring a seamless online presence and superior user engagement.",
    link: "https://google.com",
  },
];
