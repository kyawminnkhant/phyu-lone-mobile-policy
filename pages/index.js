import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Privacy Policy for Phyu Lone Mobile

Last Updated: September 9, 2023

1. Introduction

Welcome to Phyu Lone Mobile ("us," "we," or "our"). At Phyu Lone Mobile, we respect your privacy and are committed to protecting your personal information. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information. By using our mobile application (the "App"), you consent to the practices described in this Privacy Policy.

2. Information We Collect

2.1 Information You Provide: We may collect information that you provide directly to us when you use the App. This may include, but is not limited to:

    Information you provide during the campaign sign-up process.
    Currency conversion data, such as the currencies you input.

2.2 Automatically Collected Information: When you use the App, we may automatically collect certain information about your device, including:

    Device information (e.g., device model, operating system version).
    Usage data (e.g., app interactions, features accessed).

3. How We Use Your Information

We may use the information we collect for various purposes, including:

    To provide, maintain, and improve the App.
    To process campaign sign-ups and track eligibility.
    To facilitate currency conversions and display relevant information.
    To respond to your requests, comments, or questions.
    To comply with legal obligations and resolve disputes.

4. Data Sharing and Disclosure

We do not sell your personal information. However, we may share your information with third parties in the following circumstances:

    With your consent.
    To comply with legal obligations.
    To protect our rights, privacy, safety, or property.
    In connection with a merger, sale, or transfer of assets.

5. Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is entirely secure.

6. Changes to this Privacy Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly. We encourage you to review this Privacy Policy periodically to stay informed about our data practices.

7. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at kyawminnkhant.dev@gmail.com.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
