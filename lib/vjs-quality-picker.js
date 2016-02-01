import QualityPickerButton from './quality-picker-button';

function qualityPickerPlugin(options) {
    var player = this;
    var tech = this.tech_;

    tech.on('loadedqualitydata', onQualityData);

    function onQualityData(event, {qualityData, qualitySwitchCallback}) {
        if (qualityData.video && qualityData.video.length > 1) {
            var qualityPickerButton = new QualityPickerButton(player, {qualityList: qualityData.video, qualitySwitchCallback});
            player.controlBar.addChild(qualityPickerButton);
        }
    }
}

videojs.plugin('qualityPickerPlugin', qualityPickerPlugin);
