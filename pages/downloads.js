import supabase from "../utils/supabase";
import { useEffect, useState } from "react";

const Downloads = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getFiles = async () => {
      const { data } = await supabase.storage.from("my-bucket").list("public");
      setFiles(data);
    };

    getFiles();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {files.map((file) => (
        <p key={file.id} className="p-2">
          <a href={`/downloads/${file.name}`} download={file.name}>
            {file.name}
          </a>
        </p>
      ))}
    </div>
  );
};

export default Downloads;
