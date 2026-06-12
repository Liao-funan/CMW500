# Playing a Waveform File

Module: Audio Measurements
Source: 7bc38e3efbd14b7e.htm

## 原始指令文档说明
Audio Measurements
 > 
Programming
 > 
Playing a Waveform File
Playing a Waveform File
// *****************************************************************************
// Select the waveform scenario.
// *****************************************************************************
ROUTe:AUDio:SCENario:WAVeform
// *****************************************************************************
// Select and load the waveform file.
// *****************************************************************************
CONFigure:AUDio:WAV:PLAYback:FPAThname "@WAVEFORM\myWAVfile.wav"
// *****************************************************************************
// Select the signal destination and set the maximum output level.
// *****************************************************************************
CONFigure:AUDio:WAV:PLAYback:DESTination ANALog
CONFigure:AUDio:WAV:PLAYback:OLEVel 0.5
// *****************************************************************************
// Start the playback.
// *****************************************************************************
SOURce:AUDio:WAV:PLAYback:STATe ON
// *****************************************************************************
// Check the progress of the playback.
// *****************************************************************************
SENSe:AUDio:WAV:PLAYback:PROGress:DREad?
Top