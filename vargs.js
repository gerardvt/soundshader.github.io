let args = new URLSearchParams(location.search);

export const SIZE = +args.get('n') || 2048;
export const SAMPLE_RATE = +args.get('sr') || 44100;
export const IMAGE_SIZE = +args.get('is') || 1024;
export const USE_MOUSE = args.get('mouse') != '0';
export const ACF_COLOR_SCHEME = +args.get('acf.cs') || 2;
export const CWT_BRIGHTNESS = +args.get('cwt.b') || 1;
export const CWT_LEN = +args.get('cwt.len') || 17;
export const CWT_N = +args.get('cwt.3s') || 30;
export const CWT_GL = args.get('cwt.gl') != '0';
export const FFT_GL = args.get('fft.gl') == '1';
export const FFT_LOG_SCALE = args.get('fft.log') != '0';
export const USE_ALPHA_CHANNEL = args.get('alpha') == '1';
