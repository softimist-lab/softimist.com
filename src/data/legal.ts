import type { LegalDocument } from '#/types'

export const legalContact = {
  company: 'Softimist Limited',
  address: 'Dhaka, Bangladesh',
  email: 'info@softimist.com',
  privacyEmail: 'privacy@softimist.com',
  supportEmail: 'support@softimist.com',
  phone: '+880 1635-465676',
}

export const privacyPolicy: LegalDocument = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  kicker: 'Legal',
  description:
    'How Softimist Limited collects, uses, shares, and protects personal information across our website and products.',
  lastUpdated: '2026-09-14',
  intro: [
    `${legalContact.company} ("Softimist", "we", "us", or "our") respects your privacy. This Privacy Policy explains what personal information we collect when you visit softimist.com, contact us, apply for a job, or use our products — including Edushade, PlayMist, and PlayMist Aggregator — and how we use, share, and safeguard that information.`,
    'By using our website or services, you agree to the practices described in this policy. If you do not agree, please stop using the site and services.',
  ],
  sections: [
    {
      id: 'information-we-collect',
      title: '1. Information We Collect',
      body: [
        'We collect only the information we need to run our website, respond to enquiries, evaluate job applications, and operate our platforms.',
      ],
      bullets: [
        'Information you give us: your name, email address, phone number, company, message content, and — for job applications — your CV, work history, portfolio links, and any other details you choose to share.',
        'Information collected automatically: IP address, browser and device type, operating system, referring page, pages viewed, and approximate location derived from your IP address.',
        'Cookies and similar technologies: small files stored on your device that keep your theme preference, maintain sessions, and support privacy-friendly analytics.',
        'Information from our products: where you use Edushade, PlayMist, or PlayMist Aggregator under an agreement with a customer of ours, we process account, usage, and content data on that customer’s behalf as described in Section 9.',
      ],
    },
    {
      id: 'how-we-use',
      title: '2. How We Use Your Information',
      body: ['We use personal information for the following purposes:'],
      bullets: [
        'To respond to your enquiries, demo requests, and support tickets.',
        'To evaluate applications for open roles and communicate with candidates.',
        'To provide, maintain, secure, and improve our website and products.',
        'To understand aggregate traffic patterns and measure the performance of our content.',
        'To send service updates and, where you have opted in, occasional product news. You can opt out of marketing messages at any time.',
        'To detect and prevent fraud, abuse, and security incidents, and to comply with legal obligations.',
      ],
    },
    {
      id: 'legal-bases',
      title: '3. Legal Bases for Processing',
      body: [
        'Where data protection law (such as the EU/UK GDPR) applies to you, we rely on one or more of the following legal bases: your consent; the performance of a contract with you; our legitimate interests in operating and improving our business, provided those interests are not overridden by your rights; and compliance with legal obligations.',
        'Where we rely on consent — for example, for non-essential cookies or marketing email — you may withdraw it at any time without affecting processing carried out before the withdrawal.',
      ],
    },
    {
      id: 'cookies',
      title: '4. Cookies and Tracking',
      body: [
        'We use a small number of cookies and similar technologies. Strictly necessary cookies keep the site working and remember preferences such as your light or dark theme. Analytics cookies help us understand which pages are useful so we can improve them.',
        'Most browsers let you block or delete cookies through their settings. Blocking strictly necessary cookies may cause parts of the site to stop working as intended.',
      ],
    },
    {
      id: 'sharing',
      title: '5. How We Share Information',
      body: ['We do not sell your personal information. We share it only in these circumstances:'],
      bullets: [
        'Service providers: hosting, email delivery, analytics, and applicant-tracking vendors that process data on our instructions under written agreements.',
        'Professional advisers: lawyers, auditors, and insurers where necessary and subject to confidentiality.',
        'Legal and safety: where required by law, court order, or regulator, or to protect the rights, property, or safety of Softimist, our users, or the public.',
        'Business transfers: in connection with a merger, acquisition, financing, or sale of assets, subject to this policy continuing to apply to the transferred information.',
      ],
    },
    {
      id: 'international-transfers',
      title: '6. International Transfers',
      body: [
        'We operate from Bangladesh and use service providers located in other countries. Where personal information is transferred across borders, we take steps to ensure it remains protected — including using providers that offer appropriate safeguards such as standard contractual clauses.',
      ],
    },
    {
      id: 'retention',
      title: '7. Data Retention',
      body: [
        'We keep personal information only for as long as necessary for the purposes described in this policy, or for as long as required by law. Enquiry and support correspondence is typically retained for up to 24 months. Unsuccessful job applications are retained for up to 12 months so we can contact you about future openings, unless you ask us to delete them sooner.',
      ],
    },
    {
      id: 'your-rights',
      title: '8. Your Rights',
      body: ['Depending on where you live, you may have some or all of the following rights:'],
      bullets: [
        'Access a copy of the personal information we hold about you.',
        'Correct information that is inaccurate or incomplete.',
        'Request deletion of your information where we have no overriding reason to keep it.',
        'Object to or request that we restrict certain processing.',
        'Receive your information in a portable, machine-readable format.',
        'Withdraw consent where our processing is based on consent.',
        'Lodge a complaint with your local data protection authority.',
      ],
      outro: [
        `To exercise any of these rights, email ${legalContact.privacyEmail}. We will respond within the timeframe required by applicable law, and we may ask for information to verify your identity before acting on a request.`,
      ],
    },
    {
      id: 'customer-data',
      title: '9. Data We Process for Customers',
      body: [
        'When an organisation licenses Edushade, PlayMist, or PlayMist Aggregator, that organisation is the controller of the personal data processed in its platform and Softimist acts as a processor. We process that data only on the organisation’s documented instructions and under the terms of our agreement with them.',
        'If you are an end user of a platform operated by one of our customers, please direct requests about your data to that organisation. We will support them in responding.',
      ],
    },
    {
      id: 'security',
      title: '10. Security',
      body: [
        'We apply technical and organisational measures appropriate to the risk — including encryption in transit, access controls, least-privilege administration, logging, and regular patching. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
      ],
    },
    {
      id: 'children',
      title: '11. Children’s Privacy',
      body: [
        'Our website is not directed at children under 13, and we do not knowingly collect their personal information through it. Where our education products are used by minors, that use is governed by the agreement with the school or institution operating the platform. If you believe a child has provided us information directly, contact us and we will delete it.',
      ],
    },
    {
      id: 'third-party-links',
      title: '12. Third-Party Links',
      body: [
        'Our site links to third-party websites and services that we do not control. This policy does not cover their practices, and we encourage you to read their privacy notices before sharing information with them.',
      ],
    },
    {
      id: 'changes',
      title: '13. Changes to This Policy',
      body: [
        'We may update this Privacy Policy to reflect changes to our practices or legal requirements. When we do, we will revise the "Last updated" date above, and for material changes we will provide a more prominent notice.',
      ],
    },
    {
      id: 'contact',
      title: '14. Contact Us',
      body: [
        `If you have questions about this policy or how we handle your information, contact ${legalContact.company} at ${legalContact.privacyEmail} or ${legalContact.email}. You can also reach us at ${legalContact.phone}, or write to us at ${legalContact.address}.`,
      ],
    },
  ],
}

