type TableListIconProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const TableListIcon = ({ className }: TableListIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 5.625C0 3.55664 1.68164 1.875 3.75 1.875H26.25C28.3184 1.875 30 3.55664 30 5.625V24.375C30 26.4434 28.3184 28.125 26.25 28.125H3.75C1.68164 28.125 0 26.4434 0 24.375V5.625ZM3.75 5.625V9.375H7.5V5.625H3.75ZM26.25 5.625H11.25V9.375H26.25V5.625ZM3.75 13.125V16.875H7.5V13.125H3.75ZM26.25 13.125H11.25V16.875H26.25V13.125ZM3.75 20.625V24.375H7.5V20.625H3.75ZM26.25 20.625H11.25V24.375H26.25V20.625Z" />
    </svg>
  );
};

export default TableListIcon;
