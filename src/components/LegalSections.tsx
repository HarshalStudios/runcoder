import { ShieldCheck, FileText } from 'lucide-react';

export function PrivacySection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 select-none text-left space-y-8">
      
      {/* Title */}
      <div className="space-y-2 border-b border-slate-900 pb-6">
        <div className="inline-flex items-center space-x-1 bg-blue-950/40 text-blue-400 border border-blue-900/30 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-tight uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Protection & Safety Standards</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight font-display">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-xs">Last Updated: July 2026</p>
      </div>

      {/* Main Articles */}
      <div className="space-y-6 text-xs sm:text-sm text-slate-400 leading-relaxed">
        
        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">1. Introduction</h3>
          <p>Welcome to RunCoder.</p>
          <p>
            RunCoder is an Android code editor designed for students, educators, programming beginners, and developers. It enables users to write, edit, organize, and execute code directly from their Android devices.
          </p>
          <p>
            This Privacy Policy explains what information may be collected when you use RunCoder, how that information is used, and the choices available to you regarding your data.
          </p>
          <p>
            By installing or using RunCoder, you agree to the practices described in this Privacy Policy.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">2. Your Code and Projects</h3>
          <p>
            Your programming projects, source code, files, and folders remain your property.
          </p>
          <p>
            RunCoder stores your projects locally on your Android device using Android's Storage Access Framework (SAF).
          </p>
          <p>
            The application only accesses files and folders that you explicitly choose to open or save.
          </p>
          <p className="font-semibold text-slate-300">RunCoder does not:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>scan your device storage</li>
            <li>access files outside authorized locations</li>
            <li>upload your projects for storage</li>
            <li>maintain cloud copies of your work</li>
          </ul>
          <p>You remain in full control of your files at all times.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">3. Cloud Code Execution</h3>
          <p>
            When you choose to execute code, RunCoder securely sends the minimum information required to a remote execution service powered by Judge0 Community Edition.
          </p>
          <p className="font-semibold text-slate-300">The transmitted information may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Programming language</li>
            <li>Source code</li>
            <li>Standard input (if provided)</li>
          </ul>
          <p>
            This information is used solely to compile and execute your program and return the execution results to your device.
          </p>
          <p>
            RunCoder does not associate submitted source code with your identity and does not permanently store submitted code.
          </p>
          <p>Your local project files remain on your own device.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">4. Information We Collect</h3>
          <p>RunCoder does not require account registration.</p>
          <p className="font-semibold text-slate-300">We do not request or intentionally collect personal information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Home or mailing address</li>
            <li>Government identification</li>
            <li>Contacts</li>
            <li>Messages</li>
            <li>Photos</li>
            <li>Videos</li>
          </ul>
          <p>
            However, anonymous technical information may be collected through integrated Google services to improve application quality.
          </p>
          <p className="font-semibold text-slate-300">This may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Anonymous crash reports</li>
            <li>Diagnostic information</li>
            <li>Device model</li>
            <li>Android version</li>
            <li>Application version</li>
            <li>Anonymous usage statistics</li>
            <li>Advertising identifiers used by Google AdMob</li>
          </ul>
          <p>This information cannot be used by RunCoder to personally identify you.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">5. Third-Party Services</h3>
          <p>RunCoder integrates trusted third-party services that operate under their own privacy policies.</p>
          <p className="font-semibold text-slate-300">These services include:</p>
          <div className="space-y-3 pl-2">
            <div>
              <h4 className="font-bold text-slate-300">Firebase Analytics</h4>
              <p>Used to understand anonymous application usage and improve future versions of RunCoder.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-300">Firebase Crashlytics</h4>
              <p>Used to receive anonymous crash reports that help identify and resolve software issues.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-300">Google AdMob</h4>
              <p>The free version of RunCoder displays advertisements provided by Google AdMob.</p>
              <p>Google may collect advertising identifiers and other limited technical information according to Google's own Privacy Policy.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-300">Google Play Billing</h4>
              <p>Processes subscriptions and one-time purchases securely through Google Play.</p>
              <p>RunCoder never receives, stores, or processes your payment card information.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-300">Judge0 Community Edition</h4>
              <p>Used only when you execute code.</p>
              <p>Only the programming language, source code, and optional standard input are transmitted for execution.</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">6. Permissions</h3>
          <p>RunCoder requests only the permissions necessary for its intended functionality.</p>
          <div className="space-y-2 pl-2">
            <div>
              <h4 className="font-bold text-slate-300">Internet</h4>
              <p className="font-semibold text-slate-400 text-xs">Required for:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Cloud code execution</li>
                <li>Firebase Analytics</li>
                <li>Firebase Crashlytics</li>
                <li>Google AdMob</li>
                <li>Google Play Billing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-300">Storage Access Framework (SAF)</h4>
              <p>Used only after you explicitly choose files or folders to open or save.</p>
              <p>RunCoder does not request unrestricted storage access.</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">7. Advertising</h3>
          <p>The free version of RunCoder may display advertisements provided by Google AdMob.</p>
          <p>Advertising partners may collect limited device information and advertising identifiers in accordance with Google's Privacy Policy.</p>
          <p>RunCoder does not sell, rent, or share your personal information with advertisers.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">8. Purchases and Subscriptions</h3>
          <p>RunCoder offers optional premium features through Google Play Billing.</p>
          <p>All purchases, subscriptions, renewals, cancellations, and refunds are processed by Google Play.</p>
          <p>RunCoder does not receive or store payment card information or financial account details.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">9. Data Security</h3>
          <p>We take reasonable technical and organizational measures to help protect your information.</p>
          <p className="font-semibold text-slate-300">These measures include:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Encrypted HTTPS communication</li>
            <li>Secure Google Play purchase processing</li>
            <li>Local storage of your projects</li>
            <li>Android security best practices</li>
          </ul>
          <p>Although no electronic system can guarantee absolute security, we continuously work to protect your information.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">10. Data Retention</h3>
          <p>RunCoder does not maintain user accounts or cloud storage for projects.</p>
          <p>Your files remain stored on your own device until you choose to delete them.</p>
          <p>Anonymous crash reports and analytics data are retained according to the data retention policies of Google and Firebase.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">11. Children's Privacy</h3>
          <p>RunCoder is intended for students, educators, and developers.</p>
          <p>The application is not directed toward children under the age required by applicable law, and we do not knowingly collect personal information from children.</p>
          <p>If you believe personal information from a child has been provided through our services, please contact us so we can investigate the matter.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">12. Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time to reflect improvements to RunCoder, changes in legal requirements, or updates to third-party services.</p>
          <p>The latest version will always be published on the official RunCoder website.</p>
          <p>The "Last Updated" date at the top of this page indicates when the policy was most recently revised.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">13. Contact Us</h3>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your privacy rights, you may contact us at:</p>
          <p className="text-slate-300 font-bold">RunCoder Support</p>
          <p>📧 <a href="mailto:runcodersupport@gmail.com" className="text-indigo-400 hover:underline">runcodersupport@gmail.com</a></p>
        </div>

      </div>

    </div>
  );
}