export const termsOfService: LegalDocument = {
  slug: 'terms-of-service',
  title: 'Terms of Service',
  kicker: 'Legal',
  description:
    'The terms that govern your use of the Softimist Limited website, products, and services.',
  lastUpdated: '2026-09-14',
  intro: [
    `These Terms of Service ("Terms") govern your access to and use of softimist.com and any services, demos, trials, or products made available by ${legalContact.company} ("Softimist", "we", "us", or "our").`,
    'By accessing the website or using our services, you agree to these Terms. If you are agreeing on behalf of a company, you confirm that you have authority to bind that company. If you do not agree, do not use the site or services.',
  ],
  sections: [
    {
      id: 'services',
      title: '1. Our Services',
      body: [
        'Softimist builds and licenses white-label software platforms, including Edushade (learning management), PlayMist (OTT streaming), and PlayMist Aggregator (content distribution), together with related custom development and support services.',
        'This website provides general information about those offerings. Access to a product itself is governed by a separate written agreement, order form, or subscription terms. Where those documents conflict with these Terms, the separate agreement prevails for that product.',
      ],
    },
    {
      id: 'eligibility',
      title: '2. Eligibility and Accounts',
      body: [
        'You must be at least 18 years old, or the age of legal majority where you live, to use our services on your own behalf. Where an account is issued to you, you are responsible for keeping credentials confidential and for all activity carried out under your account. Notify us promptly at ' +
          legalContact.supportEmail +
          ' if you suspect unauthorised use.',
      ],
    },
    {
      id: 'acceptable-use',
      title: '3. Acceptable Use',
      body: ['When using our website or services, you agree not to:'],
      bullets: [
        'Break any applicable law or regulation, or infringe anyone’s intellectual property, privacy, or other rights.',
        'Upload or distribute malware, or attempt to gain unauthorised access to our systems, accounts, or networks.',
        'Probe, scan, or test the vulnerability of our infrastructure without our prior written permission.',
        'Interfere with or disrupt the integrity or performance of the services, including through excessive automated requests.',
        'Scrape, resell, sublicense, or redistribute the services or their content except as expressly permitted.',
        'Reverse engineer, decompile, or attempt to derive the source code of our software, except to the extent that restriction is prohibited by law.',
        'Use the services to transmit unlawful, defamatory, harassing, or otherwise objectionable content.',
      ],
      outro: [
        `To report abuse or a suspected security issue, email ${legalContact.supportEmail}. Please do not publicly disclose a vulnerability before we have had a reasonable opportunity to address it.`,
      ],
    },
    {
      id: 'intellectual-property',
      title: '4. Intellectual Property',
      body: [
        'The website, our products, and all related software, designs, text, graphics, logos, and trademarks are owned by Softimist or its licensors and are protected by intellectual property laws. Nothing in these Terms transfers ownership to you.',
        'Subject to your compliance with these Terms, we grant you a limited, revocable, non-exclusive, non-transferable licence to access and use the website for your internal business or personal purposes.',
      ],
    },
    {
      id: 'your-content',
      title: '5. Your Content',
      body: [
        'You retain ownership of any content you submit to us — including enquiry details, job applications, and material you upload to a platform we operate for you. You grant us a worldwide, non-exclusive, royalty-free licence to host, store, process, and transmit that content solely to provide and improve the services and to comply with law.',
        'You are responsible for ensuring you have the rights needed to submit that content and that it does not violate these Terms or any third-party rights.',
      ],
    },
    {
      id: 'feedback',
      title: '6. Feedback',
      body: [
        'If you send us ideas, suggestions, or feedback about our products, you grant us a perpetual, irrevocable, royalty-free right to use it without restriction or obligation to you. Please do not send us confidential information as feedback.',
      ],
    },
    {
      id: 'third-party',
      title: '7. Third-Party Services',
      body: [
        'Our website and products may link to or integrate with third-party services such as payment processors, DRM providers, analytics tools, and cloud infrastructure. We are not responsible for those services, and your use of them is governed by their own terms.',
      ],
    },
    {
      id: 'fees',
      title: '8. Fees and Payment',
      body: [
        'Paid services are invoiced according to the applicable order form or subscription plan. Unless stated otherwise, fees are exclusive of taxes, are payable in the currency stated on the invoice, and are non-refundable except where required by law or expressly agreed in writing. Late payments may result in suspension of the affected services.',
      ],
    },
    {
      id: 'availability',
      title: '9. Availability and Changes',
      body: [
        'We aim to keep our website and services available and performing well, and uptime commitments for licensed products are set out in the relevant agreement or service-level terms. We may modify, suspend, or discontinue any part of the website or a free offering at any time, and we will give reasonable notice of material changes affecting paid services where practicable.',
      ],
    },
    {
      id: 'disclaimer',
      title: '10. Disclaimer of Warranties',
      body: [
        'Except as expressly stated in a signed agreement, the website and services are provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory — including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the services will be uninterrupted, error-free, or free of harmful components.',
      ],
    },
    {
      id: 'liability',
      title: '11. Limitation of Liability',
      body: [
        'To the maximum extent permitted by law, Softimist and its directors, employees, and suppliers will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, data, goodwill, or business opportunity, arising out of or relating to your use of the website or services.',
        'Our total aggregate liability for all claims relating to the services will not exceed the greater of the amounts you paid us for the relevant service in the twelve months before the claim arose, or USD 100. Nothing in these Terms excludes liability that cannot be excluded under applicable law.',
      ],
    },
    {
      id: 'indemnity',
      title: '12. Indemnification',
      body: [
        'You agree to indemnify and hold Softimist harmless from claims, damages, liabilities, and reasonable legal costs arising from your breach of these Terms, your misuse of the services, or your violation of any law or third-party right.',
      ],
    },
    {
      id: 'termination',
      title: '13. Termination',
      body: [
        'We may suspend or terminate your access to the website or a free service at any time if you breach these Terms or if we reasonably believe your use poses a risk to us or others. Termination of paid services is governed by the relevant agreement. Sections that by their nature should survive termination — including intellectual property, disclaimers, limitation of liability, and governing law — will survive.',
      ],
    },
    {
      id: 'governing-law',
      title: '14. Governing Law and Disputes',
      body: [
        'These Terms are governed by the laws of Bangladesh, without regard to conflict-of-law rules. The courts of Dhaka, Bangladesh will have exclusive jurisdiction over any dispute arising out of or relating to these Terms, except that either party may seek injunctive relief in any competent court to protect its intellectual property.',
        'Before starting formal proceedings, we ask that you contact us so we can try to resolve the issue informally.',
      ],
    },
    {
      id: 'general',
      title: '15. General Terms',
      body: [
        'These Terms, together with any applicable order form or product agreement and our Privacy Policy, make up the entire agreement between you and Softimist regarding the website and services. If any provision is found unenforceable, the remaining provisions stay in effect. Our failure to enforce a provision is not a waiver of it. You may not assign these Terms without our written consent; we may assign them in connection with a merger, acquisition, or sale of assets.',
        'We may update these Terms from time to time. Material changes will be reflected in the "Last updated" date above, and continued use of the website after an update means you accept the revised Terms.',
      ],
    },
    {
      id: 'contact',
      title: '16. Contact Us',
      body: [
        `Questions about these Terms? Contact ${legalContact.company} at ${legalContact.email} or ${legalContact.phone}, or write to us at ${legalContact.address}.`,
      ],
    },
  ],
}
