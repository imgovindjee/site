let skillCategories = [
    {
        category: "Languages",
        icon: "💻",
        items: [
            { title: "Java", description: "Primary language at Innovaccer for building production-grade microservices on the Platform Engineering team. Used for high-throughput data ingestion pipelines processing 50M+ files, multi-tenant service architecture, and enterprise-scale backend systems." },
            { title: "Python", description: "Used for automation, scripting, and data engineering workflows. Applied in agent-driven vulnerability remediation across Python repositories at Innovaccer, integrating UV for dependency management and Claude for context-aware analysis." },
            { title: "Scala", description: "Used in production data engineering pipelines at Innovaccer — specifically in the Kafka pipeline (Snowflake → Databricks → Elasticsearch) and agent-driven vulnerability remediation workflows with Scala CLI integration." },
            { title: "Go-Lang", description: "Systems programming language known for its efficiency and concurrency model. Used for building high-performance services and CLI tooling." },
            { title: "C", description: "Low-level general-purpose programming language. Strong foundation in systems programming, memory management, and OS-level concepts." },
            { title: "C++", description: "Object-oriented extension of C used for performance-critical applications. Strong foundation in data structures, algorithms, and competitive programming." },
            { title: "JavaScript", description: "Full-stack language used across frontend (React.js) and backend (Node.js + Express.js) development. Applied in building web applications like Blog Your Voice and Movix." }
        ]
    },
    {
        category: "Microservices",
        icon: "⚙️",
        items: [
            { title: "Auto-Scaling", description: "Hands-on experience designing auto-scaling policies for microservices at Innovaccer — configuring Kubernetes HPA and resource thresholds to handle dynamic workload spikes without manual intervention." },
            { title: "Service Deployment", description: "End-to-end experience deploying production microservices using Docker, Kubernetes, Helm charts, and Argo CD. Involved in the multi-tenant Compute Plane + Data Plane architecture rollout at Innovaccer." }
        ]
    },
    {
        category: "Message Streaming",
        icon: "📨",
        items: [
            { title: "Apache Kafka", description: "Production experience at Innovaccer: architected a Kafka pipeline (Snowflake → Databricks → Elasticsearch) resolving broker limit issues via dynamic topic configuration, Avro serialization for payload optimization, and an overflow routing system with retry + DLQ for zero message loss." },
            { title: "RabbitMQ", description: "Message broker used for asynchronous inter-service communication. Part of the message streaming stack alongside Apache Kafka, enabling reliable event-driven microservice architectures." }
        ]
    },
    {
        category: "DevOps & Containerization",
        icon: "🐳",
        items: [
            { title: "Docker", description: "Container platform used for packaging and deploying microservices at Innovaccer. Core to the Platform Engineering team's CI/CD and service deployment workflows." },
            { title: "Kubernetes", description: "Production container orchestration at Innovaccer. Used for managing microservice deployments, auto-scaling, and the Compute Plane / Data Plane multi-tenant model." },
            { title: "K9s", description: "Terminal-based UI for managing Kubernetes clusters. Used for real-time pod monitoring, log streaming, and debugging services deployed on Kubernetes at Innovaccer." },
            { title: "Helm", description: "Kubernetes package manager used for deploying and managing services in Innovaccer's infrastructure. Involved in multi-tenant microservices migration and service onboarding workflows." },
            { title: "Argo CD", description: "GitOps continuous delivery tool for Kubernetes. Used at Innovaccer for declarative deployment pipelines and ensuring infrastructure-as-code consistency across environments." }
        ]
    },
    {
        category: "Cloud & Storage",
        icon: "☁️",
        items: [
            { title: "AWS (S3)", description: "Cloud storage used at Innovaccer for overflow routing in the Kafka data pipeline — excess data is directed to AWS S3 as a buffer layer, backed by a retry + DLQ strategy for fault tolerance." },
            { title: "Azure (ADLS)", description: "Azure Data Lake Storage used for large-scale data storage and processing in multi-cloud data engineering architectures." },
            { title: "GCP", description: "Google Cloud Platform used alongside AWS and Azure in multi-cloud data engineering architectures. Familiar with GCP services for data storage, compute, and pipeline orchestration." }
        ]
    },
    {
        category: "Frameworks & Libraries",
        icon: "🧩",
        items: [
            { title: "React.js", description: "Used to build production-grade frontend applications. Built Blog Your Voice (120 drafts/day posting system) and Movix (movies/TV discovery platform) with React." },
            { title: "Node.js", description: "Used for building REST APIs and full-stack applications. Backend of Blog Your Voice built with Node.js + Express + MongoDB." },
            { title: "Express.js", description: "Node.js web framework used to build REST APIs. Backend of Blog Your Voice built with Express + Node.js + MongoDB stack, handling routing, middleware, and API integration." },
            { title: "JavaFX", description: "Java GUI framework used for building rich desktop applications. Applied in building desktop tools including the Process Scheduler and Algorithm Visualizer desktop variants." },
            { title: "Servlets", description: "Java Servlets used for server-side web programming under the JEE stack. Core part of Enterprise Java development — handling HTTP requests, session management, and server-side rendering." },
            { title: "JEE (Jakarta EE)", description: "Enterprise Java platform covering Servlets, JSP, JDBC, Hibernate, and JPA for building scalable server-side applications. Studied in-depth at DTU and applied in enterprise Java coursework." },
            { title: "Swing", description: "Java GUI toolkit used for building cross-platform desktop applications. Used in the Process Scheduler app (FCFS, SRTF, Round Robin) and PDF File Compressor with real-time progress updates." }
        ]
    },
    {
        category: "Web Technologies",
        icon: "🌐",
        items: [
            { title: "HTML5", description: "Standard markup language for web pages. Used extensively in building portfolio, web apps, and frontend projects with semantic HTML5 elements and modern browser APIs." },
            { title: "CSS3", description: "Styling language for web pages. Strong proficiency in CSS3 including Flexbox, Grid, animations, transitions, CSS variables, and responsive design patterns." },
            { title: "SCSS", description: "CSS preprocessor extending CSS with variables, nesting, mixins, and functions. Used in production frontend projects for maintainable and scalable stylesheet architecture." },
            { title: "Bootstrap", description: "CSS framework for responsive web design. Used in portfolio and web projects to build mobile-first layouts quickly with pre-built components and a 12-column grid system." },
            { title: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development. Used for building modern, responsive interfaces with fine-grained control over styling without writing custom CSS." }
        ]
    },
    {
        category: "Data Engineering",
        icon: "📊",
        items: [
            { title: "Snowflake", description: "Cloud data warehouse used at Innovaccer as the source in the Kafka pipeline (Snowflake → Databricks → Elasticsearch), leveraging its scalable architecture for data extraction at scale." },
            { title: "Databricks", description: "Cloud data platform used in production at Innovaccer for data engineering pipelines, Spark-based transformations, and serving as a processing layer in the Kafka ingestion pipeline." },
            { title: "Apache Spark", description: "Distributed data processing engine used in data engineering pipelines. Core part of the Innovaccer Databricks-based data platform for large-scale transformations." },
            { title: "Avro", description: "Data serialization framework used in production at Innovaccer's Kafka pipeline to optimize message payload size and enforce schema consistency across producer-consumer boundaries." }
        ]
    },
    {
        category: "Databases",
        icon: "🗄️",
        items: [
            { title: "MySQL", description: "Widely used relational database management system. Used in enterprise Java and backend service projects for structured data persistence." },
            { title: "MongoDB", description: "NoSQL document database used in full-stack projects. Backend of Blog Your Voice uses MongoDB for flexible data modeling and fast document retrieval." },
            { title: "PostgreSQL", description: "Advanced open-source relational database. Used in production backend services for structured data storage and complex query execution." }
        ]
    },
    {
        category: "Version Control",
        icon: "🔧",
        items: [
            { title: "Git", description: "Daily-use version control system for all projects. Experience with branching strategies, PR workflows, code reviews, and managing multi-repo codebases across Java, Python, Scala, and Node.js." },
            { title: "GitHub", description: "Cloud-based Git hosting platform used for version control, collaboration, and open-source project management. All personal projects and contributions hosted at github.com/imgovindjee." }
        ]
    }
]

// Flat array derived from categories — used by search
let skills = skillCategories.flatMap(cat => cat.items)


let handsOns = [
    "Architected Kafka pipelines with Avro serialization, dynamic topic configuration, and DLQ-backed retry strategies for zero message loss at scale.",
    "Built and scaled data ingestion pipelines handling 50M+ files in production with sub-35-minute 1M file throughput.",
    "Migrated microservices from single-tenant to multi-tenant architecture using Compute Plane + Data Plane model on Kubernetes.",
    "Built agent-driven vulnerability remediation workflows integrating UV, Scala CLI, and Claude across Python, Scala, Java, and Node.js repos.",
    "Deployed and managed containerized microservices using Docker, Kubernetes, Helm, and Argo CD.",
    "Developed full-stack applications with React.js frontend and Node.js + Express + MongoDB backend.",
    "Solved 3,150+ DSA problems on LeetCode with a 2384+ max rating — specializing in Dynamic Programming, Graphs, and Recursion.",
    "Experience with multi-cloud platforms: AWS S3, Azure ADLS, and GCP for data storage and pipeline overflow routing.",
    "Built data engineering pipelines using Apache Spark, Databricks, and Snowflake for large-scale data transformations.",
    "Version control and CI/CD workflows using Git, GitHub, GitLab, Helm, and Argo CD across production codebases."
]
