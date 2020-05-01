var app = new Vue({
    el: '#app',
    data: {
        mainHeadings: [
            {text: "There is no bus from Winnipeg to any beach."},
            {text: "There should be a bus to the beach.", points:[
                {text: "Get cars off the road and thereby reduce greenhouse gas emissions."},
                {text: "Get people into nature, with all the associated health benefits."}
            ]},
            {text: "Why is there not a bus to the beach?"},
            {text: "How can we get a bus to the beach?"}
        ]
    }        
});