import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import { db } from "../firebase";

const Cards = ({ user, search }) => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await db
        .collection("courses")
        .get()
        .then((snapshot) => {
          let list = [];
          snapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setData(list);
        });
    }
    fetchData();
  }, [refresh]);

  const getData = async (d) => {
    await db.collection("courses").add(d);
    setRefresh(!refresh);
  };

  return (
    <div className="cards-parent ">
      <div className="cards-div row">
        {data
          .filter((c) =>
            c.courseName.toLowerCase().includes(search.toLowerCase())
          )
          .map((c, idx) => (
            <CourseCard key={idx} courseName={c.courseName} price={c.price} />
          ))}
        {user.uid === "EUBMVXYXhwgYcn0T7NrfBtyClVC3" && (
          <CourseCard getData={getData} />
        )}
      </div>
    </div>
  );
};

export default Cards;
