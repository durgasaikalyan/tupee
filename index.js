const Notification = props => {
  //  Write your code here.
  const {Notification} = props;
  return (
      <h1 Classname = "message">
          (name)
      </h1>
  );
};
const Greeting = () => (
    <div> 
    <Notification name = "Information Message" />
    <Notification name = "Success Message" /> 
    <Notification name = "Warning Message" /> 
    <Notification name = "Error Message" />
     </div>
)

const element = (
  //  Write your code here. 
  <div>
      <h1 Classname = mainheading>

      Notifications

      </h1>
      <p Classname = paragraph>
          Information Message
      </p>
      <img src = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
  </div>  
)

ReactDOM.render(element, document.getElementById('root'))
