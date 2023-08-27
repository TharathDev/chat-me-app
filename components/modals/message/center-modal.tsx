import ChatBodyHeader from "./body/chat-body-header";
import InputMessage from "./body/input-message";
import MessageBody from "./body/message-body";

const CenterModal = () => {
  return (
    <div className="bg-white h-screen flex flex-col">
      <ChatBodyHeader />
      <MessageBody />
      <InputMessage />
    </div>
  );
};

export default CenterModal;
