import { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledId: false,
      toggledQuery: false,
    };

    this.handleIdClick = this.handleIdClick.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
  }

  handleIdClick() {
    this.setState((prev) => ({ toggledId: !prev.toggledId }));
  }

  handleQueryClick() {
    this.setState((prev) => ({ toggledQuery: !prev.toggledQuery }));
  }

  render() {
    const { toggledId, toggledQuery } = this.state;

    const n = 12;
    const targetIndex = (n % 10) + 1;

    const idStyle = {
      backgroundColor: toggledId ? "black" : "#f0f0f0",
      color: toggledId ? "white" : "black",
      cursor: "pointer",
    };

    const queryStyle = {
      backgroundColor: toggledQuery ? "darkblue" : "#f0f0f0",
      color: toggledQuery ? "yellow" : "black",
      cursor: "pointer",
    };

    return (
      <main>
        <h4>My Favourite Hobbies</h4>
        <ul>
          <li>
            <u>Information Technology (IT)</u>: Learning new technologies and
            improving coding skills.
          </li>
          <li>
            <u>Working out at the gym</u>: Staying healthy and strong.
          </li>
          <li>
            <u>Traveling</u>: Exploring new cultures and places.
          </li>
          <li>
            <u>Spending time with family</u>: Important and joyful.
          </li>
        </ul>

        <h4>My Top Movies and Books</h4>
        <ol>
          <li>The Wolf of Wall Street</li>
          <li>The Little Prince</li>
          <li>Winnie-the-Pooh</li>
        </ol>

        <h4>Kharkiv</h4>
        <p>
          My favorite city that I have visited is Kharkiv. It is the
          second-largest city in Ukraine, full of history, culture, and life.
          Freedom Square impressed me the most. Despite the war, I still
          remember its cleanliness, parks, and welcoming people.
        </p>
        <p>P.S. If I was asked where I'd live, I'd definitely say Kharkiv!</p>

        <p id={`p${targetIndex}`} style={idStyle} onClick={this.handleIdClick}>
          Block By Id
        </p>
        <p
          id={`p${targetIndex + 1}`}
          style={queryStyle}
          onClick={this.handleQueryClick}
        >
          Block By Query Selector
        </p>
      </main>
    );
  }
}

export default Content;
