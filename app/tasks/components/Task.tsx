interface PropsTask {
  text: string;
  repeat?: boolean;
  date?: string;
}

export default function Task({ text, repeat, date }: PropsTask) {
  return (
    <div className="flex flex-row justify-center gap-3 items-center bg-slate-600 rounded-2xl w-full h-full px-3 py-4 mt-2">
      <input type="radio" className="w-5 h-5"></input>
      <div className="w-full">
        <p>{text}</p>
      </div>
    </div>
  );
}
// w-4 h-4 text-green-600 focus:ring-green-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600
