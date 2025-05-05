import Head from "next/head";
import Image from "next/image";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use</title>
      </Head>
      <div className="custom-screen py-16">
        <div className="flex flex-row min-h-[400px]">
          {/* Left: Icon */}
          <div className="w-1/5 flex items-start justify-center pt-4">
            <Image
              src="/icons/document-file.svg"
              alt="Document File Icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          {/* Right: Text */}
          <div className="w-4/5 pl-8">
            <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
            <p>
              <b>Use of Website</b> You agree to use this website lawfully and respectfully, without causing harm or disruption.
            </p>
            <p>
              <b>Intellectual Property</b> All content on this website, including text, graphics, logos, and software, is the property of Dixon Mobility or licensed to us and protected by intellectual property laws. You may not reproduce or distribute content without our explicit permission.
            </p>
            <p>
              <b>Limitation of Liability</b> Dixon Mobility shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of our website.
            </p>
            <p>
              <b>Changes</b> We may update these terms at any time. Changes will be posted on this page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 