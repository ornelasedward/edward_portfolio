'use client';

import Button from '@/components/common/Button';
import InputTextField from '@/components/common/InputTextFiled';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Input, Textarea } from '@material-tailwind/react';

const Inquire = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          title,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setSubmitStatus('success');
      // Clear form on success
      setUsername('');
      setEmail('');
      setTitle('');
      setMessage('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className=" lg:flex  justify-between">
      <h2 className=" basis-[45%]">
        <span className=" text-primary">#</span>inquiries
      </h2>
      <div className="s basis-[55%]">
        <form className=" pt-5 grid gap-3 lg:gap-6" onSubmit={handleSubmit}>
          <div className=" grid gap-3 lg:gap-6 grid-cols-2">
            <Input
              className=" border  focus:ring-0   border-gray "
              id="name"
              label="Name"
              color="teal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              className=" border  focus:ring-0   border-gray "
              color="teal"
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid">
            <Input
              className=" border  focus:ring-0   border-gray "
              color="teal"
              id="title"
              label="Subject"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid">
            <Textarea
              color="teal"
              className=" border  focus:ring-0   border-gray "
              name="message"
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-3 bg-green-900/20 border border-green-500 text-green-400 rounded">
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-3 bg-red-900/20 border border-red-500 text-red-400 rounded">
              {errorMessage}
            </div>
          )}
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-transparent border hover:bg-primary hover:text-black font-bold border-primary text-white px-5 flex flex-wrap items-center py-1.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquire;
