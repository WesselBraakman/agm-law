export type Language = "en" | "gr";

export const translations = {
  nav: {
    home: { en: "Home", gr: "Αρχική" },
    firm: { en: "The Firm", gr: "Η Εταιρεία" },
    specialization: { en: "Specialization", gr: "Εξειδίκευση" },
    contact: { en: "Contact Us", gr: "Επικοινωνία" },
  },
  hero: {
    subtitle: {
      en: "A.G. Makris & Associates Law Firm",
      gr: "Α.Γ. Μακρής & Συνεργάτες Δικηγορική Εταιρεία",
    },
    tagline: {
      en: "Excellence in Legal Services since 1956",
      gr: "Αριστεία στις Νομικές Υπηρεσίες από το 1956",
    },
    cta: {
      en: "Get in Touch",
      gr: "Επικοινωνήστε",
    },
  },
  firm: {
    title: { en: "The Firm", gr: "Η Εταιρεία" },
    description: {
      en: "Continuing a family tradition started in 1956 by Georgios I. Makris, our firm has evolved into a dynamic legal practice under Andreas G. Makris. Based in Athens with a dedicated branch in Naxos, we provide high-quality personalized legal services. We consistently handle complex cases in the first and second instance courts as well as the Supreme Court of Greece, the Council of State, and the Court of Auditors.",
      gr: "Συνεχίζοντας μια οικογενειακή παράδοση που ξεκίνησε το 1956 από τον Γεώργιο Ι. Μακρή, η εταιρεία μας εξελίχθηκε σε μια δυναμική νομική πρακτική υπό τον Ανδρέα Γ. Μακρή. Με έδρα την Αθήνα και υποκατάστημα στη Νάξο, παρέχουμε εξατομικευμένες υπηρεσίες υψηλής ποιότητας, χειριζόμενοι σύνθετες υποθέσεις στον Άρειο Πάγο, το Συμβούλιο της Επικρατείας και το Ελεγκτικό Συνέδριο.",
    },
    teamTitle: { en: "Leadership", gr: "Ηγεσία" },
    members: [
      {
        name: { en: "Andreas G. Makris", gr: "Ανδρέας Γ. Μακρής" },
        role: { en: "Managing Partner", gr: "Διαχειριστής Εταίρος" },
        description: {
          en: "Founder of 'A.G. Makris and Associates' in 1989. For over three decades, he has successfully handled high-stakes litigation in Athens and across the Greek Periphery, representing clients before the country's highest judicial bodies since 1995.",
          gr: "Ιδρυτής του γραφείου 'Α.Γ. Μακρής και Συνεργάτες' το 1989. Για περισσότερες από τρεις δεκαετίες, χειρίζεται με επιτυχία σημαντικές υποθέσεις στην Αθήνα και την ελληνική περιφέρεια, εκπροσωπώντας πελάτες στα ανώτατα δικαστήρια από το 1995.",
        },
      },
      {
        name: { en: "Georgios I. Makris (1931-2011)", gr: "Γεώργιος Ι. Μακρής (1931-2011)" },
        role: { en: "Founding Legacy", gr: "Ιδρυτική Παρακαταθήκη" },
        description: {
          en: "The distinguished lawyer who established the family tradition in Thessaloniki in 1956. His commitment to reliability and legal excellence remains the cornerstone of our firm's current professional philosophy.",
          gr: "Ο διακεκριμένος δικηγόρος που ξεκίνησε την οικογενειακή παράδοση στη Θεσσαλονίκη το 1956. Η δέσμευσή του στην αξιοπιστία και τη νομική αριστεία παραμένει ο ακρογωνιαίος λίθος της επαγγελματικής μας φιλοσοφίας.",
        },
      },
    ],
  },
  specialization: {
    title: { en: "Specialization & Law Experience", gr: "Εξειδίκευση & Νομική Εμπειρία" },
    areas: [
      {
        title: { en: "Criminal Law", gr: "Ποινικό Δίκαιο" },
        icon: "Shield",
        description: {
          en: "Our firm handles all stages of criminal proceedings, from the initial investigation to representation in high courts. We specialize in Substantive and Procedural Criminal Law, with deep expertise in Financial Crime, white-collar offenses, and money laundering. We provide robust defense strategies for complex cases involving corporate fraud, tax evasion, and professional negligence, ensuring full protection of our clients' procedural rights.",
          gr: "Η εταιρεία μας αναλαμβάνει όλα τα στάδια της ποινικής διαδικασίας. Εξειδικευόμαστε στο Ουσιαστικό και Δικονομικό Ποινικό Δίκαιο, με ιδιαίτερη εμπειρία στο Οικονομικό Έγκλημα και τη νομιμοποίηση εσόδων. Παρέχουμε ισχυρή υπεράσπιση σε σύνθετες υποθέσεις εταιρικής απάτης, φοροδιαφυγής και επαγγελματικής αμέλειας, διασφαλίζοντας τα δικονομικά δικαιώματα των πελατών μας.",
        },
      },
      {
        title: { en: "Public Agreements", gr: "Δημόσιες Συμβάσεις" },
        icon: "FileText",
        description: {
          en: "We provide comprehensive legal support regarding Public Works, Supplies, and Services. Our services include the review of tender documents, legal monitoring of the bidding process, and representation in pre-judicial appeals and litigation before administrative courts. We assist clients in navigating the complex regulatory framework of public procurement to ensure compliance and successful project awarding.",
          gr: "Παρέχουμε ολοκληρωμένη νομική υποστήριξη σε Δημόσια Έργα, Προμήθειες και Υπηρεσίες. Οι υπηρεσίες μας περιλαμβάνουν τον έλεγχο τευχών δημοπράτησης, τη νομική παρακολούθηση της διαδικασίας ανάθεσης και την εκπροσώπηση σε προδικαστικές προσφυγές και δικαστικές διαφορές ενώπιον των διοικητικών δικαστηρίων.",
        },
      },
      {
        title: { en: "Commercial & Company Law", gr: "Εμπορικό Δίκαιο & Δίκαιο Εταιρειών" },
        icon: "Briefcase",
        description: {
          en: "Specialized services in company formation, transformation, and dissolution. We handle brand and trademark protection, bankruptcy law proceedings, and disputes arising from banking or stock market transactions. Our firm serves as a strategic advisor for businesses, managing everything from internal corporate governance and contract drafting to defending interests in complex commercial litigation and debt recovery.",
          gr: "Εξειδικευμένες υπηρεσίες στη σύσταση, μετατροπή και λύση εταιρειών. Χειριζόμαστε την προστασία σημάτων, διαδικασίες πτωχευτικού δικαίου και διαφορές από τραπεζικές ή χρηματιστηριακές συναλλαγές. Λειτουργούμε ως στρατηγικός σύμβουλος επιχειρήσεων, διαχειριζόμενοι την εταιρική διακυβέρνηση, τη σύνταξη συμβάσεων και την εκπροσώπηση σε εμπορικές δίκες.",
        },
      },
      {
        title: { en: "Indebted Households (L. 3869/2010)", gr: "Υπερχρεωμένα Νοικοκυριά (Ν. 3869/2010)" },
        icon: "HandCoins",
        description: {
          en: "Effective legal representation for debtors under Law 3869/2010 (Katseli Law). We manage the entire process of debt restructuring, from the extrajudicial attempt to the filing of applications and judicial settlement. Our goal is to protect our clients' primary residence and reorganize their financial obligations toward credit institutions, ensuring a viable financial future through structured legal remedies.",
          gr: "Αποτελεσματική νομική εκπροσώπηση οφειλετών βάσει του Ν. 3869/2010 (Νόμος Κατσέλη). Διαχειριζόμαστε τη διαδικασία ρύθμισης οφειλών, από την εξωδικαστική προσπάθεια έως την κατάθεση αιτήσεων και τη δικαστική ρύθμιση. Στόχος μας είναι η προστασία της κύριας κατοικίας και η αναδιοργάνωση των οικονομικών υποχρεώσεων προς τα πιστωτικά ιδρύματα.",
        },
      },
      {
        title: { en: "Civil Law", gr: "Αστικό Δίκαιο" },
        icon: "Scale",
        description: {
          en: "Our civil law practice covers the full spectrum of legal relations between individuals and entities. We handle property law (transfers and disputes), family law (divorce, custody, and adoption), and inheritance law (wills and succession). Additionally, we manage tort claims, breach of contract cases, and automotive accident compensation, providing both mediation services and vigorous representation in civil courts at all levels.",
          gr: "Η πρακτική μας στο αστικό δίκαιο καλύπτει όλο το φάσμα των έννομων σχέσεων. Χειριζόμαστε εμπράγματο δίκαιο (μεταβιβάσεις και διαφορές), οικογενειακό δίκαιο (διαζύγια, επιμέλεια) και κληρονομικό δίκαιο. Επιπλέον, διαχειριζόμαστε αξιώσεις από αδικοπραξίες, αθετήσεις συμβάσεων και αποζημιώσεις από τροχαία ατυχήματα.",
        },
      },
      {
        title: { en: "Environmental Law", gr: "Περιβαλλοντικό Δίκαιο" },
        icon: "Leaf",
        description: {
          en: "Navigating the rigorous framework of Greek and European environmental regulations. We provide legal guidance on environmental licensing, waste management compliance, and land use restrictions. Our firm represents clients in administrative disputes regarding environmental fines and challenges against acts that impact natural resources, balancing business development with mandatory ecological protection standards.",
          gr: "Καθοδήγηση στο αυστηρό πλαίσιο των ελληνικών και ευρωπαϊκών περιβαλλοντικών κανονισμών. Παρέχουμε συμβουλές για περιβαλλοντική αδειοδότηση, συμμόρφωση στη διαχείριση αποβλήτων και περιορισμούς χρήσης γης. Εκπροσωπούμε πελάτες σε διοικητικές διαφορές σχετικά με περιβαλλοντικά πρόστιμα.",
        },
      },
      {
        title: { en: "Compulsory Expropriations", gr: "Αναγκαστικές Απαλλοτριώσεις" },
        icon: "Gavel",
        description: {
          en: "Expertise in the specialized field of expropriation law for public utility purposes. we represent owners in judicial proceedings to determine fair unit prices for compensation and recognize beneficiaries. We handle cases involving urban planning expropriations and large-scale infrastructure projects, ensuring that property rights are respected and that clients receive the maximum compensation allowed by law.",
          gr: "Εξειδίκευση στον τομέα των απαλλοτριώσεων για λόγους δημόσιας ωφέλειας. Εκπροσωπούμε ιδιοκτήτες σε δικαστικές διαδικασίες για τον καθορισμό τιμής μονάδας αποζημίωσης και την αναγνώριση δικαιούχων. Χειριζόμαστε υποθέσεις ρυμοτομικών απαλλοτριώσεων και έργων υποδομής, διασφαλίζοντας τα περιουσιακά δικαιώματα.",
        },
      },
      {
        title: { en: "Regional Policy Law", gr: "Δίκαιο Περιφερειακής Πολιτικής" },
        icon: "Map",
        description: {
          en: "Advisory and litigation services regarding the legal framework of regional and local government administration. We handle cases involving decentralized administration, regional development programs, and legal issues arising from the 'Kallikratis' and 'Kleisthenes' administrative reforms. We support entities in complying with administrative regulations and navigating the legalities of local government decisions.",
          gr: "Συμβουλευτικές και δικαστικές υπηρεσίες σχετικά με το νομικό πλαίσιο της περιφερειακής και τοπικής αυτοδιοίκησης. Χειριζόμαστε υποθέσεις αποκεντρωμένης διοίκησης, προγράμματα περιφερειακής ανάπτυξης και νομικά ζητήματα που προκύπτουν από τις διοικητικές μεταρρυθμίσεις 'Καλλικράτης' και 'Κλεισθένης'.",
        },
      },
      {
        title: { en: "Labor Law", gr: "Εργατικό Δίκαιο" },
        icon: "Users",
        description: {
          en: "Comprehensive services for both individual and collective labor law. We represent clients in disputes involving illegal termination, unpaid wages, and workplace discrimination. Our firm provides ongoing advisory to businesses on employment contracts, workplace regulations, and compliance with social security legislation, while also defending employee rights in civil courts and before labor inspection authorities.",
          gr: "Ολοκληρωμένες υπηρεσίες στο ατομικό και συλλογικό εργατικό δίκαιο. Εκπροσωπούμε πελάτες σε διαφορές για καταγγελίες συμβάσεων, οφειλόμενους μισθούς και διακρίσεις στον εργασιακό χώρο. Παρέχουμε συμβουλές σε επιχειρήσεις για συμβάσεις εργασίας και συμμόρφωση με την ασφαλιστική νομοθεσία.",
        },
      },
      {
        title: { en: "Tax Law", gr: "Φορολογικό Δίκαιο" },
        icon: "Percent",
        description: {
          en: "Managing complex tax disputes and providing strategic tax planning. Our expertise includes representation before administrative tax authorities and courts for the annulment of tax assessments and fines. We advise on income tax, VAT, and real estate taxation, helping clients navigate the frequently changing Greek tax landscape while ensuring compliance and minimizing fiscal risks through established legal pathways.",
          gr: "Διαχείριση σύνθετων φορολογικών διαφορών και στρατηγικός φορολογικός σχεδιασμός. Η εμπειρία μας περιλαμβάνει εκπροσώπηση ενώπιον φορολογικών αρχών και δικαστηρίων για την ακύρωση φόρων και προστίμων. Συμβουλεύουμε για θέματα ΦΠΑ, φόρου εισοδήματος και φορολογίας ακινήτων.",
        },
      },
      {
        title: { en: "Land Registry", gr: "Κτηματολόγιο" },
        icon: "Landmark",
        description: {
          en: "Professional handling of all Land Registry (Ktimatologio) procedures. We manage the registration of rights, corrections of inaccurate initial registrations, and the resolution of boundary disputes through judicial or extrajudicial means. Our team ensures that our clients' property titles are accurately recorded and legally secured within the national cadastral system, preventing future ownership complications.",
          gr: "Επαγγελματικός χειρισμός όλων των διαδικασιών του Κτηματολογίου. Διαχειριζόμαστε την εγγραφή δικαιωμάτων, διορθώσεις ανακριβών πρώτων εγγραφών και επίλυση διαφορών ορίων. Διασφαλίζουμε ότι οι τίτλοι ιδιοκτησίας των πελατών μας είναι ακριβώς καταγεγραμμένοι και νομικά θωρακισμένοι.",
        },
      },
      {
        title: { en: "Tourism Enterprises Law", gr: "Δίκαιο Τουριστικών Επιχειρήσεων" },
        icon: "Globe",
        description: {
          en: "Specialized legal support for the tourism sector, a cornerstone of our practice in both Athens and Naxos. We assist in the licensing of hotels and tourist accommodations, the management of tourism-related contracts, and the navigation of investment laws. Our firm provides tailored advice for development projects in the Cyclades, ensuring compliance with special zoning laws and tourism-specific administrative regulations.",
          gr: "Εξειδικευμένη νομική υποστήριξη στον τουριστικό τομέα, ακρογωνιαίο λίθο της πρακτικής μας σε Αθήνα και Νάξο. Βοηθάμε στην αδειοδότηση ξενοδοχείων, τη διαχείριση τουριστικών συμβάσεων και την εφαρμογή επενδυτικών νόμων, με ιδιαίτερη έμφαση στις αναπτυξιακές δραστηριότητες στις Κυκλάδες.",
        },
      },
    ],
  },
  contact: {
    title: { en: "Contact Us", gr: "Επικοινωνία" },
    subtitle: {
      en: "We understand the concerns of our clients and support them toward success.",
      gr: "Κατανοούμε τις ανησυχίες των πελατών μας και τους υποστηρίζουμε για την επιτυχία.",
    },
    hours: { en: "Daily Hours", gr: "Ώρες Γραφείου" },
    hoursValue: {
      en: "Mon – Fri: 09:00 – 17:00 (Tue until 22:00)",
      gr: "Δευ – Παρ: 09:00 – 17:00 (Τρίτη έως 22:00)",
    },
    athensOffice: { en: "Athens Main Office", gr: "Κεντρικό Γραφείο Αθήνας" },
    athensAddress: {
      en: "3 Skilitsi Str., 10431 Athens, Greece",
      gr: "Σκυλίτση 3, 10431 Αθήνα, Ελλάδα",
    },
    cycladesOffice: { en: "Office in Cyclades Islands", gr: "Γραφείο Κυκλάδων" },
    cycladesAddress: {
      en: "Chora Naxou, 84300 Naxos, Greece",
      gr: "Χώρα Νάξου, 84300 Νάξος, Ελλάδα",
    },
    phone: { en: "Phone", gr: "Τηλέφωνο" },
    email: { en: "Email", gr: "Email" },
    formName: { en: "Full Name", gr: "Ονοματεπώνυμο" },
    formEmail: { en: "Email Address", gr: "Διεύθυνση Email" },
    formSubject: { en: "Subject", gr: "Θέμα" },
    formMessage: { en: "Message", gr: "Μήνυμα" },
    formSend: { en: "Send Message", gr: "Αποστολή Μηνύματος" },
    formSuccess: {
      en: "Your message has been sent successfully!",
      gr: "Το μήνυμά σας στάλθηκε επιτυχώς!",
    },
  },
  footer: {
    rights: {
      en: "© 2026 A.G. Makris & Associates Law Firm. All rights reserved.",
      gr: "© 2026 Α.Γ. Μακρής & Συνεργάτες Δικηγορική Εταιρεία. Με επιφύλαξη παντός δικαιώματος.",
    },
    privacy: { en: "Privacy Policy", gr: "Πολιτική Απορρήτου" },
    terms: { en: "Terms of Service", gr: "Όροι Χρήσης" },
  },
};

export function t(
  obj: { en: string; gr: string } | undefined,
  lang: Language
): string {
  if (!obj) return "";
  return obj[lang] || obj.en;
}