export interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  status: string;
  color: string;
  longDescription?: string;
  techStack?: string[];
  screenshots?: string[];
  benefits?: string[];
  pricing?: string;
}

export const products: Product[] = [
  {
    id: "garudaspace",
    name: "GarudaSpace",
    title: "E-commerce Phone Store Platform",
    description:
      "Modern e-commerce platform for phone retailers selling new and second-hand units. Integrated Duitku payments, Biteship shipping, IMEI-level stock tracking, and warranty management — all in one unified storefront and admin panel.",
    features: [
      "Product Catalog & Variants",
      "Duitku Payment Integration",
      "Biteship Shipping",
      "IMEI Stock Tracking",
      "Warranty Management",
      "Admin Panel",
    ],
    category: "E-commerce",
    status: "In Development",
    color: "#dc2626",
  },
  {
    id: "cleanics",
    name: "Cleanics",
    title: "Clinic Information System",
    description:
      "Complete healthcare management solution designed for modern medical practices. Streamline patient care, appointments, and clinic operations.",
    features: [
      "Patient Records",
      "Appointment Scheduling",
      "Prescription Management",
      "Billing System",
    ],
    category: "Healthcare",
    status: "Production Ready",
    color: "#13bfb5",
  },
  {
    id: "syncore",
    name: "Syncore",
    title: "ERP Solution",
    description:
      "Powerful ERP solution that integrates all business processes into one unified system. Optimize operations with intelligent automation.",
    features: [
      "Financial Management",
      "Inventory Control",
      "HR Management",
      "Analytics Dashboard",
    ],
    category: "Business",
    status: "Production Ready",
    color: "#60a5fa",
  },
  {
    id: "siretail",
    name: "SiRetail",
    title: "Retail Management Solution",
    description:
      "A comprehensive desktop application designed for modern retail businesses. Integrating Point of Sale (POS), attendance tracking, payroll management, and inventory control into a single powerful platform.",
    features: [
      "Point of Sales (POS)",
      "Attendance System",
      "Payroll Management",
      "Inventory Control",
      "Employee Management",
    ],
    category: "Retail Tech",
    status: "Production Ready",
    color: "#f97316",
  },
  {
    id: "belio",
    name: "Belio",
    title: "Core Business ERP",
    description:
      "A streamlined ERP system designed for small businesses, focusing on core operations. Simplify management of sales, purchasing, financial reporting, and payroll in one intuitive platform.",
    features: [
      "Sales Management",
      "Purchase Orders",
      "Financial Statements",
      "Employee Payroll",
    ],
    category: "Business Tech",
    status: "Production Ready",
    color: "#8b5cf6",
  },
  {
    id: "esalut",
    name: "eSalut",
    title: "UT Service Center System",
    description:
      "Comprehensive management platform for Universitas Terbuka Service Centers (Salut). Facilitating student administration, semester tuition payments, and academic support services.",
    features: [
      "Student Management",
      "Tuition Payments",
      "Academic Administration",
      "Service Tracking",
    ],
    category: "Education Tech",
    status: "Production Ready",
    color: "#e11d48",
  },
  {
    id: "lifetrack",
    name: "Lifetrack",
    title: "HRIS Mobile App",
    description:
      "Mobile-first Human Resource Information System (HRIS) designed for modern workforce management. Streamlining employee attendance, payroll processing, and leave management in one easy-to-use app.",
    features: [
      "GPS Attendance",
      "Payroll Slips",
      "Leave Management",
      "Employee Directory",
    ],
    category: "HR Tech",
    status: "Production Ready",
    color: "#0891b2",
  },
  {
    id: "schola",
    name: "Schola",
    title: "School Management System",
    description:
      "A comprehensive school management platform tailored for Indonesian educational institutions. Streamlining academic administration, student records, teacher management, and financial operations.",
    features: [
      "Student Information",
      "Academic Management",
      "Teacher Portal",
      "Tuition Payments",
      "Digital Attendance",
    ],
    category: "EdTech",
    status: "Production Ready",
    color: "#4f46e5",
  },
];
