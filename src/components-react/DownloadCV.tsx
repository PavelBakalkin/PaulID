export const DownloadCV = (props: any) => {
  const onButtonClick = () => {
    fetch("PaulBakalkin.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "PaulBakalkin.pdf";
        alink.click();
      });
    });
  };

  return (
    <button
      className="ease-out duration-500 shadow-btn-shadow animate-pulse-btn h-10 bg-white text-blue-800 text-lg font-medium rounded-lg m-0 my-3 hover:text-xl lg:mx-3 lg:w-32"
      onClick={onButtonClick}
    >
      Get CV
    </button>
  );
};
