import Images from "../Helper/ImgConstant";

export const projectData = [
  {
    id: 1,
    title: "LandPricer",
    overview:
      "LandPricer is a real estate valuation platform designed to streamline property assessment, subscription management, and payment flows. The project includes multiple user-facing screens such as onboarding, authentication, dashboards, workflow tools, and billing sections.",

    images: [
      // -------------------------- LOGIN ------------------------------
      {
        heading: "Login Page",
        src: Images.LANDPRICER_LOGIN_IMG,
        text: "The login screen allows users to securely sign into the platform. It provides email and password inputs with a clean layout. Additional hints and validations guide the user. The screen is optimized for mobile and web responsiveness with smooth transitions.",
      },
      {
        heading: "Login Error Page",
        src: Images.LANDPRICER_LOGIN_ERROR_PAGE_IMG,
        text: "Displays informative error messages when authentication fails. Shows incorrect password or invalid email notifications. Highlights fields that need correction. Encourages quick recovery with helpful UI hints.",
      },

      // -------------------------- SIGNUP / REGISTER ------------------------------
      {
        heading: "Create Account",
        src: Images.LANDPRICER_CREATE_ACCOUNT_PAGE_IMG,
        text: "A simple account creation form for new users with essential inputs such as name, email, and password. The clean UI reduces cognitive load and ensures smooth entry into the platform ecosystem.",
      },
      {
        heading: "Create Password",
        src: Images.LANDPRICER_CREATE_PASSWORD_IMG,
        text: "Guides users to create a secure password with strength indicators. Offers helpful tooltips for strong credentials and supports best security practices throughout the setup.",
      },
      {
        heading: "Create New Password",
        src: Images.LANDPRICER_CREATE_NEW_PASSWORD_IMG,
        text: "Used during password reset workflow. The form requires password confirmation and offers clear instructions to avoid mismatches. Validations ensure strong account security.",
      },
      {
        heading: "Password Reset Success",
        src: Images.LANDPRICER_CREATE_NEW_PASSWORD_DONE_IMG,
        text: "Confirms successful password creation with a clear visual indicator. Includes a next-step call to action and guides the user to log in with their new password.",
      },
      {
        heading: "Registration",
        src: Images.LANDPRICER_REGESTRATION_IMG,
        text: "A structured user registration flow that captures important user inputs clearly. Designed to increase sign-up conversions while supporting easy navigation for new users.",
      },

      // -------------------------- OTP / VERIFICATION ------------------------------
      {
        heading: "Recover Password – OTP",
        src: Images.LANDPRICER_RECOVER_PASSWORD_OTP_IMG,
        text: "OTP input fields displayed in a clean 4-digit or 6-digit layout. Includes resend options and ensures secure identity verification through multi-step authentication.",
      },

      // -------------------------- RECOVER / RESET ------------------------------
      {
        heading: "Recover Password",
        src: Images.LANDPRICER_RECOVER_PASSWORD_IMG,
        text: "Initial recovery screen prompting the user to enter an email for reset instructions. Offers helpful guidance text and ensures a smooth, secure recovery experience.",
      },
      {
        heading: "Recover Password – Step 2",
        src: Images.LANDPRICER_RECOVER_PASSWORD1_IMG,
        text: "Second step in the password recovery workflow. Provides clarity on OTP verification or new password creation with clean visuals that enhance user confidence.",
      },

      // -------------------------- HOME ------------------------------
      {
        heading: "Home Screen",
        src: Images.LANDPRICER_HOME_IMG,
        text: "Main dashboard showing key insights and quick actions. Designed with modern layout and readability, serving as the central hub for user activity.",
      },
      {
        heading: "Home Screen – Layout 2",
        src: Images.LANDPRICER_HOME2_IMG,
        text: "An alternate dashboard layout offering more analytics and widgets. Provides quick access to major tools, ideal for users handling frequent data operations.",
      },
      {
        heading: "Initial Screen",
        src: Images.LANDPRICER_INITIAL_SCREEN_IMG,
        text: "The first landing screen during onboarding. Introduces the platform with minimal UI to help new users navigate easily while establishing strong brand trust.",
      },
      {
        heading: "Completion Screen",
        src: Images.LANDPRICER_COMPLETE_PAGE_IMG,
        text: "Displayed after completing a workflow step. Offers confirmation visuals and clear action buttons to guide users forward with confidence.",
      },

      // -------------------------- PROFILE ------------------------------
      {
        heading: "User Profile",
        src: Images.LANDPRICER_MY_PROFILE_IMG,
        text: "Profile management screen showcasing user details. Allows editing of personal info, subscription status, and account settings in a clean layout.",
      },

      // -------------------------- WORKFLOW / TOOLS ------------------------------
      {
        heading: "Active Chat",
        src: Images.LANDPRICER_ARICIVECHAT_IMG,
        text: "Integrated chat interface for communication. Displays threads clearly, includes actions such as archive or reply, and enhances workflow productivity.",
      },
      {
        heading: "Edit Response",
        src: Images.LANDPRICER_EDIT_RESPONSE_IMG,
        text: "Screen for editing automatic or saved responses. Allows previewing, modifying text, and formatting while keeping the workflow fast and organized.",
      },
      {
        heading: "Edit Screen",
        src: Images.LANDPRICER_EDIT_SCREEN_IMG,
        text: "A general editing interface allowing users to adjust settings or content. Sidebar layout ensures easy navigation and efficient content adjustments.",
      },
      {
        heading: "Multiple Options Screen",
        src: Images.LANDPRICER_SCREEN_WITH_MULTIPLEOPTION_IMG,
        text: "Presents users with multiple decision options via visually separated cards. Helps guide workflow choices while maintaining UI simplicity.",
      },
      {
        heading: "Input Option Screen",
        src: Images.LANDPRICER_SCREEN_WITH_INPUTSCREEN_IMG,
        text: "Structured input fields designed for detailed data entry. Provides clarity, spacing, and labels to simplify the information submission process.",
      },
      {
        heading: "Get Funding",
        src: Images.LANDPRICER_GET_FUNDING_IMG,
        text: "Funding request interface with clear input fields. Simplifies the application process and provides clear instructions to improve completion rates.",
      },
      {
        heading: "Get Funding – Alternate",
        src: Images.LANDPRICER_GET_FUNDIND_IMG,
        text: "An alternate funding screen layout focusing on simplicity. Includes strong call-to-action buttons and intuitive navigation design.",
      },

      // -------------------------- BILLING / PAYMENT ------------------------------
      {
        heading: "Add Payment Method",
        src: Images.LANDPRICER_ADD_PAYMENT_IMG,
        text: "Allows users to enter new payment methods securely. Includes validation fields and supports adding multiple billing options smoothly.",
      },
      {
        heading: "Change Payment Method",
        src: Images.LANDPRICER_CHANGE_PAYMENT_IMG,
        text: "Lets users update existing payment options. Highlights active and inactive methods, offering clarity while managing billing preferences.",
      },
      {
        heading: "Payment Details",
        src: Images.LANDPRICER_PAYMENT_DETAIL_IMG,
        text: "Shows invoice summaries and billing records. Structured for clarity and easy scanning, helping users understand their payments quickly.",
      },
      {
        heading: "Payment Details – Layout 2",
        src: Images.LANDPRICER_PAYMENT_DETAIL_IMG1,
        text: "An alternate, more structured layout displaying payment metadata clearly. Designed for readability and efficient access to billing info.",
      },
      {
        heading: "Invoice",
        src: Images.LANDPRICER_INVOICE_IMG,
        text: "Visual invoice layout showing all financial details. Includes download options and formatted data for professional presentation.",
      },

      // -------------------------- PRICING ------------------------------
      {
        heading: "Pricing Plans",
        src: Images.LANDPRICER_PRICING_IMG,
        text: "Displays subscription tiers clearly with comparisons. Helps users understand features of each plan and encourages upgrades effectively.",
      },
      {
        heading: "Change Subscription",
        src: Images.LANDPRICER_CHANGE_SUBSCRIPTION_IMG,
        text: "Allows switching between available subscription levels. Displays plan benefits and provides an intuitive selection interface.",
      },
      {
        heading: "Subscription Status",
        src: Images.LANDPRICER_SUBSCRIPTION_IMG,
        text: "Shows active subscription details including billing cycle, renewal dates, and plan specifications in a clean and easy-to-read format.",
      },

      // -------------------------- OTHER ------------------------------
      {
        heading: "Report Bug",
        src: Images.LANDPRICER_REPORT_BUG_IMG,
        text: "Bug reporting interface allowing users to describe issues. Includes attachment options, category selection, and detailed input fields.",
      },
      {
        heading: "Report Bug Dropdown",
        src: Images.LANDPRICER__REPORT_BUG_DROPDOWN_IMG,
        text: "Dropdown list containing bug categories for easier reporting. Helps streamline problem identification and improves resolution speed.",
      },
      {
        heading: "Archive Popup",
        src: Images.LANDPRICER_ARCHIVE_POPUP_IMG,
        text: "Popup to archive chats or content. Features a scrollable layout and confirmation prompt to prevent accidental actions.",
      },
    ],
  },
{
  id: 2,
  title: "HealinK",
  overview: "HealinK is a comprehensive healthcare management platform connecting administrators, doctors, staff, and patients. It streamlines patient management, visit tracking, staff coordination, and dental charting, offering secure portals for all roles and ensuring efficient clinical workflows.",
  
  images: [
    // ===================== ADMIN DASHBOARD =====================
    {
      heading: "Admin Dashboard",
      src: Images.HEALINK_ADMIN_DASHBOARD_IMG,
      text: "The Admin Dashboard provides a high-level overview of the clinic’s operations. It displays key metrics such as active doctors, staff performance, and ongoing patient visits. Designed for quick navigation, it allows administrators to monitor activities, generate reports, and respond promptly to critical events."
    },
    {
      heading: "Admin Doctors",
      src: Images.HEALINK_ADMIN_DOCTOR_IMG,
      text: "This screen allows admins to view and manage all registered doctors. Features include searching, filtering, and quick access to individual profiles. It enables administrators to monitor doctor activity, track patient load, and ensure operational efficiency."
    },
    {
      heading: "Admin Doctors Variant 1",
      src: Images.HEALINK_ADMIN_DOCTOR1_IMG,
      text: "An alternate layout providing detailed statistics for doctors, including visit counts, patient feedback, and performance indicators. Facilitates data-driven decision-making and resource allocation."
    },
    {
      heading: "Admin Doctor Details",
      src: Images.HEALINK_ADMIN_DOCTORDETAILS_IMG,
      text: "Detailed view of a doctor’s profile including credentials, patient history, schedules, and performance metrics. Enables admins to verify qualifications, update information, and monitor compliance."
    },
    {
      heading: "Admin Staff",
      src: Images.HEALINK_ADMIN_STAFF_IMG,
      text: "Displays a complete list of staff members with their roles, schedules, and activity logs. Admins can add, edit, or deactivate staff accounts and ensure that personnel are effectively assigned to tasks."
    },
    {
      heading: "Admin Visits",
      src: Images.HEALINK_ADMIN_VISITS_IMG,
      text: "Provides a comprehensive overview of all patient visits. Admins can filter by doctor, date, or status, track upcoming appointments, and review completed visits for reporting purposes."
    },
    {
      heading: "Admin Visits Variant 1",
      src: Images.HEALINK_ADMIN_VISITS1_IMG,
      text: "An enhanced visits view offering additional sorting options, real-time status updates, and detailed visit logs. Supports workflow optimization and operational planning."
    },

    // ===================== DOCTOR PORTAL =====================
    {
      heading: "Doctor Management",
      src: Images.HEALINK_DOCTOR_PORTOL_DOCTORMANAGMENT_IMG,
      text: "The Doctor Portal provides a management interface for doctors to view their schedule, patient list, and clinic updates. Doctors can quickly access patient details, upcoming visits, and workflow notifications to optimize their daily operations."
    },
    {
      heading: "Doctor Management Variant 1",
      src: Images.HEALINK_DOCTOR_PORTOL_DOCTORMANAGEMENT1_IMG,
      text: "An extended view offering enhanced filtering, search, and analytics for doctors. Helps them track patient interactions, follow-up tasks, and administrative requirements efficiently."
    },
    {
      heading: "Add New Visit",
      src: Images.HEALINK_DOCTOR_PORTOL_DOCTOR_ADD_NEWVISITS_IMG,
      text: "Doctors can add new patient visits including visit type, diagnosis, and follow-up actions. The interface validates inputs, ensures accurate scheduling, and updates patient records in real-time for seamless clinical tracking."
    },
    {
      heading: "Patient Details",
      src: Images.HEALINK_DOCTOR_PORTOL_PATIENTDETAILS_IMG,
      text: "Shows comprehensive information for each patient including medical history, prescriptions, and prior visits. Supports decision-making during consultations and ensures accurate documentation."
    },
    {
      heading: "Patient Details Variant 1",
      src: Images.HEALINK_DOCTOR_PORTOL_PATIENTDETAILS1_IMG,
      text: "Provides additional details such as lab results, imaging records, and notes from prior visits. Enables doctors to have a complete overview of the patient’s health status."
    },
    {
      heading: "Patient Details Variant 2",
      src: Images.HEALINK_DOCTOR_PORTOL_PATIENTDETAILS2_IMG,
      text: "A detailed patient interaction view highlighting scheduled procedures, pending tasks, and alerts. Helps doctors prioritize actions for efficient patient care."
    },
    {
      heading: "Patient Details Variant 3",
      src: Images.HEALINK_DOCTOR_PORTOL_PATIENTDETAILS3_IMG,
      text: "Displays advanced analytics, ongoing treatments, and historical visit summaries. Supports data-driven clinical decisions and documentation compliance."
    },
    {
      heading: "Staff Visits",
      src: Images.HEALINK_DOCTOR_PORTAL_DOCTOE_STAFFVISITS_IMG,
      text: "Doctors can track and manage staff-assisted visits, reviewing actions performed by nurses or assistants. Provides transparency and ensures proper delegation and accountability."
    },

    // ===================== PATIENT PORTAL =====================
    {
      heading: "Patient Details",
      src: Images.HEALINK_PATIENT_PORTAL_PATIENTDETAILS_IMG,
      text: "Patient portal screen displaying personal information, visit history, and upcoming appointments. Patients can review their health data, schedule visits, and interact securely with doctors."
    },
    {
      heading: "Patient Details Variant 1",
      src: Images.HEALINK_PATIENT_PORTAL_PATIENTDETAILS1_IMG,
      text: "Extended patient profile showing medical history, medications, and doctor notes. Provides patients with a comprehensive overview of their health records."
    },
    {
      heading: "Patient Details Variant 2",
      src: Images.HEALINK_PATIENT_PORTAL_PATIENTDETAILS2_IMG,
      text: "Displays recent visit summaries, lab results, and prescriptions. Patients can track their treatment progress and upcoming appointments efficiently."
    },
    {
      heading: "Patient Details Variant 3",
      src: Images.HEALINK_PATIENT_PORTAL_PATIENTDETAILS3_IMG,
      text: "Shows detailed reports, follow-up actions, and alerts for upcoming visits. Ensures patients remain informed and engaged with their healthcare management."
    },
    {
      heading: "Patient Report",
      src: Images.HEALINK_PATIENT_REPORT_IMG,
      text: "Comprehensive report generation screen for patients, including lab results, visit summaries, and treatment plans. Allows secure download or printing for personal records or referrals."
    },

    // ===================== STAFF PORTAL =====================
    {
      heading: "Add New Staff",
      src: Images.HEALINK_STAFFPORTAL_ADDNEW_STAFF_IMG,
      text: "Administer staff profiles by adding new personnel with role assignments, permissions, and schedules. Ensures smooth onboarding and workflow management in the clinic."
    },
    {
      heading: "Staff Management",
      src: Images.HEALINK_STAFFPORTOL_STAFF_MANAGMENT_IMG,
      text: "View and manage all staff members including doctors, nurses, and administrative personnel. Provides performance summaries, task assignments, and detailed role-based controls."
    },
    {
      heading: "Add New Visit (Staff)",
      src: Images.HEALINK_STAFFPORTOL_STAFF_ADDNEW_VISIT_IMG,
      text: "Staff can schedule new patient visits, update visit records, and coordinate with doctors. Ensures accurate documentation and smooth patient care workflow."
    },
    {
      heading: "Staff Doctors",
      src: Images.HEALINK_STAFFPORTOL_STAFF_DOCTORS_IMG,
      text: "Staff can view the list of doctors, their schedules, and assignments. Enables effective coordination between staff and medical professionals."
    },
    {
      heading: "Staff Patient Details",
      src: Images.HEALINK_STAFFPORTOL_STAFF_PATIENTDETAILS_IMG,
      text: "Displays patient information relevant to staff duties, including treatment progress and visit history. Helps staff assist doctors and maintain accurate records."
    },
    {
      heading: "Staff Visits",
      src: Images.HEALINK_STAFFPORTOL_STAFFVISIT_IMG,
      text: "Staff can track, manage, and update visit records for patients they assist. Provides clarity on assigned tasks and supports operational efficiency."
    },

    // ===================== DENTAL CHARTS =====================
    {
      heading: "Dental Chart",
      src: Images.HEALINK_PATIENT_PORTAL_DENTALCHART_IMG,
      text: "Visual representation of the patient’s dental structure, highlighting teeth conditions and previous treatments. Allows doctors and staff to plan procedures effectively."
    },
    {
      heading: "Dental Chart – Existing Procedures",
      src: Images.HEALINK_PATIENT_PORTOL_DENTALCHART_EXISTINGPROCEDURE_IMG,
      text: "Displays previously performed dental procedures on the patient. Facilitates historical reference and ensures continuity of care."
    },
    {
      heading: "Dental Chart – Pending Procedures",
      src: Images.HEALINK_PATIENT_PORTAL_DENTALCHART_PENDIND_IMG,
      text: "Shows planned but not yet completed procedures. Supports treatment planning and prioritization."
    },
    {
      heading: "Dental Chart – Pending Variant 2",
      src: Images.HEALINK_PATIENT_PORTAL_DENTALCHART_PENDIND2_IMG,
      text: "Alternate view of pending procedures with more detailed task breakdowns and scheduling options."
    },
    {
      heading: "Dental Chart – Watch",
      src: Images.HEALINK_PATIENT_PORTOL_DENTALCHART_WATCH_IMG,
      text: "Interactive dental chart view for monitoring treatments and procedure updates. Supports mobile or wearable device integration for quick reference."
    },

    // ===================== TOOTH DETAILS =====================
    {
      heading: "Tooth Details – Watch",
      src: Images.HEALINK_TOOTHDETAILS_WATCH_IMG,
      text: "Provides detailed information about a specific tooth, including condition, treatments, and history. Interactive view allows doctors and staff to plan care effectively."
    },
    {
      heading: "Tooth Details – Watch Variant 2",
      src: Images.HEALINK_TOOTHDETAILS_WATCH_V2_IMG,
      text: "Enhanced view of tooth details with additional procedure notes, timelines, and patient-specific recommendations."
    },
    {
      heading: "Tooth Details – Watch Variant 2 PNG",
      src: Images.HEALINK_TOOTHDETAILS_WATCH_V2PNG_IMG,
      text: "Alternate format of tooth details for documentation or sharing. Maintains all interactive and visual elements in a static format."
    },
    {
      heading: "Tooth Details – Existing Procedure",
      src: Images.HEALINK_TOOTHDETAILS_EXISTINGPROCEDURE_IMG,
      text: "Shows the history of treatments performed on the selected tooth, including completed procedures and follow-up notes. Supports ongoing dental care management."
    }
  ]
}
,
{
  id: 5,
  title: "eFile System",
  overview: "eFile is a comprehensive digital tax and document management platform designed to streamline the filing, tracking, and management of various forms, recipients, and payer accounts. It provides secure login, detailed dashboards, efficient form handling, PDF sharing, order management, and user profile maintenance for seamless digital operations.",
  
  images: [
    // =============== LOGIN / AUTH SCREENS ===============
    {
      heading: "Login Screen",
      src: Images.eFILE_LOGIN_IMG,
      text:
        "The secure login interface enables users to access their eFile account safely. It includes fields for email and password, integrates smooth error handling for incorrect credentials, and ensures that authentication flows seamlessly into the main dashboard. Designed with security best practices, it protects sensitive tax and financial information from unauthorized access."
    },
    {
      heading: "Create Password",
      src: Images.eFILE_CREATE_PASSWORD_IMG,
      text:
        "This screen allows new users or recovering users to create a strong password. It incorporates validation rules to ensure password complexity and secure storage. Users receive immediate feedback on password strength and confirmation matching, helping maintain account integrity and reduce potential security risks."
    },
    {
      heading: "Forgot Password",
      src: Images.eFILE_FORGOT_PASSWORD_IMG,
      text:
        "The first step in password recovery, enabling users to request a reset link or OTP by entering their registered email. This screen guides users through the recovery process securely and efficiently, ensuring that only verified users can proceed with account restoration. Clear instructions and error handling improve user experience."
    },
    {
      heading: "Reset Password",
      src: Images.eFILE_RESET_PASSWORD_IMG,
      text:
        "Provides users with a secure form to enter and confirm a new password. Validation ensures strong passwords and proper matching between fields. The interface emphasizes safety, guiding users step-by-step to regain access to their account, while maintaining compliance with security protocols and user confidence."
    },
    {
      heading: "Email Verification",
      src: Images.eFILE_EMAIL_VERIFICATION_IMG,
      text:
        "This verification screen confirms a user's email through OTP entry. By verifying ownership of the email address, the system prevents unauthorized access and enhances overall account security. The interface is simple and clear, with options to resend OTPs and guidance on common issues."
    },
    {
      heading: "Email Verification for Forgot Password",
      src: Images.eFILE_EMAIL_VERIFICATION_FOR_FORGOT_PASSWORD_IMG,
      text:
        "Specifically designed for the password recovery process, this screen confirms user identity via OTP sent to their registered email. Clear instructions and prompt feedback ensure that users can quickly verify their account before proceeding to reset their password, maintaining both security and convenience."
    },
    {
      heading: "Number Verification",
      src: Images.eFILE_NUMBER_VERIFICATION_IMG,
      text:
        "Users can verify their mobile number using a one-time code. This step adds an extra layer of account security, allowing eFile to ensure that critical communications reach the correct user. The screen provides clear instructions for entering the OTP and options to resend codes when necessary."
    },
    {
      heading: "Multi-Factor Authentication (MFA)",
      src: Images.eFILE_MFA_IMG,
      text:
        "This screen enhances account security by implementing a second layer of verification beyond the password. Users may authenticate using OTPs, authenticator apps, or SMS codes. The interface balances security with ease of use, ensuring users can securely access their accounts without unnecessary friction."
    },
    {
      heading: "Security Questions",
      src: Images.eFILE_SECURITY_QUESTIONS_IMG,
      text:
        "As an additional security measure, users answer pre-defined or custom security questions. This screen helps verify identity in sensitive operations like password recovery or account changes. Clear prompts and guidance ensure that users understand how to provide accurate and memorable answers."
    },
    {
      heading: "Sequential Security Questions",
      src: Images.eFILE_SEQURITY_QUESTION_IMG,
      text:
        "This variant presents multiple security questions in sequence to validate user identity. Designed for high-security scenarios, it ensures only the verified user can proceed with sensitive actions. The interface provides clarity and guidance while minimizing user errors during input."
    },

    // =============== SIGNUP / USER INFO ===============
    {
      heading: "Signup",
      src: Images.eFILE_SIGNUP_IMG,
      text:
        "The registration screen allows new users to create their eFile account by entering essential personal and business information. Designed for clarity and ease, it guides users through all required fields and validates inputs in real-time, preparing them for full access to the platform's tools and features."
    },
    {
      heading: "Signup – User Info",
      src: Images.eFILE_SIGNUP_USERINFO_IMG,
      text:
        "Collects detailed personal or business information during the signup process. This screen ensures that all necessary data, such as name, address, and contact info, are accurately captured. Helpful tooltips and input validation improve accuracy and reduce onboarding friction."
    },
    {
      heading: "Access Codes",
      src: Images.eFILE_ACCESS_CODE_IMG,
      text:
        "Some accounts or workflows require access codes to proceed. This screen provides a secure way to input and validate these codes. It ensures that only authorized users can unlock advanced features or restricted areas, supporting compliance with internal security policies."
    },

    // =============== HOME SCREENS ===============
    {
      heading: "Home Screen",
      src: Images.eFILE_HOME_IMG,
      text:
        "The main dashboard provides users with an overview of their eFile account, recent activity, and actionable insights. It highlights pending forms, alerts, and critical notifications. Designed for intuitive navigation, it allows users to quickly access different modules and understand their current tasks."
    },
    {
      heading: "Home Screen Variant",
      src: Images.eFILE_HOME1_IMG,
      text:
        "A secondary view of the home dashboard providing alternative layout or additional widgets. This variant emphasizes data visualization, quick links, and personalized user shortcuts for faster workflow navigation."
    },
    {
      heading: "Tooltips",
      src: Images.eFILE_TOOLTIPS_IMG,
      text:
        "Displays contextual information and guidance for various dashboard elements. Tooltips help users understand features, reduce errors, and improve efficiency, particularly for first-time users navigating the system."
    },
    {
      heading: "Tooltip Behaviour",
      src: Images.eFILE_TOOLTIP_BEHAVIOUR_IMG,
      text:
        "This screen demonstrates how tooltips behave under different interactions. It ensures that contextual guidance appears when needed without obstructing other functionalities, creating a seamless user experience."
    },

    // =============== DASHBOARD / PROFILE / ACCOUNT ===============
    {
      heading: "My Info",
      src: Images.eFILE_MY_INFO_IMG,
      text:
        "The personal information dashboard allows users to review and edit their profile. Users can update personal details, contact info, and account settings. The interface ensures data integrity through validation and provides easy navigation to related settings."
    },
    {
      heading: "My Info Variant 1",
      src: Images.eFILE_MY_INFO1_IMG,
      text:
        "An alternative view of the profile screen, providing additional panels or sections for user preferences, notification settings, and connected accounts. Designed to enhance the manageability of user data."
    },
    {
      heading: "My Info Variant 2",
      src: Images.eFILE_MY_INFO2_IMG,
      text:
        "Extended profile management view showing detailed user data, activity logs, and audit information. Users can review history, edit sensitive fields, and manage verification settings."
    },
    {
      heading: "Company Info",
      src: Images.eFILE_COMPANY_INFO_IMG,
      text:
        "Displays corporate or organization details associated with the user account. Includes registration info, legal identifiers, and operational contacts. The screen provides editing options while ensuring compliance with verification requirements."
    },
    {
      heading: "User Details",
      src: Images.eFILE_USER_DETAILS_IMG,
      text:
        "Shows a comprehensive summary of user account information. Enables admin-level or user-level edits, with audit trails for accountability. This screen is crucial for maintaining accurate records for tax and reporting purposes."
    },
    {
      heading: "Transfer Account",
      src: Images.eFILE_TRANSFER_ACCOUNT_IMG,
      text:
        "Provides functionality for transferring account ownership or access rights. The interface guides users through secure verification, recipient confirmation, and final transfer steps, ensuring all data remains protected."
    },
    {
      heading: "Error Behaviour",
      src: Images.eFILE_ERROR_BEHAVIOUR_IMG,
      text:
        "Demonstrates how errors are handled throughout the platform. This screen ensures users receive clear, actionable feedback for failed actions, invalid inputs, or system exceptions, improving overall usability and reducing support requests."
    },

    // =============== PAYERS ===============
    {
      heading: "Payers Overview",
      src: Images.eFILE_PAYER_IMG,
      text:
        "Displays all payers associated with the user account. Users can view payer details, track contributions, and access transaction history. The interface emphasizes clarity and ease of management for financial and reporting activities."
    },
    {
      heading: "Payers List Variant 1",
      src: Images.eFILE_PAYER1_IMG,
      text:
        "An alternative payers view that provides detailed metrics, filtering options, and actionable buttons for editing or adding new payer information."
    },
    {
      heading: "Payers List Variant 2",
      src: Images.eFILE_PAYER2_IMG,
      text:
        "Further visualization of payer data, including sortable tables, search functionality, and insights for compliance and reporting purposes."
    },
    {
      heading: "Payers List Variant 3",
      src: Images.eFILE_PAYER3_IMG,
      text:
        "Displays advanced payer analytics and notifications for changes or actions required. Enables quick navigation to payer-related forms or transactions."
    },
    {
      heading: "Add Payer",
      src: Images.eFILE_ADD_PAYER_IMG,
      text:
        "Allows users to add a new payer to the system. Input fields include essential contact and financial details, with validation to prevent errors and ensure accurate records for tax and compliance purposes."
    },

    // =============== RECIPIENTS ===============
    {
      heading: "Add Recipient",
      src: Images.eFILE_ADD_RECIPIENT_IMG,
      text:
        "Enables users to add new recipients to the system for payments or filings. Includes form fields for personal or business details, validation for accurate entry, and clear guidance for compliance with tax rules."
    },

    // =============== FORMS (1099, etc.) ===============
    {
      heading: "Forms Overview",
      src: Images.eFILE_FORMS_IMG,
      text:
        "The central hub for all form-related activities. Users can view, select, or manage forms, including 1099, 1098, and other reporting documents. Designed for ease of navigation with quick access to frequently used forms."
    },
    {
      heading: "Select Form",
      src: Images.eFILE_SELECT_FORM_IMG,
      text:
        "Allows users to choose specific forms for creation or management. Includes search, filter, and preview options to ensure the correct form is selected for filing, improving efficiency and accuracy."
    },
    {
      heading: "Create 1099-MISC Form",
      src: Images.eFILE_1099_INT_CREATE_FORM_IMG,
      text:
        "Enables creation of 1099-MISC forms with structured fields and validation. Users can input payer and recipient details, amounts, and filing dates, ensuring compliance with IRS requirements."
    },
    {
      heading: "Create 1099-INT Form",
      src: Images.eFILE_1099_INT_CREATE_FORM1_IMG,
      text:
        "Supports creation of 1099-INT forms with precise input handling. Includes guidance for entering interest amounts, payer info, and recipient details while validating data integrity."
    },
    {
      heading: "Create 1099-INT Form Variant 2",
      src: Images.eFILE_1099_INT_CREATE_FORM2_IMG,
      text:
        "A continuation of 1099-INT form creation workflow, offering advanced field options, tooltips, and error prevention to minimize mistakes in tax reporting."
    },
    {
      heading: "Create 1099-INT Form Variant 3",
      src: Images.eFILE_1099_INT_CREATE_FORM3_IMG,
      text:
        "Final step in 1099-INT form creation, providing review, validation, and submission options. Users can verify all data before filing, reducing risk of errors or rejection."
    },

    // =============== PREVIEW / PRINT / PDF ===============
    {
      heading: "PDF Share",
      src: Images.eFILE_PDFSHARE_IMG,
      text:
        "Allows users to generate and share PDFs of forms, reports, or statements. Features include secure download, email sharing, and print options, ensuring that sensitive financial information is handled safely."
    },
    {
      heading: "Print Screen",
      src: Images.eFILE_PRINT_SCREEN_IMG,
      text:
        "Enables printing of selected forms or reports. Users can preview layouts, select pages, and access printer settings to ensure professional output and compliance with filing standards."
    },
    {
      heading: "Print Screen Variant 1",
      src: Images.eFILE_PRINT_SCREEN1_IMG,
      text:
        "Provides alternative print preview options, including page scaling, orientation settings, and detailed layout verification to reduce errors during physical document production."
    },
    {
      heading: "Print Screen Variant 2",
      src: Images.eFILE_PRINT_SCREEN2_IMG,
      text:
        "Further print preview interface with advanced options for selecting sections of a form, adding headers/footers, and verifying page numbers for accurate submissions."
    },
    {
      heading: "Print IRS Screen with Print Option",
      src: Images.eFILE_PRINT_SCREENIRS_WITH_PRINTOPTION_IMG,
      text:
        "Specifically designed for IRS forms, this screen allows users to print forms according to official formatting requirements. Ensures accuracy and compliance in physical submissions."
    },
    {
      heading: "Print IRS Screen with Download Option",
      src: Images.eFILE_PRINT_SCREENIRS_WITH_DOWNLOADOPTIOM_IMG,
      text:
        "Provides IRS form download functionality in PDF format. Users can save and distribute official forms while preserving exact formatting for compliance and record-keeping."
    },
    {
      heading: "Summary Form Preview",
      src: Images.eFILE_SUMMARY_FORM_IMG,
      text:
        "Displays a complete summary of a form before printing or sharing. Users can review all entered data, detect discrepancies, and confirm that records are complete and accurate."
    },
    {
      heading: "Summary Print Screen",
      src: Images.eFILE_SUMMARY_PRINT_SCREEN_IMG,
      text:
        "Preview and print summary forms with clarity. Includes print layout options and ensures that all relevant details are visible and properly formatted for submission."
    },
    {
      heading: "Summary Print Screen Variant 1",
      src: Images.eFILE_SUMMARY_PRINT_SCREEN1_IMG,
      text:
        "Alternative view for printing summary forms. Offers layout customization, page selection, and enhanced readability, helping users produce professional and accurate physical copies."
    },
    {
      heading: "Summary IRS Print Screen with Print Option",
      src: Images.eFILE_SUMMARY_PRINTSCREEN_IRS_WITHPRINT_OPTION_IMG,
      text:
        "Provides IRS-compliant summary form printing options. Ensures users can produce official copies that meet regulatory requirements and are suitable for filing or record-keeping."
    },

    // =============== ORDERS / SALES ===============
    {
      heading: "Orders Overview",
      src: Images.eFILE_ORDER_IMG,
      text:
        "Displays all pending, completed, and in-progress orders related to filings or document submissions. Users can track status, manage updates, and ensure deadlines are met efficiently through this centralized screen."
    },

    // =============== MISCELLANEOUS ===============
    {
      heading: "Leave Form",
      src: Images.eFILE_LEAVE_FORM_IMG,
      text:
        "Allows users to submit leave requests or related documentation. Features include form input validation, attachments, status tracking, and approvals, ensuring proper workflow management and accountability."
    }
  ]
}
,

{
  id: 4,
  title: "Valor Sport Card",
  overview: "Valor Sport Card is a comprehensive platform for sports enthusiasts, enabling seamless management of memberships, orders, payments, and analytics. It provides secure authentication, detailed dashboards for users and admins, order tracking, payment management, and advanced analytics. The platform is designed to ensure smooth workflows, transparency, and actionable insights for all users.",
  
  images: [
    // ===================== AUTH (LOGIN / SIGNUP / PASSWORD) =====================
    {
      heading: "Login",
      src: Images.VALOR_SPORT_CARD_LOGIN_IMG,
      text: "The login screen provides secure access to the Valor Sport Card platform. Users can sign in with their registered credentials, with options to recover forgotten passwords or navigate to the signup page."
    },
    {
      heading: "Signup",
      src: Images.VALOR_SPORT_CARD_SIGNUP_IMG,
      text: "Registration interface for new users to create an account. Collects personal information and account credentials while providing guidance for a smooth onboarding experience."
    },
    {
      heading: "Forgot Password",
      src: Images.VALOR_SPORT_CARD_FORGET_PASSWORD_IMG,
      text: "Password recovery screen where users can request a reset link or OTP. Ensures account security and provides step-by-step guidance to regain access."
    },
    {
      heading: "New Password",
      src: Images.VALOR_SPORT_CARD_NEW_PASSWORD_IMG,
      text: "Allows users to securely set a new password. Includes validation, confirmation fields, and feedback to ensure strong, reliable credentials."
    },
    {
      heading: "Verification",
      src: Images.VALOR_SPORT_CARD_VERIFICATION_IMG,
      text: "OTP verification screen ensures user identity before completing sensitive operations like password reset or account creation. Provides an additional layer of security."
    },

    // ===================== USER DASHBOARD / HOME =====================
    {
      heading: "User Dashboard",
      src: Images.VALOR_SPORT_CARD_DASHBOARD_IMG,
      text: "Main dashboard for users displaying key metrics, active memberships, and recent activity. Supports quick navigation to orders, payments, and analytics."
    },
    {
      heading: "Home Dark Mode",
      src: Images.VALOR_SPORT_CARD_HOMEDARK1_IMG,
      text: "Alternate dark-mode home view with optimized readability and focus on important cards. Enhances user experience for extended usage."
    },
    {
      heading: "Analytics",
      src: Images.VALOR_SPORT_CARD_ANALYTICS_IMG,
      text: "Comprehensive analytics dashboard showing trends, activity breakdowns, and performance metrics. Helps users track usage patterns and make informed decisions."
    },
    {
      heading: "Grading",
      src: Images.VALOR_SPORT_CARD_GRADING_IMG,
      text: "Displays grading or points system for users’ activities. Provides clear feedback and progress indicators to motivate engagement."
    },
    {
      heading: "Settings",
      src: Images.VALOR_SPORT_CARD_SETTING_IMG,
      text: "Profile and account settings where users can manage personal information, notification preferences, and security settings for optimal control."
    },

    // ===================== ADMIN SECTION =====================
    {
      heading: "Admin API Keys",
      src: Images.VALOR_SPORT_CARD_ADMIN_APIKEYS_IMG,
      text: "Allows admins to generate and manage API keys for integration with external platforms. Ensures secure connectivity and controlled access."
    },
    {
      heading: "Admin API Keys Variant 1",
      src: Images.VALOR_SPORT_CARD_ADMIN_APIKEYS1_IMG,
      text: "Enhanced view showing active keys, usage statistics, and expiration details. Provides detailed control over API access and monitoring."
    },
    {
      heading: "Admin Dashboard",
      src: Images.VALOR_SPORT_CARD_ADMIN_DASHBOARD_IMG,
      text: "High-level overview for administrators displaying platform metrics, active users, and recent orders. Supports decision-making and operational management."
    },
    {
      heading: "Admin Orders",
      src: Images.VALOR_SPORT_CARD_ADMIN_ORDERS_IMG,
      text: "Admin interface to monitor all orders, including status, payment, and delivery information. Ensures smooth order management and tracking."
    },
    {
      heading: "Admin Orders Variant 1",
      src: Images.VALOR_SPORT_CARD_ADMIN_ORDERS1_IMG,
      text: "Extended order view with filtering, sorting, and bulk actions. Helps admins manage high-volume order workflows efficiently."
    },
    {
      heading: "Admin Payments",
      src: Images.VALOR_SPORT_CARD_ADMIN_PAYMENTS_IMG,
      text: "Displays payment history, pending transactions, and reconciliations. Supports financial oversight and ensures transparency for administrators."
    },

    // ===================== ORDERS & TRACKING =====================
    {
      heading: "Order Tracking",
      src: Images.VALOR_SPORT_CARD_ORDER_TRACKING_IMG,
      text: "Allows users to monitor order progress in real-time. Displays shipment updates, estimated delivery times, and status notifications."
    },
    {
      heading: "Order Tracking Variant 1",
      src: Images.VALOR_SPORT_CARD_ORDER_TRACKING1_IMG,
      text: "Extended tracking view showing detailed order timelines, partial shipments, and itemized updates."
    },
    {
      heading: "Order Tracking Variant 2",
      src: Images.VALOR_SPORT_CARD_ORDER_TRACKING2_IMG,
      text: "Provides historical tracking and alerts for delayed or completed orders. Ensures transparency and confidence for users."
    },
    {
      heading: "Order Status Popup",
      src: Images.VALOR_SPORT_CARD_ORDER_STATUSPOPUP_IMG,
      text: "Popup interface providing immediate order status updates. Allows quick actions or feedback from users without navigating away from the current screen."
    },

    // ===================== ORDER SUBMISSION =====================
    {
      heading: "Order Submission Form",
      src: Images.VALOR_SPORT_CARD_ORDER_SUBMISSIONFORM_IMG,
      text: "Form interface for users to submit new orders, including required details and validations. Ensures accurate data collection for processing."
    },
    {
      heading: "Order Submission – Enter Details",
      src: Images.VALOR_SPORT_CARD_ORDER_SUBMISSIONFORM_ENTER_DETAIL_IMG,
      text: "Extended view of the submission form with step-by-step input fields. Reduces errors and guides users through the ordering process."
    },

    // ===================== PAYMENTS =====================
    {
      heading: "Card Payment Flow",
      src: Images.VALOR_SPORT_CARD_CARD_PAYMENT_FLOW_IMG,
      text: "Enables secure card payments with multiple authentication steps. Provides confirmation and transaction tracking."
    },
    {
      heading: "Transfer Payment Flow",
      src: Images.VALOR_SPORT_CARD_TRANSFER_PAYMENTFLOW_IMG,
      text: "Supports bank transfer payments with real-time validation and confirmation of completed transactions."
    },
    {
      heading: "Payment Management",
      src: Images.VALOR_SPORT_CARD_PAYMENT_MANAGEMENT_IMG,
      text: "Centralized payment dashboard showing all completed, pending, and failed transactions. Allows easy reconciliation and monitoring."
    },

    // ===================== PRICING, SALES & ANALYTICS =====================
    {
      heading: "Sales Overview",
      src: Images.VALOR_SPORT_CARD_SALES_IMG,
      text: "Displays sales metrics, trends, and reports. Helps users and admins track performance and optimize pricing strategies."
    },
    {
      heading: "Pricing",
      src: Images.VALOR_SPORT_CARD_PRICING_IMG,
      text: "Interface to view or adjust pricing plans, subscription tiers, or service fees. Supports informed business decisions."
    },

    // ===================== CARD DETAILS =====================
    {
      heading: "Card Details",
      src: Images.VALOR_SPORT_CARD_CARD_DETAILS_IMG,
      text: "Detailed view of each sport card including membership info, balance, and status. Users can review and manage their cards effectively."
    },
    {
      heading: "Card Order Complete",
      src: Images.VALOR_SPORT_CARD_CARD_ORDER_COMPLETE_IMG,
      text: "Confirmation screen showing completed card orders. Displays order summary, payment confirmation, and next steps for users."
    },
    {
      heading: "Transfer Order Complete",
      src: Images.VALOR_SPORT_CARD_TRANSFER_ORDERCOMPLETE_IMG,
      text: "Completion screen for transfer payments, including confirmation of successful transfer and order tracking details."
    },

    // ===================== MISC =====================
    {
      heading: "Congrats",
      src: Images.VALOR_SPORT_CARD_CONGRATS_IMG,
      text: "Celebratory confirmation screen acknowledging completed actions, motivating users and providing next steps."
    },
    {
      heading: "Date Popup",
      src: Images.VALOR_SPORT_CARD_DATAPOPUP_IMG,
      text: "Interactive date selection popup for scheduling orders or payments. Ensures accurate input and reduces errors."
    },
    {
      heading: "Success",
      src: Images.VALOR_SPORT_CARD_SUCCESS_IMG,
      text: "General success notification confirming completed actions. Provides feedback and guidance for next user steps."
    }
  ]
}
,
{
  id: 3,
  title: "ParryScript",
  overview: "ParryScript is an online medical marketplace platform connecting buyers, sellers, and pharmacies. It enables secure onboarding, seamless order management, product browsing, seller listings, payment processing, and pharmacy profile management. The platform ensures a smooth, transparent workflow for all users, providing real-time notifications, income tracking, and detailed transaction histories.",
  
  images: [
    // ===================== AUTH (LOGIN / SIGNUP / RESET) =====================
    {
      heading: "Landing Screen",
      src: Images.PARRYSCRIPT_PARRY_SCRIPT_IMG,
      text: "The landing screen introduces the platform with a clear call-to-action for login or signup. Users can explore features and understand the benefits before creating an account."
    },
    {
      heading: "Create New Account",
      src: Images.PARRYSCRIPT_CREATE_NEW_ACCOUNT_IMG,
      text: "Signup interface collects essential user details to create a secure account. Includes email, password, and optional personal or pharmacy information for comprehensive onboarding."
    },
    {
      heading: "Sign In",
      src: Images.PARRYSCRIPT_SIGN_IMG,
      text: "Login screen for returning users. Supports email/password authentication, password visibility toggle, and smooth navigation to forgotten password or signup workflows."
    },
    {
      heading: "Forgot Password",
      src: Images.PARRYSCRIPT_FORGET_PASSWORD_IMG,
      text: "Initial step for account recovery. Users enter their registered email to receive a reset link or OTP for secure password reset, ensuring account protection."
    },
    {
      heading: "Reset Password",
      src: Images.PARRYSCRIPT_RESET_PASSWORD_IMG,
      text: "Allows users to set a new password safely. Features confirmation fields, validation checks, and guidance to restore account access without compromising security."
    },
    {
      heading: "Email Verification",
      src: Images.PARRYSCRIPT_EMAILVERIFICATION_IMG,
      text: "Email OTP verification ensures that the account belongs to the user. Enhances security and prevents unauthorized access before completing login or signup."
    },

    // ===================== BUYER FLOW =====================
    {
      heading: "Buyer Flow – Step 1",
      src: Images.PARRYSCRIPT_BUYERFLOW_IMG,
      text: "Start of the buyer journey. Users can browse available medicines, filter by categories, and add desired products to their cart efficiently."
    },
    {
      heading: "Buyer Flow – Step 2",
      src: Images.PARRYSCRIPT_BUYERFLOW2_IMG,
      text: "Users review selected items, choose preferred pharmacies, and can modify quantities or remove items. Ensures clarity before proceeding to checkout."
    },
    {
      heading: "Buyer Flow – Step 3",
      src: Images.PARRYSCRIPT_BUYERFLOW3_IMG,
      text: "Detailed item view where buyers can confirm product details, pricing, and available pharmacy options before finalizing their purchase."
    },
    {
      heading: "Buyer Flow – Step 4",
      src: Images.PARRYSCRIPT_BUYERFLOW4_IMG,
      text: "Order confirmation page displays delivery methods, pharmacy information, and total order summary, providing a final review before placement."
    },
    {
      heading: "Buyer Flow – Step 5",
      src: Images.PARRYSCRIPT_BUYERFLOW5_IMG,
      text: "Completes the purchase with success notification, order tracking options, and recommended follow-up actions. Supports seamless post-order experience."
    },

    // ===================== SELLER FLOW =====================
    {
      heading: "Seller Flow – Overview",
      src: Images.PARRYSCRIPT_SELLERFLOW_IMG,
      text: "Initial seller dashboard showing key statistics like revenue, active listings, and pending orders. Provides insights into marketplace activity and performance."
    },
    {
      heading: "Seller Flow – Manage Products",
      src: Images.PARRYSCRIPT_SELLERFLOW1_IMG,
      text: "Sellers can add, edit, or remove products, update stock levels, and adjust pricing. Essential for maintaining an accurate catalog and inventory control."
    },
    {
      heading: "Seller Flow – Review Orders",
      src: Images.PARRYSCRIPT_SELLERFLOW2_IMG,
      text: "Panel for confirming or rejecting incoming buyer orders. Includes details about ordered products, quantities, and delivery requirements."
    },
    {
      heading: "Seller Flow – Workflow Management",
      src: Images.PARRYSCRIPT_SELLERFLOW3_IMG,
      text: "Sellers review pharmacy requirements, coordinate product handovers, and manage order processing steps efficiently."
    },
    {
      heading: "Seller Flow – Completion Summary",
      src: Images.PARRYSCRIPT_SELLERFLOW4_IMG,
      text: "Final screen summarizing order status, completed sales, and shipment history. Provides an overview of seller performance and pending actions."
    },

    // ===================== INCOME (BUYER & SELLER) =====================
    {
      heading: "Buyer Income / Orders",
      src: Images.PARRYSCRIPT_BUYERINCOME_ORDER_IMG,
      text: "Shows a detailed list of buyer orders, including completed purchases, pending deliveries, and total expenditure. Helps buyers track spending patterns."
    },
    {
      heading: "Buyer Income / Orders Variant 2",
      src: Images.PARRYSCRIPT_BUYINCOME_ORDER2_IMG,
      text: "Extended buyer income view with filters, sorting, and historical order insights. Enhances user control over transaction records."
    },
    {
      heading: "Seller Income / Sales",
      src: Images.PARRYSCRIPT_SELLER_INCOMESALE_IMG,
      text: "Displays seller revenue from completed orders, including breakdowns by product, pharmacy, and date. Supports performance tracking and financial reporting."
    },
    {
      heading: "Seller Income / Sales Variant 2",
      src: Images.PARRYSCRIPT_SELLER_INCOMESALE2_IMG,
      text: "Advanced sales view with charts, filtering options, and revenue summaries. Helps sellers optimize pricing and stock decisions."
    },

    // ===================== PHARMACY DETAILS =====================
    {
      heading: "Pharmacy Details",
      src: Images.PARRYSCRIPT_PHARMACYDETail_IMG,
      text: "Shows detailed pharmacy information including address, license, available products, and operational hours. Helps buyers choose reliable providers."
    },

    // ===================== PROFILE =====================
    {
      heading: "User Profile",
      src: Images.PARRYSCRIPT_PROFILE_IMG,
      text: "Profile management screen for updating personal information, payment methods, and account settings. Provides secure access to manage preferences."
    },

    // ===================== NOTIFICATIONS =====================
    {
      heading: "Notifications – Variant 1",
      src: Images.PARRYSCRIPT_NOTIFICATION1_IMG,
      text: "Central hub for all system messages including order updates, promotions, and pharmacy alerts. Ensures users are informed promptly."
    },
    {
      heading: "Notifications – Variant 2",
      src: Images.PARRYSCRIPT_NOTIFICAION2_IMG,
      text: "Extended notifications view with filtering options, read/unread status, and direct links to related actions for enhanced user engagement."
    }
  ]
}
,
{
  id: 6,
  title: "HRChromatics",
  overview: "HRChromatics is a modern web platform showcasing creative content, articles, and services. It features intuitive navigation across home, blog, article, about, services, and contact pages. The platform is designed for seamless browsing, user engagement, and informative interactions, providing a visually appealing and user-friendly experience.",
  
  images: [
    // ===================== HOME & INFO PAGES =====================
    {
      heading: "Home Page",
      src: Images.HRCHROMATICS_HOME_PAGE_IMG,
      text: "The main landing page of HRChromatics, highlighting featured content, services, and navigation options. Designed to provide immediate insight and easy access to all sections of the website."
    },
    {
      heading: "Blog Page",
      src: Images.HRCHROMATICS_BLOG_PAGE_IMG,
      text: "Displays a collection of blog posts with filtering and search options. Users can browse articles by topic, date, or popularity for informative and engaging reading."
    },
    {
      heading: "Article Page",
      src: Images.HRCHROMATICS_ARTICLE_PAGE_IMG,
      text: "Detailed article view showing content, images, and related posts. Provides interactive features such as comments, sharing options, and navigation to other articles."
    },
    {
      heading: "About Us",
      src: Images.HRCHROMATICS_ABOUTUS_IMG,
      text: "Information page describing the organization, mission, and team members. Builds credibility and connects users with the brand story."
    },
    {
      heading: "Services",
      src: Images.HRCHROMATICS_SERVICES_IMG,
      text: "Overview of services offered by HRChromatics. Each service includes details, visuals, and call-to-action elements for user engagement and inquiries."
    },
    {
      heading: "Contact Us",
      src: Images.HRCHROMATICS_CONTACTUS_IMG,
      text: "Interactive contact page allowing users to reach out via forms, email, or phone. Includes location, business hours, and integrated maps for easy navigation."
    }
     
  ]
}





];

export const ProjectImages = [
  {
    id: 1,
    image: Images.LANDPRICER_HOME_IMG,
  },
  {
    id: 2,
    image: Images.HEALINK_ADMIN_DASHBOARD_IMG,
  },
  {
    id: 3,
    image: Images.eFILE_HOME1_IMG,
  },
  {
    id: 4,
    image: Images.VALOR_SPORT_CARD_CARD_DETAILS_IMG,
  },
  {
    id: 5,
    image: Images.PARRYSCRIPT_PARRY_SCRIPT_IMG,
  },
  {
    id: 6,
    image: Images.HRCHROMATICS_CONTACTUS_IMG,
  },
];