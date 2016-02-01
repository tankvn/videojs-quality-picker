import QualityPickerButton from './quality-picker-button';

function qualityPickerPlugin (options) {
    var player = this;
    var tech = this.tech_;

    tech.on('loadedqualitydata', onQualityData);


    function onQualityData(event, qualityList) {
        console.log("onQualityData(): event=", event, "qualityList=", qualityList);

        var qualityPickerButton = new QualityPickerButton(player, {});
        player.controlBar.addChild(qualityPickerButton);
    }
};

videojs.plugin('qualityPickerPlugin', qualityPickerPlugin);
