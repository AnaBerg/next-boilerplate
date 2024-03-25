import { AlertIcon, ErrorIcon, SuccessIcon, XIcon } from './components';

interface ToastProps {
  text: string;
  handleClose: () => void;
  type?: 'alert' | 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({ text, handleClose, type = 'alert' }) => {
  const handleIcon = () => {
    switch (type) {
      case 'success':
        return <SuccessIcon />;
      case 'error':
        return <ErrorIcon />;
      case 'alert':
      default:
        return <AlertIcon />;
    }
  };
  return (
    <div
      className="absolute bottom-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
      role="alert"
    >
      {handleIcon()}
      <div className="ms-3 text-sm font-normal">{text}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        onClick={() => handleClose()}
      >
        <XIcon />
      </button>
    </div>
  );
};

export default Toast;
