import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use</title>
      </Head>
      <div className="custom-screen py-16">
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
    </>
  );
} 