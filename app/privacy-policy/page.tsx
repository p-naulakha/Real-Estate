import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Head>
        <title>Privacy Policy | Guruji Real Estate</title>
        <meta name="description" content="Learn about Guruji Real Estate's privacy policy and how we protect your personal information." />
      </Head>
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Guruji Real Estate is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>We collect personal information you provide when contacting us or using our services.</li>
        <li>Your information is used solely for communication and service delivery purposes.</li>
        <li>We do not sell, trade, or share your personal data with third parties except as required by law.</li>
        <li>Our website may use cookies to enhance user experience and analyze site traffic.</li>
        <li>We implement security measures to protect your data from unauthorized access.</li>
        <li>By using our website, you consent to our privacy policy.</li>
      </ul>
      <p>If you have any questions about our privacy practices, please contact us at Gurujirealestate005@gmail.com.</p>
    </div>
  );
}
