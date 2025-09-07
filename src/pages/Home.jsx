import Bannar from "../component/Bannar";
import Feature from "../component/Feature";
import Process from "../component/Process";
import Seo from "../component/Seo";
import Work from "../component/Work";
import Table from "../component/Table";
import Free from "../component/Free";

const Home = () => {
  return (
    <>
      <Bannar />
      <Seo />
      <Feature />
      <Process />
      <Work />
      <Table />
      <Free />
    </>
  );
};

export default Home;
