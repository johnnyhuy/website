// This is a mock implementation. In a real application, you would fetch this data from a CMS or database.

export interface TechDoc {
  title: string
  slug: string
  description: string
  content: string
  date: string
  updatedAt: string
  readTime: string
  category: string
  categoryName: string
  tags: string[]
  type: "techdocs"
  headings: {
    id: string
    text: string
    level: number
  }[]
}

// Mock data for tech docs
const techDocs: TechDoc[] = [
  {
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    description: "Learn how to set up and start building with Next.js",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Next.js is a React framework that enables server-side rendering, static site generation, and more.</p>
      
      <h2 id="installation">Installation</h2>
      <p>To create a new Next.js app, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <h3 id="manual-setup">Manual Setup</h3>
      <p>If you prefer to set up Next.js manually, you can install the required packages:</p>
      <pre><code>npm install next react react-dom</code></pre>
      
      <h2 id="project-structure">Project Structure</h2>
      <p>A typical Next.js project has the following structure:</p>
      <pre><code>
      ├── pages/
      ├── public/
      ├── styles/
      ├── next.config.js
      ├── package.json
      </code></pre>
    `,
    date: "2023-10-15",
    updatedAt: "2023-12-01",
    readTime: "5 min read",
    category: "frameworks",
    categoryName: "Frameworks",
    tags: ["Next.js", "React", "JavaScript"],
    type: "techdocs",
    headings: [
      { id: "introduction", text: "Introduction", level: 2 },
      { id: "installation", text: "Installation", level: 2 },
      { id: "manual-setup", text: "Manual Setup", level: 3 },
      { id: "project-structure", text: "Project Structure", level: 2 },
    ],
  },
  {
    title: "React Server Components",
    slug: "react-server-components",
    description: "Understanding React Server Components and their benefits",
    content: `
      <h2 id="what-are-server-components">What are Server Components?</h2>
      <p>React Server Components allow you to render components on the server, reducing the JavaScript sent to the client.</p>
      
      <h2 id="benefits">Benefits</h2>
      <p>Server Components offer several advantages:</p>
      <ul>
        <li>Reduced client-side JavaScript</li>
        <li>Access to server-only resources</li>
        <li>Improved performance</li>
      </ul>
      
      <h2 id="usage">Usage</h2>
      <p>In Next.js, all components inside the app directory are Server Components by default.</p>
      <pre><code>
      // This is a Server Component
      export default function Page() {
        return <h1>Hello, Server Component!</h1>
      }
      </code></pre>
      
      <h2 id="client-components">Client Components</h2>
      <p>To use client-side features, you can mark a component as a Client Component:</p>
      <pre><code>
      'use client'
      
      // This is a Client Component
      export default function Counter() {
        const [count, setCount] = useState(0)
        return (
          <button onClick={() => setCount(count + 1)}>
            Count: {count}
          </button>
        )
      }
      </code></pre>
    `,
    date: "2023-11-20",
    updatedAt: "2023-12-05",
    readTime: "8 min read",
    category: "frameworks",
    categoryName: "Frameworks",
    tags: ["React", "Server Components", "Next.js"],
    type: "techdocs",
    headings: [
      { id: "what-are-server-components", text: "What are Server Components?", level: 2 },
      { id: "benefits", text: "Benefits", level: 2 },
      { id: "usage", text: "Usage", level: 2 },
      { id: "client-components", text: "Client Components", level: 2 },
    ],
  },
  {
    title: "Kubernetes Basics",
    slug: "kubernetes-basics",
    description: "An introduction to Kubernetes and container orchestration",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.</p>
      
      <h2 id="key-concepts">Key Concepts</h2>
      <p>Understanding these core concepts is essential for working with Kubernetes:</p>
      
      <h3 id="pods">Pods</h3>
      <p>The smallest deployable units in Kubernetes that can be created and managed.</p>
      
      <h3 id="services">Services</h3>
      <p>An abstract way to expose an application running on a set of Pods as a network service.</p>
      
      <h3 id="deployments">Deployments</h3>
      <p>Provides declarative updates for Pods and ReplicaSets.</p>
      
      <h2 id="getting-started">Getting Started</h2>
      <p>To get started with Kubernetes, you'll need:</p>
      <ul>
        <li>kubectl - the Kubernetes command-line tool</li>
        <li>A Kubernetes cluster (local or cloud-based)</li>
      </ul>
      
      <h3 id="minikube">Minikube</h3>
      <p>For local development, Minikube is a great option:</p>
      <pre><code>
      # Install Minikube
      brew install minikube
      
      # Start a cluster
      minikube start
      </code></pre>
    `,
    date: "2023-09-10",
    updatedAt: "2023-11-15",
    readTime: "10 min read",
    category: "devops",
    categoryName: "DevOps",
    tags: ["Kubernetes", "DevOps", "Containers"],
    type: "techdocs",
    headings: [
      { id: "introduction", text: "Introduction", level: 2 },
      { id: "key-concepts", text: "Key Concepts", level: 2 },
      { id: "pods", text: "Pods", level: 3 },
      { id: "services", text: "Services", level: 3 },
      { id: "deployments", text: "Deployments", level: 3 },
      { id: "getting-started", text: "Getting Started", level: 2 },
      { id: "minikube", text: "Minikube", level: 3 },
    ],
  },
  {
    title: "AWS Lambda Functions",
    slug: "aws-lambda-functions",
    description: "Building serverless applications with AWS Lambda",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers.</p>
      
      <h2 id="benefits">Benefits</h2>
      <p>Lambda offers several advantages:</p>
      <ul>
        <li>No server management</li>
        <li>Automatic scaling</li>
        <li>Pay-per-use pricing</li>
        <li>Built-in fault tolerance</li>
      </ul>
      
      <h2 id="creating-a-lambda-function">Creating a Lambda Function</h2>
      <p>You can create a Lambda function through the AWS Console or using infrastructure as code tools like AWS CDK or Terraform.</p>
      
      <h3 id="using-aws-console">Using AWS Console</h3>
      <p>Steps to create a Lambda function in the AWS Console:</p>
      <ol>
        <li>Navigate to the Lambda service</li>
        <li>Click "Create function"</li>
        <li>Choose "Author from scratch"</li>
        <li>Configure basic settings</li>
        <li>Write or upload your code</li>
      </ol>
      
      <h3 id="using-aws-cdk">Using AWS CDK</h3>
      <p>Example of creating a Lambda function with AWS CDK:</p>
      <pre><code>
      import * as cdk from 'aws-cdk-lib';
      import * as lambda from 'aws-cdk-lib/aws-lambda';
      
      export class LambdaStack extends cdk.Stack {
        constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
          super(scope, id, props);
          
          // Create a Lambda function
          const myFunction = new lambda.Function(this, 'MyFunction', {
            runtime: lambda.Runtime.NODEJS_18_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda'),
          });
        }
      }
      </code></pre>
      
      <h2 id="event-sources">Event Sources</h2>
      <p>Lambda functions can be triggered by various event sources:</p>
      <ul>
        <li>API Gateway</li>
        <li>S3 bucket events</li>
        <li>DynamoDB streams</li>
        <li>CloudWatch Events</li>
        <li>SQS queues</li>
      </ul>
      
      <h2 id="best-practices">Best Practices</h2>
      <p>When working with Lambda functions, consider these best practices:</p>
      <ul>
        <li>Keep functions small and focused</li>
        <li>Reuse execution context when possible</li>
        <li>Minimize cold starts</li>
        <li>Set appropriate memory and timeout values</li>
        <li>Use environment variables for configuration</li>
      </ul>
    `,
    date: "2023-08-05",
    updatedAt: "2023-10-20",
    readTime: "12 min read",
    category: "cloud",
    categoryName: "Cloud",
    tags: ["AWS", "Serverless", "Lambda"],
    type: "techdocs",
    headings: [
      { id: "introduction", text: "Introduction", level: 2 },
      { id: "benefits", text: "Benefits", level: 2 },
      { id: "creating-a-lambda-function", text: "Creating a Lambda Function", level: 2 },
      { id: "using-aws-console", text: "Using AWS Console", level: 3 },
      { id: "using-aws-cdk", text: "Using AWS CDK", level: 3 },
      { id: "event-sources", text: "Event Sources", level: 2 },
      { id: "best-practices", text: "Best Practices", level: 2 },
    ],
  },
  {
    title: "TypeScript for React Developers",
    slug: "typescript-for-react-developers",
    description: "Learn how to use TypeScript effectively in React applications",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>TypeScript adds static typing to JavaScript, making your React applications more robust and maintainable.</p>
      
      <h2 id="setting-up">Setting Up TypeScript with React</h2>
      <p>You can create a new React project with TypeScript using Create React App:</p>
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <p>Or add TypeScript to an existing React project:</p>
      <pre><code>npm install --save typescript @types/node @types/react @types/react-dom</code></pre>
      
      <h2 id="typing-components">Typing React Components</h2>
      <p>There are several ways to type React components:</p>
      
      <h3 id="function-components">Function Components</h3>
      <pre><code>
      import React from 'react';
      
      interface GreetingProps {
        name: string;
        age?: number; // Optional prop
      }
      
      const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
        return (
          <div>
            <h1>Hello, {name}!</h1>
            {age && <p>You are {age} years old.</p>}
          </div>
        );
      };
      
      export default Greeting;
      </code></pre>
      
      <h3 id="class-components">Class Components</h3>
      <pre><code>
      import React, { Component } from 'react';
      
      interface CounterProps {
        initialCount: number;
      }
      
      interface CounterState {
        count: number;
      }
      
      class Counter extends Component<CounterProps, CounterState> {
        constructor(props: CounterProps) {
          super(props);
          this.state = {
            count: props.initialCount,
          };
        }
        
        increment = () => {
          this.setState(prevState => ({
            count: prevState.count + 1,
          }));
        };
        
        render() {
          return (
            <div>
              <p>Count: {this.state.count}</p>
              <button onClick={this.increment}>Increment</button>
            </div>
          );
        }
      }
      
      export default Counter;
      </code></pre>
      
      <h2 id="hooks">Typing Hooks</h2>
      <p>TypeScript works well with React hooks:</p>
      
      <h3 id="usestate">useState</h3>
      <pre><code>
      const [count, setCount] = useState<number>(0);
      </code></pre>
      
      <h3 id="useref">useRef</h3>
      <pre><code>
      const inputRef = useRef<HTMLInputElement>(null);
      </code></pre>
      
      <h3 id="usecontext">useContext</h3>
      <pre><code>
      interface ThemeContextType {
        theme: 'light' | 'dark';
        toggleTheme: () => void;
      }
      
      const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
      
      function useTheme() {
        const context = useContext(ThemeContext);
        if (context === undefined) {
          throw new Error('useTheme must be used within a ThemeProvider');
        }
        return context;
      }
      </code></pre>
    `,
    date: "2023-07-12",
    updatedAt: "2023-09-30",
    readTime: "15 min read",
    category: "frontend",
    categoryName: "Frontend",
    tags: ["TypeScript", "React", "JavaScript"],
    type: "techdocs",
    headings: [
      { id: "introduction", text: "Introduction", level: 2 },
      { id: "setting-up", text: "Setting Up TypeScript with React", level: 2 },
      { id: "typing-components", text: "Typing React Components", level: 2 },
      { id: "function-components", text: "Function Components", level: 3 },
      { id: "class-components", text: "Class Components", level: 3 },
      { id: "hooks", text: "Typing Hooks", level: 2 },
      { id: "usestate", text: "useState", level: 3 },
      { id: "useref", text: "useRef", level: 3 },
      { id: "usecontext", text: "useContext", level: 3 },
    ],
  },
]

