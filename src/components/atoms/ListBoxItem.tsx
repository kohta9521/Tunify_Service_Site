import Link from "next/link";

// types
export type ListBoxItemProps = {
  id: number;
  link: string;
  text: string;
  size?: "small" | "medium" | "large";
};

const ListBoxItem = ({ id, link, text, size = "medium" }: ListBoxItemProps) => {
  return (
    <Link key={id} href={link} className="">
      <p className="">{text}</p>
    </Link>
  );
};

export default ListBoxItem;
