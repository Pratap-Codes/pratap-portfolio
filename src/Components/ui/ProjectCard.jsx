const ProjectCard = ({
  title,
  tagline,
  imageUrl,
  techStack = [],
  onReadMore,
}) => {
  return (
    <div
      className="group rounded-xl border border-black/50 overflow-hidden
                 bg-linear-to-b from-white to-neutral-50 
                 dark:from-zinc-900 dark:to-black
                 dark:border-zinc-800/60
                 hover:border-indigo-300 dark:hover:border-indigo-500/30
                 shadow-sm hover:shadow-md dark:shadow-none
                 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="p-3">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg w-full h-50 object-cover"
        />
      </div>

      <div className="px-5 py-2 pb-5 text-left">
        <h3 className="text-sm md:text-xl font-bold text-neutral-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm md:text-lg text-neutral-500 dark:text-zinc-400 leading-relaxed mb-3">
          {tagline}
        </p>

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-zinc-800 
                    text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
          <button
            onClick={onReadMore}
            className="text-sm text-black hover:text-black/80 dark:text-white  dark:hover:text-indigo-300 font-medium cursor-pointer"
          >
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
