export default function TitleSec({ title, className = "" }) {
  
  return (
    <h2 className={` text-center text-[#2D7A45] ${className} `}>
      {title}
    </h2>
  );
}