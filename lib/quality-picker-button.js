import QualityMenu from './quality-menu';
import QualityMenuItem from './quality-menu-item';

const VjsButton = videojs.getComponent('MenuButton');

class QualityPickerButton extends VjsButton {

  createMenu() {
    var menu = new QualityMenu(this.player, this.options_);
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
