import QualityMenuItem from './quality-menu-item';

const VjsButton = videojs.getComponent('MenuButton');
const VjsMenu = videojs.getComponent('Menu');

class QualityPickerButton extends VjsButton {

  constructor(player, options) {
    super(player, options);
  }

  createMenu() {
    var menu = new VjsMenu(this.player, this.options_);
    var menuItem;
    for (var quality of this.options_.qualityList) {

      quality.qualitySwitchCallback = this.options_.qualitySwitchCallback;

      menuItem = new QualityMenuItem(this.player, quality);
      menu.addItem(menuItem);
    }

    return menu;
  }
}

export default QualityPickerButton;
