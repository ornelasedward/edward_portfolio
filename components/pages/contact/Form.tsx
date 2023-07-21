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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <div className=" lg:flex  justify-between">
      <h2 className=" basis-[45%]">
        <span className=" text-primary">#</span>inquire-here
      </h2>
      <div className="s basis-[55%]">
        <form className=" pt-5 grid gap-3 lg:gap-6" onSubmit={handleSubmit}>
          <div className=" grid gap-3 lg:gap-6 grid-cols-2">
            <Input
              className=" border  focus:ring-0   border-gray "
              id="name"
              label="Name"
              color="teal"
            />
            <Input
              className=" border  focus:ring-0   border-gray "
              color="teal"
              id="email"
              label="Email"
            />
          </div>
          <div className="grid">
            <Input
              className=" border  focus:ring-0   border-gray "
              color="teal"
              id="title"
              label="Title"
            />
          </div>
          <div className="grid">
            <Textarea
              color="teal"
              className=" border  focus:ring-0   border-gray "
              name="message"
              label="Message"
              value={message}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-transparent border  hover:bg-primary hover:text-black font-bold border-primary text-white px-5 flex flex-wrap items-center py-1.5"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquire;
