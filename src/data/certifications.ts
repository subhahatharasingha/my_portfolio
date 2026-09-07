export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  image?: string;
}

export const certificationsData: Certification[] = [
  {
    title: "Blockchain Developer Training",
    issuer: "Simplilearn",
    date: "August 2026",
    skills: ["Blockchain"],
    image: "images/certificates/blockchain.png"
  },
  {
    title: "Introduction to Google Go Programming",
    issuer: "Alison",
    date: "July 2026",
    credentialId: "4930-53568661",
    credentialUrl: "https://alison.com/verify/f750ee349a",
    skills: ["Go (Programming Language)"],
    image: "images/certificates/Go.png"
  },
  {
    title: "Introduction to Mobile App Development With Flutter",
    issuer: "Alison",
    date: "November 2025",
    credentialId: "3917-53568661",
    credentialUrl: "https://alison.com/verify/408e4108e2",
    skills: ["Flutter"],
    image: "images/certificates/mobileapp.png"
  },
  {
    title: "Introduction to AWS",
    issuer: "DataFlair",
    date: "March 2026",
    credentialId: "814DA64B9C-7A5154B297-75A96AB2ED",
    skills: ["Amazon Web Services (AWS)"],
    image: "images/certificates/aws.png"
  }
];
