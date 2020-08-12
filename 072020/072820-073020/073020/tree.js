function tree(height) {
  let star = "$"
  let space = " "
  let counter = (height - 1)

  for (let i = 0; i < height; i++) {
    let tree = ""

    for (let j = 0; j < counter; j++) {
      tree += space
    }

    counter--
    tree += star
    star += "$$"
    console.log(tree)
  }
}
