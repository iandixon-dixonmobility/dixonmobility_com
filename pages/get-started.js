import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from 'react';

export default function GetStarted() {
  // const servicesItems = [
  //   "Mobile development",
  //   "UI/UX Design",
  //   "web development",
  //   "SEO",
  // ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Get In Touch
              </h1>
              <p className='mt-3'>
                We are here to help. Please get in touch and
                let us know how we can help, or shoot us an email on{" "}
                <a
                  href='mailto:support@blinder.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-blue-800 hover:text-blue-700 font-medium duration-150'>
                  info@dixonmobility.com.
                </a>
              </p>
            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              <form onSubmit={handleSubmit} className='space-y-5 font-medium'>
                <div>
                  <label>Full name</label>
                  <Input
                    name="name"
                    aria-label='Full name'
                    type='text'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    name="email"
                    aria-label='Email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    name="message"
                    aria-label='Message'
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                  ></textarea>
                </div>
                {status.submitted && (
                  <div className="text-green-600">
                    Thank you for your message. We'll get back to you soon!
                  </div>
                )}
                {status.error && (
                  <div className="text-red-600">
                    {status.error}
                  </div>
                )}
                <div className='pt-1'>
                  <Button
                    type="submit"
                    disabled={status.submitting}
                    className='w-full text-white bg-sky-800 hover:bg-sky-700 active:bg-sky-900 ring-offset-2 ring-blue-600 focus:ring'
                  >
                    {status.submitting ? 'Sending...' : 'Send'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
