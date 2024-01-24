import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export type ProblemsListCardProps = {
  imageUrl?: string;
  listTitle?: string;
  listDescription?: string;
  redirectUrl?: string;
};

function ProblemsListCard({
  imageUrl,
  listDescription,
  listTitle,
  redirectUrl,
}: ProblemsListCardProps) {
  return (
      <Link href={redirectUrl ? redirectUrl : "/problemset"}>
        <div className="bg-lightGray flex justify-between p-4 gap-4 rounded-xl w-min min-w-0">
          <div className="aspect-square min-w-16 h-full items-center self-center">
            <Image
              alt="list logo"
              src={imageUrl ? imageUrl : "/vercel.svg"}
              height={40}
              width={40}
              className="w-16 h-full aspect-square bg-white p-2 rounded"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="text-lg font-semibold text-white/95 text-wrap w-full text-ellipsis">
              {listTitle || "Top Interview Question"}
            </h3>
            <p className=" font-medium text-white/70 truncate">
              {listDescription || "Must do-list when the Interview is close"}
            </p>
          </div>
        </div>
      </Link>
  );
}

export default ProblemsListCard;
