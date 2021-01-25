class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      break: 5,
      session: 25,
      timerOn: false,
      timerLabel: "Session" };

    this.reset = this.reset.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.startSession = this.startSession.bind(this);
    this.startBreak = this.startBreak.bind(this);
    this.startStop = this.startStop.bind(this);
  }

  reset() {
    clearInterval(this.myInterval);
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    this.setState({
      break: 5,
      session: 25,
      minutes: 25,
      seconds: 0,
      timerOn: false,
      timerLabel: "Session" });

  }

  decrementBreak() {
    if (this.state.break <= 1) return;
    this.setState({
      break: this.state.break - 1 });

  }

  decrementSession() {
    if (this.state.session <= 1) return;
    this.setState({
      session: this.state.session - 1,
      minutes: this.state.session - 1 });

  }

  incrementBreak() {
    if (this.state.break >= 60) return;
    this.setState({
      break: this.state.break + 1 });

  }

  incrementSession() {
    if (this.state.session >= 60) return;
    this.setState({
      session: this.state.session + 1,
      minutes: this.state.session + 1 });

  }

  startStop() {
    if (this.state.timerLabel === "Session") {
      this.startSession();
    } else {
      this.startBreak();
    }
  }

  startSession() {
    if (this.state.timerOn === false) {
      this.setState({
        timerOn: true });

      this.myInterval = setInterval(() => {
        const { seconds, minutes } = this.state;
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1 }));

        }
        if (seconds === 0) {
          if (minutes === 0) {
            document.getElementById("beep").play();
            clearInterval(this.myInterval);
            this.setState({
              timerOn: false,
              minutes: this.state.break,
              timerLabel: "Break" });

            this.startBreak();
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59 }));

          }
        }
      }, 1000);
    } else {
      clearInterval(this.myInterval);
      this.setState({
        timerOn: false });

    }
  }

  startBreak() {
    if (this.state.timerOn === false) {
      this.setState({
        timerOn: true });

      this.myInterval = setInterval(() => {
        const { seconds, minutes } = this.state;
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1 }));

        }
        if (seconds === 0) {
          if (minutes === 0) {
            document.getElementById("beep").play();
            clearInterval(this.myInterval);
            this.setState({
              timerLabel: "Session",
              timerOn: false,
              minutes: this.state.session });

            this.startSession();
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59 }));

          }
        }
      }, 1000);
    } else {
      clearInterval(this.myInterval);
      this.setState({
        timerOn: false });

    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Pomodoro Clock"), /*#__PURE__*/
      React.createElement("div", { class: "labels" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { id: "break-label" }, "Break Length"), /*#__PURE__*/
      React.createElement("div", { class: "value" }, /*#__PURE__*/
      React.createElement("button", { id: "break-decrement", onClick: this.decrementBreak }, "-"), /*#__PURE__*/


      React.createElement("div", { id: "break-length" }, this.state.break), /*#__PURE__*/
      React.createElement("button", { id: "break-increment", onClick: this.incrementBreak }, "+"))), /*#__PURE__*/




      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { id: "session-label" }, "Session Length"), /*#__PURE__*/
      React.createElement("div", { class: "value" }, /*#__PURE__*/
      React.createElement("button", { id: "session-decrement", onClick: this.decrementSession }, "-"), /*#__PURE__*/


      React.createElement("div", { id: "session-length" }, this.state.session), /*#__PURE__*/
      React.createElement("button", { id: "session-increment", onClick: this.incrementSession }, "+")))), /*#__PURE__*/





      React.createElement("p", { id: "timer-label" }, this.state.timerLabel), /*#__PURE__*/
      React.createElement("div", { id: "time-left" }, /*#__PURE__*/
      React.createElement("h1", null,
      this.state.minutes < 10 ?
      `0${this.state.minutes}` :
      this.state.minutes, ":",

      this.state.seconds < 10 ?
      `0${this.state.seconds}` :
      this.state.seconds)), /*#__PURE__*/


      React.createElement("button", { id: "start_stop", onClick: this.startStop }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-play fa-2x" }), /*#__PURE__*/
      React.createElement("i", { className: "fa fa-pause fa-2x" })), /*#__PURE__*/

      React.createElement("button", { id: "reset", onClick: this.reset }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-sync-alt fa-2x" })), /*#__PURE__*/

      React.createElement("audio", {
        id: "beep",
        preload: "auto",
        src: "http://res.cloudinary.com/hbrwdfccc/video/upload/v1533820266/Bongos.mp3",
        type: "audio/mpeg" })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById("root"));