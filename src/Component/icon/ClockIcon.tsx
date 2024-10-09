type ClockIconProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const ClockIcon = ({ className }: ClockIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM13.5938 7.03125V15C13.5938 15.4688 13.8281 15.9082 14.2207 16.1719L19.8457 19.9219C20.4902 20.3555 21.3633 20.1797 21.7969 19.5293C22.2305 18.8789 22.0547 18.0117 21.4043 17.5781L16.4062 14.25V7.03125C16.4062 6.25195 15.7793 5.625 15 5.625C14.2207 5.625 13.5938 6.25195 13.5938 7.03125Z" />
    </svg>
  );
};

export default ClockIcon;
