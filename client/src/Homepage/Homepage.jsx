import axios from "axios";
import { useEffect, useState } from "react";
import TourCard from "../component/tourcard";

function Homepage() {
  const [keyword, setKeyword] = useState("");
  const [tourInfo, setTourInfo] = useState([]);

  const touristInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${keyword}`
      );
      setTourInfo(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    touristInfo();
  }, [keyword]);

  return (
    <div className="m-auto w-full items-center flex flex-col ">
      <div className=" flex flex-col items-center justify-center w-full mt-4">
        <h1 className="font-bold text-3xl text-cyan-500">เที่ยวไหนดี</h1>
        <div className="w-2/3 m-3 p-4 border-b-2 border-black">
          <h2>ค้นหาที่เที่ยว</h2>
          <input
            type="text"
            placeholder="หาที่เที่ยวเเล้วไปกัน ..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full text-center focus:outline-none"
          />
        </div>
      </div>

      <div className="contentCard m-3 flex flex-col w-full items-center p-2">
        {tourInfo.map((tour) => (
          <TourCard key={tour.eid} tour={tour} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
