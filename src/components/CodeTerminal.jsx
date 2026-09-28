import { useState } from 'react';
import { Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { codeSnippetHero } from '../data/portfolioData';

export default function CodeTerminal() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippetHero.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = codeSnippetHero.code.split('\n');

  return (
    <div className="terminal-card glass-card" aria-label="Interactive Developer Code Snippet">
      <div className="terminal-header">
        <div className="terminal-controls" aria-hidden="true">
          <span className="term-dot red"></span>
          <span className="term-dot yellow"></span>
          <span className="term-dot green"></span>
        </div>
        <div className="terminal-title">
          <Terminal size={14} className="terminal-icon" />
          <span>{codeSnippetHero.filename}</span>
        </div>
        <button
          type="button"
          className="terminal-copy-btn"
          onClick={handleCopy}
          aria-label={copied ? "Code copied to clipboard" : "Copy code snippet"}
          title="Copy code"
        >
          {copied ? (
            <>
              <Check size={13} color="#34d399" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="terminal-body">
        {lines.map((line, idx) => {
          return (
            <div key={idx} className="code-line">
              <span className="line-num">{idx + 1}</span>
              <span className="code-content">
                {formatCodeLine(line)}
              </span>
            </div>
          );
        })}

        <div className="terminal-footer-output">
          <div className="output-title">
            <Sparkles size={13} />
            <span>Output Console</span>
          </div>
          <code>&gt; "Building clean, performant, user-centric web apps."</code>
        </div>
      </div>
    </div>
  );
}

// Simple deterministic syntax coloring helper for the hero preview
function formatCodeLine(line) {
  if (line.trim().startsWith('#')) {
    return <span className="syntax-comment">{line}</span>;
  }
  if (line.includes('class Developer:')) {
    return (
      <>
        <span className="syntax-keyword">class </span>
        <span className="syntax-def">Developer</span>:
      </>
    );
  }
  if (line.includes('def __init__(self):')) {
    return (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-keyword">def </span>
        <span className="syntax-def">__init__</span>(self):
      </>
    );
  }
  if (line.includes('def current_status(self):')) {
    return (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-keyword">def </span>
        <span className="syntax-def">current_status</span>(self):
      </>
    );
  }
  if (line.includes('self.name =')) {
    return (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="syntax-attr">name</span> = <span className="syntax-string">"PALLERLA SAIRISHITH"</span>
      </>
    );
  }
  if (line.includes('self.role =')) {
    return (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="syntax-attr">role</span> = <span className="syntax-string">"Software / Frontend Developer"</span>
      </>
    );
  }
  if (line.includes('self.location =')) {
    return (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="syntax-attr">location</span> = <span className="syntax-string">"Jagtial, Telangana, India"</span>
      </>
    );
  }
  if (line.includes('self.skills =')) {
    return (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="syntax-attr">skills</span> = [<span className="syntax-string">"Python"</span>, <span className="syntax-string">"HTML"</span>, <span className="syntax-string">"CSS"</span>, <span className="syntax-string">"JavaScript"</span>, <span className="syntax-string">"SQL"</span>, <span className="syntax-string">"DSA"</span>]
      </>
    );
  }
  if (line.includes('self.seeking =')) {
    return (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="syntax-attr">seeking</span> = <span className="syntax-string">"Internships &amp; Software Roles"</span>
      </>
    );
  }
  if (line.includes('return "Building')) {
    return (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-keyword">return </span><span className="syntax-string">"Building clean, performant, user-centric web apps."</span>
      </>
    );
  }
  if (line.includes('sairishith = Developer()')) {
    return (
      <>
        <span className="syntax-val">sairishith</span> = <span className="syntax-def">Developer</span>()
      </>
    );
  }
  if (line.includes('print(sairishith.current_status())')) {
    return (
      <>
        <span className="syntax-keyword">print</span>(sairishith.<span className="syntax-def">current_status</span>())
      </>
    );
  }
  return line;
}
