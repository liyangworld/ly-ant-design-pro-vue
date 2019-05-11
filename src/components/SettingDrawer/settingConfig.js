const updateColorWeak = colorWeak => {
  // document.body.className = colorWeak ? 'colorWeak' : '';
  colorWeak
    ? document.body.classList.add("colorWeak")
    : document.body.classList.remove("colorWeak")
}

export { updateColorWeak }
