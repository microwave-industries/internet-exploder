document.querySelectorAll('.fake-button').forEach(fakeButton => {
  fakeButton.addEventListener('click', ({ target: element }) => {
    element.parentNode.removeChild(element)
  })
})