export function TermsSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 select-none text-left space-y-8">
      
      {/* Title */}
      <div className="space-y-2 border-b border-slate-900 pb-6">
        <div className="inline-flex items-center space-x-1 bg-indigo-950/40 text-indigo-400 border border-indigo-900/30 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-tight uppercase">
          <FileText className="w-3.5 h-3.5" />
          <span>Rules & Licensing Agreement</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight font-display">
          Terms of Service
        </h1>
        <p className="text-slate-500 text-xs">Last Updated: July 2026</p>
      </div>

      {/* Main Articles */}
      <div className="space-y-6 text-xs sm:text-sm text-slate-400 leading-relaxed">
        
        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">1. Acceptance of These Terms</h3>
          <p>Welcome to RunCoder.</p>
          <p>
            By downloading, installing, accessing, or using RunCoder (the "Application"), you agree to be bound by these Terms of Service.
          </p>
          <p>
            If you do not agree with these Terms, please discontinue use of the Application.
          </p>
          <p>
            These Terms apply to all users of RunCoder.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">2. About RunCoder</h3>
          <p>
            RunCoder is an Android code editor designed for students, educators, programming beginners, and developers.
          </p>
          <p className="font-semibold text-slate-300">The application enables users to:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Create programming projects</li>
            <li>Edit source code</li>
            <li>Organize files and folders</li>
            <li>Execute supported programming languages through secure cloud execution</li>
            <li>Learn and practice programming directly from Android devices</li>
          </ul>
          <p>
            RunCoder is intended to provide a productive coding environment while keeping users in control of their projects.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">3. License to Use</h3>
          <p>
            Subject to these Terms, RunCoder grants you a limited, non-exclusive, non-transferable, revocable license to use the Application for lawful purposes.
          </p>
          <p className="font-semibold text-slate-300">You may use RunCoder for:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Learning programming</li>
            <li>Educational coursework</li>
            <li>Personal software projects</li>
            <li>Professional development</li>
            <li>Research</li>
            <li>Lawful programming activities</li>
          </ul>
          <p>
            This license does not transfer ownership of the Application or any intellectual property associated with RunCoder.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">4. Ownership of Your Content</h3>
          <p>
            Your source code, programming projects, files, folders, and other content created using RunCoder remain your property.
          </p>
          <p>
            RunCoder does not claim ownership of your work.
          </p>
          <p className="font-semibold text-slate-300">Specifically:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Your projects remain stored on your device.</li>
            <li>RunCoder does not claim copyright over your code.</li>
            <li>You are responsible for creating backups of important projects.</li>
            <li>You are responsible for any code or content you choose to share or distribute.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">5. Acceptable Use</h3>
          <p>
            You agree to use RunCoder responsibly and in compliance with applicable laws and regulations.
          </p>
          <p className="font-semibold text-slate-300">You must not use RunCoder to:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Create or distribute malicious software.</li>
            <li>Attempt unauthorized access to systems or networks.</li>
            <li>Violate intellectual property rights.</li>
            <li>Conduct fraudulent or illegal activities.</li>
            <li>Upload or execute code intended to harm third parties.</li>
            <li>Misuse cloud execution resources in a way that disrupts service availability.</li>
          </ul>
          <p>
            You remain solely responsible for the programs you write, execute, and distribute using RunCoder.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">6. Cloud Code Execution</h3>
          <p>
            When you choose to execute code, RunCoder securely submits the required information to a remote execution service powered by Judge0 Community Edition.
          </p>
          <p className="font-semibold text-slate-300">Execution requests may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Programming language</li>
            <li>Source code</li>
            <li>Optional standard input</li>
          </ul>
          <p>
            This information is transmitted solely for the purpose of compiling and executing your program and returning the results.
          </p>
          <p>
            RunCoder is not responsible for the availability, performance, or temporary interruptions of third-party execution services.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">7. RunCoder Pro, Purchases, and Billing</h3>
          <p>
            RunCoder offers optional premium features through Google Play Billing.
          </p>
          <p className="font-semibold text-slate-300">Available purchase options may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Monthly subscription</li>
            <li>Yearly subscription</li>
            <li>Lifetime purchase</li>
          </ul>
          <p>
            All payments are processed securely by Google Play.
          </p>
          <p className="font-semibold text-slate-300">RunCoder:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Does not process payment information.</li>
            <li>Does not store credit or debit card details.</li>
            <li>Does not have access to your financial information.</li>
          </ul>
          <p>
            Subscription renewals, cancellations, refunds, and billing are managed according to Google Play's policies.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">8. Advertisements</h3>
          <p>
            The free version of RunCoder may display advertisements provided by Google AdMob.
          </p>
          <p>
            Advertisements help support the continued development and maintenance of the Application.
          </p>
          <p>
            RunCoder does not control the advertisements displayed by Google or the information Google collects through its advertising services.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">9. Third-Party Services</h3>
          <p>
            RunCoder integrates trusted third-party services that provide core functionality and improve the application.
          </p>
          <p className="font-semibold text-slate-300">These services may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Google Play Services</li>
            <li>Google Play Billing</li>
            <li>Google AdMob</li>
            <li>Firebase Analytics</li>
            <li>Firebase Crashlytics</li>
            <li>Judge0 Community Edition</li>
          </ul>
          <p>
            Each service operates under its own terms and privacy policies.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">10. Availability of the Service</h3>
          <p>
            We strive to provide a reliable, secure, and continuously improving application.
          </p>
          <p className="font-semibold text-slate-300">However, we do not guarantee that RunCoder will always:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Operate without interruption.</li>
            <li>Be compatible with every Android device.</li>
            <li>Remain free of software defects.</li>
            <li>Be continuously available.</li>
          </ul>
          <p>
            Features may be added, modified, or removed as the Application evolves.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">11. Disclaimer</h3>
          <p>
            RunCoder is provided "AS IS" and "AS AVAILABLE", without warranties of any kind except where required by applicable law.
          </p>
          <p className="font-semibold text-slate-300">To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Continuous availability</li>
            <li>Error-free operation</li>
          </ul>
          <p>
            You assume all responsibility for the use of the Application.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">12. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by applicable law, RunCoder and its developers shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from or related to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Loss of data</li>
            <li>Project corruption</li>
            <li>Compilation failures</li>
            <li>Software defects</li>
            <li>Device incompatibility</li>
            <li>Temporary service interruptions</li>
            <li>Cloud execution failures</li>
            <li>Loss of productivity</li>
            <li>Use or inability to use the Application</li>
          </ul>
          <p>
            Your sole remedy for dissatisfaction with the Application is to discontinue its use.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">13. Intellectual Property</h3>
          <p>
            RunCoder, including its name, logo, branding, user interface, graphics, documentation, and software components, is protected by applicable intellectual property laws.
          </p>
          <p className="font-semibold text-slate-300">Except where expressly permitted, you may not:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Copy</li>
            <li>Modify</li>
            <li>Redistribute</li>
            <li>Reverse engineer</li>
            <li>Resell</li>
            <li>Create derivative works</li>
          </ul>
          <p>
            without prior written permission from the RunCoder developer.
          </p>
          <p>
            This restriction does not apply to source code or projects that you create yourself using the Application.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">14. Changes to These Terms</h3>
          <p>
            We may update these Terms of Service from time to time to reflect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>New features</li>
            <li>Legal requirements</li>
            <li>Security improvements</li>
            <li>Changes to third-party services</li>
          </ul>
          <p>
            The latest version will always be published on the official RunCoder website.
          </p>
          <p>
            Your continued use of RunCoder after updated Terms become effective constitutes acceptance of the revised Terms.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">15. Governing Law</h3>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction where the developer operates, without regard to conflict of law principles.
          </p>
          <p>
            Where required by applicable consumer protection laws, mandatory local legal rights remain unaffected.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-extrabold text-white">16. Contact Us</h3>
          <p>If you have questions, concerns, or feedback regarding these Terms of Service, you may contact us at:</p>
          <p className="text-slate-300 font-bold">RunCoder Support</p>
          <p>📧 <a href="mailto:runcodersupport@gmail.com" className="text-indigo-400 hover:underline">runcodersupport@gmail.com</a></p>
        </div>

      </div>

    </div>
  );
}
