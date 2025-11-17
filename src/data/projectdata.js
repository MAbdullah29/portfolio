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
        heading: "Secure User Login Portal",
        subheading: "Streamlined Authentication Experience",
        src: Images.LANDPRICER_LOGIN_IMG,
        text: "The login screen allows users to securely sign into the platform. It provides email and password inputs with a clean layout. Additional hints and validations guide the user. The screen is optimized for mobile and web responsiveness with smooth transitions.",
        features: ["Email validation", "Password visibility toggle", "Remember me option", "Responsive design"],
        designNote: "Minimalist interface focusing on security and ease of access"
      },
      {
        heading: "Login Error Handling & Validation",
        subheading: "Intelligent Error Recovery System",
        src: Images.LANDPRICER_LOGIN_ERROR_PAGE_IMG,
        text: "Displays informative error messages when authentication fails. Shows incorrect password or invalid email notifications. Highlights fields that need correction. Encourages quick recovery with helpful UI hints.",
        features: ["Real-time validation", "Clear error messaging", "Field highlighting", "Recovery suggestions"],
        designNote: "User-friendly error states that guide rather than frustrate"
      },

      // -------------------------- SIGNUP / REGISTER ------------------------------
      {
        heading: "User Registration & Account Creation",
        subheading: "Seamless Onboarding Journey",
        src: Images.LANDPRICER_CREATE_ACCOUNT_PAGE_IMG,
        text: "A simple account creation form for new users with essential inputs such as name, email, and password. The clean UI reduces cognitive load and ensures smooth entry into the platform ecosystem.",
        features: ["Progressive disclosure", "Auto-fill support", "Input validation", "Terms acceptance"],
        designNote: "Conversion-optimized signup flow with minimal friction"
      },
      {
        heading: "Secure Password Creation Interface",
        subheading: "Enhanced Security Setup",
        src: Images.LANDPRICER_CREATE_PASSWORD_IMG,
        text: "Guides users to create a secure password with strength indicators. Offers helpful tooltips for strong credentials and supports best security practices throughout the setup.",
        features: ["Password strength meter", "Real-time validation", "Security requirements display", "Helpful tooltips"],
        designNote: "Security-first design with clear visual feedback"
      },
      {
        heading: "Password Reset & Recovery Workflow",
        subheading: "Secure Credential Update Process",
        src: Images.LANDPRICER_CREATE_NEW_PASSWORD_IMG,
        text: "Used during password reset workflow. The form requires password confirmation and offers clear instructions to avoid mismatches. Validations ensure strong account security.",
        features: ["Password matching validation", "Strength indicators", "Clear instructions", "Confirmation feedback"],
        designNote: "Secure and user-friendly password recovery experience"
      },
      {
        heading: "Password Reset Success Confirmation",
        subheading: "Successful Authentication Update",
        src: Images.LANDPRICER_CREATE_NEW_PASSWORD_DONE_IMG,
        text: "Confirms successful password creation with a clear visual indicator. Includes a next-step call to action and guides the user to log in with their new password.",
        features: ["Success animation", "Clear CTA", "Auto-redirect option", "Login guidance"],
        designNote: "Positive reinforcement with clear next steps"
      },
      {
        heading: "Complete User Registration Flow",
        subheading: "Multi-Step Account Setup",
        src: Images.LANDPRICER_REGESTRATION_IMG,
        text: "A structured user registration flow that captures important user inputs clearly. Designed to increase sign-up conversions while supporting easy navigation for new users.",
        features: ["Progress indicators", "Step-by-step guidance", "Data validation", "Save progress"],
        designNote: "Structured approach minimizing dropout rates"
      },

      // -------------------------- OTP / VERIFICATION ------------------------------
      {
        heading: "Two-Factor Authentication - OTP Verification",
        subheading: "Multi-Layer Security Confirmation",
        src: Images.LANDPRICER_RECOVER_PASSWORD_OTP_IMG,
        text: "OTP input fields displayed in a clean 4-digit or 6-digit layout. Includes resend options and ensures secure identity verification through multi-step authentication.",
        features: ["Auto-focus navigation", "Resend timer", "Copy-paste support", "Accessibility optimized"],
        designNote: "Secure yet frictionless verification process"
      },

      // -------------------------- RECOVER / RESET ------------------------------
      {
        heading: "Password Recovery Initiation",
        subheading: "Account Access Restoration",
        src: Images.LANDPRICER_RECOVER_PASSWORD_IMG,
        text: "Initial recovery screen prompting the user to enter an email for reset instructions. Offers helpful guidance text and ensures a smooth, secure recovery experience.",
        features: ["Email validation", "Security hints", "Clear instructions", "Help links"],
        designNote: "Supportive recovery flow with clear communication"
      },
      {
        heading: "Advanced Password Recovery - Step 2",
        subheading: "Verification & Reset Continuation",
        src: Images.LANDPRICER_RECOVER_PASSWORD1_IMG,
        text: "Second step in the password recovery workflow. Provides clarity on OTP verification or new password creation with clean visuals that enhance user confidence.",
        features: ["Progress tracking", "Clear visual hierarchy", "Action confirmation", "Help resources"],
        designNote: "Confidence-building design for security-sensitive actions"
      },

      // -------------------------- HOME ------------------------------
      {
        heading: "Main Dashboard & Control Center",
        subheading: "Centralized Platform Hub",
        src: Images.LANDPRICER_HOME_IMG,
        text: "Main dashboard showing key insights and quick actions. Designed with modern layout and readability, serving as the central hub for user activity.",
        features: ["Widget customization", "Quick actions", "Real-time updates", "Activity feed"],
        designNote: "Information architecture optimized for scanning and action"
      },
      {
        heading: "Alternative Dashboard Layout - Analytics Focus",
        subheading: "Data-Driven Insights View",
        src: Images.LANDPRICER_HOME2_IMG,
        text: "An alternate dashboard layout offering more analytics and widgets. Provides quick access to major tools, ideal for users handling frequent data operations.",
        features: ["Advanced analytics", "Customizable widgets", "Export options", "Filtering tools"],
        designNote: "Power-user optimized with enhanced data visualization"
      },
      {
        heading: "Welcome & Onboarding Screen",
        subheading: "First-Time User Experience",
        src: Images.LANDPRICER_INITIAL_SCREEN_IMG,
        text: "The first landing screen during onboarding. Introduces the platform with minimal UI to help new users navigate easily while establishing strong brand trust.",
        features: ["Feature highlights", "Getting started guide", "Tour option", "Skip functionality"],
        designNote: "Welcoming introduction building user confidence"
      },
      {
        heading: "Task Completion & Success State",
        subheading: "Workflow Milestone Confirmation",
        src: Images.LANDPRICER_COMPLETE_PAGE_IMG,
        text: "Displayed after completing a workflow step. Offers confirmation visuals and clear action buttons to guide users forward with confidence.",
        features: ["Success indicators", "Next step suggestions", "Share options", "Return navigation"],
        designNote: "Positive reinforcement driving continued engagement"
      },

      // -------------------------- PROFILE ------------------------------
      {
        heading: "User Profile Management Center",
        subheading: "Personal Information & Settings Hub",
        src: Images.LANDPRICER_MY_PROFILE_IMG,
        text: "Profile management screen showcasing user details. Allows editing of personal info, subscription status, and account settings in a clean layout.",
        features: ["Avatar upload", "Information editing", "Privacy controls", "Account linking"],
        designNote: "Comprehensive yet organized profile management"
      },

      // -------------------------- WORKFLOW / TOOLS ------------------------------
      {
        heading: "Integrated Communication - Active Chat Interface",
        subheading: "Real-Time Messaging System",
        src: Images.LANDPRICER_ARICIVECHAT_IMG,
        text: "Integrated chat interface for communication. Displays threads clearly, includes actions such as archive or reply, and enhances workflow productivity.",
        features: ["Thread management", "File sharing", "Search functionality", "Status indicators"],
        designNote: "Productive communication tool within workflow context"
      },
      {
        heading: "Response Template Editor",
        subheading: "Automated Communication Management",
        src: Images.LANDPRICER_EDIT_RESPONSE_IMG,
        text: "Screen for editing automatic or saved responses. Allows previewing, modifying text, and formatting while keeping the workflow fast and organized.",
        features: ["Rich text editing", "Template library", "Preview mode", "Variable insertion"],
        designNote: "Efficiency-focused editing with live preview"
      },
      {
        heading: "Universal Content Editor",
        subheading: "Flexible Editing Interface",
        src: Images.LANDPRICER_EDIT_SCREEN_IMG,
        text: "A general editing interface allowing users to adjust settings or content. Sidebar layout ensures easy navigation and efficient content adjustments.",
        features: ["Sidebar navigation", "Auto-save", "Version history", "Undo/redo"],
        designNote: "Intuitive editing experience with powerful controls"
      },
      {
        heading: "Decision Matrix - Multiple Options Interface",
        subheading: "Guided Selection Workflow",
        src: Images.LANDPRICER_SCREEN_WITH_MULTIPLEOPTION_IMG,
        text: "Presents users with multiple decision options via visually separated cards. Helps guide workflow choices while maintaining UI simplicity.",
        features: ["Card-based layout", "Comparison view", "Quick select", "Information tooltips"],
        designNote: "Clear visual hierarchy for decision-making"
      },
      {
        heading: "Structured Data Input Interface",
        subheading: "Form-Based Information Collection",
        src: Images.LANDPRICER_SCREEN_WITH_INPUTSCREEN_IMG,
        text: "Structured input fields designed for detailed data entry. Provides clarity, spacing, and labels to simplify the information submission process.",
        features: ["Smart validation", "Field grouping", "Help text", "Progress saving"],
        designNote: "User-friendly forms reducing input errors"
      },
      {
        heading: "Funding Application Portal",
        subheading: "Financial Request Management",
        src: Images.LANDPRICER_GET_FUNDING_IMG,
        text: "Funding request interface with clear input fields. Simplifies the application process and provides clear instructions to improve completion rates.",
        features: ["Document upload", "Amount calculator", "Eligibility check", "Status tracking"],
        designNote: "Streamlined funding application with guidance"
      },
      {
        heading: "Alternative Funding Request Flow",
        subheading: "Simplified Application Process",
        src: Images.LANDPRICER_GET_FUNDIND_IMG,
        text: "An alternate funding screen layout focusing on simplicity. Includes strong call-to-action buttons and intuitive navigation design.",
        features: ["Quick apply", "Pre-qualification", "Instant feedback", "Mobile optimized"],
        designNote: "Conversion-focused design for funding requests"
      },

      // -------------------------- BILLING / PAYMENT ------------------------------
      {
        heading: "Payment Method Registration",
        subheading: "Secure Billing Information Setup",
        src: Images.LANDPRICER_ADD_PAYMENT_IMG,
        text: "Allows users to enter new payment methods securely. Includes validation fields and supports adding multiple billing options smoothly.",
        features: ["PCI compliance", "Card detection", "Billing address", "Save for future"],
        designNote: "Secure payment entry with trust indicators"
      },
      {
        heading: "Payment Method Management",
        subheading: "Billing Preferences Update",
        src: Images.LANDPRICER_CHANGE_PAYMENT_IMG,
        text: "Lets users update existing payment options. Highlights active and inactive methods, offering clarity while managing billing preferences.",
        features: ["Default selection", "Delete protection", "Expiry reminders", "Method switching"],
        designNote: "Clear payment management with safety features"
      },
      {
        heading: "Transaction History & Invoice Details",
        subheading: "Financial Records Overview",
        src: Images.LANDPRICER_PAYMENT_DETAIL_IMG,
        text: "Shows invoice summaries and billing records. Structured for clarity and easy scanning, helping users understand their payments quickly.",
        features: ["Date filtering", "Export options", "Receipt download", "Payment status"],
        designNote: "Transparent financial tracking with export capability"
      },
      {
        heading: "Detailed Payment Information - Enhanced View",
        subheading: "Comprehensive Transaction Breakdown",
        src: Images.LANDPRICER_PAYMENT_DETAIL_IMG1,
        text: "An alternate, more structured layout displaying payment metadata clearly. Designed for readability and efficient access to billing info.",
        features: ["Itemized breakdown", "Tax details", "Refund tracking", "Print option"],
        designNote: "Professional invoice layout with complete details"
      },
      {
        heading: "Professional Invoice Display",
        subheading: "Downloadable Billing Document",
        src: Images.LANDPRICER_INVOICE_IMG,
        text: "Visual invoice layout showing all financial details. Includes download options and formatted data for professional presentation.",
        features: ["PDF generation", "Print ready", "Company branding", "Line items"],
        designNote: "Business-ready invoice format for records"
      },

      // -------------------------- PRICING ------------------------------
      {
        heading: "Subscription Tiers & Pricing Plans",
        subheading: "Feature Comparison Matrix",
        src: Images.LANDPRICER_PRICING_IMG,
        text: "Displays subscription tiers clearly with comparisons. Helps users understand features of each plan and encourages upgrades effectively.",
        features: ["Feature comparison", "Billing toggle", "Popular badge", "CTA buttons"],
        designNote: "Clear value proposition for each tier"
      },
      {
        heading: "Subscription Plan Modification",
        subheading: "Tier Upgrade & Downgrade Management",
        src: Images.LANDPRICER_CHANGE_SUBSCRIPTION_IMG,
        text: "Allows switching between available subscription levels. Displays plan benefits and provides an intuitive selection interface.",
        features: ["Prorated billing", "Change preview", "Confirmation step", "Benefits highlight"],
        designNote: "Transparent plan changes with cost preview"
      },
      {
        heading: "Active Subscription Overview",
        subheading: "Current Plan Status & Details",
        src: Images.LANDPRICER_SUBSCRIPTION_IMG,
        text: "Shows active subscription details including billing cycle, renewal dates, and plan specifications in a clean and easy-to-read format.",
        features: ["Renewal date", "Usage metrics", "Upgrade prompt", "Cancellation option"],
        designNote: "Clear subscription status with action options"
      },

      // -------------------------- OTHER ------------------------------
      {
        heading: "Bug Reporting System",
        subheading: "Issue Tracking & Feedback Portal",
        src: Images.LANDPRICER_REPORT_BUG_IMG,
        text: "Bug reporting interface allowing users to describe issues. Includes attachment options, category selection, and detailed input fields.",
        features: ["Screenshot upload", "Category selection", "Priority setting", "Tracking number"],
        designNote: "Comprehensive bug reporting for quality improvement"
      },
      {
        heading: "Bug Category Selection Menu",
        subheading: "Issue Classification System",
        src: Images.LANDPRICER__REPORT_BUG_DROPDOWN_IMG,
        text: "Dropdown list containing bug categories for easier reporting. Helps streamline problem identification and improves resolution speed.",
        features: ["Categorized options", "Search filter", "Recent selections", "Custom entry"],
        designNote: "Organized categorization for efficient triage"
      },
      {
        heading: "Archive Confirmation Modal",
        subheading: "Content Archival Interface",
        src: Images.LANDPRICER_ARCHIVE_POPUP_IMG,
        text: "Popup to archive chats or content. Features a scrollable layout and confirmation prompt to prevent accidental actions.",
        features: ["Bulk selection", "Confirmation step", "Undo option", "Storage info"],
        designNote: "Safe archival with accidental deletion prevention"
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
        heading: "Administrative Command Center",
        subheading: "Healthcare Operations Dashboard",
        src: Images.HEALINK_ADMIN_DASHBOARD_IMG,
        text: "The Admin Dashboard provides a high-level overview of the clinic's operations. It displays key metrics such as active doctors, staff performance, and ongoing patient visits. Designed for quick navigation, it allows administrators to monitor activities, generate reports, and respond promptly to critical events.",
        features: ["Real-time metrics", "Staff monitoring", "Report generation", "Alert system"],
        designNote: "Executive-level overview with actionable insights"
      },
      {
        heading: "Medical Staff Directory & Management",
        subheading: "Doctor Database Interface",
        src: Images.HEALINK_ADMIN_DOCTOR_IMG,
        text: "This screen allows admins to view and manage all registered doctors. Features include searching, filtering, and quick access to individual profiles. It enables administrators to monitor doctor activity, track patient load, and ensure operational efficiency.",
        features: ["Advanced search", "Profile quick view", "Activity tracking", "Performance metrics"],
        designNote: "Efficient doctor management with comprehensive filtering"
      },
      {
        heading: "Physician Performance Analytics",
        subheading: "Doctor Statistics & Metrics Dashboard",
        src: Images.HEALINK_ADMIN_DOCTOR1_IMG,
        text: "An alternate layout providing detailed statistics for doctors, including visit counts, patient feedback, and performance indicators. Facilitates data-driven decision-making and resource allocation.",
        features: ["Performance graphs", "Patient satisfaction", "Visit analytics", "Comparative data"],
        designNote: "Data-driven insights for medical staff evaluation"
      },
      {
        heading: "Comprehensive Doctor Profile View",
        subheading: "Medical Professional Details & History",
        src: Images.HEALINK_ADMIN_DOCTORDETAILS_IMG,
        text: "Detailed view of a doctor's profile including credentials, patient history, schedules, and performance metrics. Enables admins to verify qualifications, update information, and monitor compliance.",
        features: ["Credential verification", "Schedule management", "Patient load tracking", "Compliance status"],
        designNote: "Complete professional profile with verification tools"
      },
      {
        heading: "Healthcare Staff Management Portal",
        subheading: "Personnel Administration System",
        src: Images.HEALINK_ADMIN_STAFF_IMG,
        text: "Displays a complete list of staff members with their roles, schedules, and activity logs. Admins can add, edit, or deactivate staff accounts and ensure that personnel are effectively assigned to tasks.",
        features: ["Role management", "Schedule coordination", "Activity logs", "Task assignment"],
        designNote: "Streamlined staff administration with role-based access"
      },
      {
        heading: "Patient Visit Management Center",
        subheading: "Appointment & Visit Tracking System",
        src: Images.HEALINK_ADMIN_VISITS_IMG,
        text: "Provides a comprehensive overview of all patient visits. Admins can filter by doctor, date, or status, track upcoming appointments, and review completed visits for reporting purposes.",
        features: ["Multi-filter search", "Status tracking", "Calendar integration", "Reporting tools"],
        designNote: "Centralized visit management with flexible filtering"
      },
      {
        heading: "Advanced Visit Analytics Dashboard",
        subheading: "Enhanced Appointment Monitoring",
        src: Images.HEALINK_ADMIN_VISITS1_IMG,
        text: "An enhanced visits view offering additional sorting options, real-time status updates, and detailed visit logs. Supports workflow optimization and operational planning.",
        features: ["Real-time updates", "Advanced sorting", "Visit logs", "Workflow insights"],
        designNote: "Operational intelligence for visit management"
      },

      // ===================== DOCTOR PORTAL =====================
      {
        heading: "Physician Dashboard & Workflow Hub",
        subheading: "Doctor's Central Management Interface",
        src: Images.HEALINK_DOCTOR_PORTOL_DOCTORMANAGMENT_IMG,
        text: "The Doctor Portal provides a management interface for doctors to view their schedule, patient list, and clinic updates. Doctors can quickly access patient details, upcoming visits, and workflow notifications to optimize their daily operations.",
        features: ["Schedule overview", "Patient queue", "Notifications", "Quick actions"],
        designNote: "Physician-optimized workflow for efficient patient care"
      },
      {
        heading: "Extended Doctor Management Console",
        subheading: "Advanced Medical Workflow Tools",
        src: Images.HEALINK_DOCTOR_PORTOL_DOCTORMANAGEMENT1_IMG,
        text: "An extended view offering enhanced filtering, search, and analytics for doctors. Helps them track patient interactions, follow-up tasks, and administrative requirements efficiently.",
        features: ["Patient filtering", "Task management", "Analytics dashboard", "Follow-up tracking"],
        designNote: "Power-user tools for managing complex patient loads"
      },
      {
        heading: "New Patient Visit Registration",
        subheading: "Clinical Encounter Documentation",
        src: Images.HEALINK_DOCTOR_PORTOL_DOCTOR_ADD_NEWVISITS_IMG,
        text: "Doctors can add new patient visits including visit type, diagnosis, and follow-up actions. The interface validates inputs, ensures accurate scheduling, and updates patient records in real-time for seamless clinical tracking.",
        features: ["Visit type selection", "Diagnosis entry", "Treatment planning", "Real-time validation"],
        designNote: "Streamlined visit entry with clinical decision support"
      },
      {
        heading: "Complete Patient Medical Record",
        subheading: "Electronic Health Record View",
        src: Images.HEALINK_DOCTOR_PORTOL_PATIENTDETAILS_IMG,
        text: "Shows comprehensive information for each patient including medical history, prescriptions, and prior visits. Supports decision-making during consultations and ensures accurate documentation.",
        features: ["Medical history", "Medication list", "Lab results", "Visit timeline"],
        designNote: "Comprehensive EHR for informed clinical decisions"
      },
      {
        heading: "Extended Patient Information Dashboard",
        subheading: "Detailed Health Status Overview",
        src: Images.HEALINK_DOCTOR_PORTOL_PATIENTDETAILS1_IMG,
        text: "Provides additional details such as lab results, imaging records, and notes from prior visits. Enables doctors to have a complete overview of the patient's health status.",
        features: ["Lab integration", "Imaging viewer", "Clinical notes", "Vital signs"],
        designNote: "Integrated health data for holistic patient view"
      },
      {
        heading: "Patient Care Coordination Interface",
        subheading: "Treatment Planning & Task Management",
        src: Images.HEALINK_DOCTOR_PORTOL_PATIENTDETAILS2_IMG,
        text: "A detailed patient interaction view highlighting scheduled procedures, pending tasks, and alerts. Helps doctors prioritize actions for efficient patient care.",
        features: ["Task prioritization", "Procedure scheduling", "Alert management", "Care coordination"],
        designNote: "Action-oriented interface for treatment management"
      },
      {
        heading: "Patient Analytics & Treatment History",
        subheading: "Clinical Decision Support System",
        src: Images.HEALINK_DOCTOR_PORTOL_PATIENTDETAILS3_IMG,
        text: "Displays advanced analytics, ongoing treatments, and historical visit summaries. Supports data-driven clinical decisions and documentation compliance.",
        features: ["Treatment analytics", "Outcome tracking", "Historical trends", "Compliance tools"],
        designNote: "Evidence-based care with comprehensive analytics"
      },
      {
        heading: "Staff-Assisted Visit Management",
        subheading: "Collaborative Care Documentation",
        src: Images.HEALINK_DOCTOR_PORTAL_DOCTOE_STAFFVISITS_IMG,
        text: "Doctors can track and manage staff-assisted visits, reviewing actions performed by nurses or assistants. Provides transparency and ensures proper delegation and accountability.",
        features: ["Staff action log", "Delegation tools", "Review workflow", "Accountability tracking"],
        designNote: "Team-based care coordination with clear accountability"
      },

      // ===================== PATIENT PORTAL =====================
      {
        heading: "Patient Personal Health Dashboard",
        subheading: "Self-Service Medical Records Portal",
        src: Images.HEALINK_PATIENT_PORTAL_PATIENTDETAILS_IMG,
        text: "Patient portal screen displaying personal information, visit history, and upcoming appointments. Patients can review their health data, schedule visits, and interact securely with doctors.",
        features: ["Appointment booking", "Health records", "Secure messaging", "Document access"],
        designNote: "Patient-empowering portal for health management"
      },
      {
        heading: "Extended Patient Health Profile",
        subheading: "Comprehensive Medical History View",
        src: Images.HEALINK_PATIENT_PORTAL_PATIENTDETAILS1_IMG,
        text: "Extended patient profile showing medical history, medications, and doctor notes. Provides patients with a comprehensive overview of their health records.",
        features: ["Timeline view", "Medication tracker", "Doctor communications", "Health documents"],
        designNote: "Transparent health information for informed patients"
      },
      {
        heading: "Patient Treatment Progress Tracker",
        subheading: "Visit Summary & Lab Results Portal",
        src: Images.HEALINK_PATIENT_PORTAL_PATIENTDETAILS2_IMG,
        text: "Displays recent visit summaries, lab results, and prescriptions. Patients can track their treatment progress and upcoming appointments efficiently.",
        features: ["Lab results", "Prescription refills", "Treatment timeline", "Progress tracking"],
        designNote: "Progress monitoring for patient engagement"
      },
      {
        heading: "Patient Care Management Interface",
        subheading: "Health Action Items & Alerts",
        src: Images.HEALINK_PATIENT_PORTAL_PATIENTDETAILS3_IMG,
        text: "Shows detailed reports, follow-up actions, and alerts for upcoming visits. Ensures patients remain informed and engaged with their healthcare management.",
        features: ["Action reminders", "Visit alerts", "Follow-up tasks", "Health notifications"],
        designNote: "Proactive patient engagement with timely reminders"
      },
      {
        heading: "Medical Report Generation & Export",
        subheading: "Downloadable Health Records",
        src: Images.HEALINK_PATIENT_REPORT_IMG,
        text: "Comprehensive report generation screen for patients, including lab results, visit summaries, and treatment plans. Allows secure download or printing for personal records or referrals.",
        features: ["PDF export", "Print option", "Secure sharing", "Report customization"],
        designNote: "Portable health records for patient control"
      },

      // ===================== STAFF PORTAL =====================
      {
        heading: "Staff Member Registration System",
        subheading: "Personnel Onboarding Interface",
        src: Images.HEALINK_STAFFPORTAL_ADDNEW_STAFF_IMG,
        text: "Administer staff profiles by adding new personnel with role assignments, permissions, and schedules. Ensures smooth onboarding and workflow management in the clinic.",
        features: ["Role assignment", "Permission settings", "Schedule setup", "Credential verification"],
        designNote: "Streamlined onboarding with role-based configuration"
      },
      {
        heading: "Healthcare Staff Administration Center",
        subheading: "Personnel Performance & Task Management",
        src: Images.HEALINK_STAFFPORTOL_STAFF_MANAGMENT_IMG,
        text: "View and manage all staff members including doctors, nurses, and administrative personnel. Provides performance summaries, task assignments, and detailed role-based controls.",
        features: ["Performance tracking", "Task distribution", "Role management", "Activity monitoring"],
        designNote: "Comprehensive staff oversight with performance metrics"
      },
      {
        heading: "Staff Visit Scheduling Interface",
        subheading: "Patient Appointment Coordination",
        src: Images.HEALINK_STAFFPORTOL_STAFF_ADDNEW_VISIT_IMG,
        text: "Staff can schedule new patient visits, update visit records, and coordinate with doctors. Ensures accurate documentation and smooth patient care workflow.",
        features: ["Appointment scheduling", "Doctor coordination", "Record updates", "Conflict detection"],
        designNote: "Efficient appointment management with coordination tools"
      },
      {
        heading: "Staff Doctor Directory & Schedules",
        subheading: "Medical Staff Coordination Hub",
        src: Images.HEALINK_STAFFPORTOL_STAFF_DOCTORS_IMG,
        text: "Staff can view the list of doctors, their schedules, and assignments. Enables effective coordination between staff and medical professionals.",
        features: ["Doctor availability", "Schedule viewing", "Assignment tracking", "Contact information"],
        designNote: "Coordination tools for effective team collaboration"
      },
      {
        heading: "Staff Patient Information Access",
        subheading: "Clinical Support Data View",
        src: Images.HEALINK_STAFFPORTOL_STAFF_PATIENTDETAILS_IMG,
        text: "Displays patient information relevant to staff duties, including treatment progress and visit history. Helps staff assist doctors and maintain accurate records.",
        features: ["Treatment tracking", "Visit history", "Task lists", "Communication tools"],
        designNote: "Role-appropriate patient data for support staff"
      },
      {
        heading: "Staff Visit Management Dashboard",
        subheading: "Assigned Patient Care Tasks",
        src: Images.HEALINK_STAFFPORTOL_STAFFVISIT_IMG,
        text: "Staff can track, manage, and update visit records for patients they assist. Provides clarity on assigned tasks and supports operational efficiency.",
        features: ["Task assignments", "Status updates", "Documentation", "Time tracking"],
        designNote: "Task-focused interface for efficient care delivery"
      },

      // ===================== DENTAL CHARTS =====================
      {
        heading: "Interactive Dental Charting System",
        subheading: "Visual Oral Health Documentation",
        src: Images.HEALINK_PATIENT_PORTAL_DENTALCHART_IMG,
        text: "Visual representation of the patient's dental structure, highlighting teeth conditions and previous treatments. Allows doctors and staff to plan procedures effectively.",
        features: ["Visual tooth mapping", "Condition marking", "Treatment history", "Procedure planning"],
        designNote: "Intuitive visual charting for dental documentation"
      },
      {
        heading: "Dental Treatment History Chart",
        subheading: "Completed Procedures Documentation",
        src: Images.HEALINK_PATIENT_PORTOL_DENTALCHART_EXISTINGPROCEDURE_IMG,
        text: "Displays previously performed dental procedures on the patient. Facilitates historical reference and ensures continuity of care.",
        features: ["Procedure history", "Date tracking", "Provider notes", "Image attachments"],
        designNote: "Historical dental record with visual reference"
      },
      {
        heading: "Pending Dental Procedures Overview",
        subheading: "Treatment Planning Interface",
        src: Images.HEALINK_PATIENT_PORTAL_DENTALCHART_PENDIND_IMG,
        text: "Shows planned but not yet completed procedures. Supports treatment planning and prioritization.",
        features: ["Treatment queue", "Priority marking", "Cost estimates", "Scheduling tools"],
        designNote: "Forward-looking treatment planning tool"
      },
      {
        heading: "Dental Treatment Task Management",
        subheading: "Procedure Scheduling & Prioritization",
        src: Images.HEALINK_PATIENT_PORTAL_DENTALCHART_PENDIND2_IMG,
        text: "Alternate view of pending procedures with more detailed task breakdowns and scheduling options.",
        features: ["Detailed tasks", "Appointment linking", "Resource allocation", "Patient communication"],
        designNote: "Comprehensive procedure management with scheduling"
      },
      {
        heading: "Mobile Dental Chart Viewer",
        subheading: "Point-of-Care Dental Records",
        src: Images.HEALINK_PATIENT_PORTOL_DENTALCHART_WATCH_IMG,
        text: "Interactive dental chart view for monitoring treatments and procedure updates. Supports mobile or wearable device integration for quick reference.",
        features: ["Mobile optimization", "Touch interface", "Quick updates", "Offline access"],
        designNote: "Chairside-optimized for immediate reference"
      },

      // ===================== TOOTH DETAILS =====================
      {
        heading: "Individual Tooth Detail View",
        subheading: "Tooth-Specific Clinical Information",
        src: Images.HEALINK_TOOTHDETAILS_WATCH_IMG,
        text: "Provides detailed information about a specific tooth, including condition, treatments, and history. Interactive view allows doctors and staff to plan care effectively.",
        features: ["Condition assessment", "Treatment history", "Notes section", "Image gallery"],
        designNote: "Granular tooth-level documentation"
      },
      {
        heading: "Enhanced Tooth Clinical Profile",
        subheading: "Comprehensive Tooth Treatment Record",
        src: Images.HEALINK_TOOTHDETAILS_WATCH_V2_IMG,
        text: "Enhanced view of tooth details with additional procedure notes, timelines, and patient-specific recommendations.",
        features: ["Timeline visualization", "Procedure recommendations", "Risk indicators", "Care notes"],
        designNote: "Clinical decision support for tooth-level care"
      },
      {
        heading: "Tooth Documentation Export Format",
        subheading: "Shareable Tooth Records",
        src: Images.HEALINK_TOOTHDETAILS_WATCH_V2PNG_IMG,
        text: "Alternate format of tooth details for documentation or sharing. Maintains all interactive and visual elements in a static format.",
        features: ["Export format", "Print ready", "Annotation support", "Referral ready"],
        designNote: "Documentation format for sharing and records"
      },
      {
        heading: "Tooth Treatment History Log",
        subheading: "Procedure Audit Trail",
        src: Images.HEALINK_TOOTHDETAILS_EXISTINGPROCEDURE_IMG,
        text: "Shows the history of treatments performed on the selected tooth, including completed procedures and follow-up notes. Supports ongoing dental care management.",
        features: ["Chronological log", "Provider attribution", "Outcome tracking", "Follow-up notes"],
        designNote: "Complete treatment history for informed care"
      }
    ]
  },

