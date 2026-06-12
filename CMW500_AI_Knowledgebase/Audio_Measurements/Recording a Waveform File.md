# Recording a Waveform File

Module: Audio Measurements
Source: bed011d1dac747e2.htm

## 原始指令文档说明
Audio Measurements
 > 
Programming
 > 
Recording a Waveform File
Recording a Waveform File
// *****************************************************************************
// Select the waveform scenario.
// *****************************************************************************
ROUTe:AUDio:SCENario:WAVeform
// *****************************************************************************
// Select the target waveform file via the GUI. There is no command yet.
// *****************************************************************************
// *****************************************************************************
// Select the signal source, set the filter and the maximum input level.
// *****************************************************************************
CONFigure:AUDio:WAV:RECord:SOURce ANALog
CONFigure:AUDio:WAV:RECord:FILTer:HPASs H50
CONFigure:AUDio:WAV:RECord:ILEVel 5
// *****************************************************************************
// Start the recording.
// *****************************************************************************
INITiate:AUDio:WAV:RECord
// *****************************************************************************
// Check the progress of the recording.
// *****************************************************************************
SENSe:AUDio:WAV:RECord:PROGress:DWRitten?
// *****************************************************************************
// Stop the recording (when desired) and write the file.
// *****************************************************************************
ABOrt:AUDio:WAV:RECord
Top