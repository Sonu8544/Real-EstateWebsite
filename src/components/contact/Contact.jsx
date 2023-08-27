import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left section */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We{" "}
            <br />
            beleive a good blace to live can make your life better
          </span>

          {/* Contact  */}
          <div className="flexColStart contactModes">
            {/* first Row -1*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call </span>
                    <span className="secondaryText">+91 854 409 8398</span>
                  </div>
                </div>
                <flexCenter className="button">Call Now</flexCenter>
              </div>

              {/* Second mode chat -2 */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call </span>
                    <span className="secondaryText">+91 854 409 8398</span>
                  </div>
                </div>
                <flexCenter className="button">Video Call Now</flexCenter>
              </div>
            </div>

            {/* Second Row   Third item -3 */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat </span>
                    <span className="secondaryText">sksonu8544@gmail.com</span>
                  </div>
                </div>
                <flexCenter className="button">Chat Now</flexCenter>
              </div>

              {/* Second mode chat  - 4*/}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message </span>
                    <span className="secondaryText">+91 854 409 8398</span>
                  </div>
                </div>
                <flexCenter className="button">Message Now</flexCenter>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./image/asset 10.jpeg" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