{
  id: 5,
  title: "eFile System",
  overview: "eFile is a comprehensive digital tax and document management platform designed to streamline the filing, tracking, and management of various forms, recipients, and payer accounts. It provides secure login, detailed dashboards, efficient form handling, PDF sharing, order management, and user profile maintenance for seamless digital operations.",
  
  images: [
    // =============== LOGIN / AUTH SCREENS ===============
    {
      heading: "Secure Tax Portal Login",
      subheading: "Enterprise-Grade Authentication Gateway",
      src: Images.eFILE_LOGIN_IMG,
      text: "The secure login interface enables users to access their eFile account safely. It includes fields for email and password, integrates smooth error handling for incorrect credentials, and ensures that authentication flows seamlessly into the main dashboard. Designed with security best practices, it protects sensitive tax and financial information from unauthorized access.",
      features: ["Multi-factor authentication support", "Session management", "Encrypted credentials", "Brute force protection"],
      designNote: "Security-first design protecting sensitive financial data"
    },
    {
      heading: "Password Creation & Security Setup",
      subheading: "Strong Credential Configuration",
      src: Images.eFILE_CREATE_PASSWORD_IMG,
      text: "This screen allows new users or recovering users to create a strong password. It incorporates validation rules to ensure password complexity and secure storage. Users receive immediate feedback on password strength and confirmation matching, helping maintain account integrity and reduce potential security risks.",
      features: ["Real-time strength indicator", "Complexity requirements", "Match validation", "Security tips"],
      designNote: "Proactive security guidance for password creation"
    },
    {
      heading: "Password Recovery Initiation",
      subheading: "Account Access Restoration Portal",
      src: Images.eFILE_FORGOT_PASSWORD_IMG,
      text: "The first step in password recovery, enabling users to request a reset link or OTP by entering their registered email. This screen guides users through the recovery process securely and efficiently, ensuring that only verified users can proceed with account restoration. Clear instructions and error handling improve user experience.",
      features: ["Email verification", "Rate limiting", "Clear instructions", "Support links"],
      designNote: "Secure recovery flow with user guidance"
    },
    {
      heading: "Secure Password Reset Interface",
      subheading: "Credential Update Workflow",
      src: Images.eFILE_RESET_PASSWORD_IMG,
      text: "Provides users with a secure form to enter and confirm a new password. Validation ensures strong passwords and proper matching between fields. The interface emphasizes safety, guiding users step-by-step to regain access to their account, while maintaining compliance with security protocols and user confidence.",
      features: ["Password confirmation", "Strength validation", "Security checklist", "Expiry timer"],
      designNote: "Step-by-step recovery with security emphasis"
    },
    {
      heading: "Email Verification System",
      subheading: "OTP-Based Identity Confirmation",
      src: Images.eFILE_EMAIL_VERIFICATION_IMG,
      text: "This verification screen confirms a user's email through OTP entry. By verifying ownership of the email address, the system prevents unauthorized access and enhances overall account security. The interface is simple and clear, with options to resend OTPs and guidance on common issues.",
      features: ["OTP input", "Resend functionality", "Timer display", "Auto-focus"],
      designNote: "Friction-reduced verification with clear feedback"
    },
    {
      heading: "Password Recovery Email Verification",
      subheading: "Reset Flow Identity Validation",
      src: Images.eFILE_EMAIL_VERIFICATION_FOR_FORGOT_PASSWORD_IMG,
      text: "Specifically designed for the password recovery process, this screen confirms user identity via OTP sent to their registered email. Clear instructions and prompt feedback ensure that users can quickly verify their account before proceeding to reset their password, maintaining both security and convenience.",
      features: ["Context-specific messaging", "Quick resend", "Clear countdown", "Error handling"],
      designNote: "Recovery-focused verification with guidance"
    },
    {
      heading: "Mobile Number Verification",
      subheading: "SMS-Based Authentication Layer",
      src: Images.eFILE_NUMBER_VERIFICATION_IMG,
      text: "Users can verify their mobile number using a one-time code. This step adds an extra layer of account security, allowing eFile to ensure that critical communications reach the correct user. The screen provides clear instructions for entering the OTP and options to resend codes when necessary.",
      features: ["SMS OTP delivery", "Number masking", "Resend option", "Edit number"],
      designNote: "Additional security layer with communication verification"
    },
    {
      heading: "Multi-Factor Authentication Portal",
      subheading: "Enhanced Security Verification",
      src: Images.eFILE_MFA_IMG,
      text: "This screen enhances account security by implementing a second layer of verification beyond the password. Users may authenticate using OTPs, authenticator apps, or SMS codes. The interface balances security with ease of use, ensuring users can securely access their accounts without unnecessary friction.",
      features: ["Multiple auth methods", "Authenticator app support", "Backup codes", "Remember device"],
      designNote: "Flexible MFA with user choice and convenience"
    },
    {
      heading: "Security Question Setup",
      subheading: "Account Recovery Safeguards",
      src: Images.eFILE_SECURITY_QUESTIONS_IMG,
      text: "As an additional security measure, users answer pre-defined or custom security questions. This screen helps verify identity in sensitive operations like password recovery or account changes. Clear prompts and guidance ensure that users understand how to provide accurate and memorable answers.",
      features: ["Question selection", "Custom answers", "Hint system", "Answer strength"],
      designNote: "Knowledge-based authentication for account protection"
    },
    {
      heading: "Sequential Security Verification",
      subheading: "Multi-Question Identity Validation",
      src: Images.eFILE_SEQURITY_QUESTION_IMG,
      text: "This variant presents multiple security questions in sequence to validate user identity. Designed for high-security scenarios, it ensures only the verified user can proceed with sensitive actions. The interface provides clarity and guidance while minimizing user errors during input.",
      features: ["Progressive questions", "Skip prevention", "Clear progress", "Retry limits"],
      designNote: "Layered security for high-risk operations"
    },

    // =============== SIGNUP / USER INFO ===============
    {
      heading: "New User Registration Portal",
      subheading: "Account Creation & Onboarding",
      src: Images.eFILE_SIGNUP_IMG,
      text: "The registration screen allows new users to create their eFile account by entering essential personal and business information. Designed for clarity and ease, it guides users through all required fields and validates inputs in real-time, preparing them for full access to the platform's tools and features.",
      features: ["Real-time validation", "Progress indication", "Field grouping", "Auto-complete support"],
      designNote: "Conversion-optimized signup reducing abandonment"
    },
    {
      heading: "Detailed User Information Collection",
      subheading: "Comprehensive Profile Setup",
      src: Images.eFILE_SIGNUP_USERINFO_IMG,
      text: "Collects detailed personal or business information during the signup process. This screen ensures that all necessary data, such as name, address, and contact info, are accurately captured. Helpful tooltips and input validation improve accuracy and reduce onboarding friction.",
      features: ["Address autocomplete", "Format validation", "Inline help", "Save progress"],
      designNote: "Thorough data collection with user assistance"
    },
    {
      heading: "Access Code Validation System",
      subheading: "Secure Feature Unlock Portal",
      src: Images.eFILE_ACCESS_CODE_IMG,
      text: "Some accounts or workflows require access codes to proceed. This screen provides a secure way to input and validate these codes. It ensures that only authorized users can unlock advanced features or restricted areas, supporting compliance with internal security policies.",
      features: ["Code validation", "Attempt limiting", "Clear error messages", "Support contact"],
      designNote: "Gated access for premium or restricted features"
    },

    // =============== HOME SCREENS ===============
    {
      heading: "Tax Management Dashboard",
      subheading: "Central Command Center",
      src: Images.eFILE_HOME_IMG,
      text: "The main dashboard provides users with an overview of their eFile account, recent activity, and actionable insights. It highlights pending forms, alerts, and critical notifications. Designed for intuitive navigation, it allows users to quickly access different modules and understand their current tasks.",
      features: ["Activity feed", "Quick actions", "Alert system", "Module shortcuts"],
      designNote: "Task-oriented dashboard for efficient tax management"
    },
    {
      heading: "Alternative Dashboard View",
      subheading: "Widget-Based Interface Layout",
      src: Images.eFILE_HOME1_IMG,
      text: "A secondary view of the home dashboard providing alternative layout or additional widgets. This variant emphasizes data visualization, quick links, and personalized user shortcuts for faster workflow navigation.",
      features: ["Customizable widgets", "Data visualization", "Personalized shortcuts", "Drag-and-drop layout"],
      designNote: "Flexible dashboard adapting to user preferences"
    },
    {
      heading: "Contextual Help System",
      subheading: "Interactive User Guidance",
      src: Images.eFILE_TOOLTIPS_IMG,
      text: "Displays contextual information and guidance for various dashboard elements. Tooltips help users understand features, reduce errors, and improve efficiency, particularly for first-time users navigating the system.",
      features: ["Context-sensitive help", "Dismissible tips", "Progressive disclosure", "Tutorial mode"],
      designNote: "Just-in-time learning reducing support needs"
    },
    {
      heading: "Tooltip Interaction Patterns",
      subheading: "Dynamic Help Behavior System",
      src: Images.eFILE_TOOLTIP_BEHAVIOUR_IMG,
      text: "This screen demonstrates how tooltips behave under different interactions. It ensures that contextual guidance appears when needed without obstructing other functionalities, creating a seamless user experience.",
      features: ["Smart positioning", "Auto-dismiss", "Interaction tracking", "Accessibility support"],
      designNote: "Non-intrusive guidance enhancing usability"
    },

    // =============== DASHBOARD / PROFILE / ACCOUNT ===============
    {
      heading: "Personal Information Management",
      subheading: "User Profile Administration",
      src: Images.eFILE_MY_INFO_IMG,
      text: "The personal information dashboard allows users to review and edit their profile. Users can update personal details, contact info, and account settings. The interface ensures data integrity through validation and provides easy navigation to related settings.",
      features: ["Profile editing", "Contact management", "Verification status", "Privacy controls"],
      designNote: "Self-service profile management with validation"
    },
    {
      heading: "Extended Profile Settings",
      subheading: "Advanced User Preferences",
      src: Images.eFILE_MY_INFO1_IMG,
      text: "An alternative view of the profile screen, providing additional panels or sections for user preferences, notification settings, and connected accounts. Designed to enhance the manageability of user data.",
      features: ["Notification preferences", "Connected accounts", "Security settings", "Activity history"],
      designNote: "Comprehensive settings for power users"
    },
    {
      heading: "Detailed User Profile Analytics",
      subheading: "Account Activity & Audit Trail",
      src: Images.eFILE_MY_INFO2_IMG,
      text: "Extended profile management view showing detailed user data, activity logs, and audit information. Users can review history, edit sensitive fields, and manage verification settings.",
      features: ["Activity timeline", "Login history", "Device management", "Audit logs"],
      designNote: "Transparency and control over account activity"
    },
    {
      heading: "Company Information Portal",
      subheading: "Business Entity Management",
      src: Images.eFILE_COMPANY_INFO_IMG,
      text: "Displays corporate or organization details associated with the user account. Includes registration info, legal identifiers, and operational contacts. The screen provides editing options while ensuring compliance with verification requirements.",
      features: ["Business details", "Tax ID management", "Legal information", "Multi-entity support"],
      designNote: "Business account management with compliance focus"
    },
    {
      heading: "Comprehensive User Account Details",
      subheading: "Complete Profile Overview",
      src: Images.eFILE_USER_DETAILS_IMG,
      text: "Shows a comprehensive summary of user account information. Enables admin-level or user-level edits, with audit trails for accountability. This screen is crucial for maintaining accurate records for tax and reporting purposes.",
      features: ["Complete profile view", "Edit capabilities", "Version history", "Compliance tracking"],
      designNote: "Holistic account view for accuracy and compliance"
    },
    {
      heading: "Account Ownership Transfer",
      subheading: "Secure Account Migration System",
      src: Images.eFILE_TRANSFER_ACCOUNT_IMG,
      text: "Provides functionality for transferring account ownership or access rights. The interface guides users through secure verification, recipient confirmation, and final transfer steps, ensuring all data remains protected.",
      features: ["Ownership transfer", "Multi-step verification", "Recipient validation", "Transfer history"],
      designNote: "Secure account transition with verification"
    },
    {
      heading: "Error Handling & User Feedback",
      subheading: "System Response Patterns",
      src: Images.eFILE_ERROR_BEHAVIOUR_IMG,
      text: "Demonstrates how errors are handled throughout the platform. This screen ensures users receive clear, actionable feedback for failed actions, invalid inputs, or system exceptions, improving overall usability and reducing support requests.",
      features: ["Clear error messages", "Recovery suggestions", "Support links", "Error logging"],
      designNote: "User-friendly error states with actionable guidance"
    },

    // =============== PAYERS ===============
    {
      heading: "Payer Management Dashboard",
      subheading: "Financial Entity Tracking",
      src: Images.eFILE_PAYER_IMG,
      text: "Displays all payers associated with the user account. Users can view payer details, track contributions, and access transaction history. The interface emphasizes clarity and ease of management for financial and reporting activities.",
      features: ["Payer directory", "Transaction history", "Quick search", "Bulk actions"],
      designNote: "Efficient payer tracking for tax compliance"
    },
    {
      heading: "Enhanced Payer List View",
      subheading: "Advanced Filtering & Metrics",
      src: Images.eFILE_PAYER1_IMG,
      text: "An alternative payers view that provides detailed metrics, filtering options, and actionable buttons for editing or adding new payer information.",
      features: ["Advanced filters", "Sort options", "Export capability", "Quick edit"],
      designNote: "Data-rich view for payer analysis"
    },
    {
      heading: "Payer Analytics Dashboard",
      subheading: "Financial Insights & Reporting",
      src: Images.eFILE_PAYER2_IMG,
      text: "Further visualization of payer data, including sortable tables, search functionality, and insights for compliance and reporting purposes.",
      features: ["Data visualization", "Trend analysis", "Compliance checks", "Report generation"],
      designNote: "Analytics-driven payer management"
    },
    {
      heading: "Comprehensive Payer Overview",
      subheading: "Detailed Entity Information",
      src: Images.eFILE_PAYER3_IMG,
      text: "Displays advanced payer analytics and notifications for changes or actions required. Enables quick navigation to payer-related forms or transactions.",
      features: ["Action alerts", "Change notifications", "Related forms", "Contact management"],
      designNote: "Proactive payer management with alerts"
    },
    {
      heading: "New Payer Registration",
      subheading: "Financial Entity Onboarding",
      src: Images.eFILE_ADD_PAYER_IMG,
      text: "Allows users to add a new payer to the system. Input fields include essential contact and financial details, with validation to prevent errors and ensure accurate records for tax and compliance purposes.",
      features: ["Guided input", "TIN validation", "Duplicate detection", "Address verification"],
      designNote: "Accurate payer registration with validation"
    },

    // =============== RECIPIENTS ===============
    {
      heading: "Recipient Registration Portal",
      subheading: "Payee Information Management",
      src: Images.eFILE_ADD_RECIPIENT_IMG,
      text: "Enables users to add new recipients to the system for payments or filings. Includes form fields for personal or business details, validation for accurate entry, and clear guidance for compliance with tax rules.",
      features: ["Personal/business toggle", "Tax ID validation", "Address autocomplete", "Duplicate check"],
      designNote: "Compliant recipient registration with guidance"
    },

    // =============== FORMS (1099, etc.) ===============
    {
      heading: "Tax Forms Management Center",
      subheading: "Comprehensive Form Directory",
      src: Images.eFILE_FORMS_IMG,
      text: "The central hub for all form-related activities. Users can view, select, or manage forms, including 1099, 1098, and other reporting documents. Designed for ease of navigation with quick access to frequently used forms.",
      features: ["Form catalog", "Recent forms", "Status tracking", "Batch operations"],
      designNote: "Centralized form management for efficiency"
    },
    {
      heading: "Form Type Selection Interface",
      subheading: "Smart Form Picker",
      src: Images.eFILE_SELECT_FORM_IMG,
      text: "Allows users to choose specific forms for creation or management. Includes search, filter, and preview options to ensure the correct form is selected for filing, improving efficiency and accuracy.",
      features: ["Form search", "Category filters", "Form preview", "Requirements display"],
      designNote: "Intuitive form selection reducing errors"
    },
    {
      heading: "1099-MISC Creation Wizard",
      subheading: "Miscellaneous Income Reporting",
      src: Images.eFILE_1099_INT_CREATE_FORM_IMG,
      text: "Enables creation of 1099-MISC forms with structured fields and validation. Users can input payer and recipient details, amounts, and filing dates, ensuring compliance with IRS requirements.",
      features: ["Step-by-step wizard", "Field validation", "Auto-calculation", "Save draft"],
      designNote: "IRS-compliant form creation with guidance"
    },
    {
      heading: "1099-INT Form Builder - Step 1",
      subheading: "Interest Income Reporting Portal",
      src: Images.eFILE_1099_INT_CREATE_FORM1_IMG,
      text: "Supports creation of 1099-INT forms with precise input handling. Includes guidance for entering interest amounts, payer info, and recipient details while validating data integrity.",
      features: ["Interest amount entry", "Box-by-box guidance", "Calculation helpers", "Error prevention"],
      designNote: "Accurate interest income reporting"
    },
    {
      heading: "1099-INT Form Builder - Step 2",
      subheading: "Advanced Interest Reporting Details",
      src: Images.eFILE_1099_INT_CREATE_FORM2_IMG,
      text: "A continuation of 1099-INT form creation workflow, offering advanced field options, tooltips, and error prevention to minimize mistakes in tax reporting.",
      features: ["Advanced fields", "Contextual help", "Validation rules", "Preview mode"],
      designNote: "Comprehensive form completion with validation"
    },
    {
      heading: "1099-INT Form Review & Submit",
      subheading: "Final Verification Step",
      src: Images.eFILE_1099_INT_CREATE_FORM3_IMG,
      text: "Final step in 1099-INT form creation, providing review, validation, and submission options. Users can verify all data before filing, reducing risk of errors or rejection.",
      features: ["Complete review", "Error checking", "Electronic signature", "Submit confirmation"],
      designNote: "Final verification preventing submission errors"
    },

    // =============== PREVIEW / PRINT / PDF ===============
    {
      heading: "PDF Generation & Sharing",
      subheading: "Secure Document Distribution",
      src: Images.eFILE_PDFSHARE_IMG,
      text: "Allows users to generate and share PDFs of forms, reports, or statements. Features include secure download, email sharing, and print options, ensuring that sensitive financial information is handled safely.",
      features: ["PDF generation", "Email sharing", "Access control", "Watermarking"],
      designNote: "Secure document sharing with control"
    },
    {
      heading: "Print Preview Interface",
      subheading: "Document Output Preparation",
      src: Images.eFILE_PRINT_SCREEN_IMG,
      text: "Enables printing of selected forms or reports. Users can preview layouts, select pages, and access printer settings to ensure professional output and compliance with filing standards.",
      features: ["Print preview", "Page selection", "Printer settings", "Layout options"],
      designNote: "Professional print output with preview"
    },
    {
      heading: "Advanced Print Configuration",
      subheading: "Custom Print Settings",
      src: Images.eFILE_PRINT_SCREEN1_IMG,
      text: "Provides alternative print preview options, including page scaling, orientation settings, and detailed layout verification to reduce errors during physical document production.",
      features: ["Scaling options", "Orientation control", "Margin adjustment", "Multi-page preview"],
      designNote: "Precise print control for compliance"
    },
    {
      heading: "Enhanced Print Layout Review",
      subheading: "Document Formatting Verification",
      src: Images.eFILE_PRINT_SCREEN2_IMG,
      text: "Further print preview interface with advanced options for selecting sections of a form, adding headers/footers, and verifying page numbers for accurate submissions.",
      features: ["Section selection", "Header/footer", "Page numbering", "Batch printing"],
      designNote: "Detailed print customization"
    },
    {
      heading: "IRS Form Print Portal",
      subheading: "Official Tax Document Printing",
      src: Images.eFILE_PRINT_SCREENIRS_WITH_PRINTOPTION_IMG,
      text: "Specifically designed for IRS forms, this screen allows users to print forms according to official formatting requirements. Ensures accuracy and compliance in physical submissions.",
      features: ["IRS formatting", "Official templates", "Compliance checking", "Print quality control"],
      designNote: "IRS-compliant document printing"
    },
    {
      heading: "IRS Form Download Center",
      subheading: "Official Document Export",
      src: Images.eFILE_PRINT_SCREENIRS_WITH_DOWNLOADOPTIOM_IMG,
      text: "Provides IRS form download functionality in PDF format. Users can save and distribute official forms while preserving exact formatting for compliance and record-keeping.",
      features: ["Official PDF format", "Digital signature", "Archive quality", "Batch download"],
      designNote: "Official document export for compliance"
    },
    {
      heading: "Form Summary Preview",
      subheading: "Comprehensive Data Review",
      src: Images.eFILE_SUMMARY_FORM_IMG,
      text: "Displays a complete summary of a form before printing or sharing. Users can review all entered data, detect discrepancies, and confirm that records are complete and accurate.",
      features: ["Complete data view", "Error highlighting", "Edit access", "Approval workflow"],
      designNote: "Final review preventing submission errors"
    },
    {
      heading: "Summary Print Interface",
      subheading: "Consolidated Report Printing",
      src: Images.eFILE_SUMMARY_PRINT_SCREEN_IMG,
      text: "Preview and print summary forms with clarity. Includes print layout options and ensures that all relevant details are visible and properly formatted for submission.",
      features: ["Summary layout", "Print optimization", "Multi-form support", "Page breaks"],
      designNote: "Professional summary printing"
    },
    {
      heading: "Enhanced Summary Print View",
      subheading: "Advanced Report Customization",
      src: Images.eFILE_SUMMARY_PRINT_SCREEN1_IMG,
      text: "Alternative view for printing summary forms. Offers layout customization, page selection, and enhanced readability, helping users produce professional and accurate physical copies.",
      features: ["Custom layouts", "Field selection", "Grouping options", "Export formats"],
      designNote: "Flexible summary presentation"
    },
    {
      heading: "IRS Summary Print Portal",
      subheading: "Compliant Summary Documentation",
      src: Images.eFILE_SUMMARY_PRINTSCREEN_IRS_WITHPRINT_OPTION_IMG,
      text: "Provides IRS-compliant summary form printing options. Ensures users can produce official copies that meet regulatory requirements and are suitable for filing or record-keeping.",
      features: ["IRS compliance", "Official formatting", "Regulatory validation", "Audit trail"],
      designNote: "Regulatory-compliant summary printing"
    },

    // =============== ORDERS / SALES ===============
    {
      heading: "Order Management Dashboard",
      subheading: "Filing Status Tracking System",
      src: Images.eFILE_ORDER_IMG,
      text: "Displays all pending, completed, and in-progress orders related to filings or document submissions. Users can track status, manage updates, and ensure deadlines are met efficiently through this centralized screen.",
      features: ["Status tracking", "Deadline alerts", "Bulk operations", "Order history"],
      designNote: "Centralized order management for deadline compliance"
    },

    // =============== MISCELLANEOUS ===============
    {
      heading: "Leave Request Management",
      subheading: "Time-Off Documentation System",
      src: Images.eFILE_LEAVE_FORM_IMG,
      text: "Allows users to submit leave requests or related documentation. Features include form input validation, attachments, status tracking, and approvals, ensuring proper workflow management and accountability.",
      features: ["Request submission", "Document attachment", "Approval workflow", "Calendar integration"],
      designNote: "Streamlined leave management with tracking"
    }
  ]
},

