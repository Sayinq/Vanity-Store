import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react';
import '../../index.css';
import useFadeInAnimation from '../../config/useFadeAnimation';

export default function FAQAccordion() {
    const { ref, style } = useFadeInAnimation();

    const questions = [
      "What is Vanity?",
      "How can I customize my profile?",
      "Is there a mobile app?",
      "What payment methods do you accept?",
      "How do I reset my password?",
      "Can I cancel my subscription?",
      "Do you offer a free trial?",
      "What is your refund policy?",
      "How can I contact customer support?",
      "Are there any hidden fees?",
      "Is my data secure with Vanity?",
      "Do you have a privacy policy?",
      "How do I update my billing information?",
      "Can I change my username?",
      "What features does Vanity offer?",
    ];
  
    const answers = [
      "Vanity is a platform that allows users to create and customize their online profiles.",
      "You can customize your profile by going to the settings page and selecting the 'Customize Profile' option.",
      "Yes, we have a mobile app available for both iOS and Android devices.",
      "We accept payments via credit card, PayPal, and bank transfer.",
      "To reset your password, go to the login page and click on the 'Forgot Password' link.",
      "Yes, you can cancel your subscription at any time from your account settings.",
      "We offer a 7-day free trial for all new users.",
      "Our refund policy allows for a full refund within 30 days of your purchase.",
      "You can contact our customer support team via email at support@vanity.com or through our live chat.",
      "There are no hidden fees. Our pricing is transparent and straightforward.",
      "We take the security and privacy of your data seriously. We use encryption and follow best practices.",
      "Yes, we have a comprehensive privacy policy that outlines how we handle your data.",
      "You can update your billing information from your account settings.",
      "Yes, you can change your username in your profile settings.",
      "Vanity offers a range of features, including profile customization, social sharing, and analytics.",
    ];
  
    return (
      <Accordion selectionMode="multiple" variant="splitted" ref={ref} style={style}>
        {questions.map((question, index) => (
          <AccordionItem
            key={index}
            title={question}
            className="text-zinc-700 py-6 sm:w-full w-[375px] mb-4"
            indicator={<ion-icon name="chevron-back-outline"></ion-icon>}
          >
            {answers[index]}
          </AccordionItem>
        ))}
      </Accordion>
    );
  }