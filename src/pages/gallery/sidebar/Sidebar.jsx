import ToggleButton from "../../../components/ToggleButton";

const Sidebar = () => {
  return (
    <aside className="p-2">
      <div className="w-full h-full border rounded flex flex-col">
        <div className="flex-1 p-2">
          <div className="flex justify-end gap-2">
            <span>Autoplay</span>
            <ToggleButton />
          </div>
        </div>
        <div>
          <button className="bg-gray-700 text-white w-full p-1">
            Back
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