{
  id: 4,
  title: "Valor Sport Card",
  overview: "Valor Sport Card is a comprehensive platform for sports enthusiasts, enabling seamless management of memberships, orders, payments, and analytics. It provides secure authentication, detailed dashboards for users and admins, order tracking, payment management, and advanced analytics. The platform is designed to ensure smooth workflows, transparency, and actionable insights for all users.",
  
  images: [
    // ===================== AUTH (LOGIN / SIGNUP / PASSWORD) =====================
    {
      heading: "Sports Card Platform Login",
      subheading: "Secure Member Authentication",
      src: Images.VALOR_SPORT_CARD_LOGIN_IMG,
      text: "The login screen provides secure access to the Valor Sport Card platform. Users can sign in with their registered credentials, with options to recover forgotten passwords or navigate to the signup page.",
      features: ["Credential authentication", "Remember me option", "Social login", "Password visibility toggle"],
      designNote: "Sports enthusiast-focused authentication with quick access"
    },
    {
      heading: "New Member Registration",
      subheading: "Account Creation Portal",
      src: Images.VALOR_SPORT_CARD_SIGNUP_IMG,
      text: "Registration interface for new users to create an account. Collects personal information and account credentials while providing guidance for a smooth onboarding experience.",
      features: ["Progressive registration", "Email verification", "Terms acceptance", "Welcome incentives"],
      designNote: "Fan-friendly onboarding optimizing conversion"
    },
    {
      heading: "Password Recovery Portal",
      subheading: "Account Access Restoration",
      src: Images.VALOR_SPORT_CARD_FORGET_PASSWORD_IMG,
      text: "Password recovery screen where users can request a reset link or OTP. Ensures account security and provides step-by-step guidance to regain access.",
      features: ["Email verification", "Security questions", "Reset link expiry", "Support access"],
      designNote: "Secure recovery balancing security and convenience"
    },
    {
      heading: "Password Reset Interface",
      subheading: "Credential Update System",
      src: Images.VALOR_SPORT_CARD_NEW_PASSWORD_IMG,
      text: "Allows users to securely set a new password. Includes validation, confirmation fields, and feedback to ensure strong, reliable credentials.",
      features: ["Strength indicator", "Match validation", "Security requirements", "Success confirmation"],
      designNote: "Secure password creation with user guidance"
    },
    {
      heading: "Identity Verification Portal",
      subheading: "OTP Confirmation System",
      src: Images.VALOR_SPORT_CARD_VERIFICATION_IMG,
      text: "OTP verification screen ensures user identity before completing sensitive operations like password reset or account creation. Provides an additional layer of security.",
      features: ["OTP input", "Resend option", "Auto-submit", "Timeout display"],
      designNote: "Friction-reduced verification for security"
    },

    // ===================== USER DASHBOARD / HOME =====================
    {
      heading: "Member Dashboard Hub",
      subheading: "Personalized Sports Card Center",
      src: Images.VALOR_SPORT_CARD_DASHBOARD_IMG,
      text: "Main dashboard for users displaying key metrics, active memberships, and recent activity. Supports quick navigation to orders, payments, and analytics.",
      features: ["Card overview", "Recent activity", "Quick actions", "Personalized recommendations"],
      designNote: "Engaging dashboard for sports card enthusiasts"
    },
    {
      heading: "Dark Mode Dashboard",
      subheading: "Night-Optimized Interface",
      src: Images.VALOR_SPORT_CARD_HOMEDARK1_IMG,
      text: "Alternate dark-mode home view with optimized readability and focus on important cards. Enhances user experience for extended usage.",
      features: ["Dark theme", "Eye-strain reduction", "Enhanced contrast", "Theme persistence"],
      designNote: "Extended-use optimization with dark mode"
    },
    {
      heading: "Performance Analytics Dashboard",
      subheading: "Card Collection Insights",
      src: Images.VALOR_SPORT_CARD_ANALYTICS_IMG,
      text: "Comprehensive analytics dashboard showing trends, activity breakdowns, and performance metrics. Helps users track usage patterns and make informed decisions.",
      features: ["Visual analytics", "Trend tracking", "Value estimation", "Collection insights"],
      designNote: "Data-driven insights for collectors"
    },
    {
      heading: "Card Grading System",
      subheading: "Quality Assessment Portal",
      src: Images.VALOR_SPORT_CARD_GRADING_IMG,
      text: "Displays grading or points system for users' activities. Provides clear feedback and progress indicators to motivate engagement.",
      features: ["Grading display", "Certification tracking", "Value assessment", "Authentication status"],
      designNote: "Transparent grading for card value tracking"
    },
    {
      heading: "User Settings & Preferences",
      subheading: "Account Configuration Center",
      src: Images.VALOR_SPORT_CARD_SETTING_IMG,
      text: "Profile and account settings where users can manage personal information, notification preferences, and security settings for optimal control.",
      features: ["Profile editing", "Notification controls", "Privacy settings", "Connected accounts"],
      designNote: "Comprehensive settings for personalization"
    },

    // ===================== ADMIN SECTION =====================
    {
      heading: "API Integration Management",
      subheading: "Developer Access Control",
      src: Images.VALOR_SPORT_CARD_ADMIN_APIKEYS_IMG,
      text: "Allows admins to generate and manage API keys for integration with external platforms. Ensures secure connectivity and controlled access.",
      features: ["Key generation", "Access scopes", "Usage monitoring", "Key rotation"],
      designNote: "Secure API management for integrations"
    },
    {
      heading: "Enhanced API Key Dashboard",
      subheading: "Advanced Integration Monitoring",
      src: Images.VALOR_SPORT_CARD_ADMIN_APIKEYS1_IMG,
      text: "Enhanced view showing active keys, usage statistics, and expiration details. Provides detailed control over API access and monitoring.",
      features: ["Usage analytics", "Rate limiting", "Key expiration", "Activity logs"],
      designNote: "Comprehensive API oversight with metrics"
    },
    {
      heading: "Administrative Control Panel",
      subheading: "Platform Management Dashboard",
      src: Images.VALOR_SPORT_CARD_ADMIN_DASHBOARD_IMG,
      text: "High-level overview for administrators displaying platform metrics, active users, and recent orders. Supports decision-making and operational management.",
      features: ["Platform metrics", "User statistics", "Revenue tracking", "System health"],
      designNote: "Executive dashboard for platform oversight"
    },
    {
      heading: "Order Administration Console",
      subheading: "Transaction Management System",
      src: Images.VALOR_SPORT_CARD_ADMIN_ORDERS_IMG,
      text: "Admin interface to monitor all orders, including status, payment, and delivery information. Ensures smooth order management and tracking.",
      features: ["Order monitoring", "Status updates", "Customer details", "Fulfillment tracking"],
      designNote: "Centralized order oversight for admins"
    },
    {
      heading: "Advanced Order Management",
      subheading: "Bulk Operations & Filtering",
      src: Images.VALOR_SPORT_CARD_ADMIN_ORDERS1_IMG,
      text: "Extended order view with filtering, sorting, and bulk actions. Helps admins manage high-volume order workflows efficiently.",
      features: ["Advanced filters", "Bulk operations", "Export capability", "Custom views"],
      designNote: "High-volume order management tools"
    },
    {
      heading: "Payment Administration Portal",
      subheading: "Financial Transaction Oversight",
      src: Images.VALOR_SPORT_CARD_ADMIN_PAYMENTS_IMG,
      text: "Displays payment history, pending transactions, and reconciliations. Supports financial oversight and ensures transparency for administrators.",
      features: ["Transaction history", "Reconciliation tools", "Refund management", "Financial reports"],
      designNote: "Comprehensive financial oversight for admins"
    },

    // ===================== ORDERS & TRACKING =====================
    {
      heading: "Real-Time Order Tracking",
      subheading: "Shipment Status Monitoring",
      src: Images.VALOR_SPORT_CARD_ORDER_TRACKING_IMG,
      text: "Allows users to monitor order progress in real-time. Displays shipment updates, estimated delivery times, and status notifications.",
      features: ["Live tracking", "Delivery estimates", "Status updates", "Carrier information"],
      designNote: "Transparent tracking for customer confidence"
    },
    {
      heading: "Detailed Order Timeline",
      subheading: "Enhanced Shipment Visibility",
      src: Images.VALOR_SPORT_CARD_ORDER_TRACKING1_IMG,
      text: "Extended tracking view showing detailed order timelines, partial shipments, and itemized updates.",
      features: ["Timeline view", "Multiple packages", "Item-level tracking", "Photo proof"],
      designNote: "Granular tracking for complex orders"
    },
    {
      heading: "Order History & Alerts",
      subheading: "Complete Order Management",
      src: Images.VALOR_SPORT_CARD_ORDER_TRACKING2_IMG,
      text: "Provides historical tracking and alerts for delayed or completed orders. Ensures transparency and confidence for users.",
      features: ["Order history", "Delay notifications", "Delivery confirmation", "Issue reporting"],
      designNote: "Proactive communication for order issues"
    },
    {
      heading: "Quick Status Update Modal",
      subheading: "Instant Order Information",
      src: Images.VALOR_SPORT_CARD_ORDER_STATUSPOPUP_IMG,
      text: "Popup interface providing immediate order status updates. Allows quick actions or feedback from users without navigating away from the current screen.",
      features: ["Quick view", "Status summary", "Action buttons", "Minimal disruption"],
      designNote: "Contextual updates without navigation"
    },

    // ===================== ORDER SUBMISSION =====================
    {
      heading: "Order Submission Portal",
      subheading: "Card Purchase Interface",
      src: Images.VALOR_SPORT_CARD_ORDER_SUBMISSIONFORM_IMG,
      text: "Form interface for users to submit new orders, including required details and validations. Ensures accurate data collection for processing.",
      features: ["Guided submission", "Item selection", "Quantity controls", "Price calculation"],
      designNote: "User-friendly ordering with validation"
    },
    {
      heading: "Detailed Order Information",
      subheading: "Comprehensive Purchase Details",
      src: Images.VALOR_SPORT_CARD_ORDER_SUBMISSIONFORM_ENTER_DETAIL_IMG,
      text: "Extended view of the submission form with step-by-step input fields. Reduces errors and guides users through the ordering process.",
      features: ["Multi-step form", "Address verification", "Special instructions", "Order preview"],
      designNote: "Thorough order capture reducing errors"
    },

    // ===================== PAYMENTS =====================
    {
      heading: "Card Payment Processing",
      subheading: "Secure Credit Card Transactions",
      src: Images.VALOR_SPORT_CARD_CARD_PAYMENT_FLOW_IMG,
      text: "Enables secure card payments with multiple authentication steps. Provides confirmation and transaction tracking.",
      features: ["PCI compliance", "3D Secure", "Card detection", "Save card option"],
      designNote: "Secure payment processing with trust signals"
    },
    {
      heading: "Bank Transfer Payment",
      subheading: "ACH & Wire Transfer Processing",
      src: Images.VALOR_SPORT_CARD_TRANSFER_PAYMENTFLOW_IMG,
      text: "Supports bank transfer payments with real-time validation and confirmation of completed transactions.",
      features: ["Bank verification", "Transfer tracking", "Confirmation emails", "Receipt generation"],
      designNote: "Alternative payment method for flexibility"
    },
    {
      heading: "Payment Method Center",
      subheading: "Transaction & Billing Management",
      src: Images.VALOR_SPORT_CARD_PAYMENT_MANAGEMENT_IMG,
      text: "Centralized payment dashboard showing all completed, pending, and failed transactions. Allows easy reconciliation and monitoring.",
      features: ["Transaction history", "Payment methods", "Dispute management", "Receipt access"],
      designNote: "Comprehensive payment oversight for users"
    },

    // ===================== PRICING, SALES & ANALYTICS =====================
    {
      heading: "Sales Performance Dashboard",
      subheading: "Revenue Analytics & Trends",
      src: Images.VALOR_SPORT_CARD_SALES_IMG,
      text: "Displays sales metrics, trends, and reports. Helps users and admins track performance and optimize pricing strategies.",
      features: ["Sales analytics", "Trend visualization", "Period comparison", "Export reports"],
      designNote: "Data-driven sales insights for optimization"
    },
    {
      heading: "Pricing Strategy Portal",
      subheading: "Tier & Plan Management",
      src: Images.VALOR_SPORT_CARD_PRICING_IMG,
      text: "Interface to view or adjust pricing plans, subscription tiers, or service fees. Supports informed business decisions.",
      features: ["Pricing tiers", "Feature comparison", "Value propositions", "Plan recommendations"],
      designNote: "Clear pricing communication for conversion"
    },

    // ===================== CARD DETAILS =====================
    {
      heading: "Sport Card Detail View",
      subheading: "Complete Card Information",
      src: Images.VALOR_SPORT_CARD_CARD_DETAILS_IMG,
      text: "Detailed view of each sport card including membership info, balance, and status. Users can review and manage their cards effectively.",
      features: ["Card specifications", "Value tracking", "Authentication status", "History timeline"],
      designNote: "Comprehensive card information for collectors"
    },
    {
      heading: "Card Order Confirmation",
      subheading: "Purchase Success Notification",
      src: Images.VALOR_SPORT_CARD_CARD_ORDER_COMPLETE_IMG,
      text: "Confirmation screen showing completed card orders. Displays order summary, payment confirmation, and next steps for users.",
      features: ["Order summary", "Payment confirmation", "Delivery estimate", "Next actions"],
      designNote: "Clear confirmation building customer confidence"
    },
    {
      heading: "Transfer Completion Confirmation",
      subheading: "Payment Success Notification",
      src: Images.VALOR_SPORT_CARD_TRANSFER_ORDERCOMPLETE_IMG,
      text: "Completion screen for transfer payments, including confirmation of successful transfer and order tracking details.",
      features: ["Transfer confirmation", "Transaction ID", "Receipt download", "Support contact"],
      designNote: "Payment success with documentation access"
    },

    // ===================== MISC =====================
    {
      heading: "Success Celebration Screen",
      subheading: "Achievement Recognition",
      src: Images.VALOR_SPORT_CARD_CONGRATS_IMG,
      text: "Celebratory confirmation screen acknowledging completed actions, motivating users and providing next steps.",
      features: ["Success animation", "Achievement message", "Social sharing", "Continue options"],
      designNote: "Positive reinforcement enhancing engagement"
    },
    {
      heading: "Date Selection Modal",
      subheading: "Calendar Picker Interface",
      src: Images.VALOR_SPORT_CARD_DATAPOPUP_IMG,
      text: "Interactive date selection popup for scheduling orders or payments. Ensures accurate input and reduces errors.",
      features: ["Calendar interface", "Date restrictions", "Quick selection", "Clear display"],
      designNote: "Intuitive date selection reducing input errors"
    },
    {
      heading: "General Success Notification",
      subheading: "Action Confirmation System",
      src: Images.VALOR_SPORT_CARD_SUCCESS_IMG,
      text: "General success notification confirming completed actions. Provides feedback and guidance for next user steps.",
      features: ["Success message", "Action summary", "Next steps", "Return navigation"],
      designNote: "Clear feedback for completed actions"
    }
  ]
},

