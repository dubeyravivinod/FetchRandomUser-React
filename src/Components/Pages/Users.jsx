import classes from "./Pages.module.css";
import { useState } from "react";
import FetchAPI from "../Users/FetchAPI";

const Users = (props) => {
  const [options, setoptions] = useState("all");
  
  console.log(options);

  return (
    <div className={classes.Users}>
      <h1>User Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque
        velit, minus aliquid quos ab, suscipit tempore id placeat autem sit quam
        sunt ipsa quidem necessitatibus voluptatem, architecto alias magnam?
        Deleniti, fugiat in! Veritatis iusto enim laborum error a nostrum,
        impedit nobis cumque sint et vitae nihil iure harum itaque consequuntur,
        quae cupiditate laboriosam modi consequatur? Deleniti eaque quam optio
        ratione animi doloribus laboriosam mollitia soluta ea. Non corporis,
        adipisci odio laboriosam laudantium odit dolorem rerum consectetur nemo
        culpa magni doloribus veritatis explicabo facilis nulla debitis itaque
        porro? Deleniti officia molestiae magnam? Laudantium, ad. Temporibus,
        dolorum. Labore consequatur perferendis sequi eaque nihil aspernatur
        fugit facilis. Ut iusto provident debitis tempore perferendis molestias
        fugit consequatur doloribus dicta unde a, vitae cupiditate voluptatibus
        quos ipsam perspiciatis necessitatibus? Non quis sint fugiat repellat
        velit, sed inventore nam omnis ipsa sit voluptatem sequi odit. Qui,
        illum repellat. Mollitia quas rem explicabo ad, quod facilis.
      </p>
      <div className="Options">
        <input type="radio" id="all" name="fav_language" value="All" onClick={(e) => setoptions("all")} />
        <label htmlFor="All">All</label>
        <input type="radio" id="male" name="fav_language" value="Male" onClick={(e) => setoptions("male")} />
        <label htmlFor="Male">Male</label>
        <input type="radio" id="female" name="fav_language" value="Female" onClick={(e) => setoptions("female")} />
        <label htmlFor="Female">Female</label>
      </div>
      <FetchAPI opt={options} />
    </div>
  );
};

export default Users;
