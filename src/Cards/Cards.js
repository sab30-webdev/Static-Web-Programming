import { useState } from "react";
import courses from "./Course.json";
import CourseCard from "./CourseCard";

const Cards = ({ user, search }) => {
  console.log(user);
  const [data, setData] = useState(courses.courses);

  const getData = (d) => {
    setData([...data, d]);
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