{
  id: 3,
  title: "ParryScript",
  overview: "ParryScript is an online medical marketplace platform connecting buyers, sellers, and pharmacies. It enables secure onboarding, seamless order management, product browsing, seller listings, payment processing, and pharmacy profile management. The platform ensures a smooth, transparent workflow for all users, providing real-time notifications, income tracking, and detailed transaction histories.",
  
  images: [
    // ===================== AUTH (LOGIN / SIGNUP / RESET) =====================
    {
      heading: "Medical Marketplace Landing",
      subheading: "Platform Introduction & Gateway",
      src: Images.PARRYSCRIPT_PARRY_SCRIPT_IMG,
      text: "The landing screen introduces the platform with a clear call-to-action for login or signup. Users can explore features and understand the benefits before creating an account.",
      features: ["Feature highlights", "Value proposition", "Trust indicators", "CTA buttons"],
      designNote: "Conversion-focused landing building trust"
    },
    {
      heading: "Pharmacy Account Registration",
      subheading: "Multi-Role User Onboarding",
      src: Images.PARRYSCRIPT_CREATE_NEW_ACCOUNT_IMG,
      text: "Signup interface collects essential user details to create a secure account. Includes email, password, and optional personal or pharmacy information for comprehensive onboarding.",
      features: ["Role selection", "License verification", "Document upload", "Terms acceptance"],
      designNote: "Healthcare-compliant registration process"
    },
    {
      heading: "Secure Platform Login",
      subheading: "Multi-Stakeholder Authentication",
      src: Images.PARRYSCRIPT_SIGN_IMG,
      text: "Login screen for returning users. Supports email/password authentication, password visibility toggle, and smooth navigation to forgotten password or signup workflows.",
      features: ["Multi-role login", "Remember device", "Biometric option", "Quick access"],
      designNote: "Streamlined authentication for all users"
    },
    {
      heading: "Password Recovery Initiation",
      subheading: "Account Access Restoration",
      src: Images.PARRYSCRIPT_FORGET_PASSWORD_IMG,
      text: "Initial step for account recovery. Users enter their registered email to receive a reset link or OTP for secure password reset, ensuring account protection.",
      features: ["Email verification", "Security questions", "Multiple recovery options", "Help access"],
      designNote: "Secure recovery with multiple pathways"
    },
    {
      heading: "Credential Reset Portal",
      subheading: "Secure Password Update",
      src: Images.PARRYSCRIPT_RESET_PASSWORD_IMG,
      text: "Allows users to set a new password safely. Features confirmation fields, validation checks, and guidance to restore account access without compromising security.",
      features: ["Password strength meter", "Match validation", "Security tips", "Confirmation"],
      designNote: "Guided password reset ensuring security"
    },
    {
      heading: "Email Identity Verification",
      subheading: "OTP-Based Account Validation",
      src: Images.PARRYSCRIPT_EMAILVERIFICATION_IMG,
      text: "Email OTP verification ensures that the account belongs to the user. Enhances security and prevents unauthorized access before completing login or signup.",
      features: ["OTP entry", "Timer display", "Resend option", "Auto-verification"],
      designNote: "Frictionless verification maintaining security"
    },

    // ===================== BUYER FLOW =====================
    {
      heading: "Medicine Browse & Search",
      subheading: "Product Discovery Interface",
      src: Images.PARRYSCRIPT_BUYERFLOW_IMG,
      text: "Start of the buyer journey. Users can browse available medicines, filter by categories, and add desired products to their cart efficiently.",
      features: ["Product catalog", "Search & filter", "Category browsing", "Quick add"],
      designNote: "Intuitive product discovery for buyers"
    },
    {
      heading: "Shopping Cart Review",
      subheading: "Order Assembly & Modification",
      src: Images.PARRYSCRIPT_BUYERFLOW2_IMG,
      text: "Users review selected items, choose preferred pharmacies, and can modify quantities or remove items. Ensures clarity before proceeding to checkout.",
      features: ["Cart management", "Pharmacy selection", "Quantity adjustment", "Price calculation"],
      designNote: "Flexible cart management before checkout"
    },
    {
      heading: "Product Detail Confirmation",
      subheading: "Item Information Verification",
      src: Images.PARRYSCRIPT_BUYERFLOW3_IMG,
      text: "Detailed item view where buyers can confirm product details, pricing, and available pharmacy options before finalizing their purchase.",
      features: ["Product details", "Pharmacy comparison", "Availability check", "Add to cart"],
      designNote: "Detailed product information for informed decisions"
    },
    {
      heading: "Order Review & Confirmation",
      subheading: "Final Purchase Verification",
      src: Images.PARRYSCRIPT_BUYERFLOW4_IMG,
      text: "Order confirmation page displays delivery methods, pharmacy information, and total order summary, providing a final review before placement.",
      features: ["Order summary", "Delivery options", "Price breakdown", "Terms acceptance"],
      designNote: "Comprehensive order review reducing errors"
    },
    {
      heading: "Purchase Completion & Tracking",
      subheading: "Order Success Confirmation",
      src: Images.PARRYSCRIPT_BUYERFLOW5_IMG,
      text: "Completes the purchase with success notification, order tracking options, and recommended follow-up actions. Supports seamless post-order experience.",
      features: ["Success confirmation", "Order tracking", "Receipt access", "Next steps"],
      designNote: "Clear completion with ongoing support"
    },

    // ===================== SELLER FLOW =====================
    {
      heading: "Seller Control Dashboard",
      subheading: "Pharmacy Business Overview",
      src: Images.PARRYSCRIPT_SELLERFLOW_IMG,
      text: "Initial seller dashboard showing key statistics like revenue, active listings, and pending orders. Provides insights into marketplace activity and performance.",
      features: ["Revenue metrics", "Listing overview", "Order pipeline", "Performance analytics"],
      designNote: "Business-focused dashboard for sellers"
    },
    {
      heading: "Inventory Management Console",
      subheading: "Product Catalog Administration",
      src: Images.PARRYSCRIPT_SELLERFLOW1_IMG,
      text: "Sellers can add, edit, or remove products, update stock levels, and adjust pricing. Essential for maintaining an accurate catalog and inventory control.",
      features: ["Product management", "Stock tracking", "Price updates", "Bulk operations"],
      designNote: "Efficient inventory control for pharmacies"
    },
    {
      heading: "Order Processing Interface",
      subheading: "Incoming Request Management",
      src: Images.PARRYSCRIPT_SELLERFLOW2_IMG,
      text: "Panel for confirming or rejecting incoming buyer orders. Includes details about ordered products, quantities, and delivery requirements.",
      features: ["Order review", "Accept/reject", "Customer details", "Fulfillment prep"],
      designNote: "Streamlined order acceptance workflow"
    },
    {
      heading: "Fulfillment Coordination Hub",
      subheading: "Pharmacy Workflow Management",
      src: Images.PARRYSCRIPT_SELLERFLOW3_IMG,
      text: "Sellers review pharmacy requirements, coordinate product handovers, and manage order processing steps efficiently.",
      features: ["Workflow tracking", "Pharmacy coordination", "Status updates", "Communication tools"],
      designNote: "Multi-stakeholder coordination interface"
    },
    {
      heading: "Seller Performance Summary",
      subheading: "Sales History & Analytics",
      src: Images.PARRYSCRIPT_SELLERFLOW4_IMG,
      text: "Final screen summarizing order status, completed sales, and shipment history. Provides an overview of seller performance and pending actions.",
      features: ["Sales summary", "Completion rates", "Revenue tracking", "Action items"],
      designNote: "Performance insights for business growth"
    },

    // ===================== INCOME (BUYER & SELLER) =====================
    {
      heading: "Buyer Purchase History",
      subheading: "Transaction Record & Spending Analysis",
      src: Images.PARRYSCRIPT_BUYERINCOME_ORDER_IMG,
      text: "Shows a detailed list of buyer orders, including completed purchases, pending deliveries, and total expenditure. Helps buyers track spending patterns.",
      features: ["Order history", "Spending analytics", "Receipt access", "Reorder options"],
      designNote: "Transparent purchase tracking for buyers"
    },
    {
      heading: "Enhanced Buyer Order View",
      subheading: "Advanced Transaction Filtering",
      src: Images.PARRYSCRIPT_BUYINCOME_ORDER2_IMG,
      text: "Extended buyer income view with filters, sorting, and historical order insights. Enhances user control over transaction records.",
      features: ["Advanced filters", "Date ranges", "Category sorting", "Export capability"],
      designNote: "Power-user order management tools"
    },
    {
      heading: "Seller Revenue Dashboard",
      subheading: "Income & Sales Analytics",
      src: Images.PARRYSCRIPT_SELLER_INCOMESALE_IMG,
      text: "Displays seller revenue from completed orders, including breakdowns by product, pharmacy, and date. Supports performance tracking and financial reporting.",
      features: ["Revenue breakdown", "Product performance", "Time-based analysis", "Payout tracking"],
      designNote: "Financial insights for seller optimization"
    },
    {
      heading: "Advanced Sales Analytics",
      subheading: "Comprehensive Revenue Reporting",
      src: Images.PARRYSCRIPT_SELLER_INCOMESALE2_IMG,
      text: "Advanced sales view with charts, filtering options, and revenue summaries. Helps sellers optimize pricing and stock decisions.",
      features: ["Visual analytics", "Comparison tools", "Trend identification", "Report generation"],
      designNote: "Data-driven business intelligence"
    },

    // ===================== PHARMACY DETAILS =====================
    {
      heading: "Pharmacy Profile Overview",
      subheading: "Pharmacy Information & Verification",
      src: Images.PARRYSCRIPT_PHARMACYDETail_IMG,
      text: "Shows detailed pharmacy information including address, license, available products, and operational hours. Helps buyers choose reliable providers.",
      features: ["License verification", "Operating hours", "Product availability", "Ratings & reviews"],
      designNote: "Trust-building pharmacy profiles"
    },

    // ===================== PROFILE =====================
    {
      heading: "User Account Management",
      subheading: "Personal Profile & Settings",
      src: Images.PARRYSCRIPT_PROFILE_IMG,
      text: "Profile management screen for updating personal information, payment methods, and account settings. Provides secure access to manage preferences.",
      features: ["Profile editing", "Payment methods", "Notification settings", "Privacy controls"],
      designNote: "Comprehensive profile management"
    },

    // ===================== NOTIFICATIONS =====================
    {
      heading: "Notification Center",
      subheading: "Activity & Alert Management",
      src: Images.PARRYSCRIPT_NOTIFICATION1_IMG,
      text: "Central hub for all system messages including order updates, promotions, and pharmacy alerts. Ensures users are informed promptly.",
      features: ["Order updates", "System alerts", "Promotions", "Read/unread status"],
      designNote: "Centralized communication keeping users informed"
    },
    {
      heading: "Enhanced Notification Dashboard",
      subheading: "Advanced Message Filtering",
      src: Images.PARRYSCRIPT_NOTIFICAION2_IMG,
      text: "Extended notifications view with filtering options, read/unread status, and direct links to related actions for enhanced user engagement.",
      features: ["Category filters", "Search functionality", "Bulk actions", "Priority indicators"],
      designNote: "Power-user notification management"
    }
  ]
},

