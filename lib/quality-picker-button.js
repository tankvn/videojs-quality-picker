import QualityMenu from './quality-menu';
import QualityMenuItem from './quality-menu-item';

const VjsButton = videojs.getComponent('MenuButton');

class QualityPickerButton extends VjsButton {

  createMenu() {
    var menu = new QualityMenu(this.player, this.options_);
    var menuItem;
    var options;
    for (var quality of this.options_.qualityList) {
      var {qualitySwitchCallback, trackType} = this.options_;
      options = Object.assign({qualitySwitchCallback, trackType}, quality);

      menuItem = new QualityMenuItem(this.player, options);
      menu.addItem(menuItem);
    }

    return menu;
  }
}

export default QualityPickerButton;
