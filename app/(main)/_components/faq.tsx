"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const leftFaqs: FAQ[] = [
  {
    question: "What kind of projects does Dexnive work on?",
    answer:
      "The projects can range from early-stage ideas to fully developed digital products. Some clients come with just a concept, while others have a half-built product or need improvements to an existing one.",
  },
  {
    question: "What’s the process of getting started?",
    answer:
      "We start with an initial conversation where you share your idea, challenges, and expectations. Then we help clarify the scope and align everything before development begins.",
  },
  {
    question: "Does Dexnive work with startups or established companies?",
    answer:
      "Both. We work with early-stage startups as well as established companies. Our approach adapts based on your team size, experience, and internal processes.",
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "How long does your project usually take?",
    answer:
      "Project timelines depend on scope, complexity, and requirements. Once everything is clear, we provide a detailed timeline with key milestones so you can track progress easily.",
  },
  {
    question: "Do you provide post-launch support if needed?",
    answer:
      "Yes. Launch is not the end for us. We provide ongoing support, performance monitoring, bug fixes, and continuous improvements after launch.",
  },
  {
    question: "Do we need everything figured out before reaching out?",
    answer:
      "No. Many projects start with open questions. A rough idea is enough to get started, and we’ll help you refine and shape the best solution.",
  },
];

function FaqItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-sm font-medium text-white">{faq.question}</span>
        <span
          className={`text-xl text-white transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-4 text-sm text-white/70">{faq.answer}</div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="relative overflow-hidden  py-24">


      <div className="relative mx-auto max-w-screen-2xl text-center md:w-[40%] px-4">
        <h2 className="text-center text-2xl font-bold text-white">
          Frequently Asked Questions
        </h2>
<h1 className="text-center text-3xl md:text-6xl font-bold text-white">We’re obsessed with the "Why."</h1>
        <p className=" mt-4 text-lg">
          You don’t have to believe in our promises. Here are the words of our
          clients who worked with us.
        </p>

        </div>
        <div className="mt-16 grid max-w-screen-2xl mx-auto w-[80%] gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {leftFaqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>

          <div className="space-y-4">
            {rightFaqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </div>
    </section>
  );
}
