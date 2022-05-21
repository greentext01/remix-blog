import { Link } from "@remix-run/react";

type Props = {
  text: string;
  to: string;
};

export default function ButtonLink({ text, to }: Props) {
  return (
    <Link to={to}>
      <div className="flex w-32 rounded-lg bg-blue-500 p-2 hover:bg-blue-600">
        <div className="mx-auto text-lg text-white">{text}</div>
      </div>
    </Link>
  );
}
