(function (window){

  function createTree (context) {
    context = context || document
    var els = context.querySelectorAll('h2,h3,h4,h5,h6')
    var arr = Array.prototype.slice.call(els)

    var root = {
      parent: null,
      value: {
        text: null,
        href: null
      },
      level: 0,
      children: []
    }

    root.parent = root

    var node = root
    var randomId = 'd' + Date.now() + Math.random()

    arr.reduce(function (pre, el, index) {
      let level = +el.tagName.substring(1)

      el.id = el.id || randomId + index

      var node = {
        parent: null,
        value: {
          text: el.innerText,
          href: el.id
        },
        level: level,
        children: []
      }

      var parent = pre
      while (level <= parent.level && parent !== parent.parent) {
        parent = parent.parent
      }

      node.parent = parent
      parent.children.push(node)

      return node
    }, root)

    return root
  }

  function createMenu (tree) {
    var result = '<ul>'
    tree.children.forEach(function (node) {
      result += '<li><a href="#' + node.value.href + '">' + node.value.text + '</a>'
      if (node.children.length) {
        result += createMenu(node)
      }
      result += '</li>'
    })

    result += '</ul>'
    return result
  }

  function mount (el, target) {
    var tree = createTree(el)
    var menuElm = createMenu(tree)

    target.innerHTML = menuElm
  }

  window.$menu = mount

} (window))
