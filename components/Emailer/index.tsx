"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, ChevronDown, LoaderCircle } from "lucide-react";

export interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  project: string;
  otherProject?: string;
  website?: string;
}

const initialData: EmailData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  project: "",
  otherProject: "",
  website: "",
};

export default function Emailer() {
  const [data, setData] = useState<EmailData>(initialData);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  function updateField(key: keyof EmailData, value: string) {
    setData((previous) => ({ ...previous, [key]: value }));
    if (status === "success") setStatus("idle");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || result.error)
        throw new Error("Message could not be sent");
      setData(initialData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="emailer"
      onSubmit={onSubmit}
      aria-label="Contact Peter"
      aria-busy={status === "sending"}
    >
      <div className="emailer-heading">
        <h3>Send me a message</h3>
        <span>Have a role or project in mind?</span>
      </div>
      <fieldset disabled={status === "sending"} className="emailer-fields">
        <legend className="sr-only">Your contact details and message</legend>
        <input
          className="emailer-honeypot"
          aria-hidden="true"
          aria-label="Website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
        <div className="emailer-name-row">
          <label htmlFor="contact-first-name">
            First name
            <input
              id="contact-first-name"
              name="firstName"
              autoComplete="given-name"
              placeholder="First name"
              required
              maxLength={100}
              value={data.firstName}
              onChange={(event) => updateField("firstName", event.target.value)}
            />
          </label>
          <label htmlFor="contact-last-name">
            Last name <span className="field-optional">(optional)</span>
            <input
              id="contact-last-name"
              name="lastName"
              autoComplete="family-name"
              placeholder="Last name"
              maxLength={100}
              value={data.lastName}
              onChange={(event) => updateField("lastName", event.target.value)}
            />
          </label>
        </div>
        <label htmlFor="contact-email">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            maxLength={254}
            value={data.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </label>
        <label htmlFor="contact-project">
          How can I help?
          <span className="emailer-select">
            <select
              id="contact-project"
              name="project"
              required
              value={data.project}
              onChange={(event) => updateField("project", event.target.value)}
            >
              <option value="" disabled>
                Select a topic
              </option>
              <option value="Hiring opportunity">Hiring opportunity</option>
              <option value="Website">Website</option>
              <option value="Web application">Web application</option>
              <option value="Mobile App">Mobile app</option>
              <option value="Consulting">Consulting</option>
              <option value="other">Something else</option>
            </select>
            <ChevronDown size={15} aria-hidden="true" />
          </span>
        </label>
        {data.project === "other" && (
          <label htmlFor="contact-other">
            Tell me a little more
            <input
              id="contact-other"
              name="otherProject"
              placeholder="What would you like to discuss?"
              required
              maxLength={200}
              value={data.otherProject}
              onChange={(event) =>
                updateField("otherProject", event.target.value)
              }
            />
          </label>
        )}
        <label htmlFor="contact-message">
          Message
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me about your team, the role, or what you’re working on."
            required
            maxLength={5000}
            rows={4}
            value={data.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
        </label>
        <button className="button primary emailer-submit" type="submit">
          {status === "sending" ? (
            <>
              Sending… <LoaderCircle size={16} className="emailer-spinner" />
            </>
          ) : (
            <>Send</>
          )}
        </button>
      </fieldset>
      <div className="emailer-feedback" aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="emailer-success">
            <Check size={16} /> Thanks for reaching out. Your message has been
            sent.
          </p>
        )}
        {status === "error" && (
          <p className="emailer-error">
            Your message couldn’t be sent. Your details are still here—try
            again, or <a href="mailto:peter@calabrese.dev">email me directly</a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
