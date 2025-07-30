import { useState } from "react";

export default function CopyEmail() {
  const email = "gugora.dev@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="bg-white/5 px-4 py-2 rounded-lg flex-1 text-center text-gray-200">
        {email}
      </div>

      {/* Send email */}
      <a
        href={`mailto:${email}`}
        className="bg-indigo-500 hover:bg-indigo-600 transition p-2 rounded-md"
        aria-label="Send email"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 485.638 485.638"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Send email</title>
          <path
            d="M472.689,156.996L328.642,12.949c-17.266-17.266-45.353-17.266-62.616,0L12.948,266.024 
  c-17.264,17.266-17.264,45.353,0,62.617L156.995,472.69c17.266,17.264,45.354,17.265,62.617,0l253.076-253.076 
  C489.954,202.348,489.952,174.26,472.689,156.996z M183.546,455.21c-2.064-0.707-4.031-1.745-5.68-3.393L33.819,307.771 
  c-0.039-0.041-0.048-0.092-0.09-0.133l149.816-0.001V455.21z M42.601,278.118L278.122,42.596l0.002,229.085 
  c-0.002,3.444-2.998,6.442-6.443,6.442L42.601,278.118z M213.06,437.498v-129.86h58.623c9.609,0,18.64-3.741,25.427-10.528 
  c6.788-6.788,10.527-15.817,10.528-25.428V213.06l129.854,0.005L213.06,437.498z M307.637,183.545V33.729 
  c0.04,0.041,0.093,0.05,0.134,0.091l144.047,144.047c1.646,1.647,2.685,3.613,3.388,5.683L307.637,183.545z"
          />
          <path
            d="M14.382,62.57h151.154c7.941,0,14.381-6.438,14.381-14.38c0-7.942-6.439-14.381-14.381-14.381H14.382 
  c-7.943,0-14.381,6.438-14.381,14.381C0.001,56.132,6.439,62.57,14.382,62.57z"
          />
          <path
            d="M14.382,119.065h94.784c7.942,0,14.38-6.438,14.38-14.381c0-7.941-6.438-14.38-14.38-14.38H14.382 
  c-7.943,0-14.381,6.438-14.381,14.38C0.001,112.627,6.439,119.065,14.382,119.065z"
          />
          <path
            d="M14.382,173.849h61.197c7.941,0,14.381-6.438,14.381-14.381s-6.439-14.381-14.381-14.381H14.382 
  c-7.943,0-14.381,6.439-14.381,14.381S6.439,173.849,14.382,173.849z"
          />
          <path
            d="M75.579,438.278H14.382c-7.943,0-14.381,6.439-14.381,14.381c0,7.942,6.438,14.381,14.381,14.381h61.197 
  c7.941,0,14.381-6.438,14.381-14.381C89.96,444.717,83.521,438.278,75.579,438.278z"
          />
        </svg>  
      </a>

      {/* Copy email */}
      <button
        onClick={handleCopy}
        className="bg-indigo-500 hover:bg-indigo-600 transition p-2 rounded-md"
        title="Copy email"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 18H8V7h11v16Z" />
        </svg>
      </button>

      {copied && <span className="text-green-400 text-sm ml-2">Copied!</span>}
    </div>
  );
}
