import { Dot } from "lucide-react";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { SimpleText } from "@/components/ui/typography";

export default function PrivacyContent() {
  return (
    <section className="pt-6 pb-[120px]">
      <div className="max-w-[846px] mx-auto">
        <BaseText type="primary" className="mb-4">
          Introduction
        </BaseText>
        <BaseText className="mb-4">
          Welcome to WidgetJoy. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and
          protect your personal information when you use our services. By using WidgetJoy, you agree to the terms
          described in this Privacy Policy.
        </BaseText>

        <BaseText type="primary" className="mb-4">
          Information We Collect
        </BaseText>
        <BaseText type="secondary" className="mb-5">
          Personal Information
        </BaseText>
        <BaseText className="mb-4">When you use WidgetJoy, we may collect personal information such as:</BaseText>
        <BaseText isListItem>Contact Information: Name, email address, phone number, etc.</BaseText>
        <BaseText isListItem>Account Information: Username, password, and other account-related information.</BaseText>
        <BaseText isListItem className="mb-6">
          Payment Information: Credit card details or other payment method information (processed through a secure
          third-party payment processor).
        </BaseText>

        <BaseText type="secondary" className="mb-5">
          Usage Information
        </BaseText>
        <BaseText className="mb-4">
          We may also collect information about your interaction with our tool, including:
        </BaseText>
        <BaseText isListItem>Device Information: IP address, browser type, operating system, etc.</BaseText>
        <BaseText isListItem className="mb-6">
          Usage Data: Pages visited, features used, time spent on the site, etc.
        </BaseText>

        <BaseText type="secondary" className="mb-5">
          How We Use Your Information
        </BaseText>
        <BaseText className="mb-4">We use the collected information to:</BaseText>
        <BaseText isListItem>Provide, maintain, and improve WidgetJoy.</BaseText>
        <BaseText isListItem>Personalize your experience.</BaseText>
        <BaseText isListItem>Process transactions and send invoices.</BaseText>
        <BaseText isListItem>Send administrative and promotional communications.</BaseText>
        <BaseText isListItem className="mb-6">
          Respond to customer service requests and support needs.
        </BaseText>

        <BaseText type="secondary" className="mb-5">
          Data Sharing and Disclosure
        </BaseText>
        <BaseText className="mb-4">We may share your information with third parties in the following cases:</BaseText>
        <BaseText isListItem>
          Service Providers: We work with third-party companies to facilitate our services, such as payment processors,
          hosting providers, or email marketing services.
        </BaseText>
        <BaseText isListItem>
          Legal Compliance: We may disclose your information if required by law or to protect the rights, property, or
          safety of WidgetJoy or others.
        </BaseText>
        <BaseText isListItem className="mb-6">
          Business Transfers: If WidgetJoy is involved in a merger, acquisition, or sale, your information may be part
          of the transferred assets.
        </BaseText>

        <BaseText type="secondary" className="mb-5">
          Data Security
        </BaseText>
        <BaseText className="mb-4">
          We take data security seriously and use various measures to protect your information, including:
        </BaseText>
        <BaseText isListItem>Secure data storage and encryption.</BaseText>
        <BaseText isListItem>Regular security audits and vulnerability assessments.</BaseText>
        <BaseText isListItem className="mb-6">
          Limited access to personal information to authorized personnel only.
        </BaseText>

        <BaseText type="secondary" className="mb-5">
          Your Rights
        </BaseText>
        <BaseText className="mb-4">
          Depending on your location, you may have certain rights regarding your personal information, including:
        </BaseText>
        <BaseText isListItem>The right to access, correct, or delete your personal information.</BaseText>
        <BaseText isListItem>The right to opt-out of promotional communications.</BaseText>
        <BaseText isListItem className="mb-6">
          The right to restrict or object to certain data processing activities.
        </BaseText>

        <BaseText type="primary" className="mb-4">
          Contact Us
        </BaseText>
        <BaseText className="mb-4">
          If you have questions or concerns about this Privacy Policy or your personal information, please contact us
          at:
        </BaseText>
        <BaseText isListItem>Email: hello@widgetjoy.com</BaseText>
        <BaseText isListItem className="mb-6">
          Address: WidgetJoy, 123 Tech Street, Suite 456, Tech City, TC 78901
        </BaseText>
        <BaseText type="secondary" className="mb-5">
          Changes to This Privacy Policy
        </BaseText>
        <BaseText>
          We may update this Privacy Policy from time to time. When we make changes, we will notify you by updating the
          "Last Updated" date at the top of this policy and, in some cases, providing additional notice. Please review
          this policy periodically to stay informed about our data practices.
        </BaseText>
      </div>
    </section>
  );
}

function BaseText({
  className,
  type = "base",
  children,
  isListItem = false,
}: {
  className?: string;
  children: ReactNode;
  type?: "primary" | "secondary" | "base";
  isListItem?: boolean;
}) {
  return (
    <FadeInWhenVisible delay={0.2}>
      <SimpleText
        className={twMerge(
          "text-bg-overlay flex",
          type === "primary" && "text-2xl",
          type === "secondary" && "text-lg",
          className
        )}
        weight={type === "base" ? "font-regular" : "font-medium"}
      >
        {isListItem && <Dot className="text-bg-overlay min-w-6" />}
        {children}
      </SimpleText>
    </FadeInWhenVisible>
  );
}
