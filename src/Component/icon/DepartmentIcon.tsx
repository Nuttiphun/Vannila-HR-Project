type DepartmentIconProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const DepartmentIcon = ({ className }: DepartmentIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 4.80005C1.34375 4.80005 0 6.1438 0 7.80005V33.8C0 35.4563 1.34375 36.8 3 36.8H9V31.8C9 30.1438 10.3438 28.8 12 28.8C13.6562 28.8 15 30.1438 15 31.8V36.8H20.6187C20.225 36.1625 20 35.4125 20 34.6063C20 31.675 21.6125 29.1188 24 27.7813V21.7875V7.80005C24 6.1438 22.6562 4.80005 21 4.80005H3ZM4 19.8C4 19.25 4.45 18.8 5 18.8H7C7.55 18.8 8 19.25 8 19.8V21.8C8 22.35 7.55 22.8 7 22.8H5C4.45 22.8 4 22.35 4 21.8V19.8ZM11 18.8H13C13.55 18.8 14 19.25 14 19.8V21.8C14 22.35 13.55 22.8 13 22.8H11C10.45 22.8 10 22.35 10 21.8V19.8C10 19.25 10.45 18.8 11 18.8ZM16 19.8C16 19.25 16.45 18.8 17 18.8H19C19.55 18.8 20 19.25 20 19.8V21.8C20 22.35 19.55 22.8 19 22.8H17C16.45 22.8 16 22.35 16 21.8V19.8ZM5 10.8H7C7.55 10.8 8 11.25 8 11.8V13.8C8 14.35 7.55 14.8 7 14.8H5C4.45 14.8 4 14.35 4 13.8V11.8C4 11.25 4.45 10.8 5 10.8ZM10 11.8C10 11.25 10.45 10.8 11 10.8H13C13.55 10.8 14 11.25 14 11.8V13.8C14 14.35 13.55 14.8 13 14.8H11C10.45 14.8 10 14.35 10 13.8V11.8ZM17 10.8H19C19.55 10.8 20 11.25 20 11.8V13.8C20 14.35 19.55 14.8 19 14.8H17C16.45 14.8 16 14.35 16 13.8V11.8C16 11.25 16.45 10.8 17 10.8ZM36 21.8C36 20.474 35.4732 19.2022 34.5355 18.2645C33.5979 17.3268 32.3261 16.8 31 16.8C29.6739 16.8 28.4021 17.3268 27.4645 18.2645C26.5268 19.2022 26 20.474 26 21.8C26 23.1261 26.5268 24.3979 27.4645 25.3356C28.4021 26.2733 29.6739 26.8 31 26.8C32.3261 26.8 33.5979 26.2733 34.5355 25.3356C35.4732 24.3979 36 23.1261 36 21.8ZM22 34.6188C22 35.825 22.975 36.8 24.1812 36.8H37.8187C39.025 36.8 40 35.825 40 34.6188C40 31.4063 37.3938 28.8 34.1813 28.8H27.8188C24.6063 28.8 22 31.4063 22 34.6188Z" />
    </svg>
  );
};

export default DepartmentIcon;
