import Head from "next/head";
import Image from "next/image";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="custom-screen py-16">
        <div className="flex flex-row min-h-[400px]">
          {/* Left: Icon */}
          <div className="w-1/5 flex items-start justify-center pt-4">
            <Image
              src="/icons/document.svg"
              alt="Document Icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          {/* Right: Text */}
          <div className="w-4/5 pl-8">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p>
              <b>Information Collection</b> Dixon Mobility may collect personal information such as names, email addresses, and contact details when voluntarily submitted by our visitors.
            </p>
            <p>
              <b>Use of Information</b> Collected information is used to respond to inquiries, provide services, and improve our offerings. Collected information is used to respond to inquiries, provide services, and improve our offerings.
            </p>
            <p>
              <b>Cookies</b> Our website may use cookies to enhance user experience and track usage. You can disable cookies through your browser settings.
            </p>
            <p>
              <b>Information Sharing</b> We do not sell or share your personal information with third parties except when required by law or necessary to provide our services.
            </p>
            <p>
              <b>Security</b> We implement reasonable security measures to protect your information, but no internet transmission can be entirely secure.
            </p>
            <p>
              <b>Analytics</b> We use Google Firebase Analytics to collect information about how visitors use our site. This helps us improve our site and services.
            </p>
            <p>
              <b>Changes to this Privacy Policy</b> This policy may be updated periodically. Updates will be posted on this page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 