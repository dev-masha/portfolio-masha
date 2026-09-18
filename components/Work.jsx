const Work = () => {
  const projects = [
    {
      title: "Card Project",
      category: "Web Design - HTML",
      bg: "bg-[#E9D5FF]",
      link: "https://github.com/dev-masha/card-project",
    },
    {
      title: "Mars News",
      category: "News Website - HTML",
      bg: "bg-[#FEF3C7]",
      link: "https://github.com/dev-masha/mars-news",
    },
    {
      title: "Watch Product Card",
      category: "UI Design - HTML",
      bg: "bg-[#CCFBF1]",
      link: "https://github.com/dev-masha/watch-product-card",
    },
    {
      title: "Portfolio Masha",
      category: "Next.js Portfolio",
      bg: "bg-[#DBEAFE]",
      link: "https://github.com/dev-masha/portfolio-masha",
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-20">
      <h4 className="text-center text-sm">My portfolio</h4>
      <h2 className="text-center text-4xl font-bold">My latest work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className={`${project.bg} aspect-square rounded-lg p-5 flex flex-col justify-end cursor-pointer hover:scale-105 duration-300`}
          >
            <h3 className="font-semibold text-[15px]">{project.title}</h3>
            <p className="text-xs text-gray-600 mt-1">{project.category}</p>
            <p className="text-[11px] mt-2 underline">View on GitHub →</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;