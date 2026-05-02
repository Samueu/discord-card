// src/lib/theme.ts

// 1. Definição dos Temas de Status (Cores que o botão controla)
export const STATUS_THEMES = {
  online: {
    dot: "bg-green-500",
    text: "text-green-500",
    label: "Disponível",
  },
  busy: {
    dot: "bg-red-500",
    text: "text-red-500",
    label: "Ocupado",
  },
  idle: {
    dot: "bg-yellow-500",
    text: "text-yellow-500",
    label: "Ausente",
  },
  offline: {
    dot: "bg-gray-500",
    text: "text-gray-400",
    label: "Invisível",
  },
};


export const USER_COLORS = {
  red: "text-red-500",
  green: "text-green-500",
  purple: "text-purple-500",
  pink: "text-pink-500",
  blue: "text-blue-500",
};


export type StatusType = keyof typeof STATUS_THEMES;
export type UserColorType = keyof typeof USER_COLORS;