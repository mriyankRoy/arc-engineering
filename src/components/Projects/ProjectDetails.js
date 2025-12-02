import { useParams } from "react-router";
import { projects } from "../../utils/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-10 text-center text-gray-600">Project not found.</div>
    );
  }

  return (
    <div className="mt-50 max-w-5xl mx-auto px-6 py-16">
      {/* FIXED: Gradient blob div closed properly */}
      <div className="absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"></div>
      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

      <img
        src={project.imageUrls[0]}
        alt={project.name}
        className="rounded-3xl w-full mb-10 shadow-lg"
      />

      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {project.description}
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Issue</h2>
          <p className="text-gray-600 mt-2">{project.issue}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-600 mt-2">{project.solvingMeasure}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p className="text-gray-600 mt-2">{project.conclusion}</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {project.imageUrls.map((img, idx) => (
          <img key={idx} src={img} alt="" className="rounded-2xl shadow-md" />
        ))}
      </div>
    </div>
  );
}
