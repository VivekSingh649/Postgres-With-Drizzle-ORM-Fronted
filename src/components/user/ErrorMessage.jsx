import { AlertTriangle, Info, AlertCircle } from "lucide-react";
import React from "react";

const typeStyles = {
  error: {
    bg: "bg-gradient-to-br from-red-50 via-pink-50 to-red-100 border-red-200",
    iconBg: "bg-red-200",
    iconColor: "text-red-600",
    text: "text-red-800",
    Icon: AlertTriangle,
  },
  warning: {
    bg: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border-yellow-200",
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-600",
    text: "text-yellow-800",
    Icon: AlertCircle,
  },
  message: {
    bg: "bg-gradient-to-br from-white via-gray-50 to-gray-100 border-gray-200",
    iconBg: "bg-gray-200",
    iconColor: "text-gray-600",
    text: "text-gray-800",
    Icon: Info,
  },
};

function ErrorMessage({
  message,
  icon: CustomIcon,
  className = "",
  type = "error",
}) {
  const styles = typeStyles[type] || typeStyles.error;
  const Icon = CustomIcon || styles.Icon;
  return (
    <div className="px-8 py-6">
      <div
        className={`flex flex-col items-center justify-center p-12 rounded-3xl border ${styles.bg} ${className}`}
      >
        <div className="relative mb-6">
          <div
            className={`absolute inset-0 ${styles.iconBg} rounded-full blur-xl opacity-30`}
          ></div>
          <Icon className={`relative w-14 h-14 ${styles.iconColor}`} />
        </div>
        <p
          className={`text-2xl font-bold text-center max-w-2xl leading-tight ${styles.text}`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default ErrorMessage;
