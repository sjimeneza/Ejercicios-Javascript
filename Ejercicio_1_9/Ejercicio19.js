const topics = ['Javascript','Variables','Funciones','Condicionales','Bucles'];

const capitalizeTopics = topics.map(eachTopic => eachTopic.toUpperCase());
capitalizeTopics.reverse();
console.log('topics', topics)
console.log('capitalizeTopics', capitalizeTopics);