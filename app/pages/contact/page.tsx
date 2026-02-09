'use client'

import { useState, FormEvent, use, useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') || '').toString().trim()
    const email = (formData.get('email') || '').toString().trim()
    const message = (formData.get('message') || '').toString().trim()

    // basic validation
    if (!name || !email || !message) {
      alert('Please fill in name, email and message.')
      return
    }

    setIsSubmitting(true)
    try {
      if (formRef.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
        )
        form.reset()
      } else {
        alert('Form reference is not available.')
      }
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center font-sans pt-[97px]">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start">
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 mt-16 pl-3 md:pl-12' ref={formRef}>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' type='text' placeholder='Your name' className='mb-4' />

            <label htmlFor='company'>Company</label>
            <input id='company' name='company' type='text' placeholder='Your company' className='mb-4' />

            <label htmlFor='email'>Email</label>
            <input id='email' name='email' type='email' placeholder='you@domain.com' className='mb-4' />

            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows={6} placeholder='How can I help?' className='mb-4' />
            
            <div className="mb-10 flex flex-col gap-4 text-base font-medium sm:flex-row">
              <button disabled={isSubmitting} type='submit' className="cursor-hover flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[647px]"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                width={16}
                height={16}
              />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Contact