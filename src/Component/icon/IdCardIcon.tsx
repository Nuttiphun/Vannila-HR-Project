type IdCardIconProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const IdCardIcon = ({ className }: IdCardIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 7.40004H30C30 5.5615 28.5052 4.06671 26.6667 4.06671H3.33333C1.49479 4.06671 0 5.5615 0 7.40004ZM0 9.06671V24.0667C0 25.9053 1.49479 27.4 3.33333 27.4H26.6667C28.5052 27.4 30 25.9053 30 24.0667V9.06671H0ZM3.33333 23.5094C3.33333 21.973 4.57812 20.7334 6.10938 20.7334H12.224C13.7604 20.7334 15 21.9782 15 23.5094C15 23.8167 14.75 24.0667 14.4427 24.0667H3.89062C3.58333 24.0667 3.33333 23.8167 3.33333 23.5094ZM9.16667 12.4C10.0507 12.4 10.8986 12.7512 11.5237 13.3764C12.1488 14.0015 12.5 14.8493 12.5 15.7334C12.5 16.6174 12.1488 17.4653 11.5237 18.0904C10.8986 18.7155 10.0507 19.0667 9.16667 19.0667C8.28261 19.0667 7.43476 18.7155 6.80964 18.0904C6.18452 17.4653 5.83333 16.6174 5.83333 15.7334C5.83333 14.8493 6.18452 14.0015 6.80964 13.3764C7.43476 12.7512 8.28261 12.4 9.16667 12.4ZM18.3333 13.2334C18.3333 12.775 18.7083 12.4 19.1667 12.4H25.8333C26.2917 12.4 26.6667 12.775 26.6667 13.2334C26.6667 13.6917 26.2917 14.0667 25.8333 14.0667H19.1667C18.7083 14.0667 18.3333 13.6917 18.3333 13.2334ZM18.3333 16.5667C18.3333 16.1084 18.7083 15.7334 19.1667 15.7334H25.8333C26.2917 15.7334 26.6667 16.1084 26.6667 16.5667C26.6667 17.025 26.2917 17.4 25.8333 17.4H19.1667C18.7083 17.4 18.3333 17.025 18.3333 16.5667ZM18.3333 19.9C18.3333 19.4417 18.7083 19.0667 19.1667 19.0667H25.8333C26.2917 19.0667 26.6667 19.4417 26.6667 19.9C26.6667 20.3584 26.2917 20.7334 25.8333 20.7334H19.1667C18.7083 20.7334 18.3333 20.3584 18.3333 19.9Z" />
    </svg>
  );
};

export default IdCardIcon;
