# FFT Noise Measurement

Module: Audio Measurements
Source: c7ebd3211f2d4c16.htm

## 原始指令文档说明
Audio Measurements
 > 
Programming
 > 
Audio Measurement and Generator Scenario
 > 
FFT Noise Measurement
FFT Noise Measurement
The following example configures all settings specific for an FFT noise measurement, starts the audio generator, starts the audio measurement and queries the measurement results.
// *****************************************************************************
// Select FFT noise as signal type and couple the generator to a measurement.
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:STYPe FFTNoise
SOURce:AUDio:GEN:ANALog:ACOupling ANAL
// *****************************************************************************
// Specify the level of the generated noise signal.
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:FFTNoise:LEVel 3
// *****************************************************************************
// Configure the statistic count of the measurement.
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:FFTNoise:SCOunt 14
// *****************************************************************************
// Configure the FFT noise measurement filters.
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:FFTNoise:FILTer:LPASs OFF
CONFigure:AUDio:MEAS:ANALog:FFTNoise:FILTer:HPASs OFF
CONFigure:AUDio:MEAS:ANALog:FFTNoise:FILTer:WEIGhting OFF
// *****************************************************************************
// Switch on the audio generator. Wait until the command has been executed and
// query the generator state (should be ON). 
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:STATe ON; *OPC?
SOURce:AUDio:GEN:ANALog:STATe?
// *****************************************************************************
// Start the audio measurement.
// Query the current FFT noise trace (Y-values) and the frequencies (X-values).
// Query the measurement state (should be RDY).
// *****************************************************************************
INITiate:AUDio:MEAS:ANALog
FETCh:AUDio:MEAS:ANALog:FFTNoise:CURRent?
FETCh:AUDio:MEAS:ANALog:FFTNoise:FREQuency?
FETCh:AUDio:MEAS:ANALog:STATe?
Top