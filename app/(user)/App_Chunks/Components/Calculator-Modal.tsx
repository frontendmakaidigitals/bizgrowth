import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
const CalculatorModal = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [direction, setDirection] = useState(1);
  const [submitting, setIsSubmitting] = useState(false);
  const totalQuestions = 9;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const progress = (currentQuestion / totalQuestions) * 100;

  const handleAnswer = (questionId: number, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const router = useRouter();

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const payload = {
      name: answers[8],
      email: answers[9],
      emirate: answers[1],
      setupType: answers[2],
      businessActivity: answers[3],
      shareholders: answers[4],
      employees: answers[5],
      officeType: answers[6],
      services: answers[7],
    };

    try {
      const response = await fetch("/api/cost-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      router.push("/form-submitted");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const directionRef = useRef(1);

  const goNext = () => {
    if (currentQuestion === totalQuestions) {
      handleSubmit();
    } else {
      directionRef.current = 1;
      setDirection(1);
      setCurrentQuestion((q) => q + 1);
    }
  };

  const goBack = () => {
    directionRef.current = -1;
    setDirection(-1);
    setCurrentQuestion((q) => q - 1);
  };

  const canProceed =
    answers[currentQuestion] !== undefined &&
    (currentQuestion !== 7 ||
      (Array.isArray(answers[currentQuestion]) &&
        answers[currentQuestion].length >= 0)) &&
    (currentQuestion !== 8 ||
      (typeof answers[currentQuestion] === "string" &&
        answers[currentQuestion].trim().length > 3)) &&
    (currentQuestion !== 9 ||
      (typeof answers[currentQuestion] === "string" &&
        answers[currentQuestion].trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers[currentQuestion])));
  const handleClose = () => {
    const hasAnswers = Object.keys(answers).length > 0;

    if (hasAnswers) {
      const confirmed = window.confirm(
        "You have already entered some details. If you close now, all your data will be erased. Are you sure you want to continue?"
      );

      if (!confirmed) return;
    }

    onClose();
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 w-screen h-[100dvh] lg:h-screen min-h-[600px] bg-slate-900/40 backdrop-blur-xl z-[9999999] lg:py-8"
      >
        {/* Header */}
        <div className="flex justify-between relative items-start lg:grid lg:grid-cols-2 max-w-5xl mx-auto  h-full flex-col bg-white rounded-lg lg:gap-6 p-6">
          <div className="bg-indigo-500 hidden lg:block relative rounded-lg overflow-hidden h-full">
            <img
              src={
                "https://images.unsplash.com/photo-1503899673422-e27bb543e9c6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="w-full h-full absolute inset-0 object-cover opacity-[.2]"
            />
            <div className="relative z-10 p-7">
              <div className="bg-slate-50 w-fit rounded p-2 mb-5">
                <Logo />
              </div>
              <h2 className="text-4xl font-semibold font-Synonym text-slate-100">
                Set Up Your Business with Confidence
              </h2>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Answer a few simple questions and we’ll guide you through the
                best setup options for your business, tailored to your goals and
                requirements. From choosing the right location to understanding
                licenses and structures, we simplify every step so you can move
                forward with clarity and confidence.
              </p>

              <p className="text-slate-200 mt-6 mb-5 text-sm">
                Need more help?
              </p>

              <button className="bg-white text-slate-900 py-3 w-full rounded-lg font-medium hover:bg-slate-100 transition shadow-sm">
                Contact Us
              </button>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex justify-between items-center">
              <button
                onClick={goBack}
                disabled={currentQuestion === 1}
                className="disabled:opacity-30"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleClose}
                className="hover:bg-slate-200 p-2 rounded"
              >
                <X />
              </button>
            </div>

            {/* Question Counter */}
            <div className="mt-7">
              <h1 className="font-[400] rounded-lg">Question</h1>
              <div className="space-y-7">
                <p className="text-2xl">
                  <span className="text-green-500">{currentQuestion}</span>/
                  {totalQuestions}
                </p>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Questions */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentQuestion}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={{
                  enter: (direction: number) => ({
                    x: direction === 1 ? 100 : -100,
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                  },
                  exit: () => ({
                    x: -directionRef.current * 100,
                    opacity: 0,
                  }),
                }}
                transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.1] }}
              >
                {currentQuestion === 1 && (
                  <QuestionONE
                    selectedAnswer={answers[1]}
                    onAnswer={(answer) => handleAnswer(1, answer)}
                    direction={direction}
                  />
                )}
                {currentQuestion === 2 && (
                  <QuestionTWO
                    selectedAnswer={answers[2]}
                    onAnswer={(answer) => handleAnswer(2, answer)}
                    direction={direction}
                  />
                )}
                {currentQuestion === 3 && (
                  <QuestionTHREE
                    selectedAnswer={answers[3]}
                    onAnswer={(answer) => handleAnswer(3, answer)}
                    direction={direction}
                  />
                )}
                {currentQuestion === 4 && (
                  <QuestionFOUR
                    selectedAnswer={answers[4]}
                    onAnswer={(answer) => handleAnswer(4, answer)}
                    direction={direction}
                  />
                )}
                {currentQuestion === 5 && (
                  <QuestionFIVE
                    selectedAnswer={answers[5]}
                    onAnswer={(answer) => handleAnswer(5, answer)}
                    direction={direction}
                  />
                )}
                {currentQuestion === 6 && (
                  <QuestionSIX
                    selectedAnswer={answers[6]}
                    onAnswer={(answer) => handleAnswer(6, answer)}
                    direction={direction}
                  />
                )}
                {currentQuestion === 7 && (
                  <QuestionSEVEN
                    selectedAnswers={answers[7] || []}
                    onAnswer={(answer) => handleAnswer(7, answer)}
                    direction={direction}
                  />
                )}
                {currentQuestion === 8 && (
                  <QuestionEight
                    selectedAnswer={answers[8]}
                    onAnswer={(answer) => handleAnswer(8, answer)}
                    direction={direction}
                  />
                )}
                {currentQuestion === 9 && (
                  <QuestionNine
                    selectedAnswer={answers[9]}
                    onAnswer={(answer) => handleAnswer(9, answer)}
                    direction={direction}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="absolute max-w-lg bottom-0 left-0 lg:right-0 lg:bottom-3 lg:left-auto z-[9999999] w-full p-4">
            <button
              onClick={goNext}
              disabled={!canProceed || submitting}
              className="w-full text-lg text-slate-950 font-[600] py-3 flex justify-center bg-green-400 rounded-xl disabled:bg-green-400/30 disabled:text-slate-400 disabled:cursor-not-allowed"
            >
              {currentQuestion === totalQuestions ? "Submit" : "Next"}
            </button>{" "}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

type SingleQuestionProps = {
  selectedAnswer?: string;
  onAnswer: (answer: string) => void;
  direction: number;
};

type MultiQuestionProps = {
  selectedAnswers?: string[];
  onAnswer: (answers: string[]) => void;
  direction: number;
};

const QuestionONE: React.FC<SingleQuestionProps> = ({
  selectedAnswer,
  onAnswer,
  direction,
}) => {
  const answers = ["Dubai", "Sharjah", "Ajman", "Umm Al Quwain"];
  const letters = ["A", "B", "C", "D", "E", "F"];
  const colors = [
    "bg-orange-500/40",
    "bg-blue-500/40",
    "bg-yellow-500/40",
    "bg-indigo-500/40",
  ];
  const headingVariants = {
    enter: (direction: number) => ({
      x: direction * 30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 30,
      opacity: 0,
    }),
  };

  const listVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {},
  };

  const listItemVariants = {
    enter: (direction: number) => ({
      x: direction * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 40,
      opacity: 0,
    }),
  };

  return (
    <div className="mt-8">
      <div>
        <motion.h1
          custom={direction}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.1] }}
          className="text-xl lg:max-w-xl bg-green-400/30 leading-tight font-[600] p-5 border border-green-400 rounded-xl"
        >
          Which Emirate do you want to set up your business in?
        </motion.h1>
        <motion.ul
          variants={listVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-7 space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-4 lg:max-w-3xl"
        >
          {answers.map((answer, index) => (
            <motion.li
              key={index}
              custom={direction}
              variants={listItemVariants}
              transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.1] }}
            >
              <button
                onClick={() => onAnswer(answer)}
                className={` border flex items-center gap-2  rounded-xl w-full text-start p-4 transition-colors ${
                  selectedAnswer == answer
                    ? "bg-green-300/20 border-green-300"
                    : "bg-stone-100/50 border-slate-500/20"
                }`}
              >
                <p
                  className={`lowercase flex justify-center text-sm items-center !size-6 rounded-full ${colors[index]}`}
                >
                  {letters[index]}
                </p>
                {answer}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

const QuestionTWO: React.FC<SingleQuestionProps> = ({
  selectedAnswer,
  onAnswer,
  direction,
}) => {
  const answers = ["Mainland", "Free Zone", "Offshore"];
  const letters = ["A", "B", "C"];
  const colors = ["bg-orange-500/40", "bg-blue-500/40", "bg-yellow-500/40"];
  const headingVariants = {
    enter: (direction: number) => ({
      x: direction * 30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 30,
      opacity: 0,
    }),
  };

  const listVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {},
  };

  const listItemVariants = {
    enter: (direction: number) => ({
      x: direction * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 40,
      opacity: 0,
    }),
  };
  return (
    <div className="mt-8">
      <div>
        <motion.h1
          custom={direction}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.1] }}
          className="text-xl lg:max-w-xl bg-green-400/30 leading-tight font-[600] p-5 border border-green-400 rounded-xl"
        >
          👉 Choose your business jurisdiction
        </motion.h1>
        <motion.ul
          variants={listVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-7 space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-4 lg:max-w-3xl"
        >
          {answers.map((answer, index) => (
            <motion.li
              custom={direction}
              variants={listItemVariants}
              transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.1] }}
              key={index}
            >
              <button
                onClick={() => onAnswer(answer)}
                className={` border flex items-center gap-2  rounded-xl w-full text-start p-4 transition-colors ${
                  selectedAnswer === answer
                    ? "bg-green-300/20 border-green-300"
                    : "bg-stone-100/50 border-slate-500/20"
                }`}
              >
                <p
                  className={`lowercase flex justify-center text-sm items-center !size-6 rounded-full ${colors[index]}`}
                >
                  {letters[index]}
                </p>
                {answer}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

const QuestionTHREE: React.FC<SingleQuestionProps> = ({
  selectedAnswer,
  onAnswer,
  direction,
}) => {
  const answers = [
    "Trading",
    "Consultancy",
    "Professional Services",
    "E-commerce",
    "Media & Marketing",
    "Industrial / Manufacturing",
    "Other",
  ];
  const letters = ["A", "B", "C", "D", "E", "F", "G"];
  const colors = [
    "bg-orange-500/40",
    "bg-blue-500/40",
    "bg-yellow-500/40",
    "bg-purple-500/40",
    "bg-pink-500/40",
    "bg-indigo-500/40",
    "bg-green-500/40",
  ];
  const headingVariants = {
    enter: (direction: number) => ({
      x: direction * 30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 30,
      opacity: 0,
    }),
  };

  const listVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {},
  };

  const listItemVariants = {
    enter: (direction: number) => ({
      x: direction * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 40,
      opacity: 0,
    }),
  };
  return (
    <div className="mt-8">
      <div>
        <motion.h1
          custom={direction}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.1] }}
          className="text-xl lg:max-w-xl bg-green-400/30 leading-tight font-[600] p-5 border border-green-400 rounded-xl"
        >
          What is your business activity?
        </motion.h1>
        <motion.ul
          variants={listVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-7 h-[55dvh] lg:h-auto space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-4 lg:max-w-3xl"
        >
          {answers.map((answer, index) => (
            <motion.li
              key={index}
              custom={direction}
              variants={listItemVariants}
              transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.1] }}
            >
              <button
                onClick={() => onAnswer(answer)}
                className={` border flex items-center gap-2 rounded-xl w-full text-start p-4 transition-colors ${
                  selectedAnswer === answer
                    ? "bg-green-300/20 border-green-300"
                    : "bg-stone-100/50 border-slate-500/20"
                }`}
              >
                <p
                  className={`lowercase flex justify-center text-sm items-center !size-6 rounded-full ${colors[index]}`}
                >
                  {letters[index]}
                </p>
                {answer}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

const QuestionFOUR: React.FC<SingleQuestionProps> = ({
  selectedAnswer,
  onAnswer,
  direction,
}) => {
  const answers = ["1", "2", "3+"];
  const letters = ["A", "B", "C"];
  const colors = ["bg-orange-500/40", "bg-blue-500/40", "bg-yellow-500/40"];
  const headingVariants = {
    enter: (direction: number) => ({
      x: direction * 30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 30,
      opacity: 0,
    }),
  };

  const listVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {},
  };

  const listItemVariants = {
    enter: (direction: number) => ({
      x: direction * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 40,
      opacity: 0,
    }),
  };
  return (
    <div className="mt-8">
      <div>
        <motion.h1
          custom={direction}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.1] }}
          className="text-xl lg:max-w-xl bg-green-400/30 leading-tight font-[600] p-5 border border-green-400 rounded-xl"
        >
          👉 How many shareholders will the company have?
        </motion.h1>
        <motion.ul
          variants={listVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-7 h-[55dvh] lg:h-auto space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-4 lg:max-w-3xl"
        >
          {answers.map((answer, index) => (
            <motion.li
              key={index}
              custom={direction}
              variants={listItemVariants}
              transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.1] }}
            >
              <button
                onClick={() => onAnswer(answer)}
                className={` border flex items-center gap-2 rounded-xl w-full text-start p-4 transition-colors ${
                  selectedAnswer === answer
                    ? "bg-green-300/20 border-green-300"
                    : "bg-stone-100/50 border-slate-500/20"
                }`}
              >
                <p
                  className={`lowercase flex justify-center text-sm items-center !size-6 rounded-full ${colors[index]}`}
                >
                  {letters[index]}
                </p>
                {answer}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

const QuestionFIVE: React.FC<SingleQuestionProps> = ({
  selectedAnswer,
  onAnswer,
  direction,
}) => {
  const answers = ["0", "1", "2", "3", "4+"];
  const letters = ["A", "B", "C", "D", "E"];
  const colors = [
    "bg-orange-500/40",
    "bg-blue-500/40",
    "bg-yellow-500/40",
    "bg-purple-500/40",
    "bg-pink-500/40",
  ];

  const headingVariants = {
    enter: (direction: number) => ({
      x: direction * 30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 30,
      opacity: 0,
    }),
  };

  const listVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {},
  };

  const listItemVariants = {
    enter: (direction: number) => ({
      x: direction * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 40,
      opacity: 0,
    }),
  };

  return (
    <div className="mt-8">
      <div>
        <motion.h1
          custom={direction}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.1] }}
          className="text-xl lg:max-w-xl bg-green-400/30 leading-tight font-[600] p-5 border border-green-400 rounded-xl"
        >
          👉 How many visas do you need?
        </motion.h1>
        <motion.ul
          variants={listVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-7 space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-4 lg:max-w-3xl"
        >
          {answers.map((answer, index) => (
            <motion.li
              key={index}
              custom={direction}
              variants={listItemVariants}
              transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.1] }}
            >
              <button
                onClick={() => onAnswer(answer)}
                className={` border flex items-center gap-2 rounded-xl w-full text-start p-4 transition-colors ${
                  selectedAnswer === answer
                    ? "bg-green-300/20 border-green-300"
                    : "bg-stone-100/50 border-slate-500/20"
                }`}
              >
                <p
                  className={`lowercase flex justify-center text-sm items-center !size-6 rounded-full ${colors[index]}`}
                >
                  {letters[index]}
                </p>
                {answer}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

const QuestionSIX: React.FC<SingleQuestionProps> = ({
  selectedAnswer,
  onAnswer,
  direction,
}) => {
  const answers = [
    "No office",
    "Flexi Desk",
    "Shared Office",
    "Private Office",
  ];
  const letters = ["A", "B", "C", "D"];
  const colors = [
    "bg-orange-500/40",
    "bg-blue-500/40",
    "bg-yellow-500/40",
    "bg-purple-500/40",
  ];
  const headingVariants = {
    enter: (direction: number) => ({
      x: direction * 30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 30,
      opacity: 0,
    }),
  };

  const listVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {},
  };

  const listItemVariants = {
    enter: (direction: number) => ({
      x: direction * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 40,
      opacity: 0,
    }),
  };
  return (
    <div className="mt-8">
      <div>
        <motion.h1
          custom={direction}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="text-xl lg:max-w-xl bg-green-400/30 leading-tight font-[600] p-5 border border-green-400 rounded-xl"
        >
          👉 Do you need an office or workspace?
        </motion.h1>
        <motion.ul
          variants={listVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-7 space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-4 lg:max-w-3xl"
        >
          {answers.map((answer, index) => (
            <motion.li
              key={index}
              custom={direction}
              variants={listItemVariants}
            >
              <button
                onClick={() => onAnswer(answer)}
                className={` border flex items-center gap-2 rounded-xl w-full text-start p-4 transition-colors ${
                  selectedAnswer === answer
                    ? "bg-green-300/20 border-green-300"
                    : "bg-stone-100/50 border-slate-500/20"
                }`}
              >
                <p
                  className={`lowercase flex justify-center text-sm items-center !size-6 rounded-full ${colors[index]}`}
                >
                  {letters[index]}
                </p>
                {answer}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

const QuestionSEVEN: React.FC<MultiQuestionProps> = ({
  selectedAnswers = [],
  onAnswer,
  direction,
}) => {
  const answers = [
    "Bank Account Assistance",
    "VAT Registration",
    "Corporate Tax Registration",
    "Accounting & Bookkeeping",
    "Trademark Registration",
    "PRO Services",
  ];
  const letters = ["A", "B", "C", "D", "E", "F"];
  const colors = [
    "bg-orange-500/40",
    "bg-blue-500/40",
    "bg-yellow-500/40",
    "bg-purple-500/40",
    "bg-pink-500/40",
    "bg-indigo-500/40",
  ];

  const toggleAnswer = (answer: string) => {
    const newAnswers = selectedAnswers.includes(answer)
      ? selectedAnswers.filter((a) => a !== answer)
      : [...selectedAnswers, answer];
    onAnswer(newAnswers.length > 0 ? newAnswers : []);
  };

  const headingVariants = {
    enter: (direction: number) => ({
      x: direction * 30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 30,
      opacity: 0,
    }),
  };

  const listVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {},
  };

  const listItemVariants = {
    enter: (direction: number) => ({
      x: direction * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 40,
      opacity: 0,
    }),
  };

  return (
    <div className="mt-8">
      <div>
        <motion.h1
          custom={direction}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.1] }}
          className="text-xl lg:max-w-xl bg-green-400/30 leading-tight font-[600] p-5 border border-green-400 rounded-xl"
        >
          Select additional services (optional)
        </motion.h1>
        <p className="text-sm text-gray-600 mt-3">
          You can select multiple options
        </p>
        <motion.ul
          variants={listVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-7 space-y-5 h-[48dvh] lg:h-auto lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-4 lg:max-w-3xl"
        >
          {answers.map((answer, index) => (
            <motion.li
              key={index}
              custom={direction}
              variants={listItemVariants}
              transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.1] }}
            >
              <button
                onClick={() => toggleAnswer(answer)}
                className={` border flex items-center gap-2  rounded-xl w-full text-start p-4 transition-colors ${
                  selectedAnswers.includes(answer)
                    ? "bg-green-300/20 border-green-300"
                    : "bg-stone-100/50 border-slate-500/20"
                }`}
              >
                <p
                  className={`lowercase flex justify-center text-sm items-center !size-6 rounded-full ${colors[index]}`}
                >
                  {letters[index]}
                </p>
                {answer}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

const QuestionEight: React.FC<SingleQuestionProps> = ({
  selectedAnswer,
  onAnswer,
  direction,
}) => {
  const headingVariants = {
    enter: (direction: number) => ({
      x: direction * 30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 30,
      opacity: 0,
    }),
  };

  const listVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {},
  };

  const listItemVariants = {
    enter: (direction: number) => ({
      x: direction * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 40,
      opacity: 0,
    }),
  };

  return (
    <div className="mt-8">
      <div>
        <motion.h1
          custom={direction}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.1] }}
          className="text-xl lg:max-w-xl bg-green-400/30 leading-tight font-[600] p-5 border border-green-400 rounded-xl"
        >
          Please Enter your Name <span className="text-red-500">*</span>
        </motion.h1>
        <motion.ul
          variants={listVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-7 space-y-5 lg:space-y-0 lg:gap-4 "
        >
          <motion.li
            custom={direction}
            variants={listItemVariants}
            transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.1] }}
            className="!w-full min-w-full"
          >
            <Input
              value={selectedAnswer || ""}
              onChange={(e) => onAnswer(e.target.value)}
              required
              className={`bg-stone-100/50 !h-12 border shadow-none border-slate-500/20 rounded-xl !w-full text-start transition-colors `}
              placeholder="Full name"
            />
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

const QuestionNine: React.FC<SingleQuestionProps> = ({
  selectedAnswer,
  onAnswer,
  direction,
}) => {
  const headingVariants = {
    enter: (direction: number) => ({
      x: direction * 30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 30,
      opacity: 0,
    }),
  };

  const listVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {},
  };

  const listItemVariants = {
    enter: (direction: number) => ({
      x: direction * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -direction * 40,
      opacity: 0,
    }),
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="mt-8">
      <div>
        <motion.h1
          custom={direction}
          variants={headingVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.1] }}
          className="text-xl lg:max-w-xl bg-green-400/30 leading-tight font-[600] p-5 border border-green-400 rounded-xl"
        >
          Please Enter your Email <span className="text-red-500">*</span>
        </motion.h1>
        <motion.ul
          variants={listVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-7 space-y-5  lg:space-y-0 lg:gap-4 lg:max-w-3xl"
        >
          <motion.li
            custom={direction}
            variants={listItemVariants}
            transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.1] }}
          >
            <Input
              type="email"
              value={selectedAnswer || ""}
              onChange={(e) => onAnswer(e.target.value)}
              required
              className={`bg-stone-100/50 !h-12 border shadow-none border-slate-500/20 rounded-xl w-full text-start transition-colors `}
              placeholder="Email"
            />
            {selectedAnswer && !isValidEmail(selectedAnswer) && (
              <p className="text-red-500 text-sm mt-2">
                Please enter a valid email address
              </p>
            )}
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};
export default CalculatorModal;
