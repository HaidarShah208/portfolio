const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const GLOBE_SHELL_RADIUS = 2;
export const SKILLS_ORBIT_RADIUS = GLOBE_SHELL_RADIUS * 1.06;

const goldenRatio = (1 + Math.sqrt(5)) / 2;

export function fibonacciSphere(count, radius) {
  const positions = [];
  for (let i = 0; i < count; i += 1) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const nx = Math.sin(phi) * Math.cos(theta);
    const ny = Math.cos(phi);
    const nz = Math.sin(phi) * Math.sin(theta);
    positions.push({
      x: radius * nx,
      y: radius * ny,
      z: radius * nz,
      normal: { x: nx, y: ny, z: nz },
    });
  }
  return positions;
}

const rawSkills = [
  {
    id: "react",
    name: "React",
    icon: `${ICON_BASE}/react/react-original.svg`,
    level: "Advanced",
    years: "3+ years",
    description:
      "Building component-driven UIs with hooks, context, performance patterns, and scalable architecture.",
    related: ["JavaScript", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: `${ICON_BASE}/nextjs/nextjs-original.svg`,
    level: "Advanced",
    years: "2+ years",
    description:
      "Building scalable SSR, SSG, ISR and full-stack applications with App Router.",
    related: ["React", "TypeScript", "Tailwind", "Node.js"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: `${ICON_BASE}/nodejs/nodejs-original.svg`,
    level: "Advanced",
    years: "3+ years",
    description:
      "Designing event-driven APIs, microservices, and high-throughput backend systems.",
    related: ["Express.js", "NestJS", "MongoDB", "PostgreSQL"],
  },
  {
    id: "nestjs",
    name: "NestJS",
    icon: `${ICON_BASE}/nestjs/nestjs-plain.svg`,
    level: "Advanced",
    years: "2+ years",
    description:
      "Crafting modular, testable backends with decorators, guards, and clean architecture.",
    related: ["TypeScript", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: `${ICON_BASE}/typescript/typescript-original.svg`,
    level: "Advanced",
    years: "2+ years",
    description:
      "Strong typing across frontend and backend for safer, maintainable codebases.",
    related: ["React", "Next.js", "NestJS", "Node.js"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: `${ICON_BASE}/javascript/javascript-original.svg`,
    level: "Advanced",
    years: "3+ years",
    description:
      "Modern ES6+ development with async flows, functional patterns, and browser APIs.",
    related: ["React", "Node.js", "TypeScript", "Express.js"],
  },
  {
    id: "python",
    name: "Python",
    icon: `${ICON_BASE}/python/python-original.svg`,
    level: "Advanced",
    years: "2+ years",
    description:
      "Backend automation, AI integrations, scripting, and production API development.",
    related: ["FastAPI", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: `${ICON_BASE}/postgresql/postgresql-original.svg`,
    level: "Intermediate",
    years: "2+ years",
    description:
      "Relational modeling, indexing strategies, migrations, and optimized query design.",
    related: ["Node.js", "NestJS", "Redis", "Docker"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: `${ICON_BASE}/mongodb/mongodb-original.svg`,
    level: "Advanced",
    years: "3+ years",
    description:
      "Document modeling, aggregation pipelines, and MERN stack data architecture.",
    related: ["Node.js", "Express.js", "React", "Redis"],
  },
  {
    id: "redis",
    name: "Redis",
    icon: `${ICON_BASE}/redis/redis-original.svg`,
    level: "Intermediate",
    years: "1+ years",
    description:
      "Caching layers, session storage, and queue-backed performance optimization.",
    related: ["Node.js", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    id: "docker",
    name: "Docker",
    icon: `${ICON_BASE}/docker/docker-original.svg`,
    level: "Intermediate",
    years: "2+ years",
    description:
      "Containerized deployments, multi-stage builds, and reproducible environments.",
    related: ["AWS", "CI/CD", "Node.js", "PostgreSQL"],
  },
  {
    id: "aws",
    name: "AWS",
    icon: `${ICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
    level: "Intermediate",
    years: "1+ years",
    description:
      "Cloud hosting, storage, and deployment workflows for production applications.",
    related: ["Docker", "CI/CD", "Node.js", "PostgreSQL"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg`,
    level: "Advanced",
    years: "2+ years",
    description:
      "Utility-first responsive design with modern layouts and design systems.",
    related: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    id: "fastapi",
    name: "FastAPI",
    icon: `${ICON_BASE}/fastapi/fastapi-original.svg`,
    level: "Advanced",
    years: "1+ years",
    description:
      "High-performance Python APIs with async endpoints and OpenAPI documentation.",
    related: ["Python", "PostgreSQL", "Docker", "Redis"],
  },
  {
    id: "express",
    name: "Express.js",
    icon: `${ICON_BASE}/express/express-original.svg`,
    level: "Advanced",
    years: "3+ years",
    description:
      "REST APIs, middleware pipelines, authentication, and backend integrations.",
    related: ["Node.js", "MongoDB", "JavaScript", "PostgreSQL"],
  },
  {
    id: "git",
    name: "Git",
    icon: `${ICON_BASE}/git/git-original.svg`,
    level: "Advanced",
    years: "3+ years",
    description:
      "Version control workflows, branching strategies, and collaborative development.",
    related: ["GitHub", "CI/CD", "Docker", "JavaScript"],
  },
  {
    id: "github",
    name: "GitHub",
    icon: `${ICON_BASE}/github/github-original.svg`,
    level: "Advanced",
    years: "3+ years",
    description:
      "Repository management, pull requests, actions, and team-based delivery.",
    related: ["Git", "CI/CD", "Docker", "Node.js"],
  },
  {
    id: "cicd",
    name: "CI/CD",
    icon: `${ICON_BASE}/githubactions/githubactions-original.svg`,
    level: "Intermediate",
    years: "1+ years",
    description:
      "Automated testing, build pipelines, and reliable deployment workflows.",
    related: ["GitHub", "Docker", "AWS", "Node.js"],
  },
];

const positions = fibonacciSphere(rawSkills.length, SKILLS_ORBIT_RADIUS);

export const skills = rawSkills.map((skill, index) => ({
  ...skill,
  position: {
    x: positions[index].x,
    y: positions[index].y,
    z: positions[index].z,
  },
  normal: positions[index].normal,
}));
