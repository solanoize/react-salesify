export const BRAND_NAME =
  import.meta.env.VITE_BRAND_NAME || "React Sales Order";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const TOKEN_ACCESS = "access";
export const LOCAL_SESSION_KEY = "sessionID";
export const LOCAL_SESSION_ENGINE = localStorage;

export const SIGNIN_PATH = "/";
export const MAIN_PATH = "/dashboard";

export const ALWAYS_CHECKING_AUTH = true;

export const MODULE_CATEGORIES = {
  CUSTOMER_MANAGEMENT: "Customer Management",
  PRODUCT_MANAGEMENT: "Product Management",
  SALES_ORDER_PROCESSING: "Sales Order Processing",
  INVENTORY_MANAGEMENT: "Inventory Management",
  PAYMENT_PROCESSING: "Payment Processing",
  SHIPPING_AND_DELIVERY: "Shipping and Delivery",
  REPORTING_AND_ANALYTICS: "Reporting and Analytics",
  USER_MANAGEMENT: "User Management",
  NOTIFICATIONS: "Notifications",
  SETTINGS: "Settings",
  AUDIT_TRAIL: "Audit Trail",
  DISCOUNTS_AND_PROMOTIONS: "Discounts and Promotions",
  INTEGRATIONS: "Integrations",
  DOCUMENTATION: "Documentation",
  KNOWLEDGE_BASE: "Knowledge Base",
  TRAINING_AND_SUPPORT: "Training and Support",
  MISCELLANEOUS: "Miscellaneous",
  DEMO_TEST: "Demonstration Test",
};
