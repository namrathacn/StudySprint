import { FiInbox } from "react-icons/fi";

function EmptyState({
  title = "Nothing here yet",
  description = "Start by adding your first item.",
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-dashed
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-10
      text-center
      "
    >
      <FiInbox
        className="
        mx-auto
        text-6xl
        text-emerald-400
        "
      />

      <h3 className="text-2xl font-bold mt-6">
        {title}
      </h3>

      <p className="text-slate-400 mt-3">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;