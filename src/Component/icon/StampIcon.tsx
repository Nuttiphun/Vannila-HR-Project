type StampIconProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const StampIcon = ({ className }: StampIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.375 15.7656C24.375 14.4062 25.0938 13.1719 25.9297 12.0938C26.9141 10.8203 27.5 9.22656 27.5 7.5C27.5 3.35938 24.1406 0 20 0C15.8594 0 12.5 3.35938 12.5 7.5C12.5 9.22656 13.0859 10.8203 14.0703 12.0938C14.9062 13.1719 15.625 14.4062 15.625 15.7656C15.625 18.1016 13.7266 20 11.3906 20H8.75C3.91406 20 0 23.9141 0 28.75C0 30.3828 1.04688 31.7734 2.5 32.2891V36.25C2.5 38.3203 4.17969 40 6.25 40H33.75C35.8203 40 37.5 38.3203 37.5 36.25V32.2891C38.9531 31.7734 40 30.3828 40 28.75C40 23.9141 36.0859 20 31.25 20H28.6094C26.2734 20 24.375 18.1016 24.375 15.7656ZM32.5 32.5V35H7.5V32.5H32.5Z" />
    </svg>
  );
};

export default StampIcon;
