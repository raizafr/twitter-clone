const SidebarLink = (props) => {
  return (
    <div className="text-white flex space-x-4 text-xl hover:bg-zinc-900 w-fit px-2.5 py-2.5 rounded-full">
      <div className="mt-0.5">{props.icon}</div>
      <div className="sm:hidden lg:block">{props.title}</div>
    </div>
  );
};

export default SidebarLink;
