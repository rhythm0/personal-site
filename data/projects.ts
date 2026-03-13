import { ProjectItem } from "../types";

export const featuredProjects: ProjectItem[] = [
  {
    title: "RRMQ Distributed Message Queue",
    description:
      "Fault-tolerant message queue built using the Raft consensus algorithm, with leader election, replication, and sub-second failover.",
    tech: "Python · Flask · Distributed Systems",
  },
  {
    title: "RAG Music Recommendation",
    description:
      "A retrieval-augmented music recommendation system built from 18,000+ reviews to generate contextual, conversational suggestions.",
    tech: "Python · Transformers · LLM",
  },
  {
    title: "Chicago Crime Data Pipeline",
    description:
      "A large-scale analytics pipeline for crime data using Spark, Hive, Kafka, and HBase with real-time updates and visualization.",
    tech: "Spark · Hive · Kafka · HBase",
  },
  {
    title: "Genomics Annotation Service",
    description:
      "A scalable AWS-based genomics annotation SaaS platform designed for secure, cost-efficient, high-availability workloads.",
    tech: "AWS · Flask · Cloud Architecture",
  },
];