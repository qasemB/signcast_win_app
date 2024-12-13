import WindowActionBtn from "./WindowActionBtn";

const Header = () => {
  const handleMinimize = () => {
    window.electronAPI.minimize();
  };

  const handleClose = () => {
    window.electronAPI.close();
  };
  return (
    <header className="h-14 bg-gray-200 flex items-center px-4 justify-between">
      <img src="/logo.jpg" className="h-full" />
      <div className="flex gap-2">
        <WindowActionBtn onClick={handleMinimize} content="__" />
        <WindowActionBtn onClick={handleClose} content="X" />
      </div>
    </header>
  );
};

export default Header;
