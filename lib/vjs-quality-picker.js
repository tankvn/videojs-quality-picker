import QualityPickerButton from './quality-picker-button';

function qualityPickerPlugin(options) {
    var player = this;
    var tech = this.tech_;

    let SUPPORTED_TRACKS = ["video", "audio", "subtitle"];
    let TRACK_CLASS = {
        video: 'vjs-icon-hd',
        audio: 'vjs-icon-cog',
        subtitle: 'vjs-icon-subtitles'
    };

    tech.on('loadedqualitydata', onQualityData);

    function onQualityData(event, {qualityData, qualitySwitchCallback}) {

        for (var track of SUPPORTED_TRACKS) {
            if (qualityData[track] && qualityData[track].length > 1) {
                var qualityPickerButton = new QualityPickerButton(player, {qualityList: qualityData[track], qualitySwitchCallback, trackType: track});
                qualityPickerButton.addClass(TRACK_CLASS[track]);

                var fullscreenToggle = player.controlBar.getChild('fullscreenToggle');
                if (fullscreenToggle) {
                    player.controlBar.el().insertBefore(qualityPickerButton.el(), fullscreenToggle.el());
                } else {
                    player.controlBar.addChild(qualityPickerButton);
                }
            }
        }
    }
}

videojs.plugin('qualityPickerPlugin', qualityPickerPlugin);
