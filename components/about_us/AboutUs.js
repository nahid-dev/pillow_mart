import React, { useEffect, useRef, useState } from "react";
import Container from "../container/Container";
import Image from "next/image";
import { IoMdPlay } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const openYouTubeVideo = (url) => {
  window.open(url, "YouTube Video", "width=800, height=600, resizable=yes");
};

const AboutUs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const aTag = document.getElementById("youTubeLink");
    if (aTag) {
      aTag.addEventListener("click", (e) => {
        e.preventDefault();
        setModalOpen(true);
      });
    }

    // Add event listener to close modal on click outside
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    // Close the modal if the click is outside the modal content
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div className="pt-[200px]">
      <Container>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-2"></div>
          <div className="col-span-8">
            <div>
              <p className="t_t_c text-xl">Our Mission</p>
              <h5 className="text-2xl text-[#4B3049] mt-5">
                Donec imperdiet congue orci consequat mattis. Donec rutrum
                porttitor sollicitudin. Pellentesque id dolor tempor sapien
                feugiat ultrices nec sed neque.
              </h5>
            </div>
            <div className="border relative">
              <Image
                className="w-full"
                src="/images/about_images/about_us_video.png.webp"
                width={750}
                height={447.45}
                priority
                alt="About page image"
              ></Image>
              <a
                id="youTubeLink"
                className=" w-20 bg-[#795376] flex items-center justify-center h-20 text-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                href="https://www.youtube.com/embed/DWHB6nTyKDI"
              >
                <IoMdPlay className="" size={32} />
              </a>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </Container>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-white max-w-screen-md relative">
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/DWHB6nTyKDI"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded absolute -top-12 right-0"
              onClick={closeModal}
            >
              <IoMdClose size={22} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
