import { Input } from "@/components/ui/input";

import { BiSearch } from "react-icons/bi";
const LeftModal = () => {
  return (
    <div className="bg-gray-200 h-screen p-4 pt-6">
      <BiSearch className="relative top-7 left-3" />
      <Input type="text" placeholder="Search" className="indent-4" />
    </div>
  );
};

export default LeftModal;
