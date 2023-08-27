import React from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  // AccordionItemState
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion";

const Value = () => {
  return (
    <div className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./image/asset 9.png" alt="value" />
          </div>
        </div>
        {/* right Side */}
        <div className=" flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value you give to you</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              //  const [className, setClassName] = useState(null);

              return (
                // <AccordionItem className={`AccordionItem ${className} `} key={i} uuid={i}>
                 <AccordionItem className="AccordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      {/* <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState> */}

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText"> {item.detail} </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Value;
