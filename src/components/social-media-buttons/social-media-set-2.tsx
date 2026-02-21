interface SocialMediaSet2Props {
  mainProps?: string;
}

const SocialMediaSet2: React.FC<SocialMediaSet2Props> = ({
  mainProps = "",
}) => {
  return (
    <div className={`flex items-center gap-2 ${mainProps}`}>
      <i
        className="bi bi-instagram w-10 h-10 text-primary rounded-full flex items-center 
        justify-center border border-primary hover:bg-primary hover:text-black text-xl 
        transition-all duration-300 cursor-pointer"
      />
      <i
        className="bi bi-github w-10 h-10 text-primary rounded-full flex items-center 
        justify-center border border-primary hover:bg-primary hover:text-black text-xl 
        transition-all duration-300 cursor-pointer"
      />
      <i
        className="bi bi-twitter w-10 h-10 text-primary rounded-full flex items-center 
        justify-center border border-primary hover:bg-primary hover:text-black text-xl 
        transition-all duration-300 cursor-pointer"
      />
      <i
        className="ri-youtube-line w-10 h-10 text-primary rounded-full flex items-center 
        justify-center border border-primary hover:bg-primary hover:text-black text-xl 
        transition-all duration-300 cursor-pointer"
      />
      <i
        className="bi bi-threads w-10 h-10 text-primary rounded-full flex items-center 
        justify-center border border-primary hover:bg-primary hover:text-black text-xl 
        transition-all duration-300 cursor-pointer"
      />
    </div>
  );
};

export default SocialMediaSet2;
