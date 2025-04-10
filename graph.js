class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  print() {
    for (let vertex in this.adjacencyList) {
      console.log(
        vertex + " -> " + Array.from(this.adjacencyList[vertex])?.join(", ")
      );
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].delete(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }

  getVertices() {
    return Object.keys(this.adjacencyList);
  }
  getEdges() {
    const edges = [];
    for (let vertex in this.adjacencyList) {
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        edges.push([vertex, adjacentVertex]);
      }
    }
    console.log(edges);
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.removeEdge("A", "B");
graph.print();
console.log("Vertices:", graph.getVertices());