// Get all tech docs
export async function getAllTechDocs(limit?: number) {
  // Sort by updated date (newest first)
  const sortedDocs = [...techDocs].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())

  return limit ? sortedDocs.slice(0, limit) : sortedDocs
}

// Get tech docs by category
export async function getTechDocsByCategory(category: string) {
  const docs = techDocs.filter((doc) => doc.category === category)
  console.log(`Found ${docs.length} docs for category: ${category}`)
  return docs
}

// Get a single tech doc
export async function getTechDoc(category: string, slug: string) {
  return techDocs.find((doc) => doc.category === category && doc.slug === slug)
}

// Get all tech docs categories
export async function getTechDocsCategories() {
  const categories: Record<
    string,
    {
      name: string
      slug: string
      count: number
      docs: { title: string; slug: string }[]
    }
  > = {}

  techDocs.forEach((doc) => {
    if (!categories[doc.category]) {
      categories[doc.category] = {
        name: doc.categoryName,
        slug: doc.category,
        count: 0,
        docs: [],
      }
    }

    categories[doc.category].count += 1
    categories[doc.category].docs.push({
      title: doc.title,
      slug: doc.slug,
    })
  })

  // Convert to array and return
  const result = Object.values(categories)
  console.log(
    "Available categories:",
    result.map((cat) => cat.slug),
  )
  return result
}

// Function to check if a post is a tech doc
export function isTechDoc(post: any) {
  return post.type === "techdocs"
}
