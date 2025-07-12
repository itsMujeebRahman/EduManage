import { File, Plus, Trash } from "lucide-react";
import React, { ChangeEvent, useRef, useState } from "react";
import { doc } from "./Types/Types";

interface props {
  isEdit: boolean;
}

const Reset: doc = {
  DocId: "",
  type: "",
};

const Documents = ({ isEdit }: props) => {
  const trigger = useRef<HTMLInputElement>(null);
  const [document, setDocument] = useState<doc>(Reset);
  const [documentList, setDocumentList] = useState<doc[]>([]);

  const handleTriggerUpload = () => {
    trigger.current?.click();
  };

  const handleFetchDocuments = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;

    if (type === "file" && files?.[0]) {
      const DocId = URL.createObjectURL(files[0]);
      setDocument((prev) => ({
        ...prev,
        DocId,
      }));
    } else {
      setDocument((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDocumentList = () => {
    setDocumentList((Prev) => [...Prev, document]);
    setDocument(Reset);
  };

  const handleDeleteDocument = (DocId: string) => {
    setDocumentList((Prev) => Prev.filter((m) => m?.DocId !== DocId));
  };
  return (
    <div
      className=" w-full flex flex-col md:gap-[1vw] gap-[5vw] 
      md:p-[1vw] p-[3vw] bg-white rounded-xl drop-shadow-sm  "
    >
      <div className="flex items-center md:gap-[0.4vw] gap-[1.5vw] ">
        <File className="md:w-[1.3vw] w-[5vw]" />
        <p className="md:text-[1.3vw] text-l font-bold px-[0.5vw]">Documents</p>
      </div>
      {documentList.length > 0 ? (
        <div className="flex flex-col md:gap-[0.5vw] gap-[1vw]">
          {documentList?.map((M, index) => (
            <div
              className="flex items-center justify-between gap-[0.5vw] md:p-[1vw] p-[1.3vw]
              rounded-xl border border-gray-300 bg-white"
              key={index}
            >
              <div className="flex items-center justify-start gap-[1vw]">
                <img
                  src={M.DocId}
                  className="border md:h-[10vh] md:w-[4vw] h-[15vh] w-[31vw] object-cover rounded-l "
                />
                <p>{M.type}</p>
              </div>
              {isEdit ? (
                <Trash
                  className="md:h-[1.5vw] md:w-[1.5vw] h-[3vh] w-[5vw] text-red-300"
                  onClick={() => handleDeleteDocument(M.DocId)}
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="p-[0.5vw]">
          <p className="text-gray-400 md:text-[1vw] ">No Documents</p>
        </div>
      )}
      <div className="flex items-center gap-[2vw] md:gap-[0.5vw] md:flex-row flex-col ">
        <div className="flex items-center w-full gap-[2vw] md:gap-[0.5vw]">
          <div
            className="md:p-[0.7vw] p-[2.2vw] rounded-xl border border-gray-300 md:w-[4vw] w-[15vw] 
           md:text-[1vw] bg-white focus:outline-gray-400 flex justify-center"
            onClick={handleTriggerUpload}
          >
            <Plus className="md:h-[2.5vh] h-[3vh] w-[6vw] md:w-[1vw]" />
            <input
              type="file"
              name="DocId"
              ref={trigger}
              className="hidden"
              onChange={handleFetchDocuments}
            />
          </div>
          <input
            className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full md:flex-grow
          focus:outline-gray-400 bg-white"
            name="type"
            value={document.type}
            onChange={handleFetchDocuments}
            placeholder="Enter Document Name"
          />
        </div>

        <button
          className="border md:p-[0.6vw] p-[2.2vw] w-full md:w-[6vw] rounded-xl border-gray-300 
        hover:text-white hover:bg-black/80 md:text-[1vw] bg-white"
          onClick={handleDocumentList}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Documents;
