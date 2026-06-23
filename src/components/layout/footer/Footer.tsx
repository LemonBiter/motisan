import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const aboutLinks = [
  { label: "Our Team", href: "/about-us" },
  { label: "How It Works", href: "/services" },
  { label: "Accessibility", href: "/about-us", jumpBanned: true },
  { label: "Career", href: "/contact", jumpBanned: true },
];

const supportLinks = [
  { label: "FAQs", href: "", jumpBanned: true },
  { label: "Terms & Conditions", href: "/contact", jumpBanned: true },
  { label: "Privacy Policy", href: "/contact", jumpBanned: true },
];

const contactItems = [
  {
    icon: Phone,
    text: "1800MOTISAN (1800 668 472)",
    href: "tel:1800668472",
  },
  {
    icon: Mail,
    text: "sales@motisan.com.au",
    href: "mailto:sales@motisan.com.au",
  },
  {
    icon: MapPin,
    text: "66 Export Drive, East Arm, NT 0822",
    href: "https://www.google.com/maps/search/?api=1&query=66%20Export%20Drive%2C%20East%20Arm%2C%20NT%200822",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <section className="border-y border-gray-200 bg-[#f5f7fb]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00347d]">
              Visit Motisan
            </p>
            <h2 className="mt-4 max-w-[520px] text-4xl font-black leading-tight text-[#06183a] lg:text-5xl">
              Find us in East Arm, Northern Territory.
            </h2>
            <p className="mt-5 max-w-[560px] leading-8 text-slate-600">
              Contact our team for product advice, quotations and project
              support for insulated panel access solutions.
            </p>

            <div className="mt-8 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="flex items-center gap-4 rounded-[5px] border border-gray-200 bg-white p-4 font-semibold text-[#06183a] transition hover:border-[#00347d]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-[#eef3fa] text-[#00347d]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>{item.text}</span>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-[5px] bg-[#c10230] px-7 py-4 font-semibold text-white transition hover:bg-[#a90028]"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[5px] border border-gray-200 bg-white shadow-[0_18px_60px_rgba(6,24,58,0.08)]">
            <iframe
              title="Motisan location map"
              src="https://www.google.com/maps?q=66%20Export%20Drive%2C%20East%20Arm%2C%20NT%200822&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0 lg:h-full lg:min-h-[460px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#001f4d] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.7fr_0.7fr_0.7fr_1.15fr]">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/logo/logo.svg"
                  alt="Motisan"
                  width={220}
                  height={55}
                  className="brightness-0 invert"
                />
              </Link>
              <p className="mt-5 max-w-[340px] leading-7 text-white/75">
                We provide high performance access solutions for insulated panel
                systems.
              </p>

              <div className="mt-7 flex gap-3">
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white hover:text-[#001f4d]"
                >
                  <span className="text-xs font-bold">in</span>
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white hover:text-[#001f4d]"
                >
                  <span className="text-sm font-bold">f</span>
                </Link>
                <Link
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white hover:text-[#001f4d]"
                >
                  <span className="text-xs font-bold">▶</span>
                </Link>
              </div>
            </div>

            <FooterColumn title="Quick Links" links={quickLinks} />
            <FooterColumn title="About Us" links={aboutLinks} />
            <FooterColumn title="Support" links={supportLinks} />

            <div>
              <h3 className="font-bold text-white">Company Info</h3>
              <div className="mt-5 space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.text}
                      href={item.href}
                      className="flex items-start gap-3 text-sm leading-6 text-white/75 transition hover:text-white"
                    >
                      <Icon className="mt-1 h-4 w-4 shrink-0 text-white" />
                      <span>{item.text}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-7 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>Copyright © 2024 Motisan</p>
            <p>Powered by Motisan</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; jumpBanned?: boolean }[];
  jumpBanned?: boolean;
}) {
  return (
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <div className="mt-5 space-y-3">
        {links.map((link) => {
          if (link.jumpBanned) {
            return (
              <p
                key={link.label}
                className="block text-sm text-white/75 transition hover:text-white"
              >
                {link.label}
              </p>
            );
          }
          return (
            <Link
              key={link.label}
              href={link.href}
              className="block text-sm text-white/75 transition hover:text-white"
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
