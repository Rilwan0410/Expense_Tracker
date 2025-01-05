import React from "react";
import { useState } from "react";

const ExpandableText = ({ children }) => {
  const [collapse, setCollapse] = useState(true);
//   let text = "Hi World"

  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident ullam eius impedit iusto exercitationem perspiciatis error ea. Tenetur minus quae perspiciatis natus, eius necessitatibus vel, doloremque similique, voluptates praesentium repudiandae at non voluptatum esse tempore eligendi? Ipsam eos soluta in alias velit illo, assumenda nam possimus ullam reprehenderit maiores. Cum asperiores perferendis velit magni modi, cupiditate temporibus sint libero quia, tempora perspiciatis est officiis labore deserunt vel nihil quas provident eum incidunt! Facere accusamus fugiat molestiae officia praesentium debitis quod natus cupiditate, voluptatem dolor pariatur dignissimos cum, laboriosam odit eveniet ullam perferendis molestias voluptates est laborum doloribus eius quo.";
  return (
    <div className='ml-[10px]'>
      <p className="inline ">
        {(collapse && text.length > 10) ? `${text.slice(0, 10)}...` : text}
      </p>

      {text.length > 10 ? (
        <button
          type="button"
          className="btn btn-primary ml-[5px]"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? "Expand" : "Collapse"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ExpandableText;
