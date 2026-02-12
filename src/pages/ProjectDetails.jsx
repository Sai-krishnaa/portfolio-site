import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4 capitalize">{id} Project</h1>

      <p className="text-gray-400 mb-10">
        Here goes full case study, images, tech stack, architecture, etc.
      </p>

      <button
        onClick={() => navigate("/works")}
        className="px-6 py-3 bg-white text-black rounded-full"
      >
        Back
      </button>
    </div>
  );
}
