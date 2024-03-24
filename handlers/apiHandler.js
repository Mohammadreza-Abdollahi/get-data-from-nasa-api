class ApiHandler {
  getData(url, onSuccess, onError) {
    fetch(url)
      .then((res1) => {
        if (res1.status == 200) {
          return res1.json();
        } else {
          throw new Error("Exception");
        }
      })
      .then((res2) => {
        onSuccess(res2);
      }).catch(e => onError(e));
  }
}
