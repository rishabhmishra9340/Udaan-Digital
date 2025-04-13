'use client'
import { useState } from "react";
export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: '',
        message: "",
    });
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://udaan-digital-backend.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: formData.email,
                    subject: formData.subject,
                    text: formData.message,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Email sent successfully:', result);
            setMessage('Email sent successfully!');
            setShowPopup(true); // Show success popup
        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('Failed to send email. Please try again later.');
            setShowPopup(true); // Show error popup
        }

        // Hide popup after 3 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);

        // Clear form data after submission
        setFormData({
            name: "",
            email: "",
            subject: '',
            message: "",
        });
    };


    return (
        <>
            {showPopup && (
                <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1">
                            <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
            <div class="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-gray-600 rounded-lg">
                <div class="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]" >
                    <div>
                        <h1 class="text-4xl font-bold text-white">Get in Touch</h1>
                        <p class="text-sm text-gray-300 mt-4 leading-relaxed">Contact us today, and let’s shape the future together.
                        </p>

                        <ul class="mt-12 space-y-8">
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                                <a href="javascript:void(0)" class="text-white text-sm ml-4">
                                    Udaanstudio24@gmail.com
                                </a>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 482.6 482.6">
                                    <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z" data-original="#000000"></path>
                                </svg>
                                <a href="javascript:void(0)" class="text-white text-sm ml-4">
                                    +91-6266009632
                                </a>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 368.16 368.16">
                                    <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" data-original="#000000"></path>
                                    <path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" data-original="#000000"></path>
                                </svg>
                                <a href="javascript:void(0)" class="text-white text-sm ml-4">
                                    Tulsi Sadan, Dhar (M.P.), 454001
                                </a>
                            </li>
                        </ul>

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

                    <div class="bg-gray-100 p-6 rounded-lg">
                        {/* <p class="text-sm font-semibold text-gray-800">I am interested in...</p> */}

                        <div class="space-y-4 max-lg:mt-4">
                            <button type="button" class="px-4 py-2 rounded-lg bg-gray-400 text-white text-sm tracking-wider font-medium outline-none border-2 border-gray-400 mr-4">We are always there for you</button>
                        </div>

                        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-gray-400"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-gray-400"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-gray-400"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="6"
                                className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-gray-400"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <button
                                type="submit"
                                className="text-white bg-gray-400 hover:bg-gray-400 tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    fill="#fff"
                                    className="mr-2"
                                    viewBox="0 0 548.244 548.244"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                        clipRule="evenodd"
                                        data-original="#000000"
                                    />
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full h-96 p-12 mb-12">
                <h2 className="text-center text-xl font-semibold mb-4">
                    Our Location
                </h2>
                <div className="relative h-full rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6814327810143!2d75.29801267392854!3d22.591015132297795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39623700697721bf%3A0xb3c36cdcb9ad0a93!2sUDAAN%20Studio!5e0!3m2!1sen!2sin!4v1734275352154!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </>
    );
}