export default function Header() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight   text-white">
        My{" "}
        <mark className="px-2 text-white  rounded bg-green-500 hover:bg-violet-600">
          tasks
        </mark>
      </h1>
    </div>
  );
}
