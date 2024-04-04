const reqestPromise = new Promise((resolver, reject) => {
  fetch("https://json-server-vercel-w33n.vercel.app/Orders")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      resolver(data);
    })
    .catch((error) => {
      reject(error);
    });
});

reqestPromise
  .then((data) => {
    console.log("API调用成功:", data);
  })
  .catch((error) => {
    console.error("API调用失败:", error);
  });
