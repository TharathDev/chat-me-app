const MessageBox = () => {
  return (
    <div className="h-screen pt-4 bg-gray-100">
  <div className="mx-auto grid max-w-screen-md grid-cols-1 space-y-10">
    <div className="place-self-start">
      <div className="rounded-2xl rounded-tl-none bg-white p-5">Hey there, how are you?</div>
    </div>
    <div className="place-self-start">
      <div className="rounded-2xl rounded-tl-none bg-white p-5">Wanted to know if you are interested going for Mountain Tracking 🗻</div>
    </div>
    <div className="place-self-end">
      <div className="rounded-2xl rounded-tl-none bg-green-50 p-5">Oh amazing! I will join you.</div>
    </div>
    <div className="place-self-end">
      <div className="rounded-2xl rounded-tl-none bg-green-50 p-5">When are we going?</div>
    </div>
    <div className="place-self-start">
      <div className="rounded-2xl rounded-tl-none bg-white p-5">Mostly this week, I will let you know the dates.</div>
    </div>
    <div className="place-self-end">
      <div className="rounded-2xl rounded-tl-none bg-green-50 p-5">Okay! See you then.</div>
    </div>
  </div>
</div>
  );
};

export default MessageBox;
