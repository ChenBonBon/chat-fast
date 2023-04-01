import classNames from "classnames";
import LinkButton from "./components/LinkButton";
import { default as VStack, default as VStark } from "./components/VStack";

const RainbowBackground = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "bg-black-800 w-full flex flex-col items-center",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)",
      }}
    >
      {children}
    </div>
  );
};

const WorkDescription = ({ image, title, description }) => {
  return (
    <VStack>
      <div className="flex items-center justify-center rounded-full mb-10">
        {image}
      </div>
      <h2 className="font-heading text-xl font-bold text-gray-700">{title}</h2>
      <p className="text-center text-gray-600">{description}</p>
    </VStack>
  );
};

const QuestionAndAnswer = ({ question, answer }) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="font-heading font-bold text-base">{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="pt-40">
        <div className="px-4 py-20 flex flex-col items-center text-center">
          <h2 className="text-6xl font-heading font-semibold">
            Create an AI Chatbot in minutes:
            <br />
            <span className="text-brand-500">Train with your own data</span>
          </h2>
          <div className="mt-14 flex max-w-2xl">
            <p className="text-gray-500 text-lg font-body">
              Upload files or submit website url, a GPT Chatbot will be built
              for you that can answer any questions about your data and can be
              embedded on your website.
            </p>
          </div>
          <div className="mt-14">
            <LinkButton type="danger" href="/chatbots/all" className="text-lg">
              Let's build - It's free
            </LinkButton>
          </div>
          <RainbowBackground className="mt-14 p-20">
            <video
              controls
              autoPlay
              loop
              muted
              className="relative left-0 top-0"
              style={{
                borderRadius: 20,
                borderColor: "gray",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                maxHeight: 600,
              }}
            >
              <source src="/demo-chatfast.mp4" type="video/mp4" />
            </video>
          </RainbowBackground>
        </div>
      </div>
      <div>
        <div className="px-4 py-20 max-w-7xl w-full">
          <div className="w-full my-0 mx-auto flex flex-col max-w-3xl text-center">
            <h2 className="text-4xl font-heading font-bold">How It Works</h2>
          </div>
        </div>
      </div>
      <div className="px-4 py-20">
        <div className="grid grid-cols-3 gap-40">
          <WorkDescription
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
                className="w-20 h-20"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M9 17h6"></path>
                <path d="M9 13h6"></path>
              </svg>
            }
            title="Upload files"
            description="Select documents or provide the text you want to train AI chatbot."
          />
          <WorkDescription
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-20 h-20"
                focusable="false"
              >
                <path d="M4 7v-1a2 2 0 0 1 2 -2h2"></path>
                <path d="M4 17v1a2 2 0 0 0 2 2h2"></path>
                <path d="M16 4h2a2 2 0 0 1 2 2v1"></path>
                <path d="M16 20h2a2 2 0 0 0 2 -2v-1"></path>
                <path d="M5 12l14 0"></path>
              </svg>
            }
            title="Data Are Processed"
            description="Text is extracted and analyzed so that your chatbot can accurately pick up the information."
          />
          <WorkDescription
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-20 h-20"
                focusable="false"
              >
                <path d="M3 12l3 0"></path>
                <path d="M12 3l0 3"></path>
                <path d="M7.8 7.8l-2.2 -2.2"></path>
                <path d="M16.2 7.8l2.2 -2.2"></path>
                <path d="M7.8 16.2l-2.2 2.2"></path>
                <path d="M12 12l9 3l-4 2l-2 4l-3 -9"></path>
              </svg>
            }
            title="Embed On Website"
            description="Install GPT chatbot on your website to enhance user experience."
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-4 mt-40 max-w-6xl mx-auto">
        <div className="flex w-full flex-col px-4 mx-auto my-0 max-w-3xl text-center">
          <h2 className="text-4xl font-heading font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-20 mt-20">
          <QuestionAndAnswer
            question="What is ChatFast?"
            answer="ChatFast is a platform that allows you to create GPT chatbot from your own data. The created chatbot can answer any questions and can be installed on website."
          />
          <QuestionAndAnswer
            question="Does chatbot answer questions that are not included in my data?"
            answer="By default, no. Chatbot will try to find the answer from the provided data only. However, you can always change this in system prompt."
          />
          <QuestionAndAnswer
            question="What formats of data I can use?"
            answer="At the moment, ChatFast supports plain text, pdfs, website url, scanned pdfs, or even images (as long as there is text in the image). Audio files will be available soon."
          />
          <QuestionAndAnswer
            question="Can I add chatbot to my website?"
            answer="Sure, you can add the chatbot to your website easily. All you have to do is allow public access for the chatbot and include a provided script on your website."
          />
          <QuestionAndAnswer
            question="What languages does ChatFast support?"
            answer="Chatbot can understand and help in 50+ different languages. When you ask a question, it will do its best to give you an answer in the language you asked, even if the text is written in a different language."
          />
          <QuestionAndAnswer
            question="Does ChatFast have API?"
            answer="Yes, API access is currently available for paid plans. Please refer to API Reference section. If you need help contact us: support@chatfast.io"
          />
        </div>
      </div>
      <div className="py-40 px-10">
        <RainbowBackground className="rounded-2xl">
          <div className="py-24 max-w-prose">
            <VStark>
              <h2 className="text-4xl font-heading font-bold">Get In Touch</h2>
            </VStark>
            <p className="max-w-2xl text-center text-xl mt-5">
              Do not hesitate to reach out at <b>support@chatfast.io</b> for any
              questions on our plan, pricing, or need support.
            </p>
            <div className="mt-10 flex justify-center">
              <LinkButton
                type="danger"
                className="text-lg"
                href="/auth/register"
              >
                Sign up for free
              </LinkButton>
            </div>
          </div>
        </RainbowBackground>
      </div>
    </>
  );
}
