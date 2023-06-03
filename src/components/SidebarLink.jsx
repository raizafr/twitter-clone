const SidebarLink = (props) => {
  return (
    <div className="text-white flex lg:space-x-4 text-xl hover:bg-zinc-900 w-fit px-3 py-2.5 rounded-full">
      <div className="mt-1">{props.icon}</div>
      <div className="sm:hidden lg:block">{props.title}</div>
    </div>
  );
};

export default SidebarLink;
