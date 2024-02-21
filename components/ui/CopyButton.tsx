"use client";

import { useState } from "react";

import { Button } from "@nextui-org/react";

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Setelah 1,5 detik, atur kembali ke false
  };

  return (
    <Button
      onClick={copyToClipboard}
      className="bg-primary text-white font-extrabold py-2 px-4 rounded-full"
      endContent={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      }
    >
      {copied ? "Link Telah Disalin!" : "Salin Link"}
    </Button>
  );
};

export default CopyButton;
