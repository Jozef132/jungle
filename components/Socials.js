import { Icon } from "@iconify/react";
import Link from "next/link";

const Socials = () => {
  return (
    <>
      <div className="gap-4 text-[24px] flex flex-col absolute bottom-[32px]">
        <Link href="https://example.com/" className="go">
          <Icon icon="ic:baseline-facebook" />
        </Link>
        <Link href="https://example.com/" className="go">
          <Icon icon="mdi:twitter" />
        </Link>
        <Link href="https://example.com/" className="go">
          <Icon icon="mdi:instagram" />
        </Link>
      </div>
    </>
  );
};

export default Socials;
