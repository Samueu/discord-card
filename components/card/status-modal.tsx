import React from "react";

interface StatusOption {
  id: string;
  name: string;
  description?: string;
  iconColor: string;
  hasArrow?: boolean;
}

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
}

const statuses: StatusOption[] = [
  { id: "Online", name: "Online", iconColor: "bg-green-500" },
  { id: "Idle", name: "Idle", iconColor: "bg-yellow-500", hasArrow: true },
  {
    id: "Do Not Disturb",
    name: "Do Not Disturb",
    description: "You will not receive desktop notifications",
    iconColor: "bg-red-500",
    hasArrow: true,
  },
  {
    id: "Invisible",
    name: "Invisible",
    description: "You will appear offline",
    iconColor: "bg-gray-500",
    hasArrow: true,
  },
];

const StatusModal: React.FC<StatusModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-80 rounded-md bg-[#18191c] py-2 shadow-xl border border-[#ffffff05]">
        {statuses.map((status, index) => (
          <React.Fragment key={status.id}>
            <button
              onClick={() => {
                onSelect(status.id);
                onClose();
              }}
              className="flex w-full items-center px-3 py-2 text-left hover:bg-[#4752c4] group transition-colors"
            >
              <div className="mr-3 flex h-4 w-4 items-center justify-center">
                <div className={`h-3 w-3 rounded-full ${status.iconColor}`} />
              </div>

              <div className="flex-1">
                <div className="text-[15px] font-medium text-gray-200 group-hover:text-white">
                  {status.name}
                </div>
                {status.description && (
                  <p className="text-xs text-gray-400 leading-tight">
                    {status.description}
                  </p>
                )}
              </div>

              {status.hasArrow && (
                <span className="text-gray-400 group-hover:text-white ml-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              )}
            </button>

            {index === 0 && <div className="my-1 h-px bg-[#ffffff0a] mx-2" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatusModal;
