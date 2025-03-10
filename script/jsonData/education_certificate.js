let educationList = [
	{
		certificateId: "EL-1",
		certificateName: "Bachelor of Technology in Computer Science",
		instituteName: "Delhi Technological University (formally DCE) with 9.10 CGPA - DTU",
		instituteIcon: "assets/images/icons/dtu.jpg",
		courseContent: ["<VMCSH>Semester 1</VMCSH>", "Introduction to c/c++", "Mathematics-I", "Physics-I", "Basic Electrical Engineering", "Engineering Drawing", "Logical Reasoning (Electives-1)", "<VMCSH>Semester 2</VMCSH>", "Mathematics-II", "Physics-II", "Chemistry", "WorkShop", "Basic Mechanical Engineering", "Desh Ka Mentor", "Engineering Exploration (Electives-2)", "<VMCSH>Semester 3</VMCSH>", "Analog Electornics", "Data Structures", "Object Oriented Programming", "Discrte Mathematics", "Engineering Analysis and Design Modeling and simulation", "Universal Human Values (Electives-3)", "<VMCSH>Semester 4</VMCSH>", "Digital Electronics", "Computer Organization and Articheture", "Operating System", "Database Management System", "Analysis and Design of Algorithms", "(Electives-4)", "<VMCSH>Semester 5</VMCSH>", "Software Engineering", "Machine Learning", "Theory of Computation", "Probability and Statistics", "Enterprise Java - JDBC, JSP, Hibernate...", "Engineering Economics", "The Joy of Computing using Python", "<VMCSH>Semester 6</VMCSH>", "Computer Networks", "Ethical Hacking", "Parallel Algorithms", "Airtifical Intelligent", "Compiler Design", "Fundamental of Management", "Deep Learning"],
		keywords: ['degree', 'graduation', 'dtu', 'university', 'dce', 'state university']
	},
    {
		certificateId: "EL-2",
		certificateName: "Higher Secondary Certification (HSC)",
		instituteName: "Arniko Awasiya School with 3.39 / 4.00 CGPA, A+ Grade - Nepal Board",
		instituteIcon: "assets/images/icons/arniko.jpg",
		courseContent: ["<VMCSH>Class 11</VMCSH>", "Computer Science", "Mathematics-I", "Physics-I", "Chemistry-I", "English-I", "<VMCSH>Class 12</VMCSH>", "English-II", "Mathematics-II", "Physics-II", "Chemisty-II", "Nepali"],
		keywords: ['school', 'schooling', 'ssc', 'hcs', 'arniko']
	},
	{
		certificateId: "EL-3",
		certificateName: "Secondary School Certification (SSC)",
		instituteName: "HappyLand Secondary School with 3.60 / 4.00 CGPA, O Grade - Nepal Board",
		instituteIcon: "assets/images/icons/happyland.jpg",
		courseContent: ["English", "Nepali", "Mathematics", "Optional Mathematics", "Science", "Social Science", "Computer Science", "Physical Education"],
		keywords: ['school', 'schooling', 'ssc', 'HMN', 'H.M.N']
	},
]



let professionalCertificateList = [
	{
		certificateId: "PCL-1",
		certificateName: "404",
		instituteName: "404",
		instituteIcon: "assets/images/icons/linkedin_icon.jpeg",
		courseContent: ["404"],
		keywords: ["404"]
	},
]





let instituteCertificateList = [
	{
		certificateId: "O-CL-1",
		certificateName: "The Joy of Computing using Python",
		instituteName: "NPTEL with 81% - IIT KGP",
		instituteIcon: "assets/images/icons/nptel.png",
		courseContent: ["What is Python?", "Basic Python Syntax introduction", "Data Types", "Variables", "Expressions, Numbers, and Type Conversions", "Functions", "Branching with if Statements", "While Loops", "For Loops", "Recursion", "Strings", "Formatting Strings", "Lists", "Tuples", "Dictionaries"],
		keywords: ['Python', 'Crash Course', 'Loops', 'Basics of Python']
	},
]





