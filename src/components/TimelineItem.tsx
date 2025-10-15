interface PropsType {
  title: string;
  institution: string;
  description: string;
  credentialLink?: string;
}

const TimelineItem: React.FC<PropsType> = ({ title, institution, description, credentialLink }) => {
  return (
    <div className="group relative py-6 pl-8 sm:pl-32">
      <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-white/20 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-white/10 after:bg-accent-orange sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
        {credentialLink ? (
          <a
            href={credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="left-0 mb-3 inline-flex h-6 px-3 translate-y-0.5 items-center justify-center rounded-full animated-credential-btn text-xs font-semibold text-accent-orange uppercase hover:bg-accent-orange hover:text-white transition-colors sm:absolute sm:mb-0 "
          >
            <span className="relative z-10 left-0">View Badge</span>
          </a>
        ) : (
          <div className="left-0 mb-3 inline-flex h-6 px-3 translate-y-0.5 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-text-secondary uppercase sm:absolute sm:mb-0">
            No Link
          </div>
        )}
        <div className="flex flex-col">
          <div className="text-xl font-bold text-text-primary">{title}</div>
          <div className="text-sm font-medium text-accent-orange">{institution}</div>
        </div>
      </div>
      <div className="text-text-secondary">{description}</div>
    </div>
  );
};

export default TimelineItem;