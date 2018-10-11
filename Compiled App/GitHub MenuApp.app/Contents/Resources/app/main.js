var menubar = require('menubar')

var mb = menubar({
  index: 'https://github.com/chrisbrocklesby/Snippets/find/master',
  height: 900,
  width: 1100
})


mb.on('ready', function ready () {
  console.log('Github Menubar App Ready...')
})

// set image
let changeIcon = () => {
    tray.setImage(path.join(__dirname, '.', 'iconTemplate.png'))
}
