import supabase from "../utils/supabase";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [downloadUrl, setDownloadUrl] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const user = supabase.auth.user();

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    setIsUploading(true);
    await supabase.storage
      .from("my-bucket")
      .upload(`public/${file.name}`, file, { upsert: true });
    setIsUploading(false);
    setDownloadUrl(`${window.location.origin}/downloads/${file.name}`);
  };

  return user ? (
    <div>
      {!isUploading && !downloadUrl && (
        <input type="file" id="upload" onInput={handleUpload} />
      )}
      {isUploading && <p className="mt-2">Uploading file...</p>}
      {downloadUrl && <p className="mt-2">{downloadUrl}</p>}
    </div>
  ) : (
    <p className="flex flex-col items-center">
      You need an account to upload files.
      <Link href="/login">
        <a>Login</a>
      </Link>
    </p>
  );
};

export default Home;
