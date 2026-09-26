'use client';

import InputTextField from '@/components/common/InputTextFiled';

import React, { useState, FormEvent, ChangeEvent } from 'react';

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
      setUsername('');
      setEmail('');
      setTitle('');
      setMessage('');

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: unknown) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <div>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <InputTextField
              label="Name"
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                setUsername(e.target.value)
              }
            />
            <InputTextField
              label="Email"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <InputTextField
            label="Subject"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              setTitle(e.target.value)
            }
          />
          <InputTextField
            label="Message"
            value={message}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            multiline
            rows={5}
          />
          {submitStatus === 'success' && (
            <div className="border border-line p-3 text-sm">
              Message sent. I&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="border border-red-700 p-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-line bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquire;
