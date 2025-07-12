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
        title="Send email"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 8.25V6l16-4v20l-16-4v-2.25l10.25-1.75L4 8.25Z" />
        </svg>
      </a>

      {/* Copy email */}
      <button
        onClick={handleCopy}
        className="bg-indigo-500 hover:bg-indigo-600 transition p-2 rounded-md"
        title="Copy email"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 18H8V7h11v16Z" />
        </svg>
      </button>

      {copied && <span className="text-green-400 text-sm ml-2">Copied!</span>}
    </div>
  );
}
