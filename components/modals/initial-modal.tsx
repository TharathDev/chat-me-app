"use client";

import CenterModal from "./message/center-modal";
import LeftModal from "./message/left-modal";
import MenuModal from "./menu-modal";

const InitialModal = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-start-2 col-span-2">
        <LeftModal />
      </div>
      <div className="col-end-8 col-span-4">
        <CenterModal />
      </div>
    </div>
  );
};

export default InitialModal;
