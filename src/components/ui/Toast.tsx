import React from 'react';
import { X, AlertCircle, CheckCircle, Info } from 'lucide-react';
import clsx from 'clsx';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  message: string;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
}

const typeClasses = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
};

const iconClasses = {
  success: 'text-green-500',
  error: 'text-red-500',
  info: 'text-blue-500',
};

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

export function Toast({
  type = 'info',
  message,
  onClose,
  autoClose = true,
  duration = 5000,
}: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [autoClose, duration, onClose]);

  if (!isVisible) return null;

  const Icon = icons[type];

  return (
    <div
      className={clsx(
        'fixed bottom-4 right-4 max-w-sm border rounded-lg p-4 flex items-gap-3 animate-fade-in-up',
        typeClasses[type],
      )}
      role="alert"
    >
      <Icon className={clsx('flex-shrink-0', iconClasses[type])} size={20} />
      <p className="flex-grow text-sm">{message}</p>
      {onClose && (
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
