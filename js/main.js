let like = document.querySelectorAll(".goods__item-like");
like.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

let btn = document.querySelectorAll(".goods__item-btn");
btn.forEach(item => {
  item.addEventListener("click", event => {
    btns = event.target.closest(".goods__item").querySelector(".goods__item-btns");
    btns.classList.add("active");
    item.classList.add("hidden");
  });
});
let count = 1;
let plus = document.querySelectorAll(".goods__item-btns_plus");
let minus = document.querySelectorAll(".goods__item-btns_minus");
plus.forEach(item => {
  item.addEventListener("click", event => {
    count++;
    cnt = event.target.closest(".goods__item").querySelector(".goods__item-btns_count");
    cnt.innerHTML = count + " шт";
    console.log(count);
  });
});

minus.forEach(item => {
  item.addEventListener("click", event => {
    count--;
    if (count > 0) {
      cnt = event.target.closest(".goods__item").querySelector(".goods__item-btns_count");
      cnt.innerHTML = count + " шт";
    } else {
      btns.classList.remove("active");
      let hdn = btns.closest(".goods__item").querySelector(".goods__item-btn");
      hdn.classList.remove("hidden");
    }
  });
});
