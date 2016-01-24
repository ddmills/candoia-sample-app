console.log('hello world!');

api.store.put("mySecretKey", 6000);

// this line will take some time to execute
var results = api.boa.exec("my-boa-script.boa");

console.log(results);
