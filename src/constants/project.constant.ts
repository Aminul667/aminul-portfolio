import { StaticImageData } from "next/image";
import livanaImage from "../assets/livana.png";
import appFormImage from "../assets/app-form.png";
import heartAttack from "../assets/heart-attack.png";

export type TProject = {
  id: number;
  coverImage: string | StaticImageData;
  imageAlt?: string;
  title: string;
  description: string;
  isOngoing: boolean;
  liveLink?: string;
  frontendLink?: string;
  backendLink?: string;
  liveText?: string;
  codeText?: string;
};

export const projects: TProject[] = [
  {
    id: 1,
    coverImage: appFormImage,
    imageAlt: "App Form Image",
    title: "App Form - NPM package for Reusable Form Component",
    description:
      "A reusable form solution for React, built with React Hook Form, Zod, Tailwind CSS, and Shadcn UI. Includes CLI scaffolding for rapid form creation and consistent, validated UI components.",
    isOngoing: false,
    liveLink: "https://www.npmjs.com/package/app-form",
    frontendLink: "https://github.com/Aminul667/app-form",
    liveText: "NPM Link",
    codeText: "Code",
  },
  {
    id: 2,
    coverImage: livanaImage,
    imageAlt: "Livana Real Estate project",
    title: "Livana – Smart Property Rental Platform",
    description:
      "Livana is a web application that streamlines property rentals. Landlords can list properties with details and photos, while tenants can explore, apply, and complete referencing easily. The platform also features secure payment tracking using stripe.",
    isOngoing: true,
    liveLink: "https://livana-client.vercel.app",
    frontendLink: "https://github.com/Aminul667/livana-client",
    backendLink: "https://github.com/Aminul667/livana-server",
  },
  {
    id: 3,
    coverImage: heartAttack,
    imageAlt: "ML Project: Heart attack prediction",
    title: "ML Project: Heart attack prediction",
    description:
      "Developed a machine learning model to predict heart attack risk using patient health data, leveraging clinical features for improved early detection and healthcare decision support.",
    isOngoing: false,
    // liveLink: "https://github.com/Aminul667/heart_attack_prediction/blob/main/program/heart_attack_prediction.ipynb",
    frontendLink: "https://github.com/Aminul667/heart_attack_prediction/blob/main/program/heart_attack_prediction.ipynb",
    // liveText: "Code",
    codeText: "Code",
  },
];
