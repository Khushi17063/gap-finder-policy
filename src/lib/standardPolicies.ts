// Standard policies data structure with comprehensive coverage across all domains

export interface PolicyStructure {
  domain: string;
  sections: PolicySection[];
}

export interface PolicySection {
  title: string;
  clauses: PolicyClause[];
}

export interface PolicyClause {
  title: string;
  content: string;
}

export const StandardPolicies: PolicyStructure[] = [
  {
    domain: "Domain-1: Legal & Compliance Policies",
    sections: [
      {
        title: "Section-1: CONFIDENTIALITY POLICY (NDA)",
        clauses: [
          {
            title: "Clause-1: DEFINITION OF CONFIDENTIAL INFORMATION",
            content: "Confidential Information includes all information disclosed by the Company that is designated as confidential or would reasonably be understood to be confidential based on the nature of the information and circumstances of disclosure. This includes but is not limited to: trade secrets, know-how, business strategies, customer lists, financial data, product roadmaps, and personnel information."
          },
          {
            title: "Clause-2: CONFIDENTIALITY OBLIGATIONS",
            content: "(a) The recipient must maintain all Confidential Information in strict confidence for a period of three (3) years from disclosure.\n(b) Recipient may only use Confidential Information for the purpose of business evaluation or collaboration as initially disclosed.\n(c) Recipient must limit access to Confidential Information to employees, contractors, and agents who have a need to know and who are bound by similar confidentiality obligations.\n(d) Recipient must use at least the same degree of care to protect Confidential Information as it uses its own confidential information, but no less than reasonable care."
          },
          {
            title: "Clause-3: EXCLUSIONS",
            content: "This policy does not apply to information that:\n(a) Was in recipient's possession before receipt from the Company;\n(b) Is or becomes publicly available through no fault of recipient;\n(c) Is rightfully received by recipient from a third party without a duty of confidentiality;\n(d) Is independently developed by recipient without use of Confidential Information;\n(e) Is required to be disclosed by operation of law, court order, or governmental regulation."
          },
          {
            title: "Clause-4: RETURN OF MATERIALS",
            content: "Upon request or termination of the business relationship, recipient must:\n(a) Return all physical materials containing Confidential Information within 14 days\n(b) Permanently delete all electronic copies of Confidential Information\n(c) Provide written certification of compliance with these requirements\n(d) Cease all use of Confidential Information\n(e) Ensure any third parties with authorized access also comply with these requirements"
          },
          {
            title: "Clause-5: BREACH REMEDIES",
            content: "(a) Any breach of this policy may result in immediate termination of the business relationship\n(b) The Company may seek injunctive relief in addition to monetary damages\n(c) Breaching party shall be liable for all reasonable legal fees and costs\n(d) Liquidated damages may be specified in separate agreements\n(e) The Company reserves the right to pursue criminal charges where applicable"
          },
          {
            title: "Clause-6: SURVIVAL",
            content: "The obligations under this policy shall survive the termination of any business relationship between the parties and continue for the period specified in Clause-2 or as required by applicable law, whichever is longer."
          }
        ]
      },
      {
        title: "Section-2: STANDARD DATA PRIVACY POLICY",
        clauses: [
          {
            title: "Clause-1: DATA COLLECTION AND USE",
            content: "(a) We collect only the minimum personal data necessary to provide our services.\n(b) Standard data collected includes: contact information, account credentials, transaction data, and usage information.\n(c) Personal data is used only for: providing and improving our services, communication with users, fraud prevention, and legal compliance.\n(d) We process data based on: contract performance, legal obligations, legitimate interests, and explicit consent where required."
          },
          {
            title: "Clause-2: DATA RETENTION AND DELETION",
            content: "(a) Personal data is retained only as long as necessary for the purposes collected.\n(b) Standard retention periods:\n    • Account information: Duration of the account plus 2 years\n    • Transaction data: 7 years (for tax and accounting purposes)\n    • Communication records: 3 years\n    • Usage logs: 13 months\n(c) Upon valid deletion request, data will be deleted or anonymized within 30 days unless legal retention requirements apply."
          },
          {
            title: "Clause-3: DATA SECURITY MEASURES",
            content: "(a) Implementation of industry-standard security measures including:\n    • Encryption at rest and in transit\n    • Access controls and authentication\n    • Regular security assessments and audits\n    • Incident response procedures\n(b) Employee training on data protection\n(c) Regular updates to security protocols\n(d) Vendor security assessments"
          }
        ]
      },
      {
        title: "Section-3: INTELLECTUAL PROPERTY POLICY",
        clauses: [
          {
            title: "Clause-1: OWNERSHIP OF IP",
            content: "All intellectual property created by employees during their employment, using company resources, or related to company business belongs to the company. This includes but is not limited to: inventions, designs, code, documentation, processes, methodologies, and trade secrets."
          },
          {
            title: "Clause-2: THIRD-PARTY IP",
            content: "Employees must respect third-party intellectual property rights. No unauthorized use of copyrighted materials, trademarks, or patented inventions. All necessary licenses and permissions must be obtained before use."
          }
        ]
      }
    ]
  },
  {
    domain: "Domain-2: Human Resources (HR) & People Policies",
    sections: [
      {
        title: "Section-1: STANDARD LEAVE AND ATTENDANCE POLICY",
        clauses: [
          {
            title: "Clause-1: PAID TIME OFF (PTO)",
            content: "(a) Annual PTO Entitlement:\n    • 0-2 years of service: 15 days per year\n    • 3-5 years of service: 18 days per year\n    • 6+ years of service: 20 days per year\n(b) Accrual and Carryover:\n    • PTO accrues monthly on a pro-rata basis\n    • Maximum carryover: 5 days to next calendar year\n    • Unused PTO exceeding carryover paid out at year-end\n(c) Requesting PTO:\n    • Requests submitted minimum 2 weeks in advance\n    • Approval based on business needs and staffing\n    • Conflicts resolved based on request timing and seniority"
          },
          {
            title: "Clause-2: SICK LEAVE",
            content: "(a) Allocation:\n    • 10 days (80 hours) of paid sick leave annually\n    • Accrual of 0.83 days per month\n    • No carryover; unused sick leave expires at year-end\n(b) Usage:\n    • Personal illness or injury\n    • Medical appointments\n    • Care for immediate family members\n    • Medical documentation required for absences exceeding 3 consecutive days"
          },
          {
            title: "Clause-3: PARENTAL LEAVE",
            content: "(a) Primary Caregiver Leave:\n    • Up to 12 weeks of paid leave at 100% salary\n    • Additional 12 weeks unpaid leave available\n    • Must be taken within 12 months of birth/adoption\n(b) Secondary Caregiver Leave:\n    • Up to 4 weeks of paid leave at 100% salary\n    • Additional 8 weeks unpaid leave available\n(c) Eligibility:\n    • Must be employed for minimum 12 months\n    • Advance notice required when possible"
          }
        ]
      },
      {
        title: "Section-2: STANDARD EQUAL OPPORTUNITY AND ANTI-DISCRIMINATION POLICY",
        clauses: [
          {
            title: "Clause-1: EQUAL EMPLOYMENT OPPORTUNITY",
            content: "(a) Protected Characteristics:\n    • Race, color, ethnicity, national origin\n    • Sex, gender, gender identity, sexual orientation\n    • Age (40 and over)\n    • Disability (physical or mental)\n    • Religion or creed\n    • Pregnancy and related medical conditions\n    • Genetic information\n    • Military or veteran status\n    • Any other characteristic protected by applicable law\n(b) Protected Activities:\n    • All aspects of employment including hiring, promotion, discipline, compensation, benefits, and termination\n    • All company-sponsored events and activities\n    • All facilities and work locations"
          },
          {
            title: "Clause-2: HARASSMENT PREVENTION",
            content: "(a) Prohibited Conduct:\n    • Verbal harassment (slurs, jokes, threats)\n    • Physical harassment\n    • Visual harassment (offensive images)\n    • Sexual harassment\n(b) Reporting Procedures:\n    • Multiple reporting channels available\n    • Protection against retaliation\n    • Confidential investigation process\n(c) Disciplinary Actions:\n    • Up to and including termination\n    • Immediate action for serious violations"
          }
        ]
      },
      {
        title: "Section-3: PERFORMANCE MANAGEMENT",
        clauses: [
          {
            title: "Clause-1: PERFORMANCE REVIEW CYCLE",
            content: "Regular performance reviews conducted bi-annually. Reviews include: goal setting, competency assessment, development planning, and performance rating. 360-degree feedback collected from peers, supervisors, and direct reports."
          },
          {
            title: "Clause-2: COMPENSATION & BENEFITS",
            content: "Annual salary reviews based on performance ratings, market conditions, and company performance. Benefits include: health insurance, retirement plans, professional development allowance, and wellness programs."
          }
        ]
      }
    ]
  },
  {
    domain: "Domain-3: Code of Conduct & Ethics Policies",
    sections: [
      {
        title: "Section-1: STANDARD CODE OF CONDUCT",
        clauses: [
          {
            title: "Clause-1: CORE PRINCIPLES",
            content: "(a) Integrity:\n    • Act honestly and ethically in all business dealings\n    • Avoid making misleading statements or omissions\n    • Follow both the letter and spirit of applicable laws\n    • Speak up about potential misconduct\n(b) Respect:\n    • Treat all individuals with dignity and respect\n    • Value diversity of backgrounds, experiences, and perspectives\n    • Maintain a workplace free from harassment and discrimination\n    • Listen to and consider different viewpoints"
          },
          {
            title: "Clause-2: CONFLICTS OF INTEREST",
            content: "(a) Definition:\n    • Any situation where personal interests conflict with company duties\n    • Relationships with competitors, suppliers, or customers\n    • Outside business activities\n    • Financial investments in competing businesses\n(b) Disclosure Requirements:\n    • Immediate disclosure to management\n    • Annual conflict of interest declarations\n    • Updates when circumstances change"
          }
        ]
      },
      {
        title: "Section-2: ANTI-CORRUPTION AND BRIBERY",
        clauses: [
          {
            title: "Clause-1: PROHIBITED PRACTICES",
            content: "Zero tolerance for bribery and corruption. Employees must not offer, promise, or accept bribes, kickbacks, or improper payments. This applies to dealings with public officials, private sector partners, and any other stakeholders."
          },
          {
            title: "Clause-2: GIFT AND ENTERTAINMENT POLICY",
            content: "Gifts and entertainment must be reasonable, appropriate, and in line with local customs and laws. Must not influence or appear to influence business decisions. All gifts above $100 must be reported to compliance."
          }
        ]
      }
    ]
  },
  {
    domain: "Domain-4: Technology & Information Security Policies",
    sections: [
      {
        title: "Section-1: STANDARD ACCEPTABLE USE POLICY",
        clauses: [
          {
            title: "Clause-1: ACCEPTABLE USE OF TECHNOLOGY RESOURCES",
            content: "(a) Authorized Uses:\n    • Business activities related to job responsibilities\n    • Professional development relevant to company role\n    • Limited personal use during breaks or lunch periods\n    • Communication with colleagues and business partners\n(b) System Access:\n    • Access only systems and data necessary for job function\n    • Use only assigned accounts and credentials\n    • Lock workstations when unattended (Ctrl+Alt+Del or Win+L)\n    • Log off shared systems when work is completed"
          },
          {
            title: "Clause-2: PROHIBITED ACTIVITIES",
            content: "(a) Security Violations:\n    • Sharing passwords or access credentials\n    • Circumventing security measures\n    • Installing unauthorized software\n    • Accessing systems without authorization\n(b) Inappropriate Content:\n    • Accessing or sharing offensive material\n    • Personal business activities\n    • Illegal downloads or copyright violations\n    • Excessive personal use of resources"
          }
        ]
      },
      {
        title: "Section-2: STANDARD CYBERSECURITY POLICY",
        clauses: [
          {
            title: "Clause-1: SECURITY CONTROLS FRAMEWORK",
            content: "(a) Defense in Depth:\n    • Multi-layered security controls at network, system, application, and data levels\n    • Redundant security mechanisms to prevent single points of failure\n    • Regular testing of security control effectiveness\n    • Annual review and update of control framework\n(b) Access Control:\n    • Role-based access control (RBAC)\n    • Regular access reviews\n    • Least privilege principle\n    • Strong password requirements"
          },
          {
            title: "Clause-2: INCIDENT RESPONSE",
            content: "(a) Response Procedures:\n    • Immediate reporting of security incidents\n    • Incident classification and escalation\n    • Documentation requirements\n    • Post-incident analysis\n(b) Business Continuity:\n    • Regular backup procedures\n    • Disaster recovery testing\n    • Alternative processing facilities\n    • Emergency communication plans"
          }
        ]
      },
      {
        title: "Section-3: DATA CLASSIFICATION AND HANDLING",
        clauses: [
          {
            title: "Clause-1: DATA CLASSIFICATION LEVELS",
            content: "Data classified into: Public, Internal, Confidential, and Restricted. Each level has specific handling, storage, and transmission requirements. Classification based on sensitivity and potential impact of unauthorized disclosure."
          },
          {
            title: "Clause-2: ENCRYPTION STANDARDS",
            content: "All confidential and restricted data must be encrypted in transit and at rest. Minimum encryption standards: AES-256 for data at rest, TLS 1.2 or higher for data in transit. Regular encryption key rotation required."
          }
        ]
      }
    ]
  },
  {
    domain: "Domain-5: Operations & Administrative Policies",
    sections: [
      {
        title: "Section-1: STANDARD ASSET MANAGEMENT POLICY",
        clauses: [
          {
            title: "Clause-1: ASSET CLASSIFICATION",
            content: "(a) Asset Categories:\n    • Information assets (data, documents, intellectual property)\n    • Software assets (applications, systems, licenses)\n    • Physical assets (computers, phones, equipment)\n    • Infrastructure assets (servers, network devices)\n(b) Asset Lifecycle:\n    • Acquisition and registration\n    • Deployment and use\n    • Maintenance and updates\n    • Disposal and decommissioning"
          },
          {
            title: "Clause-2: ASSET RESPONSIBILITY",
            content: "(a) Ownership and Custody:\n    • Asset owners' responsibilities\n    • Custodian duties\n    • User obligations\n    • Transfer procedures\n(b) Asset Protection:\n    • Physical security measures\n    • Environmental controls\n    • Insurance requirements\n    • Regular audits"
          }
        ]
      },
      {
        title: "Section-2: PROCUREMENT POLICY",
        clauses: [
          {
            title: "Clause-1: PROCUREMENT PROCESS",
            content: "(a) Purchase Authorization:\n    • Approval thresholds\n    • Required documentation\n    • Vendor selection criteria\n    • Competitive bidding requirements\n(b) Vendor Management:\n    • Vendor evaluation process\n    • Performance monitoring\n    • Contract review procedures\n    • Risk assessment requirements"
          }
        ]
      },
      {
        title: "Section-3: BUSINESS CONTINUITY",
        clauses: [
          {
            title: "Clause-1: DISASTER RECOVERY",
            content: "Comprehensive disaster recovery plans for critical business functions. Regular testing and updates required. Maximum recovery time objectives (RTO) defined for each system. Backup systems and redundant infrastructure maintained."
          },
          {
            title: "Clause-2: CRISIS MANAGEMENT",
            content: "Crisis management team structure and responsibilities defined. Communication protocols established. Regular crisis simulation exercises conducted. Incident response procedures documented and tested."
          }
        ]
      }
    ]
  },
  {
    domain: "Domain-6: Finance & Accounting Policies",
    sections: [
      {
        title: "Section-1: FINANCIAL CONTROLS",
        clauses: [
          {
            title: "Clause-1: APPROVAL AUTHORITY",
            content: "Defined approval limits for financial transactions. Dual control principle for high-value transactions. Segregation of duties between transaction initiation, approval, and recording. Regular review of authority matrix."
          },
          {
            title: "Clause-2: EXPENSE MANAGEMENT",
            content: "Clear guidelines for business expenses. Required documentation and approval workflows. Corporate credit card usage rules. Monthly reconciliation and audit procedures."
          }
        ]
      },
      {
        title: "Section-2: FINANCIAL REPORTING",
        clauses: [
          {
            title: "Clause-1: REPORTING STANDARDS",
            content: "Adherence to applicable accounting standards (GAAP/IFRS). Monthly, quarterly, and annual reporting cycles. Internal control framework for financial reporting. Independent audit requirements."
          },
          {
            title: "Clause-2: TAX COMPLIANCE",
            content: "Tax planning and compliance procedures. Documentation requirements for tax positions. Transfer pricing policies. Regular tax risk assessment and mitigation."
          }
        ]
      }
    ]
  },
  {
    domain: "Domain-7: Environmental, Health & Safety Policies",
    sections: [
      {
        title: "Section-1: WORKPLACE SAFETY",
        clauses: [
          {
            title: "Clause-1: SAFETY STANDARDS",
            content: "Mandatory safety training for all employees. Personal protective equipment requirements. Incident reporting procedures. Regular safety audits and inspections."
          },
          {
            title: "Clause-2: EMERGENCY RESPONSE",
            content: "Emergency evacuation procedures. First aid and medical emergency protocols. Fire safety requirements. Regular emergency drills and training."
          }
        ]
      },
      {
        title: "Section-2: ENVIRONMENTAL MANAGEMENT",
        clauses: [
          {
            title: "Clause-1: ENVIRONMENTAL IMPACT",
            content: "Environmental impact assessment procedures. Waste management and recycling programs. Energy efficiency initiatives. Carbon footprint reduction targets."
          },
          {
            title: "Clause-2: COMPLIANCE",
            content: "Environmental compliance monitoring. Required permits and licenses. Regular environmental audits. Reporting of environmental incidents."
          }
        ]
      }
    ]
  }
];
