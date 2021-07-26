import React, { Component } from "react";
 
class Skill extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        <p>Web Dev</p>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>PHP</li>
        </ol>
        <p>Mobile Dev</p>
        <ol>
          <li>Kotlin</li>
          <li>Java</li>
        </ol>
      </div>
    );
  }
}
 
export default Skill;