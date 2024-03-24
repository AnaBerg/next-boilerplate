import { LoadingSpinner } from '..';

export interface ButtonProps extends React.PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  loading?: boolean;
  dataTestId?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  dataTestId = '',
}) => {
  return (
    <button
      data-testid={dataTestId}
      className="bg-blue-500 py-2.5 px-5 rounded font-bold text-gray-200 hover:bg-blue-400 hover:text-white disabled:bg-gray-300 disabled:text-gray-100 ease-in-out transition-colors"
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default Button;
