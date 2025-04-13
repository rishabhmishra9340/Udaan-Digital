'use client'
import { useState } from 'react';
import React from 'react'


export default function Footer() {
  const [email, setEmail] = useState(''); // State to store input value
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    const emailContent = {
      email,
      subject: 'Newsletter Signup',
      body: 'Thank you for signing up for our newsletter! We will send the latest updates to this email address.',
    };

    try {
      const response = await fetch(
        'https://udaan-digital-backend.onrender.com/send-email-to-user',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(emailContent),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message || 'Email sent successfully!');
        setShowPopup(true); // Show popup on success
      } else {
        const errorText = await response.text();
        setMessage(`Error: ${errorText}`);
        setShowPopup(true); // Show popup on error
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to send email.');
      setShowPopup(true);
    }

    setEmail('');
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };




  return (
    <>

      {showPopup && (
        <div className="bg-teal-100 border-t-4 border-gray-500 rounded-b text-gray-900 px-4 py-3 shadow-md" role="alert">
          <div className="flex">
            <div className="py-1">
              <svg className="fill-current h-6 w-6 text-gray-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Status: {message}</p>
              <p className="text-sm">{message}</p>
            </div>
          </div>
        </div>
      )}
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-gray-600">
              <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41Z" fill="currentColor" />
              </svg>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Get the latest news!</h2>

                  <p className="mt-4 text-gray-500">
                    <span className="mt-4 text-gray-500">
                      'Stay connected for the latest updates and insights.'</span>
                  </p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full" onSubmit={handleSubmit}>
                  <label htmlFor="UserEmail" className="sr-only"> Email </label>
                  <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="example@rhcp.com"
                      className="w-full text-md border-0 focus:outline-none p-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="mt-1 w-full bg-gray-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-gray-600 sm:mt-0 sm:w-auto sm:shrink-0"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>

              <div class="col-span-2 sm:col-span-1">
                <p class="font-bold text-gray-900">Our Expertise</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="/service" class="text-gray-700 transition hover:opacity-75"> Master Planning </a>
                  </li>

                  <li>
                    <a href="/service" class="text-gray-700 transition hover:opacity-75"> Architectural Design </a>
                  </li>

                  <li>
                    <a href="/service" class="text-gray-700 transition hover:opacity-75"> Urban Planning </a>
                  </li>

                  <li>
                    <a href="/service" class="text-gray-700 transition hover:opacity-75"> Infrastructure Planning </a>
                  </li>

                  <li>
                    <a href="/service" class="text-gray-700 transition hover:opacity-75"> Interior Design </a>
                  </li>
                  <li>
                    <a href="/service" class="text-gray-700 transition hover:opacity-75"> BIM </a>
                  </li>
                </ul>
              </div>

              <div class="col-span-2 sm:col-span-1">
                <p class="font-bold text-gray-900">Company</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="/about" class="text-gray-700 transition hover:opacity-75"> About Us </a>
                  </li>

                  <li>
                    <a href="/projects" class="text-gray-700 transition hover:opacity-75"> Projects </a>
                  </li>

                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75"> Services </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75"> Realty </a>
                  </li>
                  <li>
                    <a href="/contact" class="text-gray-700 transition hover:opacity-75"> Contact Us </a>
                  </li>
                </ul>
              </div>
              <div class="col-span-2 sm:col-span-1 w-96">
                <h4 class="text-3xl fonat-semibold text-blueGray-700 mb-4">Feel free to reach out!</h4>
                <h5 class="text-lg mt-0 mb-8 text-blueGray-600">
                  Contact us today, and lets shape the future together.
                </h5>
                <div class="mt-6 lg:mb-0 mb-6">

                <ul class="flex mt-12 space-x-4">
                  <li class="bg-gray-400 hover:bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://www.facebook.com/share/12EjB8cKrVa/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
                        viewBox="0 0 24 24">
                        <path
                          d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                          data-original="#000000" />
                      </svg>
                    </a>
                  </li>
                  <li class="bg-gray-400 hover:bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://www.linkedin.com/company/udaan-studio/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
                        viewBox="0 0 511 512">
                        <path
                          d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                          data-original="#000000" />
                      </svg>
                    </a>
                  </li>
                  <li class="bg-gray-400 hover:bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://www.instagram.com/udaan_studio_/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
                        viewBox="0 0 24 24">
                        <path
                          d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                        </path>
                      </svg>
                    </a>
                  </li>
                  <li class="bg-gray-400 hover:bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://wa.me/916266009632" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#fff" viewBox="0 0 24 24">
                        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 .01 5.37.01 12a11.9 11.9 0 0 0 1.59 6l-1.63 5.95 6.11-1.6a11.9 11.9 0 0 0 5.92 1.51h.01C18.63 24 24 18.63 24 12a11.92 11.92 0 0 0-3.48-8.52ZM12 22a9.88 9.88 0 0 1-5-1.37l-.36-.21-3.63.95.97-3.54-.24-.37A9.93 9.93 0 1 1 12 22Zm5.3-7.69c-.29-.14-1.71-.84-1.98-.94s-.46-.14-.66.14-.76.94-.94 1.13-.35.21-.64.07a8.13 8.13 0 0 1-2.4-1.48 9.1 9.1 0 0 1-1.69-2.09c-.17-.29 0-.45.13-.59s.29-.35.43-.52.19-.29.29-.48a.55.55 0 0 0 0-.52c-.14-.15-.66-1.59-.9-2.18s-.48-.5-.66-.5h-.57a1.1 1.1 0 0 0-.79.37A3.31 3.31 0 0 0 6 9.69a5.76 5.76 0 0 0 1.21 3.36c.15.21 2.09 3.2 5.07 4.49a17.6 17.6 0 0 0 1.74.64 4.2 4.2 0 0 0 1.93.12 3.29 3.29 0 0 0 2.14-1.5 2.69 2.69 0 0 0 .19-1.5c-.09-.14-.26-.2-.55-.34Z" />
                      </svg>
                    </a>
                  </li>
                  <li class="bg-gray-400 hover:bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://jsdl.in/DT-992JLYGHALJ" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#fff" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.73a1 1 0 0 1-1 1A17.92 17.92 0 0 1 2 4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .58 3.68 1 1 0 0 1-.24 1z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                </div>
              </div>


            </div>
          </div>

        </div>
      </footer>

    </>
  )
}
