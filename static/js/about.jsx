'use strict';

function AboutMe() {
    return (
        <React.Fragment>
            Hello, my name is Megan and thank you for visiting my webpage. <br/>
            <a href="https://github.com/mpquinta/itinerary-creator">Click here to view my final project.</a>
        </React.Fragment>
    )
}

ReactDOM.render(<AboutMe />, document.querySelector('#about-me'))