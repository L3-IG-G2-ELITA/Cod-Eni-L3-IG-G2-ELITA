import { IoAccessibility } from "react-icons/io5";
import { ReactNode } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { MdAvTimer } from "react-icons/md";
import { IoHappyOutline } from "react-icons/io5";
export const values_data: IValue[] = [
  {
    icon: <IoAccessibility />,
    description:
      "Nous nous engageons à rendre nos services accessibles à tous, en éliminant les barrières et en offrant des solutions conviviales et inclusives pour tous les utilisateurs.",
    title: "Accessibilité",
  },
  {
    icon: <MdOutlineSecurity />,
    description:
      "La sécurité de vos informations est notre priorité absolue. Nous utilisons des technologies avancées et des protocoles rigoureux pour protéger vos données sensibles contre les menaces.",
    title: "Sécurité des informations",
  },
  {
    icon: <MdAvTimer />,
    description:
      "Optimisez votre temps avec nos services rapides et efficaces. Nous simplifions les processus pour que vous puissiez accomplir vos tâches en un minimum de temps.",
    title: "Gagnez du temps",
  },
  {
    icon: <IoHappyOutline />,
    description:
      "Dites adieu à la création répétée de comptes. Notre système simplifié vous permet d'accéder facilement à nos services sans les tracas des inscriptions multiples.",
    title: "Ne plus créer de compte",
  },
];

export const services: IService[] = [
  {
    title: "Service Administratif",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis amet id sodales sollicitudin. Vulputate netus lacus vitae condimentum mauris. Enim sodales urna ante laoreet pellentesque sit accumsan iaculis. Id hac fringilla accumsan montes euismod tristique hac mauris odio.",
    bg: "bg-white",
    icon: "bg-[#5541D9] bg-opacity-20",
    hoverIcon:"bg-[#ecf8ff]",
    tbg: "bg-[#ECF8FF] ",
  },
  {
    title: "Service Administratif",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis amet id sodales sollicitudin. Vulputate netus lacus vitae condimentum mauris. Enim sodales urna ante laoreet pellentesque sit accumsan iaculis. Id hac fringilla accumsan montes euismod tristique hac mauris odio.",
    bg: "bg-[#ECF8FF]",
    icon: "bg-white",
    hoverIcon:"bg-[#ddd9f8]",
    tbg: "bg-white",
  },
  {
    title: "Service Administratif",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis amet id sodales sollicitudin. Vulputate netus lacus vitae condimentum mauris. Enim sodales urna ante laoreet pellentesque sit accumsan iaculis. Id hac fringilla accumsan montes euismod tristique hac mauris odio.",
    bg: "bg-white",
    icon: "bg-[#ECF8FF] ",
    hoverIcon:"bg-[#ecf8ff]",
    tbg: "bg-white",
  },
];
export const steps: IStep[] = [
  {
    title: "Choisir le Service à Utiliser",
    description:
      "Découvrez notre large éventail de services et sélectionnez celui qui correspond le mieux à vos besoins. Nous proposons une gamme diversifiée pour répondre à toutes vos exigences administratives.",
  },
  {
    title: "Utiliser cityZenConnect pour y accéder",
    description:
      "Accédez facilement à nos services en ligne via cityZenConnect. Notre interface intuitive simplifie le processus de soumission de demandes, vous permettant de les compléter rapidement et efficacement.",
  },
  {
    title: "Authentification Simplifiée",
    description:
      "Une fois connecté à notre plateforme, ne vous souciez plus de l'authentification à chaque utilisation. Suivez le statut de vos demandes en temps réel et recevez des notifications à chaque étape de votre parcours.",
  },
];

export interface IValue {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface IService {
  title: string;
  description: string;
  bg: string;
  icon: string;
  tbg: string;
  hoverIcon:string
}
export interface IStep {
  title: string;
  description: string;
}
