import Image from "next/image";

const ChatChannelsModal = () => {
  return (
    <div className="flex flex-row h-24 p-4 hover:bg-gray-300">
      <div>
        <Image
          src="/animoji-avatars/Number=1.png"
          width={64}
          height={64}
          style={{ borderRadius: "50%" }}
          className="mx-3"
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col w-10/12 justify-between my-1 px-1">
        <div className="flex justify-between">
          <p>name</p>
          <p>2022-22-22</p>
        </div>
        <div>
          <p>message body</p>
        </div>
      </div>
    </div>
  );
};

export default ChatChannelsModal;
