# Video.js quality menu

Adds quality menu to video.js which allows users to manually select a specific quality for multi-bitrate video or enable automatic quality selection

## Installation

Plugin works with video.js 5.0 and newer.



## Make a tech / source handler compatible

#### How it works

The plugin listens to the custom event `loadedqualitydata` fired by player's tech / source handler.

The tech must:
- Get the quality list from the underlying playback technology
- Format the quality list to the format given below
- Implement a callback function for the click action on the quality picker
- Trigger a custom tech event `loadedqualitydata`, with a payload which format is described below


### Expected format

Here is expected payload structure:
```javascript
{
  qualityData: {
    video: [ Quality ], // An array of Quality objects, as defined below
    audio: [ Quality ]
  },
  qualitySwitchCallback: Function // callback function used for quality switching, as defined below
}
```

#### qualitySwitchCallback

`qualitySwitchCallback(qualityId, trackType)`

This callback function will be called with the Quality id and the the track type `(video | audio)` as arguments. Its role is to effectively perform the quality change on the player



#### Quality

###### Examples

```javascript
{
  id: -1,
  label: 'auto',
  selected: true
}
```

```javascript
{
  id: { adaptationSetId: 0, representationId: 2},
  label: '720p',
  selected: false
}
```

###### Properties

property    | type  |description
------------|-------|-----------------------------------
id          | Any   | Unique identifier for the quality. Can be an integer (level index for HLS), or an object ( {adaptationSetId: ..., representationId: ...} for Dash) .
label       | String | The text that will be displayed to identify this quality in the drop down menu
selected    | Boolean | Should be true for ONE quality ONLY: the one that is currently played by the player

### Hls.js Example


```javascript

    // hls.js init
    var hls = new Hls(config);
    hls.on(Hls.Events.MANIFEST_PARSED, onManifestParsed); // Listen to the event MANIFEST_PARSED, to get the quality list.

    hls.loadSource(url);
    hls.attachMedia(video);

    //...
    //...
    //...


    // Callback function
    function switchQuality(qualityId, trackType) {
        hls.nextLevel = qualityId; // Perform quality switch using hls.js API
    }

    function onManifestParsed(event, data) {
        // 1. Format payload
        var cleanTracklist = [];

        // Add an "auto" quality.
        if (data.levels.length > 1) {
            var autoLevel = {
                id: -1,
                label: "auto",
                selected: -1 === hls.manualLevel
            };
            cleanTracklist.push(autoLevel);
        }

        // Format each hls level into the expected "Quality" format
        data.levels.forEach(function(level, index) {
            var quality = {}; // Don't write in level (shared reference with Hls.js)
            quality.id = index;
            quality.selected = index === hls.manualLevel;
            quality.label = _levelLabel(level);

            cleanTracklist.push(quality);
        });

        var payload = {
            qualityData: {video: cleanTracklist},
            qualitySwitchCallback: switchQuality
        };

        // 2. Trigger custom event from tech
        tech.trigger('loadedqualitydata', payload);

        // Helper method used to format the Quality's label
        function _levelLabel(level) {
            if (level.height) return level.height + "p";
            else if (level.width) return Math.round(level.width * 9 / 16) + "p";
            else if (level.bitrate) return (level.bitrate / 1000) + "kbps";
            else return 0;
        }
    }
```
