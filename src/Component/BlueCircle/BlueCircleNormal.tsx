const BlueCircleNormal = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="grid sm:grid-rows-2 grid-flow-col mt-10 justify-items-center items-center">
      <div className="flex justify-center items-center w-[92px] h-[92px] rounded-full bg-Bubblegum">
        {icon}
      </div>

      <div className="text-P font-semibold text-Black-Panther text-center whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
};

export default BlueCircleNormal;
