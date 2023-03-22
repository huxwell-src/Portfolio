import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ title, children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
            <div className="relative bg-white w-full max-w-md mx-auto rounded-lg shadow-lg">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button onClick={handleClose}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-3xl text-sky-600 hover:scale-125 active:scale-95 transition-all duration-200 "
                  />
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-3xl text-sky-600 f font-bold mb-4 ">
                  {title}
                </h2>
                <p>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
