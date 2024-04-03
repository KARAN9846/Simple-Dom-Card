var addFriend = document.querySelector("#add")

var estatus = document.querySelector("h5")

var flag = 0


addFriend.addEventListener("click", function () {
    if (flag == 0) {
        addFriend.innerHTML = "Remove Friend"
        estatus.innerHTML = "Friends"
        estatus.style.color = "green"
        flag = 1
    } else {
        addFriend.innerHTML = "Add Friend"
        estatus.innerHTML = " Stranger"
        estatus.style.color = "red"

        flag = 0
    }
})