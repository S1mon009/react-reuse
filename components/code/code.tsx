"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import { Copy, Check } from "lucide-react";

interface codeProps {
  code: string;
  language?: string;
}

/**
 * Code component that displays formatted and highlighted code using the react-code-block library.
 *
 * Props:
 * - code (string): The code content to display.
 * - language (string | optional): The language for syntax highlighting (defaults to "tsx").
 *
 * @param {codeProps} props - Contains code content and optional language parameter
 * @returns {JSX.Element} The rendered Code component.
 */
export default function Code({
  code,
  language = "tsx",
}: codeProps): JSX.Element {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);

  const copyCode = () => {
    setCopied(true);
    copyToClipboard(code);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [copied]);

  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl text-wrap">
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-2 right-4"
          onClick={copyCode}
        >
          {copied ? <Check /> : <Copy />}
        </Button>
      </CodeBlock.Code>
    </CodeBlock>
  );
}