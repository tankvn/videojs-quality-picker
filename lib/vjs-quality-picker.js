import QualityPickerButton from './quality-picker-button';

function qualityPickerPlugin (options) {

    console.log('qualityPickerPlugin(): options=', options);
    console.log('qualityPickerPlugin(): this=', this);

    var player = this;
    var tech = this.tech_;

    console.log('qualityPickerPlugin(): tech=', tech);

    tech.on('loadedmetadata', onLoadedMetaData);
    tech.on('loadedqualitydata', onQualityData);

    function onLoadedMetaData(){
        console.log("onLoadedMetaData():");
    }

    function onQualityData(event, qualityList) {
        console.log("onQualityData(): event=", event, "qualityList=", qualityList);

        //TODO: consider the case with multiple videos and probable unnecessary creation of menu button for each video
        var qualityPickerButton = new QualityPickerButton(player, {});
        player.controlBar.addChild(qualityPickerButton);
    }

};

videojs.plugin('qualityPickerPlugin', qualityPickerPlugin);
