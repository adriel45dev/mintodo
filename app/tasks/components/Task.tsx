import Tooltip from "@/app/components/Tooltip";
import DeleteIcon from "@/public/icons/DeleteIcon";

interface PropsTask {
  id: number;
  text: string;
  repeat?: boolean;
  date?: string;
  done?: boolean;
  onDelete: (id: number) => void;
  onTaskStatus: (id: number) => void;
}

export default function Task({
  id,
  text,
  repeat,
  date,
  done = false,
  onDelete,
  onTaskStatus,
}: PropsTask) {
  return (
    <div
      className={`${
        done && "opacity-40"
      } flex flex-row justify-center gap-3 items-center bg-slate-600 rounded-2xl w-full h-full px-3 py-4 mt-2`}
    >
      <div className="flex items-center mr-4">
        <input
          id="green-checkbox"
          onChange={() => onTaskStatus(id)}
          type="checkbox"
          value=""
          checked={done}
          className=" w-6 h-6 rounded-full text-green-600  focus:ring-green-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
        />
      </div>

      <div className="w-full">
        <p className={`${done && "line-through"}`}>{text}</p>
      </div>

      <span className="text-sm ">Today</span>

      <Tooltip message="Delete">
        <DeleteIcon
          className="text-white w-6 h-6 hover:text-green-300 hover:scale-90 cursor-pointer"
          onClick={() => onDelete(id)}
          alt="delete"
        />
      </Tooltip>
    </div>
  );
}
