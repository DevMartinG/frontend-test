    class Api {
      static get(url, data) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(Math.floor(Math.random() * 10));
          }, 100);
        });
      }
    }

    async function getDataAndPrint() {
      const promises = Array.from({ length: 100 }, () => Api.get("randomNumber"));
      const oneHundredRandoms = await Promise.all(promises);
      console.log(oneHundredRandoms);
    }

    getDataAndPrint();