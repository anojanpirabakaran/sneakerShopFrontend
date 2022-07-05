import { Box, Grid } from "@mui/material";
import React from "react";
import "./Aboutus.css";
import aboutImg from "../../images/unc.jpg";

/**
 * About us page with Timeline Graph
 */
const Aboutus = () => {
  return (
    <>
      <Grid container item xs={12}>
        <img className="aboutImg" src={aboutImg} alt="jordan 11" />
        <p className="first_title">Trust is everything</p>
        <p className="second_title">ABOUT</p>
      </Grid>
      <Box>
        <br /> <br />
        <div className="container">
          <div className="container">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="https://icons-for-free.com/iconfiles/png/512/desktop+monitor+pc+screen+web+icon-1320168141814699293.png"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">How it started</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Web development is something we went through at the
                      beginning of our education. With time we gained enough
                      experience to design our own website and publish it. As we
                      are interested in sneakers and fashion ourselves, this
                      website is a perfect example.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="https://cdn-icons-png.flaticon.com/512/641/641813.png"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Shopping is easy</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Our website is very user-friendly and simple. With our nav
                      bar you can navigate back and forth over the whole
                      website. Under store you can see our new arrivals and the
                      popular sneakers. We have made it a point to display the
                      most popular sneakers that are currently available and we
                      are sure that your favorite is among them.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="https://previews.123rf.com/images/imagevectors/imagevectors1601/imagevectors160100403/50599584-flat-green-credit-card-payment-icon-and-green-circle.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Payment</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Our payment is relatively versatile. We accept credit
                      cards, TWINT and PayPal. You can also pay by invoice.
                      However, with this method you have to pay 2 CHF more.
                    </p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="https://thumbs.dreamstime.com/b/data-privacy-icon-secure-file-creative-element-design-stock-market-icons-collection-pixel-perfect-commercial-print-media-171611342.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Your data is secure</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      We promise them that their data is safe with us. We have
                      secured everything and can guarantee that no data can be
                      deleted or stolen.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="https://www.vhv.rs/dpng/d/467-4678891_flat-delivery-icon-png-clipart-png-download-delivery.png"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Processing / Shipping</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      All our products are 100% authentic. We check each sneaker
                      and value that they are not damaged. If the shoe has a
                      defect, you will see it in the description. The shipping
                      is very reliable. We ship all over the world and make sure
                      that all products arrive undamaged to our customers.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Circle-icons-contacts.svg/2048px-Circle-icons-contacts.svg.png"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Contact</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      The contact is very simple. You can always reach us by
                      email or by using our contact form. If you have not
                      received a response from us, do not hesitate and call us
                      and we will clarify the matter for you. Customer is the
                      king!
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP18hRO8y5t_f0lcwYjg2OVFlclaBoW-pKpK4zHoUIOVgTbYn-0udAoZVZCWRf-Cuvw4s&usqp=CAU"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Success</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      The whole success we owe firstly to our customers and
                      secondly to our employees. Without you this store would be
                      just an idea of thousands. With your support we can
                      increase our success.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Aboutus;
