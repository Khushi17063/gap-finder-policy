
// This file would contain the standard policies data structure
// In a real implementation, this would be populated from the database or API
// For now, we'll include a subset of the policies from the images provided

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
            content: "Upon request or termination of the business relationship, recipient must return or destroy all Confidential Information in its possession within 14 days and certify compliance in writing."
          },
          {
            title: "Clause-5: BREACH REMEDIES",
            content: "Any breach of this policy may result in irreparable harm entitling the Company to injunctive relief in addition to monetary damages."
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
          }
        ]
      },
      {
        title: "Section-2: STANDARD EQUAL OPPORTUNITY AND ANTI-DISCRIMINATION POLICY",
        clauses: [
          {
            title: "Clause-1: EQUAL EMPLOYMENT OPPORTUNITY",
            content: "(a) Protected Characteristics:\n    • Race, color, ethnicity, national origin\n    • Sex, gender, gender identity, sexual orientation\n    • Age (40 and over)\n    • Disability (physical or mental)\n    • Religion or creed\n    • Pregnancy and related medical conditions\n    • Genetic information\n    • Military or veteran status\n    • Any other characteristic protected by applicable law\n(b) Protected Activities:\n    • All aspects of employment including hiring, promotion, discipline, compensation, benefits, and termination\n    • All company-sponsored events and activities\n    • All facilities and work locations"
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
          }
        ]
      },
      {
        title: "Section-2: STANDARD CYBERSECURITY POLICY",
        clauses: [
          {
            title: "Clause-1: SECURITY CONTROLS FRAMEWORK",
            content: "(a) Defense in Depth:\n    • Multi-layered security controls at network, system, application, and data levels\n    • Redundant security mechanisms to prevent single points of failure\n    • Regular testing of security control effectiveness\n    • Annual review and update of control framework"
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
            content: "(a) Asset Categories:\n    • Information assets (data, documents, intellectual property)\n    • Software assets (applications, systems, licenses)\n    • Physical assets (computers, phones, equipment)\n    • Infrastructure assets (servers, network devices)"
          }
        ]
      }
    ]
  }
];
