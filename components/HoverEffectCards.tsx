import { HoverEffect } from "./ui/CardHoverEffect";

export function CardHoverEffect() {
  return (
    <section className="pt-20" id="survice">
      <h1 className="heading">
        
        About Our Work
        <span className="text-purple"> Experience</span>
      </h1>
      <HoverEffect items={projects} />
    </section>
  );
}
export const projects = [
  {
    title: "Our Core Values",
    description:
      "Integrity, innovation, and customer-centricity are at the heart of our operations. We strive to foster trust and transparency in every interaction, ensuring our clients receive unparalleled service and solutions for your business.",
    link: "https://google.com",
  },
  {
    title: "Our Expertise",
    description:
      "With a team of seasoned professionals, we excel in delivering cutting-edge solutions tailored to meet the unique needs of each client. Our expertise spans various industries, ensuring comprehensive and effective support.",
    link: "https://google.com",
  },
  {
    title: "Our Commitment",
    description:
      "Dedicated to your success, we offer unwavering support and reliable solutions. Our commitment extends beyond project completion, as we prioritize long-term partnerships and continuous improvement to drive your business forward.",
    link: "https://google.com",
  },
];

