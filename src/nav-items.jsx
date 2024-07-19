import { Home, FileQuestion } from "lucide-react";
import Index from "./pages/Index.jsx";
import QChatForm from "./pages/QChatForm.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Q-CHAT Form",
    to: "/q-chat-form",
    icon: <FileQuestion className="h-4 w-4" />,
    page: <QChatForm />,
  },
];