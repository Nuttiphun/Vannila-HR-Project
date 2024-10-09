import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];

  return (
    <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col gap-12 sm:order-8 md:order-8">
      <div className="flex flex-col text-left basis-1/2">
        <div className="text-Display-2 text-center font-bold text-Sherbet whitespace-pre-wrap mb-2 ml-6">
          <span className="sm:block">{`คำถามที่พบบ่อย`}</span>
        </div>
      </div>

      <ul className="basis-1/2">
        {faqs.map((faq, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left
                border-t md:text-lg border-base-content/10"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="flex-1 text-base-content">{faq.question}</span>
              <svg
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200 ${
                activeIndex === index ? "rotate-45" : "" }`}
              >
                <rect y="7" width="16" height="2" rx="1"></rect>
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="rotate-90"
                ></rect>
              </svg>
            </button>

            <div
              className="transition-all duration-300 ease-in-out overflow-hidden"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
