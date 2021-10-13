import supabase from "../../utils/supabase";

const DownloadFile = () => {
  return <p>Downloading...</p>;
};

export const getServerSideProps = async ({ params: { name }, res }) => {
  const { data } = await supabase.storage
    .from("my-bucket")
    .download(`public/${name}`);

  const arrayBuffer = await data.arrayBuffer();

  res.setHeader("Content-Type", data.type);
  res.send(Buffer.from(arrayBuffer));

  return {
    props: {},
  };
};

export default DownloadFile;
