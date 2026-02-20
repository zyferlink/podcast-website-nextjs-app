interface HeaderTitleProps {
  badgeText: string;
  badgeIcon?: string;
  title: string;
  className?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  badgeText,
  badgeIcon = "bi bi-rocket-takeoff",
  title,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div>
        <h2 className="inline-block px-6 py-2 rounded-full text-primary text-2xl font-normal border-[1.5px] border-primary">
          {badgeIcon && <i className={`${badgeIcon} pe-4`}></i>}
          {badgeText}
        </h2>
      </div>
      <h1 className="text-[2.3rem] md:text-[3rem] text-white font-semibold mt-4">
        {title}
      </h1>
    </div>
  );
};

export default HeaderTitle;
