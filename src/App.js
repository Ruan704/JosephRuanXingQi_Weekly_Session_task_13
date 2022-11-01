import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Display } from "./Display";
import {Header} from "./stories/Header";
import {Button} from "./stories/Button";
import {Card} from "./stories/Card";
const App = () => {
    return (
        <React.Fragment>
          <Header/>
            <Display />
            <Card />
            <Button color="red">
                <p>signin</p>
                <p>login</p>
                <p>submit</p>
            </Button>
        </React.Fragment>
    )
}


export default App;
