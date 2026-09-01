/**
 * ScanShield AI — Authentic Sample Legal Contracts Data
 * Pre-loaded contracts for instant 1-click enterprise demonstration.
 */

export const SAMPLE_CONTRACTS = [
  {
    id: "msa-enterprise",
    title: "Master Services Agreement (Enterprise SaaS)",
    type: "Enterprise MSA",
    complianceScore: 64,
    summary: "3 High Risks, 2 Medium Risks identified. Uncapped indemnification liability and broad IP assignment clauses require urgent redlining.",
    documentLines: [
      { line: 1, text: "MASTER SERVICES AGREEMENT", isHeader: true },
      { line: 2, text: "This Master Services Agreement ('Agreement') is entered into between Enterprise Corp ('Client') and Vendor Inc ('Provider')." },
      { line: 3, text: "1. SERVICES AND DELIVERABLES", isHeader: true },
      { line: 4, text: "1.1 Provider shall perform the professional software development and AI engineering services described in applicable Statements of Work ('SOW')." },
      { line: 5, text: "1.2 All deliverables shall conform strictly to the specifications and acceptance criteria outlined in the SOW." },
      { line: 6, text: "2. INTELLECTUAL PROPERTY RIGHTS", isHeader: true },
      { line: 7, text: "2.1 Provider assigns to Client all right, title, and interest in and to all deliverables, code, algorithms, and inventions created under this Agreement." },
      { line: 8, text: "2.2 Client shall retain sole ownership of all pre-existing client data, confidential models, and proprietary trade secrets." },
      { line: 9, text: "3. CONFIDENTIALITY AND SECURITY", isHeader: true },
      { line: 10, text: "3.1 Each party agrees to protect the Confidential Information of the other party with the same degree of care as its own confidential materials." },
      { line: 11, text: "3.2 Confidential Information shall not include information that is publicly known or independently developed without reference to the disclosing party's data." },
      { line: 12, text: "4. INDEMNIFICATION AND LIABILITY TRAPS", isHeader: true },
      { line: 13, text: "4.1 Client shall defend, indemnify, and hold harmless Provider from any and all third-party claims, damages, liabilities, losses, costs, and expenses (including attorneys' fees) arising out of or relating to Client's use of the Services or any breach of this Agreement." },
      { line: 14, text: "4.2 NEITHER PARTY SHALL BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. HOWEVER, PROVIDER'S TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED $1,000." },
      { line: 15, text: "5. TERMINATION AND GOVERNING LAW", isHeader: true },
      { line: 16, text: "5.1 Either party may terminate this Agreement upon thirty (30) days prior written notice. Client shall pay for all services rendered up to the effective termination date." },
      { line: 17, text: "5.2 This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to conflict of law principles." }
    ],
    risks: [
      {
        id: "risk-1",
        title: "Section 4.1: Uncapped One-Sided Client Indemnification",
        level: "high",
        line: 13,
        trap: "The current clause forces the Client to indemnify the Provider for 'ANY and ALL' third-party claims without any monetary cap or negligence exception, exposing your company to unlimited financial liability.",
        redline: "Client agrees to indemnify Provider against direct third-party claims arising solely from Client's gross negligence or willful misconduct, subject to the overall limitation of liability in Section 4.2."
      },
      {
        id: "risk-2",
        title: "Section 4.2: Asymmetric $1,000 Liability Cap for Provider",
        level: "high",
        line: 14,
        trap: "Provider caps their liability at a nominal $1,000 while leaving Client's indemnification liability completely uncapped. This imbalance severely favors the Provider during security or service breaches.",
        redline: "Each party's total aggregate liability under this Agreement shall be limited to the total fees paid or payable by Client to Provider in the twelve (12) months preceding the claim."
      },
      {
        id: "risk-3",
        title: "Section 2.1: Missing Carve-Out for Provider Pre-Existing Background IP",
        level: "high",
        line: 7,
        trap: "Broad assignment language assigns 'all algorithms and inventions' without explicitly carving out Provider's pre-existing software architecture or reusable AI tools.",
        redline: "Subject to full payment of fees, Provider assigns Deliverables created specifically for Client, excluding Provider's pre-existing Background IP, frameworks, and reusable developer utility tools."
      },
      {
        id: "risk-4",
        title: "Section 5.1: Abrupt 30-Day Termination Notice Period",
        level: "medium",
        line: 16,
        trap: "A 30-day termination window may not allow sufficient operational buffer to transition mission-critical software workflows to an alternative vendor.",
        redline: "Either party may terminate this Agreement upon sixty (60) days prior written notice, during which Provider shall provide reasonable transition assistance."
      },
      {
        id: "risk-5",
        title: "Section 3.1: Omission of Data Breach Notification SLA",
        level: "medium",
        line: 10,
        trap: "The confidentiality clause lacks a mandatory timeline (e.g. 24-48 hours) requiring Provider to notify Client upon discovering a security or data breach.",
        redline: "In the event of a security incident or unauthorized access to Client Data, Provider shall notify Client in writing within twenty-four (24) hours of confirmation."
      }
    ]
  },
  {
    id: "nda-vendor",
    title: "Mutual Non-Disclosure Agreement (Vendor Standard)",
    type: "Vendor NDA",
    complianceScore: 82,
    summary: "1 High Risk, 1 Medium Risk identified. Non-solicitation term and definition of confidential information require adjustment.",
    documentLines: [
      { line: 1, text: "MUTUAL NON-DISCLOSURE AGREEMENT", isHeader: true },
      { line: 2, text: "This Agreement governs the disclosure of confidential information between Disclosing Party and Receiving Party." },
      { line: 3, text: "1. SCOPE OF CONFIDENTIAL INFORMATION", isHeader: true },
      { line: 4, text: "1.1 Confidential Information includes all financial, technical, customer, and proprietary data marked as confidential." },
      { line: 5, text: "2. NON-SOLICITATION AND REMEDIES", isHeader: true },
      { line: 6, text: "2.1 Receiving Party agrees not to solicit, hire, or engage any employee or contractor of Disclosing Party for a period of three (3) years." },
      { line: 7, text: "2.2 In the event of a breach, Disclosing Party shall be entitled to immediate injunctive relief without the necessity of posting a bond." }
    ],
    risks: [
      {
        id: "nda-risk-1",
        title: "Section 2.1: Excessive 3-Year Employee Non-Solicitation",
        level: "high",
        line: 6,
        trap: "A 3-year non-solicitation restriction is overly restrictive for a standard commercial NDA and may impede routine hiring or general job postings.",
        redline: "Neither party shall directly solicit for employment any core engineering staff of the other party during the term of this Agreement and for twelve (12) months thereafter."
      },
      {
        id: "nda-risk-2",
        title: "Section 2.2: Unilateral Waiver of Injunction Bond Requirement",
        level: "medium",
        line: 7,
        trap: "Waiving the requirement for a bond when seeking injunctive relief removes a legal safeguard against frivolous restraining orders.",
        redline: "Disclosing Party may seek injunctive relief from a court of competent jurisdiction upon demonstrating irreparable harm and complying with standard evidentiary requirements."
      }
    ]
  }
];