let onlineCertificateList = [
	{
		certificateId: "OCL-2",
		certificateName: "Introduction to Git and GitHub",
		instituteName: "Coursera",
		instituteIcon: "assets/images/icons/coursera.png",
		courseContent: ["Before Version Control", "Version Control Systems", "What is Git?", "Installing Git", "Using Git", "Tracking Files", "The Basic Git Workflow", "Advanced Git interaction", "Undoing Changes Before Committing", "Rollbacks", "Branching and Merging", "What is a branch?", "Using a Remote Repository", "Solving Conflicts", "The Pull-Merge-Push Workflow", "Pull Requests", "Code Reviews", "How to Use Code Reviews in GitHub", "Managing Projects"],
		keywords: ['Version Control', 'Git', 'Pull Requests', 'Code Reviews']
	},
	{
		certificateId: "OCL-3",
		certificateName: "Crash Course on Python",
		instituteName: "Coursera",
		instituteIcon: "assets/images/icons/coursera.png",
		courseContent: ["What is Python?", "Basic Python Syntax introduction", "Data Types", "Variables", "Expressions, Numbers, and Type Conversions", "Implicit vs Explicit Conversion", "Functions", "Branching with if Statements", "While Loops", "For Loops", "Recursion", "Strings", "Formatting Strings", "Lists", "Tuples", "Dictionaries", "Object-oriented Programming", "Classes and Methods", "Code Reuse"],
		keywords: ['Python', 'Crash Course', 'Loops', 'Basics of Python']
	},
	{
		certificateId: "OCL-4",
		certificateName: "PowerPoint Essential Training (Office 365/Microsoft 365)",
		instituteName: "LinkedIn Learning",
		instituteIcon: "assets/images/icons/linkedin_icon.jpeg",
		courseContent: ["Deliver a powerful message with a powerful presentation", "Check what version of PowerPoint you're using", "Using the exercise files", "Start quickly with a theme or template", "Use the QuickStarter outline tool", "Create and save a new presentation", "Add, remove, and rearrange slides", "Change the slide layout", "Change the slide color or background", "Change slides at once with slide masters", "Add your own text boxes", "Use Designer to create professional layouts", "Add images", "Work with shapes", "Format and add effects to objects", "Align objects using the Arrange tool", "Understand object layering", "Group objects and use Format Painter", "Remove the background from pictures", "Merge and group shapes", "Crop and convert images and icons", "Create and format charts", "Add and format video", "Add and work with audio files", "Add animation to objects and text", "Add slide transitions", "Use Presenter view to run the show"],
		keywords: ['powerful presentation', 'professional layouts', 'readers communicate', 'slide layout']
	},
	{
		certificateId: "OCL-5",
		certificateName: "Tips for Writing Business Emails",
		instituteName: "LinkedIn Learning",
		instituteIcon: "assets/images/icons/linkedin_icon.jpeg",
		courseContent: ["Email: An extension of your brand", "Selecting the audience for your email", "Timing your email message", "Using BCC in email", "Rarely reply all in email", "Choosing a subject line for your email", "Help email readers communicate", "Editing your email", "Email grammar", "Using approachable language in email", "Reader-friendly email formatting", "Strike the right tone in emails"],
		keywords: ['BCC in email', 'Email', 'Reader-friendly']
	},
	{
		certificateId: "OCL-6",
		certificateName: "Excel 2019 Essential Training",
		instituteName: "LinkedIn Learning",
		instituteIcon: "assets/images/icons/linkedin_icon.jpeg",
		courseContent: ["Getting Started with Excel", "Using the Quick Access Toolbar", "Ribbon menu", "Exploring data entry, editing, and AutoFill", "Working with dates and times", "Using SUM and AVERAGE"],
		keywords: ['Excel', 'Sum', 'Entry']
	}
]





let otherCertificateList = [
	{
		certificateId: "ICL-1",
		certificateName: "Java Stuffs",
		instituteName: "Open Source",
		instituteIcon: "assets/images/icons/opensource.png",
		courseContent: ["Object Oriented Concepts", "Core Java", "Details Principle's of OOPS - Java", "Bug Detections"],
		keywords: ['java', 'html', 'javascript', 'jquery', 'hibernate', 'spring', 'data structures', 'google cloud', 'android', 'database', 'fullstack']
	},
	{
		certificateId: "ICL-2",
		certificateName: "MERN - Stack Development",
		instituteName: "Open Source",
		instituteIcon: "assets/images/icons/opensource.png",
		courseContent: ["Logic Building Programming", "Object-oriented Programming Concepts", "React", "Node", "Express", "Mongo DB", "Mongoose", "Firebase", "HTML5", "Javascript", "JQuery", "CSS", "SCSS", "Responsive Web Design Bootstrap", "Responsive Web Design Knockout JS", "Responsive Web Design JQuery"],
		keywords: ['html', 'javascript', 'jquery', 'mern', 'database', 'fullstack']
	},
]