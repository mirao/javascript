module.exports = {
    /**
     * 
     * @param {Array} edges Array contains a two-element array - the start and end points of the roads
     */
    buildGraph(edges) {
        let graph = Object.create(null);
        function addEdge(from, to) {
            if (graph[from] == null) {
                graph[from] = [to];
            } else {
                graph[from].push(to);
            }
        }
        for (let [from, to] of edges) {
            addEdge(from, to);
            addEdge(to, from);
        }
        return graph;
    }
};