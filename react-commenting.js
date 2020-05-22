// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  //I believe that props was left out of constructor and super in order to be passed through to the components.
  constructor(){
    super()
    // 1. state object that holds the user input that is added by the user in the JSX <input /> on line 34.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. Setting the state for the event handle of userInput with the value property of the DOM element, in this case that means the text entered by the user.
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. Destructuring props and state as constants at the start of render function so that it will be able to be referred in the markup.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. Calling the onChange method for the state to change with the user inputted value.*/}
          onChange={ this.robot }
          {/* 5. Setting the value to be the value the user inputs. */}
          value={ userInput }
        />

        <div>
          {/* 6. Importing the GoodRobot component that is passing the the userInput to the component through props. */}
          <GoodRobot
            {/* 7. Passing the value of userInput through to the component GoodRobot that will display in the Component GoodRobot on line 66 through { this.props.userInput. } */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. creating a react fragment div in order to house our html behaving code.
      <div>
        <h3>Good Robot</h3>
        {/* 9. passing the value the user inputted through props to this sentence and returning the value onscreen */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. eporting the component through to GoodRobot so we can then call it back through the App.js by importing.
export default GoodRobot
