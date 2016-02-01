function qualityPickerPlugin (options) {

    console.log('qualityPickerPlugin(): options=', options);
    console.log('qualityPickerPlugin(): this=', this);

    var tech = this.tech_;

    console.log('qualityPickerPlugin(): tech=', tech);

    tech.on('loadedmetadata', onLoadedMetaData);
    tech.on('loadedqualitydata', onQualityData);

    function onLoadedMetaData(){
        console.log("onLoadedMetaData():");
    }

    function onQualityData(event, data) {
        console.log("onQualityData(): event=", event, "data=", data);
    }

};

videojs.plugin('qualityPickerPlugin', qualityPickerPlugin);
