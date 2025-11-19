   class Project {
  constructor(name, summary, description, images, technology, isTrainProject, sourceCodeLink,demo) {
    this.name = name;
    this.summary = summary;
    this.description = description;
    this.images = images;
    this.technology = technology;
    this.isTrainProject = isTrainProject;
    this.sourceCodeLink = sourceCodeLink;
    this.demo =demo;
  }
}

export const projects = [
  new Project(
    "AIU Graduation Project",
    "Interactive English learning app for children",
    `
<p>
An interactive English-learning platform for young children, built with Flutter and engineered for engagement, accessibility, and long-term scalability.
The system includes dedicated apps for learners, teachers, parents, and administrators, combining AR experiences, speech AI, and multimedia tools to make language learning playful, measurable, and teacher-driven.
</p>

<p>
Key features include AR-enabled activities that contextualize learning, a custom-trained speech AI that evaluates pronunciation and delivers friendly feedback, and interactive tracing exercises for letters and numbers with instant validation through lightweight ML models.
Teachers can create and upload lessons, quizzes, and videos while parents monitor progress, add observations, and stay involved in the child’s learning journey.
</p>

<p>
Technical highlights: Flutter front-end for cross-platform native performance; Clean Architecture and Bloc for maintainable, testable code; custom AI/ML models for pronunciation scoring and handwriting recognition; secure media upload and role-based access controls for teacher content.
</p>

<ul>
  <li><strong>Multi-role apps</strong>: tailored interfaces for students, teachers, parents, and admins.</li>
  <li><strong>Augmented Reality</strong>: immersive activities that boost motivation and context.</li>
  <li><strong>Speech AI</strong>: trained models assess pronunciation and provide corrective guidance.</li>
  <li><strong>Interactive tracing</strong>: handwriting recognition and instant correctness feedback.</li>
  <li><strong>Assessment & reporting</strong>: quizzes, progress tracking, and teacher/parent dashboards.</li>
</ul>

<p>
This platform delivers a safe, engaging, and data-driven learning ecosystem that blends AR and AI to make early English learning interactive, effective, and collaborative between teachers and families.
</p>
`,
[
  "../Images/Projects/GRADUATION_PROJECT/9.jpg",
  "../Images/Projects/GRADUATION_PROJECT/1.jpg",
  "../Images/Projects/GRADUATION_PROJECT/2.jpg",
  "../Images/Projects/GRADUATION_PROJECT/3.jpg",
  "../Images/Projects/GRADUATION_PROJECT/4.jpg",
  "../Images/Projects/GRADUATION_PROJECT/5.jpg",
  "../Images/Projects/GRADUATION_PROJECT/6.jpg",
  "../Images/Projects/GRADUATION_PROJECT/7.jpg",
  "../Images/Projects/GRADUATION_PROJECT/8.jpg",
  "../Images/Projects/GRADUATION_PROJECT/10.jpg",
  "../Images/Projects/GRADUATION_PROJECT/11.jpg",
  "../Images/Projects/GRADUATION_PROJECT/12.jpg",
  "../Images/Projects/GRADUATION_PROJECT/13.jpg",
  "../Images/Projects/GRADUATION_PROJECT/14.jpg",
  "../Images/Projects/GRADUATION_PROJECT/15.jpg",
  "../Images/Projects/GRADUATION_PROJECT/16.jpg",
  "../Images/Projects/GRADUATION_PROJECT/17.jpg",
  "../Images/Projects/GRADUATION_PROJECT/18.jpg",
  "../Images/Projects/GRADUATION_PROJECT/19.jpg",
  "../Images/Projects/GRADUATION_PROJECT/20.jpg",
  "../Images/Projects/GRADUATION_PROJECT/21.jpg",
  "../Images/Projects/GRADUATION_PROJECT/22.jpg"
]
, "Flutter, Bloc, clean Architecture, Ar, go_router, Dio, Ai, Django, Figma",
    false,
    ""
  ),

  new Project(
    "OrderSet Restaurant",
    "Modern restaurant app",
    `<h3>Project overview</h3>
    <p>
    Redesigned and rebuilt a restaurant mobile app in Flutter, translating company-provided Figma designs into a modern, responsive user experience. Delivered the project as a freelance developer for OrderSite by refactoring legacy code, fixing defects, and integrating new features to meet current UX and business requirements.
    </p>
    <br>
    <h3>Key features</h3>
    <ul>
    <li><strong>Full UI/UX remake</strong>: Pixel-accurate implementation of Figma screens with responsive layouts, smooth animations, and accessible interactions.</li>
    <li><strong>Table booking and in-restaurant ordering</strong>: Reserve tables and place orders at the table by scanning a table QR code.</li>
    <li><strong>Waitstaff requests</strong>: In-app waiter/call functionality so diners can request assistance or place items with the server.</li>
    <li><strong>Real-time order & delivery tracking</strong>: Track order status and delivery progress with live updates.</li>
    <li><strong>Secure payments and discounts</strong>: Integrated electronic payment flows and coupon/discount redemption.</li>
    <li><strong>Push notifications</strong>: Firebase Cloud Messaging for promotions and real-time alerts.</li>
    </ul>
    <br> 
    <h3>Outcome and impact</h3>
    <p>
    Transformed an outdated codebase and static designs into a production-ready app that improves guest experience, reduces staff friction, and supports business growth through digital ordering, table management, and targeted promotions.
    </p>
    <p>
    The application is now easier to maintain and extend, enabling faster delivery of new features and smooth partner integrations while providing reliable, scalable functionality for both front-of-house staff and customers.
    </p>`,
[
  "../Images/Projects/restaurant/5.jpg",
  "../Images/Projects/restaurant/1.jpg",
  "../Images/Projects/restaurant/2.jpg",
  "../Images/Projects/restaurant/3.jpg",
  "../Images/Projects/restaurant/4.jpg",
  "../Images/Projects/restaurant/6.jpg",
  "../Images/Projects/restaurant/7.jpg",
  "../Images/Projects/restaurant/8.jpg",
  "../Images/Projects/restaurant/9.jpg",
  "../Images/Projects/restaurant/10.jpg",
  "../Images/Projects/restaurant/11.jpg"
], 
  "Flutter, REST API, Firebase Messaging, Bloc, Payment , clean architecture, dartz, flutter_screenutil, Dio",
    false,
    ""
  ),

  new Project(
    "Weather App",
    "Weather forecast",
    `<p> A cross-platform Flutter app that provides weather forecasts for any location worldwide. Built with Dart using Clean Architecture and Bloc state management to ensure maintainable, testable code and make future changes easy.</p>
     <p> This project was developed as part of a training program at Cyber Royale using the company’s UI/UX design. The app is under active development and will be expanded and improved over time.</p>
     <p> Notes: the app does not run on web due to the internet_connection_checker package not supporting web; when offline the app falls back to cached data and notifies the user that cached data is shown. Special thanks to Cyber Royale for the training opportunity.</p>`, 
    ["../Images/Projects/weather_app/1.jpg","../Images/Projects/weather_app/2.jpg","../Images/Projects/weather_app/3.jpg","../Images/Projects/weather_app/4.jpg","../Images/Projects/weather_app/5.jpg"],
    "Flutter, REST API",
    true,
    "https://github.com/Gaith-Kozali/weatherio"
  ),

  new Project(
    "Chatbot",
    "Conversational AI app",
    "Chatbot program will allow you to chat with Ai I connected the program with chatgpt 3 and build the prgram using clean architecture to have best and clean code.\n The App have three mode dark & light & system purple .\n ui/ux is from cyber royale company and app build for training .",
   [
  "../Images/Projects/chatbot/1.jpg",
  "../Images/Projects/chatbot/2.jpg",
  "../Images/Projects/chatbot/3.jpg",
  "../Images/Projects/chatbot/4.jpg",
  "../Images/Projects/chatbot/5.jpg",
  "../Images/Projects/chatbot/6.jpg",
  "../Images/Projects/chatbot/7.jpg",
  "../Images/Projects/chatbot/8.jpg",
  "../Images/Projects/chatbot/9.jpg",
  "../Images/Projects/chatbot/10.jpg",
  "../Images/Projects/chatbot/11.jpg",
  "../Images/Projects/chatbot/12.jpg",
  "../Images/Projects/chatbot/13.jpg",
  "../Images/Projects/chatbot/14.jpg",
  "../Images/Projects/chatbot/15.jpg",
  "../Images/Projects/chatbot/16.jpg"
],
    "Flutter",
    true,
    "https://github.com/Gaith-Kozali/Chatbot"
  ),

  new Project(
    "Social App",
    "Community and social networking",
    `<p>A cross-platform Flutter app built using Clean Architecture to produce readable, maintainable code and simplify future fixes and enhancements. The app allows users to add photos and videos from their device and manage them within a custom gallery.</p>
    <p>Media is sourced using the photo_manager package and processed locally (crop, rotate, etc.) then saved to cache using the path_provider package. The UI/UX was provided by Cyber Royale as part of a hands-on training project; development is ongoing and more features will be added over time.</p>
    <p>Technical highlights: Clean Architecture for clear separation of concerns; Bloc for predictable state management; device media access via photo_manager; local caching and file handling via path_provider. This project is a training app and includes planned improvements in future iterations.</p>`,
    [
  "../Images/Projects/social_app/1.jpg",
  "../Images/Projects/social_app/2.jpg",
  "../Images/Projects/social_app/3.jpg",
  "../Images/Projects/social_app/4.jpg",
  "../Images/Projects/social_app/5.jpg",
  "../Images/Projects/social_app/6.jpg",
  "../Images/Projects/social_app/7.jpg",
  "../Images/Projects/social_app/8.jpg",
  "../Images/Projects/social_app/9.jpg",
  "../Images/Projects/social_app/10.jpg",
  "../Images/Projects/social_app/11.jpg",
  "../Images/Projects/social_app/12.jpg",
  "../Images/Projects/social_app/13.jpg"
],
    "Flutter, photo_manager, path_provider, video_player, gif,extended_text_field, camera",
    true,
    "https://github.com/Gaith-Kozali/social-application"
  ),

  new Project(
    "News App",
    "Latest news updates",
    "A Flutter app that fetches and displays news articles from APIs with a responsive UI.",
    ["../Images/Projects/news_app/1.jpg","../Images/Projects/news_app/2.jpg","../Images/Projects/news_app/3.jpg","../Images/Projects/news_app/4.jpg"],
    "Flutter, REST API",
    true,
    ""
  ),

  new Project(
    "AuthLab",
    "Authentication UI demo",
    "A Flutter app with login, register, and reset password screens.",
    ["../Images/Projects/authLab/1.jpg","../Images/Projects/authLab/2.jpg","../Images/Projects/authLab/3.jpg"],
    "Flutter, Firebase",
    true,
    "https://github.com/Gaith-Kozali/auth_task"
  )
];