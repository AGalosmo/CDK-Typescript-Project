exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: `This is my cdk using typescript ${event.path}\n`
    };
  };
  