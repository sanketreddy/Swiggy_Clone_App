const Contact = () => {
  return (
    <div className="flex flex-col items-center m-20">
      <h1 className="font-bold text-3xl">Contact Us</h1>
      <form className="mt-10 flex flex-col items-center">
        <input
          type="text"
          className="border border-black p-2 m-2 w-full max-w-sm"
          placeholder="Name"
        />
        <textarea
          className="border border-black p-2 m-2 w-full max-w-sm"
          placeholder="Message"
        />
        <button
          type="submit"
          className="border border-black p-2 m-2 bg-gray-100 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
