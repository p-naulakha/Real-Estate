import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Head>
        <title>Terms and Conditions | Guruji Real Estate</title>
        <meta name="description" content="Read the terms and conditions for using Guruji Real Estate services and website." />
      </Head>
      <h1 className="text-2xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4">Welcome to Guruji Real Estate. By accessing or using our website and services, you agree to the following terms and conditions:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>All property information is provided for informational purposes only and is subject to change without notice.</li>
        <li>We do not guarantee the accuracy, completeness, or reliability of property listings.</li>
        <li>Users are responsible for verifying all property details before making any decisions.</li>
        <li>Unauthorized use of the website may give rise to a claim for damages and/or be a criminal offense.</li>
        <li>All content, images, and data on this site are the property of Guruji Real Estate and may not be reproduced without permission.</li>
        <li>Guruji Real Estate reserves the right to modify these terms at any time.</li>
      </ul>
      <p>If you have any questions about these terms, please contact us at Gurujirealestate005@gmail.com.</p>
    </div>
  );
}
