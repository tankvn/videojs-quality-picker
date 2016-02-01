const VjsButton = videojs.getComponent('MenuButton');
const VjsMenu = videojs.getComponent('Menu');

class QualityPickerButton extends VjsButton {

  constructor(player, options) {
    super(player, options);
  }

  createMenu(options) {
    var menu = new VjsMenu(this.player, options);

    return menu;
  }
}

export default QualityPickerButton;
