function findAdjacent(vertexName, vertices, edges) {
	return edges.filter(edge => edge.includes(vertexName))
		.map(edge => edge.filter(vertex => vertex !== vertexName)[0])
		.map(name => vertices.find(vertex => vertex.name === name))
		.filter(vertex => vertex.distance === null);
}

function markDistanceAndPredecessor(predecessor, adjacentVertices) {
	return adjacentVertices.map(vertex => {
		vertex.distance = predecessor.distance + 1;
		vertex.predecessor = predecessor;
	});
}

function bfs(rootNode, vertices, edges){
	rootNode.distance = 0;
	let visited = [rootNode];
	let explored = [rootNode];
	while (visited.length > 0) {
		let currentVertex = visited.shift();
		let adjacentVertices = findAdjacent(currentVertex.name, vertices, edges);
		visited = visited.concat(adjacentVertices);
		explored = explored.concat(adjacentVertices);
		markDistanceAndPredecessor(currentVertex, adjacentVertices);
	}
	return explored;
}
