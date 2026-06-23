import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Motisan",
  description:
    "Contact Motisan for product advice, quotations and support for insulated panel access solutions.",
};

const contactMethods = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "66 Export Drive, East Arm, NT 0822",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@motisan.com.au",
    href: "mailto:sales@motisan.com.au",
  },
  {
    icon: Phone,
    label: "Call",
    value: "1800MOTISAN (1800 668 472)",
    href: "tel:1800668472",
  },
];

const supportItems = [
  {
    icon: ShieldCheck,
    title: "Product Guidance",
    text: "Get help selecting the right door, protective film or accessory for your project.",
  },
  {
    icon: Building2,
    title: "Project Support",
    text: "Talk with our team about specifications, availability and site requirements.",
  },
  {
    icon: Clock3,
    title: "Fast Response",
    text: "Send your details and our sales team will respond as soon as possible.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-200 bg-[#f7f9fc]">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('/img/homepage-bg3.png')] bg-cover bg-center opacity-20 lg:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />

        <div className="relative mx-auto grid min-h-[360px] max-w-[1440px] items-center gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#c10230]">
              Contact Motisan
            </p>
            <h1 className="max-w-[680px] text-5xl font-black leading-[0.98] text-[#0A2A66] lg:text-7xl">
              Let&apos;s discuss your project.
            </h1>
          </div>

          <p className="max-w-[620px] text-lg leading-8 text-slate-600 lg:justify-self-end">
            Reach out for product advice, technical questions or quotations for
            insulated panel access systems. Our team will help you identify the
            best solution for your application.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
        <div>
          <h2 className="text-4xl font-black text-[#0A2A66]">Contact Us</h2>
          <p className="mt-6 max-w-[620px] text-base leading-8 text-slate-600">
            Thank you for reaching out to Motisan. Our team is committed to
            providing you with responsive service and support. If your matter is
            urgent, please call us directly.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {contactMethods.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex h-full gap-4 rounded-[5px] border border-gray-200 bg-white p-5 transition hover:border-[#0145a7] hover:shadow-[0_18px_50px_rgba(10,42,102,0.08)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eef3fa] text-[#0A2A66]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-semibold leading-6 text-slate-800">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <Link key={item.label} href={item.href}>
                  {content}
                </Link>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-900">Follow Us</h3>
            <div className="mt-5 flex gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A2A66] text-white transition hover:bg-[#0145a7]"
              >
                <span className="text-sm font-bold">f</span>
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f9fe5] text-white transition hover:bg-[#1684c0]"
              >
                <span className="text-sm font-bold">X</span>
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077b5] text-white transition hover:bg-[#005f91]"
              >
                <span className="text-sm font-bold">in</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[5px] border border-gray-200 bg-[#fafafa] p-6 shadow-[0_24px_80px_rgba(10,42,102,0.08)] lg:p-8">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#c10230]">
                Appointment
              </p>
              <h2 className="text-4xl font-black text-[#0A2A66]">
                Make an Appointment
              </h2>
            </div>
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0145a7] text-white sm:flex">
              <MessageSquareText className="h-6 w-6" />
            </div>
          </div>

          <form
            action="https://formsubmit.co/sales@motisan.com.au"
            method="post"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Motisan contact form enquiry"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#0A2A66]">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="h-12 w-full rounded-[5px] border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0145a7] focus:ring-4 focus:ring-[#0145a7]/10"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#0A2A66]">
                  Company
                </span>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="h-12 w-full rounded-[5px] border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0145a7] focus:ring-4 focus:ring-[#0145a7]/10"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#0A2A66]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-12 w-full rounded-[5px] border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0145a7] focus:ring-4 focus:ring-[#0145a7]/10"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#0A2A66]">
                  Phone
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="h-12 w-full rounded-[5px] border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0145a7] focus:ring-4 focus:ring-[#0145a7]/10"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#0A2A66]">
                Product Interest
              </span>
              <select
                name="product"
                className="h-12 w-full rounded-[5px] border border-gray-300 bg-white px-4 text-sm text-slate-600 outline-none transition focus:border-[#0145a7] focus:ring-4 focus:ring-[#0145a7]/10"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a product
                </option>
                <option>UniDoor</option>
                <option>Insulated Sectional Door</option>
                <option>Donga Door</option>
                <option>Metal Protective Film</option>
                <option>Rapid Door</option>
                <option>Other</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#0A2A66]">
                Message
              </span>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={7}
                className="w-full resize-y rounded-[5px] border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0145a7] focus:ring-4 focus:ring-[#0145a7]/10"
              />
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-[5px] bg-[#c10230] px-8 py-4 font-semibold text-white transition hover:bg-[#a90028]"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-[#f7f9fc]">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-5 py-12 md:grid-cols-3 lg:px-10">
          {supportItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[5px] bg-white p-6">
                <Icon className="h-8 w-8 text-[#0145a7]" />
                <h3 className="mt-5 text-xl font-bold text-[#0A2A66]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c10230]">
            Need product information?
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#0A2A66]">
            Browse our insulated panel access solutions.
          </h2>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-[#0145a7] px-7 py-4 font-semibold text-white transition hover:bg-[#0A2A66]"
        >
          View Products
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </main>
  );
}
