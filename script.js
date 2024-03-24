const template = document.getElementById("item-template");
const holder = document.getElementById("item-holder");
window.onload = () => {
  loadData();
};
loadData = () => {
  const url = new GenerateURL().getAddress();
  const handler = new ApiHandler();
  handler.getData(
    url,
    function (data) {
      data.forEach((data) => {
        console.log(data);
        let currentItem = template.innerHTML;
        console.log(currentItem);
        currentItem = currentItem.replace("__SRC__", data.url);
        currentItem = currentItem.replace("__TITLE__", data.title);
        currentItem = currentItem.replace("__SRCLINK__", data.url);
        holder.innerHTML += currentItem;
      });
    },
    function (error) {
      new Error(error);
    }
  );
};
