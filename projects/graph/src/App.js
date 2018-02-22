import React, { Component } from 'react';
import { Graph } from './graph';
import './App.css';

// !!! IMPLEMENT ME
const canvasWidth = 1920;
const canvasHeight = 1080;

/**
 * GraphView
 */
class GraphView extends Component {
  /**
   * On mount
   */
  componentDidMount() {
    this.updateCanvas();
  }

  /**
   * On state update
   */
  componentDidUpdate() {
    this.updateCanvas();
  }

  /**
   * Render the canvas
   */
  updateCanvas() {
    const graph = new Graph();
    graph.randomize(12, 3, 145, 0.4);
    const verticies = graph.vertexes;
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');

    // Clear it
    ctx.fillStyle = '#D8A08F';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = '#8B4513';

    verticies.map(vertex => {
      ctx.beginPath();
      ctx.arc(vertex.pos.x, vertex.pos.y, 10, 0, 2 * Math.PI, false);
      ctx.fill();
      vertex.edges.map(edge => {
        const vertexPair = edge.destination;
        ctx.beginPath();
        ctx.moveTo(vertex.pos.x, vertex.pos.y);
        ctx.lineTo(vertexPair.pos.x, vertexPair.pos.y);
        ctx.stroke();
      });
    });
  }

  /**
   * Render
   */
  render() {
    return <canvas ref="canvas" width={canvasWidth} height={canvasHeight} />;
  }
}

/**
 * App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: new Graph()
    };

    // !!! IMPLEMENT ME
    // use the graph randomize() method
  }

  render() {
    return (
      <div className="App">
        <GraphView graph={this.state.graph} />
      </div>
    );
  }
}

export default App;
