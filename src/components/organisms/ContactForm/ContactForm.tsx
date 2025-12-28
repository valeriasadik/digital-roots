"use client";

import { useState } from "react";
import { CustomInput } from "@/components/atoms/CustomInput/CustomInput";
import { CustomSelect } from "@/components/atoms/CustomSelect/CustomSelect";
import { CustomTextArea } from "@/components/atoms/CustomTextArea/CustomTextArea";

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  inquiryType: string;
  message: string;
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState<Partial<FormFields>>(
    {}
  );

  const inquiryOptions = [
    { key: "town", value: "Town" },
    { key: "community", value: "Community" },
    { key: "question", value: "Question/Inquiry" },
  ];

  const updateField = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const fieldName = e.target.id as keyof FormFields;
    const fieldValue = e.target.value;

    setFields({ ...fields, [fieldName]: fieldValue });

    if (validationErrors[fieldName]) {
      const updatedErrors = { ...validationErrors };
      delete updatedErrors[fieldName];
      setValidationErrors(updatedErrors);
    }
  };

  const checkValidation = (): boolean => {
    const errors: Partial<FormFields> = {};

    if (!fields.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!fields.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!fields.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!fields.inquiryType) {
      errors.inquiryType = "Please select an option";
    }

    if (!fields.message.trim()) {
      errors.message = "Message is required";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (checkValidation()) {
      console.log("Form submitted:", fields);
      setFields({
        firstName: "",
        lastName: "",
        email: "",
        inquiryType: "",
        message: "",
      });
    }
  };

  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pt-5 pb-12">
      <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight text-neutral-900 sm:text-5xl text-center">
        Get in <span className="text-[var(--color-sage)]">Touch</span>
      </h2>

      <form onSubmit={submitForm} className="mx-auto max-w-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomInput
            id="firstName"
            label="First Name"
            value={fields.firstName}
            placeholder="Your first name"
            onChange={updateField}
            error={validationErrors.firstName}
          />

          <CustomInput
            id="lastName"
            label="Last Name"
            value={fields.lastName}
            placeholder="Your last name"
            onChange={updateField}
            error={validationErrors.lastName}
          />
        </div>

        <CustomInput
          id="email"
          label="Email Address"
          value={fields.email}
          placeholder="your@email.com"
          onChange={updateField}
          error={validationErrors.email}
        />

        <CustomSelect
          id="inquiryType"
          label="What brings you here?"
          placeholder="Select an option"
          value={fields.inquiryType}
          options={inquiryOptions}
          onChange={updateField}
          error={validationErrors.inquiryType}
        />

        <CustomTextArea
          id="message"
          label="Tell us more"
          value={fields.message}
          placeholder="Describe your town, community, or question..."
          onChange={updateField}
          error={validationErrors.message}
          rows={6}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--color-sage)] px-8 py-4 text-white font-semibold hover:opacity-90 transition-opacity duration-200"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
