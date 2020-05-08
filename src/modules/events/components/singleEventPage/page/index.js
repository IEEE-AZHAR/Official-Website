import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Gallery from "../components/Gallery/Gallery";
import EventDetails from "../components/EventDetails/EventDetails";

import { getEvents } from "modules/events/services/events.service";

import styles from "./style.module.css";

class SingleEventPage extends Component {
  constructor() {
    super();
    this.state = {
      event: {},
      notFound: false,
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);

    const { match, history } = this.props;
    getEvents()
      .then((response) => {
        const event = response.data.find(
          (event) => event.id === match.params.id
        );
        if (event) {
          this.setState({ event });
        } else {
          history.push("/404");
        }
      })
      .catch((err) => {
        history.push("/404");
      });
  };

  render() {
    const {
      title,
      cover,
      description,
      images,
      status,
      startDate,
      endDate,
      location,
      startTime,
      endTime,
      form,
    } = this.state.event;

    return (
      <>
        {this.state.notFound ? (
          <section className="my-5 py-5">
            <h1 className="text-center my-5 py-5">
              404 NOT FOUND
              <span role="img" aria-label="Panda">
                😢
              </span>
            </h1>
          </section>
        ) : !title ? (
          <section className="my-5 py-5">
            <h1 className="text-center my-5 py-5">Loading...</h1>
          </section>
        ) : (
          <div>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <div className="text-center">
              <img
                className={`w-100 ${styles["event-cover"]}`}
                src={cover}
                alt="Event Cover"
              />
              <section className="container">
                <header className="px-5 mx-5">
                  <h1 className="h2 my-5 section_heading">{title}</h1>
                </header>
                <EventDetails
                  details={{
                    startDate,
                    startTime,
                    endDate,
                    endTime,
                    location,
                    form,
                    cover,
                    title,
                    status,
                  }}
                />
                <section>
                  <article className="my-5 text-left">{description}</article>
                  {images ? <Gallery images={images} /> : null}
                </section>
              </section>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SingleEventPage;
