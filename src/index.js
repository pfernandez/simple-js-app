const root = document.getElementById("root"),
  heading = document.createElement("h1")

const appendMessage = ({ message }) => {
  heading.append(message)
  root.append(heading)
}

fetch("/data")
  .then(res => res.json())
  .then(appendMessage)
