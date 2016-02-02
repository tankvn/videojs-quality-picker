# Video.js quality menu

Adds quality menu to video.js which allows users to manually select a specific quality for multi-bitrate video or enable automatic quality selection

## Installation

Plugin works with video.js 5.0 and newer.

## How it works

Plugin listens to the custom event `loadedqualitydata` fired by player's tech.
An object with available qualities and a callback for triggering quality switching are passed as 2nd param to event handler.
Here is payload structure:

```javascript
{
  qualityData: [
    {
      id: -1,             // unique identifier of this quality. -1 is used for automatic quality switching(ABR)
      label: 'auto',      // text for quality label in the menu
      selected: true      // only one quality can be selected at the time
    },
    {
      id: 0,
      label: '720p',
      selected: false
    },
    {
      id: 1,
      label: '1080p',
      selected: false
    },
    ...
  ],
  qualitySwitchCallback: Function // method reference used for quality switching. quality id is passed as a param to this method
}
```

## Contributing

## License
