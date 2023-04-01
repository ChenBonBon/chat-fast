import Head from "next/head";

export default function GlobalHead() {
  return (
    <Head>
      <title>ChatFast - Create GPT chatbot from your own data</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Create an AI Chatbot and train it with your data"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
