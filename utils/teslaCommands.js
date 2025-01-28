const TESLA_COMMANDS = {
  WAKE_UP: 'wake_up',
  DOOR_LOCK: 'door_lock',
  DOOR_UNLOCK: 'door_unlock',
  HONK_HORN: 'honk_horn',
  FLASH_LIGHTS: 'flash_lights',
  CLIMATE_ON: 'auto_conditioning_start',
  CLIMATE_OFF: 'auto_conditioning_stop',
  SET_TEMP: 'set_temps',
  SET_CHARGING_LIMIT: 'set_charge_limit',
  START_CHARGING: 'charge_start',
  STOP_CHARGING: 'charge_stop',
  ACTUATE_TRUNK: 'actuate_trunk',
  REMOTE_START: 'remote_start_drive',
  WINDOW_CONTROL: 'window_control',
  SUNROOF_CONTROL: 'sun_roof_control',
  MEDIA_TOGGLE: 'media_toggle_playback',
  MEDIA_NEXT_TRACK: 'media_next_track',
  MEDIA_PREV_TRACK: 'media_prev_track',
  MEDIA_NEXT_FAV: 'media_next_fav',
  MEDIA_PREV_FAV: 'media_prev_fav',
  MEDIA_VOLUME_UP: 'media_volume_up',
  MEDIA_VOLUME_DOWN: 'media_volume_down'
};

module.exports = TESLA_COMMANDS; 