"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import "./contact-us.scss";
import text from "@/app/content/global-text.json";
import { GradientHeader } from "@/app/component/ui";

// ─── Reusable input ──────────────────────────────────────────────────────────

function FormInput({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
}: {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`cu-input ${error ? "cu-input--error" : ""}`}
        required
      />
      {error && <p className="cu-field-error">{error}</p>}
    </div>
  );
}

// ─── Reusable textarea ───────────────────────────────────────────────────────

function FormTextarea({
  name,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="cu-textarea"
      required
    />
  );
}

// ─── Contact form section ────────────────────────────────────────────────────

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const isFormEmpty = !name.trim() || !email.trim() || !message.trim();
  const isDisabled = isFormEmpty || !!emailError || status === "sending";

  const handleEmailChange = (v: string) => {
    setEmail(v);
    if (v.trim() && !isValidEmail(v.trim())) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isFormEmpty) return;

    if (!isValidEmail(email.trim())) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="cu-section flex-wrap md:px-32 md:pb-15"
      aria-label="Contact us"
    >
      <div className="w-full pb-12">
        <GradientHeader
          text="CONTACT US"
          className="justify-center"
          textMessage={text.contact.contact_us}
          messageClass="md:!text-[16px] text-black/60"
        />
      </div>
      <div className="cu-card pb-20">
        {/* Top imagery — shadow on left, house on right */}
        <div className="cu-imagery">
          <Image
            src="/image/contact-us/shadow.svg"
            alt=""
            width={260}
            height={180}
            className="cu-shadow"
            aria-hidden="true"
          />
          <Image
            src="/image/contact-us/house.svg"
            alt="House illustration"
            width={420}
            height={180}
            className="cu-house"
          />
        </div>

        {/* Form */}
        <div className="cu-form-wrap mx-auto relative p-6">
          <div className="form-bg"></div>
          <div className="form-card">
            <h2 className="cu-title">{text.contact.form_header}</h2>

            <form className="cu-form" onSubmit={handleSubmit}>
              <FormInput
                name="name"
                placeholder="Please enter you name here"
                value={name}
                onChange={setName}
              />

              <FormInput
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
              />

              <FormTextarea
                name="message"
                placeholder="Send us your message"
                value={message}
                onChange={setMessage}
              />

              <button type="submit" className="cu-submit" disabled={isDisabled}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="cu-status cu-status--success">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="cu-status cu-status--error">
                  Failed to send. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