{
  id: 6,
  title: "HRChromatics",
  overview: "HRChromatics is a modern web platform showcasing creative content, articles, and services. It features intuitive navigation across home, blog, article, about, services, and contact pages. The platform is designed for seamless browsing, user engagement, and informative interactions, providing a visually appealing and user-friendly experience.",
  
  images: [
    // ===================== HOME & INFO PAGES =====================
    {
      heading: "Homepage & Brand Showcase",
      subheading: "Digital Presence Hub",
      src: Images.HRCHROMATICS_HOME_PAGE_IMG,
      text: "The main landing page of HRChromatics, highlighting featured content, services, and navigation options. Designed to provide immediate insight and easy access to all sections of the website.",
      features: ["Hero section", "Featured content", "Service highlights", "Call-to-action"],
      designNote: "Engaging homepage establishing brand identity"
    },
    {
      heading: "Content Blog Directory",
      subheading: "Article Discovery & Browsing",
      src: Images.HRCHROMATICS_BLOG_PAGE_IMG,
      text: "Displays a collection of blog posts with filtering and search options. Users can browse articles by topic, date, or popularity for informative and engaging reading.",
      features: ["Post grid/list", "Category filters", "Search functionality", "Pagination"],
      designNote: "Content-rich blog for reader engagement"
    },
    {
      heading: "Article Detail View",
      subheading: "Long-Form Content Reading",
      src: Images.HRCHROMATICS_ARTICLE_PAGE_IMG,
      text: "Detailed article view showing content, images, and related posts. Provides interactive features such as comments, sharing options, and navigation to other articles.",
      features: ["Rich content display", "Social sharing", "Related articles", "Comments section"],
      designNote: "Reader-optimized article layout"
    },
    {
      heading: "Company Information Page",
      subheading: "Brand Story & Mission",
      src: Images.HRCHROMATICS_ABOUTUS_IMG,
      text: "Information page describing the organization, mission, and team members. Builds credibility and connects users with the brand story.",
      features: ["Company history", "Team profiles", "Mission statement", "Values showcase"],
      designNote: "Trust-building about page"
    },
    {
      heading: "Services Portfolio",
      subheading: "Offering Catalog & Details",
      src: Images.HRCHROMATICS_SERVICES_IMG,
      text: "Overview of services offered by HRChromatics. Each service includes details, visuals, and call-to-action elements for user engagement and inquiries.",
      features: ["Service catalog", "Detailed descriptions", "Pricing info", "Contact CTAs"],
      designNote: "Service presentation driving inquiries"
    },
    {
      heading: "Contact & Inquiry Portal",
      subheading: "Communication Gateway",
      src: Images.HRCHROMATICS_CONTACTUS_IMG,
      text: "Interactive contact page allowing users to reach out via forms, email, or phone. Includes location, business hours, and integrated maps for easy navigation.",
      features: ["Contact form", "Location map", "Business hours", "Multiple contact methods"],
      designNote: "Accessible contact facilitating communication"
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