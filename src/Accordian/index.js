import React, { Component } from "react";
import "./Accordian.scss";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1
    };
  }
  data = [
    {
      heading: "Item 1",
      body:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid."
    },
    {
      heading: "Item 2",
      body:
        "3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
    },
    {
      heading: "Item 3",
      body:
        "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo."
    },
    {
      heading: "Item 4",
      body:
        "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    }
  ];
  toggleAccordian = index => {
    if (index === this.state.selectedIndex) {
      index = -1;
    }
    this.setState({
      selectedIndex: index
    });
  };
  render() {
    return (
      <section className="accordian-block-wrapper">
        <div className="heading">
          <h2>React Accordian</h2>
        </div>
        {this.data.map((info, index) => {
          return (
            <div className="accordian-inner-wrapper" key={index}>
              <div className="tile" onClick={() => this.toggleAccordian(index)}>
                {info.heading}
                <span className="symbol">{`${this.state.selectedIndex === index ? "-" : "+"}`}</span>
              </div>
              {this.state.selectedIndex === index && (
                <div className="body">{info.body}</div>
              )}
            </div>
          );
        })}
      </section>
    );
  }
}

export default Accordian;
